//=============================================================================
// メニュー画面 
//=============================================================================
 
    Window_MenuCommand.prototype.maxCols = function() {
        return 4;
    };

    Window_MenuCommand.prototype.numVisibleRows = function() {
        return 2;
    };
    
     Scene_Menu.prototype.commandPersonal = function() {
        this._statusWindow.setFormationMode(false);
        switch (this._commandWindow.currentSymbol()) {
        case 'skill':
            SceneManager.push(Scene_Skill);
            break;
        case 'equip':
            SceneManager.push(Scene_Equip);
            break;
        case 'status':
            SceneManager.push(Scene_Status);
            break;
          }
    };
 
//メニューウィンドウ

      
Yanfly.MMM.Scene_Menu_createLifeWindow =
    Scene_Menu.prototype.createLifeWindow;
    Scene_Menu.prototype.createLifeWindow = function() {
            
    this._lifeWindow = new Window_Base(920,520,300,270);
    this.addWindow(this._lifeWindow);
    
    var Actor1 = $gameActors.actor(1);
    var lifeWin = this._lifeWindow;
    var value1 = this._lifeWindow.textWidth('000');
    var value2 = Actor1.nextRequiredExp();

    lifeWin.drawText("LV: "+Actor1._level, 0,10);
    lifeWin.drawText("HP:", 20,45);
    lifeWin.drawText(Actor1.hp, 67,45, value1, 'right');
    lifeWin.drawText("/", 103,45);
    lifeWin.drawText(Actor1.mhp, 118,45, value1, 'right');
    lifeWin.drawText("MP:", 20,75);
    lifeWin.drawText(Actor1.mp, 67,75, value1, 'right');
    lifeWin.drawText("/", 103,75);
    lifeWin.drawText(Actor1.mmp, 118,75, value1, 'right');
    
	//Japanese
	/*
    lifeWin.drawText("攻撃力: "+Actor1.param(2), 20,125);
    lifeWin.drawText("防御力: "+Actor1.param(3), 20,160);
	
	if(Actor1._level < 69 )
	{
		lifeWin.drawText("次のLVまで: "+value2, 20,195);
	}
    else {
		lifeWin.drawText("次のLVまで: MAX", 20,195);
	}

*/
	//English
	
	lifeWin.drawText("Attack : "+Actor1.param(2), 20,125);
    lifeWin.drawText("Defense: "+Actor1.param(3), 20,160);
	
	if(Actor1._level < 80 )
	{
		lifeWin.drawText("Next LV: "+value2+" XP", 20,195);
	}
    else {
		lifeWin.drawText("Next LV: MAX", 20,195);
	}
	
	
	if($gameSwitches.value(197)) {	
		if($gameSwitches.value(244)) {
			var tiara = ImageManager.loadPicture('tiara2');
			var tiaraSprite = new Sprite();
			tiaraSprite.x = -12;
			//Japanese y
			//tiaraSprite.y = -60;
			//English y
			tiaraSprite.y = -67;
			
			tiaraSprite.bitmap = ImageManager.loadPicture('tiara2');
			lifeWin.addChild(tiaraSprite);
		}
		else {
			var tiara = ImageManager.loadPicture('tiara');
			var tiaraSprite = new Sprite();
			tiaraSprite.x = -12;
			//Japanese y
			//tiaraSprite.y = -60;
			//English y
			tiaraSprite.y = -67;
			tiaraSprite.bitmap = ImageManager.loadPicture('tiara');

		}
		
		lifeWin.addChild(tiaraSprite);

	}
};

//エロ体験

