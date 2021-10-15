var Remtairy = Remtairy || {};
Remtairy.Battler = Remtairy.Battler || {};

const VAR_NO_ENERGY_STAMINA_DAMAGE = 0.3;
const VAR_AP_PER_END = 10;
const VAR_OP_PER_END = 30;
const VAR_AP_PER_CLVL = 5;
const VAR_OP_PER_CLVL = 15;

const VAR_STANCE_STRONG_HIT = 0.15;
const VAR_STANCE_WEAK_HIT = -0.1;
const VAR_STANCE_STRONG_DMG = 1.25;
const VAR_STANCE_WEAK_DMG = 0.85;

const VAR_CRITICAL_DAMAGE_MIN = 1.05;
const VAR_CRITICAL_DAMAGE_BASE = 1.33;

//=============================================================================
 /*:
 * @plugindesc Battler
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

var STANCE_NONE = 1;
var STANCE_SLASH = 2;
var STANCE_PIERCE = 3;
var STANCE_BLUNT = 4;
var STANCE_RANDOM = 5;

///////
//////////////////
// Game Battlerbase
///////////////////
//////////////

Remtairy.Battler.Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
	Remtairy.Battler.Game_BattlerBase_initMembers.call(this);
	this._fatigue = 0;
    this._will = 0;
	this._stench = 0;
	this._didNothing = false;
	this._didNothingCount = 1;
	this._arousalBasePoint = 0; 
	this._orgasmBasePoint = 0;
	this._baseTalkLvl = 0;
	this._baseSightLvl = 0;
	this._basePettingLvl = 0;
	this._baseToyLvl = 0;
	this._baseSemenLvl = 0;
	this._baseStripLvl = 0;
	this._baseKissLvl = 0;
	this._baseHandjobLvl = 0;
	this._baseBlowjobLvl = 0;
	this._baseFootjobLvl = 0;
	this._baseRimjobLvl = 0;
	this._baseTittyFuckLvl = 0;
	this._basePussySexLvl = 0;
	this._baseAnalSexLvl = 0;
	this._baseMasturbateLvl = 0;
	this._baseMasochismLvl = 0;
	this._baseSadismLvl = 0;
	this._wantedPoints = 0;
	this.setupDoNothingCounts();
	this.resetGotHitBySkillType();
	this.changeStanceToNone();
	this.orgasmLockOff();
	this._performingCollapse = false;
};

//Define Property
Object.defineProperty(Game_BattlerBase.prototype, "isKarryn", {
	get: function () { return false; }, configurable: true
});
Object.defineProperty(Game_BattlerBase.prototype, "isChatface", {
	get: function () { return false; }, configurable: true
});
Object.defineProperty(Game_BattlerBase.prototype, "isChatface_Karryn", {
	get: function () { return false; }, configurable: true
});

Object.defineProperty(Game_BattlerBase.prototype, "isHorny", {
	get: function () { return this.isStateAffected(STATE_HORNY_ID); }, configurable: true
});
Object.defineProperty(Game_BattlerBase.prototype, "isAngry", {
	get: function () { 
		return this.isStateAffected(STATE_ANGRY_ID) || this.isStateAffected(STATE_SLIME_ANGRY_ID) || this.isStateAffected(STATE_ORC_ANGRY_ID); 
	}, configurable: true
});
Object.defineProperty(Game_BattlerBase.prototype, "isConfident", {
	get: function () { return this.isStateAffected(STATE_CONFIDENT_ID); }, configurable: true
});
Object.defineProperty(Game_BattlerBase.prototype, "isOffBalance", {
	get: function () { return this.isStateAffected(STATE_OFFBALANCE_ID); }, configurable: true
});

Object.defineProperty(Game_BattlerBase.prototype, "isGuarding", {
	get: function () { return this.isStateAffected(STATE_GUARD_ID); }, configurable: true
});

Object.defineProperty(Game_BattlerBase.prototype, "str", { 
	get: function () { return this.atk; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "end", { 
	get: function () { return this.def; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "dex", { 
	get: function () { return this.mat; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "mind", { 
	get: function () { return this.mdf; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "charm", { 
	get: function () { return this.luk; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "stamina", { 
	get: function () { return this._hp; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "maxstamina", { 
	get: function () { return this.mhp; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "realMaxStamina", { 
	get: function () { return Math.round(this.mhp * (1 / this.fatigueMultipler())); }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "energy", { 
	get: function () { return this._mp; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "maxenergy", { 
	get: function () { return this.mmp; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "realMaxEnergy", { 
	get: function () { return Math.round(this.mmp * (1 / this.fatigueMultipler())); }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "will", { 
	get: function () { return this._will; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "maxwill", { 
	get: function () { return this.maxWill(); }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "pleasure", { 
	get: function () { return this.tp; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "wpatk", { 
	get: function () { return Math.round(this.mcr); }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "wpdef", { 
	get: function () { return Math.round(this.grd); }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "esc", { 
	get: function () { return this.pha; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "wsc", { 
	get: function () { return this.pdr; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "ssc", { 
	get: function () { return this.mdr; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "asc", { 
	get: function () { return this.fdr; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "graze", { 
	get: function () { return this.mev; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "staminaregen", { 
	get: function () { return this.hrg; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "energyregen", { 
	get: function () { return this.mrg; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "willregen", { 
	get: function () { return this.tcr; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "stench", { 
	get: function () { return this._stench; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "didNothingCount", { 
	get: function () { return this._didNothingCount; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "fatigue", { 
	get: function () { return this._fatigue; }, configurable: true 
});
Object.defineProperty(Game_BattlerBase.prototype, "isErect", { 
	get: function () { return this.isAroused() && DEBUG_MODE; }, configurable: true 
});


//Getters
Game_BattlerBase.prototype.talkLvl = function() {
	return this._baseTalkLvl;
};
Game_BattlerBase.prototype.sightLvl = function() {
	return this._baseSightLvl;
};
Game_BattlerBase.prototype.pettingLvl = function() {
	return this._basePettingLvl;
};
Game_BattlerBase.prototype.toyLvl = function() {
	return this._baseToyLvl;
};
Game_BattlerBase.prototype.semenLvl = function() {
	return this._baseSemenLvl;
};
Game_BattlerBase.prototype.stripLvl = function() {
	return this._baseStripLvl;
};

Game_BattlerBase.prototype.kissLvl = function() {
	return this._baseKissLvl;
};
Game_BattlerBase.prototype.handjobLvl = function() {
	return this._baseHandjobLvl;
};
Game_BattlerBase.prototype.blowjobLvl = function() {
	return this._baseBlowjobLvl;
};
Game_BattlerBase.prototype.rimjobLvl = function() {
	return this._baseRimjobLvl;
};
Game_BattlerBase.prototype.footjobLvl = function() {
	return this._baseFootjobLvl;
};
Game_BattlerBase.prototype.tittyFuckLvl = function() {
	return this._baseTittyFuckLvl;
};
Game_BattlerBase.prototype.pussySexLvl = function() {
	return this._basePussySexLvl;
};
Game_BattlerBase.prototype.analSexLvl = function() {
	return this._baseAnalSexLvl;
};
Game_BattlerBase.prototype.masturbateLvl = function() {
	return this._baseMasturbateLvl;
};
Game_BattlerBase.prototype.masochismLvl = function() {
	return this._baseMasochismLvl;
};
Game_BattlerBase.prototype.sadismLvl = function() {
	return this._baseSadismLvl;
};

///////
// Display Name
/////////////

Game_BattlerBase.prototype.displayName = function() {
	return this.name();
};

//////
// Param
////////

//Modified to ignore cache for charm for karryn
Game_BattlerBase.prototype.param = function(paramId) {
	this._baseParamCache = this._baseParamCache || [];
	if (this._baseParamCache[paramId] && (this.isActor() && paramId != PARAM_CHARM_ID)) return this._baseParamCache[paramId];
	var base = this.paramBase(paramId);
	var plus = this.paramPlus(paramId);
	var paramRate = this.paramRate(paramId);
	var buffRate = this.paramBuffRate(paramId);
	var flat = this.paramFlat(paramId);
	var minValue = this.paramMin(paramId);
	var maxValue = Math.max(minValue, this.paramMax(paramId));
	var a = this;
	var user = this;
	var subject = this;
	var b = this;
	var target = this;
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	var code = Yanfly.Param.BPCFormula[paramId];
	try {
	var value = eval(code);
	} catch (e) {
	var value = 0;
	Yanfly.Util.displayError(e, code, 'CUSTOM PARAM FORMULA ERROR');
	}
	value = Math.round(value.clamp(minValue, maxValue));
	this._baseParamCache[paramId] = value;
	return this._baseParamCache[paramId];
};

Game_BattlerBase.prototype.paramMin = function(paramId) {
    return 1;
};

/////
// Stamina
//////////

Game_BattlerBase.prototype.hasNoStamina = function() {
	return this.stamina === 0;
};

Game_BattlerBase.prototype.hasLessThanOneFourthStamina = function() {
	return this.stamina <= this.maxstamina * 0.25;
};

Game_BattlerBase.prototype.hasLessThanOneThirdStamina = function() {
	return this.stamina <= this.maxstamina * 0.33;
};

Game_BattlerBase.prototype.hasLessThanHalfStamina = function() {
	return this.stamina <= this.maxstamina * 0.5;
};

//returns whole numbers, divide by 100 for percent
Game_BattlerBase.prototype.currentPercentOfStamina = function() { 
	let value = Math.floor(this.stamina * 100 / this.maxstamina);
	if(value >= 100) value = 100;
	return value;
};

//returns whole numbers, divide by 100 for percent
//MaxHundred = don't return more than 100
Game_BattlerBase.prototype.getPercentOfStaminaFromValue = function(value, maxHundred) { 
	let percent = Math.floor(value * 100 / this.maxstamina);
	if(maxHundred) percent = Math.min(100, percent);
	return percent;
};

//returns whole numbers, divide by 100 for percent
Game_BattlerBase.prototype.currentPercentOfStamina_realMax = function() { 
	let value = Math.floor(this.stamina * 100 / this.realMaxStamina);
	if(value >= 100) value = 100;
	return value;
};

//////
// Fatigue
///////////

Game_BattlerBase.prototype.setFatigue = function(value) {
	this._fatigue = Math.min(100, Math.max(Math.round(value), 0));
	$gameScreen.setMapInfoRefreshNeeded();
};

Game_BattlerBase.prototype.gainFatigue = function(value) {
	this.setFatigue(this.fatigue + value);
};

Game_BattlerBase.prototype.recoverFatigue = function(value) {
	this.setFatigue(this.fatigue - value);
};

//Used for max stamina and max energy formulas
Game_BattlerBase.prototype.fatigueMultipler = function() {
    let value = (100 - this.fatigue) / 100;
	
	return Math.max(value,0.01);
};

////////
// Speed

Game_BattlerBase.prototype.bonusActionSpeed = function(item) {
    return 0;
};

Game_BattlerBase.prototype.actionSpeedRate = function(item) {
    return 1;
};

Remtairy.Battler.Game_Action_speed = Game_Action.prototype.speed;
Game_Action.prototype.speed = function() {
    let speed = Remtairy.Battler.Game_Action_speed.call(this);
	let speedRate = this.subject().actionSpeedRate(this.item());
    return speed * speedRate;
};

//////
// Will
//////
Game_BattlerBase.prototype.gainWill = function(value) {
    this.setWill(this.will + value);
};

Game_BattlerBase.prototype.setWill = function(will) {
    this._will = Math.round(will);
	this._will = this._will.clamp(0, this.maxwill);
};

//////////////
// Weapon Attack Weapon Defense
///////////////////

Game_BattlerBase.prototype.moddedWeaponAttack = function() {
    let moddedWpAtk = this.wpatk;
	
	return moddedWpAtk;
};

Game_BattlerBase.prototype.moddedWeaponDefense = function() {
    let moddedWpDef = this.wpdef;
	
	if(this.isGuarding) moddedWpDef *= 2;
	
	return moddedWpDef;
};

//////
// Critical
/////////

////////
// Critical Chance
// Critical Rate

Game_BattlerBase.prototype.criticalChanceFormula = function(target) {
	let value = this.cri - target.cev;
	value *= this.criticalChanceRate();
	value += this.criticalChanceBonus();
	return value;
};


Game_BattlerBase.prototype.criticalChanceRate = function() {
    let rate = 1;
	
	return rate;
};

Game_BattlerBase.prototype.criticalChanceBonus = function() {
    let bonus = 0;
	
	return bonus;
};

// Critical Damage
Game_BattlerBase.prototype.criticalDamageFormula = function(target, bonus) {
	let damageMultipler = 0;
	if(target)
		damageMultipler = Math.max(VAR_CRITICAL_DAMAGE_MIN, VAR_CRITICAL_DAMAGE_BASE + bonus + this.dex/200 - target.dex/200);
	else
		damageMultipler = VAR_CRITICAL_DAMAGE_BASE + bonus + this.dex/200;
	
	damageMultipler = (damageMultipler + this.criticalDamageBonus()) * this.criticalDamageRate();
	
	//console.log(damageMultipler);

	return damageMultipler;
};
Game_BattlerBase.prototype.criticalDamageRate = function() {
	let rate = 1;
	return rate;
};
Game_BattlerBase.prototype.criticalDamageBonus = function() {
    let bonus = 0;
	
	return bonus;
};

////////
// Stance
////////////

Game_BattlerBase.prototype.getStance = function() {
    return this._stance;
};
Game_BattlerBase.prototype.isSlashStance = function() {
    return this.getStance() === STANCE_SLASH;
};
Game_BattlerBase.prototype.isPierceStance = function() {
    return this.getStance() === STANCE_PIERCE;
};
Game_BattlerBase.prototype.isBluntStance = function() {
    return this.getStance() === STANCE_BLUNT;
};
Game_BattlerBase.prototype.isNoneStance = function() {
    return this.getStance() === STANCE_NONE;
};


Game_BattlerBase.prototype.setStance = function(stance) {
    this._stance = stance;
};
Game_BattlerBase.prototype.changeStanceToSlash = function() {
    this.setStance(STANCE_SLASH);
};
Game_BattlerBase.prototype.changeStanceToPierce = function() {
    this.setStance(STANCE_PIERCE);
};
Game_BattlerBase.prototype.changeStanceToBlunt = function() {
    this.setStance(STANCE_BLUNT);
};
Game_BattlerBase.prototype.changeStanceToNone = function() {
    this.setStance(STANCE_NONE);
};

Game_BattlerBase.prototype.changeStanceBySkill = function(item) {
	if(item.damage.type !== 1) return;

	let elementId = item.damage.elementId;
	if(elementId === ELEMENT_SLASH_ID)
		this.changeStanceToSlash();
	else if(elementId === ELEMENT_PIERCE_ID) 
		this.changeStanceToPierce();
	else if(elementId === ELEMENT_BLUNT_ID) 
		this.changeStanceToBlunt();
};

Game_BattlerBase.prototype.isInStrongStanceAgainstTarget = function(target) {
	if(this.isNoneStance()) return false;
	
	if(this.isSlashStance()) {
		if(target.isBluntStance() || target.isNoneStance()) {
			return true;
		}
	}
	else if(this.isPierceStance()) {
		if(target.isSlashStance() || target.isNoneStance()) {
			return true;
		}
	}
	else if(this.isBluntStance()) {
		if(target.isPierceStance() || target.isNoneStance()) {
			return true;
		}
	}
	
	return false;
};

Game_BattlerBase.prototype.isInSameStanceAsTarget = function(target) {
	return this.getStance() === target.getStance();
};

/////////////
// Stance Triangle
// Slash > Blunt > Pierce > Slash
// Adv: +15 hit, +25% damage Bad: -10 hit, -15% damage
// Used in hit accuracy formula
Game_BattlerBase.prototype.stanceHitAdv = function(target, item) {
	var elementId = item.damage.elementId;
	if(elementId !== ELEMENT_SLASH_ID && elementId !== ELEMENT_PIERCE_ID && elementId !== ELEMENT_BLUNT_ID && elementId !== STANCE_NONE) return 0;

	var neutral = this.isInSameStanceAsTarget(target);
	var strong = this.isInStrongStanceAgainstTarget(target);
	var weak = (!neutral && !strong);
	
	if(strong) return VAR_STANCE_STRONG_HIT;
	else if(weak) return VAR_STANCE_WEAK_HIT;
	else return 0;
};

Game_BattlerBase.prototype.stanceDmgAdv = function(target, elementId) {
	//var elementId = item.damage.elementId;
	if(elementId !== ELEMENT_SLASH_ID && elementId !== ELEMENT_PIERCE_ID && elementId !== ELEMENT_BLUNT_ID && elementId !== STANCE_NONE) {
		return 1;
	}

	let neutral = this.isInSameStanceAsTarget(target);
	let strong = this.isInStrongStanceAgainstTarget(target);
	let weak = (!neutral && !strong);
	
	if(strong) return VAR_STANCE_STRONG_DMG;
	else if(weak) return VAR_STANCE_WEAK_DMG;
	else return 1;
};

Game_BattlerBase.prototype.stanceBonusRate = function(elementId) {
	let bonusRate = 1;
	
	if(elementId === ELEMENT_SLASH_ID && this.isStateAffected(STATE_BONUS_SLASH_DMG_ID)) bonusRate += 0.5;
	else if (elementId === ELEMENT_PIERCE_ID && this.isStateAffected(STATE_BONUS_PIERCE_DMG_ID)) bonusRate += 0.5;
	else if (elementId === ELEMENT_BLUNT_ID && this.isStateAffected(STATE_BONUS_BLUNT_DMG_ID)) bonusRate += 0.5;

	return bonusRate;
};


/////
// Stench
//////////

Game_BattlerBase.prototype.setStench = function(stench) {
    this._stench = Math.max(Math.round(stench),0);
};
Game_BattlerBase.prototype.increaseStench = function(value) {
    this.setStench(this.stench + value);
};

/////////
// Slammed Cleaved Skewered
////////////

Game_BattlerBase.prototype.isSlammedThisBattle = function() {
	return this.isStateAffected(STATE_SLAMMED_THIS_BATTLE_ID);
};
Game_BattlerBase.prototype.isCleavedThisBattle = function() {
	return this.isStateAffected(STATE_CLEAVED_THIS_BATTLE_ID);
};
Game_BattlerBase.prototype.isSkeweredThisBattle = function() {
	return this.isStateAffected(STATE_SKEWERED_THIS_BATTLE_ID);
};

Game_BattlerBase.prototype.isSlammedThisTurn = function() {
	return this.isStateAffected(STATE_SLAMMED_THIS_TURN_ID);
};
Game_BattlerBase.prototype.isCleavedThisTurn = function() {
	return this.isStateAffected(STATE_CLEAVED_THIS_TURN_ID);
};
Game_BattlerBase.prototype.isSkeweredThisTurn = function() {
	return this.isStateAffected(STATE_SKEWERED_THIS_TURN_ID);
};


//////
// Do Nothing Skill
////////////

Game_BattlerBase.prototype.setupDoNothingCounts = function() {
	this._didNothing = false;
	this._enemyTurnCount = 0;
	this._didNothingCount = 0;
	this._didNothingCountThisBattle = 0;
};
Game_BattlerBase.prototype.doNothing = function() {
	this._didNothing = true;
	this._enemyTurnCount++;
	this._didNothingCountThisBattle++;
};
Game_BattlerBase.prototype.resetDidNothingCount = function() {
	this._didNothingCount = 0;
};

Game_BattlerBase.prototype.checkIfDidNothing = function() {
	if(this._didNothing) {
		this._didNothingCount++;
		this._didNothing = false;
	}
	else this.resetDidNothingCount();
};

/////////////
// Evade Reduction

Game_BattlerBase.prototype.resetEvadeReductionStage = function() {
	this._evadeReductionStage = 0;
};
Game_BattlerBase.prototype.increaseEvadeReductionStage = function() {
	this._evadeReductionStage = Math.min(2, this._evadeReductionStage + 1);
};
Game_BattlerBase.prototype.decreaseEvadeReductionStage = function() {
	this._evadeReductionStage = Math.max(0, this._evadeReductionStage - 1);
};
Game_BattlerBase.prototype.evadeReductionStageXParamRate = function() {
	let rate = 1;
	let eachStageEffect = 0.42;
	if(Prison.easyMode()) eachStageEffect = 0.69;
	rate -= eachStageEffect * this._evadeReductionStage;
	return Math.max(0.01, rate);
};

// Counter

Game_Battler.prototype.counterTotal = function() {
    return 2;
};

////////////
// Overblow Protection

Game_BattlerBase.prototype.overblowProtectionRate = function() {
	let op = 1;
	return op;
};
Game_BattlerBase.prototype.hasOverblowProtection = function() {
	return this.overblowProtectionRate() < 1;
};

/////////////
// Use AI Skill
//////////////

Game_BattlerBase.prototype.useAISkill = function(skillId, target) {
	if(!skillId) {
		console.error('useAISkill error: no skillId');
		return;
	}
	if(!target) {
		target = this._targetIndex;
	}
	if(!target) {
		console.error('useAISkill error: skill: ' + skillId + ' target: ' + target);
		return;
	}
	//console.log('useAISkill ' + skillId);
	BattleManager.queueForceAction(this, skillId, target);
};

//////
// Pleasure
////////////

Game_BattlerBase.prototype.arousalPoint = function() { 
	let value = this._arousalBasePoint + this.end * VAR_AP_PER_END;
	return value;
};
Game_BattlerBase.prototype.orgasmPoint = function() { 
	let value = this._orgasmBasePoint + this.end * VAR_OP_PER_END;
	return value;
};

Game_BattlerBase.prototype.isAroused = function() { 
	if(!DEBUG_MODE) return false;
	return this.pleasure >= this.arousalPoint(); 
};

//Generic Battlerbase version
Game_BattlerBase.prototype.setPleasure = function(value) { 
	this.setTp(Math.round(value)); 
};

Game_BattlerBase.prototype.gainPleasure = function(value, dontAddToResults) {
	if(!dontAddToResults) this._result.tpDamage = -value;
	this.setPleasure(this.pleasure + value);
};

Game_BattlerBase.prototype.setPleasureToArousalPoint = function() { 
	this.setPleasure(this.arousalPoint());
};
Game_BattlerBase.prototype.setPleasureToOrgasmPoint = function() { 
	this.setPleasure(this.orgasmPoint());
};

Game_BattlerBase.prototype.increaseArousalPoint = function(value) { 
	this._arousalBasePoint += value;
};
Game_BattlerBase.prototype.increaseOrgasmPoint = function(value) { 
	this._orgasmBasePoint += value;
};

Game_BattlerBase.prototype.reachedOrgasmPoint = function() { 
	if(!DEBUG_MODE) return false;
	return this.pleasure >= this.orgasmPoint(); 
};

Game_BattlerBase.prototype.isTwoThirdsWayToOrgasm = function() { 
	return this.currentPercentOfOrgasm(true) >= 66; 
};

Game_BattlerBase.prototype.getPercentOfOrgasmFromValue = function(value) { 
	let percent = Math.floor(value * 100 / this.orgasmPoint());
	return percent;
};

//whole value, inputting 2 is equal to 2%
Game_BattlerBase.prototype.getValueOfOrgasmFromPercent = function(percent) { 
	let value = Math.floor(percent * 0.01 * this.orgasmPoint());
	return value;
};

//oneMax = return max of 100
//returns whole numbers, divide by 100 for percent
Game_BattlerBase.prototype.currentPercentOfOrgasm = function(oneMax) { 
	let value = Math.floor(this.pleasure * 100 / this.orgasmPoint());
	if(value >= 100 && oneMax) value = 100;
	return value;
};

//oneMax = return max of 100
Game_BattlerBase.prototype.currentPercentOfArousal = function(oneMax) { 
	let value = Math.floor(this.pleasure * 100 / this.arousalPoint());
	if(value > 100 && oneMax) value = 100;
	return value;
};

// Just Got Hit By Skill

Game_BattlerBase.prototype.resetGotHitBySkillType = function() { 
	this._justGotHitBySkillType = 0;
};
Game_BattlerBase.prototype.justGotHitBySkillType = function(skillType) {
	this._justGotHitBySkillType = skillType;
};
Game_BattlerBase.prototype.didLastGetHitBySkillType = function(skillType) { 
	if(skillType === JUST_SKILLTYPE_ENEMY_TOY_PLAY) {
		return this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	}

	return this._justGotHitBySkillType === skillType;
};

Game_BattlerBase.prototype.masochismSensitivity = function() { 
	return 0;
};

//////
// State
///////

Game_BattlerBase.prototype.dontDisplayStateLogMessages = function() {
	return !this.isAlive();
};

//////////
// Horny
/////////

Game_BattlerBase.prototype.addHornyState = function() {
	
};
Game_BattlerBase.prototype.getHornyStateTurns = function() {
	return this.stateTurns(STATE_HORNY_ID);
};
Game_BattlerBase.prototype.increaseHornyStateTurns = function(value) {
	if(!this.isHorny) return;
	this.setStateTurns(STATE_HORNY_ID, this.getHornyStateTurns() + value);
};

//////////
// Stun Till End of Turn

Game_BattlerBase.prototype.addStunTillEndOfTurnState = function() {
	this.addState(STATE_STUN_TILL_TURN_END_ID);
};


Game_BattlerBase.prototype.startWarmups = function() {
	return;
};


///////////
///////////////
// Game Battler
//////////////
////////////

///////
// Regenerate
///////
/*
Game_Battler.prototype.regenerateHp = function() {
	if(this.stamina === 0) return;
	if(this.energy !== 0) {
		var value = Math.floor(this.maxstamina * this.staminaregen);
		if (value !== 0) {
			this.gainHp(value);
		}
	}
	else {
		if(this.isActor()) {
			var value = Math.floor(this.maxstamina * VAR_NO_ENERGY_STAMINA_DAMAGE);
		}
		else {
			var value = Math.floor(this.stamina);
		}
		this.gainHp(-value);
	}
};

Game_Battler.prototype.regenerateMp = function() {
	var value = Math.floor(this.maxenergy * this.energyregen);
	if (value !== 0) {
		this.gainMp(value);
	}
	if(this.isActor()) {
		this.regenerateWill();
		this.regenerateDesires();
		this.regenPussyJuice();
	}
	//regenerateTp aka pleasure is after this function
};

Game_Battler.prototype.regenerateWill = function() {
	var value = Math.floor(this.maxwill * this.willregen);
	if (value !== 0) {
		this.gainWill(value);
	}
};
*/
Game_Battler.prototype.regenerateDesires = function() {
	//Non Actors don't have desire bars.
	return;
};

