//=============================================================================
// PD_FootStepSound.js
//=============================================================================

/*:
 * @plugindesc Add to sound of player character footsteps.
 * @author Shio_inu
 *
 * @help 面倒なので誰か代わりに翻訳して。
 * last update : 29th Dec 2015 v1.0
 *
 * @param File Name
 * @desc ファイル名です。「ここに入力したファイル名+地形タグ」のファイルが再生されます。
 * @default foot_
 */

/*:ja
 * @plugindesc プレイヤーの移動に合わせて足音を再生するプラグインです。
 * @author しおいぬ
 *
 * @help 地形タグによって再生される足音が変化します。
 * last update : 2015/12/29 v1.0
 *
 * @param File Name
 * @desc ファイル名です。「ここに入力したファイル名+地形タグ」のファイルが再生されます。
 * @default foot_
 */
(function(){

    var parameters = PluginManager.parameters('PD_FootStepSound');
    var fileName = String(parameters['File Name'] || "foot_");


    var updatePlayer = Game_Player.prototype.update;
    Game_Player.prototype.update = function(sceneActive) {
        updatePlayer.call(this, sceneActive);
        

        if(!this._prevpattern){
            this._prevpattern = this.pattern();
        }

        if(this._prevpattern != this.pattern() && !this.isInVehicle()){
            var id = $gameMap.terrainTag(this._x, this._y);
			if($gameSwitches.value(SWITCH_FOOTSTEPS_SE_OFF_ID)) {
				
			}
            else if(this.pattern() != 1) {
                var seObj = {"name":fileName + id,"volume":90,"pitch":100 + (10 * this.pattern()),"pan":0};
                AudioManager.playSe(seObj);
            }
            
        }

        this._prevpattern = this.pattern();
    };
})();