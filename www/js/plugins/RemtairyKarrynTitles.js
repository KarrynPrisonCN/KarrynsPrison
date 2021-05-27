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

const TITLE_LIST_START_ID = 53;
const TITLE_LIST_END_ID = 180;

const TITLE_ID_EMPEROR_SECRETARY = 2;
const TITLE_ID_NEWBIE = 3;

const TITLE_ID_CC_SKILLED_MANAGER = 6;
const TITLE_ID_CC_AMBITIOUS_EXPERIMENTER = 7;
const TITLE_ID_CC_HARDLINE_DEBATER = 8;
const TITLE_ID_CC_COST_SAVING_SUPERVISOR = 9;
const TITLE_ID_CC_HARDWORKING_TUTOR = 10;
const TITLE_ID_CC_MANAGEMENT_CONSULTANT = 11;

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
const TITLE_ID_PUSSY_PETTER = 137;
const TITLE_ID_GUARD_MAID = 138;
const TITLE_ID_GLORIOUS_HOLES = 139;
const TITLE_ID_TOILET_QUEUE = 140;
const TITLE_ID_BATHROOM_QUEEN = 141;
const TITLE_ID_TOILET_EAT_ORGASM = 142;
const TITLE_ID_FINAL_DESTINATION = 143;
const TITLE_ID_TOILET_RESTER = 144;
const TITLE_ID_EVASION_ONE = 145;
const TITLE_ID_EVASION_TWO = 146;
const TITLE_ID_EVASION_THREE = 147;
const TITLE_ID_ASPIRING_HERO = 148;
const TITLE_ID_FULFILLED_HERO = 149; //Not implemented
const TITLE_ID_GALACTIC_HERO = 150; //Not implemented
const TITLE_ID_PRISON_CHAMPION = 151; //Not implemented
const TITLE_ID_SUPER_WORLD_CHAMPION = 152; //Not implemented
const TITLE_ID_GOURMET_FOODIE = 153;
const TITLE_ID_LEVEL_ONE_BOSS = 154;
const TITLE_ID_LEVEL_TWO_BOSS = 155;
const TITLE_ID_LEVEL_THREE_BOSS = 156;
const TITLE_ID_LEVEL_FOUR_BOSS = 157;
const TITLE_ID_LEVEL_FIVE_BOSS = 158; //Not implemented
const TITLE_ID_SEX_SKILL_KISS_ONE = 159;
const TITLE_ID_SEX_SKILL_KISS_TWO = 160;
const TITLE_ID_SEX_SKILL_COCKSTARE_ONE = 161;
const TITLE_ID_SEX_SKILL_COCKSTARE_TWO = 162;
const TITLE_ID_SEX_SKILL_COCKPET_ONE = 163;
const TITLE_ID_SEX_SKILL_COCKPET_TWO = 164;
const TITLE_ID_SEX_SKILL_HANDJOB_ONE = 165;
const TITLE_ID_SEX_SKILL_HANDJOB_TWO = 166;
const TITLE_ID_SEX_SKILL_BLOWJOB_ONE = 167;
const TITLE_ID_SEX_SKILL_BLOWJOB_TWO = 168;
const TITLE_ID_SEX_SKILL_RIMJOB_ONE = 169;
const TITLE_ID_SEX_SKILL_RIMJOB_TWO = 170;
const TITLE_ID_SEX_SKILL_FOOTJOB_ONE = 171;
const TITLE_ID_SEX_SKILL_FOOTJOB_TWO = 172;
const TITLE_ID_SEX_SKILL_TITJOB_ONE = 173;
const TITLE_ID_SEX_SKILL_TITJOB_TWO = 174;
const TITLE_ID_SEX_SKILL_PUSSYSEX_ONE = 175;
const TITLE_ID_SEX_SKILL_PUSSYSEX_TWO = 176;
const TITLE_ID_SEX_SKILL_ANALSEX_ONE = 177;
const TITLE_ID_SEX_SKILL_ANALSEX_TWO = 178;
const TITLE_ID_METAL_SEX_ONE = 179;
const TITLE_ID_SEX_SKILL_LIGHT_KICK = 180;

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

//////////////
// Register Title Equip

