var Remtairy = Remtairy || {};
Remtairy.Map = Remtairy.Map || {};

////////////
// Map BGM
///////////

//EB / Outside BGM
const MAP_EB_BGM_NAME = 'Field1'; 
const MAP_EB_BGM_VOLUME = 80;

//Karryn's Office & Guard Quarters BGM
const MAP_OFFICE_BGM_NAME = 'S_Prologue1'; 
const MAP_OFFICE_BGM_VOLUME = 80;

//Mess Hall
const MAP_MESS_HALL_BGM_NAME = 'Prison_Others1'; 
const MAP_MESS_HALL_BGM_VOLUME = 90;

//Yard
const MAP_YARD_BGM_NAME = 'Prison_Others1'; 
const MAP_YARD_BGM_VOLUME = 50;

//Infirmary
const MAP_INFIRMARY_BGM_NAME = 'S_Prologue1'; 
const MAP_INFIRMARY_BGM_VOLUME = 80;

//Level 1 is Anarchy BGM
const MAP_LEVEL_ONE_ANARCHY_BGM_NAME = 'Prison_Anarchy1';
const MAP_LEVEL_ONE_ANARCHY_BGM_VOLUME = 80;

//Level 1 is Subjugated BGM
const MAP_LEVEL_ONE_SUBJUGATED_BGM_NAME = 'Prison_Subjugated1';
const MAP_LEVEL_ONE_SUBJUGATED_BGM_VOLUME = 80;

//Level 1 is Rioting BGM
const MAP_LEVEL_ONE_RIOTING_BGM_NAME = 'Prison_Riot1';
const MAP_LEVEL_ONE_RIOTING_BGM_VOLUME = 80;

//Level 2 is Anarchy BGM
const MAP_LEVEL_TWO_ANARCHY_BGM_NAME = 'Prison_Anarchy2';
const MAP_LEVEL_TWO_ANARCHY_BGM_VOLUME = 80;

//Level 2 is Subjugated BGM
const MAP_LEVEL_TWO_SUBJUGATED_BGM_NAME = 'Prison_Subjugated1';
const MAP_LEVEL_TWO_SUBJUGATED_BGM_VOLUME = 80;

//Level 2 is Rioting BGM
const MAP_LEVEL_TWO_RIOTING_BGM_NAME = 'Prison_Riot1';
const MAP_LEVEL_TWO_RIOTING_BGM_VOLUME = 80;

//Level 2 
const MAP_LEVEL_TWO_STORE_BGM_NAME = 'Prison_Others1'; 
const MAP_LEVEL_TWO_STORE_BGM_VOLUME = 90;

//Level 3 is Anarchy BGM
const MAP_LEVEL_THREE_ANARCHY_BGM_NAME = 'Prison_Anarchy3';
const MAP_LEVEL_THREE_ANARCHY_BGM_VOLUME = 75;

//Level 3 is Subjugated BGM
const MAP_LEVEL_THREE_SUBJUGATED_BGM_NAME = 'Prison_Subjugated1';
const MAP_LEVEL_THREE_SUBJUGATED_BGM_VOLUME = 80;

//Level 3 is Rioting BGM
const MAP_LEVEL_THREE_RIOTING_BGM_NAME = 'Prison_Riot1';
const MAP_LEVEL_THREE_RIOTING_BGM_VOLUME = 80;

//Bar BGM
const MAP_BAR_BGM_NAME = 'Bar1';
const MAP_BAR_BGM_VOLUME = 75;

//Toilet BGM
const MAP_TOILET_BGM_NAME = 'Prison_Others2';
const MAP_TOILET_BGM_VOLUME = 80;

//Map Borders
const MAP_LOWER_BORDERS_NORMAL = "MapBorders_Normal";
const MAP_LOWER_BORDERS_CHAT = "MapBorders_Chat";
const MAP_BORDERS_UPPER = "MapBorders_Upper";

//Map Backgrounds
const MAP_BORDER_BACKGROUND_DEFAULT = "MapBorders_Bg";
const MAP_BORDER_BACKGROUND_OUTSIDE = "MapBorders_Bg_Outside";
const MAP_BORDER_BACKGROUND_BAR = "MapBorders_Bg_Bar";
const MAP_BORDER_BACKGROUND_EB = "MapBorders_Bg_Eb";
const MAP_BORDER_BACKGROUND_BASEMENT1 = "MapBorders_Bg_Basement1";

//Map Chat
const MAP_CHAT_TEXT_WINDOW_X = 0;
const MAP_CHAT_TEXT_WINDOW_Y = 660;
const MAP_CHAT_TEXT_WINDOW_WIDTH = 1010;
const MAP_CHAT_TEXT_WINDOW_FONT_SIZE = 28;
const MAP_CHAT_TEXT_WINDOW_LINES = 3;
const MAP_CHAT_TEXT_WINDOW_HEIGHT_PADDING = 20;

const MAP_CHAT_TEXT_TRANSPARENT_WINDOW_HEIGHT_PADDING = 40;

const MAP_NAME_WINDOW_FONT_SIZE = 26;
const MAP_NAME_WINDOW_FONT_HEIGHT_PADDING = -4;
const MAP_NAME_WINDOW_FONT_WIDTH_PADDING = 10;

//Autosave
const MAP_AUTOSAVE_X = 1150;
const MAP_AUTOSAVE_Y = 765;
const MAP_AUTOSAVE_ICON_ID = 282;

const MAP_INFO_DAY_NUMBERS = "MapBorders_DayNumbers";
const MAP_INFO_DAY_X = 65;
const MAP_INFO_DAY_Y = 721;

const MAP_INFO_STAT_NUMBERS = "MapBorders_OrderNumbers"; //obsolete
const MAP_INFO_ORDER_X = 552; //obsolete
const MAP_INFO_ORDER_Y = 781; //obsolete
const MAP_INFO_CONTROL_X = 677; //obsolete
const MAP_INFO_CONTROL_Y = 781; //obsolete
const MAP_INFO_FATIGUE_X = 802; //obsolete
const MAP_INFO_FATIGUE_Y = 781; //obsolete
const MAP_INFO_PLEASURE_X = 927; //obsolete
const MAP_INFO_PLEASURE_Y = 781; //obsolete

