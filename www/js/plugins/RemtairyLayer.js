﻿var Remtairy = Remtairy || {};
Remtairy.Layer = Remtairy.Layer || {};

//=============================================================================
 /*:
 * @plugindesc Layer
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const LAYER_TYPE_HOPPE = 2; //hoppe_
const LAYER_TYPE_SWEAT = 3; //sweat_
const LAYER_TYPE_MOUTH = 4; //mouth_
const LAYER_TYPE_EYES = 5; //eyes_
const LAYER_TYPE_EYEBROWS = 6; //eyebrows_
const LAYER_TYPE_HAIR = 8; //hair_
const LAYER_TYPE_HAT = 9; //hat_
const LAYER_TYPE_GLASSES = 10; //glasses_
const LAYER_TYPE_TIE = 11; //tie_
const LAYER_TYPE_FACE = 12; //face_

const LAYER_TYPE_BODY = 20; //body_
const LAYER_TYPE_HEAD = 21; //head_
const LAYER_TYPE_BOOBS = 22; //boobs_
const LAYER_TYPE_LEFT_BOOB = 23; //leftboob_
const LAYER_TYPE_RIGHT_BOOB = 24; //rightboob_
const LAYER_TYPE_ERECT_BOOBS = 25; //boobs_bokki
const LAYER_TYPE_BUTT = 26; //butt_
const LAYER_TYPE_CLOTHES = 27; //clothes_
const LAYER_TYPE_SKIRT = 28; //skirt_
const LAYER_TYPE_LEGS = 29; //legs_

const LAYER_TYPE_LEFT_ARM = 30; //leftarm_
const LAYER_TYPE_RIGHT_ARM = 31; //rightarm_
const LAYER_TYPE_WEAPON = 32; //weapon_
const LAYER_TYPE_PANTIES = 33; //panties_
const LAYER_TYPE_PUBIC = 34; //pubic_
const LAYER_TYPE_HOLE_PUSSY = 35; //ana_manko_
const LAYER_TYPE_HOLE_ANUS = 36; //ana_anaru_

const LAYER_TYPE_BACK_A = 40; //backA_
const LAYER_TYPE_BACK_B = 41; //backB_
const LAYER_TYPE_BACK_C = 42; //backC_
const LAYER_TYPE_BACK_D = 43; //backD_
const LAYER_TYPE_BACK_E = 44; //backE_

const LAYER_TYPE_FRONT_A = 50; //frontA_
const LAYER_TYPE_FRONT_B = 51; //frontB_
const LAYER_TYPE_FRONT_C = 52; //frontC_
const LAYER_TYPE_FRONT_D = 53; //frontD_
const LAYER_TYPE_FRONT_E = 54; //frontE_

const LAYER_TYPE_COCK_NORMAL = 60; //chin_
const LAYER_TYPE_COCK_MOUTH = 61; //chin_mouth_
const LAYER_TYPE_COCK_BOOBS = 62; //chin_boobs_
const LAYER_TYPE_COCK_RIGHT_ARM = 63; //chin_rightarm_
const LAYER_TYPE_COCK_LEFT_ARM = 64; //chin_leftarm_
const LAYER_TYPE_COCK_FEET = 65; //chin_feet_
const LAYER_TYPE_COCK_PUSSY = 66; //chin_manko_
const LAYER_TYPE_COCK_ANAL = 67; //chin_anaru_

const LAYER_TYPE_TOY_CLIT = 70; //toyC_
const LAYER_TYPE_TOY_PUSSY = 71; //toyP_
const LAYER_TYPE_TOY_ANAL = 72; //toyA_

const LAYER_TYPE_WET = 100; //zaa_wet
const LAYER_TYPE_WET_PANTIES = 101; //zaa_wet_panties_
const LAYER_TYPE_DROOL_MOUTH = 102; //yodare_mouth_
const LAYER_TYPE_DROOL_FINGERS = 103; //yodare_finger_
const LAYER_TYPE_DROOL_NIPPLES = 104; //yodare_chikubi_

const LAYER_TYPE_SEMEN_BACK = 120; //zaa_back_
const LAYER_TYPE_SEMEN_BELLY = 121; //zaa_belly_
const LAYER_TYPE_SEMEN_BOOBS = 122; //zaa_boobs_
const LAYER_TYPE_SEMEN_LEFT_BOOB = 123; //zaa_leftboob_
const LAYER_TYPE_SEMEN_RIGHT_BOOB = 124; //zaa_rightboob_
const LAYER_TYPE_SEMEN_BUTT = 125; //zaa_butt_
const LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT = 126; //zaa_butt_right_ue_
const LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT = 127; //zaa_butt_left_ue_
const LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT = 128; //zaa_butt_right_sita_
const LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT = 129; //zaa_butt_left_sita_

const LAYER_TYPE_SEMEN_PUSSY = 130; //zaa_crotch_
const LAYER_TYPE_SEMEN_PUSSY_PANTIES = 131; //zaa_crotch_panties_
const LAYER_TYPE_SEMEN_ANAL = 132; //zaa_anaru_
const LAYER_TYPE_SEMEN_RIGHT_ARM = 133; //zaa_rightarm_
const LAYER_TYPE_SEMEN_LEFT_ARM = 134; //zaa_leftarm_
const LAYER_TYPE_SEMEN_RIGHT_LEG = 135; //zaa_rightleg_
const LAYER_TYPE_SEMEN_LEFT_LEG = 136; //zaa_leftleg_
const LAYER_TYPE_SEMEN_FACE = 137; //zaa_face_
const LAYER_TYPE_SEMEN_MOUTH = 138; //zaa_mouth_

const LAYER_TYPE_SEMEN_COCK_MOUTH = 140; //zaa_chin_mouth_
const LAYER_TYPE_SEMEN_COCK_BOOBS = 141; //zaa_chin_boobs_
const LAYER_TYPE_SEMEN_COCK_RIGHT_ARM = 142; //zaa_chin_rightarm_
const LAYER_TYPE_SEMEN_COCK_LEFT_ARM = 143; //zaa_chin_leftarm_
const LAYER_TYPE_SEMEN_COCK_PUSSY = 144; //zaa_chin_manko_
const LAYER_TYPE_SEMEN_COCK_ANAL = 145; //zaa_chin_anaru_
const LAYER_TYPE_SEMEN_COCK_FEET = 146; //zaa_chin_feet_
const LAYER_TYPE_SEMEN_COCK_NORMAL = 147; //zaa_chin_

const LAYER_TYPE_SEMEN_FRONT_A = 150; //zaa_frontA_
const LAYER_TYPE_SEMEN_FRONT_B = 151; //zaa_frontB_
const LAYER_TYPE_SEMEN_FRONT_C = 152; //zaa_frontC_
const LAYER_TYPE_SEMEN_FRONT_D = 153; //zaa_frontD_
const LAYER_TYPE_SEMEN_FRONT_E = 154; //zaa_frontE_

const LAYER_TYPE_MUG = 200; //mug_
const LAYER_TYPE_STRAW = 201; //straw_
const LAYER_TYPE_VISITOR_A = 202; //visitorA_
const LAYER_TYPE_VISITOR_B = 203; //visitorB_
const LAYER_TYPE_VISITOR_C = 204; //visitorC_
const LAYER_TYPE_VISITOR_D = 205; //visitorD_
const LAYER_TYPE_SEMEN_DESK = 206; //zaa_desk_
const LAYER_TYPE_LEFT_HOLE = 207; //hole_left_
const LAYER_TYPE_RIGHT_HOLE = 208; //hole_right_


Game_Actor.prototype.getCustomTachieLayerLoadout = function() {
	let pose = this.poseName;
	
	if(pose == POSE_DEFEATED_LEVEL2)
		return this.getLayerLoadout_DefeatedLv2();
	else if(pose == POSE_KICKCOUNTER)
		return this.getLayerLoadout_KickCounter();
	else if(pose == POSE_GUARDGANGBANG)
		return this.getLayerLoadout_GuardGangbang();
	else if(pose == POSE_DEFEATED_GUARD)
		return this.getLayerLoadout_DefeatedGuard();
	else if(pose == POSE_RECEPTIONIST)
		return this.getLayerLoadout_Receptionist();
	else if(pose == POSE_REVERSE_COWGIRL)
		return this.getLayerLoadout_ReverseCowgirl();
	else if(pose == POSE_KARRYN_COWGIRL)
		return this.getLayerLoadout_KarrynCowgirl();
	else if(pose == POSE_LIZARDMAN_COWGIRL)
		return this.getLayerLoadout_LizardmanCowgirl();
	else if(pose == POSE_TOILET_SITTING)
		return this.getLayerLoadout_ToiletSitting();
	else if(pose == POSE_TOILET_SIT_LEFT)
		return this.getLayerLoadout_ToiletSitLeft();
	else if(pose == POSE_TOILET_SIT_RIGHT)
		return this.getLayerLoadout_ToiletSitRight();
	else if(pose == POSE_TOILET_STAND_LEFT)
		return this.getLayerLoadout_ToiletStandLeft();
	else if(pose == POSE_TOILET_STAND_RIGHT)
		return this.getLayerLoadout_ToiletStandRight();
	
	return false;
};

//Chatface
Game_Actor.prototype.getCustomTachieLayerLoadout_Chatface = function() {
	let layerArray = [];
	let chatface = this.poseName;
	
	if(chatface === CHAT_FOLDER_ARON) {
		layerArray = [
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_FACE,
			LAYER_TYPE_BODY,
		]
	}
	else {
		layerArray = [
			LAYER_TYPE_GLASSES,
			LAYER_TYPE_FACE,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAT,
			LAYER_TYPE_BODY,
		]
	}
	
	return layerArray;
};

//defeated_level2
Game_Actor.prototype.getLayerLoadout_DefeatedLv2 = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,

		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_TOY_PUSSY,

		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,

		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HOPPE,

		LAYER_TYPE_TOY_CLIT,

		LAYER_TYPE_WET,
		LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT,
		LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT,
		LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT,
		LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,

		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_HAT,
		LAYER_TYPE_BODY
	]
	
	return layerArray;
};

//kick counter
Game_Actor.prototype.getLayerLoadout_KickCounter = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_B,
		
		LAYER_TYPE_HAT,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_BACK_C,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BACK_D
		
	]
	
	return layerArray;
};

//guard gangbang
Game_Actor.prototype.getLayerLoadout_GuardGangbang = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HOLE_ANUS,
		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HAT,
		LAYER_TYPE_BODY
		
	]
	
	return layerArray;
};

//Lizardman Cowgirl
Game_Actor.prototype.getLayerLoadout_LizardmanCowgirl = function() {
	let layerArray = [];
	let tempArray = [];

	layerArray = [
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_BOOBS,

		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,

		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_BODY,
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,

		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_HEAD
	]

	return layerArray;
};

//Karryn Cowgirl
Game_Actor.prototype.getLayerLoadout_KarrynCowgirl = function() {
	let layerArray = [];
	let tempArray = [];

	layerArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_WET,
		
		
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_LEGS,
		
		LAYER_TYPE_BACK_A
		
	]

	return layerArray;
};

//Reverse Cowgirl
Game_Actor.prototype.getLayerLoadout_ReverseCowgirl = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	
	layerArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_SWEAT,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_BUTT,
	]
	
	if(!mergedLeftArmArray && hasLeftHandjob) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && hasRightHandjob) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_BODY,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_BACK_A
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//defeated_guard
Game_Actor.prototype.getLayerLoadout_DefeatedGuard = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenArmsArray = false;
	let semenArmsArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM, LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedArmsArray = false;
	let armsArray = [ LAYER_TYPE_RIGHT_ARM, LAYER_TYPE_LEFT_ARM ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	tempArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenArmsArray && (this.tachieLeftArm === 'zuri' || this.tachieLeftArm === 'zuri_naked')) {
		if(this.tachieBoobs === 'empty') {
			layerArray = layerArray.concat(semenArmsArray);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		else {
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
			layerArray = layerArray.concat(semenArmsArray);
		}
		mergedSemenArmsArray = true;
	}
	else {
		layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
	}
	
	tempArray = [
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_COCK_BOOBS
	];
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenArmsArray && (this.tachieLeftArm === 'thigh' || this.tachieLeftArm === 'thigh_naked')) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_TOY_CLIT
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedBoobsArray && this.tachieBoobs === 'zuri_enemy') {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	if(!mergedArmsArray && (this.tachieLeftArm === 'zuri' || this.tachieLeftArm === 'zuri_naked')) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	if(!mergedBoobsArray && this.tachieBoobs === 'zuri_karryn') {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HAT,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedArmsArray && (this.tachieLeftArm === 'thigh' || this.tachieLeftArm === 'thigh_naked')) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	if(!mergedSemenArmsArray) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
	
	if(!mergedArmsArray) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	return layerArray;
};

//Receptionist
Game_Actor.prototype.getLayerLoadout_Receptionist = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenNakaArray = false;
	let semenNakaArray = [ LAYER_TYPE_SEMEN_ANAL, LAYER_TYPE_SEMEN_PUSSY, LAYER_TYPE_WET ];
	
	layerArray = [
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_GLASSES,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_BUTT
	]
		
	if(!mergedSemenNakaArray && this.clothingStage === 3 && !this.isWearingPanties()) {
		layerArray = layerArray.concat(semenNakaArray);
		mergedSemenNakaArray = true;
	}		
		
		
	tempArray = [		
		LAYER_TYPE_CLOTHES,
		LAYER_TYPE_SKIRT, 
		LAYER_TYPE_PANTIES
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenNakaArray) {
		layerArray = layerArray.concat(semenNakaArray);
		mergedSemenNakaArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_BUTT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_RIGHT_ARM,
		

		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_BACK_D,
		LAYER_TYPE_BACK_E,
		
		LAYER_TYPE_SEMEN_DESK,
		LAYER_TYPE_SEMEN_COCK_NORMAL,
		LAYER_TYPE_COCK_NORMAL,

		LAYER_TYPE_VISITOR_A,
		LAYER_TYPE_VISITOR_B,
		LAYER_TYPE_VISITOR_C,
		LAYER_TYPE_VISITOR_D
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Toilet Sitting
Game_Actor.prototype.getLayerLoadout_ToiletSitting = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];

	let leftArmPlayingWithToy = this.tachieLeftArm.includes('toy');
	let rightArmPlayingWithToy = this.tachieRightArm.includes('toy');
	let leftArmPlayingWithToyC = this.tachieLeftArm.includes('toyC');
	let rightArmPlayingWithToyC = this.tachieRightArm.includes('toyC');
	
	let leftArmPlayingWithClit = this.tachieLeftArm.includes('kuri');
	let rightArmPlayingWithClit = this.tachieRightArm.includes('kuri');
	let leftArmPlayingWithPussy = this.tachieLeftArm.includes('manko');
	let rightArmPlayingWithPussy = this.tachieRightArm.includes('manko');
	let leftArmPlayingWithAnal = this.tachieLeftArm.includes('anaru');
	let rightArmPlayingWithAnal = this.tachieRightArm.includes('anaru');

	layerArray = [
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_HEAD,
	]	
		
	if(!mergedLeftArmArray && !leftArmPlayingWithToyC && (leftArmPlayingWithToy || leftArmPlayingWithAnal)) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && !rightArmPlayingWithToyC && (rightArmPlayingWithToy || rightArmPlayingWithAnal)) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedLeftArmArray && (leftArmPlayingWithToyC || leftArmPlayingWithPussy || leftArmPlayingWithClit)) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && (rightArmPlayingWithToyC || rightArmPlayingWithPussy || rightArmPlayingWithClit)) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
		
	tempArray = [
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_LEGS,
		LAYER_TYPE_TIE,
		LAYER_TYPE_LEFT_BOOB,
		LAYER_TYPE_RIGHT_BOOB,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_LEFT_HOLE,
		LAYER_TYPE_RIGHT_HOLE,
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Toilet Sit Left
Game_Actor.prototype.getLayerLoadout_ToiletSitLeft = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let leftArmIsIdle = this.tachieLeftArm.includes('legs');
	
	let legsAreSpread = this.tachieLegs === 'spread';
	let legsAreClose = this.tachieLegs === 'close';
	let mergedLegsArray = false;
	let legsArmArray = [ LAYER_TYPE_LEGS ];

	if(!mergedLegsArray && legsAreClose) {
		layerArray = layerArray.concat(legsArmArray);
		mergedLegsArray = true;
	}
		
	if(!mergedLeftArmArray && leftArmIsIdle) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_LEFT_HOLE,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HEAD,
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_PUBIC,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray && legsAreSpread) {
		layerArray = layerArray.concat(legsArmArray);
		mergedLegsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_BODY,
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_RIGHT_HOLE,
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//Toilet Sit Right
Game_Actor.prototype.getLayerLoadout_ToiletSitRight = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	let rightArmIsIdle = this.tachieRightArm.includes('legs');
	
	let legsAreSpread = this.tachieLegs === 'spread';
	let legsAreClose = this.tachieLegs === 'close';
	let mergedLegsArray = false;
	let legsArmArray = [ LAYER_TYPE_LEGS ];

	if(!mergedLegsArray && legsAreClose) {
		layerArray = layerArray.concat(legsArmArray);
		mergedLegsArray = true;
	}
		
	if(!mergedRightArmArray && rightArmIsIdle) {
		layerArray = layerArray.concat(rightArmArray);
		mergedLeftArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_RIGHT_HOLE,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HEAD,
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_PUBIC,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray && legsAreSpread) {
		layerArray = layerArray.concat(legsArmArray);
		mergedLegsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_BODY,
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_LEFT_HOLE,
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Toilet Stand Left
Game_Actor.prototype.getLayerLoadout_ToiletStandLeft = function() {
	let layerArray = [];
	let tempArray = [];

	layerArray = [
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_RIGHT_HOLE,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_LEFT_HOLE
	]
	
	return layerArray;
};

//Toilet Stand Right
Game_Actor.prototype.getLayerLoadout_ToiletStandRight = function() {
	let layerArray = [];
	let tempArray = [];

	layerArray = [
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_LEFT_HOLE,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_RIGHT_HOLE
	]
	
	return layerArray;
};