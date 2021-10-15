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
	else if($gameParty.isInStripperBattle) {
		this.emoteMasterManager_StripperBattle();
		return;
	}
	
	if(this._emoteMasterManagerIsRunning) return;
	this._emoteMasterManagerIsRunning = true;
	let pose = this.poseName;
	if(this.isInMapPose() || this.isInWaitressServingPose())
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
		this.emoteSlimePiledriverPose();
	else if(pose == POSE_WEREWOLF_BACK)
		this.emoteWerewolfBackPose();
	else if(pose == POSE_YETI_PAIZURI)
		this.emoteYetiPaizuriPose();	
	else if(pose == POSE_YETI_CARRY)
		this.emoteYetiCarryPose();
		
	else if(pose == POSE_WAITRESS_SEX)
		this.emoteWaitressSexPose();
	else if(pose == POSE_RECEPTIONIST)
		this.emoteReceptionistPose();
	
	
	else if(pose == POSE_DEFEATED_LEVEL1) 
		this.emoteDefeatedLevelOnePose(false);
	else if(pose == POSE_DEFEATED_LEVEL2) 
		this.emoteDefeatedLevelTwoPose();
	else if(pose == POSE_DEFEATED_LEVEL3) 
		this.emoteDefeatedLevelThreePose();
	else if(pose == POSE_DEFEATED_LEVEL4) 
		this.emoteDefeatedLevelFourPose();
	else if(pose == POSE_DEFEATED_LEVEL5) 
		this.emoteDefeatedLevelFivePose();
	else if(pose == POSE_DEFEATED_GUARD) 
		this.emoteDefeatedGuardPose();
	
	else if(pose == POSE_MASTURBATE_INBATTLE) 
		this.emoteMasturbationInBattlePose();
	
	//this.setCacheChanged();
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
	
	//this.setCacheChanged();
	this._emoteMasterManagerForGloryBattleIsRunning = false;
};

Game_Actor.prototype.emoteMasterManager_StripperBattle = function() {
	if(this._emoteMasterManagerForStripperBattleIsRunning) return;
	this._emoteMasterManagerForStripperBattleIsRunning = true;
	let pose = this.poseName;
	
	if(pose == POSE_STRIPPER_INTERMISSION)
		this.emoteStripperIntermissionPose();
	else if(pose == POSE_STRIPPER_MOUTH) 
		this.emoteStripperMouthPose();
	else if(pose == POSE_STRIPPER_BOOBS) 
		this.emoteStripperBoobsPose();
	else if(pose == POSE_STRIPPER_PUSSY) 
		this.emoteStripperPussyPose();
	else if(pose == POSE_STRIPPER_BUTT) 
		this.emoteStripperButtPose();
	else if(pose == POSE_STRIPPER_VIP) 
		this.emoteStripperVIPPose();
	
	//this.setCacheChanged();
	this._emoteMasterManagerForStripperBattleIsRunning = false;
};

