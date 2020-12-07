

//=============================================================================
// Olivia Engine - State Tooltip Display - for RPG Maker MV version 1.6.1
// Olivia_StateOlivia_StateTooltipDisplay.js
//=============================================================================
 /*:
 * @plugindesc <Olivia_StateTooltipDisplay> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a tooltip window in battle (and other
 * scenes) dedicated to showing information regarding states. If the player
 * hovers the mouse over the state icons, the window will appear and display
 * descriptions about each of the states affecting the battler.
 *
 * 
 *
 * ------------
 * Instructions
 * ------------
 * 
 * <Help Description>
 * insert a help description here
 * insert another line if you want to
 * </Help Description>
 * - Place this in the states that you want to have appear in the tooltip
 * window. Text codes can be used for the description. If no description is
 * used, then the state will not appear in the tooltip window.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Window Scale: Scale the size of the contents of the tooltip window down by
 * this much. Use 1.0 for regular size.
 *
 * Window Skin: Window skin used for Tooltip window. This can be used to help
 * tell the player at first glance that the information displayed there is
 * different from the normal window.
 *
 * Window Skin Opacity: Opacity of the window skin. Sometimes you don't want
 * the opacity to be too transparent, as it will make the text on the tooltip
 * window harder to read.
 *
 * Text Help Format: If you don't want to use the default text format for the
 * tooltip window entries, change it up to your liking.
 *
 * Buff Format, Debuff Format: Since buffs and debuffs don't have database
 * entries, you will change how they appear in the tooltips here.
 *
 * Turn Duration Format: Change how you want the turn duration to appear in
 * your tooltip window.
 *
 * Enabled Windows: You can disable which windows tooltips will appear from.
 * Decide which ones work best for you and which ones don't. Only certain types
 * of windows are compatible the tooltip window.
 *
 * 1. Window_Help: This requires YEP_BattleEngineCore and YEP_BuffsStatesCore.
 * Window_Help used in battle that shows the battler's name.
 *
 * 2. Window_SkillStatus: Shown in the skill menu. Also used in a variety of
 * Yanfly's menu revisions.
 *
 * 3. Window_BattleSideStates: Used with Olivia's Side Battle Status UI.
 *
 * 4. Window_BattleStatus: Used for the battle status window.
 * Only compatible with the default and Yanfly's.
 *
 * 
 * 
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin is compatible with the following plugins:
 *
 * - YEP_CoreEngine.js
 * - YEP_BattleEngineCore.js
 * - YEP_BuffsStatesCore.js
 * - YEP_BattleStatusWindow.js
 * - YEP_ItemCore.js
 * - YEP_EquipCore.js
 * - YEP_SkillCore.js
 * - Olivia_OctoBattle.js
 * - Olivia_SideBattleUI.js
 *
 * Place this plugin under those in the Plugin Manager list.
 *
 *
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 *
 *
 * ------------
 * Terms of Use
 * ------------
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'Fallen Angel Olivia' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins.
 *
 *
 *
 * -------
 * Credits
 * -------
 *
 * If you are using this plugin, credit the following people:
 * 
 * - Fallen Angel Olivia
 *
 * @param 
 * @param 
 * @param ATTENTION!!!
 * @default READ THE HELP FILE
 * @param 
 * @param 
 *
 * @param Tooltip Window
 *
 * @param WindowScale
 * @text Window Scale
 * @parent Tooltip Window
 * @desc Scale the size of the contents of the tooltip window down by this much
 * @default 0.6
 *
 * @param WindowSkin
 * @text Window Skin
 * @parent Tooltip Window
 * @type file
 * @dir img/system/
 * @desc Window skin used for Tooltip window
 * @default Window
 *
 * @param SkinOpacity
 * @text Window Skin Opacity
 * @parent WindowSkin
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity of the window skin
 * @default 240
 *
 * @param TextFormat
 * @text Text Help Format
 * @parent Tooltip Window
 * @type note
 * @desc Can use text codes. %1: Icon, %2: Name, %3: Description,
 * %4: Duration
 * @default "\\c[27]%1%2:\\c[0] %3 %4"
 *
 * @param BuffFormat
 * @text Buff Format
 * @parent TextFormat
 * @type note
 * @desc Can use text codes. %1: Icon, %2: Parameter, %3: Percentage
 * %4: Duration
 * @default "\\c[27]%1%2 Up:\\c[0] Increases unit's %2 to %3% %4"
 *
 * @param DebuffFormat
 * @text Debuff Format
 * @parent TextFormat
 * @type note
 * @desc Can use text codes. %1: Icon, %2: Parameter, %3: Percentage
 * %4: Duration
 * @default "\\c[27]%1%2 Down:\\c[0] Decreases unit's %2 to %3% %4"
 *
 * @param DurationFormat
 * @text Turn Duration Format
 * @parent TextFormat
 * @type note
 * @desc Can use text codes. %1: Duration
 * @default "\\c[27](Remaining Turns: %1)\\c[0]"
 *
 * @param
 * 
 * @param Enabled Windows
 *
 * @param Window_Help
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Window_Help used in battle that shows the battler's name.
 * Requires YEP_BattleEngineCore and YEP_BuffsStatesCore.
 * @default false
 *
 * @param Window_SkillStatus
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Shown in the skill menu. Also used in a variety of Yanfly's menu revisions.
 * @default true
 *
 * @param Window_BattleSideStates
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Used with Olivia's Side Battle Status UI
 * @default true
 *
 * @param Window_BattleStatus
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Used for the battle status window.
 * Only compatible with the default and Yanfly's
 * @default true
 *
 */
