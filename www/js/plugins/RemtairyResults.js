var Remtairy = Remtairy || {};
Remtairy.Results = Remtairy.Results || {};

const RESULTS_EXP_MAX_LINES = 18;
const RESULTS_EXP_LINE_HEIGHT = 0.9;

const RESULTS_PASSIVES_MAX_LINES = 15;
const RESULTS_PASSIVES_LINE_HEIGHT = 1;

const RESULTS_STAMINA_PER_PLVL = 34;
const RESULTS_ENERGY_PER_PLVL = 1.6;
const RESULTS_STAMINA_PER_ENDURANCE = 8; //Karryn only

const RESULTS_EXP_BASE_PARAM = 150;
const RESULTS_EXP_PER_PARAM_LVL = 75;
const RESULTS_EXP_PER_WARDEN_LVL = 25;
const RESULTS_EXP_MULTI_PER_PARAM_LVL = 0.013;
const RESULTS_EXP_MULTI_PER_WARDEN_LVL = 0.008;
const RESULTS_PLVL_REQ_FOR_MAIN_LVL = 5;

const RESULTS_PLVLS_BEFORE_EXP_REDUCE = 10;
const RESULTS_PLVLS_BEFORE_EXP_REDUCE_EASY_MODE = 20;

const RESULTS_EXP_REDUCE_RATE = 0.15;
const RESULTS_MIN_EXP_RATE_EASY_MODE = 0.25; //unused
const RESULTS_MIN_EXP_RATE_NORMAL_MODE = 0.2; //unused
const RESULTS_MIN_EXP_RATE_HARD_MODE = 0.15; //unused
const RESULTS_MIN_EXP_RATE = 0.1;

