var Remtairy = Remtairy || {};
Remtairy.KarrynPassives = Remtairy.KarrynPassives || {};

//=============================================================================
 /*:
 * @plugindesc Karryn Passives
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const PASSIVES_TITLE_CENTER_ID = 112; //unused
const PASSIVES_TITLE_LEFT_ID = 111; //unused
const PASSIVES_TITLE_RIGHT_ID = 113; //unused

const PASSIVES_LIST_START_ID = 114;
const PASSIVES_LIST_END_ID = 299;
const PASSIVES_LIST_TWO_START_ID = 701;
const PASSIVES_LIST_TWO_END_ID = 977;

const PASSIVES_LIST_CC1_START_ID = 980;
const PASSIVES_LIST_CC1_END_ID = 986;
const PASSIVES_LIST_CC2_START_ID = 990;
const PASSIVES_LIST_CC2_END_ID = 997;

const PASSIVE_CATEGORY_ALL = 0;
const PASSIVE_CATEGORY_MOUTH_DESIRE = 1;
const PASSIVE_CATEGORY_MOUTH = 2;
const PASSIVE_CATEGORY_KISS = 3;
const PASSIVE_CATEGORY_BLOWJOB = 4;
const PASSIVE_CATEGORY_BOOBS_DESIRE = 5;
const PASSIVE_CATEGORY_BOOBS = 6;
const PASSIVE_CATEGORY_NIPPLES = 7;
const PASSIVE_CATEGORY_TITTY_FUCK = 8;
const PASSIVE_CATEGORY_PUSSY_DESIRE = 9;
const PASSIVE_CATEGORY_CLIT = 10;
const PASSIVE_CATEGORY_PUSSY = 11;
const PASSIVE_CATEGORY_WET = 12;
const PASSIVE_CATEGORY_CUNNINLINGUS = 13;
const PASSIVE_CATEGORY_VAGINAL_SEX = 14;
const PASSIVE_CATEGORY_BUTT_DESIRE = 15;
const PASSIVE_CATEGORY_BUTT = 16;
const PASSIVE_CATEGORY_ANAL = 17;
const PASSIVE_CATEGORY_ANAL_SEX = 18;
const PASSIVE_CATEGORY_COCK_DESIRE = 19;
const PASSIVE_CATEGORY_WORSHIP = 20;
const PASSIVE_CATEGORY_HANDJOB = 21;
const PASSIVE_CATEGORY_BUKKAKE = 22;
const PASSIVE_CATEGORY_SWALLOW = 23;
const PASSIVE_CATEGORY_CREAMPIE = 24;
const PASSIVE_CATEGORY_RELATIONS = 25;
const PASSIVE_CATEGORY_SADISM = 26;
const PASSIVE_CATEGORY_STATUS = 27;
const PASSIVE_CATEGORY_SKILLS = 28;
const PASSIVE_CATEGORY_RESIST = 29;
const PASSIVE_CATEGORY_FOOTJOB = 30;
const PASSIVE_CATEGORY_DOMINANCE = 31;
const PASSIVE_CATEGORY_MASOCHISM = 32;
const PASSIVE_CATEGORY_TALK = 33;
const PASSIVE_CATEGORY_DEBUFFS = 34;
const PASSIVE_CATEGORY_RIMJOB = 35;
const PASSIVE_CATEGORY_FETISHISM = 36;
const PASSIVE_CATEGORY_SUBMISSION = 37;
const PASSIVE_CATEGORY_MASTURBATION = 38;
const PASSIVE_CATEGORY_URGES = 39;
const PASSIVE_CATEGORY_SLEEP = 40;
const PASSIVE_CATEGORY_TOYS = 41;
const PASSIVE_CATEGORY_ORGASM = 42;
const PASSIVE_CATEGORY_EXHIBITIONISM = 43;
const PASSIVE_CATEGORY_SIGHT = 44;
const PASSIVE_CATEGORY_CLOTHES = 45;
const PASSIVE_CATEGORY_NUDITY = 46;
const PASSIVE_CATEGORY_ACTIVITIES = 47;


const PASSIVE_HELP_FONT_SIZE = 23;

//パッシブの名前のリスト
const PASSIVE_NAME_LIST_NAME_FONT_SIZE = 25;
const PASSIVE_NAME_LIST_DATE_FONT_SIZE = 17;
const PASSIVE_NAME_LIST_LINEHEIGHT = 35;
//パッシブのタイプのリスト
const PASSIVE_TYPE_LIST_FONT_SIZE = 25;
const PASSIVE_TYPE_LIST_LINEHEIGHT = 35;
const PASSIVE_TYPE_LIST_PADDING_Y = -6;

const PASSIVE_TYPE_LIST_ICON_SCALE = 0.95;
const PASSIVE_TYPE_LIST_ICON_X = 3;
const PASSIVE_TYPE_LIST_ICON_Y = 1;


/////////////
// Scene Skill
//////////////////

Scene_Skill.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help_Passive();
    this.addWindow(this._helpWindow);
};

Scene_Skill.prototype.buildActorPassiveCategoryArray = function() {
	let actor = this.actor();
	actor.buildPassiveCategoryArray();
};

Scene_Skill.prototype.createSkillTypeWindow = function() {
	this.buildActorPassiveCategoryArray();
    var wy = this._helpWindow.height;
    this._skillTypeWindow = new Window_SkillType(0, wy);
	this._skillTypeWindow.height = Graphics.boxHeight - wy;
	this._skillTypeWindow._disableBackAndFrame = true;
	this._skillTypeWindow._refreshAllParts();
    this._skillTypeWindow.setHelpWindow(this._helpWindow);
    this._skillTypeWindow.setHandler('skill',    this.commandSkill.bind(this));
    this._skillTypeWindow.setHandler('cancel',   this.popScene.bind(this));
    this._skillTypeWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._skillTypeWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._skillTypeWindow);
};

Scene_Skill.prototype.createItemWindow = function() {
    var wx = this._skillTypeWindow.width;
	var wy = this._helpWindow.height;
	//var wy = this._skillTypeWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_SkillList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
	//this._helpWindow.windowskin = ImageManager.loadSystem('Window_2');
	this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);
	this._itemWindow._disableBackAndFrame = true;
	this._itemWindow._refreshAllParts();
	this._helpWindow._disableBackAndFrame = true;
	this._helpWindow._refreshAllParts();
    this.addWindow(this._itemWindow);
	this._statusWindow.hide();
	this._statusWindow.deactivate();
};

////////////
// Window Help Passive
/////////////////

function Window_Help_Passive() {
    this.initialize.apply(this, arguments);
}

Window_Help_Passive.prototype = Object.create(Window_Help.prototype);
Window_Help_Passive.prototype.constructor = Window_Help_Passive;

Window_Help_Passive.prototype.initialize = function() {
    Window_Help.prototype.initialize.call(this, 2.6);
};

Window_Help_Passive.prototype.standardFontSize = function() {
    return PASSIVE_HELP_FONT_SIZE;
};

/////////////
// Window SkillList
//////////////////

Window_SkillList.prototype.standardFontSize = function() {
	return PASSIVE_NAME_LIST_NAME_FONT_SIZE;
};

Window_SkillList.prototype.lineHeight = function() {
	return PASSIVE_NAME_LIST_LINEHEIGHT;
};

Remtairy.KarrynPassives.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
Window_SkillList.prototype.makeItemList = function() {
    if (this._actor) {
		if($gameParty.inBattle()) {
			Remtairy.KarrynPassives.Window_SkillList_makeItemList.call(this);
		}
		else { //Passives
			this._data = [];
			let actor = this._actor;		
			
			if(ConfigManager.sortPassivesAscending) {
				for(let i = 0; i < actor._passivesObtainedOn_keyDate_valueSkillID.length; ++i) {
					if(!actor._passivesObtainedOn_keyDate_valueSkillID[i]) continue;
					for(let j = 0; j < actor._passivesObtainedOn_keyDate_valueSkillID[i].length; ++j) {
						let passiveSkillId = this._actor._passivesObtainedOn_keyDate_valueSkillID[i][j];
						if(passiveSkillId && passiveSkillId > 0) {
							if(actor._passiveCategory[this._stypeId].includes(passiveSkillId)) {
								this._data.push($dataSkills[passiveSkillId]);
							}
						}
					}
				}
			}
			else {
				for(let i = actor._passivesObtainedOn_keyDate_valueSkillID.length - 1; i >= 0; --i) {
					if(!actor._passivesObtainedOn_keyDate_valueSkillID[i]) continue;
					for(let j = 0; j < actor._passivesObtainedOn_keyDate_valueSkillID[i].length; ++j) {
						let passiveSkillId = this._actor._passivesObtainedOn_keyDate_valueSkillID[i][j];
						if(passiveSkillId && passiveSkillId > 0) {
							if(actor._passiveCategory[this._stypeId].includes(passiveSkillId)) {
								this._data.push($dataSkills[passiveSkillId]);
							}
						}
					}
				}
			}
		
		}
    } else {
        this._data = [];
    }
};

Window_SkillList.prototype.drawItem = function(index) {
    let skill = this._data[index];
    if(skill) {
        let costWidth = this.costWidth();
        let rect = this.itemRect(index);
        rect.width -= this.textPadding();
		
		this.drawItemName(skill, rect.x, rect.y, rect.width);
    }
};

Window_SkillList.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
		let iconBoxWidth = this.lineHeight();
		let name = item.name;
		if(TextManager.isJapanese && item.hasRemNameJP) name = item.remNameJP;
		else if(TextManager.isEnglish && item.hasRemNameEN) name = item.remNameEN;
		else if(TextManager.isTChinese && item.hasRemNameTCH) name = item.remNameTCH;
		else if(TextManager.isSChinese && item.hasRemNameSCH) name = item.remNameSCH;
		else if(TextManager.isKorean && item.hasRemNameKR) name = item.remNameKR;
		
		//Passive list
	
		let textColor = item.passiveColor;
		this.changeTextColor(this.textColor(textColor));
		this.drawText(name, x, y, width * 0.75, 'center');
		
		this.contents.fontSize = PASSIVE_NAME_LIST_DATE_FONT_SIZE;
		this.changeTextColor(this.textColor(8));
		let obtainedText = TextManager.PassiveObtainedOn;
		//console.log(item.id);

		this.drawText(obtainedText.format(this._actor._passivesObtainedOn_keySkillID_valueDate[item.id]), x + width * 0.77, y, width * 0.25, 'left');
		
		this.contents.fontSize = PASSIVE_NAME_LIST_NAME_FONT_SIZE;
		this.resetTextColor();
    }
};

//Only affects Passives?
Window_SkillList.prototype.maxCols = function() {
    return 1;
};

//unused as of now
Window_SkillList.prototype.createGalvCursor = function() {
	if(!Imported.Galv_CursorImage) return;
	if($gameParty.inBattle()) {
		this._galvCursor = new Sprite_GalvCursor();
		this._galvCursor.setup(this);
		this.addChild(this._galvCursor);
	}
};

Window_SkillList.prototype.setStypeId = function(stypeId) {
    if (this._stypeId !== stypeId) {
        this._stypeId = stypeId;
        this.refresh();
        this.resetScroll();
		this.createGalvCursor();
    }
};

/////////////
// Window SkillType
//////////////////

Window_SkillType.prototype.standardFontSize = function() {
	if($gameParty.inBattle())
		return Window_Base.prototype.standardFontSize.call(this);
	else
		return PASSIVE_TYPE_LIST_FONT_SIZE;
};

Window_SkillType.prototype.lineHeight = function() {
	if($gameParty.inBattle())
		return Window_Base.prototype.lineHeight.call(this);
	else
		return PASSIVE_TYPE_LIST_LINEHEIGHT;
};

Window_SkillType.prototype.processDrawIcon = function(iconIndex, textState, scale) {
	let paddingX = 2;
	let paddingY = 2;
	if(!scale) scale = 1;
	
	if(!$gameParty.inBattle()) {
		paddingX = PASSIVE_TYPE_LIST_ICON_X;
		paddingY = PASSIVE_TYPE_LIST_ICON_Y;
		scale = PASSIVE_TYPE_LIST_ICON_SCALE;
	}
	
	this.drawIcon(iconIndex, textState.x + paddingX, textState.y + paddingY, scale);
    textState.x += Window_Base._iconWidth + REM_X_ICON_PADDING;
};



Window_SkillType.prototype.makeCommandList = function() {
	/*
    if (this._actor) {
        let skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b){return a-b});
        skillTypes.forEach(function(stypeId) {
			if(stypeId == SKILLTYPE_PASSIVES_ID){
				let name = $dataSystem.skillTypes[stypeId];
				
				let remName = TextManager.skillTypes(stypeId);
				if(remName != false) name = remName;
				
				this.addCommand(name, 'skill', true, stypeId);
			}
        }, this);
    }*/
	if (this._actor) {
		for(let catNum = 0; catNum < this._actor._passiveCategory.length; ++catNum) {
			//console.log(this._actor._passiveCategory);
			let catLength = 0;
			if(this._actor._passiveCategory[catNum]) catLength = this._actor._passiveCategory[catNum].length;
			let catName = TextManager.passiveCategory(catNum) + ' (' + catLength + ')';
		
			if(catLength > 0) {
				this.addCommand(catName, 'skill', true, catNum);
			}
			
		}
	}
};

Window_SkillType.prototype.drawItem = function(index) {
    let rect = this.itemRectForText(index);
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
	let paddingY = 0;
	if(!$gameParty.inBattle())
		paddingY = PASSIVE_TYPE_LIST_PADDING_Y;
    this.drawTextEx(this.commandName(index), rect.x + 10, rect.y + paddingY, rect.width - 10);
};

Window_SkillType.prototype.windowWidth = function() {
    return 360;
};

Window_SkillType.prototype.standardFontFace = function() {
    if ($dataSystem.locale.match(/^zh/)) {
      return Yanfly.Param.MSGCNFontName;
    } else if ($dataSystem.locale.match(/^ko/)) {
      return Yanfly.Param.MSGKRFontName;
    } 
	else {
		return FONT_GAMEFONT_NAME;
    }
	
};

////////////
//////////////
// Game Actor
//////////////
////////////

//Setup Passives
Game_Actor.prototype.setupPassives = function() {
	//forget passives
	for(let i = PASSIVES_LIST_START_ID; i <= PASSIVES_LIST_END_ID; i++) {
		this.forgetSkill(i);
	}
	for(let i = PASSIVES_LIST_TWO_START_ID; i <= PASSIVES_LIST_TWO_END_ID; i++) {
		this.forgetSkill(i);
	}
	
	this.setupPassiveReqBaseArray();
	this.setupPassiveReqExtraArray();
	
	this._passivesObtainedOn_keySkillID_valueDate = [];
	this._passivesObtainedOn_keyDate_valueSkillID = [];
	
	//setup slut lvl
	this.setSlutLvl(0);
};

Game_Actor.prototype.setupPassiveReqBaseArray = function() {
	this._passiveRequirement_base = [];
	
	this._passiveRequirement_base[PASSIVE_SECRET_CURIOSITY_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_MOUTH_DESIRE_FIRST_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BOOBS_DESIRE_FIRST_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_PUSSY_DESIRE_FIRST_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BUTT_DESIRE_FIRST_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_COCK_DESIRE_FIRST_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_ALL_DESIRE_FIRST_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BUTT_DESIRE_SECOND_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_COCK_DESIRE_SECOND_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_ALL_DESIRE_SECOND_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_MOUTH_DESIRE_THREE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BOOBS_DESIRE_THREE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_PUSSY_DESIRE_THREE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BUTT_DESIRE_THREE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_COCK_DESIRE_THREE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_ALL_DESIRE_THREE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_MOUTH_DESIRE_FOUR_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BOOBS_DESIRE_FOUR_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_PUSSY_DESIRE_FOUR_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_BUTT_DESIRE_FOUR_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_COCK_DESIRE_FOUR_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MAX_ALL_DESIRE_FOUR_ID] = 1;
	
	this._passiveRequirement_base[PASSIVE_FIRST_KISS_ID] = 1;
	this._passiveRequirement_base[PASSIVE_KISS_COUNT_ONE_ID] = 25;
	this._passiveRequirement_base[PASSIVE_KISS_COUNT_TWO_ID] = 75;
	this._passiveRequirement_base[PASSIVE_KISS_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_KISS_PEOPLE_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_KISS_PEOPLE_THREE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_KISS_PEOPLE_FOUR_ID] = 100;
	this._passiveRequirement_base[PASSIVE_KISS_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_KISS_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_KISS_USAGE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_KISS_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_KISS_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_SUCKED_FINGERS_COUNT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SUCKED_FINGERS_COUNT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_SUCKED_FINGERS_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_SUCKED_FINGERS_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_SUCKED_FINGERS_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_SUCKED_FINGERS_PEOPLE_THREE_ID] = 60;
	
	this._passiveRequirement_base[PASSIVE_FIRST_BJ_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BJ_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_BJ_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_BJ_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_BJ_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_BJ_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_BJ_PEOPLE_FOUR_ID] = 60;
	this._passiveRequirement_base[PASSIVE_BJ_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_BJ_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_BJ_USAGE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_BJ_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BJ_ORGASM_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_MOUTH_PLEASURE_ONE_ID] = 2000;
	this._passiveRequirement_base[PASSIVE_MOUTH_PLEASURE_TWO_ID] = 20000;
	
	this._passiveRequirement_base[PASSIVE_FIRST_SWALLOW_ID] = 1;
	this._passiveRequirement_base[PASSIVE_SWALLOW_ML_ONE_ID] = 75;
	this._passiveRequirement_base[PASSIVE_SWALLOW_ML_TWO_ID] = 200;
	this._passiveRequirement_base[PASSIVE_SWALLOW_ML_THREE_ID] = 800;
	this._passiveRequirement_base[PASSIVE_SWALLOW_ML_FOUR_ID] = 4000;
	this._passiveRequirement_base[PASSIVE_MAX_SWALLOW_ML_ONE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_MAX_SWALLOW_ML_TWO_ID] = 150;
	this._passiveRequirement_base[PASSIVE_SWALLOW_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_SWALLOW_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_FIRST_EJACULATION_ID] = 1;
	this._passiveRequirement_base[PASSIVE_FLOOR_EJACULATION_COUNT_ONE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_FLOOR_EJACULATION_COUNT_TWO_ID] = 49;
	this._passiveRequirement_base[PASSIVE_FIRST_BUKKAKE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_COUNT_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_COUNT_THREE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_COUNT_FOUR_ID] = 100;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_COUNT_FIVE_ID] = 200;
	this._passiveRequirement_base[PASSIVE_FIRST_FACE_BUKKAKE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_FACE_BUKKAKE_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID] = 50;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_MAX_ML_ONE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_MAX_ML_TWO_ID] = 300;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BUKKAKE_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_FIRST_HJ_ID] = 1;
	this._passiveRequirement_base[PASSIVE_HJ_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_HJ_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_HJ_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_HJ_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_HJ_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_HJ_PEOPLE_FOUR_ID] = 60;
	this._passiveRequirement_base[PASSIVE_HJ_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_HJ_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_HJ_USAGE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_HJ_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_HJ_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_HJ_COUNT_THREE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_COCK_PETTING_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_COCK_PETTING_PEOPLE_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_COCK_PETTING_PEOPLE_THREE_ID] = 39;
	
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_ORGASM_DOUBLE_ID] = 2;
	this._passiveRequirement_base[PASSIVE_ORGASM_TRIPLE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_TWO_ID] = 6;
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_THREE_ID] = 17;
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_FOUR_ID] = 26;
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_FIVE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_SIX_ID] = 100;
	this._passiveRequirement_base[PASSIVE_ORGASM_COUNT_SEVEN_ID] = 220;
	this._passiveRequirement_base[PASSIVE_ORGASM_ML_ONE_ID] = 200;
	this._passiveRequirement_base[PASSIVE_ORGASM_ML_TWO_ID] = 3000;
	
	this._passiveRequirement_base[PASSIVE_PUSSY_JUICE_ML_ONE_ID] = 3000;
	this._passiveRequirement_base[PASSIVE_PUSSY_JUICE_ML_TWO_ID] = 30000;
	
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_COUNT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_COUNT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID] = 125;
	
	this._passiveRequirement_base[PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID] = 60;
	
	this._passiveRequirement_base[PASSIVE_FIRST_TITTYFUCK_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID] = 60;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_USAGE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TITTYFUCK_ORGASM_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_BOOBS_PLEASURE_ONE_ID] = 2000;
	this._passiveRequirement_base[PASSIVE_BOOBS_PLEASURE_TWO_ID] = 20000;
	
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_COUNT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_COUNT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID] = 125;
	
	this._passiveRequirement_base[PASSIVE_FIRST_CUNNILINGUS_ID] = 1;
	this._passiveRequirement_base[PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_CUNNILINGUS_PEOPLE_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_CUNNILINGUS_PEOPLE_THREE_ID] = 39;
	this._passiveRequirement_base[PASSIVE_CUNNILINGUS_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_CUNNILINGUS_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_COUNT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_COUNT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID] = 150;
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID] = 60;
	
	this._passiveRequirement_base[PASSIVE_FIRST_SEX_ID] = 1;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID] = 60;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_PEOPLE_FIVE_ID] = 80;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_USAGE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_USAGE_FOUR_ID] = 100;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_ORGASM_ONE_ID] = 4;
	this._passiveRequirement_base[PASSIVE_PUSSY_SEX_ORGASM_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_PUSSY_PLEASURE_ONE_ID] = 2000;
	this._passiveRequirement_base[PASSIVE_PUSSY_PLEASURE_TWO_ID] = 20000;
	
	this._passiveRequirement_base[PASSIVE_FIRST_PUSSY_CREAMPIE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID] = 75;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID] = 250;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID] = 750;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID] = 4000;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID] = 15000;
	this._passiveRequirement_base[PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_MAX_PUSSY_CREAMPIE_ML_TWO_ID] = 150;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_COUNT_TWO_ID] = 40;
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_COUNT_THREE_ID] = 80;
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID] = 125;
	
	this._passiveRequirement_base[PASSIVE_FIRST_BUTT_SPANKED_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID] = 39;
	this._passiveRequirement_base[PASSIVE_BUTT_SPANKED_PEOPLE_FOUR_ID] = 50;
	this._passiveRequirement_base[PASSIVE_SPANKING_ORGASM_ONE_ID] = 2;
	this._passiveRequirement_base[PASSIVE_SPANKING_ORGASM_TWO_ID] = 15;
	
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_COUNT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_COUNT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_COUNT_FOUR_ID] = 150;
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID] = 7;
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID] = 33;
	this._passiveRequirement_base[PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID] = 60;
	
	this._passiveRequirement_base[PASSIVE_FIRST_ANAL_SEX_ID] = 1;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID] = 60;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID] = 80;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_USAGE_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_USAGE_FOUR_ID] = 100;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_ORGASM_ONE_ID] = 4;
	this._passiveRequirement_base[PASSIVE_ANAL_SEX_ORGASM_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_ANAL_PLEASURE_ONE_ID] = 2000;
	this._passiveRequirement_base[PASSIVE_ANAL_PLEASURE_TWO_ID] = 20000;
	
	this._passiveRequirement_base[PASSIVE_FIRST_ANAL_CREAMPIE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ML_ONE_ID] = 75;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ML_TWO_ID] = 250;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ML_THREE_ID] = 750;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID] = 4000;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID] = 15000;
	this._passiveRequirement_base[PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_MAX_ANAL_CREAMPIE_ML_TWO_ID] = 150;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_PINK_ROTOR_INSERT_COUNT_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_PINK_ROTOR_INSERT_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_DILDO_INSERT_COUNT_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_DILDO_INSERT_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_TOYS_PLEASURE_ONE_ID] = 1250;
	this._passiveRequirement_base[PASSIVE_TOYS_PLEASURE_TWO_ID] = 12500;
	this._passiveRequirement_base[PASSIVE_TOYS_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TOYS_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_HORNY_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_HORNY_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_HORNY_COUNT_THREE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_HORNY_COUNT_FOUR_ID] = 75;
	
	this._passiveRequirement_base[PASSIVE_OFFBALANCE_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_OFFBALANCE_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_OFFBALANCE_COUNT_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_FALLEN_COUNT_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_FALLEN_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_FALLEN_COUNT_THREE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_DOWNSTAMINA_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_DOWNSTAMINA_COUNT_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_DOWNSTAMINA_COUNT_THREE_ID] = 40;
	
	this._passiveRequirement_base[PASSIVE_TALK_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_TALK_MOUTH_ONE_ID] = 12;
	this._passiveRequirement_base[PASSIVE_TALK_MOUTH_TWO_ID] = 38;
	this._passiveRequirement_base[PASSIVE_TALK_MOUTH_THREE_ID] = 70;
	this._passiveRequirement_base[PASSIVE_TALK_BOOBS_ONE_ID] = 12;
	this._passiveRequirement_base[PASSIVE_TALK_BOOBS_TWO_ID] = 38;
	this._passiveRequirement_base[PASSIVE_TALK_BOOBS_THREE_ID] = 70;
	this._passiveRequirement_base[PASSIVE_TALK_PUSSY_ONE_ID] = 12;
	this._passiveRequirement_base[PASSIVE_TALK_PUSSY_TWO_ID] = 38;
	this._passiveRequirement_base[PASSIVE_TALK_PUSSY_THREE_ID] = 70;
	this._passiveRequirement_base[PASSIVE_TALK_BUTT_ONE_ID] = 12;
	this._passiveRequirement_base[PASSIVE_TALK_BUTT_TWO_ID] = 38;
	this._passiveRequirement_base[PASSIVE_TALK_BUTT_THREE_ID] = 70;
	this._passiveRequirement_base[PASSIVE_TALK_COCK_ONE_ID] = 12;
	this._passiveRequirement_base[PASSIVE_TALK_COCK_TWO_ID] = 38;
	this._passiveRequirement_base[PASSIVE_TALK_COCK_THREE_ID] = 70;
	this._passiveRequirement_base[PASSIVE_TALK_PLEASURE_ONE_ID] = 1000;
	this._passiveRequirement_base[PASSIVE_TALK_PLEASURE_TWO_ID] = 10000;
	this._passiveRequirement_base[PASSIVE_TALK_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TALK_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_SIGHT_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_ORGASM_PEOPLE_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_ORGASM_PEOPLE_TWO_ID] = 40;
	this._passiveRequirement_base[PASSIVE_ORGASM_PEOPLE_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_ORGASM_PEOPLE_FOUR_ID] = 300;
	this._passiveRequirement_base[PASSIVE_SIGHT_MOUTH_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SIGHT_MOUTH_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_SIGHT_MOUTH_THREE_ID] = 73;
	this._passiveRequirement_base[PASSIVE_SIGHT_BOOBS_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SIGHT_BOOBS_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_SIGHT_BOOBS_THREE_ID] = 73;
	this._passiveRequirement_base[PASSIVE_SIGHT_PUSSY_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SIGHT_PUSSY_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_SIGHT_PUSSY_THREE_ID] = 73;
	this._passiveRequirement_base[PASSIVE_SIGHT_BUTT_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SIGHT_BUTT_TWO_ID] = 54;
	this._passiveRequirement_base[PASSIVE_SIGHT_BUTT_THREE_ID] = 73;
	this._passiveRequirement_base[PASSIVE_SIGHT_PLEASURE_ONE_ID] = 1000;
	this._passiveRequirement_base[PASSIVE_SIGHT_PLEASURE_TWO_ID] = 10000;
	this._passiveRequirement_base[PASSIVE_SIGHT_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_SIGHT_ORGASM_TWO_ID] = 10;
	
	this._passiveRequirement_base[PASSIVE_SEE_JERKOFF_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_SEE_JERKOFF_COUNT_TWO_ID] = 42;
	this._passiveRequirement_base[PASSIVE_SEE_JERKOFF_COUNT_THREE_ID] = 100;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_COUCH_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_COUCH_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_COUCH_COUNT_THREE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID] = 125;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_HALBERD_COUNT_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_HALBERD_COUNT_TWO_ID] = 12;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_HALBERD_COUNT_THREE_ID] = 35;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_MASTURBATE_ORGASM_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_MASTURBATE_ORGASM_TWO_ID] = 20;
	
	this._passiveRequirement_base[PASSIVE_TOILET_BATTLE_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TOILET_BATTLE_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_TOILET_BATTLE_COUNT_THREE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_TOILET_COCK_APPEARED_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_TOILET_COCK_APPEARED_COUNT_TWO_ID] = 50;
	this._passiveRequirement_base[PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_GLORY_HOLE_SEX_PEOPLE_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID] = 80;
	
	this._passiveRequirement_base[PASSIVE_KARRYN_STARE_COCK_ONE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_KARRYN_STARE_COCK_TWO_ID] = 5;
	this._passiveRequirement_base[PASSIVE_KARRYN_STARE_COCK_THREE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_KARRYN_STARE_COCK_FOUR_ID] = 30;
	
	this._passiveRequirement_base[PASSIVE_PETTING_ORGASM_ONE_ID] = 4;
	this._passiveRequirement_base[PASSIVE_PETTING_ORGASM_TWO_ID] = 30;
	
	this._passiveRequirement_base[PASSIVE_CLOTHES_STRIPPED_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_CLOTHES_STRIPPED_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_CLOTHES_STRIPPED_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_CLOTHES_STRIPPED_FOUR_ID] = 70;
	this._passiveRequirement_base[PASSIVE_PANTIES_STRIPPED_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_PANTIES_STRIPPED_TWO_ID] = 12;
	this._passiveRequirement_base[PASSIVE_PANTIES_STRIPPED_THREE_ID] = 35;
	
	this._passiveRequirement_base[PASSIVE_SUBDUED_COUNT_ONE_ID] = 25;
	this._passiveRequirement_base[PASSIVE_SUBDUED_COUNT_TWO_ID] = 75;
	this._passiveRequirement_base[PASSIVE_SUBDUED_COUNT_THREE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_COCKINESS_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_COCKINESS_COUNT_TWO_ID] = 300;
	this._passiveRequirement_base[PASSIVE_COCKINESS_COUNT_THREE_ID] = 1000;
	this._passiveRequirement_base[PASSIVE_COCKINESS_COUNT_FOUR_ID] = 3000;
	this._passiveRequirement_base[PASSIVE_TAUNT_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_TAUNT_COUNT_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_TAUNT_COUNT_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_FLAUNT_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_FLAUNT_COUNT_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_FLAUNT_COUNT_THREE_ID] = 60;
	this._passiveRequirement_base[PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SUBDUED_ERECT_COUNT_TWO_ID] = 70;
	this._passiveRequirement_base[PASSIVE_COCKKICK_COUNT_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_COCKKICK_COUNT_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_COCKKICK_COUNT_THREE_ID] = 65;
	
	this._passiveRequirement_base[PASSIVE_FOOTJOB_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_COUNT_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_FOOTJOB_USAGE_THREE_ID] = 60;
	
	this._passiveRequirement_base[PASSIVE_SADISM_PLEASURE_ONE_ID] = 2000;
	this._passiveRequirement_base[PASSIVE_SADISM_PLEASURE_TWO_ID] = 25000;
	this._passiveRequirement_base[PASSIVE_SADISM_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_SADISM_ORGASM_TWO_ID] = 8;
	this._passiveRequirement_base[PASSIVE_SADISM_ORGASM_THREE_ID] = 15;
	
	this._passiveRequirement_base[PASSIVE_DEFEATED_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_DEFEATED_COUNT_TWO_ID] = 7;
	this._passiveRequirement_base[PASSIVE_DEFEATED_COUNT_THREE_ID] = 14;
	this._passiveRequirement_base[PASSIVE_DEFEATED_COUNT_FOUR_ID] = 30;
	this._passiveRequirement_base[PASSIVE_DOGEZA_COUNT_ONE_ID] = 12;
	this._passiveRequirement_base[PASSIVE_DOGEZA_COUNT_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_DOGEZA_COUNT_THREE_ID] = 80;
	
	this._passiveRequirement_base[PASSIVE_RIMJOB_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_RIMJOB_COUNT_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_RIMJOB_PEOPLE_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_RIMJOB_PEOPLE_TWO_ID] = 25;
	this._passiveRequirement_base[PASSIVE_RIMJOB_PEOPLE_THREE_ID] = 34;
	this._passiveRequirement_base[PASSIVE_RIMJOB_USAGE_ONE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_RIMJOB_USAGE_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_RIMJOB_USAGE_THREE_ID] = 60;
	
	this._passiveRequirement_base[PASSIVE_MASOCHISM_PLEASURE_ONE_ID] = 2000;
	this._passiveRequirement_base[PASSIVE_MASOCHISM_PLEASURE_TWO_ID] = 25000;
	this._passiveRequirement_base[PASSIVE_MASOCHISM_ORGASM_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_MASOCHISM_ORGASM_TWO_ID] = 8;
	this._passiveRequirement_base[PASSIVE_MASOCHISM_ORGASM_THREE_ID] = 15;
	
	this._passiveRequirement_base[PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_BAR_WAITRESS_SEX_COUNT_THREE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_THREE_ID] = 20;
	this._passiveRequirement_base[PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID] = 30;
	this._passiveRequirement_base[PASSIVE_JOB_PETTING_COUNT_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_JOB_PETTING_COUNT_TWO_ID] = 35;
	this._passiveRequirement_base[PASSIVE_JOB_PETTING_COUNT_THREE_ID] = 70;
	
	this._passiveRequirement_base[PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID] = 10;
	this._passiveRequirement_base[PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_DOUBLE_PEN_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_DOUBLE_PEN_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_DOUBLE_PEN_COUNT_THREE_ID] = 50;
	this._passiveRequirement_base[PASSIVE_TRIPLE_PEN_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TRIPLE_PEN_COUNT_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_TRIPLE_PEN_COUNT_THREE_ID] = 50;
	
	this._passiveRequirement_base[PASSIVE_BLOWBANG_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_BLOWBANG_COUNT_TWO_ID] = 7;
	this._passiveRequirement_base[PASSIVE_BLOWBANG_COUNT_THREE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_URINAL_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_URINAL_COUNT_TWO_ID] = 7;
	this._passiveRequirement_base[PASSIVE_URINAL_COUNT_THREE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_TIED_SEX_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_TIED_SEX_COUNT_TWO_ID] = 7;
	this._passiveRequirement_base[PASSIVE_TIED_SEX_COUNT_THREE_ID] = 15;
	this._passiveRequirement_base[PASSIVE_PILLORY_SEX_COUNT_ONE_ID] = 1;
	this._passiveRequirement_base[PASSIVE_PILLORY_SEX_COUNT_TWO_ID] = 6;
	this._passiveRequirement_base[PASSIVE_PILLORY_SEX_COUNT_THREE_ID] = 14;
	
	this._passiveRequirement_base[PASSIVE_VIRGINS_TOTAL_ONE_ID] = 3;
	this._passiveRequirement_base[PASSIVE_VIRGINS_TOTAL_TWO_ID] = 7;
	this._passiveRequirement_base[PASSIVE_VIRGINS_TOTAL_THREE_ID] = 21;
	this._passiveRequirement_base[PASSIVE_VIRGINS_TOTAL_FOUR_ID] = 69;
	
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID] = 10;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID] = 20;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID] = 70;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID] = 200;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID] = 700;
	
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID] = 4;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID] = 11;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID] = 23;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID] = 5;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID] = 15;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID] = 30;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID] = 4;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_WEREWOLF_TWO_ID] = 11;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_WEREWOLF_THREE_ID] = 23;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID] = 4;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_YETI_TWO_ID] = 11;
	this._passiveRequirement_base[PASSIVE_SEXUAL_PARTNERS_YETI_THREE_ID] = 23;
	
};

