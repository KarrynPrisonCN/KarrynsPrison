var Remtairy = Remtairy || {};
Remtairy.Wanted = Remtairy.Wanted || {};

const WANTED_APPEARANCE_BASE_CHANCE = 0.03;
const WANTED_APPEARANCE_ADDED_CHANCE = 0.01;

const WANTED_APPEARANCE_BASE_CHANCE_BY_LENGTH = 0.008;
const WANTED_APPEARANCE_ADDED_CHANCE_BY_LENGTH = 0.006;

const WANTED_CHANCE_MULTIPLER_RIOT_BATTLE = 2;
const WANTED_CHANCE_MULTIPLER_RECEPTIONIST_BATTLE = 3;
const WANTED_CHANCE_MULTIPLER_GLORY_BATTLE = 2;

const WANTED_MINIMUM_DAYS_SINCE_DEFEATED = 2;
const WANTED_LVL_INCREASE_BY_DEFEAT = 1;
const WANTED_LVL_INCREASE_BY_DEFEAT_HALF_LVL = 2; //For when wanted lvl is half of karryn's level

const WANTED_POINTS_NEEDED_PER_TYPE = 450;
const WANTED_POINTS_NEEDED_PER_TYPE_OVER_TWO = 1000;
const WANTED_POINTS_NEEDED_PER_TYPE_OVER_FOUR = 10000;
const WANTED_POINTS_NEEDED_PER_TOTAL_WANTED_SIZE = 300; //For Wanted with more than two of type
const WANTED_POINTS_BASE_REQ = 150;
const WANTED_POINTS_STAMINA_DMG_MULTIPLER = 1;
const WANTED_POINTS_PLEASURE_DMG_MULTIPLER = 10;