Game_Actor.prototype.registerFirstTimeTitleEquip = function() {
	if(this.equips()[EQUIP_SLOT_TITLE_ID]) {
		let id = this.equips()[EQUIP_SLOT_TITLE_ID].id;
		
		if(!this.titleHasBeenEquippedOnceBefore(id)) {
			//Order
			if(id === TITLE_ID_BEAUTIFUL_WARDEN) {
				if(Prison.order != 0) $gameParty.increaseOrder(10);
			}
			else if(id === TITLE_ID_FULL_ORDER_TWO) {
				if(Prison.order != 0) $gameParty.increaseOrder(10);
			}
			else if(id === TITLE_ID_HELL_WARDEN_TWO) {
				if(Prison.order != 0) $gameParty.increaseOrder(20);
			}
			else if(id === TITLE_ID_HELL_WARDEN_ONE) {
				if(Prison.order != 0) $gameParty.increaseOrder(15);
			}
			else if(id === TITLE_ID_RECEPTIONIST_RADIO_ORGASM) {
				if(Prison.order != 0) $gameParty.increaseOrder(-10);
			}
			else if(id === TITLE_ID_GUARD_MAID) {
				if(Prison.order != 0) $gameParty.increaseOrder(-10);
			}
			else if(id === TITLE_ID_DISAPPOINTMENT) {
				if(Prison.order != 0) $gameParty.increaseOrder(-10);
			}
			//Funding
			else if(id === TITLE_ID_FULL_ORDER_THREE) {
				$gameParty.gainGold(250);
			}
			else if(id === TITLE_ID_LEVEL_TWO_BOSS) {
				$gameParty.gainGold(150);
			}
			else if(id === TITLE_ID_LEVEL_FOUR_BOSS) {
				$gameParty.gainGold(150);
			}
			//Receptionist
			else if(id === TITLE_ID_RECEPTIONIST_HANDSHAKE) {
				$gameParty.increaseReceptionistFame(3);
			}
			else if(id === TITLE_ID_VISITOR_FIRST_KISS) {
				$gameParty.increaseReceptionistFame(2);
				$gameParty.increaseReceptionistNotoriety(3);
			}
			else if(id === TITLE_ID_VISITOR_SWALLOWER) {
				$gameParty.increaseReceptionistNotoriety(4);
			}
			else if(id === TITLE_ID_SCANDELOUS_IDOL) {
				$gameParty.increaseReceptionistFame(1);
				$gameParty.increaseReceptionistNotoriety(3);
			}
			//Waitress
			else if(id === TITLE_ID_BUSTY_BARMAID) {
				$gameParty.increaseBarReputation(1);
			}
			else if(id === TITLE_ID_WAITRESS_ORGASM) {
				$gameParty.increaseBarReputation(1);
			}
			else if(id === TITLE_ID_CUM_GUZZLER) {
				$gameParty.increaseBarReputation(1);
			}
			
			//Glory Hole
			else if(id === TITLE_ID_TOILET_QUEUE) {
				$gameParty.increaseGloryReputation(2);
			}
			else if(id === TITLE_ID_BATHROOM_QUEEN) {
				$gameParty.increaseGloryReputation(2);
			}
			else if(id === TITLE_ID_TOILET_EAT_ORGASM) {
				$gameParty.increaseGloryReputation(2);
			}
			else if(id === TITLE_ID_FINAL_DESTINATION) {
				$gameParty.increaseGloryReputation(2);
			}
		}
		
		this._titlesEquippedOnceRegister[id] = true;
	}
};

Game_Actor.prototype.resetFirstTimeTitleEquipRegister = function() {
	this._titlesEquippedOnceRegister = [];
};

Game_Actor.prototype.titleHasBeenEquippedOnceBefore = function(id) {
	return this._titlesEquippedOnceRegister[id];
};

//////////////////
// Check For New Title
///////////////////

