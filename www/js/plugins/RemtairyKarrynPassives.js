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
const PASSIVES_LIST_TWO_END_ID = 920;

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
const PASSIVE_CATEGORY_VAGINAL_SEX = 12;
const PASSIVE_CATEGORY_BUTT_DESIRE = 13;
const PASSIVE_CATEGORY_BUTT = 14;
const PASSIVE_CATEGORY_ANAL = 15;
const PASSIVE_CATEGORY_ANAL_SEX = 16;
const PASSIVE_CATEGORY_COCK_DESIRE = 17;
const PASSIVE_CATEGORY_PLEASURE = 18;
const PASSIVE_CATEGORY_ORGASM = 19;
const PASSIVE_CATEGORY_SEMEN = 20;
const PASSIVE_CATEGORY_SADISM = 21;
const PASSIVE_CATEGORY_MASOCHISM = 22;
const PASSIVE_CATEGORY_MASTURBATION = 23;
const PASSIVE_CATEGORY_EXHIBITIONISM = 24;
const PASSIVE_CATEGORY_FETISHISM = 25;
const PASSIVE_CATEGORY_RELATIONS = 26;

/////////////
// Scene Skill
//////////////////

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


/////////////
// Window SkillList
//////////////////

Remtairy.KarrynPassives.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
Window_SkillList.prototype.makeItemList = function() {
    if (this._actor) {
		if ($gameParty.inBattle()) {
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
    if (skill) {
        let costWidth = this.costWidth();
        let rect = this.itemRect(index);
        rect.width -= this.textPadding();
		if ($gameParty.inBattle()) { 
			this.changePaintOpacity(this.isEnabled(skill));
			let skillCostWidth = this.drawSkillCost(skill, rect.x, rect.y, rect.width);
			this.drawItemName(skill, rect.x, rect.y, skillCostWidth - WINDOW_SKILLLIST_SKILLCOST_PADDING);
			//this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth - WINDOW_SKILLLIST_SKILLCOST_PADDING);
			//this.drawSkillCost(skill, rect.x, rect.y, rect.width);
			this.changePaintOpacity(1);
		}
		else {
			this.drawItemName(skill, rect.x, rect.y, rect.width);
		}
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
		
		if ($gameParty.inBattle()) {
			let padding = (iconBoxWidth - Window_Base._iconWidth) / 2;
			this.resetTextColor();
			this.drawIcon(item.iconIndex, x + padding, y + REM_Y_ICON_PADDING);
			this.drawText(name, x + iconBoxWidth, y, width - iconBoxWidth);
		}
		//Passive list
		else {
			let textColor = item.passiveColor;
			this.changeTextColor(this.textColor(textColor));
			this.drawText(name, x, y, width * 0.75, 'center');
			
			this.makeFontSmaller();
			this.makeFontSmaller();
			this.changeTextColor(this.textColor(8));
			let obtainedText = TextManager.PassiveObtainedOn;
			//console.log(item.id);

			this.drawText(obtainedText.format(this._actor._passivesObtainedOn_keySkillID_valueDate[item.id]), x + width * 0.77, y, width * 0.25, 'left');
			
			this.makeFontBigger();
			this.makeFontBigger();
			this.resetTextColor();
		}
    }
};

//Only affects Passives?
Window_SkillList.prototype.maxCols = function() {
    return 1;
};

//unused as of now
Window_SkillList.prototype.createGalvCursor = function() {
	if(!Imported.Galv_CursorImage) return;
	if ($gameParty.inBattle()) {
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
    this.drawTextEx(this.commandName(index), rect.x + 10, rect.y, rect.width - 10);
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
	
	this._passivesObtainedOn_keySkillID_valueDate = [];
	this._passivesObtainedOn_keyDate_valueSkillID = [];
	
	//setup slut lvl
	this.setSlutLvl(0);
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

Game_Actor.prototype.isLearnedSkill = function(skillId) {
    if(this._skills && this._skills.length > 0)
		return this._skills.contains(skillId);
	else
		return false;
};

Game_Actor.prototype.hasPassive = function(skillId) {
	return this.isLearnedSkill(skillId);
};

Game_Actor.prototype.setCharacterCreatorPassive = function(skillId) {
	this.learnSkill(skillId);
	this.setDateForPassiveJustObtained(skillId);
};

////////
// Slut level
/////////////

Game_Actor.prototype.setSlutLvl = function(lvl) {
	this._slutLvl = Math.max(0, lvl);
	$gameVariables.setValue(VARIABLE_SLUT_LVL_ID, this._slutLvl);
	//this.refreshSlutLvlStageVariables_Map();
};
Game_Actor.prototype.increaseSlutLvl = function() {
	this.setSlutLvl(this.slutLvl + 1);
};
Game_Actor.prototype.decreaseSlutLvl = function() {
	this.setSlutLvl(this.slutLvl - 1);
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
	this._passiveCategory[PASSIVE_CATEGORY_VAGINAL_SEX] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BUTT_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_BUTT] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ANAL] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ANAL_SEX] = [];
	this._passiveCategory[PASSIVE_CATEGORY_COCK_DESIRE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_PLEASURE] = [];
	this._passiveCategory[PASSIVE_CATEGORY_ORGASM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SEMEN] = [];
	this._passiveCategory[PASSIVE_CATEGORY_SADISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_MASOCHISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_MASTURBATION] = [];
	this._passiveCategory[PASSIVE_CATEGORY_EXHIBITIONISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_FETISHISM] = [];
	this._passiveCategory[PASSIVE_CATEGORY_RELATIONS] = [];
	
	let passiveSkillsArray = [];
	passiveSkillsArray = this.skills().filter(function(item) {
			return item && item.stypeId === SKILLTYPE_PASSIVES_ID;
    }, this);
	
	for(let i = 0; i < passiveSkillsArray.length; ++i) {
		let skillId = passiveSkillsArray[i].id;
		let passiveCat = passiveSkillsArray[i].passiveCategory;
		this._passiveCategory[PASSIVE_CATEGORY_ALL].push(skillId);
		for(let c = 0; c < passiveCat.length; ++c) {
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
	
	this._recordSubduedErectEnemiesWithAttack = 0;
	this._recordSubduedAngryEnemies = 0;
	this._recordSubduedMetalEnemies = 0;
	this._recordSubduedTotal = 0;
	
	this._recordMasturbatedOfficeCount = 0;
	this._recordMasturbatedGuardStationCount = 0;
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
	
	this._recordTalkedAtCount = 0;
	this._recordSeenMouthCount = 0;
	this._recordSeenBoobsCount = 0;
	this._recordSeenNipplesCount = 0;
	this._recordSeenClitCount = 0;
	this._recordSeenPussyCount = 0;
	this._recordSeenButtCount = 0;
	this._recordSeenAnalCount = 0;
	this._recordSeenAnalCreampieCount = 0;
	this._recordSeenPussyCreampieCount = 0;
	this._recordSeenBukkakeFaceCount = 0;
	this._recordSeenBukkakeBoobsCount = 0;
	this._recordSeenBukkakeButtCount = 0;
	this._recordSeenMouthSwallowCount = 0;
	this._recordSeenTotalCount = 0;
	
	this._recordButtSpankedCount = 0;
	this._recordSeeEnemyTalkCockCount = 0;
	this._recordSeeJerkOffCount = 0;
	this._recordCunnilingusCount = 0;
	this._recordRimjobCount = 0;
	this._recordFootjobCount = 0;
	this._recordCockPettedCount = 0;
	this._recordFingersSuckedCount = 0;
	
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
	
	this._recordDoublePenetrationCount = 0;
	this._recordTriplePenetrationCount = 0;
	this._recordBlowbangCount = 0;
	this._recordUrinalCount = 0;
	
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
	
	this._recordTotalEjaculationCount = 0;
	this._recordTotalEjaculationML = 0;
	
	this._recordClothesStrippedCount = 0;
	this._recordPantiesStrippedCount = 0;
	
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
	this._recordSexualPartnersVisitor = 0;
	this._recordSexualPartnersTotal = 0;
	this._recordMetalSexualPartnersCount = 0;
	this._recordPreLevelFourOldSexualPartners = 0;
	this._recordPostLevelThreeNewSexualPartners = 0;
	
	
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
	this._recordSwallowPeople = 0;
	this._recordPussyCreampiePeople = 0;
	this._recordAnalCreampiePeople = 0;
	this._recordOrgasmPresencePeople = 0;
	this._recordCunnilingusPeople = 0;
	this._recordRimjobPeople = 0;
	this._recordFootjobPeople = 0;
	this._recordButtSpankedPeople = 0;
	this._recordCockPettedPeople = 0;
	this._recordFingersSuckedPeople = 0;
	this._recordBoobsPettedPeople = 0;
	this._recordNipplesPettedPeople = 0;
	this._recordClitPettedPeople = 0;
	this._recordPussyPettedPeople = 0;
	this._recordButtPettedPeople = 0;
	this._recordAnalPettedPeople = 0;
	this._recordSeenPeople = 0;
	this._recordTalkedAtPeople = 0;
	this._recordSeeJerkOffPeople = 0;
	this._recordSeeEnemyTalkCockPeople = 0;
	
	this._recordMaxReachedMouthDesireCount = 0;
	this._recordMaxReachedBoobsDesireCount = 0;
	this._recordMaxReachedPussyDesireCount = 0;
	this._recordMaxReachedButtDesireCount = 0;
	this._recordMaxReachedCockDesireCount = 0;
	this._recordMaxReachedAllDesireCount = 0;
	
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
	this._recordGloryBattleCockHandledCount = 0;
	this._recordGloryBattleCockEjaculationCount = 0;
};

Game_Actor.prototype.clearTempRecords = function() {
	this._tempMaxReachedMouthDesire = false;
	this._tempMaxReachedBoobsDesire = false;
	this._tempMaxReachedButtDesire = false;
	this._tempMaxReachedPussyDesire = false;
	this._tempMaxReachedCockDesire = false;
	this._tempMaxReachedAllDesire = false;
	this._tempAllHolesCreamed = false;
	
	this._tempRecordSwallow = false;
	this._tempRecordCockinessIncrease = false;
	this._tempRecordCockinessReset = false;
	
	this._tempRecordBlowbang = false;
	this._tempRecordUrinal = false;
	
	this._tempRecordKissedPeople = 0;
	this._tempRecordButtPettedCount = 0;
	this._tempRecordAnalPettedCount = 0;
	this._tempRecordButtSpankedCount = 0;
	this._tempRecordPussyFuckedCount = 0;
	this._tempRecordAnalFuckedCount = 0;
	this._tempRecordOrgasmCount = 0;
	this._tempRecordTittyFuckedPeople = 0;
	this._tempRecordBukkakeBoobsML = 0;
	
	this._tempRecordDownStaminaCurrentlyCounted = false;
	
	this._gotOrgasmFromSkillType = false;
	this.resetGotHitBySkillType();
};

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
	this._playthroughRecordGloryOrgasmWhileGuestEatingCount = 0;
	this._playthroughRecordGloryCreampieML = 0;
	this._playthroughRecordGlorySwallowML = 0;
	
	
	//Other
	this._playthroughRecordGuardBattleCount = 0;
	
};

Game_Actor.prototype.addEnemySexualPartner = function(enemy) {
	if(enemy.isPrisonerType && this._recordSexualPartnersPrisoner < LIMIT_SEXUAL_PARTNERS_PRISONER) {
		this._recordSexualPartnersPrisoner++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isGuardType && this._recordSexualPartnersGuard < LIMIT_SEXUAL_PARTNERS_GUARD) {
		this._recordSexualPartnersGuard++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isThugType && this._recordSexualPartnersThug < LIMIT_SEXUAL_PARTNERS_THUG) {
		this._recordSexualPartnersThug++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isGoblinType && this._recordSexualPartnersGoblin < LIMIT_SEXUAL_PARTNERS_GOBLIN) {
		this._recordSexualPartnersGoblin++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isNerdType && this._recordSexualPartnersNerd < LIMIT_SEXUAL_PARTNERS_NERD) {
		this._recordSexualPartnersNerd++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isRogueType && this._recordSexualPartnersRogue < LIMIT_SEXUAL_PARTNERS_ROGUE) {
		this._recordSexualPartnersRogue++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isSlimeType && this._recordSexualPartnersSlime < LIMIT_SEXUAL_PARTNERS_SLIME) {
		this._recordSexualPartnersSlime++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isLizardmanType && this._recordSexualPartnersLizardman < LIMIT_SEXUAL_PARTNERS_LIZARDMAN) {
		this._recordSexualPartnersLizardman++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isOrcType && this._recordSexualPartnersOrc < LIMIT_SEXUAL_PARTNERS_ORC) {
		this._recordSexualPartnersOrc++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	else if(enemy.isHomelessType && this._recordSexualPartnersHomeless < LIMIT_SEXUAL_PARTNERS_HOMELESS) {
		this._recordSexualPartnersHomeless++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	
	
	else if(enemy.isVisitorType && this._recordSexualPartnersVisitor < LIMIT_SEXUAL_PARTNERS_VISITOR) {
		this._recordSexualPartnersVisitor++;
		this._recordSexualPartnersTotal++;
		if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED))
			this._recordPostLevelThreeNewSexualPartners++
	}
	
	if(enemy.hasMetalPrefix()) {
		this._recordMetalSexualPartnersCount++;
	}
};

Game_Actor.prototype.addToVirginityTakenViaPussyRecord = function() {
	if(this._recordVirginitiesTakenViaPussy < LIMIT_VIRGINITIES_TAKEN_VIA_PUSSY) {
		this._recordVirginitiesTakenViaAnal++;
		this._recordVirginitiesTakenTotal++;
	}
};
Game_Actor.prototype.addToVirginityTakenViaAnalRecord = function() {
	if(this._recordVirginitiesTakenViaAnal < LIMIT_VIRGINITIES_TAKEN_VIA_ANAL) {
		this._recordVirginitiesTakenViaAnal++;
		this._recordVirginitiesTakenTotal++;
	}
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


Game_Actor.prototype.addToActorBoobshakeRecord = function(firstCount, enemy) {
	this._recordVisitorReceptionistBoobshakeCount++;
	if(firstCount) {
		this._recordVisitorReceptionistBoobshakePeople++;
		this._playthroughRecordReceptionistBoobshakePeople++;
	}
};
Game_Actor.prototype.addToActorKissedRecord = function(firstCount, enemy) {
	this._recordKissedCount = Math.min(this._recordKissedCount + 1, LIMIT_KISSED_COUNT);
	if(firstCount) {
		this._recordKissedPeople = Math.min(this._recordKissedPeople + 1, LIMIT_KISSED_PEOPLE);
		this._tempRecordKissedPeople++;
		if(enemy.isVisitorType) {
			this._recordVisitorReceptionistKissPeople++;
			this._playthroughRecordReceptionistKissPeople++;
		}
	}
	
	if(this._firstKissWantedID === -1) {
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
	
	this._lastKissName = enemy.name();
	this._lastKissDate = Prison.date;
	this._lastKissMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorHandjobRecord = function(firstCount, enemy) {
	this._recordHandjobCount = Math.min(this._recordHandjobCount + 1, LIMIT_HANDJOB_COUNT);
	if(firstCount) {
		this._recordHandjobPeople = Math.min(this._recordHandjobPeople + 1, LIMIT_HANDJOB_PEOPLE);
		if(enemy.isVisitorType) {
			this._recordVisitorReceptionistHandjobPeople++;
			this._playthroughRecordReceptionistHandjobPeople++;
		}
	}
	
	if(this._firstHandjobWantedID === -1) {
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
	
	this._lastHandjobName = enemy.name();
	this._lastHandjobDate = Prison.date;
	this._lastHandjobMapID = $gameMap._mapId;
	
	this.addToActorBlowbangRecord();
};
Game_Actor.prototype.addToActorBlowjobRecord = function(firstCount, enemy) {
	this._recordBlowjobCount = Math.min(this._recordBlowjobCount + 1, LIMIT_BLOWJOB_COUNT);
	if(firstCount) {
		this._recordBlowjobPeople = Math.min(this._recordBlowjobPeople + 1, LIMIT_BLOWJOB_PEOPLE);
		if(enemy.isVisitorType) {
			this._recordVisitorReceptionistBlowjobPeople++;
			this._playthroughRecordReceptionistBlowjobPeople++;
		}
	}
	
	if(this._firstKissWantedID === -1) {
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
	if(this._firstBlowjobWantedID === -1) {
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
	
	this._lastBlowjobName = enemy.name();
	this._lastBlowjobDate = Prison.date;
	this._lastBlowjobMapID = $gameMap._mapId;
	
	this.addToActorDoubleAndTriplePenetrationRecord();
	this.addToActorBlowbangRecord();
};
Game_Actor.prototype.addToActorTittyFuckRecord = function(firstCount, enemy) {
	this._recordTittyFuckCount = Math.min(this._recordTittyFuckCount + 1, LIMIT_TITTYFUCK_COUNT);
	if(firstCount) {
		this._recordTittyFuckPeople = Math.min(this._recordTittyFuckPeople + 1, LIMIT_TITTYFUCK_PEOPLE);
		this._tempRecordTittyFuckedPeople++;
	}
	
	if(this._firstTittyFuckWantedID === -1) {
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
	
	this._lastTittyFuckName = enemy.name();
	this._lastTittyFuckDate = Prison.date;
	this._lastTittyFuckMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorCunnilingusRecord = function(firstCount, enemy) {
	this._recordCunnilingusCount = Math.min(this._recordCunnilingusCount + 1, LIMIT_CUNNILINGUS_COUNT);
	if(firstCount) this._recordCunnilingusPeople = Math.min(this._recordCunnilingusPeople + 1, LIMIT_CUNNILINGUS_PEOPLE);
	
	if(this._firstCunnilingusWantedID === -1) {
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
	
	this._lastCunnilingusName = enemy.name();
	this._lastCunnilingusDate = Prison.date;
	this._lastCunnilingusMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorRimjobRecord = function(firstCount, enemy) {
	this._recordRimjobCount = Math.min(this._recordRimjobCount + 1, LIMIT_RIMJOB_COUNT);
	if(firstCount) this._recordRimjobPeople = Math.min(this._recordRimjobPeople + 1, LIMIT_RIMJOB_PEOPLE);
	
	if(this._firstKissWantedID === -1) {
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
	if(this._firstRimjobWantedID === -1) {
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
	
	this._lastRimjobName = enemy.name();
	this._lastRimjobDate = Prison.date;
	this._lastRimjobMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorFootjobRecord = function(firstCount, enemy) {
	this._recordFootjobCount = Math.min(this._recordFootjobCount + 1, LIMIT_FOOTJOB_COUNT);
	if(firstCount) this._recordFootjobPeople = Math.min(this._recordFootjobPeople + 1, LIMIT_FOOTJOB_PEOPLE);
	
	if(this._firstFootjobWantedID === -1) {
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
	
	this._lastFootjobName = enemy.name();
	this._lastFootjobDate = Prison.date;
	this._lastFootjobMapID = $gameMap._mapId;
};

Game_Actor.prototype.addToActorButtSpankedRecord = function(firstCount, enemy) {
	this._recordButtSpankedCount = Math.min(this._recordButtSpankedCount + 1, LIMIT_BUTTSPANKED_COUNT);
	this._tempRecordButtSpankedCount++;
	if(firstCount) this._recordButtSpankedPeople = Math.min(this._recordButtSpankedPeople + 1, LIMIT_BUTTSPANKED_PEOPLE);
	
	if(this._firstButtSpankedWantedID === -1) {
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
	
	this._lastButtSpankedName = enemy.name();
	this._lastButtSpankedDate = Prison.date;
	this._lastButtSpankedMapID = $gameMap._mapId;
};


Game_Actor.prototype.addToActorPussyFuckedRecord = function(firstCount, enemy) {
	this._recordPussyFuckedCount = Math.min(this._recordPussyFuckedCount + 1, LIMIT_PUSSYFUCKED_COUNT);
	this._tempRecordPussyFuckedCount++;
	if(firstCount) this._recordPussyFuckedPeople = Math.min(this._recordPussyFuckedPeople + 1, LIMIT_PUSSYFUCKED_PEOPLE);
	
	if(this._firstPussySexWantedID === -1) {
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
	}
	
	this._lastPussySexName = enemy.name();
	this._lastPussySexDate = Prison.date;
	this._lastPussySexMapID = $gameMap._mapId;
	
	$gameSwitches.setValue(SWITCH_IS_VIRGIN_ID, false);
	$gameSwitches.setValue(SWITCH_IS_NON_VIRGIN_ID, true);
	
	this.addToActorDoubleAndTriplePenetrationRecord();
	this.addToActorUrinalRecord();
};
Game_Actor.prototype.addToActorAnalFuckedRecord = function(firstCount, enemy) {
	this._recordAnalFuckedCount = Math.min(this._recordAnalFuckedCount + 1, LIMIT_ANALFUCKED_COUNT);
	this._tempRecordAnalFuckedCount++;
	if(firstCount) this._recordAnalFuckedPeople = Math.min(this._recordAnalFuckedPeople + 1, LIMIT_ANALFUCKED_PEOPLE);
	
	if(this._firstAnalSexWantedID === -1) {
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
		
		if(this._firstPussySexWantedID === -1) {
			this._firstAnalSexBeforePussySex = true;
		}
	}
	
	this._lastAnalSexName = enemy.name();
	this._lastAnalSexDate = Prison.date;
	this._lastAnalSexMapID = $gameMap._mapId;
	
	this.addToActorDoubleAndTriplePenetrationRecord();
	this.addToActorUrinalRecord();
};
Game_Actor.prototype.addToActorBukkakeTotalRecord = function(firstCount, enemy) {
	this._recordBukkakeTotalCount = Math.min(this._recordBukkakeTotalCount + 1, LIMIT_BUKKAKE_TOTAL_COUNT);
	this._recordTotalEjaculationCount = Math.min(this._recordTotalEjaculationCount + 1, LIMIT_TOTAL_EJACULATION_COUNT);
	if(firstCount) this._recordBukkakePeople = Math.min(this._recordBukkakePeople + 1, LIMIT_BUKKAKE_PEOPLE);
	
	if(this._firstBukkakeWantedID === -1) {
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
	
	this._lastBukkakeName = enemy.name();
	this._lastBukkakeDate = Prison.date;
	this._lastBukkakeMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorSwallowRecord = function(firstCount, enemy) {
	this._recordSwallowCount = Math.min(this._recordSwallowCount + 1, LIMIT_SWALLOW_COUNT);
	this._recordTotalEjaculationCount = Math.min(this._recordTotalEjaculationCount + 1, LIMIT_TOTAL_EJACULATION_COUNT);
	if(firstCount) this._recordSwallowPeople = Math.min(this._recordSwallowPeople + 1, LIMIT_SWALLOW_PEOPLE);
	
	if(this._firstSwallowWantedID === -1) {
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
	
	this._lastSwallowName = enemy.name();
	this._lastSwallowDate = Prison.date;
	this._lastSwallowMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorPussyCreampieRecord = function(firstCount, enemy) {
	this._recordPussyCreampieCount = Math.min(this._recordPussyCreampieCount + 1, LIMIT_PUSSYCREAMPIE_COUNT);
	this._recordTotalEjaculationCount = Math.min(this._recordTotalEjaculationCount + 1, LIMIT_TOTAL_EJACULATION_COUNT);
	if(firstCount) this._recordPussyCreampiePeople = Math.min(this._recordPussyCreampiePeople + 1, LIMIT_PUSSYCREAMPIE_PEOPLE);
	
	if(this._firstPussyCreampieWantedID === -1) {
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
	
	this._lastPussyCreampieName = enemy.name();
	this._lastPussyCreampieDate = Prison.date;
	this._lastPussyCreampieMapID = $gameMap._mapId;
};
Game_Actor.prototype.addToActorAnalCreampieRecord = function(firstCount, enemy) {
	this._recordAnalCreampieCount = Math.min(this._recordAnalCreampieCount + 1, LIMIT_ANALCREAMPIE_COUNT);
	this._recordTotalEjaculationCount = Math.min(this._recordTotalEjaculationCount + 1, LIMIT_TOTAL_EJACULATION_COUNT);
	if(firstCount) this._recordAnalCreampiePeople = Math.min(this._recordAnalCreampiePeople + 1, LIMIT_ANALCREAMPIE_PEOPLE);
	
	if(this._firstAnalCreampieWantedID === -1) {
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
	
	this._lastAnalCreampieName = enemy.name();
	this._lastAnalCreampieDate = Prison.date;
	this._lastAnalCreampieMapID = $gameMap._mapId;
};

Game_Actor.prototype.addToActorOrgasmPresenceRecord = function(firstCount) {
	if(firstCount) this._recordOrgasmPresencePeople = Math.min(this._recordOrgasmPresencePeople + 1, LIMIT_ORGASMPRESENCE_PEOPLE);
};

Game_Actor.prototype.addToActorDoubleAndTriplePenetrationRecord = function() {
	let filledBodySlots = 0;
	
	if(this.isBodySlotInserted(MOUTH_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(ANAL_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(PUSSY_ID)) filledBodySlots++;
	
	if(filledBodySlots === 2) this.addToActorDoublePenetrationRecord();
	else if(filledBodySlots === 3) this.addToActorTriplePenetrationRecord();
};

Game_Actor.prototype.addToActorUrinalRecord = function() {
	let filledBodySlots = 0;
	
	if(this.isBodySlotInserted(ANAL_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(PUSSY_ID)) filledBodySlots++;
	
	if(filledBodySlots > 0 && !this._tempRecordUrinal && this.isInDefeatedLevel2Pose()) {
		this._recordUrinalCount = Math.min(this._recordUrinalCount + 1, LIMIT_URINAL_COUNT); 
		this._tempRecordUrinal = true;
	}
};

Game_Actor.prototype.addToActorBlowbangRecord = function() {
	let filledBodySlots = 0;
	
	if(this.isBodySlotInserted(MOUTH_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(RIGHT_HAND_ID)) filledBodySlots++;
	if(this.isBodySlotInserted(LEFT_HAND_ID)) filledBodySlots++;
	
	if(filledBodySlots === 3 && !this._tempRecordBlowbang && this.isInDefeatedLevel1Pose()) {
		this._recordBlowbangCount = Math.min(this._recordBlowbangCount + 1, LIMIT_BLOWBANG_COUNT); 
		this._tempRecordBlowbang = true;
	}
};

Game_Party.prototype.addRecordEscaped = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordEscaped = Math.min(actor._recordEscaped + 1, LIMIT_ESCAPE_TOTAL_COUNT); 
};

Game_Party.prototype.addRecordDefeated = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordDefeatedTotal = Math.min(actor._recordDefeatedTotal + 1, LIMIT_DEFEATED_TOTAL_COUNT); 
	actor.resetCockiness();
	
	//todo: change these to playthrough records
	if(Prison.currentlyPrisonLevelOne()) 
		actor._recordDefeatedLevelOneCount = Math.min(actor._recordDefeatedLevelOneCount + 1, LIMIT_DEFEATED_LEVEL_ONE_COUNT);
	else if(Prison.currentlyPrisonLevelTwo()) 
		actor._recordDefeatedLevelTwoCount = Math.min(actor._recordDefeatedLevelTwoCount + 1, LIMIT_DEFEATED_LEVEL_TWO_COUNT);
	else if(Prison.currentlyPrisonLevelThree())
		actor._recordDefeatedLevelThreeCount = Math.min(actor._recordDefeatedLevelThreeCount + 1, LIMIT_DEFEATED_LEVEL_THREE_COUNT);
	else if(Prison.currentlyPrisonLevelFour()) 
		actor._recordDefeatedLevelFourCount = Math.min(actor._recordDefeatedLevelFourCount + 1, LIMIT_DEFEATED_LEVEL_FOUR_COUNT);
	else if(Prison.currentlyPrisonLevelFive()) 
		actor._recordDefeatedLevelFiveCount = Math.min(actor._recordDefeatedLevelFiveCount + 1, LIMIT_DEFEATED_LEVEL_FIVE_COUNT);
};

Game_Party.prototype.addRecordInvasionBattle = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordInvasionTotal = Math.min(actor._recordInvasionTotal + 1, LIMIT_INVASION_BATTLE_TOTAL_COUNT); 
	
	if(Prison.currentlyPrisonLevelOne()) 
		actor._recordInvasionLevelOne = Math.min(actor._recordInvasionLevelOne + 1, LIMIT_INVASION_BATTLE_LEVEL_ONE_COUNT);
	else if(Prison.currentlyOutsidePrison()) 
		actor._recordInvasionOffice = Math.min(actor._recordInvasionOffice + 1, LIMIT_INVASION_BATTLE_OFFICE_COUNT);
	else if(Prison.currentlyPrisonLevelTwo()) 
		actor._recordInvasionLevelTwo = Math.min(actor._recordInvasionLevelTwo + 1, LIMIT_INVASION_BATTLE_LEVEL_TWO_COUNT);
	else if(Prison.currentlyPrisonLevelThree())
		actor._recordInvasionLevelThree = Math.min(actor._recordInvasionLevelThree + 1, LIMIT_INVASION_BATTLE_LEVEL_THREE_COUNT);
	else if(Prison.currentlyPrisonLevelFour()) 
		actor._recordInvasionLevelFour = Math.min(actor._recordInvasionLevelFour + 1, LIMIT_INVASION_BATTLE_LEVEL_FOUR_COUNT);
	else if(Prison.currentlyPrisonLevelFive()) 
		actor._recordInvasionLevelFive = Math.min(actor._recordInvasionLevelFive + 1, LIMIT_INVASION_BATTLE_LEVEL_FIVE_COUNT);
};

Game_Party.prototype.addRecordSubdued = function(enemySubdued) {
	if(enemySubdued._tagDontCountSubdued) return;
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordSubduedTotal = Math.min(actor._recordSubduedTotal + 1, LIMIT_SUBDUED_TOTAL_COUNT);
	actor.addCockinessFromSubduingEnemy(enemySubdued.enemyExperienceLvl());

	if(enemySubdued.isErect && enemySubdued.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ATTACK)) {
		actor._recordSubduedErectEnemiesWithAttack = Math.min(actor._recordSubduedErectEnemiesWithAttack + 1, LIMIT_SUBDUED_ERECT_WITH_ATTACK_COUNT);
	}
	if(enemySubdued.isAngry) {
		actor._recordSubduedAngryEnemies = Math.min(actor._recordSubduedAngryEnemies + 1, LIMIT_SUBDUED_ANGRY_COUNT);
	}
	if(enemySubdued.hasMetalPrefix()) {
		actor._recordSubduedMetalEnemies++;
		actor._todaySubduedMetalEnemiesCount++;
	}
};

Game_Actor.prototype.addToFixClothesUsageCountRecord = function() { this._recordFixClothesUsageCount = Math.min(this._recordFixClothesUsageCount + 1, LIMIT_FIX_CLOTHES_USAGE_COUNT); };
Game_Actor.prototype.addToCockKickUsageCountRecord = function() { this._recordCockKickUsageCount = Math.min(this._recordCockKickUsageCount + 1, LIMIT_COCK_KICK_USAGE_COUNT); };

Game_Actor.prototype.addToKissUsageCountRecord = function() { 
	this._recordKissUsageCount = Math.min(this._recordKissUsageCount + 1, LIMIT_KISS_USAGE_COUNT);
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToCockStareUsageCountRecord = function() { 
	this._recordCockStareUsageCount = Math.min(this._recordCockStareUsageCount + 1, LIMIT_COCK_STARE_USAGE_COUNT);
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToCockPetUsageCountRecord = function() { 
	this._recordCockPetUsageCount = Math.min(this._recordCockPetUsageCount + 1, LIMIT_COCK_PET_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToHandjobUsageCountRecord = function() { 
	this._recordHandjobUsageCount = Math.min(this._recordHandjobUsageCount + 1, LIMIT_HANDJOB_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToBlowjobUsageCountRecord = function() { 
	this._recordBlowjobUsageCount = Math.min(this._recordBlowjobUsageCount + 1, LIMIT_BLOWJOB_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToRimjobUsageCountRecord = function() { 
	this._recordRimjobUsageCount = Math.min(this._recordRimjobUsageCount + 1, LIMIT_RIMJOB_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToFootjobUsageCountRecord = function() { 
	this._recordFootjobUsageCount = Math.min(this._recordFootjobUsageCount + 1, LIMIT_FOOTJOB_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToTittyFuckUsageCountRecord = function() { 
	this._recordTittyFuckUsageCount = Math.min(this._recordTittyFuckUsageCount + 1, LIMIT_TITTY_FUCK_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToPussySexUsageCountRecord = function() { 
	this._recordPussySexUsageCount = Math.min(this._recordPussySexUsageCount + 1, LIMIT_PUSSY_SEX_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};
Game_Actor.prototype.addToAnalSexUsageCountRecord = function() { 
	this._recordAnalSexUsageCount = Math.min(this._recordAnalSexUsageCount + 1, LIMIT_ANAL_SEX_USAGE_COUNT); 
	this._playthroughRecordTotalSexSkillUsage++;
};


Game_Actor.prototype.addToClothesStrippedRecord = function() { this._recordClothesStrippedCount = Math.min(this._recordClothesStrippedCount + 1, LIMIT_CLOTHES_STRIPPED); };
Game_Actor.prototype.addToPantiesStrippedRecord = function() { this._recordPantiesStrippedCount = Math.min(this._recordPantiesStrippedCount + 1, LIMIT_PANTIES_STRIPPED); };
	
Game_Actor.prototype.addToActorBoobsPettedRecord = function(firstCount) { 
	this._recordBoobsPettedCount = Math.min(this._recordBoobsPettedCount + 1, LIMIT_BOOBS_PETTED_COUNT); 
	if(firstCount) this._recordBoobsPettedPeople = Math.min(this._recordBoobsPettedPeople + 1, LIMIT_BOOBS_PETTED_PEOPLE);	
};	
Game_Actor.prototype.addToActorNipplesPettedRecord = function(firstCount) { 
	this._recordNipplesPettedCount = Math.min(this._recordNipplesPettedCount + 1, LIMIT_NIPPLES_PETTED_COUNT); 
	if(firstCount) this._recordNipplesPettedPeople = Math.min(this._recordNipplesPettedPeople + 1, LIMIT_NIPPLES_PETTED_PEOPLE);	
};		
Game_Actor.prototype.addToActorButtPettedRecord = function(firstCount) { 
	this._recordButtPettedCount = Math.min(this._recordButtPettedCount + 1, LIMIT_BUTT_PETTED_COUNT); 
	this._tempRecordButtPettedCount++;
	if(firstCount) this._recordButtPettedPeople = Math.min(this._recordButtPettedPeople + 1, LIMIT_BUTT_PETTED_PEOPLE);
};		
Game_Actor.prototype.addToActorAnalPettedRecord = function(firstCount) { 
	this._recordAnalPettedCount = Math.min(this._recordAnalPettedCount + 1, LIMIT_ANAL_PETTED_COUNT); 
	this._tempRecordAnalPettedCount++;
	if(firstCount) this._recordAnalPettedPeople = Math.min(this._recordAnalPettedPeople + 1, LIMIT_ANAL_PETTED_PEOPLE);
};		
Game_Actor.prototype.addToActorClitPettedRecord = function(firstCount) { 
	this._recordClitPettedCount = Math.min(this._recordClitPettedCount + 1, LIMIT_CLIT_PETTED_COUNT); 
	if(firstCount) this._recordClitPettedPeople = Math.min(this._recordClitPettedPeople + 1, LIMIT_CLIT_PETTED_PEOPLE);
};
Game_Actor.prototype.addToActorPussyPettedRecord = function(firstCount) { 
	this._recordPussyPettedCount = Math.min(this._recordPussyPettedCount + 1, LIMIT_PUSSY_PETTED_COUNT); 
	if(firstCount) this._recordPussyPettedPeople = Math.min(this._recordPussyPettedPeople + 1, LIMIT_PUSSY_PETTED_PEOPLE);
};

Game_Actor.prototype.addToActorPettedWhileWorkingRecord = function() { 
	this._recordPettedWhileWorkingCount = Math.min(this._recordPettedWhileWorkingCount + 1, LIMIT_JOB_PETTED_COUNT); 
};

Game_Actor.prototype.addToActorFingersSuckedRecord = function(firstCount) {
	this._recordFingersSuckedCount = Math.min(this._recordFingersSuckedCount + 1, LIMIT_FINGERS_SUCKED_COUNT);
	if(firstCount) this._recordFingersSuckedPeople = Math.min(this._recordFingersSuckedPeople + 1, LIMIT_FINGERS_SUCKED_PEOPLE);
};

Game_Actor.prototype.addToActorCockPettedRecord = function(firstCount) {
	this._recordCockPettedCount = Math.min(this._recordCockPettedCount + 1, LIMIT_COCK_PETTED_COUNT);
	if(firstCount) this._recordCockPettedPeople = Math.min(this._recordCockPettedPeople + 1, LIMIT_COCK_PETTED_PEOPLE);
};

Game_Actor.prototype.addToActorTauntCountRecord = function(firstCount) {
	this._recordTauntCount = Math.min(this._recordTauntCount + 1, LIMIT_KARRYN_TAUNT_COUNT);
};
Game_Actor.prototype.addToActorTauntPeopleRecord = function(firstCount) {
	if(firstCount) this._recordTauntPeople = Math.min(this._recordTauntPeople + 1, LIMIT_KARRYN_TAUNT_PEOPLE);
};

Game_Actor.prototype.addToActorFlauntCountRecord = function(firstCount) {
	this._recordFlauntCount = Math.min(this._recordFlauntCount + 1, LIMIT_KARRYN_FLAUNT_COUNT);
};
Game_Actor.prototype.addToActorFlauntPeopleRecord = function(firstCount) {
	if(firstCount) this._recordFlauntPeople = Math.min(this._recordFlauntPeople + 1, LIMIT_KARRYN_FLAUNT_PEOPLE);
};


Game_Actor.prototype.addToActorDogezaCountRecord = function(firstCount) {
	this._recordDogezaCount = Math.min(this._recordDogezaCount + 1, LIMIT_KARRYN_DOGEZA_COUNT);
};
Game_Actor.prototype.addToActorDogezaPeopleRecord = function(firstCount) {
	if(firstCount) this._recordDogezaPeople = Math.min(this._recordDogezaPeople + 1, LIMIT_KARRYN_DOGEZA_PEOPLE);
};
Game_Actor.prototype.addToActorToysInsertedByPeopleRecord = function(firstCount) {
	if(firstCount) this._recordToysInsertedByPeople = Math.min(this._recordToysInsertedByPeople + 1, LIMIT_KARRYN_TOYS_INSERTED_BY_ENEMY_PEOPLE);
};



Game_Actor.prototype.addToActorTalkedAtRecord = function(firstCount) { 
	this._recordTalkedAtCount = Math.min(this._recordTalkedAtCount + 1, LIMIT_TALKED_AT_COUNT); 
	if(firstCount) this._recordTalkedAtPeople = Math.min(this._recordTalkedAtPeople + 1, LIMIT_TALKED_AT_PEOPLE);
};
Game_Actor.prototype.addToActorSeenRecord = function(firstCount) { 
	this._recordSeenTotalCount = Math.min(this._recordSeenTotalCount + 1, LIMIT_SEEN_TOTAL_COUNT); 
	if(firstCount) this._recordSeenPeople = Math.min(this._recordSeenPeople + 1, LIMIT_SEEN_PEOPLE);
};

Game_Actor.prototype.addToActorEnemyTalkCockRecord = function(firstCount) { 
	this._recordSeeEnemyTalkCockCount = Math.min(this._recordSeeEnemyTalkCockCount + 1, LIMIT_TALKED_COCK_COUNT); 
	if(firstCount) this._recordSeeEnemyTalkCockPeople = Math.min(this._recordSeeEnemyTalkCockPeople + 1, LIMIT_TALKED_COCK_PEOPLE);
};

Game_Actor.prototype.addToActorSeeJerkOffRecord = function(firstCount) { 
	this._recordSeeJerkOffCount = Math.min(this._recordSeeJerkOffCount + 1, LIMIT_SEEJERKOFF_COUNT); 
	if(firstCount) this._recordSeeJerkOffPeople = Math.min(this._recordSeeJerkOffPeople + 1, LIMIT_SEEJERKOFF_PEOPLE);
};

Game_Actor.prototype.addToActorSeenMouthRecord = function() { this._recordSeenMouthCount = Math.min(this._recordSeenMouthCount + 1, LIMIT_SEEN_MOUTH_COUNT); };
Game_Actor.prototype.addToActorSeenBoobsRecord = function() { this._recordSeenBoobsCount = Math.min(this._recordSeenBoobsCount + 1, LIMIT_SEEN_BOOBS_COUNT); };
Game_Actor.prototype.addToActorSeenNipplesRecord = function() { this._recordSeenNipplesCount = Math.min(this._recordSeenNipplesCount + 1, LIMIT_SEEN_NIPPLES_COUNT); };
Game_Actor.prototype.addToActorSeenClitRecord = function() { this._recordSeenClitCount = Math.min(this._recordSeenClitCount + 1, LIMIT_SEEN_CLIT_COUNT); };
Game_Actor.prototype.addToActorSeenPussyRecord = function() { this._recordSeenPussyCount = Math.min(this._recordSeenPussyCount + 1, LIMIT_SEEN_PUSSY_COUNT); };
Game_Actor.prototype.addToActorSeenButtRecord = function() { this._recordSeenButtCount = Math.min(this._recordSeenButtCount + 1, LIMIT_SEEN_BUTT_COUNT); };
Game_Actor.prototype.addToActorSeenAnalRecord = function() { this._recordSeenAnalCount = Math.min(this._recordSeenAnalCount + 1, LIMIT_SEEN_ANAL_COUNT); };
Game_Actor.prototype.addToActorSeenAnalCreampieRecord = function() { this._recordSeenAnalCreampieCount = Math.min(this._recordSeenAnalCreampieCount + 1, LIMIT_SEEN_ANAL_CREAMPIE_COUNT); };
Game_Actor.prototype.addToActorSeenPussyCreampieRecord = function() { this._recordSeenPussyCreampieCount = Math.min(this._recordSeenPussyCreampieCount + 1, LIMIT_SEEN_PUSSY_CREAMPIE_COUNT); };
Game_Actor.prototype.addToActorSeenBukkakeFaceRecord = function() { this._recordSeenBukkakeFaceCount = Math.min(this._recordSeenBukkakeFaceCount + 1, LIMIT_SEEN_BUKKAKE_FACE_COUNT); };
Game_Actor.prototype.addToActorSeenBukkakeBoobsRecord = function() { this._recordSeenBukkakeBoobsCount = Math.min(this._recordSeenBukkakeBoobsCount + 1, LIMIT_SEEN_BUKKAKE_BOOBS_COUNT); };
Game_Actor.prototype.addToActorSeenBukkakeButtRecord = function() { this._recordSeenBukkakeButtCount = Math.min(this._recordSeenBukkakeButtCount + 1, LIMIT_SEEN_BUKKAKE_BUTT_COUNT); };
Game_Actor.prototype.addToActorSeenMouthSwallowRecord = function() { this._recordSeenMouthSwallowCount = Math.min(this._recordSeenMouthSwallowCount + 1, LIMIT_SEEN_MOUTH_SWALLOW_COUNT); };

Game_Actor.prototype.addToActorCockinessGainedRecord = function(value) { 
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID)) {
		this._recordCockinessGainedValue = Math.min(this._recordCockinessGainedValue + value, LIMIT_COCKINESS_GAINED_COUNT); 
	}
};
Game_Actor.prototype.addToActorCockinessMaxRecord = function() { 
	this._recordCockinessMaxedCount = Math.min(this._recordCockinessMaxedCount + 1, LIMIT_COCKINESS_MAX_COUNT); 
};

Game_Actor.prototype.addToActorHornyRecord = function() { 
	this._recordHornyCount = Math.min(this._recordHornyCount + 1, LIMIT_HORNY_COUNT); 
};

Game_Actor.prototype.addToActorDebuffOffBalancedRecord = function() { 
	this._recordDebuffOffBalancedCount = Math.min(this._recordDebuffOffBalancedCount + 1, LIMIT_DEBUFF_OFF_BALANCED_COUNT); 
};
Game_Actor.prototype.addToActorDebuffFallenRecord = function() { 
	this._recordDebuffFallenCount = Math.min(this._recordDebuffFallenCount + 1, LIMIT_DEBUFF_FALLEN_COUNT); 
};
Game_Actor.prototype.addToActorDebuffDisarmedRecord = function() { 
	this._recordDebuffDisarmedCount = Math.min(this._recordDebuffDisarmedCount + 1, LIMIT_DEBUFF_DISARMED_COUNT); 
};
Game_Actor.prototype.addToActorDebuffDownStaminaRecord = function() { 
	if(!this._tempRecordDownStaminaCurrentlyCounted) {
		this._recordDebuffDownStaminaCount = Math.min(this._recordDebuffDownStaminaCount + 1, LIMIT_DEBUFF_DOWN_STAMINA_COUNT); 
		this._tempRecordDownStaminaCurrentlyCounted = true;
	}
};


Game_Actor.prototype.addToActorMasturbatedRecord = function() { 
	let mapId = $gameMap._mapId;
	this._recordMasturbatedTotalCount = Math.min(this._recordMasturbatedTotalCount + 1, LIMIT_MASTURBATED_TOTAL_COUNT);
	
	if(mapId === MAP_ID_KARRYN_OFFICE)
		this._recordMasturbatedOfficeCount = Math.min(this._recordMasturbatedOfficeCount + 1, LIMIT_MASTURBATED_OFFICE_COUNT);
	else if(mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION)
		this._recordMasturbatedGuardStationCount = Math.min(this._recordMasturbatedGuardStationCount + 1, LIMIT_MASTURBATED_GUARD_STATION_COUNT);
	
	if(!this._firstMasturbateDate) this._firstMasturbateDate = Prison.date;
	this._lastMasturbateDate = Prison.date;
};	


Game_Actor.prototype.addToActorDoublePenetrationRecord = function() { this._recordDoublePenetrationCount = Math.min(this._recordDoublePenetrationCount + 1, LIMIT_DOUBLE_PENETRATION_COUNT); };
Game_Actor.prototype.addToActorTriplePenetrationRecord = function() { this._recordTriplePenetrationCount = Math.min(this._recordTriplePenetrationCount + 1, LIMIT_TRIPLE_PENETRATION_COUNT); };		

		
Game_Actor.prototype.addToActorMouthPleasureRecord = function(num) { this._recordMouthPleasure = Math.min(this._recordMouthPleasure + num, LIMIT_MOUTH_PLEASURE); };	
Game_Actor.prototype.addToActorBoobsPleasureRecord = function(num) { this._recordBoobsPleasure = Math.min(this._recordBoobsPleasure + num, LIMIT_BOOBS_PLEASURE); };	
Game_Actor.prototype.addToActorNipplesPleasureRecord = function(num) { this._recordNipplesPleasure = Math.min(this._recordNipplesPleasure + num, LIMIT_NIPPLES_PLEASURE); };	
Game_Actor.prototype.addToActorPussyPleasureRecord = function(num) { this._recordPussyPleasure = Math.min(this._recordPussyPleasure + num, LIMIT_PUSSY_PLEASURE); };	
Game_Actor.prototype.addToActorClitPleasureRecord = function(num) { this._recordClitPleasure = Math.min(this._recordClitPleasure + num, LIMIT_CLIT_PLEASURE); };	
Game_Actor.prototype.addToActorButtPleasureRecord = function(num) { this._recordButtPleasure = Math.min(this._recordButtPleasure + num, LIMIT_BUTT_PLEASURE); };	
Game_Actor.prototype.addToActorAnalPleasureRecord = function(num) { this._recordAnalPleasure = Math.min(this._recordAnalPleasure + num, LIMIT_ANAL_PLEASURE); };	
Game_Actor.prototype.addToActorToysPleasureRecord = function(num) { this._recordToysPleasure = Math.min(this._recordToysPleasure + num, LIMIT_TOYS_PLEASURE); };
Game_Actor.prototype.addToActorFingersPleasureRecord = function(num) { this._recordFingersPleasure = Math.min(this._recordFingersPleasure + num, LIMIT_FINGERS_PLEASURE); };	
Game_Actor.prototype.addToActorTalkPleasureRecord = function(num) { this._recordTalkPleasure = Math.min(this._recordTalkPleasure + num, LIMIT_TALK_PLEASURE); };	
Game_Actor.prototype.addToActorSightPleasureRecord = function(num) { this._recordSightPleasure = Math.min(this._recordSightPleasure + num, LIMIT_SIGHT_PLEASURE); };	
Game_Actor.prototype.addToActorBukkakePleasureRecord = function(num) { this._recordBukkakePleasure = Math.min(this._recordBukkakePleasure + num, LIMIT_BUKKAKE_PLEASURE); };	
Game_Actor.prototype.addToActorSwallowPleasureRecord = function(num) { this._recordSwallowPleasure = Math.min(this._recordSwallowPleasure + num, LIMIT_SWALLOW_PLEASURE); };	
Game_Actor.prototype.addToActorPussyCreampiePleasureRecord = function(num) { this._recordPussyCreampiePleasure = Math.min(this._recordPussyCreampiePleasure + num, LIMIT_PUSSYCREAMPIE_PLEASURE); };	
Game_Actor.prototype.addToActorAnalCreampiePleasureRecord = function(num) { this._recordAnalCreampiePleasure = Math.min(this._recordAnalCreampiePleasure + num, LIMIT_ANALCREAMPIE_PLEASURE); };	
Game_Actor.prototype.addToActorMasochismPleasureRecord = function(num) { this._recordMasochismPleasure = Math.min(this._recordMasochismPleasure + num, LIMIT_MASOCHISM_PLEASURE); };	
Game_Actor.prototype.addToActorSadismPleasureRecord = function(num) { this._recordSadismPleasure = Math.min(this._recordSadismPleasure + num, LIMIT_SADISM_PLEASURE); };		
	
Game_Actor.prototype.addToActorPussyDripRecord = function(drip) { this._recordPussyDripTenthML = Math.min(this._recordPussyDripTenthML + drip, LIMIT_PUSSY_DRIP_TENTHML); };			
	
	
Game_Actor.prototype.addToActorBukkakeFaceMLRecord = function(ml) {
	this._recordBukkakeFaceML = Math.min(this._recordBukkakeFaceML + ml, LIMIT_BUKKAKE_FACE_ML);
	this._recordBukkakeTotalML = Math.min(this._recordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this._playthroughRecordBukkakeFaceML = Math.min(this._playthroughRecordBukkakeFaceML + ml, LIMIT_BUKKAKE_FACE_ML);
	this._playthroughRecordBukkakeTotalML = Math.min(this._playthroughRecordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this.addToActorBukkakeMaxMLRecord();
};	
Game_Actor.prototype.addToActorBukkakeArmsMLRecord = function(ml) {
	this._recordBukkakeArmsML = Math.min(this._recordBukkakeArmsML + ml, LIMIT_BUKKAKE_ARMS_ML);
	this._recordBukkakeTotalML = Math.min(this._recordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this._playthroughRecordBukkakeArmsML = Math.min(this._playthroughRecordBukkakeArmsML + ml, LIMIT_BUKKAKE_ARMS_ML);
	this._playthroughRecordBukkakeTotalML = Math.min(this._playthroughRecordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this.addToActorBukkakeMaxMLRecord();
};	

Game_Actor.prototype.addToActorBukkakeLegsMLRecord = function(ml) {
	this._recordBukkakeLegsML = Math.min(this._recordBukkakeLegsML + ml, LIMIT_BUKKAKE_LEGS_ML);
	this._recordBukkakeTotalML = Math.min(this._recordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this._playthroughRecordBukkakeLegsML = Math.min(this._playthroughRecordBukkakeLegsML + ml, LIMIT_BUKKAKE_LEGS_ML);
	this._playthroughRecordBukkakeTotalML = Math.min(this._playthroughRecordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this.addToActorBukkakeMaxMLRecord();
};	


Game_Actor.prototype.addToActorBukkakeBoobsMLRecord = function(ml) {
	this._recordBukkakeBoobsML = Math.min(this._recordBukkakeBoobsML + ml, LIMIT_BUKKAKE_BOOBS_ML);
	this._recordBukkakeTotalML = Math.min(this._recordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this._playthroughRecordBukkakeBoobsML = Math.min(this._playthroughRecordBukkakeBoobsML + ml, LIMIT_BUKKAKE_BOOBS_ML);
	this._playthroughRecordBukkakeTotalML = Math.min(this._playthroughRecordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this.addToActorBukkakeMaxMLRecord();
	this._tempRecordBukkakeBoobsML += ml;
};	
Game_Actor.prototype.addToActorBukkakeButtMLRecord = function(ml) {
	this._recordBukkakeButtML = Math.min(this._recordBukkakeButtML + ml, LIMIT_BUKKAKE_BUTT_ML);
	this._recordBukkakeTotalML = Math.min(this._recordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this._playthroughRecordBukkakeButtML = Math.min(this._playthroughRecordBukkakeButtML + ml, LIMIT_BUKKAKE_BUTT_ML);
	this._playthroughRecordBukkakeTotalML = Math.min(this._playthroughRecordBukkakeTotalML + ml, LIMIT_BUKKAKE_TOTAL_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	
	this.addToActorBukkakeMaxMLRecord();
};	

Game_Actor.prototype.addToActorBukkakeMaxMLRecord = function() {
	if(this.getCurrentBukkakeTotal() > this._recordBukkakeTotalMaxML) this._recordBukkakeTotalMaxML = this.getCurrentBukkakeTotal();
	if(this.getCurrentBukkakeTotal() > this._playthroughRecordBukkakeTotalMaxML) this._playthroughRecordBukkakeTotalMaxML = this.getCurrentBukkakeTotal();
};	

Game_Actor.prototype.addToActorSwallowMLRecord = function(ml) {
	this._recordSwallowML = Math.min(this._recordSwallowML + ml, LIMIT_SWALLOW_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	if(this._liquidSwallow > this._recordSwallowMaxML) this._recordSwallowMaxML = this._liquidSwallow;
	
	this._playthroughRecordSwallowML = Math.min(this._playthroughRecordSwallowML + ml, LIMIT_SWALLOW_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	if(this._liquidSwallow > this._playthroughRecordSwallowMaxML) this._playthroughRecordSwallowMaxML = this._liquidSwallow;
	
	this.addToActorAllHolesCreamedRecord();
};	
Game_Actor.prototype.addToActorPussyCreampieMLRecord = function(ml) {
	this._recordPussyCreampieML = Math.min(this._recordPussyCreampieML + ml, LIMIT_PUSSYCREAMPIE_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	if(this._liquidCreampiePussy > this._recordPussyCreampieMaxML) this._recordPussyCreampieMaxML = this._liquidCreampiePussy;
	
	this._playthroughRecordPussyCreampieML = Math.min(this._playthroughRecordPussyCreampieML + ml, LIMIT_PUSSYCREAMPIE_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	if(this._liquidCreampiePussy > this._playthroughRecordPussyCreampieMaxML) this._playthroughRecordPussyCreampieMaxML = this._liquidCreampiePussy;
	
	this.addToActorAllHolesCreamedRecord();
};	
Game_Actor.prototype.addToActorAnalCreampieMLRecord = function(ml) {
	this._recordAnalCreampieML = Math.min(this._recordAnalCreampieML + ml, LIMIT_ANALCREAMPIE_ML);
	this._recordTotalEjaculationML = Math.min(this._recordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	if(this._liquidCreampieAnal > this._recordAnalCreampieMaxML) this._recordAnalCreampieMaxML = this._liquidCreampieAnal;
	
	this._playthroughRecordAnalCreampieML = Math.min(this._playthroughRecordAnalCreampieML + ml, LIMIT_ANALCREAMPIE_ML);
	this._playthroughRecordTotalEjaculationML = Math.min(this._playthroughRecordTotalEjaculationML + ml, LIMIT_TOTAL_EJACULATION_ML);
	if(this._liquidCreampieAnal > this._playthroughRecordAnalCreampieMaxML) this._playthroughRecordAnalCreampieMaxML = this._liquidCreampieAnal;
	
	this.addToActorAllHolesCreamedRecord();
};	
	
Game_Actor.prototype.addToActorOrgasmRecord = function(ml, consecutiveCount) {
	this._recordOrgasmCount = Math.min(this._recordOrgasmCount + consecutiveCount, LIMIT_ORGASM_COUNT);
	this._tempRecordOrgasmCount += consecutiveCount;
	this._recordOrgasmML = Math.min(this._recordOrgasmML + ml, LIMIT_ORGASM_ML);
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
		this._recordOrgasmFromPettingCount = Math.min(this._recordOrgasmFromPettingCount + 1, LIMIT_ORGASM_FROM_PETTING);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX)) {
		this._recordOrgasmFromPussySexCount = Math.min(this._recordOrgasmFromPussySexCount + 1, LIMIT_ORGASM_FROM_PUSSYSEX);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX)) {
		this._recordOrgasmFromAnalSexCount = Math.min(this._recordOrgasmFromAnalSexCount + 1, LIMIT_ORGASM_FROM_ANALSEX);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS)) {
		this._recordOrgasmFromKissCount = Math.min(this._recordOrgasmFromKissCount + 1, LIMIT_ORGASM_FROM_KISS);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_KISSING)) {
		this._recordOrgasmFromKissCount = Math.min(this._recordOrgasmFromKissCount + 1, LIMIT_ORGASM_FROM_KISS);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUNNILINGUS)) {
		this._recordOrgasmFromCunnilingusCount = Math.min(this._recordOrgasmFromCunnilingusCount + 1, LIMIT_ORGASM_FROM_CUNNILINGUS);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK)) {
		this._recordOrgasmFromTalkCount = Math.min(this._recordOrgasmFromTalkCount + 1, LIMIT_ORGASM_FROM_TALK);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SIGHT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_SIGHT)) {
		this._recordOrgasmFromSightCount = Math.min(this._recordOrgasmFromSightCount + 1, LIMIT_ORGASM_FROM_SIGHT);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB)) {
		this._recordOrgasmFromHandjobCount = Math.min(this._recordOrgasmFromHandjobCount + 1, LIMIT_ORGASM_FROM_HANDJOB);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB)) {
		this._recordOrgasmFromBlowjobCount = Math.min(this._recordOrgasmFromBlowjobCount + 1, LIMIT_ORGASM_FROM_BLOWJOB);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK)) {
		this._recordOrgasmFromTittyFuckCount = Math.min(this._recordOrgasmFromTittyFuckCount + 1, LIMIT_ORGASM_FROM_TITTYFUCK);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE)) {
		this._recordOrgasmFromPussyCreampieCount = Math.min(this._recordOrgasmFromPussyCreampieCount + 1, LIMIT_ORGASM_FROM_PUSSYCREAMPIE);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE)) {
		this._recordOrgasmFromAnalCreampieCount = Math.min(this._recordOrgasmFromAnalCreampieCount + 1, LIMIT_ORGASM_FROM_ANALCREAMPIE);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW)) {
		this._recordOrgasmFromCumSwallowCount = Math.min(this._recordOrgasmFromCumSwallowCount + 1, LIMIT_ORGASM_FROM_CUMSWALLOW);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE)) {
		this._recordOrgasmFromBukkakeCount = Math.min(this._recordOrgasmFromBukkakeCount + 1, LIMIT_ORGASM_FROM_BUKKAKE);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING)) {
		this._recordOrgasmFromSpankingCount = Math.min(this._recordOrgasmFromSpankingCount + 1, LIMIT_ORGASM_FROM_SPANKING);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING)) {
		this._recordOrgasmFromMasochismCount = Math.min(this._recordOrgasmFromMasochismCount + 1, LIMIT_ORGASM_FROM_MASOCHISM);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_MASOCHISM)) {
		this._recordOrgasmFromSadismCount = Math.min(this._recordOrgasmFromSadismCount + 1, LIMIT_ORGASM_FROM_SADISM);
	}
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_MASTURBATE)) {
		this._recordOrgasmFromMasturbationCount = Math.min(this._recordOrgasmFromMasturbationCount + 1, LIMIT_ORGASM_FROM_MASTURBATION);
	}		
	else if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY)) {
		this._recordOrgasmFromToysCount = Math.min(this._recordOrgasmFromToysCount + 1, LIMIT_ORGASM_FROM_TOYS);
	}

	this.resetGotHitBySkillType();	
};

Game_Actor.prototype.addToActorAllHolesCreamedRecord = function() {
	if(!this._tempAllHolesCreamed && this._liquidSwallow > 0 && this._liquidCreampiePussy > 0 && this._liquidCreampieAnal > 0) {
		this._recordAllHolesCreamedCount = Math.min(this._recordAllHolesCreamedCount + 1, LIMIT_ALL_HOLES_CREAMED_COUNT);
		this._tempAllHolesCreamed = true;
	}
};

Game_Actor.prototype.addToMaxReachedMouthDesireRecord = function() {
	if(!this._tempMaxReachedMouthDesire && this.mouthDesire === this.maxMouthDesire()) {
		this._recordMaxReachedMouthDesireCount = Math.min(this._recordMaxReachedMouthDesireCount + 1, LIMIT_MAX_REACHED_MOUTH_DESIRE_COUNT);
		this._tempMaxReachedMouthDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedBoobsDesireRecord = function() {
	if(!this._tempMaxReachedBoobsDesire && this.boobsDesire === this.maxBoobsDesire()) {
		this._recordMaxReachedBoobsDesireCount = Math.min(this._recordMaxReachedBoobsDesireCount + 1, LIMIT_MAX_REACHED_BOOBS_DESIRE_COUNT);
		this._tempMaxReachedBoobsDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedButtDesireRecord = function() {
	if(!this._tempMaxReachedButtDesire && this.buttDesire === this.maxButtDesire()) {
		this._recordMaxReachedButtDesireCount = Math.min(this._recordMaxReachedButtDesireCount + 1, LIMIT_MAX_REACHED_BUTT_DESIRE_COUNT);
		this._tempMaxReachedButtDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedPussyDesireRecord = function() {
	if(!this._tempMaxReachedPussyDesire && this.pussyDesire === this.maxPussyDesire()) {
		this._recordMaxReachedPussyDesireCount = Math.min(this._recordMaxReachedPussyDesireCount + 1, LIMIT_MAX_REACHED_PUSSY_DESIRE_COUNT);
		this._tempMaxReachedPussyDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedCockDesireRecord = function() {
	if(!this._tempMaxReachedCockDesire && this.cockDesire === this.maxCockDesire()) {
		this._recordMaxReachedCockDesireCount = Math.min(this._recordMaxReachedCockDesireCount + 1, LIMIT_MAX_REACHED_COCK_DESIRE_COUNT);
		this._tempMaxReachedCockDesire = true;
		this.addToMaxReachedAllDesireRecord();
	}
};
Game_Actor.prototype.addToMaxReachedAllDesireRecord = function() {
	if(!this._tempMaxReachedAllDesire && this._tempMaxReachedCockDesire && this._tempMaxReachedPussyDesire &&
	this._tempMaxReachedButtDesire && this._tempMaxReachedBoobsDesire && this._tempMaxReachedMouthDesire) {
		this._recordMaxReachedAllDesireCount = Math.min(this._recordMaxReachedAllDesireCount + 1, LIMIT_MAX_REACHED_ALL_DESIRE_COUNT);
		this._tempMaxReachedAllDesire = true;
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
	if(this._recordManuallyRemovedClitToyCount < LIMIT_MANUALLY_REMOVED_CLIT_TOY_COUNT) {
		this._recordManuallyRemovedClitToyCount++; 
		this._recordManuallyRemovedToysTotalCount++;
	}
};
Game_Actor.prototype.addToActorManuallyRemovedPussyToyRecord = function() { 
	if(this._recordManuallyRemovedPussyToyCount < LIMIT_MANUALLY_REMOVED_PUSSY_TOY_COUNT) {
		this._recordManuallyRemovedPussyToyCount++; 
		this._recordManuallyRemovedToysTotalCount++;
	}
};
Game_Actor.prototype.addToActorManuallyRemovedAnalToyRecord = function() { 
	if(this._recordManuallyRemovedAnalToyCount < LIMIT_MANUALLY_REMOVED_ANAL_TOY_COUNT) {
		this._recordManuallyRemovedAnalToyCount++; 
		this._recordManuallyRemovedToysTotalCount++;
	}
};

Game_Actor.prototype.addToClitToyInsertedRecord = function(enemy) { 
	if(this._recordClitToyInsertedCount < LIMIT_CLIT_TOY_INSERTED_COUNT) {
		this._recordClitToyInsertedCount++; 
		this._recordTotalToysInsertedCount++;
	}
};
Game_Actor.prototype.addToPussyToyInsertedRecord = function(enemy) { 
	if(this._recordPussyToyInsertedCount < LIMIT_PUSSY_TOY_INSERTED_COUNT) {
		this._recordPussyToyInsertedCount++; 
		this._recordTotalToysInsertedCount++;
	}
	
	if(this._firstPussySexWantedID === -1 && !this._firstPussySexWasToy) {
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
	}
};
Game_Actor.prototype.addToAnalToyInsertedRecord = function(enemy) { 
	if(this._recordAnalToyInsertedCount < LIMIT_ANAL_TOY_INSERTED_COUNT) {
		this._recordAnalToyInsertedCount++; 
		this._recordTotalToysInsertedCount++;
	}
};

Game_Actor.prototype.addToClitToyUsedByEnemyRecord = function(enemy) { 
	if(this._recordClitToyUsedByEnemyCount < LIMIT_CLIT_TOY_USED_BY_ENEMY_COUNT) {
		this._recordClitToyUsedByEnemyCount++; 
		this._recordTotalToysUsedByEnemyCount++;
	}
};
Game_Actor.prototype.addToPussyToyUsedByEnemyRecord = function(enemy) { 
	if(this._recordPussyToyUsedByEnemyCount < LIMIT_PUSSY_TOY_USED_BY_ENEMY_COUNT) {
		this._recordPussyToyUsedByEnemyCount++; 
		this._recordTotalToysUsedByEnemyCount++;
	}
};
Game_Actor.prototype.addToAnalToyUsedByEnemyRecord = function(enemy) { 
	if(this._recordAnalToyUsedByEnemyCount < LIMIT_ANAL_TOY_USED_BY_ENEMY_COUNT) {
		this._recordAnalToyUsedByEnemyCount++; 
		this._recordTotalToysUsedByEnemyCount++;
	}
};

///////////////
// Calculate Sensitivity Rating
/////////////////////

Game_Actor.prototype.calculateMouthSensitivityRating = function() {
	let rating = 0.4;

	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_KISS_COUNT_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_KISS_COUNT_ONE_ID)) rating += 0.3;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_TWO_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) rating += 0.25;
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_ANAL)) rating += 0.5;
	
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID)) {
		rating *= 1.3;
		rating += 0.7;
	}
	
	this._mouthSensitivityRating = rating;
};

Game_Actor.prototype.calculateBoobsSensitivityRating = function() {
	let rating = 0.4;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) rating += 0.75;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) rating += 0.9;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID)) rating += 0.3;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) rating += 0.25;
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_PUSSY)) rating += 0.5;
	
	if(this.hasPassive(CHARA_CREATE_TWO_BOOBS_ID)) {
		rating *= 1.3;
		rating += 0.8;
	}
	
	this._boobsSensitivityRating = rating;
};

Game_Actor.prototype.calculateNipplesSensitivityRating = function() {
	let rating = 0.25;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) rating += 0.3;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) rating += 0.25;
	
	if(this.isAroused()) {
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID)) rating += 0.7;
		else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID)) rating += 0.35;
		
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID)) rating += 0.7;
		else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID)) rating += 0.35;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_NIPPLES_ID)) {
		rating *= 1.3;
		rating += 0.75;
	}
	
	this._nipplesSensitivityRating = rating;
};

Game_Actor.prototype.calculateClitSensitivityRating = function() {
	let rating = 0.4;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_TWO_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_CUNNILINGUS_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) rating += 0.2;

	if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.isAroused()) {
		if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID)) rating += 0.7;
		else if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID)) rating += 0.35;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_CLIT_ID)) {
		rating *= 1.3;
		rating += 0.8;
	}
	
	this._clitSensitivityRating = rating;
};

Game_Actor.prototype.calculatePussySensitivityRating = function() {
	let rating = 0.1;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) rating += 0.2;
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) rating += 0.3;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_ONE_ID)) rating += 0.2;
	
	if(this._liquidCreampiePussy > 0) {
		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID)) rating += 0.5;
		else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID)) rating += 0.25;
	}
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && this.isBodySlotInserted(PUSSY_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.3;
	}
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_PUSSY)) rating += 0.5;
	
	if(this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID)) {
		rating *= 1.2;
		rating += 0.6;
	}
	
	this._pussySensitivityRating = rating;
};

