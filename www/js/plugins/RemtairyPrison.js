var Remtairy = Remtairy || {};
Remtairy.Prison = Remtairy.Prison || {};

const PRISON_STARTING_INCOME = 400;
const PRISON_STARTING_EXPENSE = 1500;
const PRISON_STARTING_ORDER_PER_DAY = 3;
const PRISON_STARTING_ORDER = 60;
const PRISON_STARTING_CORRUPTION = 1;
const PRISON_STARTING_FUNDING = 2000;

const PRISON_FATIGUE_FROM_ESCAPING = 1;
const PRISON_FATIGUE_PER_TURN_COMBAT = 0.25;
const PRISON_FATIGUE_PER_TURN_OTHER = 0.15;

const PRISON_BANKRUPTCY_ORDER_NO_TITLE = 10;

const RIOT_GLOBAL_STARTING_CHANCE = 6;
const RIOT_GLOBAL_BANKRUPTCY_CHANCE = 5;
const RIOT_MIN_DAYS_BEFORE_BUILDUP = 2;
const RIOT_MIN_DAYS_BEFORE_EXTRA_BUILDUP = 7;
const RIOT_EXTRA_BUILDUP = 3;

const PRISON_ORDER_MAX = 100;
const PRISON_ORDER_HIGH = 80;
const PRISON_ORDER_MED = 60;
const PRISON_ORDER_LOW = 40;
const PRISON_ORDER_VERY_LOW = 20;

const PRISON_LEVEL_STATUS_UNKNOWN = 0;
const PRISON_LEVEL_STATUS_ANARCHY = 1;
const PRISON_LEVEL_STATUS_SUBJUGATED = 2;
const PRISON_LEVEL_STATUS_RIOTING = 3;

const PRISON_LEVEL_IS_LEVEL_ONE = 1;
const PRISON_LEVEL_IS_LEVEL_TWO = 2;
const PRISON_LEVEL_IS_LEVEL_THREE = 3;
const PRISON_LEVEL_IS_LEVEL_FOUR = 4;
const PRISON_LEVEL_IS_LEVEL_FIVE = 5;
const PRISON_LEVEL_IS_LEVEL_OUTSIDE = 0;

const PRISON_LEVEL_ONE_ANARCHY_ORDER_CHANGE = 11;
const PRISON_LEVEL_ONE_RIOTING_ORDER_CHANGE = 2;
const PRISON_LEVEL_TWO_ANARCHY_ORDER_CHANGE = 13;
const PRISON_LEVEL_TWO_RIOTING_ORDER_CHANGE = 3;
const PRISON_LEVEL_THREE_ANARCHY_ORDER_CHANGE = 16;
const PRISON_LEVEL_THREE_RIOTING_ORDER_CHANGE = 2;
const PRISON_LEVEL_FOUR_ANARCHY_ORDER_CHANGE = 14;
const PRISON_LEVEL_FOUR_RIOTING_ORDER_CHANGE = 2;
const PRISON_LEVEL_FIVE_ANARCHY_ORDER_CHANGE = 12;
const PRISON_LEVEL_FIVE_RIOTING_ORDER_CHANGE = 2;
const PRISON_FIRST_DAY_RIOTING_ORDER_CHANGE_MULTIPLER = 0.5;
const PRISON_RIOTING_ORDER_CHANGE_EASY_DIVIDER = 2;

const PRISON_ANARCHY_GRACE_PERIOD_EASY = 60; //unused
const PRISON_ANARCHY_GRACE_PERIOD_NORMAL = 14;
const PRISON_ANARCHY_GRACE_PERIOD_HARD = 7;

const PRISON_ANARCHY_GRACE_LEVEL_ONE_MULTIPLER = 1;
const PRISON_ANARCHY_GRACE_LEVEL_TWO_MULTIPLER = 3;
const PRISON_ANARCHY_GRACE_LEVEL_THREE_MULTIPLER = 3;
const PRISON_ANARCHY_GRACE_LEVEL_FOUR_MULTIPLER = 3;
const PRISON_ANARCHY_GRACE_LEVEL_FIVE_MULTIPLER = 1;

const PRISON_ANARCHY_DEC_EASY_DIVIDER = 3;
const PRISON_ANARCHY_DEC_LEVEL_ONE_DIVIDER = 1;
const PRISON_ANARCHY_DEC_LEVEL_TWO_DIVIDER = 2.4;
const PRISON_ANARCHY_DEC_LEVEL_THREE_DIVIDER = 3;
const PRISON_ANARCHY_DEC_LEVEL_FOUR_DIVIDER = 3;
const PRISON_ANARCHY_DEC_LEVEL_FIVE_DIVIDER = 3;

//Enemy Level increase from each riot
const PRISON_LEVEL_ONE_ENEMY_LEVEL_RIOT_CHANGE = 1.5;
const PRISON_LEVEL_TWO_ENEMY_LEVEL_RIOT_CHANGE = 1.5;
const PRISON_LEVEL_THREE_ENEMY_LEVEL_RIOT_CHANGE = 1.5;
const PRISON_LEVEL_FOUR_ENEMY_LEVEL_RIOT_CHANGE = 1.5;
const PRISON_LEVEL_FIVE_ENEMY_LEVEL_RIOT_CHANGE = 1.5;

const DIFFICULTY_EASY = 1;
const DIFFICULTY_NORMAL = 2;
const DIFFICULTY_HARD = 3;

const DIFFICULTY_EASY_GROWTH_RATE = 2;
const DIFFICULTY_NORMAL_GROWTH_RATE = 1;
const DIFFICULTY_HARD_GROWTH_RATE = 0.9;

//Used in Common Events instead now
const BATTLEBACK1_DEFEATED_LV1_NAME = 'Defeated1';
const BATTLEBACK1_DEFEATED_LV2_NAME = 'Defeated2';
const BATTLEBACK1_DEFEATED_LV3_NAME = 'Defeated3';
const BATTLEBACK1_DEFEATED_LV4_NAME = 'Defeated4';
const BATTLEBACK1_DEFEATED_LV5_NAME = 'Defeated5';
const BATTLEBACK1_DEFEATED_GUARD_NAME = 'Defeated_guard';


///////////
// Variables

const VARIABLE_SLUT_LVL_ID = 1;
const VARIABLE_SLUT_LVL_STAGE_ID = 2;

const VARIABLE_ORDER_ID = 4;
const VARIABLE_CONTROL_ID = 5;

const VARIABLE_CORRUPTION_ID = 6;

const VARIABLE_GUARD_AGGRESSION_ID = 7;
const VARIABLE_TOTAL_DATE_ID = 8;
const VARIABLE_CURRENT_DATE_ID = 9;
const VARIABLE_TROOPID_ID = 12; //This is used to set first wave
const VARIABLE_TOTAL_PLAYTHROUGHS_ID = 14;
const VARIABLE_CURRENT_PLAYTHROUGHS_ID = 15;
const VARIABLE_BAR_REPUTATION_ID = 16;
const VARIABLE_RECEPTIONIST_SATISFACTION_ID = 17;
const VARIABLE_RECEPTIONIST_FAME_ID = 18;
const VARIABLE_RECEPTIONIST_NOTORIETY_ID = 19;
const VARIABLE_GLORY_REPUTATION_ID = 20;
const VARIABLE_IN_LEVEL_ID = 21; //currently unused?
const VARIABLE_DEFEATED_IN_LEVEL_ID = 22; //currently unused?
const VARIABLE_DEFEATED_SPRITES_ID = 25; 
const VARIABLE_NEW_TITLE_NAME_ID = 26; 
const VARIABLE_NEW_TITLE_ICON_ID = 27; 

const VARIABLE_PROLOGUE_PROGRESS_ID = 30;
const VARIABLE_BEAT_LEVEL_ID = 33;
const VARIABLE_FIRST_RIOT_PROGRESS_ID = 34;
const VARIABLE_FIRST_RIOT_LEVEL_ID = 35;
const VARIABLE_FIRST_DEFEAT_PROGRESS_ID = 36;

const VARIABLE_LOST_TO_TONKIN_COUNT_ID = 61;
const VARIABLE_LOST_TO_CARGILL_COUNT_ID = 62;
const VARIABLE_LOST_TO_ARON_COUNT_ID = 66;
const VARIABLE_LOST_TO_NOINIM_COUNT_ID = 67;

const VARIABLE_STRIP_CLUB_REPUTATION_ID = 81;

const VARIABLE_MOG_TURNS_SHOWED_1_ID = 161;
const VARIABLE_MOG_TURNS_SHOWED_2_ID = 162;

const VARIABLE_TESTBATTLE_ENEMY_1_ID = 168;
const VARIABLE_TESTBATTLE_ENEMY_2_ID = 169;
const VARIABLE_TESTBATTLE_ENEMY_3_ID = 170;
const VARIABLE_TESTBATTLE_ENEMY_4_ID = 171;
const VARIABLE_TESTBATTLE_ENEMY_5_ID = 172;
const VARIABLE_TESTBATTLE_ENEMY_6_ID = 173;

////////////
// Switches

const SWITCH_IN_COMBAT_ID = 1;
const SWITCH_EASY_MODE_ID = 2;
const SWITCH_NORMAL_MODE_ID = 3;
const SWITCH_HARD_MODE_ID = 4;
const SWITCH_IS_AROUSED_ID = 5;

const SWITCH_NEW_GAME_PLUS_SCREEN_ID = 7;
const SWITCH_NEW_GAME_PLUS_STAT_RESET_ID = 8;
const SWITCH_EVEN_DAY_ID = 9;
const SWITCH_ODD_DAY_ID = 10;
//const SWITCH_IS_NAKED_NO_HATS_OR_GLOVES_ID = 11;
//const SWITCH_IS_NAKED_NO_CLOTHES_ID = 12;
const SWITCH_NIGHT_MODE_ID = 11;
const SWITCH_NIGHT_MODE_EB_HALLWAY_ID = 12;
const SWITCH_IS_VIRGIN_ID = 13;
const SWITCH_IS_NON_VIRGIN_ID = 14;
const SWITCH_INVASION_BATTLE_ID = 15; //Post Onani INVASION battle
const SWITCH_ENEMY_SNEAK_ATTACK_ID = 16; //Enemy gets first turn

const SWITCH_FOOTSTEPS_SE_OFF_ID = 19;

const SWITCH_LEVEL_ONE_IS_UNKNOWN_ID = 21;
const SWITCH_LEVEL_ONE_IS_ANARCHY_ID = 22;
const SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID = 23;
const SWITCH_LEVEL_ONE_IS_RIOTING_ID = 24;
const SWITCH_LEVEL_TWO_IS_UNKNOWN_ID = 25;
const SWITCH_LEVEL_TWO_IS_ANARCHY_ID = 26;
const SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID = 27;
const SWITCH_LEVEL_TWO_IS_RIOTING_ID = 28;
const SWITCH_LEVEL_THREE_IS_UNKNOWN_ID = 29;
const SWITCH_LEVEL_THREE_IS_ANARCHY_ID = 30;
const SWITCH_LEVEL_THREE_IS_SUBJUGATED_ID = 31;
const SWITCH_LEVEL_THREE_IS_RIOTING_ID = 32;
const SWITCH_LEVEL_FOUR_IS_UNKNOWN_ID = 33;
const SWITCH_LEVEL_FOUR_IS_ANARCHY_ID = 34;
const SWITCH_LEVEL_FOUR_IS_SUBJUGATED_ID = 35;
const SWITCH_LEVEL_FOUR_IS_RIOTING_ID = 36;
const SWITCH_LEVEL_FIVE_IS_UNKNOWN_ID = 37;
const SWITCH_LEVEL_FIVE_IS_ANARCHY_ID = 38;
const SWITCH_LEVEL_FIVE_IS_SUBJUGATED_ID = 39;
const SWITCH_LEVEL_FIVE_IS_RIOTING_ID = 40;

const SWITCH_EDICT_FIX_KITCHEN_ID = 41;
const SWITCH_EDICT_FIX_VISITOR_ID = 42;
const SWITCH_EDICT_FIX_BAR_ID = 43;
const SWITCH_EDICT_FIX_STORE_ID = 51;
const SWITCH_EDICT_FIX_OFFICE_ID = 52;
const SWITCH_EDICT_RECEPTIONIST_OUTFIT_ID = 56;
const SWITCH_EDICT_MANUAL_ELECTRONIC_LOCK = 61;
const SWITCH_EDICT_OFFICE_GUARD_PRISON = 62;
const SWITCH_EDICT_OFFICE_GUARD_INMATE = 63;
const SWITCH_EDICT_OFFICE_GUARD_VOLUNTEER = 64;

const SWITCH_OFFICE_LOCK_IS_OFF = 65;

const SWITCH_EDICT_OFFICE_COMFORTER = 71;
const SWITCH_EDICT_OFFICE_CANDLE = 72;
const SWITCH_EDICT_OFFICE_LUXUXY_BED = 73;

const SWITCH_EDICT_GUARD_LAXER_HIRING_STANDARDS = 94;
const SWITCH_EDICT_GUARD_HIRE_CURRENT_INMATES = 95;
const SWITCH_EDICT_GUARD_NO_HIRING_STANDARDS = 96;

const SWITCH_HIDE_STATE_ICONS_ID = 102;
const SWITCH_HALF_FATIGUE_RECOVERY_ID = 103;

const SWITCH_PROLOGUE_STARTED = 107;
const SWITCH_PROLOGUE_ENDED = 108;
const SWITCH_POST_DEFEATED = 109;

const SWITCH_DEFEATED_ID = 110;
const SWITCH_DEFEATED_IN_OFFICE_ID = 111;
const SWITCH_DEFEATED_IN_LEVEL_ONE_ID = 112;
const SWITCH_DEFEATED_IN_LEVEL_TWO_ID = 113;
const SWITCH_DEFEATED_IN_LEVEL_THREE_ID = 114;
const SWITCH_DEFEATED_IN_LEVEL_FOUR_ID = 115;
const SWITCH_DEFEATED_IN_LEVEL_FIVE_ID = 116;
const SWITCH_DEFEATED_IN_GUARD_BATTLE_ID = 117;
const SWITCH_PETTED_THE_KITTY_ID = 118;

const SWITCH_CREATOR_STEP_1_COMPLETED_ID = 121;
const SWITCH_CREATOR_STEP_2_COMPLETED_ID = 122;
const SWITCH_CREATOR_STEP_3_COMPLETED_ID = 123;

const SWITCH_WON_BOSS_BATTLE_LV1_ID = 131;
const SWITCH_WON_BOSS_BATTLE_LV2_ID = 132;
const SWITCH_WON_BOSS_BATTLE_LV3_ID = 133;
const SWITCH_WON_BOSS_BATTLE_LV4_ID = 134;
const SWITCH_WON_BOSS_BATTLE_LV5_ID = 135;
const SWITCH_BOSS_CLEAR_BONUS_ID = 137;

const SWITCH_TODAY_GUARD_BATTLE_ID = 141;
const SWITCH_YESTERDAY_DEFEATED_LV1_ID = 142;
const SWITCH_TODAY_WAITRESS_BATTLE_ID = 143;
const SWITCH_TODAY_BAR_REP_UP_ID = 144;
const SWITCH_TODAY_ARTISAN_MEAL_ID = 145;
const SWITCH_TODAY_RECEPTIONIST_BATTLE_ID = 146;
const SWITCH_TODAY_RECEPTIONIST_SATISFACTION_RATE_UP_ID = 147;
const SWITCH_TODAY_WAITRESS_DEFEAT_ID = 148;
const SWITCH_YESTERDAY_DEFEATED_LV2_ID = 149;
const SWITCH_YESTERDAY_DEFEATED_GUARD_ID = 150;
const SWITCH_TODAY_RECEPTIONIST_FAME_UP_ID = 151;
const SWITCH_TODAY_RECEPTIONIST_NOTORIETY_UP_ID = 152;
const SWITCH_TODAY_RECEPTIONIST_DEFEAT_ID = 153;
const SWITCH_TODAY_GOBLIN_BAR_STORAGE_ID = 154;
const SWITCH_TODAY_GLORYHOLE_BATTLE_ID = 155;
const SWITCH_TODAY_GLORYHOLE_DEFEAT_ID = 156;
const SWITCH_TODAY_STRIPPER_BATTLE_ID = 157;
const SWITCH_TODAY_STRIPPER_DEFEAT_ID = 158;
const SWITCH_TODAY_STORE_ITEM_ID = 159;
const SWITCH_YESTERDAY_DEFEATED_LV3_ID = 160;
const SWITCH_TODAY_STORE_ROGUE_RAN_ID = 162;
const SWITCH_YESTERDAY_DEFEATED_LV4_ID = 163;
const SWITCH_YESTERDAY_DEFEATED_LV5_ID = 164;
const SWITCH_LV4_TRIGGER_AMBUSH_ID = 165;
const SWITCH_LV4_SHORTCUT_TO_LV5_ID = 166;
const SWITCH_OFFICE_EDICT_FAILSAFE_ID = 167;
const SWITCH_NOINIM_FIRST_GRAB_ID = 168;
const SWITCH_NOINIM_FIRST_THROW_ID = 169;
const SWITCH_SET_BAD_TELEPORT_ID = 170;
const SWITCH_TELEPORT_GUARD_BLOCKER_ID = 171;

const SWITCH_GIFT_EMPEROR_LV1_ID = 181;
const SWITCH_GIFT_EMPEROR_LV2_ID = 182;
const SWITCH_GIFT_EMPEROR_LV3_ID = 183;
const SWITCH_GIFT_EMPEROR_LV4_ID = 184;

const SWITCH_BAD_END_A_ID = 221;

const SWITCH_V9_FPSSYNC_PROMPT_ID = 243;