Game_Party.prototype.checkForNewTitle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._newTitlesGainedItem = [];
	this._newTitlesGainedName = [];
	this._newTitlesGainedIcon = [];
	
	//Beautiful Warden
	if(!actor.hasThisTitle(TITLE_ID_BEAUTIFUL_WARDEN) && actor.charm >= VAR_ACCESSORY_CHARM_REQ_2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BEAUTIFUL_WARDEN]);
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
	if(!actor.hasThisTitle(TITLE_ID_SOFTCORE_SADIST) && sadoDiff >= 6) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SOFTCORE_SADIST]);
	}
	if(!actor.hasThisTitle(TITLE_ID_HARDCORE_SADIST) && sadoDiff >= 13) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_HARDCORE_SADIST]);
	}
	
	//Counterattack Titles
	if(!actor.hasThisTitle(TITLE_ID_COUNTERATTACK_ONE) && actor._playthroughRecordCounterAttackUsage >= 50) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_COUNTERATTACK_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_COUNTERATTACK_TWO) && actor.level > 15 && actor._playthroughRecordTotalAttackUsage >= 100 && actor._playthroughRecordCounterAttackUsage >= actor._playthroughRecordActiveAttackUsage + 25) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_COUNTERATTACK_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_COUNTERATTACK_THREE) && actor.level > 35 && actor._playthroughRecordTotalAttackUsage >= 200 && actor._playthroughRecordCounterAttackUsage >= actor._playthroughRecordActiveAttackUsage * 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_COUNTERATTACK_THREE]);
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
	if(!actor.hasThisTitle(TITLE_ID_KICK_THREE) && actor._playthroughRecordKickAttackUsage > 150 && actor.level > 35) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_KICK_THREE]);
	}
	
	//Strength Titles
	if(!actor.hasThisTitle(TITLE_ID_STRENGTH_ONE) && actor.level > 15 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 4 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 4 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 3 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_MIND_ID] + 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_STRENGTH_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_STRENGTH_TWO) && actor.level > 35 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 8 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 8 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 6 && actor._paramLvl[PARAM_STRENGTH_ID] > actor._paramLvl[PARAM_MIND_ID] + 6) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_STRENGTH_TWO]);
	}
	
	//Dexterity Titles
	if(!actor.hasThisTitle(TITLE_ID_DEXTERITY_ONE) && actor.level > 15 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 4 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 4 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 3 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_MIND_ID] + 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_DEXTERITY_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_DEXTERITY_TWO) && actor.level > 35 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 8 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 8 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 6 && actor._paramLvl[PARAM_DEXTERITY_ID] > actor._paramLvl[PARAM_MIND_ID] + 6) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_DEXTERITY_TWO]);
	}
	
	//Agility Titles
	if(!actor.hasThisTitle(TITLE_ID_AGILITY_ONE) && actor.level > 15 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 4 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 4 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 3 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_MIND_ID] + 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_AGILITY_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_AGILITY_TWO) && actor.level > 35 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 8 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 8 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 6 && actor._paramLvl[PARAM_AGILITY_ID] > actor._paramLvl[PARAM_MIND_ID] + 6) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_AGILITY_TWO]);
	}
	
	//Endurance Titles
	if(!actor.hasThisTitle(TITLE_ID_ENDURANCE_ONE) && actor.level > 15 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 4 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 4 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 4 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_MIND_ID] + 4) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ENDURANCE_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_ENDURANCE_TWO) && actor.level > 35 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 8 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 8 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 8 && actor._paramLvl[PARAM_ENDURANCE_ID] > actor._paramLvl[PARAM_MIND_ID] + 8) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ENDURANCE_TWO]);
	}
	
	//Mind Titles
	if(!actor.hasThisTitle(TITLE_ID_MIND_ONE) &&  actor.level > 15 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 3 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 3 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 3 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_MIND_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_MIND_TWO) && actor.level > 35 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_DEXTERITY_ID] + 6 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_STRENGTH_ID] + 6 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_AGILITY_ID] + 6 && actor._paramLvl[PARAM_MIND_ID] > actor._paramLvl[PARAM_ENDURANCE_ID] + 6) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_MIND_TWO]);
	}
	
	//Sex Skill Titles
	if(!actor.hasThisTitle(TITLE_ID_SEXSKILL_ONE) && actor._playthroughRecordTotalSexSkillUsage + actor._playthroughRecordTotalAttackUsage > 50 && actor._playthroughRecordTotalSexSkillUsage > actor._playthroughRecordTotalAttackUsage + 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEXSKILL_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEXSKILL_TWO) && actor._playthroughRecordTotalSexSkillUsage + actor._playthroughRecordTotalAttackUsage > 150 && actor._playthroughRecordTotalSexSkillUsage > actor._playthroughRecordTotalAttackUsage * 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEXSKILL_TWO]);
	}
	
	//Riot
	if(!actor.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_ONE) && actor._playthroughRecordLevelTotalRiotsSuppressedCount >= 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SUPPRESS_RIOT_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_TWO) && actor._playthroughRecordLevelTotalRiotsSuppressedCount >= 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SUPPRESS_RIOT_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_THREE) && actor._playthroughRecordLevelTotalRiotsSuppressedCount >= 69) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SUPPRESS_RIOT_THREE]);
	}
	
	//Receptionist
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_HANDSHAKE) && actor._playthroughRecordReceptionistHandshakePeople >= 42) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_HANDSHAKE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_VISITOR_FIRST_KISS) && actor._firstKissWasVisitor) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_VISITOR_FIRST_KISS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS) && actor._playthroughRecordReceptionistBattleTotalShiftsCount >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_THIRTY_SHIFTS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_VISITOR_SWALLOWER) && actor._playthroughRecordVisitorSwallowML >= 420) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_VISITOR_SWALLOWER]);
	}
	if(!actor.hasThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && actor._playthroughRecordReceptionistGoblinCreampieML >= 420) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_VISITOR_GOBLIN_CREAMPIE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR) && actor._playthroughRecordReceptionistPagesProcessedCount >= 150) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_PAPERWORK_PROCESSOR]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SCANDELOUS_IDOL) && actor._playthroughRecordReceptionistHandshakeWhileSexPeople >= 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SCANDELOUS_IDOL]);
	} 
	if(!actor.hasThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM) && actor._playthroughRecordReceptionistOrgasmWhileCallingCount >= 1) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_RECEPTIONIST_RADIO_ORGASM]);
	} 

	if(!actor.hasThisTitle(TITLE_ID_BUSTY_BARMAID) && actor._playthroughRecordWaitressServingPettedCount >= 25) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BUSTY_BARMAID]);
	}
	if(!actor.hasThisTitle(TITLE_ID_WAITRESS_ORGASM) && actor._playthroughRecordWaitressDroppedTrayCount >= 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_WAITRESS_ORGASM]);
	}
	if(!actor.hasThisTitle(TITLE_ID_CUM_GUZZLER) && actor._playthroughRecordWaitressBattleDrankSemenMugML >= 300) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_CUM_GUZZLER]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_GOLDEN_WAITRESS) && $gameParty._barReputation >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_GOLDEN_WAITRESS]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_WORLD_CLASS_RECEPTIONIST) && $gameParty._receptionistSatisfaction >= 30 && $gameParty._receptionistFame >= 30 && $gameParty._receptionistNotoriety >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_WORLD_CLASS_RECEPTIONIST]);
	}
	
	
	if(!actor.hasThisTitle(TITLE_ID_DISAPPOINTMENT) && $gameSwitches.value(SWITCH_BAD_END_A_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_DISAPPOINTMENT]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_PUSSY_PETTER) && $gameSwitches.value(SWITCH_PETTED_THE_KITTY_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_PUSSY_PETTER]);
	}
	
	//Glory Hole Toilet
	if(!actor.hasThisTitle(TITLE_ID_GUARD_MAID) && actor._todayServedGuardInBar >= 1 && actor._todayServedGuardInGuardBattle >= 1 && actor._todayServedGuardInToiletBattle >= 1 && actor._todayServedGuardInGuardDefeat >= 1) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_GUARD_MAID]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_GLORIOUS_HOLES) && $gameParty._gloryReputation >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_GLORIOUS_HOLES]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_TOILET_QUEUE) && actor._playthroughRecordGloryLongestStallQueue >= 7) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_TOILET_QUEUE]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_BATHROOM_QUEEN) && actor._todayToiletBattleSexualPartners >= 5 && actor._todayLevelTwoDefeatSexualPartners >= 5 && (actor._todayToiletBattleSexualPartners + actor._todayLevelTwoDefeatSexualPartners) >= 20) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_BATHROOM_QUEEN]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_TOILET_EAT_ORGASM) && actor._playthroughRecordGloryOrgasmWhileGuestEatingCount >= 1) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_TOILET_EAT_ORGASM]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_FINAL_DESTINATION) && actor._playthroughRecordGloryFinishedPissingCocksServingCount >= 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_FINAL_DESTINATION]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_TOILET_RESTER) && actor._playthroughRecordGloryTurnsSpentResting >= 99) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_TOILET_RESTER]);
	}
	
	//Evasion
	if(!actor.hasThisTitle(TITLE_ID_EVASION_ONE) && actor._playthroughRecordAttackEvadedCount >= 10 && actor._playthroughRecordAttackEvadedCount > actor._playthroughRecordFullHitTakenCount + 2) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_EVASION_ONE]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_EVASION_TWO) && actor._playthroughRecordAttackEvadedCount >= 42 && actor._playthroughRecordAttackEvadedCount > actor._playthroughRecordFullHitTakenCount * 1.15 && actor.level > 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_EVASION_TWO]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_EVASION_THREE) && actor._playthroughRecordAttackEvadedCount >= 150 && actor._playthroughRecordAttackEvadedCount > actor._playthroughRecordFullHitTakenCount * 1.3 && actor.level > 35) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_EVASION_THREE]);
	}
	
	// Hero
	if(!actor.hasThisTitle(TITLE_ID_ASPIRING_HERO) && actor.hasGift(GIFT_ID_EMPEROR_LV1_STRIP_RESIST) && actor.hasGift(GIFT_ID_EMPEROR_LV2_TALK_RESIST) && actor.hasGift(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST) && actor.hasGift(GIFT_ID_EMPEROR_LV4_WILL_REGEN)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_ASPIRING_HERO]);
	}
	
	
	//Artisan
	if(!actor.hasThisTitle(TITLE_ID_GOURMET_FOODIE) && actor._playthroughRecordArtisanMealSMARTCount > 0 && actor._playthroughRecordArtisanMealCOMFYCount > 0 && actor._playthroughRecordArtisanMealHEARTCount > 0 && actor._playthroughRecordArtisanMealSLUTCount > 0 && actor._playthroughRecordArtisanMealPUSSYCount > 0 && actor._playthroughRecordArtisanMealHEROCount > 0 && actor._playthroughRecordArtisanMealARMEDCount > 0 && actor._playthroughRecordArtisanMealWARDENCount > 0 && actor._playthroughRecordArtisanMealBITCHCount > 0 && actor._playthroughRecordArtisanMealANALCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_GOURMET_FOODIE]);
	}

	//Boss
	if(!actor.hasThisTitle(TITLE_ID_LEVEL_ONE_BOSS) && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV1_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_LEVEL_ONE_BOSS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_LEVEL_TWO_BOSS) && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV2_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_LEVEL_TWO_BOSS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_LEVEL_THREE_BOSS) && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV3_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_LEVEL_THREE_BOSS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_LEVEL_FOUR_BOSS) && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV4_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_LEVEL_FOUR_BOSS]);
	}
	if(!actor.hasThisTitle(TITLE_ID_LEVEL_FIVE_BOSS) && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV5_ID)) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_LEVEL_FIVE_BOSS]);
	}
	
	//Sex Skills
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_KISS_ONE) && actor._recordKissUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_KISS_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_KISS_TWO) && actor._playthroughRecordEjaculatedWithKarrynKissCount >= 5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_KISS_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_ONE) && actor._recordCockStareUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_COCKSTARE_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_TWO) && actor._playthroughRecordCockStaredAtPeople >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_COCKSTARE_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_COCKPET_ONE) && actor._recordCockPetUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_COCKPET_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_COCKPET_TWO) && actor._playthroughRecordErectWithCockPetCount >= 30) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_COCKPET_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_HANDJOB_ONE) && actor._recordHandjobUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_HANDJOB_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_HANDJOB_TWO) && actor._playthroughRecordEjaculatedWithKarrynDoubleHandjobCount >= 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_HANDJOB_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_BLOWJOB_ONE) && actor._recordBlowjobUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_BLOWJOB_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_BLOWJOB_TWO) && actor._todayBlowjobUsagePeople >= 20) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_BLOWJOB_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_RIMJOB_ONE) && actor._recordRimjobUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_RIMJOB_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_RIMJOB_TWO) && actor._todayRimjobUsagePeople >= 5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_RIMJOB_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_FOOTJOB_ONE) && actor._recordFootjobUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_FOOTJOB_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_FOOTJOB_TWO) && actor._playthroughRecordFootjobThugPeople > 0 && actor._playthroughRecordFootjobOrcPeople > 0 && actor._playthroughRecordFootjobThugPeople + actor._playthroughRecordFootjobOrcPeople >= 15) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_FOOTJOB_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_TITJOB_ONE) && actor._recordTittyFuckUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_TITJOB_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_TITJOB_TWO) && actor._playthroughRecordTittyFuckUsagePeople >= 50) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_TITJOB_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_PUSSYSEX_ONE) && actor._recordPussySexUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_PUSSYSEX_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_PUSSYSEX_TWO) && actor._todayPussySexUsagePartnersDifferentTotal >= 9) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_PUSSYSEX_TWO]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_ANALSEX_ONE) && actor._recordAnalSexUsageCount > 0) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_ANALSEX_ONE]);
	}
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_ANALSEX_TWO) && actor._playthroughRecordAnalSexUsagePeopleSingleBattleMaxRecord >= 10) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_ANALSEX_TWO]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_METAL_SEX_ONE) && actor._playthroughRecordMetalSexualPartnersCount >= 5) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_METAL_SEX_ONE]);
	}
	
	if(!actor.hasThisTitle(TITLE_ID_SEX_SKILL_LIGHT_KICK) && actor._playthroughRecordKickCounterAfterLightKickSingleDayMaxRecord >= 3) {
		this._newTitlesGainedItem.push($dataArmors[TITLE_ID_SEX_SKILL_LIGHT_KICK]);
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
		
		this._newTitlesGainedIcon.push(item.iconIndex);
	}
};