Game_Actor.prototype.calculateButtSensitivityRating = function() {
	let rating = 0.4;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_THREE_ID)) rating += 0.75;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) rating += this._tempRecordButtSpankedCount * 0.25;
	
	if(this.hasPassive(CHARA_CREATE_TWO_BUTT_ID)) {
		rating *= 1.3;
		rating += 0.8;
	}

	this._buttSensitivityRating = rating;
};

Game_Actor.prototype.calculateAnalSensitivityRating = function() {
	let rating = 0.05;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_FOUR_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_FIRST_ANAL_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) rating += 0.3;
	
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID)) rating += this._tempRecordAnalPettedCount * 0.1;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID) && this.isBodySlotInserted(ANAL_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.3;
	}
	
	if(this._liquidCreampieAnal > 0) {
		if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_THREE_ID)) rating += 0.5;
		else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) rating += 0.25;
		
		if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID)) rating += this._liquidCreampieAnal * 0.01;
	}
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_ANAL)) rating += 0.5;
	
	if(this.hasPassive(CHARA_CREATE_TWO_ANAL_ID)) {
		rating *= 1.2;
		rating += 0.5;
	}
	
	this._analSensitivityRating = rating;
};

Game_Actor.prototype.calculateFingerSensitivityRating = function() {
	let rating = 0.1;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) rating += 0.7;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) rating += 0.2;
	
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) rating += 0.2;
	
	this._fingerSensitivityRating = rating;
};

