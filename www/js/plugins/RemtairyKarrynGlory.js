var Remtairy = Remtairy || {};
Remtairy.KarrynGlory = Remtairy.KarrynGlory || {};

//敵の位置
const GLORYHOLE_POS_LEFT_X = 275;
const GLORYHOLE_POS_LEFT_Y = 402;
const GLORYHOLE_POS_RIGHT_X = 1135;
const GLORYHOLE_POS_RIGHT_Y = 402;

const BATTLEBACK1_GLORYHOLE_NAME = 'Toilet1';

//=============================================================================
 /*:
 * @plugindesc Karryn Glory
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const GLORY_SKILL_START = 1650;
const GLORY_SKILL_END = 1664;

const GLORY_CHANCE_OF_GUEST_IN_STALL_HEARING = 10;
const GLORY_CHANCE_OF_GUEST_AT_STALL_QUEUE_HEARING = 6;
const GLORY_CHANCE_OF_GUEST_AT_URINAL_HEARING = 2;
const GLORY_CHANCE_OF_GUEST_AT_URINAL_QUEUE_HEARING = 4;
const GLORY_CHANCE_OF_GUEST_AT_WASHING_QUEUE_HEARING = 1;

const GLORY_SPAWN_BASE_CHANCE = 5;
const GLORY_SPAWN_BASE_RANDOM_INT = 75;
const GLORY_SPAWN_RANDOM_INT_DEC_SINCE_LAST_SPAWN = 15;
const GLORY_SPAWN_EATERS_REP_LIMIT = 5;

const ENEMYTYPE_TOILET_OBS_TAG = 'toilet_obs';
const TOILET_OBS_ENEMY_ID = 38;

const GLORY_URINAL_A_ID = 2;
const GLORY_URINAL_B_ID = 3;
const GLORY_URINAL_C_ID = 4;
const GLORY_URINAL_D_ID = 5;
const GLORY_LEFT_STALL_ID = 6;
const GLORY_RIGHT_STALL_ID = 7;

const GLORY_FATIGUE_RECOVER_BASE = 2;
const GLORY_FATIGUE_RECOVER_RESTING = 0.2;
const GLORY_REST_TURNS = 10; //todo: change back to 5
const GLORY_MENTAL_PHASE_COOLDOWN = 3;

const GLORY_GUEST_ACTION_COOLDOWN = 2;
const GLORY_GUEST_BASE_PATIENCE = 8;
const GLORY_GUEST_SATISFACTION_GAIN_FROM_EMPTY_STOCK = 3;
const GLORY_GUEST_SATISFACTION_GAIN_FROM_FAVORED_SEX = 1;
const GLORY_GUEST_SATISFACTION_LOST_FROM_UNFAVORED_SEX = -1;
const GLORY_GUEST_SATISFACTION_LOST_FROM_NOT_GETTING_TO_HOLE = -2;
const GLORY_GUEST_SATISFACTION_LOST_FROM_NOT_EMPTY_STOCK = -4;

//////////
///////////////////
// Game Party
////////////////////
///////////////

Object.defineProperty(Game_Party.prototype, "isInGloryBattle", {
	get: function () { return this._isInGloryBattle; }, configurable: true
});
Game_Party.prototype.setIsInGloryBattleFlag = function(status) {
	this._isInGloryBattle = status;
};

Game_Party.prototype.preGloryBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this.preBattleSetup();
	$gameMap.changeBattleback(BATTLEBACK1_GLORYHOLE_NAME, null);
	this.setIsInGloryBattleFlag(true);
	
	this.increaseFatigueGain(GLORY_FATIGUE_RECOVER_BASE * -1, true)

	this._gloryBattle_guestSatisfaction = 0;
	
	actor.preGloryBattleSetup();
};
	

Game_Party.prototype.postGloryBattleCleanup = function() {
	this.setIsInGloryBattleFlag(false);
	$gameSwitches.setValue(SWITCH_TODAY_GLORYHOLE_BATTLE_ID, true);

	if(this._gloryBattle_guestSatisfaction > 0) {
		let addRep = 1;
		if(this._gloryReputation <= 10 && Math.randomInt(100) < this._gloryBattle_guestSatisfaction) addRep++;
		this.increaseGloryReputation(addRep);
		//$gameSwitches.setValue(SWITCH_TODAY_BAR_REP_UP_ID, true);
	}
	else if(this._gloryBattle_guestSatisfaction < 0) {
		let addRep = -1;
		if(Math.randomInt(100) < this._gloryBattle_guestSatisfaction * -1) addRep--;
		this.increaseGloryReputation(addRep);
	}

	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor.putOnGlovesAndHat();
	actor.changeToWardenClothing();
	
};	

Game_Party.prototype.applyEndOfBattleSpecial_gloryBattle = function() {
	for(let i = 0; i < $gameTroop._gloryWashingQueue.length; ++i) {
		$gameTroop._gloryWashingQueue[i].gloryBattle_pollSatisfaction(true);
	}
	for(let i = 0; i < $gameTroop._gloryStallQueue.length; ++i) {
		$gameTroop._gloryStallQueue[i].gloryBattle_pollSatisfaction(true);
	}
	if(this._gloryLeftStall) {
		this._gloryLeftStall.gloryBattle_pollSatisfaction(true);
	}
	if(this._gloryRightStall) {
		this._gloryRightStall.gloryBattle_pollSatisfaction(true);
	}
};

Game_Party.prototype.setGloryReputation = function(value) {
	let minGloryRep = 0;
	
	this._gloryReputation = Math.max(minGloryRep, value);
	$gameVariables.setValue(VARIABLE_GLORY_REPUTATION_ID, this._gloryReputation);
};
Game_Party.prototype.increaseGloryReputation = function(value) {
	this.setGloryReputation(this._gloryReputation + value);
};

Game_Party.prototype.increaseGloryGuestSatisfaction = function(value) {
	this._gloryBattle_guestSatisfaction += value;
};

////////////////
// Game Actor
////////////////

Game_Actor.prototype.preGloryBattleSetup = function() {
	this.preBattleSetup();
	this.setAsNoHalberdBattle();
	this.removeState(STATE_CONFIDENT_ID);
	this.takeOffPanties();
	this.removeClothing();
	
	this.setTachiePussyToyExtension_gloryBattle('left');
	this.setTachieAnalToyExtension_gloryBattle('right');
	this.setToiletSittingPose();
	this.setTachieLegs('close');
	
	this._gloryBattle_restingTilTurn = -1;
	this._gloryBattle_turnsTillMentalPhase = 0;
	this._gloryBattle_cocksAppeared = 0;
	this._gloryBattle_safeExit = false;
	this._gloryBattle_badExit = false;
	
	this._dirty = true;
};

// Tachie
Game_Actor.prototype.setTachiePussyToyExtension_gloryBattle = function(name) {
	this._gloryBattle_tachiePussyToyExtension = name;
};
Game_Actor.prototype.setTachieAnalToyExtension_gloryBattle = function(name) {
	this._gloryBattle_tachieAnalToyExtension = name;
};

Game_Actor.prototype.getTachiePussyToyExtension_gloryBattle = function() {
	return this._gloryBattle_tachiePussyToyExtension;
};
Game_Actor.prototype.getTachieAnalToyExtension_gloryBattle = function() {
	return this._gloryBattle_tachieAnalToyExtension;
};

Game_Actor.prototype.gloryBattle_makeSexualNoise = function(value) {
	let noiseMultipler = 1;
	let generalReactionScore = this.getReactionScore();
	
	if(generalReactionScore >= VAR_DEF_RS_LV3_REQ) 
		noiseMultipler = 6;
	else if(generalReactionScore >= VAR_DEF_RS_LV2_REQ) 
		noiseMultipler = 3.5;
	else if(generalReactionScore >= VAR_DEF_RS_LV1_REQ) 
		noiseMultipler = 2;
	
	let noiseValue = value * noiseMultipler;
	if(noiseValue <= 1) return;
	
	if($gameTroop._gloryLeftStall) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_IN_STALL_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryLeftStall._guest_intentIsForHole) {
				$gameTroop._gloryLeftStall._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryLeftStall.gloryBattle_increasePleasureFromHearing_close();
			}
		}
	}
	if($gameTroop._gloryRightStall) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_IN_STALL_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryRightStall._guest_intentIsForHole) {
				$gameTroop._gloryRightStall._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryRightStall.gloryBattle_increasePleasureFromHearing_close();
			}
		}
	}
	if($gameTroop._gloryUrinalA) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_URINAL_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryUrinalA._guest_intentIsForHole) {
				$gameTroop._gloryUrinalA._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryUrinalA.gloryBattle_increasePleasureFromHearing_far();
			}
		}
	}
	if($gameTroop._gloryUrinalB) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_URINAL_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryUrinalB._guest_intentIsForHole) {
				$gameTroop._gloryUrinalB._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryUrinalB.gloryBattle_increasePleasureFromHearing_far();
			}
		}
	}
	if($gameTroop._gloryUrinalC) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_URINAL_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryUrinalC._guest_intentIsForHole) {
				$gameTroop._gloryUrinalC._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryUrinalC.gloryBattle_increasePleasureFromHearing_far();
			}
		}
	}
	if($gameTroop._gloryUrinalD) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_URINAL_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryUrinalD._guest_intentIsForHole) {
				$gameTroop._gloryUrinalD._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryUrinalD.gloryBattle_increasePleasureFromHearing_far();
			}
		}
	}
	
	for(let i = 0; i < $gameTroop._gloryStallQueue; ++i) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_STALL_QUEUE_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryStallQueue[i]._guest_intentIsForHole) {
				$gameTroop._gloryStallQueue[i]._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryStallQueue[i].gloryBattle_increasePleasureFromHearing_close();
			}
		}
	}
	for(let i = 0; i < $gameTroop._gloryUrinalQueue; ++i) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_URINAL_QUEUE_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryUrinalQueue[i]._guest_intentIsForHole) {
				$gameTroop._gloryUrinalQueue[i]._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryUrinalQueue[i].gloryBattle_increasePleasureFromHearing_far();
			}
		}
	}
	for(let i = 0; i < $gameTroop._gloryWashingQueue; ++i) {
		let hearingChance = GLORY_CHANCE_OF_GUEST_AT_WASHING_QUEUE_HEARING;
		let guestHeard = Math.randomInt(100) < hearingChance * noiseValue;
		if(guestHeard) {
			if(!$gameTroop._gloryWashingQueue[i]._guest_intentIsForHole) {
				$gameTroop._gloryWashingQueue[i]._guest_intentIsForHole = true;
			}
			else {
				$gameTroop._gloryWashingQueue[i].gloryBattle_increasePleasureFromHearing_far();
			}
		}
	}
};

Game_Actor.prototype.gloryXParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInGloryBattle) {
		if(id === XPARAM_STA_REGEN_ID) {
			passiveRate = 0.25;
			
			if($gameTroop.getCurrentTurn_gloryBattle() < this._gloryBattle_restingTilTurn) {
				passiveRate *= 5;
			}
		}
		
		
	}

	return passiveRate;
};

Game_Actor.prototype.glorySParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInGloryBattle) {
		if(id === SPARAM_WP_REGEN_ID) {
			passiveRate = 0.2;
		}
	}
	return passiveRate;
};

Game_Actor.prototype.gloryBattle_reactToNewCock = function() {
	//todo: maybe don't say anything if head is 'close' ?
	if(this._gloryBattle_cocksAppeared === 0) {
		BattleManager.actionRemLines(KARRYN_LINE_GLORY_HOLE_APPEAR_FIRST);
	}
	else if(!this.justOrgasmed()){
		let numOfCocks = 0;
		if(!$gameTroop.gloryBattle_leftHoleIsEmpty()) numOfCocks++;
		if(!$gameTroop.gloryBattle_rightHoleIsEmpty()) numOfCocks++;
		if(numOfCocks === 1)
			BattleManager.actionRemLines(KARRYN_LINE_GLORY_HOLE_APPEAR_MID);
	}
	
	this._gloryBattle_cocksAppeared++;
	this._playthroughRecordGloryCocksAppearedCount++;
	
	this.emoteMasterManager_GloryBattle();
};

Game_Actor.prototype.gloryBattle_bodySlotsWithPenis = function() {
	let count = 0;
	
	if(this.isBodySlotPenis(LEFT_HAND_ID)) count++;
	if(this.isBodySlotPenis(RIGHT_HAND_ID)) count++;
	if(this.isBodySlotPenis(MOUTH_ID)) count++;
	if(this.isBodySlotPenis(PUSSY_ID)) count++;
	if(this.isBodySlotPenis(ANAL_ID)) count++;
	
	return count;
	
};

Game_Actor.prototype.gloryBattle_fatigueGainPerTurn = function() {
	if(!this.isInToiletSittingPose()) {
		$gameParty.increaseFatigueGain(PRISON_FATIGUE_PER_TURN_OTHER);
	}
};

//Post sex acts
Game_Actor.prototype.postDamage_basicSex_gloryBattle = function(target, sexAct) {
	let enemyWeakness = 1;
	if(sexAct == SEXACT_BLOWJOB) {
		enemyWeakness = target.weaknessToBlowjob();
		this.gloryBattle_makeSexualNoise(3);
	}
	else if(sexAct == SEXACT_HANDJOB) {
		enemyWeakness = target.weaknessToHandjob();
		this.gloryBattle_makeSexualNoise(2);
	}
	else if(sexAct == SEXACT_PUSSYSEX) {
		enemyWeakness = target.weaknessToPussy();
		this.gloryBattle_makeSexualNoise(4);
	}
	else if(sexAct == SEXACT_ANALSEX) {
		enemyWeakness = target.weaknessToAnal();
		this.gloryBattle_makeSexualNoise(4);
	}


	if(enemyWeakness > 1) target._guest_gotFavoredSex = true;
	else if(enemyWeakness < 1) target._guest_gotUnfavoredSex = true;
};

Game_Actor.prototype.postDamage_ejaculation_gloryBattle = function(target, area, semen) {
	if(area == CUM_CREAMPIE_PUSSY || area == CUM_CREAMPIE_ANAL) {
		this.gloryBattle_makeSexualNoise(4);
		this._playthroughRecordGloryCreampieML += semen;
	}
	else if(area == CUM_SWALLOW_MOUTH) {
		this.gloryBattle_makeSexualNoise(4);
		this._playthroughRecordGlorySwallowML += semen;
	}
	else {
		this.gloryBattle_makeSexualNoise(3);
	}
	
};

Game_Actor.prototype.postDamage_femaleOrgasm_gloryBattle = function(orgasmCount) {
	this.gloryBattle_makeSexualNoise(6 * orgasmCount);

	if($gameTroop._gloryLeftStall && $gameTroop._gloryLeftStall._guest_currentlyEating) {
		this._playthroughRecordGloryOrgasmWhileGuestEatingCount++;
	}
	if($gameTroop._gloryLeftStall && $gameTroop._gloryLeftStall._guest_currentlyEating) {
		this._playthroughRecordGloryOrgasmWhileGuestEatingCount++;
	}
};

//////
// Skills

Game_Actor.prototype.showEval_gloryBreather = function() {
	return this.gloryBattle_bodySlotsWithPenis() > 0;
};
Game_Actor.prototype.customReq_gloryBreather = function() {
	return true;
};
Game_Actor.prototype.afterEval_gloryBreather = function() {
	//reduce enemy patiences?
	this.emoteMasterManager_GloryBattle();
};

Game_Actor.prototype.customReq_gloryRest = function() {
	return true;
};
Game_Actor.prototype.skillCost_gloryRest = function() {
	let cost = 3 + this.realMaxEnergy * 0.1;
	
	return Math.round(cost * this.esc);
};
Game_Actor.prototype.afterEval_gloryRest = function() {
	BattleManager.pullOutAllEnemies();
	this.setToiletSittingPose();
	if(this.justOrgasmed())
		this.setTachieLegs('spread');
	else
		this.setTachieLegs('close');
	
	this._gloryBattle_restingTilTurn = $gameTroop.getCurrentTurn_gloryBattle() + GLORY_REST_TURNS;
	this.emoteMasterManager_GloryBattle();
};
Game_Actor.prototype.gloryRestTurnEffect = function() {
	if(this.stamina === this.maxstamina) {
		$gameParty.increaseFatigueGain(GLORY_FATIGUE_RECOVER_RESTING * -1, true)
	}
};

Game_Actor.prototype.afterEval_glorySkillExit = function() {
	if($gameTroop._gloryWashingQueue.length > 0 || $gameTroop._gloryStallQueue.length > 0 || $gameTroop._gloryUrinalQueue.length > 0)
		this._gloryBattle_badExit = true;
	else if($gameTroop._gloryUrinalA || $gameTroop._gloryUrinalB || $gameTroop._gloryUrinalC || $gameTroop._gloryUrinalD)
		this._gloryBattle_badExit = true;
	else if(!$gameTroop.gloryBattle_bothHolesAreEmpty())
		this._gloryBattle_badExit = true;
	else
		this._gloryBattle_safeExit = true;
};

Game_Actor.prototype.showEval_karrynSexSkills_gloryBattle = function() {
	if($gameTroop.gloryBattle_bothHolesAreEmpty()) {
		return false;
	}
	else return true;
};




///////
// Posejoin

Game_Actor.prototype.gloryBattle_beforePoseJoin = function(target, sexAct, isRightHJ, isLeftHJ) {
	let currentlyInToiletSittingPose = this.isInToiletSittingPose();
	let currentlyInToiletSitLeftPose = this.isInToiletSitLeftPose();
	let currentlyInToiletSitRightPose = this.isInToiletSitRightPose();
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	
	let currentlyGivingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let currentlyGivingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let currentlyGivingBJ = this.isBodySlotPenis(MOUTH_ID);
	let currentlyHavingPussySex = this.isBodySlotPenis(PUSSY_ID);
	let currentlyHavingAnalSex = this.isBodySlotPenis(ANAL_ID);
	
	let currentlyLegsAreSpread = this.tachieLegs === 'spread';
	let currentlyLegsAreClose = this.tachieLegs === 'close';
	
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let targetIsLeftHole = target._guest_atStall === GLORY_LEFT_STALL_ID;
	let targetIsRightHole = target._guest_atStall === GLORY_RIGHT_STALL_ID;
	
	if(sexAct === SEXACT_HANDJOB) {
		if(currentlyInToiletSitLeftPose || currentlyInToiletSitRightPose) {
			if(currentlyInToiletSitLeftPose && targetIsRightHole) {
				if(!leftHoleIsEmpty) {
					BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
				}
				this.setToiletSittingPose();
			}
			else if(currentlyInToiletSitRightPose && targetIsLeftHole) {
				if(!rightHoleIsEmpty) {
					BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
				}
				this.setToiletSittingPose();
			}
			else if(currentlyInToiletStandRightPose && targetIsRightHole) {
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
				this.setToiletSitRightPose();
			}
			else if(currentlyInToiletStandLeftPose && targetIsLeftHole) {
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
				this.setToiletSitLeftPose();
			}
			
			let changedToSittingPose = this.isInToiletSittingPose();
			
			if(changedToSittingPose) {
				if(currentlyLegsAreSpread || currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose)
					this.setTachieLegs('spread');
				else
					this.setTachieLegs('close');
				
				if(targetIsRightHole && !leftHoleIsEmpty && currentlyGivingLeftHoleHJ) {
					$gameTroop._gloryLeftStall.beforeEval_join_generic_righthand(this, true);
				}
				else if(targetIsLeftHole && !rightHoleIsEmpty && currentlyGivingRightHoleHJ) {
					$gameTroop._gloryRightStall.beforeEval_join_generic_lefthand(this, true);
				}
			}
		}
		else if(currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose) {
			
		}
	}
	else if(sexAct === SEXACT_BLOWJOB) {
		if(targetIsLeftHole) {
			if(currentlyInToiletStandRightPose) {
				return;
			}
			
			if(!rightHoleIsEmpty) {
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
			}
			
			if(!currentlyGivingLeftHoleHJ) {
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
			}
			
			this.setToiletSitLeftPose();
			
			if(currentlyLegsAreSpread || currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose)
				this.setTachieLegs('spread');
			else
				this.setTachieLegs('close');
			
			if(currentlyGivingLeftHoleHJ) {
				$gameTroop._gloryLeftStall.beforeEval_join_generic_righthand(this, true);
			}
		}
		else if(targetIsRightHole) {
			if(currentlyInToiletStandLeftPose) {
				return;
			}
			
			if(!leftHoleIsEmpty) {
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
			}
			
			if(!currentlyGivingRightHoleHJ) {
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
			}
			
			this.setToiletSitRightPose();
			
			if(currentlyLegsAreSpread || currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose)
				this.setTachieLegs('spread');
			else
				this.setTachieLegs('close');
			
			if(currentlyGivingRightHoleHJ) {
				$gameTroop._gloryRightStall.beforeEval_join_generic_lefthand(this, true);
			}
		}
	}
	else if(sexAct === SEXACT_PUSSYSEX || sexAct === SEXACT_ANALSEX) {
		if(targetIsLeftHole) {
			BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
			
			if(currentlyInToiletStandLeftPose) {
				return;
			}
			
			if(!rightHoleIsEmpty) {
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
			}
			
			this.setToiletStandLeftPose();
			
			if(!rightHoleIsEmpty) {
				if(currentlyGivingRightHoleHJ) {
					$gameTroop._gloryRightStall.beforeEval_join_generic_lefthand(this, true);
				}
				if(currentlyInToiletSitRightPose && currentlyGivingBJ) {
					$gameTroop._gloryRightStall.beforeEval_join_generic_mouth(this, true);
				}
				
			}
			
		}
		else if(targetIsRightHole) {
			BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
			
			if(currentlyInToiletStandRightPose) {
				return;
			}
			
			if(!leftHoleIsEmpty) {
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
			}
			
			this.setToiletStandRightPose();
			
			if(!leftHoleIsEmpty) {
				if(currentlyGivingLeftHoleHJ) {
					$gameTroop._gloryLeftStall.beforeEval_join_generic_righthand(this, true);
				}
				if(currentlyInToiletSitLeftPose && currentlyGivingBJ) {
					$gameTroop._gloryLeftStall.beforeEval_join_generic_mouth(this, true);
				}
				
			}
			
		}
	}

	
};


Game_Actor.prototype.gloryBattle_postEnemyPullout = function() {
	let currentlyInToiletSittingPose = this.isInToiletSittingPose();
	let currentlyInToiletSitLeftPose = this.isInToiletSitLeftPose();
	let currentlyInToiletSitRightPose = this.isInToiletSitRightPose();
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	
	let currentlyGivingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let currentlyGivingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let currentlyGivingBJ = this.isBodySlotPenis(MOUTH_ID);
	let currentlyHavingPussySex = this.isBodySlotPenis(PUSSY_ID);
	let currentlyHavingAnalSex = this.isBodySlotPenis(ANAL_ID);
	
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	
	if(currentlyInToiletSitLeftPose || currentlyInToiletSitRightPose) {
		if(!currentlyGivingBJ) {
			this.setToiletSittingPose();
			if(this.justOrgasmed())
				this.setTachieLegs('spread');
			else
				this.setTachieLegs('close');
			
			if(currentlyGivingLeftHoleHJ && !leftHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_generic_righthand(this, true);
			}
			if(currentlyGivingRightHoleHJ && !rightHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_generic_lefthand(this, true);
			}
		}
	}
	
	if(currentlyHavingPussySex || currentlyHavingAnalSex) {
		if(!currentlyGivingBJ && !currentlyHavingPussySex && !currentlyHavingAnalSex) {
			this.setToiletSittingPose();
			if(this.justOrgasmed())
				this.setTachieLegs('spread');
			else
				this.setTachieLegs('close');
			
			if(currentlyGivingLeftHoleHJ && !leftHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_generic_righthand(this, true);
			}
			if(currentlyGivingRightHoleHJ && !rightHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_generic_lefthand(this, true);
			}
		}
		
	}
	
};

//////////////
////////////////
// Game Troop
////////////////
//////////////

//////
// Setup

//troop setup
Game_Troop.prototype.setupGloryBattle = function(troopId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._gloryStallQueue = [];
	this._gloryUrinalQueue = [];
	this._gloryWashingQueue = [];
	
	this._gloryLeftStall = false;
	this._gloryRightStall = false;
	this._gloryUrinalA = false;
	this._gloryUrinalB = false;
	this._gloryUrinalC = false;
	this._gloryUrinalD = false;

	this._gloryTurnCounter = 0;

	this._gloryGuestsSpawnedCount = 0;
	this._gloryGuestLastSpawnedTurn = 0;
	
	this.calculateGloryGuestsSpawnLimit();
	
	this._toiletObs = new Game_Enemy(TOILET_OBS_ENEMY_ID, 0, 0, false, TOILET_OBS_ENEMY_ID);
	this._enemies.push(this._toiletObs);
	
};

Game_Troop.prototype.calculateGloryGuestsSpawnLimit = function() {
	this._gloryGuestsSpawnLimit = 5;
	
	//Food & Drugs Edicts
	if(!Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) {
		this._gloryGuestsSpawnLimit -= 3;
	}
	else {
		if(Karryn.hasEdict(EDICT_HIRE_COOKS)) {
			this._gloryGuestsSpawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_BULK_FOOD_SUPPLIER)) {
			this._gloryGuestsSpawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_EXPAND_INMATE_MENU)) {
			this._gloryGuestsSpawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) {
			this._gloryGuestsSpawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) {
			this._gloryGuestsSpawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_PAY_FOR_BETTER_FOOD)) {
			this._gloryGuestsSpawnLimit -= 1;
		}
	}
	
	//Level 2 Edicts
	if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
		this._gloryGuestsSpawnLimit += 2;
	}
	
	if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
		this._gloryGuestsSpawnLimit += 2;
	}
	else if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) {
		this._gloryGuestsSpawnLimit -= 1;
	}
	
	//Passives
	if(Karryn.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) {
		this._gloryGuestsSpawnLimit += 3;
	}
	else if(Karryn.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID)) {
		this._gloryGuestsSpawnLimit += 2;
	}
	else if(Karryn.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) {
		this._gloryGuestsSpawnLimit += 1;
	}
	
	//Levels Status
	if(Prison.prisonLevelOneIsRioting()) {
		this._gloryGuestsSpawnLimit -= 2;
	}
	else if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
		this._gloryGuestsSpawnLimit += 1;
	}
	if(Prison.prisonLevelTwoIsRioting()) {
		this._gloryGuestsSpawnLimit -= 2;
	}
	if(!Prison.prisonLevelThreeIsRioting() && Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) {
		this._gloryGuestsSpawnLimit += 1;
	}
	if(!Prison.prisonLevelFourIsRioting() && Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) {
		this._gloryGuestsSpawnLimit += 1;
	}
	
	if($gameParty._gloryReputation >= 10) {
		this._gloryGuestsSpawnLimit += 5 + Math.round(($gameParty._gloryReputation - 10) * 0.2);
	}
	else {
		this._gloryGuestsSpawnLimit += Math.round($gameParty._gloryReputation * 0.5);
	}
};

Game_Troop.prototype.getCurrentTurn_gloryBattle = function() {
	return this._gloryTurnCounter;
};

Game_Troop.prototype.gloryBattle_leftHoleIsEmpty = function() {
	return !this._gloryLeftStall || 
	(this._gloryLeftStall && !this._gloryLeftStall._guest_showedThroughHole);
};
Game_Troop.prototype.gloryBattle_rightHoleIsEmpty = function() {
	return !this._gloryRightStall || 
	(this._gloryRightStall && !this._gloryRightStall._guest_showedThroughHole);
};
Game_Troop.prototype.gloryBattle_bothHolesAreEmpty = function() {
	return this.gloryBattle_leftHoleIsEmpty() && this.gloryBattle_rightHoleIsEmpty();
};

Game_Troop.prototype.gloryBattle_calculateChanceToSpawnGuest = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let chance = GLORY_SPAWN_BASE_CHANCE;
	
	
	chance += 2 * $gameParty._gloryReputation;
	chance += 2 * $gameParty._gloryBattle_guestSatisfaction;
	
	// Karryn's noise level (masturbating, orgasming, sex)
	// Is Level 2 rioting?
	// Certain level 2 work related edicts
	
	
	return chance;
};

Game_Troop.prototype.gloryBattle_calculateChanceForSpawnedGuestIsHereForHole = function(enemy) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let chance = 0;
	
	chance += enemy._enemyRecordGloryBattleEjaculationCount * 5;
	chance += $gameParty._gloryReputation * 2;
	chance += $gameParty._gloryBattle_guestSatisfaction * 5;
	
	chance += 100; //todo: remove
	
	return chance;
};

Game_Troop.prototype.gloryBattle_calculateChanceForSpawnedGuestIsHereForEating = function(enemy) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let chance = 35;
	
	chance -= enemy._enemyRecordGloryBattleEjaculationCount * 10;
	chance -= $gameParty._gloryReputation * 2;
	chance -= $gameParty._gloryBattle_guestSatisfaction * 5;
	
	if(enemy.hasHungryPrefix())
		chance += 60;
	else if(enemy.hasStarvingPrefix())
		chance += 120;
	else if(enemy.hasVirginPrefix() || enemy.hasWeakPrefix() || enemy.hasBadPrefix() || enemy.hasSlowPrefix() || enemy.hasIneptPrefix())
		chance += 25;
	else if(enemy.hasGoodPrefix() || enemy.hasStrongPrefix() || enemy.hasDexterousPrefix() || enemy.hasSadoPrefix() || enemy.hasAgilePrefix())
		chance -= 25;
	else if(enemy.hasElitePrefix())
		chance -= 45;
	
	if(enemy.isNerdType)
		chance *= 1.5;
	
	return chance;
};


//on turn end
Game_Troop.prototype.onTurnEndSpecial_gloryBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	////////////
	//Turn counter increment and spawn guest
	this._gloryTurnCounter++;
	actor._gloryBattle_turnsTillMentalPhase = Math.max(0, actor._gloryBattle_turnsTillMentalPhase - 1);
	this.gloryBattle_spawnGuest(false);
	
	//////////
	//Queues
	
	//Washing Queue
	if(this._gloryWashingQueue.length > 0) {
		let frontWashingGuest = this._gloryWashingQueue[0];
		if(frontWashingGuest._guest_currentlyWashing) {
			frontWashingGuest.gloryBattle_leaveWashingQueue();
			
			if(frontWashingGuest._guest_intentIsForHole && !frontWashingGuest._guest_showedThroughHole) {
				frontWashingGuest.gloryBattle_joinStallQueue();
			}
			else {
				frontWashingGuest.gloryBattle_leaveBathroom();
			}
		}
		else {
			frontWashingGuest._guest_currentlyWashing = true;
		}
		
		for(let i = 1; i < this._gloryWashingQueue.length; ++i) {
			if(this._gloryWashingQueue[i]._guest_intentIsForHole && !this._gloryWashingQueue[i]._guest_showedThroughHole) {
				this._gloryWashingQueue[i].gloryBattle_leaveWashingQueue();
				this._gloryWashingQueue[i].gloryBattle_joinStallQueue();
			}
		}
	}
	
	//Urinal Queue
	if(this._gloryUrinalQueue.length > 0) {
		let frontUrinalGuest = this._gloryUrinalQueue[0];
		
		let availableUrinalsArray = [];
		if(!this._gloryUrinalA) availableUrinalsArray.push(GLORY_URINAL_A_ID);
		if(!this._gloryUrinalB) availableUrinalsArray.push(GLORY_URINAL_B_ID);
		if(!this._gloryUrinalC) availableUrinalsArray.push(GLORY_URINAL_C_ID);
		if(!this._gloryUrinalD) availableUrinalsArray.push(GLORY_URINAL_D_ID);
		
		if(availableUrinalsArray.length > 0) {
			let assignedUrinalId = availableUrinalsArray[Math.randomInt(availableUrinalsArray.length)];
			if(assignedUrinalId === GLORY_URINAL_A_ID) 
				this._gloryUrinalA = frontUrinalGuest;
			if(assignedUrinalId === GLORY_URINAL_B_ID) 
				this._gloryUrinalB = frontUrinalGuest;
			if(assignedUrinalId === GLORY_URINAL_C_ID) 
				this._gloryUrinalC = frontUrinalGuest;
			if(assignedUrinalId === GLORY_URINAL_D_ID) 
				this._gloryUrinalD = frontUrinalGuest;
			
			frontUrinalGuest.gloryBattle_leaveUrinalQueue();
		}
		
		for(let i = 0; i < this._gloryUrinalQueue.length; ++i) {
			if(this._gloryUrinalQueue[i]._guest_intentIsForHole) {
				this._gloryUrinalQueue[i].gloryBattle_leaveUrinalQueue();
				this._gloryUrinalQueue[i].gloryBattle_joinStallQueue();
			}
		}
	}
	
	//Stall Queue
	if(this._gloryStallQueue.length > 0) {
		let availableStallsArray = [];
		if(!this._gloryLeftStall) availableStallsArray.push(GLORY_LEFT_STALL_ID);
		if(!this._gloryRightStall) availableStallsArray.push(GLORY_RIGHT_STALL_ID);
		
		while(this._gloryStallQueue.length > 0 && availableStallsArray.length > 0) {
			let arrayPos = Math.randomInt(availableStallsArray.length);
			let assignedStallId = availableStallsArray[arrayPos];
			let frontStallGuest = this._gloryStallQueue[0];
			
			if(assignedStallId === GLORY_LEFT_STALL_ID) {
				this._gloryStallQueue[0].gloryBattle_enterLeftStall();
			}
			if(assignedStallId === GLORY_RIGHT_STALL_ID) {
				this._gloryStallQueue[0].gloryBattle_enterRightStall();
			}
			
			frontStallGuest.gloryBattle_leaveStallQueue();
			availableStallsArray.splice(arrayPos, 1);
		}
	}
	
	////////
	//Assigned Spots
	if(this._gloryUrinalA) {
		if(!this._gloryUrinalA._guest_currentlyPissing && !this._gloryUrinalA._guest_finishedPissing) {
			this._gloryUrinalA._guest_currentlyPissing = true;
			this._gloryUrinalA._guest_finishPissingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryUrinalA._guest_takeToPeeTurns;
		}
		if(this._gloryUrinalA._guest_currentlyPissing && this._gloryUrinalA._guest_finishPissingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryUrinalA._guest_currentlyPissing = false;
			this._gloryUrinalA._guest_finishedPissing = true;
			if(this._gloryUrinalA._guest_intentIsForHole) {
				this._gloryUrinalA.gloryBattle_joinStallQueue();
			}
			else {
				this._gloryUrinalA.gloryBattle_joinWashingQueue();
			}
			this._gloryUrinalA = false;
		}
	}
	
	if(this._gloryUrinalB) {
		if(!this._gloryUrinalB._guest_currentlyPissing && !this._gloryUrinalB._guest_finishedPissing) {
			this._gloryUrinalB._guest_currentlyPissing = true;
			this._gloryUrinalB._guest_finishPissingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryUrinalB._guest_takeToPeeTurns;
		}
		if(this._gloryUrinalB._guest_currentlyPissing && this._gloryUrinalB._guest_finishPissingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryUrinalB._guest_currentlyPissing = false;
			this._gloryUrinalB._guest_finishedPissing = true;
			if(this._gloryUrinalB._guest_intentIsForHole) {
				this._gloryUrinalB.gloryBattle_joinStallQueue();
			}
			else {
				this._gloryUrinalB.gloryBattle_joinWashingQueue();
			}
			this._gloryUrinalB = false;
		}
	}
	
	if(this._gloryUrinalC) {
		if(!this._gloryUrinalC._guest_currentlyPissing && !this._gloryUrinalC._guest_finishedPissing) {
			this._gloryUrinalC._guest_currentlyPissing = true;
			this._gloryUrinalC._guest_finishPissingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryUrinalC._guest_takeToPeeTurns;
		}
		if(this._gloryUrinalC._guest_currentlyPissing && this._gloryUrinalC._guest_finishPissingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryUrinalC._guest_currentlyPissing = false;
			this._gloryUrinalC._guest_finishedPissing = true;
			if(this._gloryUrinalC._guest_intentIsForHole) {
				this._gloryUrinalC.gloryBattle_joinStallQueue();
			}
			else {
				this._gloryUrinalC.gloryBattle_joinWashingQueue();
			}
			this._gloryUrinalC = false;
		}
	}
	
	if(this._gloryUrinalD) {
		if(!this._gloryUrinalD._guest_currentlyPissing && !this._gloryUrinalD._guest_finishedPissing) {
			this._gloryUrinalD._guest_currentlyPissing = true;
			this._gloryUrinalD._guest_finishPissingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryUrinalD._guest_takeToPeeTurns;
		}
		if(this._gloryUrinalD._guest_currentlyPissing && this._gloryUrinalD._guest_finishPissingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryUrinalD._guest_currentlyPissing = false;
			this._gloryUrinalD._guest_finishedPissing = true;
			if(this._gloryUrinalD._guest_intentIsForHole) {
				this._gloryUrinalD.gloryBattle_joinStallQueue();
			}
			else {
				this._gloryUrinalD.gloryBattle_joinWashingQueue();
			}
			this._gloryUrinalD = false;
		}
	}
	
	//Left Stall
	if(this._gloryLeftStall) {
		if(!this._gloryLeftStall._guest_currentlyPissing && !this._gloryLeftStall._guest_finishedPissing && !this._gloryLeftStall._guest_intentIsForHole && !this._gloryLeftStall._guest_intentIsForEating) {
			this._gloryLeftStall._guest_currentlyPissing = true;
			this._gloryLeftStall._guest_finishPissingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryLeftStall._guest_takeToPeeTurns;
		}
		
		if(this._gloryLeftStall._guest_currentlyPissing && this._gloryLeftStall._guest_finishPissingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryLeftStall._guest_currentlyPissing = false;
			this._gloryLeftStall._guest_finishedPissing = true;
			if(this._gloryLeftStall._guest_intentIsForHole) {
				
			}
			else {
				this._gloryLeftStall.gloryBattle_joinWashingQueue();
				this._gloryLeftStall.gloryBattle_leaveLeftStall();
			}
		}
		
		if(this._gloryLeftStall._guest_intentIsForEating && !this._gloryLeftStall._guest_currentlyEating && !this._gloryLeftStall._guest_finishedEating && !this._gloryLeftStall._guest_intentIsForHole) {
			this._gloryLeftStall._guest_currentlyEating = true;
			this._gloryLeftStall._guest_finishEatingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryLeftStall._guest_takeToEatTurns;
		}
		
		if(this._gloryLeftStall._guest_currentlyEating && this._gloryLeftStall._guest_finishEatingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryLeftStall._guest_currentlyEating = false;
			this._gloryLeftStall._guest_finishedEating = true;
			if(this._gloryLeftStall._guest_intentIsForHole) {
				
			}
			else {
				this._gloryLeftStall.gloryBattle_joinWashingQueue();
				this._gloryLeftStall.gloryBattle_leaveLeftStall();
			}
		}
	}
	//Left Stall End
	
	//Right Stall
	if(this._gloryRightStall) {
		if(!this._gloryRightStall._guest_currentlyPissing && !this._gloryRightStall._guest_finishedPissing && !this._gloryRightStall._guest_intentIsForHole && !this._gloryRightStall._guest_intentIsForEating) {
			this._gloryRightStall._guest_currentlyPissing = true;
			this._gloryRightStall._guest_finishPissingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryRightStall._guest_takeToPeeTurns;
		}
		
		if(this._gloryRightStall._guest_currentlyPissing && this._gloryRightStall._guest_finishPissingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryRightStall._guest_currentlyPissing = false;
			this._gloryRightStall._guest_finishedPissing = true;
			if(this._gloryRightStall._guest_intentIsForHole) {
				
			}
			else {
				this._gloryRightStall.gloryBattle_joinWashingQueue();
				this._gloryRightStall.gloryBattle_leaveRightStall();
			}
		}
		
		if(this._gloryRightStall._guest_intentIsForEating && !this._gloryRightStall._guest_currentlyEating && !this._gloryRightStall._guest_finishedEating && !this._gloryRightStall._guest_intentIsForHole) {
			this._gloryRightStall._guest_currentlyEating = true;
			this._gloryRightStall._guest_finishEatingOnTurn = this.getCurrentTurn_gloryBattle() + this._gloryRightStall._guest_takeToEatTurns;
		}
		
		if(this._gloryRightStall._guest_currentlyEating && this._gloryRightStall._guest_finishEatingOnTurn <= this.getCurrentTurn_gloryBattle()) {
			this._gloryRightStall._guest_currentlyEating = false;
			this._gloryRightStall._guest_finishedEating = true;
			if(this._gloryRightStall._guest_intentIsForHole) {
				
			}
			else {
				this._gloryRightStall.gloryBattle_joinWashingQueue();
				this._gloryRightStall.gloryBattle_leaveRightStall();
			}
		}
	}
	//Right Stall End
	
	/////////////
	//Karryn
	let skipTurn = false;
	
	if(this.getCurrentTurn_gloryBattle() < actor._gloryBattle_restingTilTurn) {
		skipTurn = true;
		actor._gloryBattle_restingTilTurn -= 1;
		actor.gloryRestTurnEffect();
	}
	
	if(!skipTurn) {
		actor.removeState(STATE_DISABLED_ID);
		
		if(actor._gloryBattle_turnsTillMentalPhase <= 0 || actor.justOrgasmed()) {
			actor.enterMentalPhase();
			actor._gloryBattle_turnsTillMentalPhase = GLORY_MENTAL_PHASE_COOLDOWN;
		}
		else {
			actor.enterActionPhase();
		}
		
	}
	else {
		actor.addState(STATE_DISABLED_ID);
	}
	
};

////////
// Spawn

Game_Troop.prototype.gloryBattle_spawnGuest = function(forceSpawn) {
	
	let chanceToSpawn = 0;
	let spawningNewGuest = false;
	
	chanceToSpawn = this.gloryBattle_calculateChanceToSpawnGuest();

	let spawnRandomInt = GLORY_SPAWN_BASE_RANDOM_INT + (this._gloryGuestsSpawnedCount * this._gloryGuestsSpawnedCount);
	spawnRandomInt -= GLORY_SPAWN_RANDOM_INT_DEC_SINCE_LAST_SPAWN * ($gameTroop.getCurrentTurn_gloryBattle() - this._gloryGuestLastSpawnedTurn);
	if(forceSpawn || ((Math.randomInt(spawnRandomInt) + this._gloryGuestsSpawnedCount) <= chanceToSpawn)) {
		if(this._gloryGuestsSpawnedCount < this._gloryGuestsSpawnLimit) {
			spawningNewGuest = true;
		}
	}
	
	if(spawningNewGuest) {
		this._gloryGuestsSpawnedCount++;
		this._gloryGuestLastSpawnedTurn = $gameTroop.getCurrentTurn_gloryBattle();
		let enemyId = this.gloryBattle_validGuestId();
		let enemy = this.setup_gloryBattle_guest(enemyId);
		enemy.makeUniqueNames();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		SceneManager._scene._spriteset.addEnemy(enemy);
	}
	
	
	return spawningNewGuest;
};

Game_Troop.prototype.setup_gloryBattle_guest = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		enemyId = wanted._enemyId;
	}
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, 0, 0, wanted, originalEnemyId);
	enemy._guest_number = this._gloryGuestsSpawnedCount;
	this._enemies.push(enemy);
	enemy.setupForGloryBattle_Guest(wanted);
	
	let chanceForIntentIsHole = this.gloryBattle_calculateChanceForSpawnedGuestIsHereForHole(enemy);
	
	if(Math.randomInt(100) < chanceForIntentIsHole) {
		enemy._guest_intentIsForHole = true;
		enemy.gloryBattle_joinStallQueue();
	}
	else if($gameParty._gloryReputation <= GLORY_SPAWN_EATERS_REP_LIMIT && (enemy.isNerdType || enemy.isPrisonerType)) {
		let chanceForIntentIsEating = this.gloryBattle_calculateChanceForSpawnedGuestIsHereForEating(enemy);
		if(Math.randomInt(100) < chanceForIntentIsEating) {
			enemy._guest_intentIsForEating = true;
			enemy.gloryBattle_joinStallQueue();
		}
	}
	
	if(!enemy._guest_intentIsForHole && !enemy._guest_intentIsForEating) {
		let chanceToUseStall = 0;
		if(this._gloryLeftStall) chanceToUseStall += 20;
		if(this._gloryRightStall) chanceToUseStall += 20;
		
		if(this._gloryUrinalA || this._gloryUrinalB || this._gloryUrinalC || this._gloryUrinalD) {
			chanceToUseStall += 10;
			if(this._gloryUrinalA) chanceToUseStall += 10;
			if(this._gloryUrinalB) chanceToUseStall += 10;
			if(this._gloryUrinalC) chanceToUseStall += 10;
			if(this._gloryUrinalD) chanceToUseStall += 10;
		}
		
		if(Math.randomInt(100) < chanceToUseStall) {
			enemy.gloryBattle_joinStallQueue();
		}
		else {
			enemy.gloryBattle_joinUrinalQueue();
		}
	}
	
	return enemy;
};

Game_Troop.prototype.gloryBattle_validGuestId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [ 51,52,53,54 ];
	
	//Thugs
	if(Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
		validEnemyTypes.push(94);
	}
	else if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
		validEnemyTypes.push(92);
		validEnemyTypes.push(95);
	}
	
	//Goblins
	if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) {
		validEnemyTypes.push(82);
		validEnemyTypes.push(83);
	}
	else if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
		validEnemyTypes.push(81);
	}
	
	//Nerds
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

	//Rogues
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
	
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};


/////////////
//////////////////
// Game Enemy
///////////////////
/////////////

////////
// Name
Game_Enemy.prototype.name_gloryHoleBattle = function() {
	return this.displayName_gloryHoleBattle();
};

Game_Enemy.prototype.displayName_gloryHoleBattle = function() {
	let name = '';
	
	if(this._guest_atStall === GLORY_LEFT_STALL_ID) name = TextManager.gloryLeftStallCockName;
	else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) name = TextManager.gloryRightStallCockName;
	
	return name;
};

Game_Enemy.prototype.battlerName_gloryHoleBattle = function() {
	return 'glory_target';
};

Game_Enemy.prototype.gloryParamRateEffect = function(paramId) {
	let rate = 1;
	
	if($gameParty.isInGloryBattle) {
		if(paramId === PARAM_AGILITY_ID) {
			rate *= 0.001;
		}
	}
	
	return rate;
};

//enemy setup
Game_Enemy.prototype.setupForGloryBattle_Guest = function(wanted) {
	this._guest_takeToPeeTurns = 3 + Math.randomInt(2);
	if(this.hasAgilePrefix() || this.hasVirginPrefix()) 
		this._guest_takeToPeeTurns--;
	else if(this.hasHungryPrefix() || this.hasStarvingPrefix()) 
		this._guest_takeToPeeTurns -= 1 + Math.randomInt(2);
	else if(this.hasSlowPrefix() || this.hasIneptPrefix() || this.hasGoodPrefix()) 
		this._guest_takeToPeeTurns++;
	else if(this.hasElitePrefix() || this.hasBigPrefix() || this.hasEnduringPrefix() || this.hasDrunkPrefix()) 
		this._guest_takeToPeeTurns += 1 + Math.randomInt(2);
	
	this._guest_takeToPeeTurns = Math.max(2, this._guest_takeToPeeTurns);
	
	this._guest_givenHolePatienceTurns = 5 + Math.randomInt(3);
	if(this.isPrisonerType)
		this._guest_givenHolePatienceTurns += 1;
	else if(this.isThugType && !Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) 
		this._guest_givenHolePatienceTurns -= 2;
	else if(this.isRogueType)
		this._guest_givenHolePatienceTurns -= 1;
	else if(this.isGoblinType && Karryn.hasEdict(EDICT_BAIT_GOBLINS)) 
		this._guest_givenHolePatienceTurns += 1;
	else if(this.isNerdType)
		this._guest_givenHolePatienceTurns += 2;
	
	if(this.hasVirginPrefix() || this.hasSlowPrefix())
		this._guest_givenHolePatienceTurns += 2;
	else if(this.hasIneptPrefix() || this.hasBigPrefix() || this.hasEnduringPrefix() || this.hasMasoPrefix() || this.hasSadoPrefix()) 
		this._guest_givenHolePatienceTurns++;
	else if(this.hasGoodPrefix() || this.hasDrunkPrefix()) 
		this._guest_givenHolePatienceTurns--;	
	else if(this.hasAgilePrefix() || this.hasElitePrefix() || this.hasHungryPrefix() || this.hasStarvingPrefix() || this.hasMetalPrefix()) 
		this._guest_givenHolePatienceTurns -= 2;	
	
	this._guest_takeToEatTurns = 8 + Math.randomInt(4);
	if(this.isNerdType)
		this._guest_takeToEatTurns += 1 + Math.randomInt(2);
	if(this.hasHungryPrefix() || this.hasSlowPrefix())
		this._guest_takeToEatTurns += 1 + Math.randomInt(2);
	else if(this.hasStarvingPrefix() || this.hasElitePrefix())
		this._guest_takeToEatTurns += 1 + Math.randomInt(2);
	
	this._guest_inQueue = false;
	this._guest_atStall = false;
	this._guest_currentlyPissing = false;
	this._guest_finishedPissing = false;
	this._guest_currentlyEating = false;
	this._guest_finishedEating = false;
	this._guest_currentlyWashing = false;
	this._guest_intentIsForHole = false;
	this._guest_intentIsForEating = false;
	this._guest_showedThroughHole = false;
	this._guest_gotFavoredSex = false;
	this._guest_gotUnfavoredSex = false;
	
	this._guest_actionCooldown = 0;
	this._guest_finishEatingOnTurn = -1;
	this._guest_finishPissingOnTurn = -1;
	this._guest_holePatienceTurnLimit = -1;
	
	
	BattleManager._logWindow.push('addText', TextManager.gloryGuestEnterBathroom);
};

Game_Enemy.prototype.gloryBattle_pollSatisfaction = function(endOfBattle) {
	if(this._guest_intentIsForHole) {
		let guestSat = 0;
		
		if(this._ejaculationStock > 0 && this.energy > 0) {
			if(!endOfBattle)
				guestSat += GLORY_GUEST_SATISFACTION_LOST_FROM_NOT_EMPTY_STOCK;
		}
		else {
			guestSat += GLORY_GUEST_SATISFACTION_GAIN_FROM_EMPTY_STOCK;
		}
		
		if(this._guest_showedThroughHole) {
			if(this._guest_gotFavoredSex)
				guestSat += GLORY_GUEST_SATISFACTION_GAIN_FROM_FAVORED_SEX;
			if(this._guest_gotUnfavoredSex)
				guestSat += GLORY_GUEST_SATISFACTION_LOST_FROM_UNFAVORED_SEX;
		}
		else {
			if(!endOfBattle)
				guestSat += GLORY_GUEST_SATISFACTION_LOST_FROM_NOT_GETTING_TO_HOLE;
		}
			
		$gameParty.increaseGloryGuestSatisfaction(guestSat);
	}
	
};

Game_Enemy.prototype.gloryBattle_leaveBathroom = function() {
	BattleManager._logWindow.push('addText', TextManager.gloryGuestLeaveBathroom);
	
	this.gloryBattle_pollSatisfaction(false);
	
	this.hide();
	this.clearActions();
    this.clearStates();
};


Game_Enemy.prototype.gloryBattle_joinStallQueue = function() {
	this._guest_inQueue = true;
	$gameTroop._gloryStallQueue.push(this);
};
Game_Enemy.prototype.gloryBattle_joinUrinalQueue = function() {
	this._guest_inQueue = true;
	$gameTroop._gloryUrinalQueue.push(this);
};
Game_Enemy.prototype.gloryBattle_joinWashingQueue = function() {
	this._guest_inQueue = true;
	$gameTroop._gloryWashingQueue.push(this);
};

Game_Enemy.prototype.gloryBattle_leaveStallQueue = function() {
	this._guest_inQueue = false;
	
	let assignedQueue = $gameTroop._gloryStallQueue;
	
	if(assignedQueue[0]._guest_number === this._guest_number) {
		assignedQueue.shift();
	}
	else {
		let currentQueueSpot = 0;
		for(let i = 0; i < assignedQueue.length; ++i) {
			if(assignedQueue[i]._guest_number === this._guest_number) {
				currentQueueSpot = i;
				break;
			}
		}
		assignedQueue.splice(currentQueueSpot, 1);
	}
};
Game_Enemy.prototype.gloryBattle_leaveUrinalQueue = function() {
	this._guest_inQueue = false;
	
	let assignedQueue = $gameTroop._gloryUrinalQueue;
	
	if(assignedQueue[0]._guest_number === this._guest_number) {
		assignedQueue.shift();
	}
	else {
		let currentQueueSpot = 0;
		for(let i = 0; i < assignedQueue.length; ++i) {
			if(assignedQueue[i]._guest_number === this._guest_number) {
				currentQueueSpot = i;
				break;
			}
		}
		assignedQueue.splice(currentQueueSpot, 1);
	}
};
Game_Enemy.prototype.gloryBattle_leaveWashingQueue = function() {
	this._guest_inQueue = false;
	
	let assignedQueue = $gameTroop._gloryWashingQueue;
	
	if(assignedQueue[0]._guest_number === this._guest_number) {
		assignedQueue.shift();
	}
	else {
		let currentQueueSpot = 0;
		for(let i = 0; i < assignedQueue.length; ++i) {
			if(assignedQueue[i]._guest_number === this._guest_number) {
				currentQueueSpot = i;
				break;
			}
		}
		assignedQueue.splice(currentQueueSpot, 1);
	}
};

Game_Enemy.prototype.gloryBattle_enterLeftStall = function() {
	this._guest_atStall = GLORY_LEFT_STALL_ID;
	$gameTroop._gloryLeftStall = this;
	BattleManager._logWindow.push('addText', TextManager.gloryGuestEnterLeftStall);
};
Game_Enemy.prototype.gloryBattle_enterRightStall = function() {
	this._guest_atStall = GLORY_RIGHT_STALL_ID;
	$gameTroop._gloryRightStall = this;
	BattleManager._logWindow.push('addText', TextManager.gloryGuestEnterRightStall);
};
Game_Enemy.prototype.gloryBattle_leaveLeftStall = function() {
	this._guest_atStall = false;
	$gameTroop._gloryLeftStall = false;
	BattleManager._logWindow.push('addText', TextManager.gloryGuestLeaveLeftStall);
};
Game_Enemy.prototype.gloryBattle_leaveRightStall = function() {
	this._guest_atStall = false;
	$gameTroop._gloryRightStall = false;
	BattleManager._logWindow.push('addText', TextManager.gloryGuestLeaveRightStall);
};

Game_Enemy.prototype.gloryBattle_showThroughHole = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	this._guest_showedThroughHole = true;
	
	if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
		BattleManager._logWindow.push('addText', TextManager.gloryGuestShowedThroughLeftHole);
		this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_LEFT_HOLE_SHOWED);
	}
	else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
		BattleManager._logWindow.push('addText', TextManager.gloryGuestShowedThroughRightHole);
		this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_RIGHT_HOLE_SHOWED);
	}
	
	actor.gloryBattle_reactToNewCock();
};

Game_Enemy.prototype.gloryBattle_calculatePatience = function() {
	let patience = GLORY_GUEST_BASE_PATIENCE;
	if(this.hasElitePrefix() || this.hasAgilePrefix() || this.hasStarvingPrefix() || this.hasHungryPrefix() || this.hasAngryPrefix())
		patience -= 3;
	else if(this.hasGoodPrefix() || this.hasSadoPrefix() || this.hasSensitivePrefix() || this.hasDrunkPrefix())
		patience -= 2;
	else if(this.hasStrongPrefix() || this.hasDexterousPrefix() || this.hasMetalPrefix() || this.hasBigPrefix())
		patience -= 1;
	else if(this.isHorny || this.hasVirginPrefix() || this.hasHornyPrefix() || this.hasEnduringPrefix() || this.hasSlowPrefix() || this.hasMasoPrefix())
		patience += 1;
	
	return patience;
};

//Enemy Pleasure
Game_Enemy.prototype.bonusPpt_gloryBattle = function() {
	//hp degen
	let degenAmt = Math.ceil(this.mhp / this.gloryBattle_calculatePatience());
	this._hp = Math.max(1, this._hp - degenAmt);
	
	//pleasure
	let value = 0;
	//todo: ?
	return value;
};

Game_Enemy.prototype.gloryBattle_increasePleasureFromHearing_close = function() {
	let limit = Math.max(this.orgasmPoint() * 0.5, this.arousalPoint() * 1.3);
	if(this.pleasure > limit) return;
	
	let karrynCharm = Karryn.inBattleCharm;
	let enemyCharmReq = this.charm;
	if(this.isHorny) {
		enemyCharmReq *= 0.8;
	}
	
	let pleasureGain = 0;
	if(enemyCharmReq > karrynCharm) {
		pleasureGain = Math.floor(karrynCharm * VAR_CHARM_MULTIPLER_WHEN_LESS);
	}
	else {
		pleasureGain = Math.round(karrynCharm * 1.33 - enemyCharmReq);
	}
	
	if(pleasureGain + this.pleasure > limit) 
		pleasureGain = limit - this.pleasure;
	this.gainPleasure(pleasureGain);
};

Game_Enemy.prototype.gloryBattle_increasePleasureFromHearing_far = function() {
	let limit = this.arousalPoint() * 1.1;
	if(this.pleasure > limit) return;
	
	let karrynCharm = Karryn.inBattleCharm;
	let enemyCharmReq = this.charm;
	if(this.isHorny) {
		enemyCharmReq *= 0.8;
	}
	
	let pleasureGain = 0;
	if(enemyCharmReq > karrynCharm) {
		pleasureGain = Math.floor(karrynCharm * VAR_CHARM_MULTIPLER_WHEN_LESS);
	}
	else {
		pleasureGain = Math.round(karrynCharm * 1.33 - enemyCharmReq);
	}
	
	if(pleasureGain + this.pleasure > limit) 
		pleasureGain = limit - this.pleasure;
	this.gainPleasure(pleasureGain);
};

///////////
// Valid Target

Game_Enemy.prototype.isValidTargetForCockStare_gloryBattle = function(actor) { 
	if(!this._guest_atStall || !this._guest_showedThroughHole ) return false;
	
	if(actor.isInToiletSittingPose()) {
		return true;
	}
	else if(actor.isInToiletSitLeftPose()) {
		return true;
	}
	else if(actor.isInToiletSitRightPose()) {
		return true;
	}
	else if(actor.currentlyInToiletStandLeftPose()) {
		return false;
	}
	else if(actor.currentlyInToiletStandRightPose()) {
		return false;
	}
	else return false;
};

Game_Enemy.prototype.isValidTargetForCockPetting_gloryBattle = function(actor) { 
	if(!this._guest_atStall || !this._guest_showedThroughHole ) return false;
	
	if(actor.isInToiletSittingPose()) {
		return true;
	}
	else if(actor.isInToiletSitLeftPose()) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			return true;
		else
			return false;
	}
	else if(actor.isInToiletSitRightPose()) {
		if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			return true;
		else
			return false;
	}
	else if(actor.currentlyInToiletStandLeftPose()) {
		if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			return true;
		else
			return false;
	}
	else if(actor.currentlyInToiletStandRightPose()) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			return true;
		else
			return false;
	}
	else return false;
};

Game_Enemy.prototype.isValidTargetForHandjobOrBlowjob_gloryBattle = function(actor) { 
	if(!this._guest_atStall || !this._guest_showedThroughHole ) return false;
	else return true;
};
Game_Enemy.prototype.isValidTargetForPussyOrAnalSex_gloryBattle = function(actor) { 
	if(!this._guest_atStall || !this._guest_showedThroughHole || !this.isErect ) return false;
	else return true;
};

/////////////
// Glory Hole Battle AI
///////////

Game_Enemy.prototype.enemyBattleAIGloryHole = function(target) {
	if(this.enemyType() == ENEMYTYPE_TOILET_OBS_TAG) return;
	if(this._guest_inQueue || !this._guest_atStall) return;
	
	//console.log('ai ' + this._guest_atStall)
	
	this._guest_actionCooldown = Math.max(this._guest_actionCooldown - 1, 0);
	
	if(this._guest_currentlyPissing) {
		if(this._guest_actionCooldown === 0) {
			if(this._guest_atStall === GLORY_LEFT_STALL_ID)
				BattleManager._logWindow.push('addText', TextManager.gloryGuestPissingLeftStall);
			else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
				BattleManager._logWindow.push('addText', TextManager.gloryGuestPissingRightStall);
			
			this._guest_actionCooldown = GLORY_GUEST_ACTION_COOLDOWN;
		}
	}
	
	if(this._guest_currentlyEating) {
		if(this._guest_actionCooldown === 0) {
			if(this._guest_atStall === GLORY_LEFT_STALL_ID)
				BattleManager._logWindow.push('addText', TextManager.gloryGuestEatingLeftStall);
			else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
				BattleManager._logWindow.push('addText', TextManager.gloryGuestEatingRightStall);
			
			
			this._guest_actionCooldown = GLORY_GUEST_ACTION_COOLDOWN;
		}
	}
	
	if(this._ejaculationStock < 1 || this.energy < 1) {
		BattleManager.pullOutEnemy(this);
		target.gloryBattle_postEnemyPullout();
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			this.gloryBattle_leaveLeftStall();
		else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			this.gloryBattle_leaveRightStall();
		
		this.gloryBattle_joinWashingQueue();
		target.emoteMasterManager_GloryBattle();
		return;
	}
	else {
		if(this._guest_intentIsForHole && !this._guest_showedThroughHole) {
			this.gloryBattle_showThroughHole();
			return;
		}
		else if(this._guest_intentIsForHole && this._guest_showedThroughHole) {
			if(this.isInAPose() && this._guest_actionCooldown === 0) {
				if(this.usePoseSkill(target))
					this._guest_actionCooldown = GLORY_GUEST_ACTION_COOLDOWN;
			}
			else if(!this.isInAPose() && this.stamina === 1) {
				if(this._guest_atStall === GLORY_LEFT_STALL_ID)
					this.gloryBattle_leaveLeftStall();
				else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
					this.gloryBattle_leaveRightStall();
				
				this.gloryBattle_joinWashingQueue();
				target.emoteMasterManager_GloryBattle();
			}
		}
	}
	
};
