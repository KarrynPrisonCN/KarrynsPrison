var Remtairy = Remtairy || {};
Remtairy.KarrynGlory = Remtairy.KarrynGlory || {};

//敵の位置
const GLORYHOLE_POS_LEFT_SOFT_X = 250;
const GLORYHOLE_POS_LEFT_SOFT_Y = 415;
const GLORYHOLE_POS_LEFT_HARD_X = 250;
const GLORYHOLE_POS_LEFT_HARD_Y = 420;
const GLORYHOLE_POS_RIGHT_SOFT_X = 1190;
const GLORYHOLE_POS_RIGHT_SOFT_Y = 415;
const GLORYHOLE_POS_RIGHT_HARD_X = 1190;
const GLORYHOLE_POS_RIGHT_HARD_Y = 420;

const BATTLEBACK1_GLORYHOLE_1_NAME = 'Toilet1';
const BATTLEBACK1_GLORYHOLE_2_NAME = 'Toilet2';
const BATTLEBACK1_GLORYHOLE_3_NAME = 'Toilet3';
const BATTLEBACK1_GLORYHOLE_4_NAME = 'Toilet4';
const BATTLEBACK1_GLORYHOLE_5_NAME = 'Toilet5';

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

const GLORY_SKILL_START = 1634;
const GLORY_SKILL_END = 1664;

const GLORY_HOLE_REP_DECAY_DAYS = 4;
const GLORY_HOLE_RIOT_BUILDUP_REDUCE = 2;

const GLORY_CHANCE_OF_GUEST_IN_STALL_HEARING = 10;
const GLORY_CHANCE_OF_GUEST_AT_STALL_QUEUE_HEARING = 6;
const GLORY_CHANCE_OF_GUEST_AT_URINAL_HEARING = 2;
const GLORY_CHANCE_OF_GUEST_AT_URINAL_QUEUE_HEARING = 4;
const GLORY_CHANCE_OF_GUEST_AT_WASHING_QUEUE_HEARING = 0.5;

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

const GLORY_FATIGUE_RECOVER_BASE = 1;
const GLORY_FATIGUE_RECOVER_RESTING_BASE = 0.2;
const GLORY_FATIGUE_RECOVER_ONANI = 0.04;
const GLORY_REST_TURNS = 5;
const GLORY_MENTAL_PHASE_COOLDOWN = 3;

const GLORY_GUEST_ACTION_COOLDOWN = 2;
const GLORY_GUEST_BASE_PATIENCE = 7;
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
	BattleManager.setEnemySneakAttackBattle();
	this.preBattleSetup();
	
	let gloryRep = $gameParty._gloryReputation;
	if(gloryRep >= 20)
		$gameMap.changeBattleback(BATTLEBACK1_GLORYHOLE_5_NAME, null);
	else if(gloryRep >= 13)
		$gameMap.changeBattleback(BATTLEBACK1_GLORYHOLE_4_NAME, null);
	else if(gloryRep >= 7)
		$gameMap.changeBattleback(BATTLEBACK1_GLORYHOLE_3_NAME, null);
	else if(gloryRep >= 3)
		$gameMap.changeBattleback(BATTLEBACK1_GLORYHOLE_2_NAME, null);
	else
		$gameMap.changeBattleback(BATTLEBACK1_GLORYHOLE_1_NAME, null);
	
	actor._gloryBattle_safeExit = false;
	actor._gloryBattle_badExit = false;
	this.setIsInGloryBattleFlag(true);
	
	this.increaseFatigueGain(GLORY_FATIGUE_RECOVER_BASE * -1 * actor.fatigueRecoveryRate(), true)

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
	let minGloryRep = this.getMinimumGloryHoleReputation();
	
	this._gloryReputation = Math.max(minGloryRep, value);
	$gameVariables.setValue(VARIABLE_GLORY_REPUTATION_ID, this._gloryReputation);
};
Game_Party.prototype.increaseGloryReputation = function(value) {
	this.setGloryReputation(this._gloryReputation + value);
};
Game_Party.prototype.getMinimumGloryHoleReputation = function() {
	let minGloryRep = 0;
	
	return minGloryRep;
};

Game_Party.prototype.gloryHoleReputationEffect_staffEfficiency = function() {
	let value = $gameParty._gloryReputation * 0.025;
	
	return Math.min(1, value);
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
	
	if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID))
		this.setWantsToOnaniInBattle(true);
	
	this.setToiletSittingPose();
	this.setTachieLegs('close');
	
	this._recordGloryBattleCount++;
	this._gloryBattle_restingTilTurn = -1;
	this._gloryBattle_turnsTillMentalPhase = 0;
	this._gloryBattle_cocksAppeared = 0;
	this._gloryBattle_masturbated = false;
	this._gloryBattle_restUsedInRowCount = 0;
	this._gloryBattle_restUsedTotalCount = 0;
	this._gloryBattle_breatherUsedInRowCount = 0;
	
	this.setupGloryBattleToys();
	
	this._dirty = true;
};

Game_Actor.prototype.setupGloryBattleToys = function() {
	let factorBase = $gameParty._gloryReputation;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID)) factorBase += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) factorBase += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID)) factorBase += 10;
	
	if(this.hasEdict(EDICT_REPAIR_STORE)) {
		if(this.hasEdict(EDICT_INMATES_ALLOWED_TO_USE_STORE) && this.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) 
			factorBase += 20;
		else if(this.hasEdict(EDICT_INMATES_ALLOWED_TO_USE_STORE) || this.hasEdict(EDICT_PAY_NERD_BLACKMAIL))
			factorBase += 10;
		else factorBase += 5;
	}
	
	if(this.hasEdict(EDICT_THREATEN_THE_NERDS)) factorBase -= 15;
	else if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) factorBase += 15;
	
	let factorMultipler = 1;
	
	if($gameParty._gloryReputation < 1) factorMultipler *= 0.33;
	else if($gameParty._gloryReputation < 3) factorMultipler *= 0.66;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID)) factorMultipler *= 1.3;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID)) factorMultipler *= 1.25;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID)) factorMultipler *= 1.2;
	
	if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_THREE_ID)) factorMultipler *= 1.2;
	else if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_TWO_ID)) factorMultipler *= 1.1;
	
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID)) factorMultipler *= 1.4;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_TWO_ID)) factorMultipler *= 1.3;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID)) factorMultipler *= 1.2;
	
	let toyFactor = factorBase * factorMultipler;
	let spawningToysArray = [];
	let possibleToysArray = [ CLIT_ID, ANAL_ID ];
	if(!this.isVirgin()) possibleToysArray.push(PUSSY_ID);

	if(toyFactor < 30) {
		if(Math.randomInt(30) + 5 < toyFactor)
			spawningToysArray.push(possibleToysArray.splice(Math.randomInt(possibleToysArray.length), 1)[0]);
	}
	else {
		spawningToysArray.push(possibleToysArray.splice(Math.randomInt(possibleToysArray.length), 1)[0]);
		
		if(Math.randomInt(69) + 15 < toyFactor && possibleToysArray.length > 0) {
			spawningToysArray.push(possibleToysArray.splice(Math.randomInt(possibleToysArray.length), 1)[0]);
		
			if(Math.randomInt(100) + 42 < toyFactor && possibleToysArray.length > 0)
				spawningToysArray.push(possibleToysArray.splice(Math.randomInt(possibleToysArray.length), 1)[0]);
		}
		
	}

	if(spawningToysArray.contains(CLIT_ID)) this.addState(STATE_GLORY_PINK_ROTOR_ID);
	if(spawningToysArray.contains(PUSSY_ID)) this.addState(STATE_GLORY_PENIS_DILDO_ID);
	if(spawningToysArray.contains(ANAL_ID)) this.addState(STATE_GLORY_ANAL_BEADS_ID);
};


// Tachie
Game_Actor.prototype.setTachieClitToyExtension_gloryBattle = function(name) {
	this._gloryBattle_tachieClitToyExtension = name;
};
Game_Actor.prototype.setTachiePussyToyExtension_gloryBattle = function(name) {
	this._gloryBattle_tachiePussyToyExtension = name;
};
Game_Actor.prototype.setTachieAnalToyExtension_gloryBattle = function(name) {
	this._gloryBattle_tachieAnalToyExtension = name;
};

Game_Actor.prototype.getTachieClitToyExtension_gloryBattle = function() {
	return this._gloryBattle_tachieClitToyExtension || '';
};
Game_Actor.prototype.getTachiePussyToyExtension_gloryBattle = function() {
	return this._gloryBattle_tachiePussyToyExtension || '';
};
Game_Actor.prototype.getTachieAnalToyExtension_gloryBattle = function() {
	return this._gloryBattle_tachieAnalToyExtension || '';
};