Game_Party.prototype.setNewTitleVariable = function() {
	$gameVariables.setValue(VARIABLE_NEW_TITLE_NAME_ID, this._newTitlesGainedName.pop());
	$gameVariables.setValue(VARIABLE_NEW_TITLE_ICON_ID, this._newTitlesGainedIcon.pop());
};

///////
// Title Flags

Game_Actor.prototype.setupObtainedTitlesArray = function() {
	this._obtainedTitles = [];
};

Game_Actor.prototype.setupTitleFlags = function() {
	this._flagNeverUnequippedSecretaryTitle = true;
	this._flagNeverUnequippedDisappointmentTitle = true;
	this._flagNeverUnequippedExcellentLeaderTitle = true;
	this._flagNeverUnequippedPrisonFighterTitle = true;
	this._flagNeverUnequippedAspringHeroTitle = true;
	this._flagNeverUnequippedFinalDestinationTitle = true;
	this._flagEquippedBeautifulWardenTitleForWholeDay = false;
	this._flagEquippedHellWardenOneTitleForWholeDay = false;
	this._flagEquippedHellWardenTwoTitleForWholeDay = false;
	this._flagEquippedFullOrderTwoTitleForWholeDay = false;
	this._flagEquippedRadioOrgasmTitleForWholeDay = false;
	this._flagEquippedToiletQueueTitleForWholeDay = false;
	
	this._flagEquippedJadeNecklaceForWholeDay = false;
};

