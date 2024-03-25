System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Collider2D, Contact2DType, Vec3, instantiate, Plane, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BulletEN;

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
      Prefab = _cc.Prefab;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7de2ZwlgRGSrbND6pkXWBE", "BulletEN", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'math', 'Vec3', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletEN", BulletEN = (_dec = ccclass('BulletEN'), _dec2 = property(Prefab), _dec(_class = (_class2 = class BulletEN extends Component {
        constructor() {
          super(...arguments);
          this.bulletSpeed = 5;
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

        onLoad() {
          setTimeout(() => {
            this.node.destroy();
          }, 3000);
        }

        update(deltaTime) {
          this.bulletE();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name.startsWith('Plane')) {
            this.destroyB();
            this.scheduleOnce(() => {
              var _selfCollider$node;

              (_selfCollider$node = selfCollider.node) == null ? void 0 : _selfCollider$node.destroy();
            }, 1);
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        bulletE() {
          var direction = (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.Plane.position.clone().subtract(this.node.position).normalize();
          var posX = this.node.position.x + direction.x * this.bulletSpeed;
          var posY = this.node.position.y + direction.y * this.bulletSpeed;
          this.node.setPosition(new Vec3(posX, posY));
        }

        destroyB() {
          var destroyPrefab = this.destroyPre;
          var prefabInstance = instantiate(destroyPrefab);
          prefabInstance.parent = this.node;
          prefabInstance.setWorldPosition(this.node.worldPosition);
        }

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
//# sourceMappingURL=072c85a8285816a614773e9aa01bac84602cb199.js.map