Game_Actor.prototype.gloryBattle_makeSexualNoise = function(value) {
	let noiseMultipler = 1;
	let generalReactionScore = this.getReactionScore();
	
	if(generalReactionScore >= VAR_DEF_RS_LV3_REQ) 
		noiseMultipler = 5;
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
			passiveRate = 0.33;
			
			if($gameTroop.getCurrentTurn_gloryBattle() < this._gloryBattle_restingTilTurn) {
				if(this.isBodySlotInserted(MOUTH_ID) && (this.isBodySlotInserted(PUSSY_ID) || this.isBodySlotInserted(ANAL_ID))) 
					passiveRate *= 2.4;
				else if(this.isBodySlotInserted(MOUTH_ID) || this.isBodySlotInserted(PUSSY_ID) || this.isBodySlotInserted(ANAL_ID))
					passiveRate *= 3.2;
				else
					passiveRate *= 4;
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
	if(this._gloryBattle_cocksAppeared === 0) {
		BattleManager.actionRemLines(KARRYN_LINE_GLORY_HOLE_APPEAR_FIRST);
		if(Karryn.getReactionScore() < VAR_DEF_RS_LV3_REQ) {
			BattleManager.playSpecialBgm_GlorySex();
		}
	}
	else if(!this.justOrgasmed()){
		let numOfCocks = 0;
		if(!$gameTroop.gloryBattle_leftHoleIsEmpty()) numOfCocks++;
		if(!$gameTroop.gloryBattle_rightHoleIsEmpty()) numOfCocks++;
		if(numOfCocks === 1 && $gameTroop.getCurrentTurn_gloryBattle() < this._gloryBattle_restingTilTurn && Math.random() < 0.33)
			BattleManager.actionRemLines(KARRYN_LINE_GLORY_HOLE_APPEAR_MID);
	}
	
	this._gloryBattle_cocksAppeared++;
	this._playthroughRecordGloryCocksAppearedCount++;
	this._recordGloryBattleCocksAppearedCount++;
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
	
	if(target._guest_finishedPissing && !target._guest_gettingServedAfterFinishedPissing && sexAct == SEXACT_BLOWJOB) {
		target._guest_gettingServedAfterFinishedPissing = true;
		this._playthroughRecordGloryFinishedPissingCocksServingCount++;
	}
	
	this._gloryBattle_restUsedInRowCount = 0;
	this._gloryBattle_breatherUsedInRowCount = 0;
};

Game_Actor.prototype.postDamage_ejaculation_gloryBattle = function(target, area, semen) {
	let ejaculatedFromLeftHole = target._guest_atStall === GLORY_LEFT_STALL_ID;
	let ejaculatedFromRightHole = target._guest_atStall === GLORY_RIGHT_STALL_ID;
	
	if(area == CUM_CREAMPIE_PUSSY || area == CUM_CREAMPIE_ANAL) {
		this.gloryBattle_makeSexualNoise(4);
		this._playthroughRecordGloryCreampieML += semen;
		let spillChance = semen * 3 + $gameParty._gloryBattle_guestSatisfaction * 2;
		if(target._ejaculationCount > 1 && spillChance > 0) spillChance *= 1.4;
		if(area == CUM_CREAMPIE_PUSSY) spillChance += this._liquidCreampiePussy * 0.5;
		else if(area == CUM_CREAMPIE_ANAL) spillChance += this._liquidCreampieAnal * 0.5;
		if(Math.randomInt(100) < spillChance) {
			if(ejaculatedFromLeftHole) {
				if(Math.random() < 0.6)
					this.increaseGloryCumOnLeftHole(Math.randomInt(semen) * 0.5, 0);
				else
					this.increaseGloryCumOnLeftHole(Math.randomInt(semen) * 0.5, 1);
			}
			else if(ejaculatedFromRightHole) {
				if(Math.random() < 0.6)
					this.increaseGloryCumOnRightHole(Math.randomInt(semen) * 0.5, 1);
				else
					this.increaseGloryCumOnRightHole(Math.randomInt(semen) * 0.5, 0);
			}
		}
	}
	else if(area == CUM_SWALLOW_MOUTH) {
		this.gloryBattle_makeSexualNoise(4);
		this._playthroughRecordGlorySwallowML += semen;
		let spillChance = semen * 2 + $gameParty._gloryBattle_guestSatisfaction * 2;
		spillChance += this._liquidSwallow * 0.33;
		
		if(Math.randomInt(100) < spillChance) {
			if(ejaculatedFromLeftHole) {
				this.increaseGloryCumOnLeftHole(Math.randomInt(semen) * 0.5);
			}
			else if(ejaculatedFromRightHole) {
				this.increaseGloryCumOnRightHole(Math.randomInt(semen) * 0.5);
			}
		}
	}
	else if(area == CUM_ONTO_FLOOR) {
		this.gloryBattle_makeSexualNoise(2);
		let spillChance = semen * 5 + $gameParty._gloryBattle_guestSatisfaction * 2;
		
		if(Math.randomInt(100) < spillChance) {
			if(ejaculatedFromLeftHole) {
				if(Math.random() < 0.6) {
					let gloryAreaArray = [ 6, 7, 8, 3 ];
					this.increaseGloryCumOnLeftWall(Math.randomInt(semen), gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
				}
				else {
					let gloryAreaArray = [ 3 ];
					this.increaseGloryCumOnLeftToilet(Math.randomInt(semen), gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
				}
			}
			else if(ejaculatedFromRightHole) {
				if(Math.random() < 0.6) {
					let gloryAreaArray = [ 8, 5 ];
					this.increaseGloryCumOnRightWall(Math.randomInt(semen), gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
				}
				else {
					let gloryAreaArray = [ 2, 3 ];
					this.increaseGloryCumOnRightToilet(Math.randomInt(semen), gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
				}
			}
		}
	}
	else {
		this.gloryBattle_makeSexualNoise(3);
		let spillChance = (semen - 3) * 4.5;
		
		if(Math.randomInt(100) < spillChance) {
			if(ejaculatedFromLeftHole) {
				if(area == CUM_BUKKAKE_FACE) {
					if(Math.random() < 0.4) {
						let gloryAreaArray = [ 8, 5, 4 ];
						this.increaseGloryCumOnRightWall(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
					else {
						let gloryAreaArray = [ 1, 1, 2, 3 ];
						this.increaseGloryCumOnRightToilet(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
				}
				else if(area == CUM_BUKKAKE_BOOBS || CUM_BUKKAKE_LEFTARM || CUM_BUKKAKE_RIGHTARM) {
					if(Math.random() < 0.7) {
						let gloryAreaArray = [ 0, 1, 2, 6, 7 ];
						this.increaseGloryCumOnRightWall(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
					else {
						let gloryAreaArray = [ 0, 1, 2 ];
						this.increaseGloryCumOnLeftToilet(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
				}
				else if(area == CUM_BUKKAKE_BUTT || CUM_BUKKAKE_LEFTLEG || CUM_BUKKAKE_RIGHTLEG) {
					if(Math.random() < 0.7) {
						let gloryAreaArray = [ 8, 5, 4, 2, 3 ];
						this.increaseGloryCumOnRightWall(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
					else {
						let gloryAreaArray = [ 2, 3 ];
						this.increaseGloryCumOnLeftToilet(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
				}
			}
			else if(ejaculatedFromRightHole) {
				if(area == CUM_BUKKAKE_FACE) {
					if(Math.random() < 0.7) {
						let gloryAreaArray = [ 3, 4, 8 ];
						this.increaseGloryCumOnLeftWall(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
					else {
						let gloryAreaArray = [ 3 ];
						this.increaseGloryCumOnLeftToilet(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
				}
				else if(area == CUM_BUKKAKE_BOOBS || CUM_BUKKAKE_LEFTARM || CUM_BUKKAKE_RIGHTARM) {
					if(Math.random() < 0.7) {
						let gloryAreaArray = [ 0, 1, 2, 5, 6, 7 ];
						this.increaseGloryCumOnLeftWall(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
					else {
						let gloryAreaArray = [ 0, 1, 2 ];
						this.increaseGloryCumOnRightToilet(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
				}
				else if(area == CUM_BUKKAKE_BUTT || CUM_BUKKAKE_LEFTLEG || CUM_BUKKAKE_RIGHTLEG) {
					if(Math.random() < 0.7) {
						let gloryAreaArray = [ 2, 3, 4, 8, 6, 7 ];
						this.increaseGloryCumOnLeftWall(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
					else {
						let gloryAreaArray = [ 1, 2, 3 ];
						this.increaseGloryCumOnRightToilet(Math.randomInt(semen) * 0.66, gloryAreaArray[Math.randomInt(gloryAreaArray.length)]);
					}
				}
			}
		}
	}
	
	if(target._enemyTempRecordBeingServedInGloryHoleCount > 0) {
		this._playthroughRecordGloryCocksServed++;
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
	return true;
};
Game_Actor.prototype.customReq_gloryBreather = function() {
	if(this.justOrgasmed()) return true;
	if(this.hasNoStamina()) return false;
	return true;
};
Game_Actor.prototype.skillCost_gloryBreather = function() {
	let cost = 0 + this._gloryBattle_breatherUsedInRowCount * 0.5;
	
	return Math.round(cost * this.esc);
};
Game_Actor.prototype.afterEval_gloryBreather = function() {
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	let currentlyInToiletSitLeftPose = this.isInToiletSitLeftPose();
	let currentlyInToiletSitRightPose = this.isInToiletSitRightPose();
	
	if(this.isBodySlotInserted(MOUTH_ID)) {
		if(Karryn.getReactionScore() < VAR_DEF_RS_LV3_REQ) {
			if((currentlyInToiletStandLeftPose || currentlyInToiletSitRightPose) && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
				this.disableBlowjobPoseSkills();
				this.setMouthInserted(false);
				let target = $gameTroop._gloryRightStall;
				target.setBodySlotFree(MOUTH_ID);
				target._targetForBlowjob = false;
				if(!target.isUsingBodySlotPenis(LEFT_HAND_ID)) {
					target.resetPoseStatus();
				}
			}
			else if((currentlyInToiletStandRightPose || currentlyInToiletSitLeftPose) && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
				this.disableBlowjobPoseSkills();
				this.setMouthInserted(false);
				let target = $gameTroop._gloryLeftStall;
				target.setBodySlotFree(MOUTH_ID);
				target._targetForBlowjob = false;
				if(!target.isUsingBodySlotPenis(RIGHT_HAND_ID)) {
					target.resetPoseStatus();
				}
			}
		}
	}
	
	this._gloryBattle_breatherUsedInRowCount++;
	this.resetSexSkillConsUsage(false);
	this.emoteMasterManager_GloryBattle();
};

Game_Actor.prototype.customReq_gloryRest = function() {
	return !this.justOrgasmed() || !this.customReq_gloryBreather();
};
Game_Actor.prototype.skillCost_gloryRest = function() {
	let cost = 2 + this._gloryBattle_restUsedInRowCount + Math.max(this._gloryBattle_restUsedTotalCount, this._gloryBattle_restUsedTotalCount * this.realMaxEnergy * 0.075) + this.realMaxEnergy * 0.1;
	
	return Math.round(cost * this.esc);
};
Game_Actor.prototype.afterEval_gloryRest = function() {
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	let currentlyInToiletSitLeftPose = this.isInToiletSitLeftPose();
	let currentlyInToiletSitRightPose = this.isInToiletSitRightPose();
	let currentlyLegsAreSpread = this.tachieLegs.includes('spread');
	
	let slutLv3 = Karryn.getReactionScore() >= VAR_DEF_RS_LV3_REQ;
	let slutLv2 = Karryn.getReactionScore() >= VAR_DEF_RS_LV2_REQ && !slutLv3;
	let resetToSittingPose = true;
	
	if(currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose) {
		if(slutLv3 || slutLv2) {
			if(!$gameTroop.gloryBattle_rightHoleIsEmpty() || !$gameTroop.gloryBattle_leftHoleIsEmpty())
				resetToSittingPose = false;
				
			if(!this.isBodySlotInserted(LEFT_HAND_ID) && !this.isBodySlotInserted(RIGHT_HAND_ID) && !this.isBodySlotInserted(MOUTH_ID) && !this.isBodySlotInserted(PUSSY_ID) && !this.isBodySlotInserted(ANAL_ID))
				resetToSittingPose = true;
			
			if(this.isBodySlotInserted(LEFT_HAND_ID) && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
				this.disableLeftHandjobPoseSkills();
				this.setLeftHandInserted(false);
				let target = $gameTroop._gloryRightStall;
				target.setBodySlotFree(LEFT_HAND_ID);
				target._targetForHandjob = false;
				if(!target.isUsingBodySlotPenis(MOUTH_ID)) {
					target.resetPoseStatus();
				}
			}
			if(this.isBodySlotInserted(RIGHT_HAND_ID) && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
				this.disableRightHandjobPoseSkills();
				this.setRightHandInserted(false);
				let target = $gameTroop._gloryLeftStall;
				target.setBodySlotFree(RIGHT_HAND_ID);
				target._targetForHandjob = false;
				if(!target.isUsingBodySlotPenis(MOUTH_ID)) {
					target.resetPoseStatus();
				}
			}
			
			if(!slutLv3) {
				if(this.isBodySlotInserted(PUSSY_ID)) {
					if(currentlyInToiletStandLeftPose && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
						this.disablePussySexPoseSkills();
						this.setPussyInserted(false);
						let target = $gameTroop._gloryLeftStall;
						target.setBodySlotFree(PUSSY_ID);
						target._targetForPussySex = false;
						target.resetPoseStatus();
					}
					else if(currentlyInToiletStandRightPose && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
						this.disablePussySexPoseSkills();
						this.setPussyInserted(false);
						let target = $gameTroop._gloryRightStall;
						target.setBodySlotFree(PUSSY_ID);
						target._targetForPussySex = false;
						target.resetPoseStatus();
					}
				}
				
				if(this.isBodySlotInserted(ANAL_ID)) {
					if(currentlyInToiletStandLeftPose && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
						this.disableAnalSexPoseSkills();
						this.setAnalInserted(false);
						let target = $gameTroop._gloryLeftStall;
						target.setBodySlotFree(ANAL_ID);
						target._targetForAnalSex = false;
						target.resetPoseStatus();
					}
					else if(currentlyInToiletStandRightPose && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
						this.disableAnalSexPoseSkills();
						this.setAnalInserted(false);
						let target = $gameTroop._gloryRightStall;
						target.setBodySlotFree(ANAL_ID);
						target._targetForAnalSex = false;
						target.resetPoseStatus();
					}
				}
				
				if(this.isBodySlotInserted(MOUTH_ID)) {
					if(currentlyInToiletStandLeftPose && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
						this.disableBlowjobPoseSkills();
						this.setMouthInserted(false);
						let target = $gameTroop._gloryRightStall;
						target.setBodySlotFree(MOUTH_ID);
						target._targetForBlowjob = false;
						target.resetPoseStatus();
					}
					else if(currentlyInToiletStandRightPose && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
						this.disableBlowjobPoseSkills();
						this.setMouthInserted(false);
						let target = $gameTroop._gloryLeftStall;
						target.setBodySlotFree(MOUTH_ID);
						target._targetForBlowjob = false;
						target.resetPoseStatus();
					}
				}
			}
		}
	}
	else if(currentlyInToiletSitLeftPose || currentlyInToiletSitRightPose) {
		if(slutLv3 || slutLv2) {
			if(!$gameTroop.gloryBattle_rightHoleIsEmpty() || !$gameTroop.gloryBattle_leftHoleIsEmpty())
				resetToSittingPose = false;
				
			if(!this.isBodySlotInserted(LEFT_HAND_ID) && !this.isBodySlotInserted(RIGHT_HAND_ID) && !this.isBodySlotInserted(MOUTH_ID))
				resetToSittingPose = true;
			
			if(this.isBodySlotInserted(LEFT_HAND_ID) && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
				this.disableLeftHandjobPoseSkills();
				this.setLeftHandInserted(false);
				let target = $gameTroop._gloryRightStall;
				target.setBodySlotFree(LEFT_HAND_ID);
				target._targetForHandjob = false;
				if(!target.isUsingBodySlotPenis(MOUTH_ID)) {
					target.resetPoseStatus();
				}
			}
			if(this.isBodySlotInserted(RIGHT_HAND_ID) && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
				this.disableRightHandjobPoseSkills();
				this.setRightHandInserted(false);
				let target = $gameTroop._gloryLeftStall;
				target.setBodySlotFree(RIGHT_HAND_ID);
				target._targetForHandjob = false;
				if(!target.isUsingBodySlotPenis(MOUTH_ID)) {
					target.resetPoseStatus();
				}
			}
			
			if(!slutLv3) {
				if(this.isBodySlotInserted(MOUTH_ID)) {
					if(currentlyInToiletSitRightPose && !$gameTroop.gloryBattle_rightHoleIsEmpty()) {
						this.disableBlowjobPoseSkills();
						this.setMouthInserted(false);
						let target = $gameTroop._gloryRightStall;
						target.setBodySlotFree(MOUTH_ID);
						target._targetForBlowjob = false;
						target.resetPoseStatus();
					}
					else if(currentlyInToiletSitLeftPose && !$gameTroop.gloryBattle_leftHoleIsEmpty()) {
						this.disableBlowjobPoseSkills();
						this.setMouthInserted(false);
						let target = $gameTroop._gloryLeftStall;
						target.setBodySlotFree(MOUTH_ID);
						target._targetForBlowjob = false;
						target.resetPoseStatus();
					}
				}
				
				
			}
		}
	}
	
	if(resetToSittingPose) {
		BattleManager.pullOutAllEnemies();
		
		this.setToiletSittingPose();
		
		if(this.justOrgasmed() || currentlyLegsAreSpread) {
			this.setTachieLegs('spread');
		}
		else {
			this.setTachieLegs('close');
		}
		
	}
	
	this.toiletBattle_resetLeftArmToNormal();
	this.toiletBattle_resetRightArmToNormal();
	
	this.resetSexSkillConsUsage(false);
	
	this._gloryBattle_restUsedInRowCount++;
	this._gloryBattle_restUsedTotalCount++;
	this._gloryBattle_restingTilTurn = $gameTroop.getCurrentTurn_gloryBattle() + GLORY_REST_TURNS;
	this.emoteMasterManager_GloryBattle();
};
Game_Actor.prototype.gloryRestTurnEffect = function() {
	if(this.stamina === this.maxstamina) {
		let fatigueRecovery = GLORY_FATIGUE_RECOVER_RESTING_BASE;
		
		if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_TWO_ID)) fatigueRecovery += 0.25;
		else if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_ONE_ID)) fatigueRecovery += 0.15;
		
		if(this.isUsingThisTitle(TITLE_ID_TOILET_RESTER)) fatigueRecovery += 0.15;
		
		if(this.isBodySlotInserted(MOUTH_ID)) fatigueRecovery *= 0.6;
		if(this.isBodySlotInserted(PUSSY_ID) || this.isBodySlotInserted(ANAL_ID)) fatigueRecovery *= 0.6;
		
		$gameParty.increaseFatigueGain(fatigueRecovery * -1 * this.fatigueRecoveryRate(), true);
		
		this._playthroughRecordGloryTurnsSpentResting++;
	}
	
	if(!this.isAroused()) {
		let pleasureGain = 0;
		
		if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_THREE_ID)) pleasureGain = 1.3;
		else if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_ONE_ID)) pleasureGain = 0.7;
		
		if(pleasureGain > 0) {
			this.gainPleasure(this.getValueOfOrgasmFromPercent(pleasureGain));
		}
	}
};

Game_Actor.prototype.afterEval_glorySkillExit = function() {
	if((this.isHorny || this.justOrgasmed()) && 
	($gameTroop._gloryUrinalA || $gameTroop._gloryUrinalB || $gameTroop._gloryUrinalC || $gameTroop._gloryUrinalD))
		this._gloryBattle_badExit = true;
	else
		this._gloryBattle_safeExit = true;
};

Game_Actor.prototype.showEval_karrynSexSkills_gloryBattle = function() {
	if($gameTroop.gloryBattle_bothHolesAreEmpty() || this.justOrgasmed()) {
		return false;
	}
	else return true;
};

Game_Actor.prototype.showEval_gloryMbSuckFingers = function(isLeftHand, isRightHand) {
	if(!this.showEval_mbSuckFingers())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose();
};
Game_Actor.prototype.showEval_gloryMbTouchNipples = function(isLeftHand, isRightHand) {
	if(!this.showEval_mbTouchNipples())
		return false;
	if(this.justOrgasmed())
		return false;
	if(this.isInToiletStandLeftPose() && isRightHand) return false;
	if(this.isInToiletStandRightPose() && isLeftHand) return false;
	if(this.isInToiletSitLeftPose() && isRightHand) return false;
	if(this.isInToiletSitRightPose() && isLeftHand) return false;
	
	if(this.isInToiletStandLeftPose() && isLeftHand) {
		return this.isBodySlotFree(LEFT_HAND_ID);
	}
	if(this.isInToiletStandRightPose() && isRightHand) {
		return this.isBodySlotFree(RIGHT_HAND_ID);
	}
	
	return true;
};
Game_Actor.prototype.showEval_gloryMbTouchClit = function(isLeftHand, isRightHand) {
	if(!this.showEval_mbTouchClit_noToy())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose() || (isLeftHand && this.isInToiletSitLeftPose()) || (isRightHand && this.isInToiletSitRightPose());
};
Game_Actor.prototype.showEval_gloryMbTouchPussy = function(isLeftHand, isRightHand) {
	if(!this.showEval_mbTouchPussy_noToy())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose() || (isLeftHand && this.isInToiletSitLeftPose()) || (isRightHand && this.isInToiletSitRightPose());
};
Game_Actor.prototype.showEval_gloryMbTouchAnal = function(isLeftHand, isRightHand) {
	if(!this.showEval_mbTouchAnal_noToy())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose();
};

Game_Actor.prototype.showEval_gloryMbClitToy = function(isLeftHand, isRightHand) {
	let hasClitToy = this.isStateAffected(STATE_GLORY_PINK_ROTOR_ID) || this.isWearingClitToy();
	if(!hasClitToy || this.pussyDesire < this.clitToyPussyDesireRequirement())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose() || (isLeftHand && this.isInToiletSitLeftPose()) || (isRightHand && this.isInToiletSitRightPose());
};
Game_Actor.prototype.showEval_gloryMbPussyToy = function(isLeftHand, isRightHand) {
	let hasPussyToy = this.isStateAffected(STATE_GLORY_PENIS_DILDO_ID) || this.isWearingPussyToy();
	if(this.isVirgin())
		return false;
	if(!hasPussyToy || this.pussyDesire < this.pussyToyPussyDesireRequirement())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose();
};
Game_Actor.prototype.showEval_gloryMbAnalToy = function(isLeftHand, isRightHand) {
	let hasAnalToy = this.isStateAffected(STATE_GLORY_ANAL_BEADS_ID) || this.isWearingAnalToy();
	if(!hasAnalToy || this.buttDesire < this.analPettingButtDesireRequirement())
		return false;
	if(this.justOrgasmed())
		return false;
	return this.isInToiletSittingPose();
};

Game_Actor.prototype.dmgFormula_gloryMasturbateSkill = function(area, useLeftHand, useRightHand, toyPlay) {
	let target = this;
	let usingClitToy = target.isWearingClitToy();
	let usingPussyToy = target.isWearingPussyToy();
	let usingAnalToy = target.isWearingAnalToy();
	let hitBySkillTypeSet = false;
	
	let currentlyInToiletSittingPose = this.isInToiletSittingPose();
	let currentlyInToiletSitLeftPose = this.isInToiletSitLeftPose();
	let currentlyInToiletSitRightPose = this.isInToiletSitRightPose();
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	
	let enemySkillLvl = this.masturbateLvl();
	let enemySkillRating = this.masturbateSkillRating();
	let staminaPercent = target.hp / target.mhp;
	let targetPettingRate = 1;
	let baseDmg = 0;
	let targetDesire = 0;
	let targetSensitivity = 0;
	
	this.setAllowTachieUpdate(false);

	if(area == AREA_NIPPLES) {
		baseDmg = BASEDMG_PETTING_NIPPLES;
		targetDesire = target.boobsDesire;
		targetSensitivity = target.nipplesSensitivity();
		this.addToActorNipplesPettedRecord(false, false, true);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_NIPPLES);
	}
	else if(area == AREA_CLIT) {
		if(toyPlay) {
			baseDmg = BASEDMG_TOY_PINK_ROTOR;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.clitSensitivity();
			this.addToClitToyUsedByEnemyRecord(false);
		}
		else {
			baseDmg = BASEDMG_PETTING_CLIT;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.clitSensitivity();
			this.addToActorClitPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_CLIT);
		}
	}
	else if(area == AREA_PUSSY) {
		if(toyPlay) {
			baseDmg = BASEDMG_TOY_PENIS_DILDO;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.pussySensitivity();
			this.addToPussyToyUsedByEnemyRecord(false);
		}
		else {
			baseDmg = BASEDMG_PETTING_PUSSY;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.pussySensitivity();
			this.addToActorPussyPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_PUSSY);
		}
	}
	else if(area == AREA_ANAL) {
		if(toyPlay) {
			baseDmg = BASEDMG_TOY_ANAL_BEADS;
			targetDesire = target.buttDesire;
			targetSensitivity = target.analSensitivity();
			this.addToAnalToyUsedByEnemyRecord(false);
		}
		else {
			baseDmg = BASEDMG_PETTING_ANAL;
			targetDesire = target.buttDesire;
			targetSensitivity = target.analSensitivity();
			this.addToActorAnalPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_ANUS);
		}
	}
	else if(area == AREA_FINGERS) {
		baseDmg = BASEDMG_SUCKING_FINGERS;
		targetDesire = target.mouthDesire;
		targetSensitivity = target.mouthSensitivity();
		this.addToActorFingersSuckedRecord(false, false, true);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_SUCK_FINGERS);
	}
	
	else console.log("Error dmgFormula gloryMasturbateSkill area: " + area);
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetPettingRate;
	let targetPleasureGain = (targetDesireGain + this.dex * 1.3) * enemySkillRating * targetPettingRate * targetSensitivity;

	//targetPleasureGain *= Math.max(targetPettingRate * targetSensitivity * 0.01, 1 + (0.02 * (this.dex - target.end)));
	
	targetPleasureGain *= target.passivePettingPleasureRate();
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetPettingRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	
	let staminaDmg = target.skillCost_karrynOnaniInBattleSkills();
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .6;
	result.desireRandomDamage = targetDesireGain * .4;
	result.desireCockWeight = 3;
	result.desireTarget = area;

	if(area == AREA_NIPPLES) {
		target.addToActorNipplesPleasureRecord(targetPleasureGain);
	}
	else if(area == AREA_PUSSY) {
		target.addToActorPussyPleasureRecord(targetPleasureGain);
	}
	else if(area == AREA_CLIT) {
		target.addToActorClitPleasureRecord(targetPleasureGain);
	}
	else if(area == AREA_ANAL) {
		target.addToActorAnalPleasureRecord(targetPleasureGain);
	}
	else if(area == AREA_FINGERS) {
		target.addToActorMouthPleasureRecord(targetPleasureGain);
	}

	/////////
	//Tachie
	
	let useLevel2Kuri = false;
	if(this.isAroused && this.reactionScore_clitPettingPassive() >= 60) 
		useLevel2Kuri = true;
	
	if(useRightHand) {
		let tachieRightArmName = '';
		
		if(area == AREA_NIPPLES) {
			if(currentlyInToiletSittingPose) {
				tachieRightArmName = 'chikubi_1';
			}
			else {
				tachieRightArmName = 'chikubi';
			}
			
			if(this.isInToiletSitLeftPose() || this.isInToiletSitRightPose()) this.setTachieLegs('spread');
		}
		else if(area == AREA_PUSSY) {
			if(toyPlay) {
				hitBySkillTypeSet = true;
				
				if(!usingPussyToy) {
					this.setPussyToy_PenisDildo(false);
					this.removeState(STATE_GLORY_PENIS_DILDO_ID);
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_PUSSY);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_INSERT_PENIS_DILDO);
					this.addToPussyToySelfInsertedRecord();
				}
				else {
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PENIS_DILDO);
				}
				
				if(currentlyInToiletSittingPose) {
					tachieRightArmName = 'toyP_1';
					this.setTachiePussyToyExtension_gloryBattle('right_1_');
					
					if(this.tachieLeftArm.includes('manko') || this.tachieLeftArm.includes('toyP')) {
						this.toiletBattle_resetLeftArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
			}
			else {
				if(currentlyInToiletSittingPose) {
					tachieRightArmName = 'manko_1';
					
					if(this.tachieLeftArm.includes('manko')) {
						this.toiletBattle_resetLeftArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieRightArmName = 'manko';
					
					this.setTachieLegs('spread');
				}
			}
		}
		else if(area == AREA_CLIT) {
			if(toyPlay) {
				hitBySkillTypeSet = true;
				
				if(!usingClitToy) {
					this.setClitToy_PinkRotor(false);
					this.removeState(STATE_GLORY_PINK_ROTOR_ID);
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_CLIT);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_INSERT_PINK_ROTOR);
					this.addToClitToySelfInsertedRecord();
				}
				else {
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_CLIT);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR);
				}
				
				if(currentlyInToiletSittingPose) {
					tachieRightArmName = 'toyC_1';
					
					if(this.tachieLeftArm.includes('kuri') || this.tachieLeftArm.includes('toyC')) {
						this.toiletBattle_resetLeftArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieRightArmName = 'kuri';
					
					this.setTachieLegs('spread');
				}
			}
			else {
				if(currentlyInToiletSittingPose) {
					if(useLevel2Kuri)
						tachieRightArmName = 'kuri_2';
					else
						tachieRightArmName = 'kuri_1';
					
					if(this.tachieLeftArm.includes('kuri') || this.tachieLeftArm.includes('toyC')) {
						this.toiletBattle_resetLeftArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieRightArmName = 'kuri';
					
					this.setTachieLegs('spread');
				}
			}
		}
		else if(area == AREA_ANAL) {
			if(toyPlay) {
				hitBySkillTypeSet = true;
				
				if(!usingAnalToy) {
					this.setAnalToy_AnalBeads(false);
					this.removeState(STATE_GLORY_ANAL_BEADS_ID);
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_ANAL);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_INSERT_ANAL_BEADS);
					this.addToAnalToySelfInsertedRecord();
				}
				else {
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_ANAL);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS);
				}
				
				if(currentlyInToiletSittingPose) {
					tachieRightArmName = 'toyA_1';
					this.setTachieAnalToyExtension_gloryBattle('right_');
					
					if(this.tachieLeftArm.includes('anaru') || this.tachieLeftArm.includes('toyA')) {
						this.toiletBattle_resetLeftArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
			}
			else {
				if(currentlyInToiletSittingPose) {
					tachieRightArmName = 'anaru_1';
					
					if(this.tachieLeftArm.includes('anaru')) {
						this.toiletBattle_resetLeftArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieRightArmName = 'anaru';
					
					this.setTachieLegs('spread');
				}
			}
		}
		else if(area == AREA_FINGERS) {
			if(currentlyInToiletSittingPose) {
				tachieRightArmName = 'suck_fingers_1';
				
				if(this.tachieLeftArm.includes('suck_fingers')) {
					this.toiletBattle_resetLeftArmToNormal();
				}
			}
		}
		
		this.setTachieRightArm(tachieRightArmName);
	}
	else if(useLeftHand) {
		let tachieLeftArmName = '';
		
		if(area == AREA_NIPPLES) {
			if(currentlyInToiletSittingPose) {
				tachieLeftArmName = 'chikubi_1';
			}
			else {
				tachieLeftArmName = 'chikubi';
			}
			
			if(this.isInToiletSitLeftPose() || this.isInToiletSitRightPose()) this.setTachieLegs('spread');
		}
		else if(area == AREA_PUSSY) {
			if(toyPlay) {
				hitBySkillTypeSet = true;
				
				if(!usingPussyToy) {
					this.setPussyToy_PenisDildo(false);
					this.removeState(STATE_GLORY_PENIS_DILDO_ID);
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_PUSSY);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_INSERT_PENIS_DILDO);
					this.addToPussyToySelfInsertedRecord();
				}
				else {
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PENIS_DILDO);
				}
				
				if(currentlyInToiletSittingPose) {
					tachieLeftArmName = 'toyP_1';
					this.setTachiePussyToyExtension_gloryBattle('left_1_');
					
					if(this.tachieRightArm.includes('manko') || this.tachieRightArm.includes('toyP')) {
						this.toiletBattle_resetRightArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
			}
			else {
				if(currentlyInToiletSittingPose) {
					tachieLeftArmName = 'manko_1';
					
					if(this.tachieRightArm.includes('manko')) {
						this.toiletBattle_resetRightArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieLeftArmName = 'manko';
					
					this.setTachieLegs('spread');
				}
			}
		}
		else if(area == AREA_CLIT) {
			if(toyPlay) {
				hitBySkillTypeSet = true;
				
				if(!usingClitToy) {
					this.setClitToy_PinkRotor(false);
					this.removeState(STATE_GLORY_PINK_ROTOR_ID);
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_CLIT);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_INSERT_PINK_ROTOR);
					this.addToClitToySelfInsertedRecord();
				}
				else {
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_CLIT);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR);
				}
				
				if(currentlyInToiletSittingPose) {
					tachieLeftArmName = 'toyC_1';
					
					if(this.tachieRightArm.includes('kuri') || this.tachieRightArm.includes('toyC')) {
						this.toiletBattle_resetRightArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieLeftArmName = 'kuri';
					
					this.setTachieLegs('spread');
				}
			}
			else {
				if(currentlyInToiletSittingPose) {
					if(useLevel2Kuri) {
						tachieLeftArmName = 'kuri_2';
					}
					else
						tachieLeftArmName = 'kuri_1';
					
					if(this.tachieRightArm.includes('kuri')) {
						this.toiletBattle_resetRightArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieLeftArmName = 'kuri';
					
					this.setTachieLegs('spread');
				}
			}
		}
		else if(area == AREA_ANAL) {
			if(toyPlay) {
				hitBySkillTypeSet = true;
				
				if(!usingAnalToy) {
					this.setAnalToy_AnalBeads(false);
					this.removeState(STATE_GLORY_ANAL_BEADS_ID);
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_ANAL);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_INSERT_ANAL_BEADS);
					this.addToAnalToySelfInsertedRecord();
				}
				else {
					target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_ANAL);
					BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS);
				}
				
				if(currentlyInToiletSittingPose) {
					tachieLeftArmName = 'toyA_1';
					this.setTachieAnalToyExtension_gloryBattle('left_');
					
					if(this.tachieRightArm.includes('anaru') || this.tachieRightArm.includes('toyA')) {
						this.toiletBattle_resetRightArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
			}
			else {
				if(currentlyInToiletSittingPose) {
					tachieLeftArmName = 'anaru_1';
					
					if(this.tachieRightArm.includes('anaru')) {
						this.toiletBattle_resetRightArmToNormal();
					}
					
					this.setTachieLegs('spread');
				}
				else {
					tachieLeftArmName = 'anaru';
					
					this.setTachieLegs('spread');
				}
			}
		}
		else if(area == AREA_FINGERS) {
			if(currentlyInToiletSittingPose) {
				tachieLeftArmName = 'suck_fingers_1';
				
				if(this.tachieRightArm.includes('suck_fingers')) {
					this.toiletBattle_resetRightArmToNormal();
				}
				
			}
		}
		
		this.setTachieLeftArm(tachieLeftArmName);
	}
	
	if(currentlyInToiletSittingPose) {
		if(useRightHand) {
			if($gameTroop._gloryLeftStall && this.isBodySlotPenis(RIGHT_HAND_ID))
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
		}
		else if(useLeftHand) {
			if($gameTroop._gloryRightStall && this.isBodySlotPenis(LEFT_HAND_ID))
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
		}
	}
	
	if(!hitBySkillTypeSet)
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASTURBATE);
	
	this.emoteMasterManager_GloryBattle();
	this.setAllowTachieUpdate(true);
	
	this.resetSexSkillConsUsage(false);
	
	return staminaDmg;
};

Game_Actor.prototype.afterEval_gloryMasturbateSkill = function(area, toyPlay) {
	if(!this._gloryBattle_masturbated) {
		this.addToActorMasturbatedGloryHoleRecord();
		this._gloryBattle_masturbated = true;
	}
	
	let sexualNoise = 2;
	
	if(this.tachieRightArm.includes('suck_fingers') || this.tachieLeftArm.includes('suck_fingers'))
		sexualNoise -= 1.5;
	if(!this.isAroused) 
		sexualNoise -= 1;
	
	if(area == AREA_PUSSY || area == AREA_ANAL) {
		sexualNoise += 1;
	}
	if(area == AREA_CLIT && toyPlay) {
		sexualNoise += 2;
	}
	
	sexualNoise = Math.max(sexualNoise, 1);
	
	if(this.isHorny) sexualNoise *= 1.5;
	this.gloryBattle_makeSexualNoise(sexualNoise);
	
	if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID)) {
		$gameParty.increaseFatigueGain(GLORY_FATIGUE_RECOVER_ONANI * -1 * this.fatigueRecoveryRate(), true);
	}
	
	this._gloryBattle_restUsedInRowCount = 0;
	this._gloryBattle_breatherUsedInRowCount = 0;
	
	this.gainDexterityExp(40, this.level);
	this.gainStaminaExp(15, this.level);
};

Game_Actor.prototype.beforeEval_gloryRefundCost = function(cost) {
	this.setHp(Math.round(this.hp + cost));
};
Game_Actor.prototype.beforeEval_glorySpendCost = function(cost) {
	this.setHp(Math.round(this.hp - cost));
};

///////
// Posejoin

Game_Actor.prototype.gloryBattle_beforePoseJoin = function(target, sexAct, isRightHJ, isLeftHJ) {
	if(!$gameParty.isInGloryBattle) return false;
	
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
	
	let currentlyLegsAreSpread = this.tachieLegs.includes('spread');
	let currentlyLegsAreClose = this.tachieLegs.includes('close');
	
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let targetIsLeftHole = target._guest_atStall === GLORY_LEFT_STALL_ID;
	let targetIsRightHole = target._guest_atStall === GLORY_RIGHT_STALL_ID;
	
	if(sexAct === SEXACT_HANDJOB) {
		if(!currentlyInToiletSittingPose) {
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
				if(!leftHoleIsEmpty && currentlyGivingLeftHoleHJ) {
					this.setToiletSittingPose();
				}
				else {
					this.setToiletSitRightPose();
					this.setTachieLegs('spread');
				}
			}
			else if(currentlyInToiletStandLeftPose && targetIsLeftHole) {
				BattleManager.pullOutEnemy($gameTroop._gloryLeftStall);
				BattleManager.pullOutEnemy($gameTroop._gloryRightStall);
				if(!rightHoleIsEmpty && currentlyGivingRightHoleHJ) {
					this.setToiletSittingPose();
				}
				else {
					this.setToiletSitLeftPose();
					this.setTachieLegs('spread');
				}
			}
			
			let changedToSittingPose = this.isInToiletSittingPose();
			
			if(changedToSittingPose) {
				if(currentlyLegsAreSpread || currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose)
					this.setTachieLegs('spread');
				else
					this.setTachieLegs('close');
				
				if(targetIsRightHole && !leftHoleIsEmpty && currentlyGivingLeftHoleHJ) {
					$gameTroop._gloryLeftStall.beforeEval_join_toilet_righthand(this, true);
				}
				else if(targetIsLeftHole && !rightHoleIsEmpty && currentlyGivingRightHoleHJ) {
					$gameTroop._gloryRightStall.beforeEval_join_toilet_lefthand(this, true);
				}
			}
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
				$gameTroop._gloryLeftStall.beforeEval_join_toilet_righthand(this, true);
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
				$gameTroop._gloryRightStall.beforeEval_join_toilet_lefthand(this, true);
			}
		}
	}
	else if(sexAct === SEXACT_PUSSYSEX || sexAct === SEXACT_ANALSEX) {
		if(sexAct === SEXACT_PUSSYSEX && this.isWearingPussyToy()) {
			this.addState(STATE_GLORY_PENIS_DILDO_ID);
			this.removePussyToy();
			if(targetIsLeftHole && currentlyInToiletStandLeftPose && this.tachieLeftArm.includes('chikubi')) {
				this.toiletBattle_resetLeftArmToNormal();
			}
			else if(targetIsRightHole && currentlyInToiletStandRightPose && this.tachieRightArm.includes('chikubi')) {
				this.toiletBattle_resetRightArmToNormal();
			}
		}
		else if(sexAct === SEXACT_ANALSEX && this.isWearingAnalToy()) {
			this.addState(STATE_GLORY_ANAL_BEADS_ID);
			this.removeAnalToy();
			if(targetIsLeftHole && currentlyInToiletStandLeftPose && this.tachieLeftArm.includes('chikubi')) {
				this.toiletBattle_resetLeftArmToNormal();
			}
			else if(targetIsRightHole && currentlyInToiletStandRightPose && this.tachieRightArm.includes('chikubi')) {
				this.toiletBattle_resetRightArmToNormal();
			}
		}
		
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
					$gameTroop._gloryRightStall.beforeEval_join_toilet_lefthand(this, true);
				}
				if(currentlyInToiletSitRightPose && currentlyGivingBJ) {
					$gameTroop._gloryRightStall.beforeEval_join_toilet_mouth(this, true);
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
					$gameTroop._gloryLeftStall.beforeEval_join_toilet_righthand(this, true);
				}
				if(currentlyInToiletSitLeftPose && currentlyGivingBJ) {
					$gameTroop._gloryLeftStall.beforeEval_join_toilet_mouth(this, true);
				}
				
			}
			
		}
	}

	target.addToBeingServedInGloryHoleCountRecord(this);
	
};