Game_Actor.prototype.checkTitleFlagsAfterClosingEquipScreen = function() {
	if(this._flagNeverUnequippedSecretaryTitle && !this.isUsingThisTitle(TITLE_ID_EMPEROR_SECRETARY))
		this._flagNeverUnequippedSecretaryTitle = false;
	if(this._flagNeverUnequippedDisappointmentTitle && !this.isUsingThisTitle(TITLE_ID_DISAPPOINTMENT))
		this._flagNeverUnequippedDisappointmentTitle = false;
	if(this._flagNeverUnequippedExcellentLeaderTitle && !this.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO))
		this._flagNeverUnequippedExcellentLeaderTitle = false;
	if(this._flagNeverUnequippedPrisonFighterTitle && !this.isUsingThisTitle(TITLE_ID_KICK_ONE))
		this._flagNeverUnequippedPrisonFighterTitle = false;
	if(this._flagNeverUnequippedAspringHeroTitle && !this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO))
		this._flagNeverUnequippedAspringHeroTitle = false;
	if(this._flagNeverUnequippedFinalDestinationTitle && !this.isUsingThisTitle(TITLE_ID_FINAL_DESTINATION))
		this._flagNeverUnequippedFinalDestinationTitle = false;
	
		
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
	if(this._flagEquippedToiletQueueTitleForWholeDay && !this.isUsingThisTitle(TITLE_ID_TOILET_QUEUE))
		this._flagEquippedToiletQueueTitleForWholeDay = false;
	
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
	this._flagEquippedToiletQueueTitleForWholeDay = false;
	
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
		this._flagEquippedFullOrderTwoTitleForWholeDay = true;
	}
	else if(this.isUsingThisTitle(TITLE_ID_TOILET_QUEUE)) {
		this._flagEquippedToiletQueueTitleForWholeDay = true;
	}
	

	if(this.isEquippingThisAccessory(NECKLACE_JADE_ID)) {
		this._flagEquippedJadeNecklaceForWholeDay  = true;
	}
};

//////
// Effects