Game_Actor.prototype.setupPassiveReqExtraArray = function() {
	this._passiveRequirement_extra = [];
	
	for(let i = 0; i < this._passiveRequirement_base.length; ++i) {
		//Exceptions to extra
		if(i === PASSIVE_ORGASM_DOUBLE_ID || i === PASSIVE_ORGASM_TRIPLE_ID) continue;
		
		if(this._passiveRequirement_base[i] && this._passiveRequirement_base[i] > 1) {
			this._passiveRequirement_extra[i] = Math.round(this._passiveRequirement_base[i] * Math.random() * 0.1);
		}
	}
};

Game_Actor.prototype.setupPassiveReqMultiArray = function() {
	this._passiveRequirement_multi = [];
	
	for(let i = 0; i < this._passiveRequirement_base.length; ++i) {
		if(this._passiveRequirement_base[i] && this._passiveRequirement_base[i] > 1) {
			this._passiveRequirement_multi[i] = 1;
		}
	}
	
	//body
	if(this.hasPassive(CHARA_CREATE_TWO_BOOBS_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_TWO_NIPPLES_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_TWO_CLIT_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_TWO_BUTT_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_TWO_ANAL_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_COUNT_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID) || this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		this._passiveRequirement_multi[PASSIVE_SUCKED_FINGERS_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUCKED_FINGERS_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUCKED_FINGERS_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUCKED_FINGERS_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUCKED_FINGERS_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUCKED_FINGERS_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_KISS_PEOPLE_ONE_ID] *= 0.9;
		this._passiveRequirement_multi[PASSIVE_KISS_PEOPLE_TWO_ID] *= 0.9;
		this._passiveRequirement_multi[PASSIVE_KISS_PEOPLE_THREE_ID] *= 0.9;
		this._passiveRequirement_multi[PASSIVE_KISS_PEOPLE_FOUR_ID] *= 0.9;
	}

	
	//desire
	if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID)) {
		this._passiveRequirement_multi[PASSIVE_BJ_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BJ_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BJ_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BJ_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BJ_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BJ_PEOPLE_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MOUTH_PLEASURE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MOUTH_PLEASURE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_MOUTH_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_MOUTH_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_MOUTH_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_MOUTH_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_MOUTH_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_MOUTH_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID)) {
		this._passiveRequirement_multi[PASSIVE_TITTYFUCK_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TITTYFUCK_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TITTYFUCK_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TITTYFUCK_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TITTYFUCK_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PLEASURE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BOOBS_PLEASURE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_BOOBS_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_BOOBS_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_BOOBS_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_BOOBS_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_BOOBS_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_BOOBS_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID)) {
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_SEX_PEOPLE_FIVE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PLEASURE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PUSSY_PLEASURE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_PUSSY_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_PUSSY_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_PUSSY_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_PUSSY_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_PUSSY_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_PUSSY_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID)) {
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PLEASURE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_ANAL_PLEASURE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_BUTT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_BUTT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TALK_BUTT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_BUTT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_BUTT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SIGHT_BUTT_THREE_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) {
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_COUCH_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_COUCH_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_HALBERD_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_HALBERD_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_HALBERD_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SEE_JERKOFF_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SEE_JERKOFF_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SEE_JERKOFF_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_CLIT_PETTED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_PINK_ROTOR_INSERT_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TOILET_COCK_APPEARED_COUNT_TWO_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) {
		this._passiveRequirement_multi[PASSIVE_SUBDUED_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUBDUED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUBDUED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SUBDUED_ERECT_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_COCKKICK_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_COCKKICK_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_COCKKICK_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_FOOTJOB_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_FOOTJOB_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_FOOTJOB_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_FOOTJOB_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SADISM_PLEASURE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_SADISM_PLEASURE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_FLOOR_EJACULATION_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_FLOOR_EJACULATION_COUNT_TWO_ID] *= 0.8;
	}
	if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) {
		this._passiveRequirement_multi[PASSIVE_DEFEATED_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DEFEATED_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DEFEATED_COUNT_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DOGEZA_COUNT_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DOGEZA_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DOGEZA_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_RIMJOB_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_RIMJOB_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_RIMJOB_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_RIMJOB_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASOCHISM_PLEASURE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_MASOCHISM_PLEASURE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BLOWBANG_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BLOWBANG_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_URINAL_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_URINAL_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TIED_SEX_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_TIED_SEX_COUNT_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_SPANKED_PEOPLE_FOUR_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DOWNSTAMINA_COUNT_TWO_ID] *= 0.8;
		this._passiveRequirement_multi[PASSIVE_DOWNSTAMINA_COUNT_THREE_ID] *= 0.8;
	}
};

Game_Actor.prototype.meetsPassiveReq = function(skillId, value) {
	if(this.hasPassive(skillId)) return false;
	if(!value) value = 0;
	if(!this._passiveRequirement_base[skillId]) {
		console.log('note: getPassiveReq base for ' + skillId + ' is returning 0');
		return value > 0;
	}
	if(this._passiveRequirement_base[skillId] === 1) return value >= 1;
	
	if(!this._passiveRequirement_extra[skillId]) this._passiveRequirement_extra[skillId] = 0;
	if(!this._passiveRequirement_multi[skillId]) this._passiveRequirement_multi[skillId] = 1;
	
	let multi = this._passiveRequirement_multi[skillId];
	multi *= this.titlesPassiveRequirementRate(skillId);
	
	let req = this._passiveRequirement_base[skillId] * multi;
	req += this._passiveRequirement_extra[skillId];
	
	return value >= req;
};

Game_Actor.prototype.addToPassiveReqExtra = function(skillId, value) {
	if(!this._passiveRequirement_extra[skillId]) this._passiveRequirement_extra[skillId] = 0;
	this._passiveRequirement_extra[skillId] += value;
};

//Learn New Passive
Game_Actor.prototype.learnNewPassive = function(skillId) {
	if(this.hasPassive(skillId)) return;
	console.log('learn new passive ' + skillId); //debugging
	this.learnSkill(skillId);
	this._newPassivesUnlocked.push(skillId);
	this.setDateForPassiveJustObtained(skillId);
	this.increaseSlutLvl();
};

Game_Actor.prototype.setDateForPassiveJustObtained = function(skillId) {
	this._passivesObtainedOn_keySkillID_valueDate[skillId] = Prison.date;
	if(!this._passivesObtainedOn_keyDate_valueSkillID[Prison.date]) 
		this._passivesObtainedOn_keyDate_valueSkillID[Prison.date] = [];
	this._passivesObtainedOn_keyDate_valueSkillID[Prison.date].push(skillId);
};

//Forget Passive
Game_Actor.prototype.forgetPassive = function(skillId) {
	if(!this.hasPassive(skillId)) return;
	console.log('forgetting passive ' + skillId); //debugging
	this.forgetSkill(skillId);
	
	for(let i = 0; i < this._passivesObtainedOn_keyDate_valueSkillID.length; ++i) {
		if(!this._passivesObtainedOn_keyDate_valueSkillID[i]) continue;
		for(let j = 0; j < this._passivesObtainedOn_keyDate_valueSkillID[i].length; ++j) {
			let passiveSkillId = this._passivesObtainedOn_keyDate_valueSkillID[i][j];
			if(passiveSkillId === skillId) {
				this._passivesObtainedOn_keyDate_valueSkillID[i][j] = 0;
			}
		}
	}
	
	this.decreaseSlutLvl();
};

//Locked passives
Game_Actor.prototype.showEval_lockedPassive = function(skill) {
	let skillId = skill.id;
	return !this.hasPassive(skillId + 1);
};

Game_Actor.prototype.hasPassive = function(skillId) {
	return this.isLearnedSkill(skillId);
};

Game_Actor.prototype.setCharacterCreatorPassive = function(skillId) {
	this.learnSkill(skillId);
	this.setDateForPassiveJustObtained(skillId);
};

Game_Actor.prototype.relationsPassiveCount = function() {
	let count = 0;
	
	if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_VIRGINS_TOTAL_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_VIRGINS_TOTAL_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID)) count += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_TWO_ID)) count += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID)) count += 1;
	
	return count;
};

////////
// Slut level
/////////////

Game_Actor.prototype.setSlutLvl = function(lvl) {
	this._slutLvl = Math.max(0, lvl);
	$gameVariables.setValue(VARIABLE_SLUT_LVL_ID, this._slutLvl);
};
Game_Actor.prototype.increaseSlutLvl = function() {
	this.setSlutLvl(this.slutLvl + 1);
};
Game_Actor.prototype.decreaseSlutLvl = function() {
	this.setSlutLvl(this.slutLvl - 1);
};
Game_Actor.prototype.recalculateSlutLvl = function(lvl) {
	let level = 0;
	
	for(let i = PASSIVES_LIST_START_ID; i <= PASSIVES_LIST_END_ID; i++) {
		if(this.hasPassive(i)) level++;
	}
	for(let i = PASSIVES_LIST_TWO_START_ID; i <= PASSIVES_LIST_TWO_END_ID; i++) {
		if(this.hasPassive(i)) level++;
	}

	this.setSlutLvl(level);
};


Game_Actor.prototype.refreshSlutLvlStageVariables_Map = function() {
	$gameVariables.setValue(VARIABLE_SLUT_LVL_STAGE_ID, this.currentSlutLvlStage_Map());
};
Game_Actor.prototype.refreshSlutLvlStageVariables_General = function() {
	let stage = 0;
	let reactionScore = this.getReactionScore();
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		stage = 3;
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		stage = 2;
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
		stage = 1;
	}
	$gameVariables.setValue(VARIABLE_SLUT_LVL_STAGE_ID, stage);
};

Game_Actor.prototype.currentSlutLvlStage_Map = function() {
	let mapReactionScore = this.getMapReactionScore();
	if(mapReactionScore >= VAR_DEF_RS_LV3_REQ) {
		return 3;
	}
	else if(mapReactionScore >= VAR_DEF_RS_LV2_REQ) {
		return 2;
	}
	else if(mapReactionScore >= VAR_DEF_RS_LV1_REQ) {
		return 1;
	}
	else {
		return 0;
	}
};

////////
// Passive

Game_Actor.prototype.buildPassiveCategoryArray = function() {
	this._passiveCategory = [];
	this._passiveCategory[PASSIVE_CATEGORY_ALL] = [];
	this._passiveCategory[PASSIVE_CATEGORY_MOUTH_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_MOUTH] = [];
	this._passiveCategory[PASSIVE_CATEGORY_KISS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BLOWJOB] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BOOBS_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BOOBS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_NIPPLES] = [];
	this._passiveCategory[PASSIVE_CATEGORY_TITTY_FUCK] = [];
	this._passiveCategory[PASSIVE_CATEGORY_PUSSY_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_CLIT] = [];
	this._passiveCategory[PASSIVE_CATEGORY_PUSSY] = [];
	this._passiveCategory[PASSIVE_CATEGORY_WET] = [];
	this._passiveCategory[PASSIVE_CATEGORY_CUNNINLINGUS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_VAGINAL_SEX] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BUTT_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BUTT] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ANAL] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ANAL_SEX] = [];
	this._passiveCategory[PASSIVE_CATEGORY_COCK_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_WORSHIP] = [];
	this._passiveCategory[PASSIVE_CATEGORY_HANDJOB] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BUKKAKE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SWALLOW] = [];
	this._passiveCategory[PASSIVE_CATEGORY_CREAMPIE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_RELATIONS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SADISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_STATUS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SKILLS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_RESIST] = [];
	this._passiveCategory[PASSIVE_CATEGORY_FOOTJOB] = [];
	this._passiveCategory[PASSIVE_CATEGORY_DOMINANCE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_MASOCHISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_TALK] = [];
	this._passiveCategory[PASSIVE_CATEGORY_DEBUFFS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_RIMJOB] = [];
	this._passiveCategory[PASSIVE_CATEGORY_FETISHISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SUBMISSION] = [];
	this._passiveCategory[PASSIVE_CATEGORY_MASTURBATION] = [];
	this._passiveCategory[PASSIVE_CATEGORY_URGES] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SLEEP] = [];
	this._passiveCategory[PASSIVE_CATEGORY_TOYS] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ORGASM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_EXHIBITIONISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SIGHT] = [];
	this._passiveCategory[PASSIVE_CATEGORY_CLOTHES] = [];
	this._passiveCategory[PASSIVE_CATEGORY_NUDITY] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ACTIVITIES] = [];
	
	let passiveSkillsArray = [];
	passiveSkillsArray = this.skills().filter(function(item) {
			return item && item.stypeId === SKILLTYPE_PASSIVES_ID;
    }, this);
	
	for(let i = 0; i < passiveSkillsArray.length; ++i) {
		let skillId = passiveSkillsArray[i].id;
		let passiveCat = passiveSkillsArray[i].passiveCategory;
		this._passiveCategory[PASSIVE_CATEGORY_ALL].push(skillId);
		for(let c = 0; c < passiveCat.length; ++c) {
			//console.log(this._passiveCategory[passiveCat[c]])
			//console.log(passiveCat[c])
			//console.log(c)
			this._passiveCategory[passiveCat[c]].push(skillId);
		}
	}
	
};

///////
// Records
/////////

//Setup Records
Game_Actor.prototype.setupRecords = function() {
	this._firstKissWantedID = -1;
	this._firstKissDate = false;
	this._firstKissName = false;
	this._firstKissMapID = -1;
	this._firstKissWasPenis = false;
	this._firstKissWasAnus = false;
	this._firstKissWasVisitor = false;
	this._firstPussySexWantedID = -1;
	this._firstPussySexDate = false;
	this._firstPussySexName = false;
	this._firstPussySexMapID = -1;
	this._firstPussySexWasToy = false;
	this._firstPussySexWasToyWantedID = -1;
	this._firstPussySexWasToyDate = false;
	this._firstPussySexWasToyName = false;
	this._firstPussySexWasToyMapID = -1;
	this._firstAnalSexWantedID = -1;
	this._firstAnalSexDate = false;
	this._firstAnalSexName = false;
	this._firstAnalSexMapID = -1;
	this._firstAnalSexBeforePussySex = false;
	this._firstHandjobWantedID = -1;
	this._firstHandjobDate = false;
	this._firstHandjobName = false;
	this._firstHandjobMapID = -1;
	this._firstBlowjobWantedID = -1;
	this._firstBlowjobDate = false;
	this._firstBlowjobName = false;
	this._firstBlowjobMapID = -1;
	this._firstTittyFuckWantedID = -1;
	this._firstTittyFuckDate = false;
	this._firstTittyFuckName = false;
	this._firstTittyFuckMapID = -1;
	this._firstCunnilingusWantedID = -1;
	this._firstCunnilingusDate = false;
	this._firstCunnilingusName = false;
	this._firstCunnilingusMapID = -1;
	this._firstRimjobWantedID = -1;
	this._firstRimjobDate = false;
	this._firstRimjobName = false;
	this._firstRimjobMapID = -1;
	this._firstFootjobWantedID = -1;
	this._firstFootjobDate = false;
	this._firstFootjobName = false;
	this._firstFootjobMapID = -1;
	this._firstButtSpankedWantedID = -1;
	this._firstButtSpankedDate = false;
	this._firstButtSpankedName = false;
	this._firstButtSpankedMapID = -1;
	this._firstSwallowWantedID = -1;
	this._firstSwallowDate = false;
	this._firstSwallowName = false;
	this._firstSwallowMapID = -1;
	this._firstBukkakeWantedID = -1;
	this._firstBukkakeDate = false;
	this._firstBukkakeName = false;
	this._firstBukkakeMapID = -1;
	this._firstFaceBukkakeWantedID = -1;
	this._firstFaceBukkakeDate = false;
	this._firstFaceBukkakeName = false;
	this._firstFaceBukkakeMapID = -1;
	this._firstPussyCreampieWantedID = -1;
	this._firstPussyCreampieDate = false;
	this._firstPussyCreampieName = false;
	this._firstPussyCreampieMapID = -1;
	this._firstAnalCreampieWantedID = -1;
	this._firstAnalCreampieDate = false;
	this._firstAnalCreampieName = false;
	this._firstAnalCreampieMapID = -1;
	
	this._lastKissName = false;
	this._lastKissDate = false;
	this._lastKissMapID = -1;
	this._lastHandjobName = false;
	this._lastHandjobDate = false;
	this._lastHandjobMapID = -1;
	this._lastBlowjobName = false;
	this._lastBlowjobDate = false;
	this._lastBlowjobMapID = -1;
	this._lastTittyFuckName = false;
	this._lastTittyFuckDate = false;
	this._lastTittyFuckMapID = -1;
	this._lastCunnilingusName = false;
	this._lastCunnilingusDate = false;
	this._lastCunnilingusMapID = -1;
	this._lastRimjobName = false;
	this._lastRimjobDate = false;
	this._lastRimjobMapID = -1;
	this._lastFootjobName = false;
	this._lastFootjobDate = false;
	this._lastFootjobMapID = -1;
	this._lastButtSpankedName = false;
	this._lastButtSpankedDate = false;
	this._lastButtSpankedMapID = -1;
	this._lastPussySexName = false;
	this._lastPussySexDate = false;
	this._lastPussySexMapID = -1;
	this._lastAnalSexName = false;
	this._lastAnalSexDate = false;
	this._lastAnalSexMapID = -1;
	this._lastBukkakeName = false;
	this._lastBukkakeDate = false;
	this._lastBukkakeMapID = -1;
	this._lastFaceBukkakeName = false;
	this._lastFaceBukkakeDate = false;
	this._lastFaceBukkakeMapID = -1;
	this._lastSwallowName = false;
	this._lastSwallowDate = false;
	this._lastSwallowMapID = -1;
	this._lastPussyCreampieName = false;
	this._lastPussyCreampieDate = false;
	this._lastPussyCreampieMapID = -1;
	this._lastAnalCreampieName = false;
	this._lastAnalCreampieDate = false;
	this._lastAnalCreampieMapID = -1;
	
	this._firstOrgasmDate = false;
	this._lastOrgasmDate = false;
	this._firstMasturbateDate = false;
	this._lastMasturbateDate = false;
	
	this._recordEscaped = 0;
	this._recordDefeatedTotal = 0;
	
	this._recordDefeatedLevelOneCount = 0;
	this._recordDefeatedLevelTwoCount = 0;
	this._recordDefeatedLevelThreeCount = 0;
	this._recordDefeatedLevelFourCount = 0;
	this._recordDefeatedLevelFiveCount = 0;
	
	this._recordSubduedEnemiesWithAttack = 0;
	this._recordSubduedEnemiesSexually = 0;
	this._recordSubduedErectEnemiesWithAttack = 0;
	this._recordSubduedAngryEnemies = 0;
	this._recordSubduedMetalEnemies = 0;
	this._recordSubduedTotal = 0;
	
	this._recordMasturbatedOfficeCount = 0;
	this._recordMasturbatedGuardStationCount = 0;
	this._recordMasturbatedCouchTotalCount = 0; 
	this._recordMasturbatedGloryHoleCount = 0; 
	this._recordMasturbatedInBattleCount = 0; 
	this._recordMasturbatedUsingHalberdCount = 0; 
	this._recordMasturbatedInBattlePresencePeople = 0;
	
	this._recordMasturbatedTotalCount = 0; 
	
	this._recordInvasionOffice = 0;
	this._recordInvasionLevelOne = 0;
	this._recordInvasionLevelTwo = 0;
	this._recordInvasionLevelThree = 0;
	this._recordInvasionLevelFour = 0;
	this._recordInvasionLevelFive = 0;
	this._recordInvasionTotal = 0;
	
	this._recordFixClothesUsageCount = 0;
	this._recordCockKickUsageCount = 0;
	this._recordKissUsageCount = 0;
	this._recordCockStareUsageCount = 0;
	this._recordCockPetUsageCount = 0;
	this._recordHandjobUsageCount = 0;
	this._recordBlowjobUsageCount = 0;
	this._recordRimjobUsageCount = 0;
	this._recordFootjobUsageCount = 0;
	this._recordTittyFuckUsageCount = 0;
	this._recordPussySexUsageCount = 0;
	this._recordAnalSexUsageCount = 0;
	
	this._recordKissedCount = 0;
	this._recordHandjobCount = 0;
	this._recordBlowjobCount = 0;
	this._recordTittyFuckCount = 0;
	this._recordPussyFuckedCount = 0;
	this._recordAnalFuckedCount = 0;
	this._recordBoobsPettedCount = 0;
	this._recordNipplesPettedCount = 0;
	this._recordButtPettedCount = 0;
	this._recordAnalPettedCount = 0;
	this._recordClitPettedCount = 0;
	this._recordPussyPettedCount = 0;
	this._recordButtSpankedCount = 0;
	this._recordSeeJerkOffCount = 0;
	this._recordCunnilingusCount = 0;
	this._recordRimjobCount = 0;
	this._recordFootjobCount = 0;
	this._recordCockStaredCount = 0;
	this._recordCockPettedCount = 0;
	this._recordFingersSuckedCount = 0;
	
	this._recordBoobsPettedOnaniCount = 0;
	this._recordNipplesPettedOnaniCount = 0;
	this._recordButtPettedOnaniCount = 0;
	this._recordAnalPettedOnaniCount = 0;
	this._recordClitPettedOnaniCount = 0;
	this._recordPussyPettedOnaniCount = 0;
	this._recordFingersSuckedOnaniCount = 0;
	
	this._recordTalkedAtCount = 0;
	this._recordTalkedAtAboutMouthPostFirstDefeatCount = 0;
	this._recordTalkedAtAboutBoobsPostFirstDefeatCount = 0;
	this._recordTalkedAtAboutPussyPostFirstDefeatCount = 0;
	this._recordTalkedAtAboutButtPostFirstDefeatCount = 0;
	this._recordTalkedAtAboutCockPostFirstDefeatCount = 0;
	
	this._recordEnemySawCount = 0;
	this._recordEnemySawMouthPostFirstPublicOrgasmCount = 0;
	this._recordEnemySawBoobsPostFirstPublicOrgasmCount = 0;
	this._recordEnemySawPussyPostFirstPublicOrgasmCount = 0;
	this._recordEnemySawButtPostFirstPublicOrgasmCount = 0;

	this._recordTauntCount = 0;
	this._recordTauntPeople = 0;
	this._recordFlauntCount = 0;
	this._recordFlauntPeople = 0;
	this._recordDogezaCount = 0;
	this._recordDogezaPeople = 0;
	this._recordToysInsertedByPeople = 0;
	this._recordCockinessMaxedCount = 0;
	this._recordCockinessGainedValue = 0;
	
	this._recordHornyCount = 0;
	this._recordDebuffOffBalancedCount = 0;
	this._recordDebuffFallenCount = 0;
	this._recordDebuffDisarmedCount = 0;
	this._recordDebuffDownStaminaCount = 0;
	
	this._recordDebuffOffBalancedPostFirstDefeatCount = 0;
	this._recordDebuffFallenPostFirstDefeatCount = 0;
	this._recordDebuffDisarmedPostFirstDefeatCount = 0;
	this._recordDebuffDownStaminaPostFirstDefeatCount = 0;
	
	
	this._recordDoublePenetrationCount = 0;
	this._recordTriplePenetrationCount = 0;
	this._recordBlowbangCount = 0;
	this._recordUrinalCount = 0;
	this._recordSoloCellCount = 0;
	this._recordPilloryCount = 0;
	
	this._recordMouthPleasure = 0;
	this._recordBoobsPleasure = 0;
	this._recordNipplesPleasure = 0;
	this._recordPussyPleasure = 0;
	this._recordClitPleasure = 0;
	this._recordButtPleasure = 0;
	this._recordAnalPleasure = 0;
	this._recordFingersPleasure = 0;
	this._recordToysPleasure = 0;
	this._recordTalkPleasure = 0;
	this._recordSightPleasure = 0;
	this._recordBukkakePleasure = 0;
	this._recordSwallowPleasure = 0;
	this._recordPussyCreampiePleasure = 0;
	this._recordAnalCreampiePleasure = 0;
	this._recordMasochismPleasure = 0;
	this._recordSadismPleasure = 0;
	
	this._recordPussyDripTenthML = 0;
	this._recordOrgasmCount = 0;
	this._recordOrgasmML = 0;
	this._recordMaxConsecutiveOrgasmCount = 0;
	
	this._recordOrgasmFromKissCount = 0;
	this._recordOrgasmFromTalkCount = 0;
	this._recordOrgasmFromSightCount = 0;
	this._recordOrgasmFromPettingCount = 0;
	this._recordOrgasmFromCunnilingusCount = 0;
	this._recordOrgasmFromCockPettingCount = 0;
	this._recordOrgasmFromHandjobCount = 0;
	this._recordOrgasmFromBlowjobCount = 0;
	this._recordOrgasmFromTittyFuckCount = 0;
	this._recordOrgasmFromPussySexCount = 0;
	this._recordOrgasmFromAnalSexCount = 0;
	this._recordOrgasmFromCumSwallowCount = 0;
	this._recordOrgasmFromPussyCreampieCount = 0;
	this._recordOrgasmFromAnalCreampieCount = 0;
	this._recordOrgasmFromBukkakeCount = 0;
	this._recordOrgasmFromSpankingCount = 0;
	this._recordOrgasmFromMasochismCount = 0;
	this._recordOrgasmFromSadismCount = 0;
	this._recordOrgasmFromMasturbationCount = 0;
	this._recordOrgasmFromToysCount = 0;
	
	this._recordBukkakeFaceCount = 0;
	this._recordBukkakeArmsCount = 0;
	this._recordBukkakeBoobsCount = 0;
	this._recordBukkakeButtCount = 0;
	this._recordBukkakeLegsCount = 0;
	this._recordBukkakeTotalCount = 0;
	
	this._recordBukkakeFaceML = 0;
	this._recordBukkakeArmsML = 0;
	this._recordBukkakeLegsML = 0;
	this._recordBukkakeBoobsML = 0;
	this._recordBukkakeButtML = 0;
	this._recordBukkakeTotalML = 0;
	this._recordBukkakeTotalMaxML = 0;
	
	this._recordSwallowCount = 0;
	this._recordPussyCreampieCount = 0;
	this._recordAnalCreampieCount = 0;
	this._recordAllHolesCreamedCount = 0;
	
	this._recordSwallowML = 0;
	this._recordPussyCreampieML = 0;
	this._recordAnalCreampieML = 0;
	this._recordSwallowMaxML = 0;
	this._recordPussyCreampieMaxML = 0;
	this._recordAnalCreampieMaxML = 0;
	this._recordFloorEjaculationCount = 0;
	this._recordFloorEjaculationML = 0;
	this._recordTotalEjaculationCount = 0;
	this._recordTotalEjaculationML = 0;
	
	this._recordClothesStrippedCount = 0;
	this._recordPantiesStrippedCount = 0;
	this._recordClothesStrippedPostFirstPublicOrgasmCount = 0;
	this._recordPantiesStrippedPostFirstPublicOrgasmCount = 0;
	
	this._recordSexualPartnersThug = 0;
	this._recordSexualPartnersPrisoner = 0;
	this._recordSexualPartnersGuard = 0;
	this._recordSexualPartnersGoblin = 0;
	this._recordSexualPartnersNerd = 0;
	this._recordSexualPartnersRogue = 0;
	this._recordSexualPartnersSlime = 0;
	this._recordSexualPartnersLizardman = 0;
	this._recordSexualPartnersOrc = 0;
	this._recordSexualPartnersHomeless = 0;
	this._recordSexualPartnersWerewolf = 0;
	this._recordSexualPartnersYeti = 0;
	this._recordSexualPartnersVisitor = 0;
	this._recordSexualPartnersTotal = 0;
	this._recordMetalSexualPartnersCount = 0;
	this._recordPreLevelFourOldSexualPartners = 0;
	this._recordPostLevelThreeNewSexualPartners = 0;
	
	this._recordEnemyTypeSwallowPrisoner = 0;
	this._recordEnemyTypeSwallowGuard = 0;
	this._recordEnemyTypeSwallowThug = 0;
	this._recordEnemyTypeSwallowGoblin = 0;
	this._recordEnemyTypeSwallowNerd = 0;
	this._recordEnemyTypeSwallowRogue = 0;
	this._recordEnemyTypeSwallowSlime = 0;
	this._recordEnemyTypeSwallowLizardman = 0;
	this._recordEnemyTypeSwallowOrc = 0;
	this._recordEnemyTypeSwallowHomeless = 0;
	this._recordEnemyTypeSwallowWerewolf = 0;
	this._recordEnemyTypeSwallowYeti = 0;
	this._recordEnemyTypeSwallowTotal = 0;
	
	this._recordEnemyTypePussyCreampiePrisoner = 0;
	this._recordEnemyTypePussyCreampieGuard = 0;
	this._recordEnemyTypePussyCreampieThug = 0;
	this._recordEnemyTypePussyCreampieGoblin = 0;
	this._recordEnemyTypePussyCreampieNerd = 0;
	this._recordEnemyTypePussyCreampieRogue = 0;
	this._recordEnemyTypePussyCreampieSlime = 0;
	this._recordEnemyTypePussyCreampieLizardman = 0;
	this._recordEnemyTypePussyCreampieOrc = 0;
	this._recordEnemyTypePussyCreampieHomeless = 0;
	this._recordEnemyTypePussyCreampieWerewolf = 0;
	this._recordEnemyTypePussyCreampieYeti = 0;
	this._recordEnemyTypePussyCreampieTotal = 0;
	
	this._recordVirginitiesTakenTotal = 0;
	this._recordVirginitiesTakenViaPussy = 0;
	this._recordVirginitiesTakenViaAnal = 0;
	
	this._recordKissedPeople = 0;
	this._recordHandjobPeople = 0;
	this._recordBlowjobPeople = 0;
	this._recordTittyFuckPeople = 0;
	this._recordPussyFuckedPeople = 0;
	this._recordAnalFuckedPeople = 0;
	this._recordBukkakePeople = 0;
	this._recordFaceBukkakePeople = 0;
	this._recordSwallowPeople = 0;
	this._recordPussyCreampiePeople = 0;
	this._recordAnalCreampiePeople = 0;
	this._recordOrgasmPresencePeople = 0;
	this._recordCunnilingusPeople = 0;
	this._recordRimjobPeople = 0;
	this._recordFootjobPeople = 0;
	this._recordButtSpankedPeople = 0;
	this._recordCockPettedPeople = 0;
	this._recordCockStaredAtPeople = 0;
	this._recordFingersSuckedPeople = 0;
	this._recordBoobsPettedPeople = 0;
	this._recordNipplesPettedPeople = 0;
	this._recordClitPettedPeople = 0;
	this._recordPussyPettedPeople = 0;
	this._recordButtPettedPeople = 0;
	this._recordAnalPettedPeople = 0;
	
	this._recordTalkedAtPeople = 0;
	this._recordTalkedAtAboutMouthPeople = 0;
	this._recordTalkedAtAboutBoobsPeople = 0;
	this._recordTalkedAtAboutPussyPeople = 0;
	this._recordTalkedAtAboutButtPeople = 0;
	this._recordTalkedAtAboutCockPeople = 0;
	
	this._recordEnemySawPeople = 0;
	this._recordEnemySawMouthPeople = 0;
	this._recordEnemySawBoobsPeople = 0;
	this._recordEnemySawPussyPeople = 0;
	this._recordEnemySawButtPeople = 0;
	
	this._recordSeeJerkOffPeople = 0;
	
	this._recordMaxReached50MouthDesireCount = 0;
	this._recordMaxReached50BoobsDesireCount = 0;
	this._recordMaxReached50PussyDesireCount = 0;
	this._recordMaxReached50ButtDesireCount = 0;
	this._recordMaxReached50CockDesireCount = 0;
	this._recordMaxReached75MouthDesireCount = 0;
	this._recordMaxReached75BoobsDesireCount = 0;
	this._recordMaxReached75PussyDesireCount = 0;
	this._recordMaxReached75ButtDesireCount = 0;
	this._recordMaxReached75CockDesireCount = 0;
	this._recordMaxReached100MouthDesireCount = 0;
	this._recordMaxReached100BoobsDesireCount = 0;
	this._recordMaxReached100PussyDesireCount = 0;
	this._recordMaxReached100ButtDesireCount = 0;
	this._recordMaxReached100CockDesireCount = 0;
	this._recordMaxReached150MouthDesireCount = 0;
	this._recordMaxReached150BoobsDesireCount = 0;
	this._recordMaxReached150PussyDesireCount = 0;
	this._recordMaxReached150ButtDesireCount = 0;
	this._recordMaxReached150CockDesireCount = 0;
	this._recordMaxReached250TotalDesireCount = 0;
	this._recordMaxReached375TotalDesireCount = 0;
	this._recordMaxReached500TotalDesireCount = 0;
	this._recordMaxReached750TotalDesireCount = 0;
	
	this._recordManuallyRemovedToysTotalCount = 0;
	this._recordManuallyRemovedClitToyCount = 0;
	this._recordManuallyRemovedPussyToyCount = 0;
	this._recordManuallyRemovedAnalToyCount = 0;
	
	this._recordTotalToysInsertedCount = 0;
	this._recordClitToyInsertedCount = 0;
	this._recordPussyToyInsertedCount = 0;
	this._recordAnalToyInsertedCount = 0;
	
	this._recordTotalToysUsedByEnemyCount = 0;
	this._recordClitToyUsedByEnemyCount = 0;
	this._recordPussyToyUsedByEnemyCount = 0;
	this._recordAnalToyUsedByEnemyCount = 0;
	
	//Sex Pose Count
	this._recordSexPose_ThugGangbangCount = 0;
	this._recordSexPose_GuardGangbangCount = 0;
	this._recordSexPose_GoblinCunnilingusCount = 0;
	this._recordSexPose_KickCounterCount = 0;
	this._recordSexPose_SlimePiledriverCount = 0;
	this._recordSexPose_OrcPaizuriCount = 0;
	this._recordSexPose_LizardmanCowgirlCount = 0;
	this._recordSexPose_WerewolfBackTotalCount = 0;
	this._recordSexPose_WerewolfBackPussyCount = 0;
	this._recordSexPose_WerewolfBackAnalCount = 0;
	this._recordSexPose_YetiPaizuriCount = 0;
	this._recordSexPose_YetiPaizuriFeraCount = 0;
	this._recordSexPose_YetiCarryCount = 0;
	
	//Special Battles
	this._recordGuardBattleCount = 0;
	this._recordPettedWhileWorkingCount = 0;
	this._recordBarWaitressBattleCount = 0;
	this._recordBarWaitressSexCount = 0;
	this._recordWaitressFlashedCount = 0;
	this._recordVisitorReceptionistBattleCount = 0;
	this._recordVisitorReceptionistHandshakeCount = 0;
	this._recordVisitorReceptionistHandshakePeople = 0;
	this._recordVisitorReceptionistHandshakeWhileSexPeople = 0;
	this._recordVisitorReceptionistBoobshakeCount = 0;
	this._recordVisitorReceptionistBoobshakePeople = 0;
	this._recordVisitorReceptionistKissPeople = 0;
	this._recordVisitorReceptionistHandjobPeople = 0;
	this._recordVisitorReceptionistBlowjobPeople = 0;
	this._recordGloryBattleCount = 0;
	this._recordGloryBattleCocksAppearedCount = 0;
	this._recordGloryBattleCockBeingServedPeople = 0;
	this._recordGloryBattleCockEjaculationCount = 0;
};

