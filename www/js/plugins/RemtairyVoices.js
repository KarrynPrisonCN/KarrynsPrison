var Remtairy = Remtairy || {};
Remtairy.Voices = Remtairy.Voices || {};

//=============================================================================
 /*:
 * @plugindesc Voices
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

/////////
// Battle Manager

Remtairy.Voices.BattleManager_processActionSequence =
    BattleManager.processActionSequence;
BattleManager.processActionSequence = function(actionName, actionArgs) {
	// Rem Voices Male Sound: #
	if (['REM VOICES MALE SOUND'].contains(actionName)) {
		return this.actionRemVoicesMaleSound(actionArgs[0]);
    }
	return Remtairy.Voices.BattleManager_processActionSequence.call(this, actionName, actionArgs);
};


BattleManager.actionRemVoicesMaleSound = function(value) {
	if(value === 'MALE_TALK') {
		let lineId = '' + BattleManager._lastRemLineId;
		
		if(lineId.contains('goblin')) {
			AudioManager.playSe({name:'+Voice_Goblin1', pan:0, pitch:100, volume:100});
		}
		else {
			AudioManager.playSe({name:'+Voice_Enemy_b', pan:0, pitch:110, volume:70});
		}
		
	}
	
};