const MAP_INFO_CONTROL_SYMBOL_FONT_SIZE = 18; //obsolete
const MAP_INFO_CONTROL_SYMBOL_X = 648; //obsolete
const MAP_INFO_CONTROL_SYMBOL_Y = 744; //obsolete
const MAP_INFO_SYMBOL_PERCENT_FONT_SIZE = 12; //obsolete
const MAP_INFO_FATIGUE_PERCENT_X = 796.5; //obsolete
const MAP_INFO_FATIGUE_PERCENT_Y = 745; //obsolete
const MAP_INFO_PLEASURE_PERCENT_X = 920.5; //obsolete
const MAP_INFO_PLEASURE_PERCENT_Y = 745; //obsolete

const MAP_INFO_BOTTOM_NUMBER_FONT_SIZE = 15;
const MAP_INFO_BOTTOM_NUMBER_Y = 745;
const MAP_INFO_BOTTOM_ORDER_X = 523;
const MAP_INFO_CONTROL_ORDER_X = 649;
const MAP_INFO_FATIGUE_ORDER_X = 777;
const MAP_INFO_PLEASURE_ORDER_X = 902;

const MAP_INFO_MAP_NAME_FONT_SIZE = 30;
const MAP_INFO_MAP_NAME_WIDTH = 700;
const MAP_INFO_MAP_NAME_X = 130;
const MAP_INFO_MAP_NAME_Y = -18;

const MAP_INFO_LEVEL_FONT_SIZE = 22;
const MAP_INFO_LEVEL_WIDTH = 150;
const MAP_INFO_LEVEL_1_X = 270;
const MAP_INFO_LEVEL_1_Y = 637;
const MAP_INFO_LEVEL_2_X = 275;
const MAP_INFO_LEVEL_2_Y = 664;
const MAP_INFO_LEVEL_3_X = 280;
const MAP_INFO_LEVEL_3_Y = 691;
const MAP_INFO_LEVEL_4_X = 285;
const MAP_INFO_LEVEL_4_Y = 718;
const MAP_INFO_LEVEL_5_X = 295;
const MAP_INFO_LEVEL_5_Y = 745;

const MAP_INFO_Y_CONSTANT = 30;

