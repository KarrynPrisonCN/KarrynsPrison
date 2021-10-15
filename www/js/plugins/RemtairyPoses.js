var Remtairy = Remtairy || {};
Remtairy.Poses = Remtairy.Poses || {};

//Attack poses
const POSE_NULL = 'null';
const POSE_ATTACK = 'attack';
const POSE_DEFEND = 'defend';
const POSE_EVADE = 'evade'
const POSE_STANDBY = 'standby';
//Unarmed poses
const POSE_UNARMED = 'unarmed';
const POSE_KICK = 'kick';
//Down pose
const POSE_DOWN_STAMINA = 'down_stamina';
const POSE_DOWN_ORGASM = 'down_org';
const POSE_DOWN_FALLDOWN = 'down_falldown';
//Sex poses
const POSE_THUGGANGBANG = 'thug_gb';
const POSE_GUARDGANGBANG = 'guard_gb';
const POSE_GOBLINCUNNILINGUS = 'goblin_cl';
const POSE_SLIME_PILEDRIVER_ANAL = 'slime_piledriver';
const POSE_ORC_PAIZURI = 'orc_paizuri';
const POSE_KICKCOUNTER = 'kick_counter';
const POSE_RIMJOB = 'rimming';
const POSE_FOOTJOB = 'footj';
const POSE_HJ_STANDING = 'hj_standing';
const POSE_BJ_KNEELING = 'bj_kneeling';
const POSE_PAIZURI_LAYING = 'paizuri_laying';
const POSE_REVERSE_COWGIRL = 'cowgirl_reverse';
const POSE_KARRYN_COWGIRL = 'cowgirl_karryn';
const POSE_LIZARDMAN_COWGIRL = 'cowgirl_lizardman';
const POSE_WAITRESS_SEX = 'waitress_table';
const POSE_WEREWOLF_BACK = 'werewolf_back';
const POSE_YETI_PAIZURI = 'yeti_paizuri';
const POSE_YETI_CARRY = 'yeti_carry';

//Special poses
const POSE_RECEPTIONIST = 'receptionist';

//Masturbate
const POSE_MASTURBATE_COUCH = 'mas_couch';
const POSE_MASTURBATE_INBATTLE = 'mas_inbattle';

//Glory
const POSE_TOILET_SITTING = 'toilet_sitting';
const POSE_TOILET_SIT_LEFT = 'toilet_sit_left';
const POSE_TOILET_SIT_RIGHT = 'toilet_sit_right';
const POSE_TOILET_STAND_LEFT = 'toilet_stand_left';
const POSE_TOILET_STAND_RIGHT = 'toilet_stand_right';

//Stripper
const POSE_STRIPPER_INTERMISSION = 'stripper_intermission';
const POSE_STRIPPER_MOUTH = 'stripper_mouth';
const POSE_STRIPPER_BOOBS = 'stripper_boobs';
const POSE_STRIPPER_PUSSY = 'stripper_pussy';
const POSE_STRIPPER_BUTT = 'stripper_butt';
const POSE_STRIPPER_VIP = 'stripper_vip';

//Defeated poses
const POSE_DEFEATED_LEVEL1 = 'defeated_level1';
const POSE_DEFEATED_LEVEL2 = 'defeated_level2';
const POSE_DEFEATED_LEVEL3 = 'defeated_level3';
const POSE_DEFEATED_LEVEL4 = 'defeated_level4';
const POSE_DEFEATED_LEVEL5 = 'defeated_level5';
const POSE_DEFEATED_GUARD = 'defeated_guard';

//Map poses
const POSE_MAP = 'map';

