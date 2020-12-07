var Remtairy = Remtairy || {};
Remtairy.EnemyLevel = Remtairy.EnemyLevel || {};

const ENEMY_LVL_BASE_EASY = 3; //unused
const ENEMY_LVL_BASE_NORMAL = 5; //unused
const ENEMY_LVL_BASE_HARD = 8; //unused

const ENEMY_LVL_PRISON_LEVEL_ONE_EASY = 3;
const ENEMY_LVL_PRISON_LEVEL_ONE_NORMAL = 4;
const ENEMY_LVL_PRISON_LEVEL_ONE_HARD = 6;

const ENEMY_LVL_PRISON_LEVEL_TWO_EASY = 8;
const ENEMY_LVL_PRISON_LEVEL_TWO_NORMAL = 12;
const ENEMY_LVL_PRISON_LEVEL_TWO_HARD = 14;

const ENEMY_LVL_PRISON_LEVEL_THREE_EASY = 16;
const ENEMY_LVL_PRISON_LEVEL_THREE_NORMAL = 22;
const ENEMY_LVL_PRISON_LEVEL_THREE_HARD = 24;

const ENEMY_LVL_PRISON_LEVEL_THREE_NORTH_PLUS = 4;

const ENEMY_LVL_PRISON_LEVEL_FOUR_EASY = 22;
const ENEMY_LVL_PRISON_LEVEL_FOUR_NORMAL = 22;
const ENEMY_LVL_PRISON_LEVEL_FOUR_HARD = 22;

const ENEMY_LVL_PRISON_LEVEL_FIVE_EASY = 35;
const ENEMY_LVL_PRISON_LEVEL_FIVE_NORMAL = 35;
const ENEMY_LVL_PRISON_LEVEL_FIVE_HARD = 35;

//Number of days until enemy lvl increases
const ENEMY_LVL_INCREASE_DAY_EASY = 13; 
const ENEMY_LVL_INCREASE_DAY_NORMAL = 7;
const ENEMY_LVL_INCREASE_DAY_HARD = 5;

const ENEMY_LVL_DAY_MAX_PERCENT = 0.5; //Max level increase from day count based on Karryn's level
const ENEMY_LVL_RIOT_MAX_PERCENT = 0.3; //Max level increase from riot based on Karryn's level

const ENEMY_METAL_SIZE_ONE_HP = 4;
const ENEMY_METAL_SIZE_BIG_HP = 6;

const GROWTH_TYPE_PRISONER = [
	[15, 0.04], //Stamina
	[0.2, 0.01], //Energy
	[0.9, 0.01], //Strength
	[0.7, 0.014], //Endurance
	[1.0, 0.01], //Dexterity
	[0.8, 0.01], //Mind
	[0.7, 0.01], //Agility
	[0.3, 0] //Charm
];

const GROWTH_TYPE_GOBLIN = [
	[9, 0.02], //Stamina
	[0.2, 0.01], //Energy
	[0.7, 0.01], //Strength
	[0.6, 0.01], //Endurance
	[1.15, 0.015], //Dexterity
	[0.4, 0.01], //Mind
	[1.4, 0.015], //Agility
	[0.4, 0] //Charm
];

const GROWTH_TYPE_THUG = [
	[20, 0.06], //Stamina
	[0.2, 0.01], //Energy
	[1.5, 0.015], //Strength
	[1.1, 0.013], //Endurance
	[0.9, 0.01], //Dexterity
	[0.4, 0.006], //Mind
	[0.75, 0.011], //Agility
	[0.4, 0] //Charm
];

const GROWTH_TYPE_GUARD = [
	[15, 0.06], //Stamina
	[0.3, 0], //Energy
	[1.1, 0.015], //Strength
	[0.7, 0.01], //Endurance
	[1.1, 0.012], //Dexterity
	[0.5, 0], //Mind
	[0.8, 0.01], //Agility
	[0.3, 0] //Charm
];

const GROWTH_TYPE_NERD = [
	[12, 0.04], //Stamina
	[0.5, 0], //Energy
	[0.6, 0.01], //Strength
	[0.7, 0.01], //Endurance
	[1.1, 0.01], //Dexterity
	[1.2, 0.015], //Mind
	[0.35, 0.01], //Agility
	[0.5, 0] //Charm
];

const GROWTH_TYPE_SLIME = [
	[30, 0.06], //Stamina
	[0.3, 0], //Energy
	[1.0, 0.01], //Strength
	[1.1, 0.01], //Endurance
	[1.3, 0.01], //Dexterity
	[0.3, 0], //Mind
	[1.3, 0.01], //Agility
	[0.1, 0] //Charm
];

