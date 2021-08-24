var Remtairy = Remtairy || {};
Remtairy.Energy = Remtairy.Energy || {};

//=============================================================================
 /*:
 * @plugindesc Energy
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

////////////
//////////////
// Game Actor
//////////////
////////////

Game_Actor.prototype.hasNoEnergy = function() {
	return this.energy === 0;
};
Game_BattlerBase.prototype.hasLessThanHalfEnergy = function() {
	return this.energy <= this.maxenergy * 0.5;
};
Game_BattlerBase.prototype.hasLessThanOneFourthEnergy = function() {
	return this.energy <= this.maxenergy * 0.25;
};

//returns whole numbers, divide by 100 for percent
Game_BattlerBase.prototype.currentPercentOfEnergy = function() { 
	let value = Math.floor(this.energy * 100 / this.maxenergy);
	if(value >= 100) value = 100;
	return value;
};

//returns whole numbers, divide by 100 for percent
Game_BattlerBase.prototype.currentPercentOfEnergy_realMax = function() { 
	let value = Math.floor(this.energy * 100 / this.realMaxEnergy);
	if(value >= 100) value = 100;
	return value;
};


Game_Actor.prototype.resetEnergyCosts = function() {
	this._tempFixClothesCost = 1;
	this._tempCombatStanceCost = 0;
	this._tempSecretaryStanceCostIncrease = 0;
	this._tempLadyPleasureCostIncrease = 0;
	this._tempRevitalizeExtraCooldown = 0;
	this._tempSecondWindExtraCooldown = 0;
	this._tempEnergyRegenPool = 0;
};


Game_Actor.prototype.resetEndurePleasureStanceCost = function() {
	this._tempSecretaryStanceCostIncrease = 0;
	//this._tempLadyPleasureCostIncrease = 0;
};


Remtairy.Energy.Game_Actor_performAction = Game_Actor.prototype.performAction;
Game_Actor.prototype.performAction = function(action) {
	Remtairy.Energy.Game_Actor_performAction.call(this, action);

	if(!action.isActorWillpowerSkill() && !action.isEndMentalPhaseSkill()) {
		if(action.isActorCombatStanceSkill()) {
			this._tempSexStanceCost = 0;
		}
		else if(action.isActorSexStanceSkill()) {
			this._tempCombatStanceCost = 0;
		}
		else {
			this._tempCombatStanceCost = 0;
			this._tempSexStanceCost = 0;
		}
		
	}
	
};

Game_Actor.prototype.hasEnergyStateCondition = function() {
	//if(this.isInMasturbationCouchPose()) return false;
	return this.energy > 0 && DEBUG_MODE;
};

///////
// Fix Clothes
/////////////

Game_Actor.prototype.skillCost_fixClothes = function(dontApplyEscAndRounding) {
	let cost = this._tempFixClothesCost;
	
	if(dontApplyEscAndRounding) {
		return cost;
	}
	else {
		cost *= this.esc;
		return Math.max(1, Math.ceil(cost));
	}
};

Game_Actor.prototype.showEval_fixClothes = function() {
	return !this.isClothingMaxDamaged() && !this.isClothingAtMaxFixable() && this.isInCombatPose();
};

Game_Actor.prototype.afterEval_fixClothes = function() {
	this.gainEnergyExp(10, $gameTroop.getAverageEnemyExperienceLvl());
	this.restoreClothingDurability();
	this.setPoseClothing();
	this.emoteMasterManager();
	this._tempFixClothesCost += this._tempFixClothesCost;
	this.addToFixClothesUsageCountRecord();
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
};

////////
// Revitalize
/////////////

Game_Actor.prototype.skillCost_revitalize = function(dontApplyEscAndRounding) {
	let percent = 0.2;

	let cost = this.realMaxEnergy * percent;
	
	if(dontApplyEscAndRounding) {
		return cost;
	}
	else {
		cost *= this.esc;
		return Math.min(Math.round(cost), this.energy);
	}
};

Game_Actor.prototype.showEval_revitalize = function() {
	return !this.justOrgasmed() && this.hasEdict(EDICT_REVITALIZE_TRAINING_ONE);
};

Game_Actor.prototype.dmgFormula_revitalize = function() {
	let percent = Math.max(0.4, this.hrg * 6);
	if(this.hasEdict(EDICT_REVITALIZE_TRAINING_TWO)) percent += Math.max(0.2, this.hrg * 3);
	
	percent = Math.min(percent, 0.8);
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_ONE_ID)) percent *= 1.15;
	
	let dmg = this.maxstamina * percent;

	return Math.round(dmg);
};

Game_Actor.prototype.cooldownEval_revitalize = function() {
	let baseCD = 2;
	let currentCD = baseCD + Math.floor(this._tempRevitalizeExtraCooldown);
	return currentCD;
};

Game_Actor.prototype.afterEval_revitalize = function() {
	this._mp = Math.max(0, this.energy - 1);
	this.gainEnergyExp(35, $gameTroop.getAverageEnemyExperienceLvl());
	this._tempRecordDownStaminaCurrentlyCounted = false;
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
	
	let cooldown = this.cooldownEval_revitalize();
	this.setCooldown(SKILL_REVITALIZE_ID, cooldown);
	this.setCooldown(SKILL_CAUTIOUS_REVITALIZE_ID, cooldown);
	this.setCooldown(SKILL_DEFENSIVE_REVITALIZE_ID, cooldown);
	this.setCooldown(SKILL_COUNTER_REVITALIZE_ID, cooldown);
	this._tempRevitalizeExtraCooldown += 0.5;
};

Game_Actor.prototype.passiveDownStaminaState_increaseCooldown = function() {  
	let addCooldownChance = 0;
	
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) {
		addCooldownChance += 0.05;
		if(this.masochismLvl() > this.sadismLvl()) 
			addCooldownChance += this.masochismLvl() * 0.05;
		addCooldownChance += this.masochismLvl() * 0.015;
	}
	
	if(Math.random() < addCooldownChance) {
		if(this._cooldownTurns[SKILL_REVITALIZE_ID] === undefined || this._cooldownTurns[SKILL_REVITALIZE_ID] <= 1) {
			this._cooldownTurns[SKILL_REVITALIZE_ID] = 2;
		}
	}
};

////////
// Second Wind
/////////////

Game_Actor.prototype.skillCost_secondWind = function(dontApplyEscAndRounding) {
	let percent = 0.35;
	
	let cost = this.realMaxEnergy * percent;
	
	if(dontApplyEscAndRounding) {
		return cost;
	}
	else {
		cost *= this.esc;
		return Math.round(cost);
	}
};

Game_Actor.prototype.showEval_secondWinds = function() {
	return this.hasNoStamina() && !this.justOrgasmed() && this.hasEdict(EDICT_SECONDWIND_TRAINING_ONE);
};

Game_Actor.prototype.dmgFormula_secondWind = function() {
	let percent = Math.max(0.75, this.hrg * 10);
	//percent = Math.min(1, percent);
	let dmg = this.maxstamina * percent;

	return Math.round(dmg);
};


Game_Actor.prototype.cooldownEval_secondWind = function() {
	let baseCD = 5;
	if(this.hasEdict(EDICT_SPEC_ENERGY_CYCLING)) baseCD--;
	let currentCD = baseCD + this._tempSecondWindExtraCooldown;
	return currentCD;
};

Game_Actor.prototype.afterEval_secondWind = function() {
	//this._mp -= 1;
	
	this.gainEnergyExp(70, $gameTroop.getAverageEnemyExperienceLvl());
	this._tempRecordDownStaminaCurrentlyCounted = false;
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
	
	let cooldown = this.cooldownEval_secondWind();
	this.setCooldown(SKILL_SECOND_WIND_ID, cooldown);
	this.setCooldown(SKILL_CAUTIOUS_SECOND_WIND_ID, cooldown);
	this.setCooldown(SKILL_DEFENSIVE_SECOND_WIND_ID, cooldown);
	this.setCooldown(SKILL_COUNTER_SECOND_WIND_ID, cooldown);
	this._tempSecondWindExtraCooldown++;
};

////////////
// Breathe
////////////

Game_Actor.prototype.showEval_breathe = function() {
	return this.justOrgasmed();
};

Game_Actor.prototype.dmgFormula_breathe = function() {
	this.gainEnergyExp(20, $gameTroop.getAverageEnemyExperienceLvl());
	
	this._tempRecordDownStaminaCurrentlyCounted = false;
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
	
	let percent = Math.max(0.1, this.hrg);
	let dmg = this.maxstamina * percent;

	return Math.round(dmg);
};

////////
// Fallen Rest
///////////

Game_Actor.prototype.showEval_fallenRest = function() {
	return this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID) && this.isInDownFallDownPose();
};
Game_Actor.prototype.customReq_fallenRest = function() {
	return this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID) && this.isInDownFallDownPose();
};
Game_Actor.prototype.cooldownEval_fallenRest = function() {
	let baseCD = 3;
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_THREE_ID)) baseCD -= 1;
	return baseCD;
};
Game_Actor.prototype.dmgFormula_fallenRest = function() {
	let percent = Math.max(0.2, this.hrg * 2);
	let dmg = this.maxstamina * percent;

	return Math.round(dmg);
};

Game_Actor.prototype.afterEval_fallenRest = function() {
	this.passiveFallenState_addHornyEffect();
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
};

////////////
// Karryn Taunt
////////////

Game_Actor.prototype.showEval_karrynTaunt = function() {
	return this.isInCombatPose() && this.hasPassive(PASSIVE_SUBDUED_COUNT_ONE_ID);
};

Game_Actor.prototype.skillCost_karrynTaunt = function() {
	let percent = 0.1;
	
	let cost = this.realMaxEnergy * percent;
	cost *= this.esc;
	return Math.round(cost);
};

Game_Actor.prototype.customExecution_karrynTaunt = function() {
	this.addState(STATE_CONFIDENT_ID);
	this.gainEnergyExp(10, $gameTroop.getAverageEnemyExperienceLvl());
	this.addToActorTauntCountRecord(); 
	BattleManager._logWindow.push('addText', TextManager.karrynTauntMessage);
	BattleManager.actionRemLines(KARRYN_LINE_KARRYN_TAUNT);
	
	if(this.hasPassive(PASSIVE_TAUNT_COUNT_THREE_ID) && this.hasHalberd()) {
		this.addDisarmedState(false);
		this.setStateTurns(STATE_DISARMED_ID, 1);
	}
};
Game_Actor.prototype.afterEval_karrynTaunt = function(target) {
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
	if(!target._thisTurnTaunted) {
		target._thisTurnTaunted = true;
		target.addToEnemyTauntedCountRecord(this);
		this.addCockinessFromTaunting();

		let angerChance = 0.5;
		angerChance -= target.masochismLvl() * 0.1;
		angerChance += target.sadismLvl() * 0.15;
		if(target.level > this.level) {
			angerChance += (target.level - this.level) * 0.05;
		}
		if(this.hasPassive(PASSIVE_TAUNT_COUNT_TWO_ID)) {
			angerChance += this.cockiness * 0.005;
		}
		if(target.isOrcType) {
			angerChance += 1;
		}
		
		if(Math.random() < angerChance) target.addAngryState();
	}
	
};

////////////
// Karryn Flaunt
////////////

Game_Actor.prototype.showEval_karrynFlaunt = function() {
	if(!this.hasPassive(PASSIVE_SUBDUED_COUNT_THREE_ID)) return false;
	
	if(this.isInCombatPose()) {
		return true;
	}
	else if(this.isInJobPose() || this.justOrgasmed()) {
		return false;
	}
	else if(this.isInDownPose()) {
		return (this.isInDownStaminaPose() && this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) || 
		(this.isInDownFallDownPose() && this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID));
	}
	else {
		if(this.isBodySlotPenis(MOUTH_ID) || this.isBodySlotPenis(BOOBS_ID) || this.isBodySlotAnus(MOUTH_ID)) return false;
		if(this.isBodySlotPenis(RIGHT_HAND_ID) && this.isBodySlotPenis(LEFT_HAND_ID)) return false;

		return true;
	}
	
	return false;
};

Game_Actor.prototype.skillCost_karrynFlaunt = function() {
	let percent = 0.1;
	
	let cost = this.realMaxEnergy * percent;
	cost *= this.esc;
	return Math.round(cost);
};

Game_Actor.prototype.customExecution_karrynFlaunt = function() {
	this.addState(STATE_CONFIDENT_ID);
	this.gainEnergyExp(10, $gameTroop.getAverageEnemyExperienceLvl());
	this.addToActorFlauntCountRecord(); 
	BattleManager._logWindow.push('addText', TextManager.karrynFlauntMessage);
	this.setTachieCutIn(CUTIN_KARRYN_FLAUNT_ONE_ID);
	BattleManager.actionRemLines(KARRYN_LINE_KARRYN_FLAUNT);
	
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_TWO_ID)) {
		if(Math.random() < 0.4)
			this.addHornyState();
	}
};

Game_Actor.prototype.afterEval_karrynFlaunt = function(target) {
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
	if(!target._thisTurnFlaunted) {
		target._thisTurnFlaunted = true;
		target.addToEnemyFlauntedCountRecord(this);
		//this.setTachieCutIn(CUTIN_KARRYN_FLAUNT_ONE_ID);
		
		let hornyChance = 0.2;
		if(this.hasPassive(PASSIVE_FLAUNT_COUNT_ONE_ID)) {
			hornyChance += this.cockiness * 0.0015;
		}
		if(target.charm > this.inBattleCharm || target.isAngry) hornyChance = 0;
		else {
			hornyChance += (this.inBattleCharm - target.charm) * 0.015;
			this.gainCharmExp(6, target.enemyExperienceLvl());
		}
		
		if(target.hasHornyPrefix() || target.hasVirginPrefix()) 
			hornyChance += 0.3;

		if(Math.random() < hornyChance) target.addHornyState();
	}
};

Game_Actor.prototype.resetTauntAndConfidentOnNewWave = function() {
	if(this.isConfident) {
		this.removeState(STATE_CONFIDENT_ID);
	}
	this.setCooldown(SKILL_KARRYN_TAUNT_ID,0);
	this.setCooldown(SKILL_KARRYN_FLAUNT_ID,0);
};

////////////
// Karryn Dogeza
////////////

Game_Actor.prototype.showEval_karrynDogeza = function() {
	return this.isInCombatPose() && false;
};

Game_Actor.prototype.dmgFormula_karrynDogeza = function(target) {
	this.gainEnergyExp(10, $gameTroop.getAverageEnemyExperienceLvl());
	
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_THREE_ID)) {
		target.addHornyState();
	}
	
	if(this.hasPassive(PASSIVE_DOGEZA_COUNT_TWO_ID)) {
		let maso = this.masochismSensitivity();
		let cockiness = this.cockiness;
		
		let pleasureDamage = cockiness * maso * $gameTroop.membersNeededToBeSubdued().length;
		
		if(pleasureDamage > 0) {
			target.result().pleasureDamage = pleasureDamage;
			target.addToActorMasochismPleasureRecord(pleasureDamage);
			target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM);
		}
	}
	
	
	this.addToActorDogezaCountRecord();
	return 0;
};

Game_Actor.prototype.afterEval_karrynDogeza = function() {
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
	for(let i = 0; i < $gameTroop.membersNeededToBeSubdued().length; i++) {
		$gameTroop.membersNeededToBeSubdued()[i].addToEnemyGotDogezaCountRecord(this);
		$gameTroop.membersNeededToBeSubdued()[i].removeAngryState();
	}
};


////////
// Cautious Stance
/////////

Game_Actor.prototype.skillCost_cautiousStance = function() {
	return Math.max(1, Math.min(this._mp, Math.round( (1 + this._tempCombatStanceCost) * this.esc)));
};
Game_Actor.prototype.skillCost_cautiousStance_revitalize = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_revitalize(true)) * this.esc));
};
Game_Actor.prototype.skillCost_cautiousStance_secondWind = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_secondWind(true)) * this.esc));
};
Game_Actor.prototype.skillCost_cautiousStance_fixClothes = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_fixClothes(true)) * this.esc));
};

Game_Actor.prototype.showEval_cautiousStance = function() {
	return this.isInCombatPose() && this.hasEdict(EDICT_CAUTIOUS_STANCE);
};


Game_Actor.prototype.afterEval_cautiousStance = function() {
	this._tempCombatStanceCost++;
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
	this.gainEnergyExp(10, $gameTroop.getAverageEnemyExperienceLvl());
	
};

Game_Actor.prototype.cautiousStanceXParamRate = function(id) {
	let rate = 1;
	
	if(id === XPARAM_EVA_ID || id === XPARAM_CRIT_EVA_ID) {
		if(this.isStateAffected(STATE_CAUTIOUS_STANCE_ID) && this.isInCombatPose())
			rate *= 1.33;
	}

	return rate;
};


////////
// Defensive Stance
//////////

Game_Actor.prototype.skillCost_defStance = function() {
	return Math.max(1, Math.min(this._mp, Math.round( (1 + this._tempCombatStanceCost) * this.esc)));
};
Game_Actor.prototype.skillCost_defStance_revitalize = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_revitalize(true)) * this.esc));
};
Game_Actor.prototype.skillCost_defStance_secondWind = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_secondWind(true)) * this.esc));
};
Game_Actor.prototype.skillCost_defStance_fixClothes = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_fixClothes(true)) * this.esc));
};

Game_Actor.prototype.showEval_defStance = function() {
	return this.isInCombatPose() && this.hasEdict(EDICT_DEFENSIVE_STANCE);
};

Game_Actor.prototype.afterEval_defStance = function() {
	this._tempCombatStanceCost++;
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
	this.gainEnergyExp(10, $gameTroop.getAverageEnemyExperienceLvl());
};

Game_Actor.prototype.defStanceXParamPlus = function(id) {
	let value = 0;
	
	if(id === XPARAM_STA_REGEN_ID) {
		if(this.isInCombatPose() && this.isStateAffected(STATE_GUARD_ID) && this.hasEdict(EDICT_DEFENSIVE_STANCE_UPGRADE_I)) 
			value += 0.03;
	}
	
	return value;
};

Game_Actor.prototype.defStanceSParamRate = function(id) {
	let rate = 1;
	
	if(id === SPARAM_WPDEF_ID) {
		if(this.isInCombatPose() && this.isStateAffected(STATE_GUARD_ID)) {
			if(this.hasEdict(EDICT_DEFENSIVE_STANCE_UPGRADE_I)) rate *= 3.5;
			else rate *= 2.5;
		}
	}

	return rate;
};


//////////
// Counter Stance
//////////////

Game_Actor.prototype.skillCost_counterStance = function() {
	return Math.max(1, Math.min(this._mp, Math.round( (1 + this._tempCombatStanceCost) * this.esc)));
};
Game_Actor.prototype.skillCost_counterStance_revitalize = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_revitalize(true)) * this.esc));
};
Game_Actor.prototype.skillCost_counterStance_secondWind = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_secondWind(true)) * this.esc));
};
Game_Actor.prototype.skillCost_counterStance_fixClothes = function() {
	return Math.max(2, Math.round((1 + this._tempCombatStanceCost + this.skillCost_fixClothes(true)) * this.esc));
};

Game_Actor.prototype.showEval_counterStance = function() {
	return this.isInCombatPose() && this.hasEdict(EDICT_COUNTER_STANCE);
};

Game_Actor.prototype.afterEval_counterStance = function() {
	this._tempCombatStanceCost++;
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
	this.gainEnergyExp(20, $gameTroop.getAverageEnemyExperienceLvl());
};

Game_Actor.prototype.counterStanceXParamPlus = function(id) {
	let value = 0;
	
	if(id === XPARAM_CNT_ID) {
		if(this.isStateAffected(STATE_COUNTER_STANCE_ID) && this.isInCombatPose()) {
			value += 0.4;
			
			if(this.isUsingThisTitle(TITLE_ID_COUNTERATTACK_TWO))
				value += 0.25;
		}
	}

	return value;
};

Game_Actor.prototype.counterStanceSParamRate = function(id) {
	let rate = 1;
	
	if(id === SPARAM_WPATK_ID) {
		if(this.isStateAffected(STATE_COUNTER_STANCE_ID) && this.isInCombatPose() && this.hasEdict(EDICT_COUNTER_STANCE_UPGRADE_I))
			rate *= 1.4;
	}
	
	return rate;
};


//////////
// Endure Pleasure 
// Secretary Stance
//////////////

Game_Actor.prototype.skillCost_endurePleasure = function() {
	if(this._tempSecretaryStanceCostIncrease < 5)
		return Math.max(1, Math.min(this._mp, Math.round((1 + this._tempSecretaryStanceCostIncrease * 0.5) * this.esc)));
	else
		return Math.max(1, Math.min(this._mp, Math.round((this._tempSecretaryStanceCostIncrease * 1) * this.esc)));
};

Game_Actor.prototype.showEval_endurePleasure = function() {
	return (this.isInSexPose() || this.isInDownPose()) && !this.justOrgasmed();
};

Game_Actor.prototype.afterEval_endurePleasure = function() {
	this.gainEnergyExp(15 + this._tempSecretaryStanceCostIncrease * 5, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.increaseHornyStateTurns(-1);
	this._tempSecretaryStanceCostIncrease++;
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
};

Game_Actor.prototype.secretaryStanceEnemyPleasureFeedbackRate = function() {
	if(!this.isStateAffected(STATE_SECRETARY_STANCE_ID)) return 1;
	let rate = 1.7;
	rate -= this.slutLvl * 0.002;
	return Math.max(1.1, rate);
};

//////////
// Wait Out Pleasure 
// Lady Stance
//////////////

Game_Actor.prototype.skillCost_waitOutPleasure = function() {
	return Math.round((1 + this._tempLadyPleasureCostIncrease) * this.esc);
};

Game_Actor.prototype.showEval_waitOutPleasure = function() {
	return (this.isInSexPose() || this.isInDownPose()) && !this.justOrgasmed();
};

Game_Actor.prototype.afterEval_waitOutPleasure = function() {
	this.gainEnergyExp(15 + this._tempLadyPleasureCostIncrease * 10, $gameTroop.getAverageEnemyExperienceLvl());
	this._tempLadyPleasureCostIncrease++;
	this._tempSecretaryStanceCostIncrease = 0;
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
};


//////////
// Open Pleasure 
// Pleasure Stance
//////////////

Game_Actor.prototype.skillCost_openPleasure = function() {
	return 0;
};

Game_Actor.prototype.showEval_openPleasure = function(multiTurnVersion) {
	let hasPassive = this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID);
	
	if(multiTurnVersion) {
		if(!hasPassive) 
			return false;
	}
	else if(!hasPassive && this.energy > 0) 
		return false;
	
	return (this.isInSexPose() || this.isInDownPose()) && !this.justOrgasmed();
};

Game_Actor.prototype.afterEval_openPleasure = function(extraTurns) {
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
	
	if(extraTurns > 1) {
		this.setStateTurns(STATE_PLEASURE_STANCE_ID, extraTurns);
	}
};


////////
// Energy Conversion
////////////////

Game_Actor.prototype.convertSwallowToEnergy = function(ml) {
	let convertRate = 0;
	if(this.hasPassive(PASSIVE_SWALLOW_ML_FOUR_ID)) convertRate += 0.12;
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_TWO_ID)) convertRate += 0.12;
	
	return Math.ceil(ml * convertRate);
};

Game_Actor.prototype.convertPussyCreampieToEnergy = function(ml) {
	let convertRate = 0;
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID)) convertRate += 0.1;
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_TWO_ID)) convertRate += 0.1;
	
	return Math.ceil(ml * convertRate);
};

Game_Actor.prototype.convertAnalCreampieToEnergy = function(ml) {
	let convertRate = 0;
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID)) convertRate += 0.1;
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_TWO_ID)) convertRate += 0.1;
	
	return Math.ceil(ml * convertRate);
};

///////
// Skip Turn

Game_Actor.prototype.showEval_skipTurn = function() {
	if(this.energy > 0 || !this.isInCombatPose()) return false;
	
	if(this.stamina > this.skillCost_karrynSlash() || this.stamina > this.skillCost_karrynThrust() || this.stamina > this.skillCost_karrynStrike())
		return false;
	
	return true;
};

/////////
// Give Up & Surrender
///////////////

Game_Actor.prototype.showEval_giveUp = function() {
	if(!this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) return false;
	return !this.isInJobPose() && !this.hasNoStamina();
};
Game_Actor.prototype.afterEval_giveUp = function() {
	this._hp = 0;
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
};

Game_Actor.prototype.showEval_surrender = function() {
	if(!this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) return false;
	return !this.isInJobPose() && this.hasNoStamina();
};
Game_Actor.prototype.afterEval_surrender = function() {
	this._mp = 0;
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
};

/////////
// Special Skills
////////////

Game_Actor.prototype.showEval_regainFooting = function() {
	return this.isInCombatPose() && this.isOffBalance;
};
Game_Actor.prototype.customReq_regainFooting = function() {
	return this.isInCombatPose() && this.isOffBalance;
};
Game_Actor.prototype.afterEval_regainFooting = function() {
	this.removeState(STATE_OFFBALANCE_ID);
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
};

Game_Actor.prototype.showEval_getUp = function() {
	return this.isInDownFallDownPose();
};
Game_Actor.prototype.customReq_getUp = function() {
	return this.isInDownFallDownPose();
};
Game_Actor.prototype.afterEval_getUp = function() {
	this.removeState(STATE_FALLEN_ID);
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(false);
};