/////////////////
// Emote Attack Pose
/////////////////
Game_Actor.prototype.emoteAttackPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Kick Pose
/////////////////
Game_Actor.prototype.emoteKickPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Defend Pose
/////////////////
Game_Actor.prototype.emoteDefendPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Evade Pose
/////////////////
Game_Actor.prototype.emoteEvadePose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Standby Pose
/////////////////
Game_Actor.prototype.emoteStandbyPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isHorny = this.isHorny;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let usingCounterStance = this.isStateAffected(STATE_COUNTER_STANCE_ID);
	let usingFocus = this.isStateAffected(STATE_FOCUS_ID);
	let usingEyeOfTheMind = this.isStateAffected(STATE_EYE_OF_THE_MIND_ID);
	let usingOpenPleasure = this.isStateAffected(STATE_PLEASURE_STANCE_ID);
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
		if(isConfident) {
			this.setTachieFrontA('offbalanced_confident');
		}
		else {
			this.setTachieFrontA('offbalanced');
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
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Unarmed Pose
/////////////////
Game_Actor.prototype.emoteUnarmedPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let isHorny = this.isHorny;
	let usingOpenPleasure = this.isStateAffected(STATE_PLEASURE_STANCE_ID);
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
		this.setTachieFrontA('offbalanced');
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Down Stamina Pose 
/////////////////
Game_Actor.prototype.emoteDownStaminaPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Down Falldown Pose 
/////////////////
Game_Actor.prototype.emoteDownFalldownPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
		eyesArray.push('uru2');
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Standing Handjob Human Pose
/////////////////
Game_Actor.prototype.emoteStandingHandjobPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHandjobIsToRight = this._lastHandUsedForHandjob === RIGHT_HAND_ID;
	let lastHandjobIsToLeft = this._lastHandUsedForHandjob === LEFT_HAND_ID;
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let enemyCummingFromLeftHJ = $gameTroop._lastEnemySlotToCum === LEFT_HAND_ID;
	let enemyCummingFromRightHJ = $gameTroop._lastEnemySlotToCum === RIGHT_HAND_ID;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieRightArm('hj_naked');
		if(hasLeftHandjob)
			this.setTachieLeftArm('hj_naked');
		else 
			this.setTachieLeftArm('normal_naked');
	}
	else {
		this.setTachieRightArm('hj');
		if(hasLeftHandjob)
			this.setTachieLeftArm('hj');
		else 
			this.setTachieLeftArm('normal');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3)
			faceArray.push(15);
		else if(orgasmlvl2)
			faceArray.push(10);
		else
			faceArray.push(5);
	}
	else if(enemyCummingFromLeftHJ) {
		if(bukkakelvl3)
			faceArray.push(14);
		if(bukkakelvl2)
			faceArray.push(9);
		else
			faceArray.push(4);
	}
	else if(enemyCummingFromRightHJ) {
		if(bukkakelvl3)
			faceArray.push(13);
		if(bukkakelvl2)
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3)
			faceArray.push(13);
		if(bukkakelvl2)
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(justGotHarassed) {
		if(generallvl3)
			faceArray.push(13);
		if(generallvl2)
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(lastHitHandjob) {
		if(lastHandjobIsToLeft) {
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
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		mouthArray.push('wara1');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		mouthArray.push('ahe2');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko2');
		mouthArray.push('ahe2');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ho1');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
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
	
	this.setAllowTachieEmoteUpdate(true);
};

Game_Actor.prototype.emoteKneelingBlowjobPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let lastHitKarrynBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB);
	let lastHitEnemyBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let enemyCummingFromMouth = $gameTroop._lastEnemySlotToCum === MOUTH_ID;
	let enemyCummingFromLeftHJ = $gameTroop._lastEnemySlotToCum === LEFT_HAND_ID;

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
		if(lastHitKarrynBlowjob) {
			this.setTachieRightArm('hj_naked');
			this.setMaxTachieSemenRightArmId(0);
		}
		else if(lastHitEnemyBlowjob) {
			this.setTachieRightArm('normal_naked');
			this.setMaxTachieSemenRightArmId(1);
		}
	}
	else {
		if(lastHitKarrynBlowjob) {
			this.setTachieRightArm('hj');
			this.setMaxTachieSemenRightArmId(0);
		}
		else if(lastHitEnemyBlowjob) {
			this.setTachieRightArm('normal');
			this.setMaxTachieSemenRightArmId(1);
		}
	}
	
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3)
			faceArray.push(15);
		else if(orgasmlvl2)
			faceArray.push(10);
		else
			faceArray.push(5);
	}
	else if(enemyCummingFromMouth || karrynSwallowingCum) {
		if(swallowlvl3)
			faceArray.push(13);
		if(swallowlvl2)
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(enemyCummingFromLeftHJ) {
		if(bukkakelvl3)
			faceArray.push(14);
		if(bukkakelvl2)
			faceArray.push(9);
		else
			faceArray.push(4);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3)
			faceArray.push(13);
		if(bukkakelvl2)
			faceArray.push(8);
		else
			faceArray.push(3);
	}
	else if(lastHitHandjob) {
		if(generallvl3)
			faceArray.push(12);
		else if(generallvl2)
			faceArray.push(7);
		else
			faceArray.push(2);
	}
	else if(justGotHarassed) {
		if(generallvl3)
			faceArray.push(13);
		if(generallvl2)
			faceArray.push(8);
		else
			faceArray.push(3);
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
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ue3');
		eyesArray.push('toji1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('ue1');
		eyesArray.push('ue2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita3');
		eyesArray.push('ue3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('uruue1');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('sita3');
		eyesArray.push('ue3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('uruue1');
		eyesArray.push('uruue2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('ue1');
		eyesArray.push('ue2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('uruue1');
		eyesArray.push('uruue2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartue1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('urusita2');
		eyesArray.push('uruue2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartue1');
		eyesArray.push('heartue2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('ue3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('uruue1');
		eyesArray.push('uruue2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartue1');
		eyesArray.push('heartue2');
		eyesArray.push('heartahe1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Thug Gangbang Pose
/////////////////
Game_Actor.prototype.emoteThugGangbangPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let enemyCummingFromMouth = $gameTroop._lastEnemySlotToCum === MOUTH_ID;
	let enemyCummingFromLeftHJ = $gameTroop._lastEnemySlotToCum === LEFT_HAND_ID;
	let enemyCummingFromBoobs = $gameTroop._lastEnemySlotToCum === BOOBS_ID;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
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
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(30);
		else if(orgasmlvl2) 
			faceArray.push(20);
		else
			faceArray.push(10);
	}
	else if(karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(28);
		else if(swallowlvl2) 
			faceArray.push(18);
		else
			faceArray.push(8);
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) 
			faceArray.push(26);
		else if(pussyCreampielvl2) 
			faceArray.push(16);
		else
			faceArray.push(6);
	}
	else if(enemyCummingFromBoobs) {
		if(bukkakelvl3) 
			faceArray.push(26);
		else if(bukkakelvl2) 
			faceArray.push(16);
		else
			faceArray.push(6);
	}
	else if(enemyCummingFromLeftHJ) {
		if(bukkakelvl3) 
			faceArray.push(27);
		else if(bukkakelvl2) 
			faceArray.push(17);
		else
			faceArray.push(7);
	}
	else if(enemyCummingFromMouth) {
		if(bukkakelvl3) 
			faceArray.push(28);
		else if(bukkakelvl2) 
			faceArray.push(18);
		else
			faceArray.push(8);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) 
			faceArray.push(22);
		else if(bukkakelvl2) 
			faceArray.push(12);
		else
			faceArray.push(2);
	}
	else if(lastHitPussySex) {
		if(generallvl3) 
			faceArray.push(21);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(1);
	}
	else if(lastHitTittyFuck) {
		if(generallvl3) 
			faceArray.push(23);
		else if(generallvl2) 
			faceArray.push(13);
		else
			faceArray.push(3);
	}
	else if(lastHitHandjob) {
		if(generallvl3) 
			faceArray.push(24);
		else if(generallvl2) 
			faceArray.push(14);
		else
			faceArray.push(4);
	}
	else if(lastHitBlowjob) {
		if(generallvl3) 
			faceArray.push(29);
		else if(generallvl2) 
			faceArray.push(19);
		else
			faceArray.push(9);
	}
	else if(justGotHarassed) {
		if(generallvl3) 
			faceArray.push(22);
		else if(generallvl2) 
			faceArray.push(12);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) 
			faceArray.push(21);
		else if(generallvl2) 
			faceArray.push(11);
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
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		if(!givingBJ) {
			mouthArray.push('ahe1');
			mouthArray.push('ku1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left1');
		eyesArray.push('left2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft2');
		if(!givingBJ) {
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight2');
		if(!givingBJ) {
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('chu1');
			mouthArray.push('wa1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('nico2');
			mouthArray.push('ho2');
			mouthArray.push('chu1');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('nico1');
			mouthArray.push('wa2');
			mouthArray.push('chu1');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('nico1');
			mouthArray.push('wa2');
			mouthArray.push('chu1');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('nico1');
			mouthArray.push('wa2');
			mouthArray.push('chu1');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
			mouthArray.push('chu2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft2');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
			mouthArray.push('chu2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
			mouthArray.push('chu2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ku3');
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('chu2');
			mouthArray.push('pero1');
			mouthArray.push('ho1');
			mouthArray.push('ahe5');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		if(!givingBJ) {
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('heartsita2');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('pero1');
			mouthArray.push('chu2');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('uruleft1');
		eyesArray.push('heartleft2');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('pero1');
			mouthArray.push('chu2');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('ururight1');
		eyesArray.push('heartright2');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('pero1');
			mouthArray.push('chu2');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita1');
		eyesArray.push('heartsita2');
		if(!givingBJ) {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe4');
			mouthArray.push('ahe5');
			mouthArray.push('ahe6');
			mouthArray.push('nico3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft1');
		eyesArray.push('heartleft2');
		if(!givingBJ) {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe4');
			mouthArray.push('ahe5');
			mouthArray.push('ahe6');
			mouthArray.push('nico3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		eyesArray.push('heartright2');
		if(!givingBJ) {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe4');
			mouthArray.push('ahe5');
			mouthArray.push('ahe6');
			mouthArray.push('nico3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		eyesArray.push('heartright1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita1');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ku3');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe4');
			mouthArray.push('ahe5');
			mouthArray.push('ahe6');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	if(this.tachieHoppe && this.tachieMouth.includes('fera'))
		this.setTachieHoppe('fera_1');

	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Goblin Cunnilingus Pose
/////////////////
Game_Actor.prototype.emoteGoblinCunnilingusPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	let orgasmFromPaizuri = this._gotOrgasmFromSkillType === JUST_SKILLTYPE_ENEMY_TITTYFUCK || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_KARRYN_TITTYFUCK;
	
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
		if(orgasmFromPaizuri) {
			if(bukkakelvl3) 
				faceArray.push(17);
			else if(bukkakelvl2) 
				faceArray.push(10);
			else
				faceArray.push(3);
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(17);
			else if(orgasmlvl2) 
				faceArray.push(10);
			else
				faceArray.push(3);
		}
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
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
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
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita2');
		eyesArray.push('sita1');
		eyesArray.push('urusita2');
		eyesArray.push('urusita1');
		eyesArray.push('heartsita1');
		mouthArray.push('nico1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita2');
		eyesArray.push('sita1');
		eyesArray.push('urusita2');
		eyesArray.push('urusita1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico2');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		eyesArray.push('heartmae2');
		eyesArray.push('urumae1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Guard Gangbang Pose
/////////////////
Game_Actor.prototype.emoteGuardGangbangPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
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
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	
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
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();

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
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(12);
			else if(bukkakelvl2) 
				faceArray.push(7);
			else
				faceArray.push(2);
		}
		else if(lastHitPussySex || lastHitAnalSex) {
			if(generallvl3) 
				faceArray.push(12);
			else if(generallvl2) 
				faceArray.push(7);
			else
				faceArray.push(2);
		}
		else if(justGotHarassed) {
			if(generallvl3) 
				faceArray.push(12);
			else if(generallvl2) 
				faceArray.push(7);
			else
				faceArray.push(2);
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
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) 
			faceArray.push(12);
		else if(bukkakelvl2) 
			faceArray.push(7);
		else
			faceArray.push(2);
	}
	else if(lastHitPussySex) {
		if(generallvl3) 
			faceArray.push(11);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(1);
	}
	else if(lastHitAnalSex) {
		if(generallvl3) 
			faceArray.push(12);
		else if(generallvl2) 
			faceArray.push(7);
		else
			faceArray.push(2);
	}
	else if(justGotHarassed) {
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
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		if(givingBJ) {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		eyesArray.push('uruyoko2');
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
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
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
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ku2');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		eyesArray.push('ahe1');
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
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('ahe1');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
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
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('wa1');
			mouthArray.push('ahe3');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('toji3');
		eyesArray.push('ahe1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('heartahe1');
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
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
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
	
	if(this.tachieMouth.includes('fera') && this.tachieHoppe === '1')
		this.setTachieHoppe('fera_1');
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Karryn Cowgirl Pose
/////////////////
Game_Actor.prototype.emoteKarrynCowgirlPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let ranNum = Math.randomInt(2);
	let bodyIsClose = ranNum === 1;
	let bodyIsFar = ranNum === 0;
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingPaizuri = this.isBodySlotPenis(BOOBS_ID);
	let justGotClitToyPlay = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_CLIT)
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	
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
	
	
	let enemyBodyName = 'human_normal';
	if(this._cockPussyTarget) {
		let enemyCock = this._cockPussyTarget.enemyCock();
		if(this._cockPussyTarget.isNerdType) {
			if(enemyCock.includes('pale'))
				enemyBodyName = 'human_fat_pale';
			else if(enemyCock.includes('black'))
				enemyBodyName = 'human_fat_black';
			else
				enemyBodyName = 'human_fat_normal';
		}
		else if(enemyCock.includes('human')) {
			if(enemyCock.includes('pale'))
				enemyBodyName = 'human_pale';
			else if(enemyCock.includes('black'))
				enemyBodyName = 'human_black';
			else
				enemyBodyName = 'human_normal';
		}
		else if(this._cockPussyTarget.isGoblinType) {
			if(enemyCock.includes('dark'))
				enemyBodyName = 'goblin_dark';
			else
				enemyBodyName = 'goblin_normal';
		}
		else if(this._cockPussyTarget.isOrcType) {
			if(enemyCock.includes('dark'))
				enemyBodyName = 'orc_dark';
			else
				enemyBodyName = 'orc_normal';
		}
		else if(this._cockPussyTarget.isLizardmanType) {
			if(enemyCock.includes('dark'))
				enemyBodyName = 'lizardman_dark';
			else
				enemyBodyName = 'lizardman_normal';
		}
		else
			enemyBodyName = 'human_normal';
		
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
	
	let tachieSemenCockName = '';
	if(bodyIsClose) {
		if(this.tachieLegs.includes('far')) 
			AudioManager.playSe({name:'+Sex02_Close', pan:0, pitch:65, volume:90});
		
		this.setTachieLegs('close');
		this.setTachiePubicExtension('close_');
		this.setTachieSemenBellyExtension('close_');
		this.setTachieSemenCrotchExtension('close_');
		tachieSemenCockName = 'close_';
	}
	else if(bodyIsFar) {
		if(this.tachieLegs.includes('close')) 
			AudioManager.playSe({name:'+Sex03_Far', pan:0, pitch:65, volume:90});
		
		this.setTachieLegs('far');
		this.setTachiePubicExtension('far_');
		this.setTachieSemenBellyExtension('far_');
		this.setTachieSemenCrotchExtension('far_');
		tachieSemenCockName = 'far_';
	}
	
	if(this._cockPussyTarget) {
		if(this._cockPussyTarget.isGoblinType) {
			tachieSemenCockName += 'goblin_';
		}
		else if(this._cockPussyTarget.isOrcType) {
			tachieSemenCockName += 'fat_';
		}
		else if(this._cockPussyTarget.isLizardmanType) {
			tachieSemenCockName += 'human_';
		}
		else if(this._cockPussyTarget.isNerdType) {
			tachieSemenCockName += 'fat_';
		}
		else {
			tachieSemenCockName += 'human_';
		}
		
		this.setTachieSemenCockPussyExtension(tachieSemenCockName);
		this.setMaxTachieSemenCockPussyId(1);
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(22);
			else if(swallowlvl2) 
				faceArray.push(14);
			else
				faceArray.push(6);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(24);
			else if(orgasmlvl2) 
				faceArray.push(16);
			else
				faceArray.push(8);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(24);
			else if(pussyCreampielvl2) 
				faceArray.push(16);
			else
				faceArray.push(8);
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
	//not fera
	else {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(23);
			else if(orgasmlvl2) 
				faceArray.push(15);
			else
				faceArray.push(7);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(21);
			else if(pussyCreampielvl2) 
				faceArray.push(13);
			else
				faceArray.push(5);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(21);
			else if(bukkakelvl2) 
				faceArray.push(13);
			else
				faceArray.push(5);
		}
		else if(lastHitPussySex) {
			if(generallvl3) 
				faceArray.push(17);
			else if(generallvl2) 
				faceArray.push(9);
			else
				faceArray.push(1);
		}
		else if(lastHitTittyFuck) {
			if(generallvl3) 
				faceArray.push(19);
			else if(generallvl2) 
				faceArray.push(11);
			else
				faceArray.push(3);
		}
		else if(justGotClitToyPlay) {
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
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		if(isAroused) this.setTachieHoppe('fera_1');
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('sita3');
		eyesArray.push('sita2');
		mouthArray.push('ho3');
		mouthArray.push('nico3');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita3');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('sita3');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('sita3');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('nico3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		if(isAroused) this.setTachieHoppe('fera_1');
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('sita3');
		eyesArray.push('sita2');
		mouthArray.push('ho3');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita3');
		eyesArray.push('sita2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae3');
		eyesArray.push('urusita2');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('ho3');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae2');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ho2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae2');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('sita2');
		eyesArray.push('urumae2');
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe('fera_1');
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('pero2');
		mouthArray.push('pero1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe('fera_1');
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('urusita1');
		eyesArray.push('heartmae1');
		eyesArray.push('urumae1');
		eyesArray.push('heartsita1');
		eyesArray.push('ahe1');
		mouthArray.push('pero2');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('urusita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('heartsita1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		this.setTachieHoppe('fera_1');
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Reverse Cowgirl Pose
/////////////////
Game_Actor.prototype.emoteReverseCowgirlPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let ranNum = Math.randomInt(2);
	let buttIsClose = ranNum === 1;
	let buttIsFar = ranNum === 0;
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	let analEnemyCock = 'human_cut_normal';
	if(this._cockAnalTarget) {
		analEnemyCock = this._cockAnalTarget.enemyCock();
		
		let enemyBodyName = 'human_normal';
		
		if(this._cockAnalTarget.isNerdType) {
			if(analEnemyCock.includes('pale'))
				enemyBodyName = 'fat_pale';
			else if(analEnemyCock.includes('black'))
				enemyBodyName = 'fat_black';
			else
				enemyBodyName = 'fat_normal';
		}
		else if(analEnemyCock.includes('human')) {
			if(analEnemyCock.includes('pale'))
				enemyBodyName = 'human_pale';
			else if(analEnemyCock.includes('black'))
				enemyBodyName = 'human_black';
			else
				enemyBodyName = 'human_normal';
		}
		else if(this._cockAnalTarget.isGoblinType) {
			if(analEnemyCock.includes('dark'))
				enemyBodyName = 'goblin_dark';
			else
				enemyBodyName = 'goblin_normal';
		}
		else if(this._cockAnalTarget.isOrcType) {
			if(analEnemyCock.includes('dark'))
				enemyBodyName = 'orc_dark';
			else
				enemyBodyName = 'orc_normal';
		}
		else if(this._cockAnalTarget.isLizardmanType) {
			if(analEnemyCock.includes('dark'))
				enemyBodyName = 'lizardman_dark';
			else
				enemyBodyName = 'lizardman_normal';
		}
		else
			enemyBodyName = 'human_normal';
		
		
		this.setTachieBackA(enemyBodyName);
	}
	
	let semenCockAnalExtension = '';
	if(buttIsClose) {
		if(this.tachieButt === 'far') 
			AudioManager.playSe({name:'+Sex02_Close', pan:0, pitch:65, volume:90});
		this.setTachieButt('close');
		this.setTachieSemenButtExtension('close_');
		semenCockAnalExtension = 'close_';
		

		if(Karryn.isCensored())
			this.setTachieCockAnal('close_' + analEnemyCock + '_cen');
		else
			this.setTachieCockAnal('close_' + analEnemyCock);
		
	}
	else if(buttIsFar) {
		if(this.tachieButt === 'close') 
			AudioManager.playSe({name:'+Sex03_Far', pan:0, pitch:65, volume:90});
		
		this.setTachieButt('far');
		this.setTachieSemenButtExtension('far_');
		semenCockAnalExtension = 'far_';
		
		if(Karryn.isCensored())
			this.setTachieCockAnal('far_' + analEnemyCock + '_cen');
		else
			this.setTachieCockAnal('far_' + analEnemyCock);
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
	this.setMaxTachieSemenCockAnalId(1);
	
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
	
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Lizardman Cowgirl Pose
/////////////////
Game_Actor.prototype.emoteLizardmanCowgirlPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
		mouthArray.push('1');
		mouthArray.push('2');
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
		mouthArray.push('1');
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
		mouthArray.push('1');
		mouthArray.push('2');
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
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
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
		mouthArray.push('3');
		mouthArray.push('4');
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
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
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
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		mouthArray.push('5');
		mouthArray.push('6');
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
		mouthArray.push('4');
		mouthArray.push('5');
		mouthArray.push('6');
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
		mouthArray.push('1');
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		mouthArray.push('5');
		mouthArray.push('6');
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
	
	this.setAllowTachieEmoteUpdate(true);
};


/////////////////
// Emote Yeti Carry Pose
/////////////////
Game_Actor.prototype.emoteYetiCarryPose = function(setKissingOn, setKissingOff, karrynSkillUsage) {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	
	let isKissing = setKissingOn || (!setKissingOff && this.tachieFrontA == 'tongue'); 
	let lightKickCountered = this.isStateAffected(STATE_LIGHT_KICK_COUNTERED_ID);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();

	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(isKissing) {
		this.setTachieFrontA('tongue');
	}
	else {
		this.resetTachieFrontA();
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(isKissing) {
		if(justOrgasmed) {
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
	else {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(16);
			else if(orgasmlvl2)
				faceArray.push(10);
			else
				faceArray.push(4);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(15);
			else if(bukkakelvl2) 
				faceArray.push(9);
			else
				faceArray.push(3);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(15);
			else if(pussyCreampielvl2) 
				faceArray.push(9);
			else
				faceArray.push(3);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(15);
			else if(analCreampielvl2) 
				faceArray.push(9);
			else
				faceArray.push(3);
		}
		else if(lastHitAnalSex) {
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
		
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ahe2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('urusita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('urumae1');
		eyesArray.push('toji1');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('kiss1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('kiss1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('kiss1');
		mouthArray.push('kiss2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('kiss1');
		mouthArray.push('kiss2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('kiss1');
		mouthArray.push('kiss2');
		mouthArray.push('kiss3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		mouthArray.push('kiss1');
		mouthArray.push('kiss2');
		mouthArray.push('kiss3');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Orc Paizuri Pose
/////////////////
Game_Actor.prototype.emoteOrcPaizuriPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let hasCumInMouth = this._liquidSwallow > 0;
	
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let karrynHasJustGokkundState = this.isStateAffected(STATE_JUST_GOKKUND_ID);
	
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
			faceArray.push(10);
		else if(orgasmlvl3) 
			faceArray.push(20);
		else
			faceArray.push(30);
	}
	else if(givingBJ && karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(28);
		else if(swallowlvl2) 
			faceArray.push(18);
		else
			faceArray.push(8);
	}
	else if(karrynHasJustGokkundState) {
		if(swallowlvl3) 
			faceArray.push(29);
		else if(swallowlvl2) 
			faceArray.push(19);
		else
			faceArray.push(9);
	}
	else if(lastHitBlowjob && givingBJ) {
		if(generallvl3) 
			faceArray.push(27);
		else if(generallvl2) 
			faceArray.push(17);
		else
			faceArray.push(7);
	}
	else if(enemyCummingFromBoobs) {
		if(bukkakelvl3) 
			faceArray.push(22);
		else if(bukkakelvl2) 
			faceArray.push(12);
		else
			faceArray.push(2);
	}
	else if(enemyCummingFromRightHJ) {
		if(bukkakelvl3) 
			faceArray.push(24);
		else if(bukkakelvl2) 
			faceArray.push(14);
		else
			faceArray.push(4);
	}
	else if(enemyCummingFromLeftHJ) {
		if(bukkakelvl3) 
			faceArray.push(26);
		else if(bukkakelvl2) 
			faceArray.push(16);
		else
			faceArray.push(6);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) {
			faceArray.push(26);
			faceArray.push(24);
		}
		else if(bukkakelvl2) {
			faceArray.push(16);
			faceArray.push(14);
		}
		else {
			faceArray.push(6);
			faceArray.push(4);
		}
	}
	else if(lastHandjobIsToRight) {
		if(generallvl3) 
			faceArray.push(23);
		else if(generallvl2) 
			faceArray.push(13);
		else
			faceArray.push(3);
	}
	else if(lastHandjobIsToLeft) {
		if(generallvl3) 
			faceArray.push(25);
		else if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(5);
	}
	else if(lastHitTittyFuck) {
		if(generallvl3) 
			faceArray.push(21);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(1);
	}
	else {
		if(generallvl3) {
			faceArray.push(23);
			faceArray.push(25);
		}
		else if(generallvl2) {
			faceArray.push(13);
			faceArray.push(15);
		}
		else {
			faceArray.push(3);
			faceArray.push(5);
		}
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
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('mu1');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		if(!givingBJ) {
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('mu1');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		if(!givingBJ) {
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left1');
		eyesArray.push('left2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('mu1');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left2');
		eyesArray.push('left3');
		if(!givingBJ) {
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('urumae2');
		mouthArray.push('fera1');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		if(!givingBJ) {
			mouthArray.push('cum1');
		}
		else {
			mouthArray.push('fera1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae2');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		if(!givingBJ) {
			mouthArray.push('mu1');
			mouthArray.push('mu2');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		if(!givingBJ) {
			mouthArray.push('ahe1');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		if(!givingBJ) {
			mouthArray.push('mu1');
			mouthArray.push('mu2');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight2');
		if(!givingBJ) {
			mouthArray.push('ahe1');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		if(!givingBJ) {
			mouthArray.push('mu1');
			mouthArray.push('mu2');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('left2');
		eyesArray.push('left3');
		if(!givingBJ) {
			mouthArray.push('ahe1');
			mouthArray.push('wa2');
			mouthArray.push('ho2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe('fera_1');
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		if(!givingBJ) {
			mouthArray.push('cum2');
		}
		else {
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		if(!givingBJ) {
			mouthArray.push('pero1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('ururight2');
		if(!givingBJ) {
			mouthArray.push('pero1');
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		if(!givingBJ) {
			mouthArray.push('pero1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('uruleft2');
		if(!givingBJ) {
			mouthArray.push('pero1');
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft2');
		if(!givingBJ) {
			mouthArray.push('pero1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe('fera_1');
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe('fera_1');
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		if(!givingBJ) {
			mouthArray.push('cum3');
		}
		else {
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		if(!givingBJ) {
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('nico3');
			mouthArray.push('pero1');
		}
		else {
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
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

	if(this.tachieHoppe && this.tachieMouth.includes('fera'))
		this.setTachieHoppe('fera_1');
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Yeti Paizuri Pose
/////////////////
Game_Actor.prototype.emoteYetiPaizuriPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);

	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let lastHitSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY);
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let holeInserted = this.isBodySlotPenis(ANAL_ID) || this.isBodySlotPenis(PUSSY_ID) || this.isBodySlotToy(PUSSY_ID) || this.isBodySlotToy(ANAL_ID);
	let enemyCummingFromBoobs = $gameTroop._lastEnemySlotToCum === BOOBS_ID;
	
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
	
	if(!this.isWearingGlovesAndHat()) {
		this.resetTachieHat();
		this.setTachieBody('naked_1');
	}
	else {
		this.setTachieBody('1');
	}
	
	let tachieHeadType = 'far';
	if(givingBJ) {
		if(this.isWearingGlovesAndHat()) {
			this.setTachieHat('close_1');
		}
		
		this.setTachieHead('close');
		this.setTachieSemenFaceExtension('close_');
		
		tachieHeadType = 'close';
	}
	else {
		if(this.isWearingGlovesAndHat()) {
			this.setTachieHat('far_1');
		}
		
		this.setTachieHead('far');
		this.setTachieSemenFaceExtension('far_');
	}
	
	this.setMaxTachieSemenFaceId(1);
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(26);
			else if(swallowlvl2) 
				faceArray.push(17);
			else
				faceArray.push(8);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(27);
			else if(orgasmlvl2) 
				faceArray.push(18);
			else
				faceArray.push(9);
		}
		else if(lastHitSex) {
			if(generallvl3) 
				faceArray.push(25);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(7);
		}
		else {
			if(generallvl3) 
				faceArray.push(24);
			else if(generallvl2) 
				faceArray.push(15);
			else
				faceArray.push(6);
		}
	}
	else if(karrynGotBukkaked) {
		if(enemyCummingFromBoobs) {
			if(bukkakelvl3) 
				faceArray.push(21);
			else if(bukkakelvl2) 
				faceArray.push(12);
			else
				faceArray.push(3);
		}
		else {
			if(bukkakelvl3) 
				faceArray.push(22);
			else if(bukkakelvl2) 
				faceArray.push(13);
			else
				faceArray.push(4);
		}
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) 
			faceArray.push(22);
		else if(pussyCreampielvl2) 
			faceArray.push(13);
		else
			faceArray.push(4);
	}
	else if(justGotAnalCreampie) {
		if(analCreampielvl3) 
			faceArray.push(22);
		else if(analCreampielvl2) 
			faceArray.push(13);
		else
			faceArray.push(4);
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(23);
		else if(orgasmlvl2) 
			faceArray.push(14);
		else
			faceArray.push(5);
	}
	else if(lastHitSex) {
		if(generallvl3) 
			faceArray.push(20);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) 
			faceArray.push(19);
		else if(generallvl2) 
			faceArray.push(10);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let tachieHoppeName = false;
	let tachieSweatName = false;
	
	if(faceId === 1) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 6) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 7) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 8) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera1');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 9) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName = '1';
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fu1');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('fu1');
		mouthArray.push('ku2');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		tachieHoppeName = '1';
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		tachieHoppeName = '1';
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		if(isAroused) tachieHoppeName = '1';
		if(Math.random() < 0.5) tachieSweatName = '1';
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		tachieHoppeName = '1';
		if(Math.random() < 0.5) tachieSweatName = '1';
	}
	else if(faceId === 23) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		tachieHoppeName = '1';
		if(Math.random() < 0.5) tachieSweatName = '1';
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 25) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 26) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('fera5');
		tachieHoppeName = '1';
		if(Math.random() < 0.5) tachieSweatName = '1';
	}
	else if(faceId === 27) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		tachieHoppeName = '1';
		if(Math.random() < 0.5) tachieSweatName = '1';
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + tachieHeadType + '_' + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + tachieHeadType + '_' + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + tachieHeadType + '_' + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	
	if(tachieHoppeName) this.setTachieHoppe('' + tachieHeadType + '_' + tachieHoppeName);
	if(tachieSweatName) this.setTachieSweat('' + tachieHeadType + '_' + tachieSweatName);	

	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Laying Paizuri Pose
/////////////////
Game_Actor.prototype.emoteLayingPaizuriPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingRightHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
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
	
	if(justOrgasmed) {
		if(givingBJ) {
			if(orgasmlvl3) 
				faceArray.push(30);
			else if(orgasmlvl2) 
				faceArray.push(20);
			else
				faceArray.push(10);
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(27);
			else if(orgasmlvl2) 
				faceArray.push(17);
			else
				faceArray.push(7);
		}
	}
	else if(givingBJ && karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(29);
		else if(swallowlvl2) 
			faceArray.push(19);
		else
			faceArray.push(9);
	}
	else if(lastHitBlowjob && givingBJ) {
		if(generallvl3) 
			faceArray.push(28);
		else if(generallvl2) 
			faceArray.push(18);
		else
			faceArray.push(8);
	}
	else if(justGotPussyCreampie || justGotAnalCreampie) {
		if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(26);
			else if(pussyCreampielvl2) 
				faceArray.push(16);
			else
				faceArray.push(6);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(26);
			else if(analCreampielvl2) 
				faceArray.push(16);
			else
				faceArray.push(6);
		}
	}
	else if(karrynGotBukkaked) {
		if(enemyCummingFromRightHJ) {
			if(bukkakelvl3) 
				faceArray.push(24);
			else if(bukkakelvl2) 
				faceArray.push(14);
			else
				faceArray.push(4);
		}
		else if(enemyCummingFromBoobs) {
			if(bukkakelvl3) 
				faceArray.push(22);
			else if(bukkakelvl2) 
				faceArray.push(12);
			else
				faceArray.push(2);
		}
		else {
			if(givingBJ) {
				if(bukkakelvl3) 
				faceArray.push(29);
				else if(bukkakelvl2) 
					faceArray.push(19);
				else
					faceArray.push(9);
			}
			else {
				if(bukkakelvl3) 
					faceArray.push(22);
				else if(bukkakelvl2) 
					faceArray.push(12);
				else
					faceArray.push(2);
			}
		}
	}
	else if(lastHitHandjob) {
		if(generallvl3) 
			faceArray.push(23);
		else if(generallvl2) 
			faceArray.push(13);
		else
			faceArray.push(3);
	}
	else if(lastHitTittyFuck) {
		if(generallvl3) 
			faceArray.push(21);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(1);
	}
	else if(lastHitSex) {
		if(generallvl3) 
			faceArray.push(25);
		else if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(5);
	}
	else if(justGotHarassed) {
		if(givingBJ) {
			if(generallvl3) 
			faceArray.push(29);
			else if(generallvl2) 
				faceArray.push(19);
			else
				faceArray.push(9);
		}
		else {
			if(generallvl3) 
				faceArray.push(22);
			else if(generallvl2) 
				faceArray.push(12);
			else
				faceArray.push(2);
		}
	}
	else {
		if(generallvl3) {
			faceArray.push(21);
		}
		else if(generallvl2) {
			faceArray.push(11);
		}
		else {
			faceArray.push(1);
		}
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
		eyesArray.push('sita2');
		if(givingBJ) {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		if(givingBJ) {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		if(givingBJ) {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('wa1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight2');
		if(givingBJ) {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left1');
		eyesArray.push('left2');
		if(givingBJ) {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft2');
		if(givingBJ) {
			mouthArray.push('fera1');
		}
		else {
			mouthArray.push('ku1');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else {
			mouthArray.push('ku2');
			mouthArray.push('ho3');
			mouthArray.push('chu1');
			mouthArray.push('ahe3');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('chu1');
			mouthArray.push('nico1');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('chu2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho3');
			mouthArray.push('chu1');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
		}
		else {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('ahe1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('ahe1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('nico4');
			mouthArray.push('chu1');
			mouthArray.push('chu2');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('nico4');
			mouthArray.push('chu2');
			mouthArray.push('ahe5');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('nico4');
			mouthArray.push('chu1');
			mouthArray.push('chu2');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('nico4');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
		}
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft2');
		if(givingBJ) {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('nico4');
			mouthArray.push('chu1');
			mouthArray.push('chu2');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft2');
		if(givingBJ) {
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		else {
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('nico4');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('ahe5');
		}
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		mouthArray.push('nico2');
		mouthArray.push('nico4');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		mouthArray.push('ahe6');
		if(isAroused) this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
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
	
	if(this.tachieHoppe && this.tachieMouth.includes('fera'))
		this.setTachieHoppe('fera_1');
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Footjob Pose
/////////////////
Game_Actor.prototype.emoteFootjobPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	let enemyCummingFromLeftHJ = $gameTroop._lastEnemySlotToCum === LEFT_HAND_ID;
	let enemyCummingFromFeet = $gameTroop._lastEnemySlotToCum === FEET_ID;
	
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
			this.setTachieHat('far_1');
		this.setTachieHead('far_1');
		this.setTachieSemenFaceExtension('far_');
	}
	else {
		if(this.isWearingGlovesAndHat())
			this.setTachieHat('close_1');
		this.setTachieHead('close_1');
		this.setTachieSemenFaceExtension('close_');
	}
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
		if(givingHJ)
			this.setTachieLeftArm('hj_naked');
		else
			this.setTachieLeftArm('normal_naked');
	}
	else {
		this.setTachieBody('1');
		if(givingHJ)
			this.setTachieLeftArm('hj');
		else
			this.setTachieLeftArm('normal');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(27);
			else if(swallowlvl2) 
				faceArray.push(17);
			else
				faceArray.push(7);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(30);
			else if(orgasmlvl2) 
				faceArray.push(20);
			else
				faceArray.push(10);
		}
		else if(enemyCummingFromLeftHJ || enemyCummingFromFeet || karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(29);
			else if(orgasmlvl2) 
				faceArray.push(19);
			else
				faceArray.push(9);
		}
		else if(lastHitBlowjob) {
			if(generallvl3) 
				faceArray.push(26);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(6);
		}
		else if(givingHJ || justGotHarassed) {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(18);
			else
				faceArray.push(8);
		}
		else {
			if(generallvl3) 
				faceArray.push(26);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(6);
		}
	}
	//no bj
	else {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(25);
			else if(orgasmlvl2) 
				faceArray.push(15);
			else
				faceArray.push(5);
		}
		else if(enemyCummingFromLeftHJ) {
			if(bukkakelvl3) 
				faceArray.push(24);
			else if(orgasmlvl2) 
				faceArray.push(14);
			else
				faceArray.push(4);
		}
		else if(enemyCummingFromFeet || karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(22);
			else if(orgasmlvl2) 
				faceArray.push(12);
			else
				faceArray.push(2);
		}
		else if(lastHitHandjob) {
			if(generallvl3) 
				faceArray.push(23);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(3);
		}
		else {
			if(generallvl3) 
				faceArray.push(21);
			else if(generallvl2) 
				faceArray.push(11);
			else
				faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	let tachieHeadName = 'close_';
	if(this.tachieHead.includes('far')) tachieHeadName = 'far_';
	let tachieHoppeName = '' + tachieHeadName;
	let tachieSweatName = '' + tachieHeadName;
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('urumae1');
		mouthArray.push('fera1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 8) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('fera1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 10) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 23) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 25) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('heartahe1');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 26) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 27) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 28) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 29) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 30) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('ahe1');
		eyesArray.push('heartahe1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + tachieHeadName + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + tachieHeadName + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		this.setTachieMouth('' + tachieHeadName + mouthArray[Math.randomInt(mouthArray.length)]);
	}
	
	if(displayTachieHoppe) this.setTachieHoppe(tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat(tachieSweatName);
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Rimjob Pose
/////////////////
Game_Actor.prototype.emoteRimjobPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let lastHitRimjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SADISM) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_MASOCHISM);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);

	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;

	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();

	if(justOrgasmed) {
		if(orgasmlvl3) {
			faceArray.push(15);
		}
		else if(orgasmlvl2) {
			faceArray.push(10);
		}
		else {
			faceArray.push(5);
		}
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) {
			faceArray.push(14);
		}
		else if(pussyCreampielvl2) {
			faceArray.push(9);
		}
		else {
			faceArray.push(4);
		}
	}
	else if(justGotAnalCreampie) {
		if(analCreampielvl3) {
			faceArray.push(14);
		}
		else if(analCreampielvl2) {
			faceArray.push(9);
		}
		else {
			faceArray.push(4);
		}
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) {
			faceArray.push(12);
		}
		else if(bukkakelvl2) {
			faceArray.push(7);
		}
		else {
			faceArray.push(2);
		}
	}
	else if(lastHitRimjob) {
		if(generallvl3) {
			faceArray.push(11);
		}
		else if(generallvl2) {
			faceArray.push(6);
		}
		else {
			faceArray.push(1);
		}
	}
	else if(lastHitPussySex || lastHitAnalSex) {
		if(generallvl3) {
			faceArray.push(13);
		}
		else if(generallvl2) {
			faceArray.push(8);
		}
		else {
			faceArray.push(3);
		}
	}
	else if(justGotHarassed) {
		if(generallvl3) {
			faceArray.push(12);
		}
		else if(generallvl2) {
			faceArray.push(7);
		}
		else {
			faceArray.push(2);
		}
	}
	else {
		if(generallvl3) {
			faceArray.push(11);
		}
		else if(generallvl2) {
			faceArray.push(6);
		}
		else {
			faceArray.push(1);
		}
	}

	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('yodare1');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		mouthArray.push('yodare1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko2');
		mouthArray.push('yodare1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('yodare1');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		mouthArray.push('yodare1');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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

	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Kick Counter Pose
/////////////////
Game_Actor.prototype.emoteKickCounterPose = function(setKissingOn, setKissingOff, karrynSkillUsage) {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	let lastHitKiss = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_KISS) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_KISSING);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let isKissing = setKissingOn || (!setKissingOff && (this.tachieBody.includes('kiss') || this.tachieMouth.includes('kiss') || this.tachieBackA.includes('kiss'))); 
	let pussyTargetIsHuman = this._cockPussyTarget && !this._cockPussyTarget.isOrcType && !this._cockPussyTarget.isLizardmanType;
	let pussyTargetIsOrc = this._cockPussyTarget && this._cockPussyTarget.isOrcType;
	let pussyTargetIsLizardman = this._cockPussyTarget && this._cockPussyTarget.isLizardmanType;
	let isKissingHuman = isKissing && pussyTargetIsHuman; 
	let lightKickCountered = this.isStateAffected(STATE_LIGHT_KICK_COUNTERED_ID);
	let pussyTargetEnemyCock = false;
	if(this._cockPussyTarget) pussyTargetEnemyCock = this._cockPussyTarget.enemyCock();
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
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
			if(pussyTargetEnemyCock.includes('pale'))
				this.setTachieBackA('mouth_human_pale');
			else if(pussyTargetEnemyCock.includes('black'))
				this.setTachieBackA('mouth_human_black');
			else
				this.setTachieBackA('mouth_human_normal');
		}
		else if(pussyTargetIsOrc) {
			if(!setKissingOff && (setKissingOn || isKissing)) {
				if(pussyTargetEnemyCock.includes('dark'))
					this.setTachieBackA('head_orc_dark_kiss');
				else
					this.setTachieBackA('head_orc_normal_kiss');
			}
			else if(setKissingOff) {
				if(pussyTargetEnemyCock.includes('dark'))
					this.setTachieBackA('head_orc_dark');
				else
					this.setTachieBackA('head_orc_normal');
			}
			else {
				if(pussyTargetEnemyCock.includes('dark') && (!this.tachieBackA.includes('dark') || !this.tachieBackA.includes('orc')))
					this.setTachieBackA('head_orc_dark');
				else if(pussyTargetEnemyCock.includes('normal') && (!this.tachieBackA.includes('normal') || !this.tachieBackA.includes('orc')))
					this.setTachieBackA('head_orc_normal');
			}
		}
		else if(pussyTargetIsLizardman) {
			if(!setKissingOff && (setKissingOn || isKissing)) {
				if(pussyTargetEnemyCock.includes('dark'))
					this.setTachieBackA('head_lizardman_dark_kiss');
				else
					this.setTachieBackA('head_lizardman_normal_kiss');
			}
			else if(setKissingOff) {
				if(pussyTargetEnemyCock.includes('dark'))
					this.setTachieBackA('head_lizardman_dark');
				else
					this.setTachieBackA('head_lizardman_normal');
			}
			else {
				if(pussyTargetEnemyCock.includes('dark') && (!this.tachieBackA.includes('dark') || !this.tachieBackA.includes('lizardman')))
					this.setTachieBackA('head_lizardman_dark');
				else if(pussyTargetEnemyCock.includes('normal') && (!this.tachieBackA.includes('normal') || !this.tachieBackA.includes('lizardman')))
					this.setTachieBackA('head_lizardman_normal');
			}
		}
		
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieBody('normal_naked');
			this.resetTachieHat();
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
	
	
	if(this.tachieBody.includes('kiss')) {
		if(justOrgasmed) {
			if(justOrgasmed) {
				if(orgasmlvl3) 
					faceArray.push(31);
				else if(orgasmlvl2) 
					faceArray.push(27);
				else
					faceArray.push(23);
			}
		}
		else if(justGotPussyCreampie || justGotAnalCreampie) {
			if(justGotPussyCreampie) {
				if(pussyCreampielvl3) 
					faceArray.push(30);
				else if(pussyCreampielvl2) 
					faceArray.push(26);
				else
					faceArray.push(22);
			}
			else if(justGotAnalCreampie) {
				if(analCreampielvl3) 
					faceArray.push(30);
				else if(analCreampielvl2) 
					faceArray.push(26);
				else
					faceArray.push(22);
			} 
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(30);
			else if(bukkakelvl2) 
				faceArray.push(26);
			else
				faceArray.push(22);
		}
		else if(lastHitPussySex || lastHitKiss) {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(24);
			else
				faceArray.push(20);
		}
		else if(lastHitAnalSex || analInserted) {
			if(generallvl3) 
				faceArray.push(29);
			else if(generallvl2) 
				faceArray.push(25);
			else
				faceArray.push(21);
		}
		else if(justGotHarassed) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(26);
			else
				faceArray.push(22);
		}
		else {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(24);
			else
				faceArray.push(20);
		}
	}
	//not kiss body
	else {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(12);
			else if(orgasmlvl2) 
				faceArray.push(8);
			else
				faceArray.push(4);
		}
		else if(justGotPussyCreampie || justGotAnalCreampie) {
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
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(10);
			else if(bukkakelvl2) 
				faceArray.push(8);
			else
				faceArray.push(2);
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
		else if(justGotHarassed) {
			if(generallvl3) 
				faceArray.push(10);
			else if(generallvl2) 
				faceArray.push(8);
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
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko2');
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
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
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
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
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
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
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
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
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
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
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
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
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
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('kiss1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
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
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('kiss3');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 20) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico2');
		eyesArray.push('ue1');
		eyesArray.push('ue2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 23) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('ue1');
		eyesArray.push('ue2');
		eyesArray.push('uruue2');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('ue1');
		eyesArray.push('ue2');
		eyesArray.push('mae1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 25) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 26) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartue2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 27) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ue2');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('uruue2');
		eyesArray.push('urumae2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('ue1');
		eyesArray.push('ue2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('heartue1');
		eyesArray.push('heartue2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartue1');
		eyesArray.push('heartue2');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		if(Math.random() < 0.5) {
			tachieSweatName += '1';
			displayTachieSweat = true;
		}
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('uruue1');
		eyesArray.push('uruue2');
		eyesArray.push('heartue1');
		eyesArray.push('heartue2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
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
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Werewolf Back Pose
/////////////////
Game_Actor.prototype.emoteWerewolfBackPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;

	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);

	let lastHitSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);

	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let enemyCummingFromMouth = $gameTroop._lastEnemySlotToCum === MOUTH_ID;
	
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
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();

	if(justOrgasmed) {
		if(givingBJ) {
			if(orgasmlvl3) 
				faceArray.push(18);
			else if(orgasmlvl2) 
				faceArray.push(12);
			else
				faceArray.push(6);
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(15);
			else if(orgasmlvl2) 
				faceArray.push(9);
			else
				faceArray.push(3);
		}
	}
	else if(karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(17);
		else if(swallowlvl2) 
			faceArray.push(11);
		else
			faceArray.push(5);
	}
	else if(justGotPussyCreampie) {
		if(pussyCreampielvl3) 
			faceArray.push(14);
		else if(pussyCreampielvl2) 
			faceArray.push(8);
		else
			faceArray.push(2);
	}
	else if(justGotAnalCreampie) {
		if(analCreampielvl3) 
			faceArray.push(14);
		else if(analCreampielvl2) 
			faceArray.push(8);
		else
			faceArray.push(2);
	}
	else if(karrynGotBukkaked) {
		if(enemyCummingFromMouth) {
			if(bukkakelvl3) 
				faceArray.push(15);
			else if(bukkakelvl2) 
				faceArray.push(9);
			else
				faceArray.push(3);
		}
		else {
			if(bukkakelvl3) 
				faceArray.push(14);
			else if(bukkakelvl2) 
				faceArray.push(8);
			else
				faceArray.push(2);
		}
	}
	else if(lastHitBlowjob) {
		if(generallvl3) 
			faceArray.push(16);
		else if(generallvl2) 
			faceArray.push(10);
		else
			faceArray.push(4);
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
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ho1');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko3');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		if(!givingBJ) {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('chu1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		if(!givingBJ) {
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ho2');
			mouthArray.push('chu1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('yoko3');
		eyesArray.push('urumae2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('urumae3');
		eyesArray.push('urumae2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('urumae3');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('urumae2');
		if(!givingBJ) {
			mouthArray.push('chu1');
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('pero1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		if(!givingBJ) {
			mouthArray.push('chu1');
			mouthArray.push('ho2');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('heartmae1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('heartmae2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae3');
		eyesArray.push('urumae2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		eyesArray.push('urumae3');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	if(this.tachieMouth.includes('fera') && this.tachieHoppe === '1')
		this.setTachieHoppe('fera_1');
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Slime Anal Pose
/////////////////
Game_Actor.prototype.emoteSlimePiledriverPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);

	let slimeInPussyAlso = this.analSexPoseTarget() && this.analSexPoseTarget().isUsingBodySlotPenis(PUSSY_ID);
	let slimeInMouthAlso = this.analSexPoseTarget() && this.analSexPoseTarget().isUsingBodySlotPenis(MOUTH_ID);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let swallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);

	let slimeCameInsideAnal = this.analSexPoseTarget() && this.analSexPoseTarget()._slime_cameInsideAnal === true;
	let slimeCameInsidePussy = this.analSexPoseTarget() && this.analSexPoseTarget()._slime_cameInsidePussy === true;
	let slimeCameInsideMouth = this.analSexPoseTarget() && this.analSexPoseTarget()._slime_cameInsideMouth === true;
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3)
			faceArray.push(18);
		else if(orgasmlvl2)
			faceArray.push(12);
		else
			faceArray.push(6);
	}
	else if(swallowingCum) {
		if(swallowlvl3)
			faceArray.push(16);
		else if(swallowlvl2)
			faceArray.push(10);
		else
			faceArray.push(4);
	}
	else if(justGotPussyCreampie) {
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
	else if(karrynGotBukkaked) {
		if(bukkakelvl3)
			faceArray.push(14);
		else if(bukkakelvl2)
			faceArray.push(8);
		else
			faceArray.push(2);
	}
	else if(lastHitBlowjob) {
		if(generallvl3)
			faceArray.push(17);
		else if(generallvl2)
			faceArray.push(11);
		else
			faceArray.push(5);
	}
	else if(lastHitPussySex) {
		if(generallvl3)
			faceArray.push(15);
		else if(generallvl2)
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(lastHitAnalSex) {
		if(generallvl3)
			faceArray.push(13);
		else if(generallvl2)
			faceArray.push(7);
		else
			faceArray.push(1);
	}
	else if(justGotHarassed) {
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
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('wa1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ahe1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ku1');
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
		}
		else {
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		if(!givingBJ) {
			mouthArray.push('ku2');
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('mu1');
			mouthArray.push('mu2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('nico3');
			mouthArray.push('ho2');
			mouthArray.push('ahe2');
			mouthArray.push('mu1');
			mouthArray.push('mu2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		if(!givingBJ) {
			mouthArray.push('nico2');
			mouthArray.push('ho2');
			mouthArray.push('ku2');
			mouthArray.push('wa3');
			mouthArray.push('mu1');
			mouthArray.push('mu2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('ho3');
			mouthArray.push('wa1');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('nico2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		if(!givingBJ) {
			mouthArray.push('ho3');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('nico3');
			mouthArray.push('mu1');
			mouthArray.push('mu2');
			mouthArray.push('ho1');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico3');
			mouthArray.push('mu2');
			mouthArray.push('ho2');
			mouthArray.push('ahe2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		if(!givingBJ) {
			mouthArray.push('nico1');
			mouthArray.push('nico2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		if(!givingBJ) {
			mouthArray.push('ho1');
			mouthArray.push('ho2');
			mouthArray.push('ho3');
			mouthArray.push('wa3');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
			mouthArray.push('nico2');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		if(!givingBJ) {
			mouthArray.push('wa1');
			mouthArray.push('wa2');
			mouthArray.push('wa3');
			mouthArray.push('ahe1');
			mouthArray.push('ahe2');
			mouthArray.push('ahe3');
		}
		else {
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	if(this.tachieMouth.includes('fera') && this.tachieHoppe === '1')
		this.setTachieHoppe('fera_1');
	
	this.setAllowTachieEmoteUpdate(true);
};

/////////////////
// Emote Defeated Level One Pose
/////////////////
Game_Actor.prototype.emoteDefeatedLevelOnePose = function(justMouthInserted) { 
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID) && this._cockMouthTarget;
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let hadFirstKissWithPenisHere = givingBJ && this._firstKissWasPenis && this._recordBlowjobCount === 1 && this._recordBlowjobPeople === 1;
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let karrynJustGotBukkakedOnBoobs = this._lastAreaEjaculatedTo == CUM_BUKKAKE_BOOBS || this._lastAreaEjaculatedTo == CUM_BUKKAKE_LEFTBOOB || this._lastAreaEjaculatedTo == CUM_BUKKAKE_RIGHTBOOB;
	let karrynHasJustGokkundState = this.isStateAffected(STATE_JUST_GOKKUND_ID);

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
	
	if(givingBJ && this.tachieCockMouth && justMouthInserted) {
		if(generallvl3)
			faceArray.push(25);
		else if(generallvl2)
			faceArray.push(15);
		else
			faceArray.push(5);
	}
	else if(givingBJ) {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(30);
			else if(orgasmlvl2)
				faceArray.push(20);
			else
				faceArray.push(10);
		}
		else if(karrynSwallowingCum) {
			if(swallowlvl3)
				faceArray.push(27);
			else if(swallowlvl2)
				faceArray.push(17);
			else
				faceArray.push(7);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3)
				faceArray.push(33);
			else if(bukkakelvl2)
				faceArray.push(32);
			else
				faceArray.push(31);
		}
		else {
			if(generallvl3)
				faceArray.push(26);
			else if(generallvl2)
				faceArray.push(16);
			else
				faceArray.push(6);
		}
	}
	else {
		if(justOrgasmed) {
			if(orgasmlvl3)
				faceArray.push(29);
			else if(orgasmlvl2)
				faceArray.push(19);
			else
				faceArray.push(9);
		}
		else if(karrynHasJustGokkundState) {
			if(swallowlvl3)
				faceArray.push(28);
			else if(swallowlvl2)
				faceArray.push(18);
			else
				faceArray.push(8);
		}
		else if(karrynGotBukkaked) {
			if(karrynJustGotBukkakedOnBoobs) {
				if(bukkakelvl3)
					faceArray.push(23);
				else if(bukkakelvl2)
					faceArray.push(13);
				else
					faceArray.push(3);
			}
			else {
				if(bukkakelvl3)
					faceArray.push(24);
				else if(bukkakelvl2)
					faceArray.push(14);
				else
					faceArray.push(4);
			}
		}
		else if(lastHitHandjob) {
			if(generallvl3)
				faceArray.push(22);
			else if(generallvl2)
				faceArray.push(12);
			else
				faceArray.push(2);
		}
		else {
			if(generallvl3)
				faceArray.push(21);
			else if(generallvl2)
				faceArray.push(11);
			else
				faceArray.push(1);
		}
	}
	

	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('toji3');
		mouthArray.push('mu1');
		mouthArray.push('mu3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('mu3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('oko1');
		eyesArray.push('toji2');
		eyesArray.push('toji3');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('cum1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('ahe1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		eyesArray.push('ahe1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('mu4');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('mu4');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('mu4');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('mae3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('cum1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji2');
		eyesArray.push('toji3');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('ahe2');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('mu4');
		mouthArray.push('mu5');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('mae3');
		mouthArray.push('ho1');
		mouthArray.push('mu5');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartsita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('toji3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita2');
		eyesArray.push('mae3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('cum1');
		mouthArray.push('cum2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		eyesArray.push('heartahe1');
		eyesArray.push('heartahe2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('ahe1');
		eyesArray.push('ahe2');
		eyesArray.push('heartahe1');
		eyesArray.push('heartahe2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		mouthArray.push('fera6');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('toji3');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		eyesArray.push('urumae1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	else this.resetTachieMouth();
	
	this.setAllowTachieEmoteUpdate(true);
};

// Defeated Level Two
Game_Actor.prototype.emoteDefeatedLevelTwoPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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

	this.setAllowTachieEmoteUpdate(true);
};


// Defeated Level Three
Game_Actor.prototype.emoteDefeatedLevelThreePose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingPaizuri = this.isBodySlotPenis(BOOBS_ID);
	
	let lastHitSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);


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
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		
		this.resetTachieHat();
		this.resetTachieTie();
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		
		
		this.setTachieHat(1);
		if(givingPaizuri)
			this.setTachieTie('zuri');
		else
			this.setTachieTie('normal');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(19);
			else if(swallowlvl2) 
				faceArray.push(12);
			else
				faceArray.push(5);
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
				faceArray.push(17);
			else if(generallvl2) 
				faceArray.push(10);
			else
				faceArray.push(3);
		}
	}
	else if(justGotPussyCreampie || justGotAnalCreampie) {
		if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(18);
			else if(pussyCreampielvl2) 
				faceArray.push(11);
			else
				faceArray.push(4);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(18);
			else if(analCreampielvl2) 
				faceArray.push(11);
			else
				faceArray.push(4);
		}
	}
	else if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(20);
		else if(orgasmlvl2) 
			faceArray.push(13);
		else
			faceArray.push(6);
	}
	else if(lastHitSex) {
		if(generallvl3) 
			faceArray.push(16);
		else if(generallvl2) 
			faceArray.push(9);
		else
			faceArray.push(2);
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
		eyesArray.push('mae1');
		eyesArray.push('mae2');
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
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		mouthArray.push('ku3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('fera1');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ku3');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('fera2');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('ahe3');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku2');
		mouthArray.push('ku3');
		mouthArray.push('ho3');
		mouthArray.push('chu1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ku3');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		this.setTachieHoppe('fera_1');
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		this.setTachieHoppe('fera_1');
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('ahe2');
		mouthArray.push('chu1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico4');
		mouthArray.push('nico3');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('pero1');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		if(isAroused) this.setTachieHoppe('fera_1');
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('ho2');
		mouthArray.push('pero1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico4');
		mouthArray.push('nico3');
		mouthArray.push('chu1');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		if(isAroused) this.setTachieHoppe('fera_1');
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe('fera_1');
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
	
	this.setAllowTachieEmoteUpdate(true);
};

// Defeated Level Four
Game_Actor.prototype.emoteDefeatedLevelFourPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	
	let lastHitSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL);
	let justGotSpanked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_SPANKING);
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);


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
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(givingBJ) {
		if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(30);
			else if(swallowlvl2) 
				faceArray.push(20);
			else
				faceArray.push(10);
		}
		else if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(30);
			else if(orgasmlvl2) 
				faceArray.push(20);
			else
				faceArray.push(10);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(29);
			else if(pussyCreampielvl2) 
				faceArray.push(19);
			else
				faceArray.push(9);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(29);
			else if(analCreampielvl2) 
				faceArray.push(19);
			else
				faceArray.push(9);
		}
		else if(justGotSpanked) {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(18);
			else
				faceArray.push(8);
		}
		else if(lastHitSex) {
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(17);
			else
				faceArray.push(7);
		}
		else {
			if(generallvl3) 
				faceArray.push(26);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(6);
		}
	}
	else { //not fera
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(25);
			else if(orgasmlvl2) 
				faceArray.push(15);
			else
				faceArray.push(5);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(24);
			else if(pussyCreampielvl2) 
				faceArray.push(14);
			else
				faceArray.push(4);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(24);
			else if(analCreampielvl2) 
				faceArray.push(14);
			else
				faceArray.push(4);
		}
		else if(justGotSpanked) {
			if(generallvl3) 
				faceArray.push(23);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(3);
		}
		else if(lastHitSex) {
			if(generallvl3) 
				faceArray.push(22);
			else if(generallvl2) 
				faceArray.push(12);
			else
				faceArray.push(2);
		}
		else {
			if(generallvl3) 
				faceArray.push(21);
			else if(generallvl2) 
				faceArray.push(11);
			else
				faceArray.push(1);
		}
		
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyesArray.push('toji2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		mouthArray.push('ho2');
		mouthArray.push('mu2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('oko1');
		eyesArray.push('toji2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('ahe1');
		mouthArray.push('mu2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('mu1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyesArray.push('toji1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('toji2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe4');
		mouthArray.push('mu2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('ho3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('ahe1');
		eyesArray.push('heartahe1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('toji2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('ahe1');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('toji1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('ahe1');
		eyesArray.push('heartahe1');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

// Defeated Level Five
Game_Actor.prototype.emoteDefeatedLevelFivePose = function() {
	this.setAllowTachieEmoteUpdate(false);
	
	this.setAllowTachieEmoteUpdate(true);
};

// Defeated Guard
Game_Actor.prototype.emoteDefeatedGuardPose = function() {	
	this.setAllowTachieEmoteUpdate(false);		
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let givingPaizuri = this.isBodySlotPenis(BOOBS_ID);
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let karrynUsedPaizuriSkill = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let enemyUsedPaizuriSkill = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
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
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
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
			let frontBName = 'arms_';
			
			if(paizuriEnemyCock.includes('human_')) {
				if(paizuriEnemyCock.includes('pale')) {
					frontBName += 'human_pale';
				}
				else if(paizuriEnemyCock.includes('black')) {
					frontBName += 'human_black';
				}
				else {
					frontBName += 'human_normal';
				}
			}
			else {
				frontBName += 'human_normal';
			}
			
			this.setTachieFrontB(frontBName);
			
			this.setTachieBoobs('zuri_enemy');
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
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(18);
		else if(orgasmlvl2) 
			faceArray.push(12);
		else
			faceArray.push(6);
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
	else if(karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(16);
		else if(swallowlvl2) 
			faceArray.push(10);
		else
			faceArray.push(4);
	}
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) 
			faceArray.push(14);
		else if(bukkakelvl2) 
			faceArray.push(8);
		else
			faceArray.push(2);
	}
	else if(lastHitPussySex || lastHitAnalSex) {
		if(generallvl3) 
			faceArray.push(15);
		else if(generallvl2) 
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(lastHitBlowjob) {
		if(generallvl3) 
			faceArray.push(17);
		else if(generallvl2) 
			faceArray.push(11);
		else
			faceArray.push(5);
	}
	else if(justGotHarassed) {
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
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
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
		mouthArray.push('ku2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
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
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('nico3');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		mouthArray.push('ku2');
		mouthArray.push('ho2');
		mouthArray.push('nico2');
		mouthArray.push('wa3');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('wa3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		mouthArray.push('mu2');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartahe1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
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
	
	
	this.setAllowTachieEmoteUpdate(true);
};

Game_Actor.prototype.emoteMasturbationInBattlePose = function(lickingHalberd) {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let leftArmIsSuckFinger = this.tachieLeftArm.includes('suck_fingers');
	let rightArmIsSuckFinger = this.tachieRightArm.includes('suck_fingers');
	let isSuckingFingers = leftArmIsSuckFinger || rightArmIsSuckFinger;
	let frontBIsArmsHalberd = this.tachieFrontB.includes('arms_halberd');
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(this.isWearingGlovesAndHat()) {
		this.setPoseClothing();
	}
	
	if(justOrgasmed) {
		this.setTachieFrontA('climax');
	}
	else
		this.resetTachieFrontA();
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(9);
		else if(orgasmlvl2) 
			faceArray.push(6);
		else
			faceArray.push(3);
	}
	else if(lickingHalberd) {
		if(generallvl3) 
			faceArray.push(8);
		else if(generallvl2) 
			faceArray.push(5);
		else
			faceArray.push(2);
	}	
	else if(karrynGotBukkaked) {
		if(bukkakelvl3) 
			faceArray.push(7);
		else if(bukkakelvl2) 
			faceArray.push(4);
		else
			faceArray.push(1);
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
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('kiri1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('hu1');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('chu1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('pero3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('hu1');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('chu1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('pero3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('koma3');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		eyesArray.push('urumae1');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('ku1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		eyesArray.push('urumae1');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		eyesArray.push('urumae1');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('mae3');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('urumae2');
		eyesArray.push('urumae1');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		eyesArray.push('toji2');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		mouthArray.push('ho1');
		mouthArray.push('hu3');
		mouthArray.push('pero2');
		this.setTachieHoppe(2);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}

	if(isSuckingFingers) {
		this.resetTachieMouth();
	}
	else if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

////////////////////
////////////////////
// Special Battles
////////////////////
////////////////////

Game_Actor.prototype.emoteMasturbateCouchBattle = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	
	this.setAllowTachieEmoteUpdate(true);
};

////////
// Glory 

//Sitting
Game_Actor.prototype.emoteGloryToiletSittingPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isNaked = !this.isWearingGlovesAndHat();
	
	let ranNum = Math.randomInt(2);
	let toysSabun1 = ranNum === 1;
	let toysSabun2 = ranNum === 0;
	
	let wearingPussyToy = this.isWearingPussyToy();
	let wearingAnalToy = this.isWearingAnalToy();
	
	let karrynJustInsertedToy = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_CLIT) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_PUSSY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_INSERT_ANAL);
	
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let leftHoleJustShowed = !leftHoleIsEmpty && this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_LEFT_HOLE_SHOWED);
	let rightHoleJustShowed = !rightHoleIsEmpty && this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_RIGHT_HOLE_SHOWED);
	
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let karrynUsedCockStareOnLeftHole = !leftHoleIsEmpty && karrynJustUsedCockStare && $gameTroop._gloryLeftStall.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let karrynUsedCockStareOnRightHole = !rightHoleIsEmpty && karrynJustUsedCockStare && $gameTroop._gloryRightStall.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynUsedCockPetOnLeftHole = !leftHoleIsEmpty && karrynJustUsedCockPet && $gameTroop._gloryLeftStall.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynUsedCockPetOnRightHole = !rightHoleIsEmpty && karrynJustUsedCockPet && $gameTroop._gloryRightStall.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	
	if(karrynUsedCockStareOnLeftHole || karrynUsedCockPetOnLeftHole) {
		$gameTroop._gloryLeftStall.resetGotHitBySkillType();
	}
	if(karrynUsedCockStareOnRightHole || karrynUsedCockPetOnRightHole) {
		$gameTroop._gloryRightStall.resetGotHitBySkillType();
	}
	
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let givingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let givingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let karrynUsedHandJobOnLeftHole = this._lastHandUsedForHandjob === RIGHT_HAND_ID;
	let karrynUsedHandJobOnRightHole = this._lastHandUsedForHandjob === LEFT_HAND_ID;
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let leftHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_LEFT_STALL_ID;
	let rightHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_RIGHT_STALL_ID;
	
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(justOrgasmed) {
		this.setTachieLegs('spread');
		if(this.tachieLeftArm.includes('suck_fingers'))
			this.toiletBattle_resetLeftArmToNormal();
		if(this.tachieRightArm.includes('suck_fingers'))
			this.toiletBattle_resetRightArmToNormal();
	}
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(givingLeftHoleHJ) {
			if(leftHoleEnemy.isAroused()) {
				leftHoleName += 'hj_';
				this.setTachieRightArm('hj_1');
				this.setTachieSemenHoleLeftExtension('hard_hj_');
			}
			else {
				leftHoleName += 'pet_';
				this.setTachieRightArm('pet_1');
				this.setTachieSemenHoleLeftExtension('soft_pet_');
			}
		}
		else if(karrynUsedCockPetOnLeftHole) {
			if(leftHoleEnemy.isAroused()) {
				leftHoleName += 'hard_';
				this.setTachieRightArm('pet_1');
				this.setTachieSemenHoleLeftExtension('hard_');
			}
			else {
				leftHoleName += 'pet_';
				this.setTachieRightArm('pet_1');
				this.setTachieSemenHoleLeftExtension('soft_pet_');
			}
		}
		else {
			if(leftHoleEnemy.isAroused()) {
				leftHoleName += 'hard_';
				this.setTachieSemenHoleLeftExtension('hard_');
			}
			else {
				leftHoleName += 'soft_';
				this.setTachieSemenHoleLeftExtension('soft_');
			}
			
			if((this.tachieRightArm.includes('hj') || this.tachieRightArm.includes('pet')) &&
				!givingLeftHoleHJ && !karrynUsedCockPetOnLeftHole) {
					this.toiletBattle_resetRightArmToNormal();
			}
		}
		
		leftHoleName += leftHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			leftHoleName += '_cen';
		
		this.setTachieLeftHole(leftHoleName);
		this.setMaxTachieSemenHoleLeftId(1);
	}
	else {
		this.resetTachieLeftHole();
		this.setMaxTachieSemenHoleLeftId(0);
		if((this.tachieRightArm.includes('hj') || this.tachieRightArm.includes('pet'))
			&& !this.tachieRightArm.includes('kuri') && !this.tachieRightArm.includes('manko') && !this.tachieRightArm.includes('chikubi') && !this.tachieRightArm.includes('anaru') && !this.tachieRightArm.includes('suck_fingers') && !this.tachieRightArm.includes('toy'))
				this.toiletBattle_resetRightArmToNormal();
	}
	
	if(this.tachieRightArm.includes('chikubi')) {
		this.setTachieRightBoob('touch_chikubi'); 
		this.setTachieSemenRightBoobExtension('touch_chikubi_');
	}
	else if(this.tachieRightArm.includes('suck_fingers')) {
		if(isAroused)
			this.setTachieRightBoob('suck_fingers_hard');
		else
			this.setTachieRightBoob('suck_fingers');
		this.setTachieSemenRightBoobExtension('suck_fingers_');
	}
	else {
		if(isAroused)
			this.setTachieRightBoob('normal_hard');
		else
			this.setTachieRightBoob('normal');
		this.setTachieSemenRightBoobExtension('normal_');
	}
	this.setMaxTachieSemenRightBoobId(1);
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(givingRightHoleHJ) {
			if(rightHoleEnemy.isAroused()) {
				rightHoleName += 'hj_';
				this.setTachieLeftArm('hj_1');
				this.setTachieSemenHoleRightExtension('hard_hj_');
			}
			else {
				rightHoleName += 'pet_';
				this.setTachieLeftArm('pet_1');
				this.setTachieSemenHoleRightExtension('soft_pet_');
			}
		}
		else if(karrynUsedCockPetOnRightHole) {
			if(rightHoleEnemy.isAroused()) {
				rightHoleName += 'hard_';
				this.setTachieLeftArm('pet_1');
				this.setTachieSemenHoleRightExtension('hard_');
			}
			else {
				rightHoleName += 'pet_';
				this.setTachieLeftArm('pet_1');
				this.setTachieSemenHoleRightExtension('soft_pet_');
			}
		}
		else {
			if(rightHoleEnemy.isAroused()) {
				rightHoleName += 'hard_';
				this.setTachieSemenHoleRightExtension('hard_');
			}
			else {
				rightHoleName += 'soft_';
				this.setTachieSemenHoleRightExtension('soft_');
			}
			
			if((this.tachieLeftArm.includes('hj') || this.tachieLeftArm.includes('pet')) &&
				!givingRightHoleHJ && !karrynUsedCockPetOnRightHole) {
					this.toiletBattle_resetLeftArmToNormal();
			}
		}
		
		rightHoleName += rightHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			rightHoleName += '_cen';
		
		this.setTachieRightHole(rightHoleName);
		this.setMaxTachieSemenHoleRightId(1);
	}
	else {
		this.resetTachieRightHole();
		this.setMaxTachieSemenHoleRightId(0);
		if(this.tachieLeftArm.includes('hj') || this.tachieLeftArm.includes('pet')
			&& !this.tachieLeftArm.includes('kuri') && !this.tachieLeftArm.includes('manko') && !this.tachieLeftArm.includes('chikubi') && !this.tachieLeftArm.includes('anaru') && !this.tachieLeftArm.includes('suck_fingers') && !this.tachieLeftArm.includes('toy')) 
			this.toiletBattle_resetLeftArmToNormal();
	}
	
	if(this.tachieLeftArm.includes('chikubi')) {
		this.setTachieLeftBoob('touch_chikubi');
		this.setTachieSemenLeftBoobExtension('touch_chikubi_');
	}
	else if(this.tachieLeftArm.includes('suck_fingers'))  {
		if(isAroused)
			this.setTachieLeftBoob('suck_fingers_hard');
		else
			this.setTachieLeftBoob('suck_fingers');
		this.setTachieSemenLeftBoobExtension('suck_fingers_');
	}
	else {
		if(isAroused)
			this.setTachieLeftBoob('normal_hard');
		else
			this.setTachieLeftBoob('normal');
		this.setTachieSemenLeftBoobExtension('normal_');
	}
	this.setMaxTachieSemenLeftBoobId(1);
	
	let isMasturbatingBoobs = this.tachieLeftArm.includes('chikubi') || this.tachieRightArm.includes('chikubi');
	let isMasturbatingMouth = this.tachieLeftArm.includes('suck_fingers') || this.tachieRightArm.includes('suck_fingers');
	let isMasturbatingLowerBody = this.tachieLeftArm.includes('anaru') || this.tachieRightArm.includes('anaru') || this.tachieLeftArm.includes('kuri') || this.tachieRightArm.includes('kuri') || this.tachieLeftArm.includes('manko') || this.tachieRightArm.includes('manko') || this.tachieLeftArm.includes('toy') || this.tachieRightArm.includes('toy');
	
	//Kuri
	
	if(this.tachieRightArm.includes('kuri_2') || this.tachieLeftArm.includes('kuri_2')) {
		if(Karryn.isCensored())
			this.setTachieFrontA('kuri_hard_cen');
		else
			this.setTachieFrontA('kuri_hard');
	}
	else {
		this.resetTachieFrontA();
	}
	
	//Toys
	if(this.tachieLeftArm.includes('toyA')) {
		if(toysSabun1) {
			this.setTachieLeftArm('toyA_1');
		}
		else if(toysSabun2) {
			this.setTachieLeftArm('toyA_2');
		}
	}
	if(this.tachieRightArm.includes('toyA')) {
		if(toysSabun1) {
			this.setTachieRightArm('toyA_1');
		}
		else if(toysSabun2) {
			this.setTachieRightArm('toyA_2');
		}
	}
	
	if(this.tachieLeftArm.includes('toyP')) {
		if(toysSabun1) {
			this.setTachieLeftArm('toyP_1');
			this.setTachiePussyToyExtension_gloryBattle('left_1_');
		}
		else if(toysSabun2) {
			this.setTachieLeftArm('toyP_2');
			this.setTachiePussyToyExtension_gloryBattle('left_2_');
		}
	}
	else if(this.tachieRightArm.includes('toyP')) {
		if(toysSabun1) {
			this.setTachieRightArm('toyP_1');
			this.setTachiePussyToyExtension_gloryBattle('right_1_');
		}
		else if(toysSabun2) {
			this.setTachieRightArm('toyP_2');
			this.setTachiePussyToyExtension_gloryBattle('right_2_');
		}
	}
	else if(this.getTachiePussyToyExtension_gloryBattle().includes('right_2_')) {
		this.setTachiePussyToyExtension_gloryBattle('right_1_');
	}
	else if(this.getTachiePussyToyExtension_gloryBattle().includes('left_2_')) {
		this.setTachiePussyToyExtension_gloryBattle('left_1_');
	}
	
	//Naked
	
	if(isNaked) {
		if(this.tachieLeftArm.includes('anaru_1')) {
			this.setTachieLeftArm('anaru_1_naked');
		}
		else if(this.tachieLeftArm.includes('hj_1')) {
			this.setTachieLeftArm('hj_1_naked');
		}
		else if(this.tachieLeftArm.includes('kuri_1')) {
			this.setTachieLeftArm('kuri_1_naked');
		}
		else if(this.tachieLeftArm.includes('kuri_2')) {
			this.setTachieLeftArm('kuri_2_naked');
		}
		else if(this.tachieLeftArm.includes('manko_1')) {
			this.setTachieLeftArm('manko_1_naked');
		}
		else if(this.tachieLeftArm.includes('normal_1')) {
			this.setTachieLeftArm('normal_1_naked');
		}
		else if(this.tachieLeftArm.includes('pet_1')) {
			this.setTachieLeftArm('pet_1_naked');
		}
		else if(this.tachieLeftArm.includes('toyA_1')) {
			this.setTachieLeftArm('toyA_1_naked');
		}
		else if(this.tachieLeftArm.includes('toyA_2')) {
			this.setTachieLeftArm('toyA_2_naked');
		}
		else if(this.tachieLeftArm.includes('toyC_1')) {
			this.setTachieLeftArm('toyC_1_naked');
		}
		else if(this.tachieLeftArm.includes('toyP_1')) {
			this.setTachieLeftArm('toyP_1_naked');
		}
		else if(this.tachieLeftArm.includes('toyP_2')) {
			this.setTachieLeftArm('toyP_2_naked');
		}
		
		if(this.tachieRightArm.includes('anaru_1')) {
			this.setTachieRightArm('anaru_1_naked');
		}
		else if(this.tachieRightArm.includes('hj_1')) {
			this.setTachieRightArm('hj_1_naked');
		}
		else if(this.tachieRightArm.includes('kuri_1')) {
			this.setTachieRightArm('kuri_1_naked');
		}
		else if(this.tachieRightArm.includes('kuri_2')) {
			this.setTachieRightArm('kuri_2_naked');
		}
		else if(this.tachieRightArm.includes('manko_1')) {
			this.setTachieRightArm('manko_1_naked');
		}
		else if(this.tachieRightArm.includes('normal_1')) {
			this.setTachieRightArm('normal_1_naked');
		}
		else if(this.tachieRightArm.includes('pet_1')) {
			this.setTachieRightArm('pet_1_naked');
		}
		else if(this.tachieRightArm.includes('toyA_1')) {
			this.setTachieRightArm('toyA_1_naked');
		}
		else if(this.tachieRightArm.includes('toyA_2')) {
			this.setTachieRightArm('toyA_2_naked');
		}
		else if(this.tachieRightArm.includes('toyC_1')) {
			this.setTachieRightArm('toyC_1_naked');
		}
		else if(this.tachieRightArm.includes('toyP_1')) {
			this.setTachieRightArm('toyP_1_naked');
		}
		else if(this.tachieRightArm.includes('toyP_2')) {
			this.setTachieRightArm('toyP_1_naked');
		}
		
		if(this.tachieLeftBoob.includes('suck_fingers_hard')) {
			this.setTachieLeftBoob('suck_fingers_hard_naked');
		}
		else if(this.tachieLeftBoob.includes('suck_fingers')) {
			this.setTachieLeftBoob('suck_fingers_naked');
		}
		else if(this.tachieLeftBoob.includes('touch_chikubi')) {
			this.setTachieLeftBoob('touch_chikubi_naked');
		}
		
		if(this.tachieRightBoob.includes('suck_fingers_hard')) {
			this.setTachieRightBoob('suck_fingers_hard_naked');
		}
		else if(this.tachieRightBoob.includes('suck_fingers')) {
			this.setTachieRightBoob('suck_fingers_naked');
		}
		else if(this.tachieRightBoob.includes('touch_chikubi')) {
			this.setTachieRightBoob('touch_chikubi_naked');
		}
		
		this.setTachieClitToyExtension_gloryBattle('naked_');
	}
	
	if(Karryn.isCensored()) {
		if(this.tachieLeftArm.includes('anaru_1_naked')) {
			this.setTachieLeftArm('anaru_1_naked_cen');
		}
		else if(this.tachieLeftArm.includes('anaru_1')) {
			this.setTachieLeftArm('anaru_1_cen');
		}
		else if(this.tachieLeftArm.includes('toyA_2_naked')) {
			this.setTachieLeftArm('toyA_2_naked_cen');
		}
		else if(this.tachieLeftArm.includes('toyA_2')) {
			this.setTachieLeftArm('toyA_2_cen');
		}
		
		if(this.tachieRightArm.includes('anaru_1_naked')) {
			this.setTachieRightArm('anaru_1_naked_cen');
		}
		else if(this.tachieRightArm.includes('anaru_1')) {
			this.setTachieRightArm('anaru_1_cen');
		}
		else if(this.tachieRightArm.includes('toyA_2_naked')) {
			this.setTachieRightArm('toyA_2_naked_cen');
		}
		else if(this.tachieRightArm.includes('toyA_2')) {
			this.setTachieRightArm('toyA_2_cen');
		}
	}
	
	//Legs
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	
	if(legsAreSpread || wearingPussyToy || wearingAnalToy) {
		this.setHasTachiePubic(true);
		
		this.setTachieSemenRightLegExtension('spread_');
		this.setTachieSemenLeftLegExtension('spread_');
		this.setTachieSemenButtExtension('spread_');
		this.setTachieSemenCrotchExtension('spread_');
		this.setTachieSemenAnalExtension('spread_');
		this.setTachieSemenWetExtension('spread_');
		this.setTachieSemenToiletSeatExtension('spread_');
		this.setTachieWetToiletSeatExtension('spread_');
		
		this.setMaxTachieSemenLeftLegId(1);
		this.setMaxTachieSemenRightLegId(1);
		this.setMaxTachieSemenButtId(1);
		this.setMaxTachieSemenAnalId(1);
		this.setMaxTachieSemenCrotchId(1);
		this.setMaxTachieWetId(1);
		this.setMaxTachieSemenToiletSeatId(1);
		this.setMaxTachieWetToiletSeatId(1);
		
		if(isNaked) {
			if(Karryn.isCensored()) {
				this.setTachieLegs('spread_naked_cen');
			}
			else {
				this.setTachieLegs('spread_naked');
			}
		}
		else {
			if(Karryn.isCensored()) {
				this.setTachieLegs('spread_cen');
			}
			else {
				this.setTachieLegs('spread');
			}
		}
			
	}
	else {
		this.setHasTachiePubic(false);
		
		this.setTachieSemenRightLegExtension('close_');
		this.setTachieSemenLeftLegExtension('close_');
		this.setTachieSemenButtExtension('close_');
		this.setTachieSemenCrotchExtension('close_');
		this.setTachieSemenWetExtension('close_');
		this.setTachieSemenToiletSeatExtension('close_');
		this.setTachieWetToiletSeatExtension('close_');
		
		this.setMaxTachieSemenLeftLegId(1);
		this.setMaxTachieSemenRightLegId(1);
		this.setMaxTachieSemenButtId(1);
		this.setMaxTachieSemenCrotchId(1);
		this.setMaxTachieSemenAnalId(0);
		this.setMaxTachieWetId(1);
		this.setMaxTachieSemenToiletSeatId(1);
		this.setMaxTachieWetToiletSeatId(1);
		
		if(isNaked) {
			this.setTachieLegs('close_naked');
		}
		else {
			this.setTachieLegs('close');
		}
	}

	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(33);
		else if(orgasmlvl2) 
			faceArray.push(22);
		else
			faceArray.push(11);
	}
	else if(karrynJustInsertedToy && !isMasturbatingMouth) {
		if(generallvl3) 
			faceArray.push(32);
		else if(generallvl2) 
			faceArray.push(21);
		else
			faceArray.push(10);
	}
	else if(karrynGotBukkaked && leftHoleJustEjaculated) {
		if(bukkakelvl3) 
			faceArray.push(28);
		else if(bukkakelvl2) 
			faceArray.push(17);
		else
			faceArray.push(6);
	}
	else if(karrynGotBukkaked && rightHoleJustEjaculated) {
		if(bukkakelvl3) 
			faceArray.push(29);
		else if(bukkakelvl2) 
			faceArray.push(18);
		else
			faceArray.push(7);
	}
	else if(karrynJustUsedCockStare) {
		if(karrynUsedCockStareOnLeftHole) {
			if(generallvl3) 
				faceArray.push(24);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(2);
		}
		else { //right hole
			if(generallvl3) 
				faceArray.push(25);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(3);
		}
	}
	else if(leftHoleJustShowed || rightHoleJustShowed) {
		if(leftHoleJustShowed) {
			if(generallvl3) 
				faceArray.push(24);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(2);
		}
		else { //right hole
			if(generallvl3) 
				faceArray.push(25);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(3);
		}
	}
	else if(lastHitHandjob || karrynJustUsedCockPet) {
		if(karrynUsedHandJobOnLeftHole || karrynUsedCockPetOnLeftHole) {
			if(generallvl3) 
				faceArray.push(26);
			else if(generallvl2) 
				faceArray.push(15);
			else
				faceArray.push(4);
		}
		else { //right hole
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(5);
		}
	}
	else {
		if(isMasturbatingBoobs || isMasturbatingMouth) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(19);
			else
				faceArray.push(8);
		}
		if(isMasturbatingLowerBody) {
			if(generallvl3) 
				faceArray.push(31);
			else if(generallvl2) 
				faceArray.push(20);
			else
				faceArray.push(9);
		}
	}
	
	if(faceArray.length === 0) {
		if(!leftHoleIsEmpty) {
			if(generallvl3) 
				faceArray.push(24);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(2);
		}
		if(!rightHoleIsEmpty) { 
			if(generallvl3) 
				faceArray.push(25);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(3);
		}
		
		if(!this.isHorny) {
			if(generallvl3) 
				faceArray.push(23);
			else if(generallvl2) 
				faceArray.push(12);
			else
				faceArray.push(1);
		}
	}
	
	if(faceArray.length === 0) {
		if(generallvl3) 
			faceArray.push(23);
		else if(generallvl2) 
			faceArray.push(12);
		else
			faceArray.push(1);
	}


	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let tachieHeadType = 'far';
	let tachieHoppeName = false;
	let tachieSweatName = false;

	if(faceId === 1) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		tachieSweatName = '1';
	}
	else if(faceId === 2) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		tachieSweatName = '2';
	}
	else if(faceId === 3) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		tachieSweatName = '2';
	}
	else if(faceId === 4) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 5) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left1');
		eyesArray.push('left2');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 6) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('right2');
		eyesArray.push('right3');
		eyesArray.push('toji1');
		mouthArray.push('mu3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 7) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('left2');
		eyesArray.push('left3');
		eyesArray.push('toji1');
		mouthArray.push('mu3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('wa4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 8) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 9) {
		tachieHeadType = 'far';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 10) {
		tachieHeadType = 'close';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 11) {
		tachieHeadType = 'close';
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 12) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
	}
	else if(faceId === 13) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('oko2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		mouthArray.push('mu1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieSweatName = '1';
	}
	else if(faceId === 14) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('oko2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		mouthArray.push('mu1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		tachieSweatName = '1';
	}
	else if(faceId === 15) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		mouthArray.push('mu1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 16) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		mouthArray.push('mu1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 17) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('right2');
		eyesArray.push('right3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('wa1');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 18) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('left2');
		eyesArray.push('left3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('wa1');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 19) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 20) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('mu1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 21) {
		tachieHeadType = 'close';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita1');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		tachieHoppeName = '1';
		tachieSweatName = '1';
	}
	else if(faceId === 22) {
		tachieHeadType = 'close';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		tachieHoppeName = '1';
		tachieSweatName = '2';
	}
	else if(faceId === 23) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 24) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('right1');
		eyesArray.push('right2');
		eyesArray.push('heartright1');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 25) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('left1');
		eyesArray.push('left2');
		eyesArray.push('heartleft1');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 26) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('right1');
		eyesArray.push('right2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 27) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('left1');
		eyesArray.push('left2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 28) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('right3');
		eyesArray.push('heartright1');
		eyesArray.push('ururight1');
		eyesArray.push('ururight2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		if(isAroused) tachieHoppeName = '1';
		if(Math.random() < 0.33) tachieSweatName = '1';
		else if(Math.random() < 0.5) tachieSweatName = '2';
	}
	else if(faceId === 29) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyesArray.push('left3');
		eyesArray.push('heartleft1');
		eyesArray.push('uruleft1');
		eyesArray.push('uruleft2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		if(isAroused) tachieHoppeName = '1';
		if(Math.random() < 0.33) tachieSweatName = '1';
		else if(Math.random() < 0.5) tachieSweatName = '2';
	}
	else if(faceId === 30) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		mouthArray.push('fu1');
		mouthArray.push('fu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 31) {
		tachieHeadType = 'far';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('fu2');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartahe1');
		mouthArray.push('wa1');
		mouthArray.push('wa4');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(isAroused) tachieHoppeName = '1';
	}
	else if(faceId === 32) {
		tachieHeadType = 'close';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico1');
		if(isAroused) tachieHoppeName = '1';
		if(Math.random() < 0.5) tachieSweatName = '1';
	}
	else if(faceId === 33) {
		tachieHeadType = 'close';
		eyebrowsArray.push('fu1');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		eyesArray.push('heart1');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('nico1');
		tachieHoppeName = '1';
		if(Math.random() < 0.33) tachieSweatName = '1';
		else if(Math.random() < 0.5) tachieSweatName = '2';
	}
	
	this.setTachieHead(tachieHeadType);
	if(tachieHoppeName) this.setTachieHoppe('' + tachieHeadType + '_' + tachieHoppeName);
	if(tachieSweatName) this.setTachieSweat('' + tachieHeadType + '_' + tachieSweatName);	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows('' + tachieHeadType + '_' + eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes('' + tachieHeadType + '_' + eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(isMasturbatingMouth) {
		this.resetTachieMouth();
	}
	else if(mouthArray.length > 0) {
		this.setTachieMouth('' + tachieHeadType + '_' + mouthArray[Math.randomInt(mouthArray.length)]);
	}

	//Semen Extensions
	let headIsClose = this.tachieHead.includes('close');
	let headIsFar = this.tachieHead.includes('far');
	if(headIsClose) {
		this.setTachieSemenFaceExtension('close_');
		this.setMaxTachieSemenFaceId(1);
	}
	else if(headIsFar) {
		this.setTachieSemenFaceExtension('far_');
		this.setMaxTachieSemenFaceId(1);
	}
	
	if(this.tachieLeftArm.includes('anaru_1')) {
		this.setTachieSemenLeftArmExtension('anaru_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('chikubi_1')) {
		this.setTachieSemenLeftArmExtension('touch_chikubi_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('hj_1')) {
		this.setTachieSemenLeftArmExtension('hj_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('kuri_1')) {
		this.setTachieSemenLeftArmExtension('kuri_1_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('kuri_2')) {
		this.setTachieSemenLeftArmExtension('kuri_2_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('manko_1')) {
		this.setTachieSemenLeftArmExtension('manko_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('normal_1')) {
		this.setTachieSemenLeftArmExtension('normal_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('pet_1')) {
		this.setTachieSemenLeftArmExtension('pet_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('suck_fingers_1')) {
		this.setTachieSemenLeftArmExtension('suck_fingers_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('toyA_1')) {
		this.setTachieSemenLeftArmExtension('toyA_1_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('toyA_2')) {
		this.setTachieSemenLeftArmExtension('toyA_2_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('toyC_1')) {
		this.setTachieSemenLeftArmExtension('toyC_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('toyP_1')) {
		this.setTachieSemenLeftArmExtension('toyP_1_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('toyP_2')) {
		this.setTachieSemenLeftArmExtension('toyP_2_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else {
		this.setMaxTachieSemenLeftArmId(0);
	}
	
	if(this.tachieRightArm.includes('anaru_1')) {
		this.setTachieSemenRightArmExtension('anaru_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('chikubi_1')) {
		this.setTachieSemenRightArmExtension('touch_chikubi_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('hj_1')) {
		this.setTachieSemenRightArmExtension('hj_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('kuri_1')) {
		this.setTachieSemenRightArmExtension('kuri_1_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('kuri_2')) {
		this.setTachieSemenRightArmExtension('kuri_2_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('manko_1')) {
		this.setTachieSemenRightArmExtension('manko_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('normal_1')) {
		this.setTachieSemenRightArmExtension('normal_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('pet_1')) {
		this.setTachieSemenRightArmExtension('pet_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('suck_fingers_1')) {
		this.setTachieSemenRightArmExtension('suck_fingers_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('toyA_1')) {
		this.setTachieSemenRightArmExtension('toyA_1_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('toyA_2')) {
		this.setTachieSemenRightArmExtension('toyA_2_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('toyC_1')) {
		this.setTachieSemenRightArmExtension('toyC_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('toyP_1')) {
		this.setTachieSemenRightArmExtension('toyP_1_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('toyP_2')) {
		this.setTachieSemenRightArmExtension('toyP_2_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else {
		this.setMaxTachieSemenRightArmId(0);
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

//Sit Left
Game_Actor.prototype.emoteGloryToiletSitLeftPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isNaked = !this.isWearingGlovesAndHat();
	
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	
	let isMasturbating = this.tachieLeftArm.includes('chikubi') || this.tachieLeftArm.includes('kuri') || this.tachieLeftArm.includes('manko');
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let mainHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused();
	let mainHoleIsSoft = !leftHoleIsEmpty && !$gameTroop._gloryLeftStall.isAroused();
	let mainHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_LEFT_STALL_ID;
	
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
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
				leftHoleName += 'pet_';
				this.setTachieRightArm('pet');
			}
		}
		else if(karrynJustUsedCockPet) {
			leftHoleName += 'pet_';
			this.setTachieRightArm('pet');
		}
		else {
			this.toiletBattle_resetRightArmToNormal();
		}
		
		if(givingBJ && !leftHoleEnemy.isAroused()) {
			leftHoleName += 'bj_';
		}
		
		if(leftHoleName.includes('hard_pet'))
			this.setTachieSemenHoleLeftExtension('hard_');
		else
			this.setTachieSemenHoleLeftExtension(leftHoleName);
		
		leftHoleName += leftHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			leftHoleName += '_cen';
		
		this.setTachieLeftHole(leftHoleName);
		
		this.setMaxTachieSemenHoleLeftId(1);
	}
	else {
		this.resetTachieLeftHole();
		this.setMaxTachieSemenHoleLeftId(0);
		this.resetTachieSemenHoleLeftExtension();
	}
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(rightHoleEnemy.isAroused())
			rightHoleName += 'hard_';
		else
			rightHoleName += 'soft_';
		
		this.setTachieSemenHoleRightExtension(rightHoleName);
		

		rightHoleName += rightHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			rightHoleName += '_cen';
		
		this.setTachieRightHole(rightHoleName);
		this.setMaxTachieSemenHoleRightId(1);
	}
	else {
		this.resetTachieRightHole();
		this.setMaxTachieSemenHoleRightId(0);
	}
	
	let leftArmIsNeutral = !this.tachieLeftArm.includes('kuri') && !this.tachieLeftArm.includes('manko');
	let putLeftArmOnThigh = generallvl3 && leftArmIsNeutral;
	let boobsAreBeingTouched = this.tachieLeftArm.includes('chikubi');
	
	//Legs
	
	let tachieLegName = '';
	let tachieBoobsName = '';
	
	if(legsAreSpread || boobsAreBeingTouched) {
		this.setHasTachiePubic(true);
		tachieLegName = 'spread';
		if(boobsAreBeingTouched) {
			tachieBoobsName = 'spread_chikubi';
			this.setTachieSemenBoobsExtension('spread_chikubi_');
		}
		else {
			tachieBoobsName = 'spread_normal';
			this.setTachieSemenBoobsExtension('spread_normal_');
			if(putLeftArmOnThigh) {
				this.setTachieLeftArm('thigh');
			}
			else if(leftArmIsNeutral) {
				this.setTachieLeftArm('legs_spread');
			}
		}
		
		this.resetTachieSemenButtExtension();
		this.setTachieSemenCrotchExtension('spread_');
		this.setTachieSemenWetExtension('spread_');
		this.setTachieSemenLeftLegExtension('spread_');
		this.setTachieSemenRightLegExtension('spread_');
		
		this.setMaxTachieSemenButtId(0);
		this.setMaxTachieSemenCrotchId(1);
	}
	else {
		this.setHasTachiePubic(false);
		tachieBoobsName = 'close';
		this.setTachieSemenBoobsExtension('close_');
		tachieLegName = 'close';
		if(leftArmIsNeutral) {
			this.setTachieLeftArm('legs_close');
		}
		
		this.setTachieSemenButtExtension('close_');
		this.resetTachieSemenCrotchExtension();
		this.setTachieSemenWetExtension('close_');
		this.setTachieSemenLeftLegExtension('close_');
		this.setTachieSemenRightLegExtension('close_');
		
		this.setMaxTachieSemenButtId(1);
		this.setMaxTachieSemenCrotchId(0);
	}
	
	if(isNaked) {
		tachieLegName += '_naked';
	}
	if(tachieLegName.includes('spread') && Karryn.isCensored()) {
		tachieLegName += '_cen';
	}
	this.setTachieBoobs(tachieBoobsName);
	this.setTachieLegs(tachieLegName);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	
	//Mouth
	/*
	if(givingBJ) {
		if(!leftHoleIsEmpty) {
			if(!$gameTroop._gloryLeftStall.isAroused()) {
				this.setMaxTachieSemenCockMouthId(0);
				this.resetTachieSemenCockMouthExtension();
			}
			else {
				this.setMaxTachieSemenCockMouthId(1);
				this.setTachieSemenCockMouthExtension('bj_1_');
			}
		}
		else {
			console.error('weird situation in sit_left, givingBJ but leftHoleIsEmpty');
		}
	}
	else {
		this.setMaxTachieSemenCockMouthId(0);
		this.resetTachieSemenCockMouthExtension();
	}
	*/
	
	//Naked 
	
	if(isNaked) {
		if(this.tachieLeftArm.includes('legs')) {
			this.setTachieLeftArm('legs_naked');
		}
		else if(this.tachieLeftArm.includes('kuri')) {
			this.setTachieLeftArm('kuri_naked');
		}
		else if(this.tachieLeftArm.includes('manko')) {
			this.setTachieLeftArm('manko_naked');
		}
		else if(this.tachieLeftArm.includes('thigh')) {
			this.setTachieLeftArm('thigh_naked');
		}
		
		if(this.tachieRightArm.includes('hj')) {
			this.setTachieRightArm('hj_naked');
		}
		else if(this.tachieRightArm.includes('normal')) {
			this.setTachieRightArm('normal_naked');
		}
		else if(this.tachieRightArm.includes('pet')) {
			this.setTachieRightArm('pet_naked');
		}
		
		if(this.tachieBoobs.includes('spread_chikubi')) {
			this.setTachieBoobs('spread_chikubi_naked');
		}
		
		this.setTachieClitToyExtension_gloryBattle('naked_');
	}
	
	//Semen Extensions
	
	if(this.tachieLeftArm.includes('close')) {
		this.setTachieSemenLeftArmExtension('close_');
		this.setMaxTachieSemenLeftArmId(1);
	}
		else if(this.tachieLeftArm.includes('kuri')) {
		this.setTachieSemenLeftArmExtension('kuri_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('chikubi')) {
		this.setTachieSemenLeftArmExtension('spread_chikubi_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('thigh')) {
		this.setTachieSemenLeftArmExtension('thigh_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else {
		this.setMaxTachieSemenLeftArmId(0);
	}
	
	if(this.tachieRightArm.includes('hj')) {
		this.setTachieSemenRightArmExtension('hj_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('normal')) {
		this.setTachieSemenRightArmExtension('normal_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('pet')) {
		this.setTachieSemenRightArmExtension('pet_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else {
		this.setMaxTachieSemenRightArmId(0);
	}
		
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(givingBJ) {
			if(mainHoleIsHard) {
				if(orgasmlvl3) 
					faceArray.push(32);
				else if(orgasmlvl2) 
					faceArray.push(19);
				else
					faceArray.push(6);
			}
			else {
				if(orgasmlvl3) 
					faceArray.push(29);
				else if(orgasmlvl2) 
					faceArray.push(16);
				else
					faceArray.push(3);
			}
		}
		else if(givingLeftHoleHJ) {
			if(mainHoleIsHard) {
				if(orgasmlvl3) 
					faceArray.push(34);
				else if(orgasmlvl2) 
					faceArray.push(21);
				else
					faceArray.push(8);
			}
			else {
				if(orgasmlvl3) 
					faceArray.push(39);
				else if(orgasmlvl2) 
					faceArray.push(26);
				else
					faceArray.push(13);
			}
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(39);
			else if(orgasmlvl2) 
				faceArray.push(26);
			else
				faceArray.push(13);
		}
	}
	else if(karrynSwallowingCum) {
		if(givingBJ) {
			if(mainHoleIsHard) {
				if(swallowlvl3) 
					faceArray.push(32);
				else if(swallowlvl2) 
					faceArray.push(19);
				else
					faceArray.push(6);
			}
			else {
				if(swallowlvl3) 
					faceArray.push(29);
				else if(swallowlvl2) 
					faceArray.push(16);
				else
					faceArray.push(3);
			}
		}
	}
	else if(karrynGotBukkaked) {
		if(givingBJ) {
			if(mainHoleIsHard) {
				if(bukkakelvl3) 
					faceArray.push(32);
				else if(bukkakelvl2) 
					faceArray.push(19);
				else
					faceArray.push(6);
			}
			else {
				if(bukkakelvl3) 
					faceArray.push(29);
				else if(bukkakelvl2) 
					faceArray.push(16);
				else
					faceArray.push(3);
			}
		}
		else {
			if(mainHoleIsHard) {
				if(bukkakelvl3) 
					faceArray.push(34);
				else if(bukkakelvl2) 
					faceArray.push(21);
				else
					faceArray.push(8);
			}
			else {
				if(bukkakelvl3) 
					faceArray.push(39);
				else if(bukkakelvl2) 
					faceArray.push(26);
				else
					faceArray.push(13);
			}
		}
	}
	else if(givingBJ) {
		if(mainHoleIsHard) {
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(37);
				else if(generallvl2) 
					faceArray.push(24);
				else
					faceArray.push(11);
			}
			else {
				if(generallvl3) 
					faceArray.push(31);
				else if(generallvl2) 
					faceArray.push(18);
				else
					faceArray.push(5);
			}
		}
		else { //soft BJ
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(36);
				else if(generallvl2) 
					faceArray.push(23);
				else
					faceArray.push(10);
			}
			else {
				if(generallvl3) 
					faceArray.push(28);
				else if(generallvl2) 
					faceArray.push(15);
				else
					faceArray.push(2);
			}
		}
	}
	else if(givingLeftHoleHJ) {
		if(mainHoleIsHard) {
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(38);
				else if(generallvl2) 
					faceArray.push(25);
				else
					faceArray.push(12);
			}
			else {
				if(generallvl3) 
					faceArray.push(33);
				else if(generallvl2) 
					faceArray.push(20);
				else
					faceArray.push(7);
			}
		}
		else {
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(36);
				else if(generallvl2) 
					faceArray.push(22);
				else
					faceArray.push(9);
			}
			else {
				if(generallvl3) 
					faceArray.push(27);
				else if(generallvl2) 
					faceArray.push(14);
				else
					faceArray.push(1);
			}
		}
	}
	else if(karrynJustUsedCockPet || karrynJustUsedCockStare) {
		if(mainHoleIsHard) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(17);
			else
				faceArray.push(4);
		}
		else { //soft
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(1);
		}
	}
	else if(isMasturbating) {
		if(generallvl3) 
			faceArray.push(35);
		else if(generallvl2) 
			faceArray.push(22);
		else
			faceArray.push(9);
	}
	
	if(faceArray.length === 0) {
		if(mainHoleIsHard) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(17);
			else
				faceArray.push(4);
		}
		else {
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah1');
		mouthArray.push('be1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('sita3');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah1');
		mouthArray.push('ah3');
		mouthArray.push('be4');
		mouthArray.push('be3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		mouthArray.push('be4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		mouthArray.push('be4');
		mouthArray.push('rero1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ah3');
		mouthArray.push('be3');
		mouthArray.push('be4');
		mouthArray.push('be5');
		mouthArray.push('rero1');
		mouthArray.push('rero2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 34) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 35) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('ahe1');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		mouthArray.push('be5');
		mouthArray.push('pero1');
		mouthArray.push('rero2');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 36) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 37) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 38) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 39) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be2');
		mouthArray.push('be4');
		mouthArray.push('be5');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('rero1');
		mouthArray.push('rero2');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(2);
		else this.setTachieSweat(1);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	
	if(!leftHoleIsEmpty && !givingBJ && this.tachieLeftHole.includes('hard_') && !this.tachieLeftHole.includes('_pet_') && !this.tachieLeftHole.includes('_hj_')) {
		this.resetTachieMouth();
	}
	else if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	else {
		this.resetTachieMouth();
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

//Sit Right
Game_Actor.prototype.emoteGloryToiletSitRightPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isNaked = !this.isWearingGlovesAndHat();
	
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	
	let isMasturbating = this.tachieRightArm.includes('chikubi') || this.tachieRightArm.includes('kuri') || this.tachieRightArm.includes('manko');
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let mainHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused();
	let mainHoleIsSoft = !rightHoleIsEmpty && !$gameTroop._gloryRightStall.isAroused();
	let mainHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_RIGHT_STALL_ID;
	
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let swallowReactionScore = this.getSwallowReactionScore();
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
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
				rightHoleName += 'pet_';
				this.setTachieLeftArm('pet');
			}
		}
		else if(karrynJustUsedCockPet) {
			rightHoleName += 'pet_';
			this.setTachieLeftArm('pet');
		}
		else {
			this.toiletBattle_resetLeftArmToNormal();
		}
		
		if(givingBJ && !rightHoleEnemy.isAroused()) {
			rightHoleName += 'bj_';
		}
		
		if(rightHoleName.includes('hard_pet'))
			this.setTachieSemenHoleRightExtension('hard_');
		else
			this.setTachieSemenHoleRightExtension(rightHoleName);
		
		rightHoleName += rightHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			rightHoleName += '_cen';
		
		this.setTachieRightHole(rightHoleName);
		
		this.setMaxTachieSemenHoleRightId(1);
	}
	else {
		this.resetTachieRightHole();
		this.setMaxTachieSemenHoleRightId(0);
		this.resetTachieSemenHoleRightExtension();
	}
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(leftHoleEnemy.isAroused())
			leftHoleName += 'hard_';
		else
			leftHoleName += 'soft_';
		
		this.setTachieSemenHoleLeftExtension(leftHoleName);
		
		leftHoleName += leftHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			leftHoleName += '_cen';
		
		this.setTachieLeftHole(leftHoleName);
		this.setMaxTachieSemenHoleLeftId(1);
	}
	else {
		this.resetTachieLeftHole();
		this.setMaxTachieSemenHoleLeftId(0);
	}
	
	let rightArmIsNeutral = !this.tachieRightArm.includes('kuri') && !this.tachieRightArm.includes('manko');
	let putRightArmOnThigh = generallvl3 && rightArmIsNeutral;
	let boobsAreBeingTouched = this.tachieRightArm.includes('chikubi');
	
	//Legs
	
	let tachieLegName = '';
	let tachieBoobsName = '';
	
	if(legsAreSpread || boobsAreBeingTouched) {
		this.setHasTachiePubic(true);
		tachieLegName = 'spread';
		if(boobsAreBeingTouched) {
			tachieBoobsName = 'spread_chikubi';
			this.setTachieSemenBoobsExtension('spread_chikubi_');
		}
		else {
			tachieBoobsName = 'spread_normal';
			this.setTachieSemenBoobsExtension('spread_normal_');
			if(putRightArmOnThigh) {
				this.setTachieRightArm('thigh');
			}
			else if(rightArmIsNeutral) {
				this.setTachieRightArm('legs_spread');
			}
		}
		
		this.resetTachieSemenButtExtension();
		this.setTachieSemenCrotchExtension('spread_');
		this.setTachieSemenWetExtension('spread_');
		this.setTachieSemenLeftLegExtension('spread_');
		this.setTachieSemenRightLegExtension('spread_');
		
		this.setMaxTachieSemenButtId(0);
		this.setMaxTachieSemenCrotchId(1);
	}
	else {
		tachieBoobsName = 'close';
		this.setTachieSemenBoobsExtension('close_');
		tachieLegName = 'close';
		if(rightArmIsNeutral) {
			this.setTachieRightArm('legs_close');
		}
		
		this.setTachieSemenButtExtension('close_');
		this.resetTachieSemenCrotchExtension();
		this.setTachieSemenWetExtension('close_');
		this.setTachieSemenLeftLegExtension('close_');
		this.setTachieSemenRightLegExtension('close_');
		
		this.setMaxTachieSemenButtId(1);
		this.setMaxTachieSemenCrotchId(0);
	}
	
	if(isNaked) {
		tachieLegName += '_naked';
	}
	if(tachieLegName.includes('spread') && Karryn.isCensored()) {
		tachieLegName += '_cen';
	}
	this.setTachieBoobs(tachieBoobsName);
	this.setTachieLegs(tachieLegName);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	
	//Mouth
	/*
	if(givingBJ) {
		if(!rightHoleIsEmpty) {
			if(!$gameTroop._gloryRightStall.isAroused()) {
				this.setMaxTachieSemenCockMouthId(0);
				this.resetTachieSemenCockMouthExtension();
			}
			else {
				this.setMaxTachieSemenCockMouthId(1);
				this.setTachieSemenCockMouthExtension('bj_1_');
			}
		}
		else {
			console.error('weird situation in sit_right, givingBJ but rightHoleIsEmpty');
		}
	}
	else {
		this.setMaxTachieSemenCockMouthId(0);
		this.resetTachieSemenCockMouthExtension();
	}
	*/
	
	//Naked 
	
	if(isNaked) {
		if(this.tachieRightArm.includes('legs')) {
			this.setTachieRightArm('legs_naked');
		}
		else if(this.tachieRightArm.includes('kuri')) {
			this.setTachieRightArm('kuri_naked');
		}
		else if(this.tachieRightArm.includes('manko')) {
			this.setTachieRightArm('manko_naked');
		}
		else if(this.tachieRightArm.includes('thigh')) {
			this.setTachieRightArm('thigh_naked');
		}
		
		if(this.tachieLeftArm.includes('hj')) {
			this.setTachieLeftArm('hj_naked');
		}
		else if(this.tachieLeftArm.includes('normal')) {
			this.setTachieLeftArm('normal_naked');
		}
		else if(this.tachieLeftArm.includes('pet')) {
			this.setTachieLeftArm('pet_naked');
		}
		
		if(this.tachieBoobs.includes('spread_chikubi')) {
			this.setTachieBoobs('spread_chikubi_naked');
		}
		
		this.setTachieClitToyExtension_gloryBattle('naked_');
	}
		
	//Semen Extensions
	
	if(this.tachieRightArm.includes('close')) {
		this.setTachieSemenRightArmExtension('close_');
		this.setMaxTachieSemenRightArmId(1);
	}
		else if(this.tachieRightArm.includes('kuri')) {
		this.setTachieSemenRightArmExtension('kuri_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('chikubi')) {
		this.setTachieSemenRightArmExtension('spread_chikubi_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else if(this.tachieRightArm.includes('thigh')) {
		this.setTachieSemenRightArmExtension('thigh_');
		this.setMaxTachieSemenRightArmId(1);
	}
	else {
		this.setMaxTachieSemenRightArmId(0);
	}
	
	if(this.tachieLeftArm.includes('hj')) {
		this.setTachieSemenLeftArmExtension('hj_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('normal')) {
		this.setTachieSemenLeftArmExtension('normal_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else if(this.tachieLeftArm.includes('pet')) {
		this.setTachieSemenLeftArmExtension('pet_');
		this.setMaxTachieSemenLeftArmId(1);
	}
	else {
		this.setMaxTachieSemenLeftArmId(0);
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(givingBJ) {
			if(mainHoleIsHard) {
				if(orgasmlvl3) 
					faceArray.push(32);
				else if(orgasmlvl2) 
					faceArray.push(19);
				else
					faceArray.push(6);
			}
			else {
				if(orgasmlvl3) 
					faceArray.push(29);
				else if(orgasmlvl2) 
					faceArray.push(16);
				else
					faceArray.push(3);
			}
		}
		else if(givingRightHoleHJ) {
			if(mainHoleIsHard) {
				if(orgasmlvl3) 
					faceArray.push(34);
				else if(orgasmlvl2) 
					faceArray.push(21);
				else
					faceArray.push(8);
			}
			else {
				if(orgasmlvl3) 
					faceArray.push(39);
				else if(orgasmlvl2) 
					faceArray.push(26);
				else
					faceArray.push(13);
			}
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(39);
			else if(orgasmlvl2) 
				faceArray.push(26);
			else
				faceArray.push(13);
		}
	}
	else if(karrynSwallowingCum) {
		if(givingBJ) {
			if(mainHoleIsHard) {
				if(swallowlvl3) 
					faceArray.push(32);
				else if(swallowlvl2) 
					faceArray.push(19);
				else
					faceArray.push(6);
			}
			else {
				if(swallowlvl3) 
					faceArray.push(29);
				else if(swallowlvl2) 
					faceArray.push(16);
				else
					faceArray.push(3);
			}
		}
	}
	else if(karrynGotBukkaked) {
		if(givingBJ) {
			if(mainHoleIsHard) {
				if(bukkakelvl3) 
					faceArray.push(32);
				else if(bukkakelvl2) 
					faceArray.push(19);
				else
					faceArray.push(6);
			}
			else {
				if(bukkakelvl3) 
					faceArray.push(29);
				else if(bukkakelvl2) 
					faceArray.push(16);
				else
					faceArray.push(3);
			}
		}
		else {
			if(mainHoleIsHard) {
				if(bukkakelvl3) 
					faceArray.push(34);
				else if(bukkakelvl2) 
					faceArray.push(21);
				else
					faceArray.push(8);
			}
			else {
				if(bukkakelvl3) 
					faceArray.push(39);
				else if(bukkakelvl2) 
					faceArray.push(26);
				else
					faceArray.push(13);
			}
		}
	}
	else if(givingBJ) {
		if(mainHoleIsHard) {
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(37);
				else if(generallvl2) 
					faceArray.push(24);
				else
					faceArray.push(11);
			}
			else {
				if(generallvl3) 
					faceArray.push(31);
				else if(generallvl2) 
					faceArray.push(18);
				else
					faceArray.push(5);
			}
		}
		else { //soft BJ
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(36);
				else if(generallvl2) 
					faceArray.push(23);
				else
					faceArray.push(10);
			}
			else {
				if(generallvl3) 
					faceArray.push(28);
				else if(generallvl2) 
					faceArray.push(15);
				else
					faceArray.push(2);
			}
		}
	}
	else if(givingRightHoleHJ) {
		if(mainHoleIsHard) {
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(38);
				else if(generallvl2) 
					faceArray.push(25);
				else
					faceArray.push(12);
			}
			else {
				if(generallvl3) 
					faceArray.push(33);
				else if(generallvl2) 
					faceArray.push(20);
				else
					faceArray.push(7);
			}
		}
		else {
			if(isMasturbating) {
				if(generallvl3) 
					faceArray.push(36);
				else if(generallvl2) 
					faceArray.push(22);
				else
					faceArray.push(9);
			}
			else {
				if(generallvl3) 
					faceArray.push(27);
				else if(generallvl2) 
					faceArray.push(14);
				else
					faceArray.push(1);
			}
		}
	}
	else if(karrynJustUsedCockPet || karrynJustUsedCockStare) {
		if(mainHoleIsHard) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(17);
			else
				faceArray.push(4);
		}
		else { //soft
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(1);
		}
	}
	else if(isMasturbating) {
		if(generallvl3) 
			faceArray.push(35);
		else if(generallvl2) 
			faceArray.push(22);
		else
			faceArray.push(9);
	}
	
	if(faceArray.length === 0) {
		if(mainHoleIsHard) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(17);
			else
				faceArray.push(4);
		}
		else {
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(14);
			else
				faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah1');
		mouthArray.push('be1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('toji1');
		eyesArray.push('sita3');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah1');
		mouthArray.push('ah3');
		mouthArray.push('be4');
		mouthArray.push('be3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		mouthArray.push('be4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('sita3');
		eyesArray.push('ahe1');
		eyesArray.push('toji1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		mouthArray.push('be4');
		mouthArray.push('rero1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ah3');
		mouthArray.push('be3');
		mouthArray.push('be4');
		mouthArray.push('be5');
		mouthArray.push('rero1');
		mouthArray.push('rero2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 34) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 35) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('ahe1');
		mouthArray.push('ah1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be1');
		mouthArray.push('be2');
		mouthArray.push('be3');
		mouthArray.push('be5');
		mouthArray.push('pero1');
		mouthArray.push('rero2');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 36) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 37) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 38) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 39) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('ah2');
		mouthArray.push('ah3');
		mouthArray.push('be2');
		mouthArray.push('be4');
		mouthArray.push('be5');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('rero1');
		mouthArray.push('rero2');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(2);
		else this.setTachieSweat(1);
	}
	
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	
	if(!rightHoleIsEmpty && !givingBJ && this.tachieRightHole.includes('hard_') && !this.tachieRightHole.includes('_pet_') && !this.tachieRightHole.includes('_hj_')) {
		this.resetTachieMouth();
	}
	else if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	else {
		this.resetTachieMouth();
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

//Stand Left
Game_Actor.prototype.emoteGloryToiletStandLeftPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isNaked = !this.isWearingGlovesAndHat();
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingRightHoleHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let mainHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused();
	let mainHoleIsSoft = !leftHoleIsEmpty && !$gameTroop._gloryLeftStall.isAroused();
	let faceHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused();
	let faceHoleIsSoft = !rightHoleIsEmpty && !$gameTroop._gloryRightStall.isAroused();
	let mainHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_LEFT_STALL_ID;
	let faceHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_RIGHT_STALL_ID;
	
	let isMasturbating = this.tachieLeftArm.includes('chikubi');
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let lastHitToy = this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	
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
	
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(rightHoleEnemy.isAroused()) {
			rightHoleName += 'hard_';
		}
		else {
			rightHoleName += 'soft_';
		}
		
		if(givingBJ) {
			if(!rightHoleEnemy.isAroused()) {
				rightHoleName += 'bj_';
			}
		}
		
		if(givingRightHoleHJ) {
			if(rightHoleEnemy.isAroused()) {
				if(!givingBJ || (givingBJ && rightHoleEnemy.isAroused()))
					rightHoleName += 'hj_';
				this.setTachieLeftArm('hj');
			}
			else {
				if(!givingBJ || (givingBJ && rightHoleEnemy.isAroused()))
					rightHoleName += 'pet_';
				this.setTachieLeftArm('pet');
			}
			leftArmIsChikubi = false;
		}
		else if(karrynJustUsedCockPet) {
			if(!givingBJ || (givingBJ && rightHoleEnemy.isAroused()))
				rightHoleName += 'pet_';
			this.setTachieLeftArm('pet');
			leftArmIsChikubi = false;
		}
		else {
			if(leftArmIsChikubi) 
				this.setTachieLeftArm('chikubi');
			else
				this.toiletBattle_resetLeftArmToNormal();
		}
		
		
		rightHoleName += rightHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			rightHoleName += '_cen';
			
		this.setTachieRightHole(rightHoleName);
		
		if(rightHoleEnemy.isAroused()) {
			if(givingRightHoleHJ)
				this.setTachieSemenHoleRightExtension('hard_hj_');
			else
				this.setTachieSemenHoleRightExtension('hard_');
		}
		else {
			if(givingBJ) {
				if(karrynJustUsedCockPet || givingRightHoleHJ)
					this.setTachieSemenHoleRightExtension('soft_pet_bj_');
				else
					this.setTachieSemenHoleRightExtension('soft_bj_');
			}
			else if(karrynJustUsedCockPet || givingRightHoleHJ)
				this.setTachieSemenHoleRightExtension('soft_pet_');
			else
				this.setTachieSemenHoleRightExtension('soft_');
		}
		
		this.setMaxTachieSemenHoleRightId(1);
	}
	else {
		this.resetTachieRightHole();
		this.setMaxTachieSemenHoleRightId(0);
		
		if(leftArmIsChikubi) 
			this.setTachieLeftArm('chikubi');
		else
			this.toiletBattle_resetLeftArmToNormal();
	}
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(leftHoleEnemy.isAroused()) {
			if(pussyInserted) {
				leftHoleName += 'manko_';
				this.setTachieBody('high');
				this.setTachieSemenHoleLeftExtension('manko_');
			}
			else if(analInserted) {
				leftHoleName += 'anaru_';
				this.setTachieBody('low');
				this.setTachieSemenHoleLeftExtension('anaru_');
			}
			else {
				if(this.tachieBody.includes('low')) {
					leftHoleName += 'hard_low_';
					this.setTachieSemenHoleLeftExtension('hard_low_');
				}
				else {
					leftHoleName += 'hard_high_';
					this.setTachieSemenHoleLeftExtension('hard_high_');
				}
			}
			
		}
		else {
			leftHoleName += 'soft_';
			this.setTachieSemenHoleLeftExtension('soft_');
		}
		
		leftHoleName += leftHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			leftHoleName += '_cen';
		
		this.setTachieLeftHole(leftHoleName);
		
		this.setMaxTachieSemenHoleLeftId(1);
	}
	else {
		this.resetTachieLeftHole();
		this.setMaxTachieSemenHoleLeftId(0);
		this.resetTachieSemenHoleLeftExtension();
	}
	
	let bodyIsLow = this.tachieBody.includes('low');
	let bodyIsHigh = this.tachieBody.includes('high');
	
	if(leftArmIsChikubi) {
		this.setTachieBoobs('chikubi');
		this.setTachieSemenBoobsExtension('chikubi_');
		this.setTachieSemenLeftArmExtension('chikubi_');
	}
	else {
		this.setTachieBoobs('normal');
		
		this.setTachieSemenBoobsExtension('normal_');
			
		if(this.tachieLeftArm.includes('hj')) {
			this.setTachieSemenLeftArmExtension('hj_');
		}
		else if(this.tachieLeftArm.includes('pet')) {
			this.setTachieSemenLeftArmExtension('pet_');
		}	
		else {
			this.setTachieSemenLeftArmExtension('normal_');
		}

	}
	
	if(bodyIsLow) {
		this.setTachiePubicExtension('low_');
		
		this.setTachieSemenRightLegExtension('low_');
		this.setTachieSemenLeftLegExtension('low_');
		this.setTachieSemenBackExtension('low_');
		this.setTachieSemenBellyExtension('low_');
		this.setTachieSemenButtExtension('low_');
		this.setTachieSemenAnalExtension('low_');
		this.setTachieSemenCrotchExtension('low_');
		this.setTachieSemenWetExtension('low_');
		
		this.setTachiePussyToyExtension_gloryBattle('low_');
		this.setTachieAnalToyExtension_gloryBattle('low_');
		
		if(isNaked)
			this.setTachieClitToyExtension_gloryBattle('low_naked_');
		else
			this.setTachieClitToyExtension_gloryBattle('low_');
	}
	else {
		this.setTachiePubicExtension('high_');
		
		this.setTachieSemenRightLegExtension('high_');
		this.setTachieSemenLeftLegExtension('high_');
		this.setTachieSemenBackExtension('high_');
		this.setTachieSemenBellyExtension('high_');
		this.setTachieSemenButtExtension('high_');
		this.setTachieSemenAnalExtension('high_');
		this.setTachieSemenCrotchExtension('high_');
		this.setTachieSemenWetExtension('high_');
		
		this.setTachiePussyToyExtension_gloryBattle('high_');
		this.setTachieAnalToyExtension_gloryBattle('high_');
		
		if(isNaked)
			this.setTachieClitToyExtension_gloryBattle('high_naked_');
		else
			this.setTachieClitToyExtension_gloryBattle('high_');
	}
	
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieWetId(1);
	
	if(isNaked) {
		this.setTachieRightArm('normal_naked');
		
		if(bodyIsLow)
			this.setTachieBody('low_naked');
		else if(bodyIsHigh)
			this.setTachieBody('high_naked');
			
		if(this.tachieLeftArm.includes('chikubi')) {
			this.setTachieBoobs('chikubi_naked');
		}
		else if(this.tachieLeftArm.includes('hj')) {
			this.setTachieLeftArm('hj_naked');
		}
		else if(this.tachieLeftArm.includes('normal')) {
			this.setTachieLeftArm('normal_naked');
		}
		else if(this.tachieLeftArm.includes('pet')) {
			this.setTachieLeftArm('pet_naked');
		}
	}
	else {
		this.setTachieRightArm('normal');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed || this.justOrgasmed()) {
		if(givingBJ) {
			if(faceHoleIsHard) {
				if(orgasmlvl3) 
					faceArray.push(34);
				else if(orgasmlvl2) 
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else {
				if(orgasmlvl3) 
					faceArray.push(32);
				else if(orgasmlvl2) 
					faceArray.push(20);
				else
					faceArray.push(8);
			}
		}
		else if(givingRightHoleHJ && faceHoleIsHard) {
			if(orgasmlvl3) 
				faceArray.push(36);
			else if(orgasmlvl2) 
				faceArray.push(24);
			else
				faceArray.push(12);
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(30);
			else if(orgasmlvl2) 
				faceArray.push(18);
			else
				faceArray.push(6);
			
		}
	}
	else if(justGotPussyCreampie) { 
		if(givingBJ) {
			if(faceHoleIsHard) {
				if(pussyCreampielvl3) 
					faceArray.push(34);
				else if(pussyCreampielvl2) 
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else {
				if(pussyCreampielvl3) 
					faceArray.push(32);
				else if(pussyCreampielvl2) 
					faceArray.push(20);
				else
					faceArray.push(8);
			}
		}
		else {
			if(pussyCreampielvl3) 
				faceArray.push(29);
			else if(pussyCreampielvl2) 
				faceArray.push(17);
			else
				faceArray.push(5);
		}	
	}
	else if(justGotAnalCreampie) {
		if(givingBJ) {
			if(faceHoleIsHard) {
				if(analCreampielvl3) 
					faceArray.push(34);
				else if(analCreampielvl2) 
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else {
				if(analCreampielvl3) 
					faceArray.push(32);
				else if(analCreampielvl2) 
					faceArray.push(20);
				else
					faceArray.push(8);
			}
		}
		else {
			if(analCreampielvl3) 
				faceArray.push(29);
			else if(analCreampielvl2) 
				faceArray.push(17);
			else
				faceArray.push(5);
		}
	}
	else if(karrynSwallowingCum) {
		if(swallowlvl3) 
			faceArray.push(34);
		else if(swallowlvl2) 
			faceArray.push(22);
		else
			faceArray.push(10);
	}
	else if(karrynGotBukkaked) {
		if(mainHoleJustEjaculated) { 
			if(givingBJ) {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(34);
					else if(bukkakelvl2) 
						faceArray.push(22);
					else
						faceArray.push(10);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(32);
					else if(bukkakelvl2) 
						faceArray.push(20);
					else
						faceArray.push(8);
				}
			}
			else {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(36);
					else if(bukkakelvl2) 
						faceArray.push(24);
					else
						faceArray.push(12);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(29);
					else if(bukkakelvl2) 
						faceArray.push(17);
					else
						faceArray.push(5);
				}
			}
		}
		else {
			if(givingBJ) {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(34);
					else if(bukkakelvl2) 
						faceArray.push(22);
					else
						faceArray.push(10);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(32);
					else if(bukkakelvl2) 
						faceArray.push(20);
					else
						faceArray.push(8);
				}
			}
			else {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(36);
					else if(bukkakelvl2) 
						faceArray.push(24);
					else
						faceArray.push(12);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(30);
					else if(bukkakelvl2) 
						faceArray.push(18);
					else
						faceArray.push(6);
				}
			}
		}
	}
	else if(givingBJ) {
		if(faceHoleIsHard) {
			if(generallvl3) 
				faceArray.push(33);
			else if(generallvl2) 
				faceArray.push(21);
			else
				faceArray.push(9);
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
	else if(karrynJustUsedCockPet || karrynJustUsedCockStare) {
		if(faceHoleIsHard) {
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
	else if(lastHitPussySex || lastHitAnalSex || lastHitToy) {
		if(generallvl3) 
			faceArray.push(27);
		else if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(3);
	}
	else if(lastHitHandjob && faceHoleIsHard) {
		if(generallvl3) 
			faceArray.push(35);
		else if(generallvl2) 
			faceArray.push(23);
		else
			faceArray.push(11);
	}
	
	if(faceArray.length === 0) {
		if(isMasturbating) {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(4);
		}
		if(givingRightHoleHJ && faceHoleIsHard) {
			if(generallvl3) 
				faceArray.push(35);
			else if(generallvl2) 
				faceArray.push(23);
			else
				faceArray.push(11);
		}
		if(pussyInserted || analInserted) {
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(15);
			else
				faceArray.push(3);
		}
	}
	
	if(faceArray.length === 0) {
		if(generallvl3) 
			faceArray.push(27);
		else if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(3);
			
		if(generallvl3) 
			faceArray.push(25);
		else if(generallvl2) 
			faceArray.push(13);
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
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae1');
		eyesArray.push('urusita1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.33) this.setTachieSweat(2);
		else if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.33) this.setTachieSweat(2);
		else if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft3');
		mouthArray.push('fera_soft4');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		mouthArray.push('fera_soft4');
		this.setTachieHoppe(1);
		if(Math.random() < 0.33) this.setTachieSweat(2);
		else if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		mouthArray.push('fera_hard5');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 34) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		mouthArray.push('fera_hard5');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 35) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 36) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		let mouthName = mouthArray[Math.randomInt(mouthArray.length)];
		if(this.tachieRightHole.includes('hard') && !mouthName.includes('fera')) {
			this.resetTachieMouth();
			this.setTachieFrontA('ago');
		}
		else {
			this.resetTachieFrontA();
			this.setTachieMouth(mouthName);
		}
	}
	else {
		this.resetTachieMouth();
		this.setTachieFrontA('ago');
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

//Stand Right
Game_Actor.prototype.emoteGloryToiletStandRightPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isNaked = !this.isWearingGlovesAndHat();
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let givingLeftHoleHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let mainHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused();
	let mainHoleIsSoft = !rightHoleIsEmpty && !$gameTroop._gloryRightStall.isAroused();
	let faceHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused();
	let faceHoleIsSoft = !leftHoleIsEmpty && !$gameTroop._gloryLeftStall.isAroused();
	let mainHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_RIGHT_STALL_ID;
	let faceHoleJustEjaculated = $gameTroop._gloryLastHoleToEjaculate === GLORY_LEFT_STALL_ID;
	
	let isMasturbating = this.tachieRightArm.includes('chikubi');
	let karrynJustUsedCockPet = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PETTING);
	let karrynJustUsedCockStare = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_COCK_STARE);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let lastHitToy = this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	
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
	
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	
	if(!leftHoleIsEmpty) {
		let leftHoleName = '';
		let leftHoleEnemy = $gameTroop._gloryLeftStall;
		
		if(leftHoleEnemy.isAroused()) {
			leftHoleName += 'hard_';
		}
		else {
			leftHoleName += 'soft_';
		}
		
		if(givingBJ) {
			if(!leftHoleEnemy.isAroused()) {
				leftHoleName += 'bj_';
			}
		}
		
		if(givingLeftHoleHJ) {
			if(leftHoleEnemy.isAroused()) {
				if(!givingBJ || (givingBJ && leftHoleEnemy.isAroused()))
					leftHoleName += 'hj_';
				this.setTachieRightArm('hj');
			}
			else {
				if(!givingBJ || (givingBJ && leftHoleEnemy.isAroused()))
					leftHoleName += 'pet_';
				this.setTachieRightArm('pet');
			}
			rightArmIsChikubi = false;
		}
		else if(karrynJustUsedCockPet) {
			if(!givingBJ || (givingBJ && leftHoleEnemy.isAroused()))
				leftHoleName += 'pet_';
			this.setTachieRightArm('pet');
			rightArmIsChikubi = false;
		}
		else {
			if(rightArmIsChikubi) 
				this.setTachieRightArm('chikubi');
			else
				this.toiletBattle_resetRightArmToNormal();
		}
		
		
		leftHoleName += leftHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			leftHoleName += '_cen';

		this.setTachieLeftHole(leftHoleName);
		
		if(leftHoleEnemy.isAroused()) {
			if(givingLeftHoleHJ)
				this.setTachieSemenHoleLeftExtension('hard_hj_');
			else
				this.setTachieSemenHoleLeftExtension('hard_');
		}
		else {
			if(givingBJ) {
				if(karrynJustUsedCockPet || givingLeftHoleHJ)
					this.setTachieSemenHoleLeftExtension('soft_pet_bj_');
				else
					this.setTachieSemenHoleLeftExtension('soft_bj_');
			}
			else if(karrynJustUsedCockPet || givingLeftHoleHJ)
				this.setTachieSemenHoleLeftExtension('soft_pet_');
			else
				this.setTachieSemenHoleLeftExtension('soft_');
		}
		
		this.setMaxTachieSemenHoleLeftId(1);
	}
	else {
		this.resetTachieLeftHole();
		this.setMaxTachieSemenHoleLeftId(0);
		
		if(rightArmIsChikubi) 
			this.setTachieRightArm('chikubi');
		else
			this.toiletBattle_resetRightArmToNormal();
	}
	
	if(!rightHoleIsEmpty) {
		let rightHoleName = '';
		let rightHoleEnemy = $gameTroop._gloryRightStall;
		
		if(rightHoleEnemy.isAroused()) {
			if(pussyInserted) {
				rightHoleName += 'manko_';
				this.setTachieBody('high');
				this.setTachieSemenHoleRightExtension('manko_');
			}
			else if(analInserted) {
				rightHoleName += 'anaru_';
				this.setTachieBody('low');
				this.setTachieSemenHoleRightExtension('anaru_');
			}
			else {
				if(this.tachieBody.includes('low')) {
					rightHoleName += 'hard_low_';
					this.setTachieSemenHoleRightExtension('hard_low_');
				}
				else {
					rightHoleName += 'hard_high_';
					this.setTachieSemenHoleRightExtension('hard_high_');
				}
			}
			
		}
		else {
			rightHoleName += 'soft_';
			this.setTachieSemenHoleRightExtension('soft_');
		}
		
		rightHoleName += rightHoleEnemy.enemyCock();
		if(Karryn.isCensored())
			rightHoleName += '_cen';
		
		this.setTachieRightHole(rightHoleName);
		
		this.setMaxTachieSemenHoleRightId(1);
	}
	else {
		this.resetTachieRightHole();
		this.setMaxTachieSemenHoleRightId(0);
		this.resetTachieSemenHoleRightExtension();
	}
	
	let bodyIsLow = this.tachieBody.includes('low');
	let bodyIsHigh = this.tachieBody.includes('high');
	
	if(rightArmIsChikubi) {
		this.setTachieBoobs('chikubi');
		this.setTachieSemenBoobsExtension('chikubi_');
		this.setTachieSemenRightArmExtension('chikubi_');
	}
	else {
		this.setTachieBoobs('normal');
		

		this.setTachieSemenBoobsExtension('normal_');
			
		if(this.tachieRightArm.includes('hj')) {
			this.setTachieSemenRightArmExtension('hj_');
		}
		else if(this.tachieRightArm.includes('pet')) {
			this.setTachieSemenRightArmExtension('pet_');
		}	
		else {
			this.setTachieSemenRightArmExtension('normal_');
		}

	}
	
	if(bodyIsLow) {
		this.setTachiePubicExtension('low_');
		
		this.setTachieSemenRightLegExtension('low_');
		this.setTachieSemenLeftLegExtension('low_');
		this.setTachieSemenBackExtension('low_');
		this.setTachieSemenBellyExtension('low_');
		this.setTachieSemenButtExtension('low_');
		this.setTachieSemenAnalExtension('low_');
		this.setTachieSemenCrotchExtension('low_');
		this.setTachieSemenWetExtension('low_');
		
		this.setTachiePussyToyExtension_gloryBattle('low_');
		this.setTachieAnalToyExtension_gloryBattle('low_');
		
		if(isNaked)
			this.setTachieClitToyExtension_gloryBattle('low_naked_');
		else
			this.setTachieClitToyExtension_gloryBattle('low_');
	}
	else {
		this.setTachiePubicExtension('high_');
		
		this.setTachieSemenRightLegExtension('high_');
		this.setTachieSemenLeftLegExtension('high_');
		this.setTachieSemenBackExtension('high_');
		this.setTachieSemenBellyExtension('high_');
		this.setTachieSemenButtExtension('high_');
		this.setTachieSemenAnalExtension('high_');
		this.setTachieSemenCrotchExtension('high_');
		this.setTachieSemenWetExtension('high_');
		
		
		this.setTachiePussyToyExtension_gloryBattle('high_');
		this.setTachieAnalToyExtension_gloryBattle('high_');
		
		if(isNaked)
			this.setTachieClitToyExtension_gloryBattle('high_naked_');
		else
			this.setTachieClitToyExtension_gloryBattle('high_');
	}
	
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieWetId(1);
	
	if(isNaked) {
		this.setTachieLeftArm('normal_naked');
		
		if(bodyIsLow)
			this.setTachieBody('low_naked');
		else if(bodyIsHigh)
			this.setTachieBody('high_naked');
			
		if(this.tachieRightArm.includes('chikubi')) {
			this.setTachieBoobs('chikubi_naked');
		}
		else if(this.tachieRightArm.includes('hj')) {
			this.setTachieRightArm('hj_naked');
		}
		else if(this.tachieRightArm.includes('normal')) {
			this.setTachieRightArm('normal_naked');
		}
		else if(this.tachieRightArm.includes('pet')) {
			this.setTachieRightArm('pet_naked');
		}
	}
	else {
		this.setTachieLeftArm('normal');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed || this.justOrgasmed()) {
		if(givingBJ) {
			if(faceHoleIsHard) {
				if(orgasmlvl3) 
					faceArray.push(34);
				else if(orgasmlvl2) 
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else {
				if(orgasmlvl3) 
					faceArray.push(32);
				else if(orgasmlvl2) 
					faceArray.push(20);
				else
					faceArray.push(8);
			}
		}
		else if(givingLeftHoleHJ && faceHoleIsHard) {
			if(orgasmlvl3) 
				faceArray.push(36);
			else if(orgasmlvl2) 
				faceArray.push(24);
			else
				faceArray.push(12);
		}
		else {
			if(orgasmlvl3) 
				faceArray.push(30);
			else if(orgasmlvl2) 
				faceArray.push(18);
			else
				faceArray.push(6);
			
		}
	}
	else if(justGotPussyCreampie) { 
		if(givingBJ) {
			if(faceHoleIsHard) {
				if(pussyCreampielvl3) 
					faceArray.push(34);
				else if(pussyCreampielvl2) 
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else {
				if(pussyCreampielvl3) 
					faceArray.push(32);
				else if(pussyCreampielvl2) 
					faceArray.push(20);
				else
					faceArray.push(8);
			}
		}
		else {
			if(pussyCreampielvl3) 
				faceArray.push(29);
			else if(pussyCreampielvl2) 
				faceArray.push(17);
			else
				faceArray.push(5);
		}	
	}
	else if(justGotAnalCreampie) {
		if(givingBJ) {
			if(faceHoleIsHard) {
				if(analCreampielvl3) 
					faceArray.push(34);
				else if(analCreampielvl2) 
					faceArray.push(22);
				else
					faceArray.push(10);
			}
			else {
				if(analCreampielvl3) 
					faceArray.push(32);
				else if(analCreampielvl2) 
					faceArray.push(20);
				else
					faceArray.push(8);
			}
		}
		else {
			if(analCreampielvl3) 
				faceArray.push(29);
			else if(analCreampielvl2) 
				faceArray.push(17);
			else
				faceArray.push(5);
		}
	}
	else if(karrynSwallowingCum) {
		if(faceHoleIsHard) {
			if(swallowlvl3) 
				faceArray.push(34);
			else if(swallowlvl2) 
				faceArray.push(22);
			else
				faceArray.push(10);
		}
		else {
			if(swallowlvl3) 
				faceArray.push(32);
			else if(swallowlvl2) 
				faceArray.push(20);
			else
				faceArray.push(8);
		}
	}
	else if(karrynGotBukkaked) {
		if(mainHoleJustEjaculated) { 
			if(givingBJ) {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(34);
					else if(bukkakelvl2) 
						faceArray.push(22);
					else
						faceArray.push(10);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(32);
					else if(bukkakelvl2) 
						faceArray.push(20);
					else
						faceArray.push(8);
				}
			}
			else {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(36);
					else if(bukkakelvl2) 
						faceArray.push(24);
					else
						faceArray.push(12);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(29);
					else if(bukkakelvl2) 
						faceArray.push(17);
					else
						faceArray.push(5);
				}
			}
		}
		else {
			if(givingBJ) {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(34);
					else if(bukkakelvl2) 
						faceArray.push(22);
					else
						faceArray.push(10);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(32);
					else if(bukkakelvl2) 
						faceArray.push(20);
					else
						faceArray.push(8);
				}
			}
			else {
				if(faceHoleIsHard) {
					if(bukkakelvl3) 
						faceArray.push(36);
					else if(bukkakelvl2) 
						faceArray.push(24);
					else
						faceArray.push(12);
				}
				else {
					if(bukkakelvl3) 
						faceArray.push(30);
					else if(bukkakelvl2) 
						faceArray.push(18);
					else
						faceArray.push(6);
				}
			}
		}
	}
	else if(givingBJ) {
		if(faceHoleIsHard) {
			if(generallvl3) 
				faceArray.push(33);
			else if(generallvl2) 
				faceArray.push(21);
			else
				faceArray.push(9);
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
	else if(karrynJustUsedCockPet || karrynJustUsedCockStare) {
		if(faceHoleIsHard) {
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
	else if(lastHitPussySex || lastHitAnalSex || lastHitToy) {
		if(generallvl3) 
			faceArray.push(27);
		else if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(3);
	}
	else if(lastHitHandjob && faceHoleIsHard) {
		if(generallvl3) 
			faceArray.push(35);
		else if(generallvl2) 
			faceArray.push(23);
		else
			faceArray.push(11);
	}
	
	if(faceArray.length === 0) {
		if(isMasturbating) {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(16);
			else
				faceArray.push(4);
		}
		if(givingLeftHoleHJ && faceHoleIsHard) {
			if(generallvl3) 
				faceArray.push(35);
			else if(generallvl2) 
				faceArray.push(23);
			else
				faceArray.push(11);
		}
		if(pussyInserted || analInserted) {
			if(generallvl3) 
				faceArray.push(27);
			else if(generallvl2) 
				faceArray.push(15);
			else
				faceArray.push(3);
		}
	}
	
	if(faceArray.length === 0) {
		if(generallvl3) 
			faceArray.push(27);
		else if(generallvl2) 
			faceArray.push(15);
		else
			faceArray.push(3);
			
		if(generallvl3) 
			faceArray.push(25);
		else if(generallvl2) 
			faceArray.push(13);
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
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ahe1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ku1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae1');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae1');
		eyesArray.push('urusita1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		this.setTachieHoppe(1);
		this.setTachieSweat(2);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('toji1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		mouthArray.push('ho2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.33) this.setTachieSweat(2);
		else if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		if(Math.random() < 0.33) this.setTachieSweat(2);
		else if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('fera_soft3');
		mouthArray.push('fera_soft4');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('ahe1');
		mouthArray.push('fera_soft1');
		mouthArray.push('fera_soft2');
		mouthArray.push('fera_soft3');
		mouthArray.push('fera_soft4');
		this.setTachieHoppe(1);
		if(Math.random() < 0.33) this.setTachieSweat(2);
		else if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		mouthArray.push('fera_hard5');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
	}
	else if(faceId === 34) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		eyesArray.push('toji1');
		mouthArray.push('fera_hard1');
		mouthArray.push('fera_hard2');
		mouthArray.push('fera_hard3');
		mouthArray.push('fera_hard4');
		mouthArray.push('fera_hard5');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	else if(faceId === 35) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 36) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		this.setTachieHoppe(1);
		if(Math.random() < 0.5) this.setTachieSweat(1);
		else this.setTachieSweat(2);
	}
	
	if(eyebrowsArray.length > 0) {
		this.setTachieEyebrows(eyebrowsArray[Math.randomInt(eyebrowsArray.length)]);
	}
	if(eyesArray.length > 0) {
		this.setTachieEyes(eyesArray[Math.randomInt(eyesArray.length)]);
	}
	if(mouthArray.length > 0) {
		let mouthName = mouthArray[Math.randomInt(mouthArray.length)];
		if(this.tachieLeftHole.includes('hard') && !mouthName.includes('fera')) {
			this.resetTachieMouth();
			this.setTachieFrontA('ago');
		}
		else {
			this.setTachieMouth(mouthName);
			this.resetTachieFrontA();
		}
	}
	else {
		this.resetTachieMouth();
		this.setTachieFrontA('ago');
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

// Stripper Intermission
Game_Actor.prototype.emoteStripperIntermissionPose = function() {
	this.setTachieFloorCondomId();
};
Game_Actor.prototype.setTachieFloorCondomId = function() {
	if(!this._stripper_stageCondomCount) {
		this.resetTachieCondomFloor();
	}
	else if(this._stripper_stageCondomCount < 3) {
		this.setTachieCondomFloor(1);
	}
	else if(this._stripper_stageCondomCount < 7) {
		this.setTachieCondomFloor(2);
	}
	else if(this._stripper_stageCondomCount < 11) {
		this.setTachieCondomFloor(3);
	}
	else if(this._stripper_stageCondomCount < 15) {
		this.setTachieCondomFloor(4);
	}
	else if(this._stripper_stageCondomCount < 19) {
		this.setTachieCondomFloor(5);
	}
	else if(this._stripper_stageCondomCount < 23) {
		this.setTachieCondomFloor(6);
	}
	else if(this._stripper_stageCondomCount < 27) {
		this.setTachieCondomFloor(7);
	}
	else if(this._stripper_stageCondomCount < 31) {
		this.setTachieCondomFloor(8);
	}
	else {
		this.setTachieCondomFloor(9);
	}
};

// Stripper Mouth
Game_Actor.prototype.emoteStripperMouthPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isWearingPanties = this.isWearingPanties();
	let isWearingOuterOutfit = this.clothingStage === 1;
	let isWearingBra = this.clothingStage <= 2;
	let metBlowjobDesireReqs = this.mouthDesire >= this.blowjobMouthDesireRequirement() && this.cockDesire >= this.blowjobCockDesireRequirement();
	
	
	let isStandby = this.isInStripperStandby();
	let firstSetup = this.isStateAffected(STATE_STRIPPER_MOUTH_POSE_SETUP_ID);
	let rightArmIsBefore = this.tachieRightArm.includes('before');
	let rightArmIsFera = this.tachieRightArm.includes('fera');
	let rightArmIsSuckFinger = this.tachieRightArm.includes('suck_fingers');
	let justStripped = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_STRIP_CLOTHES);
	let reactingToCondom = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOSSED_CONDOM_STAGE) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let patronCondomReactionScore = this.patronCondomReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let condomlvl3 = patronCondomReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let condomlvl2 = patronCondomReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(isWearingPanties) {
		this.setTachieBody(2);
		this.setTachiePanties(1);
	}
	else {
		this.setTachieBody(1);
		this.resetTachiePanties();
	}
	
	if(isWearingBra) {
		if(isAroused)
			this.setTachieBoobs('1_hard');
		else
			this.setTachieBoobs('1');
	}
	else {
		if(isAroused)
			this.setTachieBoobs('2_hard');
		else
			this.setTachieBoobs('2');
	}
	
	if(isWearingOuterOutfit) {
		this.setTachieBackA('outer_1');
		this.setTachieFrontA('outer_1');
	}
	else {
		this.resetTachieBackA();
		this.resetTachieFrontA();
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(17);
		else if(orgasmlvl2) 
			faceArray.push(10);
		else
			faceArray.push(4);
	}
	else if(reactingToCondom) {
		if(condomlvl3) 
			faceArray.push(16);
		else if(condomlvl2) 
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(justStripped) {
		if(generallvl3) 
			faceArray.push(12);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(2);
	}
	else if(isStandby) {
		if(generallvl3) 
			faceArray.push(11);
		else if(generallvl2) 
			faceArray.push(5);
		else
			faceArray.push(1);
	}
	else if(rightArmIsBefore) {
		if(generallvl3) {
			if(rightArmIsFera)
				faceArray.push(15);
			else
				faceArray.push(13);
		}
		else if(generallvl2) 
			faceArray.push(7);
		else
			faceArray.push(1);
	}
	else if(firstSetup) {
		if(generallvl3) {
			if(metBlowjobDesireReqs)
				faceArray.push(15);
			else
				faceArray.push(13);
		}
		else if(generallvl2) 
			faceArray.push(7);
		else
			faceArray.push(1);
	}
	else {
		if(generallvl3) {
			faceArray.push(11);
			faceArray.push(14);
		}
		else if(generallvl2) {
			faceArray.push(5);
			faceArray.push(9);
		}
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let leftArmArray = [];
	let rightArmArray = [];
	
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		rightArmArray.push('normal_1');
		leftArmArray.push('normal_1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		rightArmArray.push('up_1');
		leftArmArray.push('normal_1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		mouthArray.push('ku1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		if(rightArmIsBefore && !rightArmIsFera) rightArmArray.push('normal_1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		mouthArray.push('ku1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		rightArmArray.push('up_1');
		leftArmArray.push('normal_1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('mu2');
		mouthArray.push('chu1');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		rightArmArray.push('normal_1');
		rightArmArray.push('kiss_after_1');
		leftArmArray.push('normal_1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('mu2');
		mouthArray.push('chu1');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		rightArmArray.push('up_1');
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae3');
		if(firstSetup) {
			this.resetTachieMouth();
			rightArmArray.push('kiss_before_1');
		}
		else {
			mouthArray.push('chu1');
			mouthArray.push('chu2');
			rightArmArray.push('kiss_after_1');
		}
		leftArmArray.push('normal_1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		if(Math.random() < 0.5) rightArmArray.push('up_1');
		else if(rightArmIsBefore && !rightArmIsFera) rightArmArray.push('up_1');
		else if(rightArmIsSuckFinger) mouthArray = [];
		this.setTachieHoppe(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('suck1');
		mouthArray.push('suck2');
		rightArmArray.push('suck_fingers_1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		rightArmArray.push('up_1');
		rightArmArray.push('normal_1');
		leftArmArray.push('normal_1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('pero1');
		rightArmArray.push('kiss_after_1');
		rightArmArray.push('kiss_after_2');
		rightArmArray.push('up_1');
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		leftArmArray.push('pet_3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('nico5');
		mouthArray.push('pero1');
		rightArmArray.push('kiss_after_2');
		rightArmArray.push('up_1');
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		leftArmArray.push('pet_3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		if(firstSetup) {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
			this.resetTachieMouth();
			rightArmArray.push('kiss_before_1');
		}
		else {
			eyesArray.push('mae3');
			eyesArray.push('heartmae2');
			eyesArray.push('toji1');
			mouthArray.push('chu1');
			mouthArray.push('chu2');
			mouthArray.push('nico5');
			mouthArray.push('fera3');
			rightArmArray.push('kiss_after_2');
		}
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		leftArmArray.push('pet_3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae2');
		mouthArray.push('suck3');
		mouthArray.push('suck4');
		rightArmArray.push('suck_fingers_2');
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		leftArmArray.push('pet_3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		if(firstSetup) {
			this.resetTachieMouth();
			rightArmArray.push('fera_before_1');
		}
		else {
			rightArmArray.push('fera_after_1');
		}
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		leftArmArray.push('pet_3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('nico5');
		mouthArray.push('pero1');
		if(rightArmIsBefore && !rightArmIsFera) rightArmArray.push('up_1');
		else if(rightArmIsSuckFinger) mouthArray = [];
		leftArmArray.push('pet_1');
		leftArmArray.push('pet_2');
		leftArmArray.push('pet_3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		if(rightArmIsBefore && !rightArmIsFera) rightArmArray.push('up_1');
		else if(rightArmIsSuckFinger) mouthArray = [];
		leftArmArray.push('normal_1');
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
	if(rightArmArray.length > 0) {
		this.setTachieRightArm(rightArmArray[Math.randomInt(rightArmArray.length)]);
	}
	if(leftArmArray.length > 0) {
		this.setTachieLeftArm(leftArmArray[Math.randomInt(leftArmArray.length)]);
	}
	
	
	if(this.tachieRightArm === 'fera_before_1') {
		this.setTachieFrontB('rightarm_fera_before_1');
	}
	else if(this.tachieRightArm === 'fera_after_1') {
		this.setTachieFrontB('rightarm_fera_after_1');
	}
	else if(this.tachieRightArm === 'kiss_before_1') {
		this.setTachieFrontB('rightarm_kiss_before_1');
	}
	else if(this.tachieRightArm === 'suck_fingers_1') {
		this.setTachieFrontB('rightarm_suck_fingers_1');
	}
	else if(this.tachieRightArm === 'suck_fingers_2') {
		this.setTachieFrontB('rightarm_suck_fingers_2');
	}
	else {
		this.resetTachieFrontB();
	}
	
	if(this._stripper_beltCondomCount >= 4) {
		this.setTachieCondomBelt(4);
	}
	else if(this._stripper_beltCondomCount >= 1) {
		this.setTachieCondomBelt(this._stripper_beltCondomCount);
	}
	else {
		this.resetTachieCondomBelt();
	}
	
	if(this._stripper_braCondomCount >= 4 && isWearingBra) {
		this.setTachieCondomBra(4);
	}
	else if(this._stripper_braCondomCount >= 1 && isWearingBra) {
		this.setTachieCondomBra(this._stripper_braCondomCount);
	}
	else {
		this.resetTachieCondomBra();
	}
	
	if(this._stripper_nipplesCondomCount >= 1 && this._stripper_nipplesCondomCount <= 2) {
		if(isWearingBra)
			this.setTachieCondomChikubi('bra_' + this._stripper_nipplesCondomCount);
		else
			this.setTachieCondomChikubi('naked_' + this._stripper_nipplesCondomCount);
	}
	else {
		this.resetTachieCondomChikubi();
	}
	
	if(this._stripper_headCondomCount >= 4) {
		this.setTachieCondomHead(4);
	}
	else if(this._stripper_headCondomCount >= 1) {
		this.setTachieCondomHead(this._stripper_headCondomCount);
	}
	else {
		this.resetTachieCondomHead();
	}
	
	this.setTachieFloorCondomId();
	
	if(this.tachieCondomBra == 4) {
		this.setTachieBackC('kon_bra_4');
	}
	else {
		this.resetTachieBackC();
	}

	this.setAllowTachieEmoteUpdate(true);
};

// Stripper Boobs
Game_Actor.prototype.emoteStripperBoobsPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isWearingPanties = this.isWearingPanties();
	let isWearingOuterOutfit = this.clothingStage === 1;
	let isWearingBra = this.clothingStage <= 2;
	
	let justStripped = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_STRIP_CLOTHES);
	let reactingToCondom = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOSSED_CONDOM_STAGE) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let patronCondomReactionScore = this.patronCondomReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let condomlvl3 = patronCondomReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let condomlvl2 = patronCondomReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(isWearingPanties) {
		this.setTachieBody(1);
		this.setTachiePanties(1);
	}
	else {
		this.setTachieBody(2);
		this.resetTachiePanties();
	}
	
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(12);
		else if(orgasmlvl2) 
			faceArray.push(8);
		else
			faceArray.push(4);
	}
	else if(reactingToCondom) {
		if(condomlvl3) 
			faceArray.push(11);
		else if(condomlvl2) 
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(justStripped) {
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
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let boobsArray = [];
	let frontDArray = [];

	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('wa1');
		boobsArray.push('cover');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		boobsArray.push('cover');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('ku2');
		mouthArray.push('mu2');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		boobsArray.push('cover');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae2');
		mouthArray.push('ahe1');
		mouthArray.push('ho1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		boobsArray.push('cover');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('hu1');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		boobsArray.push('zuri');
		if(Math.random() < 0.6) frontDArray.push('1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero1');
		boobsArray.push('zuri');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('wa1');
		mouthArray.push('nico3');
		boobsArray.push('zuri');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		boobsArray.push('cover');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		boobsArray.push('zuri');
		if(Math.random() < 0.6) {
			frontDArray.push('1');
			frontDArray.push('2');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		boobsArray.push('zuri');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		boobsArray.push('zuri');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		mouthArray.push('wa3');
		mouthArray.push('ho1');
		boobsArray.push('cover');
		boobsArray.push('zuri');
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
	if(boobsArray.length > 0) {
		let boobsName = boobsArray[Math.randomInt(boobsArray.length)]
		if(isWearingBra) 
			boobsName += '_1';
		else 
			boobsName += '_2';
		if(isAroused)
			boobsName += '_hard';
		this.setTachieBoobs(boobsName);
	}
	if(frontDArray.length > 0) {
		let frontDName = frontDArray[Math.randomInt(frontDArray.length)]
		if(isWearingBra) {
			frontDName = 'dancing_bra_' + frontDName;
		}
		else {
			frontDName = 'dancing_naked_' + frontDName;
		}
		this.setTachieFrontD(frontDName);
	}
	else {
		this.resetTachieFrontD();
	}
	
	if(isWearingOuterOutfit) {
		if(this.tachieBoobs.includes('cover_1')) {
			this.setTachieBackA('outer_1');
			this.setTachieFrontA('outer_cover_1');
		}
		else if(this.tachieBoobs.includes('cover_2')) {
			this.setTachieBackA('outer_1');
			this.setTachieFrontA('outer_cover_2');
		}
		else if(this.tachieBoobs.includes('zuri_1')) {
			this.setTachieBackA('outer_1');
			this.setTachieFrontA('outer_zuri_1');
		}
		else if(this.tachieBoobs.includes('zuri_2')) {
			this.setTachieBackA('outer_1');
			this.setTachieFrontA('outer_zuri_2');
		}
		else {
			this.resetTachieBackA();
			this.resetTachieFrontA();
		}
	}
	else {
		this.resetTachieBackA();
		this.resetTachieFrontA();
	}
	
	if(this._stripper_beltCondomCount >= 4) {
		this.setTachieCondomBelt(4);
	}
	else if(this._stripper_beltCondomCount >= 1) {
		this.setTachieCondomBelt(this._stripper_beltCondomCount);
	}
	else {
		this.resetTachieCondomBelt();
	}
	
	if(this._stripper_braCondomCount >= 4 && isWearingBra) {
		if(this.tachieBoobs.includes('cover')) {
			this.setTachieCondomBra('cover_4');
		}
		else {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachieCondomBra('zuri_dancing_4');
			else
				this.setTachieCondomBra('zuri_4');
		}
	}
	else if(this._stripper_braCondomCount >= 1 && isWearingBra) {
		if(this.tachieBoobs.includes('cover'))
			this.setTachieCondomBra('cover_' + this._stripper_braCondomCount);
		else {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachieCondomBra('zuri_dancing_' + this._stripper_braCondomCount);
			else
				this.setTachieCondomBra('zuri_' + this._stripper_braCondomCount);
		}
	}
	else {
		this.resetTachieCondomBra();
	}
	
	if(this._stripper_nipplesCondomCount >= 1 && this._stripper_nipplesCondomCount <= 2) {
		if(isWearingBra) {
			if(this.tachieBoobs.includes('cover'))
				this.setTachieCondomChikubi('cover_bra_' + this._stripper_nipplesCondomCount);
			else {
				if(this.tachieFrontD.includes('dancing'))
					this.setTachieCondomChikubi('zuri_bra_dancing_' + this._stripper_nipplesCondomCount);
				else
					this.setTachieCondomChikubi('zuri_bra_' + this._stripper_nipplesCondomCount);
			}
		}
		else {
			if(this.tachieBoobs.includes('cover'))
				this.setTachieCondomChikubi('cover_naked_' + this._stripper_nipplesCondomCount);
			else {
				if(this.tachieFrontD.includes('dancing'))
					this.setTachieCondomChikubi('zuri_naked_dancing_' + this._stripper_nipplesCondomCount);
				else
					this.setTachieCondomChikubi('zuri_naked_' + this._stripper_nipplesCondomCount);
			}
		}
	}
	else {
		this.resetTachieCondomChikubi();
	}
	
	if(this._stripper_headCondomCount >= 4) {
		this.setTachieCondomHead(4);
	}
	else if(this._stripper_headCondomCount >= 1) {
		this.setTachieCondomHead(this._stripper_headCondomCount);
	}
	else {
		this.resetTachieCondomHead();
	}
	
	this.setTachieFloorCondomId();

	this.setAllowTachieEmoteUpdate(true);
};

// Stripper Pussy
Game_Actor.prototype.emoteStripperPussyPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isWearingPanties = this.isWearingPanties();
	let isWearingOuterOutfit = this.clothingStage === 1;
	let isWearingBra = this.clothingStage <= 2;
	let metPussySexReqs = this.pussyDesire >= this.pussySexPussyDesireRequirement() && this.cockDesire >= this.pussySexCockDesireRequirement();
	
	let justStripped = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_STRIP_CLOTHES);
	let reactingToCondom = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOSSED_CONDOM_STAGE) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
	
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let patronCondomReactionScore = this.patronCondomReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let condomlvl3 = patronCondomReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let condomlvl2 = patronCondomReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(isWearingBra) {
		if(isAroused)
			this.setTachieBoobs('1_hard');
		else
			this.setTachieBoobs('1');
	}
	else {
		if(isAroused)
			this.setTachieBoobs('2_hard');
		else
			this.setTachieBoobs('2');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(13);
		else if(orgasmlvl2) 
			faceArray.push(8);
		else
			faceArray.push(4);
	}
	else if(reactingToCondom) {
		if(condomlvl3) 
			faceArray.push(12);
		else if(condomlvl2) 
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(justStripped) {
		if(generallvl3) 
			faceArray.push(10);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) {
			faceArray.push(9);
			if(metPussySexReqs)
				faceArray.push(11);
		}
		else if(generallvl2) 
			faceArray.push(5);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let rightArmArray = [];
	let frontDArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('hu1');
		mouthArray.push('ho1');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('ku1');
		mouthArray.push('hu1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('ku1');
		mouthArray.push('hu1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae3');
		eyesArray.push('toji1');
		eyesArray.push('urumae2');
		mouthArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('hu1');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		if(Math.random() < 0.6) frontDArray.push('dancing_1'); 
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('pero1');
		rightArmArray.push('up_1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('pero2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe5');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		if(Math.random() < 0.6) {
			frontDArray.push('dancing_1'); 
			frontDArray.push('dancing_2'); 
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		rightArmArray.push('up_1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		mouthArray.push('hu3');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('pero2');
		mouthArray.push('ahe5');
		rightArmArray.push('kupa_1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('ahe5');
		mouthArray.push('hu2');
		mouthArray.push('hu3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('mae3');
		eyesArray.push('ahe1');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		eyesArray.push('heartahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
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
	if(rightArmArray.length > 0) {
		this.setTachieRightArm(rightArmArray[Math.randomInt(rightArmArray.length)]);
	}
	else {
		this.setTachieRightArm('normal_1');
	}
	if(frontDArray.length > 0) {
		this.setTachieFrontD(frontDArray[Math.randomInt(frontDArray.length)]);
	}
	else {
		this.resetTachieFrontD();
	}
	
	if(this.tachieRightArm.includes('kupa')) {
		if(Karryn.isCensored())
			this.setTachieBody('kupa_1_cen');
		else
			this.setTachieBody('kupa_1');
		
		this.setTachieFrontB('rightarm_kupa_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		
		this.resetTachieFrontB();
	}
	
	if(isWearingOuterOutfit) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachieFrontA('outer_dancing_1');
		else
			this.setTachieFrontA('outer_1');
	}
	else {
		this.resetTachieFrontA();
	}
	
	if(isWearingPanties) {
		if(this.tachieRightArm.includes('kupa')) {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachiePanties('kupa_dancing_1');
			else
				this.setTachiePanties('kupa_1');
		}
		else {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachiePanties('normal_dancing_1');
			else
				this.setTachiePanties('normal_1');
		}
	}
	else {
		this.resetTachiePanties();
	}
	
	if(this.tachieFrontD.includes('dancing')) {
		if(this.tachieRightArm.includes('kupa'))
			this.setTachieSemenWetExtension('kupa_dancing_');
		else
			this.setTachieSemenWetExtension('dancing_');
	}
	else {
		if(this.tachieRightArm.includes('kupa'))
			this.setTachieSemenWetExtension('kupa_');
		else
			this.resetTachieSemenWetExtension();
	}
	
	
	if(this._stripper_beltCondomCount >= 4) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachieCondomBelt(4);
		else
			this.setTachieCondomBelt('dancing_4');
	}
	else if(this._stripper_beltCondomCount >= 1) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachieCondomBelt('dancing_' + this._stripper_beltCondomCount);
		else
			this.setTachieCondomBelt(this._stripper_beltCondomCount);
	}
	else {
		this.resetTachieCondomBelt();
	}
	
	if(this._stripper_braCondomCount >= 4 && isWearingBra) {
		this.setTachieCondomBra(4);
	}
	else if(this._stripper_braCondomCount >= 1 && isWearingBra) {
		this.setTachieCondomBra(this._stripper_braCondomCount);
	}
	else {
		this.resetTachieCondomBra();
	}
	
	if(this._stripper_nipplesCondomCount >= 1 && this._stripper_nipplesCondomCount <= 2) {
		if(isWearingBra)
			this.setTachieCondomChikubi('bra_' + this._stripper_nipplesCondomCount);
		else
			this.setTachieCondomChikubi('naked_' + this._stripper_nipplesCondomCount);
	}
	else {
		this.resetTachieCondomChikubi();
	}
	
	if(this._stripper_headCondomCount >= 4) {
		this.setTachieCondomHead(4);
	}
	else if(this._stripper_headCondomCount >= 1) {
		this.setTachieCondomHead(this._stripper_headCondomCount);
	}
	else {
		this.resetTachieCondomHead();
	}
	
	this.setTachieFloorCondomId();

	this.setAllowTachieEmoteUpdate(true);
};

// Stripper Butt
Game_Actor.prototype.emoteStripperButtPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isWearingPanties = this.isWearingPanties();
	let isWearingOuterOutfit = this.clothingStage === 1;
	let isWearingBra = this.clothingStage <= 2;
	let metAnalSexReqs = this.buttDesire >= this.analSexButtDesireRequirement() && this.cockDesire >= this.analSexCockDesireRequirement();
	
	let justStripped = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_STRIP_CLOTHES);
	let reactingToCondom = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOSSED_CONDOM_STAGE) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TIPPED_CONDOM);
	
	
	let generalReactionScore = this.getReactionScore();
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let patronCondomReactionScore = this.patronCondomReactionScore();
	
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	let condomlvl3 = patronCondomReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let condomlvl2 = patronCondomReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	
	if(isWearingBra) {
		this.setTachieBoobs('1');
	}
	else {
		this.setTachieBoobs('2');
	}
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	
	if(justOrgasmed) {
		if(orgasmlvl3) 
			faceArray.push(13);
		else if(orgasmlvl2) 
			faceArray.push(8);
		else
			faceArray.push(4);
	}
	else if(reactingToCondom) {
		if(condomlvl3) 
			faceArray.push(12);
		else if(condomlvl2) 
			faceArray.push(9);
		else
			faceArray.push(3);
	}
	else if(justStripped) {
		if(generallvl3) 
			faceArray.push(10);
		else if(generallvl2) 
			faceArray.push(6);
		else
			faceArray.push(2);
	}
	else {
		if(generallvl3) {
			faceArray.push(9);
			if(metAnalSexReqs)
				faceArray.push(11);
		}
		else if(generallvl2) 
			faceArray.push(5);
		else
			faceArray.push(1);
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let rightArmArray = [];
	let frontDArray = [];
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('mu3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko2');
		mouthArray.push('ku1');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa2');
		mouthArray.push('wa1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu3');
		mouthArray.push('mu2');
		mouthArray.push('ho3');
		mouthArray.push('ho1');
		if(Math.random() < 0.6) frontDArray.push('dancing_1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho3');
		mouthArray.push('ho1');
		rightArmArray.push('strip_1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho3');
		mouthArray.push('ho1');
		mouthArray.push('nico1');
		this.setTachieHoppe(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('ku1');
		mouthArray.push('mu3');
		mouthArray.push('ho3');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho3');
		if(Math.random() < 0.6) {
			frontDArray.push('dancing_1');
			frontDArray.push('dancing_2');
		}
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('toji1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho3');
		mouthArray.push('ho2');
		mouthArray.push('ho1');
		rightArmArray.push('strip_1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('toji1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('nico3');
		rightArmArray.push('kupa_1');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('toji1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('toji1');
		eyesArray.push('yoko2');
		eyesArray.push('ahe1');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		eyesArray.push('heartahe1');
		mouthArray.push('ku1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('mu3');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('wa1');
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
	if(mouthArray.length > 0) {
		this.setTachieMouth(mouthArray[Math.randomInt(mouthArray.length)]);
	}
	if(rightArmArray.length > 0) {
		this.setTachieRightArm(rightArmArray[Math.randomInt(rightArmArray.length)]);
	}
	else {
		this.setTachieRightArm('normal_1');
	}
	if(frontDArray.length > 0) {
		this.setTachieFrontD(frontDArray[Math.randomInt(frontDArray.length)]);
	}
	else {
		this.resetTachieFrontD();
	}
	
	if(this.tachieRightArm.includes('kupa')) {
		this.setTachieFrontB('rightarm_kupa_1');
		this.setTachieFrontC('butt_kupa_1');
	}
	else if(this.tachieRightArm.includes('strip')) {
		this.setTachieFrontB('rightarm_strip_1');
		this.resetTachieFrontC();
	}
	else {
		this.resetTachieFrontB();
		this.resetTachieFrontC();
	}
	
	if(isWearingOuterOutfit) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachieFrontA('outer_dancing_1');
		else
			this.setTachieFrontA('outer_1');
	}
	else {
		this.resetTachieFrontA();
	}
	
	if(isWearingPanties) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachiePanties('dancing_1');
		else
			this.setTachiePanties(1);
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
	}
	else {
		this.resetTachiePanties();
		if(Karryn.isCensored())
			this.setTachieBody('2_cen');
		else
			this.setTachieBody('2');
	}
	
	if(this.tachieFrontD.includes('dancing')) {
		this.setTachieSemenWetExtension('dancing_');
	}
	else {
		this.resetTachieSemenWetExtension();
	}
	
	if(this._stripper_beltCondomCount >= 4) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachieCondomBelt('dancing_4');
		else
			this.setTachieCondomBelt(4);
	}
	else if(this._stripper_beltCondomCount >= 1) {
		if(this.tachieFrontD.includes('dancing'))
			this.setTachieCondomBelt('dancing_' + this._stripper_beltCondomCount);
		else
			this.setTachieCondomBelt(this._stripper_beltCondomCount);
	}
	else {
		this.resetTachieCondomBelt();
	}
	
	if(this._stripper_braCondomCount >= 4 && isWearingBra) {
		this.setTachieCondomBra(4);
	}
	else if(this._stripper_braCondomCount >= 1 && isWearingBra) {
		this.setTachieCondomBra(this._stripper_braCondomCount);
	}
	else {
		this.resetTachieCondomBra();
	}
	
	if(this._stripper_nipplesCondomCount >= 1 && this._stripper_nipplesCondomCount <= 2) {
		if(isWearingBra)
			this.setTachieCondomChikubi('bra_' + this._stripper_nipplesCondomCount);
		else
			this.setTachieCondomChikubi('naked_' + this._stripper_nipplesCondomCount);
	}
	else {
		this.resetTachieCondomChikubi();
	}
	
	if(this._stripper_headCondomCount >= 4) {
		this.setTachieCondomHead(4);
	}
	else if(this._stripper_headCondomCount >= 1) {
		this.setTachieCondomHead(this._stripper_headCondomCount);
	}
	else {
		this.resetTachieCondomHead();
	}
	
	if(this._stripper_buttCondomCount >= 4) {
		if(this.tachieFrontB.includes('kupa')) {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachieCondomButt('kupa_dancing_4');
			else
				this.setTachieCondomButt('kupa_4');
		}
		else {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachieCondomButt('normal_dancing_4');
			else
				this.setTachieCondomButt('normal_4');
		}
	}
	else if(this._stripper_buttCondomCount >= 1) {
		if(this.tachieFrontB.includes('kupa')) {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachieCondomButt('kupa_dancing_' + this._stripper_buttCondomCount);
			else
				this.setTachieCondomButt('kupa_' + this._stripper_buttCondomCount);
		}
		else {
			if(this.tachieFrontD.includes('dancing'))
				this.setTachieCondomButt('normal_dancing_' + this._stripper_buttCondomCount);
			else
				this.setTachieCondomButt('normal_' + this._stripper_buttCondomCount);
		}
	}
	else {
		this.resetTachieCondomButt();
	}
	
	this.setTachieFloorCondomId();

	this.setAllowTachieEmoteUpdate(true);
};

//Stripper Sex
//Stripper VIP
Game_Actor.prototype.emoteStripperVIPPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let lastHitPussySex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_PUSSY_SEX);
	let lastHitAnalSex = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_SEX) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ANAL_SEX);
	let lastHitTittyFuck = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TITTYFUCK) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_TITTYFUCK);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB);
	let lastHandjobIsToRight = this._lastHandUsedForHandjob === RIGHT_HAND_ID;
	let lastHandjobIsToLeft = this._lastHandUsedForHandjob === LEFT_HAND_ID;
	let karrynSwallowingCum = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_CUM_SWALLOW);
	let justGotPussyCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE);
	let justGotAnalCreampie = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE);
	let karrynGotBukkaked = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BUKKAKE);
	
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
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let faceArray = [];
	this.resetTachieHoppe();
	this.resetTachieSweat();
	let headType = "normal_";
	if(givingBJ) {
		headType = 'fera_'
	}
	
	if(givingBJ) {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(21);
			else if(orgasmlvl2) 
				faceArray.push(14);
			else
				faceArray.push(7);
		}
		else if(karrynSwallowingCum) {
			if(swallowlvl3) 
				faceArray.push(18);
			else if(swallowlvl2) 
				faceArray.push(11);
			else
				faceArray.push(4);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(21);
			else if(pussyCreampielvl2) 
				faceArray.push(14);
			else
				faceArray.push(7);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(21);
			else if(analCreampielvl2) 
				faceArray.push(14);
			else
				faceArray.push(7);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(18);
			else if(bukkakelvl2) 
				faceArray.push(11);
			else
				faceArray.push(4);
		}
		else if(lastHitHandjob) {
			if(generallvl3) 
				faceArray.push(19);
			else if(generallvl2) 
				faceArray.push(12);
			else
				faceArray.push(5);
		}
		else if(lastHitPussySex || lastHitTittyFuck || lastHitAnalSex) {
			if(generallvl3) 
				faceArray.push(20);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(6);
		}
		else {
			if(generallvl3) 
				faceArray.push(18);
			else if(generallvl2) 
				faceArray.push(11);
			else
				faceArray.push(4);
		}
	}
	//Not Bj
	else {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(17);
			else if(orgasmlvl2) 
				faceArray.push(10);
			else
				faceArray.push(3);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(17);
			else if(pussyCreampielvl2) 
				faceArray.push(10);
			else
				faceArray.push(3);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(17);
			else if(analCreampielvl2) 
				faceArray.push(10);
			else
				faceArray.push(3);
		}
		else if(karrynGotBukkaked) {
			if(bukkakelvl3) 
				faceArray.push(15);
			else if(bukkakelvl2) 
				faceArray.push(8);
			else
				faceArray.push(1);
		}
		else if(lastHitPussySex || lastHitAnalSex) {
			if(generallvl3) 
				faceArray.push(16);
			else if(generallvl2) 
				faceArray.push(9);
			else
				faceArray.push(2);
		}
		else {
			if(generallvl3) 
				faceArray.push(15);
			else if(generallvl2) 
				faceArray.push(8);
			else
				faceArray.push(1);
		}
	}
	
	let faceId = faceArray[Math.randomInt(faceArray.length)];
	let eyebrowsArray = [];
	let eyesArray = [];
	let mouthArray = [];
	let tachieHoppeName = '';
	let tachieSweatName = '';
	let displayTachieHoppe = false;
	let displayTachieSweat = false;
	
	if(faceId === 1) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		if(lastHitHandjob) {
			if(lastHandjobIsToLeft) {
				eyesArray.push('left1');
				eyesArray.push('left2');
			}
			else {
				eyesArray.push('right1');
				eyesArray.push('right2');
			}
		}
		else {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
		}
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 2) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 3) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('ahe1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ku1');
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
		eyesArray.push('mae2');
		if(karrynSwallowingCum)
			eyesArray.push('toji1');
		mouthArray.push('1');
		mouthArray.push('2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 5) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		if(lastHandjobIsToLeft) {
			eyesArray.push('sita1');
			eyesArray.push('sita2');
		}
		else {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
		}
		mouthArray.push('1');
		mouthArray.push('2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 6) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('sita1');
		mouthArray.push('1');
		mouthArray.push('2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 7) {
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(justOrgasmed)
			eyesArray.push('toji1');
		mouthArray.push('1');
		mouthArray.push('2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 8) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		if(lastHitHandjob) {
			if(lastHandjobIsToLeft) {
				eyesArray.push('left1');
				eyesArray.push('left2');
			}
			else {
				eyesArray.push('right1');
				eyesArray.push('right2');
			}
		}
		else {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
		}
		mouthArray.push('ku1');
		mouthArray.push('ho1');
		mouthArray.push('mu1');
		mouthArray.push('mu2');
		mouthArray.push('mu3');
		mouthArray.push('mu4');
		mouthArray.push('nico1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 9) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae2');
		mouthArray.push('ahe1');
		mouthArray.push('mu2');
		mouthArray.push('mu4');
		mouthArray.push('ho1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 10) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		if(justOrgasmed)
			eyesArray.push('ahe1');
		mouthArray.push('ahe1');
		mouthArray.push('ho2');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ku1');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 11) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		if(karrynSwallowingCum)
			eyesArray.push('toji1');
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		if(lastHandjobIsToLeft) {
			eyesArray.push('sita1');
			eyesArray.push('sita2');
			eyesArray.push('urusita1');
			eyesArray.push('urusita2');
		}
		else {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
			eyesArray.push('urumae1');
			eyesArray.push('urumae2');
		}
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('sita1');
		eyesArray.push('urusita2');
		eyesArray.push('urusita1');
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		if(justOrgasmed) {
			eyesArray.push('toji1');
			eyesArray.push('ahe1');
		}
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 15) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		if(lastHitHandjob) {
			if(lastHandjobIsToLeft) {
				eyesArray.push('left1');
				eyesArray.push('left2');
				eyesArray.push('uruleft1');
				eyesArray.push('uruleft2');
				eyesArray.push('heartleft1');
				eyesArray.push('heartleft2');
			}
			else {
				eyesArray.push('right1');
				eyesArray.push('right2');
				eyesArray.push('ururight1');
				eyesArray.push('ururight2');
				eyesArray.push('heartright1');
				eyesArray.push('heartright2');
			}
		}
		else {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
			eyesArray.push('urumae1');
			eyesArray.push('urumae2');
		}
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('nico5');
		mouthArray.push('pero1');
		mouthArray.push('ho1');
		mouthArray.push('mu4');
		mouthArray.push('ahe2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 16) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('nico5');
		mouthArray.push('pero1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe2');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 17) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		if(justOrgasmed) {
			eyesArray.push('ahe1');
			eyesArray.push('heartahe1');
		}
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('nico4');
		mouthArray.push('nico5');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		mouthArray.push('ahe2');
		mouthArray.push('ku1');
		mouthArray.push('mu1');
		mouthArray.push('ho2')
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		if(karrynSwallowingCum) {
			eyesArray.push('toji1');
			eyesArray.push('heartmae1');
		}
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		mouthArray.push('5');
		mouthArray.push('6');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 19) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		if(lastHandjobIsToRight) {
			eyesArray.push('mae1');
			eyesArray.push('mae2');
			eyesArray.push('urumae1');
			eyesArray.push('urumae2');
			eyesArray.push('heartmae1');
			eyesArray.push('heartmae2');
		}
		else {
			eyesArray.push('sita1');
			eyesArray.push('sita2');
			eyesArray.push('urusita1');
			eyesArray.push('urusita2');
			eyesArray.push('heartsita1');
			eyesArray.push('heartsita2');
		}
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		mouthArray.push('5');
		mouthArray.push('6');
		if(isAroused) {
			tachieHoppeName += '1';
			displayTachieHoppe = true;
		}
	}
	else if(faceId === 20) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		if(justOrgasmed) {
			eyebrowsArray.push('oko1');
			eyesArray.push('ahe1');
			eyesArray.push('heartahe1');
		}
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('toji1');
		mouthArray.push('2');
		mouthArray.push('3');
		mouthArray.push('4');
		mouthArray.push('5');
		mouthArray.push('6');
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
	
	if(displayTachieHoppe) this.setTachieHoppe('' + headType + tachieHoppeName);
	if(displayTachieSweat) this.setTachieSweat('' + headType + tachieSweatName);
	
	
	
	
	if(this._stripper_beltCondomCount >= 4) {
		this.setTachieCondomBelt(4);
	}
	else if(this._stripper_beltCondomCount >= 1) {
		this.setTachieCondomBelt(this._stripper_beltCondomCount);
	}
	else {
		this.resetTachieCondomBelt();
	}
	
	if(this._stripper_nipplesCondomCount >= 1 && this._stripper_nipplesCondomCount <= 2) {
		if(this.tachieBoobs.includes('zuri'))
			this.setTachieCondomChikubi('zuri_' + this._stripper_nipplesCondomCount);
		else
			this.setTachieCondomChikubi('normal_' + this._stripper_nipplesCondomCount);
	}
	else {
		this.resetTachieCondomChikubi();
	}
	
	if(this._stripper_headCondomCount >= 4) {
		if(this.tachieHead.includes('fera'))
			this.setTachieCondomHead('fera_4');
		else
			this.setTachieCondomHead('normal_4');
	}
	else if(this._stripper_headCondomCount >= 1) {
		if(this.tachieHead.includes('fera'))
			this.setTachieCondomHead('fera_' + this._stripper_headCondomCount);
		else
			this.setTachieCondomHead('normal_' + this._stripper_headCondomCount);
	}
	else {
		this.resetTachieCondomHead();
	}
	
	this.setAllowTachieEmoteUpdate(true);
};

// Waitress Serving 
Game_Actor.prototype.emoteWaitressServingPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
		this.setTachieLeftArm('naked5');
		
		if(!isTrayEmpty) {
			this.setTachieRightArmInFrontOfBoobs(false);
			this.setTachieTrayContents();
		}
		else {
			this.setTachieRightArm('zipper_1');
			this.setTachieRightArmInFrontOfBoobs(true);
		}
	}
	//not Flashing
	else {
		if(this.isAroused() && generallvl3 && Math.random() < 0.33)
			this.setTachieLeftArm('up1_naked');
		else
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
		if(generallvl3) 
			faceArray.push(31);
		else if(generallvl2) 
			faceArray.push(30);
		else
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
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('uruyoko1');
		mouthArray.push('wa2');
		mouthArray.push('wa3');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		displayTachieHoppe = true;
		if(isDrunk) {
			tachieHoppeName += '2';
		}
		else {
			tachieHoppeName += '1';
		}
		displayTachieSweat = true;
		if(isDrunk) {
			tachieSweatName += '2';
		}
		else {
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
	else if(faceId === 30) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('nico1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('wa1');
		mouthArray.push('wara1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		displayTachieHoppe = true;
		if(isDrunk) {
			tachieHoppeName += '2';
		}
		else {
			tachieHoppeName += '1';
		}
		dontResetTachieSweat = true;
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('toji2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		mouthArray.push('wara1');
		mouthArray.push('wara2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		mouthArray.push('nico2');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		displayTachieHoppe = true;
		if(isDrunk) {
			tachieHoppeName += '3';
		}
		else {
			tachieHoppeName += '1';
		}
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
	
	this.setAllowTachieEmoteUpdate(true);
};


//////////
// Emote Waitress Sex Pose
///////////

Game_Actor.prototype.emoteWaitressSexPose = function() {
	this.setAllowTachieEmoteUpdate(false);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isDrunk = this.isDrunk;
	let notDrinkingFromStraw = this.tachieStraw === REM_TACHIE_NULL;
	let mugIsSemen = this._karrynMugContent === ALCOHOL_TYPE_SEMEN && this._karrynMugAmount > 0;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let hasCumInMouth = this._liquidSwallow > 0;
	let givingRightHJ = this.isBodySlotPenis(RIGHT_HAND_ID);
	let justGotHarassed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_PETTING);
	let justGotToyPlayed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_TOY_PLAY) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_PASSIVE_TOY);
	let lastHitHandjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_HANDJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_HANDJOB);
	let lastHitBlowjob = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_BLOWJOB) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_ENEMY_BLOWJOB);
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
	let enemyJustCameIntoMug = this.didLastGetHitBySkillType(JUST_SKILLTYPE_WAITRESS_MUG_BUKKAKE);
	
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
		this.resetTachieStraw();
		notDrinkingFromStraw = true;
	}
	
	if(notDrinkingFromStraw) {
		if(justOrgasmed) {
			if(orgasmlvl3) 
				faceArray.push(33);
			else if(orgasmlvl2) 
				faceArray.push(22);
			else
				faceArray.push(11);
		}
		else if(karrynSwallowingCum && givingBJ) {
			if(swallowlvl3) 
				faceArray.push(32);
			else if(swallowlvl2) 
				faceArray.push(21);
			else
				faceArray.push(10);
		}
		else if(justGotPussyCreampie) {
			if(pussyCreampielvl3) 
				faceArray.push(25);
			else if(pussyCreampielvl2) 
				faceArray.push(14);
			else
				faceArray.push(3);
		}
		else if(justGotAnalCreampie) {
			if(analCreampielvl3) 
				faceArray.push(25);
			else if(analCreampielvl2) 
				faceArray.push(14);
			else
				faceArray.push(3);
		}
		else if(enemyJustCameIntoMug) {
			if(swallowlvl3) 
				faceArray.push(28);
			else if(swallowlvl2) 
				faceArray.push(17);
			else
				faceArray.push(6);
		}
		else if(karrynGotBukkaked) {
			if(enemyCummingFromLeftHJ) {
				if(bukkakelvl3) 
					faceArray.push(27);
				else if(bukkakelvl2) 
					faceArray.push(16);
				else
					faceArray.push(5);
			}
			else {
				if(bukkakelvl3) 
					faceArray.push(28);
				else if(bukkakelvl2) 
					faceArray.push(17);
				else
					faceArray.push(6);
			}
		}
		else if(lastHitBlowjob) {
			if(generallvl3) 
				faceArray.push(31);
			else if(generallvl2) 
				faceArray.push(20);
			else
				faceArray.push(9);
		}
		else if(lastHitHandjob) {
			if(generallvl3) 
				faceArray.push(26);
			else if(generallvl2) 
				faceArray.push(15);
			else
				faceArray.push(4);
		}
		else if(lastHitSex) {
			if(generallvl3) 
				faceArray.push(14);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(2);
		}
		else if(justGotToyPlayed) {
			if(generallvl3) 
				faceArray.push(14);
			else if(generallvl2) 
				faceArray.push(13);
			else
				faceArray.push(2);
		}
		else if(justGotHarassed) {
			if(generallvl3) 
				faceArray.push(28);
			else if(generallvl2) 
				faceArray.push(17);
			else
				faceArray.push(6);
		}
		else {
			if(generallvl3) 
				faceArray.push(23);
			else if(generallvl2) 
				faceArray.push(12);
			else
				faceArray.push(1);
		}
	}
	//drinking from straw
	else {
		if(mugIsSemen) {
			if(generallvl3) 
				faceArray.push(30);
			else if(generallvl2) 
				faceArray.push(19);
			else
				faceArray.push(8);
		}
		else {
			if(generallvl3) 
				faceArray.push(29);
			else if(generallvl2) 
				faceArray.push(18);
			else
				faceArray.push(7);
		}
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
		eyesArray.push('sita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 2) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 3) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko2');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 4) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('ku1');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 5) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('ho2');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 6) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('ahe1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 7) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('straw1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 8) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('straw1');
		mouthArray.push('straw2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 9) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera1');
		mouthArray.push('fera2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 10) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita2');
		mouthArray.push('fera1');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 11) {
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 12) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('chu1');
		mouthArray.push('chu2');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 13) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		mouthArray.push('chu2');
		mouthArray.push('wa1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 14) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('wa2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 15) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		mouthArray.push('chu1');
		mouthArray.push('chu2');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ho2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 16) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('wa1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 17) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 18) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('straw1');
		mouthArray.push('straw2');
		this.setTachieHoppe(1);
	}
	else if(faceId === 19) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('straw1');
		mouthArray.push('straw2');
		mouthArray.push('straw3');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 20) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
	}
	else if(faceId === 21) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 22) {
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita2');
		eyesArray.push('sita3');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		eyesArray.push('ahe1');
		mouthArray.push('ku1');
		mouthArray.push('wa2');
		mouthArray.push('ho3');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	else if(faceId === 23) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		mouthArray.push('chu2');
		mouthArray.push('ho1');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 24) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('ho1');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 25) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('ho2');
		mouthArray.push('ho3');
		mouthArray.push('pero1');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe5');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 26) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('chu2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 27) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('mae2');
		eyesArray.push('mae3');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartmae1');
		eyesArray.push('heartmae2');
		mouthArray.push('ho2');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ahe5');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 28) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('toji1');
		mouthArray.push('pero1');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('nico3');
		mouthArray.push('nico4');
		mouthArray.push('ahe2');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 29) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		mouthArray.push('straw1');
		mouthArray.push('straw2');
		mouthArray.push('straw3');
		this.setTachieHoppe(1);
	}
	else if(faceId === 30) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('koma2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('ahe1');
		eyesArray.push('heartahe1');
		mouthArray.push('straw4');
		mouthArray.push('straw2');
		mouthArray.push('straw3');
		if(isAroused) this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 31) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita1');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		if(isAroused) this.setTachieHoppe(1);
	}
	else if(faceId === 32) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri2');
		eyesArray.push('sita2');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		mouthArray.push('fera2');
		mouthArray.push('fera3');
		mouthArray.push('fera4');
		mouthArray.push('fera5');
		mouthArray.push('fera6');
		this.setTachieHoppe(1);
		if(Math.randomInt(2) === 0) this.setTachieSweat(1);
	}
	else if(faceId === 33) {
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('oko1');
		eyesArray.push('sita3');
		eyesArray.push('toji1');
		eyesArray.push('urusita1');
		eyesArray.push('urusita2');
		eyesArray.push('heartsita1');
		eyesArray.push('heartsita2');
		eyesArray.push('heartahe1');
		mouthArray.push('nico4');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa2');
		mouthArray.push('ho3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('ahe4');
		mouthArray.push('ahe5');
		mouthArray.push('ahe6');
		this.setTachieHoppe(1);
		this.setTachieSweat(1);
	}
	
	if(givingBJ && this.tachieCockMouth) {
		if((faceId >= 1 && faceId <= 6) || faceId === 11) {
			mouthArray = [];
			mouthArray.push('fera1');
			mouthArray.push('fera2');
		}
		else if((faceId >= 12 && faceId <= 17) || faceId === 22) {
			mouthArray = [];
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
		}
		else if((faceId >= 23 && faceId <= 28) || faceId === 33) {
			mouthArray = [];
			mouthArray.push('fera2');
			mouthArray.push('fera3');
			mouthArray.push('fera4');
			mouthArray.push('fera5');
			mouthArray.push('fera6');
		}
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
	
	if(this.tachieHoppe && this.tachieMouth.includes('fera'))
		this.setTachieHoppe('fera_1');
	
	this.setAllowTachieEmoteUpdate(true);
};

Game_Actor.prototype.emoteReceptionistPose = function() {
	this.setAllowTachieEmoteUpdate(false);
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
	let thereIsAIdentifiedPervInFront = thereIsVisitorAtDesk && $gameTroop.receptionistBattle_visitorAtDesk()._visitor_isPervert && ($gameTroop.receptionistBattle_visitorAtDesk()._visitor_isIdentified || $gameTroop.receptionistBattle_visitorAtDesk().isWanted);
	let thereIsAGoblinFront = thereIsVisitorAtDesk && $gameTroop.receptionistBattle_visitorAtDesk()._visitor_isGoblin;
	
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
	
	if(receptionistIsGivingBJ && !thereIsAGoblinFront) {
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
	else if(receptionistIsWorking || (thereIsAGoblinFront && receptionistIsGivingBJ)) {
		if(thereIsAGoblinFront && receptionistIsGivingBJ) {
			this.setTachieBody('working_goblin_fera');
			this.setTachieSemenFaceExtension('working_goblin_fera_');
			if(wearingGlasses) this.setTachieGlasses('working_goblin_fera_1');
		}
		else {
			this.setTachieBody('working');
			this.setTachieSemenFaceExtension('working_');
			if(wearingGlasses) this.setTachieGlasses('working_1');
		}
		this.setTachieBoobs('working_1');
		this.setTachieRightArm('working_writing');
		if(thereIsAGoblinFront && receptionistIsGivingBJ && receptionistIsGivingHJ)
			this.setTachieLeftArm('working_goblin_fera_hj');
		else
			this.setTachieLeftArm('working_normal');
		
		tachieClothesName = 'working_';
		tachieEyesName = 'working_';
		tachieEyebrowsName = 'working_';
		tachieMouthName = 'working_';
		tachieHoppeName = 'working_';
		tachieSweatName = 'working_';
		
		if(thereIsAGoblinFront && receptionistIsGivingBJ) {
			tachieHoppeName += 'goblin_fera_';
			tachieSweatName += 'goblin_fera_';
		}
		
		this.setTachieSemenBoobsExtension('working_');
	}
	//standing
	else {
		this.setTachieBody('standing');
		if(receptionistIsGettingBoobsRubbed) {
			if(thereIsAGoblinFront) {
				this.setTachieBoobs('standing_momi_goblin_1');
				this.setTachieSemenBoobsExtension('standing_goblin_momi_');
			}
			else {
				this.setTachieBoobs('standing_momi_1');
				this.setTachieSemenBoobsExtension('standing_human_momi_');
			}
		}
		else {
			this.setTachieBoobs('standing_1');
			this.setTachieSemenBoobsExtension('standing_');
		}
		if(wearingGlasses) this.setTachieGlasses('standing_1');
		
		if(thereIsAGoblinFront) {
			if(receptionistIsGettingBoobsRubbed) {
				if(receptionistIsGivingHJ)
					this.setTachieLeftArm('standing_goblin_boobs_hj');
				else
					this.setTachieLeftArm('standing_goblin_boobs');
			}
			else if(receptionistIsGivingHJ)
				this.setTachieLeftArm('standing_goblin_hj');
			else
				this.setTachieLeftArm('standing_normal');
		}
		else if(receptionistIsGivingHJ) {
			if(receptionistIsKissing) {
				this.setTachieLeftArm('standing_human_kiss_hj');
			}
			else  {
				this.setTachieLeftArm('standing_human_hj');
			}
		}
		else 
			this.setTachieLeftArm('standing_normal');
		
		if(receptionistIsShakingHands) {
			if(thereIsAGoblinFront) 
				this.setTachieRightArm('standing_goblin_handshake');
			else
				this.setTachieRightArm('standing_handshake');
		}
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
			if(generallvl3)
				faceArray.push(49);
			if(generallvl2)
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
	
	this.setAllowTachieEmoteUpdate(true);
};

//////////////////
/////////////////
// Emote Map Pose
/////////////////
/////////////////

Game_Actor.prototype.emoteMapPose = function(goingToSleep, goingToOnani, calledFromCommons) { 
	if(this.isInWaitressServingPose()) {
		this.emoteWaitressServingPose();
		return;
	}
	if(!$gameScreen.isMapMode() && !this.isInMapPose() && !goingToSleep && !goingToOnani && !calledFromCommons) {
		return;
	}
	this.setAllowTachieEmoteUpdate(false);
	let justEscaped = this._justEscapedFlag;
	let stoodStillForTooLong = this.stoodStillForTooLong();
	let wearingWardenOutfit = this.isWearingWardenClothing();
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	let isNightMode = $gameParty.isNightMode();
	let clothingStage = this._clothingStage;

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
	//Night Mode
	else if(isNightMode) {
		if(maplvl3) {
			if(fatiguelvl3) {
				faceArray.push(33);
			}
			else if(fatiguelvl2) {
				faceArray.push('32normal');
				faceArray.push('32down');
			}
			else {
				faceArray.push('31normal');
				faceArray.push('31down');
			}
		}
		else if(maplvl2) {
			if(fatiguelvl3) {
				faceArray.push(30);
			}
			else if(fatiguelvl2) {
				faceArray.push('29normal');
				faceArray.push('29down');
			}
			else {
				faceArray.push('28normal');
				faceArray.push('28down');
			}
		}
		else {
			if(fatiguelvl3) {
				faceArray.push(27);
			}
			else if(fatiguelvl2) {
				faceArray.push(26);
			}
			else {
				faceArray.push(25);
			}
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
	else if(faceId === 25) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('sitayoko1');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		if(clothingStage <= 3) {
			leftArmArray.push(2);
			leftArmArray.push(3);
		}
		else {
			leftArmArray.push('boob1');
		}
		if(clothingStage <= 2) {
			rightArmArray.push(1);
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 26) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('oko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('sitayoko1');
		eyesArray.push('sitayoko2');
		mouthArray.push('mu1');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('ho1');
		if(clothingStage <= 3) {
			leftArmArray.push(2);
		}
		else {
			leftArmArray.push('boob1');
		}
		if(clothingStage <= 2) {
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === 27) {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('toji1');
		eyesArray.push('yoko4');
		eyesArray.push('urumae2');
		eyesArray.push('sitayoko2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('wa1');
		if(clothingStage <= 3) {
			leftArmArray.push(2);
			leftArmArray.push(3);
		}
		else {
			leftArmArray.push(2);
			leftArmArray.push('boob1');
		}
		if(clothingStage <= 2) {
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '28normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('mae2');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('nico1');
		mouthArray.push('wa1');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		if(clothingStage <= 2) {
			rightArmArray.push(1);
			rightArmArray.push(2);
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
			rightArmArray.push(1);
			rightArmArray.push(2);
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '28down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('mae1');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('sitayoko1');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('wara1');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		if(clothingStage <= 2) {
			rightArmArray.push(1);
			rightArmArray.push(2);
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
			rightArmArray.push(1);
			rightArmArray.push(2);
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '29normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('mae2');
		mouthArray.push('mu1');
		mouthArray.push('ho1');
		mouthArray.push('ho2');
		mouthArray.push('wa2');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		if(clothingStage <= 2) {
			rightArmArray.push(1);
			rightArmArray.push(2);
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
			rightArmArray.push(1);
			rightArmArray.push(2);
			rightArmArray.push(3);
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === '29down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('sitayoko2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		if(clothingStage <= 2) {
			rightArmArray.push(1);
			rightArmArray.push(2);
			rightArmArray.push(3);
		}
		else {
			rightArmArray.push('boob1');
			rightArmArray.push(1);
			rightArmArray.push(2);
			rightArmArray.push(3);
		}
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	else if(faceId === 30) {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('oko1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('sitayoko1');
		eyesArray.push('sitayoko2');
		mouthArray.push('ku1');
		mouthArray.push('ku2');
		mouthArray.push('mu1');
		mouthArray.push('wa1');
		mouthArray.push('ahe1');
		if(clothingStage <= 3) {
			leftArmArray.push(2);
			leftArmArray.push(3);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push(2);
		}
		rightArmArray.push(1);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '2';
		displayTachieSweat = true;
	}
	else if(faceId === '31normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('nico3');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		mouthArray.push('be1');
		mouthArray.push('nico2');
		mouthArray.push('ahe1');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('wara2');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob2');
			leftArmArray.push('up1');
			leftArmArray.push(1);
			leftArmArray.push(4);
		}
		rightArmArray.push('up1');
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		rightArmArray.push(7);
		rightArmArray.push(8);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '31down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri3');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		eyesArray.push('heartyoko1');
		eyesArray.push('heartyoko2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		mouthArray.push('be1');
		mouthArray.push('nico3');
		mouthArray.push('ahe2');
		mouthArray.push('ahe3');
		mouthArray.push('wara2');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob2');
			leftArmArray.push('up1');
			leftArmArray.push(1);
			leftArmArray.push(4);
		}
		rightArmArray.push('up1');
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		rightArmArray.push(7);
		rightArmArray.push(8);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '32normal') {
		headType = 'normal';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('nico2');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri2');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('uruyoko1');
		eyesArray.push('uruyoko2');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		mouthArray.push('nico1');
		mouthArray.push('nico2');
		mouthArray.push('ahe2');
		mouthArray.push('wa1');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push('boob2');
			leftArmArray.push('up1');
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		rightArmArray.push('up1');
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === '32down') {
		headType = 'down';
		boobsTypeArray.push('reg');
		eyebrowsArray.push('kiri1');
		eyebrowsArray.push('kiri3');
		eyesArray.push('yoko1');
		eyesArray.push('yoko2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('mae2');
		eyesArray.push('urumae1');
		eyesArray.push('urumae2');
		mouthArray.push('nico1');
		mouthArray.push('nico3');
		mouthArray.push('wara1');
		mouthArray.push('pero1');
		mouthArray.push('pero2');
		mouthArray.push('pero3');
		mouthArray.push('ahe2');
		if(clothingStage <= 3) {
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		else {
			leftArmArray.push('boob1');
			leftArmArray.push('boob2');
			leftArmArray.push('up1');
			leftArmArray.push(1);
			leftArmArray.push(3);
			leftArmArray.push(4);
		}
		rightArmArray.push('up1');
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
	}
	else if(faceId === 33) {
		headType = 'down';
		boobsTypeArray.push('reg');
		boobsTypeArray.push('reg');
		boobsTypeArray.push('hold');
		eyebrowsArray.push('nico1');
		eyebrowsArray.push('koma1');
		eyebrowsArray.push('koma2');
		eyesArray.push('yoko3');
		eyesArray.push('yoko4');
		eyesArray.push('sitayoko2');
		eyesArray.push('urumae2');
		mouthArray.push('mu2');
		mouthArray.push('ho1');
		mouthArray.push('nico2');
		mouthArray.push('wa1');
		mouthArray.push('wara1');
		mouthArray.push('ahe1');
		mouthArray.push('ahe3');
		leftArmArray.push('up1');
		leftArmArray.push(1);
		leftArmArray.push(2);
		leftArmArray.push(4);
		rightArmArray.push(1);
		rightArmArray.push(2);
		rightArmArray.push(3);
		tachieHoppeName += '1';
		displayTachieHoppe = true;
		tachieSweatName += '1';
		displayTachieSweat = true;
	}
	
	if(headType == '' || !headType) {
		console.error('map emote error faceId ' + faceId);
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
	this.setAllowTachieEmoteUpdate(true);
	
	//Lastly, Cleanup flags
	this.turnOffJustEscapedFlag();
	this.resetStandingStillCounter();
};

Game_Actor.prototype.setBedSleepingMapPose = function() {
	this.setupLiquids();
	this.setAllowTachieUpdate(false);
	this.takeOffGlovesAndHat();
	this.setTachieBody(2);
	this.setWardenMapPose_Naked();
	this.emoteMapPose(true, false);
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.setCouchOnaniMapPose = function() {
	this.resetLiquidsExceptPussyJuice();
	this.setAllowTachieUpdate(false);
	this.takeOffGlovesAndHat();
	this.takeOffPanties();
	//this.setTachieBody(2);
	this.setWardenMapPose_Naked();
	this.emoteMapPose(false, true);
	this.setAllowTachieUpdate(true);
};

///////////////
// Tachie Update Emote
// Set whether to update tachie yet or not, emote version
///////////////

Game_Actor.prototype.setAllowTachieEmoteUpdate = function(allow) {
	this._allowTachieEmoteUpdate = allow;
	if(allow) this.setCacheChanged();
};
Game_Actor.prototype.allowTachieEmoteUpdate = function() {
	return this._allowTachieEmoteUpdate;
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
		this.emoteMapPose();
	}
};

Remtairy.KarrynEmote.Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
	Remtairy.KarrynEmote.Scene_Map_updateScene.call(this);
    if (!SceneManager.isSceneChanging()) {
       Karryn.increaseStandingStillCounter();
    }
};
