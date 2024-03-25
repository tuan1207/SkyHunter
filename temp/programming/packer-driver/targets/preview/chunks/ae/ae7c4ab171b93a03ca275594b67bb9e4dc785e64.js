System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, game, Node, Plane, GameCtrl, AudioToggle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ButtonPlayScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
  }

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
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }, function (_unresolved_3) {
      GameCtrl = _unresolved_3.GameCtrl;
    }, function (_unresolved_4) {
      AudioToggle = _unresolved_4.AudioToggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aae10xmeblBJp8ObWv1JtTa", "ButtonPlayScene", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'game', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonPlayScene", ButtonPlayScene = (_dec = ccclass('ButtonPlayScene'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Node), _dec(_class = (_class2 = class ButtonPlayScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pauseBtn", _descriptor, this);

          _initializerDefineProperty(this, "homeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "restartBtn", _descriptor3, this);

          _initializerDefineProperty(this, "resumeBtn", _descriptor4, this);

          _initializerDefineProperty(this, "pauseNode", _descriptor5, this);

          _initializerDefineProperty(this, "menuScene", _descriptor6, this);

          _initializerDefineProperty(this, "playScene", _descriptor7, this);
        }

        Pause() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.spawnEnabled = false;
          this.pauseNode.active = true;
          (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled = false;
          (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable = false;
        }

        Home() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          director.loadScene(this.menuScene);
        }

        Restart() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          game.restart();
        }

        Resume() {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(2);
          (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled = true;
          (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable = true;
          this.pauseNode.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pauseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "homeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "restartBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resumeBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pauseNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "menuScene", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playScene", [property], {
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
//# sourceMappingURL=ae7c4ab171b93a03ca275594b67bb9e4dc785e64.js.map