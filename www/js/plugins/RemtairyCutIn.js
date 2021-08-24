var Remtairy = Remtairy || {};
Remtairy.CutIn = Remtairy.CutIn || {};

const CUTIN_DEFAULT_DURATION = 35; //カットインが画面に残る時間

const REM_CUT_IN_LEFT_X = -80;
const REM_CUT_IN_RIGHT_X = 0;
const REM_CUT_IN_TOP_Y = 0;
const REM_CUT_IN_BOTTOM_Y = 80;

const REM_CUT_IN_SPEED_X = 3;
const REM_CUT_IN_SPEED_Y = 3;

const REM_CUT_IN_DEFEATED_LV1_X_OFFSET = 850; //Defeated Lv1の位置をずらす
const REM_CUT_IN_DEFEATED_LV1_Y_OFFSET = 0; //Defeated Lv1の位置をずらす

const REM_CUT_IN_DEFEATED_LV2_X_OFFSET = 0; //Defeated Lv2の位置をずらす
const REM_CUT_IN_DEFEATED_LV2_Y_OFFSET = 0; //Defeated Lv2の位置をずらす

const REM_CUT_IN_DEFEATED_GUARD_X_OFFSET = -40;
const REM_CUT_IN_DEFEATED_GUARD_Y_OFFSET = 0;

const REM_CUT_IN_WAITRESS_SERVING_X_OFFSET = 75; //ウェイトレス
const REM_CUT_IN_WAITRESS_SERVING_Y_OFFSET = 0;

const REM_CUT_IN_WAITRESS_SEX_X_OFFSET = 0;
const REM_CUT_IN_WAITRESS_SEX_Y_OFFSET = 0;

const REM_CUT_IN_RECEPTIONIST_X_OFFSET = 900; //受付嬢
const REM_CUT_IN_RECEPTIONIST_Y_OFFSET = 0;

const REM_CUT_IN_GLORY_X_OFFSET = 0; //Glory
const REM_CUT_IN_GLORY_Y_OFFSET = 0;

const REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_X_OFFSET = 860; //グローリーホール Sit left, stand right
const REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_Y_OFFSET = 0;

const REM_CUT_IN_DOWN_ORG_X_OFFSET = -20; //Down_orgasm
const REM_CUT_IN_DOWN_ORG_Y_OFFSET = 0;

const REM_CUT_IN_DOWN_STAMINA_X_OFFSET = 0; //Down_stamina
const REM_CUT_IN_DOWN_STAMINA_Y_OFFSET = 0;

const REM_CUT_IN_DOWN_FALLDOWN_X_OFFSET = 0; //Down_falldown
const REM_CUT_IN_DOWN_FALLDOWN_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_STANDBY_X_OFFSET = 0; //Standby
const REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_UNARMED_X_OFFSET = 0; //Unarmed
const REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_DEFEND_X_OFFSET = 0; //Defend
const REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_EVADE_X_OFFSET = 0; //Evade
const REM_CUT_IN_COMBAT_EVADE_Y_OFFSET = 0;

const REM_CUT_IN_SEX_THUG_GB_X_OFFSET = -50; //セックス　thug_gb
const REM_CUT_IN_SEX_THUG_GB_Y_OFFSET = 0;

const REM_CUT_IN_SEX_GUARD_GB_X_OFFSET = -20; //セックス　guard_gb
const REM_CUT_IN_SEX_GUARD_GB_Y_OFFSET = 0;

const REM_CUT_IN_SEX_GOBLIN_CL_X_OFFSET = 0; //セックス　goblin_cl
const REM_CUT_IN_SEX_GOBLIN_CL_Y_OFFSET = 0;

const REM_CUT_IN_SEX_SLIME_PL_X_OFFSET = 0; //セックス　slime_piledrivers
const REM_CUT_IN_SEX_SLIME_PL_Y_OFFSET = 0;

const REM_CUT_IN_SEX_STANDING_HJ_X_OFFSET = 0; //セックス　hj_standing
const REM_CUT_IN_SEX_STANDING_HJ_Y_OFFSET = 0;

const REM_CUT_IN_SEX_KNEELING_BJ_X_OFFSET = 0; //セックス　bj_kneeling
const REM_CUT_IN_SEX_KNEELING_BJ_Y_OFFSET = 0;

const REM_CUT_IN_SEX_LAYING_PAIZURI_X_OFFSET = 0; //セックス　paizuri_laying
const REM_CUT_IN_SEX_LAYING_PAIZURI_Y_OFFSET = 0;

const REM_CUT_IN_SEX_FOOTJ_X_OFFSET = 0; //セックス　footj
const REM_CUT_IN_SEX_FOOTJ_Y_OFFSET = 0;

const REM_CUT_IN_SEX_RIMMING_X_OFFSET = -40; //セックス　rimming
const REM_CUT_IN_SEX_RIMMING_Y_OFFSET = 0;

const REM_CUT_IN_SEX_WEREWOLF_BACK_X_OFFSET = 800; //セックス werewolf_back
const REM_CUT_IN_SEX_WEREWOLF_BACK_Y_OFFSET = 0;