Game_Actor.prototype.gloryBattle_postEnemyPullout = function() {
	let currentlyInToiletSittingPose = this.isInToiletSittingPose();
	let currentlyInToiletSitLeftPose = this.isInToiletSitLeftPose();
	let currentlyInToiletSitRightPose = this.isInToiletSitRightPose();
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	
	let currentlyLegsAreSpread = this.tachieLegs.includes('spread');
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
			if(this.justOrgasmed() || currentlyLegsAreSpread)
				this.setTachieLegs('spread');
			else
				this.setTachieLegs('close');
			
			if(currentlyGivingLeftHoleHJ && !leftHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_toilet_righthand(this, true);
			}
			if(currentlyGivingRightHoleHJ && !rightHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_toilet_lefthand(this, true);
			}
		}
	}
	
	if(currentlyHavingPussySex || currentlyHavingAnalSex) {
		if(!currentlyGivingBJ && !currentlyHavingPussySex && !currentlyHavingAnalSex) {
			this.setToiletSittingPose();
			if(this.justOrgasmed() || currentlyLegsAreSpread)
				this.setTachieLegs('spread');
			else
				this.setTachieLegs('close');
			
			if(currentlyGivingLeftHoleHJ && !leftHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_toilet_righthand(this, true);
			}
			if(currentlyGivingRightHoleHJ && !rightHoleIsEmpty) {
				$gameTroop._gloryLeftStall.beforeEval_join_toilet_lefthand(this, true);
			}
		}
		
	}
	
};