//=============================================================================
 /*:
 * @plugindesc Results
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

////////////////
// Param Exp Setups
//////////////////

//Init
Game_Actor.prototype.setupParamExp = function() {
	this._paramLvl = [ 1, 1, 1, 1, 1, 1, 1, 1];
	this._paramExp = [ 0, 0, 0, 0, 0, 0, 0, 0];
	let repplMain = RESULTS_EXP_BASE_PARAM + RESULTS_EXP_PER_PARAM_LVL;
	let repplMinor = RESULTS_EXP_BASE_PARAM;
	this._paramToNextLvl = [ repplMain, repplMinor, repplMain, repplMain, repplMain, repplMinor, repplMain, repplMinor];
	this._paramLvlGained = [ 0, 0, 0, 0, 0, 0, 0, 0];
	this._totalParamExpGained = 0;
	this._totalParamLvlsGained = 0;
	this._totalMainLvlsGained = 0;
};

//Called prebattle and postbattle
Game_Actor.prototype.clearParamExp = function() {
	//Param
	this._paramLvlGained = [ 0, 0, 0, 0, 0, 0, 0, 0];
	this._totalParamExpGained = 0;
	this._totalParamLvlsGained = 0;
	this._totalMainLvlsGained = 0;
	//Passives
	this._newPassivesUnlocked = [];
};

Game_Actor.prototype.resetParamExp = function() {
	this.clearParamExp();
	let repplMain = RESULTS_EXP_BASE_PARAM + RESULTS_EXP_PER_PARAM_LVL;
	let repplMinor = RESULTS_EXP_PER_PARAM_LVL;
	this._paramToNextLvl = [ repplMain, repplMinor, repplMain, repplMain, repplMain, repplMinor, repplMain, repplMinor];
	this._paramLvl = [ 1, 1, 1, 1, 1, 1, 1, 1];
};

///////
// Stat Growth
/////////////

Game_Actor.prototype.getParamGrowthRate = function(paramId, useExpRate) {
	if(paramId === PARAM_MAXSTAMINA_ID) return this.getStaminaGrowthRate(useExpRate);
	else if(paramId === PARAM_MAXENERGY_ID) return this.getEnergyGrowthRate(useExpRate);
	else if(paramId === PARAM_STRENGTH_ID) return this.getStrengthGrowthRate(useExpRate);
	else if(paramId === PARAM_DEXTERITY_ID) return this.getDexterityGrowthRate(useExpRate);
	else if(paramId === PARAM_AGILITY_ID) return this.getAgilityGrowthRate(useExpRate);
	else if(paramId === PARAM_ENDURANCE_ID) return this.getEnduranceGrowthRate(useExpRate);
	else if(paramId === PARAM_MIND_ID) return this.getMindGrowthRate(useExpRate);
	else if(paramId === PARAM_CHARM_ID) return this.getCharmGrowthRate(useExpRate);
};

Game_Actor.prototype.getStaminaGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	if(this.hasEdict(EDICT_STAMINA_TRAINING_THREE)) growthRate *= 1.25;
	if(this.hasEdict(EDICT_STAMINA_TRAINING_TWO)) growthRate *= 1.25;
	if(this.hasEdict(EDICT_STAMINA_TRAINING_ONE)) growthRate *= 1.25;
	
	growthRate *= this.passiveGrowthRate(PARAM_MAXSTAMINA_ID);
	
	if(this.isEquippingThisAccessory(EARRING_TEAR_ID)) growthRate *= 1.2;
	if(this.isEquippingThisAccessory(EARRING_SUN_ID)) growthRate *= 0.25;
	
	if(this.isUsingThisTitle(TITLE_ID_BATHROOM_QUEEN)) growthRate *= 1.75;
	else if(this.isUsingThisTitle(TITLE_ID_EVASION_ONE)) growthRate *= 0.8;
	else if(this.isUsingThisTitle(TITLE_ID_EVASION_TWO)) growthRate *= 0.6;
	
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	return growthRate;
};

Game_Actor.prototype.getEnergyGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	if(this.hasEdict(EDICT_ENERGY_TRAINING_TWO)) growthRate *= 1.25;
	if(this.hasEdict(EDICT_ENERGY_TRAINING_ONE)) growthRate *= 1.25;
	
	
	growthRate *= this.passiveGrowthRate(PARAM_MAXENERGY_ID);
	
	if(this.isEquippingThisAccessory(EARRING_HEART_ID)) growthRate *= 1.2;
	if(this.isEquippingThisAccessory(EARRING_SUN_ID)) growthRate *= 1.75;
	if(this.isEquippingThisAccessory(EARRING_STAR_ID)) growthRate *= 0.2;
	
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	if(this.isUsingThisTitle(TITLE_ID_CUM_GUZZLER)) growthRate *= 1.33;
	
	return growthRate;
};

Game_Actor.prototype.getStrengthGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	let trainingCount = this.karrynTrainingEdictsCount_Strength();
	for(let i = 0; i < trainingCount; ++i) {
		growthRate *= 1.25;
	}
	
	growthRate *= 1 + (0.03 * this.sadismLvl());
	growthRate *= 1 - (0.01 * this.masochismLvl());
	
	growthRate *= this.passiveGrowthRate(PARAM_STRENGTH_ID);
	
	if(this.isEquippingThisAccessory(EARRING_TEAR_ID)) growthRate *= 1.4;
	if(this.isEquippingThisAccessory(EARRING_CHEETAH_ID)) growthRate *= 1.15;
	if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) growthRate *= 1.33;
	
	if(this.isUsingThisTitle(TITLE_ID_HARDCORE_MASOCHIST)) growthRate *= 0.25;
	else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_MASOCHIST)) growthRate *= 0.5;
	else if(this.isUsingThisTitle(TITLE_ID_STRENGTH_TWO)) growthRate *= 1.42;
	else if(this.isUsingThisTitle(TITLE_ID_STRENGTH_ONE)) growthRate *= 1.25;
	
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	return growthRate;
};

Game_Actor.prototype.getDexterityGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	let trainingCount = this.karrynTrainingEdictsCount_Dexterity();
	for(let i = 0; i < trainingCount; ++i) {
		growthRate *= 1.25;
	}
	
	growthRate *= this.passiveGrowthRate(PARAM_DEXTERITY_ID);
	
	if(this.isEquippingThisAccessory(EARRING_LIONESS_ID)) growthRate *= 1.4;
	if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) growthRate *= 1.33;
	if(this.isEquippingThisAccessory(MISC_SCARF_ID)) growthRate *= 1.07;
	
	if(this.isUsingThisTitle(TITLE_ID_DEXTERITY_TWO)) growthRate *= 1.42;
	else if(this.isUsingThisTitle(TITLE_ID_DEXTERITY_ONE)) growthRate *= 1.25;
	
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	return growthRate;
};

Game_Actor.prototype.getAgilityGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	let trainingCount = this.karrynTrainingEdictsCount_Agility();
	for(let i = 0; i < trainingCount; ++i) {
		growthRate *= 1.25;
	}
	
	growthRate *= this.passiveGrowthRate(PARAM_AGILITY_ID);
	
	if(this.isEquippingThisAccessory(EARRING_CHEETAH_ID)) growthRate *= 1.3;
	if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) growthRate *= 1.33;
	if(this.isEquippingThisAccessory(MISC_HIGHHEELS_ID)) growthRate *= 1.05;
	
	if(this.isUsingThisTitle(TITLE_ID_HARDCORE_MASOCHIST)) growthRate *= 0.25;
	else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_MASOCHIST)) growthRate *= 0.5;
	else if(this.isUsingThisTitle(TITLE_ID_AGILITY_TWO)) growthRate *= 1.42;
	else if(this.isUsingThisTitle(TITLE_ID_AGILITY_ONE)) growthRate *= 1.25;
	else if(this.isUsingThisTitle(TITLE_ID_LOST_VIRGINITY_TO_TOY)) growthRate *= 1.15;
		
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	return growthRate;
};

Game_Actor.prototype.getEnduranceGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	let trainingCount = this.karrynTrainingEdictsCount_Endurance();
	for(let i = 0; i < trainingCount; ++i) {
		growthRate *= 1.25;
	}
	
	growthRate *= 1 + (0.01 * this.sadismLvl());
	growthRate *= 1 - (0.03 * this.masochismLvl());
	
	growthRate *= this.passiveGrowthRate(PARAM_ENDURANCE_ID);
	
	if(this.isEquippingThisAccessory(EARRING_HEART_ID)) growthRate *= 1.3;
	
	if(this.isUsingThisTitle(TITLE_ID_FREELOADING_DRINKER)) growthRate *= 1.25;
	else if(this.isUsingThisTitle(TITLE_ID_HARDCORE_MASOCHIST)) growthRate *= 1.5;
	else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_MASOCHIST)) growthRate *= 1.3;
	else if(this.isUsingThisTitle(TITLE_ID_FINAL_DESTINATION)) growthRate *= 0.36;
	
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	return growthRate;
};

Game_Actor.prototype.getMindGrowthRate = function(useExpRate) {
	let growthRate = 1;
	
	let trainingCount = this.karrynTrainingEdictsCount_Mind();
	for(let i = 0; i < trainingCount; ++i) {
		growthRate *= 1.25;
	}
	
	growthRate *= 1 - (0.02 * this.sadismLvl());
	growthRate *= 1 - (0.02 * this.masochismLvl());
	
	growthRate *= this.passiveGrowthRate(PARAM_MIND_ID);
	if(useExpRate) growthRate *= this.exr;
	growthRate *= $gameParty.difficultyGrowthRate();
	
	if(this.isUsingThisTitle(TITLE_ID_FULL_ORDER_FOUR)) growthRate *= 1.3;
	
	
	return growthRate;
};

Game_Actor.prototype.getCharmGrowthRate = function(useExpRate) {
	let growthRate = 1;
	growthRate += this.accessoryBonusCharmGrowth();
	
	growthRate *= this.passiveGrowthRate(PARAM_CHARM_ID);
	growthRate *= this.passiveFlauntCharmGrowthRate();
	
	if(this.hasEdict(EDICT_CHARM_SPECIALIZATION))growthRate *= 1.42;
	
	if(this.isEquippingThisAccessory(EARRING_MOON_ID)) growthRate *= 1.33;
	
	if(this.isUsingThisTitle(TITLE_ID_FIRST_KISS_TO_ANUS)) growthRate *= 1.42;
	else if(this.isUsingThisTitle(TITLE_ID_BUSTY_BARMAID)) growthRate *= 1.15;
	
	if(useExpRate) growthRate *= this.exr;
	
	growthRate *= $gameParty.difficultyGrowthRate();
	
	
	
	return growthRate;
};

////////////
// Param Exp and Lvl
//////////////

Game_Actor.prototype.getWardenLevelLimit = function() {
	let limit = 12;
	
	if(this.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) limit += 24;
	else if(this.hasEdict(EDICT_LEVEL_ONE_SUBJUGATED)) limit += 12;
	
	return limit;
	
};

Game_Actor.prototype.calculateParamExpRate = function(enemyLvl) {
	let lvl = this.level;
	let expRate = 1;
	if(lvl >= this.getWardenLevelLimit()) expRate = 0;
	else if(lvl > enemyLvl) 
		expRate = Math.max(this.minimumExpRate(), 1 - 0.2 * (lvl - enemyLvl));
	//else if(lvl < enemyLvl)
	//	expRate += Math.min(0.3, 0.1 * (enemyLvl - lvl));

	let plvlsBeforeExpReduce = RESULTS_PLVLS_BEFORE_EXP_REDUCE;
	if(Prison.easyMode()) plvlsBeforeExpReduce = RESULTS_PLVLS_BEFORE_EXP_REDUCE_EASY_MODE;
	if(this._totalParamLvlsGained > plvlsBeforeExpReduce) {
		expRate *= Math.max(this.minimumExpRate(), 1 + ((plvlsBeforeExpReduce - this._totalParamLvlsGained ) * RESULTS_EXP_REDUCE_RATE))
	}
	

	return expRate;
};

Game_Actor.prototype.minimumExpRate = function() {
	return RESULTS_MIN_EXP_RATE;
	//below are unused for now
	let minExpRate = 1;	
	if(Prison.easyMode()) {
		minExpRate = RESULTS_MIN_EXP_RATE_EASY_MODE;
	}
	else if(Prison.normalMode()) {
		minExpRate = RESULTS_MIN_EXP_RATE_NORMAL_MODE;
	}
	else if(Prison.hardMode()) {
		minExpRate = RESULTS_MIN_EXP_RATE_HARD_MODE;
	}
	return minExpRate;
};

Game_Actor.prototype.gainStaminaExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getStaminaGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_MAXSTAMINA_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_MAXSTAMINA_ID);
};
Game_Actor.prototype.gainEnergyExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getEnergyGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_MAXENERGY_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_MAXENERGY_ID);
};
Game_Actor.prototype.gainStrengthExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getStrengthGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_STRENGTH_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_STRENGTH_ID);
};
Game_Actor.prototype.gainEnduranceExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getEnduranceGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_ENDURANCE_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_ENDURANCE_ID);
};
Game_Actor.prototype.gainDexterityExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getDexterityGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_DEXTERITY_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_DEXTERITY_ID);
};
Game_Actor.prototype.gainMindExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getMindGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_MIND_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_MIND_ID);
};
Game_Actor.prototype.gainAgilityExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getAgilityGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_AGILITY_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_AGILITY_ID);
};
Game_Actor.prototype.gainCharmExp = function(exp, enemyLvl) {
	if(exp <= 0) return;
	let expRate = this.calculateParamExpRate(enemyLvl);
	let growthRate = this.getCharmGrowthRate(true);
	let ratedExp = Math.max(0, Math.round(expRate * exp * growthRate));
	this._paramExp[PARAM_CHARM_ID] += ratedExp;
	this._totalParamExpGained += ratedExp;
	this.seeIfParamLvlGained(PARAM_CHARM_ID);
};

Game_Actor.prototype.seeIfParamLvlGained = function(paramId) {
	while(this._paramExp[paramId] >= this._paramToNextLvl[paramId]) {
		let nextLvlExp = RESULTS_EXP_BASE_PARAM + this._paramLvl[paramId] * RESULTS_EXP_PER_PARAM_LVL;
		if(paramId !== PARAM_CHARM_ID) nextLvlExp += RESULTS_EXP_PER_WARDEN_LVL * this.level;
		nextLvlExp = Math.round(nextLvlExp * (1 + this._paramLvl[paramId] * RESULTS_EXP_MULTI_PER_PARAM_LVL));
		if(paramId !== PARAM_CHARM_ID) nextLvlExp = Math.round(nextLvlExp * (1 + this.level * RESULTS_EXP_MULTI_PER_WARDEN_LVL));
		
		this._paramToNextLvl[paramId] += nextLvlExp;
		this._paramLvlGained[paramId]++;
		this._paramLvl[paramId]++;
		this._totalParamLvlsGained++;
		this.seeIfMainLvlGained();
	}
};

Game_Actor.prototype.seeIfMainLvlGained = function() {
	let totalParamLvls = this.calculateTotalParamLvls();
	let newMainLvl = Math.floor(totalParamLvls / RESULTS_PLVL_REQ_FOR_MAIN_LVL);
	if(newMainLvl != this.level) {
		if(newMainLvl > this.level)
			this._totalMainLvlsGained += newMainLvl - this.level;
		this.changeLevel(newMainLvl);
	}
};


Game_Actor.prototype.calculateParamLvlsGained = function() {
	for(let i = 0; i < 8; i++) {
		while(this._paramExp[i] >= this._paramToNextLvl[i]) {
			let nextLvlExp = RESULTS_EXP_BASE_PARAM + this._paramLvl[i] * RESULTS_EXP_PER_PARAM_LVL;
			if(i !== PARAM_CHARM_ID) nextLvlExp += RESULTS_EXP_PER_WARDEN_LVL * this.level;
			nextLvlExp = Math.round(nextLvlExp * (1 + this._paramLvl[i] * RESULTS_EXP_MULTI_PER_PARAM_LVL));
			if(i !== PARAM_CHARM_ID) nextLvlExp = Math.round(nextLvlExp * (1 + this.level * RESULTS_EXP_MULTI_PER_WARDEN_LVL));
			
			this._paramToNextLvl[i] += nextLvlExp;
			this._paramLvlGained[i]++;
			this._paramLvl[i]++;
			this._totalParamLvlsGained++;
		}
	}
};

//unused? seeIfMainLvlGained has same code, looks like only version calls this?
Game_Actor.prototype.calculateMainLvlsGained = function() {
	let totalParamLvls = this.calculateTotalParamLvls();
	
	let newMainLvl = Math.floor(totalParamLvls / RESULTS_PLVL_REQ_FOR_MAIN_LVL);
	if(newMainLvl != this.level) {
		if(newMainLvl > this.level)
			this._totalMainLvlsGained += newMainLvl - this.level;
		this.changeLevel(newMainLvl);
	}
};

Game_Actor.prototype.calculateTotalParamLvls = function() {
	let totalParamLvls = 0;
	for(let i = 0; i < 8; i++) {
		totalParamLvls += this._paramLvl[i];
	}
	return totalParamLvls;
};

////////////
///////////////
// Game Party
///////////////
////////////


Game_Party.prototype.calculateParamLvlsGained = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).calculateParamLvlsGained();
};

Game_Party.prototype.calculateMainLvlsGained = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).calculateMainLvlsGained();
};

//Called in pre Battle and post battle common events
Game_Party.prototype.clearPrisonResults = function() {
	this._orderResult = 0;
	this._fatigueGain = 0;
	this._extraGoldReward = 0;
};

// Order

Game_Party.prototype.increaseOrderGain = function(value) {
    this._orderResult += value;
};

//unused
Game_Party.prototype.gainOrderFromVictory = function() {
    this._orderResult = this._orderGainAtVictory;
};
//unused
Game_Party.prototype.gainOrderFromDefeat = function() {
	this._orderResult = this._orderGainAtDefeat;
};
Game_Party.prototype.hasOrderResults = function() {
	return this._orderResult !== 0;
};
Game_Party.prototype.getOrderResults = function() {
	return this._orderResult;
};
Game_Party.prototype.applyOrderResults = function() {
	if(this._gainHalfOrderFlag) this._orderResult *= 0.5;
	if(!Karryn.isInReceptionistPose()) {
		if(Karryn.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO)) this._orderResult = 0;
		if($gameParty.isRiotBattle()) {
			if(Karryn.isUsingThisTitle(TITLE_ID_SUPPRESS_RIOT_THREE)) this._orderResult *= 1.5;
		}
	}
	
	this._orderResult = Math.round(this._orderResult);
	this.increaseOrder(this._orderResult);
};

// Fatigue

Game_Party.prototype.increaseFatigueGain = function(value, dontUseFatigueGainRate) {
	if(!dontUseFatigueGainRate) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		value *= actor.fatigueGainRate();
	}
	this._fatigueGain += value;
};
Game_Party.prototype.increaseFatigueGainFromEnemy = function(value, enemyLvl) {
	let modifiedFatigueGain = value;
	let level = Karryn.level
	if(level < enemyLvl) {
		let diff = enemyLvl - level;
		modifiedFatigueGain *= Math.min(2,(1 + 0.2 * diff));
	}
	else if(level > enemyLvl) {
		let diff = level - enemyLvl;
		modifiedFatigueGain *= Math.max(0.5,(1 - 0.1 * diff));
	}
	
	if($gameParty.isRiotBattle()) {
		if(Karryn.isUsingThisTitle(TITLE_ID_SUPPRESS_RIOT_ONE)) modifiedFatigueGain *= 0.67;
	}
	
	this.increaseFatigueGain(modifiedFatigueGain);
};
Game_Party.prototype.getFatigueResults = function(value) {
	let fatigueValue = this._fatigueGain;
	if(BattleManager._gainHalfFatigue) fatigueValue *= 0.5;
	fatigueValue = Math.ceil(fatigueValue);
	return fatigueValue;
};
Game_Party.prototype.applyFatigueResults = function() {
	let fatigueValue = this.getFatigueResults();
	$gameActors.actor(ACTOR_KARRYN_ID).gainFatigue(fatigueValue);
};


// Extra Gold Reward

Game_Party.prototype.increaseExtraGoldReward = function(value) {
	this._extraGoldReward += Math.round(value);
};

// New Passives

Game_Party.prototype.unlockedNewPassives = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID)._newPassivesUnlocked.length > 0 && DEBUG_MODE;
};

Game_Party.prototype.checkForNewPassives = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).checkForNewPassives();
};

Game_Party.prototype.applyEndOfBattleSpecial = function() {
	if(Karryn.isInReceptionistPose()) {
		this.applyEndOfBattleSpecial_receptionistBattle();
	}
	else if($gameParty.isInGloryBattle) {
		this.applyEndOfBattleSpecial_gloryBattle();
	}
};


//////////////
///////////////
// Scene Battle
////////////////
/////////////

////////
// Results Title
//////////
Scene_Battle.prototype.resultsTitleText = function() {
	let title = TextManager.resultsVictory;
	
	if($gameParty.isInWaitressBattle || Karryn.isInReceptionistPose()) {
		title = TextManager.resultsJobBattleEnd;
		return title;
	}
	else if($gameParty.isInGloryBattle) {
		title = TextManager.gloryBattleEnd;
		return title;
	}
	
	
	
	if(Karryn.isInMasturbationCouchPose()) {
		let num = $gameActors.actor(ACTOR_KARRYN_ID)._tempRecordOrgasmCount;
		if(num === 0) title = TextManager.resultsMasturbateBattleNone;
		else if(num === 1) title = TextManager.resultsMasturbateBattleSingle;
		else {
			title = TextManager.resultsMasturbateBattlePlural;
			title = title.format(num);
		}
		return title;
	}
	
	if(BattleManager._phase == 'rem abort') {
		title = TextManager.resultsAborted;
	}
	else if(BattleManager._phase == 'rem defeat') {
		title = TextManager.resultsDefeat;
	}
	return title;
};

Scene_Battle.prototype.createVictoryTitle = function() {
    this._statusWindow.hide();
    this._logWindow.hide();
    this._victoryTitleWindow = new Window_VictoryTitle(this.resultsTitleText());
    this.addWindow(this._victoryTitleWindow);
    this._victoryTitleWindow.open();
};

Scene_Battle.prototype.createVictoryExp = function() {
    this._victoryTitleWindow.refresh(this.resultsTitleText());
    this._victoryExpWindow = new Window_VictoryExp();
    this.addWindow(this._victoryExpWindow);
    this._victoryExpWindow.open();
};

/////////
// Victory Passive
////////////

Scene_Battle.prototype.updateVictorySteps = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).resetCockTargets();
	$gameActors.actor(ACTOR_KARRYN_ID).disableAllPoseSkills();
	if(this.isVictoryStep('EXP')) this.updateVictoryExp();
	if(this.isVictoryStep('DROPS')) this.updateVictoryDrops();
	if(this.isVictoryStep('PASSIVES')) {
		if($gameParty.unlockedNewPassives()) {
			this.updateVictoryPassives();
		}
		else { 
			this.processNextVictoryStep(); 
		}
	}
	$gameActors.actor(ACTOR_KARRYN_ID).calculateAllMaxDesires();
};

Scene_Battle.prototype.updateVictoryPassives = function() {
    if (!this._victoryPassivesWindow) {
      this.createVictoryPassives();
    } else if (this._victoryPassivesWindow.isOpen()) {
      if (this.victoryTriggerContinue()) this.finishVictoryPassives();
    }
};

Scene_Battle.prototype.createVictoryPassives = function() {
    this._victoryTitleWindow.refresh(TextManager.resultsPassivesTitle);
    this._victoryPassivesWindow = new Window_VictoryPassives();
    this.addWindow(this._victoryPassivesWindow);
    this._victoryPassivesWindow.open();
	AudioManager.playSe({name:'+Get_01', pan:0, pitch:100, volume:70});
};

Scene_Battle.prototype.finishVictoryPassives = function() {
	SoundManager.playOk();
	this._victoryPassivesWindow.close();
	this.processNextVictoryStep();
};

////////////////
// Window VictoryTitle
/////////////////

//pass in title
Window_VictoryTitle.prototype.initialize = function(title) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this.refresh(title);
    this.openness = 0;
};

////////////
///////////////
// Window VictoryExp
////////////////////
/////////////////

Window_VictoryExp.prototype.drawItem = function(index) {
	return;
};

Window_VictoryExp.prototype.drawExpGained = function(actor, rect) {
	var wy = Graphics.boxHeight - this.lineHeight() * 5;
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.resultsGainedExp, rect.x + 2, wy, rect.width - 4,
      'left');
    var bonusExp = 1.0 * actor._expGained * this._tick /
      Yanfly.Param.VAGaugeTicks;
    var expParse = Yanfly.Util.toGroup(parseInt(bonusExp));
    var expText = Yanfly.Param.VAGainedExpfmt.format(expParse);
    this.changeTextColor(this.normalColor());
    this.drawText(expText, rect.x + 2, wy, rect.width - 4, 'right');
};

Window_VictoryExp.prototype.drawExpValues = function(actor, rect) {
	var wy = Graphics.boxHeight - this.lineHeight() * 6 - 2;
    var actorLv = actor._preVictoryLv;
    var bonusExp = 1.0 * actor._expGained * this._tick /
      Yanfly.Param.VAGaugeTicks;
    var nowExp = actor._preVictoryExp - actor.expForLevel(actorLv) + bonusExp;
    var nextExp = actor.expForLevel(actorLv + 1) - actor.expForLevel(actorLv);
    if (actorLv === actor.maxLevel()) {
      var text = Yanfly.Param.VAMaxLv;
    } else if (nowExp >= nextExp) {
      var text = TextManager.resultsLevelUp;
    } else {
      var text = Yanfly.Util.toGroup(parseInt(nextExp - nowExp));
    }
    this.changeTextColor(this.normalColor());
    this.drawText(text, rect.x + 2, wy, rect.width - 4, 'right');
};

Window_VictoryExp.prototype.drawExpGauge = function(actor, rect) {
    let rate = this.actorExpRate(actor);
    if (rate >= 1.0) {
      var color1 = this.textColor(Yanfly.Param.ColorLv1);
      var color2 = this.textColor(Yanfly.Param.ColorLv2);
    } else {
      var color1 = this.textColor(Yanfly.Param.ColorExp1);
      var color2 = this.textColor(Yanfly.Param.ColorExp2);
    }
	let wy = Graphics.boxHeight - this.lineHeight() * 6;
    this.drawGauge(rect.x, wy, rect.width, rate, color1, color2);
};

Window_VictoryExp.prototype.drawActorName = function(actor, x, y, width) {
    width = width || 168;
    this.changeTextColor(this.textColor(31));
    this.drawText(actor.name(), x, y, width);
};

Window_VictoryExp.prototype.drawPrisonResults = function() {
	let y = -this._scrollY + this.lineHeight() * this._resultsLine;
	let x = this._scrollX + this.standardPadding() * 2 + Window_Base._faceWidth;
	let width = Graphics.boxWidth;
	this.changeTextColor(this.normalColor());
	
	//cockiness
	if(Karryn.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		if(actor._tempRecordCockinessPreBattle < actor.cockiness) {
			if(actor.cockiness === 100) {
				this._resultsLine++;
				var text = TextManager.cockinessMaxxedOut;
				text = text.format(actor.cockiness);
				this.drawText(text, x, y, width, 'left');	
			}
			else {
				this._resultsLine++;
				var text = TextManager.cockinessIncrease;
				text = text.format(actor.cockiness);
				this.drawText(text, x, y, width, 'left');	
			}
		}
		else if(actor._tempRecordCockinessPreBattle > actor.cockiness) {
			if(actor.cockiness === 0) {
				this._resultsLine++;
				var text = TextManager.cockinessReset;
				this.drawText(text, x, y, width, 'left');	
			}
			else {
				this._resultsLine++;
				var text = TextManager.cockinessDecrease;
				text = text.format(actor.cockiness);
				this.drawText(text, x, y, width, 'left');	
			}
		}
	}
	
	//order
	if($gameParty.hasOrderResults()) {
		y = -this._scrollY + this.lineHeight() * this._resultsLine;
		this._resultsLine++;
		let orderResults = $gameParty.getOrderResults();
		let text = '';
		if(orderResults > 0)
			text = TextManager.resultsOrderIncrease;
		else
			text = TextManager.resultsOrderDecrease;
		
		text = text.format(orderResults);
		this.drawText(text, x, y, width, 'left');		
	}

	//funding
	let funding = BattleManager._rewards.gold;
	if(funding !== 0) {
		let text = '';
		y = -this._scrollY + this.lineHeight() * this._resultsLine;
		this._resultsLine++;
		
		if(funding > 0)
			text = TextManager.resultsFundingIncrease;
		else
			text = TextManager.resultsFundingDecrease;
		
		text = text.format(funding);
		this.drawText(text, x, y, width, 'left');			
	}
	
	//fatigue
	let fatigue = $gameParty.getFatigueResults();
	if(fatigue !== 0) {
		let text = '';
		y = -this._scrollY + this.lineHeight() * this._resultsLine;
		this._resultsLine++;

		if(fatigue > 0) {
			text = TextManager.resultsFatigueIncrease;
		}
		else if(fatigue < 0) {
			text = TextManager.resultsFatigueDecrease;
		}
		
		text = text.format(Math.abs(fatigue));
		this.drawText(text, x, y, width, 'left');			
	}
	
	
};

Window_VictoryExp.prototype.drawAllGauges = function() {
	this._resultsLine = 0;
    let topIndex = this.topIndex();
    for (let i = 0; i < this.maxPageItems(); i++) {
      let index = topIndex + i;
      if (index < this.maxItems()) this.drawItemGauge(index);
    }
};

Window_VictoryExp.prototype.drawActorGauge = function(actor, index) {
    this.clearGaugeRect(index);
    let rect = this.gaugeRect(index);
    this.changeTextColor(this.normalColor());
	//this.makeFontBigger();
    //this.drawActorName(actor, rect.x + 15, rect.y);
    //this.drawLevel(actor, rect);
	//this.makeFontSmaller();
	//this._resultsLine++;
	this.drawPrisonResults();
	this.drawExpBreakdown(actor, rect);
    //this.drawExpGauge(actor, rect);
    //this.drawExpValues(actor, rect);
    //this.drawExpGained(actor, rect);
};

Window_VictoryExp.prototype.drawExpBreakdown = function(actor, rect) {
	let x = this._scrollX + this.standardPadding() * 2 + Window_Base._faceWidth;
	let expLines = 0;
	//this.makeFontSmaller();
	
	//Param Gained
	for(let i = 0; i < 8; i++) {
		let value = actor._paramLvlGained[i];
		let valueName = '';
		if(value > 0) {
			if(i === PARAM_MAXSTAMINA_ID) {
				valueName = TextManager.basic(2);
			}
			else if(i === PARAM_MAXENERGY_ID) {
				valueName = TextManager.basic(4);
			}
			else valueName = TextManager.param(i);
			
			let wy = -this._scrollY + this.lineHeight() * this._resultsLine + this.lineHeight() * expLines * RESULTS_EXP_LINE_HEIGHT;
			expLines++;
			let columnX = 0;
			/*
			//if(expLines > RESULTS_EXP_MAX_LINES) {
			//	columnX += (rect.width - 4)/2;
			//	wy -= this.lineHeight() * RESULTS_EXP_MAX_LINES * RESULTS_EXP_LINE_HEIGHT;
			//}
			*/
			this.changeTextColor(this.normalColor());
			let text = TextManager.paramLevelGainedSingular;
			if(value > 1) text = TextManager.paramLevelGainedPlural;
			
			text = text.format(value, valueName);

			//this.drawText(text, x, wy, (rect.width - 4)/2, 'left');
			this.drawText(text, x, wy, rect.width, 'left');

			//this.changeTextColor(this.systemColor());

		}
	}
	
	//Warden Level
	let wardenLvlGained = actor._totalMainLvlsGained;
	let wy = -this._scrollY + this.lineHeight() * this._resultsLine + this.lineHeight() * expLines * RESULTS_EXP_LINE_HEIGHT;
	expLines++;
	let columnX = 0;
	
	if(wardenLvlGained > 0) {
		let text = TextManager.wardenLevelUp;
		text = text.format(actor.name(), actor.level);
		this.drawTextEx(text, x, wy, rect.width, 'left');
	}
	else {
		let totalParamLvls = actor.calculateTotalParamLvls();
		let reqLvls = RESULTS_PLVL_REQ_FOR_MAIN_LVL - (totalParamLvls % RESULTS_PLVL_REQ_FOR_MAIN_LVL);
		if(reqLvls === 0) reqLvls = RESULTS_PLVL_REQ_FOR_MAIN_LVL;

		let text = TextManager.wardenLevelRequireSingular;
		if(reqLvls > 1) text = TextManager.wardenLevelRequirePlural;
		
		text = text.format(reqLvls);
		this.drawTextEx(text, x, wy, rect.width, 'left');
	}
	//this.makeFontBigger();
}; //End of drawExpBreakdown()