//=============================================================================
 /*:
 * @plugindesc Cut-in
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const CUT_IN_ARRAY_BACK_NAME_ID = 0;
const CUT_IN_ARRAY_BACK_X_OFFSET_ID = 1;
const CUT_IN_ARRAY_BACK_Y_OFFSET_ID = 2;
const CUT_IN_ARRAY_FRONT_NAME_ID = 3;
const CUT_IN_ARRAY_FRONT_X_OFFSET_ID = 4;
const CUT_IN_ARRAY_FRONT_Y_OFFSET_ID = 5;
const CUT_IN_ARRAY_PRELOAD_LIST_ID = 6;

const CUTIN_PETTING_BOOBS_TYPE_START = 1;
const CUTIN_PETTING_BOOBS_HUMAN_DEFAULT_ID = 2;
const CUTIN_PETTING_BOOBS_TYPE_END = 10;

const CUTIN_PETTING_NIPPLES_TYPE_START = 11;
const CUTIN_PETTING_NIPPLES_HUMAN_DEFAULT_ID = 12;
const CUTIN_PETTING_NIPPLES_TYPE_END = 20;

const CUTIN_PETTING_CLIT_TYPE_START = 21;
const CUTIN_PETTING_CLIT_HUMAN_DEFAULT_ID = 22;
const CUTIN_PETTING_CLIT_TYPE_END = 30;

const CUTIN_PETTING_PUSSY_TYPE_START = 31;
const CUTIN_PETTING_PUSSY_HUMAN_DEFAULT_ID = 32;
const CUTIN_PETTING_PUSSY_TYPE_END = 40;

const CUTIN_PETTING_BUTT_TYPE_START = 41;
const CUTIN_PETTING_BUTT_HUMAN_DEFAULT_ID = 42;
const CUTIN_PETTING_BUTT_TYPE_END = 48;

const CUTIN_PETTING_BUTT_GOBLIN_ID = 49;

const CUTIN_PETTING_ANAL_TYPE_START = 51;
const CUTIN_PETTING_ANAL_HUMAN_DEFAULT_ID = 52;
const CUTIN_PETTING_ANAL_TYPE_END = 60;

const CUTIN_SUCKING_FINGERS_ENEMY_TYPE_START = 61;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_DEFAULT_ID = 62;
const CUTIN_SUCKING_FINGERS_ENEMY_TYPE_END = 70;

const CUTIN_SPANKING_ONE_NAME = 71;
const CUTIN_SPANKING_TWO_NAME = 72;
const CUTIN_SPANKING_THREE_NAME = 73;

const CUTIN_KARRYN_FLAUNT_ONE_ID = 74;

const CUTIN_KARRYN_ORGASM_ONE_ID = 75;
const CUTIN_KARRYN_ORGASM_TWO_ID = 76;

const CUTIN_KARRYN_KISS_ONE_TYPE_START = 81;
const CUTIN_KARRYN_KISS_ONE_HUMAN_DEFAULT_ID = 82;
const CUTIN_KARRYN_KISS_ONE_TYPE_END = 90;

const CUTIN_KARRYN_KISS_TWO_TYPE_START = 91;
const CUTIN_KARRYN_KISS_TWO_HUMAN_DEFAULT_ID = 92;
const CUTIN_KARRYN_KISS_TWO_TYPE_END = 100;

const CUTIN_ENEMY_KISS_ONE_TYPE_START = 101;
const CUTIN_ENEMY_KISS_ONE_HUMAN_DEFAULT_ID = 102;
const CUTIN_ENEMY_KISS_ONE_TYPE_END = 110;

const CUTIN_ENEMY_KISS_TWO_TYPE_START = 111;
const CUTIN_ENEMY_KISS_TWO_HUMAN_DEFAULT_ID = 112;
const CUTIN_ENEMY_KISS_TWO_TYPE_END = 120;

const CUTIN_TOY_PINK_ROTOR_INSERT_TYPE_START = 121;
const CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_DEFAULT_ID = 122;
const CUTIN_TOY_PINK_ROTOR_INSERT_TYPE_END = 130;

const CUTIN_TOY_PINK_ROTOR_PLAY_TYPE_START = 131;
const CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_DEFAULT_ID = 132;
const CUTIN_TOY_PINK_ROTOR_PLAY_TYPE_END = 140;

const CUTIN_TOY_PENIS_DILDO_INSERT_TYPE_START = 141;
const CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_DEFAULT_ID = 142;
const CUTIN_TOY_PENIS_DILDO_INSERT_TYPE_END = 150;

const CUTIN_TOY_PENIS_DILDO_PLAY_TYPE_START = 151;
const CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_DEFAULT_ID = 152;
const CUTIN_TOY_PENIS_DILDO_PLAY_TYPE_END = 160;

const CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_START = 161;
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_DEFAULT_ID = 162;
const CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_END = 170;

const CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_START = 171;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_DEFAULT_ID = 172;
const CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_END = 180;

const CUTIN_KARRYN_COCK_PETTING_TYPE_START = 300;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID = 301;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_PALE_ID = 302;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_BLACK_ID = 303;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_NORMAL_ID = 304;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_PALE_ID = 305;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_BLACK_ID = 306;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_NORMAL_ID = 307;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_PALE_ID = 308;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_BLACK_ID = 309;
const CUTIN_KARRYN_COCK_PETTING_GOBLIN_NORMAL_ID = 310;
const CUTIN_KARRYN_COCK_PETTING_GOBLIN_DARK_ID = 311;
const CUTIN_KARRYN_COCK_PETTING_ORC_NORMAL_ID = 312;
const CUTIN_KARRYN_COCK_PETTING_ORC_DARK_ID = 313;
const CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_NORMAL_ID = 314;
const CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_DARK_ID = 315;
const CUTIN_KARRYN_COCK_PETTING_SLIME_NORMAL_ID = 316;
const CUTIN_KARRYN_COCK_PETTING_WEREWOLF_NORMAL_ID = 317;
const CUTIN_KARRYN_COCK_PETTING_YETI_NORMAL_ID = 318;
const CUTIN_KARRYN_COCK_PETTING_TYPE_END = 400;

const CUTIN_EJACULATE_MOUTH_TYPE_START = 401;
const CUTIN_EJACULATE_MOUTH_HUMAN_DEFAULT_ID = 402;
const CUTIN_EJACULATE_MOUTH_TYPE_END = 420;

const CUTIN_EJACULATE_BUKKAKE_REG_TYPE_START = 601;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_NORMAL_ID = 602;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_PALE_ID = 603;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_BLACK_ID = 604;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_NORMAL_ID = 605;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_PALE_ID = 606;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_BLACK_ID = 607;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_NORMAL_ID = 608;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_PALE_ID = 609;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_BLACK_ID = 610;
const CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID = 611;
const CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_DARK_ID = 612;
const CUTIN_EJACULATE_BUKKAKE_REG_ORC_NORMAL_ID = 613;
const CUTIN_EJACULATE_BUKKAKE_REG_ORC_DARK_ID = 614;
const CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID = 615;
const CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_DARK_ID = 616;
const CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID = 617;
const CUTIN_EJACULATE_BUKKAKE_REG_WEREWOLF_NORMAL_ID = 618;
const CUTIN_EJACULATE_BUKKAKE_REG_YETI_NORMAL_ID = 619;
const CUTIN_EJACULATE_BUKKAKE_REG_TYPE_END = 700;

const CUTIN_EJACULATE_BUKKAKE_MIRROR_TYPE_START = 701;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID = 702;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_PALE_ID = 703;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_BLACK_ID = 704;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_NORMAL_ID = 705;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_PALE_ID = 706;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_BLACK_ID = 707;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_NORMAL_ID = 708;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_PALE_ID = 709;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_BLACK_ID = 710;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID = 711;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_DARK_ID = 712;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_NORMAL_ID = 713;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_DARK_ID = 714;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID = 715;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_DARK_ID = 716;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID = 717;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_WEREWOLF_NORMAL_ID = 718;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_YETI_NORMAL_ID = 719;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_TYPE_END = 800;

const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_TYPE_START = 801;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_NORMAL_ID = 802;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_PALE_ID = 803;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_BLACK_ID = 804;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_NORMAL_ID = 805;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_PALE_ID = 806;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_BLACK_ID = 807;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID = 808;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_PALE_ID = 809;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_BLACK_ID = 810;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID = 811;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_DARK_ID = 812;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_NORMAL_ID = 813;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_DARK_ID = 814;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID = 815;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_DARK_ID = 816;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID = 817;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_WEREWOLF_NORMAL_ID = 818;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_YETI_NORMAL_ID = 819;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_TYPE_END = 900;

const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_TYPE_START = 901;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID = 902;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID = 903;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID = 904;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID = 905;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID = 906;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID = 907;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID = 908;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID = 909;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID = 910;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID = 911;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_DARK_ID = 912;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_NORMAL_ID = 913;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_DARK_ID = 914;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID = 915;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_DARK_ID = 916;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID = 917;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID = 918;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_YETI_NORMAL_ID = 919;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_TYPE_END = 1000;

const CUTIN_EJACULATE_ANALCREAMPIE_REG_TYPE_START = 1001;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_NORMAL_ID = 1002;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_PALE_ID = 1003;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_BLACK_ID = 1004;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_NORMAL_ID = 1005;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_PALE_ID = 1006;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_BLACK_ID = 1007;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID = 1008;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_PALE_ID = 1009;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_BLACK_ID = 1010;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID = 1011;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_DARK_ID = 1012;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_NORMAL_ID = 1013;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_DARK_ID = 1014;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID = 1015;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_DARK_ID = 1016;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID = 1017;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_WEREWOLF_NORMAL_ID = 1018;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_YETI_NORMAL_ID = 1019;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_TYPE_END = 1020;

const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_TYPE_START = 1101;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID = 1102;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID = 1103;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID = 1104;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID = 1105;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID = 1106;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID = 1107;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID = 1108;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID = 1109;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID = 1110;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID = 1111;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_DARK_ID = 1112;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_NORMAL_ID = 1113;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_DARK_ID = 1114;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID = 1115;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_DARK_ID = 1116;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID = 1117;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID = 1118;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_YETI_NORMAL_ID = 1119;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_TYPE_END = 1200;





Game_Actor.prototype.resetCutIn = function() {
	this._tachieCutIn = REM_TACHIE_NULL;
	$gameScreen.erasePicture(PICTURE_CUTIN_ID);
};

Game_Actor.prototype.cutInFrame = function() {
	return this._cutInFrame;
};

Game_Actor.prototype.hasTachieCutInOnScreen = function() {
	return this.tachieCutIn != REM_TACHIE_NULL;
};

Game_Actor.prototype.setTachieCutIn = function (n) {
	if(ConfigManager.remCutinsDisabled) return;
	if(this._tachieCutIn === n) {
		return;
	}
	this._tachieCutIn = n;
	//this._cutInFrame = 0;
	this.setCutInWaitAndDirection(n);
	this.displayCutin();
	//this.setDirty();
};

Game_Actor.prototype.setCutInWaitAndDirection = function(cutInId) {
	let poseName = this.poseName;
	let fileNameNormal = '';
	let fileNameNormalCensored = '';
	let fileNameAnime = '';
	let fileNameAnimeCensored = '';
	let wait = CUTIN_DEFAULT_DURATION;
	let startingX = REM_CUT_IN_RIGHT_X;
	let startingY = REM_CUT_IN_TOP_Y;
	let goalX = REM_CUT_IN_LEFT_X;
	let goalY = REM_CUT_IN_TOP_Y;
	let directionX = -1 * REM_CUT_IN_SPEED_X;
	let directionY = 0;
	let widthScale = 100;
	let heightScale = 100;
	//ここから編集してもいい
	
	if(cutInId > CUTIN_PETTING_BOOBS_TYPE_START && cutInId < CUTIN_PETTING_BOOBS_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 10; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 10; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y + 170; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 170;		 //goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 			//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 			//directionY = CutInのY方向
		if(cutInId === CUTIN_PETTING_BOOBS_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_pt_bb_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bb_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bb_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bb_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_PETTING_NIPPLES_TYPE_START && cutInId < CUTIN_PETTING_NIPPLES_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 50; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 50; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 70; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 70; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 			//directionX = CutInのX方向
		directionY = 0; 			//directionY = CutInのY方向
		if(cutInId === CUTIN_PETTING_NIPPLES_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_pt_ns_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_PETTING_CLIT_TYPE_START && cutInId < CUTIN_PETTING_CLIT_TYPE_END) {
		wait = 117; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 				//directionY = CutInのY方向
		if(cutInId === CUTIN_PETTING_CLIT_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_pt_ct_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ct_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ct_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ct_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_PETTING_PUSSY_TYPE_START && cutInId < CUTIN_PETTING_PUSSY_TYPE_END) {
		wait = 82; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_PETTING_PUSSY_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_pt_ps_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ps_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ps_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ps_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_PETTING_BUTT_TYPE_START && cutInId < CUTIN_PETTING_BUTT_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 				//directionY = CutInのY方向
		if(cutInId === CUTIN_PETTING_BUTT_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_pt_bt_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId === CUTIN_PETTING_BUTT_GOBLIN_ID) {
		wait = 62; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_pt_bt_goblin'; //fileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_pt_bt_goblin'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_pt_bt_goblin_anime'; //fileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_pt_bt_goblin_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 280; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 180; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
	}
	else if(cutInId > CUTIN_PETTING_ANAL_TYPE_START && cutInId < CUTIN_PETTING_ANAL_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 90; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 90; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 70; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_BOTTOM_Y + 70; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_PETTING_ANAL_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_pt_an_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_an_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_an_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_an_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_SUCKING_FINGERS_ENEMY_TYPE_START && cutInId < CUTIN_SUCKING_FINGERS_ENEMY_TYPE_END) {		//指を吸わせる ↑
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y + 220; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 220; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_fg_sc_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId === CUTIN_SPANKING_ONE_NAME) {
		wait = 54; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_bs1'; //fileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_bs1_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_bs1_anime'; //fileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_bs1_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 20; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 20; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInId === CUTIN_SPANKING_TWO_NAME) {
		wait = 54; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_bs2'; //fileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_bs2_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_bs2_anime'; //fileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_bs2_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 20; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 20; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInId === CUTIN_SPANKING_THREE_NAME) {
		wait = 54; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_bs3'; //fileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_bs3_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime			= 'cutin_bs3_anime'; //fileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_bs3_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 20; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 20; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}

	else if(cutInId > CUTIN_EJACULATE_MOUTH_TYPE_START && cutInId < CUTIN_EJACULATE_MOUTH_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X - 10; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X - 10; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 160; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 160; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_EJACULATE_MOUTH_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_ej_m_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_EJACULATE_BUKKAKE_REG_TYPE_START && cutInId < CUTIN_EJACULATE_BUKKAKE_REG_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 91; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 91; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_EJACULATE_BUKKAKE_MIRROR_TYPE_START && cutInId < CUTIN_EJACULATE_BUKKAKE_MIRROR_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 637; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 637; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 91; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 91; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		widthScale = -100;
		if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_bk_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_bk_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_EJACULATE_PUSSYCREAMPIE_REG_TYPE_START && cutInId < CUTIN_EJACULATE_PUSSYCREAMPIE_REG_TYPE_END) {
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 263; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 263; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_TYPE_START && cutInId < CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_TYPE_END) {
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 760; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X + 760; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 263; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 263; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		widthScale = -100;
		if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_ps_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_ps_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_EJACULATE_ANALCREAMPIE_REG_TYPE_START && cutInId < CUTIN_EJACULATE_ANALCREAMPIE_REG_TYPE_END) {
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 326; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 326; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_an_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_an_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_an_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_TYPE_START && cutInId < CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_TYPE_END) {
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 684; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X + 684; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 326; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 326; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		widthScale = -100;
		if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_an_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_an_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_an_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_ej_an_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_an_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId === CUTIN_KARRYN_ORGASM_ONE_ID) {		//絶頂1 ↓
		wait = 53; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_or1'; //cutinFileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_or1'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_or1_anime'; //cutinFileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_or1_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y - 150; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y;		//directionY = CutInのY方向
	}
	else if(cutInId === CUTIN_KARRYN_ORGASM_TWO_ID) {		//絶頂2 ↓
		wait = 33; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_or2'; //fileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_or2'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_or2_anime'; //fileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_or2_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X - 90; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 90; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y - 150; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y;		//directionY = CutInのY方向
	}
	else if(cutInId > CUTIN_KARRYN_KISS_ONE_TYPE_START && cutInId < CUTIN_KARRYN_KISS_ONE_TYPE_END) {		//カリンからキス1 ←
		wait = 44; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 190; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 190; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_KARRYN_KISS_ONE_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_ks1_k_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_KARRYN_KISS_TWO_TYPE_START && cutInId < CUTIN_KARRYN_KISS_TWO_TYPE_END) {		//カリンからキス2 ←
		wait = 74; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 30; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 30; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 250; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 250; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_KARRYN_KISS_TWO_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_ks2_k_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_ENEMY_KISS_ONE_TYPE_START && cutInId < CUTIN_ENEMY_KISS_ONE_TYPE_END) {		//敵からキス1 →
		wait = 44; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 190; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 190; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_ENEMY_KISS_ONE_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_ks1_e_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_ENEMY_KISS_TWO_TYPE_START && cutInId < CUTIN_ENEMY_KISS_TWO_TYPE_END) {		//敵からキス2 →
		wait = 74; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 30; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 30; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 250; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 250; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_ENEMY_KISS_TWO_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_ks2_e_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_TOY_PINK_ROTOR_INSERT_TYPE_START && cutInId < CUTIN_TOY_PINK_ROTOR_INSERT_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_toyC_1_in_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyC_1_in_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyC_1_in_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_TOY_PINK_ROTOR_PLAY_TYPE_START && cutInId < CUTIN_TOY_PINK_ROTOR_PLAY_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_toyC_1_play_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyC_1_play_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyC_1_play_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_TOY_PENIS_DILDO_INSERT_TYPE_START && cutInId < CUTIN_TOY_PENIS_DILDO_INSERT_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_toyP_1_in_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyP_1_in_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyP_1_in_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_TOY_PENIS_DILDO_PLAY_TYPE_START && cutInId < CUTIN_TOY_PENIS_DILDO_PLAY_TYPE_END) {
		wait = 91; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_toyP_1_play_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyP_1_play_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyP_1_play_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_START && cutInId < CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_END) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_toyA_1_in_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_in_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_in_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId > CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_START && cutInId < CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_END) {
		wait = 132; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y + 100; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 100; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_DEFAULT_ID) {
			fileNameNormal 			= 'cutin_toyA_1_play_human'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_play_human_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_play_human_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
	}
	else if(cutInId === CUTIN_KARRYN_FLAUNT_ONE_ID) {
		wait = 57; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_flaunt1'; //fileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored	= 'cutin_flaunt1'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_flaunt1_anime'; //fileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_flaunt1_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInId > CUTIN_KARRYN_COCK_PETTING_TYPE_START && cutInId < CUTIN_KARRYN_COCK_PETTING_TYPE_END) {
		wait = 73; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_PALE_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_PALE_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_PALE_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_GOBLIN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_GOBLIN_DARK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_ORC_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_ORC_DARK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_DARK_ID) {
			fileNameNormal 			= 'cutin_pt_ck_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_SLIME_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_WEREWOLF_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_COCK_PETTING_YETI_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_ck_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		
		

	}
	
	
	//編集はここまで
	
	//Pose Cut-In X & Y Positions
	if(this.isInCombatPose()) {
		if(this.isInStandbyPose()) {
			startingX += REM_CUT_IN_COMBAT_STANDBY_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_STANDBY_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET;
		}
		else if(this.isInUnarmedPose()) {
			startingX += REM_CUT_IN_COMBAT_UNARMED_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_UNARMED_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET;
		}
		else if(this.isInDefendPose()) {
			startingX += REM_CUT_IN_COMBAT_DEFEND_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_DEFEND_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET;
		}
		else if(this.isInEvadePose()) {
			startingX += REM_CUT_IN_COMBAT_EVADE_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_EVADE_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_EVADE_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_EVADE_Y_OFFSET;
		}
	}
	else if(this.isInDownPose()) {
		if(this.isInDownOrgasmPose()) {
			startingX += REM_CUT_IN_DOWN_ORG_X_OFFSET;
			goalX += REM_CUT_IN_DOWN_ORG_X_OFFSET;
			startingY += REM_CUT_IN_DOWN_ORG_Y_OFFSET;
			goalY += REM_CUT_IN_DOWN_ORG_Y_OFFSET;
		}
		else if(this.isInDownStaminaPose()) {
			startingX += REM_CUT_IN_DOWN_STAMINA_X_OFFSET;
			goalX += REM_CUT_IN_DOWN_STAMINA_X_OFFSET;
			startingY += REM_CUT_IN_DOWN_STAMINA_Y_OFFSET;
			goalY += REM_CUT_IN_DOWN_STAMINA_Y_OFFSET;
		}
		else if(this.isInDownFallDownPose()) {
			startingX += REM_CUT_IN_DOWN_FALLDOWN_X_OFFSET;
			goalX += REM_CUT_IN_DOWN_FALLDOWN_X_OFFSET;
			startingY += REM_CUT_IN_DOWN_FALLDOWN_Y_OFFSET;
			goalY += REM_CUT_IN_DOWN_FALLDOWN_Y_OFFSET;
		}
	}
	else if(this.isInDefeatedPose()) {
		if(this.isInDefeatedLevel1Pose()) {
			startingX += REM_CUT_IN_DEFEATED_LV1_X_OFFSET;
			goalX += REM_CUT_IN_DEFEATED_LV1_X_OFFSET;
			startingY += REM_CUT_IN_DEFEATED_LV1_Y_OFFSET;
			goalY += REM_CUT_IN_DEFEATED_LV1_Y_OFFSET;
		}
		else if(this.isInDefeatedLevel2Pose()) {
			startingX += REM_CUT_IN_DEFEATED_LV2_X_OFFSET;
			goalX += REM_CUT_IN_DEFEATED_LV2_X_OFFSET;
			startingY += REM_CUT_IN_DEFEATED_LV2_Y_OFFSET;
			goalY += REM_CUT_IN_DEFEATED_LV2_Y_OFFSET;
		}
		else if(this.isInDefeatedGuardPose()) {
			startingX += REM_CUT_IN_DEFEATED_GUARD_X_OFFSET;
			goalX += REM_CUT_IN_DEFEATED_GUARD_X_OFFSET;
			startingY += REM_CUT_IN_DEFEATED_GUARD_Y_OFFSET;
			goalY += REM_CUT_IN_DEFEATED_GUARD_Y_OFFSET;
		}
	}
	else if(this.isInJobPose()) {
		if(this.isInWaitressSexPose()) {
			startingX += REM_CUT_IN_WAITRESS_SEX_X_OFFSET;
			goalX += REM_CUT_IN_WAITRESS_SEX_X_OFFSET;
			startingY += REM_CUT_IN_WAITRESS_SEX_Y_OFFSET;
			goalY += REM_CUT_IN_WAITRESS_SEX_Y_OFFSET;
		}
		else if(poseName == POSE_MAP && $gameParty.isInWaitressBattle) {
			startingX += REM_CUT_IN_WAITRESS_SERVING_X_OFFSET;
			goalX += REM_CUT_IN_WAITRESS_SERVING_X_OFFSET;
			startingY += REM_CUT_IN_WAITRESS_SERVING_Y_OFFSET;
			goalY += REM_CUT_IN_WAITRESS_SERVING_Y_OFFSET;
		}
		else if(this.isInReceptionistPose()) {
			startingX += REM_CUT_IN_RECEPTIONIST_X_OFFSET;
			goalX += REM_CUT_IN_RECEPTIONIST_X_OFFSET;
			startingY += REM_CUT_IN_RECEPTIONIST_Y_OFFSET;
			goalY += REM_CUT_IN_RECEPTIONIST_Y_OFFSET;
		}
		else if($gameParty.isInGloryBattle) {
			if(this.isInToiletSitLeftPose() || this.isInToiletStandRightPose()) {
				startingX += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_X_OFFSET;
				goalX += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_X_OFFSET;
				startingY += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_Y_OFFSET;
				goalY += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_Y_OFFSET;
			}
			else {
				startingX += REM_CUT_IN_GLORY_X_OFFSET;
				goalX += REM_CUT_IN_GLORY_X_OFFSET;
				startingY += REM_CUT_IN_GLORY_Y_OFFSET;
				goalY += REM_CUT_IN_GLORY_Y_OFFSET;
			}
		}
	}
	else {
		if(this.isInGoblinCunnilingusSexPose()) {
			startingX += REM_CUT_IN_SEX_GOBLIN_CL_X_OFFSET;
			goalX += REM_CUT_IN_SEX_GOBLIN_CL_X_OFFSET;
			startingY += REM_CUT_IN_SEX_GOBLIN_CL_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_GOBLIN_CL_Y_OFFSET;
		}
		else if(this.isInLayingTittyfuckSexPose()) {
			startingX += REM_CUT_IN_SEX_LAYING_PAIZURI_X_OFFSET;
			goalX += REM_CUT_IN_SEX_LAYING_PAIZURI_X_OFFSET;
			startingY += REM_CUT_IN_SEX_LAYING_PAIZURI_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_LAYING_PAIZURI_Y_OFFSET;
		}
		else if(this.isInRimjobSexPose()) {
			startingX += REM_CUT_IN_SEX_RIMMING_X_OFFSET;
			goalX += REM_CUT_IN_SEX_RIMMING_X_OFFSET;
			startingY += REM_CUT_IN_SEX_RIMMING_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_RIMMING_Y_OFFSET;
		}
		else if(this.isInThugGangbangPose()) {
			startingX += REM_CUT_IN_SEX_THUG_GB_X_OFFSET;
			goalX += REM_CUT_IN_SEX_THUG_GB_X_OFFSET;
			startingY += REM_CUT_IN_SEX_THUG_GB_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_THUG_GB_Y_OFFSET;
		}
		else if(this.isInGuardGangbangPose()) {
			startingX += REM_CUT_IN_SEX_GUARD_GB_X_OFFSET;
			goalX += REM_CUT_IN_SEX_GUARD_GB_X_OFFSET;
			startingY += REM_CUT_IN_SEX_GUARD_GB_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_GUARD_GB_Y_OFFSET;
		}
		else if(this.isInFootjobSexPose()) {
			startingX += REM_CUT_IN_SEX_FOOTJ_X_OFFSET;
			goalX += REM_CUT_IN_SEX_FOOTJ_X_OFFSET;
			startingY += REM_CUT_IN_SEX_FOOTJ_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_FOOTJ_Y_OFFSET;
		}
		else if(this.isInStandingHJSexPose()) {
			startingX += REM_CUT_IN_SEX_STANDING_HJ_X_OFFSET;
			goalX += REM_CUT_IN_SEX_STANDING_HJ_X_OFFSET;
			startingY += REM_CUT_IN_SEX_STANDING_HJ_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_STANDING_HJ_Y_OFFSET;
		}
		else if(this.isInKneelingBJSexPose()) {
			startingX += REM_CUT_IN_SEX_KNEELING_BJ_X_OFFSET;
			goalX += REM_CUT_IN_SEX_KNEELING_BJ_X_OFFSET;
			startingY += REM_CUT_IN_SEX_KNEELING_BJ_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_KNEELING_BJ_Y_OFFSET;
		}
		else if(this.isInSlimeAnalPiledriverSexPose()) {
			startingX += REM_CUT_IN_SEX_SLIME_PL_X_OFFSET;
			goalX += REM_CUT_IN_SEX_SLIME_PL_X_OFFSET;
			startingY += REM_CUT_IN_SEX_SLIME_PL_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_SLIME_PL_Y_OFFSET;
		}
		else if(this.isInWerewolfBackPose()) {
			startingX += REM_CUT_IN_SEX_WEREWOLF_BACK_X_OFFSET;
			goalX += REM_CUT_IN_SEX_WEREWOLF_BACK_X_OFFSET;
			startingY += REM_CUT_IN_SEX_WEREWOLF_BACK_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_WEREWOLF_BACK_Y_OFFSET;
		}
	}
	
	if(ConfigManager.remCutinsFas) wait = CUTIN_DEFAULT_DURATION;

	BattleManager.cutinWait(wait);
	this._cutInFileNameNoAnime = fileNameNormal;
	this._cutInFileNameYesAnime = fileNameAnime;
	this._cutInFileNameNoAnimeCensored = fileNameNormalCensored;
	this._cutInFileNameYesAnimeCensored = fileNameAnimeCensored;
	this._cutInPosX = startingX;
	this._cutInGoalX = goalX;
	this._cutInPosY = startingY;
	this._cutInGoalY = goalY;
	this._cutInDirectionX = directionX;
	this._cutInDirectionY = directionY;
	this._cutInWidthScale = widthScale;
	this._cutInHeightScale = heightScale;
};

Game_Actor.prototype.displayCutin = function() {
	let fileName = '';
	if(ConfigManager.remCutinsFast) {
		if(Karryn.isCensored())
			fileName = this._cutInFileNameNoAnimeCensored;
		else
			fileName = this._cutInFileNameNoAnime;
	}
	else {
		if(Karryn.isCensored())
			fileName = this._cutInFileNameYesAnimeCensored;
		else
			fileName = this._cutInFileNameYesAnime;
	}
	
	let speedX = 0;
	let speedY = 0;
	let moveDuration = 0;
	if(this._cutInDirectionX != 0) speedX = Math.abs((this._cutInGoalX - this._cutInPosX) / this._cutInDirectionX);
	if(this._cutInDirectionY != 0) speedY = Math.abs((this._cutInGoalY - this._cutInPosY) / this._cutInDirectionY);
	moveDuration = Math.max(speedX, speedY);
	//console.log('displaycutin ' + fileName + ' ' + moveDuration)

	
	$gameScreen.showPicture(PICTURE_CUTIN_ID, fileName, 0, this._cutInPosX, this._cutInPosY, this._cutInWidthScale, this._cutInHeightScale, 255, 0);
	if(moveDuration > 0)
		$gameScreen.movePicture(PICTURE_CUTIN_ID, 0, this._cutInGoalX, this._cutInGoalY, this._cutInWidthScale, this._cutInHeightScale, 255, 0, moveDuration);
	
}

/*
Game_Actor.prototype.getCutInArray = function() {
	let cutInId = this.tachieCutInFile();
	if(!cutInId) return false;
	
	if(cutInId === CUTIN_PETTING_BOOBS_HUMAN_DEFAULT_ID)
		return this.cutInArray_PettingBoobs();
	else if(cutInId === CUTIN_PETTING_NIPPLES_HUMAN_DEFAULT_ID)
		return this.cutInArray_PettingNipples();
	else if(cutInId === CUTIN_PETTING_CLIT_HUMAN_DEFAULT_ID)
		return this.cutInArray_PettingClit();
	else if(cutInId === CUTIN_PETTING_PUSSY_HUMAN_DEFAULT_ID)
		return this.cutInArray_PettingPussy();
	else if(cutInId === CUTIN_PETTING_BUTT_HUMAN_DEFAULT_ID)
		return this.cutInArray_PettingButt();
	else if(cutInId === CUTIN_PETTING_BUTT_GOBLIN_ID)
		return this.cutInArray_PettingButtGoblin();
	else if(cutInId === CUTIN_PETTING_ANAL_HUMAN_DEFAULT_ID)
		return this.cutInArray_PettingAnal();
	else if(cutInId === CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_DEFAULT_ID)
		return this.cutInArray_SuckingEnemyFingers();
	else if(cutInId === CUTIN_SPANKING_ONE_NAME)
		return this.cutInArray_SpankingOne();
	else if(cutInId === CUTIN_SPANKING_TWO_NAME)
		return this.cutInArray_SpankingTwo();
	else if(cutInId === CUTIN_SPANKING_THREE_NAME)
		return this.cutInArray_SpankingThree();
	else if(cutInId === CUTIN_EJACULATE_MOUTH_HUMAN_DEFAULT_ID)
		return this.cutInArray_EjaculateMouth();
		
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake();
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID);
		
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID);
		
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie();
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID);
		
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID);
		
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie();
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID);
		
		else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID);
	else if(cutInId === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID);

	else if(cutInId === CUTIN_KARRYN_KISS_ONE_HUMAN_DEFAULT_ID)
		return this.cutInArray_KarrynKissOne();
	else if(cutInId === CUTIN_ENEMY_KISS_ONE_HUMAN_DEFAULT_ID)
        return this.cutInArray_EnemyKissOne();
	else if(cutInId === CUTIN_KARRYN_KISS_TWO_HUMAN_DEFAULT_ID)
		return this.cutInArray_KarrynKissTwo();
	else if(cutInId === CUTIN_ENEMY_KISS_TWO_HUMAN_DEFAULT_ID)
        return this.cutInArray_EnemyKissTwo();
	else if(cutInId === CUTIN_KARRYN_FLAUNT_ONE_ID)
		return this.cutInArray_KarrynFlaunt();
	else if(cutInId === CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID)
		return this.cutInArray_KarrynCockPetting();
	else if(cutInId === CUTIN_KARRYN_ORGASM_ONE_ID)
		return this.cutInArray_KarrynOrgasmOne();
	else if(cutInId === CUTIN_KARRYN_ORGASM_TWO_ID)
        return this.cutInArray_KarrynOrgasmTwo();
	else if(cutInId === CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_DEFAULT_ID)
        return this.cutInArray_PinkRotor_EnemyInsert();
	else if(cutInId === CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_DEFAULT_ID)
        return this.cutInArray_PinkRotor_EnemyPlay();
	else if(cutInId === CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_DEFAULT_ID)
        return this.cutInArray_PenisDildo_EnemyInsert();
	else if(cutInId === CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_DEFAULT_ID)
        return this.cutInArray_PenisDildo_EnemyPlay();
	else if(cutInId === CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_DEFAULT_ID)
        return this.cutInArray_AnalBeads_EnemyInsert();
	else if(cutInId === CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_DEFAULT_ID)
        return this.cutInArray_AnalBeads_EnemyPlay();
	
	

	return false;
};

Game_Actor.prototype.cutInArray_PettingBoobs = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから
	
	if(fasterCutIns) {
		backImageName = 'pt_bb';
		back_x_offset = -10;
		back_y_offset = 170;
	}
	else {
		backImageName = 'pt_bb_back';
		back_x_offset = -10;
		back_y_offset = 170;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bb_06');
		
		if(cutInFrame === 0 || cutInFrame === 1 || cutInFrame === 12 ||  cutInFrame === 13 || cutInFrame >= 20) {
			frontImageName = 'pt_bb_01';
		}
		else if(cutInFrame === 2 || cutInFrame === 3 || cutInFrame === 10 ||  cutInFrame === 11) {
			frontImageName = 'pt_bb_02';
		}
		else if(cutInFrame === 4 || cutInFrame === 5 || cutInFrame === 8 ||  cutInFrame === 9) {
			frontImageName = 'pt_bb_03';
		}
		else if(cutInFrame === 6 || cutInFrame === 7) {
			frontImageName = 'pt_bb_04';
		}
		else if(cutInFrame === 14 || cutInFrame === 15 || cutInFrame === 18 || cutInFrame === 19) {
			frontImageName = 'pt_bb_05';
		}
		else if(cutInFrame === 16 || cutInFrame === 17) {
			frontImageName = 'pt_bb_06';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};


Game_Actor.prototype.cutInArray_PettingNipples = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから
	
	if(fasterCutIns) {
		backImageName = 'pt_ns';
		back_x_offset = -50;
		back_y_offset = 70;
	}
	else {
		backImageName = 'pt_ns_back';
		back_x_offset = -50;
		back_y_offset = 70;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ns_06');
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) || cutInFrame >= 48) {
			frontImageName = 'pt_ns_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) ) {
			frontImageName = 'pt_ns_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 13) || (cutInFrame >= 42 && cutInFrame <= 47) ) {
			frontImageName = 'pt_ns_03';
		}
		else if( (cutInFrame >= 14 && cutInFrame <= 17) || (cutInFrame >= 27 && cutInFrame <= 29) || (cutInFrame >= 36 && cutInFrame <= 41) ) {
			frontImageName = 'pt_ns_04';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 20) || (cutInFrame >= 24 && cutInFrame <= 26) || (cutInFrame >= 30 && cutInFrame <= 32) ) {
			frontImageName = 'pt_ns_05';
		}
		else if( (cutInFrame >= 21 && cutInFrame <= 23) || (cutInFrame >= 33 && cutInFrame <= 35) ) {
			frontImageName = 'pt_ns_06';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PettingClit = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;

	//ここから

	if(fasterCutIns) {
		backImageName = 'pt_ct';
		back_x_offset = 40;
		back_y_offset = 0;
	}
	else {
		backImageName = 'toyP_1_back';
		back_x_offset = 40;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_05_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_03_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_05');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ct_03');
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 4) || (cutInFrame >= 20 && cutInFrame <= 24) || (cutInFrame >= 40 && cutInFrame <= 44)
		 || (cutInFrame >= 60 && cutInFrame <= 64) || (cutInFrame >= 80 && cutInFrame <= 84) || (cutInFrame >= 100 && cutInFrame <= 104) ) {
			frontImageName = 'pt_ct_01';
		}
		else if( (cutInFrame >= 5 && cutInFrame <= 9) || (cutInFrame >= 15 && cutInFrame <= 19) || (cutInFrame >= 45 && cutInFrame <= 49)
		 || (cutInFrame >= 55 && cutInFrame <= 59) || (cutInFrame >= 85 && cutInFrame <= 89) || (cutInFrame >= 95 && cutInFrame <= 99) ) {
			frontImageName = 'pt_ct_02';
		}
		else if( (cutInFrame >= 10 && cutInFrame <= 14) || (cutInFrame >= 50 && cutInFrame <= 54) || (cutInFrame >= 90 && cutInFrame <= 94) ) {
			frontImageName = 'pt_ct_03';
		}
		else if( (cutInFrame >= 25 && cutInFrame <= 29) || (cutInFrame >= 35 && cutInFrame <= 39) || (cutInFrame >= 65 && cutInFrame <= 69)
		 || (cutInFrame >= 75 && cutInFrame <= 79) || (cutInFrame >= 105 && cutInFrame <= 109) || (cutInFrame >= 115) ) {
			frontImageName = 'pt_ct_04';
		}
		else if( (cutInFrame >= 30 && cutInFrame <= 34) || (cutInFrame >= 70 && cutInFrame <= 74) || (cutInFrame >= 110 && cutInFrame <= 114) ) {
			frontImageName = 'pt_ct_05';
		}
	}

	//ここまで
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PettingPussy = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'pt_ps';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'toyP_1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ps_05');
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 4) || (cutInFrame >= 30 && cutInFrame <= 34) || (cutInFrame >= 60 && cutInFrame <= 64) ) {
			frontImageName = 'pt_ps_01';
		}
		else if( (cutInFrame >= 5 && cutInFrame <= 9) || (cutInFrame >= 35 && cutInFrame <= 39) || (cutInFrame >= 65 && cutInFrame <= 69) ) {
			frontImageName = 'pt_ps_02';
		}
		else if( (cutInFrame >= 10 && cutInFrame <= 14) || (cutInFrame >= 25 && cutInFrame <= 29) || (cutInFrame >= 40 && cutInFrame <= 44)
		 || (cutInFrame >= 55 && cutInFrame <= 59) || (cutInFrame >= 70 && cutInFrame <= 74) ) {
			frontImageName = 'pt_ps_03';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 19) || (cutInFrame >= 45 && cutInFrame <= 49) || (cutInFrame >= 75 && cutInFrame <= 79) ) {
			frontImageName = 'pt_ps_04';
		}
		else if( (cutInFrame >= 20 && cutInFrame <= 24) || (cutInFrame >= 50 && cutInFrame <= 54) || (cutInFrame >= 80) ) {
			frontImageName = 'pt_ps_05';
		}
	}

	//ここまで
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PettingButt = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから
	
	if(fasterCutIns) {
		backImageName = 'pt_bt';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'pt_bt_back';
		back_x_offset = 0;
		back_y_offset = 0;
		front_x_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_06');
		
		if(cutInFrame === 0 || cutInFrame === 1 || cutInFrame === 12 || cutInFrame === 13 || cutInFrame >= 20) {
			frontImageName = 'pt_bt_01';
		}
		else if(cutInFrame === 2 || cutInFrame === 3 || cutInFrame === 10 || cutInFrame === 11) {
			frontImageName = 'pt_bt_02';
		}
		else if(cutInFrame === 4 || cutInFrame === 5 || cutInFrame === 8 || cutInFrame === 9) {
			frontImageName = 'pt_bt_03';
		}
		else if(cutInFrame === 6 || cutInFrame === 7) {
			frontImageName = 'pt_bt_04';
		}
		else if(cutInFrame === 14 || cutInFrame === 15 || cutInFrame === 18 || cutInFrame === 19) {
			frontImageName = 'pt_bt_05';
		}
		else if(cutInFrame === 16 || cutInFrame === 17) {
			frontImageName = 'pt_bt_06';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PettingButtGoblin = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから
	
	if(fasterCutIns) {
		backImageName = 'pt_bt_goblin';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'pt_bt_goblin_back';
		back_x_offset = 0;
		back_y_offset = 0;
		front_x_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_goblin_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_goblin_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_goblin_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_goblin_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_goblin_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_bt_goblin_05');
		
		if( (cutInFrame >= 0 && cutInFrame <= 3) || (cutInFrame >= 22 && cutInFrame <= 24) || (cutInFrame >= 28 && cutInFrame <= 31)
		|| (cutInFrame >= 50 && cutInFrame <= 52) || (cutInFrame >= 56 && cutInFrame <= 59) ) {
			frontImageName = 'pt_bt_goblin_01';
		}
		else if( (cutInFrame >= 4 && cutInFrame <= 7) || (cutInFrame >= 19 && cutInFrame <= 21) || (cutInFrame >= 32 && cutInFrame <= 35)
		|| (cutInFrame >= 47 && cutInFrame <= 49) || (cutInFrame >= 60) ) {
			frontImageName = 'pt_bt_goblin_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 11) || (cutInFrame >= 16 && cutInFrame <= 18) || (cutInFrame >= 36 && cutInFrame <= 39)
		|| (cutInFrame >= 44 && cutInFrame <= 46) ) {
			frontImageName = 'pt_bt_goblin_03';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 15) || (cutInFrame >= 40 && cutInFrame <= 43) ) {
			frontImageName = 'pt_bt_goblin_04';
		}
		else if( (cutInFrame >= 25 && cutInFrame <= 27) || (cutInFrame >= 53 && cutInFrame <= 55) ) {
			frontImageName = 'pt_bt_goblin_05';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PettingAnal = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'pt_an';
		back_x_offset = -90;
		back_y_offset = 70;
	}
	else {
		backImageName = 'pt_an_back';
		back_x_offset = -90;
		back_y_offset = 70;
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_back_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_back');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_05');
		}

		if( (cutInFrame >= 0 && cutInFrame <= 4) || (cutInFrame >= 41) ) {
			frontImageName = 'pt_an_01';
		}
		else if( (cutInFrame >= 5 && cutInFrame <= 9) || (cutInFrame >= 35 && cutInFrame <= 40) ) {
			frontImageName = 'pt_an_02';
		}
		else if( (cutInFrame >= 10 && cutInFrame <= 14) || (cutInFrame >= 29 && cutInFrame <= 34) ) {
			frontImageName = 'pt_an_03';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 18) || (cutInFrame >= 24 && cutInFrame <= 28) ) {
			frontImageName = 'pt_an_04';
		}
		else if( (cutInFrame >= 19 && cutInFrame <= 23) ) {
			frontImageName = 'pt_an_05';
		}
	}

	//ここまで
	
	if(Karryn.isCensored()) {
		backImageName += '_cen';
		if(!fasterCutIns)
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_SuckingEnemyFingers = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'fg_sc';
		back_x_offset = 0;
		back_y_offset = 220;
	}
	else {
		backImageName = 'fg_sc_back';
		back_x_offset = 0;
		back_y_offset = 220;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('fg_sc_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('fg_sc_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('fg_sc_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('fg_sc_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('fg_sc_04');
		
		if( (cutInFrame >= 0 && cutInFrame <= 4) || (cutInFrame >= 30 && cutInFrame <= 34) ) {
			frontImageName = 'fg_sc_01';
		}
		else if( (cutInFrame >= 5 && cutInFrame <= 9) || (cutInFrame >= 25 && cutInFrame <= 29) || (cutInFrame >= 35 && cutInFrame <= 39)
		 || (cutInFrame >= 55) ) {
			frontImageName = 'fg_sc_02';
		}
		else if( (cutInFrame >= 10 && cutInFrame <= 14) || (cutInFrame >= 20 && cutInFrame <= 24) || (cutInFrame >= 40 && cutInFrame <= 44)
		 || (cutInFrame >= 50 && cutInFrame <= 54) ) {
			frontImageName = 'fg_sc_03';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 19) || (cutInFrame >= 45 && cutInFrame <= 49) ) {
			frontImageName = 'fg_sc_04';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_SpankingOne = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'bs_1';
		back_x_offset = 0;
		back_y_offset = 20;
	}
	else {
		backImageName = 'bs_1_back';
		back_x_offset = 0;
		back_y_offset = 20;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_1_05');
		}

		if(cutInFrame === 0 || cutInFrame === 1 || cutInFrame === 4 || cutInFrame === 5 || cutInFrame === 13 || cutInFrame === 14 ||
			cutInFrame === 22 || cutInFrame === 23 || cutInFrame === 26 || cutInFrame === 27 || cutInFrame === 30 || cutInFrame === 31 || 
			cutInFrame === 39 || cutInFrame === 40 || cutInFrame === 48 || cutInFrame === 49 || cutInFrame >= 52) {
			frontImageName = 'bs_1_01';
		}
		else if(cutInFrame === 6 || cutInFrame === 7 || cutInFrame === 11 || cutInFrame === 12 || cutInFrame === 24 || cutInFrame === 25 ||
			cutInFrame === 32 || cutInFrame === 33 || cutInFrame === 37 || cutInFrame === 38 || cutInFrame === 50 || cutInFrame === 51) {
			frontImageName = 'bs_1_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 10) || (cutInFrame >= 34 && cutInFrame <= 36) ) {
			frontImageName = 'bs_1_03';
		}
		else if(cutInFrame === 2 || cutInFrame === 3 || cutInFrame === 15 || cutInFrame === 16 || cutInFrame === 20 || cutInFrame === 21 ||
			cutInFrame === 28 || cutInFrame === 29 || cutInFrame === 41 || cutInFrame === 42 || cutInFrame === 46 || cutInFrame === 47) {
			frontImageName = 'bs_1_04';
		}
		else if( (cutInFrame >= 17 && cutInFrame <= 19) || (cutInFrame >= 43 && cutInFrame <= 45) ) {
			frontImageName = 'bs_1_05';
		}
	}
	
	//ここまで
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_SpankingTwo = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'bs_2';
		back_x_offset = 0;
		back_y_offset = 20;
	}
	else {
		backImageName = 'bs_2_back';
		back_x_offset = 0;
		back_y_offset = 20;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_2_05');
		}

		if(cutInFrame === 0 || cutInFrame === 1 || cutInFrame === 4 || cutInFrame === 5 || cutInFrame === 13 || cutInFrame === 14 ||
			cutInFrame === 22 || cutInFrame === 23 || cutInFrame === 26 || cutInFrame === 27 || cutInFrame === 30 || cutInFrame === 31 || 
			cutInFrame === 39 || cutInFrame === 40 || cutInFrame === 48 || cutInFrame === 49 || cutInFrame >= 52) {
			frontImageName = 'bs_2_01';
		}
		else if(cutInFrame === 6 || cutInFrame === 7 || cutInFrame === 11 || cutInFrame === 12 || cutInFrame === 24 || cutInFrame === 25 ||
			cutInFrame === 32 || cutInFrame === 33 || cutInFrame === 37 || cutInFrame === 38 || cutInFrame === 50 || cutInFrame === 51) {
			frontImageName = 'bs_2_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 10) || (cutInFrame >= 34 && cutInFrame <= 36) ) {
			frontImageName = 'bs_2_03';
		}
		else if(cutInFrame === 2 || cutInFrame === 3 || cutInFrame === 15 || cutInFrame === 16 || cutInFrame === 20 || cutInFrame === 21 ||
			cutInFrame === 28 || cutInFrame === 29 || cutInFrame === 41 || cutInFrame === 42 || cutInFrame === 46 || cutInFrame === 47) {
			frontImageName = 'bs_2_04';
		}
		else if( (cutInFrame >= 17 && cutInFrame <= 19) || (cutInFrame >= 43 && cutInFrame <= 45) ) {
			frontImageName = 'bs_2_05';
		}
	}
	
	//ここまで
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_SpankingThree = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'bs_3';
		back_x_offset = 0;
		back_y_offset = 20;
	}
	else {
		backImageName = 'bs_3_back';
		back_x_offset = 0;
		back_y_offset = 20;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('bs_3_05');
		}

		if(cutInFrame === 0 || cutInFrame === 1 || cutInFrame === 4 || cutInFrame === 5 || cutInFrame === 13 || cutInFrame === 14 ||
			cutInFrame === 22 || cutInFrame === 23 || cutInFrame === 26 || cutInFrame === 27 || cutInFrame === 30 || cutInFrame === 31 || 
			cutInFrame === 39 || cutInFrame === 40 || cutInFrame === 48 || cutInFrame === 49 || cutInFrame >= 52) {
			frontImageName = 'bs_3_01';
		}
		else if(cutInFrame === 6 || cutInFrame === 7 || cutInFrame === 11 || cutInFrame === 12 || cutInFrame === 24 || cutInFrame === 25 ||
			cutInFrame === 32 || cutInFrame === 33 || cutInFrame === 37 || cutInFrame === 38 || cutInFrame === 50 || cutInFrame === 51) {
			frontImageName = 'bs_3_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 10) || (cutInFrame >= 34 && cutInFrame <= 36) ) {
			frontImageName = 'bs_3_03';
		}
		else if(cutInFrame === 2 || cutInFrame === 3 || cutInFrame === 15 || cutInFrame === 16 || cutInFrame === 20 || cutInFrame === 21 ||
			cutInFrame === 28 || cutInFrame === 29 || cutInFrame === 41 || cutInFrame === 42 || cutInFrame === 46 || cutInFrame === 47) {
			frontImageName = 'bs_3_04';
		}
		else if( (cutInFrame >= 17 && cutInFrame <= 19) || (cutInFrame >= 43 && cutInFrame <= 45) ) {
			frontImageName = 'bs_3_05';
		}
	}
	
	//ここまで
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_EjaculateMouth = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ej_m';
		back_x_offset = -10;
		back_y_offset = 160;
	}
	else {
		backImageName = 'ej_m_back';
		back_x_offset = -10;
		back_y_offset = 160;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_m_05');
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) ) {
			frontImageName = 'ej_m_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) ) {
			frontImageName = 'ej_m_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) ) {
			frontImageName = 'ej_m_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) ) {
			frontImageName = 'ej_m_04';
		}
		else if(cutInFrame >= 24) {
			frontImageName = 'ej_m_05';
		}
	}
	//ここまで

	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_EjaculateBukkake = function(subtypeCutin) {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = '';
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = '';
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	
	let usingMirrorCutin = false;
	if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID) {
		backImageName += 'mirror_';
		usingMirrorCutin = true;
	}
	
	//ここから

	if(fasterCutIns) {
		backImageName += 'ej_bk';
		back_x_offset = 0;
		back_y_offset = 91;
	}
	else {
		backImageName += 'ej_bk_back';
		back_x_offset = 0;
		back_y_offset = 91;
		
		if(usingMirrorCutin)
			frontImageName += 'mirror_';
		
		if(Karryn.isCensored()) {
			if(usingMirrorCutin) {
				if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_green_cen');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_slime_cen');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_red_cen');
				}
				else {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_cen');
				}

			}
			else {
				if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_green_cen');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_slime_cen');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_red_cen');
				}
				else {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_cen');
				}
			}

		}
		else {
			if(usingMirrorCutin) {
				if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_green');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_slime');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back_red');
				}
				else {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_back');
				}
			}
			else {
				if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_green');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_slime');
				}
				else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID) {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_red');
				}
				else {
					cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back');
				}
			}
		}
		
		if(usingMirrorCutin) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_bk_04');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_04');
		}
		
		
		if( (cutInFrame >= 0 && cutInFrame <= 2) ) {
			frontImageName += 'ej_bk_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 7) ) {
			frontImageName += 'ej_bk_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 12) ) {
			frontImageName += 'ej_bk_03';
		}
		else if(cutInFrame >= 13) {
			frontImageName += 'ej_bk_04';
		}
	}
	
	//ここまで
	
	if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID) {
		backImageName += '_green';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID) {
		backImageName += '_slime';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID) {
		backImageName += '_red';
	}
	
	if(Karryn.isCensored()) backImageName += '_cen';
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_EjaculatePussyCreampie = function(subtypeCutin) {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = '';
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = '';
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	
	let usingMirrorCutin = false;
	if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
		backImageName += 'mirror_';
		usingMirrorCutin = true;
	}
	
	//ここから

	if(fasterCutIns) {
		backImageName += 'ej_ps';
		back_x_offset = 0;
		back_y_offset = 263;
	}
	else {
		backImageName += 'ej_ps_back';
		back_x_offset = 0;
		back_y_offset = 263;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push(backImageName);
		
		if(usingMirrorCutin)
			frontImageName += 'mirror_';
		
		if(Karryn.isCensored()) {
			if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_green_cen');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_green_cen');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_slime_cen');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_slime_cen');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_red_cen');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_red_cen');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_cen');
			}
			else {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_cen');
			}
		}
		else {
			if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_green');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_green');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_slime');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_slime');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10_red');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10_red');	
			}
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_01');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_02');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_03');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_04');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_05');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_06');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_07');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_08');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_09');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_ps_10');
			}
			else {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_01');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_02');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_03');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_04');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_05');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_06');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_07');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_08');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_09');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_10');
			}
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 2) || (cutInFrame >= 30 && cutInFrame <= 32) || (cutInFrame >= 60 && cutInFrame <= 62)
		 || (cutInFrame >= 90 && cutInFrame <= 92) ) {
			frontImageName += 'ej_ps_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 5) || (cutInFrame >= 27 && cutInFrame <= 29) || (cutInFrame >= 33 && cutInFrame <= 35)
		 || (cutInFrame >= 57 && cutInFrame <= 59) || (cutInFrame >= 63 && cutInFrame <= 65) || (cutInFrame >= 87 && cutInFrame <= 89)
		 || (cutInFrame >= 93 && cutInFrame <= 95) ) {
			frontImageName += 'ej_ps_02';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 8) || (cutInFrame >= 24 && cutInFrame <= 26) || (cutInFrame >= 36 && cutInFrame <= 38)
		 || (cutInFrame >= 54 && cutInFrame <= 56) || (cutInFrame >= 66 && cutInFrame <= 68) || (cutInFrame >= 84 && cutInFrame <= 86)
		 || (cutInFrame >= 96 && cutInFrame <= 98) ) {
			frontImageName += 'ej_ps_03';
		}
		else if( (cutInFrame >= 9 && cutInFrame <= 11) || (cutInFrame >= 21 && cutInFrame <= 23) || (cutInFrame >= 39 && cutInFrame <= 41)
		 || (cutInFrame >= 51 && cutInFrame <= 53) || (cutInFrame >= 69 && cutInFrame <= 71) || (cutInFrame >= 81 && cutInFrame <= 83)
		 || (cutInFrame >= 99 && cutInFrame <= 101) ) {
			frontImageName += 'ej_ps_04';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 14) || (cutInFrame >= 18 && cutInFrame <= 20) || (cutInFrame >= 42 && cutInFrame <= 44)
		 || (cutInFrame >= 48 && cutInFrame <= 50) || (cutInFrame >= 72 && cutInFrame <= 74) || (cutInFrame >= 78 && cutInFrame <= 80)
		 || (cutInFrame >= 102 && cutInFrame <= 104) ) {
			frontImageName += 'ej_ps_05';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 17) || (cutInFrame >= 45 && cutInFrame <= 47) || (cutInFrame >= 75 && cutInFrame <= 77) ) {
		   frontImageName += 'ej_ps_06';
		}
		else if( (cutInFrame >= 105 && cutInFrame <= 110) ) {
			frontImageName += 'ej_ps_07';
		}
		else if( (cutInFrame >= 111 && cutInFrame <= 115) ) {
			frontImageName += 'ej_ps_08';
		}
		else if( (cutInFrame >= 116 && cutInFrame <= 119) ) {
			frontImageName += 'ej_ps_09';
		}
		else if(cutInFrame >= 120) {
			frontImageName += 'ej_ps_10';
		}
	}
	
	//ここまで
	
	if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
		if(fasterCutIns)
			backImageName += '_green';
		else
			frontImageName += '_green';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
		if(fasterCutIns)
			backImageName += '_slime';
		else
			frontImageName += '_slime';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
		if(fasterCutIns)
			backImageName += '_red';
		else
			frontImageName += '_red';
	}
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_EjaculateAnalCreampie = function(subtypeCutin) {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = '';
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = '';
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;

	let usingMirrorCutin = false;
	if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
		backImageName += 'mirror_';
		usingMirrorCutin = true;
	}
	
	//ここから

	if(fasterCutIns) {
		backImageName += 'ej_an';
		back_x_offset = 0;
		back_y_offset = 326;
	}
	else {
		backImageName += 'ej_an_back';
		back_x_offset = 0;
		back_y_offset = 326;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push(backImageName);
		
		if(usingMirrorCutin)
			frontImageName += 'mirror_';
		
		if(Karryn.isCensored()) {
			if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_green_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_green_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_green_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_slime_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_slime_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_slime_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_red_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_red_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_red_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_cen');
			}
			else {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_cen');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_cen');
			}
		}
		else {
			if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_green');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_green');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_green');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_slime');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_slime');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_slime');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10_red');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09_red');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10_red');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_01');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_02');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_03');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_04');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_05');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_06');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_07');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_08');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_09');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('mirror_ej_an_10');
			}
			else {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_01');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_02');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_03');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_04');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_05');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_06');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_07');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_08');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_09');
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_10');
			}
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 2) || (cutInFrame >= 30 && cutInFrame <= 32) || (cutInFrame >= 60 && cutInFrame <= 62)
		 || (cutInFrame >= 90 && cutInFrame <= 92) ) {
			frontImageName += 'ej_an_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 5) || (cutInFrame >= 27 && cutInFrame <= 29) || (cutInFrame >= 33 && cutInFrame <= 35)
		 || (cutInFrame >= 57 && cutInFrame <= 59) || (cutInFrame >= 63 && cutInFrame <= 65) || (cutInFrame >= 87 && cutInFrame <= 89)
		 || (cutInFrame >= 93 && cutInFrame <= 95) ) {
			frontImageName += 'ej_an_02';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 8) || (cutInFrame >= 24 && cutInFrame <= 26) || (cutInFrame >= 36 && cutInFrame <= 38)
		 || (cutInFrame >= 54 && cutInFrame <= 56) || (cutInFrame >= 66 && cutInFrame <= 68) || (cutInFrame >= 84 && cutInFrame <= 86)
		 || (cutInFrame >= 96 && cutInFrame <= 98) ) {
			frontImageName += 'ej_an_03';
		}
		else if( (cutInFrame >= 9 && cutInFrame <= 11) || (cutInFrame >= 21 && cutInFrame <= 23) || (cutInFrame >= 39 && cutInFrame <= 41)
		 || (cutInFrame >= 51 && cutInFrame <= 53) || (cutInFrame >= 69 && cutInFrame <= 71) || (cutInFrame >= 81 && cutInFrame <= 83)
		 || (cutInFrame >= 99 && cutInFrame <= 101) ) {
			frontImageName += 'ej_an_04';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 14) || (cutInFrame >= 18 && cutInFrame <= 20) || (cutInFrame >= 42 && cutInFrame <= 44)
		 || (cutInFrame >= 48 && cutInFrame <= 50) || (cutInFrame >= 72 && cutInFrame <= 74) || (cutInFrame >= 78 && cutInFrame <= 80)
		 || (cutInFrame >= 102 && cutInFrame <= 104) ) {
			frontImageName += 'ej_an_05';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 17) || (cutInFrame >= 45 && cutInFrame <= 47) || (cutInFrame >= 75 && cutInFrame <= 77) ) {
		   frontImageName += 'ej_an_06';
		}
		else if( (cutInFrame >= 105 && cutInFrame <= 110) ) {
			frontImageName += 'ej_an_07';
		}
		else if( (cutInFrame >= 111 && cutInFrame <= 115) ) {
			frontImageName += 'ej_an_08';
		}
		else if( (cutInFrame >= 116 && cutInFrame <= 119) ) {
			frontImageName += 'ej_an_09';
		}
		else if(cutInFrame >= 120) {
			frontImageName += 'ej_an_10';
		}
	}
	
	//ここまで
	
	if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID) {
		if(fasterCutIns)
			backImageName += '_green';
		else
			frontImageName += '_green';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID) {
		if(fasterCutIns)
			backImageName += '_slime';
		else
			frontImageName += '_slime';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID || subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID) {
		if(fasterCutIns)
			backImageName += '_red';
		else
			frontImageName += '_red';
	}
	
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_KarrynKissOne = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ks1_k';
		back_x_offset = 40;
		back_y_offset = 190;
	}
	else {
		backImageName = 'ks1_k_back';
		back_x_offset = 40;
		back_y_offset = 190;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_k_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_k_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_k_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_k_03');
		
		if( (cutInFrame >= 0 && cutInFrame <= 6) || (cutInFrame >= 28 && cutInFrame <= 34) ) {
			frontImageName = 'ks1_k_01';
		}
		else if( (cutInFrame >= 7 && cutInFrame <= 13) || (cutInFrame >= 21 && cutInFrame <= 27) || (cutInFrame >= 35 && cutInFrame <= 41) ) {
			frontImageName = 'ks1_k_02';
		}
		else if( (cutInFrame >= 14 && cutInFrame <= 20) || (cutInFrame >= 42) ) {
			frontImageName = 'ks1_k_03';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_EnemyKissOne = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ks1_e';
		back_x_offset = 0;
		back_y_offset = 190;
	}
	else {
		backImageName = 'ks1_e_back';
		back_x_offset = 0;
		back_y_offset = 190;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_e_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_e_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_e_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks1_e_03');
		
		if( (cutInFrame >= 0 && cutInFrame <= 6) || (cutInFrame >= 28 && cutInFrame <= 34) ) {
			frontImageName = 'ks1_e_01';
		}
		else if( (cutInFrame >= 7 && cutInFrame <= 13) || (cutInFrame >= 21 && cutInFrame <= 27) || (cutInFrame >= 35 && cutInFrame <= 41) ) {
			frontImageName = 'ks1_e_02';
		}
		else if( (cutInFrame >= 14 && cutInFrame <= 20) || (cutInFrame >= 42) ) {
			frontImageName = 'ks1_e_03';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_KarrynKissTwo = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ks2_k';
		back_x_offset = 30;
		back_y_offset = 250;
	}
	else {
		backImageName = 'ks2_k_back';
		back_x_offset = 30;
		back_y_offset = 250;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_06');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_k_07');
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) || (cutInFrame >= 72) ) {
			frontImageName = 'ks2_k_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) || (cutInFrame >= 66 && cutInFrame <= 71) ) {
			frontImageName = 'ks2_k_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) || (cutInFrame >= 60 && cutInFrame <= 65) ) {
			frontImageName = 'ks2_k_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) || (cutInFrame >= 54 && cutInFrame <= 59) ) {
			frontImageName = 'ks2_k_04';
		}
		else if( (cutInFrame >= 24 && cutInFrame <= 29) || (cutInFrame >= 48 && cutInFrame <= 53) ) {
			frontImageName = 'ks2_k_05';
		}
		else if( (cutInFrame >= 30 && cutInFrame <= 35) || (cutInFrame >= 42 && cutInFrame <= 47) ) {
			frontImageName = 'ks2_k_06';
		}
		else if( (cutInFrame >= 36 && cutInFrame <= 41) ) {
			frontImageName = 'ks2_k_07';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_EnemyKissTwo = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ks2_e';
		back_x_offset = -30;
		back_y_offset = 250;
	}
	else {
		backImageName = 'ks2_e_back';
		back_x_offset = -30;
		back_y_offset = 250;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_06');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ks2_e_07');
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) || (cutInFrame >= 72) ) {
			frontImageName = 'ks2_e_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) || (cutInFrame >= 66 && cutInFrame <= 71) ) {
			frontImageName = 'ks2_e_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) || (cutInFrame >= 60 && cutInFrame <= 65) ) {
			frontImageName = 'ks2_e_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) || (cutInFrame >= 54 && cutInFrame <= 59) ) {
			frontImageName = 'ks2_e_04';
		}
		else if( (cutInFrame >= 24 && cutInFrame <= 29) || (cutInFrame >= 48 && cutInFrame <= 53) ) {
			frontImageName = 'ks2_e_05';
		}
		else if( (cutInFrame >= 30 && cutInFrame <= 35) || (cutInFrame >= 42 && cutInFrame <= 47) ) {
			frontImageName = 'ks2_e_06';
		}
		else if( (cutInFrame >= 36 && cutInFrame <= 41) ) {
			frontImageName = 'ks2_e_07';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_KarrynFlaunt = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'flaunt1';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'flaunt1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('flaunt1_06');

		if( (cutInFrame >= 0 && cutInFrame <= 5) || (cutInFrame >= 56) ) {
			frontImageName = 'flaunt1_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) || (cutInFrame >= 50 && cutInFrame <= 55) ) {
			frontImageName = 'flaunt1_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) || (cutInFrame >= 44 && cutInFrame <= 49) ) {
			frontImageName = 'flaunt1_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 19) || (cutInFrame >= 38 && cutInFrame <= 43) ) {
			frontImageName = 'flaunt1_04';
		}
		else if( (cutInFrame >= 20 && cutInFrame <= 25) || (cutInFrame >= 32 && cutInFrame <= 37) ) {
			frontImageName = 'flaunt1_05';
		}
		else if( (cutInFrame >= 26 && cutInFrame <= 31) ) {
			frontImageName = 'flaunt1_06';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_KarrynCockPetting = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'pt_ck';
		back_x_offset = 40;
		back_y_offset = 80;
	}
	else {
		backImageName = 'pt_ck_back';
		back_x_offset = 40;
		back_y_offset = 80;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_05_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_06_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_07_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_05');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_06');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_ck_07');
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) || (cutInFrame >= 48 && cutInFrame <= 53) || (cutInFrame >= 72) ) {
			frontImageName = 'pt_ck_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) || (cutInFrame >= 42 && cutInFrame <= 47) ) {
			frontImageName = 'pt_ck_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) || (cutInFrame >= 36 && cutInFrame <= 41) ) {
			frontImageName = 'pt_ck_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) || (cutInFrame >= 30 && cutInFrame <= 35) ) {
			frontImageName = 'pt_ck_04';
		}
		else if( (cutInFrame >= 24 && cutInFrame <= 29) ) {
			frontImageName = 'pt_ck_05';
		}
		else if( (cutInFrame >= 54 && cutInFrame <= 59) || (cutInFrame >= 66 && cutInFrame <= 71) ) {
			frontImageName = 'pt_ck_06';
		}
		else if( (cutInFrame >= 60 && cutInFrame <= 65) ) {
			frontImageName = 'pt_ck_07';
		}
	}
	
	//ここまで
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_KarrynOrgasmOne = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'or1';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'or1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_06');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or1_07');
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) ) {
			frontImageName = 'or1_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) ) {
			frontImageName = 'or1_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) ) {
			frontImageName = 'or1_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) ) {
			frontImageName = 'or1_04';
		}
		else if( (cutInFrame >= 24 && cutInFrame <= 34) ) {
			frontImageName = 'or1_05';
		}
		else if( (cutInFrame >= 35 && cutInFrame <= 54) ) {
			frontImageName = 'or1_06';
		}
		else if(cutInFrame >= 55) {
			frontImageName = 'or1_07';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_KarrynOrgasmTwo = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'or2';
		back_x_offset = -90;
		back_y_offset = 0;
	}
	else {
		backImageName = 'or2_back';
		back_x_offset = -90;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_06');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('or2_07');
		
		if( (cutInFrame >= 0 && cutInFrame <= 4) ) {
			frontImageName = 'or2_01';
		}
		else if( (cutInFrame >= 5 && cutInFrame <= 9) ) {
			frontImageName = 'or2_02';
		}
		else if( (cutInFrame >= 10 && cutInFrame <= 14) ) {
			frontImageName = 'or2_03';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 19) ) {
			frontImageName = 'or2_04';
		}
		else if( (cutInFrame >= 20 && cutInFrame <= 24) ) {
			frontImageName = 'or2_05';
		}
		else if( (cutInFrame >= 25 && cutInFrame <= 29) ) {
			frontImageName = 'or2_06';
		}
		else if(cutInFrame >= 30) {
			frontImageName = 'or2_07';
		}
	}
	
	//ここまで
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PinkRotor_EnemyInsert = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'toyC_1_in';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'toyC_1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_in_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_in_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_in_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_in_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_in_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_in_06');
		
		if( (cutInFrame >= 0 && cutInFrame <= 3) ) {
			frontImageName = 'toyC_1_in_01';
		}
		else if( (cutInFrame >= 4 && cutInFrame <= 7) ) {
			frontImageName = 'toyC_1_in_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 11) ) {
			frontImageName = 'toyC_1_in_03';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 15) ) {
			frontImageName = 'toyC_1_in_04';
		}
		else if( (cutInFrame >= 16 && cutInFrame <= 26) ) {
			frontImageName = 'toyC_1_in_05';
		}
		else if(cutInFrame >= 27) {
			frontImageName = 'toyC_1_in_06';
		}
	}
	
	//ここまで
	if(Karryn.isCensored()) backImageName += '_cen';
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PinkRotor_EnemyPlay = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'toyC_1_play';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'toyC_1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_play_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_play_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_play_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_play_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyC_1_play_05');

		if( (cutInFrame >= 0 && cutInFrame <= 2) || (cutInFrame >= 25 && cutInFrame <= 27) || (cutInFrame >= 32 && cutInFrame <= 34)
		 || (cutInFrame >= 53 && cutInFrame <= 55) || (cutInFrame >= 60 && cutInFrame <= 62) ) {
			frontImageName = 'toyC_1_play_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 7) || (cutInFrame >= 35 && cutInFrame <= 38) || (cutInFrame >= 63 && cutInFrame <= 65) ) {
			frontImageName = 'toyC_1_play_02';
		}
		else if( (cutInFrame >= 11 && cutInFrame <= 14) || (cutInFrame >= 21 && cutInFrame <= 24) || (cutInFrame >= 39 && cutInFrame <= 42)
		 || (cutInFrame >= 49 && cutInFrame <= 52) || (cutInFrame >= 66 && cutInFrame <= 69) ) {
			frontImageName = 'toyC_1_play_03';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 17) || (cutInFrame >= 43 && cutInFrame <= 45) || (cutInFrame >= 70 && cutInFrame <= 72) ) {
			frontImageName = 'toyC_1_play_04';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 20) || (cutInFrame >= 28 && cutInFrame <= 31) || (cutInFrame >= 46 && cutInFrame <= 48)
		 || (cutInFrame >= 56 && cutInFrame <= 59) || (cutInFrame >= 73) ) {
			frontImageName = 'toyC_1_play_05';
		}
	}
	
	//ここまで
	if(Karryn.isCensored()) backImageName += '_cen';
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PenisDildo_EnemyInsert = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'toyP_1_in';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'toyP_1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_05');
		}
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) ) {
			frontImageName = 'toyP_1_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) ) {
			frontImageName = 'toyP_1_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) ) {
			frontImageName = 'toyP_1_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) ) {
			frontImageName = 'toyP_1_04';
		}
		else if(cutInFrame >= 24) {
			frontImageName = 'toyP_1_05';
		}
	}
	
	//ここまで
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_PenisDildo_EnemyPlay = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'toyP_1_play';
		back_x_offset = 0;
		back_y_offset = 0;
	}
	else {
		backImageName = 'toyP_1_back';
		back_x_offset = 0;
		back_y_offset = 0;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_back');
		if(Karryn.isCensored()) {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_01_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_02_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_03_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_04_cen');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_05_cen');
		}
		else {
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_01');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_02');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_03');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_04');
			cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyP_1_05');
		}

		if( (cutInFrame >= 0 && cutInFrame <= 2) || (cutInFrame >= 36 && cutInFrame <= 40) || (cutInFrame >= 74 && cutInFrame <= 78) ) {
			frontImageName = 'toyP_1_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 7) || (cutInFrame >= 33 && cutInFrame <= 35) || (cutInFrame >= 41 && cutInFrame <= 45)
		 || (cutInFrame >= 71 && cutInFrame <= 73) || (cutInFrame >= 79 && cutInFrame <= 83) ) {
			frontImageName = 'toyP_1_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 12) || (cutInFrame >= 28 && cutInFrame <= 32) || (cutInFrame >= 46 && cutInFrame <= 50)
		 || (cutInFrame >= 66 && cutInFrame <= 70) || (cutInFrame >= 84 && cutInFrame <= 86) ) {
			frontImageName = 'toyP_1_03';
		}
		else if( (cutInFrame >= 13 && cutInFrame <= 15) || (cutInFrame >= 25 && cutInFrame <= 27) || (cutInFrame >= 51 && cutInFrame <= 53)
		 || (cutInFrame >= 63 && cutInFrame <= 65) || (cutInFrame >= 87 && cutInFrame <= 89) ) {
			frontImageName = 'toyP_1_04';
		}
		else if( (cutInFrame >= 16 && cutInFrame <= 24) || (cutInFrame >= 54 && cutInFrame <= 62) || (cutInFrame >= 90) ) {
			frontImageName = 'toyP_1_05';
		}
	}
	
	//ここまで
	if(Karryn.isCensored()) {
		if(fasterCutIns)
			backImageName += '_cen';
		else
			frontImageName += '_cen';
	}
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_AnalBeads_EnemyInsert = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'toyA_1_in';
		back_x_offset = -30;
		back_y_offset = 30;
	}
	else {
		backImageName = 'pt_an_back';
		back_x_offset = -30;
		back_y_offset = 30;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_05');
		
		if( (cutInFrame >= 0 && cutInFrame <= 5) ) {
			frontImageName = 'toyA_1_01';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 11) ) {
			frontImageName = 'toyA_1_02';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 17) ) {
			frontImageName = 'toyA_1_03';
		}
		else if( (cutInFrame >= 18 && cutInFrame <= 23) ) {
			frontImageName = 'toyA_1_04';
		}
		else if(cutInFrame >= 24) {
			frontImageName = 'toyA_1_05';
		}
	}
	
	//ここまで
	if(Karryn.isCensored()) backImageName += '_cen';
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};

Game_Actor.prototype.cutInArray_AnalBeads_EnemyPlay = function() {
	let cutInArray = [ false, 0, 0, false, 0, 0, [] ];
	let cutInFrame = this.cutInFrame();
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'toyA_1_play';
		back_x_offset = 0;
		back_y_offset = 100;
	}
	else {
		backImageName = 'pt_an_back';
		back_x_offset = 0;
		back_y_offset = 100;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('pt_an_back');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_04');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_05');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_06');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('toyA_1_07');
		
		if( (cutInFrame >= 0 && cutInFrame <= 4) || (cutInFrame >= 50 && cutInFrame <= 54) || (cutInFrame >= 100 && cutInFrame <= 104) ) {
			frontImageName = 'toyA_1_01';
		}
		else if( (cutInFrame >= 5 && cutInFrame <= 9) || (cutInFrame >= 55 && cutInFrame <= 59) || (cutInFrame >= 105 && cutInFrame <= 109) ) {
			frontImageName = 'toyA_1_02';
		}
		else if( (cutInFrame >= 10 && cutInFrame <= 14) || (cutInFrame >= 45 && cutInFrame <= 49) || (cutInFrame >= 60 && cutInFrame <= 64)
		 || (cutInFrame >= 95 && cutInFrame <= 99) || (cutInFrame >= 110 && cutInFrame <= 114) ) {
			frontImageName = 'toyA_1_03';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 19) || (cutInFrame >= 65 && cutInFrame <= 69) || (cutInFrame >= 115 && cutInFrame <= 119) ) {
			frontImageName = 'toyA_1_04';
		}
		else if( (cutInFrame >= 20 && cutInFrame <= 24) || (cutInFrame >= 40 && cutInFrame <= 44) || (cutInFrame >= 70 && cutInFrame <= 74)
		 || (cutInFrame >= 90 && cutInFrame <= 94) || (cutInFrame >= 120 && cutInFrame <= 124) ) {
			frontImageName = 'toyA_1_05';
		}
		else if( (cutInFrame >= 25 && cutInFrame <= 29) || (cutInFrame >= 35 && cutInFrame <= 39) || (cutInFrame >= 75 && cutInFrame <= 79)
		 || (cutInFrame >= 85 && cutInFrame <= 89) || (cutInFrame >= 125 && cutInFrame <= 129) ) {
		   frontImageName = 'toyA_1_06';
		}
		else if( (cutInFrame >= 30 && cutInFrame <= 34) || (cutInFrame >= 80 && cutInFrame <= 84) || (cutInFrame >= 130) ) {
		   frontImageName = 'toyA_1_07';
		}		
	}	

	//ここまで
	if(Karryn.isCensored()) backImageName += '_cen';
	
	cutInArray[CUT_IN_ARRAY_BACK_NAME_ID] = backImageName;
	cutInArray[CUT_IN_ARRAY_BACK_X_OFFSET_ID] = back_x_offset;
	cutInArray[CUT_IN_ARRAY_BACK_Y_OFFSET_ID] = back_y_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_NAME_ID] = frontImageName;
	cutInArray[CUT_IN_ARRAY_FRONT_X_OFFSET_ID] = front_x_offset;
	cutInArray[CUT_IN_ARRAY_FRONT_Y_OFFSET_ID] = front_y_offset;
	return cutInArray;
};
*/