Game_Actor.prototype.calculateFootSensitivityRating = function() {
	let rating = 0.1;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) rating += 0.2;
	
	this._footSensitivityRating = rating;
};


Game_Actor.prototype.calculateTalkSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_TALK_PEOPLE_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_TALK_PEOPLE_TWO_ID)) rating += 0.25;
	else if(this.hasPassive(PASSIVE_TALK_PEOPLE_ONE_ID)) rating += 0.1;
	
	this.calculateMasochismSensitivityRating();
	rating += this.masochismSensitivity() / 2;
	
	this._talkSensitivityRating = rating;
};

Game_Actor.prototype.calculateSightSensitivityRating = function() {
	let rating = 0.1;
	
	if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_FOUR_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_THREE_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_TWO_ID)) rating += 0.25;
	else if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_ONE_ID)) rating += 0.1;

	
	if(this.hasPassive(PASSIVE_SIGHT_ORGASM_TWO_ID) && this.isNaked()) rating += 0.3;
	
	this.calculateMasochismSensitivityRating();
	rating += this.masochismSensitivity() / 3;
	
	this._sightSensitivityRating = rating;
};

Game_Actor.prototype.calculatePussyCreampieSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_SIGHT_PUSSYCREAMPIE_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_PEOPLE_TWO_ID)) rating += 0.5;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID)) rating += 3;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) rating += 1.5;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID)) rating += 0.6;
	
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.75;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_PUSSY_ID)) {
		rating *= 1.2;
	}
	
	this._pussyCreampieSensitivityRating = rating;
};

