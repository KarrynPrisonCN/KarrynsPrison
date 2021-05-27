var Remtairy = Remtairy || {};
Remtairy.KarrynWaitress = Remtairy.KarrynWaitress || {};

//敵の位置
const BAR_LEFT_SEAT_X = 232;
const BAR_RIGHT_SEAT_X = 615;
const BAR_TABLE_A_SEAT_Y = 245;
const BAR_TABLE_B_SEAT_Y = 355;
const BAR_TABLE_C_TOP_SEAT_Y = 470;
const BAR_TABLE_C_BOTTOM_SEAT_Y = 573;
const BAR_TABLE_D_SEAT_Y = 680;
//テーブルのステートアイコン
const BAR_TABLE_A_STATES_X = 365;
const BAR_TABLE_A_STATES_Y = 230;
const BAR_TABLE_B_STATES_X = 365;
const BAR_TABLE_B_STATES_Y = 336;
const BAR_TABLE_C_STATES_X = 375;
const BAR_TABLE_C_STATES_Y = 490;
const BAR_TABLE_D_STATES_X = 375;
const BAR_TABLE_D_STATES_Y = 683;
//テーブルの選択ボックス
const BAR_TABLE_A_SELECTION_WIDTH = 604;
const BAR_TABLE_A_SELECTION_HEIGHT = 115;
const BAR_TABLE_A_SELECTION_X_OFFSET = 63;
const BAR_TABLE_A_SELECTION_Y_OFFSET = -6;
const BAR_TABLE_B_SELECTION_WIDTH = 604;
const BAR_TABLE_B_SELECTION_HEIGHT = 115;
const BAR_TABLE_B_SELECTION_X_OFFSET = 63;
const BAR_TABLE_B_SELECTION_Y_OFFSET = 0;
const BAR_TABLE_C_SELECTION_WIDTH = 734;
const BAR_TABLE_C_SELECTION_HEIGHT = 203;
const BAR_TABLE_C_SELECTION_X_OFFSET = 51;
const BAR_TABLE_C_SELECTION_Y_OFFSET = -34;
const BAR_TABLE_D_SELECTION_WIDTH = 734;
const BAR_TABLE_D_SELECTION_HEIGHT = 203;
const BAR_TABLE_D_SELECTION_X_OFFSET = 51;
const BAR_TABLE_D_SELECTION_Y_OFFSET = -25;

const BATTLEBACK1_BAR_WAITRESS_SERVE_NAME = 'Bar_waitress';
const BATTLEBACK1_BAR_WAITRESS_SEX_NAME = 'Bar_waitress_sex';
const BATTLEBACK2_BAR_WAITRESS_SERVE_NAME = 'BarTables';