//=============================================================================

var Imported = Imported || {};
Imported.Olivia_StateOlivia_StateTooltipDisplay = true;

var Olivia = Olivia || {};
Olivia.StateTooltipDisplay = Olivia.StateTooltipDisplay || {};

var parameters = $plugins.filter(function(p) { return p.description.contains('<Olivia_StateTooltipDisplay>') })[0].parameters;

Olivia.StateTooltipDisplay.Window = {
    scaleRate: Number(parameters['WindowScale']),
    textFmt: JSON.parse(parameters['TextFormat']),
      buffFmt: JSON.parse(parameters['BuffFormat']),
      debuffFmt: JSON.parse(parameters['DebuffFormat']),
      durationFmt: JSON.parse(parameters['DurationFormat']),
    windowSkin: String(parameters['WindowSkin']),
      windowSkinOpacity: Number(parameters['SkinOpacity']),
};

Olivia.StateTooltipDisplay.Enabled = {
    windowHelp: eval(String(parameters['Window_Help'])),
    windowSkillStatus: eval(String(parameters['Window_SkillStatus'])),
    windowBattleSideStates: eval(String(parameters['Window_BattleSideStates'])),
    windowBattleStatus: eval(String(parameters['Window_BattleStatus'])),
};

Olivia.SetupStateIconTooltipDescription = function(obj) {
    if (!obj.description) {
        obj.description = '';
        var notedata = obj.note.split(/[\r\n]+/);
        var evalMode = 'none';
        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            var descLength = 0;
            if (line.match(/<(?:HELP|DESCRIPTION|HELP DESCRIPTION)>/i)) {
                evalMode = 'help description';
            } else if (line.match(/<\/(?:HELP|DESCRIPTION|HELP DESCRIPTION)>/i)) {
                evalMode = 'none';
            } else if (evalMode === 'help description') {
                if (obj.description.length > 0) obj.description += '\n';
                obj.description += line;
            }
        }
    }
};

//-----------------------------------------------------------------------------
/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @class TouchInput
 */

Olivia.StateTooltipDisplay.___TouchInput_onMouseMove___ = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
    Olivia.StateTooltipDisplay.___TouchInput_onMouseMove___.call(this, event);
    this._mouseOverX = Graphics.pageToCanvasX(event.pageX);
    this._mouseOverY = Graphics.pageToCanvasY(event.pageY);
};