Game_Actor.prototype.calculateAnalCreampieSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_SIGHT_ANALCREAMPIE_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_PEOPLE_TWO_ID)) rating += 0.5;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID)) rating += 3;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) rating += 1.5;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) rating += 0.6;
	
	
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) {
		if(this.isInFuckedFromBehindSexPose())
			rating += 0.75;
	}
	
	if(this.hasPassive(CHARA_CREATE_TWO_ANAL_ID)) {
		rating *= 1.2;
	}
	
	this._analCreampieSensitivityRating = rating;
};

Game_Actor.prototype.calculateSwallowSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_SWALLOW_PEOPLE_TWO_ID)) rating += 0.6;
	else if(this.hasPassive(PASSIVE_SWALLOW_PEOPLE_ONE_ID)) rating += 0.2;
	
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_THREE_ID)) rating += 2.65;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) rating += 1.5;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) rating += 0.8;
	
	if(this.hasPassive(PASSIVE_SIGHT_MOUTHSWALLOW_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(CHARA_CREATE_TWO_MOUTH_ID)) {
		rating *= 1.2;
	}
	
	this._swallowSensitivityRating = rating;
};

Game_Actor.prototype.calculateBukkakeSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_TWO_ID)) rating += 0.65;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_ML_THREE_ID)) rating += 1.35;
	else if(this.hasPassive(PASSIVE_BUKKAKE_ML_TWO_ID)) rating += 0.6;
	
	if(this.hasPassive(PASSIVE_SIGHT_BUKKAKEBUTT_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(CHARA_CREATE_TWO_PETTING_ID)) {
		rating *= 1.2;
	}
	
	this._bukkakeSensitivityRating = rating;
};

