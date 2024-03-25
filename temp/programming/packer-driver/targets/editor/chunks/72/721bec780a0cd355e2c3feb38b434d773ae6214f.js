System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, Node, UITransform, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, JoyStick;

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
      math = _cc.math;
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

      _export("JoyStick", JoyStick = (_dec = ccclass('JoyStick'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_class3 = class JoyStick extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "joyStick", _descriptor, this);

          _initializerDefineProperty(this, "Stick", _descriptor2, this);

          _initializerDefineProperty(this, "maxR", _descriptor3, this);

          _initializerDefineProperty(this, "plane", _descriptor4, this);

          this.stickPos = void 0;
          this.VecY = new Vec3(0, 0, 0);
          this.isStickMoving = false;
        }

        start() {}

        update(dt) {
          // If the stick is moving, update the plane's position
          if (this.isStickMoving) {
            let direction = this.stickPos.clone().subtract(this.VecY).normalize();
            let distance = math.Vec3.distance(this.VecY, this.stickPos);
            let posX = this.plane.position.x + direction.x * distance * 0.05;
            let posY = this.plane.position.y + direction.y * distance * 0.05;

            if (posX >= -630 && posX <= 630 && posY >= -330 && posY <= 330) {
              this.plane.setPosition(new Vec3(posX, posY));
            }
          }
        }

        onLoad() {
          JoyStick.instance = this;
          this.node.on(Node.EventType.TOUCH_MOVE, this.onStickMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onStickEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onStickEnd, this);
        }

        onStickMove(event, dt) {
          let wp = event.getUILocation();
          this.stickPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wp.x, wp.y));
          let stickMag = this.stickPos.length();

          if (stickMag <= 0) {
            return;
          }

          if (stickMag > this.maxR) {
            this.stickPos.x = this.stickPos.x * this.maxR / stickMag;
            this.stickPos.y = this.stickPos.y * this.maxR / stickMag;
          }

          this.Stick.setPosition(this.stickPos); // Set the flag to indicate that the stick is being moved

          this.isStickMoving = true;
        }

        onStickEnd(event) {
          // Reset the stick position
          this.Stick.setPosition(new Vec3(0, 0)); // Reset the flag to indicate that the stick has stopped moving

          this.isStickMoving = false;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "joyStick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Stick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxR", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "plane", [_dec4], {
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
//# sourceMappingURL=721bec780a0cd355e2c3feb38b434d773ae6214f.js.map