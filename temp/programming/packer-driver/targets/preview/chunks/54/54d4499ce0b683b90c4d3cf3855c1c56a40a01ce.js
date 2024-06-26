System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, director, Canvas, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Background;

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
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      director = _cc.director;
      Canvas = _cc.Canvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b34aM41gdLqKX3D/7eDttk", "Background", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'director', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Background", Background = (_dec = ccclass('Background'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class Background extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "BG1", _descriptor, this);

          _initializerDefineProperty(this, "BG2", _descriptor2, this);

          _initializerDefineProperty(this, "BG3", _descriptor3, this);

          this.bgHeight1 = void 0;
          this.bgHeight2 = void 0;
          this.bgHeight3 = void 0;
          this.tempStartLocation1 = new Vec3();
          this.tempStartLocation2 = new Vec3();
          this.tempStartLocation3 = new Vec3();
          this.gameSpeed = 50;
        }

        onLoad() {
          this.startUp();
        }

        startUp() {
          this.bgHeight1 = this.BG1.getComponent(UITransform).height;
          this.bgHeight2 = this.BG2.getComponent(UITransform).height;
          this.bgHeight3 = this.BG3.getComponent(UITransform).height;
          this.tempStartLocation1.y = 0;
          this.tempStartLocation2.y = this.bgHeight1;
          this.tempStartLocation3.y = this.bgHeight1 + this.bgHeight2;
          this.BG1.setPosition(this.tempStartLocation1);
          this.BG2.setPosition(this.tempStartLocation2);
          this.BG3.setPosition(this.tempStartLocation3);
        }

        update(deltaTime) {
          this.tempStartLocation1 = this.BG1.position;
          this.tempStartLocation2 = this.BG2.position;
          this.tempStartLocation3 = this.BG3.position;
          this.tempStartLocation1.y -= this.gameSpeed * deltaTime;
          this.tempStartLocation2.y -= this.gameSpeed * deltaTime;
          this.tempStartLocation3.y -= this.gameSpeed * deltaTime;
          var scene = director.getScene();
          var canvas = scene.getComponentInChildren(Canvas);

          if (this.tempStartLocation1.y <= 0 - this.bgHeight1) {
            this.tempStartLocation1.y = canvas.getComponent(UITransform).height;
          }

          if (this.tempStartLocation2.y <= 0 - this.bgHeight2) {
            this.tempStartLocation2.y = canvas.getComponent(UITransform).height;
          }

          if (this.tempStartLocation3.y <= 0 - this.bgHeight3) {
            this.tempStartLocation3.y = canvas.getComponent(UITransform).height;
          }

          this.BG1.setPosition(this.tempStartLocation1);
          this.BG2.setPosition(this.tempStartLocation2);
          this.BG3.setPosition(this.tempStartLocation3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BG1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BG2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BG3", [_dec4], {
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
//# sourceMappingURL=54d4499ce0b683b90c4d3cf3855c1c56a40a01ce.js.map