//=============================================================================
 /*:
 * @plugindesc Prison
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

function Prison() {
    throw new Error('This is a static class');
}

Object.defineProperty(Prison, 'date', {
    get: function() { return $gameParty.date; }, configurable: true
});
Object.defineProperty(Prison, 'currentRunsDays', {
    get: function() { return $gameParty.currentRunsDays; }, configurable: true
});

Object.defineProperty(Prison, 'order', {
    get: function() { return $gameParty.order; }, configurable: true
});
Object.defineProperty(Prison, 'orderChange', {
    get: function() { return $gameParty.orderChange; }, configurable: true
});
Object.defineProperty(Prison, 'control', {
    get: function() { return $gameParty.control; }, configurable: true
});
Object.defineProperty(Prison, 'corruption', {
    get: function() { return $gameParty.corruption; }, configurable: true
});
Object.defineProperty(Prison, 'funding', {
    get: function() { return $gameParty.funding; }, configurable: true
});
Object.defineProperty(Prison, 'income', {
    get: function() { return $gameParty.income; }, configurable: true
});
Object.defineProperty(Prison, 'expense', {
    get: function() { return $gameParty.expense; }, configurable: true
});
Object.defineProperty(Prison, 'guardAggression', {
    get: function() { return $gameParty.guardAggression; }, configurable: true
});

Prison.increaseCorruption = function(value) { 
	$gameParty.increaseCorruption(value);
};
Prison.increaseOrder = function(value) { 
	$gameParty.increaseOrder(value);
};
Prison.calculateSubsidies = function(estimated) { 
	return $gameParty.calculateSubsidies(estimated);
};
Prison.calculateBalance = function(estimated) { 
	return $gameParty.calculateBalance(estimated);
};

Prison.getBarIncome = function() { 
	return $gameParty.getBarIncome();
};
Prison.getStoreIncome = function() { 
	return $gameParty.getStoreIncome();
};
Prison.getOutsourcingIncome = function() { 
	return $gameParty.getOutsourcingIncome();
};
Prison.getNerdBlackmail = function() { 
	return $gameParty.getNerdBlackmail();
};


Prison.nextDayEstimatedOrder = function() {
	return $gameParty.nextDayEstimatedOrder();
};
Prison.hasNoOrder = function() { 
	return $gameParty.hasNoOrder();
};
Prison.easyMode = function() { 
	return $gameParty.easyMode();
};
Prison.normalMode = function() { 
	return $gameParty.normalMode();
};
Prison.hardMode = function() { 
	return $gameParty.hardMode();
};

Prison.HighOrder = function() { 
	return $gameParty.HighOrder();
};
Prison.MedOrder = function() { 
	return $gameParty.MedOrder();
};
Prison.LowOrder = function() { 
	return $gameParty.LowOrder();
};
Prison.VeryLowOrder = function() { 
	return $gameParty.VeryLowOrder();
};
Prison.NearNoOrder = function() { 
	return $gameParty.NearNoOrder();
};


Prison.randomResultMaxOrder = function() { 
	return $gameParty.randomResultMaxOrder();
};
Prison.randomResultHighOrder = function() { 
	return $gameParty.randomResultHighOrder();
};
Prison.randomResultMedOrder = function() { 
	return $gameParty.randomResultMedOrder();
};
Prison.randomResultLowOrder = function() { 
	return $gameParty.randomResultLowOrder();
};

Prison.prisonLevelOneIsUnknown = function() { 
	return $gameParty.prisonLevelOneIsUnknown();
};
Prison.prisonLevelOneIsAnarchy = function() { 
	return $gameParty.prisonLevelOneIsAnarchy();
};
Prison.prisonLevelOneIsSubjugated = function() { 
	return $gameParty.prisonLevelOneIsSubjugated();
};
Prison.prisonLevelOneIsRioting = function() { 
	return $gameParty.prisonLevelOneIsRioting();
};
Prison.prisonLevelOneStatusText = function() { 
	return $gameParty.prisonLevelOneStatusText();
};
Prison.prisonLevelTwoIsUnknown = function() { 
	return $gameParty.prisonLevelTwoIsUnknown();
};
Prison.prisonLevelTwoIsAnarchy = function() { 
	return $gameParty.prisonLevelTwoIsAnarchy();
};
Prison.prisonLevelTwoIsSubjugated = function() { 
	return $gameParty.prisonLevelTwoIsSubjugated();
};
Prison.prisonLevelTwoIsRioting = function() { 
	return $gameParty.prisonLevelTwoIsRioting();
};
Prison.prisonLevelTwoStatusText = function() { 
	return $gameParty.prisonLevelTwoStatusText();
};
Prison.prisonLevelThreeIsUnknown = function() { 
	return $gameParty.prisonLevelThreeIsUnknown();
};
Prison.prisonLevelThreeIsAnarchy = function() { 
	return $gameParty.prisonLevelThreeIsAnarchy();
};
Prison.prisonLevelThreeIsSubjugated = function() { 
	return $gameParty.prisonLevelThreeIsSubjugated();
};
Prison.prisonLevelThreeIsRioting = function() { 
	return $gameParty.prisonLevelThreeIsRioting();
};
Prison.prisonLevelThreeStatusText = function() { 
	return $gameParty.prisonLevelThreeStatusText();
};
Prison.prisonLevelFourIsUnknown = function() { 
	return $gameParty.prisonLevelFourIsUnknown();
};
Prison.prisonLevelFourIsAnarchy = function() { 
	return $gameParty.prisonLevelFourIsAnarchy();
};
Prison.prisonLevelFourIsSubjugated = function() { 
	return $gameParty.prisonLevelFourIsSubjugated();
};
Prison.prisonLevelFourIsRioting = function() { 
	return $gameParty.prisonLevelFourIsRioting();
};
Prison.prisonLevelFourStatusText = function() { 
	return $gameParty.prisonLevelFourStatusText();
};
Prison.prisonLevelFiveIsUnknown = function() { 
	return $gameParty.prisonLevelFiveIsUnknown();
};
Prison.prisonLevelFiveIsAnarchy = function() { 
	return $gameParty.prisonLevelFiveIsAnarchy();
};
Prison.prisonLevelFiveIsSubjugated = function() { 
	return $gameParty.prisonLevelFiveIsSubjugated();
};
Prison.prisonLevelFiveIsRioting = function() { 
	return $gameParty.prisonLevelFiveIsRioting();
};
Prison.prisonLevelFiveStatusText = function() { 
	return $gameParty.prisonLevelFiveStatusText();
};

Prison.setPrisonLevelOneAnarchy = function() { 
	$gameParty.setPrisonLevelOneAnarchy();
};
Prison.setPrisonLevelTwoAnarchy = function() { 
	$gameParty.setPrisonLevelTwoAnarchy();
};
Prison.setPrisonLevelThreeAnarchy = function() { 
	$gameParty.setPrisonLevelThreeAnarchy();
};
Prison.setPrisonLevelFourAnarchy = function() { 
	$gameParty.setPrisonLevelFourAnarchy();
};
Prison.setPrisonLevelFiveAnarchy = function() { 
	$gameParty.setPrisonLevelFiveAnarchy();
};

Prison.setPrisonLevelOneSubjugated = function() { 
	$gameParty.setPrisonLevelOneSubjugated();
};
Prison.setPrisonLevelTwoSubjugated = function() { 
	$gameParty.setPrisonLevelTwoSubjugated();
};
Prison.setPrisonLevelThreeSubjugated = function() { 
	$gameParty.setPrisonLevelThreeSubjugated();
};
Prison.setPrisonLevelFourSubjugated = function() { 
	$gameParty.setPrisonLevelFourSubjugated();
};
Prison.setPrisonLevelFiveSubjugated = function() { 
	$gameParty.setPrisonLevelFiveSubjugated();
};

Prison.setPrisonLevelOneRiot = function() { 
	$gameParty.setPrisonLevelOneRiot();
};
Prison.setPrisonLevelTwoRiot = function() { 
	$gameParty.setPrisonLevelTwoRiot();
};
Prison.setPrisonLevelThreeRiot = function() { 
	$gameParty.setPrisonLevelThreeRiot();
};
Prison.setPrisonLevelFourRiot = function() { 
	$gameParty.setPrisonLevelFourRiot();
};
Prison.setPrisonLevelFiveRiot = function() { 
	$gameParty.setPrisonLevelFiveRiot();
};

Prison.firstSubjugationPrisonLevelOne = function() { 
	$gameParty.firstSubjugationPrisonLevelOne();
};
Prison.firstSubjugationPrisonLevelTwo = function() { 
	$gameParty.firstSubjugationPrisonLevelTwo();
};
Prison.firstSubjugationPrisonLevelThree = function() { 
	$gameParty.firstSubjugationPrisonLevelThree();
};
Prison.firstSubjugationPrisonLevelFour = function() { 
	$gameParty.firstSubjugationPrisonLevelFour();
};

Prison.getCurrentPrisonLevelEnemyLevelFromRioting = function() { 
	return $gameParty.getCurrentPrisonLevelEnemyLevelFromRioting();
};
Prison.changeCurrentPrisonLevelToLevelOne = function() { 
	$gameParty.changeCurrentPrisonLevelToLevelOne();
};
Prison.changeCurrentPrisonLevelToLevelTwo = function() { 
	$gameParty.changeCurrentPrisonLevelToLevelTwo();
};
Prison.changeCurrentPrisonLevelToLevelThree = function() { 
	$gameParty.changeCurrentPrisonLevelToLevelThree();
};
Prison.changeCurrentPrisonLevelToLevelFour = function() { 
	$gameParty.changeCurrentPrisonLevelToLevelFour();
};
Prison.changeCurrentPrisonLevelToLevelFive = function() { 
	$gameParty.changeCurrentPrisonLevelToLevelFive();
};
Prison.changeCurrentPrisonLevelToOutside = function() { 
	$gameParty.changeCurrentPrisonLevelToOutside();
};
Prison.getCurrentPrisonLevelName = function() { 
	return $gameParty.getCurrentPrisonLevelName();
};

Prison.currentlyPrisonLevelOne = function() { 
	return $gameParty.currentlyPrisonLevelOne();
};
Prison.currentlyPrisonLevelTwo = function() { 
	return $gameParty.currentlyPrisonLevelTwo();
};
Prison.currentlyPrisonLevelThree = function() { 
	return $gameParty.currentlyPrisonLevelThree();
};
Prison.currentlyPrisonLevelFour = function() { 
	return $gameParty.currentlyPrisonLevelFour();
};
Prison.currentlyPrisonLevelFive = function() { 
	return $gameParty.currentlyPrisonLevelFive();
};
Prison.currentlyOutsidePrison = function() { 
	return $gameParty.currentlyOutsidePrison();
};

Prison.setDifficultyToEasy = function() { 
	$gameParty.setDifficultyToEasy();
};
Prison.setDifficultyToNormal = function() { 
	$gameParty.setDifficultyToNormal();
};
Prison.setDifficultyToHard = function() { 
	$gameParty.setDifficultyToHard();
};

Prison.enterOffice_EdictsStorage = function() { 
	$gameParty.enterOffice_EdictsStorage();
};
Prison.exitOffice_EdictsStorage = function() { 
	$gameParty.exitOffice_EdictsStorage();
};

Prison.restNextDay = function() { 
	$gameParty.restNextDay();
};
Prison.restOutside = function() { 
	$gameParty.restOutside();
};
Prison.restAtOffice = function() { 
	$gameParty.restAtOffice();
};
Prison.setCancelFollowingNextDayRiotManager = function(status) { 
	$gameParty.setCancelFollowingNextDayRiotManager(status);
};

Prison.preBattleSetup = function() { 
	$gameParty.preBattleSetup();
};
Prison.postBattleCleanup = function() { 
	$gameParty.postBattleCleanup();
};
Prison.setTroopIds = function() { 
	$gameParty.setTroopIds();
};

Prison.preBossBattleSetup = function() { 
	$gameParty.preBossBattleSetup();
};
Prison.setBossTroopIds = function(level) { 
	$gameParty.setBossTroopIds(level);
};
Prison.postBossBattleCleanup = function() { 
	$gameParty.postBossBattleCleanup();
};

Prison.preMasturbationBattleSetup = function() { 
	$gameParty.preMasturbationBattleSetup();
};
Prison.postMasturbationBattleCleanup = function() { 
	$gameParty.postMasturbationBattleCleanup();
};

Prison.preNightBattleSetup = function() { 
	$gameParty.preNightBattleSetup();
};


Prison.preWaitressBattleSetup = function() { 
	$gameParty.preWaitressBattleSetup();
};
Prison.postWaitressBattleCleanup = function() { 
	$gameParty.postWaitressBattleCleanup();
};

Prison.preReceptionistBattleSetup = function() { 
	$gameParty.preReceptionistBattleSetup();
};
Prison.postReceptionistBattleCleanup = function() { 
	$gameParty.postReceptionistBattleCleanup();
};
 
Prison.preGloryBattleSetup = function() { 
	$gameParty.preGloryBattleSetup();
};
Prison.postGloryBattleCleanup = function() { 
	$gameParty.postGloryBattleCleanup();
};

Prison.preStripperBattleSetup = function() { 
	$gameParty.preStripperBattleSetup();
};
Prison.postStripperBattleCleanup = function() { 
	$gameParty.postStripperBattleCleanup();
};


Prison.preGuardBattleSetup = function() { 
	$gameParty.preGuardBattleSetup();
};
Prison.setGuardBattleTroopIds = function() { 
	$gameParty.setGuardBattleTroopIds();
};
Prison.setupGuardBattle = function() { 
	$gameTroop.setupGuardBattle();
};
Prison.postGuardBattleCleanup = function() { 
	$gameParty.postGuardBattleCleanup();
};

Prison.preInvasionBattleSetup = function() { 
	$gameParty.preInvasionBattleSetup();
};
Prison.setInvasionTroopIds = function() { 
	$gameParty.setInvasionTroopIds();
};

Prison.preDefeatedLevelOneBattleSetup = function() { 
	$gameParty.preDefeatedLevelOneBattleSetup();
};
Prison.preDefeatedLevelTwoBattleSetup = function() { 
	$gameParty.preDefeatedLevelTwoBattleSetup();
};
Prison.preDefeatedLevelThreeBattleSetup = function() { 
	$gameParty.preDefeatedLevelThreeBattleSetup();
};
Prison.preDefeatedLevelFourBattleSetup = function() { 
	$gameParty.preDefeatedLevelFourBattleSetup();
};
Prison.preDefeatedLevelFiveBattleSetup = function() { 
	$gameParty.preDefeatedLevelFiveBattleSetup();
};

Prison.preDefeatedGuardBattleSetup = function() { 
	$gameParty.preDefeatedGuardBattleSetup();
};
Prison.postDefeat_preRest = function() { 
	$gameParty.postDefeat_preRest();
};
Prison.postDefeat_postRest = function() { 
	$gameParty.postDefeat_postRest();
};

Prison.addNewWanted = function(enemy) { 
	return $gameParty.addNewWanted(enemy);
};
Prison.getWantedEnemyById = function(id) { 
	return $gameParty.getWantedEnemyById(id);
};
Prison.findAvailableWanted = function(enemy, maxPrisonerMorphHeight) { 
	return $gameParty.findAvailableWanted(enemy, maxPrisonerMorphHeight);
};
Prison.setWantedIdAsDefeated = function(id) { 
	$gameParty.setWantedIdAsDefeated(id);
};
Prison.isThisNameAlreadyInWanted = function(enemyName, enemyType, enemyPrefixName) { 
	$gameParty.isThisNameAlreadyInWanted(enemyName, enemyType, enemyPrefixName);
};

Prison.canOpenSaveMenu = function() { 
	return $gameParty.canOpenSaveMenu();
};

Prison.determineLevelFourEntranceRoutes = function() { 
	$gameParty.determineLevelFourEntranceRoutes();
};
Prison.determineLevelFourAmbushMap = function() { 
	$gameParty.determineLevelFourAmbushMap();
};

Prison.determineTeleportGuardType = function() { 
	$gameParty.determineTeleportGuardType();
};

Prison.isRiotBattle = function() { 
	return $gameParty.isRiotBattle();
};
Prison.isNightBattle = function() { 
	return $gameParty.isNightBattle();
};
Prison.isNightMode = function() { 
	return $gameParty.isNightMode();
};
Prison.isNightModeEBHallway = function() { 
	return $gameParty.isNightModeEBHallway();
};



//////////////
/////////////////
// Game Party
/////////////////
///////////////

Object.defineProperty(Game_Party.prototype, "date", { 
	get: function () { return this._dayCount - this._startingDate + 1; }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "playthroughDays", { 
	get: function () { return this.date; }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "currentRunsDays", { 
	get: function () { 
		if(!this._startingRunDate) this.setStartingRunDate(this._startingDate);
		return this._dayCount - this._startingRunDate + 1; 
	}, configurable: true
});

Object.defineProperty(Game_Party.prototype, "order", { 
	get: function () { return this._order; }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "orderChange", { 
	get: function () { return this.orderChangeValue(); }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "control", { 
	get: function () { return this.orderChange; }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "corruption", { 
	get: function () { return this._corruption; }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "funding", { 
	get: function () { return this.gold(); }, configurable: true
});
Object.defineProperty(Game_Party.prototype, "income", { 
	get: function () { 
		this._baseIncome = $gameActors.actor(ACTOR_KARRYN_ID)._baseIncome;
		this._savedIncomeValue = Math.round((this._baseIncome + this.additionalIncome()) * this.incomeMultipler());
		return this._savedIncomeValue; 
	}, configurable: true
});
Object.defineProperty(Game_Party.prototype, "expense", { 
	get: function () { 
		this._baseExpense = $gameActors.actor(ACTOR_KARRYN_ID)._baseExpense;
		this._savedExpenseValue = Math.round((this._baseExpense + this.additionalExpense()) * this.expenseMultipler());
		return this._savedExpenseValue; 
	}, configurable: true
});
Object.defineProperty(Game_Party.prototype, "guardAggression", { 
	get: function () { return this._guardAggression; }, configurable: true
});

Remtairy.Prison.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
	Remtairy.Prison.Game_Party_initialize.call(this);
    this.setupMapNames();
	this.setMapForceCenter(false);
	this._allowTachieUpdate = true;
};

// Setup Prison - Called in initialize common event
Game_Party.prototype.setupPrison = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).setUpAsKarryn();
	$gameActors.actor(ACTOR_CHAT_FACE_ID).setUpAsChatFace();
	
	$gameParty.gainTitle(TITLE_ID_NEWBIE);
	
	this.setStartingDate(1);
	this.setStartingRunDate(1);
	this.setDayCount(1);
	this._totalPlaythroughs = 0;
	this._endingsSeenCount = 0;
	
	this.setupWantedList();
	this.setPrisonToFullReset();
	this.setPrisonToStartingState();
	
	BattleManager.setBMAllowTachieUpdate(true);
	$gameScreen.setMapBordersBackgroundDefault();
	$gameScreen.setMapInfoRefreshNeeded();
};

Game_Party.prototype.setPrisonToFullReset = function() {
	this._currentRunPlaythroughs = 0;
	this.setStartingDate(this._dayCount);
};

//STS Clear Actor(1) ALL 
//is called before this
Game_Party.prototype.setPrisonToStartingState = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._baseExpense = PRISON_STARTING_EXPENSE;
	actor._baseIncome = PRISON_STARTING_INCOME;
	actor.setHalberdAsDefiled(false);
	actor.resetStoreItem();
	actor.resetArtisanMeal();
	actor.resetFirstTimeTitleEquipRegister();
	actor.setSleepQuality(1);
	
	//this.titlesSetStartingOrder();
	this.setOrder(PRISON_STARTING_ORDER);
	this.setOrderChangePerDay(PRISON_STARTING_ORDER_PER_DAY); 
	this.setCorruption(PRISON_STARTING_CORRUPTION);
	this._lastDefeatedDate = -1;
	this._lastDefeatedLevelOneDate = -1;
	this._lastDefeatedLevelTwoDate = -1;
	this._lastDefeatedLevelThreeDate = -1;
	this._lastDefeatedLevelFourDate = -1;
	this._lastDefeatedLevelFiveDate = -1;
	this._lastDefeatedGuardDate = -1;
	
	
	this.setStartingRunDate(this._dayCount);
	this._gold = PRISON_STARTING_FUNDING;
	this._storedEdictPoints = 0;
	this._daysInBankruptcy = 0;
	this._daysInMaxOrder = 0;
	this._prisonLevelOne_anarchyDays = 0;
	this._prisonLevelTwo_anarchyDays = 0;
	this._prisonLevelThree_anarchyDays = 0;
	this._prisonLevelFour_anarchyDays = 0;
	this._prisonLevelFive_anarchyDays = 0;
	this._levelOneBonusGracePeriod = 0;
	this._levelTwoBonusGracePeriod = 0;
	this._levelThreeBonusGracePeriod = 0;
	this._levelFourBonusGracePeriod = 0;
	this._levelFiveBonusGracePeriod = 0;
	this._daysSinceLastPrisonRiot = 0;
	this._daysSinceLastLevelOneRiot = 0;
	this._daysSinceLastLevelTwoRiot = 0;
	this._daysSinceLastLevelThreeRiot = 0;
	this._daysSinceLastLevelFourRiot = 0;
	this._daysSinceLastLevelFiveRiot = 0;
	this._daysWithoutDoingWaitressBar = 0;
	this._todayBarRepDecayed = false;
	this._daysWithoutDoingVisitorReceptionist = 0;
	this._todayVisitorRepDecayed = false;
	this._daysWithoutDoingGloryHole = 0;
	this._todayGloryHoleRepDecayed = false;
	this._daysWithoutDoingStripClub = 0;
	this._todayStripClubRepDecayed = false;
	this._prisonLevelOne_riotingDays = 0;
	this._prisonLevelTwo_riotingDays = 0;
	this._prisonLevelThree_riotingDays = 0;
	this._prisonLevelFour_riotingDays = 0;
	this._prisonLevelFive_riotingDays = 0;
	this.setCancelFollowingNextDayRiotManager(false);
	this._nightBattle = false;
	this._nightBattleVariableCounted = false;
	this._enableResearchEdicts = false;
	this.setupWantedList();
	this.setBarReputation(0);
	this.setGloryReputation(0);
	this.setStripClubReputation(0);
	this.initializeReceptionistSettings();
	this.setGuardAggression(0);
	this.setupPrisonLevels();
	this.recalculateBaseOrderChange();
	this.respawnAnarchyEnemies(true);
	this.respawnNightBattleEnemies();
	this.setIsInWaitressBattleFlag(false);
	this.setIsInReceptionistBattleFlag(false);
	this.setIsInGloryBattleFlag(false);
	this.setIsInStripperBattleFlag(false);
	
	actor.registerFirstTimeTitleEquip();
	
	$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 32, "A"], false); //Tonkin boss
	$gameSelfSwitches.setValue([MAP_ID_VISITOR_CENTER_BROKEN, 31, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 5, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_OFFICE_FLOODED, 9, "A"], false); //Cargill boss
	$gameSelfSwitches.setValue([MAP_ID_OFFICE_FLOODED, 12, "A"], false); //Cargill boss
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY_FLOODED, 17, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY_FLOODED, 15, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_STORE_BROKEN, 6, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 7, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 7, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 7, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 8, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 5, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_NORTH_EAST, 3, "A"], false); //Aron boss
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 6, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 33, "D"], false); //Entrance
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 40, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 25, "D"], false);  //Door guard
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 29, "D"], false);  //Entrance
	$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 4, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 5, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 13, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 14, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 11, "D"], false); //Chaser
	$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 11, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 8, "D"], false); //Chaser
	$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 7, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 8, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 9, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 3, "D"], false); //Normal
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 4, "D"], false); //Normal
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 5, "D"], false); //Normal
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 6, "D"], false); //Normal
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 7, "D"], false); //Normal
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 8, "D"], false); //Normal
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 10, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 11, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 12, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 13, "D"], false); //Door guard
	$gameSelfSwitches.setValue([MAP_ID_LVL4_STAIRS_TO_LVL5, 3, "A"], false); //Noinim boss
	
	this.resetDifficulty();
	this.closeEdictsMenuCalculations();
};

/////////
// Load Prison
//////////

//Called in Common Event 3:Load Game
Game_Party.prototype.loadGamePrison = function() {
	//reset Karryn counter
	Karryn.resetStandingStillCounter();
	Karryn.resetStandingStillStage();
	//update game version
	this.updateGameVersion();
	//reload doodads
	//DoodadManager.refresh();
	if(!$gameParty.inBattle() && !$gameScreen.isCinematicMode()) {
		if(!SceneManager._scene._mapNameWindow) 
			SceneManager._scene.createDisplayObjects();
		SceneManager._scene.callMenu();
	}
};

//////////
// Character Creator
////////////

Game_Party.prototype.characterCreatorNotCompleted = function() {
	if(DEBUG_MODE) {
		if(!$gameSwitches.value(SWITCH_CREATOR_STEP_1_COMPLETED_ID) || !$gameSwitches.value(SWITCH_CREATOR_STEP_2_COMPLETED_ID) || !$gameSwitches.value(SWITCH_CREATOR_STEP_3_COMPLETED_ID))
			return true;
		else 
			return false;
	}
	else {
		if(!$gameSwitches.value(SWITCH_CREATOR_STEP_1_COMPLETED_ID))
			return true;
		else 
			return false;
	}
};

Game_Party.prototype.resetCharacterCreator = function() {
	$gameParty.gainItem($dataArmors[TITLE_ID_CC_SKILLED_MANAGER],-1,true);
	$gameParty.gainItem($dataArmors[TITLE_ID_CC_AMBITIOUS_EXPERIMENTER],-1,true);
	$gameParty.gainItem($dataArmors[TITLE_ID_CC_HARDLINE_DEBATER],-1,true);
	$gameParty.gainItem($dataArmors[TITLE_ID_CC_COST_SAVING_SUPERVISOR],-1,true);
	$gameParty.gainItem($dataArmors[TITLE_ID_CC_HARDWORKING_TUTOR],-1,true);
	$gameParty.gainItem($dataArmors[TITLE_ID_CC_MANAGEMENT_CONSULTANT],-1,true);
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	actor._obtainedTitles[TITLE_ID_CC_SKILLED_MANAGER] = false;
	actor._obtainedTitles[TITLE_ID_CC_AMBITIOUS_EXPERIMENTER] = false;
	actor._obtainedTitles[TITLE_ID_CC_HARDLINE_DEBATER] = false;
	actor._obtainedTitles[TITLE_ID_CC_COST_SAVING_SUPERVISOR] = false;
	actor._obtainedTitles[TITLE_ID_CC_HARDWORKING_TUTOR] = false;
	actor._obtainedTitles[TITLE_ID_CC_MANAGEMENT_CONSULTANT] = false;
	
	actor.forgetSkill(CHARA_CREATE_TWO_BOOBS_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_NIPPLES_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_CLIT_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_PUSSY_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_BUTT_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_ANAL_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_MOUTH_ID);
	actor.forgetSkill(CHARA_CREATE_TWO_BODY_ID);
	
	actor.forgetSkill(CHARA_CREATE_THREE_MOUTH_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_BOOBS_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_PUSSY_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_BUTT_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_ONANI_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_SADO_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_MAZO_ID);
	actor.forgetSkill(CHARA_CREATE_THREE_SLUT_ID);
	
	$gameSwitches.setValue(SWITCH_CREATOR_STEP_1_COMPLETED_ID, false);
	$gameSwitches.setValue(SWITCH_CREATOR_STEP_2_COMPLETED_ID, false);
	$gameSwitches.setValue(SWITCH_CREATOR_STEP_3_COMPLETED_ID, false);
	
	if(!actor.equips()[EQUIP_SLOT_TITLE_ID]) {
		actor.changeEquip(EQUIP_SLOT_TITLE_ID, $dataArmors[TITLE_ID_EMPEROR_SECRETARY]);
	}
};

//unused
Game_Party.prototype.checkCharacterCreatorDifficultyExclusives = function() {
	return false;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if(!this.hardMode()) {
		if(actor.hasSkill(CHARA_CREATE_TWO_BODY_ID)) {
			actor.forgetSkill(CHARA_CREATE_TWO_BODY_ID);
			$gameSwitches.setValue(SWITCH_CREATOR_STEP_2_COMPLETED_ID, false);
		}
		if(actor.hasSkill(CHARA_CREATE_THREE_ONANI_ID)) {
			actor.forgetSkill(CHARA_CREATE_THREE_ONANI_ID);
			$gameSwitches.setValue(SWITCH_CREATOR_STEP_3_COMPLETED_ID, false);
		}
		if(actor.hasSkill(CHARA_CREATE_THREE_SADO_ID)) {
			actor.forgetSkill(CHARA_CREATE_THREE_SADO_ID);
			$gameSwitches.setValue(SWITCH_CREATOR_STEP_3_COMPLETED_ID, false);
		}
		if(actor.hasSkill(CHARA_CREATE_THREE_MAZO_ID)) {
			actor.forgetSkill(CHARA_CREATE_THREE_MAZO_ID);
			$gameSwitches.setValue(SWITCH_CREATOR_STEP_3_COMPLETED_ID, false);
		}
	}
};

////////
// Ending
////////

Game_Party.prototype.seenBadEndA = function() {
	if(!$gameSwitches.value(SWITCH_BAD_END_A_ID)) {
		$gameSwitches.setValue(SWITCH_BAD_END_A_ID, true);
		this._endingsSeenCount++;
	}
};

Game_Party.prototype.maxBattleMembers = function() {
    return 1;
};

Game_Party.prototype.isAllDead = function() {
    if(this.inBattle()) {
		if(Karryn.isInNeverDeadPose()) {
			if(Karryn.isInDefeatedPose() && (!ConfigManager.shorterDefeatBattles || Prison.hardMode()))
				return false;
			else if(Karryn.hasNoStamina() && Karryn.hasNoEnergy())
				return true;
		}
		
		if(Karryn.isInNoStaminaIsDefeatPose() && (Karryn.hasNoStamina() || Karryn.hasNoEnergy())) 
			return true;
		
        if(Karryn.hasNoStamina() && Karryn.hasNoEnergy())
			return true;
    }
	return false;
};

//////////
// Map Name
//////////

Game_Party.prototype.setupMapNames = function() {
	this._mapNames = [];
};

Game_Party.prototype.getMapName = function(id) {
	if(id === -1) return TextManager.prisonMapUnknownName;
	if(id === MAP_ID_EB_INFIRMARY || id === 19) return '';
	if(!this._mapNames[id]) return TextManager.prisonMapUndiscoveredName;
	if(TextManager.isEnglish) return this._mapNames[id][RemLanguageEN];
	else if(TextManager.isJapanese) return this._mapNames[id][RemLanguageJP];
	else if(TextManager.isTChinese) return this._mapNames[id][RemLanguageTCH];
	else if(TextManager.isSChinese) return this._mapNames[id][RemLanguageSCH];
	else if(TextManager.isKorean) return this._mapNames[id][RemLanguageKR];
};

Game_Party.prototype.setMapName = function(id, namesArray) {
	this._mapNames[id] = namesArray;
};

/////////
// Difficulty
////////////

Game_Party.prototype.resetDifficulty = function() {
	this._difficulty = 0;
};
Game_Party.prototype.setDifficultyToEasy = function() {
	$gameActors.actor(ACTOR_KARRYN_ID)._storedEdictPoints = 3;
	this._difficulty = DIFFICULTY_EASY;
	$gameSwitches.setValue(SWITCH_EASY_MODE_ID, true);
	$gameSwitches.setValue(SWITCH_NORMAL_MODE_ID, false);
	$gameSwitches.setValue(SWITCH_HARD_MODE_ID, false);
	Karryn.learnSkill(EDICT_SECRETARY_MODE_ONE);
	Karryn.learnSkill(EDICT_SECRETARY_MODE_TWO);
	this.income;
	this.expense;
	this.recalculateBaseOrderChange();
};
Game_Party.prototype.setDifficultyToNormal = function() {
	$gameActors.actor(ACTOR_KARRYN_ID)._storedEdictPoints = 2;
	this._difficulty = DIFFICULTY_NORMAL;
	$gameSwitches.setValue(SWITCH_EASY_MODE_ID, false);
	$gameSwitches.setValue(SWITCH_NORMAL_MODE_ID, true);
	$gameSwitches.setValue(SWITCH_HARD_MODE_ID, false);
	Karryn.learnSkill(EDICT_WARDEN_MODE);
	this.income;
	this.expense;
	this.recalculateBaseOrderChange();
};
Game_Party.prototype.setDifficultyToHard = function() {
	$gameActors.actor(ACTOR_KARRYN_ID)._storedEdictPoints = 2;
	this._difficulty = DIFFICULTY_HARD;
	$gameSwitches.setValue(SWITCH_EASY_MODE_ID, false);
	$gameSwitches.setValue(SWITCH_NORMAL_MODE_ID, false);
	$gameSwitches.setValue(SWITCH_HARD_MODE_ID, true);
	Karryn.learnSkill(EDICT_PRISONER_MODE_ONE);
	Karryn.learnSkill(EDICT_PRISONER_MODE_TWO);
	this.income;
	this.expense;
	this.recalculateBaseOrderChange();
};

Game_Party.prototype.easyMode = function() {
	return this._difficulty === DIFFICULTY_EASY;
};
Game_Party.prototype.normalMode = function() {
	return this._difficulty === DIFFICULTY_NORMAL;
};
Game_Party.prototype.hardMode = function() {
	return this._difficulty === DIFFICULTY_HARD;
};

Game_Party.prototype.difficultyGrowthRate = function() {
	if(this.hardMode()) return DIFFICULTY_HARD_GROWTH_RATE;
	else if(this.easyMode()) return DIFFICULTY_EASY_GROWTH_RATE;
	else return DIFFICULTY_NORMAL_GROWTH_RATE;
};

//////////
// Can Save
////////////

Game_Party.prototype.canOpenSaveMenu = function() {
	return this.easyMode();
};

//////////
// Day and Rest
///////////

Game_Party.prototype.setDayCount = function(value) {
	this._dayCount = value;
	$gameVariables.setValue(VARIABLE_TOTAL_DATE_ID, this._dayCount);
	$gameVariables.setValue(VARIABLE_CURRENT_DATE_ID, this.date);
};

Game_Party.prototype.increaseDayCount = function(value) {
	this.setDayCount(this._dayCount + value);
	
	if(this._dayCount % 2 === 1) {
		$gameSwitches.setValue(SWITCH_ODD_DAY_ID, true);
		$gameSwitches.setValue(SWITCH_EVEN_DAY_ID, false);
	}
	else {
		$gameSwitches.setValue(SWITCH_EVEN_DAY_ID, true);
		$gameSwitches.setValue(SWITCH_ODD_DAY_ID, false);
	}
};


Game_Party.prototype.setStartingDate = function(value) {
	this._startingDate = value;
};
Game_Party.prototype.setStartingRunDate = function(value) {
	this._startingRunDate = value;
};

// Advance Next Day
Game_Party.prototype.advanceNextDay = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	let alreadyCountedMaxOrder = false;
	
	if(this.order === 100) {
		this._daysInMaxOrder++;
		alreadyCountedMaxOrder = true;
	}
	
	this.increaseDayCount(1);
	this.resetSpecialBattles();
	this.nextDayRiotManager();
	this.recalculateBaseOrderChange();
	if($gameSwitches.value(SWITCH_BOSS_CLEAR_BONUS_ID)) {
		if(this.orderChange > 0)
			this.increaseOrderFromDayChange();
	}	
	else
		this.increaseOrderFromDayChange();
	this.respawnAnarchyEnemies(false);
	this.respawnNightBattleEnemies();
	this.increaseDaysInAnarchy();
	this.increaseDaysInRioting();
	
	if(this.order === 100 && !alreadyCountedMaxOrder)
		this._daysInMaxOrder++;
	
	this.recalculateBaseIncomeAndExpense();
	this.gainGold(this.calculateBalance(false));
	
	//Bankruptcy
	if(Prison.funding === 0) {
		this.titlesBankruptcyOrder(false);
		this._daysInBankruptcy++;
		this._gold = 0;
		if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) {
			if(this.prisonLevelOneIsSubjugated()) {
				this.riotOutbreakPrisonLevelOne();
			}
			if(this.prisonLevelTwoIsSubjugated()) {
				this.riotOutbreakPrisonLevelTwo();
			}
			if(this.prisonLevelThreeIsSubjugated()) {
				this.riotOutbreakPrisonLevelThree();
			}
			if(this.prisonLevelFourIsSubjugated()) {
				this.riotOutbreakPrisonLevelFour();
			}
		}
	}
	
	this.checkForNewTitle();
	
	actor.getNewDayEdictPoints();
	actor.putOnPanties();
	actor.passiveWakeUp_losePantiesEffect();
	actor.restoreClothingDurability();
	actor.putOnGlovesAndHat();
	actor.resetArtisanMeal();
	actor.resetTodayRecords();
	actor.checkTitleFlagsOnNewDay();
	$gameScreen.setMapInfoRefreshNeeded();
};

Game_Party.prototype.restAtOffice = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	let recovery = actor.fatigueRecoveryNumber();
	let sleepQuality = actor.edictsSleepQuality();
	sleepQuality += actor.masturbationSleepQuality();
	
	if($gameSwitches.value(SWITCH_HALF_FATIGUE_RECOVERY_ID)) {
		recovery *= 0.5;
		sleepQuality--;
		$gameSwitches.setValue(SWITCH_HALF_FATIGUE_RECOVERY_ID, false);
	}
	if(actor.isAroused() && !actor._todayMasturbatedBeforeRest) {
		actor.increaseOnaniFrustration();
	}
	actor.recoverFatigue(recovery);
	actor.setSleepQuality(sleepQuality);
	actor.removeState(STATE_HORNY_ID);
	actor.recoverAll_nextDay();
	actor.setHalberdAsDefiled(false);
	actor.restoreWardenClothingLostTemporaryDurability();
	actor.setupLiquids();
	
	this.advanceNextDay();
	
	actor.transferEdictPointsFromStorage();
};

Game_Party.prototype.restOutside = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let mapId = $gameMap._mapId;
	
	let recovery = actor.fatigueRecoveryNumber();
	let sleepQuality = actor.edictsSleepQuality();
	sleepQuality += actor.masturbationSleepQuality();
	
	if(!actor.hasPassive(PASSIVE_DEFEATED_COUNT_FOUR_ID)) {
		if(mapId === MAP_ID_BAR_STORAGE || mapId === MAP_ID_BATHROOM_FIXED || mapId === MAP_ID_BATHROOM_BROKEN || mapId === MAP_ID_LVL3_DEFEAT_SOLITARY_CELL)
			sleepQuality--;
	}
	
	if($gameSwitches.value(SWITCH_HALF_FATIGUE_RECOVERY_ID)) {
		recovery *= 0.5;
		sleepQuality--;
		$gameSwitches.setValue(SWITCH_HALF_FATIGUE_RECOVERY_ID, false);
	}
	if(actor.isAroused() && !actor._todayMasturbatedBeforeRest) {
		actor.increaseOnaniFrustration();
	}
	actor.recoverFatigue(recovery);
	actor.setSleepQuality(sleepQuality);
	actor.removeState(STATE_HORNY_ID);
	actor.recoverAll_nextDay();
	
	if(mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION) {
		actor.setHalberdAsDefiled(false);
		actor.restoreWardenClothingLostTemporaryDurability();
		actor.setupLiquids();
	}
	
	this.advanceNextDay();
	
	if(mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION) {
		actor.transferEdictPointsFromStorage();
	}
};

//Called in common events 100
Game_Party.prototype.restNextDay = function() {
	let mapId = $gameMap._mapId;
	if(mapId === MAP_ID_MODE_SELECT) {
		this.advanceNextDay();
		return;
	}
	
	if(mapId === MAP_ID_KARRYN_OFFICE) 
		this.restAtOffice();
	else 
		this.restOutside();
	$gameScreen.showMapInfo();
};

//Called in common events 102
Game_Party.prototype.enterOffice_EdictsStorage = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).transferEdictPointsFromStorage();
};
//Called in common events 103
Game_Party.prototype.exitOffice_EdictsStorage = function() {
	$gameActors.actor(ACTOR_KARRYN_ID).transferEdictPointsToStorage();
};

Game_Party.prototype.resetSpecialBattles = function() {
	$gameSwitches.setValue(SWITCH_TODAY_GUARD_BATTLE_ID, false);
	$gameSwitches.setValue(SWITCH_INVASION_BATTLE_ID, false);
	$gameSwitches.setValue(SWITCH_TELEPORT_GUARD_BLOCKER_ID, false);
	this._todayBarRepDecayed = false;
	this._todayVisitorRepDecayed = false;
	this._todayGloryHoleRepDecayed = false;
	this._todayStripClubRepDecayed = false;
	
	if($gameSwitches.value(SWITCH_TODAY_WAITRESS_BATTLE_ID)) {
		$gameSwitches.setValue(SWITCH_TODAY_WAITRESS_BATTLE_ID, false);
		this._daysWithoutDoingWaitressBar = 0;
	}
	else if(Karryn.hasEdict(EDICT_BAR_WAITRESS_OUTFIT_I) && this._barReputation > this.getMinimumBarReputation()) {
		if(this._daysWithoutDoingWaitressBar >= WAITRESS_REP_DECAY_DAYS) {
			this._daysWithoutDoingWaitressBar = 0;
			this.increaseBarReputation(-1);
			this._todayBarRepDecayed = true;
		}
		this._daysWithoutDoingWaitressBar++;
	}
	
	if($gameSwitches.value(SWITCH_TODAY_RECEPTIONIST_BATTLE_ID)) {
		$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_BATTLE_ID, false);
		this._daysWithoutDoingVisitorReceptionist = 0;
	}
	else if(Karryn.hasEdict(EDICT_RECEPTIONIST_OUTFIT_I) && this._receptionistSatisfaction > this.getMinimumReceptionistSatisfaction()) {
		if(this._daysWithoutDoingVisitorReceptionist >= RECEPTIONIST_REP_DECAY_DAYS) {
			this._daysWithoutDoingVisitorReceptionist = 0;
			this.increaseReceptionistSatisfaction(-1);
			this.increaseReceptionistFame(-1);
			this.increaseReceptionistNotoriety(-1);
			this._todayVisitorRepDecayed = true;
		}
		this._daysWithoutDoingVisitorReceptionist++;
	}
	
	if($gameSwitches.value(SWITCH_TODAY_GLORYHOLE_BATTLE_ID)) {
		$gameSwitches.setValue(SWITCH_TODAY_GLORYHOLE_BATTLE_ID, false);
		this._daysWithoutDoingGloryHole = 0;
	}
	else if(Karryn.hasEdict(EDICT_REFIT_MIDDLE_STALL) && this._gloryReputation > this.getMinimumGloryHoleReputation()){
		if(this._daysWithoutDoingGloryHole >= GLORY_HOLE_REP_DECAY_DAYS) {
			this._daysWithoutDoingGloryHole = 0;
			this.increaseGloryReputation(-1);
			this._todayGloryHoleRepDecayed = true;
		}
		this._daysWithoutDoingGloryHole++;
	}
	
	if($gameSwitches.value(SWITCH_TODAY_STRIPPER_BATTLE_ID)) {
		$gameSwitches.setValue(SWITCH_TODAY_STRIPPER_BATTLE_ID, false);
		this._daysWithoutDoingStripClub = 0;
	}
	else if(Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB) && this._stripClubReputation > this.getMinimumStripClubReputation()){
		if(this._daysWithoutDoingStripClub >= STRIP_CLUB_REP_DECAY_DAYS) {
			this._daysWithoutDoingStripClub = 0;
			this.increaseStripClubReputation(-1);
			this._todayStripClubRepDecayed = true;
			this._prisonLevelThreeRiotBuildup += STRIP_CLUB_DECAY_RIOT_BUILDUP;
		}
		this._daysWithoutDoingStripClub++;
	}
	
	$gameSwitches.setValue(SWITCH_TODAY_BAR_REP_UP_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_SATISFACTION_RATE_UP_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_FAME_UP_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_NOTORIETY_UP_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_WAITRESS_DEFEAT_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_RECEPTIONIST_DEFEAT_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_GLORYHOLE_DEFEAT_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_STRIPPER_DEFEAT_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_GOBLIN_BAR_STORAGE_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_ARTISAN_MEAL_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_STORE_ITEM_ID, false);
	$gameSwitches.setValue(SWITCH_TODAY_STORE_ROGUE_RAN_ID, false);
	
	if(this._lastDefeatedLevelOneDate + 1 < this.date) {
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV1_ID, false);
	}
	if(this._lastDefeatedLevelTwoDate + 1 < this.date) {
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV2_ID, false);
	}
	if(this._lastDefeatedLevelThreeDate + 1 < this.date) {
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV3_ID, false);
	}
	if(this._lastDefeatedLevelFourDate + 1 < this.date) {
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV4_ID, false);
	}
	if(this._lastDefeatedLevelFiveDate + 1 < this.date) {
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV5_ID, false);
	}
	if(this._lastDefeatedGuardDate + 1 < this.date) {
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_GUARD_ID, false);
	}
};


/////////
// Time
///////////

Game_Party.prototype.getTimeMinutesNumber = function() {
	let num = 0;
	
	if(this.isInWaitressBattle)
		num = this.waitressBattle_getTimeMinutesNumber();
	else if(this.isInReceptionistBattle)
		num = this.receptionBattle_getTimeMinutesNumber();
	else if(this.isInStripperBattle)
		num = this.stripperBattle_getTimeMinutesNumber();
	
	return Math.max(0, num);
};
Game_Party.prototype.getTimeSecondsNumber = function() {
	let num = 0;
	
	if(this.isInWaitressBattle)
		num = this.waitressBattle_getTimeSecondsNumber();
	else if(this.isInReceptionistBattle)
		num = this.receptionBattle_getTimeSecondsNumber();
	else if(this.isInStripperBattle)
		num = this.stripperBattle_getTimeSecondsNumber();
	
	return Math.max(0, num);
};

//////////////
// Corruption
///////////////

Game_Party.prototype.setCorruption = function(value) {
	this._corruption = value;
	$gameVariables.setValue(VARIABLE_CORRUPTION_ID, this._corruption);
};
Game_Party.prototype.increaseCorruption = function(value) {
	this.setCorruption(this.corruption + value);
};

///////
// Order
/////////

Game_Party.prototype.setOrder = function(value) {
	this._order = Math.round(value.clamp(0,PRISON_ORDER_MAX));
	$gameVariables.setValue(VARIABLE_ORDER_ID, this.order);
	
	$gameScreen.setMapInfoRefreshNeeded();
};

Game_Party.prototype.increaseOrder = function(value) {
	this.setOrder(this.order + value);
};

Game_Party.prototype.hasNoOrder = function() {
	return this.order === 0;
};

Game_Party.prototype.setOrderChangePerDay = function(value) {
	this._orderChangePerDay = value;
	$gameVariables.setValue(VARIABLE_CONTROL_ID, this.orderChangeValue());
	
	$gameScreen.setMapInfoRefreshNeeded();
};
Game_Party.prototype.increaseOrderChangePerDay = function(value) {
	this.setOrderChangePerDay(this._orderChangePerDay + value);
};
Game_Party.prototype.increaseOrderFromDayChange = function() {
	this.increaseOrder(this.orderChange);
};

Game_Party.prototype.recalculateBaseOrderChange = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let skillsArray = actor.skills();
	this._orderChangePerDay = PRISON_STARTING_ORDER_PER_DAY;
	for(let i = 0; i < skillsArray.length; ++i) {
		let skillId = skillsArray[i].id;
		let skill = $dataSkills[skillId];
		if(skill.edictOrderPerDay !== 0) $gameParty.increaseOrderChangePerDay(skill.edictOrderPerDay);
	}
};


//Order Change
//aka this.orderChange
//Control value
Game_Party.prototype.orderChangeValue = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let control = this._orderChangePerDay;

	control += this.orderChangeRiotManager();
	control += actor.titlesOrderChange();
	control += actor.variablePrisonControl();
	
	if(actor.isUsingThisTitle(TITLE_ID_FULL_ORDER_TWO) && actor._flagEquippedFullOrderTwoTitleForWholeDay) {
		control *= 0.5;
	}
	
	if(Prison.easyMode()) {
		if(ConfigManager.cheatLessControlFive) control -= 5;
		if(ConfigManager.cheatLessControlTen) control -= 10;
	}

	control = Math.round(control);
	this._cacheOrderChange = control;
	return control;
};

Game_Party.prototype.nextDayEstimatedOrder = function() {
	return this.order + this.orderChange;
};

Game_Party.prototype.HighOrder = function() {
	return this.order >= PRISON_ORDER_HIGH;
};
Game_Party.prototype.MedOrder = function() {
	return this.order >= PRISON_ORDER_MED && !this.HighOrder();
};
Game_Party.prototype.LowOrder = function() {
	return this.order >= PRISON_ORDER_LOW && !this.MedOrder();
};
Game_Party.prototype.VeryLowOrder = function() {
	return this.order >= PRISON_ORDER_VERY_LOW && !this.LowOrder();
};
Game_Party.prototype.NearNoOrder = function() {
	return this.order < PRISON_ORDER_VERY_LOW;
};

Game_Party.prototype.randomResultMaxOrder = function() {
	var ran = Math.random() * PRISON_ORDER_MAX;
	return ran > this.order;
};
Game_Party.prototype.randomResultHighOrder = function() {
	if(this.order <= PRISON_ORDER_HIGH) return false;
	var ran = Math.random() * PRISON_ORDER_MAX;
	return ran > this.order;
};
Game_Party.prototype.randomResultMedOrder = function() {
	if(this.order <= PRISON_ORDER_MED) return false;
	var ran = Math.random() * PRISON_ORDER_MAX;
	return ran > this.order;
};
Game_Party.prototype.randomResultLowOrder = function() {
	if(this.order <= PRISON_ORDER_LOW) return false;
	var ran = Math.random() * PRISON_ORDER_MAX;
	return ran > this.order;
};

/////////
// Funding
/////////////

Game_Party.prototype.increaseIncome = function(value) {
	$gameActors.actor(ACTOR_KARRYN_ID)._baseIncome += value;
};
Game_Party.prototype.increaseExpense = function(value) {
	$gameActors.actor(ACTOR_KARRYN_ID)._baseExpense += value;
};

Game_Party.prototype.recalculateBaseIncomeAndExpense = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let skillsArray = actor.skills();
	actor._baseExpense = PRISON_STARTING_EXPENSE;
	actor._baseIncome = PRISON_STARTING_INCOME;
	for(let i = 0; i < skillsArray.length; ++i) {
		let skillId = skillsArray[i].id;
		let skill = $dataSkills[skillId];
		if(skill.edictIncome !== 0) $gameParty.increaseIncome(skill.edictIncome);
		if(skill.edictExpense !== 0) $gameParty.increaseExpense(skill.edictExpense);
	}
};

Game_Party.prototype.additionalIncome = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).additionalIncome();
};
Game_Actor.prototype.additionalIncome = function() {
	let value = 0;
	value += this.titlesFlatIncome();
	value += this.variablePrisonIncome();
	return value;
};

Game_Party.prototype.additionalExpense = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).additionalExpense();
};
Game_Actor.prototype.additionalExpense = function() {
	let value = 0;
	value += this.titlesFlatExpense();
	value += this.edictsPrisonFlatExpense();
	
	return value;
};

Game_Party.prototype.incomeMultipler = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).incomeMultipler();
};
Game_Actor.prototype.incomeMultipler = function() {
	let multipler = 1
	multipler *= this.titlesIncomeRate();
	multipler *= this.edictsIncomeRate();
	
	if(this.isEquippingThisAccessory(NECKLACE_JADE_ID) && this._flagEquippedJadeNecklaceForWholeDay) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) multipler *= 1.05;
		else multipler *= 1.1;
	}
	
	return multipler;
};

Game_Party.prototype.expenseMultipler = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).expenseMultipler();
};
Game_Actor.prototype.expenseMultipler = function() {
	let multipler = 1
	multipler *= this.titlesExpenseRate();
	multipler *= this.edictsExpenseRate();
	return multipler;
};

Game_Party.prototype.calculateBalance = function(estimated) {
	let balance = this.income;
	balance += this.getBarIncome();
	balance += this.getStoreIncome();
	balance += this.getOutsourcingIncome();
	balance -= this.getNerdBlackmail();
	balance -= this.expense;
	balance += this.calculateSubsidies(estimated);
	return balance;
};

Game_Party.prototype.calculateSubsidies = function(estimated) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let subsidies = 1300;
	
	subsidies += actor.titlesSubsidies_Flat();
	subsidies += actor.edictsSubsidies_Flat();
	
	let order = this.order;
	if(estimated) order += this.orderChange;
	
	if(order <= 12) subsidies *= 1;
	else if(order <= 25) subsidies *= 0.9;
	else if(order <= 35) subsidies *= 0.8;
	else if(order <= 50) subsidies *= 0.7;
	else if(order <= 65) subsidies *= 0.6;
	else if(order <= 80) subsidies *= 0.5;
	else if(order <= 90) subsidies *= 0.35;
	else subsidies *= 0.25;
	
	subsidies *= actor.edictsSubsidies_Rate();
	subsidies *= actor.titlesSubsidies_Rate();
	
	return Math.round(subsidies);
};

Game_Party.prototype.getNerdBlackmail = function() {
	let blackmailAmt = 0;
	
	if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS) || Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL))
		return 0;
	
	if(Karryn.hasEdict(EDICT_THE_NERD_PROBLEM)) {
		blackmailAmt += 50;
		
		blackmailAmt += Prison.corruption * 10;
		if(Karryn.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT))
			blackmailAmt += Prison.corruption * 2;
	}
	
	return blackmailAmt;
};



////////////
// Guard Aggression
//////////////////

Game_Party.prototype.setGuardAggression = function(value) {
	let minGuardAgg = 0;
		
	this._guardAggression = Math.max(value, minGuardAgg);
	this._guardAggression = Math.min(value, Karryn.getWardenLevelLimit() + 10);
	$gameVariables.setValue(VARIABLE_GUARD_AGGRESSION_ID, this.guardAggression);
};
Game_Party.prototype.increaseGuardAggression = function(value) {
	this.setGuardAggression(this.guardAggression + value);
};

//////////
// Prison Levels
///////////////

Game_Party.prototype.setupPrisonLevels = function() {
	this.changeCurrentPrisonLevelToOutside();
	
	this.setPrisonLevelOneAnarchy();
	this.setPrisonLevelTwoUnknown();
	this.setPrisonLevelThreeUnknown();
	this.setPrisonLevelFourUnknown();
	this.setPrisonLevelFiveUnknown();
	
	this._prisonLevelOneRiotCount = 0;
	this._prisonLevelTwoRiotCount = 0; 
	this._prisonLevelThreeRiotCount = 0;
	this._prisonLevelFourRiotCount = 0; 
	this._prisonLevelFiveRiotCount = 0; 
	
	this._prisonLevelOneRiotBuildup = 0;
	this._prisonLevelTwoRiotBuildup = 0;
	this._prisonLevelThreeRiotBuildup = 0;
	this._prisonLevelFourRiotBuildup = 0;
	this._prisonLevelFiveRiotBuildup = 0;
	
	this._prisonLevelOne_workshopRioting = false;
	this._prisonLevelOne_laundryRioting = false;
	this._prisonLevelOne_dishwashingRioting = false;
	this._prisonLevelOne_receptionRioting = false;
	
	this._prisonLevelTwo_meetingRoomRioting = false;
	this._prisonLevelTwo_researchRioting = false;
	this._prisonLevelTwo_staffLoungeRioting = false;
	this._prisonLevelTwo_classroomRioting = false;
	this._prisonLevelTwo_readingRoomRioting = false;
	
	this._prisonLevelThree_gymRioting = false;
	this._prisonLevelThree_cellBlockSouthRioting = false;
	this._prisonLevelThree_cellBlockNorthWestRioting = false;
	this._prisonLevelThree_cellBlockNorthEastRioting = false;
};

//Level One Getters
Game_Party.prototype.prisonLevelOneIsUnknown = function() {
	return this._prisonLevelOneStatus === PRISON_LEVEL_STATUS_UNKNOWN;
};
Game_Party.prototype.prisonLevelOneIsAnarchy = function() {
	return this._prisonLevelOneStatus === PRISON_LEVEL_STATUS_ANARCHY;
};
Game_Party.prototype.prisonLevelOneIsSubjugated = function() {
	return this._prisonLevelOneStatus === PRISON_LEVEL_STATUS_SUBJUGATED;
};
Game_Party.prototype.prisonLevelOneIsRioting = function() {
	return this._prisonLevelOneStatus === PRISON_LEVEL_STATUS_RIOTING;
};
Game_Party.prototype.prisonLevelOneStatusText = function() {
	if(this.prisonLevelOneIsAnarchy()) {
		let anarchyText = TextManager.prisonLevelStatusAnarchy;
		let anarchyGracePeriod = this.anarchyGracePeriod();
		let anarchyDecreaseDivider = this.anarchyDecreaseDivider();
	
		let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_ONE_MULTIPLER;
		anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_ONE_DIVIDER;
		if(this._prisonLevelOne_anarchyDays > levelAnarchyGracePeriod + this._levelOneBonusGracePeriod) {
			anarchyText += ' (' + Math.ceil((this._prisonLevelOne_anarchyDays - this._levelOneBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider) + ')';
		}
		
		return anarchyText;
	}
	else if(this.prisonLevelOneIsSubjugated()) return TextManager.prisonLevelStatusSubjugated;
	else if(this.prisonLevelOneIsRioting()) {
		let riotText = TextManager.prisonLevelStatusRioting;
		let riotRoomCount = 0;
		
		if(this._prisonLevelOne_workshopRioting) riotRoomCount++;
		if(this._prisonLevelOne_laundryRioting) riotRoomCount++;
		if(this._prisonLevelOne_dishwashingRioting) riotRoomCount++;
		if(this._prisonLevelOne_receptionRioting) riotRoomCount++;

		riotText += ' (' + riotRoomCount + ')';
		
		return riotText;
	}
	else return TextManager.prisonLevelStatusUnknown;
};
//Level Two Getters
Game_Party.prototype.prisonLevelTwoIsUnknown = function() {
	return this._prisonLevelTwoStatus === PRISON_LEVEL_STATUS_UNKNOWN;
};
Game_Party.prototype.prisonLevelTwoIsAnarchy = function() {
	return this._prisonLevelTwoStatus === PRISON_LEVEL_STATUS_ANARCHY;
};
Game_Party.prototype.prisonLevelTwoIsSubjugated = function() {
	return this._prisonLevelTwoStatus === PRISON_LEVEL_STATUS_SUBJUGATED;
};
Game_Party.prototype.prisonLevelTwoIsRioting = function() {
	return this._prisonLevelTwoStatus === PRISON_LEVEL_STATUS_RIOTING;
};
Game_Party.prototype.prisonLevelTwoStatusText = function() {
	if(this.prisonLevelTwoIsAnarchy()) {
		let anarchyText = TextManager.prisonLevelStatusAnarchy;
		let anarchyGracePeriod = this.anarchyGracePeriod();
		let anarchyDecreaseDivider = this.anarchyDecreaseDivider();
	
		let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_TWO_MULTIPLER;
		anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_TWO_DIVIDER;
		if(this._prisonLevelTwo_anarchyDays > levelAnarchyGracePeriod + this._levelTwoBonusGracePeriod) {
			anarchyText += ' (' + Math.ceil((this._prisonLevelTwo_anarchyDays - this._levelTwoBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider) + ')';
		}
		
		return anarchyText;
	}
	else if(this.prisonLevelTwoIsSubjugated()) return TextManager.prisonLevelStatusSubjugated;
	else if(this.prisonLevelTwoIsRioting()) {
		let riotText = TextManager.prisonLevelStatusRioting;
		let riotRoomCount = 0;
		
		if(this._prisonLevelTwo_meetingRoomRioting) riotRoomCount++;
		if(this._prisonLevelTwo_researchRioting) riotRoomCount++;
		if(this._prisonLevelTwo_staffLoungeRioting) riotRoomCount++;
		if(this._prisonLevelTwo_classroomRioting) riotRoomCount++;
		if(this._prisonLevelTwo_readingRoomRioting) riotRoomCount++;

		riotText += ' (' + riotRoomCount + ')';
		
		return riotText;
	}
	else return TextManager.prisonLevelStatusUnknown;
};
//Level Three Getters
Game_Party.prototype.prisonLevelThreeIsUnknown = function() {
	return this._prisonLevelThreeStatus === PRISON_LEVEL_STATUS_UNKNOWN;
};
Game_Party.prototype.prisonLevelThreeIsAnarchy = function() {
	return this._prisonLevelThreeStatus === PRISON_LEVEL_STATUS_ANARCHY;
};
Game_Party.prototype.prisonLevelThreeIsSubjugated = function() {
	return this._prisonLevelThreeStatus === PRISON_LEVEL_STATUS_SUBJUGATED;
};
Game_Party.prototype.prisonLevelThreeIsRioting = function() {
	return this._prisonLevelThreeStatus === PRISON_LEVEL_STATUS_RIOTING;
};
Game_Party.prototype.prisonLevelThreeStatusText = function() {
	if(this.prisonLevelThreeIsAnarchy()) {
		let anarchyText = TextManager.prisonLevelStatusAnarchy;
		let anarchyGracePeriod = this.anarchyGracePeriod();
		let anarchyDecreaseDivider = this.anarchyDecreaseDivider();
	
		let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_TWO_MULTIPLER;
		anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_TWO_DIVIDER;
		if(this._prisonLevelThree_anarchyDays > levelAnarchyGracePeriod + this._levelThreeBonusGracePeriod) {
			anarchyText += ' (' + Math.ceil((this._prisonLevelThree_anarchyDays - this._levelThreeBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider) + ')';
		}
		
		return anarchyText;
	}
	else if(this.prisonLevelThreeIsSubjugated()) return TextManager.prisonLevelStatusSubjugated;
	else if(this.prisonLevelThreeIsRioting())  {
		let riotText = TextManager.prisonLevelStatusRioting;
		let riotRoomCount = 0;
		
		if(this._prisonLevelThree_gymRioting) riotRoomCount++;
		if(this._prisonLevelThree_cellBlockSouthRioting) riotRoomCount++;
		if(this._prisonLevelThree_cellBlockNorthWestRioting) riotRoomCount++;
		if(this._prisonLevelThree_cellBlockNorthEastRioting) riotRoomCount++;

		riotText += ' (' + riotRoomCount + ')';
		
		return riotText;
	}
	else return TextManager.prisonLevelStatusUnknown;
};
//Level Four Getters
Game_Party.prototype.prisonLevelFourIsUnknown = function() {
	return this._prisonLevelFourStatus === PRISON_LEVEL_STATUS_UNKNOWN;
};
Game_Party.prototype.prisonLevelFourIsAnarchy = function() {
	return this._prisonLevelFourStatus === PRISON_LEVEL_STATUS_ANARCHY;
};
Game_Party.prototype.prisonLevelFourIsSubjugated = function() {
	return this._prisonLevelFourStatus === PRISON_LEVEL_STATUS_SUBJUGATED;
};
Game_Party.prototype.prisonLevelFourIsRioting = function() {
	return this._prisonLevelFourStatus === PRISON_LEVEL_STATUS_RIOTING;
};
Game_Party.prototype.prisonLevelFourStatusText = function() {
	if(this.prisonLevelFourIsAnarchy()) return TextManager.prisonLevelStatusAnarchy;
	else if(this.prisonLevelFourIsSubjugated()) return TextManager.prisonLevelStatusSubjugated;
	else if(this.prisonLevelFourIsRioting()) {
		let riotText = TextManager.prisonLevelStatusRioting;
		let riotRoomCount = 0;
		
		//todo v10

		riotText += ' (' + riotRoomCount + ')';
		
		return riotText;
	}
	else return TextManager.prisonLevelStatusUnknown;
};
//Level Five Getters
Game_Party.prototype.prisonLevelFiveIsUnknown = function() {
	return this._prisonLevelFiveStatus === PRISON_LEVEL_STATUS_UNKNOWN;
};
Game_Party.prototype.prisonLevelFiveIsAnarchy = function() {
	return this._prisonLevelFiveStatus === PRISON_LEVEL_STATUS_ANARCHY;
};
Game_Party.prototype.prisonLevelFiveIsSubjugated = function() {
	return this._prisonLevelFiveStatus === PRISON_LEVEL_STATUS_SUBJUGATED;
};
Game_Party.prototype.prisonLevelFiveIsRioting = function() {
	return this._prisonLevelFiveStatus === PRISON_LEVEL_STATUS_RIOTING;
};
Game_Party.prototype.prisonLevelFiveStatusText = function() {
	if(this.prisonLevelFiveIsAnarchy()) return TextManager.prisonLevelStatusAnarchy;
	else if(this.prisonLevelFiveIsSubjugated()) return TextManager.prisonLevelStatusSubjugated;
	else if(this.prisonLevelFiveIsRioting()) return TextManager.prisonLevelStatusRioting;
	else return TextManager.prisonLevelStatusUnknown;
};

/////////
// Prison Enemy Level
//////////////////

Game_Party.prototype.getCurrentPrisonLevelEnemyLevelFromRioting = function() {
	let mapId = $gameMap._mapId;
	let level = 0;
	if(this.currentlyPrisonLevelOne()) {
		if(mapId === MAP_ID_WORKSHOP || mapId === MAP_ID_DISH_WASHING || mapId === MAP_ID_RECEPTION || mapId === MAP_ID_LAUNDRY || mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_BAR_STORAGE || mapId === MAP_ID_BAR || mapId === MAP_ID_VISITOR_CENTER || mapId === MAP_ID_VISITOR_ROOM || mapId === MAP_ID_VISITOR_ROOM_BROKEN || mapId === MAP_ID_LVL1_HALLWAY)
			level = Math.round(this._prisonLevelOneRiotCount * PRISON_LEVEL_ONE_ENEMY_LEVEL_RIOT_CHANGE);
	}
	else if(this.currentlyPrisonLevelTwo()) {
		if(mapId === MAP_ID_READING_ROOM || mapId === MAP_ID_CLASSROOM || mapId === MAP_ID_STAFF_LOUNGE || mapId === MAP_ID_RESEARCH || mapId === MAP_ID_MEETING_ROOM || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_BATHROOM_BROKEN || mapId === MAP_ID_BATHROOM_FIXED || mapId === MAP_ID_LVL2_HALLWAY)
			level = Math.round(this._prisonLevelTwoRiotCount * PRISON_LEVEL_TWO_ENEMY_LEVEL_RIOT_CHANGE);
	}
	else if(this.currentlyPrisonLevelThree()) {
		if(mapId === MAP_ID_CELL_BLOCK_SOUTH || mapId === MAP_ID_GYM || mapId === MAP_ID_CELL_BLOCK_NORTH_WEST || mapId === MAP_ID_CELL_BLOCK_NORTH_EAST || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL3_DEFEAT_SOLITARY_CELL || mapId === MAP_ID_COMMON_AREA_SOUTH_EAST)
			level = Math.round(this._prisonLevelThreeRiotCount * PRISON_LEVEL_THREE_ENEMY_LEVEL_RIOT_CHANGE);
	}
	else if(this.currentlyPrisonLevelFour()) {
		if(mapId === MAP_ID_LVL4_MUSHROOM_FARM || mapId === MAP_ID_LVL4_CHICKEN_PASTURE || mapId === MAP_ID_LVL4_UNDERGROUND_POOL || mapId === MAP_ID_LVL4_BASKETBALL_COURT || mapId === MAP_ID_LVL4_YETI_CAVERN || mapId === MAP_ID_LVL4_GUARD_STATION || mapId === MAP_ID_LVL4_ABANDONED_AREA)
			level = Math.round(this._prisonLevelFourRiotCount * PRISON_LEVEL_FOUR_ENEMY_LEVEL_RIOT_CHANGE);
	}
	else if(this.currentlyPrisonLevelFive()) 
		level = Math.round(this._prisonLevelFiveRiotCount * PRISON_LEVEL_FIVE_ENEMY_LEVEL_RIOT_CHANGE);
	
	level = Math.min(level, Math.round(Karryn.level * ENEMY_LVL_RIOT_MAX_PERCENT));
	
	return level;
};

Game_Party.prototype.changeCurrentPrisonLevelToLevelOne = function() {
	this._currentPrisonLevel = PRISON_LEVEL_IS_LEVEL_ONE;
};
Game_Party.prototype.changeCurrentPrisonLevelToLevelTwo = function() {
	this._currentPrisonLevel = PRISON_LEVEL_IS_LEVEL_TWO;
};
Game_Party.prototype.changeCurrentPrisonLevelToLevelThree = function() {
	this._currentPrisonLevel = PRISON_LEVEL_IS_LEVEL_THREE;
};
Game_Party.prototype.changeCurrentPrisonLevelToLevelFour = function() {
	this._currentPrisonLevel = PRISON_LEVEL_IS_LEVEL_FOUR;
};
Game_Party.prototype.changeCurrentPrisonLevelToLevelFive = function() {
	this._currentPrisonLevel = PRISON_LEVEL_IS_LEVEL_FIVE;
};
Game_Party.prototype.changeCurrentPrisonLevelToOutside = function() {
	this._currentPrisonLevel = PRISON_LEVEL_IS_LEVEL_OUTSIDE;
};

Game_Party.prototype.currentlyPrisonLevelOne = function() {
	return this._currentPrisonLevel === PRISON_LEVEL_IS_LEVEL_ONE;
};
Game_Party.prototype.currentlyPrisonLevelTwo = function() {
	return this._currentPrisonLevel === PRISON_LEVEL_IS_LEVEL_TWO;
};
Game_Party.prototype.currentlyPrisonLevelThree = function() {
	return this._currentPrisonLevel === PRISON_LEVEL_IS_LEVEL_THREE;
};
Game_Party.prototype.currentlyPrisonLevelFour = function() {
	return this._currentPrisonLevel === PRISON_LEVEL_IS_LEVEL_FOUR;
};
Game_Party.prototype.currentlyPrisonLevelFive = function() {
	return this._currentPrisonLevel === PRISON_LEVEL_IS_LEVEL_FIVE;
};
Game_Party.prototype.currentlyOutsidePrison = function() {
	return this._currentPrisonLevel === PRISON_LEVEL_IS_LEVEL_OUTSIDE;
};

Game_Party.prototype.getCurrentPrisonLevelName = function() {
	var prisonLevelName = '';
	var prisonLevel = 0;
	if(this.currentlyPrisonLevelOne()) prisonLevel = 1;
	else if(this.currentlyPrisonLevelTwo()) prisonLevel = 2;
	else if(this.currentlyPrisonLevelThree()) prisonLevel = 3;
	else if(this.currentlyPrisonLevelFour()) prisonLevel = 4;
	else if(this.currentlyPrisonLevelFive()) prisonLevel = 5;
	
	if(prisonLevel > 0) {
		prisonLevelName = TextManager.prisonMapLevelName.format(prisonLevel);
	}
	else {
		prisonLevelName = TextManager.prisonMapOutsideName;
	}
	
	return prisonLevelName;
};

Game_Party.prototype.changeCurrentPrisonOnTransfer = function() {
	let returnMapId = $gamePlayer.getReturnMapID();
	if(returnMapId === MAP_ID_OUTSIDE || returnMapId === MAP_ID_YARD || returnMapId === MAP_ID_KARRYN_OFFICE || returnMapId === MAP_ID_EB_HALLWAY) {
		this.changeCurrentPrisonLevelToOutside();
		$gameScreen.setMapInfoRefreshNeeded();
	}
	else if(returnMapId === MAP_ID_VISITOR_CENTER || returnMapId === MAP_ID_VISITOR_CENTER_BROKEN 
	|| returnMapId === MAP_ID_VISITOR_ROOM || returnMapId === MAP_ID_VISITOR_ROOM_BROKEN
	|| returnMapId === MAP_ID_BAR_BROKEN || returnMapId === MAP_ID_LVL1_STAIRS_TO_LVL3 || returnMapId === MAP_ID_LVL1_STAIRS_TO_LVL2 || returnMapId === MAP_ID_BAR_STORAGE) {
		this.changeCurrentPrisonLevelToLevelOne();
		$gameScreen.setMapInfoRefreshNeeded();
	}
	else if(returnMapId === MAP_ID_LVL2_STAIRS_TO_LVL1 || returnMapId === MAP_ID_STORE_FIXED || returnMapId === MAP_ID_STORE_BROKEN || returnMapId === MAP_ID_READING_ROOM || returnMapId === MAP_ID_BATHROOM_BROKEN || returnMapId === MAP_ID_BATHROOM_FIXED) {
		this.changeCurrentPrisonLevelToLevelTwo();
		$gameScreen.setMapInfoRefreshNeeded();
	}
	else if(returnMapId === MAP_ID_LVL3_STAIRS_TO_LVL1_LVL4 || returnMapId === MAP_ID_LVL3_DEFEAT_SOLITARY_CELL) {
		this.changeCurrentPrisonLevelToLevelThree();
		$gameScreen.setMapInfoRefreshNeeded();
	}
	else if(returnMapId === MAP_ID_LVL4_STAIRS_TO_LVL3 || returnMapId === MAP_ID_LVL4_STAIRS_TO_LVL5 || returnMapId === MAP_ID_LVL4_ABANDONED_AREA) {
		this.changeCurrentPrisonLevelToLevelFour();
		$gameScreen.setMapInfoRefreshNeeded();
	}
};


Game_Party.prototype.changeEdictPointsOnTransfer = function() {
	let mapId = $gameMap._mapId;

	if(mapId === MAP_ID_KARRYN_OFFICE || mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION) {
		$gameActors.actor(ACTOR_KARRYN_ID).transferEdictPointsFromStorage();
	}
	else {
		$gameActors.actor(ACTOR_KARRYN_ID).transferEdictPointsToStorage();
	}
};
////////////
// Pre Battle and Post Battle
// Called in common events
////////////////////////////

//Pre Battle
Game_Party.prototype.preBattleSetup = function() {
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	this.setDefeatedSwitchesOff();
	
	if($gameSwitches.value(SWITCH_ENEMY_SNEAK_ATTACK_ID)) this._forceAdvantage = 'SURPRISE';
	else {
		this._forceAdvantage = 'NORMAL';
		$gameActors.actor(ACTOR_KARRYN_ID).addState(STATE_KARRYN_FIRST_TURN_ID);
	}
	
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	this._fullGoldRewardsFlag = false;
	this._halfGoldRewardsFlag = false;
	this._showTopRightWaveNumberFlag = true;
	this._showTopRightTimeNumberFlag = false;
	this._nightBattle = false;
	
	$gameMap.setupBattleback();
    $gameActors.actor(ACTOR_KARRYN_ID).preBattleSetup();
	
	this.clearPrisonResults();

	BattleManager.setBMAllowTachieUpdate(true);
};


Game_Party.prototype.preBossBattleSetup = function() {
	this.preBattleSetup();
	this._showTopRightWaveNumberFlag = false;
	this._isBossBattleFlag = true;
	Karryn.turnOnCantEscapeFlag();
	this.setupAronCallLizardmanLimit();
	this.setupNoinimReinforcementVariables();
	this.resetMinionThrowVariables();
};

Game_Party.prototype.preGuardBattleSetup = function() {
	this.preBattleSetup();
	this._fullGoldRewardsFlag = true;
	this.increaseGuardAggression(1);
	$gameSwitches.setValue(SWITCH_TODAY_GUARD_BATTLE_ID, true);
	$gameActors.actor(ACTOR_KARRYN_ID).addToGuardBattleRecord();
	Karryn.turnOnCantEscapeFlag();
};

Game_Party.prototype.preNightBattleSetup = function() {
	this.preBattleSetup();
	this._nightBattle = true;
	this._nightBattleVariableCounted = false;
	this._gainNoOrderFlag = true;
	this._gainHalfFatigueFlag = true;
	this.setNightBattleTroopIds();
};

Game_Party.prototype.preMasturbationBattleSetup = function() {
    $gameActors.actor(ACTOR_KARRYN_ID).preMasturbationBattleSetup();
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
	Karryn.turnOnCantEscapeFlag();
	
	this._gainNoOrderFlag = true;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
};

Game_Party.prototype.preInvasionBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
    actor.preInvasionBattleSetup();
	
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	actor.turnOnCantEscapeFlag();
	this.setDefeatedSwitchesOff();
	
	actor.removeClothing();
	actor.takeOffPanties();
	actor.takeOffGlovesAndHat();
	actor.addDisarmedState(false);
	if($gameSwitches.value(SWITCH_ENEMY_SNEAK_ATTACK_ID)) {
		actor.increaseDisarmedStateTurns(4);
	}

	actor.setPreBattlePose();
	
	this._forceAdvantage = 'SURPRISE';
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = true;
	this._gainHalfFatigueFlag = true;
	
	$gameMap.setupBattleback();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.preDefeatedLevelOneBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	if(!$gameSwitches.value(SWITCH_TODAY_WAITRESS_DEFEAT_ID) && !$gameSwitches.value(SWITCH_TODAY_RECEPTIONIST_DEFEAT_ID)) {
		this._lastDefeatedLevelOneDate = this.date;
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV1_ID, true);
	}

	
	this.setDefeatedSwitchesOff();
	this._forceAdvantage = 'SURPRISE';
	
	actor.preDefeatedBattleSetup();
	actor.setDefeatedLevel1Pose();
	actor.refreshSlutLvlStageVariables_General();
	
	let blowbangFactor = actor.getDefeatedLvlOneFactor();
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, Math.max(3, blowbangFactor));
	
	//$gameMap.setupBattleback(); 
	//$gameMap.changeBattleback(BATTLEBACK1_DEFEATED_LV1_NAME, null);
	
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	Karryn.turnOnCantEscapeFlag();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.preDefeatedLevelTwoBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	if(!$gameSwitches.value(SWITCH_TODAY_GLORYHOLE_DEFEAT_ID)) {
		this._lastDefeatedLevelTwoDate = this.date;
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV2_ID, true);
	}

	
	this.setDefeatedSwitchesOff();
	this._forceAdvantage = 'SURPRISE';
	
	actor.preDefeatedBattleSetup();
	actor.setDefeatedLevel2Pose();
	actor.refreshSlutLvlStageVariables_General();
	
	let bathroomFactor = actor.getDefeatedLvlTwoFactor();
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, Math.max(3, bathroomFactor));
	
	//$gameMap.setupBattleback(); 
	//$gameMap.changeBattleback(BATTLEBACK1_DEFEATED_LV2_NAME, null);
	
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	Karryn.turnOnCantEscapeFlag();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.preDefeatedLevelThreeBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	if(!$gameSwitches.value(SWITCH_TODAY_STRIPPER_DEFEAT_ID)) {
		this._lastDefeatedLevelThreeDate = this.date;
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV3_ID, true);
	}
	
	this.setDefeatedSwitchesOff();
	this._forceAdvantage = 'SURPRISE';
	
	actor.preDefeatedBattleSetup();
	actor.setDefeatedLevel3Pose();
	actor.refreshSlutLvlStageVariables_General();
	
	let soloCellFactor = actor.getDefeatedLvlThreeFactor();
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, Math.max(3, soloCellFactor));
	
	//$gameMap.setupBattleback(); 
	//$gameMap.changeBattleback(BATTLEBACK1_DEFEATED_LV3_NAME, null);
	
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	Karryn.turnOnCantEscapeFlag();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.preDefeatedLevelFourBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	this._lastDefeatedLevelFourDate = this.date;
	$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV4_ID, true);

	
	this.setDefeatedSwitchesOff();
	this._forceAdvantage = 'SURPRISE';
	
	actor.preDefeatedBattleSetup();
	actor.setDefeatedLevel4Pose();
	actor.refreshSlutLvlStageVariables_General();
	
	let pilloryFactor = actor.getDefeatedLvlFourFactor();
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, Math.max(3, pilloryFactor));
	
	//$gameMap.setupBattleback(); 
	//$gameMap.changeBattleback(BATTLEBACK1_DEFEATED_LV4_NAME, null);
	
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	Karryn.turnOnCantEscapeFlag();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.preDefeatedLevelFiveBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	this._lastDefeatedLevelFiveDate = this.date;
	$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_LV5_ID, true);
	
	this.setDefeatedSwitchesOff();
	this._forceAdvantage = 'SURPRISE';
	
	actor.preDefeatedBattleSetup();
	actor.setDefeatedLevel5Pose();
	actor.refreshSlutLvlStageVariables_General();
	
	//let Factor = actor.getDefeatedLvlFiveFactor();
	//$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, Math.max(3, Factor));
	
	//$gameMap.setupBattleback(); 
	//$gameMap.changeBattleback(BATTLEBACK1_DEFEATED_LV5_NAME, null);
	
	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	Karryn.turnOnCantEscapeFlag();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.preDefeatedGuardBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 1);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, true);
	
	if(!$gameSwitches.value(SWITCH_TODAY_RECEPTIONIST_DEFEAT_ID)) {
		this._lastDefeatedGuardDate = this.date;
		$gameSwitches.setValue(SWITCH_YESTERDAY_DEFEATED_GUARD_ID, true);
	}
	
	
	this.setDefeatedSwitchesOff();
	this._forceAdvantage = 'SURPRISE';
	this._fullGoldRewardsFlag = false;
	
	actor.preDefeatedBattleSetup();
	actor.setDefeatedLevelGuardPose();
	actor.refreshSlutLvlStageVariables_General();
	
	let guardFactor = actor.getDefeatedGuardFactor();
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, Math.max(3, guardFactor));

	this._gainNoOrderFlag = false;
	this._gainHalfOrderFlag = false;
	this._gainHalfFatigueFlag = false;
	Karryn.turnOnCantEscapeFlag();
	
	this.clearPrisonResults();
	BattleManager.setBMAllowTachieUpdate(true);
};

// Post Battle
Game_Party.prototype.postBattleCleanup = function() {
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 0);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, false);
	$gameSwitches.setValue(SWITCH_ENEMY_SNEAK_ATTACK_ID, false);
	
	this._nightBattle = false;
	
	$gameActors.actor(ACTOR_KARRYN_ID).postBattleCleanup();
	
	this.clearPrisonResults();
	this.riotingRoomsCheck();
	
	BattleManager.setBMAllowTachieUpdate(true);
}; 

Game_Party.prototype.postGuardBattleCleanup  = function() {
	this._fullGoldRewardsFlag = false;
	
	if($gameSwitches.value(SWITCH_DEFEATED_IN_GUARD_BATTLE_ID)) {
		if(this.guardAggression > 1)
			this.increaseGuardAggression(-1);
	}		
		
	this.postBattleCleanup();
};

Game_Party.prototype.riotingRoomsCheck = function() {
	//Level One
	if(this._prisonLevelOne_workshopRioting && $gameSelfSwitches.value([MAP_ID_WORKSHOP, 5, "D"]))
		this._prisonLevelOne_workshopRioting = false;
	if(this._prisonLevelOne_laundryRioting && $gameSelfSwitches.value([MAP_ID_LAUNDRY, 4, "D"]))
		this._prisonLevelOne_laundryRioting = false;
	if(this._prisonLevelOne_dishwashingRioting && $gameSelfSwitches.value([MAP_ID_DISH_WASHING, 6, "D"]))
		this._prisonLevelOne_dishwashingRioting = false;
	if(this._prisonLevelOne_receptionRioting && $gameSelfSwitches.value([MAP_ID_RECEPTION, 42, "D"]))
		this._prisonLevelOne_receptionRioting = false;

	//Level Two
	if(this._prisonLevelTwo_readingRoomRioting && $gameSelfSwitches.value([MAP_ID_READING_ROOM, 5, "D"]))
		this._prisonLevelTwo_readingRoomRioting = false;
	if(this._prisonLevelTwo_classroomRioting && $gameSelfSwitches.value([MAP_ID_CLASSROOM, 4, "D"]))
		this._prisonLevelTwo_classroomRioting = false;
	if(this._prisonLevelTwo_staffLoungeRioting && $gameSelfSwitches.value([MAP_ID_STAFF_LOUNGE, 6, "D"]))
		this._prisonLevelTwo_staffLoungeRioting = false;
	if(this._prisonLevelTwo_researchRioting && $gameSelfSwitches.value([MAP_ID_RESEARCH, 4, "D"]))
		this._prisonLevelTwo_researchRioting = false;
	if(this._prisonLevelTwo_meetingRoomRioting && $gameSelfSwitches.value([MAP_ID_MEETING_ROOM, 4, "D"]))
		this._prisonLevelTwo_meetingRoomRioting = false;
	
	//Level Three
	if(this._prisonLevelThree_gymRioting && $gameSelfSwitches.value([MAP_ID_GYM, 8, "D"]))
		this._prisonLevelThree_gymRioting = false;
	if(this._prisonLevelThree_cellBlockSouthRioting && $gameSelfSwitches.value([MAP_ID_CELL_BLOCK_SOUTH, 37, "D"]))
		this._prisonLevelThree_cellBlockSouthRioting = false;
	if(this._prisonLevelThree_cellBlockNorthWestRioting && $gameSelfSwitches.value([MAP_ID_CELL_BLOCK_NORTH_WEST, 34, "D"]))
		this._prisonLevelThree_cellBlockNorthWestRioting = false;
	if(this._prisonLevelThree_cellBlockNorthEastRioting && $gameSelfSwitches.value([MAP_ID_CELL_BLOCK_NORTH_EAST, 28, "D"]))
		this._prisonLevelThree_cellBlockNorthEastRioting = false;
		
	//Level Four
	//todo v10
};

//This gets called right after battle, and possibly before a defeat battle
Game_Party.prototype.postBossBattleCleanup  = function() {
	this._showTopRightWaveNumberFlag = true;
	this._showTopRightTimeNumberFlag = false;
	this._isBossBattleFlag = false;
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasure(0);
}; 

Game_Party.prototype.postMasturbationBattleCleanup  = function() {
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_1_ID, 0);
	$gameVariables.setValue(VARIABLE_MOG_TURNS_SHOWED_2_ID, 0);
	$gameSwitches.setValue(SWITCH_IN_COMBAT_ID, false);
	$gameSwitches.setValue(SWITCH_ENEMY_SNEAK_ATTACK_ID, false);
	
	
	$gameActors.actor(ACTOR_KARRYN_ID).postMasturbationBattleCleanup();
	
	this.clearPrisonResults();
	
	BattleManager.setBMAllowTachieUpdate(true);
};

Game_Party.prototype.postDefeat_preRest = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this.postBattleCleanup();
	if(!$gameSwitches.value(SWITCH_TODAY_WAITRESS_DEFEAT_ID) && !$gameSwitches.value(SWITCH_TODAY_RECEPTIONIST_DEFEAT_ID) && !$gameSwitches.value(SWITCH_TODAY_GLORYHOLE_DEFEAT_ID) && !$gameSwitches.value(SWITCH_TODAY_STRIPPER_DEFEAT_ID)) {
		this._lastDefeatedDate = this.date;
		actor.setPleasure(0);
	}
	
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, 0);
	$gameSwitches.setValue(SWITCH_TODAY_GOBLIN_BAR_STORAGE_ID, false);
	//in common events, rest gets called after this
};

Game_Party.prototype.postDefeat_postRest = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor.setHalberdAsDefiled(true);
};

//////
// Defeat Switches

Game_Party.prototype.setDefeatedSwitchesOn = function() {
	let mapId = $gameMap._mapId;
	$gameSwitches.setValue(SWITCH_DEFEATED_ID, true);
	if(Prison.currentlyOutsidePrison()) {
		if(mapId === MAP_ID_KARRYN_OFFICE) {
			$gameSwitches.setValue(SWITCH_DEFEATED_IN_OFFICE_ID, true);
		}
		else if(mapId === MAP_ID_EB_HALLWAY || mapId === MAP_ID_YARD || mapId === MAP_ID_OUTSIDE) {
			$gameSwitches.setValue(SWITCH_DEFEATED_IN_GUARD_BATTLE_ID, true);
		}
		
	}
	else if(Prison.currentlyPrisonLevelOne()) {
		$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_ONE_ID, true);
		if(!Karryn.isInJobPose() && Prison.prisonLevelOneIsAnarchy()) this._levelOneBonusGracePeriod++;
	}
	else if(Prison.currentlyPrisonLevelTwo()) {
		$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_TWO_ID, true);
		if(!Karryn.isInJobPose() && Prison.prisonLevelTwoIsAnarchy()) this._levelTwoBonusGracePeriod++;
	}
	else if(Prison.currentlyPrisonLevelThree()) {
		$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_THREE_ID, true);
		if(!Karryn.isInJobPose() && Prison.prisonLevelThreeIsAnarchy()) this._levelThreeBonusGracePeriod++;
	}
	else if(Prison.currentlyPrisonLevelFour()) {
		$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_FOUR_ID, true);
		if(!Karryn.isInJobPose() && Prison.prisonLevelFourIsAnarchy()) this._levelFourBonusGracePeriod++;
	}
	else if(Prison.currentlyPrisonLevelFive()) {
		$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_FIVE_ID, true);
		this._levelFiveBonusGracePeriod++;
	}
};

Game_Party.prototype.setDefeatedSwitchesOff = function() {
	$gameSwitches.setValue(SWITCH_DEFEATED_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_OFFICE_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_ONE_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_TWO_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_THREE_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_FOUR_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_LEVEL_FIVE_ID, false);
	$gameSwitches.setValue(SWITCH_DEFEATED_IN_GUARD_BATTLE_ID, false);
	
};

// Close Edicts Menu
Game_Party.prototype.closeEdictsMenuCalculations = function() {
	
};

/////////
// Special

//Turn End
Game_Party.prototype.onTurnEndSpecial = function() {
	if(Karryn.isInWaitressServingPose()) {
		$gameTroop.onTurnEndSpecial_waitressBattle(false);
	}
	else if(Karryn.isInReceptionistPose()) {
		$gameTroop.onTurnEndSpecial_receptionistBattle(false);
	}
	else if($gameParty.isInGloryBattle) {
		$gameTroop.onTurnEndSpecial_gloryBattle();
	}
	else if($gameParty.isInStripperBattle && !Karryn.isInStripperSexPose()) {
		$gameTroop.onTurnEndSpecial_stripperBattle();
	}
	else if(Karryn.isInDefeatedLevel1Pose()) {
		$gameTroop.onTurnEndSpecial_defeatedLevelOneBattle();
	}
	else if(Karryn.isInDefeatedLevel2Pose()) {
		$gameTroop.onTurnEndSpecial_defeatedLevelTwoBattle();
	}
	else if(Karryn.isInDefeatedLevel3Pose()) {
		$gameTroop.onTurnEndSpecial_defeatedLevelThreeBattle();
	}
	else if(Karryn.isInDefeatedLevel4Pose()) {
		$gameTroop.onTurnEndSpecial_defeatedLevelFourBattle();
	}
	else if(Karryn.isInDefeatedLevel5Pose()) {
		$gameTroop.onTurnEndSpecial_defeatedLevelFiveBattle();
	}
	else if(Karryn.isInDefeatedGuardPose()) {
		$gameTroop.onTurnEndSpecial_defeatedGuardBattle();
	}
	
	$gameTroop.onTurnEndSpecial_yetiHeatAura();
};

Game_Party.prototype.isInGuardBattle = function() {
	let mapId = $gameMap._mapId;
	return mapId === MAP_ID_EB_HALLWAY && $gameTroop._troopId === TROOP_GUARD_ID;
};

//////////////
/////////////////
// Riot Manager
/////////////////
////////////////

/////////
// Order Change Riot Manager
///////////

Game_Party.prototype.orderChangeRiotManager = function() {
	let orderChange = 0;
	let anarchyGracePeriod = this.anarchyGracePeriod();
	let anarchyDecreaseDivider = this.anarchyDecreaseDivider();

	if(this.prisonLevelOneIsAnarchy()) {
		orderChange += PRISON_LEVEL_ONE_ANARCHY_ORDER_CHANGE;
		let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_ONE_MULTIPLER;
		anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_ONE_DIVIDER;
		if(!Prison.easyMode() && this._prisonLevelOne_anarchyDays > levelAnarchyGracePeriod + this._levelOneBonusGracePeriod) 
			orderChange += Math.ceil((this._prisonLevelOne_anarchyDays - this._levelOneBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider);
	}
	
	else if(this.prisonLevelOneIsRioting()) {
		orderChange += this.riotingOrderChange(1, false);
	}
	
	if(this.prisonLevelTwoIsAnarchy()) {
		orderChange += PRISON_LEVEL_TWO_ANARCHY_ORDER_CHANGE;
		let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_TWO_MULTIPLER;
		anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_TWO_DIVIDER;
		if(!Prison.easyMode() && this._prisonLevelTwo_anarchyDays > levelAnarchyGracePeriod + this._levelTwoBonusGracePeriod) 
			orderChange += Math.ceil((this._prisonLevelTwo_anarchyDays - this._levelTwoBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider);
	}
	else if(this.prisonLevelTwoIsRioting()) {
		orderChange += this.riotingOrderChange(2, false);
	}
	
	if(this.prisonLevelThreeIsAnarchy()) {
		orderChange += PRISON_LEVEL_THREE_ANARCHY_ORDER_CHANGE;
		let levelAnarchyGracePeriod =  anarchyGracePeriod * PRISON_ANARCHY_GRACE_LEVEL_THREE_MULTIPLER;
		anarchyDecreaseDivider *= PRISON_ANARCHY_DEC_LEVEL_THREE_DIVIDER;
		if(!Prison.easyMode() && this._prisonLevelThree_anarchyDays > levelAnarchyGracePeriod + this._levelThreeBonusGracePeriod) 
			orderChange += Math.ceil((this._prisonLevelThree_anarchyDays - this._levelThreeBonusGracePeriod - levelAnarchyGracePeriod)/anarchyDecreaseDivider);
	}
	else if(this.prisonLevelThreeIsRioting()) {
		orderChange += this.riotingOrderChange(3, false);
	}
	
	if(this.prisonLevelFourIsAnarchy()) {
		orderChange += PRISON_LEVEL_FOUR_ANARCHY_ORDER_CHANGE;
		//todo v10
	}
	else if(this.prisonLevelFourIsRioting()) {
		orderChange += this.riotingOrderChange(4, false);
	}
	
	if(this.prisonLevelFiveIsAnarchy()) {
		orderChange += PRISON_LEVEL_FIVE_ANARCHY_ORDER_CHANGE;
	}
	else if(this.prisonLevelFiveIsRioting()) {
		orderChange += this.riotingOrderChange(5, false);
	}

	if(orderChange != 0) orderChange *= -1;
	return orderChange;
};

Game_Party.prototype.anarchyGracePeriod = function() {
	let anarchyGracePeriod = PRISON_ANARCHY_GRACE_PERIOD_EASY;
	if(this.hardMode()) anarchyGracePeriod = PRISON_ANARCHY_GRACE_PERIOD_HARD;
	else if(this.normalMode()) anarchyGracePeriod = PRISON_ANARCHY_GRACE_PERIOD_NORMAL;
	return anarchyGracePeriod;
};
Game_Party.prototype.anarchyDecreaseDivider = function() {
	let anarchyDecreaseDivider = 1;
	
	if(this.easyMode()) anarchyDecreaseDivider = PRISON_ANARCHY_DEC_EASY_DIVIDER;
	if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING)) anarchyDecreaseDivider += 0.3;
	else if(Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING)) anarchyDecreaseDivider += 0.2;
	else if(Karryn.hasEdict(EDICT_BASIC_GUARD_TRAINING)) anarchyDecreaseDivider += 0.1;
	if(Karryn.hasEdict(EDICT_MILITARY_GUARD_EQUIPMENT)) anarchyDecreaseDivider += 0.15;
	else if(Karryn.hasEdict(EDICT_REINFORCED_GUARD_EQUIPMENT)) anarchyDecreaseDivider += 0.1;
	else if(Karryn.hasEdict(EDICT_STANDARD_GUARD_EQUIPMENT)) anarchyDecreaseDivider += 0.05;
	
	return anarchyDecreaseDivider;
};

Game_Party.prototype.riotingOrderChange = function(level, firstDayDailyReport) {
	let value = 0;

	if(level === 1) {
		if(this._prisonLevelOne_workshopRioting) value += PRISON_LEVEL_ONE_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelOne_laundryRioting) value += PRISON_LEVEL_ONE_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelOne_dishwashingRioting) value += PRISON_LEVEL_ONE_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelOne_receptionRioting) value += PRISON_LEVEL_ONE_RIOTING_ORDER_CHANGE;
		
		value += this._prisonLevelOne_riotingDays;
		
		if(this._prisonLevelOne_riotingDays <= 0 || firstDayDailyReport)
			value = Math.round(value * PRISON_FIRST_DAY_RIOTING_ORDER_CHANGE_MULTIPLER);
	}
	else if(level === 2) {
		if(this._prisonLevelTwo_meetingRoomRioting) value += PRISON_LEVEL_TWO_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelTwo_researchRioting) value += PRISON_LEVEL_TWO_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelTwo_staffLoungeRioting) value += PRISON_LEVEL_TWO_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelTwo_classroomRioting) value += PRISON_LEVEL_TWO_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelTwo_readingRoomRioting) value += PRISON_LEVEL_TWO_RIOTING_ORDER_CHANGE;

		value += this._prisonLevelTwo_riotingDays;
		
		if(this._prisonLevelTwo_riotingDays <= 0 || firstDayDailyReport)
			value = Math.round(value * PRISON_FIRST_DAY_RIOTING_ORDER_CHANGE_MULTIPLER);
	}
	else if(level === 3) {
		if(this._prisonLevelThree_gymRioting) value += PRISON_LEVEL_THREE_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelThree_cellBlockSouthRioting) value += PRISON_LEVEL_THREE_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelThree_cellBlockNorthWestRioting) value += PRISON_LEVEL_THREE_RIOTING_ORDER_CHANGE;
		if(this._prisonLevelThree_cellBlockNorthEastRioting) value += PRISON_LEVEL_THREE_RIOTING_ORDER_CHANGE;
		
		value += this._prisonLevelThree_riotingDays;
		
		if(this._prisonLevelThree_riotingDays <= 0 || firstDayDailyReport)
			value = Math.round(value * PRISON_FIRST_DAY_RIOTING_ORDER_CHANGE_MULTIPLER);
	}
	else if(level === 4) {
		
		
		value += this._prisonLevelFour_riotingDays;
		
		if(this._prisonLevelFour_riotingDays <= 0 || firstDayDailyReport)
			value = Math.round(value * PRISON_FIRST_DAY_RIOTING_ORDER_CHANGE_MULTIPLER);
		
	}
	
	if(Prison.easyMode()) value = Math.round(value / PRISON_RIOTING_ORDER_CHANGE_EASY_DIVIDER);

	return value;
};


////////
// Next Day Riot Manager
//////////////////

Game_Party.prototype.nextDayRiotManager = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let newRiotCount = 0;
	
	if(this._cancelFollowingNextDayRiotManager) {
		this.setCancelFollowingNextDayRiotManager(false);
	}
	else {
		//Check for new riots
		if(this.prisonLevelOneIsSubjugated()) {
			if(ConfigManager.cheatInstantRiotsOne && Prison.easyMode()) {
				this._prisonLevelOneRiotBuildup = 100;
			}
			else if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS) && Prison.funding + Prison.calculateBalance(true) > 0) {
				this._prisonLevelOneRiotBuildup = 0;
			}
			else {
				let buildupRate = 1;
				if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) buildupRate *= 2;
				
				this._prisonLevelOneRiotBuildup = Math.max(0, this._prisonLevelOneRiotBuildup + this.prisonLevelOneRiotChance() * buildupRate);
			}
			
			if(this._daysSinceLastLevelOneRiot >= this.minDaysBeforeRiotBuildup() && Math.random() * 100 < this._prisonLevelOneRiotBuildup) {
				this.riotOutbreakPrisonLevelOne();
				newRiotCount++;
			}
			else {
				this._daysSinceLastLevelOneRiot++;
			}
		}
		if(this.prisonLevelTwoIsSubjugated()) {
			if(ConfigManager.cheatInstantRiotsTwo && Prison.easyMode()) {
				this._prisonLevelTwoRiotBuildup = 100;
			}
			else if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS) && Prison.funding + Prison.calculateBalance(true) > 0) {
				this._prisonLevelTwoRiotBuildup = 0;
			}
			else {
				let buildupRate = 1;
				if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) buildupRate *= 2;
				
				this._prisonLevelTwoRiotBuildup = Math.max(0, this._prisonLevelTwoRiotBuildup + this.prisonLevelTwoRiotChance() * buildupRate);
			}
			
			if(this._daysSinceLastLevelTwoRiot >= this.minDaysBeforeRiotBuildup() && Math.random() * 100 < this._prisonLevelTwoRiotBuildup) {
				this.riotOutbreakPrisonLevelTwo();
				newRiotCount++;
			}
			else {
				this._daysSinceLastLevelTwoRiot++;
			}
		}
		if(this.prisonLevelThreeIsSubjugated()) {
			if(ConfigManager.cheatInstantRiotsThree && Prison.easyMode()) {
				this._prisonLevelThreeRiotBuildup = 100;
			}
			else if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS) && Prison.funding + Prison.calculateBalance(true) > 0) {
				this._prisonLevelThreeRiotBuildup = 0;
			}
			else {
				let buildupRate = 1;
				if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) buildupRate *= 2;
				
				this._prisonLevelThreeRiotBuildup = Math.max(0, this._prisonLevelThreeRiotBuildup + this.prisonLevelThreeRiotChance() * buildupRate);
			}
			
			if(this._daysSinceLastLevelThreeRiot >= this.minDaysBeforeRiotBuildup() && Math.random() * 100 < this._prisonLevelThreeRiotBuildup) {
				this.riotOutbreakPrisonLevelThree();
				newRiotCount++;
			}
			else {
				this._daysSinceLastLevelThreeRiot++;
			}
		}
		if(this.prisonLevelFourIsSubjugated()) {
			if(ConfigManager.cheatInstantRiotsFour && Prison.easyMode()) {
				this._prisonLevelFourRiotBuildup = 100;
			}
			else if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS) && Prison.funding + Prison.calculateBalance(true) > 0) {
				this._prisonLevelFourRiotBuildup = 0;
			}
			else {
				let buildupRate = 1;
				if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) buildupRate *= 2;
				
				this._prisonLevelFourRiotBuildup = Math.max(0, this._prisonLevelFourRiotBuildup + this.prisonLevelFourRiotChance() * buildupRate);
			}

			if(this._daysSinceLastLevelFourRiot >= this.minDaysBeforeRiotBuildup() && Math.random() * 100 < this._prisonLevelFourRiotBuildup) {
				this.riotOutbreakPrisonLevelFour();
				newRiotCount++;
			}
			else {
				this._daysSinceLastLevelFourRiot++;
			}
		}
		if(this.prisonLevelFiveIsSubjugated() && false) {
			this._prisonLevelFiveRiotBuildup = Math.max(0, this._prisonLevelFiveRiotBuildup + this.prisonLevelFiveRiotChance());
			
			if(ConfigManager.cheatInstantRiotsOne && Prison.easyMode()) {
				this._prisonLevelFiveRiotBuildup = 100;
			}
			else if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) {
				this._prisonLevelFiveRiotBuildup = 0;
			}
			
			if(this._daysSinceLastLevelFiveRiot >= this.minDaysBeforeRiotBuildup() && Math.random() * 100 < this._prisonLevelFiveRiotBuildup) {
				this.setPrisonLevelFiveRiot();
				newRiotCount++;
			}
			else {
				this._daysSinceLastLevelFiveRiot++;
			}
		}
	}
	
	
	if(newRiotCount === 0) {
		if(!this.prisonLevelOneIsRioting() && !this.prisonLevelTwoIsRioting() && !this.prisonLevelThreeIsRioting() && !this.prisonLevelFourIsRioting() && !this.prisonLevelFiveIsRioting()) {
			this._daysSinceLastPrisonRiot++;
		}
	}
	
	/*
	//Add even more buildup for any levels that didn't riot today
	if(this.prisonLevelOneIsSubjugated()) {
		this._prisonLevelOneRiotBuildup += this.prisonLevelOneRiotChance() / (newRiotCount + 2);
	}
	if(this.prisonLevelTwoIsSubjugated()) {
		this._prisonLevelTwoRiotBuildup += this.prisonLevelTwoRiotChance() / (newRiotCount + 2);
	}
	if(this.prisonLevelThreeIsSubjugated()) {
		this._prisonLevelThreeRiotBuildup += this.prisonLevelThreeRiotChance() / (newRiotCount + 2);
	}
	if(this.prisonLevelFourIsSubjugated()) {
		this._prisonLevelFourRiotBuildup += this.prisonLevelFourRiotChance() / (newRiotCount + 2);
	}
	if(this.prisonLevelFiveIsSubjugated()) {
		this._prisonLevelFiveRiotBuildup += this.prisonLevelFiveRiotChance() / (newRiotCount + 2);
	}
	*/
	
	//Remove rioting status
	this.riotingRoomsCheck();
	
	if(this.prisonLevelOneIsRioting() && !this._prisonLevelOne_workshopRioting && !this._prisonLevelOne_laundryRioting && !this._prisonLevelOne_dishwashingRioting && !this._prisonLevelOne_receptionRioting) {
		actor._playthroughRecordLevelOneRiotSuppressedCount++;
		actor._playthroughRecordLevelTotalRiotsSuppressedCount++;
		this.setPrisonLevelOneSubjugated();
		this._prisonLevelOne_riotingDays = 0;
	}
	
	if(this.prisonLevelTwoIsRioting() && !this._prisonLevelTwo_meetingRoomRioting && !this._prisonLevelTwo_researchRioting && !this._prisonLevelTwo_staffLoungeRioting && !this._prisonLevelTwo_classroomRioting && !this._prisonLevelTwo_readingRoomRioting) {
		actor._playthroughRecordLevelTwoRiotSuppressedCount++;
		actor._playthroughRecordLevelTotalRiotsSuppressedCount++;
		this.setPrisonLevelTwoSubjugated();
		this._prisonLevelTwo_riotingDays = 0;
	}
	
	if(this.prisonLevelThreeIsRioting() && !this._prisonLevelThree_gymRioting && !this._prisonLevelThree_cellBlockSouthRioting && !this._prisonLevelThree_cellBlockNorthWestRioting && !this._prisonLevelThree_cellBlockNorthEastRioting) {
		actor._playthroughRecordLevelThreeRiotSuppressedCount++;
		actor._playthroughRecordLevelTotalRiotsSuppressedCount++;
		this.setPrisonLevelThreeSubjugated();
		this._prisonLevelThree_riotingDays = 0;
	}
	
	if(this.prisonLevelFourIsRioting() && false) { //todo v10
		actor._playthroughRecordLevelFourRiotSuppressedCount++;
		actor._playthroughRecordLevelTotalRiotsSuppressedCount++;
		this.setPrisonLevelFourSubjugated();
		this._prisonLevelFour_riotingDays = 0;
	}
	
	//Insurance
	
	if(Prison.funding + Prison.calculateBalance(true) > 0) {
		if(!this.prisonLevelOneIsRioting()) {
			if(Karryn.hasEdict(EDICT_INSURANCE_LAUNDRY) && !Karryn.hasEdict(EDICT_REPAIR_LAUNDRY)) {
				Karryn.learnSkill(EDICT_REPAIR_LAUNDRY);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_WORKSHOP) && !Karryn.hasEdict(EDICT_REPAIR_WORKSHOP)) {
				Karryn.learnSkill(EDICT_REPAIR_WORKSHOP);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_DISHWASHING) && !Karryn.hasEdict(EDICT_REPAIR_DISHWASHING)) {
				Karryn.learnSkill(EDICT_REPAIR_DISHWASHING);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_RECEPTION) && !Karryn.hasEdict(EDICT_REPAIR_RECEPTION)) {
				Karryn.learnSkill(EDICT_REPAIR_RECEPTION);
			}
		}
		
		if(!this.prisonLevelTwoIsRioting()) {
			if(Karryn.hasEdict(EDICT_INSURANCE_MEETING_ROOM) && !Karryn.hasEdict(EDICT_REPAIR_MEETING_ROOM)) {
				Karryn.learnSkill(EDICT_REPAIR_MEETING_ROOM);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_RESEARCH) && !Karryn.hasEdict(EDICT_REPAIR_RESEARCH)) {
				Karryn.learnSkill(EDICT_REPAIR_RESEARCH);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_STAFF_LOUNGE) && !Karryn.hasEdict(EDICT_REPAIR_STAFF_LOUNGE)) {
				Karryn.learnSkill(EDICT_REPAIR_STAFF_LOUNGE);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_CLASSROOM) && !Karryn.hasEdict(EDICT_REPAIR_CLASSROOM)) {
				Karryn.learnSkill(EDICT_REPAIR_CLASSROOM);
			}
			if(Karryn.hasEdict(EDICT_INSURANCE_READING_ROOM) && !Karryn.hasEdict(EDICT_REPAIR_READING_ROOM)) {
				Karryn.learnSkill(EDICT_REPAIR_READING_ROOM);
			}
		}
		
		
	}
	
};

