var Remtairy = Remtairy || {};
Remtairy.EnemyAI = Remtairy.EnemyAI || {};

//=============================================================================
 /*:
 * @plugindesc Enemy AI
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const VAR_ENEMYAI_TRY_START_SEX_ATTEMPTS = 4;
const VAR_ENEMYAI_TRY_JOIN_SEX_ATTEMPTS = 6;
const VAR_ENEMYAI_TRY_PETTING_ATTEMPTS = 10;
const VAR_ENEMYAI_TRY_PETTING_HORNY_ATTEMPTS = 25;
const VAR_ENEMYAI_TRY_PETTING_METAL_ATTEMPTS = 8;
const VAR_ENEMYAI_METAL_TURNLIMIT = 5;

/////////
///////////
// Game Enemy
/////////////
///////////

////////////
// AI Code Overall
//////////////////

//Generic battle ai
Game_Enemy.prototype.enemyBattleAIGeneric = function() {
	let target = BattleManager._targets[0];
	this._lastAITarget = BattleManager._targets[0];
	
	this._enemyTurnCount++;
	
	//console.log('enemyBattleAIGeneric');
	
	//console.log(this.name());
	//console.log(BattleManager._subject);
	//console.log(BattleManager._targets[0]);
	
	if(this.usedSkillThisTurn() || this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID))
		return;
	
	//Special AI
	if(target.isInWaitressServingPose()) {
		this.enemyBattleAIWaitressServing(target);
		return;
	}	
	if(target.isInWaitressSexPose()) {
		this.enemyBattleAIWaitressSex(target);
		return;
	}	
	
	if(target.isInReceptionistPose()) {
		this.enemyBattleAIReceptionist(target);
		return;
	}	
	
	if($gameParty.isInGloryBattle) {
		this.enemyBattleAIGloryHole(target);
		return;
	}	
	
	if(target.isInDefeatedLevel1Pose()) {
		this.enemyBattleAIDefeatedLevel1(target);
		return;
	}
	if(target.isInDefeatedLevel2Pose()) {
		this.enemyBattleAIDefeatedLevel2(target);
		return;
	}
	if(target.isInDefeatedGuardPose()) {
		this.enemyBattleAIDefeatedGuard(target);
		return;
	}
	
	if(this.hasMetalPrefix()) {
		this.enemyMetalBattleAI(target);
		return;
	}
	
	//Special Actions
	if(this.specialEnemyBattleAIAction(target)) return;
	
	//Charge takes priority above everything else
	if(this.isChargedUp()) {
		if(this.chargeAIAttack(target)) return;
	}
	
	if(!DEBUG_MODE) {
		this.genericBattleAIAttack(target);
		return;
	}
	
	//this.checkIfStillErectedWhileInPose();
	
	//First step: check if I'm already in a pose
	if(this.isInAPose()) {
		//If I'm close to an orgasm, focus on my pose skill
		//todo: Some sort of condition to switch to a new sex pose
		let ranChanceFactor = 60;
		if(this.isHorny)
			ranChanceFactor -= 40;
		if(this.hasVirginPrefix())
			ranChanceFactor -= 40;
		if(target.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID))
			ranChanceFactor -= 30;
		if(this.isStateAffected(STATE_CUNNI_ENEMYPOSE_ID)) ranChanceFactor -= 100;
		if(Math.randomInt(ranChanceFactor) < this.currentPercentOfOrgasm(true)) {
			if(this.usePoseSkill(target))
				return;
		}
		//Nothing else to do, Petting-Talk-Sight
		this.genericPettingTalkSight(target);
		return;
	}
	//If Karryn is in a sex pose, I will not attack her
	if(target.isInSexPose()) {
		let ranChanceFactor = 80;
		if(this.isHorny)
			ranChanceFactor -= 50;
		if(this.hasVirginPrefix())
			ranChanceFactor -= 40;
		if(target.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID))
			ranChanceFactor -= 40;
		//Am I erect, if so, I want to be in a sex pose
		if(this.isErect && Math.randomInt(ranChanceFactor) < Math.min(this.currentPercentOfArousal(true),95)) {
			//Can I join the current pose if Karryn is in one?
			if(this.tryJoinSexPose(target, VAR_ENEMYAI_TRY_JOIN_SEX_ATTEMPTS)) return;
			//Todo: Can I start a new sex pose instead?
			//if(this.tryStartSexPose(target,1)) return;
		}
		//Nothing else to do, Petting-Talk-Sight
		if(this.isHorny) 
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_HORNY_ATTEMPTS);
		else
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_ATTEMPTS);
		return;
	}
	//Karryn is not in a sex pose
	else {
		let ranChanceFactor = 100;
		if(this.isHorny)
			ranChanceFactor += 80;
		if(this.hasVirginPrefix())
			ranChanceFactor += 80;
		if(target.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID))
			ranChanceFactor += 80;
		let wantSex = (Math.randomInt(ranChanceFactor)) > (this.anger() - this.currentPercentOfOrgasm(true));
		
		if(this.isHorny && !this.isAngry) 
			wantSex = true;

		//If I don't want to have sex, and Karryn is currently attackable
		if(!wantSex && target.isAttackable()) {
			this.genericBattleAIAttack(target);
			return;
		}
		//If I want sex and I'm erect, can I start a sex pose?
		else if(wantSex && this.isErect) {
			if(this.tryStartSexPose(target, VAR_ENEMYAI_TRY_START_SEX_ATTEMPTS)) return;
		}
		//Nothing else to do, Petting-Talk-Sight
		if(this.isHorny) 
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_HORNY_ATTEMPTS);
		else
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_ATTEMPTS);
		return;
	}
};

//Tutorial battle ai
Game_Enemy.prototype.enemyBattleAITutorial = function() {
	if(!$gameTemp._tutorialTurn) $gameTemp._tutorialTurn = 1;
	let target = BattleManager._targets[0];
	this._lastAITarget = BattleManager._targets[0];
	let turnCount = $gameTemp._tutorialTurn;
	let arousalPoint = this.arousalPoint();
	let thirdToPoint = Math.ceil(arousalPoint * 0.35);
	
	if(turnCount === 1 || turnCount === 2) {
		this.useAISkill(SKILL_ENEMY_CLOTHES_PULL_ID,target);
		this.setPleasure(this.pleasure + thirdToPoint);
		target.gainBoobsDesire(20);
	}
	else if(turnCount === 3) {
		this.useAISkill(SKILL_ENEMY_PETTING_BOOBS_ID,target);
		this.setPleasure(arousalPoint + thirdToPoint);
	}
	else {
		if(target.slutLvl <= 1) {
			let boobsDesire = target.boobsDesire;
			if(boobsDesire >= 40 && turnCount % 2 === 1) 
				this.useAISkill(SKILL_ENEMY_PETTING_BOOBS_ID,target);
			else {
				this.useAISkill(SKILL_ENEMY_STARE_SKILL_BOOBS_ID,target);
				target.gainBoobsDesire(15);
			}
		}
	}
	
	$gameTemp._tutorialTurn++;
};

//Metal AI
Game_Enemy.prototype.enemyMetalBattleAI = function(target) {
	if(this._enemyTurnCount >= VAR_ENEMYAI_METAL_TURNLIMIT && !this.isInAPose()) {
		this.useAISkill(SKILL_ESCAPE_ID,target);
	}
	
	if(this.isInAPose()) {
		let ranChanceFactor = 80;
		if(this.isHorny)
			ranChanceFactor -= 40;
		if(target.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID))
			ranChanceFactor -= 30;
		if(this.isStateAffected(STATE_CUNNI_ENEMYPOSE_ID)) ranChanceFactor -= 100;
		
		if(Math.randomInt(ranChanceFactor) < this.currentPercentOfOrgasm(true)) {
			if(this.usePoseSkill(target))
				return;
		}
	}
	
	if(target.isInSexPose()) {
		this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_METAL_ATTEMPTS);
		return;
	}
	else {
		if(this.isChargedUp()) {
			if(this.chargeAIAttack(target)) return;
		}
		
		let ranChanceFactor = 60;
		if(this.isHorny)
			ranChanceFactor += 60;
		if(target.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID))
			ranChanceFactor += 60;
		
		let wontAttack = (Math.randomInt(ranChanceFactor)) > (this.anger() - this.currentPercentOfOrgasm(true));
		
		if(wontAttack) {
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_METAL_ATTEMPTS);
		}
		else {
			this.genericBattleAIAttack(target);
		}
		return;
	}
	
};

//Waitress Sex AI
Game_Enemy.prototype.enemyBattleAIWaitressSex = function(target) {
	this._lastAITarget = BattleManager._targets[0];
	let canStillCum = this._ejaculationStock > 0;
	
	if(this.usedSkillThisTurn())
		return;
	
	if(this.waitressSex_refillWaitressMug(target)) return;
	if(this.waitressSex_dumpWaitressMug(target)) return;
	
	if(this.isInAPose()) {
		if(this.usePoseSkill(target))
			return;
	}
	
	if(canStillCum) {
		
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_PUSSY_ID], target)) {
			BattleManager.pullOutEnemy(this);
			this.useAISkill(SKILL_ENEMY_POSEJOIN_PUSSY_ID,target);
			return;
		}
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_ANAL_ID], target)) {
			BattleManager.pullOutEnemy(this);
			this.useAISkill(SKILL_ENEMY_POSEJOIN_ANAL_ID,target);
			return;
		}

		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_MOUTH_ID], target)) {
			BattleManager.pullOutEnemy(this);
			if(target._cockFrontATarget) {
				BattleManager.pullOutEnemy(target._cockFrontATarget);
			}
			this.useAISkill(SKILL_ENEMY_POSEJOIN_MOUTH_ID,target);
			return;
		}
		
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_RIGHT_HAND_ID], target)) {
			BattleManager.pullOutEnemy(this);
			this.useAISkill(SKILL_ENEMY_POSEJOIN_RIGHT_HAND_ID,target);
			return;
		}
		
		if(!target.blowjobPoseSkillsIsEnabled() && this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_BARSEX_OTHER1_ID], target)) {
			BattleManager.pullOutEnemy(this);
			this.useAISkill(SKILL_ENEMY_POSEJOIN_BARSEX_OTHER1_ID,target);
			return;
		}
		
		//didn't join anything
		if(Math.random() < 0.3)
			this.genericPettingTalkSight(target);
		else if(Math.random() < 0.3)
			this.genericBattleAITalkSight(target);
		
	}
	//Have no stock left
	else {
		if(Math.random() < 0.1)
			this.genericPettingTalkSight(target);
		else if(Math.random() < 0.2)
			this.genericBattleAITalkSight(target);
	}
};


//Defeated Level 1 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel1 = function(target) {
	this._lastAITarget = BattleManager._targets[0];
	
	if(this.usedSkillThisTurn())
		return;
	
	//First: Check if using mouth
	if(this.isUsingBodySlotPenis(MOUTH_ID)) {
		if(this.usePoseSkill(target))
			return;
	}
	//Second: Check if mouth is being used
	if(this.canInsertMouth(target)) {
		BattleManager.pullOutEnemy(this);
		this.useAISkill(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_MOUTH_ID,target);
		return;
	}
	//Third: Check if using right hand or left hand
	if(this.isUsingBodySlotPenis(RIGHT_HAND_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID)) {
		if(Math.random() * 100 < this.currentPercentOfOrgasm(true)) {
			if(this.usePoseSkill(target))
				return;
		}
		this.genericPettingTalkSight(target);
		return;
	}
	else {
	//Fourth: Check if right hand or left hand is free
		if(this.canInsertRightHand(target)) {
			BattleManager.pullOutEnemy(this);
			this.useAISkill(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_RIGHT_HJ_ID,target);
			return;
		}
		else if(this.canInsertLeftHand(target)) {
			BattleManager.pullOutEnemy(this);
			this.useAISkill(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_LEFT_HJ_ID,target);
			return;
		}
	}
	//Fifth: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID)) {
		this.defeatedLevel1_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER1_ID);
		if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER2_ID);
		if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER3_ID);
		if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER4_ID);
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
};

//Defeated Level 2 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel2 = function(target) {
	this._lastAITarget = BattleManager._targets[0];
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	
	if(this.usedSkillThisTurn())
		return;
	
	//First: Check if using holes
	if(isUsingPussy || isUsingAnal) {
		let array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(isUsingAnal || (isUsingPussy && !isUsingAnal)) {
			if(!this._aiPettingSkills) {}
			else {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_KISS_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_KISS_ID);
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			}
			for(let i = 0; i < this.sadismLvl(); ++i)
				array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return true;
			}
		}
	}
	//Second: Check if holes can be inserted
	else if((this.canInsertPussy(target) && this.weaknessToPussy() >= 1) || (this.canInsertAnal(target) && this.weaknessToAnal() >= 1)) {
		BattleManager.pullOutEnemy(this);
		
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_ANAL_ID);
		
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		this.useAISkill(skillId,target);
		this.setUsedSkillThisTurn(true);
		return;
	}
	
	//Third: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID)) {
		this.defeatedLevel2_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		
		if(this.isSlimeType) {
			if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER1_SLIME_ID);
			if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER2_SLIME_ID);
			if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER3_SLIME_ID);
			if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER4_SLIME_ID);
		}
		else {
			if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER1_ID);
			if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER2_ID);
			if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER3_ID);
			if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER4_ID);
		}
		
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
};

//Defeated Guard battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedGuard = function(target) {
	this._lastAITarget = BattleManager._targets[0];
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	
	if(this.usedSkillThisTurn())
		return;
	
	if(isUsingPussy || isUsingAnal || isUsingBoobs || isUsingMouth) {
		if(this.usePoseSkill(target))
			return;
	}
	else if(this.canInsertPussy(target) || this.canInsertAnal(target) || this.canInsertMouth(target) || this.canInsertBoobs(target)) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_ANAL_ID);
		if(this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_MOUTH_ID);
		if(this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_BOOBS_ID);
		
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		this.useAISkill(skillId,target);
		this.setUsedSkillThisTurn(true);
		return;
	}
	
	this.defeatedGuard_PettingTalkSight(target);
	
};

//Cargill AI
Game_Enemy.prototype.enemyBattleAICargill = function() {
	let target = BattleManager._targets[0];
	this._lastAITarget = BattleManager._targets[0];
	
	let slime = $gameTroop.members()[0];
	let rogue = $gameTroop.members()[1];
	let nerd = $gameTroop.members()[2];
	
	let hasEnoughEnergy = this.mp >= 10;
	let rogueIsDead = rogue.isDead();
	let nerdIsDead = nerd.isDead();
	let slimeIsHurt = slime.isSlammed();
	let slimeIsSlightlyHurt = slime.isCleaved() || slime.isSkewered();
	let karrynIsNotHorny = !target.isHorny;
	let karrynIsInSexPose = target.isInSexPose();
	
	const ACTION_CARGILL_SIGHT = 1;
	const ACTION_CARGILL_TALK = 2;
	const ACTION_CARGILL_HEAL_SLIME = 3;
	const ACTION_CARGILL_REVIVE_ROGUE = 4;
	const ACTION_CARGILL_REVIVE_NERD = 5;
	const ACTION_CARGILL_DEBUFF_KARRYN = 6;
	
	if(this.isChargedUp()) {
		if(this._cargillAction === ACTION_CARGILL_DEBUFF_KARRYN) {
			this.useAISkill(SKILL_CARGILL_DEBUFF_ID,target);
		}
		else if(this._cargillAction === ACTION_CARGILL_HEAL_SLIME) {
			this.useAISkill(SKILL_CARGILL_SLIMEHEAL_ID,slime);
		}
		else if(this._cargillAction === ACTION_CARGILL_REVIVE_ROGUE) {
			if(rogue._ejaculationStock === 0) rogue._ejaculationStock++;
			rogue._mp += Math.randomInt(8) + 8;
			rogue._mp = rogue._mp.clamp(0, rogue.mmp);
			this.useAISkill(SKILL_CARGILL_REVIVE_ID,rogue);
		}
		else if(this._cargillAction === ACTION_CARGILL_REVIVE_NERD) {
			if(nerd._ejaculationStock === 0) nerd._ejaculationStock++;
			nerd._mp += Math.randomInt(10) + 15;
			nerd._mp = nerd._mp.clamp(0, nerd.mmp);
			this.useAISkill(SKILL_CARGILL_REVIVE_ID,nerd);
		}
	
	}
	else {
		let nextActionArray = [ ACTION_CARGILL_SIGHT, ACTION_CARGILL_SIGHT ]
		
		if(hasEnoughEnergy) {
			if(!karrynIsInSexPose) {
				if(slimeIsHurt) {
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					if(slime.hasLessThanOneThirdStamina()) {
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					}
				}
				else if(slimeIsSlightlyHurt) {
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					if(slime.hasLessThanOneThirdStamina()) {
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					}
				}
			}
			
			if(rogueIsDead) {
				nextActionArray.push(ACTION_CARGILL_REVIVE_ROGUE);
				nextActionArray.push(ACTION_CARGILL_REVIVE_ROGUE);
				nextActionArray.push(ACTION_CARGILL_REVIVE_ROGUE);
			}
			
			if(nerdIsDead) {
				nextActionArray.push(ACTION_CARGILL_REVIVE_NERD);
				nextActionArray.push(ACTION_CARGILL_REVIVE_NERD);
				nextActionArray.push(ACTION_CARGILL_REVIVE_NERD);
			}
			
			if(karrynIsNotHorny) {
				nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
				nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
				nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
			}
			
			if(!karrynIsInSexPose) {
				if(!target.isStateAffected(STATE_WEAKEN_ID)) 
					nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
				if(!target.isStateAffected(STATE_POISON_ID)) 
					nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
			}
			else {
				nextActionArray.push(ACTION_CARGILL_SIGHT);
			}
		}
		
		let nextAction = nextActionArray[Math.randomInt(nextActionArray.length)];
		switch(nextAction) {
			case ACTION_CARGILL_SIGHT:
				this.useAISkill(SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID,target);
				break;	
			case ACTION_CARGILL_TALK:
				this.useAISkill(SKILL_ENEMY_TALK_SELECTOR_RANDOM_ID,target);
				break;	
			case ACTION_CARGILL_HEAL_SLIME:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_HEAL_SLIME;
				break;	
			case ACTION_CARGILL_REVIVE_ROGUE:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_REVIVE_ROGUE;
				break;		
			case ACTION_CARGILL_REVIVE_NERD:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_REVIVE_NERD;
				break;		
			case ACTION_CARGILL_DEBUFF_KARRYN:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_DEBUFF_KARRYN;
				break;		
		}
	}
	
	this._mp += 3;
	this._mp = this._mp.clamp(0, this.mmp);
};

/////////////////
// Joining Sex Pose
/////////////////

Game_Enemy.prototype.tryJoinSexPose = function(target, attempts) { 
	if(!this._aiPoseJoinSkills) return false;
	let success = false;

	let array = this._aiPoseJoinSkills.slice(0);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	
	return success;
};

//////////////////
// Starting Sex Pose
//////////////////

Game_Enemy.prototype.tryStartSexPose = function(target, attempts) { 
	if(!this._aiPoseStartSkills) return false;
	if(!target.isInReadyPose()) return false;
	
	if(this.isPrisonerType && $gameTroop.isThereNonPrisonerTypeEnemyPresent()) 
		return false;
	
	let success = false;
	let array = this._aiPoseStartSkills.slice(0);
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];

		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	return success;
};

////////////////
// Petting-Talk-Sight
/////////////////////

//Try to use all petting skills, if it doesn't work then work on to talk-sight
Game_Enemy.prototype.genericPettingTalkSight = function(target, attempts) { 
	if(attempts == void 0) attempts = -1;
	if(attempts === -1) {
		if(this.tryAllPettingSkills(target)) return;
	}
	else {
		if(this.tryPettingSkills(target, attempts)) return;
	}
	this.genericBattleAITalkSight(target);
};

Game_Enemy.prototype.defeatedLevel1_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel1(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedLevel2_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel2(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedGuard_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedGuard(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};


/////////////
// Petting
////////////

Game_Enemy.prototype.tryPettingSkills = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel1 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel2 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	
	if(pussyInserted || analInserted) array = [];
	
	array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedGuard = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	
	if(isUsingPussy || isUsingAnal || isUsingBoobs || isUsingMouth) array = [];
	
	array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};


//Try to use every petting skill
Game_Enemy.prototype.tryAllPettingSkills = function(target) { 
	if(!this._aiPettingSkills) return false;
	return this.tryPettingSkills(target, this._aiPettingSkills.length * 2);
};

/////////////
// Talk Sight
/////////////

//For generic enemy AIs, just randomly pick a talk/sight skill and use it
Game_Enemy.prototype.genericBattleAITalkSight = function(target) { 
	if(!this._aiTalkSightSkills) return;
	
	let success = false;
	let array = this._aiTalkSightSkills.slice(0);
	while(array.length > 0 && !success) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
	}
	return success;
};	
	
//////////
// Attack
///////////

//For generic enemy AIs, just randomly pick an attack skill and use it
Game_Enemy.prototype.genericBattleAIAttack = function(target) { 
	if(!this._aiAttackSkills) return;
	
	let success = false;
	let array = this._aiAttackSkills.slice(0);
	while(array.length > 0 && !success) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		success = success && this.meetsSkillConditions($dataSkills[skillId]); //cooldown
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
	}
	return success;
};

Game_Enemy.prototype.chargeAIAttack = function(target) { 
	if(!this._aiChargeSkills) return;
	
	let attempts = 3;
	let success = false;
	let array = this._aiChargeSkills.slice(0);
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		success = success && this.meetsSkillConditions($dataSkills[skillId]); //cooldown
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	return success;
};

///////////
// Special Actions

Game_Enemy.prototype.specialEnemyBattleAIAction = function(target) { 
	

	return false;
};

