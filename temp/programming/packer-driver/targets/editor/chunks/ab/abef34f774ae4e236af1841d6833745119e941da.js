System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Prefab, instantiate, Collider2D, Contact2DType, GameCtrl, AudioToggle, ButtonPlayScene, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioToggle(extras) {
    _reporterNs.report("AudioToggle", "./AudioToggle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonPlayScene(extras) {
    _reporterNs.report("ButtonPlayScene", "./ButtonPlayScene", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }, function (_unresolved_3) {
      AudioToggle = _unresolved_3.AudioToggle;
    }, function (_unresolved_4) {
      ButtonPlayScene = _unresolved_4.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee1b0J9XmNHm6yoFAtf/nkR", "Enemy", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Vec3', 'Node', 'Prefab', 'instantiate', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_class3 = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "destroyPre", _descriptor, this);

          this.bulletSpeed = 5;
          this.posX = void 0;
          this.posY = void 0;
          this.contE2 = [];
          this.contE3 = [];
        }

        onLoad() {
          Enemy.instance = this;
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        update(deltaTime) {
          this.enemyMove();
        }

        destroyB() {
          let destroyPrefab = this.destroyPre;
          let prefabInstance = instantiate(destroyPrefab);
          prefabInstance.parent = this.node;
          prefabInstance.setWorldPosition(this.node.worldPosition);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(7);

          if (selfCollider.node.name.startsWith('enemy1')) {
            this.scheduleOnce(() => {
              selfCollider.node.destroy();
            });
            this.scheduleOnce(() => {
              (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                error: Error()
              }), GameCtrl) : GameCtrl).instance.countPoint(100);
            });
          }

          if (selfCollider.node.name.startsWith('enemy2')) {
            this.scheduleOnce(() => {
              this.contE2.push(otherCollider.node);
            });

            if (this.contE2.length >= 1) {
              this.scheduleOnce(() => {
                selfCollider.node.destroy();
              });
              this.scheduleOnce(() => {
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.countPoint(100);
              });
            }
          }

          if (selfCollider.node.name.startsWith('enemy3')) {
            this.scheduleOnce(() => {
              this.contE3.push(otherCollider.node);
            });

            if (this.contE3.length >= 2) {
              this.scheduleOnce(() => {
                selfCollider.node.destroy();
              });
              this.scheduleOnce(() => {
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.countPoint(100);
              });
            }
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        enemyMove() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable) return;

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 1) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY -= this.bulletSpeed * 0.75;

            if (this.posY < 0) {
              this.node.destroy();
            }

            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 2) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.5;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 3) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posY > 40) {
              this.posY -= this.bulletSpeed * 0.75;
            } else {
              this.posX += this.bulletSpeed;
            }

            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 4) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.75;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 5) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posY > 40) {
              this.posY -= this.bulletSpeed * 0.75;
            } else {
              this.posX -= this.bulletSpeed;
            }

            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 6) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posX < -360) {
              this.posX += this.bulletSpeed * 0.75;
            } else {
              this.posX += this.bulletSpeed * 0.75;
              this.posY -= this.bulletSpeed * 0.5;
            }

            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 7) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posY > 200) {
              this.posY -= this.bulletSpeed * 0.75;
            } else {
              return;
            }

            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 8) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 9) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;

            if (this.posX > 360) {
              this.posX -= this.bulletSpeed * 0.75;
            } else {
              this.posX -= this.bulletSpeed * 0.75;
              this.posY -= this.bulletSpeed * 0.5;
            }

            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.countElement === 10) {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.75;
            this.posY -= this.bulletSpeed * 0.5;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destroyPre", [_dec2], {
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
//# sourceMappingURL=abef34f774ae4e236af1841d6833745119e941da.js.map