Game_Actor.prototype.calculateMasochismSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_TALK_ORGASM_ONE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) rating += 0.2;
	else if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_TALK_PLEASURE_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_FOUR_ID)) rating += 0.2;
	else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_THREE_ID)) rating += 0.2;
	else if(this.hasPassive(PASSIVE_DOGEZA_COUNT_ONE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID)) rating += this.cockDesire * 0.003;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_FOUR_ID)) {
		rating += this.cockiness * 0.003;
	}
	else if(this.hasPassive(PASSIVE_COCKINESS_COUNT_TWO_ID)) {
		rating += this.cockiness * 0.002;
	}
	
	
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_THREE_ID) && this.isConfident) 
		rating += 0.1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_THUG_TAG))
		rating += 0.1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_ROGUE_TAG))
		rating += 0.1;
	
	this._masochismSensitivityRating = rating;
};

Game_Actor.prototype.calculateSadismSensitivityRating = function() {
	let rating = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) rating += 0.2;
	else if(this.hasPassive(PASSIVE_COCKKICK_COUNT_ONE_ID)) rating += 0.1;	
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID)) rating += 0.1;
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_ONE_ID)) rating += this.cockDesire * 0.003;
	
	if(this.hasPassive(PASSIVE_TAUNT_COUNT_ONE_ID) && this.isConfident) rating += 0.1;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_FOUR_ID)) {
		rating += this.cockiness * 0.003;
	}
	else if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID)) {
		rating += this.cockiness * 0.002;
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_NERD_TAG))
		rating += 0.1;
	
	this._sadismSensitivityRating = rating;
};

///////////////
// Calculate Skill Rating
/////////////////////

Game_Actor.prototype.calculateKissSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) rating += 0.65;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) rating += 0.35;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) rating += 0.2;
	
	this._kissSkillRating = rating;
};

Game_Actor.prototype.calculatePettingSkillRating = function() {
	let rating = 1.2;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) rating += 0.8;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) rating += 0.55;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_COUNT_ONE_ID)) rating += 0.3;
	
	this._pettingSkillRating = rating;
};

Game_Actor.prototype.calculateHandjobSkillRating = function() {
	let rating = 0.5;

	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) rating += 2.5;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID)) rating += 2;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) rating += 1.5;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) rating += 1;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) rating += 0.5;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) rating += 1.2;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) rating += 0.8;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) rating += 0.4;
	
	this._handjobSkillRating = rating;
};

Game_Actor.prototype.calculateBlowjobSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) rating += 0.3;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_TWO_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) rating += 0.1;
	
	
	this._blowjobSkillRating = rating;
};

Game_Actor.prototype.calculateRimjobSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) rating += 0.1;
	
	this._rimjobSkillRating = rating;
};

Game_Actor.prototype.calculateFootjobSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) rating += 0.4;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) rating += 0.2;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) rating += 0.1;
	
	this._footjobSkillRating = rating;
};

Game_Actor.prototype.calculateTittyFuckSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) rating += 0.15;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) {
		rating += 0.15;
		if(this._tempRecordBukkakeBoobsML > 1) rating += 0.2;
	}
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) {
		rating += 0.15;
	}
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID) && this.isAroused()) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) rating += 0.5;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) rating += 0.1;
	
	this._tittyFuckSkillRating = rating;
};

Game_Actor.prototype.calculatePussySexSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_BUTT_ML_ONE_ID) && 
	(this._liquidBukkakeButt > 0 || this._liquidBukkakeButtTopRight > 0 || this._liquidBukkakeButtTopLeft > 0 || this._liquidBukkakeButtBottomRight > 0 || this._liquidBukkakeButtBottomLeft > 0)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_THREE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) rating += 0.25;

	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) {
		rating += 0.25;
		rating -= this._tempRecordPussyFuckedCount * 0.175;
	}
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) rating += 0.55;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) rating += 0.15;
	
	this._pussySexSkillRating = Math.max(1, rating);
};

Game_Actor.prototype.calculateAnalSexSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_BUTT_ML_ONE_ID) && 
	(this._liquidBukkakeButt > 0 || this._liquidBukkakeButtTopRight > 0 || this._liquidBukkakeButtTopLeft > 0 || this._liquidBukkakeButtBottomRight > 0 || this._liquidBukkakeButtBottomLeft > 0)) rating += 0.15;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_THREE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) {
		rating += 0.25;
		rating -= this._tempRecordAnalFuckedCount * 0.175;
	}
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID)) rating += 0.25;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) rating += 0.55;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) rating += 0.45;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) rating += 0.3;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) rating += 0.15;
	
	this._analSexSkillRating = rating;
};

Game_Actor.prototype.calculateMasturbateSkillRating = function() {
	let rating = 1;
	
	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) rating += 0.3;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_THREE_ID)) rating += 0.25;
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) rating += 0.25;
	
	
	this._masturbateSkillRating = rating;
};

///////////
// Calculate Skill Lvl
/////////////////////

Game_Actor.prototype.calculateKissSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) level++;
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) level++;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) level+=1;
	
	this._baseKissLvl = level;
};
Game_Actor.prototype.calculatePettingSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) level++;
	
	this._basePettingLvl = level;
};
Game_Actor.prototype.calculateHandjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) level++;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) level+=1;
	
	this._baseHandjobLvl = level;
};
Game_Actor.prototype.calculateBlowjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) level++;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_TWO_ID)) level++;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) level+=1;
	
	this._baseBlowjobLvl = level;
};
Game_Actor.prototype.calculateRimjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) level++;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) level+=1;
	
	this._baseRimjobLvl = level;
};
Game_Actor.prototype.calculateFootjobSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) level++;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) level += 3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) level += 2;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) level += 1;
	
	this._baseFootjobLvl = level;
};
Game_Actor.prototype.calculateTittyFuckSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) level++;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) level+=1;
	
	this._baseTittyFuckLvl = level;
};
Game_Actor.prototype.calculatePussySexSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID)) level++;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) level+=4;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) level+=1;
	
	
	this._basePussySexLvl = level;
};
Game_Actor.prototype.calculateAnalSexSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID)) level++;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) level+=4;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) level+=3;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) level+=2;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) level+=1;
	
	this._baseAnalSexLvl = level;
};
Game_Actor.prototype.calculateMasturbateSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) level++;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) level++;
	
	this._baseMasturbateLvl = level;
};

Game_Actor.prototype.calculateMasochismSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) level += 2;
	
	if(this.hasPassive(PASSIVE_TALK_ORGASM_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_TALK_PLEASURE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_FOUR_ID)) level++;
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) level++;
	
	this._baseMasochismLvl = level;
};

Game_Actor.prototype.calculateSadismSkillLvl = function() {
	let level = 0;
	
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) level += 2;
	
	if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_COCKKICK_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID)) level++;
	if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) level++;
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID)) level++;
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) level++;
	
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
	let costRate = 2;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) costRate = 1.5;
	
	return costRate;
};

Game_Actor.prototype.passiveBlowjobSkillCostRate = function() {
	let costRate = 3;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) costRate = 1.6;
	else if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) costRate = 2;
	
	return costRate;
};

Game_Actor.prototype.passiveRimjobSkillCostRate = function() {
	let costRate = 3;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) costRate = 2;
	
	return costRate;
};