// Tachie

Game_Actor.prototype.toiletBattle_resetLeftArmToNormal = function() {
	if(this.isInToiletSittingPose()) {
		this.setTachieLeftArm('normal_1');
		this.setTachieSemenLeftArmExtension('normal_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else {
		this.setTachieLeftArm('normal');
	}
	
	//this.setTachieSemenLeftArmExtension('normal_');
	//this.setTachieSemenLeftBoobExtension('normal_');
};
Game_Actor.prototype.toiletBattle_resetRightArmToNormal = function() {
	if(this.isInToiletSittingPose()) {
		this.setTachieRightArm('normal_1');
		this.setTachieSemenRightArmExtension('normal_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else {
		this.setTachieRightArm('normal');
	}
	
	//this.setTachieSemenRightArmExtension('normal_');
	//this.setTachieSemenRightBoobExtension('normal_');
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
	
	this._gloryRiotingEvent = false;
	this._gloryRiotingMapID = -1;
	this._gloryRiotersLeftToSpawn = 0;
	this._gloryRiotersLeftToSatisfy = 0;
	this._gloryRiotingEventHappenedCount = 0;

	this._gloryTurnCounter = 0;

	this._gloryGuestsSpawnedCount = 0;
	this._gloryGuestLastSpawnedTurn = 0;
	this._gloryLastHoleToEjaculate = -1;
	
	this._gloryGuestLastLeaveLeftStallOnTurn = -1;
	this._gloryGuestLastLeaveRightStallOnTurn = -1;
	
	this.calculateGloryGuestsSpawnLimit();
	
	this._toiletObs = new Game_Enemy(TOILET_OBS_ENEMY_ID, 0, 0, false, TOILET_OBS_ENEMY_ID);
	this._enemies.push(this._toiletObs);
	
	if($gameParty._gloryReputation >= 7) {
		let enemyId = 122;
		let enemy = this.setup_gloryBattle_guest(enemyId, true);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy._guest_isStartingNerd = true;
		enemy._guest_intentIsForHole = false;
		enemy._guest_intentIsForEating = false;
		let standbyTurns = 3 + Math.randomInt(3)
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID)) standbyTurns += 2;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) standbyTurns += 1;
		if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) standbyTurns += 1;
		enemy._guest_startingNerdLeavesOnTurn = standbyTurns;
		enemy._guest_atStall = GLORY_RIGHT_STALL_ID;
		enemy.setGloryHoleOrgasmSkills();
		$gameTroop._gloryRightStall = enemy;

	}
		
	if($gameParty._gloryReputation >= 15) {
		let enemyId = this.gloryBattle_validGuestId();
		let enemy = this.setup_gloryBattle_guest(enemyId, true);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy._guest_intentIsForHole = false;
		enemy._guest_intentIsForEating = false;
		enemy._guest_currentlyPissing = true;
		enemy._guest_finishPissingOnTurn = enemy._guest_takeToPeeTurns;
		enemy._guest_atStall = GLORY_LEFT_STALL_ID;
		enemy.setGloryHoleOrgasmSkills();
		$gameTroop._gloryLeftStall = enemy;
		
	}
};

