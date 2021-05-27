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

///////////
// ConfigManager
////////////////

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
ConfigManager.disableRimjobs = false;
ConfigManager.remBattlelogDuration = 2;
ConfigManager.remBattlelogFontSize = 2;
ConfigManager.remMaleDialogueAppear = 3;
ConfigManager.sortPassivesAscending = false;
ConfigManager.cancelSkipMentalPhase = false;
ConfigManager.remLanguage = RemLanguageEN;
ConfigManager.displayPubic = false;
ConfigManager.displayPleasureAsPercent = true;
ConfigManager.shorterDefeatBattles = false;

ConfigManager.cheatEnemyDoublePhysicalDamage = false;
ConfigManager.cheatEnemyTriplePhysicalDamage = false;
ConfigManager.cheatEnemyDoubleSexualDamage = false;
ConfigManager.cheatEnemyTripleSexualDamage = false;
ConfigManager.cheatEnemyAlwaysAct = false;
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
ConfigManager.cheatDisableAutosave = false;

Remtairy.CM.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	Remtairy.CM.ConfigManager_applyData.call(this, config);
	
	this.remLanguage = config['remLanguage'];
	if(this.remLanguage !== RemLanguageJP && this.remLanguage !== RemLanguageEN)
		this.remLanguage = KARRYN_PRISON_LANGUAGE;
	
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
	
	this.disableRimjobs = this.readRemConfig(config, 'disableRimjobs');
	this.remBattlelogDuration = this.readRemConfig(config, 'remBattlelogDuration');
	this.remBattlelogFontSize = this.readRemConfig(config, 'remBattlelogFontSize');
	this.remMaleDialogueAppear = this.readRemConfig(config, 'remMaleDialogueAppear');
	this.displayPleasureAsPercent = this.readRemConfig(config, 'displayPleasureAsPercent');
	
	
	this.sortPassivesAscending = this.readRemConfig(config, 'sortPassivesAscending');
	this.cancelSkipMentalPhase = config['cancelSkipMentalPhase'];
	this.displayPubic = config['displayPubic'];
	this.shorterDefeatBattles = config['shorterDefeatBattles'];
	
	this.cheatEnemyDoublePhysicalDamage = config['cheatEnemyDoublePhysicalDamage'];
	this.cheatEnemyTriplePhysicalDamage = config['cheatEnemyTriplePhysicalDamage'];
	this.cheatEnemyDoubleSexualDamage = config['cheatEnemyDoubleSexualDamage'];
	this.cheatEnemyTripleSexualDamage = config['cheatEnemyTripleSexualDamage'];
	this.cheatEnemyAlwaysAct = config['cheatEnemyAlwaysAct'];
	this.cheatActorHalfStaminaRegen = config['cheatActorHalfStaminaRegen'];
	this.cheatActorThirdStaminaRegen = config['cheatActorThirdStaminaRegen'];
	this.cheatActorHalfExpRate = config['cheatActorHalfExpRate'];
	this.cheatActorNoEvasion = config['cheatActorNoEvasion'];
	this.cheatLessControlFive = config['cheatLessControlFive'];
	this.cheatLessControlTen = config['cheatLessControlTen'];
	this.cheatInstantRiotsOne = config['cheatInstantRiotsOne'];
	this.cheatInstantRiotsTwo = config['cheatInstantRiotsTwo'];
	this.cheatInstantRiotsThree = config['cheatInstantRiotsThree'];
	this.cheatInstantRiotsFour = config['cheatInstantRiotsFour'];
	this.cheatDisableAutosave = config['cheatDisableAutosave'];

};

Remtairy.CM.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	let config = Remtairy.CM.ConfigManager_makeData.call(this);
	config.remBattlelogDuration = this.remBattlelogDuration;
	config.remBattlelogFontSize = this.remBattlelogFontSize;
	config.remMaleDialogueAppear = this.remMaleDialogueAppear;
	
	return config;
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
		else if(name == 'disableRimjobs')
			return false;
		
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
		else if(name == 'cheatDisableAutosave')
			return false;
		
		else if(name == 'sortPassivesAscending')
			return false;
		else if(name == 'shorterDefeatBattles')
			return false;
		else if(name == 'displayPubic')
			return false;
		else if(name == 'remLanguage')
			return KARRYN_PRISON_LANGUAGE;
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
	
	
	this.addCommand(TextManager.yanflyOptionsDisableRimjob, 'disableRimjobs');
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
	if (symbol === 'remLanguage') {
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
	else if (symbol === 'remBattlelogDuration') {
		return TextManager.battlelogDurationOption(value);
	} 
	else if (symbol === 'remBattlelogFontSize') {
		return TextManager.battlelogFontSizeOption(value);
	} 
	
	else if (symbol === 'remMaleDialogueAppear') {
		return TextManager.maleDialogueAppearOption(value);
	} 
	else {
		return Remtairy.CM.Window_Options_statusText.call(this, index);
	}
};