var Remtairy = Remtairy || {};
Remtairy.Menu = Remtairy.Menu || {};

var Imported = Imported || {};
Imported.RemtairyMenu = true;

const WINDOW_MENU_COMMAND_WIDTH = 1000;
const WINDOW_MENU_COMMAND_WIDTH_INBATTLE = 1440;

const WINDOW_STATUS_FIRST_X = 10;

const WINDOW_PRISONINFO_WIDTH = 300;
const WINDOW_PRISONINFO_HEIGHT = 520;

const WINDOW_BACKGROUND_EDICTS = false;
const WINDOW_BACKGROUND_EQUIP = false;
const WINDOW_BACKGROUND_LOAD = false;
const WINDOW_BACKGROUND_PASSIVE = 'UI_passive';
const WINDOW_BACKGROUND_SAVE = false;
const WINDOW_BACKGROUND_SETTINGS = false;
const WINDOW_BACKGROUND_STATUS = false;

const WINDOW_SKILLLIST_SKILLCOST_WIDTH = 100;
const WINDOW_SKILLLIST_SKILLCOST_PADDING = 10;

//=============================================================================
 /*:
 * @plugindesc Menu
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

///////
// Window StatusCommand
////////////////

Window_StatusCommand.prototype.addCustomCommands = function() {
	if(this._actor == void 0) return;
	this.addCommand(TextManager.statusMenuPrimary, 'primary', true);
	this.addCommand(TextManager.statusMenuSecondary, 'secondary', true);
	if(DEBUG_MODE) this.addCommand(TextManager.statusMenuTertiary, 'tertiary', true);
	if($gameParty.inBattle()) this.addCommand(TextManager.statusMenuEffects, 'effects', true);
	this.addCommand(TextManager.statusMenuDesire, 'desires', true);
	this.addCommand(TextManager.statusMenuProfile, 'profile', true);
	this.addCommand(TextManager.statusMenuRecords, 'records', true);
	
	
};

Window_StatusCommand.prototype.maxCols = function() {
	let cols = 6;
    if(DEBUG_MODE) cols += 1;
	if($gameParty.inBattle()) cols += 1;
	return cols;
};

Window_StatusInfo.prototype.getArrayDW = function(maxCols) {
    let dw = this.width - this.standardPadding() * 3;
    dw /= maxCols;
    dw += this.standardPadding() / maxCols;
    dw -= this.standardPadding();
    return dw;
};

Window_StatusCommand.prototype.createCommand = function(command) {
    command = command.toUpperCase();
    if (['CANCEL', 'FINISH'].contains(command)) {
		this.addCommand(TextManager.cancel, 'cancel', true);
	} 
	else if (['CUSTOM', 'ORIGINAL'].contains(command)) {
		this.addCustomCommands();
	} 
};

Window_StatusCommand.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('up')) {
            this.cursorLeft(Input.isTriggered('left'));
        }
        if (Input.isRepeated('right')) {
			this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('left')) {
			this.cursorLeft(Input.isTriggered('left'));
        }
		if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorRight(Input.isTriggered('right'));
        }
        if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorLeft(Input.isTriggered('left'));
        }
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }
};

Window_StatusInfo.prototype.processCursorMove = function() {
    return;
};

///////
// Window StatusInfo
////////////////

Window_StatusInfo.prototype.setResistColor = function(rate) {
    var colorId = 0;
    if (rate >= 2.4) {
      colorId = 30;
	} else if (rate >= 2.1) {
      colorId = 31;  
	} else if (rate >= 1.8) {
      colorId = 27;
    } else if (rate >= 1.6) {
      colorId = 18; 
    } else if (rate >= 1.4) {
      colorId = 10;
    } else if (rate >= 1.2) {
      colorId = 20;
    } else if (rate >= 1.0) {
      colorId = 0;
    } else if (rate >= 0.8) {
      colorId = 24;
    } else if (rate >= 0.5) {
      colorId = 29;
    } else if (rate > 0) {
      colorId = 28;
    } else if (rate <= 0) {
      colorId = 23;
    } 
    this.changeTextColor(this.textColor(colorId));
};

Window_StatusInfo.prototype.setSensitivityColor = function(rate) {
    var colorId = 0;
    if (rate >= 3.0) {
      colorId = 30;
	} else if (rate >= 2.4) {
      colorId = 31;  
	} else if (rate >= 1.9) {
      colorId = 27;
    } else if (rate >= 1.6) {
      colorId = 18; 
    } else if (rate >= 1.3) {
      colorId = 10;
    } else if (rate >= 1.0) {
      colorId = 2;
    } else if (rate >= 0.75) {
      colorId = 21;
    } else if (rate >= 0.5) {
      colorId = 3;
    } else if (rate >= 0.25) {
      colorId = 8;
	} else if (rate >= 0.1) {
      colorId = 7;
    } else if (rate => 0) {
      colorId = 19;
    } 
    this.changeTextColor(this.textColor(colorId));
};

Window_StatusInfo.prototype.drawInfoContents = function(symbol) {
    this.resetFontSettings();
    if (!symbol) return;
    switch (symbol.toLowerCase()) {
    case 'primary':
      this.drawPrimary();
      break;
    case 'secondary':
      this.drawSecondary();
      break;
    case 'tertiary':
      this.drawTertiary();
      break;
    case 'profile':
      this.drawProfile();
      break;
	case 'records':
      this.drawRecords();
      break;
	case 'desires':
      this.drawDesires();
      break;  
	case 'effects':
      this.drawEffects();
      break;   
	
    default:
      this.drawPrimary();
      break;
    }
};

Window_StatusInfo.prototype.drawPrimary = function() {
	if(!this._actor) return;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let firstTextPaddingX = firstColumnX + this.textPadding();
	let lineWidth = this.getArrayDW(2);
	let secondColumnX = firstColumnX + lineWidth + this.standardPadding();
	let secondTextPaddingX = secondColumnX + this.textPadding();
	let paddingY = 0;
	let lineHeight = this.lineHeight() * 0.85;
	let lineCount = 0;
	let screenWidth = this.width - this.standardPadding() * 2;
	
	this.changeTextColor(this.systemColor());
	if(actor.isInMapPose())
		this.drawText(TextManager.statusMenuStatLevels, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
	else
		this.drawText(TextManager.statusMenuStats, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
	lineCount += 1;
	
	for (let i = 0; i < 10; ++i) {
		let y = paddingY + lineCount * lineHeight;
		let textX = firstTextPaddingX;
		let rectX = firstColumnX;
		if(i % 2 === 1) {
			textX = secondTextPaddingX;
			rectX = secondColumnX
			lineCount++;
		}
		
		let valueName = '';
		let valueNum = '';
		
		if(i === 0) {
			valueName = TextManager.wardenLevel;
			valueNum = actor.level;
		}
		else if(i === 1) {
			valueName = TextManager.wardenLevelLimit;
			valueNum = actor.getWardenLevelLimit();
		}
		else if(i === 2) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.basic(2));
				valueNum = actor._paramLvl[PARAM_MAXSTAMINA_ID];
			}
			else {
				valueName = TextManager.param(PARAM_MAXSTAMINA_ID);
				valueNum = actor.maxstamina;
			}
		}
		else if(i === 3) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.basic(4));
				valueNum = actor._paramLvl[PARAM_MAXENERGY_ID];
			}
			else {
				valueName = TextManager.param(PARAM_MAXENERGY_ID);
				valueNum = actor.maxenergy;
			}
		}
		else if(i === 4) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.param(PARAM_STRENGTH_ID));
				valueNum = actor._paramLvl[PARAM_STRENGTH_ID];
			}
			else {
				valueName = TextManager.param(PARAM_STRENGTH_ID);
				valueNum = actor.param(PARAM_STRENGTH_ID);
			}
		}
		else if(i === 5) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.param(PARAM_DEXTERITY_ID));
				valueNum = actor._paramLvl[PARAM_DEXTERITY_ID];
			}
			else {
				valueName = TextManager.param(PARAM_DEXTERITY_ID);
				valueNum = actor.param(PARAM_DEXTERITY_ID);
			}
		}
		else if(i === 6) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.param(PARAM_AGILITY_ID));
				valueNum = actor._paramLvl[PARAM_AGILITY_ID];
			}
			else {
				valueName = TextManager.param(PARAM_AGILITY_ID);
				valueNum = actor.param(PARAM_AGILITY_ID);
			}
		}
		else if(i === 7) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.param(PARAM_ENDURANCE_ID));
				valueNum = actor._paramLvl[PARAM_ENDURANCE_ID];
			}
			else {
				valueName = TextManager.param(PARAM_ENDURANCE_ID);
				valueNum = actor.param(PARAM_ENDURANCE_ID);
			}
		}
		else if(i === 8) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.param(PARAM_MIND_ID));
				valueNum = actor._paramLvl[PARAM_MIND_ID];
			}
			else {
				valueName = TextManager.param(PARAM_MIND_ID);
				valueNum = actor.param(PARAM_MIND_ID);
			}
		}
		else if(i === 9) {
			if(actor.isInMapPose()) {
				valueName = TextManager.statLevel.format(TextManager.param(PARAM_CHARM_ID));
				valueNum = actor._paramLvl[PARAM_CHARM_ID];
			}
			else {
				valueName = TextManager.param(PARAM_CHARM_ID);
				valueNum = actor.inBattleCharm;
			}
		}
		
		this.drawDarkRect(rectX, y, lineWidth, lineHeight);
		this.changeTextColor(this.systemColor());
		this.drawText(valueName, textX, y, lineWidth, 'left');
		this.changeTextColor(this.normalColor());
		this.drawText(valueNum.toLocaleString(), rectX, y, lineWidth - this.textPadding(), 'right');
    }
	
	this.changeTextColor(this.systemColor());
	this.drawText(TextManager.statusMenuAttributes, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
	lineCount += 1;
	
	for (let i = 0; i < 16; ++i) {
		let y = paddingY + lineCount * lineHeight;
		let textX = firstTextPaddingX;
		let rectX = firstColumnX;
		if(i % 2 === 1) {
			textX = secondTextPaddingX;
			rectX = secondColumnX
			lineCount++;
		}
		
		let valueName = '';
		let valueNum = '';
		
		if(i === 0) {
			valueName = TextManager.wpAtk;
			valueNum = (Yanfly.Util.toGroup(this._actor.sparam(SPARAM_WPATK_ID))*100).toFixed(0) + '%';
		}
		else if(i === 1) {
			valueName = TextManager.wpDef;
			valueNum = (Yanfly.Util.toGroup(this._actor.sparam(SPARAM_WPDEF_ID))*100).toFixed(0) + '%';
		}
		else if(i === 2) {
			valueName = TextManager.xparam(XPARAM_HIT_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_HIT_ID))*100).toFixed(0);
		}
		else if(i === 3) {
			valueName = TextManager.xparam(XPARAM_EVA_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_EVA_ID))*100).toFixed(0);
		}
		else if(i === 4) {
			valueName = TextManager.xparam(XPARAM_CRIT_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_CRIT_ID))*100).toFixed(0);
		}
		else if(i === 5) {
			valueName = TextManager.critDmgName;
			let value = 1;
			let user = this._actor;
			let bonus = user.criticalMultiplierBonus();
			let target = false;
			try {
			  eval(Yanfly.Param.critMult);
			} catch (e) {
			  Yanfly.Util.displayError(e, code, 'CRITICAL MULTIPLIER ERROR');
			}
			valueNum = (Yanfly.Util.toGroup(value)*100).toFixed(0) + '%';
		}
		else if(i === 6) {
			valueName = TextManager.xparam(XPARAM_CRIT_EVA_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_CRIT_EVA_ID))*100).toFixed(0);
		}
		else if(i === 7) {
			valueName = TextManager.xparam(XPARAM_GRAZE_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_GRAZE_ID))*100).toFixed(0) + '%';
		}
		else if(i === 8) {
			valueName = TextManager.xparam(XPARAM_CNT_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_CNT_ID))*100).toFixed(0) + '%';
		}
		else if(i === 9) {
			valueName = TextManager.overblowProtection;
			valueNum = (Yanfly.Util.toGroup(1 - this._actor.overblowProtectionRate())*100).toFixed(0) + '%';
		}
		else if(i === 10) {
			valueName = TextManager.fatigue;
			valueNum = '' + this._actor.fatigue + '%';
		}
		else if(i === 11) {
			valueName = TextManager.fatigueGain;
			valueNum = (Yanfly.Util.toGroup(this._actor.fatigueGainRate())*100).toFixed(0) + '%';
		}
		else if(i === 12) {
			valueName = TextManager.fatigueRecovery;
			valueNum = (Yanfly.Util.toGroup(this._actor.fatigueRecoveryRate())*100).toFixed(0) + '%';
		}
		else if(i === 13) {
			valueName = TextManager.xparam(XPARAM_STA_REGEN_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_STA_REGEN_ID))*this._actor.regenerateStaminaRate()*100).toFixed(0) + '%';
		}
		else if(i === 14) {
			valueName = TextManager.xparam(XPARAM_EN_REGEN_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.xparam(XPARAM_EN_REGEN_ID))*this._actor.regenerateEnergyRate()*100).toFixed(0) + '%';
		}
		else if(i === 15) {
			valueName = TextManager.sparam(SPARAM_WP_REGEN_ID);
			valueNum = (Yanfly.Util.toGroup(this._actor.sparam(SPARAM_WP_REGEN_ID))*100).toFixed(0) + '%';
		}
		
		this.drawDarkRect(rectX, y, lineWidth, lineHeight);
		this.changeTextColor(this.systemColor());
		this.drawText(valueName, textX, y, lineWidth, 'left');
		this.changeTextColor(this.normalColor());
		this.drawText(valueNum, rectX, y, lineWidth - this.textPadding(), 'right');
    }
};

Window_StatusInfo.prototype.drawSecondary = function() {
	if(!this._actor) return;
	let actor = this._actor;
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let firstTextPaddingX = firstColumnX + this.textPadding();
	let lineWidth = this.getArrayDW(2);
	let secondColumnX = firstColumnX + lineWidth + this.standardPadding();
	let secondTextPaddingX = secondColumnX + this.textPadding();
	let paddingY = 0;
	let lineHeight = this.lineHeight() * 0.85;
	let lineCount = 0;
	let screenWidth = this.width - this.standardPadding() * 2;
	
	this.changeTextColor(this.systemColor());
	this.drawText(TextManager.statusMenuAttributes, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
	lineCount += 1;
	
	for (let i = 0; i < 12; ++i) {
		let y = paddingY + lineCount * lineHeight;
		let textX = firstTextPaddingX;
		let rectX = firstColumnX;
		if(i % 2 === 1) {
			textX = secondTextPaddingX;
			rectX = secondColumnX
			lineCount++;
		}
		
		if(i === 3 && !DEBUG_MODE) continue;
		
		let valueName = '';
		let valueNum = '';
		
		if(i === 0) {
			valueName = TextManager.sparam(SPARAM_ASC_ID);
			valueNum = (Yanfly.Util.toGroup(actor.sparam(SPARAM_ASC_ID))*100).toFixed(0) + '%';
		}
		else if(i === 1) {
			valueName = TextManager.sparam(SPARAM_ESC_ID);
			valueNum = (Yanfly.Util.toGroup(actor.sparam(SPARAM_ESC_ID))*100).toFixed(0) + '%';
		}
		else if(i === 2) {
			valueName = TextManager.sparam(SPARAM_WSC_ID);
			valueNum = (Yanfly.Util.toGroup(actor.sparam(SPARAM_WSC_ID))*100).toFixed(0) + '%';
		}
		else if(i === 3) {
			valueName = TextManager.sparam(SPARAM_SSC_ID);
			valueNum = (Yanfly.Util.toGroup(actor.sparam(SPARAM_SSC_ID))*100).toFixed(0) + '%';
		}
		else if(i === 4) {
			valueName = TextManager.basic(2) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_MAXSTAMINA_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 5) {
			valueName = TextManager.basic(4) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_MAXENERGY_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 6) {
			valueName = TextManager.param(PARAM_STRENGTH_ID) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_STRENGTH_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 7) {
			valueName = TextManager.param(PARAM_DEXTERITY_ID) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_DEXTERITY_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 8) {
			valueName = TextManager.param(PARAM_ENDURANCE_ID) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_ENDURANCE_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 9) {
			valueName = TextManager.param(PARAM_AGILITY_ID) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_AGILITY_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 10) {
			valueName = TextManager.param(PARAM_MIND_ID) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_MIND_ID, false))*100).toFixed(0) + '%';
		}
		else if(i === 11) {
			valueName = TextManager.param(PARAM_CHARM_ID) + TextManager.growthRateText;
			valueNum = (Yanfly.Util.toGroup(actor.getParamGrowthRate(PARAM_CHARM_ID, false))*100).toFixed(0) + '%';
		}
		
		this.drawDarkRect(rectX, y, lineWidth, lineHeight);
		this.changeTextColor(this.systemColor());
		this.drawText(valueName, textX, y, lineWidth, 'left');
		this.changeTextColor(this.normalColor());
		this.drawText(valueNum, rectX, y, lineWidth - this.textPadding(), 'right');
	}	
	
	if(actor.hasEdict(EDICT_PUBLISH_RESISTS)) {	
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuResists, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;	
			
		for (let i = 0; i < 8; ++i) {	
			let y = paddingY + lineCount * lineHeight;
			let textX = firstTextPaddingX;
			let rectX = firstColumnX;
			if(i % 2 === 1) {
				textX = secondTextPaddingX;
				rectX = secondColumnX
				lineCount++;
			}
			
			if(i >= 3 && !DEBUG_MODE) continue;
			
			let valueName = '';
			let valueNum = '';
			let valueNumText = '';
			
			if(i === 0) {
				valueName = TextManager.element(ELEMENT_SLASH_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_SLASH_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 1) {
				valueName = TextManager.element(ELEMENT_PIERCE_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_PIERCE_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 2) {
				valueName = TextManager.element(ELEMENT_BLUNT_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_BLUNT_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 3) {
				valueName = TextManager.element(ELEMENT_TALK_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_TALK_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 4) {
				valueName = TextManager.element(ELEMENT_SIGHT_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_SIGHT_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 5) {
				valueName = TextManager.element(ELEMENT_STRIP_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_STRIP_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 6) {
				valueName = TextManager.element(ELEMENT_PETTING_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_PETTING_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			else if(i === 7) {
				valueName = TextManager.element(ELEMENT_SEX_ID) + TextManager.resistName;
				valueNum = actor.elementRate(ELEMENT_SEX_ID);
				valueNumText = ((Yanfly.Util.toGroup(valueNum)*100).toFixed(0) - 100) * -1 + '%'
			}
			
			this.drawDarkRect(rectX, y, lineWidth, lineHeight);
			this.changeTextColor(this.systemColor());
			this.drawText(valueName, textX, y, lineWidth, 'left');
			this.setResistColor(valueNum);
			this.drawText(valueNumText, rectX, y, lineWidth - this.textPadding(), 'right');
			
			
		}	
	}
};

Window_StatusInfo.prototype.drawTertiary = function() {
	if(!this._actor) return;
	let actor = this._actor;
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let firstTextPaddingX = firstColumnX + this.textPadding();
	let lineWidth = this.getArrayDW(2);
	let lineTextWidth = lineWidth * 0.7;
	let secondColumnX = firstColumnX + lineWidth + this.standardPadding();
	let secondTextPaddingX = secondColumnX + this.textPadding();
	let paddingY = 0;
	let lineHeight = this.lineHeight() * 0.85;
	let lineCount = 0;
	let screenWidth = this.width - this.standardPadding() * 2;
	
	let firstMiniColumnX = WINDOW_STATUS_FIRST_X;
	let firstMiniTextPaddingX = firstMiniColumnX + this.textPadding();
	let miniLineWidth = this.getArrayDW(3);
	let miniLineTextWidth = miniLineWidth * 0.8;
	let secondMiniColumnX = firstMiniColumnX + miniLineWidth + this.standardPadding();
	let secondMiniTextPaddingX = secondMiniColumnX + this.textPadding();
	let thirdMiniColumnX = secondMiniColumnX + miniLineWidth + this.standardPadding();
	let thirdMiniTextPaddingX = thirdMiniColumnX + this.textPadding();
	
	if(actor.hasEdict(EDICT_PUBLISH_SEX_LEVELS)) {
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuLevels, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 15; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstMiniTextPaddingX;
			let rectX = firstMiniColumnX;
			if(i % 3 === 1) {
				textX = secondMiniTextPaddingX;
				rectX = secondMiniColumnX
			}
			if(i % 3 === 2) {
				textX = thirdMiniTextPaddingX;
				rectX = thirdMiniColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			
			if(i === 0) {
				valueName = TextManager.slutLevel;
				valueNum = actor.slutLvl;
			}
			else if(i === 3) {
				valueName = TextManager.kissingLevel;
				valueNum = actor.kissLvl();
			}
			else if(i === 4) {
				valueName = TextManager.pettingLevel;
				valueNum = actor.pettingLvl();
			}
			else if(i === 5) {
				valueName = TextManager.handjobLevel;
				valueNum = actor.handjobLvl();
			}
			else if(i === 6) {
				valueName = TextManager.blowjobLevel;
				valueNum = actor.blowjobLvl();
			}
			else if(i === 7) {
				valueName = TextManager.tittyFuckLevel;
				valueNum = actor.tittyFuckLvl();
			}
			else if(i === 8) {
				valueName = TextManager.footjobLevel;
				valueNum = actor.footjobLvl();
			}
			else if(i === 9) {
				valueName = TextManager.rimjobLevel;
				valueNum = actor.rimjobLvl();
			}
			else if(i === 10) {
				valueName = TextManager.pussySexLevel;
				valueNum = actor.pussySexLvl();
			}
			else if(i === 11) {
				valueName = TextManager.analSexLevel;
				valueNum = actor.analSexLvl();
			}
			else if(i === 12) {
				valueName = TextManager.masturbationLevel;
				valueNum = actor.masturbateLvl();
			}
			else if(i === 13) {
				valueName = TextManager.sadismLevel;
				valueNum = actor.sadismLvl();
			}
			else if(i === 14) {
				valueName = TextManager.masochismLevel;
				valueNum = actor.masochismLvl();
			}
		
			if(valueNum > 0) {
				this.drawDarkRect(rectX, y, miniLineWidth, lineHeight);
				this.changeTextColor(this.systemColor());
				this.drawText(valueName, textX, y, miniLineTextWidth, 'left');
				this.changeTextColor(this.normalColor());
				this.drawText(valueNum, rectX, y, miniLineWidth - this.textPadding(), 'right');
			}
		}
		lineCount++;
	}
	
	if(actor.hasEdict(EDICT_PUBLISH_SENSITIVITIES)) {
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuSensitivities, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 16; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstTextPaddingX;
			let rectX = firstColumnX;
			if(i % 2 === 1) {
				textX = secondTextPaddingX;
				rectX = secondColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			let valueNumText = '';
			
			if(i === 0) {
				valueName = TextManager.talkSensitivity;
				valueNum = this._actor.talkSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 1) {
				valueName = TextManager.sightSensitivity;
				valueNum = this._actor.sightSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 2) {
				valueName = TextManager.mouthSensitivity;
				valueNum = this._actor.mouthSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 3) {
				valueName = TextManager.fingerSensitivity;
				valueNum = this._actor.fingerSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 4) {
				valueName = TextManager.boobsSensitivity;
				valueNum = this._actor.boobsSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 5) {
				valueName = TextManager.nipplesSensitivity;
				valueNum = this._actor.nipplesSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 6) {
				valueName = TextManager.clitorisSensitivity;
				valueNum = this._actor.clitSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 7) {
				valueName = TextManager.pussySensitivity;
				valueNum = this._actor.pussySensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 8) {
				valueName = TextManager.buttSensitivity;
				valueNum = this._actor.buttSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 9) {
				valueName = TextManager.analSensitivity;
				valueNum = this._actor.analSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 10) {
				valueName = TextManager.buttSpankingSensitivity;
				valueNum = this._actor.passiveSpankingPleasureRate();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			

			else if(i === 11) {
				valueName = TextManager.footSensitivity;
				valueNum = this._actor.footSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 12) {
				valueName = TextManager.bukkakeSensitivity;
				valueNum = this._actor.bukkakeSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 13) {
				valueName = TextManager.swallowSensitivity;
				valueNum = this._actor.swallowSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 14) {
				valueName = TextManager.pussyCreampieSensitivity;
				valueNum = this._actor.pussyCreampieSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			else if(i === 15) {
				valueName = TextManager.analCreampieSensitivity;
				valueNum = this._actor.analCreampieSensitivity();
				valueNumText = (Yanfly.Util.toGroup(valueNum)*100).toFixed(0) + '%'
			}
			
			this.drawDarkRect(rectX, y, lineWidth, lineHeight);
			this.changeTextColor(this.systemColor());
			this.drawText(valueName, textX, y, lineTextWidth, 'left');
			this.setSensitivityColor(valueNum);
			this.drawText(valueNumText, rectX, y, lineWidth - this.textPadding(), 'right');
		}
	}
};

Window_StatusInfo.prototype.drawDesires = function() {
	if(!this._actor) return;
	let actor = this._actor;
	let lineCount = 0;
	let lineHeight = this.lineHeight() * 0.84;
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let paddingY = 0;
	let screenWidth = this.width - this.standardPadding() * 2;
	
	let firstMiniColumnX = WINDOW_STATUS_FIRST_X;
	let firstMiniTextPaddingX = firstMiniColumnX + this.textPadding();
	let miniLineWidth = this.getArrayDW(3);
	let miniLineTextWidth = miniLineWidth * 0.7;
	let secondMiniColumnX = firstMiniColumnX + miniLineWidth + this.standardPadding();
	let secondMiniTextPaddingX = secondMiniColumnX + this.textPadding();
	let thirdMiniColumnX = secondMiniColumnX + miniLineWidth + this.standardPadding();
	let thirdMiniTextPaddingX = thirdMiniColumnX + this.textPadding();
	
	//has Edict
	if(actor.hasEdict(EDICT_PUBLISH_DESIRES)) {
		//Mouth Desire
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuMouthDesireReq, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 4; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstMiniTextPaddingX;
			let rectX = firstMiniColumnX;
			if(i % 3 === 1) {
				textX = secondMiniTextPaddingX;
				rectX = secondMiniColumnX
			}
			if(i % 3 === 2) {
				textX = thirdMiniTextPaddingX;
				rectX = thirdMiniColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			
			if(i === 0) {
				valueName = TextManager.profileRecordSuckFingers;
				valueNum = actor.suckFingersMouthDesireRequirement();
			}
			else if(i === 1) {
				valueName = TextManager.profileRecordKiss;
				valueNum = actor.kissingMouthDesireRequirement();
			}
			else if(i === 2) {
				valueName = TextManager.profileRecordBlowjob;
				valueNum = actor.blowjobMouthDesireRequirement();
			}
			else if(i === 3 && Karryn.showLevelOneSubjugatedEdicts() && !ConfigManager.disableRimjobs) {
				valueName = TextManager.profileRecordRimjob;
				valueNum = actor.rimjobMouthDesireRequirement();
			}
			
			valueNum = Math.max(Math.round(valueNum), 0);
			
			this.drawDarkRect(rectX, y, miniLineWidth, lineHeight);
			if(valueName) {
				this.changeTextColor(this.systemColor());
				this.drawText(valueName, textX, y, miniLineTextWidth, 'left');
				this.changeTextColor(this.normalColor());
				this.drawText(valueNum, rectX, y, miniLineWidth - this.textPadding(), 'right');
			}
		}
		lineCount += 1;
		
		//Boobs Desire
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuBoobsDesireReq, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 3; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstMiniTextPaddingX;
			let rectX = firstMiniColumnX;
			if(i % 3 === 1) {
				textX = secondMiniTextPaddingX;
				rectX = secondMiniColumnX
			}
			if(i % 3 === 2) {
				textX = thirdMiniTextPaddingX;
				rectX = thirdMiniColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			
			if(i === 0) {
				valueName = TextManager.profileRecordBoobsPetting;
				valueNum = actor.boobsPettingBoobsDesireRequirement();
			}
			else if(i === 1) {
				valueName = TextManager.profileRecordNipplesPetting;
				valueNum = actor.nipplesPettingBoobsDesireRequirement();
			}
			else if(i === 2) {
				valueName = TextManager.profileRecordTittyFuck;
				valueNum = actor.tittyFuckBoobsDesireRequirement();
			}
			
			valueNum = Math.max(Math.round(valueNum), 0);
			
			this.drawDarkRect(rectX, y, miniLineWidth, lineHeight);
			if(valueName) {
				this.changeTextColor(this.systemColor());
				this.drawText(valueName, textX, y, miniLineTextWidth, 'left');
				this.changeTextColor(this.normalColor());
				this.drawText(valueNum, rectX, y, miniLineWidth - this.textPadding(), 'right');
			}
		}
		
		//Pussy Desire
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuPussyDesireReq, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 6; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstMiniTextPaddingX;
			let rectX = firstMiniColumnX;
			if(i % 3 === 1) {
				textX = secondMiniTextPaddingX;
				rectX = secondMiniColumnX
			}
			if(i % 3 === 2) {
				textX = thirdMiniTextPaddingX;
				rectX = thirdMiniColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			
			if(i === 0) {
				valueName = TextManager.profileRecordClitPetting;
				valueNum = actor.clitPettingPussyDesireRequirement();
			}
			else if(i === 1 && Karryn.showLevelOneSubjugatedEdicts()) {
				valueName = TextManager.profileRecordClitToy;
				valueNum = actor.clitToyPussyDesireRequirement();
			}
			else if(i === 2) {
				valueName = TextManager.profileRecordCunnilingus;
				valueNum = actor.cunnilingusPussyDesireRequirement();
			}
			else if(i === 3) {
				valueName = TextManager.profileRecordPussyPetting;
				valueNum = actor.pussyPettingPussyDesireRequirement();
			}
			else if(i === 4 && Karryn.showLevelOneSubjugatedEdicts()) {
				valueName = TextManager.profileRecordPussyToy;
				valueNum = actor.pussyToyPussyDesireRequirement();
			}
			else if(i === 5) {
				valueName = TextManager.profileRecordPussySex;
				valueNum = actor.pussySexPussyDesireRequirement();
			}
			
			valueNum = Math.max(Math.round(valueNum), 0);
			
			this.drawDarkRect(rectX, y, miniLineWidth, lineHeight);
			if(valueName) {
				this.changeTextColor(this.systemColor());
				this.drawText(valueName, textX, y, miniLineTextWidth, 'left');
				this.changeTextColor(this.normalColor());
				this.drawText(valueNum, rectX, y, miniLineWidth - this.textPadding(), 'right');
			}
		}
		
		//Butt Desire
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuButtDesireReq, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 5; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstMiniTextPaddingX;
			let rectX = firstMiniColumnX;
			if(i % 3 === 1) {
				textX = secondMiniTextPaddingX;
				rectX = secondMiniColumnX
			}
			if(i % 3 === 2) {
				textX = thirdMiniTextPaddingX;
				rectX = thirdMiniColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			
			if(i === 0) {
				valueName = TextManager.profileRecordButtPetting;
				valueNum = actor.buttPettingButtDesireRequirement();
			}
			else if(i === 1) {
				valueName = TextManager.profileRecordButtSpank;
				valueNum = actor.spankingButtDesireRequirement();
			}
			else if(i === 2) {
				valueName = TextManager.profileRecordAnalPetting;
				valueNum = actor.analPettingButtDesireRequirement();
			}
			else if(i === 3 && Karryn.showLevelOneSubjugatedEdicts()) {
				valueName = TextManager.profileRecordAnalToy;
				valueNum = actor.analToyButtDesireRequirement();
			}
			else if(i === 4) {
				valueName = TextManager.profileRecordAnalSex;
				valueNum = actor.analSexButtDesireRequirement();
			}
			
			valueNum = Math.max(Math.round(valueNum), 0);
			
			this.drawDarkRect(rectX, y, miniLineWidth, lineHeight);
			if(valueName) {
				this.changeTextColor(this.systemColor());
				this.drawText(valueName, textX, y, miniLineTextWidth, 'left');
				this.changeTextColor(this.normalColor());
				this.drawText(valueNum, rectX, y, miniLineWidth - this.textPadding(), 'right');
			}
		}
		lineCount += 1;
		
		//Cock Desire
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.statusMenuCockDesireReq, firstColumnX, paddingY + lineCount * lineHeight, screenWidth, 'center');
		lineCount += 1;
		
		for (let i = 0; i < 11; ++i) {
			let y = paddingY + lineCount * lineHeight;
			let textX = firstMiniTextPaddingX;
			let rectX = firstMiniColumnX;
			if(i % 3 === 1) {
				textX = secondMiniTextPaddingX;
				rectX = secondMiniColumnX
			}
			if(i % 3 === 2) {
				textX = thirdMiniTextPaddingX;
				rectX = thirdMiniColumnX
				lineCount++;
			}
			
			let valueName = '';
			let valueNum = '';
			
			
			
			if(i === 0) {
				valueName = TextManager.profileRecordBodyBukkake;
				valueNum = actor.bodyBukkakeCockDesireRequirement();
			}
			else if(i === 1) {
				valueName = TextManager.profileRecordHandjob;
				valueNum = actor.handjobCockDesireRequirement();
			}
			else if(i === 2) {
				valueName = TextManager.profileRecordBlowjob;
				valueNum = actor.blowjobCockDesireRequirement();
			}
			else if(i === 3) {
				valueName = TextManager.profileRecordTittyFuck;
				valueNum = actor.tittyFuckCockDesireRequirement();
			}
			else if(i === 4 && Karryn.showLevelOneSubjugatedEdicts()) {
				valueName = TextManager.profileRecordFootjob;
				valueNum = actor.footjobCockDesireRequirement();
			}
			else if(i === 5) {
				valueName = TextManager.profileRecordPussySex;
				valueNum = actor.pussySexCockDesireRequirement();
			}
			else if(i === 6) {
				valueName = TextManager.profileRecordAnalSex;
				valueNum = actor.analSexCockDesireRequirement();
			}
			else if(i === 7) {
				valueName = TextManager.profileRecordFaceBukkake;
				valueNum = actor.faceBukkakeCockDesireRequirement();
			}
			else if(i === 8 && Karryn.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) {
				valueName = TextManager.profileRecordSwallow;
				valueNum = actor.mouthSwallowCockDesireRequirement();
			}
			else if(i === 9 && Karryn.hasPassive(PASSIVE_FIRST_SEX_ID)) {
				valueName = TextManager.profileRecordPussyCreampie;
				valueNum = actor.pussyCreampieCockDesireRequirement();
			}
			else if(i === 10 && Karryn.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) {
				valueName = TextManager.profileRecordAnalCreampie;
				valueNum = actor.analCreampieCockDesireRequirement();
			}
			
			valueNum = Math.max(Math.round(valueNum), 0);
			
			this.drawDarkRect(rectX, y, miniLineWidth, lineHeight);
			if(valueName) {
				this.changeTextColor(this.systemColor());
				this.drawText(valueName, textX, y, miniLineTextWidth, 'left');
				this.changeTextColor(this.normalColor());
				this.drawText(valueNum, rectX, y, miniLineWidth - this.textPadding(), 'right');
			}
		}
		
		
	}

};

Window_StatusInfo.prototype.drawEffects = function() {
	if(!this._actor) return;
	let actor = this._actor;
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let firstTextPaddingX = firstColumnX + this.textPadding();
	let screenWidth = this.width - this.standardPadding() * 2;
	let lineWidth = screenWidth;
	let effectTextFontSize = 18;
	let paddingY = 0;
	let lineHeight = this.lineHeight() * 0.7;
	let lineCount = 0;
	
	this.contents.fontSize = effectTextFontSize;
	for (let i = 0; i < 25; ++i) {
		let y = paddingY + lineCount * lineHeight;
		let effectText = false;
		let lineSize = 0;
		let lineIncrease = 0;
		
		if(i === 1 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.justOrgasmed()) 
				effectText = TextManager.statusBattleEffectOrgasm;
		}
		else if(i === 2 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.isHorny) {
				if(actor.hasPassive(PASSIVE_HORNY_COUNT_THREE_ID)) {
					lineSize = 1.8;
					effectText = TextManager.StatusBattleEffectIsHornyThree;
				}
				else if(actor.hasPassive(PASSIVE_HORNY_COUNT_TWO_ID)) {
					lineSize = 1.8;
					effectText = TextManager.statusBattleEffectIsHornyTwo;
				}
				else if(actor.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID))
					effectText = TextManager.statusBattleEffectIsHornyOne;
				else
					effectText = TextManager.statusBattleEffectIsHornyZero;
			}
			else if(actor.isCoolAndCollected()) {
				lineSize = 1.8;
				effectText = TextManager.StatusBattleEffectCool;
			}
		}
		else if(i === 3 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.isAroused())
				effectText = TextManager.statusBattleEffectIsAroused;
			else
				effectText = TextManager.statusBattleEffectNotAroused;
		}
		else if(i === 4 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.isWet)
				effectText = TextManager.statusBattleEffectIsWet;
			else
				effectText = TextManager.statusBattleEffectNotWet;
		}
		else if(i === 5 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.isWearingPanties())
				effectText = TextManager.statusBattleEffectIsWearingPanties;
			else
				effectText = TextManager.statusBattleEffectIsNotWearingPanties;
		}
		else if(i === 6) {
			lineSize = 1;
			if(actor.isConfident){
				if(actor.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
					effectText = TextManager.statusBattleEffectIsConfidentOne;
				else
					effectText = TextManager.statusBattleEffectIsConfidentZero;
			}
		}
		else if(i === 7 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.isVirgin()) {
				if(Karryn.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) {
					effectText = TextManager.StatusBattleEffectIsVirginPublished;
				}
				else {
					if(actor.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID))
						effectText = TextManager.StatusBattleEffectIsVirginLow;
					else if(actor.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID))
						effectText = TextManager.StatusBattleEffectIsVirginMed;
					else
						effectText = TextManager.StatusBattleEffectIsVirginHigh;
				}
			}
		}
		else if(i === 8) {
			lineSize = 1;
			if(actor._halberdIsDefiled)
				effectText = TextManager.statusBattleEffectDefiledHalberd;
		}
		else if(i === 9) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_DISARMED_ID))
				effectText = TextManager.statusBattleEffectDisarmed;
		}
		else if(i === 10 && DEBUG_MODE) {
			lineSize = 1;
			if(actor.isOnaniFrustrated())
				effectText = TextManager.statusBattleEffectIsFrustrated;
		}
		else if(i === 11) {
			lineSize = 1;
			if(actor._tempAttackSkillConsUsage >= 2)
				effectText = TextManager.StatusBattleEffectAttackCombo.format(actor._tempAttackSkillConsUsage);
			if(actor._tempAttackSkillConsUsage >= 4 && Karryn.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) {
				lineSize = 1.8;
				effectText += '\n' + TextManager.StatusBattleEffectAttackComboCocky;
			}
			
		}

		else if(i === 13) {
			lineSize = 1.8;
			if(actor._tempSexSkillConsUsage >= 2) {
				effectText = TextManager.StatusBattleEffectSexComboOne.format(actor._tempSexSkillConsUsage);
				effectText += '\n' + TextManager.StatusBattleEffectSexComboTwo;
			}
		}

		else if(i === 17) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_OFFBALANCE_ID))
				effectText = TextManager.statusBattleEffectOffBalanced;
		}
		else if(i === 18) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_WEAKEN_ID))
				effectText = TextManager.statusBattleEffectWeaken;
		}
		else if(i === 19) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_DIZZY_ID))
				effectText = TextManager.statusBattleEffectDizzy;
		}
		else if(i === 20) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_SLOW_ID))
				effectText = TextManager.statusBattleEffectSlow;
		}
		else if(i === 21) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_VULNERABLE_ID))
				effectText = TextManager.statusBattleEffectVulnerable;
		}
		else if(i === 22) {
			lineSize = 1;
			if(actor.isStateAffected(STATE_POISON_ID))
				effectText = TextManager.statusBattleEffectPoison;
		}
		else if(i === 23) {
			lineSize = 1;
			if(actor.hasWeaknessExposed())
				effectText = TextManager.statusBattleEffectExposeWeakness;
		}
	

		if(effectText) {
			this.drawDarkRect(firstColumnX, y, lineWidth, lineSize * lineHeight);
			this.drawTextEx(effectText, firstTextPaddingX, y, true);
			lineCount += lineSize;
		}
	}
};

Window_StatusInfo.prototype.drawProfile = function() {
	if(!this._actor) return;
	let actor = this._actor;
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let firstTextPaddingX = firstColumnX + this.textPadding();
	let screenWidth = this.width - this.standardPadding() * 2;
	let lineWidth = screenWidth * 0.5;
	let secondColumnX = firstColumnX + lineWidth + this.standardPadding();
	let secondTextPaddingX = secondColumnX + this.textPadding();
	
	let paddingY = 0;
	let lineHeight = this.lineHeight() * 0.84;
	let lineCount = 0;
	
	let normalFontSize = 28;
	let lineTextFontSize = 16;
	let lineTextFontSize_EN = 15;
	
	let threeSizesFontSize = 24;
	let bioFontSize = 16;
	
	let profileBio = TextManager.profileBio_One;
	
	this.contents.fontSize = normalFontSize;
	
	this.drawDarkRect(firstColumnX, paddingY, screenWidth, (1.7 + profileBio.length * 0.4) * lineHeight);
	let firstLineText = TextManager.profileNameText + ' ' + TextManager.profileName + '      ' + TextManager.profileAgeText + ' ';
	if(actor.hasEdict(EDICT_PUBLISH_PROFILE)) 
		firstLineText += TextManager.profileAge;
	else
		firstLineText += TextManager.profileRecordSecret;
	
	if(actor.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) { 
		if(actor._firstPussySexDate || actor._firstPussySexWasToyDate) firstLineText += '      ' + TextManager.virginityNo;
		else firstLineText += '      ' + TextManager.virginityYes;
	}

	this.drawTextEx(firstLineText, firstTextPaddingX, lineCount * lineHeight, lineWidth, 'left', true);
	lineCount += 0.8;
	
	this.contents.fontSize = threeSizesFontSize;
	let secondLineText = TextManager.profileThreeSizesText + ' ';
	if(actor.hasEdict(EDICT_PUBLISH_PROFILE)) 
		secondLineText += TextManager.profileThreeSizes;
	else
		secondLineText += TextManager.profileRecordSecret;
	
	this.drawTextEx(secondLineText, firstTextPaddingX, lineCount * lineHeight, screenWidth, 'left', true);
	lineCount += 0.6;
	
	this.contents.fontSize = bioFontSize;
	
	for(let i = 0; i < profileBio.length; ++i) {
		this.drawTextEx(profileBio[i], firstTextPaddingX, lineCount * lineHeight, screenWidth, 'left', true);
		lineCount += 0.4;
	}
	
	lineCount += 0.4;
	this.contents.fontSize = normalFontSize;
	
	for (let i = 0; i < 13; ++i) {	
		if(!actor.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) continue;
		if(!actor.hasEdict(EDICT_PUBLISH_OTHER_FIRST_TIMES) && i !== 1) continue;
		let rectX = firstColumnX;
		let textX = firstTextPaddingX;
		let firstColumnWidth = 140;
		let recordFirstTextX = 175;
		let recordSecondTextX = 230;
		if(TextManager.isJapanese) recordSecondTextX = 248;
		let recordFirstLineY = -5;
		let recordSecondLineY = 12;
		
		let recordName = '';
		let firstLine = '';
		let lastLine = '';
		let firstTextLine = '';
		let lastTextLine = '';
		let firstName = false;
		let firstDate = false;
		let firstLocationName = false;
		let lastName = false;
		let lastDate = false;
		let lastLocationName = false;
		
		if(i === 7 && ConfigManager.disableRimjobs) continue;
		
		if(i === 0) {
			recordName = TextManager.profileRecordKiss;
			firstDate = actor._firstKissDate;
			lastDate = actor._lastKissDate;
			if(firstDate) {
				firstName = actor._firstKissName;
				lastName = actor._lastKissName;
				firstTextLine = TextManager.profileRecordFirstKiss;
				lastTextLine = TextManager.profileRecordLastKiss;
				firstLocationName = $gameParty.getMapName(actor._firstKissMapID);
				lastLocationName = $gameParty.getMapName(actor._lastKissMapID);
				if(actor._firstKissWasPenis) {
					firstTextLine = TextManager.profileRecordFirstKissWasPenis;
				}
				else if(actor._firstKissWasAnus) {
					firstTextLine = TextManager.profileRecordFirstKissWasAnus;
				}
			}
		}
		else if(i === 1) {
			recordName = TextManager.profileRecordSex;
			firstDate = actor._firstPussySexDate;
			lastDate = actor._lastPussySexDate;
			if(actor._firstPussySexWasToy) {
				firstTextLine = TextManager.profileRecordFirstPussySexWasDildo;
				firstDate = actor._firstPussySexWasToyDate;
				firstName = actor._firstPussySexWasToyName;
				firstLocationName = $gameParty.getMapName(actor._firstPussySexWasToyMapID);
				if(lastDate) {
					lastName = actor._lastPussySexName;
					lastTextLine = TextManager.profileRecordLastSex;
					lastLocationName = $gameParty.getMapName(actor._lastPussySexMapID);
				}
			}
			else if(firstDate) {
				firstName = actor._firstPussySexName;
				lastName = actor._lastPussySexName;
				firstTextLine = TextManager.profileRecordFirstSex;
				lastTextLine = TextManager.profileRecordLastSex;
				firstLocationName = $gameParty.getMapName(actor._firstPussySexMapID);
				lastLocationName = $gameParty.getMapName(actor._lastPussySexMapID);
			}
		}
		else if(i === 2) {
			recordName = TextManager.profileRecordAnal;
			firstDate = actor._firstAnalSexDate;
			lastDate = actor._lastAnalSexDate;
			firstTextLine = TextManager.profileRecordFirstAnal;
			lastTextLine = TextManager.profileRecordLastAnal;
			firstLocationName = $gameParty.getMapName(actor._firstAnalSexMapID);
			lastLocationName = $gameParty.getMapName(actor._lastAnalSexMapID);
			if(firstDate) {
				firstName = actor._firstAnalSexName;
				lastName = actor._lastAnalSexName;
			}
		}
		else if(i === 3) {
			recordName = TextManager.profileRecordHandjob;
			firstDate = actor._firstHandjobDate;
			lastDate = actor._lastHandjobDate;
			firstTextLine = TextManager.profileRecordFirstHandjob;
			lastTextLine = TextManager.profileRecordLastHandjob;
			firstLocationName = $gameParty.getMapName(actor._firstHandjobMapID);
			lastLocationName = $gameParty.getMapName(actor._lastHandjobMapID);
			if(firstDate) {
				firstName = actor._firstHandjobName;
				lastName = actor._lastHandjobName;
			}
		}
		else if(i === 4) {
			recordName = TextManager.profileRecordBlowjob;
			firstDate = actor._firstBlowjobDate;
			lastDate = actor._lastBlowjobDate;
			firstTextLine = TextManager.profileRecordFirstBlowjob;
			lastTextLine = TextManager.profileRecordLastBlowjob;
			firstLocationName = $gameParty.getMapName(actor._firstBlowjobMapID);
			lastLocationName = $gameParty.getMapName(actor._lastBlowjobMapID);
			if(firstDate) {
				firstName = actor._firstBlowjobName;
				lastName = actor._lastBlowjobName;
			}
		}
		else if(i === 5) {
			recordName = TextManager.profileRecordTittyFuck;
			firstDate = actor._firstTittyFuckDate;
			lastDate = actor._lastTittyFuckDate;
			firstTextLine = TextManager.profileRecordFirstTittyFuck;
			lastTextLine = TextManager.profileRecordLastTittyFuck;
			firstLocationName = $gameParty.getMapName(actor._firstTittyFuckMapID);
			lastLocationName = $gameParty.getMapName(actor._lastTittyFuckMapID);
			if(firstDate) {
				firstName = actor._firstTittyFuckName;
				lastName = actor._lastTittyFuckName;
			}
		}
		else if(i === 6) {
			recordName = TextManager.profileRecordFootjob;
			firstDate = actor._firstFootjobDate;
			lastDate = actor._lastFootjobDate;
			firstTextLine = TextManager.profileRecordFirstFootjob;
			lastTextLine = TextManager.profileRecordLastFootjob;
			firstLocationName = $gameParty.getMapName(actor._firstFootjobMapID);
			lastLocationName = $gameParty.getMapName(actor._lastFootjobMapID);
			if(firstDate) {
				firstName = actor._firstFootjobName;
				lastName = actor._lastFootjobName;
			}
		}
		else if(i === 7 && !ConfigManager.disableRimjobs) {
			recordName = TextManager.profileRecordRimjob;
			firstDate = actor._firstRimjobDate;
			lastDate = actor._lastRimjobDate;
			firstTextLine = TextManager.profileRecordFirstRimjob;
			lastTextLine = TextManager.profileRecordLastRimjob;
			firstLocationName = $gameParty.getMapName(actor._firstRimjobMapID);
			lastLocationName = $gameParty.getMapName(actor._lastRimjobMapID);
			if(firstDate) {
				firstName = actor._firstRimjobName;
				lastName = actor._lastRimjobName;
			}
		}
		else if(i === 8) {
			recordName = TextManager.profileRecordBodyBukkake;
			firstDate = actor._firstBukkakeDate;
			lastDate = actor._lastBukkakeDate;
			firstTextLine = TextManager.profileRecordFirstBukkake;
			lastTextLine = TextManager.profileRecordLastBukkake;
			firstLocationName = $gameParty.getMapName(actor._firstBukkakeMapID);
			lastLocationName = $gameParty.getMapName(actor._lastBukkakeMapID);
			if(firstDate) {
				firstName = actor._firstBukkakeName;
				lastName = actor._lastBukkakeName;
			}
		}
		else if(i === 9) {
			recordName = TextManager.profileRecordFaceBukkake;
			firstDate = actor._firstFaceBukkakeDate;
			lastDate = actor._lastFaceBukkakeDate;
			firstTextLine = TextManager.profileRecordFirstFaceBukkake;
			lastTextLine = TextManager.profileRecordLastFaceBukkake;
			firstLocationName = $gameParty.getMapName(actor._firstFaceBukkakeMapID);
			lastLocationName = $gameParty.getMapName(actor._lastFaceBukkakeMapID);
			if(firstDate) {
				firstName = actor._firstFaceBukkakeName;
				lastName = actor._lastFaceBukkakeName;
			}
		}
		else if(i === 10) {
			recordName = TextManager.profileRecordSwallow;
			firstDate = actor._firstSwallowDate;
			lastDate = actor._lastSwallowDate;
			firstTextLine = TextManager.profileRecordFirstSwallow;
			lastTextLine = TextManager.profileRecordLastSwallow;
			firstLocationName = $gameParty.getMapName(actor._firstSwallowMapID);
			lastLocationName = $gameParty.getMapName(actor._lastSwallowMapID);
			if(firstDate) {
				firstName = actor._firstSwallowName;
				lastName = actor._lastSwallowName;
			}
		}
		else if(i === 11) {
			recordName = TextManager.profileRecordPussyCreampie;
			firstDate = actor._firstPussyCreampieDate;
			lastDate = actor._lastPussyCreampieDate;
			firstTextLine = TextManager.profileRecordFirstPussyCreampie;
			lastTextLine = TextManager.profileRecordLastPussyCreampie;
			firstLocationName = $gameParty.getMapName(actor._firstPussyCreampieMapID);
			lastLocationName = $gameParty.getMapName(actor._lastPussyCreampieMapID);
			if(firstDate) {
				firstName = actor._firstPussyCreampieName;
				lastName = actor._lastPussyCreampieName;
			}
		}
		else if(i === 12) {
			recordName = TextManager.profileRecordAnalCreampie;
			firstDate = actor._firstAnalCreampieDate;
			lastDate = actor._lastAnalCreampieDate;
			firstTextLine = TextManager.profileRecordFirstAnalCreampie;
			lastTextLine = TextManager.profileRecordLastAnalCreampie;
			firstLocationName = $gameParty.getMapName(actor._firstAnalCreampieMapID);
			lastLocationName = $gameParty.getMapName(actor._lastAnalCreampieMapID);
			if(firstDate) {
				firstName = actor._firstAnalCreampieName;
				lastName = actor._lastAnalCreampieName;
			}
		}
		
		this.drawDarkRect(rectX, lineCount * lineHeight, screenWidth, lineHeight);
		this.changeTextColor(this.systemColor());
		this.drawText(recordName, textX, lineCount * lineHeight, firstColumnWidth, 'left');
		this.changeTextColor(this.normalColor());
		
		if(firstDate) {
			/*
			if(TextManager.isEnglish) {
				let tempFirstLocationName = firstLocationName.slice(0,4);
				let tempLastLocationName = lastLocationName.slice(0,4);
				if(!tempFirstLocationName.includes("The "))
					firstLocationName = "the " + firstLocationName;
				if(!tempLastLocationName.includes("The "))
					lastLocationName = "the " + lastLocationName;
			}
			*/
			
			firstLine = firstTextLine.format(firstDate, firstName, firstLocationName);
			lastLine = lastTextLine.format(lastDate, lastName, lastLocationName);
		}
		else {
			firstLine = TextManager.profileRecordNever;
			lastLine = TextManager.profileRecordNever;
		}
		
		this.contents.fontSize = lineTextFontSize;
		if(TextManager.isEnglish) this.contents.fontSize = lineTextFontSize_EN;
		
		this.drawTextEx(TextManager.profileRecordFirst, recordFirstTextX, lineCount * lineHeight + recordFirstLineY, lineWidth, 'left', true);
		if(actor.hasEdict(EDICT_PUBLISH_LAST_TIMES))
			this.drawTextEx(TextManager.profileRecordLast, recordFirstTextX, lineCount * lineHeight + recordSecondLineY, lineWidth, 'left', true);
		
		this.drawTextEx(firstLine, recordSecondTextX, lineCount * lineHeight + recordFirstLineY, lineWidth, 'left', true);
		if(actor.hasEdict(EDICT_PUBLISH_LAST_TIMES))
			this.drawTextEx(lastLine, recordSecondTextX, lineCount * lineHeight + recordSecondLineY, lineWidth, 'left', true);

		this.contents.fontSize = normalFontSize;
		lineCount++;
	}
};