////////////
///////////////
// Window VictoryPassives
////////////////////
/////////////////

function Window_VictoryPassives() {
    this.initialize.apply(this, arguments);
}

Window_VictoryPassives.prototype = Object.create(Window_Selectable.prototype);
Window_VictoryPassives.prototype.constructor = Window_VictoryPassives;

Window_VictoryPassives.prototype.initialize = function() {
    var wy = this.fittingHeight(1);
    var ww = Graphics.boxWidth;
    var wh = Graphics.boxHeight - wy;
    Window_Selectable.prototype.initialize.call(this, 0, wy, ww, wh);
    this.refresh();
    this.openness = 0;
};

Window_VictoryPassives.prototype.maxItems = function() {
    return $gameParty.maxBattleMembers();
};

Window_VictoryPassives.prototype.standardFontSize = function() {
    return Yanfly.Param.VAFontSize;
};

Window_VictoryPassives.prototype.lineHeight = function() {
    return this.standardFontSize() + 8;
};

Window_VictoryPassives.prototype.itemHeight = function() {
    let clientHeight = this.height - this.padding * 2;
    clientHeight = Math.floor(clientHeight / this.maxItems());
    clientHeight = Math.max(clientHeight, this.lineHeight() * 2);
    return clientHeight;
};

Window_VictoryPassives.prototype.drawItem = function(index) {
    var actor = $gameParty.battleMembers()[index];
    if (!actor) return;
    this.drawActorNewPassives(actor, index);
	//todo: draw text for new slut level here
};