//=============================================================================
 /*:
 * @plugindesc Map
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const MAP_ID_TESTING = 1;
const MAP_ID_MODE_SELECT = 35;

const MAP_ID_OUTSIDE = 17;
const MAP_ID_YARD = 24;

const MAP_ID_KARRYN_OFFICE = 21;
const MAP_ID_EB_HALLWAY = 18;
const MAP_ID_EB_MESS_HALL = 22;
const MAP_ID_EB_INFIRMARY = 23;
const MAP_ID_EB_GUARD_QUARTERS = 20;

const MAP_ID_VISITOR_CENTER = 4;
const MAP_ID_VISITOR_CENTER_BROKEN = 29;
const MAP_ID_VISITOR_ROOM = 6;
const MAP_ID_VISITOR_ROOM_BROKEN = 30;
const MAP_ID_LVL1_STAIRS_TO_LVL3 = 12;
const MAP_ID_LVL1_STAIRS_TO_LVL2 = 5;
const MAP_ID_BAR = 7;
const MAP_ID_BAR_BROKEN = 31;
const MAP_ID_BAR_STORAGE = 8;
const MAP_ID_LVL1_HALLWAY = 15;
const MAP_ID_WORKSHOP = 10;
const MAP_ID_LVL1_GUARD_STATION = 9;
const MAP_ID_DISH_WASHING = 11;
const MAP_ID_RECEPTION = 13;
const MAP_ID_LAUNDRY = 14;

const MAP_ID_LVL2_STAIRS_TO_LVL1 = 38;
const MAP_ID_LVL2_GUARD_STATION = 45;
const MAP_ID_LVL2_HALLWAY_FLOODED = 39;
const MAP_ID_LVL2_HALLWAY = 52;
const MAP_ID_STORE_FIXED = 40;
const MAP_ID_STORE_BROKEN = 49;
const MAP_ID_READING_ROOM = 41;
const MAP_ID_CLASSROOM = 42;
const MAP_ID_BATHROOM_BROKEN = 50;
const MAP_ID_BATHROOM_FIXED = 43;
const MAP_ID_STAFF_LOUNGE = 44;
const MAP_ID_RESEARCH = 46;
const MAP_ID_MEETING_ROOM = 47;
const MAP_ID_OFFICE_FIXED = 48;
const MAP_ID_OFFICE_FLOODED = 51;
const MAP_ID_OFFICE_BROKEN = 53;

const MAP_ID_LVL3_STAIRS_TO_LVL1_LVL4 = 36;
const MAP_ID_COMMON_AREA_SOUTH_EAST = 37;
const MAP_ID_CELL_BLOCK_SOUTH = 54;
const MAP_ID_SHOWER_BLOCK_SOUTH = 55;
const MAP_ID_GYM = 56;
const MAP_ID_SHOWER_BLOCK_NORTH = 62;
const MAP_ID_LVL3_GUARD_STATION = 60;
const MAP_ID_LVL3_DEFEAT_SOLITARY_CELL = 61;
const MAP_ID_CELL_BLOCK_NORTH_WEST = 58;
const MAP_ID_CELL_BLOCK_NORTH_EAST = 57;
const MAP_ID_COMMON_AREA_NORTH_EAST = 59;

const MAP_ID_LVL4_GUARD_STATION = 999;

/////////
// Scene Map
///////////////

Remtairy.Map.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
	this.createMapInfoWindow();
    Remtairy.Map.Scene_Map_createAllWindows.call(this);
	this.createRemUpperBorders();
	
};

Remtairy.Map.Game_Player_clearTransferInfo = Game_Player.prototype.clearTransferInfo;
Game_Player.prototype.clearTransferInfo = function() {
    Remtairy.Map.Game_Player_clearTransferInfo.call(this);
	$gameActors.actor(ACTOR_KARRYN_ID)._cacheChanged = true;
	$gameActors.actor(ACTOR_KARRYN_ID)._dirty = true;
};


Scene_Map.prototype.createMapInfoWindow = function() {
	$gameScreen.setMapInfoRefreshNeeded();
    this._MapInfoWindow = new Window_MapInfo(0, -MAP_INFO_Y_CONSTANT);
    this.addWindow(this._MapInfoWindow);
};

Scene_Map.prototype.createRemUpperBorders = function() {
	var name = $gameScreen.getRemUpperBordersName();
	if(name) {
		this._upperRemBorders = new Sprite(ImageManager.loadSystem(name));
		this._remUpperBordersName = name;
		this.addChild(this._upperRemBorders);
	}
};

Scene_Map.prototype.updateRemUpperBorders = function() {
	if(this._remUpperBordersName != $gameScreen.getRemUpperBordersName() || $gameScreen._remUpperBordersRefreshNeeded) {
		this.removeRemUpperBorders();
		this.createRemUpperBorders();
	}
};

Scene_Map.prototype.removeRemUpperBorders = function() {
	this._baseSprite.removeChild(this._upperRemBorders);
};

Scene_Map.prototype.launchBattle = function() {
    BattleManager.saveBgmAndBgs();
    this.stopAudioOnBattleStart();
	if(Karryn.isInMasturbationCouchPose()) {
		this._encounterEffectDuration = 0;
	}
	else {
		SoundManager.playBattleStart();
		this.startEncounterEffect();
	}
    this._mapNameWindow.hide();
	if(this._MapInfoWindow) this._MapInfoWindow.hide();
};

Remtairy.Map.Scene_Map_fadeInForTransfer = Scene_Map.prototype.fadeInForTransfer;
Scene_Map.prototype.fadeInForTransfer = function() {
	Remtairy.Map.Scene_Map_fadeInForTransfer.call(this);
	$gameScreen.changeMapBordersBackgroundOnTransfer();
	$gameParty.changeCurrentPrisonOnTransfer();
	$gameParty.changeEdictPointsOnTransfer();
	Karryn.emoteMasterManager();
	this.changeBGMOnTransfer();
	StorageManager.performAutosave();
};

Scene_Map.prototype.updateEncounterEffect = function() {
	if(Karryn.isInMasturbationCouchPose() && this._encounterEffectDuration > 0) {
		this._encounterEffectDuration = 0;
	}
	else {
		if (this._encounterEffectDuration > 0) {
			this._encounterEffectDuration--;
			var speed = this.encounterEffectSpeed();
			var n = speed - this._encounterEffectDuration;
			var p = n / speed;
			var q = ((p - 1) * 20 * p + 5) * p + 1;
			var zoomX = $gamePlayer.screenX();
			var zoomY = $gamePlayer.screenY() - 24;
			if (n === 2) {
				$gameScreen.setZoom(zoomX, zoomY, 1);
				this.snapForBattleBackground();
				this.startFlashForEncounter(speed / 2);
			}
			$gameScreen.setZoom(zoomX, zoomY, q);
			if (n === Math.floor(speed / 6)) {
				this.startFlashForEncounter(speed / 2);
			}
			if (n === Math.floor(speed / 2)) {
				BattleManager.playBattleBgm();
				this.startFadeOut(this.fadeSpeed());
			}
		}
	}
};

Scene_Map.prototype.changeBGMOnTransfer = function() {
	let bgmName = false;
	let bgmVolume = MAP_EB_BGM_VOLUME;
	let mapId = $gameMap._mapId;
	
	if(Prison.currentlyOutsidePrison()) {
		if(mapId === MAP_ID_OUTSIDE || mapId === MAP_ID_EB_HALLWAY) {
			bgmName = MAP_EB_BGM_NAME;
			bgmVolume = MAP_EB_BGM_VOLUME;
		}
		else if(mapId === MAP_ID_KARRYN_OFFICE || mapId === MAP_ID_EB_GUARD_QUARTERS) {
			bgmName = MAP_OFFICE_BGM_NAME;
			bgmVolume = MAP_OFFICE_BGM_VOLUME;
		}
		else if(mapId === MAP_ID_YARD) {
			bgmName = MAP_YARD_BGM_NAME;
			bgmVolume = MAP_YARD_BGM_VOLUME;
		}
		else if(mapId === MAP_ID_EB_MESS_HALL) {
			bgmName = MAP_MESS_HALL_BGM_NAME;
			bgmVolume = MAP_MESS_HALL_BGM_VOLUME;
		}
		else if(mapId === MAP_ID_EB_INFIRMARY) {
			bgmName = MAP_INFIRMARY_BGM_NAME;
			bgmVolume = MAP_INFIRMARY_BGM_VOLUME;
		}
		
	}
	else if(Prison.currentlyPrisonLevelOne()) {
		if(mapId === MAP_ID_BAR || mapId === MAP_ID_BAR_BROKEN || mapId === MAP_ID_BAR_STORAGE) {
			if(Prison.prisonLevelOneIsAnarchy()) {
				bgmName = MAP_LEVEL_ONE_ANARCHY_BGM_NAME;
				bgmVolume = MAP_LEVEL_ONE_ANARCHY_BGM_VOLUME;
			}
			else {
				bgmName = MAP_BAR_BGM_NAME;
				bgmVolume = MAP_BAR_BGM_VOLUME;
			}
		}
		else if(mapId === MAP_ID_LVL1_STAIRS_TO_LVL2 || mapId === MAP_ID_LVL1_STAIRS_TO_LVL3) {
			bgmName = false;
		}
		else if(Prison.prisonLevelOneIsSubjugated()) {
			bgmName = MAP_LEVEL_ONE_SUBJUGATED_BGM_NAME;
			bgmVolume = MAP_LEVEL_ONE_SUBJUGATED_BGM_VOLUME;
		}
		else if(Prison.prisonLevelOneIsAnarchy()) {
			bgmName = MAP_LEVEL_ONE_ANARCHY_BGM_NAME;
			bgmVolume = MAP_LEVEL_ONE_ANARCHY_BGM_VOLUME;
		}
		else {
			if(mapId === MAP_ID_WORKSHOP || mapId === MAP_ID_DISH_WASHING || mapId === MAP_ID_RECEPTION || mapId === MAP_ID_LAUNDRY || mapId === MAP_ID_LVL1_HALLWAY || mapId === MAP_ID_LVL1_GUARD_STATION) {
				bgmName = MAP_LEVEL_ONE_RIOTING_BGM_NAME;
				bgmVolume = MAP_LEVEL_ONE_RIOTING_BGM_VOLUME;
			}
			else {
				bgmName = MAP_LEVEL_ONE_SUBJUGATED_BGM_NAME;
				bgmVolume = MAP_LEVEL_ONE_SUBJUGATED_BGM_VOLUME;
			}
		}
		
	}		
	else if(Prison.currentlyPrisonLevelTwo()) {
		if(mapId === MAP_ID_LVL2_STAIRS_TO_LVL1) {
			bgmName = false;
		}
		else if(mapId === MAP_ID_BATHROOM_FIXED) {
			bgmName = MAP_TOILET_BGM_NAME;
			bgmVolume = MAP_TOILET_BGM_VOLUME;
		}
		else if(Prison.prisonLevelTwoIsAnarchy()) {
			bgmName = MAP_LEVEL_TWO_ANARCHY_BGM_NAME;
			bgmVolume = MAP_LEVEL_TWO_ANARCHY_BGM_VOLUME;
		}
		else if(mapId === MAP_ID_STORE_FIXED) {
			bgmName = MAP_LEVEL_TWO_STORE_BGM_NAME;
			bgmVolume = MAP_LEVEL_TWO_STORE_BGM_VOLUME;
		}
		else if(Prison.prisonLevelTwoIsSubjugated()) {
			bgmName = MAP_LEVEL_TWO_SUBJUGATED_BGM_NAME;
			bgmVolume = MAP_LEVEL_TWO_SUBJUGATED_BGM_VOLUME;
		}
		else {
			if(mapId === MAP_ID_READING_ROOM || mapId === MAP_ID_CLASSROOM || mapId === MAP_ID_STAFF_LOUNGE || mapId === MAP_ID_RESEARCH || mapId === MAP_ID_MEETING_ROOM || mapId === MAP_ID_LVL2_HALLWAY || mapId === MAP_ID_LVL2_GUARD_STATION) {
				bgmName = MAP_LEVEL_TWO_RIOTING_BGM_NAME;
				bgmVolume = MAP_LEVEL_TWO_RIOTING_BGM_VOLUME;
			}
			else {
				bgmName = MAP_LEVEL_TWO_SUBJUGATED_BGM_NAME;
				bgmVolume = MAP_LEVEL_TWO_SUBJUGATED_BGM_VOLUME;
			}
		}
		
	}
	else if(Prison.currentlyPrisonLevelThree()) {	
		if(mapId === MAP_ID_LVL3_STAIRS_TO_LVL1_LVL4) {
			bgmName = false;
		}
		else if(Prison.prisonLevelThreeIsAnarchy() || Prison.prisonLevelThreeIsUnknown()) {
			bgmName = MAP_LEVEL_THREE_ANARCHY_BGM_NAME;
			bgmVolume = MAP_LEVEL_THREE_ANARCHY_BGM_VOLUME;
		}
		else if(Prison.prisonLevelThreeIsSubjugated()) {
			bgmName = MAP_LEVEL_THREE_SUBJUGATED_BGM_NAME;
			bgmVolume = MAP_LEVEL_THREE_SUBJUGATED_BGM_VOLUME;
		}
		else {
			bgmName = MAP_LEVEL_THREE_SUBJUGATED_BGM_NAME;
			bgmVolume = MAP_LEVEL_THREE_SUBJUGATED_BGM_VOLUME;
		}
	}	
		
	if(bgmName) {
		AudioManager.playBgm({name:bgmName, pan:0, pitch:100, pos:0, volume:bgmVolume});
		//console.log('playing map BGM ' + bgmName);
	}
	else
		AudioManager.stopBgm();
};

/////////
// Scene Load
//////////////

Remtairy.Map.Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function() {
    Remtairy.Map.Scene_Load_onLoadSuccess.call(this);
	$gameScreen.setMapInfoRefreshNeeded();
};



//////////////
// Spriteset Map
///////////////////

Remtairy.Map.Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
    Remtairy.Map.Spriteset_Map_createLowerLayer.call(this);
	this.createRemLowerBorders();
};

Spriteset_Map.prototype.createRemLowerBorders = function() {
	let name = $gameScreen.getRemLowerBordersName();
	if(name) {
		let bg = $gameScreen.getMapBordersBackgroundName();
		this._remBordersBackground = new Sprite(ImageManager.loadSystem(bg));
		this._remBordersBackgroundName = bg;
		this._baseSprite.addChild(this._remBordersBackground);
		
		if(name == MAP_LOWER_BORDERS_NORMAL) {
			if(TextManager.isEnglish) name += "_EN";
			else if(TextManager.isJapanese) name += "_JP";
		}
		
		this._lowerRemBorders = new Sprite(ImageManager.loadSystem(name));
		this._remLowerBordersName = name;
		this._baseSprite.addChild(this._lowerRemBorders);
	}
};

Remtairy.Map.Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
    Remtairy.Map.Spriteset_Map_update.call(this);
    this.updateRemLowerBorders();
};

Spriteset_Map.prototype.updateRemLowerBorders = function() {
	if(this._remLowerBordersName != $gameScreen.getRemLowerBordersName() || 
	this._remBordersBackgroundName != $gameScreen.getMapBordersBackgroundName() ||
	$gameScreen._remLowerBordersRefreshNeeded) {
		this.removeRemLowerBorders();
		this.createRemLowerBorders();
	}
};

Spriteset_Map.prototype.removeRemLowerBorders = function() {
	this._baseSprite.removeChild(this._remBordersBackground);
	this._baseSprite.removeChild(this._lowerRemBorders);
};

/////////
// Sprite RemNumber
///////////////////

function Sprite_RemNumber() {
    this.initialize.apply(this, arguments);
}

Sprite_RemNumber.prototype = Object.create(Sprite.prototype);
Sprite_RemNumber.prototype.constructor = Sprite_RemNumber;

Sprite_RemNumber.prototype.initialize = function(bitmapName) {
    Sprite.prototype.initialize.call(this);
    this._numberBitmap = ImageManager.loadSystem(bitmapName);
};

Sprite_RemNumber.prototype.digitWidth = function() {
    return this._numberBitmap ? this._numberBitmap.width / 10 : 0;
};

Sprite_RemNumber.prototype.digitHeight = function() {
    return this._numberBitmap ? this._numberBitmap.height : 0;
};

Sprite_RemNumber.prototype.setNumber = function(value) {
    var string = Math.abs(value).toString();
    var row = 0;
    var w = this.digitWidth();
    var h = this.digitHeight();
    for (var i = 0; i < string.length; i++) {
        var sprite = this.createChildSprite();
        var n = Number(string[i]);
        sprite.setFrame(n * w, row * h, w, h);
        sprite.x = (i - (string.length - 1) / 2) * w;
    }
    
};

Sprite_RemNumber.prototype.createChildSprite = function() {
    var sprite = new Sprite();
    sprite.bitmap = this._numberBitmap;
    this.addChild(sprite);
    return sprite;
};

//////////
// Game Screen
/////////////

Game_Screen.prototype.setMapBordersBackgroundName = function(bgName) {
    $gameParty._remLowerBordersBackground = bgName;
};
Game_Screen.prototype.getMapBordersBackgroundName = function() {
    return $gameParty._remLowerBordersBackground;
};
Game_Screen.prototype.setMapBordersBackgroundDefault = function() {
    this.setMapBordersBackgroundName(MAP_BORDER_BACKGROUND_DEFAULT);
	this._remLowerBordersRefreshNeeded = true;
};
Game_Screen.prototype.setMapBordersBackgroundOutside = function() {
	this.setMapBordersBackgroundName(MAP_BORDER_BACKGROUND_OUTSIDE);
	this._remLowerBordersRefreshNeeded = true;
};
Game_Screen.prototype.setMapBordersBackgroundBar = function() {
	this.setMapBordersBackgroundName(MAP_BORDER_BACKGROUND_BAR);
	this._remLowerBordersRefreshNeeded = true;
};
Game_Screen.prototype.setMapBordersBackgroundEB = function() {
	this.setMapBordersBackgroundName(MAP_BORDER_BACKGROUND_EB);
	this._remLowerBordersRefreshNeeded = true;
};
Game_Screen.prototype.setMapBordersBackgroundBasement1 = function() {
	this.setMapBordersBackgroundName(MAP_BORDER_BACKGROUND_BASEMENT1);
	this._remLowerBordersRefreshNeeded = true;
};


Game_Screen.prototype.changeMapBordersBackgroundOnTransfer = function() {
	let mapId = $gameMap._mapId;
	
    if(mapId === MAP_ID_OUTSIDE || mapId === MAP_ID_YARD) {
		this.setMapBordersBackgroundOutside();
	}
	else if(mapId === MAP_ID_BAR || mapId === MAP_ID_BAR_BROKEN || mapId === MAP_ID_BAR_STORAGE) {
		this.setMapBordersBackgroundBar();
	}
	else if(mapId === MAP_ID_KARRYN_OFFICE || mapId === MAP_ID_EB_HALLWAY || mapId === MAP_ID_EB_MESS_HALL || mapId === MAP_ID_EB_INFIRMARY || mapId === MAP_ID_EB_GUARD_QUARTERS ) {
		this.setMapBordersBackgroundEB();
	}
	else if(mapId === MAP_ID_LVL1_STAIRS_TO_LVL3 || mapId === MAP_ID_LVL1_STAIRS_TO_LVL2) {
		this.setMapBordersBackgroundDefault();
	}
	else if(mapId === MAP_ID_LVL3_STAIRS_TO_LVL1_LVL4 || Prison.currentlyPrisonLevelThree()) {
		this.setMapBordersBackgroundBasement1();
	}
	else
		this.setMapBordersBackgroundDefault();
	
};

Game_Screen.prototype.getRemLowerBordersName = function() {
    /*var name = this._remLowerBorders;
	if(name == MAP_LOWER_BORDERS_NORMAL) {
		if(TextManager.isEnglish) name += "_EN";
		else if(TextManager.isJapanese) name += "_JP";
	}
	return name;*/
	return this._remLowerBorders;
};
Game_Screen.prototype.getRemUpperBordersName = function() {
    return this._remUpperBorders;
};

