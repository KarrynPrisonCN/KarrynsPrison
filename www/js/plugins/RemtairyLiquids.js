var Remtairy = Remtairy || {};
Remtairy.Liquids = Remtairy.Liquids || {};

const LIQUID_PUSSY_WET_REQ = 25;

//=============================================================================
 /*:
 * @plugindesc Liquids
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

////////
// Tachie
///////////////

Game_Actor.prototype.getTachieWetId = function() {
	let maxId = this._maxTachieWetId;
	if(maxId == 0) return false;
	let liquid = this._liquidPussyJuice;
	let id = 0;
	if(liquid >= 200) {
		id = 3;
	}
	else if(liquid >= 80) {
		id = 2;
	}
	else if(liquid >= LIQUID_PUSSY_WET_REQ) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenWetExtension) id = '' + this._tachieSemenWetExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieWetPantiesId = function() {
	let maxId = this._maxTachieWetPantiesId;
	if(maxId == 0) return false;
	let liquid = this._liquidPussyJuice;
	var id = 0;
	if(liquid >= 200) {
		id = 3;
	}
	else if(liquid >= 80) {
		id = 2;
	}
	else if(liquid >= LIQUID_PUSSY_WET_REQ) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);

	return id;
}; 

Game_Actor.prototype.getTachieSemenRightArmId = function() {
	let maxId = this._maxTachieSemenRightArmId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeRightArm;
	if(liquid >= 35) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenRightArmExtension) id = '' + this._tachieSemenRightArmExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenLeftArmId = function() {
	let maxId = this._maxTachieSemenLeftArmId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeLeftArm;
	if(liquid >= 35) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenLeftArmExtension) id = '' + this._tachieSemenLeftArmExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenRightLegId = function() {
	let maxId = this._maxTachieSemenRightLegId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeRightLeg;
	if(liquid >= 35) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenRightLegExtension) id = '' + this._tachieSemenRightLegExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieSemenLeftLegId = function() {
	let maxId = this._maxTachieSemenLeftLegId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeLeftLeg;
	if(liquid >= 35) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenLeftLegExtension) id = '' + this._tachieSemenLeftLegExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenBellyId = function() {
	let maxId = this._maxTachieSemenBellyId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeBoobs;
	if(liquid >= 85) {
		id = 3;
	}
	else if(liquid >= 55) {
		id = 2;
	}
	else if(liquid >= 18) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenBellyExtension) id = '' + this._tachieSemenBellyExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenBoobsId = function() {
	let maxId = this._maxTachieSemenBoobsId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeBoobs;
	if(liquid >= 70) {
		id = 3;
	}
	else if(liquid >= 30) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenBoobsExtension) id = '' + this._tachieSemenBoobsExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenRightBoobId = function() {
	let maxId = this._maxTachieSemenRightBoobId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeBoobs;
	if(liquid >= 70)
		id = 3;
	else if(liquid >= 30)
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	id = Math.min(id, maxId);	
	if(this._hasTachieSemenRightBoobExtension) id = '' + this._tachieSemenRightBoobExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieSemenLeftBoobId = function() {
	let maxId = this._maxTachieSemenLeftBoobId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeBoobs;
	if(liquid >= 70)
		id = 3;
	else if(liquid >= 30)
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	id = Math.min(id, maxId);	
	if(this._hasTachieSemenLeftBoobExtension) id = '' + this._tachieSemenLeftBoobExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenButtId = function() {
	let maxId = this._maxTachieSemenButtId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeButt;
	if(liquid >= 90) {
		id = 3;
	}
	else if(liquid >= 45) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenButtExtension) id = '' + this._tachieSemenButtExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenButtTopRightId = function() {
	let maxId = this._maxTachieSemenButtTopRightId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeButtTopRight;
	if(liquid >= 90) {
		id = 3;
	}
	else if(liquid >= 45) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};
Game_Actor.prototype.getTachieSemenButtBottomRightId = function() {
	let maxId = this._maxTachieSemenButtBottomRightId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeButtBottomRight;
	if(liquid >= 90) {
		id = 3;
	}
	else if(liquid >= 45) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};
Game_Actor.prototype.getTachieSemenButtTopLeftId = function() {
	let maxId = this._maxTachieSemenButtTopLeftId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeButtTopLeft;
	if(liquid >= 90) {
		id = 3;
	}
	else if(liquid >= 45) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};
Game_Actor.prototype.getTachieSemenButtBottomLeftId = function() {
	let maxId = this._maxTachieSemenButtBottomLeftId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeButtBottomLeft;
	if(liquid >= 90) {
		id = 3;
	}
	else if(liquid >= 45) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieSemenBackId = function() {
	let maxId = this._maxTachieSemenBackId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeButt;
	if(liquid >= 70) {
		id = 3;
	}
	else if(liquid >= 30) {
		id = 2;
	}
	else if(liquid >= 8) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenBackExtension) id = '' + this._tachieSemenBackExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenDeskId = function() {
	let maxId = this._maxTachieSemenDeskId;
	if(maxId == 0) return false;
	let liquid = this._liquidOnDesk;
	if(liquid >= 50) {
		id = 3;
	}
	else if(liquid >= 20) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieSemenToiletSeatId = function() {
	let maxId = this._maxTachieSemenToiletSeatId;
	if(maxId == 0) return false;
	let liquid = this._liquidCumOnToiletSeat;
	if(liquid >= 50) {
		id = 3;
	}
	else if(liquid >= 20) {
		id = 2;
	}
	else if(liquid >= 10) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenToiletSeatExtension) id = '' + this._tachieSemenToiletSeatExtension + id;
	return id;
};

Game_Actor.prototype.getTachieWetToiletSeatId = function() {
	let maxId = this._maxTachieWetToiletSeatId;
	if(maxId == 0) return false;
	let liquid = this._liquidJuiceOnToiletSeat;
	let id = 0;
	if(liquid >= 200) {
		id = 3;
	}
	else if(liquid >= 80) {
		id = 2;
	}
	else if(liquid >= LIQUID_PUSSY_WET_REQ) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieWetToiletSeatExtension) id = '' + this._tachieWetToiletSeatExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieGlorySemenLeftWallId = function(index) {
	let maxId = this._maxTachieGlorySemenLeftWallId;
	if(maxId == 0) return false;
	let liquid = this._liquidGloryCumOnLeftWall[index];
	let id = 0;
	if(liquid >= 42) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 3) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};
Game_Actor.prototype.getTachieGlorySemenRightWallId = function(index) {
	let maxId = this._maxTachieGlorySemenRightWallId;
	if(maxId == 0) return false;
	let liquid = this._liquidGloryCumOnRightWall[index];
	let id = 0;
	if(liquid >= 42) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 3) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieGlorySemenLeftHoleId = function(index) {
	let maxId = this._maxTachieGlorySemenLeftHoleId;
	if(maxId == 0) return false;
	let liquid = this._liquidGloryCumOnLeftHole[index];
	let id = 0;
	if(liquid >= 42) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 3) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};
Game_Actor.prototype.getTachieGlorySemenRightHoleId = function(index) {
	let maxId = this._maxTachieGlorySemenRightHoleId;
	if(maxId == 0) return false;
	let liquid = this._liquidGloryCumOnRightHole[index];
	let id = 0;
	if(liquid >= 42) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 3) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieGlorySemenLeftToiletId = function(index) {
	let maxId = this._maxTachieGlorySemenLeftToiletId;
	if(maxId == 0) return false;
	let liquid = this._liquidGloryCumOnLeftToilet[index];
	let id = 0;
	if(liquid >= 42) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 3) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};
Game_Actor.prototype.getTachieGlorySemenRightToiletId = function(index) {
	let maxId = this._maxTachieGlorySemenLeftToiletId;
	if(maxId == 0) return false;
	let liquid = this._liquidGloryCumOnRightToilet[index];
	let id = 0;
	if(liquid >= 75) {
		id = 3;
	}
	else if(liquid >= 25) {
		id = 2;
	}
	else if(liquid >= 5) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieSemenFaceId = function() {
	let maxId = this._maxTachieSemenFaceId;
	if(maxId == 0) return false;
	let liquid = this._liquidBukkakeFace;
	if(liquid >= 60) {
		id = 3;
	}
	else if(liquid >= 25) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenFaceExtension) id = '' + this._tachieSemenFaceExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenMouthId = function() {
	let maxId = this._maxTachieSemenMouthId;
	if(maxId == 0) return false;
	let liquid = this._liquidSwallow;
	if(liquid >= 60) {
		id = 3;
	}
	else if(liquid >= 25) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenMouthExtension) id = '' + this._tachieSemenMouthExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenCockMouthId = function() {
	let maxId = this._maxTachieSemenCockMouthId;
	if(maxId == 0) return false;
	if(!this._cockMouthTarget) return false;
	let liquid = this._cockMouthTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCockMouthExtension) id = '' + this._tachieSemenCockMouthExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCockBoobsId = function() {
	let maxId = this._maxTachieSemenCockBoobsId;
	if(maxId == 0) return false;
	if(!this._cockBoobsTarget) return false;
	let liquid = this._cockBoobsTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieSemenCockRightArmId = function() {
	let maxId = this._maxTachieSemenCockRightArmId;
	if(maxId == 0) return false;
	if(!this._cockRightArmTarget) return false;
	let liquid = this._cockRightArmTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCockRightArmExtension) id = '' + this._tachieSemenCockRightArmExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCockLeftArmId = function() {
	let maxId = this._maxTachieSemenCockLeftArmId;
	if(maxId == 0) return false;
	if(!this._cockLeftArmTarget) return false;
	let liquid = this._cockLeftArmTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCockLeftArmExtension) id = '' + this._tachieSemenCockLeftArmExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCockPussyId = function() {
	let maxId = this._maxTachieSemenCockPussyId;
	if(maxId == 0) return false;
	if(!this._cockPussyTarget) return false;
	let liquid = this._cockPussyTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCockPussyExtension) id = '' + this._tachieSemenCockPussyExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCockAnalId = function() {
	let maxId = this._maxTachieSemenCockAnalId;
	if(maxId == 0) return false;
	if(!this._cockAnalTarget) return false;
	let liquid = this._cockAnalTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCockAnalExtension) id = '' + this._tachieSemenCockAnalExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCockFeetId = function() {
	let maxId = this._maxTachieSemenCockFeetId;
	if(maxId == 0) return false;
	if(!this._cockFeetTarget) return false;
	let liquid = this._cockFeetTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
};

Game_Actor.prototype.getTachieSemenCockNormalId = function() {
	let maxId = this._maxTachieSemenCockNormalId;
	if(maxId == 0) return false;
	if(!this._cockNormalTarget) return false;
	let liquid = this._cockNormalTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) {
		id = 3;
	}
	else if(liquid >= 15) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCockNormalExtension) id = '' + this._tachieSemenCockNormalExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenHoleLeftId = function() {
	let maxId = this._maxTachieSemenHoleLeftId;
	if(maxId == 0) return false;
	if(!$gameTroop._gloryLeftStall || !$gameTroop._gloryLeftStall._guest_showedThroughHole) return false;
	let liquid = $gameTroop._gloryLeftStall._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) 
		id = 3;
	else if(liquid >= 15) 
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenHoleLeftExtension) id = '' + this._tachieSemenHoleLeftExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenHoleRightId = function() {
	let maxId = this._maxTachieSemenHoleRightId;
	if(maxId == 0) return false;
	if(!$gameTroop._gloryRightStall || !$gameTroop._gloryRightStall._guest_showedThroughHole) return false;
	let liquid = $gameTroop._gloryRightStall._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) 
		id = 3;
	else if(liquid >= 15) 
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenHoleRightExtension) id = '' + this._tachieSemenHoleRightExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenFrontAId = function() {
	let maxId = this._maxTachieSemenFrontAId;
	if(maxId == 0) return false;
	if(!this._cockFrontATarget) return false;
	let liquid = this._cockFrontATarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) 
		id = 3;
	else if(liquid >= 15) 
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontAExtension) id = '' + this._tachieSemenFrontAExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenFrontBId = function() {
	let maxId = this._maxTachieSemenFrontBId;
	if(maxId == 0) return false;
	if(!this._cockFrontBTarget) return false;
	let liquid = this._cockFrontBTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) 
		id = 3;
	else if(liquid >= 15) 
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontBExtension) id = '' + this._tachieSemenFrontBExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenFrontCId = function() {
	let maxId = this._maxTachieSemenFrontCId;
	if(maxId == 0) return false;
	if(!this._cockFrontCTarget) return false;
	let liquid = this._cockFrontCTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) 
		id = 3;
	else if(liquid >= 15) 
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontCExtension) id = '' + this._tachieSemenFrontCExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenFrontDId = function() {
	let maxId = this._maxTachieSemenFrontDId;
	if(maxId == 0) return false;
	if(!this._cockFrontDTarget) return false;
	let liquid = this._cockFrontDTarget._enemyTempRecordTotalEjaculationCount;
	if(liquid >= 40) 
		id = 3;
	else if(liquid >= 15) 
		id = 2;
	else if(liquid >= 1) 
		id = 1;
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontDExtension) id = '' + this._tachieSemenFrontDExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCrotchPantiesId = function() {
	let maxId = this._maxTachieSemenCrotchPantiesId;
	if(maxId == 0) return false;
	let liquid = this._liquidCreampiePussy;
	if(liquid >= 75) {
		id = 3;
	}
	else if(liquid >= 30) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
}; 
Game_Actor.prototype.getTachieSemenCrotchId = function() {
	let maxId = this._maxTachieSemenCrotchId;
	if(maxId == 0) return false;
	let liquid = this._liquidCreampiePussy;
	if(liquid >= 75) {
		id = 3;
	}
	else if(liquid >= 30) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenCrotchExtension) id = '' + this._tachieSemenCrotchExtension + id;
	return id;
}; 

Game_Actor.prototype.getTachieSemenAnalId = function() {
	let maxId = this._maxTachieSemenAnalId;
	if(maxId == 0) return false;
	let liquid = this._liquidCreampieAnal;
	if(liquid >= 75) {
		id = 3;
	}
	else if(liquid >= 30) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	if(this._hasTachieSemenAnalExtension) id = '' + this._tachieSemenAnalExtension + id;
	return id;
}; 



Game_Actor.prototype.getTachieDroolMouthId = function() {
	let maxId = this._maxTachieDroolMouthId;
	if(maxId == 0) return false;
	let liquid = this._liquidDroolMouth;
	if(liquid >= 15) {
		id = 3;
	}
	else if(liquid >= 7) {
		id = 2;
	}
	else if(liquid >= 3) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
}; 
Game_Actor.prototype.getTachieDroolFingersId = function() {
	let maxId = this._maxTachieDroolFingersId;
	if(maxId == 0) return false;
	let liquid = this._liquidDroolFingers;
	if(liquid >= 7) {
		id = 3;
	}
	else if(liquid >= 4) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
}; 
Game_Actor.prototype.getTachieDroolNipplesId = function() {
	let maxId = this._maxTachieDroolNipplesId;
	if(maxId == 0) return false;
	let liquid = this._liquidDroolNipples;
	if(liquid >= 7) {
		id = 3;
	}
	else if(liquid >= 4) {
		id = 2;
	}
	else if(liquid >= 1) {
		id = 1;
	}
	else return false;
	
	id = Math.min(id, maxId);
	return id;
}; 

Game_Actor.prototype.setMaxTachieSemenBackId = function(value) { this._maxTachieSemenBackId = value; }; 
Game_Actor.prototype.setMaxTachieSemenDeskId = function(value) { this._maxTachieSemenDeskId = value; }; 
Game_Actor.prototype.setMaxTachieSemenBellyId = function(value) { this._maxTachieSemenBellyId = value; }; 
Game_Actor.prototype.setMaxTachieSemenBoobsId = function(value) { this._maxTachieSemenBoobsId = value; }; 
Game_Actor.prototype.setMaxTachieSemenLeftBoobId = function(value) { this._maxTachieSemenLeftBoobId = value; }; 
Game_Actor.prototype.setMaxTachieSemenRightBoobId = function(value) { this._maxTachieSemenRightBoobId = value; }; 
Game_Actor.prototype.setMaxTachieSemenButtId = function(value) { this._maxTachieSemenButtId = value; }; 
Game_Actor.prototype.setMaxTachieSemenButtTopRightId = function(value) { this._maxTachieSemenButtTopRightId = value; }; 
Game_Actor.prototype.setMaxTachieSemenButtBottomRightId = function(value) { this._maxTachieSemenButtBottomRightId = value; }; 
Game_Actor.prototype.setMaxTachieSemenButtTopLeftId = function(value) { this._maxTachieSemenButtTopLeftId = value; }; 
Game_Actor.prototype.setMaxTachieSemenButtBottomLeftId = function(value) { this._maxTachieSemenButtBottomLeftId = value; }; 
Game_Actor.prototype.setMaxTachieSemenAnalId = function(value) { this._maxTachieSemenAnalId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCrotchId = function(value) { this._maxTachieSemenCrotchId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCrotchPantiesId = function(value) { this._maxTachieSemenCrotchPantiesId = value; }; 
Game_Actor.prototype.setMaxTachieSemenFaceId = function(value) { this._maxTachieSemenFaceId = value; }; 
Game_Actor.prototype.setMaxTachieSemenMouthId = function(value) { this._maxTachieSemenMouthId = value; }; 
Game_Actor.prototype.setMaxTachieSemenLeftArmId = function(value) { this._maxTachieSemenLeftArmId = value; }; 
Game_Actor.prototype.setMaxTachieSemenRightArmId = function(value) { this._maxTachieSemenRightArmId = value; }; 
Game_Actor.prototype.setMaxTachieSemenLeftLegId = function(value) { this._maxTachieSemenLeftLegId = value; }; 
Game_Actor.prototype.setMaxTachieSemenRightLegId = function(value) { this._maxTachieSemenRightLegId = value; }; 
Game_Actor.prototype.setMaxTachieWetId = function(value) { this._maxTachieWetId = value; }; 
Game_Actor.prototype.setMaxTachieWetPantiesId = function(value) { this._maxTachieWetPantiesId = value; }; 

Game_Actor.prototype.setMaxTachieDroolMouthId = function(value) { this._maxTachieDroolMouthId = value; }; 
Game_Actor.prototype.setMaxTachieDroolFingersId = function(value) { this._maxTachieDroolFingersId = value; }; 
Game_Actor.prototype.setMaxTachieDroolNipplesId = function(value) { this._maxTachieDroolNipplesId = value; }; 

Game_Actor.prototype.setMaxTachieSemenCockMouthId = function(value) { this._maxTachieSemenCockMouthId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockBoobsId = function(value) { this._maxTachieSemenCockBoobsId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockRightArmId = function(value) { this._maxTachieSemenCockRightArmId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockLeftArmId = function(value) { this._maxTachieSemenCockLeftArmId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockPussyId = function(value) { this._maxTachieSemenCockPussyId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockAnalId = function(value) { this._maxTachieSemenCockAnalId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockFeetId = function(value) { this._maxTachieSemenCockFeetId = value; }; 
Game_Actor.prototype.setMaxTachieSemenCockNormalId = function(value) { this._maxTachieSemenCockNormalId = value; }; 
Game_Actor.prototype.setMaxTachieSemenHoleLeftId = function(value) { this._maxTachieSemenHoleLeftId = value; }; 
Game_Actor.prototype.setMaxTachieSemenHoleRightId = function(value) { this._maxTachieSemenHoleRightId = value; }; 
Game_Actor.prototype.setMaxTachieSemenToiletSeatId = function(value) { this._maxTachieSemenToiletSeatId = value; }; 
Game_Actor.prototype.setMaxTachieWetToiletSeatId = function(value) { this._maxTachieWetToiletSeatId = value; }; 
Game_Actor.prototype.setMaxTachieGlorySemenLeftWallId = function(value) { this._maxTachieGlorySemenLeftWallId = value; }; 
Game_Actor.prototype.setMaxTachieGlorySemenRightWallId = function(value) { this._maxTachieGlorySemenRightWallId = value; }; 
Game_Actor.prototype.setMaxTachieGlorySemenLeftHoleId = function(value) { this._maxTachieGlorySemenLeftHoleId = value; }; 
Game_Actor.prototype.setMaxTachieGlorySemenRightHoleId = function(value) { this._maxTachieGlorySemenRightHoleId = value; }; 
Game_Actor.prototype.setMaxTachieGlorySemenLeftToiletId = function(value) { this._maxTachieGlorySemenLeftToiletId = value; }; 
Game_Actor.prototype.setMaxTachieGlorySemenRightToiletId = function(value) { this._maxTachieGlorySemenRightToiletId = value; }; 

Game_Actor.prototype.setMaxTachieSemenFrontAId = function(value) { this._maxTachieSemenFrontAId = value; }; 
Game_Actor.prototype.setMaxTachieSemenFrontBId = function(value) { this._maxTachieSemenFrontBId = value; }; 
Game_Actor.prototype.setMaxTachieSemenFrontCId = function(value) { this._maxTachieSemenFrontCId = value; }; 
Game_Actor.prototype.setMaxTachieSemenFrontDId = function(value) { this._maxTachieSemenFrontDId = value; }; 

Game_Actor.prototype.setTachieSemenAnalExtension = function(value) { 
	this._tachieSemenAnalExtension = value; 
	this._hasTachieSemenAnalExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenAnalExtension = function(value) { this._hasTachieSemenAnalExtension = false; }; 

Game_Actor.prototype.setTachieSemenBackExtension = function(value) { 
	this._tachieSemenBackExtension = value; 
	this._hasTachieSemenBackExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenBackExtension = function(value) { this._hasTachieSemenBackExtension = false; };

Game_Actor.prototype.setTachieSemenBellyExtension = function(value) { 
	this._tachieSemenBellyExtension = value; 
	this._hasTachieSemenBellyExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenBellyExtension = function(value) { this._hasTachieSemenBellyExtension = false; };

Game_Actor.prototype.setTachieSemenButtExtension = function(value) { 
	this._tachieSemenButtExtension = value; 
	this._hasTachieSemenButtExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenButtExtension = function(value) { this._hasTachieSemenButtExtension = false; };

Game_Actor.prototype.setTachieSemenBoobsExtension = function(value) { 
	this._tachieSemenBoobsExtension = value; 
	this._hasTachieSemenBoobsExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenBoobsExtension = function(value) { this._hasTachieSemenBoobsExtension = false; }; 

Game_Actor.prototype.setTachieSemenLeftBoobExtension = function(value) { 
	this._tachieSemenLeftBoobExtension = value; 
	this._hasTachieSemenLeftBoobExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenLeftBoobExtension = function(value) { this._hasTachieSemenLeftBoobExtension = false; }; 

Game_Actor.prototype.setTachieSemenRightBoobExtension = function(value) { 
	this._tachieSemenRightBoobExtension = value; 
	this._hasTachieSemenRightBoobExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenRightBoobExtension = function(value) { this._hasTachieSemenRightBoobExtension = false; }; 

Game_Actor.prototype.setTachieSemenLeftLegExtension = function(value) { 
	this._tachieSemenLeftLegExtension = value; 
	this._hasTachieSemenLeftLegExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenLeftLegExtension = function(value) { this._hasTachieSemenLeftLegExtension = false; }; 

Game_Actor.prototype.setTachieSemenRightLegExtension = function(value) { 
	this._tachieSemenRightLegExtension = value; 
	this._hasTachieSemenRightLegExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenRightLegExtension = function(value) { this._hasTachieSemenRightLegExtension = false; }; 

Game_Actor.prototype.setTachieSemenCrotchExtension = function(value) { 
	this._tachieSemenCrotchExtension = value; 
	this._hasTachieSemenCrotchExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCrotchExtension = function(value) { this._hasTachieSemenCrotchExtension = false; };

Game_Actor.prototype.setTachieSemenFaceExtension = function(value) { 
	this._tachieSemenFaceExtension = value; 
	this._hasTachieSemenFaceExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenFaceExtension = function(value) { this._hasTachieSemenFaceExtension = false; }; 

Game_Actor.prototype.setTachieSemenMouthExtension = function(value) { 
	this._tachieSemenMouthExtension = value; 
	this._hasTachieSemenMouthExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenMouthExtension = function(value) { this._hasTachieSemenMouthExtension = false; }; 


Game_Actor.prototype.setTachieSemenLeftArmExtension = function(value) { 
	this._tachieSemenLeftArmExtension = value; 
	this._hasTachieSemenLeftArmExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenLeftArmExtension = function(value) { this._hasTachieSemenLeftArmExtension = false; }; 

Game_Actor.prototype.setTachieSemenCockLeftArmExtension = function(value) { 
	this._tachieSemenCockLeftArmExtension = value; 
	this._hasTachieSemenCockLeftArmExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCockLeftArmExtension = function(value) { this._hasTachieSemenCockLeftArmExtension = false; }; 

Game_Actor.prototype.setTachieSemenRightArmExtension = function(value) { 
	this._tachieSemenRightArmExtension = value; 
	this._hasTachieSemenRightArmExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenRightArmExtension = function(value) { this._hasTachieSemenRightArmExtension = false; }; 

Game_Actor.prototype.setTachieSemenCockRightArmExtension = function(value) { 
	this._tachieSemenCockRightArmExtension = value; 
	this._hasTachieSemenCockRightArmExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCockRightArmExtension = function(value) { this._hasTachieSemenCockRightArmExtension = false; }; 

Game_Actor.prototype.setTachieSemenCockMouthExtension = function(value) { 
	this._tachieSemenCockMouthExtension = value; 
	this._hasTachieSemenCockMouthExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCockMouthExtension = function(value) { this._hasTachieSemenCockMouthExtension = false; };

Game_Actor.prototype.setTachieSemenCockPussyExtension = function(value) { 
	this._tachieSemenCockPussyExtension = value; 
	this._hasTachieSemenCockPussyExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCockPussyExtension = function(value) { this._hasTachieSemenCockPussyExtension = false; };

Game_Actor.prototype.setTachieSemenCockAnalExtension = function(value) { 
	this._tachieSemenCockAnalExtension = value; 
	this._hasTachieSemenCockAnalExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCockAnalExtension = function(value) { this._hasTachieSemenCockAnalExtension = false; };

Game_Actor.prototype.setTachieSemenCockNormalExtension = function(value) { 
	this._tachieSemenCockNormalExtension = value; 
	this._hasTachieSemenCockNormalExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenCockNormalExtension = function(value) { this._hasTachieSemenCockNormalExtension = false; };

Game_Actor.prototype.setTachieSemenHoleLeftExtension = function(value) { 
	this._tachieSemenHoleLeftExtension = value; 
	this._hasTachieSemenHoleLeftExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenHoleLeftExtension = function(value) { this._hasTachieSemenHoleLeftExtension = false; };

Game_Actor.prototype.setTachieSemenHoleRightExtension = function(value) { 
	this._tachieSemenHoleRightExtension = value; 
	this._hasTachieSemenHoleRightExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenHoleRightExtension = function(value) { this._hasTachieSemenHoleRightExtension = false; };

Game_Actor.prototype.setTachieSemenWetExtension = function(value) { 
	this._tachieSemenWetExtension = value; 
	this._hasTachieSemenWetExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenWetExtension = function(value) { this._hasTachieSemenWetExtension = false; };

Game_Actor.prototype.setTachieSemenToiletSeatExtension = function(value) { 
	this._tachieSemenToiletSeatExtension = value; 
	this._hasTachieSemenToiletSeatExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenToiletSeatExtension = function(value) { this._hasTachieSemenToiletSeatExtension = false; };

Game_Actor.prototype.setTachieWetToiletSeatExtension = function(value) { 
	this._tachieWetToiletSeatExtension = value; 
	this._hasTachieWetToiletSeatExtension = true;
}; 
Game_Actor.prototype.resetTachieWetToiletSeatExtension = function(value) { this._hasTachieWetToiletSeatExtension = false; };

Game_Actor.prototype.setTachieSemenFrontAExtension = function(value) { 
	this._tachieSemenFrontAExtension = value; 
	this._hasTachieSemenFrontAExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenFrontAExtension = function(value) { this._hasTachieSemenFrontAExtension = false; };

Game_Actor.prototype.setTachieSemenFrontBExtension = function(value) { 
	this._tachieSemenFrontBExtension = value; 
	this._hasTachieSemenFrontBExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenFrontBExtension = function(value) { this._hasTachieSemenFrontBExtension = false; };

Game_Actor.prototype.setTachieSemenFrontCExtension = function(value) { 
	this._tachieSemenFrontCExtension = value; 
	this._hasTachieSemenFrontCExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenFrontCExtension = function(value) { this._hasTachieSemenFrontCExtension = false; };

Game_Actor.prototype.setTachieSemenFrontDExtension = function(value) { 
	this._tachieSemenFrontDExtension = value; 
	this._hasTachieSemenFrontDExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenFrontDExtension = function(value) { this._hasTachieSemenFrontDExtension = false; };

Game_Actor.prototype.setTachieSemenFrontEExtension = function(value) { 
	this._tachieSemenFrontEExtension = value; 
	this._hasTachieSemenFrontEExtension = true;
}; 
Game_Actor.prototype.resetTachieSemenFrontEExtension = function(value) { this._hasTachieSemenFrontEExtension = false; };

///////////
// Semen
////////////

Game_Actor.prototype.cleanUpLiquids = function() {
	this._liquidPussyJuice = 0;
	this._liquidSwallow = 0;
	this._liquidCreampiePussy = 0;
	this._liquidCreampieAnal = 0;
	this._liquidBukkakeFace = 0;
	this._liquidBukkakeBoobs = 0;
	this._liquidBukkakeButt = 0;
	this._liquidBukkakeButtTopRight = 0;
	this._liquidBukkakeButtTopLeft = 0;
	this._liquidBukkakeButtBottomRight = 0;
	this._liquidBukkakeButtBottomLeft = 0;
	this._liquidBukkakeLeftArm = 0;
	this._liquidBukkakeRightArm = 0;
	this._liquidBukkakeLeftLeg = 0;
	this._liquidBukkakeRightLeg = 0;
	this._liquidDroolMouth = 0;
	this._liquidDroolFingers = 0;
	this._liquidDroolNipples = 0;
	this._liquidOnFloor = 0;
	
	//Receptionist
	this._liquidOnDesk = 0;
	
	//Glory
	this._liquidCumOnToiletSeat = 0;
	this._liquidJuiceOnToiletSeat = 0;
	this._liquidGloryCumOnLeftWall = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
	this._liquidGloryCumOnLeftHole = [0, 0];
	this._liquidGloryCumOnLeftToilet = [0, 0];
	this._liquidGloryCumOnRightWall = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
	this._liquidGloryCumOnRightHole = [0, 0];
	this._liquidGloryCumOnRightToilet = [0, 0, 0, 0];
	this.setCacheChanged();
}; 

Game_Actor.prototype.increaseLiquidPussyJuice = function(liquid) {
	this._liquidPussyJuice += liquid;
}; 

Game_Actor.prototype.increaseLiquidDroolMouth = function(liquid) {
	this._liquidDroolMouth += liquid;
}; 
Game_Actor.prototype.increaseLiquidDroolFingers = function(liquid) {
	this._liquidDroolFingers += liquid;
}; 
Game_Actor.prototype.increaseLiquidDroolNipples = function(liquid) {
	this._liquidDroolNipples += liquid;
}; 

Game_Actor.prototype.increaseLiquidSwallow = function(semen) {
	this._liquidSwallow += semen;
}; 
Game_Actor.prototype.increaseLiquidCreampiePussy = function(semen) {
	this._liquidCreampiePussy += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidCreampieAnal = function(semen) {
	this._liquidCreampieAnal += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeFace = function(semen) {
	this._liquidBukkakeFace += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeBoobs = function(semen) {
	this._liquidBukkakeBoobs += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeButt = function(semen) {
	this._liquidBukkakeButt += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeButtTopRight = function(semen) {
	this._liquidBukkakeButtTopRight += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeButtTopLeft = function(semen) {
	this._liquidBukkakeButtTopLeft += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeButtBottomRight = function(semen) {
	this._liquidBukkakeButtBottomRight += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeButtBottomLeft = function(semen) {
	this._liquidBukkakeButtBottomLeft += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeRightArm = function(semen) {
	this._liquidBukkakeRightArm += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeLeftArm = function(semen) {
	this._liquidBukkakeLeftArm += semen;
	//this.setCacheChanged();
}; 

Game_Actor.prototype.increaseLiquidBukkakeRightLeg = function(semen) {
	this._liquidBukkakeRightLeg += semen;
	//this.setCacheChanged();
}; 
Game_Actor.prototype.increaseLiquidBukkakeLeftLeg = function(semen) {
	this._liquidBukkakeLeftLeg += semen;
	//this.setCacheChanged();
}; 

Game_Actor.prototype.increaseLiquidOnDesk = function(semen) {
	this._liquidOnDesk += semen;
	//this.setCacheChanged();
}; 

Game_Actor.prototype.increaseLiquidOnFloor = function(semen) {
	this._liquidOnFloor += semen;
	//this.setCacheChanged();
}; 

Game_Actor.prototype.increaseLiquidCumOnToiletSeat = function(semen) {
	this._liquidCumOnToiletSeat += semen;
}; 
Game_Actor.prototype.increaseLiquidJuiceOnToiletSeat = function(semen) {
	this._liquidJuiceOnToiletSeat += semen;
}; 
Game_Actor.prototype.increaseGloryCumOnLeftWall = function(semen, index) {
	this._liquidGloryCumOnLeftWall[index] += semen;
}; 
Game_Actor.prototype.increaseGloryCumOnLeftHole = function(semen, index) {
	this._liquidGloryCumOnLeftHole[index] += semen;
}; 
Game_Actor.prototype.increaseGloryCumOnLeftToilet = function(semen, index) {
	this._liquidGloryCumOnLeftToilet[index] += semen;
}; 
Game_Actor.prototype.increaseGloryCumOnRightWall = function(semen, index) {
	this._liquidGloryCumOnRightWall[index] += semen;
}; 
Game_Actor.prototype.increaseGloryCumOnRightHole = function(semen, index) {
	this._liquidGloryCumOnRightHole[index] += semen;
}; 
Game_Actor.prototype.increaseGloryCumOnRightToilet = function(semen, index) {
	this._liquidGloryCumOnRightToilet[index] += semen;
}; 

Game_Actor.prototype.getCurrentBukkakeTotal = function() {
	let total = this._liquidBukkakeFace + this._liquidBukkakeBoobs + this._liquidBukkakeLeftArm + this._liquidBukkakeRightArm + this._liquidBukkakeLeftLeg + this._liquidBukkakeRightLeg + this._liquidBukkakeButt;
	
	if(this.isInDefeatedLevel2Pose()) {
		total += this._liquidBukkakeButtTopRight + this._liquidBukkakeButtTopLeft + this._liquidBukkakeButtBottomRight + this._liquidBukkakeButtBottomLeft;
	}
	
	return total;
}; 


///////////
// Pussy Juice
///////////////

Game_Actor.prototype.setUpPussyJuice = function() {
	if(!DEBUG_MODE) return;
	if(this.reachedOrgasmPoint()) {
		this.increaseLiquidPussyJuice(this.passivePussyJuiceDrip() * 3);
	}
	else if(this.isAroused()) {
		this.increaseLiquidPussyJuice(this.passivePussyJuiceDrip());
	}
}; 

Game_Actor.prototype.regenPussyJuice = function() {
	if(DEBUG_MODE) {
		let drip = this.passivePussyJuiceDrip();
		if(!this.isWet && this.isHorny) drip *= 2;
		drip = Math.max(0, drip);
		this.increaseLiquidPussyJuice(drip);
		this.addToActorPussyDripRecord(drip);
		
		if((this.isInToiletSittingPose() || this.isInToiletSitLeftPose() || this.isInToiletSitRightPose()) && this.isWet && drip > 0) {
			this.increaseLiquidJuiceOnToiletSeat(Math.round(Math.random() * 0.33 * drip));
		}
	}
}; 
