var Remtairy = Remtairy || {};
Remtairy.CutIn = Remtairy.CutIn || {};

const CUTIN_DEFAULT_DURATION = 35; //カットインが画面に残る時間

const REM_CUT_IN_LEFT_X = -80;
const REM_CUT_IN_RIGHT_X = 0;
const REM_CUT_IN_TOP_Y = 0;
const REM_CUT_IN_BOTTOM_Y = 80;

const REM_CUT_IN_SPEED_X = 3;
const REM_CUT_IN_SPEED_Y = 3;

const REM_CUT_IN_DEFEATED_LV1_X_OFFSET = 830; //Defeated Lv1の位置をずらす
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

const REM_CUT_IN_GLORY_X_OFFSET = 0; //GH
const REM_CUT_IN_GLORY_Y_OFFSET = 0;

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

const CUTIN_PETTING_BOOBS_NAME = 1;
const CUTIN_PETTING_NIPPLES_NAME = 2;
const CUTIN_PETTING_CLIT_NAME = 3;
const CUTIN_PETTING_PUSSY_NAME = 4;
const CUTIN_PETTING_BUTT_NAME = 5;
const CUTIN_PETTING_BUTT_GOBLIN_NAME = 6;
const CUTIN_PETTING_ANAL_NAME = 7;

const CUTIN_SUCKING_ENEMY_FINGERS_NAME = 50;
const CUTIN_SPANKING_ONE_NAME = 51;
const CUTIN_SPANKING_TWO_NAME = 52;
const CUTIN_SPANKING_THREE_NAME = 53;

const CUTIN_KARRYN_KISS_ONE_NAME = 80;
const CUTIN_ENEMY_KISS_ONE_NAME = 81;
const CUTIN_KARRYN_KISS_TWO_NAME = 82;
const CUTIN_ENEMY_KISS_TWO_NAME = 83;

const CUTIN_KARRYN_FLAUNT_NAME = 90;
const CUTIN_KARRYN_COCK_PETTING_NAME = 91;

const CUTIN_KARRYN_ORGASM_ONE_NAME = 100;
const CUTIN_KARRYN_ORGASM_TWO_NAME = 101;

const CUTIN_TOY_PINK_ROTOR_INSERT_NAME = 200;
const CUTIN_TOY_PINK_ROTOR_PLAY_NAME = 201;
const CUTIN_TOY_PENIS_DILDO_INSERT_NAME = 202;
const CUTIN_TOY_PENIS_DILDO_PLAY_NAME = 203;
const CUTIN_TOY_ANAL_BEADS_INSERT_NAME = 204;
const CUTIN_TOY_ANAL_BEADS_PLAY_NAME = 205;

const CUTIN_EJACULATE_MOUTH_NAME = 600;
const CUTIN_EJACULATE_BUKKAKE_NAME = 610;
const CUTIN_EJACULATE_BUKKAKE_GREEN_NAME = 611;
const CUTIN_EJACULATE_BUKKAKE_SLIME_NAME = 612;
const CUTIN_EJACULATE_PUSSYCREAMPIE_NAME = 620;
const CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME = 621;
const CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME = 622;
const CUTIN_EJACULATE_ANALCREAMPIE_NAME = 630;
const CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME = 631;
const CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME = 632;

Game_Actor.prototype.cutInFrame = function() {
	return this._cutInFrame;
};

Game_Actor.prototype.setTachieCutIn = function (n) {
	if (this._tachieCutIn === n) {
		return;
	}
	this._tachieCutIn = n;
	this._cutInFrame = 0;
	this.setCutInWaitAndDirection(n);
	this.setDirty();
};