Yanfly.MMM.Scene_Menu_createHentaiWindow =
    Scene_Menu.prototype.createHentaiWindow;
    Scene_Menu.prototype.createHentaiWindow = function() {
  
    this._hentaiWindow = new Window_Base(0,107,850,622);
    this.addWindow(this._hentaiWindow);

    var hWindow = this._hentaiWindow;
    var valueWidth = hWindow.textWidth('0000');
    var hasOrb = $gameParty.hasItem($dataItems[115]);

    //hTextHeight is y position of each menu item
    var hTextHeight = [ 95, 120, 145, 170, 195, 221, 247, 272, 297, 323, 348, 374, 399, 424, 450, 475, 500, 526 ];
    //hTextWidth is the x position of 
    //hTextWidth[0]= Current H value
    //hTextWidth[1]= Position of the '/'
    //hTextWidth[2]= Next H requirement
    //hTextWidth[3]= bitch level
    var hTextWidth = [ 235, 250, 290, 235 ];

    //hValues is the string that will hold the current value of each H 
    var hValues = [];
    hValues.length = 18;

    //hValueID is what each menu item starting top to bottom correlates to the ingame variable key
	//Japanese order
    //var hValueID = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ];
	//English order
	var hValueID = [ 1, 2, 3, 10, 8, 9, 16, 5, 7, 6, 12, 4, 13, 15, 14, 11, 17, 18 ];

    /*
    	In order of the ingame variable key
    	1 絶頂 2 6 12 20 35 50 69 85 99 120 145 170 200
    	2 フェラ 1 3 8 14 20 30 42 54 69 99
    	3 パイズリ 1 2 4 7 12 25 38 50 69 99
    	4 露出 1 3 5 10 17 25 32 40 50
    	5 アナル 1 2 6 11 18 30 42 55 69 99
    	6 オナニー 1 3 6 10 17 24 32 42 55 69
    	7 おしっこ 1 3 5 10 17 25 32 40 50
    	8 精飲 1 3 6 12 20 30 42 55 69 85 99 125
    	9 ぶっかけ 3 5 9 14 20 28 40 52 69 99
    	10 ケツ舐め 1 2 5 10 16 24 34 48 60 75
    	11 売春 1 2 4 8 14 20 30 42 54 69 85 99
    	12 のぞき 1 3 6 10 17 24 32 42 55 69
    	13 レズプレイ 1 2 4 8 13 19 27 36 45 58 69 99
    	14 輪姦 1 4 8 15 22 30 42 55 69 99
    	15 逆レイプ 1 4 10 15 25 40 52 69
    	16 中出し 1 2 4 10 18 30 42 55 69 85 99 125
    	17 妊娠 1 2 4 7 10 14 18 24 30 36 42 50
    */

	//HValuesReq is a double array holding all the H requirements
	//HValuesReq[x][y]
	//x = Ingame variable key
	//y = H Requirement
    var hValuesReq = [ 0 ];
    for (i = 1; i < hValues.length; i++) { hValuesReq[i] = i; }

    hValuesReq[1] = [ 2, 6, 12, 20, 35, 50, 69, 85, 99, 120, 145, 170, 200 ];
	hValuesReq[2] = [ 1, 3, 8, 14, 20, 30, 42, 54, 69, 99 ];
	hValuesReq[3] = [ 1, 2, 4, 7, 12, 25, 38, 50, 69, 99 ];
	hValuesReq[4] = [ 1, 3, 5, 10, 17, 25, 32, 40, 50 ];
	hValuesReq[5] = [ 1, 2, 6, 11, 18, 30, 42, 55, 69, 99 ];
	hValuesReq[6] = [ 1, 3, 6, 10, 17, 24, 32, 42, 55, 69 ];
	hValuesReq[7] = [ 1, 3, 5, 10, 17, 25, 32, 40, 50 ];
	hValuesReq[8] = [ 1, 3, 6, 12, 20, 30, 42, 55, 69, 85, 99, 125 ];
	hValuesReq[9] = [ 3, 5, 9 ,14, 20, 28, 40, 52, 69, 99 ];
    hValuesReq[10] = [ 1, 2, 5, 10, 16, 24, 34, 48, 60, 75 ];
	hValuesReq[11] = [ 1, 2, 4, 8, 14, 20, 30, 42, 54, 69, 85, 99 ];
	hValuesReq[12] = [ 1, 3, 6 ,10, 17, 24, 32, 42, 55, 69 ];
	hValuesReq[13] = [ 1, 2, 4, 8, 13, 19, 27, 36, 45, 58, 69, 99 ];
	hValuesReq[14] = [ 1, 4, 8, 15, 22, 30, 42, 55, 69, 99 ];
	hValuesReq[15] = [ 1, 4, 10, 15, 25, 40, 52, 69 ];
	hValuesReq[16] = [ 1, 2, 4, 10, 18, 30, 42, 55, 69, 85, 99, 125 ];
	hValuesReq[17] = [ 1, 2, 4, 7, 10, 14, 18, 24, 30, 36, 42, 50 ];

	for (i = 0; i < hValues.length; i++) {
    	if(i===17) {
        	//the color of the bitch level
        	hWindow.changeTextColor('rgba(255, 76, 130, 1)');
        	hValues[i] = "" + $gameVariables.value((hValueID[i])) + "";
        	hWindow.drawText(hValues[i], hTextWidth[3], hTextHeight[i], valueWidth, 'right');
        	hWindow.resetTextColor();
    	}
    	else {
        	hValues[i] = "" + $gameVariables.value((hValueID[i])) + "";
        
        	hWindow.drawText(hValues[i], hTextWidth[0], hTextHeight[i], valueWidth, 'right');
        
        	if(hasOrb) { 
            	hWindow.drawText("/", hTextWidth[1], hTextHeight[i], valueWidth, 'right');
            
            	//the color of the H requirements
            	hWindow.changeTextColor('rgba(255, 153, 229, 1)');
            
            	var hReq = 0;

            	for(j = 0; j < hValuesReq[hValueID[i]].length; j++) {
                	if(hValuesReq[hValueID[i]][j] > $gameVariables.value((hValueID[i]))) {
                    	hReq = hValuesReq[hValueID[i]][j];
                    	break;
                	}
            	}
            
            	var hReqText = "";
				var reqWidth = hTextWidth[2];
				if(hReq === 0) {    
					hReqText = "♥";
					reqWidth += 0;		
				}
				else {    hReqText = "" + hReq;  }
				hWindow.drawText(hReqText, reqWidth, hTextHeight[i], valueWidth, 'right');
				hWindow.resetTextColor();
        	} 
    	}
    
	}
    
//素材    

	var mTextWidth = 655;

    //mCount is the string that will hold the current count of each Material 
    var mCount = [];
    mCount.length = 18;

    //mCountID is what each menu item starting top to bottom correlates to the ingame variable key
	//Japanese order
    //var mCountID = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ];
	//English order
	var mCountID = [ 1, 2, 3, 9, 11, 4, 5, 10, 17, 6, 7, 8, 12, 13, 14, 15, 16, 18 ];
    
	for (i = 0; i < mCount.length; i++) {
		mCount[i] = "" + $gameParty.numItems($dataItems[mCountID[i]]) + "";
		hWindow.drawText(mCount[i], mTextWidth, hTextHeight[i], valueWidth, 'right');
	}
	
	delete hWindow;
};