Window_StatusInfo.prototype.drawRecords = function() {
	if(!this._actor) return;
	let actor = this._actor;
	let firstColumnX = WINDOW_STATUS_FIRST_X;
	let firstTextPaddingX = firstColumnX + this.textPadding();
	let textPaddingY = -6;
	let lineHeight = this.lineHeight() * 0.45;
	let lineCount = 0;
	let screenWidth = this.width - this.standardPadding() * 2;
	let fontSize = 17;
	
	this.contents.fontSize = fontSize;
	
	let recordText = false;
	let drawRecordsUpTo = 1;
	
	if(actor.hasEdict(EDICT_PUBLISH_RECORDS_THREE)) drawRecordsUpTo = 28;
	else if(actor.hasEdict(EDICT_PUBLISH_RECORDS_TWO)) drawRecordsUpTo = 21;
	else if(actor.hasEdict(EDICT_PUBLISH_RECORDS_ONE)) drawRecordsUpTo = 10;
	
	for(let i = 0; i <= drawRecordsUpTo; ++i) {
		let rectY = lineCount * lineHeight;
		let textY = lineCount * lineHeight + textPaddingY;
		recordText = false;
	
		if(i === 0) {
			let fmt = TextManager.statusRecordDate;
			let value1 = Prison.date;
			recordText = fmt.format(Yanfly.Util.toGroup(value1));
		}
		else if(i === 1) {
			let fmt = TextManager.statusRecordFight;
			let value1 = actor._recordSubduedTotal;
			let value2 = actor._recordDefeatedTotal;
			if(value1 === 0) { }
			else if(value2 === 0 || !actor.hasEdict(EDICT_PUBLISH_RECORDS_ONE)) {
				fmt = TextManager.statusRecordFightSubduedOnly;
				recordText = fmt.format(Yanfly.Util.toGroup(value1));
			}
			else
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 2) {
			let fmt = TextManager.statusRecordStrip;
			let value1 = actor._recordClothesStrippedCount;
			let value2 = actor._recordPantiesStrippedCount;
			if(value1 && value2)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 3) {
			let fmt = TextManager.statusRecordKiss;
			let value1 = actor._recordKissedCount;
			let value2 = actor._recordKissedPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 4) {
			let fmt = TextManager.statusRecordFingersSucked;
			let value1 = actor._recordFingersSuckedCount;
			let value2 = actor._recordFingersSuckedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 5) {
			let fmt = TextManager.statusRecordBoobsPetted;
			let value1 = actor._recordBoobsPettedCount;
			let value2 = actor._recordBoobsPettedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 6) {
			let fmt = TextManager.statusRecordNipplesPetted;
			let value1 = actor._recordNipplesPettedCount;
			let value2 = actor._recordNipplesPettedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 7) {
			let fmt = TextManager.statusRecordClitPetted;
			let value1 = actor._recordClitPettedCount;
			let value2 = actor._recordClitPettedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 8) {
			let fmt = TextManager.statusRecordPussyPetted;
			let value1 = actor._recordPussyPettedCount;
			let value2 = actor._recordPussyPettedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 9) {
			let fmt = TextManager.statusRecordButtPetted;
			let value1 = actor._recordButtPettedCount;
			let value2 = actor._recordButtPettedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 10) {
			let fmt = TextManager.statusRecordAnalPetted;
			let value1 = actor._recordAnalPettedCount;
			let value2 = actor._recordAnalPettedPeople;
			if(value1 && value2 && value2 > 1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 11) {
			let fmt = TextManager.statusRecordMasturbate;
			let value1 = actor._recordMasturbatedTotalCount;
			let value2 = actor._recordSeeJerkOffCount;
			if(value1 && value2)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 12) {
			let fmt = TextManager.statusRecordSexPartners;
			let value1 = actor._recordSexualPartnersTotal;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1));
		}
		else if(i === 13) {
			let fmt = TextManager.statusRecordHandjob;
			let value1 = actor._recordHandjobCount;
			let value2 = actor._recordHandjobPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 14) {
			let fmt = TextManager.statusRecordBlowjob;
			let value1 = actor._recordBlowjobCount;
			let value2 = actor._recordBlowjobPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 15) {
			let fmt = TextManager.statusRecordTittyFuck;
			let value1 = actor._recordTittyFuckCount;
			let value2 = actor._recordTittyFuckPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 16) {
			let fmt = TextManager.statusRecordFootjob;
			let value1 = actor._recordFootjobCount;
			let value2 = actor._recordFootjobPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 17) {
			let fmt = TextManager.statusRecordRimjob;
			let value1 = actor._recordRimjobCount;
			let value2 = actor._recordRimjobPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 18) {
			let fmt = TextManager.statusRecordCunni;
			let value1 = actor._recordCunnilingusCount;
			let value2 = actor._recordCunnilingusPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 19) {
			let fmt = TextManager.statusRecordSpanked;
			let value1 = actor._recordButtSpankedCount;
			let value2 = actor._recordButtSpankedPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 20) {
			let fmt = TextManager.statusRecordPussySex;
			let value1 = actor._recordPussyFuckedCount;
			let value2 = actor._recordPussyFuckedPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 21) {
			let fmt = TextManager.statusRecordAnalSex;
			let value1 = actor._recordAnalFuckedCount;
			let value2 = actor._recordAnalFuckedPeople;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 22) {
			let fmt = TextManager.statusRecordGangbang;
			let value1 = actor._recordDoublePenetrationCount;
			let value2 = actor._recordTriplePenetrationCount;
			if(value1 && value2)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2));
		}
		else if(i === 23) {
			let fmt = TextManager.statusRecordOrgasm;
			let value1 = actor._recordOrgasmCount;
			let value2 = actor._recordOrgasmPresencePeople;
			let value3 = actor._recordOrgasmML;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2), Yanfly.Util.toGroup(value3.toFixed(1)));
		}
		else if(i === 24) {
			let fmt = TextManager.statusRecordBukkake;
			let value1 = actor._recordBukkakeTotalCount;
			let value2 = actor._recordBukkakePeople;
			let value3 = actor._recordBukkakeTotalML;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2), Yanfly.Util.toGroup(value3));
		}
		else if(i === 25) {
			let fmt = TextManager.statusRecordFaceBukkake;
			let value1 = actor._recordBukkakeFaceCount;
			let value2 = actor._recordFaceBukkakePeople;
			let value3 = actor._recordBukkakeFaceML;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2), Yanfly.Util.toGroup(value3));
		}
		else if(i === 26) {
			let fmt = TextManager.statusRecordSwallow;
			let value1 = actor._recordSwallowCount;
			let value2 = actor._recordSwallowPeople;
			let value3 = actor._recordSwallowML;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2), Yanfly.Util.toGroup(value3));
		}
		else if(i === 27) {
			let fmt = TextManager.statusRecordPussyCreampie;
			let value1 = actor._recordPussyCreampieCount;
			let value2 = actor._recordPussyCreampiePeople;
			let value3 = actor._recordPussyCreampieML;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2), Yanfly.Util.toGroup(value3));
		}
		else if(i === 28) {
			let fmt = TextManager.statusRecordAnalCreampie;
			let value1 = actor._recordAnalCreampieCount;
			let value2 = actor._recordAnalCreampiePeople;
			let value3 = actor._recordAnalCreampieML;
			if(value1)
				recordText = fmt.format(Yanfly.Util.toGroup(value1), Yanfly.Util.toGroup(value2), Yanfly.Util.toGroup(value3));
		}
	
		if(recordText) {
			this.drawDarkRect(firstColumnX, rectY, screenWidth, lineHeight);
			this.drawTextEx(recordText, firstTextPaddingX, textY, screenWidth, 'left', true);
			lineCount++;
		}
	}
};

