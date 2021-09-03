var Remtairy = Remtairy || {};
Remtairy.KarrynReceptionist = Remtairy.KarrynReceptionist || {};

//敵の位置
const VISITOR_LEFT_SEAT_X = 120;
const VISITOR_RIGHT_SEAT_X = 302;
const VISITOR_FIRST_SEAT_Y = 490;
const VISITOR_ROW_Y = -75;

const VISITOR_STATES_ICON_X = -52;
const VISITOR_NAME_TEXT_WIDTH = 115;
const VISITOR_NAME_TEXT_X = 30;
const REM_SELECTION_SIZE_RECEPTIONIST_WIDTH = 188;

const BATTLEBACK1_VISITOR_RECEPTIONIST_NAME = 'Reception1';

//=============================================================================
 /*:
 * @plugindesc Karryn Receptionist
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const RECEPTIONIST_SKILL_START = 1577;
const RECEPTIONIST_SKILL_END = 1599;

const RECEPTIONIST_REP_DECAY_DAYS = 4;

const VISITOR_MIN_PAGES = 1;
const VISITOR_MAX_PAGES = 5;
const VISITOR_BASE_MIN_TIME = 3;
const VISITOR_BASE_MAX_TIME = 6;
const VISITOR_DESK_DISTANCE = 2.5;
const VISITOR_ROOM_DISTANCE = 4;
const VISITOR_PAGES_BASE_TIME = 3;
const VISITOR_PAGES_EACH_TIME = 2.5;
const VISITOR_WANTED_PERV_PROMOTE_CHANCE_INC = 10;

const VISITOR_REQUEST_HAND_SHAKE_ID = 1;
const VISITOR_REQUEST_BOOBS_SHAKE_ID = 2;
const VISITOR_REQUEST_KISS_ID = 3;
const VISITOR_REQUEST_HANDJOB_ID = 4;
const VISITOR_REQUEST_BLOWJOB_ID = 5;

const GOBLIN_DISTANCE_OFFSCREEN_FAR = 2;
const GOBLIN_DISTANCE_OFFSCREEN_CLOSE = 3;
const GOBLIN_DISTANCE_FARTHEST = 4;
const GOBLIN_DISTANCE_FAR = 5;
const GOBLIN_DISTANCE_MEDIUM = 6;
const GOBLIN_DISTANCE_CLOSE = 7;

const RECEPTIONIST_MENTAL_PHASE_COOLDOWN = 2;
const RECEPTIONIST_SEX_SKILL_COOLDOWN = 2;
const RECEPTIONIST_SEXUAL_LINE_PLEASURE_THRESHOLD = 80;
const RECEPTIONIST_GENERAL_SATISFACTION_GAIN_FROM_VISITING_ROOM = 3;
const RECEPTIONIST_GENERAL_SATISFACTION_GAIN_FROM_FAN_REQUEST_FULFILLED = 2;
const RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_WRONG_VISITING_ROOM = -2;
const RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_STARTER_STILL_HERE = -2;
const RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_ANGRY_STILL_HERE = -2;
const RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_ANGRY_LEAVE = -1;
const RECEPTIONIST_FAN_SATISFACTION_GAIN_FROM_REQUEST_FULFILLED = 3;
const RECEPTIONIST_FAN_SATISFACTION_GAIN_FROM_VISITING_ROOM = 3;
const RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_REQUEST_REJECTED = -2;
const RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_ANGRY_LEAVE = -2;
const RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_STARTER_STILL_HERE = -5;
const RECEPTIONIST_PERV_SATISFACTION_GAIN_FROM_REQUEST_FULFILLED = 2;
const RECEPTIONIST_PERV_SATISFACTION_GAIN_FROM_SECOND_REQUEST_FULFILLED = 2;
const RECEPTIONIST_PERV_SATISFACTION_LOST_FROM_REQUEST_REJECTED = -2;
const RECEPTIONIST_PERV_SATISFACTION_LOST_FROM_STARTER_STILL_HERE = -6;

const RECEPTIONIST_ORDER_GAIN_FROM_VISITING_ROOM_BASE = 0.4;
const RECEPTIONIST_ORDER_GAIN_FROM_VISITING_ROOM_PER_TIME = 0.1;
const RECEPTIONIST_ORDER_GAIN_STARTING_SOFT_CAP = 2;
const RECEPTIONIST_ORDER_GAIN_MULTIPLER_PASS_SOFT_CAP = 0.15;
const RECEPTIONIST_PROCESS_PAPER_BASE_TIME = 20;
const RECEPTIONIST_PROCESS_PAPER_EACH_TIME = 20;

const RECEPTIONIST_CHANCE_OF_VISITOR_A_NOTICING = 12;
const RECEPTIONIST_CHANCE_OF_VISITOR_B_NOTICING = 6;
const RECEPTIONIST_CHANCE_OF_VISITOR_C_NOTICING = 2;
const RECEPTIONIST_CHANCE_OF_VISITOR_D_NOTICING = 1;
const RECEPTIONIST_CHANCE_OF_FAN_NOTICING_MULTI = 2;

const VISITING_ROOM_A_ID = 0;
const VISITING_ROOM_B_ID = 1;
const VISITING_ROOM_C_ID = 2;
const VISITING_ROOM_D_ID = 3;
const VISITING_ROOM_TIME_BUFFER = 30;

const VAR_MIN_RECEPTIONIST_SATISFACTION = 5;
const VAR_MIN_RECEPTIONIST_FAME = 3;
const VAR_MIN_RECEPTIONIST_NOTORIETY = 0;

const WANTED_DAYS_ADDED_TO_DEFEATED_AFTER_REJECT = 1;

const ENEMY_ID_MALE_VISITOR_NORMAL = 162;
const ENEMY_ID_FEMALE_VISITOR_NORMAL = 163;
const ENEMY_ID_MALE_VISITOR_SLOW = 164;
const ENEMY_ID_FEMALE_VISITOR_SLOW = 165;
const ENEMY_ID_MALE_VISITOR_FAST = 166;
const ENEMY_ID_FEMALE_VISITOR_FAST = 167;
const ENEMY_ID_MALE_VISITOR_FAN = 168;
const ENEMY_ID_FEMALE_VISITOR_FAN = 169;
const ENEMY_ID_MALE_VISITOR_PERV_SLOW = 170;
const ENEMY_ID_MALE_VISITOR_PERV_NORMAL = 171;
const ENEMY_ID_MALE_VISITOR_PERV_FAST = 172;
const ENEMY_ID_MALE_VISITOR_GOBLIN = 173;
const ENEMY_ID_MALE_VISITOR_PERV_GOBLIN = 174;

//////////
// Game Party
///////////

Object.defineProperty(Game_Party.prototype, "isInReceptionistBattle", {
	get: function () { return this._isInReceptionistBattle; }, configurable: true
});
Game_Party.prototype.setIsInReceptionistBattleFlag = function(status) {
	this._isInReceptionistBattle = status;
};

Game_Party.prototype.initializeReceptionistSettings = function() {
	this.setVisitorNumberOrder(0);
	this.setReceptionistSatisfaction(VAR_MIN_RECEPTIONIST_SATISFACTION);
	this.setReceptionistFame(VAR_MIN_RECEPTIONIST_FAME);
	this.setReceptionistNotoriety(VAR_MIN_RECEPTIONIST_NOTORIETY);
};


Game_Party.prototype.setVisitorNumberOrder = function(value) {
	this._visitorNumberOrder = value;
};
Game_Party.prototype.increaseVisitorNumberOrder = function() {
	this.setVisitorNumberOrder(this._visitorNumberOrder + 1);
};
Game_Party.prototype.getVisitorNumberOrderForNewVisitor = function() {
	this.increaseVisitorNumberOrder();
	return this._visitorNumberOrder;
};

Game_Party.prototype.setReceptionistSatisfaction = function(value) {
	let minSat = this.getMinimumReceptionistSatisfaction();
	
	this._receptionistSatisfaction = Math.max(minSat, value);
	$gameVariables.setValue(VARIABLE_RECEPTIONIST_SATISFACTION_ID, this._receptionistSatisfaction);
};
Game_Party.prototype.increaseReceptionistSatisfaction = function(value) {
	this.setReceptionistSatisfaction(this._receptionistSatisfaction + value);
};
Game_Party.prototype.getMinimumReceptionistSatisfaction = function() {
	let minSat = 0;
	if(Karryn.hasEdict(EDICT_REPAIR_VISITING_ROOM_D)) minSat += 4;
	else if(Karryn.hasEdict(EDICT_REPAIR_VISITING_ROOM_C)) minSat += 2;
	return minSat;
};

Game_Party.prototype.setReceptionistFame = function(value) {
	let minFame = VAR_MIN_RECEPTIONIST_FAME;
	//if(Karryn.hasThisTitle(TITLE_ID_RECEPTIONIST_HANDSHAKE)) minFame += 3; 
	//if(Karryn.hasThisTitle(TITLE_ID_VISITOR_FIRST_KISS)) minFame += 2; 
	//if(Karryn.hasThisTitle(TITLE_ID_SCANDELOUS_IDOL)) minFame += 1; 
	
	this._receptionistFame = Math.max(minFame, value);
	$gameVariables.setValue(VARIABLE_RECEPTIONIST_FAME_ID, this._receptionistFame);
};
Game_Party.prototype.increaseReceptionistFame = function(value) {
	this.setReceptionistFame(this._receptionistFame + value);
};

Game_Party.prototype.setReceptionistNotoriety = function(value) {
	let minNotoriety = VAR_MIN_RECEPTIONIST_NOTORIETY;
	//if(Karryn.hasThisTitle(TITLE_ID_VISITOR_FIRST_KISS)) minNotoriety += 3; 
	//if(Karryn.hasThisTitle(TITLE_ID_VISITOR_SWALLOWER)) minNotoriety += 4; 
	//if(Karryn.hasThisTitle(TITLE_ID_SCANDELOUS_IDOL)) minNotoriety += 3; 
	
	this._receptionistNotoriety = Math.max(minNotoriety, value);
	if(!DEBUG_MODE) this._receptionistNotoriety = 0;
	$gameVariables.setValue(VARIABLE_RECEPTIONIST_NOTORIETY_ID, this._receptionistNotoriety);
};
Game_Party.prototype.increaseReceptionistNotoriety = function(value) {
	this.setReceptionistNotoriety(this._receptionistNotoriety + value);
};


Game_Party.prototype.maxAvailableVisitorRooms = function() {
	if(Karryn.hasEdict(EDICT_REPAIR_VISITING_ROOM_D)) return 4;
	else if(Karryn.hasEdict(EDICT_REPAIR_VISITING_ROOM_C)) return 3;
	else return 2;
};

Game_Party.prototype.receptionistBattle_getCurrentTimeInSeconds = function() {
	return this._receptionistBattle_currentTimeInSeconds;
};
Game_Party.prototype.receptionBattle_getTimeMinutesNumber = function() {
	let timeLimit = this._receptionistBattle_timeLimit - this.receptionistBattle_getCurrentTimeInSeconds();
	let minutes = Math.floor(timeLimit / 60);
	let seconds = timeLimit - minutes * 60;
	return minutes;
};
Game_Party.prototype.receptionBattle_getTimeSecondsNumber = function() {
	if($gameParty.receptionistBattle_getCurrentTimeInSeconds() >= $gameParty._receptionistBattle_timeLimit)
		return 0;
	let minutes = Math.floor(this.receptionistBattle_getCurrentTimeInSeconds() / 60);
	let seconds = this.receptionistBattle_getCurrentTimeInSeconds() - minutes * 60;
	if(seconds > 0) seconds = 60 - seconds;
	return seconds;
};

Game_Party.prototype.receptionBattle_advanceTimeBySeconds = function(value) {
	this._receptionistBattle_currentTimeInSeconds += value;
};

Game_Party.prototype.setReceptionistBattleTimeLimit = function(minutes) {
	if(minutes === 20) {
		this._receptionistBattle_timeLimit = 1200;
		this._receptionistBattle_baseFatigueGain = 2;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	else if(minutes === 30) {
		this._receptionistBattle_timeLimit = 1800;
		this._receptionistBattle_baseFatigueGain = 4;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1.1;
	}
	else if(minutes === 40) {
		this._receptionistBattle_timeLimit = 2400;
		this._receptionistBattle_baseFatigueGain = 6;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1.25;
	}
	else if(minutes === 50) {
		this._receptionistBattle_timeLimit = 3000;
		this._receptionistBattle_baseFatigueGain = 8;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1.5;
	}
	else if(minutes === 60) {
		this._receptionistBattle_timeLimit = 3600;
		this._receptionistBattle_baseFatigueGain = 12;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1.75;
	}
	else if(minutes === 15) {
		this._receptionistBattle_timeLimit = 900;
		this._receptionistBattle_baseFatigueGain = 1;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	else if(minutes === 10) {
		this._receptionistBattle_timeLimit = 600;
		this._receptionistBattle_baseFatigueGain = 1;
		this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	
	//debugging
	//this._receptionistBattle_timeLimit = 300;
};

Object.defineProperty(Game_Party.prototype, "receptionistBattleTimeChoice", {
	get: function () { 
		let choice = 0;
		let satisfaction = $gameParty._receptionistSatisfaction;
		let fame = $gameParty._receptionistFame;
		let notoriety = $gameParty._receptionistNotoriety;
		
		let value = (satisfaction * 2) + fame + (notoriety * 0.5);
		
		if(value >= 60)
			choice = 4;
		else if(value >= 40)
			choice = 3;
		else if(value >= 30)
			choice = 2;
		else if(value >= 20)
			choice = 1;

		let maxLimit = 2;
		if($gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV4_ID)) { //temp todo change for full game
			maxLimit += 2;
		}

		return Math.min(maxLimit, choice);
		
	}, configurable: true
});

Game_Party.prototype.getAvailableReceptionistBattleTimeLimitChoice = function() {
	let choice = 0;
	
	let satisfaction = $gameParty._receptionistSatisfaction;
	let fame = $gameParty._receptionistFame;
	let notoriety = $gameParty._receptionistNotoriety;
	
	let value = (satisfaction * 2) + fame + (notoriety * 0.5);
	
	if(value >= 60)
		choice = 4;
	else if(value >= 40)
		choice = 3;
	else if(value >= 30)
		choice = 2;
	else if(value >= 20)
		choice = 1;
	
	return choice;
};

Game_Party.prototype.preReceptionistBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	BattleManager.setEnemySneakAttackBattle();
	this.setIsInReceptionistBattleFlag(true);
	this.preBattleSetup();
	$gameMap.changeBattleback(BATTLEBACK1_VISITOR_RECEPTIONIST_NAME, null);
	this._showTopRightTimeNumberFlag = true;
	
	this.increaseFatigueGain(this._receptionistBattle_baseFatigueGain);
	
	this._receptionistBattle_currentTimeInSeconds = 0;
	this._receptionistBattle_visitingRoomTime = [ -1, -1, -1, -1 ];
	this._receptionistBattle_visitorSatisfaction_general = 0;
	this._receptionistBattle_visitorSatisfaction_fan = 0;
	this._receptionistBattle_visitorSatisfaction_pervert = 0;
	this._receptionistBattle_visitorSpottedNaughtyActs = 0;
	this._receptionistBattle_additionalPotentialVisitors = Math.ceil(this._receptionistSatisfaction * 0.5);
	
	actor.resetAllTachieBack();
	actor.resetAllTachieFront();
	actor.resetAllTachieVisitor();
	actor.preReceptionistBattleSetup();
	
};


Game_Party.prototype.postReceptionistBattleCleanup  = function() {
	this.setIsInReceptionistBattleFlag(false);
	this._showTopRightTimeNumberFlag = false;
	$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_BATTLE_ID, true);
	
	$gameTroop._goblins_distanceSlot = [ -1, false, false, false, false, false, false, false ];

	if(this._receptionistBattle_visitorSatisfaction_general > 0) {
		let addRep = 1;
		if($gameParty._receptionistSatisfaction <= 20 && Math.randomInt(100) < this._receptionistBattle_visitorSatisfaction_general) addRep++;
		this.increaseReceptionistSatisfaction(addRep);
		$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_SATISFACTION_RATE_UP_ID, true);
	}
	else if(this._receptionistBattle_visitorSatisfaction_general < 0) {
		let addRep = -1;
		if(Math.randomInt(100) < this._receptionistBattle_visitorSatisfaction_general * -1) addRep--;
		this.increaseReceptionistSatisfaction(addRep);
	}
	
	if(this._receptionistBattle_visitorSatisfaction_fan > 0) {
		let addRep = 1;
		if($gameParty._receptionistFame <= 15 && Math.randomInt(100) < this._receptionistBattle_visitorSatisfaction_fan) addRep++;
		this.increaseReceptionistFame(addRep);
		$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_FAME_UP_ID, true);
	}
	else if(this._receptionistBattle_visitorSatisfaction_fan < 0) {
		this.increaseReceptionistFame(-1);
	}
	
	if(this._receptionistBattle_visitorSatisfaction_pervert > 0 || this._receptionistBattle_visitorSpottedNaughtyActs > 0) {
		let addRep = 1;
		if($gameParty._receptionistNotoriety <= 15 && Math.randomInt(100) < this._receptionistBattle_visitorSatisfaction_pervert + this._receptionistBattle_visitorSpottedNaughtyActs) addRep++;
		this.increaseReceptionistNotoriety(addRep);
		$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_NOTORIETY_UP_ID, true);
	}
	else if(this._receptionistBattle_visitorSatisfaction_pervert + this._receptionistBattle_visitorSpottedNaughtyActs < 0) {
		let addRep = -1;
		if(Math.randomInt(100) < (this._receptionistBattle_visitorSatisfaction_pervert + this._receptionistBattle_visitorSpottedNaughtyActs) * -1) addRep--;
		this.increaseReceptionistNotoriety(addRep);
	}
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor.putOnGlovesAndHat();
	actor.changeToWardenClothing();
	
	if(!$gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_ONE_ID)) {
		actor._playthroughRecordReceptionistBattleTotalShiftsCount++;
	}
};

Game_Party.prototype.receptionistBattle_dissatisfactionFromEdictsMultipler = function() {
	let dissatisfactionFromEdicts = 1;
	
	if(Karryn.hasEdict(EDICT_CHARGE_VISITORS_FOR_EXPRESS)) {
		dissatisfactionFromEdicts = 3;
	}
	else if(Karryn.hasEdict(EDICT_CHARGE_VISITORS_FOR_VISITATION)) {
		dissatisfactionFromEdicts = 2;
	}
	
	return dissatisfactionFromEdicts;
};

Game_Party.prototype.applyEndOfBattleSpecial_receptionistBattle = function() {
	let dissatisfactionFromDefeat = 1;
	let dissatisfactionFromEdicts = this.receptionistBattle_dissatisfactionFromEdictsMultipler();
	
	if($gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_ONE_ID)) {
		dissatisfactionFromDefeat = 2;
	}
	
	for(let i = 0; i < $gameTroop._visitorSeats.length; ++i) {
		if(!$gameTroop._visitorSeats[i]) {
			let visitor = $gameTroop._visitorSeats[i];
			
			if(visitor._visitor_isStarter) {
				$gameParty.increaseReceptionistVisitorSatisfaction_General(RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_STARTER_STILL_HERE * visitor._visitor_dissatisfactionMultipler * dissatisfactionFromDefeat * dissatisfactionFromEdicts);
				
				if(visitor._visitor_isFan) {
					$gameParty.increaseReceptionistVisitorSatisfaction_Fan(RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_STARTER_STILL_HERE * visitor._visitor_dissatisfactionMultipler * dissatisfactionFromDefeat * dissatisfactionFromEdict);
				}
				if(visitor._visitor_isPervert) {
					$gameParty.increaseReceptionistVisitorSatisfaction_Pervert(RECEPTIONIST_PERV_SATISFACTION_LOST_FROM_STARTER_STILL_HERE * visitor._visitor_dissatisfactionMultipler * dissatisfactionFromEdict);
				}
			}
			if(visitor._visitor_gotAngryCount > 0) {
				$gameParty.increaseReceptionistVisitorSatisfaction_General(RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_ANGRY_STILL_HERE * visitor._visitor_dissatisfactionMultipler * dissatisfactionFromDefeat * dissatisfactionFromEdict);
			}
			
		}
	}
	
	if($gameTroop.receptionistBattle_countGoblins() > 0)
		$gameSwitches.setValue(SWITCH_TODAY_GOBLIN_BAR_STORAGE_ID, true);
	
};

Game_Party.prototype.increaseReceptionistVisitorSatisfaction_General = function(value) {
	this._receptionistBattle_visitorSatisfaction_general += value;
};
Game_Party.prototype.increaseReceptionistVisitorSatisfaction_Fan = function(value) {
	this._receptionistBattle_visitorSatisfaction_fan += value;
};
Game_Party.prototype.increaseReceptionistVisitorSatisfaction_Pervert = function(value) {
	this._receptionistBattle_visitorSatisfaction_pervert += value;
};
Game_Party.prototype.increaseReceptionistVisitorSpottedNaughtyActs = function(value) {
	this._receptionistBattle_visitorSpottedNaughtyActs += value;
};

/////////
// Wanted 

Game_Party.prototype.addToVisitorFanWanted = function(enemy) {
	let wantedFanCount = this.getHeadcountOfWantedFans();
	let fame = this._receptionistFame;
	let maxAllowedWantedFansCount = 1;
	
	if(fame >= 20) maxAllowedWantedFansCount = 4;
	else if(fame >= 10) maxAllowedWantedFansCount = 3;
	else if(fame >= 5) maxAllowedWantedFansCount = 2;
	
	if(!enemy.isWanted && wantedFanCount < maxAllowedWantedFansCount && enemy.isVisitorMaleType) {
		this.addNewWanted(enemy);
	}
};

Game_Party.prototype.addToVisitorPervertWanted = function(enemy) {
	let wantedPervertsCount = this.getHeadcountOfWantedPerverts();
	let notoriety = this._receptionistNotoriety;
	let maxAllowedWantedPervertsCount = 1;
	
	if(notoriety >= 20) maxAllowedWantedPervertsCount = 5;
	else if(notoriety >= 15) maxAllowedWantedPervertsCount = 4;
	else if(notoriety >= 10) maxAllowedWantedPervertsCount = 3;
	else if(notoriety >= 5) maxAllowedWantedPervertsCount = 2;
	
	if(!enemy.isWanted && wantedPervertsCount < maxAllowedWantedPervertsCount && enemy.isVisitorMaleType) {
		this.addNewWanted(enemy);
	}
};

Game_Party.prototype.getHeadcountOfWantedFans = function() {
	let count = 0;
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wantedEnemy = this._wantedEnemies[i];
		if(!wantedEnemy._disabled && wantedEnemy._enemyType == ENEMYTYPE_VISITOR_MALE_TAG && wantedEnemy._visitor_isFan) {
			count++;
		}
	}
	return count;
};

Game_Party.prototype.getHeadcountOfWantedPerverts = function() {
	let count = 0;
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wantedEnemy = this._wantedEnemies[i];
		if(!wantedEnemy._disabled && wantedEnemy._enemyType == ENEMYTYPE_VISITOR_MALE_TAG && wantedEnemy._visitor_isPervert) {
			count++;
		}
	}
	return count;
};

////////
// Tips

Game_Party.prototype.addReceptionistHandshakeTips = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let tipValue = 0;
	let fameValue = 0;
	
	if(this._receptionistFame >= 10) {
		fameValue += 30;
		fameValue += this._receptionistFame;
	}
	else {
		fameValue += this._receptionistFame * 4;
	}
	
	if(Karryn.isUsingThisTitle(TITLE_ID_RECEPTIONIST_HANDSHAKE)) {
		tipValue = Math.randomInt(20 + fameValue) + 10;
	}

	if(tipValue >= 1) {
		$gameParty.increaseExtraGoldReward(tipValue);
		BattleManager._logWindow.push('addText', TextManager.waitressGetsTip.format(actor.displayName(), tipValue));
		AudioManager.playSe({name:'Coin', pan:0, pitch:100, volume:70});
	}
};

//////////
// Game Actor
///////////

////////
// Setup
///////////

Game_Actor.prototype.preReceptionistBattleSetup = function() {
	this._hornyTimeLimit = -1;
	
	this._receptionist_greetVisitor_gotResponse = false;
	this._receptionist_greetVisitor_waitingForResponse = false;

	this._receptionist_currentlyProcessingPapers = false;
	this._receptionist_currentlyProcessingPapersOfVisitor = false;
	this._receptionist_remainingProcessingPaperTime = -1;
	
	this._receptionist_checkingVisitingRoom_startingPhoneCall = false;
	this._receptionist_checkingVisitingRoom_endingPhoneCall = false;
	this._receptionist_checkingVisitingRoomId = -1;
	
	this._receptionist_turnsTillMentalPhase = 0;
	this._receptionist_visitorSexSkillCooldown = RECEPTIONIST_SEX_SKILL_COOLDOWN;
	
	this._receptionist_wearingGlasses = true;
	this.changeToReceptionistClothing();
	this.setReceptionistPose();
	
	this.setupLiquids();
	this.setupDesires();
	this._recordVisitorReceptionistBattleCount++;
	this._playthroughRecordVisitorReceptionistBattleCount++;
	this.removeState(STATE_CONFIDENT_ID);

	this.emoteReceptionistPose();
};

//////////////////
// Receptionist Param

Game_Actor.prototype.receptionistParamRate = function(id) {
	let passiveRate = 1;
	if(this.isInReceptionistPose()) {
		if(id === PARAM_STRENGTH_ID) {
			passiveRate = 0.8;
		}
	}
	return passiveRate;
};

Game_Actor.prototype.receptionistXParamRate = function(id) {
	let passiveRate = 1;
	if(this.isInReceptionistPose()) {
		if(id === XPARAM_CRIT_EVA_ID || id === XPARAM_EVA_ID) {
			passiveRate = 0.4;	
		}
		else if(id === XPARAM_HIT_ID || id === XPARAM_CRIT_ID) {
			passiveRate = 0.8;
		}
		else if(id === XPARAM_EN_REGEN_ID) {
			passiveRate = 0.25;
		}
		else if(id === XPARAM_STA_REGEN_ID) {
			if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS)) {
				if(this.isStateAffected(STATE_RECEPTIONIST_REST_ID)) {
					passiveRate = 2.5;
				}
				else {
					passiveRate = 0.25;
				}
			}
			else {
				if(this.isStateAffected(STATE_RECEPTIONIST_REST_ID)) {
					passiveRate = 1.5;
				}
				else {
					passiveRate = 0.15;
				}
				
			}
		}
		
		
	}
	return passiveRate;
};
Game_Actor.prototype.receptionistSParamRate = function(id) {
	let passiveRate = 1;
	if(this.isInReceptionistPose()) {
		if(id === SPARAM_WP_REGEN_ID) {
			passiveRate = 0.25;
		}
	}
	return passiveRate;
};

/////////
// Status
Game_Actor.prototype.receptionistBattle_isLayingOnDesk = function() {
	return this.isBodySlotPenis(MOUTH_ID);
};
Game_Actor.prototype.receptionistBattle_isHavingSexBehind = function() {
	return this.isBodySlotPenis(PUSSY_ID) || this.isBodySlotTongue(PUSSY_ID) || this.isBodySlotPenis(ANAL_ID);
};
Game_Actor.prototype.receptionistBattle_isSayingSexualLines = function() {
	return this.receptionistBattle_isHavingSexBehind() || this.justOrgasmed() || this.isWearingAnyToy();
};
Game_Actor.prototype.receptionistBattle_isShakingHands = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk()) return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor._fan_currentlyGettingRequestFulfilled;
};
Game_Actor.prototype.receptionistBattle_isKissing = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk()) return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor._perv_kissing;
};
Game_Actor.prototype.receptionistBattle_gettingBoobsRubbed = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk()) return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor._perv_touchingBoobs;
};
Game_Actor.prototype.receptionistBattle_isGivingHandjob = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk()) return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor._perv_gettingHJ;
};
Game_Actor.prototype.receptionistBattle_isGivingBlowjob = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk()) return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor._perv_gettingBJ;
};

/////
// Post Damage

Game_Actor.prototype.postDamage_basicKissing_receptionistBattle = function(target, kissLvl) {
	this.receptionistBattle_makeSexualNoise(2, false);
};

Game_Actor.prototype.postDamage_basicTalk_receptionistBattle = function(target, area, jerkingOff) {
	if(jerkingOff)
		this.receptionistBattle_makeSexualNoise(0.85, false);
	else
		this.receptionistBattle_makeSexualNoise(0.5, false);
};

Game_Actor.prototype.postDamage_basicPetting_receptionistBattle = function(target, area) {
	if(area == AREA_BOOBS) {
		this.receptionistBattle_makeSexualNoise(1, false);
	}
	else if(area == AREA_CLIT || area == AREA_PUSSY || area == AREA_BUTT || area == AREA_ANAL) {
		this.receptionistBattle_makeSexualNoise(0.35, false);
	}
	
	if(area != AREA_HANDSHAKE)
		this.addToActorPettedWhileWorkingRecord();
};

Game_Actor.prototype.postDamage_basicSpanking_receptionistBattle = function(target, spankLvl) {
	if(spankLvl == SPANK_LVL_THREE) {
		this.receptionistBattle_makeSexualNoise(1.25, false);
	}
	else if(spankLvl == SPANK_LVL_TWO) {
		this.receptionistBattle_makeSexualNoise(1, false);
	}
	else if(spankLvl == SPANK_LVL_ONE) {
		this.receptionistBattle_makeSexualNoise(0.75, false);
	}
	
	this.addToActorPettedWhileWorkingRecord();
};

Game_Actor.prototype.postDamage_basicSex_receptionistBattle = function(target, sexAct) {
	if(sexAct == SEXACT_BLOWJOB) {
		this.receptionistBattle_makeSexualNoise(4, false);
	}
	else if(sexAct == SEXACT_HANDJOB) {
		this.receptionistBattle_makeSexualNoise(2, false);
	}
	else {
		this.receptionistBattle_makeSexualNoise(1, false);
	}
};

Game_Actor.prototype.postDamage_ejaculation_receptionistBattle = function(target, area, semen) {
	if(area == CUM_CREAMPIE_PUSSY || area == CUM_CREAMPIE_ANAL) {
		this.receptionistBattle_makeSexualNoise(2, false);
		this._playthroughRecordReceptionistGoblinCreampieML += semen;
	}
	else if(area == CUM_SWALLOW_MOUTH) {
		this.receptionistBattle_makeSexualNoise(2, false);
		this._playthroughRecordVisitorSwallowML += semen;
	}
	else {
		this.receptionistBattle_makeSexualNoise(1, false);
	}
	
};

Game_Actor.prototype.postDamage_femaleOrgasm_receptionistBattle = function(orgasmCount) {
	this.receptionistBattle_makeSexualNoise(3 * orgasmCount, false);

	if(this._receptionist_checkingVisitingRoom_startingPhoneCall) {
		this._playthroughRecordReceptionistOrgasmWhileCallingCount++;
	}
};

////////
// Tachie

Game_Actor.prototype.updateReceptionistBattleVisitorQueueTachie = function() {
	let queueLength = 0
	if($gameTroop._deskQueue)
		queueLength = $gameTroop._deskQueue.length;

	this.resetTachieCock();
	this._cockNormalTarget = false;
	this.setMaxTachieSemenCockNormalId(0);

	if(queueLength > 0) {
		let visitorATachie = '';
		let visitorA = $gameTroop._deskQueue[0];
		let enemyCock = visitorA.enemyCock();
		
		//VisitorA Tachie
		if(visitorA.isVisitorMaleType) {
			if(visitorA._visitor_isPervert && visitorA._visitor_isIdentified && 
			(!visitorA._visitor_isVisiting || visitorA._perv_waitingForRequestResponse || visitorA._perv_currentlyGettingRequestFulfilled)) {
				visitorATachie += 'ero';
				
				//Goblins
				if(visitorA._visitor_isGoblin) {
					visitorATachie += '_goblin';
					
					if(enemyCock.includes('dark'))
						visitorATachie += '_dark';
					else
						visitorATachie += '_normal';
					
					if(visitorA._perv_gettingBJ)
						visitorATachie += '_fera';
					else if(visitorA._perv_touchingBoobs) {
						if(visitorA._perv_kissing)
							visitorATachie += '_kiss';
						else
							visitorATachie += '_boobs';
					}
					else
						visitorATachie += '_free';
				}
				//Non Goblins
				else {
					if(enemyCock.includes('human')) {
						visitorATachie += '_human';
						
						if(enemyCock.includes('pale'))
							visitorATachie += '_pale';
						else if(enemyCock.includes('black'))
							visitorATachie += '_black';
						else
							visitorATachie += '_normal';
					}
					else
						visitorATachie += '_human_normal';
					
					if(visitorA._perv_gettingBJ)
						visitorATachie += '_free';
					else if(visitorA._perv_kissing) {
						if(visitorA._perv_touchingBoobs)
							visitorATachie += '_kissmomi';
						else
							visitorATachie += '_kiss';
					}
					else if(visitorA._perv_touchingBoobs)
							visitorATachie += '_boobs';
					else
						visitorATachie += '_free';
				}
				
				//Tachie Cock
				//Goblins
				if(visitorA._visitor_isGoblin) {
					let tachieCockName = '' + enemyCock;
					
					if(visitorA._perv_gettingBJ) {
						this.setTachieSemenCockNormalExtension('goblin_fera_');
						tachieCockName = 'mouth_' + enemyCock;
					}
					else if(visitorA._perv_touchingBoobs) {
						this.setTachieSemenCockNormalExtension('goblin_boobs_');
						tachieCockName += '_boobs';
					}
					else {
						this.setTachieSemenCockNormalExtension('goblin_free_');
						tachieCockName += '_free';
					}
					
					if(Karryn.isCensored())
						tachieCockName += '_cen';
					this.setTachieCock(tachieCockName);
				}
				//Non Goblins
				else if(visitorA._perv_gettingBJ) {
					let tachieCockName = 'mouth_';
					tachieCockName += visitorA.enemyCock();
					if(Karryn.isCensored())
						tachieCockName += '_cen';
					this.setTachieCock(tachieCockName);
					this.setTachieSemenCockNormalExtension('human_mouth_');
				}
				else if(visitorA._perv_gettingHJ) {
					let tachieCockName = 'leftarm_';
					if(visitorA._perv_kissing) {
						tachieCockName += 'kiss_';
						this.setTachieSemenCockNormalExtension('human_leftarm_kiss_');
					}
					else {
						this.setTachieSemenCockNormalExtension('human_leftarm_');
					}
					tachieCockName += visitorA.enemyCock();
					if(Karryn.isCensored())
						tachieCockName += '_cen';
					this.setTachieCock(tachieCockName);
				}
				else if(!visitorA._perv_gettingHJ && !visitorA._perv_gettingBJ) {
					let tachieCockName = 'free_';
					
					if(visitorA._perv_kissing) {
						tachieCockName += 'kiss_';
						this.setTachieSemenCockNormalExtension('human_free_kiss_');
					}
					else {
						this.setTachieSemenCockNormalExtension('human_free_');
					}
					
					tachieCockName += visitorA.enemyCock();
					if(Karryn.isCensored())
						tachieCockName += '_cen';
					this.setTachieCock(tachieCockName);
					
				}
				this._cockNormalTarget = visitorA;
				this.setMaxTachieSemenCockNormalId(1);
			}
			//Non Ero Visitor A
			else {
				if(visitorA._visitor_isGoblin) {
					visitorATachie += 'goblin_';
					if(this.receptionistBattle_isShakingHands()) visitorATachie += 'handshake_';
					visitorATachie += visitorA._visitor_tachieNum;
				}
				else {
					visitorATachie += 'male_';
					visitorATachie += visitorA._visitor_tachieNum;
				}
			}
		}
		else if(visitorA.isVisitorFemaleType) {
			visitorATachie += 'female_';
			visitorATachie += visitorA._visitor_tachieNum;
		}
		
		this.setTachieVisitorA(visitorATachie);
		
		let backATachie = 'visitorA';
		if(visitorA._visitor_isPervert && visitorA._visitor_isIdentified) {
			this.resetTachieBackA();
		}
		else if(visitorA._visitor_isAngry) {
			if(visitorA._visitor_isGoblin) backATachie += '_goblin';
			backATachie += '_angry';
			this.setTachieBackA(backATachie);
		}
		else if(visitorA._visitor_isPervert && !visitorA._perv_requestRejected) {
			if(visitorA._visitor_isGoblin) backATachie += '_goblin';
			backATachie += '_blush';
			this.setTachieBackA(backATachie);
		}
		else if(visitorA._visitor_spottedNaughtyAct) {
			if(visitorA._visitor_isGoblin) backATachie += '_goblin';
			backATachie += '_spotted';
			this.setTachieBackA(backATachie);
		}
		else if(visitorA._visitor_isFan && !visitorA._fan_requestRejected) {
			if(visitorA._visitor_isGoblin) backATachie += '_goblin';
			backATachie += '_kira';
			this.setTachieBackA(backATachie);
		}
		else {
			this.resetTachieBackA();
		}
		
		if(this.receptionistBattle_isShakingHands()) {
			if(visitorA._visitor_isGoblin) {
				this.resetTachieBackE();
			}
			else if(visitorA.isVisitorMaleType) {
				this.setTachieBackE('male_handshake');
			}
			else if(visitorA.isVisitorFemaleType) {
				this.setTachieBackE('female_handshake');
			}
		}
		else {
			this.resetTachieBackE();
		}
		
		//End front visitor tachie
		
		if(queueLength > 1) {
			let visitorBTachie = '';
			let visitorB = $gameTroop._deskQueue[1];
			if(visitorB._visitor_isGoblin) {
				visitorBTachie += 'goblin_';
				visitorBTachie += visitorB._visitor_tachieNum;
			}
			else if(visitorB.isVisitorMaleType) {
				visitorBTachie += 'male_';
				visitorBTachie += visitorB._visitor_tachieNum;
			}
			else if(visitorB.isVisitorFemaleType) {
				visitorBTachie += 'female_';
				visitorBTachie += visitorB._visitor_tachieNum;
			}
			this.setTachieVisitorB(visitorBTachie);
			
			let backBTachie = 'visitorB';
			if(visitorB._visitor_isAngry) {
				if(visitorB._visitor_isGoblin) backBTachie += '_goblin';
				backBTachie += '_angry';
				this.setTachieBackB(backBTachie);
			}
			else if(visitorB._visitor_isPervert && !visitorB._perv_requestRejected) {
				if(visitorB._visitor_isGoblin) backBTachie += '_goblin';
				backBTachie += '_blush';
				this.setTachieBackB(backBTachie);
			}
			else if(visitorB._visitor_spottedNaughtyAct) {
				if(visitorB._visitor_isGoblin) backBTachie += '_goblin';
				backBTachie += '_spotted';
				this.setTachieBackB(backBTachie);
			}
			else if(visitorB._visitor_isFan && !visitorB._fan_requestRejected) {
				if(visitorB._visitor_isGoblin) backBTachie += '_goblin';
				backBTachie += '_kira';
				this.setTachieBackB(backBTachie);
			}
			else {
				this.resetTachieBackB();
			}
		}
		else {
			this.resetTachieVisitorB();
			this.resetTachieBackB();
		}
		
		if(queueLength > 2) {
			let visitorCTachie = '';
			let visitorC = $gameTroop._deskQueue[2];
			if(visitorC._visitor_isGoblin) {
				visitorCTachie += 'goblin_';
				visitorCTachie += visitorC._visitor_tachieNum;
			}
			else if(visitorC.isVisitorMaleType) {
				visitorCTachie += 'male_';
				visitorCTachie += visitorC._visitor_tachieNum;
			}
			else if(visitorC.isVisitorFemaleType) {
				visitorCTachie += 'female_';
				visitorCTachie += visitorC._visitor_tachieNum;
			}
			this.setTachieVisitorC(visitorCTachie);
			
			let backCTachie = 'visitorC';
			if(visitorC._visitor_isAngry) {
				if(visitorC._visitor_isGoblin) backCTachie += '_goblin';
				backCTachie += '_angry';
				this.setTachieBackC(backCTachie);
			}
			else if(visitorC._visitor_isPervert && !visitorC._perv_requestRejected) {
				if(visitorC._visitor_isGoblin) backCTachie += '_goblin';
				backCTachie += '_blush';
				this.setTachieBackC(backCTachie);
			}
			else if(visitorC._visitor_spottedNaughtyAct) {
				if(visitorC._visitor_isGoblin) backCTachie += '_goblin';
				backCTachie += '_spotted';
				this.setTachieBackC(backCTachie);
			}
			else if(visitorC._visitor_isFan && !visitorC._fan_requestRejected) {
				if(visitorC._visitor_isGoblin) backCTachie += '_goblin';
				backCTachie += '_kira';
				this.setTachieBackC(backCTachie);
			}
			else {
				this.resetTachieBackC();
			}		
		}
		else {
			this.resetTachieVisitorC();
			this.resetTachieBackC();
		}
		
		if(queueLength > 3) {
			let visitorDTachie = '';
			let visitorD = $gameTroop._deskQueue[3];
			if(visitorD._visitor_isGoblin) {
				visitorDTachie += 'goblin_';
				visitorDTachie += visitorD._visitor_tachieNum;
			}
			else if(visitorD.isVisitorMaleType) {
				visitorDTachie += 'male_';
				visitorDTachie += visitorD._visitor_tachieNum;
			}
			else if(visitorD.isVisitorFemaleType) {
				visitorDTachie += 'female_';
				visitorDTachie += visitorD._visitor_tachieNum;
			}
			this.setTachieVisitorD(visitorDTachie);
			
			let backDTachie = 'visitorD';
			if(visitorD._visitor_isAngry) {
				if(visitorD._visitor_isGoblin) backDTachie += '_goblin';
				backDTachie += '_angry';
				this.setTachieBackD(backDTachie);
			}
			else if(visitorD._visitor_isPervert && !visitorD._perv_requestRejected) {
				if(visitorD._visitor_isGoblin) backDTachie += '_goblin';
				backDTachie += '_blush';
				this.setTachieBackD(backDTachie);
			}
			else if(visitorD._visitor_spottedNaughtyAct) {
				if(visitorD._visitor_isGoblin) backDTachie += '_goblin';
				backDTachie += '_spotted';
				this.setTachieBackD(backDTachie);
			}
			else if(visitorD._visitor_isFan && !visitorD._fan_requestRejected) {
				if(visitorD._visitor_isGoblin) backDTachie += '_goblin';
				backDTachie += '_kira';
				this.setTachieBackD(backDTachie);
			}
			else {
				this.resetTachieBackD();
			}	
		}
		else {
			this.resetTachieVisitorD();
			this.resetTachieBackD();
		}
		
	}
	else {
		this.resetTachieBackA();
		this.resetTachieBackB();
		this.resetTachieBackC();
		this.resetTachieBackD();
		this.resetTachieBackE();
		this.resetTachieVisitorA();
		this.resetTachieVisitorB();
		this.resetTachieVisitorC();
		this.resetTachieVisitorD();
	}
};

Game_Actor.prototype.updateReceptionistBattleGoblinTachie = function() {
	if($gameTroop._goblins_distanceSlot) {
		if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST]) {
			let frontName = 'goblin';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST].enemyCock().includes('dark'))
				frontName += '_dark';
			else
				frontName += '_normal';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST].isErect || $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST].isHorny)
				frontName += '_blush';
			else
				frontName += '_free';
			
			this.setTachieFrontA(frontName);
		}
		else {
			this.resetTachieFrontA();
		}
		
		if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FAR]) {
			let frontName = 'goblin';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FAR].enemyCock().includes('dark'))
				frontName += '_dark';
			else
				frontName += '_normal';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FAR].isErect || $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_FAR].isHorny)
				frontName += '_blush';
			else
				frontName += '_free';
			
			this.setTachieFrontB(frontName);
		}
		else {
			this.resetTachieFrontB();
		}
		
		if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM]) {
			let frontName = 'goblin';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM].enemyCock().includes('dark'))
				frontName += '_dark';
			else
				frontName += '_normal';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM].isErect || $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM].isHorny)
				frontName += '_blush';
			else
				frontName += '_free';
			
			this.setTachieFrontC(frontName);
		}
		else {
			this.resetTachieFrontC();
		}
		
		if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE]) {
			let tachieFrontDName = 'goblin';
			
			if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].enemyCock().includes('dark'))
				tachieFrontDName += '_dark';
			else
				tachieFrontDName += '_normal';
			
			if(this.isBodySlotPenis(PUSSY_ID)) {
				tachieFrontDName += '_manko';
				
				let frontEName = 'chin_' + $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].enemyCock();
				frontEName += '_manko';
				if(Karryn.isCensored()) frontEName += '_cen';
				this.setTachieFrontE(frontEName);
			}
			else if(this.isBodySlotTongue(PUSSY_ID)) {
				tachieFrontDName += '_cl';
				this.resetTachieFrontE();
			}
			else if(this.isBodySlotPenis(ANAL_ID)) {
				tachieFrontDName += '_anaru';
				
				let frontEName = 'chin_' + $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].enemyCock();
				frontEName += '_anaru';
				if(Karryn.isCensored()) frontEName += '_cen';
				this.setTachieFrontE(frontEName);
			}
			else if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].isErect || $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].isHorny) {
				tachieFrontDName += '_blush';
				
				let frontEName = 'chin_' + $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].enemyCock();
				frontEName += '_blush';
				if(Karryn.isCensored()) frontEName += '_cen';
				this.setTachieFrontE(frontEName);
			}
			else {
				tachieFrontDName += '_free';
				
				let frontEName = 'chin_' + $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].enemyCock();
				frontEName += '_free';
				if(Karryn.isCensored()) frontEName += '_cen';
				this.setTachieFrontE(frontEName);
			}
			
			this.setTachieFrontD(tachieFrontDName);
		}
		else {
			this.resetTachieFrontD();
			this.resetTachieFrontE();
		}
	}
};

Game_Actor.prototype.receptionistBattle_makeSexualNoise = function(value, frontLiquidSpotting) {
	let noiseMultipler = 1;
	let generalReactionScore = this.getReactionScore();
	
	if(frontLiquidSpotting) {
		value += this.getTachieSemenDeskId() * 0.5;
		value += this.getTachieSemenBoobsId();
		value += this.getTachieSemenFaceId();
	}
	else {
		if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_THREE_ID)) 
			noiseMultipler = 3;
		else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID))
			noiseMultipler = 2;
		
		if(generalReactionScore >= VAR_DEF_RS_LV3_REQ) 
			noiseMultipler = 3.5;
		else if(generalReactionScore >= VAR_DEF_RS_LV2_REQ) 
			noiseMultipler = 2;
		else if(generalReactionScore >= VAR_DEF_RS_LV1_REQ) 
			noiseMultipler = 1.5;	
	}
	
	let noiseValue = value * noiseMultipler;
	if(noiseValue === 0) return;
	
	let queueLength = $gameTroop._deskQueue.length;
	if(queueLength > 0) {
		for(let i = 0; i < $gameTroop._deskQueue.length; ++i) {
			let visitor = $gameTroop._deskQueue[i];
			let spotChance = 0;
			if(i === 0) spotChance = RECEPTIONIST_CHANCE_OF_VISITOR_A_NOTICING;
			else if(i === 1 && !frontLiquidSpotting) spotChance = RECEPTIONIST_CHANCE_OF_VISITOR_B_NOTICING;
			else if(i === 2 && !frontLiquidSpotting) spotChance = RECEPTIONIST_CHANCE_OF_VISITOR_C_NOTICING;
			else if(i === 3 && !frontLiquidSpotting) spotChance = RECEPTIONIST_CHANCE_OF_VISITOR_D_NOTICING;
			
			if(visitor._visitor_isFan) 
				spotChance *= RECEPTIONIST_CHANCE_OF_FAN_NOTICING_MULTI;
			
			let spotted = Math.randomInt(100) < spotChance * noiseValue;
			if(spotted) {
				if(!visitor._visitor_spottedNaughtyAct) {
					visitor._visitor_spottedNaughtyAct = true;
					$gameParty.increaseReceptionistVisitorSpottedNaughtyActs(value);
				}
					
				if(visitor.isVisitorMaleType && visitor._visitor_isPervert && !visitor._perv_hasSecondRequest) {
					let chanceToRequestHigher = Math.randomInt($gameParty._receptionistNotoriety + $gameParty._receptionistFame);
					if(visitor._visitor_isFan) chanceToRequestHigher += Math.randomInt($gameParty._receptionistFame * 0.5)
					
					if(visitor.isHorny) chanceToRequestHigher *= 3;
					else if(visitor.isAroused()) chanceToRequestHigher *= 2;
					else chanceToRequestHigher *= 0.4;
					
					if(chanceToRequestHigher > $gameParty._receptionistNotoriety * 0.8) 
						visitor._perv_hasSecondRequest = true;
				}	
				else if(visitor.isVisitorMaleType && !visitor._visitor_isPervert) {
					if(Math.randomInt(100) < visitor._visitor_pervPromoteChance) {
						if(!visitor._visitor_isIdentified) {
							visitor._visitor_isPervert = true;
						}
					}
					
					if(visitor.isWanted) {
						let wantedStatus = Prison.getWantedEnemyById(visitor.getWantedId());
						if(visitor._visitor_pervPromoteChance < 100) {
							visitor._visitor_pervPromoteChance += VISITOR_WANTED_PERV_PROMOTE_CHANCE_INC;
							wantedStatus._visitor_pervPromoteChance += VISITOR_WANTED_PERV_PROMOTE_CHANCE_INC;
						}
					}
				}
				
				if(!visitor._visitor_isPervert && visitor._visitor_isAngry) {
					visitor.receptionistBattle_action_leavesAngry();
				}
			}
		}
	}
	
	
};

////////////
///////////
// Skills

// Call Visitor
// Summon Visitor


Game_Actor.prototype.skillCost_receptionistBasicSkills = function() {
	let multipler = 1;
	if(this.justOrgasmed()) multipler *= 2.5;
	return Math.min(this.realMaxStamina * 0.03 * multipler, (10 + this.level * 1.5) * multipler);
};
Game_Actor.prototype.skillCost_receptionistAdvancedSkills = function() {
	let multipler = 1;
	if(this.justOrgasmed()) multipler *= 2.5;
	return Math.min(this.realMaxStamina * 0.08 * multipler, (26 + this.level * 4) * multipler);
};

Game_Actor.prototype.showEval_receptionistBattle_callUnknownVisitor = function() {
	//return $gameTroop.receptionistBattle_unknownVisitorsNotAtDesk().length > 0;
	return !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
	//return true;
};
Game_Actor.prototype.customReq_receptionistBattle_callUnknownVisitor = function() {
	if(this.showEval_receptionistBattle_acceptRequest() || this.showEval_receptionistBattle_acceptRequest_cant()) 
		return false;
	
	if(this.receptionistBattle_isKissing() || this.receptionistBattle_isGivingBlowjob())
		return false;
	
	let visitorNeedCalling = false;
	for(let i = 0; i < $gameTroop._visitorSeats.length; ++i) {
		let visitor = $gameTroop._visitorSeats[i];
		if(visitor && visitor.isValidTargetForReceptionistBattle_callUnknownVisitor()) {
			visitorNeedCalling = true;
			break;
		}
	}
	return visitorNeedCalling;
};
Game_Actor.prototype.afterEval_receptionistBattle_callUnknownVisitor = function(target) {
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_SUMMON_VISITOR_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_SUMMON_VISITOR_NORMAL);
	}

	if(target._visitor_finishWalkingToDeskTime === -1) {
		target.setVisitorLocationToMoving();
		target.setVisitorFinishWalkingToDeskTime(VISITOR_DESK_DISTANCE);
	}
	
	this.resetSexSkillConsUsage(false);
};

// Greet Visitor

Game_Actor.prototype.showEval_receptionistBattle_greetVisitor = function() {
	return !this.showEval_receptionistBattle_getVisitorPapers() && !this.showEval_receptionistBattle_apologize() && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_greetVisitor = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk() || this.showEval_receptionistBattle_getVisitorPapers() || this.showEval_receptionistBattle_acceptRequest() || this.showEval_receptionistBattle_acceptRequest_cant())
		return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor.visitorStatusIsUnknown() && !deskVisitor._visitor_isAngry && !deskVisitor._visitor_isIdentified;
};
Game_Actor.prototype.afterEval_receptionistBattle_greetVisitor = function(target) {
	if(!target.visitorStatusIsUnknown() || target._visitor_isIdentified) return;
	
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_GREET_VISITOR_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_GREET_VISITOR_NORMAL);
	}
	this.gainCharmExp(6, this.level);
	this._receptionist_greetVisitor_waitingForResponse = true;
	
	this.resetSexSkillConsUsage(false);
};
Game_Actor.prototype.receptionistBattle_greetVisitor_response = function() {
	this._receptionist_greetVisitor_gotResponse = true;
	
	let target = $gameTroop.receptionistBattle_visitorAtDesk();
	if(!target) return;

	// Perv
	if(target._visitor_isPervert) {
		target._perv_waitingForRequestResponse = true;
		target._visitor_isIdentified = true;
		
		BattleManager.playEnemyVoice_SideJob(target);
		
		let isAlsoFan = target._visitor_isFan;
		let requestId = target._visitor_requestID;
		
		if(requestId === VISITOR_REQUEST_BOOBS_SHAKE_ID) {
			if(isAlsoFan)
				BattleManager.actionRemLines(ENEMY_LINE_FAN_GREET_BOOBSHAKE);
			else
				BattleManager.actionRemLines(ENEMY_LINE_PERV_GREET_BOOBSHAKE);
		}
		else if(requestId === VISITOR_REQUEST_KISS_ID) {
			if(isAlsoFan)
				BattleManager.actionRemLines(ENEMY_LINE_FAN_GREET_KISS);
			else
				BattleManager.actionRemLines(ENEMY_LINE_PERV_GREET_KISS);
		}
		else if(requestId === VISITOR_REQUEST_HANDJOB_ID) {
			if(isAlsoFan)
				BattleManager.actionRemLines(ENEMY_LINE_FAN_GREET_HANDJOB);
			else
				BattleManager.actionRemLines(ENEMY_LINE_PERV_GREET_HANDJOB);
		}
		else if(requestId === VISITOR_REQUEST_BLOWJOB_ID) {
			if(isAlsoFan)
				BattleManager.actionRemLines(ENEMY_LINE_FAN_GREET_BLOWJOB);
			else
				BattleManager.actionRemLines(ENEMY_LINE_PERV_GREET_BLOWJOB);
		}
		
		//AudioManager.playSe({name:'+Voice_Enemy_a', pan:0, pitch:100, volume:80});
		this.emoteReceptionistPose();
	}
	// Fan
	else if(target._visitor_isFan) {
		target._fan_waitingForRequestResponse = true;
		target._visitor_isIdentified = true;
		
		target._visitor_requestID = VISITOR_REQUEST_HAND_SHAKE_ID;
		BattleManager.actionRemLines(ENEMY_LINE_FAN_GREET_HANDSHAKE);
	}
	// Not fan - normal visitor
	else {
		if(target.visitorStatusIsUnknown()) {
			BattleManager._logWindow.push('addText', TextManager.receptionistGreetVisitorResultNormal.format(target.displayName()));
			this.receptionistBattle_giveVisitorTheirPapers(target);
		}
	}
};

Game_Actor.prototype.receptionistBattle_giveVisitorTheirPapers = function(target) {
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_GIVE_PAPER_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_GIVE_PAPER_NORMAL);
	}
	AudioManager.playSe({name:'+Waitress_Pay1', pan:0, pitch:100, volume:70});
	
	target.setVisitorLocationToMoving();
	target.setVisitorStatusToWriting();
	target.setVisitorFinishWalkingToSeatTime(VISITOR_DESK_DISTANCE);
	target.receptionistBattle_leaveDeskQueue();
};

// Get Paper

Game_Actor.prototype.showEval_receptionistBattle_getVisitorPapers = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk() || this.showEval_receptionistBattle_acceptRequest() || this.showEval_receptionistBattle_acceptRequest_cant())
		return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor.visitorStatusIsWriting() && deskVisitor._visitor_finishedWritingPapers && !deskVisitor._visitor_isAngry;
};
Game_Actor.prototype.afterEval_receptionistBattle_getVisitorPapers = function(target) {
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_RECEIVE_PAPER_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_RECEIVE_PAPER_NORMAL);
	}
	
	target.setVisitorLocationToMoving();
	target.setVisitorStatusToPaper();
	target._visitor_handedOverPapers = true;
	
	target.setVisitorFinishWalkingToSeatTime(VISITOR_DESK_DISTANCE);
	target.receptionistBattle_leaveDeskQueue();
	
	this.resetSexSkillConsUsage(false);
};

// Processing Papers
// Process Papers skill

Game_Actor.prototype.showEval_receptionistBattle_beginProcessingPapers = function() {
	return this.receptionistBattle_remainingProcessingPapersTime() === -1 && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_beginProcessingPapers = function() {
	if($gameTroop.receptionistBattle_thereIsVisitorAtDesk() || this.showEval_receptionistBattle_acceptRequest() || this.showEval_receptionistBattle_acceptRequest_cant() || this.showEval_receptionistBattle_apologize())
		return false;
	let hasPapersNeedingProcessing = false;
	for(let i = 0; i < $gameTroop._visitorSeats.length; ++i) {
		let visitor = $gameTroop._visitorSeats[i];
		if(visitor && visitor.isValidTargetForReceptionistBattle_beginProcessingPapers()) {
			hasPapersNeedingProcessing = true;
			break;
		}
	}
	return hasPapersNeedingProcessing && !this.receptionistBattle_isLayingOnDesk();
};
Game_Actor.prototype.afterEval_receptionistBattle_beginProcessingPapers = function(target) {
	//set time
	this._receptionist_currentlyProcessingPapers = true;
	this._receptionist_currentlyProcessingPapersOfVisitor = target._visitorSeatId;
	this._receptionist_remainingProcessingPaperTime = this.calculateReceptionistPaperworkProcessingTime(target._visitor_pages); 
	this.resetSexSkillConsUsage(false);
	this.emoteReceptionistPose();
};

Game_Actor.prototype.skillCost_receptionistProcessPaper = function() {
	let multipler = 1;
	if(this.justOrgasmed()) multipler *= 2;
	return Math.min(this.realMaxStamina * 0.06 * multipler, (20 + this.level * 3) * multipler);
};

Game_Actor.prototype.calculateReceptionistPaperworkProcessingTime = function(pages) {
	let time = RECEPTIONIST_PROCESS_PAPER_BASE_TIME;
	
	time += RECEPTIONIST_PROCESS_PAPER_EACH_TIME * pages;
	
	return time;
};

// Continue Processing
Game_Actor.prototype.showEval_receptionistBattle_continueProcessingPapers = function() {
	return this.receptionistBattle_remainingProcessingPapersTime() > 0 && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_continueProcessingPapers = function() {
	if(this.stamina < this.skillCost_receptionistProcessPaper())
		return false;
	if($gameTroop.receptionistBattle_thereIsVisitorAtDesk() || this.showEval_receptionistBattle_acceptRequest() || this.showEval_receptionistBattle_acceptRequest_cant() || this.justOrgasmed()) return false;
	return !this.receptionistBattle_isLayingOnDesk();
};
Game_Actor.prototype.continueProcessingPapersWillCost = function() {
	let willCost = 6;
	if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR))
		willCost += 1;
	return Math.round(willCost * this.wsc);
};
Game_Actor.prototype.afterEval_receptionistBattle_continueProcessingPapers = function(calledFromonTurnEnd) {
	if(calledFromonTurnEnd) {
		let processingSpeed = this.receptionistBattle_processingPapersSpeed();
		this.receptionistBattle_decreaseRemainingProcessingPapersTime(processingSpeed);
		this._hp -= this.skillCost_receptionistProcessPaper();
		if(this.will >= this.continueProcessingPapersWillCost()) {
			this.gainMindExp(Math.round(processingSpeed * 0.55), this.level);
			this.gainWill(-this.continueProcessingPapersWillCost());
		}
		else {
			this.gainMindExp(Math.round(processingSpeed * 0.15), this.level);
		}
	}
	
	if(this.receptionistBattle_remainingProcessingPapersTime() > 0) {
		//message continue
		this._receptionist_currentlyProcessingPapers = true;
		//Remline if sex
		this.emoteReceptionistPose();
	}
	else {
		//let finishedVisitor = this._receptionist_currentlyProcessingPapersOfVisitor;
		let finishedVisitor = $gameTroop._visitorSeats[this._receptionist_currentlyProcessingPapersOfVisitor];
		
		BattleManager._logWindow.push('addText', TextManager.receptionistFinishedProcessingPapers.format(finishedVisitor.displayName(), finishedVisitor._visitor_time));
		AudioManager.playSe({name:'+Se2', pan:0, pitch:100, volume:70});
		
		finishedVisitor.setVisitorStatusToTime();
		
		this._receptionist_currentlyProcessingPapers = false;
		this._receptionist_currentlyProcessingPapersOfVisitor = false;
		this._receptionist_remainingProcessingPaperTime = -1;
		this._playthroughRecordReceptionistPagesProcessedCount += finishedVisitor._visitor_pages;
		this.emoteReceptionistPose();
	}
	
	this.resetSexSkillConsUsage(false);
};

Game_Actor.prototype.receptionistBattle_remainingProcessingPapersTime = function() {
	return this._receptionist_remainingProcessingPaperTime;
};
Game_Actor.prototype.receptionistBattle_decreaseRemainingProcessingPapersTime = function(time) {
	this._receptionist_remainingProcessingPaperTime -= time;
};
//Processing Speed
Game_Actor.prototype.receptionistBattle_processingPapersSpeed = function() {
	let speed = 8.5;
	
	if(this.hasThisTitle(TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR)) {
		if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR)) {
			speed += 6.5;
		}
		else {
			speed += 2.5;
		}
	}
	
	if(this.will >= this.continueProcessingPapersWillCost()) {
		speed *= 1.75;
	}
	if(this.receptionistBattle_isHavingSexBehind()) {
		speed *= 0.75;
	}
	if(this.isWearingAnyToy()) {
		speed *= 0.75;
	}
	
	
	return Math.ceil(speed);
};

// Assign To Visiting Room

Game_Actor.prototype.showEval_receptionistBattle_assignToVisitingRoom = function(roomId) {
	return $gameParty.maxAvailableVisitorRooms() > roomId && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_assignToVisitingRoom = function() {
	return $gameTroop.receptionistBattle_visitorsReadyForVisitingRoom().length > 0;
};
Game_Actor.prototype.afterEval_receptionistBattle_assignToVisitingRoom = function(target, roomId) {
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_ASSIGN_ROOM_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_ASSIGN_ROOM_NORMAL);
	}
	
	target._visitor_assignedVisitingRoom = roomId;
	if(target.visitorLocationIsDesk() || target.visitorLocationIsLine()) {
		target.receptionistBattle_leaveDeskQueue();
	}
	target.setVisitorLocationToMoving();
	target.setVisitorFinishWalkingToVisitingRoomTime(VISITOR_ROOM_DISTANCE);
	
	this.resetSexSkillConsUsage(false);
};

// Check Visiting Room Status

Game_Actor.prototype.showEval_receptionistBattle_checkVisitingRoomStatus = function(roomId) {
	return $gameParty.maxAvailableVisitorRooms() > roomId && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_checkVisitingRoomStatus = function() {
	if(this.receptionistBattle_isKissing() || this.receptionistBattle_gettingBoobsRubbed() || this.receptionistBattle_isGivingBlowjob() || this.receptionistBattle_isGivingHandjob())
		return false;
	
	return !this.receptionistBattle_isLayingOnDesk();
};
Game_Actor.prototype.afterEval_receptionistBattle_checkVisitingRoomStatus = function(roomId) {
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_CHECK_ROOM_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_CHECK_ROOM_NORMAL);
	}
	
	this._receptionist_checkingVisitingRoom_startingPhoneCall = true;
	this._receptionist_checkingVisitingRoomId = roomId;
	this.resetSexSkillConsUsage(false);
	this.emoteReceptionistPose();
};

Game_Actor.prototype.receptionistBattle_checkVisitingRoomStatus_response = function() {
	let roomId = this._receptionist_checkingVisitingRoomId;
	let roomTime = $gameParty._receptionistBattle_visitingRoomTime[roomId];
	
	//guard message, depending on if it is available or not
	if($gameParty.receptionistBattle_getCurrentTimeInSeconds() >= roomTime) {
		BattleManager._logWindow.push('addText', TextManager.receptionistVisitingRoomStatusNotOccupied.format(TextManager.visitorRoomName(roomId)));
	}
	else {
		let secondsLeft = roomTime - $gameParty.receptionistBattle_getCurrentTimeInSeconds();
		let minutesLeft = Math.ceil(secondsLeft / 60);
		
		if(minutesLeft === 1) {
			BattleManager._logWindow.push('addText', TextManager.receptionistVisitingRoomStatusOccupiedSingle.format(TextManager.visitorRoomName(roomId)));
		}
		else {
			BattleManager._logWindow.push('addText', TextManager.receptionistVisitingRoomStatusOccupiedPlural.format(TextManager.visitorRoomName(roomId), minutesLeft));
		}
	}
	
	this._receptionist_checkingVisitingRoom_endingPhoneCall = true;
};

// Apologize

Game_Actor.prototype.showEval_receptionistBattle_apologize = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk())
		return false;
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	return deskVisitor._visitor_isAngry;
};
Game_Actor.prototype.afterEval_receptionistBattle_apologize = function(target) {
	//Normal apology
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_NORMAL_APOLOGY_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_NORMAL_APOLOGY_NORMAL);
	}
	
	target._visitor_isAngry = false;
	target._visitor_isAngry_fromBadVisitingRoom = false;
	target._visitor_assignedVisitingRoom = -1;
	target.setVisitorLocationToSitting();
	target.setVisitorFinishWalkingToSeatTime(VISITOR_DESK_DISTANCE);
	target.receptionistBattle_leaveDeskQueue();
	
	this.resetSexSkillConsUsage(false);
};

//Reject Request
Game_Actor.prototype.showEval_receptionistBattle_rejectRequest = function() {
	if(this.showEval_receptionistBattle_apologize())
		return false;
	return $gameTroop.receptionistBattle_fanWaitingForResponse() || $gameTroop.receptionistBattle_pervWaitingForResponse();
};
Game_Actor.prototype.customReq_receptionistBattle_rejectRequest = function() {
	if(!this.showEval_receptionistBattle_rejectRequest()) return false;

	let canAcceptRequest = this.customReq_receptionistBattle_acceptRequest();
	let isHorny = this.isHorny;
	
	if(canAcceptRequest && isHorny) return false; 
	
	return true;
};
Game_Actor.prototype.afterEval_receptionistBattle_rejectRequest = function(target) {
	let respondingToSecondRequest = false;
	if(target._visitor_isPervert) {
		if(target._perv_waitingForSecondRequestResponse) {
			target._perv_secondRequestRejected = true;
			target._perv_waitingForSecondRequestResponse = false;
			respondingToSecondRequest = true;
		}
		else if(target._perv_waitingForRequestResponse) {
			target._perv_requestRejected = true;
			target._perv_currentlyGettingRequestFulfilled = false;
			target._perv_waitingForRequestResponse = false;
		}
	}
	
	if(!respondingToSecondRequest) {
		if(target._visitor_isFan && target._fan_waitingForRequestResponse) {
			target._fan_requestRejected = true;
			target._fan_currentlyGettingRequestFulfilled = false;
			target._fan_waitingForRequestResponse = false;
		}
		
		if(this.receptionistBattle_isSayingSexualLines()) {
			BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_REJECT_REQUEST_SEXUAL);
		}
		else {
			BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_REJECT_REQUEST_NORMAL);
		}
		
		if(target._visitor_isVisiting) {
			this.receptionistBattle_giveVisitorTheirPapers(target);
		}
		else if(target._visitor_isPervert) {
			target.receptionistBattle_action_pervLeaves();
		}
		else {
			target.receptionistBattle_action_fanLeaves();
		}
	}
	this.resetSexSkillConsUsage(false);
};

//Accept Request
Game_Actor.prototype.showEval_receptionistBattle_acceptRequest = function() {
	if(!this.customReq_receptionistBattle_acceptRequest()) return false;
	return $gameTroop.receptionistBattle_fanWaitingForResponse() || $gameTroop.receptionistBattle_pervWaitingForResponse();
};
Game_Actor.prototype.customReq_receptionistBattle_acceptRequest = function() {
	if(!$gameTroop.receptionistBattle_fanWaitingForResponse() && !$gameTroop.receptionistBattle_pervWaitingForResponse()) return false;
	
	let meetConditions = false;
	let visitor = $gameTroop.receptionistBattle_visitorAtDesk();
	let requestId = 0;
	
	if(visitor._perv_waitingForSecondRequestResponse)
		requestId = visitor._perv_secondRequestID;
	else 
		requestId = visitor._visitor_requestID;
	
	if(requestId === VISITOR_REQUEST_HAND_SHAKE_ID) {
		meetConditions = true;
	}
	else {
		if(requestId === VISITOR_REQUEST_BOOBS_SHAKE_ID) {
			meetConditions = this.canGetBoobsPetted();
		}
		else if(requestId === VISITOR_REQUEST_KISS_ID) {
			meetConditions = this.canGetKissed(KISS_LVL_ONE);
		}
		else if(requestId === VISITOR_REQUEST_HANDJOB_ID) {
			meetConditions = this.canGetLeftHandInserted();
		}
		else if(requestId === VISITOR_REQUEST_BLOWJOB_ID) {
			meetConditions = this.canGetMouthInserted();
		}
		
		if(visitor.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(visitor.getWantedId());
			if(!wantedStatus._visitor_isPervert && wantedStatus._visitor_pervPromoteChance >= 100) {
				wantedStatus._visitor_isPervert = true;
			}
		}
	}
	
	return meetConditions;
};
Game_Actor.prototype.afterEval_receptionistBattle_acceptRequest = function(target) {
	if(target._perv_waitingForRequestResponse) {
		target._perv_currentlyGettingRequestFulfilled = true;
		target._perv_waitingForRequestResponse = false;
		
		let requestId = target._visitor_requestID;
		if(requestId === VISITOR_REQUEST_BLOWJOB_ID) {
			target._perv_queuedJoinSkill = SKILL_ENEMY_POSEJOIN_RECEPTIONIST_MOUTH_ID;
			target._perv_kissing = false;
			target._perv_touchingBoobs = false;
		}
		else if(requestId === VISITOR_REQUEST_HANDJOB_ID) {
			target._perv_queuedJoinSkill = SKILL_ENEMY_POSEJOIN_RECEPTIONIST_LEFT_HAND_ID;
		}
		else if(requestId === VISITOR_REQUEST_KISS_ID) {
			target._perv_kissing = true;
		}
		else if(requestId === VISITOR_REQUEST_BOOBS_SHAKE_ID) {
			target._perv_touchingBoobs = true;
		}
		
		BattleManager.playSpecialBgm_ReceptionistSex();
	}
	else if(target._perv_waitingForSecondRequestResponse) {
		target._perv_secondRequestAccepted = true;
		target._perv_waitingForSecondRequestResponse = false;
		
		let requestId = target._perv_secondRequestID;
		if(requestId === VISITOR_REQUEST_BLOWJOB_ID) {
			target._perv_queuedJoinSkill = SKILL_ENEMY_POSEJOIN_RECEPTIONIST_MOUTH_ID;
			target._perv_kissing = false;
			target._perv_touchingBoobs = false;
		}
		else if(requestId === VISITOR_REQUEST_HANDJOB_ID) {
			target._perv_queuedJoinSkill = SKILL_ENEMY_POSEJOIN_RECEPTIONIST_LEFT_HAND_ID;
		}
		else if(requestId === VISITOR_REQUEST_KISS_ID) {
			target._perv_kissing = true;
		}
		else if(requestId === VISITOR_REQUEST_BOOBS_SHAKE_ID) {
			target._perv_touchingBoobs = true;
		}
		
		target._perv_turnsUntilRequestFinished += Math.randomInt(3) + 1;
		
		BattleManager.playSpecialBgm_ReceptionistSex();
	}
	else if(target._fan_waitingForRequestResponse) {
		target._fan_currentlyGettingRequestFulfilled = true;
		target._fan_waitingForRequestResponse = false;
	}
	
	this.resetSexSkillConsUsage(false);
	this.emoteReceptionistPose();
	//this.updateReceptionistBattleVisitorQueueTachie();
};

Game_Actor.prototype.showEval_receptionistBattle_acceptRequest_cant = function() {
	if(this.customReq_receptionistBattle_acceptRequest()) return false;
	return $gameTroop.receptionistBattle_fanWaitingForResponse() || $gameTroop.receptionistBattle_pervWaitingForResponse();
};
Game_Actor.prototype.skillDescription_cant_receptionistBattle_acceptRequest = function() {
	let text = '';

	text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
	
	return text;
};

// Breather
Game_Actor.prototype.showEval_receptionistBattle_Breather = function() {
	return !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_Breather = function() {
	return true;
};
Game_Actor.prototype.dmgFormula_receptionistBattle_Breather = function() {
	let percent = Math.max(0.15, this.hrg * 9);
	let dmg = this.maxstamina * percent;
	return Math.round(dmg);
};
Game_Actor.prototype.afterEval_receptionistBattle_Breather = function() {
	this.resetSexSkillConsUsage(false);
	this.emoteReceptionistPose();
};

Game_Actor.prototype.showEval_receptionistBattle_Rest = function() {
	return !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_Rest = function() {
	return true;
};

// End Shift
Game_Actor.prototype.showEval_receptionistBattle_endShift = function() {
	return $gameParty._receptionistBattle_additionalPotentialVisitors === 0 && $gameTroop.receptionistBattle_visitors().length === 0;
};
Game_Actor.prototype.customReq_receptionistBattle_endShift = function() {
	return !$gameTroop.receptionistBattle_isThereGoblinsOnScreen();
};
Game_Actor.prototype.afterEval_receptionistBattle_endShift = function() {
	$gameParty.receptionBattle_advanceTimeBySeconds($gameParty._receptionistBattle_timeLimit - $gameParty.receptionistBattle_getCurrentTimeInSeconds());
};

// Fix clothes
Game_Actor.prototype.showEval_receptionistBattle_fixClothes = function() {
	return !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_fixClothes = function() {
	if(this.justOrgasmed()) return false;
	return !this.isClothingMaxDamaged() && !this.isClothingAtMaxFixable() && !this.receptionistBattle_isHavingSexBehind() && !this.receptionistBattle_isLayingOnDesk();
};
Game_Actor.prototype.afterEval_receptionistBattle_fixClothes = function() {
	this.restoreClothingDurability();
	this.addToFixClothesUsageCountRecord();
	this.resetSexSkillConsUsage(false);
	this.emoteReceptionistPose();
};

// Shoo Away

Game_Actor.prototype.showEval_receptionistBattle_shooAway = function() {
	return $gameTroop.receptionistBattle_countGoblins() > 0 && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_shooAway = function() {
	if(this.receptionistBattle_isKissing() || this.receptionistBattle_gettingBoobsRubbed() || this.receptionistBattle_isGivingBlowjob() || this.receptionistBattle_isGivingHandjob())
		return false;
	
	return !this.receptionistBattle_isLayingOnDesk() && this.isBodySlotFree(LEFT_HAND_ID) && !this.isHorny;
};
Game_Actor.prototype.skillCost_receptionistBattle_shooAway = function() {
	let multipler = 1;
	if(this.justOrgasmed()) multipler *= 2;
	return Math.min(this.realMaxStamina * 0.05 * multipler, (17 + this.level * 2.5) * multipler);
};
Game_Actor.prototype.afterEval_receptionistBattle_shooAway = function(target) {
	if(this.receptionistBattle_isSayingSexualLines()) {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_SHOO_AWAY_SEXUAL);
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_SHOO_AWAY_NORMAL);
	}
	
	let goblins = $gameTroop.receptionistBattle_goblins();
	for(let i = 0; i < goblins.length; ++i) {
		goblins[i].addState(STATE_RECEPTIONIST_SHOOED_ID);
	}
	
	this.resetSexSkillConsUsage(false);
};

// Kick Away

Game_Actor.prototype.showEval_receptionistBattle_kickAway = function() {
	return $gameTroop.receptionistBattle_countGoblins() > 0 && !this.showEval_receptionistBattle_acceptRequest() && !this.showEval_receptionistBattle_acceptRequest_cant();
};
Game_Actor.prototype.customReq_receptionistBattle_kickAway = function() {
	return !this.receptionistBattle_isLayingOnDesk() && !this.receptionistBattle_isHavingSexBehind() && !this.isHorny && 
	($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM] || ($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE] && !$gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].isInAPose()));
};
Game_Actor.prototype.skillCost_receptionistBattle_kickAway = function() {
	let staminaCost = this.skillAttack_staminaCost(30, 0.5, 0, 0);
	let multipler = 5;
	if(this.justOrgasmed()) multipler *= 3;
	return Math.round(staminaCost * multipler);
};
Game_Actor.prototype.afterEval_receptionistBattle_kickAway = function(target) {
	BattleManager.actionRemLines(KARRYN_LINE_RECEPTIONIST_KICK_AWAY);
	
	target.addState(STATE_RECEPTIONIST_KICKED_ID);
	this._playthroughRecordKickAttackUsage++;
	this.resetSexSkillConsUsage(false);
	
	let prekickDistanceSlot = target._goblinDistanceSlot;
	
	if($gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1]) {
		if($gameTroop._goblins_distanceSlot[prekickDistanceSlot - 2]) {
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 2].addState(STATE_RECEPTIONIST_KICKED_ID);
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1].addState(STATE_RECEPTIONIST_KICKED_ID);
		}
		else {
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1].addState(STATE_RECEPTIONIST_KICKED_ID);
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1]._goblinDistanceSlot = prekickDistanceSlot - 2;
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 2] = $gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1];
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot] = false;
			$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1] = target;
			target._goblinDistanceSlot = prekickDistanceSlot - 1;
		}
	}
	else {
		$gameTroop._goblins_distanceSlot[prekickDistanceSlot] = false;
		$gameTroop._goblins_distanceSlot[prekickDistanceSlot - 1] = target;
		target._goblinDistanceSlot = prekickDistanceSlot - 1;
	}
	
	this.updateReceptionistBattleGoblinTachie();
};

//////////////
////////////////
// Game Troop
////////////////
//////////////

//////
// Setup

Game_Troop.prototype.setupReceptionistBattle = function(troopId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._visitorSeats = [ false, false, false, false, false, false, false, false ];
	this._goblins_distanceSlot = [ -1, false, false, false, false, false, false, false ];
	this._goblins_spawned_count = 0;
	this._goblins_spawned_max = 1;
	let visitors = this.receptionistBattle_startingVisitors();
	this._deskQueue = [];
	
	//Enemies
	for(let i = 0; i < visitors.length; ++i) {
		let enemyId = visitors[i];
		let enemy = this.setup_receptionistBattle_visitor(enemyId);
		enemy._visitor_isStarter = true;
	}
	this.makeUniqueNames();
	
	///////////
	//Spawn
	
	this._nextVisitorSpawnTimeLimit = $gameTroop.receptionistBattle_nextVisitorSpawnTime();
	
	//Goblin
	let goblinPassiveLevel = actor.reactionScore_enemyGoblinPassive() / 10;
	if(actor.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE))
		goblinPassiveLevel += 1;
	
	if(!DEBUG_MODE) {
		this._goblins_spawned_max = 0;
	}
	else if(goblinPassiveLevel >= 5) {
		this._goblins_spawned_max += 3 + Math.randomInt(6);
	}
	else if(goblinPassiveLevel >= 4) {
		this._goblins_spawned_max += 3 + Math.randomInt(5);
	}
	else if(goblinPassiveLevel >= 3) {
		this._goblins_spawned_max += 2 + Math.randomInt(4);
	}
	else if(goblinPassiveLevel >= 2) {
		this._goblins_spawned_max += 2 + Math.randomInt(3);
	}
	else if(goblinPassiveLevel >= 1) {
		this._goblins_spawned_max += 1 + Math.randomInt(3);
	}
	else {
		this._goblins_spawned_max += 1 + Math.randomInt(2);
	}
	
	this._goblins_spawned_max = Math.ceil(this._goblins_spawned_max * $gameParty._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler);
	
	this._nextGoblinSpawnTimeLimit = this.receptionistBattle_nextGoblinSpawnTime() * 0.5;
};

// Visitor Setup

Game_Troop.prototype.setup_receptionistBattle_visitor = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		enemyId = wanted._enemyId;
	}
	
	let seatId = -1;
	while(seatId === -1) {
		randomNum = Math.randomInt(this._visitorSeats.length);
		if(this._visitorSeats[randomNum] === false) {
			seatId = randomNum;
		}
	}
	
	let x = VISITOR_LEFT_SEAT_X;
	let y = VISITOR_FIRST_SEAT_Y;
	
	if(seatId >= 4) {
		x = VISITOR_RIGHT_SEAT_X;
		y += (seatId - 4) * VISITOR_ROW_Y;
	}
	else {
		y += seatId * VISITOR_ROW_Y;
	}
	
	
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	enemy._visitorSeatId = seatId;
	this._visitorSeats[seatId] = enemy;
	enemy._visitorPerformedCollapseAlready = false;
	this._enemies.push(enemy);
	enemy.setupForReceptionistBattle_visitor(enemyId, wanted);
	
	return enemy;
};

Game_Troop.prototype.receptionistBattle_startingVisitors = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let visitors = [];
	let startingNum = 0;
	let satisfaction = $gameParty._receptionistSatisfaction;
	let fame = $gameParty._receptionistFame;
	let notoriety = $gameParty._receptionistNotoriety;
	
	if(satisfaction >= 20) startingNum = 3 + Math.randomInt(4);
	else if(satisfaction >= 10) startingNum = 3 + Math.randomInt(3);
	else if(satisfaction >= 7) startingNum = 2 + Math.randomInt(3);
	else startingNum = 2 + Math.randomInt(2);
	
	if(fame >= 15) startingNum += 1 + Math.randomInt(2);
	else if(fame >= 10) startingNum += Math.randomInt(2);
	else if(fame >= 6) startingNum += Math.max(0, Math.randomInt(3) - 1);

	if(notoriety >= 25) startingNum += 1 + Math.randomInt(4);
	else if(notoriety >= 20) startingNum += 1 + Math.randomInt(3);
	else if(notoriety >= 15) startingNum += 1 + Math.randomInt(2);
	else if(notoriety >= 10) startingNum += Math.randomInt(2);
	else if(notoriety >= 5) startingNum += Math.max(0, Math.randomInt(3) - 1);

	startingNum = Math.min(8, startingNum);
	startingNum = Math.max(3, startingNum);
	
	for(let i = 0; i < startingNum; ++i) {
		visitors.push(this.receptionistBattle_validVisitorId());
	}
	
	return visitors;
};

Game_Troop.prototype.receptionistBattle_validVisitorId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [];
	
	if(Math.randomInt(100) < $gameParty.setReceptionistSatisfaction * 5 - 40) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_NORMAL);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_NORMAL);
	}
	
	if(Math.randomInt(100) < $gameParty.setReceptionistSatisfaction * 5 - 40) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
	}
	
	if(Math.randomInt(100) < $gameParty.setReceptionistSatisfaction * 5 - 30) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_SLOW);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_SLOW);
	}
	
	if(Math.randomInt(100) < $gameParty.setReceptionistSatisfaction * 5 - 50) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_FAST);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_FAST);
	}
	
	if(Math.randomInt(100) < $gameParty._receptionistFame * 5 - 20) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_FAN);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_FAN);
	}
	
	if(Math.randomInt(100) < $gameParty._receptionistFame * 5 - 30) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_FAN);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_FAN);
	}
	
	if(Math.randomInt(100) < $gameParty._receptionistNotoriety * 5 - 20) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_SLOW);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_NORMAL);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_FAST);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_GOBLIN);
	}
	
	if(Math.randomInt(100) < $gameParty._receptionistNotoriety * 5 - 30) {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_SLOW);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_NORMAL);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_FAST);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_PERV_GOBLIN);
	}
	
	if($gameParty._receptionistNotoriety > 6 || $gameParty._receptionistFame > 6) {
		if(Math.randomInt(100) > $gameParty._receptionistNotoriety * 5 + $gameParty._receptionistFame * 3) {
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_NORMAL);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_NORMAL);
			validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_NORMAL);
			validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_NORMAL);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_SLOW);
			validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_SLOW);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_FAST);
			validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_FAST);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
		}
		else {
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_NORMAL);
			validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_NORMAL);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_SLOW);
			validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
		}
	}
	else {
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_NORMAL);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_NORMAL);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_NORMAL);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_NORMAL);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_SLOW);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_SLOW);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_FAST);
		validEnemyTypes.push(ENEMY_ID_FEMALE_VISITOR_FAST);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
		validEnemyTypes.push(ENEMY_ID_MALE_VISITOR_GOBLIN);
	}
	
	//debugging: force certain types
	//validEnemyTypes = [ 170,171,172 ];
	//validEnemyTypes = [ 162 ];
	
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};

// Goblin Setup

Game_Troop.prototype.setup_receptionistBattle_goblin = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		enemyId = wanted._enemyId;
	}
	
	let x = 2000;
	let y = 1500;
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	this._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST] = enemy;
	enemy._goblinDistanceSlot = GOBLIN_DISTANCE_FARTHEST;
	enemy._goblinActionCooldown = 1;
	enemy._goblinPerformedCollapseAlready = false;
	this._enemies.push(enemy);
	//enemy.setupForReceptionistBattle(wanted);
	
	return enemy;
};

Game_Troop.prototype.receptionistBattle_validGoblinId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [ 81, 82, 83 ];
	
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};


/////////
// Add Icons to Starters
Game_Troop.prototype.receptionistBattle_setupStartingMembersIcons = function() {
	$gameTroop.receptionistBattle_visitors().forEach(function(member) {
		member.addState(member._visitor_status);
		member.addState(member._visitor_location);
	});	
};

///////
// Members function

Game_Troop.prototype.receptionistBattle_visitors = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && member.isVisitorType;
    });
};
Game_Troop.prototype.receptionistBattle_goblins = function() {
	return this.members().filter(function(member) {
        return member.isGoblinType && member.isAlive();
    });
};

Game_Troop.prototype.receptionistBattle_visitorsReadyForVisitingRoom = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && member.isVisitorType && member.isValidTargetForReceptionistBattle_assignVisitingRoom();
    });
};

Game_Troop.prototype.receptionistBattle_thereIsVisitorAtDesk = function() {
	if(!$gameTroop._deskQueue) return false;
	return $gameTroop._deskQueue.length > 0;
};
Game_Troop.prototype.receptionistBattle_visitorAtDesk = function() {
	if(!$gameTroop.receptionistBattle_thereIsVisitorAtDesk()) return false;
	return $gameTroop._deskQueue[0];
};
Game_Troop.prototype.receptionistBattle_fanWaitingForResponse = function() {
	if(!$gameTroop.receptionistBattle_visitorAtDesk()) return false;
	return $gameTroop._deskQueue[0]._fan_waitingForRequestResponse && !$gameTroop._deskQueue[0]._fan_requestRejected && !$gameTroop._deskQueue[0]._fan_requestWasFulfilled;
};
Game_Troop.prototype.receptionistBattle_pervWaitingForResponse = function() {
	if(!$gameTroop.receptionistBattle_visitorAtDesk()) return false;
	return ($gameTroop._deskQueue[0]._perv_waitingForRequestResponse || $gameTroop._deskQueue[0]._perv_waitingForSecondRequestResponse) && !$gameTroop._deskQueue[0]._perv_requestRejected && !$gameTroop._deskQueue[0]._perv_requestWasFulfilled;
};

Game_Troop.prototype.receptionistBattle_unknownVisitorsNotAtDesk = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && member.isVisitorType && member.isValidTargetForReceptionistBattle_callUnknownVisitor();
    });
};

Game_Troop.prototype.receptionistBattle_countEmptySeats = function() {
	let count = 0;
	
	for(let i = 0; i < this._visitorSeats.length; ++i) {
		if(!this._visitorSeats[i]) count++;
	}
	
	return count;
};

Game_Troop.prototype.receptionistBattle_countGoblins = function() {
	return this.receptionistBattle_goblins().length;
};

Game_Troop.prototype.receptionistBattle_isThereGoblinsOnScreen = function() {
	if(this.receptionistBattle_countGoblins() === 0) return false;
	
	return this._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST] || this._goblins_distanceSlot[GOBLIN_DISTANCE_FAR] || this._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM] || this._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE];
};

////////
// Spawn

Game_Troop.prototype.receptionistBattle_spawnVisitor = function(forceSpawn) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySeatAvailable = this.receptionistBattle_countEmptySeats() > 0;
	let spawnedNewVisitor = false;
	
	if(forceSpawn || this._nextVisitorSpawnTimeLimit <= $gameParty.receptionistBattle_getCurrentTimeInSeconds()) {
		if(emptySeatAvailable && $gameParty._receptionistBattle_additionalPotentialVisitors > 0) {
			let enemyId = this.receptionistBattle_validVisitorId();
			let enemy = this.setup_receptionistBattle_visitor(enemyId);
			enemy.makeUniqueNames();
			enemy.onBattleStart();
			enemy.midBattleSpawn_setupDreamX();
			SceneManager._scene._spriteset.addEnemy(enemy);
			
			BattleManager._logWindow.push('addText', TextManager.receptionistNewVisitor.format(enemy.displayName()));
			AudioManager.playSe({name:'+Waitress_Chair2', pan:0, pitch:100, volume:90});
			
			enemy.setVisitorStatusToUnknown();
			enemy.setVisitorLocationToSitting();
			
			//enemy.setVisitorLocationToMoving();
			//enemy.setVisitorFinishWalkingToSeatTime(VISITOR_ROOM_DISTANCE);
			
			$gameParty._receptionistBattle_additionalPotentialVisitors--;
			spawnedNewVisitor = true;
		}	

		this._nextVisitorSpawnTimeLimit = $gameTroop.receptionistBattle_nextVisitorSpawnTime();
	}
	
	return spawnedNewVisitor;
};

Game_Troop.prototype.receptionistBattle_nextVisitorSpawnTime = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let currentTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
	let addedTime = 0;
	let satisfaction = $gameParty._receptionistSatisfaction;
	let fame = $gameParty._receptionistFame;
	let notoriety = $gameParty._receptionistNotoriety;
	
	addedTime = Math.randomInt(300) + 200;
	
	if(satisfaction >= 25) addedTime -= (130 + Math.randomInt(140));
	else if(satisfaction >= 20) addedTime -= (110 + Math.randomInt(120));
	else if(satisfaction >= 14) addedTime -= (90 + Math.randomInt(100));
	else if(satisfaction >= 10) addedTime -= (70 + Math.randomInt(80));
	else if(satisfaction >= 7) addedTime -= (50 + Math.randomInt(60));
	
	if(fame >= 15) addedTime -= (30 + Math.randomInt(60));
	else if(fame >= 10) addedTime -= (20 + Math.randomInt(50));
	else if(fame >= 8) addedTime -= (10 + Math.randomInt(40));
	else if(fame >= 6) addedTime -= (Math.randomInt(30));

	if(notoriety >= 25) addedTime -= (50 + Math.randomInt(120));
	else if(notoriety >= 20) addedTime -= (40 + Math.randomInt(100));
	else if(notoriety >= 15) addedTime -= (30 + Math.randomInt(80));
	else if(notoriety >= 10) addedTime -= (20 + Math.randomInt(60));
	else if(notoriety >= 5) addedTime -= (10 + Math.randomInt(40));
	
	addedTime = Math.max(30 + Math.randomInt(60), addedTime);
	
	return currentTime + addedTime;
};


Game_Troop.prototype.receptionistBattle_spawnGoblin = function(forceSpawn) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let goblinPassiveLevel = actor.reactionScore_enemyGoblinPassive() / 10;
	let goblinCount = this.receptionistBattle_countGoblins();
	let spawnedNewGoblin = false;
	let maxGoblinCount = 1;
	
	if(actor.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE))
		goblinPassiveLevel += 1;
	if(goblinPassiveLevel >= 5)
		maxGoblinCount = 3;
	else if(goblinPassiveLevel >= 3)
		maxGoblinCount = 2;
	

	if(forceSpawn || this._nextGoblinSpawnTimeLimit <= $gameParty.receptionistBattle_getCurrentTimeInSeconds()) {
		if(!this._goblins_distanceSlot[GOBLIN_DISTANCE_FARTHEST] && goblinCount < maxGoblinCount && this._goblins_spawned_count < this._goblins_spawned_max) {
			let enemyId = this.receptionistBattle_validGoblinId();
			let enemy = this.setup_receptionistBattle_goblin(enemyId);
			enemy.makeUniqueNames();
			enemy.setupEnemyPrefixEjaculationStockEffect();
			enemy.onBattleStart();
			enemy.midBattleSpawn_setupDreamX();
			SceneManager._scene._spriteset.addEnemy(enemy);

			BattleManager._logWindow.push('addText', TextManager.receptionistNewGoblin);
			AudioManager.playSe({name:'Move3', pan:0, pitch:100, volume:70});
			
			spawnedNewGoblin = true;
			this._goblins_spawned_count++;
			this._nextGoblinSpawnTimeLimit = this.receptionistBattle_nextGoblinSpawnTime();
			//actor.emoteReceptionistPose();
			actor.updateReceptionistBattleGoblinTachie();
		}
	}
	
	return spawnedNewGoblin;
};

Game_Troop.prototype.receptionistBattle_nextGoblinSpawnTime = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let currentTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
	let addedTime = 0;
	
	let goblinPassiveLevel = actor.reactionScore_enemyGoblinPassive() / 10;
	if(actor.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE)) {
		goblinPassiveLevel += 1;
	}
	
	if(!DEBUG_MODE) {
		addedTime = 99999;
	}
	else if(goblinPassiveLevel >= 5) {
		addedTime = Math.randomInt(220) + 100;
	}
	else if(goblinPassiveLevel >= 4) {
		addedTime = Math.randomInt(240) + 120;
	}
	else if(goblinPassiveLevel >= 3) {
		addedTime = Math.randomInt(280) + 160;
	}
	else if(goblinPassiveLevel >= 2) {
		addedTime = Math.randomInt(340) + 180;
	}
	else if(goblinPassiveLevel >= 1) {
		addedTime = Math.randomInt(400) + 200;
	}
	else {
		addedTime = Math.randomInt(600) + 200;
	}
	
	return currentTime + addedTime;
};

Game_Troop.prototype.onTurnEndSpecial_receptionistBattle = function(forceSpawn) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let deskVisitor = $gameTroop.receptionistBattle_visitorAtDesk();
	
	////////////
	//Pass time
	$gameParty.receptionBattle_advanceTimeBySeconds(15);
	actor._receptionist_turnsTillMentalPhase = Math.max(0, actor._receptionist_turnsTillMentalPhase - 1);
	
	///////////
	//Check Horny
	if(actor.isHorny && $gameParty.receptionistBattle_getCurrentTimeInSeconds() >= actor._hornyTimeLimit) {
		actor.removeState(STATE_HORNY_ID);
	}
	
	/////////
	//Spawn Visitor
	this.receptionistBattle_spawnVisitor(false);
	
	/////////
	// Spawn Goblin
	this.receptionistBattle_spawnGoblin(false);
	
	
	//Disable receptionist or go into mental/action phase
	let skipTurn = false;
	
	//Just Orgasm
	/*
	if(actor.justOrgasmed()) {
		skipTurn = true;
	}
	*/
	
	if(actor.isStateAffected(STATE_RECEPTIONIST_REST_ID)) {
		skipTurn = true;
	}
	
	//Greeting Visitor
	if(actor._receptionist_greetVisitor_gotResponse) {
		actor._receptionist_greetVisitor_waitingForResponse = false;
		actor._receptionist_greetVisitor_gotResponse = false;
	}
	
	if(actor._receptionist_greetVisitor_waitingForResponse) {
		skipTurn = true;
	}
	
	//On Phone Call
	if(actor._receptionist_checkingVisitingRoom_endingPhoneCall) {
		actor._receptionist_checkingVisitingRoom_startingPhoneCall = false;
		actor._receptionist_checkingVisitingRoom_endingPhoneCall = false;
	}
	
	if(actor._receptionist_checkingVisitingRoom_startingPhoneCall) {
		skipTurn = true;
	}
	
	//Process Papers
	if(actor._receptionist_currentlyProcessingPapers) {
		if(actor.customReq_receptionistBattle_continueProcessingPapers())
			skipTurn = true;
		else
			actor._receptionist_currentlyProcessingPapers = false;
	}
	
	if(deskVisitor) { 
		if(deskVisitor._fan_currentlyGettingRequestFulfilled) {
			skipTurn = true;
		}
		else if(deskVisitor._perv_currentlyGettingRequestFulfilled && !deskVisitor._perv_waitingForSecondRequestResponse) {
			skipTurn = true;
		}
		else if(!deskVisitor._perv_waitingForSecondRequestResponse &&
		(actor.receptionistBattle_isKissing() || actor.receptionistBattle_gettingBoobsRubbed() || actor.receptionistBattle_isGivingBlowjob() || actor.receptionistBattle_isGivingHandjob())) {
			skipTurn = true;
		}
	}
	
	
	
	if(!skipTurn) {
		actor.removeState(STATE_DISABLED_ID);
		if(actor._receptionist_turnsTillMentalPhase <= 0 || actor.justOrgasmed()) {
			actor.enterMentalPhase();
			actor._receptionist_turnsTillMentalPhase = RECEPTIONIST_MENTAL_PHASE_COOLDOWN;
		}
		else {
			actor.enterActionPhase();
		}
	}
	else if(skipTurn && (actor.receptionistBattle_isGivingBlowjob() || actor.receptionistBattle_isGivingHandjob())) {
		if(actor._receptionist_visitorSexSkillCooldown > 0) {
			actor._receptionist_visitorSexSkillCooldown--;
			actor.addState(STATE_DISABLED_ID);
		}
		else {
			let skillArray = [];
			if(actor.receptionistBattle_isGivingBlowjob() && actor.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) {
				skillArray.push(SKILL_KARRYN_BLOWJOB_POSESKILL_ID);
				skillArray.push(SKILL_KARRYN_BLOWJOB_POSESKILL_ID);
			}
			if(actor.receptionistBattle_isGivingHandjob() && actor.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) {
				skillArray.push(SKILL_KARRYN_HANDJOB_POSESKILL_ID);
			}
			
			if(skillArray.length > 0) {
				let skillId = skillArray[Math.randomInt(skillArray.length)];
				if(skillId === SKILL_KARRYN_BLOWJOB_POSESKILL_ID && actor.meetsSkillConditionsEval($dataSkills[SKILL_KARRYN_BLOWJOB_POSESKILL_ID], deskVisitor)) {
					actor.resetSexSkillConsUsage(SEXACT_BLOWJOB);
					actor.useAISkill(skillId, deskVisitor);
				}
				else if(skillId === SKILL_KARRYN_HANDJOB_POSESKILL_ID && actor.meetsSkillConditionsEval($dataSkills[SKILL_KARRYN_HANDJOB_POSESKILL_ID], deskVisitor)) {
					actor.resetSexSkillConsUsage(SEXACT_HANDJOB);
					actor.useAISkill(skillId, deskVisitor);
				}
				actor._receptionist_visitorSexSkillCooldown = RECEPTIONIST_SEX_SKILL_COOLDOWN;
				actor.addState(STATE_DISABLED_ID);
			}
			else {
				actor._receptionist_visitorSexSkillCooldown = RECEPTIONIST_SEX_SKILL_COOLDOWN;
				actor.addState(STATE_DISABLED_ID);
			}
		}
	}
	//skipping turn
	else if(skipTurn) {
		actor.addState(STATE_DISABLED_ID);
		
		//Greeting Visitor
		if(actor._receptionist_greetVisitor_waitingForResponse) {
			actor.receptionistBattle_greetVisitor_response();
		}
		
		//Processing Papers
		else if(actor._receptionist_currentlyProcessingPapers && !actor.justOrgasmed()) {
			actor.afterEval_receptionistBattle_continueProcessingPapers(true);
		}
		
		//On Phone
		else if(actor._receptionist_checkingVisitingRoom_startingPhoneCall) {
			actor.receptionistBattle_checkVisitingRoomStatus_response();
		}
	}
		
	actor.emoteReceptionistPose();
};