//Temp Record
Game_Actor.prototype.clearTempRecords = function() {
	this._tempMaxReached50MouthDesire = false;
	this._tempMaxReached50BoobsDesire = false;
	this._tempMaxReached50ButtDesire = false;
	this._tempMaxReached50PussyDesire = false;
	this._tempMaxReached50CockDesire = false;
	this._tempMaxReached75MouthDesire = false;
	this._tempMaxReached75BoobsDesire = false;
	this._tempMaxReached75ButtDesire = false;
	this._tempMaxReached75PussyDesire = false;
	this._tempMaxReached75CockDesire = false;
	this._tempMaxReached100MouthDesire = false;
	this._tempMaxReached100BoobsDesire = false;
	this._tempMaxReached100ButtDesire = false;
	this._tempMaxReached100PussyDesire = false;
	this._tempMaxReached100CockDesire = false;
	this._tempMaxReached150MouthDesire = false;
	this._tempMaxReached150BoobsDesire = false;
	this._tempMaxReached150ButtDesire = false;
	this._tempMaxReached150PussyDesire = false;
	this._tempMaxReached150CockDesire = false;
	this._tempMaxReached250TotalDesire = false;
	this._tempMaxReached375TotalDesire = false;
	this._tempMaxReached500TotalDesire = false;
	this._tempMaxReached750TotalDesire = false;
	
	this._tempAllHolesCreamed = false;
	
	this._tempRecordSwallow = false;
	this._tempRecordCockinessPreBattle = this.cockiness;
	
	this._tempRecordBlowbang = false;
	this._tempRecordUrinal = false;
	this._tempRecordSoloCell = false;
	this._tempRecordPillory = false;
	
	this._tempRecordTalkedAtPeople = 0;
	this._tempRecordTalkedAtAboutMouthPeople = 0;
	this._tempRecordTalkedAtAboutBoobsPeople = 0;
	this._tempRecordTalkedAtAboutPussyPeople = 0;
	this._tempRecordTalkedAtAboutButtPeople = 0;
	this._tempRecordTalkedAtAboutCockPeople = 0;
	
	this._tempRecordEnemySawPeople = 0;
	this._tempRecordOrgasmPresencePeople = 0;
	this._tempRecordEnemySawMouthPeople = 0;
	this._tempRecordEnemySawBoobsPeople = 0;
	this._tempRecordEnemySawPussyPeople = 0;
	this._tempRecordEnemySawButtPeople = 0;
	
	this._tempRecordKissedPeople = 0;
	this._tempRecordHandjobPeople = 0;
	this._tempRecordBlowjobPeople = 0;
	this._tempRecordTittyFuckedPeople = 0;
	this._tempRecordPussyFuckedPeople = 0;
	this._tempRecordAnalFuckedPeople = 0;
	this._tempRecordBukkakePeople = 0;
	this._tempRecordFaceBukkakePeople = 0;
	this._tempRecordSwallowPeople = 0;
	this._tempRecordPussyCreampiePeople = 0;
	this._tempRecordAnalCreampiePeople = 0;
	this._tempRecordOrgasmPresencePeople = 0;
	this._tempRecordCunnilingusPeople = 0;
	this._tempRecordRimjobPeople = 0;
	this._tempRecordFootjobPeople = 0;
	this._tempRecordButtSpankedPeople = 0;
	this._tempRecordCockPettedPeople = 0;
	this._tempRecordFingersSuckedPeople = 0;
	this._tempRecordBoobsPettedPeople = 0;
	this._tempRecordNipplesPettedPeople = 0;
	this._tempRecordClitPettedPeople = 0;
	this._tempRecordPussyPettedPeople = 0;
	this._tempRecordButtPettedPeople = 0;
	this._tempRecordAnalPettedPeople = 0;
	
	this._tempRecordKissedCount = 0;
	this._tempRecordHandjobCount = 0;
	this._tempRecordBlowjobCount = 0;
	this._tempRecordTittyFuckCount = 0;
	this._tempRecordPussyFuckedCount = 0;
	this._tempRecordAnalFuckedCount = 0;
	this._tempRecordBoobsPettedCount = 0;
	this._tempRecordNipplesPettedCount = 0;
	this._tempRecordButtPettedCount = 0;
	this._tempRecordAnalPettedCount = 0;
	this._tempRecordClitPettedCount = 0;
	this._tempRecordPussyPettedCount = 0;
	this._tempRecordButtSpankedCount = 0;
	this._tempRecordSeeJerkOffCount = 0;
	this._tempRecordCunnilingusCount = 0;
	this._tempRecordRimjobCount = 0;
	this._tempRecordFootjobCount = 0;
	this._tempRecordCockPettedCount = 0;
	this._tempRecordFingersSuckedCount = 0;
	
	this._tempRecordCockKickUsageCount = 0;
	this._tempRecordCockStareUsageCount = 0;
	this._tempRecordCockPetUsageCount = 0;
	
	this._tempRecordAnalSexUsagePeople = 0;

	this._tempRecordTotalToysInsertedCount = 0;
	this._tempRecordClitToyInsertedCount = 0;
	this._tempRecordPussyToyInsertedCount = 0;
	this._tempRecordAnalToyInsertedCount = 0;
	
	this._tempRecordTotalToysUsedByEnemyCount = 0;
	this._tempRecordClitToyUsedByEnemyCount = 0;
	this._tempRecordPussyToyUsedByEnemyCount = 0;
	this._tempRecordAnalToyUsedByEnemyCount = 0;

	this._tempRecordSwallowML = 0;
	this._tempRecordPussyCreampieML = 0;
	this._tempRecordAnalCreampieML = 0;
	this._tempRecordSwallowMaxML = 0;
	this._tempRecordPussyCreampieMaxML = 0;
	this._tempRecordAnalCreampieMaxML = 0;
	this._tempRecordFloorEjaculationCount = 0;
	this._tempRecordFloorEjaculationML = 0;
	this._tempRecordTotalEjaculationCount = 0;
	this._tempRecordTotalEjaculationML = 0;

	this._tempRecordPussyDripTenthML = 0;
	this._tempRecordOrgasmCount = 0;
	this._tempRecordOrgasmML = 0;
	this._tempRecordBukkakeBoobsML = 0;
	this._tempRecordBukkakeFaceML = 0;
	
	this._tempRecordDoublePenetrationCount = 0;
	this._tempRecordTriplePenetrationCount = 0;
	this._tempRecordBlowbangCount = 0;
	this._tempRecordSexPose_KickCounterCount = 0;
	this._tempRecordSubduedEnemiesWithAttack = 0;
	this._tempRecordSubduedEnemiesSexually = 0;
	this._tempRecordSubduedTotal = 0;
	
	this._tempRecordMasturbatedInBattleCount = 0;
	this._tempRecordAnalFuckedCount_resetByButtSpank = 0;
	this._tempRecordDownStaminaCurrentlyCounted = false;
	this._tempRecordUsedPostOrgasmRevival = false;
	
	this._tempRecordSpankMarksLeftButtcheek = 0;
	this._tempRecordSpankMarksRightButtcheek = 0;
	
	this._gotOrgasmFromSkillType = false;
	this.resetGotHitBySkillType();
};

//Playthrough Records
Game_Actor.prototype.setupPlaythroughRecords = function() {
	//Skills
	this._playthroughRecordBluntAttackUsage = 0;
	this._playthroughRecordPierceAttackUsage = 0;
	this._playthroughRecordSlashAttackUsage = 0;
	this._playthroughRecordKickAttackUsage = 0;
	
	this._playthroughRecordActiveAttackUsage = 0;
	this._playthroughRecordCounterAttackUsage = 0;
	this._playthroughRecordTotalAttackUsage = 0;
	this._playthroughRecordTotalSexSkillUsage = 0;
	
	this._playthroughRecordKissUsagePeople = 0;
	this._playthroughRecordCockStareUsagePeople = 0;
	this._playthroughRecordCockPetUsagePeople = 0;
	this._playthroughRecordHandjobUsagePeople = 0;
	this._playthroughRecordBlowjobUsagePeople = 0;
	this._playthroughRecordRimjobUsagePeople = 0;
	this._playthroughRecordFootjobUsagePeople = 0;
	this._playthroughRecordTittyFuckUsagePeople = 0;
	this._playthroughRecordPussySexUsagePeople = 0;
	this._playthroughRecordAnalSexUsagePeople = 0;
	
	//Defense
	this._playthroughRecordFullHitTakenCount = 0;
	this._playthroughRecordAttackEvadedCount = 0;
	
	//Semen
	this._playthroughRecordBukkakeFaceML = 0;
	this._playthroughRecordBukkakeArmsML = 0;
	this._playthroughRecordBukkakeLegsML = 0;
	this._playthroughRecordBukkakeBoobsML = 0;
	this._playthroughRecordBukkakeButtML = 0;
	this._playthroughRecordBukkakeTotalML = 0;
	this._playthroughRecordBukkakeTotalMaxML = 0;
	this._playthroughRecordSwallowML = 0;
	this._playthroughRecordPussyCreampieML = 0;
	this._playthroughRecordAnalCreampieML = 0;
	this._playthroughRecordSwallowMaxML = 0;
	this._playthroughRecordPussyCreampieMaxML = 0;
	this._playthroughRecordAnalCreampieMaxML = 0;
	this._playthroughRecordTotalEjaculationML = 0;
	
	//Riot
	this._playthroughRecordLevelOneRiotSuppressedCount = 0;
	this._playthroughRecordLevelTwoRiotSuppressedCount = 0;
	this._playthroughRecordLevelThreeRiotSuppressedCount = 0;
	this._playthroughRecordLevelFourRiotSuppressedCount = 0;
	this._playthroughRecordLevelFiveRiotSuppressedCount = 0;
	this._playthroughRecordLevelTotalRiotsSuppressedCount = 0;
	
	//Waitress
	this._playthroughRecordBarWaitressBattleCount = 0;
	this._playthroughRecordWaitressBattleTotalShiftsCount = 0;
	this._playthroughRecordWaitressBattleCompletedSoberCount = 0;
	this._playthroughRecordWaitressBattleProperKickingCount = 0;
	this._playthroughRecordWaitressBattleGotDeadDrunkCount = 0;
	this._playthroughRecordWaitressBattleDrankSemenMugML = 0;
	this._playthroughRecordWaitressServingPettedCount = 0;
	this._playthroughRecordWaitressServingOrgasmCount = 0;
	this._playthroughRecordWaitressDroppedTrayCount = 0;
	
	//Receptionist
	this._playthroughRecordVisitorReceptionistBattleCount = 0;
	this._playthroughRecordReceptionistBattleTotalShiftsCount = 0;
	this._playthroughRecordReceptionistPagesProcessedCount = 0;
	this._playthroughRecordReceptionistHandshakePeople = 0;
	this._playthroughRecordReceptionistHandshakeWhileSexPeople = 0;
	this._playthroughRecordReceptionistOrgasmWhileCallingCount = 0;
	this._playthroughRecordReceptionistBoobshakePeople = 0;
	this._playthroughRecordReceptionistKissPeople = 0;
	this._playthroughRecordReceptionistHandjobPeople = 0;
	this._playthroughRecordReceptionistBlowjobPeople = 0;
	this._playthroughRecordVisitorSwallowML = 0;
	this._playthroughRecordReceptionistGoblinCreampieML = 0;
	
	//Glory
	this._playthroughRecordGloryCocksAppearedCount = 0;
	this._playthroughRecordGloryCocksServed = 0;
	this._playthroughRecordGloryFinishedPissingCocksServingCount = 0;
	this._playthroughRecordGloryOrgasmWhileGuestEatingCount = 0;
	this._playthroughRecordGloryCreampieML = 0;
	this._playthroughRecordGlorySwallowML = 0;
	this._playthroughRecordGloryLongestStallQueue = 0;
	this._playthroughRecordGloryTurnsSpentResting = 0;
	
	//Artisan
	this._playthroughRecordArtisanMealSMARTCount = 0;
	this._playthroughRecordArtisanMealCOMFYCount = 0;
	this._playthroughRecordArtisanMealHEARTCount = 0;
	this._playthroughRecordArtisanMealSLUTCount = 0;
	this._playthroughRecordArtisanMealPUSSYCount = 0;
	this._playthroughRecordArtisanMealHEROCount = 0;
	this._playthroughRecordArtisanMealARMEDCount = 0;
	this._playthroughRecordArtisanMealWARDENCount = 0;
	this._playthroughRecordArtisanMealBITCHCount = 0;
	this._playthroughRecordArtisanMealANALCount = 0;
	this._playthroughRecordArtisanMealTotalCount = 0;
	
	//Sex Title Requirements
	this._playthroughRecordEjaculatedWithKarrynKissCount = 0;
	this._playthroughRecordEjaculatedWithKarrynDoubleHandjobCount = 0;
	this._playthroughRecordErectWithCockPetCount = 0;
	this._playthroughRecordCockStaredAtPeople = 0;
	this._playthroughRecordFootjobThugPeople = 0;
	this._playthroughRecordFootjobOrcPeople = 0;
	this._playthroughRecordAnalSexUsagePeopleSingleBattleMaxRecord = 0;
	this._playthroughRecordKickCounterAfterLightKickSingleDayMaxRecord = 0;
	
	//Other
	this._playthroughRecordGuardBattleCount = 0;
	this._playthroughRecordDefeatedTotal = 0;
	this._playthroughRecordDefeatedLevelOneCount = 0;
	this._playthroughRecordDefeatedLevelTwoCount = 0;
	this._playthroughRecordDefeatedLevelThreeCount = 0;
	this._playthroughRecordDefeatedLevelFourCount = 0;
	this._playthroughRecordDefeatedLevelFiveCount = 0;
	this._playthroughRecordMetalSexualPartnersCount = 0;
};

Game_Actor.prototype.addEnemySexualPartner = function(enemy) {
	if(enemy.isPrisonerType) {
		this._recordSexualPartnersPrisoner++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isGuardType) {
		this._recordSexualPartnersGuard++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isThugType) {
		this._recordSexualPartnersThug++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isGoblinType) {
		this._recordSexualPartnersGoblin++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isNerdType) {
		this._recordSexualPartnersNerd++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isRogueType) {
		this._recordSexualPartnersRogue++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isSlimeType) {
		this._recordSexualPartnersSlime++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isLizardmanType) {
		this._recordSexualPartnersLizardman++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isOrcType) {
		this._recordSexualPartnersOrc++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isHomelessType) {
		this._recordSexualPartnersHomeless++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isWerewolfType) {
		this._recordSexualPartnersWerewolf++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isYetiType) {
		this._recordSexualPartnersYeti++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	
	
	else if(enemy.isVisitorType) {
		this._recordSexualPartnersVisitor++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	
	if(enemy.hasMetalPrefix()) {
		this._recordMetalSexualPartnersCount++;
		this._playthroughRecordMetalSexualPartnersCount++;
	}
};

Game_Actor.prototype.addToEnemyTypeSwallowCount = function(enemy) {
	if(enemy.isPrisonerType) {
		this._recordEnemyTypeSwallowPrisoner++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isGuardType) {
		this._recordEnemyTypeSwallowGuard++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isThugType) {
		this._recordEnemyTypeSwallowThug++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isGoblinType) {
		this._recordEnemyTypeSwallowGoblin++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isNerdType) {
		this._recordEnemyTypeSwallowNerd++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isRogueType) {
		this._recordEnemyTypeSwallowRogue++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isSlimeType) {
		this._recordEnemyTypeSwallowSlime++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isLizardmanType) {
		this._recordEnemyTypeSwallowLizardman++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isOrcType) {
		this._recordEnemyTypeSwallowOrc++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isHomelessType) {
		this._recordEnemyTypeSwallowHomeless++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isWerewolfType) {
		this._recordEnemyTypeSwallowWerewolf++;
		this._recordEnemyTypeSwallowTotal++;
	}
	else if(enemy.isYetiType) {
		this._recordEnemyTypeSwallowYeti++;
		this._recordEnemyTypeSwallowTotal++;
	}
};
Game_Actor.prototype.addToEnemyTypePussyCreampieCount = function(enemy) {
	if(enemy.isPrisonerType) {
		this._recordEnemyTypePussyCreampiePrisoner++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isGuardType) {
		this._recordEnemyTypePussyCreampieGuard++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isThugType) {
		this._recordEnemyTypePussyCreampieThug++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isGoblinType) {
		this._recordEnemyTypePussyCreampieGoblin++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isNerdType) {
		this._recordEnemyTypePussyCreampieNerd++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isRogueType) {
		this._recordEnemyTypePussyCreampieRogue++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isSlimeType) {
		this._recordEnemyTypePussyCreampieSlime++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isLizardmanType) {
		this._recordEnemyTypePussyCreampieLizardman++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isOrcType) {
		this._recordEnemyTypePussyCreampieOrc++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isHomelessType) {
		this._recordEnemyTypePussyCreampieHomeless++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isWerewolfType) {
		this._recordEnemyTypePussyCreampieWerewolf++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
	else if(enemy.isYetiType) {
		this._recordEnemyTypePussyCreampieYeti++;
		this._recordEnemyTypePussyCreampieTotal++;
	}
};

Game_Actor.prototype.addToVirginityTakenViaPussyRecord = function() {
	this._recordVirginitiesTakenViaPussy++;
	this._recordVirginitiesTakenTotal++;
};
Game_Actor.prototype.addToVirginityTakenViaAnalRecord = function() {
	this._recordVirginitiesTakenViaAnal++;
	this._recordVirginitiesTakenTotal++;
};

Game_Actor.prototype.addToActorHandshakeRecord = function(firstCount, enemy) {
	this._recordVisitorReceptionistHandshakeCount++;
	if(firstCount) {
		this._recordVisitorReceptionistHandshakePeople++;
		this._playthroughRecordReceptionistHandshakePeople++;
	}
};
Game_Actor.prototype.addToActorHandshakeWhileSexRecord = function(firstCount, enemy) {
	if(firstCount) {
		this._recordVisitorReceptionistHandshakeWhileSexPeople++;
		this._playthroughRecordReceptionistHandshakeWhileSexPeople++;
	}
};

Game_Actor.prototype.addToActorGloryHoleServingRecord = function(firstCount, enemy) {
	if(firstCount) {
		this._recordGloryBattleCockBeingServedPeople++;
	}
};

Game_Actor.prototype.addToActorBoobshakeRecord = function(firstCount, enemy) {
	this._recordVisitorReceptionistBoobshakeCount++;
	if(firstCount) {
		this._recordVisitorReceptionistBoobshakePeople++;
		this._playthroughRecordReceptionistBoobshakePeople++;
	}
};
Game_Actor.prototype.addToActorKissedRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordKissedCount++;
	this._tempRecordKissedCount++;
	this._todayKissedCount++;
	
	if(firstCount) {
		this._recordKissedPeople++;
		if(enemy.isVisitorType) {
			this._recordVisitorReceptionistKissPeople++;
			this._playthroughRecordReceptionistKissPeople++;
		}
	}
	if(firstCountTemp) {
		this._tempRecordKissedPeople++;
		this._todayKissedPeople++;
	}
	
	if(this._firstKissWantedID === -1 && enemy) {
		this._firstKissDate = Prison.date;
		this._firstKissName = enemy.name();
		this._firstKissMapID = $gameMap._mapId;
		
		if(enemy.isWanted) {
			this._firstKissWantedID = enemy.getWantedId();
		}
		else {
			this._firstKissWantedID = $gameParty.addNewWanted(enemy);
		}
		
		if(enemy.isVisitorMaleType) {
			this._firstKissWasVisitor = true;
		}
		
		BattleManager._logWindow.displayRemLine(TextManager.actorFirstKissMouth);
	}
	
	if(enemy) {
		this._lastKissName = enemy.name();
		this._lastKissDate = Prison.date;
		this._lastKissMapID = $gameMap._mapId;
	}
};
Game_Actor.prototype.addToActorHandjobRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordHandjobCount++;
	this._tempRecordHandjobCount++;
	this._todayHandjobCount++;
	
	if(firstCount) {
		this._recordHandjobPeople++;
		if(enemy.isVisitorType) {
			this._recordVisitorReceptionistHandjobPeople++;
			this._playthroughRecordReceptionistHandjobPeople++;
		}
	}
	if(firstCountTemp) {
		this._tempRecordHandjobPeople++;
		this._todayHandjobPeople++;
	}
	
	if(this._firstHandjobWantedID === -1 && enemy) {
		this._firstHandjobDate = Prison.date;
		this._firstHandjobName = enemy.name();
		this._firstHandjobMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstHandjobWantedID = enemy.getWantedId();
		}
		else {
			this._firstHandjobWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastHandjobName = enemy.name();
		this._lastHandjobDate = Prison.date;
		this._lastHandjobMapID = $gameMap._mapId;
	}
	
	this.addToActorBlowbangRecord();
};
Game_Actor.prototype.addToActorBlowjobRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordBlowjobCount++;
	this._tempRecordBlowjobCount++;
	this._todayBlowjobCount++;
	
	if(firstCount) {
		this._recordBlowjobPeople++;
		if(enemy.isVisitorType) {
			this._recordVisitorReceptionistBlowjobPeople++;
			this._playthroughRecordReceptionistBlowjobPeople++;
		}
	}
	if(firstCountTemp) {
		this._tempRecordBlowjobPeople++;
		this._todayBlowjobPeople++;
		this.addToActorDoubleAndTriplePenetrationRecord();
	}
	
	if(this._firstKissWantedID === -1 && enemy) {
		this._firstKissDate = Prison.date;
		this._firstKissName = enemy.name();
		this._firstKissMapID = $gameMap._mapId;
		this._firstKissWasPenis = true;
		if(enemy.isWanted) {
			this._firstKissWantedID = enemy.getWantedId();
		}
		else {
			this._firstKissWantedID = $gameParty.addNewWanted(enemy);
		}
		BattleManager._logWindow.displayRemLine(TextManager.actorFirstKissCock);
		
		this._lastKissName = enemy.name();
		this._lastKissDate = Prison.date;
		this._lastKissMapID = $gameMap._mapId;
	}
	if(this._firstBlowjobWantedID === -1 && enemy) {
		this._firstBlowjobDate = Prison.date;
		this._firstBlowjobName = enemy.name();
		this._firstBlowjobMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstBlowjobWantedID = enemy.getWantedId();
		}
		else {
			this._firstBlowjobWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastBlowjobName = enemy.name();
		this._lastBlowjobDate = Prison.date;
		this._lastBlowjobMapID = $gameMap._mapId;
	}
	
	this.addToActorBlowbangRecord();
	this.addToActorSoloCellRecord();
	this.addToActorPilloryRecord();
};
Game_Actor.prototype.addToActorTittyFuckRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordTittyFuckCount++;
	this._tempRecordTittyFuckCount++;
	this._todayTittyFuckCount++;
	
	if(firstCount) {
		this._recordTittyFuckPeople++;
	}
	if(firstCountTemp) {
		this._tempRecordTittyFuckedPeople++;
		this._todayTittyFuckedPeople++;
	}
	
	if(this._firstTittyFuckWantedID === -1 && enemy) {
		this._firstTittyFuckDate = Prison.date;
		this._firstTittyFuckName = enemy.name();
		this._firstTittyFuckMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstTittyFuckWantedID = enemy.getWantedId();
		}
		else {
			this._firstTittyFuckWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastTittyFuckName = enemy.name();
		this._lastTittyFuckDate = Prison.date;
		this._lastTittyFuckMapID = $gameMap._mapId;
	}
	
	this.addToActorSoloCellRecord();
};
Game_Actor.prototype.addToActorCunnilingusRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordCunnilingusCount++;
	this._tempRecordCunnilingusCount++;
	this._todayCunnilingusCount++;
	
	if(firstCount) {
		this._recordCunnilingusPeople++;
	}
	if(firstCountTemp) {
		this._tempRecordCunnilingusPeople++;
		this._todayCunnilingusPeople++;
	}
	
	if(this._firstCunnilingusWantedID === -1 && enemy) {
		this._firstCunnilingusDate = Prison.date;
		this._firstCunnilingusName = enemy.name();
		this._firstCunnilingusMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstCunnilingusWantedID = enemy.getWantedId();
		}
		else {
			this._firstCunnilingusWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastCunnilingusName = enemy.name();
		this._lastCunnilingusDate = Prison.date;
		this._lastCunnilingusMapID = $gameMap._mapId;
	}
};
Game_Actor.prototype.addToActorRimjobRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordRimjobCount++;
	this._tempRecordRimjobCount++;
	this._todayRimjobCount++;
	
	if(firstCount) {
		this._recordRimjobPeople++;
	}
	if(firstCountTemp) {
		this._tempRecordRimjobPeople++;
		this._todayRimjobPeople++;
	}
	
	if(this._firstKissWantedID === -1 && enemy) {
		this._firstKissDate = Prison.date;
		this._firstKissName = enemy.name();
		this._firstKissMapID = $gameMap._mapId;
		this._firstKissWasAnus = true;
		if(enemy.isWanted) {
			this._firstKissWantedID = enemy.getWantedId();
		}
		else {
			this._firstKissWantedID = $gameParty.addNewWanted(enemy);
		}
		BattleManager._logWindow.displayRemLine(TextManager.actorFirstKissAnus);
		
		this._lastKissName = enemy.name();
		this._lastKissDate = Prison.date;
		this._lastKissMapID = $gameMap._mapId;
	}
	if(this._firstRimjobWantedID === -1 && enemy) {
		this._firstRimjobDate = Prison.date;
		this._firstRimjobName = enemy.name();
		this._firstRimjobMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstRimjobWantedID = enemy.getWantedId();
		}
		else {
			this._firstRimjobWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastRimjobName = enemy.name();
		this._lastRimjobDate = Prison.date;
		this._lastRimjobMapID = $gameMap._mapId;
	}
};
Game_Actor.prototype.addToActorFootjobRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordFootjobCount++;
	this._tempRecordFootjobCount++;
	this._todayFootjobCount++;
	
	if(firstCount) {
		this._recordFootjobPeople++;
		if(enemy) {
			if(enemy.isThugType) this._playthroughRecordFootjobThugPeople++;
			else if(enemy.isOrcType) this._playthroughRecordFootjobOrcPeople++;
		}
	}
	if(firstCountTemp) {
		this._tempRecordFootjobPeople++;
		this._todayFootjobPeople++;
	}
	
	if(this._firstFootjobWantedID === -1 && enemy) {
		this._firstFootjobDate = Prison.date;
		this._firstFootjobName = enemy.name();
		this._firstFootjobMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstFootjobWantedID = enemy.getWantedId();
		}
		else {
			this._firstFootjobWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastFootjobName = enemy.name();
		this._lastFootjobDate = Prison.date;
		this._lastFootjobMapID = $gameMap._mapId;
	}
};

Game_Actor.prototype.addToActorButtSpankedRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordButtSpankedCount++;
	this._tempRecordButtSpankedCount++;
	this._tempRecordAnalFuckedCount_resetByButtSpank = 0;
	this._todayButtSpankedCount++;
	
	if(firstCount) {
		this._recordButtSpankedPeople++;
	}
	if(firstCountTemp) {
		this._tempRecordButtSpankedPeople++;
		this._todayButtSpankedPeople++;
	}
	
	if(this._firstButtSpankedWantedID === -1 && enemy) {
		this._firstButtSpankedDate = Prison.date;
		this._firstButtSpankedName = enemy.name();
		this._firstButtSpankedMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstButtSpankedWantedID = enemy.getWantedId();
		}
		else {
			this._firstButtSpankedWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastButtSpankedName = enemy.name();
		this._lastButtSpankedDate = Prison.date;
		this._lastButtSpankedMapID = $gameMap._mapId;
	}
};


Game_Actor.prototype.addToActorPussyFuckedRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordPussyFuckedCount++;
	this._tempRecordPussyFuckedCount++;
	this._todayPussyFuckedCount++;
	
	if(firstCount) {
		this._recordPussyFuckedPeople++;
	}
	if(firstCountTemp) {
		this._tempRecordPussyFuckedPeople++;
		this._todayPussyFuckedPeople++;
		this.addToActorDoubleAndTriplePenetrationRecord();
	}
	
	if(this._firstPussySexWantedID === -1 && enemy) {
		this._firstPussySexDate = Prison.date;
		this._firstPussySexName = enemy.name();
		this._firstPussySexMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstPussySexWantedID = enemy.getWantedId();
		}
		else {
			this._firstPussySexWantedID = $gameParty.addNewWanted(enemy);
		}
		
		if(!this._firstPussySexWasToy)
			BattleManager._logWindow.displayRemLine(TextManager.actorLostPussyVirginity);
		
		this.removeState(STATE_IS_VIRGIN_ID);
	}
	
	if(enemy) {
		this._lastPussySexName = enemy.name();
		this._lastPussySexDate = Prison.date;
		this._lastPussySexMapID = $gameMap._mapId;
	}
	
	$gameSwitches.setValue(SWITCH_IS_VIRGIN_ID, false);
	$gameSwitches.setValue(SWITCH_IS_NON_VIRGIN_ID, true);
	
	this.addToActorUrinalRecord();
	this.addToActorSoloCellRecord();
	this.addToActorPilloryRecord();
};
Game_Actor.prototype.addToActorAnalFuckedRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordAnalFuckedCount++;
	this._tempRecordAnalFuckedCount++;
	this._tempRecordAnalFuckedCount_resetByButtSpank++;
	this._todayAnalFuckedCount++;
	
	if(firstCount) {
		this._recordAnalFuckedPeople++;
	}
	if(firstCountTemp) {
		this._tempRecordAnalFuckedPeople++;
		this._todayAnalFuckedPeople++;
		this.addToActorDoubleAndTriplePenetrationRecord();
	}
	
	if(this._firstAnalSexWantedID === -1 && enemy) {
		this._firstAnalSexDate = Prison.date;
		this._firstAnalSexName = enemy.name();
		this._firstAnalSexMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstAnalSexWantedID = enemy.getWantedId();
		}
		else {
			this._firstAnalSexWantedID = $gameParty.addNewWanted(enemy);
		}
		BattleManager._logWindow.displayRemLine(TextManager.actorLostAnalVirginity);
		
		if(this._firstPussySexWantedID === -1 && !this._firstPussySexWasToy && enemy) {
			this._firstAnalSexBeforePussySex = true;
		}
	}
	
	if(enemy) {
		this._lastAnalSexName = enemy.name();
		this._lastAnalSexDate = Prison.date;
		this._lastAnalSexMapID = $gameMap._mapId;
	}
	
	this.addToActorUrinalRecord();
	this.addToActorSoloCellRecord();
	this.addToActorPilloryRecord();
};
Game_Actor.prototype.addToActorBukkakeTotalRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordBukkakeTotalCount++;
	this._recordTotalEjaculationCount++;
	if(firstCount) {
		this._recordBukkakePeople++;
	}
	if(firstCountTemp) {
		this._tempRecordBukkakePeople++;
		this._todayBukkakePeople++;
	}
	
	if(this._firstBukkakeWantedID === -1 && enemy) {
		this._firstBukkakeDate = Prison.date;
		this._firstBukkakeName = enemy.name();
		this._firstBukkakeMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstBukkakeWantedID = enemy.getWantedId();
		}
		else {
			this._firstBukkakeWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastBukkakeName = enemy.name();
		this._lastBukkakeDate = Prison.date;
		this._lastBukkakeMapID = $gameMap._mapId;
	}
};
Game_Actor.prototype.addToActorFaceBukkakeRecord = function(firstCount, enemy, firstCountTemp) {
	if(firstCount) this._recordFaceBukkakePeople++;
	if(firstCountTemp) {
		this._tempRecordFaceBukkakePeople++;
		this._todayFaceBukkakePeople++;
	}
	
	if(this._firstFaceBukkakeWantedID === -1 && enemy) {
		this._firstFaceBukkakeDate = Prison.date;
		this._firstFaceBukkakeName = enemy.name();
		this._firstFaceBukkakeMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstFaceBukkakeWantedID = enemy.getWantedId();
		}
		else {
			this._firstFaceBukkakeWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastFaceBukkakeName = enemy.name();
		this._lastFaceBukkakeDate = Prison.date;
		this._lastFaceBukkakeMapID = $gameMap._mapId;
	}
};
Game_Actor.prototype.addToActorSwallowRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordSwallowCount++;
	this._recordTotalEjaculationCount++;
	if(firstCount) this._recordSwallowPeople++;
	if(firstCountTemp) {
		this._tempRecordSwallowPeople++;
		this._todaySwallowPeople++;
	}
	
	if(this._firstSwallowWantedID === -1 && enemy) {
		this._firstSwallowDate = Prison.date;
		this._firstSwallowName = enemy.name();
		this._firstSwallowMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstSwallowWantedID = enemy.getWantedId();
		}
		else {
			this._firstSwallowWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastSwallowName = enemy.name();
		this._lastSwallowDate = Prison.date;
		this._lastSwallowMapID = $gameMap._mapId;
		this.addToEnemyTypeSwallowCount(enemy);
	}
};
Game_Actor.prototype.addToActorPussyCreampieRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordPussyCreampieCount++;
	this._recordTotalEjaculationCount++;
	if(firstCount) this._recordPussyCreampiePeople++;
	if(firstCountTemp) {
		this._tempRecordPussyCreampiePeople++;
		this._todayPussyCreampiePeople++;
	}
	
	if(this._firstPussyCreampieWantedID === -1 && enemy) {
		this._firstPussyCreampieDate = Prison.date;
		this._firstPussyCreampieName = enemy.name();
		this._firstPussyCreampieMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstPussyCreampieWantedID = enemy.getWantedId();
		}
		else {
			this._firstPussyCreampieWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastPussyCreampieName = enemy.name();
		this._lastPussyCreampieDate = Prison.date;
		this._lastPussyCreampieMapID = $gameMap._mapId;
		this.addToEnemyTypePussyCreampieCount(enemy);
	}
};
Game_Actor.prototype.addToActorAnalCreampieRecord = function(firstCount, enemy, firstCountTemp) {
	this._recordAnalCreampieCount++;
	this._recordTotalEjaculationCount++;
	if(firstCount) this._recordAnalCreampiePeople++;
	if(firstCountTemp) {
		this._tempRecordAnalCreampiePeople++;
		this._todayAnalCreampiePeople++;
	}
	
	if(this._firstAnalCreampieWantedID === -1 && enemy) {
		this._firstAnalCreampieDate = Prison.date;
		this._firstAnalCreampieName = enemy.name();
		this._firstAnalCreampieMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstAnalCreampieWantedID = enemy.getWantedId();
		}
		else {
			this._firstAnalCreampieWantedID = $gameParty.addNewWanted(enemy);
		}
	}
	
	if(enemy) {
		this._lastAnalCreampieName = enemy.name();
		this._lastAnalCreampieDate = Prison.date;
		this._lastAnalCreampieMapID = $gameMap._mapId;
	}
};

