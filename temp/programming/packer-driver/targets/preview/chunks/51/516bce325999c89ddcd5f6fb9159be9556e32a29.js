System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, Node, Toggle, sys, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _crd, ccclass, property, AudioToggle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df3f7/Kt7VLLog79WV3l0p6", "AudioToggle", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'Node', 'Toggle', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioToggle", AudioToggle = (_dec = ccclass('AudioToggle'), _dec2 = property(AudioClip), _dec3 = property(Toggle), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(AudioSource), _dec7 = property(Toggle), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(AudioSource), _dec(_class = (_class2 = (_class3 = class AudioToggle extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clips", _descriptor, this);

          _initializerDefineProperty(this, "audioTog", _descriptor2, this);

          _initializerDefineProperty(this, "turnOnA", _descriptor3, this);

          _initializerDefineProperty(this, "turnOffA", _descriptor4, this);

          _initializerDefineProperty(this, "audioSrc", _descriptor5, this);

          _initializerDefineProperty(this, "musicTog", _descriptor6, this);

          _initializerDefineProperty(this, "turnOnM", _descriptor7, this);

          _initializerDefineProperty(this, "turnOffM", _descriptor8, this);

          _initializerDefineProperty(this, "musicSrc", _descriptor9, this);

          this.audioStatus = true;
          this.musicStatus = true;
        }

        onLoad() {
          AudioToggle.instance = this;
          this.audioTogFunc();
          this.musicTogFunc();
        }

        onAudioQueue(index) {
          var clip = this.clips[index];
          this.audioSrc.playOneShot(clip);
        }

        audioTogFunc() {
          this.onAudioQueue(2);
          var savedAStatus = sys.localStorage.getItem('audioStatus');

          if (savedAStatus === 'on') {
            this.turnOnA.active = true;
            this.turnOffA.active = false;
            this.audioSrc.volume = 0.3;
          } else if (savedAStatus === 'off') {
            this.turnOnA.active = false;
            this.turnOffA.active = true;
            this.audioSrc.volume = 0;
          }

          this.audioStatus = !this.audioTog.isChecked;
          sys.localStorage.setItem('audioStatus', this.audioStatus ? 'on' : 'off');
        }

        musicTogFunc() {
          this.onAudioQueue(2);
          var savedMStatus = sys.localStorage.getItem('musicStatus');

          if (savedMStatus === 'on') {
            this.turnOnM.active = true;
            this.turnOffM.active = false;
            this.musicSrc.volume = 0;
          } else if (savedMStatus === 'off') {
            this.turnOnM.active = false;
            this.turnOffM.active = true;
            this.musicSrc.volume = 0.3;
          }

          this.musicStatus = !this.musicTog.isChecked;
          sys.localStorage.setItem('musicStatus', this.musicStatus ? 'on' : 'off');
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioTog", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "turnOnA", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "turnOffA", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioSrc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "musicTog", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "turnOnM", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "turnOffM", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "musicSrc", [_dec10], {
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
//# sourceMappingURL=516bce325999c89ddcd5f6fb9159be9556e32a29.js.map