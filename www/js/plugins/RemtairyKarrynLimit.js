﻿var Remtairy = Remtairy || {};
Remtairy.KarrynLimit = Remtairy.KarrynLimit || {};

//=============================================================================
 /*:
 * @plugindesc Karryn Limit
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

var LIMIT_GUARD_AGGRESSION = 42;

var LIMIT_ESCAPE_TOTAL_COUNT = 15;

var LIMIT_SUBDUED_ERECT_WITH_ATTACK_COUNT = 40;
var LIMIT_SUBDUED_ANGRY_COUNT = 30;
var LIMIT_SUBDUED_TOTAL_COUNT = 200;

var LIMIT_DEFEATED_TOTAL_COUNT = 15;
var LIMIT_DEFEATED_LEVEL_ONE_COUNT = 15;
var LIMIT_DEFEATED_LEVEL_TWO_COUNT = 15;
var LIMIT_DEFEATED_LEVEL_THREE_COUNT = 15;
var LIMIT_DEFEATED_LEVEL_FOUR_COUNT = 15;
var LIMIT_DEFEATED_LEVEL_FIVE_COUNT = 15;

var LIMIT_INVASION_BATTLE_TOTAL_COUNT = 10;
var LIMIT_INVASION_BATTLE_OFFICE_COUNT = 10;
var LIMIT_INVASION_BATTLE_LEVEL_ONE_COUNT = 10;
var LIMIT_INVASION_BATTLE_LEVEL_TWO_COUNT = 10;
var LIMIT_INVASION_BATTLE_LEVEL_THREE_COUNT = 10;
var LIMIT_INVASION_BATTLE_LEVEL_FOUR_COUNT = 10;
var LIMIT_INVASION_BATTLE_LEVEL_FIVE_COUNT = 10;

var LIMIT_MASTURBATED_OFFICE_COUNT = 10;
var LIMIT_MASTURBATED_GUARD_STATION_COUNT = 10;
var LIMIT_MASTURBATED_TOTAL_COUNT = 15;

var LIMIT_FIX_CLOTHES_USAGE_COUNT = 40;
var LIMIT_COCK_KICK_USAGE_COUNT = 30;
var LIMIT_KISS_USAGE_COUNT = 50;
var LIMIT_COCK_STARE_USAGE_COUNT = 30;
var LIMIT_COCK_PET_USAGE_COUNT = 30;
var LIMIT_HANDJOB_USAGE_COUNT = 50;
var LIMIT_BLOWJOB_USAGE_COUNT = 30;
var LIMIT_RIMJOB_USAGE_COUNT = 30;
var LIMIT_FOOTJOB_USAGE_COUNT = 30;
var LIMIT_TITTY_FUCK_USAGE_COUNT = 30;
var LIMIT_PUSSY_SEX_USAGE_COUNT = 30;
var LIMIT_ANAL_SEX_USAGE_COUNT = 30;

var LIMIT_CLOTHES_STRIPPED = 75;
var LIMIT_PANTIES_STRIPPED = 10;

var LIMIT_KISSED_COUNT = 100;
var LIMIT_HANDJOB_COUNT = 70;
var LIMIT_BLOWJOB_COUNT = 70;
var LIMIT_TITTYFUCK_COUNT = 50;
var LIMIT_PUSSYFUCKED_COUNT = 15;
var LIMIT_ANALFUCKED_COUNT = 35;
var LIMIT_BOOBS_PETTED_COUNT = 250;
var LIMIT_NIPPLES_PETTED_COUNT = 50;
var LIMIT_BUTT_PETTED_COUNT = 250;
var LIMIT_ANAL_PETTED_COUNT = 50;
var LIMIT_PUSSY_PETTED_COUNT = 50;
var LIMIT_CLIT_PETTED_COUNT = 250;
var LIMIT_JOB_PETTED_COUNT = 200;

var LIMIT_TALKED_AT_COUNT = 150;
var LIMIT_TALKED_COCK_COUNT = 50;
var LIMIT_SEEN_MOUTH_COUNT = 20;
var LIMIT_SEEN_BOOBS_COUNT = 20;
var LIMIT_SEEN_NIPPLES_COUNT = 20;
var LIMIT_SEEN_CLIT_COUNT = 20;
var LIMIT_SEEN_PUSSY_COUNT = 20;
var LIMIT_SEEN_BUTT_COUNT = 20;
var LIMIT_SEEN_ANAL_COUNT = 20;
var LIMIT_SEEN_ANAL_CREAMPIE_COUNT = 20;
var LIMIT_SEEN_PUSSY_CREAMPIE_COUNT = 20;
var LIMIT_SEEN_BUKKAKE_FACE_COUNT = 20;
var LIMIT_SEEN_BUKKAKE_BOOBS_COUNT = 20;
var LIMIT_SEEN_BUKKAKE_BUTT_COUNT = 20;
var LIMIT_SEEN_MOUTH_SWALLOW_COUNT = 20;
var LIMIT_SEEN_TOTAL_COUNT = 80;


var LIMIT_BUTTSPANKED_COUNT = 50;
var LIMIT_SEEJERKOFF_COUNT = 20;
var LIMIT_FINGERS_SUCKED_COUNT = 20;
var LIMIT_CUNNILINGUS_COUNT = 20;
var LIMIT_RIMJOB_COUNT = 20;
var LIMIT_FOOTJOB_COUNT = 20;
var LIMIT_COCK_PETTED_COUNT = 20;
var LIMIT_KARRYN_TAUNT_COUNT = 40;
var LIMIT_KARRYN_FLAUNT_COUNT = 40;
var LIMIT_KARRYN_DOGEZA_COUNT = 20;
var LIMIT_COCKINESS_MAX_COUNT = 4;
var LIMIT_COCKINESS_GAINED_COUNT = 400;

var LIMIT_HORNY_COUNT = 42;
var LIMIT_DEBUFF_OFF_BALANCED_COUNT = 30;
var LIMIT_DEBUFF_FALLEN_COUNT = 20;
var LIMIT_DEBUFF_DISARMED_COUNT = 30;
var LIMIT_DEBUFF_DOWN_STAMINA_COUNT = 30;

var LIMIT_KISSED_PEOPLE = 40;
var LIMIT_HANDJOB_PEOPLE = 40;
var LIMIT_BLOWJOB_PEOPLE = 40;
var LIMIT_TITTYFUCK_PEOPLE = 25;
var LIMIT_PUSSYFUCKED_PEOPLE = 15;
var LIMIT_ANALFUCKED_PEOPLE = 35;
var LIMIT_BUKKAKE_PEOPLE = 30;
var LIMIT_SWALLOW_PEOPLE = 30;
var LIMIT_PUSSYCREAMPIE_PEOPLE = 30;
var LIMIT_ANALCREAMPIE_PEOPLE = 30;
var LIMIT_ORGASMPRESENCE_PEOPLE = 10;
var LIMIT_CUNNILINGUS_PEOPLE = 10;
var LIMIT_RIMJOB_PEOPLE = 10;
var LIMIT_FOOTJOB_PEOPLE = 10;
var LIMIT_BUTTSPANKED_PEOPLE = 35;
var LIMIT_FINGERS_SUCKED_PEOPLE = 15;
var LIMIT_BOOBS_PETTED_PEOPLE = 50;
var LIMIT_NIPPLES_PETTED_PEOPLE = 35;
var LIMIT_CLIT_PETTED_PEOPLE = 50;
var LIMIT_PUSSY_PETTED_PEOPLE = 35;
var LIMIT_BUTT_PETTED_PEOPLE = 50;
var LIMIT_ANAL_PETTED_PEOPLE = 50;
var LIMIT_TALKED_AT_PEOPLE = 100;
var LIMIT_TALKED_COCK_PEOPLE = 25;
var LIMIT_SEEN_PEOPLE = 50;
var LIMIT_SEEJERKOFF_PEOPLE = 25;
var LIMIT_COCK_PETTED_PEOPLE = 15;
var LIMIT_KARRYN_TAUNT_PEOPLE = 100;
var LIMIT_KARRYN_FLAUNT_PEOPLE = 100;
var LIMIT_KARRYN_DOGEZA_PEOPLE = 30;
var LIMIT_KARRYN_TOYS_INSERTED_BY_ENEMY_PEOPLE = 15;

var LIMIT_MOUTH_PLEASURE = 750;
var LIMIT_BOOBS_PLEASURE = 750;
var LIMIT_NIPPLES_PLEASURE = 750;
var LIMIT_PUSSY_PLEASURE = 750;
var LIMIT_CLIT_PLEASURE = 750;
var LIMIT_BUTT_PLEASURE = 750;
var LIMIT_ANAL_PLEASURE = 750;
var LIMIT_FINGERS_PLEASURE = 750;
var LIMIT_TOYS_PLEASURE = 750;
var LIMIT_TALK_PLEASURE = 750;
var LIMIT_SIGHT_PLEASURE = 750;
var LIMIT_BUKKAKE_PLEASURE = 750;
var LIMIT_SWALLOW_PLEASURE = 750;
var LIMIT_PUSSYCREAMPIE_PLEASURE = 750;
var LIMIT_ANALCREAMPIE_PLEASURE = 750;
var LIMIT_MASOCHISM_PLEASURE = 750;
var LIMIT_SADISM_PLEASURE = 750;

var LIMIT_BUKKAKE_FACE_COUNT = 15;
var LIMIT_BUKKAKE_ARMS_COUNT = 15;
var LIMIT_BUKKAKE_BOOBS_COUNT = 15;
var LIMIT_BUKKAKE_BUTT_COUNT = 15;
var LIMIT_BUKKAKE_TOTAL_COUNT = 15;

var LIMIT_BUKKAKE_FACE_ML = 200;
var LIMIT_BUKKAKE_ARMS_ML = 200;
var LIMIT_BUKKAKE_LEGS_ML = 200;
var LIMIT_BUKKAKE_BOOBS_ML = 200;
var LIMIT_BUKKAKE_BUTT_ML = 200;
var LIMIT_BUKKAKE_TOTAL_ML = 1000;

var LIMIT_SWALLOW_COUNT = 15;
var LIMIT_ANALCREAMPIE_COUNT = 15;
var LIMIT_PUSSYCREAMPIE_COUNT = 15;
var LIMIT_ALL_HOLES_CREAMED_COUNT = 15;

var LIMIT_SWALLOW_ML = 500;
var LIMIT_ANALCREAMPIE_ML = 200;
var LIMIT_PUSSYCREAMPIE_ML = 200;

var LIMIT_ORGASM_COUNT = 50;
var LIMIT_ORGASM_ML = 100;
var LIMIT_PUSSY_DRIP_TENTHML = 1000;

var LIMIT_ORGASM_FROM_KISS = 5;
var LIMIT_ORGASM_FROM_TALK = 5;
var LIMIT_ORGASM_FROM_SIGHT = 5;
var LIMIT_ORGASM_FROM_PETTING = 5;
var LIMIT_ORGASM_FROM_CUNNILINGUS = 5;
var LIMIT_ORGASM_FROM_HANDJOB = 5;
var LIMIT_ORGASM_FROM_BLOWJOB = 5;
var LIMIT_ORGASM_FROM_TITTYFUCK = 5;
var LIMIT_ORGASM_FROM_PUSSYSEX = 5;
var LIMIT_ORGASM_FROM_ANALSEX = 5;
var LIMIT_ORGASM_FROM_CUMSWALLOW = 5;
var LIMIT_ORGASM_FROM_PUSSYCREAMPIE = 5;
var LIMIT_ORGASM_FROM_ANALCREAMPIE = 5;
var LIMIT_ORGASM_FROM_BUKKAKE = 5;
var LIMIT_ORGASM_FROM_SPANKING = 5;
var LIMIT_ORGASM_FROM_MASOCHISM = 5;
var LIMIT_ORGASM_FROM_SADISM = 5;
var LIMIT_ORGASM_FROM_MASTURBATION = 5;
var LIMIT_ORGASM_FROM_TOYS = 5;

var LIMIT_TOTAL_EJACULATION_COUNT = 25;
var LIMIT_TOTAL_EJACULATION_ML = 200;

var LIMIT_SEXUAL_PARTNERS_PRISONER = 20;
var LIMIT_SEXUAL_PARTNERS_GUARD = 22;
var LIMIT_SEXUAL_PARTNERS_GOBLIN = 22;
var LIMIT_SEXUAL_PARTNERS_THUG = 22;
var LIMIT_SEXUAL_PARTNERS_SLIME = 22;
var LIMIT_SEXUAL_PARTNERS_NERD = 22;
var LIMIT_SEXUAL_PARTNERS_ROGUE = 22;
var LIMIT_SEXUAL_PARTNERS_LIZARDMAN = 22;
var LIMIT_SEXUAL_PARTNERS_ORC = 22;
var LIMIT_SEXUAL_PARTNERS_HOMELESS = 22;
var LIMIT_SEXUAL_PARTNERS_VISITOR = 32;

var LIMIT_VIRGINITIES_TAKEN_VIA_PUSSY = 15;
var LIMIT_VIRGINITIES_TAKEN_VIA_ANAL = 15;

var LIMIT_MAX_REACHED_MOUTH_DESIRE_COUNT = 20;
var LIMIT_MAX_REACHED_BOOBS_DESIRE_COUNT = 20;
var LIMIT_MAX_REACHED_PUSSY_DESIRE_COUNT = 20;
var LIMIT_MAX_REACHED_BUTT_DESIRE_COUNT = 20;
var LIMIT_MAX_REACHED_COCK_DESIRE_COUNT = 20;
var LIMIT_MAX_REACHED_ALL_DESIRE_COUNT = 20;


var LIMIT_KICK_COUNTER_SEX_COUNT = 30;
var LIMIT_DOUBLE_PENETRATION_COUNT = 69;
var LIMIT_TRIPLE_PENETRATION_COUNT = 30;
var LIMIT_BLOWBANG_COUNT = 999;
var LIMIT_URINAL_COUNT = 999;

var LIMIT_MANUALLY_REMOVED_CLIT_TOY_COUNT = 20;
var LIMIT_MANUALLY_REMOVED_PUSSY_TOY_COUNT = 20;
var LIMIT_MANUALLY_REMOVED_ANAL_TOY_COUNT = 20;

var LIMIT_CLIT_TOY_INSERTED_COUNT = 10;
var LIMIT_PUSSY_TOY_INSERTED_COUNT = 10;
var LIMIT_ANAL_TOY_INSERTED_COUNT = 10;

var LIMIT_CLIT_TOY_USED_BY_ENEMY_COUNT = 20;
var LIMIT_PUSSY_TOY_USED_BY_ENEMY_COUNT = 20;
var LIMIT_ANAL_TOY_USED_BY_ENEMY_COUNT = 20;