Game_Troop.prototype.calculateGloryGuestsSpawnLimit = function() {
	let spawnLimit = 3;
	
	//Food & Drugs Edicts
	if(!Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) {
		spawnLimit -= 3;
	}
	else {
		if(Karryn.hasEdict(EDICT_EXPAND_INMATE_MENU)) {
			spawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) {
			spawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) {
			spawnLimit += 1;
		}
		if(Karryn.hasEdict(EDICT_PAY_FOR_BETTER_FOOD)) {
			spawnLimit -= 1;
		}
	}
	
	//Level 2 Edicts
	if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
		spawnLimit += 1;
	}
	
	if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
		spawnLimit += 1;
	}
	else if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) {
		spawnLimit -= 1;
	}
	
	if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS) && Karryn.hasEdict(EDICT_REPAIR_CLASSROOM)) {
		spawnLimit += 1;
	}
	if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES) && Karryn.hasEdict(EDICT_REPAIR_READING_ROOM)) {
		spawnLimit += 1;
	}
	if(Karryn.hasEdict(EDICT_REPAIR_STAFF_LOUNGE)) {
		spawnLimit += 1;
	}
	if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) {
		spawnLimit += 1;
	}
	
	if(Karryn.hasEdict(EDICT_INMATE_JANITORS)) {
		spawnLimit += 1;
	}
	if(Karryn.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) {
		spawnLimit += 1;
	}
	
	//Passives
	if(Karryn.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) {
		spawnLimit += 3;
	}
	else if(Karryn.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID)) {
		spawnLimit += 2;
	}
	else if(Karryn.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) {
		spawnLimit += 1;
	}
	
	//Levels Status
	if(Prison.prisonLevelOneIsRioting()) {
		spawnLimit -= 2;
	}
	else if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
		spawnLimit += 1;
	}
	if(Prison.prisonLevelTwoIsRioting()) {
		spawnLimit -= 2;
	}
	if(!Prison.prisonLevelThreeIsRioting() && Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) {
		spawnLimit += 1;
	}
	if(!Prison.prisonLevelFourIsRioting() && Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) {
		spawnLimit += 1;
	}
	
	if($gameParty._gloryReputation >= 10) {
		spawnLimit += 5 + Math.round(($gameParty._gloryReputation - 10) * 0.2);
	}
	else {
		spawnLimit += Math.round($gameParty._gloryReputation * 0.5);
	}
	
	this._gloryGuestsSpawnLimit = Math.max(2, spawnLimit);
};

