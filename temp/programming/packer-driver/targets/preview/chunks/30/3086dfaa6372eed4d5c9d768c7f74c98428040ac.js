System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, instantiate, Prefab, Plane, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BulletE;

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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fafbq70LBGfY+ILtrzQTvT", "BulletE", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'math', 'Vec3', 'Collider2D', 'Contact2DType', 'instantiate', 'IPhysics2DContact', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletE", BulletE = (_dec = ccclass('BulletE'), _dec2 = property(Prefab), _dec(_class = (_class2 = class BulletE extends Component {
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

        update(deltaTime) {
          this.bulletB1();
          this.bulletB3();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name.startsWith('Plane')) {
            this.destroyB();
            this.scheduleOnce(() => {
              var _selfCollider$node;

              (_selfCollider$node = selfCollider.node) == null ? void 0 : _selfCollider$node.destroy();
            });
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        bulletB1() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable) return;

          if (this.posY < -360) {
            this.node.destroy();
          }

          if (this.node.name.endsWith('1_0')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY += this.bulletSpeed;
            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name.endsWith('1_1')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.39;
            this.posY += this.bulletSpeed;

            var _posBullet = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet);
          }

          if (this.node.name.endsWith('1_2')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;
            this.posY += this.bulletSpeed * 0.75;

            var _posBullet2 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet2);
          }

          if (this.node.name.endsWith('1_3')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed;
            this.posY += this.bulletSpeed * 0.39;

            var _posBullet3 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet3);
          }

          if (this.node.name.endsWith('1_4')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed;

            var _posBullet4 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet4);
          }

          if (this.node.name.endsWith('1_5')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.39;
            this.posY -= this.bulletSpeed;

            var _posBullet5 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet5);
          }

          if (this.node.name.endsWith('1_6')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.75;

            var _posBullet6 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet6);
          }

          if (this.node.name.endsWith('1_7')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed;
            this.posY -= this.bulletSpeed * 0.39;

            var _posBullet7 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet7);
          }

          if (this.node.name.endsWith('1_8')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY -= this.bulletSpeed;

            var _posBullet8 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet8);
          }

          if (this.node.name.endsWith('1_9')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.39;
            this.posY -= this.bulletSpeed;

            var _posBullet9 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet9);
          }

          if (this.node.name.endsWith('1_10')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.75;

            var _posBullet10 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet10);
          }

          if (this.node.name.endsWith('1_11')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed;
            this.posY -= this.bulletSpeed * 0.39;

            var _posBullet11 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet11);
          }

          if (this.node.name.endsWith('1_12')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed;

            var _posBullet12 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet12);
          }

          if (this.node.name.endsWith('1_13')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed;
            this.posY += this.bulletSpeed * 0.39;

            var _posBullet13 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet13);
          }

          if (this.node.name.endsWith('1_14')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.75;
            this.posY += this.bulletSpeed * 0.75;

            var _posBullet14 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet14);
          }

          if (this.node.name.endsWith('1_15')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.39;
            this.posY += this.bulletSpeed;

            var _posBullet15 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet15);
          }
        }

        bulletB3() {
          if (this.posY < -360) {
            this.node.destroy();
          }

          if (this.node.name.endsWith('3_0') || this.node.name.endsWith('3_5')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.75;
            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name.endsWith('3_1') || this.node.name.endsWith('3_6')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.39;
            this.posY -= this.bulletSpeed;

            var _posBullet16 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet16);
          }

          if (this.node.name.endsWith('3_2') || this.node.name.endsWith('3_7')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY -= this.bulletSpeed;

            var _posBullet17 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet17);
          }

          if (this.node.name.endsWith('3_3') || this.node.name.endsWith('3_8')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.39;
            this.posY -= this.bulletSpeed;

            var _posBullet18 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet18);
          }

          if (this.node.name.endsWith('3_4') || this.node.name.endsWith('3_9')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.75;

            var _posBullet19 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet19);
          }
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
//# sourceMappingURL=3086dfaa6372eed4d5c9d768c7f74c98428040ac.js.map