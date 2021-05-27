var Remtairy = Remtairy || {};
Remtairy.EnemySex = Remtairy.EnemySex || {};

const VAR_MIN_PLEASURE_FEEDBACK_DIVIDE = 7;
const VAR_MIN_PLEASURE_FEEDBACK_DEFEATED_DIVIDE = 5;
const VAR_MIN_PLEASURE_FEEDBACK_BOSS = 8;

const VAR_PLEASURE_UPPER_CAP_COEFF_ONE = 50;
const VAR_PLEASURE_UPPER_CAP_COEFF_TWO = 0.069;
const VAR_PLEASURE_UPPER_CAP_COEFF_THREE = 0.25;
const VAR_PLEASURE_UPPER_CAP_COEFF_FOUR = 0.0075;

//=============================================================================
 /*:
 * @plugindesc Enemy Sex
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

//////////////////
//////////////////
// Game Enemy

Game_Enemy.prototype.canTalkGenericRequirements = function() { 
	if(this.isAngry) return false;
	if(this.isMonstrousType) return false;
	
	let isInAPose = this.isInAPose();
	if(Karryn.isInDefeatedPose() && (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID))) 
		isInAPose = false;
	
	return !isInAPose;
};
Game_Enemy.prototype.canTalk_Random = function(target) { 
	return this.canTalk_Mouth(target) || this.canTalk_Boobs(target) || this.canTalk_Pussy(target) || this.canTalk_Butt(target) || this.canTalk_Cock(target);
};
Game_Enemy.prototype.canTalk_Mouth = function(target) { 
	return this.canTalkGenericRequirements() && target.isBodySlotAvailableForPetting(BUTT_ID);
};
Game_Enemy.prototype.canTalk_Boobs = function(target) { 
	return this.canTalkGenericRequirements() && target.isBodySlotAvailableForPetting(BOOBS_ID);
};
Game_Enemy.prototype.canTalk_Pussy = function(target) { 
	return this.canTalkGenericRequirements() && target.isBodySlotAvailableForPetting(PUSSY_ID);
};
Game_Enemy.prototype.canTalk_Butt = function(target) { 
	return this.canTalkGenericRequirements() && target.isBodySlotAvailableForPetting(BUTT_ID);
};
Game_Enemy.prototype.canTalk_Cock = function(target) { 
	return this.canTalkGenericRequirements() && this.isErect;
};
Game_Enemy.prototype.canSee = function(target) { 
	return this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_MOUTH_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BOOBS_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_CLIT_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUTT_ID], target);
};
Game_Enemy.prototype.canJerkOff = function(target) { 
	if(Karryn.isInWaitressServingPose()) return false;
	if(this._ejaculationStock === 0) return false;
	let validJerkOffPose = (this.isNotInAPose() && !this.isAngry) || (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID));
	return validJerkOffPose && (this.isErect || target.inBattleCharm >= this.charm);
};
Game_Enemy.prototype.canPet = function(target) { 
	return this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID], target);
}; 
Game_Enemy.prototype.canPoseJoin = function(target) { 
	return this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_RIGHT_HAND_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_LEFT_HAND_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_MOUTH_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_ANAL_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_BOOBS_ID], target) || 
	this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_PUSSY_ID], target);
}; 

///////
// Horny

Game_Enemy.prototype.addHornyState = function() {
	if(!DEBUG_MODE || this.isStateAffected(STATE_RESIST_HORNY_ID)) return;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	this.addState(STATE_HORNY_ID);
	let hornyTurns = Math.randomInt(3) + 3;
	
	if(actor.inBattleCharm > this.charm) {
		if(actor.inBattleCharm > this.charm * 1.5) {
			hornyTurns += Math.randomInt(3) + 3;
		}
		else {
			hornyTurns += Math.randomInt(2) + 2;
		}
	}
	if($gameParty._showTopRightTimeNumberFlag) {
		hornyTurns *= 3;
	}
	this.increaseHornyStateTurns(hornyTurns);
};

///////
// Sex States

Game_Enemy.prototype.addSexPoseState_Pussy = function() { 
	this.addState(STATE_PUSSY_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_RightHand = function() { 
	this.addState(STATE_RIGHTHAND_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_LeftHand = function() { 
	this.addState(STATE_LEFTHAND_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_TittyFuck = function() { 
	this.addState(STATE_TITTYFUCK_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_Blowjob = function() { 
	this.addState(STATE_BLOWJOB_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_Anal = function() { 
	this.addState(STATE_ANAL_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_Cunni = function() { 
	this.addState(STATE_CUNNI_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_Rimming = function() { 
	this.addState(STATE_RIMMING_ENEMYPOSE_ID);
};
Game_Enemy.prototype.addSexPoseState_Footjob = function() { 
	this.addState(STATE_FOOTJOB_ENEMYPOSE_ID);
};
Game_Enemy.prototype.removeAllSexPoseStates = function() { 
	this.removeState(STATE_PUSSY_ENEMYPOSE_ID);
	this.removeState(STATE_RIGHTHAND_ENEMYPOSE_ID);
	this.removeState(STATE_LEFTHAND_ENEMYPOSE_ID);
	this.removeState(STATE_TITTYFUCK_ENEMYPOSE_ID);
	this.removeState(STATE_BLOWJOB_ENEMYPOSE_ID);
	this.removeState(STATE_ANAL_ENEMYPOSE_ID);
	this.removeState(STATE_CUNNI_ENEMYPOSE_ID);
	this.removeState(STATE_RIMMING_ENEMYPOSE_ID);
	this.removeState(STATE_FOOTJOB_ENEMYPOSE_ID);
	
};

////////
// Kick Counter
// counter condition
/////////////

Game_Enemy.prototype.counterTotal = function() {
    return 2;
};

Game_Enemy.prototype.counterCondition_kickCounter = function(target, action) { 
	if(!action.isActorKickSkill() || !target.isActor() || !this.isErect || this.isInAPose() || !target.canGetPussyInserted() || target.isInSexPose()) return false;
	
	let counterChance = 0;
	
	if(this.isThugType) {
		counterChance += 0.3;
		
		if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) counterChance += 0.4;
		else if(Karryn.hasEdict(EDICT_WEAKEN_THE_THUGS)) counterChance -= 0.4;
		else if(Karryn.hasEdict(EDICT_THE_THUG_PROBLEM)) counterChance += 0.2;
		
		if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) 
			counterChance += 0.1 * Karryn.edictSkilledStaffMultipler();
		if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) counterChance += 0.1;
		
		if(this.isHorny) counterChance += 0.4;
		else if(this.isAngry) counterChance -= 1;
		
		if(target.isHorny) counterChance += 0.4;
		if(!target.isWearingPanties()) {
			counterChance += 0.2;
			if(target.isWetStageThree) counterChance += 0.3;
			else if(target.isWetStageTwo) counterChance += 0.15;
		}

		if(this.level > target.level) counterChance += 0.1;
		if(this.str > target.str) counterChance += 0.3;
		else counterChance -= 0.2;
		if(this.agi > target.agi) counterChance += 0.2;
		else counterChance -= 0.1;
		
		if(this.hasElitePrefix() || this.hasBigPrefix()) counterChance += 0.4;
		else if(this.hasGoodPrefix() || this.hasSadoPrefix()) counterChance += 0.2;
		else if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasWeakPrefix() || this.hasIneptPrefix()  || this.hasSlowPrefix()) counterChance -= 0.2;
		else if(this.hasMetalPrefix() || this.hasStarvingPrefix() || this.hasDrunkPrefix()) counterChance -= 0.6;
		
		if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID)) counterChance += 0.45;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID)) counterChance += 0.3;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) counterChance += 0.15;
		
		if(!Karryn.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) counterChance += 0.1;
		else if(!target.isHorny) {
			if(Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_III)) counterChance -= 0.3;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_III) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) counterChance -= 0.2;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_I)) counterChance -= 0.1;	
		}
	}
	else if(this.isGuardType) {
		if(!Karryn.hasEdict(EDICT_BASIC_GUARD_TRAINING)) return false;
		
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING)) counterChance += 0.5;
		else if(Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING)) counterChance += 0.2;
		else counterChance -= 0.4;
		
		if(Prison.guardAggression < 10) counterChance -= 0.3;
		else if(Prison.guardAggression < 20) counterChance -= 0.1;
		
		if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_GUARD_FOOD)) 
			counterChance += 0.1 * Karryn.edictSkilledStaffMultipler();
		if(Karryn.hasEdict(EDICT_STEROIDS_FOR_GUARDS)) counterChance += 0.1;
		if(Karryn.hasEdict(EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS)) counterChance += 0.1;
		
		
		if(this.isHorny) counterChance += 0.4;
		else if(this.isAngry) counterChance -= 1;
		
		if(target.isHorny) counterChance += 0.5;
		if(!target.isWearingPanties()) {
			counterChance += 0.2;
			if(target.isWetStageThree) counterChance += 0.3;
			else if(target.isWetStageTwo) counterChance += 0.15;
		}
		
		if(this.level > target.level) counterChance += 0.1;
		else counterChance -= 0.4;
		if(this.str > target.str) counterChance += 0.25;
		else counterChance -= 0.1;
		if(this.agi > target.agi) counterChance += 0.25;
		else counterChance -= 0.1;
		if(this.dex > target.dex) counterChance += 0.25;
		else counterChance -= 0.1;
		
		if(this.hasElitePrefix() || this.hasBigPrefix()) counterChance += 0.4;
		else if(this.hasGoodPrefix() || this.hasSadoPrefix()) counterChance += 0.2;
		else if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasWeakPrefix() || this.hasIneptPrefix()  || this.hasSlowPrefix()) counterChance -= 0.2;
		else if(this.hasMetalPrefix() || this.hasStarvingPrefix() || this.hasDrunkPrefix()) counterChance -= 0.6;
		
		if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID)) counterChance += 0.45;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID)) counterChance += 0.3;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) counterChance += 0.15;
		
		if(!Karryn.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) counterChance += 0.1;
		else if(!target.isHorny) {
			if(Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_III)) counterChance -= 0.3;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_III) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) counterChance -= 0.2;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_I)) counterChance -= 0.1;	
		}
	}
	else if(this.isOrcType && !this.isTonkin) {
		counterChance += 0.15;
		if(Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS)) counterChance += 0.4;
		else if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) counterChance -= 0.2;
		else if(Karryn.hasEdict(EDICT_THE_ORC_PROBLEM)) counterChance += 0.2;
		
		if(this.isHorny) counterChance += 0.4;
		else if(this.isAngry) counterChance -= 1;
		
		if(target.isHorny) counterChance += 0.4;
		if(!target.isWearingPanties()) {
			counterChance += 0.2;
			if(target.isWetStageThree) counterChance += 0.3;
			else if(target.isWetStageTwo) counterChance += 0.15;
		}
		
		if(this.level > target.level) counterChance += 0.1;
		if(this.end > target.str) counterChance += 0.2;
		if(this.end > target.agi) counterChance += 0.2;
		if(this.end > target.dex) counterChance += 0.2;
		
		if(this.hasElitePrefix() || this.hasBigPrefix()) counterChance += 0.4;
		else if(this.hasGoodPrefix()) counterChance += 0.2;
		else if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasWeakPrefix() || this.hasIneptPrefix()  || this.hasSlowPrefix()) counterChance -= 0.2;
		else if(this.hasMetalPrefix() || this.hasStarvingPrefix() || this.hasDrunkPrefix()) counterChance -= 0.6;
		
		if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID)) counterChance += 0.45;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID)) counterChance += 0.3;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) counterChance += 0.15;
		
		if(!Karryn.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) counterChance += 0.1;
		else if(!target.isHorny) {
			if(Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_III)) counterChance -= 0.3;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_III) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) counterChance -= 0.2;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_I)) counterChance -= 0.1;	
		}
	}
	else if(this.isLizardmanType) {
		let lizardmanCount = $gameTroop.getCountOfLizardmanPresent();
		
		if(lizardmanCount === 1) counterChance -= 0.30;
		
		if(Karryn.hasEdict(EDICT_THE_LIZARDMAN_PROBLEM)) {
			if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN))
				counterChance += 0.35 + lizardmanCount * 0.15;
			else if(Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN))
				counterChance += 0.15 + lizardmanCount * 0.05;
			else
				counterChance += 0.15 + lizardmanCount * 0.15;
		}
		else counterChance += lizardmanCount * 0.15;
		
		if(this.isHorny) counterChance += 0.4;
		else if(this.isAngry) counterChance -= 1;
		
		if(target.isHorny) counterChance += 0.4;
		if(!target.isWearingPanties()) {
			counterChance += 0.2;
			if(target.isWetStageThree) counterChance += 0.3;
			else if(target.isWetStageTwo) counterChance += 0.15;
		}
		
		if(this.level > target.level) counterChance += 0.1;
		if(this.str > target.str) counterChance += 0.25;
		else counterChance -= 0.1;
		if(this.agi > target.agi) counterChance += 0.25;
		else counterChance -= 0.1;
		if(this.dex > target.dex) counterChance += 0.25;
		else counterChance -= 0.1;
		
		if(this.hasElitePrefix() || this.hasBigPrefix()) counterChance += 0.4;
		else if(this.hasGoodPrefix() || this.hasSadoPrefix()) counterChance += 0.2;
		else if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasWeakPrefix() || this.hasIneptPrefix()  || this.hasSlowPrefix()) counterChance -= 0.2;
		else if(this.hasMetalPrefix() || this.hasStarvingPrefix() || this.hasDrunkPrefix()) counterChance -= 0.6;
		
		if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID)) counterChance += 0.45;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID)) counterChance += 0.3;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) counterChance += 0.15;
		
		if(!Karryn.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) counterChance += 0.1;
		else if(!target.isHorny) {
			if(Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_III)) counterChance -= 0.3;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_III) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) counterChance -= 0.2;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_I)) counterChance -= 0.1;	
		}
	}
	else if(this.isYetiType) {
		counterChance += 0.25;
		
		if(this.isHorny) counterChance += 0.7;
		else if(this.isAngry) counterChance -= 1.5;
		
		if(target.isHorny) counterChance += 0.4;
		if(!target.isWearingPanties()) {
			counterChance += 0.2;
			if(target.isWetStageThree) counterChance += 0.3;
			else if(target.isWetStageTwo) counterChance += 0.15;
			else counterChance -= 1;
		}
		else if(!target.isWetStageTwo && !target.isWetStageThree) counterChance -= 3;
		
		if(this.level > target.level) counterChance += 0.1;
		if(this.str > target.str) counterChance += 0.25;
		else counterChance -= 0.1;
		if(this.dex > target.dex) counterChance += 0.2;
		else counterChance -= 0.1;
		if(this.end > target.str) counterChance += 0.2;
		if(this.end > target.dex) counterChance += 0.1;
		if(this.end > target.agi) counterChance += 0.1;
		
		if(this.hasElitePrefix() || this.hasBigPrefix()) counterChance += 0.4;
		else if(this.hasGoodPrefix() || this.hasSadoPrefix()) counterChance += 0.2;
		else if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasWeakPrefix() || this.hasIneptPrefix()  || this.hasSlowPrefix()) counterChance -= 0.2;
		else if(this.hasMetalPrefix() || this.hasStarvingPrefix() || this.hasDrunkPrefix()) counterChance -= 0.6;
		
		if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_THREE_ID)) counterChance += 0.45;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID)) counterChance += 0.3;
		else if(Karryn.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) counterChance += 0.15;
		
		if(!Karryn.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) counterChance += 0.35;
		else if(!target.isHorny) {
			if(Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_III)) counterChance -= 0.3;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_III) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) counterChance -= 0.2;
			else if(Karryn.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II) || Karryn.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_I)) counterChance -= 0.1;	
		}
	}

	
	return Math.random() < counterChance;
};

////////////
///////////////
// Before Eval Code
/////////////////////
////////////////

Game_Enemy.prototype.beforeEval_toyInsertion = function(target, toy) { 
	target.stripOffPanties();
	if(toy == TOY_PINK_ROTOR) {
		target.setClitToy_PinkRotor(this);
		this.removeState(STATE_ENEMY_HAS_PINK_ROTOR_ID);
		this._hasPinkRotor = false;
	}
	else if(toy == TOY_PENIS_DILDO) {
		target.setPussyToy_PenisDildo(this);
		this.removeState(STATE_ENEMY_HAS_PENIS_DILDO_ID);
		this._hasPenisDildo = false;
	}
	else if(toy == TOY_ANAL_BEAD) {
		target.setAnalToy_AnalBeads(this);
		this.removeState(STATE_ENEMY_HAS_ANAL_BEADS_ID);
		this._hasAnalBeads = false;
	}
	
	else console.log("Error beforeEval toyInsertion toy: " + toy);
	
	this.addToEnemyToysInsertedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_cumIntoMug = function(target) { 
	let targetGivingBJ = target.blowjobPoseSkillsIsEnabled();
	let other1available = target.canGetOther1InsertedNone();
	let notInAPose = this.isNotInAPose();
	if(!targetGivingBJ && other1available && notInAPose) {
		this.preDmgEval_join_barsex_other1(target, false);
	}
};

Game_Enemy.prototype.beforeEval_enemyKiss = function(target) { 
	target.setKissedChange(true, this, false);
};

Game_Enemy.prototype.beforeEval_enemyGetFingersSucked = function(target) { 
	target.setKissedChange(false, false);
};

/////////////////////
// Sex Start Before Eval
////////////////////////

Game_Enemy.prototype.beforeEval_start_thug_gangbang1_pussy = function(target) { 
	target.setThugGangbangSexPose();
	target.addStunTillEndOfTurnState();
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_THUGGANGBANG_ID);
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	
	this.addToEnemyPussyFuckedCountRecord(target);
	target._recordSexPose_ThugGangbangCount++;
};

Game_Enemy.prototype.beforeEval_start_guard_gangbang_pussy = function(target) { 
	target.setGuardGangbangSexPose();
	target.addStunTillEndOfTurnState();
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_GUARDGANGBANG_ID);
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	
	this.addToEnemyPussyFuckedCountRecord(target);
	target._recordSexPose_GuardGangbangCount++;
};

Game_Enemy.prototype.beforeEval_start_lizardman_cowgirl_pussy = function(target) { 
	target.setLizardmanCowgirlSexPose();
	target.addStunTillEndOfTurnState();
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_COWGIRL_LIZARDMAN_ID);
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	
	this.addToEnemyPussyFuckedCountRecord(target);
	target._recordSexPose_LizardmanCowgirlCount++;
};

Game_Enemy.prototype.beforeEval_start_werewolf_back_pussy = function(target) { 
	target.setWerewolfBackPose(PUSSY_ID);
	target.addStunTillEndOfTurnState();
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_WEREWOLF_BACK_PUSSY_ID);
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	
	this.addToEnemyPussyFuckedCountRecord(target);
	target._recordSexPose_WerewolfBackTotalCount++;
	target._recordSexPose_WerewolfBackPussyCount++;
};

Game_Enemy.prototype.beforeEval_start_kick_counter_pussy = function(target) { 
	target.setKickCounterSexPose();
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_KICKCOUNTER_ID);
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	if(this.kissLvl() > 0) {
		this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID, SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID]);
	}
	else {
		this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID, SKILL_ENEMY_POSESKILL_PUSSY_ID, SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID]);
	}
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	this.addToEnemyPussyFuckedCountRecord(target);
	this.addToEnemyKickCounterRecord(target);
};

Game_Enemy.prototype.beforeEval_start_kick_counter_yeti = function(target) {
	this.beforeEval_start_yeti_carry(target);
	this.addToEnemyKickCounterRecord(target);
};
Game_Enemy.prototype.beforeEval_start_yeti_carry = function(target) { 
	target.setYetiCarrySexPose();
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_KICKCOUNTER_YETI_ID);
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID]);
	
	this.addToEnemyPussyFuckedCountRecord(target);
	target._recordSexPose_YetiCarryCount++;
};

Game_Enemy.prototype.beforeEval_start_goblin_cunnilingus1_pussy = function(target) { 
	target.setGoblinCunnilingusSexPose();
	target.addStunTillEndOfTurnState();
	target.setPussyCunni(true, this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_GOBLINCUNNI_ID);
	this.setCanOnlyUsePoseSkills(true);
	this.addSexPoseState_Cunni();
	this.setBodySlotWithPenis(CLIT_ID);
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_CUNNI_ID, SKILL_ENEMY_POSESWITCH_GOBLINCL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_ID]);
	this.setCanBeKissed(false);
	
	this.addToEnemyCunnilingusCountRecord(target);
	target._recordSexPose_GoblinCunnilingusCount++;
};

Game_Enemy.prototype.beforeEval_start_cowgirl_reverse_anal = function(target) { 
	target.setReverseCowgirlSexPose(false);
	target.addStunTillEndOfTurnState();
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_COWGIRL_REVERSE_ID);
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_start_werewolf_back_anal = function(target) { 
	target.setWerewolfBackPose(ANAL_ID);
	target.addStunTillEndOfTurnState();
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_WEREWOLF_BACK_ANAL_ID);
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	this.addToEnemyAnalFuckedCountRecord(target);
	target._recordSexPose_WerewolfBackTotalCount++;
	target._recordSexPose_WerewolfBackAnalCount++;
};

Game_Enemy.prototype.beforeEval_start_rimjob_mouth = function(target) {
	target.setRimjobSexPose(false);
	target.addStunTillEndOfTurnState();
	target.setMouthRimming(true, this);
	target.enableRimjobPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_RIMJOB_ID);
	this.setCanOnlyUsePoseSkills(true);
	this.addSexPoseState_Rimming();
	this.setBodySlotWithAnus(MOUTH_ID);
	this.setValidTargetForRimjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_RIMJOB_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	this.setCanBeKissed(false);
	
	this.addToEnemyRimmedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_start_footjob_feet = function(target) {
	target.setFootjobSexPose(false);
	target.addStunTillEndOfTurnState();
	target.setFeetInserted(true, this);
	target.enableFootjobPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_FOOTJOB_ID);
	this.addSexPoseState_Footjob();
	this.setBodySlotWithPenis(FEET_ID);
	this.setValidTargetForFootjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_FOOTJOB_ID]);
	this.setCanOnlyUsePoseSkills(true);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTLEG_ID,SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
	this.setCanBeKissed(false);
	
	this.addToEnemyFootjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_start_hj_standing1_rightarm = function(target) { 
	target.setStandingHJSexPose(false);
	target.addStunTillEndOfTurnState();
	target.setRightHandInserted(true, this);
	target.enableRightHandjobPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_STANDINGHJ_ID);
	this.addSexPoseState_RightHand();
	this.setBodySlotWithPenis(RIGHT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_RIGHTHAND_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	
	this.addToEnemyHandjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_start_bj_kneeling1_mouth = function(target) { 
	target.setKneelingBJSexPose(false);
	target.addStunTillEndOfTurnState();
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	target._cockMouthTarget = this;
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_KNEELINGBJ_ID);
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID]);
	
	this.addToEnemyBlowjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_start_tittyfuck_laying_boobs = function(target) { 
	target.setLayingTittyfuckSexPose(false);
	target.addStunTillEndOfTurnState();
	target.setBoobsInserted(true, this);
	target.enableTittyFuckPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_LAYINGTF_ID);
	this.addSexPoseState_TittyFuck();
	this.setBodySlotWithPenis(BOOBS_ID);
	this.setValidTargetForTittyFuck();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	this.addToEnemyTittyFuckCountRecord(target);
};

Game_Enemy.prototype.beforeEval_start_orc_paizuri_boobs = function(target) { 
	target.setOrcPaizuriSexPose();
	target.addStunTillEndOfTurnState();
	target.setBoobsInserted(true, this);
	target.enableTittyFuckPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_ORCPAIZURI_ID);
	this.addSexPoseState_TittyFuck();
	this.setBodySlotWithPenis(BOOBS_ID);
	this.setValidTargetForTittyFuck();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	this.addToEnemyTittyFuckCountRecord(target);
	target._recordSexPose_OrcPaizuriCount++;
};

Game_Enemy.prototype.beforeEval_start_yeti_paizuri_boobs = function(target) { 
	target.setYetiPaizuriSexPose();
	target.addStunTillEndOfTurnState();
	target.setBoobsInserted(true, this);
	target.enableTittyFuckPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_YETIPAIZURI_ID);
	this.addSexPoseState_TittyFuck();
	this.setBodySlotWithPenis(BOOBS_ID);
	this.setValidTargetForTittyFuck();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	this.addToEnemyTittyFuckCountRecord(target);
	target._recordSexPose_YetiPaizuriCount++;
};

Game_Enemy.prototype.beforeEval_start_slime_piledriver_anal = function(target) { 
	BattleManager.pullOutAllEnemies();
	target.setSlimeAnalPiledriverPose();
	target.addStunTillEndOfTurnState();
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusMaster();
	this.setPoseMasterSkillID(SKILL_ENEMY_POSESTART_SLIMEPILEDRIVER_ID);
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_TENTACLES_ID,SKILL_ENEMY_POSESKILL_SLIMEJOIN_MOUTH_ID,SKILL_ENEMY_POSESKILL_SLIMEJOIN_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_TENTACLES_ID]);
	
	this.addToEnemyAnalFuckedCountRecord(target);
	target._recordSexPose_SlimePiledriverCount++;
};


/////////////////////
// Sex Join Pre Damage Eval
////////////////////////

//Generic Sex Join

Game_Enemy.prototype.beforeEval_join_generic_mouth = function(target, dontAddToRecord) {
	if(Karryn.isInWaitressSexPose())
		BattleManager.pullOutEnemy(this);
	
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyBlowjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_generic_tittyFuck = function(target, dontAddToRecord) { 
	target.setBoobsInserted(true, this);
	target.enableTittyFuckPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_TittyFuck();
	this.setBodySlotWithPenis(BOOBS_ID);
	this.setValidTargetForTittyFuck();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyTittyFuckCountRecord(target);
};


Game_Enemy.prototype.beforeEval_join_generic_anal = function(target, dontAddToRecord) {
	if(Karryn.isInWaitressSexPose())
		BattleManager.pullOutEnemy(this);
	
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_generic_pussy = function(target, dontAddToRecord) {
	if(Karryn.isInWaitressSexPose())
		BattleManager.pullOutEnemy(this);
	
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_generic_righthand = function(target, dontAddToRecord) {
	if(Karryn.isInWaitressSexPose())
		BattleManager.pullOutEnemy(this);
	
	target.setRightHandInserted(true, this);
	target.enableRightHandjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_RightHand();
	this.setBodySlotWithPenis(RIGHT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_RIGHTHAND_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyHandjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_generic_lefthand = function(target, dontAddToRecord) {
	if(Karryn.isInWaitressSexPose())
		BattleManager.pullOutEnemy(this);
	
	target.setLeftHandInserted(true, this);
	target.enableLeftHandjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_LeftHand();
	this.setBodySlotWithPenis(LEFT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_LEFTHAND_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyHandjobCountRecord(target);
};

// Slime piledriver join

Game_Enemy.prototype.beforeEval_join_slime_piledriver_mouth = function(target) { 
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.addToEnemyBlowjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_slime_piledriver_pussy = function(target) { 
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.addToEnemyPussyFuckedCountRecord(target);
};

//Goblin cunnilingus join
Game_Enemy.prototype.beforeEval_poseswitch_goblin_cl_pussy = function(target) { 
	target.setPussyCunni(false, this);
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.removeState(STATE_CUNNI_ENEMYPOSE_ID);
	this.setBodySlotFree(CLIT_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_paizuri_mouth = function(target, dontAddToRecord) {
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID, SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID]);
	
	if(dontAddToRecord) {}
	else {
		this.addToEnemyBlowjobCountRecord(target);
		target._recordSexPose_YetiPaizuriFeraCount++;
	}
};

// Toilet Sex Join
// Glory Hole Sex Join

Game_Enemy.prototype.beforeEval_join_toilet_mouth = function(target, dontAddToRecord) {
	target.gloryBattle_beforePoseJoin(this, SEXACT_BLOWJOB, false, false);
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyBlowjobCountRecord(target);
};


Game_Enemy.prototype.beforeEval_join_toilet_anal = function(target, dontAddToRecord) { 
	target.gloryBattle_beforePoseJoin(this, SEXACT_ANALSEX, false, false);
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_toilet_pussy = function(target, dontAddToRecord) {
	target.gloryBattle_beforePoseJoin(this, SEXACT_PUSSYSEX, false, false);	
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_LEFTLEG_ID,SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_toilet_righthand = function(target, dontAddToRecord) {
	target.gloryBattle_beforePoseJoin(this, SEXACT_HANDJOB, true, false);
	target.setRightHandInserted(true, this);
	target.enableRightHandjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_RightHand();
	this.setBodySlotWithPenis(RIGHT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_RIGHTHAND_ID]);
	
	if(Karryn.isInToiletSittingPose()) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_RIGHTLEG_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	}
	else {
		if(this.isUsingBodySlotPenis(MOUTH_ID)) {
			this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
		}
		else {
			this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
		}
	}
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyHandjobCountRecord(target);
};

Game_Enemy.prototype.beforeEval_join_toilet_lefthand = function(target, dontAddToRecord) {
	target.gloryBattle_beforePoseJoin(this, SEXACT_HANDJOB, false, true);
	target.setLeftHandInserted(true, this);
	target.enableLeftHandjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_LeftHand();
	this.setBodySlotWithPenis(LEFT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_LEFTHAND_ID]);
	
	if(Karryn.isInToiletSittingPose()) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTLEG_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID]);
	}
	else {
		if(this.isUsingBodySlotPenis(MOUTH_ID)) {
			this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
		}
		else {
			this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
		}
	}
	
	if(dontAddToRecord) {}
	else
		this.addToEnemyHandjobCountRecord(target);
};

// Defeated Level 1 Sex Join

Game_Enemy.prototype.preDmgEval_join_defeated_level1_mouth = function(target) {
	BattleManager.pullOutEnemy(this);	
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	this.addToEnemyBlowjobCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level1_righthand = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setRightHandInserted(true, this);
	target.enableRightHandjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_RightHand();
	this.setBodySlotWithPenis(RIGHT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_RIGHTHAND_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_RIGHTARM_ID,SKILL_ENEMY_EJACULATE_FACE_ID]);
	
	this.addToEnemyHandjobCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level1_lefthand = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setLeftHandInserted(true, this);
	target.enableLeftHandjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_LeftHand();
	this.setBodySlotWithPenis(LEFT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_LEFTHAND_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_FACE_ID]);
	
	this.addToEnemyHandjobCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level1_other1 = function(target) { 
	target.setOther1Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_1_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_LEFTARM_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level1_other2 = function(target) { 
	target.setOther2Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_2_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level1_other3 = function(target) { 
	target.setOther3Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_3_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level1_other4 = function(target) { 
	target.setOther4Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_4_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_FACE_ID]);
};

//Defeated Level 2
Game_Enemy.prototype.preDmgEval_join_defeated_level2_pussy = function(target) {
	BattleManager.pullOutEnemy(this);	
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BUTT_TOP_LEFT_ID,SKILL_ENEMY_EJACULATE_BUTT_BOTTOM_LEFT_ID]);
	this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level2_anal = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_TOP_RIGHT_ID,SKILL_ENEMY_EJACULATE_BUTT_BOTTOM_RIGHT_ID]);
	this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level2_other1 = function(target) { 
	target.setOther1Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_1_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_TOP_RIGHT_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level2_other2 = function(target) { 
	target.setOther2Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_2_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_BOTTOM_RIGHT_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level2_other3 = function(target) { 
	target.setOther3Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_3_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_BOTTOM_LEFT_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level2_other4 = function(target) { 
	target.setOther4Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_4_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_TOP_LEFT_ID]);
};

//Defeated Level 3
Game_Enemy.prototype.preDmgEval_join_defeated_level3_pussy = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_anal = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_mouth = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	this.addToEnemyBlowjobCountRecord(target);
	
	AudioManager.playSe({name:'+Waitress_Chair1', pan:0, pitch:100, volume:100});
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_tittyFuck = function(target) {
	BattleManager.pullOutEnemy(this);	
	target.setBoobsInserted(true, this);
	target.enableTittyFuckPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_TittyFuck();
	this.setBodySlotWithPenis(BOOBS_ID);
	this.setValidTargetForTittyFuck();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	this.addToEnemyTittyFuckCountRecord(target);
	
	AudioManager.playSe({name:'+Waitress_Chair1', pan:0, pitch:100, volume:100});
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_other1 = function(target) { 
	target.setOther1Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_1_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_other2 = function(target) { 
	target.setOther2Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_2_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_other3 = function(target) { 
	target.setOther3Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_3_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTLEG_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level3_other4 = function(target) { 
	target.setOther4Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_4_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID]);
};

//Defeated Level 4
Game_Enemy.prototype.preDmgEval_join_defeated_level4_pussy = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID, SKILL_ENEMY_EJACULATE_PUSSY_ID, SKILL_ENEMY_EJACULATE_PUSSY_ID, SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_LEFTLEG_ID, SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
	this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level4_anal = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID, SKILL_ENEMY_EJACULATE_ANAL_ID, SKILL_ENEMY_EJACULATE_ANAL_ID, SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level4_mouth = function(target) { 
	BattleManager.pullOutEnemy(this);
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_MOUTH_ID, SKILL_ENEMY_EJACULATE_MOUTH_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_MOUTH_ID, SKILL_ENEMY_EJACULATE_LEFTARM_ID, SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	this.addToEnemyBlowjobCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level4_other1 = function(target) { 
	target.setOther1Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_1_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_LEFTLEG_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level4_other2 = function(target) { 
	target.setOther2Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_2_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_BUTT_ID, SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level4_other3 = function(target) { 
	target.setOther3Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_3_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
};

Game_Enemy.prototype.preDmgEval_join_defeated_level4_other4 = function(target) { 
	target.setOther4Inserted(true, this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_4_ID);
	this.setPoseSkillTarget(target);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_LEFTARM_ID]);
};

// Bar Sex Other1
Game_Enemy.prototype.preDmgEval_join_barsex_other1 = function(target, addJustJoined) { 
	target.setOther1Inserted(true, this);
	if(addJustJoined) this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.setBodySlotWithPenis(OTHER_1_ID);
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID,SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
};


//Defeated Guard
Game_Enemy.prototype.preDmgEval_join_defeated_guard_pussy = function(target) { 
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	this.addToEnemyPussyFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_guard_anal = function(target) { 
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	this.addToEnemyAnalFuckedCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_guard_mouth = function(target) { 
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	this.addToEnemyBlowjobCountRecord(target);
};

Game_Enemy.prototype.preDmgEval_join_defeated_guard_tittyFuck = function(target) { 
	target.setBoobsInserted(true, this);
	target.enableTittyFuckPoseSkills(this);
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	this.addSexPoseState_TittyFuck();
	this.setBodySlotWithPenis(BOOBS_ID);
	this.setValidTargetForTittyFuck();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	this.addToEnemyTittyFuckCountRecord(target);
};

//Receptionist
Game_Enemy.prototype.preDmgEval_join_receptionist_cunni = function(target) { 
	target.setPussyCunni(true, this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	//this.addSexPoseState_Cunni();
	this.setBodySlotWithPenis(CLIT_ID);
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_CUNNI_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_ID]);
	this.setCanBeKissed(false);
	this.addToEnemyCunnilingusCountRecord(target);
	target.emoteReceptionistPose();
};

Game_Enemy.prototype.preDmgEval_join_receptionist_pussy = function(target) { 
	target.setPussyInserted(true, this);
	target.enablePussySexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	//this.addSexPoseState_Pussy();
	this.setBodySlotWithPenis(PUSSY_ID);
	this.setValidTargetForPussySex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_POSESKILL_PUSSY_ID,SKILL_ENEMY_SPANKING_SELECTOR_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	this.addToEnemyPussyFuckedCountRecord(target);
	target.emoteReceptionistPose();
};

Game_Enemy.prototype.preDmgEval_join_receptionist_anal = function(target) { 
	target.setAnalInserted(true, this);
	target.enableAnalSexPoseSkills(this);
	target.stripOffPanties();
	target.stripOffClothing();
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	//this.addSexPoseState_Anal();
	this.setBodySlotWithPenis(ANAL_ID);
	this.setValidTargetForAnalSex();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_POSESKILL_ANAL_ID,SKILL_ENEMY_SPANKING_SELECTOR_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_BUTT_ID]);
	this.addToEnemyAnalFuckedCountRecord(target);
	target.emoteReceptionistPose();
};

Game_Enemy.prototype.preDmgEval_join_receptionist_mouth = function(target) { 
	target.setMouthInserted(true, this);
	target.enableBlowjobPoseSkills(this);
	target._receptionist_visitorSexSkillCooldown = 1;
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	//this.addSexPoseState_Blowjob();
	this.setBodySlotWithPenis(MOUTH_ID);
	this.setValidTargetForBlowjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_ONTO_DESK_ID]);
	this.addToEnemyBlowjobCountRecord(target);
	this._perv_gettingBJ = true;
	//target.updateReceptionistBattleVisitorQueueTachie();
};

Game_Enemy.prototype.preDmgEval_join_receptionist_lefthand = function(target) { 
	target.setLeftHandInserted(true, this);
	target.enableLeftHandjobPoseSkills(this);
	target._receptionist_visitorSexSkillCooldown = 1;
	this.addJustJoinedState();
	this.setPoseStatusHelper();
	//this.addSexPoseState_LeftHand();
	this.setBodySlotWithPenis(LEFT_HAND_ID);
	this.setValidTargetForHandjob();
	this.setPoseSkillTarget(target);
	this.setPoseSkills([SKILL_ENEMY_POSESKILL_LEFTHAND_ID]);
	if(this.isUsingBodySlotPenis(MOUTH_ID)) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_ONTO_DESK_ID]);
	}
	else {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_ONTO_DESK_ID]);
	}
	this.addToEnemyHandjobCountRecord(target);
	this._perv_gettingHJ = true;
	//target.updateReceptionistBattleVisitorQueueTachie();
};

//////////
// Selectors
//////////

// Talk Selectors
Game_Enemy.prototype.selectorEnemy_TalkRandom = function(target) {
	let talkArray = [];

	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SELECTOR_MOUTH_ID], target)) 
		talkArray.push(SKILL_ENEMY_TALK_SELECTOR_MOUTH_ID);
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SELECTOR_BOOBS_ID], target)) 
		talkArray.push(SKILL_ENEMY_TALK_SELECTOR_BOOBS_ID);
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SELECTOR_PUSSY_ID], target)) 
		talkArray.push(SKILL_ENEMY_TALK_SELECTOR_PUSSY_ID);
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SELECTOR_BUTT_ID], target)) 
		talkArray.push(SKILL_ENEMY_TALK_SELECTOR_BUTT_ID);
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SELECTOR_COCK_ID], target)) {
		talkArray.push(SKILL_ENEMY_TALK_SELECTOR_COCK_ID);
		talkArray.push(SKILL_ENEMY_TALK_SELECTOR_COCK_ID);
	}

	this._ignoreNextOrgasmCheck = true;

	let skillId = talkArray[Math.randomInt(talkArray.length)];
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_TalkMouth = function(target) {
	let skillId = SKILL_ENEMY_TALK_SKILL_MOUTH_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SKILL_MOUTH_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_TALK_SKILL_MOUTH_JERKOFF_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_TalkBoobs = function(target) {
	let skillId = SKILL_ENEMY_TALK_SKILL_BOOBS_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SKILL_BOOBS_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_TALK_SKILL_BOOBS_JERKOFF_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_TalkPussy = function(target) {
	let skillId = SKILL_ENEMY_TALK_SKILL_PUSSY_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SKILL_PUSSY_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_TALK_SKILL_PUSSY_JERKOFF_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_TalkButt = function(target) {
	let skillId = SKILL_ENEMY_TALK_SKILL_BUTT_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SKILL_BUTT_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_TALK_SKILL_BUTT_JERKOFF_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_TalkCock = function(target) {
	let skillId = SKILL_ENEMY_TALK_SKILL_COCK_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TALK_SKILL_COCK_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_TALK_SKILL_COCK_JERKOFF_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};

// Sight Selectors
Game_Enemy.prototype.selectorEnemy_SightRandom = function(target) {
	let sightArray = [ SKILL_ENEMY_STARE_SELECTOR_MOUTH_ID, SKILL_ENEMY_STARE_SELECTOR_BOOBS_ID, SKILL_ENEMY_STARE_SELECTOR_PUSSY_ID, SKILL_ENEMY_STARE_SELECTOR_BUTT_ID ];
	let skillId = false;
	let success = false;
	while(sightArray.length > 0 && !success) {
		let index = Math.randomInt(sightArray.length);
		let skillId = sightArray.splice(index, 1)[0];
		if(this.meetsSkillConditionsEval($dataSkills[skillId], target)) {
			this._ignoreNextOrgasmCheck = true;
			this.useAISkill(skillId, target);
			success = true;
		}
	}
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_SightMouth = function(target) {
	let skillId = SKILL_ENEMY_STARE_SKILL_MOUTH_ID;

	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUKKAKED_FACE_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUKKAKED_FACE_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_MOUTH_SWALLOW_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_MOUTH_SWALLOW_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_MOUTH_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_MOUTH_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUKKAKED_FACE_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUKKAKED_FACE_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_MOUTH_SWALLOW_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_MOUTH_SWALLOW_ID;
	
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_SightBoobs = function(target) {
	let skillId = SKILL_ENEMY_STARE_SKILL_BOOBS_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUKKAKED_BOOBS_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUKKAKED_BOOBS_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_NIPPLES_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_NIPPLES_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BOOBS_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BOOBS_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUKKAKED_BOOBS_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUKKAKED_BOOBS_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_NIPPLES_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_NIPPLES_ID;
	
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_SightPussy = function(target) {
	let skillId = SKILL_ENEMY_STARE_SKILL_CLIT_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_PUSSY_CREAMPIE_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_PUSSY_CREAMPIE_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_PUSSY_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_PUSSY_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_CLIT_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_CLIT_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_PUSSY_CREAMPIE_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_PUSSY_CREAMPIE_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_PUSSY_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_PUSSY_ID;
	
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_SightButt = function(target) {
	let skillId = SKILL_ENEMY_STARE_SKILL_BUTT_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_ANAL_CREAMPIE_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_ANAL_CREAMPIE_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUKKAKED_BUTT_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUKKAKED_BUTT_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_ANAL_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_ANAL_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUTT_JERKOFF_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUTT_JERKOFF_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_ANAL_CREAMPIE_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_ANAL_CREAMPIE_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_ANAL_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_ANAL_ID;
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_STARE_SKILL_BUKKAKED_BUTT_ID], target))
		skillId = SKILL_ENEMY_STARE_SKILL_BUKKAKED_BUTT_ID;
	
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};

// Petting Selectors
Game_Enemy.prototype.selectorEnemy_PettingRandom = function(target) {
	let pettingArray = [ SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID, SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID, SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID, SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID ];
	let skillId = false;
	let success = false;
	while(pettingArray.length > 0 && !success) {
		let index = Math.randomInt(pettingArray.length);
		let skillId = pettingArray.splice(index, 1)[0];
		if(this.meetsSkillConditionsEval($dataSkills[skillId], target)) {
			this._ignoreNextOrgasmCheck = true;
			this.useAISkill(skillId, target);
			success = true;
		}
	}
	return skillId;
};

Game_Enemy.prototype.selectorEnemy_PettingMouth = function(target) { 
	let pettingArray = [];

	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_GET_FINGERS_SUCKED_ID]) && !this.isVisitorType, target) 
		pettingArray.push(SKILL_ENEMY_GET_FINGERS_SUCKED_ID);
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_KISS_TWO_ID], target)) {
		pettingArray.push(SKILL_ENEMY_KISS_TWO_ID);
		pettingArray.push(SKILL_ENEMY_KISS_TWO_ID);
		pettingArray.push(SKILL_ENEMY_KISS_TWO_ID);
		pettingArray.push(SKILL_ENEMY_KISS_TWO_ID);
		pettingArray.push(SKILL_ENEMY_KISS_ONE_ID);
		pettingArray.push(SKILL_ENEMY_GET_FINGERS_SUCKED_ID);
	}
	else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_KISS_ONE_ID], target)) {
		pettingArray.push(SKILL_ENEMY_KISS_ONE_ID);
		pettingArray.push(SKILL_ENEMY_KISS_ONE_ID);
	}
	
	this._ignoreNextOrgasmCheck = true;
	
	let skillId = pettingArray[Math.randomInt(pettingArray.length)];
	this.useAISkill(skillId, target);
	return skillId;
};

Game_Enemy.prototype.selectorEnemy_PettingBoobs = function(target) {
	let pettingArray = [];
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_BOOBS_AREA_ID], target)) 
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_AREA_ID);
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_NIPPLES_AREA_ID], target)) {
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_NIPPLES_AREA_ID);
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_NIPPLES_AREA_ID);
	}
	
	this._ignoreNextOrgasmCheck = true;
	
	let skillId = pettingArray[Math.randomInt(pettingArray.length)];
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_PettingPussy = function(target) {
	let pettingArray = [];
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_CLIT_AREA_ID], target)) 
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_CLIT_AREA_ID);
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_PUSSY_AREA_ID], target)) {
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_AREA_ID);
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_AREA_ID);
	}

	this._ignoreNextOrgasmCheck = true;
	
	let skillId = pettingArray[Math.randomInt(pettingArray.length)];
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_PettingButt = function(target) {
	let pettingArray = [];
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_BUTT_AREA_ID], target)) 
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_AREA_ID);
	
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_ANAL_AREA_ID], target)) {
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_ANAL_AREA_ID);
		pettingArray.push(SKILL_ENEMY_PETTING_SELECTOR_ANAL_AREA_ID);
	}
	
	this._ignoreNextOrgasmCheck = true;
	
	let skillId = pettingArray[Math.randomInt(pettingArray.length)];
	this.useAISkill(skillId, target);
	return skillId;
};

Game_Enemy.prototype.selectorEnemy_SpankingButt = function(target) {
	let skillId = SKILL_ENEMY_SPANKING_ONE_ID;
	let reactionScore = target.getButtSpankingReactionScore();
	if(reactionScore >= VAR_DEF_RS_LV3_REQ)
		skillId = SKILL_ENEMY_SPANKING_THREE_ID;
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ)	
		skillId = SKILL_ENEMY_SPANKING_TWO_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};


Game_Enemy.prototype.selectorEnemy_PettingBoobsArea = function(target) { 
	let skillId = SKILL_ENEMY_PETTING_BOOBS_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_PettingNipplesArea = function(target) { 
	let skillId = SKILL_ENEMY_PETTING_NIPPLES_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};

Game_Enemy.prototype.selectorEnemy_PettingClitArea = function(target) {
	let skillId = SKILL_ENEMY_PETTING_CLIT_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TOY_PLAY_PINK_ROTOR_ID], target))
		skillId = SKILL_ENEMY_TOY_PLAY_PINK_ROTOR_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TOY_INSERT_PINK_ROTOR_ID], target))
		skillId = SKILL_ENEMY_TOY_INSERT_PINK_ROTOR_ID;

	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};

Game_Enemy.prototype.selectorEnemy_PettingPussyArea = function(target) {
	let skillId = SKILL_ENEMY_PETTING_PUSSY_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TOY_PLAY_PENIS_DILDO_ID], target))
		skillId = SKILL_ENEMY_TOY_PLAY_PENIS_DILDO_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID], target))
		skillId = SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID;
	
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_PettingButtArea = function(target) { 
	let skillId = SKILL_ENEMY_PETTING_BUTT_ID;
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};
Game_Enemy.prototype.selectorEnemy_PettingAnalArea = function(target) { 
	let skillId = SKILL_ENEMY_PETTING_ANAL_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TOY_PLAY_ANAL_BEADS_ID], target))
		skillId = SKILL_ENEMY_TOY_PLAY_ANAL_BEADS_ID;
	if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID], target))
		skillId = SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID;
	
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(skillId, target);
	return skillId;
};

Game_Enemy.prototype.selectorEnemy_SlimePoseSkill = function(target) { 
	let usingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	let usingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	
	this.orgasmLockOn();
	if(usingMouth) this.useAISkill(SKILL_ENEMY_POSESKILL_MOUTH_ID, target);
	if(usingPussy) this.useAISkill(SKILL_ENEMY_POSESKILL_PUSSY_ID, target);
	this.orgasmLockOff();
	this._ignoreNextOrgasmCheck = true;
	this.useAISkill(SKILL_ENEMY_POSESKILL_ANAL_ID, target);
};

Game_Enemy.prototype.selectorEnemy_SlimeEjaculationSkill = function(target) {
	if(!this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID)) {
		//this._selectorEnemy_SlimeEjaculationSkill_called = true;
		this.addState(STATE_ENEMY_CAME_THIS_TURN_ID);
		let usingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
		let usingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
		
		this._slime_cameInsideAnal = false;
		this._slime_cameInsidePussy = false;
		this._slime_cameInsideMouth = false;
		
		if(usingMouth) {
			if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_EJACULATE_MOUTH_ID], target)) {
				this.useAISkill(SKILL_ENEMY_EJACULATE_MOUTH_ID, target);
				this._slime_cameInsideMouth = true;
			}
			else
				this.useAISkill(SKILL_ENEMY_EJACULATE_FACE_ID, target);
		}
		if(usingPussy) {
			if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_EJACULATE_PUSSY_ID], target)) {
				this.useAISkill(SKILL_ENEMY_EJACULATE_PUSSY_ID, target);
				this._slime_cameInsidePussy = true;
			}
			else
				this.useAISkill(SKILL_ENEMY_EJACULATE_BOOBS_ID, target);
		}
		
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_EJACULATE_ANAL_ID], target)) {
			this.useAISkill(SKILL_ENEMY_EJACULATE_ANAL_ID, target);
			this._slime_cameInsideAnal = true;
		}
		else
			this.useAISkill(SKILL_ENEMY_EJACULATE_BUTT_ID, target);

	}
};


Game_Enemy.prototype.selectorEnemy_PoseJoinRandom = function(target) {
	let poseJoinArray = [ SKILL_ENEMY_POSEJOIN_RIGHT_HAND_ID, SKILL_ENEMY_POSEJOIN_LEFT_HAND_ID, SKILL_ENEMY_POSEJOIN_MOUTH_ID, SKILL_ENEMY_POSEJOIN_ANAL_ID, SKILL_ENEMY_POSEJOIN_BOOBS_ID, SKILL_ENEMY_POSEJOIN_PUSSY_ID ];
	let skillId = false;
	let success = false;
	while(poseJoinArray.length > 0 && !success) {
		let index = Math.randomInt(poseJoinArray.length);
		let skillId = poseJoinArray.splice(index, 1)[0];
		if(this.meetsSkillConditionsEval($dataSkills[skillId], target)) {
			this.useAISkill(skillId, target);
			success = true;
		}
	}
	return skillId;
};

//////////////
////////////////
// Damage Formulas
/////////////////
/////////////


//////////////
// Talk Damage Formula
/////////////////////

//Basic Talk only affects one desire area
Game_Enemy.prototype.dmgFormula_basicTalk = function(target, area, jerkingOff) {
	if(!jerkingOff) jerkingOff = false;
	let baseDmg = BASEDMG_TALK;
	let targetRateMultipler = target.elementRate(ELEMENT_TALK_ID);
	let targetSensitivity = target.talkSensitivity();
	let enemySkillLvl = this.talkLvl();

	let targetDesireGain = (baseDmg + enemySkillLvl) * targetRateMultipler;
	let targetPleasureGain = Math.round((targetDesireGain + (this.enemyLvl() * 0.75 * targetRateMultipler)) * targetSensitivity * (1 + enemySkillLvl * 0.1));
	if(targetRateMultipler < 1) targetPleasureGain *= targetRateMultipler;

	if(jerkingOff) {
		if(Karryn.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_THREE_ID)) targetDesireGain *= 1.5;
		else if(Karryn.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_TWO_ID)) targetDesireGain *= 1.2;
	}

	//Gain desire
	if(area == AREA_RANDOM) {
		let ran = Math.randomInt(5);
		if(ran === 0) area = AREA_MOUTH;
		else if(ran === 1) area = AREA_BOOBS;
		else if(ran === 2) area = AREA_PUSSY;
		else if(ran === 3) area = AREA_BUTT;
		else if(ran === 4) area = AREA_COCK;
	}
	
	if(area == AREA_MOUTH) {
		target.gainMouthDesire(Math.round(targetDesireGain), false, false);
		this.addToEnemyTalkedAboutMouthRecord(target);
	}
	else if(area == AREA_BOOBS) {
		target.gainBoobsDesire(Math.round(targetDesireGain), false, false);
		this.addToEnemyTalkedAboutBoobsRecord(target);
	}
	else if(area == AREA_PUSSY) {
		target.gainPussyDesire(Math.round(targetDesireGain), false, false);
		this.addToEnemyTalkedAboutPussyRecord(target);
	}
	else if(area == AREA_BUTT) {
		target.gainButtDesire(Math.round(targetDesireGain), false, false);
		this.addToEnemyTalkedAboutButtRecord(target);
	}
	else if(area == AREA_COCK) {
		target.gainCockDesire(Math.round(targetDesireGain), false, false);
		this.addToEnemyTalkedAboutCockRecord(target);
		
		if(Karryn.hasPassive(PASSIVE_TALK_COCK_THREE_ID)) {
			if(Math.random() < 0.15) target.addHornyState();
		}
	}
	else console.log("Error dmgFormula basicTalk area: " + area);
	
	let pleasureFeedback = 0;
	if(jerkingOff) {
		let minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_DIVIDE;
		if(target.isInDefeatedPose()) minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_DEFEATED_DIVIDE;
		else if(this.isBossType) minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_BOSS;
		let minFeedbackOriginalValue = this.orgasmPoint() / minFeedbackDivider * Math.max(0.15, (0.85 + this.masturbateLvl() * 0.15));
		let minFeedbackValue = minFeedbackOriginalValue;
		minFeedbackValue -= Math.random() * minFeedbackOriginalValue * 0.15;
		minFeedbackValue += Math.random() * minFeedbackOriginalValue * 0.15;
		pleasureFeedback = Math.max(pleasureFeedback, Math.round(minFeedbackValue));
		
		this.addToEnemyJerkOffCountRecord(target);
	}
	
	target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK);
	
	//Gain pleasure
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.pleasureFeedback = pleasureFeedback;
	result.clothingDamage = 0;
	result.skillTypeEnemyTalk = true;
	
	this.addToEnemyTalkedCountRecord(target);
	if(targetPleasureGain > 0) target.addToActorTalkPleasureRecord(targetPleasureGain);
	
	//target.emoteMasterManager();
	
	return 0;
};

///////////////////
// Sight Damage formula
//////////////////////

//Basic Sight only affects one desire area
Game_Enemy.prototype.dmgFormula_basicSight = function(target, sightType, jerkingOff) {
	if(!jerkingOff) jerkingOff = false;
	let baseDmg = BASEDMG_SIGHT;
	let targetRateMultipler = target.elementRate(ELEMENT_SIGHT_ID);
	let targetSensitivity = target.sightSensitivity();
	let enemySkillLvl = this.sightLvl();
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetRateMultipler;
	let targetPleasureGain = Math.round((targetDesireGain + (this.enemyLvl() * 0.75 * targetRateMultipler)) * targetSensitivity * (1 + enemySkillLvl * 0.1));
	if(targetRateMultipler < 1) targetPleasureGain *= targetRateMultipler;
	
	if(jerkingOff) {
		if(Karryn.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_THREE_ID)) targetDesireGain *= 1.5;
		else if(Karryn.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_TWO_ID)) targetDesireGain *= 1.2;
	}
	
	//Gain desire
	if(sightType == SIGHT_RANDOM) {
		let ran = Math.randomInt(4);
		if(ran === 0) sightType = SIGHT_MOUTH;
		else if(ran === 1) sightType = SIGHT_BOOBS;
		else if(ran === 2) sightType = SIGHT_CLIT;
		else if(ran === 3) sightType = SIGHT_BUTT;
	}
	

	if(sightType === SIGHT_MOUTH || sightType === SIGHT_BUKKAKE_FACE || sightType === SIGHT_MOUTH_SWALLOW) {
		target.gainMouthDesire(targetDesireGain, false, false);
		this.addToEnemySawMouthRecord(target);
	}
	else if(sightType === SIGHT_BOOBS || sightType === SIGHT_NIPPLES || sightType === SIGHT_BUKKAKE_BOOBS) {
		target.gainBoobsDesire(targetDesireGain, false, false);
		this.addToEnemySawBoobsRecord(target);
	}
	else if(sightType === SIGHT_CLIT || sightType === SIGHT_PUSSY || sightType === SIGHT_PUSSY_CREAMPIE) {
		target.gainPussyDesire(targetDesireGain, false, false);
		this.addToEnemySawPussyRecord(target);
	}
	else if(sightType === SIGHT_BUTT || sightType === SIGHT_ANAL || sightType === SIGHT_BUKKAKE_BUTT || sightType === SIGHT_ANAL_CREAMPIE) {
		target.gainButtDesire(targetDesireGain, false, false);
		this.addToEnemySawButtRecord(target);
	}
	else console.log("Error dmgFormula basicSight sightType: " + sightType);
	
	
	let pleasureFeedback = 0;
	if(jerkingOff) {
		let minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_DIVIDE;
		if(target.isInDefeatedPose()) minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_DEFEATED_DIVIDE;
		else if(this.isBossType) minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_BOSS;
		let minFeedbackOriginalValue = this.orgasmPoint() / minFeedbackDivider * Math.max(0.15, (0.85 + this.masturbateLvl() * 0.15));
		let minFeedbackValue = minFeedbackOriginalValue;
		minFeedbackValue -= Math.random() * minFeedbackOriginalValue * 0.15;
		minFeedbackValue += Math.random() * minFeedbackOriginalValue * 0.15;
		pleasureFeedback = Math.max(pleasureFeedback, Math.round(minFeedbackValue));
		
		this.addToEnemyJerkOffCountRecord(target);
	}
	
	target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_SIGHT);
	
	//Gain pleasure
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.pleasureFeedback = pleasureFeedback;
	result.clothingDamage = 0;
	result.skillTypeEnemySight = true;
	
	this.addToEnemySawCountRecord(target);
	if(targetPleasureGain > 0) target.addToActorSightPleasureRecord(targetPleasureGain);
	
	//target.emoteMasterManager();
	
	return 0;
};

///////////////////
// Petting Damage formula
//////////////////////

//Basic Petting gives 60% of the desire to the targeted area, and remaining 40% to a random area with a cock weight of 3
Game_Enemy.prototype.dmgFormula_basicPetting = function(target, area) {
	let enemySkillLvl = this.pettingLvl();
	let staminaPercent = target.hp / target.mhp;
	let targetPettingRate = target.elementRate(ELEMENT_PETTING_ID) * (1.5 - staminaPercent/2);
	let targetStripRate = target.elementRate(ELEMENT_STRIP_ID) * (1.5 - staminaPercent/2);
	let baseDmg = 0;
	let targetDesire = 0;
	let targetSensitivity = 0;
	
	if(area == AREA_BOOBS) {
		baseDmg = BASEDMG_PETTING_BOOBS;
		targetDesire = target.boobsDesire;
		targetSensitivity = target.boobsSensitivity();
		this.addToEnemyBoobsPettedCountRecord(target);
		if(this.isVisitorType) this.addToEnemyBoobshakeCountRecord(target);
		target.setTachieCutIn(CUTIN_PETTING_BOOBS_NAME);
	}
	else if(area == AREA_NIPPLES) {
		baseDmg = BASEDMG_PETTING_NIPPLES;
		targetDesire = target.boobsDesire;
		targetSensitivity = target.nipplesSensitivity();
		this.addToEnemyNipplesPettedCountRecord(target);
		target.setTachieCutIn(CUTIN_PETTING_NIPPLES_NAME);
		
	}
	else if(area == AREA_CLIT) {
		baseDmg = BASEDMG_PETTING_CLIT;
		targetDesire = target.pussyDesire;
		targetSensitivity = target.clitSensitivity();
		this.addToEnemyClitPettedCountRecord(target);
		target.setTachieCutIn(CUTIN_PETTING_CLIT_NAME);
	}
	else if(area == AREA_PUSSY) {
		baseDmg = BASEDMG_PETTING_PUSSY;
		targetDesire = target.pussyDesire;
		targetSensitivity = target.pussySensitivity();
		this.addToEnemyPussyPettedCountRecord(target);
		target.increaseLiquidPussyJuice(enemySkillLvl);
		target.setTachieCutIn(CUTIN_PETTING_PUSSY_NAME);
	}
	else if(area == AREA_BUTT) {
		baseDmg = BASEDMG_PETTING_BUTT;
		targetDesire = target.buttDesire;
		targetSensitivity = target.buttSensitivity();
		this.addToEnemyButtPettedCountRecord(target);
		if(this.isGoblinType)
			target.setTachieCutIn(CUTIN_PETTING_BUTT_GOBLIN_NAME);
		else
			target.setTachieCutIn(CUTIN_PETTING_BUTT_NAME);
	}
	else if(area == AREA_ANAL) {
		baseDmg = BASEDMG_PETTING_ANAL;
		targetDesire = target.buttDesire;
		targetSensitivity = target.analSensitivity();
		this.addToEnemyAnalPettedCountRecord(target);
		target.setTachieCutIn(CUTIN_PETTING_ANAL_NAME);
	}
	else if(area == AREA_FINGERS) {
		baseDmg = BASEDMG_SUCKING_FINGERS;
		targetDesire = target.mouthDesire;
		targetSensitivity = target.mouthSensitivity();
		this.addToEnemyFingerSuckedCountRecord(target);
		target.setTachieCutIn(CUTIN_SUCKING_ENEMY_FINGERS_NAME);
	}
	else if(area == AREA_HANDSHAKE) {
		baseDmg = BASEDMG_VISITOR_HANDSHAKE;
		targetDesire = target.cockDesire;
		targetSensitivity = target.fingerSensitivity();
		this.addToEnemyHandshakeCountRecord(target);
		this.addToEnemyHandshakeWhileSexCountRecord(target);
	}
	
	else console.log("Error dmgFormula basicPetting area: " + area);
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetPettingRate;
	let targetPleasureGain = (targetDesireGain + this.dex + this.enemyLvl() * 0.5) * (1 + (enemySkillLvl * 0.1)) * targetSensitivity;
	if(targetPettingRate < 1) targetPleasureGain *= targetPettingRate;
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	targetPleasureGain *= target.passivePettingPleasureRate();
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetPettingRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	if(targetDesire <= 100) {
		if(targetPettingRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetPettingRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((targetDesire * 0.01) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);
	
	let clothingDmg = ((this.dex + enemySkillLvl) * 2) * targetStripRate;
	
	//var staminaDmg = Math.max((this.str + enemySkillLvl + this.dex) - (target.str), this.dex);
	let staminaDmg = target.skillCost_karrynPetting(false);
	
	if(target.hp > 0) {
		target.gainEnduranceExp(20, this.enemyExperienceLvl());
		clothingDmg = Math.max(clothingDmg * 0.33, clothingDmg - target.str);
	}
	
	if(this.isVisitorType) {
		clothingDmg = 0;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .6;
	result.desireRandomDamage = targetDesireGain * .4;
	result.desireCockWeight = 3;
	result.desireTarget = area;
	result.staminaDamage = staminaDmg;
	result.clothingDamage = clothingDmg;
	
	if(targetPleasureGain > 0) {
		if(area == AREA_BOOBS) target.addToActorBoobsPleasureRecord(targetPleasureGain);
		else if(area == AREA_NIPPLES) target.addToActorNipplesPleasureRecord(targetPleasureGain);
		else if(area == AREA_PUSSY) target.addToActorPussyPleasureRecord(targetPleasureGain);
		else if(area == AREA_CLIT) target.addToActorClitPleasureRecord(targetPleasureGain);
		else if(area == AREA_BUTT) target.addToActorButtPleasureRecord(targetPleasureGain);
		else if(area == AREA_ANAL) target.addToActorAnalPleasureRecord(targetPleasureGain);
		else if(area == AREA_FINGERS) target.addToActorMouthPleasureRecord(targetPleasureGain);
	}
	
	target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	
	//target.emoteMasterManager();
	
	return 0;
};

////////////
// Kiss Damage Formula
/////////////////

//Basic Petting gives 40% of the desire to the targeted area, and remaining 60% to a random area with a cock weight of 4
Game_Enemy.prototype.dmgFormula_enemyKiss = function(target, lvl) {
	let enemySkillLvl = this.kissLvl();
	let staminaPercent = target.hp / target.mhp;
	let targetPettingRate = target.elementRate(ELEMENT_PETTING_ID) * (1.5 - staminaPercent/2);
	let targetStripRate = target.elementRate(ELEMENT_STRIP_ID) * (1.5 - staminaPercent/2);
	let targetDesire = target.mouthDesire;
	let targetSensitivity = target.mouthSensitivity();
	let baseDmg = BASEDMG_KISS_LVLONE;
	let kissLvlDmg = 1;
	let targetPassiveEffect = target.passiveKissSkillRate(this);
	
	if(lvl == KISS_LVL_ONE) {
		target.setTachieCutIn(CUTIN_ENEMY_KISS_ONE_NAME);
		//target.setTachieCut_moveLeftToRight();
	}
	if(lvl == KISS_LVL_TWO) {
		baseDmg = BASEDMG_KISS_LVLTWO;
		kissLvlDmg = 1.2;
		target.setTachieCutIn(CUTIN_ENEMY_KISS_TWO_NAME);
		//target.setTachieCut_moveLeftToRight();
	}
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetPettingRate;
	let targetPleasureGain = (targetDesireGain + this.dex + this.enemyLvl() * 0.5) * (1 + (enemySkillLvl * 0.1)) * targetSensitivity * kissLvlDmg;
	if(targetPettingRate < 1) targetPleasureGain *= targetPettingRate;
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	targetPleasureGain *= target.passivePettingPleasureRate();
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetPettingRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	if(targetDesire <= 100) {
		if(targetPettingRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetPettingRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((targetDesire * 0.01) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);
	
	let clothingDmg = ((this.dex + enemySkillLvl) * 2) * targetStripRate;
	
	let staminaDmg = target.skillCost_karrynKiss(false);
	
	let targetSkillRating = target.kissSkillRating();
	let enemyWeakness = this.weaknessToKiss();
	let enemyPleasureFeedback = target.dex * 1.35 * targetSkillRating * enemyWeakness * kissLvlDmg * VAR_ENEMY_PLEASURE_FEEDBACK_REDUCER;
	if(target.hp > 0) {
		target.gainDexterityExp(30, this.enemyExperienceLvl());
		clothingDmg = Math.max(clothingDmg * 0.33, clothingDmg - target.str);
		enemyPleasureFeedback *= targetPassiveEffect;
	}
	else {
		enemyPleasureFeedback = enemyPleasureFeedback / 2;
	}
	
	if(this.isVisitorType) {
		clothingDmg = 0;
	}
	
	target.result().pleasureFeedback = enemyPleasureFeedback;
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .4;
	result.desireRandomDamage = targetDesireGain * .6;
	result.desireCockWeight = 4;
	result.desireTarget = AREA_MOUTH;
	result.staminaDamage = staminaDmg;
	result.clothingDamage = clothingDmg;
	
	if(targetPleasureGain > 0) target.addToActorMouthPleasureRecord(targetPleasureGain);
	target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS);
	this.addToEnemyKissedCountRecord(target);
	
	return 0;
};

///////////////////
// Spanking Damage formula
//////////////////////

//Spanking gives 30% of the desire to the butt, and remaining 70% to a random area with a cock weight of 4
Game_Enemy.prototype.dmgFormula_enemySpanking = function(target, spankLvl) {
	let baseDmg = BASEDMG_SPANK_LVLONE;
	let enemySkillLvl = this.sadismLvl();
	let staminaPercent = target.hp / target.mhp;
	let targetPettingRate = target.elementRate(ELEMENT_PETTING_ID) * (1.5 - staminaPercent/2);
	let targetStripRate = target.elementRate(ELEMENT_STRIP_ID) * (1.5 - staminaPercent/2);
	
	let targetDesire = target.buttDesire;
	let targetSensitivity = target.buttSensitivity() * 0.8;
	let spankSensitivity = target.passiveSpankingPleasureRate(spankLvl);
	
	this.addToEnemySpankCountRecord(target);
	
	if(spankLvl == SPANK_LVL_ONE) {
		target.setTachieCutIn(CUTIN_SPANKING_ONE_NAME);
		$gameScreen.startShake(REM_SPANK_LV1_SCREEN_SHAKE_POWER, REM_SPANK_LV1_SCREEN_SHAKE_SPEED, REM_SPANK_LV1_SCREEN_SHAKE_DURATION);
		target.useSpecialRemSpriteBattlerPos(SPANK_LVL_ONE);
	}
	else if(spankLvl == SPANK_LVL_TWO) {
		target.setTachieCutIn(CUTIN_SPANKING_TWO_NAME);
		$gameScreen.startShake(REM_SPANK_LV2_SCREEN_SHAKE_POWER, REM_SPANK_LV2_SCREEN_SHAKE_SPEED, REM_SPANK_LV2_SCREEN_SHAKE_DURATION);
		target.useSpecialRemSpriteBattlerPos(SPANK_LVL_TWO);
	}
	else if(spankLvl == SPANK_LVL_THREE) {
		target.setTachieCutIn(CUTIN_SPANKING_THREE_NAME);
		$gameScreen.startShake(REM_SPANK_LV3_SCREEN_SHAKE_POWER, REM_SPANK_LV3_SCREEN_SHAKE_SPEED, REM_SPANK_LV3_SCREEN_SHAKE_DURATION);
		target.useSpecialRemSpriteBattlerPos(SPANK_LVL_THREE);
	}
	
	let staminaDmg = Math.max(((this.str + enemySkillLvl) * 3) - (target.str), this.str);
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetPettingRate;
	let targetPleasureGain = (targetDesireGain + this.dex + this.enemyLvl() * 0.5) * (1 + enemySkillLvl * 0.1) * targetSensitivity * spankSensitivity;
	if(targetPettingRate < 1) targetPleasureGain *= targetPettingRate;
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetPettingRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	if(targetDesire <= 100) {
		if(targetPettingRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetPettingRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((targetDesire * 0.01) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);
	


	
	let clothingDmg = ((this.str + enemySkillLvl) * 2) * targetStripRate;
	
	if(target.hp > 0) {
		target.gainStaminaExp(20, this.enemyExperienceLvl());
		target.gainEnduranceExp(30, this.enemyExperienceLvl());
		clothingDmg = Math.max(clothingDmg * 0.33, clothingDmg - target.str);
	}
	
	if(this.isVisitorType) {
		clothingDmg = 0;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .6;
	result.desireRandomDamage = targetDesireGain * .4;
	result.desireCockWeight = 3;
	result.desireTarget = AREA_BUTT;
	result.staminaDamage = staminaDmg;
	result.clothingDamage = clothingDmg;
	
	if(targetPleasureGain > 0) {
		target.addToActorMasochismPleasureRecord(targetPleasureGain);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING);
	}

	//target.emoteMasterManager();
	
	return 0;
};

///////////////////
// Petting Damage formula
//////////////////////

//Toy Play gives 60% of the desire to the targeted area, and remaining 40% to a random area with a cock weight of 4
Game_Enemy.prototype.dmgFormula_toyPlay = function(target, toy, insertion) {
	let enemySkillLvl = this.toyLvl();
	let staminaPercent = target.hp / target.mhp;
	let targetPettingRate = target.elementRate(ELEMENT_PETTING_ID) * (1.5 - staminaPercent/2);
	let targetStripRate = target.elementRate(ELEMENT_STRIP_ID) * (1.5 - staminaPercent/2);
	let baseDmg = 0;
	let desireTarget = false;
	let targetDesire = 0;
	let targetSensitivity = 0;
	let toySensitivity = target.calculateToySensitivityRating(toy);
	
	if(toy == TOY_PINK_ROTOR) {
		baseDmg = BASEDMG_TOY_PINK_ROTOR;
		desireTarget = AREA_CLIT;
		targetDesire = target.pussyDesire;
		targetSensitivity = target.clitSensitivity();
		if(insertion) {
			target.addToClitToyInsertedRecord(this);
			target.setToyInserted_ClitToy_PinkRotor(true);
			target.setTachieCutIn(CUTIN_TOY_PINK_ROTOR_INSERT_NAME);
		}
		else {
			target.addToClitToyUsedByEnemyRecord(this);
			target.setTachieCutIn(CUTIN_TOY_PINK_ROTOR_PLAY_NAME);
		}
		
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_CLIT);
	}
	else if(toy == TOY_PENIS_DILDO) {
		baseDmg = BASEDMG_TOY_PENIS_DILDO;
		desireTarget = AREA_PUSSY;
		targetDesire = target.pussyDesire;
		targetSensitivity = target.pussySensitivity();
		if(insertion) {
			target.stripOffPanties();
			target.addToPussyToyInsertedRecord(this);
			target.setToyInserted_PussyToy_PenisDildo(true);
			target.setTachieCutIn(CUTIN_TOY_PENIS_DILDO_INSERT_NAME);
		}
		else {
			target.addToPussyToyUsedByEnemyRecord(this);
			target.setTachieCutIn(CUTIN_TOY_PENIS_DILDO_PLAY_NAME);
		}
		
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY);
	}
	else if(toy == TOY_ANAL_BEAD) {
		baseDmg = BASEDMG_TOY_ANAL_BEADS;
		desireTarget = AREA_ANAL;
		targetDesire = target.buttDesire;
		targetSensitivity = target.analSensitivity();
		if(insertion) {
			target.stripOffPanties();
			target.addToAnalToyInsertedRecord(this);
			target.setToyInserted_AnalToy_AnalBeads(true);
			target.setTachieCutIn(CUTIN_TOY_ANAL_BEADS_INSERT_NAME);
		}
		else {
			target.addToAnalToyUsedByEnemyRecord(this);
			target.setTachieCutIn(CUTIN_TOY_ANAL_BEADS_PLAY_NAME);
		}
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	}

	else console.log("Error dmgFormula toyPlay toy: " + toy);
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetPettingRate;
	let targetPleasureGain = (targetDesireGain + this.dex + this.enemyLvl() * 0.5) * (1 + (enemySkillLvl * 0.1)) * targetSensitivity * toySensitivity;
	if(targetPettingRate < 1) targetPleasureGain *= targetPettingRate;
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	targetPleasureGain *= target.passivePettingPleasureRate();
	
	let clothingDmg = ((this.dex + enemySkillLvl) * 2) * targetStripRate;
	
	let staminaDmg = target.skillCost_karrynPetting(false);
	
	if(target.hp > 0) {
		target.gainEnduranceExp(20, this.enemyExperienceLvl());
		clothingDmg = Math.max(clothingDmg * 0.33, clothingDmg - target.str);
	}
	
	if(this.isVisitorType) {
		clothingDmg = 0;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .6;
	result.desireRandomDamage = targetDesireGain * .4;
	result.desireCockWeight = 4;
	result.desireTarget = desireTarget;
	result.staminaDamage = staminaDmg;
	result.clothingDamage = clothingDmg;
	
	if(targetPleasureGain > 0) {
		target.addToActorToysPleasureRecord(targetPleasureGain);
		
		if(toy == TOY_PENIS_DILDO) target.addToActorPussyPleasureRecord(targetPleasureGain);
		else if(toy == TOY_PINK_ROTOR) target.addToActorClitPleasureRecord(targetPleasureGain);
		else if(toy == TOY_ANAL_BEAD) target.addToActorAnalPleasureRecord(targetPleasureGain);
	}
	
	//target.emoteMasterManager();
	
	return 0;
};

///////////////////
// Sex Damage formula
//////////////////////

//Basic Sex gives 50% of the desire to cock, and remaining 50% to a random area with a cock weight of 0
Game_Enemy.prototype.dmgFormula_basicSex = function(target, sexAct) {
	let staminaPercent = target.hp / target.mhp;
	let targetSexRate = target.elementRate(ELEMENT_SEX_ID) * (1.5 - staminaPercent/2);
	let targetStripRate = target.elementRate(ELEMENT_STRIP_ID) * (1.5 - staminaPercent/2);
	let targetCockDesire = target.cockDesire;
	let baseDmg = 0;
	let targetSkillRating = 1;
	let enemySkillLvl = 1;
	let targetDesire = 0;
	let targetSensitivity = 1;
	let enemyWeakness = 1;
	let staminaDmg = 0;
	let targetPassiveEffect = 1;
	
	if(sexAct == SEXACT_BLOWJOB) {
		baseDmg = BASEDMG_SEXACT_BLOWJOB;
		enemySkillLvl = this.blowjobLvl();
		targetSkillRating = target.blowjobSkillRating(); 
		targetDesire = (target.mouthDesire + targetCockDesire) / 2;
		targetSensitivity = target.mouthSensitivity();
		enemyWeakness = this.weaknessToBlowjob();
		staminaDmg = target.skillCost_karrynBlowjob(false);
		targetPassiveEffect = target.passiveBlowjobSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	}
	else if(sexAct == SEXACT_TITTYFUCK) {
		baseDmg = BASEDMG_SEXACT_TITTYFUCK;
		enemySkillLvl = this.tittyFuckLvl();
		targetSkillRating = target.tittyFuckSkillRating(); 
		targetDesire = (target.boobsDesire + targetCockDesire) / 2;
		targetSensitivity = (target.boobsSensitivity() + target.nipplesSensitivity()) / 2;
		enemyWeakness = this.weaknessToTittyFuck();
		staminaDmg = target.skillCost_karrynTittyFuck(false);
		targetPassiveEffect = target.passiveTittyFuckSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK);
	}
	else if(sexAct == SEXACT_PUSSYSEX) {
		baseDmg = BASEDMG_SEXACT_PUSSYSEX;
		enemySkillLvl = this.pussySexLvl();
		targetSkillRating = target.pussySexSkillRating(); 
		targetDesire = (target.pussyDesire + targetCockDesire) / 2;
		targetSensitivity = target.pussySensitivity();
		enemyWeakness = this.weaknessToPussy();
		staminaDmg = target.skillCost_karrynPussySex(false);
		targetPassiveEffect = target.passivePussySexSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX);
	}
	else if(sexAct == SEXACT_CUNNILINGUS) {
		baseDmg = BASEDMG_SEXACT_CUNNILINGUS;
		enemySkillLvl = this.kissLvl();
		targetSkillRating = 0; 
		targetDesire = target.pussyDesire;
		targetSensitivity = target.clitSensitivity();
		enemyWeakness = 0;
		staminaDmg = 0;
		target.increaseLiquidPussyJuice(enemySkillLvl);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_CUNNILINGUS);
	}
	else if(sexAct == SEXACT_ANALSEX) {
		baseDmg = BASEDMG_SEXACT_ANALSEX;
		enemySkillLvl = this.analSexLvl();
		targetSkillRating = target.analSexSkillRating(); 
		targetDesire = (target.buttDesire + targetCockDesire) / 2;
		targetSensitivity = target.analSensitivity();
		enemyWeakness = this.weaknessToAnal();
		staminaDmg = target.skillCost_karrynAnalSex(false);
		targetPassiveEffect = target.passiveAnalSexSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX);
	}
	else if(sexAct == SEXACT_RIMJOB) {
		baseDmg = BASEDMG_SEXACT_RIMJOB;
		enemySkillLvl = this.sadismLvl();
		targetSkillRating = target.rimjobSkillRating();
		targetDesire = target.mouthDesire;
		targetSensitivity = target.mouthSensitivity() * target.masochismSensitivity();
		enemyWeakness = this.weaknessToRimjob() + this.sadismLvl() * 0.1;
		staminaDmg = target.skillCost_karrynRimjob(false);
		targetPassiveEffect = target.passiveRimjobSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_SADISM);
	}
	else if(sexAct == SEXACT_FOOTJOB) {
		baseDmg = BASEDMG_SEXACT_FOOTJOB;
		enemySkillLvl = this.masochismLvl();
		targetSkillRating = target.footjobSkillRating(); 
		targetDesire = target.cockDesire;
		targetSensitivity = target.footSensitivity() * target.sadismSensitivity();
		enemyWeakness = this.weaknessToFootjob() + this.masochismLvl() * 0.1;
		staminaDmg = target.skillCost_karrynFootjob(false);
		targetPassiveEffect = target.passiveFootjobSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_MASOCHISM);
	}
	else if(sexAct == SEXACT_HANDJOB) {
		baseDmg = BASEDMG_SEXACT_HANDJOB;
		enemySkillLvl = this.handjobLvl();
		targetSkillRating = target.handjobSkillRating(); 
		targetDesire = targetCockDesire;
		targetSensitivity = target.fingerSensitivity();
		enemyWeakness = this.weaknessToHandjob();
		staminaDmg = target.skillCost_karrynHandjob(false);
		targetPassiveEffect = target.passiveHandjobSkillRate(this);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
		
		if(this.isUsingBodySlotPenis(RIGHT_HAND_ID))
			target._lastHandUsedForHandjob = RIGHT_HAND_ID;
		else if(this.isUsingBodySlotPenis(LEFT_HAND_ID))
			target._lastHandUsedForHandjob = LEFT_HAND_ID;
	}
	else console.log("Error dmgFormula basicSex sexAct: " + sexAct);
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetSexRate;
	let targetPleasureGain = (targetDesireGain + this.dex + this.enemyLvl() * 0.5) * (1 + enemySkillLvl * 0.1) * targetSensitivity;
	if(targetSexRate < 1) targetPleasureGain *= targetSexRate;
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetSexRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	let targetPleasureLowerCap = 0;
	if(targetDesire <= 100) {
		if(targetSexRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetSexRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((1 + (targetDesire - 100) * 0.005) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);
	
	let enemyPleasureFeedback = target.dex * 1.6 * targetSkillRating *  enemyWeakness * VAR_ENEMY_PLEASURE_FEEDBACK_REDUCER;
	enemyPleasureFeedback += Math.random() * enemyPleasureFeedback * 0.15;
	enemyPleasureFeedback *= target.secretaryStanceEnemyPleasureFeedbackRate(); 		
	let clothingDmg = ((this.dex + enemySkillLvl) * 2) * targetStripRate;
	
	if(target.hp > 0) {
		target.gainDexterityExp(30, this.enemyExperienceLvl());
		target.gainEnduranceExp(30, this.enemyExperienceLvl());
		clothingDmg = Math.max(clothingDmg * 0.33, clothingDmg - target.str);
		enemyPleasureFeedback *= targetPassiveEffect;
	}
	else {
		enemyPleasureFeedback = enemyPleasureFeedback / 2;
	}
	
	if(!this.isStateAffected(STATE_JUST_JOINED_ID)) {
		let minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_DIVIDE;
		if(target.isInDefeatedPose()) minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_DEFEATED_DIVIDE;
		else if(this.isBossType) minFeedbackDivider = VAR_MIN_PLEASURE_FEEDBACK_BOSS;
		let minFeedbackOriginalValue = this.orgasmPoint() / minFeedbackDivider;
		let minFeedbackValue = minFeedbackOriginalValue;
		minFeedbackValue *= target.secretaryStanceEnemyPleasureFeedbackRate(); 
		minFeedbackValue -= Math.random() * minFeedbackOriginalValue * 0.15;
		minFeedbackValue += Math.random() * minFeedbackOriginalValue * 0.15;
		enemyPleasureFeedback = Math.max(enemyPleasureFeedback, Math.round(minFeedbackValue));
	}

	if(this.isVisitorType) {
		clothingDmg = 0;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .5;
	result.desireRandomDamage = targetDesireGain * .5;
	result.desireCockWeight = 0;
	result.desireTarget = sexAct;
	result.staminaDamage = staminaDmg * 0.6;
	result.pleasureFeedback = enemyPleasureFeedback;
	result.clothingDamage = clothingDmg;
	
	if(targetPleasureGain > 0) {
		if(sexAct == SEXACT_BLOWJOB) target.addToActorMouthPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_TITTYFUCK) target.addToActorBoobsPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_PUSSYSEX) target.addToActorPussyPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_ANALSEX) target.addToActorAnalPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_HANDJOB) target.addToActorFingersPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_CUNNILINGUS) target.addToActorClitPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_FOOTJOB) target.addToActorSadismPleasureRecord(targetPleasureGain);
		else if(sexAct == SEXACT_RIMJOB) target.addToActorMasochismPleasureRecord(targetPleasureGain);
	}
	
	//target.emoteMasterManager();
	
	return 0;
};

///////////////////
// Ejaculation damage formula
//////////////////////

//30% of desire to cock, 70% to random area with a cock weight of 5
//Desire is also cock + area
Game_Enemy.prototype.dmgFormula_creampie = function(target, area) {
	let enemyCock = this.enemyCock();
	let multipler = 1;
	if(area == CUM_CREAMPIE_PUSSY) multipler = target.passivePussyCreampieEVMultipler(this);
	else if(area == CUM_CREAMPIE_ANAL) multipler = target.passiveAnalCreampieEVMultipler(this);
	let ejaculateVolume = this.ejaculationVolume(multipler);
	let targetSexRate = target.elementRate(ELEMENT_SEX_ID);
	let targetDesire = target.cockDesire / 2;
	let targetSensitivity = 0;
	let enemySkillLvl = this.semenLvl();
	
	if(area == CUM_CREAMPIE_PUSSY) {
		targetDesire += target.pussyDesire / 2;
		targetSensitivity = target.pussyCreampieSensitivity();
	}
	else if(area == CUM_CREAMPIE_ANAL) {
		targetDesire += target.buttDesire / 2;
		targetSensitivity = target.analCreampieSensitivity();
	}
	else console.log("Error dmgFormula creampie area: " + area);
	
	let targetDesireGain = (ejaculateVolume + enemySkillLvl) * targetSexRate;
	let targetPleasureGain = (ejaculateVolume * 1.5 + this.dex + this.enemyLvl() * 0.75) * targetSensitivity * (1 + enemySkillLvl * 0.1); 
	if(targetSexRate < 1) targetPleasureGain *= targetSexRate; 
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5); 
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetSexRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);

	if(targetDesire <= 100) {
		if(targetSexRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetSexRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((targetDesire * 0.01) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);
	
	let staminaDmg = 0;
	if(targetSexRate < 2) {
		staminaDmg = (this.str * 4 + ejaculateVolume * 10) - (target.str * 2);
		staminaDmg = staminaDmg * (2 - targetSexRate);
	}
	
	if(this.isStateAffected(STATE_PUSSY_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(PUSSY_ID))
		$gameTroop._lastEnemySlotToCum = PUSSY_ID;
	else if(this.isStateAffected(STATE_PUSSY_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(ANAL_ID))
		$gameTroop._lastEnemySlotToCum = ANAL_ID;
	else if(this.isStateAffected(STATE_TITTYFUCK_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(BOOBS_ID))
		$gameTroop._lastEnemySlotToCum = BOOBS_ID;
	else if(this.isStateAffected(STATE_RIGHTHAND_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(RIGHT_HAND_ID))
		$gameTroop._lastEnemySlotToCum = RIGHT_HAND_ID;
	else if(this.isStateAffected(STATE_LEFTHAND_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID))
		$gameTroop._lastEnemySlotToCum = LEFT_HAND_ID;
	else if(this.isStateAffected(STATE_ANAL_ENEMYPOSE_ID) || this.isStateAffected(STATE_RIMMING_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(MOUTH_ID) || this.isUsingBodySlotAnus(MOUTH_ID))
		$gameTroop._lastEnemySlotToCum = MOUTH_ID;
	else if(this.isUsingBodySlotPenis(CLIT_ID))
		$gameTroop._lastEnemySlotToCum = CLIT_ID;
	else if(this.isStateAffected(STATE_FOOTJOB_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(FEET_ID))
		$gameTroop._lastEnemySlotToCum = FEET_ID;
	else if(this.isUsingBodySlotPenis(OTHER_1_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_1_ID;
	else if(this.isUsingBodySlotPenis(OTHER_2_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_2_ID;
	else if(this.isUsingBodySlotPenis(OTHER_3_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_3_ID;
	else if(this.isUsingBodySlotPenis(OTHER_4_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_4_ID;
	else
		$gameTroop._lastEnemySlotToCum = -1;
	
	if($gameParty.isInGloryBattle) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			$gameTroop._gloryLastHoleToEjaculate = GLORY_LEFT_STALL_ID;
		else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			$gameTroop._gloryLastHoleToEjaculate = GLORY_RIGHT_STALL_ID;
		else
			$gameTroop._gloryLastHoleToEjaculate = -1;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .3;
	result.desireRandomDamage = targetDesireGain * .7;
	result.desireCockWeight = 5;
	result.staminaDamage = staminaDmg;
	result.ejaculateDamage = ejaculateVolume;
	
	let useMirrorCutin = false;
	if($gameParty.isInGloryBattle && this._guest_atStall === GLORY_RIGHT_STALL_ID)
		useMirrorCutin = true;
	else if(Karryn.isInReceptionistPose() && this.isGoblinType)
		useMirrorCutin = true;
	else if(Karryn.isInWerewolfBackPose() && (this.isUsingBodySlotPenis(PUSSY_ID) || this.isUsingBodySlotPenis(ANAL_ID)))
		useMirrorCutin = true;
	
	if(area == CUM_CREAMPIE_PUSSY) {
		result.ejaculatePussy = ejaculateVolume;
		if(targetPleasureGain > 0) target.addToActorPussyCreampiePleasureRecord(targetPleasureGain);
		this.addToEnemyPussyCreampieCountRecord(target);
		if(enemyCock == 'green') {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GREEN_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME);
		}
		else if(enemyCock == 'red') {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_RED_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_RED_NAME);
		}
		else if(enemyCock == 'slime') {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME);
		}
		else {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_PUSSYCREAMPIE_NAME);
		}
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	}
	else if(area == CUM_CREAMPIE_ANAL) {
		result.ejaculateAnal = ejaculateVolume;
		if(targetPleasureGain > 0) target.addToActorAnalCreampiePleasureRecord(targetPleasureGain);
		this.addToEnemyAnalCreampieCountRecord(target);
		if(enemyCock == 'green') {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GREEN_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME);
		}
		else if(enemyCock == 'red') {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_RED_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_RED_NAME);
		}
		else if(enemyCock == 'slime') {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME);
		}
		else {
			if(useMirrorCutin)
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_NAME);
			else
				target.setTachieCutIn(CUTIN_EJACULATE_ANALCREAMPIE_NAME);
		}
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	}

	target.gainCharmExp(12, this.enemyExperienceLvl());
	target.gainEnduranceExp(35, this.enemyExperienceLvl());
	
	//target.emoteMasterManager();
	
	return 0;
};

//30% of desire to cock, 70% to random area with a cock weight of 4
//Desire is also cock + area
Game_Enemy.prototype.dmgFormula_swallow = function(target, area) {
	let ejaculateVolume = this.ejaculationVolume(target.passiveSwallowEVMultipler(this));
	let targetSexRate = target.elementRate(ELEMENT_SEX_ID);
	let targetDesire = (target.cockDesire + target.mouthDesire) / 2;
	let targetSensitivity = target.swallowSensitivity();
	let enemySkillLvl = this.semenLvl();
	
	let targetDesireGain = (ejaculateVolume + enemySkillLvl) * targetSexRate;
	let targetPleasureGain = (ejaculateVolume * 1.5 + this.dex + this.enemyLvl() * 0.75) * targetSensitivity * (1 + enemySkillLvl * 0.1);
	if(targetSexRate < 1) targetPleasureGain *= targetSexRate;
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetSexRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	if(targetDesire <= 100) {
		if(targetSexRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetSexRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((targetDesire * 0.01) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);
	
	let staminaDmg = 0;
	if(targetSexRate < 2) {
		staminaDmg = (this.str * 4 + ejaculateVolume * 10) - (target.str * 2);
		staminaDmg = staminaDmg * (2 - targetSexRate);
	}
	
	if(this.isStateAffected(STATE_PUSSY_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(PUSSY_ID))
		$gameTroop._lastEnemySlotToCum = PUSSY_ID;
	else if(this.isStateAffected(STATE_PUSSY_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(ANAL_ID))
		$gameTroop._lastEnemySlotToCum = ANAL_ID;
	else if(this.isStateAffected(STATE_TITTYFUCK_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(BOOBS_ID))
		$gameTroop._lastEnemySlotToCum = BOOBS_ID;
	else if(this.isStateAffected(STATE_RIGHTHAND_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(RIGHT_HAND_ID))
		$gameTroop._lastEnemySlotToCum = RIGHT_HAND_ID;
	else if(this.isStateAffected(STATE_LEFTHAND_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID))
		$gameTroop._lastEnemySlotToCum = LEFT_HAND_ID;
	else if(this.isStateAffected(STATE_ANAL_ENEMYPOSE_ID) || this.isStateAffected(STATE_RIMMING_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(MOUTH_ID) || this.isUsingBodySlotAnus(MOUTH_ID))
		$gameTroop._lastEnemySlotToCum = MOUTH_ID;
	else if(this.isUsingBodySlotPenis(CLIT_ID))
		$gameTroop._lastEnemySlotToCum = CLIT_ID;
	else if(this.isStateAffected(STATE_FOOTJOB_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(FEET_ID))
		$gameTroop._lastEnemySlotToCum = FEET_ID;
	else if(this.isUsingBodySlotPenis(OTHER_1_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_1_ID;
	else if(this.isUsingBodySlotPenis(OTHER_2_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_2_ID;
	else if(this.isUsingBodySlotPenis(OTHER_3_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_3_ID;
	else if(this.isUsingBodySlotPenis(OTHER_4_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_4_ID;
	else
		$gameTroop._lastEnemySlotToCum = -1;
	
	if($gameParty.isInGloryBattle) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			$gameTroop._gloryLastHoleToEjaculate = GLORY_LEFT_STALL_ID;
		else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			$gameTroop._gloryLastHoleToEjaculate = GLORY_RIGHT_STALL_ID;
		else
			$gameTroop._gloryLastHoleToEjaculate = -1;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .3;
	result.desireRandomDamage = targetDesireGain * .7;
	result.desireCockWeight = 4;
	result.staminaDamage = staminaDmg;
	result.ejaculateDamage = ejaculateVolume;
	result.ejaculateMouth = ejaculateVolume;
	
	if(targetPleasureGain > 0) target.addToActorSwallowPleasureRecord(targetPleasureGain);
	this.addToEnemySwallowCountRecord(target);

	if($gameParty.isInGloryBattle) { }
	else {
		target.setTachieCutIn(CUTIN_EJACULATE_MOUTH_NAME);
	}
	target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	
	target.gainCharmExp(12, this.enemyExperienceLvl());
	target.gainDexterityExp(20, this.enemyExperienceLvl());
	target.gainEnduranceExp(20, this.enemyExperienceLvl());
	
	//target.emoteMasterManager();
	
	return 0;
};


//30% of desire to cock, 70% to random area with a cock weight of 3
Game_Enemy.prototype.dmgFormula_bukkake = function(target, area) {
	let enemyCock = this.enemyCock();
	let ejaculateVolume = this.ejaculationVolume(target.passiveBukkakeEVMultipler(this));
	let targetSexRate = target.elementRate(ELEMENT_SEX_ID);
	let targetDesire = target.cockDesire;
	let targetSensitivity = target.bukkakeSensitivity();
	let enemySkillLvl = this.semenLvl();

	let targetDesireGain = (ejaculateVolume + enemySkillLvl) * targetSexRate;
	let targetPleasureGain = (ejaculateVolume * 1.5 + this.dex + this.enemyLvl() * 0.75) * targetSensitivity * (1 + enemySkillLvl * 0.1);
	if(targetSexRate < 1) targetPleasureGain *= targetSexRate;
	if(target.end > this.dex) targetPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetSexRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	if(targetDesire <= 100) {
		if(targetSexRate < 1) 
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity * targetSexRate);
		else
			targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(targetDesire * 0.01 * targetSensitivity);
	}
	else 
		targetPleasureLowerCap = target.getValueOfOrgasmFromPercent(((targetDesire * 0.01) ** 2) * targetSensitivity);
	targetPleasureGain = Math.max(targetPleasureGain, targetPleasureLowerCap);

	if(this.isStateAffected(STATE_PUSSY_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(PUSSY_ID))
		$gameTroop._lastEnemySlotToCum = PUSSY_ID;
	else if(this.isStateAffected(STATE_PUSSY_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(ANAL_ID))
		$gameTroop._lastEnemySlotToCum = ANAL_ID;
	else if(this.isStateAffected(STATE_TITTYFUCK_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(BOOBS_ID))
		$gameTroop._lastEnemySlotToCum = BOOBS_ID;
	else if(this.isStateAffected(STATE_RIGHTHAND_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(RIGHT_HAND_ID))
		$gameTroop._lastEnemySlotToCum = RIGHT_HAND_ID;
	else if(this.isStateAffected(STATE_LEFTHAND_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID))
		$gameTroop._lastEnemySlotToCum = LEFT_HAND_ID;
	else if(this.isStateAffected(STATE_ANAL_ENEMYPOSE_ID) || this.isStateAffected(STATE_RIMMING_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(MOUTH_ID) || this.isUsingBodySlotAnus(MOUTH_ID))
		$gameTroop._lastEnemySlotToCum = MOUTH_ID;
	else if(this.isUsingBodySlotPenis(CLIT_ID))
		$gameTroop._lastEnemySlotToCum = CLIT_ID;
	else if(this.isStateAffected(STATE_FOOTJOB_ENEMYPOSE_ID) || this.isUsingBodySlotPenis(FEET_ID))
		$gameTroop._lastEnemySlotToCum = FEET_ID;
	else if(this.isUsingBodySlotPenis(OTHER_1_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_1_ID;
	else if(this.isUsingBodySlotPenis(OTHER_2_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_2_ID;
	else if(this.isUsingBodySlotPenis(OTHER_3_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_3_ID;
	else if(this.isUsingBodySlotPenis(OTHER_4_ID))
		$gameTroop._lastEnemySlotToCum = OTHER_4_ID;
	else
		$gameTroop._lastEnemySlotToCum = -1;
	
	if($gameParty.isInGloryBattle) {
		if(this._guest_atStall === GLORY_LEFT_STALL_ID)
			$gameTroop._gloryLastHoleToEjaculate = GLORY_LEFT_STALL_ID;
		else if(this._guest_atStall === GLORY_RIGHT_STALL_ID)
			$gameTroop._gloryLastHoleToEjaculate = GLORY_RIGHT_STALL_ID;
		else
			$gameTroop._gloryLastHoleToEjaculate = -1;
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .3;
	result.desireRandomDamage = targetDesireGain * .7;
	result.desireCockWeight = 3;
	result.ejaculateDamage = ejaculateVolume;
	
	if(area == CUM_BUKKAKE_FACE) {
		result.bukkakeFace = ejaculateVolume;
		targetSensitivity *= (target.mouthSensitivity() / 2);
	}
	else if(area == CUM_BUKKAKE_LEFTARM) {
		result.bukkakeLeftArm = ejaculateVolume;
	}
	else if(area == CUM_BUKKAKE_RIGHTARM) {
		result.bukkakeRightArm = ejaculateVolume;
	}
	else if(area == CUM_BUKKAKE_LEFTLEG) {
		result.bukkakeLeftLeg = ejaculateVolume;
	}
	else if(area == CUM_BUKKAKE_RIGHTLEG) {
		result.bukkakeRightLeg = ejaculateVolume;
	}
	else if(area == CUM_BUKKAKE_BOOBS) {
		result.bukkakeBoobs = ejaculateVolume;
		targetSensitivity *= target.boobsSensitivity();
	}
	else if(area == CUM_BUKKAKE_BUTT || area == CUM_BUKKAKE_BUTT_TOPRIGHT || area == CUM_BUKKAKE_BUTT_TOPLEFT || area == CUM_BUKKAKE_BUTT_BOTTOMRIGHT || area == CUM_BUKKAKE_BUTT_BOTTOMLEFT) {
		result.bukkakeButt = ejaculateVolume;
		targetSensitivity *= target.buttSensitivity();
	}
	else if(area == CUM_INTO_MUG) {
		targetPleasureGain = 0;
		result.pleasureDamage = 0;
		result.desireCockWeight = 5;
	}
	else if(area == CUM_ONTO_DESK) {
		targetPleasureGain = 0;
		result.pleasureDamage = 0;
		result.desireCockWeight = 5;
	}
	else if(area == CUM_ONTO_FLOOR) {
		targetPleasureGain = 0;
		result.pleasureDamage = 0;
		result.desireCockWeight = 5;
	}
	
	if(area != CUM_INTO_MUG && area != CUM_ONTO_DESK && area != CUM_ONTO_FLOOR)
		target.gainCharmExp(13, this.enemyExperienceLvl());
	
	if(targetPleasureGain > 0) 
		target.addToActorBukkakePleasureRecord(targetPleasureGain);
	
	let useMirrorCutin = false;
	if($gameParty.isInGloryBattle && this._guest_atStall === GLORY_RIGHT_STALL_ID)
		useMirrorCutin = true;
	else if(Karryn.isInReceptionistPose() && this.isGoblinType)
		useMirrorCutin = true;
	else if(Karryn.isInWerewolfBackPose() && (this.isUsingBodySlotPenis(PUSSY_ID) || this.isUsingBodySlotPenis(ANAL_ID)))
		useMirrorCutin = true;
	
	if(enemyCock == 'green') {
		if(useMirrorCutin)
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_MIRROR_GREEN_NAME);
		else
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_GREEN_NAME);
	}
	else if(enemyCock == 'slime') {
		if(useMirrorCutin)
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NAME);
		else
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_SLIME_NAME);
	}
	else if(enemyCock == 'red') {
		if(useMirrorCutin)
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_MIRROR_RED_NAME);
		else
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_RED_NAME);
	}
	else {
		if(useMirrorCutin)
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_MIRROR_NAME);
		else
			target.setTachieCutIn(CUTIN_EJACULATE_BUKKAKE_NAME);
	}
	
	if(area != CUM_INTO_MUG && area != CUM_ONTO_DESK && area != CUM_ONTO_FLOOR) {
		this.addToEnemyBukkakeCountRecord(target);
		if(area == CUM_BUKKAKE_FACE)
			this.addToEnemyFaceBukkakeCountRecord(target);
		target.justGotHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	}
	else if(area == CUM_INTO_MUG) {
		if(target.tachieStraw !== REM_TACHIE_NULL)
			target.updateTachieStraw();
	}
	
	//target.emoteMasterManager();
	
	return 0;
};

///////////////
/////////////////////
// Post Damage Formulas
////////////////////
//////////////////

////////////////
// Post Damage Ejaculations
///////////////////////

Game_Enemy.prototype.postDamage_bukkake = function(target, area) {
	let result = target.result();
	let ejaculateVolume = result.ejaculateDamage;
	let semen = ejaculateVolume;
	this.gainMp(-ejaculateVolume);
	if(this.mp > 0 && target.passivePostBukkakeBonusEjaculationStock()) this._ejaculationStock++;
	this.postOrgasmPleasure();
	
	if(area == CUM_BUKKAKE_FACE) {
		semen = result.bukkakeFace;
		target.increaseLiquidBukkakeFace(semen);
		target.addToActorBukkakeFaceMLRecord(semen);
	}
	else if(area == CUM_BUKKAKE_RIGHTARM) {
		semen = result.bukkakeRightArm;
		target.increaseLiquidBukkakeRightArm(semen);
		target.addToActorBukkakeArmsMLRecord(semen);
	}
	else if(area == CUM_BUKKAKE_LEFTARM) {
		semen = result.bukkakeLeftArm;
		target.increaseLiquidBukkakeLeftArm(semen);
		target.addToActorBukkakeLegsMLRecord(semen);
	}
	
	else if(area == CUM_BUKKAKE_RIGHTLEG) {
		semen = result.bukkakeRightLeg;
		target.increaseLiquidBukkakeRightLeg(semen);
		target.addToActorBukkakeLegsMLRecord(semen);
	}
	else if(area == CUM_BUKKAKE_LEFTLEG) {
		semen = result.bukkakeLeftLeg;
		target.increaseLiquidBukkakeLeftLeg(semen);
		target.addToActorBukkakeArmsMLRecord(semen);
	}
	
	else if(area == CUM_BUKKAKE_BOOBS) {
		semen = result.bukkakeBoobs;
		target.increaseLiquidBukkakeBoobs(semen);
		target.addToActorBukkakeBoobsMLRecord(semen);
	}
	else if(area == CUM_BUKKAKE_BUTT) {
		semen = result.bukkakeButt;
		if(Karryn.isInDefeatedLevel4Pose()) {
			let runoff = 0
			if(Math.random() < 0.25) runoff = Math.round(Math.randomInt(semen * 0.15));

			if(this.isUsingBodySlotPenis(OTHER_1_ID))
				target.increaseLiquidBukkakeButtLeft(Math.max(1,semen - runoff));
			else if(this.isUsingBodySlotPenis(OTHER_2_ID))
				target.increaseLiquidBukkakeButtRight(Math.max(1,semen - runoff));
			else if(Math.random() < 0.5) 
				target.increaseLiquidBukkakeButtLeft(Math.max(1,semen - runoff));
			else
				target.increaseLiquidBukkakeButtRight(Math.max(1,semen - runoff));
			
			target.increaseLiquidBukkakeButt(runoff);
		}
		else {
			target.increaseLiquidBukkakeButt(semen);
		}
		target.addToActorBukkakeButtMLRecord(semen);

		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	
	else if(area == CUM_BUKKAKE_BUTT_TOPRIGHT) {
		semen = result.bukkakeButt;
		let runoff = 0
		if(Math.random() < 0.2) runoff = Math.round(Math.randomInt(semen * 0.15));
		target.increaseLiquidBukkakeButtTopRight(Math.max(1,semen - runoff));
		target.increaseLiquidBukkakeButt(runoff);
		target.addToActorBukkakeButtMLRecord(semen);
		
		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	else if(area == CUM_BUKKAKE_BUTT_TOPLEFT) {
		semen = result.bukkakeButt;
		let runoff = 0
		if(Math.random() < 0.2) runoff = Math.round(Math.randomInt(semen * 0.15));
		target.increaseLiquidBukkakeButtTopLeft(Math.max(1,semen - runoff));
		if(runoff > 0) {
			if(Math.random() < 0.33) {
				target.increaseLiquidBukkakeFace(runoff);
			}
			else if(Math.random() < 0.66) {
				target.increaseLiquidBukkakeBoobs(runoff);
			}
			else {
				target.increaseLiquidBukkakeLeftArm(runoff);
			}
		}
		target.addToActorBukkakeButtMLRecord(semen);
		
		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	else if(area == CUM_BUKKAKE_BUTT_BOTTOMRIGHT) {
		semen = result.bukkakeButt;
		target.increaseLiquidBukkakeButtBottomRight(semen);
		target.addToActorBukkakeButtMLRecord(semen);
		
		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	else if(area == CUM_BUKKAKE_BUTT_BOTTOMLEFT) {
		semen = result.bukkakeButt;
		target.increaseLiquidBukkakeButtBottomLeft(semen);
		target.addToActorBukkakeButtMLRecord(semen);
		
		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	else if(area == CUM_ONTO_DESK) {
		target.increaseLiquidOnDesk(semen);
	}
	else if(area == CUM_ONTO_FLOOR) {
		target.increaseLiquidOnFloor(semen);
		target.addToActorFloorEjaculationMLRecord(semen);
		
		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	
	
	if(target.isInWaitressSexPose()) {
		semen = result.ejaculateDamage;
		target.postDamage_ejaculation_waitressSex(this, area, semen);
	}
	else if($gameParty.isInGloryBattle) {
		target.postDamage_ejaculation_gloryBattle(this, area, semen);
	}
	else if(target.isInReceptionistPose()) {
		target.postDamage_ejaculation_receptionistBattle(this, area, semen);
	}
	
	//target.emoteMasterManager();
	
	if($gameParty.isInGloryBattle) {
		if(this.isUsingBodySlotPenis(PUSSY_ID) || this.isUsingBodySlotPenis(ANAL_ID)) {
			BattleManager.pullOutEnemy(this);
		}
		if(this.isUsingBodySlotPenis(MOUTH_ID) && Karryn.getReactionScore() < VAR_DEF_RS_LV3_REQ) {
			BattleManager.pullOutEnemy(this);
		}
		if(this.isUsingBodySlotPenis(RIGHT_HAND_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID)) {
			if(Karryn.getReactionScore() < VAR_DEF_RS_LV2_REQ) { 
				BattleManager.pullOutEnemy(this);
			}
		}
	}
	else if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
		
	}
	else if(this.isPoseMaster()) {
		if(!BattleManager.swappedPoseMaster(this))
			BattleManager.pullOutAllEnemies();
	}
	else {
		BattleManager.pullOutEnemy(this);
	}
};

Game_Enemy.prototype.postDamage_swallow = function(target, area) {
	let result = target.result();
	let ejaculateVolume = result.ejaculateDamage;
	this.gainMp(-ejaculateVolume);
	if(this.mp > 0 && target.passivePostSwallowBonusEjaculationStock()) this._ejaculationStock++;
	this.postOrgasmPleasure();

	let semen = result.ejaculateMouth;
	
	if(target.isInWaitressSexPose()) {
		semen = target.postDamage_ejaculation_waitressSex(this, area, semen);
	}
	else if($gameParty.isInGloryBattle) {
		target.postDamage_ejaculation_gloryBattle(this, area, semen);
	}
	else if(target.isInReceptionistPose()) {
		target.postDamage_ejaculation_receptionistBattle(this, area, semen);
	}
	
	target.increaseLiquidSwallow(semen);
	target.addToActorSwallowMLRecord(semen);
	//target.emoteMasterManager();
	
	let conversion = target.convertSwallowToEnergy(semen);
	if(target.energy > 0 && conversion > 0) target.gainMp(conversion);
	
	if($gameParty.isInGloryBattle) {
		if(Karryn.getReactionScore() >= VAR_DEF_RS_LV3_REQ) { }
		else if(Karryn.getReactionScore() >= VAR_DEF_RS_LV2_REQ) { 
			this.checkIfStillErectedWhileInPose();
		}
		else {
			BattleManager.pullOutEnemy(this);
		}
	}
	else {
		this.checkIfStillErectedWhileInPose();
	}
};

Game_Enemy.prototype.postDamage_creampie = function(target, area) {
	let result = target.result();
	let ejaculateVolume = result.ejaculateDamage;
	let semen = 0;
	
	this.gainMp(-ejaculateVolume);
	this.postOrgasmPleasure();

	if(area == CUM_CREAMPIE_PUSSY) {
		semen = result.ejaculatePussy;
		target.increaseLiquidCreampiePussy(semen);
		target.addToActorPussyCreampieMLRecord(semen);
		let conversion = target.convertPussyCreampieToEnergy(semen);
		if(target.energy > 0 && conversion > 0) target.gainMp(conversion);
	}
	else if(area == CUM_CREAMPIE_ANAL) {
		semen = result.ejaculateAnal;
		target.increaseLiquidCreampieAnal(semen);
		target.addToActorAnalCreampieMLRecord(semen);
		let conversion = target.convertAnalCreampieToEnergy(semen);
		if(target.energy > 0 && conversion > 0) target.gainMp(conversion);
		
		if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
			this._ejaculationStock--;
			this._ejaculationCount++;
			this.setPleasureToArousalPoint();
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
		}
	}
	
	if(target.isInWaitressSexPose()) {
		target.postDamage_ejaculation_waitressSex(this, area, semen);
	}
	else if($gameParty.isInGloryBattle) {
		target.postDamage_ejaculation_gloryBattle(this, area, semen);
	}
	else if(target.isInReceptionistPose()) {
		target.postDamage_ejaculation_receptionistBattle(this, area, semen);
	}
	
	//target.emoteMasterManager();
	
	if($gameParty.isInGloryBattle) {
		this.checkIfStillErectedWhileInPose();
	}
	else {
		this.checkIfStillErectedWhileInPose();
	}
};

/////////////
// Before Eval Ejaculation

Game_Enemy.prototype.beforeEval_ejaculation = function(target, area) {
	if(!this.isStateAffected(STATE_BEFOREEVAL_EJA_COUNTED_ID)) {
		if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_KISSING)) {
			target._playthroughRecordEjaculatedWithKarrynKissCount++;
		}
		if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB)) {
			if(target.isBodySlotInserted(LEFT_HAND_ID) && target.isBodySlotInserted(RIGHT_HAND_ID)) {
				target._playthroughRecordEjaculatedWithKarrynDoubleHandjobCount++;
			}
		}
		
		this.addState(STATE_BEFOREEVAL_EJA_COUNTED_ID);
	}
};