/////////////
////////////////
// Game Enemy
////////////////
///////////////

/////////
// Setup
/////////
Game_Enemy.prototype.setupForReceptionistBattle_visitor = function(enemyId, wanted) {
	this._visitor_number = $gameParty.getVisitorNumberOrderForNewVisitor();
	this._visitor_isStarter = false;
	this._visitor_isIdentified = false;
	this._visitor_isVisiting = true;
	this._visitor_isFan = false;
	this._visitor_isPervert = false;
	this._visitor_isAngry = false;
	this._visitor_isAngry_fromBadVisitingRoom = false;
	this._visitor_angryComplaintCooldown = 0;
	this._visitor_gotAngryCount = 0;
	this._visitor_spottedNaughtyAct = false;
	
	this._visitor_isGoblin = false;
	if(enemyId === ENEMY_ID_MALE_VISITOR_GOBLIN || enemyId === ENEMY_ID_MALE_VISITOR_PERV_GOBLIN) {
		this._visitor_isGoblin = true;
	}
	
	this._visitor_startingWritingPapers = false;
	this._visitor_finishedWritingPapers = false;
	this._visitor_handedOverPapers = false;
	
	this._visitor_status = STATE_VISITOR_STATUS_UNKNOWN_ID;
	this._visitor_location = STATE_VISITOR_LOCATION_SITTING_ID;
	this._visitor_assignedVisitingRoom = -1;
	
	this._visitor_pages = Math.randomInt(VISITOR_MAX_PAGES - VISITOR_MIN_PAGES) + VISITOR_MIN_PAGES;
	
	let minTime = VISITOR_BASE_MIN_TIME;
	let maxTime = VISITOR_BASE_MAX_TIME;
	if(Karryn.hasEdict(EDICT_REPAIR_VISITING_ROOM_C)) {
		minTime += 1;
		maxTime += 2;
	}
	if(Karryn.hasEdict(EDICT_REPAIR_VISITING_ROOM_D)) {
		minTime += 1;
		maxTime += 2;
	}
	this._visitor_time = Math.randomInt(maxTime - minTime + 1) + minTime;
	
	if(!wanted) {
		this._visitor_walkingSpeed = Math.round(this.enemy().dataVisitorWalkingSpeed - Math.randomInt(this.enemy().dataVisitorWalkingSpeed * 0.1) + Math.randomInt(this.enemy().dataVisitorWalkingSpeed * 0.1));
		this._visitor_writingSpeed = Math.round(this.enemy().dataVisitorWritingSpeed - Math.randomInt(this.enemy().dataVisitorWritingSpeed * 0.1) + Math.randomInt(this.enemy().dataVisitorWritingSpeed * 0.1));
		
		this._visitor_pervPromoteChance = this.enemy().dataVisitorPervPromoteChance;
		
		this._visitor_dissatisfactionMultipler = Math.round(this.enemy().dataVisitorDissatisfaction - Math.randomInt(this.enemy().dataVisitorDissatisfaction * 0.1) + Math.randomInt(this.enemy().dataVisitorDissatisfaction * 0.1));
		this._visitor_dissatisfactionMultipler *= 0.1;
		
		let dataVisitorTachieArray = this.enemy().dataVisitorTachie.slice(0);
		let ranNum = Math.randomInt(dataVisitorTachieArray.length);
		this._visitor_tachieNum = dataVisitorTachieArray[ranNum];
		if(this._visitor_tachieNum < 10) this._visitor_tachieNum = '' + '0' + this._visitor_tachieNum;
		
		
		if(this.enemy().dataVisitorAlwaysFan == 1) 
			this._visitor_isFan = true;
		else if(this.enemy().dataVisitorCanBeFan == 1) 
			this._visitor_canBeFan = true;
		else
			this._visitor_canBeFan = false;
		
		if(this.enemy().dataVisitorAlwaysPervert == 1) 
			this._visitor_isPervert = true;
		else if(this.enemy().dataVisitorCanBePervert == 1) 
			this._visitor_canBePervert = true;
		else
			this._visitor_canBePervert = false;
		
		if(this.enemy().dataVisitorNotVisiting == 1) 
			this._visitor_isVisiting = false;
		else
			this._visitor_isVisiting = true;
		
	}
	
	else if(wanted) {
		this._visitor_isVisiting = false;
		this._visitor_walkingSpeed = wanted._visitor_walkingSpeed;
		this._visitor_writingSpeed = wanted._visitor_writingSpeed;
		this._visitor_dissatisfactionMultipler = wanted._visitor_dissatisfactionMultipler;
		this._visitor_tachieNum = wanted._visitor_tachieNum;
		this._visitor_isFan = wanted._visitor_isFan;
		this._visitor_isPervert = wanted._visitor_isPervert;
		this._visitor_pervPromoteChance = wanted._visitor_pervPromoteChance;
	}
	
	this._visitor_finishWalkingToDeskTime = -1;
	this._visitor_finishWalkingToSeatTime = -1;
	this._visitor_finishWalkingToRoomTime = -1;
	this._visitor_finishWritingPapersTime = -1;
	
	if(this._visitor_canBeFan) {
		let chanceToBeFan = $gameParty._receptionistFame;
		if($gameParty._receptionistFame < 15) 
			chanceToBeFan += $gameParty._receptionistFame;
		else
			chanceToBeFan += 15;
		if(Math.randomInt(100) < chanceToBeFan)
			this._visitor_isFan = true;
	}
	
	if(this._visitor_canBePervert && this.isVisitorMaleType) {
		let chanceToBePervert = $gameParty._receptionistNotoriety;
		if($gameParty._receptionistNotoriety < 15) 
			chanceToBePervert += $gameParty._receptionistNotoriety;
		else
			chanceToBePervert += 15;
		if(Math.randomInt(100) < chanceToBePervert)
			this._visitor_isPervert = true;
	}
	
	
	this.setupForReceptionistBattle_fan();
	this.setupForReceptionistBattle_pervert();

};	