Game_Screen.prototype.setRemLowerBordersNormal = function() {
    this._remLowerBorders = MAP_LOWER_BORDERS_NORMAL;
	this._remLowerBordersRefreshNeeded = true;
};
Game_Screen.prototype.setRemLowerBordersChat = function() {
    this._remLowerBorders = MAP_LOWER_BORDERS_CHAT;
	this._remLowerBordersRefreshNeeded = true;
};
Game_Screen.prototype.setRemLowerBordersNone = function() {
    this._remLowerBorders = false;
	this._remLowerBordersRefreshNeeded = true;
	this.setMapInfoRefreshNeeded();
};

Game_Screen.prototype.isMapMode = function() {
    return this._remLowerBorders == MAP_LOWER_BORDERS_NORMAL && !$gameParty.inBattle();
};
Game_Screen.prototype.isChatMode = function() {
    return this._remLowerBorders == MAP_LOWER_BORDERS_CHAT || TESTING_CHAT_BOX;
};
Game_Screen.prototype.isCinematicMode = function() {
    return this._remLowerBorders == false;
};

Game_Screen.prototype.setRemUpperBordersNormal = function() {
    this._remUpperBorders = MAP_BORDERS_UPPER;
	this._remUpperBordersRefreshNeeded = true;
};
Game_Screen.prototype.setRemUpperBordersNone = function() {
    this._remUpperBorders = false;
	this._remUpperBordersRefreshNeeded = true;
};

