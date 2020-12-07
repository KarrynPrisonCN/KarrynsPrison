var Remtairy = Remtairy || {};
Remtairy.Lines = Remtairy.Lines || {};

//=============================================================================
 /*:
 * @plugindesc Lines
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const BATTLE_LOG_VIEW_DURATION_ZERO = 200;
const BATTLE_LOG_VIEW_DURATION_ONE = 350;
const BATTLE_LOG_VIEW_DURATION_TWO = 500;
const BATTLE_LOG_VIEW_DURATION_THREE = 800;
const BATTLE_LOG_VIEW_DURATION_FOUR = 1400;
const LINE_DURATION_PER_CHARACTER_JP = 2.3; //unused
const LINE_DURATION_PER_CHARACTER_EN = 0.8; //unused

const LINE_TESTING = 999;

const LINEARRAY_LINE_ID = 0;
const LINEARRAY_IS_MALE = 1;
const LINEARRAY_IS_VOICED = 2;

const LINE_MALE_SHOW_CHANCE = 80; //unused
const LINE_MALE_SHOW_CHANCE_ONE = 25;
const LINE_MALE_SHOW_CHANCE_TWO = 50;
const LINE_MALE_SHOW_CHANCE_THREE = 75;

//Enemy lines
const ENEMY_LINE_TALK_RANDOM = 1; //unused
const ENEMY_LINE_TALK_MOUTH = 2;
const ENEMY_LINE_TALK_BOOBS = 3;
const ENEMY_LINE_TALK_PUSSY = 4;
const ENEMY_LINE_TALK_BUTT = 5;
const ENEMY_LINE_TALK_COCK = 6;

const KARRYN_LINE_SIGHT_RANDOM = 10; //unused
const KARRYN_LINE_SIGHT_BUKKAKE = 11; 
const KARRYN_LINE_SIGHT_MOUTH = 12; 
const KARRYN_LINE_SIGHT_BOOBS = 13; 
const KARRYN_LINE_SIGHT_NIPPLES = 14; 
const KARRYN_LINE_SIGHT_TITTYFUCK = 15; //unused
const KARRYN_LINE_SIGHT_PUSSY = 16; 
const KARRYN_LINE_SIGHT_BUTT = 17; 
const KARRYN_LINE_SIGHT_ORGASM = 18; 


//Pose skills
const KARRYN_LINE_ENEMY_POSESKILL_ANAL = 31;
const KARRYN_LINE_ENEMY_POSESKILL_BJ = 32;
const KARRYN_LINE_ENEMY_POSESKILL_PUSSYSEX = 33;
const KARRYN_LINE_ENEMY_POSESKILL_HANDJOB = 34;
const KARRYN_LINE_ENEMY_POSESKILL_PAIZURI = 35;
const KARRYN_LINE_ENEMY_POSESKILL_CUNNILINGUS = 36;
const KARRYN_LINE_ENEMY_POSESKILL_RIMJOB = 37;
const KARRYN_LINE_ENEMY_POSESKILL_FOOTJOB = 38;

const ENEMY_LINE_ENEMY_POSESKILL_ANAL = 301;
const ENEMY_LINE_ENEMY_POSESKILL_BJ = 302;
const ENEMY_LINE_ENEMY_POSESKILL_PUSSYSEX = 303;
const ENEMY_LINE_ENEMY_POSESKILL_HANDJOB = 304;
const ENEMY_LINE_ENEMY_POSESKILL_PAIZURI = 305;
const ENEMY_LINE_ENEMY_POSESKILL_CUNNILINGUS = 306;
const ENEMY_LINE_ENEMY_POSESKILL_RIMJOB = 307;
const ENEMY_LINE_ENEMY_POSESKILL_FOOTJOB = 308;

const KARRYN_LINE_KARRYN_POSESKILL_ANAL = 41;
const KARRYN_LINE_KARRYN_POSESKILL_BJ = 42;
const KARRYN_LINE_KARRYN_POSESKILL_PUSSYSEX = 43;
const KARRYN_LINE_KARRYN_POSESKILL_HANDJOB = 44;
const KARRYN_LINE_KARRYN_POSESKILL_PAIZURI = 45;
const KARRYN_LINE_KARRYN_POSESKILL_RIMJOB = 46;
const KARRYN_LINE_KARRYN_POSESKILL_FOOTJOB = 47;

//Karryn's line towards enemy joining
const KARRYN_LINE_ENEMY_JOIN_HJ = 51; 
const KARRYN_LINE_ENEMY_JOIN_BJ = 52;
const KARRYN_LINE_ENEMY_JOIN_ANAL = 53;
const KARRYN_LINE_ENEMY_JOIN_PAIZURI = 54;
const KARRYN_LINE_ENEMY_JOIN_PUSSY = 55;
const KARRYN_LINE_ENEMY_JOIN_CUNNI = 56;


//Enemy line while joining
const ENEMY_LINE_ENEMY_JOIN_HJ = 501; 
const ENEMY_LINE_ENEMY_JOIN_BJ = 502;
const ENEMY_LINE_ENEMY_JOIN_ANAL = 503;
const ENEMY_LINE_ENEMY_JOIN_PAIZURI = 504;
const ENEMY_LINE_ENEMY_JOIN_PUSSY = 505;
const ENEMY_LINE_ENEMY_JOIN_CUNNI = 506;

//Karryn line for making enemies join
const KARRYN_LINE_POSEINVITE_HJ = 551; 
const KARRYN_LINE_POSEINVITE_BJ = 552;
const KARRYN_LINE_POSEINVITE_ANAL = 553;
const KARRYN_LINE_POSEINVITE_PAIZURI = 554;
const KARRYN_LINE_POSEINVITE_PUSSY = 555;

const KARRYN_LINE_KARRYN_TAUNT = 60; 
const KARRYN_LINE_KARRYN_KISSING_LVLONE = 61;
const KARRYN_LINE_KARRYN_KISSING_LVLTWO = 62;

const KARRYN_LINE_KARRYN_FLAUNT = 65;
const KARRYN_LINE_KARRYN_DOGEZA = 66; 

const KARRYN_LINE_KARRYN_COCK_PETTING_LVLONE = 68;
const KARRYN_LINE_KARRYN_COCK_STARE_LVLONE = 69;

const KARRYN_LINE_ENEMY_KISSING_LVLONE = 71;
const KARRYN_LINE_ENEMY_KISSING_LVLTWO = 72;
const KARRYN_LINE_ENEMY_SPANKING_LVLONE = 76;



//Karryn's line towards enemy petting
const KARRYN_LINE_ENEMY_PETTING_BOOBS = 181;
const KARRYN_LINE_ENEMY_PETTING_NIPPLES = 182;
const KARRYN_LINE_ENEMY_PETTING_CLIT = 183;
const KARRYN_LINE_ENEMY_PETTING_PUSSY = 184;
const KARRYN_LINE_ENEMY_PETTING_BUTT = 185;
const KARRYN_LINE_ENEMY_PETTING_ANAL = 186;
const KARRYN_LINE_ENEMY_SUCK_FINGERS = 187;
const KARRYN_LINE_ENEMY_HANDSHAKE = 188;

//Enemy lines doing petting
const ENEMY_LINE_ENEMY_PETTING_BOOBS = 281;
const ENEMY_LINE_ENEMY_PETTING_NIPPLES = 282;
const ENEMY_LINE_ENEMY_PETTING_CLIT = 283;
const ENEMY_LINE_ENEMY_PETTING_PUSSY = 284;
const ENEMY_LINE_ENEMY_PETTING_BUTT = 285;
const ENEMY_LINE_ENEMY_PETTING_ANAL = 286;
const ENEMY_LINE_ENEMY_SUCK_FINGERS = 287;
const ENEMY_LINE_ENEMY_HANDSHAKE = 288;

const ENEMY_LINE_ENEMY_KISSING_LVLTWO = 401;
const ENEMY_LINE_ENEMY_KISSING_LVLONE = 402;
const ENEMY_LINE_ENEMY_SPANKING_LVLONE = 405;
const ENEMY_LINE_KARRYN_COCK_STARE_LVLONE = 406;


//Enemy lines for toys
const ENEMY_LINE_ENEMY_INSERT_PINK_ROTOR = 601;
const ENEMY_LINE_ENEMY_INSERT_PENIS_DILDO = 602;
const ENEMY_LINE_ENEMY_INSERT_ANAL_BEADS = 603;
const ENEMY_LINE_ENEMY_PETTING_PINK_ROTOR = 621;
const ENEMY_LINE_ENEMY_PETTING_PENIS_DILDO = 622;
const ENEMY_LINE_ENEMY_PETTING_ANAL_BEADS = 623;

//Karryn lines for toys
const KARRYN_LINE_ENEMY_INSERT_PINK_ROTOR = 641;
const KARRYN_LINE_ENEMY_INSERT_PENIS_DILDO = 642;
const KARRYN_LINE_ENEMY_INSERT_ANAL_BEADS = 643;
const KARRYN_LINE_ENEMY_PETTING_PINK_ROTOR = 651;
const KARRYN_LINE_ENEMY_PETTING_PENIS_DILDO = 652;
const KARRYN_LINE_ENEMY_PETTING_ANAL_BEADS = 653;
const KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR = 661;
const KARRYN_LINE_KARRYN_PETTING_PENIS_DILDO = 662;
const KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS = 663;
const KARRYN_LINE_REMOVING_PINK_ROTOR = 681;
const KARRYN_LINE_REMOVING_PENIS_DILDO = 682;
const KARRYN_LINE_REMOVING_ANAL_BEADS = 683;

//Karryn's line for ejaculation
const KARRYN_LINE_KARRYN_ORGASM = 130;
const KARRYN_LINE_ENEMY_SWALLOW = 131;
const KARRYN_LINE_ENEMY_PUSSYCREAMPIE = 132;
const KARRYN_LINE_ENEMY_ANALCREAMPIE = 133;
const KARRYN_LINE_ENEMY_BUKKAKE_FACE = 134;
const KARRYN_LINE_ENEMY_BUKKAKE_BOOBS = 135;
const KARRYN_LINE_ENEMY_BUKKAKE_ARMS = 136;
const KARRYN_LINE_ENEMY_BUKKAKE_BUTT = 137;
const KARRYN_LINE_ENEMY_BUKKAKE_LEGS = 138;
const KARRYN_LINE_ENEMY_CUM_INTO_MUG = 139;
const KARRYN_LINE_ENEMY_CUM_ONTO_DESK = 140;
const KARRYN_LINE_ENEMY_CUM_ONTO_FLOOR = 141;

//Enemy's line for ejaculation
const ENEMY_LINE_ENEMY_SWALLOW = 101;
const ENEMY_LINE_ENEMY_PUSSYCREAMPIE = 102;
const ENEMY_LINE_ENEMY_ANALCREAMPIE = 103;
const ENEMY_LINE_ENEMY_BUKKAKE_FACE = 104;
const ENEMY_LINE_ENEMY_BUKKAKE_BOOBS = 105;
const ENEMY_LINE_ENEMY_BUKKAKE_ARMS = 106;
const ENEMY_LINE_ENEMY_BUKKAKE_BUTT = 107;
const ENEMY_LINE_ENEMY_BUKKAKE_LEGS = 108;
const ENEMY_LINE_ENEMY_CUM_INTO_MUG = 109;
const ENEMY_LINE_ENEMY_CUM_ONTO_DESK = 110;
const ENEMY_LINE_ENEMY_CUM_ONTO_FLOOR = 111;

const KARRYN_LINE_ENEMY_START_THUG_GANGBANG = 1601;
const KARRYN_LINE_ENEMY_START_GOBLIN_CUNNI = 1602;
const KARRYN_LINE_ENEMY_START_HJ_STANDING = 1603;
const KARRYN_LINE_ENEMY_START_BJ_KNEELING = 1604;
const KARRYN_LINE_ENEMY_START_KICKCOUNTER = 1605;
const KARRYN_LINE_ENEMY_START_RIMJOB = 1606;
const KARRYN_LINE_ENEMY_START_TF_LAYING = 1607;
const KARRYN_LINE_ENEMY_START_FOOTJOB = 1608;
const KARRYN_LINE_ENEMY_START_SLIME_ANAL = 1609;
const KARRYN_LINE_ENEMY_START_GUARD_GANGBANG = 1610;
const KARRYN_LINE_ENEMY_START_ORC_PAIZURI = 1611;
const KARRYN_LINE_ENEMY_START_REVERSE_COWGIRL = 1612;
const KARRYN_LINE_ENEMY_START_LIZARDMAN_COWGIRL = 1613;

const KARRYN_LINE_KARRYN_START_HJ_STANDING = 2601;
const KARRYN_LINE_KARRYN_START_BJ_KNEELING = 2602;
const KARRYN_LINE_KARRYN_START_RIMJOB = 2603;
const KARRYN_LINE_KARRYN_START_TF_LAYING = 2604;
const KARRYN_LINE_KARRYN_START_FOOTJOB = 2605;
const KARRYN_LINE_KARRYN_START_REVERSE_COWGIRL = 2606;
const KARRYN_LINE_KARRYN_START_KARRYN_COWGIRL = 2607;

const ENEMY_LINE_START_THUG_GANGBANG = 1701;
const ENEMY_LINE_START_GOBLIN_CUNNI = 1702;
const ENEMY_LINE_START_KICKCOUNTER = 1703;
const ENEMY_LINE_START_RIMJOB = 1704;
const ENEMY_LINE_START_FOOTJOB = 1705;
const ENEMY_LINE_START_SLIME_ANAL = 1706;
const ENEMY_LINE_START_GUARD_GANGBANG = 1707;
const ENEMY_LINE_ENEMY_START_HJ_STANDING = 1708;
const ENEMY_LINE_ENEMY_START_BJ_KNEELING = 1709;
const ENEMY_LINE_ENEMY_START_TF_LAYING = 1710;
const ENEMY_LINE_START_ORC_PAIZURI = 1711;
const ENEMY_LINE_ENEMY_START_REVERSE_COWGIRL = 1712;
const ENEMY_LINE_ENEMY_START_LIZARDMAN_COWGIRL = 1713;

//Masturbation 
const LINE_KARRYN_MAS_TOUCH_BOOBS = 3001
const LINE_KARRYN_MAS_TOUCH_NIPPLES = 3002;
const LINE_KARRYN_MAS_TOUCH_CLIT = 3003;
const LINE_KARRYN_MAS_TOUCH_PUSSY = 3004;
const LINE_KARRYN_MAS_TOUCH_ANUS = 3005;
const LINE_KARRYN_MAS_FINGER_PUSSY = 3014;
const LINE_KARRYN_MAS_FINGER_ANUS = 3015;
const LINE_KARRYN_MAS_SUCK_FINGERS = 3020;
const LINE_KARRYN_MAS_SUCK_NIPPLES = 3022;
const LINE_KARRYN_MAS_LICK_HALBERD = 3030;
const LINE_KARRYN_MAS_TITTYFUCK_HALBERD = 3031;
const LINE_KARRYN_MAS_CLIT_RUB_HALBERD = 3032;
const LINE_KARRYN_MAS_PUSSY_RUB_HALBERD = 3033;

const KARRYN_LINE_DEFEAT_LV1_START = 6000;
const KARRYN_LINE_DEFEAT_LV2_START = 6001;
const KARRYN_LINE_DEFEAT_LV3_START = 6002;
const KARRYN_LINE_DEFEAT_LV4_START = 6003;
const KARRYN_LINE_DEFEAT_LV5_START = 6004;
const KARRYN_LINE_DEFEAT_GUARD_START = 6005;
const KARRYN_LINE_INVASION_BATTLE_START = 6006;

const KARRYN_LINE_WAITRESS_SERVE_START = 7000;
const KARRYN_LINE_WAITRESS_SERVE_TAKE_ORDER = 7001;
const KARRYN_LINE_WAITRESS_SERVE_ACCEPT_DRINK = 7002;
const KARRYN_LINE_WAITRESS_SERVE_REJECT_DRINK = 7003;
const KARRYN_LINE_WAITRESS_SERVE_FLASH = 7004;
const KARRYN_LINE_WAITRESS_TABLE_DRINK = 7005;
const KARRYN_LINE_WAITRESS_TABLE_START = 7006;

const KARRYN_LINE_DOWN_STAMINA = 7010;
const KARRYN_LINE_DOWN_FALLDOWN = 7011;

const KARRYN_LINE_RECEPTIONIST_START = 7100;
const KARRYN_LINE_RECEPTIONIST_SUMMON_VISITOR_NORMAL = 7101;
const KARRYN_LINE_RECEPTIONIST_SUMMON_VISITOR_SEXUAL = 7101;
const KARRYN_LINE_RECEPTIONIST_GREET_VISITOR_NORMAL = 7102;
const KARRYN_LINE_RECEPTIONIST_GREET_VISITOR_SEXUAL = 7103;
const KARRYN_LINE_RECEPTIONIST_GIVE_PAPER_NORMAL = 7110;
const KARRYN_LINE_RECEPTIONIST_GIVE_PAPER_SEXUAL = 7111;
const KARRYN_LINE_RECEPTIONIST_RECEIVE_PAPER_NORMAL = 7112;
const KARRYN_LINE_RECEPTIONIST_RECEIVE_PAPER_SEXUAL = 7113;
const KARRYN_LINE_RECEPTIONIST_ASSIGN_ROOM_NORMAL = 7114;
const KARRYN_LINE_RECEPTIONIST_ASSIGN_ROOM_SEXUAL = 7115;
const KARRYN_LINE_RECEPTIONIST_CHECK_ROOM_NORMAL = 7124;
const KARRYN_LINE_RECEPTIONIST_CHECK_ROOM_SEXUAL = 7125;
const KARRYN_LINE_RECEPTIONIST_NORMAL_APOLOGY_NORMAL = 7128;
const KARRYN_LINE_RECEPTIONIST_NORMAL_APOLOGY_SEXUAL = 7129;
const KARRYN_LINE_RECEPTIONIST_SHOO_AWAY_NORMAL = 7130;
const KARRYN_LINE_RECEPTIONIST_SHOO_AWAY_SEXUAL = 7131;
const KARRYN_LINE_RECEPTIONIST_KICK_AWAY = 7132;
const KARRYN_LINE_RECEPTIONIST_REJECT_REQUEST_NORMAL = 7133;
const KARRYN_LINE_RECEPTIONIST_REJECT_REQUEST_SEXUAL = 7134;

const ENEMY_LINE_FAN_HANDSHAKE_FINISHED = 7200;
const ENEMY_LINE_FAN_GREET_HANDSHAKE = 7201;
const ENEMY_LINE_FAN_GREET_BOOBSHAKE = 7202;
const ENEMY_LINE_FAN_GREET_KISS = 7203;
const ENEMY_LINE_FAN_GREET_HANDJOB = 7204;
const ENEMY_LINE_FAN_GREET_BLOWJOB = 7205;
const ENEMY_LINE_PERV_GREET_BOOBSHAKE = 7206;
const ENEMY_LINE_PERV_GREET_KISS = 7207;
const ENEMY_LINE_PERV_GREET_HANDJOB = 7208;
const ENEMY_LINE_PERV_GREET_BLOWJOB = 7209;
const ENEMY_LINE_PERV_SECOND_BOOBSHAKE = 7210;
const ENEMY_LINE_PERV_SECOND_KISS = 7211;
const ENEMY_LINE_PERV_SECOND_HANDJOB = 7212;
const ENEMY_LINE_PERV_SECOND_BLOWJOB = 7213;
const ENEMY_LINE_PERV_FINISHED = 7220;

const KARRYN_LINE_GLORY_BATTLE_START = 7300;
const KARRYN_LINE_GLORY_HOLE_APPEAR_FIRST = 7301;
const KARRYN_LINE_GLORY_HOLE_APPEAR_MID = 7302;

var $remLines = null;

/////////////
// Data Manager
////////////////

Remtairy.Lines.DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function() {
	Remtairy.Lines.DataManager_loadDatabase.call(this);
	this.loadDataFile('$remLines', 'RemLines.json');
};

////////////////
/////////////////////
// Rem Lines
////////////////////
//////////////////


function Rem_Lines() {
    this.initialize.apply(this, arguments);
}

Rem_Lines.prototype.initialize = function(lineType, enemy) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._lineType = eval(lineType);
	if(enemy) {
		this._enemyType = enemy.enemyType();
		this._enemyTypeIsBoss = enemy.isBossType;
		this._visitor_isFan = enemy._visitor_isFan;
		this._visitor_isPervert = enemy._visitor_isPervert;
		this._enemyTypeIsInmate = enemy.isInmate;
		if(enemy.isWanted && actor._firstPussySexWantedID === enemy.getWantedId() && actor._firstPussySexDate === Prison.date && enemy.isUsingBodySlotPenis(PUSSY_ID) && !actor._remLine_saidLostPussyVirginity) {
			this._enemyJustTookPussyVirginity = true;
		}
		else {
			this._enemyJustTookPussyVirginity = false;
		}
		if(enemy.isWanted && actor._firstAnalSexWantedID === enemy.getWantedId() && actor._firstAnalSexDate === Prison.date && enemy.isUsingBodySlotPenis(ANAL_ID) && !actor._remLine_saidLostAnalVirginity) {
			this._enemyJustTookAnalVirginity = true;
		}
		else {
			this._enemyJustTookAnalVirginity = false;
		}
		
		if(enemy._enemyTempRecordCockJustShrankFromCockStare) {
			this._enemysCockJustShrankFromCockStare = true;
		}
		else {
			this._enemysCockJustShrankFromCockStare = false;
		}
		
		this._enemyIsLeftHole = false;
		this._enemyIsRightHole = false;
		if($gameParty.isInGloryBattle) {
			if(enemy._guest_atStall === GLORY_LEFT_STALL_ID)
				this._enemyIsLeftHole = true;
			else if(enemy._guest_atStall === GLORY_RIGHT_STALL_ID)
				this._enemyIsRightHole = true;
		}
	}
	else {
		this._enemyType = false;
		this._visitor_isFan = false;
		this._visitor_isPervert = false;
		this._enemyJustTookPussyVirginity = false;
		this._enemyJustTookAnalVirginity = false;
		this._enemysCockJustShrankFromCockStare = false;
		this._enemyIsLeftHole = false;
		this._enemyIsRightHole = false;
	}
	
};

Rem_Lines.prototype.getLineArray = function() {
	let lineArray = [];
	let enemyLineAlwaysShow = false;
	
	if(this._lineType === ENEMY_LINE_TALK_MOUTH) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_Talk_Mouth(lineArray);
		lineArray = this.enemyline_Talk_Mouth(lineArray);
		lineArray = this.enemyline_Talk_Random(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_TALK_BOOBS) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_Talk_Boobs(lineArray);
		lineArray = this.enemyline_Talk_Boobs(lineArray);
		lineArray = this.enemyline_Talk_Random(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_TALK_PUSSY) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_Talk_Pussy(lineArray);
		lineArray = this.enemyline_Talk_Pussy(lineArray);
		lineArray = this.enemyline_Talk_Random(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_TALK_BUTT) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_Talk_Butt(lineArray);
		lineArray = this.enemyline_Talk_Butt(lineArray);
		lineArray = this.enemyline_Talk_Random(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_TALK_COCK) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_Talk_Cock(lineArray);
		lineArray = this.enemyline_Talk_Cock(lineArray);
		lineArray = this.enemyline_Talk_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_BUKKAKE) {
		lineArray = this.karrynline_Sight_Bukkake(lineArray);
		lineArray = this.karrynline_Sight_Bukkake(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_MOUTH) {
		lineArray = this.karrynline_Sight_Mouth(lineArray);
		lineArray = this.karrynline_Sight_Mouth(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_BOOBS) {
		lineArray = this.karrynline_Sight_Boobs(lineArray);
		lineArray = this.karrynline_Sight_Boobs(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_NIPPLES) {
		lineArray = this.karrynline_Sight_Boobs(lineArray);
		lineArray = this.karrynline_Sight_Nipples(lineArray);
		lineArray = this.karrynline_Sight_Nipples(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_PUSSY) {
		lineArray = this.karrynline_Sight_Pussy(lineArray);
		lineArray = this.karrynline_Sight_Pussy(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_BUTT) {
		lineArray = this.karrynline_Sight_Butt(lineArray);
		lineArray = this.karrynline_Sight_Butt(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_SIGHT_ORGASM) {
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
		lineArray = this.karrynline_Sight_Random(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_BJ) {
		lineArray = this.karrynline_enemyPoseSkill_Blowjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_PUSSYSEX) {
		lineArray = this.karrynline_enemyPoseSkill_PussySex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_HANDJOB) {
		lineArray = this.karrynline_enemyPoseSkill_Handjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_PAIZURI) {
		lineArray = this.karrynline_enemyPoseSkill_Paizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_CUNNILINGUS) {
		lineArray = this.karrynline_enemyPoseSkill_Cunnilingus(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_ANAL) {
		lineArray = this.karrynline_enemyPoseSkill_Anal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_RIMJOB) {
		lineArray = this.karrynline_enemyPoseSkill_Rimjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_POSESKILL_FOOTJOB) {
		lineArray = this.karrynline_enemyPoseSkill_Footjob(lineArray);
	}
	
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_BJ) {
		lineArray = this.enemyline_enemyPoseSkill_Blowjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_PUSSYSEX) {
		lineArray = this.enemyline_enemyPoseSkill_PussySex(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_HANDJOB) {
		lineArray = this.enemyline_enemyPoseSkill_Handjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_PAIZURI) {
		lineArray = this.enemyline_enemyPoseSkill_Paizuri(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_CUNNILINGUS) {
		lineArray = this.enemyline_enemyPoseSkill_Cunnilingus(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_ANAL) {
		lineArray = this.enemyline_enemyPoseSkill_AnalSex(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_RIMJOB) {
		lineArray = this.enemyline_enemyPoseSkill_Rimjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_POSESKILL_FOOTJOB) {
		lineArray = this.enemyline_enemyPoseSkill_Footjob(lineArray);
	}

	
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_ANAL) {
		lineArray = this.karrynline_karrynPoseSkill_AnalSex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_BJ) {
		lineArray = this.karrynline_karrynPoseSkill_Blowjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_PUSSYSEX) {
		lineArray = this.karrynline_karrynPoseSkill_PussySex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_HANDJOB) {
		lineArray = this.karrynline_karrynPoseSkill_Handjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_PAIZURI) {
		lineArray = this.karrynline_karrynPoseSkill_Paizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_RIMJOB) {
		lineArray = this.karrynline_karrynPoseSkill_Rimjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_POSESKILL_FOOTJOB) {
		lineArray = this.karrynline_karrynPoseSkill_Footjob(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_POSEINVITE_HJ) {
		lineArray = this.karrynline_karrynPoseInvite_Handjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_POSEINVITE_BJ) {
		lineArray = this.karrynline_karrynPoseInvite_Blowjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_POSEINVITE_PAIZURI) {
		lineArray = this.karrynline_karrynPoseInvite_Paizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_POSEINVITE_PUSSY) {
		lineArray = this.karrynline_karrynPoseInvite_PussySex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_POSEINVITE_ANAL) {
		lineArray = this.karrynline_karrynPoseInvite_AnalSex(lineArray);
	}
	
	
	else if(this._lineType === KARRYN_LINE_KARRYN_TAUNT) {
		lineArray = this.karrynline_karrynTaunt(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_FLAUNT) {
		lineArray = this.karrynline_karrynFlaunt(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_KARRYN_KISSING_LVLONE) {
		lineArray = this.karrynline_karrynKiss_LvlOne(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_KISSING_LVLTWO) {
		lineArray = this.karrynline_karrynKiss_LvlTwo(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_COCK_PETTING_LVLONE) {
		lineArray = this.karrynline_karrynCockPetting_LvlOne(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_COCK_STARE_LVLONE) {
		lineArray = this.karrynline_karrynCockStare_LvlOne(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_KARRYN_DOGEZA) {
		lineArray = this.karrynDogeza(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_KISSING_LVLONE) {
		lineArray = this.karrynline_enemyKissing_LvlOne(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_KISSING_LVLTWO) {
		lineArray = this.karrynline_enemyKissing_LvlTwo(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_SPANKING_LVLONE) {
		lineArray = this.karrynline_enemySpanking_LvlOne(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_BOOBS) {
		lineArray = this.karrynline_enemyPetting_Boobs(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_NIPPLES) {
		lineArray = this.karrynline_enemyPetting_Nipples(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_CLIT) {
		lineArray = this.karrynline_enemyPetting_Clit(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_PUSSY) {
		lineArray = this.karrynline_enemyPetting_Pussy(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_BUTT) {
		lineArray = this.karrynline_enemyPetting_Butt(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_ANAL) {
		lineArray = this.karrynline_enemyPetting_Anal(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_SUCK_FINGERS) {
		lineArray = this.karrynline_enemySuckFingers(lineArray);
	}
	
	
	else if(this._lineType === ENEMY_LINE_ENEMY_PETTING_BOOBS) {
		lineArray = this.enemyline_enemyPetting_Boobs(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_PETTING_NIPPLES) {
		lineArray = this.enemyline_enemyPetting_Nipples(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_PETTING_CLIT) {
		lineArray = this.enemyline_enemyPetting_Clit(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_PETTING_PUSSY) {
		lineArray = this.enemyline_enemyPetting_Pussy(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_PETTING_BUTT) {
		lineArray = this.enemyline_enemyPetting_Butt(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_PETTING_ANAL) {
		lineArray = this.enemyline_enemyPetting_Anal(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_KISSING_LVLONE) {
		lineArray = this.enemyline_enemyKissing_LvlOne(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_KISSING_LVLTWO) {
		lineArray = this.enemyline_enemyKissing_LvlTwo(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_SPANKING_LVLONE) {
		lineArray = this.enemyline_enemySpanking_LvlOne(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_KARRYN_COCK_STARE_LVLONE) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_karrynCockStare_LvlOne(lineArray);
	}
	
	
	else if(this._lineType === KARRYN_LINE_ENEMY_INSERT_PINK_ROTOR) {
		lineArray = this.karrynline_enemy_insertToy_pinkRotor(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_INSERT_PENIS_DILDO) {
		lineArray = this.karrynline_enemy_insertToy_penisDildo(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_INSERT_ANAL_BEADS) {
		lineArray = this.karrynline_enemy_insertToy_analBeads(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_PINK_ROTOR) {
		lineArray = this.karrynline_enemy_playToy_pinkRotor(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_PENIS_DILDO) {
		lineArray = this.karrynline_enemy_playToy_penisDildo(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PETTING_ANAL_BEADS) {
		lineArray = this.karrynline_enemy_playToy_analBeads(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR) {
		lineArray = this.karrynline_karryn_playToy_pinkRotor(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_PETTING_PENIS_DILDO) {
		lineArray = this.karrynline_karryn_playToy_penisDildo(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS) {
		lineArray = this.karrynline_karryn_playToy_analBeads(lineArray);
	}

	
	else if(this._lineType === KARRYN_LINE_ENEMY_JOIN_HJ) {
		lineArray = this.karrynline_enemyPoseJoin_Handjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_JOIN_BJ) {
		lineArray = this.karrynline_enemyPoseJoin_Blowjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_JOIN_ANAL) {
		lineArray = this.karrynline_enemyPoseJoin_AnalSex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_JOIN_PAIZURI) {
		lineArray = this.karrynline_enemyPoseJoin_Paizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_JOIN_PUSSY) {
		lineArray = this.karrynline_enemyPoseJoin_PussySex(lineArray);
	}
	
	else if(this._lineType === ENEMY_LINE_ENEMY_JOIN_HJ) {
		lineArray = this.enemyline_enemyPoseJoin_Handjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_JOIN_BJ) {
		lineArray = this.enemyline_enemyPoseJoin_Blowjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_JOIN_ANAL) {
		if(this._enemyJustTookAnalVirginity) enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseJoin_AnalSex(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_JOIN_PAIZURI) {
		lineArray = this.enemyline_enemyPoseJoin_Paizuri(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_JOIN_PUSSY) {
		if(this._enemyJustTookPussyVirginity) enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseJoin_PussySex(lineArray);
	}

	
	else if(this._lineType === KARRYN_LINE_KARRYN_ORGASM) {
		lineArray = this.karrynline_karrynOrgasm(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_BUKKAKE_FACE) {
		if(!this._visitor_isFan && !this._visitor_isPervert) {
			lineArray = this.karrynline_enemyEjaculates(lineArray);
			lineArray = this.karrynline_enemyBukkake_Random(lineArray);
		}
		lineArray = this.karrynline_enemyBukkake_Face(lineArray);
		lineArray = this.karrynline_enemyBukkake_Face(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_BUKKAKE_BOOBS) {
		if(!this._visitor_isFan && !this._visitor_isPervert) {
			lineArray = this.karrynline_enemyEjaculates(lineArray);
			lineArray = this.karrynline_enemyBukkake_Random(lineArray);
		}
		lineArray = this.karrynline_enemyBukkake_Boobs(lineArray);
		lineArray = this.karrynline_enemyBukkake_Boobs(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_BUKKAKE_ARMS) {
		if(!this._visitor_isFan && !this._visitor_isPervert) {
			lineArray = this.karrynline_enemyEjaculates(lineArray);
			lineArray = this.karrynline_enemyBukkake_Random(lineArray);
		}
		lineArray = this.karrynline_enemyBukkake_Arms(lineArray);
		lineArray = this.karrynline_enemyBukkake_Arms(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_BUKKAKE_LEGS) {
		lineArray = this.karrynline_enemyEjaculates(lineArray);
		lineArray = this.karrynline_enemyBukkake_Random(lineArray);
		lineArray = this.karrynline_enemyBukkake_Legs(lineArray);
		lineArray = this.karrynline_enemyBukkake_Legs(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_CUM_INTO_MUG) {
		lineArray = this.karrynline_enemyCumIntoMug(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_CUM_ONTO_FLOOR) {
		lineArray = this.karrynline_enemyEjaculates(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_BUKKAKE_BUTT) {
		lineArray = this.karrynline_enemyEjaculates(lineArray);
		lineArray = this.karrynline_enemyBukkake_Random(lineArray);
		lineArray = this.karrynline_enemyBukkake_Butt(lineArray);
		lineArray = this.karrynline_enemyBukkake_Butt(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_SWALLOW) {
		lineArray = this.karrynline_karrynSwallows(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_PUSSYCREAMPIE) {
		lineArray = this.karrynline_karrynPussyCreampie(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_ANALCREAMPIE) {
		lineArray = this.karrynline_karrynAnalCreampie(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_CUM_ONTO_DESK) {
		lineArray = this.karrynline_enemyCumOntoDesk(lineArray);
	}
	
	
	else if(this._lineType === ENEMY_LINE_ENEMY_BUKKAKE_FACE) {
		lineArray = this.enemyline_enemyEjaculates(lineArray);
		lineArray = this.enemyline_enemyBukkake_Random(lineArray);
		lineArray = this.enemyline_enemyBukkake_Face(lineArray);
		lineArray = this.enemyline_enemyBukkake_Face(lineArray);
		
		if($gameTroop._lastEnemySlotToCum === BOOBS_ID) {
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
		}
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_BUKKAKE_BOOBS) {
		lineArray = this.enemyline_enemyEjaculates(lineArray);
		lineArray = this.enemyline_enemyBukkake_Random(lineArray);
		lineArray = this.enemyline_enemyBukkake_Boobs(lineArray);
		lineArray = this.enemyline_enemyBukkake_Boobs(lineArray);
		
		if($gameTroop._lastEnemySlotToCum === BOOBS_ID) {
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
		}
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_BUKKAKE_ARMS) {
		lineArray = this.enemyline_enemyEjaculates(lineArray);
		lineArray = this.enemyline_enemyBukkake_Random(lineArray);
		lineArray = this.enemyline_enemyBukkake_Arms(lineArray);
		lineArray = this.enemyline_enemyBukkake_Arms(lineArray);
		
		if($gameTroop._lastEnemySlotToCum === BOOBS_ID) {
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
		}
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_BUKKAKE_BUTT) {
		lineArray = this.enemyline_enemyEjaculates(lineArray);
		lineArray = this.enemyline_enemyBukkake_Random(lineArray);
		lineArray = this.enemyline_enemyBukkake_Butt(lineArray);
		lineArray = this.enemyline_enemyBukkake_Butt(lineArray);
		
		if($gameTroop._lastEnemySlotToCum === BOOBS_ID) {
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
		}
	}
	
	else if(this._lineType === ENEMY_LINE_ENEMY_BUKKAKE_LEGS) {
		lineArray = this.enemyline_enemyEjaculates(lineArray);
		lineArray = this.enemyline_enemyBukkake_Random(lineArray);
		lineArray = this.enemyline_enemyBukkake_Legs(lineArray);
		lineArray = this.enemyline_enemyBukkake_Legs(lineArray);
		
		if($gameTroop._lastEnemySlotToCum === BOOBS_ID) {
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
		}
	}
	
	else if(this._lineType === ENEMY_LINE_ENEMY_CUM_INTO_MUG) {
		lineArray = this.enemyline_enemyCumIntoMug(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_CUM_ONTO_DESK) {
		lineArray = this.enemyline_enemyCumOntoDesk(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_CUM_ONTO_FLOOR) {
		lineArray = this.enemyline_enemyEjaculates(lineArray);
	}
	
	else if(this._lineType === ENEMY_LINE_ENEMY_SWALLOW) {
		lineArray = this.enemyline_karrynSwallows(lineArray);
		
		if($gameTroop._lastEnemySlotToCum === BOOBS_ID) {
			lineArray = this.enemyline_enemyBukkake_Paizuri(lineArray);
		}
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_PUSSYCREAMPIE) {
		lineArray = this.enemyline_karrynPussyCreampie(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_ANALCREAMPIE) {
		lineArray = this.enemyline_karrynAnalCreampie(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_START_THUG_GANGBANG) {
		lineArray = this.karrynline_enemyPoseStart_PussySex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_GUARD_GANGBANG) {
		lineArray = this.karrynline_enemyPoseStart_PussySex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_LIZARDMAN_COWGIRL) {
		lineArray = this.karrynline_enemyPoseStart_PussySex(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_START_SLIME_ANAL) {
		lineArray = this.karrynline_enemyPoseStart_AnalSex(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_REVERSE_COWGIRL) {
		lineArray = this.karrynline_enemyPoseStart_AnalSex(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_ENEMY_START_GOBLIN_CUNNI) {
		lineArray = this.karrynline_enemyPoseStart_Cunnilingus(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_HJ_STANDING) {
		lineArray = this.karrynline_enemyPoseStart_Handjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_BJ_KNEELING) {
		lineArray = this.karrynline_enemyPoseStart_Blowjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_KICKCOUNTER) {
		lineArray = this.karrynline_enemyPoseStart_PussySex(lineArray);
		if(!this._enemyJustTookPussyVirginity) {
			lineArray = this.karrynline_enemyPoseStart_KickCounter(lineArray);
			lineArray = this.karrynline_enemyPoseStart_KickCounter(lineArray);
		}
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_RIMJOB) {
		lineArray = this.karrynline_enemyPoseStart_Rimjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_TF_LAYING) {
		lineArray = this.karrynline_enemyPoseStart_Paizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_ORC_PAIZURI) {
		lineArray = this.karrynline_enemyPoseStart_Paizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_ENEMY_START_FOOTJOB) {
		lineArray = this.karrynline_enemyPoseStart_Footjob(lineArray);
	}

	
	else if(this._lineType === ENEMY_LINE_START_THUG_GANGBANG) {
		enemyLineAlwaysShow = true;
		if(this._enemyJustTookPussyVirginity)
			lineArray = this.enemyline_enemyPoseJoin_PussySex(lineArray);
		else
			lineArray = this.enemyline_enemyPoseStart_ThugGangbang(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_START_KICKCOUNTER) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_KickCounter(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_START_GUARD_GANGBANG) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_GuardGangbang(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_START_HJ_STANDING) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_HandjobStanding(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_START_BJ_KNEELING) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_BlowjobKneeling(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_START_TF_LAYING) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_PaizuriLaying(lineArray);
	}
	
	else if(this._lineType === ENEMY_LINE_START_ORC_PAIZURI) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_OrcPaizuri(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_START_REVERSE_COWGIRL) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_ReverseCowgirl(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_ENEMY_START_LIZARDMAN_COWGIRL) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_LizardmanCowgirl(lineArray);
	}
	
	else if(this._lineType === ENEMY_LINE_START_GOBLIN_CUNNI) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_GoblinCunnilingus(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_START_RIMJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_Rimjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_START_FOOTJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_enemyPoseStart_Footjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_START_SLIME_ANAL) {
		lineArray = this.enemyline_enemyPoseStart_SlimeAnal(lineArray);
	}

	
	else if(this._lineType === KARRYN_LINE_KARRYN_START_HJ_STANDING) {
		lineArray = this.karrynline_karrynPoseStart_StandingHandjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_START_BJ_KNEELING) {
		lineArray = this.karrynline_karrynPoseStart_KneelingBlowjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_START_RIMJOB) {
		lineArray = this.karrynline_karrynPoseStart_Rimjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_START_TF_LAYING) {
		lineArray = this.karrynline_karrynPoseStart_LayingPaizuri(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_START_FOOTJOB) {
		lineArray = this.karrynline_karrynPoseStart_Footjob(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_START_REVERSE_COWGIRL) {
		lineArray = this.karrynline_karrynPoseStart_ReverseCowgirl(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_KARRYN_START_KARRYN_COWGIRL) {
		lineArray = this.karrynline_karrynPoseStart_KarrynCowgirl(lineArray);
	}

	
	else if(this._lineType === LINE_KARRYN_MAS_TOUCH_BOOBS) {
		lineArray = this.karrynMasturbate_touchBoobs(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_TOUCH_NIPPLES) {
		lineArray = this.karrynMasturbate_touchNipples(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_TOUCH_CLIT) {
		lineArray = this.karrynMasturbate_touchClit(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_TOUCH_PUSSY) {
		lineArray = this.karrynMasturbate_touchPussy(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_TOUCH_ANUS) {
		lineArray = this.karrynMasturbate_touchAnus(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_FINGER_PUSSY) {
		lineArray = this.karrynMasturbate_fingerPussy(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_FINGER_ANUS) {
		lineArray = this.karrynMasturbate_fingerAnus(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_SUCK_NIPPLES) {
		lineArray = this.karrynMasturbate_suckNipples(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_SUCK_FINGERS) {
		lineArray = this.karrynMasturbate_suckFingers(lineArray);
	}
	
	else if(this._lineType === LINE_KARRYN_MAS_LICK_HALBERD) {
		lineArray = this.karrynMasturbate_lickHalberd(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_TITTYFUCK_HALBERD) {
		lineArray = this.karrynMasturbate_tittyFuckHalberd(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_CLIT_RUB_HALBERD) {
		lineArray = this.karrynMasturbate_clitRubHalberd(lineArray);
	}
	else if(this._lineType === LINE_KARRYN_MAS_PUSSY_RUB_HALBERD) {
		lineArray = this.karrynMasturbate_pussyRubHalberd(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_DOWN_STAMINA) {
		lineArray = this.karrynline_downStamina(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DOWN_FALLDOWN) {
		lineArray = this.karrynline_downFalldown(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_INVASION_BATTLE_START) {
		lineArray = this.karrynline_invasion_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DEFEAT_LV1_START) {
		lineArray = this.karrynline_defeatLv1_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DEFEAT_LV2_START) {
		lineArray = this.karrynline_defeatLv2_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DEFEAT_LV3_START) {
		lineArray = this.karrynline_defeatLv3_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DEFEAT_LV4_START) {
		lineArray = this.karrynline_defeatLv4_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DEFEAT_LV5_START) {
		lineArray = this.karrynline_defeatLv5_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_DEFEAT_GUARD_START) {
		lineArray = this.karrynline_defeatGuard_battleStart(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_WAITRESS_SERVE_START) {
		lineArray = this.karrynline_waitressServe_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_WAITRESS_SERVE_TAKE_ORDER) {
		lineArray = this.karrynline_waitressServe_takeOrder(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_WAITRESS_SERVE_ACCEPT_DRINK) {
		lineArray = this.karrynline_waitressServe_acceptDrink(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_WAITRESS_SERVE_REJECT_DRINK) {
		lineArray = this.karrynline_waitressServe_rejectDrink(lineArray);
	}
	
	else if(this._lineType === KARRYN_LINE_WAITRESS_SERVE_FLASH) {
		lineArray = this.karrynline_waitressServe_karrynFlash(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_WAITRESS_TABLE_DRINK) {
		lineArray = this.karrynline_waitressTable_karrynDrink(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_WAITRESS_TABLE_START) {
		lineArray = this.karrynline_waitressTable_start(lineArray);
	}
	
	
	
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_START) {
		lineArray = this.karrynline_receptionist_battleStart(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_SUMMON_VISITOR_NORMAL) {
		lineArray = this.karrynline_receptionist_summonVisitorNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_SUMMON_VISITOR_SEXUAL) {
		lineArray = this.karrynline_receptionist_summonVisitorSexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_GREET_VISITOR_NORMAL) {
		lineArray = this.karrynline_receptionist_greetVisitorNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_GREET_VISITOR_SEXUAL) {
		lineArray = this.karrynline_receptionist_greetVisitorSexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_GIVE_PAPER_NORMAL) {
		lineArray = this.karrynline_receptionist_givePaperNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_GIVE_PAPER_SEXUAL) {
		lineArray = this.karrynline_receptionist_givePaperSexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_RECEIVE_PAPER_NORMAL) {
		lineArray = this.karrynline_receptionist_receivePaperNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_RECEIVE_PAPER_SEXUAL) {
		lineArray = this.karrynline_receptionist_receivePaperSexual(lineArray);
	}
	
	
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_ASSIGN_ROOM_NORMAL) {
		lineArray = this.karrynline_receptionist_assignRoomNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_ASSIGN_ROOM_SEXUAL) {
		lineArray = this.karrynline_receptionist_assignRoomSexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_CHECK_ROOM_NORMAL) {
		lineArray = this.karrynline_receptionist_checkRoomNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_CHECK_ROOM_SEXUAL) {
		lineArray = this.karrynline_receptionist_checkRoomSexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_NORMAL_APOLOGY_NORMAL) {
		lineArray = this.karrynline_receptionist_normalApologyNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_NORMAL_APOLOGY_SEXUAL) {
		lineArray = this.karrynline_receptionist_normalApologySexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_SHOO_AWAY_NORMAL) {
		lineArray = this.karrynline_receptionist_shooAwayNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_SHOO_AWAY_SEXUAL) {
		lineArray = this.karrynline_receptionist_shooAwaySexual(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_KICK_AWAY) {
		lineArray = this.karrynline_receptionist_kickAway(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_REJECT_REQUEST_NORMAL) {
		lineArray = this.karrynline_receptionist_rejectRequestNormal(lineArray);
	}
	else if(this._lineType === KARRYN_LINE_RECEPTIONIST_REJECT_REQUEST_SEXUAL) {
		lineArray = this.karrynline_receptionist_rejectRequestSexual(lineArray);
	}
	
	
	
	else if(this._lineType === ENEMY_LINE_FAN_HANDSHAKE_FINISHED) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_fan_handshake_finished(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_FINISHED) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_finished(lineArray);
	}
	
	
	else if(this._lineType === ENEMY_LINE_FAN_GREET_HANDSHAKE) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_fan_greet_handshake(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_GREET_BOOBSHAKE) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_greet_boobshake(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_GREET_KISS) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_greet_kiss(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_GREET_HANDJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_greet_handjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_GREET_BLOWJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_greet_blowjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_FAN_GREET_BOOBSHAKE) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_fan_greet_boobshake(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_FAN_GREET_KISS) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_fan_greet_kiss(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_FAN_GREET_HANDJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_fan_greet_handjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_FAN_GREET_BLOWJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_fan_greet_blowjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_SECOND_BOOBSHAKE) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_second_boobshake(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_SECOND_KISS) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_second_kiss(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_SECOND_HANDJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_second_handjob(lineArray);
	}
	else if(this._lineType === ENEMY_LINE_PERV_SECOND_BLOWJOB) {
		enemyLineAlwaysShow = true;
		lineArray = this.enemyline_perv_second_blowjob(lineArray);
	}
	
	
	else if(this._lineType === LINE_TESTING) {
		lineArray = ["testing"];
	}
	
	if(lineArray.length === 0) return false;

	let selectedRandomLine = Math.randomInt(lineArray.length);
	let lineId = lineArray[selectedRandomLine][LINEARRAY_LINE_ID];
	
	console.log('rem_lines lineId: ' + lineId);

	if(!$remLines[lineId]) return false;
	
	if(lineArray[selectedRandomLine][LINEARRAY_IS_MALE]) {
		//if($gameParty.isInGloryBattle)
		//	return false;
		
		if(!enemyLineAlwaysShow) {
			let maleLineShowChance = $gameTemp.getMaleBattleDialogueChance();
			if($gameParty.isInGloryBattle) {
				if($gameParty._gloryReputation <= 5)
					maleLineShowChance = 0;
				else if($gameParty._gloryReputation <= 15) 
					maleLineShowChance *= ($gameParty._gloryReputation - 5) * 0.1;
			}
			if(Math.randomInt(100) < maleLineShowChance) 
				return false;
		}
	}
	
	
	

	return lineArray[selectedRandomLine];
};


///////
//////////////
// Lines
///////////
////////

////////
// Talk Lines

Rem_Lines.prototype.enemyline_Talk_Random = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isVirgin = !actor._firstPussySexDate;
	let publishedVirginStatus = actor.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS);
	let publishedSexStatus = actor.hasEdict(EDICT_PUBLISH_SEX_LEVELS) || actor.hasEdict(EDICT_PUBLISH_SENSITIVITIES);
	let isKnownPussyVirgin = isVirgin && publishedVirginStatus;
	let isKnownNonPussyVirgin = !isVirgin && publishedVirginStatus;
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_talk_random_exp3_1', true, false]);
			lineArray.push(['guard_talk_random_exp3_2', true, false]);
			lineArray.push(['guard_talk_random_exp3_3', true, false]);
			lineArray.push(['guard_talk_random_exp3_4', true, false]);
			lineArray.push(['guard_talk_random_exp3_5', true, false]);
			lineArray.push(['guard_talk_random_exp3_6', true, false]);
			lineArray.push(['guard_talk_random_exp3_7', true, false]);
			lineArray.push(['guard_talk_random_exp3_8', true, false]);
			lineArray.push(['guard_talk_random_exp3_9', true, false]);
			lineArray.push(['guard_talk_random_exp3_10', true, false]);
			lineArray.push(['guard_talk_random_exp3_11', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_talk_random_exp2_1', true, false]);
			lineArray.push(['guard_talk_random_exp2_2', true, false]);
			lineArray.push(['guard_talk_random_exp2_3', true, false]);
			lineArray.push(['guard_talk_random_exp2_4', true, false]);
			lineArray.push(['guard_talk_random_exp2_5', true, false]);
			lineArray.push(['guard_talk_random_exp2_6', true, false]);
			lineArray.push(['guard_talk_random_exp2_7', true, false]);
			lineArray.push(['guard_talk_random_exp2_8', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['guard_talk_random_exp1_1', true, false]);	
			lineArray.push(['guard_talk_random_exp1_2', true, false]);
			lineArray.push(['guard_talk_random_exp1_3', true, false]);
			lineArray.push(['guard_talk_random_exp1_4', true, false]);
			lineArray.push(['guard_talk_random_exp1_5', true, false]);
			lineArray.push(['guard_talk_random_exp1_6', true, false]);
			lineArray.push(['guard_talk_random_exp1_7', true, false]);
		}
		else {
			lineArray.push(['guard_talk_random_exp0_1', true, false]);
			lineArray.push(['guard_talk_random_exp0_2', true, false]);
			lineArray.push(['guard_talk_random_exp0_3', true, false]);
			lineArray.push(['guard_talk_random_exp0_4', true, false]);
			lineArray.push(['guard_talk_random_exp0_5', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_HOMELESS_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['homeless_talk_random_exp3_1', true, false]);
			if(actor.isWet) lineArray.push(['homeless_talk_random_exp3_2', true, false]);
			lineArray.push(['homeless_talk_random_exp3_3', true, false]);
			lineArray.push(['homeless_talk_random_exp3_4', true, false]);
			lineArray.push(['homeless_talk_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['homeless_talk_random_exp2_1', true, false]);
			lineArray.push(['homeless_talk_random_exp2_2', true, false]);
			lineArray.push(['homeless_talk_random_exp2_3', true, false]);
			lineArray.push(['homeless_talk_random_exp2_4', true, false]);
			lineArray.push(['homeless_talk_random_exp2_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['homeless_talk_random_exp1_1', true, false]);	
			lineArray.push(['homeless_talk_random_exp1_2', true, false]);
			if(isKnownNonPussyVirgin) lineArray.push(['homeless_talk_random_exp1_3', true, false]);
			lineArray.push(['homeless_talk_random_exp1_4', true, false]);
			lineArray.push(['homeless_talk_random_exp1_5', true, false]);
		}
		else {
			lineArray.push(['homeless_talk_random_exp0_1', true, false]);
			lineArray.push(['homeless_talk_random_exp0_2', true, false]);
			lineArray.push(['homeless_talk_random_exp0_3', true, false]);
			if(isKnownPussyVirgin) lineArray.push(['homeless_talk_random_exp0_4', true, false]);
			lineArray.push(['homeless_talk_random_exp0_5', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_ORC_TAG) {
		if(isKnownPussyVirgin) {
			lineArray.push(['orc_talk_random_exp0_1', true, false]);
			lineArray.push(['orc_talk_random_exp0_2', true, false]);
			lineArray.push(['orc_talk_random_exp0_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['orc_talk_random_exp3_1', true, false]);
			lineArray.push(['orc_talk_random_exp3_2', true, false]);
			lineArray.push(['orc_talk_random_exp3_3', true, false]);
			lineArray.push(['orc_talk_random_exp3_4', true, false]);
			lineArray.push(['orc_talk_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['orc_talk_random_exp2_1', true, false]);
			lineArray.push(['orc_talk_random_exp2_2', true, false]);
			lineArray.push(['orc_talk_random_exp2_3', true, false]);
			lineArray.push(['orc_talk_random_exp2_4', true, false]);
			lineArray.push(['orc_talk_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['orc_talk_random_exp1_1', true, false]);	
			lineArray.push(['orc_talk_random_exp1_2', true, false]);
			lineArray.push(['orc_talk_random_exp1_3', true, false]);
			lineArray.push(['orc_talk_random_exp1_4', true, false]);
			lineArray.push(['orc_talk_random_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_LIZARDMAN_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['lizardman_talk_random_exp3_1', true, false]);
			lineArray.push(['lizardman_talk_random_exp3_2', true, false]);
			lineArray.push(['lizardman_talk_random_exp3_3', true, false]);
			lineArray.push(['lizardman_talk_random_exp3_4', true, false]);
			lineArray.push(['lizardman_talk_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['lizardman_talk_random_exp2_1', true, false]);
			lineArray.push(['lizardman_talk_random_exp2_2', true, false]);
			lineArray.push(['lizardman_talk_random_exp2_3', true, false]);
			lineArray.push(['lizardman_talk_random_exp2_4', true, false]);
			lineArray.push(['lizardman_talk_random_exp2_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['lizardman_talk_random_exp1_1', true, false]);	
			if(isKnownNonPussyVirgin) lineArray.push(['lizardman_talk_random_exp1_2', true, false]);
			lineArray.push(['lizardman_talk_random_exp1_3', true, false]);
			lineArray.push(['lizardman_talk_random_exp1_4', true, false]);
			lineArray.push(['lizardman_talk_random_exp1_5', true, false]);
		}
		else {
			lineArray.push(['lizardman_talk_random_exp0_1', true, false]);
			lineArray.push(['lizardman_talk_random_exp0_2', true, false]);
			lineArray.push(['lizardman_talk_random_exp0_3', true, false]);
			lineArray.push(['lizardman_talk_random_exp0_4', true, false]);
			lineArray.push(['lizardman_talk_random_exp0_5', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_random_exp3_1', true, false]);
			lineArray.push(['prisoner_talk_random_exp3_2', true, false]);
			lineArray.push(['prisoner_talk_random_exp3_3', true, false]);
			lineArray.push(['prisoner_talk_random_exp3_4', true, false]);
			lineArray.push(['prisoner_talk_random_exp3_5', true, false]);
			lineArray.push(['prisoner_talk_random_exp3_6', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_random_exp2_1', true, false]);
			lineArray.push(['prisoner_talk_random_exp2_2', true, false]);
			lineArray.push(['prisoner_talk_random_exp2_3', true, false]);
			lineArray.push(['prisoner_talk_random_exp2_4', true, false]);
			lineArray.push(['prisoner_talk_random_exp2_5', true, false]);
			lineArray.push(['prisoner_talk_random_exp2_6', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_random_exp1_1', true, false]);
			lineArray.push(['prisoner_talk_random_exp1_2', true, false]);
			lineArray.push(['prisoner_talk_random_exp1_3', true, false]);
			lineArray.push(['prisoner_talk_random_exp1_4', true, false]);
			lineArray.push(['prisoner_talk_random_exp1_5', true, false]);
			lineArray.push(['prisoner_talk_random_exp1_6', true, false]);
		}
		else {
			lineArray.push(['prisoner_talk_random_exp0_1', true, false]);
			lineArray.push(['prisoner_talk_random_exp0_2', true, false]);
			lineArray.push(['prisoner_talk_random_exp0_3', true, false]);
			lineArray.push(['prisoner_talk_random_exp0_4', true, false]);
			lineArray.push(['prisoner_talk_random_exp0_5', true, false]);
			lineArray.push(['prisoner_talk_random_exp0_6', true, false]);
		}		
	}
	 
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_Talk_Mouth = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let publishedVirginStatus = actor.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS);
	let isBlowjobVirgin = !actor._firstBlowjobDate;
	let isKnownBlowjobVirgin = isBlowjobVirgin && publishedVirginStatus;
	let publishedSexStatus = actor.hasEdict(EDICT_PUBLISH_SEX_LEVELS) || actor.hasEdict(EDICT_PUBLISH_SENSITIVITIES);
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(isKnownBlowjobVirgin) {
			lineArray.push(['thug_talk_mouth_exp0_1', true, false]);
			lineArray.push(['thug_talk_mouth_exp0_2', true, false]);
			lineArray.push(['thug_talk_mouth_exp0_3', true, false]);
			lineArray.push(['thug_talk_mouth_exp0_4', true, false]);
			lineArray.push(['thug_talk_mouth_exp0_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_mouth_exp3_1', true, false]);
			lineArray.push(['thug_talk_mouth_exp3_2', true, false]);
			lineArray.push(['thug_talk_mouth_exp3_3', true, false]);
			lineArray.push(['thug_talk_mouth_exp3_4', true, false]);
			lineArray.push(['thug_talk_mouth_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_mouth_exp2_1', true, false]);
			lineArray.push(['thug_talk_mouth_exp2_2', true, false]);
			lineArray.push(['thug_talk_mouth_exp2_3', true, false]);
			lineArray.push(['thug_talk_mouth_exp2_4', true, false]);
			lineArray.push(['thug_talk_mouth_exp2_5', true, false]);
		}	
		else {
			lineArray.push(['thug_talk_mouth_exp1_1', true, false]);
			lineArray.push(['thug_talk_mouth_exp1_2', true, false]);
			lineArray.push(['thug_talk_mouth_exp1_3', true, false]);
			lineArray.push(['thug_talk_mouth_exp1_4', true, false]);
			lineArray.push(['thug_talk_mouth_exp1_5', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_NERD_TAG) {
		if(isKnownBlowjobVirgin) {
			lineArray.push(['nerd_talk_mouth_exp0_1', true, false]);
			lineArray.push(['nerd_talk_mouth_exp0_2', true, false]);
			lineArray.push(['nerd_talk_mouth_exp0_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['nerd_talk_mouth_exp3_1', true, false]);
			lineArray.push(['nerd_talk_mouth_exp3_2', true, false]);
			lineArray.push(['nerd_talk_mouth_exp3_3', true, false]);
			lineArray.push(['nerd_talk_mouth_exp3_4', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['nerd_talk_mouth_exp2_1', true, false]);
			lineArray.push(['nerd_talk_mouth_exp2_2', true, false]);
			lineArray.push(['nerd_talk_mouth_exp2_3', true, false]);
		}	
		else {
			lineArray.push(['nerd_talk_mouth_exp1_1', true, false]);
			lineArray.push(['nerd_talk_mouth_exp1_2', true, false]);	
			lineArray.push(['nerd_talk_mouth_exp1_3', true, false]);				
		}
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(isKnownBlowjobVirgin) {
			lineArray.push(['rogue_talk_mouth_exp0_1', true, false]);
			lineArray.push(['rogue_talk_mouth_exp0_2', true, false]);
			lineArray.push(['rogue_talk_mouth_exp0_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['rogue_talk_mouth_exp3_1', true, false]);
			lineArray.push(['rogue_talk_mouth_exp3_2', true, false]);
			lineArray.push(['rogue_talk_mouth_exp3_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['rogue_talk_mouth_exp2_1', true, false]);
			lineArray.push(['rogue_talk_mouth_exp2_2', true, false]);
			lineArray.push(['rogue_talk_mouth_exp2_3', true, false]);
		}	
		else if(publishedSexStatus) {
			lineArray.push(['rogue_talk_mouth_exp1_1', true, false]);	
			lineArray.push(['rogue_talk_mouth_exp1_2', true, false]);	
			lineArray.push(['rogue_talk_mouth_exp1_3', true, false]);				
		}
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(isKnownBlowjobVirgin) {
			lineArray.push(['prisoner_talk_mouth_exp0_1', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp0_2', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp0_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_mouth_exp3_1', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp3_2', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp3_3', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp3_4', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp3_5', true, false]);
		}	
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_mouth_exp2_1', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp2_2', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp2_3', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp2_4', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp2_5', true, false]);
		}	
		else {
			lineArray.push(['prisoner_talk_mouth_exp1_1', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp1_2', true, false]);
			lineArray.push(['prisoner_talk_mouth_exp1_3', true, false]);
		}
	}
	 
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_Talk_Boobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let publishedSexStatus = actor.hasEdict(EDICT_PUBLISH_SEX_LEVELS) || actor.hasEdict(EDICT_PUBLISH_SENSITIVITIES);
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_boobs_exp3_1', true, false]);
			lineArray.push(['thug_talk_boobs_exp3_2', true, false]);
			lineArray.push(['thug_talk_boobs_exp3_3', true, false]);
			lineArray.push(['thug_talk_boobs_exp3_4', true, false]);
			lineArray.push(['thug_talk_boobs_exp3_5', true, false]);
		}	
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			if(!actor.canGetNipplesSeen()) lineArray.push(['thug_talk_boobs_exp2_1', true, false]);
			lineArray.push(['thug_talk_boobs_exp2_2', true, false]);
			lineArray.push(['thug_talk_boobs_exp2_3', true, false]);
		}
		else {
			lineArray.push(['thug_talk_boobs_exp1_1', true, false]);
			lineArray.push(['thug_talk_boobs_exp1_2', true, false]);	
			lineArray.push(['thug_talk_boobs_exp1_3', true, false]);				
		}			
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_NERD_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['nerd_talk_boobs_exp3_1', true, false]);
			lineArray.push(['nerd_talk_boobs_exp3_2', true, false]);
			lineArray.push(['nerd_talk_boobs_exp3_3', true, false]);
			lineArray.push(['nerd_talk_boobs_exp3_4', true, false]);
			lineArray.push(['nerd_talk_boobs_exp3_5', true, false]);
		}	
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['nerd_talk_boobs_exp2_1', true, false]);
			lineArray.push(['nerd_talk_boobs_exp2_2', true, false]);
			lineArray.push(['nerd_talk_boobs_exp2_3', true, false]);
			lineArray.push(['nerd_talk_boobs_exp2_4', true, false]);
			lineArray.push(['nerd_talk_boobs_exp2_5', true, false]);
		}
		else {
			lineArray.push(['nerd_talk_boobs_exp1_1', true, false]);
			lineArray.push(['nerd_talk_boobs_exp1_2', true, false]);
			lineArray.push(['nerd_talk_boobs_exp1_3', true, false]);
			lineArray.push(['nerd_talk_boobs_exp1_4', true, false]);
			lineArray.push(['nerd_talk_boobs_exp1_5', true, false]);				
		}
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_boobs_exp3_1', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp3_2', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp3_3', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp3_4', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp3_5', true, false]);
		}	
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_boobs_exp2_1', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp2_2', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp2_3', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp2_4', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_talk_boobs_exp1_1', true, false]);
			lineArray.push(['prisoner_talk_boobs_exp1_2', true, false]);	
			lineArray.push(['prisoner_talk_boobs_exp1_3', true, false]);				
		}
	}
	 
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_Talk_Pussy = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isVirgin = !actor._firstPussySexDate;
	let publishedVirginStatus = actor.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS);
	let isKnownPussyVirgin = isVirgin && publishedVirginStatus;
	let publishedSexStatus = actor.hasEdict(EDICT_PUBLISH_SEX_LEVELS) || actor.hasEdict(EDICT_PUBLISH_SENSITIVITIES);
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(isKnownPussyVirgin) {
			lineArray.push(['thug_talk_pussy_exp0_1', true, false]);
			lineArray.push(['thug_talk_pussy_exp0_2', true, false]);
			lineArray.push(['thug_talk_pussy_exp0_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_pussy_exp3_1', true, false]);
			lineArray.push(['thug_talk_pussy_exp3_2', true, false]);
			lineArray.push(['thug_talk_pussy_exp3_3', true, false]);
			lineArray.push(['thug_talk_pussy_exp3_4', true, false]);
			lineArray.push(['thug_talk_pussy_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_pussy_exp2_1', true, false]);
			lineArray.push(['thug_talk_pussy_exp2_2', true, false]);
			lineArray.push(['thug_talk_pussy_exp2_3', true, false]);
			lineArray.push(['thug_talk_pussy_exp2_4', true, false]);
			lineArray.push(['thug_talk_pussy_exp2_5', true, false]);
		}	
		else {
			lineArray.push(['thug_talk_pussy_exp1_1', true, false]);
			lineArray.push(['thug_talk_pussy_exp1_2', true, false]);
			lineArray.push(['thug_talk_pussy_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(isKnownPussyVirgin) {
			lineArray.push(['goblin_talk_pussy_exp0_1', true, false]);
			lineArray.push(['goblin_talk_pussy_exp0_2', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['goblin_talk_pussy_exp3_1', true, false]);
			lineArray.push(['goblin_talk_pussy_exp3_2', true, false]);
			lineArray.push(['goblin_talk_pussy_exp3_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['goblin_talk_pussy_exp2_1', true, false]);
			lineArray.push(['goblin_talk_pussy_exp2_2', true, false]);
			lineArray.push(['goblin_talk_pussy_exp2_3', true, false]);
		}	
		else {
			lineArray.push(['goblin_talk_pussy_exp1_1', true, false]);
			lineArray.push(['goblin_talk_pussy_exp1_2', true, false]);
			lineArray.push(['goblin_talk_pussy_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(isKnownPussyVirgin) {
			lineArray.push(['prisoner_talk_pussy_exp0_1', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp0_2', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp0_3', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp0_4', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_pussy_exp3_1', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp3_2', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp3_3', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp3_4', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_pussy_exp2_1', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp2_2', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp2_3', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp2_4', true, false]);
		}	
		else {
			lineArray.push(['prisoner_talk_pussy_exp1_1', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp1_2', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp1_3', true, false]);
			lineArray.push(['prisoner_talk_pussy_exp1_4', true, false]);
		}	
	}
	 
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_Talk_Butt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isAnalVirgin = !actor._firstAnalSexDate;
	let publishedVirginStatus = actor.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS);
	let isKnownAnalVirgin = isAnalVirgin && publishedVirginStatus;
	let publishedSexStatus = actor.hasEdict(EDICT_PUBLISH_SEX_LEVELS) || actor.hasEdict(EDICT_PUBLISH_SENSITIVITIES);

	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_butt_exp3_1', true, false]);
			lineArray.push(['thug_talk_butt_exp3_2', true, false]);
			lineArray.push(['thug_talk_butt_exp3_3', true, false]);
			lineArray.push(['thug_talk_butt_exp3_4', true, false]);
			lineArray.push(['thug_talk_butt_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['thug_talk_butt_exp2_1', true, false]);
			lineArray.push(['thug_talk_butt_exp2_2', true, false]);
			lineArray.push(['thug_talk_butt_exp2_3', true, false]);
		}
		else {
			lineArray.push(['thug_talk_butt_exp1_1', true, false]);
			lineArray.push(['thug_talk_butt_exp1_2', true, false]);
			lineArray.push(['thug_talk_butt_exp1_3', true, false]);
		}			
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus)  {
			lineArray.push(['goblin_talk_butt_exp3_1', true, false]);
			lineArray.push(['goblin_talk_butt_exp3_2', true, false]);
			lineArray.push(['goblin_talk_butt_exp3_3', true, false]);
			lineArray.push(['goblin_talk_butt_exp3_4', true, false]);
			lineArray.push(['goblin_talk_butt_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus)  {
			lineArray.push(['goblin_talk_butt_exp2_1', true, false]);
			lineArray.push(['goblin_talk_butt_exp2_2', true, false]);
			lineArray.push(['goblin_talk_butt_exp2_3', true, false]);
		}
		else {
			lineArray.push(['goblin_talk_butt_exp1_1', true, false]);
			lineArray.push(['goblin_talk_butt_exp1_2', true, false]);
			lineArray.push(['goblin_talk_butt_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus && !isAnalVirgin) {
			lineArray.push(['rogue_talk_butt_exp3_1', true, false]);
			lineArray.push(['rogue_talk_butt_exp3_2', true, false]);
			lineArray.push(['rogue_talk_butt_exp3_3', true, false]);
			lineArray.push(['rogue_talk_butt_exp3_4', true, false]);
			lineArray.push(['rogue_talk_butt_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus && !isAnalVirgin) {
			lineArray.push(['rogue_talk_butt_exp2_1', true, false]);
			lineArray.push(['rogue_talk_butt_exp2_2', true, false]);
			lineArray.push(['rogue_talk_butt_exp2_3', true, false]);
			lineArray.push(['rogue_talk_butt_exp2_4', true, false]);
			lineArray.push(['rogue_talk_butt_exp2_5', true, false]);
		}
		else {
			lineArray.push(['rogue_talk_butt_exp1_1', true, false]);
			lineArray.push(['rogue_talk_butt_exp1_2', true, false]);
			lineArray.push(['rogue_talk_butt_exp1_3', true, false]);
			lineArray.push(['rogue_talk_butt_exp1_4', true, false]);
			lineArray.push(['rogue_talk_butt_exp1_5', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_butt_exp3_1', true, false]);
			lineArray.push(['prisoner_talk_butt_exp3_2', true, false]);
			lineArray.push(['prisoner_talk_butt_exp3_3', true, false]);
			lineArray.push(['prisoner_talk_butt_exp3_4', true, false]);
			lineArray.push(['prisoner_talk_butt_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && publishedSexStatus) {
			lineArray.push(['prisoner_talk_butt_exp2_1', true, false]);
			lineArray.push(['prisoner_talk_butt_exp2_2', true, false]);
			lineArray.push(['prisoner_talk_butt_exp2_3', true, false]);
			lineArray.push(['prisoner_talk_butt_exp2_4', true, false]);
		}
		else {
			lineArray.push(['prisoner_talk_butt_exp1_1', true, false]);
			lineArray.push(['prisoner_talk_butt_exp1_2', true, false]);
			lineArray.push(['prisoner_talk_butt_exp1_3', true, false]);
			lineArray.push(['prisoner_talk_butt_exp1_4', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_Talk_Cock = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isVirgin = !actor._firstPussySexDate;
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_talk_cock_exp3_1', true, false]);
			lineArray.push(['thug_talk_cock_exp3_2', true, false]);
			lineArray.push(['thug_talk_cock_exp3_3', true, false]);
			lineArray.push(['thug_talk_cock_exp3_4', true, false]);
			lineArray.push(['thug_talk_cock_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_talk_cock_exp2_1', true, false]);
			lineArray.push(['thug_talk_cock_exp2_2', true, false]);
			lineArray.push(['thug_talk_cock_exp2_3', true, false]);
			lineArray.push(['thug_talk_cock_exp2_4', true, false]);
			lineArray.push(['thug_talk_cock_exp2_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['thug_talk_cock_exp1_1', true, false]);
			lineArray.push(['thug_talk_cock_exp1_2', true, false]);
			lineArray.push(['thug_talk_cock_exp1_3', true, false]);
			lineArray.push(['thug_talk_cock_exp1_4', true, false]);
			lineArray.push(['thug_talk_cock_exp1_5', true, false]);
		}
		else {
			lineArray.push(['thug_talk_cock_exp0_1', true, false]);
			lineArray.push(['thug_talk_cock_exp0_2', true, false]);
			lineArray.push(['thug_talk_cock_exp0_3', true, false]);
			lineArray.push(['thug_talk_cock_exp0_4', true, false]);
			lineArray.push(['thug_talk_cock_exp0_5', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_HOMELESS_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['homeless_talk_cock_exp3_1', true, false]);
			lineArray.push(['homeless_talk_cock_exp3_2', true, false]);
			lineArray.push(['homeless_talk_cock_exp3_3', true, false]);
			lineArray.push(['homeless_talk_cock_exp3_4', true, false]);
			lineArray.push(['homeless_talk_cock_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['homeless_talk_cock_exp2_1', true, false]);
			lineArray.push(['homeless_talk_cock_exp2_2', true, false]);
			lineArray.push(['homeless_talk_cock_exp2_3', true, false]);
			lineArray.push(['homeless_talk_cock_exp2_4', true, false]);
			lineArray.push(['homeless_talk_cock_exp2_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['homeless_talk_cock_exp1_1', true, false]);
			lineArray.push(['homeless_talk_cock_exp1_2', true, false]);
			lineArray.push(['homeless_talk_cock_exp1_3', true, false]);
			lineArray.push(['homeless_talk_cock_exp1_4', true, false]);
			lineArray.push(['homeless_talk_cock_exp1_5', true, false]);
		}
		else {
			lineArray.push(['homeless_talk_cock_exp0_1', true, false]);
			lineArray.push(['homeless_talk_cock_exp0_2', true, false]);
			lineArray.push(['homeless_talk_cock_exp0_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	
	return lineArray;
};

///////
// Sight Lines

Rem_Lines.prototype.karrynline_Sight_Random = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(isInDownOrgasmPose) {
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
	}
	else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_sight_exp3_1', false, false]);
		lineArray.push(['karryn_sight_exp3_2', false, false]);
		if(actor.isWet) lineArray.push(['karryn_sight_exp3_3', false, false]);
		lineArray.push(['karryn_sight_exp3_4', false, false]);
		lineArray.push(['karryn_sight_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_sight_exp2_1', false, false]);
		lineArray.push(['karryn_sight_exp2_2', false, false]);
		lineArray.push(['karryn_sight_exp2_3', false, false]);
		lineArray.push(['karryn_sight_exp2_4', false, false]);
		lineArray.push(['karryn_sight_exp2_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['karryn_sight_exp1_1', false, false]);
		lineArray.push(['karryn_sight_exp1_2', false, false]);
		lineArray.push(['karryn_sight_exp1_3', false, false]);
		lineArray.push(['karryn_sight_exp1_4', false, false]);
	}
	else {
		lineArray.push(['karryn_sight_exp0_1', false, false]);
		lineArray.push(['karryn_sight_exp0_2', false, false]);
		lineArray.push(['karryn_sight_exp0_3', false, false]);
		lineArray.push(['karryn_sight_exp0_4', false, false]);
	}
	
	return lineArray;
};


Rem_Lines.prototype.karrynline_Sight_Bukkake = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getBukkakeReactionScore();
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(isInDownOrgasmPose) {
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
	}
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_sight_bukkake_exp3_1', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp3_2', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp3_3', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp3_4', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_sight_bukkake_exp2_1', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp2_2', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp2_3', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp2_4', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_sight_bukkake_exp1_1', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp1_2', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp1_3', false, false]);
		lineArray.push(['karryn_sight_bukkake_exp1_4', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_Sight_Mouth = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	let hasKissPassive = actor.hasPassive(PASSIVE_FIRST_KISS_ID);
	let hasBlowjobPassive = actor.hasPassive(PASSIVE_BJ_COUNT_TWO_ID);
	let hasSwallowPassive = actor.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID);

	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(isInDownOrgasmPose) {
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
	}
	else if(reactionScore >= VAR_DEF_RS_LV3_REQ && hasKissPassive && hasBlowjobPassive && hasSwallowPassive) {
		lineArray.push(['karryn_sight_mouth_exp3_1', false, false]);
		lineArray.push(['karryn_sight_mouth_exp3_2', false, false]);
		lineArray.push(['karryn_sight_mouth_exp3_3', false, false]);
		lineArray.push(['karryn_sight_mouth_exp3_4', false, false]);
		lineArray.push(['karryn_sight_mouth_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && hasKissPassive && hasBlowjobPassive) {
		lineArray.push(['karryn_sight_mouth_exp2_1', false, false]);
		lineArray.push(['karryn_sight_mouth_exp2_2', false, false]);
		lineArray.push(['karryn_sight_mouth_exp2_3', false, false]);
		lineArray.push(['karryn_sight_mouth_exp2_4', false, false]);
		lineArray.push(['karryn_sight_mouth_exp2_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && hasKissPassive) {
		lineArray.push(['karryn_sight_mouth_exp1_1', false, false]);
		lineArray.push(['karryn_sight_mouth_exp1_2', false, false]);
		lineArray.push(['karryn_sight_mouth_exp1_3', false, false]);
		lineArray.push(['karryn_sight_mouth_exp1_4', false, false]);
	}
	else {
		lineArray.push(['karryn_sight_mouth_exp0_1', false, false]);
		lineArray.push(['karryn_sight_mouth_exp0_2', false, false]);
		lineArray.push(['karryn_sight_mouth_exp0_3', false, false]);
	}

	return lineArray;
};

Rem_Lines.prototype.karrynline_Sight_Boobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	let reactionScore = actor.getReactionScore();
	let isAroused = actor.isAroused()
	let hasFirstBoobsPassive = actor.hasPassive(PASSIVE_BOOBS_PETTED_COUNT_ONE_ID);
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	//Titty fucking
	if(actor.isBodySlotPenis(BOOBS_ID)) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_sight_boobs_paizuri_exp3_1', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp3_2', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp3_3', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp3_4', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp3_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_sight_boobs_paizuri_exp2_1', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp2_2', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp2_3', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp2_4', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp2_5', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_boobs_paizuri_exp1_1', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp1_2', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp1_3', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp1_4', false, false]);
			lineArray.push(['karryn_sight_boobs_paizuri_exp1_5', false, false]);
		}
	}
	else {
		if(isInDownOrgasmPose) {
			lineArray = this.karrynline_Sight_Orgasm(lineArray);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ && hasFirstBoobsPassive) {
			lineArray.push(['karryn_sight_boobs_exp3_1', false, false]);
			lineArray.push(['karryn_sight_boobs_exp3_2', false, false]);
			lineArray.push(['karryn_sight_boobs_exp3_3', false, false]);
			lineArray.push(['karryn_sight_boobs_exp3_4', false, false]);
			lineArray.push(['karryn_sight_boobs_exp3_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && hasFirstBoobsPassive) {
			lineArray.push(['karryn_sight_boobs_exp2_1', false, false]);
			lineArray.push(['karryn_sight_boobs_exp2_2', false, false]);
			lineArray.push(['karryn_sight_boobs_exp2_3', false, false]);
			lineArray.push(['karryn_sight_boobs_exp2_4', false, false]);
			lineArray.push(['karryn_sight_boobs_exp2_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && hasFirstBoobsPassive) {
			lineArray.push(['karryn_sight_boobs_exp1_1', false, false]);
			lineArray.push(['karryn_sight_boobs_exp1_2', false, false]);
			lineArray.push(['karryn_sight_boobs_exp1_3', false, false]);
			lineArray.push(['karryn_sight_boobs_exp1_4', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_boobs_exp0_1', false, false]);
			lineArray.push(['karryn_sight_boobs_exp0_2', false, false]);
			lineArray.push(['karryn_sight_boobs_exp0_3', false, false]);
		}
	}

	return lineArray;
};

Rem_Lines.prototype.karrynline_Sight_Nipples = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(isInDownOrgasmPose) {
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
	}
	else if(reactionScore >= VAR_DEF_RS_LV3_REQ) { 
		lineArray.push(['karryn_sight_boobs_bokki_exp3_1', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp3_2', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp3_3', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp3_4', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) { 
		lineArray.push(['karryn_sight_boobs_bokki_exp2_1', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp2_2', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp2_3', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp2_4', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_sight_boobs_bokki_exp1_1', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp1_2', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp1_3', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp1_4', false, false]);
		lineArray.push(['karryn_sight_boobs_bokki_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_Sight_Pussy = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let isWet = actor.isWet;
	let hasCreampie = actor._liquidCreampiePussy > 0;
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	let reactionScore = actor.getReactionScore();
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		if(hasCreampie) {
			lineArray.push(['karryn_sight_pussy_nakadashi_exp3_1', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp3_2', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp3_3', false, false]);
		}
		else if(isInDownOrgasmPose) {
			lineArray = this.karrynline_Sight_Orgasm(lineArray);
		}
		else if(isWet) {
			lineArray.push(['karryn_sight_pussy_wet_exp3_1', false, false]);
			lineArray.push(['karryn_sight_pussy_wet_exp3_2', false, false]);
			lineArray.push(['karryn_sight_pussy_wet_exp3_3', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_pussy_exp3_1', false, false]);
			lineArray.push(['karryn_sight_pussy_exp3_2', false, false]);
			lineArray.push(['karryn_sight_pussy_exp3_3', false, false]);
		}
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		if(hasCreampie) {
			lineArray.push(['karryn_sight_pussy_nakadashi_exp2_1', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp2_2', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp2_3', false, false]);
		}
		else if(isInDownOrgasmPose) {
			lineArray = this.karrynline_Sight_Orgasm(lineArray);
		}
		else if(isWet) {
			lineArray.push(['karryn_sight_pussy_wet_exp2_1', false, false]);
			lineArray.push(['karryn_sight_pussy_wet_exp2_2', false, false]);
			lineArray.push(['karryn_sight_pussy_wet_exp2_3', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_pussy_exp2_1', false, false]);
			lineArray.push(['karryn_sight_pussy_exp2_2', false, false]);
			lineArray.push(['karryn_sight_pussy_exp2_3', false, false]);
		}
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
		if(hasCreampie) {
			lineArray.push(['karryn_sight_pussy_nakadashi_exp1_1', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp1_2', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp1_3', false, false]);
		}
		else if(isInDownOrgasmPose) {
			lineArray = this.karrynline_Sight_Orgasm(lineArray);
		}
		else if(isWet) {
			lineArray.push(['karryn_sight_pussy_wet_exp1_1', false, false]);
			lineArray.push(['karryn_sight_pussy_wet_exp1_2', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_pussy_exp1_1', false, false]);
			lineArray.push(['karryn_sight_pussy_exp1_2', false, false]);
			lineArray.push(['karryn_sight_pussy_exp1_3', false, false]);
		}
	}
	else {
		if(hasCreampie) {
			lineArray.push(['karryn_sight_pussy_nakadashi_exp1_1', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp1_2', false, false]);
			lineArray.push(['karryn_sight_pussy_nakadashi_exp1_3', false, false]);
		}
		else if(isWet) {
			lineArray.push(['karryn_sight_pussy_wet_exp0_1', false, false]);
			lineArray.push(['karryn_sight_pussy_wet_exp0_2', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_pussy_exp0_1', false, false]);
			lineArray.push(['karryn_sight_pussy_exp0_2', false, false]);
			lineArray.push(['karryn_sight_pussy_exp0_3', false, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_Sight_Butt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let hasCreampie = actor._liquidCreampieAnal > 0;
	let hasBukkake = (actor._liquidBukkakeButt > 0 || actor._liquidBukkakeButtTopRight > 0 || actor._liquidBukkakeButtTopLeft > 0 || actor._liquidBukkakeButtBottomRight > 0 || actor._liquidBukkakeButtBottomLeft > 0);
	let isInDownOrgasmPose = actor.isInDownOrgasmPose();
	let reactionScore = actor.getReactionScore();
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	let analCreampieReactionScore = actor.getAnalCreampieReactionScore();
	let notAnalVirgin = actor._firstAnalSexDate;
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(hasCreampie) {
		if(analCreampieReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_sight_butt_nakadashi_exp3_1', false, false]);
			lineArray.push(['karryn_sight_butt_nakadashi_exp3_2', false, false]);
			lineArray.push(['karryn_sight_butt_nakadashi_exp3_3', false, false]);
		}
		else if(analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_sight_butt_nakadashi_exp2_1', false, false]);
			lineArray.push(['karryn_sight_butt_nakadashi_exp2_2', false, false]);
			lineArray.push(['karryn_sight_butt_nakadashi_exp2_3', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_butt_nakadashi_exp1_1', false, false]);
			lineArray.push(['karryn_sight_butt_nakadashi_exp1_2', false, false]);
			lineArray.push(['karryn_sight_butt_nakadashi_exp1_3', false, false]);
		}
	}
	else if(isInDownOrgasmPose) {
		lineArray = this.karrynline_Sight_Orgasm(lineArray);
	}
	else if(hasBukkake) {
		if(bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ && notAnalVirgin) {
			lineArray.push(['karryn_sight_butt_bukkake_exp3_1', false, false]);
			lineArray.push(['karryn_sight_butt_bukkake_exp3_2', false, false]);
			lineArray.push(['karryn_sight_butt_bukkake_exp3_3', false, false]);
		}
		else if(bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ && notAnalVirgin) {
			lineArray.push(['karryn_sight_butt_bukkake_exp2_1', false, false]);
			lineArray.push(['karryn_sight_butt_bukkake_exp2_2', false, false]);
		}
		else if(bukkakeReactionScore >= VAR_DEF_RS_LV1_REQ && notAnalVirgin) {
			lineArray.push(['karryn_sight_butt_bukkake_exp1_1', false, false]);
			lineArray.push(['karryn_sight_butt_bukkake_exp1_2', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_butt_bukkake_exp0_1', false, false]);
			lineArray.push(['karryn_sight_butt_bukkake_exp0_2', false, false]);
		}
	}
	else {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && notAnalVirgin) {
			lineArray.push(['karryn_sight_butt_exp3_1', false, false]);
			lineArray.push(['karryn_sight_butt_exp3_2', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notAnalVirgin) {
			lineArray.push(['karryn_sight_butt_exp2_1', false, false]);
			lineArray.push(['karryn_sight_butt_exp2_2', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notAnalVirgin) {
			lineArray.push(['karryn_sight_butt_exp1_1', false, false]);
			lineArray.push(['karryn_sight_butt_exp1_2', false, false]);
		}
		else {
			lineArray.push(['karryn_sight_butt_exp0_1', false, false]);
			lineArray.push(['karryn_sight_butt_exp0_2', false, false]);
		}
	}
	
	
	
	return lineArray;
}

Rem_Lines.prototype.karrynline_Sight_Orgasm = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getOrgasmReactionScore();
	
	if(actor.isInWaitressServingPose() && Math.random() < 0.7) {
		return lineArray;
	}
	if(actor.isInReceptionistPose()) {
		return lineArray;
	}
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_sight_org_exp3_1', true, false]);
		lineArray.push(['karryn_sight_org_exp3_2', true, false]);
		lineArray.push(['karryn_sight_org_exp3_3', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_sight_org_exp2_1', true, false]);
		lineArray.push(['karryn_sight_org_exp2_2', true, false]);
		lineArray.push(['karryn_sight_org_exp2_3', true, false]);
	}	
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['karryn_sight_org_exp1_1', true, false]);
		lineArray.push(['karryn_sight_org_exp1_2', true, false]);
		lineArray.push(['karryn_sight_org_exp1_3', true, false]);
	}	
	else {
		lineArray.push(['karryn_sight_org_exp0_1', true, false]);
		lineArray.push(['karryn_sight_org_exp0_2', true, false]);
		lineArray.push(['karryn_sight_org_exp0_3', true, false]);
	}
	
	return lineArray;
};


///////////
// Enemy Pose Skill Lines

//Karryn's Lines
Rem_Lines.prototype.karrynline_enemyPoseSkill_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_blowjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_fera_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp3_4', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_fera_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp2_4', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_fera_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp1_4', false, false]);
		lineArray.push(['enemy_poseskill_fera_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_handjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_handjob_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp3_4', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_handjob_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp2_4', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_handjob_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp1_4', false, false]);
		lineArray.push(['enemy_poseskill_handjob_exp1_5', false, false]);
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_Rimjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_rimjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_rimjob_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_rimjob_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_rimjob_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_rimjob_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_rimjob_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_rimjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_rimjob_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_rimjob_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_rimjob_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_Footjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_footjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_footjob_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp3_4', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_footjob_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp2_4', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_footjob_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp1_4', false, false]);
		lineArray.push(['enemy_poseskill_footjob_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_tittyFuckPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_paizuri_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp3_4', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_paizuri_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp2_4', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_paizuri_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_paizuri_exp1_4', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_Cunnilingus = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_cunniPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_cunni_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp3_4', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_cunni_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp2_4', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_cunni_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_cunni_exp1_4', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_pussySexPassive();
	
	if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_sex_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp3_4', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_sex_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp2_4', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_sex_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp1_4', false, false]);
		lineArray.push(['enemy_poseskill_sex_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseSkill_Anal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_analSexPassive();
	
	if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_poseskill_analsex_exp3_1', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp3_2', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp3_3', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp3_4', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_poseskill_analsex_exp2_1', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp2_2', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp2_3', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp2_4', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_poseskill_analsex_exp1_1', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp1_2', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp1_3', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp1_4', false, false]);
		lineArray.push(['enemy_poseskill_analsex_exp1_5', false, false]);
	}
	
	return lineArray;
};

// Enemy line enemy pose skill

Rem_Lines.prototype.enemyline_enemyPoseSkill_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_handjobPassive();
	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_blowjobPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_poseskill_fera_exp3_1', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp3_2', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp3_3', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp3_4', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_poseskill_fera_exp2_1', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp2_2', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp2_3', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp2_4', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_poseskill_fera_exp1_1', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp1_2', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp1_3', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp1_4', true, false]);
			lineArray.push(['prisoner_poseskill_fera_exp1_5', true, false]);
		}
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_tittyFuckPassive();
	

	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_pussySexPassive();
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_AnalSex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_analSexPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			lineArray.push(['rogue_poseskill_anal_exp3_1', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp3_2', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp3_3', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp3_4', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['rogue_poseskill_anal_exp2_1', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp2_2', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp2_3', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp2_4', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp2_5', true, false]);
		}
		else {
			lineArray.push(['rogue_poseskill_anal_exp1_1', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp1_2', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp1_3', true, false]);
			lineArray.push(['rogue_poseskill_anal_exp1_4', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_Footjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_footjobPassive();
	

	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_Rimjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_rimjobPassive();
	

	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseSkill_Cunnilingus = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_cunniPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['goblin_poseskill_cunni_exp3_1', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp3_2', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp3_3', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp3_4', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['goblin_poseskill_cunni_exp2_1', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp2_2', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp2_3', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp2_4', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_poseskill_cunni_exp1_1', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp1_2', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp1_3', true, false]);
			lineArray.push(['goblin_poseskill_cunni_exp1_4', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		lineArray.push(['thug_poseskill_cunni_exp1_1', true, false]);
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		lineArray.push(['prisoner_poseskill_cunni_exp1_1', true, false]);
	}
	
	return lineArray;
};

/////////
// Karryn Pose Skills Lines

///////////
// Enemy Pose Skill Lines

Rem_Lines.prototype.karrynline_karrynPoseSkill_AnalSex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_analSexPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_analsex_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp3_3', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp3_4', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp3_5', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp3_6', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_analsex_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp2_3', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp2_4', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_analsex_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp1_3', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp1_4', false, false]);
		lineArray.push(['karryn_poseskill_analsex_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseSkill_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_blowjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_fera_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp3_3', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp3_4', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_fera_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp2_3', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp2_4', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_fera_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp1_3', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp1_4', false, false]);
		lineArray.push(['karryn_poseskill_fera_exp1_5', false, false]);
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseSkill_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_pussySexPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_sex_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp3_3', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp3_4', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp3_5', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp3_6', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_sex_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp2_3', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp2_4', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_sex_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp1_3', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp1_4', false, false]);
		lineArray.push(['karryn_poseskill_sex_exp1_5', false, false]);
	}
	
	
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseSkill_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_handjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_handjob_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp3_3', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp3_4', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_handjob_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp2_3', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp2_4', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_handjob_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp1_3', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp1_4', false, false]);
		lineArray.push(['karryn_poseskill_handjob_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseSkill_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_tittyFuckPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_paizuri_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_paizuri_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_paizuri_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_paizuri_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_paizuri_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_paizuri_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_paizuri_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_paizuri_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_paizuri_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseSkill_Rimjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_rimjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_rimjob_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_rimjob_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_rimjob_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_rimjob_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_rimjob_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_rimjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_rimjob_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_rimjob_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_rimjob_exp1_3', false, false]);
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseSkill_Footjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_footjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_poseskill_footjob_exp3_1', false, false]);
		lineArray.push(['karryn_poseskill_footjob_exp3_2', false, false]);
		lineArray.push(['karryn_poseskill_footjob_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_poseskill_footjob_exp2_1', false, false]);
		lineArray.push(['karryn_poseskill_footjob_exp2_2', false, false]);
		lineArray.push(['karryn_poseskill_footjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_poseskill_footjob_exp1_1', false, false]);
		lineArray.push(['karryn_poseskill_footjob_exp1_2', false, false]);
		lineArray.push(['karryn_poseskill_footjob_exp1_3', false, false]);
	}
	
	return lineArray;
};

//////////
// Pose Invite
//////////

Rem_Lines.prototype.karrynline_karrynPoseInvite_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_poseinvite_handjob_exp3_1', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp3_2', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp3_3', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp3_4', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_poseinvite_handjob_exp2_1', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp2_2', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp2_3', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_poseinvite_handjob_exp1_1', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp1_2', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp1_3', false, false]);
		lineArray.push(['karryn_poseinvite_handjob_exp1_4', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPoseInvite_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_poseinvite_fera_exp3_1', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp3_2', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp3_3', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp3_4', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_poseinvite_fera_exp2_1', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp2_2', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp2_3', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp2_4', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseinvite_fera_exp1_1', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp1_2', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp1_3', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp1_4', false, false]);
		lineArray.push(['karryn_poseinvite_fera_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPoseInvite_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_poseinvite_paizuri_exp3_1', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp3_2', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp3_3', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp3_4', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_poseinvite_paizuri_exp2_1', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp2_2', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp2_3', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_poseinvite_paizuri_exp1_1', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp1_2', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp1_3', false, false]);
		lineArray.push(['karryn_poseinvite_paizuri_exp1_4', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPoseInvite_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_poseinvite_sex_exp3_1', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp3_2', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp3_3', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp3_4', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_poseinvite_sex_exp2_1', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp2_2', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp2_3', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp2_4', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseinvite_sex_exp1_1', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp1_2', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp1_3', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp1_4', false, false]);
		lineArray.push(['karryn_poseinvite_sex_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPoseInvite_AnalSex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_poseinvite_analsex_exp3_1', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp3_2', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp3_3', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp3_4', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_poseinvite_analsex_exp2_1', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp2_2', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp2_3', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp2_4', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_poseinvite_analsex_exp1_1', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp1_2', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp1_3', false, false]);
		lineArray.push(['karryn_poseinvite_analsex_exp1_4', false, false]);
	}
	
	return lineArray;
};



/////////
// Karryn Petting Skills

Rem_Lines.prototype.karrynline_karrynTaunt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_taunt_exp3_1', false, false]);
		lineArray.push(['karryn_taunt_exp3_2', false, false]);
		lineArray.push(['karryn_taunt_exp3_3', false, false]);
		lineArray.push(['karryn_taunt_exp3_4', false, false]);
		lineArray.push(['karryn_taunt_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_taunt_exp2_1', false, false]);
		lineArray.push(['karryn_taunt_exp2_2', false, false]);
		lineArray.push(['karryn_taunt_exp2_3', false, false]);
		lineArray.push(['karryn_taunt_exp2_4', false, false]);
		lineArray.push(['karryn_taunt_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_taunt_exp1_1', false, false]);
		lineArray.push(['karryn_taunt_exp1_2', false, false]);
		lineArray.push(['karryn_taunt_exp1_3', false, false]);
		lineArray.push(['karryn_taunt_exp1_4', false, false]);
		lineArray.push(['karryn_taunt_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynFlaunt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_flaunt_exp3_1', false, false]);
		lineArray.push(['karryn_flaunt_exp3_2', false, false]);
		lineArray.push(['karryn_flaunt_exp3_3', false, false]);
		lineArray.push(['karryn_flaunt_exp3_4', false, false]);
		lineArray.push(['karryn_flaunt_exp3_5', false, false]);
		lineArray.push(['karryn_flaunt_exp3_6', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_flaunt_exp2_1', false, false]);
		lineArray.push(['karryn_flaunt_exp2_2', false, false]);
		lineArray.push(['karryn_flaunt_exp2_3', false, false]);
		lineArray.push(['karryn_flaunt_exp2_4', false, false]);
		lineArray.push(['karryn_flaunt_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_flaunt_exp1_1', false, false]);
		lineArray.push(['karryn_flaunt_exp1_2', false, false]);
		lineArray.push(['karryn_flaunt_exp1_3', false, false]);
		lineArray.push(['karryn_flaunt_exp1_4', false, false]);
		lineArray.push(['karryn_flaunt_exp1_5', false, false]);
	}
	
	return lineArray;
};


Rem_Lines.prototype.karrynDogeza = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	
	return lineArray;
};


Rem_Lines.prototype.karrynline_karrynKiss_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_kissPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_petting_kiss_exp3_1', false, false]);
		lineArray.push(['karryn_petting_kiss_exp3_2', false, false]);
		lineArray.push(['karryn_petting_kiss_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_petting_kiss_exp2_1', false, false]);
		lineArray.push(['karryn_petting_kiss_exp2_2', false, false]);
		lineArray.push(['karryn_petting_kiss_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_petting_kiss_exp1_1', false, false]);
		lineArray.push(['karryn_petting_kiss_exp1_2', false, false]);
		lineArray.push(['karryn_petting_kiss_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynKiss_LvlTwo = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_kissPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['karryn_petting_kiss_exp3_1', false, false]);
		lineArray.push(['karryn_petting_kiss_exp3_2', false, false]);
		lineArray.push(['karryn_petting_kiss_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['karryn_petting_kiss_exp2_1', false, false]);
		lineArray.push(['karryn_petting_kiss_exp2_2', false, false]);
		lineArray.push(['karryn_petting_kiss_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_petting_kiss_exp1_1', false, false]);
		lineArray.push(['karryn_petting_kiss_exp1_2', false, false]);
		lineArray.push(['karryn_petting_kiss_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynCockPetting_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_cockpet_exp3_1', false, false]);
		lineArray.push(['karryn_cockpet_exp3_2', false, false]);
		lineArray.push(['karryn_cockpet_exp3_3', false, false]);
		lineArray.push(['karryn_cockpet_exp3_4', false, false]);
		lineArray.push(['karryn_cockpet_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_cockpet_exp2_1', false, false]);
		lineArray.push(['karryn_cockpet_exp2_2', false, false]);
		lineArray.push(['karryn_cockpet_exp2_3', false, false]);
		lineArray.push(['karryn_cockpet_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_cockpet_exp1_1', false, false]);
		lineArray.push(['karryn_cockpet_exp1_2', false, false]);
		lineArray.push(['karryn_cockpet_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynCockStare_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let cockStareReactionScore = actor.getCockStareReactionScore();
	
	if(cockStareReactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_cock_stare_exp3_1', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_2', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_3', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_4', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_5', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_6', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_7', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_8', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_9', false, false]);
		lineArray.push(['karryn_cock_stare_exp3_10', false, false]);
	}
	else if(cockStareReactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_cock_stare_exp2_1', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_2', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_3', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_4', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_5', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_6', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_7', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_8', false, false]);
		lineArray.push(['karryn_cock_stare_exp2_9', false, false]);
	}
	else if(cockStareReactionScore >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['karryn_cock_stare_exp1_1', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_2', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_3', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_4', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_5', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_6', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_7', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_8', false, false]);
		lineArray.push(['karryn_cock_stare_exp1_9', false, false]);
	}
	else {
		lineArray.push(['karryn_cock_stare_exp0_1', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_2', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_3', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_4', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_5', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_6', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_7', false, false]);
		lineArray.push(['karryn_cock_stare_exp0_8', false, false]);
	}

	return lineArray;
};


/////////
// Enemy Petting Skills

Rem_Lines.prototype.karrynline_enemyKissing_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_kissPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_kiss_exp3_1', false, false]);
		lineArray.push(['enemy_petting_kiss_exp3_2', false, false]);
		lineArray.push(['enemy_petting_kiss_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_kiss_exp2_1', false, false]);
		lineArray.push(['enemy_petting_kiss_exp2_2', false, false]);
		lineArray.push(['enemy_petting_kiss_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_kiss_exp1_1', false, false]);
		lineArray.push(['enemy_petting_kiss_exp1_2', false, false]);
		lineArray.push(['enemy_petting_kiss_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyKissing_LvlTwo = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_kissPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_kiss_exp3_1', false, false]);
		lineArray.push(['enemy_petting_kiss_exp3_2', false, false]);
		lineArray.push(['enemy_petting_kiss_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_kiss_exp2_1', false, false]);
		lineArray.push(['enemy_petting_kiss_exp2_2', false, false]);
		lineArray.push(['enemy_petting_kiss_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_kiss_exp1_1', false, false]);
		lineArray.push(['enemy_petting_kiss_exp1_2', false, false]);
		lineArray.push(['enemy_petting_kiss_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemySpanking_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getButtSpankingReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_spank_exp3_1', false, false]);
		lineArray.push(['enemy_petting_spank_exp3_2', false, false]);
		lineArray.push(['enemy_petting_spank_exp3_3', false, false]);
		lineArray.push(['enemy_petting_spank_exp3_4', false, false]);
		lineArray.push(['enemy_petting_spank_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_spank_exp2_1', false, false]);
		lineArray.push(['enemy_petting_spank_exp2_2', false, false]);
		lineArray.push(['enemy_petting_spank_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_spank_exp1_1', false, false]);
		lineArray.push(['enemy_petting_spank_exp1_2', false, false]);
		lineArray.push(['enemy_petting_spank_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPetting_Boobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_boobsPettingPassive();
	
	if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_boobs_exp3_1', false, false]);
		lineArray.push(['enemy_petting_boobs_exp3_2', false, false]);
		lineArray.push(['enemy_petting_boobs_exp3_3', false, false]);
		lineArray.push(['enemy_petting_boobs_exp3_4', false, false]);
		lineArray.push(['enemy_petting_boobs_exp3_5', false, false]);
	}
	else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_boobs_exp2_1', false, false]);
		lineArray.push(['enemy_petting_boobs_exp2_2', false, false]);
		lineArray.push(['enemy_petting_boobs_exp2_3', false, false]);
		lineArray.push(['enemy_petting_boobs_exp2_4', false, false]);
		lineArray.push(['enemy_petting_boobs_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_boobs_exp1_1', false, false]);
		lineArray.push(['enemy_petting_boobs_exp1_2', false, false]);
		lineArray.push(['enemy_petting_boobs_exp1_3', false, false]);
		lineArray.push(['enemy_petting_boobs_exp1_4', false, false]);
		lineArray.push(['enemy_petting_boobs_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPetting_Nipples = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_nipplesPettingPassive();
	
	if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_nipples_exp3_1', false, false]);
		lineArray.push(['enemy_petting_nipples_exp3_2', false, false]);
		lineArray.push(['enemy_petting_nipples_exp3_3', false, false]);
		lineArray.push(['enemy_petting_nipples_exp3_4', false, false]);
		lineArray.push(['enemy_petting_nipples_exp3_5', false, false]);
	}
	else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_nipples_exp2_1', false, false]);
		lineArray.push(['enemy_petting_nipples_exp2_2', false, false]);
		lineArray.push(['enemy_petting_nipples_exp2_3', false, false]);
		lineArray.push(['enemy_petting_nipples_exp2_4', false, false]);
		lineArray.push(['enemy_petting_nipples_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_nipples_exp1_1', false, false]);
		lineArray.push(['enemy_petting_nipples_exp1_2', false, false]);
		lineArray.push(['enemy_petting_nipples_exp1_3', false, false]);
		lineArray.push(['enemy_petting_nipples_exp1_4', false, false]);
		lineArray.push(['enemy_petting_nipples_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPetting_Clit = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_clitPettingPassive();
	
	if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_clit_exp3_1', false, false]);
		lineArray.push(['enemy_petting_clit_exp3_2', false, false]);
		lineArray.push(['enemy_petting_clit_exp3_3', false, false]);
		lineArray.push(['enemy_petting_clit_exp3_4', false, false]);
		lineArray.push(['enemy_petting_clit_exp3_5', false, false]);
	}
	else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_clit_exp2_1', false, false]);
		lineArray.push(['enemy_petting_clit_exp2_2', false, false]);
		lineArray.push(['enemy_petting_clit_exp2_3', false, false]);
		lineArray.push(['enemy_petting_clit_exp2_4', false, false]);
		lineArray.push(['enemy_petting_clit_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_clit_exp1_1', false, false]);
		lineArray.push(['enemy_petting_clit_exp1_2', false, false]);
		lineArray.push(['enemy_petting_clit_exp1_3', false, false]);
		lineArray.push(['enemy_petting_clit_exp1_4', false, false]);
		lineArray.push(['enemy_petting_clit_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPetting_Pussy = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_pussyPettingPassive();
	
	if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_pussy_exp3_1', false, false]);
		lineArray.push(['enemy_petting_pussy_exp3_2', false, false]);
		lineArray.push(['enemy_petting_pussy_exp3_3', false, false]);
		lineArray.push(['enemy_petting_pussy_exp3_4', false, false]);
		lineArray.push(['enemy_petting_pussy_exp3_5', false, false]);
	}
	else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_pussy_exp2_1', false, false]);
		lineArray.push(['enemy_petting_pussy_exp2_2', false, false]);
		lineArray.push(['enemy_petting_pussy_exp2_3', false, false]);
		lineArray.push(['enemy_petting_pussy_exp2_4', false, false]);
		lineArray.push(['enemy_petting_pussy_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_pussy_exp1_1', false, false]);
		lineArray.push(['enemy_petting_pussy_exp1_2', false, false]);
		lineArray.push(['enemy_petting_pussy_exp1_3', false, false]);
		lineArray.push(['enemy_petting_pussy_exp1_4', false, false]);
		lineArray.push(['enemy_petting_pussy_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPetting_Butt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_buttPettingPassive();
	
	if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_butt_exp3_1', false, false]);
		lineArray.push(['enemy_petting_butt_exp3_2', false, false]);
		lineArray.push(['enemy_petting_butt_exp3_3', false, false]);
		lineArray.push(['enemy_petting_butt_exp3_4', false, false]);
		lineArray.push(['enemy_petting_butt_exp3_5', false, false]);
	}
	else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_butt_exp2_1', false, false]);
		lineArray.push(['enemy_petting_butt_exp2_2', false, false]);
		lineArray.push(['enemy_petting_butt_exp2_3', false, false]);
		lineArray.push(['enemy_petting_butt_exp2_4', false, false]);
		lineArray.push(['enemy_petting_butt_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_butt_exp1_1', false, false]);
		lineArray.push(['enemy_petting_butt_exp1_2', false, false]);
		lineArray.push(['enemy_petting_butt_exp1_3', false, false]);
		lineArray.push(['enemy_petting_butt_exp1_4', false, false]);
		lineArray.push(['enemy_petting_butt_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPetting_Anal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_analPettingPassive();
	
	if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_petting_anal_exp3_1', false, false]);
		lineArray.push(['enemy_petting_anal_exp3_2', false, false]);
		lineArray.push(['enemy_petting_anal_exp3_3', false, false]);
		lineArray.push(['enemy_petting_anal_exp3_4', false, false]);
		lineArray.push(['enemy_petting_anal_exp3_5', false, false]);
	}
	else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_petting_anal_exp2_1', false, false]);
		lineArray.push(['enemy_petting_anal_exp2_2', false, false]);
		lineArray.push(['enemy_petting_anal_exp2_3', false, false]);
		lineArray.push(['enemy_petting_anal_exp2_4', false, false]);
		lineArray.push(['enemy_petting_anal_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_petting_anal_exp1_1', false, false]);
		lineArray.push(['enemy_petting_anal_exp1_2', false, false]);
		lineArray.push(['enemy_petting_anal_exp1_3', false, false]);
		lineArray.push(['enemy_petting_anal_exp1_4', false, false]);
		lineArray.push(['enemy_petting_anal_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemySuckFingers = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_suckFingersPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_suck_fingers_exp3_1', false, false]);
		lineArray.push(['enemy_suck_fingers_exp3_2', false, false]);
		lineArray.push(['enemy_suck_fingers_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_suck_fingers_exp2_1', false, false]);
		lineArray.push(['enemy_suck_fingers_exp2_2', false, false]);
		lineArray.push(['enemy_suck_fingers_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_suck_fingers_exp1_1', false, false]);
		lineArray.push(['enemy_suck_fingers_exp1_2', false, false]);
		lineArray.push(['enemy_suck_fingers_exp1_3', false, false]);
	}
	
	return lineArray;
};


//Enemy Lines
//Enemy Petting
Rem_Lines.prototype.enemyline_enemyPetting_Boobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_boobsPettingPassive();
	let isAroused = actor.isAroused()
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_petting_boobs_exp3_1', true, false]);
			lineArray.push(['thug_petting_boobs_exp3_2', true, false]);
			lineArray.push(['thug_petting_boobs_exp3_3', true, false]);
			lineArray.push(['thug_petting_boobs_exp3_4', true, false]);
			lineArray.push(['thug_petting_boobs_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			if(isAroused) lineArray.push(['thug_petting_boobs_exp2_1', true, false]);
			lineArray.push(['thug_petting_boobs_exp2_2', true, false]);
			lineArray.push(['thug_petting_boobs_exp2_3', true, false]);
			lineArray.push(['thug_petting_boobs_exp2_4', true, false]);
			lineArray.push(['thug_petting_boobs_exp2_5', true, false]);
		}
		else {
			lineArray.push(['thug_petting_boobs_exp1_1', true, false]);
			lineArray.push(['thug_petting_boobs_exp1_2', true, false]);
			lineArray.push(['thug_petting_boobs_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_petting_boobs_exp3_1', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp3_2', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp3_3', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp3_4', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_petting_boobs_exp2_1', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp2_2', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp2_3', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp2_4', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_petting_boobs_exp1_1', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp1_2', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp1_3', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp1_4', true, false]);
			lineArray.push(['prisoner_petting_boobs_exp1_5', true, false]);
		}	
	}
	 
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPetting_Nipples = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);



	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPetting_Clit = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);

	return lineArray;

};
Rem_Lines.prototype.enemyline_enemyPetting_Pussy = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let pettingReactionScore = actor.reactionScore_pussyPettingPassive();
	let isVirgin = !actor._firstPussySexDate;

	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(isVirgin) {
			lineArray.push(['thug_petting_pussy_exp0_1', true, false]);
			lineArray.push(['thug_petting_pussy_exp0_2', true, false]);
			lineArray.push(['thug_petting_pussy_exp0_3', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_petting_pussy_exp3_1', true, false]);
			lineArray.push(['thug_petting_pussy_exp3_2', true, false]);
			lineArray.push(['thug_petting_pussy_exp3_3', true, false]);
			lineArray.push(['thug_petting_pussy_exp3_4', true, false]);
			lineArray.push(['thug_petting_pussy_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_petting_pussy_exp2_1', true, false]);
			lineArray.push(['thug_petting_pussy_exp2_2', true, false]);
			lineArray.push(['thug_petting_pussy_exp2_3', true, false]);
			lineArray.push(['thug_petting_pussy_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_petting_pussy_exp1_1', true, false]);
			lineArray.push(['thug_petting_pussy_exp1_2', true, false]);
			lineArray.push(['thug_petting_pussy_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_petting_pussy_exp3_1', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp3_2', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp3_3', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp3_4', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_petting_pussy_exp2_1', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp2_2', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp2_3', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp2_4', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_petting_pussy_exp1_1', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp1_2', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp1_3', true, false]);
			lineArray.push(['prisoner_petting_pussy_exp1_4', true, false]);
		}	
	}
	
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPetting_Butt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pettingReactionScore = actor.reactionScore_buttPettingPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['goblin_petting_butt_exp3_1', true, false]);
			lineArray.push(['goblin_petting_butt_exp3_2', true, false]);
			lineArray.push(['goblin_petting_butt_exp3_3', true, false]);
			lineArray.push(['goblin_petting_butt_exp3_4', true, false]);
			lineArray.push(['goblin_petting_butt_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['goblin_petting_butt_exp2_1', true, false]);
			lineArray.push(['goblin_petting_butt_exp2_2', true, false]);
			lineArray.push(['goblin_petting_butt_exp2_3', true, false]);
			lineArray.push(['goblin_petting_butt_exp2_4', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV1_REQ) {
			lineArray.push(['goblin_petting_butt_exp1_1', true, false]);
			lineArray.push(['goblin_petting_butt_exp1_2', true, false]);
			lineArray.push(['goblin_petting_butt_exp1_3', true, false]);
		}
		else {
			lineArray.push(['goblin_petting_butt_exp0_1', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_petting_butt_exp3_1', true, false]);
			lineArray.push(['thug_petting_butt_exp3_2', true, false]);
			lineArray.push(['thug_petting_butt_exp3_3', true, false]);
			lineArray.push(['thug_petting_butt_exp3_4', true, false]);
			lineArray.push(['thug_petting_butt_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_petting_butt_exp2_1', true, false]);
			lineArray.push(['thug_petting_butt_exp2_2', true, false]);
			lineArray.push(['thug_petting_butt_exp2_3', true, false]);
			lineArray.push(['thug_petting_butt_exp2_4', true, false]);
			lineArray.push(['thug_petting_butt_exp2_5', true, false]);
		}
		else {
			lineArray.push(['thug_petting_butt_exp1_1', true, false]);
			lineArray.push(['thug_petting_butt_exp1_2', true, false]);
			lineArray.push(['thug_petting_butt_exp1_3', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_petting_butt_exp3_1', true, false]);
			lineArray.push(['prisoner_petting_butt_exp3_2', true, false]);
			lineArray.push(['prisoner_petting_butt_exp3_3', true, false]);
			lineArray.push(['prisoner_petting_butt_exp3_4', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_petting_butt_exp2_1', true, false]);
			lineArray.push(['prisoner_petting_butt_exp2_2', true, false]);
			lineArray.push(['prisoner_petting_butt_exp2_3', true, false]);
			lineArray.push(['prisoner_petting_butt_exp2_4', true, false]);
		}
		else {
			lineArray.push(['prisoner_petting_butt_exp1_1', true, false]);
			lineArray.push(['prisoner_petting_butt_exp1_2', true, false]);
			lineArray.push(['prisoner_petting_butt_exp1_3', true, false]);
			lineArray.push(['prisoner_petting_butt_exp1_4', true, false]);
		}	
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPetting_Anal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isAnalCreampied = actor._liquidCreampieAnal > 0;
	let pettingReactionScore = actor.reactionScore_analPettingPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_petting_anal_exp3_1', true, false]);
			lineArray.push(['thug_petting_anal_exp3_2', true, false]);
			lineArray.push(['thug_petting_anal_exp3_3', true, false]);
			lineArray.push(['thug_petting_anal_exp3_4', true, false]);
			lineArray.push(['thug_petting_anal_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_petting_anal_exp2_1', true, false]);
			lineArray.push(['thug_petting_anal_exp2_2', true, false]);
			lineArray.push(['thug_petting_anal_exp2_3', true, false]);
			lineArray.push(['thug_petting_anal_exp2_4', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV1_REQ) {
			lineArray.push(['thug_petting_anal_exp1_1', true, false]);
			lineArray.push(['thug_petting_anal_exp1_2', true, false]);
			lineArray.push(['thug_petting_anal_exp1_3', true, false]);
		}
		else {
			lineArray.push(['thug_petting_anal_exp0_1', true, false]);
			lineArray.push(['thug_petting_anal_exp0_2', true, false]);
			lineArray.push(['thug_petting_anal_exp0_3', true, false]);
			lineArray.push(['thug_petting_anal_exp0_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {	
		if(pettingReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_petting_anal_exp3_1', true, false]);
			lineArray.push(['prisoner_petting_anal_exp3_2', true, false]);
			lineArray.push(['prisoner_petting_anal_exp3_3', true, false]);
			lineArray.push(['prisoner_petting_anal_exp3_4', true, false]);
			lineArray.push(['prisoner_petting_anal_exp3_5', true, false]);
		}
		else if(pettingReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_petting_anal_exp2_1', true, false]);
			lineArray.push(['prisoner_petting_anal_exp2_2', true, false]);
			lineArray.push(['prisoner_petting_anal_exp2_3', true, false]);
			lineArray.push(['prisoner_petting_anal_exp2_4', true, false]);
		}
		else {
			lineArray.push(['prisoner_petting_anal_exp1_1', true, false]);
			lineArray.push(['prisoner_petting_anal_exp1_2', true, false]);
			lineArray.push(['prisoner_petting_anal_exp1_3', true, false]);
			lineArray.push(['prisoner_petting_anal_exp1_4', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyKissing_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_kissPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	else {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_petting_kiss_exp3_1', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp3_2', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp3_3', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_petting_kiss_exp2_1', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp2_2', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp2_3', true, false]);
		}
		else {
			lineArray.push(['prisoner_petting_kiss_exp1_1', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp1_2', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp1_3', true, false]);
		}	
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyKissing_LvlTwo = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_kissPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
			
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_petting_kiss_exp3_1', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp3_2', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp3_3', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_petting_kiss_exp2_1', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp2_2', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp2_3', true, false]);
		}
		else {
			lineArray.push(['prisoner_petting_kiss_exp1_1', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp1_2', true, false]);
			lineArray.push(['prisoner_petting_kiss_exp1_3', true, false]);
		}	
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemySpanking_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getButtSpankingReactionScore();
	let hasPassiveButtSpankCountTwo = actor.hasPassive(PASSIVE_BUTT_SPANKED_COUNT_TWO_ID);
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_petting_spank_exp3_1', true, false]);
			lineArray.push(['thug_petting_spank_exp3_2', true, false]);
			lineArray.push(['thug_petting_spank_exp3_3', true, false]);
			lineArray.push(['thug_petting_spank_exp3_4', true, false]);
			lineArray.push(['thug_petting_spank_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_petting_spank_exp2_1', true, false]);
			lineArray.push(['thug_petting_spank_exp2_2', true, false]);
			lineArray.push(['thug_petting_spank_exp2_3', true, false]);
			lineArray.push(['thug_petting_spank_exp2_4', true, false]);
			lineArray.push(['thug_petting_spank_exp2_5', true, false]);
		}
		else {
			lineArray.push(['thug_petting_spank_exp1_1', true, false]);
			lineArray.push(['thug_petting_spank_exp1_2', true, false]);
			lineArray.push(['thug_petting_spank_exp1_3', true, false]);
			lineArray.push(['thug_petting_spank_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['goblin_petting_spank_exp3_1', true, false]);
			lineArray.push(['goblin_petting_spank_exp3_2', true, false]);
			lineArray.push(['goblin_petting_spank_exp3_3', true, false]);
			lineArray.push(['goblin_petting_spank_exp3_4', true, false]);
			lineArray.push(['goblin_petting_spank_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['goblin_petting_spank_exp2_1', true, false]);
			lineArray.push(['goblin_petting_spank_exp2_2', true, false]);
			lineArray.push(['goblin_petting_spank_exp2_3', true, false]);
			lineArray.push(['goblin_petting_spank_exp2_4', true, false]);
			lineArray.push(['goblin_petting_spank_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_petting_spank_exp1_1', true, false]);
			lineArray.push(['goblin_petting_spank_exp1_2', true, false]);
			lineArray.push(['goblin_petting_spank_exp1_3', true, false]);
			lineArray.push(['goblin_petting_spank_exp1_4', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['rogue_petting_spank_exp3_1', true, false]);
			lineArray.push(['rogue_petting_spank_exp3_2', true, false]);
			lineArray.push(['rogue_petting_spank_exp3_3', true, false]);
			lineArray.push(['rogue_petting_spank_exp3_4', true, false]);
			lineArray.push(['rogue_petting_spank_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			if(hasPassiveButtSpankCountTwo) lineArray.push(['rogue_petting_spank_exp2_1', true, false]);
			lineArray.push(['rogue_petting_spank_exp2_2', true, false]);
			lineArray.push(['rogue_petting_spank_exp2_3', true, false]);
			lineArray.push(['rogue_petting_spank_exp2_4', true, false]);
			lineArray.push(['rogue_petting_spank_exp2_5', true, false]);
		}
		else {
			lineArray.push(['rogue_petting_spank_exp1_1', true, false]);
			lineArray.push(['rogue_petting_spank_exp1_2', true, false]);
			lineArray.push(['rogue_petting_spank_exp1_3', true, false]);
			lineArray.push(['rogue_petting_spank_exp1_4', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_karrynCockStare_LvlOne = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let cockStareReactionScore = actor.getCockStareReactionScore();
	
	if($gameParty.isInGloryBattle) {
		if(this._enemysCockJustShrankFromCockStare) {
			if(this._enemyIsLeftHole) {
				lineArray.push(['enemy_toilet_left_cock_stare_exp1_1', true, false]);
			}
			else if(this._enemyIsRightHole) {
				lineArray.push(['enemy_toilet_right_cock_stare_exp1_1', true, false]);
			}
		}
		else {
			if(cockStareReactionScore >= VAR_DEF_RS_LV3_REQ) {
				if(this._enemyIsLeftHole) {
					lineArray.push(['enemy_toilet_left_cock_stare_exp3_1', true, false]);
				}
				else if(this._enemyIsRightHole) {
					lineArray.push(['enemy_toilet_right_cock_stare_exp3_1', true, false]);
				}			
			}
			else if(cockStareReactionScore >= VAR_DEF_RS_LV2_REQ) {
				if(this._enemyIsLeftHole) {
					lineArray.push(['enemy_toilet_left_cock_stare_exp2_1', true, false]);
				}
				else if(this._enemyIsRightHole) {
					lineArray.push(['enemy_toilet_right_cock_stare_exp2_1', true, false]);
				}
			}
		}
	}
	
	if(cockStareReactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_cock_stare_exp3_1', true, false]);
		lineArray.push(['enemy_cock_stare_exp3_2', true, false]);
		lineArray.push(['enemy_cock_stare_exp3_3', true, false]);
		lineArray.push(['enemy_cock_stare_exp3_4', true, false]);
		lineArray.push(['enemy_cock_stare_exp3_5', true, false]);
	}
	else if(cockStareReactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_cock_stare_exp2_1', true, false]);
		lineArray.push(['enemy_cock_stare_exp2_2', true, false]);
		lineArray.push(['enemy_cock_stare_exp2_3', true, false]);
		lineArray.push(['enemy_cock_stare_exp2_4', true, false]);
		lineArray.push(['enemy_cock_stare_exp2_5', true, false]);
	}
	else if(cockStareReactionScore >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['enemy_cock_stare_exp1_1', true, false]);
		lineArray.push(['enemy_cock_stare_exp1_2', true, false]);
		lineArray.push(['enemy_cock_stare_exp1_3', true, false]);
		lineArray.push(['enemy_cock_stare_exp1_4', true, false]);
		lineArray.push(['enemy_cock_stare_exp1_5', true, false]);
	}
	else {
		lineArray.push(['enemy_cock_stare_exp0_1', true, false]);
		lineArray.push(['enemy_cock_stare_exp0_2', true, false]);
		lineArray.push(['enemy_cock_stare_exp0_3', true, false]);
		lineArray.push(['enemy_cock_stare_exp0_4', true, false]);
		lineArray.push(['enemy_cock_stare_exp0_5', true, false]);
	}
	
	return lineArray;
};


///////////
// Toys Lines

Rem_Lines.prototype.karrynline_enemy_insertToy_pinkRotor = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_clitToyPassive(); 
	let firstPinkRotorInserted = actor._recordClitToyInsertedCount <= 1;
	
	if(firstPinkRotorInserted) {
		lineArray.push(['karryn_toy_enemyinsert_clit_exp0_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp0_2', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_enemyinsert_clit_exp3_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp3_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp3_3', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp3_4', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_enemyinsert_clit_exp2_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp2_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp2_3', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_toy_enemyinsert_clit_exp1_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp1_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_clit_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemy_insertToy_penisDildo = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_pussyToyPassive(); 
	let firstPenisDildoInserted = actor._recordPussyToyInsertedCount <= 1;
	
	if(firstPenisDildoInserted) {
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp0_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp0_2', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp3_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp3_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp3_3', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp3_4', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp3_5', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp2_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp2_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp2_3', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp2_4', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp1_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp1_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_pussy_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemy_insertToy_analBeads = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_analToyPassive(); 
	let firstAnalBeadsInserted = actor._recordAnalToyInsertedCount <= 1;
	
	if(firstAnalBeadsInserted) {
		lineArray.push(['karryn_toy_enemyinsert_anal_exp0_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp0_2', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_enemyinsert_anal_exp3_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp3_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp3_3', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp3_4', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp3_5', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_enemyinsert_anal_exp2_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp2_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp2_3', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp2_4', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_toy_enemyinsert_anal_exp1_1', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp1_2', false, false]);
		lineArray.push(['karryn_toy_enemyinsert_anal_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemy_playToy_pinkRotor = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_clitToyPassive(); 
	let firstPinkRotorPlay = actor._recordClitToyUsedByEnemyCount <= 1;
	
	if(firstPinkRotorPlay) {
		lineArray.push(['karryn_toy_enemyplay_clit_exp0_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp0_2', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_enemyplay_clit_exp3_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp3_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp3_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp3_4', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_enemyplay_clit_exp2_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp2_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp2_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_toy_enemyplay_clit_exp1_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp1_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_clit_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemy_playToy_penisDildo = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_pussyToyPassive(); 
	let firstPenisDildoPlay = actor._recordPussyToyUsedByEnemyCount <= 1;
	
	if(firstPenisDildoPlay) {
		lineArray.push(['karryn_toy_enemyplay_pussy_exp0_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp0_2', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_enemyplay_pussy_exp3_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp3_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp3_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp3_4', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp3_5', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_enemyplay_pussy_exp2_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp2_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp2_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_toy_enemyplay_pussy_exp1_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp1_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp1_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_pussy_exp1_4', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemy_playToy_analBeads = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_analToyPassive();
	let firstAnalBeadsPlay = actor._recordAnalToyUsedByEnemyCount  <= 1;	
	
	if(firstAnalBeadsPlay) {
		lineArray.push(['karryn_toy_enemyplay_anal_exp0_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp0_2', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_enemyplay_anal_exp3_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp3_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp3_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp3_4', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp3_5', false, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_enemyplay_anal_exp2_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp2_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp2_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_toy_enemyplay_anal_exp1_1', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp1_2', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp1_3', false, false]);
		lineArray.push(['karryn_toy_enemyplay_anal_exp1_4', false, false]);
	}

	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karryn_playToy_pinkRotor = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_clitToyPassive(); 

	if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_karrynplay_clit_exp3_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp3_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp3_3', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp3_4', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp3_5', true, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_karrynplay_clit_exp2_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp2_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp2_3', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_toy_karrynplay_clit_exp1_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp1_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_clit_exp1_3', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karryn_playToy_penisDildo = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_pussyToyPassive(); 

	if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_karrynplay_pussy_exp3_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp3_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp3_3', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp3_4', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp3_5', true, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_karrynplay_pussy_exp2_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp2_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp2_3', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_toy_karrynplay_pussy_exp1_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp1_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_pussy_exp1_3', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karryn_playToy_analBeads = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let toyReactionScore = actor.reactionScore_analToyPassive();

	if(toyReactionScore >= VAR_TOY_RS_LV3_REQ) {
		lineArray.push(['karryn_toy_karrynplay_anal_exp3_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp3_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp3_3', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp3_4', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp3_5', true, false]);
	}
	else if(toyReactionScore >= VAR_TOY_RS_LV2_REQ) {
		lineArray.push(['karryn_toy_karrynplay_anal_exp2_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp2_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp2_3', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_toy_karrynplay_anal_exp1_1', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp1_2', true, false]);
		lineArray.push(['karryn_toy_karrynplay_anal_exp1_3', true, false]);
	}

	
	return lineArray;
};

//////////
// Pose Join Lines

//Karryn
Rem_Lines.prototype.karrynline_enemyPoseJoin_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_posejoin_handjob_exp3_1', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp3_2', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp3_3', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp3_4', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_posejoin_handjob_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp2_4', false, false]);
	}
	else {
		lineArray.push(['enemy_posejoin_handjob_exp1_1', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp1_2', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp1_3', false, false]);
		lineArray.push(['enemy_posejoin_handjob_exp1_4', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPoseJoin_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_posejoin_fera_exp3_1', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp3_2', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp3_3', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp3_4', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_posejoin_fera_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp2_4', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posejoin_fera_exp1_1', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp1_2', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp1_3', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp1_4', false, false]);
		lineArray.push(['enemy_posejoin_fera_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPoseJoin_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_posejoin_paizuri_exp3_1', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp3_2', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp3_3', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp3_4', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_posejoin_paizuri_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp2_4', false, false]);
	}
	else {
		lineArray.push(['enemy_posejoin_paizuri_exp1_1', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp1_2', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp1_3', false, false]);
		lineArray.push(['enemy_posejoin_paizuri_exp1_4', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPoseJoin_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let enemyJustTookPussyVirginity = this._enemyJustTookPussyVirginity;
	
	if(enemyJustTookPussyVirginity) {
		lineArray.push(['enemy_posejoin_sex_exp0_1', false, false]);
		actor._remLine_saidLostPussyVirginity = true;
	}
	else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_posejoin_sex_exp3_1', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp3_2', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp3_3', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp3_4', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_posejoin_sex_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_4', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posejoin_sex_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_4', false, false]);
		lineArray.push(['enemy_posejoin_sex_exp2_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPoseJoin_AnalSex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let enemyJustTookAnalVirginity = this._enemyJustTookAnalVirginity;
	
	if(enemyJustTookAnalVirginity) {
		lineArray.push(['enemy_posejoin_analsex_exp0_1', false, false]);
		actor._remLine_saidLostAnalVirginity = true;
	}
	else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['enemy_posejoin_analsex_exp3_1', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp3_2', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp3_3', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp3_4', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['enemy_posejoin_analsex_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_4', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posejoin_analsex_exp2_1', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_2', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_3', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_4', false, false]);
		lineArray.push(['enemy_posejoin_analsex_exp2_5', false, false]);
	}
	
	return lineArray;
};

/////////////
// Enemy Pose Join
 
Rem_Lines.prototype.enemyline_enemyPoseJoin_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_handjobPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_posejoin_handjob_exp3_1', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp3_2', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp3_3', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp3_4', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_posejoin_handjob_exp2_1', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp2_2', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp2_3', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_posejoin_handjob_exp1_1', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp1_2', true, false]);
			lineArray.push(['thug_posejoin_handjob_exp1_3', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseJoin_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_blowjobPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_posejoin_fera_exp3_1', true, false]);
			lineArray.push(['thug_posejoin_fera_exp3_2', true, false]);
			lineArray.push(['thug_posejoin_fera_exp3_3', true, false]);
			lineArray.push(['thug_posejoin_fera_exp3_4', true, false]);
			lineArray.push(['thug_posejoin_fera_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_posejoin_fera_exp2_1', true, false]);
			lineArray.push(['thug_posejoin_fera_exp2_2', true, false]);
			lineArray.push(['thug_posejoin_fera_exp2_3', true, false]);
			lineArray.push(['thug_posejoin_fera_exp2_4', true, false]);
			lineArray.push(['thug_posejoin_fera_exp2_5', true, false]);
		}
		else {
			lineArray.push(['thug_posejoin_fera_exp1_1', true, false]);
			lineArray.push(['thug_posejoin_fera_exp1_2', true, false]);
			lineArray.push(['thug_posejoin_fera_exp1_3', true, false]);
			lineArray.push(['thug_posejoin_fera_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['goblin_posejoin_fera_exp3_1', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp3_2', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp3_3', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp3_4', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['goblin_posejoin_fera_exp2_1', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp2_2', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp2_3', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp2_4', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_posejoin_fera_exp1_1', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp1_2', true, false]);
			lineArray.push(['goblin_posejoin_fera_exp1_3', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['guard_posejoin_fera_exp3_1', true, false]);
			lineArray.push(['guard_posejoin_fera_exp3_2', true, false]);
			lineArray.push(['guard_posejoin_fera_exp3_3', true, false]);
			lineArray.push(['guard_posejoin_fera_exp3_4', true, false]);
			lineArray.push(['guard_posejoin_fera_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['guard_posejoin_fera_exp2_1', true, false]);
			lineArray.push(['guard_posejoin_fera_exp2_2', true, false]);
			lineArray.push(['guard_posejoin_fera_exp2_3', true, false]);
			lineArray.push(['guard_posejoin_fera_exp2_4', true, false]);
			lineArray.push(['guard_posejoin_fera_exp2_5', true, false]);
		}
		else {
			lineArray.push(['guard_posejoin_fera_exp1_1', true, false]);
			lineArray.push(['guard_posejoin_fera_exp1_2', true, false]);
			lineArray.push(['guard_posejoin_fera_exp1_3', true, false]);
			lineArray.push(['guard_posejoin_fera_exp1_4', true, false]);
			lineArray.push(['guard_posejoin_fera_exp1_5', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseJoin_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_tittyFuckPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_posejoin_paizuri_exp3_1', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp3_2', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp3_3', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp3_4', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_posejoin_paizuri_exp2_1', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp2_2', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp2_3', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_posejoin_paizuri_exp1_1', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp1_2', true, false]);
			lineArray.push(['thug_posejoin_paizuri_exp1_3', true, false]);
		}			
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['goblin_posejoin_paizuri_exp3_1', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp3_2', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp3_3', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp3_4', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['goblin_posejoin_paizuri_exp2_1', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp2_2', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp2_3', true, false]);
		}
		else {
			lineArray.push(['goblin_posejoin_paizuri_exp1_1', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp1_2', true, false]);
			lineArray.push(['goblin_posejoin_paizuri_exp1_3', true, false]);
		}		
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseJoin_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyJustTookPussyVirginity = this._enemyJustTookPussyVirginity;
	let sexSkillReactionScore = actor.reactionScore_pussySexPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(enemyJustTookPussyVirginity) {
			lineArray.push(['thug_posejoin_sex_exp0_1', true, false]);
			lineArray.push(['thug_posejoin_sex_exp0_2', true, false]);
			lineArray.push(['thug_posejoin_sex_exp0_3', true, false]);
			lineArray.push(['thug_posejoin_sex_exp0_4', true, false]);
			lineArray.push(['thug_posejoin_sex_exp0_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_posejoin_sex_exp3_1', true, false]);
			lineArray.push(['thug_posejoin_sex_exp3_2', true, false]);
			lineArray.push(['thug_posejoin_sex_exp3_3', true, false]);
			lineArray.push(['thug_posejoin_sex_exp3_4', true, false]);
			lineArray.push(['thug_posejoin_sex_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_posejoin_sex_exp2_1', true, false]);
			lineArray.push(['thug_posejoin_sex_exp2_2', true, false]);
			lineArray.push(['thug_posejoin_sex_exp2_3', true, false]);
			lineArray.push(['thug_posejoin_sex_exp2_4', true, false]);
			lineArray.push(['thug_posejoin_sex_exp2_5', true, false]);
		}
		else {
			lineArray.push(['thug_posejoin_sex_exp1_1', true, false]);
			lineArray.push(['thug_posejoin_sex_exp1_2', true, false]);
			lineArray.push(['thug_posejoin_sex_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(enemyJustTookPussyVirginity) {
			lineArray.push(['prisoner_posejoin_sex_exp0_1', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp0_2', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp0_3', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp0_4', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp0_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_posejoin_sex_exp3_1', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp3_2', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp3_3', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp3_4', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_posejoin_sex_exp2_1', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp2_2', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp2_3', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp2_4', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_posejoin_sex_exp1_1', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp1_2', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp1_3', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp1_4', true, false]);
			lineArray.push(['prisoner_posejoin_sex_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseJoin_AnalSex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyJustTookAnalVirginity = this._enemyJustTookAnalVirginity;
	let reactionScore = actor.getReactionScore();
	let sexSkillReactionScore = actor.reactionScore_analSexPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			lineArray.push(['thug_posejoin_analsex_exp3_1', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp3_2', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp3_3', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp3_4', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['thug_posejoin_analsex_exp2_1', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp2_2', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp2_3', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp2_4', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp2_5', true, false]);
		}
		else {
			lineArray.push(['thug_posejoin_analsex_exp1_1', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp1_2', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp1_3', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp1_4', true, false]);
			lineArray.push(['thug_posejoin_analsex_exp1_5', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			lineArray.push(['guard_posejoin_analsex_exp3_1', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp3_2', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp3_3', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp3_4', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['guard_posejoin_analsex_exp2_1', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp2_2', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp2_3', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp2_4', true, false]);
		}
		else {
			lineArray.push(['guard_posejoin_analsex_exp1_1', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp1_2', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp1_3', true, false]);
			lineArray.push(['guard_posejoin_analsex_exp1_4', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(enemyJustTookAnalVirginity) {
			lineArray.push(['rogue_posejoin_analsex_exp0_1', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp0_2', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			if(actor.analSexLvl() >= 6) lineArray.push(['rogue_posejoin_analsex_exp3_1', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp3_2', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp3_3', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp3_4', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['rogue_posejoin_analsex_exp2_1', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp2_2', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp2_3', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp2_4', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp2_5', true, false]);
		}
		else {
			lineArray.push(['rogue_posejoin_analsex_exp1_1', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp1_2', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp1_3', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp1_4', true, false]);
			lineArray.push(['rogue_posejoin_analsex_exp1_5', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(enemyJustTookAnalVirginity) {
			lineArray.push(['prisoner_posejoin_analsex_exp0_1', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp0_2', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp0_3', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp0_4', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp0_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
			lineArray.push(['prisoner_posejoin_analsex_exp3_1', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp3_2', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp3_3', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp3_4', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp3_5', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
			lineArray.push(['prisoner_posejoin_analsex_exp2_1', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp2_2', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp2_3', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp2_4', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_posejoin_analsex_exp1_1', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp1_2', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp1_3', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp1_4', true, false]);
			lineArray.push(['prisoner_posejoin_analsex_exp1_5', true, false]);
		}
	}
	
	
	return lineArray;
};

////////////
// Karryn Orgasm & Ejaculation

Rem_Lines.prototype.karrynline_karrynOrgasm = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let orgasmReactionScore = actor.getOrgasmReactionScore();
	let lastHitMouth = this._gotOrgasmFromSkillType === JUST_SKILLTYPE_ENEMY_KISS || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_KARRYN_KISSING || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_ENEMY_BLOWJOB || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_KARRYN_BLOWJOB || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_ENEMY_CUM_SWALLOW;
	let lastHitButt = this._gotOrgasmFromSkillType === JUST_SKILLTYPE_ENEMY_ANAL_SEX || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE || this._gotOrgasmFromSkillType === JUST_SKILLTYPE_KARRYN_ANAL_SEX;
	
	if(lastHitMouth) {
		if(orgasmReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_orgasm_mouth_exp3_1', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp3_2', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp3_3', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp3_4', false, false]);
		}
		else if(orgasmReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_orgasm_mouth_exp2_1', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp2_2', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp2_3', false, false]);
		}
		else if(orgasmReactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['karryn_orgasm_mouth_exp1_1', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp1_2', false, false]);
			lineArray.push(['karryn_orgasm_mouth_exp1_3', false, false]);
		}
		else {
			lineArray.push(['karryn_orgasm_mouth_exp0_1', false, false]);
		}
	}
	else if(lastHitButt) {
		if(orgasmReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_orgasm_butt_exp3_1', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp3_2', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp3_3', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp3_4', false, false]);
		}
		else if(orgasmReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_orgasm_butt_exp2_1', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp2_2', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp2_3', false, false]);
		}
		else if(orgasmReactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['karryn_orgasm_butt_exp1_1', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp1_2', false, false]);
			lineArray.push(['karryn_orgasm_butt_exp1_3', false, false]);
		}
		else {
			lineArray.push(['karryn_orgasm_butt_exp0_1', false, false]);
		}
	}
	else {
		if(orgasmReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_orgasm_exp3_1', false, false]);
			lineArray.push(['karryn_orgasm_exp3_2', false, false]);
			lineArray.push(['karryn_orgasm_exp3_3', false, false]);
		}
		else if(orgasmReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_orgasm_exp2_1', false, false]);
			lineArray.push(['karryn_orgasm_exp2_2', false, false]);
			lineArray.push(['karryn_orgasm_exp2_3', false, false]);
		}
		else if(orgasmReactionScore >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['karryn_orgasm_exp1_1', false, false]);
			lineArray.push(['karryn_orgasm_exp1_2', false, false]);
		}
		else {
			lineArray.push(['karryn_orgasm_exp0_1', false, false]);
		}
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyEjaculates = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	if(bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_random_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp3_5', false, false]);
	}
	else if(bukkakeReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_random_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_random_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_random_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyBukkake_Random = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	if(bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_bukkake_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp3_5', false, false]);
	}
	else if(bukkakeReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_bukkake_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_bukkake_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_bukkake_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyBukkake_Face = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	if(bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_face_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp3_5', false, false]);
	}
	else if(bukkakeReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_face_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_face_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_face_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyBukkake_Boobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	if(bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_boobs_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp3_5', false, false]);
	}
	else if(bukkakeReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_boobs_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_boobs_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_boobs_exp1_4', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyBukkake_Arms = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyBukkake_Legs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyCumIntoMug = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let swallowReactionScore = actor.getSwallowReactionScore();
	
	if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_mug_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp3_5', false, false]);
	}
	else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_mug_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_mug_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_mug_exp1_5', false, false]);
	}
	
	
	return lineArray;
};



Rem_Lines.prototype.karrynline_enemyBukkake_Butt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	if(bukkakeReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_butt_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp3_5', false, false]);
	}
	else if(bukkakeReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_butt_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_butt_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_butt_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynSwallows = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let swallowReactionScore = actor.getSwallowReactionScore();
	
	if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_swallow_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp3_5', false, false]);
	}
	else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_swallow_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_swallow_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_swallow_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPussyCreampie = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyCreampieReactionScore = actor.getPussyCreampieReactionScore();
	
	if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_pussy_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp3_5', false, false]);
	}
	else if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_pussy_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp2_5', false, false]);
	}
	else if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['karryn_ejaculate_pussy_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp1_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_pussy_exp0_1', false, false]);
		lineArray.push(['karryn_ejaculate_pussy_exp0_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynAnalCreampie = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let analCreampieReactionScore = actor.getAnalCreampieReactionScore();
	
	if(analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_anal_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp3_5', false, false]);
	}
	else if(analCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_anal_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp2_5', false, false]);
	}
	else if(analCreampieReactionScore  >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['karryn_ejaculate_anal_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp1_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_anal_exp0_1', false, false]);
		lineArray.push(['karryn_ejaculate_anal_exp0_2', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyCumOntoDesk = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_ejaculate_desk_exp3_1', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp3_2', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp3_3', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp3_4', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_ejaculate_desk_exp2_1', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp2_2', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp2_3', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp2_4', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_ejaculate_desk_exp1_1', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp1_2', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp1_3', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp1_4', false, false]);
		lineArray.push(['karryn_ejaculate_desk_exp1_5', false, false]);
	}
	
	return lineArray;
};


////////////
// Enemy Ejaculation

Rem_Lines.prototype.enemyline_enemyEjaculates = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = 0; 
	let reactionScore = actor.getReactionScore();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyGoblinPassive();
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['goblin_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['goblin_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['goblin_ejaculate_random_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyThugPassive();
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['thug_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['thug_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['thug_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['thug_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['thug_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['thug_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['thug_ejaculate_random_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['thug_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['thug_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['thug_ejaculate_random_exp1_4', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyGuardPassive();
		
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['guard_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['guard_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['guard_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['guard_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['guard_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['guard_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['guard_ejaculate_random_exp2_4', true, false]);
		}
		else {
			lineArray.push(['guard_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['guard_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['guard_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['guard_ejaculate_random_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_NERD_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['nerd_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['nerd_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['nerd_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp1_4', true, false]);
			lineArray.push(['nerd_ejaculate_random_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['rogue_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['rogue_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['rogue_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp1_4', true, false]);
			lineArray.push(['rogue_ejaculate_random_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_HOMELESS_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['homeless_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['homeless_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['homeless_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp1_4', true, false]);
			lineArray.push(['homeless_ejaculate_random_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_ORC_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['orc_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['orc_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['orc_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['orc_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['orc_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['orc_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['orc_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['orc_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['orc_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['orc_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['orc_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['orc_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['orc_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['orc_ejaculate_random_exp1_4', true, false]);
			lineArray.push(['orc_ejaculate_random_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_LIZARDMAN_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['lizardman_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['lizardman_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['lizardman_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp1_4', true, false]);
			lineArray.push(['lizardman_ejaculate_random_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyPrisonerPassive();
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['prisoner_ejaculate_random_exp3_1', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp3_2', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp3_3', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp3_4', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['prisoner_ejaculate_random_exp2_1', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp2_2', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp2_3', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp2_4', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_ejaculate_random_exp1_1', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp1_2', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp1_3', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp1_4', true, false]);
			lineArray.push(['prisoner_ejaculate_random_exp1_5', true, false]);
		}
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyBukkake_Random = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	let enemyTypeReactionScore = 0;
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['goblin_ejaculate_bukkake_exp3_1', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp3_2', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp3_3', true, false]);	
			lineArray.push(['goblin_ejaculate_bukkake_exp3_4', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp3_5', true, false]);
		}
		else if(bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['goblin_ejaculate_bukkake_exp2_1', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp2_2', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp2_3', true, false]);	
		}
		else {
			lineArray.push(['goblin_ejaculate_bukkake_exp1_1', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp1_2', true, false]);
			lineArray.push(['goblin_ejaculate_bukkake_exp1_3', true, false]);	
		}	
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_ejaculate_bukkake_exp3_1', true, false]);
			lineArray.push(['thug_ejaculate_bukkake_exp3_2', true, false]);
			lineArray.push(['thug_ejaculate_bukkake_exp3_3', true, false]);	
			lineArray.push(['thug_ejaculate_bukkake_exp3_4', true, false]);	
			lineArray.push(['thug_ejaculate_bukkake_exp3_5', true, false]);
		}
		else if(bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_ejaculate_bukkake_exp2_1', true, false]);
			lineArray.push(['thug_ejaculate_bukkake_exp2_2', true, false]);
			lineArray.push(['thug_ejaculate_bukkake_exp2_3', true, false]);	
			lineArray.push(['thug_ejaculate_bukkake_exp2_4', true, false]);	
			lineArray.push(['thug_ejaculate_bukkake_exp2_5', true, false]);	
		}
		else {
			lineArray.push(['thug_ejaculate_bukkake_exp1_1', true, false]);
			lineArray.push(['thug_ejaculate_bukkake_exp1_2', true, false]);
			lineArray.push(['thug_ejaculate_bukkake_exp1_3', true, false]);	
			lineArray.push(['thug_ejaculate_bukkake_exp1_4', true, false]);	
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_ejaculate_bukkake_exp3_1', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp3_2', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp3_3', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp3_4', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp3_5', true, false]);
		}
		else if(bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_ejaculate_bukkake_exp2_1', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp2_2', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp2_3', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp2_4', true, false]);
		}
		else {
			lineArray.push(['guard_ejaculate_bukkake_exp1_1', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp1_2', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp1_3', true, false]);
			lineArray.push(['guard_ejaculate_bukkake_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['prisoner_ejaculate_bukkake_exp3_1', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp3_2', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp3_3', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp3_4', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp3_5', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp3_6', true, false]);
		}
		else if(bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['prisoner_ejaculate_bukkake_exp2_1', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp2_2', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp2_3', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp2_4', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_ejaculate_bukkake_exp1_1', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp1_2', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp1_3', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp1_4', true, false]);
			lineArray.push(['prisoner_ejaculate_bukkake_exp1_5', true, false]);
		}
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyBukkake_Face = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = 0;
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
		if(this._visitor_isFan) {
			if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
				lineArray.push(['visitor_fan_ejaculate_face_exp3_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp3_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp3_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp3_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp3_5', true, false]);
			}
			else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
				lineArray.push(['visitor_fan_ejaculate_face_exp2_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp2_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp2_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp2_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp2_5', true, false]);
			}
			else {
				lineArray.push(['visitor_fan_ejaculate_face_exp1_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp1_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp1_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp1_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_face_exp1_5', true, false]);
			}	
		}
		else if(this._visitor_isPervert) {
			if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
				lineArray.push(['visitor_perv_ejaculate_face_exp3_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp3_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp3_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp3_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp3_5', true, false]);
			}
			else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
				lineArray.push(['visitor_perv_ejaculate_face_exp2_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp2_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp2_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp2_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp2_5', true, false]);
			}
			else {
				lineArray.push(['visitor_perv_ejaculate_face_exp1_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp1_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp1_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp1_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_face_exp1_5', true, false]);
			}	
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyBukkake_Boobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = 0;
	let bukkakeReactionScore = actor.getBukkakeReactionScore();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
		if(this._visitor_isFan) {
			if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
				lineArray.push(['visitor_fan_ejaculate_boobs_exp3_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp3_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp3_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp3_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp3_5', true, false]);
			}
			else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
				lineArray.push(['visitor_fan_ejaculate_boobs_exp2_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp2_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp2_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp2_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp2_5', true, false]);
			}
			else {
				lineArray.push(['visitor_fan_ejaculate_boobs_exp1_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp1_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp1_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp1_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_boobs_exp1_5', true, false]);
			}	
		}
		else if(this._visitor_isPervert) {
			if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
				lineArray.push(['visitor_perv_ejaculate_boobs_exp3_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp3_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp3_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp3_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp3_5', true, false]);
			}
			else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
				lineArray.push(['visitor_perv_ejaculate_boobs_exp2_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp2_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp2_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp2_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp2_5', true, false]);
			}
			else {
				lineArray.push(['visitor_perv_ejaculate_boobs_exp1_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp1_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp1_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp1_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_boobs_exp1_5', true, false]);
			}	
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyBukkake_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_tittyFuckPassive();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
			lineArray.push(['goblin_ejaculate_paizuri_exp3_1', true, false]);
			lineArray.push(['goblin_ejaculate_paizuri_exp3_2', true, false]);
			lineArray.push(['goblin_ejaculate_paizuri_exp3_3', true, false]);	
			lineArray.push(['goblin_ejaculate_paizuri_exp3_4', true, false]);
		}
		else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
			lineArray.push(['goblin_ejaculate_paizuri_exp2_1', true, false]);
			lineArray.push(['goblin_ejaculate_paizuri_exp2_2', true, false]);
			lineArray.push(['goblin_ejaculate_paizuri_exp2_3', true, false]);	
			lineArray.push(['goblin_ejaculate_paizuri_exp2_4', true, false]);	
		}
		else {
			lineArray.push(['goblin_ejaculate_paizuri_exp1_1', true, false]);
			lineArray.push(['goblin_ejaculate_paizuri_exp1_2', true, false]);
			lineArray.push(['goblin_ejaculate_paizuri_exp1_3', true, false]);	
		}		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyBukkake_Arms = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyBukkake_Legs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	
	return lineArray;
};


Rem_Lines.prototype.enemyline_enemyCumIntoMug = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyCumOntoDesk = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(this._visitor_isFan) {
		if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
			lineArray.push(['visitor_fan_ejaculate_desk_exp3_1', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp3_2', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp3_3', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp3_4', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp3_5', true, false]);
		}
		else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
			lineArray.push(['visitor_fan_ejaculate_desk_exp2_1', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp2_2', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp2_3', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp2_4', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp2_5', true, false]);
		}
		else {
			lineArray.push(['visitor_fan_ejaculate_desk_exp1_1', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp1_2', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp1_3', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp1_4', true, false]);
			lineArray.push(['visitor_fan_ejaculate_desk_exp1_5', true, false]);
		}	
	}
	else if(this._visitor_isPervert) {
		if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
			lineArray.push(['visitor_perv_ejaculate_desk_exp3_1', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp3_2', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp3_3', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp3_4', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp3_5', true, false]);
		}
		else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
			lineArray.push(['visitor_perv_ejaculate_desk_exp2_1', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp2_2', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp2_3', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp2_4', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp2_5', true, false]);
		}
		else {
			lineArray.push(['visitor_perv_ejaculate_desk_exp1_1', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp1_2', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp1_3', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp1_4', true, false]);
			lineArray.push(['visitor_perv_ejaculate_desk_exp1_5', true, false]);
		}	
	}	

	
	return lineArray;
};



Rem_Lines.prototype.enemyline_enemyBukkake_Butt = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bukkakeReactionScore = actor.getBukkakeReactionScore();

	
	return lineArray;
};

Rem_Lines.prototype.enemyline_karrynSwallows = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let swallowReactionScore = actor.getSwallowReactionScore();
	let enemyTypeReactionScore = 0;
	
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_ejaculate_swallow_exp3_1', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp3_2', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp3_3', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp3_4', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp3_5', true, false]);
		}
		else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_ejaculate_swallow_exp2_1', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp2_2', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp2_3', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_ejaculate_swallow_exp1_1', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp1_2', true, false]);
			lineArray.push(['thug_ejaculate_swallow_exp1_3', true, false]);	
			lineArray.push(['thug_ejaculate_swallow_exp1_4', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['goblin_ejaculate_swallow_exp3_1', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp3_2', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp3_3', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp3_4', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp3_5', true, false]);
		}
		else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['goblin_ejaculate_swallow_exp2_1', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp2_2', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp2_3', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp2_4', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_ejaculate_swallow_exp1_1', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp1_2', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp1_3', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp1_4', true, false]);
			lineArray.push(['goblin_ejaculate_swallow_exp1_5', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_ejaculate_swallow_exp3_1', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp3_2', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp3_3', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp3_4', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp3_5', true, false]);
		}
		else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_ejaculate_swallow_exp2_1', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp2_2', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp2_3', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp2_4', true, false]);
		}
		else {
			lineArray.push(['guard_ejaculate_swallow_exp1_1', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp1_2', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp1_3', true, false]);
			lineArray.push(['guard_ejaculate_swallow_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_VISITOR_MALE_TAG) {
		enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
		if(this._visitor_isFan) {
			if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
				lineArray.push(['visitor_fan_ejaculate_swallow_exp3_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp3_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp3_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp3_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp3_5', true, false]);
			}
			else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
				lineArray.push(['visitor_fan_ejaculate_swallow_exp2_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp2_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp2_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp2_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp2_5', true, false]);
			}
			else {
				lineArray.push(['visitor_fan_ejaculate_swallow_exp1_1', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp1_2', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp1_3', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp1_4', true, false]);
				lineArray.push(['visitor_fan_ejaculate_swallow_exp1_5', true, false]);
			}	
		}
		else if(this._visitor_isPervert) {
			if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
				lineArray.push(['visitor_perv_ejaculate_swallow_exp3_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp3_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp3_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp3_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp3_5', true, false]);
			}
			else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
				lineArray.push(['visitor_perv_ejaculate_swallow_exp2_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp2_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp2_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp2_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp2_5', true, false]);
			}
			else {
				lineArray.push(['visitor_perv_ejaculate_swallow_exp1_1', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp1_2', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp1_3', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp1_4', true, false]);
				lineArray.push(['visitor_perv_ejaculate_swallow_exp1_5', true, false]);
			}	
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['prisoner_ejaculate_swallow_exp3_1', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp3_2', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp3_3', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp3_4', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp3_5', true, false]);
		}
		else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['prisoner_ejaculate_swallow_exp2_1', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp2_2', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp2_3', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp2_4', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_ejaculate_swallow_exp1_1', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp1_2', true, false]);
			lineArray.push(['prisoner_ejaculate_swallow_exp1_3', true, false]);	
			lineArray.push(['prisoner_ejaculate_swallow_exp1_4', true, false]);	
			lineArray.push(['prisoner_ejaculate_swallow_exp1_5', true, false]);	
		}
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_karrynPussyCreampie = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyCreampieReactionScore = actor.getPussyCreampieReactionScore();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_ejaculate_pussy_exp3_1', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp3_2', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp3_3', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp3_4', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp3_5', true, false]);
		}
		else if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_ejaculate_pussy_exp2_1', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp2_2', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp2_3', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_ejaculate_pussy_exp1_1', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp1_2', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp1_3', true, false]);
			lineArray.push(['thug_ejaculate_pussy_exp1_4', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['goblin_ejaculate_pussy_exp3_1', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp3_2', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp3_3', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp3_4', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp3_5', true, false]);
		}
		else if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['goblin_ejaculate_pussy_exp2_1', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp2_2', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp2_3', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp2_4', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_ejaculate_pussy_exp1_1', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp1_2', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp1_3', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp1_4', true, false]);
			lineArray.push(['goblin_ejaculate_pussy_exp1_5', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_ejaculate_pussy_exp3_1', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp3_2', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp3_3', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp3_4', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp3_5', true, false]);
		}
		else if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_ejaculate_pussy_exp2_1', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp2_2', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp2_3', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp2_4', true, false]);
		}
		else {
			lineArray.push(['guard_ejaculate_pussy_exp1_1', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp1_2', true, false]);
			lineArray.push(['guard_ejaculate_pussy_exp1_3', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['prisoner_ejaculate_pussy_exp3_1', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp3_2', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp3_3', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp3_4', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp3_5', true, false]);
		}
		else if(pussyCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['prisoner_ejaculate_pussy_exp2_1', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp2_2', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp2_3', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp2_4', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_ejaculate_pussy_exp1_1', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp1_2', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp1_3', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp1_4', true, false]);
			lineArray.push(['prisoner_ejaculate_pussy_exp1_5', true, false]);
		}
	}

	
	return lineArray;
};
Rem_Lines.prototype.enemyline_karrynAnalCreampie = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let analCreampieReactionScore = actor.getAnalCreampieReactionScore();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['thug_ejaculate_anal_exp3_1', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp3_2', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp3_3', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp3_4', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp3_5', true, false]);
		}
		else if(analCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['thug_ejaculate_anal_exp2_1', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp2_2', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp2_3', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp2_4', true, false]);
		}
		else {
			lineArray.push(['thug_ejaculate_anal_exp1_1', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp1_2', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp1_3', true, false]);
			lineArray.push(['thug_ejaculate_anal_exp1_4', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['goblin_ejaculate_anal_exp3_1', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp3_2', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp3_3', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp3_4', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp3_5', true, false]);
		}
		else if(analCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['goblin_ejaculate_anal_exp2_1', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp2_2', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp2_3', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp2_4', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp2_5', true, false]);
		}
		else {
			lineArray.push(['goblin_ejaculate_anal_exp1_1', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp1_2', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp1_3', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp1_4', true, false]);
			lineArray.push(['goblin_ejaculate_anal_exp1_5', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {	
		if(analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_ejaculate_anal_exp3_1', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp3_2', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp3_3', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp3_4', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp3_5', true, false]);
		}
		else if(analCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_ejaculate_anal_exp2_1', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp2_2', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp2_3', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp2_4', true, false]);
		}
		else {
			lineArray.push(['guard_ejaculate_anal_exp1_1', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp1_2', true, false]);
			lineArray.push(['guard_ejaculate_anal_exp1_3', true, false]);
		}	
	}
	else if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['rogue_ejaculate_anal_exp3_1', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp3_2', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp3_3', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp3_4', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp3_5', true, false]);
		}
		else if(analCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['rogue_ejaculate_anal_exp2_1', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp2_2', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp2_3', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp2_4', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp2_5', true, false]);
		}
		else {
			lineArray.push(['rogue_ejaculate_anal_exp1_1', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp1_2', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp1_3', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp1_4', true, false]);
			lineArray.push(['rogue_ejaculate_anal_exp1_5', true, false]);
		}		
	}
	else if(this._enemyType == ENEMYTYPE_SLIME_TAG) {
		
	}
	else if(this._enemyType == ENEMYTYPE_PRISONER_TAG) {
		if(analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['prisoner_ejaculate_anal_exp3_1', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp3_2', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp3_3', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp3_4', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp3_5', true, false]);
		}
		else if(analCreampieReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['prisoner_ejaculate_anal_exp2_1', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp2_2', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp2_3', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp2_4', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp2_5', true, false]);
		}
		else {
			lineArray.push(['prisoner_ejaculate_anal_exp1_1', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp1_2', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp1_3', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp1_4', true, false]);
			lineArray.push(['prisoner_ejaculate_anal_exp1_5', true, false]);
		}		
	}
	
	
	
	return lineArray;
};

////////////
// Enemy Pose Start Lines

//Karryn's line
Rem_Lines.prototype.karrynline_enemyPoseStart_Handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_handjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_handjob_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp3_3', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp3_4', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_handjob_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp2_3', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp2_4', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_handjob_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp1_3', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp1_4', false, false]);
		lineArray.push(['enemy_posestart_handjob_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPoseStart_Blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_blowjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_fera_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_fera_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_fera_exp3_3', false, false]);
		lineArray.push(['enemy_posestart_fera_exp3_4', false, false]);
		lineArray.push(['enemy_posestart_fera_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_fera_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_fera_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_fera_exp2_3', false, false]);
		lineArray.push(['enemy_posestart_fera_exp2_4', false, false]);
		lineArray.push(['enemy_posestart_fera_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_fera_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_fera_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_fera_exp1_3', false, false]);
		lineArray.push(['enemy_posestart_fera_exp1_4', false, false]);
		lineArray.push(['enemy_posestart_fera_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_enemyPoseStart_KickCounter = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let hadKickCounteredBefore = actor._recordSexPose_KickCounterCount > 1;
	let reactionScore = actor.getReactionScore();
	let sexSkillReactionScore = actor.reactionScore_pussySexPassive();
	
	if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ && hadKickCounteredBefore) {
		lineArray.push(['enemy_posestart_kickcounter_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp3_3', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp3_4', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ && hadKickCounteredBefore) {
		lineArray.push(['enemy_posestart_kickcounter_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp2_3', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp2_4', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp2_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV1_REQ && hadKickCounteredBefore) {
		lineArray.push(['enemy_posestart_kickcounter_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp1_3', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp1_4', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp1_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_kickcounter_exp0_1', false, false]);
		lineArray.push(['enemy_posestart_kickcounter_exp0_2', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseStart_Cunnilingus = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_cunniPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_cunni_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_cunni_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_cunni_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_cunni_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_cunni_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_cunni_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_cunni_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_cunni_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_cunni_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseStart_PussySex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_pussySexPassive();
	let enemyJustTookPussyVirginity = this._enemyJustTookPussyVirginity;
	let enemyTypeIsInmate = this._enemyTypeIsInmate;
	
	if(enemyJustTookPussyVirginity) {
		lineArray.push(['enemy_posestart_sex_exp0_1', false, false]);
		actor._remLine_saidLostPussyVirginity = true;
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_sex_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_sex_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_sex_exp3_3', false, false]);
		lineArray.push(['enemy_posestart_sex_exp3_4', false, false]);
		lineArray.push(['enemy_posestart_sex_exp3_5', false, false]);
		lineArray.push(['enemy_posestart_sex_exp3_6', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_sex_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_sex_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_sex_exp2_3', false, false]);
		lineArray.push(['enemy_posestart_sex_exp2_4', false, false]);
		lineArray.push(['enemy_posestart_sex_exp2_5', false, false]);
		lineArray.push(['enemy_posestart_sex_exp2_6', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_sex_exp1_1', false, false]);
		if(enemyTypeIsInmate) lineArray.push(['enemy_posestart_sex_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_sex_exp1_3', false, false]);
		lineArray.push(['enemy_posestart_sex_exp1_4', false, false]);
		lineArray.push(['enemy_posestart_sex_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseStart_AnalSex = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_analSexPassive();
	let enemyJustTookAnalVirginity = this._enemyJustTookAnalVirginity;
	let notVirgin = actor._firstPussySexDate;
	let havingSex = actor.isBodySlotPenis(PUSSY_ID)
	
	if(enemyJustTookAnalVirginity) {
		lineArray.push(['enemy_posestart_analsex_exp0_1', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp0_2', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp0_3', false, false]);
		actor._remLine_saidLostAnalVirginity = true;
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_analsex_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp3_2', false, false]);
		if(notVirgin) lineArray.push(['enemy_posestart_analsex_exp3_3', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp3_4', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_PA_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_analsex_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp2_3', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp2_4', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_analsex_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp1_3', false, false]);
		if(notVirgin) lineArray.push(['enemy_posestart_analsex_exp1_4', false, false]);
		lineArray.push(['enemy_posestart_analsex_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseStart_Rimjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_rimjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_rimjob_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_rimjob_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_rimjob_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_rimjob_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_rimjob_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_rimjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_rimjob_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_rimjob_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_rimjob_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseStart_Footjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_footjobPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_footjob_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_footjob_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_footjob_exp3_3', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_footjob_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_footjob_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_footjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_footjob_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_footjob_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_footjob_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_enemyPoseStart_Paizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let sexSkillReactionScore = actor.reactionScore_tittyFuckPassive();
	
	if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ) {
		lineArray.push(['enemy_posestart_paizuri_exp3_1', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp3_2', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp3_3', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp3_4', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp3_5', false, false]);
	}
	else if(sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ) {
		lineArray.push(['enemy_posestart_paizuri_exp2_1', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp2_2', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp2_3', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp2_4', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp2_5', false, false]);
	}
	else {
		lineArray.push(['enemy_posestart_paizuri_exp1_1', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp1_2', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp1_3', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp1_4', false, false]);
		lineArray.push(['enemy_posestart_paizuri_exp1_5', false, false]);
	}
	
	return lineArray;
};

//Specific enemy
Rem_Lines.prototype.enemyline_enemyPoseStart_ThugGangbang = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let hadThugGangbangBefore = actor._recordSexPose_ThugGangbangCount > 1;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && hadThugGangbangBefore) {
		lineArray.push(['thug_posestart_gangbang_exp3_1', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp3_2', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp3_3', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp3_4', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && hadThugGangbangBefore) {
		lineArray.push(['thug_posestart_gangbang_exp2_1', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp2_2', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp2_3', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && hadThugGangbangBefore) {
		lineArray.push(['thug_posestart_gangbang_exp1_1', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp1_2', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp1_3', true, false]);
	}
	else {
		lineArray.push(['thug_posestart_gangbang_exp0_1', true, false]);
		lineArray.push(['thug_posestart_gangbang_exp0_2', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseStart_KickCounter = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let hadKickCounteredBefore = actor._recordSexPose_KickCounterCount > 1;
	let knownDpLover = actor.hasPassive(PASSIVE_DOUBLE_PEN_COUNT_TWO_ID) && actor.hasEdict(EDICT_PUBLISH_RECORDS_THREE)
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_THUG_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && hadKickCounteredBefore) {
			if(knownDpLover) {
				lineArray.push(['thug_posestart_kickcounter_exp3_1', true, false]);
				lineArray.push(['thug_posestart_kickcounter_exp3_4', true, false]);
			}
			lineArray.push(['thug_posestart_kickcounter_exp3_2', true, false]);
			lineArray.push(['thug_posestart_kickcounter_exp3_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && hadKickCounteredBefore) {
			lineArray.push(['thug_posestart_kickcounter_exp2_1', true, false]);
			lineArray.push(['thug_posestart_kickcounter_exp2_2', true, false]);
			lineArray.push(['thug_posestart_kickcounter_exp2_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && hadKickCounteredBefore) {
			lineArray.push(['thug_posestart_kickcounter_exp1_1', true, false]);
			lineArray.push(['thug_posestart_kickcounter_exp1_2', true, false]);
			lineArray.push(['thug_posestart_kickcounter_exp1_3', true, false]);
		}
		else {
			lineArray.push(['thug_posestart_kickcounter_exp0_1', true, false]);
			lineArray.push(['thug_posestart_kickcounter_exp0_2', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && hadKickCounteredBefore) {
			lineArray.push(['guard_posestart_kickcounter_exp3_1', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp3_2', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp3_3', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp3_4', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && hadKickCounteredBefore) {
			lineArray.push(['guard_posestart_kickcounter_exp2_1', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp2_2', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp2_3', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp2_4', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp2_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && hadKickCounteredBefore) {
			lineArray.push(['guard_posestart_kickcounter_exp1_1', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp1_2', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp1_3', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp1_4', true, false]);
		}
		else {
			lineArray.push(['guard_posestart_kickcounter_exp0_1', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp0_2', true, false]);
			lineArray.push(['guard_posestart_kickcounter_exp0_3', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_GoblinCunnilingus = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let firstGoblinCunni = actor._recordSexPose_GoblinCunnilingusCount < 1;
	let notVirgin = actor._firstPussySexDate;
	
	if(firstGoblinCunni) {
		lineArray.push(['goblin_posestart_cunni_exp0_1', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['goblin_posestart_cunni_exp3_1', true, false]);
		lineArray.push(['goblin_posestart_cunni_exp3_2', true, false]);
		if(notVirgin) lineArray.push(['goblin_posestart_cunni_exp3_3', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['goblin_posestart_cunni_exp2_1', true, false]);
		lineArray.push(['goblin_posestart_cunni_exp2_2', true, false]);
		lineArray.push(['goblin_posestart_cunni_exp2_3', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ) {
		lineArray.push(['goblin_posestart_cunni_exp1_1', true, false]);
		lineArray.push(['goblin_posestart_cunni_exp1_2', true, false]);
		lineArray.push(['goblin_posestart_cunni_exp1_3', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseStart_Rimjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let firstRimjob = actor._recordRimjobCount <= 1;
	
	if(this._enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(firstRimjob) {
			lineArray.push(['rogue_posestart_rimjob_exp0_1', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp0_2', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['rogue_posestart_rimjob_exp3_1', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp3_2', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp3_3', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp3_4', true, false]);
			if(actor.rimjobLvl() >= 3) lineArray.push(['rogue_posestart_rimjob_exp3_5', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['rogue_posestart_rimjob_exp2_1', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp2_2', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp2_3', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp2_4', true, false]);
		}
		else {
			lineArray.push(['rogue_posestart_rimjob_exp1_1', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp1_2', true, false]);
			lineArray.push(['rogue_posestart_rimjob_exp1_3', true, false]);
		}
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_posestart_rimjob_exp3_1', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp3_2', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp3_3', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp3_4', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_posestart_rimjob_exp2_1', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp2_2', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp2_3', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp2_4', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp2_5', true, false]);
		}
		else {
			lineArray.push(['guard_posestart_rimjob_exp1_1', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp1_2', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp1_3', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp1_4', true, false]);
			lineArray.push(['guard_posestart_rimjob_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseStart_Footjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let firstFootjob = actor._recordFootjobCount <= 1;
	
	if(this._enemyType == ENEMYTYPE_NERD_TAG) {
		if(firstFootjob) {
			lineArray.push(['nerd_posestart_footjob_exp0_1', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp0_2', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp0_3', true, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['nerd_posestart_footjob_exp3_1', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp3_2', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp3_3', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp3_4', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp3_5', true, false]);
		}
		if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['nerd_posestart_footjob_exp2_1', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp2_2', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp2_3', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp2_4', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp2_5', true, false]);
		}
		else {
			lineArray.push(['nerd_posestart_footjob_exp1_1', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp1_2', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp1_3', true, false]);
			lineArray.push(['nerd_posestart_footjob_exp1_4', true, false]);
		}
	}
	return lineArray;
};
Rem_Lines.prototype.enemyline_enemyPoseStart_SlimeAnal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_GuardGangbang = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let hadGuardGangbangBefore = actor._recordSexPose_GuardGangbangCount > 1;
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore  >= VAR_DEF_RS_LV3_REQ && hadGuardGangbangBefore) {
		lineArray.push(['guard_posestart_gangbang_exp3_1', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp3_2', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp3_3', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp3_4', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp3_5', true, false]);
	}
	else if(reactionScore  >= VAR_DEF_RS_LV2_REQ && hadGuardGangbangBefore) {
		lineArray.push(['guard_posestart_gangbang_exp2_1', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp2_2', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp2_3', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp2_4', true, false]);
	}
	else if(reactionScore  >= VAR_DEF_RS_LV1_REQ && hadGuardGangbangBefore) {
		lineArray.push(['guard_posestart_gangbang_exp1_1', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp1_2', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp1_3', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp1_4', true, false]);
	}
	else {
		lineArray.push(['guard_posestart_gangbang_exp0_1', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp0_2', true, false]);
		lineArray.push(['guard_posestart_gangbang_exp0_3', true, false]);
	}	
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_HandjobStanding = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_posestart_handjob_exp3_1', true, false]);
			lineArray.push(['guard_posestart_handjob_exp3_2', true, false]);
			lineArray.push(['guard_posestart_handjob_exp3_3', true, false]);
			lineArray.push(['guard_posestart_handjob_exp3_4', true, false]);
			lineArray.push(['guard_posestart_handjob_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_posestart_handjob_exp2_1', true, false]);
			lineArray.push(['guard_posestart_handjob_exp2_2', true, false]);
			lineArray.push(['guard_posestart_handjob_exp2_3', true, false]);
			lineArray.push(['guard_posestart_handjob_exp2_4', true, false]);
			lineArray.push(['guard_posestart_handjob_exp2_5', true, false]);
		}
		else {
			lineArray.push(['guard_posestart_handjob_exp1_1', true, false]);
			lineArray.push(['guard_posestart_handjob_exp1_2', true, false]);
			lineArray.push(['guard_posestart_handjob_exp1_3', true, false]);
			lineArray.push(['guard_posestart_handjob_exp1_4', true, false]);
			lineArray.push(['guard_posestart_handjob_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_BlowjobKneeling = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_posestart_blowjob_exp3_1', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp3_2', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp3_3', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp3_4', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_posestart_blowjob_exp2_1', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp2_2', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp2_3', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp2_4', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp2_5', true, false]);
		}
		else {
			lineArray.push(['guard_posestart_blowjob_exp1_1', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp1_2', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp1_3', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp1_4', true, false]);
			lineArray.push(['guard_posestart_blowjob_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_PaizuriLaying = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_GUARD_TAG) {
		if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['guard_posestart_paizuri_exp3_1', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp3_2', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp3_3', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp3_4', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['guard_posestart_paizuri_exp2_1', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp2_2', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp2_3', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp2_4', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp2_5', true, false]);
		}
		else {
			lineArray.push(['guard_posestart_paizuri_exp1_1', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp1_2', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp1_3', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp1_4', true, false]);
			lineArray.push(['guard_posestart_paizuri_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_OrcPaizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_ORC_TAG) {
		if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['orc_posestart_paizuri_exp3_1', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp3_2', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp3_3', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp3_4', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['orc_posestart_paizuri_exp2_1', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp2_2', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp2_3', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp2_4', true, false]);
			if(actor.tittyFuckLvl() >= 5) lineArray.push(['orc_posestart_paizuri_exp2_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV1_REQ) {
			lineArray.push(['orc_posestart_paizuri_exp1_1', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp1_2', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp1_3', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp1_4', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp1_5', true, false]);
		}
		else {
			lineArray.push(['orc_posestart_paizuri_exp0_1', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp0_2', true, false]);
			lineArray.push(['orc_posestart_paizuri_exp0_3', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_ReverseCowgirl = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let enemyJustTookAnalVirginity = this._enemyJustTookAnalVirginity;
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_HOMELESS_TAG) {
		if(enemyJustTookAnalVirginity) {
			lineArray.push(['homeless_posestart_cowgirl_exp0_1', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp0_2', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp0_3', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['homeless_posestart_cowgirl_exp3_1', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp3_2', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp3_3', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp3_4', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['homeless_posestart_cowgirl_exp2_1', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp2_2', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp2_3', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp2_4', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp2_5', true, false]);
		}
		else {
			lineArray.push(['homeless_posestart_cowgirl_exp1_1', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp1_2', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp1_3', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp1_4', true, false]);
			lineArray.push(['homeless_posestart_cowgirl_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_enemyPoseStart_LizardmanCowgirl = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let enemyJustTookPussyVirginity = this._enemyJustTookPussyVirginity;
	let publishedSexRecords = actor.hasEdict(EDICT_PUBLISH_RECORDS_TWO);
	
	if(this._enemyTypeIsBoss) {
		
	}
	else if(this._enemyType == ENEMYTYPE_LIZARDMAN_TAG) {
		if(enemyJustTookPussyVirginity) {
			lineArray.push(['lizardman_posestart_cowgirl_exp0_1', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp0_2', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp0_3', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV3_REQ) {
			if(actor._recordPussyFuckedPeople >= 100 && publishedSexRecords) lineArray.push(['lizardman_posestart_cowgirl_exp3_1', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp3_2', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp3_3', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp3_4', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp3_5', true, false]);
		}
		else if(reactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['lizardman_posestart_cowgirl_exp2_1', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp2_2', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp2_3', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp2_4', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp2_5', true, false]);
		}
		else {
			lineArray.push(['lizardman_posestart_cowgirl_exp1_1', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp1_2', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp1_3', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp1_4', true, false]);
			lineArray.push(['lizardman_posestart_cowgirl_exp1_5', true, false]);
		}
	}
	
	return lineArray;
};


////////////
// Karryn Pose Start Lines

Rem_Lines.prototype.karrynline_karrynPoseStart_StandingHandjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_handjob_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp3_3', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp3_4', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_handjob_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp2_3', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp2_4', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_handjob_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp1_3', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp1_4', false, false]);
		lineArray.push(['karryn_posestart_handjob_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPoseStart_KneelingBlowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_fera_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_fera_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_fera_exp3_3', false, false]);
		lineArray.push(['karryn_posestart_fera_exp3_4', false, false]);
		lineArray.push(['karryn_posestart_fera_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_fera_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_fera_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_fera_exp2_3', false, false]);
		lineArray.push(['karryn_posestart_fera_exp2_4', false, false]);
		lineArray.push(['karryn_posestart_fera_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_fera_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_fera_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_fera_exp1_3', false, false]);
		lineArray.push(['karryn_posestart_fera_exp1_4', false, false]);
		lineArray.push(['karryn_posestart_fera_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseStart_LayingPaizuri = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_paizuri_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp3_3', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp3_4', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_paizuri_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp2_3', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp2_4', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_paizuri_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp1_3', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp1_4', false, false]);
		lineArray.push(['karryn_posestart_paizuri_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseStart_ReverseCowgirl = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_analsex_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp3_3', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp3_4', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp3_5', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp3_6', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_analsex_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp2_3', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp2_4', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_analsex_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp1_3', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp1_4', false, false]);
		lineArray.push(['karryn_posestart_analsex_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseStart_KarrynCowgirl = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_sex_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_sex_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_sex_exp3_3', false, false]);
		lineArray.push(['karryn_posestart_sex_exp3_4', false, false]);
		lineArray.push(['karryn_posestart_sex_exp3_5', false, false]);
		lineArray.push(['karryn_posestart_sex_exp3_6', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_sex_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_sex_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_sex_exp2_3', false, false]);
		lineArray.push(['karryn_posestart_sex_exp2_4', false, false]);
		lineArray.push(['karryn_posestart_sex_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_sex_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_sex_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_sex_exp1_3', false, false]);
		lineArray.push(['karryn_posestart_sex_exp1_4', false, false]);
		lineArray.push(['karryn_posestart_sex_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_karrynPoseStart_Footjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_footjob_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_footjob_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_footjob_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_footjob_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_footjob_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_footjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_footjob_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_footjob_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_footjob_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_karrynPoseStart_Rimjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_posestart_rimjob_exp3_1', false, false]);
		lineArray.push(['karryn_posestart_rimjob_exp3_2', false, false]);
		lineArray.push(['karryn_posestart_rimjob_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_posestart_rimjob_exp2_1', false, false]);
		lineArray.push(['karryn_posestart_rimjob_exp2_2', false, false]);
		lineArray.push(['karryn_posestart_rimjob_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_posestart_rimjob_exp1_1', false, false]);
		lineArray.push(['karryn_posestart_rimjob_exp1_2', false, false]);
		lineArray.push(['karryn_posestart_rimjob_exp1_3', false, false]);
	}
	
	return lineArray;
};


//////////
// Karryn Masturbation Lines

Rem_Lines.prototype.karrynMasturbate_touchBoobs = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_touch_boobs_exp3_1', false, false]);
		lineArray.push(['karryn_mas_touch_boobs_exp3_2', false, false]);
		lineArray.push(['karryn_mas_touch_boobs_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_touch_boobs_exp2_1', false, false]);
		lineArray.push(['karryn_mas_touch_boobs_exp2_2', false, false]);
		lineArray.push(['karryn_mas_touch_boobs_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_touch_boobs_exp1_1', false, false]);
		lineArray.push(['karryn_mas_touch_boobs_exp1_2', false, false]);
		lineArray.push(['karryn_mas_touch_boobs_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_touchNipples = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_touch_nipples_exp3_1', false, false]);
		lineArray.push(['karryn_mas_touch_nipples_exp3_2', false, false]);
		lineArray.push(['karryn_mas_touch_nipples_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_touch_nipples_exp2_1', false, false]);
		lineArray.push(['karryn_mas_touch_nipples_exp2_2', false, false]);
		lineArray.push(['karryn_mas_touch_nipples_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_touch_nipples_exp1_1', false, false]);
		lineArray.push(['karryn_mas_touch_nipples_exp1_2', false, false]);
		lineArray.push(['karryn_mas_touch_nipples_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_touchClit = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_touch_clit_exp3_1', false, false]);
		lineArray.push(['karryn_mas_touch_clit_exp3_2', false, false]);
		lineArray.push(['karryn_mas_touch_clit_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_touch_clit_exp2_1', false, false]);
		lineArray.push(['karryn_mas_touch_clit_exp2_2', false, false]);
		lineArray.push(['karryn_mas_touch_clit_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_touch_clit_exp1_1', false, false]);
		lineArray.push(['karryn_mas_touch_clit_exp1_2', false, false]);
		lineArray.push(['karryn_mas_touch_clit_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_touchPussy = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notVirgin = actor._firstPussySexDate;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notVirgin) {
		lineArray.push(['karryn_mas_touch_pussy_exp3_1', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp3_2', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notVirgin) {
		lineArray.push(['karryn_mas_touch_pussy_exp2_1', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp2_2', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp2_3', false, false]);
	}
	else if(notVirgin) {
		lineArray.push(['karryn_mas_touch_pussy_exp1_1', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp1_2', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp1_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_touch_pussy_exp0_1', false, false]);
		lineArray.push(['karryn_mas_touch_pussy_exp0_2', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_fingerPussy = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notVirgin = actor._firstPussySexDate;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notVirgin) {
		lineArray.push(['karryn_mas_finger_pussy_exp3_1', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp3_2', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notVirgin) {
		lineArray.push(['karryn_mas_finger_pussy_exp2_1', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp2_2', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp2_3', false, false]);
	}
	else if(notVirgin) {
		lineArray.push(['karryn_mas_finger_pussy_exp1_1', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp1_2', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp1_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_finger_pussy_exp0_1', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp0_2', false, false]);
		lineArray.push(['karryn_mas_finger_pussy_exp0_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_touchAnus = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notAnalVirgin = actor._firstAnalSexDate;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notAnalVirgin) {
		lineArray.push(['karryn_mas_touch_anus_exp3_1', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp3_2', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notAnalVirgin) {
		lineArray.push(['karryn_mas_touch_anus_exp2_1', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp2_2', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp2_3', false, false]);
	}
	else if(notAnalVirgin) {
		lineArray.push(['karryn_mas_touch_anus_exp1_1', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp1_2', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp1_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_touch_anus_exp0_1', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp0_2', false, false]);
		lineArray.push(['karryn_mas_touch_anus_exp0_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_fingerAnus = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notAnalVirgin = actor._firstAnalSexDate;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notAnalVirgin) {
		lineArray.push(['karryn_mas_finger_anus_exp3_1', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp3_2', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notAnalVirgin) {
		lineArray.push(['karryn_mas_finger_anus_exp2_1', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp2_2', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp2_3', false, false]);
	}
	else if(notAnalVirgin) {
		lineArray.push(['karryn_mas_finger_anus_exp1_1', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp1_2', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp1_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_finger_anus_exp0_1', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp0_2', false, false]);
		lineArray.push(['karryn_mas_finger_anus_exp0_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_suckFingers = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let doesNotHaveFirstKissPassive = !actor.hasPassive(PASSIVE_FIRST_KISS_ID);
	let doesNotHaveFirstBlowjobPassive = !actor.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)
	
	if(doesNotHaveFirstKissPassive) {
		lineArray.push(['karryn_mas_suck_fingers_exp0a_1', false, false]);
		lineArray.push(['karryn_mas_suck_fingers_exp0a_2', false, false]);
	}
	else if(doesNotHaveFirstBlowjobPassive) {
		lineArray.push(['karryn_mas_suck_fingers_exp0b_1', false, false]);
		lineArray.push(['karryn_mas_suck_fingers_exp0b_2', false, false]);
	}
	else {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_mas_suck_fingers_exp3_1', false, false]);
			lineArray.push(['karryn_mas_suck_fingers_exp3_2', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_mas_suck_fingers_exp2_1', false, false]);
			lineArray.push(['karryn_mas_suck_fingers_exp2_2', false, false]);
		}
		else {
			lineArray.push(['karryn_mas_suck_fingers_exp1_1', false, false]);
			lineArray.push(['karryn_mas_suck_fingers_exp1_2', false, false]);
		}
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_suckNipples = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_suck_nipples_exp3_1', false, false]);
		lineArray.push(['karryn_mas_suck_nipples_exp3_2', false, false]);
		lineArray.push(['karryn_mas_suck_nipples_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_suck_nipples_exp2_1', false, false]);
		lineArray.push(['karryn_mas_suck_nipples_exp2_2', false, false]);
		lineArray.push(['karryn_mas_suck_nipples_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_mas_suck_nipples_exp1_1', false, false]);
		lineArray.push(['karryn_mas_suck_nipples_exp1_2', false, false]);
		lineArray.push(['karryn_mas_suck_nipples_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_lickHalberd = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_halberd_lick_exp3_1', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp3_2', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp3_3', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp3_4', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp3_5', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_halberd_lick_exp2_1', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp2_2', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp2_3', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_mas_halberd_lick_exp1_1', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp1_2', true, false]);
		lineArray.push(['karryn_mas_halberd_lick_exp1_3', true, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_tittyFuckHalberd = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_halberd_paizuri_exp3_1', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp3_2', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp3_3', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp3_4', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp3_5', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_halberd_paizuri_exp2_1', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp2_2', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp2_3', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_mas_halberd_paizuri_exp1_1', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp1_2', true, false]);
		lineArray.push(['karryn_mas_halberd_paizuri_exp1_3', true, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_clitRubHalberd = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_halberd_clit_exp3_1', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp3_2', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp3_3', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp3_4', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp3_5', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_halberd_clit_exp2_1', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp2_2', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp2_3', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_mas_halberd_clit_exp1_1', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp1_2', true, false]);
		lineArray.push(['karryn_mas_halberd_clit_exp1_3', true, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynMasturbate_pussyRubHalberd = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_mas_halberd_pussy_exp3_1', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp3_2', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp3_3', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp3_4', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp3_5', true, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_mas_halberd_pussy_exp2_1', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp2_2', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp2_3', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp2_4', true, false]);
	}
	else {
		lineArray.push(['karryn_mas_halberd_pussy_exp1_1', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp1_2', true, false]);
		lineArray.push(['karryn_mas_halberd_pussy_exp1_3', true, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_downStamina = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(actor._remLine_skipNextDownStamina || $gameTroop.isAllDead()) {
		actor._remLine_skipNextDownStamina = false;
		return lineArray;
	}
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && DEBUG_MODE) {
		lineArray.push(['karryn_down_stamina_exp3_1', false, false]);
		lineArray.push(['karryn_down_stamina_exp3_2', false, false]);
		lineArray.push(['karryn_down_stamina_exp3_3', false, false]);
		lineArray.push(['karryn_down_stamina_exp3_4', false, false]);
		lineArray.push(['karryn_down_stamina_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && DEBUG_MODE) {
		lineArray.push(['karryn_down_stamina_exp2_1', false, false]);
		lineArray.push(['karryn_down_stamina_exp2_2', false, false]);
		lineArray.push(['karryn_down_stamina_exp2_3', false, false]);
		lineArray.push(['karryn_down_stamina_exp2_4', false, false]);
		lineArray.push(['karryn_down_stamina_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_down_stamina_exp1_1', false, false]);
		lineArray.push(['karryn_down_stamina_exp1_2', false, false]);
		lineArray.push(['karryn_down_stamina_exp1_3', false, false]);
		lineArray.push(['karryn_down_stamina_exp1_4', false, false]);
		lineArray.push(['karryn_down_stamina_exp1_5', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_downFalldown = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && DEBUG_MODE) {
		lineArray.push(['karryn_down_falldown_exp3_1', false, false]);
		lineArray.push(['karryn_down_falldown_exp3_2', false, false]);
		lineArray.push(['karryn_down_falldown_exp3_3', false, false]);
		lineArray.push(['karryn_down_falldown_exp3_4', false, false]);
		lineArray.push(['karryn_down_falldown_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && DEBUG_MODE) {
		lineArray.push(['karryn_down_falldown_exp2_1', false, false]);
		lineArray.push(['karryn_down_falldown_exp2_2', false, false]);
		lineArray.push(['karryn_down_falldown_exp2_3', false, false]);
		lineArray.push(['karryn_down_falldown_exp2_4', false, false]);
		lineArray.push(['karryn_down_falldown_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_down_falldown_exp1_1', false, false]);
		lineArray.push(['karryn_down_falldown_exp1_2', false, false]);
		lineArray.push(['karryn_down_falldown_exp1_3', false, false]);
		lineArray.push(['karryn_down_falldown_exp1_4', false, false]);
		lineArray.push(['karryn_down_falldown_exp1_5', false, false]);
	}
	
	return lineArray;
};


Rem_Lines.prototype.karrynline_invasion_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let hadOrgasm = $gameSwitches.value(SWITCH_ENEMY_SNEAK_ATTACK_ID);
	let notFirstInvasionBattle = actor._recordInvasionTotal > 1;
	
	if(hadOrgasm) {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstInvasionBattle) {
			lineArray.push(['invasionbattle_start_yes_zecchou_exp3_1', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp3_2', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp3_3', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp3_4', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp3_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstInvasionBattle) {
			lineArray.push(['invasionbattle_start_yes_zecchou_exp2_1', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp2_2', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp2_3', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp2_4', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp2_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstInvasionBattle) {
			lineArray.push(['invasionbattle_start_yes_zecchou_exp1_1', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp1_2', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp1_3', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp1_4', false, false]);
			lineArray.push(['invasionbattle_start_yes_zecchou_exp1_5', false, false]);
		}
		else {
			lineArray.push(['nvasionbattle_start_yes_zecchou_exp0_1', false, false]);
		}
	}
	else {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstInvasionBattle) {
			lineArray.push(['invasionbattle_start_no_zecchou_exp3_1', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp3_2', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp3_3', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp3_4', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp3_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstInvasionBattle) {
			lineArray.push(['invasionbattle_start_no_zecchou_exp2_1', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp2_2', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp2_3', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp2_4', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp2_5', false, false]);
		}
		else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstInvasionBattle) {
			lineArray.push(['invasionbattle_start_no_zecchou_exp1_1', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp1_2', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp1_3', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp1_4', false, false]);
			lineArray.push(['invasionbattle_start_no_zecchou_exp1_5', false, false]);
		}
		else {
			lineArray.push(['invasionbattle_start_no_zecchou_exp0_1', false, false]);
		}
	}

	return lineArray;
};


Rem_Lines.prototype.karrynline_defeatLv1_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notFirstDefeatLv1 = actor._recordBlowbangCount > 1;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstDefeatLv1) {
		lineArray.push(['defeat_lv1_start_exp3_1', false, false]);
		lineArray.push(['defeat_lv1_start_exp3_2', false, false]);
		lineArray.push(['defeat_lv1_start_exp3_3', false, false]);
		lineArray.push(['defeat_lv1_start_exp3_4', false, false]);
		lineArray.push(['defeat_lv1_start_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstDefeatLv1) {
		lineArray.push(['defeat_lv1_start_exp2_1', false, false]);
		lineArray.push(['defeat_lv1_start_exp2_2', false, false]);
		lineArray.push(['defeat_lv1_start_exp2_3', false, false]);
		lineArray.push(['defeat_lv1_start_exp2_4', false, false]);
		lineArray.push(['defeat_lv1_start_exp2_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstDefeatLv1) {
		lineArray.push(['defeat_lv1_start_exp1_1', false, false]);
		lineArray.push(['defeat_lv1_start_exp1_2', false, false]);
		lineArray.push(['defeat_lv1_start_exp1_3', false, false]);
		lineArray.push(['defeat_lv1_start_exp1_4', false, false]);
		lineArray.push(['defeat_lv1_start_exp1_5', false, false]);
	}
	else {
		lineArray.push(['defeat_lv1_start_exp0_1', false, false]);
		lineArray.push(['defeat_lv1_start_exp0_2', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_defeatLv2_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notFirstDefeatLv2 = actor._recordUrinalCount > 1;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstDefeatLv2) {
		lineArray.push(['defeat_lv2_start_exp3_1', false, false]);
		lineArray.push(['defeat_lv2_start_exp3_2', false, false]);
		lineArray.push(['defeat_lv2_start_exp3_3', false, false]);
		lineArray.push(['defeat_lv2_start_exp3_4', false, false]);
		lineArray.push(['defeat_lv2_start_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstDefeatLv2) {
		lineArray.push(['defeat_lv2_start_exp2_1', false, false]);
		lineArray.push(['defeat_lv2_start_exp2_2', false, false]);
		lineArray.push(['defeat_lv2_start_exp2_3', false, false]);
		lineArray.push(['defeat_lv2_start_exp2_4', false, false]);
		lineArray.push(['defeat_lv2_start_exp2_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstDefeatLv2) {
		lineArray.push(['defeat_lv2_start_exp1_1', false, false]);
		lineArray.push(['defeat_lv2_start_exp1_2', false, false]);
		lineArray.push(['defeat_lv2_start_exp1_3', false, false]);
		lineArray.push(['defeat_lv2_start_exp1_4', false, false]);
		lineArray.push(['defeat_lv2_start_exp1_5', false, false]);
	}
	else {
		lineArray.push(['defeat_lv2_start_exp0_1', false, false]);
		lineArray.push(['defeat_lv2_start_exp0_2', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_defeatLv3_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notFirstDefeatLv3 = actor._recordSoloCellCount > 1;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstDefeatLv3) {
		lineArray.push(['defeat_lv2_start_exp3_1', false, false]);
		lineArray.push(['defeat_lv3_start_exp3_2', false, false]);
		lineArray.push(['defeat_lv3_start_exp3_3', false, false]);
		lineArray.push(['defeat_lv3_start_exp3_4', false, false]);
		lineArray.push(['defeat_lv3_start_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstDefeatLv3) {
		lineArray.push(['defeat_lv3_start_exp2_1', false, false]);
		lineArray.push(['defeat_lv3_start_exp2_2', false, false]);
		lineArray.push(['defeat_lv3_start_exp2_3', false, false]);
		lineArray.push(['defeat_lv3_start_exp2_4', false, false]);
		lineArray.push(['defeat_lv3_start_exp2_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstDefeatLv3) {
		lineArray.push(['defeat_lv3_start_exp1_1', false, false]);
		lineArray.push(['defeat_lv3_start_exp1_2', false, false]);
		lineArray.push(['defeat_lv3_start_exp1_3', false, false]);
		lineArray.push(['defeat_lv3_start_exp1_4', false, false]);
		lineArray.push(['defeat_lv3_start_exp1_5', false, false]);
	}
	else {
		lineArray.push(['defeat_lv3_start_exp0_1', false, false]);
		lineArray.push(['defeat_lv3_start_exp0_2', false, false]);
	}
	
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_defeatLv4_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_defeatLv5_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_defeatGuard_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['defeat_guard_start_exp3_1', false, false]);
		lineArray.push(['defeat_guard_start_exp3_2', false, false]);
		lineArray.push(['defeat_guard_start_exp3_3', false, false]);
		lineArray.push(['defeat_guard_start_exp3_4', false, false]);
		lineArray.push(['defeat_guard_start_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['defeat_guard_start_exp2_1', false, false]);
		lineArray.push(['defeat_guard_start_exp2_2', false, false]);
		lineArray.push(['defeat_guard_start_exp2_3', false, false]);
		lineArray.push(['defeat_guard_start_exp2_4', false, false]);
		lineArray.push(['defeat_guard_start_exp2_5', false, false]);
	}
	else {
		lineArray.push(['defeat_guard_start_exp1_1', false, false]);
		lineArray.push(['defeat_guard_start_exp1_2', false, false]);
		lineArray.push(['defeat_guard_start_exp1_3', false, false]);
		lineArray.push(['defeat_guard_start_exp1_4', false, false]);
		lineArray.push(['defeat_guard_start_exp1_5', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_waitressServe_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_waitress_start_exp3_1', false, false]);
		lineArray.push(['karryn_waitress_start_exp3_2', false, false]);
		lineArray.push(['karryn_waitress_start_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_waitress_start_exp2_1', false, false]);
		lineArray.push(['karryn_waitress_start_exp2_2', false, false]);
		lineArray.push(['karryn_waitress_start_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_waitress_start_exp1_1', false, false]);
		lineArray.push(['karryn_waitress_start_exp1_2', false, false]);
		lineArray.push(['karryn_waitress_start_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_waitressServe_takeOrder = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_waitress_take_order_exp3_1', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp3_2', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp3_3', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp3_4', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_waitress_take_order_exp2_1', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp2_2', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp2_3', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp2_4', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp2_5', false, false]);
	}
	else {
		lineArray.push(['karryn_waitress_take_order_exp1_1', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp1_2', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp1_3', false, false]);
		lineArray.push(['karryn_waitress_take_order_exp1_4', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_waitressServe_acceptDrink = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_waitress_accept_drink_exp3_1', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp3_2', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp3_3', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp3_4', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp3_5', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp3_6', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_waitress_accept_drink_exp2_1', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp2_2', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp2_3', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_waitress_accept_drink_exp1_1', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp1_2', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp1_3', false, false]);
		lineArray.push(['karryn_waitress_accept_drink_exp1_4', false, false]);
	}
	

	return lineArray;
};

Rem_Lines.prototype.karrynline_waitressServe_rejectDrink = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_waitress_reject_drink_exp3_1', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp3_2', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp3_3', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp3_4', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_waitress_reject_drink_exp2_1', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp2_2', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp2_3', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp2_4', false, false]);
	}
	else {
		lineArray.push(['karryn_waitress_reject_drink_exp1_1', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp1_2', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp1_3', false, false]);
		lineArray.push(['karryn_waitress_reject_drink_exp1_4', false, false]);
	}
	

	return lineArray;
};


Rem_Lines.prototype.karrynline_waitressServe_karrynFlash = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let isAroused = actor.isAroused()
	let notFirstFlash = actor._recordWaitressFlashedCount > 1;
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstFlash) {
		lineArray.push(['karryn_waitress_flash_exp3_1', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_2', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_3', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_4', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_5', false, false]);
		if(isAroused) lineArray.push(['karryn_waitress_flash_exp3_6', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_7', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_8', false, false]);
		lineArray.push(['karryn_waitress_flash_exp3_9', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstFlash) {
		lineArray.push(['karryn_waitress_flash_exp2_1', false, false]);
		lineArray.push(['karryn_waitress_flash_exp2_2', false, false]);
		lineArray.push(['karryn_waitress_flash_exp2_3', false, false]);
		lineArray.push(['karryn_waitress_flash_exp2_4', false, false]);
		if(isAroused) lineArray.push(['karryn_waitress_flash_exp2_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstFlash) {
		lineArray.push(['karryn_waitress_flash_exp1_1', false, false]);
		lineArray.push(['karryn_waitress_flash_exp1_2', false, false]);
		lineArray.push(['karryn_waitress_flash_exp1_3', false, false]);
		lineArray.push(['karryn_waitress_flash_exp1_4', false, false]);
		lineArray.push(['karryn_waitress_flash_exp1_5', false, false]);
	}
	else {
		lineArray.push(['karryn_waitress_flash_exp0_1', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_waitressTable_karrynDrink = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let swallowReactionScore = actor.getSwallowReactionScore();
	let reactionScore = actor.getReactionScore();
	let havingSex = actor.isBodySlotPenis(PUSSY_ID) || actor.isBodySlotPenis(ANAL_ID)
	let semenMug = actor._karrynMugContent === ALCOHOL_TYPE_SEMEN;
	
	if(semenMug) {
		if(swallowReactionScore  >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_drink_mug_swallow_exp3_1', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp3_2', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp3_3', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp3_4', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp3_5', false, false]);
			if(havingSex) {
				lineArray.push(['karryn_drink_mug_swallow_exp3_6', false, false]);
				lineArray.push(['karryn_drink_mug_swallow_exp3_6', false, false]);
			}
		}
		else if(swallowReactionScore  >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_drink_mug_swallow_exp2_1', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp2_2', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp2_3', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp2_4', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp2_5', false, false]);
		}
		else {
			lineArray.push(['karryn_drink_mug_swallow_exp1_1', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp1_2', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp1_3', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp1_4', false, false]);
			lineArray.push(['karryn_drink_mug_swallow_exp1_5', false, false]);
		}
	}
	else {
		if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
			lineArray.push(['karryn_drink_mug_ale_exp3_1', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp3_2', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp3_3', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp3_5', false, false]);
			if(havingSex) {
				lineArray.push(['karryn_drink_mug_ale_exp3_4', false, false]);
				lineArray.push(['karryn_drink_mug_ale_exp3_4', false, false]);
			}
		}
		else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
			lineArray.push(['karryn_drink_mug_ale_exp2_1', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp2_2', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp2_3', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp2_4', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp2_5', false, false]);
		}
		else {
			lineArray.push(['karryn_drink_mug_ale_exp1_1', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp1_2', false, false]);
			lineArray.push(['karryn_drink_mug_ale_exp1_3', false, false]);
		}
			
	}

	
	return lineArray;
};

Rem_Lines.prototype.karrynline_waitressTable_start = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	let notFirstWaitressTable = actor._recordBarWaitressSexCount > 1;
	let isDrunk = actor.isDrunk || actor.isDeadDrunk;

	if(reactionScore >= VAR_DEF_RS_LV3_REQ && notFirstWaitressTable) {
		lineArray.push(['karryn_waitress_table_start_exp3_1', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp3_2', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp3_3', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp3_4', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp3_5', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ && notFirstWaitressTable) {
		lineArray.push(['karryn_waitress_table_start_exp2_1', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp2_2', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp2_3', false, false]);
		if(isDrunk) lineArray.push(['karryn_waitress_table_start_exp2_4', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV1_REQ && notFirstWaitressTable) {
		lineArray.push(['karryn_waitress_table_start_exp1_1', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp1_2', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp1_3', false, false]);
		lineArray.push(['karryn_waitress_table_start_exp1_4', false, false]);
	}
	else {
		lineArray.push(['karryn_waitress_table_start_exp0_1', false, false]);
	}

	return lineArray;
};


Rem_Lines.prototype.karrynline_receptionist_battleStart = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_start_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_start_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_start_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_start_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_start_exp2_2', false, false]);
		if(actor._playthroughRecordReceptionistGoblinCreampieML > 0)
			lineArray.push(['karryn_receptionist_start_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_start_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_start_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_start_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_receptionist_summonVisitorNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_normal_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_summonVisitorSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_summon_visitor_sexual_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_greetVisitorNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_normal_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_greetVisitorSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_greet_visitor_sexual_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_givePaperNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_give_paper_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_give_paper_normal_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_give_paper_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_give_paper_normal_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_give_paper_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_give_paper_normal_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_givePaperSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_give_paper_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_give_paper_sexual_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_give_paper_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_give_paper_sexual_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_give_paper_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_give_paper_sexual_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_receivePaperNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_receive_paper_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_receive_paper_normal_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_receive_paper_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_receive_paper_normal_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_receive_paper_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_receive_paper_normal_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_receivePaperSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_receive_paper_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_receive_paper_sexual_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_receive_paper_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_receive_paper_sexual_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_receive_paper_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_receive_paper_sexual_exp1_2', false, false]);
	}
	
	return lineArray;
};


Rem_Lines.prototype.karrynline_receptionist_assignRoomNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_assign_room_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_assign_room_normal_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_assign_room_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_assign_room_normal_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_assign_room_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_assign_room_normal_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_assignRoomSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_assign_room_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_assign_room_sexual_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_assign_room_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_assign_room_sexual_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_assign_room_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_assign_room_sexual_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_checkRoomNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_check_room_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_check_room_normal_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_check_room_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_check_room_normal_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_check_room_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_check_room_normal_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_checkRoomSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_check_room_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_check_room_sexual_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_check_room_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_check_room_sexual_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_check_room_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_check_room_sexual_exp1_2', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_normalApologyNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_normal_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_normalApologySexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_normal_apology_sexual_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_shooAwayNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_normal_exp1_3', false, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.karrynline_receptionist_shooAwaySexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_shoo_away_sexual_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_receptionist_kickAway = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_kick_away_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_kick_away_exp3_2', false, false]);
		lineArray.push(['karryn_receptionist_kick_away_exp3_3', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_kick_away_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_kick_away_exp2_2', false, false]);
		lineArray.push(['karryn_receptionist_kick_away_exp2_3', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_kick_away_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_kick_away_exp1_2', false, false]);
		lineArray.push(['karryn_receptionist_kick_away_exp1_3', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_receptionist_rejectRequestNormal = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_reject_request_normal_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_reject_request_normal_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_reject_request_normal_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_reject_request_normal_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_reject_request_normal_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_reject_request_normal_exp1_2', false, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.karrynline_receptionist_rejectRequestSexual = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let reactionScore = actor.getReactionScore();
	
	if(reactionScore >= VAR_DEF_RS_LV3_REQ) {
		lineArray.push(['karryn_receptionist_reject_request_sexual_exp3_1', false, false]);
		lineArray.push(['karryn_receptionist_reject_request_sexual_exp3_2', false, false]);
	}
	else if(reactionScore >= VAR_DEF_RS_LV2_REQ) {
		lineArray.push(['karryn_receptionist_reject_request_sexual_exp2_1', false, false]);
		lineArray.push(['karryn_receptionist_reject_request_sexual_exp2_2', false, false]);
	}
	else {
		lineArray.push(['karryn_receptionist_reject_request_sexual_exp1_1', false, false]);
		lineArray.push(['karryn_receptionist_reject_request_sexual_exp1_2', false, false]);
	}
	
	return lineArray;
};


Rem_Lines.prototype.enemyline_fan_handshake_finished = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	lineArray.push(['visitor_fan_handshake_finished_exp1_1', true, false]);
	lineArray.push(['visitor_fan_handshake_finished_exp1_2', true, false]);
	lineArray.push(['visitor_fan_handshake_finished_exp1_3', true, false]);
	lineArray.push(['visitor_fan_handshake_finished_exp1_4', true, false]);
	lineArray.push(['visitor_fan_handshake_finished_exp1_5', true, false]);
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_finished = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_finished_exp3_1', true, false]);
		lineArray.push(['visitor_perv_finished_exp3_2', true, false]);
		lineArray.push(['visitor_perv_finished_exp3_3', true, false]);
		lineArray.push(['visitor_perv_finished_exp3_4', true, false]);
		lineArray.push(['visitor_perv_finished_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_finished_exp2_1', true, false]);
		lineArray.push(['visitor_perv_finished_exp2_2', true, false]);
		lineArray.push(['visitor_perv_finished_exp2_3', true, false]);
		lineArray.push(['visitor_perv_finished_exp2_4', true, false]);
		lineArray.push(['visitor_perv_finished_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_finished_exp1_1', true, false]);
		lineArray.push(['visitor_perv_finished_exp1_2', true, false]);
		lineArray.push(['visitor_perv_finished_exp1_3', true, false]);
		lineArray.push(['visitor_perv_finished_exp1_4', true, false]);
		lineArray.push(['visitor_perv_finished_exp1_5', true, false]);
	}	

	
	return lineArray;
};

Rem_Lines.prototype.enemyline_fan_greet_handshake = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	lineArray.push(['visitor_fan_greet_handshake_exp1_1', true, false]);
	lineArray.push(['visitor_fan_greet_handshake_exp1_2', true, false]);
	lineArray.push(['visitor_fan_greet_handshake_exp1_3', true, false]);
	lineArray.push(['visitor_fan_greet_handshake_exp1_4', true, false]);
	lineArray.push(['visitor_fan_greet_handshake_exp1_5', true, false]);
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_fan_greet_boobshake = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_fan_greet_boobshake_exp3_1', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp3_2', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp3_3', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp3_4', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_fan_greet_boobshake_exp2_1', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp2_2', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp2_3', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp2_4', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_fan_greet_boobshake_exp1_1', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp1_2', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp1_3', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp1_4', true, false]);
		lineArray.push(['visitor_fan_greet_boobshake_exp1_5', true, false]);
	}	
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_fan_greet_kiss = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_fan_greet_kiss_exp3_1', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp3_2', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp3_3', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp3_4', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_fan_greet_kiss_exp2_1', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp2_2', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp2_3', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp2_4', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_fan_greet_kiss_exp1_1', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp1_2', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp1_3', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp1_4', true, false]);
		lineArray.push(['visitor_fan_greet_kiss_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_fan_greet_handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_fan_greet_handjob_exp3_1', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp3_2', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp3_3', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp3_4', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_fan_greet_handjob_exp2_1', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp2_2', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp2_3', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp2_4', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_fan_greet_handjob_exp1_1', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp1_2', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp1_3', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp1_4', true, false]);
		lineArray.push(['visitor_fan_greet_handjob_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_fan_greet_blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_fan_greet_blowjob_exp3_1', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp3_2', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp3_3', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp3_4', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_fan_greet_blowjob_exp2_1', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp2_2', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp2_3', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp2_4', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_fan_greet_blowjob_exp1_1', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp1_2', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp1_3', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp1_4', true, false]);
		lineArray.push(['visitor_fan_greet_blowjob_exp1_5', true, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_perv_greet_boobshake = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_greet_boobshake_exp3_1', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp3_2', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp3_3', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp3_4', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_greet_boobshake_exp2_1', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp2_2', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp2_3', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp2_4', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_greet_boobshake_exp1_1', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp1_2', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp1_3', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp1_4', true, false]);
		lineArray.push(['visitor_perv_greet_boobshake_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_greet_kiss = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_greet_kiss_exp3_1', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp3_2', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp3_3', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp3_4', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_greet_kiss_exp2_1', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp2_2', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp2_3', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp2_4', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_greet_kiss_exp1_1', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp1_2', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp1_3', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp1_4', true, false]);
		lineArray.push(['visitor_perv_greet_kiss_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_greet_handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_greet_handjob_exp3_1', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp3_2', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp3_3', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp3_4', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_greet_handjob_exp2_1', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp2_2', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp2_3', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp2_4', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_greet_handjob_exp1_1', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp1_2', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp1_3', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp1_4', true, false]);
		lineArray.push(['visitor_perv_greet_handjob_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_greet_blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_greet_blowjob_exp3_1', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp3_2', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp3_3', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp3_4', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_greet_blowjob_exp2_1', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp2_2', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp2_3', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp2_4', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_greet_blowjob_exp1_1', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp1_2', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp1_3', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp1_4', true, false]);
		lineArray.push(['visitor_perv_greet_blowjob_exp1_5', true, false]);
	}
	
	return lineArray;
};

Rem_Lines.prototype.enemyline_perv_second_boobshake = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_second_boobshake_exp3_1', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp3_2', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp3_3', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp3_4', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_second_boobshake_exp2_1', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp2_2', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp2_3', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp2_4', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_second_boobshake_exp1_1', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp1_2', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp1_3', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp1_4', true, false]);
		lineArray.push(['visitor_perv_second_boobshake_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_second_kiss = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_second_kiss_exp3_1', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp3_2', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp3_3', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp3_4', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_second_kiss_exp2_1', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp2_2', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp2_3', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp2_4', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_second_kiss_exp1_1', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp1_2', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp1_3', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp1_4', true, false]);
		lineArray.push(['visitor_perv_second_kiss_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_second_handjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_second_handjob_exp3_1', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp3_2', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp3_3', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp3_4', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_second_handjob_exp2_1', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp2_2', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp2_3', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp2_4', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_second_handjob_exp1_1', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp1_2', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp1_3', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp1_4', true, false]);
		lineArray.push(['visitor_perv_second_handjob_exp1_5', true, false]);
	}
	
	return lineArray;
};
Rem_Lines.prototype.enemyline_perv_second_blowjob = function(lineArray) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let enemyTypeReactionScore = actor.reactionScore_enemyVisitorPassive(); 
	
	if(enemyTypeReactionScore >= VAR_TYPE_RS_LV3_REQ) {
		lineArray.push(['visitor_perv_second_blowjob_exp3_1', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp3_2', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp3_3', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp3_4', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp3_5', true, false]);
	}
	else if(enemyTypeReactionScore >= VAR_TYPE_RS_LV2_REQ) {
		lineArray.push(['visitor_perv_second_blowjob_exp2_1', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp2_2', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp2_3', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp2_4', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp2_5', true, false]);
	}
	else {
		lineArray.push(['visitor_perv_second_blowjob_exp1_1', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp1_2', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp1_3', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp1_4', true, false]);
		lineArray.push(['visitor_perv_second_blowjob_exp1_5', true, false]);
	}
	
	return lineArray;
};


///////////////
///////////////////
// Battle Manager
///////////////////
///////////////

BattleManager.getRemLineArray = function(lineType) {
	//console.log('getRemLineArray lineType: ' + lineType);
	let enemy = false;
	if(this._subject) {
		if(this._subject.isEnemy()) 
			enemy = this._subject;
		else if(this._subject.isActor()) {
			if(this._targets[0] && this._targets[0].isEnemy()) enemy = this._targets[0];
		}
	}
	let remLine = new Rem_Lines(lineType, enemy);
	return remLine.getLineArray();
};


Remtairy.Lines.BattleManager_processActionSequence =
    BattleManager.processActionSequence;
BattleManager.processActionSequence = function(actionName, actionArgs) {
	// Rem Lines: #
	if (['REM LINE'].contains(actionName)) {
		return this.actionRemLines(actionArgs[0]);
    }
	return Remtairy.Lines.BattleManager_processActionSequence.call(this, actionName, actionArgs);
};

BattleManager.actionRemLines = function(lineType) {
	let lineArray = this.getRemLineArray(lineType);
	if(!lineArray) return false;
	let lineId = lineArray[LINEARRAY_LINE_ID];
	let lineIsMale = lineArray[LINEARRAY_IS_MALE];
	let lineIsVoiced = lineArray[LINEARRAY_IS_VOICED];
	let linesText = '';
	if(TextManager.isEnglish) linesText = $remLines[lineId].en; 
	else if(TextManager.isJapanese) linesText = $remLines[lineId].jp;
	
	if(!lineIsMale) {
		Karryn.emoteMasterManager();
	}

	if(!linesText || linesText.length == 0 || linesText[0].includes(']""')) return false;
	for(let i = 0; i < linesText.length; i++) {
		this._logWindow.displayRemLine(linesText[i]);
	}
	if(!lineIsMale && ConfigManager.karrynLinesPrompt && !$gameTroop.isAllDead()) {
		$gameMessage.forceButtonInput();
	}
    return false;
};

BattleManager.cutinWait = function(num) {
	this._logWindow.cutinWait(num);
};

///////////
// Window Battlelog
/////////////////

Window_BattleLog.prototype.displayRemLine = function(lineText) {
    var numMethods = this._methods.length;
    this.push('addText', lineText);
	this.push('waitRemLine', lineText);
    if (this._methods.length === numMethods) {
        this.push('wait');
    }
};

Window_BattleLog.prototype.waitRemLine = function(lineText) {
	if(ConfigManager.remLinesFast) return;
	let perChar = 0;
	if(TextManager.isEnglish) perChar = LINE_DURATION_PER_CHARACTER_EN;
	else if(TextManager.isJapanese) perChar = LINE_DURATION_PER_CHARACTER_JP;
	let lineLength = lineText.length;
	if(lineText.includes("\\C")) lineLength -= 5;
	if(lineText.includes("\"")) lineLength--;
	this._waitCount = Math.max(0, lineLength * perChar);
	//$gameTemp.setBattleLogLinesDuration(this._waitCount);
};

Window_BattleLog.prototype.cutinWait = function(num) {
	if(ConfigManager.remCutinsFast) return;
	this._waitCount = num;
    this.push('wait');
};

/////////
// Game Temp


Game_Temp.prototype.getMaleBattleDialogueChance = function() {
	switch (ConfigManager.remMaleDialogueAppear) {
	case 0:
		return 0;
	case 1:
		return LINE_MALE_SHOW_CHANCE_ONE;
	case 2:
		return LINE_MALE_SHOW_CHANCE_TWO;
	case 3:
		return LINE_MALE_SHOW_CHANCE_THREE;
	case 4:
		return 100;		
	}
	
	return LINE_MALE_SHOW_CHANCE_THREE;
};

Game_Temp.prototype.getBattleLogDuration = function() {
	//return GLOBAL_BATTLE_LOG_VIEW_DURATION;
	
	switch (ConfigManager.remBattlelogDuration) {
	case 0:
		return BATTLE_LOG_VIEW_DURATION_ZERO;
	case 1:
		return BATTLE_LOG_VIEW_DURATION_ONE;
	case 2:
		return BATTLE_LOG_VIEW_DURATION_TWO;
	case 3:
		return BATTLE_LOG_VIEW_DURATION_THREE;
	case 4:
		return BATTLE_LOG_VIEW_DURATION_FOUR;		
	}
	
	return BATTLE_LOG_VIEW_DURATION_TWO;
	
	//unused
    if(this._battleLogRemLineDuration) {
		let duration = this._battleLogRemLineDuration;
		this.resetBattleLogLinesDuration();
		return duration;
	}
	else return GLOBAL_BATTLE_LOG_VIEW_DURATION;
};

Game_Temp.prototype.setBattleLogLinesDuration = function(value) {
    this._battleLogRemLineDuration = value;
};
Game_Temp.prototype.resetBattleLogLinesDuration = function() {
    this._battleLogRemLineDuration = false;
};

///////////
// Game Actor

Game_Actor.prototype.resetRemLineActorVariables = function() {
	this._remLine_skipNextDownStamina = false;
	this._remLine_saidLostPussyVirginity = false;
	this._remLine_saidLostAnalVirginity = false;
};