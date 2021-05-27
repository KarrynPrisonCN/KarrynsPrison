﻿//=============================================================================
// TMVplugin - 移動機能拡張
// 作者: tomoaky (http://hikimoki.sakura.ne.jp/)
// Version: 1.3
// 最終更新日: 2016/07/04
//=============================================================================

/*:
 * @plugindesc 壁衝突音やリージョンによる通行設定などの機能を追加します。
 * 
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param passableRegionId
 * @desc タイルに関係なく通行を可能にするリージョン番号
 * 初期値: 251
 * @default 251
 *
 * @param dontPassRegionId
 * @desc タイルに関係なく通行を不可にするリージョン番号
 * 初期値: 252
 * @default 252
 *
 * @param seKnockWall
 * @desc 壁衝突効果音
 * 初期値: <name:Blow1><volume:90><pitch:100>
 * @default <name:Blow1><volume:90><pitch:100>
 *
 * @param knockWallPan
 * @desc 壁衝突効果音の左右バランス
 * 初期値: 75
 * @default 75
 *
 * @param knockWallInterval
 * @desc 壁衝突効果音の再生間隔（フレーム数）
 * 初期値: 30
 * @default 30
 *
 * @param turnKeyCode
 * @desc その場で向き変更に使うキー
 * 初期値: 83
 * @default 83
 *
 * @param movableRegion1
 * @desc イベントの移動可能リージョンタイプ設定１番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion2
 * @desc イベントの移動可能リージョンタイプ設定２番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion3
 * @desc イベントの移動可能リージョンタイプ設定３番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion4
 * @desc イベントの移動可能リージョンタイプ設定４番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion5
 * @desc イベントの移動可能リージョンタイプ設定５番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion6
 * @desc イベントの移動可能リージョンタイプ設定６番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion7
 * @desc イベントの移動可能リージョンタイプ設定７番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion8
 * @desc イベントの移動可能リージョンタイプ設定８番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion9
 * @desc イベントの移動可能リージョンタイプ設定９番
 * 設定例: 1,2,3
 * @default 
 *
 * @param movableRegion10
 * @desc イベントの移動可能リージョンタイプ設定１０番
 * 設定例: 1,2,3
 * @default 
 *
 * @help
 * 使い方:
 *   Ｓキーを押しながら方向キーを押すと、移動せずにプレイヤーの向きだけを
 *   変えることができます。マウス（タップ）操作の場合はプレイヤーがいる場所
 *   をクリックすることで、時計回りに９０度回転します。
 *
 *   その場で移動せずに向きを変更する機能で使用するキーは turnKeyCode の値を
 *   変更することで設定できます。65 ならＡ、66 ならＢ、とアルファベットが
 *   順に並んでいます、ＸやＺなど他の機能に割り当てられていないキーを設定して
 *   ください。
 *
 *   メモ欄タグを使って、イベントごとに移動可能なリージョンを変更できます。
 *   プラグインパラメータで移動可能リージョンタイプをカスタマイズしてから
 *   利用してください。
 *   たとえば movableRegion1 の値を 1,2,3 にして、イベントのメモ欄に
 *   <movableRegion:1> というタグを書いた場合、そのイベントはリージョンが
 *   １～３番の場所のみ移動できるようになります。
 *
 *
 * メモ欄タグ（イベント）
 *   <movableRegion:1>
 *     移動可能リージョンタイプを１番に設定する
 *
 *   <stepSwitchOnA:64>
 *     イベントが移動してリージョン６４番を踏むとセルフスイッチＡをオン
 *     Ａ以外のセルフスイッチを使用する場合は stepSwitchOnB のようにして
 *     ください。
 *
 *   <stepSwitchOffB:65>
 *     イベントが移動してリージョン６５番を踏むとセルフスイッチＢをオフ
 *
 *
 * プラグインコマンド:
 *   regionLocate 3 20
 *     ３番のイベントをリージョン２０番が設定されている座標のどこかへ場所移動
 *     させます。
 *     イベント番号が 0 ならコマンドを実行したイベント自体、-1 ならプレイヤー
 *     を対象とします。
 * 
 * 
 */

var Imported = Imported || {};
Imported.TMMoveEx = true;

