var Remtairy = Remtairy || {};
Remtairy.BPO = Remtairy.BPO || {};

//=============================================================================
 /*:
 * @plugindesc Battle Pose Offset
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

Game_Actor.prototype.getBattlePoseOffetArray = function () {
	let poseName = this.poseName;
	let offsetArray = [ 0, 0 ];
	let x_offset = 0;
	let y_offset = 0;
	//ここから
	
	if(poseName == POSE_DOWN_ORGASM) {
        x_offset = 70;
        y_offset = 0;
    }
	else if(poseName == POSE_KICK) {
        x_offset = 100;
        y_offset = 0;
    }
	else if(poseName == POSE_MAP && $gameParty.isInWaitressBattle) {
		x_offset = 230;
        y_offset = 0;
		
	}
	
	//ここまで
	offsetArray[0] = x_offset;
	offsetArray[1] = y_offset;
	return offsetArray;
};