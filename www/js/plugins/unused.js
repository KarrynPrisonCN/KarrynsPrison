

//////
// Window BattleLog
///////////////////

//selfanimation code

/*
Remtairy.Misc.Window_BattleLog_showNormalAnimation = Window_BattleLog.prototype.showNormalAnimation;
Window_BattleLog.prototype.showNormalAnimation = function(targets, animationId, mirror) {
	if(BattleManager._action.item().hasTag("SelfAnimationSkill")) {
		Remtairy.Misc.Window_BattleLog_showNormalAnimation.call(this, [BattleManager._subject], animationId, mirror);
	}
	else
	Remtairy.Misc.Window_BattleLog_showNormalAnimation.call(this, targets, animationId, mirror);
};

*/

////stuff from saba battle

		//Remtairy Begin
		/*var _Game_Actor_performDamage = Game_Actor.prototype.performDamage;
		  Game_Actor.prototype.performDamage = function() {
			_Game_Actor_performDamage.call(this);
			this.setFaceId(2);
			this.preloadTachie();
		};*/
		
		/*var Scene_Battle = Scene_Battle.prototype.update;
		Scene_Battle.prototype.update = function() {
			var active = this.isActive();
			$gameTimer.update(active);
			$gameScreen.update();
			this.updateStatusWindow();
			this.updateWindowPositions();
			if (active && !this.isBusy()) {
				this.updateBattleProcess();
			}
			Scene_Base.prototype.update.call(this);
		};*/
		//Remtairy End



//=============================================================================
// バトル表情
//=============================================================================

  /*var _Game_Actor_performDamage = Game_Actor.prototype.performDamage;
  Game_Actor.prototype.performDamage = function() {
    _Game_Actor_performDamage.call(this);
     //$gameScreen.showPicture(2,'battle_face_damage',0,0,636,100,100,255,0);
	//Saba.tachieActorCommnad(this.actor(), "face", 2);
	this.setFaceId(2);
	this.preloadTachie();
	//$gameScreen.update();
	//SceneManager._scene.update();
	//$gameScreen.startFadeOut(55);
	//Saba.BattleTachie.updateTachie();
	//this.setCacheChanged();
};*/
          
 /* var _Game_Actor_performAction = Game_Actor.prototype.performAction;
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

*/


//spriteactor position stuff
			var spc = ((Graphics.boxWidth - 14) / maxSize);
			var px = (((Graphics.boxWidth - 14) / maxSize) / 2) + (((Graphics.boxWidth - 14) / maxSize) * index);
			this._pos_x = Moghunter.bhud_pos_x + (((Graphics.boxWidth - 14) / partySize) / 2) + (((Graphics.boxWidth - 14) / partySize) * index);
			this._pos_y = Moghunter.bhud_pos_y;
			
			
			x = (index+1) * 360 - 140
			y = 640