Game_Troop.prototype.getCurrentTurn_gloryBattle = function() {
	return this._gloryTurnCounter;
};

Game_Troop.prototype.gloryBattle_leftHoleIsEmpty = function() {
	return !this._gloryLeftStall || 
	(this._gloryLeftStall && (!this._gloryLeftStall._guest_atStall || !this._gloryLeftStall._guest_showedThroughHole));
};
Game_Troop.prototype.gloryBattle_rightHoleIsEmpty = function() {
	return !this._gloryRightStall || 
	(this._gloryRightStall && (!this._gloryRightStall._guest_atStall || 
 !this._gloryRightStall._guest_showedThroughHole));
};
Game_Troop.prototype.gloryBattle_bothHolesAreEmpty = function() {
	return this.gloryBattle_leftHoleIsEmpty() && this.gloryBattle_rightHoleIsEmpty();
};

Game_Troop.prototype.gloryBattle_calculateChanceToSpawnGuest = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let chance = GLORY_SPAWN_BASE_CHANCE;
	
	chance += 2 * $gameParty._gloryReputation;
	chance += 2 * $gameParty._gloryBattle_guestSatisfaction;
	
	if(Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL))
		chance += 3;
	if(Karryn.hasEdict(EDICT_INMATE_JANITORS))
		chance += 2;
	if(Karryn.hasEdict(EDICT_REPAIR_STAFF_LOUNGE))
		chance += 1;
	if(Karryn.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT))
		chance += 1;
	
	if(Prison.prisonLevelTwoIsRioting())
		chance -= 10;
	if(Prison.prisonLevelOneIsRioting())
		chance -= 4;
	
	return chance;
};

Game_Troop.prototype.gloryBattle_calculateChanceForSpawnedGuestIsHereForHole = function(enemy) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let chance = 0;
	
	if(enemy._guest_isRioter) return 100;
	
	chance += enemy._enemyRecordGloryBattleEjaculationCount * 25;
	chance += $gameParty._gloryReputation * 2;
	chance += $gameParty._gloryBattle_guestSatisfaction * 5;
	
	if(enemy.isHorny || enemy.hasHornyPrefix()) chance += 50;
	else if($gameParty._gloryBattle_guestSatisfaction < 0) chance -= 10;
	
	if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS) && Karryn.hasEdict(EDICT_REPAIR_CLASSROOM)) {
		if(Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS))
			chance += 15;
		else
			chance += 10;
	}
	if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES) && Karryn.hasEdict(EDICT_REPAIR_READING_ROOM)) {
		if(Karryn.hasEdict(EDICT_SUPPLY_MODEL_OF_KARRYNS_BODY))
			chance += 10 + $gameParty._gloryReputation * 0.5;
		else
			chance += 5;
	}
	
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD) && this.isInmate)
		chance += 10;
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES) && this.isInmate)
		chance += 10;
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_GUARD_FOOD) && this.isGuardType)
		chance += 10;
	
	if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID))
		chance += 20;
	else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID))
		chance += 10;
	
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
		chance += 45;
	else if(enemy.hasGoodPrefix() || enemy.hasStrongPrefix() || enemy.hasDexterousPrefix() || enemy.hasSadoPrefix() || enemy.hasAgilePrefix())
		chance -= 25;
	else if(enemy.hasElitePrefix())
		chance -= 45;
	
	if(enemy.isNerdType)
		chance *= 2;
	
	return chance;
};

Game_Troop.prototype.gloryBattle_gloryBattle_checkRiotingEventStart = function() {
	let chanceToStart = 0;
	let levelOneIsRioting = Prison.prisonLevelOneIsRioting();
	let levelTwoIsRioting = Prison.prisonLevelTwoIsRioting();
	
	if(this._gloryRiotingEvent || this._gloryGuestsSpawnedCount >= this._gloryGuestsSpawnLimit || (!levelOneIsRioting && !levelTwoIsRioting)) return false;
	
	if(this.getCurrentTurn_gloryBattle() % 4 === 0 || this.getCurrentTurn_gloryBattle() % 7 === 0) {
		if($gameParty._gloryBattle_guestSatisfaction >= 0 && $gameParty._gloryReputation >= 5 && $gameParty._gloryBattle_guestSatisfaction >= 15 - $gameParty._gloryReputation * 0.5) {
			if(levelTwoIsRioting)
				chanceToStart += 11;
			if(levelOneIsRioting) 
				chanceToStart += 5;
			
			if(this.getCurrentTurn_gloryBattle() < 10) 
				chanceToStart *= 0.6;
			else if(this.getCurrentTurn_gloryBattle() >= 20 && this._gloryRiotingEventHappenedCount === 0 && $gameParty._gloryReputation >= 15)
				chanceToStart *= 3;
			
			chanceToStart -= this._gloryRiotingEventHappenedCount * 4;
		}
	}

	if(Math.randomInt(100) < chanceToStart) {
		let riotingMapIdArray = [];
			
		if(levelOneIsRioting) {
			if($gameParty._prisonLevelOne_workshopRioting) riotingMapIdArray.push(MAP_ID_WORKSHOP);
			if($gameParty._prisonLevelOne_laundryRioting) riotingMapIdArray.push(MAP_ID_LAUNDRY);
			if($gameParty._prisonLevelOne_dishwashingRioting) riotingMapIdArray.push(MAP_ID_DISH_WASHING);
			if($gameParty._prisonLevelOne_receptionRioting) riotingMapIdArray.push(MAP_ID_RECEPTION);
		}
		if(levelTwoIsRioting) {
			if($gameParty._prisonLevelTwo_meetingRoomRioting) riotingMapIdArray.push(MAP_ID_MEETING_ROOM);
			if($gameParty._prisonLevelTwo_researchRioting) riotingMapIdArray.push(MAP_ID_RESEARCH);
			if($gameParty._prisonLevelTwo_staffLoungeRioting) riotingMapIdArray.push(MAP_ID_STAFF_LOUNGE);
			if($gameParty._prisonLevelTwo_classroomRioting) riotingMapIdArray.push(MAP_ID_CLASSROOM);
			if($gameParty._prisonLevelTwo_readingRoomRioting) riotingMapIdArray.push(MAP_ID_READING_ROOM);
		}
		
		if(riotingMapIdArray.length > 0) {
			this._gloryRiotingEvent = true;
			this._gloryRiotingEventHappenedCount++;
			this._gloryRiotingMapID = riotingMapIdArray[Math.randomInt(riotingMapIdArray.length)];
			
			let riotersCount = Math.randomInt(3) + 2;
			this._gloryRiotersLeftToSpawn = riotersCount;
			this._gloryRiotersLeftToSatisfy = riotersCount;
		}
	}
	
	
};

Game_Troop.prototype.gloryBattle_checkRiotingEventEnd = function() {
	if(this._gloryRiotingEvent && this._gloryRiotersLeftToSpawn <= 0 && this._gloryRiotersLeftToSatisfy <= 0) {
		if(this._gloryRiotingMapID === MAP_ID_LAUNDRY) {
			$gameSelfSwitches.setValue([MAP_ID_LAUNDRY, 4, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_LAUNDRY, 5, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_DISH_WASHING) {
			$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 6, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 7, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_RECEPTION) {
			$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 42, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 43, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 44, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_WORKSHOP) {
			$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 5, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 6, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 7, "D"], true);
		}
		
		else if(this._gloryRiotingMapID === MAP_ID_MEETING_ROOM) {
			$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 4, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 6, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 7, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_RESEARCH) {
			$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 4, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 5, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 6, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 7, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_STAFF_LOUNGE) {
			$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 6, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 4, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_CLASSROOM) {
			$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 4, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 3, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 6, "D"], true);
		}
		else if(this._gloryRiotingMapID === MAP_ID_READING_ROOM) {
			$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 4, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 5, "D"], true);
			$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 6, "D"], true);
		}

		this._gloryRiotingEvent = false;
		$gameParty.riotingRoomsCheck();
	}
};

