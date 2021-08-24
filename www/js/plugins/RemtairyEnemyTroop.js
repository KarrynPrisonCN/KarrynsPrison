var Remtairy = Remtairy || {};
Remtairy.EnemyTroop = Remtairy.EnemyAI || {};

//=============================================================================
 /*:
 * @plugindesc Enemy Troop
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const ENEMY_ID_TUTORIALBOSS_YASU = 15;
const ENEMY_ID_LEVELONEBOSS_TONKIN = 16;
const ENEMY_ID_LEVELTHREEBOSS_ARON = 208;
const ENEMY_ID_LEVELFOURBOSS_NOINIM = 240;

const ENEMY_ID_GUARD_LV1 = 21;
const ENEMY_ID_GUARD_LV2 = 22;
const ENEMY_ID_GUARD_LV3 = 23;
const ENEMY_ID_GUARD_LV4 = 24;
const ENEMY_ID_GUARD_LV5 = 25;
const ENEMY_ID_GUARD_LV6 = 26;
const ENEMY_ID_NERD_CLIT_TOY = 121;
const ENEMY_ID_NERD_PUSSY_TOY = 122;
const ENEMY_ID_NERD_ANAL_TOY = 123;

const TROOP_TEST_ID = 1;
const TROOP_WAITRESS_ID = 2;
const TROOP_GUARD_ID = 3;
const TROOP_RIOT_ID = 4;
const TROOP_DEFEATED_LV1_ID = 5;
const TROOP_DEFEATED_LV2_ID = 6;
const TROOP_RECEPTIONIST_ID = 7;
const TROOP_DEFEATED_GUARD_ID = 8;
const TROOP_GLORY_ID = 9;
const TROOP_DEFEATED_LV3_ID = 11;
const TROOP_DEFEATED_LV4_ID = 12;
const TROOP_DEFEATED_LV5_ID = 13;
const TROOP_NIGHT_ID = 14;
const TROOP_COUCH_ONANI_ID = 15;
const TROOP_STRIP_CLUB_ID = 16; 

const TROOP_NORMAL_BATTLE_MAX_SIZE = 6;

///////////
// Game System
////////////

Game_System.prototype.setConsBattlesRem = function(battleArray) {
	this.clearConsBat();
	this._consBat.enable = true;
	for (var i = 0; i < battleArray.length; i++) {
		var troopId = Number(battleArray[i]);
		if ($dataTroops[troopId]) {
			this._consBat.battles.push(troopId);
		};
	};
	if (this._consBat.battles.length === 0) {
		this.clearConsBat();
	};
	
	
};

///////
/////////
// Game Troop
////////////
////////

Game_Troop.prototype.getAvailableFreeEnemySpace_normalBattle = function() {
	let availableSpace = TROOP_NORMAL_BATTLE_MAX_SIZE;
	
	for(let i = 0; i < this.aliveMembers().length; ++i) {
		let enemyId = this.aliveMembers()[i].enemyId();
		let rowHeight = $dataEnemies[enemyId].dataRowHeight;
		availableSpace -= rowHeight;
	}
	
    return availableSpace;
};


Game_Troop.prototype.isAllDead = function() {
	if(Karryn.isInWaitressServingPose() || Karryn.isInReceptionistPose()) return false;
    return this.membersNeededToBeSubdued().length === 0;
};

Game_Troop.prototype.isAllOutOfEjaculationStock = function() {
	let allEnemiesOutOfStock = true;
	this.aliveMembers().forEach(function(member) {
        if(member.hasEjaculationStock()) allEnemiesOutOfStock = false;
    });
	
	return allEnemiesOutOfStock;
};

Game_Troop.prototype.membersNeededToBeSubdued = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && member.isNotOnlooker && member.isNotSupporter;
    });
};


Game_Troop.prototype.aliveMembers = function() {
    return this.members().filter(function(member) {
        return member.isAlive();
    });
};

Game_Troop.prototype.aliveMembersThatAreNotAron = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && !member.isAron;
    });
};

Game_Troop.prototype.aliveMembersThatAreNotNoinim = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && !member.isNoinim;
    });
};

Game_Troop.prototype.erectMembersAll = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && member.isErect;
    });
};

Game_Troop.prototype.angryMembersAll = function() {
    return this.members().filter(function(member) {
        return member.isAlive() && member.isAngry;
    });
};

Game_Troop.prototype.tgrSum_AttackablesOnly = function() {
    return this.aliveMembers().reduce(function(r, member) {
		if(member.isStateAffected(STATE_UNTARGETABLE_FOR_ATTACK_ID)) 
			return r;
        else
			return r + member.tgr;
    }, 0);
};

Game_Troop.prototype.randomSkewerTarget = function() {
    let tgrRand = Math.random() * this.tgrSum_AttackablesOnly();
    let target = null;
    this.aliveMembers().forEach(function(member) {
		if(member.isStateAffected(STATE_UNTARGETABLE_FOR_ATTACK_ID))
			return;
		
        tgrRand -= member.tgr;
        if (tgrRand <= 0 && !target) {
            target = member;
        }
    });
    return target;
};

Game_Troop.prototype.hasEnemyTypePresent = function(enemyType) {
	let found = false;
	for(let i = 0; i < this.aliveMembers().length; i++) {
		if(this.aliveMembers()[i].enemyType() == enemyType) {
			found = true;
			break;
		}
	}
	return found;
};	

Game_Troop.prototype.hasEnemyPrefixPresent = function(prefixType) {
	let found = false;
	for(let i = 0; i < this.aliveMembers().length; i++) {
		if(this.aliveMembers()[i].getNamePrefixType() == prefixType) {
			found = true;
			break;
		}
	}
	return found;
};	

Game_Troop.prototype.isThereNonPrisonerTypeEnemyPresent = function() {
	let found = false;
	for(let i = 0; i < this.aliveMembers().length; i++) {
		if(!this.aliveMembers()[i].isPrisonerType) {
			found = true;
			break;
		}
	}
	return found;
};	

Game_Troop.prototype.isThereNonWerewolfTypeEnemyPresent = function() {
	let found = false;
	for(let i = 0; i < this.aliveMembers().length; i++) {
		if(!this.aliveMembers()[i].isWerewolfType) {
			found = true;
			break;
		}
	}
	return found;
};	

Game_Troop.prototype.getAverageEnemyExperienceLvl = function() {
	let totalLvl = 0;
	let count = 0;

	this.members().forEach(function(enemy) {
		if(enemy.isAppeared() && !enemy.isOnlooker) {
			count++;
			totalLvl += enemy.enemyExperienceLvl();
		}
	}, this);
	
	return Math.round(totalLvl / count);
};

Game_Troop.prototype.getAverageEnemyParam = function(paramId) {
	let totalStat = 0;
	let count = 0;

	this.members().forEach(function(enemy) {
		if(enemy.isAppeared() && !enemy.isOnlooker) {
			count++;
			totalStat += enemy.param(paramId);
		}
	}, this);
	
	return Math.round(totalStat / count);
};

Game_Troop.prototype.getCountOfYetiHeatAura = function() {
	let count = 0;
	for(let i = 0; i < this.aliveMembers().length; i++) {
		if(this.aliveMembers()[i].isStateAffected(STATE_YETI_HEAT_AURA_ID)) {
			count++;
		}
	}
	return count;
};	
Game_Troop.prototype.onTurnEndSpecial_yetiHeatAura = function() {
	let count = this.getCountOfYetiHeatAura();
	if(count >= 1) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		
		if(count >= 2) {
			actor.addState(STATE_YETI_HEAT_KARRYN_TWO_ID);
			actor.removeState(STATE_YETI_HEAT_KARRYN_ONE_ID);
		}
		else {
			actor.addState(STATE_YETI_HEAT_KARRYN_ONE_ID);
			actor.removeState(STATE_YETI_HEAT_KARRYN_TWO_ID);
		}
		
		this.aliveMembers().forEach(function(member) {
			if(!member.isYetiType) {
				if(count >= 2) {
					member.addState(STATE_YETI_HEAT_ENEMY_TWO_ID);
					member.removeState(STATE_YETI_HEAT_ENEMY_ONE_ID);
				}
				else {
					member.addState(STATE_YETI_HEAT_ENEMY_ONE_ID);
					member.removeState(STATE_YETI_HEAT_ENEMY_TWO_ID);
				}
			}	
		});
	}
};	
Game_Troop.prototype.checkYetiHeatAuraStateAfterYetiCollapse = function(collapsingEnemy) {
	let count = this.getCountOfYetiHeatAura();
	if(count === 0) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		actor.removeState(STATE_YETI_HEAT_KARRYN_ONE_ID);
		actor.removeState(STATE_YETI_HEAT_KARRYN_TWO_ID);
		
		this.aliveMembers().forEach(function(member) {
			member.removeState(STATE_YETI_HEAT_ENEMY_ONE_ID);
			member.removeState(STATE_YETI_HEAT_ENEMY_TWO_ID);
		});
	}
	else {
		this.onTurnEndSpecial_yetiHeatAura();
	}
};

Game_Troop.prototype.getCountOfLizardmanPresent = function() {
	let count = 0;
	for(let i = 0; i < this.aliveMembers().length; i++) {
		if(this.aliveMembers()[i].isLizardmanType) {
			count++;
		}
	}
	return count;
};	
Game_Enemy.prototype.lizardmanParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === PARAM_STRENGTH_ID || paramId === PARAM_DEXTERITY_ID || paramId === PARAM_AGILITY_ID) {
		let lizardmanCount = $gameTroop.getCountOfLizardmanPresent();
		let addedRate = 0;
		
		if(lizardmanCount >= 6)
			addedRate += 0.52;
		else if(lizardmanCount === 5)
			addedRate += 0.5;
		else if(lizardmanCount === 4)
			addedRate += 0.45;
		else if(lizardmanCount === 3)
			addedRate += 0.4;
		else if(lizardmanCount === 2)
			addedRate += 0.3;
			
		if(Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN))
			addedRate *= 0.3;
		else if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN))
			addedRate *= 1.2;
		
		rate += addedRate;
	}
	
	return rate;
};
Game_Enemy.prototype.displayLizardmanNumStateIcon = function(count) {
	if(Karryn.isInJobPose()) return false;
	if(count === 6) return $gameTroop.getCountOfLizardmanPresent() >= 6;
	else return $gameTroop.getCountOfLizardmanPresent() === count;
};

Game_Troop.prototype.setAllEnemiesToHide = function() {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared()) {
			enemy.hide();
		}
	}, this);
};


Game_Troop.prototype.setAllEnemiesToAroused = function() {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared()) {
			enemy.setPleasureToArousalPoint();
		}
	}, this);
};

Game_Troop.prototype.setAllEnemiesToAngry = function() {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared()) {
			enemy.addAngryState();
		}
	}, this);
};
Game_Troop.prototype.setAllEnemiesToAngry_chanceBased = function(chance, callLogMessage) {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared() && Math.randomInt(100) < chance) {
			enemy.addAngryState();
			if(callLogMessage) SceneManager._scene._logWindow.displayAffectedStatus(enemy);
		}
	}, this);
};

Game_Troop.prototype.setAllEnemiesToHorny = function() {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared()) {
			enemy.addHornyState();
		}
	}, this);
};
Game_Troop.prototype.setAllEnemiesToHorny_chanceBased = function(chance, callLogMessage) {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared() && Math.randomInt(100) < chance) {
			enemy.addHornyState();
			if(callLogMessage) SceneManager._scene._logWindow.displayAffectedStatus(enemy);
		}
	}, this);
};

Game_Troop.prototype.setAllOrcEnemiesToAngryOnce = function(collapsingEnemy) {
	this.members().forEach(function(enemy) {
		if(enemy.isAppeared() && enemy.stamina > 0 && enemy.isOrcType && !enemy.isTonkin && !enemy._angryOrcCalled) {
			if(collapsingEnemy && collapsingEnemy.name() != enemy.name()) {
				enemy._angryOrcCalled = true;
				enemy.addAngryState();
				SceneManager._scene._logWindow.displayAffectedStatus(enemy);
			}
		}
	}, this);
};

Game_Troop.prototype.normalBattle_spawnEnemy = function(enemyId, setSummonStun) {
	let enemy = this.setupEnemyIdForBattle(enemyId);
	if(enemy) {
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		SceneManager._scene._spriteset.addEnemy(enemy);
		
		if(setSummonStun) enemy.addState(STATE_SUMMON_STUN_ID);
		
		return enemy;
	}
	else return false;
};

Game_Troop.prototype.setupEnemyIdForBattle = function(enemyId, maxPrisonerMorphHeight) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], maxPrisonerMorphHeight);
	if(wanted) {
		if(!wanted.enemyTypeIsBoss())
			enemyId = wanted._enemyId;
	}

	let spot = -1;
	let rowHeight = $dataEnemies[enemyId].dataRowHeight;
	let fixedRowNum = $dataEnemies[enemyId].dataFixedRow;
	let inOrderNum = 0;
	let randomNum = 0;
	
	let openSpots = 0;
	for(let i = 0; i < this._enemySpots.length; ++i) {
		if(!this._enemySpots[i]) openSpots++;
	}
	
	if(openSpots < rowHeight) return false;
	
	if(fixedRowNum > -1) spot = fixedRowNum;
	while(spot == -1) {
		randomNum = Math.randomInt(7 - rowHeight);
		if(!this._enemySpots[randomNum]) {
			spot = randomNum;
		}
	}
	
	let x = ENEMY_NAME_STARTING_X;
	let y = ENEMY_NAME_STARTING_Y + ENEMY_NAME_HEIGHT_SPACING * (spot + (rowHeight - 1));
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	
	enemy._enemySpotsId = spot;
	for(let i = 0; i < rowHeight; ++i) {
		if(this._enemySpots[spot + i]) {
			this.pushEnemySpotDown(spot + i);
		}
		this._enemySpots[spot + i] = enemy;
	}
	
	$gameParty.increaseFatigueGainFromEnemy(enemy.getFatigueGainValue(), enemy.enemyExperienceLvl());
	
	this._enemies.push(enemy);
	
	return enemy;
};

Game_Troop.prototype.pushEnemySpotDown = function(spot) {
	let currentEnemy = this._enemySpots[spot];
	
	let rowHeight = $dataEnemies[currentEnemy.enemyId()].dataRowHeight;

	for(let i = 0; i < rowHeight; ++i) {
		this._enemySpots[spot + i] = false;
	}

	if(spot + rowHeight >= this._enemySpots.length) {
		spot = 0;
	}
	else {
		spot++;
	}

	let x = ENEMY_NAME_STARTING_X;
	let y = ENEMY_NAME_STARTING_Y + ENEMY_NAME_HEIGHT_SPACING * (spot + (rowHeight - 1));
	
	currentEnemy._screenX = x;
	currentEnemy._screenY = y;

	for(let i = 0; i < rowHeight; ++i) {
		if(this._enemySpots[spot + i]) {
			this.pushEnemySpotDown(spot + i);
		}
		this._enemySpots[spot + i] = currentEnemy;
	}
};

Game_Troop.prototype.setupEnemyIdForDefeatedBattle = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		if(!wanted.enemyTypeIsBoss())
			enemyId = wanted._enemyId;
	}

	let x = ENEMY_NAME_STARTING_X;
	let y = ENEMY_NAME_STARTING_Y;
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	this._enemies.push(enemy);
	return enemy;
};

//////////
// Setup Test Battle 
//////////////

Game_Troop.prototype.setupTestBattle = function(troopId) {
	let enemyId_1 = $gameVariables.value(VARIABLE_TESTBATTLE_ENEMY_1_ID);
	let enemyId_2 = $gameVariables.value(VARIABLE_TESTBATTLE_ENEMY_2_ID);
	let enemyId_3 = $gameVariables.value(VARIABLE_TESTBATTLE_ENEMY_3_ID);
	let enemyId_4 = $gameVariables.value(VARIABLE_TESTBATTLE_ENEMY_4_ID);
	let enemyId_5 = $gameVariables.value(VARIABLE_TESTBATTLE_ENEMY_5_ID);
	let enemyId_6 = $gameVariables.value(VARIABLE_TESTBATTLE_ENEMY_6_ID);

	if(enemyId_1 !== 0) {
		this.setupEnemyIdForBattle(enemyId_1, 3);
	}
	if(enemyId_2 !== 0) {
		this.setupEnemyIdForBattle(enemyId_2, 3);
	}
	if(enemyId_3 !== 0) {
		this.setupEnemyIdForBattle(enemyId_3, 3);
	}
	if(enemyId_4 !== 0) {
		this.setupEnemyIdForBattle(enemyId_4, 3);
	}
	if(enemyId_5 !== 0) {
		this.setupEnemyIdForBattle(enemyId_5, 3);
	}
	if(enemyId_6 !== 0) {
		this.setupEnemyIdForBattle(enemyId_6, 3);
	}
	
	
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
};

//////////
// Setup Guard Battle 
//////////////

Game_Troop.prototype.setupGuardBattle = function(troopId) {
	let enemyCount = 0;
	let validEnemyIds = $gameParty.getGuardEnemyIds();
	let guardAggr = Prison.guardAggression;
	
	if(guardAggr < 4) enemyCount = 2;
	else if(guardAggr < 20) enemyCount = 3;
	else enemyCount = 4;

	if(guardAggr < 1) { }
	else if(guardAggr < 20) {
		enemyCount += Math.round(Math.random() + guardAggr * 0.03);
	}
	else {
		enemyCount += Math.randomInt(3);
	}

	//enemyCount = 6;
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForBattle(enemyId, 2);
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
};

//////////
// Setup Riot Battle 
//////////////

Game_Troop.prototype.setupRiotBattle = function(troopId) {
	let validEnemyIds = $gameParty.getRiotEnemyIds();
	let mapId = $gameMap._mapId;
	let enemyCount = 0;
	let riotChance = 0;
	
	if(mapId === MAP_ID_WORKSHOP || mapId === MAP_ID_DISH_WASHING || mapId === MAP_ID_RECEPTION || mapId === MAP_ID_LAUNDRY) {
		riotChance = $gameParty.prisonLevelOneRiotChance();
	}
	else if(mapId === MAP_ID_READING_ROOM || mapId === MAP_ID_CLASSROOM || mapId === MAP_ID_STAFF_LOUNGE || mapId === MAP_ID_RESEARCH || mapId === MAP_ID_MEETING_ROOM) {
		riotChance = $gameParty.prisonLevelTwoRiotChance();
	}
	else if(mapId === MAP_ID_CELL_BLOCK_SOUTH || mapId === MAP_ID_GYM || mapId === MAP_ID_CELL_BLOCK_NORTH_WEST || mapId === MAP_ID_CELL_BLOCK_NORTH_EAST) {
		riotChance = $gameParty.prisonLevelThreeRiotChance();
	}
	else if(mapId === MAP_ID_LVL4_MUSHROOM_FARM || mapId === MAP_ID_LVL4_CHICKEN_PASTURE || mapId === MAP_ID_LVL4_UNDERGROUND_POOL || mapId === MAP_ID_LVL4_BASKETBALL_COURT || mapId === MAP_ID_LVL4_YETI_CAVERN) {
		riotChance = $gameParty.prisonLevelFourRiotChance();
	}

	if(riotChance <= 4) {
		enemyCount = 3;
	}
	else if(riotChance <= 8) {
		enemyCount = 3 + Math.randomInt(2);
	}
	else if(riotChance <= 10) {
		enemyCount = 3 + Math.randomInt(3);
	}
	else if(riotChance <= 12) {
		enemyCount = 4 + Math.randomInt(2);
	}
	else if(riotChance <= 16) {
		enemyCount = 4 + Math.randomInt(3);
	}
	else if(riotChance <= 20) {
		enemyCount = 4 + Math.randomInt(4);
	}
	else {
		enemyCount = 5 + Math.randomInt(3);
	}

	if(Prison.easyMode()) { enemyCount--; }

	enemyCount = Math.min(6, enemyCount);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForBattle(enemyId, 3);
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
};

//////////
// Setup Defeated Battle 
//////////////

//Defeated Level One
Game_Troop.prototype.setupDefeatedLevelOneBattle = function(troopId) {
	let blowbangFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlOneFactor();
	let validEnemyIds = $gameParty.getDefeatedLevelOneEnemyIds(blowbangFactor, true);
		
	this._maxBlowbangParticipants = Math.max(3, blowbangFactor);
	this._appearedBlowbangParticipants = 0;
	
	let enemyCount = Math.min(4, this._maxBlowbangParticipants);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		this._appearedBlowbangParticipants++;
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	this.setAllEnemiesToAroused();
};

Game_Troop.prototype.onTurnEndSpecial_defeatedLevelOneBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySpotsAvailable = 0;

	if(actor.hasNoStamina() && actor.hasNoEnergy()) {
		actor.addState(STATE_DISABLED_ID);
		return;
	}
	else if(actor.isStateAffected(STATE_DISABLED_ID)) {
		actor.removeState(STATE_DISABLED_ID);
	}
	
	if(actor.canGetOther1InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther2InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther3InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther4InsertedNone()) emptySpotsAvailable++;
	
	emptySpotsAvailable = Math.min(emptySpotsAvailable, this._maxBlowbangParticipants - this._appearedBlowbangParticipants);
	
	for(let i = 0; i < emptySpotsAvailable; ++i) {
		let blowbangFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlOneFactor();
		let validEnemyIds = $gameParty.getDefeatedLevelOneEnemyIds(blowbangFactor, false);
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		enemy.setPleasureToArousalPoint();
		SceneManager._scene._spriteset.addEnemy(enemy);
		this._appearedBlowbangParticipants++;
	}
};

Game_Troop.prototype.setupDefeatedLevelTwoBattle = function(troopId) {
	let bathroomFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlTwoFactor();
	let validEnemyIds = $gameParty.getDefeatedLevelTwoEnemyIds(bathroomFactor);
		
	this._maxUrinalParticipants = Math.max(3, bathroomFactor);
	this._appearedUrinalParticipants = 0;
	
	let enemyCount = Math.min(4, this._maxUrinalParticipants);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		this._appearedUrinalParticipants++;
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	this.setAllEnemiesToAroused();
};

Game_Troop.prototype.onTurnEndSpecial_defeatedLevelTwoBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySpotsAvailable = 0;

	if(actor.hasNoStamina() && actor.hasNoEnergy()) {
		actor.addState(STATE_DISABLED_ID);
		return;
	}
	else if(actor.isStateAffected(STATE_DISABLED_ID)) {
		actor.removeState(STATE_DISABLED_ID);
	}
	
	if(actor.canGetOther1InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther2InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther3InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther4InsertedNone()) emptySpotsAvailable++;
	
	emptySpotsAvailable = Math.min(emptySpotsAvailable, this._maxUrinalParticipants - this._appearedUrinalParticipants);
	
	for(let i = 0; i < emptySpotsAvailable; ++i) {
		let bathroomFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlTwoFactor();
		let validEnemyIds = $gameParty.getDefeatedLevelTwoEnemyIds(bathroomFactor);
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		enemy.setPleasureToArousalPoint();
		SceneManager._scene._spriteset.addEnemy(enemy);
		this._appearedUrinalParticipants++;
	}
};

Game_Troop.prototype.setupDefeatedLevelThreeBattle = function(troopId) {
	let soloCellFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlThreeFactor();
	let validEnemyIds = $gameParty.getDefeatedLevelThreeEnemyIds(soloCellFactor);
		
	this._maxSoloCellParticipants = Math.max(3, soloCellFactor);
	this._appearedSoloCellParticipants = 0;
	
	let enemyCount = Math.min(4, this._maxSoloCellParticipants);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		this._appearedSoloCellParticipants++;
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	this.setAllEnemiesToAroused();
};

Game_Troop.prototype.onTurnEndSpecial_defeatedLevelThreeBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySpotsAvailable = 0;

	if(actor.hasNoStamina() && actor.hasNoEnergy()) {
		actor.addState(STATE_DISABLED_ID);
		return;
	}
	else if(actor.isStateAffected(STATE_DISABLED_ID)) {
		actor.removeState(STATE_DISABLED_ID);
	}
	
	if(actor.canGetOther1InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther2InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther3InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther4InsertedNone()) emptySpotsAvailable++;
	
	emptySpotsAvailable = Math.min(emptySpotsAvailable, this._maxSoloCellParticipants - this._appearedSoloCellParticipants);
	
	for(let i = 0; i < emptySpotsAvailable; ++i) {
		let soloCellFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlThreeFactor();
		let validEnemyIds = $gameParty.getDefeatedLevelThreeEnemyIds(soloCellFactor);
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		enemy.setPleasureToArousalPoint();
		SceneManager._scene._spriteset.addEnemy(enemy);
		this._appearedSoloCellParticipants++;
	}
};

Game_Troop.prototype.setupDefeatedLevelFourBattle = function(troopId) {
	let pilloryFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlFourFactor();
	let validEnemyIds = $gameParty.getDefeatedLevelFourEnemyIds(pilloryFactor);
		
	this._maxPilloryParticipants = Math.max(3, pilloryFactor);
	this._appearedPilloryParticipants = 0;
	
	let enemyCount = Math.min(4, this._maxPilloryParticipants);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		this._appearedPilloryParticipants++;
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	this.setAllEnemiesToAroused();
};

Game_Troop.prototype.onTurnEndSpecial_defeatedLevelFourBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySpotsAvailable = 0;

	if(actor.hasNoStamina() && actor.hasNoEnergy()) {
		actor.addState(STATE_DISABLED_ID);
		return;
	}
	else if(actor.isStateAffected(STATE_DISABLED_ID)) {
		actor.removeState(STATE_DISABLED_ID);
	}
	
	if(actor.canGetOther1InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther2InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther3InsertedNone()) emptySpotsAvailable++;
	if(actor.canGetOther4InsertedNone()) emptySpotsAvailable++;
	
	emptySpotsAvailable = Math.min(emptySpotsAvailable, this._maxPilloryParticipants - this._appearedPilloryParticipants);

	for(let i = 0; i < emptySpotsAvailable; ++i) {
		let pilloryFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedLvlFourFactor();
		let validEnemyIds = $gameParty.getDefeatedLevelFourEnemyIds(pilloryFactor);
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		enemy.setPleasureToArousalPoint();
		SceneManager._scene._spriteset.addEnemy(enemy);
		this._appearedPilloryParticipants++;
	}
};

Game_Troop.prototype.setupDefeatedGuardBattle = function(troopId) {
	let guardFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedGuardFactor();
	let validEnemyIds = $gameParty.getGuardEnemyIds();
	
	this._maxBedParticipants = Math.max(3, guardFactor);
	this._appearedBedParticipants = 0;
	
	let enemyCount = Math.min(3, this._maxBedParticipants);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		this._appearedBedParticipants++;
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
	this.setAllEnemiesToAroused();
};

Game_Troop.prototype.onTurnEndSpecial_defeatedGuardBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let emptySpotsAvailable = 3;

	if(actor.hasNoStamina() && actor.hasNoEnergy()) {
		actor.addState(STATE_DISABLED_ID);
		return;
	}
	else if(actor.isStateAffected(STATE_DISABLED_ID)) {
		actor.removeState(STATE_DISABLED_ID);
	}
	
	emptySpotsAvailable -= $gameTroop.aliveMembers().length;
	
	emptySpotsAvailable = Math.min(emptySpotsAvailable, this._maxBedParticipants - this._appearedBedParticipants);
	
	for(let i = 0; i < emptySpotsAvailable; ++i) {
		let guardFactor = $gameActors.actor(ACTOR_KARRYN_ID).getDefeatedGuardFactor();
		let validEnemyIds = $gameParty.getGuardEnemyIds();
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForDefeatedBattle(enemyId);
		enemy.makeUniqueNames();
		enemy.setupEnemyPrefixEjaculationStockEffect();
		enemy.onBattleStart();
		enemy.midBattleSpawn_setupDreamX();
		enemy.setPleasureToArousalPoint();
		SceneManager._scene._spriteset.addEnemy(enemy);
		this._appearedBedParticipants++;
	}
};

Game_Troop.prototype.setupNightBattle = function(troopId) {
	let mapId = $gameMap._mapId;
	let validEnemyIds = [ 51 ];
	let enemyCount = 3;
	let overTwentyGuardAggr = Prison.guardAggression >= 20;
	let hasInmateCurfewEdict = Karryn.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS);
	
	//let validEnemyIds = $gameParty.getGuardEnemyIds();
	
	if(mapId === MAP_ID_EB_HALLWAY) {
		validEnemyIds = $gameParty.getGuardEnemyIds();
		
		if(Karryn.hasEdict(EDICT_NO_HIRING_STANDARDS))
			enemyCount += 1 + Math.randomInt(2);
		else if(Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES))
			enemyCount += Math.randomInt(3);
		else if(Karryn.hasEdict(EDICT_LAXER_HIRING_STANDARDS))
			enemyCount += Math.randomInt(2);
	
		if(Karryn.hasEdict(EDICT_OFFICE_VOLUNTEER_GUARDS))
			enemyCount += 1 + Math.randomInt(2);
		else if(Karryn.hasEdict(EDICT_OFFICE_INMATE_GUARDS))
			enemyCount += Math.randomInt(3);
		
		if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
			enemyCount += 1;
	}
	else if(mapId === MAP_ID_OUTSIDE) {
		validEnemyIds = $gameParty.getGuardEnemyIds();
		if(Karryn.showLevelTwoSubjugatedEdicts()) {
			validEnemyIds.push(143);
		}
		enemyCount -= 1;
		if(Karryn.hasEdict(EDICT_NO_HIRING_STANDARDS))
			enemyCount += Math.randomInt(2);
		if(Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES))
			enemyCount += Math.randomInt(2);
		if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
			enemyCount += 1;
	}
	else if(mapId === MAP_ID_YARD) {
		validEnemyIds = [ 51, 81, 91 ];
		if(!Karryn.showLevelOneSubjugatedEdicts()) {
			validEnemyIds.push(52);
			enemyCount -= 1;
		}
		if(Karryn.showLevelTwoSubjugatedEdicts()) {
			validEnemyIds.push(121);
			validEnemyIds.push(141);
			enemyCount += Math.randomInt(2);
		}
		if(Karryn.showLevelThreeSubjugatedEdicts()) {
			validEnemyIds.push(192);
			if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS))
				validEnemyIds.push(181);
		}
		enemyCount += Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_LVL1_HALLWAY) {
		validEnemyIds = [ 51, 53, 81, 83, 92, 93, 94 ];
		if(overTwentyGuardAggr) {
			validEnemyIds = validEnemyIds.concat(validEnemyIds);
			validEnemyIds = validEnemyIds.concat(validEnemyIds);
			validEnemyIds = validEnemyIds.concat($gameParty.getGuardEnemyIds());
		}
		enemyCount += Math.randomInt(2);
		if(Prison.prisonLevelOneIsRioting())
			enemyCount -= Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_VISITOR_ROOM) {
		validEnemyIds = [ 51, 82 ]
		if(Karryn.showLevelTwoSubjugatedEdicts()) {
			validEnemyIds.push(143);
		}
		enemyCount -= 1;
		enemyCount += Math.randomInt(2);
	}
	else if(mapId === MAP_ID_VISITOR_ROOM_BROKEN) {
		validEnemyIds = [ 51, 82, 81 ]
		enemyCount -= 1;
		enemyCount += Math.randomInt(2);
	}
	else if(mapId === MAP_ID_LVL2_HALLWAY) {
		validEnemyIds = [ 51, 121, 122, 123, 82, 142, 143 ];
		if(overTwentyGuardAggr) {
			validEnemyIds = validEnemyIds.concat(validEnemyIds);
			validEnemyIds = validEnemyIds.concat(validEnemyIds);
			validEnemyIds = validEnemyIds.concat($gameParty.getGuardEnemyIds());
		}
		enemyCount += Math.randomInt(2);
		if(Prison.prisonLevelTwoIsRioting())
			enemyCount -= Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_COMMON_AREA_SOUTH_EAST) {
		validEnemyIds = [ 51, 182, 183, 191, 192, 211, 212, 142, 123, 94, 82 ];
		if(overTwentyGuardAggr) {
			validEnemyIds = validEnemyIds.concat(validEnemyIds);
			validEnemyIds = validEnemyIds.concat(validEnemyIds);
			validEnemyIds = validEnemyIds.concat($gameParty.getGuardEnemyIds());
		}
		enemyCount += Math.randomInt(2);
		if(Prison.prisonLevelThreeIsRioting())
			enemyCount -= Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_LVL4_MUSHROOM_FARM) {
		validEnemyIds = [ 51, 141, 142, 143, 123, 182, 183 ];
		enemyCount += Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_LVL4_CHICKEN_PASTURE) {
		validEnemyIds = [ 51, 53, 191, 192, 221, 222 ];
		enemyCount += Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_LVL4_UNDERGROUND_POOL) {
		validEnemyIds = [ 51, 94, 121, 131, 132 ];
		enemyCount += Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_LVL4_BASKETBALL_COURT) {
		validEnemyIds = [ 51, 83, 95, 182, 191, 223, 232 ];
		enemyCount += Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	else if(mapId === MAP_ID_LVL4_YETI_CAVERN) {
		validEnemyIds = [ 51, 212, 213, 231, 232 ];
		enemyCount += Math.randomInt(2);
		if(hasInmateCurfewEdict) 
			enemyCount += Math.randomInt(3);
	}
	
	enemyCount = Math.min(enemyCount, 6);
	
	for(let i = 0; i < enemyCount; ++i) {
		let enemyId = validEnemyIds[Math.randomInt(validEnemyIds.length)];
		let enemy = this.setupEnemyIdForBattle(enemyId);
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
};

//////////////
///////////////////
// Reorder Images on Selection
/////////////////
////////////////

Game_Troop.prototype.reorderImagesOnSelection = function() {
	if(Karryn.isInReorderEnemyImagesOnSelectionPose()) {
		
		if($gameParty.isInGloryBattle) {
			if(this._gloryLeftStall) {
				let x = 0;
				let y = 0;
				if(this._gloryLeftStall.isAroused()) {
					x = GLORYHOLE_POS_LEFT_HARD_X;
					y = GLORYHOLE_POS_LEFT_HARD_Y;
				}
				else {
					x = GLORYHOLE_POS_LEFT_SOFT_X;
					y = GLORYHOLE_POS_LEFT_SOFT_Y;
				}
				this._gloryLeftStall._screenX = x;
				this._gloryLeftStall._screenY = y;
				this._gloryLeftStall.setCustomEnemySpritePosition(x, y);
			}
			if(this._gloryRightStall) {
				let x = 0;
				let y = 0;
				if(this._gloryRightStall.isAroused()) {
					x = GLORYHOLE_POS_RIGHT_HARD_X;
					y = GLORYHOLE_POS_RIGHT_HARD_Y;
				}
				else {
					x = GLORYHOLE_POS_RIGHT_SOFT_X;
					y = GLORYHOLE_POS_RIGHT_SOFT_Y;
				}
				this._gloryRightStall._screenX = x;
				this._gloryRightStall._screenY = y;
				this._gloryRightStall.setCustomEnemySpritePosition(x, y);
			}
		}
		else {
			let spot = 0;
			
			for(let i = 0; i < this._enemies.length; ++i) {
				if(this._enemies[i] && this._enemies[i]._selectionShowName) {
					let rowHeight = $dataEnemies[this._enemies[i]._enemyId].dataRowHeight;
					
					let x = 0;
					let y = 0;
					
					if(spot === 5 && rowHeight >= 2 || spot === 4 && rowHeight >= 3) 
						spot = 6;
					
					if(spot < 6) {
						x = ENEMY_NAME_HALFSPECIAL_FIRST_COL_X;
						y = ENEMY_NAME_HALFSPECIAL_STARTING_Y + ENEMY_NAME_HALFSPECIAL_HEIGHT_SPACING * (spot + (rowHeight - 1));
					}
					else {
						x = ENEMY_NAME_HALFSPECIAL_SECOND_COL_X;
						y = ENEMY_NAME_HALFSPECIAL_STARTING_Y + ENEMY_NAME_HALFSPECIAL_HEIGHT_SPACING * (spot - 6 + (rowHeight - 1));
					}
					
					this._enemies[i]._screenX = x;
					this._enemies[i]._screenY = y;
					this._enemies[i].setCustomEnemySpritePosition(x, y);
					
					spot += rowHeight;
				}
			}
		}
	}
};

///////////////
// Enemy Downgrade
// Enemy Upgrade
//////////////

Game_Troop.prototype.checkEnemyIdForPossibleDowngradeOrUpgrade = function(enemyId) { 
	let checkedId = enemyId;
	
	let minAppearReq = $dataEnemies[checkedId].dataMinAppearReq;
	let downgradeId = $dataEnemies[checkedId].dataDowngradeId;
	let upgradeReq = $dataEnemies[checkedId].dataUpgradeReq;
	let upgradeId = $dataEnemies[checkedId].dataUpgradeId;

	if(minAppearReq && downgradeId) {
		let meetMinReq = this.getEnemyIdAppearLvl(checkedId) >= minAppearReq;
		if(!meetMinReq) {
			checkedId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(downgradeId);
		}
	}
	
	if(upgradeReq && upgradeId && (upgradeId !== checkedId)) {
		let meetUpgradeReq = this.getEnemyIdAppearLvl(checkedId) >= upgradeReq;
		if(meetUpgradeReq) {
			checkedId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(upgradeId);
		}
	}
	
	return checkedId;
};

//Enemy Appear Lvl
Game_Troop.prototype.getEnemyIdAppearLvl = function(enemyId) {
	let appearLvl = 0;
	let enemyType = $dataEnemies[enemyId].dataEnemyType;
	
	if(enemyType == ENEMYTYPE_PRISONER_TAG) {
		appearLvl += $gameParty.prisonGlobalRiotChance(true) / 2;
		if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) appearLvl += 6;
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 8;
		else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 6;
		else if(Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) appearLvl += 4;
		else if(Karryn.hasEdict(EDICT_LEVEL_ONE_SUBJUGATED)) appearLvl += 2;
	}
	else if(enemyType == ENEMYTYPE_GOBLIN_TAG) {
		if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) appearLvl += 6;
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 12;
		else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 6;
		else if(Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) appearLvl += 4;
		else if(Karryn.hasEdict(EDICT_LEVEL_ONE_SUBJUGATED)) appearLvl += 2;
		if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) appearLvl += 4;
		else if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) appearLvl += 2;
	}
	else if(enemyType == ENEMYTYPE_THUG_TAG) {
		appearLvl += ($gameParty.prisonLevelOneRiotChance() - $gameParty.prisonGlobalRiotChance(true)) / 2;
		if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) appearLvl += 8;
		if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 8;
		else if(Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) appearLvl += 4;
	}
	else if(enemyType == ENEMYTYPE_ROGUE_TAG) {
		if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) appearLvl += 2;
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 8;
		else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 4;
		if(Karryn.hasEdict(EDICT_THE_ROGUE_PROBLEM) && !Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) appearLvl += 2;
	}
	else if(enemyType == ENEMYTYPE_NERD_TAG) {
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 2;
		else if(Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) appearLvl += 1;
		
		if(Karryn.hasEdict(EDICT_PAY_NERD_BLACKMAIL) || Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) appearLvl += 2;
		if(Karryn.hasEdict(EDICT_REPAIR_READING_ROOM) && !Karryn.hasEdict(EDICT_READING_ROOM_ENTRANCE_FEE)) appearLvl += 1;
		if(Karryn.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) appearLvl += 1;
		if(Karryn.hasEdict(EDICT_REPAIR_STORE)) appearLvl += 1;
	}
	else if(enemyType == ENEMYTYPE_SLIME_TAG) {
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 8;
		else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 4;
	}
	else if(enemyType == ENEMYTYPE_LIZARDMAN_TAG) {
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 5;
		else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 2;
		if(Karryn.hasEdict(EDICT_THE_LIZARDMAN_PROBLEM) && !Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN)) appearLvl += 2;
		if(!Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB)) appearLvl += 3;
		if(Karryn.hasEdict(EDICT_COLD_SHOWERS)) appearLvl += 3;
	}
	else if(enemyType == ENEMYTYPE_ORC_TAG) {
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 4;
		else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) appearLvl += 2;
		if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) appearLvl += 3;
		if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) appearLvl += 3;
	}
	else if(enemyType == ENEMYTYPE_HOMELESS_TAG) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_THREE_ID)) appearLvl += 6;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_TWO_ID)) appearLvl += 4;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_HOMELESS_ONE_ID)) appearLvl += 2;
	}
	else if(enemyType == ENEMYTYPE_WEREWOLF_TAG) {
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 4;
	}
	else if(enemyType == ENEMYTYPE_YETI_TAG) {
		if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) appearLvl += 4;
	}
	
	return Math.round(appearLvl);
};

////////
// Noinim Reinforcement

Game_Troop.prototype.noinimReinforcementCheck = function() {
	if($gameParty._isBossBattleFlag && !$gameParty._noinimReinforcement_third && Prison.currentlyPrisonLevelFour() && $gameTroop.members()[0] && $gameTroop.members()[0].isAlive() && $gameTroop.members()[0].isNoinim && $gameTroop.getAvailableFreeEnemySpace_normalBattle() > 0) {
		if(!$gameParty._noinimReinforcement_first && ($gameTroop.members()[0].stamina <= $gameTroop.members()[0].maxstamina * 0.75 || $gameTroop.members()[0]._ejaculationStock <= 3)) {
			let spaceReq = 2;
			if(Prison.hardMode()) spaceReq = 3;
			else if(Prison.easyMode()) spaceReq = 1;
			
			if($gameTroop.getAvailableFreeEnemySpace_normalBattle() >= spaceReq) {
				let enemy = false;
				enemy = $gameTroop.normalBattle_spawnEnemy(95, true);
				if(enemy) {
					BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
				}
				if(!Prison.easyMode()) {
					enemy = $gameTroop.normalBattle_spawnEnemy(143, true);
					if(enemy) {
						BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
					}
				}
				if(Prison.hardMode()) {
					enemy = $gameTroop.normalBattle_spawnEnemy(86, true);
					if(enemy) {
						BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
					}
				}
				
				AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
				$gameParty._noinimReinforcement_first = true;
			}
			return;
		}
		
		if(!$gameParty._noinimReinforcement_second && $gameParty._noinimReinforcement_first && ($gameTroop.members()[0].stamina <= $gameTroop.members()[0].maxstamina * 0.5 || $gameTroop.members()[0]._ejaculationStock <= 2)) {
			let spaceReq = 2;
			if(Prison.easyMode()) spaceReq = 1;
			
			if($gameTroop.getAvailableFreeEnemySpace_normalBattle() >= spaceReq) {
				let enemy = false;
				enemy = $gameTroop.normalBattle_spawnEnemy(194, true);
				if(enemy) {
					BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
				}
				if(!Prison.easyMode()) {
					enemy = $gameTroop.normalBattle_spawnEnemy(54, true);
					if(enemy) {
						BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
					}
				}
				
				AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
				$gameParty._noinimReinforcement_second = true;
			}
			return;
		}
		
		if(!$gameParty._noinimReinforcement_third && $gameParty._noinimReinforcement_second && $gameParty._noinimReinforcement_first&& ($gameTroop.members()[0].stamina <= $gameTroop.members()[0].maxstamina * 0.25 || $gameTroop.members()[0]._ejaculationStock <= 1)) {
			let spaceReq = 2;
			if(Prison.hardMode()) spaceReq = 3;
			
			if($gameTroop.getAvailableFreeEnemySpace_normalBattle() >= spaceReq) {
				let enemy = false;
				enemy = $gameTroop.normalBattle_spawnEnemy(183, true);
				if(enemy) {
					BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
				}
				enemy = $gameTroop.normalBattle_spawnEnemy(126, true);
				if(enemy) {
					BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
				}
				if(Prison.hardMode()) {
					enemy = $gameTroop.normalBattle_spawnEnemy(214, true);
					if(enemy) {
						BattleManager._logWindow.push('addText', TextManager.midBattleEnemyReinforcement.format(enemy.displayName()));
					}
				}
				
				AudioManager.playSe({name:'+Footstep1', pan:0, pitch:100, volume:70});
				$gameParty._noinimReinforcement_third = true;
			}
			return;
		}
	}
};


/////////////
///////////////
// Game Party
/////////////////
/////////////

////////////
// Set Troop Ids
//////////////

Game_Party.prototype.setTroopIds = function() {
	let mapId = $gameMap._mapId;
	let firstTroopId = 21;
	let troopsWavesArray = [];
	
	//Level One
	if(this.currentlyPrisonLevelOne() && this.prisonLevelOneIsAnarchy()) {
		if(mapId === MAP_ID_VISITOR_ROOM_BROKEN) {
			if(this.HighOrder()) {
				firstTroopId = 23;
			}
			else if(this.MedOrder()) {
				firstTroopId = 23;
			}
			else if(this.LowOrder()) {
				firstTroopId = 23;
				troopsWavesArray.push(22);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 25;
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 25;
				troopsWavesArray.push(22);
			}
			//firstTroopId = 2;
		}
		else if(mapId === MAP_ID_VISITOR_CENTER_BROKEN) {
			if(this.HighOrder()) {
				firstTroopId = 23;
				troopsWavesArray.push(32);
			}
			else if(this.MedOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(34);
			}
			else if(this.LowOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(34);
				troopsWavesArray.push(21);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(34);
				troopsWavesArray.push(35);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(34);
				troopsWavesArray.push(35);
			}
		}
		else if(mapId === MAP_ID_BAR_BROKEN) {
			if(this.HighOrder()) {
				firstTroopId = 44;
				troopsWavesArray.push(22);
				troopsWavesArray.push(45);
				troopsWavesArray.push(21);
			}
			else if(this.MedOrder()) {
				firstTroopId = 44;
				troopsWavesArray.push(28);
				troopsWavesArray.push(46);
				if(!Prison.easyMode()) troopsWavesArray.push(24);
				troopsWavesArray.push(45);
			}
			else if(this.LowOrder()) {
				firstTroopId = 44;
				troopsWavesArray.push(28);
				troopsWavesArray.push(46);
				if(!Prison.easyMode()) troopsWavesArray.push(50);
				troopsWavesArray.push(48);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 51;
				troopsWavesArray.push(46);
				troopsWavesArray.push(29);
				if(!Prison.easyMode()) troopsWavesArray.push(47);
				troopsWavesArray.push(57);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 51;
				troopsWavesArray.push(49);
				troopsWavesArray.push(29);
				if(!Prison.easyMode()) troopsWavesArray.push(50);
				troopsWavesArray.push(57);
				troopsWavesArray.push(58);
			}
		}
		else if(mapId === MAP_ID_LVL1_HALLWAY) {
			if(this.HighOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(28);
			}
			else if(this.MedOrder()) {
				firstTroopId = 25;
				troopsWavesArray.push(28);
				troopsWavesArray.push(34);
			}
			else if(this.LowOrder()) {
				firstTroopId = 25;
				troopsWavesArray.push(30);
				troopsWavesArray.push(34);
				if(!Prison.easyMode()) troopsWavesArray.push(24);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 25;
				troopsWavesArray.push(30);
				troopsWavesArray.push(34);
				if(!Prison.easyMode()) troopsWavesArray.push(24);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 25;
				troopsWavesArray.push(30);
				troopsWavesArray.push(39);
				if(!Prison.easyMode()) troopsWavesArray.push(24);
			}
		}
		else if(mapId === MAP_ID_WORKSHOP) {
			if(this.HighOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(47);
			}
			else if(this.MedOrder()) {
				firstTroopId = 24;
				troopsWavesArray.push(47);
			}
			else if(this.LowOrder()) {
				firstTroopId = 48;
				troopsWavesArray.push(50);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 48;
				troopsWavesArray.push(50);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 52;
				troopsWavesArray.push(50);
			}
		}
		else if(mapId === MAP_ID_LAUNDRY) {
			if(this.HighOrder()) {
				firstTroopId = 35;
				troopsWavesArray.push(34);
			}
			else if(this.MedOrder()) {
				firstTroopId = 35;
				troopsWavesArray.push(34);
			}
			else if(this.LowOrder()) {
				firstTroopId = 35;
				troopsWavesArray.push(36);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 35;
				troopsWavesArray.push(39);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 35;
				troopsWavesArray.push(40);
			}
		}
		else if(mapId === MAP_ID_DISH_WASHING) {
			if(this.HighOrder()) {
				firstTroopId = 28;
				troopsWavesArray.push(48);
			}
			else if(this.MedOrder()) {
				firstTroopId = 28;
				troopsWavesArray.push(51);
			}
			else if(this.LowOrder()) {
				firstTroopId = 51;
				troopsWavesArray.push(28);
				troopsWavesArray.push(52);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 51;
				troopsWavesArray.push(28);
				troopsWavesArray.push(52);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 51;
				troopsWavesArray.push(29);
				troopsWavesArray.push(52);
			}
		}
		else if(mapId === MAP_ID_RECEPTION) {
			firstTroopId = 47;
			troopsWavesArray.push(60);
		}
	}
	//Level Two
	else if(this.currentlyPrisonLevelTwo() && this.prisonLevelTwoIsAnarchy()) {
		if(mapId === MAP_ID_STORE_BROKEN) {
			if(this.HighOrder()) {
				firstTroopId = 92;
			}
			else if(this.MedOrder()) {
				firstTroopId = 92;
				troopsWavesArray.push(128);
			}
			else if(this.LowOrder()) {
				firstTroopId = 93;
				troopsWavesArray.push(129);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 93;
				troopsWavesArray.push(130);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 93;
				troopsWavesArray.push(130);
			}
			//firstTroopId = 2;
		}
		else if(mapId === MAP_ID_READING_ROOM) {
			if(this.HighOrder()) {
				firstTroopId = 94;
				troopsWavesArray.push(93);
			}
			else if(this.MedOrder()) {
				firstTroopId = 95;
				troopsWavesArray.push(93);
			}
			else if(this.LowOrder()) {
				firstTroopId = 95;
				troopsWavesArray.push(96);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 95;
				troopsWavesArray.push(96);
				if(!Prison.easyMode()) troopsWavesArray.push(94);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 95;
				troopsWavesArray.push(96);
				if(!Prison.easyMode()) troopsWavesArray.push(94);
			}
		}
		else if(mapId === MAP_ID_CLASSROOM) {
			if(this.HighOrder()) {
				firstTroopId = 97;
				troopsWavesArray.push(36);
			}
			else if(this.MedOrder()) {
				firstTroopId = 97;
				troopsWavesArray.push(37);
			}
			else if(this.LowOrder()) {
				firstTroopId = 97;
				troopsWavesArray.push(41);
				if(!Prison.easyMode()) troopsWavesArray.push(99);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 98;
				troopsWavesArray.push(43);
				if(!Prison.easyMode()) troopsWavesArray.push(100);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 98;
				troopsWavesArray.push(43);
				if(!Prison.easyMode()) troopsWavesArray.push(101);
			}
		}
		else if(mapId === MAP_ID_LVL2_HALLWAY_FLOODED) {
			if(this.HighOrder()) {
				firstTroopId = 102;
				troopsWavesArray.push(104);
			}
			else if(this.MedOrder()) {
				firstTroopId = 102;
				troopsWavesArray.push(104);
				if(!Prison.easyMode()) troopsWavesArray.push(102);
			}
			else if(this.LowOrder()) {
				firstTroopId = 102;
				troopsWavesArray.push(105);
				if(!Prison.easyMode()) troopsWavesArray.push(104);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 103;
				troopsWavesArray.push(106);
				if(!Prison.easyMode()) troopsWavesArray.push(104);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 103;
				troopsWavesArray.push(106);
				if(!Prison.easyMode()) troopsWavesArray.push(107);
			}
		}
		else if(mapId === MAP_ID_STAFF_LOUNGE) {
			if(this.HighOrder()) {
				firstTroopId = 108;
				troopsWavesArray.push(111);
			}
			else if(this.MedOrder()) {
				firstTroopId = 108;
				troopsWavesArray.push(111);
				if(!Prison.easyMode()) troopsWavesArray.push(114);
			}
			else if(this.LowOrder()) {
				firstTroopId = 109;
				troopsWavesArray.push(112);
				if(!Prison.easyMode()) troopsWavesArray.push(115);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 110;
				troopsWavesArray.push(113);
				if(!Prison.easyMode()) troopsWavesArray.push(116);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 110;
				troopsWavesArray.push(113);
				if(!Prison.easyMode()) troopsWavesArray.push(117);
			}
		}
		else if(mapId === MAP_ID_RESEARCH) {
			if(this.HighOrder()) {
				firstTroopId = 55;
				troopsWavesArray.push(124);
			}
			else if(this.MedOrder()) {
				firstTroopId = 55;
				troopsWavesArray.push(124);
				troopsWavesArray.push(39);
			}
			else if(this.LowOrder()) {
				firstTroopId = 55;
				troopsWavesArray.push(125);
				troopsWavesArray.push(43);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 56;
				troopsWavesArray.push(126);
				troopsWavesArray.push(43);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 56;
				troopsWavesArray.push(126);
				troopsWavesArray.push(127);
			}
		}
		else if(mapId === MAP_ID_MEETING_ROOM) {
			if(this.HighOrder()) {
				firstTroopId = 118;
				troopsWavesArray.push(120);
				troopsWavesArray.push(102);
			}
			else if(this.MedOrder()) {
				firstTroopId = 118;
				troopsWavesArray.push(120);
				troopsWavesArray.push(102);
			}
			else if(this.LowOrder()) {
				firstTroopId = 119;
				troopsWavesArray.push(120);
				troopsWavesArray.push(122);
				if(!Prison.easyMode()) troopsWavesArray.push(103);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 119;
				troopsWavesArray.push(121);
				troopsWavesArray.push(123);
				if(!Prison.easyMode()) troopsWavesArray.push(103);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 119;
				troopsWavesArray.push(121);
				troopsWavesArray.push(123);
				if(!Prison.easyMode()) troopsWavesArray.push(107);
			}
		}
		
	}//Level 2 end
	
	//Level 3
	else if(this.currentlyPrisonLevelThree() && this.prisonLevelThreeIsAnarchy()) {
		if(mapId === MAP_ID_COMMON_AREA_SOUTH_EAST) {
			if(this.HighOrder()) {
				firstTroopId = 143;
			}
			else if(this.MedOrder()) {
				firstTroopId = 143;
				troopsWavesArray.push(146);
			}
			else if(this.LowOrder()) {
				firstTroopId = 144;
				troopsWavesArray.push(146);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 144;
				troopsWavesArray.push(147);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 145;
				troopsWavesArray.push(147);
			}
		}
		else if(mapId === MAP_ID_CELL_BLOCK_SOUTH) {
			if(Karryn.hasEdict(EDICT_ANTI_GOBLIN_SQUAD)) {
				if(this.HighOrder()) {
					firstTroopId = 162;
				}
				else if(this.MedOrder()) {
					firstTroopId = 163;
				}
				else if(this.LowOrder()) {
					firstTroopId = 163;
				}
				else if(this.VeryLowOrder()) {
					firstTroopId = 164;
				}
				else if(this.NearNoOrder()) {
					firstTroopId = 165;
				}
			}
			else {
				if(this.HighOrder()) {
					firstTroopId = 158;
				}
				else if(this.MedOrder()) {
					firstTroopId = 159;
				}
				else if(this.LowOrder()) {
					firstTroopId = 159;
				}
				else if(this.VeryLowOrder()) {
					firstTroopId = 160;
				}
				else if(this.NearNoOrder()) {
					firstTroopId = 161;
				}
			}
			if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) {
				if(this.HighOrder()) {
					troopsWavesArray.push(166);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(167);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(168);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(169);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(169);
				}
			}
			else {
				if(this.HighOrder()) {
					troopsWavesArray.push(170);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(171);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(172);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(173);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(173);
				}
			}
			if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF) || (Karryn.hasEdict(EDICT_NO_THUG_LABOR) && Karryn.hasEdict(EDICT_REPAIR_BAR))) {
				
			}
			else {
				if(this.HighOrder()) {
					troopsWavesArray.push(181);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(182);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(183);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(184);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(184);
				}
			}
			if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {
				if(this.HighOrder()) {
					troopsWavesArray.push(177);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(178);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(179);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(180);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(180);
				}
			}
			else {
				if(this.HighOrder()) {
					troopsWavesArray.push(174);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(175);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(175);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(176);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(176);
				}
			}
		}
		else if(mapId === MAP_ID_SHOWER_BLOCK_SOUTH) {
			if(this.HighOrder()) {
				firstTroopId = 148;
			}
			else if(this.MedOrder()) {
				firstTroopId = 148;
				troopsWavesArray.push(150);
			}
			else if(this.LowOrder()) {
				firstTroopId = 149;
				troopsWavesArray.push(150);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 149;
				troopsWavesArray.push(151);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 149;
				troopsWavesArray.push(152);
			}
		}
		else if(mapId === MAP_ID_SHOWER_BLOCK_NORTH) {
			if(this.HighOrder()) {
				firstTroopId = 153;
			}
			else if(this.MedOrder()) {
				firstTroopId = 153;
				troopsWavesArray.push(148);
			}
			else if(this.LowOrder()) {
				firstTroopId = 154;
				troopsWavesArray.push(156);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 155;
				troopsWavesArray.push(156);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 155;
				troopsWavesArray.push(157);
			}
		}
		else if(mapId === MAP_ID_GYM) {
			if(this.HighOrder()) {
				firstTroopId = 185;
			}
			else if(this.MedOrder()) {
				firstTroopId = 186;
			}
			else if(this.LowOrder()) {
				firstTroopId = 186;
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 187;
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 187;
			}
			let nerdGym = 0;
			
			if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) nerdGym += 2;
			if(Karryn.hasEdict(EDICT_READING_ROOM_ENTRANCE_FEE)) nerdGym += 1;
			if(Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) nerdGym += 2;
			if(Karryn.hasEdict(EDICT_REPAIR_READING_ROOM) && Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS) && Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS)) nerdGym -= 1;
			
			if(nerdGym >= 2) {
				if(this.HighOrder()) {
					troopsWavesArray.push(188);
					troopsWavesArray.push(196);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(190);
					troopsWavesArray.push(198);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(192);
					troopsWavesArray.push(198);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(194);
					troopsWavesArray.push(200);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(194);
					troopsWavesArray.push(200);
				}
			}
			else {
				if(this.HighOrder()) {
					troopsWavesArray.push(188);
					troopsWavesArray.push(195);
				}
				else if(this.MedOrder()) {
					troopsWavesArray.push(189);
					troopsWavesArray.push(197);
				}
				else if(this.LowOrder()) {
					troopsWavesArray.push(191);
					troopsWavesArray.push(197);
				}
				else if(this.VeryLowOrder()) {
					troopsWavesArray.push(193);
					troopsWavesArray.push(199);
				}
				else if(this.NearNoOrder()) {
					troopsWavesArray.push(193);
					troopsWavesArray.push(199);
				}
			}
		}
		else if(mapId === MAP_ID_CELL_BLOCK_NORTH_WEST) {
			if(this.HighOrder()) {
				firstTroopId = 201;
				troopsWavesArray.push(204);
			}
			else if(this.MedOrder()) {
				firstTroopId = 202;
				troopsWavesArray.push(205);
			}
			else if(this.LowOrder()) {
				firstTroopId = 202;
				troopsWavesArray.push(205);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 203;
				troopsWavesArray.push(205);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 203;
				troopsWavesArray.push(206);
			}
			
			if($gameSwitches.value(SWITCH_YESTERDAY_DEFEATED_LV3_ID)) {
				troopsWavesArray.push(31);
			}
		}
		else if(mapId === MAP_ID_CELL_BLOCK_NORTH_EAST) {
			if(this.HighOrder()) {
				firstTroopId = 207;
				troopsWavesArray.push(209);
			}
			else if(this.MedOrder()) {
				firstTroopId = 207;
				troopsWavesArray.push(210);
			}
			else if(this.LowOrder()) {
				firstTroopId = 208;
				troopsWavesArray.push(210);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 208;
				troopsWavesArray.push(210);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 208;
				troopsWavesArray.push(211);
			}
		}	
	}//Level 3 end
	
	//Level 4
	else if(this.currentlyPrisonLevelFour() && this.prisonLevelFourIsAnarchy()) {
		if(mapId === MAP_ID_LVL4_MUSHROOM_FARM) {
			let exitBlockerAlive = !$gameSelfSwitches.value([MAP_ID_LVL4_MUSHROOM_FARM, 5, "D"]);
			if(this.HighOrder()) {
				firstTroopId = 221;
				troopsWavesArray.push(224);
				if(exitBlockerAlive) troopsWavesArray.push(228);
			}
			else if(this.MedOrder()) {
				firstTroopId = 222;
				troopsWavesArray.push(225);
				if(exitBlockerAlive) troopsWavesArray.push(228);
			}
			else if(this.LowOrder()) {
				firstTroopId = 222;
				troopsWavesArray.push(226);
				if(exitBlockerAlive) troopsWavesArray.push(229);
				else troopsWavesArray.push(228);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 223;
				troopsWavesArray.push(226);
				if(exitBlockerAlive) troopsWavesArray.push(230);
				else troopsWavesArray.push(228);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 223;
				troopsWavesArray.push(227);
				if(exitBlockerAlive) troopsWavesArray.push(230);
				else troopsWavesArray.push(229);
			}
		}	
		else if(mapId === MAP_ID_LVL4_CHICKEN_PASTURE) {
			let exitBlockerAlive = !$gameSelfSwitches.value([MAP_ID_LVL4_CHICKEN_PASTURE, 13, "D"]);
			if(this.HighOrder()) {
				firstTroopId = 231;
				troopsWavesArray.push(234);
				if(exitBlockerAlive) troopsWavesArray.push(237);
			}
			else if(this.MedOrder()) {
				firstTroopId = 231;
				troopsWavesArray.push(235);
				if(exitBlockerAlive) troopsWavesArray.push(237);
			}
			else if(this.LowOrder()) {
				firstTroopId = 232;
				troopsWavesArray.push(235);
				if(exitBlockerAlive) troopsWavesArray.push(238);
				else troopsWavesArray.push(237);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 232;
				troopsWavesArray.push(236);
				if(exitBlockerAlive) troopsWavesArray.push(239);
				else troopsWavesArray.push(237);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 233;
				troopsWavesArray.push(236);
				if(exitBlockerAlive) troopsWavesArray.push(239);
				else troopsWavesArray.push(238);
			}
		}
		else if(mapId === MAP_ID_LVL4_UNDERGROUND_POOL) {
			let exitBlockerAlive = !$gameSelfSwitches.value([MAP_ID_LVL4_UNDERGROUND_POOL, 11, "D"]);
			if(this.HighOrder()) {
				firstTroopId = 240;
				troopsWavesArray.push(243);
				if(exitBlockerAlive) troopsWavesArray.push(247);
			}
			else if(this.MedOrder()) {
				firstTroopId = 241;
				troopsWavesArray.push(244);
				if(exitBlockerAlive) troopsWavesArray.push(247);
			}
			else if(this.LowOrder()) {
				firstTroopId = 241;
				troopsWavesArray.push(245);
				if(exitBlockerAlive) troopsWavesArray.push(248);
				else troopsWavesArray.push(247);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 242;
				troopsWavesArray.push(245);
				if(exitBlockerAlive) troopsWavesArray.push(249);
				else troopsWavesArray.push(247);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 242;
				troopsWavesArray.push(246);
				if(exitBlockerAlive) troopsWavesArray.push(249);
				else troopsWavesArray.push(248);
			}
		}
		else if(mapId === MAP_ID_LVL4_BASKETBALL_COURT) {
			if(this.HighOrder()) {
				firstTroopId = 250;
				troopsWavesArray.push(253);
			}
			else if(this.MedOrder()) {
				firstTroopId = 251;
				troopsWavesArray.push(253);
			}
			else if(this.LowOrder()) {
				firstTroopId = 251;
				troopsWavesArray.push(254);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 252;
				troopsWavesArray.push(254);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 252;
				troopsWavesArray.push(255);
			}
			
			if($gameSwitches.value(SWITCH_YESTERDAY_DEFEATED_LV4_ID)) {
				troopsWavesArray.push(256);
			}
		}
		else if(mapId === MAP_ID_LVL4_YETI_CAVERN) {
			let exitBlockerAlive = !$gameSelfSwitches.value([MAP_ID_LVL4_YETI_CAVERN, 7, "D"]);
			if(this.HighOrder()) {
				firstTroopId = 257;
				if(exitBlockerAlive) troopsWavesArray.push(260);
			}
			else if(this.MedOrder()) {
				firstTroopId = 258;
				if(exitBlockerAlive) troopsWavesArray.push(261);
			}
			else if(this.LowOrder()) {
				firstTroopId = 258;
				if(exitBlockerAlive) troopsWavesArray.push(261);
				else troopsWavesArray.push(260);
			}
			else if(this.VeryLowOrder()) {
				firstTroopId = 259;
				if(exitBlockerAlive) troopsWavesArray.push(262);
				else troopsWavesArray.push(260);
			}
			else if(this.NearNoOrder()) {
				firstTroopId = 259;
				if(exitBlockerAlive) troopsWavesArray.push(262);
				else troopsWavesArray.push(261);
			}
		}
		else if(mapId === MAP_ID_LVL4_AMBUSH) { 
			firstTroopId = 263;
			let exitBlockerAlive = !$gameSelfSwitches.value([MAP_ID_LVL4_AMBUSH, 10, "D"]);

			if(this.HighOrder()) {
				if(exitBlockerAlive) troopsWavesArray.push(264);
			}
			else if(this.MedOrder()) {
				troopsWavesArray.push(266);
				if(exitBlockerAlive) troopsWavesArray.push(264);
			}
			else if(this.LowOrder()) {
				troopsWavesArray.push(266);
				if(exitBlockerAlive) troopsWavesArray.push(265);
			}
			else if(this.VeryLowOrder()) {
				troopsWavesArray.push(267);
				if(exitBlockerAlive) troopsWavesArray.push(265);
			}
			else if(this.NearNoOrder()) {
				troopsWavesArray.push(267);
				if(exitBlockerAlive) troopsWavesArray.push(265);
			}
		}
		
		
	}//Level 4 end
	
	else if(this.currentlyOutsidePrison()) {
		//testing map
		if(mapId === 1)
			firstTroopId = 11;
	}
		
	
	$gameVariables.setValue(VARIABLE_TROOPID_ID, firstTroopId);
	
	if(troopsWavesArray.length > 0) {
		$gameSystem.setConsBattlesRem(troopsWavesArray);
	}
}; // Normal battles end

///////////
// Invasion Troop Ids

Game_Party.prototype.setInvasionTroopIds = function() {
	let mapId = $gameMap._mapId;
	let firstTroopId = 21;
	let troopsWavesArray = [];
	
	let noiseLevel = $gameActors.actor(ACTOR_KARRYN_ID).getInvasionNoiseLevel();
	if(this.LowOrder()) noiseLevel += 1;
	else if(this.VeryLowOrder()) noiseLevel += 2;
	else if(this.NearNoOrder()) noiseLevel += 3;
	
	if(mapId === MAP_ID_KARRYN_OFFICE) {
		firstTroopId = TROOP_GUARD_ID;
	}
	else if(mapId === MAP_ID_LVL1_GUARD_STATION) {
		if(noiseLevel <= 1) {
			firstTroopId = 35;
		}
		else if(noiseLevel <= 2) {
			firstTroopId = 38;
		}
		else if(noiseLevel <= 4) {
			firstTroopId = 38;
			troopsWavesArray.push(49);
		}
		else if(noiseLevel <= 6) {
			firstTroopId = 41;
			troopsWavesArray.push(49);
		}
		else if(noiseLevel <= 8) {
			firstTroopId = 43;
			troopsWavesArray.push(58);
		}
		else {
			firstTroopId = 43;
			troopsWavesArray.push(58);
		}
	}
	else if(mapId === MAP_ID_LVL2_GUARD_STATION) {
		if(noiseLevel <= 1) {
			firstTroopId = 94;
			troopsWavesArray.push(104);
		}
		else if(noiseLevel <= 2) {
			firstTroopId = 114;
			troopsWavesArray.push(104);
		}
		else if(noiseLevel <= 4) {
			firstTroopId = 115;
			troopsWavesArray.push(105);
			troopsWavesArray.push(120);
		}
		else if(noiseLevel <= 6) {
			firstTroopId = 116;
			troopsWavesArray.push(105);
			troopsWavesArray.push(121);
		}
		else {
			firstTroopId = 116;
			troopsWavesArray.push(106);
			troopsWavesArray.push(121);
		}
		
	}
	else if(mapId === MAP_ID_LVL3_GUARD_STATION) {
		if(noiseLevel <= 1) {
			firstTroopId = 188;
			troopsWavesArray.push(185);
		}
		else if(noiseLevel <= 2) {
			firstTroopId = 189;
			troopsWavesArray.push(185);
		}
		else if(noiseLevel <= 4) {
			firstTroopId = 189;
			troopsWavesArray.push(186);
			troopsWavesArray.push(201);
		}
		else if(noiseLevel <= 6) {
			firstTroopId = 190;
			troopsWavesArray.push(186);
			troopsWavesArray.push(202);
		}
		else {
			firstTroopId = 190;
			troopsWavesArray.push(187);
			troopsWavesArray.push(203);
		}
		
	}
	else if(mapId === MAP_ID_LVL4_GUARD_STATION) {
		if(noiseLevel <= 1) {
			firstTroopId = 221;
			troopsWavesArray.push(257);
		}
		else if(noiseLevel <= 2) {
			firstTroopId = 222;
			troopsWavesArray.push(258);
		}
		else if(noiseLevel <= 4) {
			firstTroopId = 222;
			troopsWavesArray.push(258);
			troopsWavesArray.push(247);
		}
		else if(noiseLevel <= 6) {
			firstTroopId = 223;
			troopsWavesArray.push(258);
			troopsWavesArray.push(248);
		}
		else {
			firstTroopId = 223;
			troopsWavesArray.push(259);
			troopsWavesArray.push(249);
		}
		
	}
	
	$gameVariables.setValue(VARIABLE_TROOPID_ID, firstTroopId);
	
	if(troopsWavesArray.length > 0) {
		$gameSystem.setConsBattlesRem(troopsWavesArray);
	}
};

////////
// Night Battle Troop Ids
Game_Party.prototype.setNightBattleTroopIds = function() {
	let troopsWavesArray = [];
	let mapId = $gameMap._mapId;
	let hasNightBattleThreePassive = Karryn.hasPassive(PASSIVE_NIGHT_BATTLE_COUNT_THREE_ID);
	let hasNightBattleTwoPassive = Karryn.hasPassive(PASSIVE_NIGHT_BATTLE_COUNT_TWO_ID);
	let hasInmateCurfewEdict = Karryn.hasEdict(EDICT_RESEARCH_ISSUE_CURFEW_PASS);
	
	if(mapId === MAP_ID_EB_HALLWAY) {
		if(hasNightBattleThreePassive && Karryn.hasEdict(EDICT_OFFICE_INMATE_GUARDS) && (Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES) || Prison.guardAggression >= 20))
			troopsWavesArray.push(TROOP_NIGHT_ID);
		if(hasNightBattleTwoPassive || (Karryn.hasEdict(EDICT_OFFICE_VOLUNTEER_GUARDS) && Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES)) || (Karryn.hasEdict(EDICT_OFFICE_INMATE_GUARDS) && Prison.guardAggression >= 20))
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_OUTSIDE) {
		if(Prison.guardAggression >= 10 && ((hasNightBattleThreePassive && Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES)) || (hasNightBattleTwoPassive && Karryn.hasEdict(EDICT_NO_HIRING_STANDARDS))))
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_YARD) {
		if((hasNightBattleThreePassive && Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES)) || (hasNightBattleTwoPassive && Karryn.hasEdict(EDICT_NO_HIRING_STANDARDS)))
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_LVL1_HALLWAY) {
		if(hasNightBattleThreePassive && hasInmateCurfewEdict)
			troopsWavesArray.push(TROOP_NIGHT_ID);
		if(hasNightBattleTwoPassive && Math.random() < 0.5)
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_VISITOR_ROOM) {
		if(hasNightBattleThreePassive && Math.random() < 0.5)
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_LVL2_HALLWAY) {
		if(hasNightBattleThreePassive && hasInmateCurfewEdict)
			troopsWavesArray.push(TROOP_NIGHT_ID);
		if(hasNightBattleTwoPassive && Math.random() < 0.5)
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_COMMON_AREA_SOUTH_EAST) {
		if(hasNightBattleThreePassive && hasInmateCurfewEdict)
			troopsWavesArray.push(TROOP_NIGHT_ID);
		if(hasNightBattleTwoPassive && Math.random() < 0.5)
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	else if(mapId === MAP_ID_LVL4_MUSHROOM_FARM || mapId === MAP_ID_LVL4_CHICKEN_PASTURE || mapId === MAP_ID_LVL4_UNDERGROUND_POOL || mapId === MAP_ID_LVL4_BASKETBALL_COURT || mapId === MAP_ID_LVL4_YETI_CAVERN) {
		if(hasNightBattleThreePassive)
			troopsWavesArray.push(TROOP_NIGHT_ID);
		if(hasNightBattleTwoPassive && (hasInmateCurfewEdict || Math.random() < 0.5))
			troopsWavesArray.push(TROOP_NIGHT_ID);
	}
	
	
	if(troopsWavesArray.length > 0) {
		$gameSystem.setConsBattlesRem(troopsWavesArray);
	}
};


////////
// Defeated Troop Ids
///////////

//old, unused
Game_Party.prototype.setDefeatedLevelOneTroopIds = function() {
	let blowbangLvl = 0;
	if(Karryn.hasPassive(PASSIVE_BLOWBANG_COUNT_THREE_ID)) blowbangLvl = 3;
	else if(Karryn.hasPassive(PASSIVE_BLOWBANG_COUNT_TWO_ID)) blowbangLvl = 2;
	else if(Karryn.hasPassive(PASSIVE_BLOWBANG_COUNT_ONE_ID)) blowbangLvl = 1;
	
	let firstTroopId = 70;
	let troopsWavesArray = [];
	let numOfSprites = 3;
	
	if(blowbangLvl === 0) {
		if(this.HighOrder()) {
			firstTroopId = 70;
		}
		else if(this.MedOrder()) {
			firstTroopId = 70;
		}
		else if(this.LowOrder()) {
			firstTroopId = 71;
			numOfSprites = 4;
		}
		else if(this.VeryLowOrder()) {
			firstTroopId = 71;
			numOfSprites = 4;
		}
		else if(this.NearNoOrder()) {
			firstTroopId = 72;
			numOfSprites = 5;
		}
	}
	else if(blowbangLvl === 1) {
		if(this.HighOrder()) {
			firstTroopId = 70;
		}
		else if(this.MedOrder()) {
			firstTroopId = 71;
			numOfSprites = 4;
		}
		else if(this.LowOrder()) {
			firstTroopId = 71;
			troopsWavesArray.push(73);
			numOfSprites = 4;
		}
		else if(this.VeryLowOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(73);
			numOfSprites = 5;
		}
		else if(this.NearNoOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(74);
			numOfSprites = 5;
		}
	}
	else if(blowbangLvl === 2) {
		if(this.HighOrder()) {
			firstTroopId = 71;
			numOfSprites = 4;
		}
		else if(this.MedOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(73);
			numOfSprites = 5;
		}
		else if(this.LowOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(75);
			numOfSprites = 6;
		}
		else if(this.VeryLowOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(79);
			troopsWavesArray.push(73);
			numOfSprites = 6;
		}
		else if(this.NearNoOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(80);
			troopsWavesArray.push(73);
			numOfSprites = 7;
		}
	}
	else if(blowbangLvl === 3) {
		if(this.HighOrder()) {
			firstTroopId = 71;
			troopsWavesArray.push(73);
			numOfSprites = 5;
		}
		else if(this.MedOrder()) {
			firstTroopId = 71;
			troopsWavesArray.push(74);
			troopsWavesArray.push(76);
			numOfSprites = 6;
		}
		else if(this.LowOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(74);
			troopsWavesArray.push(77);
			numOfSprites = 4;
			numOfSprites = 7;
		}
		else if(this.VeryLowOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(74);
			troopsWavesArray.push(78);
			numOfSprites = 8;
		}
		else if(this.NearNoOrder()) {
			firstTroopId = 72;
			troopsWavesArray.push(75);
			troopsWavesArray.push(78);
			numOfSprites = 8;
		}
	}
	
	$gameVariables.setValue(VARIABLE_TROOPID_ID, firstTroopId);
	
	if(troopsWavesArray.length > 0) {
		$gameSystem.setConsBattlesRem(troopsWavesArray);
	}
};

/////////
// Boss Troop Ids
//////////////

Game_Party.prototype.setBossTroopIds = function(level) {
	let mapId = $gameMap._mapId;
	let firstTroopId = 21;
	let troopsWavesArray = [];
	
	//Level One
	if(level === 1) {
		let key = [13, 30, "D"];
		let defeatedRoomEnemies = $gameSelfSwitches.value(key);
		firstTroopId = 66;

		
		if(defeatedRoomEnemies) {
			troopsWavesArray.push(24);
			troopsWavesArray.push(67);
			troopsWavesArray.push(28);
		}
		else {
			troopsWavesArray.push(60);
			troopsWavesArray.push(67);
			troopsWavesArray.push(55);
			
		}
		troopsWavesArray.push(68);
	}
	else if(level === 2) {
		firstTroopId = 91;
	}
	else if(level === 3) {
		firstTroopId = 141;
		troopsWavesArray.push(142);
	}
	else if(level === 4) {
		firstTroopId = 220;
	}

	$gameVariables.setValue(VARIABLE_TROOPID_ID, firstTroopId);
	
	if(troopsWavesArray.length > 0) {
		$gameSystem.setConsBattlesRem(troopsWavesArray);
	}
};

//////////
// Guard Enemy Ids
///////////

Game_Party.prototype.getGuardEnemyIds = function() {
	let enemyIdArray = [];
	let guardAggr = Prison.guardAggression;
	
	
	if(guardAggr < 2) {
		enemyIdArray = [ENEMY_ID_GUARD_LV1];
	}
	else if(guardAggr < 5) {
		enemyIdArray = [ENEMY_ID_GUARD_LV1, ENEMY_ID_GUARD_LV2];
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
			enemyIdArray.push(ENEMY_ID_GUARD_LV4);
	}
	else if(guardAggr < 8) {
		enemyIdArray = [ENEMY_ID_GUARD_LV1, ENEMY_ID_GUARD_LV2, ENEMY_ID_GUARD_LV2];
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
			enemyIdArray.push(ENEMY_ID_GUARD_LV4);
	}
	else if(guardAggr < 12) {
		enemyIdArray = [ENEMY_ID_GUARD_LV1, ENEMY_ID_GUARD_LV2, ENEMY_ID_GUARD_LV3, ENEMY_ID_GUARD_LV2, ENEMY_ID_GUARD_LV3];
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
			enemyIdArray.push(ENEMY_ID_GUARD_LV5);
	}
	else if(guardAggr < 16) {
		enemyIdArray = [ENEMY_ID_GUARD_LV2, ENEMY_ID_GUARD_LV4, ENEMY_ID_GUARD_LV3];
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
			enemyIdArray.push(ENEMY_ID_GUARD_LV5);
	}
	else if(guardAggr < 20) {
		enemyIdArray = [ENEMY_ID_GUARD_LV2, ENEMY_ID_GUARD_LV3, ENEMY_ID_GUARD_LV4, ENEMY_ID_GUARD_LV5];
		if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
			enemyIdArray.push(ENEMY_ID_GUARD_LV6);
	}
	else if(guardAggr < 25) {
		enemyIdArray = [ENEMY_ID_GUARD_LV3, ENEMY_ID_GUARD_LV4, ENEMY_ID_GUARD_LV5, ENEMY_ID_GUARD_LV5];
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING))
			enemyIdArray.push(ENEMY_ID_GUARD_LV6);
	}
	else {
		enemyIdArray = [ENEMY_ID_GUARD_LV3, ENEMY_ID_GUARD_LV4, ENEMY_ID_GUARD_LV5, ENEMY_ID_GUARD_LV5, ENEMY_ID_GUARD_LV5];
		if(Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING)) {
			enemyIdArray.push(ENEMY_ID_GUARD_LV6);
			enemyIdArray.push(ENEMY_ID_GUARD_LV6);
		}
		if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS))
			enemyIdArray.push(ENEMY_ID_GUARD_LV6);
	}

	
	return enemyIdArray;
};

//////////
// Riot Enemy Ids
///////////

Game_Party.prototype.getRiotEnemyIds = function() {
	let enemyIdArray = [];
	let mapId = $gameMap._mapId;
	
	//Level One
	if(mapId === MAP_ID_WORKSHOP) {
		enemyIdArray = [51,53,52,141];
		if(!Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
			enemyIdArray.push(91);
			enemyIdArray.push(92);
			enemyIdArray.push(92);
			enemyIdArray.push(93);
			enemyIdArray.push(94);
		}
		if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) {
			enemyIdArray.push(182);
		}
	}
	else if(mapId === MAP_ID_DISH_WASHING) {
		enemyIdArray = [141,53,54,55];
		if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
			enemyIdArray.push(142);
		}
		if(!Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
			enemyIdArray.push(91);
			enemyIdArray.push(92);
			enemyIdArray.push(93);
		}
	}
	else if(mapId === MAP_ID_RECEPTION) {
		enemyIdArray = [95,95,141,82,83,55];
		if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
			enemyIdArray.push(142);
		}
		
	}
	else if(mapId === MAP_ID_LAUNDRY) {
		enemyIdArray = [81,82,83,81,82,51,54,95];
	}
	
	//Level Two
	else if(mapId === MAP_ID_READING_ROOM) {
		enemyIdArray = [51,54,82,83];
		if(Karryn.hasEdict(EDICT_READING_ROOM_ENTRANCE_FEE) || Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {
			enemyIdArray.push(121);
			enemyIdArray.push(122);
			enemyIdArray.push(123);
		}
	}
	else if(mapId === MAP_ID_CLASSROOM) {
		enemyIdArray = [51,54];
		
		if(Karryn.hasEdict(EDICT_NO_CLASSES)) {
			enemyIdArray.push(211);
			enemyIdArray.push(212);
			enemyIdArray.push(123);
		}
		else if(Karryn.hasEdict(EDICT_REFORM_CLASSES)) {
			enemyIdArray.push(93);
			enemyIdArray.push(143);
			enemyIdArray.push(183);
		}
		else if(Karryn.hasEdict(EDICT_WORKSHOP_CLASSES)) {
			enemyIdArray.push(92);
			enemyIdArray.push(94);
			enemyIdArray.push(95);
		}
		else if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES)) {
			enemyIdArray.push(81);
			enemyIdArray.push(91);
			enemyIdArray.push(121);
			enemyIdArray.push(141);
			enemyIdArray.push(181);
			enemyIdArray.push(211);
		}
		
		
	}
	else if(mapId === MAP_ID_STAFF_LOUNGE) {
		enemyIdArray = [53,51,211,211];
		if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
			enemyIdArray.push(142);
			enemyIdArray.push(143);
		}
	}
	else if(mapId === MAP_ID_RESEARCH) {
		enemyIdArray = [51,54,81,82,83,181,182];
		if(Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN)) {
			enemyIdArray.push(193);
			enemyIdArray.push(194);
			enemyIdArray.push(193);
			enemyIdArray.push(194);
			enemyIdArray.push(193);
			enemyIdArray.push(194);
		}
	}
	else if(mapId === MAP_ID_MEETING_ROOM) {
		enemyIdArray = [51,54,92,94,83,122];
		if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
			enemyIdArray.push(142);
			enemyIdArray.push(143);
		}
		if(Karryn.hasEdict(EDICT_SCIENCE_VERSUS_LIZARDMEN)) {
			enemyIdArray.push(193);
			enemyIdArray.push(194);
		}
	}
	
	//Level Three
	else if(mapId === MAP_ID_CELL_BLOCK_SOUTH) { 
		enemyIdArray = [51,54,191,192];
		if(!Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
			enemyIdArray.push(143);
			if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR))
				enemyIdArray.push(145);
		}
		if(Karryn.hasEdict(EDICT_ANTI_GOBLIN_SQUAD)) {
			enemyIdArray.push(85);
			enemyIdArray.push(86);
		}
		if(!Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
			enemyIdArray.push(97);
			if(!Karryn.hasEdict(EDICT_NO_THUG_LABOR))
				enemyIdArray.push(98);
		}
		if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) {
			enemyIdArray.push(183);
		}
	}
	else if(mapId === MAP_ID_GYM) {
		enemyIdArray = [55,91,96,181,193];
		if(Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) {
			enemyIdArray.push(127);
		}
		if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) {
			enemyIdArray.push(183);
		}
	}
	else if(mapId === MAP_ID_CELL_BLOCK_NORTH_WEST) {
		enemyIdArray = [54,85,96,183,194,212,213];
		if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) {
			enemyIdArray.push(183);
		}
	}
	else if(mapId === MAP_ID_CELL_BLOCK_NORTH_EAST) {
		enemyIdArray = [54,85,96,183,194,212,213];
		if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) {
			enemyIdArray.push(183);
		}
	}
	
	if(Karryn.hasEdict(EDICT_RIOT_SUPPRESSING_TRAINING_FOR_GUARDS)) {
		enemyIdArray = enemyIdArray.concat($gameParty.getGuardEnemyIds());
	}

	return enemyIdArray;
};

Game_Party.prototype.getDefeatedLevelOneEnemyIds = function(blowbangFactor, starters) {
	let enemyIdArray = [ 91, 92, 93, 53 ];
	
	if($gameSwitches.value(SWITCH_TODAY_GOBLIN_BAR_STORAGE_ID)) {
		enemyIdArray = [ 81, 81, 82, 82, 83 ];
		
		if(blowbangFactor >= 5) {
			enemyIdArray.push(82);
			enemyIdArray.push(83);
		}
		
		if(starters) return enemyIdArray;
	}
	else {
		if(blowbangFactor >= 5) {
			enemyIdArray.push(51);
			enemyIdArray.push(94);
		}
	}
	
	
	if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_ONE_ID) && blowbangFactor >= 6) {
		enemyIdArray.push(141);
	}
	
	if(blowbangFactor >= 7) {
		enemyIdArray.push(81);
		enemyIdArray.push(82);
	}
	
	if(blowbangFactor >= 9) {
		enemyIdArray.push(55);
		enemyIdArray.push(95);
	}
	
	if(Prison.guardAggression >= 10 && $gameParty._barReputation >= 2 && blowbangFactor >= 9) {
		enemyIdArray.push(21);
		enemyIdArray.push(22);
		if(Prison.guardAggression >= 20 && $gameParty._barReputation >= 8) {
			enemyIdArray.push(24);
			if(Prison.guardAggression >= 30) {
				enemyIdArray.push(25);
			}
		}
	}
	
	if(Karryn.hasEdict(EDICT_THE_LIZARDMAN_PROBLEM) && Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II) && blowbangFactor >= 4) {
		enemyIdArray.push(194);
		if(Karryn.hasEdict(EDICT_LIZARDMEN_FREE_DRINKS)) {
			enemyIdArray.push(191);
			enemyIdArray.push(192);
		}
	}
	
	if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS) && blowbangFactor >= 8) {
		enemyIdArray.push(182);
	}
	
	if(blowbangFactor >= 10 && Karryn.showLevelFourSubjugatedEdicts() && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID)) {
		enemyIdArray.push(222);
	}
	
	return enemyIdArray;
};

Game_Party.prototype.getDefeatedLevelTwoEnemyIds = function(bathroomFactor) {
	let enemyIdArray = [ 53, 92, 142 ];
	
	if(bathroomFactor >= 4 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) {
		enemyIdArray.push(131);
	}
	
	if(bathroomFactor >= 5) {
		enemyIdArray.push(94);
		enemyIdArray.push(141);
		enemyIdArray.push(82);
	}
	
	if(bathroomFactor >= 7) {
		enemyIdArray.push(122);
		enemyIdArray.push(123);
	}
	
	if(bathroomFactor >= 7 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID) && Karryn.hasEdict(EDICT_THE_LIZARDMAN_PROBLEM)) {
		enemyIdArray.push(193);
	}
	
	if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
		enemyIdArray.push(122);
		enemyIdArray.push(123);
	}
	
	if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
		enemyIdArray.push(141);
		enemyIdArray.push(143);
	}
	
	if(bathroomFactor >= 8 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) {
		enemyIdArray.push(132);
	}
	
	if(Prison.guardAggression >= 20 && bathroomFactor >= 8) {
		enemyIdArray.push(25);
	}
	
	if(bathroomFactor >= 9) {
		enemyIdArray.push(54);
		enemyIdArray.push(143);
		enemyIdArray.push(95);
	}
	
	if(bathroomFactor >= 11) {
		enemyIdArray.push(83);
	}
	
	if(bathroomFactor >= 11 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_ONE_ID) && !Prison.prisonLevelFourIsUnknown) {
		enemyIdArray.push(194);
	}
	
	if(Karryn.hasEdict(EDICT_THE_ORC_PROBLEM) && Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS) && bathroomFactor >= 7) {
		enemyIdArray.push(182);
	}
	
	if(bathroomFactor >= 13 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID) && Karryn.showLevelFourSubjugatedEdicts()) {
		enemyIdArray.push(222);
		enemyIdArray.push(223);
	}
	
	return enemyIdArray;
};

Game_Party.prototype.getDefeatedLevelThreeEnemyIds = function(soloCellFactor) {
	let enemyIdArray = [ 211, 191, 53, 181 ];
	
	if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
		enemyIdArray.push(93);
	}
	
	if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) {
		enemyIdArray.push(81);
	}
	
	if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
		enemyIdArray.push(143);
	}
	
	if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
		enemyIdArray.push(122);
		enemyIdArray.push(123);
	}
	
	if(soloCellFactor >= 5) {
		enemyIdArray.push(82);
		if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
			enemyIdArray.push(83);
		}
		enemyIdArray.push(94);
	}
	
	if(soloCellFactor >= 6 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_ONE_ID)) {
		enemyIdArray.push(131);
	}
	
	if(soloCellFactor >= 7) {
		enemyIdArray.push(142);
		enemyIdArray.push(182);
		if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {
			enemyIdArray.push(122);
			enemyIdArray.push(123);
		}
	}
	
	if(soloCellFactor >= 9) {
		enemyIdArray.push(212);
		enemyIdArray.push(192);
		if(Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
			enemyIdArray.push(91);
		}
	}
	
	if(soloCellFactor >= 11 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_SLIME_TWO_ID)) {
		enemyIdArray.push(132);
	}
	
	if(soloCellFactor >= 11 && Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_WEREWOLF_ONE_ID) && Karryn.showLevelFourSubjugatedEdicts()) {
		enemyIdArray.push(222);
		enemyIdArray.push(223);
	}
	
	if(soloCellFactor >= 12) {
		enemyIdArray.push(212);
		enemyIdArray.push(192);
		enemyIdArray.push(54);
	}
	
	
	return enemyIdArray;
};

Game_Party.prototype.getDefeatedLevelFourEnemyIds = function(pilloryFactor) {
	let enemyIdArray = [ 54, 81, 132, 212, 222 ];
	
	if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) {
		enemyIdArray.push(81);
	}
	else if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
		enemyIdArray.push(82);
		enemyIdArray.push(83);
	}
	
	if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
		enemyIdArray.push(92);
	}
	
	if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
		enemyIdArray.push(121);
	}
	else if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {
		enemyIdArray.push(125);
		enemyIdArray.push(126);
	}
	
	if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
		enemyIdArray.push(141);
	}
	else if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) {
		enemyIdArray.push(143);
		enemyIdArray.push(144);
	}
	
	if(Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN)) {
		enemyIdArray.push(192);
	}
	else {
		enemyIdArray.push(193);
		enemyIdArray.push(194);
	}
	
	if(Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS)) {
		enemyIdArray.push(181);
	}
	else if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS)) {
		enemyIdArray.push(182);
		enemyIdArray.push(183);
	}
	
	if(Prison.prisonLevelFourIsRioting() && Prison.guardAggression >= 30) {
		enemyIdArray.push(ENEMY_ID_GUARD_LV5);
		if(Prison.funding === 0) {
			enemyIdArray.push(ENEMY_ID_GUARD_LV4);
			enemyIdArray.push(ENEMY_ID_GUARD_LV5);
			enemyIdArray.push(ENEMY_ID_GUARD_LV5);
		}
	}
	
	return enemyIdArray;
};

///////////
////////////
// Respawn Anarchy
///////////
//////////

Game_Party.prototype.respawnAnarchyEnemies = function(forceRespawn) {
	let mapId = $gameMap._mapId;
	if(this.prisonLevelOneIsAnarchy() || forceRespawn) {
		$gameSelfSwitches.setValue([MAP_ID_VISITOR_ROOM_BROKEN, 2, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_VISITOR_CENTER_BROKEN, 30, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 8, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 9, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 14, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 15, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 18, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 19, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 21, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_BAR_BROKEN, 22, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 11, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 12, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_WORKSHOP, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LAUNDRY, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LAUNDRY, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_DISH_WASHING, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 30, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 31, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RECEPTION, 41, "D"], false);
	}
	if(this.prisonLevelTwoIsAnarchy() || forceRespawn) {
		$gameSelfSwitches.setValue([MAP_ID_STORE_BROKEN, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_STORE_BROKEN, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_STORE_BROKEN, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_READING_ROOM, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CLASSROOM, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY_FLOODED, 13, "D"], false); 
		$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY_FLOODED, 14, "D"], false); 
		$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY_FLOODED, 16, "D"], false); 
		$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY_FLOODED, 18, "D"], false); 
		$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_STAFF_LOUNGE, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_RESEARCH, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_MEETING_ROOM, 8, "D"], false);
	}
	if(this.prisonLevelThreeIsAnarchy() || forceRespawn) {
		$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 5, "D"], false);
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
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_SOUTH, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_SOUTH, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_SOUTH, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_SOUTH, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_NORTH, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_NORTH, 4, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_NORTH, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_SHOWER_BLOCK_NORTH, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 8, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 9, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 11, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 12, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 13, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 14, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 21, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 22, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_GYM, 23, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 30, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 31, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 32, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 33, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 34, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 35, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 36, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 27, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 28, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_WEST, 29, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 24, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 26, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 27, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 28, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 20, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 21, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 22, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_CELL_BLOCK_NORTH_EAST, 4, "D"], false);
	}
	if(this.prisonLevelFourIsAnarchy() || forceRespawn) {
		$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 7, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 8, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 9, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_MUSHROOM_FARM, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 12, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 15, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_CHICKEN_PASTURE, 17, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 9, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 12, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 13, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 14, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 15, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 16, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 17, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_UNDERGROUND_POOL, 18, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 3, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 9, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 11, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 12, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 13, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 14, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 15, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_BASKETBALL_COURT, 16, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 5, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 6, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 10, "D"], false);
		$gameSelfSwitches.setValue([MAP_ID_LVL4_YETI_CAVERN, 11, "D"], false);
		if(mapId !== MAP_ID_LVL4_GUARD_STATION) {
			$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 3, "D"], false);
			$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 4, "D"], false);
			$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 5, "D"], false);
			$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 6, "D"], false);
			$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 7, "D"], false);
			$gameSelfSwitches.setValue([MAP_ID_LVL4_AMBUSH, 8, "D"], false);
		}
	}

};


////////////
// Respawn Night Battle Enemies
/////////////

Game_Party.prototype.respawnNightBattleEnemies = function() {
	//Outside / EB
	$gameSelfSwitches.setValue([MAP_ID_OUTSIDE, 26, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_OUTSIDE, 27, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 7, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 8, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 27, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 28, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 29, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 30, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 31, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 32, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_YARD, 33, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 18, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 19, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 43, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 44, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 45, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 46, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 47, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 48, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_EB_HALLWAY, 49, "D"], false);
	//Level One
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 29, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 28, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 35, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 36, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 37, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 38, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL1_HALLWAY, 40, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_VISITOR_ROOM_BROKEN, 6, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_VISITOR_ROOM, 16, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_VISITOR_ROOM, 19, "D"], false);
	//Level Two
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 14, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 15, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 37, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 40, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 41, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 42, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 43, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 44, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 45, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_LVL2_HALLWAY, 46, "D"], false);
	//Level Three
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 3, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 5, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 11, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 13, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 15, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 17, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 23, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 24, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 25, "D"], false);
	$gameSelfSwitches.setValue([MAP_ID_COMMON_AREA_SOUTH_EAST, 37, "D"], false);
};

///////
// Bosses

// Aron
Game_Party.prototype.setupAronCallLizardmanLimit = function() {
	this._aronCallLimit = 8;
	if(Prison.hardMode()) this._aronCallLimit += 2;
	if($gameSelfSwitches.value([MAP_ID_CELL_BLOCK_NORTH_EAST, 24, "D"])) this._aronCallLimit -= 5;
	this._aronCall_failedNormal = false;
	this._aronCall_failedDesperate = false;
};

// Noinim
Game_Party.prototype.setupNoinimReinforcementVariables = function() {
	this._noinimReinforcement_first = false;
	this._noinimReinforcement_second = false;
	this._noinimReinforcement_third = false;
};
Game_Party.prototype.resetMinionThrowVariables = function() {
	this._minionThrow_ammoName = false;
	this._minionThrow_ammoLoaded = false;
};
