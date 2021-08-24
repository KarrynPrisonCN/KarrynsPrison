//=============================================================================
 /*:
 * @plugindesc Before YEP_BattleCore
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const MAX_GRAZE_RATE = 2;

////////////////
// Game Troop
////////////////

Game_Troop.prototype.setup = function(troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
	this._enemySpots = [ false, false, false, false, false, false ];
	this._lastEnemySlotToCum = -1;

	//console.log('setup gametroop ' + troopId);

	if(Karryn.isInMasturbationCouchPose()) {
		this.setup_masturbationBattle(troopId);
		return;
	}
	
	if($gameParty.isInReceptionistBattle) {
		this.setupReceptionistBattle(troopId);
		return;
	}
	if($gameParty.isInWaitressBattle) {
		this.setupWaitressBattle(troopId);
		return;
	}
	if($gameParty.isInGloryBattle) {
		this.setupGloryBattle(troopId);
		return;
	}
	if($gameParty.isInStripperBattle) {
		this.setupStripperBattle(troopId);
		return;
	}
	if(troopId === TROOP_GUARD_ID) {
		this.setupGuardBattle(troopId);
		return;
	}
	if(troopId === TROOP_TEST_ID) {
		this.setupTestBattle(troopId);
		return;
	}
	if(troopId === TROOP_DEFEATED_LV1_ID) {
		this.setupDefeatedLevelOneBattle(troopId);
		return;
	}
	if(troopId === TROOP_DEFEATED_LV2_ID) {
		this.setupDefeatedLevelTwoBattle(troopId);
		return;
	}
	if(troopId === TROOP_DEFEATED_LV3_ID) {
		this.setupDefeatedLevelThreeBattle(troopId);
		return;
	}
	if(troopId === TROOP_DEFEATED_LV4_ID) {
		this.setupDefeatedLevelFourBattle(troopId);
		return;
	}
	if(troopId === TROOP_DEFEATED_LV5_ID) {
		this.setupDefeatedLevelFiveBattle(troopId);
		return;
	}
	if(troopId === TROOP_DEFEATED_GUARD_ID) {
		this.setupDefeatedGuardBattle(troopId);
		return;
	}
	if(troopId === TROOP_NIGHT_ID) {
		this.setupNightBattle(troopId);
		return;
	}
	
	
	if($gameParty.isRiotBattle()) {
		this.setupRiotBattle(troopId);
		return;
	}

	let freeSizeMorphSpace = TROOP_NORMAL_BATTLE_MAX_SIZE;
	
	for(let i = 0; i < this.troop().members.length; ++i) {
		let enemyId = this.troop().members[i].enemyId;
		let rowHeight = $dataEnemies[enemyId].dataRowHeight;
		freeSizeMorphSpace -= rowHeight;
	}
	
    this.troop().members.forEach(function(member) {
        if ($dataEnemies[member.enemyId]) {
			let enemyId = member.enemyId;
			let originalEnemyId = enemyId;
			let wanted = false;
			let maxPrisonerMorphHeight = Math.max(1, freeSizeMorphSpace);
			if(!member.hidden) wanted = Prison.findAvailableWanted($dataEnemies[enemyId], maxPrisonerMorphHeight);
			if(wanted) {
				if(!wanted.enemyTypeIsBoss())
					enemyId = wanted._enemyId;
				freeSizeMorphSpace -= $dataEnemies[enemyId].dataRowHeight - $dataEnemies[originalEnemyId].dataRowHeight
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

            if (member.hidden) {
                enemy.hide();
            }
			else {
				$gameParty.increaseFatigueGainFromEnemy(enemy.getFatigueGainValue(), enemy.enemyExperienceLvl());
			}
			
            this._enemies.push(enemy);
        }
    }, this);
    this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();
};

////////////
// Game Action
///////////////////

Game_Action.prototype.apply = function(target) { 
	if(target.isActor()) target.resetSpecialRemSpriteBattlerPos();
	
    let result = target.result();
    this.subject().clearResult();
	this.subject().resetGotHitBySkillType();
    result.clear();
	this.subject().changeStanceBySkill(this.item());
    result.used = this.testApply(target);
	result.evaded = (Math.random() < this.itemEva(target));
	result.missed = (result.used && !result.evaded && Math.random() >= this.itemHit(target));
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    if(result.isHit()) {
        if (this.item().damage.type > 0) {
            result.critical = (Math.random() < this.itemCri(target));
			
			target.resetEvadeReductionStage();
			
			let value = this.makeDamageValue(target, result.critical);

			this.executeDamage(target, Math.round(value));
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
	else if(result.used && !result.evaded) {
		if (this.item().damage.type > 0) {
			result.graze = true;
			let graze = Math.min(Math.max(this.subject().mev, 0), MAX_GRAZE_RATE);
			let value = this.makeDamageValue(target, false) * graze;
			this.executeDamage(target, Math.round(value));
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
	}
	else if(result.evaded && this.subject().isActor() && target.isEnemy() && (this.isActorAttackSkill() || this.isActorKickSkill())) {
		target.increaseEvadeReductionStage();
		
	}
	
	if(this.isEnemyAttackSkill()) result.skillTypeEnemyAttack = true;
};

Game_Action.prototype.executeDamage = function(target, value) {
    let result = target.result();
    if(value === 0 && result.pleasureDamage === 0 && result.staminaDamage === 0) {
        result.critical = false;
    }
    if(this.isHpEffect()) {
        this.executeHpDamage(target, value);
		this.subject().addWantedPoints(value * WANTED_POINTS_STAMINA_DMG_MULTIPLER);
    }
    if(this.isMpEffect()) {
        this.executeMpDamage(target, value);
    }
};

/////////
// Game Actor
///////////////

Game_Actor.prototype.performDamage = function() {
    Game_Battler.prototype.performDamage.call(this);

	if(this.result().skillTypeEnemyAttack) {
		$gameScreen.startShake(REM_ENEMY_ATTACK_SCREEN_SHAKE_POWER, REM_ENEMY_ATTACK_SCREEN_SHAKE_SPEED, REM_ENEMY_ATTACK_SCREEN_SHAKE_DURATION);
		if(this.isUsingHalberd()) {
			SoundManager.playActorDamage();
		}
	}
};

Game_BattlerBase.prototype.paySkillCost = function(skill) {
	let skillId = skill.id;
	if(skillId === SKILL_REVITALIZE_ID || skillId === SKILL_SECOND_WIND_ID)
		this._mp -= this.skillMpCost(skill) - 1;
	else
		this._mp -= this.skillMpCost(skill);
	
    this._tp -= this.skillTpCost(skill);
};

////////
// Window BattleLog
///////////////////////

Window_BattleLog.prototype.displayActionResults = function(subject, target) {
    if (target.result().used) {
        this.push('pushBaseLine');
        this.displayCritical(target);
        this.push('popupDamage', target);
        this.push('popupDamage', subject);
        this.displayDamage(subject, target);
        this.displayAffectedStatus(target);
        this.displayFailure(target);
        this.push('waitForNewLine');
        this.push('popBaseLine');
    }
};

Window_BattleLog.prototype.displayDamage = function(subject, target) {
	if (target.result().evaded) {
        this.displayEvasion(target);
    } else {
		if(target.result().missed) {
			this.displayMiss(target);
			this.displayEjaculationDamage(subject, target);
		}
		else {
			this.displayEjaculationDamage(subject, target);
			this.displayHpDamage(target);
		}
        this.displayMpDamage(target);
        this.displayTpDamage(target);
		this.displayPleasureFeedback(subject, target);
    }
};

//Ejaculation
Window_BattleLog.prototype.displayEjaculationDamage = function(subject, target) {
	let result = target.result();
	//if(result.ejaculateDamage <= 0) return;
	
	if(result.ejaculateMouth > 0) {
		let fmt = TextManager.ejaculateMouth;
		let damage = result.ejaculateMouth;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.ejaculatePussy > 0) {
		let fmt = TextManager.ejaculatePussy;
		let damage = result.ejaculatePussy;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.ejaculateAnal > 0) {
		let fmt = TextManager.ejaculateAnal;
		let damage = result.ejaculateAnal;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.bukkakeFace > 0) {
		let fmt = TextManager.bukkakeFace;
		let damage = result.bukkakeFace;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.bukkakeRightArm > 0 || result.bukkakeLeftArm > 0) {
		let fmt = TextManager.bukkakeArms;
		let damage = result.bukkakeRightArm + result.bukkakeLeftArm;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.bukkakeRightLeg > 0 || result.bukkakeLeftLeg > 0) {
		let fmt = TextManager.bukkakeLegs;
		let damage = result.bukkakeRightLeg + result.bukkakeLeftLeg;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.bukkakeBoobs > 0) {
		let fmt = TextManager.bukkakeBoobs;
		let damage = result.bukkakeBoobs;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
	if(result.bukkakeButt > 0) {
		let fmt = TextManager.bukkakeButt;
		let damage = result.bukkakeButt;
		this.push('addText', fmt.format(subject.displayName(), target.displayName(), damage));
	}
};

//Graze
Window_BattleLog.prototype.displayMiss = function(target) {
    let fmt;
	let result = target.result();
    let damage = 0;
    if (target.result().physical) {
		damage = result.hpDamage;
		if(damage == 0) { 
			fmt = target.isActor() ? TextManager.actorNoDamageGraze : TextManager.enemyNoDamageGraze;
		} else {
			fmt = target.isActor() ? TextManager.actorNoHit : TextManager.enemyNoHit;
		}
		//this.push('performEvasion', target);
    } else {
        fmt = TextManager.actionFailure;
    }
	this.push('addText', fmt.format(target.displayName(), damage));
};

//Evasion
Window_BattleLog.prototype.displayEvasion = function(target) {
    let fmt;
    if (target.result().physical) {
		fmt = TextManager.evasion;
        //this.push('performEvasion', target);
    } else {
        fmt = TextManager.magicEvasion;
        this.push('performMagicEvasion', target);
    }
    this.push('addText', fmt.format(target.displayName()));
};

Window_BattleLog.prototype.displayCritical = function(target) {
    if (target.result().critical) {
        if (target.isActor()) {
			this.push('addText', TextManager.criticalToActor);
        } else {
			this.push('addText', TextManager.criticalToEnemy);
        }
    }
};

//Pleasure Damage
Window_BattleLog.prototype.displayTpDamage = function(target) {
    if (target.isAlive() && target.result().pleasureDamage !== 0) {
        if(target.result().pleasureDamage < 0) {

        }
		else if(target.result().pleasureDamage > 0 && target.getPercentOfOrgasmFromValue(target.result().pleasureDamage) > 0) {
			let text = this.makeTpDamageText(target);
			if(text)
				this.push('addText', text);
		}
    }
};

Window_BattleLog.prototype.displayPleasureFeedback = function(subject, target) {
	if (subject.isAlive() && target.result().pleasureFeedback > 0 && 
	subject.getPercentOfOrgasmFromValue(target.result().pleasureFeedback) > 0) {
		this.push('addText', this.makePleasureFeedbackText(subject, target));
	}
};


//Pleasure Damage Text
Window_BattleLog.prototype.makeTpDamageText = function(target) {
    let result = target.result();
    let damage = result.tpDamage;
    let isActor = target.isActor();
    let fmt;
	let pleasureValueText = '';
	
    if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return fmt.format(target.displayName(), TextManager.tp, damage);
    } else if (damage < 0) {
		if(ConfigManager.displayPleasureAsPercent) {
			pleasureValueText += target.getPercentOfOrgasmFromValue(-damage) + TextManager.pleasurePercentText;
			fmt = isActor ? TextManager.actorGainPleasure : TextManager.enemyGainPleasurePercent;
		}
		else {
			pleasureValueText += -damage;
			fmt = isActor ? TextManager.actorGainPleasure : TextManager.enemyGainPleasureValue;
		}
		
		if(!isActor && (target.hasNoMoreEjaculationStockOrEnergy())) {
			return '';
		}

        return fmt.format(target.displayName(), pleasureValueText);
    } else {
        return '';
    }
};

Window_BattleLog.prototype.makePleasureFeedbackText = function(subject, target) {
    let result = target.result();
    let damage = result.pleasureFeedback;
    let isActor = target.isActor();
	let fmt;
	let pleasureValueText = '';
	if(ConfigManager.displayPleasureAsPercent)
		pleasureValueText += subject.getPercentOfOrgasmFromValue(damage) + TextManager.pleasurePercentText;
	else
		pleasureValueText += damage;
			
	if(isActor) {
		if(subject.hasNoMoreEjaculationStockOrEnergy()) {
			return '';
		}
		
		if(ConfigManager.displayPleasureAsPercent)
			fmt = TextManager.enemyGainPleasurePercent;
		else
			fmt = TextManager.enemyGainPleasureValue;
		return fmt.format(subject.displayName(), pleasureValueText);
	}
	else {
		fmt = TextManager.actorGainPleasure;
		return fmt.format(subject.displayName(), pleasureValueText);
	}
};


//Energy damage
Window_BattleLog.prototype.makeMpDamageText = function(target) {
    var result = target.result();
	var femaleOrgasmCount = result.femaleOrgasmCount;
    var damage = result.mpDamage;
    var isActor = target.isActor();
    var fmt;
	
	if(femaleOrgasmCount > 0) {
		if(femaleOrgasmCount > 1) {
			fmt = TextManager.actorMultipleOrgasm;
			return fmt.format(target.displayName(), damage, femaleOrgasmCount);
		}
		else {
			fmt = TextManager.actorSingleOrgasm;
			return fmt.format(target.displayName(), damage);
		}
	}
	
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return fmt.format(target.displayName(), TextManager.mp, damage);
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return fmt.format(target.displayName(), TextManager.mp, damage);
    } else if (damage < 0) {
		//fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
		fmt = TextManager.energyRecovery;
		return fmt.format(target.displayName(), -1 * damage);
    } else {
        return false;
    }
};

//Stamina
Window_BattleLog.prototype.makeHpDamageText = function(target) {
    var result = target.result();
    var damage = result.hpDamage;
    var isActor = target.isActor();
    var fmt;
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return fmt.format(target.displayName(), TextManager.hp, damage);
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorDamage : TextManager.enemyDamage;
        return fmt.format(target.displayName(), damage);
    } else if (damage < 0) {
        //fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
		fmt = TextManager.staminaRecovery;
        return fmt.format(target.displayName(), -damage);
    } else if (!isActor || (isActor && !target.isInDownPose())) {
        fmt = isActor ? TextManager.actorNoDamage : TextManager.enemyNoDamage;
        return fmt.format(target.displayName());
    }
	else
		return false;
};

Window_BattleLog.prototype.displayHpDamage = function(target) {
    if (target.result().hpAffected) {
        if ((target.result().hpDamage > 0 && !target.result().drain) || target.result().enemyAttackSkill) {
            this.push('performDamage', target);
        }
        if (target.result().hpDamage < 0) {
            this.push('performRecovery', target);
        }
		var hpText = this.makeHpDamageText(target);
		if(hpText)
			this.push('addText', hpText);
    }
};

Window_BattleLog.prototype.backPaintOpacity = function() {
    return 0;
};