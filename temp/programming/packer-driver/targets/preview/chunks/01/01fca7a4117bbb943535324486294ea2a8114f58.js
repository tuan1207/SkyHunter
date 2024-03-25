System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, director, screen, AudioToggle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, ButtonMenuScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioToggle(extras) {
    _reporterNs.report("AudioToggle", "./AudioToggle", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Button = _cc.Button;
      director = _cc.director;
      screen = _cc.screen;
    }, function (_unresolved_2) {
      AudioToggle = _unresolved_2.AudioToggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "007a6J78I5EgZzds4YMKywl", "ButtonMenuScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'director', 'game', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonMenuScene", ButtonMenuScene = (_dec = ccclass('ButtonMenuScene'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Node), _dec(_class = (_class2 = class ButtonMenuScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "playBtn", _descriptor, this);

          _initializerDefineProperty(this, "settingBtn", _descriptor2, this);

          _initializerDefineProperty(this, "moreGameBtn", _descriptor3, this);

          _initializerDefineProperty(this, "fullScreenBtn", _descriptor4, this);

          _initializerDefineProperty(this, "backBtn", _descriptor5, this);

          _initializerDefineProperty(this, "settingNode", _descriptor6, this);

          _initializerDefineProperty(this, "url", _descriptor7, this);

          _initializerDefineProperty(this, "playScene", _descriptor8, this);
        }

        PLay() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          director.loadScene(this.playScene);
        }

        Setting() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          this.settingNode.active = true;
        }

        moreGame() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);

          if (this.url !== '') {
            window.open(this.url, '_blank');
          } else {
            console.error('URL is not set!');
          }
        }

        Back() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          this.settingNode.active = false;
        }

        fullScreen() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          screen.requestFullScreen();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settingBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moreGameBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fullScreenBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "backBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "settingNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "url", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'https://www.marketjs.com/game/links/mobile/';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playScene", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01fca7a4117bbb943535324486294ea2a8114f58.js.map