//In Special Formulas Plugin
Game_Battler.prototype.willRegenMultipler = function() {
	return 1;
};


Game_Battler.prototype.setWillToMax = function() {
	this.setWill(this.maxwill);
};

/////////////
// Check For Orgasm
////////////////

Game_Battler.prototype.checkForOrgasm = function() {
	if(this.reachedOrgasmPoint() && !this.orgasmLocked()) {
		this.orgasm();
	}
};

Game_Battler.prototype.orgasmLocked = function() {
	return this._orgasmLock || this.isStateAffected(STATE_JUST_JOINED_ID);
};

Game_Battler.prototype.orgasmLockOn = function() {
	this._orgasmLock = true;
};
Game_Battler.prototype.orgasmLockOff = function() {
	this._orgasmLock = false;
};

/////////////
// Elemental Weakness
/////////////////

Game_Battler.prototype.weaknessToKiss = function() { 
	var value = this.elementRate(ELEMENT_KISS_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToPetting = function() { 
	var value = this.elementRate(ELEMENT_PETTING_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToHandjob = function() { 
	var value = this.elementRate(ELEMENT_HANDJOB_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToBlowjob = function() { 
	var value = this.elementRate(ELEMENT_BLOWJOB_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToRimjob = function() { 
	var value = this.elementRate(ELEMENT_RIMJOB_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToFootjob = function() { 
	var value = this.elementRate(ELEMENT_FOOTJOB_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToTittyFuck = function() { 
	var value = this.elementRate(ELEMENT_TITTYFUCK_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToPussy = function() { 
	var value = this.elementRate(ELEMENT_PUSSY_WEAK_ID);
	return value;
};
Game_Battler.prototype.weaknessToAnal = function() { 
	var value = this.elementRate(ELEMENT_ANAL_WEAK_ID);
	return value;
};

//////////
// Is there an XXX opponent
// For future, maybe separate functions for active battlers vs onlookers, etc
///////////

Game_Battler.prototype.isThereAnErectOpponent = function() {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isErect) {
			return true;
		}
	}
	return false;
};


Game_Battler.prototype.isThereValidTargetForMinionThrowAmmoLoading = function(thrower) {
	let group = this.friendsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if(opponent && thrower.name() != opponent.name() && opponent.isValidTargetForMinionThrowAmmoLoading()) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForKiss = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForKiss(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForCockStare = function() {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForCockStare(this)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForCockPetting = function() {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForCockPetting(this)) {
			return true;
		}
	}
	return false;
};


Game_Battler.prototype.isThereValidTargetForHandjob = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForHandjob(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForBlowjob = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForBlowjob(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForRimjob = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForRimjob(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForFootjob = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForFootjob(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForTittyFuck = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForTittyFuck(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForPussySex = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForPussySex(this, actorskill)) {
			return true;
		}
	}
	return false;
};

Game_Battler.prototype.isThereValidTargetForAnalSex = function(actorskill) {
	let group = this.opponentsUnit().aliveMembers();
	for (let i = 0; i < group.length; ++i) {
        let opponent = group[i];
        if (opponent && opponent.isValidTargetForAnalSex(this, actorskill)) {
			return true;
		}
	}
	return false;
};