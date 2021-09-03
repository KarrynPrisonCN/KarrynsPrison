var Remtairy = Remtairy || {};
Remtairy.KarrynStripper = Remtairy.KarrynStripper || {};

//敵の位置
const STRIP_CLUB_LEFT_SEAT_A_X = 140;
const STRIP_CLUB_LEFT_SEAT_B_X = 130;
const STRIP_CLUB_LEFT_SEAT_C_X = 115;
const STRIP_CLUB_LEFT_SEAT_D_X = 130;
const STRIP_CLUB_LEFT_SEAT_E_X = 140;
const STRIP_CLUB_RIGHT_SEAT_A_X = 1305;
const STRIP_CLUB_RIGHT_SEAT_B_X = 1315;
const STRIP_CLUB_RIGHT_SEAT_C_X = 1330;
const STRIP_CLUB_RIGHT_SEAT_D_X = 1315;
const STRIP_CLUB_RIGHT_SEAT_E_X = 1305;
const STRIP_CLUB_SEAT_A_Y = 245;
const STRIP_CLUB_SEAT_B_Y = 350;
const STRIP_CLUB_SEAT_C_Y = 460;
const STRIP_CLUB_SEAT_D_Y = 558;
const STRIP_CLUB_SEAT_E_Y = 660;
//敵のPleasureバーの位置
const STRIP_CLUB_ENEMY_PLEASURE_GAUGE_X = -1;
const STRIP_CLUB_ENEMY_PLEASURE_GAUGE_Y = 25;
//敵のBalloonの位置
const STRIP_CLUB_LEFT_SEAT_BALLOON_X = 100;
const STRIP_CLUB_RIGHT_SEAT_BALLOON_X = -175;
const STRIP_CLUB_SEAT_BALLOON_Y = -75;

const PICTURE_NAME_STRIP_CLUB_REQUEST_MOUTH = 'stripclub_request_mouth';
const PICTURE_NAME_STRIP_CLUB_REQUEST_BOOBS = 'stripclub_request_boobs';
const PICTURE_NAME_STRIP_CLUB_REQUEST_PUSSY = 'stripclub_request_pussy';
const PICTURE_NAME_STRIP_CLUB_REQUEST_BUTT = 'stripclub_request_butt';

const BATTLEBACK1_STRIPCLUB_STRIPPER_SHOW_NAME = 'Bar_waitress';
const BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME = 'Bar_waitress_sex';

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

const STRIPPER_SKILL_START = 1856;
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

const STRIPPER_REQUEST_MOUTH_ID = 2;
const STRIPPER_REQUEST_BOOBS_ID = 3;
const STRIPPER_REQUEST_PUSSY_ID = 4;
const STRIPPER_REQUEST_BUTT_ID = 5;
const STRIPPER_REQUEST_STRIP_ID = 6;

const STRIPPER_COCK_DESIRE_EFFECT = 0.002;
const STRIPPER_BODY_DESIRE_EFFECT = 0.005;
const STRIPPER_OTHER_DESIRE_EFFECT = 0.001;

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
	this.setIsInStripperBattleFlag(true);
	this.preBattleSetup();
	$gameMap.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SHOW_NAME, null);
	this._showTopRightTimeNumberFlag = true;
	this._stripperBattle_intermissionPhase = true;
	
	this.increaseFatigueGain(this._stripperBattle_baseFatigueGain);
	
	this._stripperBattle_currentTimeInSeconds = 0;
	
	actor.preStripperBattleSetup();
};

Game_Party.prototype.postStripperBattleCleanup  = function() {
	this.setIsInStripperBattleFlag(false);
	this._showTopRightTimeNumberFlag = false;
	$gameSwitches.setValue(SWITCH_TODAY_STRIPPER_BATTLE_ID, true);
	
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor.changeToWardenClothing();
	actor.clearStateCounters();
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
	if(minutes === 10) {
		this._stripperBattle_timeLimit = 600;
		this._stripperBattle_baseFatigueGain = 6;
		//this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	else if(minutes === 8) {
		this._stripperBattle_timeLimit = 480;
		this._stripperBattle_baseFatigueGain = 4;
		//this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1.1;
	}
	else if(minutes === 6) {
		this._stripperBattle_timeLimit = 360;
		this._stripperBattle_baseFatigueGain = 2;
		//this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	else if(minutes === 12) {
		this._stripperBattle_timeLimit = 720;
		this._stripperBattle_baseFatigueGain = 8;
		//this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	else if(minutes === 14) {
		this._stripperBattle_timeLimit = 840;
		this._stripperBattle_baseFatigueGain = 10;
		//this._receptionistBattle_battleTimeLimitBasedMaxGoblinSpawnCountMultipler = 1;
	}
	
	this._stripperBattle_timeLimit += 20;
	//debugging
	//this._stripperBattle_timeLimit = 360;
};

