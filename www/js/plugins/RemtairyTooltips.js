var Remtairy = Remtairy || {};
Remtairy.Tooltips = Remtairy.Tooltips || {};

const REM_OLIVIA_TOOLTIP_TEXT_STARTING_Y = -5;
const REM_OLIVIA_TOOLTIP_TEXT_LINEHEIGHT = 22;
const REM_OLIVIA_TOOLTIP_PASSIVE_LINEHEIGHT = Yanfly.Param.VAFontSize + 8;

//=============================================================================
 /*:
 * @plugindesc Tooltips
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

Game_Actor.prototype.cacheDesireTooltips = function() {
	this._cacheMouthDesireTooltip = TextManager.mouthDesireTooltipText();
	this._cacheBoobsDesireTooltip = TextManager.boobsDesireTooltipText();
	this._cachePussyDesireTooltip = TextManager.pussyDesireTooltipText();
	this._cacheButtDesireTooltip = TextManager.buttDesireTooltipText();
	this._cacheCockDesireTooltip = TextManager.cockDesireTooltipText();
}

TextManager.stateTooltipText = function(battler, stateId) {
	let battlerName = battler.name();
	if(battler.isEnemy()) {
		if(battler.isUnique)
			battlerName = battler.originalName();
		else
			battlerName = battler._randomEnemyName;
	}
	
	if(stateId === STATE_DISARMED_ID) {
		return TextManager.StateTooltipsDisarmed;
	}
	else if(stateId === STATE_ENEMY_STANCE_SLASH_ID || stateId === STATE_ACTOR_SLASH_STANCE_ID) {
		return TextManager.StateTooltipsSlashStance.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_STANCE_PIERCE_ID || stateId === STATE_ACTOR_PIERCE_STANCE_ID) {
		return TextManager.StateTooltipsPierceStance.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_STANCE_BLUNT_ID || stateId === STATE_ACTOR_BLUNT_STANCE_ID) {
		return TextManager.StateTooltipsBluntStance.format(battlerName);
	}
	else if(stateId === STATE_HORNY_ID) {
		if(battler.isActor()) {
			if(Karryn.hasPassive(PASSIVE_HORNY_COUNT_THREE_ID))
				return TextManager.StateTooltipsHornyThree;
			else if(Karryn.hasPassive(PASSIVE_HORNY_COUNT_TWO_ID))
				return TextManager.StateTooltipsHornyTwo;
			else if(Karryn.hasPassive(PASSIVE_HORNY_COUNT_ONE_ID))
				return TextManager.StateTooltipsHornyOne;
			else
				return TextManager.StateTooltipsHornyZero;
		}
		else {
			return TextManager.StateTooltipsEnemyHorny.format(battlerName);
			
		}
	}
	else if(stateId === STATE_COOL_AND_COLLECTED_ID) {
		return TextManager.StateTooltipsCool;
	}
	else if(stateId === STATE_WEARING_PANTIES_ID) {
		return TextManager.StateTooltipsWearingPanties;
	}
	else if(stateId === STATE_NO_PANTIES_ID) {
		return TextManager.StateTooltipsNotWearingPanties;
	}
	else if(stateId === STATE_IS_WET_ID) {
		return TextManager.StateTooltipsIsWet;
	}
	else if(stateId === STATE_IS_NOT_WET_ID) {
		return TextManager.StateTooltipsNotWet;
	}
	else if(stateId === STATE_IS_VIRGIN_ID) {
		if(Karryn.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) {
			return TextManager.StateTooltipsVirginPublished;
		}
		else {
			if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID))
				return TextManager.StateTooltipsVirginLow;
			else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID))
				return TextManager.StateTooltipsVirginMed;
			else
				return TextManager.StateTooltipsVirginHigh;
		}
	}
	else if(stateId === STATE_ONANI_FRUSTRATED_ID) {
		return TextManager.StateTooltipsFrustrated;
	}
	else if(stateId === STATE_CONFIDENT_ID) {
		if(Karryn.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
			return TextManager.StateTooltipsConfidentOne;
		else
			return TextManager.StateTooltipsConfidentZero;
	}
	else if(stateId === STATE_WEAKEN_ID) {
		return TextManager.StateTooltipsWeaken.format(battlerName);
	}
	else if(stateId === STATE_DIZZY_ID) {
		return TextManager.StateTooltipsDizzy.format(battlerName);
	}
	else if(stateId === STATE_SLOW_ID) {
		return TextManager.StateTooltipsSlow.format(battlerName);
	}
	else if(stateId === STATE_VULNERABLE_ID) {
		return TextManager.StateTooltipsVulnerable.format(battlerName);
	}
	else if(stateId === STATE_OFFBALANCE_ID) {
		return TextManager.StateTooltipsOffBalanced.format(battlerName);
	}
	else if(stateId === STATE_POISON_ID) {
		return TextManager.StateTooltipsPoison.format(battlerName);
	}
	else if(stateId === STATE_WEAKNESS_EXPOSED_ID) {
		return TextManager.StateTooltipsExposeWeakness.format();
	}
	else if(stateId === STATE_STUNNED_ID) {
		return TextManager.StateTooltipsStunned.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_POSE_MASTER_ID) {
		return TextManager.StateTooltipsEnemyPoseMaster.format(battlerName);
	}
	else if(stateId === STATE_ATTACK_COMBO_COUNT_ID) {
		if(Karryn.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
			return TextManager.StateTooltipsActorAttackComboCocky.format(battler._tempAttackSkillConsUsage);
		else
			return TextManager.StateTooltipsActorAttackCombo.format(battler._tempAttackSkillConsUsage);
	}
	else if(stateId === STATE_SEX_COMBO_COUNT_ID) {
		return TextManager.StateTooltipsActorSexCombo.format(battler._tempSexSkillConsUsage);
	}
	else if(stateId === STATE_JUST_ORGASMED_ID) {
		return TextManager.StateTooltipsOrgasm;
	}
	else if(stateId === STATE_PUSSY_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPosePussySex.format(battlerName);
	}
	else if(stateId === STATE_RIGHTHAND_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseHandjob.format(battlerName);
	}
	else if(stateId === STATE_LEFTHAND_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseHandjob.format(battlerName);
	}
	else if(stateId === STATE_TITTYFUCK_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPosePaizuri.format(battlerName);
	}
	else if(stateId === STATE_BLOWJOB_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseBlowjob.format(battlerName);
	}
	else if(stateId === STATE_ANAL_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseAnalSex.format(battlerName);
	}
	else if(stateId === STATE_CUNNI_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseCunnilingus.format(battlerName);
	}
	else if(stateId === STATE_RIMMING_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseRimjob.format(battlerName);
	}
	else if(stateId === STATE_FOOTJOB_ENEMYPOSE_ID) {
		return TextManager.StateTooltipsEnemyPoseFootjob.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_KISSED_ID) {
		return TextManager.StateTooltipsEnemyKissed.format(battlerName);
	}
	else if(stateId === STATE_AROUSED_ID) {
		return TextManager.StateTooltipsAroused;
	}
	else if(stateId === STATE_CAUTIOUS_STANCE_ID) {
		return TextManager.StateTooltipsCautiousStance;
	}
	else if(stateId === STATE_GUARD_ID) {
		return TextManager.StateTooltipsDefensiveStance;
	}
	else if(stateId === STATE_COUNTER_STANCE_ID) {
		return TextManager.StateTooltipsCounterStance;
	}
	else if(stateId === STATE_SECRETARY_STANCE_ID) {
		return TextManager.StateTooltipsSecretaryStance;
	}
	else if(stateId === STATE_LADY_STANCE_ID) {
		return TextManager.StateTooltipsLadyStance;
	}
	else if(stateId === STATE_PLEASURE_STANCE_ID) {
		return TextManager.StateTooltipsPleasureStance;
	}
	else if(stateId === STATE_KI_ID) {
		if(Karryn.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_KI))
			return TextManager.StateTooltipsWillpowerKiTwo;
		else
			return TextManager.StateTooltipsWillpowerKiOne;
	}
	else if(stateId === STATE_FOCUS_ID) {
		if(Karryn.hasEdict(EDICT_SPEC_DEFENSIVE_MIND_FOCUS))
			return TextManager.StateTooltipsWillpowerFocusTwo;
		else
			return TextManager.StateTooltipsWillpowerFocusOne;
	}
	else if(stateId === STATE_EYE_OF_THE_MIND_ID) {
		if(Karryn.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_EOTM))
			return TextManager.StateTooltipsWillpowerEyeOfTheMindTwo;
		else
			return TextManager.StateTooltipsWillpowerEyeOfTheMindOne;
	}
	else if(stateId === STATE_SEE_NO_EVIL_ID) {
		return TextManager.StateTooltipsWillpowerSeeNoEvil;
	}
	else if(stateId === STATE_HEAR_NO_EVIL_ID) {
		return TextManager.StateTooltipsWillpowerHearNoEvil;
	}
	else if(stateId === STATE_REALITY_MARBLE_ID) {
		return TextManager.StateTooltipsWillpowerRealityMarble;
	}
	else if(stateId === STATE_KARRYN_RESIST_ORGASM_ICON_ID) {
		return TextManager.StateTooltipsWillpowerResistOrgasm;
	}
	else if(stateId === STATE_KARRYN_EDGING_CONTROL_ID) {
		return TextManager.StateTooltipsWillpowerEdgingControlKarryn;
	}
	else if(stateId === STATE_ENEMY_EDGING_CONTROL_ID) {
		return TextManager.StateTooltipsWillpowerEdgingControlEnemy.format(battlerName);
	}
	else if(stateId === STATE_BONUS_PIERCE_DMG_ID) {
		return TextManager.StateTooltipsBonusPierceDamage.format(battlerName);
	}
	else if(stateId === STATE_BONUS_SLASH_DMG_ID) {
		return TextManager.StateTooltipsBonusSlashDamage.format(battlerName);
	}
	else if(stateId === STATE_BONUS_BLUNT_DMG_ID) {
		return TextManager.StateTooltipsBonusBluntDamage.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_POST_CUM_STUN_ID) {
		return TextManager.StateTooltipsEjaculationStunned.format(battlerName);
	}
	else if(stateId === STATE_SLIME_REGEN_NORMAL_ID) {
		return TextManager.StateTooltipsSlimeRegenNormal.format(battlerName);
	}
	else if(stateId === STATE_SLIME_REGEN_FOURTH_ID) {
		return TextManager.StateTooltipsSlimeRegenFourth.format(battlerName);
	}
	else if(stateId === STATE_ORC_DEFENSIVE_PRESENCE_ID) {
		return TextManager.StateTooltipsOrcDefensivePresence.format(battlerName);
	}
	else if(stateId === STATE_LIZARDMAN_TWO_ID || stateId === STATE_LIZARDMAN_THREE_ID || stateId === STATE_LIZARDMAN_FOUR_ID || stateId === STATE_LIZARDMAN_FIVE_ID || stateId === STATE_LIZARDMAN_SEX_ID) {
		return TextManager.StateTooltipsLizardmanRacial.format(battlerName);
	}
	else if(stateId === STATE_CLIT_TOY_PINK_ROTOR_ID) {
		return TextManager.StateTooltipsKarrynClitToy;
	}
	else if(stateId === STATE_PUSSY_TOY_PENIS_DILDO_ID) {
		return TextManager.StateTooltipsKarrynPussyToy;
	}
	else if(stateId === STATE_ANAL_TOY_ANAL_BEADS_ID) {
		return TextManager.StateTooltipsKarrynAnalToy;
	}
	else if(stateId === STATE_ENEMY_HAS_PINK_ROTOR_ID) {
		return TextManager.StateTooltipsEnemyClitToyPinkRotor.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_HAS_PENIS_DILDO_ID) {
		return TextManager.StateTooltipsEnemyPussyToyPenisDildo.format(battlerName);
	}
	else if(stateId === STATE_ENEMY_HAS_ANAL_BEADS_ID) {
		return TextManager.StateTooltipsEnemyAnalToyAnalBeads.format(battlerName);
	}
	else if(stateId === STATE_ACCEPTING_NO_ALCOHOL_ID) {
		return TextManager.StateWaitressNoAlcohol.format(battler.rejectAlcoholWillCost());
	}
	else if(stateId === STATE_DIRTY_MUGS_ID) {
		if(battler._dirtyMugs === 1)
			return TextManager.StateWaitressDirtyMugsSingular.format(battlerName);
		else
			return TextManager.StateWaitressDirtyMugsPlural.format(battlerName, battler._dirtyMugs);
	}
	else if(stateId === STATE_DIRTY_GLASSES_ID) {
		if(battler._dirtyGlasses === 1)
			return TextManager.StateWaitressDirtyGlassesSingular.format(battlerName);
		else
			return TextManager.StateWaitressDirtyGlassesPlural.format(battlerName, battler._dirtyGlasses);
	}
	else if(stateId === STATE_AVAILABLE_MUGS_ID) {
		if($gameParty._waitressBattle_availableMugs === 1)
			return TextManager.StateWaitressAvailableMugsSingular;
		else
			return TextManager.StateWaitressAvailableMugsPlural.format($gameParty._waitressBattle_availableMugs);
	}
	else if(stateId === STATE_AVAILABLE_GLASSES_ID) {
		if($gameParty._waitressBattle_availableGlasses === 1)
			return TextManager.StateWaitressAvailableGlassesSingular;
		else
			return TextManager.StateWaitressAvailableGlassesPlural.format($gameParty._waitressBattle_availableGlasses);
	}	
	else if(stateId === STATE_BAR_KARRYN_ID) {
		return TextManager.StateWaitressKarrynLocation.format(battlerName);
	}
	else if(stateId === STATE_BAR_TABLE_A_ID) {
		return TextManager.StateWaitressTableALocation;
	}
	else if(stateId === STATE_BAR_TABLE_B_ID) {
		return TextManager.StateWaitressTableBLocation;
	}
	else if(stateId === STATE_BAR_TABLE_C_ID) {
		return TextManager.StateWaitressTableCLocation;
	}
	else if(stateId === STATE_BAR_TABLE_D_ID) {
		return TextManager.StateWaitressTableDLocation;
	}
	else if(stateId === STATE_BAR_SLEEP_ID) {
		return TextManager.StateWaitressSleeping.format(battlerName);
	}
	else if(stateId === STATE_BAR_DRINKING_ORANGE_GLASS_ID || stateId === STATE_BAR_DRINKING_ALE_ID || stateId === STATE_BAR_DRINKING_WHITE_GLASS_ID) {
		return TextManager.StateWaitressDrinkingDrink.format(battlerName, TextManager.alcoholName(battler._bar_currentDrink));
	}
	else if(stateId === STATE_VISITOR_STATUS_UNKNOWN_ID) {
		if(battler._fan_waitingForRequestResponse || battler._perv_waitingForRequestResponse)
			return TextManager.StateReceptionistVisitorUnknownAfter.format(battlerName);
		else
			return TextManager.StateReceptionistVisitorUnknownBefore.format(battlerName);
	}
	else if(stateId === STATE_VISITOR_STATUS_WRITING_ID) {
		if(battler._visitor_finishedWritingPapers) 
			return TextManager.StateReceptionistVisitorWritingAfter.format(battlerName);
		else if(battler._visitor_startingWritingPapers) 
			return TextManager.StateReceptionistVisitorWritingDuring.format(battlerName);
		else
			return TextManager.StateReceptionistVisitorWritingBefore.format(battlerName);
	}
	else if(stateId === STATE_VISITOR_STATUS_PAPER_ID) {
		if(battler._visitor_handedOverPapers)
			return TextManager.StateReceptionistVisitorPaperAfter.format(battlerName, battler._visitor_pages);
		else
			return TextManager.StateReceptionistVisitorPaperBefore.format(battlerName, battler._visitor_pages);
	}
	else if(stateId === STATE_VISITOR_STATUS_TIME_ID) {
		return TextManager.StateReceptionistVisitorTime.format(battlerName, battler._visitor_time);
	}
	else if(stateId === STATE_VISITOR_LOCATION_MOVING_ID) {
		return TextManager.StateReceptionistVisitorMoving.format(battlerName);
	}
	else if(stateId === STATE_VISITOR_LOCATION_SITTING_ID) {
		return TextManager.StateReceptionistVisitorSitting.format(battlerName);
	}
	else if(stateId === STATE_VISITOR_LOCATION_DESK_ID) {
		return TextManager.StateReceptionistVisitorDesk.format(battlerName);
	}
	else if(stateId === STATE_VISITOR_LOCATION_LINE_ID) {
		return TextManager.StateReceptionistVisitorLine.format(battlerName);
	}
	
	
	
	//bar drinking icon
	
	
	return '';
};

// Desire Tooltips

TextManager.mouthDesireTooltipText = function() {
	let text = '';
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	text += TextManager.DesireTooltipsMouthIntro;
	text += '\n \n';
	
	if(Karryn.hasEdict(EDICT_PUBLISH_DESIRES)) {
		if(TextManager.isEnglish) {
			text += TextManager.DesireTooltipsDesireRequirementsKnown;
			text += '\n';
		}
		
		let req = 0;
		
		req = actor.suckFingersMouthDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordSuckFingers;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordSuckFingers, req);
			text += '\n';
		}
		
		req = actor.kissingMouthDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordKiss;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordKiss, req);
			text += '\n';
		}
		
		req = actor.blowjobMouthDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordBlowjob;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordBlowjob, req);
			text += '\n';
		}
		
		if(Karryn.showLevelOneSubjugatedEdicts() && !ConfigManager.disableRimjobs) {
			req = actor.rimjobMouthDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordRimjob;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordRimjob, req);
				text += '\n';
			}
		}
	}
	else {
		text += TextManager.DesireTooltipsBodyDesireRequirementsUnknown;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_FIRST_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsMouthDesireDebuffOne;
		text += '\n';
	}
	if(Karryn.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_THREE_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsMouthDesireDebuffTwo;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_MOUTH_DESIRE_SECOND_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsMouthDesireTopBuff;
		text += '\n';
	}
	
	return text;
};
TextManager.boobsDesireTooltipText = function() {
	let text = '';
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	text += TextManager.DesireTooltipsBoobsIntro;
	text += '\n \n';
	
	if(Karryn.hasEdict(EDICT_PUBLISH_DESIRES)) {
		if(TextManager.isEnglish) {
			text += TextManager.DesireTooltipsDesireRequirementsKnown;
			text += '\n';
		}
		
		let req = 0;
		
		req = actor.boobsPettingBoobsDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordBoobsPetting;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordBoobsPetting, req);
			text += '\n';
		}
		
		req = actor.nipplesPettingBoobsDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordNipplesPetting;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordNipplesPetting, req);
			text += '\n';
		}
		
		req = actor.tittyFuckBoobsDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordTittyFuck;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordTittyFuck, req);
			text += '\n';
		}
	}
	else {
		text += TextManager.DesireTooltipsBodyDesireRequirementsUnknown;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_FIRST_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsBoobsDesireDebuffOne;
		text += '\n';
	}
	if(Karryn.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_THREE_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsBoobsDesireDebuffTwo;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_BOOBS_DESIRE_SECOND_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsBoobsDesireTopBuff;
		text += '\n';
	}
	
	return text;
};
TextManager.pussyDesireTooltipText = function() {
	let text = '';
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	text += TextManager.DesireTooltipsPussyIntro;
	text += '\n \n';
	
	if(Karryn.hasEdict(EDICT_PUBLISH_DESIRES)) {
		if(TextManager.isEnglish) {
			text += TextManager.DesireTooltipsDesireRequirementsKnown;
			text += '\n';
		}
		
		let req = 0;
		
		req = actor.clitPettingPussyDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordClitPetting;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordClitPetting, req);
			text += '\n';
		}
		
		if(Karryn.showLevelOneSubjugatedEdicts()) {
			req = actor.clitToyPussyDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordClitToy;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordClitToy, req);
				text += '\n';
			}
		}
		
		req = actor.pussyPettingPussyDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordPussyPetting;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordPussyPetting, req);
			text += '\n';
		}
		
		req = actor.cunnilingusPussyDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordCunnilingus;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordCunnilingus, req);
			text += '\n';
		}
			
		if(Karryn.showLevelOneSubjugatedEdicts()) {	
			req = actor.pussyToyPussyDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordPussyToy;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordPussyToy, req);
				text += '\n';
			}
		}
		
		req = actor.pussySexPussyDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordPussySex;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordPussySex, req);
			text += '\n';
		}
		
		
	}
	else {
		text += TextManager.DesireTooltipsBodyDesireRequirementsUnknown;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_FIRST_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsPussyDesireDebuffOne;
		text += '\n';
	}
	if(Karryn.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_THREE_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsPussyDesireDebuffTwo;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_PUSSY_DESIRE_SECOND_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsPussyDesireTopBuff;
		text += '\n';
	}
	
	return text;
};
TextManager.buttDesireTooltipText = function() {
	let text = '';
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	text += TextManager.DesireTooltipsButtIntro;
	text += '\n \n';
	
	if(Karryn.hasEdict(EDICT_PUBLISH_DESIRES)) {
		if(TextManager.isEnglish) {
			text += TextManager.DesireTooltipsDesireRequirementsKnown;
			text += '\n';
		}
		
		let req = 0;
		
		req = actor.buttPettingButtDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordButtPetting;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordButtPetting, req);
			text += '\n';
		}
		
		req = actor.spankingButtDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordButtSpank;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordButtSpank, req);
			text += '\n';
		}
		
		req = actor.analPettingButtDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordAnalPetting;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordAnalPetting, req);
			text += '\n';
		}
		
		if(Karryn.showLevelOneSubjugatedEdicts()) {
			req = actor.analToyButtDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordAnalToy;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordAnalToy, req);
				text += '\n';
			}
		}
		
		req = actor.analSexButtDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordAnalSex;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordAnalSex, req);
			text += '\n';
		}	
	}
	else {
		text += TextManager.DesireTooltipsBodyDesireRequirementsUnknown;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_BUTT_DESIRE_FIRST_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsButtDesireDebuffOne;
		text += '\n';
	}
	if(Karryn.hasPassive(PASSIVE_MAX_BUTT_DESIRE_THREE_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsButtDesireDebuffTwo;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_BUTT_DESIRE_SECOND_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsButtDesireTopBuff;
		text += '\n';
	}
	
	return text;
};
TextManager.cockDesireTooltipText = function() {
	let text = '';
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	text += TextManager.DesireTooltipsCockIntro;
	text += '\n \n';
	
	if(Karryn.hasEdict(EDICT_PUBLISH_DESIRES)) {
		if(TextManager.isEnglish) {
			text += TextManager.DesireTooltipsDesireRequirementsKnown;
			text += '\n';
		}
		
		let req = 0;
		
		req = actor.bodyBukkakeCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordBodyBukkake;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordBodyBukkake, req);
			text += '\n';
		}
		
		req = actor.handjobCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordHandjob;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordHandjob, req);
			text += '\n';
		}
		
		req = actor.blowjobCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordBlowjob;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordBlowjob, req);
			text += '\n';
		}
		
		req = actor.tittyFuckCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordTittyFuck;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordTittyFuck, req);
			text += '\n';
		}
		
		if(Karryn.showLevelOneSubjugatedEdicts()) {
			req = actor.footjobCockDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordFootjob;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordFootjob, req);
				text += '\n';
			}
		}
		
		req = actor.pussySexCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordPussySex;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordPussySex, req);
			text += '\n';
		}
		
		req = actor.analSexCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordAnalSex;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordAnalSex, req);
			text += '\n';
		}
		
		req = actor.faceBukkakeCockDesireRequirement();
		if(TextManager.isEnglish) {
			text += '\\I[40]';
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += req;
			if(req < 100) text += ' ';
			if(req < 10) text += ' ';
			text += '   \\I[41]   ';
			text += TextManager.profileRecordFaceBukkake;
			text += '\n';
		}
		else {
			text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordFaceBukkake, req);
			text += '\n';
		}
		
		if(Karryn.hasPassive(PASSIVE_BJ_COUNT_ONE_ID)) {
			req = actor.mouthSwallowCockDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordSwallow;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordSwallow, req);
				text += '\n';
			}
		}
		
		if(Karryn.hasPassive(PASSIVE_FIRST_SEX_ID)) {
			req = actor.pussyCreampieCockDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordPussyCreampie;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordPussyCreampie, req);
				text += '\n';
			}
		}
		
		if(Karryn.hasPassive(PASSIVE_FIRST_ANAL_SEX_ID)) {
			req = actor.analCreampieCockDesireRequirement();
			if(TextManager.isEnglish) {
				text += '\\I[40]';
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += req;
				if(req < 100) text += ' ';
				if(req < 10) text += ' ';
				text += '   \\I[41]   ';
				text += TextManager.profileRecordAnalCreampie;
				text += '\n';
			}
			else {
				text += TextManager.DesireTooltipsDesireRequirementsKnownFormat.format(TextManager.profileRecordAnalCreampie, req);
				text += '\n';
			}
		}
	}
	else {
		text += TextManager.DesireTooltipsCockDesireRequirementsUnknown;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_COCK_DESIRE_FIRST_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsCockDesireDebuffOne;
		text += '\n';
	}
	if(Karryn.hasPassive(PASSIVE_MAX_COCK_DESIRE_THREE_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsCockDesireDebuffTwo;
		text += '\n';
	}
	
	if(Karryn.hasPassive(PASSIVE_MAX_COCK_DESIRE_SECOND_ID)) {
		text += ' \n';
		text += TextManager.DesireTooltipsCockDesireTopBuff;
		text += '\n';
	}
	
	return text;
};


