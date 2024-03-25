System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, Prefab, instantiate, Plane, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Bullet;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "890acjeGMxFtYrHxDRxLfU5", "Bullet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Bullet extends Component {
        constructor() {
          super(...arguments);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;

          _initializerDefineProperty(this, "destroyPre", _descriptor, this);
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        update(dt) {
          this.turn0();
          this.turn1();
          this.turn2();
        }

        turn0() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable) return;

          if (this.node.name == 'bullet0' || this.node.name == 'rocket') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY += this.bulletSpeed;

            if (this.posY >= 320) {
              this.scheduleOnce(() => {
                var _this$node;

                (_this$node = this.node) == null ? void 0 : _this$node.destroy();
              });
            }

            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }
        }

        turn1() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable) return;

          if (this.node.name == 'bullet1') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.1;
            this.posY += this.bulletSpeed;

            if (this.posY >= 320) {
              this.scheduleOnce(() => {
                var _this$node2;

                (_this$node2 = this.node) == null ? void 0 : _this$node2.destroy();
              });
            }

            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet2') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.1;
            this.posY += this.bulletSpeed;

            if (this.posY >= 320) {
              this.scheduleOnce(() => {
                var _this$node3;

                (_this$node3 = this.node) == null ? void 0 : _this$node3.destroy();
              });
            }

            var _posBullet = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet);
          }
        }

        turn2() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable) return;

          if (this.node.name == 'bullet3') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.2;
            this.posY += this.bulletSpeed;

            if (this.posY >= 320) {
              this.scheduleOnce(() => {
                var _this$node4;

                (_this$node4 = this.node) == null ? void 0 : _this$node4.destroy();
              });
            }

            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet4') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.2;
            this.posY += this.bulletSpeed;

            if (this.posY >= 320) {
              this.scheduleOnce(() => {
                var _this$node5;

                (_this$node5 = this.node) == null ? void 0 : _this$node5.destroy();
              });
            }

            var _posBullet2 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet2);
          }
        }

        destroyB() {
          var destroyPrefab = this.destroyPre;
          var prefabInstance = instantiate(destroyPrefab);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.node.worldPosition);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.name.startsWith('enemy') || otherCollider.name.startsWith('boss')) {
            this.destroyB();
            this.scheduleOnce(() => {
              var _selfCollider$node;

              (_selfCollider$node = selfCollider.node) == null ? void 0 : _selfCollider$node.destroy();
            });
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destroyPre", [_dec2], {
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
//# sourceMappingURL=cc7f05019fb6492a3cb3e48bce732bdcaf8b5235.js.map