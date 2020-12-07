
/*
#=============================================================================
# Battle Auto Selection
# LeBattleAutoSelection.js
# By Lecode
# Version 1.07
#-----------------------------------------------------------------------------
# TERMS OF USE
#-----------------------------------------------------------------------------
# - Credit required
# - Keep this header
# - Free for commercial use
#=============================================================================
*/
var Imported = Imported || {};
Imported.Lecode_BattleAutoSelection = true;
/*:
 * @plugindesc Skip the selection window when there is only one available enemy or one available ally.
 * @author Lecode
 * @version 1.06
 *
 * @help Skip the selection window when there is only one available enemy 
 * or one available ally.
*/
//#=============================================================================

(function() {

/*-------------------------------------------------------------------------
* Scene_Battle
-------------------------------------------------------------------------*/
//---- SelectEnemySelection
var oldSelectEnemySelec_method = Scene_Battle.prototype.selectEnemySelection;
Scene_Battle.prototype.selectEnemySelection = function() {
    oldSelectEnemySelec_method.call(this);
    if ( !this._enemyWindow.active ) { return; }
	
	var item = BattleManager.inputtingAction().item();
    if (this._enemyWindow._enemies.length == 1 && !item.hasTag(TAG_DONT_AUTO_SELECT_SKILL)) {
    	this._enemyWindow.processOk();
    }
	
};

//---- SelectActorSelection
var oldSelectActorSelec_method = Scene_Battle.prototype.selectActorSelection;
Scene_Battle.prototype.selectActorSelection = function() {
    oldSelectActorSelec_method.call(this);
    if ( !this._actorWindow.active ) { return; }
	var action = BattleManager.inputtingAction();
    if (action.isForUser() || (action.isForFriend() && action.isForAll())) {
        this._actorWindow.select(BattleManager.actor().index());
        this._actorWindow.processOk();
    } else if (action.isForDeadFriend()) {
		if ($gameParty.deadMembers().length == 1) { this._actorWindow.processOk(); }
	} else {
		if ($gameParty.aliveMembers().length == 1) { this._actorWindow.processOk(); }
	}
};


})();