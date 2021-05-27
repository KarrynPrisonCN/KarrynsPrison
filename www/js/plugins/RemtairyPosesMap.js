var Remtairy = Remtairy || {};
Remtairy.PosesMap = Remtairy.PosesMap || {};

//=============================================================================
 /*:
 * @plugindesc PosesMap
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

//PosesMap Value ID
const POSE_MAP_TIER_ID = 17;
const POSE_MAP_REQS_ID = 18;

const POSE_MAP_TIER_ONE_ID = 1;
const POSE_MAP_TIER_TWO_ID = 2;
const POSE_MAP_TIER_THREE_ID = 3;

var POSESMAP = new Map();
const POSE_MAP_DEFAULT_POSE_ARRAY = [ -1, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE, SLOT_FREE ];


POSESMAP.set(POSE_THUGGANGBANG, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_THUGGANGBANG)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_THUGGANGBANG)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_THUGGANGBANG)[BOOBS_ID] = SLOT_PENIS;
POSESMAP.get(POSE_THUGGANGBANG)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_THUGGANGBANG)[LEFT_HAND_ID] = SLOT_PENIS;

POSESMAP.set(POSE_GUARDGANGBANG, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_GUARDGANGBANG)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_GUARDGANGBANG)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_GUARDGANGBANG)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_GUARDGANGBANG)[ANAL_ID] = SLOT_PENIS;

POSESMAP.set(POSE_GOBLINCUNNILINGUS, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_GOBLINCUNNILINGUS)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_GOBLINCUNNILINGUS)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_GOBLINCUNNILINGUS)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_GOBLINCUNNILINGUS)[BOOBS_ID] = SLOT_PENIS;

POSESMAP.set(POSE_SLIME_PILEDRIVER_ANAL, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_SLIME_PILEDRIVER_ANAL)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_THREE_ID;
POSESMAP.get(POSE_SLIME_PILEDRIVER_ANAL)[POSE_MAP_REQS_ID] = [ANAL_ID];
POSESMAP.get(POSE_SLIME_PILEDRIVER_ANAL)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_SLIME_PILEDRIVER_ANAL)[PUSSY_ID] = SLOT_PENIS;

const POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY = 'werewolf_back_pussy';
const POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL = 'werewolf_back_anal';

POSESMAP.set(POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_THREE_ID;
POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY)[MOUTH_ID] = SLOT_PENIS;

POSESMAP.set(POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_THREE_ID;
POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL)[POSE_MAP_REQS_ID] = [ANAL_ID];
POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL)[MOUTH_ID] = SLOT_PENIS;

POSESMAP.set(POSE_ORC_PAIZURI, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_ORC_PAIZURI)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_ORC_PAIZURI)[POSE_MAP_REQS_ID] = [BOOBS_ID];
POSESMAP.get(POSE_ORC_PAIZURI)[RIGHT_HAND_ID] = SLOT_PENIS;
POSESMAP.get(POSE_ORC_PAIZURI)[LEFT_HAND_ID] = SLOT_PENIS;

POSESMAP.set(POSE_KICKCOUNTER, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_KICKCOUNTER)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_THREE_ID;
POSESMAP.get(POSE_KICKCOUNTER)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_KICKCOUNTER)[ANAL_ID] = SLOT_PENIS;

POSESMAP.set(POSE_YETI_CARRY, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_YETI_CARRY)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_THREE_ID;
POSESMAP.get(POSE_YETI_CARRY)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_YETI_CARRY)[ANAL_ID] = SLOT_PENIS;

POSESMAP.set(POSE_RIMJOB, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_RIMJOB)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_RIMJOB)[POSE_MAP_REQS_ID] = [MOUTH_ID];
POSESMAP.get(POSE_RIMJOB)[ANAL_ID] = SLOT_PENIS;
POSESMAP.get(POSE_RIMJOB)[PUSSY_ID] = SLOT_PENIS;

POSESMAP.set(POSE_FOOTJOB, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_FOOTJOB)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_FOOTJOB)[POSE_MAP_REQS_ID] = [FEET_ID];
POSESMAP.get(POSE_FOOTJOB)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_FOOTJOB)[LEFT_HAND_ID] = SLOT_PENIS;

POSESMAP.set(POSE_HJ_STANDING, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_HJ_STANDING)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_ONE_ID;
POSESMAP.get(POSE_HJ_STANDING)[POSE_MAP_REQS_ID] = [RIGHT_HAND_ID];
POSESMAP.get(POSE_HJ_STANDING)[LEFT_HAND_ID] = SLOT_PENIS;

POSESMAP.set(POSE_BJ_KNEELING, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_BJ_KNEELING)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_ONE_ID;
POSESMAP.get(POSE_BJ_KNEELING)[POSE_MAP_REQS_ID] = [MOUTH_ID];
POSESMAP.get(POSE_BJ_KNEELING)[RIGHT_HAND_ID] = SLOT_PENIS;

POSESMAP.set(POSE_PAIZURI_LAYING, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_PAIZURI_LAYING)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_PAIZURI_LAYING)[POSE_MAP_REQS_ID] = [BOOBS_ID];
POSESMAP.get(POSE_PAIZURI_LAYING)[RIGHT_HAND_ID] = SLOT_PENIS;
POSESMAP.get(POSE_PAIZURI_LAYING)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_PAIZURI_LAYING)[PUSSY_ID] = SLOT_PENIS;
POSESMAP.get(POSE_PAIZURI_LAYING)[ANAL_ID] = SLOT_PENIS;

POSESMAP.set(POSE_YETI_PAIZURI, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_YETI_PAIZURI)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_THREE_ID;
POSESMAP.get(POSE_YETI_PAIZURI)[POSE_MAP_REQS_ID] = [BOOBS_ID];
POSESMAP.get(POSE_YETI_PAIZURI)[PUSSY_ID] = SLOT_PENIS;
POSESMAP.get(POSE_YETI_PAIZURI)[ANAL_ID] = SLOT_PENIS;


POSESMAP.set(POSE_KARRYN_COWGIRL, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_KARRYN_COWGIRL)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_KARRYN_COWGIRL)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_KARRYN_COWGIRL)[MOUTH_ID] = SLOT_PENIS;
POSESMAP.get(POSE_KARRYN_COWGIRL)[BOOBS_ID] = SLOT_PENIS;

POSESMAP.set(POSE_REVERSE_COWGIRL, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_REVERSE_COWGIRL)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_REVERSE_COWGIRL)[POSE_MAP_REQS_ID] = [ANAL_ID];
POSESMAP.get(POSE_REVERSE_COWGIRL)[LEFT_HAND_ID] = SLOT_PENIS;
POSESMAP.get(POSE_REVERSE_COWGIRL)[RIGHT_HAND_ID] = SLOT_PENIS;
POSESMAP.get(POSE_REVERSE_COWGIRL)[MOUTH_ID] = SLOT_PENIS;

POSESMAP.set(POSE_LIZARDMAN_COWGIRL, POSE_MAP_DEFAULT_POSE_ARRAY.slice());
POSESMAP.get(POSE_LIZARDMAN_COWGIRL)[POSE_MAP_TIER_ID] = POSE_MAP_TIER_TWO_ID;
POSESMAP.get(POSE_LIZARDMAN_COWGIRL)[POSE_MAP_REQS_ID] = [PUSSY_ID];
POSESMAP.get(POSE_LIZARDMAN_COWGIRL)[ANAL_ID] = SLOT_PENIS;
POSESMAP.get(POSE_LIZARDMAN_COWGIRL)[RIGHT_HAND_ID] = SLOT_PENIS;
POSESMAP.get(POSE_LIZARDMAN_COWGIRL)[MOUTH_ID] = SLOT_PENIS;

Game_Actor.prototype.getPoseTierFromPoseName = function(poseName) {
	return POSESMAP.get(poseName)[POSE_MAP_TIER_ID];
};
Game_Actor.prototype.getCurrentPoseTier = function() {
	let poseName = this.poseName;
	
	//Special
	if(poseName === POSE_WEREWOLF_BACK) {
		if(this.isBodySlotPenis(PUSSY_ID)) 
			return POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY)[POSE_MAP_TIER_ID];
		else
			return POSESMAP.get(POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL)[POSE_MAP_TIER_ID];
	}
	
	return this.getPoseTierFromPoseName(poseName);
};
Game_Actor.prototype.getPoseTierOfPoseName = function(poseName) {
	return this.getPoseTierFromPoseName(poseName);
};

Game_Actor.prototype.getPoseNameFromSkillId = function(skillId) {
	if(skillId === SKILL_ENEMY_POSESTART_THUGGANGBANG_ID) 
		return POSE_THUGGANGBANG;
	
	else if(skillId === SKILL_ENEMY_POSESTART_GOBLINCUNNI_ID) 
		return POSE_GOBLINCUNNILINGUS;
	
	else if(skillId === SKILL_ENEMY_POSESTART_STANDINGHJ_ID || skillId === SKILL_KARRYN_START_STANDING_HJ_ID) 
		return POSE_HJ_STANDING;
	
	else if(skillId === SKILL_ENEMY_POSESTART_KNEELINGBJ_ID || skillId === SKILL_KARRYN_START_KNEELING_BJ_ID) 
		return POSE_BJ_KNEELING;
	
	else if(skillId === SKILL_ENEMY_POSESTART_KICKCOUNTER_ID) 
		return POSE_KICKCOUNTER;
		
	else if(skillId === SKILL_ENEMY_POSESTART_KICKCOUNTER_YETI_ID || skillId === SKILL_ENEMY_POSESTART_YETICARRY_ID) 
		return POSE_YETI_CARRY;
	
	else if(skillId === SKILL_ENEMY_POSESTART_RIMJOB_ID || skillId === SKILL_KARRYN_START_RIMJOB_ID) 
		return POSE_RIMJOB;
	
	else if(skillId === SKILL_ENEMY_POSESTART_LAYINGTF_ID || skillId === SKILL_KARRYN_START_LAYING_TITTYFUCK_ID) 
		return POSE_PAIZURI_LAYING;
	
	else if(skillId === SKILL_ENEMY_POSESTART_FOOTJOB_ID || skillId === SKILL_KARRYN_START_FOOTJOB_ID) 
		return POSE_FOOTJOB;
	
	else if(skillId === SKILL_ENEMY_POSESTART_SLIMEPILEDRIVER_ID) 
		return POSE_SLIME_PILEDRIVER_ANAL;
	
	else if(skillId === SKILL_ENEMY_POSESTART_GUARDGANGBANG_ID) 
		return POSE_GUARDGANGBANG;
	
	else if(skillId === SKILL_ENEMY_POSESTART_ORCPAIZURI_ID) 
		return POSE_ORC_PAIZURI;
		
	else if(skillId === SKILL_ENEMY_POSESTART_YETIPAIZURI_ID) 
		return POSE_YETI_PAIZURI;
	
	else if(skillId === SKILL_ENEMY_POSESTART_COWGIRL_REVERSE_ID) 
		return POSE_REVERSE_COWGIRL;
	
	else if(skillId === SKILL_ENEMY_POSESTART_COWGIRL_LIZARDMAN_ID) 
		return POSE_LIZARDMAN_COWGIRL;
	
	
	else if(skillId === SKILL_KARRYN_START_REVERSE_COWGIRL_ID) 
		return POSE_REVERSE_COWGIRL;
	
	else if(skillId === SKILL_KARRYN_START_KARRYN_COWGIRL_ID) 
		return POSE_KARRYN_COWGIRL;
		
	else if(skillId === SKILL_ENEMY_POSESTART_WEREWOLF_BACK_PUSSY_ID) 
		return POSEMAP_SPECIAL_WEREWOLF_BACK_PUSSY;
	else if(skillId === SKILL_ENEMY_POSESTART_WEREWOLF_BACK_ANAL_ID) 
		return POSEMAP_SPECIAL_WEREWOLF_BACK_ANAL;
	
	console.log('Error: getPoseNameFromSkillId returning -1 from skillId ' + skillId);
	return -1;
};

Game_Actor.prototype.meetDesireReqOfPoseName = function(poseName) {
	let reqArray = POSESMAP.get(poseName)[POSE_MAP_REQS_ID].slice();
	let meetAllReqs = true;
	for(let i = 0; i < reqArray.length; i++) {
		let reqBodySlot = reqArray[i];
		
		if(reqBodySlot == MOUTH_ID) {
			if(poseName == POSE_RIMJOB) {
				if(this.mouthDesire < this.rimjobMouthDesireRequirement() || ConfigManager.disableRimjobs) {
					meetAllReqs = false;
					break;
				}
				else continue;
			}
			else {
				if(this.mouthDesire < this.blowjobMouthDesireRequirement() || this.cockDesire < this.blowjobCockDesireRequirement()) {
					meetAllReqs = false;
					break;
				}
				else continue;
				
			}
		}
		else if(reqBodySlot == BOOBS_ID) {
			if(this.boobsDesire < this.tittyFuckBoobsDesireRequirement() || this.cockDesire < this.tittyFuckCockDesireRequirement()) {
					meetAllReqs = false;
				break;
			}
			else continue;
		}
		else if(reqBodySlot == RIGHT_HAND_ID || reqBodySlot == LEFT_HAND_ID) {
			if(this.cockDesire < this.handjobCockDesireRequirement()) {
					meetAllReqs = false;
				break;
			}
			else continue;
		}
		else if(reqBodySlot == PUSSY_ID) {
			if(poseName == POSE_GOBLINCUNNILINGUS) {
				if(this.pussyDesire < this.cunnilingusPussyDesireRequirement()) {
					meetAllReqs = false;
					break;
				}
				else continue;
			}
			else {
				if(this.pussyDesire < this.pussySexPussyDesireRequirement() || this.cockDesire < this.pussySexCockDesireRequirement() || !this.isWet) {
					meetAllReqs = false;
					break;
				}
			}
		}
		else if(reqBodySlot == ANAL_ID) {
			if(this.buttDesire < this.analSexButtDesireRequirement() || this.cockDesire < this.analSexCockDesireRequirement()) {
					meetAllReqs = false;
				break;
			}
			else continue;
		}
		else if(reqBodySlot == FEET_ID) {
			if(this.cockDesire < this.footjobCockDesireRequirement()) {
					meetAllReqs = false;
				break;
			}
			else continue;
		}
		
	}
	return meetAllReqs;
};

Game_Actor.prototype.meetSlotReqOfPoseName = function(poseName) {
	let reqArray = POSESMAP.get(poseName)[POSE_MAP_REQS_ID].slice();
	let meetAllReqs = true;
	
	for(let i = 0; i < reqArray.length; i++) {
		let reqBodySlot = reqArray[i];
		
		if(this.getBodySlotStatus(reqBodySlot) === SLOT_PENIS || this.getBodySlotStatus(reqBodySlot) === SLOT_ANUS || this.getBodySlotStatus(reqBodySlot) === SLOT_TONGUE) {
			meetAllReqs = false;
			break;
		}
	}
	
	return meetAllReqs;
};

Game_Actor.prototype.canCurrentPoseSlotsFitPoseName = function(poseName) {
	if(this.isBodySlotPenis(MOUTH_ID) && POSESMAP.get(poseName)[MOUTH_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotAnus(MOUTH_ID) && POSESMAP.get(poseName)[MOUTH_ID] != SLOT_ANUS) return false;
	if(this.isBodySlotPenis(BOOBS_ID) && POSESMAP.get(poseName)[BOOBS_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotPenis(PUSSY_ID) && POSESMAP.get(poseName)[PUSSY_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotTongue(PUSSY_ID) && POSESMAP.get(poseName)[PUSSY_ID] != SLOT_TONGUE) return false;
	if(this.isBodySlotPenis(ANAL_ID) && POSESMAP.get(poseName)[ANAL_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotPenis(FEET_ID) && POSESMAP.get(poseName)[FEET_ID] != SLOT_PENIS) return false;
	
	if(this.isBodySlotPenis(OTHER_1_ID) && POSESMAP.get(poseName)[OTHER_1_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotPenis(OTHER_2_ID) && POSESMAP.get(poseName)[OTHER_2_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotPenis(OTHER_3_ID) && POSESMAP.get(poseName)[OTHER_3_ID] != SLOT_PENIS) return false;
	if(this.isBodySlotPenis(OTHER_4_ID) && POSESMAP.get(poseName)[OTHER_4_ID] != SLOT_PENIS) return false;
	
	if(!this.isInStandingHJSexPose()) {
		if(this.isBodySlotPenis(RIGHT_HAND_ID) && POSESMAP.get(poseName)[RIGHT_HAND_ID] != SLOT_PENIS) {
			if(POSESMAP.get(poseName)[LEFT_HAND_ID] != SLOT_PENIS)
				return false;
		}
		if(this.isBodySlotPenis(LEFT_HAND_ID) && POSESMAP.get(poseName)[LEFT_HAND_ID] != SLOT_PENIS) {
			if(POSESMAP.get(poseName)[RIGHT_HAND_ID] != SLOT_PENIS)
				return false;
		}
	}
	
	return true;
};


Game_Actor.prototype.canUpgradeToPoseFromSkillId = function(skillId) {
	let poseName = this.getPoseNameFromSkillId(skillId);
	if(this.getCurrentPoseTier() >= this.getPoseTierOfPoseName(poseName)) return false;
	if(!this.meetDesireReqOfPoseName(poseName)) return false;
	if(!this.meetSlotReqOfPoseName(poseName)) return false;
	if(!this.canCurrentPoseSlotsFitPoseName(poseName)) return false;
	
	return true;
};


