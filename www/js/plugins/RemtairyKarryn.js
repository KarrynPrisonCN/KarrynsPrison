var Remtairy = Remtairy || {};
Remtairy.Karryn = Remtairy.Karryn || {};

const SLUT_LVL_THRESHOLD_STAGE_1 = 20; //Less than this number for Stage x, so Stage 1 is 1~19
const SLUT_LVL_THRESHOLD_STAGE_2 = 45; //20~44
const SLUT_LVL_THRESHOLD_STAGE_3 = 75; //45~74
const SLUT_LVL_THRESHOLD_STAGE_4 = 125; //75~124
const SLUT_LVL_THRESHOLD_STAGE_5 = 200; //unused, Stage 5 is currently 125+

const VAR_ACCESSORY_CHARM_REQ_1 = 18;
const VAR_ACCESSORY_CHARM_REQ_2 = 24;
const VAR_ACCESSORY_CHARM_REQ_3 = 32;
const VAR_ACCESSORY_CHARM_REQ_4 = 42;
const VAR_ACCESSORY_CHARM_REQ_5 = 69;

const VAR_NONATTACK_DESIRE_REQ = 0.66;
const VAR_PANTIES_TOY_DESIRE_REQ = 1.15; //unused

const VAR_BREATH_H = 0.05;
const VAR_BREATH_SPEED_MIN = 0.4;

const VAR_STARTING_AGE = 26;

const ARMOR_TAG_EARRINGS = 'Earrings';
const ARMOR_TAG_RING = 'Ring';
const ARMOR_TAG_NECKLACE = 'Necklace';
const ARMOR_TAG_BRACELET = 'Bracelet';
const ARMOR_TAG_MISC = 'Misc';

const AREA_MOUTH = 'mouth';
const AREA_BOOBS = 'boobs';
const AREA_NIPPLES = 'nipples';
const AREA_CLIT = 'clit';
const AREA_PUSSY = 'pussy';
const AREA_BUTT = 'butt';
const AREA_ANAL = 'anal';
const AREA_COCK = 'cock';
const AREA_FINGERS = 'fingers';
const AREA_RANDOM = 'random';
const AREA_HANDSHAKE = 'handshake';

const SIGHT_MOUTH = 1;
const SIGHT_BOOBS = 2;
const SIGHT_NIPPLES = 3;
const SIGHT_CLIT = 4;
const SIGHT_PUSSY = 5;
const SIGHT_BUTT = 6;
const SIGHT_ANAL = 7;
const SIGHT_ANAL_CREAMPIE = 8;
const SIGHT_PUSSY_CREAMPIE = 9;
const SIGHT_BUKKAKE_FACE = 10;
const SIGHT_BUKKAKE_BOOBS = 11;
const SIGHT_BUKKAKE_BUTT = 12;
const SIGHT_MOUTH_SWALLOW = 13;
const SIGHT_RANDOM = 14;

const KISS_LVL_ONE = 'kisslvl1';
const KISS_LVL_TWO = 'kisslvl2';

const SPANK_LVL_ONE = 'spanklvl1';
const SPANK_LVL_TWO = 'spanklvl2';
const SPANK_LVL_THREE = 'spanklvl3';

const TOY_PINK_ROTOR = 'pinkrotor';
const TOY_PENIS_DILDO = 'penisdildo';
const TOY_ANAL_BEAD = 'analbead';

const SEXACT_HANDJOB = 'handjob';
const SEXACT_BLOWJOB = 'blowjob';
const SEXACT_TITTYFUCK = 'tittyfuck';
const SEXACT_PUSSYSEX = 'pussysex';
const SEXACT_ANALSEX = 'analsex';
const SEXACT_CUNNILINGUS = 'cunnilingus';
const SEXACT_RIMJOB = 'rimjob';
const SEXACT_FOOTJOB = 'footjob';

const CUM_BUKKAKE_FACE = 'bukkakeface';
const CUM_BUKKAKE_BOOBS = 'bukkakeboobs';
const CUM_BUKKAKE_BUTT = 'bukkakebutt';
const CUM_BUKKAKE_BUTT_TOPRIGHT = 'bukkakebutttopright';
const CUM_BUKKAKE_BUTT_TOPLEFT = 'bukkakebutttopleft';
const CUM_BUKKAKE_BUTT_BOTTOMRIGHT = 'bukkakebuttbottomright';
const CUM_BUKKAKE_BUTT_BOTTOMLEFT = 'bukkakebuttbottomleft';
const CUM_BUKKAKE_LEFTARM = 'bukkakeleftarm';
const CUM_BUKKAKE_RIGHTARM = 'bukkakerightarm';
const CUM_BUKKAKE_LEFTLEG = 'bukkakeleftleg';
const CUM_BUKKAKE_RIGHTLEG = 'bukkakerightleg';
const CUM_SWALLOW_MOUTH = 'swallowmouth';
const CUM_CREAMPIE_PUSSY = 'creampiepussy';
const CUM_CREAMPIE_ANAL = 'creampieanal';
const CUM_INTO_MUG = 'cumintomug';
const CUM_ONTO_DESK = 'cumontodesk';
const CUM_ONTO_FLOOR = 'cumontofloor';

