System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, misc, Node, UITransform, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, JoyStick;

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
      misc = _cc.misc;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd695pTZApBmphzCy0Q36X4", "JoyStick", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'math', 'misc', 'Node', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoyStick", JoyStick = (_dec = ccclass('JoyStick'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = class JoyStick extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Stick", _descriptor, this);

          _initializerDefineProperty(this, "maxR", _descriptor2, this);

          this.Pos = void 0;
          this.VecY = new Vec3(1, 0, 0);
          this.angleDeg = void 0;

          _initializerDefineProperty(this, "plane", _descriptor3, this);

          this.moveSpeed = 200;
        }

        start() {}

        update(dt) {}

        onLoad(dt) {
          JoyStick.instance = this;
          this.Stick.setPosition(new Vec3(0, 0));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onStickMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onStickEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onStickEnd, this);
        }

        onStickMove(event) {
          var wp = event.getUILocation();
          this.Pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wp.x, wp.y));
          var stickMag = this.Pos.length();

          if (stickMag <= 0) {
            return;
          }

          if (stickMag > this.maxR) {
            this.Pos.x = this.Pos.x * this.maxR / stickMag;
            this.Pos.y = this.Pos.y * this.maxR / stickMag;
          }

          this.Stick.setPosition(this.Pos);
        }

        onStickEnd(event) {
          this.Stick.setPosition(new Vec3(0, 0));
        }

        countAngleStick(event, dt) {
          var angle = event.Stick.angle; // Góc quay của joystick

          var distance = event.Stick.distance; // Khoảng cách từ tâm của joystick đến điểm đang chạm
          // Tính toán vector di chuyển dựa trên góc và khoảng cách

          var radian = misc.degreesToRadians(angle); // Chuyển đổi góc sang radian

          var deltaX = Math.cos(radian) * distance; // Tính toán delta X

          var deltaY = Math.sin(radian) * distance; // Tính toán delta Y
          // Di chuyển đối tượng

          var posX = this.plane.position.x;
          var posY = this.plane.position.y;
          posX += deltaX * this.moveSpeed * dt;
          posY += deltaY * this.moveSpeed * dt;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Stick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxR", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "plane", [_dec3], {
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
//# sourceMappingURL=5dd97202cbe3d5eca238039599a503b0196e4ced.js.map