Game_Enemy.prototype.setupForReceptionistBattle_fan = function() {
	this._fan_waitingForRequestResponse = false;
	this._fan_currentlyGettingRequestFulfilled = false;
	this._fan_requestRejected = false;
	this._fan_requestWasFulfilled = false;
	this._fan_turnsUntilRequestFinished = 0;
	this._fan_skillUseInterval = 0;
	this._fan_skillCooldown = 0;	
	this._fan_skillUseInterval = 1;
	this._fan_turnsUntilRequestFinished = 2 + Math.randomInt(3);
	if(!this._visitor_isVisiting) this._fan_turnsUntilRequestFinished += Math.randomInt(3);
};	

Game_Enemy.prototype.setupForReceptionistBattle_pervert = function() {
	this._visitor_requestID = 0;
	this._perv_skillUseInterval = 1;
	this._perv_skillCooldown = 0;
	this._perv_turnsUntilRequestFinished = 3 + Math.randomInt(3);
	this._perv_queuedJoinSkill = 0;
	
	this._perv_waitingForRequestResponse = false;
	this._perv_currentlyGettingRequestFulfilled = false;
	this._perv_requestRejected = false;
	this._perv_requestWasFulfilled = false;
	
	this._perv_secondRequestID = 0;
	this._perv_turnsUntilSecondRequest = -1;
	this._perv_hasSecondRequest = false;
	this._perv_waitingForSecondRequestResponse = false;
	this._perv_secondRequestRejected = false;
	this._perv_secondRequestAccepted = false;
	
	this._perv_gettingHJ = false;
	this._perv_gettingBJ = false;
	this._perv_kissing = false;
	this._perv_touchingBoobs = false;
	
	let desire = Math.min(50, Math.randomInt($gameParty._receptionistNotoriety * 5));
	if(desire === 50) {
		this._visitor_requestID = VISITOR_REQUEST_BLOWJOB_ID;
	}
	else if(desire >= 30) {
		this._visitor_requestID = VISITOR_REQUEST_HANDJOB_ID;
	}
	else if(desire >= 15) {
		if(this._visitor_isGoblin)
			this._visitor_requestID = VISITOR_REQUEST_BOOBS_SHAKE_ID;
		else
			this._visitor_requestID = VISITOR_REQUEST_KISS_ID;
	}
	else {
		this._visitor_requestID = VISITOR_REQUEST_BOOBS_SHAKE_ID;
	}
	
	let chanceToRequestHigher = Math.randomInt($gameParty._receptionistNotoriety + $gameParty._receptionistFame);
	if(this._visitor_isFan) chanceToRequestHigher += Math.randomInt($gameParty._receptionistFame * 0.5)
	if(this._visitor_isGoblin) chanceToRequestHigher += Math.randomInt($gameParty._receptionistNotoriety * 0.5)
		
	//debugging: test for 2nd request or force certain request
	//this._visitor_requestID = VISITOR_REQUEST_BLOWJOB_ID; //testing
	//chanceToRequestHigher = 100;
	
	if(chanceToRequestHigher > $gameParty._receptionistNotoriety * 0.8) {
		this._perv_hasSecondRequest = true;
	}
	
	let requestArray = [];
		
	if(this._visitor_requestID === VISITOR_REQUEST_BOOBS_SHAKE_ID) {
		requestArray = [VISITOR_REQUEST_KISS_ID, VISITOR_REQUEST_HANDJOB_ID];
		if(this._visitor_isFan) requestArray.push(VISITOR_REQUEST_KISS_ID)
	}
	else if(this._visitor_requestID === VISITOR_REQUEST_KISS_ID) {
		requestArray = [VISITOR_REQUEST_BOOBS_SHAKE_ID, VISITOR_REQUEST_HANDJOB_ID];
		if(this._visitor_isFan) requestArray.push(VISITOR_REQUEST_HANDJOB_ID)
	}
	else if(this._visitor_requestID === VISITOR_REQUEST_HANDJOB_ID) {
		if(this._visitor_isGoblin)
			requestArray = [VISITOR_REQUEST_BOOBS_SHAKE_ID, VISITOR_REQUEST_BLOWJOB_ID, VISITOR_REQUEST_BLOWJOB_ID];
		else
			requestArray = [VISITOR_REQUEST_KISS_ID, VISITOR_REQUEST_BOOBS_SHAKE_ID, VISITOR_REQUEST_BLOWJOB_ID, VISITOR_REQUEST_BLOWJOB_ID];
		if(this._visitor_isFan) requestArray.push(VISITOR_REQUEST_BLOWJOB_ID)
	}
	else if(this._visitor_requestID === VISITOR_REQUEST_BLOWJOB_ID) {
		requestArray = [VISITOR_REQUEST_HANDJOB_ID];
	}

	this._perv_secondRequestID = requestArray[Math.randomInt(requestArray.length)];
	this._perv_turnsUntilSecondRequest = Math.round(this._perv_turnsUntilRequestFinished / 2);
	
};