Game_Actor.prototype.titlesParamBonus = function(paramId) {
	let bonus = 0;
	
	if(paramId === PARAM_CHARM_ID) {
		if(this.hasThisTitle(TITLE_ID_SLEEPY_BEAUTY)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_FIRST_KISS_TO_ANUS)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_GLORIOUS_HOLES)) bonus += 1;
	}
	else if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasThisTitle(TITLE_ID_FIX_CLOTHES_TWO)) bonus += 2;
		else if(this.hasThisTitle(TITLE_ID_FIX_CLOTHES_ONE)) bonus += 1;
		if(this.hasThisTitle(TITLE_ID_FULL_ORDER_FOUR)) bonus += 1;
		
	}
	else if(paramId === PARAM_MAXSTAMINA_ID) {
		if(this.hasThisTitle(TITLE_ID_GOURMET_FOODIE)) bonus += 30;
		
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

Game_Actor.prototype.titlesXParamPlus = function(id) {
	let titleParam = 0;
	
	if(id === XPARAM_GRAZE_ID) {
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

Game_Actor.prototype.titlesXParamRate = function(id) {
	let titleRate = 1;
	
	if(id === XPARAM_EVA_ID) {
		if(this.isUsingThisTitle(TITLE_ID_ENCHANTING_WARDEN)) titleRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_HARDCORE_SADIST)) titleRate -= 0.5;
		else if(this.isUsingThisTitle(TITLE_ID_SOFTCORE_SADIST)) titleRate -= 0.33;
		else if(this.isUsingThisTitle(TITLE_ID_SLEEPY_BEAUTY)) titleRate -= 0.5;
	}
	else if(id === XPARAM_CRIT_ID) {
		if(this.isUsingThisTitle(TITLE_ID_FINAL_DESTINATION)) titleRate += 1;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKPET_ONE)) titleRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKPET_TWO)) titleRate += 0.2;
	}
	else if(id === XPARAM_CRIT_EVA_ID) {
		if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKPET_ONE)) titleRate -= 0.15;
	}
	
	return titleRate;
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
		else if(this.isUsingThisTitle(TITLE_ID_METAL_SEX_ONE)) titleParam += 0.15;
	}	
	else if(id === SPARAM_ASC_ID) {
		if(this.hasThisTitle(TITLE_ID_SLASH_TWO)) titleParam -= 0.06;
		else if(this.hasThisTitle(TITLE_ID_SLASH_ONE)) titleParam -= 0.03;
		if(this.hasThisTitle(TITLE_ID_PIERCE_TWO)) titleParam -= 0.06;
		else if(this.hasThisTitle(TITLE_ID_PIERCE_ONE)) titleParam -= 0.03;
		if(this.hasThisTitle(TITLE_ID_BLUNT_TWO)) titleParam -= 0.06;
		else if(this.hasThisTitle(TITLE_ID_BLUNT_ONE)) titleParam -= 0.03;
	}
	else if(id === SPARAM_SSC_ID && DEBUG_MODE) {
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
		
		else if(this.isUsingThisTitle(TITLE_ID_CC_SKILLED_MANAGER)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_CC_AMBITIOUS_EXPERIMENTER)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_CC_HARDLINE_DEBATER)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_CC_COST_SAVING_SUPERVISOR)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_CC_HARDWORKING_TUTOR)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_CC_MANAGEMENT_CONSULTANT)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_BANKRUPTCY_THREE)) elementRate += 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_BANKRUPTCY_TWO)) elementRate += 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_BANKRUPTCY_ONE)) elementRate += 0.05;
		else if(this.isUsingThisTitle(TITLE_ID_REDEEMED_ONE)) elementRate -= 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_REDEEMED_TWO)) elementRate -= 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_ONE)) elementRate -= 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_KICK_REWARD_TWO)) elementRate -= 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_VISITOR_SWALLOWER)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_SCANDELOUS_IDOL)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_GLORIOUS_HOLES)) elementRate -= 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKPET_ONE)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_HANDJOB_ONE)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_RIMJOB_ONE)) elementRate += 0.15;
		
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
		else if(this.isUsingThisTitle(TITLE_ID_TOILET_EAT_ORGASM)) elementRate += 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_TWO)) elementRate -= 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_FOOTJOB_ONE)) elementRate += 0.15;
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
		else if(this.isUsingThisTitle(TITLE_ID_TOILET_QUEUE)) elementRate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_EVASION_THREE)) elementRate -= 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_KISS_TWO)) elementRate -= 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_HANDJOB_ONE)) elementRate += 0.2;
	}
	else if(elementId === ELEMENT_PETTING_ID) {
		if(this.isUsingThisTitle(TITLE_ID_VISITOR_FIRST_KISS)) elementRate += 0.2;
		else if(this.isUsingThisTitle(TITLE_ID_BUSTY_BARMAID)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_GOLDEN_WAITRESS)) elementRate -= 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_PUSSY_PETTER)) elementRate += 0.25;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_KISS_ONE)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_TITJOB_ONE)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_ANALSEX_ONE)) elementRate += 0.15;
	}
	else if(elementId === ELEMENT_SEX_ID) {
		if(this.isUsingThisTitle(TITLE_ID_CUM_GUZZLER)) elementRate += 0.25;
		else if(this.isUsingThisTitle(TITLE_ID_GLORIOUS_HOLES)) elementRate -= 0.1;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_ONE)) elementRate += 0.15;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_ANALSEX_TWO)) elementRate -= 0.1;
	}
	
	return elementRate;
};

Game_Actor.prototype.titlesUnarmedAttack = function() {
	let unarmedAttack = 0;

	if(this.hasThisTitle(TITLE_ID_KICK_THREE)) unarmedAttack += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_TWO)) unarmedAttack += 0.15;
	else if(this.hasThisTitle(TITLE_ID_KICK_ONE)) unarmedAttack += 0.05;
	if(this.hasThisTitle(TITLE_ID_KICK_REWARD_TWO)) unarmedAttack += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_REWARD_ONE)) unarmedAttack += 0.1;
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_LIGHT_KICK)) unarmedAttack -= 1.51;
	
	return unarmedAttack;
};

Game_Actor.prototype.titlesUnarmedDefense = function() {
	let unarmedDefense = 0;

	if(this.hasThisTitle(TITLE_ID_KICK_THREE)) unarmedDefense += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_TWO)) unarmedDefense += 0.15;
	else if(this.hasThisTitle(TITLE_ID_KICK_ONE)) unarmedDefense += 0.05;
	if(this.hasThisTitle(TITLE_ID_KICK_REWARD_TWO)) unarmedDefense += 0.25;
	else if(this.hasThisTitle(TITLE_ID_KICK_REWARD_ONE)) unarmedDefense += 0.1;
	
	if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_LIGHT_KICK)) unarmedDefense += 0.25;
	
	return unarmedDefense;
};