Game_Actor.prototype.passiveFootjobSkillCostRate = function() {
	let costRate = 2;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) costRate = 1.5;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) costRate = 1.3;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) costRate = 1.15;
	else if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) costRate = 1.5;
	
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
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) costRate = 2;
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
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) costRate = 1;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) costRate = 2;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) costRate = 3;
	else if(this.hasPassive(PASSIVE_FIRST_ANAL_ID)) costRate = 5;
	
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
		
		if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_FOUR_ID)) 
			paramBonus += 1;

		if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) 
			paramBonus += Math.round(this._tempRecordOrgasmCount * 1.76);

		if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) {
			if(this.isBodySlotPenis(RIGHT_HAND_ID)) 
				paramBonus += 1;
			if(this.isBodySlotPenis(LEFT_HAND_ID)) 
				paramBonus += 1;
		}
		
		if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID)) 
			paramBonus += Math.round(this._tempRecordKissedPeople * 0.6);	

		if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID) && this.isBodySlotPenis(MOUTH_ID)) 
			paramBonus += 2;
		
		if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_ONE_ID)) 
			paramBonus += Math.ceil(this.getCurrentBukkakeTotal() / 25);
		
		if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) 
			paramBonus += this._tempRecordTittyFuckedPeople;
		
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID) && this.isAroused()) 
			paramBonus += 2;
		
		if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_FOUR_ID) && this.isClothingMaxDamaged()) 
			paramBonus += 2;

		if(this.hasPassive(PASSIVE_TOYS_PLEASURE_ONE_ID) && this.isWearingAnyToy()) {
			if(this.isWearingClitToy()) paramBonus++;
			if(this.isWearingPussyToy()) paramBonus++;
			if(this.isWearingAnalToy()) paramBonus++;
		}

	}
	else if(paramId === PARAM_MIND_ID) {
		if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) paramBonus += 1;
		if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) paramBonus += 2;
		if(this.hasPassive(PASSIVE_TAUNT_COUNT_ONE_ID)) paramBonus += 1;
		if(this.hasPassive(PASSIVE_TAUNT_COUNT_TWO_ID)) paramBonus += 1;
		if(this.hasPassive(PASSIVE_TAUNT_COUNT_THREE_ID)) paramBonus += 1;
	}
	else if(paramId === PARAM_AGILITY_ID) {
		if(this.hasPassive(PASSIVE_BUKKAKE_ML_ONE_ID)) 
			paramBonus -= Math.ceil(this.getCurrentBukkakeTotal() / 15);
		
		if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_FOUR_ID)) 
			paramBonus += 4;
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID)) 
			paramBonus += 3;
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID)) 
			paramBonus += 2;
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_ONE_ID)) 
			paramBonus += 1;
		
	}
	else if(paramId === PARAM_MAXSTAMINA_ID) {
		if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) 
			paramBonus += 50;
		if(this.hasPassive(PASSIVE_FIRST_ANAL_ID)) 
			paramBonus += 50;
		if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) 
			paramBonus += 50;
		
		if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) 
			paramBonus += 100;
		else if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_ONE_ID)) 
			paramBonus += 50;
	}
	else if(paramId === PARAM_ENDURANCE_ID) {
		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) 
			paramBonus -= Math.ceil(this._liquidCreampiePussy / 22);
		if(this.hasPassive(PASSIVE_CUNNILINGUS_COUNT_TWO_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_DEFEATED_COUNT_FOUR_ID)) 
			paramBonus += 4;
		else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_THREE_ID)) 
			paramBonus += 3;
		else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) 
			paramBonus += 2;
		else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_ONE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_THREE_ID)) 
			paramBonus += 3;
		else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_TWO_ID)) 
			paramBonus += 2;
		else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_ONE_ID)) 
			paramBonus += 1;
	}
	else if(paramId === PARAM_STRENGTH_ID) {
		if(this.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_TWO_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID)) 
			paramBonus += 1;
		
		if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) 
			paramBonus -= Math.ceil(this._liquidCreampieAnal / 17);
	}
	else if(paramId === PARAM_DEXTERITY_ID) {
		if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_TWO_ID)) 
			paramBonus += 2;
		else if(this.hasPassive(PASSIVE_SUBDUED_ERECT_COUNT_ONE_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID)) 
			paramBonus += 1;
		if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) 
			paramBonus += 1;
	}
	
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_THREE_ID) && (paramId === PARAM_CHARM_ID || paramId === PARAM_DEXTERITY_ID)) {
			if(this._tempMaxReachedCockDesire) paramBonus += 1;
			if(this._tempMaxReachedPussyDesire) paramBonus += 1;
			if(this._tempMaxReachedButtDesire) paramBonus += 1;
			if(this._tempMaxReachedBoobsDesire) paramBonus += 1;
			if(this._tempMaxReachedMouthDesire) paramBonus += 1;
	}
	
    return paramBonus;
};

Game_Actor.prototype.passiveParamRate = function(paramId) {
	let passiveRate = 1;
	if(paramId === PARAM_STRENGTH_ID) {
		if(this.isWearingAnalToy()) {
			if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID)) passiveRate -= 0.45;
			else if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID)) passiveRate -= 0.3;
			else passiveRate -= 0.15;
		}
	}
	else if(paramId === PARAM_AGILITY_ID) {
		if(this.isWearingPussyToy()) {
			if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_TWO_ID)) passiveRate -= 0.45;
			else if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_ONE_ID)) passiveRate -= 0.3;
			else passiveRate -= 0.15;
		}
	}
	
	return passiveRate;
};

Game_Actor.prototype.passiveXParamPlus = function(id) {
	let passivePlus = 0;
	
	if(id === XPARAM_EN_REGEN_ID && this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_TWO_ID)) {
		passivePlus += (Math.ceil(this._liquidCreampiePussy / 16) / 100);
	}
	
	return passivePlus;
};

Game_Actor.prototype.passiveXParamRate = function(id) {
	let passiveRate = 1;
	
	if(id === XPARAM_STA_REGEN_ID) {
		if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_TWO_ID))
			passiveRate += this._liquidSwallow / 133;
		if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_TWO_ID))
			passiveRate += this.getCurrentBukkakeTotal() / 266;
	}
	else if(id === XPARAM_EVA_ID) {
		if(this.isOffBalance) {
			passiveRate -= 0.25;
		}
	}
	else if(id === XPARAM_HIT_ID) {
		if(this.isWearingClitToy()) {
			passiveRate -= 0.25;
		}
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

Game_Actor.prototype.passiveDebuffSParamRate = function(id) {
	let passiveRate = 1;
	
	if(this.isOffBalance && (id === SPARAM_WPATK_ID || id === SPARAM_WPDEF_ID)) {
		if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_TWO_ID))
			passiveRate *= 0.75;
		else
			passiveRate *= 0.85;
	}
	
	if(id === SPARAM_WPATK_ID && this.isUsingHalberd() && this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) {
		passiveRate *= 0.85;
	}
	
	return passiveRate;
};

//////
// Element Rate
/////////////


Game_Actor.prototype.karrynPassiveCombatElementRate = function() {
	let pasBonus = 0;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_THREE_ID)) pasBonus += 0.15;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) pasBonus += 0.15;
	
	return pasBonus;
};

Game_Actor.prototype.karrynPassiveTalkElementRate = function() {
	let pasBonus = 0;
	
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID)) pasBonus += 0.08;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID)) pasBonus += 0.08;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID) && (this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID))) pasBonus += 0.1;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_THREE_ID)) pasBonus += 0.21;
	else if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID)) pasBonus += 0.15;
	else if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_ONE_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID)) pasBonus += 0.05;
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_TALK_PLEASURE_TWO_ID)) pasBonus += 0.14;
	else if(this.hasPassive(PASSIVE_TALK_PLEASURE_ONE_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID)) pasBonus += 0.06;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) pasBonus += 0.06;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_THREE_ID)) {
		pasBonus += this.cockiness * 0.002;
	}
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) pasBonus += 0.07;
	}
	
	
	return pasBonus;
};

Game_Actor.prototype.karrynPassiveSightElementRate = function() {
	let pasBonus = 0;
	
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID)) pasBonus += 0.08;
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_SECOND_ID)) pasBonus += 0.08;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID) && (this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID))) pasBonus += 0.1;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_THREE_ID)) pasBonus += 0.21;
	else if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_TWO_ID)) pasBonus += 0.15;
	else if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_ONE_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_TWO_ID)) pasBonus += 0.14;
	else if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_ONE_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_THREE_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) pasBonus += 0.07;
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID)) pasBonus += 0.06;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_SIGHT_BUKKAKEBOOBS_ONE_ID) && this._liquidBukkakeBoobs > 0) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SIGHT_BUKKAKEFACE_ONE_ID) && this._liquidBukkakeFace > 0) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SIGHT_WETPUSSY_ONE_ID) && this.isWet) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SIGHT_NIPPLES_ONE_ID) && this.isAroused()) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID) && this.isClothingMaxDamaged()) pasBonus += 0.1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID)) pasBonus += 0.07;
	
	return pasBonus;
};

Game_Actor.prototype.karrynPassiveStripElementRate = function() {
	let pasBonus = -0.4;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID) && this.isAroused()) pasBonus += 0.1;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_THREE_ID)) pasBonus += 0.13;
	else if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_ONE_ID)) pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_ONE_ID)) pasBonus += 0.07;
	
	return pasBonus;
};

Game_Actor.prototype.karrynPassivePettingElementRate = function() {
	let pasBonus = -0.4;
	
	if(this.hasPassive(CHARA_CREATE_TWO_PETTING_ID)) pasBonus += 0.6;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) pasBonus += 0.06;
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) pasBonus += 0.1;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) pasBonus += 0.05;
	
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) pasBonus += 0.05;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_ONE_ID)) pasBonus += 0.06;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID) && (this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID))) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) pasBonus += 0.5;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID)) pasBonus += 0.4;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) pasBonus += 0.3;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) pasBonus += 0.2;
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_ONE_ID)) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID)) pasBonus += 0.1;
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID)) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID)) pasBonus += 0.07;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_THREE_ID)) pasBonus += 0.14;
	else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_TWO_ID)) pasBonus += 0.10;
	else if(this.hasPassive(PASSIVE_JOB_PETTING_COUNT_ONE_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_TWO_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) pasBonus += 0.06;
	}
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_TWO_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID) && this.isBodySlotInserted(MOUTH_ID)) 
		pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_TWO_ID)) {
		pasBonus += this.cockiness * 0.003;
	}
	
	
	return pasBonus;
};

Game_Actor.prototype.karrynPassiveSexElementRate = function() {
	let pasBonus = -0.6;
	
	if(this.hasPassive(PASSIVE_BJ_ORGASM_ONE_ID)) pasBonus += 0.08;
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID) && (this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID))) pasBonus += 0.1;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) pasBonus += 0.7;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID)) pasBonus += 0.6;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) pasBonus += 0.45;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) pasBonus += 0.3;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID)) pasBonus += 0.1;
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_TWO_ID)) pasBonus += 0.08;
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) pasBonus += 0.05;
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) pasBonus += 0.12;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) pasBonus += 0.04;
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) pasBonus += 0.1;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) pasBonus += 0.05;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) pasBonus += 0.05;
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) pasBonus += 0.12;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_COUNT_TWO_ID)) pasBonus += 0.04;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) pasBonus += 0.05;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) pasBonus += 0.18;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) pasBonus += 0.12;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) pasBonus += 0.05;
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) pasBonus += 0.18;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) pasBonus += 0.12;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) pasBonus += 0.06;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID)) pasBonus += 0.09;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID)) {
		if((this.isBodySlotPenis(RIGHT_HAND_ID) || this.isBodySlotPenis(LEFT_HAND_ID)) && this.isBodySlotPenis(MOUTH_ID)) 
			pasBonus += 0.08;
	}
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_TWO_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID)) 
		pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_TRIPLE_PEN_COUNT_ONE_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID) && this.isBodySlotInserted(MOUTH_ID)) 
		pasBonus += 0.07;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID)) pasBonus += this._tempRecordButtSpankedCount * 0.04;
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_TWO_ID)) {
		pasBonus += this.cockiness * 0.0025;
	}
	
	return pasBonus;
};

/////////////
// Pleasure
//////////////

Game_Actor.prototype.postBattlePleasure = function() { 
	//Todo: certain stuff that changes the multipler, like passives that help karryn retain pleasure post battle
	let multipler = 0.9;
	let beforeOrgasmPoint = this.orgasmPoint() * multipler;
	this.setPleasure(Math.min(this.pleasure * multipler, beforeOrgasmPoint));
	
	this._orgasmCallQueuedUp = false;
};

//TRG = Pleasure/Per turn in regen phase
Game_Actor.prototype.bonusPpt = function() { 
	let totalValue = 0;
	let sightValue = 0;
	let toyValue = 0;
	
	//////////
	// Sight Value
	if(this.hasPassive(PASSIVE_BUKKAKE_ML_FOUR_ID) && !this.isInMasturbationPose()) {
		let bukkakeLiquidTotal = 0;
		if(this._liquidBukkakeRightArm > 0 && this._maxTachieSemenRightArmId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeLeftArm > 0 && this._maxTachieSemenLeftArmId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeRightLeg > 0 && this._maxTachieSemenRightLegId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeLeftLeg > 0 && this._maxTachieSemenLeftLegId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeBoobs > 0 && this._maxTachieSemenBellyId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeBoobs > 0 && this._maxTachieSemenBoobsId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeBoobs > 0 && this._maxTachieSemenRightBoobId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeBoobs > 0 && this._maxTachieSemenLeftBoobId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeButt > 0 && this._maxTachieSemenButtId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeButtTopRight > 0 && this._maxTachieSemenButtTopRightId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeButtBottomRight > 0 && this._maxTachieSemenButtBottomRightId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeButtTopLeft > 0 && this._maxTachieSemenButtTopLeftId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeButtBottomLeft > 0 && this._maxTachieSemenButtBottomLeftId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeButt > 0 && this._maxTachieSemenBackId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidOnDesk > 0 && this._maxTachieSemenDeskId > 0) 
			bukkakeLiquidTotal++;
		if(this._liquidBukkakeFace > 0 && this._maxTachieSemenFaceId > 0) 
			bukkakeLiquidTotal+=2;
		
		sightValue += bukkakeLiquidTotal * 12;
	}
	
	if(this.isNaked() && !this.isInMasturbationPose()) {
		let nakedValue = 0;
		if(this.hasPassive(PASSIVE_SIGHT_ORGASM_ONE_ID)) {
			nakedValue += 8;
		}
		if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_TWO_ID)) {
			nakedValue += 8;
		}
		if(this.isInSexPose()) nakedValue *= 0;
		else nakedValue *= this.elementRate(ELEMENT_SIGHT_ID);
		sightValue += $gameTroop.membersNeededToBeSubdued().length * nakedValue;
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

	
	if(sightValue > 0) {
		sightValue = Math.round(sightValue * this.elementRate(ELEMENT_SIGHT_ID));
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

Game_Actor.prototype.passiveKissSkillRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) {
		prate += this.mouthDesire / 300;
	}
	
	return prate;
};

Game_Actor.prototype.passiveHandjobSkillRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) {
		prate += this.cockDesire / 300;
	}
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) {
		prate += this.sadismLvl() * 0.02;
	}
	
	
	return prate;
};

Game_Actor.prototype.passiveBlowjobSkillRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) {
		prate += this.cockDesire / 300;
	}
	if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) {
		prate += this.masochismLvl() * 0.02;
	}
	
	return prate;
};
Game_Actor.prototype.passiveRimjobSkillRate = function() { 
	let prate = 1;
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) {
		prate += this.masochismLvl() * 0.03;
	}
	return prate;
};
Game_Actor.prototype.passiveFootjobSkillRate = function() { 
	let prate = 1;
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) {
		prate += this.sadismLvl() * 0.03;
	}
	return prate;
};


Game_Actor.prototype.passiveTittyFuckSkillRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) {
		prate += this.boobsDesire / 300;
	}
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) {
		prate += this.cockDesire / 300;
	}
	
	return prate;
};

Game_Actor.prototype.passivePussySexSkillRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) {
		prate += this.pussyDesire / 300;
	}
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) {
		prate += this.cockDesire / 300;
	}
	
	return prate;
};
Game_Actor.prototype.passiveAnalSexSkillRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) {
		prate += this.buttDesire / 300;
	}
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) {
		prate += this.cockDesire / 300;
	}
	
	return prate;
};

Game_Actor.prototype.passivePettingPleasureRate = function() { 
	let prate = 1;
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_SECOND_ID)) {
		prate += this.cockDesire / 400;
	}
	
	return prate;
};

Game_Actor.prototype.passiveSpankingPleasureRate = function() { 
	let prate = 0.1;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_ONE_ID)) {
		prate += 0.4;
	}
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_TWO_ID)) {
		prate += this._tempRecordButtSpankedCount / 4;
	}
	
	return prate;
};


Game_Actor.prototype.passiveSexPleasureRate = function() { 
	let rate = 1;
	
	return rate;
};

Game_Actor.prototype.passiveBukkakeBoobsPleasureRate = function() { 
	let rate = 1;
	if(this.hasPassive(PASSIVE_BUKKAKE_BOOBS_ML_ONE_ID) && this.isAroused() && this.nipplesSensitivity() > 1) {
		rate = this.nipplesSensitivity();
	}
	return rate;
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
	if(target.isGoblinType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID))
			angerEffect -= 30;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID))
			angerEffect -= 15;
	}
	if(target.isThugType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID))
			angerEffect -= 25;
	}
	if(target.isGuardType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID))
			angerEffect -= 30;
	}
	if(target.isRogueType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID))
			angerEffect -= 25;
	}
	if(target.isSlimeType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID))
			angerEffect -= 25;
	}
	if(target.isLizardmanType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID))
			angerEffect -= 25;
	}
	if(target.isOrcType) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID))
			angerEffect -= 50;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID))
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

//////////
// Ejaculation Volume
//////////

Game_Actor.prototype.passiveSwallowEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passiveBukkakeEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_BUKKAKE_ML_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_TWO_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passivePussyCreampieEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) evMultipler += 0.2;
	
	evMultipler *= this.passiveRelationsEVMultipler(enemy);
	
	return evMultipler;
};

Game_Actor.prototype.passiveAnalCreampieEVMultipler = function(enemy) { 
	let evMultipler = 1;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) evMultipler += 0.2;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_THREE_ID)) evMultipler += 0.2;
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
	
	return evMultipler;
};

/////////
// Female Orgasm
/////////////