//=============================================================================
 /*:
 * @plugindesc Karryn
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const ACTOR_KARRYN_ID = 1;

const EQUIP_SLOT_WEAPON_ID = 0;
const EQUIP_SLOT_ACCESSORY_START_ID = 1;
const EQUIP_SLOT_ACCESSORY_END_ID = 5;
const EQUIP_SLOT_TITLE_ID = 6;

const ACCESSORY_ID_START_ONE = 17;
const ACCESSORY_ID_END_ONE = 48;
const ACCESSORY_ID_START_TWO = 430;
const ACCESSORY_ID_END_TWO = 439;

const CLOTHING_ID_WARDEN = 1;
const CLOTHING_ID_NAKED = 2;
const CLOTHING_ID_SECRETARY = 3;
const CLOTHING_ID_WAITRESS = 4;
const CLOTHING_ID_RECEPTIONIST = 5;

const CLOTHES_STARTING_STAGE = 1;

//Stats for default clothing
const CLOTHES_WARDEN_START = 300;
const CLOTHES_WARDEN_MAXSTAGES = 5;
const CLOTHES_STAGE_SLIGHTLY_MOVED = 2;
const CLOTHES_STAGE_SEE_ONE_BOOB = 3;
const CLOTHES_STAGE_SEE_BOTH_BOOBS = 4;
const CLOTHES_STAGE_SEE_PUSSY = 3;
const CLOTHES_STAGE_ACCESS_PUSSY = 4;
const CLOTHES_STAGE_SEE_BUTT = 3;
const CLOTHES_STAGE_ACCESS_ANAL = 4;

const CLOTHES_WAITRESS_START = 400;
const CLOTHES_WAITRESS_MAXSTAGES = 3;

const CLOTHES_RECEPTIONIST_START = 400;
const CLOTHES_RECEPTIONIST_MAXSTAGES = 3;

const PANTIES_STARTER_ID = 1;

//Body slot id
const MOUTH_ID = 1;
const BOOBS_ID = 2;
const NIPPLES_ID = 3;
const RIGHT_HAND_ID = 4;
const LEFT_HAND_ID = 5;
const STOMACH_ID = 6; //for example, paizuri in missionary might require enemy to sit on karryn's stomach
const CLIT_ID = 7; //for example, pussy might be penetrated, but enemy can still play with karryn's clit
const PUSSY_ID = 8;
const BUTT_ID = 9; //exterior bottocks area only
const ANAL_ID = 10; 
const THIGHS_ID = 11; //for example, used in thigh job, and someone wanting to lick karryn's thighs
const FEET_ID = 12;
const OTHER_1_ID = 13;
const OTHER_2_ID = 14;
const OTHER_3_ID = 15;
const OTHER_4_ID = 16;
//Body slot status
const SLOT_FREE = 1; //bodypart != SLOT_FREE  means it is not free
const SLOT_FREE_NO_TOYS = 2; 
const SLOT_FREE_PETTING_ONLY = 3;
const SLOT_FREE_PETTING_ONLY_NO_TOYS = 4;
const SLOT_PETTED_PETTING_ONLY = 5;
const SLOT_PETTED = 10;  //for example, kissing during sex
const SLOT_TOY = 20;
const SLOT_TOY_PETTING_ONLY = 21;
const SLOT_PENIS = 30;
const SLOT_ANUS = 40;
const SLOT_TONGUE = 41;
const SLOT_UNAVAILABLE = 90; // It's not taken by someone, but it can't be used at all
const SLOT_UNAVAILABLE_BUT_HAS_TOY = 91;

//Toy filename
const NO_TOY = 0;
const CLIT_TOY_PINK_ROTOR = 1;
const PUSSY_TOY_PENIS_DILDO = 1;
const ANAL_TOY_ANAL_BEADS = 1;

//Artisan Meal
const ARTISAN_MEAL_SMART = 1;
const ARTISAN_MEAL_COMFY = 2;
const ARTISAN_MEAL_HEART = 3;
const ARTISAN_MEAL_SLUT = 4;
const ARTISAN_MEAL_PUSSY = 5;
const ARTISAN_MEAL_HERO = 6;
const ARTISAN_MEAL_ARMED = 7;
const ARTISAN_MEAL_WARDEN = 8;
const ARTISAN_MEAL_BITCH = 9;
const ARTISAN_MEAL_ANAL = 10;

//Store Item
const STORE_ITEM_ENERGY_DRINK = 1;
const STORE_ITEM_WELTSTONE = 2;
const STORE_ITEM_PAIN_RESIST_PILL = 3;
const STORE_ITEM_FABRIC_HARDENER = 4;
const STORE_ITEM_APHRODISIAC_PERFUME = 5;


function Karryn() {
    throw new Error('This is a static class');
}

Object.defineProperty(Karryn, 'level', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).level; }, configurable: true
});
Object.defineProperty(Karryn, 'slutLvl', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).slutLvl; }, configurable: true
});
Object.defineProperty(Karryn, 'str', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).str; }, configurable: true
});
Object.defineProperty(Karryn, 'end', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).end; }, configurable: true
});
Object.defineProperty(Karryn, 'dex', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).dex; }, configurable: true
});
Object.defineProperty(Karryn, 'agi', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).agi; }, configurable: true
});
Object.defineProperty(Karryn, 'mind', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).mind; }, configurable: true
});
Object.defineProperty(Karryn, 'charm', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).charm; }, configurable: true
});

Object.defineProperty(Karryn, 'inBattleCharm', {
     get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).inBattleCharm; }, configurable: true
});

Object.defineProperty(Karryn, 'stamina', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).stamina; }, configurable: true
});
Object.defineProperty(Karryn, 'maxstamina', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxstamina; }, configurable: true
});
Object.defineProperty(Karryn, 'realMaxStamina', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).realMaxStamina; }, configurable: true
});
Object.defineProperty(Karryn, 'energy', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).energy; }, configurable: true
});
Object.defineProperty(Karryn, 'maxenergy', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxenergy; }, configurable: true
});
Object.defineProperty(Karryn, 'realMaxEnergy', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).realMaxEnergy; }, configurable: true
});
Object.defineProperty(Karryn, 'will', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).will; }, configurable: true
});
Object.defineProperty(Karryn, 'maxwill', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxwill; }, configurable: true
});
Object.defineProperty(Karryn, 'pleasure', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).pleasure; }, configurable: true
});
Object.defineProperty(Karryn, 'wpatk', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).wpatk; }, configurable: true
});
Object.defineProperty(Karryn, 'wpdef', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).wpdef; }, configurable: true
});
Object.defineProperty(Karryn, 'esc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).esc; }, configurable: true
});
Object.defineProperty(Karryn, 'ssc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).ssc; }, configurable: true
});
Object.defineProperty(Karryn, 'wsc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).wsc; }, configurable: true
});
Object.defineProperty(Karryn, 'asc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).asc; }, configurable: true
});
Object.defineProperty(Karryn, 'graze', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).graze; }, configurable: true
});
Object.defineProperty(Karryn, 'staminaregen', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).staminaregen; }, configurable: true
});
Object.defineProperty(Karryn, 'energyregen', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).energyregen; }, configurable: true
});
Object.defineProperty(Karryn, 'willregen', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).willregen; }, configurable: true
});
Object.defineProperty(Karryn, 'hit', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).hit; }, configurable: true
});
Object.defineProperty(Karryn, 'eva', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).eva; }, configurable: true
});
Object.defineProperty(Karryn, 'cri', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cri; }, configurable: true
});
Object.defineProperty(Karryn, 'cev', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cev; }, configurable: true
});
Object.defineProperty(Karryn, 'mentalPhase', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).mentalPhase; }, configurable: true
});
Object.defineProperty(Karryn, 'actionPhase', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).actionPhase; }, configurable: true
});
Object.defineProperty(Karryn, 'cockDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cockDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'mouthDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).mouthDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'boobsDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).boobsDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'pussyDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).pussyDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'buttDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).buttDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxCockDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxCockDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxMouthDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxMouthDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxBoobsDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxBoobsDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxPussyDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxPussyDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxButtDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxButtDesire; }, configurable: true
});

Object.defineProperty(Karryn, 'fatigue', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).fatigue; }, configurable: true
});
Object.defineProperty(Karryn, 'cockiness', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cockiness; }, configurable: true
});
Object.defineProperty(Karryn, 'isWet', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).isWet; }, configurable: true
});
Object.defineProperty(Karryn, "body", {
	get: function() { return $gameActors.actor(ACTOR_KARRYN_ID)._body; }, configurable: true
});
Object.defineProperty(Karryn, "poseName", {
	get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).poseName; }, configurable: true
});

Karryn.setUpAsKarryn = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setUpAsKarryn();
};
Karryn.setUpAsKarryn_newGamePlusContinue = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setUpAsKarryn_newGamePlusContinue();
};


Karryn.hasNoStamina = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasNoStamina();
};
Karryn.hasNoEnergy = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasNoEnergy();
};

Karryn.gainStaminaExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainStaminaExp(exp, enemyLvl);
};
Karryn.gainEnergyExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainEnergyExp(exp, enemyLvl);
};
Karryn.gainStrengthExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainStrengthExp(exp, enemyLvl);
};
Karryn.gainEnduranceExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainEnduranceExp(exp, enemyLvl);
};
Karryn.gainDexterityExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainDexterityExp(exp, enemyLvl);
};
Karryn.gainMindExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainMindExp(exp, enemyLvl);
};
Karryn.gainAgilityExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainAgilityExp(exp, enemyLvl);
};
Karryn.gainCharmExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainCharmExp(exp, enemyLvl);
};

Karryn.gainUncommittedCharmExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainUncommittedCharmExp(exp, enemyLvl);
};
Karryn.commitUncommittedCharmExp = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).commitUncommittedCharmExp();
};


Karryn.stenchTolerance = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).stenchTolerance();
};

Karryn.getWardenLevelLimit = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getWardenLevelLimit();
};

Karryn.isNaked = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isNaked();
};


Karryn.getReactionScore = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getReactionScore();
};

Karryn.setupPassiveReqMultiArray = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setupPassiveReqMultiArray();
};


Karryn.talkLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).talkLvl();
};
Karryn.sightLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sightLvl();
};
Karryn.pettingLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).pettingLvl();
};
Karryn.kissLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).kissLvl();
};
Karryn.handjobLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).handjobLvl();
};
Karryn.blowjobLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).blowjobLvl();
};
Karryn.tittyFuckLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).tittyFuckLvl();
};
Karryn.pussySexLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).pussySexLvl();
};
Karryn.analSexLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).analSexLvl();
};
Karryn.masturbateLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).masturbateLvl();
};
Karryn.masochismLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).masochismLvl();
};
Karryn.sadismLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sadismLvl();
};

Karryn.mouthSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).mouthSensitivity();
};
Karryn.boobsSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).boobsSensitivity();
};
Karryn.nipplesSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).nipplesSensitivity();
};
Karryn.pussySensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).pussySensitivity();
};
Karryn.clitSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).clitSensitivity();
};
Karryn.buttSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).buttSensitivity();
};
Karryn.analSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).analSensitivity();
};
Karryn.fingerSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).fingerSensitivity();
};
Karryn.footSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).footSensitivity();
};
Karryn.talkSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).talkSensitivity();
};
Karryn.sightSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sightSensitivity();
};
Karryn.creampieSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).creampieSensitivity();
};
Karryn.bukkakeSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).bukkakeSensitivity();
};
Karryn.swallowSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).swallowSensitivity();
};
Karryn.masochismSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).masochismSensitivity();
};
Karryn.sadismSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sadismSensitivity();
};


Karryn.setPleasure = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasure(value);
};
Karryn.gainPleasure = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainPleasure(value);
};
Karryn.setPleasureToArousalPoint = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasureToArousalPoint();
};
Karryn.setPleasureToOrgasmPoint = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasureToOrgasmPoint();
};


Karryn.gainCockDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainCockDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainMouthDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainMouthDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainBoobsDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainBoobsDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainPussyDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainPussyDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainButtDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainButtDesire(value, fromWillpowerSkill, fromDesireRegen);
};

Karryn.topDesireIsMouthDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsMouthDesire();
};
Karryn.topDesireIsBoobsDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsBoobsDesire();
};
Karryn.topDesireIsPussyDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsPussyDesire();
};
Karryn.topDesireIsButtDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsButtDesire();
};
Karryn.topDesireIsCockDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsCockDesire();
};


Karryn.setPose = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPose(value);
};

Karryn.hasEdict = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasEdict(id);
};
Karryn.learnSkill = function(skillId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).learnSkill(skillId);
};
Karryn.forgetSkill = function(skillId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).forgetSkill(skillId);
};

Karryn.hasPassive = function(skillId) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasPassive(skillId);
};
Karryn.setCharacterCreatorPassive = function(skillId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setCharacterCreatorPassive(skillId);
};


Karryn.totalAccessoriesOwnedCount = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).totalAccessoriesOwnedCount();
};
Karryn.isEquippingThisAccessory = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isEquippingThisAccessory(id);
};
Karryn.isUsingThisTitle = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingThisTitle(id);
};
Karryn.hasThisTitle = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasThisTitle(id);
};

Karryn.emoteMasterManager = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).emoteMasterManager();
};
Karryn.emoteMapPose = function(goingToSleep, goingToOnani, calledFromCommons) { 
	$gameActors.actor(ACTOR_KARRYN_ID).emoteMapPose(goingToSleep, goingToOnani, calledFromCommons);
};


Karryn.setAllowTachieUpdate = function(status) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setAllowTachieUpdate(status);
};

Karryn.isAroused = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isAroused();
};

Karryn.getFatigueLevel = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getFatigueLevel();
};

Karryn.setSpriteBattlerPosData = function(poseName) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setSpriteBattlerPosData(poseName);
};

Karryn.setKarrynWardenSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynWardenSprite();
};
Karryn.setKarrynSleepSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynSleepSprite();
};
Karryn.setKarrynReceptionistSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynReceptionistSprite();
};

Karryn.hasTachieCutInOnScreen = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasTachieCutInOnScreen();
};

Karryn.isWearingGlovesAndHat = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isWearingGlovesAndHat();
};

Karryn.isInMapPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInMapPose();
};
Karryn.isInCombatPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInCombatPose();
};
Karryn.isInJobPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInJobPose();
};
Karryn.isInDownPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownPose();
};
Karryn.isInUnarmedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInUnarmedPose();
};

Karryn.isInDownFallDownPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownFallDownPose();
};
Karryn.isInDownOrgasmPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownOrgasmPose();
};
Karryn.isInDownStaminaPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownStaminaPose();
};

Karryn.isInSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInSexPose();
};
Karryn.isInNoStaminaIsDefeatPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInNoStaminaIsDefeatPose();
};
Karryn.isInIgnoreMetalPropertiesPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInIgnoreMetalPropertiesPose();
};

Karryn.isInNeverDeadPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInNeverDeadPose();
};
Karryn.isInNoEjaculationStockStillContinuesPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInNoEjaculationStockStillContinuesPose();
};


Karryn.isDrawEnemiesAboveBattleTachiePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isDrawEnemiesAboveBattleTachiePose();
};

Karryn.isInShowEnemyNameOnlyDuringValidSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowEnemyNameOnlyDuringValidSelectionPose();
};
Karryn.isInDontShowEnemyNameEverPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyNameEverPose();
};

Karryn.isInShowEnemyImageOnlyDuringValidSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowEnemyImageOnlyDuringValidSelectionPose();
};
Karryn.isInShowEnemyGaugeOnlyDuringValidSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowEnemyGaugeOnlyDuringValidSelectionPose();
};
Karryn.isInReorderEnemyImagesOnSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReorderEnemyImagesOnSelectionPose();
};
Karryn.isInDrawEnemiesAtHalfWidthPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDrawEnemiesAtHalfWidthPose();
};
Karryn.isInDontShowEnemyGaugePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyGaugePose();
};
Karryn.isInDontShowEnemyStateIconsPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyStateIconsPose();
};

Karryn.isInEnemiesDontRegenPleasurePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesDontRegenPleasurePose();
};
Karryn.isInEnemiesDontDrawSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesDontDrawSelectionPose();
};
Karryn.isInEnemiesJoinArousedAndStayArousedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesJoinArousedAndStayArousedPose();
};


Karryn.turnOnCantEscapeFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOnCantEscapeFlag();
};
Karryn.turnOffCantEscapeFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOffCantEscapeFlag();
};

Karryn.turnOnJustEscapedFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOnJustEscapedFlag();
};
Karryn.turnOffJustEscapedFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOffJustEscapedFlag();
};

Karryn.isInFuckedFromBehindSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInFuckedFromBehindSexPose();
};
Karryn.isInCowgirlSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInCowgirlSexPose();
};

Karryn.isInRestrainedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInRestrainedPose();
};
Karryn.isNotInRestrainedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isNotInRestrainedPose();
};

Karryn.isInThugGangbangPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInThugGangbangPose();
};
Karryn.isInGuardGangbangPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInGuardGangbangPose();
};

Karryn.isInFootjobSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInFootjobSexPose();
};
Karryn.isInKneelingBJSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKneelingBJSexPose();
};
Karryn.isInStandingHJSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStandingHJSexPose();
};

Karryn.isInKickCounterSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKickCounterSexPose();
};

Karryn.isInGoblinCunnilingusSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInGoblinCunnilingusSexPose();
};
Karryn.isInLayingTittyfuckSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInLayingTittyfuckSexPose();
};
Karryn.isInRimjobSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInRimjobSexPose();
};
Karryn.isInSlimeAnalPiledriverSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInSlimeAnalPiledriverSexPose();
};
Karryn.isInOrcPaizuriSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInOrcPaizuriSexPose();
};
Karryn.isInReverseCowgirlPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReverseCowgirlPose();
};
Karryn.isInKarrynCowgirlPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKarrynCowgirlPose();
};
Karryn.isInLizardmanCowgirlPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInLizardmanCowgirlPose();
};


Karryn.isInWaitressServingPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInWaitressServingPose();
};
Karryn.isInWaitressSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInWaitressSexPose();
};
Karryn.isInReceptionistPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReceptionistPose();
};

Karryn.isInToiletSittingPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletSittingPose();
};
Karryn.isInToiletSitLeftPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletSitLeftPose();
};
Karryn.isInToiletSitRightPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletSitRightPose();
};
Karryn.isInToiletStandLeftPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletStandLeftPose();
};
Karryn.isInToiletStandRightPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletStandRightPose();
};

Karryn.isInMasturbationCouchPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInMasturbationCouchPose();
};
Karryn.isInMasturbationInBattlePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInMasturbationInBattlePose();
};

Karryn.isInDefeatedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedPose();
};
Karryn.isInDefeatedLevel1Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel1Pose();
};
Karryn.isInDefeatedLevel2Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel2Pose();
};
Karryn.isInDefeatedLevel3Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel3Pose();
};
Karryn.isInDefeatedGuardPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedGuardPose();
};


Karryn.isInReadyPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReadyPose();
};
Karryn.isAttackable = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isAttackable();
};
Karryn.isUsingHalberd = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingHalberd();
};
Karryn.hasHalberd = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasHalberd();
};

Karryn.stripOffClothing = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).stripOffClothing();
};
Karryn.restoreClothingDurability = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).restoreClothingDurability();
};

Karryn.currentPercentOfOrgasm = function(oneMax) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).currentPercentOfOrgasm(oneMax);
};

Karryn.hasDoneGuardBattleThisPlaythrough = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasDoneGuardBattleThisPlaythrough();
};

Karryn.resetAllGifts = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetAllGifts();
};
Karryn.resetGift_Emperor_LevelOne = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelOne();
};
Karryn.resetGift_Emperor_LevelTwo = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelTwo();
};
Karryn.resetGift_Emperor_LevelThree = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelThree();
};
Karryn.resetGift_Emperor_LevelFour = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelFour();
};

Karryn.hasGift = function(giftId) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasGift(giftId);
};

Karryn.eatArtisanMeal = function(meal) { 
	$gameActors.actor(ACTOR_KARRYN_ID).eatArtisanMeal(meal);
};
Karryn.ateArtisanMeal = function(meal) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).ateArtisanMeal(meal);
};

Karryn.selectStoreItem = function(item) { 
	$gameActors.actor(ACTOR_KARRYN_ID).selectStoreItem(item);
};
Karryn.isUsingStoreItem = function(item) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingStoreItem(item);
};
Karryn.resetStoreItem = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetStoreItem();
};


Karryn.edictSkilledStaffMultipler = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).edictSkilledStaffMultipler();
};

Karryn.willpowerEdgingControlEffect = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).willpowerEdgingControlEffect();
};

Karryn.addHornyState = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).addHornyState();
};

Karryn.wasDefeatedYesterday = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).wasDefeatedYesterday();
};


Karryn.orgasmLockOn = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).orgasmLockOn();
};
Karryn.orgasmLockOff = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).orgasmLockOff();
};

Karryn.setCockDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setCockDesire(value, fromWillpowerSkill);
};
Karryn.setMouthDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setMouthDesire(value, fromWillpowerSkill);
};
Karryn.setBoobsDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setBoobsDesire(value, fromWillpowerSkill);
};
Karryn.setPussyDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPussyDesire(value, fromWillpowerSkill);
};
Karryn.setButtDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setButtDesire(value, fromWillpowerSkill);
};


////////////
//////////////
// Game Actor
//////////////
////////////

//Generic actor setup
Remtairy.Karryn.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
    Remtairy.Karryn.Game_Actor_initMembers.call(this);
	this._poseName = POSE_NULL;
	this._showTachie = false;
	this.setAllowTachieUpdate(false);
	this._tachieFlip = false;
	this.completeResetBodyParts();
	this._mentalPhase = false;
	this.setAllBodySlotsFree();
	this.turnOffCantEscapeFlag();
	this.turnOffJustEscapedFlag();
	this.resetDesires();
	this.resetCockiness();
	this.resetInvasionNoiseLevel();
	this.setupObtainedTitlesArray();
	this.removeAllToys();
	this._sleepQuality = 0;
	this._lastMentalBattleSkill = new Game_Item();
};


// Define Property
Object.defineProperty(Game_Actor.prototype, "isKarryn", {
	get: function () { return this.actorId() === ACTOR_KARRYN_ID; }, configurable: true
});

Object.defineProperty(Game_Actor.prototype, 'inBattleCharm', {
    get: function() { 
		let charm = this.charm; 
		let multipler = 1;
		if(this.isEquippingThisAccessory(MISC_CALFSKINBELT_ID)) multipler *= 0.8;
		if(this.isEquippingThisAccessory(NECKLACE_DIAMOND_ID)) multipler *= 1.1;
		
		if(this.isUsingThisTitle(TITLE_ID_TOILET_EAT_ORGASM)) multipler *= 1.07;
		
		if(this.isInEnemiesJoinArousedAndStayArousedPose()) {
			multipler *= 1.4;
		}
		else if($gameParty.isInGloryBattle) {
			multipler *= 0.65;
		}
		
		if(this.isUsingStoreItem(STORE_ITEM_APHRODISIAC_PERFUME)) multipler *= 1.15;
		else if(this.isUsingStoreItem(STORE_ITEM_FABRIC_HARDENER)) multipler *= 0.85;
		
		return Math.round(charm * multipler);
	}, configurable: true
});

Object.defineProperty(Game_Actor.prototype, "esc", { 
	get: function () { return this.pha; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "wsc", { 
	get: function () { return this.pdr; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "ssc", { 
	get: function () { return this.mdr; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "asc", { 
	get: function () { return this.fdr; }, configurable: true 
});

Object.defineProperty(Game_Actor.prototype, "isWet", {
	get: function () { return this._liquidPussyJuice > LIQUID_PUSSY_WET_REQ; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "slutLvl", {
	get: function () { return this._slutLvl; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "cockiness", {
	get: function () { return this._cockiness; }, configurable: true
});

Object.defineProperty(Game_Actor.prototype, "body", {
	get: function () { return this._body; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "showTachie", {
	get: function () { return this._showTachie; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "tachieFlip", {
	get: function () { return this._tachieFlip; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "mentalPhase", {
	get: function () { return this._mentalPhase; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "actionPhase", {
	get: function () { return !this._mentalPhase; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "cockDesire", {
	get: function () { return Math.round(this._cockDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "mouthDesire", {
	get: function () { return Math.round(this._mouthDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "boobsDesire", {
	get: function () { return Math.round(this._boobsDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "pussyDesire", {
	get: function () { return Math.round(this._pussyDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "buttDesire", {
	get: function () { return Math.round(this._buttDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxCockDesire", {
	get: function () { return Math.round(this._maxCockDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxMouthDesire", {
	get: function () { return Math.round(this._maxMouthDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxBoobsDesire", {
	get: function () { return Math.round(this._maxBoobsDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxPussyDesire", {
	get: function () { return Math.round(this._maxPussyDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxButtDesire", {
	get: function () { return Math.round(this._maxButtDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "clothingDurability", {
	get: function () { return this._clothingDurability; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "clothingStage", {
	get: function () { return this._clothingStage; }, configurable: true
});



//Getter Functions
//Skill Rating
Game_Actor.prototype.pettingSkillRating = function() {
	this.calculatePettingSkillRating();
	return this._pettingSkillRating;
};
Game_Actor.prototype.kissSkillRating = function() {
	this.calculateKissSkillRating();
	return this._kissSkillRating;
};
Game_Actor.prototype.handjobSkillRating = function() {
	this.calculateHandjobSkillRating();
	return this._handjobSkillRating;
};
Game_Actor.prototype.blowjobSkillRating = function() {
	this.calculateBlowjobSkillRating();
	return this._blowjobSkillRating;
};
Game_Actor.prototype.rimjobSkillRating = function() {
	this.calculateRimjobSkillRating();
	return this._rimjobSkillRating;
};
Game_Actor.prototype.footjobSkillRating = function() {
	this.calculateTittyFuckSkillRating();
	return this._footjobSkillRating;
};
Game_Actor.prototype.tittyFuckSkillRating = function() {
	this.calculateFootjobSkillRating();
	return this._tittyFuckSkillRating;
};
Game_Actor.prototype.pussySexSkillRating = function() {
	this.calculatePussySexSkillRating();
	return this._pussySexSkillRating;
};
Game_Actor.prototype.analSexSkillRating = function() {
	this.calculateAnalSexSkillRating();
	return this._analSexSkillRating;
};
Game_Actor.prototype.masturbateSkillRating = function() {
	this.calculateMasturbateSkillRating();
	return this._masturbateSkillRating;
};

//Body Sensitivity
Game_Actor.prototype.mouthSensitivity = function() {
	this.calculateMouthSensitivityRating();
	return this._mouthSensitivityRating;
};
Game_Actor.prototype.boobsSensitivity = function() {
	this.calculateBoobsSensitivityRating();
	return this._boobsSensitivityRating;
};
Game_Actor.prototype.nipplesSensitivity = function() {
	this.calculateNipplesSensitivityRating();
	return this._nipplesSensitivityRating;
};
Game_Actor.prototype.clitSensitivity = function() {
	this.calculateClitSensitivityRating();
	return this._clitSensitivityRating;
};
Game_Actor.prototype.pussySensitivity = function() {
	this.calculatePussySensitivityRating();
	return this._pussySensitivityRating;
};
Game_Actor.prototype.buttSensitivity = function() {
	this.calculateButtSensitivityRating();
	return this._buttSensitivityRating;
};
Game_Actor.prototype.analSensitivity = function() {
	this.calculateAnalSensitivityRating();
	return this._analSensitivityRating;
};
Game_Actor.prototype.fingerSensitivity = function() {
	this.calculateFingerSensitivityRating();
	return this._fingerSensitivityRating;
};
Game_Actor.prototype.footSensitivity = function() {
	this.calculateFootSensitivityRating();
	return this._footSensitivityRating;
};
Game_Actor.prototype.talkSensitivity = function() {
	this.calculateTalkSensitivityRating();
	return this._talkSensitivityRating;
};
Game_Actor.prototype.sightSensitivity = function() {
	this.calculateSightSensitivityRating();
	return this._sightSensitivityRating;
};
Game_Actor.prototype.swallowSensitivity = function() {
	this.calculateSwallowSensitivityRating();
	return this._swallowSensitivityRating;
};
Game_Actor.prototype.pussyCreampieSensitivity = function() {
	this.calculatePussyCreampieSensitivityRating();
	return this._pussyCreampieSensitivityRating;
};
Game_Actor.prototype.analCreampieSensitivity = function() {
	this.calculateAnalCreampieSensitivityRating();
	return this._analCreampieSensitivityRating;
};
Game_Actor.prototype.bukkakeSensitivity = function() {
	this.calculateBukkakeSensitivityRating();
	return this._bukkakeSensitivityRating;
};
Game_Actor.prototype.masochismSensitivity = function() {
	this.calculateMasochismSensitivityRating();
	return this._masochismSensitivityRating;
};
Game_Actor.prototype.sadismSensitivity = function() {
	this.calculateSadismSensitivityRating();
	return this._sadismSensitivityRating;
};

Game_Actor.prototype.hasEdict = function(id) {
	return this.isStsLearnedSkill(id);
};

///////
// Setup 
///////////
Game_Actor.prototype.setUpAsKarryn = function() {
	//Variables
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.setupParamExp();
	this.changeLevel(1);
	this.setupKarrynSkills();
	this.setupPassives();
	this.setupRecords();
	this.setupPlaythroughRecords();
	this.clearTempRecords();
	this.resetTodayRecords();
	this.clearBattleSkillsFlags();
	this.resetOnaniFrustration();
	this.resetOnaniInBattleDesireToBase();
	this.setupTitleFlags();
	this.setupStartingEdicts();
	this.resetAllGifts();
	this.recalculateSkillLvls();
	this.recalculateBodySensitivities();
	this.calculateAllMaxDesires();
	this.setWillToMax();
	this.setFatigue(0);
	this.setPleasure(0);
	this.clearAccessorySlots();
	this.changeStanceToSlash();
	this.setHalberdAsDefiled(false);
	this.changeToWardenClothing();
	this.setPantiesType(PANTIES_STARTER_ID);
	this.putOnPanties();
	this.cleanUpLiquids();
	
	//Tachie
	this._dontResetSexPose = false;
	this.putOnGlovesAndHat();
	this.setAllowTachieUpdate(true);
	this._showTachie = true;
	this.setWardenMapPose();
	this.preloadTachie();
	this.setCacheChanged();
	
	$gameSwitches.setValue(SWITCH_IS_VIRGIN_ID, true);
	$gameSwitches.setValue(SWITCH_IS_NON_VIRGIN_ID, false);
};

Game_Actor.prototype.setUpAsKarryn_newGamePlusContinue = function() {
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.clearTempRecords();
	this.resetTodayRecords();
	this.clearBattleSkillsFlags();
	this.setupPlaythroughRecords();
	this.setupTitleFlags();
	this.resetOnaniFrustration();
	this.resetOnaniInBattleDesireToBase();
	this.setupStartingEdicts();
	this.resetAllGifts();
	this.recalculateSkillLvls();
	this.recalculateBodySensitivities();
	this.calculateAllMaxDesires();
	this.setWillToMax();
	this.setFatigue(0);
	this.setPleasure(0);
	this.clearAccessorySlots();
	this.changeStanceToSlash();
	this.changeToWardenClothing();
	this.setPantiesType(PANTIES_STARTER_ID);
	this.putOnPanties();
	this.cleanUpLiquids();
	
	$gameVariables.setValue(VARIABLE_FIRST_RIOT_PROGRESS_ID, 0);
	$gameVariables.setValue(VARIABLE_FIRST_RIOT_LEVEL_ID, 0);
	$gameVariables.setValue(VARIABLE_FIRST_DEFEAT_PROGRESS_ID, 0);

	//Tachie
	this._dontResetSexPose = false;
	this.putOnGlovesAndHat();
	this.setAllowTachieUpdate(true);
	this._showTachie = true;
	this.setWardenMapPose();
	this.preloadTachie();
	this.setCacheChanged();
};

Game_Actor.prototype.setUpAsChatFace = function() {
	this.setAllowTachieUpdate(true);
	this._showTachie = true;
	this.setHasTachiePubic(false);
	this.setPose(CHAT_FOLDER_KARRYN);
};

Game_Actor.prototype.setupKarrynSkills = function() {
	//debug skills
	this.learnSkill(SKILL_DEBUG_SURRENDER_ID); 
	this.learnSkill(SKILL_DEBUG_DEFEAT_ALL_ID); 
	this.learnSkill(SKILL_DEBUG_STRIP_CLOTHES_ID); 
	
	//state skills
	this.learnSkill(SKILL_REGAIN_FOOTING_ID); 
	this.learnSkill(SKILL_STAND_UP_ID); 
	this.learnSkill(SKILL_FALLEN_REST_ID); 
	this.learnSkill(SKILL_KARRYN_PICK_UP_HALBERD_ID);
	this.learnSkill(SKILL_KARRYN_GET_CLOSER_TO_HALBERD_ID);
	
	//attack skills
	for(let i = 51; i <= 63; i++) {
		this.learnSkill(i);
	}
	this.learnSkill(SKILL_LIGHT_KICK_ID);
	
	//counterattack skills
	for(let i = 1059; i <= 1064; i++) {
		this.learnSkill(i);
	}
	//Kick skills
	this.learnSkill(SKILL_KARRYN_KICK_STRIKE_ID);
	this.learnSkill(SKILL_KARRYN_KICK_SLASH_ID);
	this.learnSkill(SKILL_KARRYN_KICK_THRUST_ID);

	//energy skills
	for(let i = 70; i <= 79; i++) {
		this.learnSkill(i);
	}
	this.learnSkill(SKILL_KARRYN_TAUNT_ID); 
	this.learnSkill(SKILL_KARRYN_DOGEZA_ID); 
	this.learnSkill(SKILL_KARRYN_FLAUNT_ID);
	this.learnSkill(SKILL_GIVE_UP_ID);
	this.learnSkill(SKILL_SURRENDER_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_3TURNS_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_5TURNS_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_10TURNS_ID);
	this.learnSkill(SKILL_CAUTIOUS_REVITALIZE_ID);
	this.learnSkill(SKILL_CAUTIOUS_SECOND_WIND_ID);
	this.learnSkill(SKILL_CAUTIOUS_FIX_CLOTHES_ID);
	this.learnSkill(SKILL_DEFENSIVE_REVITALIZE_ID);
	this.learnSkill(SKILL_DEFENSIVE_SECOND_WIND_ID);
	this.learnSkill(SKILL_DEFENSIVE_FIX_CLOTHES_ID);
	this.learnSkill(SKILL_COUNTER_REVITALIZE_ID);
	this.learnSkill(SKILL_COUNTER_SECOND_WIND_ID);
	this.learnSkill(SKILL_COUNTER_FIX_CLOTHES_ID);

	
	//willpower skills
	for(let i = WILLPOWER_SKILL_START; i <= WILLPOWER_SKILL_END; i++) {
		this.learnSkill(i);
	}
	//empty attack skills
	for(let i = 1001; i <= 1006; i++) {
		this.learnSkill(i);
	}
	
	//sex skills
	this.learnSkill(SKILL_KARRYN_KISS_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_HANDJOB_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_COCK_STARE_SELECTOR_ID);
	this.learnSkill(SKILL_KARRYN_COCK_PETTING_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_RIMJOB_SELECTOR_ID);
	this.learnSkill(SKILL_KARRYN_FOOTJOB_SELECTOR_ID); 	
	this.learnSkill(SKILL_KARRYN_BLOWJOB_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_TITTYFUCK_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_ANALSEX_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_PUSSYSEX_SELECTOR_ID); 
	
	this.learnSkill(SKILL_KARRYN_KISS_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_HANDJOB_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_COCK_STARE_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_COCK_PETTING_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_RIMJOB_SELECTOR_CANT_ID);
	this.learnSkill(SKILL_KARRYN_FOOTJOB_SELECTOR_CANT_ID); 	
	this.learnSkill(SKILL_KARRYN_BLOWJOB_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_TITTYFUCK_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_ANALSEX_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_PUSSYSEX_SELECTOR_CANT_ID); 
	
	this.learnSkill(SKILL_KARRYN_REMOVE_TOY_ID); 
	this.learnSkill(SKILL_KARRYN_REMOVE_TOY_CANT_ID);
	
	//masturbate skills
	this.learnSkill(SKILL_KARRYN_MAS_TOUCH_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_MAS_FINGER_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_MAS_SUCK_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_MAS_STOP_BATTLE_ID);
	
	for(let i = MASTURBATE_INBATTLE_SKILL_START; i <= MASTURBATE_INBATTLE_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Waitress skills
	for(let i = WAITRESS_SKILL_START; i <= WAITRESS_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Receptionist skills
	for(let i = RECEPTIONIST_SKILL_START; i <= RECEPTIONIST_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Glory skills
	for(let i = GLORY_SKILL_START; i <= GLORY_SKILL_END; i++) {
		this.learnSkill(i); 
	}
};

// Skills Learned

Game_Actor.prototype.isLearnedSkill = function(skillId) {
	if(!this._skillsLearned) this.setupSkillsLearnedArray();
	
	if(this._skillsLearned) {
		return this._skillsLearned[skillId];
	}
	else
		return false;
};

Game_Actor.prototype.setupSkillsLearnedArray = function(skillId) {
	this._skillsLearned = [];
	
	if(this._skills) {
		for(let i = 0; i < this._skills.length; ++i) {
			this._skillsLearned[this._skills[i]] = true;
		}
	}
};

Remtairy.Karryn.Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
	this._skillsLearned[skillId] = true;
	Remtairy.Karryn.Game_Actor_learnSkill.call(this, skillId);
};

Remtairy.Karryn.Game_Actor_forgetSkill = Game_Actor.prototype.forgetSkill;
Game_Actor.prototype.forgetSkill = function(skillId) {
	this._skillsLearned[skillId] = false;
	Remtairy.Karryn.Game_Actor_forgetSkill.call(this, skillId);
};


/////////////////////////////////
// Pre and Post Battle Processing
/////////////////////////////////

Game_Actor.prototype.setupStatsBeforeBattle = function() {
	this.setHp(this.maxstamina);
	this.setMp(this.maxenergy);
	this.setWillToMax();
	this.setPleasure(Math.min(this.pleasure, this.orgasmPoint() * 0.99));
}; 

//Pre Battle
Game_Actor.prototype.preBattleSetup = function() {
	this.enterMentalPhase();
	this.disableAllPoseSkills();
	this.setupStatsBeforeBattle();
	this.cacheDesireTooltips();
	this.setupDesires();
	this.clearBattleSkillsFlags();
	this.resetCockTargets();
	this.resetRemLineActorVariables();
	this.clearParamExp();
	this.clearTempRecords();
	this.setUpPussyJuice();
	this.resetOnaniInBattleDesireToBase();
	this.preBattleConfidentPassiveEffects();
	this.preBattleHornyPassiveEffects();
	this.preBattleClothingPassiveEffects();
	this.removeState(STATE_DISARMED_ID);
	this.preBattleAddIsVirginState();
	this.setPreBattlePose();
	this._dontResetSexPose = false;
	this._emoteMasterManagerIsRunning = false;
	this._orgasmCallQueuedUp = false;
	this._dirty = true;
}; 

//same as normal prebattle except dont reset desire or pussy juice
Game_Actor.prototype.preInvasionBattleSetup = function() {
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.disableAllPoseSkills();
	this.setupStatsBeforeBattle();
	this.cacheDesireTooltips();
	this.clearBattleSkillsFlags();
	this.resetCockTargets();
	this.resetRemLineActorVariables();
	this.clearParamExp();
	this.clearTempRecords();
	this.preBattleConfidentPassiveEffects();
	this.preBattleHornyPassiveEffects();
	this.preBattleAddIsVirginState();
	//this.setPreBattlePose(); //called in game party version
	this._dontResetSexPose = false;
	this._emoteMasterManagerIsRunning = false;
	this._orgasmCallQueuedUp = false;
	this._dirty = true;
	
	$gameParty.addRecordInvasionBattle();
}; 

Game_Actor.prototype.preDefeatedBattleSetup = function() {
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.disableAllPoseSkills();
	this.setupStatsBeforeBattle();
	this.cacheDesireTooltips();
	this.clearBattleSkillsFlags();
	this.resetRemLineActorVariables();
	this.clearParamExp();
	this.clearTempRecords();
	this.setUpPussyJuice();
	//this.preBattlePassiveEffects();
	this.addState(STATE_DEFEATED_ID);
	this.preBattleAddIsVirginState();
	this.setAsNoHalberdBattle();
	this.takeOffPanties();
	this.removeClothing();
	this._dontResetSexPose = false;
	this._emoteMasterManagerIsRunning = false;
	this._orgasmCallQueuedUp = false;
	this._dirty = true;
}; 

//Post Battle
Game_Actor.prototype.postBattleCleanup = function() {
	this.setAllowTachieUpdate(false);
	this._emoteMasterManagerIsRunning = false;
	this._dontResetSexPose = false;
	this._orgasmCallQueuedUp = false;
	this._startOfInvasionBattle = false;
	this.restoreClothingDurability();
	if(!this._lostPanties) this.putOnPanties();
	this.turnOffCantEscapeFlag();
	this.resetCockTargets();
	this.removeAllToys();
	this.disableAllPoseSkills();
	this.clearBattleSkillsFlags();
	this.clearParamExp();
	this.clearTempRecords();
	this.cleanUpLiquids();
	this.resetDesires();
	this.postBattlePleasure();
	this.enableMentalPhase();
	this.setWardenMapPose();
	this.setAllowTachieUpdate(true);
}; 

/////////
// Desires
/////////

Game_Actor.prototype.setupDesires = function() {
	this.setCockDesire(this.startingCockDesire(), false);
	this.setMouthDesire(this.startingMouthDesire(), false);
	this.setBoobsDesire(this.startingBoobsDesire(), false);
	this.setPussyDesire(this.startingPussyDesire(), false);
	this.setButtDesire(this.startingButtDesire(), false);
	this.startingRandomDesire();
};

Game_Actor.prototype.resetDesires = function() {
	let minDesire = this.minimumDesireLimit();
	this._cockDesire = minDesire;
	this._mouthDesire = minDesire;
	this._boobsDesire = minDesire;
	this._pussyDesire = minDesire;
	this._buttDesire = minDesire;
};

/////////
// Age


Game_Actor.prototype.getActorAge = function() {
	return VAR_STARTING_AGE + Math.floor(Prison.date/365);
}; 

////////
// Breath
//unused
Game_Actor.prototype.getBreathSpeed = function() {
	return Math.max(VAR_BREATH_SPEED_MIN, this.currentPercentOfOrgasm(true) / 100);
}; 

////////////
// Cockiness
////////////

Game_Actor.prototype.resetCockiness = function() {
	this._cockiness = 0;
}; 

Game_Actor.prototype.addCockiness = function(value) {
	let potentialHundred = false;
	value = Math.round(value);

	if(this.cockiness < 100) {
		potentialHundred = true;
	}
	this._cockiness = Math.min(100, this.cockiness + value);
	this._cockiness = Math.max(0, this.cockiness);
	if(potentialHundred && this.cockiness === 100) this.addToActorCockinessMaxRecord();

	if(value > 0)
		this.addToActorCockinessGainedRecord(value);
}; 

Game_Actor.prototype.addCockinessFromSubduingEnemy = function(enemyLvl) {
	if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) {
		if(this.level > enemyLvl)
			this.addCockiness(4);
		else
			this.addCockiness(2);
		
	}
}; 
Game_Actor.prototype.addCockinessFromTaunting = function() {
	if(this.hasPassive(PASSIVE_TAUNT_COUNT_THREE_ID))
		this.addCockiness(3);
	else if(this.hasPassive(PASSIVE_TAUNT_COUNT_ONE_ID))
		this.addCockiness(2);
	else if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
		this.addCockiness(1);
}; 
Game_Actor.prototype.addCockinessFromConsAttackUsage = function() {
	if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
		this.addCockiness(1);
};
Game_Actor.prototype.addCockinessFromCockKicking = function() {
	if(this.hasPassive(PASSIVE_COCKKICK_COUNT_ONE_ID))
		this.addCockiness(1);
}; 

Game_Actor.prototype.reduceCockinessFromEscaping = function() {
	if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
		this.addCockiness(Math.min(-20, Math.round(this.cockiness * -0.33)));
}; 

///////////
// Confident

Game_Actor.prototype.confidentParamRate = function(paramId) {
	let confidentRate = 1;
	if(this.isConfident) {
		if(paramId === PARAM_CHARM_ID || paramId === PARAM_STRENGTH_ID || paramId === PARAM_DEXTERITY_ID || paramId === PARAM_MIND_ID || paramId === PARAM_AGILITY_ID) {
			confidentRate += 0.12;
			
			if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) 
				confidentRate += this.cockiness * 0.0012
			
			
		}
	}
	return confidentRate;
}; 

//////
// Critical
/////////

Game_Actor.prototype.criticalChanceRate = function() {
    let rate = 1;
	
	if(this.isStateAffected(STATE_BONUS_CRIT_CHANCE_ID)) {
		rate += 0.25;
	}
	
	if(this.isStateAffected(STATE_COCK_KICK_CRIT_BONUS_ID)) {
		if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) {
			rate += 0.4;
		}
		else {
			rate += 0.2;
		}
	}
	
	return rate;
};

Game_Actor.prototype.criticalChanceBonus = function() {
    let bonus = 0;
	
	return bonus;
};

Game_Actor.prototype.criticalDamageRate = function() {
	let rate = 1;
	if(this.isEquippingThisAccessory(NECKLACE_RUBY_ID)) rate *= 0.85;
	return rate;
};

Game_Actor.prototype.criticalDamageBonus = function() {
    let bonus = 0;
	
	if(this.isStateAffected(STATE_COCK_KICK_CRIT_BONUS_ID)) {
		if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) {
			bonus += 0.4;
		}
		else {
			bonus += 0.2;
		}
	}
	
	if(this.isStateAffected(STATE_KI_ID) && this.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_KI)) {
		bonus += this.willpowerKiCritDmgEffect();
	}
	
	if(this.isStateAffected(STATE_EYE_OF_THE_MIND_ID) && this.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_EOTM)) {
		bonus += this.willpowerEyeOfTheMindCritDmgEffect();
	}
	
	return bonus;
};

////////
// Speed

////////
// Action Speed

Game_Actor.prototype.bonusActionSpeed = function(item) {
    let bonusSpeed = 0;
	let itemId = item.id;
	
	if(this.isStateAffected(STATE_KARRYN_FIRST_TURN_ID)) bonusSpeed += 9999;
	
	if((item.id === SKILL_KARRYN_BLOWJOB_SELECTOR_ID) && this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) bonusSpeed += 9999;
	
	if($gameTemp.isPlaytest() && TESTING_ALWAYS_FIRST) bonusSpeed += 9999;
	
	
	return bonusSpeed;
};

///////////////
// Resting and Fatigue
////////////////////

//Fatigue Gain
Game_Actor.prototype.fatigueGainRate = function() {
	let rate = 1;
	
	rate *= this.titlesFatigueGainRate();
	if(this.ateArtisanMeal(ARTISAN_MEAL_ARMED)) rate *= 0.67;
	if(this.isUsingStoreItem(STORE_ITEM_ENERGY_DRINK)) rate *= 0.8;
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID) && this._todayOrgasmML > 0)
		rate *= 1 + Math.min(0.33, this._todayOrgasmML * 0.0003);
	if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID) && this._tempRecordHandjobPeople > 0)
		rate *= 1 + Math.min(0.33, this._tempRecordHandjobPeople * 0.01);
	
	
	return rate;
};

Game_Actor.prototype.gainFatigue = function(value) {
	this.setFatigue(this.fatigue + value);
};

//Fatigue Recovery
Game_Actor.prototype.fatigueRecoveryRate = function() {
	let rate = 1;
	
	rate *= this.titlesfatigueRecoveryRate();
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID) && this._todayOrgasmML > 0)
		rate *= 1 + Math.min(1, this._todayOrgasmML * 0.003);
	
	if(Prison.easyMode()) rate *= 1.5;
	
	return rate;
};

Game_Actor.prototype.fatigueRecoveryNumber = function() {
	let num = 0;
	if(Prison.currentlyOutsidePrison()) 
		num = this.edictsFatigueRestOffice();
	else 
		num = this.edictsFatigueRestOutside();

	if(this.isAroused() && !this._todayMasturbatedBeforeRest) {
		num *= this.fatigueRecoveryNumberRateWhenAroused();
		this.increaseOnaniFrustration();
	}

	num *= this.fatigueRecoveryRate();

	return Math.round(num);
};

Game_Actor.prototype.getFatigueLevel = function() {
	let fatigue = this.fatigue;
	let level = 0;
	
	if(fatigue >= 65) level = 5;
	else if(fatigue >= 55) level = 4;
	else if(fatigue >= 45) level = 3;
	else if(fatigue >= 35) level = 2;
	else if(fatigue >= 25) level = 1;
	
	return level;
};

Game_Actor.prototype.fatigueLevelParamRate = function(paramId) {
	let level = this.getFatigueLevel();
	let rate = 1;

	if(paramId === PARAM_MAXSTAMINA_ID || paramId === PARAM_MAXENERGY_ID) {
		return rate;
	}
	else if(level > 0) {
		rate -= Math.min(0.99, (level * 0.1));
	}
	return rate;
};

Game_Actor.prototype.getSleepQuality = function() {
	return this._sleepQuality;
};
Game_Actor.prototype.setSleepQuality = function(value) {
	this._sleepQuality = value;
};

Game_Actor.prototype.sleepQualityParamRate = function(paramId) {
	let sleepQuality = this.getSleepQuality();
	let rate = 1;

	if(sleepQuality <= -2) {
		if(paramId === PARAM_CHARM_ID) 
			rate = 0.8;
		else rate = 0.9;
	}
	else if(sleepQuality === -1) {
		if(paramId === PARAM_CHARM_ID) 
			rate = 0.9;
		else rate = 0.95;
	}
	else if(sleepQuality === 1) {
		rate = 1.03;
	}
	else if(sleepQuality === 2) {
		rate = 1.06;
	}
	else if(sleepQuality >= 3) {
		rate = 1.09;
	}
	
	return rate;
};

//used when resting
Game_Actor.prototype.recoverAll_nextDay = function() {
    this.clearStates(); //todo: remove day specific states only?
    this._hp = this.mhp;
	this._mp = this.mmp;
	
	let mapId = $gameMap._mapId;
	
	if(this._todayMasturbatedBeforeRest)
		this.setPleasure(0); 
	else
		this.setPleasure(Math.ceil(this.pleasure * 0.5));
}; 

Game_Actor.prototype.removeStatesOnNewWave = function() {
    this.removeState(STATE_WEAKNESS_EXPOSED_ID);
	this.removeState(STATE_PLEASURE_STANCE_ID);
}; 

Game_Actor.prototype.resetGotHitBySkillType = function() { 
	if($gameParty.isInGloryBattle && (this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_LEFT_HOLE_SHOWED) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_RIGHT_HOLE_SHOWED))) {}
	else
		this._justGotHitBySkillType = 0;
	this._lastHandUsedForHandjob = 0;
};

//currently floor damage increases fatigue, but maybe have it increase pleasure instead??
Game_Actor.prototype.executeFloorDamage = function() {
    var damage = Math.floor($gameParty.getFloorDamageRate());
    if (damage > 0) {
		this.gainFatigue(damage);
        this.performMapDamage();
    }
};

/////////
// Is Alive
// Is Dead
/////////////

Game_Actor.prototype.isAlive = function() {
    return this.isAppeared() && (!this.isDeathStateAffected() || this.isInNeverDeadPose());
};
Game_Actor.prototype.isDead = function() {
    return this.isAppeared() && this.isDeathStateAffected() && !this.isInNeverDeadPose();
};

/////////
// Regenerate
////////////

Game_Actor.prototype.regenerateHp = function() {
	if(this.hasNoEnergy()) {
		let value = Math.floor(this.realMaxStamina * VAR_NO_ENERGY_STAMINA_DAMAGE);
		this.gainHp(-value);
	}
	else {
		let value = Math.floor(this.maxstamina * this.staminaregen) * this.regenerateStaminaRate();
		
		if(Prison.easyMode()) {
			if(ConfigManager.cheatActorHalfStaminaRegen) value *= 0.5;
			if(ConfigManager.cheatActorThirdStaminaRegen) value *= 0.33;
		}
		
		value = Math.floor(value);
		if (value !== 0) {
			this.gainHp(value);
		}
	}
};

Game_Actor.prototype.regenerateStaminaRate = function() {
	let rate = 1;
	let exceptionForNeverRegen = this.isInMasturbationCouchPose();
	let exceptionForRegenWhenZeroStamina = $gameParty.isInGloryBattle && $gameTroop.getCurrentTurn_gloryBattle() < this._gloryBattle_restingTilTurn;
	if((this.hasNoStamina() && !exceptionForRegenWhenZeroStamina) || exceptionForNeverRegen) rate = 0;
	return rate;
};

Game_Actor.prototype.regenerateMp = function() {
	let value = this.maxenergy * this.energyregen * this.regenerateEnergyRate();
	if(value !== 0 && this.energy > 0) {
		this._tempEnergyRegenPool += value;
		let energy = 0;
		while(this._tempEnergyRegenPool >= 1) {
			energy++;
			this._tempEnergyRegenPool--;
		}
		if(energy > 0)
			this.gainMp(energy);
	}
	
	if(!$gameScreen.isMapMode()) {
		this.regenerateWill();
		this.regenerateDesires();
		this.passiveRegenEffects();
	}
	
	this.regenPussyJuice();
	this.resetGotHitBySkillType();
	//regenerateTp aka pleasure is after this function
};

Game_Actor.prototype.regenerateEnergyRate = function() {
	let rate = 1;
	if(this.isInMasturbationCouchPose() || this.isInJobPose()) rate = 0;
	return rate;
};

Game_Actor.prototype.regenerateWill = function() {
	var value = Math.floor(this.maxwill * this.willregen);
	if (value !== 0) {
		this.gainWill(value);
	}
};

/////////////
// Karryn Sensitivity
//////////////////

Game_Actor.prototype.recalculateBodySensitivities = function() {
    this.calculateMouthSensitivityRating();
	this.calculateBoobsSensitivityRating();
	this.calculateNipplesSensitivityRating();
	this.calculateClitSensitivityRating();
	this.calculatePussySensitivityRating();
	this.calculateButtSensitivityRating();
	this.calculateAnalSensitivityRating();
	this.calculateFingerSensitivityRating();
	this.calculateFootSensitivityRating();
	this.calculateTalkSensitivityRating();
	this.calculateSightSensitivityRating();
	this.calculatePussyCreampieSensitivityRating();
	this.calculateAnalCreampieSensitivityRating();
	this.calculateBukkakeSensitivityRating();
	this.calculateSwallowSensitivityRating();
	this.calculateMasochismSensitivityRating();
	this.calculateSadismSensitivityRating();
};

////////////////
// Karryn Skill Lvl
////////////////////

Game_Actor.prototype.recalculateSkillLvls = function() {
	this.calculatePettingSkillRating();
	this.calculateKissSkillRating();
	this.calculateHandjobSkillRating();
	this.calculateBlowjobSkillRating();
	this.calculateRimjobSkillRating();
	this.calculateTittyFuckSkillRating();
	this.calculateFootjobSkillRating();
	this.calculatePussySexSkillRating();
	this.calculateAnalSexSkillRating();
	this.calculateMasturbateSkillRating();

	this.calculatePettingSkillLvl();
	this.calculateKissSkillLvl();
	this.calculateHandjobSkillLvl();
	this.calculateBlowjobSkillLvl();
	this.calculateRimjobSkillLvl();
	this.calculateFootjobSkillLvl();
	this.calculateTittyFuckSkillLvl();
	this.calculatePussySexSkillLvl();
	this.calculateAnalSexSkillLvl();
	this.calculateMasturbateSkillLvl();
	this.calculateMasochismSkillLvl();
	this.calculateSadismSkillLvl();
};

//////////////
// Karryn Pleasure
/////////////////

Game_Actor.prototype.arousalPoint = function() { 
	let value = this._arousalBasePoint + this.end * VAR_AP_PER_END + this.level * VAR_AP_PER_CLVL;
	return value;
};
Game_Actor.prototype.orgasmPoint = function() { 
	let value = this._orgasmBasePoint + this.end * VAR_OP_PER_END + this.level * VAR_OP_PER_CLVL;
	return value;
};

Game_Actor.prototype.setPleasure = function(value) { 
	let previouslyAroused = this.isAroused();
	let previouslyOrgasmPoint = this.reachedOrgasmPoint();
	value = Math.round(value);
	this.setTp(value); 
	if((previouslyAroused != this.isAroused() || 
	previouslyOrgasmPoint != this.reachedOrgasmPoint())) { 
		if(this.isInMapPose()) 
			this.setWardenMapPoseExtensions();
		this.emoteMasterManager();
		//this.setCacheChanged();
	}
		
	if(this.isAroused()) $gameSwitches.setValue(SWITCH_IS_AROUSED_ID, true);
	else $gameSwitches.setValue(SWITCH_IS_AROUSED_ID, false);
	
	$gameScreen.setMapInfoRefreshNeeded();
};

////////
// Param
////////////

Remtairy.Karryn.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
	let num = 0;
	if(this._paramLvl) {
		num = this._paramLvl[paramId];
		if(paramId === PARAM_MAXSTAMINA_ID) {
			num *= RESULTS_STAMINA_PER_PLVL;
			num += this.end * RESULTS_STAMINA_PER_ENDURANCE;
		}
		else if(paramId === PARAM_MAXENERGY_ID) {
			num = Math.round(num * RESULTS_ENERGY_PER_PLVL);
		}
	}
	num += this.passiveParamBonus(paramId); 
	num += this.karrynEdictParamBonus(paramId);
	num += this.titleParamBonus(paramId);
	num += this.giftsParamBonus(paramId);

	if(paramId === PARAM_CHARM_ID) {
		num += this.totalAccessoriesOwnedCount();
		
		if(this.slutLvl <= 100) {
			num -= Math.floor(this.slutLvl * 0.03);
		}
		else if(this.slutLvl <= 200) {
			num -= 3;
			num -= Math.floor((this.slutLvl - 100) * 0.04);
		}
		else if(this.slutLvl <= 300) {
			num -= 7;
			num -= Math.floor((this.slutLvl - 200) * 0.05);
		}
		else {
			num -= 12;
			num -= Math.floor((this.slutLvl - 300) * 0.067);
		}
		
	}
	
    return Remtairy.Karryn.Game_Actor_paramBase.call(this, paramId) + num;
};

////////////
// Param Rate
/////////////

Game_Actor.prototype.paramRate = function(paramId) {
    let rate = Game_Battler.prototype.paramRate.call(this, paramId);
    rate *= this.actor().rateParams[paramId];
    rate *= this.currentClass().rateParams[paramId];
    let length = this.equips().length;
    for (let i = 0; i < length; ++i) {
      let obj = this.equips()[i];
      if (obj && obj.rateParams) rate *= obj.rateParams[paramId];
    }
	
	rate *= this.karrynEdictParamRate(paramId);
	rate *= this.passiveParamRate(paramId);
	rate *= this.willpowerParamRate(paramId);
	rate *= this.confidentParamRate(paramId);
	rate *= this.fatigueLevelParamRate(paramId);
	rate *= this.sleepQualityParamRate(paramId);
	rate *= this.onaniFrustrationParamRate(paramId);
	rate *= this.virginityParamRate(paramId);
	rate *= this.giftsParamRate(paramId);
	rate *= this.waitressParamRate(paramId);
	rate *= this.receptionistParamRate(paramId);

	if($gameParty.isRiotBattle()) {
		if(this.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_THREE)) rate *= 1.03;
		else if(this.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_TWO)) rate *= 1.02;
		else if(this.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_ONE)) rate *= 1.01;
		if(this.isUsingThisTitle(TITLE_ID_SUPPRESS_RIOT_TWO)) rate *= 1.05;
	}
	
	if(paramId === PARAM_MAXSTAMINA_ID && this.ateArtisanMeal(ARTISAN_MEAL_HEART)) rate *= 1.15;
	if(this.ateArtisanMeal(ARTISAN_MEAL_HERO)) {
		if(paramId === PARAM_STRENGTH_ID || paramId === PARAM_DEXTERITY_ID || paramId === PARAM_AGILITY_ID)
			rate *= 1.05;
	}
	
	if(this.isUsingStoreItem(STORE_ITEM_ENERGY_DRINK)) rate *= 0.95;
	
	//if(paramId === PARAM_DEXTERITY_ID) rate *= 0.01;
	
    return rate;
};

Game_Actor.prototype.xparamPlus = function(id) {
    let value = Game_Battler.prototype.xparamPlus.call(this, id);
    let length = this.equips().length;
    for (let i = 0; i < length; ++i) {
      let obj = this.equips()[i];
      if (obj && obj.plusXParams) value += obj.plusXParams[id];
    }
    value += this.actor().plusXParams[id];
    value += this.currentClass().plusXParams[id];
	
	value += this.karrynEdictXParamPlus(id);
	value += this.willpowerXParamPlus(id);
	value += this.passiveXParamPlus(id);
	value += this.titleXParamPlus(id);
	value += this.halberdAndUnarmedXParamPlus(id);
	
	//Counter Stance
	if(id === XPARAM_CNT_ID && this.isStateAffected(STATE_COUNTER_STANCE_ID)) {
		value += this.counterStanceXParamPlus();
	}
	//Defensive Stance
	if(id === XPARAM_STA_REGEN_ID && this.isStateAffected(STATE_GUARD_ID)) {
		value += this.defStanceXParamPlus();
	}
	
	//Artisan
	if((id === XPARAM_STA_REGEN_ID || id === XPARAM_EN_REGEN_ID) && this.ateArtisanMeal(ARTISAN_MEAL_COMFY)) 
		value += 0.05;
	
	//Store
	if(id === XPARAM_STA_REGEN_ID && this.isUsingStoreItem(STORE_ITEM_PAIN_RESIST_PILL)) 
		value -= 0.02;
	else if(id === XPARAM_CRIT_ID && this.isUsingHalberd() && this.isUsingStoreItem(STORE_ITEM_WELTSTONE)) 
		value += 0.25;
	
	if(this.isCoolAndCollected()) {
		if(id === XPARAM_STA_REGEN_ID) 
			value += 0.02;
		else if(id === XPARAM_EN_REGEN_ID)
			value += 0.02;
	}
	
    return value;
};

Game_Actor.prototype.xparamRate = function(id) {
    let value = Game_Battler.prototype.xparamRate.call(this, id);
    let length = this.equips().length;
    for (let i = 0; i < length; ++i) {
      let obj = this.equips()[i];
      if (obj && obj.rateXParams) value *= obj.rateXParams[id];
    }
    value *= this.actor().rateXParams[id];
    value *= this.currentClass().rateXParams[id];
	
	value *= this.passiveXParamRate(id);
	value *= this.passiveDebuffXParamRate(id);
	value *= this.exposedWeaknessXParamRate(id);
	value *= this.onaniFrustrationXParamRate(id);
	value *= this.coolXParamRate(id);
	value *= this.desireXParamRate(id);
	value *= this.giftsXParamRate(id);
	value *= this.waitressXParamRate(id);
	value *= this.receptionistXParamRate(id);
	value *= this.gloryXParamRate(id);
	
	//Non combat evasion
	if(id === XPARAM_EVA_ID && (this.isInSexPose() || this.isInDownPose() || this.isInMasturbationPose())) value = 0;

	//Poison
	if(id === XPARAM_STA_REGEN_ID && this.isStateAffected(STATE_POISON_ID)) value = 0;
	
	if(id === XPARAM_EVA_ID && $gameTemp.isPlaytest() && TESTING_KARRYN_NO_EVADE) value = 0;
	
	if(id === XPARAM_EVA_ID && Prison.easyMode() && ConfigManager.cheatActorNoEvasion) value = 0;
	
	if((id === XPARAM_EVA_ID || id === XPARAM_CRIT_EVA_ID) && this.isStateAffected(STATE_CAUTIOUS_STANCE_ID)) {
		value *= this.cautiousStanceXParamRate();
	}
	
	if(id === XPARAM_HIT_ID) value *= 1 + this._tempAttackSkillConsUsage * 0.05;
	
    return value;
};

Game_Actor.prototype.xparamFlat = function(id) {
    let value = Game_Battler.prototype.xparamFlat.call(this, id);
    let length = this.equips().length;
    for (let i = 0; i < length; ++i) {
      let obj = this.equips()[i];
      if (obj && obj.flatXParams) value += obj.flatXParams[id];
    }
    value += this.actor().flatXParams[id];
    value += this.currentClass().flatXParams[id];
	
	if(id === XPARAM_STA_REGEN_ID && this.isStateAffected(STATE_POISON_ID)) value = -0.1;
	
    return value;
};

Game_Actor.prototype.sparamPlus = function(id) {
    let value = Game_Battler.prototype.sparamPlus.call(this, id);
    let length = this.equips().length;
    for (let i = 0; i < length; ++i) {
      let obj = this.equips()[i];
      if (obj && obj.plusSParams) value += obj.plusSParams[id];
    }
    value += this.actor().plusSParams[id];
    value += this.currentClass().plusSParams[id];
	
	value += this.halberdAndUnarmedSParamPlus(id);
	value += this.titlesSParamPlus(id);
	
	if(id === SPARAM_WP_REGEN_ID && this.ateArtisanMeal(ARTISAN_MEAL_COMFY)) value += 0.05;
	
	if(this.isCoolAndCollected()) {
		if(id === SPARAM_WP_REGEN_ID) 
			value += 0.02;
	}
	
    return value;
};

Game_Actor.prototype.sparamRate = function(id) {
    let value = Game_Battler.prototype.sparamRate.call(this, id);
    let length = this.equips().length;
    for (let i = 0; i < length; ++i) {
      let obj = this.equips()[i];
      if (obj && obj.rateSParams) value *= obj.rateSParams[id];
    }
    value *= this.actor().rateSParams[id];
    value *= this.currentClass().rateSParams[id];
	
	if(id === SPARAM_ESC_ID || id === SPARAM_WSC_ID) value *= this.accessoryBonusEscWsc();
	else if(id === SPARAM_ASC_ID || (id === SPARAM_SSC_ID && DEBUG_MODE)) value *= this.accessoryBonusAscSsc();
	
	if(id === SPARAM_EXR_ID && this.ateArtisanMeal(ARTISAN_MEAL_SMART)) value *= 1.5;
	
	if(id === SPARAM_EXR_ID && this.metalExpRateBonus() > 0) value *= (1 + (this.metalExpRateBonus() * 0.01));
	
	if(id === SPARAM_EXR_ID && Prison.easyMode() && ConfigManager.cheatActorHalfExpRate) value *= 0.5;
	
	if(id === SPARAM_WPATK_ID && this.isStateAffected(STATE_COUNTER_STANCE_ID)) {
		value *= this.counterStanceSParamRate();
	}
	
	if(id === SPARAM_WPDEF_ID && this.isStateAffected(STATE_GUARD_ID)) {
		value *= this.defStanceSParamRate();
	}
	
	if(id === SPARAM_WPDEF_ID && this.isUsingHalberd() && this.isUsingStoreItem(STORE_ITEM_WELTSTONE)) 
		value *= 0.9;
	
	
	value *= this.passiveDebuffSParamRate(id);
	value *= this.willpowerSParamRate(id);
	value *= this.giftsSParamRate(id);
	value *= this.passiveSParamRate(id);
	value *= this.onaniFrustrationSParamRate(id);
	value *= this.desireSParamRate(id);
	value *= this.waitressSParamRate(id);
	value *= this.receptionistSParamRate(id);
	value *= this.glorySParamRate(id);
	value *= this.titlesSParamRate(id);
	value *= this.edictsSParamRate(id);
	
    return value;
};

/////////
// Critical Damage
////////////

Game_Actor.prototype.criticalMultiplierBonus = function() {
    let multiplier = Game_Battler.prototype.criticalMultiplierBonus.call(this);
    multiplier += this.actor().critMultBonus;
    multiplier += this.currentClass().critMultBonus;
    for (let i = 0; i < this.equips().length; ++i) {
      let equip = this.equips()[i];
      if (equip) multiplier += equip.critMultBonus;
    }
	
	if(this.isUsingHalberd()) {
		multiplier += this.edictsHalberdCriticalMultiplierBonus();
	}
	
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE)) 
		multiplier += 0.1;
	
	multiplier += this.passiveCriticalDamageBonus();
	multiplier += this.desireCriticalMultiplierBonus();
	
    return multiplier;
};

//////////
// Element Rate
////////////////

Game_Actor.prototype.elementRate = function(elementId) {
    let rate = this.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, elementId);
	let bonus = 0;
	
	if(elementId === ELEMENT_TALK_ID) {

		bonus += this.karrynPassiveTalkElementRate();
		
		if(this.isUsingStoreItem(STORE_ITEM_APHRODISIAC_PERFUME)) bonus += 0.15;
	}
	else if(elementId === ELEMENT_SIGHT_ID) {

		bonus += this.karrynPassiveSightElementRate();
	}
	else if(elementId === ELEMENT_STRIP_ID) {

		bonus += this.karrynPassiveStripElementRate();
		
		if(this.isUsingStoreItem(STORE_ITEM_APHRODISIAC_PERFUME)) bonus += 0.15;
		else if(this.isUsingStoreItem(STORE_ITEM_FABRIC_HARDENER)) bonus -= 0.3;
	}
	else if(elementId === ELEMENT_PETTING_ID) {
		bonus += this.karrynPassivePettingElementRate();
		
		if(this.hasEdict(EDICT_SPEC_PETTING_RESIST)) bonus -= 0.25;
		if(this.ateArtisanMeal(ARTISAN_MEAL_WARDEN)) bonus -= 0.2;
		
	}
	else if(elementId === ELEMENT_SEX_ID) {
		bonus += this.karrynPassiveSexElementRate();
		
		if(this.hasEdict(EDICT_SPEC_SEX_RESIST)) bonus -= 0.15;
		if(this.ateArtisanMeal(ARTISAN_MEAL_WARDEN)) bonus -= 0.2;
	}
	else if(elementId === ELEMENT_DRUGS_ID) {
		bonus += this.karrynEdictDrugElementRate();
	}
	else if(elementId === ELEMENT_SLASH_ID || elementId === ELEMENT_PIERCE_ID || elementId === ELEMENT_BLUNT_ID) {

		bonus += this.karrynPassiveCombatElementRate(elementId);
		
		if(this.isUsingStoreItem(STORE_ITEM_PAIN_RESIST_PILL)) bonus -= 0.15;
	}
	 
	bonus += this.willpowerElementRate(elementId);
	//bonus += this.downPoseAndNoStaminaElementRate(elementId);
	bonus += this.exposedWeaknessElementRate(elementId, rate, bonus);
	bonus += this.passiveLizardmanElementRate(elementId);
	bonus += this.desireElementRate(elementId);
	
	let elementRate = rate + bonus;
	
	if(elementRate > 1) {
		elementRate = 1 + (elementRate - 1) * 0.5;
	}
	
	//the following don't get reduced in half
	elementRate += this.karrynAccessoryElementRate(elementId);
	elementRate += this.titlesElementRate(elementId);
	elementRate += this.giftsElementRate(elementId);
	
	elementRate = Math.max(elementRate, 0);
	return elementRate;
};

//unused
Game_Actor.prototype.downPoseAndNoStaminaElementRate = function(elementId) {
	if(this.isInDownPose() || this.hasNoStamina()) {
		if(elementId === ELEMENT_TALK_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_SIGHT_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_STRIP_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_PETTING_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_SEX_ID) {
			return 0.1;
		}
	}
	
	return 0;
};

Game_Actor.prototype.karrynAccessoryElementRate = function(elementId) {
	let bonus = 0;
	if(elementId === ELEMENT_TALK_ID) {
		bonus += this.karrynAccTalkElementRate();
	}
	else if(elementId === ELEMENT_SIGHT_ID) {
		bonus += this.karrynAccSightElementRate();
	}
	else if(elementId === ELEMENT_STRIP_ID) {
		bonus += this.karrynAccStripElementRate();
	}
	else if(elementId === ELEMENT_PETTING_ID) {
		bonus += this.karrynAccPettingElementRate();
	}
	else if(elementId === ELEMENT_SEX_ID) {
		bonus += this.karrynAccSexElementRate();
	}
	else if(elementId === ELEMENT_SLASH_ID) {
		bonus += this.karrynAccSlashElementRate();
	}
	else if(elementId === ELEMENT_PIERCE_ID) {
		bonus += this.karrynAccPierceElementRate();
	}
	else if(elementId === ELEMENT_BLUNT_ID) {
		bonus += this.karrynAccBluntElementRate();
	}
	
	return bonus;
};

Game_Actor.prototype.karrynAccTalkElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_MIDI_ID)) accBonus -= 0.25;
	
	
	if(this.isEquippingThisAccessory(MISC_NAILPOLISH_ID)) accBonus -= 0.05;
	if(this.isEquippingThisAccessory(MISC_LIPGLOSS_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) accBonus -= 0.06;
	if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus += 0.15;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccSightElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_MIDI_ID)) accBonus -= 0.25;
	
	if(this.isEquippingThisAccessory(MISC_NAILPOLISH_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) accBonus -= 0.05;
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) accBonus -= 0.06;
	if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus += 0.15;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccPettingElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) accBonus -= 0.3;
	
	if(this.isEquippingThisAccessory(MISC_LIPGLOSS_ID)) accBonus -= 0.05;
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus += 0.15;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccSexElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_GOLDGLASS_ID)) accBonus -= 0.3;
	if(this.isEquippingThisAccessory(NECKLACE_EMERALD_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus -= 0.07;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccStripElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(MISC_CALFSKINBELT_ID)) accBonus -= 0.25;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccSlashElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(NECKLACE_DOGTAG_ID)) accBonus -= 0.33;
	if(this.isEquippingThisAccessory(NECKLACE_BALL_ID)) accBonus += 0.1;
	
	return accBonus;
};
Game_Actor.prototype.karrynAccPierceElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(NECKLACE_BALL_ID)) accBonus -= 0.33;
	if(this.isEquippingThisAccessory(NECKLACE_CHAIN_ID)) accBonus += 0.1;
	
	return accBonus;
};
Game_Actor.prototype.karrynAccBluntElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(NECKLACE_CHAIN_ID)) accBonus -= 0.33;
	if(this.isEquippingThisAccessory(NECKLACE_DOGTAG_ID)) accBonus += 0.1;
	
	return accBonus;
};


///////
// Halberd
////////////

Game_Actor.prototype.isUsingHalberd = function() {
	if(this.isInSexPose() || this.isInDownPose() || !this.hasHalberd()) return false;
	return true;
};

Game_Actor.prototype.hasHalberd = function() {
	if(this.hasDisarmedState() || this.isStateAffected(STATE_NO_HALBERD_ID) || !this.equips()[0] || this.isUsingThisTitle(TITLE_ID_KICK_ONE) || this.isInJobPose() || this._halberdIsDefiled)
		return false;
	else 
		return true;
};

Game_Actor.prototype.setAsNoHalberdBattle = function() {
	this.addState(STATE_NO_HALBERD_ID);
};

Game_Actor.prototype.setHalberdAsDefiled = function(status) {
	this._halberdIsDefiled = status;
};

Game_Actor.prototype.halberdAndUnarmedXParamPlus = function(paramId) {
	let weaponXParamPlus = 0;
	
	if(this.isUsingHalberd()) {
		weaponXParamPlus += this.edictsHalberdXParamPlus(paramId);
	}
	
	return weaponXParamPlus;
};

Game_Actor.prototype.halberdAndUnarmedSParamPlus = function(paramId) {
	let weaponSParamPlus = 0;
	if(paramId !== SPARAM_WPATK_ID && paramId !== SPARAM_WPDEF_ID) return 0;
	
	if(this.isUsingHalberd()) {
		if(paramId === SPARAM_WPATK_ID) weaponSParamPlus += this.edictsHalberdAttack();
		if(paramId === SPARAM_WPDEF_ID) weaponSParamPlus += this.edictsHalberdDefense();
	}
	else
	{
		if(paramId === SPARAM_WPATK_ID) {
			weaponSParamPlus += this.edictsUnarmedAttack();
			weaponSParamPlus += this.titlesUnarmedAttack();
		}
		else if(paramId === SPARAM_WPDEF_ID) {
			weaponSParamPlus += this.edictsUnarmedDefense();
			weaponSParamPlus += this.titlesUnarmedDefense();
		}
	}

	return weaponSParamPlus;
};

/////////
// Overblow Protection
///////////////////

Game_Actor.prototype.overblowProtectionRate = function() {
	let op = 0.75;
	
	if(Prison.easyMode()) op -= 0.15;
	
	if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_TWO)) op -= 0.1;
	
	if(this.hasEdict(EDICT_SPEC_DEFENSIVE_MIND_FOCUS) && this.isStateAffected(STATE_FOCUS_ID)) 
		op -= this.willpowerFocusOverblowProtectionEffect();
	
	op -= (this._accessoryBonusLvl - 1) * 0.04
	
	if(this.isEquippingThisAccessory(NECKLACE_RUBY_ID)) op -= 0.1;
	
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION)) op -= 0.07;
	
	if(this.isGuarding) {
		op *= 0.5;
	}
	else if(this.isStateAffected(STATE_COUNTER_STANCE_ID)) {
		op *= 0.8;
	}
	
	return Math.max(op, 0.1);
};

/////////
// Body Slots
////////////

Game_Actor.prototype.setAllBodySlots = function(st) { 
	//st = Body Status
	this._body = [ -1, st, st, st, st, st, st, st, st, st, st, st, st, st, st, st, st ];
};
Game_Actor.prototype.setAllBodySlotsFree = function() { 
	this.setAllBodySlots(SLOT_FREE);
};
Game_Actor.prototype.setAllBodySlotsUnavailable = function() { 
	this.setAllBodySlots(SLOT_UNAVAILABLE);
};

Game_Actor.prototype.setAllBodySlotsExceptToy = function(st) { 
	//st = Body Status
	for(let i = 0; i < this._body.length; i++) {
		if(this.getBodySlotStatus(i) !== SLOT_TOY && this.getBodySlotStatus(i) !== SLOT_TOY_PETTING_ONLY && this.getBodySlotStatus(i) !== SLOT_UNAVAILABLE_BUT_HAS_TOY) {
			this.setBodyPart(i, st);
		}
		else if(st === SLOT_FREE) {
			this.setBodyPart(i, SLOT_TOY);
		}
		else if(st === SLOT_UNAVAILABLE) {
			this.setBodyPart(i, SLOT_UNAVAILABLE_BUT_HAS_TOY);
		}
	}
};
Game_Actor.prototype.setAllBodySlotsFreeExceptToy = function() { 
	this.setAllBodySlotsExceptToy(SLOT_FREE);
};
Game_Actor.prototype.setAllBodySlotsUnavailableExceptToy = function() { 
	this.setAllBodySlotsExceptToy(SLOT_UNAVAILABLE);
};

Game_Actor.prototype.setAllBodySlotsExceptPettedInsert = function(st) { 
	//st = Body Status
	for(let i = 0; i < this._body.length; i++) {
		if(this.getBodySlotStatus(i) !== SLOT_PENIS && this.getBodySlotStatus(i) !== SLOT_ANUS && this.getBodySlotStatus(i) !== SLOT_TONGUE && this.getBodySlotStatus(i) !== SLOT_PETTED) {
			this.setBodyPart(i, st);
		}
	}
};
Game_Actor.prototype.setAllBodySlotsFreeExceptPettedInsert = function() { 
	this.setAllBodySlotsExceptPettedInsert(SLOT_FREE);
};


Game_Actor.prototype.setBodyPart = function(slotId, status) {
	this._body[slotId] = status;
};
Game_Actor.prototype.setBodyPartFree = function(slotId) {
	this.setBodyPart(slotId, SLOT_FREE);
};

//unused
Game_Actor.prototype.setBodyPartFree_NoToys = function(slotId) {
	this.setBodyPart(slotId, SLOT_FREE_NO_TOYS);
};

Game_Actor.prototype.setBodyPartFree_PettingOnly = function(slotId) {
	if(this.getBodySlotStatus(slotId) === SLOT_TOY || this.getBodySlotStatus(slotId) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(slotId) === SLOT_UNAVAILABLE_BUT_HAS_TOY)
		this.setBodyPart(slotId, SLOT_TOY_PETTING_ONLY);
	else
		this.setBodyPart(slotId, SLOT_FREE_PETTING_ONLY);
};

//unused
Game_Actor.prototype.setBodyPartFree_PettingOnly_NoToys = function(slotId) {
	this.setBodyPart(slotId, SLOT_FREE_PETTING_ONLY_NO_TOYS);
};

Game_Actor.prototype.setBodyPartUnavailable = function(slotId) {
	if(this.getBodySlotStatus(slotId) === SLOT_TOY)
		this.setBodyPart(slotId, SLOT_UNAVAILABLE_BUT_HAS_TOY);
	else
		this.setBodyPart(slotId, SLOT_UNAVAILABLE);
};
Game_Actor.prototype.setBodyPartPetted = function(slotId) {
	this.setBodyPart(slotId, SLOT_PETTED);
};
Game_Actor.prototype.setBodyPartPetted_PettingOnly = function(slotId) {
	this.setBodyPart(slotId, SLOT_PETTED_PETTING_ONLY);
};
Game_Actor.prototype.setBodyPartToy = function(slotId) {
	if(this.getBodySlotStatus(slotId) == SLOT_FREE_PETTING_ONLY || this.getBodySlotStatus(slotId) == SLOT_PETTED_PETTING_ONLY)
		this.setBodyPart(slotId, SLOT_TOY_PETTING_ONLY);
	else if(this.getBodySlotStatus(slotId) == SLOT_UNAVAILABLE)
		this.setBodyPart(slotId, SLOT_UNAVAILABLE_BUT_HAS_TOY);
	else
		this.setBodyPart(slotId, SLOT_TOY);
};
Game_Actor.prototype.setBodyPartPenis = function(slotId) {
	this.setBodyPart(slotId, SLOT_PENIS);
};
Game_Actor.prototype.setBodyPartAnus = function(slotId) {
	this.setBodyPart(slotId, SLOT_ANUS);
};
Game_Actor.prototype.setBodyPartTongue = function(slotId) {
	this.setBodyPart(slotId, SLOT_TONGUE);
};


Game_Actor.prototype.getBodySlotStatus = function(slotId) {
	return this._body[slotId];
};

Game_Actor.prototype.isBodySlotFree = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_FREE;
};
Game_Actor.prototype.isBodySlotPenis = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_PENIS;
};
Game_Actor.prototype.isBodySlotAnus = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_ANUS;
};
Game_Actor.prototype.isBodySlotTongue = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_TONGUE;
};

Game_Actor.prototype.isBodySlotToy = function(slotId) {
	if(slotId === CLIT_ID) return this._wearingClitToy !== NO_TOY;
	else if(slotId === PUSSY_ID) return this._wearingPussyToy !== NO_TOY;
	else if(slotId === ANAL_ID) return this._wearingAnalToy !== NO_TOY;
	else return false
	
	//return this.getBodySlotStatus(slotId) === SLOT_TOY || this.getBodySlotStatus(slotId) === SLOT_TOY_PETTING_ONLY;
};

Game_Actor.prototype.isBodySlotInserted = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_PENIS || this.getBodySlotStatus(slotId) === SLOT_TOY;
};

Game_Actor.prototype.isBodySlotAvailableForPetting = function(slotId) {
	return this.getBodySlotStatus(slotId) < SLOT_PETTED_PETTING_ONLY;
};

//unused
Game_Actor.prototype.isBodySlotAvailableForToy = function(slotId) {
	return (this.getBodySlotStatus(slotId) < SLOT_TOY && 
	this.getBodySlotStatus(slotId) !== SLOT_FREE_NO_TOYS && 
	this.getBodySlotStatus(slotId) !== SLOT_FREE_PETTING_ONLY_NO_TOYS);
};

Game_Actor.prototype.isBodySlotAvailableForPenis = function(slotId) {
	if(this.getBodySlotStatus(slotId) === SLOT_FREE_PETTING_ONLY ||
	this.getBodySlotStatus(slotId) === SLOT_PETTED_PETTING_ONLY ||
	this.getBodySlotStatus(slotId) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(slotId) === SLOT_FREE_PETTING_ONLY_NO_TOYS) return false;

	return this.getBodySlotStatus(slotId) < SLOT_PENIS;
};

Game_Actor.prototype.isBodySlotUnavailable = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_UNAVAILABLE || this.getBodySlotStatus(slotId) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};

//////////
// Toy
//////////

Game_Actor.prototype.isWearingAnyToy = function() {
	return this.isWearingClitToy() || this.isWearingPussyToy() || this.isWearingAnalToy(); 
};

Game_Actor.prototype.isWearingClitToy = function() {
	return this._wearingClitToy !== NO_TOY;
	//return this.getBodySlotStatus(CLIT_ID) === SLOT_TOY || this.getBodySlotStatus(CLIT_ID) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(CLIT_ID) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};
Game_Actor.prototype.isWearingPussyToy = function() {
	return this._wearingPussyToy !== NO_TOY;
	//return this.getBodySlotStatus(PUSSY_ID) === SLOT_TOY || this.getBodySlotStatus(PUSSY_ID) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(PUSSY_ID) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};
Game_Actor.prototype.isWearingAnalToy = function() {
	return this._wearingAnalToy !== NO_TOY;
	//return this.getBodySlotStatus(ANAL_ID) === SLOT_TOY || this.getBodySlotStatus(ANAL_ID) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(ANAL_ID) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};

Game_Actor.prototype.setClitToy_PinkRotor = function(enemy) {
	//this.setBodyPartToy(CLIT_ID);
	this._wearingClitToy = CLIT_TOY_PINK_ROTOR;
	if(enemy) {
		let multipler = 0.4 + enemy.toyLvl() * 0.1;
		this._toyValue_clitToy = enemy.dex * multipler;
	}
};
Game_Actor.prototype.setPussyToy_PenisDildo = function(enemy) {
	//this.setBodyPartToy(PUSSY_ID);
	this._wearingPussyToy = PUSSY_TOY_PENIS_DILDO;
	if(enemy) {
		let multipler = 0.4 + enemy.toyLvl() * 0.1;
		this._toyValue_pussyToy = enemy.dex * multipler;
	}
};
Game_Actor.prototype.setAnalToy_AnalBeads = function(enemy) {
	//this.setBodyPartToy(ANAL_ID);
	this._wearingAnalToy = ANAL_TOY_ANAL_BEADS;
	if(enemy) {
		let multipler = 0.4 + enemy.toyLvl() * 0.1;
		this._toyValue_analToy = enemy.dex * multipler;
	}
};

Game_Actor.prototype.isWearingClitToy_PinkRotor = function() {
	return this.isWearingClitToy() && this._wearingClitToy === CLIT_TOY_PINK_ROTOR;
};
Game_Actor.prototype.isWearingPussyToy_PenisDildo = function() {
	return this.isWearingPussyToy() && this._wearingPussyToy === PUSSY_TOY_PENIS_DILDO;
};
Game_Actor.prototype.isWearingAnalToy_AnalBeads = function() {
	return this.isWearingAnalToy() && this._wearingAnalToy === ANAL_TOY_ANAL_BEADS;
};

Game_Actor.prototype.removeAllToys = function() {
	this.removeClitToy();
	this.removePussyToy();
	this.removeAnalToy();
};
Game_Actor.prototype.removeClitToy = function() {
	this.setToyInserted_ClitToy_PinkRotor(false);
	this._wearingClitToy = NO_TOY;
	this._toyValue_clitToy = 0;
	
	//if(this.getBodySlotStatus(CLIT_ID) == SLOT_TOY_PETTING_ONLY)
	//	this.setBodyPart(CLIT_ID, SLOT_FREE_PETTING_ONLY);
	//else
	//	this.setBodyPart(CLIT_ID, SLOT_FREE);
};
Game_Actor.prototype.removePussyToy = function() {
	this.setToyInserted_PussyToy_PenisDildo(false);
	this._wearingPussyToy = NO_TOY;
	this._toyValue_pussyToy = 0;
	
	//if(this.getBodySlotStatus(PUSSY_ID) == SLOT_TOY_PETTING_ONLY)
	//	this.setBodyPart(PUSSY_ID, SLOT_FREE_PETTING_ONLY);
	//else
	//	this.setBodyPart(PUSSY_ID, SLOT_FREE);
};
Game_Actor.prototype.removeAnalToy = function() {
	this.setToyInserted_AnalToy_AnalBeads(false);
	this._wearingAnalToy = NO_TOY;
	this._toyValue_analToy = 0;
	
	//if(this.getBodySlotStatus(ANAL_ID) == SLOT_TOY_PETTING_ONLY)
	//	this.setBodyPart(ANAL_ID, SLOT_FREE_PETTING_ONLY);
	//else
	//	this.setBodyPart(ANAL_ID, SLOT_FREE);
};

Game_Actor.prototype.getClitToyId = function() {
	if(this.isBodySlotToy(CLIT_ID) && this._wearingClitToy) 
		return '' + this.getTachieClitToyExtension() + this._wearingClitToy;
	else return NO_TOY;
};
Game_Actor.prototype.getPussyToyId = function() {
	if(this.isBodySlotToy(PUSSY_ID) && this._wearingPussyToy) 
		return '' + this.getTachiePussyToyExtension() + this._wearingPussyToy;
	else return NO_TOY;
};
Game_Actor.prototype.getAnalToyId = function() {
	if(this.isBodySlotToy(ANAL_ID) && this._wearingAnalToy) 
		return '' + this.getTachieAnalToyExtension() + this._wearingAnalToy;
	else return NO_TOY;
};



Game_Actor.prototype.getTachieClitToyExtension = function() {
	if(this.isInKarrynCowgirlPose()) {
		let clitToyExt = 'close_';
		if(this.tachieLegs.includes('far'))
			clitToyExt = 'far_';
		return clitToyExt;
	}
	else if($gameParty.isInGloryBattle) 
		return this.getTachieClitToyExtension_gloryBattle();
	else return '';
};
Game_Actor.prototype.getTachiePussyToyExtension = function() {
	if($gameParty.isInGloryBattle) 
		return this.getTachiePussyToyExtension_gloryBattle();
	else return '';
};
Game_Actor.prototype.getTachieAnalToyExtension = function() {
	if($gameParty.isInGloryBattle) 
		return this.getTachieAnalToyExtension_gloryBattle();
	else return '';
};

//////////
// Orgasm
///////////

/////////////
// Check For Orgasm
////////////////

Game_Actor.prototype.checkForOrgasm = function() {
	let canOrgasm = false;
	if(this.reachedOrgasmPoint() && !this.orgasmLocked() && DEBUG_MODE) {
		canOrgasm = true;
		if(this.isStateAffected(STATE_KARRYN_RESIST_ORGASM_ID)) {
			canOrgasm = false;
			if(this.pleasure > Math.round(this.orgasmPoint() * this.willpowerResistOrgasmEffect())) 
				canOrgasm = true;
		}
		if(this._isCurrentlyUsingSkewer) return false;
	}
	if(canOrgasm) this.orgasm();
};

Game_Actor.prototype.orgasm = function() {
	if(!this._orgasmCallQueuedUp) {
		this._orgasmCallQueuedUp = true;
		//this.addToActorSpecificOrgasmRecord();
		this.removeState(STATE_HORNY_ID);
		this.resetOnaniFrustration();
		this.resetOnaniInBattleDesireToBase();
		this._hornyTimeLimit = -1;
		this.setOrgasmTachieChange();
		let isDisabled = this.isStateAffected(STATE_DISABLED_ID);
		if(isDisabled) this.removeState(STATE_DISABLED_ID);
		this.useOrgasmSkill();
		if(isDisabled) this.addState(STATE_DISABLED_ID);
		//this.emoteMasterManager();
	}
	BattleManager.removeImmortalStateFromEveryone();
};

Game_Actor.prototype.postOrgasmPleasure = function() { 
	this.setPleasure(0);
};


Game_Actor.prototype.postOrgasmToys = function(orgasmCount) { 
	let chance = orgasmCount - 1;
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID))
		chance = 0;
		
	if(this.isWearingClitToy() && Math.random() < (chance * 0.25)) {
		this.removeClitToy();
	}
	if(this.isWearingPussyToy() && Math.random() < (chance * 0.25)) {
		this.removePussyToy();
	}
	if(this.isWearingAnalToy() && Math.random() < (chance * 0.25)) {
		this.removeAnalToy();
	}
};

Game_Actor.prototype.justOrgasmed = function() {
	return this.isStateAffected(STATE_JUST_ORGASMED_ID);
};
Game_Actor.prototype.addJustOrgasmed = function() {
	this.addState(STATE_JUST_ORGASMED_ID);
};
Game_Actor.prototype.getJustOrgasmedStateTurns = function() {
	return this.stateTurns(STATE_JUST_ORGASMED_ID);
};
Game_Actor.prototype.setJustOrgasmedStateTurns = function(value) {
	if($gameParty._showTopRightTimeNumberFlag) {
		if(this.isInWaitressServingPose())
			value *= 1.5;
		else if(this.isInReceptionistPose())
			value *= 1.5;
		value = Math.round(value);
	}
	this.setStateTurns(STATE_JUST_ORGASMED_ID, value);
};
Game_Actor.prototype.increaseJustOrgasmedStateTurns = function(value) {
	if(value < 0) {
		if(this.getJustOrgasmedStateTurns() <= -1 * value)
			this.removeState(STATE_JUST_ORGASMED_ID);
		else
			this.setStateTurns(STATE_JUST_ORGASMED_ID, this.getJustOrgasmedStateTurns() + value);
	}
	else 
		this.setStateTurns(STATE_JUST_ORGASMED_ID, this.getJustOrgasmedStateTurns() + value);
};

Game_Actor.prototype.checkJustOrgasmStateAtTurnEnd = function() {
	if(this.justOrgasmed() && $gameTroop.isAllDead()) {
		this.increaseJustOrgasmedStateTurns(1);
	}
};


//////////
// Stench
////////////

Game_Actor.prototype.stenchTolerance = function() { 
	var value = this.stench;

	return value;
};

/////////
// Clothing
//////////

Game_Actor.prototype.setupClothingStatus = function(startingDurability, maxStages, clothingType) { 
	this._clothingBaseDurability = startingDurability;
	this._clothingMaxStage = maxStages;
	this._clothingType = clothingType;
	this.restoreClothingDurability();
};

//For now 
Game_Actor.prototype.changeToWardenClothing = function() { 
	this.setupClothingStatus(CLOTHES_WARDEN_START, CLOTHES_WARDEN_MAXSTAGES, CLOTHING_ID_WARDEN);
};

//Now unused, replaced by setWardenMapPose_Naked
Game_Actor.prototype.changeToNakedClothing = function() { 
	this.setupClothingStatus(0, 1, CLOTHING_ID_NAKED);
};
Game_Actor.prototype.changeToSecretaryClothing = function() { 
	this.setupClothingStatus(0, 1, CLOTHING_ID_SECRETARY);
};
Game_Actor.prototype.changeToWaitressClothing = function() { 
	this.setupClothingStatus(CLOTHES_WAITRESS_START, CLOTHES_WAITRESS_MAXSTAGES, CLOTHING_ID_WAITRESS);
};
Game_Actor.prototype.changeToReceptionistClothing = function() { 
	this.setupClothingStatus(CLOTHES_RECEPTIONIST_START, CLOTHES_RECEPTIONIST_MAXSTAGES, CLOTHING_ID_RECEPTIONIST);
};

Game_Actor.prototype.getClothingMaxDurability = function() { 
	return this._clothingBaseDurability + this.edictsBonusClothingMaxDurability();
};

Game_Actor.prototype.restoreClothingDurability = function() { 
	this._clothingDurability = this.getClothingMaxDurability();
	this._clothingStage = CLOTHES_STARTING_STAGE;
	this._hasNoClothesOn = false;
	$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, false);
};

Game_Actor.prototype.changeClothingToStage = function(stage) { 
	let newStage = Math.min(this._clothingMaxStage, Math.max(1, stage));
	this._clothingStage = Math.max(1, newStage - 1);
	this._clothingDurability = this.minimumClothingDurabilityForCurrentStage();
	this._clothingStage = newStage;

};

Game_Actor.prototype.minimumClothingDurabilityForCurrentStage = function() { 
	let maxDura = this.getClothingMaxDurability();
	let perStage = Math.round(maxDura / this._clothingMaxStage);
	let minimum = maxDura - (perStage * this.clothingStage);
	return minimum;
};

Game_Actor.prototype.damageClothing = function(damage, dontHitMax) { 
	if(damage <= 0 || this.isClothingMaxDamaged() || !DEBUG_MODE) return;
	
	let minimum = this.minimumClothingDurabilityForCurrentStage();
	let outcome = this.clothingDurability - damage;
	
	if(outcome <= minimum) {
		if(dontHitMax && this._clothingStage + 1 === this._clothingMaxStage) {
			outcome += 1;
		}
		else {
			outcome = minimum;
			this._clothingStage++; 
		}
	}
	
	this._clothingDurability = outcome;
	
	if(this.isClothingMaxDamaged() && this.isWearingWardenClothing()) 
		this.addToClothesStrippedRecord();
};

//For event use
Game_Actor.prototype.removeClothing = function() { 
	this._clothingStage = this._clothingMaxStage; 
	this._clothingDurability = 0;
};

//For combat use by enemy
Game_Actor.prototype.stripOffClothing = function() { 
	if(this.isClothingMaxDamaged()) return;
	this.removeClothing(); 
	this.addToClothesStrippedRecord();
};

Game_Actor.prototype.isWearingWardenClothing = function() { 
	return this._clothingType === CLOTHING_ID_WARDEN;
};
Game_Actor.prototype.isWearingSecretaryClothing = function() { 
	return this._clothingType === CLOTHING_ID_SECRETARY;
};
Game_Actor.prototype.isWearingWaitressClothing = function() { 
	return this._clothingType === CLOTHING_ID_WAITRESS;
};
Game_Actor.prototype.isWearingReceptionistClothing = function() { 
	return this._clothingType === CLOTHING_ID_RECEPTIONIST;
};

Game_Actor.prototype.isClothingMaxDamaged = function() { 
	return this.clothingStage === this._clothingMaxStage;
};
Game_Actor.prototype.isClothingNotDamaged = function() { 
	return this.clothingStage === CLOTHES_STARTING_STAGE;
};
Game_Actor.prototype.isClothingAtStage = function(stage) { 
	return this.clothingStage >= stage;
};

Game_Actor.prototype.isClothingAtStageSlightlyMoved = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SLIGHTLY_MOVED);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(2);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(2);
	else return true;
};
Game_Actor.prototype.isClothingAtStageSeeOneBoob = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SEE_ONE_BOOB);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(2);
	else return true;
};
Game_Actor.prototype.isClothingAtStageSeeBothBoobs = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SEE_BOTH_BOOBS);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(3);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessClit_NoPanties = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SLIGHTLY_MOVED);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(2);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(2);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessClit_WearingPanties = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SEE_PUSSY);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(2);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(2);
	else return true;
};
Game_Actor.prototype.isClothingAtStageSeePussy = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SEE_PUSSY);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(2);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(2);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessPussy = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_ACCESS_PUSSY);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(3);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(3);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageSeeButt = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SEE_BUTT);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(2);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageAccessButt = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_SLIGHTLY_MOVED);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(2);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(2);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessAnal = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_ACCESS_ANAL);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(3);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(3);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessFeet = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(4);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageAccessHands = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(4);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageAccessMouth = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(4);
	else return true;	
};

/////////
// Panties
///////////

Game_Actor.prototype.putOnPanties = function() { 
	this._wearingPanties = true;
	this._lostPanties = false;
};

//For non combat use, Ex: events, bath, etc
Game_Actor.prototype.takeOffPanties = function() { 
	this._wearingPanties = false;
};

//For combat use only
Game_Actor.prototype.stripOffPanties = function() { 
	if(!this.isWearingPanties()) return;
	this.takeOffPanties();
	this.addToPantiesStrippedRecord();
	this.passiveStripOffPanties_losePantiesEffect();
};
Game_Actor.prototype.isWearingPanties = function() { 
	if(!DEBUG_MODE) return true;
	else return this._wearingPanties;
};

Game_Actor.prototype.setPantiesType = function(value) { 
	this._pantiesType = value;
};
Game_Actor.prototype.getPantiesType = function() { 
	return this._pantiesType;
};

Game_Actor.prototype.showPantiesStateIcon = function() { 
	if(this.isNaked() || !DEBUG_MODE) return false;
	else if(this.isInWaitressSexPose() || $gameParty.isInGloryBattle) return false;
	else if(this.isInCombatPose() || this.isInDownPose() || this.isInJobPose()) return true;
	else return false;
};

Game_Actor.prototype.isNaked = function() { 
	return this.isClothingMaxDamaged() && !this.isWearingPanties();
};

Game_Actor.prototype.isWearingGlovesAndHat = function() { 
	return this._wearingGlovesAndHat;
};
Game_Actor.prototype.takeOffGlovesAndHat = function() { 
	this._wearingGlovesAndHat = false;
	$gameSwitches.setValue(SWITCH_IS_NAKED_NO_HATS_OR_GLOVES_ID, true);
	this.resetTachieHat();
};
Game_Actor.prototype.putOnGlovesAndHat = function() { 
	this._wearingGlovesAndHat = true;
	$gameSwitches.setValue(SWITCH_IS_NAKED_NO_HATS_OR_GLOVES_ID, false);
};

///////
// Accessories
////////

Game_Actor.prototype.isEquippingThisAccessory = function(id) {
	if(this.isUsingThisTitle(TITLE_ID_FINAL_DESTINATION)) {
		if(this.equips()[EQUIP_SLOT_ACCESSORY_START_ID]) {
			if(id == this.equips()[EQUIP_SLOT_ACCESSORY_START_ID].id) return true;
		}
	}
	else {
		for(let i = EQUIP_SLOT_ACCESSORY_START_ID; i <= EQUIP_SLOT_ACCESSORY_END_ID; ++i) {
			if(this.equips()[i]) {
				if(id == this.equips()[i].id) return true;
			}
		}
	}
	return false;
};

Game_Actor.prototype.totalAccessoriesOwnedCount = function() {
	let accCount = 0;
	
	for(let i = ACCESSORY_ID_START_ONE; i <= ACCESSORY_ID_END_ONE; ++i) {
		if($gameParty.hasItem($dataArmors[i], true)) accCount++;
	}		
	
	for(let i = ACCESSORY_ID_START_TWO; i <= ACCESSORY_ID_END_TWO; ++i) {
		if($gameParty.hasItem($dataArmors[i], true)) accCount++;
	}
	
	return accCount;
};

Game_Actor.prototype.accessoryCharmReq = function(offset) {
	if(!offset) offset = 0;
	let count = 0;
	if(this.equips()[1]) count++;
	if(this.equips()[2]) count++;
	if(this.equips()[3]) count++;
	if(this.equips()[4]) count++;
	if(this.equips()[5]) count++;
	
	count -= offset;
	
	if(count === 0) return VAR_ACCESSORY_CHARM_REQ_1;
	else if(count === 1) return VAR_ACCESSORY_CHARM_REQ_2;
	else if(count === 2) return VAR_ACCESSORY_CHARM_REQ_3;
	else if(count === 3) return VAR_ACCESSORY_CHARM_REQ_4;
	else return VAR_ACCESSORY_CHARM_REQ_5;
};

Game_Actor.prototype.meetEquipParamRequirements = function(item, accessoryCharmOffset) {
	if(item.atypeId !== 1) return true;
	let requirements = item.equipRequirements;
	for (let i = 0; i < 9; ++i) {
		let param = 0;
		if (i === 8) {
			param = this.level;
		} else {
			param = Math.round((this.paramBase(i) + this.paramPlus(i)) * this.paramRate(i) + this.paramFlat(i));
		}
		if(i === PARAM_CHARM_ID) {
			if(requirements['atLeast'][i] + this.accessoryCharmReq(accessoryCharmOffset)  > param) {
				return false;
			}
		}
		if(requirements['atLeast'][i] > 0) {
			if(requirements['atLeast'][i] > param) return false;
		}
		if(requirements['atMost'][i] > 0) {
			if(requirements['atMost'][i] < param) return false;
		}
	}
	return true;
};

Game_Actor.prototype.meetAllEquipRequirements = function(item, accessoryCharmOffset) {
	if (!item.equipRequirements) {
		if (item.baseItemId) {
			item.equipRequirements = DataManager.getBaseItem(item).equipRequirements;
		} else {
			return true;
		}
	}
	if (!this.meetEquipParamRequirements(item, accessoryCharmOffset)) return false;
	if (!this.meetEquipClassRequirements(item)) return false;
	if (!this.meetEquipSkillRequirements(item)) return false;
	if (!this.meetEquipSwitchRequirements(item)) return false;
	if (!this.meetEquipUniqueRequirements(item)) return false;
	if (!this.meetEquipEvalRequirements(item)) return false;
	return true;
};

Game_Actor.prototype.setAccessoryBonus = function() {
	let rings = 0;
	let bracelets = 0;
	let necklaces = 0;
	let earrings = 0;
	let miscAccs = 0;
    for(let i = 1; i <= 5; i++) {
		if(this.equips()[i]) {
			let acc = $dataArmors[this.equips()[i].id];
			if(acc.hasTag(ARMOR_TAG_RING)) rings++;
			else if(acc.hasTag(ARMOR_TAG_NECKLACE)) necklaces++;
			else if(acc.hasTag(ARMOR_TAG_EARRINGS)) earrings++;
			else if(acc.hasTag(ARMOR_TAG_BRACELET)) bracelets++;
			else if(acc.hasTag(ARMOR_TAG_MISC)) miscAccs++;
		}
	}
	
	let unique = 0;
	if(rings > 0) unique++;
	if(necklaces > 0) unique++;
	if(earrings > 0) unique++;
	if(bracelets > 0) unique++;
	unique += miscAccs;
	
	this._accessoryBonusLvl = unique;
};

//Set Bonus 2: 10%, 3: 15%, 4: 20%, 5:25%
Game_Actor.prototype.accessoryBonusAscSsc = function() {
	if(this._accessoryBonusLvl < 2) return 1;
	return 1 - this._accessoryBonusLvl * 0.05;
};
//Set Bonus 3: 10%, 4: 20%, 5:30%
Game_Actor.prototype.accessoryBonusEscWsc = function() {
	if(this._accessoryBonusLvl < 3) return 1;
	return 1.2 - this._accessoryBonusLvl * 0.1;
};

Game_Actor.prototype.accessoryBonusCharmGrowth = function() {
	if(this._accessoryBonusLvl < 2) return 0;
	return (this._accessoryBonusLvl - 1) * 0.07;
};

Remtairy.Karryn.Game_Actor_changeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
	Remtairy.Karryn.Game_Actor_changeEquip.call(this, slotId, item);
	this.setAccessoryBonus();
	this.registerFirstTimeTitleEquip();
};

Remtairy.Karryn.Game_Actor_forceChangeEquip = Game_Actor.prototype.forceChangeEquip;
Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
    Remtairy.Karryn.Game_Actor_forceChangeEquip.call(this, slotId, item);
	this.setAccessoryBonus();
};

Game_Actor.prototype.clearAccessorySlots = function() {
	for(let i = EQUIP_SLOT_ACCESSORY_START_ID; i <= EQUIP_SLOT_ACCESSORY_END_ID; ++i) {
		if(this.equips()[i]) {
			this._equips[i].setObject(null);
		}
	}
	this.setAccessoryBonus();
};

///////////
// Virgin

Game_Actor.prototype.isVirgin = function() {
    return !this._firstPussySexDate && !this._firstPussySexWasToy;
};
Game_Actor.prototype.preBattleAddIsVirginState = function() {
    if(this.isVirgin()) this.addState(STATE_IS_VIRGIN_ID);
};
Game_Actor.prototype.virginityParamRate = function(paramId) {
    let rate = 1;
	if(paramId === PARAM_CHARM_ID && this.isVirgin()) {
		if(Karryn.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) {
			rate = 1.15;
		}
		else {
			if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID))
				rate = 1;
			else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID))
				rate = 1.05;
			else
				rate = 1.1
		}
	}
	return rate;
};

////////
// Cool

Game_Actor.prototype.isCoolAndCollected = function() {
	if(!this.isInCombatPose() && !this.isInWaitressServingPose() && !this.isInReceptionistPose())
		return false;
	
	if(this.isInWaitressServingPose() && this.isTipsy) return false;
	
	if(this.mouthDesire >= 50 || this.boobsDesire >= 50 || this.pussyDesire >= 50 || this.buttDesire >= 50 || this.cockDesire >= 50) return false;
	
	if(this.isHorny || this.isOnaniFrustrated() || this.justOrgasmed()) return false;
	
	return true;
};
Game_Actor.prototype.coolXParamRate = function(paramId) {
	let rate = 1;
	if(this.isCoolAndCollected()) {
		if(paramId === XPARAM_HIT_ID || paramId === XPARAM_EVA_ID || paramId === XPARAM_CRIT_ID || paramId === XPARAM_CRIT_EVA_ID)
			rate = 1.05;
	}
	return rate;
};

////////
// Expose Weakness

Game_Actor.prototype.hasWeaknessExposed = function() {
	return Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL) || this.isStateAffected(STATE_WEAKNESS_EXPOSED_ID);
};

Game_Actor.prototype.exposedWeaknessXParamRate = function(paramId) {
	if(!this.hasWeaknessExposed() || (paramId !== XPARAM_EVA_ID && paramId !== XPARAM_CRIT_EVA_ID)) 
		return 1;

	let exposedValue = 5;
	let exposedPower = 0.025;
	
	if(this.hasEdict(EDICT_PUBLISH_RESISTS)) exposedValue += 2;
	if(this.hasEdict(EDICT_PUBLISH_SENSITIVITIES)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_SEX_LEVELS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_ONE)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_THREE)) exposedValue++;
	
	if(this.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_THE_NERD_PROBLEM)) {
		exposedPower += 0.015;
		
		if(this.hasEdict(EDICT_THREATEN_THE_NERDS)) {
			exposedPower += 0.01;
		}
		else if(this.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {
			exposedValue -= 4;
			exposedPower -= 0.025;
		}
		else if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
			exposedValue -= 2;
			exposedPower -= 0.02;
		}
	}
	
	return 1 - ((exposedPower * exposedValue) * 0.2);
};


Game_Actor.prototype.exposedWeaknessElementRate = function(elementId, rate, bonus) {
	if(!this.hasWeaknessExposed() || elementId === ELEMENT_ALMIGHTY_ID) return 0;

	let exposedValue = 5;
	let exposedPower = 0.025;
	
	if(this.hasEdict(EDICT_PUBLISH_RESISTS)) exposedValue += 2;
	if(this.hasEdict(EDICT_PUBLISH_SENSITIVITIES)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_SEX_LEVELS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_ONE)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_THREE)) exposedValue++;
	
	if(this.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_THE_NERD_PROBLEM)) {
		exposedPower += 0.015;
		
		if(this.hasEdict(EDICT_THREATEN_THE_NERDS)) {
			exposedPower += 0.01;
		}
		else if(this.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {
			exposedValue -= 4;
			exposedPower -= 0.025;
		}
		else if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
			exposedValue -= 2;
			exposedPower -= 0.02;
		}
	}
	
	return exposedPower * exposedValue;
};

/////////
// Enemy Lizardman
Game_Actor.prototype.passiveLizardmanElementRate = function(elementId) {
	let lizBonus = 0;

	let lizardmanCount = $gameTroop.getCountOfLizardmanPresent();
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID) && lizardmanCount > 1) {
		let rate = 0.02;
	
		lizBonus -= rate * lizardmanCount;
	}

	return lizBonus;
};

/////////
// Artisan Meal

Game_Actor.prototype.resetArtisanMeal = function() {
	this._artisanMeal = false;
};
Game_Actor.prototype.eatArtisanMeal = function(meal) {
	this._artisanMeal = meal;
};
Game_Actor.prototype.ateArtisanMeal = function(meal) {
	return this._artisanMeal === meal;
};
Game_Actor.prototype.hadAnArtisanMeal = function() {
	return this._artisanMeal != false;
};

////////
// Store Item

Game_Actor.prototype.resetStoreItem = function() {
	this._usingStoreItem = false;
};
Game_Actor.prototype.selectStoreItem = function(item) {
	this._usingStoreItem = item;
};
Game_Actor.prototype.isUsingStoreItem = function(item) {
	return this._usingStoreItem === item;
};
Game_Actor.prototype.isUsingAnyStoreItem = function() {
	return this._usingStoreItem != false;
};

////////
// Today Records

Game_Actor.prototype.resetTodayRecords = function() {
	this._startOfInvasionBattle = false;
	
	this._todayTalkedAtAboutMouthPeople = 0;
	this._todayTalkedAtAboutBoobsPeople = 0;
	this._todayTalkedAtAboutPussyPeople = 0;
	this._todayTalkedAtAboutButtPeople = 0;
	this._todayTalkedAtAboutCockPeople = 0;
	
	this._todayEnemySawPeople = 0;
	this._todayEnemySawMouthPeople = 0;
	this._todayEnemySawBoobsPeople = 0;
	this._todayEnemySawPussyPeople = 0;
	this._todayEnemySawButtPeople = 0;
	
	this._todayKissedCount = 0;
	this._todayHandjobCount = 0;
	this._todayBlowjobCount = 0;
	this._todayTittyFuckCount = 0;
	this._todayPussyFuckedCount = 0;
	this._todayAnalFuckedCount = 0;
	this._todayBoobsPettedCount = 0;
	this._todayNipplesPettedCount = 0;
	this._todayButtPettedCount = 0;
	this._todayAnalPettedCount = 0;
	this._todayClitPettedCount = 0;
	this._todayPussyPettedCount = 0;
	this._todayButtSpankedCount = 0;
	this._todaySeeJerkOffCount = 0;
	this._todayCunnilingusCount = 0;
	this._todayRimjobCount = 0;
	this._todayFootjobCount = 0;
	this._todayCockPettedCount = 0;
	this._todayFingersSuckedCount = 0;
	
	this._todayKissedPeople = 0;
	this._todayHandjobPeople = 0;
	this._todayBlowjobPeople = 0;
	this._todayTittyFuckedPeople = 0;
	this._todayPussyFuckedPeople = 0;
	this._todayAnalFuckedPeople = 0;
	this._todayBukkakePeople = 0;
	this._todayFaceBukkakePeople = 0;
	this._todaySwallowPeople = 0;
	this._todayPussyCreampiePeople = 0;
	this._todayAnalCreampiePeople = 0;
	this._todayOrgasmPresencePeople = 0;
	this._todayCunnilingusPeople = 0;
	this._todayRimjobPeople = 0;
	this._todayFootjobPeople = 0;
	this._todayButtSpankedPeople = 0;
	this._todayCockPettedPeople = 0;
	this._todayFingersSuckedPeople = 0;
	this._todayBoobsPettedPeople = 0;
	this._todayNipplesPettedPeople = 0;
	this._todayClitPettedPeople = 0;
	this._todayPussyPettedPeople = 0;
	this._todayButtPettedPeople = 0;
	this._todayAnalPettedPeople = 0;
	
	this._todayCockKickUsageCount = 0;
	this._todayCockStareUsageCount = 0;
	this._todayCockPetUsageCount = 0;
	
	this._todayTotalToysInsertedCount = 0;
	this._todayClitToyInsertedCount = 0;
	this._todayPussyToyInsertedCount = 0;
	this._todayAnalToyInsertedCount = 0;
	
	this._todayTotalToysUsedByEnemyCount = 0;
	this._todayClitToyUsedByEnemyCount = 0;
	this._todayPussyToyUsedByEnemyCount = 0;
	this._todayAnalToyUsedByEnemyCount = 0;
	
	this._todayDoublePenetrationCount = 0;
	this._todayTriplePenetrationCount = 0;
	this._todayBlowbangCount = 0;
	
	this._todayTauntCount = 0;
	this._todaySexPose_KickCounterCount = 0;
	this._todaySubduedEnemiesWithAttack = 0;
	this._todaySubduedEnemiesSexually = 0;
	this._todaySubduedTotal = 0;
	
	this._todaySwallowML = 0;
	this._todayPussyCreampieML = 0;
	this._todayAnalCreampieML = 0;
	this._todaySwallowMaxML = 0;
	this._todayPussyCreampieMaxML = 0;
	this._todayAnalCreampieMaxML = 0;
	this._todayFloorEjaculationCount = 0;
	this._todayFloorEjaculationML = 0;
	this._todayTotalEjaculationCount = 0;
	this._todayTotalEjaculationML = 0;
	
	this._todayPussyDripTenthML = 0;
	this._todayOrgasmCount = 0;
	this._todayOrgasmML = 0;
	
	this._todaySubduedMetalEnemiesCount = 0;
	this._todayMasturbatedBeforeRest = false;
	this._todayServedGuardInBar = 0;
	this._todayServedGuardInGuardBattle = 0;
	this._todayServedGuardInToiletBattle = 0;
	this._todayServedGuardInGuardDefeat = 0;
	this._todayToiletBattleSexualPartners = 0;
	this._todayLevelTwoDefeatSexualPartners = 0;
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, 0);
};

// Yesterday Defeat
Game_Actor.prototype.wasDefeatedYesterday = function() {
	return $gameParty._lastDefeatedDate + 1 >= Prison.date;
};


/////////
// Metal Exp Rate

Game_Actor.prototype.metalExpRateBonus = function() {
	let bonus = 0;
		
	if(this._todaySubduedMetalEnemiesCount > 0) {
		bonus = 30;
		
		bonus += this._todaySubduedMetalEnemiesCount * 5;
	}
	
	return bonus;
};

////////
// Character Image

Game_Actor.prototype.setKarrynWardenSprite = function() {
	this.setCharacterImage('C_Karryn01', 4);
};
Game_Actor.prototype.setKarrynSleepSprite = function() {
	this.setCharacterImage('C_Extra1', 3);
};
Game_Actor.prototype.setKarrynReceptionistSprite = function() {
	this.setCharacterImage('C_Karryn01', 5);
};

/////////
//////////
// Desire
/////////////
//////////

Game_Actor.prototype.setCockDesire = function(value, fromWillpowerSkill) { 
	if(fromWillpowerSkill && value < this.cockDesire) value = Math.max(value, this.getSuppressCockDesireLowerLimit());
	this._cockDesire = value.clamp(0, this.maxCockDesire); 
	this.addToMaxReachedCockDesireRecord();
};
Game_Actor.prototype.setMouthDesire = function(value, fromWillpowerSkill) { 
	if(fromWillpowerSkill && value < this.mouthDesire) value = Math.max(value, this.getSuppressMouthDesireLowerLimit());
	this._mouthDesire = value.clamp(0, this.maxMouthDesire); 
	this.addToMaxReachedMouthDesireRecord();
};
Game_Actor.prototype.setBoobsDesire = function(value, fromWillpowerSkill) {
	if(fromWillpowerSkill && value < this.boobsDesire) value = Math.max(value, this.getSuppressBoobsDesireLowerLimit());
	this._boobsDesire = value.clamp(0, this.maxBoobsDesire);
	this.addToMaxReachedBoobsDesireRecord();
};
Game_Actor.prototype.setPussyDesire = function(value, fromWillpowerSkill) {
	if(fromWillpowerSkill && value < this.pussyDesire) value = Math.max(value, this.getSuppressPussyDesireLowerLimit());	
	this._pussyDesire = value.clamp(0, this.maxPussyDesire); 
	this.addToMaxReachedPussyDesireRecord();
};
Game_Actor.prototype.setButtDesire = function(value, fromWillpowerSkill) {
	if(fromWillpowerSkill && value < this.buttDesire) value = Math.max(value, this.getSuppressButtDesireLowerLimit());
	this._buttDesire = value.clamp(0, this.maxButtDesire); 
	this.addToMaxReachedButtDesireRecord();
};


Game_Actor.prototype.gainMouthDesire = function(value, fromWillpowerSkill, fromDesireRegen) {
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.mouthDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_DOUBLE_ID)) rawValue *= 0.34;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainMouthDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_DOUBLE_ID)) rawValue *= 0.34;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setMouthDesire(Math.round(this.mouthDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainBoobsDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.boobsDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_FINGERCLAW_ID)) rawValue *= 0.34;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainBoobsDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_FINGERCLAW_ID)) rawValue *= 0.34;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setBoobsDesire(Math.round(this.boobsDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainPussyDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.pussyDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_PEARL_ID)) rawValue *= 0.34;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainPussyDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_PEARL_ID)) rawValue *= 0.34;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setPussyDesire(Math.round(this.pussyDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainButtDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.buttDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_CHAINHAND_ID)) rawValue *= 0.34;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainButtDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_CHAINHAND_ID)) rawValue *= 0.34;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setButtDesire(Math.round(this.buttDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainCockDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.cockDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_GEMSTONE_ID)) rawValue *= 0.34;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainCockDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_GEMSTONE_ID)) rawValue *= 0.34;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setCockDesire(Math.round(this.cockDesire + addedDesire), fromWillpowerSkill); 
};

Game_Actor.prototype.gainRandomDesire = function(value, fromDesireRegen) { 
	this.gainRandomDesireWithCockWeight(value, 1, fromDesireRegen);
};
Game_Actor.prototype.gainRandomDesireWithCockWeight = function(value, weight, fromDesireRegen) { 
	switch(Math.randomInt(4 + weight)) {
		case 0:
			this.gainMouthDesire(value, false, fromDesireRegen); 
			break;
		case 1:
			this.gainBoobsDesire(value, false, fromDesireRegen);
			break;
		case 2:
			this.gainPussyDesire(value, false, fromDesireRegen);
			break;
		case 3:
			this.gainButtDesire(value, false, fromDesireRegen);
			break;
		default:
			this.gainCockDesire(value, false, fromDesireRegen);
	} 
};

Game_Actor.prototype.topDesireIsMouthDesire = function() { 
	return this.mouthDesire > this.boobsDesire && this.mouthDesire > this.pussyDesire && this.mouthDesire > this.buttDesire && this.mouthDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsBoobsDesire = function() { 
	return this.boobsDesire > this.mouthDesire && this.boobsDesire > this.pussyDesire && this.boobsDesire > this.buttDesire && this.boobsDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsPussyDesire = function() { 
	return this.pussyDesire > this.boobsDesire && this.pussyDesire > this.mouthDesire && this.pussyDesire > this.buttDesire && this.pussyDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsButtDesire = function() { 
	return this.buttDesire > this.boobsDesire && this.buttDesire > this.pussyDesire && this.buttDesire > this.mouthDesire && this.buttDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsCockDesire = function() { 
	return this.cockDesire > this.boobsDesire && this.cockDesire > this.pussyDesire && this.cockDesire > this.buttDesire && this.cockDesire > this.mouthDesire;
};


////////////////////////
////////////////////////
// Can Get XXX Conditions //
////////////////////////
////////////////////////

//////////////
// Sight

Game_Actor.prototype.canGetMouthSeen = function() { 
	return !this.isBodySlotUnavailable(MOUTH_ID);
};
Game_Actor.prototype.canGetBoobsSeen = function() { 
	return !this.isBodySlotUnavailable(BOOBS_ID);
};
Game_Actor.prototype.canGetNipplesSeen = function() { 
	return (this.isAroused() && this.isClothingAtStageSeeBothBoobs()) && !this.isBodySlotUnavailable(NIPPLES_ID);
};
Game_Actor.prototype.canGetClitSeen = function() { 
	return this.isClothingAtStageSeePussy() && !this.isWearingPanties() && !this.isBodySlotUnavailable(CLIT_ID);
};
Game_Actor.prototype.canGetPussySeen = function() { 
	return this.isClothingAtStageSeePussy() && !this.isWearingPanties() && !this.isBodySlotUnavailable(PUSSY_ID);
};
Game_Actor.prototype.canGetButtSeen = function() { 
	return !this.isBodySlotUnavailable(BUTT_ID);
};
Game_Actor.prototype.canGetAnalSeen = function() { 
	return this.isClothingAtStageAccessAnal() && !this.isWearingPanties() && !this.isBodySlotUnavailable(ANAL_ID);
};
Game_Actor.prototype.canGetAnalCreampieSeen = function() { 
	return this._liquidCreampieAnal > 0  && this.canGetAnalSeen() ;
};
Game_Actor.prototype.canGetPussyCreampieSeen = function() { 
	return this._liquidCreampiePussy > 0  && this.canGetPussySeen();
};
Game_Actor.prototype.canGetBukkakedFaceSeen = function() { 
	return this._liquidBukkakeFace > 0 && this.canGetMouthSeen();
};
Game_Actor.prototype.canGetBukkakedBoobsSeen = function() { 
	return this._liquidBukkakeBoobs > 0 && this.canGetBoobsSeen();
};
Game_Actor.prototype.canGetBukkakedButtSeen = function() { 
	return (this._liquidBukkakeButt > 0 || this._liquidBukkakeButtTopRight > 0 || this._liquidBukkakeButtTopLeft > 0 || this._liquidBukkakeButtBottomRight > 0 || this._liquidBukkakeButtBottomLeft > 0) && this.canGetButtSeen();
};
Game_Actor.prototype.canGetMouthSwallowSeen = function() { 
	return this._liquidSwallow > 0 && this.canGetMouthSeen();
};


/////////////////////////////////////
// Petting

Game_Actor.prototype.canSuckFingers = function() { 
	let mouthReq = this.suckFingersMouthDesireRequirement();
	
	if(this.isInWaitressSexPose() && (this.tachieStraw !== REM_TACHIE_NULL && this.tachieStraw !== 'empty') && this._karrynMugContent > 0)
		return false;
	
	return this.mouthDesire >= mouthReq && this.isBodySlotAvailableForPetting(MOUTH_ID);
};
Game_Actor.prototype.canGetKissed = function(kissingLvl) { 
	let req = this.kissingMouthDesireRequirement(kissingLvl);
	
	if(this.isInWaitressSexPose() && (this.tachieStraw !== REM_TACHIE_NULL && this.tachieStraw !== 'empty') && this._karrynMugContent > 0)
		return false;
	
	return this.mouthDesire >= req && this.isBodySlotAvailableForPetting(MOUTH_ID);
};
Game_Actor.prototype.canGetBoobsPetted = function() { 
	let req = this.boobsPettingBoobsDesireRequirement();

	let pettable = this.isClothingAtStageSeeOneBoob();
	return this.boobsDesire >= req && this.isBodySlotAvailableForPetting(BOOBS_ID) && pettable;
};
Game_Actor.prototype.canGetNipplesPetted = function() { 
	let req = this.nipplesPettingBoobsDesireRequirement();

	let pettable = this.isClothingAtStageSeeBothBoobs();
	return this.boobsDesire >= req && this.isBodySlotAvailableForPetting(NIPPLES_ID) && pettable;
};
Game_Actor.prototype.canGetClitPetted = function() { 
	let req = this.clitPettingPussyDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageAccessClit_WearingPanties()) || (!this.isWearingPanties() && this.isClothingAtStageAccessClit_NoPanties());
	return this.pussyDesire >= req && this.isBodySlotAvailableForPetting(CLIT_ID) && pettable;
};
Game_Actor.prototype.canGetPussyPetted = function() { 
	let req = this.pussyPettingPussyDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	var isWet = this.isWet;
	return this.pussyDesire >= req && this.isBodySlotAvailableForPetting(PUSSY_ID) && pettable && isWet;
};
Game_Actor.prototype.canGetButtPetted = function() { 
	let req = this.buttPettingButtDesireRequirement();

	let pettable = this.isClothingAtStageAccessButt();
	return this.buttDesire >= req && this.isBodySlotAvailableForPetting(BUTT_ID) && pettable;
};
Game_Actor.prototype.canGetAnalPetted = function() { 
	let req = this.analPettingButtDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageAccessAnal()) || (!this.isWearingPanties() && this.isClothingAtStageSeeButt());
	return this.buttDesire >= req && this.isBodySlotAvailableForPetting(ANAL_ID) && pettable;
};

///////////
// Toys

Game_Actor.prototype.canGetClitToyInserted = function() { 
	if(!this._clitToyInsertablePose || this._wearingClitToy || this.isBodySlotPenis(CLIT_ID)) return false;
	let poseName = this.poseName;
	let req = this.clitToyPussyDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageSeePussy()) || (!this.isWearingPanties() && this.isClothingAtStageSlightlyMoved());
	return this.pussyDesire >= req && pettable;
};
Game_Actor.prototype.canGetPussyToyInserted = function() { 
	if(!this._pussyToyInsertablePose || this.isBodySlotPenis(PUSSY_ID) || this._wearingPussyToy || !this.isWet) return false;
	let req = this.pussyToyPussyDesireRequirement();
	
	let meetDesireReq = this.pussyDesire >= req;
	let insertable = (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetAnalToyInserted = function() { 
	if(!this._analToyInsertablePose || this._wearingAnalToy || this.isBodySlotPenis(ANAL_ID)) return false;
	let req = this.analToyButtDesireRequirement();
	
	let meetDesireReq = this.buttDesire >= req;
	let insertable = (this.isWearingPanties() && this.isClothingAtStageAccessAnal()) || (!this.isWearingPanties() && this.isClothingAtStageSeeButt());
	return meetDesireReq && insertable;
};

/////////
// Etc

Game_Actor.prototype.canGetSpanked = function() { 
	let req = this.spankingButtDesireRequirement();

	return this.buttDesire >= req && this.isBodySlotAvailableForPetting(BUTT_ID) && this.isPoseSpankable();
};

Game_Actor.prototype.canGetCunnilingus = function() { 
	let req = this.cunnilingusPussyDesireRequirement();

	let pettable = this.isClothingAtStageAccessPussy();
	return this.pussyDesire >= req && this.isBodySlotAvailableForPenis(CLIT_ID) && pettable;
};

Game_Actor.prototype.canGiveRimjob = function(actorSkill) { 
	if(ConfigManager.disableRimjobs) return false;
	let req = this.rimjobMouthDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessMouth();

	return this.mouthDesire >= req && this.isBodySlotFree(MOUTH_ID) && insertable;
};

/////////////////////////////////////
// Penis Insertion

Game_Actor.prototype.canGetMouthInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(MOUTH_ID)) return false;
	let req = this.blowjobMouthDesireRequirement();
	let cockReq = this.blowjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessMouth();
	
	if(this.isInWaitressSexPose() && (this.tachieStraw !== REM_TACHIE_NULL && this.tachieStraw !== 'empty') && this._karrynMugContent > 0)
		return false;
	
	let meetDesireReq = this.mouthDesire >= req && this.cockDesire >= cockReq;
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetBoobsInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(BOOBS_ID)) return false;
	let req = this.tittyFuckBoobsDesireRequirement();
	let cockReq = this.tittyFuckCockDesireRequirement();

	let meetDesireReq = this.boobsDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || this.isClothingAtStageSeeBothBoobs();
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetPussyInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(PUSSY_ID) || !this.isWet) return false;
	let req = this.pussySexPussyDesireRequirement();
	let cockReq = this.pussySexCockDesireRequirement();

	let meetDesireReq = this.pussyDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetPussyInserted_fromGoblinCL = function(actorSkill) { 
	if(!this.isWet) return false;
	let req = this.pussySexPussyDesireRequirement();
	let cockReq = this.pussySexCockDesireRequirement();

	let meetDesireReq = this.pussyDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	return meetDesireReq && insertable;
};


Game_Actor.prototype.canGetAnalInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(ANAL_ID)) return false;
	let req = this.analSexButtDesireRequirement();
	let cockReq = this.analSexCockDesireRequirement();

	let meetDesireReq = this.buttDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || this.isClothingAtStageAccessAnal();
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetRightHandInserted = function(actorSkill) {
	let req = this.handjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessHands();

	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(RIGHT_HAND_ID);
};
Game_Actor.prototype.canGetLeftHandInserted = function(actorSkill) { 
	let req = this.handjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessHands();

	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
};

Game_Actor.prototype.canGetFeetInserted = function(actorSkill) { 
	let req = this.footjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessFeet();

	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(FEET_ID) && insertable;
};


Game_Actor.prototype.canPetWithRightHand = function() {
	let req = this.cockPettingCockDesireRequirement();
	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(RIGHT_HAND_ID);
};
Game_Actor.prototype.canPetWithLeftHand = function() {
	let req = this.cockPettingCockDesireRequirement();
	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
};

////////
// Ejaculation

Game_Actor.prototype.canGetFaceBukkaked = function(target) { 
	let req = this.faceBukkakeCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req;
	else
		return this.cockDesire >= req;
};
Game_Actor.prototype.canGetBodyBukkaked = function(target) { 
	let req = this.bodyBukkakeCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req;
	else
		return this.cockDesire >= req;
};

Game_Actor.prototype.canBePussyCreampied = function(target) { 
	let req = this.pussyCreampieCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req && this.isBodySlotInserted(PUSSY_ID);
	else
		return this.cockDesire >= req && target.isUsingBodySlotPenis(PUSSY_ID) && this.isBodySlotInserted(PUSSY_ID);
};

Game_Actor.prototype.canBeAnalCreampied = function(target) { 
	let req = this.analCreampieCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req && this.isBodySlotInserted(ANAL_ID);
	else
		return this.cockDesire >= req && target.isUsingBodySlotPenis(ANAL_ID) && this.isBodySlotInserted(ANAL_ID);
};

Game_Actor.prototype.canMouthSwallow = function(target) { 
	let req = this.mouthSwallowCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req && this.isBodySlotInserted(MOUTH_ID);
	else
		return this.cockDesire >= req && target.isUsingBodySlotPenis(MOUTH_ID) && this.isBodySlotInserted(MOUTH_ID);
};

//None
//No Desire requirements
Game_Actor.prototype.canGetMouthInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(MOUTH_ID);
};
Game_Actor.prototype.canGetBoobsInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(BOOBS_ID);
};
Game_Actor.prototype.canGetPussyInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(PUSSY_ID);
};
Game_Actor.prototype.canGetAnalInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(ANAL_ID);
};
Game_Actor.prototype.canGetRightHandInsertedNone = function() {
	return this.isBodySlotAvailableForPenis(RIGHT_HAND_ID);
};
Game_Actor.prototype.canGetLeftHandInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
};
Game_Actor.prototype.canGetOther1InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_1_ID);
};
Game_Actor.prototype.canGetOther2InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_2_ID);
};
Game_Actor.prototype.canGetOther3InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_3_ID);
};
Game_Actor.prototype.canGetOther4InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_4_ID);
};

Game_Actor.prototype.canGetOther1InsertedMug = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_1_ID) && this.isBodySlotAvailableForPenis(MOUTH_ID);
};