////////
// Scene Status
/////////////

Scene_Status.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    //this.createHelpWindow();
	//this._helpWindow.height = this._helpWindow.fittingHeight(1);
	this.createCommandWindow();
	this.createInfoWindow();
    this.refreshActor();
};

Scene_Status.prototype.createCommandWindow = function() {
	this._commandWindow = new Window_StatusCommand();
	this._commandWindow.x = 0;
	//this._commandWindow.y = this._helpWindow.height;
	this._commandWindow.y = 0;
	this._commandWindow.width = WINDOW_MENU_COMMAND_WIDTH;
	
	this._commandWindow.setHandler('cancel', this.popScene.bind(this));
	this.addWindow(this._commandWindow);
};

Scene_Status.prototype.createInfoWindow = function() {
	//var wy = this._helpWindow.height + this._commandWindow.height;
	var wy = this._commandWindow.height;
	this._infoWindow = new Window_StatusInfo(wy, this._commandWindow);
	this._commandWindow.setInfoWindow(this._infoWindow);
	this._infoWindow.width = WINDOW_MENU_COMMAND_WIDTH;
	this.addWindow(this._infoWindow);
    this._infoWindow.setHandler('cancel', this.onInfoCancel.bind(this));
};

//center
Scene_Status.prototype.refreshActor = function() {
	var actor = this.actor();
    this._commandWindow.setActor(actor);
	this._infoWindow.setActor(actor);
	
	//var textWidth = this._helpWindow.textWidthExCheck(actor.name());
	//var padding = this._helpWindow.textPadding();
	//var x = (this._helpWindow.contentsWidth() + padding) / 2 - textWidth / 2;
	//this._helpWindow.clear();
	//this._helpWindow.drawText(actor.name(), x, 0, textWidth);
};