Game_Actor.prototype.passiveFemaleOrgasmEnergyDamage = function() { 
	let enDmg = 14;
	
	if(this.hasPassive(PASSIVE_ORGASM_TRIPLE_ID)) enDmg -= 2;
	else if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) enDmg -= 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) enDmg -= 1;
	if(this.ateArtisanMeal(ARTISAN_MEAL_HEART)) enDmg -= 1;
	if(this.isUsingThisTitle(TITLE_ID_WAITRESS_ORGASM)) enDmg -= 1;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) enDmg *= 0.5;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) enDmg *= 0.6;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) enDmg *= 0.7;
	
	return Math.round(enDmg + Math.random() * (enDmg * 0.2));
};

Game_Actor.prototype.calculateOrgasmML = function(energyDamage) { 
	let rate = 0.2;
	
	if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) rate += 0.1;
	if(this.hasPassive(PASSIVE_ORGASM_TRIPLE_ID)) rate += 0.1;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) rate += 0.1;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) rate += 0.15;
	if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) rate += 0.15;
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID)) rate += 0.15;
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_THREE_ID) && this.isBodySlotPenis(PUSSY_ID) && this.isBodySlotPenis(ANAL_ID)) rate += 0.1;
	
	let ml = energyDamage * rate;
	ml += Math.random() * ml * 0.25;
	return Math.round(ml * 10) / 10;
};

Game_Actor.prototype.passiveOrgasmMakeEnemiesHornyChance = function() { 
	let chance = 0;
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) chance += 0.15;
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) chance += 0.1;
	return chance;
};

///////
// Fatigue
/////////

Game_Actor.prototype.fatigueRecoveryNumberRateWhenAroused = function() { 
	let rate = 0.5;
	
	//reduce by onani level
	let onaniLvl = this.masturbateLvl();
	if(onaniLvl > 0) rate -= onaniLvl * 0.08;
	
	return Math.max(0.1,rate);
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
	let req = 100;
	if(kissingLvl === KISS_LVL_TWO) {
		req += 50;
		if(this.hasPassive(PASSIVE_KISS_PEOPLE_TWO_ID)) req -= 5;
		if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID)) req -= 10;
		if(this.hasPassive(PASSIVE_KISS_COUNT_TWO_ID)) req -= 5;
	}
	
	if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) req -= 40;
	else {
		if(this.slutLvl >= 50) req -= 40;
		else req -= this.slutLvl * 0.8;
	}
	
	if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID)) req -= 30;
	
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_TWO_ID)) req -= 20;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_KISS_COUNT_TWO_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(RING_MIDI_ID)) req += 40;
	if(this.isEquippingThisAccessory(MISC_LIPGLOSS_ID)) req -= 30;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.blowjobMouthDesireRequirement = function(karrynSkillUse) { 
	let req = 125;
	
	if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) req -= 45;
	else {
		if(this.slutLvl >= 50) req -= 40
		else req -= this.slutLvl * 0.6;
	}
	if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) req -= 15;
	
	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) req += 40;
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) req -= 30;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req; 
};

Game_Actor.prototype.suckFingersMouthDesireRequirement = function(karrynSkillUse) { 
	let req = Math.max(this.blowjobMouthDesireRequirement(karrynSkillUse), this.kissingMouthDesireRequirement(karrynSkillUse) + 20);
	
	if(this.masochismLvl() > this.sadismLvl()) 
		req -= this.masochismLvl() * 3;
	req -= this.masochismLvl();
	
	return req; 
};

Game_Actor.prototype.blowjobCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;

	if(this.hasPassive(PASSIVE_BJ_ORGASM_TWO_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_SWALLOW_PEOPLE_TWO_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_ONE_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) req -= 30;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.suckFingersCockDesireRequirement = function(karrynSkillUse) { 
	let req = this.blowjobCockDesireRequirement(karrynSkillUse) - 30;
	
	if(this.masochismLvl() > this.sadismLvl()) 
		req -= this.masochismLvl() * 3;
	req -= this.masochismLvl();
	
	return req; 
};

Game_Actor.prototype.mouthSwallowCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this.hasPassive(PASSIVE_SWALLOW_PEOPLE_ONE_ID)) req -= 20;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) req -= 20;
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) req -= 20;
	if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID) && this._liquidSwallow === 0) req -= 25;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.handjobCockDesireRequirement = function(karrynSkillUse) { 
	let req = 75;

	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) req -= 55;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) req -= 30;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) req -= 15;
	
	if(this.hasPassive(PASSIVE_HJ_ORGASM_ONE_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) req += 40;
	if(this.isEquippingThisAccessory(MISC_NAILPOLISH_ID)) req -= 30;

	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.cockPettingCockDesireRequirement = function(karrynSkillUse) { 
	let req = this.handjobCockDesireRequirement(karrynSkillUse);

	if(this.hasPassive(PASSIVE_COCK_PETTING_COUNT_ONE_ID)) req -= 5;
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) req -= 5;

	return req;
};

Game_Actor.prototype.boobsPettingBoobsDesireRequirement = function(karrynSkillUse) { 
	let req = 50;

	if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID)) req -= 25;

	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) req -= 25;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID)) req -= 14;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_ONE_ID)) req -= 6;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) req -= 5;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.nipplesPettingBoobsDesireRequirement = function(karrynSkillUse) { 
	let req = 100;

	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID)) req -= 15;
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) req -= 10;
	
	if(this.isAroused()) {
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID)) req -= 10;
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID)) req -= 10;
	}
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.tittyFuckBoobsDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) req -= 25;
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID)) req -= 10;
	
	if(this.isAroused()) {
		if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID)) req -= 25;
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID)) req -= 10;
	}
	
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) req -= 30;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req; 
};

Game_Actor.prototype.tittyFuckCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;

	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) req -= 55;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID)) req -= 30;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) req -= 15;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_TWO_ID)) req -= 10;
	
	if(this.isAroused()) {
		if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID)) req -= 20;
	}
	
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) req -= 30;

	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.clitPettingPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 50;

	if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID)) req -= 25;

	if(this.hasPassive(PASSIVE_SIGHT_CLIT_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID) && this.isAroused()) req -= 15;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID)) req -= 10;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) req -= 5;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.cunnilingusPussyDesireRequirement = function(karrynSkillUse) { 
	let req = this.clitPettingPussyDesireRequirement(karrynSkillUse) + 40;

	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_TWO_ID)) req -= 10;
	else if(this.hasPassive(PASSIVE_CUNNILINGUS_COUNT_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_TWO_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID)) req -= 5;
	
	return req;
};

Game_Actor.prototype.pussyPettingPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 100;

	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) req -= 30;

	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID) && this.isAroused()) req -= 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID)) req -= 50;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID)) req -= 30;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID)) req -= 15;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_TWO_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) req -= 10;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.pussySexPussyDesireRequirement = function(karrynSkillUse) { 
	let req = 130;
	
	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) req -= 30;
	else {
		if(this.slutLvl >= 50) req -= 30;
		else req -= this.slutLvl * 0.6;
	}
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_THREE_ID)) req -= 25;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_TWO_ID)) req -= 15;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_THREE_ID)) req -= 20;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_TWO_ID)) req -= 10;

	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_THREE_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(MISC_HIGHHEELS_ID)) req -= 40;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};	

Game_Actor.prototype.pussySexCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) req -= 25;
	else {
		if(this.slutLvl >= 50) req -= 25;
		else req -= this.slutLvl * 0.5;
	}
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) req -= 20;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_PEOPLE_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_ONE_ID) && this.isBodySlotPenis(MOUTH_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(RING_GOLDGLASS_ID)) req += 40;
	if(this.isEquippingThisAccessory(MISC_HIGHHEELS_ID)) req -= 30;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.pussyCreampieCockDesireRequirement = function(karrynSkillUse) { 
	let req = 150;
	
	if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) req -= 50;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_PEOPLE_TWO_ID)) req -= 15;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_PEOPLE_ONE_ID)) req -= 7;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(RING_GOLDGLASS_ID)) req += 40;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.buttPettingButtDesireRequirement = function(karrynSkillUse) { 
	let req = 50;
	
	if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID)) req -= 25;
	
	if(this.hasPassive(PASSIVE_SIGHT_BUTT_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_THREE_ID)) req -= 25;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) req -= 14;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_ONE_ID)) req -= 6;
	
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.spankingButtDesireRequirement = function(karrynSkillUse) { 
	let req = this.buttPettingButtDesireRequirement(karrynSkillUse) + 30;

	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_TWO_ID)) req -= 12;
	else if(this.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_ONE_ID)) req -= 5;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) req -= this._tempRecordButtPettedCount * 4;
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) req -= 5;
	
	if(this.masochismLvl() > this.sadismLvl())
		req -= (this.masochismLvl() - this.sadismLvl()) * 2;
	req -= Math.round(this.masochismLvl() * 0.6);	
	
	return req;
};

Game_Actor.prototype.analPettingButtDesireRequirement = function(karrynSkillUse) { 
	let req = 100;

	if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) req -= 30;

	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID)) req -= ((this._tempRecordButtPettedCount * 6) + 10);
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID)) req -= 30;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID)) req -= 20;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_THREE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_TWO_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) req -= 10;

	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.analSexButtDesireRequirement = function(karrynSkillUse) { 
	let req = 130;
	
	if(this.hasPassive(PASSIVE_FIRST_ANAL_ID)) req -= 30;
	else {
		if(this.slutLvl >= 50) req -= 30;
		else req -= this.slutLvl * 0.6;
	}
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID)) req -= this._tempRecordButtPettedCount * 5;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_THREE_ID)) req -= 25;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_TWO_ID)) req -= 15;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_THREE_ID)) req -= 15;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) req -= 7;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_TWO_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(MISC_SCARF_ID)) req -= 40;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};	

Game_Actor.prototype.analSexCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;

	if(this.hasPassive(PASSIVE_FIRST_ANAL_ID)) req -= 25;
	else {
		if(this.slutLvl >= 50) req -= 25;
		else req -= this.slutLvl * 0.5;
	}
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) req -= 20;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_PEOPLE_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) req -= 10;
	
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) req -= this._tempRecordAnalPettedCount * 5;
	
	if(this.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_ONE_ID) && this.isBodySlotPenis(MOUTH_ID)) req -= 10;
	
	if(this.isEquippingThisAccessory(MISC_SCARF_ID)) req -= 30;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.analCreampieCockDesireRequirement = function(karrynSkillUse) { 
	let req = 150;
	
	if(this.hasPassive(PASSIVE_FIRST_ANAL_ID)) req -= 50;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_ONE_ID)) req -= 10;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_PEOPLE_TWO_ID)) req -= 15;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_PEOPLE_ONE_ID)) req -= 7;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) req -= 10;
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID)) req -= 10;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req;
};

Game_Actor.prototype.rimjobMouthDesireRequirement = function(karrynSkillUse) { 
	let req = 150;
	
	if(this.hasPassive(PASSIVE_FIRST_KISS_ID)) req -= 50;
	else {
		if(this.slutLvl >= 50) req -= 50
		else req -= this.slutLvl * 1.0;
	}
	
	if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) req -= 40;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) req -= 30;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) req -= 15;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) req -= 20;
	
	if(this.masochismLvl() > this.sadismLvl())
		req -= (this.masochismLvl() - this.sadismLvl()) * 5;
	req -= this.masochismLvl() * 2;
	
	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) req += 40;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req; 
};

Game_Actor.prototype.footjobCockDesireRequirement = function(karrynSkillUse) { 
	let req = 100;
	
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) req -= 40;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID)) req -= 60;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) req -= 40;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) req -= 20;
	
	if(this.sadismLvl() > this.masochismLvl())
		req -= (this.sadismLvl() - this.masochismLvl()) * 5;
	req -= this.sadismLvl() * 2;
	
	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) req += 40;
	
	req *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	req *= this.jobDesireRequirementMultipler();
	return req; 
};

Game_Actor.prototype.vulnerabilityDesireRequirementMultipler = function(karrynSkillUse) { 
	let multipler = 1;
	//if(karrynSkillUse) return multipler;
	if(this.isInMapPose() && !this.isInWaitressServingPose()) return multipler;
	if($gameParty.isInGloryBattle) return multipler;
	
	if(!this.isInCombatPose() && !this.isInWaitressServingPose() && !this.isInReceptionistPose()) {
		multipler *= VAR_NONATTACK_DESIRE_REQ;
	}
	return multipler;
};

Game_Actor.prototype.toysDesireAddedRequirement = function(karrynSkillUse) { 
	let addedReq = 30;
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID)) addedReq -= 20;
	else if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID)) addedReq -= 10;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID)) addedReq -= 10;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) addedReq -= 10;

	if(addedReq > 0) {
		addedReq *= this.vulnerabilityDesireRequirementMultipler(karrynSkillUse);
	}

	return Math.max(-20, addedReq);
};

Game_Actor.prototype.clitToyPussyDesireRequirement = function(karrynSkillUse) { 
	let req = this.clitPettingPussyDesireRequirement(karrynSkillUse) + this.toysDesireAddedRequirement(karrynSkillUse);

	if(this.isWearingPanties()) {
		req *= VAR_PANTIES_TOY_DESIRE_REQ;
	}

	return Math.round(req); 
};

Game_Actor.prototype.pussyToyPussyDesireRequirement = function(karrynSkillUse) { 
	let req = this.pussyPettingPussyDesireRequirement(karrynSkillUse) + this.toysDesireAddedRequirement(karrynSkillUse);

	if(this.isWearingPanties()) {
		req *= VAR_PANTIES_TOY_DESIRE_REQ;
	}

	return Math.round(req); 
};

Game_Actor.prototype.analToyButtDesireRequirement = function(karrynSkillUse) { 
	let req = this.analPettingButtDesireRequirement(karrynSkillUse) + this.toysDesireAddedRequirement(karrynSkillUse);

	if(this.isWearingPanties()) {
		req *= VAR_PANTIES_TOY_DESIRE_REQ;
	}

	return Math.round(req); 
};

Game_Actor.prototype.jobDesireRequirementMultipler = function() { 
	let multipler = 1;
	
	//all jobs modifer
	if(this.isInJobPose()) {
		multipler = 1.3;
		
		if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_THREE_ID)) multipler -= 0.1;
		else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) multipler -= 0.05;
		if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_THREE_ID)) multipler -= 0.1;
		else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) multipler -= 0.05;
	}
	
	//Jobs specific modifer
	//Waitress
	if($gameParty.isInWaitressBattle) {
		let waitressSpecificMultipler = 1.2;
		if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID)) {
			multipler -= 0.1;
			waitressSpecificMultipler -= 0.2;
		}
		else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) {
			multipler -= 0.05;
			waitressSpecificMultipler -= 0.1;
		}
		
		multipler = Math.max(multipler, 1);
		
		multipler *= (waitressSpecificMultipler - (this.getAlcoholRate() * 0.8));
	}
	//Receptionist
	else if(this.isInReceptionistPose()) {
		let receptionistSpecificMultipler = 1.3;
		if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID)) {
			multipler -= 0.10;
			receptionistSpecificMultipler -= 0.2;
		}
		else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) {
			multipler -= 0.05;
			receptionistSpecificMultipler -= 0.1;
		}
		
		multipler *= receptionistSpecificMultipler;
	}
	else if($gameParty.isInGloryBattle) {
		multipler = 1.2;
		
	}
	
	return Math.max(1, multipler); 
};


////////
// Max Desire
/////////

Game_Actor.prototype.maxCockDesire = function() { 
	let upperLimit = 100;
	return upperLimit; 
};
Game_Actor.prototype.maxMouthDesire = function() { 
	let upperLimit = 100;
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_THREE_ID)) upperLimit += 25;
	return upperLimit; 
};
Game_Actor.prototype.maxBoobsDesire = function() { 
	let upperLimit = 100;
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_THREE_ID)) upperLimit += 25;
	return upperLimit; 
};
Game_Actor.prototype.maxPussyDesire = function() { 
	let upperLimit = 100;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_THREE_ID)) upperLimit += 25;
	return upperLimit; 
};
Game_Actor.prototype.maxButtDesire = function() { 
	let upperLimit = 100;
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_THREE_ID)) upperLimit += 25;
	return upperLimit; 
};

///////
// Starting Desires
////////////