//-----------------------------------------------------------------------------
// Scene_Base
//
// The Superclass of all scene within the game.

Olivia.StateTooltipDisplay.___Scene_Base_createWindowLayer___ = Scene_Base.prototype.createWindowLayer;
Scene_Base.prototype.createWindowLayer = function() {
    Olivia.StateTooltipDisplay.___Scene_Base_createWindowLayer___.call(this);
    this.createStateIconTooltipWindow();
};

Scene_Base.prototype.createStateIconTooltipWindow = function() {
    this._stateIconTooltipWindow = new Window_StateIconTooltip();
    this.addChild(this._stateIconTooltipWindow);
};

//-----------------------------------------------------------------------------
// Sprite_StateIcon
//
// The sprite for displaying state icons.

Olivia.StateTooltipDisplay.___Sprite_StateIcon_update___ = Sprite_StateIcon.prototype.update;
Sprite_StateIcon.prototype.update = function() {
    Olivia.StateTooltipDisplay.___Sprite_StateIcon_update___.call(this);
    if (!!this.tooltipWindow() && this.isMouseOverStates()) {
        this.updateStateIconTooltipWindow();
    }
};

Sprite_StateIcon.prototype.updateStateIconTooltipWindow = function() {
    this.tooltipWindow().setTargetHost(this, true);
};

Sprite_StateIcon.prototype.tooltipWindow = function() {
    return SceneManager._scene._stateIconTooltipWindow;
};

Sprite_StateIcon.prototype.isMouseOverStates = function() {
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);
    x += this.anchor.x * this.width;
    y += this.anchor.y * this.height;
    return this.isFullyVisible() && x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Sprite_StateIcon.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Sprite_StateIcon.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

Sprite_StateIcon.prototype.isFullyVisible = function() {
	if(Karryn.hasTachieCutInOnScreen()) return false;
    var node = this;
    while (node) {
        if (!this.visible) {
            return false;
        } else if (this.opacity <= 0) {
            return false;
        } else {
            node = node.parent;
        }
    }
    return true;
};

//-----------------------------------------------------------------------------
// Sprite_StateOverlay
//
// The sprite for displaying an overlay image for a state.

Olivia.StateTooltipDisplay.___Sprite_StateOverlay_update___ = Sprite_StateOverlay.prototype.update;
Sprite_StateOverlay.prototype.update = function() {
    Olivia.StateTooltipDisplay.___Sprite_StateOverlay_update___.call(this);
    if (!!this.tooltipWindow() && this.isMouseOverStates()) {
        this.updateStateIconTooltipWindow();
    }
};

Sprite_StateOverlay.prototype.updateStateIconTooltipWindow = function() {
    this.tooltipWindow().setTargetHost(this, true);
};

Sprite_StateOverlay.prototype.tooltipWindow = function() {
    return SceneManager._scene._stateIconTooltipWindow;
};

Sprite_StateOverlay.prototype.isMouseOverStates = function() {
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);
    x += this.anchor.x * this.width;
    y += this.anchor.y * this.height;
    return this.isFullyVisible() && x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Sprite_StateOverlay.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Sprite_StateOverlay.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

Sprite_StateOverlay.prototype.isFullyVisible = function() {
	if(Karryn.hasTachieCutInOnScreen()) return false;
    var node = this;
    while (node) {
        if (!this.visible) {
            return false;
        } else if (this.opacity <= 0) {
            return false;
        } else {
            node = node.parent;
        }
    }
    return true;
};

//-----------------------------------------------------------------------------
// Window_StateIconTooltip
//
// New window to display State icon description data

function Window_StateIconTooltip() {
    this.initialize.apply(this, arguments);
}

Window_StateIconTooltip.prototype = Object.create(Window_Base.prototype);
Window_StateIconTooltip.prototype.constructor = Window_StateIconTooltip;

