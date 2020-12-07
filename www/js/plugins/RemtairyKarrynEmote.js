var Remtairy = Remtairy || {};
Remtairy.KarrynEmote = Remtairy.KarrynEmote || {};

const VAR_STOOD_STILL_FOR_TOO_LONG_NUM = 7200;

//=============================================================================
 /*:
 * @plugindesc Karryn Emotes
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

/////////
// Game Actor
///////////////

///////////////////
//Gets called when:
//   General
//Karryn becomes aroused or unaroused
//
//   Map Pose
//On map change
//After common event 105:ベッドで寝る
//After common event 50:Battle Generic
//After common event 51:Battle Masturbation
//After common event 53:Level 1 Defeat Battle
//After common event 54:Guard Battle
//
//   Battle
//Standby, Defend, Attack, Evade pose change
//Down stamina, falldown pose change
//   Sex
//Called after everytime enemy inserts or pulls out
//Called after enemy or Karryn orgasm
//Called after petted/sex each time*

Game_Actor.prototype.emoteMasterManager = function() {
	if($gameParty.isInGloryBattle) {
		this.emoteMasterManager_GloryBattle();
		return;
	}
	
	if(this._emoteMasterManagerIsRunning) return;
	this._emoteMasterManagerIsRunning = true;
	let pose = this.poseName;
	if(this.isInMapPose())
		this.emoteMapPose();
	else if(pose == POSE_DEFEND) 
		this.emoteDefendPose();
	else if(pose == POSE_ATTACK) 
		this.emoteAttackPose();
	else if(pose == POSE_EVADE) 
		this.emoteEvadePose();
	else if(pose == POSE_STANDBY) 
		this.emoteStandbyPose();
	else if(pose == POSE_DOWN_FALLDOWN) 
		this.emoteDownFalldownPose();
	else if(pose == POSE_DOWN_STAMINA) 
		this.emoteDownStaminaPose();
	else if(pose == POSE_UNARMED) 
		this.emoteUnarmedPose();
	else if(pose == POSE_KICK) 
		this.emoteKickPose();
	
	else if(pose == POSE_THUGGANGBANG) 
		this.emoteThugGangbangPose();
	else if(pose == POSE_GOBLINCUNNILINGUS) 
		this.emoteGoblinCunnilingusPose();
	else if(pose == POSE_GUARDGANGBANG) 
		this.emoteGuardGangbangPose();
	else if(pose == POSE_REVERSE_COWGIRL) 
		this.emoteReverseCowgirlPose();
	else if(pose == POSE_KARRYN_COWGIRL) 
		this.emoteKarrynCowgirlPose();
	else if(pose == POSE_LIZARDMAN_COWGIRL) 
		this.emoteLizardmanCowgirlPose();
	
	
	else if(pose == POSE_HJ_STANDING) 
		this.emoteStandingHandjobPose();
	else if(pose == POSE_BJ_KNEELING) 
		this.emoteKneelingBlowjobPose();
	else if(pose == POSE_PAIZURI_LAYING) 
		this.emoteLayingPaizuriPose();
	else if(pose == POSE_KICKCOUNTER)
		this.emoteKickCounterPose();
	else if(pose == POSE_ORC_PAIZURI)
		this.emoteOrcPaizuriPose();
	
	else if(pose == POSE_FOOTJOB)
		this.emoteFootjobPose();
	else if(pose == POSE_RIMJOB)
		this.emoteRimjobPose();
	else if(pose == POSE_SLIME_PILEDRIVER_ANAL)
		this.emoteSlimePiledriver();
	else if(pose == POSE_WAITRESS_SEX)
		this.emoteWaitressSexPose();
	else if(pose == POSE_RECEPTIONIST)
		this.emoteReceptionistPose();
	
	
	else if(pose == POSE_DEFEATED_LEVEL1) 
		this.emoteDefeatedLevelOnePose();
	else if(pose == POSE_DEFEATED_LEVEL2) 
		this.emoteDefeatedLevelTwoPose();
	else if(pose == POSE_DEFEATED_GUARD) 
		this.emoteDefeatedGuardPose();
	
	this.setCacheChanged();
	this._emoteMasterManagerIsRunning = false;
};

Game_Actor.prototype.emoteMasterManager_GloryBattle = function() {
	if(this._emoteMasterManagerForGloryBattleIsRunning) return;
	this._emoteMasterManagerForGloryBattleIsRunning = true;
	let pose = this.poseName;
	
	if(pose == POSE_TOILET_SITTING) 
		this.emoteGloryToiletSittingPose();
	else if(pose == POSE_TOILET_SIT_LEFT) 
		this.emoteGloryToiletSitLeftPose();
	else if(pose == POSE_TOILET_SIT_RIGHT) 
		this.emoteGloryToiletSitRightPose();
	else if(pose == POSE_TOILET_STAND_LEFT) 
		this.emoteGloryToiletStandLeftPose();
	else if(pose == POSE_TOILET_STAND_RIGHT) 
		this.emoteGloryToiletStandRightPose();
	
	this.setCacheChanged();
	this._emoteMasterManagerForGloryBattleIsRunning = false;
};

/////////////////
// Emote Attack Pose
/////////////////
Game_Actor.prototype.emoteAttackPose = function() {
	let ranNum = Math.randomInt(100);
	let staminaPercent = this.currentPercentOfStamina_realMax();
	let pleasurePercent = this.currentPercentOfOrgasm(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let cockiness = this.cockiness;
	let masochismLvl = this.masochismLvl();
	let sadismLvl = this.sadismLvl();
	
	let bluntStance = this.isBluntStance();
	let slashStance = this.isSlashStance();
	let pierceStance = this.isPierceStance();
	let weaponId = this.equips()[0].id;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(slashStance) 
		this.setTachieWeapon('' + weaponId + '_slash');
	else if(pierceStance)
		this.setTachieWeapon('' + weaponId + '_pierce');
	else
		this.setTachieWeapon('' + weaponId + '_blunt');
	
	//Not aroused
	if(!isAroused) {
		//Off balance faces take priority
		if(isOffBalanced) {
			if(staminaPercent < 50) {
				//face 8 if masochist
				if(masochismLvl + 1 > sadismLvl)
					faceArray.push(8);
				else
					faceArray.push(6);		
			}
			else {
				faceArray.push(4);
			}
			
		}
		//Not offbalanced
		else {
			
			if(isConfident) {
				//Odds of getting confident face increases based on cockiness
				for(let i = 0; i < (cockiness + 30) / 10; ++i) {
					faceArray.push(2);
				}
			}
			//Face 1
			if(staminaPercent >= 75) {
				faceArray.push(1);
				faceArray.push(1);
				faceArray.push(1);
			}
			//Face 3
			if(staminaPercent >= 60 && staminaPercent < 85) {
				faceArray.push(3);
				faceArray.push(3);
				faceArray.push(3);
			}
			//Face 4
			if(staminaPercent >= 45 && staminaPercent < 70) {
				faceArray.push(4);
				faceArray.push(4);
				faceArray.push(4);
			}
			//Face 5
			if(staminaPercent >= 20 && staminaPercent < 55) {
				faceArray.push(5);
				faceArray.push(5);
				faceArray.push(5);
			}
			//Face 6
			if(staminaPercent >= 0 && staminaPercent < 30) {
				faceArray.push(6);
				faceArray.push(6);
				faceArray.push(6);
			}
			
			if(staminaPercent < 20) {
				if(isConfident) {
					faceArray.push(5);
				}
			}
			
			//Special masochist face
			if(masochismLvl + 1 > sadismLvl && staminaPercent < 65) {
				for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
					faceArray.push(8);
				}
			}
			
			//Special sadist face
			if(sadismLvl + 1 > masochismLvl && staminaPercent > 35) {
				for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
					faceArray.push(9);
				}
			}
			
		}
	}
	//Aroused faces
	else if(isAroused) {
	
		//Pleasure based faces
		//Face 7
		if(pleasurePercent >= 100) {
			for(let i = 0; i < (pleasurePercent - 99) / 10; ++i) {
				faceArray.push(7);
			}
		}
		//Face 10
		for(let i = 0; i < Math.min(5, pleasurePercent / 20); ++i) {
			faceArray.push(10);
		}
	
		//Face 8
		for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
			faceArray.push(8);
		}
		
		//Face 9
		for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
			faceArray.push(9);
		}
	
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieMouth(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(1);
		this.setTachieMouth(8);
	}
	else if(faceId === 3) {
		this.setTachieEyes(1);
		this.setTachieMouth(2);
	}
	else if(faceId === 4) {
		this.setTachieEyes(4);
		this.setTachieMouth(3);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(2);
		this.setTachieMouth(4);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		this.setTachieEyes(3);
		this.setTachieMouth(5);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		this.setTachieEyes(7);
		this.setTachieMouth(7);
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		this.setTachieEyes(5);
		this.setTachieMouth(11);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		this.setTachieEyes(6);
		this.setTachieMouth(6);
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		this.setTachieEyes(7);
		this.setTachieMouth(9);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
};

/////////////////
// Emote Kick Pose
/////////////////
Game_Actor.prototype.emoteKickPose = function() {
	let ranNum = Math.randomInt(100);
	let staminaPercent = this.currentPercentOfStamina_realMax();
	let pleasurePercent = this.currentPercentOfOrgasm(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let cockiness = this.cockiness;
	let masochismLvl = this.masochismLvl();
	let sadismLvl = this.sadismLvl();
	let hasHalberd = this.hasHalberd();
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();

	
	if(!this.isWearingGlovesAndHat())
		this.setTachieRightArm('naked_');
	else
		this.setTachieRightArm('');
	
	if(hasHalberd) {
		this.setTachieRightArm(this.tachieRightArm + '2');
	}
	else {
		this.setTachieRightArm(this.tachieRightArm + '1');
	}
	
	//Not aroused
	if(!isAroused) {
		//Off balance faces take priority
		if(isOffBalanced) {
			if(staminaPercent < 50) {
				//face 8 if masochist
				if(masochismLvl + 1 >= sadismLvl)
					faceArray.push(8);
				else
					faceArray.push(6);		
			}
			else {
				faceArray.push(4);
			}
			
		}
		//Not offbalanced
		else {
			
			if(isConfident) {
				//Odds of getting confident face increases based on cockiness
				for(let i = 0; i < (cockiness + 30) / 10; ++i) {
					faceArray.push(2);
				}
			}
			//Face 1
			if(staminaPercent >= 75) {
				faceArray.push(1);
				faceArray.push(1);
				faceArray.push(1);
			}
			//Face 3
			if(staminaPercent >= 60 && staminaPercent < 85) {
				faceArray.push(3);
				faceArray.push(3);
				faceArray.push(3);
			}
			//Face 4
			if(staminaPercent >= 45 && staminaPercent < 70) {
				faceArray.push(4);
				faceArray.push(4);
				faceArray.push(4);
			}
			//Face 5
			if(staminaPercent >= 20 && staminaPercent < 55) {
				faceArray.push(5);
				faceArray.push(5);
				faceArray.push(5);
			}
			//Face 6
			if(staminaPercent >= 0 && staminaPercent < 30) {
				faceArray.push(6);
				faceArray.push(6);
				faceArray.push(6);
			}
			
			if(staminaPercent < 20) {
				if(isConfident) {
					faceArray.push(5);
				}
			}
			
			//Special masochist face
			if(masochismLvl + 1 > sadismLvl && staminaPercent < 65) {
				for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
					faceArray.push(8);
				}
			}
			
			//Special sadist face
			if(sadismLvl + 1 > masochismLvl && staminaPercent > 35) {
				for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
					faceArray.push(9);
				}
			}
			
		}
	}
	//Aroused faces
	else if(isAroused) {
	
		//Pleasure based faces
		//Face 7
		if(pleasurePercent >= 100) {
			for(let i = 0; i < (pleasurePercent - 99) / 10; ++i) {
				faceArray.push(7);
			}
		}
		//Face 10
		for(let i = 0; i < Math.min(5, pleasurePercent / 20); ++i) {
			faceArray.push(10);
		}
	
		//Face 8
		for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
			faceArray.push(8);
		}
		
		//Face 9
		for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
			faceArray.push(9);
		}
	
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieMouth(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(1);
		this.setTachieMouth(8);
	}
	else if(faceId === 3) {
		this.setTachieEyes(1);
		this.setTachieMouth(2);
	}
	else if(faceId === 4) {
		this.setTachieEyes(4);
		this.setTachieMouth(3);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(2);
		this.setTachieMouth(4);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		this.setTachieEyes(3);
		this.setTachieMouth(5);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		this.setTachieEyes(7);
		this.setTachieMouth(7);
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		this.setTachieEyes(5);
		this.setTachieMouth(11);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		this.setTachieEyes(6);
		this.setTachieMouth(6);
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		this.setTachieEyes(7);
		this.setTachieMouth(9);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
};

/////////////////
// Emote Defend Pose
/////////////////
Game_Actor.prototype.emoteDefendPose = function() {
	let ranNum = Math.randomInt(100);
	let staminaPercent = this.currentPercentOfStamina_realMax();
	let pleasurePercent = this.currentPercentOfOrgasm(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let cockiness = this.cockiness;
	let masochismLvl = this.masochismLvl();
	let sadismLvl = this.sadismLvl();
	let hasHalberd = this.hasHalberd();
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(hasHalberd) {
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieLeftArm('halberd_naked');
			this.setTachieRightArm('halberd_naked');
		}
		else {
			this.setTachieLeftArm('halberd');
			this.setTachieRightArm('halberd');
		}
		this.resetTachieSemenLeftArmExtension();
		this.resetTachieSemenRightArmExtension();
	}
	else {
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieLeftArm('unarmed_naked');
			this.setTachieRightArm('unarmed_naked');
		}
		else {
			this.setTachieLeftArm('unarmed');
			this.setTachieRightArm('unarmed');
		}
		this.setTachieSemenLeftArmExtension('unarmed_');
		this.setTachieSemenRightArmExtension('unarmed_');
	}
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		
		this.resetTachieHat();
	}
	else {
		this.setTachieBody('1');
		this.setPoseClothing();
		this.setTachieHat(1);
	}
	
	//Not aroused
	if(!isAroused) {
		//Off balance faces take priority
		if(isOffBalanced) {
			if(staminaPercent < 50) {
				//face 8 if masochist
				if(masochismLvl + 1 > sadismLvl)
					faceArray.push(8);
				else
					faceArray.push(6);		
			}
			else {
				faceArray.push(4);
			}
			
		}
		//Not offbalanced
		else {
			
			if(isConfident) {
				//Odds of getting confident face increases based on cockiness
				for(let i = 0; i < (cockiness + 30) / 10; ++i) {
					faceArray.push(2);
				}
			}
			//Face 1
			if(staminaPercent >= 75) {
				faceArray.push(1);
				faceArray.push(1);
				faceArray.push(1);
			}
			//Face 3
			if(staminaPercent >= 60 && staminaPercent < 85) {
				faceArray.push(3);
				faceArray.push(3);
				faceArray.push(3);
			}
			//Face 4
			if(staminaPercent >= 45 && staminaPercent < 70) {
				faceArray.push(4);
				faceArray.push(4);
				faceArray.push(4);
			}
			//Face 5
			if(staminaPercent >= 20 && staminaPercent < 55) {
				faceArray.push(5);
				faceArray.push(5);
				faceArray.push(5);
			}
			//Face 6
			if(staminaPercent >= 0 && staminaPercent < 30) {
				faceArray.push(6);
				faceArray.push(6);
				faceArray.push(6);
			}
			
			if(staminaPercent < 20) {
				if(isConfident) {
					faceArray.push(5);
				}
			}
			
			//Special masochist face
			if(masochismLvl + 1 > sadismLvl && staminaPercent < 65) {
				for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
					faceArray.push(8);
				}
			}
			
			//Special sadist face
			if(sadismLvl + 1 > masochismLvl && staminaPercent > 35) {
				for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
					faceArray.push(9);
				}
			}
			
		}
	}
	//Aroused faces
	else if(isAroused) {
	
		//Pleasure based faces
		//Face 7
		if(pleasurePercent >= 100) {
			for(let i = 0; i < (pleasurePercent - 99) / 10; ++i) {
				faceArray.push(7);
			}
		}
		//Face 10
		for(let i = 0; i < Math.min(5, pleasurePercent / 20); ++i) {
			faceArray.push(10);
		}
	
		//Face 8
		for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
			faceArray.push(8);
		}
		
		//Face 9
		for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
			faceArray.push(9);
		}
	
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieMouth(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(1);
		this.setTachieMouth(8);
	}
	else if(faceId === 3) {
		this.setTachieEyes(1);
		this.setTachieMouth(2);
	}
	else if(faceId === 4) {
		this.setTachieEyes(4);
		this.setTachieMouth(3);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(2);
		this.setTachieMouth(4);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		this.setTachieEyes(3);
		this.setTachieMouth(5);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		this.setTachieEyes(3);
		this.setTachieMouth(6);
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		this.setTachieEyes(5);
		this.setTachieMouth(11);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		this.setTachieEyes(6);
		this.setTachieMouth(12);
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		this.setTachieEyes(7);
		this.setTachieMouth(13);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
};

/////////////////
// Emote Evade Pose
/////////////////
Game_Actor.prototype.emoteEvadePose = function() {
	let ranNum = Math.randomInt(100);
	let staminaPercent = this.currentPercentOfStamina_realMax();
	let pleasurePercent = this.currentPercentOfOrgasm(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let cockiness = this.cockiness;
	let masochismLvl = this.masochismLvl();
	let sadismLvl = this.sadismLvl();
	let hasHalberd = this.hasHalberd();
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(!this.isWearingGlovesAndHat()) {
		if(hasHalberd) {
			this.setTachieBody('naked_1');
		}
		else {
			this.setTachieBody('naked_2');
		}
		
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		
		this.resetTachieHat();
	}
	else {
		if(hasHalberd) {
			this.setTachieBody('1');
		}
		else {
			this.setTachieBody('2');
		}
		this.setPoseClothing();
		this.setTachieHat(1);
	}
	
	//Not aroused
	if(!isAroused) {
		//Off balance faces take priority
		if(isOffBalanced) {
			if(staminaPercent < 50) {
				//face 8 if masochist
				if(masochismLvl + 1 > sadismLvl)
					faceArray.push(8);
				else
					faceArray.push(6);		
			}
			else {
				faceArray.push(4);
			}
			
		}
		//Not offbalanced
		else {
			
			if(isConfident) {
				//Odds of getting confident face increases based on cockiness
				for(let i = 0; i < (cockiness + 30) / 10; ++i) {
					faceArray.push(2);
				}
			}
			//Face 1
			if(staminaPercent >= 75) {
				faceArray.push(1);
				faceArray.push(1);
				faceArray.push(1);
			}
			//Face 3
			if(staminaPercent >= 60 && staminaPercent < 85) {
				faceArray.push(3);
				faceArray.push(3);
				faceArray.push(3);
			}
			//Face 4
			if(staminaPercent >= 45 && staminaPercent < 70) {
				faceArray.push(4);
				faceArray.push(4);
				faceArray.push(4);
			}
			//Face 5
			if(staminaPercent >= 20 && staminaPercent < 55) {
				faceArray.push(5);
				faceArray.push(5);
				faceArray.push(5);
			}
			//Face 6
			if(staminaPercent >= 0 && staminaPercent < 30) {
				faceArray.push(6);
				faceArray.push(6);
				faceArray.push(6);
			}
			
			if(staminaPercent < 20) {
				if(isConfident) {
					faceArray.push(5);
				}
			}
			
			//Special masochist face
			if(masochismLvl + 1 > sadismLvl && staminaPercent < 65) {
				for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
					faceArray.push(8);
				}
			}
			
			//Special sadist face
			if(sadismLvl + 1 > masochismLvl && staminaPercent > 35) {
				for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
					faceArray.push(9);
				}
			}
			
		}
	}
	//Aroused faces
	else if(isAroused) {
	
		//Pleasure based faces
		//Face 7
		if(pleasurePercent >= 100) {
			for(let i = 0; i < (pleasurePercent - 99) / 10; ++i) {
				faceArray.push(7);
			}
		}
		//Face 10
		for(let i = 0; i < Math.min(5, pleasurePercent / 20); ++i) {
			faceArray.push(10);
		}
	
		//Face 8
		for(let i = 0; i < masochismLvl - sadismLvl; ++i) {
			faceArray.push(8);
		}
		
		//Face 9
		for(let i = 0; i < sadismLvl - masochismLvl; ++i) {
			faceArray.push(9);
		}
	
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieMouth(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(1);
		this.setTachieMouth(8);
	}
	else if(faceId === 3) {
		this.setTachieEyes(1);
		this.setTachieMouth(4);
	}
	else if(faceId === 4) {
		this.setTachieEyes(4);
		this.setTachieMouth(3);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(2);
		this.setTachieMouth(6);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		this.setTachieEyes(3);
		this.setTachieMouth(5);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		this.setTachieEyes(3);
		this.setTachieMouth(11);
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		this.setTachieEyes(5);
		this.setTachieMouth(12);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		this.setTachieEyes(6);
		this.setTachieMouth(13);
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		this.setTachieEyes(2);
		this.setTachieMouth(2);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
};

/////////////////
// Emote Standby Pose
/////////////////
Game_Actor.prototype.emoteStandbyPose = function() {
	let ranNum = Math.randomInt(100);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isHorny = this.isHorny;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let usingCounterStance = this.isStateAffected(STATE_COUNTER_STANCE_ID);
	let usingFocus = this.isStateAffected(STATE_FOCUS_ID);
	let usingEyeOfTheMind = this.isStateAffected(STATE_EYE_OF_THE_MIND_ID);
	let usingOpenPleasure = this.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID);
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_STRIP) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SIGHT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	
	let generalReactionScore = this.getCombatPoseReactionScore(false);
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let masoReactionScore = this.getCombatPoseReactionScore(true);
	let cockStareReactionScore = this.getCockStareReactionScore();
	let staminaPercent = this.currentPercentOfStamina_realMax();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let generallvl1 = generalReactionScore >= VAR_DEF_RS_LV1_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let masolvl3 = masoReactionScore >= VAR_DEF_RS_LV3_REQ;
	let masolvl2 = masoReactionScore >= VAR_DEF_RS_LV2_REQ;
	let masolvl1 = masoReactionScore >= VAR_DEF_RS_LV1_REQ;
	let starelvl3 = cockStareReactionScore >= VAR_DEF_RS_LV3_REQ;
	let starelvl2 = cockStareReactionScore >= VAR_DEF_RS_LV2_REQ;
	let starelvl1 = cockStareReactionScore >= VAR_DEF_RS_LV1_REQ;
	let stamina100_81 = staminaPercent >= 81;
	let stamina80_61 = staminaPercent < 81 && staminaPercent >= 61;
	let stamina60_41 = staminaPercent < 61 && staminaPercent >= 41;
	let stamina40_21 = staminaPercent < 41 && staminaPercent >= 21;
	let stamina20_01 = staminaPercent < 21;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	this.resetTachieFrontA();
	
	let standbyPoseType = "normal_";
	if(isConfident) {
		standbyPoseType = "horizontal_";
	}
	let tachieLeftArmName = '';
	let tachieRightArmName = '';
	let tachieHoppeName = '';
	let tachieSweatName = '';
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	let ignoreBukkakeEyes = false;
	
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('' + standbyPoseType + 'naked_1');
		if(isAroused) {
			this.setTachieBoobs('naked_1_hard');
		}
		else {
			this.setTachieBoobs('naked_1');
		}
		tachieLeftArmName = 'naked_';
		tachieRightArmName = 'naked_';
	}
	else {
		this.setTachieBody('' + standbyPoseType + '1');
		this.setPoseClothing();
		this.setTachieHat('' + standbyPoseType + '1');
	}
	
	if(isConfident) {
		tachieLeftArmName += 'confident_1';
		tachieRightArmName += 'confident_1';

		this.setTachieWeapon('confident_' + this.equips()[0].id);
		this.setTachieSemenLeftArmExtension('confident_');
		this.setTachieSemenRightArmExtension('confident_');
		this.setTachieSemenFaceExtension('horizontal_');
	}
	else {
		if(usingCounterStance || usingFocus || usingEyeOfTheMind) {
			tachieLeftArmName += '2';
		}
		else {
			tachieLeftArmName += '1';
		}
		tachieRightArmName += '1';
		
		this.setPoseWeapon();
		this.resetTachieSemenLeftArmExtension();
		this.resetTachieSemenRightArmExtension();
		this.setTachieSemenFaceExtension('normal_');
	}
	
	//frontA
	if(isOffBalanced) {
		if(ranNum < 75) {
			if(isConfident) {
				this.setTachieFrontA('offbalanced_confident');
			}
			else {
				this.setTachieFrontA('offbalanced');
			}
		}
	}
	
	//Confident faces
	if(isConfident) {
		if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(91);
			else if(bukkakelvl2)
				faceArray.push(90);
			else
				faceArray.push(89);
		}
		else if(justGotHarassed) {
			if(generallvl3)
				faceArray.push(91);
			else if(generallvl2)
				faceArray.push(90);
			else
				faceArray.push(89);
		}
		else if(karrynJustUsedCockPet) {
			if(generallvl3) 
				faceArray.push(85);
			else if(generallvl2)
				faceArray.push(84);
			else
				faceArray.push(83);
		}
		else if(karrynJustUsedCockStare) {
			if(starelvl3)
				faceArray.push(85);
			else if(starelvl2)
				faceArray.push(84);
			else if(starelvl1)
				faceArray.push(83);
			else
				faceArray.push(82);
		}
		else if(isHorny || usingOpenPleasure) {
			if(generallvl3) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(79);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(80);
				else
					faceArray.push(81);
			}
			else if(generallvl2) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(68);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(69);
				else
					faceArray.push(70);
			}
			else {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(57);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(58);
				else
					faceArray.push(59);
			}
		}
		else if(isOffBalanced) {
			if(masolvl3) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(76);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(77);
				else
					faceArray.push(78);
			}
			else if(masolvl2) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(65);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(66);
				else
					faceArray.push(67);
			}
			else {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(54);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(55);
				else
					faceArray.push(56);
			}
		}
		else if(isAroused) {
			if(generallvl3) {
				if(stamina100_81) 
					faceArray.push(71);
				else if(stamina80_61)
					faceArray.push(72);
				else if(stamina60_41)
					faceArray.push(73);
				else if(stamina40_21)
					faceArray.push(74);
				else
					faceArray.push(75);
			}
			else if(generallvl2) {
				if(stamina100_81) 
					faceArray.push(60);
				else if(stamina80_61)
					faceArray.push(61);
				else if(stamina60_41)
					faceArray.push(62);
				else if(stamina40_21)
					faceArray.push(63);
				else
					faceArray.push(64);
			}
			else {
				if(stamina100_81) 
					faceArray.push(49);
				else if(stamina80_61)
					faceArray.push(50);
				else if(stamina60_41)
					faceArray.push(51);
				else if(stamina40_21)
					faceArray.push(52);
				else
					faceArray.push(53);
			}
		}
		else {
			if(stamina100_81) 
				faceArray.push(44);
			else if(stamina80_61)
				faceArray.push(45);
			else if(stamina60_41)
				faceArray.push(46);
			else if(stamina40_21)
				faceArray.push(47);
			else
				faceArray.push(48);
		}
		
	}
	//Normal faces
	else {
		if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(88);
			else if(bukkakelvl2)
				faceArray.push(87);
			else
				faceArray.push(86);
		}
		else if(justGotHarassed) {
			if(generallvl3)
				faceArray.push(88);
			else if(generallvl2)
				faceArray.push(87);
			else
				faceArray.push(86);
		}
		else if(karrynJustUsedCockPet) {
			if(generallvl3) 
				faceArray.push(43);
			else if(generallvl2)
				faceArray.push(42);
			else
				faceArray.push(41);
		}
		else if(karrynJustUsedCockStare) {
			if(starelvl3)
				faceArray.push(43);
			else if(starelvl2)
				faceArray.push(42);
			else if(starelvl1)
				faceArray.push(41);
			else
				faceArray.push(40);
		}
		else if(isHorny) {
			if(generallvl3) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(37);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(38);
				else
					faceArray.push(39);
			}
			else if(generallvl2) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(25);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(26);
				else
					faceArray.push(27);
			}
			else {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(14);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(15);
				else
					faceArray.push(16);
			}
		}
		else if(isOffBalanced) {
			if(masolvl3) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(34);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(35);
				else
					faceArray.push(36);
			}
			else if(masolvl2) {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(22);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(23);
				else
					faceArray.push(24);
			}
			else {
				if(stamina100_81 || stamina80_61) 
					faceArray.push(11);
				else if(stamina60_41 || stamina40_21)
					faceArray.push(12);
				else
					faceArray.push(13);
			}
		}
		else if(isAroused) {
			if(generallvl3) {
				if(stamina100_81) 
					faceArray.push(28);
				else if(stamina80_61)
					faceArray.push(29);
				else if(stamina60_41)
					faceArray.push(30);
				else if(stamina40_21)
					faceArray.push(32);
				else
					faceArray.push(33);
			}
			else if(generallvl2) {
				if(stamina100_81) 
					faceArray.push(17);
				else if(stamina80_61)
					faceArray.push(18);
				else if(stamina60_41)
					faceArray.push(19);
				else if(stamina40_21)
					faceArray.push(20);
				else
					faceArray.push(21);
			}
			else {
				if(stamina100_81) 
					faceArray.push(6);
				else if(stamina80_61)
					faceArray.push(7);
				else if(stamina60_41)
					faceArray.push(8);
				else if(stamina40_21)
					faceArray.push(9);
				else
					faceArray.push(10);
			}
		}
		else {
			if(stamina100_81) 
				faceArray.push(1);
			else if(stamina80_61)
				faceArray.push(2);
			else if(stamina60_41)
				faceArray.push(3);
			else if(stamina40_21)
				faceArray.push(4);
			else
				faceArray.push(5);
		}
		
	}
	
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		mouthArray.push('hu1');
		mouthArray.push('hu2');
	}
	else if(faceId === 2) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
	}
	else if(faceId === 3) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		mouthArray.push('ku3');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ku3');
		mouthArray.push('wa2');
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('uru2');
		mouthArray.push('ku2');
		mouthArray.push('ku3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 11) {
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('ku3');
		mouthArray.push('ku2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		mouthArray.push('wa2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('hu2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 15) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		mouthArray.push('hu2');
		mouthArray.push('hu1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		mouthArray.push('wa3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		mouthArray.push('hu2');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('uru1');
		mouthArray.push('mu3');
		mouthArray.push('mu4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru2');
		mouthArray.push('ku1');
		mouthArray.push('mu2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 20) {
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('uru2');
		mouthArray.push('ku3');
		mouthArray.push('mu1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 23) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		mouthArray.push('hu2');
		mouthArray.push('mu3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 24) {
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		eyesArray.push('mae3');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyesArray.push('uru1');
		mouthArray.push('pero1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 26) {
		eyebrowsArray.push('koma2');
		eyesArray.push('uru2');
		mouthArray.push('hu1');
		mouthArray.push('nico1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 27) {
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 28) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uru1');
		mouthArray.push('nico2');
		mouthArray.push('nico1');
		mouthArray.push('pero1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 29) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru1');
		eyesArray.push('mae1');
		mouthArray.push('ho2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 30) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru2');
		mouthArray.push('hu1');
		mouthArray.push('hu2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 32) {
		eyebrowsArray.push('koma1');
		eyesArray.push('uru2');
		eyesArray.push('mae3');
		mouthArray.push('ku1');
		mouthArray.push('mu3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 33) {
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		eyesArray.push('mae3');
		mouthArray.push('wa3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 34) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('namida1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 35) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('namida2');
		mouthArray.push('ahe2');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 36) {
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		eyesArray.push('namida2');
		mouthArray.push('ahe1');
		mouthArray.push('ku2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 37) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('heart2');
		mouthArray.push('pero2');
		mouthArray.push('ahe1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 38) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko2');
		eyesArray.push('heart2');
		mouthArray.push('pero1');
		mouthArray.push('ahe2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 39) {
		eyebrowsArray.push('koma2');
		eyesArray.push('heart2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 40) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		mouthArray.push('ku3');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 41) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 42) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('hu2');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 43) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 44) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
	}
	else if(faceId === 45) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
	}
	else if(faceId === 46) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 47) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('jito1');
		eyesArray.push('mae2');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 48) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('jito1');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('ku1');
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 49) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 50) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 51) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 52) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('oko1');
		eyesArray.push('jito1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 53) {
		eyebrowsArray.push('koma3');
		eyesArray.push('toji2');
		eyesArray.push('jito2');
		mouthArray.push('mu1');
		mouthArray.push('ku2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 54) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('wara1');
		mouthArray.push('nico1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 55) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('jito1');
		mouthArray.push('wa1');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 56) {
		eyebrowsArray.push('koma1');
		eyesArray.push('jito2');
		mouthArray.push('wa2');
		mouthArray.push('ku2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 57) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri3');
		eyesArray.push('mae2');
		mouthArray.push('wara2');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 58) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('jito1');
		mouthArray.push('nico2');
		mouthArray.push('nico1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 59) {
		eyebrowsArray.push('oko1');
		eyesArray.push('uru2');
		mouthArray.push('wa1');
		mouthArray.push('ho3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 60) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('wara1');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 61) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('jito1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 62) {
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('oko1');
		eyesArray.push('uru2');
		mouthArray.push('ho1');
		mouthArray.push('mu3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 63) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('uru2');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 64) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('jito2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 65) {
		eyebrowsArray.push('kiri3');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae2');
		eyesArray.push('uru2');
		mouthArray.push('wara2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 66) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uru2');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 67) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma3');
		eyesArray.push('toji1');
		eyesArray.push('jito2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 68) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri3');
		eyesArray.push('uru1');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 69) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico2');
		eyesArray.push('uru2');
		mouthArray.push('ahe1');
		mouthArray.push('nico1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 70) {
		eyebrowsArray.push('koma2');
		eyesArray.push('jito1');
		mouthArray.push('nico1');
		mouthArray.push('ho4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 71) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri3');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		mouthArray.push('pero1');
		mouthArray.push('nico4');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 72) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 73) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('oko1');
		eyesArray.push('uru2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 74) {
		eyebrowsArray.push('koma1');
		eyesArray.push('jito1');
		eyesArray.push('uru2');
		mouthArray.push('ahe3');
		mouthArray.push('ho3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 75) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		mouthArray.push('ho1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 76) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('uru2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 77) {
		eyebrowsArray.push('koma2');
		eyesArray.push('uru2');
		mouthArray.push('pero2');
		mouthArray.push('nico4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 78) {
		eyebrowsArray.push('koma3');
		eyesArray.push('toji2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wara1');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 79) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri3');
		eyesArray.push('heart3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 80) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('heart1');
		mouthArray.push('nico4');
		mouthArray.push('wara2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 81) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('heart2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ho4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 82) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('jito1');
		mouthArray.push('wa2');
		mouthArray.push('ku2');
		mouthArray.push('ho3');
		mouthArray.push('mu3');
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 83) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		eyesArray.push('jito1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('mu3');
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 84) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('uru2');
		eyesArray.push('jito1');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho3');
		mouthArray.push('ho4');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 85) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		eyesArray.push('heart3');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		mouthArray.push('wara1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 86) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ku3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 87) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		eyesArray.push('mae3');
		eyesArray.push('toji2');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 88) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico1');
		mouthArray.push('ho2');
		mouthArray.push('wa3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 89) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('jito1');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		eyesArray.push('oko1');
		mouthArray.push('wa2');
		mouthArray.push('ho3');
		mouthArray.push('ho4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 90) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru1');
		eyesArray.push('jito2');
		eyesArray.push('uru2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('ho3');
		mouthArray.push('ho4');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 91) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('uru1');
		eyesArray.push('heart1');
		eyesArray.push('uru2');
		eyesArray.push('heart2');
		eyesArray.push('heart3');
		eyesArray.push('toji2');
		eyesArray.push('jito2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		mouthArray.push('ho4');
		mouthArray.push('pero2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	
	
	if(karrynGotBukkaked && !ignoreBukkakeEyes) {
		eyesArray = [];
		if(isConfident) {
			eyesArray.push('jito2');
			eyesArray.push('toji2');
		}
		else {
			eyesArray.push('mae3');
			eyesArray.push('toji1');
		}
		if(!displayTachieSweat) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + standbyPoseType + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + standbyPoseType + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + standbyPoseType + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	if(displayTachieHoppe) this.setTachieHoppe('' + standbyPoseType + tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat('' + standbyPoseType + tachieSweatName);
	this.setTachieLeftArm(tachieLeftArmName);
	this.setTachieRightArm(tachieRightArmName);
};

/////////////////
// Emote Unarmed Pose
/////////////////
Game_Actor.prototype.emoteUnarmedPose = function() {
	let ranNum = Math.randomInt(100);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let isHorny = this.isHorny;
	let usingOpenPleasure = this.isStateAffected(STATE_OPEN_PLEASURE_STANCE_ID);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_STRIP) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SIGHT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	
	let generalReactionScore = this.getCombatPoseReactionScore(false);
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let masoReactionScore = this.getCombatPoseReactionScore(true);
	let cockStareReactionScore = this.getCockStareReactionScore();
	let staminaPercent = this.currentPercentOfStamina_realMax();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let generallvl1 = generalReactionScore >= VAR_DEF_RS_LV1_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let masolvl3 = masoReactionScore >= VAR_DEF_RS_LV3_REQ;
	let masolvl2 = masoReactionScore >= VAR_DEF_RS_LV2_REQ;
	let masolvl1 = masoReactionScore >= VAR_DEF_RS_LV1_REQ;
	let starelvl3 = cockStareReactionScore >= VAR_DEF_RS_LV3_REQ;
	let starelvl2 = cockStareReactionScore >= VAR_DEF_RS_LV2_REQ;
	let starelvl1 = cockStareReactionScore >= VAR_DEF_RS_LV1_REQ;
	let stamina100_81 = staminaPercent >= 81;
	let stamina80_61 = staminaPercent < 81 && staminaPercent >= 61;
	let stamina60_41 = staminaPercent < 61 && staminaPercent >= 41;
	let stamina40_21 = staminaPercent < 41 && staminaPercent >= 21;
	let stamina20_01 = staminaPercent < 21;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	this.resetTachieFrontA();
	let ignoreBukkakeEyes = false;
	
	if(isOffBalanced) {
		if(ranNum < 75) {
			this.setTachieFrontA('offbalanced');
		}
	}
	
	if(karrynGotBukkaked) {
		if(bukkakelvl3) 
			faceArray.push(50);
		else if(bukkakelvl2)
			faceArray.push(49);
		else
			faceArray.push(48);
	}
	else if(justGotHarassed) {
		if(generallvl3) 
			faceArray.push(50);
		else if(generallvl2)
			faceArray.push(49);
		else
			faceArray.push(48);
	}
	else if(karrynJustUsedCockPet) {
		if(generallvl3) 
			faceArray.push(47);
		else if(generallvl2)
			faceArray.push(46);
		else
			faceArray.push(45);
	}
	else if(karrynJustUsedCockStare) {
		if(starelvl3)
			faceArray.push(47);
		else if(starelvl2)
			faceArray.push(46);
		else if(starelvl1)
			faceArray.push(45);
		else
			faceArray.push(44);
	}
	else if(isHorny || usingOpenPleasure) {
		if(generallvl3) {
			if(stamina100_81 || stamina80_61) 
				faceArray.push(41);
			else if(stamina60_41 || stamina40_21)
				faceArray.push(42);
			else
				faceArray.push(43);
		}
		else if(generallvl2) {
			if(stamina100_81 || stamina80_61) 
				faceArray.push(30);
			else if(stamina60_41 || stamina40_21)
				faceArray.push(31);
			else
				faceArray.push(32);
		}
		else {
			if(stamina100_81 || stamina80_61) 
				faceArray.push(19);
			else if(stamina60_41 || stamina40_21)
				faceArray.push(20);
			else
				faceArray.push(21);
		}
	}
	else if(isOffBalanced) {
		if(masolvl3) {
			if(stamina100_81 || stamina80_61) 
				faceArray.push(38);
			else if(stamina60_41 || stamina40_21)
				faceArray.push(39);
			else
				faceArray.push(40);
		}
		else if(masolvl2) {
			if(stamina100_81 || stamina80_61) 
				faceArray.push(27);
			else if(stamina60_41 || stamina40_21)
				faceArray.push(28);
			else
				faceArray.push(29);
		}
		else {
			if(stamina100_81 || stamina80_61) 
				faceArray.push(16);
			else if(stamina60_41 || stamina40_21)
				faceArray.push(17);
			else
				faceArray.push(18);
		}
	}
	else if(isAroused) {
		if(generallvl3) {
			if(stamina100_81) 
				faceArray.push(33);
			else if(stamina80_61)
				faceArray.push(34);
			else if(stamina60_41)
				faceArray.push(35);
			else if(stamina40_21)
				faceArray.push(36);
			else
				faceArray.push(37);
		}
		else if(generallvl2) {
			if(stamina100_81) 
				faceArray.push(22);
			else if(stamina80_61)
				faceArray.push(23);
			else if(stamina60_41)
				faceArray.push(24);
			else if(stamina40_21)
				faceArray.push(25);
			else
				faceArray.push(26);
		}
		else {
			if(stamina100_81) 
				faceArray.push(11);
			else if(stamina80_61)
				faceArray.push(12);
			else if(stamina60_41)
				faceArray.push(13);
			else if(stamina40_21)
				faceArray.push(14);
			else
				faceArray.push(15);
		}
		
	}
	else if(isConfident) {
		if(stamina100_81) 
			faceArray.push(1);
		else if(stamina80_61)
			faceArray.push(2);
		else if(stamina60_41)
			faceArray.push(3);
		else if(stamina40_21)
			faceArray.push(4);
		else
			faceArray.push(5);
	}
	else {
		if(stamina100_81) 
			faceArray.push(6);
		else if(stamina80_61)
			faceArray.push(7);
		else if(stamina60_41)
			faceArray.push(8);
		else if(stamina40_21)
			faceArray.push(9);
		else
			faceArray.push(10);
	}
	
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera2');
		eyesArray.push('camera1');
		mouthArray.push('nico3');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
	}
	else if(faceId === 2) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera2');
		eyesArray.push('camera1');
		mouthArray.push('nico3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
	}
	else if(faceId === 3) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera2');
		eyesArray.push('camera1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('camera2');
		eyesArray.push('jito1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('jito2');
		eyesArray.push('jito1');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		this.setTachieSweat(2);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera1');
		mouthArray.push('mu3');
		mouthArray.push('nico1');
		mouthArray.push('wa1');
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyesArray.push('camera1');
		eyesArray.push('camera2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('jito1');
		eyesArray.push('camera2');
		mouthArray.push('ku2');
		mouthArray.push('ku3');
		mouthArray.push('wa2');
		this.setTachieSweat(2);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma2');
		eyesArray.push('jito1');
		eyesArray.push('toji1');
		mouthArray.push('ku3');
		mouthArray.push('wa2');
		this.setTachieSweat(2);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera1');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera1');
		eyesArray.push('camera2');
		mouthArray.push('mu3');
		mouthArray.push('mu2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('camera1');
		eyesArray.push('camera2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('jito1');
		eyesArray.push('jito2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('koma3');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		mouthArray.push('mu1');
		mouthArray.push('ku3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera1');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera2');
		eyesArray.push('jito1');
		mouthArray.push('wa1');
		mouthArray.push('ho2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma1');
		eyesArray.push('jito2');
		mouthArray.push('wa2');
		mouthArray.push('ku2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera2');
		mouthArray.push('wara2');
		mouthArray.push('nico3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera2');
		eyesArray.push('jito1');
		mouthArray.push('nico1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('oko1');
		eyesArray.push('uru2');
		mouthArray.push('wa1');
		mouthArray.push('ho3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('camera1');
		eyesArray.push('camera2');
		mouthArray.push('wara1');
		mouthArray.push('nico3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('jito1');
		eyesArray.push('camera2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru2');
		mouthArray.push('ho1');
		mouthArray.push('mu3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('uru2');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('jito2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('camera2');
		eyesArray.push('uru2');
		mouthArray.push('wara2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('kiri2');
		eyesArray.push('uru2');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('jito2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uru1');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('uru2');
		mouthArray.push('nico3');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('koma2');
		eyesArray.push('jito1');
		mouthArray.push('nico1');
		mouthArray.push('ho4');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico1');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('pero1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 34) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 35) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('jito1');
		eyesArray.push('uru2');
		mouthArray.push('nico3');
		mouthArray.push('wara1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 36) {
		eyebrowsArray.push('koma1');
		eyesArray.push('jito1');
		eyesArray.push('uru2');
		mouthArray.push('ahe3');
		mouthArray.push('ho3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 37) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		mouthArray.push('ho1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 38) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uru2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 39) {
		eyebrowsArray.push('koma3');
		eyesArray.push('uru2');
		mouthArray.push('pero2');
		mouthArray.push('nico4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 40) {
		eyebrowsArray.push('koma3');
		eyesArray.push('toji2');
		eyesArray.push('jito1');
		mouthArray.push('wa1');
		mouthArray.push('wara1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 41) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heart1');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 42) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heart1');
		mouthArray.push('nico4');
		mouthArray.push('wara2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 43) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('heart2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ho4');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
		ignoreBukkakeEyes = true;
	}
	else if(faceId === 44) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('camera1');
		eyesArray.push('jito1');
		mouthArray.push('mu3');
		mouthArray.push('wa2');
		mouthArray.push('ku2');
		mouthArray.push('ho3');
		this.setTachieSweat(2);
	}
	else if(faceId === 45) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('camera1');
		eyesArray.push('camera2');
		eyesArray.push('jito1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('mu3');
		this.setTachieSweat(1);
	}
	else if(faceId === 46) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('camera2');
		eyesArray.push('uru2');
		eyesArray.push('jito1');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho3');
		mouthArray.push('ho4');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 47) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		mouthArray.push('wara1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 48) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('jito1');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		mouthArray.push('wa2');
		mouthArray.push('ho3');
		mouthArray.push('ho4');
		mouthArray.push('ku1');
		mouthArray.push('ku3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 49) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		eyesArray.push('jito2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho3');
		mouthArray.push('ho4');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 50) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		eyesArray.push('jito2');
		eyesArray.push('toji2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		mouthArray.push('ho4');
		mouthArray.push('pero2');
		this.setTachieHoppe(1);
	}
	
	
	if(karrynGotBukkaked && !ignoreBukkakeEyes) {
		eyesArray = [];
		eyesArray.push('jito2');
		eyesArray.push('toji2');
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}	
};

/////////////////
// Emote Down Stamina Pose 
/////////////////
Game_Actor.prototype.emoteDownStaminaPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isHorny = this.isHorny;
	let isWearingPanties = this.isWearingPanties();
	
	let energyPercent = this.currentPercentOfEnergy_realMax();
	let energyAt100To41 = energyPercent >= 41;
	let energyAt40To0 = energyPercent < 41;
	let generalReactionScore = this.getDownPoseReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let tachieBodyType = '1';
	if(!isWearingPanties && generallvl3) tachieBodyType = '2';
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_' + tachieBodyType + '_cen');
		else
			this.setTachieBody('naked_' + tachieBodyType);
		
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		
		this.resetTachieHat();
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('' + tachieBodyType + '_cen');
		else
			this.setTachieBody(tachieBodyType);
		this.setPoseClothing();
		this.setTachieHat(1);
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(isHorny) {
		if(generallvl3) {
			if(energyAt100To41)
				faceArray.push(11);
			else
				faceArray.push(12);
		}
		else if(generallvl2) {
			if(energyAt100To41)
				faceArray.push(9);
			else
				faceArray.push(10);
		}
		else {
			if(energyAt100To41)
				faceArray.push(7);
			else
				faceArray.push(8);
		}
	}
	else {
		if(generallvl3) {
			if(energyAt100To41)
				faceArray.push(5);
			else
				faceArray.push(6);
		}
		else if(generallvl2) {
			if(energyAt100To41)
				faceArray.push(3);
			else
				faceArray.push(4);
		}
		else {
			if(energyAt100To41)
				faceArray.push(1);
			else
				faceArray.push(2);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('camera1');
		eyesArray.push('camera2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu3');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('camera2');
		eyesArray.push('camera3');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('camera2');
		eyesArray.push('camera1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('camera2');
		eyesArray.push('camera3');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('camera2');
		eyesArray.push('camera1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		mouthArray.push('mu2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('camera2');
		eyesArray.push('camera3');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico2');
		mouthArray.push('ho3');
		mouthArray.push('wara2');
		mouthArray.push('wara1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('camera1');
		mouthArray.push('pero1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyesArray.push('camera2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('uru1');
		eyesArray.push('uru2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		mouthArray.push('pero1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('uru2');
		mouthArray.push('mu2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico2');
		mouthArray.push('wara2');
		mouthArray.push('pero1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heart2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('nico2');
		mouthArray.push('nico1');
		mouthArray.push('wara1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
		
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}	
};

/////////////////
// Emote Down Falldown Pose 
/////////////////
Game_Actor.prototype.emoteDownFalldownPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isHorny = this.isHorny;
	let staminaPercent = this.currentPercentOfStamina_realMax();
	let highStamina = staminaPercent >= 61;
	let medStamina = staminaPercent >= 21 && staminaPercent < 61
	let lowStamina = staminaPercent < 21;
	let masochismLvl = this.masochismLvl();
	
	let generalReactionScore = this.getDownPoseReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let isMasochist = (this.masochismLvl() + 3 > this.sadismLvl() && generallvl3) || (this.masochismLvl() + 6 > this.sadismLvl() && generallvl2);

	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		
		this.resetTachieHat();
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		this.setPoseClothing();
		this.setTachieHat(1);
	}

	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(isHorny) {
		if(generallvl3) {
			if(highStamina)
				faceArray.push(17);
			else if(medStamina)
				faceArray.push(18);
			else
				faceArray.push(19);
		}
		else if(generallvl2) {
			if(highStamina)
				faceArray.push(14);
			else if(medStamina)
				faceArray.push(15);
			else
				faceArray.push(16);
		}
		else {
			if(highStamina)
				faceArray.push(11);
			else if(medStamina)
				faceArray.push(12);
			else
				faceArray.push(13);
		}
	}
	else if(isMasochist) {
		faceArray.push(10);
	}
	else if(generallvl3) {
		if(highStamina)
			faceArray.push(7);
		else if(medStamina)
			faceArray.push(8);
		else
			faceArray.push(9);
	}
	else if(generallvl2) {
		if(highStamina)
			faceArray.push(4);
		else if(medStamina)
			faceArray.push(5);
		else
			faceArray.push(6);
	}
	else {
		if(highStamina)
			faceArray.push(1);
		else if(medStamina)
			faceArray.push(2);
		else
			faceArray.push(3);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('ku1');
		eyesArray.push('mae1');
		mouthArray.push('gugi1');
		mouthArray.push('mu1');
		mouthArray.push('au1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('toji2');
		mouthArray.push('gugi1');
		mouthArray.push('mu1');
		mouthArray.push('au1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('gugi1');
		mouthArray.push('mu1');
		mouthArray.push('au1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('ku2');
		eyesArray.push('mae1');
		mouthArray.push('mu2');
		mouthArray.push('au2');
		mouthArray.push('au1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('ku2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('toji2');
		mouthArray.push('au2');
		mouthArray.push('ahe1');
		mouthArray.push('wa2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji3');
		eyesArray.push('toji2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('mu2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('nico1');
		eyesArray.push('mae2');
		eyesArray.push('toji2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico1');
		eyesArray.push('toji3');
		eyesArray.push('toji2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('toji3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe3');
		mouthArray.push('au2');
		mouthArray.push('mu2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('au1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('ku2');
		eyesArray.push('uru2');
		mouthArray.push('mu1');
		mouthArray.push('ahe1');
		mouthArray.push('au2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uru1');
		mouthArray.push('pero1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('uru2');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('ahe2');
		mouthArray.push('mu3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyesArray.push('heart1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heart2');
		mouthArray.push('ahe4');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}	
};

/////////////////
// Emote Standing Handjob Human Pose
/////////////////
Game_Actor.prototype.emoteStandingHandjobPose = function() {
	let ranNum = Math.randomInt(100);
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let generalReactionScore = this.getReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let isSadist = (this.sadismLvl() + 3 > this.masochismLvl() && generallvl3) || (this.sadismLvl() + 7 > this.masochismLvl() && generallvl2);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieRightArm('naked_1');
		if(hasLeftHandjob)
			this.setTachieLeftArm('hj_naked');
		else 
			this.setTachieLeftArm('empty_naked');
	}
	else {
		this.setTachieRightArm('1');
		if(hasLeftHandjob)
			this.setTachieLeftArm('hj');
		else 
			this.setTachieLeftArm('empty');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(isSadist) {
		if(hasLeftHandjob)
			faceArray.push(8);
		else
			faceArray.push(4);
	}
	else if(generallvl3) {
		if(hasLeftHandjob)
			faceArray.push(7);
		else
			faceArray.push(3);
	}
	else if(generallvl2) {
		if(hasLeftHandjob)
			faceArray.push(6);
		else
			faceArray.push(2);
	}
	else {
		if(hasLeftHandjob)
			faceArray.push(5);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		if(ranNum < 50)
			this.setTachieEyes(1);
		else
			this.setTachieEyes(2);
		
		if(ranNum < 33)
			this.setTachieMouth(1);
		else if(ranNum < 66)
			this.setTachieMouth(2);
		else
			this.setTachieMouth(3);
		
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		if(ranNum < 50)
			this.setTachieEyes(4);
		else
			this.setTachieEyes(5);
		
		if(ranNum < 50)
			this.setTachieMouth(4);
		else
			this.setTachieMouth(5);
		
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		if(ranNum < 50)
			this.setTachieEyes(6);
		else
			this.setTachieEyes(7);
		
		if(ranNum < 50)
			this.setTachieMouth(6);
		else
			this.setTachieMouth(7);
		
		this.setTachieHoppe(1);
	}
	else if(faceId === 4) {
		if(ranNum < 50)
			this.setTachieEyes(4);
		else
			this.setTachieEyes(5);
		
		if(ranNum < 50)
			this.setTachieMouth(6);
		else
			this.setTachieMouth(7);
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 5) {
		if(ranNum < 50)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(9);
		
		if(ranNum < 33)
			this.setTachieMouth(1);
		else if(ranNum < 66)
			this.setTachieMouth(2);
		else
			this.setTachieMouth(3);
		
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		if(ranNum < 50)
			this.setTachieEyes(10);
		else
			this.setTachieEyes(11);
		
		if(ranNum < 50)
			this.setTachieMouth(4);
		else
			this.setTachieMouth(5);
		
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		if(ranNum < 50)
			this.setTachieEyes(12);
		else
			this.setTachieEyes(13);
		
		if(ranNum < 50)
			this.setTachieMouth(6);
		else
			this.setTachieMouth(7);
		
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		if(ranNum < 50)
			this.setTachieEyes(10);
		else
			this.setTachieEyes(11);
		
		if(ranNum < 50)
			this.setTachieMouth(6);
		else
			this.setTachieMouth(7);
		if(isAroused) this.setTachieHoppe(1);
	}
	
	
};

Game_Actor.prototype.emoteKneelingBlowjobPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);

	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	
	if(!this.isWearingGlovesAndHat()) {
		if(hasRightHandjob) {
			this.setTachieRightArm('hj_naked');
		}
		else {
			this.setTachieRightArm('empty_naked');
		}
	}
	else {
		if(hasRightHandjob) {
			this.setTachieRightArm('hj');
		}
		else {
			this.setTachieRightArm('empty');
		}
	}
	
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl2)
			faceArray.push(8);
		else
			faceArray.push(7);
	}
	else if(karrynSwallowingCum) {
		if(swallowlvl2)
			faceArray.push(6);
		else
			faceArray.push(7);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl2)
			faceArray.push(9);
		else
			faceArray.push(7);
	}
	else if(lastHitHandjob) {
		if(generallvl3)
			faceArray.push(4);
		else
			faceArray.push(2);
	}
	else if(lastHitBlowjob) {
		if(generallvl3)
			faceArray.push(3);
		else if(generallvl2)
			faceArray.push(5);
		else
			faceArray.push(1);
	}
	else {
		if(generallvl3) {
			faceArray.push(4);
			faceArray.push(3);
		}
		else if(generallvl2) {
			faceArray.push(2);
			faceArray.push(5);
		}
		else {
			faceArray.push(2);
			faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes('lookleft_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes('lookright_1');
		this.setTachieSweat(1);
		if(generallvl2) this.setTachieHoppe(1);
	}
	else if(faceId === 3) {
		this.setTachieEyes('lookleft_2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 4) {
		this.setTachieEyes('lookright_2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes('lookleft_3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		this.setTachieEyes('lookleft_4');
		this.setTachieHoppe(1);
		if(swallowlvl3) {}
		else
			this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		this.setTachieEyes('lookright_3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		this.setTachieEyes('lookright_4');
		this.setTachieHoppe(1);
		if(bukkakelvl3) {}
		else
			this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		this.setTachieEyes('lookright_4');
		this.setTachieHoppe(1);
		if(orgasmlvl3) {}
		else
			this.setTachieSweat(1);
	}
};

/////////////////
// Emote Thug Gangbang Pose
/////////////////
Game_Actor.prototype.emoteThugGangbangPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(!this.isWearingGlovesAndHat()) {
		this.resetTachieHat();

		if(givingHJ) {
			this.setTachieLeftArm('hj_naked');
		}
		else {
			this.setTachieLeftArm('empty_naked');
		}
		if(givingBJ) {
			this.setTachieRightArm('hj_naked');
		}
		else {
			this.setTachieRightArm('empty_naked');
		}
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
	}
	else {
		this.setTachieHat(1);
		if(givingHJ) {
			this.setTachieLeftArm('hj');
		}
		else {
			this.setTachieLeftArm('empty');
		}
		if(givingBJ) {
			this.setTachieRightArm('hj');
		}
		else {
			this.setTachieRightArm('empty');
		}
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(12);
			else if(swallowlvl2) 
				faceArray.push(8);
			else
				faceArray.push(4);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(12);
			else if(orgasmlvl2) 
				faceArray.push(8);
			else
				faceArray.push(4);
		}
		else {
			if(generallvl3) 
				faceArray.push(10);
			else if(generallvl2) 
				faceArray.push(6);
			else
				faceArray.push(2);
		}
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) 
			faceArray.push(11);
		else if(pussyCreampielvl2) 
			faceArray.push(7);
		else
			faceArray.push(3);
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(11);
		else if(orgasmlvl2) 
			faceArray.push(7);
		else
			faceArray.push(3);
	}
	else {
		if(generallvl3) 
			faceArray.push(9);
		else if(generallvl2) 
			faceArray.push(5);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('mae1');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('sita1');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ki1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ki1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ki1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ki1');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ahe1');
		mouthArray.push('ah3');
		mouthArray.push('wa1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('nico1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('ki1');
		eyesArray.push('mae1');
		eyesArray.push('toji2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('ki1');
		eyesArray.push('sita1');
		eyesArray.push('toji3');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}

	
};

/////////////////
// Emote Goblin Cunnilingus Pose
/////////////////
Game_Actor.prototype.emoteGoblinCunnilingusPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let givingPaizuri = this.isBodySlotPenis(BOOBS_ID);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let enemyCummingFromBoobs = $gameTroop._lastEnemySlotToCum === BOOBS_ID;
	let lastHitCunnilingus = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUNNILINGUS);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(!this.isWearingGlovesAndHat()) {
		this.resetTachieHat();
		if(givingPaizuri) {
			this.setTachieBoobs('paizuri_naked_1');
		}
		else {
			this.setTachieBoobs('naked_1');
		}
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
	}
	else {
		this.setTachieHat(1);
		if(givingPaizuri) {
			this.setTachieBoobs('paizuri_1');
		}
		else {
			this.setTachieBoobs('1');
		}
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
	}
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(21);
			else if(swallowlvl2) 
				faceArray.push(14);
			else
				faceArray.push(7);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(21);
			else if(orgasmlvl2) 
				faceArray.push(14);
			else
				faceArray.push(7);
		}
		else {
			if(generallvl3) 
				faceArray.push(20);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(6);
		}
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) 
			faceArray.push(17);
		else if(pussyCreampielvl2) 
			faceArray.push(10);
		else
			faceArray.push(3);
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(17);
		else if(orgasmlvl2) 
			faceArray.push(10);
		else
			faceArray.push(3);
	}
	else if(karrynGotBukkaked && enemyCummingFromBoobs) {
		if(bukkakelvl3) 
			faceArray.push(19);
		else if(bukkakelvl2) 
			faceArray.push(12);
		else
			faceArray.push(5);
	}
	else if(lastHitPussySex) {
		if(generallvl3) 
			faceArray.push(16);
		else if(generallvl2) 
			faceArray.push(9);
		else
			faceArray.push(2);
	}
	else if(lastHitTittyFuck) {
		if(generallvl3) 
			faceArray.push(18);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(4);
	}
	else if(lastHitCunnilingus) {
		if(generallvl3) 
			faceArray.push(15);
		else if(generallvl2) 
			faceArray.push(8);
		else
			faceArray.push(1);
	}
	else if(pussyInserted) {
		if(generallvl3) 
			faceArray.push(16);
		else if(generallvl2) 
			faceArray.push(9);
		else
			faceArray.push(2);
	}
	else if(givingPaizuri) {
		if(generallvl3) 
			faceArray.push(18);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(4);
	}
	else {
		if(generallvl3) 
			faceArray.push(15);
		else if(generallvl2) 
			faceArray.push(8);
		else
			faceArray.push(1);
	}
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('be1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		mouthArray.push('be1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('be1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('be1');
		mouthArray.push('be2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyesArray.push('sita2');
		eyesArray.push('sita1');
		mouthArray.push('nico1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('nico1');
		eyesArray.push('sita2');
		eyesArray.push('sita1');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('nico1');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('nico1');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('be2');
		mouthArray.push('be1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('mae1');
		mouthArray.push('be1');
		mouthArray.push('be2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
};

/////////////////
// Emote Guard Gangbang Pose
/////////////////
Game_Actor.prototype.emoteGuardGangbangPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	if(givingBJ) this.resetTachieMouth();

	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(15);
			else if(swallowlvl2) 
				faceArray.push(10);
			else
				faceArray.push(5);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(15);
			else if(orgasmlvl2) 
				faceArray.push(10);
			else
				faceArray.push(5);
		}
		else {
			if(generallvl3) 
				faceArray.push(14);
			else if(generallvl2) 
				faceArray.push(9);
			else
				faceArray.push(4);
		}
	}
	else if(justGotPussyCreampie || justGotAnalCreampie || justOrgasmed) {
		if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(13);
			else if(pussyCreampielvl2) 
				faceArray.push(8);
			else
				faceArray.push(3);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(13);
			else if(analCreampielvl2) 
				faceArray.push(8);
			else
				faceArray.push(3);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(13);
			else if(orgasmlvl2) 
				faceArray.push(8);
			else
				faceArray.push(3);
		}
	}
	else if(lastHitPussySex) {
		if(generallvl3) 
			faceArray.push(11);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(1);
	}
	else if(lastHitAnalSex || analInserted) {
		if(generallvl3) 
			faceArray.push(12);
		else if(generallvl2) 
			faceArray.push(7);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) 
			faceArray.push(11);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('toji3');
		mouthArray.push('ku1');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		mouthArray.push('wa1');
		mouthArray.push('wa3');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko2');
		eyesArray.push('toji3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa3');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('toji3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('yoko2');
		eyesArray.push('toji3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
};

/////////////////
// Emote Karryn Cowgirl Pose
/////////////////
Game_Actor.prototype.emoteKarrynCowgirlPose = function() {
	let ranNum = Math.randomInt(2);
	let bodyIsClose = ranNum === 1;
	let bodyIsFar = ranNum === 0;
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingPaizuri = this.isBodySlotPenis(BOOBS_ID);
	let enemyBodyName = false;
	if(this._cockPussyTarget) {
		if(this._cockPussyTarget.isGoblinType) {
			enemyBodyName = 'goblin';
		}
		else if(this._cockPussyTarget.isOrcType) {
			enemyBodyName = 'orc';
		}
		else if(this._cockPussyTarget.isLizardmanType) {
			enemyBodyName = 'lizardman';
		}
		else if(this._cockPussyTarget.isNerdType) {
			enemyBodyName = 'fat';
		}
		else
			enemyBodyName = 'human';
		
		//this.setTachieFrontA(enemyBodyName);
		if(Karryn.isCensored())
			this.setTachieBackA(enemyBodyName + '_cen');
		else
			this.setTachieBackA(enemyBodyName);
	}
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieHat('1');
	}
	else {
		this.resetTachieHat();
	}
	
	if(givingPaizuri) {
		if(this.isWearingGlovesAndHat())
			this.setTachieBody('arms_zuri');
		else
			this.setTachieBody('arms_zuri_naked');
		
		this.setTachieFrontA(enemyBodyName);
		
		this.setTachieSemenBoobsExtension('zuri_');
		this.setTachieSemenLeftArmExtension('zuri_');
		this.setTachieSemenRightArmExtension('zuri_');
	}
	else {
		if(this.isWearingGlovesAndHat())
			this.setTachieBody('arms_legs');
		else
			this.setTachieBody('arms_legs_naked');
		
		this.setTachieFrontA('arms_' + enemyBodyName);
		
		this.setTachieSemenBoobsExtension('legs_');
		this.setTachieSemenLeftArmExtension('legs_');
		this.setTachieSemenRightArmExtension('legs_');
	}
	
	if(bodyIsClose) {
		if(this.tachieLegs === 'far' || this.tachieLegs === 'far_cen') 
			AudioManager.playSe({name:'+Sex02_Close', pan:0, pitch:65, volume:90});
		
		if(Karryn.isCensored())
			this.setTachieLegs('close_cen');
		else
			this.setTachieLegs('close');
		this.setTachiePubicExtension('close_');
		this.setTachieSemenBellyExtension('close_');
		this.setTachieSemenCrotchExtension('close_');
		this.setTachieSemenCockPussyExtension('close_');
	}
	else if(bodyIsFar) {
		if(this.tachieLegs === 'close' || this.tachieLegs === 'close_cen') 
			AudioManager.playSe({name:'+Sex03_Far', pan:0, pitch:65, volume:90});
		
		if(Karryn.isCensored())
			this.setTachieLegs('far_cen');
		else
			this.setTachieLegs('far');
		this.setTachiePubicExtension('far_');
		this.setTachieSemenBellyExtension('far_');
		this.setTachieSemenCrotchExtension('far_');
		this.setTachieSemenCockPussyExtension('far_');
	}
	
	this.setTachieEyebrows('kiri1');
	this.setTachieEyes('mae1');
	this.setTachieMouth('nico1');
	
	if(givingBJ) 
		this.resetTachieMouth();
	
	this.setTachieSweat(1);
	this.setTachieHoppe(1);
	
};

/////////////////
// Emote Reverse Cowgirl Pose
/////////////////
Game_Actor.prototype.emoteReverseCowgirlPose = function() {
	let ranNum = Math.randomInt(2);
	let buttIsClose = ranNum === 1;
	let buttIsFar = ranNum === 0;
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	let analEnemyCock = false;
	if(this._cockAnalTarget) {
		if(this._cockAnalTarget.isOrcType) {
			analEnemyCock = 'orc';
		}
		else if(this._cockAnalTarget.isGoblinType) {
			analEnemyCock = 'goblin';
		}
		else if(this._cockAnalTarget.isNerdType) {
			analEnemyCock = 'fat';
		}
		else if(this._cockAnalTarget.isLizardmanType) {
			analEnemyCock = 'red';
		}
		else {
			analEnemyCock = 'human';
		}
		
		if(this._cockAnalTarget.isLizardmanType) {
			this.setTachieBackA('lizardman');
		}
		else
			this.setTachieBackA(analEnemyCock);
	}
	
	let semenCockAnalExtension = '';
	if(buttIsClose) {
		if(this.tachieButt === 'far') 
			AudioManager.playSe({name:'+Sex02_Close', pan:0, pitch:65, volume:90});
		this.setTachieButt('close');
		this.setTachieSemenButtExtension('close_');
		semenCockAnalExtension = 'close_';
		
		if(analEnemyCock) {
			if(Karryn.isCensored())
				this.setTachieCockAnal('close_' + analEnemyCock + '_cen');
			else
				this.setTachieCockAnal('close_' + analEnemyCock);
		}
	}
	else if(buttIsFar) {
		if(this.tachieButt === 'close') 
			AudioManager.playSe({name:'+Sex03_Far', pan:0, pitch:65, volume:90});
		
		this.setTachieButt('far');
		this.setTachieSemenButtExtension('far_');
		semenCockAnalExtension = 'far_';
		
		if(analEnemyCock) {
			if(Karryn.isCensored())
				this.setTachieCockAnal('far_' + analEnemyCock + '_cen');
			else
				this.setTachieCockAnal('far_' + analEnemyCock);
		}
	}
	
	if(this._cockAnalTarget.isOrcType) {
		semenCockAnalExtension += 'orc_';
	}
	else if(this._cockAnalTarget.isGoblinType) {
		semenCockAnalExtension += 'goblin_';
	}
	else {
		semenCockAnalExtension += 'human_';
	}
	this.setTachieSemenCockAnalExtension(semenCockAnalExtension);
	
	if(this.isWearingGlovesAndHat()) {
		if(hasLeftHandjob)
			this.setTachieLeftArm('hj');
		else
			this.setTachieLeftArm('normal');
		
		if(hasRightHandjob)
			this.setTachieRightArm('hj');
		else
			this.resetTachieRightArm();
	}
	else {
		if(hasLeftHandjob)
			this.setTachieLeftArm('hj_naked');
		else
			this.setTachieLeftArm('normal_naked');
		
		if(hasRightHandjob)
			this.setTachieRightArm('hj_naked');
		else
			this.resetTachieRightArm();
	}
	
	
	
};

/////////////////
// Emote Lizardman Cowgirl Pose
/////////////////
Game_Actor.prototype.emoteLizardmanCowgirlPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	
	let headType = "normal_";
	if(givingBJ) {
		if(this.isWearingGlovesAndHat()) 
			this.setTachieHat('fera_1');
		else
			this.resetTachieHat();
		
		this.setTachieHead('fera');
		headType = 'fera_'
	}
	else {
		if(this.isWearingGlovesAndHat()) 
			this.setTachieHat('normal_1');
		else
			this.resetTachieHat();
		
		this.setTachieHead('normal');
	}
	
	if(givingHJ) {
		if(this.isWearingGlovesAndHat()) 
			this.setTachieRightArm('hj');
		else
			this.setTachieRightArm('hj_naked');
	}
	else {
		if(this.isWearingGlovesAndHat()) 
			this.setTachieRightArm('normal');
		else
			this.setTachieRightArm('normal_naked');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	let tachieHoppeName = '';
	let tachieSweatName = '';
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	
	if(givingBJ) {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(24);
			else if(orgasmlvl2)
				faceArray.push(16);
			else
				faceArray.push(8);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(22);
			else if(bukkakelvl2)
				faceArray.push(14);
			else
				faceArray.push(6);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3)
				faceArray.push(22);
			else if(pussyCreampielvl2)
				faceArray.push(14);
			else
				faceArray.push(6);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3)
				faceArray.push(22);
			else if(analCreampielvl2)
				faceArray.push(14);
			else
				faceArray.push(6);
		}
		else {
			if(generallvl3)
				faceArray.push(20);
			else if(generallvl2)
				faceArray.push(12);
			else
				faceArray.push(4);
		}
	}
	//not BJ
	else {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(23);
			else if(orgasmlvl2)
				faceArray.push(15);
			else
				faceArray.push(7);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(21);
			else if(bukkakelvl2)
				faceArray.push(13);
			else
				faceArray.push(5);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3)
				faceArray.push(21);
			else if(pussyCreampielvl2)
				faceArray.push(13);
			else
				faceArray.push(5);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3)
				faceArray.push(21);
			else if(analCreampielvl2)
				faceArray.push(13);
			else
				faceArray.push(5);
		}
		else if(lastHitAnalSex) {
			if(generallvl3)
				faceArray.push(19);
			else if(generallvl2)
				faceArray.push(11);
			else
				faceArray.push(3);
		}
		else if(lastHitHandjob) {
			if(generallvl3)
				faceArray.push(18);
			else if(generallvl2)
				faceArray.push(10);
			else
				faceArray.push(2);
		}
		else {
			if(generallvl3)
				faceArray.push(17);
			else if(generallvl2)
				faceArray.push(9);
			else
				faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('gugi1');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 2) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		mouthArray.push('gugi1');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('gugi1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('yoko1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 5) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sage3');
		eyesArray.push('yoko3');
		eyesArray.push('toji1');
		mouthArray.push('gugi1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('name1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sage3');
		eyesArray.push('yoko3');
		eyesArray.push('toji1');
		mouthArray.push('gugi1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('name1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 9) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('gugi1');
		mouthArray.push('ho2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 10) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		mouthArray.push('gugi2');
		mouthArray.push('ho2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 11) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('hu1');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 13) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sage3');
		eyesArray.push('yoko3');
		eyesArray.push('toji1');
		mouthArray.push('ho2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('name1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('hu1');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('yoko1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 15) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sage3');
		eyesArray.push('yoko3');
		eyesArray.push('toji1');
		mouthArray.push('ho2');
		mouthArray.push('ho1');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('name1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('hu1');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('ahe2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		mouthArray.push('name1');
		mouthArray.push('chu1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 19) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('name1');
		mouthArray.push('chu1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('hu1');
		eyesArray.push('mae1');
		eyesArray.push('yoko1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('toji1');
		mouthArray.push('name2');
		mouthArray.push('chu1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('hu1');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heart1');
		eyesArray.push('ahe2');
		eyesArray.push('yoko3');
		eyesArray.push('sage3');
		mouthArray.push('ho3');
		mouthArray.push('chu1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('wa1');
		mouthArray.push('name1');
		mouthArray.push('name2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('hu1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heart1');
		eyesArray.push('ahe2');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + headType + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + headType + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + headType + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	else
		this.resetTachieMouth();
	
	if(displayTachieHoppe) this.setTachieHoppe('' + headType + tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat('' + headType + tachieSweatName);
	
	if(this.tachieMouth === 'normal_name2') {
		this.setMaxTachieSemenMouthId(1);
		this.setTachieSemenMouthExtension('name2_');
	}
	else if(this.tachieMouth === 'normal_wa2') {
		this.setMaxTachieSemenMouthId(1);
		this.setTachieSemenMouthExtension('wa2_');
	}
	else {
		this.setMaxTachieSemenMouthId(0);
		this.resetTachieSemenMouthExtension();
	}
};


/////////////////
// Emote Laying Paizuri Pose
/////////////////
Game_Actor.prototype.emoteOrcPaizuriPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let hasCumInMouth = this._liquidSwallow > 0;
	
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	
	let lastHandjobIsToRight = this._lastHandUsedForHandjob === RIGHT_HAND_ID;
	let lastHandjobIsToLeft = this._lastHandUsedForHandjob === LEFT_HAND_ID;
	
	let enemyCummingFromBoobs = $gameTroop._lastEnemySlotToCum === BOOBS_ID;
	let enemyCummingFromMouth = $gameTroop._lastEnemySlotToCum === MOUTH_ID;
	let enemyCummingFromRightHJ = $gameTroop._lastEnemySlotToCum === RIGHT_HAND_ID;
	let enemyCummingFromLeftHJ = $gameTroop._lastEnemySlotToCum === LEFT_HAND_ID;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	this.setMaxTachieSemenMouthId(0);
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(28);
		else
			faceArray.push(27);
	}
	else if(givingBJ && karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(25);
		else if(swallowlvl2) 
			faceArray.push(17);
		else
			faceArray.push(8);
	}
	else if(lastHitBlowjob) {
		if(generallvl3) 
			faceArray.push(24);
		else if(generallvl2) 
			faceArray.push(16);
		else
			faceArray.push(7);
	}
	else if(karrynSwallowingCum && hasCumInMouth) {
		if(swallowlvl3) 
			faceArray.push(26);
		else
			faceArray.push(9);
	}
	else if(enemyCummingFromBoobs) {
		if(bukkakelvl3) 
			faceArray.push(19);
		else if(bukkakelvl2) 
			faceArray.push(11);
		else
			faceArray.push(2);
	}
	else if(enemyCummingFromRightHJ) {
		if(bukkakelvl3) 
			faceArray.push(21);
		else if(bukkakelvl2) 
			faceArray.push(13);
		else
			faceArray.push(4);
	}
	else if(enemyCummingFromLeftHJ) {
		if(bukkakelvl3) 
			faceArray.push(23);
		else if(bukkakelvl2) 
			faceArray.push(15);
		else
			faceArray.push(6);
	}
	else if(lastHandjobIsToRight) {
		if(generallvl3) 
			faceArray.push(20);
		else if(generallvl2) 
			faceArray.push(12);
		else
			faceArray.push(3);
	}
	else if(lastHandjobIsToLeft) {
		if(generallvl3) 
			faceArray.push(22);
		else if(generallvl2) 
			faceArray.push(14);
		else
			faceArray.push(5);
	}
	else {
		if(generallvl3) 
			faceArray.push(18);
		else if(generallvl2) 
			faceArray.push(10);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right1');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left1');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		this.setMaxTachieSemenMouthId(1);
		this.setTachieSemenMouthExtension('face9_');
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('right1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('right2');
		mouthArray.push('ahe1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('left1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('left2');
		mouthArray.push('ahe1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ho1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('pero1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('right1');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('right2');
		mouthArray.push('pero1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('left1');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('left2');
		mouthArray.push('pero1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		eyesArray.push('toji1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		this.setMaxTachieSemenMouthId(1);
		this.setTachieSemenMouthExtension('face26_');
	}
	else if(faceId === 27) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('nico2');
		eyesArray.push('heart1');
		eyesArray.push('heart2');
		eyesArray.push('toji1');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico3');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0 && !givingBJ) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	else {
		this.resetTachieMouth();
	}
};

/////////////////
// Emote Laying Paizuri Pose
/////////////////
Game_Actor.prototype.emoteLayingPaizuriPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let mouthDesire = this.mouthDesire;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingRightHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let lastHitSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let holeInserted = this.isBodySlotPenis(ANAL_ID) || this.isBodySlotPenis(PUSSY_ID) || this.isBodySlotToy(PUSSY_ID) || this.isBodySlotToy(ANAL_ID);
	let enemyCummingFromBoobs = $gameTroop._lastEnemySlotToCum === BOOBS_ID;
	let enemyCummingFromRightHJ = $gameTroop._lastEnemySlotToCum === RIGHT_HAND_ID;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	if(givingBJ) this.resetTachieMouth();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(24);
			else if(swallowlvl2) 
				faceArray.push(15);
			else
				faceArray.push(6);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(24);
			else if(orgasmlvl2) 
				faceArray.push(15);
			else
				faceArray.push(6);
		}
		else {
			if(generallvl3) 
				faceArray.push(23);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(5);
		}
	}
	//Not BJ
	else {
		if(justGotPussyCreampie || justGotAnalCreampie) {
			if(justGotPussyCreampie) {
				if(pussyCreampielvl3) 
					faceArray.push(26);
				else if(pussyCreampielvl2) 
					faceArray.push(17);
				else
					faceArray.push(9);
			}
			else if(justGotAnalCreampie) {
				if(analCreampielvl3) 
					faceArray.push(26);
				else if(analCreampielvl2) 
					faceArray.push(17);
				else
					faceArray.push(9);
			}
		}
		else if(karrynGotBukkaked && (enemyCummingFromBoobs || enemyCummingFromRightHJ)) {
			if(enemyCummingFromRightHJ) {
				if(bukkakelvl3) 
					faceArray.push(22);
				else if(bukkakelvl2) 
					faceArray.push(13);
				else
					faceArray.push(4);
			}
			else if(enemyCummingFromBoobs) {
				if(bukkakelvl3) 
					faceArray.push(20);
				else if(bukkakelvl2) 
					faceArray.push(11);
				else
					faceArray.push(2);
			}
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(27);
			else if(orgasmlvl2) 
				faceArray.push(18);
			else
				faceArray.push(10);
		}
		//No ejaculation or orgasm
		else {
			//last skill first
			if(lastHitHandjob) {
				if(generallvl3) 
					faceArray.push(21);
				else if(generallvl2) 
					faceArray.push(12);
				else
					faceArray.push(3);
			}
			else if(lastHitTittyFuck) {
				if(generallvl3) 
					faceArray.push(19);
				else if(generallvl2) 
					faceArray.push(7);
				else
					faceArray.push(1);
			}
			else if(lastHitSex || holeInserted) {
				if(generallvl3) 
					faceArray.push(25);
				else if(generallvl2) 
					faceArray.push(16);
				else
					faceArray.push(8);
			}
			else if(givingRightHJ) {
				if(generallvl3) 
					faceArray.push(21);
				else if(generallvl2) 
					faceArray.push(12);
				else
					faceArray.push(3);
			}
			else {
				if(generallvl3) 
					faceArray.push(19);
				else if(generallvl2) 
					faceArray.push(7);
				else
					faceArray.push(1);
			}
			
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('sage1');
		mouthArray.push('gugi1');
		mouthArray.push('ho1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku1');
		eyesArray.push('yoko1');
		mouthArray.push('gugi1');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		mouthArray.push('gugi1');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyesArray.push('toji3');
		mouthArray.push('gugi1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma3');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		if(isAroused) this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		mouthArray.push('gugi1');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('ku1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji5');
		mouthArray.push('gugi1');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('name1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('age1');
		mouthArray.push('gugi1');
		mouthArray.push('wa1');
		mouthArray.push('ho3');
		mouthArray.push('name1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji2');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko1');
		mouthArray.push('ho1');
		mouthArray.push('gugi2');
		this.setTachieHoppe(1);
		if(isAroused) this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji3');
		mouthArray.push('name1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		this.setTachieHoppe(1);
		if(isAroused) this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko2');
		mouthArray.push('chu1');
		mouthArray.push('gugi2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji5');
		mouthArray.push('gugi1');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('name1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyesArray.push('age1');
		mouthArray.push('gugi1');
		mouthArray.push('wa1');
		mouthArray.push('ho3');
		mouthArray.push('name1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('nico1');
		eyesArray.push('sage1');
		eyesArray.push('sage3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('name1');
		mouthArray.push('ho2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('toji4');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('chu1');
		mouthArray.push('name1');
		mouthArray.push('name2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('chu1');
		mouthArray.push('name1');
		mouthArray.push('name2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyesArray.push('toji3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('name1');
		mouthArray.push('wa1');
		if(isAroused) this.setTachieHoppe(1);
		if(isAroused) this.setTachieSweat(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyesArray.push('sage1');
		eyesArray.push('sage2');
		eyesArray.push('sage3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyesArray.push('toji1');
		eyesArray.push('toji4');
		eyesArray.push('sage3');
		if(isAroused) this.setTachieHoppe(1);
		if(isAroused) this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho2');
		mouthArray.push('name1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyesArray.push('toji5');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('name1');
		mouthArray.push('chu1');
		mouthArray.push('name1');
		mouthArray.push('name2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyesArray.push('age1');
		eyesArray.push('toji1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho3');
		mouthArray.push('chu1');
		mouthArray.push('name1');
		mouthArray.push('name2');
		if(isAroused) this.setTachieHoppe(1);
		if(isAroused) this.setTachieSweat(1);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	
};

/////////////////
// Emote Footjob Pose
/////////////////
Game_Actor.prototype.emoteFootjobPose = function() {
	let ranNum = Math.randomInt(100);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHitFootjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_MASOCHISM);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(givingBJ) {
		if(this.isWearingGlovesAndHat())
			this.setTachieHat('fera1');
		this.setTachieHead('fera1');
	}
	else {
		if(this.isWearingGlovesAndHat())
			this.setTachieHat(1);
		this.setTachieHead(1);
	}
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieRightArm('naked_1');
		if(givingHJ)
			this.setTachieLeftArm('hj_naked');
		else
			this.setTachieLeftArm('empty_naked');
	}
	else {
		this.setTachieRightArm('1');
		if(givingHJ)
			this.setTachieLeftArm('hj');
		else
			this.setTachieLeftArm('empty');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			faceArray.push(8);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(12);
			else
				faceArray.push(5);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(12);
			else
				faceArray.push(5);
		}
		else if(lastHitBlowjob) {
			if(generallvl3) {
				faceArray.push(9);
				faceArray.push(10);
			}
			else
				faceArray.push(3);
		}
		else {
			if(generallvl3)
				faceArray.push(11);
			else
				faceArray.push(4);
		}
	}
	//no bj
	else {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(6);
			else
				faceArray.push(2);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(6);
			else
				faceArray.push(2);
		}
		else if(justGotHarassed) {
			if(generallvl3)
				faceArray.push(6);
			else
				faceArray.push(2);
		}
		else {
			if(generallvl3)
				faceArray.push(7);
			else
				faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieMouth(2);
		if(generallvl2) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(3);
		this.setTachieMouth(1);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		this.setTachieEyes('fera1');
		if(generallvl2) this.setTachieHoppe('fera1');
		this.setTachieSweat('fera1');
	}
	else if(faceId === 4) {
		this.setTachieEyes('fera2');
		if(generallvl2) this.setTachieHoppe('fera1');
		this.setTachieSweat('fera1');
	}
	else if(faceId === 5) {
		this.setTachieEyes('fera8');
		this.setTachieHoppe('fera1');
		this.setTachieSweat('fera1');
	}
	else if(faceId === 6) {
		this.setTachieEyes(4);
		if(ranNum < 50) 
			this.setTachieMouth(2);
		else
			this.setTachieMouth(3);
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		this.setTachieEyes(5);
		if(ranNum < 50) 
			this.setTachieMouth(2);
		else
			this.setTachieMouth(3);
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		this.setTachieEyes('fera3');
		this.setTachieHoppe('fera1');
		if(!generallvl3) this.setTachieSweat('fera1');
	}
	else if(faceId === 9) {
		this.setTachieEyes('fera4');
		this.setTachieHoppe('fera1');
	}
	else if(faceId === 10) {
		this.setTachieEyes('fera5');
		this.setTachieHoppe('fera1');
	}
	else if(faceId === 11) {
		this.setTachieEyes('fera6');
		this.setTachieHoppe('fera1');
	}
	else if(faceId === 12) {
		this.setTachieEyes('fera7');
		this.setTachieHoppe('fera1');
	}
	
	if(givingBJ)
		this.resetTachieMouth();
	
};

/////////////////
// Emote Rimjob Pose
/////////////////
Game_Actor.prototype.emoteRimjobPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let dpInserted = pussyInserted && analInserted;
	let lastHitRimjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);

	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;

	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();

	if(lastHitRimjob) {
		if(generallvl3) {
			faceArray.push(7);
		}
		else if(generallvl2) {
			faceArray.push(4);
		}
		else {
			faceArray.push(1);
		}
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) {
			faceArray.push(9);
		}
		else if(orgasmlvl2) {
			faceArray.push(6);
		}
		else {
			faceArray.push(3);
		}
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) {
			faceArray.push(9);
		}
		else if(pussyCreampielvl2) {
			faceArray.push(6);
		}
		else {
			faceArray.push(3);
		}
	}
	else if(justGotAnalCreampie) {
		if(analCreampielvl2) {
			faceArray.push(9);
		}
		else if(analCreampielvl2) {
			faceArray.push(6);
		}
		else {
			faceArray.push(3);
		}
	}
	else if(lastHitPussySex || lastHitAnalSex) {
		if(generallvl2) {
			faceArray.push(8);
		}
		else if(generallvl2) {
			faceArray.push(5);
		}
		else {
			faceArray.push(2);
		}
	}
	else {
		if(generallvl2) {
			faceArray.push(7);
			faceArray.push(8);
		}
		else if(generallvl2) {
			faceArray.push(4);
			faceArray.push(5);
		}
		else {
			faceArray.push(2);
			faceArray.push(1);
		}
	}

	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(2);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		this.setTachieEyes(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		this.setTachieEyes(1);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(2);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		this.setTachieEyes(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		this.setTachieEyes(4);
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		this.setTachieEyes(5);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		this.setTachieEyes(6);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}

};

/////////////////
// Emote Kick Counter Pose
/////////////////
Game_Actor.prototype.emoteKickCounterPose = function(setKissingOn, setKissingOff, karrynSkillUsage) {
	let ranNum = Math.randomInt(100);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	
	let isKissing = setKissingOn || (!setKissingOff && (this.tachieBody == 'kiss' || this.tachieBody == 'kiss_naked') || this.tachieMouth == 'normal_kiss1' || this.tachieBackA == 'head_lizardman_kiss' || this.tachieBackA == 'head_orc_kiss'); 
	let pussyTargetIsHuman = this._cockPussyTarget && !this._cockPussyTarget.isOrcType && !this._cockPussyTarget.isLizardmanType;
	let pussyTargetIsOrc = this._cockPussyTarget && this._cockPussyTarget.isOrcType;
	let pussyTargetIsLizardman = this._cockPussyTarget && this._cockPussyTarget.isLizardmanType;
	let isKissingHuman = isKissing && pussyTargetIsHuman; 
	let lightKickCountered = this.isStateAffected(STATE_LIGHT_KICK_COUNTERED_ID);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();

	if(isKissingHuman && karrynSkillUsage) {
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieBody('kiss_naked');
		}
		else {
			this.setTachieHat('kiss');
			this.setTachieBody('kiss');
		}
		
		this.resetTachieBackA();
		
		this.setMaxTachieSemenBackId(1);
		this.setMaxTachieSemenRightArmId(1);
		
		this.setTachieSemenBackExtension('kiss_');
		this.setTachieSemenBellyExtension('kiss_');
		this.setTachieSemenBoobsExtension('kiss_');
		this.setTachieSemenFaceExtension('kiss_');
		this.setTachieSemenLeftArmExtension('kiss_');
		this.setTachieSemenRightArmExtension('kiss_');
	}
	else if(setKissingOff || !isKissing || pussyTargetIsOrc || pussyTargetIsLizardman) {
		if(pussyTargetIsHuman && lightKickCountered) {
			this.setTachieBackA('mouth_human');
		}
		else if(pussyTargetIsOrc) {
			if(!setKissingOff && (setKissingOn || isKissing)) {
				this.setTachieBackA('head_orc_kiss');
			}
			else {
				this.setTachieBackA('head_orc');
			}
		}
		else if(pussyTargetIsLizardman) {
			if(!setKissingOff && (setKissingOn || isKissing)) {
				this.setTachieBackA('head_lizardman_kiss');
			}
			else {
				this.setTachieBackA('head_lizardman');
			}
		}
		
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieBody('normal_naked');
		}
		else {
			this.setTachieHat('normal');
			this.setTachieBody('normal');
		}
		
		this.setMaxTachieSemenBackId(0);
		this.setMaxTachieSemenRightArmId(0);
		
		this.setTachieSemenBellyExtension('normal_');
		this.setTachieSemenBoobsExtension('normal_');
		this.setTachieSemenFaceExtension('normal_');
		this.setTachieSemenLeftArmExtension('normal_');
	}
	
	
	if(this.tachieBody == 'kiss' || this.tachieBody == 'kiss_naked') {
		if(justGotPussyCreampie || justGotAnalCreampie || justOrgasmed) {
			if(justGotPussyCreampie) {
				if(pussyCreampielvl3) 
					faceArray.push(26);
				else
					faceArray.push(22);
			}
			else if(justGotAnalCreampie) {
				if(analCreampielvl3) 
					faceArray.push(26);
				else
					faceArray.push(22);
			}
			else if(justOrgasmed) {
				if(orgasmlvl3) 
					faceArray.push(27);
				else
					faceArray.push(23);
			}
		}
		else if(lastHitPussySex) {
			if(generallvl3) 
				faceArray.push(24);
			else
				faceArray.push(20);
		}
		else if(lastHitAnalSex || analInserted) {
			if(generallvl3) 
				faceArray.push(25);
			else
				faceArray.push(21);
		}
		else {
			if(generallvl3) 
				faceArray.push(24);
			else
				faceArray.push(20);
		}
	}
	//not kiss body
	else {
		if(justGotPussyCreampie || justGotAnalCreampie || justOrgasmed) {
			if(justGotPussyCreampie) {
				if(pussyCreampielvl3) 
					faceArray.push(11);
				else if(pussyCreampielvl2) 
					faceArray.push(7);
				else
					faceArray.push(3);
			}
			else if(justGotAnalCreampie) {
				if(analCreampielvl3) 
					faceArray.push(11);
				else if(analCreampielvl2) 
					faceArray.push(7);
				else
					faceArray.push(3);
			}
			else if(justOrgasmed) {
				if(orgasmlvl3) 
					faceArray.push(12);
				else if(orgasmlvl2) 
					faceArray.push(8);
				else
					faceArray.push(4);
			}
		}
		else if(isKissing) {
			if(pussyTargetIsHuman) {
				if(generallvl3) 
					faceArray.push(15);
				else
					faceArray.push(14);
			}
			else if(pussyTargetIsOrc) {
				if(generallvl3) 
					faceArray.push(19);
				else
					faceArray.push(18);
			}
			else if(pussyTargetIsLizardman) {
				if(generallvl3) 
					faceArray.push(17);
				else
					faceArray.push(16);
			}
		}
		else if(lastHitPussySex) {
			if(generallvl3) 
				faceArray.push(9);
			else if(generallvl2) 
				faceArray.push(5);
			else
				faceArray.push(1);
		}
		else if(lastHitAnalSex) {
			if(generallvl3) 
				faceArray.push(10);
			else if(generallvl2) 
				faceArray.push(6);
			else
				faceArray.push(2);
		}
		else {
			if(generallvl3) 
				faceArray.push(9);
			else if(generallvl2) 
				faceArray.push(5);
			else
				faceArray.push(1);
		}
	}
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	let tachieBodyName = 'normal_';
	if(this.tachieBody == 'kiss' || this.tachieBody == 'kiss_naked') tachieBodyName = 'kiss_';
	let tachieHoppeName = '' + tachieBodyName;
	let tachieSweatName = '' + tachieBodyName;
	let displayTachieHoppe = false;
	let displayTachieSweat = false;

	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko1');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('yoko2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae3');
		eyesArray.push('yoko2');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(ranNum < 50) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma3');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('yoko2');
		eyesArray.push('heart1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(ranNum < 50) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('kiss1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('heart1');
		mouthArray.push('kiss1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('heart1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('kiss2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('heart1');
		mouthArray.push('kiss3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('toji2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 23) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		eyesArray.push('toji1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('toji2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 25) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 26) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(ranNum < 50) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 27) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(ranNum < 50) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + tachieBodyName + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + tachieBodyName + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + tachieBodyName + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	else {
		this.resetTachieMouth();
	}
	
	if(this.tachieMouth == 'normal_kiss1') {
		this.resetTachieBackA();
	}
	
	if(displayTachieHoppe) this.setTachieHoppe(tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat(tachieSweatName);
};

/////////////////
// Emote Slime Anal Pose
/////////////////
Game_Actor.prototype.emoteSlimePiledriver = function() {
	let ranNum = Math.randomInt(100);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);

	let slimeInPussyAlso = this.analSexPoseTarget() && this.analSexPoseTarget().isUsingBodySlotPenis(PUSSY_ID);
	let slimeInMouthAlso = this.analSexPoseTarget() && this.analSexPoseTarget().isUsingBodySlotPenis(MOUTH_ID);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let swallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);

	let slimeCameInsideAnal = this.analSexPoseTarget() && this.analSexPoseTarget()._slime_cameInsideAnal === true;
	let slimeCameInsidePussy = this.analSexPoseTarget() && this.analSexPoseTarget()._slime_cameInsidePussy === true;
	let slimeCameInsideMouth = this.analSexPoseTarget() && this.analSexPoseTarget()._slime_cameInsideMouth === true;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl1 = orgasmReactionScore >= VAR_DEF_RS_LV1_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl1 = pussyCreampieReactionScore >= VAR_DEF_RS_LV1_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl1 = analCreampieReactionScore >= VAR_DEF_RS_LV1_REQ;
	let swallowlvl3 = swallowReactionScore >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl1 = swallowReactionScore >= VAR_DEF_RS_LV1_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(!givingBJ) {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(10);
			else if(orgasmlvl2)
				faceArray.push(8);
			else if(orgasmlvl1)
				faceArray.push(9);
			else
				faceArray.push(7);
		}
		else if(swallowingCum) {
			if(swallowlvl3)
				faceArray.push(10);
			else if(swallowlvl2)
				faceArray.push(8);
			else if(swallowlvl1)
				faceArray.push(9);
			else
				faceArray.push(7);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3)
				faceArray.push(10);
			else if(pussyCreampielvl2)
				faceArray.push(8);
			else if(pussyCreampielvl1)
				faceArray.push(9);
			else
				faceArray.push(7);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3)
				faceArray.push(10);
			else if(analCreampielvl2)
				faceArray.push(8);
			else if(analCreampielvl1)
				faceArray.push(9);
			else
				faceArray.push(7);
		}
		else if(lastHitPussySex || lastHitAnalSex) {
			if(generallvl3)
				faceArray.push(4);
			else
				faceArray.push(3);
		}
		else {
			if(generallvl3)
				faceArray.push(2);
			else
				faceArray.push(1);
		}
	}
	//Giving BJ
	else if(givingBJ) {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(12);
			else if(orgasmlvl2)
				faceArray.push(14);
			else if(orgasmlvl1)
				faceArray.push(11);
			else
				faceArray.push(13);
		}
		else if(swallowingCum) {
			if(swallowlvl3)
				faceArray.push(12);
			else if(swallowlvl2)
				faceArray.push(14);
			else if(swallowlvl1)
				faceArray.push(11);
			else
				faceArray.push(13);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3)
				faceArray.push(12);
			else if(pussyCreampielvl2)
				faceArray.push(14);
			else if(pussyCreampielvl1)
				faceArray.push(11);
			else
				faceArray.push(13);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3)
				faceArray.push(12);
			else if(analCreampielvl2)
				faceArray.push(14);
			else if(analCreampielvl1)
				faceArray.push(11);
			else
				faceArray.push(13);
		}
		else if(lastHitPussySex || lastHitAnalSex) {
			if(generallvl3)
				faceArray.push(4);
			else
				faceArray.push(3);
		}
		else {
			if(generallvl2)
				faceArray.push(6);
			else
				faceArray.push(5);
		}
	}
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	if(faceId === 1) {
		this.setTachieEyes(1);
		this.setTachieMouth(2);
		if(generallvl2) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(2);
		this.setTachieMouth(1);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		this.setTachieEyes(3);
		this.setTachieMouth(1);
		if(generallvl2) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		this.setTachieEyes(4);
		this.setTachieMouth(3);
		this.setTachieHoppe(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(4);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		if(ranNum < 33)
			this.setTachieEyes(4);
		else if(ranNum < 66)
			this.setTachieEyes(5);
		else
			this.setTachieEyes(6);
		this.setTachieHoppe(1);
		if(generallvl2) this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		if(ranNum < 50)
			this.setTachieEyes(2);
		else
			this.setTachieEyes(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		if(ranNum < 33)
			this.setTachieEyes(2);
		else if(ranNum < 66)
			this.setTachieEyes(3);
		else
			this.setTachieEyes(7);
		this.setTachieMouth(5);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		if(ranNum < 50)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(3);
		this.setTachieMouth(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		if(ranNum < 33)
			this.setTachieEyes(4);
		else if(ranNum < 66)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(9);
		this.setTachieMouth(6);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		this.setTachieEyes(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		this.setTachieEyes(9);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		if(ranNum < 50)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(10);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		if(ranNum < 50)
			this.setTachieEyes(9);
		else
			this.setTachieEyes(11);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
	if(givingBJ) 
		this.resetTachieMouth();
};

/////////////////
// Emote Defeated Level One Pose
/////////////////
Game_Actor.prototype.emoteDefeatedLevelOnePose = function() { 
	let ranNum = Math.randomInt(100);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let hasCumOnFace = this._liquidBukkakeFace > 0;
	let hasCumInMouth = this._liquidSwallow > 0;
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	
	let hadFirstKissWithPenisHere = givingBJ && this._firstKissWasPenis && this._recordBlowjobCount === 1 && this._recordBlowjobPeople === 1;
	let metBlowjobReq = (this.mouthDesire >= this.blowjobMouthDesireRequirement()) || (this.cockDesire >= this.blowjobCockDesireRequirement());
	
	let enemyCock = false;
	if(givingBJ) enemyCock = this._cockMouthTarget.enemyCock();
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3)
			faceArray.push(25);
		else if(orgasmlvl2)
			faceArray.push(24);
		else
			faceArray.push(23);
	}
	else if(justGotHarassed) {
		if(generallvl3)
			faceArray.push(25);
		else if(generallvl2)
			faceArray.push(24);
		else
			faceArray.push(23);
	}
	else if(givingBJ) {
		this.setTachieSemenCockMouthExtension('fera_');
		
		if(karrynSwallowingCum) {
			if(swallowlvl3)
				faceArray.push(21);
			else if(swallowlvl2)
				faceArray.push(18);
			else
				faceArray.push(15);
			
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(22);
			else if(bukkakelvl2)
				faceArray.push(19);
			else
				faceArray.push(16);
		}
		else if(hadFirstKissWithPenisHere) {
			faceArray.push(3);
		}
		else {
			if(generallvl3)
				faceArray.push(20);
			else if(generallvl2)
				faceArray.push(17);
			else
				faceArray.push(14);
		}
	}
	//not givingBJ
	else {
		if(hasCumInMouth) {
			if(swallowlvl3)
				faceArray.push(8);
			else if(swallowlvl2)
				faceArray.push(7);
			else
				faceArray.push(6);
		}
		else {
			if(karrynGotBukkaked) {
				if(bukkakelvl3)
					faceArray.push(13);
				else if(bukkakelvl2)
					faceArray.push(12);
				else
					faceArray.push(11);
			}
			else if(metBlowjobReq && generallvl2) {
				if(generallvl3)
					faceArray.push(5);
				else
					faceArray.push(4);
			}
			else if(hasCumOnFace) {
				if(bukkakelvl3)
					faceArray.push(13);
				else if(bukkakelvl2)
					faceArray.push(12);
				else
					faceArray.push(11);
			}
			else {
				if(generallvl3)
					faceArray.push(10);
				else if(generallvl2) {
					faceArray.push(9);
					faceArray.push(2); 
				}
				else
					faceArray.push(1);
			}
		}
	}
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		if(ranNum < 50)
			this.setTachieEyes(5);
		else
			this.setTachieEyes(7);
		if(ranNum < 50)
			this.setTachieMouth(1);
		else
			this.setTachieMouth(2);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		this.setTachieEyes(2);
		this.setTachieMouth(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		this.setTachieEyes(6);
		this.setTachieMouth(8);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		this.resetTachieSemenCockMouthExtension();
	}
	else if(faceId === 4) {
		this.setTachieEyes(6);
		if(ranNum < 50)
			this.setTachieMouth(7);
		else
			this.setTachieMouth(8);
		this.setTachieHoppe(1);
	}
	else if(faceId === 5) {
		this.setTachieEyes(8);
		if(ranNum < 50)
			this.setTachieMouth(7);
		else
			this.setTachieMouth(8);
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		if(ranNum < 50)
			this.setTachieEyes(2);
		else
			this.setTachieEyes(9);
		this.setTachieMouth(5);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		if(ranNum < 50)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(18);
		this.setTachieMouth(5);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		if(ranNum < 33)
			this.setTachieEyes(8);
		else if(ranNum < 66)
			this.setTachieEyes(21);
		else
			this.setTachieEyes(22);
		this.setTachieMouth(6);
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		if(ranNum < 50)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(6);
		this.setTachieMouth(9);
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		this.setTachieEyes(4);
		if(ranNum < 50)
			this.setTachieMouth(4);
		else
			this.setTachieMouth(7);
		this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		if(ranNum < 33)
			this.setTachieEyes(3);
		else if(ranNum < 66)
			this.setTachieEyes(9);
		else
			this.setTachieEyes(10);
		if(ranNum < 33)
			this.setTachieMouth(2);
		else if(ranNum < 66)
			this.setTachieMouth(10);
		else
			this.setTachieMouth(11);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		if(ranNum < 50)
			this.setTachieEyes(1);
		else
			this.setTachieEyes(5);
		if(ranNum < 50)
			this.setTachieMouth(9);
		else
			this.setTachieMouth(10);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		if(ranNum < 50)
			this.setTachieEyes(8);
		else
			this.setTachieEyes(11);
		if(ranNum < 50)
			this.setTachieMouth(4);
		else
			this.setTachieMouth(9);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		if(ranNum < 50)
			this.setTachieEyes(2);
		else
			this.setTachieEyes(3);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('fera_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('fera_' + enemyCock);
	}
	else if(faceId === 15) {
		if(ranNum < 50)
			this.setTachieEyes(12);
		else
			this.setTachieEyes(13);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('fera_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('fera_' + enemyCock);
	}
	else if(faceId === 16) {
		this.setTachieEyes(10);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('fera_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('fera_' + enemyCock);
	}
	else if(faceId === 17) {
		if(ranNum < 50)
			this.setTachieEyes(14);
		else
			this.setTachieEyes(15);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('fera_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('fera_' + enemyCock);
	}
	else if(faceId === 18) {
		if(ranNum < 50)
			this.setTachieEyes(16);
		else
			this.setTachieEyes(17);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('fera_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('fera_' + enemyCock);
	}
	else if(faceId === 19) {
		this.setTachieEyes(18);
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('fera_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('fera_' + enemyCock);
	}
	else if(faceId === 20) {
		if(ranNum < 50)
			this.setTachieEyes(19);
		else
			this.setTachieEyes(20);
		this.setTachieHoppe(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('pero_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('pero_' + enemyCock);
	}
	else if(faceId === 21) {
		if(ranNum < 50)
			this.setTachieEyes(21);
		else
			this.setTachieEyes(22);
		this.setTachieHoppe(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('pero_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('pero_' + enemyCock);
	}
	else if(faceId === 22) {
		this.setTachieEyes(23);
		this.setTachieHoppe(1);
		if(Karryn.isCensored())
			this.setTachieCockMouth('pero_' + enemyCock + '_cen');
		else
			this.setTachieCockMouth('pero_' + enemyCock);
	}
	else if(faceId === 23) {
		eyesArray.push('3');
		eyesArray.push('7');
		eyesArray.push('10');
		eyesArray.push('12');
		mouthArray.push('10');
		mouthArray.push('11');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyesArray.push('3');
		eyesArray.push('6');
		eyesArray.push('9');
		eyesArray.push('12');
		mouthArray.push('3');
		mouthArray.push('8');
		mouthArray.push('10');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyesArray.push('9');
		eyesArray.push('17');
		eyesArray.push('18');
		eyesArray.push('19');
		eyesArray.push('21');
		eyesArray.push('22');
		eyesArray.push('23');
		mouthArray.push('4');
		mouthArray.push('7');
		mouthArray.push('9');
		mouthArray.push('10');
		this.setTachieHoppe(1);
	}
	
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(givingBJ && faceId !== 3){
		this.resetTachieMouth();
	}
	else if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	
	
	
};

// Defeated Level Two
Game_Actor.prototype.emoteDefeatedLevelTwoPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isTwoThirdsWayToOrgasm = this.isTwoThirdsWayToOrgasm();
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let karrynGotSadismSkilled = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_STRIP) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING)|| this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justGotPussyCreampie) {
		if(pussyCreampielvl3) 
			faceArray.push(8);
		else if(pussyCreampielvl2) 
			faceArray.push(5);
		else
			faceArray.push(2);
	}
	else if(justGotAnalCreampie) {
		if(analCreampielvl3) 
			faceArray.push(8);
		else if(analCreampielvl2) 
			faceArray.push(5);
		else
			faceArray.push(2);
	}
	else if(justGotHarassed) {
		if(generallvl3) 
			faceArray.push(8);
		else if(generallvl2) 
			faceArray.push(5);
		else
			faceArray.push(2);
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(8);
		else if(orgasmlvl2) 
			faceArray.push(5);
		else
			faceArray.push(2);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) 
			faceArray.push(9);
		else if(bukkakelvl2) 
			faceArray.push(6);
		else
			faceArray.push(3);
	}
	else if(karrynGotSadismSkilled) {
		if(generallvl3) 
			faceArray.push(9);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(3);
	}
	else {
		if(generallvl3) 
			faceArray.push(7);
		else if(generallvl2) 
			faceArray.push(4);
		else
			faceArray.push(1);
	}

	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('gu1');
		mouthArray.push('gu2');
		mouthArray.push('ahe1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('gu1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('gu1');
		mouthArray.push('gu2');
		mouthArray.push('wa1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('hu1');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('mu1');
		mouthArray.push('gu2');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('hu1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('hu1');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('gu1');
		mouthArray.push('gu2');
		mouthArray.push('mu1');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('mu1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('hu1');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		eyesArray.push('yoko2');
		eyesArray.push('toji1');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('mu1');
		mouthArray.push('ahe1');
		if(isAroused) this.setTachieHoppe(1);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}

};


// Defeated Guard
Game_Actor.prototype.emoteDefeatedGuardPose = function() {			
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingPaizuri = this.isBodySlotPenis(BOOBS_ID);
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let karrynUsedPaizuriSkill = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let enemyUsedPaizuriSkill = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let doublePenetrated = pussyInserted && analInserted;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let putHandsOnThigh = (generallvl3 && this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) || (generallvl2 && this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID));
	
	let tachieLeftArmName = false;
	let tachieRightArmName = false;
	let tachieFrontAName = false;
	
	if(!givingPaizuri || (givingPaizuri && !karrynUsedPaizuriSkill && enemyUsedPaizuriSkill)) {
		this.setTachieBoobs('empty');
		this.setTachieSemenBoobsExtension('empty_');
		this.setMaxTachieSemenLeftArmId(1);
		this.setMaxTachieSemenRightArmId(1);
		if(putHandsOnThigh) {
			tachieFrontAName = 'arms';
			tachieLeftArmName = 'thigh';
			tachieRightArmName = 'thigh';
			this.setTachieSemenLeftArmExtension('frontA_');
			this.setTachieSemenRightArmExtension('frontA_');
		}
		else {
			this.resetTachieFrontA();
			tachieLeftArmName = 'sheets';
			tachieRightArmName = 'sheets';
			this.setTachieSemenLeftArmExtension('sheets_');
			this.setTachieSemenRightArmExtension('sheets_');
		}
		
		if(!givingPaizuri) {
			this.resetTachieFrontB();
			this.setTachieRightArmInFrontOfBody(false);
			this.setTachieLeftArmInFrontOfBody(false);
			this.setTachieLeftArmInFrontOfBoobs(false);
			this.setTachieRightArmInFrontOfBoobs(false);
		}
	}
	
	if(givingPaizuri) {
		let paizuriEnemyCock = this._cockBoobsTarget.enemyCock();
		if(karrynUsedPaizuriSkill) {
			this.resetTachieFrontA();
			this.resetTachieFrontB();
			tachieLeftArmName = 'zuri';
			tachieRightArmName = 'zuri';
			this.setTachieSemenLeftArmExtension('zuri_');
			this.setTachieSemenRightArmExtension('zuri_');
			this.setTachieBoobs('zuri_karryn');
			this.setTachieSemenBoobsExtension('zuri_karryn_');
			this.setTachieRightArmInFrontOfBody(true);
			this.setTachieLeftArmInFrontOfBody(true);
			this.setTachieLeftArmInFrontOfBoobs(true);
			this.setTachieRightArmInFrontOfBoobs(true);
		}
		else if(enemyUsedPaizuriSkill) {
			this.setTachieBoobs('zuri_enemy');
			this.setTachieFrontB('arms_' + paizuriEnemyCock);
			this.setTachieSemenBoobsExtension('zuri_');
			this.setTachieRightArmInFrontOfBody(false);
			this.setTachieLeftArmInFrontOfBody(false);
			this.setTachieLeftArmInFrontOfBoobs(false);
			this.setTachieRightArmInFrontOfBoobs(false);
		}
	}
	
	if(!this.isWearingGlovesAndHat()) {
		if(tachieFrontAName === 'arms') {
			tachieFrontAName = 'arms_naked';
		}
		if(tachieLeftArmName === 'zuri' || tachieLeftArmName === 'thigh' || tachieLeftArmName === 'sheets') {
			tachieLeftArmName += '_naked';
			tachieRightArmName += '_naked';
		}
	}
	
	if(tachieFrontAName) this.setTachieFrontA(tachieFrontAName);
	if(tachieLeftArmName) this.setTachieLeftArm(tachieLeftArmName);
	if(tachieRightArmName) this.setTachieRightArm(tachieRightArmName);
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	if(givingBJ || givingPaizuri) this.resetTachieMouth();
	
	if(givingBJ || givingPaizuri) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(18);
			else if(swallowlvl2) 
				faceArray.push(12);
			else
				faceArray.push(6);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(18);
			else if(orgasmlvl2) 
				faceArray.push(12);
			else
				faceArray.push(6);
		}
		else {
			if(generallvl3) 
				faceArray.push(17);
			else if(generallvl2) 
				faceArray.push(11);
			else
				faceArray.push(5);
		}
	}
	else if(justGotPussyCreampie || justGotAnalCreampie) {
		if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(16);
			else if(pussyCreampielvl2) 
				faceArray.push(10);
			else
				faceArray.push(4);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(16);
			else if(analCreampielvl2) 
				faceArray.push(10);
			else
				faceArray.push(4);
		}
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(16);
		else if(orgasmlvl2) 
			faceArray.push(10);
		else
			faceArray.push(4);
	}
	else if(doublePenetrated) {
		if(generallvl3) 
			faceArray.push(15);
		else if(generallvl2) 
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(pussyInserted || analInserted) {
		if(generallvl3) 
			faceArray.push(14);
		else if(generallvl2) 
			faceArray.push(8);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) 
			faceArray.push(13);
		else if(generallvl2) 
			faceArray.push(7);
		else
			faceArray.push(1);
	}
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho2');
		mouthArray.push('wa2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('toji2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('ahe1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji2');
		eyesArray.push('sita2');
		eyesArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('ahe1');
		mouthArray.push('wa2');
		mouthArray.push('nico1');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
	if(this.tachieCockMouth || this.tachieCockBoobs)
		mouthArray = [];
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
};

////////////////////
////////////////////
// Special Battles
////////////////////
////////////////////

Game_Actor.prototype.emoteMasturbateBattleOne = function() {
	let ranNum = Math.randomInt(100);
	let isTwoThirdsWayToOrgasm = this.isTwoThirdsWayToOrgasm();
	let percentToOrgasm = this.currentPercentOfOrgasm(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let generalReactionScore = this.getReactionScore();
	let masturbateLvl = this.masturbateLvl();

	let headLocation = this.tachieHead;
	let suckingOnFingers = this.tachieRightArm == 'suck_fingers';
	let suckingOnNipple = this.tachieLeftBoob == 'suck_chikubi';
	let headIsFar = (headLocation == 'far');
	let headIsClose = (headLocation == 'close');
	
	let activeAreas = 0;
	if(!this.masturbateBattle_rightHandIsFree()) activeAreas++;
	if(!this.masturbateBattle_LeftHandIsFree()) activeAreas++;
	if(!this.masturbateBattle_MouthIsFree()) activeAreas++;
	
	//Remove climax effect
	this.resetTachieFrontA();
	//Hair
	this.setTachieHair(headLocation);
	
	//Eyes
	if(headIsClose) {
		this.setTachieEyes('close_1');
	}
	else if(headIsFar) {
		if(ranNum < Math.max(25, -25 + percentToOrgasm)) {
			this.setTachieEyes('far_2');
		}
		else {
			this.setTachieEyes('far_1');
		}
	}
	
	//Mouth
	//First if Karryn is sucking on something, reset mouth
	if(suckingOnFingers || suckingOnNipple) {
		this.resetTachieMouth();
	}
	else {
		//Mouths
		//1:Close
		//2:Open
		//3:Tongue Really Out
		
		let mouthType = '1';
		
		if(ranNum < Math.max(masturbateLvl * 4, 
		( -70 + percentToOrgasm + (activeAreas - 1) * 25 + masturbateLvl * 10 ) )) {
			mouthType = '3';
		}
		else if(ranNum < Math.max(masturbateLvl * 10, 
		( -50 + percentToOrgasm + (activeAreas - 1) * 25 + masturbateLvl * 12 ) )) {
			mouthType = '2';
		}
		
		this.setTachieMouth(headLocation + '_' + mouthType);
	}
	
};

////////
// Glory 

//Sitting
Game_Actor.prototype.emoteGloryToiletSittingPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let legsAreSpread = this.tachieLegs === 'spread';
	let legsAreClose = this.tachieLegs === 'close';
	
	let givingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let givingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	
	
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(givingLeftHoleHJ) {
			if(leftHoleEnemy.isAroused()) {
				leftHoleName += 'hj_';
				this.setTachieRightArm('hj_1');
			}
			else {
				leftHoleName += 'pet_';
				this.setTachieRightArm('pet_1');
			}
		}
		else {
			if(leftHoleEnemy.isAroused())
				leftHoleName += 'hard_';
			else
				leftHoleName += 'soft_';
		}
		
		//todo: enemytype code
		leftHoleName += 'human';
		
		this.setTachieLeftHole(leftHoleName);
	}
	else {
		this.resetTachieLeftHole();
		if(this.tachieRightArm.includes('hj') || this.tachieRightArm.includes('pet')) 
			this.setTachieRightArm('normal_1');
	}
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		
		if(givingRightHoleHJ) {
			if(rightHoleEnemy.isAroused()) {
				rightHoleName += 'hj_';
				this.setTachieLeftArm('hj_1');
			}
			else {
				rightHoleName += 'pet_';
				this.setTachieLeftArm('pet_1');
			}
		}
		else {
			if(rightHoleEnemy.isAroused())
				rightHoleName += 'hard_';
			else
				rightHoleName += 'soft_';
		}
		
		//todo: enemytype code
		rightHoleName += 'human';
		
		this.setTachieRightHole(rightHoleName);
	}
	else {
		this.resetTachieRightHole();
		if(this.tachieLeftArm.includes('hj') || this.tachieLeftArm.includes('pet')) 
			this.setTachieLeftArm('normal_1');
	}
	
	if(legsAreSpread) {
		this.setHasTachiePubic(true);
	}
	else {
		this.setHasTachiePubic(false);
	}

};

//Sit Left
Game_Actor.prototype.emoteGloryToiletSitLeftPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let legsAreSpread = this.tachieLegs === 'spread';
	let legsAreClose = this.tachieLegs === 'close';
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(leftHoleEnemy.isAroused()) {
			leftHoleName += 'hard_';
		}
		else {
			leftHoleName += 'soft_';
		}
		
		if(givingLeftHoleHJ) {
			if(leftHoleEnemy.isAroused()) {
				leftHoleName += 'hj_';
				this.setTachieRightArm('hj');
			}
			else {
				this.setTachieRightArm('pet');
			}
		}
		else if(karrynJustUsedCockPet && !leftHoleEnemy.isAroused()) {
			this.setTachieRightArm('pet');
		}
		else {
			this.setTachieRightArm('normal');
		}
		
		if(givingBJ) {
			if(!givingLeftHoleHJ || !rightHoleEnemy.isAroused()) leftHoleName += 'bj_';
			this.resetTachieMouth(); //temp
		}
		else {
			this.setTachieMouth('ahe1'); //temp
		}
		
		//todo: enemytype code
		leftHoleName += 'human';
		
		this.setTachieLeftHole(leftHoleName);
	}
	
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(rightHoleEnemy.isAroused())
			rightHoleName += 'hard_';
		else
			rightHoleName += 'soft_';
		
		//todo: enemytype code
		rightHoleName += 'human';
		
		this.setTachieRightHole(rightHoleName);
	}
	else {
		this.resetTachieRightHole();
	}
	
	
	if(legsAreSpread) {
		this.setHasTachiePubic(true);
		this.setTachieBoobs('spread_normal');
		this.setTachieLeftArm('legs_spread');
	}
	else {
		this.setHasTachiePubic(false);
		this.setTachieBoobs('close');
		this.setTachieLeftArm('legs_close');
	}
};

//Sit Right
Game_Actor.prototype.emoteGloryToiletSitRightPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let legsAreSpread = this.tachieLegs === 'spread';
	let legsAreClose = this.tachieLegs === 'close';
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(rightHoleEnemy.isAroused()) {
			rightHoleName += 'hard_';
		}
		else {
			rightHoleName += 'soft_';
		}
		
		if(givingRightHoleHJ) {
			if(rightHoleEnemy.isAroused()) {
				rightHoleName += 'hj_';
				this.setTachieLeftArm('hj');
			}
			else {
				this.setTachieLeftArm('pet');
			}
		}
		else if(karrynJustUsedCockPet && !rightHoleEnemy.isAroused()) {
			this.setTachieLeftArm('pet');
		}
		else {
			this.setTachieLeftArm('normal');
		}
		
		if(givingBJ) {
			if(!givingRightHoleHJ || !rightHoleEnemy.isAroused()) rightHoleName += 'bj_';
			this.resetTachieMouth(); //temp
		}
		else {
			this.setTachieMouth('ahe1'); //temp
		}
		
		//todo: enemytype code
		rightHoleName += 'human';
		
		this.setTachieRightHole(rightHoleName);
	}
	
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(leftHoleEnemy.isAroused())
			leftHoleName += 'hard_';
		else
			leftHoleName += 'soft_';
		
		//todo: enemytype code
		leftHoleName += 'human';
		
		this.setTachieLeftHole(leftHoleName);
	}
	else {
		this.resetTachieLeftHole();
	}
	
	
	if(legsAreSpread) {
		this.setHasTachiePubic(true);
		this.setTachieBoobs('spread_normal');
		this.setTachieRightArm('legs_spread');
	}
	else {
		this.setHasTachiePubic(false);
		this.setTachieBoobs('close');
		this.setTachieRightArm('legs_close');
	}
};

//Stand Left
Game_Actor.prototype.emoteGloryToiletStandLeftPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	
};

//Stand Right
Game_Actor.prototype.emoteGloryToiletStandRightPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(leftHoleEnemy.isAroused()) {
			leftHoleName += 'hard_';
		}
		else {
			leftHoleName += 'soft_';
		}
		
		if(givingLeftHoleHJ) {
			if(leftHoleEnemy.isAroused()) {
				leftHoleName += 'hj_';
				this.setTachieRightArm('hj');
			}
			else {
				this.setTachieRightArm('pet');
			}
		}
		else {
			this.setTachieRightArm('normal');
		}
		
		if(givingBJ) {
			leftHoleName += 'bj_';
			this.resetTachieMouth(); //temp
		}
		else {
			this.setTachieMouth('far_ahe1'); //temp
		}
		
		//todo: enemytype code
		leftHoleName += 'human';
		
		this.setTachieLeftHole(leftHoleName);
	}
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(rightHoleEnemy.isAroused()) {
			rightHoleName += 'hard_';
			if(pussyInserted) {
				rightHoleName += 'manko_';
				this.setTachieBody('high');
			}
			else if(analInserted) {
				rightHoleName += 'anaru_';
				this.setTachieBody('low');
			}
			else {
				this.setTachieBody('high');
			}
			
		}
		else {
			rightHoleName += 'soft_';
		}
		
		//todo: enemytype code
		rightHoleName += 'human';
		
		this.setTachieRightHole(rightHoleName);
	}
	else {
		this.resetTachieRightHole();
	}
	
	
	
	
	
};

// Waitress Serving 
Game_Actor.prototype.emoteWaitressServingPose = function(flashingCurrently) {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let affectedByJustOrgasmedState = this.justOrgasmed();
	let isHorny = this.isHorny;
	let isDeadDrunk = this.isDeadDrunk;
	let isDrunk = this.isDrunk || isDeadDrunk;
	let isTipsy = this.isTipsy && !isDrunk && !isDeadDrunk;
	let isTrayEmpty = this.waitressBattle_isTrayEmpty();
	let locationIsAtBar = this._barLocation === BAR_LOCATION_STANDBY;
	let locationIsAtTable = !locationIsAtBar;
	let isAtTableWithGuests = this.showEval_tableTakeOrder() && this.customReq_tableTakeOrder();
	let brawlGoingOn = $gameParty.waitressBattle_ongoingBrawl();
	let isNotAcceptingAnyAlcohol = this.isNotAcceptingAnyAlcohol();
	
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TALK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_STRIP) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING);

	let justUsedKick = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_SADISM);
	let isMoving = this.didLastGetHitBySkillType(JUST_SKILLTYPE_WAITRESS_MOVING);
	let isDrinking = this.didLastGetHitBySkillType(JUST_SKILLTYPE_WAITRESS_DRINK);
	let isFlashing = this.didLastGetHitBySkillType(JUST_SKILLTYPE_WAITRESS_FLASH);
	
	//let flashingLvlOne = this.tachieBoobs == 'waitress_1_flash' || this.tachieBoobs == 'waitress_1_flash_hard';
	//let flashingLvlTwo = this.tachieBoobs == 'waitress_2_flash' || this.tachieBoobs == 'waitress_2_flash_hard';
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	//this.takeOffGlovesAndHat();
	//this.setTachieBody(2);
	
	if(isFlashing) {
		let flashingTachieBoobs = '';
		if(!isTrayEmpty) {
			flashingTachieBoobs = 'waitress_1_flash';
			if((this.isAroused() || this.justOrgasmed()) && this.tachieHasBoobsHard()) flashingTachieBoobs += '_hard';
		}
		else {
			flashingTachieBoobs = 'waitress_2_flash';
			if((this.isAroused() || this.justOrgasmed()) && this.tachieHasBoobsHard()) flashingTachieBoobs += '_hard';
		}
		this.setTachieBoobs(flashingTachieBoobs);
	}
	else {
		this.setBoobsType('waitress');
		this.setPoseClothing();
	}
	this.setPosePanties();

	//Tray
	//Is Flashing
	if(isFlashing) {
		if(!isTrayEmpty) {
			this.setTachieLeftArm('naked5');
			this.setTachieRightArmInFrontOfBoobs(false);
			this.setTachieTrayContents();
		}
		else {
			this.setTachieLeftArm('naked5');
			this.setTachieRightArm('zipper_1');
			this.setTachieRightArmInFrontOfBoobs(true);
		}
	}
	//not Flashing
	else {
		this.setTachieLeftArm('naked4');
		this.setTachieRightArmInFrontOfBoobs(false);
		if(isTrayEmpty) {
			this.resetTachieFrontC();
			this.resetTachieFrontD();
			this.resetTachieFrontE();
			this.setTachieRightArm('naked3');
			//this.setTachieRightArmInFrontOfBoobs(false);
		}
		else {
			this.setTachieTrayContents();
			//this.setTachieRightArmInFrontOfBoobs(false);
		}
	}
	
	
	//Face Array
	let faceArray = [];

	if(isFlashing) {
		faceArray.push(16);
	}
	else if(justOrgasmed || affectedByJustOrgasmedState) {
		if(isDrunk) {
			faceArray.push(26);
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(25);
			else if(orgasmlvl2) 
				faceArray.push(22);
			else
				faceArray.push(19);
		}
	}
	else if(isDrinking) {
		if(generallvl3) 
			faceArray.push(29);
		else if(generallvl2) 
			faceArray.push(28);
		else
			faceArray.push(27);
	}
	else if(justGotHarassed) {
		if(generallvl3) 
			faceArray.push(24);
		else if(generallvl2) 
			faceArray.push(21);
		else
			faceArray.push(18);
	}
	else if(justUsedKick) {
		if(generallvl3) 
			faceArray.push(13);
		else if(generallvl2) 
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(isHorny) {
		if(generallvl3) 
			faceArray.push(23);
		else if(generallvl2) 
			faceArray.push(20);
		else
			faceArray.push(17);
	}
	else if(brawlGoingOn) {
		if(generallvl3) 
			faceArray.push(13);
		else if(generallvl2) 
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(isDrunk) {
		if(generallvl3) 
			faceArray.push(15);
		else if(generallvl2) 
			faceArray.push(10);
		else
			faceArray.push(5);
	}
	else if(!isNotAcceptingAnyAlcohol && isAtTableWithGuests) {
		if(generallvl3) 
			faceArray.push(14);
		else if(generallvl2) 
			faceArray.push(9);
		else
			faceArray.push(4);
	}
	else if(!isTrayEmpty && (isAtTableWithGuests || (!generallvl3 && !generallvl2))) {
		if(generallvl3) 
			faceArray.push(12);
		else if(generallvl2) 
			faceArray.push(7);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) 
			faceArray.push(11);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(1);
	}
	
	
	//Face ID
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let headType = 'normal';
	//this.resetTachieSweat();
	//this.resetTachieHoppe();
	
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let tachieHoppeName = '';
	let tachieSweatName = '';
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	let dontResetTachieHoppe = false;
	let dontResetTachieSweat = false;
	
	if(faceId === 1) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 2) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		displayTachieSweat = true;
			tachieSweatName += '1';
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko2');
		eyesArray.push('mae2');
		eyesArray.push('yoko1');
		eyesArray.push('oko1');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		if(isDrunk) {
			displayTachieHoppe = true;
			tachieHoppeName += '2';
			displayTachieSweat = true;
			tachieSweatName += '2';
		}
		else {
			if(isAroused) {
				tachieHoppeName += '1';
				displayTachieHoppe = true;
			}
			displayTachieSweat = true;
			tachieSweatName += '2';
		}
	}
	else if(faceId === 4) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		mouthArray.push('nico1');
		mouthArray.push('wara2');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko2');
		eyesArray.push('drunk1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		displayTachieHoppe = true;
		tachieHoppeName += '2';
		displayTachieSweat = true;
		tachieSweatName += '2';
	}
	else if(faceId === 6) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 7) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 8) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('wa3');
		mouthArray.push('ku1');
		if(isDrunk) {
			displayTachieHoppe = true;
			tachieHoppeName += '2';
		}
		else if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		displayTachieSweat = true;
		tachieSweatName += '1';
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('mae2');
		eyesArray.push('drunk1');
		mouthArray.push('wara1');
		mouthArray.push('nico2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		tachieHoppeName += '2';
		displayTachieHoppe = true;
		displayTachieSweat = true;
		tachieSweatName += '1';
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico3');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('wara1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa2');
		if(isDrunk) {
			displayTachieHoppe = true;
			tachieHoppeName += '2';
		}
		else if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico3');
		eyebrowsArray.push('nico2');
		eyesArray.push('uruyoko1');
		eyesArray.push('yoko2');
		eyesArray.push('toji2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('pero2');
		mouthArray.push('pero1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico3');
		eyebrowsArray.push('nico2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('drunk1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wara1');
		mouthArray.push('pero2');
		mouthArray.push('pero1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('toji2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('wara2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		displayTachieHoppe = true;
		if(isDrunk) {
			if(generallvl3)
				tachieHoppeName += '3';
			else
				tachieHoppeName += '2';
		}
		else {
			tachieHoppeName += '1';
		}
		if(generallvl3) {}
		else if(!generallvl2 && isDrunk) {
			displayTachieSweat = true;
			tachieSweatName += '2';
		}
		else {
			displayTachieSweat = true;
			tachieSweatName += '1';
		}
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('wa3');
		mouthArray.push('wa2');
		if(isDrunk) {
			tachieHoppeName += '2';
			displayTachieHoppe = true;
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 18) {
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko4');
		eyesArray.push('yoko3');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		if(isDrunk) {
			tachieHoppeName += '2';
			displayTachieHoppe = true;
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 19) {
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko4');
		eyesArray.push('toji2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		mouthArray.push('wa4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 20) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('wa1');
		mouthArray.push('ho2');
		mouthArray.push('wara1');
		if(isDrunk) {
			tachieHoppeName += '2';
			displayTachieHoppe = true;
		}
		else {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('yoko4');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		if(isDrunk) {
			tachieHoppeName += '2';
			displayTachieHoppe = true;
		}
		else {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('uruyoko2');
		eyesArray.push('yoko4');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('wara2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isDrunk) {
			tachieHoppeName += '3';
			displayTachieHoppe = true;
		}
		else {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('yoko4');
		mouthArray.push('nico2');
		mouthArray.push('pero2');
		mouthArray.push('wara2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isDrunk) {
			tachieHoppeName += '3';
			displayTachieHoppe = true;
		}
		else {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		eyesArray.push('uruyoko2');
		eyesArray.push('yoko4');
		mouthArray.push('wara2');
		mouthArray.push('pero2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		displayTachieSweat = true;
		tachieSweatName += '1';
	}
	else if(faceId === 26) {
		eyebrowsArray.push('koma2');
		eyesArray.push('drunk1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		tachieHoppeName += '3';
		displayTachieHoppe = true;
		displayTachieSweat = true;
		tachieSweatName += '2';
	}
	else if(faceId === 27) {
		eyebrowsArray.push('kiri2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho2');
		displayTachieSweat = true;
		tachieSweatName += '1';
		dontResetTachieHoppe = true;
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		mouthArray.push('mu1');
		mouthArray.push('nico1');
		mouthArray.push('ho2');
		dontResetTachieHoppe = true;
		dontResetTachieSweat = true;
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		mouthArray.push('nico2');
		mouthArray.push('nico1');
		mouthArray.push('ho2');
		mouthArray.push('pero1');
		dontResetTachieHoppe = true;
		dontResetTachieSweat = true;
	}

	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + headType + '_' + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + headType + '_' + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + headType + '_' + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	if(displayTachieHoppe) this.setTachieHoppe('' + headType + '_' + tachieHoppeName);
	else if(!dontResetTachieHoppe) this.resetTachieHoppe();
	if(displayTachieSweat) this.setTachieSweat('' + headType + '_' + tachieSweatName);
	else if(!dontResetTachieSweat) this.resetTachieSweat();
	
	this.setWardenMapPoseExtensions();
};


//////////
// Emote Waitress Sex Pose
///////////

Game_Actor.prototype.emoteWaitressSexPose = function() { 
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isDrunk = this.isDrunk;
	let notDrinkingFromStraw = this.tachieStraw === REM_TACHIE_NULL;
	let mugIsSemen = this._karrynMugContent === ALCOHOL_TYPE_SEMEN && this._karrynMugAmount > 0;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let hasCumInMouth = this._liquidSwallow > 0;
	let givingRightHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let lastHitSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY);
	let holeInserted = this.isBodySlotPenis(ANAL_ID) || this.isBodySlotPenis(PUSSY_ID) || this.isBodySlotToy(PUSSY_ID) || this.isBodySlotToy(ANAL_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID) || this.isBodySlotToy(ANAL_ID);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID) || this.isBodySlotToy(PUSSY_ID);
	let doublePenetrated = pussyInserted && analInserted;
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let enemyCummingFromLeftHJ = $gameTroop._lastEnemySlotToCum === LEFT_HAND_ID;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	
	if(givingBJ) {
		if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(4);
	}
	else if(notDrinkingFromStraw) {
		if(karrynSwallowingCum && hasCumInMouth && mugIsSemen) {
			if(swallowlvl2) 
				faceArray.push(16);
			else
				faceArray.push(5);
		}
		else if(karrynSwallowingCum && hasCumInMouth && !mugIsSemen) {
			if(swallowlvl2) 
				faceArray.push(17);
			else
				faceArray.push(6);
		}
		else if(justGotPussyCreampie || justGotAnalCreampie || justOrgasmed) {
			if(justGotPussyCreampie) {
				if(pussyCreampielvl2) 
					faceArray.push(22);
				else
					faceArray.push(11);
			}
			else if(justGotAnalCreampie) {
				if(analCreampielvl2) 
					faceArray.push(22);
				else
					faceArray.push(11);
			}
			else if(justOrgasmed) {
				if(orgasmlvl2) 
					faceArray.push(22);
				else
					faceArray.push(11);
			}
		}
		else if(karrynGotBukkaked && enemyCummingFromLeftHJ) {
			if(generallvl2) 
				faceArray.push(19);
			else
				faceArray.push(8);
		}
		else if(lastHitHandjob) {
			if(generallvl2) 
				faceArray.push(18);
			else
				faceArray.push(7);
		}
		else if(doublePenetrated) {
			if(generallvl2) 
				faceArray.push(21);
			else
				faceArray.push(10);
		}
		else if(holeInserted) {
			if(generallvl2) 
				faceArray.push(20);
			else
				faceArray.push(9);
		}
		else if(givingRightHJ) {
			if(generallvl2) 
				faceArray.push(18);
			else
				faceArray.push(7);
		}
		else if(mugIsSemen) {
			if(swallowlvl2) 
				faceArray.push(17);
			else
				faceArray.push(6);
		}
		else {
			if(generallvl3) 
				faceArray.push(12);
			else
				faceArray.push(1);
		}
	}
	//drinking from straw
	else {
		if(mugIsSemen) {
			if(generallvl3) 
				faceArray.push(13);
			else
				faceArray.push(3);
		}
		else {
			if(generallvl3) 
				faceArray.push(14);
			else
				faceArray.push(2);
		}
	}
	
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		mouthArray.push('oh1');
		mouthArray.push('oh2');
		mouthArray.push('oh3');
		mouthArray.push('oh4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('mae1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('mae2');
		eyesArray.push('toji4');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('mae2');
		eyesArray.push('toji3');
		mouthArray.push('dasu1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('toji4');
		mouthArray.push('ku2');
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('te1');
		mouthArray.push('oh1');
		mouthArray.push('oh2');
		mouthArray.push('oh3');
		mouthArray.push('oh4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('mae2');
		eyesArray.push('toji5');
		mouthArray.push('oh1');
		mouthArray.push('oh2');
		mouthArray.push('oh3');
		mouthArray.push('oh4');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		this.setTachieSweat(2);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('ku1');
		eyesArray.push('yoko1');
		mouthArray.push('oh1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('oh4');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('yoko2');
		mouthArray.push('oh1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('oh4');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('ku2');
		eyesArray.push('ue1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('toji4');
		mouthArray.push('oh4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('name1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		this.setTachieSweat(2);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('te1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji4');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('toji3');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('toji3');
		mouthArray.push('dasu2');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('toji4');
		eyesArray.push('ue1');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('te1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('oh2');
		mouthArray.push('oh3');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji5');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('name2');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('name2');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko2');
		eyesArray.push('toji2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('oh1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('ue1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('wa1');
		if(isAroused) this.setTachieHoppe(1);
		else if(isDrunk) this.setTachieHoppe(2);
		if(isAroused) this.setTachieSweat(1);
		else if(isDrunk) this.setTachieSweat(2);
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	else {
		this.resetTachieMouth();
	}
};

Game_Actor.prototype.emoteReceptionistPose = function() {
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let affectedByJustOrgasmedState = this.justOrgasmed();
	let receptionistIsHavingSexBehind = this.receptionistBattle_isHavingSexBehind();
	let receptionistIsOnRadio = this._receptionist_checkingVisitingRoom_startingPhoneCall;
	let receptionistIsWorking = this._receptionist_currentlyProcessingPapers;
	
	let receptionistIsShakingHands = this.receptionistBattle_isShakingHands();
	let receptionistIsKissing = this.receptionistBattle_isKissing();
	let receptionistIsGettingBoobsRubbed = this.receptionistBattle_gettingBoobsRubbed();
	let receptionistIsGivingBJ = this.receptionistBattle_isGivingBlowjob();
	let receptionistIsGivingHJ = this.receptionistBattle_isGivingHandjob();
	
	let receptionistIsGettingPussyLicked = this.isBodySlotTongue(PUSSY_ID);
	let receptionistIsGettingPussyFucked = this.isBodySlotPenis(PUSSY_ID);
	let receptionistIsGettingAnalFucked = this.isBodySlotPenis(ANAL_ID);
	
	let thereIsAGoblinBehind = $gameTroop._goblins_distanceSlot && $gameTroop._goblins_distanceSlot[GOBLIN_DISTANCE_CLOSE];
	let thereIsVisitorAtDesk = $gameTroop.receptionistBattle_thereIsVisitorAtDesk();
	let thereIsAIdentifiedPervInFront = thereIsVisitorAtDesk && $gameTroop._deskQueue[0]._visitor_isPervert && ($gameTroop._deskQueue[0]._visitor_isIdentified || $gameTroop._deskQueue[0].isWanted);
	
	let karrynGotPetted = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let lastHitCunnilingus = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUNNILINGUS);
	
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();

	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	
	let faceArray = [];
	this.resetTachieEyes();
	this.resetTachieEyebrows();
	this.resetTachieMouth();
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	this.updateReceptionistBattleGoblinTachie();
	this.updateReceptionistBattleVisitorQueueTachie();
	
	this.setPosePanties();
	let wearingGlasses = this._receptionist_wearingGlasses;
	let tachieClothesName = '';
	let tachieHoppeName = '';
	let tachieSweatName = '';
	let tachieEyesName = '';
	let tachieEyebrowsName = '';
	let tachieMouthName = '';
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	
	if(receptionistIsGivingBJ) {
		this.setTachieBody('fera');
		this.setTachieBoobs('fera_1');
		if(wearingGlasses) this.setTachieGlasses('fera_1');
		this.resetTachieRightArm();
		
		if(receptionistIsGivingHJ)
			this.setTachieLeftArm('fera_hj');
		else
			this.setTachieLeftArm('fera_normal');
		
		tachieClothesName = 'fera_';
		tachieEyesName = 'fera_';
		tachieEyebrowsName = 'fera_';
		tachieMouthName = 'fera_';
		tachieHoppeName = 'fera_';
		tachieSweatName = 'fera_';
		
		this.setTachieSemenBoobsExtension('fera_');
		this.setTachieSemenFaceExtension('fera_');
	}
	else if(receptionistIsWorking) {
		this.setTachieBody('working');
		this.setTachieBoobs('working_1');
		if(wearingGlasses) this.setTachieGlasses('working_1');
		this.setTachieRightArm('working_writing');
		this.setTachieLeftArm('working_normal');
		
		tachieClothesName = 'working_';
		tachieEyesName = 'working_';
		tachieEyebrowsName = 'working_';
		tachieMouthName = 'working_';
		tachieHoppeName = 'working_';
		tachieSweatName = 'working_';
		
		this.setTachieSemenBoobsExtension('working_');
		this.setTachieSemenFaceExtension('working_');
	}
	//standing
	else {
		this.setTachieBody('standing');
		if(receptionistIsGettingBoobsRubbed) {
			this.setTachieBoobs('standing_momi_1');
			this.setTachieSemenBoobsExtension('standing_momi_');
		}
		else {
			this.setTachieBoobs('standing_1');
			this.setTachieSemenBoobsExtension('standing_');
		}
		if(wearingGlasses) this.setTachieGlasses('standing_1');
		
		if(receptionistIsGivingHJ) {
			if(receptionistIsKissing) {
				this.setTachieLeftArm('standing_kiss_hj');
				this.setTachieSemenLeftArmExtension('kiss_');
			}
			else  {
				this.setTachieLeftArm('standing_hj');
				this.resetTachieSemenLeftArmExtension();
			}
		}
		else 
			this.setTachieLeftArm('standing_normal');
		
		if(receptionistIsShakingHands) 
			this.setTachieRightArm('standing_handshake');
		else if(receptionistIsOnRadio)
			this.setTachieRightArm('standing_radio');
		else
			this.setTachieRightArm('standing_normal');
		
		tachieClothesName = 'standing_';
		tachieEyesName = 'standing_';
		tachieEyebrowsName = 'standing_';
		tachieMouthName = 'standing_';
		tachieHoppeName = 'standing_';
		tachieSweatName = 'standing_';
		
		this.setTachieSemenFaceExtension('standing_');
	}
	
	//let goblinTachieStillInserted = this.tachieFrontD == 'goblin_manko' || this.tachieFrontD == 'goblin_manko_cen' || this.tachieFrontD == 'goblin_anaru' || this.tachieFrontD == 'goblin_anaru_cen';
	if(receptionistIsHavingSexBehind) {
		tachieClothesName += 'spread_1';
		this.setTachieButt('spread_1');
		this.resetTachieSkirt();
		this.setTachieSemenAnalExtension('spread_');
		this.setTachieSemenButtExtension('spread_');
		this.setTachieSemenCrotchExtension('spread_');
		this.setTachieSemenWetExtension('spread_');
	}
	//if not spread
	else {
		tachieClothesName += '1';
		this.setTachieButt(1);
		
		if(this.clothingStage < 3)
			this.setTachieSkirt(this.clothingStage)
		else
			this.resetTachieSkirt();
		
		this.resetTachieSemenAnalExtension();
		this.resetTachieSemenButtExtension();
		this.resetTachieSemenCrotchExtension();
		this.resetTachieSemenWetExtension();
	}
	this.setTachieClothes(tachieClothesName);
	
	
	//Blowjob
	if(receptionistIsGivingBJ) {
		if(karrynSwallowingCum) {
			faceArray.push(50);
		}
		else {
			if(swallowlvl3)
				faceArray.push(49);
			if(swallowlvl2)
				faceArray.push(48);
			else
				faceArray.push(47);
		}
	}
	//Working
	else if(receptionistIsWorking) {
		if(thereIsAGoblinBehind) {
			if(justGotPussyCreampie) {
				if(pussyCreampielvl3)
					faceArray.push(46);
				else
					faceArray.push(42);
			}
			else if(justGotAnalCreampie) {
				if(analCreampielvl3)
					faceArray.push(46);
				else
					faceArray.push(42);
			}
			else if(justOrgasmed) {
				if(orgasmlvl3)
					faceArray.push(46);
				else
					faceArray.push(42);
			}
			else if(karrynGotPetted) {
				if(generallvl3)
					faceArray.push(44);
				else
					faceArray.push(40);
			}
			else if(lastHitPussySex || lastHitAnalSex || receptionistIsGettingPussyLicked || receptionistIsGettingPussyFucked || receptionistIsGettingAnalFucked) {
				if(generallvl3)
					faceArray.push(45);
				else
					faceArray.push(41);
			}
			else {
				if(generallvl3)
					faceArray.push(43);
				else
					faceArray.push(39);
			}
		}
		else {
			if(generallvl3)
					faceArray.push(43);
				else
					faceArray.push(38);
		}
	}
	//Standing
	else {
		if(justGotPussyCreampie) {
			if(pussyCreampielvl3)
				faceArray.push(37);
			else if(pussyCreampielvl2)
				faceArray.push(24);
			else
				faceArray.push(12);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3)
				faceArray.push(37);
			else if(analCreampielvl2)
				faceArray.push(24);
			else
				faceArray.push(12);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(37);
			else if(orgasmlvl2)
				faceArray.push(24);
			else
				faceArray.push(12);
		}
		//Pervert
		else if(thereIsAIdentifiedPervInFront) {
			if(receptionistIsKissing) {
				if(generallvl3)
					faceArray.push(36);
				else if(generallvl2)
					faceArray.push(23);
				else
					faceArray.push(11);
			}
			else if(receptionistIsGettingBoobsRubbed) {
				if(generallvl3)
					faceArray.push(35);
				else if(generallvl2)
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else if(affectedByJustOrgasmedState) {
				if(generallvl3)
					faceArray.push(30);
				else if(generallvl2)
					faceArray.push(20);
				else
					faceArray.push(8);
			}
			else {
				if(generallvl3)
					faceArray.push(34);
				else if(generallvl2)
					faceArray.push(21);
				else
					faceArray.push(9);
			}
		}
		//Goblin
		else if(thereIsAGoblinBehind) {
			if(lastHitCunnilingus) {
				if(generallvl3)
					faceArray.push(53);
				else if(generallvl2)
					faceArray.push(52);
				else
					faceArray.push(51);
			}
			else if(karrynGotPetted) {
				if(thereIsVisitorAtDesk) {
					if(generallvl3)
						faceArray.push(30);
					else if(generallvl2)
						faceArray.push(18);
					else
						faceArray.push(6);
				}
				else {
					if(generallvl3)
						faceArray.push(29);
					else if(generallvl2)
						faceArray.push(17);
					else
						faceArray.push(5);
				}
			}
			else if(lastHitPussySex || lastHitAnalSex || receptionistIsGettingPussyLicked || receptionistIsGettingPussyFucked || receptionistIsGettingAnalFucked) {
				if(thereIsVisitorAtDesk) {
					if(generallvl3)
						faceArray.push(32);
					else if(generallvl2)
						faceArray.push(20);
					else
						faceArray.push(8);
				}
				else {
					if(generallvl3)
						faceArray.push(31);
					else if(generallvl2)
						faceArray.push(19);
					else
						faceArray.push(7);
				}
			}
			else if(affectedByJustOrgasmedState) {
				if(generallvl3)
					faceArray.push(30);
				else if(generallvl2)
					faceArray.push(20);
				else
					faceArray.push(8);
			}
			else {
				if(thereIsVisitorAtDesk) {
					if(generallvl3)
						faceArray.push(28);
					else if(generallvl2)
						faceArray.push(16);
					else
						faceArray.push(4);
				}
				else {
					if(generallvl3)
						faceArray.push(27);
					else if(generallvl2)
						faceArray.push(15);
					else
						faceArray.push(3);
				}
			}
			
		}
		//No Goblin
		else {
			if(affectedByJustOrgasmedState) {
				if(generallvl3)
					faceArray.push(30);
				else if(generallvl2)
					faceArray.push(20);
				else
					faceArray.push(8);
			}
			else if(thereIsVisitorAtDesk) {
				if(generallvl3)
					faceArray.push(26);
				else if(generallvl2)
					faceArray.push(14);
				else
					faceArray.push(2);
			}
			else {
				if(generallvl3)
					faceArray.push(25);
				else if(generallvl2)
					faceArray.push(13);
				else
					faceArray.push(1);
			}
		}
		
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	
	if(faceId === 1) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('mu1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 2) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 3) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 4) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('mae1');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		mouthArray.push('ku1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('mae1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('kiss1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe2');
		eyesArray.push('nico1');
		mouthArray.push('mu2');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('mae1');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 20) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('mae2');
		eyesArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('mu2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 23) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('nico1');
		mouthArray.push('kiss1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 24) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		eyesArray.push('nico1');
		mouthArray.push('mu2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('nico1');
		mouthArray.push('nico4');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 30) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 31) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('nico1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ho1');
		mouthArray.push('nico4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 32) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 34) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 35) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('nico1');
		mouthArray.push('mu2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 36) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('nico1');
		mouthArray.push('kiss2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 37) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		eyesArray.push('nico1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 38) {
		mouthArray.push('mu1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 39) {
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 40) {
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 41) {
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 42) {
		mouthArray.push('ahe1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 43) {
		mouthArray.push('nico1');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 44) {
		mouthArray.push('nico1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 45) {
		mouthArray.push('nico1');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 46) {
		mouthArray.push('nico1');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 47) {
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 48) {
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 49) {

	}
	else if(faceId === 50) {
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 51) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('sita4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 52) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita3');
		eyesArray.push('sita4');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 53) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita3');
		eyesArray.push('sita4');
		eyesArray.push('nico1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + tachieEyebrowsName + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + tachieEyesName + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + tachieMouthName + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	
	if(displayTachieHoppe) this.setTachieHoppe(tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat(tachieSweatName);
};

//////////////////
/////////////////
// Emote Map Pose
/////////////////
/////////////////

Game_Actor.prototype.emoteMapPose = function(goingToSleep, goingToOnani, calledFromCommons) { 
	if(this.isInWaitressServingPose()) {
		this.emoteWaitressServingPose(false);
		return;
	}
	if(!$gameScreen.isMapMode() && !goingToSleep && !goingToOnani && !calledFromCommons) {
		return;
	}
	let justEscaped = this._justEscapedFlag;
	let stoodStillForTooLong = this.stoodStillForTooLong();
	let wearingWardenOutfit = this.isWearingWardenClothing();
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;

	let mapReactionScore = this.getMapReactionScore();
	let fatigueLevel = this.getFatigueLevel();
	
	let maplvl3 = mapReactionScore >= VAR_DEF_RS_LV3_REQ;
	let maplvl2 = mapReactionScore >= VAR_DEF_RS_LV2_REQ;
	let maplvl1 = mapReactionScore >= VAR_DEF_RS_LV1_REQ;
	let fatiguelvl3 = fatigueLevel >= 4;
	let fatiguelvl2 = fatigueLevel >= 2;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	this.setTachieLeftArmInFrontOfBoobs(true);
	
	if(goingToSleep) {
		faceArray.push(21);
	}
	else if(goingToOnani) {
		if(maplvl3) {
			faceArray.push(24);
		}
		else if(maplvl2) {
			faceArray.push(23);
		}
		else {
			faceArray.push(22);
		}
	}
	//Boredom takes precedent over all other mood since boredom only happens from afking
	else if(stoodStillForTooLong) {
		if(this._standingStillStage === 0) {
			faceArray.push('4normal');
			faceArray.push('4down');
		}
		else if(this._standingStillStage === 1) {
			faceArray.push(5);
		}
		else if(this._standingStillStage === 2) {
			faceArray.push(6);
		}
		else if(this._standingStillStage === 3) {
			faceArray.push(7);
		}
		//sleep
		else if(this._standingStillStage >= 4) {
			faceArray.push(8);
			
			this.setKarrynSleepSprite();
			let turnLeftArray = {list: [{code:17, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
			$gamePlayer.forceMoveRoute(turnLeftArray);
		}
		
		this._standingStillStage++;
	}
	//Ran away
	else if(justEscaped) {
		if(fatiguelvl3) {
			faceArray.push(11);
		}
		else if(fatiguelvl2) {
			faceArray.push('10normal');
			faceArray.push('10down');
		}
		else {
			faceArray.push('9normal');
			faceArray.push('9down');
		}
	}
	//Aroused
	else if(isAroused) {
		if(maplvl3) {
			if(fatiguelvl3) {
				faceArray.push('20normal');
				faceArray.push('20down');
			}
			else if(fatiguelvl2) {
				faceArray.push('19normal');
				faceArray.push('19down');
			}
			else {
				faceArray.push('18normal');
				faceArray.push('18down');
			}
		}
		else if(maplvl2) {
			if(fatiguelvl3) {
				faceArray.push('17normal');
				faceArray.push('17down');
			}
			else if(fatiguelvl2) {
				faceArray.push('16normal');
				faceArray.push('16down');
			}
			else {
				faceArray.push('15normal');
				faceArray.push('15down');
			}
		}
		else {
			if(fatiguelvl3) {
				faceArray.push('14normal');
				faceArray.push('14down');
			}
			else if(fatiguelvl2) {
				faceArray.push('13normal');
				faceArray.push('13down');
			}
			else {
				faceArray.push('12normal');
				faceArray.push('12down');
			}
		}
	}
	else {
		if(fatiguelvl3) {
			faceArray.push('3normal');
			faceArray.push('3down');
		}
		else if(fatiguelvl2) {
			faceArray.push('2normal');
			faceArray.push('2down');
		}
		else {
			faceArray.push('1normal');
			faceArray.push('1down');
		}
	}
	
	//Set face
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let headType = '';
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let boobsTypeArray = [];
	let leftArmArray = [];
	let rightArmArray = [];
	let tachieHoppeName = '';
	let tachieSweatName = '';
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	
	//console.log(faceId);
	
	if(faceId === '1normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('mu1');
		mouthArray.push('wara1');
		mouthArray.push('wa2');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
	}
	else if(faceId === '1down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri3');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('mae1');
		eyesArray.push('sita1');
		eyesArray.push('sitayoko1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
	}
	else if(faceId === '2normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('mu1');
		mouthArray.push('wa2');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '2down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri3');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita2');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '3normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('drunk1');
		mouthArray.push('ho1');
		mouthArray.push('mu2');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '3down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko1');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '4normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('mu1');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(fatiguelvl3) {
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else if(fatiguelvl2) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === '4down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri3');
		eyesArray.push('sita2');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(fatiguelvl3) {
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else if(fatiguelvl2) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 5) {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(fatiguelvl3) {
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else if(fatiguelvl2) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 6) {
		headType = 'down';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyesArray.push('sitayoko1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(fatiguelvl3) {
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else if(fatiguelvl2) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 7) {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico3');
		eyesArray.push('yoko4');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(5);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(fatiguelvl3) {
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else if(fatiguelvl2) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 8) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(fatiguelvl3) {
			tachieSweatName += '2';
			displayTachieSweat = true;
		}
		else if(fatiguelvl2) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === '9normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ku1');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(2);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '9down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('yoko2');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		leftArmArray.push(1);
		leftArmArray.push(3);
		rightArmArray.push(2);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '10normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		mouthArray.push('ku1');
		leftArmArray.push(3);
		rightArmArray.push(2);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '10down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		leftArmArray.push(3);
		rightArmArray.push(2);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 11) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('toji1');
		eyesArray.push('sitayoko2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '12normal') {
		headType = 'normal';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '12down') {
		headType = 'down';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		mouthArray.push('ho1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '13normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko3');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '13down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('mae2');
		eyesArray.push('sitayoko2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '14normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('drunk1');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '14down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '15normal') {
		headType = 'normal';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '15down') {
		headType = 'down';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri3');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('urumae1');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko1');
		mouthArray.push('nico2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '16normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '16down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('urumae2');
		eyesArray.push('sitayoko2');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '17normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('uruyoko2');
		eyesArray.push('drunk1');
		eyesArray.push('toji1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		mouthArray.push('wara1');
		mouthArray.push('ahe1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '17down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('urumae2');
		eyesArray.push('yoko4');
		eyesArray.push('toji1');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('mu2');
		mouthArray.push('ahe1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '18normal') {
		headType = 'normal';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico2');
		mouthArray.push('wara2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '18down') {
		headType = 'down';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('sitayoko1');
		eyesArray.push('sita1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		mouthArray.push('wara1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '19normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('mae2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe2');
		mouthArray.push('wa1');
		mouthArray.push('nico1');
		mouthArray.push('wara1');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '19down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko2');
		mouthArray.push('wara1');
		mouthArray.push('ahe2');
		mouthArray.push('wa1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(3);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '20normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko4');
		eyesArray.push('drunk1');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa3');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('wara1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '20down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('sitayoko2');
		eyesArray.push('toji1');
		eyesArray.push('urumae2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('toji1');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		leftArmArray.push(2);
		rightArmArray.push(1);
		rightArmArray.push(3);
	}
	else if(faceId === 22) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sitayoko1');
		mouthArray.push('mu1');
		leftArmArray.push(3);
		rightArmArray.push(1);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 23) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri3');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko2');
		mouthArray.push('mu2');
		leftArmArray.push(2);
		rightArmArray.push(2);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 24) {
		headType = 'down';
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita2');
		eyesArray.push('sitayoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		mouthArray.push('wara1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	
	
	this.setTachieHead('' + headType + '_1');
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + headType + '_' + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + headType + '_' + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + headType + '_' + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	if(boobsTypeArray.length > 0) {
		this.setBoobsType(boobsTypeArray[Math.randomInt(boobsTypeArray.length)]);
	}
	if(leftArmArray.length > 0) {
		this.setTachieLeftArm(leftArmArray[Math.randomInt(leftArmArray.length)]);
	}
	if(rightArmArray.length > 0) {
		this.setTachieRightArm(rightArmArray[Math.randomInt(rightArmArray.length)]);
	}
	if(displayTachieHoppe) this.setTachieHoppe('' + headType + '_' + tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat('' + headType + '_' + tachieSweatName);

	this.setWardenMapPoseExtensions();
	
	//Lastly, Cleanup flags
	this.turnOffJustEscapedFlag();
	this.resetStandingStillCounter();
};

Game_Actor.prototype.setBedSleepingMapPose = function() {
	this.cleanUpLiquids();
	this.setAllowTachieUpdate(false);
	this.takeOffGlovesAndHat();
	this.setTachieBody(2);
	this.setWardenMapPose_Naked();
	this.emoteMapPose(true, false);
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.setCouchOnaniMapPose = function() {
	this.cleanUpLiquids();
	this.setAllowTachieUpdate(false);
	this.takeOffGlovesAndHat();
	this.takeOffPanties();
	//this.setTachieBody(2);
	this.setWardenMapPose_Naked();
	this.emoteMapPose(false, true);
	this.setAllowTachieUpdate(true);
};

/////////////////
//Turned on right after escaping, for tired mood emotes
Game_Actor.prototype.turnOnJustEscapedFlag = function() { this._justEscapedFlag = true; };
Game_Actor.prototype.turnOffJustEscapedFlag = function() { this._justEscapedFlag = false; };

///////////////////
//For bored mood emotes
Karryn.resetStandingStillCounter = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetStandingStillCounter();
};
Karryn.resetStandingStillStage = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetStandingStillStage();
};
Karryn.stoodStillForTooLong = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).stoodStillForTooLong();
};
Karryn.increaseStandingStillCounter = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).increaseStandingStillCounter();
};

//Also called in common event 3:Load Game
Game_Actor.prototype.resetStandingStillCounter = function() { 
	this._standingStillCounter = 0; 
};
//Also called in common event 3:Load Game
Game_Actor.prototype.resetStandingStillStage = function() {
	if(this._standingStillStage === 0) return;
	let needsToCallEmoteManager = false;
	if(this._standingStillStage > 0) {
		this.setKarrynWardenSprite();
		if(!this._emoteMasterManagerIsRunning) {
			needsToCallEmoteManager = true;
		}
	}
	this._standingStillStage = 0;
	if(needsToCallEmoteManager) {
		this.emoteMasterManager();
	}
};

Game_Actor.prototype.stoodStillForTooLong = function() { 
	return this._standingStillCounter > VAR_STOOD_STILL_FOR_TOO_LONG_NUM; 
};

Game_Actor.prototype.increaseStandingStillCounter = function() { 
	if(!$gameScreen.isMapMode() || !this.isWearingWardenClothing()) {
		this.resetStandingStillCounter();
		this.resetStandingStillStage();
		return;
	}
	this._standingStillCounter++; 
	if(this.stoodStillForTooLong() && !this._emoteMasterManagerIsRunning) {
		this.emoteMasterManager();
	}
};

Remtairy.KarrynEmote.Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
	Remtairy.KarrynEmote.Scene_Map_updateScene.call(this);
    if (!SceneManager.isSceneChanging()) {
       Karryn.increaseStandingStillCounter();
    }
};
