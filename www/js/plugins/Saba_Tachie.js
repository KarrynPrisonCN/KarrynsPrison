//Modified by Remtairy

const TACHIE_LEFT_CINEMATIC_X = 0;
const TACHIE_LEFT_CHAT_X = -80;
const TACHIE_RIGHT_X = 260;
const TACHIE_TONE_CHANGE_DURATION = 4;

const TACHIE_REM_CUSTOM_WIDTH = 0;
const TACHIE_REM_CUSTOM_HEIGHT = 90;
const TACHIE_LEFT_PIC_ID = 11;
const TACHIE_RIGHT_PIC_ID = 12;

var Saba;
//var Saba = Saba || {}; 
(function (Saba) {
    Saba.applyMyMethods = function (myClass, presetClass, applyConstructor) {
        for (var p in myClass.prototype) {
            if (myClass.prototype.hasOwnProperty(p)) {
                if (p === 'constructor' && !applyConstructor) {
                    continue;
                }
                Object.defineProperty(presetClass.prototype, p, Object.getOwnPropertyDescriptor(myClass.prototype, p));
            }
        }
    };
    Saba.toIntArray = function (list) {
        var ret = [];
        for (var i = 0; i < list.length; i++) {
            ret[i] = parseInt(list[i]);
        }
        return ret;
    };
    Saba.toIntArrayByStr = function (str, minLength) {
        if (minLength === void 0) { minLength = 0; }
        var ret = [];
        for (var i = 0; i < minLength; i++) {
            ret[i] = 0;
        }
        if (!str) {
            return ret;
        }
        var list = str.split(',');
        for (var i = 0; i < list.length; i++) {
            ret[i] = parseInt(list[i]);
            if (isNaN(ret[i])) {
                ret[i] = 0;
            }
        }
        return ret;
    };
    Saba.parseIntValue = function (value, defaultValue) {
        var intNum = parseInt(value);
        if (isNaN(intNum)) {
            return defaultValue;
        }
        else {
            return intNum;
        }
    };
})(Saba || (Saba = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//=============================================================================
// Saba_Tachie.js
//=============================================================================
/*:
 * @author Sabakan
 * @plugindesc 立ち絵を簡単に表示するプラグインです。別途画像が必要です
 * 
 *
 * @param disablesTachieActorIdList
 * @desc 立ち絵を使わないアクターの ID のリストです。(カンマ区切り。 1, 2, 3...)無駄な読み込みをしないための設定です。
 * @default 0
 *
 * @param leftPosX
 * @desc 左側に立つ場合のx座標です
 * @default 0
 *
 * @param rightPosX
 * @desc 右側に立つ場合のx座標です
 * @default 400
 *
 * @param centerPosX
 * @desc 中央に立つ場合のx座標です
 * @default 200
 *
 * @param posY
 * @desc 全員のy座標です
 * @default 0
 *
 * @param actor1offset
 * @desc アクター１のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor2offset
 * @desc アクター２のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor3offset
 * @desc アクター３のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor4offset
 * @desc アクター４のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor5offset
 * @desc アクター５のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor6offset
 * @desc アクター６のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor7offset
 * @desc アクター７のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor8offset
 * @desc アクター８のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor9offset
 * @desc アクター９のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param actor10offset
 * @desc アクター10のキャラのx座標，y座標の補正値です
 * @default 0, 0
 *
 * @param messageNumLines
 * @desc テキストの行数です
 * @default 3
 *
 * @param balloonEnabled
 * @desc ウィンドウに吹き出しをつける場合、trueにします。
 * @default true
 *
 * @param windowColor
 * @desc 各キャラのウィンドウカラーの配列です(0だとデフォルト色)
 * @default 3, 0, 1, 2, 1
 *
 * @param enableFaceLayer
 * @desc actor01_face_1.png などのレイヤーを使う場合 trueにします
 * @default true
 *
 * @param enableBodyLayer
 * @desc actor01_body_1.png などのレイヤーを使う場合 trueにします
 * @default true
 *
 * @param enableHairLayer
 * @desc actor01_hair_1.png などのレイヤーを使う場合 trueにします
 * @default true
 *
 * @param enableOuterBackLayer
 * @desc actor01_out_b_back_1.png などのレイヤーを使う場合 trueにします
 * @default true
 *
 * @param enableOuterMainLayer
 * @desc actor01_out_b_main_1.png などのレイヤーを使う場合 trueにします
 * @default true
 *
 * @param enableOuterFrontLayer
 * @desc actor01_out_b_front_1.png などのレイヤーを使う場合 trueにします
 * @default true
 *
 * @param useTextureAtlas
 * @desc バラバラの画像でなく、一枚のアトラス画像を使うか？ TexturePackerを使い、actor01.png actor01.json などが必要です
 * @default false
 *
 * @param skipKey
 * @desc メッセージスキップに使うボタンです。tab, shift, control, pageup, pagedown などが使えます。
 * @default control
 *
 * @param windowHideKey
 * @desc ウィンドウ消去に使うボタンです。tab, shift, control, pageup, pagedown などが使えます。
 * @default shift
 *
 * @param autoModeKey
 * @desc オートモードのON/OFFに使うボタンです。tab, shift, control, pageup, pagedown などが使えます。
 * @default
 *
 * @param autoModeDelayPerChar
 * @desc オートモードで、1文字ごとに増える待機時間です(ミリ秒)
 * @default 110
 *
 * @param autoModeDelayCommon
 * @desc オートモードで、1ページで必ず待つ時間です(ミリ秒)。全体の待機時間は autoModeDelayPerChar * 文字数 + autoModeDelayCommon です
 * @default 2000
 *
 * @param autoModeMarkFrameNum
 * @desc オートモードであることを示すマークのアニメ枚数です
 * @default 18
 *
 * @param autoModeMarkX
 * @desc オートモードであることを示すマークのx座標です
 * @default 770
 *
 * @param autoModeMarkY
 * @desc オートモードであることを示すマークのy座標です
 * @default 115
 *
 * @param inactiveActorTone
 * @desc 喋っていない方のキャラの Tone です
 * @default -80, -80, -80, 0
 *
 * @param toneChangeDuration
 * @desc 喋っていない方のキャラの Tone を変える時の時間です
 * @default 25
 *
 * @param nameLeft
 * @desc 名前の表示ウィンドウの左の領域です
 * @default 30
 *
 * @param fontSize
 * @desc メッセージウィンドウのフォントサイズです
 * @default 28
 *
 * @param windowMargin
 * @desc メッセージウィンドウの表示位置の空きです。上、右、下、左の順です
 * @default 0, 0, 0, 0
 *
 * @param windowPadding
 * @desc メッセージウィンドウの文字と枠の空きです。上、右、下、左の順です
 * @default 0, 0, 0, 0
 *
 * @param newLineXWithFace
 * @desc 顔グラを表示している時の、テキストの x 座標です
 * @default 168
 *
 * @param messageFacePos
 * @desc 顔グラの表示位置です。x y の順です
 * @default 0, 0
 *
 * @requiredAssets img/system/Tachie_Window1
 * @requiredAssets img/system/Tachie_Window2
 * @requiredAssets img/system/Tachie_Window3
 * @requiredAssets img/system/Tachie_Window4
 * @requiredAssets img/system/Tachie_Window5
 * @requiredAssets img/system/Tachie_Window6
 * @requiredAssets img/system/Tachie_Balloon1
 * @requiredAssets img/system/Tachie_Balloon2
 * @requiredAssets img/system/Tachie_Balloon3
 * @requiredAssets img/system/Tachie_Balloon4
 * @requiredAssets img/system/Tachie_Balloon5
 * @requiredAssets img/system/Tachie_Balloon6
 * @requiredAssets img/system/Tachie_Balloon6
 * @requiredAssets img/system/Tachie_Auto
 * @requiredAssets img/tachie/actor01_01
 * @requiredAssets img/tachie/*
 *
 * @help
 *
 * 左側に立つキャラは、pictureId 11 のピクチャで表示しているので、
 * イベントコマンドで pictureId 11 を対象とすることで操作できます。
 *
 * 同様に、右側に立つキャラは、pictureId 12
 *
 * ■画像の設定方法
 * img/tachie フォルダを使います。
 * ここに、全キャラ分の立ち絵画像を入れてください。
 * ※「未使用ファイルを含まない」には非対応なので、
 * 　手動でコピーしてください。
 *
 * 以下、アクター１の場合の例です。
 *
 * actor01_<<表情ID>>.png
 * 　→表情
 * actor01_body_<<bodyID>>.png 
 * 　→体
 * actor01_face_<<tachieFace>>.png
 * 　→後ろ髪
 * actor01_hair_<<ポーズID>>.png
 * 　→頭
 * actor01_hoppe.png
 * 　→ほっぺ
 * actor01_in_<<衣装ID>>_bottom.png
 * 　→パンツ
 * actor01_in_<<衣装ID>>_top.png
 * 　→ブラ
 * actor01_out_<<衣装ID>>_front.png 
 * actor01_out_<<衣装ID>>_main_<<ポーズID>>.png
 * actor01_out_<<衣装ID>>_bottom.png 
 * actor01_out_<<衣装ID>>_top.png 
 * actor01_out_<<衣装ID>>_back_<<ポーズID>>.png
 * 　→上着
 *
 * 必要ない場合でも、画像をよみに行ってエラーになる場合があります。
 * その場合、透明な画像を入れておいてください。
 *
 *
 *
 * プラグインコマンド
 * Tachie showRight  actorId x y opacity  # 
 * Tachie showLeft actorId x y opacity  # 
 * Tachie showCenter actorId x y opacity # 立ち絵を中央に表示する
 * Tachie hideCenter                    # 中央の立ち絵を非表示にする
 * Tachie flip actorId                    # 立ち絵をflip
 * Tachie unflip actorId                    # 立ち絵をunflip
 * Tachie face      actorId tachieFace      # アクターの表情を変更する
 * Tachie pose      actorId poseId      # アクターのポーズを変更する
 * Tachie body      actorId bodyId      # アクターのbodyを変更する
 * Tachie head      actorId headId      # アクターのhatを変更する
 * Tachie hoppe     actorId tachieHoppe     # アクターのほっぺを変更する
 * Tachie preload      actorId          # アクターの現在のコスを事前に読み込んでおく
 * Tachie preloadFaces actorId 1 2 3... # アクターの表情を事前に読み込んでおく
 * Tachie notClose on                   # ウィンドウを閉じないようにする
 * Tachie notClose off                  # ↑を解除する
 * Tachie showName hoge                 # 名前欄に hoge を表示する
 * Tachie hideName                      # 名前欄を非表示にする
 * Tachie clear                         # 立ち絵を全て非表示にする
 * Tachie hideBalloon                   # 一時的に吹き出しを非表示にする
 * Tachie deactivateAll                   # すべてのキャラを暗くします
 *
 */
var Saba;
(function (Saba) {
    var Tachie;
    (function (Tachie) {
        var parameters = PluginManager.parameters('Saba_Tachie');
        //Tachie.leftPosX = parseInt(parameters['leftPosX']);
        //Tachie.rightPosX = parseInt(parameters['rightPosX']);
		//Tachie.leftPosX = TACHIE_LEFT_X;
        Tachie.rightPosX = TACHIE_RIGHT_X;
        Tachie.centerPosX = parseInt(parameters['centerPosX']);
        Tachie.posY = parseInt(parameters['posY']);
        Tachie.nameLeft = parseInt(parameters['nameLeft']);
        Tachie.fontSize = parseInt(parameters['fontSize']);
        Tachie.newLineXWithFace = parseInt(parameters['newLineXWithFace']);
        Tachie.windowMargin = Saba.toIntArrayByStr(parameters['windowMargin'], 4);
        Tachie.windowPadding = Saba.toIntArrayByStr(parameters['windowPadding'], 4);
        Tachie.inactiveActorTone = Saba.toIntArrayByStr(parameters['inactiveActorTone'], 4);
        Tachie.disabledTachieActorIdList = Saba.toIntArrayByStr(parameters['disablesTachieActorIdList']);
        //Tachie.toneChangeDuration = parseInt(parameters['toneChangeDuration']);
		Tachie.toneChangeDuration = TACHIE_TONE_CHANGE_DURATION;
        Tachie.windowColors = {};
        Tachie.offsetX = {};
        Tachie.offsetY = {};
        Tachie.messageFacePosStr = parameters['messageFacePos'].split(',');
        Tachie.messageFaceX = parseInt(Tachie.messageFacePosStr[0]);
        Tachie.messageFaceY = parseInt(Tachie.messageFacePosStr[1]);
        for (var i = 1; i <= 10; i++) {
            var offset1 = String(parameters['actor' + i + 'offset']).split(',');
            Tachie.offsetX[i] = parseInt(offset1[0] || '0');
            Tachie.offsetY[i] = parseInt(offset1[1] || '0');
            if (isNaN(Tachie.offsetX[i])) {
                Tachie.offsetX[i] = 0;
            }
            if (isNaN(Tachie.offsetY[i])) {
                Tachie.offsetY[i] = 0;
            }
        }
        for (var i = 0; i < 99; i++) {
            Tachie.windowColors[i + 1] = 0;
        }
        var colors = parameters['windowColor'].split(',');
        for (var i = 0; i < colors.length; i++) {
            var color = parseInt(colors[i]);
            if (!isNaN(color)) {
                Tachie.windowColors[i + 1] = color;
            }
        }
        Tachie.MESSAGE_NUM_LINES = Saba.parseIntValue(parameters['messageNumLines'], 3);
        Tachie.AUTO_MODE_DELAY_COMMON = Saba.parseIntValue(parameters['autoModeDelayCommon'], 2500);
        Tachie.AUTO_MODE_DELAY_PER_CHAR = Saba.parseIntValue(parameters['autoModeDelayPerChar'], 120);
        Tachie.AUTO_MODE_MARK_TOTAL_FRAME = parseInt(parameters['autoModeMarkFrameNum']);
        Tachie.AUTO_MODE_MARK_X = parseInt(parameters['autoModeMarkX']);
        Tachie.AUTO_MODE_MARK_Y = parseInt(parameters['autoModeMarkY']);
        Tachie.balloonEnabled = parameters['balloonEnabled'] === 'true';
        var enableFaceLayer = parameters['enableFaceLayer'] === 'true';
        var enableBodyLayer = parameters['enableBodyLayer'] === 'true';
        var enableHairLayer = parameters['enableHairLayer'] === 'true';
        var enableOuterBackLayer = parameters['enableOuterBackLayer'] === 'true';
        var enableOuterMainLayer = parameters['enableOuterMainLayer'] === 'true';
        var enableOuterFrontLayer = parameters['enableOuterFrontLayer'] === 'true';
        var useTextureAtlas = parameters['useTextureAtlas'] === 'true';
        Tachie.DEFAULT_PICTURE_ID1 = TACHIE_LEFT_PIC_ID; // 左
        Tachie.DEFAULT_PICTURE_ID2 = TACHIE_RIGHT_PIC_ID; // 右
        Tachie.DEFAULT_PICTURE_ID3 = 13; // センター
		Tachie.DEFAULT_PICTURE_ID4 = 14; // センター
		Tachie.DEFAULT_PICTURE_ID5 = 15; // センター
        Tachie.PICTURES = [Tachie.DEFAULT_PICTURE_ID1, Tachie.DEFAULT_PICTURE_ID2, Tachie.DEFAULT_PICTURE_ID3, Tachie.DEFAULT_PICTURE_ID4, Tachie.DEFAULT_PICTURE_ID5];
        var ACTOR_PREFIX = '___actor';
        Tachie.LEFT_POS = 1;
        Tachie.RIGHT_POS = 2;
        Tachie.CENTER_POS = 3;
        Tachie.MESSAGE_SKIP_KEY = parameters['skipKey'];
        Tachie.WINDOW_HIDE_KEY = parameters['windowHideKey'];
        Tachie.AUTO_MODE_KEY = parameters['autoModeKey'];
        // ステートのメモ欄で、立ち絵のポーズを指定する時のキーです。
        var TACHIE_POSE_META_KEY = 'tachiePoseId';
        // ステートのメモ欄で、立ち絵の表情を指定する時のキーです。
        var TACHIE_FACE_META_KEY = 'tachieFace';
        var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        var _Game_Picture_initTarget = Game_Picture.prototype.initTarget;
        var _Sprite_Picture_updateBitmap = Sprite_Picture.prototype.updateBitmap;
        var _Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap;
        var _Game_Actor_initMembers = Game_Actor.prototype.initMembers;
        var _Game_Actor_addNewState = Game_Actor.prototype.addNewState;
        var _Game_Actor_clearStates = Game_Actor.prototype.clearStates;
        var _Game_Actor_eraseState = Game_Actor.prototype.eraseState;
        var DataManager_extractSaveContents = DataManager.extractSaveContents;
        DataManager.extractSaveContents = function (contents) {
            DataManager_extractSaveContents.call(this, contents);
            var len = $dataActors.length;
            for (var i = 0; i < len; i++) {
                var actor = $gameActors._data[i];
                if (actor) {
                    actor.setCacheChanged();
                }
            }
        };
        var _Game_Interpreter = (function (_super) {
            __extends(_Game_Interpreter, _super);
            function _Game_Interpreter() {
                _super.apply(this, arguments);
            }
            _Game_Interpreter.prototype.pluginCommand = function (command, args) {
                _Game_Interpreter_pluginCommand.call(this, command, args);
                if (command !== 'Tachie' && command !== '立ち絵') {
                    return;
                }
                switch (args[0]) {
                    case 'notClose':
                        $gameTemp.tachieAvairable = args[1] === 'on';
                        break;
                    case 'showName':
						$gameTemp.tachieName = args[1];
						for(var i = 2; i < args.length; i++) {
							$gameTemp.tachieName += ' ' + args[i];
						}
                        break;
                    case 'hideName':
                        $gameTemp.tachieName = null;
                        break;
                    case 'hideBalloon':
                        $gameTemp.hideBalloon = true;
                        break;
                    case 'preloadPicture':
                        ImageManager.loadPicture(args[1]);
                        break;
                    case 'clearWindowColor':
                        $gameTemp.tachieWindowColorId = 0;
                        $gameTemp.tachieActorId = 0;
                        break;
                    case 'windowColor':
                        $gameTemp.tachieWindowColorId = parseInt(args[1]);
                        break;
                    case 'inactiveAll': // 後方互換用
                    case 'deactivateAll':
                        for (var _i = 0, PICTURES_1 = Tachie.PICTURES; _i < PICTURES_1.length; _i++) {
                            var pictureId = PICTURES_1[_i];
                            var picture = $gameScreen.picture[pictureId];
                            if (picture && picture.name() != '') {
                                var c = { 'code': 234, 'indent': this._indent, 'parameters': [pictureId, Tachie.inactiveActorTone, Tachie.toneChangeDuration, false] };
                                this._list.splice(this._index + 1, 0, c);
                            }
                        }
                        break;
                    case 'hideLeft':
                        this.hidePicture(Tachie.DEFAULT_PICTURE_ID1);
                        break;
                    case 'hideRight':
                        this.hidePicture(Tachie.DEFAULT_PICTURE_ID2);
                        break;
                    case 'hideCenter':
                        this.hidePicture(Tachie.DEFAULT_PICTURE_ID3);
                        break;
                    case 'hide':
                        {
                            var commands = [];
                            for (var _a = 0, PICTURES_2 = Tachie.PICTURES; _a < PICTURES_2.length; _a++) {
                                var pictureId = PICTURES_2[_a];
                                var picture = $gameScreen.picture(pictureId);
                                if (picture && picture.opacity() > 0) {
                                    var c = { 'code': 232, 'indent': this._indent, 'parameters': [pictureId,
                                            0, 0, 0, picture.x(), picture.y(), 100, 100, 0, 0, 30, false] };
                                    commands.push(c);
                                }
                            }
                            for (var _b = 0, commands_1 = commands; _b < commands_1.length; _b++) {
                                var c = commands_1[_b];
                                this._list.splice(this._index + 1, 0, c);
                            }
                            var c2 = { 'code': 356, 'indent': this._indent, 'parameters': ["Tachie clear"] };
                            this._list.splice(this._index + 1 + commands.length, 0, c2);
                        }
                        break;
                    case 'clear':
                        for (var _c = 0, PICTURES_3 = Tachie.PICTURES; _c < PICTURES_3.length; _c++) {
                            var pictureId = PICTURES_3[_c];
                            var picture = $gameScreen.picture(pictureId);
                            if (picture) {
                                picture.erase();
                            }
                        }
                        break;
					case 'showMain':
					case 'showRight':
					case 'showLeft':
                    case 'showCenter':
                        $gameTemp.hideBalloon = false;
                        ImageManager.isReady();
                        if (!args[1]) {
                            console.error("\u30D7\u30E9\u30B0\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9" + command + "\u306E" + args[0] + "\u306E\u5F15\u6570\u304C\u8DB3\u308A\u307E\u305B\u3093\u3002actorId \u304C\u5FC5\u8981\u3067\u3059");
                            return;
                        }
                        var actorId = parseInt(args[1]);
                        var x = parseInt(args[2] || '0');
                        var y = parseInt(args[3] || '0');
                        var opacity = parseInt(args[4] || '255');
                        this.tachiePictureCommnad(args[0], actorId, x, y, opacity);
                        break;
					case 'flip':
					case 'unflip':
						{
							if (!args[1]) {
								console.error("\u30D7\u30E9\u30B0\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9" + command + "\u306E" + args[0] + "\u306E\u5F15\u6570\u304C\u8DB3\u308A\u307E\u305B\u3093\u3002actorId \u304C\u5FC5\u8981\u3067\u3059");
								return;
							}
							var actorId = parseInt(args[1]);
							var flip = false;
							if(args[0] == 'flip') flip = true;
							this.tachieFlipCommand(actorId, flip);
						}
						break;
                    case 'face':
					case 'sweat':
					case 'hoppe':
					case 'eyes':
					case 'hair':
					case 'eyebrows':
					case 'mouth':
                    case 'pose':
					case 'body':
					case 'bodyEXT':
					case 'leftarm':
					case 'rightarm':
					case 'glasses':
					case 'head':
					case 'hat':
					case 'frontA':
                        {
                            if (!args[1]) {
                                console.error("\u30D7\u30E9\u30B0\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9" + command + "\u306E" + args[0] + "\u306E\u5F15\u6570\u304C\u8DB3\u308A\u307E\u305B\u3093\u3002actorId \u304C\u5FC5\u8981\u3067\u3059");
                                return;
                            }
                            var actor = $gameActors.actor(parseInt(args[1]));
                            if (!actor) {
                                throw new Error('立ち絵コマンド: ' + args[0] + ' の' + args[1] + 'のアクターが存在しません');
                            }
                            if (args[2] == null) {
                                throw new Error('立ち絵コマンド: ' + args[0] + ' の第二引数が存在しません');
                            }
                            this.tachieActorCommnad(actor, args[0], args[2], args);
                        }
                        break;
                    case 'preload':
                        {
                            var actor = $gameActors.actor(parseInt(args[1]));
                            actor.preloadTachie();
                        }
                        break;
                    case 'preloadFaces':
                        {
                            var actor = $gameActors.actor(parseInt(args[1]));
                            args.splice(0, 2);
                            actor.preloadFaces(args);
                        }
                        break;
                    default:
                        console.error(args[0]);
                }
            };
            _Game_Interpreter.prototype.hidePicture = function (pictureId) {
                var picture = $gameScreen.picture(pictureId);
                var commands = [];
                if (picture && picture.opacity() > 0) {
                    var c_1 = { 'code': 232, 'indent': this._indent, 'parameters': [pictureId,
                            0, 0, 0, picture.x(), picture.y(), 100, 100, 0, 0, 30, true] };
                    commands.push(c_1);
                }
                var c = { 'code': 235, 'indent': this._indent, 'parameters': [pictureId] };
                commands.push(c);
                for (var _i = 0, commands_2 = commands; _i < commands_2.length; _i++) {
                    var c_2 = commands_2[_i];
                    this._list.splice(this._index + 1, 0, c_2);
                }
            };
			_Game_Interpreter.prototype.tachieFlipCommand = function (actorId, flip) {
				var actor = $gameActors.actor(actorId);
				actor.setTachieFlip(flip);
			};
            _Game_Interpreter.prototype.tachiePictureCommnad = function (command, actorId, x, y, opacity) {
                switch (command) {
                    case 'showLeft':
                        this.showTachiePicture(actorId, Tachie.LEFT_POS, Tachie.DEFAULT_PICTURE_ID1, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID2);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID3);
                        break;
                    case 'showRight':
                        this.showTachiePicture(actorId, Tachie.RIGHT_POS, Tachie.DEFAULT_PICTURE_ID2, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID1);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID3);
                        break;
					case 'showMain':
                        this.showTachiePicture(actorId, Tachie.RIGHT_POS, Tachie.DEFAULT_PICTURE_ID3, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID2);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID1);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID4);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID5);
                        break;
					case 'showSub1':
                        this.showTachiePicture(actorId, Tachie.RIGHT_POS, Tachie.DEFAULT_PICTURE_ID1, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID2);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID3);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID4);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID5);
                        break;
					case 'showSub2':
                        this.showTachiePicture(actorId, Tachie.RIGHT_POS, Tachie.DEFAULT_PICTURE_ID2, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID1);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID3);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID4);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID5);
                        break;
					case 'showSub4':
                        this.showTachiePicture(actorId, Tachie.RIGHT_POS, Tachie.DEFAULT_PICTURE_ID4, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID2);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID3);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID1);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID5);
                        break;
                    case 'showCenter':
                        this.showTachiePicture(actorId, Tachie.CENTER_POS, Tachie.DEFAULT_PICTURE_ID5, x, y, opacity);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID1);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID2);
                        this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID3);
						this.deactivateTachiePicture(Tachie.DEFAULT_PICTURE_ID4);
                        break;
                }
            };
            /**
             * 立ち絵を表示します
             * @param {number} actorId   [description]
             * @param {number} posId     [description]
             * @param {number} pictureId [description]
             * @param {number} x         [description]
             * @param {number} y         [description]
             * @param {number} opacity   [description]
             */
            _Game_Interpreter.prototype.showTachiePicture = function (actorId, posId, pictureId, x, y, opacity) {
				$gameTemp.tachieActorId = actorId;
                $gameTemp.tachieActorPos = posId;
                $gameTemp.tachieWindowColorId = Tachie.windowColors[$gameTemp.tachieActorId];
                var lastTone = [0, 0, 0, 0];
                if (opacity < 255) {
                    var picture_1 = $gameScreen.picture(pictureId);
                    if (picture_1 && picture_1.tachieActorId === actorId) {
                        opacity = 255;
                        lastTone = picture_1.tone();
                    }
                }
                var xx = x + this.getPosX(posId);
                var yy = y + Tachie.posY;
                $gameScreen.showPicture(pictureId, ACTOR_PREFIX + actorId, 0, xx, yy, 100, 100, opacity, 0);
                var picture = $gameScreen.picture(pictureId);
                picture.tint(lastTone, 0);
				var actor = $gameActors.actor(actorId);
				if(actor.tachieFlip) {
					picture._scaleX = -100;
					picture._targetScaleX = -100;
				}
				else {
					picture._scaleX = 100;
					picture._targetScaleX = 100;
				}
                var c = { 'code': 234, 'indent': this._indent, 'parameters': [pictureId, [0, 0, 0, 0], Tachie.toneChangeDuration, false] };
                this._list.splice(this._index + 1, 0, c);
                if (opacity < 255) {
                    var c = { 'code': 232, 'indent': this._indent, 'parameters': [pictureId, 0, 0, 0, xx, yy, 100, 100, 255, 0, 15, true] };
                    this._list.splice(this._index + 1, 0, c);
                }
            };
            /**
             * 指定の pictureId のピクチャが表示されている場合、暗くします
             */
            _Game_Interpreter.prototype.deactivateTachiePicture = function (pictureId) {
                var leftPicture = $gameScreen.picture(pictureId);
                if (leftPicture && leftPicture.name() != '') {
                    var c = { 'code': 234, 'indent': this._indent, 'parameters': [pictureId, Tachie.inactiveActorTone, Tachie.toneChangeDuration, false] };
                    this._list.splice(this._index + 1, 0, c);
                }
            };
            /**
             * 指定の positionId に対応する x 座標を返します。
             */
            _Game_Interpreter.prototype.getPosX = function (posId) {
                switch (posId) {
                    case Tachie.LEFT_POS: 
						if($gameScreen.isChatMode())
							return TACHIE_LEFT_CHAT_X;
						return TACHIE_LEFT_CINEMATIC_X;			
						//return Tachie.leftPosX;
					
                    case Tachie.RIGHT_POS: return Tachie.rightPosX;
                    case Tachie.CENTER_POS: return Tachie.centerPosX;
                    default:
                        console.error("posId \u304C\u4E0D\u6B63\u3067\u3059: " + posId);
                }
            };
            _Game_Interpreter.prototype.tachieActorCommnad = function (actor, command, arg2, args) {
                switch (command) {
                    case 'face':
                        if(arg2 == 0) actor.resetTachieFace();
						else actor.setTachieFace(parseInt(arg2));
                        break;
                    case 'pose':
                        actor.setPose(arg2);
                        break;
                    case 'hoppe':
						if(arg2 == 0) actor.resetTachieHoppe();
                        else actor.setTachieHoppe(arg2);
                        break;
					case 'sweat':
						if(arg2 == 0) actor.resetTachieSweat();
						else actor.setTachieSweat(arg2);
						break;
					case 'eyebrows':
						if(arg2 == 0) actor.resetTachieEyebrows();
						else actor.setTachieEyebrows(arg2);
						break;
					case 'eyes':
						if(arg2 == 0) actor.resetTachieEyes();
						else actor.setTachieEyes(arg2);
						break;
					case 'hair':
						if(arg2 == 0) actor.resetTachieHair();
						else actor.setTachieHair(arg2);
						break;
					case 'mouth':
						if(arg2 == 0) actor.resetTachieMouth();
						else actor.setTachieMouth(arg2);
						break;
					case 'body':
                        if(arg2 == 0) actor.resetTachieBody();
						else actor.setTachieBody(arg2);
                        break;
					case 'bodyEXT':
                        actor.setTachieBodyExtension(arg2);
                        break;	
					case 'leftarm':
                        if(arg2 == 0) actor.resetTachieLeftArm();
						else actor.setTachieLeftArm(arg2);
                        break;
					case 'rightarm':
                        if(arg2 == 0) actor.resetTachieRightArm();
						else actor.setTachieRightArm(arg2);
                        break;
					case 'glasses':
                        if(arg2 == 0) actor.resetTachieGlasses();
						else actor.setTachieGlasses(arg2);
                        break;
					case 'head':
                        if(arg2 == 0) actor.resetTachieHead();
						else actor.setTachieHead(arg2);
                        break;	
					case 'hat':
                        if(arg2 == 0) actor.resetTachieHat();
						else actor.setTachieHat(arg2);
                        break;	
					case 'frontA':
						if(arg2 == 0) actor.resetTachieFrontA();
						else actor.setTachieFrontA(arg2);
                        break;	
                }
            };
            _Game_Interpreter.prototype.validateCosId = function (command, id) {
                var re = /[a-z]/;
                if (!re.exec(id)) {
                    throw new Error("\u30B3\u30B9\u30C1\u30E5\u30FC\u30E0ID\u304C\u4E0D\u6B63\u3067\u3059:" + id + " command: " + command);
                }
            };
			// Skip key Saba version?
            _Game_Interpreter.prototype.command232 = function () { 
                var x, y;
                if (this._params[3] === 0) {
                    x = this._params[4];
                    y = this._params[5];
                }
                else {
                    x = $gameVariables.value(this._params[4]);
                    y = $gameVariables.value(this._params[5]);
                }
                var time = this._params[10];
                if (Input.isPressed(Tachie.MESSAGE_SKIP_KEY) && Tachie.PICTURES.indexOf(this._params[0]) > 0) {
                    time = 1;
                }
                $gameScreen.movePicture(this._params[0], this._params[2], x, y, this._params[6], this._params[7], this._params[8], this._params[9], time);
                if (this._params[11]) {
                    this.wait(time);
                }
                return true;
            };
            ;
            return _Game_Interpreter;
        }(Game_Interpreter));
        var _Scene_Map_create = Scene_Map.prototype.create;
        Scene_Map.prototype.create = function () {
            _Scene_Map_create.call(this);
            for (var _i = 0, _a = $gameParty.battleMembers(); _i < _a.length; _i++) {
                var actor = _a[_i];
                actor.preloadTachie();
            }
        };
        Game_Interpreter.prototype.setup = function (list, eventId) {
            this.clear();
            this._mapId = $gameMap.mapId();
            this._eventId = eventId || 0;
            this._list = [];
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var c = list_1[_i];
                this._list.push(c);
            }
        };
        var _Game_Item = (function (_super) {
            __extends(_Game_Item, _super);
            function _Game_Item() {
                _super.apply(this, arguments);
            }
            _Game_Item.prototype.isOuter = function () {
                return this.outerId() != null;
            };
            _Game_Item.prototype.isInnerTop = function () {
                return this.innerTopId() != null;
            };
            _Game_Item.prototype.isInnerBottom = function () {
                return this.innerBottomId() != null;
            };
            _Game_Item.prototype.outerId = function () {
                return this.object().meta['outer'];
            };
            _Game_Item.prototype.innerTopId = function () {
                return this.object().meta['innerTop'];
            };
            _Game_Item.prototype.innerBottomId = function () {
                return this.object().meta['innerBottom'];
            };

            return _Game_Item;
        }(Game_Item));
        ;
        var _Game_Actor = (function (_super) {
            __extends(_Game_Actor, _super);
            function _Game_Actor() {
                _super.apply(this, arguments);
            }
            Object.defineProperty(_Game_Actor.prototype, "tachieBaseId", {
                get: function () {
                    //return 'karryn/' + this.poseName + '/';
					return '';
                },
                enumerable: true,
                configurable: true
            });	
            Object.defineProperty(_Game_Actor.prototype, "tachieHead", {
                get: function () {
                    if(this._tachieHead == void 0) this._tachieHead = REM_TACHIE_NULL;
                    return this._tachieHead;
                },
                enumerable: true,
                configurable: true
            });	
			Object.defineProperty(_Game_Actor.prototype, "tachieGlasses", {
                get: function () {
                    if(this._tachieGlasses == void 0) this._tachieGlasses = REM_TACHIE_NULL;
                    return this._tachieGlasses;
                },
                enumerable: true,
                configurable: true
            });		
			Object.defineProperty(_Game_Actor.prototype, "tachieTie", {
                get: function () {
                    if(this._tachieTie == void 0) this._tachieTie = REM_TACHIE_NULL;
                    return this._tachieTie;
                },
                enumerable: true,
                configurable: true
            });					
			Object.defineProperty(_Game_Actor.prototype, "tachieBody", {
                get: function () {
					if(this._tachieBody == void 0) this._tachieBody = REM_TACHIE_NULL;
                    return this._tachieBody;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBodyExtension", {
                get: function () {
					if(this._tachieBodyExtension == void 0) this._tachieBodyExtension = '';
					if(this._tachieBodyExtension.length > 0)  return this._tachieBodyExtension + '_';
                    else return '';
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieLeftArm", {
                get: function () {
					if(this._tachieLeftArm == void 0) this._tachieLeftArm = REM_TACHIE_NULL;
                    return this._tachieLeftArm;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieRightArm", {
                get: function () {
					if(this._tachieRightArm == void 0) this._tachieRightArm = REM_TACHIE_NULL;
                    return this._tachieRightArm;
                },
                enumerable: true,
                configurable: true
            });		
			Object.defineProperty(_Game_Actor.prototype, "tachieHat", {
                get: function () {
					if(this._tachieHat == void 0) this._tachieHat = REM_TACHIE_NULL;
                    return this._tachieHat;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieWeapon", {
                get: function () {
					if(this._tachieWeapon == void 0) this._tachieWeapon = REM_TACHIE_NULL;
                    return this._tachieWeapon;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_Game_Actor.prototype, "tachieFace", {
                get: function () {
					if(this._tachieFace == void 0) this._tachieFace = 0;
                    return this._tachieFace;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_Game_Actor.prototype, "tachieHoppe", {
                get: function () {
					if(this._tachieHoppe == void 0) this._tachieHoppe = REM_TACHIE_NULL;
                    return this._tachieHoppe;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_Game_Actor.prototype, "tachieSweat", {
                get: function () {
					if(this._tachieSweat == void 0) this._tachieSweat = REM_TACHIE_NULL;
                    return this._tachieSweat;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieEyebrows", {
                get: function () {
					if(this._tachieEyebrows == void 0) this._tachieEyebrows = REM_TACHIE_NULL;
                    return this._tachieEyebrows;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieHair", {
                get: function () {
					if(this._tachieHair == void 0) this._tachieHair = REM_TACHIE_NULL;
                    return this._tachieHair;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieEyes", {
                get: function () {
					if(this._tachieEyes == void 0) this._tachieEyes = REM_TACHIE_NULL;
                    return this._tachieEyes;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieMouth", {
                get: function () {
					if(this._tachieMouth == void 0) this._tachieMouth = REM_TACHIE_NULL;
                    return this._tachieMouth;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCutIn", {
                get: function () {
					if(this._tachieCutIn == void 0) this._tachieCutIn = REM_TACHIE_NULL;
                    return this._tachieCutIn;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachiePanties", {
                get: function () {
					if(this._tachiePanties == void 0) this._tachiePanties = REM_TACHIE_NULL;
                    return this._tachiePanties;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieHolePussy", {
                get: function () {
					if(this._tachieHolePussy == void 0) this._tachieHolePussy = REM_TACHIE_NULL;
                    return this._tachieHolePussy;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieHoleAnus", {
                get: function () {
					if(this._tachieHoleAnus == void 0) this._tachieHoleAnus = REM_TACHIE_NULL;
                    return this._tachieHoleAnus;
                },
                enumerable: true,
                configurable: true
            });
			
			Object.defineProperty(_Game_Actor.prototype, "tachieClothes", {
                get: function () {
					if(this._tachieClothes == void 0) this._tachieClothes = REM_TACHIE_NULL;
                    return this._tachieClothes;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieSkirt", {
                get: function () {
					if(this._tachieSkirt == void 0) this._tachieSkirt = REM_TACHIE_NULL;
                    return this._tachieSkirt;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieLegs", {
                get: function () {
					if(this._tachieLegs == void 0) this._tachieLegs = REM_TACHIE_NULL;
                    return this._tachieLegs;
                },
                enumerable: true,
                configurable: true
            });
			
			Object.defineProperty(_Game_Actor.prototype, "tachieStraw", {
                get: function () {
					if(this._tachieStraw == void 0) this._tachieStraw = REM_TACHIE_NULL;
                    return this._tachieStraw;
                },
                enumerable: true,
                configurable: true
            });
			
			Object.defineProperty(_Game_Actor.prototype, "tachieLeftHole", {
                get: function () {
					if(this._tachieLeftHole == void 0) this._tachieLeftHole = REM_TACHIE_NULL;
                    return this._tachieLeftHole;
                },
                enumerable: true,
                configurable: true
            });
			
			Object.defineProperty(_Game_Actor.prototype, "tachieRightHole", {
                get: function () {
					if(this._tachieRightHole == void 0) this._tachieRightHole = REM_TACHIE_NULL;
                    return this._tachieRightHole;
                },
                enumerable: true,
                configurable: true
            });
			
			Object.defineProperty(_Game_Actor.prototype, "tachieBoobs", {
                get: function () {
					if(this._tachieBoobs == void 0) this._tachieBoobs = REM_TACHIE_NULL;
                    return this._tachieBoobs;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieLeftBoob", {
                get: function () {
					if(this._tachieLeftBoob == void 0) this._tachieLeftBoob = REM_TACHIE_NULL;
                    return this._tachieLeftBoob;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieRightBoob", {
                get: function () {
					if(this._tachieRightBoob == void 0) this._tachieRightBoob = REM_TACHIE_NULL;
                    return this._tachieRightBoob;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBoobsErection", {
                get: function () {
					if(this._tachieBoobsErection == void 0) this._tachieBoobsErection = false;
                    return this._tachieBoobsErection;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieButt", {
                get: function () {
					if(this._tachieButt == void 0) this._tachieButt = REM_TACHIE_NULL;
                    return this._tachieButt;
                },
                enumerable: true,
                configurable: true
            });
			
			Object.defineProperty(_Game_Actor.prototype, "tachieCock", {
                get: function () {
					if(this._tachieCock == void 0) this._tachieCock = REM_TACHIE_NULL;
                    return this._tachieCock;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockBoobs", {
                get: function () {
					if(this._tachieCockBoobs == void 0) this._tachieCockBoobs = REM_TACHIE_NULL;
                    return this._tachieCockBoobs;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockMouth", {
                get: function () {
					if(this._tachieCockMouth == void 0) this._tachieCockMouth = REM_TACHIE_NULL;
                    return this._tachieCockMouth;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockFeet", {
                get: function () {
					if(this._tachieCockFeet == void 0) this._tachieCockFeet = REM_TACHIE_NULL;
                    return this._tachieCockFeet;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockPussy", {
                get: function () {
					if(this._tachieCockPussy == void 0) this._tachieCockPussy = REM_TACHIE_NULL;
                    return this._tachieCockPussy;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockAnal", {
                get: function () {
					if(this._tachieCockAnal == void 0) this._tachieCockAnal = REM_TACHIE_NULL;
                    return this._tachieCockAnal;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockLeftArm", {
                get: function () {
					if(this._tachieCockLeftArm == void 0) this._tachieCockLeftArm = REM_TACHIE_NULL;
                    return this._tachieCockLeftArm;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieCockRightArm", {
                get: function () {
					if(this._tachieCockRightArm == void 0) this._tachieCockRightArm = REM_TACHIE_NULL;
                    return this._tachieCockRightArm;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieVisitorA", {
                get: function () {
					if(this._tachieVisitorA == void 0) this._tachieVisitorA = REM_TACHIE_NULL;
                    return this._tachieVisitorA;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieVisitorB", {
                get: function () {
					if(this._tachieVisitorB == void 0) this._tachieVisitorB = REM_TACHIE_NULL;
                    return this._tachieVisitorB;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieVisitorC", {
                get: function () {
					if(this._tachieVisitorC == void 0) this._tachieVisitorC = REM_TACHIE_NULL;
                    return this._tachieVisitorC;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieVisitorD", {
                get: function () {
					if(this._tachieVisitorD == void 0) this._tachieVisitorD = REM_TACHIE_NULL;
                    return this._tachieVisitorD;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBackA", {
                get: function () {
					if(this._tachieBackA == void 0) this._tachieBackA = REM_TACHIE_NULL;
                    return this._tachieBackA;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBackB", {
                get: function () {
					if(this._tachieBackB == void 0) this._tachieBackB = REM_TACHIE_NULL;
                    return this._tachieBackB;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBackC", {
                get: function () {
					if(this._tachieBackC == void 0) this._tachieBackC = REM_TACHIE_NULL;
                    return this._tachieBackC;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBackD", {
                get: function () {
					if(this._tachieBackD == void 0) this._tachieBackD = REM_TACHIE_NULL;
                    return this._tachieBackD;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieBackE", {
                get: function () {
					if(this._tachieBackE == void 0) this._tachieBackE = REM_TACHIE_NULL;
                    return this._tachieBackE;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieFrontA", {
                get: function () {
					if(this._tachieFrontA == void 0) this._tachieFrontA = REM_TACHIE_NULL;
                    return this._tachieFrontA;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieFrontB", {
                get: function () {
					if(this._tachieFrontB == void 0) this._tachieFrontB = REM_TACHIE_NULL;
                    return this._tachieFrontB;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieFrontC", {
                get: function () {
					if(this._tachieFrontC == void 0) this._tachieFrontC = REM_TACHIE_NULL;
                    return this._tachieFrontC;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieFrontD", {
                get: function () {
					if(this._tachieFrontD == void 0) this._tachieFrontD = REM_TACHIE_NULL;
                    return this._tachieFrontD;
                },
                enumerable: true,
                configurable: true
            });
			Object.defineProperty(_Game_Actor.prototype, "tachieFrontE", {
                get: function () {
					if(this._tachieFrontE == void 0) this._tachieFrontE = REM_TACHIE_NULL;
                    return this._tachieFrontE;
                },
                enumerable: true,
                configurable: true
            });

			
            Object.defineProperty(_Game_Actor.prototype, "tachieOffsetX", {
                get: function () {
                    return Tachie.offsetX[this.actorId()] || 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_Game_Actor.prototype, "tachieOffsetY", {
                get: function () {
                    return Tachie.offsetY[this.actorId()] || 0;
                },
                enumerable: true,
                configurable: true
            });
            _Game_Actor.prototype.initMembers = function () {
                _Game_Actor_initMembers.call(this);
				this._tachieFace = 0;
				this._tachieBody = REM_TACHIE_NULL;
				this._tachieBodyExtension = '';
				this._tachieHead = REM_TACHIE_NULL;
				this._tachieHat = REM_TACHIE_NULL;
				this._tachieGlasses = REM_TACHIE_NULL;
				this._tachieTie = REM_TACHIE_NULL;
				
				this._tachieWeapon = REM_TACHIE_NULL;
				this._tachieLeftArm = REM_TACHIE_NULL;
				this._tachieRightArm = REM_TACHIE_NULL;
				this._tachieBoobs = REM_TACHIE_NULL;
				this._tachieLeftBoob = REM_TACHIE_NULL;
				this._tachieRightBoob = REM_TACHIE_NULL;
				this._tachieBoobsErection = false;
				this._tachieButt = REM_TACHIE_NULL;
				this._tachieCock = REM_TACHIE_NULL;
				this._tachieCockBoobs = REM_TACHIE_NULL;
				this._tachieCockMouth = REM_TACHIE_NULL;
				this._tachieCockFeet = REM_TACHIE_NULL;
				this._tachieCockPussy = REM_TACHIE_NULL;
				this._tachieCockAnal = REM_TACHIE_NULL;
				this._tachieCockLeftArm = REM_TACHIE_NULL;
				this._tachieCockRightArm = REM_TACHIE_NULL;
				this._tachiePanties = REM_TACHIE_NULL;
				this._tachieHolePussy = REM_TACHIE_NULL;
				this._tachieHoleAnus = REM_TACHIE_NULL;
				this._tachieStraw = REM_TACHIE_NULL;
				this._tachieLeftHole = REM_TACHIE_NULL;
				this._tachieRightHole = REM_TACHIE_NULL;
				this._tachieClothes = REM_TACHIE_NULL;
				this._tachieSkirt = REM_TACHIE_NULL;
				this._tachieLegs = REM_TACHIE_NULL;
                this._tachieHoppe = REM_TACHIE_NULL;
				this._tachieSweat = REM_TACHIE_NULL;
				this._tachieHair = REM_TACHIE_NULL;
				this._tachieEyes = REM_TACHIE_NULL;
				this._tachieEyebrows = REM_TACHIE_NULL;
				this._tachieMouth = REM_TACHIE_NULL;
				this._tachieCutIn = REM_TACHIE_NULL;
				this._tachieVisitorA = REM_TACHIE_NULL;
				this._tachieVisitorB = REM_TACHIE_NULL;
				this._tachieVisitorC = REM_TACHIE_NULL;
				this._tachieVisitorD = REM_TACHIE_NULL;
				this._tachieBackA = REM_TACHIE_NULL;
				this._tachieBackB = REM_TACHIE_NULL;
				this._tachieBackC = REM_TACHIE_NULL;
				this._tachieBackD = REM_TACHIE_NULL;
				this._tachieBackE = REM_TACHIE_NULL;
				this._tachieFrontA = REM_TACHIE_NULL;
				this._tachieFrontB = REM_TACHIE_NULL;
				this._tachieFrontC = REM_TACHIE_NULL;
				this._tachieFrontD = REM_TACHIE_NULL;
				this._tachieFrontE = REM_TACHIE_NULL;
                this._castOffInnerTop = false;
                this._castOffInnerBottom = false;
                this._castOffOuter = false;
				this._tachieCutInPosX = 0;
				this._tachieCutInPosY = 0;
				this._tachieCutInGoalX = 0;
				this._tachieCutInGoalY = 0;
				this._tachieCutInDirectionX = 0;
				this._tachieCutInDirectionY = 0;
            };
            _Game_Actor.prototype.isDirty = function () {
                return this._dirty;
            };
            _Game_Actor.prototype.setDirty = function () {
				if(!this.allowTachieUpdate() || !BattleManager.isTachieUpdateAllowed()) return;
                this._dirty = true;
            };
            _Game_Actor.prototype.clearDirty = function () {
                this._dirty = false;
            };
            _Game_Actor.prototype.isCacheChanged = function () {
                return this._cacheChanged;
            };
            _Game_Actor.prototype.setCacheChanged = function () {
				if(!this.allowTachieUpdate() || !BattleManager.isTachieUpdateAllowed()) return;
                this._cacheChanged = true;
                this.setDirty();
                $gamePlayer.refresh();
            };
            _Game_Actor.prototype.clearCacheChanged = function () {
                this._cacheChanged = false;
            };
            _Game_Actor.prototype.castOffOuter = function () {
                if (this._castOffOuter) {
                    return;
                }
                this._castOffOuter = true;
                this.setDirty();
            };
            _Game_Actor.prototype.castOffInnerBottom = function () {
                if (this._castOffInnerBottom) {
                    return;
                }
                this._castOffInnerBottom = true;
                this.setCacheChanged();
            };
            _Game_Actor.prototype.castOffInnerTop = function () {
                if (this._castOffInnerTop) {
                    return;
                }
                this._castOffInnerTop = true;
                this.setCacheChanged();
            };
            _Game_Actor.prototype.isCastOffOuter = function () {
                return this._castOffOuter;
            };
            _Game_Actor.prototype.isCastOffInnerTop = function () {
                return this._castOffInnerTop;
            };
            _Game_Actor.prototype.isCastOffInnerBottom = function () {
                return this._castOffInnerBottom;
            };
			
			_Game_Actor.prototype.hasTachieBody = function () {
                return this.tachieBody != REM_TACHIE_NULL;
            };
			_Game_Actor.prototype.hasTachieRightArm = function () {
                return this.tachieRightArm != REM_TACHIE_NULL;
            };			
			_Game_Actor.prototype.hasTachieLeftArm = function () {
                return this.tachieLeftArm != REM_TACHIE_NULL;
            };	
			
			
            _Game_Actor.prototype.setTachieFace = function (n) {
                if (this._tachieFace === n) {
                    return;
                }
                this._tachieFace = '' + n;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieFace = function () {
                this._tachieFace = 0;
                this.setDirty();
            };
            _Game_Actor.prototype.setTachieHoppe = function (n) {
                if (this._tachieHoppe === n) {
                    return;
                }
                this._tachieHoppe = '' + n;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieHoppe = function () {
                this._tachieHoppe = REM_TACHIE_NULL;
				this.setDirty();
            };
            _Game_Actor.prototype.setTachieSweat = function (n) {
                if (this._tachieSweat === n) {
                    return;
                }
                this._tachieSweat = '' + n;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieSweat = function () {
                this._tachieSweat = REM_TACHIE_NULL;
				this.setDirty();
            };
			_Game_Actor.prototype.setTachieEyebrows = function (n) {
                if (this._tachieEyebrows === n) {
                    return;
                }
                this._tachieEyebrows = '' + n;
                this.setDirty();
            };
			//_Game_Actor.prototype.setTachieCutIn = function (n) {
            //    if (this._tachieCutIn === n) {
            //        return;
            //    }
            //    this._tachieCutIn = '' + n;
			//	this._cutInFrame = 0;
			//	BattleManager.cutinWait();
            //    this.setDirty();
            //};
			
			_Game_Actor.prototype.resetTachieEyebrows = function () {
                this._tachieEyebrows = REM_TACHIE_NULL;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieCutIn = function () {
                this._tachieCutIn = REM_TACHIE_NULL;
				this._cutInFrame = 0;
                this.setDirty();
            };
			_Game_Actor.prototype.setTachieHair = function (n) {
                if (this._tachieHair === n) {
                    return;
                }
                this._tachieHair = '' + n;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieHair = function () {
                this._tachieHair = REM_TACHIE_NULL;
                this.setDirty();
            };
			_Game_Actor.prototype.setTachieEyes = function (n) {
                if (this._tachieEyes === n) {
                    return;
                }
                this._tachieEyes = '' + n;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieEyes = function () {
                this._tachieEyes = REM_TACHIE_NULL;
                this.setDirty();
            };
			_Game_Actor.prototype.setTachieMouth = function (n) {
                if (this._tachieMouth === n) {
                    return;
                }
                this._tachieMouth = '' + n;
                this.setDirty();
            };
			_Game_Actor.prototype.resetTachieMouth = function () {
                this._tachieMouth = REM_TACHIE_NULL;
                this.setDirty();
            };
			_Game_Actor.prototype.setTachieBody = function (n) {
                if (this._tachieBody === n) {
                    return;
                }
                this._tachieBody = '' + n;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.resetTachieBody = function () {
                this._tachieBody = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.setTachieBodyExtension = function (n) {
                if (this._tachieBodyExtension === n) {
                    return;
                }
                this._tachieBodyExtension = '' + n;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.resetTachieBodyExtension = function () {
                this._tachieBodyExtension = '';
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.setTachieHead = function (n) {
                if (this._tachieHead === n) {
                    return;
                }
                this._tachieHead = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieHead = function () {
                this._tachieHead = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.setTachieHat = function (n) {
				if(this.isKarryn && !this.isWearingGlovesAndHat()) {
					this.resetTachieHat();
					return;
				}

                if (this._tachieHat === n) {
                    return;
                }
				this._tachieHat = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieHat = function () {
                this._tachieHat = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieGlasses = function (n) {
                if (this._tachieGlasses === n) {
                    return;
                }
                this._tachieGlasses = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieGlasses = function () {
                this._tachieGlasses = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieTie = function (n) {
                if (this._tachieTie === n) {
                    return;
                }
                this._tachieTie = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieTie = function () {
                this._tachieTie = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachiePanties = function (n) {
                if (this._tachiePanties === n) {
                    return;
                }
                this._tachiePanties = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachiePanties = function () {
                this._tachiePanties = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieHolePussy = function (n) {
                if (this._tachieHolePussy === n) {
                    return;
                }
                this._tachieHolePussy = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieHolePussy = function () {
                this._tachieHolePussy = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieHoleAnus = function (n) {
                if (this._tachieHoleAnus === n) {
                    return;
                }
                this._tachieHoleAnus = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieHoleAnus = function () {
                this._tachieHoleAnus = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieClothes = function (n) {
                if (this._tachieClothes === n) {
                    return;
                }
                this._tachieClothes = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieClothes = function () {
                this._tachieClothes = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieSkirt = function (n) {
                if (this._tachieSkirt === n) {
                    return;
                }
                this._tachieSkirt = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieSkirt = function () {
                this._tachieSkirt = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieLegs = function (n) {
                if (this._tachieLegs === n) {
                    return;
                }
                this._tachieLegs = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieLegs = function () {
                this._tachieLegs = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieStraw = function (n) {
                if (this._tachieStraw === n) {
                    return;
                }
                this._tachieStraw = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieStraw = function () {
                this._tachieStraw = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieLeftHole = function (n) {
                if (this._tachieLeftHole === n) {
                    return;
                }
                this._tachieLeftHole = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieLeftHole = function () {
                this._tachieLeftHole = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieRightHole = function (n) {
                if (this._tachieRightHole === n) {
                    return;
                }
                this._tachieRightHole = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieRightHole = function () {
                this._tachieRightHole = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.setTachieWeapon = function (n) {
                if (this._tachieWeapon === n) {
                    return;
                }
                this._tachieWeapon = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieWeapon = function () {
                this._tachieWeapon = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieLeftArm = function (n) {
                if (this._tachieLeftArm === n) {
                    return;
                }
                this._tachieLeftArm = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieLeftArm = function () {
                this._tachieLeftArm = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieRightArm = function (n) {
                if (this._tachieRightArm === n) {
                    return;
                }
                this._tachieRightArm = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieRightArm = function () {
                this._tachieRightArm = REM_TACHIE_NULL;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieBoobs = function (n) {
                if (this._tachieBoobs === n) {
                    return;
                }
                this._tachieBoobs = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieBoobs = function () {
                this._tachieBoobs = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.setTachieLeftBoob = function (n) {
                if (this._tachieLeftBoob === n) {
                    return;
                }
                this._tachieLeftBoob = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieLeftBoob = function () {
                this._tachieLeftBoob = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.setTachieRightBoob = function (n) {
                if (this._tachieRightBoob === n) {
                    return;
                }
                this._tachieRightBoob = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieRightBoob = function () {
                this._tachieRightBoob = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			_Game_Actor.prototype.setTachieBoobsErectionTrue = function () {
                this._tachieBoobsErection = true;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieBoobsErectionFalse = function () {
                this._tachieBoobsErection = false;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieButt = function (n) {
                if (this._tachieButt === n) {
                    return;
                }
                this._tachieButt = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieButt = function () {
                this._tachieButt = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			
			Game_Actor.prototype.setTachieCock = function (n) {
                if (this._tachieCock === n) {
                    return;
                }
                this._tachieCock = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCock = function () {
                this._tachieCock = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieCockBoobs = function (n) {
                if (this._tachieCockBoobs === n) {
                    return;
                }
                this._tachieCockBoobs = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockBoobs = function () {
                this._tachieCockBoobs = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieCockMouth = function (n) {
                if (this._tachieCockMouth === n) {
                    return;
                }
                this._tachieCockMouth = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockMouth = function () {
                this._tachieCockMouth = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieCockFeet = function (n) {
                if (this._tachieCockFeet === n) {
                    return;
                }
                this._tachieCockFeet = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockFeet = function () {
                this._tachieCockFeet = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieCockPussy = function (n) {
                if (this._tachieCockPussy === n) {
                    return;
                }
                this._tachieCockPussy = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockPussy = function () {
                this._tachieCockPussy = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieCockAnal = function (n) {
                if (this._tachieCockAnal === n) {
                    return;
                }
                this._tachieCockAnal = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockAnal = function () {
                this._tachieCockAnal = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			
			Game_Actor.prototype.setTachieCockLeftArm = function (n) {
                if (this._tachieCockLeftArm === n) {
                    return;
                }
                this._tachieCockLeftArm = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockLeftArm = function () {
                this._tachieCockLeftArm = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			Game_Actor.prototype.setTachieCockRightArm = function (n) {
                if (this._tachieCockRightArm === n) {
                    return;
                }
                this._tachieCockRightArm = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieCockRightArm = function () {
                this._tachieCockRightArm = REM_TACHIE_NULL;
                this.setCacheChanged();
            };	
			
			_Game_Actor.prototype.setTachieVisitorA = function (n) {
                if (this._tachieVisitorA === n) {
                    return;
                }
                this._tachieVisitorA = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieVisitorB = function (n) {
                if (this._tachieVisitorB === n) {
                    return;
                }
                this._tachieVisitorB = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieVisitorC = function (n) {
                if (this._tachieVisitorC === n) {
                    return;
                }
                this._tachieVisitorC = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieVisitorD = function (n) {
                if (this._tachieVisitorD === n) {
                    return;
                }
                this._tachieVisitorD = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieVisitorA = function () {
				this._tachieVisitorA = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieVisitorB = function () {
				this._tachieVisitorB = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieVisitorC = function () {
				this._tachieVisitorC = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieVisitorD = function () {
				this._tachieVisitorD = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			
			_Game_Actor.prototype.resetAllTachieVisitor = function () {
				this.resetTachieVisitorA();
				this.resetTachieVisitorB();
				this.resetTachieVisitorC();
				this.resetTachieVisitorD();
                this.setCacheChanged();
            };	
			
			_Game_Actor.prototype.setTachieBackA = function (n) {
                if (this._tachieBackA === n) {
                    return;
                }
                this._tachieBackA = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieBackB = function (n) {
                if (this._tachieBackB === n) {
                    return;
                }
                this._tachieBackB = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieBackC = function (n) {
                if (this._tachieBackC === n) {
                    return;
                }
                this._tachieBackC = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieBackD = function (n) {
                if (this._tachieBackD === n) {
                    return;
                }
                this._tachieBackD = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieBackE = function (n) {
                if (this._tachieBackE === n) {
                    return;
                }
                this._tachieBackE = '' + n;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.resetTachieBackA = function () {
				this._tachieBackA = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieBackB = function () {
				this._tachieBackB = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieBackC = function () {
				this._tachieBackC = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieBackD = function () {
				this._tachieBackD = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieBackE = function () {
				this._tachieBackE = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			
			_Game_Actor.prototype.resetAllTachieBack = function () {
				this.resetTachieBackA();
				this.resetTachieBackB();
				this.resetTachieBackC();
				this.resetTachieBackD();
				this.resetTachieBackE();
                this.setCacheChanged();
            };	
			
			_Game_Actor.prototype.setTachieFrontA = function (n) {
                if (this._tachieFrontA === n) {
                    return;
                }
                this._tachieFrontA = '' + n;
                this.setCacheChanged();
            };			
			_Game_Actor.prototype.setTachieFrontB = function (n) {
                if (this._tachieFrontB === n) {
                    return;
                }
                this._tachieFrontB = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieFrontC = function (n) {
                if (this._tachieFrontC === n) {
                    return;
                }
                this._tachieFrontC = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieFrontD = function (n) {
                if (this._tachieFrontD === n) {
                    return;
                }
                this._tachieFrontD = '' + n;
                this.setCacheChanged();
            };
			_Game_Actor.prototype.setTachieFrontE = function (n) {
                if (this._tachieFrontE === n) {
                    return;
                }
                this._tachieFrontE = '' + n;
                this.setCacheChanged();
            };
			
			_Game_Actor.prototype.resetTachieFrontA = function () {
				this._tachieFrontA = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieFrontB = function () {
				this._tachieFrontB = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieFrontC = function () {
				this._tachieFrontC = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieFrontD = function () {
				this._tachieFrontD = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			_Game_Actor.prototype.resetTachieFrontE = function () {
				this._tachieFrontE = REM_TACHIE_NULL;
				this.setCacheChanged();
            };
			
			_Game_Actor.prototype.resetAllTachieFront = function () {
				this.resetTachieFrontA();
				this.resetTachieFrontB();
				this.resetTachieFrontC();
				this.resetTachieFrontD();
				this.resetTachieFrontE();
                this.setCacheChanged();
            };		
			
			_Game_Actor.prototype.getTachieFolderName = function () {
                var folder = 'img/';
				if(this.isKarryn) {
					folder += 'karryn/';
					folder += this.poseName + '/';
				}
				else {
					folder += 'chatface/';
					folder += this.poseName + '/';
				}
				return folder;
            };		
			_Game_Actor.prototype.getTachieCutinFolderName = function () {
                var folder = 'img/';
				if(this.isKarryn) folder += 'karryn/';
				else console.log("getTachieCutinFolderName error, not Karryn");
				folder += 'cutin/';
				return folder;
            };
			
            _Game_Actor.prototype.preloadTachie = function () {
                if(this.isTachieDisabled()) {
                    return;
                }
				
				if(!$gameParty._karrynPrisonVersion36_TachieUpdated && Karryn.isInMapPose()) {
                    return;
                }

				this.doPreloadTachie(this.tachieHoppeFile());
				this.doPreloadTachie(this.tachieSweatFile());
				this.doPreloadTachie(this.tachieMouthFile());
				this.doPreloadTachie(this.tachieHairFile());
				this.doPreloadTachie(this.tachieEyesFile());
				this.doPreloadTachie(this.tachieEyebrowsFile());
				this.doPreloadTachie(this.tachieFaceFile());	
				this.doPreloadTachie(this.tachieBodyFile());
				this.doPreloadTachie(this.tachieLeftArmFile());
				this.doPreloadTachie(this.tachieRightArmFile());		
				this.doPreloadTachie(this.tachieHeadFile());
				this.doPreloadTachie(this.tachieHatFile());	
				this.doPreloadTachie(this.tachieGlassesFile());	
				this.doPreloadTachie(this.tachieTieFile());	
				this.doPreloadTachie(this.tachiePantiesFile());		
				this.doPreloadTachie(this.tachieHolePussyFile());		
				this.doPreloadTachie(this.tachieHoleAnusFile());
				this.doPreloadTachie(this.tachieClothesFile());	
				this.doPreloadTachie(this.tachieSkirtFile());	
				this.doPreloadTachie(this.tachieLegsFile());	
				this.doPreloadTachie(this.tachieMugFile());		
				this.doPreloadTachie(this.tachieStrawFile());	
				this.doPreloadTachie(this.tachieLeftHoleFile());	
				this.doPreloadTachie(this.tachieRightHoleFile());					
				this.doPreloadTachie(this.tachieWeaponFile());
				this.doPreloadTachie(this.tachieBoobsFile());
				this.doPreloadTachie(this.tachieLeftBoobFile());
				this.doPreloadTachie(this.tachieRightBoobFile());
				this.doPreloadTachie(this.tachieBoobsErectionFile());
				this.doPreloadTachie(this.tachiePubicFile());
				this.doPreloadTachie(this.tachieButtFile());
				this.doPreloadTachie(this.tachieCockFile());
				this.doPreloadTachie(this.tachieCockBoobsFile());
				this.doPreloadTachie(this.tachieCockMouthFile());
				this.doPreloadTachie(this.tachieCockFeetFile());
				this.doPreloadTachie(this.tachieCockPussyFile());
				this.doPreloadTachie(this.tachieCockAnalFile());
				this.doPreloadTachie(this.tachieCockRightArmFile());
				this.doPreloadTachie(this.tachieCockLeftArmFile());
				this.doPreloadTachie(this.tachieVisitorAFile());
				this.doPreloadTachie(this.tachieVisitorBFile());
				this.doPreloadTachie(this.tachieVisitorCFile());
				this.doPreloadTachie(this.tachieVisitorDFile());
				this.doPreloadTachie(this.tachieBackAFile());
				this.doPreloadTachie(this.tachieBackBFile());
				this.doPreloadTachie(this.tachieBackCFile());
				this.doPreloadTachie(this.tachieBackDFile());
				this.doPreloadTachie(this.tachieBackEFile());
				this.doPreloadTachie(this.tachieFrontAFile());
				this.doPreloadTachie(this.tachieFrontBFile());
				this.doPreloadTachie(this.tachieFrontCFile());
				this.doPreloadTachie(this.tachieFrontDFile());
				this.doPreloadTachie(this.tachieFrontEFile());
				this.doPreloadTachie(this.tachieClitToyFile());
				this.doPreloadTachie(this.tachiePussyToyFile());
				this.doPreloadTachie(this.tachieAnalToyFile());
				this.doPreloadTachieCutin(this.tachieCutInFile());
                this.doPreloadTachie(this.tachieSemenWetFile());
				this.doPreloadTachie(this.tachieWetPantiesFile());
				this.doPreloadTachie(this.tachieSemenRightArmFile());
				this.doPreloadTachie(this.tachieSemenLeftArmFile());
				this.doPreloadTachie(this.tachieSemenRightLegFile());
				this.doPreloadTachie(this.tachieSemenLeftLegFile());
				this.doPreloadTachie(this.tachieSemenBellyFile());
				this.doPreloadTachie(this.tachieSemenBoobsFile());
				this.doPreloadTachie(this.tachieSemenLeftBoobFile());
				this.doPreloadTachie(this.tachieSemenRightBoobFile());
				this.doPreloadTachie(this.tachieSemenCrotchFile());
				this.doPreloadTachie(this.tachieSemenCrotchPantiesFile());
				this.doPreloadTachie(this.tachieSemenFaceFile());
				this.doPreloadTachie(this.tachieSemenMouthFile());
				this.doPreloadTachie(this.tachieSemenCockMouthFile());
				this.doPreloadTachie(this.tachieSemenCockBoobsFile());
				this.doPreloadTachie(this.tachieSemenCockLeftArmFile());
				this.doPreloadTachie(this.tachieSemenCockRightArmFile());
				this.doPreloadTachie(this.tachieSemenCockPussyFile());
				this.doPreloadTachie(this.tachieSemenCockAnalFile());
				this.doPreloadTachie(this.tachieSemenCockFeetFile());
				this.doPreloadTachie(this.tachieSemenCockNormalFile());
				this.doPreloadTachie(this.tachieSemenFrontAFile());
				this.doPreloadTachie(this.tachieSemenFrontBFile());
				this.doPreloadTachie(this.tachieSemenFrontCFile());
				this.doPreloadTachie(this.tachieSemenFrontDFile());
				this.doPreloadTachie(this.tachieSemenBackFile());
				this.doPreloadTachie(this.tachieSemenDeskFile());
				this.doPreloadTachie(this.tachieSemenButtFile());
				this.doPreloadTachie(this.tachieSemenButtTopRightFile());
				this.doPreloadTachie(this.tachieSemenButtBottomRightFile());
				this.doPreloadTachie(this.tachieSemenButtTopLeftFile());
				this.doPreloadTachie(this.tachieSemenButtBottomLeftFile());
				this.doPreloadTachie(this.tachieSemenAnalFile());
				this.doPreloadTachie(this.tachieDroolMouthFile());
				this.doPreloadTachie(this.tachieDroolFingersFile());
				this.doPreloadTachie(this.tachieDroolNipplesFile());
				
				if($gameParty.isInGloryBattle) {
					this.doPreloadTachie(this.tachieSemenHoleLeftFile());
					this.doPreloadTachie(this.tachieSemenHoleRightFile());
					this.doPreloadTachie(this.tachieSemenToiletSeatFile());
					this.doPreloadTachie(this.tachieWetToiletSeatFile());
					
					for(let i = 0; i < this._liquidGloryCumOnLeftWall.length; ++i)
						this.doPreloadTachie(this.tachieSemenGloryLeftWallFile(i));
					for(let i = 0; i < this._liquidGloryCumOnRightWall.length; ++i)
						this.doPreloadTachie(this.tachieSemenGloryRightWallFile(i));
					for(let i = 0; i < this._liquidGloryCumOnLeftHole.length; ++i)
						this.doPreloadTachie(this.tachieSemenGloryLeftHoleFile(i));
					for(let i = 0; i < this._liquidGloryCumOnRightHole.length; ++i)
						this.doPreloadTachie(this.tachieSemenGloryRightHoleFile(i));
					for(let i = 0; i < this._liquidGloryCumOnLeftToilet.length; ++i)
						this.doPreloadTachie(this.tachieSemenGloryLeftToiletFile(i));
					for(let i = 0; i < this._liquidGloryCumOnRightToilet.length; ++i)
						this.doPreloadTachie(this.tachieSemenGloryRightToiletFile(i));
				}
            };
			
            _Game_Actor.prototype.preloadFaces = function (tachieFaces) {
                for (var _i = 0, tachieFaces_1 = tachieFaces; _i < tachieFaces_1.length; _i++) {
                    var tachieFace = tachieFaces_1[_i];
                    this.doPreloadTachie(this.tachieBaseId + 'face_' + tachieFace);
                }
            };
            _Game_Actor.prototype.doPreloadTachie = function (file) {
                if (!file) {
                    return;
                }
                ImageManager.loadTachie(file, this.getTachieFolderName());
            };
			_Game_Actor.prototype.doPreloadTachieCutin = function (file) {
                if (!file) {
                    return;
                }
				let cutinArray = this.getCutInArray();
				if(cutinArray[CUT_IN_ARRAY_BACK_NAME_ID])
					ImageManager.loadTachie(cutinArray[CUT_IN_ARRAY_BACK_NAME_ID], this.getTachieCutinFolderName());
				if(cutinArray[CUT_IN_ARRAY_FRONT_NAME_ID])
					ImageManager.loadTachie(cutinArray[CUT_IN_ARRAY_FRONT_NAME_ID], this.getTachieCutinFolderName());
				
				if(ConfigManager.remCutinsSmootherLoading && cutinArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].length > 0) {
					for(let i = 0; i < cutinArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].length; ++i) {
						ImageManager.loadTachie(cutinArray[CUT_IN_ARRAY_PRELOAD_LIST_ID][i], this.getTachieCutinFolderName());
					}
				}
				
				//ImageManager.loadTachie(file, this.getTachieCutinFolderName());
            };
			
            _Game_Actor.prototype.tachieBodyFile = function () {
				if (!this.hasTachieBody()) {
                    return null;
                }
				
				return this.tachieBaseId + 'body_' + this.tachieBodyExtension + this.tachieBody;
            };
			
			_Game_Actor.prototype.tachieRightArmFile = function () {
				if(!this.hasTachieRightArm()) return null;
				else return this.tachieBaseId + 'rightarm_' + this.tachieRightArm;
				
            };
			_Game_Actor.prototype.tachieLeftArmFile = function () {
				if(!this.hasTachieLeftArm()) return null;
				return this.tachieBaseId + 'leftarm_' + this.tachieLeftArm;			
            };
			_Game_Actor.prototype.tachieHeadFile = function () {
				if(this.tachieHead == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'head_' + this.tachieHead;
            };	
			_Game_Actor.prototype.tachieGlassesFile = function () {
				if(this.tachieGlasses == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'glasses_' + this.tachieGlasses;
            };	
			_Game_Actor.prototype.tachieTieFile = function () {
				if(this.tachieTie == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'tie_' + this.tachieTie;
            };	
			_Game_Actor.prototype.tachieWeaponFile = function () {
				if(this.tachieWeapon == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'weapon_' + this.tachieWeapon;
            };	
			_Game_Actor.prototype.tachieHatFile = function () {
				if(this.tachieHat == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'hat_' + this.tachieHat;
            };	
			_Game_Actor.prototype.tachiePantiesFile = function () {
				if(this.tachiePanties == REM_TACHIE_NULL || !this.isWearingPanties()) return null;
                return this.tachieBaseId + 'panties_' + this.tachiePanties;
            };	
			_Game_Actor.prototype.tachieHolePussyFile = function () {
				if(this.tachieHolePussy == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'ana_manko_' + this.tachieHolePussy;
            };	
			_Game_Actor.prototype.tachieHoleAnusFile = function () {
				if(this.tachieHoleAnus == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'ana_anaru_' + this.tachieHoleAnus;
            };	
			_Game_Actor.prototype.tachiePubicFile = function () {
				if(this.tachiePubicId() == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'pubic_' + this.tachiePubicId();
            };	
			_Game_Actor.prototype.tachieClothesFile = function () {
				if(this.tachieClothes == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'clothes_' + this.tachieClothes;
            };
			_Game_Actor.prototype.tachieSkirtFile = function () {
				if(this.tachieSkirt == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'skirt_' + this.tachieSkirt;
            };
			_Game_Actor.prototype.tachieLegsFile = function () {
				if(this.tachieLegs == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'legs_' + this.tachieLegs;
            };
			_Game_Actor.prototype.tachieMugFile = function () {
				if(this.tachieMugId() == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'mug_' + this.tachieMugId();
            };	
			_Game_Actor.prototype.tachieStrawFile = function () {
				if(this.tachieStraw == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'straw_' + this.tachieStraw;
            };	
			_Game_Actor.prototype.tachieLeftHoleFile = function () {
				if(this.tachieLeftHole == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'hole_left_' + this.tachieLeftHole;
            };
			_Game_Actor.prototype.tachieRightHoleFile = function () {
				if(this.tachieRightHole == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'hole_right_' + this.tachieRightHole;
            };
			_Game_Actor.prototype.tachieBoobsFile = function () {
				if(this.tachieBoobs == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'boobs_' + this.tachieBoobs;
            };	
			_Game_Actor.prototype.tachieLeftBoobFile = function () {
				if(this.tachieLeftBoob == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'leftboob_' + this.tachieLeftBoob;
            };	
			_Game_Actor.prototype.tachieRightBoobFile = function () {
				if(this.tachieRightBoob == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'rightboob_' + this.tachieRightBoob;
            };	
			_Game_Actor.prototype.tachieBoobsErectionFile = function () {
				if(this.tachieBoobsErection == false || !this.isAroused()) return null;
                return this.tachieBaseId + 'boobs_bokki';
            };	
			_Game_Actor.prototype.tachieButtFile = function () {
				if(this.tachieButt == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'butt_' + this.tachieButt;
            };	
			_Game_Actor.prototype.tachieCockFile = function () {
				if(this.tachieCock == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_' + this.tachieCock;
            };	
			_Game_Actor.prototype.tachieCockBoobsFile = function () {
				if(this.tachieCockBoobs == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_boobs_' + this.tachieCockBoobs;
            };	
			_Game_Actor.prototype.tachieCockMouthFile = function () {
				if(this.tachieCockMouth == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_mouth_' + this.tachieCockMouth;
            };
			_Game_Actor.prototype.tachieCockFeetFile = function () {
				if(this.tachieCockFeet == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_feet_' + this.tachieCockFeet;
            };
			_Game_Actor.prototype.tachieCockPussyFile = function () {
				if(this.tachieCockPussy == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_manko_' + this.tachieCockPussy;
            };
			_Game_Actor.prototype.tachieCockAnalFile = function () {
				if(this.tachieCockAnal == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_anaru_' + this.tachieCockAnal;
            };
			_Game_Actor.prototype.tachieCockRightArmFile = function () {
				if(this.tachieCockRightArm == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_rightarm_' + this.tachieCockRightArm;
            };
			_Game_Actor.prototype.tachieCockLeftArmFile = function () {
				if(this.tachieCockLeftArm == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'chin_leftarm_' + this.tachieCockLeftArm;
            };
			
			_Game_Actor.prototype.tachieVisitorAFile = function () {
				if(this.tachieVisitorA == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'visitorA_' + this.tachieVisitorA;
            };
			_Game_Actor.prototype.tachieVisitorBFile = function () {
				if(this.tachieVisitorB == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'visitorB_' + this.tachieVisitorB;
            };
			_Game_Actor.prototype.tachieVisitorCFile = function () {
				if(this.tachieVisitorC == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'visitorC_' + this.tachieVisitorC;
            };
			_Game_Actor.prototype.tachieVisitorDFile = function () {
				if(this.tachieVisitorD == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'visitorD_' + this.tachieVisitorD;
            };
			
			_Game_Actor.prototype.tachieBackAFile = function () {
				if(this.tachieBackA == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'backA_' + this.tachieBackA;
            };
			_Game_Actor.prototype.tachieBackBFile = function () {
				if(this.tachieBackB == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'backB_' + this.tachieBackB;
            };
			_Game_Actor.prototype.tachieBackCFile = function () {
				if(this.tachieBackC == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'backC_' + this.tachieBackC;
            };
			_Game_Actor.prototype.tachieBackDFile = function () {
				if(this.tachieBackD == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'backD_' + this.tachieBackD;
            };
			_Game_Actor.prototype.tachieBackEFile = function () {
				if(this.tachieBackE == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'backE_' + this.tachieBackE;
            };
			_Game_Actor.prototype.tachieFrontAFile = function () {
				if(this.tachieFrontA == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'frontA_' + this.tachieFrontA;
            };	
			_Game_Actor.prototype.tachieFrontBFile = function () {
				if(this.tachieFrontB == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'frontB_' + this.tachieFrontB;
            };	
			_Game_Actor.prototype.tachieFrontCFile = function () {
				if(this.tachieFrontC == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'frontC_' + this.tachieFrontC;
            };	
			_Game_Actor.prototype.tachieFrontDFile = function () {
				if(this.tachieFrontD == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'frontD_' + this.tachieFrontD;
            };	
			_Game_Actor.prototype.tachieFrontEFile = function () {
				if(this.tachieFrontE == REM_TACHIE_NULL) return null;
                return this.tachieBaseId + 'frontE_' + this.tachieFrontE;
            };	
			_Game_Actor.prototype.tachieClitToyFile = function () {
				let id = this.getClitToyId();
				if(!id || id == NO_TOY) return null;
                return this.tachieBaseId + 'toyC_' + id;
            };	
			_Game_Actor.prototype.tachiePussyToyFile = function () {
				let id = this.getPussyToyId();
				if(!id || id == NO_TOY) return null;
				if(Karryn.isCensored())
					return this.tachieBaseId + 'toyP_' + id + '_cen';
				else
					return this.tachieBaseId + 'toyP_' + id;
            };	
			_Game_Actor.prototype.tachieAnalToyFile = function () {
				let id = this.getAnalToyId();
				if(!id || id == NO_TOY) return null;
                return this.tachieBaseId + 'toyA_' + id;
            };	
			_Game_Actor.prototype.tachieSemenWetFile = function () {
				let id = this.getTachieWetId();
				if(!id || (this.isWearingPanties() && this.getTachieWetPantiesId())) return null;
                return this.tachieBaseId + 'zaa_wet_' + id;
            };	
			_Game_Actor.prototype.tachieWetPantiesFile = function () {
				let id = this.getTachieWetPantiesId();
				if(!id || !this.isWearingPanties()) return null;
                return this.tachieBaseId + 'zaa_wet_panties_' + id;
            };	
			_Game_Actor.prototype.tachieSemenRightArmFile = function () {
				let id = this.getTachieSemenRightArmId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_rightarm_' + id;
            };	
			_Game_Actor.prototype.tachieSemenLeftArmFile = function () {
				let id = this.getTachieSemenLeftArmId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_leftarm_' + id;
            };	
			_Game_Actor.prototype.tachieSemenRightLegFile = function () {
				let id = this.getTachieSemenRightLegId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_rightleg_' + id;
            };	
			_Game_Actor.prototype.tachieSemenLeftLegFile = function () {
				let id = this.getTachieSemenLeftLegId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_leftleg_' + id;
            };	
			
			_Game_Actor.prototype.tachieSemenBellyFile = function () {
				let id = this.getTachieSemenBellyId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_belly_' + id;
            };	
			_Game_Actor.prototype.tachieSemenBoobsFile = function () {
				let id = this.getTachieSemenBoobsId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_boobs_' + id;
            };	
			_Game_Actor.prototype.tachieSemenLeftBoobFile = function () {
				let id = this.getTachieSemenLeftBoobId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_leftboob_' + id;
            };	
			_Game_Actor.prototype.tachieSemenRightBoobFile = function () {
				let id = this.getTachieSemenRightBoobId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_rightboob_' + id;
            };	
			_Game_Actor.prototype.tachieSemenBackFile = function () {
				let id = this.getTachieSemenBackId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_back_' + id;
            };
			_Game_Actor.prototype.tachieSemenDeskFile = function () {
				let id = this.getTachieSemenDeskId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_desk_' + id;
            };
			_Game_Actor.prototype.tachieSemenButtFile = function () {
				let id = this.getTachieSemenButtId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_butt_' + id;
            };
			_Game_Actor.prototype.tachieSemenButtTopRightFile = function () {
				let id = this.getTachieSemenButtTopRightId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_butt_right_ue_' + id;
            };
			_Game_Actor.prototype.tachieSemenButtBottomRightFile = function () {
				let id = this.getTachieSemenButtBottomRightId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_butt_right_sita_' + id;
            };
			_Game_Actor.prototype.tachieSemenButtTopLeftFile = function () {
				let id = this.getTachieSemenButtTopLeftId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_butt_left_ue_' + id;
            };
			_Game_Actor.prototype.tachieSemenButtBottomLeftFile = function () {
				let id = this.getTachieSemenButtBottomLeftId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_butt_left_sita_' + id;
            };
			_Game_Actor.prototype.tachieSemenAnalFile = function () {
				let id = this.getTachieSemenAnalId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_anaru_' + id;
            };	
			_Game_Actor.prototype.tachieSemenCrotchFile = function () {
				let id = this.getTachieSemenCrotchId();
				if(!id || (this.isWearingPanties() && this.getTachieSemenCrotchPantiesId())) return null;
                return this.tachieBaseId + 'zaa_crotch_' + id;
            };	
			_Game_Actor.prototype.tachieSemenCrotchPantiesFile = function () {
				let id = this.getTachieSemenCrotchPantiesId();
				if(!id || !this.isWearingPanties()) return null;
                return this.tachieBaseId + 'zaa_crotch_panties_' + id;
            };	
			
			_Game_Actor.prototype.tachieSemenFaceFile = function () {
				let id = this.getTachieSemenFaceId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_face_' + id;
            };	
			_Game_Actor.prototype.tachieSemenMouthFile = function () {
				let id = this.getTachieSemenMouthId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_mouth_' + id;
            };	
			
			_Game_Actor.prototype.tachieSemenCockMouthFile = function () {
				let id = this.getTachieSemenCockMouthId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_mouth_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockBoobsFile = function () {
				let id = this.getTachieSemenCockBoobsId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_boobs_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockRightArmFile = function () {
				let id = this.getTachieSemenCockRightArmId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_rightarm_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockLeftArmFile = function () {
				let id = this.getTachieSemenCockLeftArmId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_leftarm_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockPussyFile = function () {
				let id = this.getTachieSemenCockPussyId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_manko_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockAnalFile = function () {
				let id = this.getTachieSemenCockAnalId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_anaru_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockFeetFile = function () {
				let id = this.getTachieSemenCockFeetId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_feet_' + id;
            };
			_Game_Actor.prototype.tachieSemenCockNormalFile = function () {
				let id = this.getTachieSemenCockNormalId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_chin_' + id;
            };
			
			_Game_Actor.prototype.tachieSemenHoleLeftFile = function () {
				let id = this.getTachieSemenHoleLeftId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_hole_left_' + id;
            };
			_Game_Actor.prototype.tachieSemenHoleRightFile = function () {
				let id = this.getTachieSemenHoleRightId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_hole_right_' + id;
            };
			_Game_Actor.prototype.tachieSemenToiletSeatFile = function () {
				let id = this.getTachieSemenToiletSeatId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_toiletseat_crotch_' + id;
            };
			_Game_Actor.prototype.tachieWetToiletSeatFile = function () {
				let id = this.getTachieWetToiletSeatId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_toiletseat_wet_' + id;
            };
			
			_Game_Actor.prototype.tachieSemenGloryLeftWallFile = function (index) {
				let id = this.getTachieGlorySemenLeftWallId(index);
				if(!id) return null;
				let indexLetter = 'a';
				if(index === 0) indexLetter = 'a';
				else if(index === 1) indexLetter = 'b';
				else if(index === 2) indexLetter = 'c';
				else if(index === 3) indexLetter = 'd';
				else if(index === 4) indexLetter = 'e';
				else if(index === 5) indexLetter = 'f';
				else if(index === 6) indexLetter = 'g';
				else if(index === 7) indexLetter = 'h';
				else if(index === 8) indexLetter = 'i';
                return this.tachieBaseId + 'zaa_glory_leftwall_' + indexLetter + '_' + id;
            };
			_Game_Actor.prototype.tachieSemenGloryRightWallFile = function (index) {
				let id = this.getTachieGlorySemenRightWallId(index);
				if(!id) return null;
				let indexLetter = 'a';
				if(index === 0) indexLetter = 'a';
				else if(index === 1) indexLetter = 'b';
				else if(index === 2) indexLetter = 'c';
				else if(index === 3) indexLetter = 'd';
				else if(index === 4) indexLetter = 'e';
				else if(index === 5) indexLetter = 'f';
				else if(index === 6) indexLetter = 'g';
				else if(index === 7) indexLetter = 'h';
				else if(index === 8) indexLetter = 'i';
                return this.tachieBaseId + 'zaa_glory_rightwall_' + indexLetter + '_' + id;
            };
			_Game_Actor.prototype.tachieSemenGloryLeftHoleFile = function (index) {
				let id = this.getTachieGlorySemenLeftHoleId(index);
				if(!id) return null;
				let indexLetter = 'a';
				if(index === 0) indexLetter = 'a';
				else if(index === 1) indexLetter = 'b';
                return this.tachieBaseId + 'zaa_glory_lefthole_' + indexLetter + '_' + id;
            };
			_Game_Actor.prototype.tachieSemenGloryRightHoleFile = function (index) {
				let id = this.getTachieGlorySemenRightHoleId(index);
				if(!id) return null;
				let indexLetter = 'a';
				if(index === 0) indexLetter = 'a';
				else if(index === 1) indexLetter = 'b';
                return this.tachieBaseId + 'zaa_glory_righthole_' + indexLetter + '_' + id;
            };
			_Game_Actor.prototype.tachieSemenGloryLeftToiletFile = function (index) {
				let id = this.getTachieGlorySemenLeftToiletId(index);
				if(!id) return null;
				if(index === 0) indexLetter = 'a';
				else if(index === 1) indexLetter = 'b';
				else if(index === 2) indexLetter = 'c';
				else if(index === 3) indexLetter = 'd';
                return this.tachieBaseId + 'zaa_glory_lefttoilet_' + indexLetter + '_' + id;
            };
			_Game_Actor.prototype.tachieSemenGloryRightToiletFile = function (index) {
				let id = this.getTachieGlorySemenRightToiletId(index);
				if(!id) return null;
				if(index === 0) indexLetter = 'a';
				else if(index === 1) indexLetter = 'b';
				else if(index === 2) indexLetter = 'c';
				else if(index === 3) indexLetter = 'd';
                return this.tachieBaseId + 'zaa_glory_righttoilet_' + indexLetter + '_' + id;
            };
			
			
			_Game_Actor.prototype.tachieSemenFrontAFile = function () {
				let id = this.getTachieSemenFrontAId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_frontA_' + id;
            };
			_Game_Actor.prototype.tachieSemenFrontBFile = function () {
				let id = this.getTachieSemenFrontBId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_frontB_' + id;
            };
			_Game_Actor.prototype.tachieSemenFrontCFile = function () {
				let id = this.getTachieSemenFrontCId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_frontC_' + id;
            };
			_Game_Actor.prototype.tachieSemenFrontDFile = function () {
				let id = this.getTachieSemenFrontDId();
				if(!id) return null;
                return this.tachieBaseId + 'zaa_frontD_' + id;
            };
			
			_Game_Actor.prototype.tachieDroolMouthFile = function () {
				let id = this.getTachieDroolMouthId();
				if(!id) return null;
                return this.tachieBaseId + 'yodare_mouth_' + id;
            };	
			_Game_Actor.prototype.tachieDroolFingersFile = function () {
				let id = this.getTachieDroolFingersId();
				if(!id) return null;
                return this.tachieBaseId + 'yodare_finger_' + id;
            };	
			_Game_Actor.prototype.tachieDroolNipplesFile = function () {
				let id = this.getTachieDroolNipplesId();
				if(!id) return null;
                return this.tachieBaseId + 'yodare_chikubi_' + id;
            };	
			
			_Game_Actor.prototype.tachieHoppeFile = function () {
                if (this.tachieHoppe == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieBaseId + 'hoppe_' + this.tachieHoppe;
            };
			_Game_Actor.prototype.tachieSweatFile = function () {
                if (this.tachieSweat == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieBaseId + 'sweat_' + this.tachieSweat;
            };
			_Game_Actor.prototype.tachieEyebrowsFile = function () {
                if (this.tachieEyebrows == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieBaseId + 'eyebrows_' + this.tachieEyebrows;
            };
			_Game_Actor.prototype.tachieMouthFile = function () {
                if (this.tachieMouth == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieBaseId + 'mouth_' + this.tachieMouth;
            };
			_Game_Actor.prototype.tachieEyesFile = function () {
                if (this.tachieEyes == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieBaseId + 'eyes_' + this.tachieEyes;
            };
			_Game_Actor.prototype.tachieHairFile = function () {
                if (this.tachieHair == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieBaseId + 'hair_' + this.tachieHair;
            };
			_Game_Actor.prototype.tachieCutInFile = function () {
                if (this.tachieCutIn == REM_TACHIE_NULL) {
                    return null;
                }
                return this.tachieCutIn;
            };
            _Game_Actor.prototype.tachieFaceFile = function () {
				if(this.tachieFace == 0) return null;
                return this.tachieBaseId + 'face_' + this.tachieFace;
            };
            _Game_Actor.prototype.isTachieDisabled = function () {
				return !this.showTachie || this.poseName === POSE_NULL;
            };
           
            return _Game_Actor;
        }(Game_Actor));
        var _Game_Picture = (function (_super) {
            __extends(_Game_Picture, _super);
            function _Game_Picture() {
                _super.apply(this, arguments);
            }
            _Game_Picture.prototype.initTarget = function () {
                _Game_Picture_initTarget.call(this);
                this.tachieActorId = this.getTachieActorId();
            };
            _Game_Picture.prototype.getTachieActorId = function () {
                var matcher = /^___actor([-+]?\d+)/;
                var result = matcher.exec(this._name);
                if (result && result.length > 1) {
                    return parseInt(result[1]) || 0;
                }
                else {
                    return 0;
                }
            };
            return _Game_Picture;
        }(Game_Picture));
        ImageManager.loadTachie = function (filename, folder, hue) {
            return this.loadBitmap(folder, filename, hue, true);
        };
        ImageManager.loadSpriteSheet = function (file) {
            var loader = new PIXI.loaders.Loader();
            loader.add({ name: '', url: file });
            loader.load(); // ロード開始!
        };
        var _ImageManager_isReady = ImageManager.isReady;
        ImageManager.isReady = function () {
            for (var key in this.cache._inner) {
                var bitmap = this.cache._inner[key].item;
                if (bitmap.isError()) {
                    if (bitmap.url.indexOf('tachie') >= 0 || bitmap.url.indexOf('karryn') >= 0) {
                        console.error('Failed to load: ' + bitmap.url);
                        this.cache._inner[key].item = new Bitmap();
						let error = new Error('Failed to load: ' + bitmap.url);
						Graphics.printErrorDetail(error, decodeURIComponent(error.filename));
                        continue;
                    }
                    else {
                        throw new Error('Failed to load: ' + bitmap.url);
                    }
                }
                if (!bitmap.isReady()) {
                    return false;
                }
            }
            return true;
        };
        Decrypter.decryptImg = function (url, bitmap) {
            url = this.extToEncryptExt(url);
            var requestFile = new XMLHttpRequest();
            requestFile.open("GET", url);
            requestFile.responseType = "arraybuffer";
            requestFile.send();
            requestFile.onload = function () {
                if (this.status < Decrypter._xhrOk) {
                    var arrayBuffer = Decrypter.decryptArrayBuffer(requestFile.response);
                    bitmap._image.src = Decrypter.createBlobUrl(arrayBuffer);
                    bitmap._image.onload = Bitmap.prototype._onLoad.bind(bitmap);
                    bitmap._image.onerror = Bitmap.prototype._onError.bind(bitmap);
                }
            };
            requestFile.onerror = function () {
                if (url.indexOf('tachie') >= 0) {
                    bitmap._image = new Image();
                    Bitmap.prototype._onLoad.call(bitmap);
                }
            };
        };
        var _Game_Temp = (function (_super) {
            __extends(_Game_Temp, _super);
            function _Game_Temp() {
                _super.apply(this, arguments);
            }
            _Game_Temp.prototype.getActorBitmapBodyCache = function (actor) {
                this.actorBitmapBodyCache = this.actorBitmapBodyCache || {};
                var actorId = actor.actorId();
                if (actor.temp) {
                    actorId = -1;
                }
                if (!this.actorBitmapBodyCache[actorId]) {
                    this.actorBitmapBodyCache[actorId] = new Bitmap(Graphics.width + TACHIE_REM_CUSTOM_WIDTH, Graphics.height+TACHIE_REM_CUSTOM_HEIGHT);
                }
                return this.actorBitmapBodyCache[actorId];
            };
            _Game_Temp.prototype.getPictureBitmapCache = function (actorId) {
                this.actorBitmapCache = this.actorBitmapCache || {};
                if (!this.actorBitmapCache[actorId]) {
                    this.actorBitmapCache[actorId] = new Bitmap(Graphics.width + TACHIE_REM_CUSTOM_WIDTH, Graphics.height+TACHIE_REM_CUSTOM_HEIGHT);
                }
                return this.actorBitmapCache[actorId];
            };
            return _Game_Temp;
        }(Game_Temp));
        var _Game_Screen = (function (_super) {
            __extends(_Game_Screen, _super);
            function _Game_Screen() {
                _super.apply(this, arguments);
            }
            _Game_Screen.prototype.showActorPicture = function (actorId, pictureId, x, y) {
                var name = ACTOR_PREFIX + actorId;
                this.showPicture(pictureId, name, 0, x, y, 1, 1, 1, 0);
            };
            _Game_Screen.prototype.getPictureId = function (picture) {
                for (var i = 0; i < this._pictures.length; i++) {
                    if (this._pictures[i] === picture) {
                        return i;
                    }
                }
                console.error('picture not found.' + picture);
            };
            return _Game_Screen;
        }(Game_Screen));
        var TachieDrawerMixin = function () {
            this.drawTachie = function (actorId, bitmap, x, y, rect, tachieFace, scale, clearByDraw) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (tachieFace === void 0) { tachieFace = 0; }
				//THIS IS SCALE
                if (scale === void 0) { scale = 1; }
                if (clearByDraw === void 0) { clearByDraw = false; }
                var actor = $gameActors.actor(actorId);
                if (!actor) {
                    console.error('アクターが存在しないため、描画をしませんでした。actorId:' + actorId);
                    return false;
                }
                return this.drawTachieActor(actor, bitmap, x, y, rect, tachieFace, scale, clearByDraw);
            };
            this.drawTachieActor = function (actor, bitmap, x, y, rect, tachieFace, scale, clearByDraw) {
			    if(actor.isTachieDisabled()) {
                    return true;
                }
				if(!$gameParty._karrynPrisonVersion36_TachieUpdated && Karryn.isInMapPose()) {
                    return true;
                }
				
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (tachieFace === void 0) { tachieFace = 0; }
                if (scale === void 0) { scale = 1; }
                if (clearByDraw === void 0) { clearByDraw = false; }
                if (!ImageManager.isReady()) {
                    return false;
                }

                actor.preloadTachie();

                if (!ImageManager.isReady()) {
                    return false;
                }
                var point = this.calcTachieActorPos(actor);
                if (clearByDraw) {
                    bitmap.clear();
                }
                if (!rect) {
                    rect = new Rectangle(0, 0, 0, 0);
                    x += point.x;
                    y += point.y;
                }
                //rect.x += point.x;
                //rect.y += point.y;
				
                var cache = $gameTemp.getActorBitmapBodyCache(actor);
                actor.clearDirty();
				
				let customLayers = actor.getCustomTachieLayerLoadout();
				
				//if(actor.actorId() === ACTOR_CHAT_FACE_ID) 
				//	customLayers = actor.getCustomTachieLayerLoadout_Chatface();
				
				if(customLayers && customLayers.length > 0) {
					if(actor.isCacheChanged()) {
						cache.clear();
						actor.clearCacheChanged();
						
						for(let i = customLayers.length - 1; i >= 0; --i) {
							let layerType = customLayers[i]
							
							if(layerType === LAYER_TYPE_BODY)
								this.drawTachieBody(actor, cache);
							else if(layerType === LAYER_TYPE_HEAD)
								this.drawTachieHead(actor, cache);
							else if(layerType === LAYER_TYPE_FACE)
								this.drawTachieFace(actor, cache, tachieFace);
							else if(layerType === LAYER_TYPE_GLASSES)
								this.drawTachieGlasses(actor, cache);
							else if(layerType === LAYER_TYPE_TIE)
								this.drawTachieTie(actor, cache);
							else if(layerType === LAYER_TYPE_LEFT_ARM)
								this.drawTachieLeftArm(actor, cache);
							else if(layerType === LAYER_TYPE_RIGHT_ARM)
								this.drawTachieRightArm(actor, cache);
							else if(layerType === LAYER_TYPE_HAT)
								this.drawTachieHat(actor, cache);
							else if(layerType === LAYER_TYPE_TOY_CLIT)
								this.drawTachieClitToy(actor, cache);
							else if(layerType === LAYER_TYPE_TOY_PUSSY)
								this.drawTachiePussyToy(actor, cache);
							else if(layerType === LAYER_TYPE_TOY_ANAL)
								this.drawTachieAnalToy(actor, cache);
							else if(layerType === LAYER_TYPE_WEAPON)
								this.drawTachieWeapon(actor, cache);
							else if(layerType === LAYER_TYPE_PANTIES)
								this.drawTachiePanties(actor, cache);
							else if(layerType === LAYER_TYPE_HOLE_PUSSY)
								this.drawTachieHolePussy(actor, cache);
							else if(layerType === LAYER_TYPE_HOLE_ANUS)
								this.drawTachieHoleAnus(actor, cache);
							else if(layerType === LAYER_TYPE_MUG)
								this.drawTachieMug(actor, cache);
							else if(layerType === LAYER_TYPE_STRAW)
								this.drawTachieStraw(actor, cache);
							else if(layerType === LAYER_TYPE_LEFT_HOLE)
								this.drawTachieLeftHole(actor, cache);
							else if(layerType === LAYER_TYPE_RIGHT_HOLE)
								this.drawTachieRightHole(actor, cache);
							else if(layerType === LAYER_TYPE_CLOTHES)
								this.drawTachieClothes(actor, cache);
							else if(layerType === LAYER_TYPE_SKIRT)
								this.drawTachieSkirt(actor, cache);
							else if(layerType === LAYER_TYPE_LEGS)
								this.drawTachieLegs(actor, cache);
							else if(layerType === LAYER_TYPE_VISITOR_A)
								this.drawTachieFile(actor.tachieVisitorAFile(), cache, actor);
							else if(layerType === LAYER_TYPE_VISITOR_B)
								this.drawTachieFile(actor.tachieVisitorBFile(), cache, actor);
							else if(layerType === LAYER_TYPE_VISITOR_C)
								this.drawTachieFile(actor.tachieVisitorCFile(), cache, actor);
							else if(layerType === LAYER_TYPE_VISITOR_D)
								this.drawTachieFile(actor.tachieVisitorDFile(), cache, actor);
							else if(layerType === LAYER_TYPE_BACK_A)
								this.drawTachieFile(actor.tachieBackAFile(), cache, actor);
							else if(layerType === LAYER_TYPE_BACK_B)
								this.drawTachieFile(actor.tachieBackBFile(), cache, actor);
							else if(layerType === LAYER_TYPE_BACK_C)
								this.drawTachieFile(actor.tachieBackCFile(), cache, actor);
							else if(layerType === LAYER_TYPE_BACK_D)
								this.drawTachieFile(actor.tachieBackDFile(), cache, actor);
							else if(layerType === LAYER_TYPE_BACK_E)
								this.drawTachieFile(actor.tachieBackEFile(), cache, actor);
							else if(layerType === LAYER_TYPE_FRONT_A)
								this.drawTachieFile(actor.tachieFrontAFile(), cache, actor);
							else if(layerType === LAYER_TYPE_FRONT_B)
								this.drawTachieFile(actor.tachieFrontBFile(), cache, actor);
							else if(layerType === LAYER_TYPE_FRONT_C)
								this.drawTachieFile(actor.tachieFrontCFile(), cache, actor);
							else if(layerType === LAYER_TYPE_FRONT_D)
								this.drawTachieFile(actor.tachieFrontDFile(), cache, actor);
							else if(layerType === LAYER_TYPE_FRONT_E)
								this.drawTachieFile(actor.tachieFrontEFile(), cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_FRONT_A)
								this.drawTachieFile(actor.tachieSemenFrontAFile(), cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_FRONT_B)
								this.drawTachieFile(actor.tachieSemenFrontBFile(), cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_FRONT_C)
								this.drawTachieFile(actor.tachieSemenFrontCFile(), cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_FRONT_D)
								this.drawTachieFile(actor.tachieSemenFrontDFile(), cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_FRONT_E)
								this.drawTachieFile(actor.tachieSemenFrontEFile(), cache, actor);
							
							else if(layerType === LAYER_TYPE_BUTT)
								this.drawTachieButt(actor, cache);
							else if(layerType === LAYER_TYPE_BOOBS)
								this.drawTachieBoobs(actor, cache);
							else if(layerType === LAYER_TYPE_LEFT_BOOB)
								this.drawTachieLeftBoob(actor, cache);
							else if(layerType === LAYER_TYPE_RIGHT_BOOB)
								this.drawTachieRightBoob(actor, cache);
							else if(layerType === LAYER_TYPE_ERECT_BOOBS)
								this.drawTachieBoobsErection(actor, cache);
							else if(layerType === LAYER_TYPE_PUBIC)
								this.drawTachiePubic(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_NORMAL)
								this.drawTachieCock(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_BOOBS)
								this.drawTachieCockBoobs(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_MOUTH)
								this.drawTachieCockMouth(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_FEET)
								this.drawTachieCockFeet(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_PUSSY)
								this.drawTachieCockPussy(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_ANAL)
								this.drawTachieCockAnal(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_RIGHT_ARM)
								this.drawTachieCockRightArm(actor, cache);
							else if(layerType === LAYER_TYPE_COCK_LEFT_ARM)
								this.drawTachieCockLeftArm(actor, cache);
							else if(layerType === LAYER_TYPE_HOPPE)
								this.drawTachieHoppe(actor, cache);
							else if(layerType === LAYER_TYPE_SWEAT)
								this.drawTachieSweat(actor, cache);
							else if(layerType === LAYER_TYPE_HAIR)
								this.drawTachieHair(actor, cache);
							else if(layerType === LAYER_TYPE_EYES)
								this.drawTachieEyes(actor, cache);
							else if(layerType === LAYER_TYPE_EYEBROWS)
								this.drawTachieEyebrows(actor, cache);
							else if(layerType === LAYER_TYPE_MOUTH)
								this.drawTachieMouth(actor, cache);
							else if(layerType === LAYER_TYPE_WET)
								this.drawTachieSemenWet(actor, cache);
							else if(layerType === LAYER_TYPE_WET_PANTIES)
								this.drawTachieWetPanties(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_PUSSY)
								this.drawTachieSemenCrotch(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_PUSSY_PANTIES)
								this.drawTachieSemenCrotchPanties(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_RIGHT_ARM)
								this.drawTachieSemenRightArm(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_LEFT_ARM)
								this.drawTachieSemenLeftArm(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_RIGHT_LEG)
								this.drawTachieSemenRightLeg(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_LEFT_LEG)
								this.drawTachieSemenLeftLeg(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_BOOBS)
								this.drawTachieSemenBoobs(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_RIGHT_BOOB)
								this.drawTachieSemenRightBoob(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_LEFT_BOOB)
								this.drawTachieSemenLeftBoob(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_BELLY)
								this.drawTachieSemenBelly(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_BACK)
								this.drawTachieSemenBack(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_DESK)
								this.drawTachieSemenDesk(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_BUTT)
								this.drawTachieSemenButt(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT)
								this.drawTachieFile(actor.tachieSemenButtTopLeftFile(),cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT)
								this.drawTachieFile(actor.tachieSemenButtTopRightFile(),cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT)
								this.drawTachieFile(actor.tachieSemenButtBottomRightFile(),cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT)
								this.drawTachieFile(actor.tachieSemenButtBottomLeftFile(),cache, actor);
							else if(layerType === LAYER_TYPE_SEMEN_ANAL)
								this.drawTachieSemenAnal(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_FACE)
								this.drawTachieSemenFace(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_MOUTH)
								this.drawTachieSemenMouth(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_MOUTH)
								this.drawTachieSemenCockMouth(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_BOOBS)
								this.drawTachieSemenCockBoobs(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_RIGHT_ARM)
								this.drawTachieSemenCockRightArm(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_LEFT_ARM)
								this.drawTachieSemenCockLeftArm(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_PUSSY)
								this.drawTachieSemenCockPussy(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_ANAL)
								this.drawTachieSemenCockAnal(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_FEET)
								this.drawTachieSemenCockFeet(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_COCK_NORMAL)
								this.drawTachieSemenCockNormal(actor, cache);
							else if(layerType === LAYER_TYPE_DROOL_MOUTH)
								this.drawTachieDroolMouth(actor, cache);
							else if(layerType === LAYER_TYPE_DROOL_FINGERS)
								this.drawTachieDroolFingers(actor, cache);
							else if(layerType === LAYER_TYPE_DROOL_NIPPLES)
								this.drawTachieDroolNipples(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_HOLE_LEFT)
								this.drawTachieSemenHoleLeft(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_HOLE_RIGHT)
								this.drawTachieSemenHoleRight(actor, cache);
							else if(layerType === LAYER_TYPE_SEMEN_TOILET_SEAT)
								this.drawTachieSemenToiletSeat(actor, cache);
							else if(layerType === LAYER_TYPE_WET_TOILET_SEAT)
								this.drawTachieWetToiletSeat(actor, cache);
							else if(layerType === LAYER_TYPE_GLORY_SEMEN_WALL_LEFT)
								this.drawTachieGlorySemenLeftWall(actor, cache);
							else if(layerType === LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT)
								this.drawTachieGlorySemenRightWall(actor, cache);
							else if(layerType === LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT)
								this.drawTachieGlorySemenLeftHole(actor, cache);
							else if(layerType === LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT)
								this.drawTachieGlorySemenRightHole(actor, cache);
							else if(layerType === LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT)
								this.drawTachieGlorySemenLeftToilet(actor, cache);
							else if(layerType === LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT)
								this.drawTachieGlorySemenRightToilet(actor, cache);
							
						}
					}
					if (!$gameTemp.tachieTmpBitmap) {
						$gameTemp.tachieTmpBitmap = new Bitmap(Graphics.width + TACHIE_REM_CUSTOM_WIDTH, Graphics.height+TACHIE_REM_CUSTOM_HEIGHT);
					}
					var tempBitmap = $gameTemp.tachieTmpBitmap;
					this.drawTachieCache(actor, cache, bitmap, x, y, rect, scale);
					tempBitmap.clear();
					this.drawTachieCutIn(actor, tempBitmap);
					this.drawTachieCache(actor, tempBitmap, bitmap, x, y, rect, scale);
					this.lastDrawnActorId = actor.actorId();
					return true;
				}
				
                if(actor.isCacheChanged()) {
                    cache.clear();
                    actor.clearCacheChanged();
					
					//Toys
					if(actor.tachieToysInBehindOfEverything()) {
						if(!actor.tachieClitToyInFrontOfMainToys()) 
							this.drawTachieClitToy(actor, cache);
						
						if(!actor.tachiePussyToyInFrontOfAnalToy()) 
							this.drawTachiePussyToy(actor, cache);
						
						if(!actor.tachieAnalToyInFrontOfEverything())
							this.drawTachieAnalToy(actor, cache);
						
						if(actor.tachiePussyToyInFrontOfAnalToy()) 
							this.drawTachiePussyToy(actor, cache);
						
						if(actor.tachieClitToyInFrontOfMainToys()) 
							this.drawTachieClitToy(actor, cache);
					}//Toys end
					
					this.drawTachieBack(actor, cache);	
					
					if(actor.tachieWeaponBehindEverything()) {
						this.drawTachieWeapon(actor, cache);
					}
					
					if(actor.tachieRightArmInFrontOfLeftArm() && !actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
						this.drawTachieRightArm(actor, cache);
						this.drawTachieCockRightArm(actor, cache);
					}
					if(!actor.tachieLeftArmInFrontOfBody()) {
						this.drawTachieLeftArm(actor, cache);
						this.drawTachieCockLeftArm(actor, cache);
					}
					if(!actor.tachieRightArmInFrontOfLeftArm() && !actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
						this.drawTachieRightArm(actor, cache);
						this.drawTachieCockRightArm(actor, cache);
					}
					
					if(!actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponBehindEverything())
						this.drawTachieWeapon(actor, cache);	

					if(!actor.tachieCockMouthInFrontOfFace()) {
						this.drawTachieCockMouth(actor, cache);	
						this.drawTachieSemenCockMouth(actor, cache);
					}
					
					if(!actor.tachieBoobsInFrontOfBody()) {
						if(!actor.tachieSemenBellyInFrontOfBoobs()) {
							this.drawTachieSemenBelly(actor, cache);
						}
						if(!actor.tachieSemenBoobsInFrontOfBoobs()) {
							this.drawTachieSemenBoobs(actor, cache);
							this.drawTachieSemenLeftBoob(actor, cache);
							this.drawTachieSemenRightBoob(actor, cache);
						}
					
						if(!actor.tachieCockBoobsInFrontOfBoobs()) {
							this.drawTachieCockBoobs(actor, cache);	
							this.drawTachieSemenCockBoobs(actor, cache);
						}
						
						this.drawTachieBoobs(actor, cache);	
						
						if(!actor.tachieLeftBoobInFrontOfRightBoob()) this.drawTachieLeftBoob(actor, cache);	
						this.drawTachieRightBoob(actor, cache);	
						if(actor.tachieLeftBoobInFrontOfRightBoob()) this.drawTachieLeftBoob(actor, cache);	
						
						this.drawTachieBoobsErection(actor, cache);
						
						
						if(actor.tachieSemenBellyInFrontOfBoobs()) {
							this.drawTachieSemenBelly(actor, cache);
						}
						if(actor.tachieSemenBoobsInFrontOfBoobs()) {
							this.drawTachieSemenBoobs(actor, cache);
							this.drawTachieSemenLeftBoob(actor, cache);
							this.drawTachieSemenRightBoob(actor, cache);
						}
						
						if(actor.tachieCockBoobsInFrontOfBoobs()) {
							this.drawTachieCockBoobs(actor, cache);	
							this.drawTachieSemenCockBoobs(actor, cache);
						}
						
						this.drawTachieDroolNipples(actor, cache);
					}//tachieBoobsInFrontOfBody is false
					
					if(!actor.tachieHeadInFrontOfBody()) {
						this.drawTachieHead(actor, cache);
						if(actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
							this.drawTachieRightArm(actor, cache);
							this.drawTachieCockRightArm(actor, cache);
							this.drawTachieDroolFingers(actor, cache);
						}
					}
					
					if(!actor.tachieHatInFrontOfBody()) 
						this.drawTachieHat(actor, cache);
					
					if(!actor.tachieHolesCocksToysInFrontOfBody()) {
						this.drawTachieHolePussy(actor, cache);
						this.drawTachieHoleAnus(actor, cache);
						
						this.drawTachieSemenWet(actor, cache);
						this.drawTachieSemenAnal(actor, cache);						
						this.drawTachieSemenCrotch(actor, cache);
						
						this.drawTachieCockPussy(actor, cache);
						this.drawTachieCockAnal(actor, cache);
						this.drawTachieSemenCockPussy(actor, cache);
						this.drawTachieSemenCockAnal(actor, cache);
						
						this.drawTachieSemenCockFeet(actor, cache);
						
						//Toys
						if(!actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
							if(!actor.tachieClitToyInFrontOfMainToys()) 
								this.drawTachieClitToy(actor, cache);
							
							if(!actor.tachiePussyToyInFrontOfAnalToy()) 
								this.drawTachiePussyToy(actor, cache);
							
							if(!actor.tachieAnalToyInFrontOfEverything())
								this.drawTachieAnalToy(actor, cache);
							
							if(actor.tachiePussyToyInFrontOfAnalToy()) 
								this.drawTachiePussyToy(actor, cache);
							
							if(actor.tachieClitToyInFrontOfMainToys()) 
								this.drawTachieClitToy(actor, cache);
						}//Toys end
					}
					
					this.drawTachieBody(actor, cache);	
					this.drawTachiePubic(actor, cache);
					
					//this.drawTachieMug(actor, cache);	
						
					
					if(actor.tachieHolesCocksToysInFrontOfBody()) {
						this.drawTachieHolePussy(actor, cache);
						this.drawTachieHoleAnus(actor, cache);
						
						this.drawTachieSemenWet(actor, cache);
						this.drawTachieSemenAnal(actor, cache);
						this.drawTachieSemenCrotch(actor, cache);
						
						if(actor.tachieClitToyBehindCocks()) 
							this.drawTachieClitToy(actor, cache);
						
						this.drawTachieCockPussy(actor, cache);
						this.drawTachieCockAnal(actor, cache);
						this.drawTachieSemenCockPussy(actor, cache);
						this.drawTachieSemenCockAnal(actor, cache);
						
						this.drawTachieSemenCockFeet(actor, cache);
						
						//Toys
						if(!actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
							if(!actor.tachieClitToyInFrontOfMainToys() && !actor.tachieClitToyBehindCocks()) 
								this.drawTachieClitToy(actor, cache);
							
							if(!actor.tachiePussyToyInFrontOfAnalToy()) 
								this.drawTachiePussyToy(actor, cache);
							
							if(!actor.tachieAnalToyInFrontOfEverything())
								this.drawTachieAnalToy(actor, cache);
							
							if(actor.tachiePussyToyInFrontOfAnalToy()) 
								this.drawTachiePussyToy(actor, cache);
							
							if(actor.tachieClitToyInFrontOfMainToys() && !actor.tachieClitToyBehindCocks()) 
								this.drawTachieClitToy(actor, cache);
						}//Toys end
					}	
					
					if(!actor.tachiePantiesInFrontOfBoobs()) {
						this.drawTachiePanties(actor, cache);	
						this.drawTachieWetPanties(actor, cache);		
						this.drawTachieSemenCrotchPanties(actor, cache);
					}
					
					if(actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfBoobs() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
						this.drawTachieRightArm(actor, cache);
						this.drawTachieCockRightArm(actor, cache);
					}
					if(actor.tachieLeftArmInFrontOfBody() && !actor.tachieLeftArmInFrontOfBoobs()) {
						this.drawTachieLeftArm(actor, cache);
						this.drawTachieCockLeftArm(actor, cache);
					}
					if(!actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfBoobs() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
						this.drawTachieRightArm(actor, cache);
						this.drawTachieCockRightArm(actor, cache);
					}
					
					if(actor.tachieBoobsInFrontOfBody()) {
						
						if(actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
							this.drawTachieWeapon(actor, cache);	
						
						if(!actor.tachieSemenBellyInFrontOfBoobs()) {
							this.drawTachieSemenBelly(actor, cache);
						}
						if(!actor.tachieSemenBoobsInFrontOfBoobs()) {
							this.drawTachieSemenBoobs(actor, cache);
							this.drawTachieSemenLeftBoob(actor, cache);
							this.drawTachieSemenRightBoob(actor, cache);
						}
						
						if(!actor.tachieCockBoobsInFrontOfBoobs()) {
							this.drawTachieCockBoobs(actor, cache);	
							this.drawTachieSemenCockBoobs(actor, cache);
						}
						
						this.drawTachieBoobs(actor, cache);	
						
						if(!actor.tachieLeftBoobInFrontOfRightBoob()) this.drawTachieLeftBoob(actor, cache);	
						this.drawTachieRightBoob(actor, cache);	
						if(actor.tachieLeftBoobInFrontOfRightBoob()) this.drawTachieLeftBoob(actor, cache);	
						
						this.drawTachieBoobsErection(actor, cache);
						
						if(actor.tachieSemenBellyInFrontOfBoobs()) {
							this.drawTachieSemenBelly(actor, cache);
						}
						if(actor.tachieSemenBoobsInFrontOfBoobs()) {
							this.drawTachieSemenBoobs(actor, cache);
							this.drawTachieSemenLeftBoob(actor, cache);
							this.drawTachieSemenRightBoob(actor, cache);
						}
						
						if(actor.tachieCockBoobsInFrontOfBoobs()) {
							this.drawTachieCockBoobs(actor, cache);	
							this.drawTachieSemenCockBoobs(actor, cache);
						}
						
						this.drawTachieDroolNipples(actor, cache);
					}//tachieBoobsInFrontOfBody is true
					
					if(actor.tachiePantiesInFrontOfBoobs()) {
						this.drawTachiePanties(actor, cache);	
						this.drawTachieWetPanties(actor, cache);		
						this.drawTachieSemenCrotchPanties(actor, cache);
					}
					
					if(actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && actor.tachieRightArmInFrontOfBoobs()) {
						this.drawTachieRightArm(actor, cache);
						this.drawTachieCockRightArm(actor, cache);
					}
					if(actor.tachieLeftArmInFrontOfBody() && actor.tachieLeftArmInFrontOfBoobs()) {
						this.drawTachieLeftArm(actor, cache);
						this.drawTachieCockLeftArm(actor, cache);
					}
					if(!actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && actor.tachieRightArmInFrontOfBoobs()) {
						this.drawTachieRightArm(actor, cache);
						this.drawTachieCockRightArm(actor, cache);
					}
					
					if(actor.tachieHeadInFrontOfBody()) 
						this.drawTachieHead(actor, cache);
							
					if(actor.tachieHatInFrontOfBody()) 
						this.drawTachieHat(actor, cache);		
					
					//this.drawTachieDroolFingers(actor, cache);
					
					this.drawTachieSemenRightArm(actor, cache);	
					if(!actor.tachieSemenLeftArmInFrontOfFront()) 
						this.drawTachieSemenLeftArm(actor, cache);		
					this.drawTachieSemenCockRightArm(actor, cache);	
					this.drawTachieSemenCockLeftArm(actor, cache);	
					
					
					this.drawTachieSemenRightLeg(actor, cache);	
					this.drawTachieSemenLeftLeg(actor, cache);	
					this.drawTachieSemenBack(actor, cache);	
					this.drawTachieSemenButt(actor, cache);
					this.drawTachieSemenButtAreas(actor, cache);
					
					if(actor.tachieWeaponInFrontOfBody() && actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
						this.drawTachieWeapon(actor, cache);	
					
					//Toys
					if(actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
						if(!actor.tachieClitToyInFrontOfMainToys()) 
							this.drawTachieClitToy(actor, cache);
						
						if(!actor.tachiePussyToyInFrontOfAnalToy()) 
							this.drawTachiePussyToy(actor, cache);
						
						if(!actor.tachieAnalToyInFrontOfEverything())
							this.drawTachieAnalToy(actor, cache);
						
						if(actor.tachiePussyToyInFrontOfAnalToy()) 
							this.drawTachiePussyToy(actor, cache);
						
						if(actor.tachieClitToyInFrontOfMainToys()) 
							this.drawTachieClitToy(actor, cache);
					}//Toys end
					
					if(actor.tachieAnalToyInFrontOfEverything())
						this.drawTachieAnalToy(actor, cache);
					
					this.drawTachieCockFeet(actor, cache);
					
					if(!actor.tachieFrontInFrontOfFace()) {
						this.drawTachieFront(actor, cache);
						if(actor.tachieSemenLeftArmInFrontOfFront()) 
							this.drawTachieSemenLeftArm(actor, cache);
					}
                }
                if (!$gameTemp.tachieTmpBitmap) {
                    $gameTemp.tachieTmpBitmap = new Bitmap(Graphics.width + TACHIE_REM_CUSTOM_WIDTH, Graphics.height+TACHIE_REM_CUSTOM_HEIGHT);
                }
                var tempBitmap = $gameTemp.tachieTmpBitmap;
                this.drawTachieCache(actor, cache, bitmap, x, y, rect, scale);
                tempBitmap.clear();
				
				if(actor.poseName === CHAT_FOLDER_ARON)
					this.drawTachieFace(actor, tempBitmap, tachieFace);
				
                this.drawTachieHoppe(actor, tempBitmap);
				this.drawTachieSweat(actor, tempBitmap);
				this.drawTachieHair(actor, tempBitmap);
				this.drawTachieMouth(actor, tempBitmap);
				//this.drawTachieStraw(actor, tempBitmap);
				this.drawTachieEyes(actor, tempBitmap);
				this.drawTachieEyebrows(actor, tempBitmap);
				
				if(actor.poseName !== CHAT_FOLDER_ARON)
					this.drawTachieFace(actor, tempBitmap, tachieFace);
				
				this.drawTachieGlasses(actor, tempBitmap);
				
				this.drawTachieDroolMouth(actor, tempBitmap);
				this.drawTachieSemenFace(actor, tempBitmap);
				this.drawTachieSemenMouth(actor, tempBitmap);
				
				if(actor.tachieCockMouthInFrontOfFace()) {
					this.drawTachieCockMouth(actor, tempBitmap);	
					this.drawTachieSemenCockMouth(actor, tempBitmap);	
				}
				
				if(actor.tachieFrontInFrontOfFace()) {
					this.drawTachieFront(actor, tempBitmap);
					if(actor.tachieSemenLeftArmInFrontOfFront()) 
						this.drawTachieSemenLeftArm(actor, tempBitmap);
				}
				
				this.drawTachieCutIn(actor, tempBitmap);
                this.drawTachieCache(actor, tempBitmap, bitmap, x, y, rect, scale);
                this.lastDrawnActorId = actor.actorId();
                return true;
            };
            this.calcTachieActorPos = function (actor) {
                var dx = actor.tachieOffsetX;
                var dy = actor.tachieOffsetY;
                if (isNaN(dx)) {
                    dx = 0;
                }
                if (isNaN(dy)) {
                    dy = 0;
                }
                return new Point(dx, dy);
            };
            this.drawTachieCache = function (actor, cache, bitmap, x, y, rect, scale) {
                var xx = -rect.x < 0 ? 0 : -rect.x;
                var yy = -rect.y < 0 ? 0 : -rect.y;
                var ww = rect.width / scale;
                var w = rect.width;
                if (w <= 0 || w + xx > cache.width) {
                    w = cache.width - xx;
                    ww = w / scale;
                }
                if (xx + ww > cache.width) {
                    var xScale = (cache.width - xx) * 1.0 / ww;
                    ww = cache.width - xx;
                    w *= xScale;
                }
                var hh = rect.height / scale;
                var h = rect.height;
                if (h <= 0 || h + yy > cache.height) {
                    h = cache.height - yy;
                    hh = h / scale;
                }
                if (yy + hh > cache.height) {
                    var yScale = (cache.height - yy) * 1.0 / hh;
                    hh = cache.height - yy;
                    h *= yScale;
                }
				//console.log('' + xx + ' ' + yy + ' ' + ww + ' ' + hh + ' ' + x + ' ' + y + ' ' + w + ' ' + h)
				
				//let offsetArray = actor.getBattlePoseOffetArray();
				//x += offsetArray[0];
				//xx -= offsetArray[0];
				//w += offsetArray[0];
				
                bitmap.blt(cache, xx, yy, ww, hh, x, y, w, h);
            };
            this.drawTachieFile = function (file, bitmap, actor, x, y, rect, scale) {
				if (!file) {
                    return;
                }
				
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (scale === void 0) { scale = 1; }
            
                if (!rect) {
                    rect = Rectangle.emptyRectangle;
                }
				
				let offsetArray = actor.getBattlePoseOffetArray();
				x += offsetArray[0];
				y += offsetArray[1];
				
                this.drawTachieImage(file, bitmap, actor, x, y, rect, scale);
                
            };
			this.drawTachieFileWithTone = function (file, bitmap, actor, tone, x, y, rect, scale) {
				if (!file) {
                    return;
                }
				
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (scale === void 0) { scale = 1; }
				if(tone === void 0) { tone = [0,0,0]; }
				
                if (!rect) {
                    rect = Rectangle.emptyRectangle;
                }

                this.drawTachieImageWithTone(file, bitmap, actor, x, y, rect, scale, tone);
                
            };
			this.drawTachieCutInFile = function (file, bitmap, actor, x, y, rect, scale) {
				if (!file) {
                    return;
                }
				
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (scale === void 0) { scale = 1; }
            
                if (!rect) {
                    rect = Rectangle.emptyRectangle;
                }
				
				if(actor._tachieCutInDirectionX > 0 && actor._tachieCutInPosX < actor._tachieCutInGoalX) {
					actor._tachieCutInPosX += actor._tachieCutInDirectionX;
				}
				else if(actor._tachieCutInDirectionX < 0 && actor._tachieCutInPosX > actor._tachieCutInGoalX) {
					actor._tachieCutInPosX += actor._tachieCutInDirectionX;
				}
				
				if(actor._tachieCutInDirectionY > 0 && actor._tachieCutInPosY < actor._tachieCutInGoalY) {
					actor._tachieCutInPosY += actor._tachieCutInDirectionY;
				}
				else if(actor._tachieCutInDirectionY < 0 && actor._tachieCutInPosY > actor._tachieCutInGoalY) {
					actor._tachieCutInPosY += actor._tachieCutInDirectionY;
				}
				
				actor._cutInFrame++;
				let cutinArray = actor.getCutInArray();
				
				if(!cutinArray) {
					//this.drawTachieCutinImage(file, bitmap, actor, actor._tachieCutInPosX, actor._tachieCutInPosY, rect, scale);
					return;
				}
				else {
					if(cutinArray[CUT_IN_ARRAY_BACK_NAME_ID])
						this.drawTachieCutinImage(cutinArray[CUT_IN_ARRAY_BACK_NAME_ID], bitmap, actor, actor._tachieCutInPosX + cutinArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID], actor._tachieCutInPosY + cutinArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID], rect, scale);
					if(cutinArray[CUT_IN_ARRAY_FRONT_NAME_ID])
						this.drawTachieCutinImage(cutinArray[CUT_IN_ARRAY_FRONT_NAME_ID], bitmap, actor, actor._tachieCutInPosX + cutinArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] + cutinArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID], actor._tachieCutInPosY + cutinArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] + cutinArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID], rect, scale);
				}
            };
            
            this.drawTachieImage = function (file, bitmap, actor, x, y, rect, scale) {       
				var img = ImageManager.loadTachie(file, actor.getTachieFolderName());
				//img.adjustTone(233,33,39);
                if (!img.isReady()) {
                    console.log('draw' + file + ' not ready');
                    actor.setDirty();
                    return;
                }
                var xx = -rect.x < 0 ? 0 : -rect.x;
                var yy = -rect.y < 0 ? 0 : -rect.y;
                var ww = rect.width / scale;
                var w = rect.width;
                if (w <= 0 || w + xx > img.width) {
                    w = img.width - xx;
                    ww = w;
                }
                if (xx + ww > img.width) {
                    var xScale = (img.width - xx) * 1.0 / ww;
                    ww = img.width - xx;
                    w *= xScale;
                }
                var hh = rect.height / scale;
                var h = rect.height;
                if (h <= 0 || h + yy > img.height) {
                    h = img.height - yy;
                    hh = h;
                }
                if (yy + hh > img.height) {
                    var yScale = (img.height - yy) * 1.0 / hh;
                    hh = img.height - yy;
                    h *= yScale;
                }
                bitmap.blt(img, xx, yy, ww, hh, x, y, w, h);
            };
			this.drawTachieImageWithTone = function (file, bitmap, actor, x, y, rect, scale, tone) {       
				var img = ImageManager.loadTachie(file, actor.getTachieFolderName());
				
				img.adjustTone(tone[0],tone[1],tone[2]);
				
                if (!img.isReady()) {
                    console.log('draw' + file + ' not ready');
                    actor.setDirty();
                    return;
                }
                var xx = -rect.x < 0 ? 0 : -rect.x;
                var yy = -rect.y < 0 ? 0 : -rect.y;
                var ww = rect.width / scale;
                var w = rect.width;
                if (w <= 0 || w + xx > img.width) {
                    w = img.width - xx;
                    ww = w;
                }
                if (xx + ww > img.width) {
                    var xScale = (img.width - xx) * 1.0 / ww;
                    ww = img.width - xx;
                    w *= xScale;
                }
                var hh = rect.height / scale;
                var h = rect.height;
                if (h <= 0 || h + yy > img.height) {
                    h = img.height - yy;
                    hh = h;
                }
                if (yy + hh > img.height) {
                    var yScale = (img.height - yy) * 1.0 / hh;
                    hh = img.height - yy;
                    h *= yScale;
                }
                bitmap.blt(img, xx, yy, ww, hh, x, y, w, h);
            };
			this.drawTachieCutinImage = function (file, bitmap, actor, x, y, rect, scale) {       
				var img = ImageManager.loadTachie(file, actor.getTachieCutinFolderName());
				//img.adjustTone(233,33,39);
                if (!img.isReady()) {
                    //console.log('draw' + file + ' not ready');
                    actor.setDirty();
                    return;
                }
				
                var xx = -rect.x < 0 ? 0 : -rect.x;
                var yy = -rect.y < 0 ? 0 : -rect.y;
                var ww = rect.width / scale;
                var w = rect.width;
                if (w <= 0 || w + xx > img.width) {
                    w = img.width - xx;
                    ww = w;
                }
                if (xx + ww > img.width) {
                    var xScale = (img.width - xx) * 1.0 / ww;
                    ww = img.width - xx;
                    w *= xScale;
                }
                var hh = rect.height / scale;
                var h = rect.height;
                if (h <= 0 || h + yy > img.height) {
                    h = img.height - yy;
                    hh = h;
                }
                if (yy + hh > img.height) {
                    var yScale = (img.height - yy) * 1.0 / hh;
                    hh = img.height - yy;
                    h *= yScale;
                }
				//console.log('' + xx + ' ' + yy + ' ' + ww + ' ' + hh + ' ' + x + ' ' + y + ' ' + w + ' ' + h)
                bitmap.blt(img, xx, yy, ww, hh, x, y, w, h);
            };
			
			
			this.drawTachieBody = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieBodyFile(), bitmap, actor);
            };
            this.drawTachieHead = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieHeadFile(), bitmap, actor);
            };
			this.drawTachieGlasses = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieGlassesFile(), bitmap, actor);
            };
			this.drawTachieTie = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieTieFile(), bitmap, actor);
            };
			this.drawTachieLeftArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieLeftArmFile(), bitmap, actor);
            };
			this.drawTachieRightArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieRightArmFile(), bitmap, actor);
            };
			this.drawTachieHat = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieHatFile(), bitmap, actor);
            };
			this.drawTachieClitToy = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieClitToyFile(), bitmap, actor);
            };
			this.drawTachiePussyToy = function (actor, bitmap) {
                this.drawTachieFile(actor.tachiePussyToyFile(), bitmap, actor);
            };
			this.drawTachieAnalToy = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieAnalToyFile(), bitmap, actor);
            };
			this.drawTachieWeapon = function (actor, bitmap) {
				//var tone = Karryn.tachieHalberdTone();
                //this.drawTachieFileWithTone(actor.tachieWeaponFile(), bitmap, actor, tone);
				this.drawTachieFile(actor.tachieWeaponFile(), bitmap, actor);
            };
			this.drawTachiePanties = function (actor, bitmap) {
                this.drawTachieFile(actor.tachiePantiesFile(), bitmap, actor);
            };
			
			this.drawTachieHolePussy = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieHolePussyFile(), bitmap, actor);
            };
			this.drawTachieHoleAnus = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieHoleAnusFile(), bitmap, actor);
            };
			
			this.drawTachieClothes = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieClothesFile(), bitmap, actor);
            };
			this.drawTachieSkirt = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSkirtFile(), bitmap, actor);
            };
			this.drawTachieLegs = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieLegsFile(), bitmap, actor);
            };
			
			this.drawTachieMug = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieMugFile(), bitmap, actor);
            };
			this.drawTachieStraw = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieStrawFile(), bitmap, actor);
            };
			
			this.drawTachieLeftHole = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieLeftHoleFile(), bitmap, actor);
            };
			this.drawTachieRightHole = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieRightHoleFile(), bitmap, actor);
            };
			
			this.drawTachieVisitorA = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieVisitorAFile(), bitmap, actor);
            };
			this.drawTachieVisitorB = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieVisitorBFile(), bitmap, actor);
            };
			this.drawTachieVisitorC = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieVisitorCFile(), bitmap, actor);
            };
			this.drawTachieVisitorD = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieVisitorDFile(), bitmap, actor);
            };
			
			this.drawTachieBack = function (actor, bitmap) {
				this.drawTachieFile(actor.tachieBackEFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieBackDFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieBackCFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieBackBFile(), bitmap, actor);
                this.drawTachieFile(actor.tachieBackAFile(), bitmap, actor);
            };
			this.drawTachieFront = function (actor, bitmap) {
				this.drawTachieFile(actor.tachieFrontEFile(), bitmap, actor);
				//this.drawTachieFile(actor.tachieSemenFrontEFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieFrontDFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenFrontDFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieFrontCFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenFrontCFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieFrontBFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenFrontBFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieFrontAFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenFrontAFile(), bitmap, actor);
            };
			this.drawTachieBoobs = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieBoobsFile(), bitmap, actor);
            };
			this.drawTachieLeftBoob = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieLeftBoobFile(), bitmap, actor);
            };
			this.drawTachieRightBoob = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieRightBoobFile(), bitmap, actor);
            };
			this.drawTachieBoobsErection = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieBoobsErectionFile(), bitmap, actor);
            };
			this.drawTachiePubic = function (actor, bitmap) {
                this.drawTachieFile(actor.tachiePubicFile(), bitmap, actor);
            };
			this.drawTachieButt = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieButtFile(), bitmap, actor);
            };
			
			this.drawTachieCock = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockFile(), bitmap, actor);
            };
			this.drawTachieCockBoobs = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockBoobsFile(), bitmap, actor);
            };
			this.drawTachieCockMouth = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockMouthFile(), bitmap, actor);
            };
			this.drawTachieCockFeet = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockFeetFile(), bitmap, actor);
            };
			this.drawTachieCockPussy = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockPussyFile(), bitmap, actor);
            };
			this.drawTachieCockAnal = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockAnalFile(), bitmap, actor);
            };
			this.drawTachieCockRightArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockRightArmFile(), bitmap, actor);
            };
			this.drawTachieCockLeftArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieCockLeftArmFile(), bitmap, actor);
            };
            this.drawTachieHoppe = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieHoppeFile(), bitmap, actor);
            };
			this.drawTachieSweat = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSweatFile(), bitmap, actor);
            };
			this.drawTachieHair = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieHairFile(), bitmap, actor);
            };
			this.drawTachieEyes = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieEyesFile(), bitmap, actor);
            };
			this.drawTachieEyebrows = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieEyebrowsFile(), bitmap, actor);
            };
			this.drawTachieMouth = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieMouthFile(), bitmap, actor);
            };
			
			this.drawTachieSemenWet = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenWetFile(), bitmap, actor);
            };
			this.drawTachieWetPanties = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieWetPantiesFile(), bitmap, actor);
            };
			
			this.drawTachieSemenCrotch = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCrotchFile(), bitmap, actor);
            };
			this.drawTachieSemenCrotchPanties = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCrotchPantiesFile(), bitmap, actor);
            };
			
			this.drawTachieSemenRightArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenRightArmFile(), bitmap, actor);
            };
			this.drawTachieSemenLeftArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenLeftArmFile(), bitmap, actor);
            };
			this.drawTachieSemenRightLeg = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenRightLegFile(), bitmap, actor);
            };
			this.drawTachieSemenLeftLeg = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenLeftLegFile(), bitmap, actor);
            };
			this.drawTachieSemenBoobs = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenBoobsFile(), bitmap, actor);
            };
			this.drawTachieSemenRightBoob = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenRightBoobFile(), bitmap, actor);
            };
			this.drawTachieSemenLeftBoob = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenLeftBoobFile(), bitmap, actor);
            };
			this.drawTachieSemenBelly = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenBellyFile(), bitmap, actor);
            };
			this.drawTachieSemenBack = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenBackFile(), bitmap, actor);
            };
			this.drawTachieSemenDesk = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenDeskFile(), bitmap, actor);
            };
			this.drawTachieSemenButt = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenButtFile(), bitmap, actor);
            };
			this.drawTachieSemenButtAreas = function (actor, bitmap) {
				this.drawTachieFile(actor.tachieSemenButtTopLeftFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenButtBottomLeftFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenButtTopRightFile(), bitmap, actor);
				this.drawTachieFile(actor.tachieSemenButtBottomRightFile(), bitmap, actor);
            };
			this.drawTachieSemenAnal = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenAnalFile(), bitmap, actor);
            };
			
			this.drawTachieSemenFace = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenFaceFile(), bitmap, actor);
            };
			this.drawTachieSemenMouth = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenMouthFile(), bitmap, actor);
            };
			this.drawTachieSemenCockMouth = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockMouthFile(), bitmap, actor);
            };
			this.drawTachieSemenCockBoobs = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockBoobsFile(), bitmap, actor);
            };
			this.drawTachieSemenCockLeftArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockLeftArmFile(), bitmap, actor);
            };
			this.drawTachieSemenCockRightArm = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockRightArmFile(), bitmap, actor);
            };
			this.drawTachieSemenCockPussy = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockPussyFile(), bitmap, actor);
            };
			this.drawTachieSemenCockAnal = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockAnalFile(), bitmap, actor);
            };
			this.drawTachieSemenCockFeet = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockFeetFile(), bitmap, actor);
            };
			this.drawTachieSemenCockNormal = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenCockNormalFile(), bitmap, actor);
            };
			this.drawTachieSemenHoleLeft = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenHoleLeftFile(), bitmap, actor);
            };
			this.drawTachieSemenHoleRight = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenHoleRightFile(), bitmap, actor);
            };
			this.drawTachieSemenToiletSeat = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieSemenToiletSeatFile(), bitmap, actor);
            };
			this.drawTachieWetToiletSeat = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieWetToiletSeatFile(), bitmap, actor);
            };
			this.drawTachieGlorySemenLeftWall = function (actor, bitmap) {
                for(let i = 0; i < actor._liquidGloryCumOnLeftWall.length; ++i)
					this.drawTachieFile(actor.tachieSemenGloryLeftWallFile(i), bitmap, actor);
            };
			this.drawTachieGlorySemenRightWall = function (actor, bitmap) {
                for(let i = 0; i < actor._liquidGloryCumOnRightWall.length; ++i)
					this.drawTachieFile(actor.tachieSemenGloryRightWallFile(i), bitmap, actor);
            };
			this.drawTachieGlorySemenLeftHole = function (actor, bitmap) {
				for(let i = 0; i < actor._liquidGloryCumOnLeftHole.length; ++i)
					this.drawTachieFile(actor.tachieSemenGloryLeftHoleFile(i), bitmap, actor);
            };
			this.drawTachieGlorySemenRightHole = function (actor, bitmap) {
				for(let i = 0; i < actor._liquidGloryCumOnRightHole.length; ++i)
					this.drawTachieFile(actor.tachieSemenGloryRightHoleFile(i), bitmap, actor);
            };
			this.drawTachieGlorySemenLeftToilet = function (actor, bitmap) {
				for(let i = 0; i < actor._liquidGloryCumOnLeftToilet.length; ++i)
					this.drawTachieFile(actor.tachieSemenGloryLeftToiletFile(i), bitmap, actor);
            };
			this.drawTachieGlorySemenRightToilet = function (actor, bitmap) {
				for(let i = 0; i < actor._liquidGloryCumOnRightToilet.length; ++i)
					this.drawTachieFile(actor.tachieSemenGloryRightToiletFile(i), bitmap, actor);
            };
			
			this.drawTachieDroolMouth = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieDroolMouthFile(), bitmap, actor);
            };
			this.drawTachieDroolFingers = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieDroolFingersFile(), bitmap, actor);
            };
			this.drawTachieDroolNipples = function (actor, bitmap) {
                this.drawTachieFile(actor.tachieDroolNipplesFile(), bitmap, actor);
            };
			
			this.drawTachieCutIn = function (actor, bitmap) {
                this.drawTachieCutInFile(actor.tachieCutInFile(), bitmap, actor);
            };
			
            this.drawTachieFace = function (actor, bitmap, tachieFace) {
			   if(tachieFace == 0) {
                    tachieFace = actor.tachieFace;
                }
				if(tachieFace == 0) {
					return;
				}
                var file = actor.tachieBaseId + 'face_' + tachieFace;
                this.drawTachieFile(file, bitmap, actor);
            };
        };
        TachieDrawerMixin.call(Sprite.prototype);
        TachieDrawerMixin.call(Window_Base.prototype);
        var _Sprite_Picture = (function (_super) {
            __extends(_Sprite_Picture, _super);
            function _Sprite_Picture() {
                _super.apply(this, arguments);
            }
            _Sprite_Picture.prototype.updateBitmap = function () {
                _Sprite_Picture_updateBitmap.call(this);
                var picture = this.picture();
                if (picture && picture.tachieActorId !== 0) {
                    var actorId = picture.tachieActorId;
                    var actor = $gameActors.actor(actorId);
                    if (actor.isDirty()) {
                        this.redrawActorImage();
                    }
                }
            };
            _Sprite_Picture.prototype.loadBitmap = function () {
                var picture = this.picture();
                if (picture && picture.tachieActorId !== 0) {
                    this.bitmap = $gameTemp.getPictureBitmapCache($gameScreen.getPictureId(picture));
                    this.redrawActorImage();
                }
                else {
                    _Sprite_Picture_loadBitmap.call(this);
                }
            };
            _Sprite_Picture.prototype.redrawActorImage = function () {
                var picture = this.picture();
                if (!picture) {
                    return;
                }
                var actorId = picture.tachieActorId;
                if (actorId === 0) {
                    return;
                }
                if (this.lastDrawnActorId !== actorId) {
                    this.bitmap.clear();
                }
                var success = this.drawTachie(actorId, this.bitmap, 0, 0, null, 0, 1, true);
				var actor = $gameActors.actor(actorId);
				if(actor.tachieFlip) {
					picture._scaleX = -100;
					picture._targetScaleX = -100;
				}
				else {
					picture._scaleX = 100;
					picture._targetScaleX = 100;
				}
                this._dirty = !success;
            };
            return _Sprite_Picture;
        }(Sprite_Picture));
        var Window_MessageName = (function (_super) {
            __extends(Window_MessageName, _super);
            function Window_MessageName(windowHeight) {
                var width = MAP_CHAT_TEXT_WINDOW_WIDTH;
                //var height = _super.prototype.fittingHeight.call(this, 1) + 14;
				var height = _super.prototype.fittingHeight.call(this, 1) + 6;
				
                var x = Tachie.nameLeft;
                var y = Graphics.boxHeight - windowHeight - Tachie.windowMargin[0] - Tachie.windowMargin[2] - height;
                this.windowHeight = windowHeight;
                _super.call(this, x, y, width, height);
                this.padding = 8;
                this.openness = 0;
            }
            Window_MessageName.prototype.standardPadding = function () {
                return 0;
            };
            Window_MessageName.prototype.update = function () {
                _super.prototype.update.call(this);
                if ($gameTemp.sabaWaitForMovieMode > 0) {
                    this.visible = false;
                    return;
                }
                if ($gameMessage.positionType() !== 2) {
                    this.visible = false;
                    return;
                }
				
				if($gameScreen.isChatMode()) {
					this.x = MAP_CHAT_TEXT_WINDOW_X;
					this.y = MAP_CHAT_TEXT_WINDOW_Y - this.height;
				}
                else {
					this.x = Tachie.windowMargin[3];
					this.y = Graphics.boxHeight - this.windowHeight - Tachie.windowMargin[0] - Tachie.windowMargin[2] - this.height;
				}
				
				
            };
			Window_MessageName.prototype.standardFontSize = function () {
				return MAP_NAME_WINDOW_FONT_SIZE;
				//return _super.prototype.standardFontSize.call(this);
            };
			
            Window_MessageName.prototype.draw = function (name) {
                if (!name) {
                    this.visible = false;
                    return;
                }
				//var fontLength = 32;
				//var MAP_NAME_WINDOW_FONT_LENGTH_ENGLISH = 16;
				//var MAP_NAME_WINDOW_FONT_LENGTH_JAPANESE = 29;
				//if(TextManager.isEnglish) fontLength = MAP_NAME_WINDOW_FONT_LENGTH_ENGLISH;
				//else if(TextManager.isJapanese) fontLength = MAP_NAME_WINDOW_FONT_LENGTH_JAPANESE;
                //this.width = this.convertEscapeCharacters(name).length * fontLength + this.textPadding() * 2;
				//var nameLength = name.length;
				//if(name.includes("\\C")) nameLength -= 5;
				//if(TextManager.isEnglish) {
				//	if(name.includes("(")) nameLength -= 0.5;
				//	nameLength -= 0.6 * (name.split('l').length-1);
				//	nameLength -= 0.6 * (name.split('i').length-1);
				//}
				//this.width = nameLength * fontLength + this.textPadding() * 2;
                this.contents.clear();
                //this.drawTextEx(name, this.textPadding(), MAP_NAME_WINDOW_FONT_HEIGHT_PADDING);
				let widthPadding = MAP_NAME_WINDOW_FONT_WIDTH_PADDING;
				this.width = this.drawTextEx(name, widthPadding, MAP_NAME_WINDOW_FONT_HEIGHT_PADDING) + widthPadding * 2 + this.textPadding() * 3;
                this.open();
                this.visible = true;
            };
            return Window_MessageName;
        }(Window_Base));
        Tachie.Window_MessageName = Window_MessageName;
        var Sprite_MessageMode = (function (_super) {
            __extends(Sprite_MessageMode, _super);
            function Sprite_MessageMode(messageWindow) {
                _super.call(this);
                this._messageWindow = messageWindow;
                this._frameIndex = 1;
                this._wait = 0;
            }
            Sprite_MessageMode.prototype.update = function () {
                _super.prototype.update.call(this);
                if (!$gameTemp.isAutoMode || !this._messageWindow.isGalMode()) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                if (this._wait != 0) {
                    this._wait--;
                    return;
                }
                var img = ImageManager.loadSystem('Tachie_Auto_' + this._frameIndex);
                this.bitmap = img;
                this._frameIndex++;
                if (this._frameIndex > Tachie.AUTO_MODE_MARK_TOTAL_FRAME) {
                    this._frameIndex = 1;
                }
                this._wait = 4;
            };
            return Sprite_MessageMode;
        }(Sprite_Base));
        var Sprite_WindowBalloon = (function (_super) {
            __extends(Sprite_WindowBalloon, _super);
            function Sprite_WindowBalloon(messageWindow) {
                _super.call(this);
                this._messageWindow = messageWindow;
            }
            Sprite_WindowBalloon.prototype.update = function () {
                _super.prototype.update.call(this);
                this.updatePosition();
            };
            Sprite_WindowBalloon.prototype.showBalloon = function () {
                if (!$gameTemp.tachieName) {
                    this.hide();
                    return;
                }
                if ($gameTemp.hideBalloon) {
                    this.hide();
                    return;
                }
                if ($gameMessage.positionType() !== 2) {
                    this.hide();
                    return;
                }
                if ($gameMessage.background() !== 0) {
                    this.hide();
                    return;
                }
                this.show();
                this.updateBitmap();
            };
            Sprite_WindowBalloon.prototype.hide = function () {
                this._hiding = true;
                this.visible = false;
            };
            Sprite_WindowBalloon.prototype.show = function () {
                this._hiding = false;
                this.visible = true;
            };
            Sprite_WindowBalloon.prototype.updateBitmap = function () {
                if (!Tachie.balloonEnabled) {
                    this.hide();
                    return;
                }
                if (!$gameTemp.tachieName) {
                    this.hide();
                    return;
                }
                if ($gameTemp.hideBalloon) {
                    this.hide();
                    return;
                }
                if (this._windowColorId === $gameTemp.tachieWindowColorId) {
                    return;
                }
                if ($gameTemp.tachieWindowColorId > 0) {
                    if (!this._messageWindow.isOpen()) {
                        this.hide();
                        return;
                    }
                    this._windowColorId = $gameTemp.tachieWindowColorId;
                    var color_1 = this._windowColorId;
                    if (color_1 > 0) {
                        this.bitmap = ImageManager.loadSystem('Tachie_Balloon' + color_1);
                    }
                    else {
                        this.bitmap = ImageManager.loadSystem('Tachie_Balloon');
                    }
                    this.show();
                }
                else {
                    this.hide();
                    this._windowColorId = 0;
                    this.bitmap = ImageManager.loadSystem('Tachie_Balloon');
                }
            };
            Sprite_WindowBalloon.prototype.updatePosition = function () {
                if ($gameTemp.tachieActorPos === Tachie.LEFT_POS) {
                    this.scale.x = 1;
                    this.x = (Graphics.boxWidth - Tachie.windowMargin[1] - Tachie.windowMargin[3]) / 2 - 140;
                }
                else if ($gameTemp.tachieActorPos === Tachie.RIGHT_POS) {
                    this.scale.x = -1;
                    this.x = (Graphics.boxWidth - Tachie.windowMargin[1] - Tachie.windowMargin[3]) / 2 + 140;
                }
                else if ($gameTemp.tachieActorPos === Tachie.CENTER_POS) {
                    this.scale.x = 1;
                    this.x = (Graphics.boxWidth - Tachie.windowMargin[1] - Tachie.windowMargin[3]) / 2 + 40;
                }
            };
            return Sprite_WindowBalloon;
        }(Sprite_Base));
        var Window_TachieMessage = (function (_super) {
            __extends(Window_TachieMessage, _super);
            function Window_TachieMessage() {
                this._autoModeCurrentWait = 0; // オートモード時、現在待機したフレーム数
                this._autoModeNeedWait = -1; // オートモードで次のメッセージに進むために必要なフレーム数
                this._galMode = true;
                _super.call(this);
            }
            Window_TachieMessage.prototype.windowWidth = function () {
                if (this._galMode) {
                    //return Graphics.boxWidth - Tachie.windowMargin[1] - Tachie.windowMargin[3];
					if($gameScreen.isChatMode()) return MAP_CHAT_TEXT_WINDOW_WIDTH;
					else return Graphics.boxWidth - Tachie.windowMargin[1] - Tachie.windowMargin[3];
					
                }
                else {
                    return _super.prototype.windowWidth.call(this);
                }
            };
            ;
            Window_TachieMessage.prototype.numVisibleRows = function () {
                if (this._galMode) {
                    return MAP_CHAT_TEXT_WINDOW_LINES;
                }
                else {
                    return _super.prototype.numVisibleRows.call(this);
                }
            };
            Window_TachieMessage.prototype.fittingHeight = function (numLines) {
                if (this._galMode) {
                    return numLines * this.lineHeight() + this.standardPadding() * 2 + Tachie.windowPadding[0] + Tachie.windowPadding[2];
                }
                else {
                    return _super.prototype.fittingHeight.call(this, numLines);
                }
            };
            Window_TachieMessage.prototype._refreshContents = function () {
                if (this._galMode) {
                    this._windowContentsSprite.move(this.padding + 6, 0);
                }
                else {
                    _super.prototype._refreshContents.call(this);
                }
            };
            ;
            Window_TachieMessage.prototype.contentsHeight = function () {
                if (this._galMode) {
                    return this.windowHeight() - this.standardPadding() * 2 + 20;
                }
                else {
                    return _super.prototype.contentsHeight.call(this);
                }
            };
            Window_TachieMessage.prototype._updateContents = function () {
                if (this._galMode) {
                    var w = this._width - this._padding * 2;
                    var h = this._height - 0 * 2;
                    if (w > 0 && h > 0) {
                        this._windowContentsSprite.setFrame(this.origin.x, this.origin.y, w, h);
                        this._windowContentsSprite.visible = this.isOpen();
                    }
                    else {
                        this._windowContentsSprite.visible = false;
                    }
                }
                else {
                    return _super.prototype._updateContents.call(this);
                }
            };
            Window_TachieMessage.prototype.subWindows = function () {
                var ret = _super.prototype.subWindows.call(this);
                ret.push(this._messageNameWindow);
                return ret;
            };
            Window_TachieMessage.prototype.createSubWindows = function () {
                _super.prototype.createSubWindows.call(this);
                this._messageNameWindow = new Window_MessageName(this.windowHeight());
                this._balloonSprite = new Sprite_WindowBalloon(this);
                this._balloonSprite.y = -39;
                this.addChild(this._balloonSprite);
                this._modeSprite = new Sprite_MessageMode(this);
                this._modeSprite.x = Tachie.AUTO_MODE_MARK_X;
                this._modeSprite.y = Tachie.AUTO_MODE_MARK_Y;
                this.addChild(this._modeSprite);
            };
            Window_TachieMessage.prototype.update = function () {
                _super.prototype.update.call(this);
                this._updateAutoMode();
                this.updateWindowVisibility();
                if (!this._galMode) {
                    this.updateMessageSkip();
                    return;
                }
                if ($gameTemp.sabaWaitForMovieMode > 0) {
                    this.close();
                    return;
                }
                if (this._windowSkinId !== $gameTemp.tachieWindowColorId) {
                    if ($gameTemp.tachieWindowColorId > 0) {
                        this._windowSkinId = $gameTemp.tachieWindowColorId;
                        var color = this._windowSkinId;
                        if (color > 0) {
                            this.windowskin = ImageManager.loadSystem('Tachie_Window' + color);
                        }
                        else {
                            this.windowskin = ImageManager.loadSystem('Window');
                        }
                    }
                    else {
                        this.clearWindowSkin();
                    }
                }
                if (this.isClosing() && this.openness < 240) {
                    this._balloonSprite.visible = false;
                    this._messageNameWindow.close();
                }
                else if (this.openness >= 255) {
                    this._balloonSprite.showBalloon();
                }
                if (!$gameTemp.tachieAvairable && !$gameMessage.isBusy() && this.isOpen()) {
                    this.close();
                }
                this.updateMessageSkip();
            };
            Window_TachieMessage.prototype.clearWindowSkin = function () {
                this._windowSkinId = 0;
                this.windowskin = ImageManager.loadSystem('Window');
                $gameTemp.tachieWindowColorId = 0;
            };
            Window_TachieMessage.prototype.updateMessageSkip = function () {
                if ($gameMessage.isChoice()) {
                    return;
                }
                if ($gameMessage.isNumberInput()) {
                    return;
                }
                if ($gameMessage.isItemChoice()) {
                    return;
                }
                if (Input.isPressed(Tachie.MESSAGE_SKIP_KEY) && !this._skipDisabled) {
                    if (this._windowHide) {
                        this.changeWindowVisibility();
                    }
                    if (this.isAnySubWindowActive()) {
                        return;
                    }
                    this._pauseSkip = true;
                    this._showFast = true;
                    this._triggered = true;
                    this.pause = false;
                    this._waitCount = 0;
                    if (!this._textState) {
                        this.terminateMessage();
                    }
                }
            };
            Window_TachieMessage.prototype.updateWindowVisibility = function () {
                if (Input.isTriggered(Tachie.WINDOW_HIDE_KEY)) {
                    this.changeWindowVisibility();
                }
                else if (this._windowHide && Input.isTriggered('ok')) {
                    this.changeWindowVisibility();
                }
                if (!$gameTemp.tachieName) {
                    this._messageNameWindow.visible = false;
                }
            };
            Window_TachieMessage.prototype.changeWindowVisibility = function () {
                this._windowHide = !this._windowHide;
                if (this._windowHide && this.visible) {
                    this.visible = false;
                    this._messageNameWindow.visible = false;
                    for (var _i = 0, _a = this.subWindows(); _i < _a.length; _i++) {
                        var window_1 = _a[_i];
                        window_1.visible = false;
                    }
                }
                else {
                    this.visible = true;
                    if ($gameTemp.tachieName) {
                        this._messageNameWindow.visible = true;
                    }
                    else {
                        this._messageNameWindow.visible = false;
                    }
                    for (var _b = 0, _c = this.subWindows(); _b < _c.length; _b++) {
                        var window_2 = _c[_b];
                        window_2.visible = true;
                    }
                }
            };
            Window_TachieMessage.prototype.isTriggered = function () {
                if ($gameTemp.isAutoMode && this._autoModeCurrentWait == this._autoModeNeedWait) {
                    // オートモードで一定時間経過した
                    return true;
                }
                var ret = _super.prototype.isTriggered.call(this) || this._triggered;
                this._triggered = false;
                return ret;
            };
            Window_TachieMessage.prototype.open = function () {
                _super.prototype.open.call(this);
                this._messageNameWindow.close();
            };
            Window_TachieMessage.prototype.startMessage = function () {
                _super.prototype.startMessage.call(this);
                this._calcAutoModelWait();
                if (!this._galMode) {
                    return;
                }
                if (Saba.BackLog) {
                    Saba.BackLog.$gameBackLog.addLog($gameTemp.tachieName, $gameMessage.allText());
                }
                //this._textState.y = this.standardPadding() + Tachie.windowPadding[0];
				this._textState.y = MAP_CHAT_TEXT_WINDOW_HEIGHT_PADDING;
                this._balloonSprite.showBalloon();
                this._messageNameWindow.draw($gameTemp.tachieName);
            };
            Window_TachieMessage.prototype._calcAutoModelWait = function () {
                this._autoModeCurrentWait = 0;
                this._autoModeNeedWait = $gameMessage.calcAutoModeFrames();
            };
            Window_TachieMessage.prototype._updateAutoMode = function () {
                if (!this.visible) {
                    return;
                }
                if ($gameTemp.isAutoMode) {
                    this._autoModeCurrentWait++;
                }
                //if (Input.isTriggered(Tachie.AUTO_MODE_KEY)) {
                //    $gameTemp.isAutoMode = !$gameTemp.isAutoMode;
                //}
            };
            Window_TachieMessage.prototype.updatePlacement = function () {
                if (this._galMode) {
					if($gameScreen.isChatMode()) {
						this.x = MAP_CHAT_TEXT_WINDOW_X;
						this.y = MAP_CHAT_TEXT_WINDOW_Y;
					}
					else {
						this.x = Tachie.windowMargin[3];
						this.y = this._positionType * (Graphics.boxHeight - this.height) / 2 - Tachie.windowMargin[2];
					}
                }
                else {
                    _super.prototype.updatePlacement.call(this);
                }
            };
            Window_TachieMessage.prototype.terminateMessage = function () {
                $gameMessage.clear();
                if ($gameTemp.tachieAvairable) {
                    return;
                }
                this.close();
            };
            Window_TachieMessage.prototype.textAreaWidth = function () {
                if (this._galMode) {
                    return this.contentsWidth() + 20 - Tachie.windowPadding[1];
                }
                else {
                    return _super.prototype.textAreaWidth.call(this);
                }
            };
            Window_TachieMessage.prototype.standardFontSize = function () {
                if (this._galMode) {
					if($gameScreen.isChatMode()) {
						return MAP_CHAT_TEXT_WINDOW_FONT_SIZE;
					}
                    else 
						//return Tachie.fontSize;
						return MAP_CHAT_TEXT_WINDOW_FONT_SIZE;
                }
                else {
                    return _super.prototype.standardFontSize.call(this);
                }
            };
            Window_TachieMessage.prototype.lineHeight = function () {
                if (this._galMode) {
                    if($gameScreen.isChatMode()) {
						return this.standardFontSize() * 1.2;
					}
                    else return this.standardFontSize() + 8;
                }
                else {
                    return _super.prototype.lineHeight.call(this);
                }
            };
            Window_TachieMessage.prototype.newLineX = function () {
                if (this._galMode) {
                    var x = this.isShowFace() ? Tachie.newLineXWithFace : 0;
                    return x + Tachie.windowPadding[3];
                }
                else {
                    return _super.prototype.newLineX.call(this);
                }
            };
            Window_TachieMessage.prototype.isShowFace = function () {
                if ($gameMessage.faceName() !== '') {
                    return true;
                }
                return Tachie.showTachieActorFace && $gameTemp.tachieActorId > 0;
            };
            Window_TachieMessage.prototype.drawMessageFace = function () {
                if (Tachie.showTachieActorFace && $gameTemp.tachieActorId > 0) {
                    var actor = $gameActors.actor($gameTemp.tachieActorId);
                    this.drawActorFace(actor, Tachie.messageFaceX, Tachie.messageFaceY, null, null, 0, 0, actor.tachieFace);
                }
                else {
                    this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), Tachie.messageFaceX, Tachie.messageFaceY);
                }
            };
            Window_TachieMessage.prototype.updateBackground = function () {
                this.refreshWindow();
                _super.prototype.updateBackground.call(this);
            };
            Window_TachieMessage.prototype.refreshWindow = function () {
                if (this._galMode) {
                    if ($gameMessage.background() !== 0 || $gameMessage.positionType() !== 2) {
                        this.clearWindowSkin();
                        this._galMode = false;
                        this.refreshWindowRect();
                    }
                }
                else {
                    if ($gameMessage.background() === 0 && $gameMessage.positionType() === 2) {
                        this._galMode = true;
                        this.refreshWindowRect();
                    }
                }
            };
            Window_TachieMessage.prototype.refreshWindowRect = function () {
                this.move(0, 0, this.windowWidth(), this.windowHeight());
                this.createContents();
                this.updatePlacement();
                this._refreshContents();
            };
            Window_TachieMessage.prototype.isGalMode = function () {
                return this._galMode;
            };
            Window_TachieMessage.prototype.convertEscapeCharacters = function (text) {
                this._skipDisabled = false;
                text = _super.prototype.convertEscapeCharacters.call(this, text);
                if (!!text.match(/\<wait\>/i)) {
                    this._skipDisabled = true;
                }
                text = text.replace(/\<wait\>/gi, '');
                return text;
            };
            Window_TachieMessage.prototype.newPage = function (textState) {
                _super.prototype.newPage.call(this, textState);
                textState.y = this.standardPadding() + Tachie.windowPadding[0];
            };
            ;
            return Window_TachieMessage;
        }(Window_Message));
        Tachie.Window_TachieMessage = Window_TachieMessage;
        Game_Message.prototype.calcAutoModeFrames = function () {
            if (this._choices.length > 0) {
                return -1;
            }
            var textCount = 0;
            for (var _i = 0, _a = this._texts; _i < _a.length; _i++) {
                var line = _a[_i];
                textCount += line.length;
            }
            return Math.floor((textCount * Tachie.AUTO_MODE_DELAY_PER_CHAR + Tachie.AUTO_MODE_DELAY_COMMON) / (1000 / 60));
        };
        var _Scene_Map_createMessageWindow = Scene_Map.prototype.createMessageWindow;
        Scene_Map.prototype.createMessageWindow = function () {
            _Scene_Map_createMessageWindow.call(this);
            this._tachieMessageWindow = new Window_TachieMessage();
            this._originalMessageWindow = this._messageWindow;
            this.addWindow(this._tachieMessageWindow);
            this._windowLayer.removeChild(this._originalMessageWindow);
            this._messageWindow = this._tachieMessageWindow;
            this._messageWindow.subWindows().forEach(function (window) {
                this.addWindow(window);
            }, this);
        };
        var Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
        Scene_Boot.prototype.loadSystemImages = function () {
            Scene_Boot_loadSystemImages.call(this);
            for (var i_1 in Tachie.windowColors) {
                var color_2 = Tachie.windowColors[i_1];
                if (color_2 > 0) {
                    ImageManager.loadSystem('Tachie_Window' + color_2);
                }
            }
            if (Tachie.AUTO_MODE_KEY && Tachie.AUTO_MODE_KEY.length > 0) {
                for (var i = 0; i < Tachie.AUTO_MODE_MARK_TOTAL_FRAME; i++) {
                    ImageManager.loadSystem('Tachie_Auto_' + (i + 1));
                }
            }
        };
        Saba.applyMyMethods(_Game_Interpreter, Game_Interpreter);
        Saba.applyMyMethods(_Sprite_Picture, Sprite_Picture);
        //Saba.applyMyMethods(_Game_Item, Game_Item);
        Saba.applyMyMethods(_Game_Actor, Game_Actor);
        Saba.applyMyMethods(_Game_Screen, Game_Screen);
        Saba.applyMyMethods(_Game_Picture, Game_Picture);
        Saba.applyMyMethods(_Game_Temp, Game_Temp);
    })(Tachie = Saba.Tachie || (Saba.Tachie = {}));
})(Saba || (Saba = {}));