Game_Screen.prototype.showMapInfo = function() {
    this._showMapInfo = true;
	this.setMapInfoRefreshNeeded();
};
Game_Screen.prototype.hideMapInfo = function() {
    this._showMapInfo = false;
	this.setMapInfoRefreshNeeded();
};
Game_Screen.prototype.displayMapInfo = function() {
    return this._showMapInfo;
};

Game_Screen.prototype.setMapInfoRefreshNeeded = function() {
    this._mapInfoRefreshNeeded = true;
};

/////////
// Window MapInfo
//////////////////

function Window_MapInfo() {
    this.initialize.apply(this, arguments);
}

Window_MapInfo.prototype = Object.create(Window_Base.prototype);
Window_MapInfo.prototype.constructor = Window_MapInfo;

Window_MapInfo.prototype.initialize = function(x, y) {
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight + MAP_INFO_Y_CONSTANT * 2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
	this.setBackgroundType(255);
	this.createRemUpperBorders();
    this.redrawMapInfo();
};

Window_MapInfo.prototype.open = function() {
    this.redrawMapInfo();
    Window_Base.prototype.open.call(this);
};

Window_MapInfo.prototype.update = function() {
    Window_Base.prototype.update.call(this);
	
	if($gameScreen._remUpperBordersRefreshNeeded) {
		this.checkRemUpperBorders();
		this.redrawMapInfo();
	}
	else if($gameScreen._mapInfoRefreshNeeded) {
		this.redrawMapInfo();
	}

	if(!$gameScreen.displayMapInfo()) this.removeMapInfo();
};

