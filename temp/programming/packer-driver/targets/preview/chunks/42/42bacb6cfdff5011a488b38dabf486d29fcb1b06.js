System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AudioClip, AudioSource, Toggle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _crd, ccclass, property, Audio;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Toggle = _cc.Toggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c747bWTdRNBP4QVFIUTX5EF", "Audio", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioClip', 'AudioSource', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Audio", Audio = (_dec = ccclass('Audio'), _dec2 = property(AudioClip), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Toggle), _dec(_class = (_class2 = (_class3 = class Audio extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clips", _descriptor, this);

          _initializerDefineProperty(this, "audioSource", _descriptor2, this);

          _initializerDefineProperty(this, "audioSource1", _descriptor3, this);

          _initializerDefineProperty(this, "turnOffAudioBtn", _descriptor4, this);

          _initializerDefineProperty(this, "turnOnAudioBtn", _descriptor5, this);

          _initializerDefineProperty(this, "turnOffMusicBtn", _descriptor6, this);

          _initializerDefineProperty(this, "turnOnMusicBtn", _descriptor7, this);

          _initializerDefineProperty(this, "btn", _descriptor8, this);

          this.onOffAudio = true;
          this.onOffMusic = true;
          this.clip = void 0;
        }

        onLoad() {
          Audio.instance = this;
        }

        onAudioQueue(index) {
          var clip = this.clips[index];
          this.audioSource1.playOneShot(clip);
        }

        turnOffAudio() {
          this.onOffAudio = localStorage.getItem('soundState') === 'on';
          this.onOffAudio = !this.onOffAudio;

          if (!this.onOffAudio) {
            this.audioSource1.volume = 0;
            this.turnOffAudioBtn.active = true;
            this.turnOnAudioBtn.active = false;
            localStorage.getItem('soundState') === 'off';
          } else {
            this.audioSource1.volume = 0.3;
            this.turnOnAudioBtn.active = true;
            this.turnOffAudioBtn.active = false;
            localStorage.getItem('soundState') === 'on';
          }

          localStorage.setItem('soundState', this.onOffAudio ? 'on' : 'off');
        }

        turnOffMusic() {
          this.onOffMusic = localStorage.getItem('sound') === 'on';
          this.onOffMusic = !this.onOffMusic;

          if (!this.onOffMusic) {
            this.audioSource.volume = 0;
            this.turnOffMusicBtn.active = true;
            this.turnOnMusicBtn.active = false;
            localStorage.getItem('sound') === 'off';
          } else {
            this.audioSource.volume = 0.3;
            this.turnOnMusicBtn.active = true;
            this.turnOffMusicBtn.active = false;
            localStorage.getItem('sound') === 'on';
          }

          localStorage.setItem('sound', this.onOffAudio ? 'on' : 'off');
        }

        toggleBtn() {}

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioSource1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "turnOffAudioBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "turnOnAudioBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "turnOffMusicBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "turnOnMusicBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42bacb6cfdff5011a488b38dabf486d29fcb1b06.js.map