Game_Party.prototype.minDaysBeforeRiotBuildup = function(status) {
	let value = RIOT_MIN_DAYS_BEFORE_BUILDUP;
	if(Karryn.hasEdict(EDICT_HARSHER_PUNISHMENTS_FOR_RIOTERS)) value += 2;
	return value;
};


Game_Party.prototype.setCancelFollowingNextDayRiotManager = function(status) {
	this._cancelFollowingNextDayRiotManager = status;
};

Game_Party.prototype.increaseDaysInAnarchy = function() {
	if(this.prisonLevelOneIsAnarchy())
		this._prisonLevelOne_anarchyDays++;
	else if(this.prisonLevelTwoIsAnarchy())
		this._prisonLevelTwo_anarchyDays++;
	else if(this.prisonLevelThreeIsAnarchy())
		this._prisonLevelThree_anarchyDays++;
	else if(this.prisonLevelFourIsAnarchy())
		this._prisonLevelFour_anarchyDays++;
	else if(this.prisonLevelFiveIsAnarchy())
		this._prisonLevelFive_anarchyDays++;
};

Game_Party.prototype.increaseDaysInRioting = function() {
	if(this.prisonLevelOneIsRioting())
		this._prisonLevelOne_riotingDays++;
	if(this.prisonLevelTwoIsRioting())
		this._prisonLevelTwo_riotingDays++;
	if(this.prisonLevelThreeIsRioting())
		this._prisonLevelThree_riotingDays++;
	if(this.prisonLevelFourIsRioting())
		this._prisonLevelFour_riotingDays++;
	if(this.prisonLevelFiveIsRioting())
		this._prisonLevelFive_riotingDays++;
};