Window_VictoryPassives.prototype.drawActorNewPassives = function(actor, index) {
	var x = this._scrollX + this.standardPadding() * 2 + Window_Base._faceWidth;
	
	//this.makeFontBigger();
    //this.changeTextColor(this.textColor(31));
    //this.drawText(actor.name(), x + 15, 0, 168);
	//this.makeFontSmaller();
	
    let newPassives = actor._newPassivesUnlocked;
	for(let i = 0; i < newPassives.length; i++) {
		let name = TextManager.skillName(newPassives[i]);
		let wy = -this._scrollY + this.lineHeight() * (i) * RESULTS_PASSIVES_LINE_HEIGHT;
		let textColor = $dataSkills[newPassives[i]].passiveColor;
		if(textColor) this.changeTextColor(this.textColor(textColor));
		this.drawText(name, x, wy, (this.width - 240)/2, 'left');
	
	}
	
	this.changeTextColor(this.normalColor());
};


Remtairy.Results.Window_VictoryPassives_update = Window_VictoryPassives.prototype.update;
Window_VictoryPassives.prototype.update = function() {
    Remtairy.Results.Window_VictoryPassives_update.call(this);
    if(!!this.tooltipWindow() && this.isMouseOverPassives()) {
        this._battler = $gameActors.actor(ACTOR_KARRYN_ID);
        if(!!this._battler) {
            this.updateStateIconTooltipWindow();
        }
    }
};

