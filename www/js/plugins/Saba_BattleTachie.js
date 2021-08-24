//Modified by Remtairy

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//=============================================================================
// Saba_BattleTachie.js
//=============================================================================
/*:
 * @author Sabakan
 * @plugindesc 戦闘中に立ち絵を表示するプラグインです
 *
 * @param appearX
 * @desc アクターコマンド選択中の x 座標です
 * @default 400
 *
 * @param hiddenX
 * @desc アクターコマンド非選択中の x 座標です
 * @default 900
 *
 * @param speed
 * @desc 立ち絵が移動する時の速度です
 * @default 150
 *
 * @help
 * Ver 2018-07-21 14:22:47
 *
 */
var Saba;
//var Saba = Saba || {}; 
(function (Saba) {
    var BattleTachie;
    (function (BattleTachie) {
        var parameters = PluginManager.parameters('Saba_BattleTachie');
        var appearX = parseInt(parameters['appearX']);
        var hiddenX = parseInt(parameters['hiddenX']);
		//var appearX = $gameSystem.battleTachieAppearX();
        //var hiddenX = $gameSystem.battleTachieHiddenX();
        var speed = parseInt(parameters['speed']);
        var _Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
        //Scene_Battle.prototype.createActorCommandWindow = function () {
        //    this._tachieSprite = new TachieSprite();
        //    this._spriteset.addChild(this._tachieSprite);
        //    _Scene_Battle_createActorCommandWindow.call(this);
        //    this._tachieSprite.setActorCommandWindow(this._actorCommandWindow);
        //};
		/*
        var _Scene_Battle_create = Scene_Battle.prototype.create;
        Scene_Battle.prototype.create = function () {
            _Scene_Battle_create.call(this);
            for (var i = 0, actors = $gameParty.battleMembers(); i < actors.length; i++) {
                actors[i].preloadTachie();
				if(actors[i].actorId()===ACTOR_KARRYN_ID) {
					this._tachieSprite = new TachieSprite(); 
					if($gameSystem.drawEnemiesAboveBattleTachie()) { 
						this._spriteset._battleField.addChild(this._tachieSprite);
					}
					else {
						this._spriteset.addChild(this._tachieSprite);
					}
					this._tachieSprite.setActorRemId(ACTOR_KARRYN_ID);
				}
            }
			if($gameSystem.drawEnemiesAboveBattleTachie()) { 
				this._spriteset.createEnemies();
			}
        };
		*/
		var _Spriteset_Battle_createActors = Spriteset_Battle.prototype.createActors;
		Spriteset_Battle.prototype.createActors = function() {
			_Spriteset_Battle_createActors.call(this);

			let actor = $gameActors.actor(ACTOR_KARRYN_ID);
			actor.preloadTachie();
			this._tachieSprite = new TachieSprite(); 
			this._battleField.addChild(this._tachieSprite);
			this._tachieSprite.setActorRemId(ACTOR_KARRYN_ID);
		};
        var TachieSprite = (function (_super) {
            __extends(TachieSprite, _super);
            function TachieSprite() {
                var bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
                _super.call(this);
                //this.hiddenX = hiddenX;
                //this.appearedX = appearX;
				this.appearedX = $gameSystem.battleTachieAppearX();
				this.hiddenX = $gameSystem.battleTachieHiddenX();
				this.currentShowingX = this.hiddenX;
                this.speed = speed;
                this.bitmap = bitmap;
                this.x = this.currentShowingX;
				//this.y = Graphics.boxHeight;
				this.y = 0;
				this._actorRemId = 0;
				this._drawnOnce = false;
				//this.anchor.y = 1;
				this.anchor.y = 0;
				this._baseScale = new Point(1, 1);
				//this._breathMax = Math.randomInt(90) + 90;
				//this._breathCount = Math.randomInt(this._breathMax);
            }
            TachieSprite.prototype.setActorCommandWindow = function (commandWindow) {
                this._commandWindow = commandWindow;
            };
			TachieSprite.prototype.setActorRemId = function (value) {
                this._actorRemId = value;
				this.hidden = false;
            };
            TachieSprite.prototype.update = function () {				
                this.moveToTargetPosition();
				Sprite.prototype.update.call(this);
                this.updateTachie();
            };
            TachieSprite.prototype.updateTachie = function () {
				let id = ACTOR_KARRYN_ID;
                if ((!this._commandWindow || !this._commandWindow._actor) && this._actorRemId == 0) 
                    return;
                
				if(this._actorRemId == 0) {
					id = this._commandWindow._actor.actorId();
					let turnCount = $gameActors.actor(id).turnCount();
					if(turnCount > 0) {
						this.bitmap.clear();
						this.drawTachie(id, this.bitmap);
					}
					
					if (id != this.actorId) {
						if (this.currentShowingX == this.hiddenX) {
							this.actorId = id;
							this.bitmap.clear();
							this.drawTachie(id, this.bitmap);
						}
						else if (this.currentShowingX == this.appearedX) {
							this.hidden = true;
						}
					}
					else {
						if (!this._commandWindow || !this._commandWindow.active) {
							this.hidden = true;
						}
						else {
							this.hidden = false;
							this.bitmap.clear();
							this.drawTachie(id, this.bitmap);
						}
					}
				}
				//else if ($gameActors.actor(id).isDirty() || !this._drawnOnce || $gameActors.actor(id)._tachieCutInPosX > REM_CUT_IN_MAX_X){
				//else if ($gameActors.actor(id).isDirty() || !this._drawnOnce || $gameActors.actor(id)._tachieCutIn) {
				//($gameActors.actor(id)._tachieCutInDirectionX > 0 && $gameActors.actor(id)._tachieCutInPosX < $gameActors.actor(id)._tachieCutInGoalX) || 
				//($gameActors.actor(id)._tachieCutInDirectionX < 0 && $gameActors.actor(id)._tachieCutInPosX > $gameActors.actor(id)._tachieCutInGoalX) ||
				//($gameActors.actor(id)._tachieCutInDirectionY > 0 && $gameActors.actor(id)._tachieCutInPosY < $gameActors.actor(id)._tachieCutInGoalY) || 
				//($gameActors.actor(id)._tachieCutInDirectionY < 0 && $gameActors.actor(id)._tachieCutInPosY > $gameActors.actor(id)._tachieCutInGoalY)){
					//id = this._actorRemId;
				else if($gameActors.actor(id).isDirty() || !this._drawnOnce) {
					if(!$gameActors.actor(id).allowTachieUpdate() || !$gameActors.actor(id).allowTachieEmoteUpdate() || !BattleManager.isTachieUpdateAllowed()) 
						return;
					
					$gameActors.actor(id).preloadTachie();
					while(!ImageManager.isReady()) {
						return;
					}
					this.bitmap.clear();
					//$gameActors.actor(id).setDirty();
					this.drawTachie(id, this.bitmap);
					this._drawnOnce = true;
					//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
					//this.x = this.currentShowingX + offsetArray[0];
					//this.y = offsetArray[1];
					this.x = this.currentShowingX;
					this.y = 0;
				}
				
				//this.updateScaleEx(id);
				
            };
			TachieSprite.prototype.updateScaleEx = function(id) {
				this._breathCount += $gameActors.actor(id).getBreathSpeed();
				if (this._breathCount >= this._breathMax) {
				  this._breathMax = Math.randomInt(90) + 90;
				  this._breathCount = 0;
				}
				var scaleX = this._baseScale.x;
				var scaleY = this._baseScale.y;
				var bh = VAR_BREATH_H;
				scaleY += Math.sin(Math.PI * this._breathCount / (this._breathMax / 2)) * bh;
				this.scale.set(scaleX, scaleY);
			  };
            TachieSprite.prototype.moveToTargetPosition = function () {
				let id = ACTOR_KARRYN_ID;
                if (this.hidden) {
                    if (Math.abs(this.hiddenX - this.currentShowingX) < this.speed) {
                        this.currentShowingX = this.hiddenX;
						//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
						//this.x = this.currentShowingX + offsetArray[0];
						//this.y = offsetArray[1];
						this.x = this.currentShowingX;
						this.y = 0;
                    }
                    else if (this.hiddenX > this.currentShowingX) {
                        this.currentShowingX += this.speed;
						//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
						//this.x = this.currentShowingX + offsetArray[0];
						//this.y = offsetArray[1];
						this.x = this.currentShowingX;
						this.y = 0;
                    }
                    else {
                        this.currentShowingX -= this.speed;
						//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
						//this.x = this.currentShowingX + offsetArray[0];
						//this.y = offsetArray[1];
						this.x = this.currentShowingX;
						this.y = 0;
                    }
                }
                else {
                    if (Math.abs(this.appearedX - this.currentShowingX) < this.speed) {
                        this.currentShowingX = this.appearedX;
						//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
						//this.x = this.currentShowingX + offsetArray[0];
						//this.y = offsetArray[1];
						this.x = this.currentShowingX;
						this.y = 0;
                    }
                    else if (this.appearedX > this.currentShowingX) {
                        this.currentShowingX += this.speed;
						//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
						//this.x = this.currentShowingX + offsetArray[0];
						//this.y = offsetArray[1];
						this.x = this.currentShowingX;
						this.y = 0;
                    }
                    else {
                        this.currentShowingX -= this.speed;
						//let offsetArray = $gameActors.actor(id).getBattlePoseOffetArray();
						//this.x = this.currentShowingX + offsetArray[0];
						//this.y = offsetArray[1];
						this.x = this.currentShowingX;
						this.y = 0;
                    }
                }
            };
            return TachieSprite;
        }(Sprite_Base));
    })(BattleTachie = Saba.BattleTachie || (Saba.BattleTachie = {}));
})(Saba || (Saba = {}));