(function() {

  var parameters = PluginManager.parameters('TMMoveEx');
  var passableRegionId  = +parameters['passableRegionId'];
  var dontPassRegionId  = +parameters['dontPassRegionId'];
  var knockWallInterval = +parameters['knockWallInterval'];
  var knockWallPan      = +parameters['knockWallPan'];
  var re = /<name:(.+?)><volume:(.+?)><pitch:(.+?)>/;
  var match = re.exec(parameters['seKnockWall']);
  if (match) {
    var seKnockWall = {};
    seKnockWall.name   = match[1];
    seKnockWall.volume = +match[2];
    seKnockWall.pitch  = +match[3];
  } else {
    var seKnockWall = {name:'Blow1', volume:90, pitch:100};
  }
  Input.keyMapper[+parameters['turnKeyCode']] = 'turn';
  var movableRegionType = [];
  for (var i = 1; i <= 10; i++) {
    var key = 'movableRegion' + i;
    movableRegionType[i] = parameters[key].split(',');
  }
  movableRegionType[100] = parameters[key].split(',');

  //-----------------------------------------------------------------------------
  // Game_Map
  //

  var _Game_Map_checkPassage = Game_Map.prototype.checkPassage;
  Game_Map.prototype.checkPassage = function(x, y, bit) {
    var regionId = this.regionId(x, y);
    if (regionId === passableRegionId) return true;
    if (regionId === dontPassRegionId) return false;
    return _Game_Map_checkPassage.call(this, x, y, bit);
  };

  Game_Map.prototype.regionPoints = function(regionId) {
    var result = [];
    for (var x = 0; x < this.width(); x++) {
      for (var y = 0; y < this.height(); y++) {
        if (this.regionId(x, y) === regionId &&
            this.eventIdXy(x, y) === 0) {
          result.push(new Point(x, y));
        }
      }
    }
    return result;
  };
  
  Game_Map.prototype.regionPointRandom = function(regionId) {
    var regionPoints = this.regionPoints(regionId);
    if (regionPoints.length > 0) {
      return regionPoints[Math.randomInt(regionPoints.length)];
    }
    return null;
  };

  //-----------------------------------------------------------------------------
  // Game_Player
  //

  var _Game_Player_moveStraight = Game_Player.prototype.moveStraight;
  Game_Player.prototype.moveStraight = function(d) {
    _Game_Player_moveStraight.call(this, d);
    if (!this.isMovementSucceeded()) {
      var x2 = $gameMap.roundXWithDirection(this.x, d);
      var y2 = $gameMap.roundYWithDirection(this.y, d);
      if (this.isNormal() && ($gameMap.boat().pos(x2, y2) || $gameMap.ship().pos(x2, y2))) {
        return;
      }
      if (this.isInVehicle() && this.vehicle().isLandOk(this.x, this.y, this.direction())) {
        return;
      }
      var d2 = this.reverseDir(d);
      if (!$gameMap.isPassable(this.x, this.y, d) || !$gameMap.isPassable(x2, y2, d2)) {
        this._knockWallCount = this._knockWallCount === undefined ? 0 : this._knockWallCount;
        if (this._knockWallCount + knockWallInterval <= Graphics.frameCount ||
            this._lastKnockWallDir !== d) {
          if (d === 4) {
            seKnockWall.pan = -knockWallPan;
          } else if (d === 6) {
            seKnockWall.pan = knockWallPan;
          } else {
            seKnockWall.pan = 0;
          }
          AudioManager.playSe(seKnockWall);
          this._knockWallCount = Graphics.frameCount;
          this._lastKnockWallDir = d;
        }
      }
    }
  };

  var _Game_Player_moveByInput = Game_Player.prototype.moveByInput;
  Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
      var direction = this.getInputDirection();
      if (Input.isPressed('turn') && direction > 0) {
        this.setDirection(direction);
        return;
      }
      if (TouchInput.isTriggered() && $gameTemp.isDestinationValid()) {
        var x = $gameTemp.destinationX();
        var y = $gameTemp.destinationY();
        if (this.pos(x, y)) {
          this.turnRight90();
          return;
        }
      }
    }
    _Game_Player_moveByInput.call(this);
  };

  //-----------------------------------------------------------------------------
  // Game_Event
  //

  var _Game_Event_isMapPassable = Game_Event.prototype.isMapPassable;
  Game_Event.prototype.isMapPassable = function(x, y, d) {
    var movableRegion = this.event().meta['movableRegion'];
    if (movableRegion) {
      var x2 = $gameMap.roundXWithDirection(x, d);
      var y2 = $gameMap.roundYWithDirection(y, d);
      var region = $gameMap.regionId(x2, y2);
      return movableRegionType[+movableRegion].indexOf('' + region) >= 0;
    } else {
      return _Game_Event_isMapPassable.call(this, x, y, d);
    }
  };

  var _Game_Event_moveStraight = Game_Event.prototype.moveStraight;
  Game_Event.prototype.moveStraight = function(d) {
    _Game_Event_moveStraight.call(this, d);
    var keys = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < 4; i++) {
      var a = keys[i];
      if (this.event().meta['stepSwitchOn' + a] &&
          this.regionId() === +this.event().meta['stepSwitchOn' + a]) {
        var key = [$gameMap.mapId(), this.eventId(), a];
        $gameSelfSwitches.setValue(key, true);
      } else if (this.event().meta['stepSwitchOff' + a] &&
          this.regionId() === +this.event().meta['stepSwitchOff' + a]) {
        var key = [$gameMap.mapId(), this.eventId(), a];
        $gameSelfSwitches.setValue(key, false);
      }
    }
  };

  //-----------------------------------------------------------------------------
  // Game_Interpreter
  //

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'regionLocate') {
      var character = this.character(+args[0]);
      if (character) {
        var point = $gameMap.regionPointRandom(+args[1]);
        if (point) {
          character.locate(point.x, point.y);
        }
      }
    }
  };
  
})();
