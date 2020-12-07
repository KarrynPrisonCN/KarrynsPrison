var Remtairy = Remtairy || {};
Remtairy.Version = Remtairy.Version || {};

//=============================================================================
 /*:
 * @plugindesc Version
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const KARRYN_PRISON_GAME_VERSION = 49;

///////////
// Game Party
////////////////

//Game Version
Game_Party.prototype.getGameVersion = function() {
	return this._karrynPrisonVersion;
};

//Called at start of game in Common Event 2:Initialization
Game_Party.prototype.setCurrentGameVersion = function() {
	this._karrynPrisonVersion = KARRYN_PRISON_GAME_VERSION;
	this._karrynPrisonVersion36_TachieUpdated = true;
}; 

//Called when loading game by Common Event 3:Load Game
Game_Party.prototype.updateGameVersion = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._emoteMasterManagerIsRunning = false;
	
	if(this._karrynPrisonVersion < 2) {
		actor.resetParamExp();
		actor._paramExp[PARAM_MAXSTAMINA_ID] = Math.round(actor._paramExp[PARAM_MAXSTAMINA_ID] * 0.6);
		actor._paramExp[PARAM_MIND_ID] = Math.round(actor._paramExp[PARAM_MIND_ID] * 1.2);
		actor.calculateParamLvlsGained();
		actor.calculateMainLvlsGained();
		actor.clearParamExp();
	}
	
	if(this._karrynPrisonVersion < 3) {
		actor._firstAnalSexBeforePussySex = false;
	}
	
	if(this._karrynPrisonVersion < 5) {
		$gameParty.increaseCorruption(actor.totalAccessoriesOwnedCount());
		$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, 7, "A"], false);
		$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, 7, "B"], false);
		actor._flagNeverUnequippedDisappointmentTitle = true;
	}
	
	if(this._karrynPrisonVersion < 6) {
		if(actor._clothingType === CLOTHING_ID_NAKED && actor._clothingMaxStage === 1) {
			actor.changeToWardenClothing();
			actor.restoreClothingDurability();
		}
		if($gameParty._difficulty === 0) {
			if($gameSwitches.value(SWITCH_EASY_MODE_ID)) $gameParty.setDifficultyToEasy();
			else if($gameSwitches.value(SWITCH_NORMAL_MODE_ID)) $gameParty.setDifficultyToNormal();
			else if($gameSwitches.value(SWITCH_HARD_MODE_ID)) $gameParty.setDifficultyToHard();
		}
	}
	
	if(this._karrynPrisonVersion < 7) {
		let disTitle = $dataArmors[TITLE_ID_DISAPPOINTMENT];
		let numOfExtraDT = $gameParty.numItems(disTitle) - 1;
		if(numOfExtraDT > 0) {
			$gameParty.gainItem(disTitle, -1 * numOfExtraDT, false);
		}
	}
	
	if(this._karrynPrisonVersion < 14) {
		this.setMapForceCenter(false);
		actor.removeAllToys();
		actor._firstPussySexWasToy = false;
		
		actor.setupPlaythroughRecords();
		actor.recalculateSkillLvls();
		actor.recalculateBodySensitivities();
		actor.resetArtisanMeal();
		actor.cleanUpLiquids();
		
		this._playthroughRecordGuardBattleCount = this._recordGuardBattleCount;
		this.setBarReputation(0);
		this.initializeReceptionistSettings();
		this._wantedId_Tonkin = -1;
		this._wantedId_Yasu = -1;
		this._wantedId_Cargill = -1;
		
		actor._firstKissMapID = -1;
		actor._firstKissWasAnus = false;
		actor._firstPussySexMapID = -1;
		actor._firstAnalSexMapID = -1;
		actor._firstHandjobMapID = -1;
		actor._firstBlowjobMapID = -1;
		actor._firstTittyFuckMapID = -1;
		actor._firstCunnilingusMapID = -1;
		actor._firstButtSpankedMapID = -1;
		actor._firstSwallowMapID = -1;
		actor._firstBukkakeMapID = -1;
		actor._firstPussyCreampieMapID = -1;
		actor._firstAnalCreampieMapID = -1;
		actor._lastKissMapID = -1;
		actor._lastHandjobMapID = -1;
		actor._lastBlowjobMapID = -1;
		actor._lastTittyFuckMapID = -1;
		actor._lastCunnilingusMapID = -1;
		actor._lastButtSpankedMapID = -1;
		actor._lastPussySexMapID = -1;
		actor._lastAnalSexMapID = -1;
		actor._lastBukkakeMapID = -1;
		actor._lastSwallowMapID = -1;
		actor._lastPussyCreampieMapID = -1;
		actor._lastAnalCreampieMapID = -1;
		
		actor._firstRimjobWantedID = -1;
		actor._firstRimjobDate = false;
		actor._firstRimjobName = false;
		actor._firstRimjobMapID = -1;
		actor._lastRimjobName = false;
		actor._lastRimjobDate = false;
		actor._lastRimjobMapID = -1;
		actor._recordRimjobCount = 0;
		actor._recordRimjobPeople = 0;
		
		actor._firstFootjobWantedID = -1;
		actor._firstFootjobDate = false;
		actor._firstFootjobName = false;
		actor._firstFootjobMapID = -1;
		actor._lastFootjobName = false;
		actor._lastFootjobDate = false;
		actor._lastFootjobMapID = -1;
		actor._recordFootjobCount = 0;
		actor._recordFootjobPeople = 0;
		actor._recordBukkakeLegsML = 0;
		
		actor._recordManuallyRemovedToysTotalCount = 0;
		actor._recordManuallyRemovedClitToyCount = 0;
		actor._recordManuallyRemovedPussyToyCount = 0;
		actor._recordManuallyRemovedAnalToyCount = 0;
		actor._recordTotalToysInsertedCount = 0;
		actor._recordClitToyInsertedCount = 0;
		actor._recordPussyToyInsertedCount = 0;
		actor._recordAnalToyInsertedCount = 0;
		actor._recordTotalToysUsedByEnemyCount = 0;
		actor._recordClitToyUsedByEnemyCount = 0;
		actor._recordPussyToyUsedByEnemyCount = 0;
		actor._recordAnalToyUsedByEnemyCount = 0;
		actor._baseToyLvl = 1;
		actor._recordToysPleasure = 0;
		actor._recordToysInsertedByPeople = 0;
		actor._recordOrgasmFromToysCount = 0;
		actor._recordDebuffOffBalancedCount = 0;
		actor._recordDebuffFallenCount = 0;
		actor._recordDebuffDisarmedCount = 0;
		actor._recordDebuffDownStaminaCount = 0;
		actor._recordHornyCount = 0;
		actor._recordFixClothesUsageCount = 0;
		actor._recordCockKickUsageCount = 0;
		actor._recordKissUsageCount = 0;
		actor._recordCockPetUsageCount = 0;
		actor._recordHandjobUsageCount = 0;
		actor._recordBlowjobUsageCount = 0;
		actor._recordRimjobUsageCount = 0;
		actor._recordFootjobUsageCount = 0;
		actor._recordTittyFuckUsageCount = 0;
		actor._recordPussySexUsageCount = 0;
		actor._recordAnalSexUsageCount = 0;
		actor._recordFlauntCount = 0;
		actor._recordFlauntPeople = 0;
		actor._recordSexPose_KickCounterCount = 0;
		actor._recordBarWaitressBattleCount = 0;
		actor._recordBarWaitressSexCount = 0;
		actor._recordCockinessGainedValue = 0;
		actor._recordVirginitiesTakenTotal = 0;
		actor._recordVirginitiesTakenViaPussy = 0;
		actor._recordVirginitiesTakenViaAnal = 0;
		actor._recordSexPose_SlimePiledriverCount = 0;
		actor._recordSexualPartnersNerd = 0;
		actor._recordSexualPartnersRogue = 0;
		actor._recordSexualPartnersSlime = 0;
		
		actor._recordSexualPartnersTotal = actor._recordSexualPartnersThug + actor._recordSexualPartnersPrisoner + actor._recordSexualPartnersGuard + actor._recordSexualPartnersOrc + actor._recordSexualPartnersGoblin;
		
		actor._flagEquippedHellWardenOneTitleForWholeDay = false;
		actor._flagEquippedHellWardenTwoTitleForWholeDay = false;
	
		actor.setTachieHatInFrontOfBody(true);
		
		for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
			$gameParty._wantedEnemies[i]._disabled = false;
		}
		while(this.fixDuplicateWanted());
		
		this.fixWantedWithUndefinedBattlernum();
		this.update_addToAllWanted_Records_v8();
		this.update_setActorPassivesObtainedOnArray();
		this.update_removeOffAndDefHalberdEdicts();
		
		actor.forgetSkill(PASSIVES_TITLE_LEFT_ID);
		actor.forgetSkill(PASSIVES_TITLE_CENTER_ID);
		actor.forgetSkill(PASSIVES_TITLE_RIGHT_ID);
		actor.learnSkill(SKILL_DEBUG_SURRENDER_ID); 
		actor.learnSkill(SKILL_DEBUG_DEFEAT_ALL_ID); 
		actor.learnSkill(SKILL_DEBUG_STRIP_CLOTHES_ID); 
		actor.learnSkill(SKILL_KARRYN_KISS_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_KARRYN_HANDJOB_SELECTOR_CANT_ID); 
		actor.learnSkill(63);
		actor.learnSkill(64);
		actor.learnSkill(103);
		actor.learnSkill(104);
		actor.learnSkill(SKILL_KARRYN_FLAUNT_ID);
		actor.learnSkill(SKILL_FALLEN_REST_ID);
		actor.learnSkill(SKILL_KARRYN_KICK_STRIKE_ID);
		actor.learnSkill(SKILL_KARRYN_KICK_SLASH_ID);
		actor.learnSkill(SKILL_KARRYN_KICK_THRUST_ID);
		actor.learnSkill(SKILL_KARRYN_PICK_UP_HALBERD_ID);
		actor.learnSkill(SKILL_KARRYN_GET_CLOSER_TO_HALBERD_ID);
		actor.learnSkill(SKILL_GIVE_UP_ID);
		actor.learnSkill(SKILL_SURRENDER_ID);
		actor.learnSkill(SKILL_KARRYN_REMOVE_TOY_ID); 
		actor.learnSkill(SKILL_KARRYN_COCK_PETTING_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_COCK_PETTING_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_KARRYN_RIMJOB_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_RIMJOB_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_KARRYN_FOOTJOB_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_FOOTJOB_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_KARRYN_BLOWJOB_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_BLOWJOB_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_KARRYN_TITTYFUCK_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_TITTYFUCK_SELECTOR_CANT_ID); 
		
		if($gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV1_ID) && Prison.prisonLevelOneIsAnarchy()) {
			Prison.firstSubjugationPrisonLevelOne();
		}
		this._prisonLevelOne_workshopRioting = false;
		this._prisonLevelOne_dishwashingRioting = false;
		this._prisonLevelOne_laundryRioting = false;
		this._prisonLevelOne_receptionRioting = false;
		
	}
	
	if(this._karrynPrisonVersion < 15) {
		this._wantedEnemies.unshift(new Wanted_Enemy(false));
		
		if(this._wantedId_Tonkin === -1 || this._wantedId_Tonkin === undefined) {
			let foundWanted = -1;
			if(TextManager.isJapanese) {
				foundWanted = $gameParty.isThisNameAlreadyInWanted_onlyNameMatters("トンキン");
			}
			else if(TextManager.isEnglish) {
				foundWanted = $gameParty.isThisNameAlreadyInWanted_onlyNameMatters("Tonkin");
			}
			this._wantedId_Tonkin = foundWanted;
		}
		if(this._wantedId_Yasu === -1 || this._wantedId_Yasu === undefined) {
			let foundWanted = -1;
			if(TextManager.isJapanese) {
				foundWanted = $gameParty.isThisNameAlreadyInWanted_onlyNameMatters("ヤス");
			}
			else if(TextManager.isEnglish) {
				foundWanted = $gameParty.isThisNameAlreadyInWanted_onlyNameMatters("Yasu");
			}
			this._wantedId_Yasu = foundWanted;
		}
		if(this._wantedId_Cargill === -1 || this._wantedId_Cargill === undefined) {
			let foundWanted = -1;
			if(TextManager.isJapanese) {
				foundWanted = $gameParty.isThisNameAlreadyInWanted_onlyNameMatters("カーギル");
			}
			else if(TextManager.isEnglish) {
				foundWanted = $gameParty.isThisNameAlreadyInWanted_onlyNameMatters("Cargill");
			}
			this._wantedId_Cargill = foundWanted;
		}	
	}
	
	if(this._karrynPrisonVersion < 16) {
		for(let i = 1; i < this._wantedEnemies.length; i++) {
			let wantedEnemy = this._wantedEnemies[i];
			wantedEnemy._wantedId += 1;
		}
	}
	
	if(this._karrynPrisonVersion < 17) {
		actor._recordSeenAnalCount = 0;
		if($gameVariables.value(VARIABLE_BEAT_LEVEL_ID) === 1 && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV1_ID)) {
			$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 32, "A"], true);
		}
		for(let i = WAITRESS_SKILL_START; i <= WAITRESS_SKILL_END; i++) {
			actor.learnSkill(i); 
		}
		
	}
	
	if(this._karrynPrisonVersion < 18) {
		actor.learnSkill(SKILL_GIVE_UP_ID);
		actor.learnSkill(SKILL_SURRENDER_ID);
	}
	
	if(this._karrynPrisonVersion < 18) {
		actor.learnSkill(SKILL_GIVE_UP_ID);
		actor.learnSkill(SKILL_SURRENDER_ID);
	}
	
	if(this._karrynPrisonVersion < 19) {
		for(let i = 1; i < this._wantedEnemies.length; i++) {
			let wantedEnemy = this._wantedEnemies[i];
			if(!wantedEnemy._enemyType) wantedEnemy._disabled = true;
		}
	}
	
	if(this._karrynPrisonVersion < 21) {
		if(this.order === null) {
			this.setOrder(50);
		}
	}
	
	if(this._karrynPrisonVersion < 22) {
		this._prisonLevelOne_riotingDays = 0;
		this._prisonLevelTwo_riotingDays = 0;
		this._prisonLevelThree_riotingDays = 0;
		this._prisonLevelFour_riotingDays = 0;
		this._prisonLevelFive_riotingDays = 0;
	}

	if(this._karrynPrisonVersion < 23) {
		actor.resetTachieCockAnal();
		actor._dontResetSexPose = false;
	}
	
	if(this._karrynPrisonVersion < 24) {
		
		$gameSelfSwitches.setValue([MAP_ID_OFFICE_FLOODED, 12, "A"], true);
	}
	
	if(this._karrynPrisonVersion < 25) {
		actor.cleanUpLiquids();
	}
	
	if(this._karrynPrisonVersion < 26) {
		if($gameSwitches.value(SWITCH_GIFT_EMPEROR_LV2_ID)) {
			$gameSelfSwitches.setValue([MAP_ID_OFFICE_FLOODED, 12, "A"], true);
			$gameSwitches.setValue(SWITCH_WON_BOSS_BATTLE_LV2_ID, true);
		}
		else {
			$gameSelfSwitches.setValue([MAP_ID_OFFICE_FLOODED, 12, "A"], false);
			$gameSwitches.setValue(SWITCH_WON_BOSS_BATTLE_LV2_ID, false);
		}

	}
	
	if(this._karrynPrisonVersion < 27) {
		$gameSystem.setAutosave(true);
	}
	
	if(this._karrynPrisonVersion < 28) {
		if(Karryn.hasEdict(EDICT_THE_GOBLIN_PROBLEM))
			this.increaseOrderChangePerDay(-2);
		if(Karryn.hasEdict(EDICT_ANTI_GOBLIN_SQUAD))
			this.increaseOrderChangePerDay(2);
		if(Karryn.hasEdict(EDICT_BAIT_GOBLINS))
			this.increaseOrderChangePerDay(2);
	}
	
	if(this._karrynPrisonVersion < 29) {
		actor._firstPussySexWasToyWantedID = -1;
		actor._firstPussySexWasToyDate = false;
		actor._firstPussySexWasToyName = false;
		actor._firstPussySexWasToyMapID = -1;
	}
	
	if(this._karrynPrisonVersion < 30) {
		if(Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL))
			this.increaseOrderChangePerDay(2);
	}
	
	if(this._karrynPrisonVersion < 31) {
		this._daysWithoutDoingWaitressBar = 0;
		actor.calculateMainLvlsGained();
		actor.clearParamExp();
		this.fix_setActorPassivesObtainedOnArray_missingCharacterCreators();
	}
	
	if(this._karrynPrisonVersion < 32) {
		actor._hasTachiePubic = true;
	}
	
	if(this._karrynPrisonVersion < 33) {
		if(actor._obtainedTitles) {
			if(!$gameParty.hasItem($dataArmors[TITLE_ID_EFFICIENT_ADMINSTRATOR], true) && actor._obtainedTitles[TITLE_ID_EFFICIENT_ADMINSTRATOR]) 
				actor._obtainedTitles[TITLE_ID_EFFICIENT_ADMINSTRATOR] = false;
			if(!$gameParty.hasItem($dataArmors[TITLE_ID_CORRUPTED_OFFICIAL], true) && actor._obtainedTitles[TITLE_ID_CORRUPTED_OFFICIAL]) 
				actor._obtainedTitles[TITLE_ID_CORRUPTED_OFFICIAL] = false;
			if(!$gameParty.hasItem($dataArmors[TITLE_ID_CORPORAL_PUNISHER], true) && actor._obtainedTitles[TITLE_ID_CORPORAL_PUNISHER]) 
				actor._obtainedTitles[TITLE_ID_CORPORAL_PUNISHER] = false;
			if(!$gameParty.hasItem($dataArmors[TITLE_ID_CAREFUL_SUPERVISOR], true) && actor._obtainedTitles[TITLE_ID_CAREFUL_SUPERVISOR]) 
				actor._obtainedTitles[TITLE_ID_CAREFUL_SUPERVISOR] = false;
			if(!$gameParty.hasItem($dataArmors[TITLE_ID_WORKAHOLIC], true) && actor._obtainedTitles[TITLE_ID_WORKAHOLIC]) 
				actor._obtainedTitles[TITLE_ID_WORKAHOLIC] = false;
			if(!$gameParty.hasItem($dataArmors[TITLE_ID_CORNERCUTTING_EMPLOYER], true) && actor._obtainedTitles[TITLE_ID_CORNERCUTTING_EMPLOYER]) 
				actor._obtainedTitles[TITLE_ID_CORNERCUTTING_EMPLOYER] = false;
		}
	}
	
	
	if(this._karrynPrisonVersion < 34) {
		actor._liquidBukkakeButtTopRight = 0;
		actor._liquidBukkakeButtTopLeft = 0;
		actor._liquidBukkakeButtBottomRight = 0;
		actor._liquidBukkakeButtBottomLeft = 0;
		actor._recordUrinalCount = 0;
		actor._tempRecordUrinal = false;
		actor.resetTachieSemenCockMouthExtension();
		actor.resetTachieSemenCockPussyExtension();
		actor.resetTachieSemenCockAnalExtension();
		actor.resetTachieSemenFrontAExtension();
		actor.resetTachieSemenFrontBExtension();
		actor.resetTachieSemenFrontCExtension();
		actor.resetTachieSemenFrontDExtension();
		actor.resetTachieSemenFrontEExtension();
		this.recalculateBaseIncomeAndExpense();
	}
	
	if(this._karrynPrisonVersion < 35) {
		actor.resetTachieClothes();
		actor.resetTachieSkirt();
		actor._toyValue_clitToy = 0;
		actor._toyValue_pussyToy = 0;
		actor._toyValue_analToy = 0;
		actor.setMaxTachieSemenDeskId(0);
		actor._liquidOnDesk = 0;
		
		actor._recordSexPose_GuardGangbangCount = 0;
		actor._flagEquippedFullOrderTwoTitleForWholeDay = false;
		actor._lastMentalBattleSkill = new Game_Item();
	
		for(let i = 1059; i <= 1064; i++) {
			actor.learnSkill(i);
		}
		actor.forgetSkill(64);
		actor.forgetSkill(65);
		actor.forgetSkill(66);
		actor.forgetSkill(67);
		actor.forgetSkill(68);
		
		actor._firstKissWasVisitor = false;
		actor._recordVisitorReceptionistBattleCount = 0;
		actor._playthroughRecordVisitorReceptionistBattleCount = 0;
		actor._playthroughRecordReceptionistBattleTotalShiftsCount = 0;
		actor._recordSexualPartnersVisitor = 0;
		actor._playthroughRecordReceptionistHandshakePeople = 0;
		actor._playthroughRecordReceptionistBoobshakePeople = 0;
		actor._recordVisitorReceptionistHandshakeCount = 0;
		actor._recordVisitorReceptionistHandshakePeople = 0;
		actor._playthroughRecordReceptionistHandjobPeople = 0;
		actor._playthroughRecordReceptionistBlowjobPeople = 0;
		actor._recordVisitorReceptionistKissPeople = 0;
		actor._playthroughRecordReceptionistKissPeople = 0;
		actor._recordVisitorReceptionistBoobshakeCount = 0;
		actor._recordVisitorReceptionistBoobshakePeople = 0;
		actor._recordVisitorReceptionistHandjobPeople = 0;
		actor._recordVisitorReceptionistBlowjobPeople = 0;
		actor._playthroughRecordVisitorSwallowML = 0;
		actor._playthroughRecordReceptionistGoblinCreampieML = 0;
		
		this.initializeReceptionistSettings();
		this._daysWithoutDoingVisitorReceptionist = 0;
		
		actor.putOnGlovesAndHat();
		if(actor.isInMapPose()) {
			actor.setWardenMapPose();
		}
		
		for(let i = RECEPTIONIST_SKILL_START; i <= RECEPTIONIST_SKILL_END; i++) {
			actor.learnSkill(i); 
		}
	}
	
	if(this._karrynPrisonVersion < 36) {
		actor.recalculateBodySensitivities();
		actor.recalculateSkillLvls();
		actor.setHalberdAsDefiled(false);
		
		actor.learnSkill(SKILL_KARRYN_COCK_STARE_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_COCK_STARE_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_FEMALE_ORGASM_ONE_ID); 
		actor.learnSkill(SKILL_FEMALE_ORGASM_TWO_ID); 
		
		actor._playthroughRecordReceptionistPagesProcessedCount = 0;
		actor._playthroughRecordReceptionistHandshakeWhileSexPeople = 0;
		actor._playthroughRecordReceptionistOrgasmWhileCallingCount = 0;
		actor._playthroughRecordWaitressServingPettedCount = 0;
		actor._playthroughRecordWaitressServingOrgasmCount = 0;
		actor._playthroughRecordWaitressBattleDrankSemenMugML = 0;
		
		actor._recordPettedWhileWorkingCount = 0;
		actor._recordWaitressFlashedCount = 0;
		actor._recordSeeEnemyTalkCockCount = 0;
		actor._recordSeeJerkOffPeople = 0;
		actor._recordSeeEnemyTalkCockPeople = 0;
		actor._recordCockStareUsageCount = 0;
		actor._recordOrgasmFromSpankingCount = 0;
		
		actor._recordSubduedMetalEnemies = 0;
		actor._recordMetalSexualPartnersCount = 0;
		
		actor.resetTodayVariables();
		
		this.update_addToAllWanted_Records_v36();
		
		if(actor.isInMapPose()) actor.emoteMapPose();
		this._karrynPrisonVersion36_TachieUpdated = true;
	}
	
	if(this._karrynPrisonVersion < 37) {
		actor.learnSkill(1579); 
		actor.learnSkill(SKILL_RESTORE_MIND_ID);
		if(this._dayCount % 2 === 1) {
			$gameSwitches.setValue(SWITCH_ODD_DAY_ID, true);
			$gameSwitches.setValue(SWITCH_EVEN_DAY_ID, false);
		}
		else {
			$gameSwitches.setValue(SWITCH_EVEN_DAY_ID, true);
			$gameSwitches.setValue(SWITCH_ODD_DAY_ID, false);
		}
		if(Karryn.hasEdict(EDICT_RECEPTIONIST_OUTFIT_I))
			$gameSwitches.setValue(SWITCH_EDICT_RECEPTIONIST_OUTFIT_ID, true);		
		
	}
	
	if(this._karrynPrisonVersion < 38) {
		actor.learnSkill(SKILL_SKEWER_2_ID); 
		actor.learnSkill(SKILL_SLAM_2_ID); 
		actor._flagEquippedRadioOrgasmTitleForWholeDay = false;
		
	}
	
	if(this._karrynPrisonVersion < 39) {
		if(Karryn.isInReceptionistPose()) {
			actor.setWardenMapPose();
			actor.setKarrynWardenSprite();
		}
	}
	
	if(this._karrynPrisonVersion < 40) {
		actor._flagEquippedJadeNecklaceForWholeDay = false;
	}
	
	if(this._karrynPrisonVersion < 41) {
		for(let i = GLORY_SKILL_START; i <= GLORY_SKILL_END; i++) {
			actor.learnSkill(i); 
		}
		
		actor.resetTachieTie();
		actor.resetTachieLeftHole();
		actor.resetTachieRightHole();
		actor.resetTachieLegs();
		actor.resetTachiePubicExtension();
		actor.resetTachieSemenMouthExtension();
		actor.resetStoreItem();
		
		if(!Prison.prisonLevelOneIsRioting()) {
			Karryn.learnSkill(EDICT_LEVEL_ONE_IS_NOT_RIOTING);
		}
		
		actor.learnSkill(SKILL_LIGHT_KICK_ID);
		actor.learnSkill(SKILL_KARRYN_ANALSEX_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_ANALSEX_SELECTOR_CANT_ID); 
		actor.learnSkill(SKILL_KARRYN_PUSSYSEX_SELECTOR_ID); 
		actor.learnSkill(SKILL_KARRYN_PUSSYSEX_SELECTOR_CANT_ID); 
		actor.learnSkill(EDICT_SPECIALIZATION_EXPLANATION);
		actor.learnSkill(EDICT_INSURANCE_EXPLANATION_1);
		actor.learnSkill(EDICT_INSURANCE_EXPLANATION_2);
		actor.learnSkill(EDICT_NO_CLASSES);
		actor.learnSkill(EDICT_RECEPTION_POLICY_NEUTRAL);
		
		this.setGloryReputation(0);
		this._daysWithoutVisitingGlory = 0;
		this._enableResearchEdicts = false;
		this._daysSinceLastPrisonRiot = 0;
		this._daysSinceLastLevelOneRiot = 0;
		this._daysSinceLastLevelTwoRiot = 0;
		this._daysSinceLastLevelThreeRiot = 0;
		this._daysSinceLastLevelFourRiot = 0;
		this._daysSinceLastLevelFiveRiot = 0;
		this._prisonLevelTwo_meetingRoomRioting = false;
		this._prisonLevelTwo_researchRioting = false;
		this._prisonLevelTwo_staffLoungeRioting = false;
		this._prisonLevelTwo_classroomRioting = false;
		this._prisonLevelTwo_readingRoomRioting = false;
		this._wantedId_Aron = -1;
		
		actor._baseSemenLvl = 0;
		actor._baseStripLvl = 0;
		actor._recordSexualPartnersLizardman = 0;
		actor._recordSexualPartnersHomeless = 0;
		actor._recordSexPose_OrcPaizuriCount = 0;
		actor._recordSexPose_LizardmanCowgirlCount = 0;
		actor._recordGloryBattleCockHandledCount = 0;
		actor._recordGloryBattleCockEjaculationCount = 0;
		actor._playthroughRecordGloryCocksAppearedCount = 0;
		actor._playthroughRecordGloryCocksServed = 0;
		actor._playthroughRecordGloryOrgasmWhileGuestEatingCount = 0;
		actor._playthroughRecordGloryCreampieML = 0;
		actor._playthroughRecordGlorySwallowML = 0;
		actor._recordPreLevelFourOldSexualPartners = 0;
		actor._recordPostLevelThreeNewSexualPartners = 0;
		
		actor._recordSexPose_KickCounterCount = Math.min(actor._recordSexPose_KickCounterCount,LIMIT_KICK_COUNTER_SEX_COUNT);
		
		this.update_addToAllWanted_Records_v41();
		
		if($gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV2_ID) && Prison.prisonLevelTwoIsAnarchy()) {
			Prison.firstSubjugationPrisonLevelTwo();
		}
		
		if(actor._firstPussySexWantedID === -1) {
			$gameSwitches.setValue(SWITCH_IS_VIRGIN_ID, true);
			$gameSwitches.setValue(SWITCH_IS_NON_VIRGIN_ID, false);
		}
		else {
			$gameSwitches.setValue(SWITCH_IS_VIRGIN_ID, false);
			$gameSwitches.setValue(SWITCH_IS_NON_VIRGIN_ID, true);
		}
		
		if(Karryn.hasEdict(EDICT_REPAIR_OFFICE)) {
			$gameSwitches.setValue(SWITCH_EDICT_FIX_OFFICE_ID, true);
		}
		if(Karryn.hasEdict(EDICT_REPAIR_STORE)) {
			$gameSwitches.setValue(SWITCH_EDICT_FIX_STORE_ID, true);
		}
	}
	
	if(this._karrynPrisonVersion < 42) {
		if(Prison.prisonLevelTwoIsRioting()) {
			this.setPrisonLevelTwoSubjugated();
			this._prisonLevelTwo_riotingDays = 0;
		}
	}
	
	if(this._karrynPrisonVersion < 43) {
		if(Karryn.hasEdict(EDICT_SPEC_CLEAVE_POWER) && Karryn.hasEdict(EDICT_SPEC_CLEAVE_TECH)) {
			actor.forgetSkill(EDICT_SPEC_CLEAVE_POWER);
			actor.forgetSkill(EDICT_SPEC_CLEAVE_TECH);
		}
	}
	
	if(this._karrynPrisonVersion < 44) {
		actor.setMaxTachieSemenMouthId(0);
	}
	
	if(this._karrynPrisonVersion < 45) {
		actor.forgetPassive(241);
		actor.forgetPassive(243);
	}

	if(this._karrynPrisonVersion < 46) {
		$gameParty.postRiotBattleCleanup();
		this._prisonLevelOne_anarchyDays = 0;
		this._prisonLevelTwo_anarchyDays = 0;
		this._prisonLevelThree_anarchyDays = 0;
		this._prisonLevelFour_anarchyDays = 0;
		this._prisonLevelFive_anarchyDays = 0;
	}
	
	if(this._karrynPrisonVersion < 47) {
		if(Karryn.hasEdict(EDICT_RESEARCH_LAUNDRY_PRODUCT_CONTRACT))
			$gameSwitches.setValue(82, true);
	}
	
	if(this._karrynPrisonVersion < 48) {
		actor.forgetPassive(241);
		actor.forgetPassive(243);
		actor.forgetPassive(844);
		actor._recordPussyPettedCount = Math.min(actor._recordPussyPettedCount, LIMIT_PUSSY_PETTED_COUNT);
		actor._recordDebuffFallenCount = Math.min(actor._recordDebuffFallenCount, LIMIT_DEBUFF_FALLEN_COUNT);
		
		this._levelOneBonusGracePeriod = 0;
		this._levelTwoBonusGracePeriod = 0;
		this._levelThreeBonusGracePeriod = 0;
		this._levelFourBonusGracePeriod = 0;
		this._levelFiveBonusGracePeriod = 0;
		
		this.recalculateBaseOrderChange();
	}
	
	if(this._karrynPrisonVersion < 49) {
		this.recalculateBaseOrderChange();
	}
	
	this.setCurrentGameVersion();
}; 

//Called when loading game 
Game_Party.prototype.emergencyGameVersionFix = function() {
	
	if(this._karrynPrisonVersion < 43) {
		if(Karryn.hasEdict(EDICT_OFFICE_BED_UPGRADE_THREE)) {
			let mapId = $gameMap._mapId;
			if(mapId === MAP_ID_KARRYN_OFFICE && $gameSwitches.value(SWITCH_WON_BOSS_BATTLE_LV3_ID) && !$gameSwitches.value(SWITCH_GIFT_EMPEROR_LV3_ID)) {
				$gamePlayer.reserveTransfer(MAP_ID_KARRYN_OFFICE, 11, 8, 0, 0);
			}
		}
	}
	
};

/////////
// Fixes
///////////

Game_Party.prototype.fixDuplicateWanted = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let namesCount = this.putAllWantedNamesToNamesCountArray();
	//console.log(namesCount);
	//console.log($gameParty._wantedEnemies);
	let dupeName = false;
	for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
		let wanted = $gameParty._wantedEnemies[i];
		let name = wanted._enemyName;
		if(namesCount[name] > 1) {
			dupeName = name;
			break;
		}
	}
	
	//console.log(dupeName);
	if(dupeName) {
		let dupeIds = [];
		for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
			let wanted = $gameParty._wantedEnemies[i];
			let name = wanted._enemyName;
			if(name == dupeName) {
				dupeIds.push(wanted._wantedId);
			}
		}
		
		let masterId = dupeIds[0];
		for(let i = 1; i < dupeIds.length; ++i) {
			let dupedId = dupeIds[i];
			if(actor._firstKissWantedID === dupedId) actor._firstKissWantedID = masterId;
			if(actor._firstPussySexWantedID === dupedId) actor._firstPussySexWantedID = masterId;
			if(actor._firstAnalSexWantedID === dupedId) actor._firstAnalSexWantedID = masterId;
			if(actor._firstHandjobWantedID === dupedId) actor._firstHandjobWantedID = masterId;
			if(actor._firstBlowjobWantedID === dupedId) actor._firstBlowjobWantedID = masterId;
			if(actor._firstTittyFuckWantedID === dupedId) actor._firstTittyFuckWantedID = masterId;
			if(actor._firstCunnilingusWantedID === dupedId) actor._firstCunnilingusWantedID = masterId;
			if(actor._firstButtSpankedWantedID === dupedId) actor._firstButtSpankedWantedID = masterId;
			if(actor._firstSwallowWantedID === dupedId) actor._firstSwallowWantedID = masterId;
			if(actor._firstBukkakeWantedID === dupedId) actor._firstBukkakeWantedID = masterId;
			if(actor._firstPussyCreampieWantedID === dupedId) actor._firstPussyCreampieWantedID = masterId;
			if(actor._firstAnalCreampieWantedID === dupedId) actor._firstAnalCreampieWantedID = masterId;
			
			$gameParty._wantedEnemies[dupedId]._disabled = true;
		}
		
	}
	
	if(dupeName) return true;
	else return false;
}; 

Game_Party.prototype.fixWantedWithUndefinedBattlernum = function() {
	for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
		let wanted = $gameParty._wantedEnemies[i];

		if(wanted && wanted._battlerName && wanted._battlerName.includes('undefined')) {
			wanted._disabled = true;
		}
	}

}; 

Game_Party.prototype.fixCharacterCreatorSwitches = function() {
	console.log('fixCharacterCreatorSwitches');
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if(!actor.hasSkill(CHARA_CREATE_TWO_BOOBS_ID) && !actor.hasSkill(CHARA_CREATE_TWO_NIPPLES_ID) && !actor.hasSkill(CHARA_CREATE_TWO_CLIT_ID) && !actor.hasSkill(CHARA_CREATE_TWO_PUSSY_ID) && !actor.hasSkill(CHARA_CREATE_TWO_BUTT_ID) && !actor.hasSkill(CHARA_CREATE_TWO_ANAL_ID) && !actor.hasSkill(CHARA_CREATE_TWO_MOUTH_ID) && !actor.hasSkill(CHARA_CREATE_TWO_PETTING_ID)) {
		$gameSwitches.setValue(SWITCH_CREATOR_STEP_2_COMPLETED_ID, false);
	}
	else {
		console.log(actor.hasSkill(CHARA_CREATE_TWO_BOOBS_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_NIPPLES_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_CLIT_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_PUSSY_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_BUTT_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_ANAL_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_MOUTH_ID));
		console.log(actor.hasSkill(CHARA_CREATE_TWO_PETTING_ID));
	}

	if(!actor.hasSkill(CHARA_CREATE_THREE_MOUTH_ID) && !actor.hasSkill(CHARA_CREATE_THREE_BOOBS_ID) && !actor.hasSkill(CHARA_CREATE_THREE_PUSSY_ID) && !actor.hasSkill(CHARA_CREATE_THREE_BUTT_ID) && !actor.hasSkill(CHARA_CREATE_THREE_ONANI_ID) && !actor.hasSkill(CHARA_CREATE_THREE_SADO_ID) && !actor.hasSkill(CHARA_CREATE_THREE_MAZO_ID)) {
		$gameSwitches.setValue(SWITCH_CREATOR_STEP_3_COMPLETED_ID, false);
		console.log('call 2');
	}
	else {
		console.log(actor.hasSkill(CHARA_CREATE_THREE_MOUTH_ID));
		console.log(actor.hasSkill(CHARA_CREATE_THREE_BOOBS_ID));
		console.log(actor.hasSkill(CHARA_CREATE_THREE_PUSSY_ID));
		console.log(actor.hasSkill(CHARA_CREATE_THREE_BUTT_ID));
		console.log(actor.hasSkill(CHARA_CREATE_THREE_ONANI_ID));
		console.log(actor.hasSkill(CHARA_CREATE_THREE_SADO_ID));
		console.log(actor.hasSkill(CHARA_CREATE_THREE_MAZO_ID));
	}
}; 

// Updates
Game_Party.prototype.update_addToAllWanted_Records_v8 = function() {
	for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
		let wanted = $gameParty._wantedEnemies[i];
		if(!wanted._enemyRecordToysInsertedCount)
			wanted._enemyRecordToysInsertedCount = 0;
		if(!wanted._enemyRecordFlauntedCount)
			wanted._enemyRecordFlauntedCount = 0;
		if(!wanted._enemyRecordRimmedCount)
			wanted._enemyRecordRimmedCount = 0;
		if(!wanted._enemyRecordFootjobCount)
			wanted._enemyRecordFootjobCount = 0;
		
	}
};

Game_Party.prototype.update_addToAllWanted_Records_v36 = function() {
	for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
		let wanted = $gameParty._wantedEnemies[i];
		if(!wanted._enemyRecordTalkCockCount)
			wanted._enemyRecordTalkCockCount = 0;
		if(!wanted._enemyRecordHandshakeCount)
			wanted._enemyRecordHandshakeCount = 0;
		if(!wanted._enemyRecordBoobshakeCount)
			wanted._enemyRecordBoobshakeCount = 0;
		if(!wanted._enemyRecordSawCount)
			wanted._enemyRecordSawCount = 0;
		if(!wanted._enemyRecordTalkedCount)
			wanted._enemyRecordTalkedCount = 0;
		if(!wanted._enemyRecordJerkoffCount)
			wanted._enemyRecordJerkoffCount = 0;
		if(!wanted._enemyRecordTauntedCount)
			wanted._enemyRecordTauntedCount = 0;
		if(!wanted._enemyRecordFingerSuckedCount)
			wanted._enemyRecordFingerSuckedCount = 0;
		if(!wanted._enemyRecordCockPettedCount)
			wanted._enemyRecordCockPettedCount = 0;
		if(!wanted._enemyRecordHandshakeWhileSexCount)
			wanted._enemyRecordHandshakeWhileSexCount = 0;
	}
};

Game_Party.prototype.update_addToAllWanted_Records_v41 = function() {
	for(let i = 0; i < $gameParty._wantedEnemies.length; ++i) {
		let wanted = $gameParty._wantedEnemies[i];
		if(!wanted._enemyRecordGloryBattleEjaculationCount)
			wanted._enemyRecordGloryBattleEjaculationCount = 0;
		if(!wanted._enemyRecordBoobshakeCount)
			wanted._enemyRecordBoobshakeCount = 0;
	}
};


Game_Party.prototype.update_setActorPassivesObtainedOnArray = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let date = Prison.date;
	
	actor._passivesObtainedOn_keyDate_valueSkillID = [];
	actor._passivesObtainedOn_keyDate_valueSkillID[date] = [];
	actor._passivesObtainedOn_keySkillID_valueDate = [];
	
	for(let i = PASSIVES_LIST_START_ID; i <= PASSIVES_LIST_END_ID; i++) {
		if(actor.hasPassive(i)) {
			actor._passivesObtainedOn_keySkillID_valueDate[i] = date;
			actor._passivesObtainedOn_keyDate_valueSkillID[date].push(i);
		}
		
	}
	for(let i = PASSIVES_LIST_TWO_START_ID; i <= PASSIVES_LIST_TWO_END_ID; i++) {
		if(actor.hasPassive(i)) {
			actor._passivesObtainedOn_keySkillID_valueDate[i] = date;
			actor._passivesObtainedOn_keyDate_valueSkillID[date].push(i);
		}
	}
	
	for(let i = PASSIVES_LIST_CC1_START_ID; i <= PASSIVES_LIST_CC1_END_ID; i++) {
		if(actor.hasPassive(i)) {
			actor._passivesObtainedOn_keySkillID_valueDate[i] = date;
			actor._passivesObtainedOn_keyDate_valueSkillID[date].push(i);
		}
	}
	
	for(let i = PASSIVES_LIST_CC2_START_ID; i <= PASSIVES_LIST_CC2_END_ID; i++) {
		if(actor.hasPassive(i)) {
			actor._passivesObtainedOn_keySkillID_valueDate[i] = date;
			actor._passivesObtainedOn_keyDate_valueSkillID[date].push(i);
		}
	}
};

Game_Party.prototype.fix_setActorPassivesObtainedOnArray_missingCharacterCreators = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let date = Prison.date;
	
	if(!actor._passivesObtainedOn_keyDate_valueSkillID[date])
		actor._passivesObtainedOn_keyDate_valueSkillID[date] = [];
	
	for(let i = PASSIVES_LIST_CC1_START_ID; i <= PASSIVES_LIST_CC1_END_ID; i++) {
		if(actor.hasPassive(i) && !actor._passivesObtainedOn_keySkillID_valueDate[i]) {
			actor._passivesObtainedOn_keySkillID_valueDate[i] = date;
			actor._passivesObtainedOn_keyDate_valueSkillID[date].push(i);
		}
	}
	for(let i = PASSIVES_LIST_CC2_START_ID; i <= PASSIVES_LIST_CC2_END_ID; i++) {
		if(actor.hasPassive(i) && !actor._passivesObtainedOn_keySkillID_valueDate[i]) {
			actor._passivesObtainedOn_keySkillID_valueDate[i] = date;
			actor._passivesObtainedOn_keyDate_valueSkillID[date].push(i);
		}
	}
};

Game_Party.prototype.update_removeOffAndDefHalberdEdicts = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	if(actor.hasEdict(EDICT_HALBERD_OFFENSIVE_SPECIALIZATION) && actor.hasEdict(EDICT_HALBERD_DEFENSIVE_SPECIALIZATION)) {
		actor.forgetSkill(EDICT_HALBERD_OFFENSIVE_SPECIALIZATION);
        actor.resetStsSkill(EDICT_HALBERD_OFFENSIVE_SPECIALIZATION);
		actor.forgetSkill(EDICT_HALBERD_DEFENSIVE_SPECIALIZATION);
        actor.resetStsSkill(EDICT_HALBERD_DEFENSIVE_SPECIALIZATION);
	}
};