//Set Prison Level Unknown
Game_Party.prototype.setPrisonLevelOneUnknown = function() {
	this._prisonLevelOneStatus = PRISON_LEVEL_STATUS_UNKNOWN;
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_UNKNOWN_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelTwoUnknown = function() {
	this._prisonLevelTwoStatus = PRISON_LEVEL_STATUS_UNKNOWN;
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_UNKNOWN_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelThreeUnknown = function() {
	this._prisonLevelThreeStatus = PRISON_LEVEL_STATUS_UNKNOWN;
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_UNKNOWN_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelFourUnknown = function() {
	this._prisonLevelFourStatus = PRISON_LEVEL_STATUS_UNKNOWN;
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_UNKNOWN_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelFiveUnknown = function() {
	this._prisonLevelFiveStatus = PRISON_LEVEL_STATUS_UNKNOWN;
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_UNKNOWN_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_RIOTING_ID, false);
};

//Set Prison Level Anarchy
Game_Party.prototype.setPrisonLevelOneAnarchy = function() {
	this._prisonLevelOneStatus = PRISON_LEVEL_STATUS_ANARCHY;
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_ANARCHY_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_RIOTING_ID, false);
	this._prisonLevelOne_anarchyDays = 0;
};
Game_Party.prototype.setPrisonLevelTwoAnarchy = function() {
	this._prisonLevelTwoStatus = PRISON_LEVEL_STATUS_ANARCHY;
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_ANARCHY_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_RIOTING_ID, false);
	this._prisonLevelTwo_anarchyDays = 0;
};
Game_Party.prototype.setPrisonLevelThreeAnarchy = function() {
	this._prisonLevelThreeStatus = PRISON_LEVEL_STATUS_ANARCHY;
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_ANARCHY_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_RIOTING_ID, false);
	this._prisonLevelThree_anarchyDays = 0;
};
Game_Party.prototype.setPrisonLevelFourAnarchy = function() {
	this._prisonLevelFourStatus = PRISON_LEVEL_STATUS_ANARCHY;
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_ANARCHY_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_RIOTING_ID, false);
	this._prisonLevelFour_anarchyDays = 0;
};
Game_Party.prototype.setPrisonLevelFiveAnarchy = function() {
	this._prisonLevelFiveStatus = PRISON_LEVEL_STATUS_ANARCHY;
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_ANARCHY_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_RIOTING_ID, false);
	this._prisonLevelFive_anarchyDays = 0;
};

