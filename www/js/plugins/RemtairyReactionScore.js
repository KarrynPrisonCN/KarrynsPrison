var Remtairy = Remtairy || {};
Remtairy.ReactionScore = Remtairy.ReactionScore || {};

//=============================================================================
 /*:
 * @plugindesc Reaction Score
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const VAR_DEF_RS_LV1_REQ = 40;
const VAR_DEF_RS_LV2_REQ = 90;
const VAR_DEF_RS_LV3_REQ = 170;
const VAR_FP_SEX_RS_LV1_REQ = 30;
const VAR_FP_SEX_RS_LV2_REQ = 50;
const VAR_FP_SEX_RS_LV3_REQ = 80;
const VAR_PA_SEX_RS_LV1_REQ = 30;
const VAR_PA_SEX_RS_LV2_REQ = 60;
const VAR_PA_SEX_RS_LV3_REQ = 100;
const VAR_TYPE_RS_LV1_REQ = 10;
const VAR_TYPE_RS_LV2_REQ = 20;
const VAR_TYPE_RS_LV3_REQ = 30;
const VAR_TOY_RS_LV1_REQ = 10;
const VAR_TOY_RS_LV2_REQ = 30;
const VAR_TOY_RS_LV3_REQ = 70;


Game_Actor.prototype.getReactionScore = function() {
	let score = 0;
	
	if(this.isInReceptionistPose()) {
		score += this.getReactionDuringSexScore(0.8, 0);
		score += this.reactionScore_enemyVisitorPassive() * 2;
		score += this.reactionScore_enemyGoblinPassive();
		score += this.reactionScore_slutLevel(0.2);
		score += this.reactionScore_masochismLevel(5);
		score += this.reactionScore_sadismLevel(3);
	}
	else if($gameParty.isInWaitressBattle) {
		if(this.isInWaitressServingPose()) {
			score += this.reactionScore_jobWaitressPassive() * 3;
			score += this.reactionScore_slutLevel(0.2);
			score += this.reactionScore_masochismLevel(7);
			score += this.reactionScore_sadismLevel(3);
		}
		else {
			score += this.reactionScore_jobWaitressPassive() * 2;
			score += this.getReactionDuringSexScore(0.7, 0.5);
			score += this.reactionScore_slutLevel();
			score += this.reactionScore_masochismLevel(7);
			score += this.reactionScore_sadismLevel(3);
		}
	}
	else if($gameParty.isInStripperBattle) {
		if(this.isInStripperSexPose()) {
			score += this.reactionScore_jobStripperPassive();
			score += this.getReactionDuringSexScore(0.7, 0.7);
			score += this.reactionScore_slutLevel();
			score += this.reactionScore_masochismLevel(3);
			score += this.reactionScore_sadismLevel(3);
		}
		else if(this.isInStripperBoobsPose()) {
			score += this.reactionScore_jobStripperPassive();
			score += this.reactionScore_sightBoobsPassive();
			score += this.reactionScore_exhibitionPassive() * 0.33;
			score += this.reactionScore_slutLevel(0.2);
			score += this.reactionScore_masochismLevel(3);
			score += this.reactionScore_sadismLevel(3);
		}
		else if(this.isInStripperPussyPose()) {
			score += this.reactionScore_jobStripperPassive();
			score += this.reactionScore_sightPussyPassive();
			score += this.reactionScore_exhibitionPassive() * 0.33;
			score += this.reactionScore_slutLevel(0.2);
			score += this.reactionScore_masochismLevel(3);
			score += this.reactionScore_sadismLevel(3);
		}
		else if(this.isInStripperButtPose()) {
			score += this.reactionScore_jobStripperPassive();
			score += this.reactionScore_sightButtPassive();
			score += this.reactionScore_exhibitionPassive() * 0.33;
			score += this.reactionScore_slutLevel(0.2);
			score += this.reactionScore_masochismLevel(3);
			score += this.reactionScore_sadismLevel(3);
		}
		else if(this.isInStripperMouthPose()) {
			score += this.reactionScore_jobStripperPassive();
			score += this.reactionScore_sightMouthPassive();
			score += this.reactionScore_exhibitionPassive() * 0.33;
			score += this.reactionScore_slutLevel(0.2);
			score += this.reactionScore_masochismLevel(3);
			score += this.reactionScore_sadismLevel(3);
		}
	}
	else if(this.isInDefeatedLevel1Pose()) {
		score += this.getReactionDuringSexScore(0.8, 1);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(6);
		score += this.reactionScore_sadismLevel(4);
		score += this.reactionScore_defeatedBlowbangPassive() * 1.5;
	}
	else if(this.isInDefeatedLevel2Pose()) {
		score += this.getReactionDuringSexScore(0.8, 0.8);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(10);
		score += this.reactionScore_defeatedUrinalPassive() * 1.5;
	}
	else if(this.isInDefeatedLevel3Pose()) {
		score += this.getReactionDuringSexScore(0.8, 0.8);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(10);
		score += this.reactionScore_defeatedSoloCellPassive() * 1.5;
	}
	else if(this.isInDefeatedLevel4Pose()) {
		score += this.getReactionDuringSexScore(0.8, 0.8);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(10);
		score += this.reactionScore_defeatedPilloryPassive() * 1.5;
	}
	else if(this.isInDefeatedGuardPose()) {
		score += this.getReactionDuringSexScore(0.8, 1);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(8);
		score += this.reactionScore_sadismLevel(2);
		score += this.reactionScore_enemyGuardPassive() * 1.5;
	}
	else if(this.isInMasturbationPose()) {
		score += this.reactionScore_masturbationPassive();
		score += this.reactionScore_masturbateLevel();
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(5);
	}
	else if($gameParty.isInGloryBattle) {
		let sexScore = this.getReactionDuringSexScore(0.6, 0.33);
		score += sexScore
		if(sexScore > 0)
			score += this.reactionScore_gloryHolePassive() * 0.8;
		else
			score += this.reactionScore_gloryHolePassive() * 1.2;
		score += this.reactionScore_slutLevel(0.25);
		score += this.reactionScore_masochismLevel(5);
		score += this.reactionScore_sadismLevel(2);
	}
	else if(this.isInSlimeAnalPiledriverSexPose()) {
		score += this.getReactionDuringSexScore(0.5, 3);
		score += this.reactionScore_slutLevel(0.2);
		score += this.reactionScore_masochismLevel(7);
	}
	else if(this.isInWerewolfBackPose()) {
		score += this.getReactionDuringSexScore(0.5, 3);
		score += this.reactionScore_slutLevel(0.2);
		score += this.reactionScore_masochismLevel(7);
	}
	else if(this.isInYetiPaizuriSexPose() || this.isInYetiCarryPose()) {
		score += this.getReactionDuringSexScore(0.5, 3);
		score += this.reactionScore_slutLevel(0.2);
		score += this.reactionScore_masochismLevel(7);
	}
	else if(this.isInFootjobSexPose()) {
		score += this.getReactionDuringSexScore(0.8, 1);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(1);
		score += this.reactionScore_sadismLevel(9);
	}
	else if(this.isInRimjobSexPose()) {
		score += this.getReactionDuringSexScore(0.8, 1);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(9);
		score += this.reactionScore_sadismLevel(1);
	}
	else if(this.isInKarrynCowgirlPose()) {
		score += this.getReactionDuringSexScore(0.8, 1);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel(3);
		score += this.reactionScore_sadismLevel(7);
	}
	else if(this.isInSexPose()) {
		score += this.getReactionDuringSexScore(0.8, 1);
		score += this.reactionScore_slutLevel();
		score += this.reactionScore_masochismLevel();
		score += this.reactionScore_sadismLevel();
	}
	else if(this.isInCombatPose()) {
		score += this.getCombatPoseReactionScore(false);
	}
	else if(this.isInDownPose()) {
		score += this.getDownPoseReactionScore();
	}
	
	//console.log('general score ' + score);
	return score;
};

Game_Actor.prototype.getMapReactionScore = function() {
	let score = 0;
	
	score += this.reactionScore_slutLevel(0.4);
	score += this.reactionScore_masochismLevel(8);
	score += this.reactionScore_sadismLevel(8);
	
	return score;
};

Game_Actor.prototype.getCombatPoseReactionScore = function(masoLean) {
	let score = 0;
	
	score += this.reactionScore_slutLevel(0.4);
	if(masoLean) {
		score += this.reactionScore_masochismLevel(16);
		score -= this.reactionScore_sadismLevel(3);
	}
	else {
		score += this.reactionScore_masochismLevel(8);
		score += this.reactionScore_sadismLevel(8);
	}
	
	return score;
};

Game_Actor.prototype.getDownPoseReactionScore = function() {
	let score = 0;
	
	if(this.isInDownFallDownPose()) {
		score += this.reactionScore_falldownPassive() * 2;
		score += this.reactionScore_slutLevel(0.37);
		score += this.reactionScore_masochismLevel(10);
		score -= this.reactionScore_sadismLevel(3);
	}
	else if(this.isInDownStaminaPose()) {
		score += this.reactionScore_downStaminaPassive() * 2;
		score += this.reactionScore_slutLevel(0.37);
		score += this.reactionScore_masochismLevel(10);
		score -= this.reactionScore_sadismLevel(3);
	}
	else {
		score += this.reactionScore_slutLevel(0.4);
		score += this.reactionScore_masochismLevel(14);
		score -= this.reactionScore_sadismLevel(2);
	}
	
	return score;
};

Game_Actor.prototype.getOrgasmReactionScore = function() {
	let score = 0;
	score += this.getReactionScore() * 0.4;
	score += this.reactionScore_orgasmPassive();
	return score;
};

Game_Actor.prototype.getBukkakeReactionScore = function() {
	let score = 0;
	score += this.getReactionScore() * 0.4;
	score += this.reactionScore_bukkakePassive();
	return score;
};
Game_Actor.prototype.getSwallowReactionScore = function() {
	let score = 0;
	score += this.getReactionScore() * 0.4;
	score += this.reactionScore_swallowPassive();
	return score;
};
Game_Actor.prototype.getPussyCreampieReactionScore = function() {
	let score = 0;
	score += this.getReactionScore() * 0.4;
	score += this.reactionScore_pussyCreampiePassive();
	return score;
};
Game_Actor.prototype.getAnalCreampieReactionScore = function() {
	let score = 0;
	score += this.getReactionScore() * 0.4;
	score += this.reactionScore_analCreampiePassive();
	return score;
};

Game_Actor.prototype.getCockStareReactionScore = function() {
	let score = 0;
	
	score += this.reactionScore_slutLevel(0.4);
	score += this.reactionScore_masochismLevel(10);
	score -= this.reactionScore_sadismLevel(4);
	score += this.reactionScore_cockStarePassive();
	return score;
};

Game_Actor.prototype.getButtSpankingReactionScore = function() {
	let score = 0;
	score += this.reactionScore_buttSpankingPassive();
	score += this.reactionScore_slutLevel();
	score += this.reactionScore_masochismLevel(10);
	score -= this.reactionScore_sadismLevel(2);
	return score;
};



Game_Actor.prototype.getReactionDuringSexScore = function(sexPositionMultipler, partnerMultipler) {
	if(sexPositionMultipler === 0) { } 
	else if(!sexPositionMultipler) sexPositionMultipler = 1;
	if(partnerMultipler === 0) { } 
	else if(!partnerMultipler) partnerMultipler = 1;
	
	let score = 0;

	score += this.currentSexualPositionsReactionScore(sexPositionMultipler);
	score += this.currentSexualPartnersReactionScore(partnerMultipler);
	
	
	return score;
};

Game_Actor.prototype.currentSexualPositionsReactionScore = function(sexPositionMultipler) {
	if(sexPositionMultipler === 0) { } 
	else if(!sexPositionMultipler) sexPositionMultipler = 1;
	
	let score = 0;
	let sexPositions = 0;
	
	if(this.isBodySlotPenis(LEFT_HAND_ID) || this.isBodySlotPenis(RIGHT_HAND_ID)) {
		sexPositions++;
		score += this.reactionScore_handjobPassive();
	}
	if(this.isBodySlotPenis(MOUTH_ID)) {
		sexPositions++;
		score += this.reactionScore_blowjobPassive();
	}
	else if(this.isBodySlotAnus(MOUTH_ID)) {
		sexPositions++;
		score += this.reactionScore_rimjobPassive();
	}
	
	if(this.isBodySlotPenis(BOOBS_ID)) {
		sexPositions++;
		score += this.reactionScore_tittyFuckPassive();
	}
	if(this.isBodySlotPenis(PUSSY_ID)) {
		sexPositions++;
		score += this.reactionScore_pussySexPassive();
	}
	else if(this.isBodySlotToy(PUSSY_ID)) {
		sexPositions++;
		score += this.reactionScore_pussyToyPassive();
	}
	else if(this.isBodySlotTongue(PUSSY_ID)) {
		sexPositions++;
		score += this.reactionScore_cunniPassive();
	}
	
	if(this.isBodySlotPenis(ANAL_ID)) {
		sexPositions++;
		score += this.reactionScore_analSexPassive();
	}
	else if(this.isBodySlotToy(ANAL_ID)) {
		sexPositions++;
		score += this.reactionScore_analToyPassive();
	}
	
	if(this.isBodySlotPenis(FEET_ID)) {
		sexPositions++;
		score += this.reactionScore_footjobPassive();
	}
	
	if(sexPositions === 0) return 0;
	return score / sexPositions * sexPositionMultipler;
};

Game_Actor.prototype.currentSexualPartnersReactionScore = function(partnerMultipler) {
	if(partnerMultipler === 0) { } 
	else if(!partnerMultipler) partnerMultipler = 1;
	
	let score = 0;
	let partnerTypes = 0;
	let partnerArray = [];
	partnerArray[ENEMYTYPE_GUARD_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_GUARD_TAG);
	partnerArray[ENEMYTYPE_THUG_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_THUG_TAG);
	partnerArray[ENEMYTYPE_GOBLIN_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_GOBLIN_TAG);
	partnerArray[ENEMYTYPE_PRISONER_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_PRISONER_TAG);
	partnerArray[ENEMYTYPE_ROGUE_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_ROGUE_TAG);
	partnerArray[ENEMYTYPE_SLIME_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_SLIME_TAG);
	partnerArray[ENEMYTYPE_NERD_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_NERD_TAG);
	partnerArray[ENEMYTYPE_LIZARDMAN_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_LIZARDMAN_TAG);
	partnerArray[ENEMYTYPE_ORC_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_ORC_TAG);
	partnerArray[ENEMYTYPE_HOMELESS_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_HOMELESS_TAG);
	partnerArray[ENEMYTYPE_VISITOR_MALE_TAG] = this.countCurrentSexualPartnersOfType(ENEMYTYPE_VISITOR_MALE_TAG);
	
	if(partnerArray[ENEMYTYPE_PRISONER_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyPrisonerPassive();
	}
	if(partnerArray[ENEMYTYPE_GUARD_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyGuardPassive();
	}
	if(partnerArray[ENEMYTYPE_THUG_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyThugPassive();
	}
	if(partnerArray[ENEMYTYPE_GOBLIN_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyGoblinPassive();
	}
	if(partnerArray[ENEMYTYPE_NERD_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyNerdPassive();
	}
	if(partnerArray[ENEMYTYPE_ROGUE_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyRoguePassive();
	}
	if(partnerArray[ENEMYTYPE_SLIME_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemySlimePassive();
	}
	if(partnerArray[ENEMYTYPE_VISITOR_MALE_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyVisitorPassive();
	}
	if(partnerArray[ENEMYTYPE_LIZARDMAN_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyLizardmanPassive();
	}
	if(partnerArray[ENEMYTYPE_ORC_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyOrcPassive();
	}
	if(partnerArray[ENEMYTYPE_HOMELESS_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyHomelessPassive();
	}
	if(partnerArray[ENEMYTYPE_WEREWOLF_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyWerewolfPassive();
	}
	if(partnerArray[ENEMYTYPE_YETI_TAG] > 0) {
		partnerTypes++;
		score += this.reactionScore_enemyYetiPassive();
	}
	
	if(partnerTypes === 0) return 0;
	return score / partnerTypes * partnerMultipler;
};

Game_Actor.prototype.countCurrentSexualPartnersOfType = function(enemyType) {
	let count = 0;
	if(this._cockMouthTarget && this._cockMouthTarget.enemyType() == enemyType) count++;
	if(this._cockBoobsTarget && this._cockBoobsTarget.enemyType() == enemyType) count++;
	if(this._cockPussyTarget && this._cockPussyTarget.enemyType() == enemyType) count++;
	if(this._cockAnalTarget && this._cockAnalTarget.enemyType() == enemyType) count++;
	if(this._cockRightArmTarget && this._cockRightArmTarget.enemyType() == enemyType) count++;
	if(this._cockLeftArmTarget && this._cockLeftArmTarget.enemyType() == enemyType) count++;
	if(this._cockFeetTarget && this._cockFeetTarget.enemyType() == enemyType) count++;
	return count;
};

Game_Actor.prototype.reactionScore_slutLevel = function(multipler) {
	if(multipler === 0) { return 0; } 
	else if(!multipler) multipler = 0.3;
	return this.slutLvl * multipler;
};
Game_Actor.prototype.reactionScore_masochismLevel = function(multipler) {
	if(this.masochismLvl() <= this.sadismLvl()) return 0;
	if(multipler === 0) { return 0; } 
	else if(!multipler) multipler = 5;
	return this.masochismLvl() * multipler;
};
Game_Actor.prototype.reactionScore_sadismLevel = function(multipler) {
	if(this.sadismLvl() <= this.masochismLvl()) return 0;
	if(multipler === 0) { return 0; } 
	else if(!multipler) multipler = 5;
	return this.sadismLvl() * multipler;
};
Game_Actor.prototype.reactionScore_masturbateLevel = function(multipler) {
	if(multipler === 0) { return 0; } 
	else if(!multipler) multipler = 5;
	return this.masturbateLvl() * multipler;
};

//Exhibition passive
//Max 160
Game_Actor.prototype.reactionScore_exhibitionPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_SIGHT_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SIGHT_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SIGHT_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SIGHT_ORGASM_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_WAITRESS_FLASH_COUNT_ONE_ID)) score += 10;
	
	return score;
};

//Max 30
Game_Actor.prototype.reactionScore_sightMouthPassive = function() {
	let score = 0;

	if(this.hasPassive(PASSIVE_SIGHT_MOUTH_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SIGHT_MOUTH_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SIGHT_MOUTH_ONE_ID)) score += 10;

	return score;
};

//Max 30
Game_Actor.prototype.reactionScore_sightBoobsPassive = function() {
	let score = 0;

	if(this.hasPassive(PASSIVE_SIGHT_BOOBS_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SIGHT_BOOBS_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SIGHT_BOOBS_ONE_ID)) score += 10;

	return score;
};

//Max 30
Game_Actor.prototype.reactionScore_sightPussyPassive = function() {
	let score = 0;

	if(this.hasPassive(PASSIVE_SIGHT_PUSSY_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SIGHT_PUSSY_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SIGHT_PUSSY_ONE_ID)) score += 10;

	return score;
};

//Max 30
Game_Actor.prototype.reactionScore_sightButtPassive = function() {
	let score = 0;

	if(this.hasPassive(PASSIVE_SIGHT_BUTT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SIGHT_BUTT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SIGHT_BUTT_ONE_ID)) score += 10;

	return score;
};

//Kissing passive
//Max 130
Game_Actor.prototype.reactionScore_kissPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_KISS_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_KISS_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_KISS_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_KISS_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_KISS_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_KISS_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_KISS_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_KISS_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Suck Finger passive
//Max 130
Game_Actor.prototype.reactionScore_suckFingersPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SUCKED_FINGERS_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) score += 10;

	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Boobs Petting passive
//Max 130
Game_Actor.prototype.reactionScore_boobsPettingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Nipples Petting passive
//Max 130
Game_Actor.prototype.reactionScore_nipplesPettingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_NIPPLES_PETTED_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BOOBS_PETTED_PEOPLE_THREE_ID)) score += 10; //temp
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) score += 20; 
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID)) score += 10; //temp
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Butt Petting passive
//Max 130
Game_Actor.prototype.reactionScore_clitPettingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_CLIT_PETTED_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_CUNNILINGUS_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Pussy Petting passive
//Max 140
Game_Actor.prototype.reactionScore_pussyPettingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_PETTED_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Butt Petting passive
//Max 130
Game_Actor.prototype.reactionScore_buttPettingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BUTT_PETTED_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_BUTT_SPANKED_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Anal Petting passive
//Max 140
Game_Actor.prototype.reactionScore_analPettingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_PETTED_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PETTING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PETTING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Handjob passive
//Max 110
Game_Actor.prototype.reactionScore_handjobPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_HJ_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_HJ_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_HJ_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_HJ_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_HJ_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Blowjob passive
//Max 130
Game_Actor.prototype.reactionScore_blowjobPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MOUTH_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BJ_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BJ_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Titty fuck passive
//Max 130
Game_Actor.prototype.reactionScore_tittyFuckPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BOOBS_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Pussy sex passive
//Max 160
Game_Actor.prototype.reactionScore_pussySexPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_TWO_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_ONE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_SEX_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FIVE_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_SEX_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Anal sex passive
//Max 160
Game_Actor.prototype.reactionScore_analSexPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_TWO_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_COUNT_ONE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FIVE_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_SEX_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Footjob passive
//Max 130
Game_Actor.prototype.reactionScore_footjobPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FOOTJOB_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FOOTJOB_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FOOTJOB_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SADISM_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SADISM_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SADISM_ORGASM_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SADISM_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SADISM_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Rimjob passive
//Max 130
Game_Actor.prototype.reactionScore_rimjobPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_RIMJOB_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_RIMJOB_PEOPLE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_RIMJOB_USAGE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_RIMJOB_USAGE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Cunni passive
//Max 110
Game_Actor.prototype.reactionScore_cunniPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_TWO_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_FIRST_CUNNILINGUS_ID)) score += 15;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_CUNNILINGUS_PEOPLE_ONE_ID)) score += 15;
	
	if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_TWO_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_CUNNILINGUS_ORGASM_ONE_ID)) score += 15;
	
	return score;
};

//Butt Spanking passive
//Max 110
Game_Actor.prototype.reactionScore_buttSpankingPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_BUTT_SPANKED_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BUTT_SPANKED_PEOPLE_TWO_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASOCHISM_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASOCHISM_ORGASM_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SPANKING_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SPANKING_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Bukkake passive
//Max 100
Game_Actor.prototype.reactionScore_bukkakePassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FIVE_ID)) score += 60;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FOUR_ID)) score += 50;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_THREE_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_TWO_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_ONE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_BUKKAKE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BUKKAKE_MAX_ML_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Swallow passive
//Max 90
Game_Actor.prototype.reactionScore_swallowPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_SWALLOW_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ML_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MAX_SWALLOW_ML_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SWALLOW_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Pussy creampie passive
//Max 100
Game_Actor.prototype.reactionScore_pussyCreampiePassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_ONE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_PUSSY_CREAMPIE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_TWO_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MAX_PUSSY_CREAMPIE_ML_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Anal creampie passive
//Max 100
Game_Actor.prototype.reactionScore_analCreampiePassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_ONE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FIRST_ANAL_CREAMPIE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FOUR_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_THREE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_TWO_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MAX_ANAL_CREAMPIE_ML_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Clit Toy passive
//Max 100
Game_Actor.prototype.reactionScore_clitToyPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_TWO_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_ONE_ID)) score += 20;
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOYS_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOYS_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Pussy Toy passive
//Max 100
Game_Actor.prototype.reactionScore_pussyToyPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_TWO_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_DILDO_INSERT_COUNT_ONE_ID)) score += 20;
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOYS_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOYS_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Anal Toy passive
//Max 100
Game_Actor.prototype.reactionScore_analToyPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_TWO_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ANAL_BEADS_INSERT_COUNT_ONE_ID)) score += 20;
	
	if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOTAL_TOYS_INSERT_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TOYS_PLEASURE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOYS_PLEASURE_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOYS_ORGASM_ONE_ID)) score += 10;
	
	return score;
};

//Orgasm passive
//Max 140
Game_Actor.prototype.reactionScore_orgasmPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_ORGASM_TRIPLE_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ORGASM_COUNT_SEVEN_ID)) score += 70;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) score += 60;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_FIVE_ID)) score += 50;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ORGASM_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ORGASM_ML_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_ONE_ID)) score += 10;
	
	return score;
};

//Masturbation
//Max 120
Game_Actor.prototype.reactionScore_masturbationPassive = function() {
	let score = 0;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID)) score += 10;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID)) score += 15;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID)) score += 10;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID)) score += 5;
	
	if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_THREE_ID)) score += 15;
	else if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_TWO_ID)) score += 10;
	else if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_ONE_ID)) score += 5;
	
	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) score += 10;
	
	return score;
};


//Cock stare
//Max 60
Game_Actor.prototype.reactionScore_cockStarePassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_FOUR_ID)) score += 60;
	else if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_TWO_ID)) score += 10;
	return score;
};

// Falldown Passives
// Max 30
Game_Actor.prototype.reactionScore_falldownPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_FALLEN_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_FALLEN_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_FALLEN_COUNT_ONE_ID)) score += 10;
	return score;
};

// Down Stamina Passives
// Max 30
Game_Actor.prototype.reactionScore_downStaminaPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_DOWNSTAMINA_COUNT_ONE_ID)) score += 10;
	return score;
};

// Job Passives
// Max 40
Game_Actor.prototype.reactionScore_jobWaitressPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BAR_WAITRESS_SEX_COUNT_ONE_ID)) score += 10;
	score += Math.min(10, $gameParty._barReputation);
	return score;
};

Game_Actor.prototype.reactionScore_jobReceptionistPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) score += 10;
	score += Math.min(10, $gameParty._receptionistNotoriety);
	return score;
};

// Defeated Passives
// Max 30

Game_Actor.prototype.reactionScore_defeatedBlowbangPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_defeatedUrinalPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_defeatedSoloCellPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_defeatedPilloryPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_ONE_ID)) score += 10;
	return score;
};


//Glory Hole
//Max 110
Game_Actor.prototype.reactionScore_gloryHolePassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOILET_BATTLE_COUNT_ONE_ID)) score += 10;
	if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_ONE_ID)) score += 10;
	if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_GLORY_HOLE_SEX_PEOPLE_ONE_ID)) score += 10;
	if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID)) score += 10;
	return score;
};

//Stripper
//Max 70
Game_Actor.prototype.reactionScore_jobStripperPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_STRIPPER_PATRON_SEX_COUNT_ONE_ID)) score += 10;
	if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_STRIPPER_PATRON_CONDOM_COUNT_ONE_ID)) score += 10;
	score += Math.min(10, $gameParty._stripClubReputation);
	return score;
};

Game_Actor.prototype.patronCondomReactionScore = function() {
	let score = 0;
	score += this.getReactionScore() * 0.4;
	score += this.reactionScore_jobStripperPassive() * 1.4;
	return score;
};

// Enemy types passives
// Max 30

Game_Actor.prototype.reactionScore_enemyGoblinPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID)) score += 10;
	if(this.hasEdict(EDICT_BAIT_GOBLINS)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyThugPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID)) score += 10;
	if(this.hasEdict(EDICT_THUGS_STRESS_RELIEF)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyGuardPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyNerdPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyRoguePassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemySlimePassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyLizardmanPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyOrcPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyHomelessPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyWerewolfPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID)) score += 10;
	return score;
};
Game_Actor.prototype.reactionScore_enemyYetiPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID)) score += 10;
	return score;
};

Game_Actor.prototype.reactionScore_enemyPrisonerPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FIVE_ID)) score += 40;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) score += 35;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_ONE_ID)) score += 10;
	return score;
};


Game_Actor.prototype.reactionScore_enemyVisitorPassive = function() {
	let score = 0;
	if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_THREE_ID)) score += 30;
	else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_TWO_ID)) score += 20;
	else if(this.hasPassive(PASSIVE_RECEPTIONIST_VISITOR_SEX_COUNT_ONE_ID)) score += 10;
	return score;
};