Game_Actor.prototype.addToActorOrgasmPresenceRecord = function(firstCount, firstCountTemp) {
	if(firstCount) this._recordOrgasmPresencePeople++;
	if(firstCountTemp) this._tempRecordOrgasmPresencePeople++;
};

Game_Actor.prototype.addToActorDoubleAndTriplePenetrationRecord = function() {
	let filledBodySlots = 0;
	
	if(this.isBodySlotInserted(MOUTH_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(ANAL_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(PUSSY_ID)) filledBodySlots++;
	
	if(filledBodySlots === 2 && this.isBodySlotInserted(ANAL_ID) && this.isBodySlotInserted(PUSSY_ID)) this.addToActorDoublePenetrationRecord();
	else if(filledBodySlots === 3) this.addToActorTriplePenetrationRecord();
};

Game_Actor.prototype.addToActorUrinalRecord = function() {
	if(this.isInDefeatedLevel2Pose()) {
		let filledBodySlots = 0;
		
		if(this.isBodySlotInserted(ANAL_ID)) filledBodySlots++;
		if(this.isBodySlotInserted(PUSSY_ID)) filledBodySlots++;
		
		if(filledBodySlots > 0 && !this._tempRecordUrinal) {
			this._recordUrinalCount++;
			this._tempRecordUrinal = true;
		}
	}
};

Game_Actor.prototype.addToActorSoloCellRecord = function() {
	if(this.isInDefeatedLevel3Pose()) {
		let filledBodySlots = 0;
		
		if(this.isBodySlotInserted(ANAL_ID)) filledBodySlots++;
		if(this.isBodySlotInserted(PUSSY_ID)) filledBodySlots++;
		if(this.isBodySlotInserted(MOUTH_ID)) filledBodySlots++;
		if(this.isBodySlotInserted(BOOBS_ID)) filledBodySlots++;
		
		if(filledBodySlots > 0 && !this._tempRecordSoloCell) {
			this._recordSoloCellCount++; 
			this._tempRecordSoloCell = true;
		}
	}
};

Game_Actor.prototype.addToActorPilloryRecord = function() {
	if(this.isInDefeatedLevel4Pose()) {
		let filledBodySlots = 0;
		
		if(this.isBodySlotInserted(ANAL_ID)) filledBodySlots++;
		if(this.isBodySlotInserted(PUSSY_ID)) filledBodySlots++;
		if(this.isBodySlotInserted(MOUTH_ID)) filledBodySlots++;
		
		if(filledBodySlots > 0 && !this._tempRecordPillory) {
			this._recordPilloryCount++;
			this._tempRecordPillory = true;
		}
	}
};

Game_Actor.prototype.addToActorBlowbangRecord = function() {
	let filledBodySlots = 0;
	
	//if(this.isBodySlotInserted(MOUTH_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(RIGHT_HAND_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(LEFT_HAND_ID)) filledBodySlots++;
	
	if(filledBodySlots > 0 && this.isBodySlotInserted(MOUTH_ID) && !this._tempRecordBlowbang && this.isInDefeatedLevel1Pose()) {
		this._recordBlowbangCount++; 
		this._tempRecordBlowbangCount++;
		this._todayBlowbangCount++;
		this._tempRecordBlowbang = true;
	}
};

Game_Party.prototype.addRecordEscaped = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordEscaped++;
};

Game_Party.prototype.addRecordDefeated = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordDefeatedTotal++;
	actor._playthroughRecordDefeatedTotal++;
	actor.resetCockiness();
	
	if(!actor.isInDefeatedPose()) {
		if(Prison.currentlyPrisonLevelOne()) {
			actor._recordDefeatedLevelOneCount++;
			actor._playthroughRecordDefeatedLevelOneCount++;
		}
		else if(Prison.currentlyPrisonLevelTwo()) {
			actor._recordDefeatedLevelTwoCount++;
			actor._playthroughRecordDefeatedLevelTwoCount++;
		}
		else if(Prison.currentlyPrisonLevelThree()) {
			actor._recordDefeatedLevelThreeCount++;
			actor._playthroughRecordDefeatedLevelThreeCount++;
		}
		else if(Prison.currentlyPrisonLevelFour()) {
			actor._recordDefeatedLevelFourCount++;
			actor._playthroughRecordDefeatedLevelFourCount++;
		}
		else if(Prison.currentlyPrisonLevelFive()) {
			actor._recordDefeatedLevelFiveCount++;
			actor._playthroughRecordDefeatedLevelFiveCount++;
		}
	}
};

Game_Party.prototype.addRecordInvasionBattle = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordInvasionTotal++;
	
	if(Prison.currentlyPrisonLevelOne()) 
		actor._recordInvasionLevelOne++;
	else if(Prison.currentlyOutsidePrison()) 
		actor._recordInvasionOffice++;
	else if(Prison.currentlyPrisonLevelTwo()) 
		actor._recordInvasionLevelTwo++;
	else if(Prison.currentlyPrisonLevelThree())
		actor._recordInvasionLevelThree++;
	else if(Prison.currentlyPrisonLevelFour()) 
		actor._recordInvasionLevelFour++;
	else if(Prison.currentlyPrisonLevelFive()) 
		actor._recordInvasionLevelFive++;
};

Game_Party.prototype.addRecordSubdued = function(enemySubdued) {
	if(enemySubdued._tagDontCountSubdued || enemySubdued._enemyTempRecordSubduedCounted || enemySubdued._enemyTempRecordSubduedWithEventCommand) return;
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordSubduedTotal++;
	actor._tempRecordSubduedTotal++;
	actor._todaySubduedTotal++;
	actor.addCockinessFromSubduingEnemy(enemySubdued.enemyExperienceLvl());

	if(enemySubdued.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ATTACK)) {
		actor._recordSubduedEnemiesWithAttack++;
		actor._tempRecordSubduedEnemiesWithAttack++;
		actor._todaySubduedEnemiesWithAttack++;
		if(enemySubdued.isErect) 
			actor._recordSubduedErectEnemiesWithAttack++;
	}
	else if(!Karryn.isInJobPose()) {
		actor._recordSubduedEnemiesSexually++;
		actor._tempRecordSubduedEnemiesSexually++;
		actor._todaySubduedEnemiesSexually++;
	}
	
	if(enemySubdued.isAngry) {
		actor._recordSubduedAngryEnemies++;
	}
	if(enemySubdued.hasMetalPrefix()) {
		actor._recordSubduedMetalEnemies++;
		actor._todaySubduedMetalEnemiesCount++;
	}
	
	enemySubdued._enemyTempRecordSubduedCounted = true;
};

Game_Actor.prototype.addToFixClothesUsageCountRecord = function() { this._recordFixClothesUsageCount++; };
Game_Actor.prototype.addToCockKickUsageCountRecord = function() { 
	this._recordCockKickUsageCount++; 
	this._tempRecordCockKickUsageCount++;
	this._todayCockKickUsageCount++; 
};

Game_Actor.prototype.addToKissUsageCountRecord = function(target) { 
	this._recordKissUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordKissedUsageCount == 0)
			this._playthroughRecordKissUsagePeople++;
		target._enemyTempRecordKissedUsageCount++;
	}
};
Game_Actor.prototype.addToCockStareUsageCountRecord = function(target) { 
	this._recordCockStareUsageCount++;
	this._tempRecordCockStareUsageCount++;
	this._todayCockStareUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordCockStaredAtUsageCount == 0)
			this._playthroughRecordCockStareUsagePeople++;
		target._enemyTempRecordCockStaredAtUsageCount++;
	}
};
Game_Actor.prototype.addToCockPetUsageCountRecord = function(target) { 
	this._recordCockPetUsageCount++;
	this._tempRecordCockPetUsageCount++;
	this._todayCockPetUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordCockPettedUsageCount == 0)
			this._playthroughRecordCockPetUsagePeople++;
		target._enemyTempRecordCockPettedUsageCount++;
	}
};
Game_Actor.prototype.addToHandjobUsageCountRecord = function(target) { 
	this._recordHandjobUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordHandjobUsageCount == 0)
			this._playthroughRecordHandjobUsagePeople++;
		target._enemyTempRecordHandjobUsageCount++;
	}
};
Game_Actor.prototype.addToBlowjobUsageCountRecord = function(target) { 
	this._recordBlowjobUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordBlowjobUsageCount == 0) {
			this._todayBlowjobUsagePeople++;
			this._playthroughRecordBlowjobUsagePeople++;
		}
		target._enemyTempRecordBlowjobUsageCount++;
	}
};
Game_Actor.prototype.addToRimjobUsageCountRecord = function(target) { 
	this._recordRimjobUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordRimmedUsageCount == 0) {
			this._todayRimjobUsagePeople++;
			this._playthroughRecordRimjobUsagePeople++;
		}
		target._enemyTempRecordRimmedUsageCount++;
	}
};
Game_Actor.prototype.addToFootjobUsageCountRecord = function(target) { 
	this._recordFootjobUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordFootjobUsageCount == 0)
			this._playthroughRecordFootjobUsagePeople++;
		target._enemyTempRecordFootjobUsageCount++;
	}
};
Game_Actor.prototype.addToTittyFuckUsageCountRecord = function(target) { 
	this._recordTittyFuckUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordTittyFuckUsageCount == 0)
			this._playthroughRecordTittyFuckUsagePeople++;
		target._enemyTempRecordTittyFuckUsageCount++;
	}
};
Game_Actor.prototype.addToPussySexUsageCountRecord = function(target) { 
	this._recordPussySexUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordPussyFuckedUsageCount == 0)
			this._playthroughRecordPussySexUsagePeople++;
		target._enemyTempRecordPussyFuckedUsageCount++;
		
		if(target.isThugType) {
			if(this._todayPussySexUsagePartnersThug == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersThug++;
		}
		else if(target.isPrisonerType) {
			if(this._todayPussySexUsagePartnersPrisoner == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersPrisoner++;
		}
		else if(target.isGuardType) {
			if(this._todayPussySexUsagePartnersGuard == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersGuard++;
		}
		else if(target.isGoblinType) {
			if(this._todayPussySexUsagePartnersGoblin == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersGoblin++;
		}
		else if(target.isNerdType) {
			if(this._todayPussySexUsagePartnersNerd == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersNerd++;
		}
		else if(target.isRogueType) {
			if(this._todayPussySexUsagePartnersRogue == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersRogue++;
		}
		else if(target.isSlimeType) {
			if(this._todayPussySexUsagePartnersSlime == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersSlime++;
		}
		else if(target.isLizardmanType) {
			if(this._todayPussySexUsagePartnersLizardman == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersLizardman++;
		}
		else if(target.isOrcType) {
			if(this._todayPussySexUsagePartnersOrc == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersOrc++;
		}
		else if(target.isHomelessType) {
			if(this._todayPussySexUsagePartnersHomeless == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersHomeless++;
		}
		else if(target.isWerewolfType) {
			if(this._todayPussySexUsagePartnersWerewolf == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersWerewolf++;
		}
		else if(target.isYetiType) {
			if(this._todayPussySexUsagePartnersYeti == 0)
				this._todayPussySexUsagePartnersDifferentTotal++;
			this._todayPussySexUsagePartnersYeti++;
		}
	}
};
Game_Actor.prototype.addToAnalSexUsageCountRecord = function(target) { 
	this._recordAnalSexUsageCount++;
	this._playthroughRecordTotalSexSkillUsage++;
	
	if(target) {
		if(target._enemyTempRecordAnalFuckedUsageCount == 0) {
			this._playthroughRecordAnalSexUsagePeople++;
			this._tempRecordAnalSexUsagePeople++;
			if(this._tempRecordAnalSexUsagePeople > this._playthroughRecordAnalSexUsagePeopleSingleBattleMaxRecord) 
				this._playthroughRecordAnalSexUsagePeopleSingleBattleMaxRecord = this._tempRecordAnalSexUsagePeople;
		}
		target._enemyTempRecordAnalFuckedUsageCount++;
	}
};


Game_Actor.prototype.addToClothesStrippedRecord = function() { 
	this._recordClothesStrippedCount++; 
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
		this._recordClothesStrippedPostFirstPublicOrgasmCount++;
	}
};
Game_Actor.prototype.addToPantiesStrippedRecord = function() { 
	this._recordPantiesStrippedCount++; 
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
		this._recordPantiesStrippedPostFirstPublicOrgasmCount++;
	}
};
	
Game_Actor.prototype.addToActorBoobsPettedRecord = function(firstCount, firstCountTemp, karrynMas) { 
	this._recordBoobsPettedCount++;
	this._tempRecordBoobsPettedCount++;
	this._todayBoobsPettedCount++;
	
	if(firstCount) this._recordBoobsPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordBoobsPettedPeople++;
		this._todayBoobsPettedPeople++;
	}
	
	if(karrynMas) this._recordBoobsPettedOnaniCount++;
};	
Game_Actor.prototype.addToActorNipplesPettedRecord = function(firstCount, firstCountTemp, karrynMas) { 
	this._recordNipplesPettedCount++;
	this._tempRecordNipplesPettedCount++;
	this._todayNipplesPettedCount++;
	
	if(firstCount) this._recordNipplesPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordNipplesPettedPeople++;
		this._todayNipplesPettedPeople++;
	}
	
	if(karrynMas) this._recordNipplesPettedOnaniCount++;
};		
Game_Actor.prototype.addToActorButtPettedRecord = function(firstCount, firstCountTemp, karrynMas) { 
	this._recordButtPettedCount++;
	this._tempRecordButtPettedCount++;
	this._todayButtPettedCount++;
	
	if(firstCount) this._recordButtPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordButtPettedPeople++;
		this._todayButtPettedPeople++;
	}
	
	if(karrynMas) this._recordButtPettedOnaniCount++;
};		
Game_Actor.prototype.addToActorAnalPettedRecord = function(firstCount, firstCountTemp, karrynMas) { 
	this._recordAnalPettedCount++;
	this._tempRecordAnalPettedCount++;
	this._todayAnalPettedCount++;
	
	if(firstCount) this._recordAnalPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordAnalPettedPeople++;
		this._todayAnalPettedPeople++;
	}
	
	if(karrynMas) this._recordAnalPettedOnaniCount++;
};		
Game_Actor.prototype.addToActorClitPettedRecord = function(firstCount, firstCountTemp, karrynMas) { 
	this._recordClitPettedCount++;
	this._tempRecordClitPettedCount++;
	this._todayClitPettedCount++;
	
	if(firstCount) this._recordClitPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordClitPettedPeople++;
		this._todayClitPettedPeople++;
	}
	
	if(karrynMas) this._recordClitPettedOnaniCount++;
};
Game_Actor.prototype.addToActorPussyPettedRecord = function(firstCount, firstCountTemp, karrynMas) { 
	this._recordPussyPettedCount++;
	this._tempRecordPussyPettedCount++;
	this._todayPussyPettedCount++;
	
	if(firstCount) this._recordPussyPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordPussyPettedPeople++;
		this._todayPussyPettedPeople++;
	}
	
	if(karrynMas) this._recordPussyPettedOnaniCount++;
};

Game_Actor.prototype.addToActorPettedWhileWorkingRecord = function() { 
	this._recordPettedWhileWorkingCount++;
};

Game_Actor.prototype.addToActorFingersSuckedRecord = function(firstCount, firstCountTemp, karrynMas) {
	this._recordFingersSuckedCount++;
	this._tempRecordFingersSuckedCount++;
	this._todayFingersSuckedCount++;
	
	if(firstCount) this._recordFingersSuckedPeople++;
	if(firstCountTemp) {
		this._tempRecordFingersSuckedPeople++;
		this._todayFingersSuckedPeople++;
	}
	
	if(karrynMas) this._recordFingersSuckedOnaniCount++;
};

Game_Actor.prototype.addToActorCockPettedRecord = function(firstCount, firstCountTemp) {
	this._recordCockPettedCount++;
	this._tempRecordCockPettedCount++;
	this._todayCockPettedCount++;
	
	if(firstCount) this._recordCockPettedPeople++;
	if(firstCountTemp) {
		this._tempRecordCockPettedPeople++;
		this._todayCockPettedPeople++;
	}
};

Game_Actor.prototype.addToActorCockStaredAtRecord = function(firstCount, firstCountTemp) {
	this._recordCockStaredCount++;
	
	if(firstCount) {
		this._recordCockStaredAtPeople++;
		this._playthroughRecordCockStaredAtPeople++;
	}
	if(firstCountTemp) {
		this._todayCockStaredAtPeople++;
	}
};

Game_Actor.prototype.addToActorTauntCountRecord = function(firstCount) {
	this._recordTauntCount++;
	this._todayTauntCount++;
};
Game_Actor.prototype.addToActorTauntPeopleRecord = function(firstCount) {
	if(firstCount) this._recordTauntPeople++;
};

Game_Actor.prototype.addToActorFlauntCountRecord = function(firstCount) {
	this._recordFlauntCount++;
};
Game_Actor.prototype.addToActorFlauntPeopleRecord = function(firstCount) {
	if(firstCount) this._recordFlauntPeople++;
};


Game_Actor.prototype.addToActorDogezaCountRecord = function(firstCount) {
	this._recordDogezaCount++;
};
Game_Actor.prototype.addToActorDogezaPeopleRecord = function(firstCount) {
	if(firstCount) this._recordDogezaPeople++;
};
Game_Actor.prototype.addToActorToysInsertedByPeopleRecord = function(firstCount) {
	if(firstCount) this._recordToysInsertedByPeople++;
};



Game_Actor.prototype.addToActorTalkedAtRecord = function(firstCount, firstCountTemp) { 
	this._recordTalkedAtCount++;
	if(firstCount) this._recordTalkedAtPeople++;
	if(firstCountTemp) this._tempRecordTalkedAtPeople++;
};
Game_Actor.prototype.addToActorEnemyTalkedAboutMouthRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) {
		this._recordTalkedAtAboutMouthPostFirstDefeatCount += Math.min(1, 1 * this.elementRate(ELEMENT_TALK_ID));
	}
	if(firstCount) this._recordTalkedAtAboutMouthPeople++;
	if(firstCountTemp) {
		this._tempRecordTalkedAtAboutMouthPeople++;
		this._todayTalkedAtAboutMouthPeople++;
	}
};
Game_Actor.prototype.addToActorEnemyTalkedAboutBoobsRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) {
		this._recordTalkedAtAboutBoobsPostFirstDefeatCount += Math.min(1, 1 * this.elementRate(ELEMENT_TALK_ID));
	}
	if(firstCount) this._recordTalkedAtAboutBoobsPeople++;
	if(firstCountTemp) {
		this._tempRecordTalkedAtAboutBoobsPeople++;
		this._todayTalkedAtAboutBoobsPeople++;
	}
};
Game_Actor.prototype.addToActorEnemyTalkedAboutPussyRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) {
		this._recordTalkedAtAboutPussyPostFirstDefeatCount += Math.min(1, 1 * this.elementRate(ELEMENT_TALK_ID));
	}
	if(firstCount) this._recordTalkedAtAboutPussyPeople++;
	if(firstCountTemp) {
		this._tempRecordTalkedAtAboutPussyPeople++;
		this._todayTalkedAtAboutPussyPeople++;
	}
};
Game_Actor.prototype.addToActorEnemyTalkedAboutButtRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) {
		this._recordTalkedAtAboutButtPostFirstDefeatCount += Math.min(1, 1 * this.elementRate(ELEMENT_TALK_ID));
	}
	if(firstCount) this._recordTalkedAtAboutButtPeople++;
	if(firstCountTemp) {
		this._tempRecordTalkedAtAboutButtPeople++;
		this._todayTalkedAtAboutButtPeople++;
	}
};
Game_Actor.prototype.addToActorEnemyTalkedAboutCockRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) {
		this._recordTalkedAtAboutCockPostFirstDefeatCount += Math.min(1, 1 * this.elementRate(ELEMENT_TALK_ID));
	}
	if(firstCount) this._recordTalkedAtAboutCockPeople++;
	if(firstCountTemp) {
		this._tempRecordTalkedAtAboutCockPeople++;
		this._todayTalkedAtAboutCockPeople++;
	}
};

Game_Actor.prototype.addToActorSeenRecord = function(firstCount, firstCountTemp) { 
	this._recordEnemySawCount++;
	if(firstCount) this._recordEnemySawPeople++;
	if(firstCountTemp) {
		this._tempRecordEnemySawPeople++;
		this._todayEnemySawPeople++;
	}
};
Game_Actor.prototype.addToActorEnemySawMouthRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
		this._recordEnemySawMouthPostFirstPublicOrgasmCount += Math.min(1, 1 * this.elementRate(ELEMENT_SIGHT_ID));
	}
	if(firstCount) this._recordEnemySawMouthPeople++;
	if(firstCountTemp) {
		this._tempRecordEnemySawMouthPeople++;
		this._todayEnemySawMouthPeople++;
	}
};
Game_Actor.prototype.addToActorEnemySawBoobsRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
		this._recordEnemySawBoobsPostFirstPublicOrgasmCount += Math.min(1, 1 * this.elementRate(ELEMENT_SIGHT_ID));
	}
	if(firstCount) this._recordEnemySawBoobsPeople++;
	if(firstCountTemp) {
		this._tempRecordEnemySawBoobsPeople++;
		this._todayEnemySawBoobsPeople++;
	}
};
Game_Actor.prototype.addToActorEnemySawPussyRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
		this._recordEnemySawPussyPostFirstPublicOrgasmCount += Math.min(1, 1 * this.elementRate(ELEMENT_SIGHT_ID));
	}
	if(firstCount) this._recordEnemySawPussyPeople++;
	if(firstCountTemp) {
		this._tempRecordEnemySawPussyPeople++;
		this._todayEnemySawPussyPeople++;
	}
};
Game_Actor.prototype.addToActorEnemySawButtRecord = function(firstCount, firstCountTemp) { 
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
		this._recordEnemySawButtPostFirstPublicOrgasmCount += Math.min(1, 1 * this.elementRate(ELEMENT_SIGHT_ID));
	}
	if(firstCount) this._recordEnemySawButtPeople++;
	if(firstCountTemp) {
		this._tempRecordEnemySawButtPeople++;
		this._todayEnemySawButtPeople++;
	}
};

Game_Actor.prototype.addToActorSawJerkOffRecord = function(firstCount) { 
	this._recordSeeJerkOffCount++; 
	if(firstCount) this._recordSeeJerkOffPeople++;
};


Game_Actor.prototype.addToActorCockinessGainedRecord = function(value) { 
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID)) {
		this._recordCockinessGainedValue += value;
	}
};
Game_Actor.prototype.addToActorCockinessMaxRecord = function() { 
	this._recordCockinessMaxedCount++;
};

Game_Actor.prototype.addToActorHornyRecord = function() { 
	this._recordHornyCount++; 
};

Game_Actor.prototype.addToActorDebuffOffBalancedRecord = function() { 
	this._recordDebuffOffBalancedCount++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID))
		this._recordDebuffOffBalancedPostFirstDefeatCount++;
};
Game_Actor.prototype.addToActorDebuffFallenRecord = function() { 
	this._recordDebuffFallenCount++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID))
		this._recordDebuffFallenPostFirstDefeatCount++;
};
Game_Actor.prototype.addToActorDebuffDisarmedRecord = function() { 
	this._recordDebuffDisarmedCount++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID))
		this._recordDebuffDisarmedPostFirstDefeatCount++;
};
Game_Actor.prototype.addToActorDebuffDownStaminaRecord = function() { 
	if(!this._tempRecordDownStaminaCurrentlyCounted) {
		this._recordDebuffDownStaminaCount++;
		if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID))
			this._recordDebuffDownStaminaPostFirstDefeatCount++;
		this._tempRecordDownStaminaCurrentlyCounted = true;
	}
};


Game_Actor.prototype.addToActorMasturbatedCouchRecord = function() { 
	let mapId = $gameMap._mapId;
	this._recordMasturbatedCouchTotalCount++;
	this._recordMasturbatedTotalCount++;
	
	if(mapId === MAP_ID_KARRYN_OFFICE)
		this._recordMasturbatedOfficeCount++;
	else if(mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION)
		this._recordMasturbatedGuardStationCount++;
	
	if(!this._firstMasturbateDate) this._firstMasturbateDate = Prison.date;
	this._lastMasturbateDate = Prison.date;
};	

Game_Actor.prototype.addToActorMasturbatedInBattleRecord = function() { 
	if(!this.isInMasturbationInBattlePose()) {
		this._recordMasturbatedInBattleCount++;
		this._tempRecordMasturbatedInBattleCount++;
		this._recordMasturbatedTotalCount++;
		
		if(!this._firstMasturbateDate) this._firstMasturbateDate = Prison.date;
		
		this._lastMasturbateDate = Prison.date;
	}
	
	$gameTroop.addToEnemyMasturbatedInBattlePresenceCountRecord(this);
};	

Game_Actor.prototype.addToActorMasturbatedGloryHoleRecord = function() { 
	this._recordMasturbatedGloryHoleCount++;
};	
Game_Actor.prototype.addToActorMasturbatedUsingHalberdRecord = function() { 
	this._recordMasturbatedUsingHalberdCount++;
};	
Game_Actor.prototype.addToActorMasturbatedInBattlePresenceRecord = function(firstCount) {
	if(firstCount) this._recordMasturbatedInBattlePresencePeople++;
};

Game_Actor.prototype.addToActorKickCounteredRecord = function(firstCount, firstCountTemp) { 
	if(firstCountTemp) {
		this._recordSexPose_KickCounterCount++; 
		this._tempRecordSexPose_KickCounterCount++;
		this._todaySexPose_KickCounterCount++;
		if(this.isStateAffected(STATE_LIGHT_KICK_COUNTERED_ID)) {
			this._todayKickCounterAfterLightKickCount++;
			if(this._todayKickCounterAfterLightKickCount > this._playthroughRecordKickCounterAfterLightKickSingleDayMaxRecord)
				this._playthroughRecordKickCounterAfterLightKickSingleDayMaxRecord = this._todayKickCounterAfterLightKickCount
		}
	}
};	
Game_Actor.prototype.addToActorDoublePenetrationRecord = function() { 
	this._recordDoublePenetrationCount++; 
	this._tempRecordDoublePenetrationCount++;
	this._todayDoublePenetrationCount++;
};
Game_Actor.prototype.addToActorTriplePenetrationRecord = function() { 
	this._recordTriplePenetrationCount++; 
	this._tempRecordTriplePenetrationCount++;
	this._todayTriplePenetrationCount++;
};		
		
Game_Actor.prototype.addToActorMouthPleasureRecord = function(num) { this._recordMouthPleasure += num; };	
Game_Actor.prototype.addToActorBoobsPleasureRecord = function(num) { this._recordBoobsPleasure += num; };	
Game_Actor.prototype.addToActorNipplesPleasureRecord = function(num) { this._recordNipplesPleasure += num; };	
Game_Actor.prototype.addToActorPussyPleasureRecord = function(num) { this._recordPussyPleasure += num; };	
Game_Actor.prototype.addToActorClitPleasureRecord = function(num) { this._recordClitPleasure += num; };	
Game_Actor.prototype.addToActorButtPleasureRecord = function(num) { this._recordButtPleasure += num; };	
Game_Actor.prototype.addToActorAnalPleasureRecord = function(num) { this._recordAnalPleasure += num; };	
Game_Actor.prototype.addToActorToysPleasureRecord = function(num) { this._recordToysPleasure += num; };
Game_Actor.prototype.addToActorFingersPleasureRecord = function(num) { this._recordFingersPleasure += num; };	
Game_Actor.prototype.addToActorTalkPleasureRecord = function(num) { this._recordTalkPleasure += num; };	
Game_Actor.prototype.addToActorSightPleasureRecord = function(num) { this._recordSightPleasure += num; };	
Game_Actor.prototype.addToActorBukkakePleasureRecord = function(num) { this._recordBukkakePleasure += num; };	
Game_Actor.prototype.addToActorSwallowPleasureRecord = function(num) { this._recordSwallowPleasure += num; };	
Game_Actor.prototype.addToActorPussyCreampiePleasureRecord = function(num) { this._recordPussyCreampiePleasure += num; };	
Game_Actor.prototype.addToActorAnalCreampiePleasureRecord = function(num) { this._recordAnalCreampiePleasure += num; };	
Game_Actor.prototype.addToActorMasochismPleasureRecord = function(num) { this._recordMasochismPleasure += num; };	
Game_Actor.prototype.addToActorSadismPleasureRecord = function(num) { this._recordSadismPleasure += num; };		
	
Game_Actor.prototype.addToActorPussyDripRecord = function(drip) { this._recordPussyDripTenthML += drip; };			
	
	
Game_Actor.prototype.addToActorBukkakeFaceMLRecord = function(ml) {
	this._recordBukkakeFaceCount++;
	this._recordBukkakeFaceML += ml;
	this._tempRecordBukkakeFaceML += ml;
	this._recordBukkakeTotalML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	this._playthroughRecordBukkakeFaceML += ml;
	this._playthroughRecordBukkakeTotalML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	
	this.addToActorBukkakeMaxMLRecord();
};	
Game_Actor.prototype.addToActorBukkakeArmsMLRecord = function(ml) {
	this._recordBukkakeArmsCount++;
	this._recordBukkakeArmsML += ml;
	this._recordBukkakeTotalML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	this._playthroughRecordBukkakeArmsML += ml;
	this._playthroughRecordBukkakeTotalML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	
	this.addToActorBukkakeMaxMLRecord();
};	

Game_Actor.prototype.addToActorBukkakeLegsMLRecord = function(ml) {
	this._recordBukkakeLegsCount++;
	this._recordBukkakeLegsML += ml;
	this._recordBukkakeTotalML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	this._playthroughRecordBukkakeLegsML += ml;
	this._playthroughRecordBukkakeTotalML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	
	this.addToActorBukkakeMaxMLRecord();
};	


Game_Actor.prototype.addToActorBukkakeBoobsMLRecord = function(ml) {
	this._recordBukkakeBoobsCount++;
	this._recordBukkakeBoobsML += ml;
	this._recordBukkakeTotalML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	this._playthroughRecordBukkakeBoobsML += ml;
	this._playthroughRecordBukkakeTotalML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	
	this.addToActorBukkakeMaxMLRecord();
	this._tempRecordBukkakeBoobsML += ml;
};	
Game_Actor.prototype.addToActorBukkakeButtMLRecord = function(ml) {
	this._recordBukkakeButtCount++;
	this._recordBukkakeButtML += ml;
	this._recordBukkakeTotalML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	this._playthroughRecordBukkakeButtML += ml;
	this._playthroughRecordBukkakeTotalML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	
	this.addToActorBukkakeMaxMLRecord();
};	

Game_Actor.prototype.addToActorBukkakeMaxMLRecord = function() {
	if(this.getCurrentBukkakeTotal() > this._recordBukkakeTotalMaxML) this._recordBukkakeTotalMaxML = this.getCurrentBukkakeTotal();
	if(this.getCurrentBukkakeTotal() > this._playthroughRecordBukkakeTotalMaxML) this._playthroughRecordBukkakeTotalMaxML = this.getCurrentBukkakeTotal();
};	

Game_Actor.prototype.addToActorSwallowMLRecord = function(ml) {
	this._recordSwallowML += ml;
	this._tempRecordSwallowML += ml;
	this._todaySwallowML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	if(this._liquidSwallow > this._recordSwallowMaxML) 
		this._recordSwallowMaxML = this._liquidSwallow;
	
	this._playthroughRecordSwallowML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	if(this._liquidSwallow > this._playthroughRecordSwallowMaxML) this._playthroughRecordSwallowMaxML = this._liquidSwallow;
	
	this.addToActorAllHolesCreamedRecord();
};	
Game_Actor.prototype.addToActorPussyCreampieMLRecord = function(ml) {
	this._recordPussyCreampieML += ml;
	this._tempRecordPussyCreampieML += ml;
	this._todayPussyCreampieML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	if(this._liquidCreampiePussy > this._recordPussyCreampieMaxML) 
		this._recordPussyCreampieMaxML = this._liquidCreampiePussy;
	
	this._playthroughRecordPussyCreampieML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	if(this._liquidCreampiePussy > this._playthroughRecordPussyCreampieMaxML) this._playthroughRecordPussyCreampieMaxML = this._liquidCreampiePussy;
	
	this.addToActorAllHolesCreamedRecord();
};	
Game_Actor.prototype.addToActorAnalCreampieMLRecord = function(ml) {
	this._recordAnalCreampieML += ml;
	this._tempRecordAnalCreampieML += ml;
	this._todayAnalCreampieML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	if(this._liquidCreampieAnal > this._recordAnalCreampieMaxML) 
		this._recordAnalCreampieMaxML = this._liquidCreampieAnal;
	
	this._playthroughRecordAnalCreampieML += ml;
	this._playthroughRecordTotalEjaculationML += ml;
	if(this._liquidCreampieAnal > this._playthroughRecordAnalCreampieMaxML) this._playthroughRecordAnalCreampieMaxML = this._liquidCreampieAnal;
	
	this.addToActorAllHolesCreamedRecord();
};	

