var Remtairy = Remtairy || {};
Remtairy.CM = Remtairy.CM || {};


//=============================================================================
 /*:
 * @plugindesc ConfigManager
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const EDICTS_OUTLINE_COLOR_OBTAINABLE_GREEN_ID = 0;
const EDICTS_OUTLINE_COLOR_OBTAINABLE_LIGHTBLUE_ID = 1;
const EDICTS_OUTLINE_COLOR_METREQ_YELLOW_ID = 0;
const EDICTS_OUTLINE_COLOR_METREQ_PURPLE_ID = 1;
const EDICTS_OUTLINE_COLOR_NOREQ_BLACK_ID = 0;
const EDICTS_OUTLINE_COLOR_NOREQ_GRAY_ID = 1;
const EDICTS_OUTLINE_COLOR_NOREQ_RED_ID = 2;

///////////
// ConfigManager
////////////////

ConfigManager.synchFps = false;
ConfigManager.safeMode = false;
ConfigManager.replayMode = false;
ConfigManager.pixelMovement = true;
ConfigManager.remMapEffect = true;
ConfigManager.karrynLinesPrompt = true;
ConfigManager.remLinesFast = false;
ConfigManager.remCutinsFast = false;
ConfigManager.remCutinsSmootherLoading = false;
ConfigManager.remSmootherCGLoading = false;
ConfigManager.remCutinsDisabled = false;
ConfigManager.remShowSexualDamagePopup = true;
ConfigManager.disableFootjobs = false;
ConfigManager.disableRimjobs = false;
ConfigManager.disableSmegma = false;
ConfigManager.keepVoicePlayback = false;
ConfigManager.remBattlelogDuration = 2;
ConfigManager.remBattlelogFontSize = 2;
ConfigManager.remMaleDialogueAppear = 3;
ConfigManager.sortPassivesAscending = false;
ConfigManager.cancelSkipMentalPhase = false;
ConfigManager.remLanguage = RemLanguageEN;
ConfigManager.displayPubic = true;
ConfigManager.displayPleasureAsPercent = true;
ConfigManager.shorterDefeatBattles = false;
ConfigManager.masterVolume = 100;
ConfigManager.voiceVolume = 100;
ConfigManager.moanVolume = 30;
ConfigManager.seVolume = 50;
ConfigManager.bgmVolume = 50;
ConfigManager.maleVolume = 50;


ConfigManager.edictsOutlineColorObtainable = 0;
ConfigManager.edictsOutlineColorMeetReq = 0;
ConfigManager.edictsOutlineColorNoReq = 0;

ConfigManager.cheatEnemyDoublePhysicalDamage = false;
ConfigManager.cheatEnemyTriplePhysicalDamage = false;
ConfigManager.cheatEnemyDoubleSexualDamage = false;
ConfigManager.cheatEnemyTripleSexualDamage = false;
ConfigManager.cheatEnemyAlwaysAct = false;
ConfigManager.cheatActorDoublePassiveGain = false;
ConfigManager.cheatActorHalfStaminaRegen = false;
ConfigManager.cheatActorThirdStaminaRegen = false;
ConfigManager.cheatActorHalfExpRate = false;
ConfigManager.cheatActorNoEvasion = false;
ConfigManager.cheatLessControlFive = false;
ConfigManager.cheatLessControlTen = false;
ConfigManager.cheatInstantRiotsOne = false;
ConfigManager.cheatInstantRiotsTwo = false;
ConfigManager.cheatInstantRiotsThree = false;
ConfigManager.cheatInstantRiotsFour = false;
ConfigManager.cheatWaitressLog = false;
ConfigManager.cheatDisableAutosave = false;

Object.defineProperty(ConfigManager, 'bgmVolume', {
    get: function() {
        return AudioManager._bgmVolume;
    },
    set: function(value) {
        AudioManager.bgmVolume = value;
		AudioManager.meVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'bgsVolume', {
    get: function() {
        return AudioManager.seVolume;
    },
    set: function(value) {
        AudioManager.bgsVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'meVolume', {
    get: function() {
        return AudioManager._bgmVolume;
    },
    set: function(value) {
        AudioManager.meVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'seVolume', {
    get: function() {
        return AudioManager.seVolume;
    },
    set: function(value) {
        AudioManager.seVolume = value;
		AudioManager.bgsVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'voiceVolume', {
    get: function() {
        return AudioManager.voiceVolume;
    },
    set: function(value) {
        AudioManager.voiceVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'moanVolume', {
    get: function() {
        return AudioManager.moanVolume;
    },
    set: function(value) {
        AudioManager.moanVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'maleVolume', {
    get: function() {
        return AudioManager.maleVolume;
    },
    set: function(value) {
        AudioManager.maleVolume = value;
    },
    configurable: true
});

Remtairy.CM.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	Remtairy.CM.ConfigManager_applyData.call(this, config);
	
	//this.remLanguage = config['remLanguage'];
	//if(this.remLanguage !== RemLanguageJP && this.remLanguage !== RemLanguageEN)
	//	this.remLanguage = KARRYN_PRISON_LANGUAGE;
	this.remLanguage = this.readRemConfig(config, 'remLanguage');

	
	this.synchFps = this.readRemConfig(config, 'synchFps');
	this.safeMode = config['safeMode'];
	this.replayMode = config['replayMode'];
	this.pixelMovement = this.readRemConfig(config, 'pixelMovement');
	
	this.remMapEffect = this.readRemConfig(config, 'remMapEffect');
	this.remLinesFast = config['remLinesFast'];
	this.karrynLinesPrompt = this.readRemConfig(config, 'karrynLinesPrompt');
	this.remCutinsFast = config['remCutinsFast'];
	this.remCutinsSmootherLoading = this.readRemConfig(config, 'remCutinsSmootherLoading');
	this.remSmootherCGLoading = this.readRemConfig(config, 'remSmootherCGLoading');
	this.remCutinsDisabled = this.readRemConfig(config, 'remCutinsDisabled');
	this.remShowSexualDamagePopup = this.readRemConfig(config, 'remShowSexualDamagePopup');
	
	this.disableFootjobs = this.readRemConfig(config, 'disableFootjobs');
	this.disableRimjobs = this.readRemConfig(config, 'disableRimjobs');
	this.disableSmegma = this.readRemConfig(config, 'disableSmegma');
	
	this.keepVoicePlayback = this.readRemConfig(config, 'keepVoicePlayback');
	
	this.remBattlelogDuration = this.readRemConfig(config, 'remBattlelogDuration');
	this.remBattlelogFontSize = this.readRemConfig(config, 'remBattlelogFontSize');
	this.remMaleDialogueAppear = this.readRemConfig(config, 'remMaleDialogueAppear');
	this.displayPleasureAsPercent = this.readRemConfig(config, 'displayPleasureAsPercent');
	
	this.voiceVolume = this.readRemVolume(config, 'voiceVolume');
    this.moanVolume = this.readRemVolume(config, 'moanVolume');
	this.masterVolume = this.readRemVolume(config, 'masterVolume');
	this.bgmVolume = this.readRemVolume(config, 'bgmVolume');
    this.seVolume = this.readRemVolume(config, 'seVolume');
	this.maleVolume = this.readRemVolume(config, 'maleVolume');
	
	
	this.sortPassivesAscending = this.readRemConfig(config, 'sortPassivesAscending');
	this.cancelSkipMentalPhase = this.readRemConfig(config, 'cancelSkipMentalPhase');
	this.displayPubic = this.readRemConfig(config, 'displayPubic');
	this.shorterDefeatBattles = this.readRemConfig(config, 'shorterDefeatBattles');
	
	this.edictsOutlineColorObtainable = this.readRemConfig(config, 'edictsOutlineColorObtainable');
	this.edictsOutlineColorMeetReq = this.readRemConfig(config, 'edictsOutlineColorMeetReq');
	this.edictsOutlineColorNoReq = this.readRemConfig(config, 'edictsOutlineColorNoReq');
	
	this.cheatEnemyDoublePhysicalDamage = this.readRemConfig(config, 'cheatEnemyDoublePhysicalDamage');
	this.cheatEnemyTriplePhysicalDamage = this.readRemConfig(config, 'cheatEnemyTriplePhysicalDamage');
	this.cheatEnemyDoubleSexualDamage = this.readRemConfig(config, 'cheatEnemyDoubleSexualDamage');
	this.cheatEnemyTripleSexualDamage = this.readRemConfig(config, 'cheatEnemyTripleSexualDamage');
	this.cheatEnemyAlwaysAct = this.readRemConfig(config, 'cheatEnemyAlwaysAct');
	
	this.cheatActorDoublePassiveGain = this.readRemConfig(config, 'cheatActorDoublePassiveGain');
	this.cheatActorHalfStaminaRegen = this.readRemConfig(config, 'cheatActorHalfStaminaRegen');
	this.cheatActorThirdStaminaRegen = this.readRemConfig(config, 'cheatActorThirdStaminaRegen');
	this.cheatActorHalfExpRate = this.readRemConfig(config, 'cheatActorHalfExpRate');
	this.cheatActorNoEvasion = this.readRemConfig(config, 'cheatActorNoEvasion');
	this.cheatLessControlFive = this.readRemConfig(config, 'cheatLessControlFive');
	this.cheatLessControlTen = this.readRemConfig(config, 'cheatLessControlTen');
	this.cheatInstantRiotsOne = this.readRemConfig(config, 'cheatInstantRiotsOne');
	this.cheatInstantRiotsTwo = this.readRemConfig(config, 'cheatInstantRiotsTwo');
	this.cheatInstantRiotsThree = this.readRemConfig(config, 'cheatInstantRiotsThree');
	this.cheatInstantRiotsFour = this.readRemConfig(config, 'cheatInstantRiotsFour');
	this.cheatWaitressLog = this.readRemConfig(config, 'cheatWaitressLog');
	this.cheatDisableAutosave = this.readRemConfig(config, 'cheatDisableAutosave');

};

Remtairy.CM.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	let config = Remtairy.CM.ConfigManager_makeData.call(this);
	config.remBattlelogDuration = this.remBattlelogDuration;
	config.remBattlelogFontSize = this.remBattlelogFontSize;
	config.remMaleDialogueAppear = this.remMaleDialogueAppear;
	config.synchFps = this.synchFps;
	config.voiceVolume = this.voiceVolume;
    config.moanVolume = this.moanVolume;
	config.maleVolume = this.maleVolume;
	return config;
};

ConfigManager.readRemVolume = function(config, name) {
    let value = config[name];
    if (value !== undefined) {
        return Number(value).clamp(0, 100);
    } else {
        if(name == 'masterVolume')
			return 100;
		else if(name == 'moanVolume')
			return 30;
		else if(name == 'voiceVolume')
			return 100;
		else if(name == 'seVolume')
			return 50;
		else if(name == 'bgmVolume')
			return 50;
		else if(name == 'maleVolume')
			return 50;
		
    }
};


ConfigManager.readRemConfig = function(config, name) {
	let value = config[name];
	if (value !== undefined) {
		return value;
	} else {
		if(name == 'remBattlelogDuration')
			return 2;
		else if(name == 'remBattlelogFontSize')
			return 2;
		else if(name == 'remMaleDialogueAppear')
			return 3;
		
		
		else if(name == 'pixelMovement')
			return true;
		else if(name == 'remMapEffect')
			return true;
		else if(name == 'karrynLinesPrompt')
			return true;
		else if(name == 'remCutinsSmootherLoading')
			return false;
		else if(name == 'remSmootherCGLoading')
			return false;
		else if(name == 'remCutinsDisabled')
			return false;
		else if(name == 'remShowSexualDamagePopup')
			return true;
		else if(name == 'displayPleasureAsPercent')
			return true;
		else if(name == 'disableFootjobs')
			return false;
		else if(name == 'disableRimjobs')
			return false;
		else if(name == 'disableSmegma')
			return false;
		else if(name == 'keepVoicePlayback')
			return false;
		else if(name == 'synchFps')
			return false;
		
		else if(name == 'edictsOutlineColorObtainable')
			return EDICTS_OUTLINE_COLOR_OBTAINABLE_GREEN_ID;
		else if(name == 'edictsOutlineColorMeetReq')
			return EDICTS_OUTLINE_COLOR_METREQ_YELLOW_ID;
		else if(name == 'edictsOutlineColorNoReq')
			return EDICTS_OUTLINE_COLOR_NOREQ_GRAY_ID;

		
		else if(name == 'cheatEnemyDoublePhysicalDamage')
			return false;
		else if(name == 'cheatEnemyTriplePhysicalDamage')
			return false;
		else if(name == 'cheatEnemyDoubleSexualDamage')
			return false;
		else if(name == 'cheatEnemyTripleSexualDamage')
			return false;
		else if(name == 'cheatEnemyAlwaysAct')
			return false;
		
		else if(name == 'cheatActorDoublePassiveGain')
			return false;
		else if(name == 'cheatActorHalfStaminaRegen')
			return false;
		else if(name == 'cheatActorThirdStaminaRegen')
			return false;
		else if(name == 'cheatActorHalfExpRate')
			return false;
		else if(name == 'cheatActorNoEvasion')
			return false;
		else if(name == 'cheatLessControlFive')
			return false;
		else if(name == 'cheatLessControlTen')
			return false;
		else if(name == 'cheatInstantRiotsOne')
			return false;
		else if(name == 'cheatInstantRiotsTwo')
			return false;
		else if(name == 'cheatInstantRiotsThree')
			return false;
		else if(name == 'cheatInstantRiotsFour')
			return false;
		else if(name == 'cheatWaitressLog')
			return false;
		else if(name == 'cheatDisableAutosave')
			return false;
		
		else if(name == 'sortPassivesAscending')
			return false;
		else if(name == 'shorterDefeatBattles')
			return false;
		else if(name == 'displayPubic')
			return true;
		
		else if(name == 'remLanguage')
			return KARRYN_PRISON_LANGUAGE;
		else return false;
	}
};

ConfigManager.readConfigMessageSpeed = function(config, name) {
	let value = config[name];
	if(value !== undefined) {
		return value;
	} else {
		return 10;
	}
};


//////////////////
// Window Options
//////////////////

Remtairy.CM.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
	Remtairy.CM.Window_Options_addGeneralOptions.call(this);
	if (Imported.YEP_OptionsCore) return;
	this.addRemOptions();
};

Window_Options.prototype.addRemOptions = function() {
	this.addCommand(TextManager.safeMode, 'safeMode');
	this.addCommand(TextManager.replayMode, 'replayMode');
	this.addCommand(TextManager.pixelMovement, 'pixelMovement');
	this.addCommand(TextManager.remLanguage, 'remLanguage');
	
	this.addCommand(TextManager.yanflyOptionsDisableRimjob, 'disableFootjobs');
	this.addCommand(TextManager.yanflyOptionsDisableRimjob, 'disableRimjobs');
	this.addCommand(TextManager.yanflyOptionsDisableSmegma, 'disableSmegma');
	
	this.addCommand(TextManager.yanflyOptionsKeepVoicePlayback, 'keepVoicePlayback');
	
	
	this.addCommand(TextManager.yanflyOptionsDisplayPleasureAsPercent, 'displayPleasureAsPercent');
	
	
	this.addCommand(TextManager.yanflyOptionsMapEffects, 'remMapEffect');
	
	this.addCommand(TextManager.yanflyOptionsKarrynLinesPrompt, 'karrynLinesPrompt');
	this.addCommand(TextManager.yanflyOptionsFasterBattleDialogue, 'remLinesFast');
	this.addCommand(TextManager.yanflyOptionsFasterBattleCutins, 'remCutinsFast');
	this.addCommand(TextManager.yanflyOptionsSmootherBattleCutinLoading, 'remCutinsSmootherLoading');
	this.addCommand(TextManager.yanflyOptionsSmootherCGLoading, 'remSmootherCGLoading');
	this.addCommand(TextManager.yanflyOptionsDisableBattleCutins, 'remCutinsDisabled');
	
	this.addCommand(TextManager.yanflyOptionsShowSexualDamagePopup, 'remShowSexualDamagePopup');
	
	
	this.addCommand(TextManager.yanflyOptionsBattlelogDuration, 'remBattlelogDuration');
	this.addCommand(TextManager.yanflyOptionsBattlelogFontsize, 'remBattlelogFontSize');
	
	this.addCommand(TextManager.yanflyOptionsMaleDialogueAppear, 'remMaleDialogueAppear');
	
	this.addCommand(TextManager.yanflyOptionsSortPassivesAscending, 'sortPassivesAscending');
	
	this.addCommand(TextManager.yanflyOptionsCancelSkipMentalPhase, 'cancelSkipMentalPhase');
};

Remtairy.CM.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	let symbol = this.commandSymbol(index);
	let value = this.getConfigValue(symbol);
	if(symbol === 'remLanguage') {
		if(value == RemLanguageJP) 
			return "日本語";
		else if(value == RemLanguageEN) 
			return "English";
		else if(value == RemLanguageTCH) 
			return "繁體中文";
		else if(value == RemLanguageSCH) 
			return "简体中文";
		else if(value == RemLanguageKR) 
			return "한국어";
		else
			return "error";
	} 
	else if(symbol === 'edictsOutlineColorObtainable' || symbol === 'edictsOutlineColorMeetReq' || symbol === 'edictsOutlineColorNoReq') {
		return TextManager.edictsOutlineColorOption(symbol, value);
	}
	else if(symbol === 'remBattlelogDuration') {
		return TextManager.battlelogDurationOption(value);
	} 
	else if(symbol === 'remBattlelogFontSize') {
		return TextManager.battlelogFontSizeOption(value);
	} 
	
	else if(symbol === 'remMaleDialogueAppear') {
		return TextManager.maleDialogueAppearOption(value);
	} 
	else {
		return Remtairy.CM.Window_Options_statusText.call(this, index);
	}
};


Window_Options.prototype.changePaintOpacity = function(enabled) {
	this.contents.fontBold = enabled;
    this.contents.paintOpacity = enabled ? 255 : this.translucentOpacity();
};