Window_MapInfo.prototype.checkRemUpperBorders = function() {
    if(this._remUpperBordersName != $gameScreen.getRemUpperBordersName() || $gameScreen._remUpperBordersRefreshNeeded) {
		this.removeRemUpperBorders();
		this.createRemUpperBorders();
		$gameScreen._remUpperBordersRefreshNeeded = false;
	}
};

Window_MapInfo.prototype.removeRemUpperBorders = function() {
	this.removeChild(this._upperRemBorders);
};

Window_MapInfo.prototype.createRemUpperBorders = function() {
	var name = $gameScreen.getRemUpperBordersName();
	if(name) {
		this._upperRemBorders = new Sprite(ImageManager.loadSystem(name));
		this._remUpperBordersName = name;
		this.addChild(this._upperRemBorders);
	}
};

Window_MapInfo.prototype.removeMapInfo = function() {
	this.contents.clear();
	this.resetTextColor();
	if(this._dayNumbers) {
		this.removeChild(this._dayNumbers);
		this._dayNumbers = false;
	}
	if(this._orderNumbers) {
		this.removeChild(this._orderNumbers);
		this._orderNumbers = false;
	}
	if(this._controlNumbers) {
		this.removeChild(this._controlNumbers);
		this._controlNumbers = false;
	}
	if(this._fatigueNumbers) {
		this.removeChild(this._fatigueNumbers);
		this._fatigueNumbers = false;
	}
	if(this._pleasureNumbers) {
		this.removeChild(this._pleasureNumbers);
		this._pleasureNumbers = false;
	}
};

