var Remtairy = Remtairy || {};
Remtairy.KarrynSex = Remtairy.KarrynSex || {};


//=============================================================================
 /*:
 * @plugindesc Karryn Sex
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const BASEDMG_TALK = 7;
const BASEDMG_SIGHT = 7;

const BASEDMG_KISS_LVLONE = 7;
const BASEDMG_KISS_LVLTWO = 9;
const BASEDMG_SPANK_LVLONE = 7;

const BASEDMG_PETTING_COCK = 4;

const BASEDMG_PETTING_BOOBS = 6;
const BASEDMG_PETTING_NIPPLES = 9;
const BASEDMG_PETTING_CLIT = 6;
const BASEDMG_PETTING_PUSSY = 9;
const BASEDMG_PETTING_BUTT = 6;
const BASEDMG_PETTING_ANAL = 9;
const BASEDMG_SUCKING_FINGERS = 6;
const BASEDMG_VISITOR_HANDSHAKE = 5;

const BASEDMG_TOY_PINK_ROTOR = 10;
const BASEDMG_TOY_PENIS_DILDO = 12;
const BASEDMG_TOY_ANAL_BEADS = 12;

const BASEDMG_SEXACT_HANDJOB = 12;
const BASEDMG_SEXACT_BLOWJOB = 12;
const BASEDMG_SEXACT_TITTYFUCK = 15;
const BASEDMG_SEXACT_PUSSYSEX = 18;
const BASEDMG_SEXACT_ANALSEX = 18;
const BASEDMG_SEXACT_CUNNILINGUS = 15;
const BASEDMG_SEXACT_RIMJOB = 12;
const BASEDMG_SEXACT_FOOTJOB = 12;

const VAR_KARRYN_PLEASURE_FEEDBACK_REDUCER = 0.5;
const VAR_ENEMY_PLEASURE_FEEDBACK_REDUCER_FLAT = 0.75;
const VAR_ENEMY_PLEASURE_FEEDBACK_REDUCER_LOW_DEX = 0.75;
const VAR_ENEMY_PLEASURE_FEEDBACK_REDUCER_NO_STAMINA = 0.75;

const VAR_KARRYN_KISS_PLEASURE_DEX_MULTIPLER = 2.2;
const VAR_KARRYN_PETTING_PLEASURE_DEX_MULTIPLER = 2.8;
const VAR_KARRYN_SEX_PLEASURE_DEX_MULTIPLER = 3.8;

const VAR_COCK_PETTING_NOTERECT_MULTIPLER = 1.0;
const VAR_COCK_PETTING_ISERECT_MULTIPLER = 0.4;

//////////
///////////////
// Game Actor
/////////////////
///////////

////////////
// Horny

Game_Actor.prototype.addHornyState = function() {
	if(!DEBUG_MODE) return;
	if($gameParty._showTopRightTimeNumberFlag) {
		if(!this.isHorny) {
			this.addState(STATE_HORNY_ID);
			this.addToActorHornyRecord();
		}
		this.increaseHornyStateTurns(99);
		
		let currentTime = 0;
		if(this.isInWaitressServingPose())
			currentTime = $gameParty.waitressBattle_getCurrentTimeInSeconds();
		else if(this.isInReceptionistPose())
			currentTime = $gameParty.receptionistBattle_getCurrentTimeInSeconds();
		
		this._hornyTimeLimit = currentTime + this.passiveHornyStateAddTimeLimit()
	}
	else if($gameParty.isInGloryBattle) {
		if(!this.isHorny) {
			this.addState(STATE_HORNY_ID);
			this.addToActorHornyRecord();
		}
		this.increaseHornyStateTurns(this.passiveHornyStateAddTurns() * 2);
	}
	else {
		if(!this.isHorny) {
			this.addState(STATE_HORNY_ID);
			this.addToActorHornyRecord();
		}
		this.increaseHornyStateTurns(this.passiveHornyStateAddTurns());
	}
};

////////
// Remove Body Slots

Game_Actor.prototype.removeAllPettedToyInsert = function () {
	this.removeAllBodyPetted();
	this.removeAllBodyToy();
	this.removeAllBodyInsert();
};
Game_Actor.prototype.removeAllPettedInsertExceptToy = function () {
	this.removeAllBodyPetted();
	this.removeAllBodyInsert();
};

Game_Actor.prototype.removeAllBodyPetted = function () {
	if(this.isBodySlotAnus(MOUTH_ID)) this.setMouthRimming(false);
	if(this.isBodySlotTongue(PUSSY_ID)) this.setPussyCunni(false);
	

};

Game_Actor.prototype.removeAllBodyInsert = function () {
	if(this.isBodySlotPenis(MOUTH_ID)) this.setMouthInserted(false);
	if(this.isBodySlotPenis(RIGHT_HAND_ID)) this.setRightHandInserted(false);
	if(this.isBodySlotPenis(LEFT_HAND_ID)) this.setLeftHandInserted(false);
	if(this.isBodySlotPenis(PUSSY_ID)) this.setPussyInserted(false);
	if(this.isBodySlotPenis(ANAL_ID)) this.setAnalInserted(false);
};

Game_Actor.prototype.removeAllBodyToy = function () {
	if(this.isBodySlotToy(CLIT_ID)) this.removeClitToy();
	if(this.isBodySlotToy(PUSSY_ID)) this.removePussyToy();
	if(this.isBodySlotToy(ANAL_ID)) this.removeAnalToy();
};

//////////////
// Pose Skills
//////////////

Game_Actor.prototype.enableRightHandjobPoseSkills = function (target) {
	this._enableRightHandjobPoseSkills = true;
	this._rightHandjobPoseTarget = target;
};
Game_Actor.prototype.enableLeftHandjobPoseSkills = function (target) {
	this._enableLeftHandjobPoseSkills = true;
	this._leftHandjobPoseTarget = target;
};
Game_Actor.prototype.enableBlowjobPoseSkills = function (target) {
	this._enableBlowjobPoseSkills = true;
	this._blowjobPoseTarget = target;
};
Game_Actor.prototype.enableTittyFuckPoseSkills = function (target) {
	this._enableTittyFuckPoseSkills = true;
	this._tittyFuckPoseTarget = target;
};
Game_Actor.prototype.enablePussySexPoseSkills = function (target) {
	this._enablePussySexPoseSkills = true;
	this._pussySexPoseTarget = target;
};
Game_Actor.prototype.enableAnalSexPoseSkills = function (target) {
	this._enableAnalSexPoseSkills = true;
	this._analSexPoseTarget = target;
};
Game_Actor.prototype.enableRimjobPoseSkills = function (target) {
	this._enableRimjobPoseSkills = true;
	this._rimjobPoseTarget = target;
};
Game_Actor.prototype.enableFootjobPoseSkills = function (target) {
	this._enableFootjobPoseSkills = true;
	this._footjobPoseTarget = target;
};


Game_Actor.prototype.disableRightHandjobPoseSkills = function () {
	this._enableRightHandjobPoseSkills = false;
	this._rightHandjobPoseTarget = false;
};
Game_Actor.prototype.disableLeftHandjobPoseSkills = function () {
	this._enableLeftHandjobPoseSkills = false;
	this._leftHandjobPoseTarget = false;
};
Game_Actor.prototype.disableBlowjobPoseSkills = function () {
	this._enableBlowjobPoseSkills = false;
	this._blowjobPoseTarget = false;
};
Game_Actor.prototype.disableTittyFuckPoseSkills = function () {
	this._enableTittyFuckPoseSkills = false;
	this._tittyFuckPoseTarget = false;
};
Game_Actor.prototype.disablePussySexPoseSkills = function () {
	this._enablePussySexPoseSkills = false;
	this._pussySexPoseTarget = false;
};
Game_Actor.prototype.disableAnalSexPoseSkills = function () {
	this._enableAnalSexPoseSkills = false;
	this._analSexPoseTarget = false;
};
Game_Actor.prototype.disableRimjobPoseSkills = function () {
	this._enableRimjobPoseSkills = false;
	this._rimjobPoseTarget = false;
};
Game_Actor.prototype.disableFootjobPoseSkills = function () {
	this._enableFootjobPoseSkills = false;
	this._footjobPoseTarget = false;
};

Game_Actor.prototype.disableAllPoseSkills = function () {
	this.disableRightHandjobPoseSkills();
	this.disableLeftHandjobPoseSkills();
	this.disableBlowjobPoseSkills();
	this.disableTittyFuckPoseSkills();
	this.disablePussySexPoseSkills();
	this.disableAnalSexPoseSkills();
	this.disableRimjobPoseSkills();
	this.disableFootjobPoseSkills();
};

Game_Actor.prototype.rightHandjobPoseTarget = function () {
	return this._rightHandjobPoseTarget;
};
Game_Actor.prototype.leftHandjobPoseTarget = function () {
	return this._leftHandjobPoseTarget;
};
Game_Actor.prototype.blowjobPoseTarget = function () {
	return this._blowjobPoseTarget;
};
Game_Actor.prototype.tittyFuckPoseTarget = function () {
	return this._tittyFuckPoseTarget;
};
Game_Actor.prototype.pussySexPoseTarget = function () {
	return this._pussySexPoseTarget;
};
Game_Actor.prototype.analSexPoseTarget = function () {
	return this._analSexPoseTarget;
};
Game_Actor.prototype.rimjobPoseTarget = function () {
	return this._rimjobPoseTarget;
};
Game_Actor.prototype.footjobPoseTarget = function () {
	return this._footjobPoseTarget;
};


Game_Actor.prototype.rightHandjobPoseSkillsIsEnabled = function () {
	return this._enableRightHandjobPoseSkills;
};
Game_Actor.prototype.leftHandjobPoseSkillsIsEnabled = function () {
	return this._enableLeftHandjobPoseSkills;
};
Game_Actor.prototype.blowjobPoseSkillsIsEnabled = function () {
	return this._enableBlowjobPoseSkills;
};
Game_Actor.prototype.tittyFuckPoseSkillsIsEnabled = function () {
	return this._enableTittyFuckPoseSkills;
};
Game_Actor.prototype.pussySexPoseSkillsIsEnabled = function () {
	return this._enablePussySexPoseSkills;
};
Game_Actor.prototype.analSexPoseSkillsIsEnabled = function () {
	return this._enableAnalSexPoseSkills;
};
Game_Actor.prototype.rimjobPoseSkillsIsEnabled = function () {
	return this._enableRimjobPoseSkills;
};
Game_Actor.prototype.footjobPoseSkillsIsEnabled = function () {
	return this._enableFootjobPoseSkills;
};

/////////
// Cock Targets
////////////

Game_Actor.prototype.resetCockTargets = function() {
	this._cockMouthTarget = false;
	this._cockBoobsTarget = false;
	this._cockPussyTarget = false;
	this._cockAnalTarget = false;
	this._cockRightArmTarget = false;
	this._cockLeftArmTarget = false;
	this._cockFeetTarget = false;
	this._cockNormalTarget = false;
	this._cockFrontATarget = false;
	this._cockFrontBTarget = false;
	this._cockFrontCTarget = false;
	this._cockFrontDTarget = false;
};

////////
// Has Free Hand
////////////

Game_Actor.prototype.hasFreeHand = function() {
	return this.isBodySlotFree(RIGHT_HAND_ID) || this.isBodySlotFree(LEFT_HAND_ID);
};

/////////////
// Calculate Factor
/////////////////

Game_Actor.prototype.getDefeatedLvlOneFactor = function() {
	let factor = 0;
	
	if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID)) factor += 4;
	else if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_TWO_ID)) factor += 3;
	else if(this.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) factor += 2;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) factor += 1;
	else if($gameParty._barReputation >= 2) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID)) factor += 3;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_ONE_ID)) factor += 1;
	else if(this.hasEdict(EDICT_THE_THUG_PROBLEM)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_ONE_ID)) factor += 1;
	else if(this.hasEdict(EDICT_THE_GOBLIN_PROBLEM)) factor += 1;
	
	if(factor >= 8 && Prison.guardAggression >= 10 && $gameParty._barReputation >= 2) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) factor += 2;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) factor += 1;
		else if(Prison.guardAggression >= 20) factor += 1;
	}
	
	if(this.hasEdict(EDICT_THUGS_STRESS_RELIEF)) factor += 1;
	else if(this.hasEdict(EDICT_WEAKEN_THE_THUGS)) factor -= 1;
	if(this.hasEdict(EDICT_BAIT_GOBLINS)) factor += 1;
	
	return factor;
};

Game_Actor.prototype.getDefeatedLvlTwoFactor = function() {
	let factor = 0;
	
	if(this.hasPassive(PASSIVE_URINAL_COUNT_THREE_ID)) factor += 4;
	else if(this.hasPassive(PASSIVE_URINAL_COUNT_TWO_ID)) factor += 3;
	else if(this.hasPassive(PASSIVE_URINAL_COUNT_ONE_ID)) factor += 2;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID)) factor += 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_ONE_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) factor += 1;
	
	if(factor >= 7 && Prison.guardAggression >= 20) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) factor += 1;
		else if(Prison.guardAggression >= 30) factor += 1;
	}
	
	if(this.hasEdict(EDICT_THUGS_STRESS_RELIEF)) factor += 1;
	if(this.hasEdict(EDICT_BAIT_GOBLINS)) factor += 1;
	
	if(this.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) factor += 1;
	else if(this.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) factor -= 1;
	if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) factor += 1;
	
	return factor;
};

Game_Actor.prototype.getDefeatedLvlThreeFactor = function() {
	let factor = 0;
	
	if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_THREE_ID)) factor += 4;
	else if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_TWO_ID)) factor += 3;
	else if(this.hasPassive(PASSIVE_TIED_SEX_COUNT_ONE_ID)) factor += 2;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID)) factor += 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_THREE_ID)) factor += 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_THREE_ID)) factor += 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_ORC_ONE_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) factor += 1;
	
	
	if(this.hasEdict(EDICT_THUGS_STRESS_RELIEF)) factor += 1;
	if(this.hasEdict(EDICT_BAIT_GOBLINS)) factor += 1;
	if(this.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) factor += 1;
	if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) factor += 1;
	
	if(this.hasEdict(EDICT_APPEASE_THE_LIZARDMEN)) factor += 1;
	else if(this.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN)) factor -= 1;
	if(this.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS)) factor += 1;
	
	if(this.hasEdict(EDICT_COLD_SHOWERS)) factor += 1;
	if(this.hasEdict(EDICT_PAID_GYM_MEMBERSHIP)) factor += 1;
	
	return factor;
};

Game_Actor.prototype.getDefeatedLvlFourFactor = function() {
	let factor = 0;
	
	if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_THREE_ID)) factor += 4;
	else if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_TWO_ID)) factor += 3;
	else if(this.hasPassive(PASSIVE_PILLORY_SEX_COUNT_ONE_ID)) factor += 2;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) factor += 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID)) factor += 1;
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_YETI_ONE_ID)) factor += 1;
	
	if(this.hasEdict(EDICT_THUGS_STRESS_RELIEF)) factor += 1;
	if(this.hasEdict(EDICT_BAIT_GOBLINS)) factor += 1;
	else if(this.hasEdict(EDICT_DEMEAN_GOBLINS)) factor += 2;
	if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) factor += 1;
	else if(this.hasEdict(EDICT_THREATEN_THE_NERDS)) factor += 2;
	if(this.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) factor += 1;
	if(this.hasEdict(EDICT_APPEASE_THE_LIZARDMEN)) factor += 1;
	if(this.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS)) factor += 1;
	else if(this.hasEdict(EDICT_REJECT_THE_ORCS)) factor += 2;
	
	if($gameParty.prisonGlobalRiotChance() > 0) {
		factor += Math.min(5, Math.ceil($gameParty.prisonGlobalRiotChance() / 3));
	}
	if($gameParty.prisonLevelOneRiotChance() > 0) {
		factor += Math.min(2, Math.ceil($gameParty.prisonLevelOneRiotChance() / 5));
	}
	if($gameParty.prisonLevelTwoRiotChance() > 0) {
		factor += Math.min(2, Math.ceil($gameParty.prisonLevelTwoRiotChance() / 5));
	}
	if($gameParty.prisonLevelThreeRiotChance() > 0) {
		factor += Math.min(3, Math.ceil($gameParty.prisonLevelThreeRiotChance() / 4));
	}
	
	if(Prison.prisonLevelFourIsRioting() && Prison.guardAggression >= 30) {
		factor += 1;
		if(Prison.funding === 0) factor += 2;
	}
	
	
	return factor;
};

Game_Actor.prototype.getDefeatedGuardFactor = function() {
	let factor = 0;
	let guardAggr = Prison.guardAggression;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) factor += 4;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) factor += 3;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) factor += 2;
	
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_FOUR_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID)) factor += 1;
	
	if(this.hasPassive(PASSIVE_DEFEATED_COUNT_FOUR_ID)) factor += 2;
	else if(this.hasPassive(PASSIVE_DEFEATED_COUNT_TWO_ID)) factor += 1;
	
	if(guardAggr >= 30) factor += 5;
	else if(guardAggr >= 20) factor += 4;
	else if(guardAggr >= 12) factor += 3;
	else if(guardAggr >= 7) factor += 2;
	else if(guardAggr >= 3) factor += 1;
	
	if(Prison.funding === 0) factor += 2;
	
	return factor;
};

///////////////
//////////////////
// Karryn Sex Skills
//////////////////
///////////////

////////
// Remove Toy Skill
//////////////

Game_Actor.prototype.skillCost_removeToy = function() {
	let cost = 0.125;
	return Math.ceil(cost * this.realMaxStamina);
};

Game_Actor.prototype.showEval_removeToy = function() {
	return this.isWearingAnyToy() && !this.isInDownPose() && this.hasFreeHand();
};

Game_Actor.prototype.afterEval_removeToy = function() {
	let wearingToysArray = [];
	if(this.isWearingClitToy()) wearingToysArray.push(CLIT_ID);
	if(this.isWearingPussyToy()) wearingToysArray.push(PUSSY_ID);
	if(this.isWearingAnalToy()) wearingToysArray.push(ANAL_ID);
	
	let bodySlotToFreeUp = wearingToysArray[Math.randomInt(wearingToysArray.length)];
	let skillId = 0;
	
	if(bodySlotToFreeUp === CLIT_ID) skillId = SKILL_KARRYN_REMOVE_TOY_PINK_ROTOR_ID;
	else if(bodySlotToFreeUp === PUSSY_ID) skillId = SKILL_KARRYN_REMOVE_TOY_PENIS_DILDO_ID;
	else if(bodySlotToFreeUp === ANAL_ID) skillId = SKILL_KARRYN_REMOVE_TOY_ANAL_BEADS_ID;
	
	if(skillId) {
		this.useAISkill(skillId, -1);
		this.gainStaminaExp(25, $gameTroop.getAverageEnemyExperienceLvl());
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
	}
};

Game_Actor.prototype.afterEval_removeClitToy = function() {
	this.removeClitToy();
	this.addToActorManuallyRemovedClitToyRecord();
};

Game_Actor.prototype.afterEval_removePussyToy = function() {
	this.removePussyToy();
	this.addToActorManuallyRemovedPussyToyRecord();
};

Game_Actor.prototype.afterEval_removeAnalToy = function() {
	this.removeAnalToy();
	this.addToActorManuallyRemovedAnalToyRecord();
};

Game_Actor.prototype.showEval_cant_removeToy = function() {
	return this.isWearingAnyToy() && (this.isInDownPose() || !this.hasFreeHand());
};
Game_Actor.prototype.skillDescription_cant_removeToy = function() {
	let text = '';

	let isInDownPose = this.isInDownPose();
	let hasNoFreeHand = !this.hasFreeHand();
	
	if(isInDownPose) 
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	else if(hasNoFreeHand) 
		text += TextManager.SkillDescriptionHandsBusy + '\n';
	
	return text;
};

///////////////
// Use Orgasm Skill
///////////////
Game_Actor.prototype.useOrgasmSkill = function() {
	let target = this; 	
	let skillId = SKILL_FEMALE_ORGASM_ONE_ID;
	let numOfOrgasm = Math.floor(target.pleasure / target.orgasmPoint());
	
	if(numOfOrgasm >= 2) {
		skillId = SKILL_FEMALE_ORGASM_TWO_ID;
	}
	
	this.useAISkill(skillId, target);
	
};

//////////////
// Sex Skill Costs
/////////////////

Game_Actor.prototype.resetSexSkillConsUsage = function(sexAct) {
	let savedUsage = 0;
	
	if(!sexAct) { 
		this._tempSexSkillConsUsage = 0;
		this.removeStateCounter(STATE_SEX_COMBO_COUNT_ID);
	}
	else {
		this._tempSexSkillConsUsage++;
		if(this._tempSexSkillConsUsage >= 2) this.setStateCounter(STATE_SEX_COMBO_COUNT_ID, this._tempSexSkillConsUsage);
		
		if(sexAct == SEXACT_HANDJOB) savedUsage = this._tempHandjobConsUsage;
		else if(sexAct == SEXACT_BLOWJOB) savedUsage = this._tempBlowjobConsUsage;
		else if(sexAct == SEXACT_TITTYFUCK) savedUsage = this._tempTitjobConsUsage;
		else if(sexAct == SEXACT_RIMJOB) savedUsage = this._tempRimjobConsUsage;
		else if(sexAct == SEXACT_FOOTJOB) savedUsage = this._tempFootjobConsUsage;
		else if(sexAct == SEXACT_PUSSYSEX) savedUsage = this._tempPussySexConsUsage;
		else if(sexAct == SEXACT_ANALSEX) savedUsage = this._tempAnalSexConsUsage;
	}

	this._tempHandjobConsUsage = 0;
	this._tempBlowjobConsUsage = 0;
	this._tempTitjobConsUsage = 0;
	this._tempRimjobConsUsage = 0;
	this._tempFootjobConsUsage = 0;
	this._tempPussySexConsUsage = 0;
	this._tempAnalSexConsUsage = 0;
	
	if(!sexAct) { return; }
	else {
		if(sexAct == SEXACT_HANDJOB) this._tempHandjobConsUsage = savedUsage + 1;
		else if(sexAct == SEXACT_BLOWJOB) this._tempBlowjobConsUsage = savedUsage + 1;
		else if(sexAct == SEXACT_TITTYFUCK) this._tempTitjobConsUsage = savedUsage + 1;
		else if(sexAct == SEXACT_RIMJOB) this._tempRimjobConsUsage = savedUsage + 1;
		else if(sexAct == SEXACT_FOOTJOB) this._tempFootjobConsUsage = savedUsage + 1;
		else if(sexAct == SEXACT_PUSSYSEX) this._tempPussySexConsUsage = savedUsage + 1;
		else if(sexAct == SEXACT_ANALSEX) this._tempAnalSexConsUsage = savedUsage + 1;
	}
};

Game_Actor.prototype.skillSex_staminaCost = function(baseCost, dexMultipler) {
	let cost = baseCost + this.dex * dexMultipler;
	cost *= this.ssc;
	return Math.round(cost);
};


Game_Actor.prototype.skillCost_karrynPetting = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(20, 0.4);
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1.15 ** this._tempSexSkillConsUsage;
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynKiss = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(30, 0.5) * this.passiveKissSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1.15 ** this._tempSexSkillConsUsage;
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynCockPetting = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(40, 0.6) * this.passiveHandjobSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1.15 ** this._tempSexSkillConsUsage;
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynCockStare = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(20, 0.2);
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1.15 ** this._tempSexSkillConsUsage;
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynOnaniInBattleSkills = function() {
	let cost = 30 + (this.dex * 0.6);
	cost *= 1 + this.masturbateLvl() * 0.1;
	cost *= this.ssc;
	return Math.round(cost);
};

//Dex multi 1
Game_Actor.prototype.skillCost_karrynHandjob = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(20, 1) * this.passiveHandjobSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempHandjobConsUsage > 0) usageMultipler *= 1.25 ** this._tempHandjobConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynBlowjob = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(25, 1) * this.passiveBlowjobSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempBlowjobConsUsage > 0) usageMultipler *= 1.25 ** this._tempBlowjobConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynTittyFuck = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(30, 1.1) * this.passiveTittyFuckSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempTitjobConsUsage > 0) usageMultipler *= 1.25 ** this._tempTitjobConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynRimjob = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(25, 1) * this.passiveRimjobSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempRimjobConsUsage > 0) usageMultipler *= 1.25 ** this._tempRimjobConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynFootjob = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(30, 1.1) * this.passiveFootjobSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempFootjobConsUsage > 0) usageMultipler *= 1.25 ** this._tempFootjobConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};


Game_Actor.prototype.skillCost_karrynPussySex = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(40, 1.25) * this.passivePussySexSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempPussySexConsUsage > 0) usageMultipler *= 1.25 ** this._tempPussySexConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};
Game_Actor.prototype.skillCost_karrynAnalSex = function(karrynSkillUse) {
	let cost = this.skillSex_staminaCost(40, 1.25) * this.passiveAnalSexSkillCostRate();
	let usageMultipler = 1;
	if(karrynSkillUse && this._tempAnalSexConsUsage > 0) usageMultipler *= 1.25 ** this._tempAnalSexConsUsage;
	if(karrynSkillUse && this._tempSexSkillConsUsage > 0) usageMultipler *= 1 + (0.1 * this._tempSexSkillConsUsage);
	return cost * usageMultipler;
};

///////////
// Sex Skill Passive Requirement

Game_Actor.prototype.karrynKissSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_KISS_PEOPLE_TWO_ID);
};
Game_Actor.prototype.karrynCockStareSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_KARRYN_STARE_COCK_ONE_ID);
};
Game_Actor.prototype.karrynCockPetSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_HJ_COUNT_THREE_ID);
};
Game_Actor.prototype.karrynHandjobSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_HJ_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynRimjobSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_RIMJOB_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynFootjobSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_FOOTJOB_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynBlowjobSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_BJ_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynTittyFuckSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_TITTYFUCK_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynPussySexSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_PUSSY_SEX_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynAnalSexSkillPassiveRequirement = function() {
	return this.hasPassive(PASSIVE_ANAL_SEX_COUNT_TWO_ID);
};
Game_Actor.prototype.karrynHasAnySexSkill = function() {
	return this.karrynKissSkillPassiveRequirement() || this.karrynCockStareSkillPassiveRequirement() || this.karrynCockPetSkillPassiveRequirement() || this.karrynHandjobSkillPassiveRequirement() || this.karrynRimjobSkillPassiveRequirement() || this.karrynFootjobSkillPassiveRequirement() || this.karrynBlowjobSkillPassiveRequirement() || this.karrynTittyFuckSkillPassiveRequirement() || this.karrynPussySexSkillPassiveRequirement() || this.karrynAnalSexSkillPassiveRequirement();
};

/////////////
//Remove States Before Sex

Game_Actor.prototype.removeStatesBeforeSex = function() {
	this.removeStatesBeforeSexExceptFallen();
	this.removeState(STATE_FALLEN_ID);
	this.resetAttackSkillConsUsage();
};

Game_Actor.prototype.removeStatesBeforeSexExceptFallen = function() {
	this.removeState(STATE_OFFBALANCE_ID);
	//this.removeState(STATE_WEAKEN_ID);
	//this.removeState(STATE_VULNERABLE_ID);
	this.removeState(STATE_CAUTIOUS_STANCE_ID);
	this.removeState(STATE_GUARD_ID);
	this.removeState(STATE_COUNTER_STANCE_ID);
	if(!this.hasEdict(EDICT_SPEC_SENSUAL_MIND_EOTM)) this.removeState(STATE_EYE_OF_THE_MIND_ID);
	this.removeState(STATE_KI_ID);
	this.removeState(STATE_FOCUS_ID);
	this.removeState(STATE_COCK_KICK_CRIT_BONUS_ID);
	this.removeState(STATE_BONUS_CRIT_CHANCE_ID);
	this.removeState(STATE_BONUS_PIERCE_DMG_ID);
	this.removeState(STATE_BONUS_SLASH_DMG_ID);
	this.removeState(STATE_BONUS_BLUNT_DMG_ID);
	
};


/////////////
//////////////
// Sex Skill Selector
/////////////////////
//////////////////

/////////
// Kiss
/////////

Game_Actor.prototype.showEval_karrynKissSkill = function() {
	let hasPassive = this.karrynKissSkillPassiveRequirement();
	if(!hasPassive) return false;
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	let bodySlotAvailable = this.canGetKissed(KISS_LVL_ONE);
	let isThereValidTarget = this.isThereValidTargetForKiss(true);
	let meetDesireReq = this.mouthDesire >= this.kissingMouthDesireRequirement(KISS_LVL_ONE, true);
	
	return isThereValidTarget && bodySlotAvailable && meetDesireReq;
};

Game_Actor.prototype.showEval_cant_karrynKissSkill = function() {
	let hasPassive = this.karrynKissSkillPassiveRequirement();
	if(!hasPassive) return false;
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	let bodySlotAvailable = this.canGetKissed(KISS_LVL_ONE);
	let isThereValidTarget = this.isThereValidTargetForKiss(true);
	let meetDesireReq = this.mouthDesire >= this.kissingMouthDesireRequirement(KISS_LVL_ONE, true);

	return (!bodySlotAvailable || !isThereValidTarget || !meetDesireReq);
};

Game_Actor.prototype.skillDescription_cant_karrynKissSkill = function() {
	let text = '';

	let bodySlotAvailable = this.canGetKissed(KISS_LVL_ONE);
	let isThereValidTarget = this.isThereValidTargetForKiss(true);
	let meetDesireReq = this.mouthDesire >= this.kissingMouthDesireRequirement(KISS_LVL_ONE, true);
	
	if(!meetDesireReq)
		text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
	else if(!bodySlotAvailable) 
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	else if(!isThereValidTarget) 
		text += TextManager.SkillDescriptionNoValidTargets + '\n';
	
	return text;
};

Game_Actor.prototype.selectorKarryn_kiss = function(target) { 
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	if(abortConditions) return false;

	let skillId = SKILL_KARRYN_KISS_ONE_ID;
	if(this.mouthDesire >= this.kissingMouthDesireRequirement(KISS_LVL_TWO)) 
		skillId = SKILL_KARRYN_KISS_TWO_ID;
	this.setKissedChange(true, target, true);
	this.useAISkill(skillId, target);
	this.addToKissUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

////////
// Cock Stare
//////////

Game_Actor.prototype.showEval_karrynCockStareSkill = function() {
	let hasPassive = this.karrynCockStareSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let isThereValidTarget = this.isThereValidTargetForCockStare();
	let isInCombatPose = this.isInCombatPose();
	if(isInCombatPose) {
		if(this.getCockStareReactionScore() >= VAR_DEF_RS_LV2_REQ && this.isInSexPose() && this.isBodySlotFree(MOUTH_ID))
			isInCombatPose = false;
	}
	let meetException = false;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle() && this.isInToiletSittingPose();
	}
	
	return isThereValidTarget && (isInCombatPose || meetException);
};
Game_Actor.prototype.showEval_cant_karrynCockStareSkill = function() {
	let hasPassive = this.karrynCockStareSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle() && this.isInToiletSittingPose();
	}

	return !this.showEval_karrynCockStareSkill() && meetException;
};

Game_Actor.prototype.skillDescription_cant_karrynCockStareSkill = function() {
	let text = '';

	let isThereValidTarget = this.isThereValidTargetForCockStare();
	let isInCombatPose = this.isInCombatPose();
	
	if(!isInCombatPose) 
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	else if(!isThereValidTarget) 
		text += TextManager.SkillDescriptionNoValidTargets + '\n';
	
	return text;
};

Game_Actor.prototype.selectorKarryn_cockStare = function(target) { 
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	else if($gameParty.isInGloryBattle && !target._guest_atStall) 
		abortConditions = true;
	if(abortConditions) return false;

	let skillId = SKILL_KARRYN_COCK_STARE_ONE_ID;
	
	if($gameParty.isInGloryBattle)
		skillId = SKILL_KARRYN_COCK_STARE_TOILET_ID;
	
	this.useAISkill(skillId, target);
	return skillId;
};

////////
// Cock Petting
// Pet Cock
//////////

Game_Actor.prototype.showEval_karrynCockPettingSkill = function() {
	let hasPassive = this.karrynCockPetSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let bodySlotAvailable = (this.canPetWithRightHand() || this.canPetWithLeftHand());
	let isThereValidTarget = this.isThereValidTargetForCockPetting();
	let meetDesireReq = this.cockDesire >= this.cockPettingCockDesireRequirement(true);
	let isInCombatPose = this.isInCombatPose();
	if(isInCombatPose) {
		if(this.isInSexPose() && bodySlotAvailable)
			isInCombatPose = false;
	}
	
	let meetException = false;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return isThereValidTarget && bodySlotAvailable && meetDesireReq && (isInCombatPose || meetException);
};

Game_Actor.prototype.showEval_cant_karrynCockPettingSkill = function() {
	let hasPassive = this.karrynCockPetSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}

	return !this.showEval_karrynCockPettingSkill() && meetException;
};

Game_Actor.prototype.skillDescription_cant_karrynCockPettingSkill = function() {
	let text = '';

	let bodySlotAvailable = (this.canPetWithRightHand() || this.canPetWithLeftHand());
	let isThereValidTarget = this.isThereValidTargetForCockPetting();
	let meetDesireReq = this.cockDesire >= this.cockPettingCockDesireRequirement(true);
	let isInCombatPose = this.isInCombatPose();
	
	if(!isInCombatPose) 
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	else if(!meetDesireReq)
		text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
	else if(!bodySlotAvailable) 
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	else if(!isThereValidTarget) 
		text += TextManager.SkillDescriptionNoValidTargets + '\n';
	
	return text;
};

Game_Actor.prototype.selectorKarryn_cockPetting = function(target) { 
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	else if($gameParty.isInGloryBattle && !target._guest_atStall) 
		abortConditions = true;
	if(abortConditions) return false;

	let skillId = SKILL_KARRYN_COCK_PETTING_ONE_ID;
	
	if($gameParty.isInGloryBattle)
		skillId = SKILL_KARRYN_COCK_PETTING_TOILET_ID;
	
	this.useAISkill(skillId, target);
	this.addToCockPetUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////
// Handjob
//////////

Game_Actor.prototype.showEval_karrynHandjobSkill = function() {
	let hasPassive = this.karrynHandjobSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForHandjob(true);
	let meetDesireReq = this.cockDesire >= this.handjobCockDesireRequirement(true);
	
	if(!hasPassive || !meetDesireReq) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return isThereValidTarget && meetException;
};

Game_Actor.prototype.showEval_cant_karrynHandjobSkill = function() {
	let hasPassive = this.karrynHandjobSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return !this.showEval_karrynHandjobSkill() && meetException;
};

Game_Actor.prototype.skillDescription_cant_karrynHandjobSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotAvailableForPenis(RIGHT_HAND_ID) || this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
	let isThereValidTarget = this.isThereValidTargetForHandjob(true);
	let meetDesireReq = this.cockDesire >= this.handjobCockDesireRequirement(true);
	
	if(!bodySlotAvailable) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget)
			text += TextManager.SkillDescriptionNoValidTargets + '\n';
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_handjob = function(target) {
	let skillId = false;
	let targetIsRightHand = false;
	let targetIsLeftHand = false;
	let inSexPose = this.isInSexPose();
	let bodySlotAvailable = this.isBodySlotAvailableForPenis(RIGHT_HAND_ID) || this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
	
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	else if($gameParty.isInGloryBattle && !target._guest_atStall) 
		abortConditions = true;
	if(abortConditions) return false;

	
	//First, if the target is right or left hand pose target, then use the skill.
	if(this.rightHandjobPoseSkillsIsEnabled() && target == this.rightHandjobPoseTarget())
		targetIsRightHand = true;
	if(this.leftHandjobPoseSkillsIsEnabled() && target == this.leftHandjobPoseTarget())
		targetIsLeftHand = true;
		
	//Use the skill on pose target
	if(targetIsRightHand || targetIsLeftHand) {
		if($gameParty.isInGloryBattle) {
			if(target.isValidTargetForHandjobOrBlowjob_gloryBattle())
				skillId = SKILL_KARRYN_TOILET_HANDJOB_POSESKILL_ID;
			else return false;
		}
		else
			skillId = SKILL_KARRYN_HANDJOB_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if($gameParty.isInGloryBattle) {
		if(target._guest_atStall === GLORY_LEFT_STALL_ID)
			skillId = SKILL_KARRYN_INVITE_TOILET_RIGHTHAND_ID;
		else if(target._guest_atStall === GLORY_RIGHT_STALL_ID)
			skillId = SKILL_KARRYN_INVITE_TOILET_LEFTHAND_ID;
		
		if(skillId)
			this.useAISkill(skillId, target);
		else 
			console.error('Error with selectorKarryn_handjob: no skillId');
	}
	else if(Karryn.isInDefeatedLevel1Pose() && bodySlotAvailable) {
		if(this.isBodySlotAvailableForPenis(RIGHT_HAND_ID))
			skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_RIGHT_HJ_ID;
		else if(this.isBodySlotAvailableForPenis(LEFT_HAND_ID))
			skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_LEFT_HJ_ID;
		
		if(skillId)
			target.useAISkill(skillId, this);
	}
	else if(inSexPose && bodySlotAvailable) {
		if(this.isBodySlotAvailableForPenis(RIGHT_HAND_ID))
			skillId = SKILL_KARRYN_INVITE_RIGHTHAND_ID;
		else if(this.isBodySlotAvailableForPenis(LEFT_HAND_ID))
			skillId = SKILL_KARRYN_INVITE_LEFTHAND_ID;
		else 
			console.error('Error with selectorKarryn_handjob: no body slot available');
		
		if(skillId)
			this.useAISkill(skillId, target);
		else 
			console.error('Error with selectorKarryn_handjob: no skillId');
	}
	//So Karryn is currently not in a sex pose, then start a sex pose with this target
	else if(!target.isInAPose() && bodySlotAvailable){
		skillId = SKILL_KARRYN_START_STANDING_HJ_ID;
		this.useAISkill(skillId, target);
	}
	else return false;
	
	this.addToHandjobUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////
// Rimjob
//////////

Game_Actor.prototype.showEval_karrynRimjobSkill = function() {
	if(ConfigManager.disableRimjobs) return false;
	let hasPassive = this.karrynRimjobSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForRimjob(true);
	let meetDesireReq = this.mouthDesire >= this.rimjobMouthDesireRequirement(true);
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	if(!hasPassive || !meetDesireReq) return false;
	
	return isThereValidTarget;
};

Game_Actor.prototype.showEval_cant_karrynRimjobSkill = function() {
	if(ConfigManager.disableRimjobs) return false;
	let hasPassive = this.karrynRimjobSkillPassiveRequirement();
	if(!hasPassive) return false;
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	return !this.showEval_karrynRimjobSkill();
};

Game_Actor.prototype.skillDescription_cant_karrynRimjobSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotFree(MOUTH_ID);
	let isThereValidTarget = this.isThereValidTargetForRimjob(true);
	let meetDesireReq = this.mouthDesire >= this.rimjobMouthDesireRequirement(true);
	let actorIsInSexPose = this.isInSexPose();
	
	if(actorIsInSexPose) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget)
			text += TextManager.SkillDescriptionNoValidTargets + '\n';
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_rimjob = function(target) {
	let skillId = false;
	let isPoseTarget = false;
	let bodySlotAvailable = this.isBodySlotFree(MOUTH_ID);
	
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	if(abortConditions) return false;

	
	if(this.rimjobPoseSkillsIsEnabled() && target == this.rimjobPoseTarget())
		isPoseTarget = true;

	if(isPoseTarget) {
		skillId = SKILL_KARRYN_RIMJOB_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if(!target.isInAPose() && bodySlotAvailable){
		skillId = SKILL_KARRYN_START_RIMJOB_ID;
		this.useAISkill(skillId, target);
	}
	else return false;
	
	this.addToRimjobUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////
// Footjob
//////////

Game_Actor.prototype.showEval_karrynFootjobSkill = function() {
	let hasPassive = this.karrynFootjobSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForFootjob(true);
	let meetDesireReq = this.cockDesire >= this.footjobCockDesireRequirement(true);
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	if(!hasPassive || !meetDesireReq) return false;
	
	return isThereValidTarget;
};

Game_Actor.prototype.showEval_cant_karrynFootjobSkill = function() {
	let hasPassive = this.karrynFootjobSkillPassiveRequirement();
	if(!hasPassive) return false;
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	return !this.showEval_karrynFootjobSkill();
};

Game_Actor.prototype.skillDescription_cant_karrynFootjobSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotFree(FEET_ID);
	let isThereValidTarget = this.isThereValidTargetForFootjob(true);
	let meetDesireReq = this.cockDesire >= this.footjobCockDesireRequirement(true);
	let actorIsInSexPose = this.isInSexPose();
	
	if(actorIsInSexPose) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget)
			text += TextManager.SkillDescriptionNoValidTargets + '\n';
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_footjob = function(target) {
	let skillId = false;
	let isPoseTarget = false;
	let bodySlotAvailable = this.isBodySlotFree(FEET_ID);
	
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	if(abortConditions) return false;

	
	if(this.footjobPoseSkillsIsEnabled() && target == this.footjobPoseTarget())
		isPoseTarget = true;

	if(isPoseTarget) {
		skillId = SKILL_KARRYN_FOOTJOB_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if(!target.isInAPose() && bodySlotAvailable){
		skillId = SKILL_KARRYN_START_FOOTJOB_ID;
		this.useAISkill(skillId, target);
	}
	else return false;
	
	this.addToFootjobUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////////
// Blowjob
////////////

Game_Actor.prototype.showEval_karrynBlowjobSkill = function() {
	let hasPassive = this.karrynBlowjobSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForBlowjob(true);
	let meetDesireReq = this.mouthDesire >= this.blowjobMouthDesireRequirement(true) && this.cockDesire >= this.blowjobCockDesireRequirement(true);
	
	if(!hasPassive || !meetDesireReq) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return isThereValidTarget && meetException;
};

Game_Actor.prototype.showEval_cant_karrynBlowjobSkill = function() {
	let hasPassive = this.karrynBlowjobSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return !this.showEval_karrynBlowjobSkill() && meetException;
};

Game_Actor.prototype.skillDescription_cant_karrynBlowjobSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotAvailableForPenis(MOUTH_ID);
	let isThereValidTarget = this.isThereValidTargetForBlowjob(true);
	let meetDesireReq = this.mouthDesire >= this.blowjobMouthDesireRequirement(true) && this.cockDesire >= this.blowjobCockDesireRequirement(true);
	
	if(!bodySlotAvailable) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget) {
			if(this.isInSlimeAnalPiledriverSexPose())
				text += TextManager.SkillDescriptionCantDoThis + '\n';
			else
				text += TextManager.SkillDescriptionNoValidTargets + '\n';
		}
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_blowjob = function(target) {
	let skillId = false;
	let isPoseTarget = false;
	let inSexPose = this.isInSexPose();
	let bodySlotAvailable = this.isBodySlotAvailableForPenis(MOUTH_ID);
	
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	else if($gameParty.isInGloryBattle && !target._guest_atStall) 
		abortConditions = true;
	if(abortConditions) return false;
	
	if(this.blowjobPoseSkillsIsEnabled() && target == this.blowjobPoseTarget())
		isPoseTarget = true;

	if(isPoseTarget) {
		if($gameParty.isInGloryBattle)
			skillId = SKILL_KARRYN_TOILET_BLOWJOB_POSESKILL_ID;
		else
			skillId = SKILL_KARRYN_BLOWJOB_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if(Karryn.isInDefeatedLevel1Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_MOUTH_ID;
		target.useAISkill(skillId, this);
	}
	else if(Karryn.isInDefeatedLevel3Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_MOUTH_ID;
		target.useAISkill(skillId, this);
	}
	else if(Karryn.isInDefeatedLevel4Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_MOUTH_ID;
		target.useAISkill(skillId, this);
	}
	else if($gameParty.isInGloryBattle) {
		skillId = SKILL_KARRYN_INVITE_TOILET_MOUTH_ID;
		this.useAISkill(skillId, target);
	}
	else if(Karryn.isInYetiPaizuriSexPose() && target.isYetiType && target.isUsingBodySlotPenis(BOOBS_ID) && target.isPoseMaster() && !target.isUsingBodySlotPenis(MOUTH_ID)) {
		skillId = SKILL_KARRYN_INVITE_PAIZURI_FERA_ID;
		this.useAISkill(skillId, target);
	}
	else if(inSexPose && bodySlotAvailable) {
		skillId = SKILL_KARRYN_INVITE_MOUTH_ID;
		this.useAISkill(skillId, target);
	}
	else if(!target.isInAPose() && bodySlotAvailable){
		skillId = SKILL_KARRYN_START_KNEELING_BJ_ID;
		this.useAISkill(skillId, target);
	}
	else return false;
	
	this.addToBlowjobUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////////
// Titty fuck
////////////

Game_Actor.prototype.showEval_karrynTittyFuckSkill = function() {
	let hasPassive = this.karrynTittyFuckSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForTittyFuck(true);
	let meetDesireReq = this.boobsDesire >= this.tittyFuckBoobsDesireRequirement(true) && this.cockDesire >= this.tittyFuckCockDesireRequirement(true);
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	if(!hasPassive || !meetDesireReq) return false;
	
	return isThereValidTarget;
};

Game_Actor.prototype.showEval_cant_karrynTittyFuckSkill = function() {
	let hasPassive = this.karrynTittyFuckSkillPassiveRequirement();
	if(!hasPassive) return false;
	let hideSkillCondition = $gameParty.isInGloryBattle;
	if(hideSkillCondition) return false;
	
	return !this.showEval_karrynTittyFuckSkill();
};

Game_Actor.prototype.skillDescription_cant_karrynTittyFuckSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotAvailableForPenis(BOOBS_ID);
	let isThereValidTarget = this.isThereValidTargetForTittyFuck(true);
	let meetDesireReq = this.boobsDesire >= this.tittyFuckBoobsDesireRequirement(true) && this.cockDesire >= this.tittyFuckCockDesireRequirement(true);

	if(!bodySlotAvailable) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget)
			text += TextManager.SkillDescriptionNoValidTargets + '\n';
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_tittyfuck = function(target) {
	let skillId = false;
	let isPoseTarget = false;
	let inSexPose = this.isInSexPose();
	let bodySlotAvailable = this.isBodySlotAvailableForPenis(BOOBS_ID);
	
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	if(abortConditions) return false;

	
	if(this.tittyFuckPoseSkillsIsEnabled() && target == this.tittyFuckPoseTarget())
		isPoseTarget = true;

	if(isPoseTarget) {
		skillId = SKILL_KARRYN_TITTYFUCK_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if(Karryn.isInDefeatedLevel3Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_BOOBS_ID;
		target.useAISkill(skillId, this);
	}
	else if(inSexPose && bodySlotAvailable) {
		skillId = SKILL_KARRYN_INVITE_TITTYFUCK_ID;
		this.useAISkill(skillId, target);
	}
	else if(!target.isInAPose() && bodySlotAvailable){
		if(target.isYetiType) {
			skillId = SKILL_ENEMY_POSESTART_YETIPAIZURI_ID;
			target.useAISkill(skillId, this);
		}
		else {
			skillId = SKILL_KARRYN_START_LAYING_TITTYFUCK_ID;
			this.useAISkill(skillId, target);
		}
	}
	else return false;
	
	this.addToTittyFuckUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////////
// Pussy Sex
////////////

Game_Actor.prototype.showEval_pussySexSkills = function() {
	let hasPassive = this.karrynPussySexSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForPussySex(true);
	let meetDesireReq = this.pussyDesire >= this.pussySexPussyDesireRequirement(true) && this.cockDesire >= this.pussySexCockDesireRequirement(true);
	
	if(!hasPassive || !meetDesireReq) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return isThereValidTarget && meetException;
};

Game_Actor.prototype.showEval_cant_karrynPussySexSkill = function() {
	let hasPassive = this.karrynPussySexSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return !this.showEval_pussySexSkills() && meetException;
};

Game_Actor.prototype.skillDescription_cant_karrynPussySexSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotAvailableForPenis(PUSSY_ID);
	let isThereValidTarget = this.isThereValidTargetForPussySex(true);
	let isWet = this.isWet;
	let meetDesireReq = this.pussyDesire >= this.pussySexPussyDesireRequirement(true) && this.cockDesire >= this.pussySexCockDesireRequirement(true);
	
	if(!bodySlotAvailable) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget) {
			if(isWet) {
				if(this.isInSlimeAnalPiledriverSexPose())
					text += TextManager.SkillDescriptionCantDoThis + '\n';
				else
					text += TextManager.SkillDescriptionNoValidTargets + '\n';
			}
			else
				text += TextManager.SkillDescriptionNotWet + '\n';
		}
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_pussySex = function(target) {
	let skillId = false;
	let isPoseTarget = false;
	let inSexPose = this.isInSexPose();
	let bodySlotAvailable = this.isBodySlotAvailableForPenis(PUSSY_ID);

	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	else if($gameParty.isInGloryBattle && !target._guest_atStall) 
		abortConditions = true;
	if(abortConditions) return false;

	if(this.pussySexPoseSkillsIsEnabled() && target == this.pussySexPoseTarget())
		isPoseTarget = true;

	if(isPoseTarget) {
		if($gameParty.isInGloryBattle)
			skillId = SKILL_KARRYN_TOILET_PUSSYSEX_POSESKILL_ID;
		else
			skillId = SKILL_KARRYN_PUSSYSEX_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if(Karryn.isInDefeatedLevel2Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_PUSSY_ID;
		target.useAISkill(skillId, this);
	}
	else if(Karryn.isInDefeatedLevel3Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_PUSSY_ID;
		target.useAISkill(skillId, this);
	}
	else if(Karryn.isInDefeatedLevel4Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_PUSSY_ID;
		target.useAISkill(skillId, this);
	}
	else if($gameParty.isInGloryBattle) {
		skillId = SKILL_KARRYN_INVITE_TOILET_PUSSY_ID;
		this.useAISkill(skillId, target);
	}
	else if(inSexPose && bodySlotAvailable) {
		skillId = SKILL_KARRYN_INVITE_PUSSY_ID;
		this.useAISkill(skillId, target);
	}
	else if(!target.isInAPose() && bodySlotAvailable){
		if(target.isWerewolfType) {
			skillId = SKILL_ENEMY_POSESTART_WEREWOLF_BACK_PUSSY_ID;
			target.useAISkill(skillId, this);
		}
		else {
			skillId = SKILL_KARRYN_START_KARRYN_COWGIRL_ID;
			this.useAISkill(skillId, target);
		}
	}
	else return false;
	
	this.addToPussySexUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

///////////
// Anal Sex
////////////

Game_Actor.prototype.showEval_analSexSkills = function() {
	let hasPassive = this.karrynAnalSexSkillPassiveRequirement();
	let isThereValidTarget = this.isThereValidTargetForAnalSex(true);
	let meetDesireReq = this.buttDesire >= this.analSexButtDesireRequirement(true) && this.cockDesire >= this.analSexCockDesireRequirement(true);
	
	if(!hasPassive || !meetDesireReq) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return isThereValidTarget && meetException;
};


Game_Actor.prototype.showEval_cant_karrynAnalSexSkill = function() {
	let hasPassive = this.karrynAnalSexSkillPassiveRequirement();
	if(!hasPassive) return false;
	
	let meetException = true;
	if($gameParty.isInGloryBattle) {
		meetException = this.showEval_karrynSexSkills_gloryBattle();
	}
	
	return !this.showEval_analSexSkills() && meetException;
};

Game_Actor.prototype.skillDescription_cant_karrynAnalSexSkill = function() {
	let text = '';

	let bodySlotAvailable = this.isBodySlotAvailableForPenis(ANAL_ID);
	let isThereValidTarget = this.isThereValidTargetForAnalSex(true);
	let meetDesireReq = this.buttDesire >= this.analSexButtDesireRequirement(true) && this.cockDesire >= this.analSexCockDesireRequirement(true);
	
	if(!bodySlotAvailable) {
		text += TextManager.SkillDescriptionCantDoThis + '\n';
	}
	else {
		if(!meetDesireReq)
			text += TextManager.SkillDescriptionNotEnoughDesire + '\n';
		else if(!isThereValidTarget)
			text += TextManager.SkillDescriptionNoValidTargets + '\n';
	}
	
	return text;
};

Game_Actor.prototype.selectorKarryn_analSex = function(target) {
	let skillId = false;
	let isPoseTarget = false;
	let inSexPose = this.isInSexPose();
	let bodySlotAvailable = this.isBodySlotAvailableForPenis(ANAL_ID);
	
	let abortConditions = false;
	if(!target.isAlive() || this.isInDownFallDownPose() || this.isInDownOrgasmPose() || this.isInDownStaminaPose()) 
		abortConditions = true;
	else if($gameParty.isInGloryBattle && !target._guest_atStall) 
		abortConditions = true;
	if(abortConditions) return false;

	
	if(this.analSexPoseSkillsIsEnabled() && target == this.analSexPoseTarget())
		isPoseTarget = true;

	if(isPoseTarget) {
		if($gameParty.isInGloryBattle)
			skillId = SKILL_KARRYN_TOILET_ANALSEX_POSESKILL_ID;
		else
			skillId = SKILL_KARRYN_ANALSEX_POSESKILL_ID;
		this.useAISkill(skillId, target);
	}
	else if(Karryn.isInDefeatedLevel2Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_ANAL_ID;
		target.useAISkill(skillId, this);
	}
	else if(Karryn.isInDefeatedLevel3Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_ANAL_ID;
		target.useAISkill(skillId, this);
	}
	else if(Karryn.isInDefeatedLevel4Pose() && bodySlotAvailable) {
		skillId = SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_ANAL_ID;
		target.useAISkill(skillId, this);
	}
	else if($gameParty.isInGloryBattle) {
		skillId = SKILL_KARRYN_INVITE_TOILET_ANAL_ID;
		this.useAISkill(skillId, target);
	}
	else if(inSexPose && bodySlotAvailable) {
		skillId = SKILL_KARRYN_INVITE_ANAL_ID;
		this.useAISkill(skillId, target);
	}
	else if(!target.isInAPose() && bodySlotAvailable){
		if(target.isSlimeType) {
			skillId = SKILL_ENEMY_POSESTART_SLIMEPILEDRIVER_ID;
			target.useAISkill(skillId, this);
		}
		else if(target.isWerewolfType) {
			skillId = SKILL_ENEMY_POSESTART_WEREWOLF_BACK_ANAL_ID;
			target.useAISkill(skillId, this);
		}
		else {
			skillId = SKILL_KARRYN_START_REVERSE_COWGIRL_ID;
			this.useAISkill(skillId, target);
		}
	}
	else return false;
	
	this.addToAnalSexUsageCountRecord(target);
	this.addEnemyEdgingControlStateToTarget(target);
	return skillId;
};

//-------------------------------------
// Tachie related below

//////////
///////////
// Sex Petting
// Petted and PettedPettingOnly, two types
// petting = true for yes, false for removing
/////////////
////////////

Game_Actor.prototype.setKissedChange = function (kissed, enemy, karrynSkillUsage) {
	let poseName = this.poseName;

	if(poseName == POSE_KICKCOUNTER) {
		if(this._cockPussyTarget != enemy || !kissed) {
			this.emoteKickCounterPose(false, true, false);
		}
		else {
			this.emoteKickCounterPose(true, false, karrynSkillUsage);
		}
		
	} 
	else if(poseName == POSE_YETI_CARRY) {
		if(this._cockPussyTarget != enemy || !kissed) {
			this.emoteYetiCarryPose(false, true, false);
		}
		else {
			this.emoteYetiCarryPose(true, false, karrynSkillUsage);
		}
		
	} 
	else if(poseName == POSE_WAITRESS_SEX) {
		if(kissed && enemy) {
			this.resetTachieStraw();
		}
	}
	
	//this.emoteMasterManager();
};

Game_Actor.prototype.setOrgasmTachieChange = function () {
	let poseName = this.poseName;
	
	if(poseName == POSE_KICKCOUNTER) {
		this.setKissedChange(false, false);
	}
	else if(poseName == POSE_WAITRESS_SEX) {
		this.resetTachieStraw();
	}
};

////////////
/////////////
// Sex Insert
// insert = true for yes, false for removing
///////////////
/////////////

////////////////
// Mouth Insert
////////////////
Game_Actor.prototype.setMouthInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;	
	let bodyId = MOUTH_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockMouthTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockMouthTarget = false;
	}
	
	let poseName = this.poseName;
	if(poseName == POSE_THUGGANGBANG) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setTachieSemenRightArmExtension('hj_');
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.setMaxTachieSemenCockMouthId(0);
			this.resetTachieCockMouth();
			this.setTachieSemenRightArmExtension('empty_');
		}
		this.emoteThugGangbangPose();
	}
	
	else if(poseName == POSE_GUARDGANGBANG) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteGuardGangbangPose();
	}
	
	else if(poseName == POSE_DEFEATED_GUARD) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
			this.setBodyPartUnavailable(NIPPLES_ID);
			this.setBodyPartUnavailable(BOOBS_ID);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
			this.setBodyPartFree(NIPPLES_ID);
			this.setBodyPartFree(BOOBS_ID);
		}
		this.emoteDefeatedGuardPose();
	}
	else if(poseName == POSE_WEREWOLF_BACK) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteWerewolfBackPose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteDefeatedLevelThreePose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteDefeatedLevelFourPose();
	}
	
	else if(poseName == POSE_GOBLINCUNNILINGUS) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setTachieCockMouthInFrontOfFace(false);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteGoblinCunnilingusPose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
			this.emoteDefeatedLevelOnePose(true);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
			this.emoteDefeatedLevelOnePose(false);
		}
	}
	else if(poseName == POSE_KARRYN_COWGIRL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteKarrynCowgirlPose();
	}
	else if(poseName == POSE_LIZARDMAN_COWGIRL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
			this.setTachieSemenFaceExtension('fera_');
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
			this.setTachieSemenFaceExtension('normal_');
		}
		this.emoteLizardmanCowgirlPose();
	}
	
	else if(poseName == POSE_BJ_KNEELING) {
		if(insert) {
			let bjName = '';
			if(enemy.isNerdType) {
				if(enemyCock.includes('black'))
					bjName = 'human_fat_black';
				else if(enemyCock.includes('pale'))
					bjName = 'human_fat_pale';
				else
					bjName = 'human_fat_normal';
			}
			else if(enemyCock.includes('human')) {
				if(enemyCock.includes('black'))
					bjName = 'human_black';
				else if(enemyCock.includes('pale'))
					bjName = 'human_pale';
				else
					bjName = 'human_normal';
			}
			else if(enemy.isOrcType) {
				if(enemyCock.includes('dark'))
					bjName = 'orc_dark';
				else
					bjName = 'orc_normal';
			}
			else if(enemy.isGoblinType) {
				if(enemyCock.includes('dark'))
					bjName = 'goblin_dark';
				else
					bjName = 'goblin_normal';
			}
			else if(enemy.isLizardmanType) {
				if(enemyCock.includes('dark'))
					bjName = 'lizardman_dark';
				else
					bjName = 'lizardman_normal';
			}
			else if(enemy.isWerewolfType) {
				bjName = 'werewolf';
			}
			else {
				bjName = 'human_normal';
			}
			
			this.setTachieFrontA(bjName);
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		}
	}
	else if(poseName == POSE_PAIZURI_LAYING) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteLayingPaizuriPose();
	}
	else if(poseName == POSE_ORC_PAIZURI) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteOrcPaizuriPose();
	}
	else if(poseName == POSE_WAITRESS_SEX) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
			this.resetTachieStraw();
			this.emoteWaitressSexPose();
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
			this.emoteWaitressSexPose();
		}
	}
	
	else if(poseName == POSE_FOOTJOB) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			
			this.setTachieSemenFaceExtension('far_');
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			this.resetTachieCockMouth();
			this.setTachieSemenFaceExtension('close_');
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteFootjobPose();
	}
	else if(poseName == POSE_REVERSE_COWGIRL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			
			if(this.isWearingGlovesAndHat()) {
				this.setTachieHat('far_1');
			}
			else {
				this.resetTachieHat();
			}
			
			this.setTachieHead('far');
			this.setTachieSemenFaceExtension('far_');
			this.setMaxTachieSemenCockMouthId(1);
		} else {
			if(this.isWearingGlovesAndHat()) {
				this.setTachieHat('close_1');
			}
			else {
				this.resetTachieHat();
			}
			
			this.resetTachieCockMouth();
			this.setTachieHead('close');
			this.setTachieSemenFaceExtension('close_');
			this.setMaxTachieSemenCockMouthId(0);
		}
		this.emoteReverseCowgirlPose();
	}
	
	
	else if(poseName == POSE_SLIME_PILEDRIVER_ANAL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockMouth(enemyCock + '_cen');
			else
				this.setTachieCockMouth(enemyCock);
			this.setMaxTachieSemenCockMouthId(1);
			this.emoteSlimePiledriverPose();
		} else {
			this.resetTachieCockMouth();
			this.setMaxTachieSemenCockMouthId(0);
			this.emoteSlimePiledriverPose();
		}
	}
	else if(poseName == POSE_YETI_PAIZURI) {
		this.emoteYetiPaizuriPose();
	}
	else if(poseName == POSE_RECEPTIONIST) {
		
	}

	//this.emoteMasterManager();
};


/////////
// Boobs Insert
/////////////

Game_Actor.prototype.setBoobsInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = BOOBS_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockBoobsTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockBoobsTarget = false;
	}
	
	let poseName = this.poseName;
	
	if(poseName == POSE_THUGGANGBANG) {
		if(insert) {
			this.setTachieCockBoobsInFrontOfBoobs(true);
			this.setTachieBoobs('zuri');
			this.setTachieSemenBoobsExtension('zuri_');
			if(Karryn.isCensored())
				this.setTachieCockBoobs(enemyCock + '_cen');
			else
				this.setTachieCockBoobs(enemyCock);
			
			if(enemyCock.includes('human_')) {
				if(enemyCock.includes('pale')) 
					this.setTachieFrontB('arms_human_pale');
				else if(enemyCock.includes('black')) 
					this.setTachieFrontB('arms_human_black');
				else
					this.setTachieFrontB('arms_human_normal');
			}
			else if(enemyCock.includes('goblin_')) {
				if(enemyCock.includes('dark')) 
					this.setTachieFrontB('arms_goblin_dark');
				else
					this.setTachieFrontB('arms_goblin_normal');
			}
			else if(enemyCock.includes('orc_')) {
				if(enemyCock.includes('dark')) 
					this.setTachieFrontB('arms_orc_dark');
				else
					this.setTachieFrontB('arms_orc_normal');
			}
			else if(enemyCock.includes('lizardman_')) {
				if(enemyCock.includes('dark')) 
					this.setTachieFrontB('arms_lizardman_dark');
				else
					this.setTachieFrontB('arms_lizardman_normal');
			}
			else {
				this.setTachieFrontB('arms_human_normal');
			}
			this.setMaxTachieSemenCockBoobsId(1);
			
		} else {
			this.setMaxTachieSemenCockBoobsId(0);
			this.setTachieBoobs('empty');
			this.resetTachieFrontB();
			this.resetTachieCockBoobs();
			this.resetTachieSemenBoobsExtension();
		}
		this.emoteThugGangbangPose();
	}
	else if(poseName == POSE_KARRYN_COWGIRL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockBoobs(enemyCock + '_cen');
			else
				this.setTachieCockBoobs(enemyCock);
			this.setMaxTachieSemenCockBoobsId(1);
		} else {
			this.setMaxTachieSemenCockBoobsId(0);
			this.resetTachieCockBoobs();
			this.resetTachieSemenBoobsExtension();
		}
		this.emoteKarrynCowgirlPose();
	}
	
	else if(poseName == POSE_DEFEATED_GUARD) {
		if(insert) {
			this.setTachieSemenBoobsExtension('zuri_');
			if(Karryn.isCensored()) {
				this.setTachieCockBoobs(enemyCock + '_cen');
				//this.setTachieBoobs('zuri_' + enemyCock + '_cen');
			}
			else {
				this.setTachieCockBoobs(enemyCock);
				//this.setTachieBoobs('zuri_' + enemyCock);
			}
			this.setMaxTachieSemenCockBoobsId(1);
			this.setBodyPartUnavailable(MOUTH_ID);
		} else {
			this.resetTachieCockBoobs();
			this.setMaxTachieSemenCockBoobsId(0);
			this.setTachieBoobs('empty');
			this.setTachieSemenBoobsExtension('empty_');
			this.setBodyPartFree(MOUTH_ID);
		}
		this.emoteDefeatedGuardPose();
	}
	
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored()) {
				this.setTachieCockBoobs(enemyCock + '_cen');
			}
			else {
				this.setTachieCockBoobs(enemyCock);
			}
			
			if(enemyCock.includes('human_')) {
				if(enemyCock.includes('pale')) 
					this.setTachieBackA('arms_human_pale');
				else if(enemyCock.includes('black')) 
					this.setTachieBackA('arms_human_black');
				else
					this.setTachieBackA('arms_human_normal');
				
			}
			else if(enemyCock.includes('goblin_')) {
				if(enemyCock.includes('dark')) 
					this.setTachieBackA('arms_goblin_dark');
				else
					this.setTachieBackA('arms_goblin_normal');
			}
			else if(enemyCock.includes('orc_')) {
				if(enemyCock.includes('dark')) 
					this.setTachieBackA('arms_orc_dark');
				else
					this.setTachieBackA('arms_orc_normal');
			}
			else if(enemyCock.includes('lizardman_')) {
				if(enemyCock.includes('dark')) 
					this.setTachieBackA('arms_lizardman_dark');
				else
					this.setTachieBackA('arms_lizardman_normal');
			}
			else if(enemyCock.includes('werewolf')) {
				this.setTachieBackA('arms_werewolf');
			}
			else {
				this.resetTachieBackA();
			}
				
			
			this.setTachieBoobs('zuri');
			if(this.isWearingGlovesAndHat())
				this.setTachieTie('zuri');
			this.setMaxTachieSemenCockBoobsId(1);
			this.setTachieSemenBoobsExtension('zuri_');
		} else {
			this.resetTachieCockBoobs();
			this.resetTachieBackA();
			this.setMaxTachieSemenCockBoobsId(0);
			this.setTachieBoobs('normal');
			if(this.isWearingGlovesAndHat())
				this.setTachieTie('normal');
			this.resetTachieSemenBoobsExtension();
		}
		this.emoteDefeatedLevelThreePose();
	}
	
	
	else if(poseName == POSE_GOBLINCUNNILINGUS) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockBoobs(enemyCock + '_cen');
			else
				this.setTachieCockBoobs(enemyCock);
			this.setTachieSemenBoobsExtension('paizuri_');
			this.setTachieSemenLeftArmExtension('paizuri_');
			this.setTachieSemenRightArmExtension('paizuri_');
			this.setMaxTachieSemenCockBoobsId(1);
		} else {
			this.resetTachieCockBoobs();
			this.resetTachieSemenBoobsExtension();
			this.resetTachieSemenLeftArmExtension();
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenCockBoobsId(0);
		}
		this.emoteGoblinCunnilingusPose();
	}
	else if(poseName == POSE_PAIZURI_LAYING) {
		if(insert) {
			this.resetTachieBackA();
			this.resetTachieFrontA();
			this.resetTachieFrontB();
			
			this.setMaxTachieSemenCockBoobsId(1);
			
			if(enemy.isNerdType) {
				if(enemyCock.includes('black'))
					this.setTachieFrontA('fat_black');
				else if(enemyCock.includes('pale'))
					this.setTachieFrontA('fat_pale');
				else
					this.setTachieFrontA('fat_normal');
				
				this.setTachieFrontB('pubes');
			}
			else if(enemyCock.includes('human')) {
				if(enemyCock.includes('black'))
					this.setTachieBackA('human_black');
				else if(enemyCock.includes('pale'))
					this.setTachieBackA('human_pale');
				else
					this.setTachieBackA('human_normal');
				
				this.setTachieFrontB('pubes');
			}
			else if(enemy.isOrcType) {
				if(enemyCock.includes('dark'))
					this.setTachieFrontA('orc_dark');
				else
					this.setTachieFrontA('orc_normal');
			}
			else if(enemy.isGoblinType) {
				if(enemyCock.includes('dark'))
					this.setTachieBackA('goblin_dark');
				else
					this.setTachieBackA('goblin_normal');
			}
			else if(enemy.isLizardmanType) {
				if(enemyCock.includes('dark'))
					this.setTachieBackA('lizardman_dark');
				else
					this.setTachieBackA('lizardman_normal');
			}
			else {
				this.setTachieBackA('human_normal');
				this.setTachieFrontB('pubes');
			}
			
			
			if(Karryn.isCensored())
				this.setTachieCockBoobs(enemyCock + '_cen');
			else
				this.setTachieCockBoobs(enemyCock);
		}
	}
	else if(poseName == POSE_ORC_PAIZURI) {
		if(insert) {
			let frontName = '';
			
			if(enemyCock.includes('dark'))
				frontName = 'orc_dark';
			else
				frontName = 'orc_normal';
			
			if(Karryn.isCensored())
				frontName += '_cen';
			
			this.setTachieFrontA(frontName);
			this.setMaxTachieSemenCockBoobsId(1);
		}
	}
	else if(poseName == POSE_YETI_PAIZURI) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockBoobs('yeti_cen');
			else
				this.setTachieCockBoobs('yeti');
			this.setMaxTachieSemenCockBoobsId(1);
		}
	}
	
	
	//this.emoteMasterManager();
};

///////////
// Pussy Insert
///////////////
Game_Actor.prototype.setPussyInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;	
	let bodyId = PUSSY_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockPussyTarget = enemy;
		this.removePussyToy();
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockPussyTarget = false;
	}
	
	let poseName = this.poseName;

	if(poseName == POSE_THUGGANGBANG) {
		if(insert) {
			if(enemyCock.includes('human_')) {
				if(enemyCock.includes('pale')) 
					this.setTachieFrontA('human_pale');
				else if(enemyCock.includes('black')) 
					this.setTachieFrontA('human_black');
				else
					this.setTachieFrontA('human_normal');
			}
			
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
		}
	}
	else if(poseName == POSE_RIMJOB) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
		}
	}
	else if(poseName == POSE_KICKCOUNTER) {
		if(insert) {
			let enemyBodyName = '';
			if(enemy.isOrcType) {
				if(enemyCock.includes('dark'))
					enemyBodyName = 'orc_dark';
				else
					enemyBodyName = 'orc_normal';
				this.setTachieBackA('head_' + enemyBodyName);
			}
			else if(enemy.isLizardmanType) {
				if(enemyCock.includes('dark'))
					enemyBodyName = 'lizardman_dark';
				else
					enemyBodyName = 'lizardman_normal';
				this.setTachieBackA('head_' + enemyBodyName);
			}
			else {
				if(enemyCock.includes('pale'))
					enemyBodyName = 'human_pale';
				else if(enemyCock.includes('black'))
					enemyBodyName = 'human_black';
				else
					enemyBodyName = 'human_normal';
			}
			
			this.setTachieBackB('hand_' + enemyBodyName);
			
			if(Karryn.isCensored()) {
				this.setTachieBackC('body_' + enemyBodyName + '_cen');
			}
			else {
				this.setTachieBackC('body_' + enemyBodyName);
			}
			
			this.setMaxTachieSemenCockPussyId(1);
		} 
	}
	else if(poseName == POSE_DEFEATED_GUARD) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		}
	}
	
	
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		}
		this.emoteDefeatedLevelTwoPose();
	}
	
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored()) {
				this.setTachieCockPussy(enemyCock + '_cen');
				this.setTachieHolePussy('open_cen');
			}
			else {
				this.setTachieCockPussy(enemyCock);
				this.setTachieHolePussy('open');
			}
			this.setMaxTachieSemenCockPussyId(1);
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
			this.resetTachieSemenCockPussyExtension();
		}
		this.emoteDefeatedLevelThreePose();
	}
	
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
		}
		this.emoteDefeatedLevelFourPose();
	}
	
	else if(poseName == POSE_YETI_PAIZURI) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
		}
		this.emoteYetiPaizuriPose();
	}
	else if(poseName == POSE_YETI_CARRY) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
		} 
	}
	
	else if(poseName == POSE_PAIZURI_LAYING) {
		if(insert) {
			this.setMaxTachieSemenCockPussyId(1);
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
		} 
		else {
			this.setMaxTachieSemenCockPussyId(0);
			this.resetTachieCockPussy();
		}
	}
	else if(poseName == POSE_GOBLINCUNNILINGUS) {
		if(insert) {
			let frontName = '';
			if(enemyCock.includes('dark'))
				frontName = 'goblin_sex_dark';
			else
				frontName = 'goblin_sex_normal';
			
			if(Karryn.isCensored())
				frontName += '_cen';
			
			this.setTachieFrontA(frontName);
			this.setMaxTachieSemenCockPussyId(1);
			this.setSpankablePose(false);
			this.setBodyPartUnavailable(BUTT_ID);
			this.setBodyPartUnavailable(ANAL_ID);
		} 
		else {
			this.setMaxTachieSemenCockPussyId(0);
			this.resetTachieFrontA();
			
			this.setSpankablePose(true);
			this.setBodyPartFree_PettingOnly(BUTT_ID);
			this.setBodyPartFree_PettingOnly(ANAL_ID);
		}
	}
	else if(poseName == POSE_LIZARDMAN_COWGIRL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setTachieBackA(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
		} 
	}
	else if(poseName == POSE_GUARDGANGBANG) {
		if(insert) {
			let frontName = 'guard_normal';
			
			if(enemyCock.includes('pale'))
				frontName = 'guard_pale';
			else if(enemyCock.includes('black'))
				frontName = 'guard_black';
			
			if(Karryn.isCensored())
				frontName += '_cen';
			
			this.setTachieFrontA(frontName);
			this.setMaxTachieSemenCockPussyId(1);
			
			if(frontName.includes('black'))
				this.setTachieSemenWetExtension('black_');
			else
				this.resetTachieSemenWetExtension();
		} 
	}
	
	
	else if(poseName == POSE_WAITRESS_SEX) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			this.setMaxTachieSemenCockPussyId(1);
			this.setTachieBody(2);
		} else {
			this.resetTachieCockPussy();
			this.setMaxTachieSemenCockPussyId(0);
		}
	}
	else if(poseName == POSE_SLIME_PILEDRIVER_ANAL) {
		if(insert) {
			if(Karryn.isCensored() && enemyCock != 'slime')
				this.setTachieCockPussy(enemyCock + '_cen');
			else
				this.setTachieCockPussy(enemyCock);
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			if(enemyCock == 'slime') {
				this.setTachieSemenCockPussyExtension('slime_');
			}
			else {
				this.resetTachieSemenCrotchExtension();
			}
			this.setMaxTachieSemenCrotchId(0);
			this.setMaxTachieSemenCockPussyId(1);
			
		} else {
			this.resetTachieCockPussy();
			//this.resetTachieHolePussy();
			this.setTachieSemenCrotchExtension('open_');
			this.setMaxTachieSemenCrotchId(1);
			this.setMaxTachieSemenCockPussyId(0);
		}
	}

	else if(poseName == POSE_RECEPTIONIST) {
		if(insert) {
			this.setMaxTachieSemenCockPussyId(1);
		} else {
			this.setMaxTachieSemenCockPussyId(0);
		}
	}

	//this.emoteMasterManager();
};

////////////
// Anal Insert
////////////////
Game_Actor.prototype.setAnalInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = ANAL_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockAnalTarget = enemy;
		this.removeAnalToy();
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockAnalTarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_KICKCOUNTER) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
			this.setMaxTachieSemenCockAnalId(1);
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
		}
	}
	else if(poseName == POSE_RIMJOB) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
			this.setMaxTachieSemenCockAnalId(1);
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
		}
	}
	else if(poseName == POSE_SLIME_PILEDRIVER_ANAL) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
		} 
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored()) {
				this.setTachieCockAnal(enemyCock + '_cen');
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieCockAnal(enemyCock);
				this.setTachieHoleAnus('open');
			}
			this.setMaxTachieSemenCockAnalId(1);
			this.setTachieSemenAnalExtension('open_');
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
			if(Karryn.isCensored()) {
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieHoleAnus('open');
			}
			this.setTachieSemenAnalExtension('open_');
		}
		this.emoteDefeatedLevelTwoPose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored()) {
				this.setTachieCockAnal(enemyCock + '_cen');
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieCockAnal(enemyCock);
				this.setTachieHoleAnus('open');
			}
			this.setMaxTachieSemenCockAnalId(1);
			this.setTachieSemenAnalExtension('open_');
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieSemenCockAnalExtension();
			if(Karryn.isCensored()) {
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieHoleAnus('open');
			}
			this.setTachieSemenAnalExtension('open_');
		}
		this.emoteDefeatedLevelThreePose();
	}
	
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
			this.setMaxTachieSemenCockAnalId(1);
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
		}
		this.emoteDefeatedLevelFourPose();
	}
	else if(poseName == POSE_YETI_PAIZURI) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
			this.setMaxTachieSemenCockAnalId(1);
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
		}
		this.emoteYetiPaizuriPose();
	}
	else if(poseName == POSE_YETI_CARRY) {
		if(insert) {
			if(Karryn.isCensored()) {
				this.setTachieCockAnal(enemyCock + '_cen');
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieCockAnal(enemyCock);
				this.setTachieHoleAnus('open');
			}
			this.setMaxTachieSemenCockAnalId(1);
			this.setTachieSemenAnalExtension('open_');
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieSemenCockAnalExtension();
			if(Karryn.isCensored()) {
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieHoleAnus('open');
			}
			this.setTachieSemenAnalExtension('open_');
		}
		
		this.emoteYetiCarryPose();
	}
	
	else if(poseName == POSE_GUARDGANGBANG) {
		if(insert) {
			if(Karryn.isCensored()) {
				this.setTachieCockAnal(enemyCock + '_cen');
				this.setTachieHoleAnus('open_cen');
			}
			else {
				this.setTachieCockAnal(enemyCock);
				this.setTachieHoleAnus('open');
			}
			this.setMaxTachieSemenCockAnalId(1);
			this.setTachieSemenAnalExtension('open_');
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieSemenCockAnalExtension();
				this.setTachieHoleAnus('open');
			this.setTachieSemenAnalExtension('open_');
		}
	}
	
	else if(poseName == POSE_DEFEATED_GUARD) {
		if(insert) {
			this.resetTachieHoleAnus();
			if(Karryn.isCensored()) {
				this.setTachieCockAnal(enemyCock + '_cen');
			}
			else {
				this.setTachieCockAnal(enemyCock);
			}
			this.setTachieHoleAnus('open');
			this.setMaxTachieSemenCockAnalId(1);
			this.setTachieSemenAnalExtension('open_');
		} else {
			this.resetTachieCockAnal();
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieSemenCockAnalExtension();
			this.setTachieHoleAnus('open');
			this.setTachieSemenAnalExtension('open_');
		}
	}
	
	
	else if(poseName == POSE_PAIZURI_LAYING) {
		if(insert) {
			this.setMaxTachieSemenCockAnalId(1);
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
		} 
		else {
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieCockAnal();
		}
	}
	else if(poseName == POSE_WAITRESS_SEX) {
		if(insert) {
			this.setMaxTachieSemenCockAnalId(1);
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
			this.setTachieBody(2);
		} 
		else {
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieCockAnal();
		}
	}
	else if(poseName == POSE_LIZARDMAN_COWGIRL) {
		if(insert) {
			this.setMaxTachieSemenCockAnalId(1);
			if(Karryn.isCensored())
				this.setTachieCockAnal(enemyCock + '_cen');
			else
				this.setTachieCockAnal(enemyCock);
			this.setTachieHoleAnus('open');
			this.setTachieSemenAnalExtension('open_');
		} 
		else {
			this.setMaxTachieSemenCockAnalId(0);
			this.resetTachieCockAnal();
			this.resetTachieHoleAnus();
			this.resetTachieSemenAnalExtension();
		}
	}
	
	else if(poseName == POSE_RECEPTIONIST) {
		if(insert) {
			this.setMaxTachieSemenCockAnalId(1);
		} else {
			this.setMaxTachieSemenCockAnalId(0);
		}
	}
	
	

	//this.emoteMasterManager();
};


/////////////////
// Right Hand Insert
///////////////////
Game_Actor.prototype.setRightHandInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = RIGHT_HAND_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockRightArmTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockRightArmTarget = false;
	}
	let poseName = this.poseName;
	

	if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(!this.isWearingGlovesAndHat())
				this.setTachieRightBoob('hj_naked');
			else
				this.setTachieRightBoob('hj');
			if(Karryn.isCensored())
				this.setTachieCockRightArm(enemyCock + '_cen');
			else
				this.setTachieCockRightArm(enemyCock);
			this.setTachieSemenRightBoobExtension('hj_');
			this.setTachieSemenRightArmExtension('hj_');
			this.setMaxTachieSemenCockRightArmId(1);
		} else {
			this.resetTachieRightBoob();
			this.resetTachieCockRightArm();
			this.resetTachieSemenRightBoobExtension();
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenCockRightArmId(0);
		}
		this.emoteDefeatedLevelOnePose(false);
	}
	else if(poseName == POSE_HJ_STANDING) {
		if(insert) {
			let frontName = 'human_normal';
			if(enemy.isNerdType) {
				if(enemyCock.includes('black'))
					frontName = 'nerd_human_black';
				else if(enemyCock.includes('pale'))
					frontName = 'nerd_human_pale';
				else
					frontName = 'nerd_human_normal';
			}
			else if(enemyCock.includes('human')) {
				if(enemyCock.includes('black'))
					frontName = 'human_black';
				else if(enemyCock.includes('pale'))
					frontName = 'human_pale';
				else
					frontName = 'human_normal';
			}
			else if(enemy.isOrcType) {
				if(enemyCock.includes('dark'))
					frontName = 'orc_dark';
				else
					frontName = 'orc_normal';
			}
			else if(enemy.isGoblinType) {
				if(enemyCock.includes('dark'))
					frontName = 'goblin_dark';
				else
					frontName = 'goblin_normal';
			}
			else if(enemy.isLizardmanType) {
				if(enemyCock.includes('dark'))
					frontName = 'lizardman_dark';
				else
					frontName = 'lizardman_normal';
			}
			else {
				frontName = 'human_normal';
			}
			
			this.setTachieFrontA(frontName);
			
			if(Karryn.isCensored())
				this.setTachieCockRightArm(enemyCock + '_cen');
			else
				this.setTachieCockRightArm(enemyCock);
			
			this.setMaxTachieSemenCockRightArmId(1);
		}
	}
	else if(poseName == POSE_WAITRESS_SEX) {
		if(insert) {
			this.setTachieRightArm('hj');
			if(Karryn.isCensored())
				this.setTachieCockRightArm('hj_' + enemyCock + '_cen');
			else
				this.setTachieCockRightArm('hj_' + enemyCock);
			this.setTachieSemenRightArmExtension('hj_');
			this.setMaxTachieSemenCockRightArmId(1);
		}
		else {
			this.setTachieRightArm('empty');
			this.resetTachieCockRightArm();
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenCockRightArmId(0);
		}
		this.emoteWaitressSexPose();
	}
	else if(poseName == POSE_PAIZURI_LAYING) {
		if(insert) {
			if(this.isWearingGlovesAndHat())
				this.setTachieBody(2);
			else
				this.setTachieBody('naked_2');
			this.setTachieSemenBoobsExtension('body2_');
			this.setMaxTachieSemenRightArmId(1);
			this.setMaxTachieSemenCockRightArmId(1);
			
			if(Karryn.isCensored())
				this.setTachieCockRightArm(enemyCock + '_cen');
			else
				this.setTachieCockRightArm(enemyCock);
		} 
		else {
			if(this.isWearingGlovesAndHat())
				this.setTachieBody(1);
			else
				this.setTachieBody('naked_1');
			this.setTachieSemenBoobsExtension('body1_');
			this.setMaxTachieSemenRightArmId(0);
			this.setMaxTachieSemenCockRightArmId(0);
			
			this.resetTachieCockRightArm();
		}
		this.emoteLayingPaizuriPose();
	}
	else if(poseName == POSE_ORC_PAIZURI) {
		if(insert) {
			if(this.isWearingGlovesAndHat())
				this.setTachieRightArm('hj');
			else
				this.setTachieRightArm('hj_naked');
			this.setTachieSemenRightArmExtension('hj_');
			this.setMaxTachieSemenCockRightArmId(1);
			
			if(Karryn.isCensored())
				this.setTachieCockRightArm(enemyCock + '_cen');
			else
				this.setTachieCockRightArm(enemyCock);
		} 
		else {
			this.resetTachieRightArm();
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenCockRightArmId(0);
			this.resetTachieCockRightArm();
		}
		this.emoteOrcPaizuriPose();
	}
	else if(poseName == POSE_REVERSE_COWGIRL) {
		if(insert) {
			this.setTachieSemenRightArmExtension('hj_');
			this.setMaxTachieSemenRightArmId(1);
			this.setMaxTachieSemenCockRightArmId(1);
			
			if(Karryn.isCensored())
				this.setTachieCockRightArm(enemyCock + '_cen');
			else
				this.setTachieCockRightArm(enemyCock);
		} 
		else {
			this.resetTachieRightArm();
			this.setMaxTachieSemenRightArmId(0);
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenCockRightArmId(0);
			this.resetTachieCockRightArm();
		}
		this.emoteReverseCowgirlPose();
	}	
	else if(poseName == POSE_LIZARDMAN_COWGIRL) {
		if(insert) {
			this.setTachieSemenRightArmExtension('hj_');
			this.setMaxTachieSemenCockRightArmId(1);
			
			if(Karryn.isCensored())
				this.setTachieCockRightArm(enemyCock + '_cen');
			else
				this.setTachieCockRightArm(enemyCock);
		} 
		else {
			this.setTachieSemenRightArmExtension('normal_');
			this.setMaxTachieSemenCockRightArmId(0);
			this.resetTachieCockRightArm();
		}
		this.emoteLizardmanCowgirlPose();
	}
	else if(poseName == POSE_TOILET_SITTING) {
		if(insert) {
			//this.setMaxTachieSemenCockRightArmId(1);
		} 
		else {
			this.setMaxTachieSemenCockRightArmId(0);
		}
	}
	
	//this.emoteMasterManager();
};

/////////////////
// Left Hand Insert
///////////////////
Game_Actor.prototype.setLeftHandInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;

	let bodyId = LEFT_HAND_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockLeftArmTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockLeftArmTarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_THUGGANGBANG) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenCockLeftArmId(1);
		} else {
			this.resetTachieCockLeftArm();
			this.setTachieSemenLeftArmExtension('empty_');
			this.setMaxTachieSemenCockLeftArmId(0);
		}
		this.emoteThugGangbangPose();
	}
	else if(poseName == POSE_BJ_KNEELING) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
			if(!this.isWearingGlovesAndHat())
				this.setTachieLeftArm('hj_naked');
			else 
				this.setTachieLeftArm('hj');
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenCockLeftArmId(1);
		} else {
			if(!this.isWearingGlovesAndHat()) 
				this.setTachieLeftArm('normal_naked');
			else 
				this.setTachieLeftArm('normal');
			this.resetTachieCockLeftArm();
			this.setTachieSemenLeftArmExtension('normal_');
			this.setMaxTachieSemenCockLeftArmId(0);
		}
		this.emoteKneelingBlowjobPose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(!this.isWearingGlovesAndHat())
				this.setTachieLeftBoob('hj_naked');
			else
				this.setTachieLeftBoob('hj');
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
			this.setTachieSemenLeftBoobExtension('hj_');
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenCockLeftArmId(1);
		} else {
			this.resetTachieLeftBoob();
			this.resetTachieCockLeftArm();
			this.resetTachieSemenLeftBoobExtension();
			this.resetTachieSemenLeftArmExtension();
			this.setMaxTachieSemenCockLeftArmId(0);
		}
		this.emoteDefeatedLevelOnePose(false);
	}
	else if(poseName == POSE_HJ_STANDING) {
		if(insert) {
			this.setTachieLeftArm('hj');
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenCockLeftArmId(1);
			
		} else {
			this.setTachieLeftArm('normal');
			this.resetTachieCockLeftArm();
			this.setTachieSemenLeftArmExtension('normal_');
			this.setMaxTachieSemenCockLeftArmId(0);
		}
		this.emoteStandingHandjobPose();
	}
	else if(poseName == POSE_FOOTJOB) {
		if(insert) {
			this.setTachieLeftArm('hj');
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenLeftArmId(1);
			this.setMaxTachieSemenCockLeftArmId(1);
			
		} else {
			this.setTachieLeftArm('normal');
			this.resetTachieCockLeftArm();
			this.setMaxTachieSemenLeftArmId(0);
			this.resetTachieSemenLeftArmExtension();
			this.setMaxTachieSemenCockLeftArmId(0);
		}
		this.emoteFootjobPose();
	}
	else if(poseName == POSE_ORC_PAIZURI) {
		if(insert) {
			if(this.isWearingGlovesAndHat())
				this.setTachieLeftArm('hj');
			else
				this.setTachieLeftArm('hj_naked');
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenCockLeftArmId(1);
			
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
		} 
		else {
			this.resetTachieLeftArm();
			this.resetTachieSemenLeftArmExtension();
			this.setMaxTachieSemenCockLeftArmId(0);
			this.resetTachieCockLeftArm();
		}
		this.emoteOrcPaizuriPose();
	}
	else if(poseName == POSE_REVERSE_COWGIRL) {
		if(insert) {
			this.setTachieSemenLeftArmExtension('hj_');
			this.setMaxTachieSemenCockLeftArmId(1);
			
			if(Karryn.isCensored())
				this.setTachieCockLeftArm(enemyCock + '_cen');
			else
				this.setTachieCockLeftArm(enemyCock);
		} 
		else {
			this.setTachieSemenLeftArmExtension('normal_');
			this.setMaxTachieSemenCockLeftArmId(0);
			this.resetTachieCockLeftArm();
		}
		this.emoteReverseCowgirlPose();
	}
	else if(poseName == POSE_TOILET_SITTING) {
		if(insert) {
			//this.setMaxTachieSemenCockLeftArmId(1);
		} 
		else {
			this.setMaxTachieSemenCockLeftArmId(0);
		}
	}
	
	else if(poseName == POSE_RECEPTIONIST) {
		
	}

	//this.emoteMasterManager();
};

////////////
// Feet Insert
////////////////
Game_Actor.prototype.setFeetInserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = FEET_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockFeetTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockFeetTarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_FOOTJOB) {
		if(insert) {
			let frontName = 'human_normal';
			if(enemy.isNerdType) {
				if(enemyCock.includes('black'))
					frontName = 'human_fat_black';
				else if(enemyCock.includes('pale'))
					frontName = 'human_fat_pale';
				else
					frontName = 'human_fat_normal';
			}
			else if(enemyCock.includes('human')) {
				if(enemyCock.includes('black'))
					frontName = 'human_black';
				else if(enemyCock.includes('pale'))
					frontName = 'human_pale';
				else
					frontName = 'human_normal';
			}
			else if(enemy.isOrcType) {
				if(enemyCock.includes('dark'))
					frontName = 'orc_dark';
				else
					frontName = 'orc_normal';
			}
			else if(enemy.isGoblinType) {
				if(enemyCock.includes('dark'))
					frontName = 'goblin_dark';
				else
					frontName = 'goblin_normal';
			}
			else if(enemy.isLizardmanType) {
				if(enemyCock.includes('dark'))
					frontName = 'lizardman_dark';
				else
					frontName = 'lizardman_normal';
			}
			else if(enemy.isWerewolfType) {
				frontName = 'werewolf';
			}
			else {
				frontName = 'human_normal';
			}
			
			this.setTachieFrontA(frontName);
			
			if(Karryn.isCensored())
				this.setTachieCockFeet(enemyCock + '_cen');
			else
				this.setTachieCockFeet(enemyCock);	
			
			this.setMaxTachieSemenCockFeetId(1);
		}
		
		
	}

	//this.emoteMasterManager();
};

////////
// Other Insert
Game_Actor.prototype.setOther1Inserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = OTHER_1_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockFrontATarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockFrontATarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontA('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontA('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontAId(1);
		} else {
			this.resetTachieFrontA();
			this.setMaxTachieSemenFrontAId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontA('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontA('rightchin_' + enemyCock);
			this.setMaxTachieSemenFrontAId(1);
		} else {
			this.resetTachieFrontA();
			this.setMaxTachieSemenFrontAId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontA('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontA('rightchin_' + enemyCock);
			if(this.isSlimeType) {
				this.setTachieSemenFrontAExtension('slime_')
			}
			else {
				this.resetTachieSemenFrontAExtension();
			}
			this.setMaxTachieSemenFrontAId(1);
		} else {
			this.resetTachieFrontA();
			this.resetTachieSemenFrontAExtension();
			this.setMaxTachieSemenFrontAId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontA('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontA('rightchin_' + enemyCock);
			if(this.isSlimeType) {
				this.setTachieSemenFrontAExtension('slime_')
			}
			else {
				this.resetTachieSemenFrontAExtension();
			}
			this.setMaxTachieSemenFrontAId(1);
		} else {
			this.resetTachieFrontA();
			this.resetTachieSemenFrontAExtension();
			this.setMaxTachieSemenFrontAId(0);
		}
	}
	
	else if(poseName == POSE_WAITRESS_SEX) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontA('chin_' + enemyCock + '_cen');
			else
				this.setTachieFrontA('chin_' + enemyCock);
			this.setMaxTachieSemenFrontAId(1);
		} else {
			this.resetTachieFrontA();
			this.setMaxTachieSemenFrontAId(0);
		}
	}
};

Game_Actor.prototype.setOther2Inserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = OTHER_2_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockFrontBTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockFrontBTarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontB('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontB('rightchin_' + enemyCock);
			this.setMaxTachieSemenFrontBId(1);
		} else {
			this.resetTachieFrontB();
			this.setMaxTachieSemenFrontBId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontB('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontB('rightchin_' + enemyCock);
			this.setMaxTachieSemenFrontBId(1);
		} else {
			this.resetTachieFrontB();
			this.setMaxTachieSemenFrontBId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontB('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontB('rightchin_' + enemyCock);
			if(this.isSlimeType) {
				this.setTachieSemenFrontBExtension('slime_')
			}
			else {
				this.resetTachieSemenFrontBExtension();
			}
			this.setMaxTachieSemenFrontBId(1);
		} else {
			this.resetTachieFrontB();
			this.resetTachieSemenFrontBExtension();
			this.setMaxTachieSemenFrontBId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontB('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontB('rightchin_' + enemyCock);
			if(this.isSlimeType) {
				this.setTachieSemenFrontBExtension('slime_')
			}
			else {
				this.resetTachieSemenFrontBExtension();
			}
			this.setMaxTachieSemenFrontBId(1);
		} else {
			this.resetTachieFrontB();
			this.resetTachieSemenFrontBExtension();
			this.setMaxTachieSemenFrontBId(0);
		}
	}
};

Game_Actor.prototype.setOther3Inserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = OTHER_3_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockFrontCTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockFrontCTarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontC('rightchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontC('rightchin_' + enemyCock);
			this.setMaxTachieSemenFrontCId(1);
		} else {
			this.resetTachieFrontC();
			this.setMaxTachieSemenFrontCId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontC('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontC('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontCId(1);
		} else {
			this.resetTachieFrontC();
			this.setMaxTachieSemenFrontCId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontC('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontC('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontCId(1);
		} else {
			this.resetTachieFrontC();
			this.resetTachieSemenFrontCExtension();
			this.setMaxTachieSemenFrontCId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontC('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontC('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontCId(1);
		} else {
			this.resetTachieFrontC();
			this.resetTachieSemenFrontCExtension();
			this.setMaxTachieSemenFrontCId(0);
		}
	}
};

Game_Actor.prototype.setOther4Inserted = function (insert, enemy) {
	if(!this.isInSexPose()) return;
	let bodyId = OTHER_4_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartPenis(bodyId);
		this._cockFrontDTarget = enemy;
	}
	else {
		this.setBodyPartFree(bodyId);
		this._cockFrontDTarget = false;
	}
	let poseName = this.poseName;
	
	if(poseName == POSE_DEFEATED_LEVEL1) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontD('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontD('leftchin_' + enemyCock);
		
			this.setMaxTachieSemenFrontDId(1);
		} else {
			this.resetTachieFrontD();
			this.setMaxTachieSemenFrontDId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontD('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontD('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontDId(1);
		} else {
			this.resetTachieFrontD();
			this.setMaxTachieSemenFrontDId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontD('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontD('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontDId(1);
		} else {
			this.resetTachieFrontD();
			this.resetTachieSemenFrontDExtension();
			this.setMaxTachieSemenFrontDId(0);
		}
	}
	else if(poseName == POSE_DEFEATED_LEVEL4) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieFrontD('leftchin_' + enemyCock + '_cen');
			else
				this.setTachieFrontD('leftchin_' + enemyCock);
			this.setMaxTachieSemenFrontDId(1);
		} else {
			this.resetTachieFrontD();
			this.resetTachieSemenFrontDExtension();
			this.setMaxTachieSemenFrontDId(0);
		}
	}
};


////////////
/////////////
// Other Insert
// insert = true for yes, false for removing
///////////////
/////////////

///////////////
// Pussy Cunni
///////////////

Game_Actor.prototype.setPussyCunni = function (insert, enemy) {
	if(!this.isInSexPose()) return;	
	let bodyId = PUSSY_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();

	if(insert) {
		this.setBodyPartTongue(bodyId);
	}
	else {
		this.setBodyPartFree(bodyId);
	}
	
	let poseName = this.poseName;

	if(poseName == POSE_GOBLINCUNNILINGUS) {
		if(insert) {
			if(enemyCock.includes('dark'))
				this.setTachieFrontA('goblin_cunni_dark');
			else
				this.setTachieFrontA('goblin_cunni_normal');
		} 
		else {
			this.resetTachieFrontA();
		}
	}

	//this.emoteMasterManager();
};

////////////////
// Mouth Rimming
////////////////
Game_Actor.prototype.setMouthRimming = function (insert, enemy) {
	if(!this.isInSexPose()) return;	
	let bodyId = MOUTH_ID;
	let enemyCock = false;
	if(enemy) enemyCock = enemy.enemyCock();
	
	if(insert) {
		this.setBodyPartAnus(bodyId);
	}
	else {
		this.setBodyPartFree(bodyId);
	}
	
	let poseName = this.poseName;
	
	if(poseName == POSE_RIMJOB) {
		if(insert) {
			if(enemy.isNerdType) {
				if(enemyCock.includes('pale')) 
					this.setTachieFrontB('human_fat_pale');
				else if(enemyCock.includes('black')) 
					this.setTachieFrontB('human_fat_black');
				else
					this.setTachieFrontB('human_fat_normal');
			}
			else if(enemyCock.includes('human')) {
				if(enemyCock.includes('pale')) 
					this.setTachieFrontB('human_pale');
				else if(enemyCock.includes('black')) 
					this.setTachieFrontB('human_black');
				else
					this.setTachieFrontB('human_normal');
			}
			else if(enemy.isOrcType) {
				if(enemyCock.includes('dark')) 
					this.setTachieFrontB('orc_dark');
				else
					this.setTachieFrontB('orc_normal');
			}
			else if(enemy.isGoblinType) {
				if(enemyCock.includes('dark')) 
					this.setTachieFrontB('goblin_dark');
				else
					this.setTachieFrontB('goblin_normal');
			}
			else if(enemy.isLizardmanType) {
				if(enemyCock.includes('dark')) 
					this.setTachieFrontB('lizardman_dark');
				else
					this.setTachieFrontB('lizardman_normal');
			}
			else 
				this.setTachieFrontB('human_normal');
		
		}
	}
	//this.emoteMasterManager();
};

/////////
// Toys
///////////

Game_Actor.prototype.setToyInserted_ClitToy_PinkRotor = function (insert) {
	if(!insert && !this.isWearingClitToy_PinkRotor()) return;
	
	let poseName = this.poseName;
	
	
};

Game_Actor.prototype.setToyInserted_PussyToy_PenisDildo = function (insert) {
	if(!insert && !this.isWearingPussyToy_PenisDildo()) return;
	
	let poseName = this.poseName;
	
	if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		}
		else {
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		}
		this.emoteDefeatedLevelTwoPose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		}
		else {
			if(Karryn.isCensored())
				this.setTachieHolePussy('open_cen');
			else
				this.setTachieHolePussy('open');
			this.setTachieSemenWetExtension('open_');
			this.setTachieSemenCrotchExtension('open_');
		}
		this.emoteDefeatedLevelThreePose();
	}
};

Game_Actor.prototype.setToyInserted_AnalToy_AnalBeads = function (insert) {
	if(!insert && !this.isWearingAnalToy_AnalBeads()) return;
	
	let poseName = this.poseName;
	
	if(poseName == POSE_DEFEATED_LEVEL2) {
		if(insert) {
			this.resetTachieHoleAnus();
			this.resetTachieSemenAnalExtension();
		}
		else {
			
		}
		this.emoteDefeatedLevelTwoPose();
	}
	else if(poseName == POSE_DEFEATED_LEVEL3) {
		if(insert) {
			this.resetTachieHoleAnus();
			this.resetTachieSemenAnalExtension();
		}
		else {
			
		}
		this.emoteDefeatedLevelThreePose();
	}
	else if(poseName == POSE_GUARDGANGBANG) {
		if(insert) {
			this.resetTachieHoleAnus();
			this.resetTachieSemenAnalExtension();
		}
		else {
			
		}
	}
	else if(poseName == POSE_DEFEATED_GUARD) {
		if(insert) {
			this.resetTachieHoleAnus();
			this.resetTachieSemenAnalExtension();
		}
		else {
			
		}
	}
	else if(poseName == POSE_YETI_CARRY) {
		if(insert) {
			this.resetTachieHoleAnus();
			this.resetTachieSemenAnalExtension();
		}
		else {
			
		}
	}
	
};



// Tachie related above
//--------------------------------------

////////////////////
//////////////////////
// Sex Skills
/////////////////////
///////////////////


////////////////////////
// Pre Damage Eval Code
///////////////////////


Game_Actor.prototype.preDmgEval_start_standingHJ1_righthand = function(target) { 
	this.setStandingHJSexPose(true);
	this.setRightHandInserted(true, target);
	this.enableRightHandjobPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_RightHand();
	target.setBodySlotWithPenis(RIGHT_HAND_ID);
	target.setValidTargetForHandjob();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_RIGHTHAND_ID]);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID]);
	
	target.addToEnemyHandjobCountRecord(this);
	
};

Game_Actor.prototype.preDmgEval_start_rimjob_mouth = function(target) { 
	this.setRimjobSexPose(true);
	this.setMouthRimming(true, target);
	this.enableRimjobPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_Rimming();
	target.setBodySlotWithAnus(MOUTH_ID);
	target.setValidTargetForRimjob();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_RIMJOB_ID]);
	target.setCanOnlyUsePoseSkills(true);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_LEFTARM_ID,SKILL_ENEMY_EJACULATE_RIGHTARM_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	target.setCanBeKissed(false);
	
	target.addToEnemyRimmedCountRecord(this);
	
};

Game_Actor.prototype.preDmgEval_start_footjob_feet = function(target) { 
	this.setFootjobSexPose(true);
	this.setFeetInserted(true, target);
	this.enableFootjobPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_Footjob();
	target.setBodySlotWithPenis(FEET_ID);
	target.setValidTargetForFootjob();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_FOOTJOB_ID]);
	target.setCanOnlyUsePoseSkills(true);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTLEG_ID,SKILL_ENEMY_EJACULATE_RIGHTLEG_ID]);
	target.setCanBeKissed(false);
	
	target.addToEnemyFootjobCountRecord(this);
};


Game_Actor.prototype.preDmgEval_start_bj_kneeling1_mouth = function(target) { 
	this.setKneelingBJSexPose(true);
	this.setMouthInserted(true, target);
	this.enableBlowjobPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_Blowjob();
	target.setBodySlotWithPenis(MOUTH_ID);
	target.setValidTargetForBlowjob();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_MOUTH_ID]);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID,SKILL_ENEMY_EJACULATE_MOUTH_ID]);
	
	target.addToEnemyBlowjobCountRecord(this);
	
};

Game_Actor.prototype.preDmgEval_start_tittyfuck_laying_boobs = function(target) { 
	this.setLayingTittyfuckSexPose(true);
	this.setBoobsInserted(true, target);
	this.enableTittyFuckPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_TittyFuck();
	target.setBodySlotWithPenis(BOOBS_ID);
	target.setValidTargetForTittyFuck();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_BOOBS_ID]);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	
	target.addToEnemyTittyFuckCountRecord(this);
	
};

Game_Actor.prototype.preDmgEval_start_karryn_cowgirl_pussy = function(target) { 
	this.setKarrynCowgirlSexPose();
	this.setPussyInserted(true, target);
	this.enablePussySexPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_Pussy();
	target.setBodySlotWithPenis(PUSSY_ID);
	target.setValidTargetForPussySex();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_PUSSY_ID]);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID,SKILL_ENEMY_EJACULATE_PUSSY_ID]);
	
	target.addToEnemyPussyFuckedCountRecord(this);
	
	this.emoteKarrynCowgirlPose();
};

Game_Actor.prototype.preDmgEval_start_reverse_cowgirl_anal = function(target) { 
	this.setReverseCowgirlSexPose(true);
	this.setAnalInserted(true, target);
	this.enableAnalSexPoseSkills(target);
	this.takeOffPanties();
	this.removeClothing();
	target.addStunTillEndOfTurnState();
	target.addJustJoinedState();
	target.setPoseStatusMaster();
	target.addSexPoseState_Anal();
	target.setBodySlotWithPenis(ANAL_ID);
	target.setValidTargetForAnalSex();
	target.setPoseSkillTarget(this);
	target.setPoseSkills([SKILL_ENEMY_POSESKILL_ANAL_ID]);
	target.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BUTT_ID,SKILL_ENEMY_EJACULATE_ANAL_ID,SKILL_ENEMY_EJACULATE_ANAL_ID]);
	
	target.addToEnemyAnalFuckedCountRecord(this);
	
	this.emoteReverseCowgirlPose();
};

///////////////////
// Damage formula
//////////////////////

//Kiss damage
Game_Actor.prototype.dmgFormula_karrynKiss = function(target, kissingLvl) {
	let baseDmg = BASEDMG_KISS_LVLONE; 
	let kissLvlDmg = 1;
	if(kissingLvl === KISS_LVL_TWO) {
		baseDmg = BASEDMG_KISS_LVLTWO;
		kissLvlDmg = 1.2;
	}
	let actorPettingRate = this.elementRate(ELEMENT_PETTING_ID);
	let actorStripRate = this.elementRate(ELEMENT_STRIP_ID);
	let actorMouthDesire = this.mouthDesire;
	let actorMouthSensitivity = this.mouthSensitivity();
	let actorKissSkillRating = this.kissSkillRating();
	let actorPassiveEffect = this.passiveKissSkillRate(target);
	
	let enemySkillLvl = target.kissLvl();
	let enemyWeakness = target.weaknessToKiss();
	
	let enemyPleasureGain = (this.dex * VAR_KARRYN_KISS_PLEASURE_DEX_MULTIPLER + baseDmg + this.level) * actorKissSkillRating * enemyWeakness * actorPassiveEffect * kissLvlDmg;
	if(target.end > this.dex) enemyPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
	
	let actorDesireGain = (baseDmg + enemySkillLvl) * actorPettingRate;
	let actorPleasureFeedback = (actorDesireGain + target.dex + target.enemyLvl() * 0.5) * (1 + enemySkillLvl * 0.1) * actorMouthSensitivity * kissLvlDmg;
	if(this.end > target.dex) actorPleasureFeedback *= (1 - ((this.end - target.dex) / this.end) * 0.5);
	actorPleasureFeedback *= VAR_KARRYN_PLEASURE_FEEDBACK_REDUCER;
	
	let clothingDmg = (target.dex + enemySkillLvl) * actorStripRate;

	let result = target.result();
	result.pleasureFeedback = actorPleasureFeedback;
	result.pleasureDamage = enemyPleasureGain;
	result.clothingDamage = clothingDmg;
	result.desireAreaDamage = actorDesireGain * 0.4;
	result.desireRandomDamage = actorDesireGain * 0.6;
	result.desireCockWeight = 3;
	result.desireTarget = AREA_MOUTH;

	let cutInId = false;
	let enemyCock = target.enemyCock();

	//this.setSpriteBattlerPosToMouth();
	if(kissingLvl === KISS_LVL_ONE) {
		if(enemyCock.includes('normal')) 
			cutInId = CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID;
		else if(enemyCock.includes('pale')) 
			cutInId = CUTIN_KARRYN_KISS_ONE_HUMAN_PALE_ID;
		else if(enemyCock.includes('black')) 
			cutInId = CUTIN_KARRYN_KISS_ONE_HUMAN_BLACK_ID;
		else
			cutInId = CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID;
		this.setTachieCutIn(cutInId);
	}
	else if(kissingLvl === KISS_LVL_TWO) {
		if(enemyCock.includes('normal')) 
			cutInId = CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID;
		else if(enemyCock.includes('pale')) 
			cutInId = CUTIN_KARRYN_KISS_TWO_HUMAN_PALE_ID;
		else if(enemyCock.includes('black')) 
			cutInId = CUTIN_KARRYN_KISS_TWO_HUMAN_BLACK_ID;
		else
			cutInId = CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID;
		this.setTachieCutIn(cutInId);
	}
	
	target.addToEnemyKissedCountRecord(this);
	if(actorPleasureFeedback > 0) this.addToActorMouthPleasureRecord(actorPleasureFeedback);
	target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_KISSING);
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_KISSING);
	
	//this.emoteMasterManager();
	
	return 0;
};

Game_Actor.prototype.afterEval_karrynKiss = function(target, kissLvl) {
	target.addState(STATE_ENEMY_KISSED_ID);

	let dexExpGain = 80;
	if(kissLvl == KISS_LVL_TWO) dexExpGain *= 1.3;

	this.gainStaminaExp(15, target.enemyExperienceLvl());
	this.gainDexterityExp(dexExpGain, target.enemyExperienceLvl());
	
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(JUST_SKILLTYPE_KARRYN_KISSING);
};

//Cock Stare
Game_Actor.prototype.afterEval_karrynCockStare = function(target) {
	let cockStareReactionScore = this.getCockStareReactionScore();
	let cockStarelvl3 = cockStareReactionScore >= VAR_DEF_RS_LV3_REQ;
	let cockStarelvl2 = cockStareReactionScore >= VAR_DEF_RS_LV2_REQ;
	let cockStarelvl1 = cockStareReactionScore >= VAR_DEF_RS_LV1_REQ;
	let cockStarelvl0 = cockStareReactionScore < VAR_DEF_RS_LV1_REQ;
	
	let targetIsCurrentlyErect = target.isErect;
	
	let cockDesireValue = 0;
	let targetShrinkChance = -1;
	let targetAngryChance = -1;
	
	if(cockStarelvl3) {
		cockDesireValue = Math.round(25 + this.level + this.cockiness * 0.1);
		if(Math.randomInt() < 0.25) {
			this.addHornyState();
		}
		target.addHornyState();		
	}
	else if(cockStarelvl2) {
		cockDesireValue = Math.round(12 + this.level * 0.7 + this.cockiness * 0.05);
		if(Math.randomInt() < 0.05) {
			this.addHornyState();
		}
	}
	else if(cockStarelvl1) {
		cockDesireValue = -1 * Math.round(12 + this.level * 0.7 + this.cockiness * 0.1);
		cockDesireValue -= Math.randomInt(Math.abs(cockDesireValue * 0.5));
		targetShrinkChance = 45;
		targetAngryChance = 10;
	}
	else if(cockStarelvl0) {
		cockDesireValue = -1 * Math.round(25 + this.level + this.cockiness * 0.25);
		cockDesireValue -= Math.randomInt(Math.abs(cockDesireValue * 0.5));
		targetShrinkChance = 80;
		targetAngryChance = 30;
	}
	
	if(targetShrinkChance > 0) {
		if(target.hasVirginPrefix() || target.hasElitePrefix() || target.hasAngryPrefix()) {
			targetShrinkChance *= 3;
		}
		else if(target.hasBigPrefix() || target.hasGoodPrefix() || target.hasDrunkPrefix()) {
			targetShrinkChance *= 2;
		}
		
		if(targetShrinkChance > Math.randomInt(100)) {
			if($gameParty.isInGloryBattle && !target.isAroused()) {
				let degenAmt = Math.ceil(target.mhp / target.gloryBattle_calculatePatience());
				target._hp = Math.max(1, target._hp - degenAmt * 1.5);
			}
			else {
				target.setPleasure(Math.round(target.pleasure * 0.33));
			}
		}
	}
	
	
	if(targetAngryChance > 0) {
		if(target.hasAngryPrefix() || target.hasElitePrefix()) {
			targetAngryChance *= 3;
		}
		else if(target.hasSadoPrefix() || target.hasBigPrefix() || target.hasGoodPrefix()) {
			targetAngryChance *= 2;
		}
		else if(target.hasBadPrefix() || target.hasHornyPrefix() || target.hasVirginPrefix()) {
			targetAngryChance *= 0.5;
		}
		
		if(targetAngryChance > Math.randomInt(100)) {
			if($gameParty.isInGloryBattle) {
				let degenAmt = Math.ceil(target.mhp / target.gloryBattle_calculatePatience());
				target._hp = Math.max(1, target._hp - degenAmt * 1.5);
			}
			else {
				target.addAngryState();
			}
		}
	}
	
	let cdvMultipler = 1;
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_THREE_ID)) cdvMultipler = 3;
	else if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_TWO_ID)) cdvMultipler = 2;
	
	this.gainCockDesire(Math.round(cockDesireValue * cdvMultipler), true);
	
	target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	//this.emoteMasterManager();
	
	if($gameParty.isInGloryBattle) {
		this._gloryBattle_restUsedInRowCount = 0;
		this._gloryBattle_breatherUsedInRowCount = 0;
	}
	
	if(targetIsCurrentlyErect && !target.isErect) 
		target._enemyTempRecordCockJustShrankFromCockStare = true;
	else
		target._enemyTempRecordCockJustShrankFromCockStare = false;
	
	this.addToCockStareUsageCountRecord(target);
	target.addToEnemyCockStaredAtCountRecord(this);
	this.gainStaminaExp(10, $gameTroop.getAverageEnemyExperienceLvl());
	
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(JUST_SKILLTYPE_KARRYN_COCK_STARE);
};

Game_Actor.prototype.cooldownEval_karrynCockStare = function() {
	let cooldown = 4;
	if(this.hasPassive(PASSIVE_KARRYN_STARE_COCK_TWO_ID)) cooldown -= 2;
	return cooldown;
};



//Cock Petting
Game_Actor.prototype.beforeEval_karrynCockPetting = function(target) {
	if($gameParty.isInGloryBattle) {
		if(target.isUsingBodySlotPenis(RIGHT_HAND_ID)) {
			this.disableRightHandjobPoseSkills();
			this.setRightHandInserted(false);
			target.setBodySlotFree(RIGHT_HAND_ID);
			target._targetForHandjob = false;
			if(!target.isUsingBodySlotPenis(MOUTH_ID)) {
				target.resetPoseStatus();
			}
		}
		else if(target.isUsingBodySlotPenis(LEFT_HAND_ID)) {
			this.disableLeftHandjobPoseSkills();
			this.setLeftHandInserted(false);
			target.setBodySlotFree(LEFT_HAND_ID);
			target._targetForHandjob = false;
			if(!target.isUsingBodySlotPenis(MOUTH_ID)) {
				target.resetPoseStatus();
			}
		}
	}
	
	if(!target.isErect) {
		this.addState(STATE_COCKPET_TARGET_NOT_ERECT_ID);
	}
};
Game_Actor.prototype.dmgFormula_karrynCockPetting = function(target) {
	let baseDmg = BASEDMG_PETTING_COCK; 
	if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_THREE_ID)) baseDmg += 3;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_TWO_ID)) baseDmg += 2;
	else if(this.hasPassive(PASSIVE_COCK_PETTING_PEOPLE_ONE_ID)) baseDmg += 1;
	let actorPettingRate = this.elementRate(ELEMENT_PETTING_ID);
	let actorStripRate = this.elementRate(ELEMENT_STRIP_ID);
	let actorPettingSkillRating = this.pettingSkillRating();
	let actorCockDesire = this.cockDesire;
	let actorFingerSensitivity = this.fingerSensitivity();
	let actorPassiveEffect = this.passiveCockPetSkillRate(target);
	let dexExpGain = 80;
	
	let enemyWeakness = target.weaknessToPetting();
	let erectMultipler = VAR_COCK_PETTING_NOTERECT_MULTIPLER;
	if(target.isErect) erectMultipler = VAR_COCK_PETTING_ISERECT_MULTIPLER;

	let enemyPleasureGain = (this.dex * VAR_KARRYN_PETTING_PLEASURE_DEX_MULTIPLER + baseDmg + this.level) * actorPettingSkillRating * enemyWeakness * erectMultipler * actorPassiveEffect;
	if(target.end > this.dex) enemyPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);


	let actorDesireGain = (baseDmg) * actorPettingRate;
	let actorPleasureFeedback = (actorDesireGain + target.dex * 0.75 + target.enemyLvl() * 0.5) * actorFingerSensitivity;
	if(this.end > target.dex) actorPleasureFeedback *= (1 - ((this.end - target.dex) / this.end) * 0.5);
	else dexExpGain *= 1.3;
	actorPleasureFeedback *= VAR_KARRYN_PLEASURE_FEEDBACK_REDUCER;
	
	
	let clothingDmg = (target.dex) * actorStripRate;

	let result = target.result();
	result.pleasureFeedback = actorPleasureFeedback;
	result.pleasureDamage = enemyPleasureGain;
	result.clothingDamage = clothingDmg;
	result.desireAreaDamage = actorDesireGain * 0.6;
	result.desireRandomDamage = actorDesireGain * 0.4;
	result.desireCockWeight = 1;
	result.desireTarget = AREA_COCK;
	
	if(!$gameParty.isInGloryBattle) {
		let cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID;
		let enemyCock = target.enemyCock();
		
		if(enemyCock.includes('human_')) {
			if(enemyCock.includes('cut')) {
				if(enemyCock.includes('normal')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID;
				else if(enemyCock.includes('pale')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_PALE_ID;
				else if(enemyCock.includes('black')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_BLACK_ID;
			}
			else if(enemyCock.includes('half')) {
				if(enemyCock.includes('normal')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_NORMAL_ID;
				else if(enemyCock.includes('pale')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_PALE_ID;
				else if(enemyCock.includes('black')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_BLACK_ID;
			}
			else if(enemyCock.includes('skin')) {
				if(enemyCock.includes('normal')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_NORMAL_ID;
				else if(enemyCock.includes('pale')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_PALE_ID;
				else if(enemyCock.includes('black')) 
					cutInId = CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_BLACK_ID;
			}
		}
		else if(enemyCock.includes('goblin_')) {
			if(enemyCock.includes('normal')) 
				cutInId = CUTIN_KARRYN_COCK_PETTING_GOBLIN_NORMAL_ID;
			else if(enemyCock.includes('dark')) 
				cutInId = CUTIN_KARRYN_COCK_PETTING_GOBLIN_DARK_ID;
		}
		else if(enemyCock.includes('orc_')) {
			if(enemyCock.includes('normal')) 
				cutInId = CUTIN_KARRYN_COCK_PETTING_ORC_NORMAL_ID;
			else if(enemyCock.includes('dark')) 
				cutInId = CUTIN_KARRYN_COCK_PETTING_ORC_DARK_ID;
		}
		else if(enemyCock.includes('lizardman_')) {
			if(enemyCock.includes('normal')) 
				cutInId = CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_NORMAL_ID;
			else if(enemyCock.includes('dark')) 
				cutInId = CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_DARK_ID;
		}
		else if(enemyCock.includes('slime')) {
			cutInId = CUTIN_KARRYN_COCK_PETTING_SLIME_NORMAL_ID;
		}
		else if(enemyCock.includes('werewolf')) {
			cutInId = CUTIN_KARRYN_COCK_PETTING_WEREWOLF_NORMAL_ID;
		}
		else if(enemyCock.includes('yeti')) {
			cutInId = CUTIN_KARRYN_COCK_PETTING_YETI_NORMAL_ID;
		}
		
		this.setTachieCutIn(cutInId);
	}
	
	target.addToEnemyCockPettedCountRecord(this);
	if(actorPleasureFeedback > 0) this.addToActorFingersPleasureRecord(actorPleasureFeedback);
	target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(JUST_SKILLTYPE_KARRYN_PETTING);
	
	this.gainStaminaExp(15, target.enemyExperienceLvl());
	this.gainDexterityExp(dexExpGain, target.enemyExperienceLvl());
	
	//this.emoteMasterManager();
	return 0;
};
Game_Actor.prototype.afterEval_karrynCockPetting = function(target) {
	if(this.isStateAffected(STATE_COCKPET_TARGET_NOT_ERECT_ID)) {
		if(target.isErect && !target.isStateAffected(STATE_COCKPET_TARGET_ERECT_COUNTED_ID)) {
			this._playthroughRecordErectWithCockPetCount++;
			target.addState(STATE_COCKPET_TARGET_ERECT_COUNTED_ID);
		}
		this.removeState(STATE_COCKPET_TARGET_NOT_ERECT_ID);
	}
};


//Basic Sex gives 50% of the desire to cock, and remaining 50% to a random area with a cock weight of 0
Game_Actor.prototype.dmgFormula_basicSex = function(target, sexAct) {
	let actorSexRate = this.elementRate(ELEMENT_SEX_ID);
	let actorStripRate = this.elementRate(ELEMENT_STRIP_ID);
	let actorCockDesire = this.cockDesire;
	let baseDmg = 0;
	let actorSkillRating = 1;
	let enemySkillLvl = 1;
	let actorDesire = 0;
	let actorSensitivity = 1;
	let enemyWeakness = 1;
	let actorPassiveEffect = 1;
	let dexExpGain = 0;
	let consUsageMultipler = 1;
	
	if(sexAct == SEXACT_BLOWJOB) {
		baseDmg = BASEDMG_SEXACT_BLOWJOB;
		actorSkillRating = this.blowjobSkillRating(); 
		enemySkillLvl = target.blowjobLvl(); 
		actorDesire = this.mouthDesire + actorCockDesire;
		actorSensitivity = this.mouthSensitivity();
		enemyWeakness = target.weaknessToBlowjob();
		actorPassiveEffect = this.passiveBlowjobSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempBlowjobConsUsage * 0.15;
		dexExpGain = 110;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB);
	}
	else if(sexAct == SEXACT_RIMJOB) {
		baseDmg = BASEDMG_SEXACT_RIMJOB;
		actorSkillRating = this.rimjobSkillRating(); 
		enemySkillLvl = target.sadismLvl(); 
		actorDesire = this.mouthDesire * 2;
		actorSensitivity = this.mouthSensitivity() * this.masochismSensitivity();
		enemyWeakness = target.weaknessToRimjob() + target.sadismLvl() * 0.15;
		actorPassiveEffect = this.passiveRimjobSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempRimjobConsUsage * 0.15;
		dexExpGain = 110;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM);
	}
	else if(sexAct == SEXACT_FOOTJOB) {
		baseDmg = BASEDMG_SEXACT_FOOTJOB;
		actorSkillRating = this.footjobSkillRating(); 
		enemySkillLvl = target.masochismLvl(); 
		actorDesire = actorCockDesire * 2;
		actorSensitivity = this.footSensitivity() * this.sadismSensitivity();
		enemyWeakness = target.weaknessToFootjob() + target.masochismLvl() * 0.15;
		actorPassiveEffect = this.passiveFootjobSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempFootjobConsUsage * 0.15;
		dexExpGain = 110;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM);
	}
	else if(sexAct == SEXACT_TITTYFUCK) {
		baseDmg = BASEDMG_SEXACT_TITTYFUCK;
		actorSkillRating = this.tittyFuckSkillRating();
		enemySkillLvl = target.tittyFuckLvl(); 
		actorDesire = this.boobsDesire + actorCockDesire;
		actorSensitivity = this.boobsSensitivity();
		enemyWeakness = target.weaknessToTittyFuck();
		actorPassiveEffect = this.passiveTittyFuckSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempTitjobConsUsage * 0.15;
		dexExpGain = 110;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	}
	else if(sexAct == SEXACT_PUSSYSEX) {
		baseDmg = BASEDMG_SEXACT_PUSSYSEX;
		actorSkillRating = this.pussySexSkillRating();
		enemySkillLvl = target.pussySexLvl(); 
		actorDesire = this.pussyDesire + actorCockDesire;
		actorSensitivity = this.pussySensitivity();
		enemyWeakness = target.weaknessToPussy();
		actorPassiveEffect = this.passivePussySexSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempPussySexConsUsage * 0.15;
		dexExpGain = 90;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	}
	else if(sexAct == SEXACT_ANALSEX) {
		baseDmg = BASEDMG_SEXACT_ANALSEX;
		actorSkillRating = this.analSexSkillRating();
		enemySkillLvl = target.analSexLvl(); 
		actorDesire = this.buttDesire + actorCockDesire;
		actorSensitivity = this.analSensitivity();
		enemyWeakness = target.weaknessToAnal();
		actorPassiveEffect = this.passiveAnalSexSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempAnalSexConsUsage * 0.15;
		dexExpGain = 90;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	}
	else if(sexAct == SEXACT_HANDJOB) {
		baseDmg = BASEDMG_SEXACT_HANDJOB;
		actorSkillRating = this.handjobSkillRating();
		enemySkillLvl = target.handjobLvl(); 
		actorDesire =  2 * actorCockDesire;
		actorSensitivity = this.fingerSensitivity(); 
		enemyWeakness = target.weaknessToHandjob();
		actorSexRate = this.elementRate(ELEMENT_PETTING_ID);
		actorPassiveEffect = this.passiveHandjobSkillRate(target);
		consUsageMultipler += this._tempSexSkillConsUsage * 0.05 + this._tempHandjobConsUsage * 0.15;
		dexExpGain = 120;
		this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
		
		if(target.isUsingBodySlotPenis(RIGHT_HAND_ID))
			this._lastHandUsedForHandjob = RIGHT_HAND_ID;
		else if(target.isUsingBodySlotPenis(LEFT_HAND_ID))
			this._lastHandUsedForHandjob = LEFT_HAND_ID;
	}
	else console.error("Error dmgFormula basicSex sexAct: " + sexAct);
	
	let actorDesireGain = (baseDmg + enemySkillLvl) * actorSexRate;
	let actorPleasureFeedback = (actorDesireGain + target.dex + target.enemyLvl() * 0.5) * (1 + enemySkillLvl * 0.1) * actorSensitivity;
	if(this.end > target.dex) actorPleasureFeedback *= (1 - ((this.end - target.dex) / this.end) * 0.5);
	actorPleasureFeedback *= VAR_KARRYN_PLEASURE_FEEDBACK_REDUCER;
	
	let enemyPleasureGain = (this.dex * VAR_KARRYN_SEX_PLEASURE_DEX_MULTIPLER + baseDmg + this.level) * enemyWeakness * actorSkillRating * actorPassiveEffect * consUsageMultipler;
	if(target.end > this.dex) {
		enemyPleasureGain *= (1 - ((target.end - this.dex) / target.end) * 0.5);
		dexExpGain *= 1.3;
	}
	
	let results = target.result();
	results.pleasureDamage = enemyPleasureGain;
	results.desireAreaDamage = actorDesireGain * .5;
	results.desireRandomDamage = actorDesireGain * .5;
	results.desireCockWeight = 0;
	results.desireTarget = sexAct;
	results.pleasureFeedback = actorPleasureFeedback;
	
	if(actorPleasureFeedback > 0) {
		if(sexAct == SEXACT_BLOWJOB) this.addToActorMouthPleasureRecord(actorPleasureFeedback);
		else if(sexAct == SEXACT_TITTYFUCK) this.addToActorBoobsPleasureRecord(actorPleasureFeedback);
		else if(sexAct == SEXACT_PUSSYSEX) this.addToActorPussyPleasureRecord(actorPleasureFeedback);
		else if(sexAct == SEXACT_ANALSEX) this.addToActorAnalPleasureRecord(actorPleasureFeedback);
		else if(sexAct == SEXACT_HANDJOB) this.addToActorFingersPleasureRecord(actorPleasureFeedback);
		else if(sexAct == SEXACT_FOOTJOB) this.addToActorSadismPleasureRecord(actorPleasureFeedback);
		else if(sexAct == SEXACT_RIMJOB) this.addToActorMasochismPleasureRecord(actorPleasureFeedback);
	}
	
	this.gainStaminaExp(30, target.enemyExperienceLvl());
	this.gainDexterityExp(dexExpGain, target.enemyExperienceLvl());
	
	this.resetAttackSkillConsUsage();
	this.resetEndurePleasureStanceCost();
	this.resetSexSkillConsUsage(sexAct);
	
	//this.emoteMasterManager();

	return 0;
};

///////////////////
// Female Orgasm Damage formula
//////////////////////

Game_Actor.prototype.beforeEval_karrynOrgasm = function(orgasmSkillId) {
	this.addToActorSpecificOrgasmRecord();
};

Game_Actor.prototype.dmgFormula_basicFemaleOrgasm = function(orgasmSkillId) {
	let target = this;
	let numOfOrgasm = Math.floor(target.pleasure / target.orgasmPoint());
	let energyDamage = this.passiveFemaleOrgasmEnergyDamage() + this.passiveFemaleOrgasmEnergyDamage() * (numOfOrgasm - 1) * 0.33;
	
	let result = target.result();
	result.femaleOrgasmCount = numOfOrgasm;
	
	this.gainEnergyExp(120 + (numOfOrgasm * 50), $gameTroop.getAverageEnemyExperienceLvl());
	
	let ml = this.calculateOrgasmML(energyDamage);
	this.increaseLiquidPussyJuice(Math.round(ml / 2));
	this.addToActorOrgasmRecord(ml, numOfOrgasm);
	if(!this.isInMasturbationCouchPose() && !$gameParty.isInGloryBattle) {
		$gameTroop.addToEnemyOrgasmPresenceCountRecord(this);
	}
	
	if(numOfOrgasm >= 2 || orgasmSkillId === SKILL_FEMALE_ORGASM_TWO_ID) {
		this.setTachieCutIn(CUTIN_KARRYN_ORGASM_TWO_ID);
		//this.setTachieCut_moveBottomToTop_OrgasmTwo();
		$gameScreen.startShake(REM_ORGASM_LV2_SCREEN_SHAKE_POWER, REM_ORGASM_LV2_SCREEN_SHAKE_SPEED, REM_ORGASM_LV2_SCREEN_SHAKE_DURATION);
		
	}
	else if(numOfOrgasm === 1 || orgasmSkillId === SKILL_FEMALE_ORGASM_ONE_ID) {
		this.setTachieCutIn(CUTIN_KARRYN_ORGASM_ONE_ID);
		//this.setTachieCut_moveTopToBottom_OrgasmOne();
		$gameScreen.startShake(REM_ORGASM_LV1_SCREEN_SHAKE_POWER, REM_ORGASM_LV1_SCREEN_SHAKE_SPEED, REM_ORGASM_LV1_SCREEN_SHAKE_DURATION);
	}
	
	if(!this.isInMasturbationCouchPose() && !$gameParty.isInGloryBattle) {
		BattleManager.actionRemLines(KARRYN_LINE_SIGHT_ORGASM);
	}
	
	result.ejaculateDamage = ml;
	
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	
	return energyDamage;
};

///////////////
/////////////////////
// Post Damage Formulas
////////////////////
//////////////////

Game_Actor.prototype.postDamage_basicKissing = function(target, kissLvl) {
	if(this.isInWaitressServingPose()) {
		this.postDamage_basicKissing_waitressServing(target, kissLvl);
	}
	else if(this.isInWaitressSexPose()) {
		this.postDamage_basicKissing_waitressSex(target, kissLvl);
	}
	else if(this.isInReceptionistPose()) {
		this.postDamage_basicKissing_receptionistBattle(target, kissLvl);
	}
	
	let kissLvlValue = 0;
	if(kissLvl == KISS_LVL_ONE) kissLvlValue = 0.05;
	else kissLvlValue = 0.15;
	
	if(this.hasEdict(EDICT_RESEARCH_APHRODISIAC_CONTRACT) && !this.isInReceptionistPose())
		kissLvlValue += 0.15;
	if(this.hasPassive(PASSIVE_KISS_ORGASM_TWO_ID))
		kissLvlValue += 0.15;
	
	if(Math.random() < kissLvlValue) {
		this.addHornyState();
	}	
	
};

Game_Actor.prototype.postDamage_basicTalk = function(target, area, jerkingOff) {
	if(this.isInReceptionistPose()) {
		this.postDamage_basicTalk_receptionistBattle(target, area, jerkingOff);
	}
};

Game_Actor.prototype.postDamage_basicPetting = function(target, area) {
	if(this.isInWaitressServingPose()) {
		this.postDamage_basicPetting_waitressServing(target, area);
	}
	else if(this.isInReceptionistPose()) {
		this.postDamage_basicPetting_receptionistBattle(target, area);
	}
	
};

Game_Actor.prototype.postDamage_basicSex = function(target, sexAct) {
	let poseName = this.poseName;

	if(poseName == POSE_RIMJOB) {
		if(sexAct == SEXACT_RIMJOB) {
			this.increaseLiquidDroolMouth(1);
		}
	}
	else if(this.isInReceptionistPose()) {
		this.postDamage_basicSex_receptionistBattle(target, sexAct);
	}
	else if($gameParty.isInGloryBattle) {
		this.postDamage_basicSex_gloryBattle(target, sexAct);
	}
};

Game_Actor.prototype.postDamage_spanking = function(target, spankLvl) {
	let showSpankMarkPose = this.isInDefeatedLevel4Pose();
	let spankMarkCount = 0;
	
	if(spankLvl == SPANK_LVL_THREE) {
		spankMarkCount = Math.randomInt(3) + 3;
		this.passivePostSpank_addOffBalanceEffect(2);
		this.passivePostSpank_addHornyEffect(3);
	}
	else if(spankLvl == SPANK_LVL_TWO) {
		spankMarkCount = Math.randomInt(2) + 2;
		this.passivePostSpank_addOffBalanceEffect(1.5);
		this.passivePostSpank_addHornyEffect(2);
	}
	else if(spankLvl == SPANK_LVL_ONE) {
		spankMarkCount = Math.randomInt(2) + 1;
		this.passivePostSpank_addOffBalanceEffect(1);
		this.passivePostSpank_addHornyEffect(1);
	}
	
	if(showSpankMarkPose) {
		for(let i = 0; i < spankMarkCount; ++i) {
			if(Math.random() < 0.5)
				this._tempRecordSpankMarksLeftButtcheek++;
			else
				this._tempRecordSpankMarksRightButtcheek++;
		}
	}
	
	if(this.isInReceptionistPose()) {
		this.postDamage_basicSpanking_receptionistBattle(target, spankLvl);
	}
};

////////////////////////
// Post Damage Female Orgasm
/////////////////////////

Game_Actor.prototype.postDamage_femaleOrgasm = function(orgasmSkillId) {
	let target = this;
	let orgasmCount = target.result().femaleOrgasmCount;

	this.postOrgasmPleasure();
	this.postOrgasmToys(orgasmCount);
	
	if(orgasmCount > 0) {
		let addJustOrgasmedState = true;
		
		if(this._gotOrgasmFromSkillType === JUST_SKILLTYPE_KARRYN_MASTURBATE) {
			addJustOrgasmedState = false;
		}
		else {
			//Bliss Chance
			let chanceToNotGetBlissed = 0;
			let effectiveOrgasmCount = orgasmCount;
			
			if(this.isStateAffected(STATE_KARRYN_RESIST_ORGASM_ID)) 
				effectiveOrgasmCount = Math.max(1, orgasmCount - (this.willpowerResistOrgasmEffect - 1));
			
			if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) chanceToNotGetBlissed += 20;
			
			if(this.hasPassive(PASSIVE_ORGASM_TRIPLE_ID)) chanceToNotGetBlissed += 60;
			else if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) chanceToNotGetBlissed += 30;
			
			if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) chanceToNotGetBlissed += 40;
			else if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) chanceToNotGetBlissed += 20;
			
			if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_FOUR_ID)) chanceToNotGetBlissed += 20;
			
			if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID)) chanceToNotGetBlissed += 10;
			
			if(this.hasPassive(PASSIVE_SADISM_ORGASM_ONE_ID) && this._tempRecordSubduedEnemiesWithAttack > 0) 
				chanceToNotGetBlissed += this._tempRecordSubduedEnemiesWithAttack * 5;

			
			
			if(effectiveOrgasmCount >= 3) chanceToNotGetBlissed *= 0.25;
			else if(effectiveOrgasmCount >= 2) chanceToNotGetBlissed *= 0.5;
			else if(effectiveOrgasmCount > 1) chanceToNotGetBlissed *= 0.75;
			
			
			chanceToNotGetBlissed = Math.min(chanceToNotGetBlissed, 100 - this._tempRecordOrgasmCount * 5);
			
			if(Math.randomInt(100) < chanceToNotGetBlissed) {
				addJustOrgasmedState = false;
			}
		}
		
		if(addJustOrgasmedState) {
			if(!this.justOrgasmed()) this.addJustOrgasmed();
			let newMaxTurns = Math.ceil(orgasmCount/2) + 1;
			this.setJustOrgasmedStateTurns(Math.max(newMaxTurns, this.getJustOrgasmedStateTurns()));
		}
		
		this.addState(STATE_KARRYN_BLISS_STUN_ID);
		
		this.refreshPose(false);
		
		$gameTroop.setAllEnemiesToHorny_chanceBased(this.passiveOrgasmMakeEnemiesHornyChance(), true);	
		
		if(this.isInWaitressServingPose()) {
			this.postDamage_femaleOrgasm_waitressServing();
		}
		else if($gameParty.isInGloryBattle) {
			target.postDamage_femaleOrgasm_gloryBattle(orgasmCount);
		}
		else if($gameParty.isInReceptionistBattle) {
			target.postDamage_femaleOrgasm_receptionistBattle(orgasmCount);
		}
		else if($gameParty.isInStripperBattle) {
			target.postDamage_femaleOrgasm_stripperBattle(orgasmCount);
		}
		else if(this.isInMasturbationCouchPose()) {
			this.postDamage_femaleOrgasm_masturbationCouch(orgasmCount);
		}
		else if(this.isInMasturbationInBattlePose()) {
			this.postDamage_femaleOrgasm_masturbationInBattle(orgasmCount, addJustOrgasmedState);
		}
	}
		
	this._orgasmCallQueuedUp = false;
	
	// Allow Tachie to update
	BattleManager.setBMAllowTachieUpdate(true);
};