Game_Actor.prototype.addToActorFloorEjaculationMLRecord = function(ml) {
	this._recordFloorEjaculationCount++;
	this._tempRecordFloorEjaculationCount++;
	this._todayFloorEjaculationCount++;
	
	this._recordFloorEjaculationML += ml;
	this._tempRecordFloorEjaculationML += ml;
	this._todayFloorEjaculationML += ml;
	
	this._recordTotalEjaculationML += ml;
	this._tempRecordTotalEjaculationML += ml;
	this._todayTotalEjaculationML += ml;
	
	this._playthroughRecordTotalEjaculationML += ml;
};	
	
Game_Actor.prototype.addToActorOrgasmRecord = function(ml, consecutiveCount) {
	this._recordOrgasmCount += consecutiveCount;
	this._tempRecordOrgasmCount += consecutiveCount;
	this._todayOrgasmCount += consecutiveCount;
	
	this._recordOrgasmML += ml;
	this._tempRecordOrgasmML += ml;
	this._todayOrgasmML += ml;
	
	if(!this._firstOrgasmDate) this._firstOrgasmDate = Prison.date;
	this._lastOrgasmDate = Prison.date;
	if(consecutiveCount > this._recordMaxConsecutiveOrgasmCount) 
		this._recordMaxConsecutiveOrgasmCount = consecutiveCount;
};

Game_Actor.prototype.addToActorSpecificOrgasmRecord = function() {
	if(!this._justGotHitBySkillType) return;
	//console.log('addToActorSpecificOrgasmRecord: just got hit by skill type ' + this._justGotHitBySkillType);
	
	this._gotOrgasmFromSkillType = this._justGotHitBySkillType;
	
	if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING)) {
		this._recordOrgasmFromPettingCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX)) {
		this._recordOrgasmFromPussySexCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX)) {
		this._recordOrgasmFromAnalSexCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS)) {
		this._recordOrgasmFromKissCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_KISSING)) {
		this._recordOrgasmFromKissCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUNNILINGUS)) {
		this._recordOrgasmFromCunnilingusCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK)) {
		this._recordOrgasmFromTalkCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SIGHT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_SIGHT)) {
		this._recordOrgasmFromSightCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB)) {
		this._recordOrgasmFromHandjobCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING)) {
		this._recordOrgasmFromCockPettingCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB)) {
		this._recordOrgasmFromBlowjobCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK)) {
		this._recordOrgasmFromTittyFuckCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE)) {
		this._recordOrgasmFromPussyCreampieCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE)) {
		this._recordOrgasmFromAnalCreampieCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW)) {
		this._recordOrgasmFromCumSwallowCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE)) {
		this._recordOrgasmFromBukkakeCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING)) {
		this._recordOrgasmFromSpankingCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING)) {
		this._recordOrgasmFromMasochismCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_MASOCHISM)) {
		this._recordOrgasmFromSadismCount++;
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || 
	this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_ANAL) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_ANAL)
	) {
		this._recordOrgasmFromToysCount++;

	}
	
	if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_MASTURBATE) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_ANAL) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_ANAL)) {
		this._recordOrgasmFromMasturbationCount++;
	}		

	this.resetGotHitBySkillType();	
};

Game_Actor.prototype.addToActorAllHolesCreamedRecord = function() {
	if(!this._tempAllHolesCreamed && this._liquidSwallow > 0 && this._liquidCreampiePussy > 0 && this._liquidCreampieAnal > 0) {
		this._recordAllHolesCreamedCount++;
		this._tempAllHolesCreamed = true;
	}
};

Game_Actor.prototype.addToMaxReachedMouthDesireRecord = function() {
	if(!this._tempMaxReached50MouthDesire && this.mouthDesire >= 50) {
		this._recordMaxReached50MouthDesireCount++;
		this._tempMaxReached50MouthDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached75MouthDesire && this.mouthDesire >= 75) {
		this._recordMaxReached75MouthDesireCount++;
		this._tempMaxReached75MouthDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached100MouthDesire && this.mouthDesire >= 100) {
		this._recordMaxReached100MouthDesireCount++;
		this._tempMaxReached100MouthDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached150MouthDesire && this.mouthDesire >= 150) {
		this._recordMaxReached150MouthDesireCount++;
		this._tempMaxReached150MouthDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedBoobsDesireRecord = function() {
	if(!this._tempMaxReached50BoobsDesire && this.boobsDesire >= 50) {
		this._recordMaxReached50BoobsDesireCount++;
		this._tempMaxReached50BoobsDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached75BoobsDesire && this.boobsDesire >= 75) {
		this._recordMaxReached75BoobsDesireCount++;
		this._tempMaxReached75BoobsDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached100BoobsDesire && this.boobsDesire >= 100) {
		this._recordMaxReached100BoobsDesireCount++;
		this._tempMaxReached100BoobsDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached150BoobsDesire && this.boobsDesire >= 150) {
		this._recordMaxReached150BoobsDesireCount++;
		this._tempMaxReached150BoobsDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedButtDesireRecord = function() {
	if(!this._tempMaxReached50ButtDesire && this.buttDesire >= 50) {
		this._recordMaxReached50ButtDesireCount++;
		this._tempMaxReached50ButtDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached75ButtDesire && this.buttDesire >= 75) {
		this._recordMaxReached75ButtDesireCount++;
		this._tempMaxReached75ButtDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached100ButtDesire && this.buttDesire >= 100) {
		this._recordMaxReached100ButtDesireCount++;
		this._tempMaxReached100ButtDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached150ButtDesire && this.buttDesire >= 150) {
		this._recordMaxReached150ButtDesireCount++;
		this._tempMaxReached150ButtDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedPussyDesireRecord = function() {
	if(!this._tempMaxReached50PussyDesire && this.pussyDesire >= 50) {
		this._recordMaxReached50PussyDesireCount++;
		this._tempMaxReached50PussyDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached75PussyDesire && this.pussyDesire >= 75) {
		this._recordMaxReached75PussyDesireCount++;
		this._tempMaxReached75PussyDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached100PussyDesire && this.pussyDesire >= 100) {
		this._recordMaxReached100PussyDesireCount++;
		this._tempMaxReached100PussyDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached150PussyDesire && this.pussyDesire >= 150) {
		this._recordMaxReached150PussyDesireCount++;
		this._tempMaxReached150PussyDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedCockDesireRecord = function() {
	if(!this._tempMaxReached50CockDesire && this.cockDesire >= 50) {
		this._recordMaxReached50CockDesireCount++;
		this._tempMaxReached50CockDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached75CockDesire && this.cockDesire >= 75) {
		this._recordMaxReached75CockDesireCount++;
		this._tempMaxReached75CockDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached100CockDesire && this.cockDesire >= 100) {
		this._recordMaxReached100CockDesireCount++;
		this._tempMaxReached100CockDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
	if(!this._tempMaxReached150CockDesire && this.cockDesire >= 150) {
		this._recordMaxReached150CockDesireCount++;
		this._tempMaxReached150CockDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedAllDesireRecord = function() {
	if(!this._tempMaxReached250TotalDesire && (this.mouthDesire + this.boobsDesire + this.pussyDesire + this.buttDesire + this.cockDesire >= 250)) {
		this._recordMaxReached250TotalDesireCount++;
		this._tempMaxReached250TotalDesire = true;
	}
	if(!this._tempMaxReached375TotalDesire && (this.mouthDesire + this.boobsDesire + this.pussyDesire + this.buttDesire + this.cockDesire >= 375)) {
		this._recordMaxReached375TotalDesireCount++;
		this._tempMaxReached375TotalDesire = true;
	}
	if(!this._tempMaxReached500TotalDesire && (this.mouthDesire + this.boobsDesire + this.pussyDesire + this.buttDesire + this.cockDesire >= 500)) {
		this._recordMaxReached500TotalDesireCount++;
		this._tempMaxReached500TotalDesire = true;
	}
	if(!this._tempMaxReached750TotalDesire && (this.mouthDesire + this.boobsDesire + this.pussyDesire + this.buttDesire + this.cockDesire >= 750)) {
		this._recordMaxReached750TotalDesireCount++;
		this._tempMaxReached750TotalDesire = true;
	}
};

Game_Actor.prototype.addToGuardBattleRecord = function() {
	this._recordGuardBattleCount++;
	this._playthroughRecordGuardBattleCount++;
};
Game_Actor.prototype.hasDoneGuardBattleThisPlaythrough  = function() {
	return this._playthroughRecordGuardBattleCount > 0;
};

Game_Actor.prototype.addToActorManuallyRemovedClitToyRecord = function() { 
	this._recordManuallyRemovedClitToyCount++; 
	this._recordManuallyRemovedToysTotalCount++;
};
Game_Actor.prototype.addToActorManuallyRemovedPussyToyRecord = function() { 
	this._recordManuallyRemovedPussyToyCount++; 
	this._recordManuallyRemovedToysTotalCount++;
};
Game_Actor.prototype.addToActorManuallyRemovedAnalToyRecord = function() { 
	this._recordManuallyRemovedAnalToyCount++; 
	this._recordManuallyRemovedToysTotalCount++;
};

Game_Actor.prototype.addToClitToyInsertedRecord = function(enemy) { 
	this._recordClitToyInsertedCount++; 
	this._tempRecordClitToyInsertedCount++; 
	this._todayClitToyInsertedCount++; 
	
	this._recordTotalToysInsertedCount++;
	this._tempRecordTotalToysInsertedCount++;
	this._todayTotalToysInsertedCount++;
};
Game_Actor.prototype.addToPussyToyInsertedRecord = function(enemy) { 
	this._recordPussyToyInsertedCount++; 
	this._tempRecordPussyToyInsertedCount++; 
	this._todayPussyToyInsertedCount++; 
	
	this._recordTotalToysInsertedCount++;
	this._tempRecordTotalToysInsertedCount++;
	this._todayTotalToysInsertedCount++;
	
	if(this._firstPussySexWantedID === -1 && !this._firstPussySexWasToy && enemy) {
		this._firstPussySexWasToy = true;
		this._firstPussySexWasToyDate = Prison.date;
		this._firstPussySexWasToyName = enemy.name();
		this._firstPussySexWasToyMapID = $gameMap._mapId;
		if(enemy.isWanted) {
			this._firstPussySexWasToyWantedID = enemy.getWantedId();
		}
		else {
			this._firstPussySexWasToyWantedID = $gameParty.addNewWanted(enemy);
		}
		BattleManager._logWindow.displayRemLine(TextManager.actorLostPussyVirginity);
		
		this.removeState(STATE_IS_VIRGIN_ID);
	}
};
Game_Actor.prototype.addToAnalToyInsertedRecord = function(enemy) { 
	this._recordAnalToyInsertedCount++; 
	this._tempRecordAnalToyInsertedCount++;
	this._todayAnalToyInsertedCount++;
	
	this._recordTotalToysInsertedCount++;
	this._tempRecordTotalToysInsertedCount++;
	this._todayTotalToysInsertedCount++;
};

Game_Actor.prototype.addToClitToyUsedByEnemyRecord = function(enemy) { 
	this._recordClitToyUsedByEnemyCount++; 
	this._tempRecordClitToyUsedByEnemyCount++;
	this._todayClitToyUsedByEnemyCount++;
	
	this._recordTotalToysUsedByEnemyCount++;
	this._tempRecordTotalToysUsedByEnemyCount++;
	this._todayTotalToysUsedByEnemyCount++;
};
Game_Actor.prototype.addToPussyToyUsedByEnemyRecord = function(enemy) { 
	this._recordPussyToyUsedByEnemyCount++; 
	this._tempRecordPussyToyUsedByEnemyCount++;
	this._todayPussyToyUsedByEnemyCount++;
	
	this._recordTotalToysUsedByEnemyCount++;
	this._tempRecordTotalToysUsedByEnemyCount++;
	this._todayTotalToysUsedByEnemyCount++;
};
Game_Actor.prototype.addToAnalToyUsedByEnemyRecord = function(enemy) { 
	this._recordAnalToyUsedByEnemyCount++; 
	this._tempRecordAnalToyUsedByEnemyCount++;
	this._todayAnalToyUsedByEnemyCount++;
	
	this._recordTotalToysUsedByEnemyCount++;
	this._tempRecordTotalToysUsedByEnemyCount++;
	this._todayTotalToysUsedByEnemyCount++;
};

Game_Actor.prototype.addToClitToySelfInsertedRecord = function() {
	if(this._tempRecordClitToyInsertedCount === 0) {
		this._recordClitToyInsertedCount++; 
		this._tempRecordClitToyInsertedCount++; 
		this._todayClitToyInsertedCount++; 
		
		this._recordTotalToysInsertedCount++;
		this._tempRecordTotalToysInsertedCount++;
		this._todayTotalToysInsertedCount++;
	}
};
Game_Actor.prototype.addToPussyToySelfInsertedRecord = function() { 
	if(this._tempRecordPussyToyInsertedCount === 0) {
		this._recordPussyToyInsertedCount++; 
		this._tempRecordPussyToyInsertedCount++; 
		this._todayPussyToyInsertedCount++; 
		
		this._recordTotalToysInsertedCount++;
		this._tempRecordTotalToysInsertedCount++;
		this._todayTotalToysInsertedCount++;
	}
};
Game_Actor.prototype.addToAnalToySelfInsertedRecord = function() { 
	if(this._tempRecordAnalToyInsertedCount === 0) {
		this._recordAnalToyInsertedCount++; 
		this._tempRecordAnalToyInsertedCount++;
		this._todayAnalToyInsertedCount++;
		
		this._recordTotalToysInsertedCount++;
		this._tempRecordTotalToysInsertedCount++;
		this._todayTotalToysInsertedCount++;
	}
};

///////////////
// Calculate Sensitivity Rating
/////////////////////

Game_Actor.prototype.calculateMouthSensitivityRating = function() {
	let rating = 0.4;

	if(this.hasPassive(PASSIVE_TALK_MOUTH_TWO_ID) && this._tempRecordTalkedAtAboutMouthPeople > 0)
		rating += Math.min(0.4, this._tempRecordTalkedAtAboutMouthPeople * 0.01);

	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_ONE_ID)) rating += 0.15;

	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) rating += 0.15;

	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_TWO_ID) && this._tempRecordKissedPeople > 0) 
		rating += this._tempRecordKissedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_KISS_COUNT_ONE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_KISS_COUNT_TWO_ID) && this._todayKissedCount > 0) 
		rating += this._todayKissedCount * 0.05;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) {
		if(this.mouthDesire < 100)
			rating += this.mouthDesire / 300;
		else
			rating += 0.3 + ((this.mouthDesire - 100) / 180);
		
	}

	if(this.hasPassive(PASSIVE_BJ_ORGASM_ONE_ID) && this._todayBlowjobPeople > 0) 
		rating += this._todayBlowjobPeople * 0.03;

	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_TWO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) rating += 0.125;
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) rating += 0.125;
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID) && this._tempRecordRimjobCount > 0) 
		rating += this._tempRecordRimjobCount * 0.05;
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_ANAL)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) rating += 0.75;
		else rating += 0.5;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_BLOWJOB_ONE)) rating += 0.25;
	
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID)) {
		rating *= 1.3;
		rating += 0.5;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}
	
	this._mouthSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateBoobsSensitivityRating = function() {
	let rating = 0.4;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID) && this._tempRecordBoobsPettedPeople > 0) 
		rating += this._tempRecordBoobsPettedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID) && this._todayNipplesPettedPeople > 0) 
		rating += this._todayNipplesPettedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID) && this._todayTittyFuckedPeople > 0) 
		rating += this._todayTittyFuckedPeople * 0.05;
		
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) {
		if(this.boobsDesire < 100)
			rating += this.boobsDesire / 300;
		else
			rating += 0.3 + ((this.boobsDesire - 100) / 180);
		
	}
	
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_PUSSY)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) rating += 0.75;
		else rating += 0.5;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_BOOBS_ID)) {
		rating *= 1.3;
		rating += 0.6;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}
	
	this._boobsSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateNipplesSensitivityRating = function() {
	let rating = 0.25;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) {
		if(this.boobsDesire < 100)
			rating += this.boobsDesire / 300;
		else
			rating += 0.3 + ((this.boobsDesire - 100) / 180);
		
	}
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID) && this._todayTittyFuckedPeople > 0) 
		rating += this._todayTittyFuckedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) rating += 0.35;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) rating += 0.25;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID)) rating += 0.35;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID) && this._tempRecordNipplesPettedPeople > 0) 
		rating += this._tempRecordNipplesPettedPeople * 0.05;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID) && this._todayNipplesPettedPeople > 0) 
		rating += this._todayNipplesPettedPeople * 0.02;
	
	if(this.hasPassive(CHARA_CREATE_TWO_NIPPLES_ID)) {
		rating *= 1.3;
		rating += 0.5;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}
	
	this._nipplesSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateClitSensitivityRating = function() {
	let rating = 0.4;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID) && this._tempRecordClitPettedPeople > 0) 
		rating += this._tempRecordClitPettedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_THREE_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_FIRST_CUNNILINGUS_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) {
		if(this.pussyDesire < 100)
			rating += this.pussyDesire / 300;
		else
			rating += 0.3 + ((this.pussyDesire - 100) / 180);
		
	}

	if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_ONE_ID)) rating += 0.15;
	
	
	if(this.hasPassive(CHARA_CREATE_TWO_CLIT_ID)) {
		rating *= 1.3;
		rating += 0.6;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}
	
	this._clitSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculatePussySensitivityRating = function() {
	let rating = 0.15;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) {
		if(this.pussyDesire < 100)
			rating += this.pussyDesire / 300;
		else
			rating += 0.3 + ((this.pussyDesire - 100) / 180);
		
	}
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID) && this._tempRecordPussyPettedPeople > 0) 
		rating += this._tempRecordPussyPettedPeople * 0.05;
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_THREE_ID) && this._todayPussyPettedCount > 0) 
		rating += this._todayPussyPettedCount * 0.02;
	
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FIVE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_ONE_ID) && this._todayPussyFuckedPeople > 0) 
		rating += this._todayPussyFuckedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID)) rating += 0.15;
	
	if(this._liquidCreampiePussy > 0) {
		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID)) rating += 0.3;
		else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) rating += 0.15;
	}
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && this.isBodySlotInserted(PUSSY_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.2;
	}
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_PUSSY)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) rating += 0.75;
		else rating += 0.5;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID)) {
		rating *= 1.3;
		rating += 0.5;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}
	
	this._pussySensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateButtSensitivityRating = function() {
	let rating = 0.4;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_THREE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID) && this._tempRecordButtPettedPeople > 0) 
		rating += this._tempRecordButtPettedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_FOUR_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_FIRST_BUTT_SPANKED_ID)) rating += 0.15;
	
	
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) {
		if(this.buttDesire < 100)
			rating += this.buttDesire / 300;
		else
			rating += 0.3 + ((this.buttDesire - 100) / 180);
		
	}
	
	
	
	if(this.hasPassive(CHARA_CREATE_TWO_BUTT_ID)) {
		rating *= 1.3;
		rating += 0.6;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}

	this._buttSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateAnalSensitivityRating = function() {
	let rating = 0.15;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID)) rating += 0.15;

	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_FOUR_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID) && this._tempRecordAnalPettedPeople > 0) 
		rating += this._tempRecordAnalPettedPeople * 0.05;
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_THREE_ID) && this._todayAnalPettedCount > 0) 
		rating += this._todayAnalPettedCount * 0.02;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_ONE_ID) && this._todayAnalFuckedPeople > 0) 
		rating += this._todayAnalFuckedPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) {
		if(this.buttDesire < 100)
			rating += this.buttDesire / 300;
		else
			rating += 0.3 + ((this.buttDesire - 100) / 180);
		
	}
	
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID) && (this._tempRecordAnalToyInsertedCount > 0 || this._tempRecordAnalToyUsedByEnemyCount > 0)) 
		rating += this._tempRecordAnalToyInsertedCount * 0.06 + this._tempRecordAnalToyUsedByEnemyCount * 0.02;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_TWO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && this.isBodySlotInserted(ANAL_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.2;
	}
	
	if(this._liquidCreampieAnal > 0) {
		if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID)) rating += 0.3;
		else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) rating += 0.15;
	}
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_ANAL)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) rating += 0.75;
		else rating += 0.5;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_ANAL_ID)) {
		rating *= 1.3;
		rating += 0.5;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
		rating += 0.3;
	}
	
	this._analSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateFingerSensitivityRating = function() {
	let rating = 0.1;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_HJ_ORGASM_ONE_ID) && this._tempRecordHandjobPeople > 0) 
		rating += this._tempRecordHandjobPeople * 0.1;
	
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating += 0.25;
	}
	
	this._fingerSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateFootSensitivityRating = function() {
	let rating = 0.3;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) rating += 0.45;
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID) && this._tempRecordFootjobPeople > 0) 
		rating += this._tempRecordFootjobPeople * 0.1;
	
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating += 0.25;
	}
	
	this._footSensitivityRating = Math.min(9.99, rating);
};


Game_Actor.prototype.calculateTalkSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) {
		rating += this.masochismLvl() * 0.07;
		if(this.masochismLvl() > this.sadismLvl()) 
			rating += (this.masochismLvl() - this.sadismLvl()) * 0.03;
	}
	
	if(this.hasPassive(PASSIVE_TALK_PLEASURE_ONE_ID)) rating += 0.25;
	

	
	this._talkSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateSightSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_THREE_ID)) rating += 0.35;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_SIGHT_BOOBS_TWO_ID) && this._todayEnemySawBoobsPeople > 0) 
		rating += Math.min(0.4, this._todayEnemySawBoobsPeople * 0.005);
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID) && this.isNaked())
		rating += 0.25;
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_THREE_ID) && !this.isWearingPanties())
		rating += 0.25;
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID) && this.isNaked()) {
		let charm = this.charm;
		if(charm >= VAR_ACCESSORY_CHARM_REQ_5) {
			rating += VAR_ACCESSORY_CHARM_REQ_3 * 0.005;
			rating += (VAR_ACCESSORY_CHARM_REQ_5 - VAR_ACCESSORY_CHARM_REQ_3) * 0.008;
			rating += (this.charm - VAR_ACCESSORY_CHARM_REQ_5) * 0.01;
		}
		else if(charm >= VAR_ACCESSORY_CHARM_REQ_3) {
			rating += VAR_ACCESSORY_CHARM_REQ_3 * 0.005;
			rating += (this.charm - VAR_ACCESSORY_CHARM_REQ_3) * 0.008;
		}
		else {
			rating += this.charm * 0.005;
		}
	}
	
	
	
	
	this._sightSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculatePussyCreampieSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_TALK_PUSSY_THREE_ID) && this._todayTalkedAtAboutPussyPeople > 0)
		rating += Math.min(0.75, this._todayTalkedAtAboutPussyPeople * 0.07);
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID)) rating += 0.7;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID) && this._tempRecordPussyCreampieML > 0)
		rating += Math.min(0.75, this._tempRecordPussyCreampieML * 0.006);
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID) && this._todayPussyCreampieML > 0)
		rating += Math.min(1.5, this._todayPussyCreampieML * 0.008);
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) rating += 0.3;
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) {
		if(this.pussyDesire < 100)
			rating += this.pussyDesire / 300;
		else
			rating += 0.3 + ((this.pussyDesire - 100) / 180);
		
	}
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.75;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID)) {
		rating *= 1.2;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
	}
	
	this._pussyCreampieSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateAnalCreampieSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_TALK_BUTT_THREE_ID) && this._todayTalkedAtAboutButtPeople > 0)
		rating += Math.min(0.75, this._todayTalkedAtAboutButtPeople * 0.07);
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID)) rating += 0.7;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) 
		rating += this.cockiness * 0.0075;

	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID) && this._todayAnalCreampieMaxML > 0) 
		rating += Math.min(1.5, this._todayAnalCreampieMaxML * 0.008);
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) rating += 0.3;
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) {
		if(this.buttDesire < 100)
			rating += this.buttDesire / 300;
		else
			rating += 0.3 + ((this.buttDesire - 100) / 180);
		
	}
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.75;
	}
	
	
	if(this.hasPassive(CHARA_CREATE_TWO_ANAL_ID)) {
		rating *= 1.2;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
	}
	
	this._analCreampieSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateSwallowSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_TALK_MOUTH_THREE_ID) && this._todayTalkedAtAboutMouthPeople > 0)
		rating += Math.min(0.75, this._todayTalkedAtAboutMouthPeople * 0.07);
	
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID) && this._todaySwallowML > 0)
		rating += Math.min(1.5, this._todaySwallowML * 0.008);
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID) && this._tempRecordBlowjobPeople > 0)
		rating += Math.min(1, this._tempRecordBlowjobPeople * 0.1);
	
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_FOUR_ID)) rating += 0.7;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) rating += 0.3;
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) {
		if(this.mouthDesire < 100)
			rating += this.mouthDesire / 300;
		else
			rating += 0.3 + ((this.mouthDesire - 100) / 180);
		
	}
		
	
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID)) {
		rating *= 1.2;
	}
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
	}
	
	this._swallowSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateBukkakeSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_TALK_BOOBS_THREE_ID) && this._todayTalkedAtAboutBoobsPeople > 0)
		rating += Math.min(0.75, this._todayTalkedAtAboutBoobsPeople * 0.07);
	
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FIVE_ID)) rating += 0.7;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FOUR_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_THREE_ID)) rating += 0.25;
		
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) rating += 0.4;
	if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_ONE_ID)) {
		if(this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID) || this.isBodySlotPenis(BOOBS_ID) || this.isBodySlotPenis(FEET_ID)) 
			rating += 0.2;
		
		if(this.isBodySlotPenis(RIGHT_HAND_ID)) 
			rating *= 1.2;
		if(this.isBodySlotPenis(LEFT_HAND_ID)) 
			rating *= 1.2;
		if(this.isBodySlotPenis(BOOBS_ID)) 
			rating *= 1.2;
		if(this.isBodySlotPenis(FEET_ID)) 
			rating *= 1.2;	
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID)) {
		rating *= 1.1;
	}
	
	this._bukkakeSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateMasochismSensitivityRating = function() {
	let rating = 0.25;
	rating += this.masochismLvl() * 0.05;
	
	if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID)) rating += 0.05;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID)) rating += (100 - this.cockDesire) * 0.002;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_FOUR_ID)) {
		rating += (100 - this.cockDesire) * 0.002;
	}
	else if(this.hasPassive(PASSIVE_COCKINESS_COUNT_TWO_ID)) {
		rating += (100 - this.cockDesire) * 0.001;
	}
	
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_THREE_ID) && this.isConfident) 
		rating += 0.06;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_THUG_TAG))
		rating += 0.08;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_ROGUE_TAG))
		rating += 0.08;
	
	this._masochismSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateSadismSensitivityRating = function() {
	let rating = 0.25;
	rating += this.sadismLvl() * 0.05;
	
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_ONE_ID)) rating += 0.05;
	
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_ONE_ID)) rating += this.cockDesire * 0.002;
	
	if(this.hasPassive(PASSIVE_TAUNT_COUNT_ONE_ID) && this.isConfident) rating += 0.06;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_FOUR_ID)) {
		rating += this.cockiness * 0.002;
	}
	else if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID)) {
		rating += this.cockiness * 0.001;
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_NERD_TAG))
		rating += 0.1;
	
	this._sadismSensitivityRating = Math.min(9.99, rating);
};

Game_Actor.prototype.calculateToySensitivityRating = function(toy) {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_ONE_ID) && (this._todayTotalToysInsertedCount > 0 || this._todayTotalToysUsedByEnemyCount > 0))
		rating += Math.min(1, this._todayTotalToysInsertedCount * 0.03 + this._todayTotalToysUsedByEnemyCount * 0.01);
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_ONE_ID))
		rating += 0.25;
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_TWO_ID) && (this._tempRecordTotalToysInsertedCount > 0 || this._tempRecordTotalToysUsedByEnemyCount > 0))
		rating += Math.min(1, this._tempRecordTotalToysInsertedCount * 0.05 + this._tempRecordTotalToysUsedByEnemyCount * 0.02);
	
	
	return Math.min(9.99, rating);
};



///////////////
// Calculate Skill Rating
/////////////////////

Game_Actor.prototype.calculateKissSkillRating = function() {
	let rating = 2;
	if(this._firstKissWantedID >= 0) rating -= 1;

	rating += this.kissLvl() * 0.1;
	
	this._kissSkillRating = rating;
};

Game_Actor.prototype.calculatePettingSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_THREE_ID)) rating += 0.7;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) rating += 0.25;
	
	this._pettingSkillRating = rating;
};

Game_Actor.prototype.calculateHandjobSkillRating = function() {
	let rating = 1;
	
	rating += this.handjobLvl() * 0.1;
	
	this._handjobSkillRating = rating;
};

Game_Actor.prototype.calculateBlowjobSkillRating = function() {
	let rating = 1;
	
	rating += this.blowjobLvl() * 0.1;
	
	this._blowjobSkillRating = rating;
};

Game_Actor.prototype.calculateRimjobSkillRating = function() {
	let rating = 1;
	
	rating += this.rimjobLvl() * 0.1;
	
	this._rimjobSkillRating = rating;
};

Game_Actor.prototype.calculateFootjobSkillRating = function() {
	let rating = 1;
	
	rating += this.footjobLvl() * 0.1;
	
	this._footjobSkillRating = rating;
};

Game_Actor.prototype.calculateTittyFuckSkillRating = function() {
	let rating = 1;
	
	rating += this.tittyFuckLvl() * 0.1;
	
	this._tittyFuckSkillRating = rating;
};

Game_Actor.prototype.calculatePussySexSkillRating = function() {
	let rating = 3;
	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) rating -= 2;
	
	rating += this.pussySexLvl() * 0.1;
	
	this._pussySexSkillRating = Math.max(1, rating);
};

Game_Actor.prototype.calculateAnalSexSkillRating = function() {
	let rating = 1;
	
	rating += this.analSexLvl() * 0.1;
	
	this._analSexSkillRating = rating;
};

Game_Actor.prototype.calculateMasturbateSkillRating = function() {
	let rating = 0.6;
	rating += this.masturbateLvl() * 0.2;
	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) rating += 0.25;
	
	this._masturbateSkillRating = rating;
};

///////////
// Calculate Skill Lvl
/////////////////////

Game_Actor.prototype.calculateKissSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) level += 1;
	
	this._baseKissLvl = level;
};
Game_Actor.prototype.calculatePettingSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_THREE_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_THREE_ID)) level += 1;
	
	this._basePettingLvl = level;
};
Game_Actor.prototype.calculateHandjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) level += 5;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) level += 1;
	
	this._baseHandjobLvl = level;
};
Game_Actor.prototype.calculateBlowjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) level += 5;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) level += 1;
	
	this._baseBlowjobLvl = level;
};
Game_Actor.prototype.calculateRimjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_TWO_ID)) level += 1;
	
	
	this._baseRimjobLvl = level;
};
Game_Actor.prototype.calculateFootjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID)) level += 1;
	
	this._baseFootjobLvl = level;
};
Game_Actor.prototype.calculateTittyFuckSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) level += 1;
	
	this._baseTittyFuckLvl = level;
};
Game_Actor.prototype.calculatePussySexSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID)) level += 5;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) level += 1;
	
	
	this._basePussySexLvl = level;
};
Game_Actor.prototype.calculateAnalSexSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID)) level += 5;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) level += 1;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) level += 4;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) level += 1;
	
	this._baseAnalSexLvl = level;
};
Game_Actor.prototype.calculateMasturbateSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) level += 2;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_ONE_ID)) level++;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID)) level++;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID)) level++;
	
	this._baseMasturbateLvl = level;
};

Game_Actor.prototype.calculateMasochismSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) level += 2;
	
	if(this.hasPassive(PASSIVE_TALK_ORGASM_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID)) level++;
	
	this._baseMasochismLvl = level;
};

Game_Actor.prototype.calculateSadismSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) level += 2;
	
	if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID)) level += 1;
	if(this.hasPassive(PASSIVE_COCKKICK_COUNT_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_COCKKICK_COUNT_ONE_ID)) level += 1;
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_ONE_ID)) level += 1;
	
	this._baseSadismLvl = level;
};

/////////
// Skill Cost
//////////////

Game_Actor.prototype.passiveKissSkillCostRate = function() {
	let costRate = 2;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) costRate = 1.6;
	
	return costRate;
};

Game_Actor.prototype.passiveHandjobSkillCostRate = function() {
	let costRate = 3;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_FIRST_HJ_ID)) costRate = 2;
	
	return costRate;
};

Game_Actor.prototype.passiveBlowjobSkillCostRate = function() {
	let costRate = 5;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) costRate = 1.6;
	else if(this.hasPassive(PASSIVE_FIRST_BJ_ID)) costRate = 2;
	else if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) costRate = 3;
	
	return costRate;
};

Game_Actor.prototype.passiveRimjobSkillCostRate = function() {
	let costRate = 4;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) costRate = 2;
	else if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) costRate = 3;
	
	return costRate;
};

Game_Actor.prototype.passiveFootjobSkillCostRate = function() {
	let costRate = 3;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) costRate = 2;
	
	return costRate;
};


Game_Actor.prototype.passiveTittyFuckSkillCostRate = function() {
	let costRate = 2;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) costRate = 1.6;
	
	return costRate;
};

Game_Actor.prototype.passivePussySexSkillCostRate = function() {
	let costRate = 20;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) costRate = 1.75;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) costRate = 2;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) costRate = 3;
	else if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) costRate = 5;
	
	return costRate;
};

Game_Actor.prototype.passiveAnalSexSkillCostRate = function() {
	let costRate = 10;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) costRate = 1.75;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) costRate = 2;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) costRate = 3;
	else if(this.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) costRate = 5;
	
	return costRate;
};