Window_StateIconTooltip.prototype.initialize = function() {
    this._text = '';
    this._targetHost = undefined;
    this._battler = undefined;
    this._visibilityTimer = 0;
	this._lastPosX = -1;
	this._lastPosY = -1;
	this._mousePosX_states = -1;
	this._mousePosY_states = -1;
	this._mousePosX_desires = -1;
	this._mousePosY_desires = -1;
	this._mousePosX_passives = -1;
	this._mousePosY_passives = -1;
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
};

Window_StateIconTooltip.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem(Olivia.StateTooltipDisplay.Window.windowSkin);
};

Window_StateIconTooltip.prototype.updateTone = function() {
};

Window_StateIconTooltip.prototype.scaleRate = function() {
    return Olivia.StateTooltipDisplay.Window.scaleRate;
};

Window_StateIconTooltip.prototype.lineHeight = function() {
	return REM_OLIVIA_TOOLTIP_TEXT_LINEHEIGHT;
    //return Math.round(Window_Base.prototype.lineHeight.call(this) * this.scaleRate());
};

Window_StateIconTooltip.prototype.standardFontSize = function() {
    return Math.round(Window_Base.prototype.standardFontSize.call(this) * this.scaleRate());
};

Window_StateIconTooltip.prototype.standardPadding = function() {
    return Math.round(Window_Base.prototype.standardPadding.call(this) * this.scaleRate());
};

Window_StateIconTooltip.prototype.textPadding = function() {
    return Math.round(Window_Base.prototype.textPadding.call(this) * this.scaleRate());
};

Window_StateIconTooltip.prototype.standardBackOpacity = function() {
    return Olivia.StateTooltipDisplay.Window.windowSkinOpacity;
};

Window_StateIconTooltip.prototype.standardBackOpacity = function() {
    return Olivia.StateTooltipDisplay.Window.windowSkinOpacity;
};

Window_StateIconTooltip.prototype.processDrawIcon = function(iconIndex, textState) {
    this.drawIcon(iconIndex, textState.x + 2, textState.y + 2);
    textState.x += Math.round(Window_Base._iconWidth * this.scaleRate()) + 4;
};

Window_StateIconTooltip.prototype.processDrawLanguageIcon = function(iconIndex, textState) {
    this.drawLanguageIcon(iconIndex, textState.x + 2, textState.y + 2);
    textState.x += Math.round(Window_Base._iconWidth * this.scaleRate()) + 4;
};

Window_StateIconTooltip.prototype.makeFontBigger = function() {
    this.contents.fontSize += Math.ceil(12 * this.scaleRate());
};

Window_StateIconTooltip.prototype.makeFontSmaller = function() {
    this.contents.fontSize -= Math.ceil(12 * this.scaleRate());
};

Window_StateIconTooltip.prototype.drawIcon = function(iconIndex, x, y) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var rate = this.scaleRate();
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, Math.round(pw * rate), Math.round(ph * rate));
};

Window_StateIconTooltip.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateVisibility();
    this.updateCoordinates();
};

Window_StateIconTooltip.prototype.updateVisibility = function() {
    this.visible = this._visibilityTimer > 0;
    this._visibilityTimer--;
};

Window_StateIconTooltip.prototype.updateCoordinates = function() {
    if (this.visible && !!this._targetHost) {
        this.x = TouchInput._mouseOverX;
        if (this.x + this.width >= Graphics.boxWidth) {
            this.x = Graphics.boxWidth - this.width;
        }
        this.y = TouchInput._mouseOverY;
        if (this.y + this.height >= Graphics.boxHeight) {
            this.y = Graphics.boxHeight - this.height;
        }
    }
};

Window_StateIconTooltip.prototype.setTargetHost = function(target, dontCallUpdateNewData) {
    if (this._targetHost !== target && this._visibilityTimer !== 0) {
        this._targetHost = target;
        if(!dontCallUpdateNewData) this.updateNewData();
    }
    this._visibilityTimer = 1;
};

