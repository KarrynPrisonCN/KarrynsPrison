var Remtairy = Remtairy || {};
Remtairy.Voices = Remtairy.Voices || {};

var VAR_VOICE_CACHE_LIMIT = 10;
var VAR_MOAN_CACHE_LIMIT = 10;

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

AudioManager._remVoiceVolume       = 100;
AudioManager._remCurrentVoice     = null;
AudioManager._remVoiceBuffer      = null;
AudioManager._remMoanVolume       = 100;
AudioManager._remCurrentMoan     = null;
AudioManager._remMoanBuffer      = null;

//////////////////
//////////////////
// Audio Manager
//////////////////
//////////////////

Object.defineProperty(AudioManager, 'voiceVolume', {
    get: function() {
        return this._remVoiceVolume;
    },
    set: function(value) {
        this._remVoiceVolume = value;
        this.updateVoiceParameters(this._remCurrentVoice);
    },
    configurable: true
});
Object.defineProperty(AudioManager, 'moanVolume', {
    get: function() {
        return this._remMoanVolume;
    },
    set: function(value) {
        this._remMoanVolume = value;
        this.updateVoiceParameters(this._remCurrentMoan);
    },
    configurable: true
});

//////////
// Voice
AudioManager.playVoice = function(voice, pos) {
	if(this.voiceVolume === 0) {
		this.stopVoice();
		return;
	}
	
	this.stopMoan();
	
    if(this.isCurrentVoice(voice)) {
		if(this.isVoicePlaying()) {
			this.updateVoiceParameters(voice);
		}
		else {
			this._remVoiceBuffer.stop();
			this.updateVoiceParameters(voice);
			this._remVoiceBuffer.play(false, pos || 0);
		}
    } 
	else {
        this.stopVoice();
        if(voice.name) {
			let folder = 'voice';
            this._remVoiceBuffer = this.createBuffer(folder, voice.name);
            this.updateVoiceParameters(voice);
            this._remVoiceBuffer.play(false, pos || 0);
        }
    }
    this.updateCurrentVoice(voice, pos);
	
	if(voice) {
        var i = voice.name;
        this._lastLoadedVoice = this._lastLoadedVoice || [];
        this._lastLoadedVoice.push(i);
        var t = VAR_VOICE_CACHE_LIMIT;
        while (this._lastLoadedVoice.length > t) {
            var i = this._lastLoadedVoice.shift();
            if (this._lastLoadedVoice.contains(i)) continue;
            if (this._audioCacheVoice[i]) {
                this._audioCacheVoice[i].clear();
                this._audioCacheVoice[i] = undefined
            }
        }
    }
};