Window_MapInfo.prototype.redrawMapInfo = function() {
	this.removeMapInfo();

	if(!$gameScreen.displayMapInfo()) return;

	//Map Name
	this.drawMapName();
	
	if($gameScreen.isChatMode()) {
		$gameScreen._mapInfoRefreshNeeded = false;
		return;
	}
	
	//Prison Levels
	this.drawPrisonLevels();
	
	//Date
	this._dayNumbers = new Sprite_RemNumber(MAP_INFO_DAY_NUMBERS);
	this._dayNumbers.x = MAP_INFO_DAY_X;
	this._dayNumbers.y = MAP_INFO_DAY_Y + MAP_INFO_Y_CONSTANT;
	this._dayNumbers.setNumber(Prison.date);
	this.addChild(this._dayNumbers);
	
	/*
	//Order
	var prisonOrder = Prison.order;
	this._orderNumbers = new Sprite_RemNumber(MAP_INFO_STAT_NUMBERS);
	if(Prison.HighOrder()) {
		
	}
	else if(Prison.MedOrder()) {
		this._orderNumbers.setColor(255,255,0,250);
	}
	else if(Prison.LowOrder()) {
		this._orderNumbers.setColor(255,155,75,250);
	}
	else if(Prison.VeryLowOrder()) {
		this._orderNumbers.setColor(255,75,85,250);
	}
	else if(Prison.NearNoOrder()) {
		this._orderNumbers.setColor(255,55,15,250);
	}
	this._orderNumbers.x = MAP_INFO_ORDER_X;
	this._orderNumbers.y = MAP_INFO_ORDER_Y + MAP_INFO_Y_CONSTANT;
	this._orderNumbers.setNumber(prisonOrder);
	this.addChild(this._orderNumbers);
	
	
	//Control
	var prisonControl = Prison.orderChange;
	this._controlNumbers = new Sprite_RemNumber(MAP_INFO_STAT_NUMBERS);
	if(prisonControl <= -10) 
		this._controlNumbers.setColor(255,55,15,250);
	else if(prisonControl <= -5) 
		this._controlNumbers.setColor(255,155,75,250);
	else if(prisonControl < 0)
		this._controlNumbers.setColor(255,255,0,250);
	else if(prisonControl > 0)
		this._controlNumbers.setColor(100,255,25,250);
	this._controlNumbers.x = MAP_INFO_CONTROL_X;
	this._controlNumbers.y = MAP_INFO_CONTROL_Y + MAP_INFO_Y_CONSTANT;
	this._controlNumbers.setNumber(Math.abs(prisonControl));
	this.addChild(this._controlNumbers);
	
	//Fatigue
	var fatigueLevel = Karryn.getFatigueLevel();
	this._fatigueNumbers = new Sprite_RemNumber(MAP_INFO_STAT_NUMBERS);
	if(fatigueLevel >= 4) 
		this._fatigueNumbers.setColor(255,55,15,250);
	else if(fatigueLevel === 3) 
		this._fatigueNumbers.setColor(255,75,85,250);
	else if(fatigueLevel > 0)
		this._fatigueNumbers.setColor(255,155,75,250);
	this._fatigueNumbers.x = MAP_INFO_FATIGUE_X;
	this._fatigueNumbers.y = MAP_INFO_FATIGUE_Y + MAP_INFO_Y_CONSTANT;
	this._fatigueNumbers.setNumber(Karryn.fatigue);
	this.addChild(this._fatigueNumbers);
	
	//Pleasure
	var pleasurePercent = Karryn.currentPercentOfOrgasm();
	this._pleasureNumbers = new Sprite_RemNumber(MAP_INFO_STAT_NUMBERS);
	if(Karryn.isAroused()) {
		if(pleasurePercent > 75)
			this._pleasureNumbers.setColor(244,66,226,250);
		else
			this._pleasureNumbers.setColor(244,66,226,150);
	}
	this._pleasureNumbers.x = MAP_INFO_PLEASURE_X;
	this._pleasureNumbers.y = MAP_INFO_PLEASURE_Y + MAP_INFO_Y_CONSTANT;
	this._pleasureNumbers.setNumber(pleasurePercent);
	this.addChild(this._pleasureNumbers);
	*/
	
	//Numbers
	this.contents.fontSize = MAP_INFO_CONTROL_SYMBOL_FONT_SIZE;
	//this.contents.fontSize = MAP_INFO_CONTROL_SYMBOL_FONT_SIZE;
	
	let prisonOrder = Prison.order;
	let orderX = MAP_INFO_BOTTOM_ORDER_X;
	if(Prison.HighOrder()) {
		this.resetTextColor();
	}
	else if(Prison.MedOrder()) {
		this.changeTextColor(this.textColor(17));
	}
	else if(Prison.LowOrder()) {
		this.changeTextColor(this.textColor(2));
	}
	else if(Prison.VeryLowOrder()) {
		this.changeTextColor(this.textColor(10));
	}
	else if(Prison.NearNoOrder()) {
		this.changeTextColor(this.textColor(30));
	}
	
	if(prisonOrder <= 9) orderX += 10;
	else if(prisonOrder <= 99) orderX += 5;
	this.drawText(prisonOrder, orderX, MAP_INFO_BOTTOM_NUMBER_Y + MAP_INFO_Y_CONSTANT, 100);
	
	let prisonControl = Prison.orderChange;
	let controlX = MAP_INFO_CONTROL_ORDER_X;
	if(prisonControl < 0) {
		if(prisonControl <= -100) controlX -= 10;
		else if(prisonControl <= -10) controlX -= 5;
		
		if(prisonControl <= -10) 
			this.changeTextColor(this.textColor(18));
		else if(prisonControl <= -5) 
			this.changeTextColor(this.textColor(2));
		else 
			this.changeTextColor(this.textColor(3));
		this.drawText("-" + Math.abs(prisonControl), controlX, MAP_INFO_BOTTOM_NUMBER_Y + MAP_INFO_Y_CONSTANT, 100);
	}
	else if(prisonControl > 0) {
		if(prisonControl >= 100) controlX -= 10;
		else if(prisonControl >= 10) controlX -= 5;

		this.changeTextColor(this.textColor(11));
		this.drawText("+" + Math.abs(prisonControl), controlX, MAP_INFO_BOTTOM_NUMBER_Y + MAP_INFO_Y_CONSTANT, 100);
	}
	else {
		controlX += 8;
		this.drawText(Math.abs(prisonControl), controlX, MAP_INFO_BOTTOM_NUMBER_Y + MAP_INFO_Y_CONSTANT, 100);
	}
	
	//this.contents.fontSize = MAP_INFO_SYMBOL_PERCENT_FONT_SIZE;
	
	let fatigueLevel = Karryn.getFatigueLevel();
	let fatigueX = MAP_INFO_FATIGUE_ORDER_X;
	if(fatigueLevel >= 4) 
		this.changeTextColor(this.textColor(18));
	else if(fatigueLevel === 3) 
		this.changeTextColor(this.textColor(10));
	else if(fatigueLevel > 0)
		this.changeTextColor(this.textColor(2));
	else 
		this.resetTextColor();
	
	if(Karryn.fatigue >= 100) fatigueX -= 10;
	else if(Karryn.fatigue >= 10) fatigueX -= 5;
	this.drawText("" + Karryn.fatigue + "%", fatigueX, MAP_INFO_BOTTOM_NUMBER_Y + MAP_INFO_Y_CONSTANT, 100);
	
	let pleasurePercent = Karryn.currentPercentOfOrgasm();
	let pleasureX = MAP_INFO_PLEASURE_ORDER_X;
	if(Karryn.isAroused()) {
		if(pleasurePercent > 75)
			this.changeTextColor(this.textColor(5));
		else
			this.changeTextColor(this.textColor(27));
	}
	else 
		this.resetTextColor();
	if(pleasurePercent >= 1000) pleasureX -= 15;
	else if(pleasurePercent >= 100) pleasureX -= 10;
	else if(pleasurePercent >= 10) pleasureX -= 5;
	this.drawText("" + pleasurePercent + "%", pleasureX, MAP_INFO_PLEASURE_PERCENT_Y + MAP_INFO_Y_CONSTANT, 100);
	
	$gameScreen._mapInfoRefreshNeeded = false;
};