Window_StateIconTooltip.prototype.setXYPos_states = function(x, y) {
    this._mousePosX_states = x;
	this._mousePosY_states = y;
	this._mousePosX_desires = -1;
	this._mousePosY_desires = -1;
	this._mousePosX_passives = -1;
	this._mousePosY_passives = -1;
	this.updateNewData();
};
Window_StateIconTooltip.prototype.setXYPos_desires = function(x, y) {
    this._mousePosX_states = -1;
	this._mousePosY_states = -1;
	this._mousePosX_desires = x;
	this._mousePosY_desires = y;
	this._mousePosX_passives = -1;
	this._mousePosY_passives = -1;
	this.updateNewData();
};
Window_StateIconTooltip.prototype.setXYPos_passives = function(x, y) {
    this._mousePosX_states = -1;
	this._mousePosY_states = -1;
	this._mousePosX_desires = -1;
	this._mousePosY_desires = -1;
	this._mousePosX_passives = x;
	this._mousePosY_passives = y;
	this.updateNewData();
};


Window_StateIconTooltip.prototype.updateNewData = function() {
    this.setupWindow();
    this.setupDimensions();
    this.setupChildPosition();
    this.refresh();
};

Window_StateIconTooltip.prototype.setupWindow = function() {
    this.setupText();
};

Window_StateIconTooltip.prototype.setupText = function() {
    this._text = '';
    if (!!this._targetHost) {
        if (!!this._targetHost._battler) {
            this._battler = this._targetHost._battler;
        }
        if (!!this._battler) {
			this._text = '';
            this.setupStateText();
            //this.setupBuffText();
			this.setupDesireText();
			this.setupPassiveText();
			
			if(this._text == '') this._text = 'test';
        }
    }
};

Window_StateIconTooltip.prototype.setupBuffText = function() {
    var buffFmt = Olivia.StateTooltipDisplay.Window.buffFmt;
    var debuffFmt = Olivia.StateTooltipDisplay.Window.debuffFmt;
    var durationFmt = Olivia.StateTooltipDisplay.Window.durationFmt;
    for (var i = 0; i < 8; i++) {
        if (this._battler.isBuffAffected(i)) {
            var fmt = buffFmt;
        } else if (this._battler.isDebuffAffected(i)) {
            var fmt = debuffFmt;
        } else {
            continue;
        }
        var iconIndex = this._battler.buffIconIndex(this._battler._buffs[i], i);
        var icon = '\\i[' + iconIndex + ']';
        var name = TextManager.param(i);
        var percentage = Math.floor(this._battler.paramBuffRate(i) * 100);
        var duration = this._battler._buffTurns[i] || 0;
        var durText = durationFmt.format(duration);
        if (duration <= 0) durText = '';
        var text = fmt.format(icon, name, percentage, durText);
        this._text += text + '\n';
    }
};


