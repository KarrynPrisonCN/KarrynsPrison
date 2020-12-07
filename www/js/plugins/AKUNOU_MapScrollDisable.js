//=============================================================================
// AKUNON_MapScrollDisable.js
// Version: 0.90R
// ----------------------------------------------------------------------------
// Original author: 河原 つつみ
// 連絡先 ：『アクマの脳髄』http://www.akunou.com/
// Original version: AKUNOU_MapScrollDisable.js 0.90
// v.90R author: Remtairy http://www.patreon.com/remtairy
//=============================================================================

/*:
 * @plugindesc プレイヤーキャラの移動に同期した画面スクロールを、一時的に無効にするプラグインコマンドを追加します。
 * @author Remtairy
 * @help
 * プラグインコマンド:
 *   MapScrollDisable 0 # プレイヤー移動によるマップスクロールを許可(初期値)
 *   MapScrollDisable 1 # プレイヤー移動によるマップスクロールを禁止
 *   MapScrollDisable 2 # プレイヤー移動によるXマップスクロールを禁止
 *   MapScrollDisable 3 # プレイヤー移動によるYマップスクロールを禁止
 */

(function() {

    //-------------------------------------------------------------------------
    // Game_System
    //-------------------------------------------------------------------------

    var akunou3_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        akunou3_initialize.call(this);
        this._mapscrollEnabled = 0;
    }

    Game_System.prototype.ismapscrollEnabled = function() {
        return this._mapscrollEnabled == 0;
    };

	Game_System.prototype.isXMapScrollDisabled = function() {
        return (this._mapscrollEnabled == 2 || this._mapscrollEnabled == 1);
    };
	
	Game_System.prototype.isYMapScrollDisabled = function() {
        return (this._mapscrollEnabled == 3 || this._mapscrollEnabled == 1);
    };
	
    Game_System.prototype.disableAllMapScroll = function() {
        this._mapscrollEnabled = 1;
    };
	
	Game_System.prototype.disableXMapScroll = function() {
        this._mapscrollEnabled = 2;
    };
	
	Game_System.prototype.disableYMapScroll = function() {
        this._mapscrollEnabled = 3;
    };

    Game_System.prototype.enableMapScroll = function() {
        this._mapscrollEnabled = 0;
    };
    
    //-------------------------------------------------------------------------
    // Game_Player
    //-------------------------------------------------------------------------
    
	Game_Map.prototype.scrollDown = function(distance) {
		if($gameSystem.isYMapScrollDisabled() === true) { return; }
		if (this.isLoopVertical()) {
			this._displayY += distance;
			this._displayY %= $dataMap.height;
			if (this._parallaxLoopY) {
				this._parallaxY += distance;
			}
		} else if (this.height() >= this.screenTileY()) {
			var lastY = this._displayY;
			this._displayY = Math.min(this._displayY + distance,
				this.height() - this.screenTileY());
			this._parallaxY += this._displayY - lastY;
		}
	};

	Game_Map.prototype.scrollLeft = function(distance) {
		if($gameSystem.isXMapScrollDisabled() === true) { return; }
		if (this.isLoopHorizontal()) {
			this._displayX += $dataMap.width - distance;
			this._displayX %= $dataMap.width;
			if (this._parallaxLoopX) {
				this._parallaxX -= distance;
			}
		} else if (this.width() >= this.screenTileX()) {
			var lastX = this._displayX;
			this._displayX = Math.max(this._displayX - distance, 0);
			this._parallaxX += this._displayX - lastX;
		}
	};


	Game_Map.prototype.scrollRight = function(distance) {
	if($gameSystem.isXMapScrollDisabled() === true) { return; }
		if (this.isLoopHorizontal()) {
			this._displayX += distance;
			this._displayX %= $dataMap.width;
			if (this._parallaxLoopX) {
				this._parallaxX += distance;
			}
		} else if (this.width() >= this.screenTileX()) {
			var lastX = this._displayX;
			this._displayX = Math.min(this._displayX + distance,
				this.width() - this.screenTileX());
			this._parallaxX += this._displayX - lastX;
		}
	};

	Game_Map.prototype.scrollUp = function(distance) {
	if($gameSystem.isYMapScrollDisabled() === true) { return; }
		if (this.isLoopVertical()) {
			this._displayY += $dataMap.height - distance;
			this._displayY %= $dataMap.height;
			if (this._parallaxLoopY) {
				this._parallaxY -= distance;
			}
		} else if (this.height() >= this.screenTileY()) {
			var lastY = this._displayY;
			this._displayY = Math.max(this._displayY - distance, 0);
			this._parallaxY += this._displayY - lastY;
		}
	};	
	
    //-------------------------------------------------------------------------
    // Game_Interpreter
    //-------------------------------------------------------------------------

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'MapScrollDisable') {
            if (Number(args[0]) === 0) {
                $gameSystem.enableMapScroll();
            } 
			else if (Number(args[0]) === 1) {
                $gameSystem.disableAllMapScroll();
            }
			else if (Number(args[0]) === 2) {
                $gameSystem.disableXMapScroll();
            }
			else if (Number(args[0]) === 3) {
                $gameSystem.disableYMapScroll();
            }
			else {
				$gameSystem.enableMapScroll();
			}
			
        }
    };

})();
