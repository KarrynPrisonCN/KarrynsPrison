//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);
PluginManager.setupMods($mods);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};