const GROWTH_TYPE_ROGUE = [
	[9, 0.004], //Stamina
	[0.2, 0.01], //Energy
	[0.8, 0.01], //Strength
	[0.6, 0.01], //Endurance
	[1.4, 0.015], //Dexterity
	[0.6, 0.01], //Mind
	[1.0, 0.015], //Agility
	[0.4, 0] //Charm
];

const GROWTH_TYPE_HOMELESS = [
	[10, 0.004], //Stamina
	[0.4, 0.01], //Energy
	[0.8, 0.01], //Strength
	[0.7, 0.01], //Endurance
	[1.45, 0.015], //Dexterity
	[0.6, 0.01], //Mind
	[0.5, 0.015], //Agility
	[0.5, 0] //Charm
];

const GROWTH_TYPE_LIZARDMAN = [
	[14, 0.04], //Stamina
	[0.2, 0.01], //Energy
	[0.9, 0.01], //Strength
	[0.8, 0.01], //Endurance
	[0.9, 0.01], //Dexterity
	[0.5, 0.01], //Mind
	[0.8, 0.01], //Agility
	[0.3, 0] //Charm
];

const GROWTH_TYPE_ORC = [
	[25, 0.06], //Stamina
	[0.3, 0.01], //Energy
	[1.2, 0.011], //Strength
	[1.35, 0.011], //Endurance
	[0.8, 0.01], //Dexterity
	[0.4, 0.006], //Mind
	[0.7, 0.01], //Agility
	[0.5, 0] //Charm
];

const GROWTH_TYPE_BOSS = [
	[0, 0], //Stamina
	[0, 0], //Energy
	[0, 0], //Strength
	[0, 0], //Endurance
	[0, 0], //Dexterity
	[0, 0], //Mind
	[0, 0], //Agility
	[0, 0] //Charm
];

const GROWTH_TYPE_VISITOR = [
	[10, 0.004], //Stamina
	[0.2, 0.01], //Energy
	[0.5, 0.01], //Strength
	[0.9, 0.01], //Endurance
	[0.9, 0.015], //Dexterity
	[0.6, 0.01], //Mind
	[0.3, 0.015], //Agility
	[0.1, 0] //Charm
];