AudioManager.replayVoice = function(voice) {
    if(this.isCurrentVoice(voice)) {
        this.updateVoiceParameters(voice);
    } 
	else {
        this.playVoice(voice, voice.pos);
        if(this._remVoiceBuffer) {
            this._remVoiceBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

AudioManager.isCurrentVoice = function(voice) {
    return(this._remCurrentVoice && this._remVoiceBuffer &&
            this._remCurrentVoice.name === voice.name);
};

AudioManager.updateVoiceParameters = function(voice) {
    this.updateBufferParameters(this._remVoiceBuffer, this._remVoiceVolume, voice);
};

AudioManager.updateCurrentVoice = function(voice, pos) {
    this._remCurrentVoice = {
        name: voice.name,
        volume: voice.volume,
        pitch: voice.pitch,
        pan: voice.pan,
        pos: pos
    };
};

AudioManager.stopVoice = function() {
    if(this._remVoiceBuffer) {
        this._remVoiceBuffer.stop();
        this._remVoiceBuffer = null;
        this._remCurrentVoice = null;
    }
};

AudioManager.fadeOutVoice = function(duration) {
    if(this._remVoiceBuffer && this._remCurrentVoice) {
        this._remVoiceBuffer.fadeOut(duration);
        this._remCurrentVoice = null;
    }
};

AudioManager.fadeInVoice = function(duration) {
    if(this._remVoiceBuffer && this._remCurrentVoice) {
        this._remVoiceBuffer.fadeIn(duration);
    }
};

AudioManager.isVoicePlaying = function() {
    return this._remVoiceBuffer.isPlaying();
};

//////////
// Moan
AudioManager.playMoan = function(moan, pos) {
	if(this.moanVolume === 0) {
		this.stopMoan();
		return;
	}
	
    if(this._remVoiceBuffer && this.isVoicePlaying()) {
		this.stopMoan();
		return;
	}
	
	if(this.isCurrentMoan(moan)) {
        this.updateMoanParameters(moan);
    } 
	else {
        this.stopMoan();
        if(moan.name) {
			let folder = 'moan';
            this._remMoanBuffer = this.createBuffer(folder, moan.name);
            this.updateMoanParameters(moan);
            this._remMoanBuffer.play(true, pos || 0);
        }
    }
    this.updateCurrentMoan(moan, pos);
	
	if(moan) {
        var i = moan.name;
        this._lastLoadedMoan = this._lastLoadedMoan || [];
        this._lastLoadedMoan.push(i);
        var t = VAR_MOAN_CACHE_LIMIT;
        while (this._lastLoadedMoan.length > t) {
            var i = this._lastLoadedMoan.shift();
            if (this._lastLoadedMoan.contains(i)) continue;
            if (this._audioCacheMoan[i]) {
                this._audioCacheMoan[i].clear();
                this._audioCacheMoan[i] = undefined
            }
        }
    }
};



AudioManager.replayMoan = function(moan) {
    if(this.isCurrentMoan(moan)) {
        this.updateMoanParameters(moan);
    } 
	else {
        this.playMoan(moan, moan.pos);
        if(this._remMoanBuffer) {
            this._remMoanBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

AudioManager.isCurrentMoan = function(moan) {
    return(this._remCurrentMoan && this._remMoanBuffer &&
            this._remCurrentMoan.name === moan.name);
};

AudioManager.updateMoanParameters = function(moan) {
    this.updateBufferParameters(this._remMoanBuffer, this._remMoanVolume, moan);
};

AudioManager.updateCurrentMoan = function(moan, pos) {
    this._remCurrentMoan = {
        name: moan.name,
        volume: moan.volume,
        pitch: moan.pitch,
        pan: moan.pan,
        pos: pos
    };
};

AudioManager.stopMoan = function() {
    if(this._remMoanBuffer) {
        this._remMoanBuffer.stop();
        this._remMoanBuffer = null;
        this._remCurrentMoan = null;
    }
};

AudioManager.fadeOutMoan = function(duration) {
    if(this._remMoanBuffer && this._remCurrentMoan) {
        this._remMoanBuffer.fadeOut(duration);
        this._remCurrentMoan = null;
    }
};

AudioManager.fadeInMoan = function(duration) {
    if(this._remMoanBuffer && this._remCurrentMoan) {
        this._remMoanBuffer.fadeIn(duration);
    }
};

Remtairy.Voices.AudioManager_stopAll = AudioManager.stopAll;
AudioManager.stopAll = function() {
    Remtairy.Voices.AudioManager_stopAll.call(this);
	this.stopVoice();
	this.stopMoan();
};

Remtairy.Voices.AudioManager_checkErrors = AudioManager.checkErrors;
AudioManager.checkErrors = function() {
	Remtairy.Voices.AudioManager_checkErrors.call(this);
	this.checkWebAudioError(this._remVoiceBuffer);
	this.checkWebAudioError(this._remMoanBuffer);
};

AudioManager.playEnemyVoiceSe = function(enemyVoice) {
    if(enemyVoice.name) {
        this._seBuffers = this._seBuffers.filter(function(audio) {
            return audio.isPlaying();
        });
        var buffer = this.createBuffer('enemy', enemyVoice.name);
        this.updateSeParameters(buffer, enemyVoice);
        buffer.play(false);
        this._seBuffers.push(buffer);
    }
	
	if(enemyVoice) {
        var a = enemyVoice.name;
        this._lastLoadedEnemy = this._lastLoadedEnemy || [];
        this._lastLoadedEnemy.push(a);
        var i = Imported.Irina_AntiAudioDelay.CacheLimitSe;
        while (this._lastLoadedEnemy.length > i) {
            var a = this._lastLoadedEnemy.shift();
            if (this._lastLoadedEnemy.contains(a)) continue;
            if (this._audioCacheEnemy[a]) {
                this._audioCacheEnemy[a].clear();
                this._audioCacheEnemy[a] = undefined
            }
        }
    }
};

/////////
// Battle Manager

BattleManager.playEnemyVoice_Talk = function(enemy, enemyVolume) {
	let enemyVoiceArray = [];
	let enemyType = enemy.enemyType();
	if(!enemyVolume) enemyVolume = 90;
	
	if(enemyType.contains('thug')) {
		enemyVoiceArray.push('voice_thug_hehe1');
		enemyVoiceArray.push('voice_thug_hehe2');
		enemyVoiceArray.push('voice_thug_hey1');
		enemyVoiceArray.push('voice_thug_hey2');
		enemyVoiceArray.push('voice_thug_hey3');
	}
	else if(enemyType.contains('goblin')) {
		enemyVoiceArray.push('voice_goblin_hehe1');
		enemyVoiceArray.push('voice_goblin_hehe2');
		enemyVoiceArray.push('voice_goblin_hehe3');
		enemyVoiceArray.push('voice_goblin_hehe4');
	}
	else if(enemyType.contains('lizardman')) {
		enemyVoiceArray.push('voice_lizardman_hey1');
		enemyVoiceArray.push('voice_lizardman_hey2');
		enemyVoiceArray.push('voice_lizardman_hey3');
	}
	else if(enemyType.contains('orc')) {
		enemyVoiceArray.push('voice_orc_hehe1');
		enemyVoiceArray.push('voice_orc_hehe2');
		enemyVoiceArray.push('voice_orc_hey1');
		enemyVoiceArray.push('voice_orc_skill1');
	}
	else {
		enemyVoiceArray.push('voice_prisoner_hehe1');
		enemyVoiceArray.push('voice_prisoner_hehe2');
		enemyVoiceArray.push('voice_prisoner_hehe3');
		enemyVoiceArray.push('voice_prisoner_hehe4');
		enemyVoiceArray.push('voice_prisoner_hehe5');
		enemyVoiceArray.push('voice_prisoner_hey3');
		enemyVoiceArray.push('voice_prisoner_hey4');
		enemyVoiceArray.push('voice_prisoner_hey5');
		enemyVoiceArray.push('voice_prisoner_oh2');
	}
	
	if(enemyVoiceArray.length > 0) {
		let enemyFileName = enemyVoiceArray[Math.randomInt(enemyVoiceArray.length)];
		AudioManager.playEnemyVoiceSe({name:enemyFileName, pan:0, pitch:100, volume:enemyVolume});
	}
};

BattleManager.playEnemyVoice_Skill = function(enemy, enemyVolume) {
	let enemyVoiceArray = [];
	let enemyType = enemy.enemyType();
	if(!enemyVolume) enemyVolume = 90;
	
	if(enemyType.contains('thug')) {
		enemyVoiceArray.push('voice_thug_hey3');
		enemyVoiceArray.push('voice_thug_hey4');
		enemyVoiceArray.push('voice_thug_hey5');
	}
	else if(enemyType.contains('goblin')) {
		enemyVoiceArray.push('voice_goblin_skill1');
		enemyVoiceArray.push('voice_goblin_skill2');
		enemyVoiceArray.push('voice_goblin_skill3');
		enemyVoiceArray.push('voice_goblin_skill4');
	}
	else if(enemyType.contains('lizardman')) {
		enemyVoiceArray.push('voice_lizardman_skill1');
		enemyVoiceArray.push('voice_lizardman_skill2');
		enemyVoiceArray.push('voice_lizardman_skill3');
		enemyVoiceArray.push('voice_lizardman_skill4');
	}
	else if(enemyType.contains('orc')) {
		enemyVoiceArray.push('voice_orc_skill2');
		enemyVoiceArray.push('voice_orc_skill3');
		enemyVoiceArray.push('voice_orc_skill4');
	}
	else if(enemyType.contains('yeti')) {
		enemyVoiceArray.push('voice_yeti_skill1');
		enemyVoiceArray.push('voice_yeti_skill2');
		enemyVoiceArray.push('voice_yeti_skill3');
		enemyVoiceArray.push('voice_yeti_skill4');
	}
	else if(enemyType.contains('werewolf')) {
		enemyVoiceArray.push('voice_werewolf_skill1');
		enemyVoiceArray.push('voice_werewolf_skill2');
		enemyVoiceArray.push('voice_werewolf_skill3');
	}
	else if(enemyType.contains('slime')) {
		
	}
	else {
		enemyVoiceArray.push('voice_prisoner_hehe1');
		enemyVoiceArray.push('voice_prisoner_hehe2');
		enemyVoiceArray.push('voice_prisoner_hehe3');
		enemyVoiceArray.push('voice_prisoner_hehe4');
		enemyVoiceArray.push('voice_prisoner_hehe5');
		enemyVoiceArray.push('voice_prisoner_hey3');
		enemyVoiceArray.push('voice_prisoner_hey4');
		enemyVoiceArray.push('voice_prisoner_hey5');
		enemyVoiceArray.push('voice_prisoner_oh2');
	}
	
	if(enemyVoiceArray.length > 0) {
		let enemyFileName = enemyVoiceArray[Math.randomInt(enemyVoiceArray.length)];
		AudioManager.playEnemyVoiceSe({name:enemyFileName, pan:0, pitch:100, volume:enemyVolume});
	}
};

BattleManager.playEnemyVoice_SideJob = function(enemy, enemyVolume) {
	let enemyVoiceArray = [];
	let enemyType = enemy.enemyType();
	if(!enemyVolume) enemyVolume = 90;
	
	if(enemyType.contains('thug')) {
		enemyVoiceArray.push('voice_thug_hey1');
		enemyVoiceArray.push('voice_thug_hey2');
		enemyVoiceArray.push('voice_thug_hey3');
	}
	else if(enemyType.contains('goblin')) {
		enemyVoiceArray.push('voice_goblin_hey1');
		enemyVoiceArray.push('voice_goblin_hey2');
		enemyVoiceArray.push('voice_goblin_hey3');
	}
	else if(enemyType.contains('lizardman')) {
		enemyVoiceArray.push('voice_lizardman_hey1');
		enemyVoiceArray.push('voice_lizardman_hey2');
		enemyVoiceArray.push('voice_lizardman_hey3');
	}
	else if(enemyType.contains('orc')) {
		enemyVoiceArray.push('voice_orc_hehe1');
		enemyVoiceArray.push('voice_orc_hey1');
		enemyVoiceArray.push('voice_orc_skill1');
		enemyVoiceArray.push('voice_orc_skill4');
	}
	else {
		enemyVoiceArray.push('voice_prisoner_hey1');
		enemyVoiceArray.push('voice_prisoner_hey2');
		enemyVoiceArray.push('voice_prisoner_hey3');
		enemyVoiceArray.push('voice_prisoner_hey4');
		enemyVoiceArray.push('voice_prisoner_hey5');
		enemyVoiceArray.push('voice_prisoner_oh2');
	}
	
	if(enemyVoiceArray.length > 0) {
		let enemyFileName = enemyVoiceArray[Math.randomInt(enemyVoiceArray.length)];
		AudioManager.playEnemyVoiceSe({name:enemyFileName, pan:0, pitch:100, volume:enemyVolume});
	}
};

///////////
// Window Message
Remtairy.Voices.Window_Message_updateInput = Window_Message.prototype.updateInput;
Window_Message.prototype.updateInput = function() {
	//if(this.isAnySubWindowActive()) return true;
	if(this.pause && !ConfigManager.keepVoicePlayback) {
		if(this.isTriggered()) {
			AudioManager.stopVoice();
		}
	}
    return Remtairy.Voices.Window_Message_updateInput.call(this);
};