Game_Enemy.prototype.name_receptionistBattle = function() {
	if(this.isGoblinType) return '';
	if(this._visitor_isIdentified || this.isWanted) {
		let name = "";
		
		if(this._visitor_isVisiting) {
			if(TextManager.isEnglish) {
				name += this._randomEnemyName + ' (' + this.getEnemyTypeName() + ' #' + this._visitor_number + ')';
			}
			else if(TextManager.isJapanese) {
				name += this.getEnemyTypeName() + '#' + this._visitor_number + ' ' + this._randomEnemyName;
			}
		}
		else {
			if(TextManager.isEnglish) {
				name += this._randomEnemyName + ' (' + this.getEnemyTypeName() + ')';
			}
			else if(TextManager.isJapanese) {
				name += this.getEnemyTypeName() + ' ' + this._randomEnemyName;
			}
		}
		
		return name;
	}
	else {
		return this.displayName_receptionistBattle();
	}
};

Game_Enemy.prototype.displayName_receptionistBattle = function() {
	let name = '';
	
	if(this._visitor_isIdentified || this.isWanted) {
		
		if(this._visitor_isVisiting) {
			if(TextManager.isEnglish) {
				name += this._randomEnemyName + ' (' + this.getEnemyTypeName() + ' #' + this._visitor_number + ')';
			}
			else if(TextManager.isJapanese) {
				name += this.getEnemyTypeName() + '#' + this._visitor_number + ' ' + this._randomEnemyName;
			}
		}
		else {
			if(TextManager.isEnglish) {
				name += this._randomEnemyName;
			}
			else if(TextManager.isJapanese) {
				name += this._randomEnemyName;
			}
		}
	}
	else {
		name = this.getEnemyTypeName();
		if(TextManager.isEnglish) {
			name += ' #' + this._visitor_number;
		}
		else {
			name += ' #' + this._visitor_number;
		}
	}
	
	return name;
};