//=============================================================================
// メニュー背景
//=============================================================================

(function() {
    
        var _Scene_Menu_createBackground = Scene_Menu.prototype.createBackground;
        Scene_Menu.prototype.createBackground = function(){
            _Scene_Menu_createBackground.call(this);
    
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture('menu1_status');
            this.addChild(this._backgroundSprite);    
        }
     
    })();


//=============================================================================
// バトルコマンド
//=============================================================================

Window_ActorCommand.prototype.maxCols = function() {
        return 2;
    };

//=============================================================================
// 着替え
//=============================================================================

    Window_EventItem.prototype.maxCols = function() {
        return 1;
    };

//=============================================================================
// 移動速度
//=============================================================================
  
Game_CharacterBase.prototype.distancePerFrame = function() {
    return Math.pow(2, this.realMoveSpeed()) / 210;
};

//=============================================================================
// メニューぼかし解除
//=============================================================================

SceneManager.snapForBackground = function() {
    this._backgroundBitmap = this.snap();
    //this._backgroundBitmap.blur();
};


//=============================================================================
// アイテム使用時
//=============================================================================

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var x = rect.x + 10;
    var y = rect.y + 0;
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};


//=============================================================================
// スクロール文章
//=============================================================================


(function () {
	Window_ScrollText.prototype.refresh = function() {
		var textState = { index: 0 };
		textState.text = this.convertEscapeCharacters(this._text);
		this.resetFontSettings();
		this._allTextHeight = this.calcTextHeight(textState, true);
		this.createContents();
		this.move(0,0,this.width,this._allTextHeight + this.standardPadding() * 2)
		this._windowContentsSprite.y = Graphics.boxHeight;
		this.drawTextEx(this._text, this.textPadding(), 1);
	};
	
	Window_ScrollText.prototype.updateMessage = function() {
		this._windowContentsSprite.y -= this.scrollSpeed();
		if (this._windowContentsSprite.y <= -this.contents.height) {
			this.terminateMessage();
		}
	};
})();


//=============================================================================
// バトルのステートアイコン位置
//=============================================================================

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
//    this.drawActorName(actor, rect.x + 0, rect.y, 150);
    this.drawActorIcons(actor, rect.x + 635, rect.y, rect.width - 156);
};

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x - 400, rect.y, 360);
    this.drawActorMp(actor, rect.x - 20,  rect.y, 160);
};