//=============================================================================
 /*:
 * @plugindesc Wanted
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================


//////////////////////
///// Wanted Enemy
///////////////////////

function Wanted_Enemy() {
    this.initialize.apply(this, arguments);
}

Wanted_Enemy.prototype.constructor = Wanted_Enemy;

Wanted_Enemy.prototype.initialize = function(enemy, date, wantedListId) {
	if(!enemy) {
		this._disabled = true;
		return;
	}
	
	if(enemy.enemy().dataTransferWantedEnemyId) 
		this._enemyId = enemy.enemy().dataTransferWantedEnemyId;
	else this._enemyId = enemy.enemyId();
	
    this._enemyType = enemy.enemyType();
	this._enemyCock = enemy.enemyCock();
    this._enemyName = enemy._randomEnemyName;
	if(enemy.isUnique || enemy.isBossType) {
		this._battlerName = enemy.enemy().battlerName;
	}
	else this._battlerName = enemy.enemyType() + '_' + enemy.battlerNameNum();	
    this._enemyPrefixName = enemy.getNamePrefix();
	this._enemyPrefixType = enemy.getNamePrefixType();
	this._hasPrefix = enemy.hasNamePrefix();
    this._firstAppearance = date;
	this._recentAppearance = date;
	this._lastDefeated = date;
	this._appearances = 0;
	this._wantedId = wantedListId;
	this._wantedLvl = enemy._enemyBaseLvl - enemy.enemyLvl_difficultyDays();
	
	this._disabled = false;
	
	this._enemyRecordSexualPartner = enemy._enemyRecordSexualPartner;
	this._enemyRecordHandshakeCount = enemy._enemyRecordHandshakeCount;
	this._enemyRecordHandshakeWhileSexCount = enemy._enemyRecordHandshakeWhileSexCount;
	this._enemyRecordBoobshakeCount = enemy._enemyRecordBoobshakeCount;
	this._enemyRecordKissedCount = enemy._enemyRecordKissedCount;
	this._enemyRecordHandjobCount = enemy._enemyRecordHandjobCount;
	this._enemyRecordBlowjobCount = enemy._enemyRecordBlowjobCount;
	this._enemyRecordTittyFuckCount = enemy._enemyRecordTittyFuckCount;
	this._enemyRecordCunnilingusCount = enemy._enemyRecordCunnilingusCount;
	this._enemyRecordRimmedCount = enemy._enemyRecordRimmedCount;
	this._enemyRecordFootjobCount = enemy._enemyRecordFootjobCount;
	this._enemyRecordSpankCount = enemy._enemyRecordSpankCount;
	this._enemyRecordPussyFuckedCount = enemy._enemyRecordPussyFuckedCount;
	this._enemyRecordAnalFuckedCount = enemy._enemyRecordAnalFuckedCount;
	this._enemyRecordBoobsPettedCount = enemy._enemyRecordBoobsPettedCount;
	this._enemyRecordNipplesPettedCount = enemy._enemyRecordNipplesPettedCount;
	this._enemyRecordButtPettedCount = enemy._enemyRecordButtPettedCount;
	this._enemyRecordAnalPettedCount = enemy._enemyRecordAnalPettedCount;
	this._enemyRecordClitPettedCount = enemy._enemyRecordClitPettedCount;
	this._enemyRecordPussyPettedCount = enemy._enemyRecordPussyPettedCount;
	this._enemyRecordCockPettedCount = enemy._enemyRecordCockPettedCount;
	this._enemyRecordFingerSuckedCount = enemy._enemyRecordFingerSuckedCount;
	
	this._enemyRecordTalkedCount = enemy._enemyRecordTalkedCount;
	this._enemyRecordSawCount = enemy._enemyRecordSawCount;
	this._enemyRecordTalkCockCount = enemy._enemyRecordTalkCockCount;
	this._enemyRecordJerkoffCount = enemy._enemyRecordJerkoffCount;
	this._enemyRecordTauntedCount = enemy._enemyRecordTauntedCount;
	this._enemyRecordFlauntedCount = enemy._enemyRecordFlauntedCount;
	this._enemyRecordGotDogezaCount = enemy._enemyRecordGotDogezaCount;
	this._enemyRecordToysInsertedCount = enemy._enemyRecordToysInsertedCount;
	this._enemyRecordBukkakeTotalCount = enemy._enemyRecordBukkakeTotalCount;
	this._enemyRecordSwallowCount = enemy._enemyRecordSwallowCount;
	this._enemyRecordPussyCreampieCount = enemy._enemyRecordPussyCreampieCount;
	this._enemyRecordAnalCreampieCount = enemy._enemyRecordAnalCreampieCount;
	this._enemyRecordGloryBattleEjaculationCount = enemy._enemyRecordGloryBattleEjaculationCount;
	this._enemyRecordTotalEjaculationCount = enemy._enemyRecordTotalEjaculationCount;
	this._enemyRecordOrgasmPresenceCount = enemy._enemyRecordOrgasmPresenceCount;
	
	if(enemy.isVisitorType) {
		this._visitor_walkingSpeed = enemy._visitor_walkingSpeed;
		this._visitor_writingSpeed = enemy._visitor_writingSpeed;
		this._visitor_dissatisfactionMultipler = enemy._visitor_dissatisfactionMultipler;
		this._visitor_tachieNum = enemy._visitor_tachieNum;
		this._visitor_isFan = enemy._visitor_isFan;
		this._visitor_isPervert = enemy._visitor_isPervert;
		this._visitor_pervPromoteChance = enemy._visitor_pervPromoteChance;
	}
};

Wanted_Enemy.prototype.enemyTypeIsBoss = function() {
	return this._enemyType === ENEMYTYPE_YASU_TAG || 
	this._enemyType === ENEMYTYPE_TONKIN_TAG || 
	this._enemyType === ENEMYTYPE_CARGILL_TAG || 
	this._enemyType === ENEMYTYPE_ARON_TAG;
};

Wanted_Enemy.prototype.enemyTypeIsVisitor = function() {
	return this._enemyType === ENEMYTYPE_VISITOR_MALE_TAG || 
	this._enemyType === ENEMYTYPE_VISITOR_FEMALE_TAG;
};

Wanted_Enemy.prototype.enemyTypeIsNotForMorphing = function() {
	return this.enemyTypeIsBoss() || this.enemyTypeIsVisitor();
};

////////
// Game BattlerBase
///////////////

Game_BattlerBase.prototype.getWantedPoints = function() { return this._wantedPoints; };
Game_BattlerBase.prototype.addWantedPoints = function(num) { this._wantedPoints += num; };

//////
///////////
// Game Enemy
////////////
////////

Object.defineProperty(Game_Enemy.prototype, "isWanted", { 
	get: function () { return this._isWanted; }, configurable: true
});

Game_Enemy.prototype.setupWanted = function(wantedStatus) {
	if(!wantedStatus) {
		this._isWanted = false;
		this._wantedBattlerName = false;
		this._wantedLvl = 0;
		this._wantedId = -1;
		this._justBecameWanted = false;
	}
	else {
		this.checkWantedVirginityStatus(wantedStatus);
		
		this._isWanted = true;
		this._wantedLvl = wantedStatus._wantedLvl;
		this._wantedBattlerName = wantedStatus._battlerName;
		this._enemyType = wantedStatus._enemyType;
		this._enemyCock = wantedStatus._enemyCock;
		this._randomEnemyName = wantedStatus._enemyName
		this._hasEnemyNamePrefix = wantedStatus._hasPrefix;
		this._enemyNamePrefix = wantedStatus._enemyPrefixName;
	    this._enemyNamePrefixType = wantedStatus._enemyPrefixType;	
		this._wantedId = wantedStatus._wantedId;
		this._justBecameWanted = false;
		
		this._enemyRecordSexualPartner = wantedStatus._enemyRecordSexualPartner;
		this._enemyRecordHandshakeCount = wantedStatus._enemyRecordHandshakeCount;
		this._enemyRecordHandshakeWhileSexCount = wantedStatus._enemyRecordHandshakeWhileSexCount;
		this._enemyRecordBoobshakeCount = wantedStatus._enemyRecordBoobshakeCount;
		this._enemyRecordKissedCount = wantedStatus._enemyRecordKissedCount;
		this._enemyRecordHandjobCount = wantedStatus._enemyRecordHandjobCount;
		this._enemyRecordBlowjobCount = wantedStatus._enemyRecordBlowjobCount;
		this._enemyRecordTittyFuckCount = wantedStatus._enemyRecordTittyFuckCount;
		this._enemyRecordCunnilingusCount = wantedStatus._enemyRecordCunnilingusCount;
		this._enemyRecordRimmedCount = wantedStatus._enemyRecordRimmedCount;
		this._enemyRecordFootjobCount = wantedStatus._enemyRecordFootjobCount;
		this._enemyRecordSpankCount = wantedStatus._enemyRecordSpankCount;
		this._enemyRecordPussyFuckedCount = wantedStatus._enemyRecordPussyFuckedCount;
		this._enemyRecordAnalFuckedCount = wantedStatus._enemyRecordAnalFuckedCount;
		this._enemyRecordBoobsPettedCount = wantedStatus._enemyRecordBoobsPettedCount;
		this._enemyRecordNipplesPettedCount = wantedStatus._enemyRecordNipplesPettedCount;
		this._enemyRecordButtPettedCount = wantedStatus._enemyRecordButtPettedCount;
		this._enemyRecordAnalPettedCount = wantedStatus._enemyRecordAnalPettedCount;
		this._enemyRecordClitPettedCount = wantedStatus._enemyRecordClitPettedCount;
		this._enemyRecordPussyPettedCount = wantedStatus._enemyRecordPussyPettedCount;
		this._enemyRecordCockPettedCount = wantedStatus._enemyRecordCockPettedCount;
		this._enemyRecordFingerSuckedCount = wantedStatus._enemyRecordFingerSuckedCount;
		
		this._enemyRecordTalkedCount = wantedStatus._enemyRecordTalkedCount;
		this._enemyRecordSawCount = wantedStatus._enemyRecordSawCount;
		this._enemyRecordTalkCockCount = wantedStatus._enemyRecordTalkCockCount;
		this._enemyRecordJerkoffCount = wantedStatus._enemyRecordJerkoffCount;
		this._enemyRecordTauntedCount = wantedStatus._enemyRecordTauntedCount;
		this._enemyRecordFlauntedCount = wantedStatus._enemyRecordFlauntedCount;
		this._enemyRecordGotDogezaCount = wantedStatus._enemyRecordGotDogezaCount;
		this._enemyRecordToysInsertedCount = wantedStatus._enemyRecordToysInsertedCount;
		this._enemyRecordBukkakeTotalCount = wantedStatus._enemyRecordBukkakeTotalCount;
		this._enemyRecordSwallowCount = wantedStatus._enemyRecordSwallowCount;
		this._enemyRecordPussyCreampieCount = wantedStatus._enemyRecordPussyCreampieCount;
		this._enemyRecordAnalCreampieCount = wantedStatus._enemyRecordAnalCreampieCount;
		this._enemyRecordGloryBattleEjaculationCount = wantedStatus._enemyRecordGloryBattleEjaculationCount;
		this._enemyRecordTotalEjaculationCount = wantedStatus._enemyRecordTotalEjaculationCount;
		this._enemyRecordOrgasmPresenceCount = wantedStatus._enemyRecordOrgasmPresenceCount;
		
		this.setupEnemyLvl();
		this.setupWantedGuardSkills();
	}
};

Game_Enemy.prototype.checkWantedVirginityStatus = function(wantedStatus) {
	if(wantedStatus._hasPrefix && wantedStatus._enemyPrefixType == ENEMY_PREFIX_VIRGIN) {
		if(wantedStatus._enemyRecordPussyFuckedCount > 0 || wantedStatus._enemyRecordAnalFuckedCount > 0) {
			let availablePrefixSet = [ ENEMY_PREFIX_GOOD, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY];
			$gameTroop.setPrefixTypeAndName(this, availablePrefixSet);
			wantedStatus._enemyPrefixName = this.getNamePrefix();
			wantedStatus._enemyPrefixType = this.getNamePrefixType();
		}
	}
};

Game_Enemy.prototype.setupWantedGuardSkills = function() {
	if(this.isGuardType && !this.isCargill && !this.isYasu) {
		let guardAggression = Prison.guardAggression;
		let currentGuardID = ENEMY_ID_GUARD_LV1;
		
		//Find current guard ID
		if(guardAggression < 3) currentGuardID = ENEMY_ID_GUARD_LV1;
		else if(guardAggression < 6) currentGuardID = ENEMY_ID_GUARD_LV2;
		else if(guardAggression < 12) currentGuardID = ENEMY_ID_GUARD_LV3;
		else if(guardAggression < 20) currentGuardID = ENEMY_ID_GUARD_LV4;
		
		else currentGuardID = ENEMY_ID_GUARD_LV4;
		
		
		//If this guard ID is not current, add current guard's skills
		if(this._enemyId != currentGuardID) {
			this._aiPettingSkills.concat($dataEnemies[currentGuardID].dataAIPettingSkills.slice(0));
			this._aiTalkSightSkills.concat($dataEnemies[currentGuardID].dataAITalkSightSkills.slice(0));
			this._aiPoseStartSkills.concat($dataEnemies[currentGuardID].dataAIPoseStartSkills.slice(0));
			this._aiPoseJoinSkills.concat($dataEnemies[currentGuardID].dataAIPoseJoinSkills.slice(0));
		}
	}
};

Game_Enemy.prototype.getWantedLvl = function() { return this._wantedLvl; };
Game_Enemy.prototype.getWantedId = function() { return this._wantedId; };


///////
// Enemy Records
//////////////////

Game_Enemy.prototype.setupEnemyRecords = function() {
    this._enemyRecordSexualPartner = false;
	
	this._enemyRecordHandshakeCount = 0;
	this._enemyRecordHandshakeWhileSexCount = 0;
	this._enemyRecordBoobshakeCount = 0;
	this._enemyRecordKissedCount = 0;
	this._enemyRecordHandjobCount = 0;
	this._enemyRecordBlowjobCount = 0;
	this._enemyRecordTittyFuckCount = 0;
	this._enemyRecordCunnilingusCount = 0;
	this._enemyRecordRimmedCount = 0;
	this._enemyRecordFootjobCount = 0;
	this._enemyRecordSpankCount = 0;
	this._enemyRecordPussyFuckedCount = 0;
	this._enemyRecordAnalFuckedCount = 0;
	this._enemyRecordBoobsPettedCount = 0;
	this._enemyRecordNipplesPettedCount = 0;
	this._enemyRecordButtPettedCount = 0;
	this._enemyRecordAnalPettedCount = 0;
	this._enemyRecordClitPettedCount = 0;
	this._enemyRecordPussyPettedCount = 0;
	this._enemyRecordCockPettedCount = 0;
	this._enemyRecordFingerSuckedCount = 0;
	this._enemyRecordTalkedCount = 0;
	this._enemyRecordSawCount = 0;
	this._enemyRecordJerkoffCount = 0;
	this._enemyRecordTalkCockCount = 0;
	this._enemyRecordTauntedCount = 0;
	this._enemyRecordFlauntedCount = 0;
	this._enemyRecordGotDogezaCount = 0;
	this._enemyRecordToysInsertedCount = 0;
	
	this._enemyRecordBukkakeTotalCount = 0;
	this._enemyRecordSwallowCount = 0;
	this._enemyRecordPussyCreampieCount = 0;
	this._enemyRecordAnalCreampieCount = 0;
	this._enemyRecordGloryBattleEjaculationCount = 0;
	this._enemyRecordTotalEjaculationCount = 0;
	this._enemyRecordOrgasmPresenceCount = 0;
	
	this._enemyTempRecordTotalEjaculationCount = 0;
};

Game_Enemy.prototype.setAsActorSexualPartner = function(actor) {
    if(!this._enemyRecordSexualPartner) {
		actor.addEnemySexualPartner(this);
		this._enemyRecordSexualPartner = true;
		if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordSexualPartner = true;
		}
	}
};

Game_Enemy.prototype.addToEnemyHandshakeCountRecord = function(actor) {
	this._enemyRecordHandshakeCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordHandshakeCount = this._enemyRecordHandshakeCount;
	}
	let firstCount = false;
    if(this._enemyRecordHandshakeCount == 1) {
		firstCount = true;
	}
	actor.addToActorHandshakeRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyHandshakeWhileSexCountRecord = function(actor) {
	if(actor.receptionistBattle_isHavingSexBehind()) {
		this._enemyRecordHandshakeWhileSexCount++;
		let firstCount = false;
		if(this._enemyRecordHandshakeWhileSexCount == 1) {
			firstCount = true;
		}
		actor.addToActorHandshakeWhileSexRecord(firstCount, this);
	}
};


Game_Enemy.prototype.addToEnemyBoobshakeCountRecord = function(actor) {
	this._enemyRecordBoobshakeCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordBoobshakeCount = this._enemyRecordBoobshakeCount;
	}
	let firstCount = false;
    if(this._enemyRecordBoobshakeCount == 1) {
		firstCount = true;
	}
	actor.addToActorBoobshakeRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyKissedCountRecord = function(actor) {
	this._enemyRecordKissedCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordKissedCount = this._enemyRecordKissedCount;
	}
	let firstCount = false;
    if(this._enemyRecordKissedCount == 1) {
		firstCount = true;
	}
	actor.addToActorKissedRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyHandjobCountRecord = function(actor) {
	this._enemyRecordHandjobCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordHandjobCount = this._enemyRecordHandjobCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordHandjobCount == 1) {
		firstCount = true;
	}
	actor.addToActorHandjobRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyBlowjobCountRecord = function(actor) {
	this._enemyRecordBlowjobCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordBlowjobCount = this._enemyRecordBlowjobCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordBlowjobCount == 1) {
		firstCount = true;
	}
	actor.addToActorBlowjobRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyTittyFuckCountRecord = function(actor) {
	this._enemyRecordTittyFuckCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordTittyFuckCount = this._enemyRecordTittyFuckCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordTittyFuckCount == 1) {
		firstCount = true;
	}
	actor.addToActorTittyFuckRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyCunnilingusCountRecord = function(actor) {
	this._enemyRecordCunnilingusCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordCunnilingusCount = this._enemyRecordCunnilingusCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordCunnilingusCount == 1) {
		firstCount = true;
	}
	actor.addToActorCunnilingusRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyRimmedCountRecord = function(actor) {
	this._enemyRecordRimmedCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordRimmedCount = this._enemyRecordRimmedCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordRimmedCount == 1) {
		firstCount = true;
	}
	actor.addToActorRimjobRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyFootjobCountRecord = function(actor) {
	this._enemyRecordFootjobCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordFootjobCount = this._enemyRecordFootjobCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordFootjobCount == 1) {
		firstCount = true;
	}
	actor.addToActorFootjobRecord(firstCount, this);
};


Game_Enemy.prototype.addToEnemySpankCountRecord = function(actor) {
	this._enemyRecordSpankCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordSpankCount = this._enemyRecordSpankCount;
	}
	let firstCount = false;
    if(this._enemyRecordSpankCount == 1) {
		firstCount = true;
	}
	actor.addToActorButtSpankedRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyPussyFuckedCountRecord = function(actor) {
	this._enemyRecordPussyFuckedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordPussyFuckedCount = this._enemyRecordPussyFuckedCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordPussyFuckedCount == 1) {
		firstCount = true;
	}
	actor.addToActorPussyFuckedRecord(firstCount, this);
	
	if(firstCount && this._enemyRecordAnalFuckedCount === 0 && this.hasVirginPrefix()) {
		actor.addToVirginityTakenViaPussyRecord();
	}
};
Game_Enemy.prototype.addToEnemyAnalFuckedCountRecord = function(actor) {
	this._enemyRecordAnalFuckedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordAnalFuckedCount = this._enemyRecordAnalFuckedCount;
	}
	this.setAsActorSexualPartner(actor);
	let firstCount = false;
    if(this._enemyRecordAnalFuckedCount == 1) {
		firstCount = true;
	}
	actor.addToActorAnalFuckedRecord(firstCount, this);
	
	if(firstCount && this._enemyRecordPussyFuckedCount === 0 && this.hasVirginPrefix()) {
		actor.addToVirginityTakenViaAnalRecord();
	}
};

Game_Enemy.prototype.addToEnemyBukkakeCountRecord = function(actor) {
	this._enemyRecordBukkakeTotalCount++;
	this._enemyRecordTotalEjaculationCount++;
	this._enemyTempRecordTotalEjaculationCount++;
	this.addToEnemyGloryBattleEjaculationCountRecord(actor);
	
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordBukkakeTotalCount = this._enemyRecordBukkakeTotalCount;
			wantedStatus._enemyRecordTotalEjaculationCount = this._enemyRecordTotalEjaculationCount;
	}
	let firstCount = false;
    if(this._enemyRecordBukkakeTotalCount == 1) {
		firstCount = true;
	}
	actor.addToActorBukkakeTotalRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemySwallowCountRecord = function(actor) {
	this._enemyRecordSwallowCount++;
	this._enemyRecordTotalEjaculationCount++;
	this._enemyTempRecordTotalEjaculationCount++;
	this.addToEnemyGloryBattleEjaculationCountRecord(actor);
	
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordSwallowCount = this._enemyRecordSwallowCount;
			wantedStatus._enemyRecordTotalEjaculationCount = this._enemyRecordTotalEjaculationCount;
	}
	let firstCount = false;
    if(this._enemyRecordSwallowCount == 1) {
		firstCount = true;
	}
	actor.addToActorSwallowRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyPussyCreampieCountRecord = function(actor) {
	this._enemyRecordPussyCreampieCount++;
	this._enemyRecordTotalEjaculationCount++;
	this._enemyTempRecordTotalEjaculationCount++;
	this.addToEnemyGloryBattleEjaculationCountRecord(actor);
	
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordPussyCreampieCount = this._enemyRecordPussyCreampieCount;
			wantedStatus._enemyRecordTotalEjaculationCount = this._enemyRecordTotalEjaculationCount;
	}
	let firstCount = false;
    if(this._enemyRecordPussyCreampieCount == 1) {
		firstCount = true;
	}
	actor.addToActorPussyCreampieRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyAnalCreampieCountRecord = function(actor) {
	this._enemyRecordAnalCreampieCount++;
	this._enemyRecordTotalEjaculationCount++;
	this._enemyTempRecordTotalEjaculationCount++;
	this.addToEnemyGloryBattleEjaculationCountRecord(actor);
	
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordAnalCreampieCount = this._enemyRecordAnalCreampieCount;
			wantedStatus._enemyRecordTotalEjaculationCount = this._enemyRecordTotalEjaculationCount;
	}
	let firstCount = false;
    if(this._enemyRecordAnalCreampieCount == 1) {
		firstCount = true;
	}
	actor.addToActorAnalCreampieRecord(firstCount, this);
};

Game_Enemy.prototype.addToEnemyGloryBattleEjaculationCountRecord = function(actor) {
	if($gameParty.isInGloryBattle) {
		this._enemyRecordGloryBattleEjaculationCount++;
		actor._recordGloryBattleCockEjaculationCount++;
		if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordGloryBattleEjaculationCount = this._enemyRecordGloryBattleEjaculationCount;
		}
	}
};

Game_Enemy.prototype.addToEnemyOrgasmPresenceCountRecord = function(actor) {
	this._enemyRecordOrgasmPresenceCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordOrgasmPresenceCount = this._enemyRecordOrgasmPresenceCount;
	}
	let firstCount = false;
    if(this._enemyRecordOrgasmPresenceCount == 1) {
		firstCount = true;
	}
	actor.addToActorOrgasmPresenceRecord(firstCount);
};

Game_Enemy.prototype.addToEnemyBoobsPettedCountRecord = function(actor) {
	this._enemyRecordBoobsPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordBoobsPettedCount = this._enemyRecordBoobsPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordBoobsPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorBoobsPettedRecord(firstCount);
};
Game_Enemy.prototype.addToEnemyNipplesPettedCountRecord = function(actor) {
	this._enemyRecordNipplesPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordNipplesPettedCount = this._enemyRecordNipplesPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordNipplesPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorNipplesPettedRecord(firstCount);
};
Game_Enemy.prototype.addToEnemyButtPettedCountRecord = function(actor) {
	this._enemyRecordButtPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordButtPettedCount = this._enemyRecordButtPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordButtPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorButtPettedRecord(firstCount);
};
Game_Enemy.prototype.addToEnemyAnalPettedCountRecord = function(actor) {
	this._enemyRecordAnalPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordAnalPettedCount = this._enemyRecordAnalPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordAnalPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorAnalPettedRecord(firstCount);
};
Game_Enemy.prototype.addToEnemyClitPettedCountRecord = function(actor) {
	this._enemyRecordClitPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordClitPettedCount = this._enemyRecordClitPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordClitPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorClitPettedRecord(firstCount);
};
Game_Enemy.prototype.addToEnemyPussyPettedCountRecord = function(actor) {
	this._enemyRecordPussyPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordPussyPettedCount = this._enemyRecordPussyPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordPussyPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorPussyPettedRecord(firstCount);
};

Game_Enemy.prototype.addToEnemyCockPettedCountRecord = function(actor) {
	this._enemyRecordCockPettedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordCockPettedCount = this._enemyRecordCockPettedCount;
	}
	let firstCount = false;
    if(this._enemyRecordCockPettedCount == 1) {
		firstCount = true;
	}
	actor.addToActorCockPettedRecord(firstCount);
};

Game_Enemy.prototype.addToEnemyFingerSuckedCountRecord = function(actor) {
	this._enemyRecordFingerSuckedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordFingerSuckedCount = this._enemyRecordFingerSuckedCount;
	}
	let firstCount = false;
    if(this._enemyRecordFingerSuckedCount == 1) {
		firstCount = true;
	}
	actor.addToActorFingersSuckedRecord(firstCount);
};

Game_Enemy.prototype.addToEnemyTalkedCountRecord = function(actor) {
	this._enemyRecordTalkedCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordTalkedCount = this._enemyRecordTalkedCount;
	}
	let firstCount = false;
    if(this._enemyRecordTalkedCount == 1) {
		firstCount = true;
	}
	actor.addToActorTalkedAtRecord(firstCount);
};

Game_Enemy.prototype.addToEnemySawCountRecord = function(actor) {
	this._enemyRecordSawCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordSawCount = this._enemyRecordSawCount;
	}
	let firstCount = false;
    if(this._enemyRecordSawCount == 1) {
		firstCount = true;
	}
	actor.addToActorSeenRecord(firstCount);
};

Game_Enemy.prototype.addToEnemyTalkedCockRecord = function(actor) {
	this._enemyRecordTalkCockCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordTalkCockCount = this._enemyRecordTalkCockCount;
	}
	let firstCount = false;
    if(this._enemyRecordTalkCockCount == 1) {
		firstCount = true;
	}
	actor.addToActorEnemyTalkCockRecord(firstCount);
};

Game_Enemy.prototype.addToEnemyJerkOffCountRecord = function(actor) {
	this._enemyRecordJerkoffCount++;
	if(this.isWanted) {
		let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
		wantedStatus._enemyRecordJerkoffCount = this._enemyRecordJerkoffCount;
	}
	let firstCount = false;
    if(this._enemyRecordJerkoffCount == 1) {
		firstCount = true;
	}
	actor.addToActorSeeJerkOffRecord(firstCount);
};
Game_Enemy.prototype.addToEnemyTauntedCountRecord = function(actor) {
	this._enemyRecordTauntedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordTauntedCount = this._enemyRecordTauntedCount;
	}
	let firstCount = false;
    if(this._enemyRecordTauntedCount == 1) {
		firstCount = true;
	}
	actor.addToActorTauntPeopleRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyFlauntedCountRecord = function(actor) {
	this._enemyRecordFlauntedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordFlauntedCount = this._enemyRecordFlauntedCount;
	}
	let firstCount = false;
    if(this._enemyRecordFlauntedCount == 1) {
		firstCount = true;
	}
	actor.addToActorFlauntPeopleRecord(firstCount, this);
};
Game_Enemy.prototype.addToEnemyGotDogezaCountRecord = function(actor) {
	this._enemyRecordGotDogezaCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordGotDogezaCount = this._enemyRecordGotDogezaCount;
	}
	let firstCount = false;
    if(this._enemyRecordGotDogezaCount == 1) {
		firstCount = true;
	}
	actor.addToActorDogezaPeopleRecord(firstCount, this);
};

Game_Enemy.prototype.addToEnemyToysInsertedCountRecord = function(actor) {
	this._enemyRecordToysInsertedCount++;
	if(this.isWanted) {
			let wantedStatus = Prison.getWantedEnemyById(this.getWantedId());
			wantedStatus._enemyRecordToysInsertedCount = this._enemyRecordToysInsertedCount;
	}
	let firstCount = false;
    if(this._enemyRecordToysInsertedCount == 1) {
		firstCount = true;
	}
	actor.addToActorToysInsertedByPeopleRecord(firstCount, this);
};


////////
// Game Troop
/////////////////

Game_Troop.prototype.addToEnemyOrgasmPresenceCountRecord = function(actor) {
	this.members().forEach(function(enemy) {
		if(enemy.isAlive()) {
			enemy.addToEnemyOrgasmPresenceCountRecord(actor);
		}
	}, this);
};

//////
///////////
// Game Party
////////////
////////

Game_Party.prototype.setupWantedList = function() {
	this._wantedEnemies = [];
	this._wantedEnemies.push(new Wanted_Enemy(false));
	this._wantedId_Tonkin = -1;
	this._wantedId_Yasu = -1;
	this._wantedId_Cargill = -1;
	this._wantedId_Aron = -1;
};
Game_Party.prototype.getWantedEnemyById = function(id) {
	return this._wantedEnemies[id];
};

Game_Party.prototype.wantedEnemyListLength = function() {
	let nonDisabledCount = 0;
	
	for(let i = 0; i < this._wantedEnemies.length; ++i) {
		if(!this._wantedEnemies[i]._disabled) nonDisabledCount++;
	}
	
	return nonDisabledCount;
};

Game_Party.prototype.resetWantedAppearanceChance = function() {
	this._currentWantedChance = WANTED_APPEARANCE_BASE_CHANCE + WANTED_APPEARANCE_BASE_CHANCE_BY_LENGTH * this.wantedEnemyListLength();
};
Game_Party.prototype.addWantedAppearanceChance = function() {
	this._currentWantedChance += WANTED_APPEARANCE_ADDED_CHANCE + WANTED_APPEARANCE_ADDED_CHANCE_BY_LENGTH * this.wantedEnemyListLength();
};

Game_Party.prototype.setWantedIdAsAppeared = function(id) {
	this.getWantedEnemyById(id)._recentAppearance = Prison.date;
	if(!this.getWantedEnemyById(id)._appearances) this.getWantedEnemyById(id)._appearances = 0;
	this.getWantedEnemyById(id)._appearances++;
};
Game_Party.prototype.setWantedIdAsDefeated = function(id) {
	if(this.getWantedEnemyById(id)._lastDefeated === Prison.date) return;
	this.getWantedEnemyById(id)._lastDefeated = Prison.date;
	if(this.getWantedEnemyById(id).enemyTypeIsBoss()) return;
	
	let levelLimitMulti = 1;
	if(Prison.hardMode()) levelLimitMulti = 1.1;
	else if(Prison.easyMode()) levelLimitMulti = 0.9;
	
	let currentWantedLevelLimit = Karryn.getWardenLevelLimit() * levelLimitMulti;
	
	if(this.getWantedEnemyById(id)._wantedLvl <= currentWantedLevelLimit) {
		let levelDifference = Karryn.level - this.getWantedEnemyById(id)._wantedLvl;
		if(levelDifference < 5) {
			this.getWantedEnemyById(id)._wantedLvl += 1;
		}
		else {
			this.getWantedEnemyById(id)._wantedLvl += 1 + Math.round(levelDifference * 0.2);
		}
	}
};

Game_Party.prototype.checkPotentialNewWanted = function(enemy) {
	if(!$gameParty.isThisEnemyOrNameAlreadyWanted(enemy)) {
		if(enemy.isBossType) {
			let bossWantedId = $gameParty.addNewWanted(enemy);
			if(enemy.isYasu) $gameParty._wantedId_Yasu = bossWantedId;
			else if(enemy.isTonkin) $gameParty._wantedId_Tonkin = bossWantedId;
			else if(enemy.isCargill) $gameParty._wantedId_Cargill = bossWantedId;
			else if(enemy.isAron) $gameParty._wantedId_Aron = bossWantedId;
			

			return;
		}
		
		let wantedPoints = enemy.getWantedPoints();
		let typeCount = $gameParty.getHeadcountOfWantedType(enemy.enemyType());
		let prisonWantedCount = $gameParty.getHeadcountOfAllPrisonWanted();
		let noAdditionalWantedPointsAfterTwoNeededTypes = enemy.isVisitorMaleType;
		
		let reqWantedPoints = WANTED_POINTS_BASE_REQ;
		reqWantedPoints += WANTED_POINTS_NEEDED_PER_TYPE * typeCount;
		
		if(typeCount >= 2 && !noAdditionalWantedPointsAfterTwoNeededTypes) {
			reqWantedPoints += WANTED_POINTS_NEEDED_PER_TOTAL_WANTED_SIZE * prisonWantedCount;
			reqWantedPoints += WANTED_POINTS_NEEDED_PER_TYPE_OVER_TWO * (typeCount - 1);
		}
		if(typeCount >= 4) {
			reqWantedPoints += WANTED_POINTS_NEEDED_PER_TYPE_OVER_FOUR * (typeCount - 3);
		}

		if(wantedPoints >= reqWantedPoints && !enemy._tagDontAddWanted) {
			$gameParty.addNewWanted(enemy);
		}
	}
};


Game_Party.prototype.addNewWanted = function(enemy) {
	let newWantedId = this._wantedEnemies.length;
	let wanted = new Wanted_Enemy(enemy, Prison.date, newWantedId);
	this._wantedEnemies.push(wanted);
	enemy._isWanted = true;
	enemy._wantedBattlerName = wanted._battlerName;
	enemy._wantedLvl = wanted._wantedLvl;
	enemy._wantedId = wanted._wantedId;
	enemy._justBecameWanted = true;
	if(enemy._tagDontAddWanted) wanted._disabled = true;
	return newWantedId;
};

Game_Party.prototype.isThisEnemyOrNameAlreadyWanted = function(enemy) {
	return enemy.isWanted || this.isThisNameAlreadyInWanted_onlyNameMatters(enemy._randomEnemyName) !== -1;
};

Game_Party.prototype.putAllWantedNamesToNamesCountArray = function() {
	let namesArray = {};
	if(!this._wantedEnemies) return namesArray;
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wanted = this._wantedEnemies[i];
		
		if(wanted._disabled) continue;
		
		if(!namesArray[wanted._enemyName]) namesArray[wanted._enemyName] = 1;
		else namesArray[wanted._enemyName] += 1;
	}
	return namesArray;
};

//for exact name
//returns true or false only
Game_Party.prototype.isThisNameAlreadyInWanted = function(enemyName, enemyType, enemyPrefixName) {
	//let nameFound = -1;
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wanted = this._wantedEnemies[i];
		if(!wanted._disabled && wanted._enemyName == enemyName && wanted._enemyType == enemyType && wanted._enemyPrefixName == enemyPrefixName) {
			//nameFound = i;
			//break;
			return true;
		}
	}
	return false;
	
	//if(nameFound >= 0) return true;
	//else return false;
};

//For only the name part
Game_Party.prototype.isThisNameAlreadyInWanted_onlyNameMatters = function(enemyName) {
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wanted = this._wantedEnemies[i];
		if(!wanted._disabled && wanted._enemyName == enemyName) {
			return i;
		}
	}
	return -1;
};

Game_Party.prototype.findAvailableWanted = function(enemy, maxPrisonerMorphHeight) {
	if(!enemy) return false;
	
	let enemyIsBossType = enemy.dataEnemyType === ENEMYTYPE_YASU_TAG || enemy.dataEnemyType === ENEMYTYPE_TONKIN_TAG || enemy.dataEnemyType === ENEMYTYPE_CARGILL_TAG || enemy.dataEnemyType === ENEMYTYPE_ARON_TAG;
	
	let availableIds = this.findAvailableWantedIds(enemy, maxPrisonerMorphHeight);
	let wantedChance = this._currentWantedChance;
	if(this.isRiotBattle()) wantedChance *= WANTED_CHANCE_MULTIPLER_RIOT_BATTLE;
	else if(Karryn.isInReceptionistPose()) wantedChance *= WANTED_CHANCE_MULTIPLER_RECEPTIONIST_BATTLE;
	else if(this.isInGloryBattle) wantedChance *= WANTED_CHANCE_MULTIPLER_GLORY_BATTLE;
	else if($gameMap._mapId === MAP_ID_TESTING) return false;
	if(availableIds.length > 0 && 
	((!enemy.hasTag(TAG_UNIQUE_ENEMY) && Math.random() < wantedChance) || (enemyIsBossType))) {
		let id = availableIds[0];
		if(availableIds.length > 1) {
			let num = Math.randomInt(availableIds.length);
			id = availableIds[num];
		}
		
		this.setWantedIdAsAppeared(id);
		if(!enemyIsBossType) this.resetWantedAppearanceChance();
		
		return this.getWantedEnemyById(id);
	}
	else {
		this.addWantedAppearanceChance();
		return false;
	}
};

Game_Party.prototype.findAvailableWantedIds = function(enemy, maxPrisonerMorphHeight) {
	let type = enemy.dataEnemyType;
	let availableWantedIds = [];
	
	if(type == ENEMYTYPE_YASU_TAG) {
		if(this._wantedId_Yasu !== -1) {
			availableWantedIds.push(this._wantedId_Yasu);
			return availableWantedIds;
		}
		else return [];
	}
	else if(type == ENEMYTYPE_TONKIN_TAG) {
		if(this._wantedId_Tonkin !== -1) {
			availableWantedIds.push(this._wantedId_Tonkin);
			return availableWantedIds;
		}
		else return [];
	}
	else if(type == ENEMYTYPE_CARGILL_TAG) {
		if(this._wantedId_Cargill !== -1) {
			availableWantedIds.push(this._wantedId_Cargill);
			return availableWantedIds;
		}
		else return [];
	}
	else if(type == ENEMYTYPE_ARON_TAG) {
		if(this._wantedId_Aron !== -1) {
			availableWantedIds.push(this._wantedId_Aron);
			return availableWantedIds;
		}
		else return [];
	}
	
		
	
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wantedEnemy = this._wantedEnemies[i];
		if(wantedEnemy._disabled) continue;
		
		if(
		(wantedEnemy._enemyType == type || 
		(type == ENEMYTYPE_PRISONER_TAG && !enemy._tagDontMorph && !wantedEnemy.enemyTypeIsNotForMorphing() && $dataEnemies[wantedEnemy._enemyId].dataRowHeight <= maxPrisonerMorphHeight)
		) &&
		Prison.date + WANTED_MINIMUM_DAYS_SINCE_DEFEATED > wantedEnemy._lastDefeated &&
		Prison.date > wantedEnemy._recentAppearance) {
			availableWantedIds.push(wantedEnemy._wantedId);
		}
	}
	return availableWantedIds;
};

Game_Party.prototype.getHeadcountOfWantedType = function(type) {
	let count = 0;
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wantedEnemy = this._wantedEnemies[i];
		if(!wantedEnemy._disabled && wantedEnemy._enemyType == type) {
			count++;
		}
	}
	return count;
};

//Except Visitor Center and Bosses
Game_Party.prototype.getHeadcountOfAllPrisonWanted = function() {
	let count = 0;
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wantedEnemy = this._wantedEnemies[i];
		if(!wantedEnemy._disabled && !wantedEnemy._visitor_isFan && !wantedEnemy._visitor_isPervert && !wantedEnemy.enemyTypeIsBoss()) { 
		//todo: don't count assist
			count++;
		}
	}
	return count;
};

Game_Party.prototype.disableAllWanted = function() {
	for(let i = 0; i < this._wantedEnemies.length; i++) {
		let wantedEnemy = this._wantedEnemies[i];
		wantedEnemy._disabled = true;
	}
	this._wantedId_Tonkin = -1;
	this._wantedId_Yasu = -1;
	this._wantedId_Cargill = -1;
	this._wantedId_Aron = -1;
};

///////
// Scene Battle 
///////////

Remtairy.Wanted.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
	$gameTroop.aliveMembers().forEach(function(member) {
		$gameParty.checkPotentialNewWanted(member);
    });
	
	Remtairy.Wanted.Scene_Battle_terminate.call(this);
};