Game_Actor.prototype.setCutInWaitAndDirection = function(cutInName) {
	let poseName = this.poseName;
	let wait = CUTIN_DEFAULT_DURATION;
	let startingX = REM_CUT_IN_RIGHT_X;
	let startingY = REM_CUT_IN_TOP_Y;
	let goalX = REM_CUT_IN_LEFT_X;
	let goalY = REM_CUT_IN_TOP_Y;
	let directionX = -1 * REM_CUT_IN_SPEED_X;
	let directionY = 0;
	//ここから編集してもいい
	
	if(cutInName === CUTIN_PETTING_BOOBS_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_BOTTOM_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y;		 //goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 			//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 			//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_PETTING_NIPPLES_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 			//directionX = CutInのX方向
		directionY = 0; 			//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_PETTING_CLIT_NAME) {
		wait = 117; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 				//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_PETTING_PUSSY_NAME) {
		wait = 82; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_PETTING_BUTT_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 				//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_PETTING_BUTT_GOBLIN_NAME) {
		wait = 62; 		//wait = CutInの時間
		startingX = 0; 		//startingX = CutInが始まる時のX位置
		goalX = 0; 		//goalX = CutInが終わる時のX位置
		startingY = 280; 		//startingY = CutInが始まる時のY位置
		goalY = 180; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_PETTING_ANAL_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_BOTTOM_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_SUCKING_ENEMY_FINGERS_NAME) {		//指を吸わせる ↑
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_BOTTOM_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_SPANKING_ONE_NAME || cutInName === CUTIN_SPANKING_TWO_NAME || cutInName === CUTIN_SPANKING_THREE_NAME) {
		wait = 54; 		//wait = CutInの時間
		startingX = 0; 		//startingX = CutInが始まる時のX位置
		goalX = 0; 		//goalX = CutInが終わる時のX位置
		startingY = 0; 		//startingY = CutInが始まる時のY位置
		goalY = 0; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_EJACULATE_MOUTH_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_EJACULATE_BUKKAKE_NAME || cutInName === CUTIN_EJACULATE_BUKKAKE_GREEN_NAME || cutInName === CUTIN_EJACULATE_BUKKAKE_SLIME_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_EJACULATE_PUSSYCREAMPIE_NAME || cutInName === CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME || cutInName === CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME) {
		wait = 121; 		//wait = CutInの時間
		startingX = 0; 		//startingX = CutInが始まる時のX位置
		goalX = 0; 		//goalX = CutInが終わる時のX位置
		startingY = 0; 		//startingY = CutInが始まる時のY位置
		goalY = 0; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_EJACULATE_ANALCREAMPIE_NAME || cutInName === CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME || cutInName === CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME) {
		wait = 121; 		//wait = CutInの時間
		startingX = 0; 		//startingX = CutInが始まる時のX位置
		goalX = 0; 		//goalX = CutInが終わる時のX位置
		startingY = 0; 		//startingY = CutInが始まる時のY位置
		goalY = 0; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_KARRYN_ORGASM_ONE_NAME) {		//絶頂1 ↓
		wait = 53; 		//wait = CutInの時間
		startingX = 0; 		//startingX = CutInが始まる時のX位置
		goalX = 0; 		//goalX = CutInが終わる時のX位置
		startingY = -150; 		//startingY = CutInが始まる時のY位置
		goalY = 0; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y;		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_KARRYN_ORGASM_TWO_NAME) {		//絶頂2 ↓
		wait = 33; 		//wait = CutInの時間
		startingX = 0; 		//startingX = CutInが始まる時のX位置
		goalX = 0; 		//goalX = CutInが終わる時のX位置
		startingY = -150; 		//startingY = CutInが始まる時のY位置
		goalY = 0; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y;		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_KARRYN_KISS_ONE_NAME) {		//カリンからキス1 ←
		wait = 44; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_KARRYN_KISS_TWO_NAME) {		//カリンからキス2 ←
		wait = 74; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_ENEMY_KISS_ONE_NAME) {		//敵からキス1 →
		wait = 44; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_ENEMY_KISS_TWO_NAME) {		//敵からキス2 →
		wait = 74; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_TOY_PINK_ROTOR_INSERT_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_TOY_PINK_ROTOR_PLAY_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_LEFT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_TOY_PENIS_DILDO_INSERT_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_TOY_PENIS_DILDO_PLAY_NAME) {
		wait = 91; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_TOY_ANAL_BEADS_INSERT_NAME) {
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_BOTTOM_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_TOY_ANAL_BEADS_PLAY_NAME) {
		wait = 132; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_BOTTOM_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_KARRYN_FLAUNT_NAME) {
		wait = 57; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	else if(cutInName === CUTIN_KARRYN_COCK_PETTING_NAME) {
		wait = 73; 		//wait = CutInの時間
		startingX = REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX = REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY = REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY = REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	}
	
	
	//編集はここまで
	
	//Pose Cut-In X & Y Positions
	if(this.isInCombatPose()) {
		if(poseName == POSE_STANDBY) {
			startingX += REM_CUT_IN_COMBAT_STANDBY_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_STANDBY_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET;
		}
		else if(poseName == POSE_UNARMED) {
			startingX += REM_CUT_IN_COMBAT_UNARMED_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_UNARMED_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET;
		}
		else if(poseName == POSE_DEFEND) {
			startingX += REM_CUT_IN_COMBAT_DEFEND_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_DEFEND_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET;
		}
		else if(poseName == POSE_EVADE) {
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
			startingX += REM_CUT_IN_GLORY_X_OFFSET;
			goalX += REM_CUT_IN_GLORY_X_OFFSET;
			startingY += REM_CUT_IN_GLORY_Y_OFFSET;
			goalY += REM_CUT_IN_GLORY_Y_OFFSET;
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
	}
	
	
	

	
	BattleManager.cutinWait(wait);
	this._tachieCutInPosX = startingX;
	this._tachieCutInGoalX = goalX;
	this._tachieCutInPosY = startingY;
	this._tachieCutInGoalY = goalY;
	this._tachieCutInDirectionX = directionX;
	this._tachieCutInDirectionY = directionY;
};

Game_Actor.prototype.getCutInArray = function() {
	let cutInName = this.tachieCutInFile();
	if(!cutInName) return false;
	
	if(cutInName === CUTIN_PETTING_BOOBS_NAME)
		return this.cutInArray_PettingBoobs();
	else if(cutInName === CUTIN_PETTING_NIPPLES_NAME)
		return this.cutInArray_PettingNipples();
	else if(cutInName === CUTIN_PETTING_CLIT_NAME)
		return this.cutInArray_PettingClit();
	else if(cutInName === CUTIN_PETTING_PUSSY_NAME)
		return this.cutInArray_PettingPussy();
	else if(cutInName === CUTIN_PETTING_BUTT_NAME)
		return this.cutInArray_PettingButt();
	else if(cutInName === CUTIN_PETTING_BUTT_GOBLIN_NAME)
		return this.cutInArray_PettingButtGoblin();
	else if(cutInName === CUTIN_PETTING_ANAL_NAME)
		return this.cutInArray_PettingAnal();
	else if(cutInName === CUTIN_SUCKING_ENEMY_FINGERS_NAME)
		return this.cutInArray_SuckingEnemyFingers();
	else if(cutInName === CUTIN_SPANKING_ONE_NAME)
		return this.cutInArray_SpankingOne();
	else if(cutInName === CUTIN_SPANKING_TWO_NAME)
		return this.cutInArray_SpankingTwo();
	else if(cutInName === CUTIN_SPANKING_THREE_NAME)
		return this.cutInArray_SpankingThree();
	else if(cutInName === CUTIN_EJACULATE_MOUTH_NAME)
		return this.cutInArray_EjaculateMouth();
	else if(cutInName === CUTIN_EJACULATE_BUKKAKE_NAME)
		return this.cutInArray_EjaculateBukkake();
	else if(cutInName === CUTIN_EJACULATE_BUKKAKE_GREEN_NAME)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_GREEN_NAME);
	else if(cutInName === CUTIN_EJACULATE_BUKKAKE_SLIME_NAME)
		return this.cutInArray_EjaculateBukkake(CUTIN_EJACULATE_BUKKAKE_SLIME_NAME);
	else if(cutInName === CUTIN_EJACULATE_PUSSYCREAMPIE_NAME)
		return this.cutInArray_EjaculatePussyCreampie();
	else if(cutInName === CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME);
	else if(cutInName === CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME)
		return this.cutInArray_EjaculatePussyCreampie(CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME);
	else if(cutInName === CUTIN_EJACULATE_ANALCREAMPIE_NAME)
		return this.cutInArray_EjaculateAnalCreampie();
	else if(cutInName === CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME);
	else if(cutInName === CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME)
		return this.cutInArray_EjaculateAnalCreampie(CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME);

	else if(cutInName === CUTIN_KARRYN_KISS_ONE_NAME)
		return this.cutInArray_KarrynKissOne();
	else if(cutInName === CUTIN_ENEMY_KISS_ONE_NAME)
        return this.cutInArray_EnemyKissOne();
	else if(cutInName === CUTIN_KARRYN_KISS_TWO_NAME)
		return this.cutInArray_KarrynKissTwo();
	else if(cutInName === CUTIN_ENEMY_KISS_TWO_NAME)
        return this.cutInArray_EnemyKissTwo();
	else if(cutInName === CUTIN_KARRYN_FLAUNT_NAME)
		return this.cutInArray_KarrynFlaunt();
	else if(cutInName === CUTIN_KARRYN_COCK_PETTING_NAME)
		return this.cutInArray_KarrynCockPetting();
	else if(cutInName === CUTIN_KARRYN_ORGASM_ONE_NAME)
		return this.cutInArray_KarrynOrgasmOne();
	else if(cutInName === CUTIN_KARRYN_ORGASM_TWO_NAME)
        return this.cutInArray_KarrynOrgasmTwo();
	else if(cutInName === CUTIN_TOY_PINK_ROTOR_INSERT_NAME)
        return this.cutInArray_PinkRotor_EnemyInsert();
	else if(cutInName === CUTIN_TOY_PINK_ROTOR_PLAY_NAME)
        return this.cutInArray_PinkRotor_EnemyPlay();
	else if(cutInName === CUTIN_TOY_PENIS_DILDO_INSERT_NAME)
        return this.cutInArray_PenisDildo_EnemyInsert();
	else if(cutInName === CUTIN_TOY_PENIS_DILDO_PLAY_NAME)
        return this.cutInArray_PenisDildo_EnemyPlay();
	else if(cutInName === CUTIN_TOY_ANAL_BEADS_INSERT_NAME)
        return this.cutInArray_AnalBeads_EnemyInsert();
	else if(cutInName === CUTIN_TOY_ANAL_BEADS_PLAY_NAME)
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
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ej_bk';
		back_x_offset = 0;
		back_y_offset = 91;
	}
	else {
		backImageName = 'ej_bk_back';
		back_x_offset = 0;
		back_y_offset = 91;
		
		if(Karryn.isCensored()) {
			if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_GREEN_NAME) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_green_cen');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_SLIME_NAME) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_slime_cen');
			}
			else {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_cen');
			}

		}
		else {
			if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_GREEN_NAME) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_green');
			}
			else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_SLIME_NAME) {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back_slime');
			}
			else {
				cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_back');
			}
		}
		
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_01');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_02');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_03');
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_bk_04');
		
		if( (cutInFrame >= 0 && cutInFrame <= 2) ) {
			frontImageName = 'ej_bk_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 7) ) {
			frontImageName = 'ej_bk_02';
		}
		else if( (cutInFrame >= 8 && cutInFrame <= 12) ) {
			frontImageName = 'ej_bk_03';
		}
		else if(cutInFrame >= 13) {
			frontImageName = 'ej_bk_04';
		}
	}
	
	//ここまで
	
	if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_GREEN_NAME) {
		backImageName += '_green';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_BUKKAKE_SLIME_NAME) {
		backImageName += '_slime';
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
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ej_ps';
		back_x_offset = 0;
		back_y_offset = 263;
	}
	else {
		backImageName = 'ej_ps_back';
		back_x_offset = 0;
		back_y_offset = 263;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_ps_back');
		if(Karryn.isCensored()) {
			if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME) {
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
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME) {
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
			if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME) {
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
			else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME) {
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
			frontImageName = 'ej_ps_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 5) || (cutInFrame >= 27 && cutInFrame <= 29) || (cutInFrame >= 33 && cutInFrame <= 35)
		 || (cutInFrame >= 57 && cutInFrame <= 59) || (cutInFrame >= 63 && cutInFrame <= 65) || (cutInFrame >= 87 && cutInFrame <= 89)
		 || (cutInFrame >= 93 && cutInFrame <= 95) ) {
			frontImageName = 'ej_ps_02';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 8) || (cutInFrame >= 24 && cutInFrame <= 26) || (cutInFrame >= 36 && cutInFrame <= 38)
		 || (cutInFrame >= 54 && cutInFrame <= 56) || (cutInFrame >= 66 && cutInFrame <= 68) || (cutInFrame >= 84 && cutInFrame <= 86)
		 || (cutInFrame >= 96 && cutInFrame <= 98) ) {
			frontImageName = 'ej_ps_03';
		}
		else if( (cutInFrame >= 9 && cutInFrame <= 11) || (cutInFrame >= 21 && cutInFrame <= 23) || (cutInFrame >= 39 && cutInFrame <= 41)
		 || (cutInFrame >= 51 && cutInFrame <= 53) || (cutInFrame >= 69 && cutInFrame <= 71) || (cutInFrame >= 81 && cutInFrame <= 83)
		 || (cutInFrame >= 99 && cutInFrame <= 101) ) {
			frontImageName = 'ej_ps_04';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 14) || (cutInFrame >= 18 && cutInFrame <= 20) || (cutInFrame >= 42 && cutInFrame <= 44)
		 || (cutInFrame >= 48 && cutInFrame <= 50) || (cutInFrame >= 72 && cutInFrame <= 74) || (cutInFrame >= 78 && cutInFrame <= 80)
		 || (cutInFrame >= 102 && cutInFrame <= 104) ) {
			frontImageName = 'ej_ps_05';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 17) || (cutInFrame >= 45 && cutInFrame <= 47) || (cutInFrame >= 75 && cutInFrame <= 77) ) {
		   frontImageName = 'ej_ps_06';
		}
		else if( (cutInFrame >= 105 && cutInFrame <= 110) ) {
			frontImageName = 'ej_ps_07';
		}
		else if( (cutInFrame >= 111 && cutInFrame <= 115) ) {
			frontImageName = 'ej_ps_08';
		}
		else if( (cutInFrame >= 116 && cutInFrame <= 119) ) {
			frontImageName = 'ej_ps_09';
		}
		else if(cutInFrame >= 120) {
			frontImageName = 'ej_ps_10';
		}
	}
	
	//ここまで
	
	if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_GREEN_NAME) {
		if(fasterCutIns)
			backImageName += '_green';
		else
			frontImageName += '_green';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_PUSSYCREAMPIE_SLIME_NAME) {
		if(fasterCutIns)
			backImageName += '_slime';
		else
			frontImageName += '_slime';
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
	let backImageName = false;
	let back_x_offset = 0;
	let back_y_offset = 0;
	let frontImageName = false;
	let front_x_offset = 0;
	let front_y_offset = 0;
	let fasterCutIns = ConfigManager.remCutinsFast;
	//ここから

	if(fasterCutIns) {
		backImageName = 'ej_an';
		back_x_offset = 0;
		back_y_offset = 326;
	}
	else {
		backImageName = 'ej_an_back';
		back_x_offset = 0;
		back_y_offset = 326;
		cutInArray[CUT_IN_ARRAY_PRELOAD_LIST_ID].push('ej_an_back');
		
		if(Karryn.isCensored()) {
			if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME) {
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
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME) {
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
			if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME) {
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
			else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME) {
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
			frontImageName = 'ej_an_01';
		}
		else if( (cutInFrame >= 3 && cutInFrame <= 5) || (cutInFrame >= 27 && cutInFrame <= 29) || (cutInFrame >= 33 && cutInFrame <= 35)
		 || (cutInFrame >= 57 && cutInFrame <= 59) || (cutInFrame >= 63 && cutInFrame <= 65) || (cutInFrame >= 87 && cutInFrame <= 89)
		 || (cutInFrame >= 93 && cutInFrame <= 95) ) {
			frontImageName = 'ej_an_02';
		}
		else if( (cutInFrame >= 6 && cutInFrame <= 8) || (cutInFrame >= 24 && cutInFrame <= 26) || (cutInFrame >= 36 && cutInFrame <= 38)
		 || (cutInFrame >= 54 && cutInFrame <= 56) || (cutInFrame >= 66 && cutInFrame <= 68) || (cutInFrame >= 84 && cutInFrame <= 86)
		 || (cutInFrame >= 96 && cutInFrame <= 98) ) {
			frontImageName = 'ej_an_03';
		}
		else if( (cutInFrame >= 9 && cutInFrame <= 11) || (cutInFrame >= 21 && cutInFrame <= 23) || (cutInFrame >= 39 && cutInFrame <= 41)
		 || (cutInFrame >= 51 && cutInFrame <= 53) || (cutInFrame >= 69 && cutInFrame <= 71) || (cutInFrame >= 81 && cutInFrame <= 83)
		 || (cutInFrame >= 99 && cutInFrame <= 101) ) {
			frontImageName = 'ej_an_04';
		}
		else if( (cutInFrame >= 12 && cutInFrame <= 14) || (cutInFrame >= 18 && cutInFrame <= 20) || (cutInFrame >= 42 && cutInFrame <= 44)
		 || (cutInFrame >= 48 && cutInFrame <= 50) || (cutInFrame >= 72 && cutInFrame <= 74) || (cutInFrame >= 78 && cutInFrame <= 80)
		 || (cutInFrame >= 102 && cutInFrame <= 104) ) {
			frontImageName = 'ej_an_05';
		}
		else if( (cutInFrame >= 15 && cutInFrame <= 17) || (cutInFrame >= 45 && cutInFrame <= 47) || (cutInFrame >= 75 && cutInFrame <= 77) ) {
		   frontImageName = 'ej_an_06';
		}
		else if( (cutInFrame >= 105 && cutInFrame <= 110) ) {
			frontImageName = 'ej_an_07';
		}
		else if( (cutInFrame >= 111 && cutInFrame <= 115) ) {
			frontImageName = 'ej_an_08';
		}
		else if( (cutInFrame >= 116 && cutInFrame <= 119) ) {
			frontImageName = 'ej_an_09';
		}
		else if(cutInFrame >= 120) {
			frontImageName = 'ej_an_10';
		}
	}
	
	//ここまで
	
	if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_GREEN_NAME) {
		if(fasterCutIns)
			backImageName += '_green';
		else
			frontImageName += '_green';
	}
	else if(subtypeCutin === CUTIN_EJACULATE_ANALCREAMPIE_SLIME_NAME) {
		if(fasterCutIns)
			backImageName += '_slime';
		else
			frontImageName += '_slime';
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