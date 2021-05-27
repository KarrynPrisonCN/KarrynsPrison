var Remtairy = Remtairy || {};
Remtairy.Willpower = Remtairy.Willpower || {};

//=============================================================================
 /*:
 * @plugindesc Willpower
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const WILLPOWER_BASE_WP = 38;
const ITEM_WILL_COST_ID = 1; //Item Id of the Willpower item
const WILLPOWER_PER_MIND = 0.8;
const WILLPOWER_PER_MIND_PLVL = 0.7;

const WILLPOWER_SKILL_START = 81;
const WILLPOWER_SKILL_END = 109;

/////////
// Window SkillList
////////////////////

Window_SkillList.prototype.drawSkillItemCost = function(skill, wx, wy, dw) {
    if (Yanfly.Param.SCICostStyle === 0) return dw;
    let array = this._actor.skillItemCost(skill);
    let max = array.length;
    if (max <= 0) return dw;
    this.contents.fontSize = Yanfly.Param.SCIFontSize;
    dw -= 2;
    for (let i = 0; i < max; ++i) {
      let arr = array[max - i - 1];
      let item = arr[0];
      let cost = arr[1];
      dw = this.drawSoloItemCost(item, cost, wx, wy, dw, skill);
    }
    let returnWidth = dw - Yanfly.Param.SCCCostPadding;
    this.resetFontSettings();
    return returnWidth;
};

//willpower cost
Window_SkillList.prototype.drawSoloItemCost = function(item, cost, wx, wy, dw, skill) {
    let x = wx + dw - Window_Base._iconWidth;
    this.drawIcon(item.iconIndex, x + 2, wy + REM_Y_ICON_PADDING);
	
	if(item.id === ITEM_WILL_COST_ID) {
		cost = this._actor.calculateWillSkillCost(cost, skill);
	}
	else if(item.id === ITEM_SECOND_COST_ID) {
		if(this._actor.isDeadDrunk) cost += 5;
		else if(this._actor.isDrunk) cost += 3;
		else if(this._actor.isTipsy) cost += 1;
		
		if(this._actor.isAroused()) cost += 1;
		if(this._actor.isWet) cost += 1;
		if(this._actor.isHorny) cost += 1;
		
		if(this._actor.hasThisTitle(TITLE_ID_EXPERIENCED_WAITRESS)) cost -= 1;
		if(this._actor.isUsingThisTitle(TITLE_ID_EXPERIENCED_WAITRESS)) cost -= 2;
	}
	
    let amt1 = Yanfly.Util.toGroup(cost);
    let amt2 = Yanfly.Util.toGroup(this._actor.numItems(item));
    let fmt = Yanfly.Param.SCIAmountFmt;
    let text = fmt.format(amt1, amt2);
    if (Yanfly.Param.SCICostStyle === 1) {
      let iconWidth = Window_Base._iconWidth + 4;
      this.drawText(text, wx, wy + Yanfly.Param.SCIYBuffer, dw, 'right');
      dw -= Math.max(iconWidth, this.textWidth(text));
    } else if (Yanfly.Param.SCICostStyle === 2) {
		if(item.id === ITEM_WILL_COST_ID) {
			//text += ' ' + item.name;
			if(TextManager.isEnglish && item.hasRemNameEN) text += ' ' + item.remNameEN;
			else if(TextManager.isJapanese && item.hasRemNameJP) text += ' ' + item.remNameJP;
			else if(TextManager.isSChinese && item.hasRemNameSCH) text += ' ' + item.remNameSCH;
			else if(TextManager.isTChinese && item.hasRemNameTCH) text += ' ' + item.remNameTCH;
			else if(TextManager.isKorean && item.hasRemNameKR) text += ' ' + item.remNameKR;
			else text += ' ' + item.name;
		}
		else if(item.id === ITEM_SECOND_COST_ID) {
			//text += ' ' + item.name;
			if(TextManager.isEnglish && item.hasRemNameEN) text += '' + item.remNameEN;
			else if(TextManager.isJapanese && item.hasRemNameJP) text += '' + item.remNameJP;
			else if(TextManager.isSChinese && item.hasRemNameSCH) text += '' + item.remNameSCH;
			else if(TextManager.isTChinese && item.hasRemNameTCH) text += '' + item.remNameTCH;
			else if(TextManager.isKorean && item.hasRemNameKR) text += '' + item.remNameKR;
			else text += ' ' + item.name;
		}
		else {
			let iconWidth = Window_Base._iconWidth;
			dw -= iconWidth;
		}
		if(item.id === ITEM_WILL_COST_ID) this.changeTextColor(this.textColor(24));
		else if(item.id === ITEM_SECOND_COST_ID) this.changeTextColor(this.textColor(6));
		this.drawText(text, wx, wy + Yanfly.Param.SCIYBuffer, dw, 'right');
		this.changeTextColor(this.normalColor());
		dw -= this.textWidth(text);
    }
    return dw;
};

Window_SkillList.prototype.costWidth = function() {
    return WINDOW_SKILLLIST_SKILLCOST_WIDTH;
};

////////////
//////////////
// Game Actor
//////////////
////////////

Game_Actor.prototype.resetWillpowerCosts = function() {
	this._tempHealingThoughtsExtraCooldown = 0;
	this._tempMindOverMatterExtraCooldown = 0;
	this._denyingExternalEjaculations = false;
	this._denyingInternalEjaculations = false;
};

/////////
// Phases
/////////

//Mental Phase
Game_Actor.prototype.enterMentalPhase = function() {
	if(this.isMentalPhaseDisabled()) return;
	this.clearWillSkillsUsedCount();
	this._mentalPhase = true;
};

//Enter Action Phase
//Called also by Skill 2
Game_Actor.prototype.enterActionPhase = function() {
	this._mentalPhase = false;
	
	if(this.energy > 0 || this.isInCombatPose()) {
		this.checkOnaniInBattleDesire();
	}
	
	if(!this.isDontGainFatiguePerTurnPose()) {
		if(this.isInCombatPose()) {
			$gameParty.increaseFatigueGain(PRISON_FATIGUE_PER_TURN_COMBAT);
		}
		else if($gameParty.isInGloryBattle) {
			this.gloryBattle_fatigueGainPerTurn();
		}
		else {
			$gameParty.increaseFatigueGain(PRISON_FATIGUE_PER_TURN_OTHER);
		}
	}
	
	
	if(this.isStateAffected(STATE_KARRYN_RESIST_ORGASM_ID) && 
	this._stateTurns[STATE_KARRYN_RESIST_ORGASM_ID] === 1) {
		 this.removeState(STATE_KARRYN_RESIST_ORGASM_ID);
	}
};

Game_Actor.prototype.disableMentalPhase = function() {
	this._disableMentalPhase = true;
	this.enterActionPhase();
};
Game_Actor.prototype.enableMentalPhase = function() {
	this._disableMentalPhase = false;
};
Game_Actor.prototype.isMentalPhaseDisabled = function() {
	return this._disableMentalPhase;
};

Game_Actor.prototype.lastMentalCommandSymbol = function() {
    return this._lastMentalCommandSymbol;
};

Game_Actor.prototype.setLastMentalCommandSymbol = function(symbol) {
    this._lastMentalCommandSymbol = symbol;
};

Game_Actor.prototype.lastBattleSkill = function() {
	if(this.actionPhase) 
		return this._lastBattleSkill.object();
	else if(this.mentalPhase) 
		return this._lastMentalBattleSkill.object();
};

Game_Actor.prototype.setLastBattleSkill = function(skill) {
	if(this.actionPhase) 
		this._lastBattleSkill.setObject(skill);
	else if(this.mentalPhase) 
		this._lastMentalBattleSkill.setObject(skill);
};

Game_Actor.prototype.onTurnEnd = function() {
    this.clearResult();
	//this.resetSpriteBattlerPos();
    this.regenerateAll();
	
	if(!$gameScreen.isMapMode()) {
		this.checkForOrgasm();
		this.checkDisarmStateAtTurnEnd();
		this.checkJustOrgasmStateAtTurnEnd();
		this.emoteMasterManager();
		this.enterMentalPhase();
	}
	
    this.removeStatesAuto(2);
	
	if(!$gameScreen.isMapMode()) {
		$gameParty.onTurnEndSpecial();
	}
};

//New Wave
Game_Actor.prototype.onStartOfConBat = function() {
	//this.resetSpriteBattlerPos();
	this._dontResetSexPose = false;
    this.regenerateAll();
	this.checkForOrgasm();
	this.resetTauntAndConfidentOnNewWave();
	this.removeStatesOnNewWave();
	this.commitUncommittedCharmExp();
	this.addState(STATE_KARRYN_FIRST_TURN_ID);
	this.enterMentalPhase();
};

//////////
// Willpower
////////////

Game_Actor.prototype.maxWill = function() {
	let value = WILLPOWER_BASE_WP * this.paramRate(PARAM_MIND_ID);
	value += this.mind * WILLPOWER_PER_MIND;
	value += this._paramLvl[PARAM_MIND_ID] * WILLPOWER_PER_MIND_PLVL * this.paramRate(PARAM_MIND_ID);
	
	if(this._denyingInternalEjaculations) {
		if(value < 10) {
			this._denyingInternalEjaculations = false;
			this.cacheDesireTooltips();
		}
		else {
			value -= 10;
		}
	}
	if(this._denyingExternalEjaculations) {
		if(value < 10) {
			this._denyingExternalEjaculations = false;
			this.cacheDesireTooltips();
		}
		else {
			value -= 10;
		}
	}

	return Math.max(0, Math.round(value));
};

Game_Actor.prototype.willRegenMultipler = function() {
	var percentToOrgasm = this.currentPercentOfOrgasm(true) / 100;
	var multipler = 1 - (percentToOrgasm * 0.5);
	return multipler;
};

Game_Actor.prototype.clearWillSkillsUsedCount = function() {
    this._willSkillsUsed = 0;
};

Game_BattlerBase.prototype.paySkillItemCost = function(skill) {
    var array = this.skillItemCost(skill);
    var max = array.length;
    for (var i = 0; i < max; ++i) {
      var item = array[i][0];
      var cost = array[i][1];
      this.payIndividualSkillItemCost(item, cost, skill);
    }
};

Game_Actor.prototype.canPaySkillItemCost = function(skill) {
    let array = this.skillItemCost(skill);
    let max = array.length;
    for (let i = 0; i < max; ++i) {
		let item = array[i][0];
		let cost = array[i][1];
		if(item.id === ITEM_WILL_COST_ID) {
			return (this.will >= this.calculateWillSkillCost(cost, skill));
		}
		else if(item.id === ITEM_SECOND_COST_ID) {
			return true;
		}
    }
    return Game_BattlerBase.prototype.canPaySkillItemCost.call(this, skill);
};

Game_Actor.prototype.payIndividualSkillItemCost = function(item, cost, skill) {
    if(item.id === ITEM_WILL_COST_ID) {
		this.gainWill(-this.calculateWillSkillCost(cost, skill));
		this._willSkillsUsed++;
	}
	else if(item.id === ITEM_SECOND_COST_ID) {
		this.advanceTimeBySeconds(cost);
	}
	else $gameParty.loseItem(item, cost, false);
};

Game_Actor.prototype.calculateWillSkillCost = function(baseCost, skill) {
	let count = this._willSkillsUsed;
	let cost = baseCost;
	let skillId = skill.id;

	if(skillId === SKILL_RESTORE_MIND_ID) {
		return Math.round(cost * this.wsc);
	}

	if(count === 0 && !$gameParty._showTopRightTimeNumberFlag) {
		cost = Math.min(cost, this.will);
		cost = Math.max(1,cost);
	}
	else {
		cost += 5 * count;
	}
	
	if(this.isHorny && this.hasPassive(PASSIVE_HORNY_COUNT_TWO_ID)) {
		if(skillId === SKILL_SUPPRESS_MOUTH_DESIRE_ID || skillId === SKILL_SUPPRESS_BOOBS_DESIRE_ID ||
		skillId === SKILL_SUPPRESS_PUSSY_DESIRE_ID || skillId === SKILL_SUPPRESS_BUTT_DESIRE_ID ||
		skillId === SKILL_SUPPRESS_COCK_DESIRE_ID) 
			cost += 10;
	}
	
	return Math.round(cost * this.wsc);
};

/////////
// Param 
////////////

Game_Actor.prototype.willpowerParamRate = function(paramId) {
	let wpParamRate = 1;
	if(paramId === PARAM_CHARM_ID && this.isStateAffected(STATE_REALITY_MARBLE_ID)) 
		wpParamRate += this.willpowerRealityMarbleEffect();

    return wpParamRate;
};


 
Game_Actor.prototype.willpowerXParamPlus = function(id) {
	let wpXParamPlus = 0;
	
	if(id === XPARAM_CNT_ID && this.isStateAffected(STATE_FOCUS_ID))
		wpXParamPlus += this.willpowerFocusXParamEffect();
	if(this.isStateAffected(STATE_EYE_OF_THE_MIND_ID) && (id === XPARAM_HIT_ID || id === XPARAM_EVA_ID || id === XPARAM_CRIT_ID)) 
		wpXParamPlus += this.willpowerEyeOfTheMindXParamEffect();
	return wpXParamPlus;
};



Game_Actor.prototype.willpowerSParamRate = function(id) {
	let wpSParamRate = 1;
	
	if(id === SPARAM_WPATK_ID && this.isStateAffected(STATE_KI_ID))
		wpSParamRate += this.willpowerKiSParamEffect();
	
	return wpSParamRate;
};

////////
// Element Rate
//////////////

Game_Actor.prototype.willpowerElementRate = function(elementId) {
	let willpowerElementRate = 0;
	
	if(elementId === ELEMENT_TALK_ID) {
		if(this.isStateAffected(STATE_HEAR_NO_EVIL_ID)) willpowerElementRate += this.willpowerSeeHearNoEvilEffect();
	}
	else if(elementId === ELEMENT_SIGHT_ID) {
		if(this.isStateAffected(STATE_SEE_NO_EVIL_ID)) willpowerElementRate += this.willpowerSeeHearNoEvilEffect();
	}
	else if(elementId === ELEMENT_STRIP_ID) {
		if(this.isStateAffected(STATE_EMPRESS_CLOTHES_ID)) willpowerElementRate += this.willpowerEmpressClothesEffect();
		if(this.isStateAffected(STATE_EMPRESS_MAJESTY_ID)) willpowerElementRate += this.willpowerEmpressMajestyEffect();
	}
	
	return willpowerElementRate;
};


/////////////
// Suppress Desires 
///////////////

Game_Actor.prototype.showEval_suppressDesires = function(area) {
	if(!DEBUG_MODE || this.justOrgasmed()) return false;
	
	
	return true;
};

Game_Actor.prototype.customReq_suppressDesires = function(area) {
	if(this.isInSexPose()) {
		if(area == AREA_COCK && this.cockDesire <= this.getSuppressCockDesireLowerLimit()) 
			return false;
		else if(area == AREA_MOUTH && this.mouthDesire <= this.getSuppressMouthDesireLowerLimit()) return false;
		else if(area == AREA_BOOBS && this.boobsDesire <= this.getSuppressBoobsDesireLowerLimit()) return false;
		else if(area == AREA_PUSSY && this.pussyDesire <= this.getSuppressPussyDesireLowerLimit()) return false;
		else if(area == AREA_BUTT && this.buttDesire <= this.getSuppressButtDesireLowerLimit()) return false;
	}

	
	if(area == AREA_COCK) return this.cockDesire > 0;	
	else if(area == AREA_MOUTH) return this.mouthDesire > 0;	
	else if(area == AREA_BOOBS) return this.boobsDesire > 0;	
	else if(area == AREA_PUSSY) return this.pussyDesire > 0;	
	else if(area == AREA_BUTT) return this.buttDesire > 0;	
	
	
	return true;
};

Game_Actor.prototype.afterEval_suppressDesires = function(area) {
	let baseValue = -5;
	baseValue += this.mind * 1.5;
	let variance = baseValue * 0.1;
	baseValue += Math.random() * variance;
	baseValue -= Math.random() * variance;

	let cockMultipler = 1;
	let mouthMultipler = 1;
	let boobsMultipler = 1;
	let pussyMultipler = 1;
	let buttMultipler = 1;

	if(this.hasPassive(CHARA_CREATE_THREE_SADO_ID) || this.hasPassive(CHARA_CREATE_THREE_MAZO_ID))
		cockMultipler *= 0.7;
	else if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID)) {
		mouthMultipler *= 0.85;
		boobsMultipler *= 0.85;
		pussyMultipler *= 0.85;
		buttMultipler *= 0.85;
	}
	else if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID))
		mouthMultipler *= 0.7;
	else if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID))
		boobsMultipler *= 0.7;
	else if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID))
		pussyMultipler *= 0.7;
	else if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID))
		buttMultipler *= 0.7;
	
	cockMultipler *= 1 - (this.masochismLvl() + this.sadismLvl()) * 0.01;
	mouthMultipler *= 1 - this.masturbateLvl() * 0.02;
	boobsMultipler *= 1 - this.masturbateLvl() * 0.02;
	pussyMultipler *= 1 - this.masturbateLvl() * 0.02;
	buttMultipler *= 1 - this.masturbateLvl() * 0.02;
	
	if(area == AREA_COCK)
		this.gainMindExp(55, $gameTroop.getAverageEnemyExperienceLvl());
	else
		this.gainMindExp(40, $gameTroop.getAverageEnemyExperienceLvl());
	
	baseValue = Math.max(1, baseValue);
	
	if(area == AREA_COCK) return this.gainCockDesire(-baseValue * cockMultipler, true, false);	
	else if(area == AREA_MOUTH) return this.gainMouthDesire(-baseValue * mouthMultipler, true, false);	
	else if(area == AREA_BOOBS) return this.gainBoobsDesire(-baseValue * boobsMultipler, true, false);	
	else if(area == AREA_PUSSY) return this.gainPussyDesire(-baseValue * pussyMultipler, true, false);	
	else if(area == AREA_BUTT) return this.gainButtDesire(-baseValue * buttMultipler, true, false);	
	else console.log('afterEval_suppressDesires area error');
	

};

Game_Actor.prototype.getSuppressMouthDesireLowerLimit = function() {
	let lowerLimit = 0;
	
	if(this.isBodySlotPenis(MOUTH_ID))
		lowerLimit = Math.max(lowerLimit, this.blowjobMouthDesireRequirement());
	if(this.isBodySlotAnus(MOUTH_ID))
		lowerLimit = Math.max(lowerLimit, this.rimjobMouthDesireRequirement());
	
	let inKissingPose = false;
	if(this.isInKickCounterSexPose()) 
		inKissingPose = (this.tachieBody == 'kiss' || this.tachieBody == 'kiss_naked');
	else if(this.isInReceptionistPose()) 
		inKissingPose = this.receptionistBattle_isKissing();
	if(inKissingPose)
		lowerLimit = Math.max(lowerLimit, this.kissingMouthDesireRequirement());
	
	return Math.max(this.minimumMouthDesireLimit(), lowerLimit); 
};
Game_Actor.prototype.getSuppressBoobsDesireLowerLimit = function() {
	let lowerLimit = 0;
	
	if(this.isBodySlotPenis(BOOBS_ID))
		lowerLimit = Math.max(lowerLimit, this.tittyFuckBoobsDesireRequirement());
	
	let inBoobsPettingPose = false;
	if(this.isInReceptionistPose()) 
		inBoobsPettingPose = this.receptionistBattle_gettingBoobsRubbed();
	if(inBoobsPettingPose)
		lowerLimit = Math.max(lowerLimit, this.boobsPettingBoobsDesireRequirement());
	
	return Math.max(this.minimumBoobsDesireLimit(), lowerLimit); 
};
Game_Actor.prototype.getSuppressPussyDesireLowerLimit = function() {
	let lowerLimit = 0;
	
	if(this.isBodySlotPenis(PUSSY_ID))
		lowerLimit = Math.max(lowerLimit, this.pussySexPussyDesireRequirement());
	if(this.isBodySlotTongue(PUSSY_ID))
		lowerLimit = Math.max(lowerLimit, this.cunnilingusPussyDesireRequirement());
	if(this.isWearingPussyToy())
		lowerLimit = Math.max(lowerLimit, this.pussyToyPussyDesireRequirement());
	if(this.isWearingClitToy())
		lowerLimit = Math.max(lowerLimit, this.clitToyPussyDesireRequirement());
	
	return Math.max(this.minimumPussyDesireLimit(), lowerLimit); 
};
Game_Actor.prototype.getSuppressButtDesireLowerLimit = function() {
	let lowerLimit = 0;
	
	if(this.isBodySlotPenis(ANAL_ID))
		lowerLimit = Math.max(lowerLimit, this.analSexButtDesireRequirement());
	if(this.isWearingAnalToy())
		lowerLimit = Math.max(lowerLimit, this.analToyButtDesireRequirement());
	
	return Math.max(this.minimumButtDesireLimit(), lowerLimit); 
};
Game_Actor.prototype.getSuppressCockDesireLowerLimit = function() {
	let lowerLimit = 0;
	
	if(this.isBodySlotPenis(MOUTH_ID))
		lowerLimit = Math.max(lowerLimit, this.blowjobCockDesireRequirement());
	if(this.isBodySlotPenis(BOOBS_ID))
		lowerLimit = Math.max(lowerLimit, this.tittyFuckCockDesireRequirement());
	if(this.isBodySlotPenis(PUSSY_ID))
		lowerLimit = Math.max(lowerLimit, this.pussySexCockDesireRequirement());
	if(this.isBodySlotPenis(ANAL_ID))
		lowerLimit = Math.max(lowerLimit, this.analSexCockDesireRequirement());
	if(this.isBodySlotPenis(LEFT_HAND_ID) || this.isBodySlotPenis(RIGHT_HAND_ID))
		lowerLimit = Math.max(lowerLimit, this.handjobCockDesireRequirement());
	if(this.isBodySlotPenis(FEET_ID))
		lowerLimit = Math.max(lowerLimit, this.footjobCockDesireRequirement());
	
	return Math.max(this.minimumCockDesireLimit(), lowerLimit); 
};


/////////////
// Conscious Desires 
// Release Desires
///////////////

Game_Actor.prototype.showEval_consciousDesires = function(area) {
	if(!DEBUG_MODE || this.justOrgasmed()) return false;
	
	if($gameParty.isInWaitressBattle) {
		if(!this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) return false; 
	}
	else if(this.isInReceptionistPose()) {
		if(!this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) return false; 
	}
	
	if(area == AREA_COCK) return this.hasEdict(EDICT_RELEASE_COCK_DESIRE);	
	else if(area == AREA_MOUTH) return this.hasEdict(EDICT_RELEASE_DESIRES);	
	else if(area == AREA_BOOBS) return this.hasEdict(EDICT_RELEASE_DESIRES);	
	else if(area == AREA_PUSSY) return this.hasEdict(EDICT_RELEASE_DESIRES);	
	else if(area == AREA_BUTT) return this.hasEdict(EDICT_RELEASE_DESIRES);	
	
	return false;
};

Game_Actor.prototype.customReq_consciousDesires = function(area) {
	if(area == AREA_COCK) {
		return this.cockDesire < this.maxCockDesire;	
	}
	else if(area == AREA_MOUTH) {
		return this.mouthDesire < this.maxMouthDesire;	
	}
	else if(area == AREA_BOOBS) {
		return this.boobsDesire < this.maxBoobsDesire;	
	}
	else if(area == AREA_PUSSY) {
		return this.pussyDesire < this.maxPussyDesire;	
	}
	else if(area == AREA_BUTT) { 
		return this.buttDesire < this.maxButtDesire;	
	}
	
	return false
};

Game_Actor.prototype.afterEval_consciousDesires = function(area) {
	let baseValue = -8;
	baseValue += this.mind * 1.33;
	let variance = baseValue * 0.1;
	baseValue += Math.random() * variance;
	baseValue -= Math.random() * variance;

	this.gainMindExp(40, $gameTroop.getAverageEnemyExperienceLvl());
	
	if(area == AREA_COCK) return this.gainCockDesire(baseValue, true, false);	
	else if(area == AREA_MOUTH) return this.gainMouthDesire(baseValue, true, false);	
	else if(area == AREA_BOOBS) return this.gainBoobsDesire(baseValue, true, false);	
	else if(area == AREA_PUSSY) return this.gainPussyDesire(baseValue, true, false);	
	else if(area == AREA_BUTT) return this.gainButtDesire(baseValue, true, false);	
	else console.log('afterEval_consciousDesires area error');
};

///////////////
// Healing Thoughts
/////////////

Game_Actor.prototype.showEval_healingThoughts = function() {
	if(this.justOrgasmed()) return false;
	return this.hasEdict(EDICT_HEALING_THOUGHTS_ONE);
};
Game_Actor.prototype.dmgFormula_healingThoughts = function() {
	let mindExp = 40;
	let percent = 0.15;
	percent += this.mind / 300
	if(this.hasEdict(EDICT_HEALING_THOUGHTS_TWO)) {
		percent *= 1.3;
		mindExp += 10;
	}
	
	let dmg = this.maxenergy * percent;

	

	this.gainMindExp(mindExp, $gameTroop.getAverageEnemyExperienceLvl());
	return Math.round(dmg);
};

Game_Actor.prototype.cooldownEval_healingThoughts = function() {
	let baseCD = 3;
	if(this.hasEdict(EDICT_SPEC_DEFENSIVE_MIND_HEALING)) baseCD--;
	let currentCD = baseCD + Math.floor(this._tempHealingThoughtsExtraCooldown);
	let extraCDrate = 1;
	if(Karryn.isInReceptionistPose()) extraCDrate *= RECEPTIONIST_MENTAL_PHASE_COOLDOWN;
	else if($gameParty.isInGloryBattle) extraCDrate *= GLORY_MENTAL_PHASE_COOLDOWN;
	this._tempHealingThoughtsExtraCooldown += 0.5 * extraCDrate;
	return currentCD;
};

///////////////
// Mind Over Matter
/////////////

Game_Actor.prototype.showEval_mindOverMatter = function() {
	if(this.justOrgasmed()) return false;
	return this.hasEdict(EDICT_MIND_OVER_MATTER);
};

Game_Actor.prototype.dmgFormula_mindOverMatter = function() {
	let percent = 0.5;
	percent += this.mind / 200
	let dmg = this.maxenergy * percent;

	this.gainMindExp(95, $gameTroop.getAverageEnemyExperienceLvl());
	return Math.round(dmg);
};

Game_Actor.prototype.cooldownEval_mindOverMatter = function() {
	let baseCD = 8;
	let currentCD = baseCD + Math.floor(this._tempMindOverMatterExtraCooldown);
	let extraCDrate = 1;
	if(Karryn.isInReceptionistPose()) extraCDrate *= RECEPTIONIST_MENTAL_PHASE_COOLDOWN;
	else if($gameParty.isInGloryBattle) extraCDrate *= GLORY_MENTAL_PHASE_COOLDOWN;
	this._tempMindOverMatterExtraCooldown += 1 * extraCDrate;
	return currentCD;
};

////////////////////////////////////
// See No Evil, Hear No Evil, Speak No Evil
/////////////////////////////////////////

Game_Actor.prototype.showEval_seeNoEvil = function() {
	if(this.justOrgasmed()) return false;
	if(!DEBUG_MODE) return false;
	if(this.isInSexPose()) return false;
	return this.hasEdict(EDICT_SEE_NO_EVIL);
};
Game_Actor.prototype.showEval_hearNoEvil = function() {
	if(this.justOrgasmed()) return false;
	if(!DEBUG_MODE) return false;
	if(this.isInSexPose()) return false;
	return this.hasEdict(EDICT_HEAR_NO_EVIL);
};

Game_Actor.prototype.afterEval_seeNoEvil = function() {
	this.gainMindExp(45, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.addState(STATE_SEE_NO_EVIL_ID);
	
	if(Karryn.isInReceptionistPose()) {
		this.setStateTurns(STATE_SEE_NO_EVIL_ID, RECEPTIONIST_MENTAL_PHASE_COOLDOWN);
	}
	else if($gameParty.isInGloryBattle) {
		this.setStateTurns(STATE_SEE_NO_EVIL_ID, GLORY_MENTAL_PHASE_COOLDOWN);
	}
};
Game_Actor.prototype.afterEval_hearNoEvil = function() {
	this.gainMindExp(45, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.addState(STATE_HEAR_NO_EVIL_ID);
	
	if(Karryn.isInReceptionistPose()) {
		this.setStateTurns(STATE_HEAR_NO_EVIL_ID, RECEPTIONIST_MENTAL_PHASE_COOLDOWN);
	}
	else if($gameParty.isInGloryBattle) {
		this.setStateTurns(STATE_HEAR_NO_EVIL_ID, GLORY_MENTAL_PHASE_COOLDOWN);
	}
};

Game_Actor.prototype.willpowerSeeHearNoEvilEffect = function() {
	return -1 * (30 + this.mind) / 100;
};

Game_Actor.prototype.showEval_speakNoEvil = function() {
	if(this.justOrgasmed()) return false;
	if(!DEBUG_MODE) return false;
	if(this.isInSexPose()) return false;
	if(this.isStateAffected(STATE_SEE_NO_EVIL_ID) && this.isStateAffected(STATE_HEAR_NO_EVIL_ID)) 
		return this.hasEdict(EDICT_SPEAK_NO_EVIL);
};
Game_Actor.prototype.showEval_speakNoEvilGray = function() {
	if(this.justOrgasmed() || this.isInSexPose() || !this.hasEdict(EDICT_SPEAK_NO_EVIL) || !DEBUG_MODE) return false;
	if(this.isStateAffected(STATE_SEE_NO_EVIL_ID) && this.isStateAffected(STATE_HEAR_NO_EVIL_ID)) return false;
	return true;
};

Game_Actor.prototype.afterEval_speakNoEvil = function() {
	let baseValue = -10;
	baseValue += this.mind * 1.33;
	let variance = baseValue * 0.1;
	
	let mouthValue = baseValue;
	let boobsValue = baseValue;
	let pussyValue = baseValue;
	let buttValue = baseValue;
	let cockValue = baseValue;
	
	mouthValue += Math.random() * variance;
	mouthValue -= Math.random() * variance;
	boobsValue += Math.random() * variance;
	boobsValue -= Math.random() * variance;
	pussyValue += Math.random() * variance;
	pussyValue -= Math.random() * variance;
	buttValue += Math.random() * variance;
	buttValue -= Math.random() * variance;
	cockValue += Math.random() * variance;
	cockValue -= Math.random() * variance;
	
	mouthValue = Math.max(1, mouthValue);
	boobsValue = Math.max(1, boobsValue);
	pussyValue = Math.max(1, pussyValue);
	buttValue = Math.max(1, buttValue);
	cockValue = Math.max(1, cockValue);
	
	this.gainMouthDesire(-mouthValue, true, false);	
	this.gainBoobsDesire(-boobsValue, true, false);
	this.gainPussyDesire(-pussyValue, true, false);
	this.gainButtDesire(-buttValue, true, false);
	this.gainCockDesire(-cockValue, true, false);	
	
	this.gainMindExp(75, $gameTroop.getAverageEnemyExperienceLvl());
};

/////////////
// Empress's Majesty
///////////////

Game_Actor.prototype.showEval_empressMajesty = function() {
	if(this.justOrgasmed()) return false;
	if(this.isInSexPose() || this.isClothingMaxDamaged() || !DEBUG_MODE) return false;
	return this.hasEdict(EDICT_EMPRESS_MAJESTY);
};

Game_Actor.prototype.afterEval_empressMajesty = function() {
	this.gainMindExp(35, $gameTroop.getAverageEnemyExperienceLvl());
};

Game_Actor.prototype.willpowerEmpressMajestyEffect = function() {
	return -1 * (25 + this.mind) / 100;
};

/////////////
// Empress's Clothes
///////////////

Game_Actor.prototype.showEval_empressClothes = function() {
	if(this.justOrgasmed()) return false;
	if(this.isInSexPose() || this.isClothingMaxDamaged() || !DEBUG_MODE) return false;
	return this.hasEdict(EDICT_EMPRESS_CLOTHES);
};

Game_Actor.prototype.afterEval_empressClothes = function() {
	this.gainMindExp(40, $gameTroop.getAverageEnemyExperienceLvl());
};

Game_Actor.prototype.willpowerEmpressClothesEffect = function() {
	return (15 + this.mind * 1.5) / 100;
};

/////////////
// Reality Marble
///////////////

Game_Actor.prototype.showEval_realityMarble = function() {
	if(this.justOrgasmed()) return false;
	if(this.isInWaitressServingPose() || this.isInReceptionistPose() || $gameParty.isInGloryBattle) return false;
	return this.hasEdict(EDICT_REALITY_MARBLE);
};

Game_Actor.prototype.afterEval_realityMarble = function() {
	this.gainMindExp(60, $gameTroop.getAverageEnemyExperienceLvl());
};

Game_Actor.prototype.willpowerRealityMarbleEffect = function() {
	return (this.mind) / 100;
};

/////////////
// Eye of the Mind
///////////////

Game_Actor.prototype.showEval_eyeOfTheMind = function() {
	if(this.justOrgasmed()) return false;
	
	return this.hasEdict(EDICT_EYE_OF_THE_MIND) && 
	(this.isInCombatPose() || (this.hasEdict(EDICT_SPEC_SENSUAL_MIND_EOTM) && this.isInSexPose()));
};
Game_Actor.prototype.afterEval_eyeOfTheMind = function() {
	let mindExp = 55;
	if(this.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_EOTM)) mindExp += 15;
	
	this.gainMindExp(mindExp, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.addState(STATE_EYE_OF_THE_MIND_ID);
	
	if(Karryn.isInReceptionistPose()) {
		this.setStateTurns(STATE_EYE_OF_THE_MIND_ID, RECEPTIONIST_MENTAL_PHASE_COOLDOWN);
	}
	else if($gameParty.isInGloryBattle) {
		this.setStateTurns(STATE_EYE_OF_THE_MIND_ID, GLORY_MENTAL_PHASE_COOLDOWN);
	}
};
Game_Actor.prototype.willpowerEyeOfTheMindXParamEffect = function() {
	return this.mind / 100;
};
Game_Actor.prototype.willpowerEyeOfTheMindCritDmgEffect = function() {
	return this.mind / 150;
};

/////////////
// Ki and Focus
///////////////

Game_Actor.prototype.showEval_ki = function() {
	if(this.justOrgasmed()) return false;
	return this.isInCombatPose();
};
Game_Actor.prototype.afterEval_ki = function() {
	let mindExp = 40;
	if(this.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_KI)) mindExp += 10;
	this.gainMindExp(mindExp, $gameTroop.getAverageEnemyExperienceLvl());
};
Game_Actor.prototype.willpowerKiSParamEffect = function() {
	return (30 + this.mind) / 100;
};
Game_Actor.prototype.willpowerKiCritDmgEffect = function() {
	return this.mind / 100;
};

Game_Actor.prototype.showEval_focus = function() {
	if(this.justOrgasmed()) return false;
	return this.isInCombatPose();
};
Game_Actor.prototype.afterEval_focus = function() {
	let mindExp = 40;
	if(this.hasEdict(EDICT_SPEC_DEFENSIVE_MIND_FOCUS)) mindExp += 10;
	this.gainMindExp(mindExp, $gameTroop.getAverageEnemyExperienceLvl());
};
Game_Actor.prototype.willpowerFocusXParamEffect = function() {
	if(!this.isInCombatPose()) return 0;
	return (20 + this.mind / 2) / 100;
};
Game_Actor.prototype.willpowerFocusOverblowProtectionEffect = function() {
	if(!this.isInCombatPose()) return 0;
	return this.mind / 1000;
};


/////////////
// Edging Control
///////////////

Game_Actor.prototype.showEval_edgingControl = function() {
	if(this.justOrgasmed()) return false;
	if(!DEBUG_MODE) return false;
	if(this.isInWaitressServingPose()) return false;
	return this.hasEdict(EDICT_EDGING_CONTROL) && !this.isInDownPose();
};
Game_Actor.prototype.afterEval_edgingControl = function() {
	this.gainMindExp(50, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.addState(STATE_KARRYN_EDGING_CONTROL_ID);
	
	if(Karryn.isInReceptionistPose()) {
		this.setStateTurns(STATE_KARRYN_EDGING_CONTROL_ID, RECEPTIONIST_MENTAL_PHASE_COOLDOWN);
	}
	else if($gameParty.isInGloryBattle) {
		this.setStateTurns(STATE_KARRYN_EDGING_CONTROL_ID, GLORY_MENTAL_PHASE_COOLDOWN);
	}
};
Game_Actor.prototype.willpowerEdgingControlEffect = function() {
	return 1 + ((10 + this.mind * 2) / 100);
};
Game_Actor.prototype.addEnemyEdgingControlStateToTarget = function(target) {
	if(this.isStateAffected(STATE_KARRYN_EDGING_CONTROL_ID) && target.isEnemy()) {
		target.addState(STATE_ENEMY_EDGING_CONTROL_ID);
	}
};

/////////////
// Resist Orgasm
///////////////

Game_Actor.prototype.showEval_resistOrgasm = function() {
	if(this.justOrgasmed()) return false;
	return DEBUG_MODE && this.hasEdict(EDICT_RESIST_ORGASM);
};
Game_Actor.prototype.afterEval_resistOrgasm = function() {
	this.gainMindExp(65, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.addState(STATE_KARRYN_RESIST_ORGASM_ID);
	this.addState(STATE_KARRYN_RESIST_ORGASM_ICON_ID);
	
	if(Karryn.isInReceptionistPose()) {
		this.setStateTurns(STATE_KARRYN_RESIST_ORGASM_ID, RECEPTIONIST_MENTAL_PHASE_COOLDOWN);
		this.setStateTurns(STATE_KARRYN_RESIST_ORGASM_ICON_ID, RECEPTIONIST_MENTAL_PHASE_COOLDOWN);
	}
	else if($gameParty.isInGloryBattle) {
		this.setStateTurns(STATE_KARRYN_RESIST_ORGASM_ID, GLORY_MENTAL_PHASE_COOLDOWN);
		this.setStateTurns(STATE_KARRYN_RESIST_ORGASM_ICON_ID, GLORY_MENTAL_PHASE_COOLDOWN);
	}
};
Game_Actor.prototype.willpowerResistOrgasmEffect = function() {
	return 1 + ((20 + this.mind * 2) / 100);
};

////////
// Restore Mind

Game_Actor.prototype.showEval_restoreMind = function() {
	return this.justOrgasmed() && !this.isInMasturbationCouchPose();
};
Game_Actor.prototype.afterEval_restoreMind = function() {
	let chance = this.mind * 2.5;
	let reduction = 1;
	
	if(chance > 90) {
		if(Math.randomInt(100) < (chance - 90))
			reduction++;
	}
	if(Math.randomInt(100) < chance) {
		if($gameParty._showTopRightTimeNumberFlag) {
			reduction *= 2;
		}
		
		if(this.stamina === 0 && this.getJustOrgasmedStateTurns() <= reduction) {
			this._remLine_skipNextDownStamina = true;
		}
		
		this.increaseJustOrgasmedStateTurns(-1 * reduction);
		
		if(!this.justOrgasmed()) {
			BattleManager._logWindow.push('addText', TextManager.restoreMindFullSuccess.format(this.name()));
			this.emoteMasterManager();
		}
		else {
			BattleManager._logWindow.push('addText', TextManager.restoreMindPartialSuccess.format(this.name()));
		}
		
		this.gainMindExp(55, $gameTroop.getAverageEnemyExperienceLvl());	
	}
	else {
		BattleManager._logWindow.push('addText', TextManager.restoreMindFailure.format(this.name()));
		this.gainMindExp(35, $gameTroop.getAverageEnemyExperienceLvl());	
	}
	if(!this.hasEdict(EDICT_SPEC_SENSUAL_MIND_RESTORE)) this.enterActionPhase();
};

/////////////
// Deny Ejaculations
///////////////

Game_Actor.prototype.showEval_denyExternalEjaculations = function() {
	if(this.justOrgasmed()) return false;
	return DEBUG_MODE && !this._denyingExternalEjaculations && this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_ONE_ID);
};
Game_Actor.prototype.showEval_acceptExternalEjaculations = function() {
	if(this.justOrgasmed()) return false;
	return DEBUG_MODE && this._denyingExternalEjaculations && this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_ONE_ID);
};
Game_Actor.prototype.showEval_denyInternalEjaculations = function() {
	if(this.justOrgasmed()) return false;
	return DEBUG_MODE && !this._denyingInternalEjaculations && this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_TWO_ID);
};
Game_Actor.prototype.showEval_acceptInternalEjaculations = function() {
	if(this.justOrgasmed()) return false;
	return DEBUG_MODE && this._denyingInternalEjaculations && this.hasPassive(PASSIVE_FLOOR_EJACULATION_COUNT_TWO_ID);
};

Game_Actor.prototype.afterEval_denyExternalEjaculation = function(status) {
	this._denyingExternalEjaculations = status;
	this.cacheDesireTooltips();
	if(status) this.gainWill(-10);
};
Game_Actor.prototype.afterEval_denyInternalEjaculation = function(status) {
	this._denyingInternalEjaculations = status;
	this.cacheDesireTooltips();
	if(status) this.gainWill(-10);
};

//unused
Game_Actor.prototype.tachieHalberdTone = function() {
	var WILLPOWER_KI_HALBERD_COLOR_RED = 0;
	var WILLPOWER_KI_HALBERD_COLOR_GREEN = -10;
	var WILLPOWER_KI_HALBERD_COLOR_BLUE = -45;
	
	var tone = [0, 0, 0];
	if(this.isStateAffected(STATE_KI_ID)) {
		tone = [WILLPOWER_KI_HALBERD_COLOR_RED, WILLPOWER_KI_HALBERD_COLOR_GREEN, WILLPOWER_KI_HALBERD_COLOR_BLUE];
	}
	return tone;
};