// Set Prison Level Subjugated
Game_Party.prototype.setPrisonLevelOneSubjugated = function() {
	this._prisonLevelOneRiotBuildup = 0 - this.prisonLevelOneRiotChance();
	this._prisonLevelOneStatus = PRISON_LEVEL_STATUS_SUBJUGATED;
	Karryn.learnSkill(EDICT_LEVEL_ONE_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelTwoSubjugated = function() {
	this._prisonLevelTwoRiotBuildup = 0 - this.prisonLevelTwoRiotChance();
	this._prisonLevelTwoStatus = PRISON_LEVEL_STATUS_SUBJUGATED;
	Karryn.learnSkill(EDICT_LEVEL_TWO_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelThreeSubjugated = function() {
	this._prisonLevelThreeRiotBuildup = 0 - this.prisonLevelThreeRiotChance();
	this._prisonLevelThreeStatus = PRISON_LEVEL_STATUS_SUBJUGATED;
	Karryn.learnSkill(EDICT_LEVEL_THREE_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_SUBJUGATED_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelFourSubjugated = function() {
	this._prisonLevelFourRiotBuildup = 0 - this.prisonLevelFourRiotChance();
	this._prisonLevelFourStatus = PRISON_LEVEL_STATUS_SUBJUGATED;
	Karryn.learnSkill(EDICT_LEVEL_FOUR_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_SUBJUGATED_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_RIOTING_ID, false);
};
Game_Party.prototype.setPrisonLevelFiveSubjugated = function() {
	this._prisonLevelFiveRiotBuildup = 0 - this.prisonLevelFiveRiotChance();
	this._prisonLevelFiveStatus = PRISON_LEVEL_STATUS_SUBJUGATED;
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_SUBJUGATED_ID, true);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_RIOTING_ID, false);
};

// Set Prison Level Riot
Game_Party.prototype.setPrisonLevelOneRiot = function() {
	this._prisonLevelOneStatus = PRISON_LEVEL_STATUS_RIOTING;
	this._prisonLevelOneRiotCount++;
	Karryn.forgetSkill(EDICT_LEVEL_ONE_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_ONE_IS_RIOTING_ID, true);
};
Game_Party.prototype.setPrisonLevelTwoRiot = function() {
	this._prisonLevelTwoStatus = PRISON_LEVEL_STATUS_RIOTING;
	this._prisonLevelTwoRiotCount++;
	Karryn.forgetSkill(EDICT_LEVEL_TWO_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_TWO_IS_RIOTING_ID, true);
};
Game_Party.prototype.setPrisonLevelThreeRiot = function() {
	this._prisonLevelThreeStatus = PRISON_LEVEL_STATUS_RIOTING;
	this._prisonLevelThreeRiotCount++;
	Karryn.forgetSkill(EDICT_LEVEL_THREE_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_THREE_IS_RIOTING_ID, true);
};
Game_Party.prototype.setPrisonLevelFourRiot = function() {
	this._prisonLevelFourStatus = PRISON_LEVEL_STATUS_RIOTING;
	this._prisonLevelFourRiotCount++;
	Karryn.forgetSkill(EDICT_LEVEL_FOUR_IS_NOT_RIOTING);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FOUR_IS_RIOTING_ID, true);
};
Game_Party.prototype.setPrisonLevelFiveRiot = function() {
	this._prisonLevelFiveStatus = PRISON_LEVEL_STATUS_RIOTING;
	this._prisonLevelFiveRiotCount++;
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_UNKNOWN_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_ANARCHY_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_SUBJUGATED_ID, false);
	$gameSwitches.setValue(SWITCH_LEVEL_FIVE_IS_RIOTING_ID, true);
};

///////////
// First Subjugation
// Called in giftman event in EB Hallway
//////////////////


Game_Party.prototype.firstSubjugationPrisonLevelOne = function() {
	this.setPrisonLevelOneSubjugated();
	this.setPrisonLevelTwoAnarchy();
	Karryn.learnSkill(EDICT_LEVEL_ONE_SUBJUGATED);
	Karryn.learnSkill(EDICT_THE_THUG_PROBLEM);
	Karryn.learnSkill(EDICT_THE_GOBLIN_PROBLEM);
	this.recalculateBaseOrderChange();
};
Game_Party.prototype.firstSubjugationPrisonLevelTwo = function() {
	this.setPrisonLevelTwoSubjugated();
	this.setPrisonLevelThreeAnarchy();
	Karryn.learnSkill(EDICT_LEVEL_TWO_SUBJUGATED);
	Karryn.learnSkill(EDICT_THE_NERD_PROBLEM);
	Karryn.learnSkill(EDICT_THE_ROGUE_PROBLEM);
	this.recalculateBaseOrderChange();
};
Game_Party.prototype.firstSubjugationPrisonLevelThree = function() {
	this.setPrisonLevelThreeSubjugated();
	this.setPrisonLevelFourAnarchy();
	Karryn.learnSkill(EDICT_LEVEL_THREE_SUBJUGATED);
	Karryn.learnSkill(EDICT_THE_ORC_PROBLEM);
	Karryn.learnSkill(EDICT_THE_LIZARDMAN_PROBLEM);
	Karryn.learnSkill(EDICT_WHAT_TO_DO_ABOUT_RIOTS);
	Karryn.learnSkill(EDICT_GYM_AND_SHOWERS);
	Karryn.learnSkill(EDICT_GYM_POLICY_STANDARD);
	this.recalculateBaseOrderChange();
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor._recordPreLevelFourOldSexualPartners = actor._recordSexualPartnersTotal;
};
Game_Party.prototype.firstSubjugationPrisonLevelFour = function() {
	this.setPrisonLevelFourSubjugated();
	this.setPrisonLevelFiveAnarchy();
	Karryn.learnSkill(EDICT_LEVEL_FOUR_SUBJUGATED);
	
	this.recalculateBaseOrderChange();
};

////////////
// Riot Outbreak
//////////

Game_Party.prototype.riotOutbreakPrisonLevelOne = function() {
	this.setPrisonLevelOneRiot();
	
	$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 5, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 7, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LAUNDRY, 4, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LAUNDRY, 5, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 7, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 42, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 43, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 44, "D"], false);
	
	this._prisonLevelOne_workshopRioting = true;
	this._prisonLevelOne_laundryRioting = true;
	this._prisonLevelOne_dishwashingRioting = true;
	this._prisonLevelOne_receptionRioting = true;
	
	if(Karryn.hasEdict(EDICT_REPAIR_LAUNDRY)) {
		Karryn.forgetSkill(EDICT_REPAIR_LAUNDRY);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_WORKSHOP)) {
		Karryn.forgetSkill(EDICT_REPAIR_WORKSHOP);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_DISHWASHING)) {
		Karryn.forgetSkill(EDICT_REPAIR_DISHWASHING);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_RECEPTION)) {
		Karryn.forgetSkill(EDICT_REPAIR_RECEPTION);
	}
	
	if($gameVariables.value(VARIABLE_FIRST_RIOT_PROGRESS_ID) === 0) {
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_PROGRESS_ID, 1);
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_LEVEL_ID, 1);
	}
	
	this._prisonLevelOne_riotingDays = 0;
	this._daysSinceLastLevelOneRiot = 0;
	this._daysSinceLastPrisonRiot = 0;
};