//Starting desires values before the battle
Game_Actor.prototype.startingCockDesire = function() { 
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 4);
	
	if(this.hasPassive(PASSIVE_BJ_ORGASM_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_THREE_ID)) desire += 5;
	
	desire *= this.startingDesire_JobBattlePassive();
	desire *= this.startingDesire_masturbationBattlePassive();
	
	return desire * this.gainCockDesirePassiveMultipler(); 
};
Game_Actor.prototype.startingMouthDesire = function() { 
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_KISS_COUNT_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID)) desire += 5;
	
	desire *= this.startingDesire_JobBattlePassive();
	desire *= this.startingDesire_masturbationBattlePassive();
	
	return desire * this.gainMouthDesirePassiveMultipler(); 
};
Game_Actor.prototype.startingBoobsDesire = function() { 
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) desire += 5;
	
	desire *= this.startingDesire_JobBattlePassive();
	desire *= this.startingDesire_masturbationBattlePassive();
	
	return desire * this.gainBoobsDesirePassiveMultipler(); 
};
Game_Actor.prototype.startingPussyDesire = function() { 
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID)) desire += 5;
	
	desire *= this.startingDesire_JobBattlePassive();
	desire *= this.startingDesire_masturbationBattlePassive();
	
	return desire * this.gainPussyDesirePassiveMultipler(); 
};
Game_Actor.prototype.startingButtDesire = function() { 
	let desire = 0;
	desire += Math.ceil(this.currentPercentOfOrgasm(true) / 6);
	
	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID)) desire += 5;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) desire += 5;
	
	desire *= this.startingDesire_JobBattlePassive();
	desire *= this.startingDesire_masturbationBattlePassive();
	
	return desire * this.gainButtDesirePassiveMultipler(); 
};
Game_Actor.prototype.startingRandomDesire = function() { 
	let randomDesire = [];
	
	if(this.isInMasturbationPose()) {
		randomDesire.push(this.masturbateLvl() * 4);
	}

	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_FIRST_ID)) {
		randomDesire.push(4);
		randomDesire.push(4);
	}
	if(this.hasPassive(PASSIVE_TALK_COUNT_ONE_ID)) {
		randomDesire.push(4);
	}
	if(this.hasPassive(PASSIVE_TALK_COUNT_TWO_ID)) {
		randomDesire.push(4);
	}
	
	for(let i = 0; i < randomDesire.length; ++i) {
		randomDesire[i] *= this.startingDesire_JobBattlePassive();
		randomDesire[i] *= this.startingDesire_masturbationBattlePassive();
		this.gainRandomDesire(randomDesire[i]);
	};
};

Game_Actor.prototype.startingDesire_masturbationBattlePassive = function() { 
	let rate = 1;
	
	if(Karryn.isInMasturbationLevel1Pose()) {
		rate += this.masturbateLvl() * 0.1;
	}
	
	return rate;
};

Game_Actor.prototype.startingDesire_JobBattlePassive = function() { 
	let rate = 1;
	
	if($gameParty.isInWaitressBattle) {
		rate = 0.2;
		if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID)) {
			rate += 0.3;
		}
		else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) {
			rate += 0.1;
		}
	}
	else if(this.isInReceptionistPose()) {
		rate = 0.2;
		if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID)) {
			rate += 0.3;
		}
		else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) {
			rate += 0.1;
		}
	}
	else if($gameParty.isInGloryBattle) {
		rate = 0.3;
		
	}
	
	return rate;
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
	
	if(this.hasPassive(PASSIVE_SECRET_CURIOSITY_ID)) {
		regenRandomDesire.push(5);
		if(!this.hasPassive(PASSIVE_FIRST_SEX_ID)) regenRandomDesire.push(5);
	}
	
	if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID)) regenMouthDesire += 5;
	else if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID)) regenBoobsDesire += 5;
	else if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID)) regenPussyDesire += 5;
	else if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID)) regenButtDesire += 5;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) regenRandomDesire.push(2);
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) regenRandomDesire.push(2);
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) regenRandomDesire.push(3);
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) {
		let pettingOrgasmTwoRandom = Math.randomInt(3);
		if(pettingOrgasmTwoRandom === 0) 
			regenBoobsDesire += 2;
		else if(pettingOrgasmTwoRandom === 1) 
			regenPussyDesire += 2;
		else
			regenButtDesire += 2;
	}
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID) && this.isClothingMaxDamaged()) 
		regenRandomDesire.push(3);
	
	if(this.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FIRST_ID)) 
		regenMouthDesire += 2;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID)) 
		regenBoobsDesire += 2;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID) && this.isAroused()) 
		regenBoobsDesire += 2;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID) && this.isAroused()) 
		regenPussyDesire += 2;
	
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_FIRST_ID) && (this.isAroused() || this.isHorny)) 
		regenCockDesire += 2;
	
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID) && this.isWet) 
		regenPussyDesire += 3;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_THREE_ID) && this._tempRecordPussyFuckedCount === 0) 
		regenPussyDesire += 3;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID) && this._liquidCreampiePussy === 0) 
		regenCockDesire += 2;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_THREE_ID) && this._tempRecordAnalFuckedCount === 0) 
		regenButtDesire += 3;
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID) && this._tempRecordAnalFuckedCount === 0) 
		regenCockDesire += 2;
	
	
	if(this.hasPassive(PASSIVE_MAX_COCK_DESIRE_THREE_ID)) {
		regenCockDesire += $gameTroop.erectMembersAll().length * 1.5;
	}
	
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_FOUR_ID)) {
		regenCockDesire += $gameTroop.erectMembersAll().length * 1.5;
	}
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID) && this.cockDesire < this.mouthDesire) {
		regenCockDesire += 2;
	}
	
	if(this.hasPassive(PASSIVE_BJ_ORGASM_ONE_ID)) {
		regenCockDesire += 2;
	}
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID) && this._liquidSwallow === 0) {
		regenCockDesire += 2;
	}
	
	if(this.hasPassive(PASSIVE_BUKKAKE_FACE_ML_ONE_ID) && this._liquidBukkakeFace > 0) {
		regenCockDesire += 2;
	}
	
	if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_ONE_ID))
		regenCockDesire += 1;
	
	
	if(this.hasPassive(PASSIVE_TALK_ORGASM_TWO_ID))
		regenRandomDesire.push(3);
	
	if(this.hasPassive(PASSIVE_SIGHT_BOOBS_ONE_ID) && this.isClothingAtStageSeeOneBoob()) {
		regenBoobsDesire += 2;
	}
	
	if(this.hasPassive(PASSIVE_VIRGINS_TOTAL_THREE_ID) && $gameTroop.hasEnemyPrefixPresent(ENEMY_PREFIX_VIRGIN)) {
		regenCockDesire += 3;
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_GOBLIN_TAG)) {
		regenPussyDesire += 4;
	}
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID) && $gameTroop.hasEnemyTypePresent(ENEMYTYPE_HOMELESS_TAG)) {
		regenCockDesire += 5;
	}
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID))
		regenRandomDesire.push(5);
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID))
		regenRandomDesire.push(5);
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_ONE_ID) && this.isWearingAnyToy()) {
		regenCockDesire += 3;
	}
	
	if(this.isHorny) {
		if(this.hasPassive(PASSIVE_HORNY_COUNT_FOUR_ID)) {
			regenMouthDesire += 6;
			regenBoobsDesire += 6;
			regenButtDesire += 6;
			regenPussyDesire += 6;
			regenCockDesire += 4;
		}
		else if(this.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID)) {
			regenMouthDesire += 3;
			regenBoobsDesire += 3;
			regenButtDesire += 3;
			regenPussyDesire += 3;
			regenCockDesire += 2;
		}
		else {
			regenMouthDesire += 1;
			regenBoobsDesire += 1;
			regenButtDesire += 1;
			regenPussyDesire += 1;
		}
	}
	
	//Special
	regenCockDesire += this.regenerateDesires_DefeatedLevel1Effect();
	regenCockDesire += this.regenerateDesires_DefeatedLevel2Effect();

	//Multipler
	if(this.isInWaitressServingPose()) {
		regenMouthDesire *= 0.4;
		regenBoobsDesire *= 0.4;
		regenButtDesire *= 0.4;
		regenPussyDesire *= 0.4;
		regenCockDesire *= 0.3;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= 0.4;
		};
	}
	else if(this.isInReceptionistPose()) {
		regenMouthDesire *= 0.4;
		regenBoobsDesire *= 0.4;
		regenButtDesire *= 0.4;
		regenPussyDesire *= 0.4;
		regenCockDesire *= 0.3;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= 0.4;
		};
	}
	else if(this.isInMasturbationPose()) {
		regenMouthDesire *= 0.15;
		regenBoobsDesire *= 0.15;
		regenButtDesire *= 0.15;
		regenPussyDesire *= 0.15;
		regenCockDesire *= 0.15;
		for(let i = 0; i < regenRandomDesire.length; ++i) {
			regenRandomDesire[i] *= 0.15;
		};
	}
	else if($gameParty.isInGloryBattle) {
		let gloryDesireRegenMultipler = 0.15;
		
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
	this.gainBoobsDesire(regenBoobsDesire);
	this.gainPussyDesire(regenPussyDesire);
	this.gainMouthDesire(regenMouthDesire);
	this.gainButtDesire(regenButtDesire);
	this.gainCockDesire(regenCockDesire);
	for(let i = 0; i < regenRandomDesire.length; ++i) {
		this.gainRandomDesire(regenRandomDesire[i]);
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

///////
// Gain Desire Multipler
///////////////

Game_Actor.prototype.gainCockDesirePassiveMultipler = function() {
	let multi = 1;
	
	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID)) multi += 0.2;
	else if(this.hasPassive(CHARA_CREATE_THREE_MAZO_ID)) multi += 0.2;
	
	multi += this.gainAllDesirePassiveBonus();
	return multi;
};
Game_Actor.prototype.gainMouthDesirePassiveMultipler = function() {
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) multi += 0.1;
	if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) multi += 0.1;
	if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID)) multi += 0.25;
	else if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) multi += 0.1;
	
	multi += this.gainAllDesirePassiveBonus();
	return multi;
};
Game_Actor.prototype.gainBoobsDesirePassiveMultipler = function() {
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID)) multi += 0.1;
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID) && this.isAroused()) multi += 0.1;
	if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID)) multi += 0.25;
	else if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) multi += 0.1;
	
	multi += this.gainAllDesirePassiveBonus();
	return multi;
};
Game_Actor.prototype.gainPussyDesirePassiveMultipler = function() {
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_COUNT_TWO_ID)) multi += 0.1;
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_THREE_ID)) multi += 0.1;
	if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID)) multi += 0.25;
	else if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) multi += 0.1;
	
	multi += this.gainAllDesirePassiveBonus();
	return multi;
};
Game_Actor.prototype.gainButtDesirePassiveMultipler = function() {
	let multi = 1;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_FOUR_ID)) multi += 0.2;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_THREE_ID)) multi += 0.1;
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID)) multi += 0.1;
	if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID)) multi += 0.25;
	else if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) multi += 0.1;
	
	multi += this.gainAllDesirePassiveBonus();
	return multi;
};

Game_Actor.prototype.gainAllDesirePassiveBonus = function() {
	let allBonus = 0;
	
	if(this.hasPassive(PASSIVE_MAX_ALL_DESIRE_SECOND_ID)) allBonus += 0.15;
	
	return allBonus;
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
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FIRST_ID)) this.gainBoobsDesire(2);
	if(this.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID)) this.addState(STATE_ATTACK_CHARM_1_ID);
	
};

Game_Actor.prototype.passiveEvadePoseEffect = function() {
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FIRST_ID)) this.gainButtDesire(3);
	if(this.hasPassive(PASSIVE_MAX_BUTT_DESIRE_SECOND_ID)) this.addState(STATE_EVADE_CHARM_1_ID);
	
};

////////
// Pussy Drip
////////////////

Game_Actor.prototype.passivePussyJuiceDrip = function() { 
	let value = 4;
	
	if(this.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FIRST_ID)) value += 1;
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID)) value += 1;
	if(this.hasPassive(PASSIVE_PUSSY_JUICE_ML_ONE_ID)) value += 1;
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_THREE_ID)) value += 1;
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID)) value += 1;
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID) && !this.isWearingPanties()) value += 1;
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_TWO_ID)) value += 1;
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_TWO_ID)) value += 1;
	
	return value
};

/////////
// Off-balance

Game_Actor.prototype.passiveOffBalanceStateAddTurns = function() {  
	let baseAdd = -1;
	let varianceTurns = 0;
	
	if(this.hasPassive(PASSIVE_OFFBALANCE_COUNT_ONE_ID) && (this.isAroused() || this.isHorny)) {
		let chance = 0;
		if(this.isAroused()) chance += 0.1;
		if(this.isHorny) chance += 0.15;
		if(Math.random() < chance) baseAdd += 1;
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
	(!this.isBodySlotPenis(PUSSY_ID) || !this.isBodySlotPenis(ANAL_ID) || !this.isBodySlotInserted(MOUTH_ID))) {
		hornyChance += 0.08;
	}
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_TWO_ID) && this.isWearingAnyToy()) {
		let toyCount = 0;
		if(this.isWearingClitToy()) toyCount+=2;
		if(this.isWearingPussyToy()) toyCount++;
		if(this.isWearingAnalToy()) toyCount++;
		hornyChance += toyCount * 0.02;
	}
	
	if(this.ateArtisanMeal(ARTISAN_MEAL_SLUT)) hornyChance += 0.15;
	
	if(this.isInJobPose()) hornyChance *= 0.6;
	else if(this.isInMasturbationPose()) hornyChance *= 0.4;
	if(Math.random() < hornyChance) this.addHornyState(); 
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
	
	if(this.hasPassive(PASSIVE_COCKINESS_COUNT_ONE_ID) && this.cockiness >= 33) {
		confidentChance += 	this.cockiness * 0.002;
	}

	if(Math.random() < confidentChance) 
		this.addState(STATE_CONFIDENT_ID); 
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
	
	if(this.hasPassive(PASSIVE_SPANKING_ORGASM_ONE_ID)) {
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
	
	if(this.hasPassive(PASSIVE_SPANKING_ORGASM_TWO_ID)) {
		hornyChance += 0.03;
		if(this.masochismLvl() > this.sadismLvl()) 
			hornyChance += this.masochismLvl() * 0.04;
		hornyChance += this.masochismLvl() * 0.01;
	}
	
	hornyChance *= multipler;
	if(Math.random() < hornyChance)
		this.addHornyState();
};

////////////
// Panties

Game_Actor.prototype.passiveStripOffPanties_losePantiesEffect = function() {  
	let loseChance = 0;
	
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_ONE_ID)) loseChance += 0.1;
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID)) loseChance += 0.15;
	
	if(Math.random() < loseChance)
		this._lostPanties = true;
};

Game_Actor.prototype.passiveWakeUp_losePantiesEffect = function() {  
	let loseChance = 0;
	
	if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_THREE_ID)) loseChance += 0.25;
	
	if(Math.random() < loseChance) {
		this._lostPanties = true;
		this.takeOffPanties();
	}
};

//////////
// Game Enemy
///////////

Game_Enemy.prototype.passiveParamRateEffect = function(paramId) {
	let passiveRate = 1;
	
	if(paramId === PARAM_STRENGTH_ID) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID) && this.isThugType)
			passiveRate -= 0.25;
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID) && this.isRogueType)
			passiveRate -= 0.25;
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID) && this.isLizardmanType)
			passiveRate -= 0.25;
	}
	if(paramId === PARAM_AGILITY_ID) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID) && this.isGoblinType)
			passiveRate -= 0.25;
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID) && this.isSlimeType)
			passiveRate -= 0.25;
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID) && this.isRogueType)
			passiveRate -= 0.25;
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID) && this.isOrcType)
			passiveRate -= 0.25;
	}
	
	
	
	return passiveRate;
};

Game_Enemy.prototype.passiveXParamRate = function(id) {  
	let passiveRate = 1;
	
	if(this.isStateAffected(STATE_ENEMY_KISSED_ID) && (id === XPARAM_HIT_ID || id === XPARAM_EVA_ID)) {
		if(Karryn.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) {
			passiveRate *= 0.75;
		}
		else if(Karryn.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) {
			passiveRate *= 0.83;
		}
		else {
			passiveRate *= 0.9;
		}
	}
	
	if(this.isOffBalance && id === XPARAM_EVA_ID) {
		passiveRate *= 0.75;
	}
	
	return passiveRate;
};

Game_Enemy.prototype.passiveSParamRate = function(id) {  
	let passiveRate = 1;
	
	if(this.isStateAffected(STATE_ENEMY_KISSED_ID) && id === SPARAM_WPATK_ID) {
		if(Karryn.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) {
			passiveRate *= 0.75;
		}
		else if(Karryn.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) {
			passiveRate *= 0.83;
		}
		else {
			passiveRate *= 0.9;
		}
	}

	if(this.isOffBalance && (id === SPARAM_WPATK_ID || id === SPARAM_WPDEF_ID)) {
		passiveRate*= 0.85;
	}

	
	return passiveRate;
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