///////
// Passive Param
//////////

Game_Actor.prototype.passiveParamBonus = function(paramId) {
	let paramBonus = 0;

	if(paramId === PARAM_CHARM_ID) {
		if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID) && this._tempRecordOrgasmCount > 0) 
			paramBonus += Math.round(this._tempRecordOrgasmCount * 1.4);
		
		if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FOUR_ID) && this._tempRecordKissedPeople > 0) 
			paramBonus += Math.round(this._tempRecordKissedPeople * 1.4);	
		
		if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) 
			paramBonus += 1;
		
		
		if(this.hasPassive(PASSIVE_FIRST_FACE_BUKKAKE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_ONE_ID) && this.getCurrentBukkakeTotal() > 0) 
			paramBonus += Math.min(8, Math.ceil(this.getCurrentBukkakeTotal() / 28));
		
		if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) 
			paramBonus += Math.min(10, Math.round(this._tempRecordTittyFuckedPeople * 0.8));

		if(this.hasPassive(PASSIVE_TOYS_PLEASURE_TWO_ID) && this.isWearingAnyToy()) {
			if(this.isWearingClitToy()) paramBonus++;
			if(this.isWearingPussyToy()) paramBonus++;
			if(this.isWearingAnalToy()) paramBonus++;
		}

	}
	else if(paramId === PARAM_MIND_ID) {
		if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) paramBonus += 2;
		else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_TAUNT_COUNT_THREE_ID)) paramBonus += 3;
		else if(this.hasPassive(PASSIVE_TAUNT_COUNT_TWO_ID)) paramBonus += 2;
		else if(this.hasPassive(PASSIVE_TAUNT_COUNT_ONE_ID)) paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_ONE_ID)) paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_TWO_ID)) paramBonus += 3;
		else if(this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_ONE_ID)) paramBonus += 2;
		else if(this.hasPassive(PASSIVE_FIRST_EJACULATION_ID)) paramBonus += 1;
	}
	else if(paramId === PARAM_AGILITY_ID) {
		if(this.hasPassive(PASSIVE_FIRST_BUKKAKE_ID) && this.getCurrentBukkakeTotal() > 0) 
			paramBonus -= Math.min(20, Math.ceil(this.getCurrentBukkakeTotal() / 15));
		
		if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID)) 
			paramBonus += 1;
		
	}
	else if(paramId === PARAM_MAXSTAMINA_ID) {
		if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) 
			paramBonus += 100;
		else if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_ONE_ID)) 
			paramBonus += 50;
		
		if(this.hasPassive(PASSIVE_FALLEN_COUNT_ONE_ID)) 
			paramBonus += 50;
	}
	else if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID) && this._tempRecordOrgasmCount > 0) 
			paramBonus -= this._tempRecordOrgasmCount;
		if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID) && this._todayOrgasmCount > 0) 
			paramBonus -= this._todayOrgasmCount;
	}
	else if(paramId === PARAM_ENDURANCE_ID) {
		if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID) && this._todayPussyFuckedPeople > 0) 
			paramBonus += Math.min(12, Math.round(this._todayPussyFuckedPeople * 0.4));
	}
	else if(paramId === PARAM_STRENGTH_ID) {
		if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_SADISM_PLEASURE_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_TWO_ID)) 
			paramBonus += 2;
		else if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) 
			paramBonus += 2;
		else if(this.hasPassive(PASSIVE_COCKKICK_COUNT_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID) && this._todayAnalFuckedPeople > 0) 
			paramBonus += Math.min(12, Math.round(this._todayAnalFuckedPeople * 0.4));
		if(this.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) 
			paramBonus += 1;

		if(this.hasPassive(PASSIVE_FIRST_BUTT_SPANKED_ID)) 
			paramBonus += 1;
	}
	else if(paramId === PARAM_DEXTERITY_ID) {
		if(this.hasPassive(PASSIVE_FIRST_BJ_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_FIRST_TITTYFUCK_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_FIRST_HJ_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID) && this._todayTittyFuckedPeople > 0) 
			paramBonus += Math.min(12, Math.round(this._todayTittyFuckedPeople * 0.5));
	}
	
	
    return paramBonus;
};

Game_Actor.prototype.passiveParamRate = function(paramId) {
	let passiveRate = 1;
	if(paramId === PARAM_STRENGTH_ID) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_ORC_TAG)) 
			passiveRate *= 0.95;
		
		if(this.hasPassive(PASSIVE_FIRST_ANAL_CREAMPIE_ID) && this._tempRecordAnalCreampieML > 0)
			passiveRate *= 1 - Math.min(0.25, (this._tempRecordAnalCreampieML / 12 / 100));
		
	}
	else if(paramId === PARAM_AGILITY_ID) {
		if(this.hasPassive(PASSIVE_FIRST_PUSSY_CREAMPIE_ID) && this._tempRecordPussyCreampieML > 0)
			passiveRate *= 1 - Math.min(0.25, (this._tempRecordPussyCreampieML / 12 / 100));
		if(this.hasPassive(PASSIVE_FIRST_BUKKAKE_ID) && this.getCurrentBukkakeTotal() > 0)
			passiveRate *= 1 - Math.min(0.25, Math.ceil(this.getCurrentBukkakeTotal() / 24 / 100));
	}
	else if(paramId === PARAM_ENDURANCE_ID) {
		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID) && this._tempRecordPussyCreampieML > 0)
			passiveRate *= 1 - Math.min(0.25, (this._tempRecordPussyCreampieML / 16 / 100));
		
	}
	else if(paramId === PARAM_MIND_ID) {
		if(this.hasPassive(PASSIVE_TALK_PLEASURE_TWO_ID) && this._tempRecordTalkedAtPeople > 0)
			passiveRate *= 1 - Math.min(0.5, this._tempRecordTalkedAtPeople * 0.02);
		if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID) && this._tempRecordOrgasmPresencePeople > 0)
			passiveRate *= 1 - Math.min(0.5, this._tempRecordOrgasmPresencePeople * 0.006);
		if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_THREE_ID) && this._tempRecordDoublePenetrationCount > 0)
			passiveRate *= 1 - Math.min(0.5, this._tempRecordDoublePenetrationCount * 0.033);
		if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_TWO_ID) && Karryn.wasDefeatedYesterday()) 
			passiveRate *= 0.75;
		if(this.hasPassive(PASSIVE_FIRST_SWALLOW_ID) && this._liquidSwallow > 0)
			passiveRate *= 1 - Math.min(0.5, this._liquidSwallow * 0.001);
		if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID) && this._todayBlowjobCount > 0)
			passiveRate *= 1 - Math.min(0.5, this._todayBlowjobCount * 0.01);
		if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_THREE_ID))
			passiveRate *= 0.9;
	}
	else if(paramId === PARAM_CHARM_ID) {
		if(this.isInMasturbationInBattlePose()) { 
			if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) 
				passiveRate *= 1.15;
		}
		if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID) && this.isBodySlotPenis(MOUTH_ID)) 
			passiveRate *= 1.1;
	}
	
	
	
	return Math.max(0.01, passiveRate);
};

Game_Actor.prototype.passiveXParamPlus = function(id) {
	let passivePlus = 0;
	
	if(id === XPARAM_EN_REGEN_ID) {
		if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_TWO_ID) && this._liquidCreampiePussy > 0)
			passivePlus += Math.min(0.04, (Math.ceil(this._liquidCreampiePussy / 42) / 100));
	}
	else if(id === XPARAM_STA_REGEN_ID) {
		if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_TWO_ID) && this._liquidSwallow > 0)
			passivePlus += Math.min(0.04, (Math.ceil(this._liquidSwallow / 36)) / 100);
		if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_TWO_ID) && this.getCurrentBukkakeTotal() > 0)
			passivePlus += Math.min(0.04, (Math.ceil(this.getCurrentBukkakeTotal() / 42)) / 100);
	}
	else if(id === XPARAM_GRAZE_ID) {
		if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_THREE_ID) && this._tempRecordAnalCreampieML > 0)
			passivePlus -= Math.min(0.1, (Math.ceil(this._tempRecordAnalCreampieML / 22)) / 100);
		
	}
	
	
	return passivePlus;
};

Game_Actor.prototype.passiveXParamRate = function(id) {
	let passiveRate = 1;
	
	if(id === XPARAM_EVA_ID) {
		if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID) && this._tempRecordFootjobPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordFootjobPeople * 0.03);
		if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID) && this._todayBoobsPettedPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._todayBoobsPettedPeople * 0.01);
	
	}
	else if(id === XPARAM_HIT_ID) {
		if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID))
			passiveRate *= 0.9;
		if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID))
			passiveRate *= 0.9;
		if(this.hasPassive(PASSIVE_FIRST_FACE_BUKKAKE_ID) && this._liquidBukkakeFace > 0)
			passiveRate *= 1 - Math.min(0.33, this._liquidBukkakeFace / 12 / 100);
		if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID) && this._tempRecordCunnilingusCount > 0) 
			passiveRate *= 1 - Math.min(0.33, this._tempRecordCunnilingusCount * 0.03);
	}
	else if(id === XPARAM_CRIT_EVA_ID) {
		if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_THREE_ID) && this.isInRestrainedPose())
			passiveRate *= 0.8;
		if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_THREE_ID) && this._tempRecordTriplePenetrationCount > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordTriplePenetrationCount * 0.03);
		if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_ONE_ID) && (this._tempRecordPussyToyInsertedCount > 0 || this._tempRecordPussyToyUsedByEnemyCount > 0))
			passiveRate *= 1 - Math.min(0.33, this._tempRecordPussyToyInsertedCount * 0.03 + this._tempRecordPussyToyUsedByEnemyCount * 0.01);
		if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID) && this._tempRecordKissedCount > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordKissedCount * 0.015);
	}
	else if(id === XPARAM_CRIT_ID) {
		if(this.hasPassive(PASSIVE_FIRST_BUTT_SPANKED_ID) && this._tempRecordButtSpankedCount > 0)
			passiveRate *= 1 + Math.min(0.33, this._tempRecordButtSpankedCount * 0.015);
	
	}
	
	
	return passiveRate;
};

Game_Actor.prototype.passiveDebuffXParamRate = function(id) {
	let passiveRate = 1;
	
	if(this.isHorny) {
		if(this.hasPassive(PASSIVE_HORNY_COUNT_THREE_ID) && 
		(id === XPARAM_HIT_ID || id === XPARAM_EVA_ID)) {
			passiveRate *= 0.75;
		}
	}
	
	if(this.isOffBalance && id === XPARAM_EVA_ID) {
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_TWO_ID))
			passiveRate *= 0.65;
		else
			passiveRate *= 0.75;
	}
	
	return passiveRate;
};

Game_Actor.prototype.passiveSParamRate = function(id) {
	let passiveRate = 1;
	
	if(id === SPARAM_WPATK_ID) {
		if(this.hasPassive(PASSIVE_TALK_ORGASM_TWO_ID) && this._tempRecordTalkedAtPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordTalkedAtPeople * 0.005);
		else if(this.hasPassive(PASSIVE_TALK_PEOPLE_ONE_ID) && this._tempRecordTalkedAtPeople > 0)
			passiveRate *= 1 + Math.min(0.25, this._tempRecordTalkedAtPeople * 0.008);
		if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID))
			passiveRate *= 1.05;
		if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_THREE_ID))
			passiveRate *= 0.9;
		if(this.hasPassive(PASSIVE_SADISM_ORGASM_TWO_ID) && this._todaySubduedEnemiesWithAttack > 0)
			passiveRate *= 1 + Math.min(0.33, this._todaySubduedEnemiesWithAttack * 0.004);
		if(this.hasPassive(PASSIVE_SPANKING_ORGASM_ONE_ID) && this._todayButtSpankedPeople > 0)
			passiveRate *= 1 + Math.min(0.33, this._todayButtSpankedPeople * 0.007);
		if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FIVE_ID) && this._todayPussyFuckedCount > 0)
			passiveRate *= 1 - Math.min(0.33, this._todayPussyFuckedCount * 0.005);
		if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID) && this._tempRecordPussyFuckedPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordPussyFuckedPeople * 0.008);
		
	}
	else if(id === SPARAM_WPDEF_ID) {
		if(this.hasPassive(PASSIVE_SIGHT_ORGASM_TWO_ID) && this._tempRecordEnemySawPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordEnemySawPeople * 0.005);
		else if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_ONE_ID) && this._tempRecordEnemySawPeople > 0)
			passiveRate *= 1 + Math.min(0.25, this._tempRecordEnemySawPeople * 0.008);
		
		if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID) && this._todayAnalFuckedPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._todayAnalFuckedPeople * 0.005);
		if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID) && this._tempRecordAnalFuckedPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordAnalFuckedPeople * 0.008);
		if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID) && this._tempRecordButtPettedPeople > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordButtPettedPeople * 0.005);
		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID) && this._tempRecordPussyCreampieML > 0)
			passiveRate *= 1 - Math.min(0.33, this._tempRecordPussyCreampieML / 14 / 100);
		
		
	}
	else if(id === SPARAM_WP_REGEN_ID) {
		if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID))
			passiveRate *= 0.9;
	}
	else if(id === SPARAM_SSC_ID && DEBUG_MODE) {
		if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_TWO_ID))
			passiveRate *= 0.95;
	}
	
	
	return passiveRate;
};

Game_Actor.prototype.passiveDebuffSParamRate = function(id) {
	let passiveRate = 1;
	
	if(this.isOffBalance && (id === SPARAM_WPATK_ID || id === SPARAM_WPDEF_ID)) {
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_TWO_ID))
			passiveRate *= 0.75;
		else
			passiveRate *= 0.85;
	}
	
	if(id === SPARAM_WPATK_ID && !this.isUsingHalberd() && this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID) && this._tempRecordSexPose_KickCounterCount > 0) 
		passiveRate *= 1 - Math.min(0.33, this._tempRecordSexPose_KickCounterCount * 0.033);
	
	
	return passiveRate;
};

//Critical Damage
Game_Actor.prototype.passiveCriticalDamageBonus = function() {
	let bonus = 0;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_THREE_ID))
		bonus += this._todayFootjobPeople * 0.05;
	
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID) && (this._tempRecordAnalToyInsertedCount > 0 || this._tempRecordAnalToyUsedByEnemyCount > 0)) 
		bonus -= Math.min(0.5, (this._tempRecordAnalToyInsertedCount * 0.03 + this._tempRecordAnalToyUsedByEnemyCount * 0.01));
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID) && (this._tempRecordTotalToysInsertedCount > 0 || this._tempRecordTotalToysUsedByEnemyCount > 0)) 
		bonus += Math.min(0.5, (this._tempRecordTotalToysInsertedCount * 0.02 + this._tempRecordTotalToysUsedByEnemyCount * 0.005));
	
	
	return bonus;
}

//////
// Element Rate
/////////////


Game_Actor.prototype.karrynPassiveCombatElementRate = function(elementId) {
	let elementBonus = 0;

	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID) && this._tempRecordOrgasmCount > 0) 
		elementBonus += this._tempRecordOrgasmCount * 0.02;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID) && this._todayOrgasmCount > 0) 
		elementBonus += this._todayOrgasmCount * 0.01;

	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID) && this._todayRimjobPeople > 0)
		elementBonus += this._todayRimjobPeople * 0.03;
	
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_TWO_ID) && this._todaySubduedEnemiesWithAttack > 0)
		elementBonus -= Math.min(0.3, this._todaySubduedEnemiesWithAttack * 0.005);
	
	if(elementId === ELEMENT_SLASH_ID) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_ROGUE_TAG)) {
			elementBonus += 0.1;
		}
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_WEREWOLF_TAG)) {
			elementBonus += 0.1;
		}
	}
	else if(elementId === ELEMENT_PIERCE_ID) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_GOBLIN_TAG)) {
			elementBonus += 0.1;
		}
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_SLIME_TAG)) {
			elementBonus += 0.1;
		}
	}
	else if(elementId === ELEMENT_BLUNT_ID) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_THUG_TAG)) {
			elementBonus += 0.1;
		}
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_YETI_TAG)) {
			elementBonus += 0.1;
		}
	}

	return elementBonus;
};

Game_Actor.prototype.karrynPassiveTalkElementRate = function() { //Talk Resist
	let elementBonus = 0;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID) && this._tempRecordOrgasmCount > 0) 
		elementBonus += this._tempRecordOrgasmCount * 0.04;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID) && this._todayOrgasmCount > 0) 
		elementBonus += this._todayOrgasmCount * 0.02;
	
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_THREE_ID)) elementBonus += 0.3;
	else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) elementBonus += 0.15;
	
	if(this.hasPassive(PASSIVE_TALK_ORGASM_ONE_ID)) elementBonus += 0.15;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) elementBonus += 0.14;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_THUG_TAG)) 
		elementBonus += 0.08;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) 
		elementBonus += 0.07;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) 
		elementBonus += 0.06;
	
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_ONE_ID) && this._todayDoublePenetrationCount > 0) 
		elementBonus += this._todayDoublePenetrationCount * 0.02;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID) && this._todaySexPose_KickCounterCount > 0) 
		elementBonus += this._todaySexPose_KickCounterCount * 0.02;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID) && this._todayRimjobPeople > 0)
		elementBonus += this._todayRimjobPeople * 0.01;
	if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID) && this._tempRecordBlowjobPeople > 0)
		elementBonus += this._tempRecordBlowjobPeople * 0.03;
	
	
	
	if(this.isInDownFallDownPose()) {
		if(this.hasPassive(PASSIVE_FALLEN_COUNT_THREE_ID)) elementBonus += 0.16;
		else if(this.hasPassive(PASSIVE_FALLEN_COUNT_ONE_ID)) elementBonus += 0.08;
	}
	
	if(this.isOffBalance) {
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_TWO_ID)) elementBonus += 0.12;
		else if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_ONE_ID)) elementBonus += 0.06;
	}
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) elementBonus += 0.06;
	if(this.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) elementBonus += 0.1;
	
	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) elementBonus += 0.1;
	
	


	if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) elementBonus += 0.06;
	


	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) elementBonus += 0.07;
	

	
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_ONE_ID) && this.isNotInRestrainedPose()) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_ONE_ID) && (Prison.currentlyPrisonLevelThree() || Prison.currentlyPrisonLevelFour() || Prison.currentlyPrisonLevelFive())) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_TWO_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID)) elementBonus += 0.06;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) elementBonus += 0.06;
	
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_THREE_ID)) 
		elementBonus += this.cockiness * 0.002;
	
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) 
			elementBonus += 0.06;
	}
	
	
	return elementBonus;
};

Game_Actor.prototype.karrynPassiveSightElementRate = function() { //Sight Resist
	let elementBonus = 0;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID) && this._tempRecordOrgasmCount > 0) 
		elementBonus += this._tempRecordOrgasmCount * 0.04;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID) && this._todayOrgasmCount > 0) 
		elementBonus += this._todayOrgasmCount * 0.02;
	
	if(this.hasPassive(PASSIVE_TALK_BOOBS_TWO_ID) && this._tempRecordTalkedAtAboutBoobsPeople > 0)
		elementBonus += Math.min(0.3, this._tempRecordTalkedAtAboutBoobsPeople * 0.015);
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) elementBonus += 0.14;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_ONE_ID) && this._tempRecordEnemySawPeople > 0)
		elementBonus += Math.min(0.4, this._tempRecordEnemySawPeople * 0.01);
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_ROGUE_TAG)) 
		elementBonus += 0.08;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID) && (this._tempRecordTotalToysInsertedCount > 0 || this._tempRecordTotalToysUsedByEnemyCount > 0))
		elementBonus += this._tempRecordTotalToysInsertedCount * 0.3 + this._tempRecordTotalToysUsedByEnemyCount * 0.1;
	
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID)) elementBonus += 0.12;
	else if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID) && this._todayRimjobPeople > 0)
		elementBonus += this._todayRimjobPeople * 0.01;
	

	
	if(this.isInDownFallDownPose()) {
		if(this.hasPassive(PASSIVE_FALLEN_COUNT_THREE_ID)) elementBonus += 0.16;
		else if(this.hasPassive(PASSIVE_FALLEN_COUNT_ONE_ID)) elementBonus += 0.08;
	}
	
	if(this.isOffBalance) {
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_TWO_ID)) elementBonus += 0.12;
		else if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_ONE_ID)) elementBonus += 0.06;
	}
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID) && this._tempRecordTittyFuckedPeople > 0)
		elementBonus += this._tempRecordTittyFuckedPeople * 0.03;
	
	

	if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) elementBonus += 0.06;

	
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) 
			elementBonus += 0.06;
	}
	
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_ONE_ID) && this.isNotInRestrainedPose()) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_ONE_ID) && (Prison.currentlyPrisonLevelThree() || Prison.currentlyPrisonLevelFour() || Prison.currentlyPrisonLevelFive())) elementBonus += 0.06;

	return elementBonus;
};

Game_Actor.prototype.karrynPassiveStripElementRate = function() { //Strip Resist
	let elementBonus = -0.45;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID) && this._tempRecordOrgasmCount > 0) 
		elementBonus += this._tempRecordOrgasmCount * 0.04;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID) && this._todayOrgasmCount > 0) 
		elementBonus += this._todayOrgasmCount * 0.02;
	
	if(this.hasPassive(PASSIVE_SIGHT_ORGASM_ONE_ID)) elementBonus += 0.15;
	
	if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_TWO_ID) && this._todayEnemySawPeople > 0) 
		elementBonus += Math.min(0.6, this._todayEnemySawPeople * 0.01);

	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID) && this.isWet) elementBonus += 0.12;
	else if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_ONE_ID) && this.isWet) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_TWO_ID)) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) {
		elementBonus += 0.06;
	}
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID) && this._todaySexPose_KickCounterCount > 0) 
		elementBonus += this._todaySexPose_KickCounterCount * 0.02;
	
	if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_THREE_ID)) elementBonus += 0.14;
	else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_TWO_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID) && this._todayRimjobPeople > 0)
		elementBonus += this._todayRimjobPeople * 0.01;
	

	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) 
		elementBonus += 0.06;
	
	if(this.isInDownFallDownPose()) 
		if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) elementBonus += 0.08;
	
	if(this.isOffBalance) 
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_THREE_ID)) elementBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_TWO_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID) && this._todayClitPettedPeople > 0) 
		elementBonus += this._todayClitPettedPeople * 0.02;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID) && this._todayBoobsPettedPeople > 0) 
		elementBonus += this._todayBoobsPettedPeople * 0.02;
	

	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_THREE_ID)) elementBonus += 0.14;
	else if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_ONE_ID)) elementBonus += 0.07;
	
	

	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_TWO_ID)) 
		elementBonus += Math.min(0.8, (Math.ceil(this.getCurrentBukkakeTotal() / 8)) / 100);
	
	return elementBonus;
};

Game_Actor.prototype.karrynPassivePettingElementRate = function() { //Petting Resist
	let elementBonus = -0.4;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID) && this._tempRecordOrgasmCount > 0) 
		elementBonus += this._tempRecordOrgasmCount * 0.04;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID) && this._todayOrgasmCount > 0) 
		elementBonus += this._todayOrgasmCount * 0.02;
	
	if(this.hasPassive(PASSIVE_TALK_BUTT_TWO_ID) && this._tempRecordTalkedAtAboutButtPeople > 0)
		elementBonus += Math.min(0.4, this._tempRecordTalkedAtAboutButtPeople * 0.015);
	if(this.hasPassive(PASSIVE_TALK_PLEASURE_ONE_ID) && this._tempRecordTalkedAtPeople > 0)
		elementBonus += Math.min(0.4, this._tempRecordTalkedAtPeople * 0.02);
	
	if(this.hasPassive(PASSIVE_SIGHT_BUTT_TWO_ID) && this._todayEnemySawButtPeople > 0) 
		elementBonus += Math.min(0.4, this._todayEnemySawButtPeople * 0.01);
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_ONE_ID) && this.isNaked()) 
		elementBonus += 0.14;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_ONE_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID)) 
		elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_THREE_ID)) elementBonus += 0.14;
	else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_ONE_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID) && this._todayRimjobPeople > 0)
		elementBonus += this._todayRimjobPeople * 0.01;
	
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) 
		elementBonus += 0.06;
	
	if(this.isInDownFallDownPose()) 
		if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) elementBonus += 0.08;
	
	if(this.isOffBalance) 
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_THREE_ID)) elementBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_FOUR_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID) && (this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)))
		elementBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) elementBonus += 0.06;
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) elementBonus += 0.11;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) elementBonus += 0.06;
	

	if(this.hasPassive(PASSIVE_HJ_ORGASM_ONE_ID)) elementBonus += 0.06;

	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) elementBonus += 0.11;
	

	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) elementBonus += 0.06;

	
	
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_ONE_ID) && this.isInRestrainedPose()) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_TWO_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) elementBonus += 0.07;
	}
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID) && this.isBodySlotInserted(MOUTH_ID)) 
		elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_TWO_ID)) {
		elementBonus += this.cockiness * 0.0015;
	}
	
	
	return elementBonus;
};

Game_Actor.prototype.karrynPassiveSexElementRate = function() { //Sex Resist
	let elementBonus = -0.4;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID) && this._tempRecordOrgasmCount > 0) 
		elementBonus += this._tempRecordOrgasmCount * 0.04;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID) && this._todayOrgasmCount > 0) 
		elementBonus += this._todayOrgasmCount * 0.02;
	
	if(this.hasPassive(PASSIVE_TALK_COCK_ONE_ID) && this._tempRecordTalkedAtAboutCockPeople > 0)
		elementBonus += Math.min(0.3, this._tempRecordTalkedAtAboutCockPeople * 0.0133);
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID)) elementBonus += 0.32;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) elementBonus += 0.24;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) elementBonus += 0.16;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) elementBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) 
		elementBonus += 0.08;
		
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_YETI_TAG)) 
		elementBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID)) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		elementBonus += 0.12;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID) && this._todayRimjobPeople > 0)
		elementBonus += this._todayRimjobPeople * 0.012;
	
	
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID)) elementBonus += 0.14;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID)) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_THREE_ID) && this._todayCockPettedCount > 0) 
		elementBonus += this._todayCockPettedCount * 0.01;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID) && (this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)))
		elementBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) elementBonus += 0.06;

	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) elementBonus += 0.14;

	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) elementBonus += 0.12;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) elementBonus += 0.06;

	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) elementBonus += 0.12;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) elementBonus += 0.06;

	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_THREE_ID) && this.isInRestrainedPose()) 
		elementBonus += 0.1;
	
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) 
			elementBonus += 0.1;
	}
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_TWO_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID)) 
		elementBonus += 0.1;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_ONE_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID) && this.isBodySlotInserted(MOUTH_ID)) 
		elementBonus += 0.1;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_FOUR_ID) && this._tempRecordButtSpankedCount > 0) 
		elementBonus += this._tempRecordButtSpankedCount * 0.015;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_TWO_ID)) {
		elementBonus += this.cockiness * 0.0015;
	}
	
	return elementBonus;
};

/////////////
// Pleasure
//////////////

Game_Actor.prototype.postBattlePleasure = function() { 
	let multipler = 0.9;
	let beforeOrgasmPoint = this.orgasmPoint() * multipler;
	let currentlyAroused = this.isAroused();
	this.setPleasure(Math.min(this.pleasure * multipler, beforeOrgasmPoint));
	
	if(currentlyAroused && this.masturbateLvl() >= 2) 
		this.setPleasure(Math.max(this.pleasure, this.arousalPoint()));
	
	this._orgasmCallQueuedUp = false;
};

//TRG = Pleasure/Per turn in regen phase
Game_Actor.prototype.bonusPpt = function() { 
	let totalValue = 0;
	let sightValue = 0;
	let toyValue = 0;
	
	//////////
	// Sight Value
	if(this.isNaked()) {
		let nakedValue = 0;
		if(this.hasPassive(PASSIVE_SIGHT_ORGASM_ONE_ID)) {
			nakedValue += 8;
		}
		if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_TWO_ID)) {
			nakedValue += 8;
		}
		if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID)) {
			nakedValue += 8;
		}
		
		if(this.isInSexPose()) nakedValue *= 0;
		else nakedValue *= this.elementRate(ELEMENT_SIGHT_ID);
		for(let i = 0; i < $gameTroop.membersNeededToBeSubdued().length; i++) {
			sightValue += nakedValue * (1 + $gameTroop.membersNeededToBeSubdued()[i].sightLvl() * 0.1)
		}
	}
	
	//////////
	// Toy Value
	
	let clitToyValue = 0;
	let pussyToyValue = 0;
	let analToyValue = 0;
	
	if(this.isWearingClitToy_PinkRotor()) {
		let clitSensivity = this.clitSensitivity();
		let clitMulti = 1;
		
		if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_TWO_ID)) {
			clitMulti = 4;
		}
		else if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_ONE_ID)) {
			clitMulti = 2.5;
		}
	
		clitToyValue = clitSensivity * this._toyValue_clitToy * clitMulti;
		if(!this.isAroused()) clitToyValue *= 0.8;
	}
	if(this.isWearingPussyToy_PenisDildo()) {
		let pussySensivity = this.pussySensitivity();
		let pussyMulti = 0.8;
		
		pussyToyValue = pussySensivity * this._toyValue_pussyToy * pussyMulti;
		if(!this.isWet) pussyToyValue *= 0.3;
	}
	if(this.isWearingAnalToy_AnalBeads()) {
		let analSensivity = this.analSensitivity();
		let analMulti = 0.7;
		
		analToyValue = analSensivity * this._toyValue_analToy * analMulti;
	}
	toyValue += clitToyValue + pussyToyValue + analToyValue;
	
	if($gameParty._showTopRightTimeNumberFlag) {
		if(this.isInWaitressServingPose()) {
			toyValue *= 0.4;
			sightValue *= 0.4;
		}
		else if(this.isInReceptionistPose()) {
			if($gameParty.receptionistBattle_getCurrentTimeInSeconds() % 30 === 0) {
				sightValue = 0;
				toyValue = 0;
			}
			else {
				toyValue *= 0.4;
				sightValue *= 0.4;
			}
		}
	}
	else if($gameParty.isInGloryBattle) {
		sightValue = 0;
		toyValue *= 0.5;
	}
	else if(this.isInMasturbationCouchPose()) {
		sightValue = 0;
	}
	
	if(sightValue > 0) {
		sightValue = Math.round(sightValue * this.elementRate(ELEMENT_SIGHT_ID) * this.sightSensitivity());
		this.justGotHitBySkillType(JUST_SKILLTYPE_PASSIVE_SIGHT);
		this.addToActorSightPleasureRecord(sightValue);
		if(ConfigManager.displayPleasureAsPercent) {
			let percent = this.getPercentOfOrgasmFromValue(sightValue);
			if(percent > 0) BattleManager._logWindow.push('addText', TextManager.actorGainPleasure_Sight.format(this.name(), '' + percent + TextManager.pleasurePercentText));
		}
		else {
			BattleManager._logWindow.push('addText', TextManager.actorGainPleasure_Sight.format(this.name(), sightValue));
		}
	}
	if(toyValue > 0) {
		toyValue = Math.round(toyValue* this.elementRate(ELEMENT_PETTING_ID));
		this.justGotHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
		this.addToActorToysPleasureRecord(toyValue);
		if(ConfigManager.displayPleasureAsPercent) {
			let percent = this.getPercentOfOrgasmFromValue(toyValue);
			if(percent > 0) BattleManager._logWindow.push('addText', TextManager.actorGainPleasure_Toy.format(this.name(), '' + percent + TextManager.pleasurePercentText));
		}
		else {
			BattleManager._logWindow.push('addText', TextManager.actorGainPleasure_Toy.format(this.name(), toyValue));
		}
	}
	
	totalValue += sightValue + toyValue;
	
	return Math.round(totalValue);
};

// Passive Skill Rating

Game_Actor.prototype.passiveKissSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) {
		prate += this.mouthDesire / 600;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_KISS_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID) && this._tempRecordRimjobPeople > 0) {
		prate *= Math.max(0.01, 0.9 - this._tempRecordRimjobPeople * 0.25);
	}
	if(this.hasPassive(PASSIVE_FIRST_SWALLOW_ID) && this._liquidSwallow > 0) {
		prate *= Math.max(0.01, 0.9 - this._liquidSwallow * 0.015);
	}
	
	return Math.max(0.2, prate);
};

Game_Actor.prototype.passiveCockPetSkillRate = function(target) { 
	let prate = 1;

	if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) {
		if(this.agi > target.agi)
			prate *= 0.8 - Math.max((this.agi - target.agi) / this.agi, (this.agi - target.agi) * 0.015);
	}
	
	return Math.max(0.2, prate);
};
Game_Actor.prototype.passiveHandjobSkillRate = function(target) { 
	let prate = 1;

	if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) {
		prate += this.cockDesire / 600;
	}
	if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) {
		prate += this.sadismLvl() * 0.02;
	}
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) {
		prate += this.cockiness * 0.003;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_HANDJOB_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) {
		if(this.agi > target.agi)
			prate *= 0.8 - Math.max((this.agi - target.agi) / this.agi, (this.agi - target.agi) * 0.015);
	}
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) {
		if(this._tempRecordPussyCreampieML > 0 && this._tempRecordAnalCreampieML > 0)
			prate *= 0.6;
		else if(this._tempRecordPussyCreampieML > 0 || this._tempRecordAnalCreampieML > 0)
			prate *= 0.7;
	}
	
	return Math.max(0.2, prate);
};