Object.defineProperty(Game_Party.prototype, "stripperBattleTimeChoice", {
	get: function () { 
		let choice = 0;
		let reputation = $gameParty._stripClubReputation;
		
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


Game_Party.prototype.stripperBattle_intermissionPhase = function() {
	return this._stripperBattle_intermissionPhase;
};

//////////
// Game Actor
///////////


Game_Actor.prototype.preStripperBattleSetup = function() {
	
	
	this.changeToStripperClothing();
	//this.takeOffGlovesAndHat();
	this.setStripperIntermissionPose();
	
	this.setupLiquids();
	this.setupDesires();
	this._stripperBonusPptSightValueCache = 0;
	this._stripper_danceCombo = 0;
	this._stripper_firstStageEntryThisBattle = false;
	this._stripper_stageCondomCount = 0;
	this._stripper_wornCondomTotalCount = 0;
	
	this._recordStripClubStripperBattleCount++;
	this._playthroughRecordStripClubStripperBattleCount++;
	
	
	this.clearCooldowns();
	this._cooldownTurns[SKILL_STRIPPER_EXIT_INTERMISSION_ID] = 0;
	
	
	this.removeState(STATE_CONFIDENT_ID);
};


Game_Actor.prototype.startStripperSex = function() {
	
	this.setStripperSexPose();
	
	this.stripOffPanties();
	this.stripOffClothing();
	
	this.removeState(STATE_DANCE_COMBO_COUNT_ID);
	this.removeState(STATE_STAGE_CONDOM_COUNTER_ID);
	this.clearStateCounters();
	
	//$gameParty.waitressBattle_advanceTimeBySeconds(1);
	$gameParty._showTopRightTimeNumberFlag = false;
	this._stripperBonusPptSightValueCache = 0;

	BattleManager.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME, null);

	BattleManager.playSpecialBgm_StripperSex();
	this._recordStripClubStripperSexCount++;
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
			if(!$gameParty.stripperBattle_intermissionPhase())
				passiveRate = 0.2;
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
	$gameTroop.aliveMembers().forEach(function(member) {
		member.stripperBattle_resetDanceCombo();
    });
};
Game_Actor.prototype.increaseStripperDanceCombo = function() {
	this._stripper_danceCombo++;
	if(this._stripper_danceCombo > this._recordStripClubStripperMaxDanceCombo) 
		this._recordStripClubStripperMaxDanceCombo = this._stripper_danceCombo;
	
	let stripper = this;
	$gameTroop.aliveMembers().forEach(function(member) {
		member.stripperBattle_increaseDanceCombo(stripper);
    });
	
	if(this._stripper_danceCombo >= 2) {
		if(!this.isStateAffected(STATE_DANCE_COMBO_COUNT_ID))
			this.addState(STATE_DANCE_COMBO_COUNT_ID);
		this.setStateCounter(STATE_DANCE_COMBO_COUNT_ID, this._stripper_danceCombo);
	}
};

//Ejaculation
Game_Actor.prototype.postDamage_ejaculation_stripperBattle = function(target, area, semen) {
	if(area == CUM_INTO_CONDOM) {
		this._recordStripClubCondomEjaculationCount++;
		this._playthroughRecordStripClubCondomEjaculationCount++;
		
		this._stripper_stageCondomCount++;
		this.addState(STATE_STAGE_CONDOM_COUNTER_ID);
		this.setStateCounter(STATE_STAGE_CONDOM_COUNTER_ID, this._stripper_stageCondomCount);
	}
};

//Orgasm
Game_Actor.prototype.postDamage_femaleOrgasm_stripperBattle = function(orgasmCount) {
	if(!this.isInStripperSexPose() && !$gameParty.stripperBattle_intermissionPhase()) {
		this._playthroughRecordStripClubStripperOrgasmOnStageCount++;
	}
};

/////
// Intermission Skills

Game_Actor.prototype.customReq_enterIntermissionPhase = function() {
	return this.stamina <= this.maxstamina * 0.5;
};
Game_Actor.prototype.stripperBattle_enterIntermissionPhase = function() {
	$gameParty._stripperBattle_intermissionPhase = true;
	this._stripperBonusPptSightValueCache = 0;
	this.setCooldown(SKILL_STRIPPER_EXIT_INTERMISSION_ID, 3);
	this.setStripperIntermissionPose();
	this.resetStripperDanceCombo();
	$gameTroop.aliveMembers().forEach(function(member) {
		member._stripClub_strippedClothesBonus = 0;
    });
	this.removeState(STATE_DANCE_COMBO_COUNT_ID);
	AudioManager.stopBgm();
	AudioManager.stopBgs();
};

Game_Actor.prototype.customReq_exitIntermissionPhase = function() {
	return this.stamina >= this.maxstamina * 0.75;
};
Game_Actor.prototype.stripperBattle_exitIntermissionPhase = function() {
	$gameParty._stripperBattle_intermissionPhase = false;
	this._stripperBonusPptSightValueCache = 0;
	this.setCooldown(SKILL_STRIPPER_ENTER_INTERMISSION_ID, 2);
	this.resetStripperDanceCombo();
	this.setStripperStandbyPose();
	
	BattleManager.playSpecialBgm_StripperShow();
	
	if(!this._stripper_firstStageEntryThisBattle) {
		BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_BATTLE_START);
		this._stripper_firstStageEntryThisBattle = true;
	}
};

Game_Actor.prototype.customReq_stripperBreather = function() {
	if(this.currentPercentOfStamina() < 100) return true;
	if($gameParty.stripperBattle_intermissionPhase() && this._cooldownTurns[SKILL_STRIPPER_EXIT_INTERMISSION_ID] > 0) return true;
	return false;
};
Game_Actor.prototype.cooldownEval_stripperBreather = function() {
	let cd = 5;
	//titles decrease
	return Math.max(1, cd);
};
Game_Actor.prototype.dmgFormula_stripperBreather = function() {
	let percent = Math.max(0.3, this.hrg * 4);
	let dmg = this.maxstamina * percent;
	return Math.round(dmg);
};
Game_Actor.prototype.afterEval_stripperBreather = function() {
	if(!$gameParty.stripperBattle_intermissionPhase()) {
		//title that won't reset
		this.resetStripperDanceCombo();
		this.setStripperStandbyPose();
	}
};

Game_Actor.prototype.customReq_stripperFixClothes = function() {
	if(this.isClothingAtMaxFixable() && this.isWearingPanties()) return false;
	return true;
};
Game_Actor.prototype.afterEval_stripperFixClothes = function() {
	this.restoreClothingDurability();
	this._wearingPanties = true;
};

Game_Actor.prototype.showEval_stripperWearCondom = function() {
	return this._stripper_stageCondomCount > 0;
};
Game_Actor.prototype.customReq_stripperWearCondom = function() {
	return this._stripper_stageCondomCount > 0;
};
Game_Actor.prototype.afterEval_stripperWearCondom = function() {
	//temp code todo
	let count = this._stripper_stageCondomCount;
	this._stripper_stageCondomCount -= count;
	
	this._stripper_wornCondomTotalCount = count;
	
	this._recordStripClubCondomWornCount += count;
	this._playthroughRecordStripClubCondomWornCount += count;
};

//////
// Stripper Skills

Game_Actor.prototype.skillCost_stripperDance = function(danceId) {
	let cost = Math.min(this.realMaxStamina * 0.05, 14 + this.level * 2.2);
	
	if(danceId === STRIPPER_REQUEST_MOUTH_ID) {
		cost *= (1 + this.mouthDesire * 0.001 + this.cockDesire * 0.0003);
		if(this.isInStripperMouthPose()) cost *= 0.4;
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
	
	return Math.round(cost);
};
Game_Actor.prototype.afterEval_stripperDance = function(danceId) {
	let samePose = false;
	
	if(danceId === STRIPPER_REQUEST_MOUTH_ID) {
		if(this.isInStripperMouthPose()) samePose = true;
		else this.setStripperMouthPose();
	}
	else if(danceId === STRIPPER_REQUEST_BOOBS_ID) {
		if(this.isInStripperBoobsPose()) samePose = true;
		else this.setStripperBoobsPose();
	}
	else if(danceId === STRIPPER_REQUEST_PUSSY_ID) {
		if(this.isInStripperPussyPose()) samePose = true;
		else this.setStripperPussyPose();
	}
	else if(danceId === STRIPPER_REQUEST_BUTT_ID) {
		if(this.isInStripperButtPose()) samePose = true;
		else this.setStripperButtPose();
	}
	
	if(!samePose || this._stripper_danceCombo === 0) {
		this.increaseStripperDanceCombo();
		this.gainStaminaExp(35, this.level);
	}
	else {
		this.gainStaminaExp(15, this.level);
	}
	
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
		this.damageClothing(CLOTHES_STRIPPER_START);
		if(this.isClothingMaxDamaged() && this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) {
			this.addToClothesStrippedRecord();
		}
	}
	
	this.increaseStripperDanceCombo();
	this.gainStaminaExp(25, this.level);
	
	$gameTroop.aliveMembers().forEach(function(member) {
		if(member._stripClub_danceCombo < 6) {
			member._stripClub_strippedClothesBonus += member._stripClub_danceCharm * (member._stripClub_danceCombo * 0.08);
		}
		else {
			member._stripClub_strippedClothesBonus += member._stripClub_danceCharm * (0.3 + member._stripClub_danceCombo * 0.02);
		}
		member._stripClub_justSeenStripping = true;
    });
	
	this.emoteMasterManager_StripperBattle();
};

////////////////
// Game Troop
////////////////

//////
// Setup

Game_Troop.prototype.setupStripperBattle = function(troopId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._stripClubSeats = [ false, false, false, false, false, false, false, false, false, false ];
	let patrons = this.stripperBattle_startingPatrons();

	//Enemies
	for(let i = 0; i < patrons.length; ++i) {
		let enemyId = patrons[i];
		let enemy = this.setup_stripperBattle_patron(enemyId);
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	
	//Spawn
	//this._nextEnemySpawnTimeLimit = BAR_SPAWN_INTERVAL;
	//this._nextEnemySpawnChance = BAR_BASE_SPAWN_CHANCE;
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
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let patrons = [];
	let startingNum = 0;
	let rep = $gameParty._stripClubReputation;
	
	if(rep >= 30) startingNum = 8 + Math.randomInt(4);
	else if(rep >= 20) startingNum = 7 + Math.randomInt(4);
	else if(rep >= 15) startingNum = 7 + Math.randomInt(3);
	else if(rep >= 10) startingNum = 6 + Math.randomInt(3);
	else if(rep >= 7) startingNum = 5 + Math.randomInt(3);
	else if(rep >= 4) startingNum = 5 + Math.randomInt(2);
	else if(rep >= 1) startingNum = 4 + Math.randomInt(2);
	else startingNum = 3;
	
	startingNum = 10; //todo remove
	
	startingNum = Math.min(startingNum, STRIP_CLUB_TOTAL_SEATS);
	
	for(let i = 0; i < startingNum; ++i) {
		patrons.push(this.stripperBattle_validEnemyId());
	}
	
	return patrons;
};

Game_Troop.prototype.stripperBattle_validEnemyId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [ 192, 193, 194 ];
	let stripClubRep = $gameParty._stripClubReputation;
	
	
	if(stripClubRep >= 8) {
		validEnemyTypes = validEnemyTypes.concat($gameParty.getGuardEnemyIds());
	}
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};

Game_Troop.prototype.onTurnEndSpecial_stripperBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let intermissionPhase = $gameParty.stripperBattle_intermissionPhase();
	
	//temp
	$gameTroop.aliveMembers().forEach(function(member) {
		if(!member._stripClub_activeRequest) {
			member._stripClub_danceRequestId = Math.randomInt(6) + 1;
			if(member._stripClub_danceRequestId >= 2 && member._stripClub_danceRequestId <= 5)
				member._stripClub_activeRequest = true;
		}
    });
	

	//temp
	for(let i = 0; i < this._stripClubSeats.length; ++i) {
		if(this._stripClubSeats[i]) {
			let pictureId = false;
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
			
			if(pictureId) {
				let pictureName = false;
				let x = this._stripClubSeats[i]._screenX;
				let y = this._stripClubSeats[i]._screenY;
				let requestId = this._stripClubSeats[i]._stripClub_danceRequestId;
				
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
				}
				
				
				
				if(pictureName) {
					if(i <= 4) {
						x += STRIP_CLUB_LEFT_SEAT_BALLOON_X;
					}
					else {
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
	}
	
	
	
	if(intermissionPhase) {
		actor.enterMentalPhase();
	}
	else {
		actor.enterActionPhase();
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
	this._stripClub_danceRequestId = 0;
	this._stripClub_activeRequest = false;
	this._stripClub_requestFulfilledCount = 0;
	this._stripClub_requestUnfulfilledCount = 0;
	this._stripClub_danceCombo = 0;
	this._stripClub_danceCharm = 0;
	this._stripClub_strippedClothesBonus = 0;
	this._stripClub_justSeenStripping = false;
};

Game_Enemy.prototype.battlerName_stripperBattleSuffix = function() {
	suffixFileName = '';

	if(this.isAroused()) {
		suffixFileName = ENEMY_BATTLERNAME_BLUSH_SUFFIX;
	}

	return suffixFileName;
};

Game_Enemy.prototype.stripperBattle_danceRequestId = function() {
	return this._stripClub_danceRequestId;
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
	let danceCharm = this._stripClub_danceCharm + this._stripClub_strippedClothesBonus;
	let requestedShow = false;
	let requestId = this._stripClub_danceRequestId;
	let justSeenStripping = this._stripClub_justSeenStripping;
	
	if(justSeenStripping) {
		this._stripClub_justSeenStripping = false;
		if(requestId === STRIPPER_REQUEST_STRIP_ID) {
			requestedShow = true;
			this._stripClub_activeRequest = false;
			this._stripClub_requestFulfilledCount++;
		}
	}
	else if(this._stripClub_activeRequest) {
		if(requestId === STRIPPER_REQUEST_MOUTH_ID) {
			if(stripper.isInStripperMouthPose()) {
				requestedShow = true;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
			}
		}
		else if(requestId === STRIPPER_REQUEST_BOOBS_ID) {
			if(stripper.isInStripperBoobsPose()) {
				requestedShow = true;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
			}
		}
		else if(requestId === STRIPPER_REQUEST_PUSSY_ID) {
			if(stripper.isInStripperPussyPose()) {
				requestedShow = true;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
			}
		}
		else if(requestId === STRIPPER_REQUEST_BUTT_ID) {
			if(stripper.isInStripperButtPose()) {
				requestedShow = true;
				this._stripClub_activeRequest = false;
				this._stripClub_requestFulfilledCount++;
			}
		}
	}
	
	let pleasureDamage = 0;
	let stripperDamage = 0;
	
	if(!requestedShow && !justSeenStripping) {
		pleasureDamage = danceCharm * (1 + danceCombo * 0.15);
		pleasureDamage = Math.max(0, pleasureDamage - this.charm);
		stripper.gainCharmExp(4, this.enemyExperienceLvl());
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
		pleasureDamage *= (1 + danceCombo * 0.33);
		pleasureDamage = Math.max(pleasureDamage * 0.33, pleasureDamage - this.charm);
		
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
		stripper.gainCharmExp(20, this.enemyExperienceLvl());
	}
	
	if(pleasureDamage > 0 && !this.hasNoMoreEjaculationStockOrEnergy()) {
		let variance = pleasureDamage * 0.15;
		pleasureDamage += Math.randomInt(variance) + Math.randomInt(variance) - variance;
		this.gainPleasure(Math.round(pleasureDamage), true);
	}
	
	if(stripperDamage > 0) {
		let variance = stripperDamage * 0.15;
		stripperDamage += Math.randomInt(variance) + Math.randomInt(variance) - variance;
		stripper.increaseStripperBattleBonusPptSightValueCache(Math.round(stripperDamage));
	}
	
};

/////////////
// Stripper Battle AI
///////////
Game_Enemy.prototype.enemyBattleAIStripperShow = function(target) {
	if($gameParty.stripperBattle_intermissionPhase()) {
		
		
		
	}
	//Not intermission
	else {
		this.stripperBattle_watchShow(target);
	}

};