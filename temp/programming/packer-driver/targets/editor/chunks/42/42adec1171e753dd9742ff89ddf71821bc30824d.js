System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, Prefab, instantiate, Collider2D, Contact2DType, GameCtrl, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "destroyPre", _descriptor, this);

          this.bulletSpeed = 2.5;
          this.posX = void 0;
          this.posY = void 0;
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.enemyMove();
        }

        update(deltaTime) {}

        destroyB() {
          let destroyPrefab = this.destroyPre;
          let prefabInstance = instantiate(destroyPrefab);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.node.worldPosition);
        }

        onBeginContact(selfCollider, otherCollider, contact) {}

        onEndContact(selfCollider, otherCollider, contact) {}

        enemyMove() {
          if (this.node.name.endsWith('_0')) {
            // this.posX = this.node.position.x;
            // this.posY = this.node.position.y;
            // this.posY -= this.bulletSpeed;
            // let posBullet = new Vec3(this.posX, this.posY);
            // this.node.setPosition(posBullet);
            let randomPosition = new Vec3((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.node.position.x, -400, 0);
            tween(this.node).to(this.bulletSpeed, {
              position: randomPosition
            }).call(() => {
              this.enemyMove();
            }).start();
          } // if(this.node.name.endsWith('_1')){
          //     let posX = this.node.position.x;
          //     let posY = this.node.position.y;
          //     posX += this.bulletSpeed;
          //     // posY -= this.bulletSpeed * 0.5;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
          //     this.posX = this.node.position.x;
          //     this.posY = this.node.position.y;
          //     this.posY -= this.bulletSpeed;
          //     let posBullet = new Vec3(this.posX, this.posY);
          //     this.node.setPosition(posBullet);
          // }
          // if(this.node.name.endsWith('_0')){
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
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42adec1171e753dd9742ff89ddf71821bc30824d.js.map