Game_Party.prototype.riotOutbreakPrisonLevelTwo = function() {
	this.setPrisonLevelTwoRiot();
	
	$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 4, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 5, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 4, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 3, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 4, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 4, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 5, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 7, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 4, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 7, "D"], false);
	
	this._prisonLevelTwo_meetingRoomRioting = true;
	this._prisonLevelTwo_researchRioting = true;
	this._prisonLevelTwo_staffLoungeRioting = true;
	this._prisonLevelTwo_classroomRioting = true;
	this._prisonLevelTwo_readingRoomRioting = true;
	
	if(Karryn.hasEdict(EDICT_REPAIR_MEETING_ROOM)) {
		Karryn.forgetSkill(EDICT_REPAIR_MEETING_ROOM);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_RESEARCH)) {
		Karryn.forgetSkill(EDICT_REPAIR_RESEARCH);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_STAFF_LOUNGE)) {
		Karryn.forgetSkill(EDICT_REPAIR_STAFF_LOUNGE);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_CLASSROOM)) {
		Karryn.forgetSkill(EDICT_REPAIR_CLASSROOM);
	}
	if(Karryn.hasEdict(EDICT_REPAIR_READING_ROOM)) {
		Karryn.forgetSkill(EDICT_REPAIR_READING_ROOM);
	}
	
	if($gameVariables.value(VARIABLE_FIRST_RIOT_PROGRESS_ID) === 0) {
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_PROGRESS_ID, 1);
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_LEVEL_ID, 2);
	}
	
	this._prisonLevelTwo_riotingDays = 0;
	this._daysSinceLastLevelTwoRiot = 0;
	this._daysSinceLastPrisonRiot = 0;
};

