var Remtairy = Remtairy || {};
Remtairy.Modding = Remtairy.Modding || {};

//=============================================================================
 /*:
 * @plugindesc Modding
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

/*
	A collection of inheritable functions used to help modders mod Karryn's Prison
	As good practice, inherit instead of overriding for compatibility with other mods
*/

// RemtairyLayer.js

// For modders who are adding completely new custom tachie layers
// Following two functions are called at the start of getCustomTachieLayerLoadout

Game_Actor.prototype.modding_isCustomTachieLayerPose = function(pose) {
	return false;
};

Game_Actor.prototype.modding_getLayerLoadout = function(pose) {
	let layerArray = [];
	
	return layerArray;
};

// Saba_Tachie.js

// This is called after getCustomTachieLayerLoadout and the return value of this function
// is concat with the layer array from getCustomTachieLayerLoadout
// Use this for modding simple new layers on top of everything
Game_Actor.prototype.modding_getCustomTachieLayerLoadout = function() {
	let layerArray = [];
	
	return layerArray;
};

// Called twice during preloadTachie
// First time checks the length of this array
// Second time calls doPreloadTachie onto each string in this array
// Sample usage: fileArray.push(this.myTachieModFile());
Game_Actor.prototype.modding_preloadTachieFileArray = function() {
	let fileArray = [];
	
	return fileArray;
};

// Next two functions are called in drawTachieActor

// This gets called when checking layerType to determine if the next function should be called
// Do not return false or null or zero
Game_Actor.prototype.modding_layerType = function() {
	let layerType = -1;
	
	return layerType;
};

// This is called in the first parameter of drawTachieFile
// layerType gets passed into here
// Check it and return your modded filename 
Game_Actor.prototype.modding_tachieFile = function(layerType) {
	return false;
};