Window_MapInfo.prototype.drawPrisonLevels = function() {
	let x = this.textPadding();
    let width = MAP_INFO_LEVEL_WIDTH;
	this.contents.fontSize = MAP_INFO_LEVEL_FONT_SIZE;
	
	if(Prison.prisonLevelOneIsRioting())
		this.changeTextColor(this.textColor(18));
	else if(Prison.prisonLevelOneIsUnknown())
		this.changeTextColor(this.textColor(7));
	else if(Prison.prisonLevelOneIsSubjugated())
		this.changeTextColor(this.textColor(29));
	else
		this.resetTextColor();
	
	let levelOneText = Prison.prisonLevelOneStatusText();
	this.drawText(levelOneText, MAP_INFO_LEVEL_1_X, MAP_INFO_LEVEL_1_Y + MAP_INFO_Y_CONSTANT, width);
	
	if(Prison.prisonLevelTwoIsRioting())
		this.changeTextColor(this.textColor(18));
	else if(Prison.prisonLevelTwoIsUnknown())
		this.changeTextColor(this.textColor(7));
	else if(Prison.prisonLevelTwoIsSubjugated())
		this.changeTextColor(this.textColor(29));
	else
		this.resetTextColor();
	
	let levelTwoText = Prison.prisonLevelTwoStatusText();
	this.drawText(levelTwoText, MAP_INFO_LEVEL_2_X, MAP_INFO_LEVEL_2_Y + MAP_INFO_Y_CONSTANT, width);

	if(Prison.prisonLevelThreeIsRioting())
		this.changeTextColor(this.textColor(18));
	else if(Prison.prisonLevelThreeIsUnknown())
		this.changeTextColor(this.textColor(7));
	else if(Prison.prisonLevelThreeIsSubjugated())
		this.changeTextColor(this.textColor(29));
	else
		this.resetTextColor();
	
	let levelThreeText = Prison.prisonLevelThreeStatusText();
	this.drawText(levelThreeText, MAP_INFO_LEVEL_3_X, MAP_INFO_LEVEL_3_Y + MAP_INFO_Y_CONSTANT, width);

	if(Prison.prisonLevelFourIsRioting())
		this.changeTextColor(this.textColor(18));
	else if(Prison.prisonLevelFourIsUnknown())
		this.changeTextColor(this.textColor(7));
	else if(Prison.prisonLevelFourIsSubjugated())
		this.changeTextColor(this.textColor(29));
	else
		this.resetTextColor();
	
	
	let levelFourText = Prison.prisonLevelFourStatusText();
	this.drawText(levelFourText, MAP_INFO_LEVEL_4_X, MAP_INFO_LEVEL_4_Y + MAP_INFO_Y_CONSTANT, width);
	
	if(Prison.prisonLevelFiveIsRioting())
		this.changeTextColor(this.textColor(18));
	else if(Prison.prisonLevelFiveIsUnknown())
		this.changeTextColor(this.textColor(7));
	else if(Prison.prisonLevelFiveIsSubjugated())
		this.changeTextColor(this.textColor(29));
	else
		this.resetTextColor();
	
	let levelFiveText = Prison.prisonLevelFiveStatusText();
	this.drawText(levelFiveText, MAP_INFO_LEVEL_5_X, MAP_INFO_LEVEL_5_Y + MAP_INFO_Y_CONSTANT, width);

};

Window_MapInfo.prototype.drawMapName = function() {
	let width = MAP_INFO_MAP_NAME_WIDTH;
	this.contents.fontSize = MAP_INFO_MAP_NAME_FONT_SIZE;
	let x = MAP_INFO_MAP_NAME_X;
	let y = MAP_INFO_MAP_NAME_Y + MAP_INFO_Y_CONSTANT;
	
	let mapNameText = '' + Prison.getCurrentPrisonLevelName();
	let mapNameArray = DataManager.getMapLocationDisplayNameRem();
	
	if(TextManager.isEnglish) mapNameText += mapNameArray[RemLanguageEN];
	else if(TextManager.isJapanese) mapNameText += mapNameArray[RemLanguageJP];
	else if(TextManager.isSChinese) mapNameText += mapNameArray[RemLanguageSCH];
	else if(TextManager.isTChinese) mapNameText += mapNameArray[RemLanguageTCH];
	else if(TextManager.isKorean) mapNameText += mapNameArray[RemLanguageKR];
    this.drawText(mapNameText, x, y, width, 'center');
};

//////////
// Window Message
/////////////////

Window_Message.prototype.windowWidth = function() {
	if($gameScreen.isChatMode()) return MAP_CHAT_TEXT_WINDOW_WIDTH;
    else return $gameSystem.messageWidth();
};

Remtairy.Map.Window_Message_adjustWindowSettings = Window_Message.prototype.adjustWindowSettings;
Window_Message.prototype.adjustWindowSettings = function() {
	if($gameScreen.isChatMode()) {
		this.x = MAP_CHAT_TEXT_WINDOW_X;
		this.y = MAP_CHAT_TEXT_WINDOW_Y;
		this.width = this.windowWidth();
		this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
		if (Math.abs(Graphics.boxHeight - this.height) < this.lineHeight()) {
			this.height = Graphics.boxHeight;
		}
		this.createContents();
	}
	else
		Remtairy.Map.Window_Message_adjustWindowSettings.call(this);
};

//Moved to YEP_MessageCore
/*
Window_Message.prototype.startMessage = function() {
	this._nameWindow.deactivate();
    this._textState = {};
    this._textState.index = 0;
    this._textState.text = this.convertEscapeCharacters($gameMessage.allText());
    this.newPage(this._textState);
    this.updatePlacement();
    this.updateBackground();
	if(this._positionType === 2 && this._background === 1) {
		this._textState.y = MAP_CHAT_TEXT_TRANSPARENT_WINDOW_HEIGHT_PADDING;
	}
    this.open();
};*/


//////////
// Window EventMiniLabel
/////////////////

Remtairy.Map.Window_EventMiniLabel_showMiniLabel = Window_EventMiniLabel.prototype.showMiniLabel;
Window_EventMiniLabel.prototype.showMiniLabel = function() {
    if($gameScreen.isChatMode() || $gameScreen.isCinematicMode()) return false;
    return Remtairy.Map.Window_EventMiniLabel_showMiniLabel.call(this);
};