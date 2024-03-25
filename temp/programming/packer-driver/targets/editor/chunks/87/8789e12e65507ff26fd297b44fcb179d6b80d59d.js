System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AudioClip, AudioSource, Toggle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, Audio;

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

      _cclegacy._RF.push({}, "4537asbQ1BDLIpj4yfJqgIQ", "Audio", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioClip', 'AudioSource', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Audio", Audio = (_dec = ccclass('Audio'), _dec2 = property(AudioClip), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Toggle), _dec(_class = (_class2 = (_class3 = class Audio extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clips", _descriptor, this);

          _initializerDefineProperty(this, "audioSource", _descriptor2, this);

          _initializerDefineProperty(this, "audioSource1", _descriptor3, this);

          _initializerDefineProperty(this, "turnOffMusicBtn", _descriptor4, this);

          _initializerDefineProperty(this, "turnOnMusicBtn", _descriptor5, this);

          _initializerDefineProperty(this, "btn", _descriptor6, this);

          this.onOffAudio = true;
          this.onOffMusic = true;
          this.clip = void 0;
        }

        onLoad() {
          Audio.instance = this;
        }

        onAudioQueue(index) {
          let clip = this.clips[index];
          this.audioSource1.playOneShot(clip);
        }

        onToggle() {
          // Check if the toggle is checked or unchecked
          if (this.btn.isChecked) {
            // If checked, play the background music
            this.turnOffMusicBtn.active = true;
            this.turnOnMusicBtn.active = false;
            this.audioSource.volume = 0;
          } else {
            // If unchecked, stop the background music
            this.turnOffMusicBtn.active = false;
            this.turnOnMusicBtn.active = true;
            this.audioSource.volume = 0.3;
          }
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioSource1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "turnOffMusicBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "turnOnMusicBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8789e12e65507ff26fd297b44fcb179d6b80d59d.js.map