Game_Enemy.prototype.battlerName_receptionistBattle = function() {
	if(this.isWanted) {
		if(this.isVisitorMaleType && !this._visitor_isVisiting && this.visitorLocationIsDesk() && this._visitor_pervPromoteChance >= 100) {
			let name = 'visitorm_99_';
			let enemyCock = this.enemyCock();
			if(enemyCock.includes('goblin')) {
				if(enemyCock.includes('dark'))
					name += 'goblin_dark';
				else
					name += 'goblin_normal';
			} 
			else {
				if(enemyCock.includes('pale'))
					name += 'human_pale';
				else if(enemyCock.includes('black'))
					name += 'human_black';
				else
					name += 'human_normal';
			}
			return name;
		}
		else {
			return this._wantedBattlerName;
		}
	}
	else {
		return this.enemyType() + '_' + this.battlerNameNum();
	}
};

Game_Enemy.prototype.bonusPpt_receptionistBattle = function() {
	let rate = 1;
	
	if(Karryn.isInReceptionistPose()) {
		if(this.isGoblinType) {
			rate = 0.4;
			
			if(this.isAroused()) {
				if(this.isUsingBodySlotPenis(CLIT_ID))
					rate *= 0.8;
				else
					rate *= 0.2;
			}
			
			if(this._goblinDistanceSlot === GOBLIN_DISTANCE_FAR) {
				rate *= 0.65;
			}
			else if(this._goblinDistanceSlot === GOBLIN_DISTANCE_FARTHEST) {
				rate *= 0.4;
			}
			else if(this._goblinDistanceSlot === GOBLIN_DISTANCE_OFFSCREEN_FAR || this._goblinDistanceSlot === GOBLIN_DISTANCE_OFFSCREEN_CLOSE) {
				if(this.isAroused()) {
					rate = 0;
				}
				else {
					rate *= 0.2;
				}
			}
		}
		else if(this.isVisitorMaleType) {
			if(this._visitor_isPervert && this._visitor_isIdentified && this.visitorLocationIsDesk()) {
				rate = 0.33;
			}
			else {
				rate = 0;
			}
		}
		else rate = 0;
	}
	
	return rate;
};

