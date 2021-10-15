var Remtairy = Remtairy || {};
Remtairy.KarrynStripper = Remtairy.KarrynStripper || {};

//敵の位置
const STRIP_CLUB_LEFT_SEAT_A_X = 115;
const STRIP_CLUB_LEFT_SEAT_B_X = 115;
const STRIP_CLUB_LEFT_SEAT_C_X = 115;
const STRIP_CLUB_LEFT_SEAT_D_X = 115;
const STRIP_CLUB_LEFT_SEAT_E_X = 115;
const STRIP_CLUB_RIGHT_SEAT_A_X = 1325;
const STRIP_CLUB_RIGHT_SEAT_B_X = 1325;
const STRIP_CLUB_RIGHT_SEAT_C_X = 1325;
const STRIP_CLUB_RIGHT_SEAT_D_X = 1325;
const STRIP_CLUB_RIGHT_SEAT_E_X = 1325;
const STRIP_CLUB_SEAT_A_Y = 245;
const STRIP_CLUB_SEAT_B_Y = 350;
const STRIP_CLUB_SEAT_C_Y = 455;
const STRIP_CLUB_SEAT_D_Y = 560;
const STRIP_CLUB_SEAT_E_Y = 665;
//敵のPleasureバーの位置
const STRIP_CLUB_ENEMY_PLEASURE_GAUGE_X = -1;
const STRIP_CLUB_ENEMY_PLEASURE_GAUGE_Y = 23;
//敵のBalloonの位置
const STRIP_CLUB_LEFT_SEAT_BALLOON_X = 90;
const STRIP_CLUB_RIGHT_SEAT_BALLOON_X = -170;
const STRIP_CLUB_SEAT_BALLOON_Y = -70;

const PICTURE_NAME_STRIP_CLUB_REQUEST_MOUTH = 'stripclub_request_mouth';
const PICTURE_NAME_STRIP_CLUB_REQUEST_BOOBS = 'stripclub_request_boobs';
const PICTURE_NAME_STRIP_CLUB_REQUEST_PUSSY = 'stripclub_request_pussy';
const PICTURE_NAME_STRIP_CLUB_REQUEST_BUTT = 'stripclub_request_butt';
const PICTURE_NAME_STRIP_CLUB_REQUEST_STRIP = 'stripclub_request_strip';
const PICTURE_NAME_STRIP_CLUB_REQUEST_LEFT = '_left';
const PICTURE_NAME_STRIP_CLUB_REQUEST_RIGHT = '_right';

const BATTLEBACK1_STRIPCLUB_STRIPPER_SHOW_NAME = 'Strip1';
const BATTLEBACK1_STRIPCLUB_STRIPPER_INTERMISSION_NAME = 'Strip2';
const BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME = 'Strip3';

