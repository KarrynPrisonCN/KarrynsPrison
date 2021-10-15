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

const REM_CUT_IN_RECEPTIONIST_X_OFFSET = 70; //受付嬢
const REM_CUT_IN_RECEPTIONIST_Y_OFFSET = 0;

const REM_CUT_IN_GLORY_X_OFFSET = 0; //Glory
const REM_CUT_IN_GLORY_Y_OFFSET = 0;

const REM_CUT_IN_STRIPPER_SEX_X_OFFSET = 0; //stripper_vip
const REM_CUT_IN_STRIPPER_SEX_Y_OFFSET = 0;

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
const CUTIN_PETTING_BOOBS_HUMAN_NORMAL_ID = 2;
const CUTIN_PETTING_BOOBS_HUMAN_PALE_ID = 3;
const CUTIN_PETTING_BOOBS_HUMAN_BLACK_ID = 4;
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
const CUTIN_PETTING_BUTT_HUMAN_NORMAL_ID = 42;
const CUTIN_PETTING_BUTT_HUMAN_PALE_ID = 43;
const CUTIN_PETTING_BUTT_HUMAN_BLACK_ID = 44;
const CUTIN_PETTING_BUTT_TYPE_END = 48;

const CUTIN_PETTING_BUTT_GOBLIN_ID = 49;

const CUTIN_PETTING_ANAL_TYPE_START = 51;
const CUTIN_PETTING_ANAL_HUMAN_NORMAL_ID = 52;
const CUTIN_PETTING_ANAL_HUMAN_PALE_ID = 53;
const CUTIN_PETTING_ANAL_HUMAN_BLACK_ID = 54;
const CUTIN_PETTING_ANAL_TYPE_END = 60;

const CUTIN_SUCKING_FINGERS_ENEMY_TYPE_START = 61;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_NORMAL_ID = 62;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_PALE_ID = 63;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_BLACK_ID = 64;
const CUTIN_SUCKING_FINGERS_ENEMY_TYPE_END = 70;

const CUTIN_SPANKING_ONE_NAME = 71;
const CUTIN_SPANKING_TWO_NAME = 72;
const CUTIN_SPANKING_THREE_NAME = 73;

const CUTIN_KARRYN_FLAUNT_ONE_ID = 74;

const CUTIN_KARRYN_ORGASM_ONE_ID = 75;
const CUTIN_KARRYN_ORGASM_TWO_ID = 76;

const CUTIN_KARRYN_KISS_ONE_TYPE_START = 81;
const CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID = 82;
const CUTIN_KARRYN_KISS_ONE_HUMAN_PALE_ID = 83;
const CUTIN_KARRYN_KISS_ONE_HUMAN_BLACK_ID = 84;
const CUTIN_KARRYN_KISS_ONE_TYPE_END = 90;

const CUTIN_KARRYN_KISS_TWO_TYPE_START = 91;
const CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID = 92;
const CUTIN_KARRYN_KISS_TWO_HUMAN_PALE_ID = 93;
const CUTIN_KARRYN_KISS_TWO_HUMAN_BLACK_ID = 94;
const CUTIN_KARRYN_KISS_TWO_TYPE_END = 100;

const CUTIN_ENEMY_KISS_ONE_TYPE_START = 101;
const CUTIN_ENEMY_KISS_ONE_HUMAN_NORMAL_ID = 102;
const CUTIN_ENEMY_KISS_ONE_HUMAN_PALE_ID = 103;
const CUTIN_ENEMY_KISS_ONE_HUMAN_BLACK_ID = 104;
const CUTIN_ENEMY_KISS_ONE_TYPE_END = 110;

const CUTIN_ENEMY_KISS_TWO_TYPE_START = 111;
const CUTIN_ENEMY_KISS_TWO_HUMAN_NORMAL_ID = 112;
const CUTIN_ENEMY_KISS_TWO_HUMAN_PALE_ID = 113;
const CUTIN_ENEMY_KISS_TWO_HUMAN_BLACK_ID = 114;
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
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_NORMAL_ID = 162;
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_PALE_ID = 163;
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_BLACK_ID = 164;
const CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_END = 170;

const CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_START = 171;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_NORMAL_ID = 172;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_PALE_ID = 173;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_BLACK_ID = 174;
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
const CUTIN_EJACULATE_MOUTH_HUMAN_NORMAL_ID = 402;
const CUTIN_EJACULATE_MOUTH_HUMAN_PALE_ID = 403;
const CUTIN_EJACULATE_MOUTH_HUMAN_BLACK_ID = 404;
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