Game_Party.prototype.riotOutbreakPrisonLevelThree = function() {
	this.setPrisonLevelThreeRiot();
	
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 34, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 35, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 36, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 37, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 38, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 39, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 41, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 42, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 43, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 44, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_SOUTH, 45, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_GYM, 8, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_GYM, 12, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_GYM, 13, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_GYM, 21, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_GYM, 22, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_GYM, 23, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 10, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 32, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 34, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 35, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 36, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 27, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 28, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 29, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 26, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 27, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 28, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 20, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 21, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 22, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 4, "D"], false);
	
	this._prisonLevelThree_gymRioting = true;
	this._prisonLevelThree_cellBlockSouthRioting = true;
	this._prisonLevelThree_cellBlockNorthWestRioting = true;
	this._prisonLevelThree_cellBlockNorthEastRioting = true;
	
	if($gameVariables.value(VARIABLE_FIRST_RIOT_PROGRESS_ID) === 0) {
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_PROGRESS_ID, 1);
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_LEVEL_ID, 3);
	}
	
	this._prisonLevelThree_riotingDays = 0;
	this._daysSinceLastLevelThreeRiot = 0;
	this._daysSinceLastPrisonRiot = 0;
};

Game_Party.prototype.riotOutbreakPrisonLevelFour = function() {
	this.setPrisonLevelFourRiot();
	
	//todo v10
	
	if($gameVariables.value(VARIABLE_FIRST_RIOT_PROGRESS_ID) === 0) {
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_PROGRESS_ID, 1);
		$gameVariables.setValue(VARIABLE_FIRST_RIOT_LEVEL_ID, 4);
	}
	
	this._prisonLevelFour_riotingDays = 0;
	this._daysSinceLastLevelFourRiot = 0;
	this._daysSinceLastPrisonRiot = 0;
};