Window_StateIconTooltip.prototype.setupStateText = function() {
	if(this._mousePosX_states < 0 || this._mousePosY_states < 0) return;

    var states = [];
	for(let i = 0; i < this._battler.states().length; i++) {
		if(this._battler.states()[i].iconIndex > 0) states.push(this._battler.states()[i]);
	}
	

    //var fmt = Olivia.StateTooltipDisplay.Window.textFmt;
	let fmt = "\\c[0]%1\n%2"
    let durationFmt = TextManager.StateTooltipsRemainingTurnsPlural;
	let statePos = 0;


	while(statePos < states.length) {
		if(this._battler.isActor()) {
			if(this._mousePosX_states >= statePos * (Window_Base._iconWidth + 4) && this._mousePosX_states <= (statePos + 1) * (Window_Base._iconWidth + 4)) {
				break;
			}
			else statePos++;
		}
		else if(this._battler.isEnemy()) {
			if(this._mousePosX_states >= statePos * (DreamX.Param.BSIIconWidth + DreamX.Param.BSISpaceX) && this._mousePosX_states <= (statePos + 1) * (DreamX.Param.BSIIconWidth + DreamX.Param.BSISpaceX)) {
				break;
			}
			else statePos++;
		}
	}
		
	if(statePos < states.length) {
		let state = states[statePos];
		Olivia.SetupStateIconTooltipDescription(state);

		if (this.meetStateTooltipRequirements(state)) {
			let icon = '\\i[' + state.iconIndex + ']';
			if(state.hasLanguageIcon) icon = '\\RLI[' + state.languageIconIndex + ']';
			let name = state.name;
			//let description = state.description;
			let description = TextManager.stateTooltipText(this._battler, state.id);
			let duration = this._battler._stateTurns[state.id] || 0;
			let durText = durationFmt.format(duration);
			if(state.autoRemovalTiming === 0 || duration <= 0 || !state.showTurns) durText = '';
			else if(duration === 1) durText = TextManager.StateTooltipsRemainingTurnsSingular;
			//let text = fmt.format(icon, name, description, durText);
			let text = fmt.format(description, durText);
			this._text += text + '\n';
		}
	}

	
	/*
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        Olivia.SetupStateIconTooltipDescription(state);
        if (this.meetStateTooltipRequirements(state)) {
            var icon = '\\i[' + state.iconIndex + ']';
            var name = state.name;
            var description = state.description;
            var duration = this._battler._stateTurns[state.id] || 0;
            var durText = durationFmt.format(duration);
            if (duration <= 0) durText = '';
            var text = fmt.format(icon, name, description, durText);
            this._text += text + '\n';
        }
    }*/
};


Window_StateIconTooltip.prototype.setupDesireText = function() {
	if(this._mousePosX_desires < 0 || this._mousePosY_desires < 0) return;
	if(this._text === '' && this._battler.isActor()) {
		if(this._mousePosX_desires <= REM_BHD_MOUTH_METER_X) {
			this._text += this._battler._cacheCockDesireTooltip;
		}
		else if(this._mousePosX_desires <= REM_BHD_BOOBS_METER_X) {
			this._text += this._battler._cacheMouthDesireTooltip;
		}
		else if(this._mousePosX_desires <= REM_BHD_PUSSY_METER_X) {
			this._text += this._battler._cacheBoobsDesireTooltip;
		}
		else if(this._mousePosX_desires <= REM_BHD_BUTT_METER_X) {
			this._text += this._battler._cachePussyDesireTooltip;
		}
		else {
			this._text += this._battler._cacheButtDesireTooltip;
		}
	}
};

Window_StateIconTooltip.prototype.setupPassiveText = function() {
	if(this._mousePosX_passives < 0 || this._mousePosY_passives < 0) return;
	if(this._text === '' && this._battler.isActor()) {
		let lineheight = REM_OLIVIA_TOOLTIP_PASSIVE_LINEHEIGHT;
		
		let passivePos = 0;
		let newPassivesUnlockedArray = this._battler._newPassivesUnlocked;

		while(passivePos < newPassivesUnlockedArray.length) {
			if(this._mousePosY_passives >= passivePos * lineheight && this._mousePosY_passives <= (passivePos + 1) * lineheight) {
				break;
			}
			else passivePos++;
		}

		if(passivePos < newPassivesUnlockedArray.length) {
			this._text += TextManager.skillDesc(newPassivesUnlockedArray[passivePos]) + '\n';
		}
		
	}
};

Window_StateIconTooltip.prototype.setupDimensions = function() {
    if (this._text === '') {
        this.width = 0;
        this.height = 0;
    } else {
        var lines = this._text.split(/[\r\n]+/);
        if (lines.length > 0) {
            var width = 0;
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var lineWidth = Window_ChoiceList.prototype.textWidthEx.call(this, line);
                width = Math.max(lineWidth, width);
            }
            this.width = this.standardPadding() * 2 + this.textPadding() * 2 + width;
            //this.height = this.standardPadding() * 2 + (lines.length - 1) * this.lineHeight();
			this.height = this.standardPadding() + (lines.length) * this.lineHeight();
        } else {
            this.width = 0;
            this.height = 0;
        }
    }
};