/////////
// Scene Battle
//////////


Remtairy.Menu.Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
	Remtairy.Menu.Scene_Battle_createAllWindows.call(this);
    this.createRemStatusWindow();
};

Scene_Battle.prototype.createRemStatusWindow = function() {
    this._statusCommandWindow = new Window_StatusCommand();
	this._statusCommandWindow.x = 0;
	this._statusCommandWindow.y = 0;
	this._statusCommandWindow.width = WINDOW_MENU_COMMAND_WIDTH_INBATTLE;
	//this._statusCommandWindow.setHandler('ok',     this.onRemStatusOk.bind(this));
	this._statusCommandWindow.setHandler('cancel', this.onRemStatusCancel.bind(this));
	this.addWindow(this._statusCommandWindow);
	
	let wy = this._statusCommandWindow.height;
	this._statusInfoWindow = new Window_StatusInfo(wy, this._statusCommandWindow);
	this._statusCommandWindow.setInfoWindow(this._statusInfoWindow);
	this._statusInfoWindow.width = WINDOW_MENU_COMMAND_WIDTH_INBATTLE;
	this.addWindow(this._statusInfoWindow);
    //this._statusInfoWindow.setHandler('cancel', this.onRemStatusCancel.bind(this));
	
	this._statusCommandWindow.hide();
	this._statusCommandWindow.deactivate();
    this._statusInfoWindow.hide();
	this._statusInfoWindow.deactivate();
};