//on turn end
Game_Troop.prototype.onTurnEndSpecial_gloryBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	////////////
	//Turn counter increment and spawn guest
	this._gloryTurnCounter++;
	actor._gloryBattle_turnsTillMentalPhase = Math.max(0, actor._gloryBattle_turnsTillMentalPhase - 1);
	this.gloryBattle_gloryBattle_checkRiotingEventStart();
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
		
		actor._playthroughRecordGloryLongestStallQueue = Math.max(actor._playthroughRecordGloryLongestStallQueue, this._gloryStallQueue.length);
		
		if(!this._gloryLeftStall && $gameTroop._gloryGuestLastLeaveLeftStallOnTurn + 1 < $gameTroop.getCurrentTurn_gloryBattle())
			availableStallsArray.push(GLORY_LEFT_STALL_ID);
		if(!this._gloryRightStall && $gameTroop._gloryGuestLastLeaveRightStallOnTurn + 1 < $gameTroop.getCurrentTurn_gloryBattle()) 
			availableStallsArray.push(GLORY_RIGHT_STALL_ID);
		
		while(this._gloryStallQueue.length > 0 && availableStallsArray.length > 0) {
			let arrayPos = Math.randomInt(availableStallsArray.length);
			let assignedStallId = availableStallsArray[arrayPos];
			let frontStallGuest = this._gloryStallQueue[0];
			
			if(frontStallGuest._guest_enteredBathroomOnTurn + 1 >= $gameTroop.getCurrentTurn_gloryBattle())
				break;
			
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
		if(this._gloryLeftStall._guest_showedThroughHole) {
			this._gloryLeftStall.checkForOrgasm();
		}
		
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
		if(this._gloryRightStall._guest_showedThroughHole) {
			this._gloryRightStall.checkForOrgasm();
		}
		
		if(this._gloryRightStall._guest_isStartingNerd && this._gloryRightStall._guest_startingNerdLeavesOnTurn <= this.getCurrentTurn_gloryBattle() && !this._gloryRightStall._guest_intentIsForHole) {
			this._gloryRightStall.gloryBattle_joinWashingQueue();
			this._gloryRightStall.gloryBattle_leaveRightStall();
		}
		
		if(!this._gloryRightStall._guest_currentlyPissing && !this._gloryRightStall._guest_isStartingNerd && !this._gloryRightStall._guest_finishedPissing && !this._gloryRightStall._guest_intentIsForHole && !this._gloryRightStall._guest_intentIsForEating) {
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
		actor.checkOnaniInBattleDesire();
		actor.addState(STATE_DISABLED_ID);
	}
	
};

////////
// Spawn

Game_Troop.prototype.gloryBattle_spawnGuest = function(forceSpawn) {
	let chanceToSpawn = this.gloryBattle_calculateChanceToSpawnGuest();
	let spawningNewGuest = false;
	
	if(this._gloryRiotingEvent) forceSpawn = true;
	
	let turnsSinceLastGuestSpawned = $gameTroop.getCurrentTurn_gloryBattle() - this._gloryGuestLastSpawnedTurn;
	let spawnRandomInt = GLORY_SPAWN_BASE_RANDOM_INT + (this._gloryGuestsSpawnedCount * this._gloryGuestsSpawnedCount);
	if(turnsSinceLastGuestSpawned > 3)
		spawnRandomInt -= GLORY_SPAWN_RANDOM_INT_DEC_SINCE_LAST_SPAWN * turnsSinceLastGuestSpawned;
	spawnRandomInt = Math.max(spawnRandomInt, 0);
	let baseDifficulty = this._gloryGuestsSpawnedCount;
	if(forceSpawn || ((Math.randomInt(spawnRandomInt) + baseDifficulty) <= chanceToSpawn)) {
		if(this._gloryRiotingEvent || this._gloryGuestsSpawnedCount < this._gloryGuestsSpawnLimit) {
			spawningNewGuest = true;
		}
	}
	
	if(spawningNewGuest) {
		this._gloryGuestsSpawnedCount++;
		this._gloryGuestLastSpawnedTurn = $gameTroop.getCurrentTurn_gloryBattle();
		let enemyId = this.gloryBattle_validGuestId();
		let enemy = this.setup_gloryBattle_guest(enemyId, false);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		SceneManager._scene._spriteset.addEnemy(enemy);
	}
	
	
	return spawningNewGuest;
};

Game_Troop.prototype.setup_gloryBattle_guest = function(enemyId, startingSpawn) {
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
	enemy.setupForGloryBattle_Guest(wanted, startingSpawn);
	
	if(startingSpawn) return enemy;
	
	if(this._gloryRiotingEvent && this._gloryRiotersLeftToSpawn > 0) {
		this._gloryRiotersLeftToSpawn--;
		enemy._guest_isRioter = true;
	}
	
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
		
		if(enemy.hasVirginPrefix() || enemy.hasWeakPrefix() || enemy.hasBadPrefix() || enemy.hasSlowPrefix() || enemy.hasIneptPrefix())
			chanceToUseStall += 25;
		else if(enemy.isThugType && Karryn.hasEdict(EDICT_WEAKEN_THE_THUGS)) 
			chanceToUseStall += 25;
		
		if(this._gloryUrinalA) chanceToUseStall += 20;
		if(this._gloryUrinalB) chanceToUseStall += 20;
		if(this._gloryUrinalC) chanceToUseStall += 20;
		if(this._gloryUrinalD) chanceToUseStall += 20;
		
		if(this._gloryLeftStall && this._gloryRightStall) {
			if(!this._gloryUrinalA || !this._gloryUrinalB || !this._gloryUrinalC || !this._gloryUrinalD)
				chanceToUseStall -= 80;
			else
				chanceToUseStall -= 40;
			
			if(this._gloryStallQueue) chanceToUseStall -= $gameTroop._gloryStallQueue.length * 15;
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
	
	if(this._gloryRiotingEvent) {
		let riotingMapId = this._gloryRiotingMapID;
		
		//Level 1
		if(riotingMapId === MAP_ID_LAUNDRY) {
			validEnemyTypes.push(81);
			validEnemyTypes.push(82);
			validEnemyTypes.push(82);
			validEnemyTypes.push(83);
			validEnemyTypes.push(95);
		}
		else if(riotingMapId === MAP_ID_DISH_WASHING) {
			validEnemyTypes.push(141);
			validEnemyTypes.push(141);
			if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
				validEnemyTypes.push(142);
			}
			if(!Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
				validEnemyTypes.push(91);
				validEnemyTypes.push(92);
				validEnemyTypes.push(93);
			}
		}
		else if(riotingMapId === MAP_ID_RECEPTION) {
			validEnemyTypes.push(95);
			validEnemyTypes.push(95);
			validEnemyTypes.push(141);
			validEnemyTypes.push(83);
			validEnemyTypes.push(82);
			if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
				validEnemyTypes.push(142);
			}
		}
		else if(riotingMapId === MAP_ID_WORKSHOP) {
			validEnemyTypes.push(141);
			validEnemyTypes.push(141);
			if(!Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
				validEnemyTypes.push(91);
				validEnemyTypes.push(92);
				validEnemyTypes.push(92);
				validEnemyTypes.push(93);
				validEnemyTypes.push(94);
			}
		}
		//Level 2
		else if(riotingMapId === MAP_ID_MEETING_ROOM) {
			validEnemyTypes.push(92);
			validEnemyTypes.push(94);
			validEnemyTypes.push(83);
			validEnemyTypes.push(122);
			if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
				validEnemyTypes.push(142);
				validEnemyTypes.push(143);
			}
		}
		else if(riotingMapId === MAP_ID_RESEARCH) {
			validEnemyTypes.push(81);
			validEnemyTypes.push(82);
			validEnemyTypes.push(83);
			validEnemyTypes.push(181);
			validEnemyTypes.push(182);
		}
		else if(riotingMapId === MAP_ID_STAFF_LOUNGE) {
			validEnemyTypes.push(211);
			validEnemyTypes.push(211);
			validEnemyTypes.push(211);
			if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
				validEnemyTypes.push(142);
				validEnemyTypes.push(143);
			}
		}
		else if(riotingMapId === MAP_ID_CLASSROOM) {
			if(Karryn.hasEdict(EDICT_NO_CLASSES)) {
				validEnemyTypes.push(211);
				validEnemyTypes.push(212);
				validEnemyTypes.push(123);
			}
			else if(Karryn.hasEdict(EDICT_REFORM_CLASSES)) {
				validEnemyTypes.push(93);
				validEnemyTypes.push(143);
				validEnemyTypes.push(183);
			}
			else if(Karryn.hasEdict(EDICT_WORKSHOP_CLASSES)) {
				validEnemyTypes.push(92);
				validEnemyTypes.push(94);
				validEnemyTypes.push(95);
			}
			else if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES)) {
				validEnemyTypes.push(81);
				validEnemyTypes.push(91);
				validEnemyTypes.push(121);
				validEnemyTypes.push(141);
				validEnemyTypes.push(181);
				validEnemyTypes.push(211);
			}
		}
		else if(riotingMapId === MAP_ID_READING_ROOM) {
			validEnemyTypes.push(82);
			validEnemyTypes.push(83);
			if(Karryn.hasEdict(EDICT_READING_ROOM_ENTRANCE_FEE) || Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {
				validEnemyTypes.push(121);
				validEnemyTypes.push(122);
				validEnemyTypes.push(123);
			}
		}
	}
	//Not rioting event
	else {
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
		
		if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED) && !Prison.prisonLevelThreeIsRioting()) {
			//Homeless
			validEnemyTypes.push(211);
			validEnemyTypes.push(211);
			validEnemyTypes.push(212);
			
			//Lizardman
			if(!Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN) || $gameParty._gloryReputation >= 20) {
				validEnemyTypes.push(191);
				validEnemyTypes.push(192);
				if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN)) {
					validEnemyTypes.push(193);
					validEnemyTypes.push(194);
				}
			}
			
			//Orcs
			if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS) || ($gameParty._gloryReputation >= 20 && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))) {
				validEnemyTypes.push(181);
				validEnemyTypes.push(182);
			}
		}
		
		//Guards
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) {
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
		else if($gameParty._gloryReputation >= 10) {
			validEnemyTypes.push(ENEMY_ID_GUARD_LV1);
			validEnemyTypes.push(ENEMY_ID_GUARD_LV2);
			if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
				validEnemyTypes.push(ENEMY_ID_GUARD_LV5);
		}
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
	
	if(this._guest_showedThroughHole) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID) name = TextManager.gloryLeftStallCockName;
		else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) name = TextManager.gloryRightStallCockName;
	}
	
	return name;
};

Game_Enemy.prototype.battlerName_gloryHoleBattle = function() {
	return 'glory_target';
};


//enemy setup
Game_Enemy.prototype.setupForGloryBattle_Guest = function(wanted, startingSpawn) {
	this._guest_takeToPeeTurns = 3 + Math.randomInt(3);
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
	this._guest_gettingServedAfterFinishedPissing = false;
	this._guest_currentlyEating = false;
	this._guest_finishedEating = false;
	this._guest_currentlyWashing = false;
	this._guest_intentIsForHole = false;
	this._guest_intentIsForEating = false;
	this._guest_showedThroughHole = false;
	this._guest_gotFavoredSex = false;
	this._guest_gotUnfavoredSex = false;
	this._guest_isRioter = false;
	this._guest_isStartingNerd = false;
	
	this._guest_actionCooldown = 0;
	this._guest_enteredBathroomOnTurn = -1;
	this._guest_finishEatingOnTurn = -1;
	this._guest_finishPissingOnTurn = -1;
	this._guest_startingNerdLeavesOnTurn = -1;
	this._guest_holePatienceTurnLimit = -1;
	
	if(!startingSpawn) {
		this._guest_enteredBathroomOnTurn = $gameTroop.getCurrentTurn_gloryBattle();
		BattleManager._logWindow.push('addText', TextManager.gloryGuestEnterBathroom);
		AudioManager.playSe({name:'Open4', pan:0, pitch:90, volume:70});
	}
};