Game_Actor.prototype.titlesPassiveRequirementRate = function(skillId) {
	let rate = 1;
	
	if(skillId === PASSIVE_KISS_PEOPLE_ONE_ID || skillId === PASSIVE_KISS_PEOPLE_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_KISS_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_KISS_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_KARRYN_STARE_COCK_ONE_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_COCKSTARE_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_COCKSTARE_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_HJ_COUNT_THREE_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_COCKPET_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_COCKPET_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_HJ_COUNT_ONE_ID || skillId === PASSIVE_HJ_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_HANDJOB_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_HANDJOB_ONE)) rate *= 0.6;
		
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_COCKPET_TWO)) rate *= 0.85;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_COCKPET_ONE)) rate *= 0.85;
	}
	else if(skillId === PASSIVE_BJ_COUNT_ONE_ID || skillId === PASSIVE_BJ_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_BLOWJOB_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_BLOWJOB_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_RIMJOB_COUNT_ONE_ID || skillId === PASSIVE_RIMJOB_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_RIMJOB_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_RIMJOB_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_FOOTJOB_COUNT_ONE_ID || skillId === PASSIVE_FOOTJOB_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_FOOTJOB_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_FOOTJOB_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_TITTYFUCK_COUNT_ONE_ID || skillId === PASSIVE_TITTYFUCK_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_TITJOB_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_TITJOB_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_PUSSY_SEX_COUNT_ONE_ID || skillId === PASSIVE_PUSSY_SEX_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_PUSSYSEX_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_PUSSYSEX_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_ANAL_SEX_COUNT_ONE_ID || skillId === PASSIVE_ANAL_SEX_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_ANALSEX_TWO)) rate *= 0.6;
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_ANALSEX_ONE)) rate *= 0.6;
	}
	else if(skillId === PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID) {
		if(this.titleHasBeenEquippedOnceBefore(TITLE_ID_SEX_SKILL_LIGHT_KICK)) rate *= 0.6;
	}
	
	
	return rate;
};

