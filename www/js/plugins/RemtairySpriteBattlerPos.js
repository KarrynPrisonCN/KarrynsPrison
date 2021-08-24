var Remtairy = Remtairy || {};
Remtairy.SpriteBattlerPos = Remtairy.SpriteBattlerPos || {};

const SBP_ENEMY_DAMAGE_OFFSET_X = 101; //敵のダメージ数字の位置X
const SBP_ENEMY_DAMAGE_OFFSET_Y = 28;　//敵のダメージ数字の位置Y

const REM_SPANK_LV1_ANIME_OFFSET_X = 435;	//Spank Lv1のCut-inと同時に出るMVアニメ　X　＋　この数字
const REM_SPANK_LV1_ANIME_OFFSET_Y = 0;		//Spank Lv1のCut-inと同時に出るMVアニメ　Y　＋　この数字

const REM_SPANK_LV2_ANIME_OFFSET_X = 435;	//Spank Lv2のCut-inと同時に出るMVアニメ　X　＋　この数字
const REM_SPANK_LV2_ANIME_OFFSET_Y = 0;		//Spank Lv2のCut-inと同時に出るMVアニメ　Y　＋　この数字

const REM_SPANK_LV3_ANIME_OFFSET_X = 435;	//Spank Lv3のCut-inと同時に出るMVアニメ　X　＋　この数字
const REM_SPANK_LV3_ANIME_OFFSET_Y = 0;		//Spank Lv3のCut-inと同時に出るMVアニメ　Y　＋　この数字

//Screen Shake
//Butt Spank Lv1の時のシェイク
const REM_SPANK_LV1_SCREEN_SHAKE_POWER = 4; 
const REM_SPANK_LV1_SCREEN_SHAKE_SPEED = 10;
const REM_SPANK_LV1_SCREEN_SHAKE_DURATION = 6;

//Butt Spank Lv2の時のシェイク
const REM_SPANK_LV2_SCREEN_SHAKE_POWER = 4; 
const REM_SPANK_LV2_SCREEN_SHAKE_SPEED = 10;
const REM_SPANK_LV2_SCREEN_SHAKE_DURATION = 6;

//Butt Spank Lv3の時のシェイク
const REM_SPANK_LV3_SCREEN_SHAKE_POWER = 4; 
const REM_SPANK_LV3_SCREEN_SHAKE_SPEED = 10;
const REM_SPANK_LV3_SCREEN_SHAKE_DURATION = 6;

//敵の攻撃スキルの時のシェイク
const REM_ENEMY_ATTACK_SCREEN_SHAKE_POWER = 5; 
const REM_ENEMY_ATTACK_SCREEN_SHAKE_SPEED = 5;
const REM_ENEMY_ATTACK_SCREEN_SHAKE_DURATION = 10;

//絶頂Lv1の時のシェイク
const REM_ORGASM_LV1_SCREEN_SHAKE_POWER = 6; 
const REM_ORGASM_LV1_SCREEN_SHAKE_SPEED = 6;
const REM_ORGASM_LV1_SCREEN_SHAKE_DURATION = 10;

//絶頂Lv2の時のシェイク
const REM_ORGASM_LV2_SCREEN_SHAKE_POWER = 12; 
const REM_ORGASM_LV2_SCREEN_SHAKE_SPEED = 8;
const REM_ORGASM_LV2_SCREEN_SHAKE_DURATION = 10;

