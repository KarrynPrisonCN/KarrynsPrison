var Remtairy = Remtairy || {};
Remtairy.Edicts = Remtairy.Edicts || {};

//=============================================================================
 /*:
 * @plugindesc Edicts
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const EDICT_TREE_PERSONAL = 10;
const EDICT_TREE_TRAINING = 11;
const EDICT_TREE_SPECIALIZATION = 12;
const EDICT_TREE_SHOPPING = 13;

const EDICT_TREE_PRISON = 16;
const EDICT_TREE_LEVEL_ONE = 17;
const EDICT_TREE_LEVEL_TWO = 18;
const EDICT_TREE_LEVEL_THREE = 19;
const EDICT_TREE_LEVEL_FOUR = 20;

const EDICT_TREE_RESEARCH = 21;
const EDICT_TREE_INSURANCE = 22;

const EDICT_LEVEL_ONE_SUBJUGATED = 372;
const EDICT_LEVEL_TWO_SUBJUGATED = 373;
const EDICT_LEVEL_THREE_SUBJUGATED = 374;
const EDICT_LEVEL_FOUR_SUBJUGATED = 375;

const EDICT_STRENGTH_TRAINING_ONE = 301;
const EDICT_STRENGTH_TRAINING_TWO = 302;
const EDICT_STRENGTH_TRAINING_THREE = 303;
const EDICT_STRENGTH_TRAINING_FOUR = 304;
const EDICT_STRENGTH_TRAINING_FIVE = 305;
const EDICT_SLAM_TRAINING_ONE = 306;
const EDICT_SLAM_TRAINING_TWO = 307;
const EDICT_SLAM_TRAINING_THREE = 308;
const EDICT_STRIKE_TRAINING_ONE = 309;
const EDICT_STRIKE_TRAINING_TWO = 310;
const EDICT_STRIKE_TRAINING_THREE = 311;
const EDICT_DEXTERITY_TRAINING_ONE = 312;
const EDICT_DEXTERITY_TRAINING_TWO = 313;
const EDICT_DEXTERITY_TRAINING_THREE = 314;
const EDICT_DEXTERITY_TRAINING_FOUR = 315;
const EDICT_DEXTERITY_TRAINING_FIVE = 316;
const EDICT_CLEAVE_TRAINING_ONE = 317;
const EDICT_CLEAVE_TRAINING_TWO = 318;
const EDICT_CLEAVE_TRAINING_THREE = 319;
const EDICT_SLASH_TRAINING_ONE = 320;
const EDICT_SLASH_TRAINING_TWO = 321;
const EDICT_SLASH_TRAINING_THREE = 322;
const EDICT_AGILITY_TRAINING_ONE = 323;
const EDICT_AGILITY_TRAINING_TWO = 324;
const EDICT_AGILITY_TRAINING_THREE = 325;
const EDICT_AGILITY_TRAINING_FOUR = 326;
const EDICT_AGILITY_TRAINING_FIVE = 327;
const EDICT_SKEWER_TRAINING_ONE = 328;
const EDICT_SKEWER_TRAINING_TWO = 329;
const EDICT_SKEWER_TRAINING_THREE = 330;
const EDICT_THRUST_TRAINING_ONE = 331;
const EDICT_THRUST_TRAINING_TWO = 332;
const EDICT_THRUST_TRAINING_THREE = 333;
const EDICT_ENDURANCE_TRAINING_ONE = 334;
const EDICT_ENDURANCE_TRAINING_TWO = 335;
const EDICT_ENDURANCE_TRAINING_THREE = 336;
const EDICT_ENDURANCE_TRAINING_FOUR = 337;
const EDICT_ENDURANCE_TRAINING_FIVE = 338;
const EDICT_STAMINA_TRAINING_ONE = 339;
const EDICT_STAMINA_TRAINING_TWO = 340;
const EDICT_STAMINA_TRAINING_THREE = 341;
const EDICT_ENERGY_TRAINING_ONE = 342;
const EDICT_ENERGY_TRAINING_TWO = 343;
const EDICT_REVITALIZE_TRAINING_ONE = 344;
const EDICT_SECONDWIND_TRAINING_ONE = 345;
const EDICT_REVITALIZE_TRAINING_TWO = 346;
const EDICT_CAUTIOUS_STANCE = 347;
const EDICT_DEFENSIVE_STANCE = 348;
const EDICT_COUNTER_STANCE = 349;
const EDICT_MIND_TRAINING_ONE = 350;
const EDICT_MIND_TRAINING_TWO = 351;
const EDICT_MIND_TRAINING_THREE = 352;
const EDICT_MIND_TRAINING_FOUR = 353;
const EDICT_MIND_TRAINING_FIVE = 354;
const EDICT_SUPPRESS_DESIRES = 355;
const EDICT_RELEASE_DESIRES = 356;
const EDICT_RELEASE_COCK_DESIRE = 357;
const EDICT_HEALING_THOUGHTS_ONE = 358;
const EDICT_HEALING_THOUGHTS_TWO = 359;
const EDICT_MIND_OVER_MATTER = 360;
const EDICT_SEE_NO_EVIL = 361;
const EDICT_HEAR_NO_EVIL = 362;
const EDICT_SPEAK_NO_EVIL = 363;
const EDICT_EMPRESS_MAJESTY = 364;
const EDICT_EMPRESS_CLOTHES = 365;
const EDICT_EYE_OF_THE_MIND = 366;
const EDICT_REALITY_MARBLE = 367;
const EDICT_PRISON_GUARDS = 368;
const EDICT_REFORMED_CONVICT_EMPLOYMENT = 369;
const EDICT_PAMPHLET_TRAINING = 370;
const EDICT_SECONDHAND_GUARD_EQUIPMENT = 371;
const EDICT_LAXER_HIRING_STANDARDS = 376;
const EDICT_HIRE_CURRENT_INMATES = 377;
const EDICT_NO_HIRING_STANDARDS = 378;
const EDICT_BASIC_GUARD_TRAINING = 379;
const EDICT_ADVANCED_GUARD_TRAINING = 380;
const EDICT_STANDARD_EQUIPMENT = 381;
const EDICT_REINFORCED_EQUIPMENT = 382;
const EDICT_SELF_PAID_EQUIPMENT = 383;
const EDICT_SELF_MAINENANCE = 384;
const EDICT_YOU_BREAK_YOU_PAY = 385;
const EDICT_KITCHEN_AND_MESS_HALL = 386;
const EDICT_REPAIR_KITCHEN_AND_MESS_HALL = 387;
const EDICT_UPGRADE_KITCHEN_EQUIPMENT = 388;
const EDICT_HIRE_COOKS = 389;
const EDICT_USE_INMATE_COOKS = 390;
const EDICT_COOKING_TRAINING_PROGRAM = 391;
const EDICT_HIRE_A_CHEF = 394;
const EDICT_ARTISAN_MEAL_FOR_WARDEN = 395;
const EDICT_BULK_FOOD_SUPPLIER = 396;
const EDICT_EXPAND_INMATE_MENU = 397;
const EDICT_APHRODISIACS_IN_INMATE_FOOD = 398;
const EDICT_PAY_FOR_BETTER_FOOD = 399;
const EDICT_BETTER_GUARD_MEALS = 400;
const EDICT_GOURMET_GUARD_MEALS = 401;
const EDICT_GUARD_PAY_FOR_FOOD = 402;
const EDICT_APHRODISIACS_IN_GUARD_FOOD = 403;
const EDICT_STATE_OF_THE_ART_INFIRMARY = 404;
const EDICT_UPGRADE_MEDICAL_EQUIPMENT = 405;
const EDICT_HIRE_A_PHYSICAL_THERAPIST = 406;
const EDICT_EXPAND_THERAPY_AREA = 407;
const EDICT_PAID_THERAPY_SESSIONS = 408;
const EDICT_NEW_DRUG_SUPPLIER = 409;
const EDICT_ALLOW_RESEARCH_TESTING = 410;
const EDICT_CONDUCT_TESTS_ON_INJURED_INMATES = 411;
const EDICT_STEROIDS_FOR_GUARDS = 412;
const EDICT_SEX_ENDURANCE_DRUGS_FOR_GUARDS = 413;
const EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS = 414;
const EDICT_RECREATIONAL_DRUGS_FOR_INMATES = 415;
const EDICT_SEX_ENDURANCE_DRUGS_FOR_INMATES = 416;
const EDICT_APHRODISIACS_DRUGS_FOR_INMATES = 417;
const EDICT_EXPERIMENTAL_STRENGTH_BOOSTER = 418;
const EDICT_EXPERIMENTAL_DEXTERITY_BOOSTER = 419;
const EDICT_EXPERIMENTAL_ENDURANCE_BOOSTER = 420;
const EDICT_EXPERIMENTAL_AGILITY_BOOSTER = 421;
const EDICT_BLACK_MARKET = 422;
const EDICT_BAN_BLACK_MARKET = 423;
const EDICT_CLOSE_BLACK_MARKET = 424;
const EDICT_TURN_BLIND_EYE_TO_BLACK_MARKET = 425;
const EDICT_TAKE_A_CUT_OF_THE_BLACK_MARKET = 426;
const EDICT_KI = 427;
const EDICT_FOCUS = 428;

const EDICT_ESTABLISH_BACKDOOR = 450;
const EDICT_PUBLISH_PROFILE = 451;
const EDICT_PUBLISH_VIRGIN_STATUS = 452;
const EDICT_PUBLISH_OTHER_FIRST_TIMES = 453;
const EDICT_PUBLISH_LAST_TIMES = 454;
const EDICT_PUBLISH_RESISTS = 455;
const EDICT_PUBLISH_SEX_LEVELS = 456;
const EDICT_PUBLISH_SENSITIVITIES = 457;
const EDICT_PUBLISH_RECORDS_ONE = 458;
const EDICT_PUBLISH_RECORDS_TWO = 459;
const EDICT_PUBLISH_RECORDS_THREE = 460;
const EDICT_SECRETARY_MODE_ONE = 461;
const EDICT_SECRETARY_MODE_TWO = 462;
const EDICT_WARDEN_MODE = 463;
const EDICT_PRISONER_MODE_ONE = 464;
const EDICT_PRISONER_MODE_TWO = 465;
const EDICT_SECRETARY_HALBERD = 466;
const EDICT_HALBERD_UPGRADE_ONE = 467;
const EDICT_HALBERD_UPGRADE_TWO = 468;
const EDICT_HALBERD_UPGRADE_THREE = 469;
const EDICT_HALBERD_UPGRADE_FOUR = 470;
const EDICT_HALBERD_OFFENSIVE_SPECIALIZATION = 471;
const EDICT_HALBERD_OFFENSIVE_ONE = 472;
const EDICT_HALBERD_OFFENSIVE_TWO = 473;
const EDICT_HALBERD_OFFENSIVE_THREE = 474;
const EDICT_HALBERD_OFFENSIVE_FOUR = 475;
const EDICT_HALBERD_DEFENSIVE_SPECIALIZATION = 476;
const EDICT_HALBERD_DEFENSIVE_ONE = 477;
const EDICT_HALBERD_DEFENSIVE_TWO = 478;
const EDICT_HALBERD_DEFENSIVE_THREE = 479;
const EDICT_HALBERD_DEFENSIVE_FOUR = 480;
const EDICT_WARDEN_OUTFIT = 481;
const EDICT_WARDEN_CLOTH_UPGRADE_ONE = 482;
const EDICT_WARDEN_CLOTH_UPGRADE_TWO = 483;
const EDICT_WARDEN_CLOTH_UPGRADE_THREE = 484;
const EDICT_WARDEN_CLOTH_UPGRADE_FOUR = 485;
const EDICT_OFFICE_BED_CRAPPY = 486;
const EDICT_OFFICE_BED_UPGRADE_ONE = 487;
const EDICT_OFFICE_BED_UPGRADE_TWO = 488;
const EDICT_OFFICE_BED_UPGRADE_THREE = 489;
const EDICT_OFFICE_PRIVATE_GUARDS = 490;
const EDICT_OFFICE_PRISON_GUARDS = 491;
const EDICT_OFFICE_INMATE_GUARDS = 492;
const EDICT_OFFICE_VOLUNTEER_GUARDS = 493;
const EDICT_OFFICE_CHEAP_LOCK = 494;
const EDICT_OFFICE_HEAVY_DUTY_LOCK = 495;
const EDICT_OFFICE_AUTO_ELECTRONIC_LOCK = 496;
const EDICT_OFFICE_MANUAL_ELECTRONIC_LOCK = 497;
const EDICT_OFFICE_OUTSIDE_CAMERA = 498;
const EDICT_OFFICE_INSIDE_CAMERA = 499;
const EDICT_OFFICE_SELL_ONANI_VIDEO = 500;
const EDICT_UNARMED_COMBAT_TRAINING = 501;
const EDICT_UNARMED_ATTACK_TRAINING_I = 502;
const EDICT_UNARMED_ATTACK_TRAINING_II = 503;
const EDICT_UNARMED_DEFENSE_TRAINING_I = 504;
const EDICT_UNARMED_DEFENSE_TRAINING_II = 505;
//Level 1
const EDICT_REPAIR_BAR = 506;
const EDICT_BAR_DRINK_MENU_I = 507;
const EDICT_BAR_DRINK_MENU_II = 508;
const EDICT_BAR_DRINK_MENU_III = 509;
const EDICT_HIRE_BAR_WAITERS = 510;
const EDICT_USE_INMATE_WAITERS = 511;
const EDICT_DONT_PAY_WAITERS = 512;
const EDICT_BAR_GLASSWARE_I = 513;
const EDICT_BAR_GLASSWARE_II = 514;
const EDICT_BAR_GLASSWARE_III = 515;
const EDICT_BAR_INSURANCE_I = 516;
const EDICT_BAR_INSURANCE_II = 517;
const EDICT_BAR_WAITRESS_OUTFIT_I = 518;
const EDICT_BAR_WAITRESS_OUTFIT_II = 519;
const EDICT_EDGING_CONTROL = 520;
const EDICT_RESIST_ORGASM = 521;

const EDICT_REPAIR_VISITOR_CENTER = 522;
const EDICT_REPAIR_LAUNDRY = 523;
const EDICT_SELL_LAUNDRY_SERVICE = 524;
const EDICT_NO_FREE_LAUNDRY = 555;
const EDICT_REPAIR_WORKSHOP = 526;
const EDICT_LONGER_WORKSHOP_SHIFTS = 527;
const EDICT_HARDER_WORKSHOP_PROJECTS = 528;
const EDICT_REPAIR_DISHWASHING = 529;
const EDICT_HIRE_DISHWASHERS = 392;
const EDICT_USE_INMATE_DISHWASHERS = 393;
const EDICT_REPAIR_RECEPTION = 530;

const EDICT_THE_THUG_PROBLEM = 531;
const EDICT_NO_THUG_LABOR = 532;
const EDICT_WEAKEN_THE_THUGS = 533;
const EDICT_THUGS_STRESS_RELIEF = 534;
const EDICT_THE_GOBLIN_PROBLEM = 535;
const EDICT_ANTI_GOBLIN_SQUAD = 536;
const EDICT_DEMEAN_GOBLINS = 537;
const EDICT_BAIT_GOBLINS = 538;
const EDICT_DEFENSIVE_STANCE_UPGRADE_I = 539;
const EDICT_COUNTER_STANCE_UPGRADE_I = 540;
const EDICT_PUBLISH_DESIRES = 541;

const EDICT_REPAIR_VISITING_ROOM_C = 542;
const EDICT_REPAIR_VISITING_ROOM_D = 543;
const EDICT_CHARGE_VISITORS_FOR_VISITATION = 544;
const EDICT_CHARGE_VISITORS_FOR_EXPRESS = 545;
const EDICT_CHARGE_INMATES_FOR_VISITATION = 546;
const EDICT_RECEPTIONIST_OUTFIT_I = 547;
const EDICT_RECEPTIONIST_OUTFIT_II = 548;

const EDICT_THE_NERD_PROBLEM = 549;
const EDICT_PAY_NERD_BLACKMAIL = 550;
const EDICT_THREATEN_THE_NERDS = 551;
const EDICT_GIVE_IN_TO_NERD_BLACKMAIL = 552;
const EDICT_THE_ROGUE_PROBLEM = 553;
const EDICT_ROGUE_TRAINING_FOR_GUARDS = 554;
const EDICT_FORCE_ROGUES_INTO_LABOR = 555;
const EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS = 556;

const EDICT_LEVEL_ONE_IS_NOT_RIOTING = 557;
const EDICT_LEVEL_TWO_IS_NOT_RIOTING = 558;
const EDICT_LEVEL_THREE_IS_NOT_RIOTING = 559;
const EDICT_LEVEL_FOUR_IS_NOT_RIOTING = 560;

const EDICT_REPAIR_OFFICE = 561;
const EDICT_PARTIALLY_RESTORE_BUREAUCRACY = 562;
const EDICT_REDIRECT_SUBSIDIES = 563;
const EDICT_HIRE_ACCOUNTANT = 564;
const EDICT_INMATE_ASSISTANT_ACCOUNTANT = 565;
const EDICT_HIRE_LAWYER = 566;
const EDICT_FIND_INSURANCE_COMPANY = 567;
const EDICT_REPAIR_STORE = 568;
const EDICT_GUARDS_NEED_TO_PAY_IN_STORE = 569;
const EDICT_STAFF_NEED_TO_PAY_IN_STORE = 570;
const EDICT_INMATES_ALLOWED_TO_USE_STORE = 571;
const EDICT_FREE_ITEM_IN_STORE_FOR_KARRYN = 572;
const EDICT_REPAIR_TOILET = 573;
const EDICT_INMATE_JANITORS = 574;
const EDICT_REFIT_MIDDLE_STALL = 575;
const EDICT_REPAIR_MEETING_ROOM = 576;
const EDICT_PROVIDE_OUTSOURCING = 577;
const EDICT_REPAIR_RESEARCH = 578;
const EDICT_APPLY_FOR_RESEARCH_GRANTS = 579;
const EDICT_REPAIR_STAFF_LOUNGE = 580;
const EDICT_LOUNGE_ISNT_FREE_ANYMORE = 581;
const EDICT_REPAIR_CLASSROOM = 582;
const EDICT_MANDATORY_CLASSES = 583;
const EDICT_NO_CLASSES = 584;
const EDICT_REFORM_CLASSES = 585;
const EDICT_WORKSHOP_CLASSES = 586;
const EDICT_ANATOMY_CLASSES = 587;
const EDICT_SUPPLY_MODEL_OF_KARRYNS_BODY = 588;
const EDICT_REPAIR_READING_ROOM = 589;
const EDICT_READING_ROOM_ENTRANCE_FEE = 590;
const EDICT_STOCK_WITH_ENTERTAINMENT_BOOKS = 591;
const EDICT_STOCK_WITH_IMPERIAL_BOOKS = 592;
const EDICT_STOCK_WITH_BODYBUILDING_BOOKS = 593;
const EDICT_STOCK_WITH_ADULT_BOOKS = 594;
const EDICT_ALLOW_BORROWING_ADULT_BOOKS = 595;

const EDICT_RECEPTION_POLICY_NEUTRAL = 596;
const EDICT_RECEPTION_POLICY_FAVOR_WEAK = 597;
const EDICT_RECEPTION_POLICY_WEAK_ONLY = 598;
const EDICT_RECEPTION_POLICY_FAVOR_STRONG = 599;
const EDICT_RECEPTION_POLICY_STRONG_ONLY = 600;

const EDICT_INSURANCE_EXPLANATION_1 = 1868;
const EDICT_INSURANCE_EXPLANATION_2 = 1869;
const EDICT_INSURANCE_LAUNDRY = 1870;
const EDICT_CANCEL_INSURANCE_LAUNDRY = 1871;
const EDICT_INSURANCE_WORKSHOP = 1872;
const EDICT_CANCEL_INSURANCE_WORKSHOP = 1873;
const EDICT_INSURANCE_DISHWASHING = 1874;
const EDICT_CANCEL_INSURANCE_DISHWASHING = 1875;
const EDICT_INSURANCE_RECEPTION = 1876;
const EDICT_CANCEL_INSURANCE_RECEPTION = 1877;
const EDICT_INSURANCE_MEETING_ROOM = 1878;
const EDICT_CANCEL_INSURANCE_MEETING_ROOM = 1879;
const EDICT_INSURANCE_RESEARCH = 1880;
const EDICT_CANCEL_INSURANCE_RESEARCH = 1881;
const EDICT_INSURANCE_STAFF_LOUNGE = 1882;
const EDICT_CANCEL_INSURANCE_STAFF_LOUNGE = 1883;
const EDICT_INSURANCE_CLASSROOM = 1884;
const EDICT_CANCEL_INSURANCE_CLASSROOM = 1885;
const EDICT_INSURANCE_READING_ROOM = 1886;
const EDICT_CANCEL_INSURANCE_READING_ROOM = 1887;

const EDICT_RESEARCH_ACCESSORY_DEAL = 1901;
const EDICT_RESEARCH_PRISON_AUDIT = 1902;
const EDICT_RESEARCH_NEW_LOCKS = 1903;
const EDICT_RESEARCH_NEW_BEDS = 1904;
const EDICT_RESEARCH_PRISON_LABOR_LAWS = 1905;
const EDICT_RESEARCH_REACH_COMMON_GROUND_WITH_INMATES = 1906;
const EDICT_RESEARCH_ISSUE_CURFEW_PASS = 1907;
const EDICT_RESEARCH_STAFF_SLEEP_PERK = 1908;
const EDICT_RESEARCH_OBSOLETE_TAX_CODE = 1909;
const EDICT_RESEARCH_WEIRD_TAX_LEGALITIES = 1910;
const EDICT_RESEARCH_UNLOCK_SPECIALIZATION = 1911;
const EDICT_RESEARCH_ADVANCED_TRAINING_TECH = 1912;
const EDICT_RESEARCH_EXPERT_TRAINING_TECH = 1913;
const EDICT_RESEARCH_DRUG_CONTRACT = 1914;
const EDICT_RESEARCH_APHRODISIAC_CONTRACT = 1915;
const EDICT_RESEARCH_LAUNDRY_PRODUCT_CONTRACT = 1916;
const EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT = 1917;

const EDICT_RESEARCH_SLIME_REGEN = 1999;

const EDICT_SPECIALIZATION_EXPLANATION = 2000;
const EDICT_STRENGTH_SPECIALIZATION = 2001;
const EDICT_DEXTERITY_SPECIALIZATION = 2002;
const EDICT_AGILITY_SPECIALIZATION = 2003;
const EDICT_ENDURANCE_SPECIALIZATION = 2004;
const EDICT_MIND_SPECIALIZATION = 2005;
const EDICT_CHARM_SPECIALIZATION = 2006;

const EDICT_SPEC_BASIC_STRIKE_POWER = 2011;
const EDICT_SPEC_BASIC_STRIKE_TECH = 2012;
const EDICT_SPEC_HEAD_STRIKE_POWER = 2013;
const EDICT_SPEC_HEAD_STRIKE_TECH = 2014;
const EDICT_SPEC_SLAM_POWER = 2015;
const EDICT_SPEC_SLAM_TECH = 2016;
const EDICT_SPEC_BASIC_SLASH_POWER = 2017;
const EDICT_SPEC_BASIC_SLASH_TECH = 2018;
const EDICT_SPEC_ARM_SLASH_POWER = 2019;
const EDICT_SPEC_ARM_SLASH_TECH = 2020;
const EDICT_SPEC_CLEAVE_POWER = 2021;
const EDICT_SPEC_CLEAVE_TECH = 2022;
const EDICT_SPEC_BASIC_THRUST_POWER = 2023;
const EDICT_SPEC_BASIC_THRUST_TECH = 2024;
const EDICT_SPEC_LEG_THRUST_POWER = 2025;
const EDICT_SPEC_LEG_THRUST_TECH = 2026;
const EDICT_SPEC_SKEWER_POWER = 2027;
const EDICT_SPEC_SKEWER_TECH = 2028;
const EDICT_SPEC_PETTING_RESIST = 2029;
const EDICT_SPEC_SEX_RESIST = 2030;
const EDICT_SPEC_STAMINA_TANK = 2031;
const EDICT_SPEC_STAMINA_FOUNDATION = 2032;
const EDICT_SPEC_ENERGY_TANK = 2033;
const EDICT_SPEC_ENERGY_CYCLING = 2034;
const EDICT_SPEC_DEFENSIVE_MIND_FOCUS = 2035;
const EDICT_SPEC_DEFENSIVE_MIND_HEALING = 2036;
const EDICT_SPEC_OFFENSIVE_MIND_KI = 2037;
const EDICT_SPEC_OFFENSIVE_MIND_EOTM = 2038;
const EDICT_SPEC_SENSUAL_MIND_RESTORE = 2039;
const EDICT_SPEC_SENSUAL_MIND_EOTM = 2040;

////////////
//////////////
// Game Actor
//////////////
////////////

//Starting Edicts
Game_Actor.prototype.setupStartingEdicts = function() {
	this.learnSkill(EDICT_STRIKE_TRAINING_ONE);
	this.learnSkill(EDICT_SLASH_TRAINING_ONE);
	this.learnSkill(EDICT_THRUST_TRAINING_ONE);
	this.learnSkill(EDICT_REVITALIZE_TRAINING_ONE);
	this.learnSkill(EDICT_CAUTIOUS_STANCE);
	this.learnSkill(EDICT_SUPPRESS_DESIRES);
	this.learnSkill(EDICT_PRISON_GUARDS);
	this.learnSkill(EDICT_REFORMED_CONVICT_EMPLOYMENT);
	this.learnSkill(EDICT_PAMPHLET_TRAINING);
	this.learnSkill(EDICT_SECONDHAND_GUARD_EQUIPMENT);
	this.learnSkill(EDICT_KITCHEN_AND_MESS_HALL);
	this.learnSkill(EDICT_STATE_OF_THE_ART_INFIRMARY);
	this.learnSkill(EDICT_KI);
	this.learnSkill(EDICT_FOCUS);
	this.learnSkill(EDICT_ESTABLISH_BACKDOOR);
	this.learnSkill(EDICT_SECRETARY_HALBERD);
	this.learnSkill(EDICT_WARDEN_OUTFIT);
	this.learnSkill(EDICT_OFFICE_BED_CRAPPY);
	this.learnSkill(EDICT_OFFICE_PRIVATE_GUARDS);
	this.learnSkill(EDICT_OFFICE_CHEAP_LOCK);
	this.learnSkill(EDICT_SPECIALIZATION_EXPLANATION);
	this.learnSkill(EDICT_INSURANCE_EXPLANATION_1);
	this.learnSkill(EDICT_INSURANCE_EXPLANATION_2);
	this.learnSkill(EDICT_NO_CLASSES);
	this.learnSkill(EDICT_RECEPTION_POLICY_NEUTRAL);
	
	
	//Title based unlocks
	if(this.hasThisTitle(TITLE_ID_COUNTERATTACK_THREE)) this.learnSkill(EDICT_COUNTER_STANCE);
	if(this.hasThisTitle(TITLE_ID_SLASH_THREE)) this.learnSkill(EDICT_SLASH_TRAINING_TWO);
	if(this.hasThisTitle(TITLE_ID_PIERCE_THREE)) this.learnSkill(EDICT_THRUST_TRAINING_TWO);
	if(this.hasThisTitle(TITLE_ID_BLUNT_THREE)) this.learnSkill(EDICT_STRIKE_TRAINING_TWO);
	if(this.hasThisTitle(TITLE_ID_STRENGTH_THREE)) this.learnSkill(EDICT_SLAM_TRAINING_ONE);
	if(this.hasThisTitle(TITLE_ID_DEXTERITY_THREE)) this.learnSkill(EDICT_CLEAVE_TRAINING_ONE);
	if(this.hasThisTitle(TITLE_ID_AGILITY_THREE)) this.learnSkill(EDICT_SKEWER_TRAINING_ONE);
	if(this.hasThisTitle(TITLE_ID_ENDURANCE_THREE)) this.learnSkill(EDICT_DEFENSIVE_STANCE);
	if(this.hasThisTitle(TITLE_ID_MIND_THREE)) this.learnSkill(EDICT_HEALING_THOUGHTS_ONE);
};

Remtairy.Edicts.Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
	Remtairy.Edicts.Game_Actor_learnSkill.call(this, skillId);
	if($dataSkills[skillId].hasTag == void 0) { return; }
	let skill = $dataSkills[skillId];
	
	if(skill.hasTag(TAG_ACCESSORY_EDICT)) {
		$gameParty.gainItem($dataArmors[skillId], 1, true);
		$gameParty.increaseCorruption(1);
	}
	
	if(skill.edictOrder !== 0) $gameParty.increaseOrder(skill.edictOrder);
	if(skill.edictOrderPerDay !== 0) $gameParty.increaseOrderChangePerDay(skill.edictOrderPerDay);
	if(skill.edictCorruption !== 0) $gameParty.increaseCorruption(skill.edictCorruption);
	if(skill.edictIncome !== 0) $gameParty.increaseIncome(skill.edictIncome);
	if(skill.edictExpense !== 0) $gameParty.increaseExpense(skill.edictExpense);
	if(skill.edictGuardAggression !== 0) $gameParty.increaseGuardAggression(skill.edictGuardAggression);
	
	if(skill.edictBarReputation !== 0) $gameParty.increaseBarReputation(skill.edictBarReputation);
	if(skill.edictReceptionistSatisfaction !== 0) $gameParty.increaseReceptionistSatisfaction(skill.edictReceptionistSatisfaction);
	if(skill.edictReceptionistFame !== 0) $gameParty.increaseReceptionistFame(skill.edictReceptionistFame);
	if(skill.edictReceptionistNotoriety !== 0) $gameParty.increaseReceptionistNotoriety(skill.edictReceptionistNotoriety);
	
	if(skill.edictSwitch !== 0) $gameSwitches.setValue(skill.edictSwitch, true);
	
	//Specific Edicts
	if(skillId === EDICT_REPAIR_RESEARCH) {
		$gameParty._enableResearchEdicts = true;
	}
	
	//Remove Edict
	if(skill.edictRemove.length > 0) {
		for(let i = 0; i < skill.edictRemove.length; ++i) {
			this.forgetSkill(skill.edictRemove[i]);
		}
	}
};

//Reset Edicts
Remtairy.Edicts.Game_Actor_forgetSkill = Game_Actor.prototype.forgetSkill;
Game_Actor.prototype.forgetSkill = function(skillId) {
	Remtairy.Edicts.Game_Actor_forgetSkill.call(this, skillId);
	let skill = $dataSkills[skillId];
	
	if(skill.hasTag(TAG_ACCESSORY_EDICT)) {
		$gameParty.gainItem($dataArmors[skillId], -1, true);
	}
	
	if(skill.edictIncome !== 0) $gameParty.increaseIncome(-skill.edictIncome);
	if(skill.edictExpense !== 0) $gameParty.increaseExpense(-skill.edictExpense);
	if(skill.edictOrderPerDay !== 0) $gameParty.increaseOrderChangePerDay(-skill.edictOrderPerDay);
	
	if(skill.edictSwitch !== 0) {
		$gameSwitches.setValue(skill.edictSwitch, false);
	}
};

Karryn.showLevelOneSubjugatedEdicts = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).showLevelOneSubjugatedEdicts();
};
Karryn.showLevelTwoSubjugatedEdicts = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).showLevelTwoSubjugatedEdicts();
};
Karryn.showLevelThreeSubjugatedEdicts = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).showLevelThreeSubjugatedEdicts();
};
Karryn.showLevelFourSubjugatedEdicts = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).showLevelFourSubjugatedEdicts();
};

Game_Actor.prototype.showLevelOneSubjugatedEdicts = function() {
	return !Prison.prisonLevelOneIsUnknown() && !Prison.prisonLevelOneIsAnarchy();
};
Game_Actor.prototype.showLevelTwoSubjugatedEdicts = function() {
	return !Prison.prisonLevelTwoIsUnknown() && !Prison.prisonLevelTwoIsAnarchy();
};
Game_Actor.prototype.showLevelThreeSubjugatedEdicts = function() {
	return !Prison.prisonLevelThreeIsUnknown() && !Prison.prisonLevelThreeIsAnarchy();
};
Game_Actor.prototype.showLevelFourSubjugatedEdicts = function() {
	return !Prison.prisonLevelFourIsUnknown() && !Prison.prisonLevelFourIsAnarchy();
};

/////////////
// Edict Points
///////////////

Game_Actor.prototype.getStoredEdictPoints = function() {
	return this._storedEdictPoints;
};

Game_Actor.prototype.resetEdictPoints = function() {
	this._storedEdictPoints = 0;
	this.setAsp(0);
};

Game_Actor.prototype.getNewDayEdictPoints = function() {
	let unusedPoints = Math.max(this._storedEdictPoints, this.stsAsp());
	this.resetEdictPoints();
	
	let points = 2;
	if(Prison.easyMode()) points++;
	else if(Prison.hardMode() && Prison.date % 2 === 0) points--;
	
	if(this.hasEdict(EDICT_PARTIALLY_RESTORE_BUREAUCRACY)) {
		if(this.hasEdict(EDICT_REDIRECT_SUBSIDIES)) {
			if(Prison.date % 2 === 1)
				points++;
		}
		else
			points++;
	}
		
	
	let maxCarryover = 0;
	maxCarryover += this.titleEfficientAdminstrator_carryoverUnusedEdictPoint();
	if(this.hasEdict(EDICT_REPAIR_MEETING_ROOM)) maxCarryover += 1;
	
	points += Math.min(maxCarryover, unusedPoints);
	
	this._storedEdictPoints = points;
};

Game_Actor.prototype.transferEdictPointsToStorage = function() {
	if(this.stsAsp() > 0) {
		this._storedEdictPoints = this.stsAsp();
		this.setAsp(0);
	}
};
Game_Actor.prototype.transferEdictPointsFromStorage = function() {
	if(this._storedEdictPoints > 0) {
		this.getAsp(this._storedEdictPoints);
		this._storedEdictPoints = 0;
	}
};



///////
// Edict Gold Cost
// Edict Cost
////////////////

Game_Actor.prototype.modifiedEdictGoldCost = function(originalCost, skillId) {
	return Math.round(originalCost * this.getEdictGoldRate(skillId));
};

Game_Actor.prototype.getEdictGoldRate = function(skillId) {
	let rate = 1;
	
	if(this.hasEdict(EDICT_REPAIR_RESEARCH)) {
		rate -= 0.05;
	}
	
	rate *= this.titlesEdictCostRate();
	if(this.isEquippingThisAccessory(NECKLACE_JADE_ID)) rate *= 1.2;
	
	if(skillId) {
		if($dataSkills[skillId].hasTag(TAG_RESEARCH_EDICT))
			rate *= this.getResearchEdictGoldRate();
		else if($dataSkills[skillId].hasTag(TAG_INSURANCE_BUY_EDICT))
			rate *= this.getInsuranceBuyEdictGoldRate();
		else if($dataSkills[skillId].hasTag(TAG_ACCESSORY_EDICT))
			rate *= this.getAccessoryEdictGoldRate();
		else if($dataSkills[skillId].hasTag(TAG_STR_TRAINING_EDICT) || $dataSkills[skillId].hasTag(TAG_DEX_TRAINING_EDICT) || $dataSkills[skillId].hasTag(TAG_AGI_TRAINING_EDICT) || $dataSkills[skillId].hasTag(TAG_MIND_TRAINING_EDICT) || $dataSkills[skillId].hasTag(TAG_END_TRAINING_EDICT))
			rate *= this.getStatTrainingEdictGoldRate();
		else if(skillId >= EDICT_STAMINA_TRAINING_ONE && skillId <= EDICT_ENERGY_TRAINING_TWO)
			rate *= this.getStatTrainingEdictGoldRate();
	}
	
	return rate;
};

Game_Actor.prototype.getResearchEdictGoldRate = function() {
	let rate = 1;
	
	if(this.hasEdict(EDICT_APPLY_FOR_RESEARCH_GRANTS)) {
		rate -= 0.1;
	}
	
	return rate;
};

Game_Actor.prototype.getInsuranceBuyEdictGoldRate = function() {
	let rate = 1;
	
	if(Prison.prisonLevelOneIsRioting() || Prison.prisonLevelTwoIsRioting() || Prison.prisonLevelThreeIsRioting() || Prison.prisonLevelFourIsRioting() || Prison.prisonLevelFiveIsRioting()) {
		rate = 3;
	}
	else if($gameParty._daysSinceLastPrisonRiot <= 0) {
		rate = 1.5;
	}
	else if($gameParty._daysSinceLastPrisonRiot <= 1) {
		rate = 1.25;
	}
	else if($gameParty._daysSinceLastPrisonRiot <= 2) {
		rate = 1.1;
	}
	
	return rate;
};

Game_Actor.prototype.getAccessoryEdictGoldRate = function() {
	let rate = 1;
	
	if(this.hasEdict(EDICT_RESEARCH_ACCESSORY_DEAL)) {
		rate -= 0.15;
	}
	
	return rate;
};

Game_Actor.prototype.getStatTrainingEdictGoldRate = function() {
	let rate = 1;
	
	if(this.hasEdict(EDICT_RESEARCH_EXPERT_TRAINING_TECH)) {
		rate -= 0.6;
	}
	else if(this.hasEdict(EDICT_RESEARCH_ADVANCED_TRAINING_TECH)) {
		rate -= 0.3;
	}

	return rate;
};


//////////
// Resting Fatigue
// Fatigue Recovery
////////////////////

Game_Actor.prototype.edictsFatigueRestOffice = function() {
	let mapId = $gameMap._mapId;
	let recovery = 25;
	
	//if(this.hasEdict(EDICT_HIRE_A_PHYSICAL_THERAPIST)) recovery += 3;
	
	if(this.hasEdict(EDICT_OFFICE_BED_UPGRADE_THREE)) recovery += 15;
	else if(this.hasEdict(EDICT_OFFICE_BED_UPGRADE_TWO)) recovery += 8;
	else if(this.hasEdict(EDICT_OFFICE_BED_UPGRADE_ONE)) recovery += 4;
	
	if(this.hasEdict(EDICT_OFFICE_AUTO_ELECTRONIC_LOCK)) recovery += 6;
	else if(this.hasEdict(EDICT_OFFICE_HEAVY_DUTY_LOCK)) recovery += 3;
	
	let fatigueRate = 1 + this.fatigue * 0.015;
	return Math.round(recovery * fatigueRate);
};

Game_Actor.prototype.edictsFatigueRestOutside = function(prisonLevel) {
	let mapId = $gameMap._mapId;
	let recovery = 20;
	
	if(mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) recovery = 38;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) recovery = 32;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) recovery = 28;
		else recovery = 24;
	}
	
	
	if(this.hasEdict(EDICT_HIRE_A_PHYSICAL_THERAPIST)) recovery += 3;
	
	let fatigueRate = 1 + this.fatigue * 0.015;
	return Math.round(recovery * fatigueRate);
};

// Sleep quality
Game_Actor.prototype.edictsSleepQuality = function() {
	let sleepLvl = -1;

	let mapId = $gameMap._mapId;
	
	if(mapId === MAP_ID_KARRYN_OFFICE) {
		if(this.hasEdict(EDICT_OFFICE_BED_UPGRADE_THREE)) sleepLvl = 2;
		else if(this.hasEdict(EDICT_OFFICE_BED_UPGRADE_TWO)) sleepLvl = 1;
		else if(this.hasEdict(EDICT_OFFICE_BED_UPGRADE_ONE)) sleepLvl = 0;
		
		if(this.hasEdict(EDICT_OFFICE_AUTO_ELECTRONIC_LOCK) && !$gameSwitches.value(SWITCH_OFFICE_LOCK_IS_OFF))
			sleepLvl += 1;
	}
	else if(mapId === MAP_ID_LVL1_GUARD_STATION || mapId === MAP_ID_LVL2_GUARD_STATION || mapId === MAP_ID_LVL3_GUARD_STATION || mapId === MAP_ID_LVL4_GUARD_STATION) {
		if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) sleepLvl = 2;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) sleepLvl = 1;
		else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) sleepLvl = 0;
		
		if(this.hasEdict(EDICT_RESEARCH_STAFF_SLEEP_PERK)) sleepLvl += 1;
	}
	
	
	let rand = Math.randomInt(6);
	if(rand === 2) sleepLvl--;
	else if(rand === 4 || rand === 5) sleepLvl++;
	
	return sleepLvl;
};

/////////////////////
// Clothing Durability
///////////////////////

Game_Actor.prototype.edictsBonusClothingMaxDurability = function(skillId) {
	let bonus = 0;
	
	if(this.isWearingWardenClothing()) {
		if(this.hasEdict(EDICT_WARDEN_CLOTH_UPGRADE_FOUR)) bonus += 805;
		else if(this.hasEdict(EDICT_WARDEN_CLOTH_UPGRADE_THREE)) bonus += 550;
		else if(this.hasEdict(EDICT_WARDEN_CLOTH_UPGRADE_TWO)) bonus += 330;
		else if(this.hasEdict(EDICT_WARDEN_CLOTH_UPGRADE_ONE)) bonus += 150;
	}
	else if(this.isWearingWaitressClothing()) {
		if(this.hasEdict(EDICT_BAR_WAITRESS_OUTFIT_II)) bonus += 300;
	}
	else if(this.isWearingReceptionistClothing()) {
		if(this.hasEdict(EDICT_RECEPTIONIST_OUTFIT_II)) bonus += 300;
	}
	
	
	return bonus;
};

///////
// Halberd Edicts
/////////////

Game_Actor.prototype.edictsHalberdAttack = function() {
	let halberdAttack = 2.5;
	
	if(this.hasEdict(EDICT_HALBERD_UPGRADE_FOUR)) halberdAttack += 0.5;
	else if(this.hasEdict(EDICT_HALBERD_UPGRADE_THREE)) halberdAttack += 0.4;
	else if(this.hasEdict(EDICT_HALBERD_UPGRADE_TWO)) halberdAttack += 0.3;
	else if(this.hasEdict(EDICT_HALBERD_UPGRADE_ONE)) halberdAttack += 0.15;
	
	if(this.hasEdict(EDICT_HALBERD_OFFENSIVE_SPECIALIZATION)) halberdAttack += 0.2;
	
	return halberdAttack;
};

Game_Actor.prototype.edictsHalberdDefense = function() {
	let halberdDefense = 2.5;
	
	if(this.hasEdict(EDICT_HALBERD_UPGRADE_FOUR)) halberdDefense += 0.5;
	else if(this.hasEdict(EDICT_HALBERD_UPGRADE_THREE)) halberdDefense += 0.4;
	else if(this.hasEdict(EDICT_HALBERD_UPGRADE_TWO)) halberdDefense += 0.3;
	else if(this.hasEdict(EDICT_HALBERD_UPGRADE_ONE)) halberdDefense += 0.15;
	
	if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_SPECIALIZATION)) halberdDefense += 0.2;
	
	return halberdDefense;
};

Game_Actor.prototype.edictsHalberdXParamPlus = function(paramId) {
	let value = 0;
	
	if(paramId === XPARAM_GRAZE_ID) {
		if(this.hasEdict(EDICT_HALBERD_OFFENSIVE_FOUR)) value += 0.17;
		else if(this.hasEdict(EDICT_HALBERD_OFFENSIVE_ONE)) value += 0.07;
	}
	else if(paramId === XPARAM_CNT_ID) {
		if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_FOUR)) value += 0.25;
		else if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_ONE)) value += 0.1;
	}
	else if(paramId === XPARAM_CRIT_EVA_ID) {
		
	}
	
	return value;
};

Game_Actor.prototype.edictsHalberdCriticalMultiplierBonus = function() {
	let value = 0;
	
	if(this.hasEdict(EDICT_HALBERD_OFFENSIVE_TWO)) value += 0.35;
	
	return value;
};

////////////
// Unarmed Edicts
///////////////

Game_Actor.prototype.edictsUnarmedAttack = function() {
	let unarmedAttack = 1;
	
	if(this.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) unarmedAttack += 1;
	else if(this.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_I)) unarmedAttack += 0.75;
	else if(this.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) unarmedAttack += 0.5;
	
	return unarmedAttack;
};

Game_Actor.prototype.edictsUnarmedDefense = function() {
	let unarmedDefense = 1;
	
	if(this.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II)) unarmedDefense += 1;
	else if(this.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_I)) unarmedDefense += 0.75;
	else if(this.hasEdict(EDICT_UNARMED_COMBAT_TRAINING)) unarmedDefense += 0.5;
	
	return unarmedDefense;
};

///////////
// Param
///////////

Game_Actor.prototype.karrynEdictParamBonus = function(paramId) {
	let bonus = 0;
	
	if(paramId === PARAM_MAXENERGY_ID) {
		if(this.hasEdict(EDICT_ENERGY_TRAINING_TWO)) bonus += 20;
		else if(this.hasEdict(EDICT_ENERGY_TRAINING_ONE)) bonus += 10;
	}
	
	return bonus;
};

Game_Actor.prototype.karrynEdictParamRate = function(paramId) {
	let rate = 1;

	//Training Edicts
	let trainingCount = 0;
	if(paramId === PARAM_STRENGTH_ID) trainingCount = this.karrynTrainingEdictsCount_Strength();
	else if(paramId === PARAM_ENDURANCE_ID) trainingCount = this.karrynTrainingEdictsCount_Endurance();
	else if(paramId === PARAM_DEXTERITY_ID) trainingCount = this.karrynTrainingEdictsCount_Dexterity();
	else if(paramId === PARAM_MIND_ID) trainingCount = this.karrynTrainingEdictsCount_Mind();
	else if(paramId === PARAM_AGILITY_ID) trainingCount = this.karrynTrainingEdictsCount_Agility();
	
	if(trainingCount > 0) {
		let multi = 0.05 * trainingCount;
		//for(let i = 1; i < trainingCount; ++i) 
		//	multi += i / 100;

		rate += multi;
	}
	
	if(paramId === PARAM_MAXSTAMINA_ID && this.hasEdict(EDICT_STAMINA_TRAINING_TWO)) rate *= 1.1;
	
	if(paramId === PARAM_MAXSTAMINA_ID && this.hasEdict(EDICT_SPEC_STAMINA_TANK)) rate *= 1.25;
	if(paramId === PARAM_MAXENERGY_ID && this.hasEdict(EDICT_SPEC_ENERGY_TANK)) rate *= 1.1;
	
	//Drug Edicts
	if(paramId === PARAM_STRENGTH_ID && this.hasEdict(EDICT_EXPERIMENTAL_STRENGTH_BOOSTER)) rate *= 1.1;
	if(paramId === PARAM_DEXTERITY_ID && this.hasEdict(EDICT_EXPERIMENTAL_DEXTERITY_BOOSTER)) rate *= 1.1;
	if(paramId === PARAM_ENDURANCE_ID && this.hasEdict(EDICT_EXPERIMENTAL_ENDURANCE_BOOSTER)) rate *= 1.1;
	if(paramId === PARAM_AGILITY_ID && this.hasEdict(EDICT_EXPERIMENTAL_AGILITY_BOOSTER)) rate *= 1.1;
	if(paramId === PARAM_MIND_ID) {
		if(this.hasEdict(EDICT_EXPERIMENTAL_STRENGTH_BOOSTER)) rate *= 0.97;
		if(this.hasEdict(EDICT_EXPERIMENTAL_DEXTERITY_BOOSTER)) rate *= 0.97;
		if(this.hasEdict(EDICT_EXPERIMENTAL_ENDURANCE_BOOSTER)) rate *= 0.97;
		if(this.hasEdict(EDICT_EXPERIMENTAL_AGILITY_BOOSTER)) rate *= 0.97;
	}
	
	
	
	return rate;
}; 

Game_Actor.prototype.karrynEdictXParamPlus = function(id) {
	let value = 0;
	
	if(id === XPARAM_STA_REGEN_ID) {
		if(this.hasEdict(EDICT_STAMINA_TRAINING_THREE)) value += 0.05;
		else if(this.hasEdict(EDICT_STAMINA_TRAINING_ONE)) value += 0.02;
	}

	return value;
};

Game_Actor.prototype.edictsSParamRate = function(id) {
	let rate = 1;

	if(id === SPARAM_EXR_ID) {
		if(this.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) rate *= 1.5;
		else if(this.hasEdict(EDICT_LEVEL_ONE_SUBJUGATED)) rate *= 1.25;
		
	}
	else if(id === XPARAM_CRIT_EVA_ID) {
		if(this.hasEdict(EDICT_SPEC_STAMINA_FOUNDATION)) rate *= 1.2;
	}

	return rate;
};


/////////
// Training Edicts
////////////

Game_Actor.prototype.karrynTrainingEdictsCount_Strength = function() {
	let count = 0;
	
	if(this.hasEdict(EDICT_STRENGTH_TRAINING_FIVE)) count = 5;
	else if(this.hasEdict(EDICT_STRENGTH_TRAINING_FOUR)) count = 4;
	else if(this.hasEdict(EDICT_STRENGTH_TRAINING_THREE)) count = 3;
	else if(this.hasEdict(EDICT_STRENGTH_TRAINING_TWO)) count = 2;
	else if(this.hasEdict(EDICT_STRENGTH_TRAINING_ONE)) count = 1;
	
	if(this.hasEdict(EDICT_STRENGTH_SPECIALIZATION)) count += 2;
	
	return count;
};

Game_Actor.prototype.karrynTrainingEdictsCount_Dexterity = function() {
	let count = 0;
	
	if(this.hasEdict(EDICT_DEXTERITY_TRAINING_FIVE)) count = 5;
	else if(this.hasEdict(EDICT_DEXTERITY_TRAINING_FOUR)) count = 4;
	else if(this.hasEdict(EDICT_DEXTERITY_TRAINING_THREE)) count = 3;
	else if(this.hasEdict(EDICT_DEXTERITY_TRAINING_TWO)) count = 2;
	else if(this.hasEdict(EDICT_DEXTERITY_TRAINING_ONE)) count = 1;
	
	if(this.hasEdict(EDICT_DEXTERITY_SPECIALIZATION)) count += 2;
	
	return count;
};

Game_Actor.prototype.karrynTrainingEdictsCount_Agility = function() {
	let count = 0;
	
	if(this.hasEdict(EDICT_AGILITY_TRAINING_FIVE)) count = 5;
	else if(this.hasEdict(EDICT_AGILITY_TRAINING_FOUR)) count = 4;
	else if(this.hasEdict(EDICT_AGILITY_TRAINING_THREE)) count = 3;
	else if(this.hasEdict(EDICT_AGILITY_TRAINING_TWO)) count = 2;
	else if(this.hasEdict(EDICT_AGILITY_TRAINING_ONE)) count = 1;
	
	if(this.hasEdict(EDICT_AGILITY_SPECIALIZATION)) count += 2;
	
	return count;
};

Game_Actor.prototype.karrynTrainingEdictsCount_Endurance = function() {
	let count = 0;
	
	if(this.hasEdict(EDICT_ENDURANCE_TRAINING_FIVE)) count = 5;
	else if(this.hasEdict(EDICT_ENDURANCE_TRAINING_FOUR)) count = 4;
	else if(this.hasEdict(EDICT_ENDURANCE_TRAINING_THREE)) count = 3;
	else if(this.hasEdict(EDICT_ENDURANCE_TRAINING_TWO)) count = 2;
	else if(this.hasEdict(EDICT_ENDURANCE_TRAINING_ONE)) count = 1;
	
	if(this.hasEdict(EDICT_ENDURANCE_SPECIALIZATION)) count += 2;
	
	return count;
};

Game_Actor.prototype.karrynTrainingEdictsCount_Mind = function() {
	let count = 0;
	
	if(this.hasEdict(EDICT_MIND_TRAINING_FIVE)) count = 5;
	else if(this.hasEdict(EDICT_MIND_TRAINING_FOUR)) count = 4;
	else if(this.hasEdict(EDICT_MIND_TRAINING_THREE)) count = 3;
	else if(this.hasEdict(EDICT_MIND_TRAINING_TWO)) count = 2;
	else if(this.hasEdict(EDICT_MIND_TRAINING_ONE)) count = 1;
	
	if(this.hasEdict(EDICT_MIND_SPECIALIZATION)) count += 2;
	
	return count;
};

Game_Actor.prototype.trainingSpecializationCount = function() {
	let count = 0;
	
	if(this.hasEdict(EDICT_CHARM_SPECIALIZATION)) count++;
	if(this.hasEdict(EDICT_STRENGTH_SPECIALIZATION)) count++;
	if(this.hasEdict(EDICT_DEXTERITY_SPECIALIZATION)) count++;
	if(this.hasEdict(EDICT_AGILITY_SPECIALIZATION)) count++;
	if(this.hasEdict(EDICT_ENDURANCE_SPECIALIZATION)) count++;
	if(this.hasEdict(EDICT_MIND_SPECIALIZATION)) count++;
	
	return count;
};

////////////
// Drug Element Edict
// Plus only with no multiplication from other sources
////////////////

Game_Actor.prototype.karrynEdictDrugElementRate = function() {
	let bonus = 0;
	
	if(this.hasEdict(EDICT_EXPERIMENTAL_STRENGTH_BOOSTER)) bonus += 0.1;
	if(this.hasEdict(EDICT_EXPERIMENTAL_DEXTERITY_BOOSTER)) bonus += 0.1;
	if(this.hasEdict(EDICT_EXPERIMENTAL_ENDURANCE_BOOSTER)) bonus += 0.1;
	if(this.hasEdict(EDICT_EXPERIMENTAL_AGILITY_BOOSTER)) bonus += 0.1;
	
	return bonus;
};

//////////
// Income Rate

Game_Actor.prototype.edictsIncomeRate = function() {
	let rate = 1;

	if(Karryn.hasEdict(EDICT_THE_THUG_PROBLEM)) {
		if(Karryn.hasEdict(EDICT_NO_THUG_LABOR)) rate *= 0.85;
		else if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) rate *= 1;
		else rate *= 0.9;
	}
	
	if(Karryn.hasEdict(EDICT_REPAIR_OFFICE))
		rate *= 1.1;
	
	if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR))
		rate *= 1.03;
	
	if(Karryn.hasEdict(EDICT_HIRE_LAWYER)) {
		rate *= 1 + (0.05 * this.edictSkilledStaffMultipler());
	}
	
	if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_WEAK_ONLY)) rate *= 0.75;
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_WEAK)) rate *= 0.9;
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_STRONG)) rate *= 1.05;
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_STRONG_ONLY)) rate *= 1.1;

	return Math.max(0, rate);
};

/////////
// Variable Income

Game_Actor.prototype.variablePrisonIncome = function() {
	let income = 0;

	//Outsourcing
	if(this.hasEdict(EDICT_PROVIDE_OUTSOURCING) && this.hasEdict(EDICT_REPAIR_MEETING_ROOM)) {
		let unusedPoints = Math.max(this._storedEdictPoints, this.stsAsp());
		let maxCarryover = 1;
		maxCarryover += this.titleEfficientAdminstrator_carryoverUnusedEdictPoint();
	
		income += 100 * Math.max(0, unusedPoints - maxCarryover);
	}

	//Chef
	if(Karryn.hasEdict(EDICT_HIRE_A_CHEF)) {
		let chefIncome = 0;
		
		if(Karryn.hasEdict(EDICT_PAY_FOR_BETTER_FOOD))
			chefIncome += 600;
		if(Karryn.hasEdict(EDICT_GUARD_PAY_FOR_FOOD))
			chefIncome += 400;
		
		income += (chefIncome * this.edictSkilledStaffMultipler());
		
	}

	//Laundry
	if(Karryn.hasEdict(EDICT_REPAIR_LAUNDRY)) {
		if(Karryn.hasEdict(EDICT_NO_FREE_LAUNDRY))
			income += 100;
		else if(Karryn.hasEdict(EDICT_SELL_LAUNDRY_SERVICE))
			income += 50;
	}
	
	//Workshop
	if(Karryn.hasEdict(EDICT_REPAIR_WORKSHOP)) {
		let workshopIncomeRate = 1;
		let workshopIncome = 250;
		
		if(Karryn.hasEdict(EDICT_WORKSHOP_CLASSES)) {
			if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES))
				workshopIncomeRate += 1;
			else
				workshopIncomeRate += 0.5;
		}
		if(Karryn.hasEdict(EDICT_RESEARCH_PRISON_LABOR_LAWS))
			workshopIncomeRate += 0.25;
	
		if(Karryn.hasEdict(EDICT_HARDER_WORKSHOP_PROJECTS))
			workshopIncome += 275;
		else if(Karryn.hasEdict(EDICT_LONGER_WORKSHOP_SHIFTS))
			workshopIncome += 75;
		
		income += Math.round(workshopIncome * workshopIncomeRate);
	}
	
	//Reading Room
	if(Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS)) {
		if(Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) 
			income += 100;
		
	}

	return income;
};

//////////
// Expense Rate

Game_Actor.prototype.edictsExpenseRate = function() {
	let rate = 1;

	if(this.hasEdict(EDICT_HIRE_ACCOUNTANT)) {
		let accountantRate = 0.1;
		
		if(this.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT))
			accountantRate += 0.05;
		
		rate *= 1 - (accountantRate * this.edictSkilledStaffMultipler());
	}
	
	if(this.hasEdict(EDICT_RESEARCH_WEIRD_TAX_LEGALITIES)) rate *= 0.9;
	else if(this.hasEdict(EDICT_RESEARCH_OBSOLETE_TAX_CODE)) rate *= 0.95;
	
	if(this.hasEdict(EDICT_RESEARCH_PRISON_AUDIT)) rate *= 0.95;

	return rate;
};

///////////
// Variable Expense

Game_Actor.prototype.variablePrisonExpense = function() {
	let expense = 0;

	if(this.hasEdict(EDICT_LOUNGE_ISNT_FREE_ANYMORE) && this.hasEdict(EDICT_REPAIR_STAFF_LOUNGE)) {
		expense -= 80;
	}

	if(Karryn.hasEdict(EDICT_REPAIR_DISHWASHING)) {
		if(Karryn.hasEdict(EDICT_HIRE_DISHWASHERS) && !Karryn.hasEdict(EDICT_USE_INMATE_DISHWASHERS))
			expense += 100;
	}
	

	if(Karryn.hasEdict(EDICT_REPAIR_CLASSROOM)) {
		if(Karryn.hasEdict(EDICT_WORKSHOP_CLASSES)) {
			if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES))
				expense += 200;
			else
				expense += 100;
		}
		else if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES) || Karryn.hasEdict(EDICT_REFORM_CLASSES)) {
			if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES))
				expense += 150;
			else
				expense += 75;
		}
	}

	return expense;
};

///////////
// Variable Control

Game_Actor.prototype.variablePrisonControl = function() {
	let control = 0;

	if(Karryn.hasEdict(EDICT_REPAIR_DISHWASHING)) {
		if(Karryn.hasEdict(EDICT_HIRE_DISHWASHERS))
			control += 1;
	}
	
	if(Karryn.hasEdict(EDICT_HIRE_A_CHEF)) {
		let chefControl = 1;
		
		if(Karryn.hasEdict(EDICT_EXPAND_INMATE_MENU))
			chefControl += 1;
		if(Karryn.hasEdict(EDICT_GOURMET_GUARD_MEALS))
			chefControl += 1;
		
		control += (chefControl * this.edictSkilledStaffMultipler());
		
	}
	

	return control;
};

//Staff Efficiency
Game_Actor.prototype.edictSkilledStaffMultipler = function() {
	let rate = 1;

	if($gameParty._gold === 0) {
		rate = 0;
	}
	else if(!Karryn.hasEdict(EDICT_REPAIR_STAFF_LOUNGE)) {
		rate -= 0.5;
		if(Karryn.hasEdict(EDICT_STAFF_NEED_TO_PAY_IN_STORE))
			rate -= 0.2;
		if(Karryn.hasEdict(EDICT_LOUNGE_ISNT_FREE_ANYMORE))
			rate -= 0.2;
		if(Karryn.hasEdict(EDICT_RESEARCH_STAFF_SLEEP_PERK))
			rate += 0.25;
		
	}
	
	rate = Math.max(0, rate);
	rate = Math.min(1, rate);
	
	return rate;
};

/////////
// Subsidies

Game_Actor.prototype.edictsSubsidies_Flat = function() {
	let value = 0;

	if(this.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) value += 1600;
	else if(this.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) value += 1200;
	else if(this.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) value += 800;
	else if(this.hasEdict(EDICT_LEVEL_ONE_SUBJUGATED)) value += 400;
	
	
	if(this.hasEdict(EDICT_REPAIR_CLASSROOM) && this.hasEdict(EDICT_REFORM_CLASSES)) {
		if(this.hasEdict(EDICT_MANDATORY_CLASSES)) value += 600;
		else value += 300;
	}
	
	if(this.hasEdict(EDICT_REPAIR_READING_ROOM) && this.hasEdict(EDICT_STOCK_WITH_IMPERIAL_BOOKS)) {
		value += 200;
	}
	
	if(this.hasEdict(EDICT_RECEPTION_POLICY_STRONG_ONLY)) value += 300;
	else if(this.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_STRONG)) value += 150;
	
	return value;
};

Game_Actor.prototype.edictsSubsidies_Rate = function() {
	let rate = 1;
	
	if(this.hasEdict(EDICT_REDIRECT_SUBSIDIES)) rate -= 0.15;
	else if(this.hasEdict(EDICT_PARTIALLY_RESTORE_BUREAUCRACY)) rate -= 0.3;
	else if(this.hasEdict(EDICT_REPAIR_OFFICE)) rate -= 0.25;
	
	if(this.hasEdict(EDICT_REPAIR_RESEARCH)) {
		if(this.hasEdict(EDICT_APPLY_FOR_RESEARCH_GRANTS)) rate -= 0.3;
		else rate -= 0.1;
	}
	
	if(this.hasEdict(EDICT_RECEPTION_POLICY_WEAK_ONLY)) rate -= 0.4;
	else if(this.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_WEAK)) rate -= 0.15;
	
	return Math.max(0,rate);
};

////////////
// Store Income

Game_Party.prototype.getStoreIncome = function() {
	if(!Karryn.hasEdict(EDICT_REPAIR_STORE)) return 0;
	let storeIncome = 50;
	
	if(Karryn.hasEdict(EDICT_RESEARCH_DRUG_CONTRACT)) storeIncome += 25;
	if(Karryn.hasEdict(EDICT_RESEARCH_APHRODISIAC_CONTRACT)) storeIncome += 30;
	if(Karryn.hasEdict(EDICT_RESEARCH_LAUNDRY_PRODUCT_CONTRACT)) storeIncome += 20;
	if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) storeIncome += 35;
	
	storeIncome *= this.getStoreIncomeMultipler();
	return Math.round(storeIncome);
};

Game_Party.prototype.getStoreIncomeMultipler = function() {
	let multipler = 1;
	
	if(Karryn.hasEdict(EDICT_GUARDS_NEED_TO_PAY_IN_STORE)) multipler += 1;
	if(Karryn.hasEdict(EDICT_STAFF_NEED_TO_PAY_IN_STORE)) multipler += 0.5;
	if(Karryn.hasEdict(EDICT_INMATES_ALLOWED_TO_USE_STORE)) multipler += 2;
	
	return multipler;
};


///////////////
// Invasion Chance
///////////////

Game_Actor.prototype.getInvasionChance = function() {
	let chance = 0;

	if(Prison.currentlyOutsidePrison()) chance = this.getInvasionChance_Outside();
	else if(Prison.currentlyPrisonLevelOne()) chance = this.getInvasionChance_LevelOne();
	else if(Prison.currentlyPrisonLevelTwo()) chance = this.getInvasionChance_LevelTwo();
	else if(Prison.currentlyPrisonLevelThree()) chance = this.getInvasionChance_LevelThree();
	else if(Prison.currentlyPrisonLevelFour()) chance = this.getInvasionChance_LevelFour();
	else if(Prison.currentlyPrisonLevelFive()) chance = this.getInvasionChance_LevelFive();

	if(Prison.easyMode()) chance *= 0.8;
	else if(Prison.hardMode()) chance *= 1.2;

	return chance;
};

Game_Actor.prototype.getInvasionChance_Outside = function() {
	let chance = -25;
	chance += Prison.guardAggression * 1.3;
	
	if(this.hasEdict(EDICT_OFFICE_VOLUNTEER_GUARDS)) chance += 45;
	else if(this.hasEdict(EDICT_OFFICE_INMATE_GUARDS)) chance += 30;
	else if(this.hasEdict(EDICT_OFFICE_PRISON_GUARDS)) chance += 15;
	
	if($gameSwitches.value(SWITCH_OFFICE_LOCK_IS_OFF)) chance += 15;
	else if(this.hasEdict(EDICT_OFFICE_AUTO_ELECTRONIC_LOCK)) chance -= 25;
	else if(this.hasEdict(EDICT_OFFICE_HEAVY_DUTY_LOCK)) chance -= 10;
	
	if(this.hasEdict(EDICT_OFFICE_INSIDE_CAMERA)) chance -= 15;
	else if(this.hasEdict(EDICT_OFFICE_OUTSIDE_CAMERA)) chance -= 10;
	
	if(this.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS)) chance += 10;
	if(this.hasEdict(EDICT_RESEARCH_STAFF_SLEEP_PERK)) chance += 10;
	
	return chance;
};

Game_Actor.prototype.getInvasionChance_LevelOne = function() {
	let chance = 20;
	
	if(this.hasEdict(EDICT_RESEARCH_NEW_LOCKS)) chance -= 15;
	if(this.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS)) chance += 25;
	if(this.hasEdict(EDICT_RESEARCH_STAFF_SLEEP_PERK)) chance += 20;
	
	return chance;
};

Game_Actor.prototype.getInvasionChance_LevelTwo = function() {
	let chance = 30;
	
	if(this.hasEdict(EDICT_RESEARCH_NEW_LOCKS)) chance -= 15;
	if(this.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS)) chance += 25;
	if(this.hasEdict(EDICT_RESEARCH_STAFF_SLEEP_PERK)) chance += 30;
	
	return chance;
};

Game_Actor.prototype.getInvasionChance_LevelThree = function() {
	let chance = 55;
	
	if(this.hasEdict(EDICT_RESEARCH_NEW_LOCKS)) chance -= 15;
	if(this.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS)) chance += 25;
	
	return chance;
};

Game_Actor.prototype.getInvasionChance_LevelFour = function() {
	let chance = 75;
	
	if(this.hasEdict(EDICT_RESEARCH_NEW_LOCKS)) chance -= 15;
	if(this.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS)) chance += 25;
	
	return chance;
};

Game_Actor.prototype.getInvasionChance_LevelFive = function() {
	let chance = 50;
	
	return chance;
};

//////////////
//////////////////
// Game Enemy
///////////////////
////////////////

Game_Enemy.prototype.prisonGuardEdictParamRate = function(paramId) {
	let rate = 1;

	if(paramId === PARAM_AGILITY_ID) {
		if(this.isStateAffected(STATE_SLOW_ID) && Karryn.hasEdict(EDICT_SPEC_LEG_THRUST_POWER))
			rate *= 0.5;
	}

	//Guard Training
	let trainingRate = 1;
	if(Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING)) trainingRate += 0.35;
	else if(Karryn.hasEdict(EDICT_BASIC_GUARD_TRAINING)) trainingRate += 0.15;
	
	if(trainingRate !== 1) {
		if(paramId === PARAM_MAXSTAMINA_ID) rate *= trainingRate;
		if(paramId === PARAM_STRENGTH_ID) rate *= trainingRate;
		if(paramId === PARAM_ENDURANCE_ID) rate *= trainingRate;
		if(paramId === PARAM_DEXTERITY_ID) rate *= trainingRate;
		if(paramId === PARAM_CHARM_ID) rate *= trainingRate;
	}
	
	//Steroids
	if(Karryn.hasEdict(EDICT_STEROIDS_FOR_GUARDS)) {
		if(paramId === PARAM_MAXSTAMINA_ID) rate *= 1.25;
		if(paramId === PARAM_STRENGTH_ID) rate *= 1.25;
	}
	//Sex Endurance Drug
	if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_GUARDS)) {
		if(paramId === PARAM_ENDURANCE_ID) rate *= 1.3;
	}
	//Performance Enhancement Drug
	if(Karryn.hasEdict(EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS)) {
		if(paramId === PARAM_MAXENERGY_ID) rate *= 1.3;
	}

	//Store
	if(Karryn.hasEdict(EDICT_REPAIR_STORE)) {
		rate *= 1.05;
	}
	
	//Rogue Guard Training
	if(Karryn.hasEdict(EDICT_ROGUE_TRAINING_FOR_GUARDS)) {
		rate *= 1.05;
	}
	
	//Research
	if(Karryn.hasEdict(EDICT_RESEARCH_DRUG_CONTRACT)) {
		rate *= 1.1;
	}

	return rate;
}; //End Guard

//Inmate
Game_Enemy.prototype.inmateEdictParamRate = function(paramId) {
	let rate = 1;

	////////
	// General

	if(paramId === PARAM_AGILITY_ID) {
		if(this.isStateAffected(STATE_SLOW_ID) && Karryn.hasEdict(EDICT_SPEC_LEG_THRUST_POWER))
			rate *= 0.5;
	}

	//Massage
	if(Karryn.hasEdict(EDICT_EXPAND_THERAPY_AREA) && (paramId === PARAM_MAXSTAMINA_ID || paramId === PARAM_MAXENERGY_ID)) {
		rate *= 1.1;
	}
	//Aphrodisiac Food
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD) && paramId === PARAM_CHARM_ID) {
		rate *= 1 - (0.15 * Karryn.edictSkilledStaffMultipler());
	}
	//Aphrodisiac Drug
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES) && paramId === PARAM_CHARM_ID) {
		rate *= 0.85;
	}
	//Sex Endurance Drug
	if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_INMATES)) {
		if(paramId === PARAM_ENDURANCE_ID) rate *= 1.3;
	}
	
	//Turn Blind Eye to Black Market
	if(Karryn.hasEdict(EDICT_TURN_BLIND_EYE_TO_BLACK_MARKET)) {
		if(paramId === PARAM_MAXSTAMINA_ID || paramId === PARAM_STRENGTH_ID || paramId === PARAM_DEXTERITY_ID
		|| paramId === PARAM_AGILITY_ID ) 
			rate *= 1.1;
	}
	
	//Laundry
	if(Karryn.hasEdict(EDICT_REPAIR_LAUNDRY)) {
		rate *= 1.05;
	}
	
	//Store
	if(Karryn.hasEdict(EDICT_INMATES_ALLOWED_TO_USE_STORE)) {
		rate *= 1.1;
	}
	
	//Reading Room
	if(Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) {
		rate *= 1.05;
	}
	else if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS) && paramId === PARAM_CHARM_ID) {
		if(Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS)) rate *= 1.3;
		else rate *= 1.1;
	}
	
	////////
	// Type Specific
	
	//Goblin Edict
	if(paramId === PARAM_AGILITY_ID && this.isGoblinType && Karryn.hasEdict(EDICT_THE_GOBLIN_PROBLEM)) {
		if(Karryn.hasEdict(EDICT_ANTI_GOBLIN_SQUAD)) rate *= 0.93;
		else rate *= 1.33;
	}
	
	//Thug Edict
	if(this.isThugType && Karryn.hasEdict(EDICT_THE_THUG_PROBLEM)) {
		if(Karryn.hasEdict(EDICT_WEAKEN_THE_THUGS)) 
			rate *= 0.75;
		
		if(paramId === PARAM_MAXSTAMINA_ID) rate *= 1.5;
		else if(paramId === PARAM_STRENGTH_ID) {
			if(Karryn.hasEdict(EDICT_NO_THUG_LABOR))
				rate *= 1.15;
			else
				rate *= 1.3;
		}
	}
	
	//Nerd and Reading Room
	if(this.isNerdType && Karryn.hasEdict(EDICT_REPAIR_READING_ROOM)) {
		rate *= 1.1;
		if(Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS))
			rate *= 1.1;
	}
	
	//Research
	if(Karryn.hasEdict(EDICT_RESEARCH_DRUG_CONTRACT)) {
		rate *= 1.05;
	}
	if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) {
		rate *= 1.1;
	}
	
	return rate;
}; //End Inmate

/////////
// XParam Plus
Game_Enemy.prototype.enemyEdictXParamPlus = function(paramId) {
	let value = 0;
	
	if(Karryn.isUsingHalberd()) {
		if(paramId === XPARAM_GRAZE_ID && Karryn.hasEdict(EDICT_HALBERD_DEFENSIVE_THREE)) value -= 0.07;
		if(paramId === XPARAM_CRIT_EVA_ID && Karryn.hasEdict(EDICT_HALBERD_OFFENSIVE_THREE)) value -= 0.2;
	}
	
	return value;
};

/////////
// XParam Rate
Game_Enemy.prototype.enemyEdictXParamRate = function(paramId) {
	let rate = 1;
	
	
	if(paramId === XPARAM_EVA_ID) {
		if(this.isGoblinType && Karryn.hasEdict(EDICT_DEMEAN_GOBLINS))
			rate *= 0.4;
		
		if(this.isStateAffected(STATE_DIZZY_ID) && Karryn.hasEdict(EDICT_SPEC_HEAD_STRIKE_POWER))
			rate *= 0.5;
	}
	else if(paramId === XPARAM_HIT_ID) {
		if(this.isStateAffected(STATE_DIZZY_ID) && Karryn.hasEdict(EDICT_SPEC_HEAD_STRIKE_POWER))
			rate *= 0.6;
		
		if(this.isRogueType && Karryn.hasEdict(EDICT_THE_ROGUE_PROBLEM)) {
			if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR))
				rate *= 1.15;
			else
				rate *= 1.75;
		}
		
	}
	
	return rate;
};



/////////
// SParam Plus
Game_Enemy.prototype.prisonGuardEdictSParamPlus = function(paramId) {
	let value = 0;

	//Guard Equipment
	if(Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING)) {
		if(paramId === SPARAM_WPATK_ID) value += 0.5;
		if(paramId === SPARAM_WPDEF_ID) value += 0.5;
	}
	else if(Karryn.hasEdict(EDICT_BASIC_GUARD_TRAINING)) {
		if(paramId === SPARAM_WPATK_ID) value += 0.25;
		if(paramId === SPARAM_WPDEF_ID) value += 0.25;
	}

	return value;
}; //End Guard

/////////
// XParam Rate
Game_Enemy.prototype.enemyEdictSParamRate = function(paramId) {
	let rate = 1;
	
	
	if(paramId === SPARAM_WPATK_ID) {
		if(this.isStateAffected(STATE_WEAKEN_ID) && Karryn.hasEdict(EDICT_SPEC_ARM_SLASH_POWER))
			rate *= 0.6;
	}
	
	return rate;
};


//////////
// AI Level Edict
/////////////////

Game_Enemy.prototype.prisonGuardEdictAILevel = function() {
	let bonus = 0;
	
	return bonus;
};

Game_Enemy.prototype.inmateEdictAILevel = function() {
	let bonus = 0;
	
	if(Karryn.hasEdict(EDICT_RECREATIONAL_DRUGS_FOR_INMATES)) bonus -= 0.1;

	
	return bonus;
};

/////////////
// Anger Edict
///////////////

Game_Enemy.prototype.prisonGuardEdictAnger = function() {
	let bonus = 0;
	
	bonus += Prison.guardAggression;
	
	return bonus;
};

Game_Enemy.prototype.inmateEdictAnger = function() {
	let bonus = 0;
	
	////////////
	// General
	

	//Inmate Food
	if(Karryn.hasEdict(EDICT_EXPAND_INMATE_MENU)) bonus -= 20;
	else if(Karryn.hasEdict(EDICT_BULK_FOOD_SUPPLIER)) bonus -= 10;
	else bonus += 10;
	
	//Aphrodisiac Food
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) 
		bonus -= 25 * Karryn.edictSkilledStaffMultipler();
	
	//Massage
	if(Karryn.hasEdict(EDICT_EXPAND_THERAPY_AREA)) bonus -= 10;
	
	//Aphrodisiac Drug / Sex Endurance Drug
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) bonus -= 25;
	if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_INMATES)) bonus -= 20;
	
	//Blind Eye to Black Market
	if(Karryn.hasEdict(EDICT_TURN_BLIND_EYE_TO_BLACK_MARKET)) bonus -= 10;
	
	//Anatomy Class
	if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES) && Karryn.hasEdict(EDICT_SUPPLY_MODEL_OF_KARRYNS_BODY)) {
		if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES)) bonus -= 40;
		else bonus -= 20;
	}
	
	//Bodybuilding Book
	if(Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) bonus += 40;
	
	////////////
	// Type specific
	
	if(this.isGoblinType) {
		if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) bonus += 40;
		else if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) bonus -= 40;
	}
	
	if(this.isThugType) {
		if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) bonus -= 40;
	}
	
	if(this.isRogueType) {
		if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) bonus -= 40;
	}
	
	return bonus;
};

//////////////////
// Arousal Point Edict
////////////////////////

Game_Enemy.prototype.prisonGuardEdictArousalPoint = function() {
	let rate = 1;
	
	//Aphrodisiac Food
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_GUARD_FOOD)) 
		rate -= 0.1 * Karryn.edictSkilledStaffMultipler();
	
	return rate;
};

Game_Enemy.prototype.inmateEdictArousalPoint = function() {
	let rate = 1;
	
	//Aphrodisiac Food
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) 
		rate -= 0.1 * Karryn.edictSkilledStaffMultipler();
	//Aphrodisiac Drug
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) rate -= 0.1;

	
	return rate;
};

//////////////////////
// Orgasm Point Edict
////////////////////////

Game_Enemy.prototype.prisonGuardEdictOrgasmPoint = function() {
	let rate = 1;
	
	//Sex Endurance Drug
	if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_GUARDS)) rate += 0.2;
	
	return rate;
};

Game_Enemy.prototype.inmateEdictOrgasmPoint = function() {
	let rate = 1;
	
	//Sex Endurance Drug
	if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_INMATES)) rate += 0.2;

	
	return rate;
};

////////////////////
// Ejaculation Volume Edict
/////////////////////////

Game_Enemy.prototype.prisonGuardEdictEjaculationVolume = function() {
	let rate = 1;
	
	//Aphrodisiac Food
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_GUARD_FOOD)) 
		rate += 0.15 * Karryn.edictSkilledStaffMultipler();
	//Performance Enhancement
	if(Karryn.hasEdict(EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS)) rate += 0.3;
	
	return rate;
};

Game_Enemy.prototype.inmateEdictEjaculationVolume = function() {
	let rate = 1;
	
	//Aphrodisiac Food
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) 
		rate += 0.15 * Karryn.edictSkilledStaffMultipler();
	//Massage
	if(Karryn.hasEdict(EDICT_EXPAND_THERAPY_AREA)) rate += 0.1;
	//Aphrodisiac Drug
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) rate += 0.15;
	
	return rate;
};

///////////
// Sex Skill Edict
//////////////////

Game_Enemy.prototype.enemyEdictSexSkill = function() {
	let value = 0;
	
	if(this.isPrisonGuard) {
		//Performance Enhancement Drug
		if(Karryn.hasEdict(EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS)) value += 2;
		
		//Reading Room
		if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS)) {
			value += 0.5;
		}
	}
	else if(this.isInmate) {
		//Reading Room
		if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS)) {
			value += 1;
			if(Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS))
				value += 0.5;
		}
		
		//Classroom
		if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES)) {
			value += 1;
			if(Karryn.hasEdict(EDICT_SUPPLY_MODEL_OF_KARRYNS_BODY))
				value += 1.5;
		}
		
		//Massage
		if(Karryn.hasEdict(EDICT_EXPAND_THERAPY_AREA)) value += 0.05;
		//Turn Blind Eye to Black Market
		if(Karryn.hasEdict(EDICT_TURN_BLIND_EYE_TO_BLACK_MARKET)) value += 0.15;
	}

	return value;
};

///////////////
/////////////////
// Scene STS
///////////////
///////////////

Scene_STS.prototype.popScene = function() {
	this.closeMenuCalculations();
    SceneManager.pop();
};

Scene_STS.prototype.closeMenuCalculations = function() {
	$gameParty.closeEdictsMenuCalculations();
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasure($gameActors.actor(ACTOR_KARRYN_ID).pleasure);
};

//////////////////
// Data Manager
////////////////

//Edict note tags
DataManager.processRemTMNotetags_RemtairyEdicts = function(group) {
	for (let n = 1; n < group.length; n++) {
		let obj = group[n];
		let notedata = obj.note.split(/[\r\n]+/);
		
		obj.edictOrder = 0;
		obj.edictOrderPerDay = 0;
		obj.edictCorruption = 0;
		obj.edictIncome = 0;
		obj.edictExpense = 0;
		obj.edictGuardAggression = 0;
		obj.edictBarReputation = 0;
		obj.edictReceptionistSatisfaction = 0;
		obj.edictReceptionistFame = 0;
		obj.edictReceptionistNotoriety = 0;
		obj.treeLeftId = 0;
		obj.treeRightId = 0;
		obj.edictSwitch = 0;
		obj.edictRemove = [];
		
		for (let i = 0; i < notedata.length; i++) {
			let line = notedata[i];
			if (line.match(/<EDICT ORDER:[ ](.*)>/i)) {
				obj.edictOrder = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT ORDER PER DAY:[ ](.*)>/i)) {
				obj.edictOrderPerDay = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT CORRUPTION:[ ](.*)>/i)) {
				obj.edictCorruption = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT INCOME:[ ](.*)>/i)) {
				obj.edictIncome = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT EXPENSE:[ ](.*)>/i)) {
				obj.edictExpense = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT GUARD AGGRESSION:[ ](.*)>/i)) {
				obj.edictGuardAggression = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT BAR REPUTATION:[ ](.*)>/i)) {
				obj.edictBarReputation = parseInt(RegExp.$1);	
			} else if (line.match(/<EDICT RECEPTIONIST SATISFACTION:[ ](.*)>/i)) {
				obj.edictReceptionistSatisfaction = parseInt(RegExp.$1);	
			} else if (line.match(/<EDICT RECEPTIONIST FAME:[ ](.*)>/i)) {
				obj.edictReceptionistFame = parseInt(RegExp.$1);	
			} else if (line.match(/<EDICT RECEPTIONIST NOTORIETY:[ ](.*)>/i)) {
				obj.edictReceptionistNotoriety = parseInt(RegExp.$1);					

			} else if (line.match(/<TREE LEFT:[ ](.*)>/i)) {
				obj.treeLeftId = parseInt(RegExp.$1);
			} else if (line.match(/<TREE RIGHT:[ ](.*)>/i)) {
				obj.treeRightId = parseInt(RegExp.$1);
			} else if (line.match(/<EDICT SWITCH:[ ](.*)>/i)) {
				obj.edictSwitch = parseInt(RegExp.$1);
			} else if (line.match(/<(?:EDICT REMOVE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				let array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.edictRemove = [];
				obj.edictRemove = obj.edictRemove.concat(array);
			}
		}
	};
	
};