Game_Actor.prototype.titlesEdictCostRate = function(skillId) {
	let rate = 1;
	
	if(this.hasThisTitle(TITLE_ID_CC_COST_SAVING_SUPERVISOR)) rate *= 0.87;
	
	if(skillId) {
		if(skillId === EDICT_COUNTER_STANCE) {
			if(this.hasThisTitle(TITLE_ID_COUNTERATTACK_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_SLASH_TRAINING_TWO) {
			if(this.hasThisTitle(TITLE_ID_SLASH_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_THRUST_TRAINING_TWO) {
			if(this.hasThisTitle(TITLE_ID_PIERCE_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_STRIKE_TRAINING_TWO) {
			if(this.hasThisTitle(TITLE_ID_BLUNT_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_SLAM_TRAINING_ONE) {
			if(this.hasThisTitle(TITLE_ID_STRENGTH_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_CLEAVE_TRAINING_ONE) {
			if(this.hasThisTitle(TITLE_ID_DEXTERITY_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_SKEWER_TRAINING_ONE) {
			if(this.hasThisTitle(TITLE_ID_AGILITY_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_DEFENSIVE_STANCE) {
			if(this.hasThisTitle(TITLE_ID_ENDURANCE_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_HEALING_THOUGHTS_ONE) {
			if(this.hasThisTitle(TITLE_ID_MIND_THREE)) rate *= 0.5;
		}
		else if(skillId === EDICT_CAUTIOUS_STANCE) {
			if(this.hasThisTitle(TITLE_ID_EVASION_THREE)) rate *= 0.5;
		}
	}
	
	return rate;
};

Game_Actor.prototype.titlesFlatIncome = function() {
	let value = 0;
	
	if(this.hasThisTitle(TITLE_ID_CC_AMBITIOUS_EXPERIMENTER)) value += 300;
	
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
	
	if(this.hasThisTitle(TITLE_ID_CC_HARDWORKING_TUTOR)) rate *= 1.08;
	
	if(this.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO) && this._flagEquippedFullOrderTwoTitleForWholeDay) rate *= 1.05;
	else if(this.isUsingThisTitle(TITLE_ID_TOILET_QUEUE) && this._flagEquippedToiletQueueTitleForWholeDay) rate *= 1.05;

	
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
	else if(this.isUsingThisTitle(TITLE_ID_TOILET_QUEUE) && this._flagEquippedToiletQueueTitleForWholeDay) rate *= 1.05;
	
	return rate;
};

Game_Actor.prototype.titlesOrderChange = function() {
	let value = 0;
	
	//Character Creator titles
	if(this.hasThisTitle(TITLE_ID_CC_AMBITIOUS_EXPERIMENTER)) value -= 1;
	else if(this.hasThisTitle(TITLE_ID_CC_HARDLINE_DEBATER)) value += 3;
	else if(this.hasThisTitle(TITLE_ID_CC_HARDWORKING_TUTOR)) value += 1;
	
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
	
	if(this.hasThisTitle(TITLE_ID_ALLURING_WARDEN) && this.titleHasBeenEquippedOnceBefore(TITLE_ID_ALLURING_WARDEN)) effect -= 10;
	if(this.isUsingThisTitle(TITLE_ID_SLEEPY_BEAUTY)) effect -= 20;
	else if(this.isUsingThisTitle(TITLE_ID_ALLURING_WARDEN)) effect -= 50;
	else if(this.isUsingThisTitle(TITLE_ID_KICK_TWO)) effect += 30;
	else if(this.isUsingThisTitle(TITLE_ID_KICK_THREE)) effect += 60;
	
	if(this.isUsingThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && enemy.isGoblinType) effect -= 30;
	
	
	return effect;
};

Game_Actor.prototype.titleEnemyParamRate = function(paramId, enemy) {
	let rate = 1;
	
	if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasThisTitle(TITLE_ID_VISITOR_GOBLIN_CREAMPIE) && enemy.isGoblinType) {
			rate += 0.25;
		}
	}
	
	if(enemy.isGuardType) {
		if(this.isUsingThisTitle(TITLE_ID_GUARD_MAID))
			rate += 0.3;
		else if(this.isUsingThisTitle(TITLE_ID_RECEPTIONIST_RADIO_ORGASM))
			rate += 0.3;
	}
	

	
	return rate;
};

Game_Actor.prototype.titleEnemyXParamRate = function(paramId, enemy) {
	let rate = 1;
	
	if(paramId === XPARAM_CRIT_ID) {
		if(this.isUsingThisTitle(TITLE_ID_FINAL_DESTINATION)) 
			rate += 1;
	}
	else if(paramId === XPARAM_CRIT_EVA_ID) {
		if(this.isUsingThisTitle(TITLE_ID_ENCHANTING_WARDEN)) 
			rate -= 0.25;
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
	if(this.isUsingThisTitle(TITLE_ID_GUARD_MAID) && enemy.isGuardType) {
		multipler += 0.33;
	}
	
	return multipler;
};

Game_Actor.prototype.titlesSubsidies_Flat = function() {
	let value = 0;
	
	if(this.hasThisTitle(TITLE_ID_REDEEMED_TWO)) value += 25;
	if(this.hasThisTitle(TITLE_ID_LEVEL_THREE_BOSS)) value += 30;
	else if(this.hasThisTitle(TITLE_ID_LEVEL_ONE_BOSS)) value += 15;
	if(this.hasThisTitle(TITLE_ID_PUSSY_PETTER)) value += 10;
	
	if(this.hasThisTitle(TITLE_ID_CC_SKILLED_MANAGER)) value += 50;
	else if(this.hasThisTitle(TITLE_ID_CC_MANAGEMENT_CONSULTANT)) value += 200;
	
	
	return value;
};

Game_Actor.prototype.titlesSubsidies_Rate = function() {
	let rate = 1;
	
	if(this.hasThisTitle(TITLE_ID_CC_AMBITIOUS_EXPERIMENTER)) rate -= 0.12;
	else if(this.hasThisTitle(TITLE_ID_CC_COST_SAVING_SUPERVISOR)) rate += 0.08;

	
	return rate;
};

///////
// Game Party


Game_Party.prototype.titlesGlobalRiotChance = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = 0;
	
	if(actor.isUsingThisTitle(TITLE_ID_FULL_ORDER_ONE)) value -= 2;
	else if(actor.isUsingThisTitle(TITLE_ID_HELL_WARDEN_ONE)) value -= 3;
	else if(actor.isUsingThisTitle(TITLE_ID_HELL_WARDEN_TWO)) value -= 4;
	
	if(actor.hasThisTitle(TITLE_ID_CC_HARDLINE_DEBATER)) value += 2;
	
	return value;
}

//unused
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


Game_Party.prototype.titlesBankruptcyOrder = function(estimated) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = PRISON_BANKRUPTCY_ORDER_NO_TITLE;
	
	if(actor.hasThisTitle(TITLE_ID_BANKRUPTCY_THREE)) value -= 4;
	else if(actor.hasThisTitle(TITLE_ID_BANKRUPTCY_TWO)) value -= 2;
	
	if(estimated) {
		return value;
	}
	else {
		this.increaseOrder(-1 * value);
	}
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

Game_Actor.prototype.titlesFatigueGainRate = function() {
	let rate = 1;
	if(this.hasThisTitle(TITLE_ID_CC_MANAGEMENT_CONSULTANT)) rate *= 0.85;
	if(this.hasThisTitle(TITLE_ID_TOILET_RESTER)) rate *= 0.95;
	
	if(this.isUsingThisTitle(TITLE_ID_TOILET_RESTER)) rate *= 0.85;
	
	return rate;
};

Game_Actor.prototype.titlesfatigueRecoveryRate = function() {
	if(this.hasThisTitle(TITLE_ID_CC_HARDWORKING_TUTOR)) return 0.88;
	else return 1;
};

Game_Actor.prototype.titleStunningWarden_stunChance = function() {
	let chance = 0;
	if(this.hasThisTitle(TITLE_ID_STUNNING_WARDEN)) {
		chance += 0.1;
		if(this.isUsingThisTitle(TITLE_ID_STUNNING_WARDEN)) chance += 0.4;
	}
	return chance;
};

Game_Actor.prototype.titleEfficientAdminstrator_carryoverUnusedEdictPoint = function() {
	if(this.hasThisTitle(TITLE_ID_CC_SKILLED_MANAGER)) return 1;
	else return 0;
};


///////
// Game Enemy
/////////

Game_Enemy.prototype.enemyTitlesSParamRate = function(id) {
	let rate = 1;
	
	if(id === SPARAM_WPATK_ID || id === SPARAM_WPDEF_ID) {
		if(Karryn.isUsingThisTitle(TITLE_ID_LEVEL_ONE_BOSS) && this.isOrcType) {
			rate *= 0.95;
		}
		else if(Karryn.isUsingThisTitle(TITLE_ID_LEVEL_TWO_BOSS) && this.isMonstrousType) {
			rate *= 0.95;
		}
		else if(Karryn.isUsingThisTitle(TITLE_ID_LEVEL_THREE_BOSS) && (this.hasElitePrefix() || this.hasGoodPrefix())) {
			rate *= 0.95;
		}
		else if(Karryn.isUsingThisTitle(TITLE_ID_LEVEL_FOUR_BOSS) && this.hasBigPrefix()) {
			rate *= 0.95;
		}
	}
	
	return rate;
};