System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Prefab, instantiate, Collider2D, Contact2DType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Enemy;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee1b0J9XmNHm6yoFAtf/nkR", "Enemy", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Vec3', 'Node', 'Prefab', 'instantiate', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Enemy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "destroyPre", _descriptor, this);

          this.bulletSpeed = 5;
          this.posX = void 0;
          this.posY = void 0;
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          console.log(this.node.position);
        }

        update(deltaTime) {
          this.enemyMove();
        }

        destroyB() {
          var destroyPrefab = this.destroyPre;
          var prefabInstance = instantiate(destroyPrefab);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.node.worldPosition);
        }

        onBeginContact(selfCollider, otherCollider, contact) {}

        onEndContact(selfCollider, otherCollider, contact) {}

        enemyMove() {
          if (this.node.name.endsWith('_0')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY -= this.bulletSpeed * 0.75;
            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name.endsWith('_1')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.5;

            var _posBullet = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet);
          }

          if (this.node.name.endsWith('_2')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posY > 40) {
              this.posY -= this.bulletSpeed * 0.75;
            } else {
              this.posX += this.bulletSpeed;
            }

            var _posBullet2 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet2);
          }

          if (this.node.name.endsWith('_3')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;

            var _posBullet3 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet3);
          }

          if (this.node.name.endsWith('_4')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posY > 40) {
              this.posY -= this.bulletSpeed * 0.75;
            } else {
              this.posX -= this.bulletSpeed;
            }

            var _posBullet4 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet4);
          }

          if (this.node.name.endsWith('_5')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posX < -360) {
              this.posX += this.bulletSpeed * 0.75;
            } else {
              this.posX += this.bulletSpeed * 0.75;
              this.posY -= this.bulletSpeed * 0.5;
            }

            var _posBullet5 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet5);
          }

          if (this.node.name.endsWith('_6')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posY > 200) {
              this.posY -= this.bulletSpeed * 0.75;
            } else {
              return;
            }

            var _posBullet6 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet6);
          }

          if (this.node.name.endsWith('_7')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed;

            var _posBullet7 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet7);
          }

          if (this.node.name.endsWith('_8')) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY -= this.bulletSpeed;

            var _posBullet8 = new Vec3(this.posX, this.posY);

            this.node.setPosition(_posBullet8);
          } // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }

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
//# sourceMappingURL=23b964af3a978bc45841039f84d483e88db18760.js.map