Scene_Battle.prototype.commandStatus = function() {
	//this._actorCommandWindow.close();
	this._actorCommandWindow.hide();
	//this._actorCommandWindow.deactivate();
    let actor = BattleManager.actor();
    this._statusCommandWindow.setActor(actor);
	this._statusInfoWindow.setActor(actor);
	this._statusCommandWindow.show();
    this._statusCommandWindow.activate();
	this._statusInfoWindow.show();
    this._statusInfoWindow.activate();
	this._statusCommandWindow.select(0);
};

Scene_Battle.prototype.onRemStatusOk = function() {
    
};
Scene_Battle.prototype.onRemStatusCancel = function() {
	this._statusInfoWindow.hide();
	this._statusInfoWindow.deselect();
	this._statusInfoWindow.deactivate();
    this._statusCommandWindow.hide();
	this._statusCommandWindow.deselect();
	this._statusCommandWindow.deactivate();
	this._actorCommandWindow.open();
	this._actorCommandWindow.show();
    this._actorCommandWindow.activate();
};

Remtairy.Menu.Scene_Battle_endCommandSelection = Scene_Battle.prototype.endCommandSelection;
Scene_Battle.prototype.endCommandSelection = function() {
    Remtairy.Menu.Scene_Battle_endCommandSelection.call(this);
    this._statusCommandWindow.deselect();
	this._statusInfoWindow.deselect();
	this._logWindow.deselect();
};