Game_Enemy.prototype.performCollapse_receptionistBattle = function() {
	if(this.isGoblinType && !this._goblinPerformedCollapseAlready) {
		this._goblinPerformedCollapseAlready = true;
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		$gameTroop._goblins_distanceSlot[this._goblinDistanceSlot] = false;
		actor.emoteReceptionistPose();
		BattleManager._logWindow.push('addText', TextManager.receptionistGoblinDefeated.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:120, volume:90});
	}
	else if(this.isVisitorMaleType && !this._visitorPerformedCollapseAlready) {
		this._visitorPerformedCollapseAlready = true;
		this._perv_requestWasFulfilled = true;
		this._perv_currentlyGettingRequestFulfilled = false;
		this._perv_kissing = false;
		this._perv_touchingBoobs = false;
		this._perv_gettingBJ = false;
		this._perv_gettingHJ = false;

		BattleManager.pullOutEnemy(this);
		BattleManager.actionRemLines(ENEMY_LINE_PERV_FINISHED);
		BattleManager.playNormalBgm();
		
		if(this._visitor_isPervert) {
			this.receptionistBattle_action_pervLeaves();
		}
		else {
			this.receptionistBattle_action_fanLeaves();
		}
		
	}
};

Game_Enemy.prototype.checkForOrgasm_receptionistBattle = function() {
	let canOrgasm = true;
	
	if(this.isGoblinType) {
		if(this._goblinDistanceSlot !== GOBLIN_DISTANCE_MEDIUM && this._goblinDistanceSlot !== GOBLIN_DISTANCE_CLOSE) {
			canOrgasm = false;
		}
	}
	else if(this.isVisitorFemaleType) {
		canOrgasm = false;
	}
	else if(this.isVisitorMaleType) {
		if(!this._visitor_isPervert || !this.visitorLocationIsDesk() || !this._visitor_isIdentified) 
			canOrgasm = false;
	}
	
	return canOrgasm;
};