Window_VictoryPassives.prototype.updateStateIconTooltipWindow = function() {
    this.tooltipWindow().setTargetHost(this, true);
};

Window_VictoryPassives.prototype.tooltipWindow = function() {
    return SceneManager._scene._stateIconTooltipWindow;
};

Window_VictoryPassives.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Window_VictoryPassives.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

Window_VictoryPassives.prototype.isFullyVisible = function() {
    var node = this;
    while (node) {
        if (!this.visible) {
            return false;
        } else if (this.opacity <= 0) {
            return false;
        } else {
            node = node.parent;
        }
    }
    return true;
};

Window_VictoryPassives.prototype.isMouseOverPassives = function() {
	if(!this.isFullyVisible() || x < 0 || y < 0) return false;
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);

	let bufferY = 20;

	let mouseIsOverPassives = x >= this._scrollX + this.standardPadding() * 2 + Window_Base._faceWidth 
		&& x <= (this.width - 240)/2
		&& y >= bufferY;
		
	if(y > (REM_OLIVIA_TOOLTIP_PASSIVE_LINEHEIGHT * $gameActors.actor(ACTOR_KARRYN_ID)._newPassivesUnlocked.length) + bufferY)
		mouseIsOverPassives = false;
	
	if(mouseIsOverPassives) 
		this.tooltipWindow().setXYPos_passives(x, y - 20);
	
	
    return mouseIsOverPassives;
};