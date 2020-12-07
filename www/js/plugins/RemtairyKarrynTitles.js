var Remtairy = Remtairy || {};
Remtairy.KarrynTitles = Remtairy.KarrynTitles || {};

//=============================================================================
 /*:
 * @plugindesc Karryn Titles
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const TITLE_ID_EMPEROR_SECRETARY = 2;
const TITLE_ID_NEWBIE = 3;

const TITLE_ID_EFFICIENT_ADMINSTRATOR = 6;
const TITLE_ID_CORRUPTED_OFFICIAL = 7;
const TITLE_ID_CORPORAL_PUNISHER = 8;
const TITLE_ID_CAREFUL_SUPERVISOR = 9;
const TITLE_ID_WORKAHOLIC = 10;
const TITLE_ID_CORNERCUTTING_EMPLOYER = 11;

const TITLE_ID_BEAUTIFUL_WARDEN = 53;
const TITLE_ID_STUNNING_WARDEN = 54;
const TITLE_ID_ENCHANTING_WARDEN = 55;
const TITLE_ID_ALLURING_WARDEN = 56;
const TITLE_ID_BANKRUPTCY_ONE = 57;
const TITLE_ID_BANKRUPTCY_TWO = 58;
const TITLE_ID_BANKRUPTCY_THREE = 59;
const TITLE_ID_FULL_ORDER_ONE = 60;
const TITLE_ID_FULL_ORDER_TWO = 61;
const TITLE_ID_FULL_ORDER_THREE = 62;
const TITLE_ID_FULL_ORDER_FOUR = 63;
const TITLE_ID_DISAPPOINTMENT = 64; 

const TITLE_ID_SLEEPY_BEAUTY = 66; 
const TITLE_ID_UNORTHODOX_SINNER = 67; 
const TITLE_ID_FIX_CLOTHES_ONE = 68; 
const TITLE_ID_FIX_CLOTHES_TWO = 69; 
const TITLE_ID_STOLE_ANAL_VIRGINS = 70; 
const TITLE_ID_LOST_VIRGINITY_TO_TOY = 71; 
const TITLE_ID_FIRST_KISS_TO_ANUS = 72; 
const TITLE_ID_HARDWORKING_WAITRESS = 73; 
const TITLE_ID_BAR_ENFORCER = 74; 
const TITLE_ID_EXPERIENCED_WAITRESS = 75; 
const TITLE_ID_FREELOADING_DRINKER = 76; 
const TITLE_ID_SOFTCORE_MASOCHIST = 77; 
const TITLE_ID_HARDCORE_MASOCHIST = 78; 
const TITLE_ID_SOFTCORE_SADIST = 79; 
const TITLE_ID_HARDCORE_SADIST = 80; 
const TITLE_ID_COUNTERATTACK_ONE = 81;
const TITLE_ID_COUNTERATTACK_TWO = 82;
const TITLE_ID_COUNTERATTACK_THREE = 83;
const TITLE_ID_BLUNT_ONE = 84;
const TITLE_ID_BLUNT_TWO = 85;
const TITLE_ID_BLUNT_THREE = 86;
const TITLE_ID_PIERCE_ONE = 87;
const TITLE_ID_PIERCE_TWO = 88;
const TITLE_ID_PIERCE_THREE = 89;
const TITLE_ID_SLASH_ONE = 90;
const TITLE_ID_SLASH_TWO = 91;
const TITLE_ID_SLASH_THREE = 92;
const TITLE_ID_KICK_ONE = 93;
const TITLE_ID_KICK_TWO = 94;
const TITLE_ID_KICK_THREE = 95;
const TITLE_ID_KICK_REWARD_ONE = 96; //Not implemented
const TITLE_ID_KICK_REWARD_TWO = 97; //Not implemented
const TITLE_ID_STRENGTH_ONE = 98;
const TITLE_ID_STRENGTH_TWO = 99;
const TITLE_ID_STRENGTH_THREE = 100; //Not implemented
const TITLE_ID_DEXTERITY_ONE = 101;
const TITLE_ID_DEXTERITY_TWO = 102;
const TITLE_ID_DEXTERITY_THREE = 103; //Not implemented
const TITLE_ID_AGILITY_ONE = 104;
const TITLE_ID_AGILITY_TWO = 105;
const TITLE_ID_AGILITY_THREE = 106; //Not implemented
const TITLE_ID_ENDURANCE_ONE = 107;
const TITLE_ID_ENDURANCE_TWO = 108;
const TITLE_ID_ENDURANCE_THREE = 109; //Not implemented
const TITLE_ID_MIND_ONE = 110;
const TITLE_ID_MIND_TWO = 111;
const TITLE_ID_MIND_THREE = 112; //Not implemented
const TITLE_ID_SEXSKILL_ONE = 113;
const TITLE_ID_SEXSKILL_TWO = 114;
const TITLE_ID_UPSTART_ONE = 115; //Not implemented
const TITLE_ID_UPSTART_TWO = 116; //Not implemented
const TITLE_ID_HELL_WARDEN_ONE = 117; //Not implemented
const TITLE_ID_HELL_WARDEN_TWO = 118; //Not implemented
const TITLE_ID_SUPPRESS_RIOT_ONE = 119; 
const TITLE_ID_SUPPRESS_RIOT_TWO = 120;
const TITLE_ID_SUPPRESS_RIOT_THREE = 121; 

const TITLE_ID_RECEPTIONIST_HANDSHAKE = 122; 
const TITLE_ID_VISITOR_FIRST_KISS = 123;
const TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS = 124;  
const TITLE_ID_VISITOR_SWALLOWER = 125;
const TITLE_ID_VISITOR_GOBLIN_CREAMPIE = 126;
const TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR = 127; 
const TITLE_ID_SCANDELOUS_IDOL = 128; 
const TITLE_ID_RECEPTIONIST_RADIO_ORGASM = 129;
const TITLE_ID_BUSTY_BARMAID = 130; 
const TITLE_ID_WAITRESS_ORGASM = 131; 
const TITLE_ID_CUM_GUZZLER = 132; 
const TITLE_ID_GOLDEN_WAITRESS = 133; 
const TITLE_ID_WORLD_CLASS_RECEPTIONIST = 134; 
const TITLE_ID_REDEEMED_ONE = 135; //Not implemented
const TITLE_ID_REDEEMED_TWO = 136; //Not implemented

//////
// Scene Equip
////////////

Remtairy.KarrynTitles.Scene_Equip_popScene = Scene_Equip.prototype.popScene;
Scene_Equip.prototype.popScene = function() {
    Remtairy.KarrynTitles.Scene_Equip_popScene.call(this);
	$gameActors.actor(ACTOR_KARRYN_ID).checkTitleFlagsAfterClosingEquipScreen();
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasure($gameActors.actor(ACTOR_KARRYN_ID).pleasure);
};


//////////
// Game Actor
///////////

Game_Actor.prototype.isUsingThisTitle = function(id) {
	if(this.equips()[EQUIP_SLOT_TITLE_ID]) {
		if(id == this.equips()[EQUIP_SLOT_TITLE_ID].id) return true;
	}
	return false;
};

Game_Actor.prototype.getTitleText = function() {
	if(!this.equips()[EQUIP_SLOT_TITLE_ID]) return '';
	let titleItem = this.equips()[EQUIP_SLOT_TITLE_ID];
	let titleText = '';
	
	if(TextManager.isEnglish && titleItem.hasRemNameEN) titleText = titleItem.remNameEN;
	else if(TextManager.isJapanese && titleItem.hasRemNameJP) titleText = titleItem.remNameJP;
	else if(TextManager.isSChinese && titleItem.hasRemNameSCH) titleText = titleItem.remNameSCH;
	else if(TextManager.isTChinese && titleItem.hasRemNameTCH) titleText = titleItem.remNameTCH;
	else if(TextManager.isKorean && titleItem.hasRemNameKR) titleText = titleItem.remNameKR;
	
	return titleText;
};

Game_Actor.prototype.hasThisTitle = function(id) {
	if(!this._obtainedTitles) return false;
	//return $gameParty.hasItem($dataArmors[id], true);
	return this._obtainedTitles[id];
};

Game_Party.prototype.gainTitle = function(id) {
	$gameParty.gainItem($dataArmors[id],1,false);
	$gameActors.actor(ACTOR_KARRYN_ID)._obtainedTitles[id] = true;
};

Game_Actor.prototype.getTotalTitlesCount = function() {
	if(!this._obtainedTitles) return 0;
	
	let count = 0;
	for(let i = 0; i < this._obtainedTitles.length; ++i) {
		if(this._obtainedTitles[i])
			count++;
	}
	
	return count;
};

//////////////////
// Check For New Title
///////////////////

Game_Party.prototype.checkForNewTitle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._newTitlesGainedItem = [];
	this._newTitlesGainedName = [];
	
	//Beautiful Warden
	if(!actor.hasThisTitle(TITLE_ID_BEAUTIFUL_WARDEN) && actor.charm >= VAR_ACCESSORY_CHARM_REQ_2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BEAUTIFUL_WARDEN]);
		if(Prison.order != 0) this.increaseOrder(10);
	}
	//Stunning Warden
	else if(!actor.hasThisTitle(TITLE_ID_STUNNING_WARDEN) && actor.charm >= VAR_ACCESSORY_CHARM_REQ_3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_STUNNING_WARDEN]);
	}
	//Enchanting Warden
	else if(!actor.hasThisTitle(TITLE_ID_ENCHANTING_WARDEN) && actor.charm >= VAR_ACCESSORY_CHARM_REQ_4) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ENCHANTING_WARDEN]);
	}
	//Alluring Warden
	else if(!actor.hasThisTitle(TITLE_ID_ALLURING_WARDEN) && actor.charm >= VAR_ACCESSORY_CHARM_REQ_5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ALLURING_WARDEN]);
	}
	
	//Bankruptcy Titles
	if(!actor.hasThisTitle(TITLE_ID_BANKRUPTCY_ONE) && this._daysInBankruptcy > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BANKRUPTCY_ONE]);
	}
	else if(!actor.hasThisTitle(TITLE_ID_BANKRUPTCY_TWO) && this._daysInBankruptcy >= 5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BANKRUPTCY_TWO]);
	}
	else if(!actor.hasThisTitle(TITLE_ID_BANKRUPTCY_THREE) && this._daysInBankruptcy >= 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BANKRUPTCY_THREE]);
	}
	
	//Full Order Titles
	if(!actor.hasThisTitle(TITLE_ID_FULL_ORDER_ONE) && this._daysInMaxOrder > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FULL_ORDER_ONE]);
	}
	else if(!actor.hasThisTitle(TITLE_ID_FULL_ORDER_TWO) && this._daysInMaxOrder > 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FULL_ORDER_TWO]);
	}
	else if(!actor.hasThisTitle(TITLE_ID_FULL_ORDER_THREE) && this._daysInMaxOrder > 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FULL_ORDER_THREE]);
	}
	else if(!actor.hasThisTitle(TITLE_ID_FULL_ORDER_FOUR) && this._daysInMaxOrder > 69) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FULL_ORDER_FOUR]);
	}

	//Sex Titles
	if(!actor.hasThisTitle(TITLE_ID_SLEEPY_BEAUTY) && actor._firstKissWasPenis) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SLEEPY_BEAUTY]);
	}
	if(!actor.hasThisTitle(TITLE_ID_UNORTHODOX_SINNER) && actor._firstAnalSexBeforePussySex) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_UNORTHODOX_SINNER]);
	}
	if(!actor.hasThisTitle(TITLE_ID_LOST_VIRGINITY_TO_TOY) && actor._firstPussySexWasToy) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_LOST_VIRGINITY_TO_TOY]);
	}
	if(!actor.hasThisTitle(TITLE_ID_FIRST_KISS_TO_ANUS) && actor._firstKissWasAnus) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FIRST_KISS_TO_ANUS]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_STOLE_ANAL_VIRGINS) && actor._recordVirginitiesTakenViaAnal >= 20) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_STOLE_ANAL_VIRGINS]);
	}

	//Fix clothes Titles
	if(!actor.hasThisTitle(TITLE_ID_FIX_CLOTHES_ONE) && actor._recordFixClothesUsageCount >= 25) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FIX_CLOTHES_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_FIX_CLOTHES_TWO) && actor._recordFixClothesUsageCount >= 150) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FIX_CLOTHES_TWO]);
	}
	
	//Waitress Titles
	if(!actor.hasThisTitle(TITLE_ID_HARDWORKING_WAITRESS) && actor._playthroughRecordWaitressBattleCompletedSoberCount >= 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_HARDWORKING_WAITRESS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_BAR_ENFORCER) && actor._playthroughRecordWaitressBattleProperKickingCount >= 40) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BAR_ENFORCER]);
	}
	if(!actor.hasThisTitle(TITLE_ID_EXPERIENCED_WAITRESS) && actor._playthroughRecordWaitressBattleTotalShiftsCount >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_EXPERIENCED_WAITRESS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_FREELOADING_DRINKER) && actor._playthroughRecordWaitressBattleGotDeadDrunkCount >= 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FREELOADING_DRINKER]);
	}
	
	//BDSM Titles
	let masoDiff = actor.masochismLvl() - actor.sadismLvl();
	let sadoDiff = actor.sadismLvl() - actor.masochismLvl();
	
	if(!actor.hasThisTitle(TITLE_ID_SOFTCORE_MASOCHIST) && masoDiff >= 6) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SOFTCORE_MASOCHIST]);
	}
	if(!actor.hasThisTitle(TITLE_ID_HARDCORE_MASOCHIST) && masoDiff >= 13) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_HARDCORE_MASOCHIST]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SOFTCORE_SADIST) && sadoDiff >= 5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SOFTCORE_SADIST]);
	}
	if(!actor.hasThisTitle(TITLE_ID_HARDCORE_SADIST) && sadoDiff >= 12) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_HARDCORE_SADIST]);
	}
	
	//Counterattack Titles
	if(!actor.hasThisTitle(TITLE_ID_COUNTERATTACK_ONE) && actor._playthroughRecordCounterAttackUsage >= 50) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_COUNTERATTACK_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_COUNTERATTACK_TWO) && actor.level >= 15 && actor._playthroughRecordTotalAttackUsage >= 100 && actor._playthroughRecordCounterAttackUsage >= actor._playthroughRecordActiveAttackUsage + 25) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_COUNTERATTACK_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_COUNTERATTACK_THREE) && actor.level >= 35 && actor._playthroughRecordTotalAttackUsage >= 200 && actor._playthroughRecordCounterAttackUsage >= actor._playthroughRecordActiveAttackUsage * 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_COUNTERATTACK_THREE]);
		if(!actor.hasEdict(EDICT_COUNTER_STANCE)) actor.learnSkill(EDICT_COUNTER_STANCE);
	}
	
	//Blunt Titles
	if(!actor.hasThisTitle(TITLE_ID_BLUNT_ONE) && actor._playthroughRecordActiveAttackUsage > 100 && actor._playthroughRecordBluntAttackUsage >= (actor._playthroughRecordPierceAttackUsage + actor._playthroughRecordSlashAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BLUNT_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_BLUNT_TWO) && actor._playthroughRecordActiveAttackUsage > 200 && actor.level > 15 && actor._playthroughRecordBluntAttackUsage >= (actor._playthroughRecordPierceAttackUsage + actor._playthroughRecordSlashAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BLUNT_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_BLUNT_THREE) && actor._playthroughRecordActiveAttackUsage > 300 && actor.level > 35 && actor._playthroughRecordBluntAttackUsage >= (actor._playthroughRecordPierceAttackUsage + actor._playthroughRecordSlashAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BLUNT_THREE]);
		if(!actor.hasEdict(EDICT_STRIKE_TRAINING_TWO)) actor.learnSkill(EDICT_STRIKE_TRAINING_TWO);
	}
	
	//Pierce Titles
	if(!actor.hasThisTitle(TITLE_ID_PIERCE_ONE) && actor._playthroughRecordActiveAttackUsage > 100 && actor._playthroughRecordPierceAttackUsage >= (actor._playthroughRecordBluntAttackUsage + actor._playthroughRecordSlashAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_PIERCE_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_PIERCE_TWO) && actor._playthroughRecordActiveAttackUsage > 200 && actor.level > 15 && actor._playthroughRecordPierceAttackUsage >= (actor._playthroughRecordBluntAttackUsage + actor._playthroughRecordSlashAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_PIERCE_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_PIERCE_THREE) && actor._playthroughRecordActiveAttackUsage > 300 && actor.level > 35 && actor._playthroughRecordPierceAttackUsage >= (actor._playthroughRecordBluntAttackUsage + actor._playthroughRecordSlashAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_PIERCE_THREE]);
		if(!actor.hasEdict(EDICT_THRUST_TRAINING_TWO)) actor.learnSkill(EDICT_THRUST_TRAINING_TWO);
	}
	
	//Slash Titles
	if(!actor.hasThisTitle(TITLE_ID_SLASH_ONE) && actor._playthroughRecordActiveAttackUsage > 100 && actor._playthroughRecordSlashAttackUsage >= (actor._playthroughRecordBluntAttackUsage + actor._playthroughRecordPierceAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SLASH_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SLASH_TWO) && actor._playthroughRecordActiveAttackUsage > 200 && actor.level > 15 && actor._playthroughRecordSlashAttackUsage >= (actor._playthroughRecordBluntAttackUsage + actor._playthroughRecordPierceAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SLASH_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SLASH_THREE) && actor._playthroughRecordActiveAttackUsage > 300 && actor.level > 35 && actor._playthroughRecordSlashAttackUsage >= (actor._playthroughRecordBluntAttackUsage + actor._playthroughRecordPierceAttackUsage)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SLASH_THREE]);
		if(!actor.hasEdict(EDICT_SLASH_TRAINING_TWO)) actor.learnSkill(EDICT_SLASH_TRAINING_TWO);
	}
	
	//Kick Titles
	if(!actor.hasThisTitle(TITLE_ID_KICK_ONE) && actor._playthroughRecordKickAttackUsage > 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_KICK_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_KICK_TWO) && actor._playthroughRecordKickAttackUsage > 42 && actor.level > 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_KICK_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_KICK_THREE) && actor._playthroughRecordKickAttackUsage > 100 && actor.level > 35) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_KICK_THREE]);
	}
	
	//Strength Titles
	if(!actor.hasThisTitle(TITLE_ID_STRENGTH_ONE) && actor.level >= 15 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 2 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_STRENGTH_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_STRENGTH_TWO) && actor.level >= 35 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 4 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 4) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_STRENGTH_TWO]);
	}
	
	//Dexterity Titles
	if(!actor.hasThisTitle(TITLE_ID_DEXTERITY_ONE) && actor.level >= 15 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 2 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_DEXTERITY_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_DEXTERITY_TWO) && actor.level >= 35 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 4 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 4) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_DEXTERITY_TWO]);
	}
	
	//Agility Titles
	if(!actor.hasThisTitle(TITLE_ID_AGILITY_ONE) && actor.level >= 15 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 2 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_AGILITY_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_AGILITY_TWO) && actor.level >= 35 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 4 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 4) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_AGILITY_TWO]);
	}
	
	//Endurance Titles
	if(!actor.hasThisTitle(TITLE_ID_ENDURANCE_ONE) && actor.level >= 15 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 1 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 1 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 1) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ENDURANCE_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_ENDURANCE_TWO) && actor.level >= 35 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 2 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 3 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ENDURANCE_TWO]);
	}
	
	//Mind Titles
	if(!actor.hasThisTitle(TITLE_ID_MIND_ONE) &&  actor.level >= 15 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 1 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 1 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 1) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_MIND_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_MIND_TWO) && actor.level >= 35 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 2 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 2 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_MIND_TWO]);
	}
	
	//Sex Skill Titles
	if(!actor.hasThisTitle(TITLE_ID_SEXSKILL_ONE) && actor._playthroughRecordTotalSexSkillUsage + actor._playthroughRecordTotalAttackUsage > 50 && actor._playthroughRecordTotalSexSkillUsage > actor._playthroughRecordTotalAttackUsage + 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEXSKILL_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEXSKILL_TWO) && actor._playthroughRecordTotalSexSkillUsage + actor._playthroughRecordTotalAttackUsage > 150 && actor._playthroughRecordTotalSexSkillUsage > actor._playthroughRecordTotalAttackUsage * 2.5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEXSKILL_TWO]);
	}
	
	//Riot
	if(!actor.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_ONE) && actor._playthroughRecordLevelTotalRiotsSuppressedCount >= 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SUPPRESS_RIOT_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_TWO) && actor._playthroughRecordLevelTotalRiotsSuppressedCount >= 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SUPPRESS_RIOT_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_THREE) && actor._playthroughRecordLevelTotalRiotsSuppressedCount >= 75) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SUPPRESS_RIOT_THREE]);
	}
	
	//Receptionist
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_HANDSHAKE) && actor._playthroughRecordReceptionistHandshakePeople >= 42) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_HANDSHAKE]);
		this.increaseReceptionistFame(3);
	}
	if(!actor.hasThisTitle(TITLE_ID_VISITOR_FIRST_KISS) && actor._firstKissWasVisitor) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_VISITOR_FIRST_KISS]);
		this.increaseReceptionistFame(2);
		this.increaseReceptionistNotoriety(3);
	}
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS) && actor._playthroughRecordReceptionistBattleTotalShiftsCount >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_VISITOR_SWALLOWER) && actor._playthroughRecordVisitorSwallowML >= 420) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_VISITOR_SWALLOWER]);
		this.increaseReceptionistNotoriety(4);
	}
	if(!actor.hasThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && actor._playthroughRecordReceptionistGoblinCreampieML >= 420) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_VISITOR_GOBLIN_CREAMPIE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR) && actor._playthroughRecordReceptionistPagesProcessedCount >= 150) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SCANDELOUS_IDOL) && actor._playthroughRecordReceptionistHandshakeWhileSexPeople >= 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SCANDELOUS_IDOL]);
		this.increaseReceptionistFame(1);
		this.increaseReceptionistNotoriety(3);
	} 
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM) && actor._playthroughRecordReceptionistOrgasmWhileCallingCount >= 1) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_RADIO_ORGASM]);
	} 

	if(!actor.hasThisTitle(TITLE_ID_BUSTY_BARMAID) && actor._playthroughRecordWaitressServingPettedCount >= 25) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BUSTY_BARMAID]);
		this.increaseBarReputation(1);
	}
	if(!actor.hasThisTitle(TITLE_ID_WAITRESS_ORGASM) && actor._playthroughRecordWaitressServingOrgasmCount >= 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_WAITRESS_ORGASM]);
		this.increaseBarReputation(1);
	}
	if(!actor.hasThisTitle(TITLE_ID_CUM_GUZZLER) && actor._playthroughRecordWaitressBattleDrankSemenMugML >= 300) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_CUM_GUZZLER]);
		this.increaseBarReputation(1);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_GOLDEN_WAITRESS) && $gameParty._barReputation >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_GOLDEN_WAITRESS]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_WORLD_CLASS_RECEPTIONIST) && $gameParty._receptionistSatisfaction >= 30 && $gameParty._receptionistFame >= 30 && $gameParty._receptionistNotoriety >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_WORLD_CLASS_RECEPTIONIST]);
	}
	
	
	//Ending Titles
	if(!actor.hasThisTitle(TITLE_ID_DISAPPOINTMENT) && $gameSwitches.value(SWITCH_BAD_END_A_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_DISAPPOINTMENT]);
	}
	
	///////////////
	//New Title Text
	for(let i = 0; i < this._newTitlesGainedItem.length; ++i) {
		let item = this._newTitlesGainedItem[i];
		
		this.gainTitle(item.id);
		
		if(TextManager.isEnglish && item.hasRemNameEN) this._newTitlesGainedName.push(item.remNameEN);
		else if(TextManager.isJapanese && item.hasRemNameJP) this._newTitlesGainedName.push(item.remNameJP);
		else if(TextManager.isSChinese && item.hasRemNameSCH) this._newTitlesGainedName.push(item.remNameSCH);
		else if(TextManager.isTChinese && item.hasRemNameTCH) this._newTitlesGainedName.push(item.remNameTCH);
		else if(TextManager.isKorean && item.hasRemNameKR) this._newTitlesGainedName.push(item.remNameKR);
		else this._newTitlesGainedName.push(item.name);
	}
};

Game_Party.prototype.setNewTitleVariable = function() {
	$gameVariables.setValue(VARIABLE_NEW_TITLE_NAME_ID, this._newTitlesGainedName.pop());
};

///////
// Title Flags

Game_Actor.prototype.setupObtainedTitlesArray = function() {
	this._obtainedTitles = [];
};

Game_Actor.prototype.setupTitleFlags = function() {
	this._flagNeverUnequippedSecretaryTitle = true;
	this._flagNeverUnequippedDisappointmentTitle = true;
	this._flagEquippedBeautifulWardenTitleForWholeDay = false;
	this._flagEquippedHellWardenOneTitleForWholeDay = false;
	this._flagEquippedHellWardenTwoTitleForWholeDay = false;
	this._flagEquippedFullOrderTwoTitleForWholeDay = false;
	this._flagEquippedRadioOrgasmTitleForWholeDay = false;
	
	this._flagEquippedJadeNecklaceForWholeDay = false;
};

Game_Actor.prototype.checkTitleFlagsAfterClosingEquipScreen = function() {
	if(this._flagNeverUnequippedSecretaryTitle && !this.isUsingThisTitle(TITLE_ID_EMPEROR_SECRETARY))
		this._flagNeverUnequippedSecretaryTitle = false;
	if(this._flagNeverUnequippedDisappointmentTitle && !this.isUsingThisTitle(TITLE_ID_DISAPPOINTMENT))
		this._flagNeverUnequippedDisappointmentTitle = false;
	if(this._flagEquippedBeautifulWardenTitleForWholeDay && !this.isUsingThisTitle(TITLE_ID_BEAUTIFUL_WARDEN))
		this._flagEquippedBeautifulWardenTitleForWholeDay = false;
	if(this._flagEquippedHellWardenOneTitleForWholeDay && !this.isUsingThisTitle(TITLE_ID_HELL_WARDEN_ONE))
		this._flagEquippedHellWardenOneTitleForWholeDay = false;
	if(this._flagEquippedHellWardenTwoTitleForWholeDay && !this.isUsingThisTitle(TITLE_ID_HELL_WARDEN_TWO))
		this._flagEquippedHellWardenTwoTitleForWholeDay = false;
	if(this._flagEquippedFullOrderTwoTitleForWholeDay && !this.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO))
		this._flagEquippedFullOrderTwoTitleForWholeDay = false;
	if(this._flagEquippedRadioOrgasmTitleForWholeDay && !this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM))
		this._flagEquippedRadioOrgasmTitleForWholeDay = false;
	
	if(this._flagEquippedJadeNecklaceForWholeDay && !this.isEquippingThisAccessory(NECKLACE_JADE_ID))
		this._flagEquippedJadeNecklaceForWholeDay = false;
	
};

Game_Actor.prototype.checkTitleFlagsOnNewDay = function() {
	//Jade Necklace
	this._flagEquippedJadeNecklaceForWholeDay = false;
	//Title
	this._flagEquippedBeautifulWardenTitleForWholeDay = false;
	this._flagEquippedRadioOrgasmTitleForWholeDay = false;
	this._flagEquippedHellWardenOneTitleForWholeDay = false;
	this._flagEquippedHellWardenTwoTitleForWholeDay = false;
	this._flagEquippedFullOrderTwoTitleForWholeDay = false;
	
	if(this.isUsingThisTitle(TITLE_ID_BEAUTIFUL_WARDEN)) {
		this._flagEquippedBeautifulWardenTitleForWholeDay = true;
	}
	else if(this.isUsingThisTitle(TITLE_ID_HELL_WARDEN_ONE)) {
		this._flagEquippedHellWardenOneTitleForWholeDay = true;
	}
	else if(this.isUsingThisTitle(TITLE_ID_HELL_WARDEN_TWO)) {
		this._flagEquippedHellWardenTwoTitleForWholeDay = true;
	}
	else if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM)) {
		this._flagEquippedRadioOrgasmTitleForWholeDay = true;
	}
	else if(this.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO)) {
		this._flagEquippedFullOrderTwoTitleForWholeDay  = true;
	}

	if(this.isEquippingThisAccessory(NECKLACE_JADE_ID)) {
		this._flagEquippedJadeNecklaceForWholeDay  = true;
	}
};

//////
// Effects

Game_Actor.prototype.titleParamBonus = function(paramId) {
	let bonus = 0;
	
	if(paramId === PARAM_CHARM_ID) {
		if(this.hasThisTitle(TITLE_ID_SLEEPY_BEAUTY)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_FIRST_KISS_TO_ANUS)) bonus += 1;
	}
	else if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasThisTitle(TITLE_ID_FIX_CLOTHES_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_FIX_CLOTHES_ONE)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_FULL_ORDER_FOUR)) bonus += 1;
		
	}
	else if(paramId === PARAM_STRENGTH_ID) {
		if(this.hasThisTitle(TITLE_ID_BAR_ENFORCER)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_STRENGTH_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_STRENGTH_ONE)) bonus += 1;
	}
	else if(paramId === PARAM_DEXTERITY_ID) {
		if(this.hasThisTitle(TITLE_ID_DEXTERITY_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_DEXTERITY_ONE)) bonus += 1;
	}
	else if(paramId === PARAM_AGILITY_ID) {
		if(this.hasThisTitle(TITLE_ID_AGILITY_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_AGILITY_ONE)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_LOST_VIRGINITY_TO_TOY)) bonus += 1;
	}
	else if(paramId === PARAM_ENDURANCE_ID) {
		if(this.hasThisTitle(TITLE_ID_ENDURANCE_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_ENDURANCE_ONE)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_GOLDEN_WAITRESS)) bonus += 1;
	}
	else if(paramId === PARAM_MIND_ID) {
		if(this.hasThisTitle(TITLE_ID_UNORTHODOX_SINNER)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_MIND_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_MIND_ONE)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_WORLD_CLASS_RECEPTIONIST)) bonus += 1;
		
	}
	
	return bonus;
};

Game_Actor.prototype.titleXParamPlus = function(id) {
	let titleParam = 0;
	
	if(id === XPARAM_EVA_ID) {
		if(this.isUsingThisTitle(TITLE_ID_ENCHANTING_WARDEN)) titleParam += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_HARDCORE_SADIST)) titleParam -= 0.5;
		else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_SADIST)) titleParam -= 0.33;
	}
	else if(id === XPARAM_GRAZE_ID) {
		if(this.isUsingThisTitle(TITLE_ID_DISAPPOINTMENT)) titleParam -= 0.08;
	}
	else if(id === XPARAM_CNT_ID) {
		if(this.isUsingThisTitle(TITLE_ID_DISAPPOINTMENT)) titleParam -= 0.3;
	}
	else if(id === XPARAM_STA_REGEN_ID) {
		if(this.isUsingThisTitle(TITLE_ID_ENDURANCE_THREE)) titleParam += 0.09;
		else if(this.isUsingThisTitle(TITLE_ID_ENDURANCE_TWO)) titleParam += 0.06;
		else if(this.isUsingThisTitle(TITLE_ID_ENDURANCE_ONE)) titleParam += 0.03;
		else if(this.isUsingThisTitle(TITLE_ID_UPSTART_ONE)) titleParam += 0.02;
		else if(this.isUsingThisTitle(TITLE_ID_UPSTART_TWO)) titleParam += 0.03;
	}

	return titleParam;
};

Game_Actor.prototype.titlesSParamPlus = function(id) {
	let titleParam = 0;
	
	if(id === SPARAM_EXR_ID) {
		if(Prison.date <= 7) titleParam += 0.1;
		if(this.isUsingThisTitle(TITLE_ID_NEWBIE)) titleParam += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_UPSTART_ONE)) titleParam += 0.06;
		else if(this.isUsingThisTitle(TITLE_ID_UPSTART_TWO)) titleParam += 0.09;
	}
	else if(id === SPARAM_WPATK_ID) {
		if(this.hasThisTitle(TITLE_ID_HARDCORE_SADIST)) titleParam += 0.15;
		else if(this.hasThisTitle(TITLE_ID_SOFTCORE_SADIST)) titleParam += 0.05;
		
		if(this.isUsingThisTitle(TITLE_ID_HARDCORE_SADIST)) titleParam += 0.33;
		else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_SADIST)) titleParam += 0.2;
	}
	else if(id === SPARAM_WPDEF_ID) {
		if(this.hasThisTitle(TITLE_ID_HARDCORE_MASOCHIST)) titleParam += 0.15;
		else if(this.hasThisTitle(TITLE_ID_SOFTCORE_MASOCHIST)) titleParam += 0.05;
		if(this.isUsingThisTitle(TITLE_ID_HARDCORE_SADIST)) titleParam -= 0.5;
		else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_SADIST)) titleParam -= 0.33;
	}	
	else if(id === SPARAM_ASC_ID) {
		if(this.hasThisTitle(TITLE_ID_SLASH_TWO)) titleParam -= 0.06;
		else if(this.hasThisTitle(TITLE_ID_SLASH_ONE)) titleParam -= 0.03;
		if(this.hasThisTitle(TITLE_ID_PIERCE_TWO)) titleParam -= 0.06;
		else if(this.hasThisTitle(TITLE_ID_PIERCE_ONE)) titleParam -= 0.03;
		if(this.hasThisTitle(TITLE_ID_BLUNT_TWO)) titleParam -= 0.06;
		else if(this.hasThisTitle(TITLE_ID_BLUNT_ONE)) titleParam -= 0.03;
	}
	else if(id === SPARAM_SSC_ID) {
		if(this.hasThisTitle(TITLE_ID_SEXSKILL_TWO)) titleParam -= 0.09;
		else if(this.hasThisTitle(TITLE_ID_SEXSKILL_ONE)) titleParam -= 0.03;
	}
	else if(id === SPARAM_WP_REGEN_ID) {
		if(this.isUsingThisTitle(TITLE_ID_MIND_THREE)) titleParam += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_MIND_TWO)) titleParam += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_MIND_ONE)) titleParam += 0.05;
		if(this.isUsingThisTitle(TITLE_ID_WORLD_CLASS_RECEPTIONIST)) titleParam += 0.03;
	}

	return titleParam;
};

Game_Actor.prototype.titlesSParamRate = function(id) {
	let titleRate = 1;

	if(id === SPARAM_WPATK_ID) {
		if(this.isUsingThisTitle(TITLE_ID_SEXSKILL_TWO)) titleRate -= 0.5;
		else if(this.isUsingThisTitle(TITLE_ID_SEXSKILL_ONE)) titleRate -= 0.25;
	}
	else if(id === SPARAM_WPDEF_ID) {
		if(this.isUsingThisTitle(TITLE_ID_SEXSKILL_TWO)) titleRate -= 0.5;
		else if(this.isUsingThisTitle(TITLE_ID_SEXSKILL_ONE)) titleRate -= 0.25;
	}

	return titleRate;
};

Game_Actor.prototype.titlesElementRate = function(elementId) {
	let elementRate = 0;
	
	if(elementId === ELEMENT_TALK_ID) {
		
		if(this.isUsingThisTitle(TITLE_ID_NEWBIE)) elementRate += 0.1;
		
		else if(this.isUsingThisTitle(TITLE_ID_EFFICIENT_ADMINSTRATOR)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_CORRUPTED_OFFICIAL)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_CORPORAL_PUNISHER)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_CAREFUL_SUPERVISOR)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_WORKAHOLIC)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_CORNERCUTTING_EMPLOYER)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_BANKRUPTCY_THREE)) elementRate += 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_BANKRUPTCY_TWO)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_BANKRUPTCY_ONE)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_REDEEMED_ONE)) elementRate -= 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_REDEEMED_TWO)) elementRate -= 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_ONE)) elementRate -= 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_TWO)) elementRate -= 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_VISITOR_SWALLOWER)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_SCANDELOUS_IDOL)) elementRate += 0.3;
		
	}
	else if(elementId === ELEMENT_SIGHT_ID) {
		if(this.isUsingThisTitle(TITLE_ID_BEAUTIFUL_WARDEN)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_STUNNING_WARDEN)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_ENCHANTING_WARDEN)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_ALLURING_WARDEN)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SLEEPY_BEAUTY)) elementRate -= 0.25;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_ONE)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_TWO)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_FIRST_KISS_TO_ANUS)) elementRate += 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_HANDSHAKE)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_SCANDELOUS_IDOL)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_WORLD_CLASS_RECEPTIONIST)) elementRate -= 0.2;
	}
	else if(elementId === ELEMENT_STRIP_ID) {
		if(this.isUsingThisTitle(TITLE_ID_FIX_CLOTHES_TWO)) elementRate -= 0.4;
		else if(this.isUsingThisTitle(TITLE_ID_FIX_CLOTHES_ONE)) elementRate -= 0.25;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_ONE)) elementRate -= 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_TWO)) elementRate -= 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS)) elementRate -= 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_HARDWORKING_WAITRESS)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_EXPERIENCED_WAITRESS)) elementRate -= 0.15;
	}
	else if(elementId === ELEMENT_PETTING_ID) {
		if(this.isUsingThisTitle(TITLE_ID_VISITOR_FIRST_KISS)) elementRate += 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_BUSTY_BARMAID)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_GOLDEN_WAITRESS)) elementRate -= 0.15;
	}
	else if(elementId === ELEMENT_SEX_ID) {
		if(this.isUsingThisTitle(TITLE_ID_CUM_GUZZLER)) elementRate += 0.25;
	}
	
	return elementRate;
};

Game_Actor.prototype.titlesUnarmedAttack = function() {
	let unarmedAttack = 1;

	if(this.hasThisTitle(TITLE_ID_KICK_THREE)) unarmedAttack += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_TWO)) unarmedAttack += 0.15;
	else if(this.hasThisTitle(TITLE_ID_KICK_ONE)) unarmedAttack += 0.05;
	if(this.hasThisTitle(TITLE_ID_KICK_REWARD_TWO)) unarmedAttack += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_REWARD_ONE)) unarmedAttack += 0.1;
	
	return unarmedAttack;
};

Game_Actor.prototype.titlesUnarmedDefense = function() {
	let unarmedDefense = 1;

	if(this.hasThisTitle(TITLE_ID_KICK_THREE)) unarmedDefense += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_TWO)) unarmedDefense += 0.15;
	else if(this.hasThisTitle(TITLE_ID_KICK_ONE)) unarmedDefense += 0.05;
	if(this.hasThisTitle(TITLE_ID_KICK_REWARD_TWO)) unarmedDefense += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_REWARD_ONE)) unarmedDefense += 0.1;
	
	return unarmedDefense;
};



Game_Actor.prototype.titlesEdictCostRate = function() {
	let rate = 1;
	
	if(this.hasThisTitle(TITLE_ID_CAREFUL_SUPERVISOR)) rate *= 0.9;
	
	return rate;
};

Game_Actor.prototype.titlesFlatIncome = function() {
	let value = 0;
	
	if(this.hasThisTitle(TITLE_ID_CORRUPTED_OFFICIAL)) value += 400;
	
	return value;
};

Game_Actor.prototype.titlesFlatExpense = function() {
	let value = 0;
	
	if(this.isUsingThisTitle(TITLE_ID_EMPEROR_SECRETARY)) value += 150;
	if(this.hasThisTitle(TITLE_ID_FREELOADING_DRINKER)) value -= 10;
	
	return value;
};

Game_Actor.prototype.titlesIncomeRate = function() {
	let rate = 1;
	
	if(this.hasThisTitle(TITLE_ID_WORKAHOLIC)) rate *= 1.05;
	
	if(this.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO) && this._flagEquippedFullOrderTwoTitleForWholeDay) rate *= 1.05;

	
	return rate;
};

Game_Actor.prototype.titlesExpenseRate = function() {
	let rate = 1;
	
	//character creator titles
	if(this.hasThisTitle(TITLE_ID_ENCHANTING_WARDEN)) rate *= 0.97;
	//bankruptacy
	if(this.hasThisTitle(TITLE_ID_BANKRUPTCY_THREE)) rate *= 0.96;
	else if(this.hasThisTitle(TITLE_ID_BANKRUPTCY_TWO)) rate *= 0.98;
	else if(this.hasThisTitle(TITLE_ID_BANKRUPTCY_ONE)) rate *= 0.99;
	
	if(this.isUsingThisTitle(TITLE_ID_FULL_ORDER_ONE)) rate *= 1.05;
	
	return rate;
};

Game_Actor.prototype.titlesOrderChange = function() {
	let value = 0;
	
	//Character Creator titles
	if(this.hasThisTitle(TITLE_ID_CORRUPTED_OFFICIAL)) value -= 1;
	else if(this.hasThisTitle(TITLE_ID_CORPORAL_PUNISHER)) value += 1;
	else if(this.hasThisTitle(TITLE_ID_WORKAHOLIC)) value += 1;
	
	//Redeemed titles
	if(this.hasThisTitle(TITLE_ID_REDEEMED_TWO) || this.hasThisTitle(TITLE_ID_REDEEMED_ONE)) value += 1;
	
	//Equipped titles
	if(this.isUsingThisTitle(TITLE_ID_FULL_ORDER_THREE)) value += 1;
	else if(this.isUsingThisTitle(TITLE_ID_BEAUTIFUL_WARDEN) && this._flagEquippedBeautifulWardenTitleForWholeDay) value += 1;
	else if(this.isUsingThisTitle(TITLE_ID_HELL_WARDEN_ONE) && this._flagEquippedHellWardenOneTitleForWholeDay) value += 2;
	else if(this.isUsingThisTitle(TITLE_ID_HELL_WARDEN_TWO) && this._flagEquippedHellWardenTwoTitleForWholeDay) value += 3;
	else if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM) && this._flagEquippedRadioOrgasmTitleForWholeDay) value += 2;
	
	return value;
};

Game_Actor.prototype.titleInmateAngerEffect = function(enemy) {
	let effect = 0;
	
	if(this.hasThisTitle(TITLE_ID_ALLURING_WARDEN)) {
		effect -= 10;
	}
	if(this.isUsingThisTitle(TITLE_ID_SLEEPY_BEAUTY)) effect -= 20;
	else if(this.isUsingThisTitle(TITLE_ID_ALLURING_WARDEN)) effect -= 40;
	else if(this.isUsingThisTitle(TITLE_ID_KICK_TWO)) effect += 30;
	else if(this.isUsingThisTitle(TITLE_ID_KICK_THREE)) effect += 60;
	
	if(this.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && enemy.isGoblinType) {
		effect -= 30;
	}
	
	return effect;
};

Game_Actor.prototype.titleEnemyParamRate = function(paramId, enemy) {
	let rate = 1;
	
	if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && enemy.isGoblinType) {
			rate += 0.25;
		}
	}
	
	return rate;
};

Game_Actor.prototype.titleEnemyEjaculationVolume = function(enemy) {
	let multipler = 1;
	
	if(this.hasThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && enemy.isGoblinType) {
		multipler += 0.25;
	}
	if(this.isUsingThisTitle(TITLE_ID_VISITOR_FIRST_KISS) && enemy.isVisitorMaleType) {
		multipler += 0.5;
	}
	
	return multipler;
};

///////
// Game Party

Game_Party.prototype.titlesSubsidies = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = 0;
	
	if(actor.hasThisTitle(TITLE_ID_FULL_ORDER_THREE)) value += 50;
	else if(actor.hasThisTitle(TITLE_ID_FULL_ORDER_TWO)) value += 25;
	
	if(actor.hasThisTitle(TITLE_ID_REDEEMED_TWO)) value += 25;
	
	
	return value;
};

Game_Party.prototype.titlesGlobalRiotChance = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = 0;
	
	if(actor.isUsingThisTitle(TITLE_ID_FULL_ORDER_ONE)) value -= 2;
	else if(actor.isUsingThisTitle(TITLE_ID_HELL_WARDEN_ONE)) value -= 3;
	else if(actor.isUsingThisTitle(TITLE_ID_HELL_WARDEN_TWO)) value -= 4;
	
	return value;
}

Game_Party.prototype.titlesSetStartingOrder = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = PRISON_STARTING_ORDER;
	
	if(actor.hasThisTitle(TITLE_ID_FULL_ORDER_THREE)) value += 3;
	else if(actor.hasThisTitle(TITLE_ID_FULL_ORDER_TWO)) value += 2;
	else if(actor.hasThisTitle(TITLE_ID_FULL_ORDER_ONE)) value += 1;
	
	if(actor.hasThisTitle(TITLE_ID_BAR_ENFORCER)) value += 1;
	
	if(actor.hasThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM)) value += 1;
	
	if(actor.hasThisTitle(TITLE_ID_DISAPPOINTMENT)) value += 3;
	
	if(actor.hasThisTitle(TITLE_ID_HELL_WARDEN_TWO)) value += 5;
	else if(actor.hasThisTitle(TITLE_ID_HELL_WARDEN_ONE)) value += 2;
	
	this.setOrder(value);
};


Game_Party.prototype.titlesBankruptcyOrder = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = PRISON_BANKRUPTCY_ORDER_NO_TITLE;
	
	if(actor.hasThisTitle(TITLE_ID_BANKRUPTCY_THREE)) value = 4;
	else if(actor.hasThisTitle(TITLE_ID_BANKRUPTCY_TWO)) value = 7;
	
	value *= -1;
	this.increaseOrder(value);
};

Game_Party.prototype.titlesBankruptcyRiotChance = function(useOnlyTodaysGoldForBankruptcyChance) {
	let value = 0;
	let goldValue = Prison.funding;
	
	if(!useOnlyTodaysGoldForBankruptcyChance) {
		goldValue += Prison.calculateBalance(true);
	}
	
	if(goldValue <= 0) {
		value += RIOT_GLOBAL_BANKRUPTCY_CHANCE;
	}
	
	return value;
};

///////////////
// Specific effects
//////////////

Game_Actor.prototype.titleStunningWarden_stunChance = function() {
	let chance = 0;
	if(this.hasThisTitle(TITLE_ID_STUNNING_WARDEN)) {
		chance += 0.1;
		if(this.isUsingThisTitle(TITLE_ID_STUNNING_WARDEN)) chance += 0.15;
	}
	return chance;
};

Game_Actor.prototype.titleEfficientAdminstrator_carryoverUnusedEdictPoint = function() {
	if(this.hasThisTitle(TITLE_ID_EFFICIENT_ADMINSTRATOR)) return 1;
	else return 0;
};

Game_Actor.prototype.titleCorporalPunisher_riotChance = function() {
	if(this.hasThisTitle(TITLE_ID_CORPORAL_PUNISHER)) return 2;
	else return 0;
};

Game_Actor.prototype.titleWorkaholic_fatigueRecoveryRate = function() {
	if(this.hasThisTitle(TITLE_ID_WORKAHOLIC)) return 0.9;
	else return 1;
};

Game_Actor.prototype.titleCornerCuttingEmployer_fatigueGainRate = function() {
	if(this.hasThisTitle(TITLE_ID_CORNERCUTTING_EMPLOYER)) return 0.9;
	else return 1;
};