Remtairy.Menu.Scene_Battle_isAnyInputWindowActive = Scene_Battle.prototype.isAnyInputWindowActive;
Scene_Battle.prototype.isAnyInputWindowActive = function() {
    return (Remtairy.Menu.Scene_Battle_isAnyInputWindowActive.apply(this, arguments) ||
            this._statusCommandWindow.active || this._statusInfoWindow.active);
};

/////////////////
/////////////////
// Right Click Menu
/////////////////
///////
// Scene Menu
/////////////////

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
	case 'learn skill':
		SceneManager.push(Scene_STS);
		break;
	case 'load':
		SceneManager.push(Scene_Load);
		break;
	}
	
};

Scene_Menu.prototype.commandLoad = function() {
    SceneManager.push(Scene_Load);
};

Remtairy.Menu.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
	this.createPrisonInfoWindow();
    this.createStatusWindow();
    this.repositionWindows();
};

Scene_Menu.prototype.createPrisonInfoWindow = function() {
    this._PrisonInfoWindow = new Window_PrisonInfo(0, 0);
	this._PrisonInfoWindow.y = this._commandWindow.height;
	this._PrisonInfoWindow.height = WINDOW_PRISONINFO_HEIGHT;
    this.addWindow(this._PrisonInfoWindow);
};

Scene_Menu.prototype.createStatusWindow = function() {
    //this._statusWindow = new Window_MenuStatus(0, this._goldWindow.y + this._goldWindow.height);
	this._statusWindow = new Window_MenuStatus(0, this._commandWindow.height);
	this._statusWindow.height = WINDOW_PRISONINFO_HEIGHT;
    this.addWindow(this._statusWindow);
};

Scene_Menu.prototype.repositionWindows = function() {
	this._commandWindow.x = 0;
	this._PrisonInfoWindow.x = 0;
	this._statusWindow.x = this._PrisonInfoWindow.width;
	this._statusWindow.width = WINDOW_MENU_COMMAND_WIDTH - this._PrisonInfoWindow.width;
};

////////////
// Background Image
////////////////


// Edicts
Scene_STS.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_EDICTS)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_EDICTS);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

// Equip
Scene_Equip.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_EQUIP)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_EQUIP);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

// Load
Scene_Load.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_LOAD)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_LOAD);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

// Passive
Scene_Skill.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_PASSIVE)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_PASSIVE);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

// Save
Scene_Save.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_SAVE)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_SAVE);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

// Settings
Scene_Options.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_SETTINGS)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_SETTINGS);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

// Status
Scene_Status.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
	if(WINDOW_BACKGROUND_STATUS)
		this._backgroundSprite.bitmap = ImageManager.loadSystem(WINDOW_BACKGROUND_STATUS);
	else
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

Window_SkillTree.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem('Window_Edicts');
};


/////////////
// Window
////////////

Window.prototype._refreshAllParts = function() {
	this._disableBackAndFrame = this._disableBackAndFrame || false;
	if(!this._disableBackAndFrame) {
		this._refreshBack();
		this._refreshFrame();
	}
	else {
		this._windowSpriteContainer.removeChild(this._windowBackSprite);
		this._windowSpriteContainer.removeChild(this._windowFrameSprite);
	}
    this._refreshCursor();
    this._refreshContents();
    this._refreshArrows();
    this._refreshPauseSign();
};

/////////
// Window Base
//////////////

Window_Base.prototype.drawMapName = function(x, y, width) {
    this.resetTextColor();
	var mapName = DataManager.getMapLocationDisplayNameRem();
	var value = '';
	if(TextManager.isJapanese) value = mapName[RemLanguageJP];
	else if(TextManager.isEnglish) value = mapName[RemLanguageEN];
	else if(TextManager.isSChinese) value = mapName[RemLanguageSCH];
	else if(TextManager.isTChinese) value = mapName[RemLanguageTCH];
	else if(TextManager.isKorean) value = mapName[RemLanguageKR];
    this.drawText(value, x, y, width, 'left');
};

//////
// Daily Reports