Game_Actor.prototype.passiveBlowjobSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) {
		prate += this.mouthDesire / 600;
	}
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) {
		prate += this.cockDesire / 600;
	}
	if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID) && this._tempRecordBlowjobPeople <= 1) {
		prate += 0.25;
	}
	if(this.hasPassive(PASSIVE_SWALLOW_ML_THREE_ID) && this._tempRecordSwallowML === 0) {
		prate += 0.25;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_BLOWJOB_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) {
		if(this.mind > target.mind)
			prate *= 0.8 - Math.max((this.mind - target.mind) / this.mind, (this.mind - target.mind) * 0.015);
	}

	
	
	
	return Math.max(0.2, prate);
};
Game_Actor.prototype.passiveRimjobSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) {
		prate += this.masochismLvl() * 0.02;
	}
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) {
		if(this.cockiness < 50) 
			prate += (50 - this.cockiness) * 0.008;
	}
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) {
		if(this.mind < target.mind)
			prate += Math.min(0.3, 0.01 + (target.mind - this.mind) * 0.005);
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_RIMJOB_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) {
		if(this.cockiness > 50)
			prate *= 0.8 - ((this.cockiness - 50) * 0.01);
	}
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) {
		if(this.mind > target.mind)
			prate *= 0.8 - Math.max((this.mind - target.mind) / this.mind, (this.mind - target.mind) * 0.015);
	}
	
	return Math.max(0.2, prate);
};
Game_Actor.prototype.passiveFootjobSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) {
		prate += this.sadismLvl() * 0.02;
	}
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) {
		if(this.cockiness > 50)
			prate += (this.cockiness - 50) * 0.008;
	}
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) {
		if(this.str > target.str)
			prate += Math.min(0.3, 0.01 + (this.str - target.str) * 0.005);
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_FOOTJOB_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) {
		if(this.cockiness < 50) 
			prate *= 0.8 - ((50 - this.cockiness) * 0.01);
	}
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) {
		if(this.str < target.str)
			prate *= 0.8 - Math.max((target.str - this.str) / target.str, (target.str - this.str) * 0.015);
	}
	
	
	return Math.max(0.2, prate);
};


Game_Actor.prototype.passiveTittyFuckSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) {
		prate += this.boobsDesire / 600;
	}
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) {
		prate += this.cockDesire / 600;
	}
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID) && this._liquidBukkakeBoobs > 0) {
		if(this._liquidBukkakeBoobs > 0) prate += 0.25;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_TITJOB_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) {
		if(this.dex < target.dex)
			prate *= 0.8 - Math.max((target.dex - this.dex) / target.dex, (target.dex - this.dex) * 0.015);
	}
	
	return Math.max(0.2, prate);
};

Game_Actor.prototype.passivePussySexSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) {
		prate += this.pussyDesire / 600;
	}
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) {
		prate += this.cockDesire / 600;
	}
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) {
		if(this.end < target.end)
			prate += Math.min(0.3, 0.01 + (target.end - this.end) * 0.005);
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_PUSSYSEX_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID) && !this.isInCowgirlSexPose() && this._tempRecordPussyFuckedCount > 0) {
		prate *= Math.max(0.2, 1 - this._tempRecordPussyFuckedCount * 0.07);
	}
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) {
		if(this.end > target.end)
			prate *= 0.8 - Math.max((this.end - target.end) / this.end, (this.end - target.end) * 0.015);
	}
	
	return Math.max(0.2, prate);
};
Game_Actor.prototype.passiveAnalSexSkillRate = function(target) { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) {
		prate += this.buttDesire / 600;
	}
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) {
		prate += this.cockDesire / 600;
	}
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) {
		if(this.str > target.str)
			prate += Math.min(0.3, 0.01 + (this.str - target.str) * 0.005);
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_ANALSEX_TWO)) {
		prate *= 1.15;
	}
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID) && this._tempRecordAnalFuckedCount_resetByButtSpank > 0) {
		prate *= Math.max(0.25, 1 - this._tempRecordAnalFuckedCount_resetByButtSpank * 0.08);
	}
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) {
		if(this.str < target.str)
			prate *= 0.8 - Math.max((target.str - this.str) / target.str, (target.str - this.str) * 0.015);
	}
	
	
	return Math.max(0.2, prate);
};

//unused
Game_Actor.prototype.passivePettingPleasureRate = function() { 
	let prate = 1;
	
	/*
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_SECOND_ID)) {
		prate += this.cockDesire / 300;
	}
	*/
	
	return prate;
};

Game_Actor.prototype.passiveSpankingPleasureRate = function(spankLvl) { 
	let prate = 0.1;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) {
		prate += 0.3;
	}
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) {
		prate += this._tempRecordButtSpankedCount * 0.2;
	}
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID)) {
		prate += this.cockiness * 0.004;
	}
	
	prate += this.masochismSensitivity() * 0.75;
	
	return prate;
};


////////
// Counter Rate
///////////

Game_Actor.prototype.pettingCounterRate = function() { 
	let rate = 0;
	
	
	
	if(this.isInSexPose()) rate = 0;
	return rate;
};

///////
// Enemy Anger
//////////

Game_Actor.prototype.passiveEnemyAngerEffect = function(target) {
	let angerEffect = 0;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID))
		angerEffect -= 75;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID))
		angerEffect -= 45;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID))
		angerEffect -= 20;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID) && target._enemyTempRecordCockPettedCount > 0)
		angerEffect -= 30;
	
	
	if(this.hasPassive(PASSIVE_TAUNT_COUNT_TWO_ID) && this._todayTauntCount > 0)
		angerEffect += this._todayTauntCount * 15;
	
	//Type specific
	if(target.isGoblinType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID))
			angerEffect -= 30;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID))
			angerEffect -= 15;
	}
	else if(target.isThugType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID))
			angerEffect -= 25;
	}
	else if(target.isGuardType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID))
			angerEffect -= 35;
	}
	else if(target.isRogueType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID))
			angerEffect -= 25;
	}
	else if(target.isSlimeType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID))
			angerEffect -= 25;
	}
	else if(target.isLizardmanType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID))
			angerEffect -= 25;
	}
	else if(target.isOrcType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID))
			angerEffect -= 40;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID))
			angerEffect -= 20;
	}
	else if(target.isWerewolfType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_TWO_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID))
			angerEffect -= 25;
	}
	else if(target.isYetiType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_THREE_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID))
			angerEffect -= 25;
	}
	
	return angerEffect;
};

//////////
// Ejaculation Stock
//////////

Game_Actor.prototype.passivePostBukkakeBonusEjaculationStock = function() { 
	let chance = 0;

	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_TWO_ID)) chance += 0.3;
	
	if(Math.random() < chance) return true;
	else return false;
};

Game_Actor.prototype.passivePostSwallowBonusEjaculationStock = function() { 
	let chance = 0;

	if(this.hasPassive(PASSIVE_SWALLOW_ML_FOUR_ID)) chance += 0.3;
	
	if(Math.random() < chance) return true;
	else return false;
};

//////////
// Ejaculation Volume
//////////

Game_Actor.prototype.passiveSwallowEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_BJ_ORGASM_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passiveBukkakeEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FOUR_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passivePussyCreampieEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passiveAnalCreampieEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passiveRelationsEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID)) evMultipler += 0.2;
	
	if(enemy.isGuardType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) evMultipler += 0.25;
	}
	else if(enemy.isNerdType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) evMultipler += 0.25;
	}
	else if(enemy.isOrcType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) evMultipler += 0.25;
	}
	else if(enemy.isSlimeType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID)) evMultipler += 0.25;
	}
	else if(enemy.isWerewolfType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_THREE_ID)) evMultipler += 0.25;
	}
	else if(enemy.isYetiType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_TWO_ID)) evMultipler += 0.25;
	}
	
	return evMultipler;
};

/////////
// Female Orgasm
// Orgasm Damage
/////////////

Game_Actor.prototype.passiveFemaleOrgasmEnergyDamage = function() { 
	let enDmg = 12;
	
	if(Prison.hardMode()) enDmg += 1;
	else if(Prison.easyMode()) enDmg -= 1;
	
	if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) enDmg -= 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) enDmg -= 1;
	if(this.ateArtisanMeal(ARTISAN_MEAL_HEART)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) enDmg -= 1.5;
		else enDmg -= 1;
	}
	if(this.isUsingThisTitle(TITLE_ID_WAITRESS_ORGASM)) enDmg -= 1;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) enDmg *= 0.4;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) enDmg *= 0.5;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) enDmg *= 0.6;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) enDmg *= 0.75;
	
	if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) enDmg += 6;
		else enDmg += 3;
	}
	
	return Math.round(enDmg + Math.random() * (enDmg * 0.2));
};

Game_Actor.prototype.calculateOrgasmML = function(energyDamage) { 
	let rate = 0.3;
	
	if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) rate += 0.1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) rate += 0.1;
	if(this.ateArtisanMeal(ARTISAN_MEAL_HEART)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) rate += 0.15;
		else rate += 0.1;
	}
	if(this.isUsingThisTitle(TITLE_ID_WAITRESS_ORGASM)) rate += 0.1;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID)) rate += 0.6;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) rate += 0.3;
	if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) rate += 0.25;
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_THREE_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID)) rate += 0.3;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) rate *= 2;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) rate *= 1.5;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) rate *= 1.25;
	
	let ml = energyDamage * rate;
	ml += Math.random() * ml * 0.25;
	return Math.round(ml * 10) / 10;
};

Game_Actor.prototype.passiveOrgasmMakeEnemiesHornyChance = function() { 
	let chance = 0;
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_FOUR_ID)) chance += 0.2;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_THREE_ID)) chance += 0.1;
	return chance;
};

///////
// Fatigue
/////////

Game_Actor.prototype.fatigueRecoveryNumberRateWhenAroused = function() { 
	let rate = 0.4;
	
	let onaniLvl = this.masturbateLvl();
	if(onaniLvl > 0) rate -= onaniLvl * 0.05;
	
	return Math.max(0.05,rate);
};

//////
/////////
// Desires
/////////
///////

//////////
// Desire Requirements
//////////////////

Game_Actor.prototype.kissingMouthDesireRequirement = function(kissingLvl, karrynSkillUse) { 
	let req = 75;
	if(kissingLvl === KISS_LVL_TWO) {
		req += 15;
	}
	
	if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) req -= 15;
	
	if(this.isEquippingThisAccessory(RING_FINGERCLAW_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 18;
		else req += 35;
	}
	if(this.isEquippingThisAccessory(MISC_LIPGLOSS_ID)) req -= 20;
	
	return req;
};

Game_Actor.prototype.blowjobMouthDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	

	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) req -= 15;
	

	return req; 
};

Game_Actor.prototype.suckFingersMouthDesireRequirement = function(karrynSkillUse) { 
	let req = 50;
	
	return req; 
};

Game_Actor.prototype.blowjobCockDesireRequirement = function(karrynSkillUse) { 
	let req = 65;


	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) req -= 15;
	

	return req;
};

Game_Actor.prototype.mouthSwallowCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this._denyingInternalEjaculations) {
		req += 10 + this.sadismLvl() * 2;
	}

	return req;
};

Game_Actor.prototype.handjobCockDesireRequirement = function(karrynSkillUse) { 
	let req = 50;


	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 15;
		else req += 30;
	}
	if(this.isEquippingThisAccessory(MISC_NAILPOLISH_ID)) req -= 20;


	return req;
};

Game_Actor.prototype.cockPettingCockDesireRequirement = function(karrynSkillUse) { 
	let req = 50;


	return req;
};

Game_Actor.prototype.boobsPettingBoobsDesireRequirement = function(karrynSkillUse) { 
	let req = 50;


	return req;
};

Game_Actor.prototype.nipplesPettingBoobsDesireRequirement = function(karrynSkillUse) { 
	let req = 75;

	return req;
};

Game_Actor.prototype.tittyFuckBoobsDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) req -= 15;
	

	return req; 
};

Game_Actor.prototype.tittyFuckCockDesireRequirement = function(karrynSkillUse) { 
	let req = 65;

	if(this.isEquippingThisAccessory(RING_PEARL_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) req -= 15;


	return req;
};

Game_Actor.prototype.clitPettingPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 50;

	return req;
};

Game_Actor.prototype.cunnilingusPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 85;

	return req;
};

Game_Actor.prototype.pussyPettingPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 75;


	return req;
};

Game_Actor.prototype.pussySexPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	

	if(this.isEquippingThisAccessory(MISC_HIGHHEELS_ID)) req -= 15;
	

	return req;
};	

Game_Actor.prototype.pussySexCockDesireRequirement = function(karrynSkillUse) { 
	let req = 85;
	
	if(this.isEquippingThisAccessory(RING_CHAINHAND_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}
	if(this.isEquippingThisAccessory(MISC_HIGHHEELS_ID)) req -= 15;
	

	return req;
};

Game_Actor.prototype.pussyCreampieCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	

	if(this.isEquippingThisAccessory(RING_CHAINHAND_ID))  {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}
	
	if(this._denyingInternalEjaculations) {
		req += 10 + this.sadismLvl() * 2;
	}

	return req;
};

Game_Actor.prototype.buttPettingButtDesireRequirement = function(karrynSkillUse) { 
	let req = 50;
	
	return req;
};

Game_Actor.prototype.spankingButtDesireRequirement = function(karrynSkillUse) { 
	let req = 65;

	if(this.isEquippingThisAccessory(RING_MIDI_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}

	return req;
};

Game_Actor.prototype.analPettingButtDesireRequirement = function(karrynSkillUse) { 
	let req = 75;


	return req;
};

Game_Actor.prototype.analSexButtDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	

	if(this.isEquippingThisAccessory(MISC_SCARF_ID)) req -= 15;
	

	return req;
};	

Game_Actor.prototype.analSexCockDesireRequirement = function(karrynSkillUse) { 
	let req = 85;

	if(this.isEquippingThisAccessory(RING_DOUBLE_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}
	if(this.isEquippingThisAccessory(MISC_SCARF_ID)) req -= 15;
	

	return req;
};

Game_Actor.prototype.analCreampieCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this.isEquippingThisAccessory(RING_DOUBLE_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}

	if(this._denyingInternalEjaculations) {
		req += 10 + this.sadismLvl() * 2;
	}

	return req;
};

Game_Actor.prototype.rimjobMouthDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	
	if(this.isEquippingThisAccessory(RING_GOLDGLASS_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 10;
		else req += 20;
	}
	
	if(ConfigManager.disableRimjobs) return 999;
	return req; 
};

Game_Actor.prototype.footjobCockDesireRequirement = function(karrynSkillUse) { 
	let req = 65;
	
	if(this.isEquippingThisAccessory(RING_GOLDGLASS_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) req += 15;
		else req += 30;
	}

	return req; 
};

Game_Actor.prototype.clitToyPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 65;


	return req; 
};

Game_Actor.prototype.pussyToyPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 110;

	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) req -= 20;

	return req;  
};

Game_Actor.prototype.analToyButtDesireRequirement = function(karrynSkillUse) { 
	let req = 85;

	

	return req; 
};

Game_Actor.prototype.bodyBukkakeCockDesireRequirement = function(karrynSkillUse) { 
	let req = 35;
	
	if(this._denyingExternalEjaculations) {
		req = Math.min(req + 15 + this.sadismLvl() * 5, this.faceBukkakeCockDesireRequirement());
	}
	
	return req;
};
Game_Actor.prototype.faceBukkakeCockDesireRequirement = function(karrynSkillUse) { 
	let req = 90;
	
	if(this._denyingExternalEjaculations) {
		req += 10 + this.sadismLvl() * 2;
	}
	
	return req;
};


////////
// Max Desire
/////////

Game_Actor.prototype.calculateAllMaxDesires = function() { 
	this.calculateMaxMouthDesire();
	this.calculateMaxBoobsDesire();
	this.calculateMaxPussyDesire();
	this.calculateMaxButtDesire();
	this.calculateMaxCockDesire();
};
Game_Actor.prototype.calculateMaxMouthDesire = function() { //max mouth desire
	let upperLimit = 50;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FIRST_ID)) {
		upperLimit += 5;
		upperLimit += Math.min(10, this._recordMaxReached50MouthDesireCount - 1);
	}
	
	if(this.hasPassive(PASSIVE_TALK_MOUTH_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_TALK_MOUTH_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_TALK_MOUTH_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SIGHT_MOUTH_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_SIGHT_MOUTH_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SIGHT_MOUTH_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) upperLimit += 5;

	if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_KISS_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_KISS_COUNT_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) upperLimit += 5;

	
	if(this.slutLvl <= 100) {
		upperLimit += Math.floor(this.slutLvl / 5);
	}
	else {
		upperLimit += Math.min(50, 20 + Math.floor((this.slutLvl - 100) / 10));
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID))
		upperLimit += 4;
	
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID))
		upperLimit *= 1.2;
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID))
		upperLimit *= 1.1;
	
	let cap = 200;
	if(!this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FIRST_ID)) cap = 70;
	else if(!this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID)) cap = 95;
	
	this._maxMouthDesire = Math.min(cap, Math.round(upperLimit)); 
};
Game_Actor.prototype.calculateMaxBoobsDesire = function() { //max boobs desire
	let upperLimit = 50;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FIRST_ID)) {
		upperLimit += 5;
		upperLimit += Math.min(10, this._recordMaxReached50BoobsDesireCount - 1);
	}
	
	if(this.hasPassive(PASSIVE_TALK_BOOBS_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_TALK_BOOBS_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_TALK_BOOBS_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SIGHT_BOOBS_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_SIGHT_BOOBS_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SIGHT_BOOBS_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FLAUNT_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) upperLimit += 10;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) upperLimit += 5;

	
	if(this.slutLvl <= 100) {
		upperLimit += Math.floor(this.slutLvl / 5);
	}
	else {
		upperLimit += Math.min(50, 20 + Math.floor((this.slutLvl - 100) / 10));
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_BOOBS_ID) || this.hasPassive(CHARA_CREATE_TWO_NIPPLES_ID))
		upperLimit += 4;
	
	if(this.hasPassive(CHARA_CREATE_TWO_BOOBS_ID) || this.hasPassive(CHARA_CREATE_TWO_NIPPLES_ID))
		upperLimit *= 1.2;
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID))
		upperLimit *= 1.1;
	
	let cap = 200;
	if(!this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FIRST_ID)) cap = 70;
	else if(!this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID)) cap = 95;
	
	this._maxBoobsDesire = Math.min(cap, Math.round(upperLimit)); 
};
Game_Actor.prototype.calculateMaxPussyDesire = function() { //max pussy desire
	let upperLimit = 50;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FIRST_ID)) {
		upperLimit += 5;
		upperLimit += Math.min(10, this._recordMaxReached50PussyDesireCount - 1);
	}
	

	if(this.hasPassive(PASSIVE_TALK_PUSSY_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_TALK_PUSSY_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_TALK_PUSSY_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SIGHT_PUSSY_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_SIGHT_PUSSY_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SIGHT_PUSSY_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FIRST_CUNNILINGUS_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_ONE_ID)) upperLimit += 10;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) upperLimit += 5;

	
	if(this.slutLvl <= 100) {
		upperLimit += Math.floor(this.slutLvl / 5);
	}
	else {
		upperLimit += Math.min(50, 20 + Math.floor((this.slutLvl - 100) / 10));
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_CLIT_ID) || this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID))
		upperLimit += 4;
	
	if(this.hasPassive(CHARA_CREATE_TWO_CLIT_ID) || this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID))
		upperLimit *= 1.2;
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID))
		upperLimit *= 1.1;
	
	let cap = 200;
	if(!this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FIRST_ID)) cap = 70;
	else if(!this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID)) cap = 95;
	
	this._maxPussyDesire = Math.min(cap, Math.round(upperLimit));  
};
Game_Actor.prototype.calculateMaxButtDesire = function() { //max butt desire
	let upperLimit = 50;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FIRST_ID)) {
		upperLimit += 5;
		upperLimit += Math.min(10, this._recordMaxReached50ButtDesireCount - 1);
	}
	

	if(this.hasPassive(PASSIVE_TALK_BUTT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_TALK_BUTT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_TALK_BUTT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SIGHT_BUTT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_SIGHT_BUTT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SIGHT_BUTT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_FOUR_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) upperLimit += 5;

	
	
	if(this.slutLvl <= 100) {
		upperLimit += Math.floor(this.slutLvl / 5);
	}
	else {
		upperLimit += Math.min(50, 20 + Math.floor((this.slutLvl - 100) / 10));
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_BUTT_ID) || this.hasPassive(CHARA_CREATE_TWO_ANAL_ID))
		upperLimit += 4;
	
	if(this.hasPassive(CHARA_CREATE_TWO_BUTT_ID) || this.hasPassive(CHARA_CREATE_TWO_ANAL_ID))
		upperLimit *= 1.2;
	else if(this.hasPassive(CHARA_CREATE_TWO_BODY_ID))
		upperLimit *= 1.1;
	
	let cap = 200;
	if(!this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FIRST_ID)) cap = 70;
	else if(!this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_SECOND_ID)) cap = 95;
	
	this._maxButtDesire = Math.min(cap, Math.round(upperLimit)); 
};
Game_Actor.prototype.calculateMaxCockDesire = function() { //max cock desire
	let upperLimit = 25;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FIRST_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_THREE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_THREE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_THREE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_THREE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) upperLimit += 10;
	

	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_TALK_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_TALK_COCK_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_TALK_COCK_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_TALK_COCK_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_ONE_ID)) upperLimit += 5;

	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FIRST_TITTYFUCK_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) upperLimit += 5;

	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_THREE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_HJ_ORGASM_ONE_ID)) upperLimit += 10;
	if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) upperLimit += 15;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FIRST_HJ_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FACE_BUKKAKE_COUNT_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_ONE_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FIRST_BUKKAKE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_FIRST_EJACULATION_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) upperLimit += 5;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_FIRST_BJ_ID)) upperLimit += 5;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_TWO_ID)) upperLimit += 10;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_ONE_ID)) upperLimit += 5;
	
	if(this.slutLvl <= 100) {
		upperLimit += Math.floor(this.slutLvl / 5);
	}
	else {
		upperLimit += Math.min(50, 20 + Math.floor((this.slutLvl - 100) / 10));
	}
	
	let cap = 200;
	if(!this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FIRST_ID)) cap = 70;
	else if(!this.hasPassive(PASSIVE_MAX_COCK_DESIRE_SECOND_ID)) cap = 95;
	
	this._maxCockDesire = Math.min(200, Math.round(upperLimit)); 
};

///////
// Minimum Desire
// Minimal Desire

Game_Actor.prototype.minimumMouthDesireLimit = function() {
	let desire = 0;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 30;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 10;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) desire += 10;
	
	return desire;
};
Game_Actor.prototype.minimumBoobsDesireLimit = function() {
	let desire = 0;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 30;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 10;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) desire += 10;
	
	return desire;
};
Game_Actor.prototype.minimumPussyDesireLimit = function() {
	let desire = 0;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 30;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) desire += 10;
	
	return desire;
};
Game_Actor.prototype.minimumButtDesireLimit = function() {
	let desire = 0;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 30;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) desire += 10;
	
	return desire;
};
Game_Actor.prototype.minimumCockDesireLimit = function() {
	let desire = 0;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 30;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 10;
	
	return desire;
};

///////
// Starting Desires
////////////

Game_Actor.prototype.startingMouthDesire = function() { //Starting Mouth
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 5;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 8;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 3;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID)) desire += 12;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID)) desire += 9;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) desire += 6;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_KISS_ORGASM_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_BJ_ORGASM_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) desire += 5;

	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID) && this._todayKissedPeople > 0) 
		desire += this._todayKissedPeople * 2;
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_THREE_ID) && this._todayFingersSuckedCount > 0) 
		desire += this._todayFingersSuckedCount * 2;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID)) desire += 5;	
	
	if(this.isInMasturbationCouchPose()) {
		desire += this.masturbateLvl() * 10;
	}
	else {
		desire += this.masturbateLvl() * 4;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_KISS_ONE)) desire += 15;
	
	if($gameTemp.isPlaytest() && TESTING_STARTING_DESIRES) return TESTING_MOUTH_DESIRE;
	
	return Math.max(this.minimumMouthDesireLimit(), Math.round(desire)); 
};
Game_Actor.prototype.startingBoobsDesire = function() { //Starting Boobs
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID) && this._todayNipplesPettedPeople > 0) 
		desire += this._todayNipplesPettedPeople * 2;	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID) && this._todayBoobsPettedPeople > 0) 
		desire += this._todayBoobsPettedPeople * 2;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) desire += 5;

	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 5;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 8;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 3;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID)) desire += 12;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID)) desire += 9;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) desire += 6;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID)) desire += 5;
	
	if(this.isInMasturbationCouchPose()) {
		desire += this.masturbateLvl() * 10;
	}
	else {
		desire += this.masturbateLvl() * 4;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_TITJOB_ONE)) desire += 15;
	
	if($gameTemp.isPlaytest() && TESTING_STARTING_DESIRES) return TESTING_BOOBS_DESIRE;
	
	return Math.max(this.minimumBoobsDesireLimit(), Math.round(desire)); 
};
Game_Actor.prototype.startingPussyDesire = function() { //Starting Pussy
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 5;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 8;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 3;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID) && this._todaySexPose_KickCounterCount > 0) 
		desire += this._todaySexPose_KickCounterCount * 3;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID)) desire += 12;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID)) desire += 9;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) desire += 6;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_TWO_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) desire += 5;

	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID) && this._todayPussyFuckedCount > 0) 
		desire += this._todayPussyFuckedCount * 3;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_TWO_ID)) desire += 5;

	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID) && this._todayPussyPettedPeople > 0) 
		desire += this._todayPussyPettedPeople * 2;	
				
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID) && this._todayClitPettedPeople > 0) 
		desire += this._todayClitPettedPeople * 2;

	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_THREE_ID) && this._todayCunnilingusPeople > 0) 
		desire += this._todayCunnilingusPeople * 4;
	
	if(this.isInMasturbationCouchPose()) {
		desire += this.masturbateLvl() * 10;
	}
	else {
		desire += this.masturbateLvl() * 4;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_PUSSYSEX_ONE)) desire += 15;
	
	if($gameTemp.isPlaytest() && TESTING_STARTING_DESIRES) return TESTING_PUSSY_DESIRE;
	
	return Math.max(this.minimumPussyDesireLimit(), Math.round(desire)); 
};
Game_Actor.prototype.startingButtDesire = function() { //Starting Butt
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID)) desire += 3;

	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 5;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 8;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 3;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID)) desire += 12;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID)) desire += 9;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) desire += 6;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID) && this._todayAnalCreampieMaxML > 0) 
		desire += Math.min(30, Math.ceil(this._todayAnalCreampieMaxML / 20));
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID) && this._todayAnalFuckedCount > 0) 
		desire += this._todayAnalFuckedCount * 3;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID) && this._todayAnalPettedPeople > 0) 
		desire += this._todayAnalPettedPeople * 2;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID) && this._todayButtPettedPeople > 0) 
		desire += this._todayButtPettedPeople * 2;

	
	if(this.isInMasturbationCouchPose()) {
		desire += this.masturbateLvl() * 10;
	}
	else {
		desire += this.masturbateLvl() * 4;
	}
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_ANALSEX_ONE)) desire += 15;
	
	if($gameTemp.isPlaytest() && TESTING_STARTING_DESIRES) return TESTING_BUTT_DESIRE;
	
	return Math.max(this.minimumButtDesireLimit(), Math.round(desire)); 
};
Game_Actor.prototype.startingCockDesire = function() { //Starting Cock
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 4);
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) desire += 10;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_THREE_ID) && Karryn.wasDefeatedYesterday()) 
		desire += Math.min(30, 10 + this._playthroughRecordDefeatedTotal * 0.5);
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 5;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 11;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 6;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 3;
	if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) desire += 10;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_ONE_ID) && this._todayTriplePenetrationCount > 0) 
		desire += this._todayTriplePenetrationCount * 4;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID) && this._todaySexPose_KickCounterCount > 0) 
		desire += this._todaySexPose_KickCounterCount * 3;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_THREE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_FOUR_ID) && this._todayCockStaredAtPeople > 0) 
		desire += this._todayCockStaredAtPeople * 3;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_ONE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID)) desire += 3;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID)) desire += 3;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_ONE_ID)) desire += 3;

	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_THREE_ID)) desire += 5;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID) && this._todayHandjobPeople > 0) 
		desire += this._todayHandjobPeople * 2;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_THREE_ID) && this._todayFingersSuckedPeople > 0) 
		desire += this._todayFingersSuckedPeople * 3;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID)) desire += 3;
	
	
	desire += (this.masochismLvl() + this.sadismLvl()) * 1.5;
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_ONE)) desire += 15;
	else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKPET_TWO)) desire += 15;
	
	if($gameTemp.isPlaytest() && TESTING_STARTING_DESIRES) return TESTING_COCK_DESIRE;
	
	return Math.max(this.minimumCockDesireLimit(), Math.round(desire)); 
};

Game_Actor.prototype.startingRandomDesire = function() { 
	let randomDesire = [];
	
	if(this.isInMasturbationCouchPose()) {
		randomDesire.push(this.masturbateLvl() * 4);
	}
	
	for(let i = 0; i < randomDesire.length; ++i) {
		this.gainRandomDesire(randomDesire[i], true);
	};
};

/////////////
// Desire - Every Turn
// Regen Desire
///////////////////

Game_Actor.prototype.regenerateDesires = function() {
	let regenMouthDesire = 0;
	let regenBoobsDesire = 0;
	let regenButtDesire = 0;
	let regenPussyDesire = 0;
	let regenCockDesire = 0;
	let regenRandomDesire = [];
	
	if(this.hasPassive(PASSIVE_SECRET_CURIOSITY_ID)) 
		regenRandomDesire.push(10);
	
	
	if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID)) regenMouthDesire += 6;
	else if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID)) regenBoobsDesire += 6;
	else if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID)) regenPussyDesire += 6;
	else if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID)) regenButtDesire += 6;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) regenRandomDesire.push(6);
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) regenRandomDesire.push(6);
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) regenRandomDesire.push(8);
	
	if(this.hasPassive(PASSIVE_SIGHT_MOUTH_ONE_ID)) regenMouthDesire += 3;
	if(this.hasPassive(PASSIVE_SIGHT_BOOBS_ONE_ID)) regenBoobsDesire += 3;
	if(this.hasPassive(PASSIVE_SIGHT_PUSSY_ONE_ID)) regenPussyDesire += 3;
	if(this.hasPassive(PASSIVE_SIGHT_BUTT_ONE_ID)) regenButtDesire += 3;
	
	if(this.hasPassive(PASSIVE_SIGHT_MOUTH_TWO_ID) && this._todayEnemySawMouthPeople > 0) 
		regenMouthDesire += Math.min(15, this._todayEnemySawMouthPeople * 0.8);
	if(this.hasPassive(PASSIVE_SIGHT_PUSSY_TWO_ID) && this._todayEnemySawPussyPeople > 0) 
		regenPussyDesire += Math.min(15, this._todayEnemySawPussyPeople * 0.8);
	
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_TWO_ID) && (!this.isBodySlotPenis(PUSSY_ID) || !this.isBodySlotPenis(ANAL_ID))) 
		regenCockDesire += 6;
	
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID)) 
		regenMouthDesire += 4;
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_SECOND_ID) && (this.isAroused() || this.isHorny)) 
		regenCockDesire += 5;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FOUR_ID) && this.isWet) 
		regenPussyDesire += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID) && this._tempRecordPussyFuckedCount === 0) 
		regenPussyDesire += 8;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID) && this._liquidCreampiePussy === 0) 
		regenCockDesire += 8;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_TWO_ID) && this.isBodySlotPenis(CLIT_ID)) 
		regenCockDesire += 10;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_TWO_ID) && this._todayCunnilingusPeople === 0) 
		regenPussyDesire += 6;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_TWO_ID)) regenBoobsDesire += 10;
	
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FOUR_ID)) 
		regenCockDesire += $gameTroop.erectMembersAll().length * 4;
	
	
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_FOUR_ID)) 
		regenCockDesire += $gameTroop.erectMembersAll().length * 3;
	
	
	if(this.hasPassive(PASSIVE_BJ_ORGASM_TWO_ID)) regenMouthDesire += 8;
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) regenMouthDesire += 6;
	if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID)) regenMouthDesire += 6;
	
	
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_TWO_ID) && this._todaySwallowML > 0)
		regenCockDesire += Math.min(12, Math.ceil(this._todaySwallowML / 24));
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID))
		regenCockDesire += 6;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID))
		regenCockDesire += 8;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_TWO_ID)) {
		regenPussyDesire += 8;
		regenCockDesire += 6;
	}

	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_TWO_ID)) {
		regenButtDesire += 8;
		regenCockDesire += 6;
	}
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID) && this._tempRecordAnalFuckedCount === 0)
		regenButtDesire += 8;

	if(this.hasPassive(PASSIVE_SPANKING_ORGASM_TWO_ID) && this._tempRecordButtSpankedCount === 0)
		regenButtDesire += 8;


	if(this.hasPassive(PASSIVE_TOYS_ORGASM_ONE_ID) && this._todayTotalToysInsertedCount > 0)
		regenRandomDesire.push(Math.min(15, this._todayTotalToysInsertedCount * 2.5));

	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_TWO_ID)) {
		regenRandomDesire.push(7);
		regenRandomDesire.push(7);
	}
	
	if(this.hasPassive(PASSIVE_VIRGINS_TOTAL_THREE_ID) && $gameTroop.hasEnemyPrefixPresent(ENEMY_PREFIX_VIRGIN)) 
		regenCockDesire += 8;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_GOBLIN_TAG)) 
		regenPussyDesire += 8;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_NERD_TAG)) 
		regenCockDesire += 6;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_SLIME_TAG)) 
		regenButtDesire += 6;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_LIZARDMAN_TAG)) {
		let lizardmanCount = $gameTroop.getCountOfLizardmanPresent();
		for(let i = 1; i < lizardmanCount; ++i) {
			regenRandomDesire.push(4);
		}
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_ORC_TAG)) 
		regenCockDesire += 8;
	
	if($gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID)) {
			regenCockDesire += 8;
		}
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID))
			regenRandomDesire.push(6);
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID))
			regenRandomDesire.push(8);
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_YETI_TAG)) { 
		regenMouthDesire += 6;
		regenBoobsDesire += 6;
	}
	
	if($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose()) {
		if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_THREE_ID)) {
			regenRandomDesire.push(10);
			regenRandomDesire.push(7);
		}
		if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_TWO_ID))
			regenRandomDesire.push(7);
		
		if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_TWO_ID))
			regenCockDesire += 14;
		else if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_ONE_ID))
			regenCockDesire += 7;
		
		
		if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID)) {
			regenRandomDesire.push(10);
			regenRandomDesire.push(8);
			regenRandomDesire.push(8);
		}
		else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID)) {
			regenRandomDesire.push(8);
			regenRandomDesire.push(8);
		}
		else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID)) 
			regenRandomDesire.push(8);
	}
	
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_TWO_ID) && this.isInRestrainedPose()) 
		regenCockDesire += 6;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID) && this._tempRecordAnalCreampieML === 0)
		regenCockDesire += 8;
	
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_TWO_ID) && (Prison.currentlyPrisonLevelThree() || Prison.currentlyPrisonLevelFour() || Prison.currentlyPrisonLevelFive()))
		regenCockDesire += 8;
	
	if(this.isHorny) {
		if(this.hasPassive(PASSIVE_HORNY_COUNT_FOUR_ID)) {
			regenMouthDesire += 11;
			regenBoobsDesire += 11;
			regenButtDesire += 11;
			regenPussyDesire += 11;
			regenCockDesire += 15;
		}
		else if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) {
			regenMouthDesire += 7;
			regenBoobsDesire += 7;
			regenButtDesire += 7;
			regenPussyDesire += 7;
			regenCockDesire += 9;
		}
		else {
			regenMouthDesire += 2;
			regenBoobsDesire += 2;
			regenButtDesire += 2;
			regenPussyDesire += 2;
			regenCockDesire += 3;
		}
	}
	
	//Special
	regenCockDesire += this.regenerateDesires_DefeatedLevel1Effect();
	regenCockDesire += this.regenerateDesires_DefeatedLevel2Effect();
	regenCockDesire += this.regenerateDesires_DefeatedLevel3Effect();
	regenCockDesire += this.regenerateDesires_DefeatedLevel4Effect();

	//Multipler
	if(this.isInWaitressServingPose()) {
		let waitressDesireRegenMultipler = 0.6 * this.jobDesireMultipler();
		
		regenMouthDesire *= waitressDesireRegenMultipler;
		regenBoobsDesire *= waitressDesireRegenMultipler;
		regenButtDesire *= waitressDesireRegenMultipler;
		regenPussyDesire *= waitressDesireRegenMultipler;
		regenCockDesire *= waitressDesireRegenMultipler;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= waitressDesireRegenMultipler;
		};
	}
	else if(this.isInReceptionistPose()) {
		let receptionistDesireRegenMultipler = 0.5 * this.jobDesireMultipler();
		
		regenMouthDesire *= receptionistDesireRegenMultipler;
		regenBoobsDesire *= receptionistDesireRegenMultipler;
		regenButtDesire *= receptionistDesireRegenMultipler;
		regenPussyDesire *= receptionistDesireRegenMultipler;
		regenCockDesire *= receptionistDesireRegenMultipler;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= receptionistDesireRegenMultipler;
		};
	}
	else if(this.isInMasturbationCouchPose()) {
		let masCouchDesireRegenMultipler = 0.8 + this.masturbateLvl() * 0.1;
		
		regenMouthDesire *= masCouchDesireRegenMultipler;
		regenBoobsDesire *= masCouchDesireRegenMultipler;
		regenButtDesire *= masCouchDesireRegenMultipler;
		regenPussyDesire *= masCouchDesireRegenMultipler;
		regenCockDesire *= masCouchDesireRegenMultipler;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= masCouchDesireRegenMultipler;
		};
	}
	else if($gameParty.isInGloryBattle) {
		let gloryDesireRegenMultipler = 0.33;
		
		regenMouthDesire *= gloryDesireRegenMultipler;
		regenBoobsDesire *= gloryDesireRegenMultipler;
		regenButtDesire *= gloryDesireRegenMultipler;
		regenPussyDesire *= gloryDesireRegenMultipler;
		regenCockDesire *= gloryDesireRegenMultipler;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= gloryDesireRegenMultipler;
		};
	}

	//Commit
	this.gainBoobsDesire(regenBoobsDesire, false, true);
	this.gainPussyDesire(regenPussyDesire, false, true);
	this.gainMouthDesire(regenMouthDesire, false, true);
	this.gainButtDesire(regenButtDesire, false, true);
	this.gainCockDesire(regenCockDesire, false, true);
	for(let i = 0; i < regenRandomDesire.length; ++i) {
		this.gainRandomDesire(regenRandomDesire[i], true);
	};
};

