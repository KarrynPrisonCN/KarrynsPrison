var Remtairy = Remtairy || {};
Remtairy.KarrynOnani = Remtairy.KarrynOnani || {};

//オナニーレベル１
const BATTLEBACK1_MASTURBATION_LV1_NAME = 'Mas01';
const MASTURBATION_LV1_BATTLERNAME = 'mas_target';

const MASTURBATION_LV1_X_OFFSET = 0;
const MASTURBATION_LV1_Y_OFFSET = -50;

const MASTURBATION_LV1_FINGERS_CLOSE_X = 912;
const MASTURBATION_LV1_FINGERS_CLOSE_Y = 260;

const MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_X = 890;
const MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_Y = 262;

const MASTURBATION_LV1_FINGERS_FAR_X = 985;
const MASTURBATION_LV1_FINGERS_FAR_Y = 265;

const MASTURBATION_LV1_BOOBS_NORMAL_X = 830;
const MASTURBATION_LV1_BOOBS_NORMAL_Y = 415;

const MASTURBATION_LV1_BOOBS_MOVED_X = 860;
const MASTURBATION_LV1_BOOBS_MOVED_Y = 365;

const MASTURBATION_LV1_NIPPLES_NORMAL_X = 530;
const MASTURBATION_LV1_NIPPLES_NORMAL_Y = 305;

const MASTURBATION_LV1_NIPPLES_TOUCH_X = 598;
const MASTURBATION_LV1_NIPPLES_TOUCH_Y = 290;

const MASTURBATION_LV1_CLIT_X = 665;
const MASTURBATION_LV1_CLIT_Y = 612;

const MASTURBATION_LV1_PUSSY_X = 642;
const MASTURBATION_LV1_PUSSY_Y = 714;

const MASTURBATION_LV1_ANAL_X = 641;
const MASTURBATION_LV1_ANAL_Y = 810;

