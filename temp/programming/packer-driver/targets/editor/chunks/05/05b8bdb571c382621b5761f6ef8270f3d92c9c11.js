System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, instantiate, Prefab, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BulletE;

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
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fafbq70LBGfY+ILtrzQTvT", "BulletE", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Collider2D', 'Contact2DType', 'instantiate', 'IPhysics2DContact', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletE", BulletE = (_dec = ccclass('BulletE'), _dec2 = property(Prefab), _dec(_class = (_class2 = class BulletE extends Component {
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;

          _initializerDefineProperty(this, "destroyPre", _descriptor, this);
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        update(deltaTime) {
          this.bulletMove();
        }

        bulletMove() {
          if (this.node.name.endsWith('_0')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY += this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name.endsWith('_0')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY += this.bulletSpeed * 0.5;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          } // if(this.node.name.endsWith('_1')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_2')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posX += this.bulletSpeed * 0.75;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_3')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_4')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_5')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_6')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_7')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_8')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_9')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_10')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_11')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_12')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_13')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_14')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_15')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY += this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }

        }

        destroyB() {
          let destroyPrefab = this.destroyPre;
          let prefabInstance = instantiate(destroyPrefab);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.node.worldPosition);
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destroyPre", [_dec2], {
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
//# sourceMappingURL=05b8bdb571c382621b5761f6ef8270f3d92c9c11.js.map