//=============================================================================
 /*:
 * @plugindesc Karryn Stripper
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const STRIPPER_SKILL_START = 1855;
const STRIPPER_SKILL_END = 1866;

const STRIP_CLUB_REP_DECAY_DAYS = 3;
const STRIP_CLUB_DECAY_RIOT_BUILDUP = 8;

const STRIP_CLUB_TOTAL_SEATS = 10;
const STRIP_CLUB_SEAT_LEFT_A = 0;
const STRIP_CLUB_SEAT_LEFT_B = 1;
const STRIP_CLUB_SEAT_LEFT_C = 2;
const STRIP_CLUB_SEAT_LEFT_D = 3;
const STRIP_CLUB_SEAT_LEFT_E = 4;
const STRIP_CLUB_SEAT_RIGHT_A = 5;
const STRIP_CLUB_SEAT_RIGHT_B = 6;
const STRIP_CLUB_SEAT_RIGHT_C = 7;
const STRIP_CLUB_SEAT_RIGHT_D = 8;
const STRIP_CLUB_SEAT_RIGHT_E = 9;

const STRIPPER_REQUEST_MOUTH_ID = 1;
const STRIPPER_REQUEST_BOOBS_ID = 2;
const STRIPPER_REQUEST_PUSSY_ID = 3;
const STRIPPER_REQUEST_BUTT_ID = 4;
const STRIPPER_REQUEST_STRIP_ID = 5;

const STRIPPER_CONDOM_STAGE_AREA_ID = 1;
const STRIPPER_CONDOM_BELT_AREA_ID = 2;
const STRIPPER_CONDOM_BUTT_AREA_ID = 3;
const STRIPPER_CONDOM_BRA_AREA_ID = 4;
const STRIPPER_CONDOM_NIPPLES_AREA_ID = 5;
const STRIPPER_CONDOM_HEAD_AREA_ID = 6;


const STRIPPER_COCK_DESIRE_EFFECT = 0.002;
const STRIPPER_BODY_DESIRE_EFFECT = 0.005;
const STRIPPER_OTHER_DESIRE_EFFECT = 0.001;

const STRIPPER_PATRON_ENTER_LIMIT_PER_TURN = 2;
const STRIPPER_PATRON_MAY_ENTER_TIME_LIMIT = 180;
const STRIPPER_PATRON_LEAVE_LIMIT_PER_TURN = 3;
const STRIPPER_PATRON_STARTING_GRACE_PERIOD = 4;
const STRIPPER_PATRON_POSTCUM_GRACE_PERIOD = 5;
const STRIPPER_PATRON_LEAVE_THRESHOLD = 8;
const STRIPPER_PATRON_ANGRY_THRESHOLD = 15;
const STRIPPER_PATRON_INTERMISSION_PLEASURE_LOST = 13;
const STRIPPER_PATRON_UNFULFILLED_PLEASURE_LOST = 4;
const STRIPPER_PATRON_TALKSIGHT_SKILL_COOLDOWN = 40;

const STRIPPER_PATRON_SATISFACTION_LOST_FROM_CONDOM_TAX = -1;
const STRIPPER_PATRON_SATISFACTION_LOST_FROM_LEAVING_UNHAPPY = -3;
const STRIPPER_PATRON_SATISFACTION_LOST_FROM_IGNORED_REQUEST = -0.5;
const STRIPPER_PATRON_SATISFACTION_LOST_FROM_FAILED_SHOW = -1;
const STRIPPER_PATRON_SATISFACTION_LOST_FROM_FAILED_VIP = -1.5;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FULFILLED_REQUEST = 0.5;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_CUMMING_DURING_SHOW = 3;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_TIPPING_CONDOM = 1;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_VIP_INVITE = 1;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_VIP_CUMMING = 2;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FIRST_EXCITE = 1;
const STRIPPER_PATRON_SATISFACTION_GAIN_FROM_STRIPPER_ORGASM = 0.25;

const ENEMYTYPE_STRIPCLUB_OBS_TAG = 'sc_obs';
const STRIPCLUB_OBS_ENEMY_ID = 37;

//////////
///////////////////
// Game Party
////////////////////
///////////////

Object.defineProperty(Game_Party.prototype, "isInStripperBattle", {
	get: function () { return this._isInStripperBattle; }, configurable: true
});
Game_Party.prototype.setIsInStripperBattleFlag = function(status) {
	this._isInStripperBattle = status;
};

Game_Party.prototype.preStripperBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	BattleManager.setEnemySneakAttackBattle();
	this.setIsInStripperBattleFlag(true);
	this.preBattleSetup();
	$gameMap.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_INTERMISSION_NAME, null);
	this._showTopRightTimeNumberFlag = true;
	this._stripperBattle_intermissionPhase = true;
	
	this.increaseFatigueGain(this._stripperBattle_baseFatigueGain);
	
	this._stripperBattle_currentTimeInSeconds = 0;
	this._stripperBattle_patronSatisfaction = 0;
	
	actor.preStripperBattleSetup();
};

Game_Party.prototype.postStripperBattleCleanup  = function() {
	this.setIsInStripperBattleFlag(false);
	this._showTopRightTimeNumberFlag = false;
	$gameSwitches.setValue(SWITCH_TODAY_STRIPPER_BATTLE_ID, true);
	$gameSwitches.setValue(SWITCH_AFTER_FIRST_STRIP_ID, true);
	
	this._stripperBattle_intermissionPhase = false;
	
	if(this._stripperBattle_patronSatisfaction > 0) {
		let addRep = 1;
		if($gameParty._stripClubReputation <= 20 && Math.randomInt(100) < this._stripperBattle_patronSatisfaction) addRep++;
		this.increaseStripClubReputation(addRep);
		$gameSwitches.setValue(SWITCH_TODAY_STRIPPER_REP_UP_ID, true);
	}
	else if(this._stripperBattle_patronSatisfaction < 0) {
		let addRep = -1;
		if(Math.randomInt(100) < this._stripperBattle_patronSatisfaction * -1) addRep--;
		this.increaseStripClubReputation(addRep);
		this._prisonLevelThreeRiotBuildup += $gameParty._stripClubReputation;
	}
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor.changeToWardenClothing();
	actor._stripperBattle_intermissionPhase = true;
	actor._stripper_preparingForVIP = false;
	actor.clearStateCounters();
	actor._stripper_wornCondomTotalCount = 0;
	actor._stripperBonusPptSightValueCache = 0;
	actor._stripper_danceCombo = 0;
	
	$gameVariables.setValue(VARIABLE_STRIP_CLUB_STAGE_CONDOMS_ID, actor._stripper_stageCondomCount);
	$gameVariables.setValue(VARIABLE_STRIP_CLUB_TOTAL_CONDOMS_ID, actor._tempRecordStripClubCondomEjaculationCount);
	
	if(!$gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_THREE_ID)) {
		actor._playthroughRecordStripperBattleTotalShiftsCount++;
		if(!actor._tempRecordStripClubEnteredIntermission && !actor._tempRecordStripClubEnteredVIP && this._stripperBattle_timeLimit >= 960 && $gameParty.stripperBattle_getCurrentTimeInSeconds() >= $gameParty._stripperBattle_timeLimit)
			actor._playthroughRecordStripperBattleDancedFullTwelveMinShowCount++;
	}
};

Game_Party.prototype.applyEndOfBattleSpecial_stripperBattle = function() {
	if(Karryn.isInStripperSexPose()) {
		$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
			if($gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_THREE_ID)) {
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_FAILED_VIP);
			}
			
			if(member._enemyTempRecordTotalEjaculationCount === 0) {
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_FAILED_VIP);
			}
		});
		
	}
	else {
		$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
			if($gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_THREE_ID)) {
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_FAILED_SHOW);
			}
			
			if(member._enemyTempRecordStripClubCondomEjaculationCount === 0) {
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_LEAVING_UNHAPPY);
			}
		});

	}
};

Game_Party.prototype.setStripClubReputation = function(value) {
	let minStripClubRep = this.getMinimumStripClubReputation();
	
	this._stripClubReputation = Math.max(minStripClubRep, value);
	$gameVariables.setValue(VARIABLE_STRIP_CLUB_REPUTATION_ID, this._stripClubReputation);
};
Game_Party.prototype.increaseStripClubReputation = function(value) {
	this.setStripClubReputation(this._stripClubReputation + value);
};
Game_Party.prototype.getMinimumStripClubReputation = function() {
	let minStripClubRep = 0;
	
	return minStripClubRep;
};

Game_Party.prototype.increaseStripperPatronSatisfaction = function(value) {
	this._stripperBattle_patronSatisfaction += value;
};

Game_Party.prototype.stripperBattle_getCurrentTimeInSeconds = function() {
	return this._stripperBattle_currentTimeInSeconds;
};
Game_Party.prototype.stripperBattle_getTimeMinutesNumber = function() {
	let timeLimit = this._stripperBattle_timeLimit - this.stripperBattle_getCurrentTimeInSeconds();
	let minutes = Math.floor(timeLimit / 60);
	let seconds = timeLimit - minutes * 60;
	return minutes;
};
Game_Party.prototype.stripperBattle_getTimeSecondsNumber = function() {
	if($gameParty.stripperBattle_getCurrentTimeInSeconds() >= $gameParty._stripperBattle_timeLimit)
		return 0;
	let minutes = Math.floor(this.stripperBattle_getCurrentTimeInSeconds() / 60);
	let seconds = this.stripperBattle_getCurrentTimeInSeconds() - minutes * 60;
	if(seconds > 0) seconds = 60 - seconds;
	return seconds;
};

Game_Party.prototype.stripperBattle_advanceTimeBySeconds = function(value) {
	this._stripperBattle_currentTimeInSeconds += value;
};

Game_Party.prototype.setStripperBattleTimeLimit = function(minutes) {
	if(minutes === 8) {
		this._stripperBattle_timeLimit = 480;
		this._stripperBattle_baseFatigueGain = 2;
		this._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler = 1;
	}
	else if(minutes === 10) {
		this._stripperBattle_timeLimit = 600;
		this._stripperBattle_baseFatigueGain = 4;
		this._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.1;
	}
	else if(minutes === 12) {
		this._stripperBattle_timeLimit = 720;
		this._stripperBattle_baseFatigueGain = 6;
		this._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.25;
	}
	else if(minutes === 16) {
		this._stripperBattle_timeLimit = 960;
		this._stripperBattle_baseFatigueGain = 8;
		this._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.4;
	}
	else if(minutes === 20) {
		this._stripperBattle_timeLimit = 1200;
		this._stripperBattle_baseFatigueGain = 10;
		this._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.55;
	}
	else if(minutes === 24) {
		this._stripperBattle_timeLimit = 1440;
		this._stripperBattle_baseFatigueGain = 12;
		this._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.7;
	}
	
};

Object.defineProperty(Game_Party.prototype, "stripperBattleTimeChoice", {
	get: function () { 
		let choice = 0;
		let rep = $gameParty._stripClubReputation;

		if(rep >= 30)
			choice = 4;
		else if(rep >= 20)
			choice = 3;
		else if(rep >= 10)
			choice = 2;
		else if(rep >= 5)
			choice = 1;

		let maxLimit = 2;
		if($gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV4_ID)) { //temp todo change for full game
			maxLimit += 2;
		}

		return Math.min(maxLimit, choice);
		
	}, configurable: true
});



Game_Party.prototype.stripperBattle_intermissionPhase = function() {
	return this._stripperBattle_intermissionPhase;
};

Game_Party.prototype.stripClubIsPreventingLevelOneRiotOutbreak = function() {
	return this._daysWithoutDoingStripClub === 0 && this._stripClubReputation >= 10 && Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB);
};
Game_Party.prototype.stripClubIsPreventingLevelTwoRiotOutbreak = function() {
	return this._daysWithoutDoingStripClub === 0 && this._stripClubReputation >= 15 && Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB);
};
Game_Party.prototype.stripClubIsPreventingLevelThreeRiotOutbreak = function() {
	return this._daysWithoutDoingStripClub === 0 && Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB);
};
Game_Party.prototype.stripClubIsPreventingLevelFourRiotOutbreak = function() {
	return this._daysWithoutDoingStripClub === 0 && this._stripClubReputation >= 20 && Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB);
};


Game_Party.prototype.stripClub_getCutOfCondomTip = function() {
	let gold = 30;
	if(Karryn.hasEdict(EDICT_TAX_CLUB_CONDOM_IMPORTS))
		gold += 5;
	
	let rate = 1;
	if(Karryn.isUsingThisTitle(TITLE_ID_FULLCONDOM_ALCHEMIST)) rate += 0.5;
	else if(Karryn.hasThisTitle(TITLE_ID_FULLCONDOM_ALCHEMIST)) rate += 0.15;
	
	$gameParty.increaseExtraGoldReward(Math.round(gold * rate));
};
Game_Party.prototype.stripClub_getCutOfVIPPrice = function() {
	let gold = 60;
	if(Karryn.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_THREE_ID))
		gold += 20;
	else if(Karryn.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_TWO_ID))
		gold += 10;
	
	let rate = 1;
	if(Karryn.isUsingThisTitle(TITLE_ID_CROWDED_VIP)) rate += 0.33;
	
	$gameParty.increaseExtraGoldReward(Math.round(gold * rate));
};


//////////
// Game Actor
///////////


Game_Actor.prototype.preStripperBattleSetup = function() {
	this.changeToStripperClothing();
	this._wearingPanties = true;
	this.setStripperIntermissionPose();
	
	this.setupLiquids();
	this.setupDesires();
	this._stripperBonusPptSightValueCache = 0;
	this._stripper_danceCombo = 0;
	this._stripper_firstStageEntryThisBattle = false;
	this._stripper_preparingForVIP = false;
	
	this._stripper_stageCondomCount = 0;
	this._stripper_beltCondomCount = 0;
	this._stripper_buttCondomCount = 0;
	this._stripper_braCondomCount = 0;
	this._stripper_nipplesCondomCount = 0;
	this._stripper_headCondomCount = 0;
	this._stripper_wornCondomTotalCount = 0;
	
	
	
	this._recordStripClubStripperBattleCount++;
	this._playthroughRecordStripClubStripperBattleCount++;
	
	
	this.clearCooldowns();
	this._cooldownTurns[SKILL_STRIPPER_EXIT_INTERMISSION_ID] = 0;
	
	
	this.removeState(STATE_CONFIDENT_ID);
};


Game_Actor.prototype.startStripperSex = function() {
	let vipPatronCount = $gameTroop.stripperBattle_activePatrons().length;
	if(vipPatronCount > 1) {
		BattleManager._logWindow.push('addText', TextManager.RemStripperEnemyJoinVIPPlural.format(this.displayName()));
	}
	else {
		BattleManager._logWindow.push('addText', TextManager.RemStripperEnemyJoinVIPSingular.format(this.displayName()));
	}
	
	this.setStripperSexPose();
	this.startAnimation(263, false, 0);
	
	$gameTroop._stripClubObs.hide();
	
	this.stripOffPanties();
	this.stripOffClothing();
	
	this.removeState(STATE_DANCE_COMBO_COUNT_ID);
	this.removeState(STATE_STRIPPER_STANDBY_ID);
	this.clearStateCounters();
	
	$gameParty._showTopRightTimeNumberFlag = false;
	$gameParty.stripperBattle_advanceTimeBySeconds(1);
	
	this._stripperBonusPptSightValueCache = 0;
	this._tempRecordStripClubEnteredVIP = true;
	this._recordStripClubStripperSexCount++;
};

Game_Actor.prototype.isInStripperStandby = function() {
	return this.isStateAffected(STATE_STRIPPER_STANDBY_ID);
};

Game_Actor.prototype.getStripperBattleBonusPptSightValueCache = function() {
	let value = this._stripperBonusPptSightValueCache;
	this._stripperBonusPptSightValueCache = 0;
	return value;
};
Game_Actor.prototype.increaseStripperBattleBonusPptSightValueCache = function(value) {
	this._stripperBonusPptSightValueCache += value;
};

//Param
Game_Actor.prototype.stripperXParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInStripperBattle && !this.isInStripperSexPose()) {
		if(id === XPARAM_STA_REGEN_ID) {
			if(!$gameParty.stripperBattle_intermissionPhase()) {
				passiveRate = 0.2;
				if(this.isUsingThisTitle(TITLE_ID_NONSTOP_SHOW)) passiveRate += 0.08;
				if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_THREE_ID) && this._stripper_wornCondomTotalCount > 0) {
					passiveRate += this._stripper_wornCondomTotalCount * 0.005;
				}
			}
		}
		else if(id === XPARAM_EN_REGEN_ID) {
			if($gameParty.stripperBattle_intermissionPhase())
				passiveRate = 0.8;
			else
				passiveRate = 0.2;
		}
	}
	return passiveRate;
};
Game_Actor.prototype.stripperSParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInStripperBattle && !this.isInStripperSexPose() && !$gameParty.stripperBattle_intermissionPhase()) {
		if(id === SPARAM_WP_REGEN_ID) {
			passiveRate = 0.2;
		}
	}
	return passiveRate;
};

/////////
// Dance Combo
Game_Actor.prototype.resetStripperDanceCombo = function() {
	this._stripper_danceCombo = 0;
	this.setStateCounter(STATE_DANCE_COMBO_COUNT_ID, this._stripper_danceCombo);
	this.removeStateCounter(STATE_DANCE_COMBO_COUNT_ID);
	this.removeState(STATE_DANCE_COMBO_COUNT_ID);
	$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
		member.stripperBattle_resetDanceCombo();
    });
};
Game_Actor.prototype.increaseStripperDanceCombo = function() {
	this._stripper_danceCombo++;
	if(this._stripper_danceCombo > this._recordStripClubStripperMaxDanceCombo) 
		this._recordStripClubStripperMaxDanceCombo = this._stripper_danceCombo;
	
	let stripper = this;
	$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
		member.stripperBattle_increaseDanceCombo(stripper);
    });
	
	if(this._stripper_danceCombo >= 2) {
		if(!this.isStateAffected(STATE_DANCE_COMBO_COUNT_ID))
			this.addState(STATE_DANCE_COMBO_COUNT_ID);
		this.setStateCounter(STATE_DANCE_COMBO_COUNT_ID, this._stripper_danceCombo);
	}
};

//////
// Condom
Game_Actor.prototype.stripperBattle_canAddCondomToBelt = function() {
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_ONE_ID) && !$gameParty.stripperBattle_intermissionPhase()) { 
		return this._stripper_beltCondomCount < 4;
	}
	return false;
};
Game_Actor.prototype.stripperBattle_canAddCondomToButt = function() {
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_ONE_ID) && (this.isInStripperButtPose() || this.isInStripperSexPose())) { 
		return this._stripper_buttCondomCount < 4;
	}
	return false;
};
Game_Actor.prototype.stripperBattle_canAddCondomToBra = function() {
	let isWearingBra = this.clothingStage <= 2;
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_TWO_ID) && isWearingBra && !$gameParty.stripperBattle_intermissionPhase() && !this.isInStripperButtPose()) { 
		return this._stripper_braCondomCount < 4;
	}
	return false;
};
Game_Actor.prototype.stripperBattle_canAddCondomToNipples = function() {
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_THREE_ID) && this.isAroused() && !$gameParty.stripperBattle_intermissionPhase() && !this.isInStripperButtPose()) { 
		return this._stripper_nipplesCondomCount < 2;
	}
	return false;
};
Game_Actor.prototype.stripperBattle_canAddCondomToHead = function() {
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_THREE_ID) && !$gameParty.stripperBattle_intermissionPhase()) { 
		return this._stripper_headCondomCount < 4;
	}
	return false;
};
Game_Actor.prototype.stripperBattle_recalculateWornCondomTotal = function() {
	let count = 0;
	let isWearingBra = this.clothingStage <= 2;
	count += this._stripper_beltCondomCount;
	count += this._stripper_buttCondomCount;
	count += this._stripper_nipplesCondomCount;
	count += this._stripper_headCondomCount;
	if(isWearingBra)
		count += this._stripper_braCondomCount;
	this._stripper_wornCondomTotalCount = count;
	
	if(this._stripper_wornCondomTotalCount > this._recordStripClubMaxCondomsWornCount) 
		this._recordStripClubMaxCondomsWornCount = this._stripper_wornCondomTotalCount;
};
Game_Actor.prototype.stripperBattle_condomCharmBonus = function() {
	let rate = 1;
	return this._stripper_wornCondomTotalCount * rate;
};

Game_Actor.prototype.postDamage_basicPetting_stripperBattle = function(target, area) {
	this.addToActorPettedWhileWorkingRecord();
};

Game_Actor.prototype.postDamage_basicSpanking_stripperBattle = function(target, spankLvl) {
	//this.addToActorPettedWhileWorkingRecord();
};


//Post Ejaculation
Game_Actor.prototype.postDamage_ejaculation_stripperBattle = function(target, area, semen) {
	if(area == CUM_INTO_CONDOM) {
		target._stripClub_isHoldingUsedCondom = true;
		target._stripClub_danceRequestId = 0;
		target._stripClub_activeRequest = false;
		target._stripClub_turnsUntilNextRequest = 1;
		target.addToEnemyStripClubCondomEjaculationCountRecord(this);
		//BattleManager.playEnemyVoice_SideJob(target, 50);
		let sePan = 0;
		if(target._stripClubSeatId <= 4)
			sePan = -50;
		else
			sePan = 50;
		AudioManager.playSe({name:'+Mucus04', pan:sePan, pitch:90, volume:70});
		
		this._recordStripClubCondomEjaculationCount++;
		this._tempRecordStripClubCondomEjaculationCount++;
		this._playthroughRecordStripClubCondomEjaculationCount++;
		
		target._stripClub_isExcited = false;
		target._stripClub_fulfilledRequestsUntilExcited = 2;
		target._stripClub_gracePeriod = STRIPPER_PATRON_POSTCUM_GRACE_PERIOD;
		
		$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_CUMMING_DURING_SHOW);
	}
	else {
		if(this.isInStripperSexPose()) {
			$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_VIP_CUMMING);
		}
	}
};

//Orgasm
Game_Actor.prototype.postDamage_femaleOrgasm_stripperBattle = function(orgasmCount, addJustOrgasmedState) {
	if(!this.isInStripperSexPose() && !$gameParty.stripperBattle_intermissionPhase()) {
		this._playthroughRecordStripClubStripperOrgasmOnStageCount++;
		
		if(this._stripper_danceCombo >= 3) {
			this._tempRecordStripClubDancingOrgasmCount++;
			if(this._tempRecordStripClubDancingOrgasmCount > this._recordStripClubDancingOrgasmMaxCount)
				this._recordStripClubDancingOrgasmMaxCount = this._tempRecordStripClubDancingOrgasmCount;
		}
		
		if(addJustOrgasmedState && !this.isUsingThisTitle(TITLE_ID_DANCING_ORGASM)) {
			this.resetStripperDanceCombo();
		}
		
		$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
			$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_STRIPPER_ORGASM);
			member._stripClub_gracePeriod++;
		});
	}
	else if($gameParty.stripperBattle_intermissionPhase()) {
		this._playthroughRecordStripClubStripperOrgasmIntermissionCount++;
		
		$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
			member._stripClub_gracePeriod++;
		});
	}
};

/////
// Intermission Skills

Game_Actor.prototype.customReq_enterIntermissionPhase = function() {
	return this.stamina <= this.maxstamina * 0.6 && !this.justOrgasmed();
};
Game_Actor.prototype.stripperBattle_enterIntermissionPhase = function() {
	$gameParty._stripperBattle_intermissionPhase = true;
	this._stripperBonusPptSightValueCache = 0;
	this.setCooldown(SKILL_STRIPPER_EXIT_INTERMISSION_ID, 3);
	BattleManager.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_INTERMISSION_NAME, null);
	this.setStripperIntermissionPose();
	this.resetStripperDanceCombo();
	$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
		member._stripClub_strippedClothesBonus = 0;
    });
	this.removeState(STATE_DANCE_COMBO_COUNT_ID);
	this.removeState(STATE_STRIPPER_STANDBY_ID);
	this._tempRecordStripClubEnteredIntermission = true;
	AudioManager.stopBgm();
	AudioManager.stopBgs();
	AudioManager.playSe({name:'Equip3', pan:0, pitch:100, volume:100});
};

Game_Actor.prototype.customReq_exitIntermissionPhase = function() {
	return this.stamina >= this.maxstamina * 0.75 && !this.justOrgasmed();
};
Game_Actor.prototype.stripperBattle_exitIntermissionPhase = function() {
	$gameParty._stripperBattle_intermissionPhase = false;
	this._stripperBonusPptSightValueCache = 0;
	this.setCooldown(SKILL_STRIPPER_ENTER_INTERMISSION_ID, 2);
	this.resetStripperDanceCombo();
	BattleManager.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SHOW_NAME, null);
	this.addState(STATE_STRIPPER_STANDBY_ID);
	this.resetGotHitBySkillType();
	
	
	this.setStripperMouthPose();
	
	BattleManager.playSpecialBgm_StripperShow();
	
	if(!this._stripper_firstStageEntryThisBattle) {
		BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_BATTLE_START);
		this._stripper_firstStageEntryThisBattle = true;
	}
	
	AudioManager.playSe({name:'Equip3', pan:0, pitch:100, volume:100});
};

Game_Actor.prototype.showEval_stripperBreather_normal = function() {
	return !this.justOrgasmed();
};
Game_Actor.prototype.showEval_stripperBreather_justOrgasmed = function() {
	return this.justOrgasmed();
};
Game_Actor.prototype.customReq_stripperBreather = function() {
	if(this.currentPercentOfStamina() < 100) return true;
	if(this.justOrgasmed()) return true;
	if($gameParty.stripperBattle_intermissionPhase() && this._cooldownTurns[SKILL_STRIPPER_EXIT_INTERMISSION_ID] > 0) return true;
	return false;
};
Game_Actor.prototype.cooldownEval_stripperBreather = function() {
	let cd = 5;
	return Math.max(1, cd);
};
Game_Actor.prototype.dmgFormula_stripperBreather = function() {
	let percent = Math.max(0.3, this.hrg * 4);
	if(this.justOrgasmed()) percent *= 0.6;
	let dmg = this.maxstamina * percent;
	return Math.round(dmg);
};
Game_Actor.prototype.afterEval_stripperBreather = function() {
	if(!$gameParty.stripperBattle_intermissionPhase()) {
		if(!this.isUsingThisTitle(TITLE_ID_TEN_DANCE_COMBO))
			this.resetStripperDanceCombo();
		this.setCooldown(SKILL_STRIPPER_BREATHER_STAGE_ID, this.cooldownEval_stripperBreather());
	}
};

Game_Actor.prototype.customReq_stripperFixClothes = function() {
	if(this.isClothingAtMaxFixable() && this.isWearingPanties()) return false;
	if(this.justOrgasmed()) return false;
	return true;
};
Game_Actor.prototype.afterEval_stripperFixClothes = function() {
	let isWearingBra = this.clothingStage <= 2;
	if(!isWearingBra) {
		this._stripper_nipplesCondomCount = 0;
		this.stripperBattle_recalculateWornCondomTotal();
	}
	
	this.restoreClothingDurability();
	this._wearingPanties = true;
};



//////
// Stripper Skills

Game_Actor.prototype.skillCost_stripperDance = function(danceId) {
	let cost = Math.min(this.realMaxStamina * 0.05, 14 + this.level * 2.2);
	
	if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_TWO_ID)) {
		cost *= 0.9;
		if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_THREE_ID) && this._todayMasturbatedUsingHalberdCount > 0) {
			cost *= Math.max(0.5, 1 - (this._todayMasturbatedUsingHalberdCount * 0.05));
		}
	}
	
	if(danceId === STRIPPER_REQUEST_MOUTH_ID) {
		cost *= (1 + this.mouthDesire * 0.001 + this.cockDesire * 0.0003);
		if(this.isInStripperMouthPose() && !this.isInStripperStandby()) cost *= 0.4;
	}
	else if(danceId === STRIPPER_REQUEST_BOOBS_ID) {
		cost *= (1 + this.boobsDesire * 0.001 + this.cockDesire * 0.0003);
		if(this.isInStripperBoobsPose()) cost *= 0.4;
	}
	else if(danceId === STRIPPER_REQUEST_PUSSY_ID) {
		cost *= (1 + this.pussyDesire * 0.001 + this.cockDesire * 0.0003);
		if(this.isInStripperPussyPose()) cost *= 0.4;
	}
	else if(danceId === STRIPPER_REQUEST_BUTT_ID) {
		cost *= (1 + this.buttDesire * 0.001 + this.cockDesire * 0.0003);
		if(this.isInStripperButtPose()) cost *= 0.4;
	}
	
	if(this._stripper_danceCombo > 1) {
		cost *= (1 + (this._stripper_danceCombo - 1) * 0.25);
	}
	
	return Math.min(Math.round(cost), this.stamina);
};
Game_Actor.prototype.customReq_stripperDance = function(danceId) {
	return !this.justOrgasmed();
};
Game_Actor.prototype.afterEval_stripperDance = function(danceId) {
	let samePose = false;
	
	this.removeState(STATE_STRIPPER_STANDBY_ID);
	
	if(danceId === STRIPPER_REQUEST_MOUTH_ID) {
		if(this.isInStripperMouthPose() && !this.isInStripperStandby()) {
			samePose = true;
			this.addState(STATE_STRIPPER_MOUTH_POSE_SETUP_ID);
			this.setStripperMouthPose();
		}
		else {
			this.addState(STATE_STRIPPER_MOUTH_POSE_SETUP_ID);
			this.setStripperMouthPose();
		}
		this.setAllowTachieEmoteUpdate(true);
		BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_MOUTH_DANCE);
	}
	else if(danceId === STRIPPER_REQUEST_BOOBS_ID) {
		if(this.isInStripperBoobsPose()) samePose = true;
		else {
			this.setStripperBoobsPose();
		}
		BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_BOOBS_DANCE);
	}
	else if(danceId === STRIPPER_REQUEST_PUSSY_ID) {
		if(this.isInStripperPussyPose()) samePose = true;
		else {
			this.setStripperPussyPose();
		}
		BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_PUSSY_DANCE);
	}
	else if(danceId === STRIPPER_REQUEST_BUTT_ID) {
		if(this.isInStripperButtPose()) samePose = true;
		else {
			this.setStripperButtPose();
		}
		BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_BUTT_DANCE);
	}
	
	if(!samePose || this._stripper_danceCombo === 0) {
		this.increaseStripperDanceCombo();
		this.gainStaminaExp(45 + this._stripper_danceCombo * 3, this.level);
		AudioManager.playSe({name:'foot_4', pan:0, pitch:120, volume:100});
	}
	else {
		this.gainStaminaExp(25 + this._stripper_danceCombo * 2, this.level);
		if(danceId !== STRIPPER_REQUEST_MOUTH_ID)
			this.emoteMasterManager_StripperBattle();
	}
	
	this.removeState(STATE_STRIPPER_MOUTH_POSE_SETUP_ID);
};

Game_Actor.prototype.skillCost_stripperStrip = function(danceId) {
	let cost = Math.min(this.realMaxStamina * 0.04, 10 + this.level * 1.5);
	
	if(this._stripper_danceCombo > 1) {
		cost *= (1 + (this._stripper_danceCombo - 1) * 0.15);
	}
	
	return Math.round(cost);
};
Game_Actor.prototype.customReq_stripperStrip = function() {
	if(this.isClothingMaxDamaged() && !this.isWearingPanties()) return false;
	if(this.justOrgasmed()) return false;
	return true;
};
Game_Actor.prototype.afterEval_stripperStrip = function() {
	if(this.isClothingMaxDamaged()) {
		this._wearingPanties = false;
		if(this.isClothingMaxDamaged() && this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
			this.addToPantiesStrippedRecord();
		}
	}
	else {
		let isWearingBra = this.clothingStage <= 2;
		this.damageClothing(CLOTHES_STRIPPER_START);
		let currentlyWearingBra = this.clothingStage <= 2;
		if(isWearingBra && !currentlyWearingBra) {
			this._stripper_nipplesCondomCount = 0;
			this.stripperBattle_recalculateWornCondomTotal();
		}

		if(this.isClothingMaxDamaged() && this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
			this.addToClothesStrippedRecord();
		}
	}
	
	this.increaseStripperDanceCombo();
	this.gainStaminaExp(25, this.level);
	
	$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
		if(member._stripClub_danceCombo < 6) {
			member._stripClub_strippedClothesBonus += member._stripClub_danceCharm * (member._stripClub_danceCombo * 0.08);
		}
		else {
			member._stripClub_strippedClothesBonus += member._stripClub_danceCharm * (0.3 + member._stripClub_danceCombo * 0.02);
		}
		member._stripClub_justSeenStripping = true;
    });
	
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_STRIP_CLOTHES);
	BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_STRIP_CLOTHES);
	//this.emoteMasterManager_StripperBattle();
};

Game_Actor.prototype.showEval_stripperInviteVIP = function() {
	return this.hasEdict(EDICT_BUILD_CLUB_VIP); 
};
Game_Actor.prototype.customReq_stripperInviteVIP = function() {
	return !this.justOrgasmed() && $gameTroop.stripperBattle_validPatronsToInviteForVIP().length > 0 && $gameParty.stripperBattle_getCurrentTimeInSeconds() >= 360;
};
Game_Actor.prototype.afterEval_stripperInviteVIP = function() {
	$gameScreen.erasePicture(PICTURE_BATTLE_0_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_1_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_2_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_3_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_4_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_5_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_6_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_7_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_8_ID);
	$gameScreen.erasePicture(PICTURE_BATTLE_9_ID);
	
	$gameTroop.stripperBattle_validPatronsToInviteForVIP().forEach(function(member) {
		member._stripClub_invitedToVIP = true;
		member.setPleasureToArousalPoint();
		$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_VIP_INVITE);
		$gameParty.stripClub_getCutOfVIPPrice();
    });
	
	this.stripperBattle_enterIntermissionPhase();
	this._stripper_preparingForVIP = true;
	this.addState(STATE_STUN_TILL_TURN_END_ID);
};

////////////////
// Game Troop
////////////////

//////
// Setup

Game_Troop.prototype.setupStripperBattle = function(troopId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._stripClubSeats = [ false, false, false, false, false, false, false, false, false, false ];
	
	this.calculateStripClubPatronsSpawnLimit();
	
	let patrons = this.stripperBattle_startingPatrons();

	//Enemies
	for(let i = 0; i < patrons.length; ++i) {
		let enemyId = patrons[i];
		let enemy = this.setup_stripperBattle_patron(enemyId);
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	
	this._stripClubPatronsEnteredThisTurn = 0;
	this._stripClubPatronsLeftThisTurn = 0;
	this._stripClubPatronsSpawnedCount = patrons.length;
	this._stripClub_timesUp = false;
	
	this._stripClubObs = new Game_Enemy(STRIPCLUB_OBS_ENEMY_ID, 0, 0, false, STRIPCLUB_OBS_ENEMY_ID);
	this._enemies.push(this._stripClubObs);
};

Game_Troop.prototype.calculateStripClubPatronsSpawnLimit = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let rep = $gameParty._stripClubReputation;
	
	let spawnLimit = 3;
	
	if(rep > 30) spawnLimit = 25 + Math.randomInt(($gameParty._stripClubReputation - 30) * 0.5);
	else if(rep <= 30) spawnLimit = 18 + (($gameParty._stripClubReputation - 20) * 0.7);
	else if(rep <= 15) spawnLimit = 3 + $gameParty._stripClubReputation;

	let spawnRate = 1;
	
	if(Karryn.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_THREE_ID)) {
		spawnLimit += 1;
		spawnRate += 0.2;
	}
	else if(Karryn.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_TWO_ID)) {
		spawnLimit += 1;
		spawnRate += 0.1;
	}
	else if(Karryn.hasEdict(EDICT_TAX_CLUB_CONDOM_IMPORTS)) {
		spawnRate -= 0.15;
	}
	
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) {
		spawnRate += 0.1;
	}
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) {
		spawnRate += 0.1;
	}
	
	if(Prison.prisonLevelThreeIsRioting()) {
		spawnLimit -= 2;
		spawnRate -= 0.2;
	}
	
	if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN)) {
		spawnRate += 0.1;
	}
	else if(Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN)) {
		spawnLimit -= 1;
		spawnRate -= 0.1;
	}
	
	if($gameSwitches.value(SWITCH_TODAY_WAITRESS_BATTLE_ID)) {
		spawnRate += 0.1;
	}
	
	if($gameParty.isNightMode()) {
		spawnLimit += 1;
		spawnRate *= 1.25;
	}
	
	spawnRate *= $gameParty._stripperBattle_battleTimeLimitBasedMaxSpawnMultipler;

	this._stripClubPatronsSpawnLimit = Math.max(2, Math.ceil(spawnLimit * spawnRate));
};

Game_Troop.prototype.setup_stripperBattle_patron = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		if(!wanted.enemyTypeIsBoss())
			enemyId = wanted._enemyId;
	}
	
	let seatId = -1;
	while(seatId === -1) {
		randomNum = Math.randomInt(this._stripClubSeats.length);
		if(this._stripClubSeats[randomNum] === false) {
			seatId = randomNum;
		}
	}
	
	let x = ENEMY_NAME_STARTING_X;
	let y = ENEMY_NAME_STARTING_Y;
	
	switch (seatId) {
	case STRIP_CLUB_SEAT_LEFT_A:
		x = STRIP_CLUB_LEFT_SEAT_A_X;
		y = STRIP_CLUB_SEAT_A_Y;
		break;
	case STRIP_CLUB_SEAT_LEFT_B:
		x = STRIP_CLUB_LEFT_SEAT_B_X;
		y = STRIP_CLUB_SEAT_B_Y;
		break;
	case STRIP_CLUB_SEAT_LEFT_C:
		x = STRIP_CLUB_LEFT_SEAT_C_X;
		y = STRIP_CLUB_SEAT_C_Y;
		break;
	case STRIP_CLUB_SEAT_LEFT_D:
		x = STRIP_CLUB_LEFT_SEAT_D_X;
		y = STRIP_CLUB_SEAT_D_Y;
		break;
	case STRIP_CLUB_SEAT_LEFT_E:
		x = STRIP_CLUB_LEFT_SEAT_E_X;
		y = STRIP_CLUB_SEAT_E_Y;
		break;
	case STRIP_CLUB_SEAT_RIGHT_A:
		x = STRIP_CLUB_RIGHT_SEAT_A_X;
		y = STRIP_CLUB_SEAT_A_Y;
		break;
	case STRIP_CLUB_SEAT_RIGHT_B:
		x = STRIP_CLUB_RIGHT_SEAT_B_X;
		y = STRIP_CLUB_SEAT_B_Y;
		break;
	case STRIP_CLUB_SEAT_RIGHT_C:
		x = STRIP_CLUB_RIGHT_SEAT_C_X;
		y = STRIP_CLUB_SEAT_C_Y;
		break;
	case STRIP_CLUB_SEAT_RIGHT_D:
		x = STRIP_CLUB_RIGHT_SEAT_D_X;
		y = STRIP_CLUB_SEAT_D_Y;
		break;
	case STRIP_CLUB_SEAT_RIGHT_E:
		x = STRIP_CLUB_RIGHT_SEAT_E_X;
		y = STRIP_CLUB_SEAT_E_Y;
		break;
	}
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	enemy._stripClubSeatId = seatId;
	this._stripClubSeats[seatId] = enemy;
	this._enemies.push(enemy);
	enemy.setupForStripperBattle();
	
	return enemy;
};

Game_Troop.prototype.stripperBattle_startingPatrons = function() {
	let patrons = [];
	let startingNum = this._stripClubPatronsSpawnLimit;
	
	startingNum = Math.min(startingNum, STRIP_CLUB_TOTAL_SEATS);
	
	for(let i = 0; i < startingNum; ++i) {
		patrons.push(this.stripperBattle_validEnemyId());
	}
	
	return patrons;
};

Game_Troop.prototype.stripperBattle_validEnemyId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [ 192 ];
	let clubRep = $gameParty._stripClubReputation;
	
	//Lizardman
	if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN)) {
		validEnemyTypes.push(193);
		validEnemyTypes.push(193);
		validEnemyTypes.push(194);
		validEnemyTypes.push(194);
		validEnemyTypes.push(195);
		validEnemyTypes.push(196);
	}
	else if(!Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN)) {
		validEnemyTypes.push(191);
		validEnemyTypes.push(193);
	}
	
	if(clubRep >= 5) {
		validEnemyTypes.push(192);
	}
	if(clubRep >= 9) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID))
			validEnemyTypes.push(193);
	}
	if(clubRep >= 13) {
		validEnemyTypes.push(194);
	}
	
	
	//Prisoner
	if(clubRep >= 2) {
		validEnemyTypes.push(52);
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) {
			validEnemyTypes.push(54);
			validEnemyTypes.push(51);
		}
		
		if(clubRep >= 7) 
			validEnemyTypes.push(53);
	}
	
	//Guards
	if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID) && clubRep >= 8) {
		let guardAggr = Prison.guardAggression;
		if(guardAggr >= 20) {
			validEnemyTypes.push(ENEMY_ID_GUARD_LV4);
			validEnemyTypes.push(ENEMY_ID_GUARD_LV5);
			if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
				validEnemyTypes.push(ENEMY_ID_GUARD_LV6);
			if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
				validEnemyTypes.push(ENEMY_ID_GUARD_LV6);
		}
		else if(guardAggr >= 12) {
			validEnemyTypes.push(ENEMY_ID_GUARD_LV2);
			validEnemyTypes.push(ENEMY_ID_GUARD_LV3);
			if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
				validEnemyTypes.push(ENEMY_ID_GUARD_LV5);
		}
		else {
			validEnemyTypes.push(ENEMY_ID_GUARD_LV1);
			validEnemyTypes.push(ENEMY_ID_GUARD_LV2);
			if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
				validEnemyTypes.push(ENEMY_ID_GUARD_LV4);
		}
	}
	else if(clubRep >= 14) {
		validEnemyTypes.push(ENEMY_ID_GUARD_LV1);
		validEnemyTypes.push(ENEMY_ID_GUARD_LV2);
		if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
			validEnemyTypes.push(ENEMY_ID_GUARD_LV5);
	}
	
	//Orcs
	if(clubRep >= 4) {
		validEnemyTypes.push(181);
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID))
			validEnemyTypes.push(182);
		if(Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
			validEnemyTypes.push(183);
		if(clubRep >= 12)
			validEnemyTypes.push(184);
	}
	
	//Homeless
	if(clubRep >= 10 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) {
		validEnemyTypes.push(212);
		validEnemyTypes.push(213);
	}
	
	//Thug
	if(clubRep >= 6) {
		if(Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
			validEnemyTypes.push(94);
		}
		else if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
			validEnemyTypes.push(92);
			validEnemyTypes.push(95);
		}
		
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID))
			validEnemyTypes.push(93);
	}
	
	//Goblin
	if(clubRep >= 12) {
		if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) {
			validEnemyTypes.push(82);
			validEnemyTypes.push(83);
		}
		else if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
			validEnemyTypes.push(81);
		}
		
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID))
			validEnemyTypes.push(84);
	}
	
	//Rogue
	if(clubRep >= 14) {
		if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) {
			
		}
		else if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
			validEnemyTypes.push(141);
			validEnemyTypes.push(142);
			validEnemyTypes.push(143);
		}
		else {
			validEnemyTypes.push(141);
		}
		
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID))
			validEnemyTypes.push(144);
	}
	
	//Nerd
	if(clubRep >= 16) {
		if(Karryn.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {
			validEnemyTypes.push(122);
			validEnemyTypes.push(123);
		}
		else if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
			validEnemyTypes.push(121);
			validEnemyTypes.push(122);
			validEnemyTypes.push(123);
		}
		else {
			validEnemyTypes.push(121);
		}
		
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID))
			validEnemyTypes.push(121);
	}
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};

Game_Troop.prototype.stripperBattle_activePatrons = function() {
	return this.members().filter(function(member) {
        return member.isAppeared() && !member.isDeathStateAffected() && member.enemyType() !== ENEMYTYPE_STRIPCLUB_OBS_TAG;
    });
};
Game_Troop.prototype.stripperBattle_validPatronsToInviteForVIP = function() {
	return this.members().filter(function(member) {
        return member.isAppeared() && !member.isDeathStateAffected() && member.enemyType() !== ENEMYTYPE_STRIPCLUB_OBS_TAG && !member.hasNoMoreEjaculationStockOrEnergy() && member._stripClub_isExcited;
    });
};

Game_Troop.prototype.stripperBattle_noMorePatrons = function() {
	return this.stripperBattle_activePatrons().length === 0 && this._stripClubPatronsSpawnedCount >= this._stripClubPatronsSpawnLimit;
};

Game_Troop.prototype.stripperBattle_refreshRequestPictures = function() {
	for(let i = 0; i < this._stripClubSeats.length; ++i) {
		let pictureId = -1;
		switch (i) {
			case 0:
				pictureId = PICTURE_BATTLE_0_ID;
				break;
			case 1:
				pictureId = PICTURE_BATTLE_1_ID;
				break;
			case 2:
				pictureId = PICTURE_BATTLE_2_ID;
				break;	
			case 3:
				pictureId = PICTURE_BATTLE_3_ID;
				break;
			case 4:
				pictureId = PICTURE_BATTLE_4_ID;
				break;	
			case 5:
				pictureId = PICTURE_BATTLE_5_ID;
				break;
			case 6:
				pictureId = PICTURE_BATTLE_6_ID;
				break;	
			case 7:
				pictureId = PICTURE_BATTLE_7_ID;
				break;
			case 8:
				pictureId = PICTURE_BATTLE_8_ID;
				break;	
			case 9:
				pictureId = PICTURE_BATTLE_9_ID;
				break;	
		}
		
		if(this._stripClubSeats[i]) {
			if(pictureId > -1) {
				let pictureName = false;
				let x = this._stripClubSeats[i]._screenX;
				let y = this._stripClubSeats[i]._screenY;
				let requestId = this._stripClubSeats[i].stripperBattle_danceRequestId();
				
				if(!this._stripClubSeats[i]._stripClub_activeRequest) {}
				else {
					if(requestId === STRIPPER_REQUEST_MOUTH_ID)
						pictureName = PICTURE_NAME_STRIP_CLUB_REQUEST_MOUTH;
					else if(requestId === STRIPPER_REQUEST_BOOBS_ID)
						pictureName = PICTURE_NAME_STRIP_CLUB_REQUEST_BOOBS;
					else if(requestId === STRIPPER_REQUEST_PUSSY_ID)
						pictureName = PICTURE_NAME_STRIP_CLUB_REQUEST_PUSSY;
					else if(requestId === STRIPPER_REQUEST_BUTT_ID)
						pictureName = PICTURE_NAME_STRIP_CLUB_REQUEST_BUTT;
					else if(requestId === STRIPPER_REQUEST_STRIP_ID)
						pictureName = PICTURE_NAME_STRIP_CLUB_REQUEST_STRIP;
					
				}
				
				
				if(pictureName) {
					if(i <= 4) {
						pictureName += PICTURE_NAME_STRIP_CLUB_REQUEST_LEFT;
						x += STRIP_CLUB_LEFT_SEAT_BALLOON_X;
					}
					else {
						pictureName += PICTURE_NAME_STRIP_CLUB_REQUEST_RIGHT;
						x += STRIP_CLUB_RIGHT_SEAT_BALLOON_X;
					}
					y += STRIP_CLUB_SEAT_BALLOON_Y;
					
					$gameScreen.showPicture(pictureId, pictureName, 0, x, y, 100, 100, 255, 0);
				}
				else {
					$gameScreen.erasePicture(pictureId);
				}
			}
		}
		else {
			if(pictureId > -1) {
				$gameScreen.erasePicture(pictureId);
			}
		}
	}
};


Game_Troop.prototype.onTurnEndSpecial_stripperBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let currentlyIntermissionPhase = $gameParty.stripperBattle_intermissionPhase();
	
	if(actor._stripper_preparingForVIP) {
		actor.startStripperSex();
	}
	else if(!actor.isInStripperSexPose()) {
		$gameTroop.stripperBattle_activePatrons().forEach(function(member) {
			if(!member._stripClub_activeRequest && !member._stripClub_isHoldingUsedCondom) {
				if(member._stripClub_isExcited || member._stripClub_turnsUntilNextRequest === 0) {
					member.stripperBattle_makeDanceRequest(actor);
				}
				else {
					member._stripClub_turnsUntilNextRequest--;
				}
			}
			else if(member._stripClub_activeRequest) {
				if(member._stripClub_currentRequestDurationLeft === 0) {
					member._stripClub_danceRequestId = 0;
					member._stripClub_activeRequest = false;
					member._stripClub_requestUnfulfilledCount++;
					
					if(member._stripClub_isExcited) {
						member._stripClub_turnsUntilNextRequest = 0;
						if(!member._stripClub_isHoldingUsedCondom)
							member.stripperBattle_makeDanceRequest(actor);
					}
					else {
						member._stripClub_turnsUntilNextRequest = 1;
						if(member._stripClub_fulfilledRequestsUntilExcited === 1)
							member._stripClub_fulfilledRequestsUntilExcited++;
					}
					if(member._stripClub_gracePeriod <= 0) {
						member.gainPleasure(-1 * member.getValueOfOrgasmFromPercent(STRIPPER_PATRON_UNFULFILLED_PLEASURE_LOST));
					}
					$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_IGNORED_REQUEST);
				}
				else {
					member._stripClub_currentRequestDurationLeft--;
				}
			}
			
			if(currentlyIntermissionPhase) {
				if(member._stripClub_turnsInIntermission > 0) {
					if(member._stripClub_gracePeriod <= 0) {
						member.gainPleasure(-1 * member.getValueOfOrgasmFromPercent(STRIPPER_PATRON_INTERMISSION_PLEASURE_LOST));
					}
				}
				member._stripClub_turnsInIntermission++;
			}
			
			if(!member._stripClub_isExcited && (member._stripClub_fulfilledRequestsUntilExcited <= 0 || member.isTwoThirdsWayToOrgasm()) && !member.hasNoMoreEjaculationStockOrEnergy()) {
				member._stripClub_isExcited = true;
				if(!member._stripClub_isFirstExcited) {
					member._stripClub_isFirstExcited = true;
					$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FIRST_EXCITE);
				}
			}
			else if(member._stripClub_isExcited && (!member.isAroused() || member.hasNoMoreEjaculationStockOrEnergy())) {
				member._stripClub_isExcited = false;
				member._stripClub_fulfilledRequestsUntilExcited = 2;
			}
			
			member._stripClub_gracePeriod--;
		});
		

		this.stripperBattle_refreshRequestPictures();
		
		if($gameParty.stripperBattle_getCurrentTimeInSeconds() >= $gameParty._stripperBattle_timeLimit || $gameTroop.stripperBattle_noMorePatrons()) {
			this._stripClub_timesUp = true;
		}
		
		//Spawn
		while(this._stripClubPatronsSpawnedCount < this._stripClubPatronsSpawnLimit && this._stripClubPatronsEnteredThisTurn < STRIPPER_PATRON_ENTER_LIMIT_PER_TURN && $gameParty.stripperBattle_getCurrentTimeInSeconds() > STRIPPER_PATRON_MAY_ENTER_TIME_LIMIT && this.stripperBattle_countEmptySeats() > 0) {
			let enemyId = this.stripperBattle_validEnemyId();
			let enemy = this.setup_stripperBattle_patron(enemyId);
			enemy.makeUniqueNames();
			enemy.setupEnemyPrefixEjaculationStockEffect();
			enemy.onBattleStart();
			enemy.midBattleSpawn_setupDreamX();
			SceneManager._scene._spriteset.addEnemy(enemy);
			this._stripClubPatronsSpawnedCount++;
			this._stripClubPatronsEnteredThisTurn++;
			BattleManager._logWindow.push('addText', TextManager.RemStripperEnemyEntersStripClub.format(enemy.displayName()));
			AudioManager.playSe({name:'+Waitress_Chair2', pan:0, pitch:100, volume:90});
		}
		
		this._stripClubPatronsEnteredThisTurn = 0;
		this._stripClubPatronsLeftThisTurn = 0;
		
		if(currentlyIntermissionPhase) {
			actor.enterMentalPhase();
		}
		else {
			actor.enterActionPhase();
		}
	}
	//Stripper Sex
	else {
		
	}
	
};


Game_Troop.prototype.stripperBattle_countEmptySeats = function() {
	let count = 0;
	
	for(let i = 0; i < this._stripClubSeats.length; ++i) {
		if(!this._stripClubSeats[i]) count++;
	}
	
	return count;
};


///////////
// Game Enemy
/////////////

//Setup
Game_Enemy.prototype.setupForStripperBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	this._stripClub_danceRequestId = 0;
	this._stripClub_activeRequest = false;
	this._stripClub_requestFulfilledCount = 0;
	this._stripClub_requestUnfulfilledCount = 0;
	this._stripClub_danceCombo = 0;
	this._stripClub_danceCharm = 0;
	this._stripClub_strippedClothesBonus = 0;
	this._stripClub_justSeenStripping = false;
	this._stripClub_isExcited = false;
	this._stripClub_isFirstExcited = false;
	this._stripClub_currentRequestDurationLeft = 0;
	this._stripClub_isHoldingUsedCondom = false;
	this._stripClub_turnsInIntermission = 0;
	this._stripClub_gracePeriod = STRIPPER_PATRON_STARTING_GRACE_PERIOD;
	this._stripClub_invitedToVIP = false;
	this._stripClub_turnsOverstaying = 0;
	this._stripClub_lastTalkSightSkillUsedTime = 0;
	
	this._stripClub_turnsUntilNextRequest = 1;
	if(this.hasHornyPrefix() || this.hasVirginPrefix() || this.hasSightPrefix()) {
		this._stripClub_turnsUntilNextRequest--;
	}
	else if(Math.randomInt(20) > $gameParty._stripClubReputation + 10) {
		this._stripClub_turnsUntilNextRequest++;
	}
	else if($gameParty._stripClubReputation >= 10 && Math.randomInt(50) < Math.min(30, $gameParty._stripClubReputation)) {
		this._stripClub_turnsUntilNextRequest--;
	}
	
	
	this._stripClub_fulfilledRequestsUntilExcited = 3;
	if(this.hasHornyPrefix() || this.hasDrunkPrefix() || this.hasSensitivePrefix() || this.hasVirginPrefix())
		this._stripClub_fulfilledRequestsUntilExcited--;
	else if(this.hasElitePrefix() || this.hasEnduringPrefix() || this.hasGoodPrefix() || this.hasMetalPrefix() || this.hasSightPrefix())
		this._stripClub_fulfilledRequestsUntilExcited++;
	else if(this.hasAngryPrefix())
		this._stripClub_fulfilledRequestsUntilExcited += 2;
	
	if((Math.randomInt(30) + 5) < $gameParty._stripClubReputation)
		this._stripClub_fulfilledRequestsUntilExcited--;
	
	if(Karryn.hasEdict(EDICT_TAX_CLUB_CONDOM_IMPORTS)) {
		$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_CONDOM_TAX);
	}
};

Game_Enemy.prototype.battlerName_stripperBattleSuffix = function() {
	suffixFileName = '';
	
	if(!this.hasNoMoreEjaculationStockOrEnergy()) {
		if(this._stripClub_isExcited || this.isTwoThirdsWayToOrgasm()) {
			suffixFileName = ENEMY_BATTLERNAME_BLUSH_SUFFIX;
		}
		else if(this._stripClub_activeRequest && this._stripClub_fulfilledRequestsUntilExcited === 1) {
			suffixFileName = ENEMY_BATTLERNAME_CHARGE_SUFFIX;
		}
		else if(this._stripClub_gracePeriod <= 0 && this.currentPercentOfOrgasm() <= STRIPPER_PATRON_ANGRY_THRESHOLD && this._enemyTempRecordStripClubCondomEjaculationCount === 0) {
			suffixFileName = ENEMY_BATTLERNAME_ANGRY_SUFFIX;
		}
	}

	return suffixFileName;
};

Game_Enemy.prototype.stripperBattle_danceRequestId = function() {
	return this._stripClub_danceRequestId;
};
Game_Enemy.prototype.stripperBattle_makeDanceRequest = function(stripper) {
	let requestArray = [];
	if(this._stripClub_isExcited) {
		if(!stripper.isClothingMaxDamaged()) 
			requestArray.push(STRIPPER_REQUEST_STRIP_ID);
		if(stripper.isWearingPanties()) 
			requestArray.push(STRIPPER_REQUEST_STRIP_ID);
		if((!stripper.isInStripperMouthPose() || stripper.isInStripperStandby()) && (this.weaknessToBlowjob() > 1 || this.weaknessToKiss() > 1))
			requestArray.push(STRIPPER_REQUEST_MOUTH_ID);
		if(!stripper.isInStripperBoobsPose() && (this.weaknessToTittyFuck() > 1 || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID)))
			requestArray.push(STRIPPER_REQUEST_BOOBS_ID);
		if(!stripper.isInStripperPussyPose() && (this.weaknessToPussy() > 1))
			requestArray.push(STRIPPER_REQUEST_PUSSY_ID);
		if(!stripper.isInStripperButtPose() && (this.weaknessToAnal() > 1 || this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID)))
			requestArray.push(STRIPPER_REQUEST_BUTT_ID);
	}
	
	if((!stripper.isInStripperMouthPose() || stripper.isInStripperStandby()) && this._aiPoseJoinSkills.includes(SKILL_ENEMY_POSEJOIN_MOUTH_ID))
		requestArray.push(STRIPPER_REQUEST_MOUTH_ID);
	if(!stripper.isInStripperBoobsPose() && this._aiPoseJoinSkills.includes(SKILL_ENEMY_POSEJOIN_BOOBS_ID))
		requestArray.push(STRIPPER_REQUEST_BOOBS_ID);
	if(!stripper.isInStripperPussyPose() && this._aiPoseJoinSkills.includes(SKILL_ENEMY_POSEJOIN_PUSSY_ID))
		requestArray.push(STRIPPER_REQUEST_PUSSY_ID);
	if(!stripper.isInStripperButtPose() && this._aiPoseJoinSkills.includes(SKILL_ENEMY_POSEJOIN_ANAL_ID))
		requestArray.push(STRIPPER_REQUEST_BUTT_ID);
	
	if(requestArray.length === 0) {
		if((!stripper.isInStripperMouthPose() || stripper.isInStripperStandby()) && (this.weaknessToBlowjob() >= 1 || this.weaknessToKiss() >= 1))
			requestArray.push(STRIPPER_REQUEST_MOUTH_ID);
		if(!stripper.isInStripperBoobsPose() && (this.weaknessToTittyFuck() >= 1 || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID)))
			requestArray.push(STRIPPER_REQUEST_BOOBS_ID);
		if(!stripper.isInStripperPussyPose() && (this.weaknessToPussy() >= 1))
			requestArray.push(STRIPPER_REQUEST_PUSSY_ID);
		if(!stripper.isInStripperButtPose() && (this.weaknessToAnal() >= 1 || this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID)))
			requestArray.push(STRIPPER_REQUEST_BUTT_ID);
	}
	
	if(requestArray.length > 0) {
		this._stripClub_danceRequestId = requestArray[Math.randomInt(requestArray.length)];
		this._stripClub_activeRequest = true;
		if(this._stripClub_isExcited)
			this._stripClub_currentRequestDurationLeft = 2;
		else
			this._stripClub_currentRequestDurationLeft = 1;
	}
};

Game_Enemy.prototype.stripperBattle_increaseDanceCombo = function(stripper) {
	this._stripClub_danceCombo++;
	if(this._stripClub_danceCombo === 1)
		this._stripClub_danceCharm = stripper.inBattleCharm;
};
Game_Enemy.prototype.stripperBattle_resetDanceCombo = function() {
	this._stripClub_danceCombo = 0;
	this._stripClub_danceCharm = 0;
};

Game_Enemy.prototype.stripperBattle_watchShow = function(stripper) {
	if(this._stripClub_danceCombo === 0 || this._stripClub_danceCharm === 0) return;
	
	let danceCombo = Math.max(0, this._stripClub_danceCombo - 1);
	let danceCharm = this._stripClub_danceCharm + this._stripClub_strippedClothesBonus + stripper.stripperBattle_condomCharmBonus();
	let requestedShow = false;
	let requestId = this.stripperBattle_danceRequestId();
	let justSeenStripping = this._stripClub_justSeenStripping;
	
	if(justSeenStripping) {
		this._stripClub_justSeenStripping = false;
		if(requestId === STRIPPER_REQUEST_STRIP_ID) {
			requestedShow = true;
			this._stripClub_activeRequest = false;
			this._stripClub_requestFulfilledCount++;
			this._stripClub_turnsUntilNextRequest = 1;
			this._stripClub_fulfilledRequestsUntilExcited--;
			$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FULFILLED_REQUEST);
			this._stripClub_gracePeriod++;
		}
		else if(this._stripClub_activeRequest) {
			this._stripClub_currentRequestDurationLeft++;
		}
	}
	else if(this._stripClub_activeRequest) {
		if(requestId === STRIPPER_REQUEST_MOUTH_ID) {
			if(stripper.isInStripperMouthPose() && !stripper.isInStripperStandby()) {
				requestedShow = true;
				this._stripClub_danceRequestId = 0;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
				this._stripClub_turnsUntilNextRequest = 1;
				this._stripClub_fulfilledRequestsUntilExcited--;
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FULFILLED_REQUEST);
				this._stripClub_gracePeriod++;
			}
		}
		else if(requestId === STRIPPER_REQUEST_BOOBS_ID) {
			if(stripper.isInStripperBoobsPose()) {
				requestedShow = true;
				this._stripClub_danceRequestId = 0;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
				this._stripClub_turnsUntilNextRequest = 1;
				this._stripClub_fulfilledRequestsUntilExcited--;
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FULFILLED_REQUEST);
				this._stripClub_gracePeriod++;
			}
		}
		else if(requestId === STRIPPER_REQUEST_PUSSY_ID) {
			if(stripper.isInStripperPussyPose()) {
				requestedShow = true;
				this._stripClub_danceRequestId = 0;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
				this._stripClub_turnsUntilNextRequest = 1;
				this._stripClub_fulfilledRequestsUntilExcited--;
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FULFILLED_REQUEST);
				this._stripClub_gracePeriod++;
			}
		}
		else if(requestId === STRIPPER_REQUEST_BUTT_ID) {
			if(stripper.isInStripperButtPose()) {
				requestedShow = true;
				this._stripClub_danceRequestId = 0;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
				this._stripClub_turnsUntilNextRequest = 1;
				this._stripClub_fulfilledRequestsUntilExcited--;
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_FULFILLED_REQUEST);
				this._stripClub_gracePeriod++;
			}
		}
	}
	
	let pleasureDamage = 0;
	let stripperDamage = 0;
	
	if(!requestedShow && !justSeenStripping) {
		pleasureDamage = danceCharm * (1 + danceCombo * 0.15);
		pleasureDamage = Math.max(pleasureDamage * 0.25, pleasureDamage - this.charm);
		stripper.gainCharmExp(2, this.enemyExperienceLvl());
	}
	else {
		//enemy pleasure damage
		pleasureDamage = danceCharm;
		
		let desireBonus = stripper.cockDesire * STRIPPER_COCK_DESIRE_EFFECT;
		
		if(justSeenStripping) {
			desireBonus += stripper.mouthDesire * STRIPPER_BODY_DESIRE_EFFECT;
			desireBonus += stripper.boobsDesire * STRIPPER_BODY_DESIRE_EFFECT;
			desireBonus += stripper.pussyDesire * STRIPPER_BODY_DESIRE_EFFECT;
			desireBonus += stripper.buttDesire * STRIPPER_BODY_DESIRE_EFFECT;
		}
		else if(requestId === STRIPPER_REQUEST_MOUTH_ID) {
			desireBonus += stripper.mouthDesire * STRIPPER_BODY_DESIRE_EFFECT;
			desireBonus += stripper.boobsDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.pussyDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.buttDesire * STRIPPER_OTHER_DESIRE_EFFECT;
		}
		else if(requestId === STRIPPER_REQUEST_BOOBS_ID) {
			desireBonus += stripper.mouthDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.boobsDesire * STRIPPER_BODY_DESIRE_EFFECT;
			desireBonus += stripper.pussyDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.buttDesire * STRIPPER_OTHER_DESIRE_EFFECT;
		}
		else if(requestId === STRIPPER_REQUEST_PUSSY_ID) {
			desireBonus += stripper.mouthDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.boobsDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.pussyDesire * STRIPPER_BODY_DESIRE_EFFECT;
			desireBonus += stripper.buttDesire * STRIPPER_OTHER_DESIRE_EFFECT;
		}
		else if(requestId === STRIPPER_REQUEST_BUTT_ID) {
			desireBonus += stripper.mouthDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.boobsDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.pussyDesire * STRIPPER_OTHER_DESIRE_EFFECT;
			desireBonus += stripper.buttDesire * STRIPPER_BODY_DESIRE_EFFECT;
		}
		
		pleasureDamage *= (1 + desireBonus);
		pleasureDamage *= (1 + danceCombo * 0.4);
		pleasureDamage = Math.max(pleasureDamage * 0.75, pleasureDamage - this.charm);
		
		//stripper pleasure damage
		let stripperSightResist = stripper.elementRate(ELEMENT_SIGHT_ID);
		let stripperSightSensitivity = stripper.sightSensitivity();
		let sightSkillLvl = this.sightLvl();
		
		let stripperDesireGain = (BASEDMG_SIGHT + sightSkillLvl) * stripperSightResist;
		stripperDamage = (stripperDesireGain + (this.enemyLvl() * 0.75 * stripperSightResist)) * stripperSightSensitivity * (1 + sightSkillLvl * 0.1);
		if(stripperSightResist < 1) stripperDamage *= stripperSightResist;
		
		if(justSeenStripping) {
			stripper.gainRandomDesireWithCockWeight(stripperDesireGain * 0.5, 2, false);
		}
		else if(requestId === STRIPPER_REQUEST_MOUTH_ID) {
			stripper.gainMouthDesire(stripperDesireGain * 0.5, false, false);
			this.addToEnemySawMouthRecord(stripper);
		}
		else if(requestId === STRIPPER_REQUEST_BOOBS_ID) {
			stripper.gainBoobsDesire(stripperDesireGain * 0.5, false, false);
			this.addToEnemySawBoobsRecord(stripper);
		}
		else if(requestId === STRIPPER_REQUEST_PUSSY_ID) {
			stripper.gainPussyDesire(stripperDesireGain * 0.5, false, false);
			this.addToEnemySawPussyRecord(stripper);
		}
		else if(requestId === STRIPPER_REQUEST_BUTT_ID) {
			stripper.gainButtDesire(stripperDesireGain * 0.5, false, false);
			this.addToEnemySawButtRecord(stripper);
		}
		
		this.addToEnemySawCountRecord(stripper);
		stripper.gainCharmExp(13, this.enemyExperienceLvl());
	}
	
	if(pleasureDamage > 0) {
		let variance = pleasureDamage * 0.15;
		pleasureDamage += Math.randomInt(variance) - Math.randomInt(variance);
		this.gainPleasure(Math.round(pleasureDamage), true);
	}
	
	if(stripperDamage > 0) {
		let variance = stripperDamage * 0.15;
		stripperDamage += Math.randomInt(variance) - Math.randomInt(variance);
		stripper.increaseStripperBattleBonusPptSightValueCache(Math.round(stripperDamage));
	}
	
};

Game_Enemy.prototype.stripperBattle_talkSight = function(stripper) {
	if(this.isStateAffected(STATE_PATRON_JUST_GOT_RID_OF_CONDOM_ID) || this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID) || stripper.isInStripperSexPose() || $gameParty.stripperBattle_getCurrentTimeInSeconds() < this._stripClub_lastTalkSightSkillUsedTime + STRIPPER_PATRON_TALKSIGHT_SKILL_COOLDOWN)
		return;

	let talkSightSkillsArray = [];
	let skillUseChance = 0;
	
	if(this._stripClub_isExcited) 
		skillUseChance += 0.25;
	if(this.isHorny || this.hasHornyPrefix())
		skillUseChance += 0.15;
	if(this.hasVirginPrefix() || this.hasDrunkPrefix())
		skillUseChance += 0.2;
	
	
	if($gameParty.stripperBattle_intermissionPhase()) {
		if(this._stripClub_activeRequest) {
			if(this._stripClub_danceRequestId === STRIPPER_REQUEST_MOUTH_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_TALK_SELECTOR_MOUTH_ID);
			else if(this._stripClub_danceRequestId === STRIPPER_REQUEST_BOOBS_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_TALK_SELECTOR_BOOBS_ID);
			else if(this._stripClub_danceRequestId === STRIPPER_REQUEST_PUSSY_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_TALK_SELECTOR_PUSSY_ID);
			else if(this._stripClub_danceRequestId === STRIPPER_REQUEST_BUTT_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_TALK_SELECTOR_BUTT_ID);
			else
				talkSightSkillsArray.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_ID);
			
			skillUseChance += 0.15;
		}
		else {
			talkSightSkillsArray.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_ID);
		}
		
		if(this.hasTalkPrefix() || this.talkLvl() > 1)
			skillUseChance += 0.2;
	}
	else if(stripper.justOrgasmed()) {
		if(this._stripClub_activeRequest) {
			if(this._stripClub_danceRequestId === STRIPPER_REQUEST_MOUTH_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_STARE_SELECTOR_MOUTH_ID);
			else if(this._stripClub_danceRequestId === STRIPPER_REQUEST_BOOBS_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_STARE_SELECTOR_BOOBS_ID);
			else if(this._stripClub_danceRequestId === STRIPPER_REQUEST_PUSSY_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_STARE_SELECTOR_PUSSY_ID);
			else if(this._stripClub_danceRequestId === STRIPPER_REQUEST_BUTT_ID)
				talkSightSkillsArray.push(SKILL_ENEMY_STARE_SELECTOR_BUTT_ID);
			else
				talkSightSkillsArray.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID);
			
			skillUseChance += 0.15;
		}
		else {
			talkSightSkillsArray.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID);
		}
		
		if(this.hasSightPrefix() || this.sightLvl() > 1)
			skillUseChance += 0.2;
	}
	
	if(Math.random() < skillUseChance) {
		let success = false;
		while(talkSightSkillsArray.length > 0 && !success) {
			let index = Math.randomInt(talkSightSkillsArray.length);
			let skillId = talkSightSkillsArray.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], stripper);
			if(success) {
				this.useAISkill(skillId, stripper);
				this.setUsedSkillThisTurn(true);
				this._stripClub_lastTalkSightSkillUsedTime = $gameParty.stripperBattle_getCurrentTimeInSeconds();
				return;
			}
		}
	}
};

Game_Enemy.prototype.stripperBattle_getRidOfCondom = function(stripper) {
	if(this._stripClub_isHoldingUsedCondom) {
		let areaArray = [];
		
		if(!stripper.isInStripperSexPose()){
			areaArray.push(STRIPPER_CONDOM_STAGE_AREA_ID);
		}
		
		if(stripper.stripperBattle_canAddCondomToBelt()) {
			areaArray.push(STRIPPER_CONDOM_BELT_AREA_ID);
			if(stripper.isInStripperPussyPose()) {
				areaArray.push(STRIPPER_CONDOM_BELT_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_BELT_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_BELT_AREA_ID);
			}
		}
		if(stripper.stripperBattle_canAddCondomToButt()) {
			areaArray.push(STRIPPER_CONDOM_BUTT_AREA_ID);
			if(stripper.isInStripperButtPose()) {
				areaArray.push(STRIPPER_CONDOM_BUTT_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_BUTT_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_BUTT_AREA_ID);
			}
		}
		if(stripper.stripperBattle_canAddCondomToBra()) {
			areaArray.push(STRIPPER_CONDOM_BRA_AREA_ID);
			if(stripper.isInStripperBoobsPose()) {
				areaArray.push(STRIPPER_CONDOM_BRA_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_BRA_AREA_ID);
			}
		}
		if(stripper.stripperBattle_canAddCondomToNipples()) {
			areaArray.push(STRIPPER_CONDOM_NIPPLES_AREA_ID);
			if(stripper.isInStripperBoobsPose()) {
				areaArray.push(STRIPPER_CONDOM_NIPPLES_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_NIPPLES_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_NIPPLES_AREA_ID);
			}
		}
		if(stripper.stripperBattle_canAddCondomToHead()) {
			areaArray.push(STRIPPER_CONDOM_HEAD_AREA_ID);
			if(stripper.isInStripperMouthPose()) {
				areaArray.push(STRIPPER_CONDOM_HEAD_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_HEAD_AREA_ID);
				areaArray.push(STRIPPER_CONDOM_HEAD_AREA_ID);
			}
		}
		
		if(areaArray.length > 0) {
			let areaId = areaArray[Math.randomInt(areaArray.length)];
			let msgTxt = '';
			
			if(areaId === STRIPPER_CONDOM_STAGE_AREA_ID) {
				msgTxt = TextManager.RemStripperEnemyTossCondomOntoStage;
				stripper._stripper_stageCondomCount++;
				stripper.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TOSSED_CONDOM_STAGE);
			}
			else if(areaId === STRIPPER_CONDOM_BELT_AREA_ID) {
				msgTxt = TextManager.RemStripperEnemyTipsCondomToBelt;
				stripper._stripper_beltCondomCount++;
				stripper.addToStripperBattleCondomWornRecord();
				stripper.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_TIPPING_CONDOM);
			}
			else if(areaId === STRIPPER_CONDOM_BUTT_AREA_ID) {
				msgTxt = TextManager.RemStripperEnemyTipsCondomToBelt;
				stripper._stripper_buttCondomCount++;
				stripper.addToStripperBattleCondomWornRecord();
				stripper.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_TIPPING_CONDOM);
			}
			else if(areaId === STRIPPER_CONDOM_BRA_AREA_ID) {
				msgTxt = TextManager.RemStripperEnemyTipsCondomToBra;
				stripper._stripper_braCondomCount++;
				stripper.addToStripperBattleCondomWornRecord();
				stripper.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_TIPPING_CONDOM);
			}
			else if(areaId === STRIPPER_CONDOM_NIPPLES_AREA_ID) {
				msgTxt = TextManager.RemStripperEnemyTipsCondomToNipple;
				stripper._stripper_nipplesCondomCount++;
				stripper.addToStripperBattleCondomWornRecord();
				stripper.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_TIPPING_CONDOM);
			}
			else if(areaId === STRIPPER_CONDOM_HEAD_AREA_ID) {
				if(stripper._stripper_headCondomCount < 2)
					msgTxt = TextManager.RemStripperEnemyTipsCondomToSidetail;
				else
					msgTxt = TextManager.RemStripperEnemyTipsCondomToHairband;
				stripper._stripper_headCondomCount++;
				stripper.addToStripperBattleCondomWornRecord();
				stripper.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_GAIN_FROM_TIPPING_CONDOM);
			}
			
			BattleManager._logWindow.push('addText', msgTxt.format(this.displayName(), stripper.displayName()));
			AudioManager.playSe({name:'+Condom1', pan:0, pitch:100, volume:90});

			this._stripClub_isHoldingUsedCondom = false;
			this.addState(STATE_PATRON_JUST_GOT_RID_OF_CONDOM_ID);
			
			stripper.stripperBattle_recalculateWornCondomTotal();
			stripper.emoteMasterManager_StripperBattle();
			
			$gameParty.stripClub_getCutOfCondomTip();
			
			if(areaId !== STRIPPER_CONDOM_STAGE_AREA_ID) {
				BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_CONDOM_WEAR);
			}
		}
		else {
			this._stripClub_isHoldingUsedCondom = false;
		}
	}
};

Game_Enemy.prototype.stripperBattle_leavesStripClub = function(displayMsgSound, leavesHappy) {
	if(displayMsgSound) {
		if(leavesHappy)
			BattleManager._logWindow.push('addText', TextManager.RemStripperEnemyLeavesStripClubHappy.format(this.displayName()));
		else
			BattleManager._logWindow.push('addText', TextManager.RemStripperEnemyLeavesStripClubUnhappy.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
	}
	
	let pictureId = -1;
	switch (this._stripClubSeatId) {
		case 0:
			pictureId = PICTURE_BATTLE_0_ID;
			break;
		case 1:
			pictureId = PICTURE_BATTLE_1_ID;
			break;
		case 2:
			pictureId = PICTURE_BATTLE_2_ID;
			break;	
		case 3:
			pictureId = PICTURE_BATTLE_3_ID;
			break;
		case 4:
			pictureId = PICTURE_BATTLE_4_ID;
			break;	
		case 5:
			pictureId = PICTURE_BATTLE_5_ID;
			break;
		case 6:
			pictureId = PICTURE_BATTLE_6_ID;
			break;	
		case 7:
			pictureId = PICTURE_BATTLE_7_ID;
			break;
		case 8:
			pictureId = PICTURE_BATTLE_8_ID;
			break;	
		case 9:
			pictureId = PICTURE_BATTLE_9_ID;
			break;	
	}
	if(pictureId > -1) {
		$gameScreen.erasePicture(pictureId);
	}
	
	$gameTroop._stripClubSeats[this._stripClubSeatId] = false;
	this.hide();
	this.clearActions();
    this.clearStates();
    //SoundManager.playEscape();
};

/////////////
// Stripper Battle AI
///////////
Game_Enemy.prototype.enemyBattleAIStripperShow = function(target) {
	if(this.enemyType() == ENEMYTYPE_STRIPCLUB_OBS_TAG) return;
	
	if($gameParty.stripperBattle_intermissionPhase()) {
		if(target._stripper_preparingForVIP) {
			if(!this._stripClub_invitedToVIP) {
				if(this._enemyTempRecordStripClubCondomEjaculationCount === 0) {
					$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_LEAVING_UNHAPPY);
					this.stripperBattle_leavesStripClub(true, false);
				}
				else {
					this.stripperBattle_leavesStripClub(true, true);
				}
			}
		}
		else {
			this.stripperBattle_getRidOfCondom(target);
			if($gameTroop._stripClubPatronsLeftThisTurn < STRIPPER_PATRON_LEAVE_LIMIT_PER_TURN) {
				if(this.hasNoMoreEjaculationStockOrEnergy()) {
					this.stripperBattle_leavesStripClub(true, true);
					$gameTroop._stripClubPatronsLeftThisTurn++;
					return;
				}
				else if(this._stripClub_gracePeriod <= 0 && this.currentPercentOfOrgasm() <= STRIPPER_PATRON_LEAVE_THRESHOLD) {
					if(this._enemyTempRecordStripClubCondomEjaculationCount === 0) {
						$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_LEAVING_UNHAPPY);
						this.stripperBattle_leavesStripClub(true, false);
					}
					else {
						this.stripperBattle_leavesStripClub(true, true);
					}
					$gameTroop._stripClubPatronsLeftThisTurn++;
					return;
				}
			}
			this.stripperBattle_talkSight(target);
		}
	}
	//Not intermission
	else {
		if(target._stripper_preparingForVIP) { 
			if(!this._stripClub_invitedToVIP) {
				if(this._enemyTempRecordStripClubCondomEjaculationCount === 0) {
					$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_LEAVING_UNHAPPY);
					this.stripperBattle_leavesStripClub(true, false);
				}
				else {
					this.stripperBattle_leavesStripClub(true, true);
				}
				return;
			}
			
		}
		
		this.stripperBattle_getRidOfCondom(target);
		this.stripperBattle_watchShow(target);
		this.checkForOrgasm();
		
		if(this._stripClub_gracePeriod <= 0 && this.currentPercentOfOrgasm() <= STRIPPER_PATRON_LEAVE_THRESHOLD && !this.hasNoMoreEjaculationStockOrEnergy() && $gameTroop._stripClubPatronsLeftThisTurn < STRIPPER_PATRON_LEAVE_LIMIT_PER_TURN && !this.isStateAffected(STATE_PATRON_JUST_GOT_RID_OF_CONDOM_ID) && !this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID)) {
			if(this._enemyTempRecordStripClubCondomEjaculationCount === 0) {
				$gameParty.increaseStripperPatronSatisfaction(STRIPPER_PATRON_SATISFACTION_LOST_FROM_LEAVING_UNHAPPY);
				this.stripperBattle_leavesStripClub(true, false);
			}
			else {
				this.stripperBattle_leavesStripClub(true, true);
			}
			$gameTroop._stripClubPatronsLeftThisTurn++;
			return;
		}
		else if(this.hasNoMoreEjaculationStockOrEnergy() && $gameTroop._stripClubPatronsLeftThisTurn < STRIPPER_PATRON_LEAVE_LIMIT_PER_TURN && !this.isStateAffected(STATE_PATRON_JUST_GOT_RID_OF_CONDOM_ID) && !target.justOrgasmed() && !this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID)) {
			let overstayingValue = this._stripClub_turnsOverstaying;
			if(this._stripClub_danceCombo === 0)
				overstayingValue *= 2;
			if($gameTroop._stripClubPatronsSpawnedCount < $gameTroop._stripClubPatronsSpawnLimit)
				overstayingValue *= 4;
			if(Math.randomInt(Math.min($gameParty._stripClubReputation + 5, 20)) < overstayingValue) {
				this.stripperBattle_leavesStripClub(true, true);
				$gameTroop._stripClubPatronsLeftThisTurn++;
			}
			return;
		}
		
		if(this.hasNoMoreEjaculationStockOrEnergy()) {
			this._stripClub_turnsOverstaying++;
		}
		
		this.stripperBattle_talkSight(target);
	}

};