//////
// Status & Location
////////

Game_Enemy.prototype.visitorStatusIsUnknown = function() { return this._visitor_status === STATE_VISITOR_STATUS_UNKNOWN_ID; };
Game_Enemy.prototype.visitorStatusIsWriting = function() { return this._visitor_status === STATE_VISITOR_STATUS_WRITING_ID; };
Game_Enemy.prototype.visitorStatusIsPaper = function() { return this._visitor_status === STATE_VISITOR_STATUS_PAPER_ID; };
Game_Enemy.prototype.visitorStatusIsTime = function() { return this._visitor_status === STATE_VISITOR_STATUS_TIME_ID; };

Game_Enemy.prototype.visitorLocationIsSitting = function() { return this._visitor_location === STATE_VISITOR_LOCATION_SITTING_ID; };
Game_Enemy.prototype.visitorLocationIsMoving = function() { return this._visitor_location === STATE_VISITOR_LOCATION_MOVING_ID; };
Game_Enemy.prototype.visitorLocationIsDesk = function() { return this._visitor_location === STATE_VISITOR_LOCATION_DESK_ID; };
Game_Enemy.prototype.visitorLocationIsLine = function() { return this._visitor_location === STATE_VISITOR_LOCATION_LINE_ID; };

Game_Enemy.prototype.setVisitorStatusToUnknown = function() { 
	this._visitor_status = STATE_VISITOR_STATUS_UNKNOWN_ID; 
	
	this.removeState(STATE_VISITOR_STATUS_UNKNOWN_ID);
	this.removeState(STATE_VISITOR_STATUS_WRITING_ID);
	this.removeState(STATE_VISITOR_STATUS_PAPER_ID);
	this.removeState(STATE_VISITOR_STATUS_TIME_ID);
	
	this.addState(STATE_VISITOR_STATUS_UNKNOWN_ID);
};
Game_Enemy.prototype.setVisitorStatusToWriting = function() { 
	this._visitor_status = STATE_VISITOR_STATUS_WRITING_ID; 
	
	this.removeState(STATE_VISITOR_STATUS_UNKNOWN_ID);
	this.removeState(STATE_VISITOR_STATUS_WRITING_ID);
	this.removeState(STATE_VISITOR_STATUS_PAPER_ID);
	this.removeState(STATE_VISITOR_STATUS_TIME_ID);
	
	this.addState(STATE_VISITOR_STATUS_WRITING_ID);
};
Game_Enemy.prototype.setVisitorStatusToPaper = function() { 
	this._visitor_status = STATE_VISITOR_STATUS_PAPER_ID; 
	
	this.removeState(STATE_VISITOR_STATUS_UNKNOWN_ID);
	this.removeState(STATE_VISITOR_STATUS_WRITING_ID);
	this.removeState(STATE_VISITOR_STATUS_PAPER_ID);
	this.removeState(STATE_VISITOR_STATUS_TIME_ID);
	
	this.addState(STATE_VISITOR_STATUS_PAPER_ID);
	this.setStateCounter(STATE_VISITOR_STATUS_PAPER_ID, this._visitor_pages);
};
Game_Enemy.prototype.setVisitorStatusToTime = function() { 
	this._visitor_status = STATE_VISITOR_STATUS_TIME_ID; 
	
	this.removeState(STATE_VISITOR_STATUS_UNKNOWN_ID);
	this.removeState(STATE_VISITOR_STATUS_WRITING_ID);
	this.removeState(STATE_VISITOR_STATUS_PAPER_ID);
	this.removeState(STATE_VISITOR_STATUS_TIME_ID);
	
	this.addState(STATE_VISITOR_STATUS_TIME_ID);
	this.setStateCounter(STATE_VISITOR_STATUS_TIME_ID, this._visitor_time);
};

Game_Enemy.prototype.setVisitorLocationToSitting = function() { 
	this._visitor_location = STATE_VISITOR_LOCATION_SITTING_ID; 
	
	this.removeState(STATE_VISITOR_LOCATION_MOVING_ID);
	this.removeState(STATE_VISITOR_LOCATION_DESK_ID);
	this.removeState(STATE_VISITOR_LOCATION_LINE_ID);
	
	this.addState(STATE_VISITOR_LOCATION_SITTING_ID);
};
Game_Enemy.prototype.setVisitorLocationToMoving = function() { 
	this._visitor_location = STATE_VISITOR_LOCATION_MOVING_ID; 
	
	this.removeState(STATE_VISITOR_LOCATION_SITTING_ID);
	this.removeState(STATE_VISITOR_LOCATION_DESK_ID);
	this.removeState(STATE_VISITOR_LOCATION_LINE_ID);
	
	this.addState(STATE_VISITOR_LOCATION_MOVING_ID);
};
Game_Enemy.prototype.setVisitorLocationToDesk = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	this._visitor_location = STATE_VISITOR_LOCATION_DESK_ID; 
	
	this.removeState(STATE_VISITOR_LOCATION_SITTING_ID);
	this.removeState(STATE_VISITOR_LOCATION_MOVING_ID);
	this.removeState(STATE_VISITOR_LOCATION_LINE_ID);
	
	this.addState(STATE_VISITOR_LOCATION_DESK_ID);
	
	AudioManager.playSe({name:'foot_0', pan:0, pitch:90, volume:100});
	actor.receptionistBattle_makeSexualNoise(0, true);
};
Game_Enemy.prototype.setVisitorLocationToLine = function() { 
	this._visitor_location = STATE_VISITOR_LOCATION_LINE_ID; 
	
	this.removeState(STATE_VISITOR_LOCATION_SITTING_ID);
	this.removeState(STATE_VISITOR_LOCATION_MOVING_ID);
	this.removeState(STATE_VISITOR_LOCATION_DESK_ID);
	
	this.addState(STATE_VISITOR_LOCATION_LINE_ID);
};

Game_Enemy.prototype.setVisitorFinishWalkingToDeskTime = function(time) { 
	this._visitor_finishWalkingToDeskTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
	this._visitor_finishWalkingToDeskTime += time * this._visitor_walkingSpeed; 
	
	this._visitor_finishWalkingToSeatTime = -1;
	this._visitor_finishWalkingToRoomTime = -1;
};
Game_Enemy.prototype.setVisitorFinishWalkingToSeatTime = function(time) { 
	this._visitor_finishWalkingToSeatTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
	this._visitor_finishWalkingToSeatTime += time * this._visitor_walkingSpeed; 
	
	this._visitor_finishWalkingToDeskTime = -1;
	this._visitor_finishWalkingToRoomTime = -1;
};
Game_Enemy.prototype.setVisitorFinishWalkingToVisitingRoomTime = function(time) { 
	this._visitor_finishWalkingToRoomTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
	this._visitor_finishWalkingToRoomTime += time * this._visitor_walkingSpeed; 
	
	this._visitor_finishWalkingToDeskTime = -1;
	this._visitor_finishWalkingToSeatTime = -1;
};
Game_Enemy.prototype.setVisitorFinishWritingPapersTime = function(pages) { 
	this._visitor_finishWritingPapersTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
	this._visitor_finishWritingPapersTime += VISITOR_PAGES_BASE_TIME * this._visitor_writingSpeed; 
	this._visitor_finishWritingPapersTime += pages * VISITOR_PAGES_EACH_TIME * this._visitor_writingSpeed; 
};

////////
// Valid Target

Game_Enemy.prototype.isValidTargetForReceptionistBattle_standingInFrontOfDesk = function() { 
	return this.visitorLocationIsDesk();
};
Game_Enemy.prototype.isValidTargetForReceptionistBattle_beginProcessingPapers = function() { 
	return this.visitorStatusIsPaper();
};
Game_Enemy.prototype.isValidTargetForReceptionistBattle_assignVisitingRoom = function() { 
	return this.visitorStatusIsTime() && this._visitor_assignedVisitingRoom === -1 && !this._visitor_isAngry;
};
Game_Enemy.prototype.isValidTargetForReceptionistBattle_callUnknownVisitor = function() { 
	return this.visitorStatusIsUnknown() && this.visitorLocationIsSitting() && !this._visitor_isAngry;
};

Game_Enemy.prototype.isValidTargetForReceptionistBattle_kickAway = function() { 
	if(!this.isGoblinType) return false;
	if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE] && !$gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE].isInAPose()) {
		return this._goblinDistanceSlot === GOBLIN_DISTANCE_CLOSE;
	}
	else if($gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_MEDIUM]) {
		return this._goblinDistanceSlot === GOBLIN_DISTANCE_MEDIUM;
	}
	else return false;
};


/////////////
// Waitress Battle AI
///////////

Game_Enemy.prototype.enemyBattleAIReceptionist = function(target) {
	// Goblin
	if(this.isGoblinType) {
		this.enemyBattleAIReceptionist_goblin(target);
	}
	// Visitor
	else {
		this.enemyBattleAIReceptionist_visitor(target);
	}
};

Game_Enemy.prototype.enemyBattleAIReceptionist_visitor = function(target) {
	//Moving
	if(this.visitorLocationIsMoving()) {
		//Moving To Seat
		if(this._visitor_finishWalkingToSeatTime !== -1) {
			if($gameParty.receptionistBattle_getCurrentTimeInSeconds() >= this._visitor_finishWalkingToSeatTime) {
				this.setVisitorLocationToSitting();
				this._visitor_finishWalkingToSeatTime = -1;
			}
		}
		//Moving To Desk
		else if(this._visitor_finishWalkingToDeskTime !== -1) {
			if($gameParty.receptionistBattle_getCurrentTimeInSeconds() >= this._visitor_finishWalkingToDeskTime) {
				//Add to Queue
				this.receptionistBattle_joinDeskQueue();
				this._visitor_finishWalkingToDeskTime = -1;
			}
		}
		//Moving To Visiting Room
		else if(this._visitor_finishWalkingToRoomTime !== -1) {
			if($gameParty.receptionistBattle_getCurrentTimeInSeconds() >= this._visitor_finishWalkingToRoomTime) {

				//Can go in
				if($gameParty.receptionistBattle_getCurrentTimeInSeconds() + VISITING_ROOM_TIME_BUFFER >= $gameParty._receptionistBattle_visitingRoomTime[this._visitor_assignedVisitingRoom]) {

					//leave battle satisfied
					this.receptionistBattle_action_enterVisitingRoom();
				}
				//Wrong time
				else {
					//come back angry
					this.setVisitorLocationToMoving();
					this.setVisitorFinishWalkingToDeskTime(VISITOR_DESK_DISTANCE);
					this._visitor_isAngry = true;
					this._visitor_isAngry_fromBadVisitingRoom = true;
					this._visitor_gotAngryCount++;
					let dissatisfactionFromEdicts = $gameParty.receptionistBattle_dissatisfactionFromEdictsMultipler();
					$gameParty.increaseReceptionistVisitorSatisfaction_General(RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_WRONG_VISITING_ROOM * this._visitor_dissatisfactionMultipler * dissatisfactionFromEdicts);
				}
				this._visitor_finishWalkingToRoomTime = -1;
			}
		}
	}
	
	//Sitting
	if(this.visitorLocationIsSitting()) {
		if(this.visitorStatusIsWriting()) {
			if(!this._visitor_startingWritingPapers && !this._visitor_finishedWritingPapers) {
				this._visitor_startingWritingPapers = true;
				this.setVisitorFinishWritingPapersTime(this._visitor_pages);
				return;
			}
			else if(!this._visitor_finishedWritingPapers && $gameParty.receptionistBattle_getCurrentTimeInSeconds() >= this._visitor_finishWritingPapersTime) {
				this.setVisitorLocationToMoving();
				this._visitor_finishedWritingPapers = true;
				this.setVisitorFinishWalkingToDeskTime(VISITOR_DESK_DISTANCE);
				return;
			}
		}
		else if(!this.visitorStatusIsUnknown() && !this.visitorStatusIsPaper() && !this.visitorStatusIsTime()) {
			if(this._visitor_isPervert) {
				this.receptionistBattle_action_pervLeaves();
			}
			else if(this._visitor_isFan) {
				this.receptionistBattle_action_fanLeaves();
			}
			else {
				this.receptionistBattle_action_buggedLeave();
			}
		}
		
	
	}
	
	//At Desk
	if(this.visitorLocationIsDesk()) {
		//Angry
		if(this._visitor_isAngry) {
			this.receptionistBattle_action_angryCompaint();
		}
		//Fan Request
		else if(this._fan_currentlyGettingRequestFulfilled) {
			let requestId = this._visitor_requestID;
			if(this._fan_turnsUntilRequestFinished === 0) {
				this._fan_requestWasFulfilled = true;
				this._fan_currentlyGettingRequestFulfilled = false;
				$gameParty.addToVisitorFanWanted(this);
				if(requestId === VISITOR_REQUEST_HAND_SHAKE_ID) {
					BattleManager.actionRemLines(ENEMY_LINE_FAN_HANDSHAKE_FINISHED);
					$gameParty.increaseReceptionistVisitorSatisfaction_General(RECEPTIONIST_GENERAL_SATISFACTION_GAIN_FROM_FAN_REQUEST_FULFILLED);
					$gameParty.increaseReceptionistVisitorSatisfaction_Fan(RECEPTIONIST_FAN_SATISFACTION_GAIN_FROM_REQUEST_FULFILLED);
					$gameParty.addReceptionistHandshakeTips();
					target.gainCharmExp(12, target.level);
					
					if(this._visitor_isVisiting) {
						target.receptionistBattle_giveVisitorTheirPapers(this);
					}
					else {
						this.receptionistBattle_action_fanLeaves();
					}
				}
			}
			else {
				if(this._fan_skillCooldown === 0) {
					
					if(requestId === VISITOR_REQUEST_HAND_SHAKE_ID) {
						this.useAISkill(SKILL_VISITOR_HANDSHAKE_ID, target);
					}
					
					this._fan_skillCooldown = this._fan_skillUseInterval;
				}
				else {
					this._fan_skillCooldown--;
				}
				
				
				this._fan_turnsUntilRequestFinished--;
			}
		}
		//Perv Request
		else if(this._perv_currentlyGettingRequestFulfilled) {
			let requestId = this._visitor_requestID;

			if(this._perv_turnsUntilRequestFinished <= 0 || !this.hasEjaculationStock()) {
				this._perv_requestWasFulfilled = true;
				this._perv_currentlyGettingRequestFulfilled = false;
				this._perv_kissing = false;
				this._perv_touchingBoobs = false;
				this._perv_gettingBJ = false;
				this._perv_gettingHJ = false;
	
				BattleManager.pullOutEnemy(this);
				BattleManager.actionRemLines(ENEMY_LINE_PERV_FINISHED);
				BattleManager.playNormalBgm();
				
				$gameParty.increaseReceptionistVisitorSatisfaction_Pervert(RECEPTIONIST_PERV_SATISFACTION_GAIN_FROM_REQUEST_FULFILLED);
				if(this._perv_secondRequestAccepted) {
					$gameParty.increaseReceptionistVisitorSatisfaction_Pervert(RECEPTIONIST_PERV_SATISFACTION_GAIN_FROM_SECOND_REQUEST_FULFILLED);
				}
				

				if(this._visitor_isVisiting) {
					target.receptionistBattle_giveVisitorTheirPapers(this);
				}
				else {
					this.receptionistBattle_action_pervLeaves();
				}
				
			}
			else if(this._perv_queuedJoinSkill !== 0) {
				this.useAISkill(this._perv_queuedJoinSkill, target);
				this._perv_queuedJoinSkill = 0;
				this._perv_skillCooldown = this._perv_skillUseInterval;
			}
			else if(this._perv_hasSecondRequest && this._perv_turnsUntilSecondRequest === 0 && !this._perv_waitingForSecondRequestResponse && !this._perv_secondRequestRejected && !this._perv_secondRequestAccepted) {
				this._perv_waitingForSecondRequestResponse = true;
				
				BattleManager.playEnemyVoice_SideJob(this);
				
				if(this._perv_secondRequestID === VISITOR_REQUEST_BOOBS_SHAKE_ID) {
					BattleManager.actionRemLines(ENEMY_LINE_PERV_SECOND_BOOBSHAKE);
				}
				else if(this._perv_secondRequestID === VISITOR_REQUEST_KISS_ID) {
					BattleManager.actionRemLines(ENEMY_LINE_PERV_SECOND_KISS);
				}
				else if(this._perv_secondRequestID === VISITOR_REQUEST_HANDJOB_ID) {
					BattleManager.actionRemLines(ENEMY_LINE_PERV_SECOND_HANDJOB);
				}
				else if(this._perv_secondRequestID === VISITOR_REQUEST_BLOWJOB_ID) {
					BattleManager.actionRemLines(ENEMY_LINE_PERV_SECOND_BLOWJOB);
				}
			}
			else {
				if(this._perv_skillCooldown <= 0) {
					let skillArray = [];
					
					if(this._perv_gettingBJ) {
						skillArray = [SKILL_ENEMY_POSESKILL_MOUTH_ID];
					}
					else {
						if(this._perv_gettingHJ) {
							skillArray.push(SKILL_ENEMY_POSESKILL_LEFTHAND_ID);
							skillArray.push(SKILL_ENEMY_POSESKILL_LEFTHAND_ID);
						}
						if(this._perv_kissing) {
							skillArray.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
						}
						if(this._perv_touchingBoobs) {
							skillArray.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_AREA_ID);
						}
					}
					
					this.useAISkill(skillArray[Math.randomInt(skillArray.length)], target);
					
					this._perv_skillCooldown = this._perv_skillUseInterval;
					if(this.isHorny && Math.random() < 0.33) this._perv_skillCooldown--;
				}
				else {
					this._perv_skillCooldown--;
				}
				
				if(!this._perv_gettingHJ && !this._perv_gettingBJ)
					this._perv_turnsUntilRequestFinished--;
				
				if(this._perv_hasSecondRequest && this._perv_turnsUntilSecondRequest > 0)
					this._perv_turnsUntilSecondRequest--;
			}
			
		}
		//Visitor wants to hand over papers
		else if(this._visitor_finishedWritingPapers && this.visitorStatusIsWriting()) {
			if($gameTroop._deskQueue[0]._visitor_number === this._visitor_number) {
				BattleManager._logWindow.push('addText', TextManager.receptionistVisitorWantsToHandOverPaper.format(this.displayName()));
			}
		}
		
	}
	
	//On Desk
	if(this.visitorLocationIsLine()) {
		//Angry
		if(this._visitor_isAngry) {
			this.receptionistBattle_action_angryCompaint();
		}
	}
};