////////
// Riot Battle

Game_Party.prototype.isRiotBattle = function() {
	let mapId = $gameMap._mapId;
	
	if(this.prisonLevelOneIsRioting()) {
		if(mapId === MAP_ID_WORKSHOP || mapId === MAP_ID_DISH_WASHING || mapId === MAP_ID_RECEPTION || mapId === MAP_ID_LAUNDRY)
			return true;
	}
	if(this.prisonLevelTwoIsRioting()) {
		if(mapId === MAP_ID_READING_ROOM || mapId === MAP_ID_CLASSROOM || mapId === MAP_ID_STAFF_LOUNGE || mapId === MAP_ID_RESEARCH || mapId === MAP_ID_MEETING_ROOM)
			return true;
	}
	if(this.prisonLevelThreeIsRioting()) {
		if(mapId === MAP_ID_CELL_BLOCK_SOUTH || mapId === MAP_ID_GYM || mapId === MAP_ID_CELL_BLOCK_NORTH_WEST || mapId === MAP_ID_CELL_BLOCK_NORTH_EAST) 
			return true;
	}

	return false;
};

//////////
// Riot Chance
///////////////

Game_Party.prototype.prisonGlobalRiotChance = function(useOnlyTodaysGoldForBankruptcyChance) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let chance = RIOT_GLOBAL_STARTING_CHANCE;
	 
	chance += this.titlesBankruptcyRiotChance(useOnlyTodaysGoldForBankruptcyChance);
	chance += this.titlesGlobalRiotChance();
	chance += actor.edictsGlobalRiotChance();
	chance += this.prisonDifficultyRiotChance();
	

	return chance;
};

Game_Party.prototype.prisonDifficultyRiotChance = function() {
    if(this.easyMode()) return -2;
	else if(this.hardMode()) return 2;
	else return 0;
};

Game_Party.prototype.prisonLevelOneRiotChance = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
    let chance = this.prisonGlobalRiotChance();
	
	chance += actor.edictsLevelOneRiotChance();
	
	if(this._daysSinceLastLevelOneRiot >= RIOT_MIN_DAYS_BEFORE_EXTRA_BUILDUP && this._daysSinceLastPrisonRiot > 1) 
		chance += RIOT_EXTRA_BUILDUP;

	return Math.max(1, chance);
};

Game_Party.prototype.prisonLevelTwoRiotChance = function() {
    let actor = $gameActors.actor(ACTOR_KARRYN_ID);
    let chance = this.prisonGlobalRiotChance();
	
	chance += actor.edictsLevelTwoRiotChance();


	if(this._daysSinceLastLevelTwoRiot >= RIOT_MIN_DAYS_BEFORE_EXTRA_BUILDUP && this._daysSinceLastPrisonRiot > 1) 
		chance += RIOT_EXTRA_BUILDUP;

	return Math.max(1, chance);
};

Game_Party.prototype.prisonLevelThreeRiotChance = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
    let chance = this.prisonGlobalRiotChance();
	
	chance += actor.edictsLevelThreeRiotChance();
	
	if(this._daysSinceLastLevelThreeRiot >= RIOT_MIN_DAYS_BEFORE_EXTRA_BUILDUP && this._daysSinceLastPrisonRiot > 1) 
		chance += RIOT_EXTRA_BUILDUP;
	
	return Math.max(1, chance);
};

Game_Party.prototype.prisonLevelFourRiotChance = function() {
    let actor = $gameActors.actor(ACTOR_KARRYN_ID);
    let chance = this.prisonGlobalRiotChance();
	
	chance += actor.edictsLevelFourRiotChance();
	if(chance > 0) chance += actor.edictsLevelFourRiotChance();	
	
	if(this._daysSinceLastLevelFourRiot >= RIOT_MIN_DAYS_BEFORE_EXTRA_BUILDUP && this._daysSinceLastPrisonRiot > 1) 
		chance += RIOT_EXTRA_BUILDUP;
	
	return Math.max(1, chance);
};

Game_Party.prototype.prisonLevelFiveRiotChance = function() {
    let chance = this.prisonGlobalRiotChance();
	
	return Math.max(1, chance);
};

// Level Four Switches
Game_Party.prototype.determineLevelFourEntranceRoutes = function() {
	let showShortcutToLv5 = Prison.prisonLevelFourIsSubjugated();
	
	$gameSwitches.setValue(SWITCH_LV4_SHORTCUT_TO_LV5_ID, showShortcutToLv5);
};


Game_Party.prototype.determineLevelFourAmbushMap = function() {
	let triggerAmbushMap = false;
	if(Prison.prisonLevelFourIsUnknown()) triggerAmbushMap = true;
	else if(Prison.prisonLevelFourIsAnarchy()) {
		if($gameSelfSwitches.value([MAP_ID_LVL4_AMBUSH, 3, "D"])) 
			triggerAmbushMap = false;
		else
			triggerAmbushMap = true;
	}
	else triggerAmbushMap = false;
	
	$gameSwitches.setValue(SWITCH_LV4_TRIGGER_AMBUSH_ID, triggerAmbushMap);
};

Game_Party.prototype.determineTeleportGuardType = function() {
	let triggerAlley = false;
	
	if(Karryn.hasDoneGuardBattleThisPlaythrough() && Prison.guardAggression >= 10 && !$gameSwitches.value(SWITCH_TODAY_GUARD_BATTLE_ID) && this.getHeadcountOfWantedType(ENEMYTYPE_GUARD_TAG) >= 1)
		triggerAlley = true;
	
	$gameSwitches.setValue(SWITCH_SET_BAD_TELEPORT_ID, triggerAlley);
};

/////////
// Night Mode
// Exhibitionist Mode
// Night Battle
// Exhibitionist Battle
////////////////

Game_Party.prototype.isNightBattle = function() {
	return this._nightBattle;
};
Game_Party.prototype.isNightMode = function() {
	return $gameSwitches.value(SWITCH_NIGHT_MODE_ID);
};
Game_Party.prototype.isNightModeEBHallway = function() {
	return $gameSwitches.value(SWITCH_NIGHT_MODE_EB_HALLWAY_ID);
};