Window_StateIconTooltip.prototype.setupChildPosition = function() {
    if (this.parent) {
        var arr = this.parent.children;
        arr.push(arr.splice(arr.indexOf(this), 1)[0]);
    }
};

Window_StateIconTooltip.prototype.meetStateTooltipRequirements = function(state) {
    if(!state) {
        return false;
	}
		/*
    else if (state.description === '') {
        return false;
		*/
	else if(state.iconIndex <= 0) {
        return false;
    } 
	else {
        return true;
    }
};

Window_StateIconTooltip.prototype.refresh = function() {
	if(this._lastPosX !== this.x || this._lastPosY !== this.y) {
		this.createContents();
		this.contents.clear();
		if (this._text !== '') {
			var lines = this._text.split(/[\r\n]+/);
			var x = this.textPadding();
			var y = REM_OLIVIA_TOOLTIP_TEXT_STARTING_Y;
			for (var i = 0; i < lines.length; i++) {
				var line = lines[i];
				this.drawTextEx(line, x, y, true);
				y += this.lineHeight();
			}
		}
		this._lastPosX = this.x;
		this._lastPosY = this.y;
	}
};

//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

Window_Base.prototype.tooltipWindow = function() {
    return SceneManager._scene._stateIconTooltipWindow;
};

Window_Base.prototype.updateStateIconTooltipWindow = function() {
    this.tooltipWindow().setTargetHost(this, true);
    if (this._battler !== this.tooltipWindow()._battler) {
        this.tooltipWindow().updateNewData();
    }
};

Window_Base.prototype.isMouseOverStates = function() {
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);
    return this.isFullyVisible() && x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_Base.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Window_Base.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

Window_Base.prototype.isFullyVisible = function() {
	if(Karryn.hasTachieCutInOnScreen()) return false;
    var node = this;
    while (node) {
        if (!this.visible) {
            return false;
        } else if (this.contentsOpacity <= 0) {
            return false;
        } else if (this.isClosed()) {
            return false;
        } else {
            node = node.parent;
        }
    }
    return true;
};

Window_Base.prototype.determineStateTooltipBattler = function() {
    this._battler = undefined;
};

//-----------------------------------------------------------------------------
// Window_Help
//
// The window for displaying the description of the selected item.
// Compatibility update with YEP_BattleEngineCore and YEP_BuffsStatesCore.

if (Imported.YEP_BattleEngineCore && Imported.YEP_BuffsStatesCore && Olivia.StateTooltipDisplay.Enabled.windowHelp) {

Olivia.StateTooltipDisplay.___Window_Help_clear___ = Window_Help.prototype.clear;
Window_Help.prototype.clear = function() {
    Olivia.StateTooltipDisplay.___Window_Help_clear___.call(this);
    this._battler = undefined;
};

Olivia.StateTooltipDisplay.___Window_Help_setBattler___ = Window_Help.prototype.setBattler;
Window_Help.prototype.setBattler = function(battler) {
    Olivia.StateTooltipDisplay.___Window_Help_setBattler___.call(this, battler);
    this._battler = battler;
};

Window_Help.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (!!this._battler && !!this.tooltipWindow() && this.isMouseOverStates()) {
        this.updateStateIconTooltipWindow();
    }
};

} // Imported.YEP_BattleEngineCore && Imported.YEP_BuffsStatesCore && Olivia.StateTooltipDisplay.Enabled.windowHelp

//-----------------------------------------------------------------------------
// Window_SkillStatus
//
// The window for displaying the skill user's status on the skill screen.