Game_Enemy.prototype.gloryBattle_pollSatisfaction = function(endOfBattle) {
	if(this._guest_intentIsForHole) {
		let guestSat = 0;
		let emptiedBalls = false;
		
		if(this._ejaculationStock > 0 && this.energy > 0 && this._enemyTempRecordTotalEjaculationCount === 0) {
			if(!endOfBattle) {
				let dissatisfactionMultipler = 1;
				if(this._guest_isRioter) dissatisfactionMultipler *= 1.5;
				if(this.isAngry || this.hasAngryPrefix() || this.hasElitePrefix()) dissatisfactionMultipler *= 1.5;
				guestSat += GLORY_GUEST_SATISFACTION_LOST_FROM_NOT_EMPTY_STOCK * dissatisfactionMultipler;
			}
		}
		else {
			guestSat += GLORY_GUEST_SATISFACTION_GAIN_FROM_EMPTY_STOCK;
			emptiedBalls = true;
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
		
		if(this._guest_isRioter && emptiedBalls) {
			$gameTroop._gloryRiotersLeftToSatisfy--;
			$gameTroop.gloryBattle_checkRiotingEventEnd();
		}
		else if(emptiedBalls) {
			let notRiotingLevelsArray = [ ];
			if(!Prison.prisonLevelOneIsRioting()) notRiotingLevelsArray.push(SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID);
			if(!Prison.prisonLevelTwoIsRioting()) notRiotingLevelsArray.push(SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID);
			
			if(notRiotingLevelsArray.length > 0) {
				let levelToReduce = notRiotingLevelsArray[Math.randomInt(notRiotingLevelsArray.length)];
				let buildupReduced = GLORY_HOLE_RIOT_BUILDUP_REDUCE;
				
				if(levelToReduce === SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID) {
					$gameParty._prisonLevelOneRiotBuildup -= buildupReduced;
				}
				else if(levelToReduce === SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID) {
					$gameParty._prisonLevelTwoRiotBuildup -= buildupReduced;
				}
			}
			
		}
	}
	
};

Game_Enemy.prototype.setGloryHoleOrgasmSkills = function() {
	if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
	}
	else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTLEG_ID]);
	}
	else
		this.setOrgasmSkills(this._aiDefaultEjaculationSkills);
};

Game_Enemy.prototype.gloryBattle_leaveBathroom = function() {
	BattleManager._logWindow.push('addText', TextManager.gloryGuestLeaveBathroom);
	AudioManager.playSe({name:'+Footstep1', pan:0, pitch:70, volume:35});
	
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
	this.setGloryHoleOrgasmSkills();
	$gameTroop._gloryLeftStall = this;
	BattleManager._logWindow.push('addText', TextManager.gloryGuestEnterLeftStall);
	AudioManager.playSe({name:'Open4', pan:-65, pitch:80, volume:50});
};
Game_Enemy.prototype.gloryBattle_enterRightStall = function() {
	this._guest_atStall = GLORY_RIGHT_STALL_ID;
	this.setGloryHoleOrgasmSkills();
	$gameTroop._gloryRightStall = this;
	BattleManager._logWindow.push('addText', TextManager.gloryGuestEnterRightStall);
	AudioManager.playSe({name:'Open4', pan:65, pitch:80, volume:50});
};
Game_Enemy.prototype.gloryBattle_leaveLeftStall = function() {
	BattleManager.pullOutEnemy(this);
	
	this._guest_atStall = false;
	$gameTroop._gloryLeftStall = false;
	$gameTroop._gloryGuestLastLeaveLeftStallOnTurn = $gameTroop.getCurrentTurn_gloryBattle();
	BattleManager._logWindow.push('addText', TextManager.gloryGuestLeaveLeftStall);
	AudioManager.playSe({name:'+Footstep1', pan:-60, pitch:70, volume:35});
	
	if(this._guest_showedThroughHole) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		actor.emoteMasterManager_GloryBattle();
	}
};
Game_Enemy.prototype.gloryBattle_leaveRightStall = function() {
	BattleManager.pullOutEnemy(this);
	
	this._guest_atStall = false;
	$gameTroop._gloryRightStall = false;
	$gameTroop._gloryGuestLastLeaveRightStallOnTurn = $gameTroop.getCurrentTurn_gloryBattle();
	BattleManager._logWindow.push('addText', TextManager.gloryGuestLeaveRightStall);
	AudioManager.playSe({name:'+Footstep1', pan:60, pitch:70, volume:35});
	
	if(this._guest_showedThroughHole) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		actor.emoteMasterManager_GloryBattle();
	}
};

Game_Enemy.prototype.gloryBattle_showThroughHole = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	this._guest_showedThroughHole = true;
	
	if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
		BattleManager._logWindow.push('addText', TextManager.gloryGuestShowedThroughLeftHole);
		AudioManager.playSe({name:'+Men3', pan:-65, pitch:90, volume:100});
		actor.justGotHitBySkillType(JUST_SKILLTYPE_GLORY_LEFT_HOLE_SHOWED);
	}
	else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
		BattleManager._logWindow.push('addText', TextManager.gloryGuestShowedThroughRightHole);
		AudioManager.playSe({name:'+Men3', pan:65, pitch:90, volume:100});
		actor.justGotHitBySkillType(JUST_SKILLTYPE_GLORY_RIGHT_HOLE_SHOWED);
	}
	
	/*
	let enemyLineArray = [];
	
	if(this.weaknessToHandjob() > 1) enemyLineArray.push(ENEMY_LINE_ENEMY_JOIN_HJ);
	if(this.weaknessToBlowjob() > 1) enemyLineArray.push(ENEMY_LINE_ENEMY_JOIN_BJ);
	if(this.weaknessToPussy() > 1) enemyLineArray.push(ENEMY_LINE_ENEMY_JOIN_PUSSY);
	if(this.weaknessToAnal() > 1) enemyLineArray.push(ENEMY_LINE_ENEMY_JOIN_ANAL);
	
	if($gameParty._gloryReputation >= 5 && enemyLineArray.length > 0) {
		BattleManager.actionRemLines(enemyLineArray[Math.randomInt(enemyLineArray.length)]);
	}
	*/
	
	actor.gloryBattle_reactToNewCock();
	actor.emoteMasterManager_GloryBattle();
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
	if(this._guest_atStall && this._guest_showedThroughHole) {
		let minStamina = 1;
		let degenAmt = Math.ceil(this.mhp / this.gloryBattle_calculatePatience());
		
		if(this.isUsingBodySlotPenis(PUSSY_ID) || this.isUsingBodySlotPenis(ANAL_ID) || this.isUsingBodySlotPenis(MOUTH_ID) || this.isUsingBodySlotPenis(RIGHT_HAND_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID)) {
			minStamina = degenAmt * 1.2;
			degenAmt *= 0.5;
		}
		else if(this.isHorny) degenAmt *= 0.7;
		
		
		this._hp = Math.max(minStamina, this._hp - degenAmt);
	}
	
	//pleasure
	let value = 0;
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
		pleasureGain = Math.round(karrynCharm * VAR_CHARM_MULTIPLER_WHEN_CHARMING - enemyCharmReq);
	}
	
	if(pleasureGain + this.pleasure > limit) 
		pleasureGain = limit - this.pleasure;
	this.gainPleasure(pleasureGain, true);
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
		pleasureGain = Math.round(karrynCharm * VAR_CHARM_MULTIPLER_WHEN_CHARMING - enemyCharmReq);
	}
	
	if(pleasureGain + this.pleasure > limit) 
		pleasureGain = limit - this.pleasure;
	this.gainPleasure(pleasureGain, true);
};

///////////
// Valid Target

Game_Enemy.prototype.isValidTargetForCockStare_gloryBattle = function(actor) { 
	if(!this._guest_atStall || !this._guest_showedThroughHole ) return false;
	
	if(actor.isInToiletSittingPose()) {
		return true;
	}
	else if(actor.isInToiletSitLeftPose()) {
		return this._guest_atStall === GLORY_LEFT_STALL_ID;
	}
	else if(actor.isInToiletSitRightPose()) {
		return this._guest_atStall === GLORY_RIGHT_STALL_ID;
	}
	else if(actor.isInToiletStandLeftPose()) {
		return this._guest_atStall === GLORY_RIGHT_STALL_ID;
	}
	else if(actor.isInToiletStandRightPose()) {
		return this._guest_atStall === GLORY_LEFT_STALL_ID;
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
	else if(actor.isInToiletStandLeftPose()) {
		if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			return true;
		else
			return false;
	}
	else if(actor.isInToiletStandRightPose()) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			return true;
		else
			return false;
	}
	else {
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForHandjobOrBlowjob_gloryBattle = function() { 
	if(!this._guest_atStall || !this._guest_showedThroughHole ) return false;
	else return true;
};
Game_Enemy.prototype.isValidTargetForPussyOrAnalSex_gloryBattle = function() { 
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
	
	if(this._guest_currentlyPissing && !this._guest_finishedPissing) {
		if(this._guest_actionCooldown === 0) {
			if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
				BattleManager._logWindow.push('addText', TextManager.gloryGuestPissingLeftStall);
				AudioManager.playSe({name:'Liquid', pan:-50, pitch:100, volume:60});
			}
			else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
				BattleManager._logWindow.push('addText', TextManager.gloryGuestPissingRightStall);
				AudioManager.playSe({name:'Liquid', pan:50, pitch:100, volume:60});
			}
			
			this._guest_actionCooldown = GLORY_GUEST_ACTION_COOLDOWN;
		}
	}
	
	if(this._guest_currentlyEating && !this._guest_finishedEating) {
		if(this._guest_actionCooldown === 0) {
			if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
				BattleManager._logWindow.push('addText', TextManager.gloryGuestEatingLeftStall);
				AudioManager.playSe({name:'+Eating1', pan:-50, pitch:90, volume:80});
			}
			else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
				BattleManager._logWindow.push('addText', TextManager.gloryGuestEatingRightStall);
				AudioManager.playSe({name:'+Eating1', pan:50, pitch:90, volume:80});
			}
			
			
			this._guest_actionCooldown = GLORY_GUEST_ACTION_COOLDOWN;
		}
	}
	
	if(this._ejaculationStock < 1 || this.energy < 1) {
		BattleManager.pullOutEnemy(this);
		target.gloryBattle_postEnemyPullout();
		if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
			this.gloryBattle_leaveLeftStall();
		}
		else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
			this.gloryBattle_leaveRightStall();
		}
		
		this.gloryBattle_joinWashingQueue();
		target.emoteMasterManager_GloryBattle();
		return;
	}
	else {
		if(this._guest_intentIsForHole && !this._guest_showedThroughHole) {
			this._guest_currentlyPissing = false;
			this._guest_finishedPissing = true;
			this._guest_currentlyWashing = false;
			this._guest_finishedEating = true;
			this.gloryBattle_showThroughHole();
			return;
		}
		else if(this._guest_intentIsForHole && this._guest_showedThroughHole) {
			if(this.isInAPose() && this._guest_actionCooldown === 0) {
				if(this.usePoseSkill(target))
					this._guest_actionCooldown = GLORY_GUEST_ACTION_COOLDOWN;
			}
			else if(!this.isInAPose() && this.stamina === 1) {
				if(this._guest_atStall === GLORY_LEFT_STALL_ID) {
					this.gloryBattle_leaveLeftStall();
				}
				else if(this._guest_atStall === GLORY_RIGHT_STALL_ID) {
					this.gloryBattle_leaveRightStall();
				}
				
				this.gloryBattle_joinWashingQueue();
			}
		}
	}
	
};
