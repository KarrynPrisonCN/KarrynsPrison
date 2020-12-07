var Remtairy = Remtairy || {};
Remtairy.Gifts = Remtairy.Gifts || {};

//=============================================================================
 /*:
 * @plugindesc Gifts
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const GIFT_ID_EMPEROR_LV1_ATTACK = 5;
const GIFT_ID_EMPEROR_LV1_STAMINA = 6;
const GIFT_ID_EMPEROR_LV1_CHARM = 7;
const GIFT_ID_EMPEROR_LV1_CRIT_RATE = 8;
const GIFT_ID_EMPEROR_LV1_STRIP_RESIST = 9;
const GIFT_ID_EMPEROR_LV2_DEFENSE = 10;
const GIFT_ID_EMPEROR_LV2_ENERGY = 11;
const GIFT_ID_EMPEROR_LV2_CHARM = 12;
const GIFT_ID_EMPEROR_LV2_CRIT_EVADE = 13;
const GIFT_ID_EMPEROR_LV2_TALK_RESIST = 14;
const GIFT_ID_EMPEROR_LV3_ACCURACY = 15;
const GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE = 16;
const GIFT_ID_EMPEROR_LV3_CHARM = 17;
const GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION = 18;
const GIFT_ID_EMPEROR_LV3_SIGHT_RESIST = 19;

Game_Actor.prototype.resetAllGifts = function() {
	this.resetGift_Emperor_LevelOne();
	this.resetGift_Emperor_LevelTwo();
	this.resetGift_Emperor_LevelThree();
	this.resetGift_Emperor_LevelFour();
};

Game_Actor.prototype.resetGift_Emperor_LevelOne = function() {
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV1_ATTACK], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV1_STAMINA], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV1_CHARM], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV1_CRIT_RATE], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV1_STRIP_RESIST], -1);
	$gameSwitches.setValue(SWITCH_GIFT_EMPEROR_LV1_ID, false);
};
Game_Actor.prototype.resetGift_Emperor_LevelTwo = function() {
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV2_DEFENSE], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV2_ENERGY], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV2_CHARM], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV2_CRIT_EVADE], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV2_TALK_RESIST], -1);
	$gameSwitches.setValue(SWITCH_GIFT_EMPEROR_LV2_ID, false);
};
Game_Actor.prototype.resetGift_Emperor_LevelThree = function() {
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV3_ACCURACY], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV3_CHARM], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV3_SIGHT_RESIST], -1);
	$gameSwitches.setValue(SWITCH_GIFT_EMPEROR_LV3_ID, false);
};
Game_Actor.prototype.resetGift_Emperor_LevelFour = function() {
	$gameSwitches.setValue(SWITCH_GIFT_EMPEROR_LV4_ID, false);
};

Game_Actor.prototype.hasGift = function(giftId) {
	return $gameParty.hasItem($dataItems[giftId]);
};

Game_Actor.prototype.numOfGifts = function() {
	let count = 0;
	if($gameSwitches.value(SWITCH_GIFT_EMPEROR_LV1_ID)) count++;
	if($gameSwitches.value(SWITCH_GIFT_EMPEROR_LV2_ID)) count++;
	if($gameSwitches.value(SWITCH_GIFT_EMPEROR_LV3_ID)) count++;
	if($gameSwitches.value(SWITCH_GIFT_EMPEROR_LV4_ID)) count++;
	
	return count;
};

Game_Actor.prototype.allGiftsText = function() {
	let allText = '';
	let isEn = TextManager.isEnglish;
	let isJp = TextManager.isJapanese;
	let numOfGifts = 0;
	
	if(this.hasGift(GIFT_ID_EMPEROR_LV1_ATTACK)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV1_ATTACK);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV1_STAMINA)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV1_STAMINA);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV1_CHARM)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV1_CHARM);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV1_CRIT_RATE)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV1_CRIT_RATE);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV1_STRIP_RESIST)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV1_STRIP_RESIST);
		numOfGifts++;
	}
	
	if(this.hasGift(GIFT_ID_EMPEROR_LV2_DEFENSE)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV2_DEFENSE);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV2_ENERGY)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV2_ENERGY);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV2_CHARM)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV2_CHARM);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV2_CRIT_EVADE)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV2_CRIT_EVADE);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV2_TALK_RESIST)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV2_TALK_RESIST);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_ACCURACY)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV3_ACCURACY);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_CHARM)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV3_CHARM);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION);
		numOfGifts++;
	}
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST)) {
		if(numOfGifts > 0) allText += '\n';
		allText += this.giftsName(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST);
		numOfGifts++;
	}
	
	return allText;
};

Game_Actor.prototype.giftsName = function(giftId) {
	let item = $dataItems[giftId];
	
	if(TextManager.isJapanese && item.hasRemNameJP) {
		return item.remNameJP;
	}
	else if(TextManager.isEnglish && item.hasRemNameEN) {
		return item.remNameEN;
	}
	else if(TextManager.isSChinese && item.hasRemNameSCH) {
		return item.remNameSCH;
	}
	else if(TextManager.isTChinese && item.hasRemNameTCH) {
		return item.remNameTCH;
	}
	else if(TextManager.isKorean && item.hasRemNameKR) {
		return item.remNameKR;
	}
	else return item.name;
};
	

///////
// Gift Effects

Game_Actor.prototype.giftsParamBonus = function(paramId) {
	let giftsBonus = 0;
	
	if(paramId === PARAM_CHARM_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV1_CHARM)) giftsBonus += 2;
		if(this.hasGift(GIFT_ID_EMPEROR_LV2_CHARM)) giftsBonus += 2;
		if(this.hasGift(GIFT_ID_EMPEROR_LV3_CHARM)) giftsBonus += 2;
	}
	

	return giftsBonus;
}; 

Game_Actor.prototype.giftsParamRate = function(paramId) {
	let giftsRate = 1;
	
	if(paramId === PARAM_MAXSTAMINA_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV1_STAMINA)) giftsRate += 0.1;
	}
	else if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV2_ENERGY)) giftsRate += 0.1;
	}
	
	return giftsRate;
}; 

Game_Actor.prototype.giftsXParamRate = function(paramId) {
	let giftsRate = 1;
	
	if(paramId === XPARAM_CRIT_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV1_CRIT_RATE)) giftsRate += 0.1;
	}
	else if(paramId === XPARAM_CRIT_EVA_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV2_CRIT_EVADE)) giftsRate += 0.15;
	}
	else if(paramId === XPARAM_HIT_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV3_ACCURACY)) giftsRate += 0.1;
	}
	
	return giftsRate;
}; 
	

Game_Actor.prototype.giftsSParamRate = function(paramId) {
	let giftsRate = 1;
	
	if(paramId === SPARAM_WPATK_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV1_ATTACK)) giftsRate += 0.05;
	}
	else if(paramId === SPARAM_WPDEF_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV2_DEFENSE)) giftsRate += 0.05;
	}
	
	return giftsRate;
}; 

Game_Actor.prototype.giftsElementRate = function(elementId) {
	let elementRate = 0;
	
	if(elementId === ELEMENT_STRIP_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV1_STRIP_RESIST)) elementRate -= 0.15;
	}
	else if(elementId === ELEMENT_TALK_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV2_TALK_RESIST)) elementRate -= 0.15;
	}
	else if(elementId === ELEMENT_SIGHT_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST)) elementRate -= 0.15;
	}
	
	return elementRate;
};