//=============================================================================
 /*:
 * @plugindesc Enemy Level
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
/////////////
// Game Enemy
//////////////
//////////////

Object.defineProperty(Game_Enemy.prototype, 'level', {
    get: function() {
        return this.enemyLvl();
    },
    configurable: true
});

Game_Enemy.prototype.paramBase = function(paramId) {
	if(paramId === PARAM_MAXSTAMINA_ID && this.hasMetalPrefix() && !Karryn.isInIgnoreMetalPropertiesPose()) {
		if(this.enemy().dataRowHeight === 1)
			return ENEMY_METAL_SIZE_ONE_HP;
		else
			return ENEMY_METAL_SIZE_BIG_HP;
	}
	
	if(this.isVisitorMaleType && paramId === PARAM_DEXTERITY_ID) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		if(actor) {
			return Math.round(this._lvldParams[paramId] + actor.end * 0.5);
		}
	}
	
	return this._lvldParams[paramId];
};

Game_Enemy.prototype.getGrowthRates = function() {
	let growth = [ [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
	
	if(this.isBossType) growth = GROWTH_TYPE_BOSS;
	else if(this.isPrisonerType) growth = GROWTH_TYPE_PRISONER;
	else if(this.isThugType) growth = GROWTH_TYPE_THUG;
	else if(this.isGuardType) growth = GROWTH_TYPE_GUARD;
	else if(this.isGoblinType) growth = GROWTH_TYPE_GOBLIN;
	else if(this.isNerdType) growth = GROWTH_TYPE_NERD;
	else if(this.isSlimeType) growth = GROWTH_TYPE_SLIME;
	else if(this.isRogueType) growth = GROWTH_TYPE_ROGUE;
	else if(this.isVisitorType) growth = GROWTH_TYPE_VISITOR;
	else if(this.isHomelessType) growth = GROWTH_TYPE_HOMELESS;
	else if(this.isLizardmanType) growth = GROWTH_TYPE_LIZARDMAN;
	else if(this.isOrcType) growth = GROWTH_TYPE_ORC;
	
	
	return growth;
};

Game_Enemy.prototype.setupEnemyLvl = function() {
	if(this.isBossType) {
		this._enemyBaseLvl = this.enemy().dataBaseEnemyLevel;
		this.setupLvldParams();
		return;
	}
	
	if(this.isWanted) {
		this._enemyBaseLvl = this.getWantedLvl();
		this._enemyBaseLvl += this.enemyLvl_difficultyDays();
	}
	else {
		this._enemyBaseLvl = this.enemyLvl_difficultyBase();
		this._enemyBaseLvl += Prison.getCurrentPrisonLevelEnemyLevelFromRioting();
		this._enemyBaseLvl += this.enemyLvl_difficultyDays();
		this._enemyBaseLvl = this.enemyLvl_guardAggression(); //don't += with this function
	}
	
	this.setupLvldParams();
};

Game_Enemy.prototype.enemyLvl_difficultyBase = function() {
	//if(Prison.easyMode()) return ENEMY_LVL_BASE_EASY + this.enemy().dataBaseEnemyLevel;
	//else if(Prison.normalMode()) return ENEMY_LVL_BASE_NORMAL + this.enemy().dataBaseEnemyLevel;
	//else if(Prison.hardMode()) return ENEMY_LVL_BASE_HARD + this.enemy().dataBaseEnemyLevel;
	
	if(Prison.currentlyPrisonLevelOne()) 
		return this.enemyLvl_difficultyBase_PrisonLevelOne();
	else if(Prison.currentlyPrisonLevelTwo()) 
		return this.enemyLvl_difficultyBase_PrisonLevelTwo();
	else if(Prison.currentlyPrisonLevelThree()) 
		return this.enemyLvl_difficultyBase_PrisonLevelThree();
	else if(Prison.currentlyPrisonLevelFour()) 
		return this.enemyLvl_difficultyBase_PrisonLevelFour();
	else if(Prison.currentlyPrisonLevelFive()) 
		return this.enemyLvl_difficultyBase_PrisonLevelFive();
	else return this.enemy().dataBaseEnemyLevel;
	
};

Game_Enemy.prototype.enemyLvl_difficultyBase_PrisonLevelOne = function() {
	let lvl = this.enemy().dataBaseEnemyLevel;
	if(Prison.easyMode()) lvl += ENEMY_LVL_PRISON_LEVEL_ONE_EASY;
	else if(Prison.normalMode()) lvl += ENEMY_LVL_PRISON_LEVEL_ONE_NORMAL;
	else if(Prison.hardMode()) lvl += ENEMY_LVL_PRISON_LEVEL_ONE_HARD;
	return lvl;
};

Game_Enemy.prototype.enemyLvl_difficultyBase_PrisonLevelTwo = function() {
	let lvl = this.enemy().dataBaseEnemyLevel;
	if(Prison.easyMode()) lvl += ENEMY_LVL_PRISON_LEVEL_TWO_EASY;
	else if(Prison.normalMode()) lvl += ENEMY_LVL_PRISON_LEVEL_TWO_NORMAL;
	else if(Prison.hardMode()) lvl += ENEMY_LVL_PRISON_LEVEL_TWO_HARD;
	return lvl;
};

Game_Enemy.prototype.enemyLvl_difficultyBase_PrisonLevelThree = function() {
	let lvl = this.enemy().dataBaseEnemyLevel;
	if(Prison.easyMode()) lvl += ENEMY_LVL_PRISON_LEVEL_THREE_EASY;
	else if(Prison.normalMode()) lvl += ENEMY_LVL_PRISON_LEVEL_THREE_NORMAL;
	else if(Prison.hardMode()) lvl += ENEMY_LVL_PRISON_LEVEL_THREE_HARD;
	
	let mapId = $gameMap._mapId;
	if(mapId === MAP_ID_SHOWER_BLOCK_NORTH || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL3_DEFEAT_SOLITARY_CELL || mapId === MAP_ID_CELL_BLOCK_NORTH_WEST || mapId === MAP_ID_CELL_BLOCK_NORTH_EAST || mapId === MAP_ID_COMMON_AREA_NORTH_EAST)
		lvl += ENEMY_LVL_PRISON_LEVEL_THREE_NORTH_PLUS;
	
	return lvl;
};

Game_Enemy.prototype.enemyLvl_difficultyBase_PrisonLevelFour = function() {
	let lvl = this.enemy().dataBaseEnemyLevel;
	if(Prison.easyMode()) lvl += ENEMY_LVL_PRISON_LEVEL_FOUR_EASY;
	else if(Prison.normalMode()) lvl += ENEMY_LVL_PRISON_LEVEL_FOUR_NORMAL;
	else if(Prison.hardMode()) lvl += ENEMY_LVL_PRISON_LEVEL_FOUR_HARD;
	return lvl;
};

Game_Enemy.prototype.enemyLvl_difficultyBase_PrisonLevelFive = function() {
	let lvl = this.enemy().dataBaseEnemyLevel;
	if(Prison.easyMode()) lvl += ENEMY_LVL_PRISON_LEVEL_FIVE_EASY;
	else if(Prison.normalMode()) lvl += ENEMY_LVL_PRISON_LEVEL_FIVE_NORMAL;
	else if(Prison.hardMode()) lvl += ENEMY_LVL_PRISON_LEVEL_FIVE_HARD;
	return lvl;
};

Game_Enemy.prototype.enemyLvl_difficultyDays = function() {
	let lvl = 0;
	let date = Prison.date;

	if(Prison.easyMode()) {
		lvl = Math.floor(date / ENEMY_LVL_INCREASE_DAY_EASY);
	}
	else if(Prison.normalMode()) {
		lvl = Math.floor(date / ENEMY_LVL_INCREASE_DAY_NORMAL);
	}
	else if(Prison.hardMode()) {
		lvl = Math.floor(date / ENEMY_LVL_INCREASE_DAY_HARD);
	}
	
	return Math.min(lvl, Math.round(Karryn.level * ENEMY_LVL_DAY_MAX_PERCENT));
};

Game_Enemy.prototype.enemyLvl_guardAggression = function() {
	let enemyLvl = this._enemyBaseLvl;
	if(this.isGuardType) {
		let guardAggression = Prison.guardAggression;
		let potentialLvl = Math.round(guardAggression * 0.5);
		if(Karryn.level < enemyLvl) enemyLvl += Math.round(potentialLvl * 0.2);
		else {
			let diff = Karryn.level - enemyLvl;
			enemyLvl += diff + Math.round((potentialLvl - diff) * 0.2);
		}
		
	}
	return enemyLvl;
};

Game_Enemy.prototype.setupLvldParams = function() {
	let growth = this.getGrowthRates();
	for(let i = 0; i < 8; i++) {
		let num = this.enemy().params[i];
		if(growth[i][0] != 0) num += growth[i][0] * this.enemyLvl();
		//if(growth[i][1] != 0) num *= (1 + growth[i][1] * this.enemyLvl());
		num += Math.random() * num / 20;
		this._lvldParams[i] = Math.round(num);
	}
};

Game_Enemy.prototype.enemyLvl = function() {
	return this._enemyBaseLvl;
};

Game_Enemy.prototype.enemyExperienceLvl = function() {
	let lvl = this.enemyLvl();
	let prefixType = this.getNamePrefixType();
	
	if(this.hasBadPrefix() || this.hasDrunkPrefix() || prefixType == ENEMY_PREFIX_HUNGRY || prefixType == ENEMY_PREFIX_STARVING)
		lvl -= Math.max(2, lvl*0.2);
	else if(prefixType == ENEMY_PREFIX_WEAK || prefixType == ENEMY_PREFIX_INEPT || prefixType == ENEMY_PREFIX_SLOW || prefixType == ENEMY_PREFIX_SENSITIVE)
		lvl -= Math.max(1, lvl*0.1);
	else if(prefixType == ENEMY_PREFIX_STRONG || prefixType == ENEMY_PREFIX_DEXTEROUS || prefixType == ENEMY_PREFIX_AGILE || prefixType == ENEMY_PREFIX_ENDURING || prefixType == ENEMY_PREFIX_HORNY)
		lvl += Math.max(1, lvl*0.1);
	else if(prefixType == ENEMY_PREFIX_BIG || prefixType == ENEMY_PREFIX_VIRGIN || prefixType == ENEMY_PREFIX_GOOD)
		lvl += Math.max(2, lvl*0.2);
	else if(prefixType == ENEMY_PREFIX_ELITE)
		lvl += Math.max(3, lvl*0.3);
	
	if(Prison.hardMode()) lvl *= 0.7;
	else if(Prison.easyMode()) lvl *= 1.15;
	
	return Math.max(1, Math.round(lvl));
};



//////// 
// Game Troop
//////////////

Game_Troop.prototype.getAverageEnemyExperienceLvl = function() {
	let totalLvl = 0;
	let count = 0;

	this.members().forEach(function(enemy) {
		if(enemy.isAppeared() && !enemy.isOnlooker) {
			count++;
			totalLvl += enemy.enemyExperienceLvl();
		}
	}, this);
	
	return Math.round(totalLvl / count);
};