Game_Actor.prototype.regenerateDesires_DefeatedLevel1Effect = function() {
	let regenCockDesire = 0;
	if(this.isInDefeatedLevel1Pose()) {
		let shownCocks = 0;
		if(this.isBodySlotPenis(OTHER_1_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_2_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_3_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_4_ID)) shownCocks++;
		regenCockDesire += shownCocks * 2;
	}
	return regenCockDesire;
};

Game_Actor.prototype.regenerateDesires_DefeatedLevel2Effect = function() {
	let regenCockDesire = 0;
	if(this.isInDefeatedLevel2Pose()) {
		let shownCocks = 0;
		if(this.isBodySlotPenis(OTHER_1_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_2_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_3_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_4_ID)) shownCocks++;
		regenCockDesire += shownCocks * 2;
	}
	return regenCockDesire;
};

Game_Actor.prototype.regenerateDesires_DefeatedLevel3Effect = function() {
	let regenCockDesire = 0;
	if(this.isInDefeatedLevel3Pose()) {
		let shownCocks = 0;
		if(this.isBodySlotPenis(OTHER_1_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_2_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_3_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_4_ID)) shownCocks++;
		regenCockDesire += shownCocks * 2;
	}
	return regenCockDesire;
};

Game_Actor.prototype.regenerateDesires_DefeatedLevel4Effect = function() {
	let regenCockDesire = 0;
	if(this.isInDefeatedLevel4Pose()) {
		let shownCocks = 0;
		if(this.isBodySlotPenis(OTHER_1_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_2_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_3_ID)) shownCocks++;
		if(this.isBodySlotPenis(OTHER_4_ID)) shownCocks++;
		regenCockDesire += shownCocks * 2;
	}
	return regenCockDesire;
};

///////
// Gain Desire Multipler
// Desire Gain Rate
///////////////

Game_Actor.prototype.gainMouthDesirePassiveMultipler = function() { //Mouth desire gain rate
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FOUR_ID)) multi += 0.15;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) multi += 0.3;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_TALK_MOUTH_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_SIGHT_MOUTH_THREE_ID) && this._tempRecordEnemySawMouthPeople > 0)
		multi += Math.min(1, this._tempRecordEnemySawMouthPeople * 0.05);
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		multi += this.masochismLvl() * 0.015;

	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_KISS_COUNT_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID) && this._tempRecordKissedCount > 0) 
		multi += this._tempRecordKissedCount * 0.05;
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_TWO_ID) && this._tempRecordFingersSuckedCount > 0) 
		multi += this._tempRecordFingersSuckedCount * 0.05;
	
	
	multi += this.masturbateLvl() * 0.02;

	multi *= this.jobDesireMultipler();
	return multi;
};
Game_Actor.prototype.gainBoobsDesirePassiveMultipler = function() { //Boobs desire gain rate
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FOUR_ID)) multi += 0.15;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) multi += 0.3;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_TALK_BOOBS_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_SIGHT_BOOBS_THREE_ID) && this._tempRecordEnemySawBoobsPeople > 0)
		multi += Math.min(1, this._tempRecordEnemySawBoobsPeople * 0.05);
	
	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		multi += this.masochismLvl() * 0.015;
	
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_THREE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID)) multi += 0.15;
	else if(this.hasPassive(PASSIVE_FIRST_TITTYFUCK_ID)) multi += 0.1;
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID) && this._tempRecordBoobsPettedCount > 0) 
		multi += this._tempRecordBoobsPettedCount * 0.05;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID) && this._tempRecordNipplesPettedPeople > 0) 
		multi += this._tempRecordNipplesPettedPeople * 0.05;
	
	

	
	multi += this.masturbateLvl() * 0.02;
	
	multi *= this.jobDesireMultipler();
	return multi;
};
Game_Actor.prototype.gainPussyDesirePassiveMultipler = function() { //Pussy desire gain rate
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FOUR_ID)) multi += 0.15;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) multi += 0.3;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_TALK_PUSSY_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_SIGHT_PUSSY_THREE_ID) && this._tempRecordEnemySawPussyPeople > 0)
		multi += Math.min(1, this._tempRecordEnemySawPussyPeople * 0.05);
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		multi += this.masochismLvl() * 0.015;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_ONE_ID) && this._todayCunnilingusPeople > 0) 
		multi += this._todayCunnilingusPeople * 0.05;
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID) && this._tempRecordClitPettedCount > 0) 
		multi += this._tempRecordClitPettedCount * 0.05;

	
	multi += this.masturbateLvl() * 0.02;
	
	multi *= this.jobDesireMultipler();
	return multi;
};
Game_Actor.prototype.gainButtDesirePassiveMultipler = function() { //Butt desire gain rate
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FOUR_ID)) multi += 0.15;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) multi += 0.3;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_TALK_BUTT_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(this.PASSIVE_SIGHT_BUTT_THREE_ID) && this._tempRecordEnemySawButtPeople > 0)
		multi += Math.min(1, this._tempRecordEnemySawButtPeople * 0.05);
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		multi += this.masochismLvl() * 0.015;
	
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_THREE_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) 
		multi += this._tempRecordButtPettedCount * 0.05;
	
	multi += this.masturbateLvl() * 0.02;
	
	multi *= this.jobDesireMultipler();
	return multi;
};
Game_Actor.prototype.gainCockDesirePassiveMultipler = function() { //Cock desire gain rate
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FOUR_ID)) multi += 0.4;
	else if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_THREE_ID)) multi += 0.25;
	else if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FIRST_ID)) multi += 0.1;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FOUR_ID)) multi += 0.3;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) multi += 0.05;
	
	
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_SECOND_ID) && !Karryn.isInMapPose() && this.topDesireIsCockDesire()) {
		if(this.cockDesire < 50)
			multi += 0.1;
		else if(this.cockDesire < 75)
			multi += 0.2;
		else if(this.cockDesire < 100)
			multi += 0.33;
		else if(this.cockDesire < 150)
			multi += 0.5;
		else
			multi += 1;
	}
	
	if(this.hasPassive(PASSIVE_TALK_COCK_TWO_ID) && this._todayTalkedAtAboutCockPeople > 0)
		multi += Math.min(1, this._todayTalkedAtAboutCockPeople * 0.033);
	if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) 
		multi += 0.1;
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_ONE_ID) && (Prison.currentlyPrisonLevelThree() || Prison.currentlyPrisonLevelFour() || Prison.currentlyPrisonLevelFive())) 
		multi += 0.1;
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_TWO_ID))
		multi += 0.05;
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID))
		multi += 0.05;
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID) && Karryn.wasDefeatedYesterday()) 
		multi += this.masochismLvl() * 0.015;
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_THREE_ID))
		multi += 0.05;
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_THREE_ID) && this._tempRecordCockStareUsageCount > 0)
		multi += this._tempRecordCockStareUsageCount * 0.05;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_TWO_ID) && ($gameParty.isInGloryBattle || Karryn.isInDefeatedLevel2Pose())) 
		multi += 0.1;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) multi -= 0.1;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) multi -= 0.2;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_FIRST_BJ_ID)) multi -= 0.15;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) 
		multi += this._tempRecordCockPettedCount * 0.05;
	
	if(this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) multi += 0.1;
	else if(this.hasPassive(PASSIVE_FIRST_HJ_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) multi += 0.05;
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_TWO_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) multi += 0.05;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_TWO_ID) && this._tempRecordFingersSuckedPeople > 0) 
		multi += this._tempRecordFingersSuckedPeople * 0.033;
	
	
	multi += (this.masochismLvl() + this.sadismLvl()) * 0.01;

	multi *= this.jobDesireMultipler();
	return multi;
};

////////
// Job Desire

Game_Actor.prototype.jobDesireMultipler = function() {
	let allJobMulti = 1;
	let specificJobMulti = 1;
	
	if(this.isInJobPose() && !$gameParty.isInGloryBattle) {
		allJobMulti = 0.9;
		
		if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_THREE_ID)) allJobMulti += 0.4;
		else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_TWO_ID)) allJobMulti += 0.25;
		else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_ONE_ID)) allJobMulti += 0.1;
			
		if($gameParty.isInWaitressBattle) {
			specificJobMulti = 0.75;
			
			if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_THREE_ID)) specificJobMulti += 0.5;
			else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID)) specificJobMulti += 0.35;
			else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) specificJobMulti += 0.2;
		}
		else if(this.isInReceptionistPose()) {
			specificJobMulti = 0.75;
			
			if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_THREE_ID)) specificJobMulti += 0.5;
			else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID)) specificJobMulti += 0.35;
			else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) specificJobMulti += 0.2;
		}
	}

	return allJobMulti * specificJobMulti;
};

///////////
// Desire Rate

Game_Actor.prototype.desireElementRate = function(elementId) {
	let rate = 0;
	
	if(elementId === ELEMENT_STRIP_ID && this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FIRST_ID) && this.pussyDesire >= 50 && !this.isInMapPose()) {
		if(this.pussyDesire >= 100) {
			rate += 0.2 + (this.pussyDesire - 100) * 0.005;
		}
		else if(this.pussyDesire >= 75) {
			rate += 0.08 + (this.pussyDesire - 75) * 0.003;
		}
		else {
			rate += 0.05 + this.pussyDesire * 0.001;
		}
	}
	else if(elementId === ELEMENT_PETTING_ID && this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_THREE_ID) && this.buttDesire >= 100 && !this.isInMapPose()) {
		rate += 0.03 + (this.buttDesire - 100) * 0.003;
	}
	else if(elementId === ELEMENT_SEX_ID && this.hasPassive(PASSIVE_MAX_COCK_DESIRE_THREE_ID) && this.cockDesire >= 100 && !this.isInMapPose()) {
		rate += 0.1 + (this.cockDesire - 100) * 0.005;
	}


	return rate;
};

Game_Actor.prototype.desireXParamRate = function(paramId) {
	let rate = 1;

	if(paramId === XPARAM_HIT_ID && this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FIRST_ID) && this.mouthDesire >= 50 && !this.isInMapPose()) {
		if(this.mouthDesire >= 100) {
			rate -= (0.12 + (this.mouthDesire - 100) * 0.005);
		}
		else if(this.mouthDesire >= 75) {
			rate -= (0.04 + (this.mouthDesire - 75) * 0.003);
		}
		else {
			rate -= (0.01 + (this.mouthDesire - 50) * 0.001);
		}
	}
	else if(paramId === XPARAM_EVA_ID && this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FIRST_ID) && this.boobsDesire >= 50 && !this.isInMapPose()) {
		if(this.boobsDesire >= 100) {
			rate -= (0.12 + (this.boobsDesire - 100) * 0.005);
		}
		else if(this.boobsDesire >= 75) {
			rate -= (0.04 + (this.boobsDesire - 75) * 0.003);
		}
		else {
			rate -= (0.01 + (this.boobsDesire - 50) * 0.001);
		}
	}
	else if(paramId === XPARAM_CRIT_ID && this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_THREE_ID) && this.boobsDesire >= 100 && !this.isInMapPose()) {
		rate -= (0.01 + (this.boobsDesire - 100) * 0.003);
	}
	else if(paramId === XPARAM_CRIT_EVA_ID && this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_THREE_ID) && this.pussyDesire >= 100 && !this.isInMapPose()) {
		rate -= (0.01 + (this.pussyDesire - 100) * 0.003);
	}

	return rate;
};

Game_Actor.prototype.desireSParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === SPARAM_WPATK_ID && this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FIRST_ID) && this.cockDesire >= 50 && !this.isInMapPose()) {
		if(this.cockDesire >= 100) {
			rate -= (0.12 + (this.cockDesire - 100) * 0.005);
		}
		else if(this.cockDesire >= 75) {
			rate -= (0.04 + (this.cockDesire - 75) * 0.003);
		}
		else {
			rate -= (0.01 + (this.cockDesire - 50) * 0.001);
		}
	}
	else if(paramId === SPARAM_WPDEF_ID && this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FIRST_ID) && this.buttDesire >= 50 && !this.isInMapPose()) {
		if(this.buttDesire >= 100) {
			rate -= (0.12 + (this.buttDesire - 100) * 0.005);
		}
		else if(this.buttDesire >= 75) {
			rate -= (0.04 + (this.buttDesire - 75) * 0.003);
		}
		else {
			rate -= (0.01 + (this.buttDesire - 50) * 0.001);
		}
	}
	
	return rate;
};

Game_Actor.prototype.desireCriticalMultiplierBonus = function() {
	let bonus = 0;
	
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_THREE_ID) && this.mouthDesire >= 100 && !this.isInMapPose()) {
		bonus -= (0.01 + (this.mouthDesire - 100) * 0.004);
	}
	
	return bonus;
};
/////////////
// Growth Rate

Game_Actor.prototype.passiveGrowthRate = function(paramId) {
	let rate = 1;
	
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_TWO_ID)) {
		if(this._liquidCreampieAnal < 50) {
			rate += (this._liquidCreampieAnal * 0.005);
		}
		else {
			rate += 0.25 + ((this._liquidCreampieAnal - 50) * 0.001);
		}
	}
	
	return rate;
};

Game_Actor.prototype.passiveFlauntCharmGrowthRate = function() {
	let rate = 1;
	
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_THREE_ID)) rate += 0.3;
	else if(this.hasPassive(PASSIVE_FLAUNT_COUNT_TWO_ID)) rate += 0.2;
	else if(this.hasPassive(PASSIVE_FLAUNT_COUNT_ONE_ID)) rate += 0.1;
	
	return rate;
};


/////////////
// Pose Effects
/////////////////

Game_Actor.prototype.passiveAttackPoseEffect = function() {
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID)) this.gainBoobsDesire(6, false);
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FOUR_ID)) this.addState(STATE_ATTACK_CHARM_1_ID);
	
};

Game_Actor.prototype.passiveEvadePoseEffect = function() {
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_SECOND_ID)) this.gainButtDesire(4, false);
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FOUR_ID)) this.addState(STATE_EVADE_CHARM_1_ID);
	
};

////////
// Pussy Drip
////////////////

Game_Actor.prototype.passivePussyJuiceDrip = function() { 
	let value = 0;
	
	if(this.isAroused()) {
		value += 4;
	
		if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID)) value += 1;
		
		if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID)) value += 3;
		else if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_ONE_ID)) value += 1;
		if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_THREE_ID)) value += 1;
		if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FIVE_ID)) value += 1;
		
		if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_TWO_ID)) value += 1;
		if(this.hasPassive(PASSIVE_SADISM_ORGASM_TWO_ID)) value += 1;
	}
	
	if(this.hasPassive(PASSIVE_TALK_PUSSY_TWO_ID))
			value += Math.min(4, this._tempRecordTalkedAtAboutPussyPeople * 0.5);
		
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID)) value += this._todayOrgasmCount;
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID) && !this.isWearingPanties()) value += 2;
	
	return value
};

/////////
// Off-balance

Game_Actor.prototype.passiveOffBalanceStateAddTurns = function() {  
	let baseAdd = -1;
	let varianceTurns = 0;
	
	if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_ONE_ID) && (this.isAroused() || this.isHorny)) {
		baseAdd += 1;
	}
	
	return baseAdd + Math.randomInt(varianceTurns + 1);
};

/////////
// Horny

Game_Actor.prototype.passiveHornyStateAddTurns = function() {  
	let baseAdd = 2;
	let varianceTurns = 1;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_FOUR_ID)) {
		baseAdd += 4;
		varianceTurns += 4;
	}
	else if(this.hasPassive(PASSIVE_HORNY_COUNT_THREE_ID)) {
		baseAdd += 3;
		varianceTurns += 2;
	}
	else if(this.hasPassive(PASSIVE_HORNY_COUNT_TWO_ID)) {
		baseAdd += 2;
		varianceTurns += 1;
	}
	
	let hornyTurns = baseAdd + Math.randomInt(varianceTurns + 1);
	return hornyTurns;
};

Game_Actor.prototype.passiveHornyStateAddTimeLimit = function() {  
	let baseAddTime = 60;
	let varianceTime = 60;
	
	if(this.hasPassive(PASSIVE_HORNY_COUNT_FOUR_ID)) {
		baseAddTime += 160;
		varianceTime += 160;
	}
	else if(this.hasPassive(PASSIVE_HORNY_COUNT_THREE_ID)) {
		baseAddTime += 120;
		varianceTime += 90;
	}
	else if(this.hasPassive(PASSIVE_HORNY_COUNT_TWO_ID)) {
		baseAddTime += 60;
		varianceTime += 60;
	}

	let hornyTimeLimit = baseAddTime + Math.randomInt(varianceTime);
	return hornyTimeLimit;
};

/////////
// Special Regen

Game_Actor.prototype.passiveRegenEffects = function() {  
	if(this.isHorny) return;
	let hornyChance = 0;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_THREE_ID) && 
	(!this.isBodySlotPenis(PUSSY_ID) && !this.isBodySlotPenis(ANAL_ID) && !this.isBodySlotInserted(MOUTH_ID))) {
		hornyChance += 0.15;
	}
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_ONE_ID) && this.isWearingAnyToy()) {
		let toyValue = 0;
		if(this.isWearingClitToy()) toyValue += 2;
		if(this.isWearingPussyToy()) toyValue++;
		if(this.isWearingAnalToy()) toyValue++;
		hornyChance += toyValue * 0.02;
	}
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_SLUT)) {
		if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) hornyChance += 0.23;
		else hornyChance += 0.15;
	}
	
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID)) hornyChance += 0.1;
	
	if(this.isInJobPose()) hornyChance *= 0.4;
	else if(this.isInMasturbationCouchPose()) hornyChance *= 0.3;
	
	if(Math.random() < hornyChance) 
		this.addHornyState(); 
};

/////////
// Pre Battle Passives

Game_Actor.prototype.preBattleConfidentPassiveEffects = function() {  
	let confidentChance = 0;
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_ONE_ID)) {
		confidentChance += 0.2;
	}
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_THREE_ID)) {
		confidentChance += 0.2;
	}
	if(this.isEquippingThisAccessory(NECKLACE_DIAMOND_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) confidentChance += 0.1;
		else confidentChance += 0.2;
	}
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID) && this.cockiness >= 33) {
		confidentChance += this.cockiness * 0.002;
	}

	if(Math.random() < confidentChance) {
		this.addState(STATE_CONFIDENT_ID); 
		this.setWillToMax();
	}
};

Game_Actor.prototype.preBattleHornyPassiveEffects = function() {  
	let hornyChance = 0;
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_TWO_ID)) {
		hornyChance += 0.15;
	}
	
	if(Math.random() < hornyChance) 
		this.addHornyState(); 
};

Game_Actor.prototype.preBattleClothingPassiveEffects = function() {  
	let numOfHits = 0;
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID)) numOfHits += 3;
	else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID)) numOfHits += 1;
	
	for(let i = 0; i < numOfHits; ++i) {
		let clothingDmg = this.getClothingMaxDurability() * 0.2 * Math.random() * this.elementRate(ELEMENT_STRIP_ID);
		this.damageClothing(clothingDmg, true);
	}
	
	if(numOfHits > 0) {
		this._cooldownTurns[SKILL_FIX_CLOTHES_ID] = 1;
		this._cooldownTurns[SKILL_FIX_CLOTHES_RECEPTIONIST_ID] = 1;
		this._cooldownTurns[SKILL_FIX_CLOTHES_WAITRESS_ID] = 1;
	}
};

///////
// Debuff Effects

Game_Actor.prototype.passiveFallenState_addHornyEffect = function() {  
	let hornyChance = 0;
	
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_THREE_ID)) {
		hornyChance += 0.03;
		if(this.masochismLvl() > this.sadismLvl()) 
			hornyChance += this.masochismLvl() * 0.04;
		hornyChance += this.masochismLvl() * 0.01;
	}
	
	if(Math.random() < hornyChance)
		this.addHornyState();
};

Game_Actor.prototype.passiveDownStaminaState_addHornyEffect = function() {  
	let hornyChance = 0;
	
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) {
		hornyChance += 0.03;
		if(this.masochismLvl() > this.sadismLvl()) 
			hornyChance += this.masochismLvl() * 0.04;
		hornyChance += this.masochismLvl() * 0.01;
	}
	
	if(Math.random() < hornyChance)
		this.addHornyState();
};

Game_Actor.prototype.passivePostAttack_addOffBalanceEffect = function(multipler) {
	let offBalanceChance = 0;
	
	if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_THREE_ID) && this.isWearingAnyToy()) {
		offBalanceChance += 0.1;
		if(this.isWearingClitToy()) offBalanceChance += 0.05;
		if(this.isWearingPussyToy()) offBalanceChance += 0.1;
		if(this.isWearingAnalToy()) offBalanceChance += 0.1;
	}
	
	offBalanceChance *= multipler;
	if(Math.random() < offBalanceChance)
		this.addOffBalanceState(0, true);
};

Game_Actor.prototype.passivePostSpank_addOffBalanceEffect = function(multipler) {
	let offBalanceChance = 0;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) {
		offBalanceChance += 0.2;
		if(this.masochismLvl() > this.sadismLvl()) 
			offBalanceChance += this.masochismLvl() * 0.02;
		offBalanceChance += this.masochismLvl() * 0.008;
	}
	
	offBalanceChance *= multipler;
	if(!this.isInCombatPose()) offBalanceChance = 0;
	
	if(Math.random() < offBalanceChance)
		this.addOffBalanceState_changableToFallen(0, false);
};

Game_Actor.prototype.passivePostSpank_addHornyEffect = function(multipler) {  
	let hornyChance = 0;
	
	if(this.hasPassive(PASSIVE_SPANKING_ORGASM_ONE_ID)) {
		hornyChance += 0.03;
		if(this.masochismLvl() > this.sadismLvl()) 
			hornyChance += this.masochismLvl() * 0.04;
		hornyChance += this.masochismLvl() * 0.01;
		
		if(this.hasPassive(PASSIVE_SPANKING_ORGASM_TWO_ID))
			hornyChance += 0.2;
	}
	
	hornyChance *= multipler;
	if(Math.random() < hornyChance)
		this.addHornyState();
};

////////////
// Panties

Game_Actor.prototype.passiveStripOffPanties_losePantiesEffect = function() {  
	let loseChance = 0;
	
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID)) loseChance += 0.4;
	else if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_ONE_ID)) loseChance += 0.1;
	
	if(Math.random() < loseChance)
		this._lostPanties = true;
};

Game_Actor.prototype.passiveWakeUp_losePantiesEffect = function() {  
	let loseChance = 0;
	
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_THREE_ID)) loseChance += 0.33;
	
	if(Math.random() < loseChance) {
		this._lostPanties = true;
		this.takeOffPanties();
	}
};

/////////
// Orgasm Revival

Game_Actor.prototype.passivePostOrgasmRevivalEffect = function() {  
	if(this.hasPassive(PASSIVE_ORGASM_TRIPLE_ID) && !this._tempRecordUsedPostOrgasmRevival) {
		this._tempRecordUsedPostOrgasmRevival = true;
		this.setMp(Math.round(this.maxenergy * 0.5));
	}
};

//////////
// Game Enemy
///////////

Game_Enemy.prototype.enemyPassiveParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === PARAM_STRENGTH_ID) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID) && this.isThugType)
			rate -= 0.25;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID) && this.isLizardmanType)
			rate -= 0.25;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_THREE_ID) && this.isWerewolfType)
			rate -= 0.25;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_THREE_ID) && this.isYetiType)
			rate -= 0.25;
	}
	else if(paramId === PARAM_AGILITY_ID) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID) && this.isGoblinType)
			rate -= 0.25;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID) && this.isSlimeType)
			rate -= 0.25;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID) && this.isRogueType)
			rate -= 0.25;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID) && this.isOrcType)
			rate -= 0.25;
	}
	
	
	
	return rate;
};

Game_Enemy.prototype.enemyPassiveXParamRate = function(id) {  
	let passiveRate = 1;
	
	if(this.isStateAffected(STATE_ENEMY_KISSED_ID) && (id === XPARAM_HIT_ID || id === XPARAM_EVA_ID)) {
		let kissDebuffLvl = 1;
		
		if(Karryn.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) kissDebuffLvl += 2;
		else if(Karryn.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) kissDebuffLvl += 1;
		if(Karryn.isUsingThisTitle(TITLE_ID_EMPEROR_SECRETARY)) kissDebuffLvl += 1;
		
		if(kissDebuffLvl === 4) {
			passiveRate *= 0.69;
		}
		else if(kissDebuffLvl === 3) {
			passiveRate *= 0.75;
		}
		else if(kissDebuffLvl === 2) {
			passiveRate *= 0.83;
		}
		else {
			passiveRate *= 0.9;
		}
	}
	
	if(this.isOffBalance && id === XPARAM_EVA_ID) {
		passiveRate *= 0.75;
	}
	
	if(id === XPARAM_EVA_ID && Karryn.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID) && Karryn.topDesireIsBoobsDesire()) {
		if(!Karryn.isInMapPose() && 
		(!Karryn.isInWaitressServingPose() || (Karryn.isInWaitressServingPose() && !this._bar_InBrawl))) {
			if(Karryn.boobsDesire < 50)
				passiveRate *= 0.85;
			else if(Karryn.boobsDesire < 75)
				passiveRate *= 0.75;
			else if(Karryn.boobsDesire < 100)
				passiveRate *= 0.6;
			else if(Karryn.boobsDesire < 150)
				passiveRate *= 0.4;
			else
				passiveRate *= 0.25;
		}
	}
	else if(id === XPARAM_HIT_ID && Karryn.hasPassive(PASSIVE_MAX_BUTT_DESIRE_SECOND_ID) && Karryn.topDesireIsButtDesire()) {
		if(!Karryn.isInMapPose() && 
		(!Karryn.isInWaitressServingPose() || (Karryn.isInWaitressServingPose() && !this._bar_InBrawl))) {
			if(Karryn.buttDesire < 50)
				passiveRate *= 0.85;
			else if(Karryn.buttDesire < 75)
				passiveRate *= 0.75;
			else if(Karryn.buttDesire < 100)
				passiveRate *= 0.6;
			else if(Karryn.buttDesire < 150)
				passiveRate *= 0.4;
			else
				passiveRate *= 0.25;
		}
	}
	
	return passiveRate;
};

Game_Enemy.prototype.enemyPassiveSParamRate = function(id) {  
	let passiveRate = 1;
	
	if(this.isStateAffected(STATE_ENEMY_KISSED_ID) && id === SPARAM_WPATK_ID) {
		let kissDebuffLvl = 1;
		
		if(Karryn.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) kissDebuffLvl += 2;
		else if(Karryn.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) kissDebuffLvl += 1;
		if(Karryn.isUsingThisTitle(TITLE_ID_EMPEROR_SECRETARY)) kissDebuffLvl += 1;
		
		if(kissDebuffLvl === 4) {
			passiveRate *= 0.69;
		}
		else if(kissDebuffLvl === 3) {
			passiveRate *= 0.75;
		}
		else if(kissDebuffLvl === 2) {
			passiveRate *= 0.83;
		}
		else {
			passiveRate *= 0.9;
		}
	}

	if(this.isOffBalance && (id === SPARAM_WPATK_ID || id === SPARAM_WPDEF_ID)) {
		passiveRate *= 0.85;
	}
	

	if(id === SPARAM_WPDEF_ID && Karryn.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID) && Karryn.topDesireIsMouthDesire()) {
		if(!Karryn.isInMapPose() && 
		(!Karryn.isInWaitressServingPose() || (Karryn.isInWaitressServingPose() && !this._bar_InBrawl))) {
			if(Karryn.mouthDesire < 50)
				passiveRate *= 0.85;
			else if(Karryn.mouthDesire < 75)
				passiveRate *= 0.75;
			else if(Karryn.mouthDesire < 100)
				passiveRate *= 0.6;
			else if(Karryn.mouthDesire < 150)
				passiveRate *= 0.4;
			else
				passiveRate *= 0.25;
		}
	}
	
	return passiveRate;
};

Game_Enemy.prototype.enemyInitialPleasurePassives = function() {  
	let addedMulti = 0;
	
	if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID)) addedMulti += 3;
	else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) addedMulti += 2;
	else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) addedMulti += 1.5;
	else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) addedMulti += 1;
	else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) addedMulti += 0.5;
	
	if(this.isPrisonGuard) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) addedMulti += 1;
	}
	else if(this.isThugType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID)) addedMulti += 1;
	}
	else if(this.isGoblinType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID)) addedMulti += 1;
	}
	else if(this.isRogueType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID)) addedMulti += 1;
	}
	else if(this.isNerdType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID)) addedMulti += 1;
	}
	else if(this.isSlimeType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) addedMulti += 1;
	}
	else if(this.isLizardmanType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID)) addedMulti += 1;
	}
	else if(this.isHomelessType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) addedMulti += 1;
	}
	else if(this.isOrcType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) addedMulti += 1;
	}
	else if(this.isWerewolfType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID)) addedMulti += 1;
	}
	else if(this.isYetiType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_THREE_ID)) addedMulti += 3;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_TWO_ID)) addedMulti += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID)) addedMulti += 1;
	}
	
	return addedMulti;
};

Game_Enemy.prototype.onTurnEnd_enemyHornyChance = function() {  
	if(this.isHorny) return;
	let hornyChance = 0;

	if(Karryn.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID) && Karryn.topDesireIsPussyDesire()) {
		if(!Karryn.isInMapPose() && 
		(!Karryn.isInWaitressServingPose() || (Karryn.isInWaitressServingPose() && !this._bar_InBrawl))) {
			if(Karryn.pussyDesire < 50)
				hornyChance += 0.005;
			else if(Karryn.pussyDesire < 75)
				hornyChance += 0.018;
			else if(Karryn.pussyDesire < 100)
				hornyChance += 0.03;
			else if(Karryn.pussyDesire < 150)
				hornyChance += 0.05;
			else
				hornyChance += 0.1;
		}
	}

	if(this.isVisitorType) 
		hornyChance = 0;
	else if($gameParty.isInGloryBattle) 
		hornyChance *= 0.6;

	if(Math.random() < hornyChance) 
		this.addHornyState();
};

//////////////////
// Data Manager
////////////////

//Edict note tags
DataManager.processRemTMNotetags_RemtairyPassives = function(group) {
	for (let n = 1; n < group.length; n++) {
		let obj = group[n];
		if(obj.stypeId !== SKILLTYPE_PASSIVES_ID) continue;
		let notedata = obj.note.split(/[\r\n]+/);
		
		obj.passiveColor = 0;
		obj.passiveCategory = [];
		
		for (let i = 0; i < notedata.length; i++) {
			let line = notedata[i];
			if (line.match(/<PASSIVE COLOR:[ ](.*)>/i)) {
				obj.passiveColor = parseInt(RegExp.$1);
			} else if (line.match(/<(?:PASSIVE CATEGORY):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				let array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.passiveCategory = [];
				obj.passiveCategory = obj.passiveCategory.concat(array);
			}
		}
	};
	
};