Window_Base.prototype.remDailyReportText = function(id) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let text = '';

	if(id === 1) { //Header
	   text = TextManager.RemDailyReportDayCount.format($gameParty.date);
	}
	else if(id === 2) { 
		if(!$gameSwitches.value(SWITCH_BOSS_CLEAR_BONUS_ID)) {
			//Anarchy
			let currentAnarchyLevel = 0;
			let decreasedAnarchyControl = 0;
			let anarchyDays = 0;
			let estimatedDaysBeforeLimit = 0;
			let anarchyGracePeriod = $gameParty.anarchyGracePeriod();
			let anarchyDecreaseDivider = $gameParty.anarchyDecreaseDivider();
			let showAnarchyNoLimitText = false;
			let showAnarchyBeforeLimitText = false;
			let showAnarchyPastLimitText = false;
		
			if($gameParty.prisonLevelOneIsAnarchy()) {
				currentAnarchyLevel = 1;
				anarchyDays = $gameParty._prisonLevelOne_anarchyDays;
				anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_ONE_DIVIDER;
				let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_ONE_MULTIPLER;
				
				if(Prison.easyMode()) {
					showAnarchyNoLimitText = true;
				}
				else if(anarchyDays + $gameParty._levelOneBonusGracePeriod > levelAnarchyGracePeriod) {
					showAnarchyPastLimitText = true;
					decreasedAnarchyControl = Math.ceil((anarchyDays + $gameParty._levelOneBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider);
				}
				else {
					showAnarchyBeforeLimitText = true;
					estimatedDaysBeforeLimit = levelAnarchyGracePeriod - anarchyDays + $gameParty._levelOneBonusGracePeriod;
				}
				
			}
			else if($gameParty.prisonLevelTwoIsAnarchy()) {
				currentAnarchyLevel = 2;
				anarchyDays = $gameParty._prisonLevelTwo_anarchyDays;
				anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_TWO_DIVIDER;
				let levelAnarchyGracePeriod = anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_TWO_MULTIPLER;
				
				if(Prison.easyMode()) {
					showAnarchyNoLimitText = true;
				}
				else if(anarchyDays + $gameParty._levelTwoBonusGracePeriod > levelAnarchyGracePeriod) {
					showAnarchyPastLimitText = true;
					decreasedAnarchyControl = Math.ceil((anarchyDays + $gameParty._levelTwoBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider);
				}
				else {
					showAnarchyBeforeLimitText = true;
					estimatedDaysBeforeLimit = levelAnarchyGracePeriod - anarchyDays + $gameParty._levelTwoBonusGracePeriod;
				}
			}
			else if($gameParty.prisonLevelThreeIsAnarchy()) {
				currentAnarchyLevel = 3;
				anarchyDays = $gameParty._prisonLevelThree_anarchyDays;
				
				if(Prison.easyMode()) {
					showAnarchyNoLimitText = true;
				}
				else {
					showAnarchyNoLimitText = true;
				}
			}
			
			anarchyDays++;
			if(showAnarchyNoLimitText) {
				text += TextManager.RemDailyReportAnarchyNoLimit.format(currentAnarchyLevel,anarchyDays);
				text += '\n';
			}
			else if(showAnarchyPastLimitText) {
				text += TextManager.RemDailyReportAnarchyPastLimit.format(currentAnarchyLevel,anarchyDays,decreasedAnarchyControl);
				text += '\n';
			}
			else if(showAnarchyBeforeLimitText) {
				estimatedDaysBeforeLimit += 1;
				if(estimatedDaysBeforeLimit === 1) {
					text += TextManager.RemDailyReportAnarchyLimitBefore_singular.format(currentAnarchyLevel,anarchyDays);
				}
				else {
					text += TextManager.RemDailyReportAnarchyLimitBefore_plural.format(currentAnarchyLevel,anarchyDays,estimatedDaysBeforeLimit);
				}
				text += '\n';
			}
		}
		
		//Rioting
		let riotLevel = 0;
		let riotDayCount = 0;
		let decreasedRiotControl = 0;
		
		//Level 1 Rioting
		riotLevel = 1;
		riotDayCount = 0;
		decreasedRiotControl = 0;
		
		if($gameParty.prisonLevelOneIsRioting()) {
			riotDayCount = $gameParty._prisonLevelOne_riotingDays;
			decreasedRiotControl = $gameParty.riotingOrderChange(riotLevel);
		}
	
		if(riotDayCount === 1) {
			text += TextManager.RemDailyReportRiot_New.format(riotLevel);
			text += '\n';
		}
		else if(riotDayCount > 1) {
			text += TextManager.RemDailyReportRiot_Old.format(riotLevel,riotDayCount,decreasedRiotControl);
			text += '\n';
		}
		
		//Level 2 Rioting
		riotLevel = 2;
		riotDayCount = 0;
		decreasedRiotControl = 0;
	
		if($gameParty.prisonLevelTwoIsRioting()) {
			riotDayCount = $gameParty._prisonLevelTwo_riotingDays;
			decreasedRiotControl = $gameParty.riotingOrderChange(riotLevel);
		}
	
		if(riotDayCount === 1) {
			text += TextManager.RemDailyReportRiot_New.format(riotLevel);
			text += '\n';
		}
		else if(riotDayCount > 1) {
			text += TextManager.RemDailyReportRiot_Old.format(riotLevel,riotDayCount,decreasedRiotControl);
			text += '\n';
		}
		
		//Level 3 Rioting
		riotLevel = 3;
		riotDayCount = 0;
		decreasedRiotControl = 0;
	
		if($gameParty.prisonLevelThreeIsRioting()) {
			riotDayCount = $gameParty._prisonLevelThree_riotingDays;
			decreasedRiotControl = $gameParty.riotingOrderChange(riotLevel);
		}
	
		if(riotDayCount === 1) {
			text += TextManager.RemDailyReportRiot_New.format(riotLevel);
			text += '\n';
		}
		else if(riotDayCount > 1) {
			text += TextManager.RemDailyReportRiot_Old.format(riotLevel,riotDayCount,decreasedRiotControl);
			text += '\n';
		}
		
		//Level 4 Rioting
		riotLevel = 4;
		riotDayCount = 0;
		decreasedRiotControl = 0;
	
		if($gameParty.prisonLevelFourIsRioting()) {
			riotDayCount = $gameParty._prisonLevelFour_riotingDays;
			decreasedRiotControl = $gameParty.riotingOrderChange(riotLevel);
		}
	
		if(riotDayCount === 1) {
			text += TextManager.RemDailyReportRiot_New.format(riotLevel);
			text += '\n';
		}
		else if(riotDayCount > 1) {
			text += TextManager.RemDailyReportRiot_Old.format(riotLevel,riotDayCount,decreasedRiotControl);
			text += '\n';
		}
		
		//Order Change
		let orderText = '';
		
		if(Prison.HighOrder()) {
			
		}
		else if(Prison.MedOrder()) {
			orderText += '\\C[17]';
		}
		else if(Prison.LowOrder()) {
			orderText += '\\C[2]';
		}
		else if(Prison.VeryLowOrder()) {
			orderText += '\\C[10]';
		}
		else if(Prison.NearNoOrder()) {
			orderText += '\\C[30]';
		}
		orderText += Prison.order + '\\C[0]';
		
		if(Prison.orderChange > 0) {
			text += TextManager.RemDailyReportOrderChange_Positive.format(orderText);
		}
		else if(Prison.orderChange < 0) {
			text += TextManager.RemDailyReportOrderChange_Negative.format(orderText);
		}
		else {
			text += TextManager.RemDailyReportOrderChange_Neutral.format(orderText);
		}
		text += '\n';
		
		//Funding
		let balance = $gameParty.calculateBalance(true);
		if(Prison.funding === 0) {
			text += TextManager.RemDailyReportBankruptcy.format($gameParty.titlesBankruptcyOrder(true));
			text += '\n';
		}
		else if(balance > 0) {
			text += TextManager.RemDailyReportFundingChange_Positive.format(Prison.funding);
			text += '\n';
		}
		else if(balance < 0) {
			text += TextManager.RemDailyReportFundingChange_Negative.format(Prison.funding);
			text += '\n';
		}
		
		//Edict Points
		let edictPoints = Math.max(actor.getStoredEdictPoints(), actor.stsSp());
		if(edictPoints === 1) {
			text += TextManager.RemDailyReportEdictPoints_Singular.format(edictPoints);
			text += '\n';
		}
		else if(edictPoints > 1) {
			text += TextManager.RemDailyReportEdictPoints_Plural.format(edictPoints);
			text += '\n';
		}
		
		//Bar Rep
		if(Karryn.hasEdict(EDICT_BAR_WAITRESS_OUTFIT_I) && $gameParty._barReputation > $gameParty.getMinimumBarReputation()) {
			if($gameParty._daysWithoutDoingWaitressBar === WAITRESS_REP_DECAY_DAYS - 1) {
				text += TextManager.RemDailyReportBarRep_AlmostDecay;
				text += '\n';
			}
			else if($gameParty._todayBarRepDecayed) {
				text += TextManager.RemDailyReportBarRep_Decayed;
				text += '\n';
			}
		}
		
		//Visitor Center Rep
		if(Karryn.hasEdict(EDICT_RECEPTIONIST_OUTFIT_I) && $gameParty._receptionistSatisfaction > $gameParty.getMinimumReceptionistSatisfaction()) {
			if($gameParty._daysWithoutDoingVisitorReceptionist === RECEPTIONIST_REP_DECAY_DAYS - 1) {
				text += TextManager.RemDailyReportVisitorRep_AlmostDecay;
				text += '\n';
			}
			else if($gameParty._todayVisitorRepDecayed) {
				text += TextManager.RemDailyReportVisitorRep_Decayed;
				text += '\n';
			}
		}
		
		//Glory Hole Rep
		if(Karryn.hasEdict(EDICT_REFIT_MIDDLE_STALL) && $gameParty._gloryReputation > $gameParty.getMinimumGloryHoleReputation()) {
			if($gameParty._daysWithoutDoingGloryHole === GLORY_HOLE_REP_DECAY_DAYS - 1) {
				text += TextManager.RemDailyReportToiletRep_AlmostDecay;
				text += '\n';
			}
			else if($gameParty._todayGloryHoleRepDecayed) {
				text += TextManager.RemDailyReportToiletRep_Decayed;
				text += '\n';
			}
		}
		
		
	}
	
	return text;
};

/////////
// Window Command
////////////////

//From Yanfly inbattlestatus
Window_Command.prototype.addCommandAt = function(index, name, symbol, en, ext) {
	  if (en === undefined) enabled = true;
	  if (ext === undefined) ext = null;
	  var obj = { name: name, symbol: symbol, enabled: en, ext: ext};
	  this._list.splice(index, 0, obj);
};

/////////
// Window PrisonInfo
//////////////////

function Window_PrisonInfo() {
    this.initialize.apply(this, arguments);
}

Window_PrisonInfo.prototype = Object.create(Window_Base.prototype);
Window_PrisonInfo.prototype.constructor = Window_PrisonInfo;

Window_PrisonInfo.prototype.initialize = function(x, y) {
    var width = WINDOW_PRISONINFO_WIDTH;
    var height = WINDOW_PRISONINFO_HEIGHT;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
	//this.setBackgroundType(255);
    this.refresh();
};

Window_PrisonInfo.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

Window_PrisonInfo.prototype.refresh = function() {
    let x = this.textPadding();
    let width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
	let line = 0;
	let lh = this.lineHeight();
	
	this.resetTextColor();
	
	//Ledger
	this.makeFontBigger();
	let ledgerText = TextManager.ledger;
	this.drawText(ledgerText, x, line * lh, width, 'center');
	this.makeFontSmaller();
	this.resetTextColor();
	line++;
	
	this.makeFontSmaller();
	this.makeFontSmaller();
	line -= 0.2;
	
	//General Income
	let incomeText = TextManager.income;
	let incomeValue = '+' + Prison.income.toLocaleString();
	this.drawText(incomeText, x, line * lh, width);
	this.drawText(incomeValue, x, line * lh, width, 'right');
	line += 0.6;
	
	//Bar Income
	if(Prison.getBarIncome() > 0) {
		let barIncomeText = TextManager.barIncome;
		let barIncomeValue = '+' + Prison.getBarIncome().toLocaleString();
		this.drawText(barIncomeText, x, line * lh, width);
		this.drawText(barIncomeValue, x, line * lh, width, 'right');
		line += 0.6;
	}
	
	//Bar Income
	if(Prison.getStoreIncome() > 0) {
		let storeIncomeText = TextManager.storeIncome;
		let storeIncomeValue = '+' + Prison.getStoreIncome().toLocaleString();
		this.drawText(storeIncomeText, x, line * lh, width);
		this.drawText(storeIncomeValue, x, line * lh, width, 'right');
		line += 0.6;
	}
	
	//Estimated Subsidies
	let subsidiesText = TextManager.estimatedSubsidies;
	let subsidiesValue = '+' + Prison.calculateSubsidies(true).toLocaleString();
	this.drawText(subsidiesText, x, line * lh, width * 0.6);
	this.drawText(subsidiesValue, x, line * lh, width, 'right');
	line += 0.6;
	
	if(Prison.getNerdBlackmail() <= 0)
		this.drawText('__________________________', x, (line + 0.1) * lh, width);
	
	//Expense
	let expenseText = TextManager.expense;
	let expenseValue = '-' + Prison.expense.toLocaleString();
	this.drawText(expenseText, x, line * lh, width);
	this.drawText(expenseValue, x, line * lh, width, 'right');
	line += 0.6;
	
	//Nerd Blackmail
	if(Prison.getNerdBlackmail() > 0) {
		this.drawText('__________________________', x, (line + 0.1) * lh, width);
		
		let nerdBlackmailText = TextManager.nerdBlackmail;
		let nerdBlackmailValue = '-' + Prison.getNerdBlackmail().toLocaleString();
		this.drawText(nerdBlackmailText, x, line * lh, width - 100);
		this.drawText(nerdBlackmailValue, x, line * lh, width, 'right');
		line += 0.6;
	}
	
	this.makeFontBigger();
	this.makeFontBigger();
	
	//Estimated Balance
	line += 0.2;
	let balanceValue = Prison.calculateBalance(true);
	let profitText = TextManager.estimatedProfit;
	let profitValue = balanceValue.toLocaleString() + 'G';
	if(balanceValue < 0)
		profitText = TextManager.estimatedLoss;
	this.drawText(profitText, x, line * lh, width * 0.4);
	if(balanceValue > 0) {
		this.changeTextColor(this.textColor(29));
		profitValue = '+' + profitValue;
	}
	this.drawText(profitValue, x, line * lh, width, 'right');
	line++;
	this.resetTextColor();
	
	/*
	//Corruption
	line++;
	let corruptionText = TextManager.corruption;
	let corruptionValue = Prison.corruption;
	
	this.makeFontBigger();
	this.drawText(corruptionText, x, line * lh, width, 'center');
	this.makeFontSmaller();
	this.resetTextColor();
	line++;
	this.drawText(corruptionValue, x, line * lh, width, 'center');
	line++;
	*/
	
	//Funding
	line++;
	let fundingText = TextManager.funding;
	let fundingValue = Prison.funding.toLocaleString() + 'G';
	
	this.makeFontBigger();
	this.drawText(fundingText, x, line * lh, width, 'center');
	this.makeFontSmaller();
	this.resetTextColor();
	line++;
	
	this.drawText(fundingValue, x, line * lh, width, 'center');
	line++;
	
};

///////
// Window Menu Status
///////////////////////

Remtairy.Menu.Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
Window_MenuStatus.prototype.initialize = function(wx, wy) {
    this._initY = wy;
    Remtairy.Menu.Window_MenuStatus_initialize.call(this, wx, wy);
};

Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

Window_MenuStatus.prototype.maxCols = function() {
    return 1;
};

Window_MenuStatus.prototype.windowHeight = function() {
    return Graphics.boxHeight - this._initY;
};

Window_MenuStatus.prototype.numVisibleRows = function() {
    return 1;
};

Window_MenuStatus.prototype.itemWidth = function() {
    return Math.floor(this.width / $gameParty.maxBattleMembers());
};

Window_MenuStatus.prototype.drawItem = function(index) {
    //this.drawItemBackground(index);
    //this.drawItemImage(index);
    //this.drawItemStatus(index);
	this.drawKarrynStatus();
};

Window_MenuStatus.prototype.drawKarrynStatus = function() {
    let x = this.textPadding();
    let width = this.width - this.textPadding() * 4;
	this.contents.clear();
	let line = 0;
	let lh = this.lineHeight();
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let centerOffsetX = -75;
	
	let nameFontSize = 32;
	let titleFontSize = 20;
	let statsFontSize = 26;
	let statusFontSize = 16;
	
	this.resetTextColor();
	
	//Karryn
	this.contents.fontSize = nameFontSize;
	let nameText = actor.name();
	this.drawText(nameText, x, line * lh, width + centerOffsetX, 'center');
	this.resetTextColor();
	line+= 0.5;
	
	//Title
	this.contents.fontSize = titleFontSize;
	let titleText = actor.getTitleText();
	this.drawText(titleText, x, line * lh, width + centerOffsetX, 'center');
	this.resetTextColor();
	line++;
	
	////////
	//Stats
	for(let i = 0; i < 12; ++i) {
		let valueName = '';
		let valueNum = '';
		let firstX = x + 45;
		let halfWidth = width / 2;
		let lineWidth = halfWidth - 120;
		let secondX = halfWidth + this.textPadding();

		if(i === 0) {
			valueName = TextManager.wardenLevel;
			valueNum = actor.level;
		}
		else if(i === 1) {
			if(DEBUG_MODE && actor.slutLvl > 0) {
				valueName = TextManager.slutLevel;
				valueNum = actor.slutLvl;
			}
		}
		else if(i === 2) {
			valueName = TextManager.basic(2);
			valueNum = actor.param(PARAM_MAXSTAMINA_ID);
		}
		else if(i === 3) {
			valueName = TextManager.basic(4);
			valueNum = actor.param(PARAM_MAXENERGY_ID);
		}
		else if(i === 4) {
			valueName = TextManager.param(PARAM_STRENGTH_ID);
			valueNum = actor.param(PARAM_STRENGTH_ID);
		}
		else if(i === 5) {
			valueName = TextManager.param(PARAM_DEXTERITY_ID);
			valueNum = actor.param(PARAM_DEXTERITY_ID);
		}
		else if(i === 6) {
			valueName = TextManager.param(PARAM_AGILITY_ID);
			valueNum = actor.param(PARAM_AGILITY_ID);
		}
		else if(i === 7) {
			valueName = TextManager.param(PARAM_ENDURANCE_ID);
			valueNum = actor.param(PARAM_ENDURANCE_ID);
		}
		else if(i === 8) {
			valueName = TextManager.param(PARAM_MIND_ID);
			valueNum = actor.param(PARAM_MIND_ID);
		}
		else if(i === 9) {
			valueName = TextManager.param(PARAM_CHARM_ID);
			valueNum = actor.param(PARAM_CHARM_ID);
		}
		else if(i === 10) {
			valueName = TextManager.corruption;
			valueNum = Prison.corruption;
		}
		else if(i === 11) {
			if(actor.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) {
				valueName = TextManager.cockiness;
				valueNum = actor.cockiness + '%';
			}
		}
		
		let valueX = firstX;
		if(i % 2 === 1) valueX = secondX
		
		this.contents.fontSize = statsFontSize;
		this.drawText(valueName, valueX, line * lh, lineWidth, 'left');
		this.drawText(valueNum.toLocaleString(), valueX, line * lh, lineWidth, 'right');

		if(i % 2 === 1) line += 0.6;
	}
	
	////////
	//Status
	line += 0.4;
	this.contents.fontSize = statusFontSize;
	
	let statusLineChange = 0.4;
	
	//Arousal
	if(actor.isAroused()) {
		let arousedText = '';
		if(actor.reachedOrgasmPoint()) arousedText = TextManager.RCMenuArousedLevelTwoText;
		else arousedText = TextManager.RCMenuArousedLevelOneText;
		this.drawTextEx(arousedText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Sexually Frustrated
	if(actor.isOnaniFrustrated()) {
		let frustratedText = '';
		if(actor._onaniFrustration >= 4) frustratedText = TextManager.RCMenuFrustratedLevelTwoText;
		else frustratedText = TextManager.RCMenuFrustratedLevelOneText;
		this.drawTextEx(frustratedText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	
	//Panties
	if(!actor.isWearingPanties()) {
		let lostPantiesText = TextManager.RCMenuLostPantiesText;
		this.drawTextEx(lostPantiesText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Fatigue
	let fatigueLevel = actor.getFatigueLevel();
	if(fatigueLevel > 0) {
		let fatigueText = '';
		if(fatigueLevel === 1) fatigueText = TextManager.RCMenuFatigueLevelOneText;
		else if(fatigueLevel === 2) fatigueText = TextManager.RCMenuFatigueLevelTwoText;
		else if(fatigueLevel === 3) fatigueText = TextManager.RCMenuFatigueLevelThreeText;
		else if(fatigueLevel === 4) fatigueText = TextManager.RCMenuFatigueLevelFourText;
		else if(fatigueLevel === 5) fatigueText = TextManager.RCMenuFatigueLevelFiveText;
		
		this.drawTextEx(fatigueText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Sleep Quality
	let sleepQuality = actor.getSleepQuality();
	let sleepQualityText = '';

	if(sleepQuality <= -2) sleepQualityText = TextManager.RCMenuSleepQualityNegTwoText;
	else if(sleepQuality === -1) sleepQualityText = TextManager.RCMenuSleepQualityNegOneText;
	else if(sleepQuality === 0) sleepQualityText = TextManager.RCMenuSleepQualityZeroText;
	else if(sleepQuality === 1) sleepQualityText = TextManager.RCMenuSleepQualityOneText;
	else if(sleepQuality === 2) sleepQualityText = TextManager.RCMenuSleepQualityTwoText;
	else if(sleepQuality >= 3) sleepQualityText = TextManager.RCMenuSleepQualityThreeText;
	
	this.drawTextEx(sleepQualityText, x, line * lh, width, 'left', true);
	line += statusLineChange;
	
	//Panties
	if(actor._halberdIsDefiled) {
		let defiledHalberdText = TextManager.RCMenuDefiledHalberdText;
		this.drawTextEx(defiledHalberdText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Metal Exp
	if(actor._todaySubduedMetalEnemiesCount > 0) {
		let metalExpText = '';
		
		if(actor._todaySubduedMetalEnemiesCount > 1) {
			metalExpText = TextManager.RCMenuMetalPluralText.format(actor.metalExpRateBonus(), actor._todaySubduedMetalEnemiesCount);
		}
		else {
			metalExpText = TextManager.RCMenuMetalSingleText.format(actor.metalExpRateBonus());
		}
		this.drawTextEx(metalExpText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Artisan Meal
	if(actor.hadAnArtisanMeal()) {
		let mealText = TextManager.artisanMeal(actor._artisanMeal);
		this.drawTextEx(mealText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Store Item
	if(actor.isUsingAnyStoreItem()) {
		let storeItemText = TextManager.storeItem(actor._usingStoreItem);
		this.drawTextEx(storeItemText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
	//Gifts
	let numOfGifts = actor.numOfGifts();
	let giftsText = '';
	
	if(numOfGifts > 0) {
		if(numOfGifts === 1)
			giftsText = TextManager.RCMenuGiftsSingleText;
		else
			giftsText = TextManager.RCMenuGiftsPluralText;
		
		giftsText += actor.allGiftsText();
		
		this.drawTextEx(giftsText, x, line * lh, width, 'left', true);
		line += statusLineChange;
	}
	
};

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
	
	//var tachie = new TachieMenuSprite();
	//tachie.setActorRemId(actor.actorId(), rect);
	//this.addChild(tachie);
	
	
    this.changePaintOpacity(true);
};

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    
	//var xpad = Yanfly.Param.WindowPadding;
    //var x = rect.x + xpad;
	//var y = rect.y;
    //var width = rect.width - x - this.textPadding();
	//var width = rect.width - this.textPadding();
	
    //this.drawActorSimpleStatus(actor, index, x, y, width);
};

Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, index, x, y, width) {
    //var lineHeight = this.lineHeight();
    //this.drawActorName(actor, x, y + REM_MENU_STATUS_NAME_Y);
    //this.drawActorSp(actor, x, y + REM_MENU_STATUS_SP_Y);
	//this.drawActorIcons(actor, x, y + lineHeight * 5, width);
};

Window_MenuStatus.prototype.drawActorName = function(actor, x, y) {
	var id = actor.actorId();
	var name = false;
	
	if(name) {
		name.x = x;
		name.y = y;	 
		this.addChild(name);
	}
};

Window_MenuStatus.prototype.drawActorIcons = function(actor, x, y, width) {
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
    }
};

Window_MenuStatus.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    var dw1 = this.textWidth(TextManager.levelA);
    this.drawText(TextManager.levelA, x, y, dw1);
    this.resetTextColor();
    var level = Yanfly.Util.toGroup(actor.level);
    var dw2 = this.textWidth(Yanfly.Util.toGroup(actor.maxLevel()));
    this.drawText(level, x + dw1, y, dw2, 'right');
};

Window_MenuStatus.prototype.drawActorSp = function(actor, x, y, width) {				   
	//if($gameActors.actor(1).sexLevel === 0) return;
	var text = new Sprite(ImageManager.loadSystemRem("SP"));
	text.x = x;
	text.y = y;	 
	this.addChild(text);
		
	var number = new Sprite_RemNumber("SP_Numbers");
	number.x = x + REM_MENU_STATUS_SP_X_OFFSET;
	number.y = y + REM_MENU_STATUS_SP_Y_OFFSET;
	number.setNumber(actor.mp);
	this.addChild(number);
};