//=============================================================================
 /*:
 * @plugindesc Karryn Waitress
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const ITEM_SECOND_COST_ID = 2;

const WAITRESS_SKILL_START = 1667;
const WAITRESS_SKILL_END = 1698;

const WAITRESS_REP_DECAY_DAYS = 4;

const BAR_SPAWN_INTERVAL = 30;
const BAR_BASE_SPAWN_CHANCE = 0.005;
const BAR_STARTING_CUSTOMERS_DRINKING_CHANCE = 0.33;
const BAR_GET_SERVED_NORMAL_TIME_LIMIT = 80;
const BAR_GET_SERVED_TIPSY_TIME_LIMIT = 130;
const BAR_TAKE_ORDER_NORMAL_TIME_LIMIT = 70;
const BAR_TAKE_ORDER_TIPSY_TIME_LIMIT = 120;
const BAR_ANGRY_LEAVING_TIME_LIMIT = 120;
const BAR_JOKE_TIME_LIMIT = 90;
const BAR_TIME_LIMIT_BONUS_NUM_OF_CUSTOMERS = 10;
const BAR_UNTIL_NEXT_FLASH_REQUEST_NORMAL_TIME_LIMIT = 120;
const BAR_UNTIL_NEXT_FLASH_REQUEST_TIPSY_TIME_LIMIT = 60;
const BAR_UNTIL_NEXT_FLASH_REQUEST_DRUNK_TIME_LIMIT = 10; //Plus 20
const BAR_SLEEP_CHANCE_BASE = 50;
const BAR_SLEEP_CHANCE_DRUNK_PREFIX = 25;
const BAR_DEAD_DRUNK_STAY_CHANCE = 40;

const BAR_TOTAL_SEATS = 10;
const BAR_TABLE_A_LEFT_SEAT = 0;
const BAR_TABLE_A_RIGHT_SEAT = 1;
const BAR_TABLE_B_LEFT_SEAT = 2;
const BAR_TABLE_B_RIGHT_SEAT = 3;
const BAR_TABLE_C_TOP_LEFT_SEAT = 4;
const BAR_TABLE_C_TOP_RIGHT_SEAT = 5;
const BAR_TABLE_C_BOTTOM_LEFT_SEAT = 6;
const BAR_TABLE_C_BOTTOM_RIGHT_SEAT = 7;
const BAR_TABLE_D_LEFT_SEAT = 8;
const BAR_TABLE_D_RIGHT_SEAT = 9;

const ALCOHOL_TYPE_WATER = 1; //0
const ALCOHOL_TYPE_PALE_ALE = 5; //0
const ALCOHOL_TYPE_DARK_ALE = 6;  //2
const ALCOHOL_TYPE_VODKA = 10; //1
const ALCOHOL_TYPE_TEQUILA = 13; //3
const ALCOHOL_TYPE_GOLD_RUM = 15; //1
const ALCOHOL_TYPE_OVERPROOF_RUM = 18; //3
const ALCOHOL_TYPE_WHISKEY = 20; //2
const ALCOHOL_TYPE_SEMEN = 2; 

const ALCOHOL_CAPACITY_ALE = 8;
const ALCOHOL_CAPACITY_NON_ALE = 4;
const ALCOHOL_CAPACITY_SEMEN = 120;

const ALCOHOL_TYPE_NOTHING = 0;
const ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE = -1;
const ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO = -2;
const ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE = -3;
const ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO = -4;
const ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE = -5;

const ALCOHOL_TIPSY_THRESHOLD = 0.8;
const ALCOHOL_DRUNK_THRESHOLD = 0.6;
const ALCOHOL_DEAD_DRUNK_THRESHOLD = 0.3;

const BAR_LOCATION_STANDBY = 1;
const BAR_TABLE_A_ENEMY_ID = 116;
const BAR_TABLE_B_ENEMY_ID = 117;
const BAR_TABLE_C_ENEMY_ID = 118;
const BAR_TABLE_D_ENEMY_ID = 119;

const WILLPOWER_REJECT_ALCOHOL_COST = 15;
const WILLPOWER_REJECT_ALCOHOL_REGEN = 0.33;

//////////
// Game Party
///////////

Object.defineProperty(Game_Party.prototype, "isInWaitressBattle", {
	get: function () { return this._isInWaitressBattle; }, configurable: true
});
Game_Party.prototype.setIsInWaitressBattleFlag = function(status) {
	this._isInWaitressBattle = status;
};

Game_Party.prototype.setWaitressBattleTimeLimit = function(minutes) {
	if(minutes === 15) {
		this._waitressBattle_timeLimit = 900;
		this._waitressBattle_baseFatigueGain = 2;
	}
	else if(minutes === 20) {
		this._waitressBattle_timeLimit = 1200;
		this._waitressBattle_baseFatigueGain = 3;
	}
	else if(minutes === 25) {
		this._waitressBattle_timeLimit = 1500;
		this._waitressBattle_baseFatigueGain = 5;
	}
	else if(minutes === 30) {
		this._waitressBattle_timeLimit = 1800;
		this._waitressBattle_baseFatigueGain = 8;
	}
	else if(minutes === 10) {
		this._waitressBattle_timeLimit = 600;
		this._waitressBattle_baseFatigueGain = 1;
	}
	else if(minutes === 45) {
		this._waitressBattle_timeLimit = 2700;
		this._waitressBattle_baseFatigueGain = 12;
	}
	
	//this._waitressBattle_timeLimit = 21;
};

Object.defineProperty(Game_Party.prototype, "waitressBattleTimeChoice", {
	get: function () { 
		let choice = 0;
		let reputation = $gameParty._barReputation;
		
		let value = reputation;
		
		if(value >= 20)
			choice = 3;
		else if(value >= 10)
			choice = 2;
		else if(value >= 2)
			choice = 1;

		let maxLimit = 2;
		if($gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV4_ID)) { //temp todo change for full game
			maxLimit += 1;
		}

		return Math.min(maxLimit, choice);
		
	}, configurable: true
});

Game_Party.prototype.setBarReputation = function(value) {
	let minBarRep = this.getMinimumBarReputation();
	
	this._barReputation = Math.max(minBarRep, value);
	$gameVariables.setValue(VARIABLE_BAR_REPUTATION_ID, this._barReputation);
};
Game_Party.prototype.increaseBarReputation = function(value) {
	this.setBarReputation(this._barReputation + value);
};
Game_Party.prototype.getMinimumBarReputation = function() {
	let minBarRep = 0;
	if(Karryn.hasEdict(EDICT_HIRE_BAR_WAITERS)) minBarRep += 2; 
	return minBarRep;
};

Game_Party.prototype.preWaitressBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	BattleManager.setEnemySneakAttackBattle();
	this.preBattleSetup();
	$gameMap.changeBattleback(BATTLEBACK1_BAR_WAITRESS_SERVE_NAME, BATTLEBACK2_BAR_WAITRESS_SERVE_NAME);
	this.setIsInWaitressBattleFlag(true);
	this._showTopRightTimeNumberFlag = true;
	
	this.increaseFatigueGain(this._waitressBattle_baseFatigueGain);
	
	this._waitressBattle_currentTimeInSeconds = 0;
	
	this._waitressBattle_brawlDamage = 0;
	this._waitressBattle_customerSatisfaction = 0;

	actor.preWaitressBattleSetup();
	
	this.waitressBattle_setupStartingMugsAndGlasses();
	
};

Game_Party.prototype.postWaitressBattleCleanup  = function() {
	this.setIsInWaitressBattleFlag(false);
	this._showTopRightTimeNumberFlag = false;
	$gameSwitches.setValue(SWITCH_TODAY_WAITRESS_BATTLE_ID, true);
	
	if(this._waitressBattle_customerSatisfaction > 0) {
		let addRep = 1;
		if($gameParty._barReputation <= 12 && Math.randomInt(100) < this._waitressBattle_customerSatisfaction) addRep++;
		this.increaseBarReputation(addRep);
		$gameSwitches.setValue(SWITCH_TODAY_BAR_REP_UP_ID, true);
	}
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	actor.putOnGlovesAndHat();
	
	if(!$gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_ONE_ID)) {
		if(!actor.isTipsy && !actor.isDrunk && !actor.isDeadDrunk) {
			actor._playthroughRecordWaitressBattleCompletedSoberCount++;
		}
		actor._playthroughRecordWaitressBattleTotalShiftsCount++;
	}
	
	
	actor.resetAlcoholRate(true);
	actor.changeToWardenClothing();
	actor.waitressBattle_fullResetTray();
};

Game_Party.prototype.addWaitressTips = function(value) {
	if(!value) return;
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let multipler = 1;
	if(Karryn.hasThisTitle(TITLE_ID_HARDWORKING_WAITRESS)) {
		multipler += 0.25;
		if(Karryn.isUsingThisTitle(TITLE_ID_HARDWORKING_WAITRESS)) {
			multipler += 1;
		}
	}
	
	if(Karryn.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_THREE_ID)) 
		multipler += 0.75;
	else if(Karryn.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID)) 
		multipler += 0.33;
	
	if($gameParty._barReputation < 15)
		multipler += $gameParty._barReputation * 0.025;
	else
		multipler += 0.375;
	
	value = Math.ceil(value * multipler);

	if(value >= 1) {
		$gameParty.increaseExtraGoldReward(value);
		BattleManager._logWindow.push('addText', TextManager.waitressGetsTip.format(actor.displayName(), value));
		AudioManager.playSe({name:'Coin', pan:0, pitch:100, volume:70});
	}
};

Game_Party.prototype.increaseWaitressCustomerSatisfaction = function(value) {
	this._waitressBattle_customerSatisfaction += value;
};

Game_Party.prototype.waitressBattle_ongoingBrawl = function() {
	return $gameTroop.waitressBattle_brawlers().length > 1;
};

Game_Party.prototype.waitressBattle_increaseBrawlDamage = function(value) {
	let damage = value;
	
	if(Karryn.hasEdict(EDICT_BAR_INSURANCE_II)) damage *= 0.2; 
	else if(Karryn.hasEdict(EDICT_BAR_INSURANCE_I)) damage *= 0.5; 
	

	damage = Math.round(damage);
	if(damage > 0) {
		this._waitressBattle_brawlDamage += damage;
		$gameParty.increaseExtraGoldReward(-damage);
		BattleManager._logWindow.push('addText', TextManager.waitressBarDamage.format(damage));
		AudioManager.playSe({name:'+Waitress_Braw1', pan:0, pitch:100, volume:70});
	}
};

//Bar Income
Game_Party.prototype.getBarIncome = function() {
	let barIncome = 0;
	
	if(Karryn.hasEdict(EDICT_REPAIR_BAR)) barIncome += 150;
	else return 0;
	
	if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_III)) barIncome += 450;
	else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II)) barIncome += 250;
	else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_I)) barIncome += 100;
	if(Karryn.hasEdict(EDICT_DONT_PAY_WAITERS)) barIncome -= 70;
	else if(Karryn.hasEdict(EDICT_USE_INMATE_WAITERS)) barIncome -= 30;
	
	
	if(Karryn.hasEdict(EDICT_LIZARDMEN_FREE_DRINKS)) barIncome *= 0.7;
	
	barIncome *= this.getBarReputationIncomeMultipler();
	return Math.round(barIncome);
};

Game_Party.prototype.getBarReputationIncomeMultipler = function() {
	let multipler = 1;
	
	if(this._barReputation >= 10) {
		multipler += 0.4 + (this._barReputation - 10) * 0.01;
	}
	else {
		multipler += this._barReputation * 0.04;
	}
	return multipler;
};

Game_Party.prototype.waitressBattle_getCurrentTimeInSeconds = function() {
	return this._waitressBattle_currentTimeInSeconds;
};

Game_Party.prototype.waitressBattle_getTimeMinutesNumber = function() {
	let timeLimit = this._waitressBattle_timeLimit - this._waitressBattle_currentTimeInSeconds;
	let minutes = Math.floor(timeLimit / 60);
	let seconds = timeLimit - minutes * 60;
	return minutes;
};
Game_Party.prototype.waitressBattle_getTimeSecondsNumber = function() {
	if($gameParty.waitressBattle_getCurrentTimeInSeconds() >= $gameParty._waitressBattle_timeLimit)
		return 0;
	let minutes = Math.floor(this._waitressBattle_currentTimeInSeconds / 60);
	let seconds = this._waitressBattle_currentTimeInSeconds - minutes * 60;
	if(seconds > 0) seconds = 60 - seconds;
	return seconds;
};

Game_Party.prototype.waitressBattle_advanceTimeBySeconds = function(value) {
	this._waitressBattle_currentTimeInSeconds += value;
};

Game_Party.prototype.waitressBattle_setupStartingMugsAndGlasses = function() {
	this.waitressBattle_setAvailableMugs(this.waitressBattle_startingMugs());
	this.waitressBattle_setAvailableGlasses(this.waitressBattle_startingGlasses());
};

Game_Party.prototype.waitressBattle_startingMugs = function() {
	let startingMugs = 8;
	
	if(Karryn.hasEdict(EDICT_BAR_GLASSWARE_III)) {
		startingMugs += 6;
	}
	else if(Karryn.hasEdict(EDICT_BAR_GLASSWARE_II)) {
		startingMugs += 4;
	}
	else if(Karryn.hasEdict(EDICT_BAR_GLASSWARE_I)) {
		startingMugs += 2;
	}
	
	return startingMugs;
};
Game_Party.prototype.waitressBattle_startingGlasses = function() {
	let startingGlasses = 10;
	
	if(Karryn.hasEdict(EDICT_BAR_GLASSWARE_III)) {
		startingGlasses += 9;
	}
	else if(Karryn.hasEdict(EDICT_BAR_GLASSWARE_II)) {
		startingGlasses += 6;
	}
	else if(Karryn.hasEdict(EDICT_BAR_GLASSWARE_I)) {
		startingGlasses += 3;
	}
	
	return startingGlasses;
};

Game_Party.prototype.waitressBattle_setAvailableMugs = function(num) {
	this._waitressBattle_availableMugs = num;
	$gameActors.actor(ACTOR_KARRYN_ID).setStateCounter(STATE_AVAILABLE_MUGS_ID, this._waitressBattle_availableMugs);
};
Game_Party.prototype.waitressBattle_setAvailableGlasses = function(num) {
	this._waitressBattle_availableGlasses = num;
	$gameActors.actor(ACTOR_KARRYN_ID).setStateCounter(STATE_AVAILABLE_GLASSES_ID, this._waitressBattle_availableGlasses);
};

Game_Party.prototype.waitressBattle_increaseAvailableMugs = function(num) {
	this.waitressBattle_setAvailableMugs(this._waitressBattle_availableMugs + num);
};
Game_Party.prototype.waitressBattle_increaseAvailableGlasses = function(num) {
	this.waitressBattle_setAvailableGlasses(this._waitressBattle_availableGlasses + num);
};

Game_Party.prototype.waitressBattle_thereAreNoMoreMugsOrGlasses = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	if(!actor.waitressBattle_isTrayEmpty()) return false;
	if($gameTroop._tableA._dirtyMugs + $gameTroop._tableA._dirtyGlasses > 0) return false;
	if($gameTroop._tableB._dirtyMugs + $gameTroop._tableB._dirtyGlasses > 0) return false;
	if($gameTroop._tableC._dirtyMugs + $gameTroop._tableC._dirtyGlasses > 0) return false;
	if($gameTroop._tableD._dirtyMugs + $gameTroop._tableD._dirtyGlasses > 0) return false;
	
	return this._waitressBattle_availableMugs + this._waitressBattle_availableGlasses === 0;
};

//////////
// Game BattlerBase
///////////

Object.defineProperty(Game_Enemy.prototype, "isTipsy", { 
	get: function () { return (this.hp / this.mhp) < ALCOHOL_TIPSY_THRESHOLD; }, configurable: true 
});
Object.defineProperty(Game_Enemy.prototype, "isDrunk", { 
	get: function () { return (this.hp / this.mhp) < ALCOHOL_DRUNK_THRESHOLD; }, configurable: true 
});
Object.defineProperty(Game_Enemy.prototype, "isDeadDrunk", { 
	get: function () { return (this.hp / this.mhp) < ALCOHOL_DEAD_DRUNK_THRESHOLD; }, configurable: true 
});


//////////
// Game Actor
///////////

Object.defineProperty(Game_Actor.prototype, "isTipsy", { 
	get: function () { return (1 - this.getAlcoholRate()) < ALCOHOL_TIPSY_THRESHOLD; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "isDrunk", { 
	get: function () { return (1 - this.getAlcoholRate()) < ALCOHOL_DRUNK_THRESHOLD; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "isDeadDrunk", { 
	get: function () { return (1 - this.getAlcoholRate()) < ALCOHOL_DEAD_DRUNK_THRESHOLD; }, configurable: true 
});

Game_Actor.prototype.getAlcoholRate = function() {
	return this._alcoholDamage / this.maxstamina;
};
Game_Actor.prototype.resetAlcoholRate = function(addFatigue) {
	if(addFatigue) {
		if(this.isDeadDrunk)
			this.gainFatigue(5 * this.fatigueGainRate());
		else if(this.isDrunk)
			this.gainFatigue(2 * this.fatigueGainRate());
		else if(this.isTipsy)
			this.gainFatigue(1 * this.fatigueGainRate());
	}
	
	this._alcoholDamage = 0;
};

Game_Actor.prototype.isNotAcceptingAnyAlcohol = function() {
	return this.isStateAffected(STATE_ACCEPTING_NO_ALCOHOL_ID) && this.will >= this.rejectAlcoholWillCost();
};
Game_Actor.prototype.rejectAlcoholWillCost = function() {
	return Math.round(WILLPOWER_REJECT_ALCOHOL_COST * (1 + this.getFatigueLevel() * 0.1) * this.wsc);
};

////////
// Setup
///////////

Game_Actor.prototype.preWaitressBattleSetup = function() {
	this._tempGotDrunkThisBattle = false;
	this._hornyTimeLimit = -1;
	this.resetAlcoholRate(false);
	this._barLocation = BAR_LOCATION_STANDBY;
	this.waitressBattle_fullResetTray();
	this._barTray_dirtyMugsCount = 0;
	this._barTray_dirtyGlassesCount = 0;
	this._karrynMugContent = ALCOHOL_TYPE_PALE_ALE;
	this._karrynMugAmount = ALCOHOL_CAPACITY_ALE;
	
	this.changeToWaitressClothing();
	this.takeOffGlovesAndHat();
	this.setWaitressServingPose();
	
	this.setupDesires();
	this._recordBarWaitressBattleCount++;
	this._playthroughRecordBarWaitressBattleCount++;
	
	this.addState(STATE_ACCEPTING_NO_ALCOHOL_ID);
	this.addState(STATE_AVAILABLE_MUGS_ID);
	this.addState(STATE_AVAILABLE_GLASSES_ID);
	this.removeState(STATE_CONFIDENT_ID);
	this.emoteWaitressServingPose();
};

////////
// Time

Game_Actor.prototype.advanceTimeBySeconds = function(second) {
	if(this.isInWaitressServingPose()) {
		if(this.isDeadDrunk) second += 5;
		else if(this.isDrunk) second += 3;
		else if(this.isTipsy) second += 1;
		if(this.isAroused()) second += 1;
		if(this.isWet) second += 1;
		if(this.isHorny) second += 1;
		if(this.hasThisTitle(TITLE_ID_EXPERIENCED_WAITRESS)) second -= 1;
		if(this.isUsingThisTitle(TITLE_ID_EXPERIENCED_WAITRESS)) second -= 2;
		$gameParty.waitressBattle_advanceTimeBySeconds(second);
	}
};

/////////
// Tray
/////////

Game_Actor.prototype.waitressBattle_fullResetTray = function() {
	this._barTrayA = ALCOHOL_TYPE_NOTHING;
	this._barTrayB = ALCOHOL_TYPE_NOTHING;
	this._barTrayC = ALCOHOL_TYPE_NOTHING;
};
Game_Actor.prototype.waitressBattle_resetTray = function(dirtyOnly, droppingTray) {
	if(!droppingTray) {
		$gameParty.waitressBattle_increaseAvailableMugs(this._barTray_dirtyMugsCount);
		$gameParty.waitressBattle_increaseAvailableGlasses(this._barTray_dirtyGlassesCount);
	}
	else if(droppingTray) {
		$gameParty.increaseExtraGoldReward(-this._barTray_dirtyMugsCount * 2);
		$gameParty.increaseExtraGoldReward(-this._barTray_dirtyGlassesCount * 3);
		if(this._barTray_dirtyMugsCount > 0 || this._barTray_dirtyGlassesCount > 0)
			this._playthroughRecordWaitressDroppedTrayCount++;
	}
	this._barTray_dirtyMugsCount = 0;
	this._barTray_dirtyGlassesCount = 0;
	
	if(this._barTrayA === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE || this._barTrayA === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO || this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE || this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO || this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE) {
		this._barTrayA = ALCOHOL_TYPE_NOTHING;
	}
	if(this._barTrayB === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE || this._barTrayB === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO || this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE || this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO || this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE) {
		this._barTrayB = ALCOHOL_TYPE_NOTHING;
	}
	if(this._barTrayC === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE || this._barTrayC === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO || this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE || this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO || this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE) {
		this._barTrayC = ALCOHOL_TYPE_NOTHING;
	}

	if(!dirtyOnly) {
		if(this._barTrayA === ALCOHOL_TYPE_PALE_ALE || this._barTrayA === ALCOHOL_TYPE_DARK_ALE) {
			if(!droppingTray)
				$gameParty.waitressBattle_increaseAvailableMugs(1);
		}
		if(this._barTrayB === ALCOHOL_TYPE_PALE_ALE || this._barTrayB === ALCOHOL_TYPE_DARK_ALE) {
			if(!droppingTray)
				$gameParty.waitressBattle_increaseAvailableMugs(1);
		}
		if(this._barTrayC === ALCOHOL_TYPE_PALE_ALE || this._barTrayC === ALCOHOL_TYPE_DARK_ALE) {
			if(!droppingTray)
				$gameParty.waitressBattle_increaseAvailableMugs(1);
		}
		
		if(this._barTrayA === ALCOHOL_TYPE_VODKA || this._barTrayA === ALCOHOL_TYPE_WHISKEY || this._barTrayA === ALCOHOL_TYPE_GOLD_RUM || this._barTrayA === ALCOHOL_TYPE_TEQUILA || this._barTrayA === ALCOHOL_TYPE_OVERPROOF_RUM || this._barTrayA === ALCOHOL_TYPE_WATER) {
			if(!droppingTray)
				$gameParty.waitressBattle_increaseAvailableGlasses(1);
		}
		if(this._barTrayB === ALCOHOL_TYPE_VODKA || this._barTrayB === ALCOHOL_TYPE_WHISKEY || this._barTrayB === ALCOHOL_TYPE_GOLD_RUM || this._barTrayB === ALCOHOL_TYPE_TEQUILA || this._barTrayB === ALCOHOL_TYPE_OVERPROOF_RUM || this._barTrayB === ALCOHOL_TYPE_WATER) {
			if(!droppingTray)
				$gameParty.waitressBattle_increaseAvailableGlasses(1);
		}
		if(this._barTrayC === ALCOHOL_TYPE_VODKA || this._barTrayC === ALCOHOL_TYPE_WHISKEY || this._barTrayC === ALCOHOL_TYPE_GOLD_RUM || this._barTrayC === ALCOHOL_TYPE_TEQUILA || this._barTrayC === ALCOHOL_TYPE_OVERPROOF_RUM || this._barTrayC === ALCOHOL_TYPE_WATER) {
			if(!droppingTray)
				$gameParty.waitressBattle_increaseAvailableGlasses(1);
		}
		
		if(this._barTrayA > 1) $gameParty.increaseExtraGoldReward(-this._barTrayA * 0.3);
		if(this._barTrayB > 1) $gameParty.increaseExtraGoldReward(-this._barTrayB * 0.3);
		if(this._barTrayC > 1) $gameParty.increaseExtraGoldReward(-this._barTrayC * 0.3);
		
		this.waitressBattle_fullResetTray();
	}
	
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.waitressBattle_isTrayFull = function() {
	let isFull = true;
	if(this._barTrayA === ALCOHOL_TYPE_NOTHING || this._barTrayB === ALCOHOL_TYPE_NOTHING || this._barTrayC === ALCOHOL_TYPE_NOTHING) isFull = false;
	return isFull;
};
Game_Actor.prototype.waitressBattle_isTrayEmpty = function() {
	let isEmpty = true;
	if(this._barTrayA !== ALCOHOL_TYPE_NOTHING || this._barTrayB !== ALCOHOL_TYPE_NOTHING || this._barTrayC !== ALCOHOL_TYPE_NOTHING) isEmpty = false;
	return isEmpty;
};
Game_Actor.prototype.waitressBattle_doesTrayHaveDirtyGlasses = function() {
	return this._barTray_dirtyMugsCount > 0 || this._barTray_dirtyGlassesCount > 0;
};

Game_Actor.prototype.waitressBattle_addDrinkToTray = function(drink) {
	if(this._barTrayA === ALCOHOL_TYPE_NOTHING) this._barTrayA = drink;
	else if(this._barTrayB === ALCOHOL_TYPE_NOTHING) this._barTrayB = drink;
	else if(this._barTrayC === ALCOHOL_TYPE_NOTHING) this._barTrayC = drink;
	else console.log('error: waitressBattle_addToTray: ' + drink);
	
	this.emoteWaitressServingPose();
};
Game_Actor.prototype.waitressBattle_removeDrinkFromTray = function(drink) {
	if(this._barTrayA === drink) this._barTrayA = ALCOHOL_TYPE_NOTHING;
	else if(this._barTrayB === drink) this._barTrayB = ALCOHOL_TYPE_NOTHING;
	else if(this._barTrayC === drink) this._barTrayC = ALCOHOL_TYPE_NOTHING;
	else console.log('error: waitressBattle_removeTray: ' + drink);
	
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.showEval_trayContents = function() {
	return !this.waitressBattle_isTrayEmpty();
};
Game_Actor.prototype.trayContentsText = function() {
	let text = '';
	text += this.trayContentsText_line(this._barTrayA);
	text += this.trayContentsText_line(this._barTrayB);
	text += this.trayContentsText_line(this._barTrayC);
	return text;
};
Game_Actor.prototype.trayContentsText_line = function(alcoholType) {
	let text = TextManager.alcoholName(alcoholType);
	if(text) text += '\n';
	return text;
};

Game_Actor.prototype.setTachieTrayContents = function() {
	this.setTachieRightArm('holdingtray_1');
	
	if(this._barTrayA === ALCOHOL_TYPE_NOTHING) 
		this.resetTachieFrontC();
	else if(this._barTrayA === ALCOHOL_TYPE_PALE_ALE)
		this.setTachieFrontC('paleale');
	else if(this._barTrayA === ALCOHOL_TYPE_DARK_ALE)
		this.setTachieFrontC('darkale');
	else if(this._barTrayA === ALCOHOL_TYPE_VODKA || this._barTrayA === ALCOHOL_TYPE_TEQUILA || this._barTrayA === ALCOHOL_TYPE_WATER)
		this.setTachieFrontC('whiteglass');
	else if(this._barTrayA === ALCOHOL_TYPE_GOLD_RUM || this._barTrayA === ALCOHOL_TYPE_OVERPROOF_RUM  || this._barTrayA === ALCOHOL_TYPE_WHISKEY)
		this.setTachieFrontC('orangeglass');
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE)
		this.setTachieFrontC('usedmug1');
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO)
		this.setTachieFrontC('usedmug2');
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE)
		this.setTachieFrontC('usedglass1');
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO)
		this.setTachieFrontC('usedglass2');
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE)
		this.setTachieFrontC('usedglass3');
	
	if(this._barTrayB === ALCOHOL_TYPE_NOTHING) 
		this.resetTachieFrontD();
	else if(this._barTrayB === ALCOHOL_TYPE_PALE_ALE)
		this.setTachieFrontD('paleale');
	else if(this._barTrayB === ALCOHOL_TYPE_DARK_ALE)
		this.setTachieFrontD('darkale');
	else if(this._barTrayB === ALCOHOL_TYPE_VODKA || this._barTrayB === ALCOHOL_TYPE_TEQUILA || this._barTrayB === ALCOHOL_TYPE_WATER)
		this.setTachieFrontD('whiteglass');
	else if(this._barTrayB === ALCOHOL_TYPE_GOLD_RUM || this._barTrayB === ALCOHOL_TYPE_OVERPROOF_RUM  || this._barTrayB === ALCOHOL_TYPE_WHISKEY)
		this.setTachieFrontD('orangeglass');
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE)
		this.setTachieFrontD('usedmug1');
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO)
		this.setTachieFrontD('usedmug2');
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE)
		this.setTachieFrontD('usedglass1');
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO)
		this.setTachieFrontD('usedglass2');
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE)
		this.setTachieFrontD('usedglass3');
	
	if(this._barTrayC === ALCOHOL_TYPE_NOTHING) 
		this.resetTachieFrontE();
	else if(this._barTrayC === ALCOHOL_TYPE_PALE_ALE)
		this.setTachieFrontE('paleale');
	else if(this._barTrayC === ALCOHOL_TYPE_DARK_ALE)
		this.setTachieFrontE('darkale');
	else if(this._barTrayC === ALCOHOL_TYPE_VODKA || this._barTrayC === ALCOHOL_TYPE_TEQUILA || this._barTrayC === ALCOHOL_TYPE_WATER)
		this.setTachieFrontE('whiteglass');
	else if(this._barTrayC === ALCOHOL_TYPE_GOLD_RUM || this._barTrayC === ALCOHOL_TYPE_OVERPROOF_RUM  || this._barTrayC === ALCOHOL_TYPE_WHISKEY)
		this.setTachieFrontE('orangeglass');
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE)
		this.setTachieFrontE('usedmug1');
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO)
		this.setTachieFrontE('usedmug2');
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE)
		this.setTachieFrontE('usedglass1');
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO)
		this.setTachieFrontE('usedglass2');
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE)
		this.setTachieFrontE('usedglass3');
};

Game_Actor.prototype.showEval_clearTrayDirty = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.waitressBattle_doesTrayHaveDirtyGlasses();
};
Game_Actor.prototype.afterEval_clearTrayDirty = function() {
	this.waitressBattle_resetTray(true, false);
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.showEval_clearTrayAll = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && !this.waitressBattle_isTrayEmpty();
};
Game_Actor.prototype.afterEval_clearTrayAll = function() {
	this.waitressBattle_resetTray(false, false);
	this.emoteWaitressServingPose();
};

///////
// Add Drinks

Game_Actor.prototype.showEval_trayAddWater = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.customReq_trayAddWater = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableGlasses > 0;
};
Game_Actor.prototype.afterEval_trayAddWater = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_WATER);
	$gameParty.waitressBattle_increaseAvailableGlasses(-1);
};

Game_Actor.prototype.showEval_trayAddPaleAle = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.customReq_trayAddPaleAle = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableMugs > 0;
};
Game_Actor.prototype.afterEval_trayAddPaleAle = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_PALE_ALE);
	$gameParty.waitressBattle_increaseAvailableMugs(-1);
};

Game_Actor.prototype.showEval_trayAddDarkAle = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.hasEdict(EDICT_BAR_DRINK_MENU_II);
};
Game_Actor.prototype.customReq_trayAddDarkAle = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableMugs > 0;
};
Game_Actor.prototype.afterEval_trayAddDarkAle = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_DARK_ALE);
	$gameParty.waitressBattle_increaseAvailableMugs(-1);
};

Game_Actor.prototype.showEval_trayAddVodka = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.hasEdict(EDICT_BAR_DRINK_MENU_I);
};
Game_Actor.prototype.customReq_trayAddVodka = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableGlasses > 0;
};
Game_Actor.prototype.afterEval_trayAddVodka = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_VODKA);
	$gameParty.waitressBattle_increaseAvailableGlasses(-1);
};

Game_Actor.prototype.showEval_trayAddTequila = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.hasEdict(EDICT_BAR_DRINK_MENU_III);
};
Game_Actor.prototype.customReq_trayAddTequila = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableGlasses > 0;
};
Game_Actor.prototype.afterEval_trayAddTequila = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_TEQUILA);
	$gameParty.waitressBattle_increaseAvailableGlasses(-1);
};

Game_Actor.prototype.showEval_trayAddGoldRum = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.hasEdict(EDICT_BAR_DRINK_MENU_I);
};
Game_Actor.prototype.customReq_trayAddGoldRum = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableGlasses > 0;
};
Game_Actor.prototype.afterEval_trayAddGoldRum = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_GOLD_RUM);
	$gameParty.waitressBattle_increaseAvailableGlasses(-1);
};

Game_Actor.prototype.showEval_trayAddOverproofRum = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.hasEdict(EDICT_BAR_DRINK_MENU_III);
};
Game_Actor.prototype.customReq_trayAddOverproofRum = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableGlasses > 0;
};
Game_Actor.prototype.afterEval_trayAddOverproofRum = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_OVERPROOF_RUM);
	$gameParty.waitressBattle_increaseAvailableGlasses(-1);
};

Game_Actor.prototype.showEval_trayAddWhiskey = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY && this.hasEdict(EDICT_BAR_DRINK_MENU_II);
};
Game_Actor.prototype.customReq_trayAddWhiskey = function() {
	return !this.waitressBattle_isTrayFull() && $gameParty._waitressBattle_availableGlasses > 0;
};
Game_Actor.prototype.afterEval_trayAddWhiskey = function() {
	this.waitressBattle_addDrinkToTray(ALCOHOL_TYPE_WHISKEY);
	$gameParty.waitressBattle_increaseAvailableGlasses(-1);
};

////////
// Serving

Game_Actor.prototype.showEval_tableTakeOrder = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation !== BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.customReq_tableTakeOrder = function() {
	return $gameTroop.waitressBattle_getAwakeMembersOfTable(this._barLocation).length > 0;
};
Game_Actor.prototype.afterEval_tableTakeOrder = function(target) {
	BattleManager.actionRemLines(KARRYN_LINE_WAITRESS_SERVE_TAKE_ORDER);
	
	//Didn't ask for a waitress...
	if(target._bar_TimelimitTakeOrder === -1) {
		if(target._bar_orderedDrink === ALCOHOL_TYPE_NOTHING) {
			$gameParty.increaseWaitressCustomerSatisfaction(-1);
			BattleManager._logWindow.push('addText', TextManager.waitressEnemyDidntCallForWaitress.format(target.displayName()));
			AudioManager.playSe({name:'Cancel1', pan:0, pitch:100, volume:100});
		}
		else {
			BattleManager._logWindow.push('addText', TextManager.waitressEnemyAskingForDrink.format(target.displayName(), TextManager.alcoholName(target._bar_orderedDrink)));
		}
	}
	//Has no drink, want a drink
	else if(target._bar_currentDrink === ALCOHOL_TYPE_NOTHING) {
		let orderingDrinkArray = [ ALCOHOL_TYPE_PALE_ALE, target._bar_preferredDrink ];
		if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_I)) {
			orderingDrinkArray.push(ALCOHOL_TYPE_VODKA, ALCOHOL_TYPE_GOLD_RUM, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink);
		}
		if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II)) {
			orderingDrinkArray.push(ALCOHOL_TYPE_DARK_ALE, ALCOHOL_TYPE_WHISKEY, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink);
		}
		if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_III)) {
			orderingDrinkArray.push(ALCOHOL_TYPE_TEQUILA, ALCOHOL_TYPE_OVERPROOF_RUM, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink, target._bar_preferredDrink);
		}
		target._bar_orderedDrink = orderingDrinkArray[Math.randomInt(orderingDrinkArray.length)];

		if(target._bar_TimelimitTakeOrder > $gameParty.waitressBattle_getCurrentTimeInSeconds())
			$gameParty.increaseWaitressCustomerSatisfaction(1);
		target._bar_TimelimitAngryLeaving = -1;
		
		if(target.isTipsy)
			target._bar_TimelimitGetServed = target.waitressBattle_getNewTimeLimit(BAR_GET_SERVED_TIPSY_TIME_LIMIT + $gameTroop.waitressBattle_awakeMembers().length * BAR_TIME_LIMIT_BONUS_NUM_OF_CUSTOMERS);
		else
			target._bar_TimelimitGetServed = target.waitressBattle_getNewTimeLimit(BAR_GET_SERVED_NORMAL_TIME_LIMIT + $gameTroop.waitressBattle_awakeMembers().length * BAR_TIME_LIMIT_BONUS_NUM_OF_CUSTOMERS);
		
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyAskingForDrink.format(target.displayName(), TextManager.alcoholName(target._bar_orderedDrink)));
	}
	//has a drink
	else {
		let clothesMaxDamaged = this.isClothingMaxDamaged();
		let askingForFlash = false;
		
		if(!clothesMaxDamaged) {
			askingForFlash = Math.random() < 0.5;
		}
		
		//asking for flash
		if(askingForFlash) {
			this.waitressBattle_askedForFlash(target);
		}
		//asking to drink
		else if(target._bar_currentDrink !== ALCOHOL_TYPE_NOTHING){
			this.waitressBattle_askedToDrink(target);
		}
	}
	
	target._bar_TimelimitTakeOrder = -1;
	
	$gameMessage.forceButtonInput();
};

Game_Actor.prototype.waitressBattle_askedForFlash = function(target) {
	BattleManager._logWindow.push('addText', TextManager.waitressEnemyAskingForWaitressToFlash.format(target.displayName(), this.displayName()));
	AudioManager.playSe({name:'+Voice_Enemy_a', pan:0, pitch:100, volume:50});
			
	let flashReqMet = this.waitressBattle_flashRequirementMet();
	
	if(!flashReqMet) {
		BattleManager._logWindow.push('addText', TextManager.waitressWontFlash.format(this.displayName()));
		AudioManager.playSe({name:'Cancel1', pan:0, pitch:100, volume:100});
		this.gainBoobsDesire(Math.randomInt(3) + 3, false);
	}
	else {
		this.waitressBattle_flashes();
	}
};

// Karryn drinks
// Asked to drink
Game_Actor.prototype.waitressBattle_askedToDrink = function(target) {
	BattleManager._logWindow.push('addText', TextManager.waitressEnemyAskingForWaitressToDrink.format(target.displayName(), this.displayName()));
	AudioManager.playSe({name:'+Voice_Enemy_a', pan:0, pitch:100, volume:70});
			
	if(this.isNotAcceptingAnyAlcohol()) {
		BattleManager._logWindow.push('addText', TextManager.waitressRefusesDrink.format(this.displayName()));
		AudioManager.playSe({name:'+Evade', pan:0, pitch:100, volume:70});
		this.gainWill(-this.rejectAlcoholWillCost());
		this.addState(STATE_WAITRESS_WP_REGEN_REDUCE_ID);
		this.gainMindExp(50, this.level);
		BattleManager.actionRemLines(KARRYN_LINE_WAITRESS_SERVE_REJECT_DRINK);
	}
	else {
		this.justGotHitBySkillType(JUST_SKILLTYPE_WAITRESS_DRINK);
		BattleManager.actionRemLines(KARRYN_LINE_WAITRESS_SERVE_ACCEPT_DRINK);
		BattleManager._logWindow.push('addText', TextManager.waitressAcceptsDrink.format(this.displayName()));
		AudioManager.playSe({name:'+Waitress_Drink1', pan:15, pitch:100, volume:85});
		
		let drinkAmount = Math.min(2, target._bar_remainingDrinkAmount);
		this.waitressBattle_waitressDrink(target._bar_currentDrink, drinkAmount);
		target._bar_remainingDrinkAmount -= drinkAmount;
		if(target._bar_remainingDrinkAmount === 0) target.waitressBattle_addCurrentDrinkToTable();
		
		$gameParty.addWaitressTips(Math.randomInt(12) + 6);
		$gameParty.increaseWaitressCustomerSatisfaction(1);
	}
};

Game_Actor.prototype.waitressBattle_waitressDrink = function(drink, amount) {
	if(drink === ALCOHOL_TYPE_WATER) return;
	let addedAlcohol = drink * amount;
	
	if(addedAlcohol > 0) {
		let alcoholDamage = addedAlcohol * $gameTroop.waitressBattle_getAlcoholStrength(this, 5, true);
		this._alcoholDamage += alcoholDamage;
		this.gainEnduranceExp(3 * alcoholDamage, this.level);
	}
	
	if(!this._tempGotDrunkThisBattle && this.isDrunk) {
		this._playthroughRecordWaitressBattleGotDeadDrunkCount++;
		this._tempGotDrunkThisBattle = true;
	}
	
	if(this.isInWaitressServingPose())
		this.emoteWaitressServingPose();
};

Game_Actor.prototype.showEval_waitressSex_drinkMug = function() {
	if(this.justOrgasmed()) return false;
	return this.isInWaitressSexPose();
};
Game_Actor.prototype.customReq_waitressSex_drinkMug = function() {
	return this._karrynMugAmount > 0 && !this.blowjobPoseSkillsIsEnabled();
};
Game_Actor.prototype.afterEval_waitressSex_drinkMug = function() {
	if(this._karrynMugContent === ALCOHOL_TYPE_PALE_ALE) {
		let drinkAmount = Math.min(3 + Math.randomInt(3), this._karrynMugAmount);
		if(Karryn.hasThisTitle(TITLE_ID_FREELOADING_DRINKER)) {
			drinkAmount = Math.min(drinkAmount + Math.randomInt(2), this._karrynMugAmount);
		}
		this._karrynMugAmount -= drinkAmount;
		this.waitressBattle_waitressDrink(ALCOHOL_TYPE_PALE_ALE, drinkAmount);
		
		$gameParty.addWaitressTips(Math.randomInt(10) + drinkAmount);
		$gameParty.increaseWaitressCustomerSatisfaction(1);
	}
	else {
		let drinkAmount = 2;
		
		if(this.hasPassive(PASSIVE_SWALLOW_ML_FOUR_ID)) drinkAmount += 16 + Math.randomInt(20);
		else if(this.hasPassive(PASSIVE_SWALLOW_ML_THREE_ID)) drinkAmount += 16 + Math.randomInt(15);
		else if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) drinkAmount += 14 + Math.randomInt(12);
		else if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) drinkAmount += 12 + Math.randomInt(8);
		else if(this.hasPassive(PASSIVE_FIRST_SWALLOW_ID)) drinkAmount += 8 + Math.randomInt(4);
		else drinkAmount += 5 + Math.randomInt(3);
		
		if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_TWO_ID)) drinkAmount += 10 + Math.randomInt(12);
		else if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID))	drinkAmount += 5 + Math.randomInt(6);
		
		drinkAmount += Math.randomInt(drinkAmount);
		drinkAmount = Math.min(drinkAmount, this._karrynMugAmount);
		
		BattleManager._logWindow.push('addText', TextManager.waitressDrinkSemenMug.format(this.displayName(), drinkAmount));
		AudioManager.playSe({name:'++K_Gokkun01', pan:0, pitch:100, volume:70});
		this._karrynMugAmount -= drinkAmount;
		this.increaseLiquidSwallow(drinkAmount);
		this.addToActorSwallowMLRecord(drinkAmount);
		this._playthroughRecordWaitressBattleDrankSemenMugML += drinkAmount;
		let conversion = this.convertSwallowToEnergy(drinkAmount * 0.5);
		if(this.energy > 0 && conversion > 0) this.gainMp(conversion);
		
		let tipValue = 0;
		
		if(drinkAmount <= 10) {
			tipValue = (Math.randomInt(10) + 5);
			$gameParty.increaseWaitressCustomerSatisfaction(1);
		}
		else if(drinkAmount <= 20) {
			tipValue = (Math.randomInt(12) + 6);
			$gameParty.increaseWaitressCustomerSatisfaction(1);
		}
		else if(drinkAmount <= 30) {
			tipValue = (Math.randomInt(14) + 8);
			$gameParty.increaseWaitressCustomerSatisfaction(2);
		}
		else if(drinkAmount <= 50) {
			tipValue = (Math.randomInt(17) + 9);
			$gameParty.increaseWaitressCustomerSatisfaction(2);
		}
		else if(drinkAmount <= 100) {
			tipValue = (Math.randomInt(20) + 12);
			$gameParty.increaseWaitressCustomerSatisfaction(3);
		}
		else {
			tipValue = (Math.randomInt(22) + 14);
			$gameParty.increaseWaitressCustomerSatisfaction(3);
		}
		
		tipValue *= this.waitressSexualTipMultipler();
		$gameParty.addWaitressTips(tipValue);
	}
	
	this.updateTachieStraw();
	this.emoteWaitressSexPose();
	
	this.resetSexSkillConsUsage(false);
	
	//this.resetTachieMouth();
	//this.setCacheChanged();
};

Game_Actor.prototype.updateTachieStraw = function() {
	let mugAmount = this._karrynMugAmount;
	let mugContent = this._karrynMugContent;
	
	if(mugAmount === 0) {
		this.setTachieStraw('empty');
	}
	else {
		if(mugContent === ALCOHOL_TYPE_PALE_ALE) {
			if(mugAmount <= ALCOHOL_CAPACITY_ALE / 2) 
				this.setTachieStraw('paleale_2');
			else 
				this.setTachieStraw('paleale_1');
		}
		else {
			if(mugAmount === 0) this.setTachieStraw('empty');
			else if(mugAmount > 100) this.setTachieStraw('zaa_1');
			else if(mugAmount > 50) this.setTachieStraw('zaa_2');
			else return this.setTachieStraw('zaa_3');
		}
	}
};

Game_Actor.prototype.waitressBattle_flashRequirementMet = function() {
	let flashRequirements = 75;
	let boobsDesire = this.boobsDesire;
	
	if(this.isDeadDrunk)
		flashRequirements *= 0.5;
	else if(this.isDrunk || this.isHorny)
		flashRequirements *= 0.66;
	else if(this.isTipsy)
		flashRequirements *= 0.75;

	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID)) flashRequirements -= 25;
	else if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID)) flashRequirements -= 15;
	
	return boobsDesire >= flashRequirements && boobsDesire > 10;
};

// Karryn flashes
Game_Actor.prototype.waitressBattle_flashes = function() {
	let isTrayEmpty = this.waitressBattle_isTrayEmpty();
	let witnesses = $gameTroop.waitressBattle_getHarassmentMembersOfTable(this._barLocation);
	let numOfWitnesses = witnesses.length;

	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_TWO_ID)) {
		if(Math.random() < 0.3)
			this.addHornyState();
	}
	
	let enemyHornyAddedCount = 0;
	let enemyHornyChance = 0.2;
	let actorInBattleCharm = this.inBattleCharm;
	if(this.hasPassive(PASSIVE_FLAUNT_COUNT_ONE_ID)) {
		enemyHornyChance += this.cockiness * 0.0015;
	}
	witnesses.forEach(function(member) {
		if(member.charm <= actorInBattleCharm) {
			if(Math.random() < enemyHornyChance) {
				member.addHornyState();
				enemyHornyAddedCount++;
				
				let nextFlashTimeLimit = BAR_UNTIL_NEXT_FLASH_REQUEST_NORMAL_TIME_LIMIT;
				if(member.isDrunk || member.isDeadDrunk)
					nextFlashTimeLimit = BAR_UNTIL_NEXT_FLASH_REQUEST_DRUNK_TIME_LIMIT;
				else if(member.isTipsy)
					nextFlashTimeLimit = BAR_UNTIL_NEXT_FLASH_REQUEST_TIPSY_TIME_LIMIT;
				
				if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_III)) {
					nextFlashTimeLimit -= 40;
				}
				else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II)) {
					nextFlashTimeLimit -= 25;
				}
				else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_I)) {
					nextFlashTimeLimit -= 15;
				}
				
				member._bar_TimelimitUntilNextFlashRequest = member.waitressBattle_getNewTimeLimit(nextFlashTimeLimit);
			}
		}
    });
	
	this.gainCharmExp(3 * numOfWitnesses, this.level);
	this.gainCharmExp(4 * enemyHornyAddedCount, this.level);
	
	let tipValue = Math.randomInt(numOfWitnesses * 2 + enemyHornyAddedCount * 2) + numOfWitnesses * 1 + enemyHornyAddedCount * 1 + 2;
	tipValue *= this.waitressSexualTipMultipler();
	
	$gameParty.addWaitressTips(tipValue);
	$gameParty.increaseWaitressCustomerSatisfaction(Math.floor(enemyHornyAddedCount * 0.5) + 1);
	
	this._recordWaitressFlashedCount++;
	this.justGotHitBySkillType(JUST_SKILLTYPE_WAITRESS_FLASH);
	
	BattleManager._logWindow.push('addText', TextManager.waitressFlashes.format(this.displayName()));
	AudioManager.playSe({name:'Equip3', pan:10, pitch:110, volume:100});
	BattleManager.actionRemLines(KARRYN_LINE_WAITRESS_SERVE_FLASH);
	
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.showEval_tableServeDrink = function(drink) {
	if(this._barLocation === BAR_LOCATION_STANDBY) return false;
	let hasDrink = false;
	if(this._barTrayA === drink) hasDrink = true;
	else if(this._barTrayB === drink) hasDrink = true;
	else if(this._barTrayC === drink) hasDrink = true;
	return hasDrink;
};
Game_Actor.prototype.customReq_tableServeDrink = function() {
	return $gameTroop.waitressBattle_getAwakeMembersOfTable(this._barLocation).length > 0;
};
Game_Actor.prototype.skillCost_waitressServeDrink = function() {
	let cost = Math.min(this.realMaxStamina * 0.05, 17 + this.level * 2.5);
	
	let tableEnemies = $gameTroop.waitressBattle_getAwakeMembersOfTable(this._barLocation);
	if(tableEnemies.length === 0) return 0;
	let totalEnemyDex = 0;
	for(let i = 0; i < tableEnemies.length; ++i) {
		totalEnemyDex += tableEnemies[i].dex;
	}
	let averageEnemyDex = totalEnemyDex / tableEnemies.length;
	
	cost *= Math.max(0.2, Math.min(3, averageEnemyDex / this.dex));
	
	return cost;
};
Game_Actor.prototype.afterEval_tableServeDrink = function(target, drink) {
	let targetAcceptsDrink = false;
	if(target._bar_orderedDrink === drink || target.isDeadDrunk) targetAcceptsDrink = true;
	else if(target.isDrunk && target._bar_preferredDrink === drink) targetAcceptsDrink = true;
	else if(target._bar_TimelimitGetServed !== -1) {
		if(target.isDrunk) targetAcceptsDrink = true;
		else if(target.isTipsy && target._bar_preferredDrink === drink) targetAcceptsDrink = true;
		else if(target.isTipsy && target._bar_currentDrink === ALCOHOL_TYPE_NOTHING && drink !== ALCOHOL_TYPE_WATER) targetAcceptsDrink = true;
	}
	
	if(targetAcceptsDrink) {
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyAcceptsDrink.format(target.displayName()));
		AudioManager.playSe({name:'+Waitress_Pay1', pan:0, pitch:80, volume:70});
		if(target._bar_TimelimitGetServed !== -1 && target._bar_TimelimitGetServed > $gameParty.waitressBattle_getCurrentTimeInSeconds() && target._bar_orderedDrink === drink) {
			$gameParty.increaseWaitressCustomerSatisfaction(1);
			let tipValue = Math.randomInt(drink * 1.2) + Math.ceil(drink * 0.4);
			if(target.isLizardmanType && Karryn.hasEdict(EDICT_LIZARDMEN_FREE_DRINKS)) tipValue = 0;
			$gameParty.addWaitressTips(tipValue);
			if(target._bar_patiences < 2) target._bar_patiences++;
			this.gainCharmExp(5, this.level);
		}
		
		target._bar_orderedDrink = ALCOHOL_TYPE_NOTHING;
		target._bar_TimelimitGetServed = -1;
		target._bar_TimelimitAngryLeaving = -1;
		
		this.waitressBattle_removeDrinkFromTray(drink);
		target.waitressBattle_getDrink(drink);
		
		this.gainStaminaExp(10, this.level);
		this.gainDexterityExp(30, this.level);
		
		if(target.isGuardType) this._todayServedGuardInBar++;
	}
	else {
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyRefusesDrink.format(target.displayName()));
		AudioManager.playSe({name:'Cancel1', pan:0, pitch:100, volume:100});
		if(target._bar_currentDrink === ALCOHOL_TYPE_NOTHING)
			$gameParty.increaseWaitressCustomerSatisfaction(-1);
	}
};

////////
// Pass Time

Game_Actor.prototype.showEval_waitressPassTime = function() {
	if(this.justOrgasmed()) return false;
	return $gameTroop.membersNeededToBeSubdued().length === 0;
};
Game_Actor.prototype.dmgFormula_waitressPassTime = function() {
	this._alcoholDamage = Math.round(this._alcoholDamage * 0.8);
	
	let percent = Math.max(0.7, this.hrg * 9);
	let dmg = this.maxstamina * percent;
	return Math.round(dmg);
};
Game_Actor.prototype.afterEval_waitressPassTime = function() {
	$gameTroop.onTurnEndSpecial_waitressBattle(false);
	$gameTroop.onTurnEndSpecial_waitressBattle(true);
};

////////
// Breather

Game_Actor.prototype.customReq_barBreather = function() {
	return true;
	//return this.currentPercentOfStamina() <= 50;
};
Game_Actor.prototype.dmgFormula_barBreather = function() {
	this._alcoholDamage = Math.round(this._alcoholDamage * 0.94);
	
	let percent = Math.max(0.3, this.hrg * 4);
	let dmg = this.maxstamina * percent;
	return Math.round(dmg);
};
Game_Actor.prototype.afterEval_barBreather = function() {
	this.emoteWaitressServingPose();
};

////////
// Movement

Game_Actor.prototype.showEval_moveToTable_fromStandby = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation === BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.showEval_moveToTable_fromTable = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation !== BAR_LOCATION_STANDBY;
};

Game_Actor.prototype.afterEval_moveToTable = function(target) {
	this.removeState(STATE_BAR_TABLE_A_ID);
	this.removeState(STATE_BAR_TABLE_B_ID);
	this.removeState(STATE_BAR_TABLE_C_ID);
	this.removeState(STATE_BAR_TABLE_D_ID);
	$gameTroop._tableA.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableB.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableC.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableD.removeState(STATE_BAR_KARRYN_ID);
	
	this._barLocation = target.enemyId();
	if(this._barLocation === BAR_TABLE_A_ENEMY_ID) {
		this.addState(STATE_BAR_TABLE_A_ID);
		$gameTroop._tableA.addState(STATE_BAR_KARRYN_ID);
	}
	else if(this._barLocation === BAR_TABLE_B_ENEMY_ID) {
		this.addState(STATE_BAR_TABLE_B_ID);
		$gameTroop._tableB.addState(STATE_BAR_KARRYN_ID);
	}
	else if(this._barLocation === BAR_TABLE_C_ENEMY_ID) {
		this.addState(STATE_BAR_TABLE_C_ID);
		$gameTroop._tableC.addState(STATE_BAR_KARRYN_ID);
	}
	else if(this._barLocation === BAR_TABLE_D_ENEMY_ID) {
		this.addState(STATE_BAR_TABLE_D_ID);
		$gameTroop._tableD.addState(STATE_BAR_KARRYN_ID);
	}
	this.gainStaminaExp(5, this.level);
	this.gainAgilityExp(20, this.level);
	this.justGotHitBySkillType(JUST_SKILLTYPE_WAITRESS_MOVING);
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.skillCost_moveToTable = function() {
	let cost = Math.min(this.realMaxStamina * 0.03, 10 + this.level * 1.5);
	if(this._barLocation === BAR_LOCATION_STANDBY) cost *= 1.5;
	let allEnemies = $gameTroop.waitressBattle_awakeMembers();
	if(allEnemies.length === 0) 
		return cost;
	let totalEnemyAgi = 0;
	for(let i = 0; i < allEnemies.length; ++i) {
		totalEnemyAgi += allEnemies[i].agi;
	}
	let averageEnemyAgi = totalEnemyAgi / allEnemies.length;
	
	cost += cost * Math.max(0.2, Math.min(2, averageEnemyAgi / this.agi));
	
	return cost;
};

Game_Actor.prototype.showEval_returnToBar = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation !== BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.afterEval_returnToBar = function() {
	this.removeState(STATE_BAR_TABLE_A_ID);
	this.removeState(STATE_BAR_TABLE_B_ID);
	this.removeState(STATE_BAR_TABLE_C_ID);
	this.removeState(STATE_BAR_TABLE_D_ID);
	$gameTroop._tableA.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableB.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableC.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableD.removeState(STATE_BAR_KARRYN_ID);
	
	this._barLocation = BAR_LOCATION_STANDBY;
	this.gainStaminaExp(10, this.level);
	this.gainAgilityExp(20, this.level);
	this.justGotHitBySkillType(JUST_SKILLTYPE_WAITRESS_MOVING);
	this.emoteWaitressServingPose();
};
Game_Actor.prototype.skillCost_returnToBar = function() {
	return this.skillCost_moveToTable() * 2;
};

////////
// Clear Bar Table

Game_Actor.prototype.showEval_clearBarTable = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation !== BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.customReq_clearBarTable = function() {
	let dirtyTableMugs = 0;
	let dirtyTableGlasses = 0;
	
	if(this._barLocation === BAR_TABLE_A_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableA._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableA._dirtyGlasses;
	}
	else if(this._barLocation === BAR_TABLE_B_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableB._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableB._dirtyGlasses;
	}
	else if(this._barLocation === BAR_TABLE_C_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableC._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableC._dirtyGlasses;
	}
	else if(this._barLocation === BAR_TABLE_D_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableD._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableD._dirtyGlasses;
	}
	
	if(dirtyTableMugs === 0 && dirtyTableGlasses === 0) return false;
	
	let trayHasSpaceForMugs = false;
	let trayHasSpaceForGlasses = false;
	
	if(this._barTrayA === ALCOHOL_TYPE_NOTHING) {
		trayHasSpaceForMugs = true;
		trayHasSpaceForGlasses = true;
	}
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) {
		trayHasSpaceForMugs = true;
	}
	else if(this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE || this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO) {
		trayHasSpaceForGlasses = true;
	}
	
	if(this._barTrayB === ALCOHOL_TYPE_NOTHING) {
		trayHasSpaceForMugs = true;
		trayHasSpaceForGlasses = true;
	}
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) {
		trayHasSpaceForMugs = true;
	}
	else if(this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE || this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO) {
		trayHasSpaceForGlasses = true;
	}
	
	if(this._barTrayC === ALCOHOL_TYPE_NOTHING) {
		trayHasSpaceForMugs = true;
		trayHasSpaceForGlasses = true;
	}
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) {
		trayHasSpaceForMugs = true;
	}
	else if(this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE || this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO) {
		trayHasSpaceForGlasses = true;
	}
	
	if(dirtyTableMugs > 0 && trayHasSpaceForMugs) return true;
	else if(dirtyTableGlasses > 0 && trayHasSpaceForGlasses) return true;
	else return false;
};
Game_Actor.prototype.afterEval_clearBarTable = function() {
	let dirtyTableMugs = 0;
	let dirtyTableGlasses = 0;
	let removedMugs = 0;
	let removedGlasses = 0;
	
	if(this._barLocation === BAR_TABLE_A_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableA._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableA._dirtyGlasses;
	}
	else if(this._barLocation === BAR_TABLE_B_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableB._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableB._dirtyGlasses;
	}
	else if(this._barLocation === BAR_TABLE_C_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableC._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableC._dirtyGlasses;
	}
	else if(this._barLocation === BAR_TABLE_D_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableD._dirtyMugs;
		dirtyTableGlasses = $gameTroop._tableD._dirtyGlasses;
	}
	
	//Mugs - Existing stacks first
	if(dirtyTableMugs >= 1) {
		if(this._barTrayA === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO;
			removedMugs += 1;
			dirtyTableMugs -= 1;
		}
	}
	if(dirtyTableMugs >= 1) {
		if(this._barTrayB === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO;
			removedMugs += 1;
			dirtyTableMugs -= 1;
		}
	}
	if(dirtyTableMugs >= 1) {
		if(this._barTrayC === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO;
			removedMugs += 1;
			dirtyTableMugs -= 1;
		}
	}
	
	//Mugs - Empty spots
	if(this._barTrayA === ALCOHOL_TYPE_NOTHING) {
		if(dirtyTableMugs >= 2) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO;
			removedMugs += 2;
			dirtyTableMugs -= 2;
		}
		else if(dirtyTableMugs === 1) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE;
			removedMugs += 1;
			dirtyTableMugs -= 1;
		}
	}
	if(this._barTrayB === ALCOHOL_TYPE_NOTHING) {
		if(dirtyTableMugs >= 2) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO;
			removedMugs += 2;
			dirtyTableMugs -= 2;
		}
		else if(dirtyTableMugs === 1) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE;
			removedMugs += 1;
			dirtyTableMugs -= 1;
		}
	}
	if(this._barTrayC === ALCOHOL_TYPE_NOTHING) {
		if(dirtyTableMugs >= 2) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO;
			removedMugs += 2;
			dirtyTableMugs -= 2;
		}
		else if(dirtyTableMugs === 1) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE;
			removedMugs += 1;
			dirtyTableMugs -= 1;
		}
	}
	
	//Glasses - Existing stacks first - Stack of two
	if(this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO) {
		if(dirtyTableGlasses >= 1) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	if(this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO) {
		if(dirtyTableGlasses >= 1) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	if(this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO) {
		if(dirtyTableGlasses >= 1) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	
	//Glasses - Existing stacks first - Stack of one
	if(this._barTrayA === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE) {
		if(dirtyTableGlasses >= 2) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 2;
			dirtyTableGlasses -= 2;
		}
		else if(dirtyTableGlasses === 1) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	if(this._barTrayB === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE) {
		if(dirtyTableGlasses >= 2) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 2;
			dirtyTableGlasses -= 2;
		}
		else if(dirtyTableGlasses === 1) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	if(this._barTrayC === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE) {
		if(dirtyTableGlasses >= 2) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 2;
			dirtyTableGlasses -= 2;
		}
		else if(dirtyTableGlasses === 1) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	
	//Glasses - Empty spots
	if(this._barTrayA === ALCOHOL_TYPE_NOTHING) {
		if(dirtyTableGlasses >= 3) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 3;
			dirtyTableGlasses -= 3;
		}
		else if(dirtyTableGlasses >= 2) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO;
			removedGlasses += 2;
			dirtyTableGlasses -= 2;
		}
		else if(dirtyTableGlasses === 1) {
			this._barTrayA = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	if(this._barTrayB === ALCOHOL_TYPE_NOTHING) {
		if(dirtyTableGlasses >= 3) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 3;
			dirtyTableGlasses -= 3;
		}
		else if(dirtyTableGlasses >= 2) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO;
			removedGlasses += 2;
			dirtyTableGlasses -= 2;
		}
		else if(dirtyTableGlasses === 1) {
			this._barTrayB = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	if(this._barTrayC === ALCOHOL_TYPE_NOTHING) {
		if(dirtyTableGlasses >= 3) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE;
			removedGlasses += 3;
			dirtyTableGlasses -= 3;
		}
		else if(dirtyTableGlasses >= 2) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO;
			removedGlasses += 2;
			dirtyTableGlasses -= 2;
		}
		else if(dirtyTableGlasses === 1) {
			this._barTrayC = ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE;
			removedGlasses += 1;
			dirtyTableGlasses -= 1;
		}
	}
	
	//Modify table
	if(this._barLocation === BAR_TABLE_A_ENEMY_ID) {
		$gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_A_ENEMY_ID, -removedMugs, -removedGlasses);
	}
	else if(this._barLocation === BAR_TABLE_B_ENEMY_ID) {
		$gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_B_ENEMY_ID, -removedMugs, -removedGlasses);
	}
	else if(this._barLocation === BAR_TABLE_C_ENEMY_ID) {
		$gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_C_ENEMY_ID, -removedMugs, -removedGlasses);
	}
	else if(this._barLocation === BAR_TABLE_D_ENEMY_ID) {
		$gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_D_ENEMY_ID, -removedMugs, -removedGlasses);
	}
	
	//Tray
	this._barTray_dirtyMugsCount += removedMugs;
	this._barTray_dirtyGlassesCount += removedGlasses;
	
	this.emoteWaitressServingPose();
};

/////////
// Accept Alcohol Reject Alcohol

Game_Actor.prototype.showEval_waitressAcceptAlcohol = function() {
	if(this.justOrgasmed()) return false;
	return this.isStateAffected(STATE_ACCEPTING_NO_ALCOHOL_ID) && this.isInWaitressServingPose();
};
Game_Actor.prototype.afterEval_waitressAcceptAlcohol = function() {
	this.removeState(STATE_ACCEPTING_NO_ALCOHOL_ID);
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.showEval_waitressRejectAlcohol = function() {
	if(this.justOrgasmed()) return false;
	return !this.isStateAffected(STATE_ACCEPTING_NO_ALCOHOL_ID) && this.isInWaitressServingPose();
};
Game_Actor.prototype.afterEval_waitressRejectAlcohol = function() {
	this.addState(STATE_ACCEPTING_NO_ALCOHOL_ID);
	this.emoteWaitressServingPose();
};

/////////
// Fix clothes

Game_Actor.prototype.showEval_waitressFixClothes = function() {
	if(this.justOrgasmed() || this.isDeadDrunk) return false;
	return !this.isClothingNotDamaged() && this.isInWaitressServingPose();
};
Game_Actor.prototype.afterEval_waitressFixClothes = function() {
	if(this.isDrunk && this.isClothingAtStage(3)) {
		this.changeClothingToStage(2);
	}
	else 
		this.restoreClothingDurability();
	this.addToFixClothesUsageCountRecord();
	this.emoteWaitressServingPose();
};

////////
// Kick Out

Game_Actor.prototype.showEval_kickOutBar = function() {
	if(this.justOrgasmed()) return false;
	return this._barLocation !== BAR_LOCATION_STANDBY;
};
Game_Actor.prototype.customReq_kickOutBar = function() {
	return $gameTroop.waitressBattle_getAliveMembersOfTable(this._barLocation).length > 0;
};
Game_Actor.prototype.afterEval_kickOutBar = function(target) {
	target.waitressBattle_addCurrentDrinkToTable();
	this._hp -= this.staminaCostToKickOutBar(target);
	if(!target.isStateAffected(STATE_BAR_SLEEP_ID) && !target._bar_InBrawl) {
		$gameParty.increaseWaitressCustomerSatisfaction(-5);
	}
	else {
		this._playthroughRecordWaitressBattleProperKickingCount++;
	}
	$gameTroop._barSeats[target._barSeatId] = false;
	this.gainStaminaExp(15, target.enemyExperienceLvl());
	this.gainStrengthExp(40, target.enemyExperienceLvl());
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM);
	this.emoteWaitressServingPose();
};
Game_Actor.prototype.staminaCostToKickOutBar = function(target) {
	let cost = target.str * target.wpatk;
	cost *= target.str * ((target.hp / target.mhp) + 0.5) / this.str;
	if(target.isEnemy() && target.hasBigPrefix()) cost *= 1.2;
	cost += this.str + this.dex;
	
	if(this.hasThisTitle(TITLE_ID_BAR_ENFORCER)) cost *= 0.4;
	cost = Math.round(cost);
	return cost;
};

/////////
// Param

Game_Actor.prototype.waitressParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInWaitressBattle) {
		if(id === PARAM_MIND_ID) {
			passiveRate -= this.getAlcoholRate();
		}
		else if(id === PARAM_AGILITY_ID) {
			passiveRate -= this.getAlcoholRate() * 0.75;
		}
		else if(id === PARAM_STRENGTH_ID || id === PARAM_DEXTERITY_ID) {
			passiveRate -= this.getAlcoholRate() * 0.5;
		}
	}
	return passiveRate;
};
Game_Actor.prototype.waitressXParamRate = function(id) {
	let passiveRate = 1;
	
	if($gameParty.isInWaitressBattle) {
		if(id === XPARAM_CRIT_EVA_ID || id === XPARAM_EVA_ID) {
			passiveRate -= this.getAlcoholRate() * 0.33;
			
			if(!this.waitressBattle_isTrayEmpty() && this.isInWaitressServingPose()) {
				passiveRate *= 0.75;
			}
		}
		else if(id === XPARAM_STA_REGEN_ID) {
			passiveRate *= 0.5;
			if(this.isDeadDrunk) passiveRate *= 0.3;
			else if(this.isDrunk) passiveRate *= 0.5;
			else if(this.isTipsy) passiveRate *= 0.7;
		}
	}
	return passiveRate;
};
Game_Actor.prototype.waitressSParamRate = function(id) {
	let passiveRate = 1;
	if(this.isInWaitressServingPose()) {
		if(id === SPARAM_WP_REGEN_ID) {
			if(this.isStateAffected(STATE_WAITRESS_WP_REGEN_REDUCE_ID))
				passiveRate *= WILLPOWER_REJECT_ALCOHOL_REGEN;
			
			if(this.isDeadDrunk) passiveRate *= 0.3;
			else if(this.isDrunk) passiveRate *= 0.5;
			else if(this.isTipsy) passiveRate *= 0.7;
		}
	}
	return passiveRate;
};

////////
// Waitress Sex

Game_Actor.prototype.canStartWaitressSex = function() {
	let isTipsy = this.isTipsy;
	let isDrunk = this.isDrunk;
	let isDeadDrunk = this.isDeadDrunk;
	
	if(!isTipsy && !isDrunk && !isDeadDrunk) return false;
	
	return this.canGetRightHandInserted() || this.canGetMouthInserted() || this.canGetPussyInserted() || this.canGetAnalInserted() || isDeadDrunk;
};

//////////
// Post Damage

Game_Actor.prototype.postDamage_basicKissing_waitressServing = function(target, kissLvl) {
	let drankAlcohol = false;
	if(target._bar_currentDrink !== ALCOHOL_TYPE_NOTHING && target._bar_currentDrink !== ALCOHOL_TYPE_WATER && target._bar_remainingDrinkAmount > 0) {
		if(kissLvl == KISS_LVL_TWO || Math.random() < 0.5) {
			this.waitressBattle_waitressDrink(target._bar_currentDrink, 1);
			target._bar_remainingDrinkAmount -= 1;
			if(target._bar_remainingDrinkAmount === 0) target.waitressBattle_addCurrentDrinkToTable();
			drankAlcohol = true;
			BattleManager._logWindow.push('addText', TextManager.waitressEnemyAlcoholKiss.format(target.displayName(),this.displayName()));
			AudioManager.playSe({name:'++K_Gokkun01', pan:0, pitch:100, volume:70});
		}
	}
	
	let tipValue = this.kissLvl() + target.kissLvl();
	if(kissLvl == KISS_LVL_TWO) tipValue *= 1.25;
	if(drankAlcohol) tipValue *= 1.2;
	
	//this.advanceTimeBySeconds(5);
	
	tipValue = Math.randomInt(tipValue) + tipValue / 2 + 4;
	tipValue *= this.waitressSexualTipMultipler();
	
	if(Math.random() < 0.5) {
		$gameParty.addWaitressTips(tipValue);
		$gameParty.increaseWaitressCustomerSatisfaction(1);
	}
};

Game_Actor.prototype.postDamage_basicKissing_waitressSex = function(target, kissLvl) {
	this.waitressBattle_waitressDrink(target.ALCOHOL_TYPE_PALE_ALE, 1);
	BattleManager._logWindow.push('addText', TextManager.waitressEnemyAlcoholKiss.format(target.displayName(),this.displayName()));
	AudioManager.playSe({name:'++K_Gokkun01', pan:0, pitch:100, volume:70});
	
};

Game_Actor.prototype.postDamage_basicPetting_waitressServing = function(target, area) {
	let tipValue = target.pettingLvl();
	
	if(area == AREA_BOOBS) {
		tipValue += BASEDMG_PETTING_BOOBS;
	}
	else if(area == AREA_NIPPLES) {
		tipValue += BASEDMG_PETTING_NIPPLES;	
	}
	else if(area == AREA_CLIT) {
		tipValue += BASEDMG_PETTING_CLIT;
	}
	else if(area == AREA_PUSSY) {
		tipValue += BASEDMG_PETTING_PUSSY;
	}
	else if(area == AREA_BUTT) {
		tipValue += BASEDMG_PETTING_BUTT;
	}
	else if(area == AREA_ANAL) {
		tipValue += BASEDMG_PETTING_ANAL;
	}
	
	this.addToActorPettedWhileWorkingRecord();
	this._playthroughRecordWaitressServingPettedCount++;
	
	//this.advanceTimeBySeconds(5);
	tipValue = Math.randomInt(tipValue) + tipValue / 3 + 3;
	tipValue *= this.waitressSexualTipMultipler();

	if(Math.random() < 0.5) {
		$gameParty.addWaitressTips(tipValue);
		$gameParty.increaseWaitressCustomerSatisfaction(1);
	}
};

Game_Actor.prototype.postDamage_femaleOrgasm_waitressServing = function() {
	this.waitressBattle_resetTray(false, true);
	this._playthroughRecordWaitressServingOrgasmCount++;
};

Game_Actor.prototype.postDamage_ejaculation_waitressSex = function(target, area, semen) {
	let returnSemen = semen;
	let tipValue = semen;
	if(area == CUM_SWALLOW_MOUTH || area == CUM_CREAMPIE_PUSSY || area == CUM_CREAMPIE_ANAL) {
		tipValue *= 1.5;
		$gameParty.increaseWaitressCustomerSatisfaction(2);
	}
	else if(area == CUM_INTO_MUG) {
		tipValue *= 0;
	}
	else if(area == CUM_ONTO_FLOOR) {
		tipValue *= 0;
	}
	else {
		tipValue *= 0.9;
		$gameParty.increaseWaitressCustomerSatisfaction(1);
	}
	
	if(area == CUM_SWALLOW_MOUTH) {
		if(this._karrynMugContent === ALCOHOL_TYPE_SEMEN || 
		(this.canMouthSwallow(false) && this._karrynMugAmount === 0)) {
			this._karrynMugContent = ALCOHOL_TYPE_SEMEN;
			returnSemen = Math.randomInt(semen);
			this._karrynMugAmount += returnSemen;
			semen -= returnSemen;
		}
	}
	else if(area == CUM_INTO_MUG) {
		this._karrynMugContent = ALCOHOL_TYPE_SEMEN;
		this._karrynMugAmount += semen;
		this._karrynMugAmount = Math.min(ALCOHOL_CAPACITY_SEMEN + Math.randomInt(11), this._karrynMugAmount);
	}
	
	tipValue = Math.randomInt(tipValue) + tipValue / 2 + 5;
	tipValue *= this.waitressSexualTipMultipler();

	if(Math.random() < 0.5)
		$gameParty.addWaitressTips(tipValue);
	
	return semen;
};

Game_Actor.prototype.waitressSexualTipMultipler = function() {
	let rate = 1;
	
	let reactionScore = this.getReactionScore();
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		rate = 0.15;
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		rate = 0.4;
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
		rate = 0.8;
	}
	
	return rate;
};

Game_Actor.prototype.tachieMugId = function() {
	if(!this.isInWaitressSexPose()) return REM_TACHIE_NULL;
	
	let mugAmount = this._karrynMugAmount;
	let mugContent = this._karrynMugContent;
	
	if(mugContent === ALCOHOL_TYPE_PALE_ALE) {
		if(mugAmount === 0) return 'empty';
		else if(mugAmount <= ALCOHOL_CAPACITY_ALE / 2) return 'paleale_2';
		else return 'paleale_1';
	}
	else {
		if(mugAmount === 0) return 'zaa_4';
		else if(mugAmount > 100) return 'zaa_1';
		else if(mugAmount > 50) return 'zaa_2';
		else return 'zaa_3';
	}
	
	return REM_TACHIE_NULL;
};

Game_Actor.prototype.startWaitressSex = function(enemy) {
	$gameTroop._tableA.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableB.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableC.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableD.removeState(STATE_BAR_KARRYN_ID);
	$gameTroop._tableA.hide();
	$gameTroop._tableB.hide();
	$gameTroop._tableC.hide();
	$gameTroop._tableD.hide();
	
	$gameTroop.setAllEnemiesToAroused();
	
	if(enemy) {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyStartSex.format(enemy.displayName(), this.displayName()));
		AudioManager.playSe({name:'Blow6', pan:0, pitch:80, volume:100});
		this.addStunTillEndOfTurnState();
	}
	$gameParty.increaseWaitressCustomerSatisfaction(2);
	this.setWaitressSexPose();
	
	
	this.stripOffPanties();
	this.stripOffClothing();
	
	this.clearStateCounters();
	//this.removeState(STATE_AVAILABLE_MUGS_ID);
	this.removeState(STATE_AVAILABLE_GLASSES_ID);
	this.removeState(STATE_BAR_TABLE_A_ID);
	this.removeState(STATE_BAR_TABLE_B_ID);
	this.removeState(STATE_BAR_TABLE_C_ID);
	this.removeState(STATE_BAR_TABLE_D_ID);
	this.removeState(STATE_ACCEPTING_NO_ALCOHOL_ID);
	
	$gameTroop.aliveMembers().forEach(function(member) {
		member.removeState(STATE_BAR_SLEEP_ID);
		member.removeState(STATE_BAR_DRINKING_ALE_ID);
		member.removeState(STATE_BAR_DRINKING_WHITE_GLASS_ID);
		member.removeState(STATE_BAR_DRINKING_ORANGE_GLASS_ID);
    });

	$gameParty.waitressBattle_advanceTimeBySeconds(1);
	$gameParty._showTopRightTimeNumberFlag = false;

	//BattleManager.playBattleBgm();
	this._recordBarWaitressSexCount++;
};

////////////////
// Game Troop
////////////////

//////
// Setup

Game_Troop.prototype.setupWaitressBattle = function(troopId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._barSeats = [ false, false, false, false, false, false, false, false, false, false ];
	let customers = this.waitressBattle_startingCustomers();
	
	//Tables
	this._tableA = new Game_Enemy(BAR_TABLE_A_ENEMY_ID, BAR_TABLE_A_STATES_X, BAR_TABLE_A_STATES_Y, false, BAR_TABLE_A_ENEMY_ID);
	this._tableA._barJokeTimeLimit = -1;
	this._tableA._barJokerSeatId = -1;
	this._enemies.push(this._tableA);
	this._tableB = new Game_Enemy(BAR_TABLE_B_ENEMY_ID, BAR_TABLE_B_STATES_X, BAR_TABLE_B_STATES_Y, false, BAR_TABLE_B_ENEMY_ID);
	this._tableB._barJokeTimeLimit = -1;
	this._tableB._barJokerSeatId = -1;
	this._enemies.push(this._tableB);
	this._tableC = new Game_Enemy(BAR_TABLE_C_ENEMY_ID, BAR_TABLE_C_STATES_X, BAR_TABLE_C_STATES_Y, false, BAR_TABLE_C_ENEMY_ID);
	this._tableC._barJokeTimeLimit = -1;
	this._tableC._barJokerSeatId = -1;
	this._enemies.push(this._tableC);
	this._tableD = new Game_Enemy(BAR_TABLE_D_ENEMY_ID, BAR_TABLE_D_STATES_X, BAR_TABLE_D_STATES_Y, false, BAR_TABLE_D_ENEMY_ID);
	this._tableD._barJokeTimeLimit = -1;
	this._tableD._barJokerSeatId = -1;
	this._enemies.push(this._tableD);
	
	this.waitressBattle_setDirtyMugsAndGlasses(BAR_TABLE_A_ENEMY_ID, 0, 0);
	this.waitressBattle_setDirtyMugsAndGlasses(BAR_TABLE_B_ENEMY_ID, 0, 0);
	this.waitressBattle_setDirtyMugsAndGlasses(BAR_TABLE_C_ENEMY_ID, 0, 0);
	this.waitressBattle_setDirtyMugsAndGlasses(BAR_TABLE_D_ENEMY_ID, 0, 0);
	
	this.setup_waitressBattle_startingDirtyMugsAndGlasses();
	
	//Enemies
	for(let i = 0; i < customers.length; ++i) {
		let enemyId = customers[i];
		let enemy = this.setup_waitressBattle_customer(enemyId);
		enemy.setupForWaitressBattle_starters();
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	
	//Spawn
	this._nextEnemySpawnTimeLimit = BAR_SPAWN_INTERVAL;
	this._nextEnemySpawnChance = BAR_BASE_SPAWN_CHANCE;
};

Game_Troop.prototype.setup_waitressBattle_startingDirtyMugsAndGlasses = function() {
	if(Karryn.hasEdict(EDICT_HIRE_BAR_WAITERS)) {
		return;
	}
	else if(Karryn.hasEdict(EDICT_USE_INMATE_WAITERS)) {
		let tableC_startingMugs = Math.randomInt(Math.min(3, $gameParty._waitressBattle_availableMugs));
		let tableC_startingGlasses = Math.randomInt(Math.min(2, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_C_ENEMY_ID, tableC_startingMugs, tableC_startingGlasses);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableC_startingMugs);
		$gameParty.waitressBattle_increaseAvailableGlasses(-tableC_startingGlasses);
		
		let tableD_startingMugs = Math.randomInt(Math.min(2, $gameParty._waitressBattle_availableMugs));
		let tableD_startingGlasses = Math.randomInt(Math.min(1, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_D_ENEMY_ID, tableD_startingMugs, tableD_startingGlasses);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableD_startingMugs);
		$gameParty.waitressBattle_increaseAvailableGlasses(-tableD_startingGlasses);
		
		let tableA_startingMugs = Math.randomInt(Math.min(1, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_A_ENEMY_ID, tableA_startingMugs, 0);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableA_startingMugs);
		
		let tableB_startingMugs = Math.randomInt(Math.min(1, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_B_ENEMY_ID, tableB_startingMugs, 0);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableB_startingMugs);
	}
	else if(Karryn.hasEdict(EDICT_DONT_PAY_WAITERS)) {
		let tableC_startingMugs = Math.randomInt(Math.min(4, $gameParty._waitressBattle_availableMugs));
		let tableC_startingGlasses = Math.randomInt(Math.min(4, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_C_ENEMY_ID, tableC_startingMugs, tableC_startingGlasses);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableC_startingMugs);
		$gameParty.waitressBattle_increaseAvailableGlasses(-tableC_startingGlasses);
		
		let tableD_startingMugs = Math.randomInt(Math.min(2, $gameParty._waitressBattle_availableMugs));
		let tableD_startingGlasses = Math.randomInt(Math.min(3, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_D_ENEMY_ID, tableD_startingMugs, tableD_startingGlasses);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableD_startingMugs);
		$gameParty.waitressBattle_increaseAvailableGlasses(-tableD_startingGlasses);
		
		let tableA_startingMugs = Math.randomInt(Math.min(1, $gameParty._waitressBattle_availableMugs));
		let tableA_startingGlasses = Math.randomInt(Math.min(2, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_A_ENEMY_ID, tableA_startingMugs, tableA_startingGlasses);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableA_startingMugs);
		$gameParty.waitressBattle_increaseAvailableGlasses(-tableA_startingGlasses);
		
		let tableB_startingMugs = Math.randomInt(Math.min(2, $gameParty._waitressBattle_availableMugs));
		let tableB_startingGlasses = Math.randomInt(Math.min(1, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_B_ENEMY_ID, tableB_startingMugs, tableB_startingGlasses);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableB_startingMugs);
		$gameParty.waitressBattle_increaseAvailableGlasses(-tableB_startingGlasses);
	}
	else {
		let tableC_startingMugs = Math.randomInt(Math.min(2, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_C_ENEMY_ID, tableC_startingMugs, 0);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableC_startingMugs);
		
		let tableD_startingMugs = Math.randomInt(Math.min(1, $gameParty._waitressBattle_availableMugs));
		this.waitressBattle_increaseDirtyMugsAndGlasses(BAR_TABLE_D_ENEMY_ID, tableD_startingMugs, 0);
		$gameParty.waitressBattle_increaseAvailableMugs(-tableD_startingMugs);
	}
};

Game_Troop.prototype.setup_waitressBattle_customer = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		if(!wanted.enemyTypeIsBoss())
			enemyId = wanted._enemyId;
	}
	
	let seatId = -1;
	while(seatId === -1) {
		randomNum = Math.randomInt(this._barSeats.length);
		if(this._barSeats[randomNum] === false) {
			seatId = randomNum;
		}
	}
	
	let x = ENEMY_NAME_STARTING_X;
	let y = ENEMY_NAME_STARTING_Y;
	
	switch (seatId) {
	case BAR_TABLE_A_LEFT_SEAT:
		x = BAR_LEFT_SEAT_X;
		y = BAR_TABLE_A_SEAT_Y;
		break;
	case BAR_TABLE_A_RIGHT_SEAT:
		x = BAR_RIGHT_SEAT_X;
		y = BAR_TABLE_A_SEAT_Y;
		break;
	case BAR_TABLE_B_LEFT_SEAT:
		x = BAR_LEFT_SEAT_X;
		y = BAR_TABLE_B_SEAT_Y;
		break;
	case BAR_TABLE_B_RIGHT_SEAT:
		x = BAR_RIGHT_SEAT_X;
		y = BAR_TABLE_B_SEAT_Y;
		break;
	case BAR_TABLE_C_TOP_LEFT_SEAT:
		x = BAR_LEFT_SEAT_X;
		y = BAR_TABLE_C_TOP_SEAT_Y;
		break;
	case BAR_TABLE_C_TOP_RIGHT_SEAT:
		x = BAR_RIGHT_SEAT_X;
		y = BAR_TABLE_C_TOP_SEAT_Y;
		break;
	case BAR_TABLE_C_BOTTOM_LEFT_SEAT:
		x = BAR_LEFT_SEAT_X;
		y = BAR_TABLE_C_BOTTOM_SEAT_Y;
		break;
	case BAR_TABLE_C_BOTTOM_RIGHT_SEAT:
		x = BAR_RIGHT_SEAT_X;
		y = BAR_TABLE_C_BOTTOM_SEAT_Y;
		break;
	case BAR_TABLE_D_LEFT_SEAT:
		x = BAR_LEFT_SEAT_X;
		y = BAR_TABLE_D_SEAT_Y;
		break;
	case BAR_TABLE_D_RIGHT_SEAT:
		x = BAR_RIGHT_SEAT_X;
		y = BAR_TABLE_D_SEAT_Y;
		break;
	}
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	enemy._barSeatId = seatId;
	this._barSeats[seatId] = enemy;
	this._enemies.push(enemy);
	enemy.setupForWaitressBattle();
	
	return enemy;
};

Game_Troop.prototype.waitressBattle_startingCustomers = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let customers = [];
	let startingNum = 0;
	let rep = $gameParty._barReputation;
	
	if(rep >= 30) startingNum = 5 + Math.randomInt(4);
	else if(rep >= 20) startingNum = 5 + Math.randomInt(3);
	else if(rep >= 10) startingNum = 4 + Math.randomInt(3);
	else if(rep >= 7) startingNum = 4 + Math.randomInt(2);
	else if(rep >= 4) startingNum = 4;
	else if(rep >= 1) startingNum = 3;
	else startingNum = 2;
	
	//startingNum = 1;
	
	for(let i = 0; i < startingNum; ++i) {
		customers.push(this.waitressBattle_validEnemyId());
	}
	
	return customers;
};

Game_Troop.prototype.waitressBattle_validEnemyId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [ 51, 53, 54, 91, 92, 93, 94 ];
	
	if($gameParty._barReputation >= 3) {
		validEnemyTypes.push(95);
		validEnemyTypes.push(55);
	}
	
	if($gameParty._barReputation >= 10) {
		validEnemyTypes.push(54);
		validEnemyTypes.push(55);
	}
	
	if($gameParty._barReputation >= 5) {
		validEnemyTypes.push(81);
		validEnemyTypes.push(83);
	}
	
	//Rogues
	if($gameParty._barReputation >= 8 && Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) {
		validEnemyTypes.push(142);
	}
	
	//Nerds
	if($gameParty._barReputation >= 20 && Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED) && !Karryn.hasEdict(EDICT_THREATEN_THE_NERDS) && !Prison.prisonLevelTwoIsRioting()) {
		validEnemyTypes.push(121);
	}
	
	//Lizardman
	if(Karryn.hasEdict(EDICT_THE_LIZARDMAN_PROBLEM) && Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II)) {
		if(Karryn.hasEdict(EDICT_LIZARDMEN_FREE_DRINKS)) {
			validEnemyTypes.push(192);
			validEnemyTypes.push(193);
			validEnemyTypes.push(194);
		}
		if(!Prison.prisonLevelThreeIsRioting()) {
			validEnemyTypes.push(191);
			if($gameParty._barReputation >= 10) {
				validEnemyTypes.push(192);
			}
		}
	}
	
	//Orcs
	if($gameParty._barReputation >= 8 && Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS)) {
		validEnemyTypes.push(182);
		validEnemyTypes.push(183);
	}
	
	//Homeless
	if($gameParty._barReputation >= 20 && Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED) && !Prison.prisonLevelThreeIsRioting()) {
		validEnemyTypes.push(211);
	}
	
	//Guards
	if($gameParty._barReputation >= 2) {
		validEnemyTypes = validEnemyTypes.concat($gameParty.getGuardEnemyIds());
	}
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};

Game_Troop.prototype.onTurnEndSpecial_waitressBattle = function(forceSpawn) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	///////////
	//Check Horny
	if(actor.isHorny && $gameParty.waitressBattle_getCurrentTimeInSeconds() >= actor._hornyTimeLimit) {
		actor.removeState(STATE_HORNY_ID);
	}
	
	/////////
	//Spawn Customer
	this.waitressBattle_spawnCustomer(forceSpawn);
	
	
};

Game_Troop.prototype.waitressBattle_spawnCustomer = function(forceSpawn) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySeatAvailable = this.waitressBattle_countEmptySeats() > 0;
	if(forceSpawn || this._nextEnemySpawnTimeLimit <= $gameParty.waitressBattle_getCurrentTimeInSeconds()) {
		if(emptySeatAvailable && (forceSpawn || Math.random() < this._nextEnemySpawnChance)) {
			let enemyId = this.waitressBattle_validEnemyId();
			let enemy = this.setup_waitressBattle_customer(enemyId);
			enemy.makeUniqueNames();
			enemy.setupEnemyPrefixEjaculationStockEffect();
			enemy.onBattleStart();
			enemy.midBattleSpawn_setupDreamX();
			SceneManager._scene._spriteset.addEnemy(enemy);
			
			let tableId = enemy.waitressBattle_getTableId();
			let tableName = '';
			if(tableId === BAR_TABLE_A_ENEMY_ID) {
				tableName = $gameTroop._tableA.displayName();
			}
			else if(tableId === BAR_TABLE_B_ENEMY_ID) {
				tableName = $gameTroop._tableB.displayName();
			}
			else if(tableId === BAR_TABLE_C_ENEMY_ID) {
				tableName = $gameTroop._tableC.displayName();
			}
			else if(tableId === BAR_TABLE_D_ENEMY_ID) {
				tableName = $gameTroop._tableD.displayName();
			}
			
			this._nextEnemySpawnChance = 0;
			
			BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyEntersBar.format(enemy.displayName(), tableName));
			AudioManager.playSe({name:'+Waitress_Chair2', pan:0, pitch:100, volume:90});
		}
		
		let addedSpawnChance = ($gameParty.getBarReputationIncomeMultipler() * 0.1) + BAR_BASE_SPAWN_CHANCE;
		let timeSinceLastSpawnCheck = $gameParty.waitressBattle_getCurrentTimeInSeconds() - this._nextEnemySpawnTimeLimit;
		
		this._nextEnemySpawnChance += addedSpawnChance * (timeSinceLastSpawnCheck / BAR_SPAWN_INTERVAL);
		this._nextEnemySpawnTimeLimit = $gameParty.waitressBattle_getCurrentTimeInSeconds() + BAR_SPAWN_INTERVAL;
	}
	
};

Game_Troop.prototype.waitressBattle_countEmptySeats = function() {
	let count = 0;
	
	for(let i = 0; i < this._barSeats.length; ++i) {
		if(!this._barSeats[i]) count++;
	}
	
	return count;
};

/////////
// Add Icons to Starters

Game_Troop.prototype.waitressBattle_setupStartingMembersIcons = function() {
	$gameTroop.waitressBattle_awakeMembers().forEach(function(member) {
		if(member._bar_currentDrink === ALCOHOL_TYPE_NOTHING) { }
		else if(member._bar_currentDrink === ALCOHOL_TYPE_GOLD_RUM || member._bar_currentDrink === ALCOHOL_TYPE_OVERPROOF_RUM || member._bar_currentDrink === ALCOHOL_TYPE_WHISKEY) {
			member.addState(STATE_BAR_DRINKING_ORANGE_GLASS_ID);
		}
		else if(member._bar_currentDrink === ALCOHOL_TYPE_DARK_ALE || member._bar_currentDrink === ALCOHOL_TYPE_PALE_ALE) {
			member.addState(STATE_BAR_DRINKING_ALE_ID);
		}
		else {
			member.addState(STATE_BAR_DRINKING_WHITE_GLASS_ID);
		}
	});	
};




///////
// Members

Game_Troop.prototype.waitressBattle_awakeMembers = function() {
	return this.members().filter(function(member) {
        return member.isAwake_waitressBattle();
    });
};
Game_Troop.prototype.waitressBattle_brawlers = function() {
    return this.members().filter(function(member) {
        return member._bar_InBrawl && member.isAlive();
    });
};

Game_Troop.prototype.waitressBattle_getAliveMembersOfTable = function(table) {
    let members = [];
	
	if(table === BAR_TABLE_A_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_A_LEFT_SEAT] && this._barSeats[BAR_TABLE_A_LEFT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_A_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_A_RIGHT_SEAT] && this._barSeats[BAR_TABLE_A_RIGHT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_A_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_B_LEFT_SEAT] && this._barSeats[BAR_TABLE_B_LEFT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_B_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_B_RIGHT_SEAT] && this._barSeats[BAR_TABLE_B_RIGHT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_B_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_D_LEFT_SEAT] && this._barSeats[BAR_TABLE_D_LEFT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_D_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_D_RIGHT_SEAT] && this._barSeats[BAR_TABLE_D_RIGHT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_D_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAlive()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
	}
	
	return members;
};
Game_Troop.prototype.waitressBattle_getAwakeMembersOfTable = function(table) {
    let members = [];
	
	if(table === BAR_TABLE_A_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_A_LEFT_SEAT] && this._barSeats[BAR_TABLE_A_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_A_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_A_RIGHT_SEAT] && this._barSeats[BAR_TABLE_A_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_A_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_B_LEFT_SEAT] && this._barSeats[BAR_TABLE_B_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_B_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_B_RIGHT_SEAT] && this._barSeats[BAR_TABLE_B_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_B_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_D_LEFT_SEAT] && this._barSeats[BAR_TABLE_D_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_D_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_D_RIGHT_SEAT] && this._barSeats[BAR_TABLE_D_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_D_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
	}
	
	return members;
};
Game_Troop.prototype.waitressBattle_getHarassmentMembersOfTable = function(table) {
    let members = [];
	
	if(table === BAR_TABLE_A_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_A_LEFT_SEAT] && this._barSeats[BAR_TABLE_A_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_A_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_A_RIGHT_SEAT] && this._barSeats[BAR_TABLE_A_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_A_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_B_LEFT_SEAT] && this._barSeats[BAR_TABLE_B_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_B_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_B_RIGHT_SEAT] && this._barSeats[BAR_TABLE_B_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_B_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_D_LEFT_SEAT] && this._barSeats[BAR_TABLE_D_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_D_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_D_RIGHT_SEAT] && this._barSeats[BAR_TABLE_D_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_D_RIGHT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
		if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAwake_waitressBattle()) 
			members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
	}
	
	return members;
};


Game_Troop.prototype.waitressBattle_getTableMembersOfTarget = function(target, includeTarget, includeSleepers) {
    let targetSeatId = target._barSeatId;
	let members = [];
	
	switch (targetSeatId) {
		case BAR_TABLE_A_LEFT_SEAT:
			if(this._barSeats[BAR_TABLE_A_RIGHT_SEAT] && this._barSeats[BAR_TABLE_A_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_A_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_A_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_A_RIGHT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_A_RIGHT_SEAT:
			if(this._barSeats[BAR_TABLE_A_LEFT_SEAT] && this._barSeats[BAR_TABLE_A_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_A_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_A_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_A_LEFT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_B_LEFT_SEAT:
			if(this._barSeats[BAR_TABLE_B_RIGHT_SEAT] && this._barSeats[BAR_TABLE_B_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_B_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_B_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_B_RIGHT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_B_RIGHT_SEAT:
			if(this._barSeats[BAR_TABLE_B_LEFT_SEAT] && this._barSeats[BAR_TABLE_B_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_B_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_B_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_B_LEFT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_D_LEFT_SEAT:
			if(this._barSeats[BAR_TABLE_D_RIGHT_SEAT] && this._barSeats[BAR_TABLE_D_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_D_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_D_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_D_RIGHT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_D_RIGHT_SEAT:
			if(this._barSeats[BAR_TABLE_D_LEFT_SEAT] && this._barSeats[BAR_TABLE_D_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_D_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_D_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_D_LEFT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_C_TOP_LEFT_SEAT:
			if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_C_TOP_RIGHT_SEAT:
			if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_C_BOTTOM_LEFT_SEAT:
			if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_BOTTOM_RIGHT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
		case BAR_TABLE_C_BOTTOM_RIGHT_SEAT:
			if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_TOP_LEFT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT] && this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_TOP_RIGHT_SEAT]);
			}
			if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT] && this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isAlive()) {
				if(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT].isStateAffected(STATE_BAR_SLEEP_ID)) {
					if(includeSleepers) members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
				}
				else members.push(this._barSeats[BAR_TABLE_C_BOTTOM_LEFT_SEAT]);
			}
			if(includeTarget) members.push(target);
			break;
	}
	
	return members;
};

Game_Troop.prototype.waitressBattle_getRandomBrawler = function(dontIncludeTarget, brawlerTarget) {
	let members = [];
	
	for(let i = 0; i < this._barSeats.length; ++i) {
		if(this._barSeats[i]) {
			let enemy = this._barSeats[i];
			if(!enemy.isValidTargetForBarBrawl()) continue;
			if(enemy == dontIncludeTarget) continue;
			if(brawlerTarget) {
				if(enemy._bar_InBrawl) members.push(enemy);
			}
			else {
				if(!enemy._bar_InBrawl) members.push(enemy);
			}
		}
	}
	
	if(members.length === 0) return false;
	return members[Math.randomInt(members.length)];
};
Game_Troop.prototype.waitressBattle_getRandomNonBrawler = function(dontIncludeTarget) {
	return this.waitressBattle_getRandomBrawler(dontIncludeTarget, false)
};

//////
// Tables

Game_Troop.prototype.waitressBattle_setDirtyMugsAndGlasses = function(table, mugs, glasses) {
	if(table === BAR_TABLE_A_ENEMY_ID) {
		this._tableA._dirtyMugs = mugs;
		this._tableA._dirtyGlasses = glasses;
		this._tableA.setStateCounter(STATE_DIRTY_MUGS_ID, this._tableA._dirtyMugs);
		this._tableA.setStateCounter(STATE_DIRTY_GLASSES_ID, this._tableA._dirtyGlasses);
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		this._tableB._dirtyMugs = mugs;
		this._tableB._dirtyGlasses = glasses;
		this._tableB.setStateCounter(STATE_DIRTY_MUGS_ID, this._tableB._dirtyMugs);
		this._tableB.setStateCounter(STATE_DIRTY_GLASSES_ID, this._tableB._dirtyGlasses);
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		this._tableC._dirtyMugs = mugs;
		this._tableC._dirtyGlasses = glasses;
		this._tableC.setStateCounter(STATE_DIRTY_MUGS_ID, this._tableC._dirtyMugs);
		this._tableC.setStateCounter(STATE_DIRTY_GLASSES_ID, this._tableC._dirtyGlasses);
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		this._tableD._dirtyMugs = mugs;
		this._tableD._dirtyGlasses = glasses;
		this._tableD.setStateCounter(STATE_DIRTY_MUGS_ID, this._tableD._dirtyMugs);
		this._tableD.setStateCounter(STATE_DIRTY_GLASSES_ID, this._tableD._dirtyGlasses);
	}
};
Game_Troop.prototype.waitressBattle_increaseDirtyMugsAndGlasses = function(table, mugs, glasses) {
	let currentDirtyMugs = 0;
	let currentDirtyGlasses = 0;
	
	if(table === BAR_TABLE_A_ENEMY_ID) {
		currentDirtyMugs = this._tableA._dirtyMugs;
		currentDirtyGlasses = this._tableA._dirtyGlasses;
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		currentDirtyMugs = this._tableB._dirtyMugs;
		currentDirtyGlasses = this._tableB._dirtyGlasses;
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		currentDirtyMugs = this._tableC._dirtyMugs;
		currentDirtyGlasses = this._tableC._dirtyGlasses;
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		currentDirtyMugs = this._tableD._dirtyMugs;
		currentDirtyGlasses = this._tableD._dirtyGlasses;
	}
	
	this.waitressBattle_setDirtyMugsAndGlasses(table, currentDirtyMugs + mugs, currentDirtyGlasses + glasses);
};

Game_Troop.prototype.waitressBattle_setTableJoker = function(enemy) {
	let tableId = enemy.waitressBattle_getTableId();
	if(tableId === BAR_TABLE_A_ENEMY_ID) {
		this._tableA._barJokeTimeLimit = enemy.waitressBattle_getNewTimeLimit(BAR_JOKE_TIME_LIMIT);
		this._tableA._barJokerSeatId = enemy._barSeatId;
	}
	else if(tableId === BAR_TABLE_B_ENEMY_ID) {
		this._tableB._barJokeTimeLimit = enemy.waitressBattle_getNewTimeLimit(BAR_JOKE_TIME_LIMIT);
		this._tableB._barJokerSeatId = enemy._barSeatId;
	}
	else if(tableId === BAR_TABLE_C_ENEMY_ID) {
		this._tableC._barJokeTimeLimit = enemy.waitressBattle_getNewTimeLimit(BAR_JOKE_TIME_LIMIT);
		this._tableC._barJokerSeatId = enemy._barSeatId;
	}
	else if(tableId === BAR_TABLE_D_ENEMY_ID) {
		this._tableD._barJokeTimeLimit = enemy.waitressBattle_getNewTimeLimit(BAR_JOKE_TIME_LIMIT);
		this._tableD._barJokerSeatId = enemy._barSeatId;
	}
};
Game_Troop.prototype.waitressBattle_getTableJokerSeatId = function(table) {
	if(table === BAR_TABLE_A_ENEMY_ID) {
		return this._tableA._barJokerSeatId;
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		return this._tableB._barJokerSeatId;
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		return this._tableC._barJokerSeatId;
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		return this._tableD._barJokerSeatId;
	}
};
Game_Troop.prototype.waitressBattle_doesTableHaveOngoingJoke = function(table) {
	if(table === BAR_TABLE_A_ENEMY_ID) {
		return this._tableA._barJokeTimeLimit > $gameParty.waitressBattle_getCurrentTimeInSeconds();
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		return this._tableB._barJokeTimeLimit > $gameParty.waitressBattle_getCurrentTimeInSeconds();
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		return this._tableC._barJokeTimeLimit > $gameParty.waitressBattle_getCurrentTimeInSeconds();
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		return this._tableD._barJokeTimeLimit > $gameParty.waitressBattle_getCurrentTimeInSeconds();
	}
};

////////
// Alcohol

Game_Troop.prototype.waitressBattle_getAlcoholStrength = function(target, targetWeight, targetIsActor) {
	let rawTotal = 0;
	let totalMembers = 0;
	
	let enemies = this.waitressBattle_awakeMembers();
	for(let i = 0; i < enemies.length; ++i) {
		rawTotal += enemies[i].maxstamina * 0.01 * enemies[i].end;
		totalMembers += 1;
	}
	
	if(targetIsActor) {
		rawTotal += target.maxstamina * 0.01 * target.end * targetWeight * targetWeight;
		totalMembers += targetWeight;
	}
	else {
		rawTotal += (target.maxstamina * 0.01 * target.end) * (targetWeight - 1) * (targetWeight - 1);
		totalMembers += targetWeight - 1;
	}
	let averageTotal = rawTotal / totalMembers;
	
	//console.log('waitressBattle_getAlcoholStrength ' + target.displayName() + ' ' + 'averageTotal:' + averageTotal + ' returning ' + averageTotal / (target.end * totalMembers));
	
	return averageTotal / (target.end * totalMembers);
};

///////////
// Game Enemy
/////////////

Object.defineProperty(Game_Enemy.prototype, "isTipsy", { 
	get: function () { return (this.hp / this.mhp) < ALCOHOL_TIPSY_THRESHOLD; }, configurable: true 
});
Object.defineProperty(Game_Enemy.prototype, "isDrunk", { 
	get: function () { return (this.hp / this.mhp) < ALCOHOL_DRUNK_THRESHOLD; }, configurable: true 
});
Object.defineProperty(Game_Enemy.prototype, "isDeadDrunk", { 
	get: function () { return (this.hp / this.mhp) < ALCOHOL_DEAD_DRUNK_THRESHOLD; }, configurable: true 
});

Game_Enemy.prototype.isAwake_waitressBattle = function() {
    return this.isAppeared() && !this.isDeathStateAffected() && !this.isStateAffected(STATE_BAR_SLEEP_ID) && !this.isBarTableType;
};

Game_Enemy.prototype.isValidTargetForBarBrawl = function() { 
	return !this.isBarTableType && this.isAppeared();
};

Game_Enemy.prototype.setupForWaitressBattle = function() {
	this._bar_TimelimitAngryLeaving = -1;
	this._bar_TimelimitTakeOrder = -1;
	this._bar_TimelimitGetServed = -1;
	this._bar_TimelimitUntilNextFlashRequest = -1;
	
	this._bar_currentDrink = ALCOHOL_TYPE_NOTHING;
	this._bar_remainingDrinkAmount = 0;
	this._bar_preferredDrink = ALCOHOL_TYPE_NOTHING;
	this._bar_orderedDrink = ALCOHOL_TYPE_NOTHING;
	this._bar_InBrawl = false;
	this._bar_fumedCount = 0;
	this._bar_patiences = 1;
	
	// Preferred Drink
	let preferredDrinkArray = [ ALCOHOL_TYPE_PALE_ALE ];
	
	if(this.isNerdType || this.isPrisonerType || this.isGoblinType) {
		preferredDrinkArray.push(ALCOHOL_TYPE_WATER);
	}
	
	if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_I)) {
		preferredDrinkArray.push(ALCOHOL_TYPE_VODKA);
		preferredDrinkArray.push(ALCOHOL_TYPE_GOLD_RUM);
		if(this.isNerdType) preferredDrinkArray.push(ALCOHOL_TYPE_WATER);
	}
	if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II)) {
		preferredDrinkArray.push(ALCOHOL_TYPE_DARK_ALE);
		preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
		if(this.isNerdType) preferredDrinkArray.push(ALCOHOL_TYPE_WATER);
		else if(this.isLizardmanType) {
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
		}
	}
	if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_III)) {
		preferredDrinkArray.push(ALCOHOL_TYPE_TEQUILA);
		preferredDrinkArray.push(ALCOHOL_TYPE_OVERPROOF_RUM);
		if(this.isNerdType) preferredDrinkArray.push(ALCOHOL_TYPE_WATER);
		else if(this.isLizardmanType) {
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
			preferredDrinkArray.push(ALCOHOL_TYPE_WHISKEY);
		}
	}
	
	this._bar_preferredDrink = preferredDrinkArray[Math.randomInt(preferredDrinkArray.length)];
	
};

Game_Enemy.prototype.setupForWaitressBattle_starters = function() {
	if(Math.random() < BAR_STARTING_CUSTOMERS_DRINKING_CHANCE) {
		let hasGlass = false;
		
		if(this._bar_preferredDrink === ALCOHOL_TYPE_PALE_ALE || this._bar_preferredDrink === ALCOHOL_TYPE_DARK_ALE) {
			if($gameParty._waitressBattle_availableMugs > 0) {
				hasGlass = true;
				$gameParty.waitressBattle_increaseAvailableMugs(-1);
			}
		}
		else if($gameParty._waitressBattle_availableGlasses > 0) {
			hasGlass = true;
			$gameParty.waitressBattle_increaseAvailableGlasses(-1);
		}
		
		if(hasGlass) {
			this._bar_currentDrink = this._bar_preferredDrink;
			this._bar_remainingDrinkAmount = Math.randomInt(3) + 2;
		}
		let randomStartingHpMultipler = Math.random() * 0.25 + 0.75;
		this._hp = Math.random(this.mhp * randomStartingHpMultipler);
	}
	else {
		let randomStartingHpMultipler = Math.random() * 0.1 + 0.9;
		this._hp = Math.random(this.mhp * randomStartingHpMultipler);
	}
};

Game_Enemy.prototype.battlerName_waitressBattleSuffix = function() {
	suffixFileName = '';

	if(this.isBarTableType) return '';
	
	if(this._bar_TimelimitAngryLeaving > 0 || this._bar_InBrawl) {
		suffixFileName = ENEMY_BATTLERNAME_ANGRY_SUFFIX;
	}
	else if(this._bar_TimelimitTakeOrder > 0) {
		suffixFileName = ENEMY_BATTLERNAME_CHARGE_SUFFIX;
	}
	else if(this.isDrunk) {
		suffixFileName = ENEMY_BATTLERNAME_BLUSH_SUFFIX;
	}

	return suffixFileName;
};

Game_Enemy.prototype.waitressBattle_getNewTimeLimit = function(timeLimit) { 
	let value = $gameParty.waitressBattle_getCurrentTimeInSeconds();
	value += timeLimit;
	if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_III)) {
		value += 40;
	}
	else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II)) {
		value += 25;
	}
	else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_I)) {
		value += 15;
	}
	if(this.hasAngryPrefix() || this.hasElitePrefix()) value -= 20;
	if(this.hasDrunkPrefix()) value += 20;
	return value;
};

////////
// Valid Target

Game_Enemy.prototype.isValidTargetForWaitressBattle_moveToTable = function() { 
	let waitress = $gameActors.actor(ACTOR_KARRYN_ID);
	let isTable = this.isBarTableType;
	let table = this.enemyId();
	let waitressLocation = waitress._barLocation;
	
	if(!isTable) return false;
	if(table === waitressLocation) return false;
	
	return true;
};

Game_Enemy.prototype.isValidTargetForWaitressBattle_waitressTableServing = function() { 
	let waitress = $gameActors.actor(ACTOR_KARRYN_ID);
	let table = waitress._barLocation;
	let seatId = this._barSeatId;
	let isAsleep = !this.isAwake_waitressBattle();
	let inBrawl = this._bar_InBrawl;
	if(isAsleep || inBrawl) return false;
	
	if(table === BAR_TABLE_A_ENEMY_ID) {
		return seatId === BAR_TABLE_A_LEFT_SEAT || seatId === BAR_TABLE_A_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		return seatId === BAR_TABLE_B_LEFT_SEAT || seatId === BAR_TABLE_B_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		return seatId === BAR_TABLE_D_LEFT_SEAT || seatId === BAR_TABLE_D_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		return seatId === BAR_TABLE_C_TOP_LEFT_SEAT || seatId === BAR_TABLE_C_TOP_RIGHT_SEAT || seatId === BAR_TABLE_C_BOTTOM_LEFT_SEAT || seatId === BAR_TABLE_C_BOTTOM_RIGHT_SEAT;
	}
	
	return false;
};

Game_Enemy.prototype.isValidTargetForWaitressBattle_waitressKickOutBar = function() { 
	let waitress = $gameActors.actor(ACTOR_KARRYN_ID);
	let table = waitress._barLocation;
	let seatId = this._barSeatId;
	let waitressHasEnoughStamina = waitress.stamina >= waitress.staminaCostToKickOutBar(this);
	if(!waitressHasEnoughStamina) return false;

	if(table === BAR_TABLE_A_ENEMY_ID) {
		return seatId === BAR_TABLE_A_LEFT_SEAT || seatId === BAR_TABLE_A_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		return seatId === BAR_TABLE_B_LEFT_SEAT || seatId === BAR_TABLE_B_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		return seatId === BAR_TABLE_D_LEFT_SEAT || seatId === BAR_TABLE_D_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		return seatId === BAR_TABLE_C_TOP_LEFT_SEAT || seatId === BAR_TABLE_C_TOP_RIGHT_SEAT || seatId === BAR_TABLE_C_BOTTOM_LEFT_SEAT || seatId === BAR_TABLE_C_BOTTOM_RIGHT_SEAT;
	}
	
	return false;
};

Game_Enemy.prototype.isValidTargetForWaitressBattle_waitressHarassment = function() { 
	let waitress = $gameActors.actor(ACTOR_KARRYN_ID);
	let table = waitress._barLocation;
	let seatId = this._barSeatId;
	let isAsleep = !this.isAwake_waitressBattle();
	let inBrawl = this._bar_InBrawl;
	if(isAsleep || inBrawl) return false;
	
	if(table === BAR_TABLE_A_ENEMY_ID) {
		return seatId === BAR_TABLE_A_LEFT_SEAT || seatId === BAR_TABLE_A_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_B_ENEMY_ID) {
		return seatId === BAR_TABLE_B_LEFT_SEAT || seatId === BAR_TABLE_B_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_D_ENEMY_ID) {
		return seatId === BAR_TABLE_D_LEFT_SEAT || seatId === BAR_TABLE_D_RIGHT_SEAT || seatId === BAR_TABLE_C_BOTTOM_LEFT_SEAT || seatId === BAR_TABLE_C_BOTTOM_RIGHT_SEAT;
	}
	else if(table === BAR_TABLE_C_ENEMY_ID) {
		return seatId === BAR_TABLE_C_TOP_LEFT_SEAT || seatId === BAR_TABLE_C_TOP_RIGHT_SEAT || seatId === BAR_TABLE_C_BOTTOM_LEFT_SEAT || seatId === BAR_TABLE_C_BOTTOM_RIGHT_SEAT;
	}
	
	return false;
};

////////
// Enemy Drinks

Game_Enemy.prototype.waitressBattle_addCurrentDrinkToTable = function() {
	let currentDrink = this._bar_currentDrink;
	if(currentDrink !== ALCOHOL_TYPE_NOTHING) {
		let table = false;
		let seatId = this._barSeatId;
		
		if(seatId === BAR_TABLE_A_LEFT_SEAT || seatId === BAR_TABLE_A_RIGHT_SEAT) {
			table = BAR_TABLE_A_ENEMY_ID;
		}
		else if(seatId === BAR_TABLE_B_LEFT_SEAT || seatId === BAR_TABLE_B_RIGHT_SEAT) {
			table = BAR_TABLE_B_ENEMY_ID;
		}
		else if(seatId === BAR_TABLE_D_LEFT_SEAT || seatId === BAR_TABLE_D_RIGHT_SEAT) {
			table = BAR_TABLE_D_ENEMY_ID;
		}
		else if(seatId === BAR_TABLE_C_TOP_LEFT_SEAT || seatId === BAR_TABLE_C_TOP_RIGHT_SEAT || seatId === BAR_TABLE_C_BOTTOM_LEFT_SEAT || seatId === BAR_TABLE_C_BOTTOM_RIGHT_SEAT) {
			table = BAR_TABLE_C_ENEMY_ID;
		}
		else {
			console.log('error: waitressBattle_addCurrentDrinkToTable, bad _barSeatId: ' + seatId);
			return;
		}
	
		if(currentDrink === ALCOHOL_TYPE_PALE_ALE || currentDrink === ALCOHOL_TYPE_DARK_ALE) {
			$gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(table, 1, 0);
		}
		else {
			$gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(table, 0, 1);
		}
		
		this._bar_currentDrink = ALCOHOL_TYPE_NOTHING;
		this._bar_remainingDrinkAmount = 0;
		this.removeState(STATE_BAR_DRINKING_ALE_ID);
		this.removeState(STATE_BAR_DRINKING_WHITE_GLASS_ID);
		this.removeState(STATE_BAR_DRINKING_ORANGE_GLASS_ID);
	}
};

Game_Enemy.prototype.waitressBattle_getDrink = function(drink) {
	this.waitressBattle_addCurrentDrinkToTable();
	this._bar_currentDrink = drink;
	
	if(drink === ALCOHOL_TYPE_PALE_ALE || drink === ALCOHOL_TYPE_DARK_ALE) {
		this._bar_remainingDrinkAmount = ALCOHOL_CAPACITY_ALE;
		this.addState(STATE_BAR_DRINKING_ALE_ID);
	}
	else {
		this._bar_remainingDrinkAmount = ALCOHOL_CAPACITY_NON_ALE;
		
		if(this._bar_currentDrink === ALCOHOL_TYPE_GOLD_RUM || this._bar_currentDrink === ALCOHOL_TYPE_OVERPROOF_RUM || this._bar_currentDrink === ALCOHOL_TYPE_WHISKEY)
			this.addState(STATE_BAR_DRINKING_ORANGE_GLASS_ID);
		else
			this.addState(STATE_BAR_DRINKING_WHITE_GLASS_ID)
		
	}
};

Game_Enemy.prototype.waitressBattle_enemyDrink = function(amount) {
	let addedAlcohol = 0;
	if(this._bar_remainingDrinkAmount <= amount) {
		if(this._bar_currentDrink !== ALCOHOL_TYPE_WATER) 
			addedAlcohol += this._bar_currentDrink * this._bar_remainingDrinkAmount;
		this.waitressBattle_addCurrentDrinkToTable();
	}
	else {
		if(this._bar_currentDrink !== ALCOHOL_TYPE_WATER) 
			addedAlcohol += this._bar_currentDrink * amount;
		this._bar_remainingDrinkAmount -= amount;
	}
	
	if(addedAlcohol > 0) {
		let alcoholDamage = addedAlcohol * $gameTroop.waitressBattle_getAlcoholStrength(this, 15, false);
		//console.log('waitressBattle_enemyDrink ' + this.displayName() + ': addedAlcohol:' + addedAlcohol + ' damage:' +  alcoholDamage);
		this._hp -= Math.min(alcoholDamage, this.hp - 1);
	}
};

Game_Enemy.prototype.waitressBattle_getTableId = function() {
	let seatId = this._barSeatId;
	if(seatId === BAR_TABLE_A_LEFT_SEAT || seatId === BAR_TABLE_A_RIGHT_SEAT)
		return BAR_TABLE_A_ENEMY_ID;
	else if(seatId === BAR_TABLE_B_LEFT_SEAT || seatId === BAR_TABLE_B_RIGHT_SEAT) {
		return BAR_TABLE_B_ENEMY_ID;
	}
	else if(seatId === BAR_TABLE_C_TOP_LEFT_SEAT || seatId === BAR_TABLE_C_TOP_RIGHT_SEAT || seatId === BAR_TABLE_C_BOTTOM_LEFT_SEAT || seatId === BAR_TABLE_C_BOTTOM_RIGHT_SEAT) {
		return BAR_TABLE_C_ENEMY_ID;
	}
	else if(seatId === BAR_TABLE_D_LEFT_SEAT || seatId === BAR_TABLE_D_RIGHT_SEAT) {
		return BAR_TABLE_D_ENEMY_ID;
	}
};
Game_Enemy.prototype.waitressBattle_getAvailableDirtyMugsOnTable = function() {
	let tableId = this.waitressBattle_getTableId();
	let dirtyTableMugs = 0;
	
	if(tableId === BAR_TABLE_A_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableA._dirtyMugs;
	}
	else if(tableId === BAR_TABLE_B_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableB._dirtyMugs;
	}
	else if(tableId === BAR_TABLE_C_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableC._dirtyMugs;
	}
	else if(tableId === BAR_TABLE_D_ENEMY_ID) {
		dirtyTableMugs = $gameTroop._tableD._dirtyMugs;
	}
	
	return dirtyTableMugs;
};
Game_Enemy.prototype.waitressBattle_getAvailableDirtyGlassesOnTable = function() {
	let tableId = this.waitressBattle_getTableId();
	let dirtyTableGlasses = 0;
	
	if(tableId === BAR_TABLE_A_ENEMY_ID) {
		dirtyTableGlasses = $gameTroop._tableA._dirtyGlasses;
	}
	else if(tableId === BAR_TABLE_B_ENEMY_ID) {
		dirtyTableGlasses = $gameTroop._tableB._dirtyGlasses;
	}
	else if(tableId === BAR_TABLE_C_ENEMY_ID) {
		dirtyTableGlasses = $gameTroop._tableC._dirtyGlasses;
	}
	else if(tableId === BAR_TABLE_D_ENEMY_ID) {
		dirtyTableGlasses = $gameTroop._tableD._dirtyGlasses;
	}
	
	return dirtyTableGlasses;
};

///////
// Enemy Brawl Skills

Game_Enemy.prototype.customReq_barBrawlHasGlass = function() {
	let dirtyTableMugs = this.waitressBattle_getAvailableDirtyMugsOnTable();
	let dirtyTableGlasses = this.waitressBattle_getAvailableDirtyGlassesOnTable();
	
	return dirtyTableGlasses > 0 || dirtyTableGlasses > 0; 
};
Game_Enemy.prototype.dmgFormula_barBrawlGlassSmash = function(target) {
	target.waitressBattle_enterBarBrawl();
	let dirtyTableMugs = this.waitressBattle_getAvailableDirtyMugsOnTable();
	let dirtyTableGlasses = this.waitressBattle_getAvailableDirtyGlassesOnTable();
	let tableId = this.waitressBattle_getTableId();
	let dmg = this.str * 5 - target.str * 2;
	
	if(dirtyTableMugs > 0) $gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(tableId, -1, 0);
	else if(dirtyTableGlasses > 0) $gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(tableId, 0, -1);
	
	$gameParty.waitressBattle_increaseBrawlDamage(10 + dmg * 0.2);
	
	return dmg;
};
Game_Enemy.prototype.dmgFormula_barBrawlGlassThrow = function(target) {
	target.waitressBattle_enterBarBrawl();
	let dirtyTableMugs = this.waitressBattle_getAvailableDirtyMugsOnTable();
	let dirtyTableGlasses = this.waitressBattle_getAvailableDirtyGlassesOnTable();
	let tableId = this.waitressBattle_getTableId();
	let dmg = this.dex * 5 - target.dex - target.str;
	
	if(dirtyTableMugs > 0) $gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(tableId, -1, 0);
	else if(dirtyTableGlasses > 0) $gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(tableId, 0, -1);
	
	$gameParty.waitressBattle_increaseBrawlDamage(10 + dmg * 0.2);
	
	return dmg;
};
Game_Enemy.prototype.dmgFormula_barBrawlGlassStab = function(target) {
	target.waitressBattle_enterBarBrawl();
	let dirtyTableMugs = this.waitressBattle_getAvailableDirtyMugsOnTable();
	let dirtyTableGlasses = this.waitressBattle_getAvailableDirtyGlassesOnTable();
	let tableId = this.waitressBattle_getTableId();
	let dmg = this.agi * 5 - target.agi - target.str;
	
	if(dirtyTableMugs > 0) $gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(tableId, -1, 0);
	else if(dirtyTableGlasses > 0) $gameTroop.waitressBattle_increaseDirtyMugsAndGlasses(tableId, 0, -1);
	
	$gameParty.waitressBattle_increaseBrawlDamage(10 + dmg * 0.2);
	
	return dmg;
};
Game_Enemy.prototype.dmgFormula_barBrawlPunch = function(target) {
	target.waitressBattle_enterBarBrawl();
	let dmg = this.str * 4 - target.str * 2;
	
	$gameParty.waitressBattle_increaseBrawlDamage(2 + dmg * 0.1);
	
	return dmg;
};
Game_Enemy.prototype.dmgFormula_barBrawlShove = function(target) {
	target.waitressBattle_enterBarBrawl();
	let dmg = this.str * 3 - target.str * 2;
	
	$gameParty.waitressBattle_increaseBrawlDamage(5 + dmg * 0.2);
	
	return dmg;
};

Game_Enemy.prototype.waitressBattle_enterBarBrawl = function() {
	if(!this._bar_InBrawl) {
		this._bar_TimelimitAngryLeaving = -1;
		this._bar_TimelimitTakeOrder = -1;
		this._bar_TimelimitGetServed = -1;
		this._bar_InBrawl = true;
		this.waitressBattle_addCurrentDrinkToTable();
		this.removeState(STATE_BAR_SLEEP_ID);
		this.removeState(STATE_HORNY_ID);
		
		if($gameTroop.waitressBattle_brawlers().length === 2) {
			BattleManager._logWindow.push('addText', TextManager.waitressBrawlStart);
			AudioManager.playSe({name:'+Battle1', pan:0, pitch:100, volume:70});
		}
	}
};

////////
// Enemy Bar Actions

Game_Enemy.prototype.waitressBattle_selectNormalAction = function(target) {
	let table = this.waitressBattle_getTableId();
	let tableMembers = $gameTroop.waitressBattle_getTableMembersOfTarget(this, false, false);
	let isAloneAtTable = tableMembers.length === 0;
	let targetIsAtBar = target._barLocation === BAR_LOCATION_STANDBY;
	let tableHasJoke = $gameTroop.waitressBattle_doesTableHaveOngoingJoke(table);
	let jokerSeatId = $gameTroop.waitressBattle_getTableJokerSeatId(table);
	let isTheJoker = this._barSeatId === jokerSeatId;
	let jokerDisplayName = $gameTroop._barSeats[jokerSeatId];
	let currentDrink = this._bar_currentDrink;
	
	let barActionArray = [];
	const BAR_ACTION_SILENT_DRINK = 1;
	const BAR_ACTION_CHUG_DRINK = 2;
	const BAR_ACTION_CHAT_WITH_SOMEONE = 3;
	const BAR_ACTION_CHAT_WITH_HIMSELF = 4;
	const BAR_ACTION_TELL_JOKE = 5;
	const BAR_ACTION_HEAR_JOKE = 6;
	const BAR_ACTION_LAUGH_JOKE = 7;
	const BAR_ACTION_CALL_WAITRESS = 8;
	const BAR_ACTION_SIGHT = 9;
	
	if(this.isDrunk || this.isDeadDrunk || this.isHorny) {
		barActionArray.push(BAR_ACTION_CALL_WAITRESS);
	}
	if(this.isHorny) {
		if(targetIsAtBar) barActionArray.push(BAR_ACTION_SIGHT);
	};
	
	if(tableHasJoke) {
		if(isTheJoker) {
			BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyContinuesJoke.format(jokerDisplayName.displayName()));
			return;
		}
		else {
			barActionArray.push(BAR_ACTION_HEAR_JOKE);
			if(this.isDrunk) barActionArray.push(BAR_ACTION_LAUGH_JOKE);
			else if(this.isDeadDrunk) {
				barActionArray.push(BAR_ACTION_LAUGH_JOKE);
				barActionArray.push(BAR_ACTION_LAUGH_JOKE);
				barActionArray.push(BAR_ACTION_LAUGH_JOKE);
			}
		}
	}
	else {
		if(currentDrink === ALCOHOL_TYPE_PALE_ALE || currentDrink === ALCOHOL_TYPE_DARK_ALE || currentDrink === ALCOHOL_TYPE_VODKA || currentDrink === ALCOHOL_TYPE_TEQUILA) {
			if(this.isTipsy) barActionArray.push(BAR_ACTION_CHUG_DRINK);
			else if(this.isDrunk) {
				barActionArray.push(BAR_ACTION_CHUG_DRINK);
				barActionArray.push(BAR_ACTION_CHUG_DRINK);
			}
		}
		
		if(isAloneAtTable) {
			barActionArray.push(BAR_ACTION_SILENT_DRINK);
			if(targetIsAtBar) barActionArray.push(BAR_ACTION_SIGHT);
			if(this.isDrunk) barActionArray.push(BAR_ACTION_CHAT_WITH_HIMSELF);
			else if(this.isDeadDrunk) {
				barActionArray.push(BAR_ACTION_CHAT_WITH_HIMSELF);
				barActionArray.push(BAR_ACTION_CHAT_WITH_HIMSELF);
			}
		}
		else {
			barActionArray.push(BAR_ACTION_CHAT_WITH_SOMEONE);
			barActionArray.push(BAR_ACTION_CHAT_WITH_SOMEONE);
			if(this.isTipsy || this.isDrunk || this.isDeadDrunk) {
				if(currentDrink === ALCOHOL_TYPE_OVERPROOF_RUM || currentDrink === ALCOHOL_TYPE_WHISKEY || currentDrink === ALCOHOL_TYPE_GOLD_RUM || currentDrink === ALCOHOL_TYPE_WATER) {
					barActionArray.push(BAR_ACTION_TELL_JOKE);
					if(this.isDrunk) barActionArray.push(BAR_ACTION_TELL_JOKE);
				}
			}
		}
	}
	
	let barAction = barActionArray[Math.randomInt(barActionArray.length)];
	
	if(barAction === BAR_ACTION_SILENT_DRINK) {
		this.waitressBattle_action_silentDrink();
	}
	else if(barAction === BAR_ACTION_CHUG_DRINK) {
		this.waitressBattle_action_chugDrink();
	}
	else if(barAction === BAR_ACTION_SIGHT) {
		let skillId = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
		this.useAISkill(skillId, target);
	}
	else if(barAction === BAR_ACTION_CHAT_WITH_SOMEONE) {
		let randomTarget = tableMembers[Math.randomInt(tableMembers.length)];
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyChatting.format(this.displayName(), randomTarget.displayName()));
		AudioManager.playSe({name:'+Voice_Enemy_d', pan:0, pitch:100, volume:50});
		if(Math.random() < 0.5) 
			this.waitressBattle_enemyDrink(1);
	}
	else if(barAction === BAR_ACTION_CHAT_WITH_HIMSELF) {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyChattingHimself.format(this.displayName()));
		if(Math.random() < 0.33) 
			this.waitressBattle_enemyDrink(1);
	}
	else if(barAction === BAR_ACTION_TELL_JOKE) {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyTellsJoke.format(this.displayName()));
		$gameTroop.waitressBattle_setTableJoker(this);
		AudioManager.playSe({name:'+Voice_Enemy_a', pan:0, pitch:100, volume:70});
	}
	else if(barAction === BAR_ACTION_HEAR_JOKE) {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyHearsJoke.format(this.displayName(), jokerDisplayName.displayName()));
		if(Math.random() < 0.33) 
			this.waitressBattle_enemyDrink(1);
	}
	else if(barAction === BAR_ACTION_LAUGH_JOKE) {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyLaughsJoke.format(this.displayName(), jokerDisplayName.displayName()));
		//this.waitressBattle_enemyDrink(1);
	}
	else if(barAction === BAR_ACTION_CALL_WAITRESS) {
		this.waitressBattle_action_askForWaitress(false);
	}
	
};

Game_Enemy.prototype.waitressBattle_action_silentDrink = function() {
	let drinkAmount = 1;
	let currentDrink = this._bar_currentDrink;
	
	if(currentDrink === ALCOHOL_TYPE_WHISKEY || currentDrink === ALCOHOL_TYPE_GOLD_RUM || currentDrink === ALCOHOL_TYPE_OVERPROOF_RUM) {
		//nothing
	}
	else {
		drinkAmount +=  Math.randomInt(2)
	}
	
	this.waitressBattle_enemyDrink(drinkAmount);
};
Game_Enemy.prototype.waitressBattle_action_chugDrink = function() {
	let drinkAmount = 2;
	let currentDrink = this._bar_currentDrink;
	
	if(currentDrink === ALCOHOL_TYPE_PALE_ALE || currentDrink === ALCOHOL_TYPE_DARK_ALE) drinkAmount += 2;
	
	if(this._bar_remainingDrinkAmount <= drinkAmount) {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyChugsDrinkFinish.format(this.displayName()));
		AudioManager.playSe({name:'+Waitress_Drink1', pan:10, pitch:100, volume:100});
	}
	else {
		BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyChugsDrink.format(this.displayName()));
		AudioManager.playSe({name:'+Waitress_Drink2', pan:0, pitch:100, volume:90});
	}
	
	this.waitressBattle_enemyDrink(drinkAmount);
};

Game_Enemy.prototype.waitressBattle_action_wakeUp = function() {
	this.removeState(STATE_BAR_SLEEP_ID);
	BattleManager._logWindow.push('addText', TextManager.waitressEnemyWakeUp.format(this.displayName()));
};
Game_Enemy.prototype.waitressBattle_action_fallAsleep = function() {
	this.addState(STATE_BAR_SLEEP_ID);
	this.removeState(STATE_HORNY_ID);
	this._bar_InBrawl = false;
	BattleManager._logWindow.push('addText', TextManager.waitressEnemySleep.format(this.displayName()));
};
Game_Enemy.prototype.waitressBattle_action_isFuming = function() {
	BattleManager._logWindow.push('addText', TextManager.waitressBarEnemyFuming.format(this.displayName()));
	AudioManager.playSe({name:'Fog1', pan:0, pitch:70, volume:70});
	this._bar_fumedCount += 0.25;
};
Game_Enemy.prototype.waitressBattle_action_leavesBar = function() {
	if(this.isDrunk || this.isDeadDrunk) {
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyLeavesBarDrunk.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:70, volume:70});
	}
	else {
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyLeavesBar.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
	}
	
	this.waitressBattle_addCurrentDrinkToTable();
	$gameTroop._barSeats[this._barSeatId] = false;
	this._bar_TimelimitAngryLeaving = -1;
	this._bar_TimelimitTakeOrder = -1;
	this._bar_TimelimitGetServed = -1;
	this.hide();
	this.clearActions();
    this.clearStates();
	this._bar_InBrawl = false;
    SoundManager.playEscape();
};
Game_Enemy.prototype.waitressBattle_action_askForWaitress = function(halfTimeLimit) {
	BattleManager._logWindow.push('addText', TextManager.waitressEnemyCallingForWaitress.format(this.displayName()));
	let timeLimit = 0;
	if(this.isTipsy) {
		timeLimit = BAR_TAKE_ORDER_TIPSY_TIME_LIMIT;
	}
	else {
		timeLimit = BAR_TAKE_ORDER_NORMAL_TIME_LIMIT;
	}
	timeLimit += $gameTroop.waitressBattle_awakeMembers().length * BAR_TIME_LIMIT_BONUS_NUM_OF_CUSTOMERS;
	if(halfTimeLimit) timeLimit *= 0.5;
		
	this._bar_TimelimitTakeOrder = this.waitressBattle_getNewTimeLimit(timeLimit);
};

Game_Enemy.prototype.waitressBattle_action_cheerAtBrawl = function() {
	if(this._bar_currentDrink === ALCOHOL_TYPE_NOTHING) {
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyCheerForBrawlNoDrink.format(this.displayName()));
		AudioManager.playSe({name:'+Voice_Enemy_c', pan:0, pitch:100, volume:50});
	}
	else {
		BattleManager._logWindow.push('addText', TextManager.waitressEnemyCheerForBrawlYesDrink.format(this.displayName()));
		this.waitressBattle_enemyDrink(1);
	}
};
Game_Enemy.prototype.waitressBattle_action_brawling = function() {
	let target = $gameTroop.waitressBattle_getRandomBrawler(this, true);
	if(!target) return;
	let brawlSkills = [ 1251, 1252, 1253, 1254, 1255 ];
	let success = false;
	while(brawlSkills.length > 0 && !success) {
		let index = Math.randomInt(brawlSkills.length);
		let skillId = brawlSkills.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
		if(success) {
			this.useAISkill(skillId, target);
		}
	}
	
};
Game_Enemy.prototype.waitressBattle_action_startBrawl = function() {
	this.waitressBattle_enterBarBrawl();
	
	let target = $gameTroop.waitressBattle_getRandomNonBrawler(this);
	if(!target) return;
	let brawlSkills = [ 1251, 1252, 1253, 1254, 1255 ];
	let success = false;
	while(brawlSkills.length > 0 && !success) {
		let index = Math.randomInt(brawlSkills.length);
		let skillId = brawlSkills.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
		if(success) {
			this.useAISkill(skillId, target);
		}
	}
};
Game_Enemy.prototype.waitressBattle_action_joinBrawl = function() {
	this.waitressBattle_enterBarBrawl();
	BattleManager._logWindow.push('addText', TextManager.waitressBrawlJoin.format(this.displayName()));
	AudioManager.playSe({name:'+Voice_Enemy_d', pan:0, pitch:100, volume:50});
};

Game_Enemy.prototype.waitressBattle_action_harassWaitress = function(target) {
	if(target.canStartWaitressSex()) {
		target.startWaitressSex(this);
		this.tryJoinSexPose(target, VAR_ENEMYAI_TRY_JOIN_SEX_ATTEMPTS);
		return;
	}
	
	const BAR_HARASS_FLASH = 1;
	const BAR_HARASS_DRINK = 2;
	const BAR_HARASS_PET = 3;
	let clothesMaxDamaged = target.isClothingMaxDamaged();
	let metCharmReq = Karryn.inBattleCharm > this.charm;
	let isAngry = this._bar_TimelimitAngryLeaving !== -1;
	let timeLimitMetForFlashRequest = this._bar_TimelimitUntilNextFlashRequest <= $gameParty.waitressBattle_getCurrentTimeInSeconds();
	
	let flashingLvlOne = this.tachieBoobs == 'waitress_1_flash' || this.tachieBoobs == 'waitress_1_flash_hard';
	let flashingLvlTwo = this.tachieBoobs == 'waitress_2_flash' || this.tachieBoobs == 'waitress_2_flash_hard';
	let notFlashingAlready = !flashingLvlOne && !flashingLvlTwo;

	let barHarassArray = [ BAR_HARASS_PET ];
	
	//asking for flash
	if(!clothesMaxDamaged && metCharmReq && notFlashingAlready && timeLimitMetForFlashRequest && !isAngry && (this.isTipsy || target.isTipsy || target.hasPassive(PASSIVE_FLAUNT_COUNT_ONE_ID))) {
		barHarassArray.push(BAR_HARASS_FLASH);
		if(this.isDrunk || this.isDeadDrunk)
			barHarassArray.push(BAR_HARASS_FLASH);
	}
	//asking to drink
	if(this._bar_currentDrink !== ALCOHOL_TYPE_NOTHING && this._bar_currentDrink !== ALCOHOL_TYPE_WATER){
		barHarassArray.push(BAR_HARASS_DRINK);
		if(!target.isDrunk && !target.isDeadDrunk)
			barHarassArray.push(BAR_HARASS_DRINK);
		
		if(this.isThugType) {
			if(Karryn.hasEdict(EDICT_NO_THUG_LABOR))
				barHarassArray.push(BAR_HARASS_DRINK);
		}
		else if(this.isLizardmanType) {
			if(Karryn.hasEdict(EDICT_LIZARDMEN_FREE_DRINKS))
				barHarassArray.push(BAR_HARASS_DRINK);
		}
		else if(this.isOrcType) {
			if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS))
				barHarassArray.push(BAR_HARASS_DRINK);
		}
	}
	
	if(this.isHorny) {
		barHarassArray.push(BAR_HARASS_PET);
	};
	if(this.pettingLvl() > 0) {
		barHarassArray.push(BAR_HARASS_PET);
	};
	
	if(this.isThugType) {
		if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF))
			barHarassArray.push(BAR_HARASS_PET);
	}
	else if(this.isGoblinType) {
		if(Karryn.hasEdict(EDICT_BAIT_GOBLINS))
			barHarassArray.push(BAR_HARASS_PET);
	}
	else if(this.isRogueType) {
		if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS))
			barHarassArray.push(BAR_HARASS_PET);
	}
	else if(this.isNerdType) {
		if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL))
			barHarassArray.push(BAR_HARASS_PET);
	}
	else if(this.isLizardmanType) {
		if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN))
			barHarassArray.push(BAR_HARASS_PET);
	}
	else if(this.isOrcType) {
		if(Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
			barHarassArray.push(BAR_HARASS_PET);
	}
	
	let barHarass = barHarassArray[Math.randomInt(barHarassArray.length)];

	if(barHarass === BAR_HARASS_FLASH) {
		target.waitressBattle_askedForFlash(this);
	}
	else if(barHarass === BAR_HARASS_DRINK) {
		target.waitressBattle_askedToDrink(this);
	}
	else if(barHarass === BAR_HARASS_PET) {
		this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_ATTEMPTS);
		//target.emoteWaitressServingPose();
	}
};

Game_Enemy.prototype.waitressSex_refillWaitressMug = function(target) {
	if(target._karrynMugContent === ALCOHOL_TYPE_PALE_ALE && target._karrynMugAmount === 0) {
		if(target.canMouthSwallow(false)) {
			return false;
		}
		else if(Math.random() < 0.4) {
			BattleManager._logWindow.push('addText', TextManager.waitressEnemyRefillsKarrynMug.format(this.displayName(), target.displayName()));
			AudioManager.playSe({name:'+Waitress_Ale1', pan:0, pitch:100, volume:70});
			target._karrynMugAmount = ALCOHOL_CAPACITY_ALE;
			if(this.tachieStraw !== REM_TACHIE_NULL)
				target.updateTachieStraw();
			//target.setCacheChanged();
			this.setUsedSkillThisTurn(true);
			return true;
		}
	}
	return false;
};

Game_Enemy.prototype.waitressSex_dumpWaitressMug = function(target) {
	if(target._karrynMugContent === ALCOHOL_TYPE_PALE_ALE && target._karrynMugAmount > 0) {
		if(target.canMouthSwallow(false)) {
			BattleManager._logWindow.push('addText', TextManager.waitressEnemyDumpsKarrynMug.format(this.displayName(), target.displayName()));
			AudioManager.playSe({name:'+Waitress_Dump1', pan:0, pitch:100, volume:70});
			target._karrynMugAmount = 0;
			target.resetTachieStraw();
			target.emoteWaitressSexPose();
			this.setUsedSkillThisTurn(true);
			return true;
		}
	}
	return false;
};


/////////////
// Waitress Battle AI
///////////

Game_Enemy.prototype.enemyBattleAIWaitressServing = function(target) {
	let isAsleep = this.isStateAffected(STATE_BAR_SLEEP_ID);
	let brawlGoingOn = $gameParty.waitressBattle_ongoingBrawl();
	let isBrawling = this._bar_InBrawl;
	let isAngry = this._bar_TimelimitAngryLeaving !== -1
	let isSadist = this.sadismLvl() > 1;
	let isMasochist = this.masochismLvl() > 1;
	let isInHarrassmentRange = this.isValidTargetForWaitressBattle_waitressHarassment();
	let allAliveMembers = $gameTroop.membersNeededToBeSubdued();
	
	if(isAsleep && !brawlGoingOn) return;
	
	if(brawlGoingOn) {
		if(isAsleep) {
			this.waitressBattle_action_wakeUp();
			return;
		}
		else if(isBrawling) {
			this.waitressBattle_action_brawling();
			return;
		}
		else if(isAngry && !isInHarrassmentRange) {
			this.waitressBattle_action_joinBrawl();
			return;
		}
		else if(!isInHarrassmentRange) {
			this.waitressBattle_action_cheerAtBrawl();
			return;
		}
		
	}
	else if(isBrawling) {
		if(allAliveMembers.length > 1 && (isSadist || Math.random() < (0.1 + this._bar_fumedCount))) {
			this.waitressBattle_action_startBrawl();
			return;
		}
		else if(isMasochist && Math.random() < 0.75 || Math.random() < 0.5) {
			this.waitressBattle_action_leavesBar();
			return;
		}
		else {
			this._bar_InBrawl = false;
		}
	}
	
	if(this._bar_TimelimitAngryLeaving <= $gameParty.waitressBattle_getCurrentTimeInSeconds() && !isBrawling && isAngry) {
		if(allAliveMembers.length > 1 && (isSadist || Math.random() < (0.2 + this._bar_fumedCount))) {
			this.waitressBattle_action_startBrawl();
			return;
		}
		else {
			this.waitressBattle_action_leavesBar();
			$gameParty.increaseWaitressCustomerSatisfaction(-4);
			return;
		}
	}
	
	if(this.isDeadDrunk && !isAngry) {
		let sleepChance = BAR_SLEEP_CHANCE_BASE;
		if(this.hasDrunkPrefix()) sleepChance += BAR_SLEEP_CHANCE_DRUNK_PREFIX;
		if(Math.randomInt(sleepChance) > this.currentPercentOfStamina()) {
			this.waitressBattle_action_fallAsleep();
			return;
		}
		else if(Math.randomInt(100) > BAR_DEAD_DRUNK_STAY_CHANCE - this.currentPercentOfStamina()) {
			this.waitressBattle_action_leavesBar();
			return;
		}
	}
	else if(this.isDrunk && !isAngry) {
		let sleepChance = BAR_SLEEP_CHANCE_BASE;
		if(this.hasDrunkPrefix()) sleepChance += BAR_SLEEP_CHANCE_DRUNK_PREFIX;
		if(Math.randomInt(sleepChance) > this.currentPercentOfStamina()) {
			this.waitressBattle_action_fallAsleep();
			return;
		}
	}

	
	if(this._bar_currentDrink === ALCOHOL_TYPE_NOTHING && this._bar_TimelimitTakeOrder === -1 && this._bar_TimelimitGetServed === -1) {
		this.waitressBattle_action_askForWaitress(false);
		return;
	}
	
	if(this._bar_currentDrink === ALCOHOL_TYPE_NOTHING && this._bar_TimelimitTakeOrder !== -1 && this._bar_TimelimitTakeOrder <= $gameParty.waitressBattle_getCurrentTimeInSeconds() && !isAngry) {
		if(this._bar_patiences > 0) {
			$gameParty.increaseWaitressCustomerSatisfaction(-1);
			this._bar_patiences--;
			this.waitressBattle_action_askForWaitress(true);
			return;
		}
		else {
			$gameParty.increaseWaitressCustomerSatisfaction(-2);
			this._bar_TimelimitAngryLeaving = this.waitressBattle_getNewTimeLimit(BAR_ANGRY_LEAVING_TIME_LIMIT);
			return;
		}
	}
	
	if(this._bar_TimelimitGetServed <= $gameParty.waitressBattle_getCurrentTimeInSeconds() && this._bar_TimelimitGetServed !== -1 && !isAngry) {
		if(this._bar_patiences > 0) {
			$gameParty.increaseWaitressCustomerSatisfaction(-1);
			this._bar_patiences--;
			let newTimeLimit = 0;
			if(this.isTipsy) 
				newTimeLimit = BAR_GET_SERVED_NORMAL_TIME_LIMIT;
			else 
				newTimeLimit = BAR_GET_SERVED_TIPSY_TIME_LIMIT;
			newTimeLimit += $gameTroop.waitressBattle_awakeMembers().length * BAR_TIME_LIMIT_BONUS_NUM_OF_CUSTOMERS
			this._bar_TimelimitGetServed = this.waitressBattle_getNewTimeLimit(newTimeLimit * 0.5);
			
			return;
		}
		else {
			$gameParty.increaseWaitressCustomerSatisfaction(-2);
			this._bar_TimelimitAngryLeaving = this.waitressBattle_getNewTimeLimit(BAR_ANGRY_LEAVING_TIME_LIMIT);
			return;
		}
	}
	
	if(isAngry && Math.random() < 0.33) {
		this.waitressBattle_action_isFuming();
		return;
	}
	else if(isInHarrassmentRange && DEBUG_MODE) {
		this.waitressBattle_action_harassWaitress(target);
		return;
	}
	else {
		this.waitressBattle_selectNormalAction(target);
		return;
	}
};