if (Olivia.StateTooltipDisplay.Enabled.windowSkillStatus) {

Olivia.StateTooltipDisplay.___Window_SkillStatus_setActor___ = Window_SkillStatus.prototype.setActor;
Window_SkillStatus.prototype.setActor = function(actor) {
    Olivia.StateTooltipDisplay.___Window_SkillStatus_setActor___.call(this, actor);
    this._battler = this._actor;
};

Olivia.StateTooltipDisplay.___Window_SkillStatus_update___ = Window_SkillStatus.prototype.update;
Window_SkillStatus.prototype.update = function() {
    Olivia.StateTooltipDisplay.___Window_SkillStatus_update___.call(this);
    if (!!this._battler && !!this.tooltipWindow() && this.isMouseOverStates()) {
        this.updateStateIconTooltipWindow();
    }
};

} // Olivia.StateTooltipDisplay.Enabled.windowSkillStatus

//-----------------------------------------------------------------------------
// Window_BattleSideStates
//
// Draws the actor's states
// Compatibility update with Olivia's Side Battle UI
/*
if (Olivia.OctoBattle.SideBattleUI && Olivia.OctoBattle.SideBattleUI.Enabled && Olivia.StateTooltipDisplay.Enabled.windowBattleSideStates) {

Olivia.StateTooltipDisplay.___Window_BattleSideBase_setNewActor___ = Window_BattleSideBase.prototype.refresh;
Window_BattleSideBase.prototype.setNewActor = function() {
    Olivia.StateTooltipDisplay.___Window_BattleSideBase_setNewActor___.call(this);
    this._battler = this._actor;
};

Olivia.StateTooltipDisplay.___Window_BattleSideBase_refresh___ = Window_BattleSideBase.prototype.refresh;
Window_BattleSideBase.prototype.refresh = function() {
    Olivia.StateTooltipDisplay.___Window_BattleSideBase_refresh___.call(this);
    this._battler = this._actor;
};

Olivia.StateTooltipDisplay.___Window_BattleSideStates_update___ = Window_BattleSideStates.prototype.update;
Window_BattleSideStates.prototype.update = function() {
    Olivia.StateTooltipDisplay.___Window_BattleSideStates_update___.call(this);
    if (!!this._battler && !!this.tooltipWindow() && this.isMouseOverStates()) {
        this.updateStateIconTooltipWindow();
    }
};

} // Olivia.OctoBattle.SideBattleUI && Olivia.OctoBattle.SideBattleUI.Enabled && Olivia.StateTooltipDisplay.Enabled.windowBattleSideStates
*/

//-----------------------------------------------------------------------------
// Window_BattleStatus
//
// The window for displaying the status of party members on the battle screen.
// Compatibility Update

if (Olivia.StateTooltipDisplay.Enabled) {

Olivia.StateTooltipDisplay.___Window_BattleStatus_update___ = Window_BattleStatus.prototype.update;
Window_BattleStatus.prototype.update = function() {
    Olivia.StateTooltipDisplay.___Window_BattleStatus_update___.call(this);
    if (!!this.tooltipWindow() && this.isMouseOverStates()) {
        this.determineStateTooltipBattler();
        if (!!this._battler) {
            this.updateStateIconTooltipWindow();
        }
    }
};

Window_BattleStatus.prototype.determineStateTooltipBattler = function() {
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);
    if (x <= this.standardPadding() || x >= this.width - this.standardPadding()) {
      this._battler = undefined;
    } else if (y <= this.standardPadding() || y >= this.height - this.standardPadding()) {
      this._battler = undefined;
    } else if (Imported.YEP_BattleStatusWindow) {
      var rectWidth = this.contentsWidth() / this.maxCols();
      var index = Math.floor((x - this.standardPadding()) / rectWidth);
      this._battler = $gameParty.members()[index];
    } else { // vanilla
      var rectHeight = this.basicAreaRect(index).height;
      var index = this.topIndex() + Math.floor((y - this.standardPadding()) / rectHeight);
      this._battler = $gameParty.members()[index];
    }
};

} // Olivia.StateTooltipDisplay.Enabled


