//=============================================================================
 /*:
 * @plugindesc Sprite Battler Pos
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

/////////////
/////////////////
// Game Actor
/////////////////
//////////////

//カリンのポーズのアニメやダメージの位置
Game_Actor.prototype.setSpriteBattlerPosData = function(poseName) {
	if(poseName == POSE_STANDBY) {
		this._sbp_current_x = 1060;
		this._sbp_current_y = -150;
	} else if(poseName == POSE_UNARMED) {
		this._sbp_current_x = 1045;
		this._sbp_current_y = -130;
	} else if(poseName == POSE_DEFEND) {
		this._sbp_current_x = 1020;
		this._sbp_current_y = -120;
	} else if(poseName == POSE_EVADE) {
		this._sbp_current_x = 930;
		this._sbp_current_y = -240;
	} else if(poseName == POSE_DOWN_ORGASM) {
		this._sbp_current_x = 880;
		this._sbp_current_y = -150;
	} else if(poseName == POSE_DOWN_FALLDOWN) {
		this._sbp_current_x = 1090;
		this._sbp_current_y = -190;
	} else if(poseName == POSE_DOWN_STAMINA) {
		this._sbp_current_x = 1020;
		this._sbp_current_y = -140;	
	} else if(poseName == POSE_DEFEATED_LEVEL1) {
		this._sbp_current_x = 835;
		this._sbp_current_y = 0;
	} else if(poseName == POSE_DEFEATED_LEVEL2) {
		this._sbp_current_x = 990;
		this._sbp_current_y = -310;
	} else if(poseName == POSE_DEFEATED_LEVEL3) {
		this._sbp_current_x = 1165;
		this._sbp_current_y = -150;
	} else if(poseName == POSE_DEFEATED_LEVEL4) {
		this._sbp_current_x = 920;
		this._sbp_current_y = -175;
	} else if(poseName == POSE_DEFEATED_GUARD) {
		this._sbp_current_x = 870;
		this._sbp_current_y = -240;		
	} else if(poseName == POSE_THUGGANGBANG) {
		this._sbp_current_x = 960;
		this._sbp_current_y = -150;
	} else if(poseName == POSE_GUARDGANGBANG) {
		this._sbp_current_x = 1240;
		this._sbp_current_y = -140;
	} else if(poseName == POSE_GOBLINCUNNILINGUS) {
		this._sbp_current_x = 980;
		this._sbp_current_y = -220;
	} else if(poseName == POSE_SLIME_PILEDRIVER_ANAL) {
		this._sbp_current_x = 1050;
		this._sbp_current_y = -130;	
	} else if(poseName == POSE_ORC_PAIZURI) {
		this._sbp_current_x = 1065;
		this._sbp_current_y = -70;	
	} else if(poseName == POSE_BJ_KNEELING) {
		this._sbp_current_x = 1150;
		this._sbp_current_y = -100;	
	} else if(poseName == POSE_MAP && $gameParty.isInWaitressBattle) {
		this._sbp_current_x = 1230;
		this._sbp_current_y = -90;
	} else if(poseName == POSE_FOOTJOB) {
		this._sbp_current_x = 1025;
		this._sbp_current_y = -175;
	} else if(poseName == POSE_HJ_STANDING) {
		this._sbp_current_x = 1140;
		this._sbp_current_y = -160;
	} else if(poseName == POSE_PAIZURI_LAYING) {
		this._sbp_current_x = 1000;
		this._sbp_current_y = -60;
	} else if(poseName == POSE_REVERSE_COWGIRL) {
		this._sbp_current_x = 1035;
		this._sbp_current_y = -240;	
	} else if(poseName == POSE_KARRYN_COWGIRL) {
		this._sbp_current_x = 1025;
		this._sbp_current_y = -135;	
	} else if(poseName == POSE_LIZARDMAN_COWGIRL) {
		this._sbp_current_x = 1100;
		this._sbp_current_y = -320;	
	} else if(poseName == POSE_WAITRESS_SEX) {
		this._sbp_current_x = 1040;
		this._sbp_current_y = -150;
	} else if(poseName == POSE_WEREWOLF_BACK) {
		this._sbp_current_x = 830;
		this._sbp_current_y = 15;
	} else if(poseName == POSE_YETI_PAIZURI) {
		this._sbp_current_x = 1110;
		this._sbp_current_y = -180;
	} else if(poseName == POSE_YETI_CARRY) {
		this._sbp_current_x = 1205;
		this._sbp_current_y = -225;	
	} else if(poseName == POSE_RECEPTIONIST) {
		this._sbp_current_x = 1045;
		this._sbp_current_y = -40;	
	} else if(poseName == POSE_KICKCOUNTER) {
		this._sbp_current_x = 1165;
		this._sbp_current_y = -250;
	} else if(poseName == POSE_MASTURBATE_COUCH) {
		this._sbp_current_x = 880;
		this._sbp_current_y = -110;
	} else if(poseName == POSE_MASTURBATE_INBATTLE) {
		this._sbp_current_x = 1055;
		this._sbp_current_y = -110;
	} else if(poseName == POSE_TOILET_SITTING) {
		this._sbp_current_x = 820;
		this._sbp_current_y = -180;
	} else if(poseName == POSE_TOILET_SIT_LEFT) {
		this._sbp_current_x = 575;
		this._sbp_current_y = 5;
	} else if(poseName == POSE_TOILET_SIT_RIGHT) {
		this._sbp_current_x = 1080;
		this._sbp_current_y = 5;
	} else if(poseName == POSE_TOILET_STAND_LEFT) {
		this._sbp_current_x = 1010;
		this._sbp_current_y = -10;
	} else if(poseName == POSE_TOILET_STAND_RIGHT) {
		this._sbp_current_x = 620;
		this._sbp_current_y = -10;
		
	//Use pose standby values when none of the above
	} else {
		this.setSpriteBattlerPosData(POSE_STANDBY);
		return;
	}
};


//上の基本位置からずれて表示されるダメージの位置 X
Sprite_Actor.prototype.damageOffsetX = function() {
	let poseName = Karryn.poseName;
	let offset = 0;
	
	if(poseName == POSE_STANDBY) {
		offset = -10; 
	}
	else if(poseName == POSE_UNARMED) {
		offset = -80; 
	}
	else if(poseName == POSE_DEFEND) {
		offset = -5; 
	}
	else if(poseName == POSE_EVADE) {
		offset = 170; 
	}
	else if(poseName == POSE_DOWN_FALLDOWN) {
		offset = 15; 
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		offset = 10;
	}
	else if(poseName == POSE_DEFEATED_GUARD) {
		offset = 0;
	}
	else if(poseName == POSE_SLIME_PILEDRIVER_ANAL) {
		offset = -10; 
	}
	else if(poseName == POSE_REVERSE_COWGIRL) {
		offset = 10; 
	}
	else if(poseName == POSE_FOOTJOB) {
		offset = 14; 
	}
	else if(poseName == POSE_HJ_STANDING) {
		offset = -10; 
	}
	else if(poseName == POSE_KICKCOUNTER) {
		offset = -17; 
	}
	else if(poseName == POSE_MAP && $gameParty.isInWaitressBattle) {
		offset = -20; 
	}
	
	if(this._battler && this._battler._sbp_special_type) {
		offset -= this._battler.remSpriteBattlerSpecialPosX();
		offset += this._battler._sbp_current_x;
	}
	
    return offset;
};

//上の基本位置からずれて表示されるダメージの位置 Y
Sprite_Actor.prototype.damageOffsetY = function() {
	let poseName = Karryn.poseName;
	let offset = 0;
	
	if(poseName == POSE_STANDBY) {
		offset = -5;
	}
	else if(poseName == POSE_UNARMED) {
		offset = 40; 
	}
	else if(poseName == POSE_DEFEND) {
		offset = 50; 
	}
	else if(poseName == POSE_EVADE) {
		offset = 120;
	}
	else if(poseName == POSE_DOWN_FALLDOWN) {
		offset = 70; 
	}
	else if(poseName == POSE_DEFEATED_LEVEL2) {
		offset = 70;
	}
	else if(poseName == POSE_DEFEATED_GUARD) {
		offset = 37;
	}
	else if(poseName == POSE_GUARDGANGBANG) {
		offset = 45;
	}
	else if(poseName == POSE_GOBLINCUNNILINGUS) {
		offset = 40; 
	}
	else if(poseName == POSE_SLIME_PILEDRIVER_ANAL) {
		offset = 60; 
	}
	else if(poseName == POSE_ORC_PAIZURI) {
		offset = 60;
	}
	else if(poseName == POSE_BJ_KNEELING) {
		offset = 50;
	}
	else if(poseName == POSE_FOOTJOB) {
		offset = 50; 
	}
	else if(poseName == POSE_HJ_STANDING) {
		offset = 50; 
	}
	else if(poseName == POSE_REVERSE_COWGIRL) {
		offset = 60; 
	}
	else if(poseName == POSE_LIZARDMAN_COWGIRL) {
		offset = 90; 
	}
	else if(poseName == POSE_YETI_CARRY) {
		offset = 20; 
	}
	else if(poseName == POSE_KICKCOUNTER) {
		offset = 80; 
	}
	else if(poseName == POSE_TOILET_SITTING) {
		offset = 20; 
	}

	if(this._battler && this._battler._sbp_special_type) {
		offset -= this._battler.remSpriteBattlerSpecialPosY();
		offset += this._battler._sbp_current_y;
	}
	
    return offset;
};


//以下のコードを編集してはだめ

Remtairy.SpriteBattlerPos.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
    Remtairy.SpriteBattlerPos.Game_Actor_initMembers.call(this);
	this._sbp_current_x = 0;
	this._sbp_current_y = 0;
};

//BattleHud
Game_Actor.prototype.remSpriteBattlerPosX = function() {
	if(this._sbp_special_type) return this.remSpriteBattlerSpecialPosX();
	return this._sbp_current_x;
};
Game_Actor.prototype.remSpriteBattlerPosY = function() {
	if(this._sbp_special_type) return this.remSpriteBattlerSpecialPosY();
	return this._sbp_current_y;
};


Game_Actor.prototype.useSpecialRemSpriteBattlerPos = function(specialType) {
	this._sbp_special_type = specialType;
};
Game_Actor.prototype.resetSpecialRemSpriteBattlerPos = function() {
	this._sbp_special_type = false;
};

Game_Actor.prototype.remSpriteBattlerSpecialPosX = function() {
	let specialPos = 0;
	
	if(this._sbp_special_type == SPANK_LVL_ONE)
		specialPos = this._tachieCutInPosX + REM_SPANK_LV1_ANIME_OFFSET_X;
	else if(this._sbp_special_type == SPANK_LVL_TWO)
		specialPos = this._tachieCutInPosX + REM_SPANK_LV2_ANIME_OFFSET_X;
	else if(this._sbp_special_type == SPANK_LVL_THREE)
		specialPos = this._tachieCutInPosX + REM_SPANK_LV3_ANIME_OFFSET_X;
	
	return specialPos;
};
Game_Actor.prototype.remSpriteBattlerSpecialPosY = function() {
	let specialPos = 0;
	
	if(this._sbp_special_type == SPANK_LVL_ONE)
		specialPos = this._tachieCutInPosY + REM_SPANK_LV1_ANIME_OFFSET_Y;
	else if(this._sbp_special_type == SPANK_LVL_TWO)
		specialPos = this._tachieCutInPosY + REM_SPANK_LV2_ANIME_OFFSET_Y;
	else if(this._sbp_special_type == SPANK_LVL_THREE)
		specialPos = this._tachieCutInPosY + REM_SPANK_LV3_ANIME_OFFSET_Y;
	
	return specialPos;
};

//unused
Game_Actor.prototype.resetSpriteBattlerPos = function() {
	//this.setSpriteBattlerPosToBoobs();
};		
			
/////////////
////////////////
// Sprite Battler
/////////////////
//////////////

Sprite_Battler.prototype.remSpriteBattlerPosX = function() {
	if(!this._battler) return 0;
	return this._battler.remSpriteBattlerPosX();
};
Sprite_Battler.prototype.remSpriteBattlerPosY = function() {
	if(!this._battler) return 0;
	return this._battler.remSpriteBattlerPosY();
};

//////
////////////
// Battle Manager
////////////
//////

BattleManager.actionClearBattleLog = function() {
    //this._logWindow.clear();
	//$gameActors.actor(ACTOR_KARRYN_ID).resetTachieCutIn();
	$gameActors.actor(ACTOR_KARRYN_ID).resetCutIn();
    return false;
};