//=============================================================================
 /*:
 * @plugindesc Karryn Onani
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const VAR_BASE_MASTURBATE_TURNS = 7;
const VAR_NOISE_LEVEL_MIN_EFFECT = 5;
const VAR_NOISE_LEVEL_INVASION_CHANCE = 0.2;

const TROOP_ONANI_LV1_ID = 15;

const SLOT_M_MOUTH = 70;
const SLOT_M_BOOBS = 71;
const SLOT_M_NIPPLES = 72;
const SLOT_M_CLIT = 73;
const SLOT_M_PUSSY = 74;
const SLOT_M_BUTT = 75;
const SLOT_M_ANAL = 76;
const SLOT_M_FINGERS = 77;

const ENEMYTYPE_MASTURBATE_MOUTH_TAG = 'm_mouth';
const ENEMYTYPE_MASTURBATE_FINGERS_TAG = 'm_fingers';
const ENEMYTYPE_MASTURBATE_BOOBS_TAG = 'm_boobs';
const ENEMYTYPE_MASTURBATE_NIPPLES_TAG = 'm_nipples';
const ENEMYTYPE_MASTURBATE_CLIT_TAG = 'm_clit';
const ENEMYTYPE_MASTURBATE_PUSSY_TAG = 'm_pussy';
const ENEMYTYPE_MASTURBATE_BUTT_TAG = 'm_butt';
const ENEMYTYPE_MASTURBATE_ANAL_TAG = 'm_anal';


////////////////
// Game Troop
////////////////

Game_Troop.prototype.setup_masturbationPose = function(troopId) {
	this._troopId = troopId;
    this._enemies = [];
	
	if(Karryn.isInMasturbationLevel1Pose()) {
		this.troop().members.forEach(function(member) {
			if ($dataEnemies[member.enemyId]) {
				let enemyId = member.enemyId;
				let x = MASTURBATION_LV1_X_OFFSET;
				let y = MASTURBATION_LV1_Y_OFFSET;
								
				let enemy = new Game_Enemy(enemyId, x, y, false);
				let spriteName = MASTURBATION_LV1_BATTLERNAME;
				let bodyType = enemy.enemyType();
				if(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_FINGERS_CLOSE_X;
					enemy._screenY = y + MASTURBATION_LV1_FINGERS_CLOSE_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_BOOBS_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_BOOBS_NORMAL_X;
					enemy._screenY = y + MASTURBATION_LV1_BOOBS_NORMAL_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_NIPPLES_NORMAL_X;
					enemy._screenY = y + MASTURBATION_LV1_NIPPLES_NORMAL_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_CLIT_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_CLIT_X;
					enemy._screenY = y + MASTURBATION_LV1_CLIT_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_PUSSY_X;
					enemy._screenY = y + MASTURBATION_LV1_PUSSY_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_ANAL_X;
					enemy._screenY = y + MASTURBATION_LV1_ANAL_Y;
				}
						
				enemy.setCustomEnemySprite(spriteName);
				//enemy.setCustomEnemySpritePosition(x, y);
				
				this._enemies.push(enemy);
			}
		}, this);
	}
	else console.log('Error with troop setup_masturbationPose');
};

////////////////
// Game Actor
////////////////

//Pre Battle
//Pre Masturbation Battle
Game_Actor.prototype.preMasturbationBattleSetup = function() {
	this.preBattleSetup();
	this.disableMentalPhase();
	this.resetInvasionNoiseLevel();
	this.setAsNoHalberdBattle();
	this.clearBattleSkillsFlags();
	
	this.addToActorMasturbatedRecord();
	this._masturbatedBeforeRestToday = true;
	this._orgasmCallQueuedUp = false;
	this._startOfInvasionBattle = false;
	this.removeState(STATE_CONFIDENT_ID);
	
	//Masturbate Battle Level 1
	$gameMap.changeBattleback(BATTLEBACK1_MASTURBATION_LV1_NAME, null);
	this.setMasturbationLevel1Pose();
	$gameVariables.setValue(VARIABLE_TROOPID_ID, TROOP_ONANI_LV1_ID);
	
	this._dirty = true;
}; 

//Post Battle
//Post Masturbation Battle
Game_Actor.prototype.postMasturbationBattleCleanup = function() {
	let invasionChance = this.getInvasionChance();
	let invasionNoiseLevel = this.getInvasionNoiseLevel();
	let invasionNoiseLevelEffect = Math.max(invasionChance * VAR_NOISE_LEVEL_INVASION_CHANCE, VAR_NOISE_LEVEL_MIN_EFFECT);

	if(invasionChance > 0)
		invasionChance += invasionNoiseLevel * invasionNoiseLevelEffect;
	
	if(Math.randomInt(100) < invasionChance) {
		$gameSwitches.setValue(SWITCH_INVASION_BATTLE_ID, true);
		this._startOfInvasionBattle = true;
		if(this._tempRecordOrgasmCount > 0) 
			BattleManager.setEnemySneakAttackBattle();
		this.refreshSlutLvlStageVariables_General();
	}
	else {
		$gameSwitches.setValue(SWITCH_INVASION_BATTLE_ID, false);
		this._startOfInvasionBattle = false;
		this.postBattleCleanup();
		$gameActors.actor(ACTOR_KARRYN_ID).setPleasure(0);
	}
	
	$gameActors.actor(ACTOR_KARRYN_ID).setWardenMapPose(0);
};	


	
//Skill cost
Game_Actor.prototype.staminaCost_masturbateBattleSkills = function() {
	let cost = Math.round(this.maxstamina / 
	(VAR_BASE_MASTURBATE_TURNS + this.masturbateLvl() * 2))
	return cost;
};

// Masturbate Battle Body Slots
Game_Actor.prototype.masturbateBattle_setRightHandOn = function(slotPart) { 
	this.setBodyPart(RIGHT_HAND_ID, slotPart);
};
Game_Actor.prototype.masturbateBattle_setLeftHandOn = function(slotPart) { 
	this.setBodyPart(LEFT_HAND_ID, slotPart);
};
Game_Actor.prototype.masturbateBattle_setMouthOn = function(slotPart) { 
	this.setBodyPart(MOUTH_ID, slotPart);
};

Game_Actor.prototype.masturbateBattle_rightHandIsOn = function(slotPart) { 
	return this.getBodySlotStatus(RIGHT_HAND_ID) === slotPart;
};
Game_Actor.prototype.masturbateBattle_leftHandIsOn = function(slotPart) { 
	return this.getBodySlotStatus(LEFT_HAND_ID) === slotPart;
};
Game_Actor.prototype.masturbateBattle_MouthIsOn = function(slotPart) { 
	return this.getBodySlotStatus(MOUTH_ID) === slotPart;
};

Game_Actor.prototype.masturbateBattle_rightHandIsFree = function() { 
	return this.getBodySlotStatus(RIGHT_HAND_ID) === SLOT_FREE;
};
Game_Actor.prototype.masturbateBattle_LeftHandIsFree = function() { 
	return this.getBodySlotStatus(LEFT_HAND_ID) === SLOT_FREE;
};
Game_Actor.prototype.masturbateBattle_MouthIsFree = function() { 
	return this.getBodySlotStatus(MOUTH_ID) === SLOT_FREE;
};

////////
// Noise

Game_Actor.prototype.resetInvasionNoiseLevel = function() { 
	this._invasionNoiseLevel = 0;
	this._invasionNoise = 0;
};
Game_Actor.prototype.increaseInvasionNoise = function(value) { 
	let noiseMultipler = 1;
	let generalReactionScore = this.getReactionScore();
	
	if(generalReactionScore >= VAR_DEF_RS_LV3_REQ) 
		noiseMultipler = 2;
	else if(generalReactionScore >= VAR_DEF_RS_LV2_REQ) 
		noiseMultipler = 1.5;
	else if(generalReactionScore >= VAR_DEF_RS_LV1_REQ) 
		noiseMultipler = 1;
	else
		noiseMultipler = 0.5;
	
	let noiseValue = value * noiseMultipler;
	this._invasionNoise += noiseValue;
	if(this._invasionNoise >= 10) {
		if(Math.randomInt(5) < this._invasionNoise - 8) {
			this.increaseInvasionNoiseLevel(1);
			this._invasionNoise = 0;
		}
	}
};
Game_Actor.prototype.increaseInvasionNoiseLevel = function(levels) { 
	this._invasionNoiseLevel += levels;
	
	let invasionNoiseLevelText = '';
	
	if(this._invasionNoiseLevel <= 2) invasionNoiseLevelText = TextManager.invasionNoiseLevelOne;
	else if(this._invasionNoiseLevel <= 4) invasionNoiseLevelText = TextManager.invasionNoiseLevelTwo;
	else if(this._invasionNoiseLevel <= 6) invasionNoiseLevelText = TextManager.invasionNoiseLevelThree;
	else invasionNoiseLevelText = TextManager.invasionNoiseLevelFour;
	
	BattleManager._logWindow.push('addText', invasionNoiseLevelText);
	
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		$gameParty.increaseExtraGoldReward(Math.randomInt(20 * levels));
};

Game_Actor.prototype.getInvasionNoiseLevel = function() { 
	return this._invasionNoiseLevel;
};

////////
// Is Valid Target

Game_Enemy.prototype.isValidTargetForMasturbateBattle_skillTouch = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	let validTarget = (
	bodyType == ENEMYTYPE_MASTURBATE_BOOBS_TAG || bodyType == ENEMYTYPE_MASTURBATE_CLIT_TAG || 
	(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG && actor.boobsDesire >= actor.nipplesPettingBoobsDesireRequirement()) || 
	(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG && actor.buttDesire >= actor.analPettingButtDesireRequirement()) || 
	(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG && actor.pussyDesire >= actor.pussyPettingPussyDesireRequirement())
	);
	if(validTarget) {
		this._selectionShowName = true;
		this.masturbateBattleSpritePos_nipples();
		this.masturbateBattleSpritePos_boobs();
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForMasturbateBattle_skillFinger = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	let validTarget = ( 
	(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG && actor.pussyDesire >= actor.pussySexPussyDesireRequirement() && actor.isWet) || 
	(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG && actor.buttDesire >= actor.analSexButtDesireRequirement()) );
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForMasturbateBattle_skillSuck = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	let validTarget = (
	(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) || 
	(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG && actor.boobsDesire + actor.mouthDesire >= actor.nipplesPettingBoobsDesireRequirement() * 2)
	);
	if(validTarget) {
		this._selectionShowName = true;
		this.masturbateBattleSpritePos_fingers();
		this.masturbateBattleSpritePos_nipples();
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

///////////
// Masturbation Sprite Pos

Game_Enemy.prototype.masturbateBattleSpritePos_fingers = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) {
		if(actor.tachieHead == 'far') 
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_FINGERS_FAR_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_FINGERS_FAR_Y);
		else if(actor.tachieHead == 'close') {
			if(actor.tachieRightArm == 'suck_fingers') 
				this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_Y);
			else
				this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_Y);
		}
	}
};

Game_Enemy.prototype.masturbateBattleSpritePos_boobs = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_BOOBS_TAG) {
		if(actor.tachieLeftBoob == 'normal' || actor.tachieLeftBoob == 'touch_oppai') 
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_BOOBS_NORMAL_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_BOOBS_NORMAL_Y);
		else {
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_BOOBS_MOVED_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_BOOBS_MOVED_Y);
		}
	}
};

Game_Enemy.prototype.masturbateBattleSpritePos_nipples = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG) {
		if(actor.tachieRightBoob == 'touch_chikubi') 
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_Y);
		else {
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_Y);
		}
	}
};

//////////
// Release

Game_Actor.prototype.masturbateBattle_resetLeftHand = function() {
	if(this.masturbateBattle_leftHandIsOn(SLOT_M_MOUTH)) {
		this.masturbateBattle_setMouthOn(SLOT_FREE);
		this.setMaxTachieDroolFingersId(0); 
		this.setMaxTachieDroolNipplesId(0);
		//if(this.tachieHead == 'far')
		//	this.setTachieMouth('far_1');
		//else
		//	this.setTachieMouth('close_1');
	}
	this.masturbateBattle_setLeftHandOn(SLOT_FREE);
	this.setTachieLeftArmInFrontOfBody(true);
	
	this.setTachieLeftArm('normal');
	this.setTachieLeftBoob('normal');

};
	
Game_Actor.prototype.masturbateBattle_resetRightHand = function() {
	if(this.masturbateBattle_rightHandIsOn(SLOT_M_MOUTH)) {
		this.masturbateBattle_setMouthOn(SLOT_FREE);
		this.setMaxTachieDroolFingersId(0); 
		this.setMaxTachieDroolNipplesId(0);
		//if(this.tachieHead == 'far')
		//	this.setTachieMouth('far_1');
		//else
		//	this.setTachieMouth('close_1');
	}
	this.masturbateBattle_setRightHandOn(SLOT_FREE);
	this.setTachieRightArmInFrontOfBody(false);
	this.setTachieRightArmInFrontOfBoobs(true);
	this.setTachieRightArmInFrontOfHeadAndBehindBody(false);
	
	this.setTachieRightArm('normal');
	this.setTachieRightBoob('normal');
	
};

////////
// Before Eval

//Touch
Game_Actor.prototype.beforeEval_masturbateBattle_skillTouch = function(target) {
	let bodyType = target.enemyType();
	let onaniLvl = this.masturbateLvl();
	let extraGoldReward = 0;
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		extraGoldReward = Math.randomInt(onaniLvl * 5 + 12);
	
	if(bodyType == ENEMYTYPE_MASTURBATE_CLIT_TAG) {
		if(!this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetRightHand();
		this.masturbateBattle_setRightHandOn(SLOT_M_CLIT);
		this.resetTachieRightArm();
		this.setTachieRightBoob('touch_mame');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchClit);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_CLIT);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG) {
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_PUSSY);
		this.setTachieLeftArm('touch_omanko');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchPussy);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_PUSSY);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.2);
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG) {
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_ANAL);
		this.setTachieLeftArm('touch_anaru');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchAnal);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_ANUS);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.2);
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_BOOBS_TAG) {
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_BOOBS))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_BOOBS);
		this.resetTachieLeftArm();
		this.setTachieLeftBoob('touch_oppai');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchBoobs);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_BOOBS);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG) {
		if(!this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetRightHand();
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setRightHandOn(SLOT_M_NIPPLES);
		this.masturbateBattle_setLeftHandOn(SLOT_M_NIPPLES);
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.setTachieRightBoob('touch_chikubi');
		this.setTachieLeftBoob('touch_chikubi');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchNipples);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_NIPPLES);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.2);
	}
	
	this.emoteMasturbateBattleOne();
};//End Touch

//Finger
Game_Actor.prototype.beforeEval_masturbateBattle_skillFinger = function(target) {
	let bodyType = target.enemyType();
	let onaniLvl = this.masturbateLvl();
	let extraGoldReward = 0;
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		extraGoldReward = Math.randomInt(onaniLvl * 7 + 15);
	
	if(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG) {
		
		if(this.masturbateBattle_rightHandIsFree() || (this.masturbateBattle_rightHandIsFree() === this.masturbateBattle_LeftHandIsFree() && !this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT) )) {
			if(!this.masturbateBattle_rightHandIsOn(SLOT_M_PUSSY))
				this.increaseInvasionNoise(2);
			
			this.masturbateBattle_resetRightHand();
			this.masturbateBattle_setRightHandOn(SLOT_M_PUSSY);
			this.setTachieRightArmInFrontOfBody(true);
			this.setTachieRightArmInFrontOfBoobs(false);
			if(Karryn.isCensored())
				this.setTachieRightArm('finger_omanko_cen');
			else
				this.setTachieRightArm('finger_omanko');
		}
		else {
			if(!this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY))
				this.increaseInvasionNoise(2);
			
			this.masturbateBattle_resetLeftHand();
			this.masturbateBattle_setLeftHandOn(SLOT_M_PUSSY);
			if(Karryn.isCensored())
				this.setTachieLeftArm('finger_omanko_cen');
			else
				this.setTachieLeftArm('finger_omanko');
			
		}
		
		
		if(Karryn.isCensored())
			this.setTachieHolePussy('open_cen');
		else
			this.setTachieHolePussy('open');
		if(this.masturbateBattle_MouthIsFree()) {
			//this.setTachieEyes('far_1');
			//this.setTachieMouth('far_1');
			this.setTachieHead('far');
			//this.setTachieHair('far');
		}
		
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleFingerPussy);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_PUSSY);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG) {
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_ANAL);
		if(Karryn.isCensored())
			this.setTachieLeftArm('finger_anaru_cen');
		else
			this.setTachieLeftArm('finger_anaru');
		this.setTachieHoleAnus('open');
		if(this.masturbateBattle_MouthIsFree()) {
			//this.setTachieEyes('far_1');
			//this.setTachieMouth('far_1');
			this.setTachieHead('far');
			//this.setTachieHair('far');
		}
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleFingerAnal);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_ANUS);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
	}
	this.emoteMasturbateBattleOne();
};//End Finger

//Suck
Game_Actor.prototype.beforeEval_masturbateBattle_skillSuck = function(target) {
	let bodyType = target.enemyType();
	let onaniLvl = this.masturbateLvl();
	let extraGoldReward = 0;
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		extraGoldReward = Math.randomInt(onaniLvl * 5 + 8);
	
	if(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) {
		if(!this.masturbateBattle_MouthIsOn(SLOT_M_FINGERS))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetRightHand();
		if(this.masturbateBattle_leftHandIsOn(SLOT_M_MOUTH)) this.masturbateBattle_resetLeftHand();
		
		this.masturbateBattle_setRightHandOn(SLOT_M_MOUTH);
		this.masturbateBattle_setMouthOn(SLOT_M_FINGERS);
		this.setTachieRightArm('suck_fingers');
		this.setTachieRightArmInFrontOfBody(false);
		this.setTachieRightArmInFrontOfBoobs(false);
		this.setTachieRightArmInFrontOfHeadAndBehindBody(true);
		//this.setTachieEyes('close_1');
		//this.resetTachieMouth();
		this.setTachieHead('close');
		//this.setTachieHair('close');
		this.increaseLiquidDroolFingers(1);
		this.setMaxTachieDroolFingersId(3); 
		this.setMaxTachieDroolNipplesId(0);
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleSuckFingers);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_SUCK_FINGERS);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG) {
		if(!this.masturbateBattle_MouthIsOn(SLOT_M_NIPPLES))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		if(this.masturbateBattle_rightHandIsOn(SLOT_M_MOUTH)) this.masturbateBattle_resetRightHand();
		
		this.masturbateBattle_setLeftHandOn(SLOT_M_MOUTH);
		this.masturbateBattle_setMouthOn(SLOT_M_NIPPLES);
		this.resetTachieLeftArm();
		this.setTachieLeftBoob('suck_chikubi');
		//this.setTachieEyes('close_1');
		//this.resetTachieMouth();
		this.setTachieHead('close');
		//this.setTachieHair('close');
		this.increaseLiquidDroolNipples(1);
		this.setMaxTachieDroolFingersId(0); 
		this.setMaxTachieDroolNipplesId(3);
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleSuckNipples);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_SUCK_NIPPLES);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.5);
	}
	this.emoteMasturbateBattleOne();
};//End Suck

////////
// Damage Formula

Game_Actor.prototype.dmgFormula_masturbateBattle = function(target) { 
	let activeAreas = 0;
	let mouthDesireGain = 0;
	let boobsDesireGain = 0;
	let pussyDesireGain = 0;
	let buttDesireGain = 0;
	let randomDesireGainFromMouth = 0;
	let randomDesireGainFromRightHand = 0;
	let randomDesireGainFromLeftHand = 0;
	
	let skillLvl = this.masturbateLvl();
	let skillRating = this.masturbateSkillRating();
	let pettingRate = this.elementRate(ELEMENT_PETTING_ID);

	let pleasureFeedback = 0;
	
	//Right Hand
	if(!this.masturbateBattle_rightHandIsFree()) {
		activeAreas++;
		
		if(this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES)) {
			let baseDmg = BASEDMG_PETTING_NIPPLES;
			let sensitivityRating = this.nipplesSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.3;
			randomDesireGainFromRightHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorNipplesPleasureRecord(possiblePleasure);
			}
			
			this.addToActorNipplesPettedRecord(false);
		}
		else if(this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT)) {
			let baseDmg = BASEDMG_PETTING_CLIT;
			let sensitivityRating = this.clitSensitivity();
			let desireTotal = this.pussyDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			pussyDesireGain += desireGain * 0.4;
			randomDesireGainFromRightHand += desireGain * 0.6;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorClitPleasureRecord(possiblePleasure);
			}
			
			this.addToActorClitPettedRecord(false);
		}
		else if(this.masturbateBattle_rightHandIsOn(SLOT_M_PUSSY)) {
			let baseDmg = BASEDMG_PETTING_PUSSY;
			let sensitivityRating = this.pussySensitivity();
			let desireTotal = this.pussyDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			pussyDesireGain += desireGain * 0.3;
			randomDesireGainFromRightHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorPussyPleasureRecord(possiblePleasure);
			}
			
			this.addToActorPussyPettedRecord(false);
		}
	}//End right hand
	
	//Left Hand
	if(!this.masturbateBattle_LeftHandIsFree()) {
		activeAreas++;
		
		if(this.masturbateBattle_leftHandIsOn(SLOT_M_BOOBS)) {
			let baseDmg = BASEDMG_PETTING_BOOBS;
			let sensitivityRating = this.boobsSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.4;
			randomDesireGainFromLeftHand += desireGain * 0.6;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorBoobsPleasureRecord(possiblePleasure);
			}
			
			this.addToActorBoobsPettedRecord(false);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_NIPPLES)) {
			let baseDmg = BASEDMG_PETTING_NIPPLES;
			let sensitivityRating = this.nipplesSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.3;
			randomDesireGainFromLeftHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorNipplesPleasureRecord(possiblePleasure);
			}
			
			if(!this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES)) 
				this.addToActorNipplesPettedRecord(false);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_CLIT)) {
			let baseDmg = BASEDMG_PETTING_CLIT;
			let sensitivityRating = this.clitSensitivity();
			let desireTotal = this.pussyDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			pussyDesireGain += desireGain * 0.4;
			randomDesireGainFromLeftHand += desireGain * 0.6;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorClitPleasureRecord(possiblePleasure);
			}
			
			this.addToActorClitPettedRecord(false);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY)) {
			let baseDmg = BASEDMG_PETTING_PUSSY + 2;
			let sensitivityRating = this.pussySensitivity();
			let desireTotal = this.pussyDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			pussyDesireGain += desireGain * 0.3;
			randomDesireGainFromLeftHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorPussyPleasureRecord(possiblePleasure);
			}
			
			this.addToActorPussyPettedRecord(false);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL)) {
			let baseDmg = BASEDMG_PETTING_ANAL;
			let sensitivityRating = this.analSensitivity();
			let desireTotal = this.buttDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			buttDesireGain += desireGain * 0.3;
			randomDesireGainFromLeftHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorAnalPleasureRecord(possiblePleasure);
			}
			
			this.addToActorAnalPettedRecord(false);
		}
	} //End left hand
	
	//Mouth
	if(!this.masturbateBattle_MouthIsFree()) {
		activeAreas++;
		
		if(this.masturbateBattle_MouthIsOn(SLOT_M_NIPPLES)) {
			let baseDmg = BASEDMG_PETTING_NIPPLES;
			let sensitivityRating = this.nipplesSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.3;
			randomDesireGainFromMouth += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorNipplesPleasureRecord(possiblePleasure);
			}
			
			this.increaseLiquidDroolNipples(1);
			this.addToActorNipplesPettedRecord(false);
		}
		else if(this.masturbateBattle_MouthIsOn(SLOT_M_FINGERS)) {
			let baseDmg = BASEDMG_SUCKING_FINGERS;
			let sensitivityRating = this.mouthSensitivity();
			let desireTotal = this.mouthDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			mouthDesireGain += desireGain * 0.3;
			randomDesireGainFromMouth += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex) * skillRating * pettingRate * sensitivityRating;
			possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorMouthPleasureRecord(possiblePleasure);
			}
			
			this.increaseLiquidDroolFingers(1);
			this.addToActorFingersSuckedRecord(false);
		}
	}//End mouth
	
	target.result().pleasureFeedback = pleasureFeedback;
	this.gainMouthDesire(mouthDesireGain);
	this.gainBoobsDesire(boobsDesireGain);
	this.gainPussyDesire(pussyDesireGain);
	this.gainButtDesire(buttDesireGain);
	this.gainRandomDesire(randomDesireGainFromMouth);
	this.gainRandomDesire(randomDesireGainFromRightHand);
	this.gainRandomDesire(randomDesireGainFromLeftHand);
	
	this.gainHp(-this.staminaCost_masturbateBattleSkills());
	
	let noiseGain = 0; 
	
	if(activeAreas === 1) {
		this.gainDexterityExp(10, this.level);
		this.gainEnduranceExp(15, this.level);
	}
	else if(activeAreas === 2) {
		this.gainDexterityExp(15, this.level);
		this.gainEnduranceExp(25, this.level);
	}
	else if(activeAreas === 3) {
		this.gainDexterityExp(20, this.level);
		this.gainEnduranceExp(40, this.level);
	}
	
	if(this.tachieMouth == 'close_3' || this.tachieMouth == 'far_3') {
		noiseGain += 8;
	}
	else if(this.tachieMouth == 'close_2' || this.tachieMouth == 'far_2') {
		noiseGain += 5;
	}
	else if(this.tachieMouth == 'close_1' || this.tachieMouth == 'far_1') {
		noiseGain += 2;
	}
	else {
		noiseGain += 4;
	}
	if(this.isWet) {
		if(this.tachieLeftArm == 'finger_omanko' || this.tachieRightArm == 'finger_omanko' ||
		this.tachieLeftArm == 'finger_omanko_cen' || this.tachieRightArm == 'finger_omanko_cen')
			noiseGain += 3;
		else 
			noiseGain += 1;
	}
	
	this.increaseInvasionNoise(noiseGain);
	
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASTURBATE);
	
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO)) {
		$gameParty.increaseExtraGoldReward(Math.randomInt(2 * activeAreas * this.masturbateLvl()));
	}
	
	return 0;
};

///////
// Orgasm

Game_Actor.prototype.masturbationBattleOrgasm = function(orgasmCount) {
	if(this.isInMasturbationLevel1Pose()) {
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_resetRightHand();
		this.setTachieHead('far');
		this.setTachieEyes('far_1');
		this.setTachieMouth('far_3');
		this.setTachieHair('far');
		this.setTachieFrontA('climax');
	}
	
	if(this.isInMasturbationPose()) {
		this.increaseInvasionNoiseLevel(orgasmCount);
	}
};
