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
const GIFT_ID_EMPEROR_LV4_EXP_RATE = 20;
const GIFT_ID_EMPEROR_LV4_FATIGUE_GAIN = 21;
const GIFT_ID_EMPEROR_LV4_CHARM = 22;
const GIFT_ID_EMPEROR_LV4_STAMINA_REGEN = 23;
const GIFT_ID_EMPEROR_LV4_WILL_REGEN = 24;

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
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV4_EXP_RATE], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV4_FATIGUE_GAIN], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV4_CHARM], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV4_STAMINA_REGEN], -1);
	$gameParty.gainItem($dataItems[GIFT_ID_EMPEROR_LV4_WILL_REGEN], -1);
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

Window_MenuStatus.prototype.drawAllGiftsText = function(x, line, lineHeight, dontResetFontSettings, lineChange, actor) {
	let numOfGifts = actor.numOfGifts();
	let firstLineWritten = false;
	let firstLineText = '';
	let giftsText = '';
	//let line = y;
	
	if(numOfGifts === 1)
		firstLineText = TextManager.RCMenuGiftsSingleText;
	else
		firstLineText = TextManager.RCMenuGiftsPluralText;
	
	if(actor.hasGift(GIFT_ID_EMPEROR_LV1_ATTACK)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV1_ATTACK);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV1_ATTACK);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV1_STAMINA)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV1_STAMINA);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV1_STAMINA);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV1_CHARM)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV1_CHARM);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV1_CHARM);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV1_CRIT_RATE)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV1_CRIT_RATE);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV1_CRIT_RATE);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV1_STRIP_RESIST)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV1_STRIP_RESIST);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV1_STRIP_RESIST);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	
	if(actor.hasGift(GIFT_ID_EMPEROR_LV2_DEFENSE)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV2_DEFENSE);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV2_DEFENSE);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV2_ENERGY)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV2_ENERGY);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV2_ENERGY);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV2_CHARM)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV2_CHARM);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV2_CHARM);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV2_CRIT_EVADE)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV2_CRIT_EVADE);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV2_CRIT_EVADE);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV2_TALK_RESIST)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV2_TALK_RESIST);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV2_TALK_RESIST);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV3_ACCURACY)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV3_ACCURACY);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV3_ACCURACY);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV3_CHARM)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV3_CHARM);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV3_CHARM);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV3_SIGHT_RESIST);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	
	if(actor.hasGift(GIFT_ID_EMPEROR_LV4_EXP_RATE)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV4_EXP_RATE);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV4_EXP_RATE);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV4_FATIGUE_GAIN)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV4_FATIGUE_GAIN);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV4_FATIGUE_GAIN);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV4_CHARM)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV4_CHARM);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV4_CHARM);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV4_STAMINA_REGEN)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV4_STAMINA_REGEN);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV4_STAMINA_REGEN);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	if(actor.hasGift(GIFT_ID_EMPEROR_LV4_WILL_REGEN)) {
		if(!firstLineWritten) giftsText = firstLineText + actor.giftsName(GIFT_ID_EMPEROR_LV4_WILL_REGEN);
		else giftsText = actor.giftsName(GIFT_ID_EMPEROR_LV4_WILL_REGEN);
		this.drawTextEx(giftsText, x, line * lineHeight, dontResetFontSettings);
		line += lineChange;
		firstLineWritten = true;
	}
	
	return line;
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
		if(this.hasGift(GIFT_ID_EMPEROR_LV4_CHARM)) giftsBonus += 2;
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

Game_Actor.prototype.giftsXParamPlus = function(paramId) {
	let giftsPlus = 0;
	
	if(paramId === XPARAM_STA_REGEN_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV4_STAMINA_REGEN)) giftsPlus += 0.03;
	}
	
	return giftsPlus;
}; 
	

Game_Actor.prototype.giftsSParamRate = function(paramId) {
	let giftsRate = 1;
	
	if(paramId === SPARAM_WPATK_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV1_ATTACK)) giftsRate += 0.05;
	}
	else if(paramId === SPARAM_WPDEF_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV2_DEFENSE)) giftsRate += 0.05;
	}
	else if(paramId === SPARAM_EXR_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV4_EXP_RATE)) giftsRate += 0.25;
	}
	
	
	return giftsRate;
}; 

Game_Actor.prototype.giftsSParamPlus = function(paramId) {
	let giftsPlus = 0;
	
	if(paramId === SPARAM_WP_REGEN_ID) {
		if(this.hasGift(GIFT_ID_EMPEROR_LV4_WILL_REGEN)) giftsPlus += 0.03;
	}
	
	return giftsPlus;
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