//=============================================================================
 /*:
 * @plugindesc Poses
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

//////////
///////////////
// Game Actor
/////////////////
///////////

Game_Actor.prototype.setTachieFlip = function(flip) {
    this._tachieFlip = flip;
}; 

// Pose Name
Object.defineProperty(Game_Actor.prototype, "poseName", {
	get: function () { return this._poseName; }, configurable: true
});
// Set Pose
Game_Actor.prototype.setPose = function (name, dontResetPose) {
	name = name.toLowerCase();
	//maybe only use this code for non map poses, don't know the dangers of commenting this out yet...
	//if (this._poseName == name) return;
	this._poseName = name;
	if(dontResetPose) return;
	this.completeResetTachieFace();
	this.completeResetBodyParts();
	this.completeResetMaxTachieSemenId();
	this.resetCockTargets();
	this.setSpankablePose(false);
	this.setClitToyInsertablePose(true);
	this.setPussyToyInsertablePose(true);
	this.setAnalToyInsertablePose(true);
	this.setPoseBattlebacks();
	//this.setCacheChanged();
};

//Reset Face
Game_Actor.prototype.completeResetTachieFace = function () {
	this.setTachieFace(0);
	this.resetTachieHoppe();
	this.resetTachieSweat();
	this.resetTachieHair();
	this.resetTachieEyebrows();
	this.resetTachieEyes();
	this.resetTachieMouth();
	this.resetTachieGlasses();
};

//Reset Body Parts
Game_Actor.prototype.completeResetBodyParts = function () {
	this.setTachieBody(1);
	this.resetTachieBodyExtension();
	this.resetTachiePubicExtension();
	this.resetTachieRightArm();
	this.resetTachieLeftArm();
	this.resetTachieHat();
	this.resetTachieHead();
	this.resetTachieHair();
	this.resetTachieWeapon();
	this.resetTachiePanties();
	this.resetTachieBoobs();
	this.resetTachieLeftBoob();
	this.resetTachieRightBoob();
	this.resetTachieButt();
	this.resetTachieSkirt();
	this.resetTachieClothes();
	this.resetTachieHolePussy();
	this.resetTachieHoleAnus();
	this.resetTachieStraw();
	this.resetTachieTie();
	this.resetTachieLegs();
	this.resetTachiePole();
	this.resetTachieCondomBra();
	this.resetTachieCondomBelt();
	this.resetTachieCondomChikubi();
	this.resetTachieCondomHead();
	this.resetTachieCondomFloor();
	//this.resetTachieCondomLeg();
	//this.resetTachieCondomPantsu();
	this.resetTachieCondomButt();
	
	this.setTachieRightArmInFrontOfBody(true);
	this.setTachieRightArmInFrontOfHeadAndBehindBody(false);
	this.setTachieLeftArmInFrontOfBody(true);
	this.setTachieRightArmInFrontOfBoobs(true);
	this.setTachieLeftArmInFrontOfBoobs(true);
	this.setTachieRightArmInFrontOfLeftArm(true);
	this.setTachieBoobsInFrontOfBody(true);
	this.setTachieSemenBoobsInFrontOfBoobs(true);
	this.setTachieSemenBellyInFrontOfBoobs(true);
	this.setTachieHeadInFrontOfBody(true);
	this.setTachieHatInFrontOfBody(true);
	this.setTachieFrontInFrontOfFace(false);
	this.setTachieSemenLeftArmInFrontOfFront(false);
	this.setTachieSemenRightArmInFrontOfFront(false);
	this.setTachiePantiesInFrontOfBoobs(false);
	this.setTachieCockBoobsInFrontOfBoobs(true);
	this.setTachieCockMouthInFrontOfFace(true);
	this.setTachieLeftBoobInFrontOfRightBoob(true);
	this.setTachieWeaponInFrontOfBody(true);
	this.setTachieWeaponInFrontOfBoobs(true);
	this.setTachieWeaponBehindEverything(false);
	this.setTachieHasBoobsHard(true);
	
	this.setTachieClitToyBehindCocks(false);
	this.setTachiePussyToyInFrontOfAnalToy(true);
	this.setTachieClitToyInFrontOfMainToys(true);
	this.setTachieHolesCocksToysInFrontOfBody(true);
	this.setTachieToysInFrontOfEverything(false);
	this.setTachieToysInBehindOfEverything(false);
	this.setTachieAnalToyInFrontOfEverything(false);
	
	this.resetBoobsType();
	this.setTachieBoobsErectionFalse();
	this.resetAllTachieCocks();
	this.resetAllTachieBack();
	this.resetAllTachieFront();
	this.resetAllTachieVisitor();
	
};

Game_Actor.prototype.resetAllTachieCocks = function () {
	this.resetTachieCock();
	this.resetTachieCockBoobs();
	this.resetTachieCockMouth();
	this.resetTachieCockFeet();
	this.resetTachieCockPussy();
	this.resetTachieCockAnal();
	this.resetTachieCockLeftArm();
	this.resetTachieCockRightArm();
	this.resetTachieLeftHole();
	this.resetTachieRightHole();
};	

//Reset Max Tachie Semen
Game_Actor.prototype.completeResetMaxTachieSemenId = function () {
	this.setMaxTachieSemenBackId(0);
	this.setMaxTachieSemenDeskId(0);
	this.setMaxTachieSemenBellyId(0);
	this.setMaxTachieSemenBoobsId(0);
	this.setMaxTachieSemenLeftBoobId(0);
	this.setMaxTachieSemenRightBoobId(0);
	this.setMaxTachieSemenButtId(0);
	this.setMaxTachieSemenButtTopRightId(0);
	this.setMaxTachieSemenButtTopLeftId(0);
	this.setMaxTachieSemenButtBottomRightId(0);
	this.setMaxTachieSemenButtBottomLeftId(0);
	this.setMaxTachieSemenButtRightId(0);
	this.setMaxTachieSemenButtLeftId(0);
	this.setMaxTachieSemenCrotchId(0);
	this.setMaxTachieSemenAnalId(0);
	this.setMaxTachieSemenCrotchPantiesId(0);
	this.setMaxTachieSemenFaceId(0);
	this.setMaxTachieSemenMouthId(0);
	this.setMaxTachieSemenLeftArmId(0);
	this.setMaxTachieSemenRightArmId(0);
	this.setMaxTachieSemenLeftLegId(0);
	this.setMaxTachieSemenRightLegId(0);
	this.setMaxTachieWetId(0);
	this.setMaxTachieWetPantiesId(0);
	this.setMaxTachieDroolMouthId(0);
	this.setMaxTachieDroolFingersId(0);
	this.setMaxTachieDroolNipplesId(0);
	
	this.setMaxTachieSemenCockMouthId(0);
	this.setMaxTachieSemenCockBoobsId(0);
	this.setMaxTachieSemenCockRightArmId(0);
	this.setMaxTachieSemenCockLeftArmId(0);
	this.setMaxTachieSemenCockPussyId(0);
	this.setMaxTachieSemenCockAnalId(0);
	this.setMaxTachieSemenCockFeetId(0);
	this.setMaxTachieSemenCockNormalId(0);
	this.setMaxTachieSemenHoleLeftId(0);
	this.setMaxTachieSemenHoleRightId(0);
	this.setMaxTachieSemenToiletSeatId(0);
	this.setMaxTachieWetToiletSeatId(0);
	this.setMaxTachieGlorySemenLeftWallId(0);
	this.setMaxTachieGlorySemenRightWallId(0);
	this.setMaxTachieGlorySemenLeftHoleId(0);
	this.setMaxTachieGlorySemenRightHoleId(0);
	this.setMaxTachieGlorySemenLeftToiletId(0);
	this.setMaxTachieGlorySemenRightToiletId(0);
	
	this.setMaxTachieSemenFrontAId(0);
	this.setMaxTachieSemenFrontBId(0);
	this.setMaxTachieSemenFrontCId(0);
	this.setMaxTachieSemenFrontDId(0);
	
	this.resetTachieSemenAnalExtension();
	this.resetTachieSemenBackExtension();
	this.resetTachieSemenBellyExtension();
	this.resetTachieSemenBoobsExtension();
	this.resetTachieSemenButtExtension();
	this.resetTachieSemenCrotchExtension();
	this.resetTachieSemenFaceExtension();
	this.resetTachieSemenMouthExtension();
	this.resetTachieSemenLeftArmExtension();
	this.resetTachieSemenLeftBoobExtension();
	this.resetTachieSemenRightArmExtension();
	this.resetTachieSemenRightBoobExtension(); 
	this.resetTachieSemenRightLegExtension();
	this.resetTachieSemenLeftLegExtension();
	this.resetTachieSemenWetExtension();
	this.resetTachieSemenCockLeftArmExtension();
	this.resetTachieSemenCockRightArmExtension();
	this.resetTachieSemenCockMouthExtension();
	this.resetTachieSemenCockPussyExtension();
	this.resetTachieSemenCockNormalExtension();
	this.resetTachieSemenCockAnalExtension();
	this.resetTachieSemenHoleRightExtension();
	this.resetTachieSemenHoleLeftExtension();
	this.resetTachieSemenToiletSeatExtension();
	this.resetTachieWetToiletSeatExtension();
	this.resetTachieSemenFrontAExtension();
	this.resetTachieSemenFrontBExtension();
	this.resetTachieSemenFrontCExtension();
	this.resetTachieSemenFrontDExtension();
	this.resetTachieSemenFrontEExtension();
};

// Spankable Pose

Game_Actor.prototype.setSpankablePose = function (status) {
	this._spankablePose = status;
};
Game_Actor.prototype.isPoseSpankable = function () {
	return this._spankablePose;
};

// Toy Insert Pose
Game_Actor.prototype.setClitToyInsertablePose = function (status) {
	this._clitToyInsertablePose = status;
};
Game_Actor.prototype.setPussyToyInsertablePose = function (status) {
	this._pussyToyInsertablePose = status;
};
Game_Actor.prototype.setAnalToyInsertablePose = function (status) {
	this._analToyInsertablePose = status;
};

// Post Sex Pose
Game_Actor.prototype.setPostSexPose = function () {
	let pose = this.poseName;
	
	if($gameParty.isInGloryBattle) return false;
	
	if(this.justOrgasmed()) {
		this.setDownOrgasmPose();
	}
	else if(this.hasNoStamina()) {
		this.setDownStaminaPose(true);
	}
	else if(this.hasHalberd()) {
		this.setStandbyPose();
	}	
	else {
		this.setUnarmedPose();
	}
};

/////////
// Tachie Parts Names
/////////////////

Game_Actor.prototype.getBoobsType = function () {
	if(this._tachieBoobsType.length > 0) return this._tachieBoobsType + '_';
	else return '';
};
Game_Actor.prototype.setBoobsType = function (boobsType) {
	this._tachieBoobsType = boobsType;
	this.setPoseClothing();
};
Game_Actor.prototype.resetBoobsType = function () {
	this._tachieBoobsType = '';
};

Game_Actor.prototype.setPoseClothing = function () {
	if(DEBUG_MODE) {
		let fileId = this.getBoobsType() + this.clothingStage;
		if((this.isAroused() || this.justOrgasmed()) && this.tachieHasBoobsHard()) fileId += '_hard';
		this.setTachieBoobs(fileId);
	}
	else {
		this.setTachieBoobs('' + this.getBoobsType() + '1');
	}
};

Game_Actor.prototype.setPosePanties = function () {
	if(this.isWearingPanties()) {
		let pantiesType = '';
		if(this.isInWaitressServingPose()) pantiesType += 'waitress_'
		pantiesType += this.getPantiesType();
		this.setTachiePanties(pantiesType);
	}
	else {
		this.resetTachiePanties();
	}
};

Game_Actor.prototype.setPoseWeapon = function () {
	if(this.equips()[0] && this.hasHalberd()) {
		this.setTachieWeapon(1);
	}
	else {
		this.resetTachieWeapon();
	}
};

Game_Actor.prototype.setChatfaceKarrynPoseItems = function () {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	if(this.poseName === CHAT_FOLDER_KARRYN && this.tachieBodyExtension === 'warden_') {
		let isAroused = actor.isAroused();
		let isWearingGlovesAndHat = actor.isWearingGlovesAndHat();
		let clothingStage = actor._clothingStage;
		let chatfaceTachieBody = this.tachieBody;
			
		if(isWearingGlovesAndHat) {
			this.setTachieHat(1);
			if(chatfaceTachieBody != 3) {
				this.setTachieRightArm('warden_' + chatfaceTachieBody);
				this.setTachieLeftArm('warden_' + chatfaceTachieBody);
			}
		}
		else {
			this.resetTachieHat();
			if(chatfaceTachieBody != 3) {
				this.setTachieRightArm('warden_naked' + chatfaceTachieBody);
				this.setTachieLeftArm('warden_naked' + chatfaceTachieBody);
			}
		}
		
		let pantiesName = actor.getPantiesType();
		if(actor.isWearingPanties() && pantiesName && pantiesName !== REM_TACHIE_NULL) {
			this.setTachiePanties(pantiesName);
		}
		else {
			this.resetTachiePanties();
		}
		
		if(chatfaceTachieBody == 5) {
			this.setTachieWeapon(1);
		}
		else {
			this.resetTachieWeapon();
		}
		
		let boobsName = 'warden_';
		if(chatfaceTachieBody == 3) {
			if(!isWearingGlovesAndHat) {
				boobsName += 'hold_naked';
			}
			else {
				boobsName += 'hold_' + clothingStage;
			}
			this.resetTachieRightArm();
			this.resetTachieLeftArm();
		}
		else {
			if(!isWearingGlovesAndHat) {
				boobsName += 'reg_naked';
			}
			else {
				boobsName += 'reg_' + clothingStage;
			}
		}
		
		if(isAroused) boobsName += '_hard'
		this.setTachieBoobs(boobsName);
	}
	else {
		this.resetTachieBoobs();
		this.resetTachieWeapon();
		this.resetTachiePanties();
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.resetTachieHat();
	}
};

///////////////
// Tachie Arms
// Set whether to draw tachie arms in front or behind tachie body
// And whether tachie right arm is in front of tachie left arm or not
///////////////

Game_Actor.prototype.setTachieRightArmInFrontOfBody = function (status) {
	this._tachieRightArmInFrontOfBody = status;
};
Game_Actor.prototype.setTachieLeftArmInFrontOfBody = function (status) {
	this._tachieLeftArmInFrontOfBody = status;
};
Game_Actor.prototype.setTachieRightArmInFrontOfBoobs = function (status) {
	this._tachieRightArmInFrontOfBoobs = status;
};
Game_Actor.prototype.setTachieRightArmInFrontOfHeadAndBehindBody = function (status) {
	this._tachieRightArmInFrontOfHeadAndBehindBody = status;
};

Game_Actor.prototype.setTachieLeftArmInFrontOfBoobs = function (status) {
	this._tachieLeftArmInFrontOfBoobs = status;
};
Game_Actor.prototype.setTachieRightArmInFrontOfLeftArm = function (status) {
	this._tachieRightArmInFrontOfLeftArm = status;
};

Game_Actor.prototype.setTachieFrontInFrontOfFace = function (status) {
	this._tachieFrontInFrontOfFace = status;
};
Game_Actor.prototype.tachieFrontInFrontOfFace = function () {
	return this._tachieFrontInFrontOfFace;
};

Game_Actor.prototype.setTachieSemenRightArmInFrontOfFront = function (status) {
	this._tachieSemenRightArmInFrontOfFront = status;
};
Game_Actor.prototype.tachieSemenRightArmInFrontOfFront = function () {
	return this._tachieSemenRightArmInFrontOfFront;
};

Game_Actor.prototype.setTachieSemenLeftArmInFrontOfFront = function (status) {
	this._tachieSemenLeftArmInFrontOfFront = status;
};
Game_Actor.prototype.tachieSemenLeftArmInFrontOfFront = function () {
	return this._tachieSemenLeftArmInFrontOfFront;
};

Game_Actor.prototype.setTachieWeaponInFrontOfBody = function (status) {
	this._tachieWeaponInFrontOfBody = status;
};
Game_Actor.prototype.tachieWeaponInFrontOfBody = function () {
	return this._tachieWeaponInFrontOfBody;
};

Game_Actor.prototype.setTachieWeaponInFrontOfBoobs = function (status) {
	this._tachieWeaponInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieWeaponInFrontOfBoobs = function () {
	return this._tachieWeaponInFrontOfBoobs;
};

Game_Actor.prototype.setTachieWeaponBehindEverything = function (status) {
	this._tachieWeaponBehindEverything = status;
};
Game_Actor.prototype.tachieWeaponBehindEverything = function () {
	return this._tachieWeaponBehindEverything;
};

Game_Actor.prototype.setTachieHasBoobsHard = function (status) {
	this._tachieHasBoobsHard = status;
};
Game_Actor.prototype.tachieHasBoobsHard = function () {
	return this._tachieHasBoobsHard;
};

Game_Actor.prototype.tachieRightArmInFrontOfBody = function () {
	return this._tachieRightArmInFrontOfBody;
};
Game_Actor.prototype.tachieLeftArmInFrontOfBody = function () {
	return this._tachieLeftArmInFrontOfBody;
};
Game_Actor.prototype.tachieRightArmInFrontOfBoobs = function () {
	return this._tachieRightArmInFrontOfBoobs;
};
Game_Actor.prototype.tachieRightArmInFrontOfHeadAndBehindBody = function () {
	return this._tachieRightArmInFrontOfHeadAndBehindBody;
};

Game_Actor.prototype.tachieLeftArmInFrontOfBoobs = function () {
	return this._tachieLeftArmInFrontOfBoobs;
};
Game_Actor.prototype.tachieRightArmInFrontOfLeftArm = function () {
	return this._tachieRightArmInFrontOfLeftArm;
};

Game_Actor.prototype.setTachieCockMouthInFrontOfFace = function (status) {
	this._tachieCockMouthInFrontOfFace = status;
};
Game_Actor.prototype.tachieCockMouthInFrontOfFace = function () {
	return this._tachieCockMouthInFrontOfFace;
};

Game_Actor.prototype.setTachieHeadInFrontOfBody = function (status) {
	this._tachieHeadInFrontOfBody = status;
};
Game_Actor.prototype.tachieHeadInFrontOfBody = function () {
	return this._tachieHeadInFrontOfBody;
};

Game_Actor.prototype.setTachieHatInFrontOfBody = function (status) {
	this._tachieHatInFrontOfBody = status;
};
Game_Actor.prototype.tachieHatInFrontOfBody = function () {
	return this._tachieHatInFrontOfBody;
};

Game_Actor.prototype.setTachieBoobsInFrontOfBody = function (status) {
	this._tachieBoobsInFrontOfBody = status;
};
Game_Actor.prototype.tachieBoobsInFrontOfBody = function () {
	return this._tachieBoobsInFrontOfBody;
};

Game_Actor.prototype.setTachieSemenBoobsInFrontOfBoobs = function (status) {
	this._tachieSemenBoobsInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieSemenBoobsInFrontOfBoobs = function () {
	return this._tachieSemenBoobsInFrontOfBoobs;
};

Game_Actor.prototype.setTachieSemenBellyInFrontOfBoobs = function (status) {
	this._tachieSemenBellyInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieSemenBellyInFrontOfBoobs = function () {
	return this._tachieSemenBellyInFrontOfBoobs;
};

Game_Actor.prototype.setTachieCockBoobsInFrontOfBoobs = function (status) {
	this._tachieCockBoobsInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieCockBoobsInFrontOfBoobs = function () {
	return this._tachieCockBoobsInFrontOfBoobs;
};

Game_Actor.prototype.setTachieLeftBoobInFrontOfRightBoob = function (status) {
	this._tachieLeftBoobInFrontOfRightBoob = status;
};
Game_Actor.prototype.tachieLeftBoobInFrontOfRightBoob = function () {
	return this._tachieLeftBoobInFrontOfRightBoob;
};

Game_Actor.prototype.setTachiePantiesInFrontOfBoobs = function (status) {
	this._tachiePantiesInFrontOfBoobs = status;
};
Game_Actor.prototype.tachiePantiesInFrontOfBoobs = function () {
	return this._tachiePantiesInFrontOfBoobs;
};

Game_Actor.prototype.setTachieClitToyBehindCocks = function (status) {
	this._tachieClitToyBehindCocks = status;
};
Game_Actor.prototype.tachieClitToyBehindCocks = function () {
	return this._tachieClitToyBehindCocks;
};

Game_Actor.prototype.setTachieClitToyInFrontOfMainToys = function (status) {
	this._tachieClitToyInFrontOfMainToys = status;
};
Game_Actor.prototype.tachieClitToyInFrontOfMainToys = function () {
	return this._tachieClitToyInFrontOfMainToys;
};

Game_Actor.prototype.setTachiePussyToyInFrontOfAnalToy = function (status) {
	this._tachiePussyToyInFrontOfAnalToy = status;
};
Game_Actor.prototype.tachiePussyToyInFrontOfAnalToy = function () {
	return this._tachiePussyToyInFrontOfAnalToy;
};

Game_Actor.prototype.setTachieHolesCocksToysInFrontOfBody = function (status) {
	this._tachieHolesCocksToysInFrontOfBody = status;
};
Game_Actor.prototype.tachieHolesCocksToysInFrontOfBody = function () {
	return this._tachieHolesCocksToysInFrontOfBody;
};


Game_Actor.prototype.setTachieToysInFrontOfEverything = function (status) {
	this._tachieToysInFrontOfEverything = status;
};
Game_Actor.prototype.tachieToysInFrontOfEverything = function () {
	return this._tachieToysInFrontOfEverything;
};

Game_Actor.prototype.setTachieAnalToyInFrontOfEverything = function (status) {
	this._tachieAnalToyInFrontOfEverything = status;
};
Game_Actor.prototype.tachieAnalToyInFrontOfEverything = function () {
	return this._tachieAnalToyInFrontOfEverything;
};

Game_Actor.prototype.setTachieToysInBehindOfEverything = function (status) {
	this._tachieToysInBehindOfEverything = status;
};
Game_Actor.prototype.tachieToysInBehindOfEverything = function () {
	return this._tachieToysInBehindOfEverything;
};

///////
// Tachie Pubic
Game_Actor.prototype.setHasTachiePubic = function (status) {
	this._hasTachiePubic = status;
};
Game_Actor.prototype.tachiePubicId = function() {
	if(!ConfigManager.displayPubic) return REM_TACHIE_NULL;
	if(!this._hasTachiePubic) return REM_TACHIE_NULL;
	
	if(!this._tachiePubicExtension) 
		return '1';
	else
		return '' + this._tachiePubicExtension + '1';
};

Game_Actor.prototype.setTachiePubicExtension = function (n) {
	this._tachiePubicExtension = n;
};	
Game_Actor.prototype.resetTachiePubicExtension = function () {
	this._tachiePubicExtension = '';
};

///////////////
// Tachie Update
// Set whether to update tachie yet or not
///////////////

Game_Actor.prototype.setAllowTachieUpdate = function (allow) {
	this._allowTachieUpdate = allow;
	if(allow) this.setCacheChanged();
};
Game_Actor.prototype.allowTachieUpdate = function () {
	return this._allowTachieUpdate;
};

//////////
// Map Poses
///////////////

Game_Actor.prototype.isInMapPose = function() {
	let pose = this.poseName;
	return !$gameParty.isInWaitressBattle && ( pose == POSE_MAP );
};

Game_Actor.prototype.setWardenMapPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_MAP);
	//this.resetTachieCutIn();
	this.setTachieEyes('normal_mae1');
	this.setTachieEyebrows('normal_kiri1');
	this.setTachieMouth('normal_nico1');
	this.setTachieHead('normal_1');
	this.setBoobsType('reg');
	this.setTachieBody(1);
	this.setTachieRightArm(1);
	this.setTachieLeftArm(1);
	this.setTachieRightArmInFrontOfBody(true);
	this.setTachieRightArmInFrontOfBoobs(false);
	this.setHasTachiePubic(true);
	this.setPosePanties();
	
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
		
	this.setWardenMapPoseExtensions();
	this.refreshSlutLvlStageVariables_Map();
	this.setAllowTachieUpdate(true);
	//disabled for for now since I don't know all the spots this function can get called
	//this.emoteMasterManager();
};

Game_Actor.prototype.setWardenMapPose_Reg = function() {
	this.setAllowTachieUpdate(false);
	$gameActors.actor(ACTOR_KARRYN_ID).setBoobsType('reg');
	this.setPoseClothing();
	this.setPosePanties();
	this.setTachieRightArm(1);
	this.setTachieLeftArm(1);
	this.setWardenMapPoseExtensions();
	this.setAllowTachieUpdate(true);
};
Game_Actor.prototype.setWardenMapPose_Holding = function() {
	this.setAllowTachieUpdate(false);
	$gameActors.actor(ACTOR_KARRYN_ID).setBoobsType('hold');
	this.setPoseClothing();
	this.setPosePanties();
	this.setWardenMapPoseExtensions();
	this.setAllowTachieUpdate(true);
};

//Called in Common Event 22: Set Boobs Naked
//Which is called in 51: Masturbation Battle and 105: Bed Sleep
Game_Actor.prototype.setWardenMapPose_Naked = function() {
	if(DEBUG_MODE) {
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, true);
		this._hasNoClothesOn = true;
		this.setTachieRightArm('naked1');
		this.setTachieLeftArm('naked1');
		this.setWardenMapPoseExtensions();
	}
};

Game_Actor.prototype.setWardenMapPoseExtensions = function() {
	if(this.poseName !== POSE_MAP) {
		console.error('Error setWardenMapPoseExtensions called during pose ' + this.poseName);
		if($gameParty.isInWaitressBattle) this.setWaitressServingPose();
		else this.setWardenMapPose();
	}
	
	if(this.tachieHead === 'normal_1') {
		this.setTachieSemenFaceExtension('head_normal_');
		if(this.tachieHoppe == 'down_1') this.setTachieHoppe('normal_1');
		if(this.tachieSweat == 'down_1') this.setTachieSweat('normal_1');
		else if(this.tachieSweat == 'down_2') this.setTachieSweat('normal_2');
		if(this.isWearingGlovesAndHat()) this.setTachieHat('normal_1');
	}
	else if(this.tachieHead === 'down_1'){
		this.setTachieSemenFaceExtension('head_down_');
		if(this.tachieHoppe) this.setTachieHoppe('down_1');
		if(this.tachieSweat == 'normal_1') this.setTachieSweat('down_1');
		else if(this.tachieSweat == 'normal_2') this.setTachieSweat('down_2');
		if(this.isWearingGlovesAndHat()) this.setTachieHat('down_1');
	}
	
	if(!this.isWearingGlovesAndHat()) {
		this.resetTachieHat();
	}
	
	this.setPosePanties();
	
	if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_WAITRESS_FLASH) && this.isInWaitressServingPose() && DEBUG_MODE) {
		
	}
	else if(this.isInWaitressServingPose()){
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, false);
		this.setPoseClothing();
	}
	else if((this._hasNoClothesOn || !this.isWearingGlovesAndHat()) && DEBUG_MODE) {
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, true);
		let fileId = 'naked';
		if(this._tachieBoobsType == 'hold') fileId += '_hold';
		fileId += '_1';
		if((this.isAroused() || this.justOrgasmed()) && this.tachieHasBoobsHard()) fileId += '_hard';
		this.setTachieBoobs(fileId);
	}
	else {
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, false);
		this.setPoseClothing();
	}
	
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	
	if(this._tachieBoobsType == 'hold') {
		this.setTachieSemenBoobsExtension('hold_1_');
		this.setTachieSemenLeftArmExtension('boobs_hold_');
		this.setTachieSemenRightArmExtension('boobs_hold_');
		this.setTachieSemenBellyInFrontOfBoobs(false);
		//this.setTachieRightArm('boobs_hold');
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.resetTachieFrontA();
		this.resetTachieFrontB();
	}
	else {
		this.resetTachieSemenBoobsExtension();
		this.setTachieSemenBellyInFrontOfBoobs(true);
		
		if(this.isWearingGlovesAndHat()) {
			if(this.tachieLeftArm == 'naked1')
				this.setTachieLeftArm(1);
			else if(this.tachieLeftArm == 'naked2')
				this.setTachieLeftArm(2);
			else if(this.tachieLeftArm == 'naked3')
				this.setTachieLeftArm(3);
			else if(this.tachieLeftArm == 'naked4')
				this.setTachieLeftArm(4);
			else if(this.tachieLeftArm == 'up1_naked')
				this.setTachieLeftArm('up1');
			else if(this.tachieLeftArm == 'boob1_naked')
				this.setTachieLeftArm('boob1');
			else if(this.tachieLeftArm == 'boob2_naked')
				this.setTachieLeftArm('boob2');
			
			if(this.tachieRightArm == 'naked1')
				this.setTachieRightArm(1);
			else if(this.tachieRightArm == 'naked2')
				this.setTachieRightArm(2);
			else if(this.tachieRightArm == 'naked3')
				this.setTachieRightArm(3);
			else if(this.tachieRightArm == 'naked4')
				this.setTachieRightArm(4);
			else if(this.tachieRightArm == 'naked5')
				this.setTachieRightArm(5);
			else if(this.tachieRightArm == 'naked7')
				this.setTachieRightArm(7);
			else if(this.tachieRightArm == 'naked8')
				this.setTachieRightArm(8);
			else if(this.tachieRightArm == 'up1_naked')
				this.setTachieRightArm('up1');
		}
		else {
			if(this.tachieLeftArm == 1)
				this.setTachieLeftArm('naked1');
			else if(this.tachieLeftArm == 2)
				this.setTachieLeftArm('naked2');
			else if(this.tachieLeftArm == 3)
				this.setTachieLeftArm('naked3');
			else if(this.tachieLeftArm == 4)
				this.setTachieLeftArm('naked4');
			else if(this.tachieLeftArm == 'up1')
				this.setTachieLeftArm('up1_naked');
			else if(this.tachieLeftArm == 'boob1')
				this.setTachieLeftArm('boob1_naked');
			else if(this.tachieLeftArm == 'boob2')
				this.setTachieLeftArm('boob2_naked');
		
			if(this.tachieRightArm == 1)
				this.setTachieRightArm('naked1');
			else if(this.tachieRightArm == 2)
				this.setTachieRightArm('naked2');
			else if(this.tachieRightArm == 3)
				this.setTachieRightArm('naked3');
			else if(this.tachieRightArm == 4)
				this.setTachieRightArm('naked4');
			else if(this.tachieRightArm == 5)
				this.setTachieRightArm('naked5');
			else if(this.tachieRightArm == 7)
				this.setTachieRightArm('naked7');
			else if(this.tachieRightArm == 8)
				this.setTachieRightArm('naked8');
			else if(this.tachieRightArm == 'up1')
				this.setTachieRightArm('up1_naked');
		}
		
		if(this.tachieLeftArm == 1 || this.tachieLeftArm == 'naked1')
			this.setTachieSemenLeftArmExtension('1_');
		else if(this.tachieLeftArm == 2 || this.tachieLeftArm == 'naked2')
			this.setTachieSemenLeftArmExtension('2_');
		else if(this.tachieLeftArm == 3 || this.tachieLeftArm == 'naked3')
			this.setTachieSemenLeftArmExtension('3_');
		else if(this.tachieLeftArm == 4 || this.tachieLeftArm == 'naked4')
			this.setTachieSemenLeftArmExtension('4_');
		else if(this.tachieLeftArm == 'up1' || this.tachieLeftArm == 'up1_naked')
			this.setTachieSemenLeftArmExtension('up1_');
		else if(this.tachieLeftArm == 'boob1' || this.tachieLeftArm == 'boob1_naked')
			this.setTachieSemenLeftArmExtension('boob1_');
		else if(this.tachieLeftArm == 'boob2' || this.tachieLeftArm == 'boob2_naked')
			this.setTachieSemenLeftArmExtension('boob2_');
		else {
			this.resetTachieSemenLeftArmExtension();
			this.setMaxTachieSemenLeftArmId(0);
		}
		
		if(this.tachieRightArm == 1 || this.tachieRightArm == 'naked1')
			this.setTachieSemenRightArmExtension('1_');
		else if(this.tachieRightArm == 2 || this.tachieRightArm == 'naked2')
			this.setTachieSemenRightArmExtension('2_');
		else if(this.tachieRightArm == 3 || this.tachieRightArm == 'naked3')
			this.setTachieSemenRightArmExtension('3_');
		else if(this.tachieRightArm == 4 || this.tachieRightArm == 'naked4')
			this.setTachieSemenRightArmExtension('4_');
		else if(this.tachieRightArm == 5 || this.tachieRightArm == 'naked5') {
			this.setTachieSemenRightArmExtension('5_');
			this.setMaxTachieSemenRightArmId(1);
		}
		else if(this.tachieRightArm == 7 || this.tachieRightArm == 'naked7')
			this.setTachieSemenRightArmExtension('7_');
		else if(this.tachieRightArm == 8 || this.tachieRightArm == 'naked8')
			this.setTachieSemenRightArmExtension('8_');
		else if(this.tachieRightArm == 'up1' || this.tachieRightArm == 'up1_naked')
			this.setTachieSemenRightArmExtension('up1_');
		else if(this.tachieRightArm == 'boob1')
			this.setTachieSemenRightArmExtension('boob1_');
		else {
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenRightArmId(0);
		}
		
		if(this.tachieLeftArm == 2) {
			this.setTachieFrontA('leftarm_2');
			this.setTachieLeftArmInFrontOfBoobs(false);
			this.setTachieSemenLeftArmInFrontOfFront(true);
		}
		else if(this.tachieLeftArm == 'naked2') {
			this.setTachieFrontA('leftarm_naked2');
			this.setTachieLeftArmInFrontOfBoobs(false);
			this.setTachieSemenLeftArmInFrontOfFront(true);
		}
		else if(this.tachieLeftArm == 'up1' || this.tachieLeftArm == 'naked_up1') {
			this.resetTachieFrontA();
			this.setTachieLeftArmInFrontOfBoobs(true);
			this.setTachieSemenLeftArmInFrontOfFront(false);
		}
		else {
			this.resetTachieFrontA();
			this.setTachieLeftArmInFrontOfBoobs(true);
			this.setTachieSemenLeftArmInFrontOfFront(false);
		}
		
		if(this.tachieRightArm == 'zipper_1') {
			this.resetTachieFrontB();
			this.setTachieRightArmInFrontOfBody(true);
			this.setTachieRightArmInFrontOfBoobs(true);
			this.setTachieSemenRightArmInFrontOfFront(false);
		}
		else if(this.tachieRightArm == 'up1' || this.tachieRightArm == 'naked_up1') {
			this.resetTachieFrontB();
			this.setTachieRightArmInFrontOfBody(true);
			this.setTachieRightArmInFrontOfBoobs(false);
			this.setTachieSemenRightArmInFrontOfFront(false);
		}
		else if(this.tachieRightArm == 'boob1') {
			if(this.isWearingGlovesAndHat() && this.isWearingWardenClothing()) {
				this.setTachieFrontB('rightarm_boob1');
			}
			else {
				this.setTachieFrontB('rightarm_boob1_naked');
			}
			this.setTachieRightArmInFrontOfBody(false);
			this.setTachieRightArmInFrontOfBoobs(false);
			this.setTachieSemenRightArmInFrontOfFront(true);
		}
		else {
			this.resetTachieFrontB();
			this.setTachieRightArmInFrontOfBody(false);
			this.setTachieRightArmInFrontOfBoobs(false);
			this.setTachieSemenRightArmInFrontOfFront(false);
		}
			
	}
};

/////////////
// Combat Poses - Standard
// Only for generic battles, special battles do not use combat poses
///////////////


Game_Actor.prototype.setStandbyPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STANDBY;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STANDBY);
	
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setTachieRightArmInFrontOfLeftArm(false);
	this.setTachieRightArmInFrontOfBody(false);
	this.setTachieLeftArmInFrontOfBody(false);
	this.setTachieRightArmInFrontOfBoobs(false);
	this.setTachieLeftArmInFrontOfBoobs(false);
	this.setTachieWeaponBehindEverything(true);
	
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	this.setSpriteBattlerPosData(POSE_STANDBY);
	this.setAllBodySlotsFreeExceptToy();
	this.setTachieWeaponInFrontOfBody(false);
	
	if(notAlreadyInSamePose)
		this.emoteStandbyPose();
	this.setAllowTachieUpdate(true);
	BattleManager.playNormalBgm();
};


Game_Actor.prototype.setAttackPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_ATTACK;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_ATTACK);
	
	this.setPosePanties();
	//this.setPoseWeapon();
	this.setTachiePussyToyInFrontOfAnalToy(false);
	this.setTachieWeaponInFrontOfBoobs(false);
	this.setHasTachiePubic(false);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieHat(1);
		this.setPoseClothing();
	}
	
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	this.setSpriteBattlerPosData(POSE_STANDBY);
	this.setAllBodySlotsFreeExceptToy();
	
	BattleManager.playNormalBgm();
	
	if(notAlreadyInSamePose)
		this.emoteAttackPose();
	
	this.setAllowTachieUpdate(true);
};
Game_Actor.prototype.setDefendPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DEFEND;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_DEFEND);
	
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
	
	this.setPosePanties();
	this.setPoseWeapon();
	this.setHasTachiePubic(true);
	
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	this.setSpriteBattlerPosData(POSE_DEFEND);
	this.setAllBodySlotsFreeExceptToy();
	
	BattleManager.playNormalBgm();
	
	if(notAlreadyInSamePose)
		this.emoteDefendPose();
	else {
		let hasHalberd = this.hasHalberd();
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
	}
	this.setAllowTachieUpdate(true);
};
Game_Actor.prototype.setEvadePose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_EVADE;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_EVADE);
	
	this.setPosePanties();
	this.setPoseWeapon();
	this.setSpankablePose(true);
	this.setTachiePussyToyInFrontOfAnalToy(false);
	this.setTachieClitToyInFrontOfMainToys(false);
	this.setHasTachiePubic(false);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	this.setSpriteBattlerPosData(POSE_EVADE);
	
	BattleManager.playNormalBgm();
	
	if(notAlreadyInSamePose)
		this.emoteEvadePose();
	
	this.setAllowTachieUpdate(true);
};

//////
// Unarm Poses
/////////

Game_Actor.prototype.setUnarmedPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_UNARMED;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_UNARMED);
	
	this.setSpriteBattlerPosData(POSE_UNARMED);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	
	this.setPosePanties();
	this.setTachieRightArmInFrontOfBody(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.setTachieLeftArm('naked_1');
		this.setTachieRightArm('naked_1');
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieHat(1);
		this.setTachieLeftArm(1);
		this.setTachieRightArm(1);
		this.setPoseClothing();
	}
		
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	BattleManager.playNormalBgm();
	
	if(notAlreadyInSamePose)
		this.emoteUnarmedPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.setKickPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_KICK;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_KICK);
	
	this.setSpriteBattlerPosData(POSE_KICK);
	
	if(!this.isWearingGlovesAndHat()) {
		this.resetTachieHat();
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');

		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
	}
	else {
		this.setTachieHat(1);
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		this.setPoseClothing();
	}
	
	this.setTachieFrontA('feet1');
	this.setPosePanties();
	this.setPoseWeapon();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setTachiePantiesInFrontOfBoobs(true);
	this.setTachiePussyToyInFrontOfAnalToy(true);
	this.setTachieClitToyInFrontOfMainToys(false);
	this.setTachieRightArmInFrontOfBody(false);
	this.setTachieWeaponBehindEverything(true);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	BattleManager.playNormalBgm();
	
	this.emoteKickPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStandbyPose = function() {
	return this.poseName == POSE_STANDBY;
};
Game_Actor.prototype.isInAttackPose = function() {
	return this.poseName == POSE_ATTACK;
};
Game_Actor.prototype.isInDefendPose = function() {
	return this.poseName == POSE_DEFEND;
};
Game_Actor.prototype.isInEvadePose = function() {
	return this.poseName == POSE_EVADE;
};
Game_Actor.prototype.isInUnarmedPose = function() {
	return this.poseName == POSE_UNARMED;
};
Game_Actor.prototype.isInKickPose = function() {
	return this.poseName == POSE_KICK;
};

Game_Actor.prototype.isInCombatPose = function() {
	return this.isInStandbyPose() || this.isInAttackPose() || this.isInDefendPose() ||
	this.isInEvadePose() || this.isInUnarmedPose() || this.isInKickPose() ;
};


Game_Actor.prototype.isInJobPose = function() {
	return $gameParty.isInWaitressBattle || $gameParty.isInReceptionistBattle || $gameParty.isInGloryBattle || $gameParty.isInStripperBattle;
};

Game_Actor.prototype.isInShowSpankMarkPose = function() {
	return this.isInDefeatedLevel4Pose();
};


Game_Actor.prototype.isAttackable = function() {
	return (this.isInCombatPose() && this.stamina >= 1);
};
Game_Actor.prototype.canAttack = function(target) {
	return this.isAttackable();
};



///////
// Down Pose
//////////

//POSE_DOWN_STAMINA = Down pose for no Stamina
Game_Actor.prototype.setDownStaminaPose = function(skipRemLine) {
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DOWN_STAMINA;
	
	if(skipRemLine) this._remLine_skipNextDownStamina = true;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_DOWN_STAMINA);
		this.removeStatesBeforeSex();
		this.addToActorDebuffDownStaminaRecord();
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
	}
	
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	
	this.setSpriteBattlerPosData(POSE_DOWN_STAMINA);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	if(notAlreadyInSamePose) {
		this.passiveDownStaminaState_addHornyEffect();
		this.passiveDownStaminaState_increaseCooldown();
		this.emoteDownStaminaPose();
		
		BattleManager.actionRemLines(KARRYN_LINE_DOWN_STAMINA);
	}
	
	//BattleManager.playDownStaminaBgmChange();
	BattleManager.playSpecialBgm_DownStamina();
}

//POSE_DOWN_ORGASM = Down pose for having an orgasm 
Game_Actor.prototype.setDownOrgasmPose = function() {
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DOWN_ORGASM;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_DOWN_ORGASM);
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
	}
	
	this.removeStatesBeforeSex();

	this.setTachieHat(1);
	this.setTachieHasBoobsHard(false);
	this.setPoseClothing();
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	//this.setTachieRightArmInFrontOfLeftArm(false);
	//this.setTachieRightArmInFrontOfBoobs(false);
	//this.setTachieLeftArmInFrontOfBoobs(false);
	

	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
	}
	
	this.setSpriteBattlerPosData(POSE_DOWN_ORGASM);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenCrotchPantiesId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	
	//BattleManager.playDownBgmChange();
	BattleManager.playSpecialBgm_DownOther();
};

Game_Actor.prototype.setDownFallDownPose = function() {
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DOWN_FALLDOWN;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_DOWN_FALLDOWN);
		this.removeStatesBeforeSexExceptFallen();
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
		this._cooldownTurns[SKILL_FALLEN_REST_ID] = 0;
	}
	
	this.setPosePanties();
	
	
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
	}
	
	this.setSpriteBattlerPosData(POSE_DOWN_FALLDOWN);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	//this.setTachiePussyToyInFrontOfAnalToy(true);
	//this.setTachieClitToyInFrontOfMainToys(false);
	this.setHasTachiePubic(true);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	//BattleManager.playDownBgmChange();
	BattleManager.playSpecialBgm_DownOther();
	
	if(notAlreadyInSamePose) {
		this.emoteDownFalldownPose();
		BattleManager.actionRemLines(KARRYN_LINE_DOWN_FALLDOWN);
	}
}

Game_Actor.prototype.isInDownPose = function() {
	return (this.isInDownOrgasmPose() || this.isInDownStaminaPose() || this.isInDownFallDownPose());
}
Game_Actor.prototype.isInDownOrgasmPose = function() {
	return this.poseName == POSE_DOWN_ORGASM;
}
Game_Actor.prototype.isInDownStaminaPose = function() {
	return this.poseName == POSE_DOWN_STAMINA;
}
Game_Actor.prototype.isInDownFallDownPose = function() {
	return this.poseName == POSE_DOWN_FALLDOWN;
}

////////
// Sex Pose
////////////

//Ready to change into sex pose
Game_Actor.prototype.isInReadyPose = function() {
	//todo: proper code? karryn can not change poses in certain poses?
	return true;
};

Game_Actor.prototype.isInSexPose = function() {
	if($gameParty.isInStripperBattle && !this.isInStripperSexPose()) return false;
	return !this.isInCombatPose() && !this.isInDownPose() && !this.isInMasturbationPose() && 
	!this.isInWaitressServingPose() && !this.isInMapPose();
};

Game_Actor.prototype.isInFuckedFromBehindSexPose = function() { //Doggy 
	if(!this.pussySexPoseSkillsIsEnabled() && !this.analSexPoseSkillsIsEnabled()) return false;
	return this.isInDefeatedLevel2Pose() || this.isInDefeatedLevel4Pose() || this.isInGoblinCunnilingusSexPose() || this.isInLayingTittyfuckSexPose() || this.isInRimjobSexPose() || this.isInWaitressSexPose() || this.isInToiletStandLeftPose() || this.isInToiletStandRightPose() || this.isInWerewolfBackPose();
};

Game_Actor.prototype.isInCowgirlSexPose = function() {
	if(!this.pussySexPoseSkillsIsEnabled() && !this.analSexPoseSkillsIsEnabled()) return false;
	return this.isInReverseCowgirlPose() || this.isInLizardmanCowgirlPose() || this.isInKarrynCowgirlPose();
};

Game_Actor.prototype.isInRestrainedPose = function() {
	return this.isInDefeatedLevel3Pose() || this.isInDefeatedLevel4Pose() || this.isInThugGangbangPose() || this.isInSlimeAnalPiledriverSexPose() || this.isInKickCounterSexPose() || this.isInWerewolfBackPose() || this.isInYetiCarryPose();
};
Game_Actor.prototype.isNotInRestrainedPose = function() {
	return !this.isInRestrainedPose();
};

///////////
// Set Sex Pose
//////////////

Game_Actor.prototype.isInThugGangbangPose = function() {
	return this.poseName == POSE_THUGGANGBANG;
};
Game_Actor.prototype.setThugGangbangSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_THUGGANGBANG, dontResetPose);
	this.setSpriteBattlerPosData(POSE_THUGGANGBANG);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setTachieLeftArmInFrontOfBody(false);
	this.setHasTachiePubic(true);
	
	this.setTachieBoobs('empty');
	this.setTachieSemenLeftArmExtension('empty_');
	this.setTachieSemenRightArmExtension('empty_');
	
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteThugGangbangPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInWerewolfBackPose = function() {
	return this.poseName == POSE_WEREWOLF_BACK;
};
Game_Actor.prototype.setWerewolfBackPose = function(holeInserted) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_WEREWOLF_BACK, dontResetPose);
	this.setSpriteBattlerPosData(POSE_WEREWOLF_BACK);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setHasTachiePubic(false);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieBody('1');
		this.setTachieHat(1);
	}
	
	if(holeInserted === PUSSY_ID) {
		this.setBodyPartUnavailable(ANAL_ID);
		this.setTachieButt('high');
		this.setTachieSemenAnalExtension('high_');
		this.setTachieSemenBackExtension('high_');
		this.setTachieSemenButtExtension('high_');
		this.setTachieSemenCrotchExtension('high_');
		this.setTachieSemenWetExtension('high_');
	}
	else {
		this.setBodyPartUnavailable(PUSSY_ID);
		this.setTachieButt('low');
		this.setTachieSemenAnalExtension('low_');
		this.setTachieSemenBackExtension('low_');
		this.setTachieSemenButtExtension('low_');
		this.setTachieSemenCrotchExtension('low_');
		this.setTachieSemenWetExtension('low_');
	}

	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteWerewolfBackPose();
	this.setAllowTachieUpdate(true);
};


Game_Actor.prototype.isInGuardGangbangPose = function() {
	return this.poseName == POSE_GUARDGANGBANG;
};
Game_Actor.prototype.setGuardGangbangSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_GUARDGANGBANG, dontResetPose);
	this.setSpriteBattlerPosData(POSE_GUARDGANGBANG);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);

	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteGuardGangbangPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInReverseCowgirlPose = function() {
	return this.poseName == POSE_REVERSE_COWGIRL;
};
Game_Actor.prototype.setReverseCowgirlSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_REVERSE_COWGIRL, dontResetPose);
	this.setSpriteBattlerPosData(POSE_REVERSE_COWGIRL);
	if(dontResetPose) {
		this.emoteReverseCowgirlPose();
		this.setAllowTachieUpdate(true);
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removeAnalToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieHat('close_1');
	}
	else {
		this.resetTachieHat();
	}
	
	this.setTachieHead('close');
	this.setTachieSemenFaceExtension('close_');
	this.setTachieSemenLeftArmExtension('normal_');

	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(0);
	this.setMaxTachieSemenCockAnalId(0);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(PUSSY_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteReverseCowgirlPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInLizardmanCowgirlPose = function() {
	return this.poseName == POSE_LIZARDMAN_COWGIRL;
};
Game_Actor.prototype.setLizardmanCowgirlSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_LIZARDMAN_COWGIRL, dontResetPose);
	this.setSpriteBattlerPosData(POSE_LIZARDMAN_COWGIRL);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setHasTachiePubic(false);
	this.setSpankablePose(true);
	
	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenFaceExtension('normal_');
	this.resetTachieSemenMouthExtension();
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteLizardmanCowgirlPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInKarrynCowgirlPose = function() {
	return this.poseName == POSE_KARRYN_COWGIRL;
};
Game_Actor.prototype.setKarrynCowgirlSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_KARRYN_COWGIRL, dontResetPose);
	this.setSpriteBattlerPosData(POSE_KARRYN_COWGIRL);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setSpankablePose(false);
	
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenCrotchId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartFree_PettingOnly(ANAL_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	
	BattleManager.playSpecialBgm_KarrynSex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteKarrynCowgirlPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInGoblinCunnilingusSexPose = function() {
	return this.poseName == POSE_GOBLINCUNNILINGUS;
};
Game_Actor.prototype.setGoblinCunnilingusSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_GOBLINCUNNILINGUS, dontResetPose);
	this.setSpriteBattlerPosData(POSE_GOBLINCUNNILINGUS);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	this.setTachieFrontA('goblin');
	
	this.setTachieBoobsInFrontOfBody(true);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartFree_PettingOnly(ANAL_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteGoblinCunnilingusPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInOrcPaizuriSexPose = function() {
	return this.poseName == POSE_ORC_PAIZURI;
};
Game_Actor.prototype.setOrcPaizuriSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_ORC_PAIZURI, dontResetPose);
	this.setSpriteBattlerPosData(POSE_ORC_PAIZURI);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);

	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}
	else {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}

	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenCockBoobsId(1);

	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(PUSSY_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteOrcPaizuriPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInYetiPaizuriSexPose = function() {
	return this.poseName == POSE_YETI_PAIZURI;
};
Game_Actor.prototype.setYetiPaizuriSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_YETI_PAIZURI, dontResetPose);
	this.setSpriteBattlerPosData(POSE_YETI_PAIZURI);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}
	else {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}

	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenLeftArmId(1);

	this.setBodyPartUnavailable(NIPPLES_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(MOUTH_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteYetiPaizuriPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInYetiCarryPose = function() {
	return this.poseName == POSE_YETI_CARRY;
};
Game_Actor.prototype.setYetiCarrySexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_YETI_CARRY, dontResetPose);
	this.setSpriteBattlerPosData(POSE_YETI_CARRY);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setClitToyInsertablePose(false);
	this.setHasTachiePubic(false);
	this.setSpankablePose(true);
	
	if(this.isStateAffected(STATE_LIGHT_KICK_ID)) {
		this.addState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	else {
		this.removeState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}
	else {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftArmId(1);
	
	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartUnavailable(BOOBS_ID);
	this.setBodyPartUnavailable(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteYetiCarryPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInKickCounterSexPose = function() {
	return this.poseName == POSE_KICKCOUNTER;
};
Game_Actor.prototype.setKickCounterSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_KICKCOUNTER, dontResetPose);
	this.setSpriteBattlerPosData(POSE_KICKCOUNTER);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(this.isStateAffected(STATE_LIGHT_KICK_ID)) {
		this.addState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	else {
		this.removeState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	
	if(Karryn.isCensored()) {
		this.setTachieBackD('legs_cen');
	}
	else {
		this.setTachieBackD('legs');
	}

	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteKickCounterPose(false, true);
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInRimjobSexPose = function() {
	return this.poseName == POSE_RIMJOB;
};
Game_Actor.prototype.setRimjobSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_RIMJOB, dontResetPose);
	this.setSpriteBattlerPosData(POSE_RIMJOB);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	this.setTachieHolesCocksToysInFrontOfBody(false);
	this.setTachieFrontInFrontOfFace(true);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.setTachieFrontA('leftarm_naked');
		this.resetTachieHat();
	}
	else {
		this.setTachieHat(1);
		this.setTachieBody(1);
		this.setTachieFrontA('leftarm');
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteRimjobPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInFootjobSexPose = function() {
	return this.poseName == POSE_FOOTJOB;
};
Game_Actor.prototype.setFootjobSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_FOOTJOB, dontResetPose);
	this.setSpriteBattlerPosData(POSE_FOOTJOB);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieBody('1');
		this.setTachieHat('close_1');
	}
	this.setTachieHead('close_1');
	this.setTachieSemenFaceExtension('close_');

	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieSemenCrotchId(1);
	
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(PUSSY_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteFootjobPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStandingHJSexPose = function() {
	return this.poseName == POSE_HJ_STANDING;
};
Game_Actor.prototype.setStandingHJSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_HJ_STANDING, dontResetPose);
	this.setSpriteBattlerPosData(POSE_HJ_STANDING);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieBody('1');
		this.setTachieHat('1');
	}
	
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	this.setTachieSemenLeftArmExtension('normal_');


	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartFree_PettingOnly(ANAL_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(PUSSY_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteStandingHandjobPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInKneelingBJSexPose = function() {
	return this.poseName == POSE_BJ_KNEELING;
};
Game_Actor.prototype.setKneelingBJSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_BJ_KNEELING, dontResetPose);
	this.setSpriteBattlerPosData(POSE_BJ_KNEELING);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}

	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenLeftArmExtension('normal_');
	this.setHasTachiePubic(true);

	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
		this.setTachieLeftArm('normal_naked');
		
		if(karrynSkill) {
			this.setTachieRightArm('hj_naked');
			this.setMaxTachieSemenRightArmId(0);
		}
		else {
			this.setTachieRightArm('normal_naked');
			this.setMaxTachieSemenRightArmId(1);
		}
	}
	else {
		this.setTachieBody('1');
		this.setTachieHat('1');
		this.setTachieLeftArm('normal');
		
		if(karrynSkill) {
			this.setTachieRightArm('hj');
			this.setMaxTachieSemenRightArmId(0);
		}
		else {
			this.setTachieRightArm('normal');
			this.setMaxTachieSemenRightArmId(1);
		}
	}
	
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(PUSSY_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteKneelingBlowjobPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInLayingTittyfuckSexPose = function() {
	return this.poseName == POSE_PAIZURI_LAYING;
};
Game_Actor.prototype.setLayingTittyfuckSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_PAIZURI_LAYING, dontResetPose);
	this.setSpriteBattlerPosData(POSE_PAIZURI_LAYING);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}

	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}
	else {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}

	this.setTachieBackB('body');
	this.setTachieSemenBoobsExtension('body1_');
	
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	
	//this.setTachieHolesCocksToysInFrontOfBody(false);
	//this.setTachieToysInBehindOfEverything(true);
	
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(0);
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteMasterManager();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInSlimeAnalPiledriverSexPose = function() {
	return this.poseName == POSE_SLIME_PILEDRIVER_ANAL;
};
Game_Actor.prototype.setSlimeAnalPiledriverPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_SLIME_PILEDRIVER_ANAL);
	this.setSpriteBattlerPosData(POSE_SLIME_PILEDRIVER_ANAL);
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removeAnalToy();

	this.setTachieClitToyInFrontOfMainToys(false);
	this.setTachieClitToyBehindCocks(true);
	
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		this.setTachieHat(1);
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	this.setTachieSemenCrotchExtension('empty_');
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteSlimePiledriverPose();
	this.setAllowTachieUpdate(true);
};



////////////
// Masturbation Couch Pose
/////////////////////

Game_Actor.prototype.isInMasturbationPose = function() {
	return this.isInMasturbationCouchPose() || this.isInMasturbationInBattlePose();
};

Game_Actor.prototype.isInMasturbationCouchPose = function() {
	return this.poseName == POSE_MASTURBATE_COUCH;
};
Game_Actor.prototype.setMasturbationCouchPose = function() {
	this.setPose(POSE_MASTURBATE_COUCH);
	this.setSpriteBattlerPosData(POSE_MASTURBATE_COUCH);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedToyInsert();
	this.setAllBodySlotsFree();
	this.setTachieHasBoobsHard(false);
	this.setTachieHeadInFrontOfBody(false);
	this.setHasTachiePubic(true);
	
	this.setMaxTachieWetId(3);
	this.setMaxTachieDroolFingersId(0);
	this.setMaxTachieDroolNipplesId(0);
	
	this.setTachieEyes('close_1');
	this.setTachieHead('close');
	this.setTachieMouth('close_1');
	this.setTachieHair('close');
	this.masturbateBattle_resetLeftHand();
	this.masturbateBattle_resetRightHand();
	
	if(Karryn.isCensored()) {
		this.setTachieBody('1_cen');
	}
};

//////////////
// Masturbation In Battle Pose
// Onani In Battle Pose
/////////////////

Game_Actor.prototype.isInMasturbationInBattlePose = function() {
	return this.poseName == POSE_MASTURBATE_INBATTLE;
};
Game_Actor.prototype.setMasturbationInBattlePose = function() {
	let alreadyInPose = this.isInMasturbationInBattlePose();
	this.setPose(POSE_MASTURBATE_INBATTLE);
	this.setSpriteBattlerPosData(POSE_MASTURBATE_INBATTLE);
	this.setAllBodySlotsFree();
	this.setHasTachiePubic(true);
	this.setTachieHasBoobsHard(false);
	this.takeOffPanties();
	
	if(!alreadyInPose) {
		this.masInBattle_resetLeftArmToNormal();
		this.masInBattle_resetRightArmToNormal();
	}
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieBoobs();
		this.resetTachieHat();
		this.resetTachieTie();
	}
	else {
		this.setTachieHat(1);
		this.setTachieTie(1);
		if(this._clothingStage < 4) this.changeClothingToStage(4);
		this.setPoseClothing();
	}
	
	this.setMaxTachieSemenBoobsId(0);
	this.setMaxTachieSemenRightBoobId(3);
	this.setMaxTachieSemenLeftBoobId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	
	BattleManager.playSpecialBgm_KarrynSex();
};

///////////
// Waitress Pose

Game_Actor.prototype.isInWaitressServingPose = function() {
	let pose = this.poseName;
	return $gameParty.isInWaitressBattle && ( pose == POSE_MAP );
};
Game_Actor.prototype.setWaitressServingPose = function() {
	this.removeAllPettedToyInsert();
	this.setAllBodySlotsFree();
	this.setSpriteBattlerPosData(POSE_MAP);
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setAnalToyInsertablePose(false);
	
	this.setPose(POSE_MAP);
	this.setTachieBody(2);
	this.setTachieHead('normal_1');
	this.takeOffGlovesAndHat();
	this.resetTachieHat();
	this.setBoobsType('waitress');
	this.setPoseClothing();
	this.setPosePanties();
	this.setTachieRightArmInFrontOfBody(true);
	this.setTachieRightArmInFrontOfBoobs(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);

	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.isInWaitressSexPose = function() {
	let pose = this.poseName;
	return ( pose == POSE_WAITRESS_SEX );
};
Game_Actor.prototype.setWaitressSexPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_WAITRESS_SEX);
	this.setSpriteBattlerPosData(POSE_WAITRESS_SEX);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	this.setTachieHolesCocksToysInFrontOfBody(false);
	
	this.setTachieBody(1);
	this.setTachieRightArm('empty');
	
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	$gameMap.changeBattleback(BATTLEBACK1_BAR_WAITRESS_SEX_NAME, null);
	BattleManager.changeBattleback(BATTLEBACK1_BAR_WAITRESS_SEX_NAME, null);
	
	BattleManager.playSpecialBgm_WaitressSex();
	this.emoteWaitressSexPose();
	this.setAllowTachieUpdate(true);
	BattleManager.actionRemLines(KARRYN_LINE_WAITRESS_TABLE_START);
};

///////////
// Receptionist Pose

Game_Actor.prototype.isInReceptionistPose = function() {
	return this.poseName == POSE_RECEPTIONIST;
};
Game_Actor.prototype.setReceptionistPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_RECEPTIONIST, false);
	this.setSpriteBattlerPosData(POSE_RECEPTIONIST);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenDeskId(3);
	
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setAllowTachieUpdate(true);
	
	this.emoteReceptionistPose();
};

///////////
// Toilet Sitting Pose

Game_Actor.prototype.isInToiletSittingPose = function() {
	return this.poseName == POSE_TOILET_SITTING;
};
Game_Actor.prototype.setToiletSittingPose = function() {
	let leftArmIsKuri = this.tachieLeftArm.includes('kuri');
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	let leftArmIsManko = this.tachieLeftArm.includes('manko');
	let leftArmIsAnaru = this.tachieLeftArm.includes('anaru');
	let rightArmIsKuri = this.tachieRightArm.includes('kuri');
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	let rightArmIsManko = this.tachieRightArm.includes('manko');
	let rightArmIsAnaru = this.tachieRightArm.includes('anaru');
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();

	
	this.setAllowTachieUpdate(false);
	
	this.setTachieClitToyExtension_gloryBattle('');
	this.setTachiePussyToyExtension_gloryBattle('left_1_');
	this.setTachieAnalToyExtension_gloryBattle('right_');
	
	this.setPose(POSE_TOILET_SITTING, false);
	this.setSpriteBattlerPosData(POSE_TOILET_SITTING);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	
	if(leftArmIsChikubi) {
		this.setTachieLeftBoob('touch_chikubi');
		this.setTachieLeftArm('chikubi_1');
	}
	else {
		this.setTachieLeftBoob('normal');
		
		if(leftArmIsKuri) {
			this.setTachieLeftArm('kuri_1');
		}
		else if(leftArmIsManko) {
			this.setTachieLeftArm('manko_1');
		}
		else if(leftArmIsAnaru) {
			this.setTachieLeftArm('anaru_1');
		}
		else {
			this.toiletBattle_resetLeftArmToNormal();
		}
	}
	
	if(rightArmIsChikubi) {
		this.setTachieRightBoob('touch_chikubi');
		this.setTachieRightArm('chikubi_1');
	}
	else {
		this.setTachieRightBoob('normal');
		
		if(rightArmIsKuri) {
			this.setTachieRightArm('kuri_1');
		}
		else if(rightArmIsManko) {
			this.setTachieRightArm('manko_1');
		}
		else if(rightArmIsAnaru) {
			this.setTachieRightArm('anaru_1');
		}
		else {
			this.toiletBattle_resetRightArmToNormal();
		}
	}

	this.setTachieTie('1');
	
	this.setMaxTachieSemenBellyId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	if((currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose) && this._liquidCreampiePussy > 0) {
		this.increaseLiquidCumOnToiletSeat(Math.round((Math.random() * 0.5 + 0.15) * this._liquidCreampiePussy));
	}
	
	this.emoteGloryToiletSittingPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Sit Left Pose

Game_Actor.prototype.isInToiletSitLeftPose = function() {
	return this.poseName == POSE_TOILET_SIT_LEFT;
};
Game_Actor.prototype.setToiletSitLeftPose = function() {
	let leftArmIsKuri = this.tachieLeftArm.includes('kuri');
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	let leftArmIsManko = this.tachieLeftArm.includes('manko');
	
	this.setAllowTachieUpdate(false);
	
	this.setTachieClitToyExtension_gloryBattle('');
	this.setTachiePussyToyExtension_gloryBattle('');
	this.setTachieAnalToyExtension_gloryBattle('');
	
	this.setPose(POSE_TOILET_SIT_LEFT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_SIT_LEFT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	
	this.setTachieHead('1');
	
	if(leftArmIsChikubi) 
		this.setTachieLeftArm('chikubi');
	else if(leftArmIsKuri)
		this.setTachieLeftArm('kuri');
	else if(leftArmIsManko)
		this.setTachieLeftArm('manko');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBellyId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.emoteGloryToiletSitLeftPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Sit Right Pose

Game_Actor.prototype.isInToiletSitRightPose = function() {
	return this.poseName == POSE_TOILET_SIT_RIGHT;
};
Game_Actor.prototype.setToiletSitRightPose = function() {
	let rightArmIsKuri = this.tachieRightArm.includes('kuri');
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	let rightArmIsManko = this.tachieRightArm.includes('manko');
	
	this.setAllowTachieUpdate(false);
	
	this.setTachieClitToyExtension_gloryBattle('');
	this.setTachiePussyToyExtension_gloryBattle('');
	this.setTachieAnalToyExtension_gloryBattle('');
	
	this.setPose(POSE_TOILET_SIT_RIGHT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_SIT_RIGHT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	
	this.setTachieHead('1');
	
	if(rightArmIsChikubi) 
		this.setTachieRightArm('chikubi');
	else if(rightArmIsKuri)
		this.setTachieRightArm('kuri');
	else if(rightArmIsManko)
		this.setTachieRightArm('manko');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBellyId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.emoteGloryToiletSitRightPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Stand Left Pose

Game_Actor.prototype.isInToiletStandLeftPose = function() {
	return this.poseName == POSE_TOILET_STAND_LEFT;
};
Game_Actor.prototype.setToiletStandLeftPose = function() {
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	
	this.setAllowTachieUpdate(false);
	this.setTachieClitToyExtension_gloryBattle('high_');
	this.setTachiePussyToyExtension_gloryBattle('high_');
	this.setTachieAnalToyExtension_gloryBattle('high_');
	this.setPose(POSE_TOILET_STAND_LEFT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_STAND_LEFT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	
	this.setTachieHead('1');
	
	this.setTachieSemenRightArmExtension('normal_');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.emoteGloryToiletStandLeftPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Stand Right Pose

Game_Actor.prototype.isInToiletStandRightPose = function() {
	return this.poseName == POSE_TOILET_STAND_RIGHT;
};
Game_Actor.prototype.setToiletStandRightPose = function() {
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	
	this.setAllowTachieUpdate(false);
	this.setTachieClitToyExtension_gloryBattle('high_');
	this.setTachiePussyToyExtension_gloryBattle('high_');
	this.setTachieAnalToyExtension_gloryBattle('high_');
	this.setPose(POSE_TOILET_STAND_RIGHT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_STAND_RIGHT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	
	this.setTachieHead('1');
	
	if(!this.tachieBody.includes('low') && !this.tachieBody.includes('high'))
		this.setTachieBody('high');
	
	this.setTachieSemenLeftArmExtension('normal_');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.emoteGloryToiletStandRightPose();
	
	this.setAllowTachieUpdate(true);
};

////////
// Stripper

Game_Actor.prototype.setStripperIntermissionPose = function() {
	this.setPose(POSE_STRIPPER_INTERMISSION, false);
	this.setSpriteBattlerPosData(POSE_STRIPPER_INTERMISSION);
	this.setHasTachiePubic(false);
};

Game_Actor.prototype.isInStripperMouthPose = function() {
	return this.poseName == POSE_STRIPPER_MOUTH;
};
Game_Actor.prototype.setStripperMouthPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_MOUTH;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_MOUTH);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_MOUTH);
	this.setAllBodySlotsFree();
	
	this.setTachiePole(1);
	this.setTachieHead(1);
	this.setTachieLeftArm('normal_1');
	this.setTachieRightArm('normal_1');
	this.setMaxTachieWetId(3);
	

	this.emoteStripperMouthPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperBoobsPose = function() {
	return this.poseName == POSE_STRIPPER_BOOBS;
};
Game_Actor.prototype.setStripperBoobsPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_BOOBS;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_BOOBS);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_BOOBS);
	this.setAllBodySlotsFree();
	
	this.setTachiePole(1);
	this.setTachieHead(1);
	this.setMaxTachieWetId(3);
	
	this.emoteStripperBoobsPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperPussyPose = function() {
	return this.poseName == POSE_STRIPPER_PUSSY;
};
Game_Actor.prototype.setStripperPussyPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_PUSSY;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_PUSSY);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_PUSSY);
	this.setAllBodySlotsFree();
	
	this.setTachieRightArm('normal_1');
	this.setMaxTachieWetId(3);
	
	this.emoteStripperPussyPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperButtPose = function() {
	return this.poseName == POSE_STRIPPER_BUTT;
};
Game_Actor.prototype.setStripperButtPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_BUTT;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_BUTT);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_BUTT);
	this.setAllBodySlotsFree();
	
	this.setTachiePole(1);
	this.setTachieRightArm('normal_1');
	this.setMaxTachieWetId(3);
	
	this.emoteStripperButtPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperSexPose = function() {
	return this.poseName == POSE_STRIPPER_VIP;
};
Game_Actor.prototype.setStripperSexPose = function() {
	this.setAllowTachieUpdate(false);
	
	this.setPose(POSE_STRIPPER_VIP);
	this.setSpriteBattlerPosData(POSE_STRIPPER_VIP);
	this.setAllBodySlotsFree();
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setAnalToyInsertablePose(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(Karryn.isCensored())
		this.setTachieBody('1_cen');
	else
		this.setTachieBody('1');
	
	this.setTachieHead('normal');
	this.setTachieSemenFaceExtension('normal_');
	this.setTachieBoobs('normal');
	this.setTachieSemenBoobsExtension('normal_');
	this.setTachieRightArm('normal');
	this.setTachieLeftArm('normal');
	this.setTachieSemenLeftArmExtension('normal_');
	this.setTachieSemenRightArmExtension('normal_');
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	
	$gameMap.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME, null);
	BattleManager.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME, null);
	
	BattleManager.playSpecialBgm_StripperSex();
	this.emoteStripperVIPPose();
	this.setAllowTachieUpdate(true);
	
	BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_VIP_START);
};


//////
// No Stamina Defeat Pose

// Lose the battle when in the following poses with no stamina
Game_Actor.prototype.isInNoStaminaIsDefeatPose = function() {
	if(!DEBUG_MODE) return true;
	
	return this.isInMasturbationCouchPose();
};


//////
// Ignore Metal Properties Pose
Game_Actor.prototype.isInIgnoreMetalPropertiesPose = function() {
	return this.isInDefeatedPose() || this.isInJobPose();
};

////////
// Ignore No Stamina and No Energy Pose

//Battle does not automatically end with no stamina and no energy
Game_Battler.prototype.isInNeverDeadPose = function() {
	return false;
};
Game_Actor.prototype.isInNeverDeadPose = function() {
	return this.isInDefeatedPose();
};

///////////
// No Ejaculation Stock does not mean it is over Pose

Game_Actor.prototype.isInNoEjaculationStockStillContinuesPose = function() {
	return this.isInWaitressSexPose() || $gameParty.isInGloryBattle || ($gameParty.isInStripperBattle && !this.isInStripperSexPose());
};

///////
// Draw Enemies Above Tachie Pose

Game_Actor.prototype.isDrawEnemiesAboveBattleTachiePose = function() {
	return this.isInMasturbationCouchPose() || this.isInDefeatedPose() || this.isInReceptionistPose() || $gameParty.isInGloryBattle;
};

/////////////
// Don't Gain Fatigue Per Turn Pose

Game_Actor.prototype.isDontGainFatiguePerTurnPose = function() {
	return this.isInMasturbationCouchPose() || this.isInDefeatedPose() || this.isInJobPose();
};

//////
// Battleback Setting Pose

Game_Actor.prototype.isInDrawBattleBacks1CloseGroundPose = function() {
	return this.isInThugGangbangPose();
};
Game_Actor.prototype.isInDrawBattleBacks1FarGroundPose = function() {
	return this.isInDownOrgasmPose();
};
Game_Actor.prototype.isInDrawDefaultBattleBacks1Pose = function() {
	return $dataMap.specifyBattleback && !this.isInDrawBattleBacks1CloseGroundPose() && !this.isInDrawBattleBacks1FarGroundPose() && !this.isInJobPose() && !this.isInDefeatedPose() && !this.isInMasturbationCouchPose() && !this.isInMapPose();
};

//Pose Battlebacks
 
Game_Actor.prototype.setPoseBattlebacks = function() {
	if(!BattleManager._spriteset) return;
	let battleback1Name = '' + $dataMap.battleback1Name;
	let battleback2Name = '' + $dataMap.battleback2Name;
	
	if(Prison.isNightBattle()) battleback2Name += '_night';
	
	if(this.isInDrawBattleBacks1CloseGroundPose()) {
		$gameMap.changeBattleback(battleback1Name + '_close', battleback2Name);
		BattleManager.changeBattleback(battleback1Name + '_close', battleback2Name);
	}
	else if(this.isInDrawBattleBacks1FarGroundPose()) {
		$gameMap.changeBattleback(battleback1Name + '_far', battleback2Name);
		BattleManager.changeBattleback(battleback1Name + '_far', battleback2Name);
	}
	else if(this.isInDrawDefaultBattleBacks1Pose()) {
		$gameMap.changeBattleback(battleback1Name, battleback2Name);
		BattleManager.changeBattleback(battleback1Name, battleback2Name);
	} 
	else return;
};



///////
// Show Enemy Name Only During Valid Selection Pose

Game_Actor.prototype.isInShowEnemyNameOnlyDuringValidSelectionPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || this.isInStripperSexPose();
};
Game_Actor.prototype.isInDontShowEnemyNameEverPose = function() {
	return $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInShowEnemyImageOnlyDuringValidSelectionPose = function() {
	return this.isInMasturbationCouchPose() || this.isInDefeatedPose() || this.isInWaitressSexPose() || $gameParty.isInGloryBattle || this.isInStripperSexPose();
};
Game_Actor.prototype.isInShowEnemyGaugeOnlyDuringValidSelectionPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || this.isInStripperSexPose();
};
Game_Actor.prototype.isInDontShowEnemyHealthGaugePose = function() {
	return $gameParty.isInWaitressBattle || this.isInDefeatedPose() || $gameParty.isInGloryBattle || $gameParty.isInStripperBattle;
};
Game_Actor.prototype.isInDontShowEnemyPleasureGaugePose = function() {
	return $gameParty.isInWaitressBattle || this.isInDefeatedPose() || $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInDontShowEnemyStateIconsPose = function() {
	return $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInReorderEnemyImagesOnSelectionPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || $gameParty.isInGloryBattle || this.isInStripperSexPose();
};
Game_Actor.prototype.isInDrawEnemiesAtHalfWidthPose = function() {
	//return false;
	return $gameParty.isInWaitressBattle || this.isInDefeatedPose() || $gameParty.isInStripperBattle;
};
Game_Actor.prototype.isInEnemiesDontRegenPleasurePose = function() {
	return this.isInWaitressServingPose() || ($gameParty.isInStripperBattle && !this.isInStripperSexPose());
};
Game_Actor.prototype.isInEnemiesDontDrawSelectionPose = function() {
	return $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInEnemiesJoinArousedAndStayArousedPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || this.isInStripperSexPose();
};

////////
// Set Defeat Poses
////////////////

Game_Actor.prototype.isInDefeatedPose = function() {
	return this.isInDefeatedLevel1Pose() || this.isInDefeatedLevel2Pose() || this.isInDefeatedLevel3Pose() || this.isInDefeatedLevel4Pose() || this.isInDefeatedLevel5Pose() || this.isInDefeatedGuardPose();
};

Game_Actor.prototype.isInDefeatedLevel1Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL1;
};
Game_Actor.prototype.setDefeatedLevel1Pose = function() {
	this.setPose(POSE_DEFEATED_LEVEL1);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL1);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setHasTachiePubic(false);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}

	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftBoobId(1);
	this.setMaxTachieSemenRightBoobId(1);
	this.setMaxTachieSemenFaceId(1);
	
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(PUSSY_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.emoteDefeatedLevelOnePose(false);
};

Game_Actor.prototype.isInDefeatedLevel2Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL2;
};
Game_Actor.prototype.setDefeatedLevel2Pose = function() {
	this.setPose(POSE_DEFEATED_LEVEL2);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL2);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		this.setTachieHat(1);
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtTopRightId(1);
	this.setMaxTachieSemenButtBottomRightId(1);
	this.setMaxTachieSemenButtTopLeftId(1);
	this.setMaxTachieSemenButtBottomLeftId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.emoteDefeatedLevelTwoPose();
};

Game_Actor.prototype.isInDefeatedLevel3Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL3;
};
Game_Actor.prototype.setDefeatedLevel3Pose = function() {
	this.setPose(POSE_DEFEATED_LEVEL3);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL3);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	
	this.setTachieBoobs('normal');
	if(this.isWearingGlovesAndHat())
		this.setTachieTie('normal');
	
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);
	
	
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.emoteDefeatedLevelThreePose();
};

Game_Actor.prototype.isInDefeatedLevel4Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL4;
};
Game_Actor.prototype.setDefeatedLevel4Pose = function() {
	this.setPose(POSE_DEFEATED_LEVEL4);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL4);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieHat(1);
	}
	else {
		this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtRightId(1);
	this.setMaxTachieSemenButtLeftId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.emoteDefeatedLevelFourPose();
};

Game_Actor.prototype.isInDefeatedLevel5Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL5;
};
Game_Actor.prototype.setDefeatedLevel5Pose = function() {
	this.setPose(POSE_DEFEATED_LEVEL5);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL5);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	

	
	this.emoteDefeatedLevelFivePose();
};

Game_Actor.prototype.isInDefeatedGuardPose = function() {
	return this.poseName == POSE_DEFEATED_GUARD;
};
Game_Actor.prototype.setDefeatedLevelGuardPose = function() {
	this.setPose(POSE_DEFEATED_GUARD);
	this.setSpriteBattlerPosData(POSE_DEFEATED_GUARD);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	
	this.setTachieClitToyInFrontOfMainToys(false);
	this.setTachieAnalToyInFrontOfEverything(true);
	this.setTachieRightArmInFrontOfBody(false);
	this.setTachieLeftArmInFrontOfBody(false);
	this.setTachieLeftArmInFrontOfBoobs(false);
	this.setTachieRightArmInFrontOfBoobs(false);
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		this.resetTachieHat();
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody(1);
		this.setTachieHat(1);
	}

	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	
	this.setTachieBoobs('empty');
	this.setTachieSemenBoobsExtension('empty_');

	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.emoteDefeatedGuardPose();
};

/////////
// Situations
//////////////

Game_Actor.prototype.setPreBattlePose = function() {
	if(this.hasHalberd()) {
		this.setStandbyPose();
	}	
	else {
		this.setUnarmedPose();
	}
};

//Karryn takes damage
Remtairy.Poses.Game_Actor_performDamage = Game_Actor.prototype.performDamage;
Game_Actor.prototype.performDamage = function() {
	Remtairy.Poses.Game_Actor_performDamage.call(this);
	let result = this.result();
	//Combat pose only
	if(this.isInCombatPose()) {
		//Graze result
		if(result.graze) {
			this.gainStaminaExp(15, $gameTroop.getAverageEnemyExperienceLvl());
			this.gainAgilityExp(80, $gameTroop.getAverageEnemyExperienceLvl());
			this.setEvadePose();
			this.passiveEvadePoseEffect();
			//this.setHp(this.hp - Math.round(this.agi/2));
		}
		//Hit result
		else {
			//Stamina damage
			if((result.staminaDamage > 0 || result.hpDamage > 0) && !this.hasNoStamina()) {
				this.gainStaminaExp(25, $gameTroop.getAverageEnemyExperienceLvl());
				this.gainEnduranceExp(15, $gameTroop.getAverageEnemyExperienceLvl());
				if(!result.skillTypeEnemyPetting && !result.skillTypeEnemySex && !result.skillTypeEnemyBukkake && !result.skillTypeActorOnani) {
					this.gainStrengthExp(30, $gameTroop.getAverageEnemyExperienceLvl());
					this.setDefendPose();
					this._playthroughRecordFullHitTakenCount++;
				}
			}
		}
		
	} //end combat pose
	//Sex or down pose
	else {
		
		if((result.staminaDamage > 0 || result.hpDamage > 0) && !this.hasNoStamina()) {
			this.gainStrengthExp(15, $gameTroop.getAverageEnemyExperienceLvl());
			this.gainStaminaExp(15, $gameTroop.getAverageEnemyExperienceLvl());
		}
		
		
	}
	
	//Critically hitted
	if(result.critical) {
		this.gainEnduranceExp(120, $gameTroop.getAverageEnemyExperienceLvl());
	}
};

//Karryn evades
Remtairy.Poses.Game_Actor_performEvasion = Game_Actor.prototype.performEvasion;
Game_Actor.prototype.performEvasion = function() {
    Remtairy.Poses.Game_Actor_performEvasion.call(this);
    
	if(this.isInCombatPose()) {
		this.gainAgilityExp(90, $gameTroop.getAverageEnemyExperienceLvl());
		this.gainStaminaExp(15, $gameTroop.getAverageEnemyExperienceLvl());
		this.setEvadePose();
		let clothingDmg = Math.min(Math.max(this.agi * 0.25, this.getClothingMaxDurability() * 0.01), this.getClothingMaxDurability() * 0.08)
		this.damageClothing(clothingDmg, true);
		this.passiveEvadePoseEffect();
		this.setHp(this.hp - Math.round((this.agi * 1.35 + this.realMaxStamina * 0.01) * this.evasionCostMultipler()));
		this._playthroughRecordAttackEvadedCount++;
	}
};


//Karryn is using skill
Remtairy.Poses.Game_Actor_performAction = Game_Actor.prototype.performAction;
Game_Actor.prototype.performAction = function(action) {
	Remtairy.Poses.Game_Actor_performAction.call(this, action);
	
	if ((action.isActorAttackSkill() || action.isActorKickSkill()) && this.isInCombatPose()) {
		this.changeStanceBySkill(action.item());
		
		if(action.isActorKickSkill()) {
			this.setKickPose();
		}
		else if(this.isUsingHalberd()) {
			this.setAttackPose();
			this.passiveAttackPoseEffect();			
		}	
	}
};

/////////
// Refresh
////////////

//Gets called at the end of every action
Game_Actor.prototype.refreshPose = function(onlyChangeIfDifferent) {
	if(this.isInSexPose()) {
		return;
	}
	
	if(this.isInJobPose()) {
		return;
	}
	
	if(this.isInMasturbationCouchPose()) {
		return;
	}
	
	if(this.justOrgasmed()) {
		if(onlyChangeIfDifferent) { 
			if(!this.isInDownOrgasmPose()) 
				this.setDownOrgasmPose();
			return;
		}
		else if(!onlyChangeIfDifferent) {
			this.setDownOrgasmPose();
			return;
		}
	}
	//In a down orgasm pose but state worn off
	else if(this.isInDownOrgasmPose() && !this.justOrgasmed()) {
		this.setStandbyPose(); 
	}

	if(this.hasNoStamina()) {
		let notComingFromCombatPose = !this.isInCombatPose();
		if(onlyChangeIfDifferent) {
			if(!this.isInDownStaminaPose()) 
				this.setDownStaminaPose(notComingFromCombatPose);
		}
		else if(!onlyChangeIfDifferent) {
			this.setDownStaminaPose(notComingFromCombatPose); 
		}
		
	}
	//In a down stamina pose but now has stamina
	else if(this.isInDownStaminaPose() && !this.hasNoStamina()) {
		this.setStandbyPose(); 
	}
	
	if(this.isStateAffected(STATE_FALLEN_ID)) {
		if(onlyChangeIfDifferent) {
			if(!this.isInDownFallDownPose()) 
				this.setDownFallDownPose();
		}
		else if(!onlyChangeIfDifferent) {
			this.setDownFallDownPose(); 
		}
	}
	//In a down fall down pose but doesn't have state anymore
	else if(this.isInDownFallDownPose()) {
		this.setStandbyPose();
	}
	
	if(this.isInCombatPose()) {
		if(this.hasNoStamina()) {
			this.setDownStaminaPose(false);
		}
		else if(this.isGuarding) {
			if(onlyChangeIfDifferent) { 
				if(!this.isInDefendPose()) 
					this.setDefendPose();
			}
			else if(!onlyChangeIfDifferent) {
				this.setDefendPose();
			}
		}
		else if(this.hasHalberd()) {
			if(onlyChangeIfDifferent) { 
				if(!this.isInStandbyPose()) 
					this.setStandbyPose();
			}
			else if(!onlyChangeIfDifferent) {
				this.setStandbyPose();
			}
		}	
		else {
			if(onlyChangeIfDifferent) { 
				if(!this.isInUnarmedPose()) 
					this.setUnarmedPose();
			}
			else if(!onlyChangeIfDifferent) {
				this.setUnarmedPose();
			}
		}
	}
	
};

/////////
// Preload Karryn Poses

DKTools.PreloadManager.preloadKarrynPoses = function() {
	if(false && DEBUG_MODE && ConfigManager.remCutinsSmootherLoading && !ConfigManager.remCutinsDisabled && ConfigManager.remCutinsFast) {
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_bs1.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_bs2.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_bs3.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_fg_sc_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_fg_sc_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_fg_sc_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_flaunt1.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_or1.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_or2.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_goblin.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_human.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_human.png', hue: 0, caching: true });
		
		
		if(Karryn.isCensored()) { 
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_cen.png', hue: 0, caching: true });
		}
		else {
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human.png', hue: 0, caching: true });
		}
		
		
	}

	
	if(ConfigManager.remSmootherCGLoading) {
		DKTools.PreloadManager.preloadImage({ path: 'img/chatface/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/attack/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defend/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_falldown/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_stamina/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/evade/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/kick/', hue: 0, caching: true });
		//DKTools.PreloadManager.preloadImage({ path: 'img/karryn/map/', hue: 0, caching: true });
		//DKTools.PreloadManager.preloadImage({ path: 'img/karryn/receptionist/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/standby/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/unarmed/', hue: 0, caching: true });
		
		if(DEBUG_MODE) {
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/bj_kneeling/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_guard/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level1/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level2/', hue: 0, caching: true });
			
			//DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_dogeza/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_org/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/footj/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/goblin_cl/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/guard_gb/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/hj_standing/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/kick_counter/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/mas_couch/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/mas_inbattle/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/orc_paizuri/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/paizuri_laying/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/rimming/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/slime_piledriver/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/thug_gb/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/yeti_carry/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/waitress_table/', hue: 0, caching: true });
			
			
			if(!KARRYN_PRISON_GAME_IS_DEMO) {
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/cowgirl_karryn/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/cowgirl_reverse/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/cowgirl_lizardman/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level3/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level4/', hue: 0, caching: true });
				//DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level5/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/werewolf_back/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/yeti_paizuri/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_mouth/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_boobs/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_pussy/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_butt/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_vip/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_sit_left/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_sit_right/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_sitting/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_stand_left/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_stand_right/', hue: 0, caching: true });
			}
		}
	
	}
};