//=============================================================================
// バトル表情
//=============================================================================

  var _Game_Actor_performDamage = Game_Actor.prototype.performDamage;
  Game_Actor.prototype.performDamage = function() {
    _Game_Actor_performDamage.call(this);
     $gameScreen.showPicture(2,'battle_face_damage',0,0,636,100,100,255,0);
};
          
  var _Game_Actor_performAction = Game_Actor.prototype.performAction;
  Game_Actor.prototype.performAction = function(action) {
    _Game_Actor_performAction.call(this, action);
    if (action.isAttack()) {
     $gameScreen.showPicture(2,'battle_face_attack',0,0,636,100,100,255,0);
    } else if (action.isMagicSkill() && action.isHpRecover()) {
     $gameScreen.showPicture(2,'battle_face_heal',0,0,636,100,100,255,0);
    } else if (action.isMagicSkill() && action.isForFriend()) {
     $gameScreen.showPicture(2,'battle_face_buff',0,0,636,100,100,255,0);
    } else if (action.isMagicSkill()) {
     $gameScreen.showPicture(2,'battle_face_skill',0,0,636,100,100,255,0);
    } else if (action.isSkill() && !action.isGuard()) {
     $gameScreen.showPicture(2,'battle_face_skill',0,0,636,100,100,255,0);
    }
  };

  var _BattleManager_processVictory = BattleManager.processVictory;
  BattleManager.processVictory = function() {
   $gameScreen.showPicture(3,'battle_face_win',0,0,636,100,100,255,0);
    _BattleManager_processVictory.call(this);
  };

  var _BattleManager_endTurn = BattleManager.endTurn;
  BattleManager.endTurn = function() { 
     $gameScreen.erasePicture(2);
    _BattleManager_endTurn.call(this);
  };

  var _Game_Actor_performCollapse = Game_Actor.prototype.performCollapse;
  Game_Actor.prototype.performCollapse = function() {
    _Game_Actor_performCollapse.call(this);
     $gameScreen.showPicture(3,'battle_face_lose',0,0,636,100,100,255,0);
};

//=============================================================================
// 経験値1.5倍
//=============================================================================

BattleManager.makeRewards = function() {
    this._rewards = {};

	var goldMultiplier = 1;
	if ($gameSwitches.value(203) === true) {
		goldMultiplier += 0.5;
	}
	if ($gameActors.actor(1).equips()[1]) {
		if($gameActors.actor(1).equips()[1].id == 1 ) {
			goldMultiplier += 0.5;
		}
	}
	
    this._rewards.gold = Math.floor($gameTroop.goldTotal() * goldMultiplier);
	
	var expMultiplier = 1;
	
    if ($gameSwitches.value(204) === true) {
        expMultiplier += 0.5;
    }
	if ($gameActors.actor(1).equips()[2]) {
        if($gameActors.actor(1).equips()[2].id == 41 ) {
			expMultiplier += 0.25;
		}
    }
	
	this._rewards.exp = Math.floor($gameTroop.expTotal() * expMultiplier);
	
    this._rewards.items = $gameTroop.makeDropItems();
};


  
//=============================================================================
// エンディング→コンティニュースイッチ
//=============================================================================

(function() {

    var _Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
    Scene_Load.prototype.onLoadSuccess = function() {
        _Scene_Load_onLoadSuccess.call(this);
        // エンディングセーブ直前に入れておくスイッチ
        if($gameSwitches.value(200)){
        // コンティニュー後自動的に入るスイッチ
        $gameSwitches.setValue(199, true);
        }
    };

})();

//-----------------------------------------------------------------------------
// Window_EquipItem


Window_EquipItem.prototype.initialize = function(x, y, width, height) {
    Window_ItemList.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._slotId = 0;
	this._category = 'equipList';
};

Window_ItemList.prototype.maxCols = function() {
    if(this._category === 'equipList') {
		return 3;
	}
	else {
		return 2;
	}
};

Window_ItemList.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
		if(this._category === 'equipList') {
			this.drawItemName(item, rect.x, rect.y, rect.width);
		}
		else {
			this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
			this.drawItemNumber(item, rect.x, rect.y, rect.width);
		}
        this.changePaintOpacity(1);
    }
};

//--------Guard

Game_Action.prototype.applyGuard = function(damage, target) {
    var guardMultipler = 2;
	
	if ($gameActors.actor(1).equips()[1]) {
		if($gameActors.actor(1).equips()[1].id == 12 ) {
			guardMultipler = 3;
		}
	}
	
	return damage / (damage > 0 && target.isGuard() ? guardMultipler * target.grd : 1);
};

//--------Disable F5

SceneManager.onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
        case 116:   // F5
            if (Utils.isNwjs()) {
                //location.reload();
            }
            break;
        case 119:   // F8
            if (Utils.isNwjs() && Utils.isOptionValid('test')) {
                require('nw.gui').Window.get().showDevTools();
            }
            break;
        }
    }
};

//=============================================================================
// Game_Action
//=============================================================================

Game_Action.prototype.makeDamageValue = function(target, critical) {
  var item = this.item();
  var a = this.subject();
  var b = target;
  var user = this.subject();
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var baseDamage = this.evalDamageFormula(target);
  var value = baseDamage;
  try {
    eval(Yanfly.DMG.DamageFlow);
  } catch (e) {
    Yanfly.Util.displayError(e, Yanfly.DMG.DamageFlow, 'DAMAGE FLOW ERROR');
  }
  
  if(value > 0 && value < 0.99) {
	value = 1;
  }
  if(critical &&  value < 1.5 ) {
	value = 2;
  }
  
  return Math.round(value);
};