Game_Actor.prototype.setTachieCutIn = function(n) {
	if(ConfigManager.remCutinsDisabled) return;
	if(this._tachieCutIn === n) {
		return;
	}
	//console.log(n)
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
		if(cutInId === CUTIN_PETTING_BOOBS_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_bb_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bb_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bb_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bb_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_PETTING_BOOBS_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_bb_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bb_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bb_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bb_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_PETTING_BOOBS_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_pt_bb_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bb_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bb_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bb_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_PETTING_BUTT_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_bt_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_PETTING_BUTT_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_pt_bt_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_PETTING_BUTT_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_bt_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_PETTING_ANAL_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_pt_an_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_an_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_an_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_an_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_PETTING_ANAL_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_pt_an_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_an_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_an_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_an_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_PETTING_ANAL_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_pt_an_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_an_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_an_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_an_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_fg_sc_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_fg_sc_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_fg_sc_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_EJACULATE_MOUTH_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ej_m_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_MOUTH_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_ej_m_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_EJACULATE_MOUTH_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ej_m_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
			fileNameNormal 			= 'cutin_ej_bk_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
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
			fileNameNormal 			= 'cutin_ej_ps_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
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
			fileNameNormal 			= 'cutin_ej_an_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
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
		if(cutInId === CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ks1_k_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_KISS_ONE_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_ks1_k_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_KISS_ONE_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ks1_k_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ks2_k_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_KISS_TWO_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_ks2_k_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_KARRYN_KISS_TWO_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ks2_k_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_ENEMY_KISS_ONE_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ks1_e_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_ENEMY_KISS_ONE_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_ks1_e_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_ENEMY_KISS_ONE_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ks1_e_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_ENEMY_KISS_TWO_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_ks2_e_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_ENEMY_KISS_TWO_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_ks2_e_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_ENEMY_KISS_TWO_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_ks2_e_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_toyA_1_in_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_in_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_in_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_toyA_1_in_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_in_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_in_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_toyA_1_in_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_in_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_in_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		if(cutInId === CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_NORMAL_ID) {
			fileNameNormal 			= 'cutin_toyA_1_play_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_play_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_play_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_PALE_ID) {
			fileNameNormal 			= 'cutin_toyA_1_play_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_play_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_play_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(cutInId === CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_BLACK_ID) {
			fileNameNormal 			= 'cutin_toyA_1_play_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_toyA_1_play_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_toyA_1_play_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
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
		else if(this.isInStripperSexPose()) {
			startingX += REM_CUT_IN_STRIPPER_SEX_X_OFFSET;
			goalX += REM_CUT_IN_STRIPPER_SEX_X_OFFSET;
			startingY += REM_CUT_IN_STRIPPER_SEX_Y_OFFSET;
			goalY += REM_CUT_IN_STRIPPER_SEX_Y_OFFSET;
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
	
};


Remtairy.CutIn.BattleManager_processActionSequence =
    BattleManager.processActionSequence;
BattleManager.processActionSequence = function(actionName, actionArgs) {
	// Rem Cut In: #
	if(['REM CUTIN'].contains(actionName)) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		let cutinId = eval(actionArgs[0]);
		
		if(cutinId == CUTIN_KARRYN_ORGASM_TWO_ID) {
			actor.startAnimation($dataSkills[SKILL_FEMALE_ORGASM_TWO_ID].animationId, false, 0);
			actor.setTachieCutIn(cutinId);
			$gameScreen.startShake(REM_ORGASM_LV2_SCREEN_SHAKE_POWER, REM_ORGASM_LV2_SCREEN_SHAKE_SPEED, REM_ORGASM_LV2_SCREEN_SHAKE_DURATION);
			return;
		}
		else if(cutinId == CUTIN_KARRYN_ORGASM_ONE_ID) {
			actor.startAnimation($dataSkills[SKILL_FEMALE_ORGASM_ONE_ID].animationId, false, 0);
			actor.setTachieCutIn(cutinId);
			$gameScreen.startShake(REM_ORGASM_LV1_SCREEN_SHAKE_POWER, REM_ORGASM_LV1_SCREEN_SHAKE_SPEED, REM_ORGASM_LV1_SCREEN_SHAKE_DURATION);
			return;
		}
		
		return Karryn.setTachieCutIn(eval(actionArgs[0]));
    }
	return Remtairy.CutIn.BattleManager_processActionSequence.call(this, actionName, actionArgs);
};