Game_Enemy.prototype.enemyBattleAIReceptionist_goblin = function(target) {
	let distanceSlot = this._goblinDistanceSlot;
	let isHorny = this.isHorny;
	let isErect = this.isErect;
	let isShooed = this.isStateAffected(STATE_RECEPTIONIST_SHOOED_ID);
	let isKicked = this.isStateAffected(STATE_RECEPTIONIST_KICKED_ID);
	let targetPussyNotInUse = !target.isBodySlotPenis(PUSSY_ID) && !target.isBodySlotTongue(PUSSY_ID);
	let targetAnalNotInUse = !target.isBodySlotPenis(ANAL_ID);
	let goblinPassiveLevel = target.reactionScore_enemyGoblinPassive() / 10;
	let actionCooldownIfSuccessful = 1;
	let skillArray = [];
	
	

	let receptionistIsOnDesk = target.receptionistBattle_isLayingOnDesk();
	let receptionistIsFrontDistracted = target.receptionistBattle_isKissing() || target.receptionistBattle_gettingBoobsRubbed() || target.receptionistBattle_isGivingBlowjob() || target.receptionistBattle_isGivingHandjob();
	//on desk when giving head, or when orgasm
	
	if(distanceSlot === GOBLIN_DISTANCE_CLOSE) {
		if(this._goblinActionCooldown > 0) {
			this._goblinActionCooldown--;
			return;
		}
			
		let chanceToReduceActionCooldownIfSuccessful = 0;	
		if(Karryn.hasEdict(EDICT_BAIT_GOBLINS))
			chanceToReduceActionCooldownIfSuccessful += 0.25;
		if(this.isHorny) 
			chanceToReduceActionCooldownIfSuccessful += 0.25;
		if(target.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE))
			chanceToReduceActionCooldownIfSuccessful += 0.25;
		
		if(Math.random() < chanceToReduceActionCooldownIfSuccessful)
			actionCooldownIfSuccessful--;
			
		//Sexual
		if(this.isUsingBodySlotPenis(PUSSY_ID) || this.isUsingBodySlotPenis(CLIT_ID) || this.isUsingBodySlotPenis(ANAL_ID)) {
			skillArray = this.getPoseSkills().slice(0);
			if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
				skillArray.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
			}
		}
		else {
			if(targetPussyNotInUse) {
				skillArray.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_CUNNI_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_CUNNI_ID);
			}
			if(targetAnalNotInUse) {
				if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
					skillArray.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
					if(receptionistIsOnDesk) {
						skillArray.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
					}
				}
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_ANAL_ID);
				skillArray.push(SKILL_ENEMY_POSEJOIN_RECEPTIONIST_ANAL_ID);
				skillArray.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
			}
			
			if(!this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID],target) && !this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID],target)) {
				skillArray.push(SKILL_ENEMY_TALK_SELECTOR_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_TALK_SELECTOR_BUTT_ID);
			}
			
			skillArray.push(SKILL_ENEMY_CLOTHES_PULL_ID);
			skillArray.push(SKILL_ENEMY_CLOTHES_PULL_ID);
		}

	}
	else if(distanceSlot === GOBLIN_DISTANCE_MEDIUM && $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE]) {
		skillArray.push(SKILL_ENEMY_CLOTHES_PULL_ID);
		if(targetPussyNotInUse) {
			if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
				skillArray.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
			}
			skillArray.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
			skillArray.push(SKILL_ENEMY_STARE_SELECTOR_PUSSY_ID);
		}
		if(targetAnalNotInUse) {
			skillArray.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
			skillArray.push(SKILL_ENEMY_STARE_SELECTOR_BUTT_ID);
		}
		
	}
	else {
		let chanceToMoveForward = 5;
		let chanceToMoveBackward = 10;
		
		//Forward chance
		if(isShooed)
			chanceToMoveForward -= 35;
		if(isKicked)
			chanceToMoveForward -= 99;
		
		if(isHorny)
			chanceToMoveForward += 10;
		if(isErect)
			chanceToMoveForward += 10;
		if(target.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE))
			chanceToMoveForward += 10;
		
		chanceToMoveForward += goblinPassiveLevel * 5;
		
		if(target.receptionistBattle_isHavingSexBehind() || receptionistIsFrontDistracted) {
			chanceToMoveForward *= 5;
		}
		else if(target._receptionist_checkingVisitingRoom_startingPhoneCall || target._receptionist_currentlyProcessingPapers || target._receptionist_greetVisitor_waitingForResponse) {
			chanceToMoveForward *= 4;
		}
		else if(target.isHorny) {
			chanceToMoveForward *= 2;
		}
		
		//Backward chance
		if(isShooed)
			chanceToMoveBackward += 35;
		if(isKicked)
			chanceToMoveBackward += 55;
		
		if(isHorny)
			chanceToMoveBackward -= 15;
		if(isErect)
			chanceToMoveBackward -= 15;
		
		chanceToMoveBackward -= goblinPassiveLevel * 5;
		
		//Zero chance
		if($gameTroop._goblins_distanceSlot[distanceSlot + 1]) {
			chanceToMoveForward = 0;
		}

		if(distanceSlot === GOBLIN_DISTANCE_OFFSCREEN_FAR) {
			chanceToMoveBackward = 0;
		}
		else if($gameTroop._goblins_distanceSlot[distanceSlot - 1]) {
			chanceToMoveBackward = 0;
		}
		
		//Goblin move forward
		if(Math.randomInt(100) < chanceToMoveForward) {
			$gameTroop._goblins_distanceSlot[distanceSlot] = false;
			$gameTroop._goblins_distanceSlot[distanceSlot + 1] = this;
			this._goblinDistanceSlot = distanceSlot + 1;
			target.updateReceptionistBattleGoblinTachie();
		}
		//Goblin move backward
		else if(Math.randomInt(100) < chanceToMoveBackward) {
			$gameTroop._goblins_distanceSlot[distanceSlot] = false;
			$gameTroop._goblins_distanceSlot[distanceSlot - 1] = this;
			this._goblinDistanceSlot = distanceSlot - 1;
			target.updateReceptionistBattleGoblinTachie();
		}
		//Goblin doesn't move
		else {
			let chanceToStare = 15;
			
			if(isHorny)
				chanceToStare += 15;
			if(isErect)
				chanceToStare += 15;
			if(target.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE))
				chanceToStare += 15;
			
			chanceToStare += goblinPassiveLevel * 5;
			
			if(this._goblinDistanceSlot === GOBLIN_DISTANCE_OFFSCREEN_CLOSE || this._goblinDistanceSlot === GOBLIN_DISTANCE_OFFSCREEN_FAR)
				chanceToStare = 0;
			
			if(this._goblinDistanceSlot === GOBLIN_DISTANCE_MEDIUM)
				skillArray.push(SKILL_ENEMY_CLOTHES_PULL_ID);
			
			if(Math.randomInt(100) < chanceToStare) {
				skillArray.push(SKILL_ENEMY_STARE_SELECTOR_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_STARE_SELECTOR_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_STARE_SELECTOR_PUSSY_ID);
				skillArray.push(SKILL_ENEMY_STARE_SELECTOR_BUTT_ID);
				skillArray.push(SKILL_ENEMY_STARE_SELECTOR_BUTT_ID);
			}
		}
		
	}
	
	let success = false;
	while(skillArray.length > 0 && !success) {
		let index = Math.randomInt(skillArray.length);
		let skillId = skillArray.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		success = success && this.meetsSkillConditions($dataSkills[skillId]); //cooldown
		if(success) {
			this.useAISkill(skillId, target);
			this._goblinActionCooldown = actionCooldownIfSuccessful;
		}
	}
	
	
	
};


Game_Enemy.prototype.receptionistBattle_action_enterVisitingRoom = function() {
	BattleManager._logWindow.push('addText', TextManager.receptionistVisitorEntersVisitingRoom.format(this.displayName(), TextManager.visitorRoomName(this._visitor_assignedVisitingRoom)));
	AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
	
	$gameTroop._visitorSeats[this._visitorSeatId] = false;
	
	if($gameParty.receptionistBattle_getCurrentTimeInSeconds() < $gameParty._receptionistBattle_visitingRoomTime[this._visitor_assignedVisitingRoom]) {
		$gameParty._receptionistBattle_visitingRoomTime[this._visitor_assignedVisitingRoom] += this._visitor_time * 60;
	}
	else {
		$gameParty._receptionistBattle_visitingRoomTime[this._visitor_assignedVisitingRoom] = $gameParty.receptionistBattle_getCurrentTimeInSeconds() + this._visitor_time * 60;
	}
	
	let orderGain = RECEPTIONIST_ORDER_GAIN_FROM_VISITING_ROOM_BASE + this._visitor_time * RECEPTIONIST_ORDER_GAIN_FROM_VISITING_ROOM_PER_TIME;
	
	let softCap = RECEPTIONIST_ORDER_GAIN_STARTING_SOFT_CAP + (this._receptionistBattle_timeLimit / 450);
	
	if($gameParty._orderResult >= softCap)
		orderGain *= RECEPTIONIST_ORDER_GAIN_MULTIPLER_PASS_SOFT_CAP;

	$gameParty.increaseOrderGain(orderGain);
	$gameParty.increaseReceptionistVisitorSatisfaction_General(RECEPTIONIST_GENERAL_SATISFACTION_GAIN_FROM_VISITING_ROOM);
	if(this._visitor_isFan) {
		$gameParty.increaseReceptionistVisitorSatisfaction_Fan(RECEPTIONIST_FAN_SATISFACTION_GAIN_FROM_VISITING_ROOM);
	}
	
	this.hide();
	this.clearActions();
    this.clearStates();
};

Game_Enemy.prototype.receptionistBattle_action_buggedLeave = function() {
	this.receptionistBattle_leaveDeskQueue();
	
	$gameTroop._visitorSeats[this._visitorSeatId] = false;
	
	this.hide();
	this.clearActions();
    this.clearStates();
};
Game_Enemy.prototype.receptionistBattle_action_leavesAngry = function() {
	let dissatisfactionFromEdicts = $gameParty.receptionistBattle_dissatisfactionFromEdictsMultipler();
	
	BattleManager._logWindow.push('addText', TextManager.receptionistVisitorLeavesAngry.format(this.displayName()));
	AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
	
	if(this._visitor_isFan) {
		if(this._fan_requestRejected) {
			$gameParty.increaseReceptionistVisitorSatisfaction_Fan(RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_REQUEST_REJECTED * this._visitor_dissatisfactionMultipler * dissatisfactionFromEdicts);
		}
		$gameParty.increaseReceptionistVisitorSatisfaction_Fan(RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_ANGRY_LEAVE * this._visitor_dissatisfactionMultipler * dissatisfactionFromEdicts);
	}
	
	$gameParty.increaseReceptionistVisitorSatisfaction_General(RECEPTIONIST_GENERAL_SATISFACTION_LOST_FROM_ANGRY_LEAVE * this._visitor_dissatisfactionMultipler * dissatisfactionFromEdicts);
	
	
	this.receptionistBattle_leaveDeskQueue();
	
	$gameTroop._visitorSeats[this._visitorSeatId] = false;
	
	this.hide();
	this.clearActions();
    this.clearStates();
};
Game_Enemy.prototype.receptionistBattle_action_fanLeaves = function() {
	BattleManager._logWindow.push('addText', TextManager.receptionistNotHereForVisitation.format(this.displayName()));
	//Request fulfilled
	if(this._fan_requestWasFulfilled) {
		BattleManager._logWindow.push('addText', TextManager.receptionistFanLeavesHappy.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
	}
	//Request rejected
	else if(this._fan_requestRejected) {
		let dissatisfactionFromEdicts = $gameParty.receptionistBattle_dissatisfactionFromEdictsMultipler();
		BattleManager._logWindow.push('addText', TextManager.receptionistFanLeavesDejected.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
		$gameParty.increaseReceptionistVisitorSatisfaction_Fan(RECEPTIONIST_FAN_SATISFACTION_LOST_FROM_REQUEST_REJECTED * this._visitor_dissatisfactionMultipler * dissatisfactionFromEdicts);
		
		if(this.isWanted) {
			$gameParty.getWantedEnemyById(this.getWantedId())._lastDefeated = Prison.date + WANTED_DAYS_ADDED_TO_DEFEATED_AFTER_REJECT;
		}
	}
	
	
	this.receptionistBattle_leaveDeskQueue();
	
	$gameTroop._visitorSeats[this._visitorSeatId] = false;
	
	this.hide();
	this.clearActions();
    this.clearStates();
};
Game_Enemy.prototype.receptionistBattle_action_pervLeaves = function() {
	BattleManager._logWindow.push('addText', TextManager.receptionistNotHereForVisitation.format(this.displayName()));
	//Request fulfilled
	if(this._perv_requestWasFulfilled) {
		BattleManager._logWindow.push('addText', TextManager.receptionistPervLeavesHappy.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
		if(this.isWanted) {
			Prison.setWantedIdAsDefeated(this.getWantedId());
		}
		$gameParty.addToVisitorPervertWanted(this);
	}
	//Request rejected
	else if(this._perv_requestRejected) {
		let dissatisfactionFromEdicts = $gameParty.receptionistBattle_dissatisfactionFromEdictsMultipler();
		BattleManager._logWindow.push('addText', TextManager.receptionistPervLeavesAngry.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
		$gameParty.increaseReceptionistVisitorSatisfaction_Pervert(RECEPTIONIST_PERV_SATISFACTION_LOST_FROM_REQUEST_REJECTED * this._visitor_dissatisfactionMultipler * dissatisfactionFromEdicts);
		
		if(this.isWanted) {
			$gameParty.getWantedEnemyById(this.getWantedId())._lastDefeated = Prison.date + WANTED_DAYS_ADDED_TO_DEFEATED_AFTER_REJECT;
		}
	}


	this.receptionistBattle_leaveDeskQueue();

	$gameTroop._visitorSeats[this._visitorSeatId] = false;

	this.hide();
	this.clearActions();
    this.clearStates();
};

Game_Enemy.prototype.receptionistBattle_action_angryCompaint = function() {
	if(this._visitor_angryComplaintCooldown > 0) {
		this._visitor_angryComplaintCooldown--;
	}
	else {
		if(this._visitor_isAngry_fromBadVisitingRoom) {
			let roomId = this._visitor_assignedVisitingRoom;
			BattleManager._logWindow.push('addText', TextManager.receptionistVisitorAngryComplaint_OccupiedVisitingRoom.format(this.displayName(), TextManager.visitorRoomName(roomId)));
			this._visitor_angryComplaintCooldown = 1;
		}
	}
};


Game_Enemy.prototype.receptionistBattle_joinDeskQueue = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	$gameTroop._deskQueue.push(this);
	let queueLength = $gameTroop._deskQueue.length;
	if(queueLength === 1) {
		this.setVisitorLocationToDesk();
	}
	else {
		this.setVisitorLocationToLine();
		this.setStateCounter(STATE_VISITOR_LOCATION_LINE_ID, queueLength - 1);
	}
	
	actor.emoteReceptionistPose();
};
Game_Enemy.prototype.receptionistBattle_leaveDeskQueue = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if($gameTroop._deskQueue[0]._visitor_number === this._visitor_number) {
		$gameTroop._deskQueue.shift();
		actor._cockNormalTarget = false;
		actor.setMaxTachieSemenCockNormalId(0);
	}
	else {
		let currentQueueSpot = 0;
		let foundInsideQueue = false;
		for(let i = 0; i < $gameTroop._deskQueue.length; ++i) {
			if($gameTroop._deskQueue[i]._visitor_number === this._visitor_number) {
				currentQueueSpot = i;
				foundInsideQueue = true;
				break;
			}
		}
		if(!foundInsideQueue) return;
		$gameTroop._deskQueue.splice(currentQueueSpot, 1);
	}
	let queueLength = $gameTroop._deskQueue.length;
	if(queueLength > 0) {
		for(let i = 0; i < queueLength; ++i) {
			let visitor = $gameTroop._deskQueue[i];
			if(i === 0) {
				visitor.setVisitorLocationToDesk();
			}
			else {
				//visitor.setVisitorLocationToLine();
				visitor.setStateCounter(STATE_VISITOR_LOCATION_LINE_ID, i);
			}
		}
	}
	
	actor.emoteReceptionistPose();
};