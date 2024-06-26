System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, math, Vec3, tween, Prefab, instantiate, macro, Animation, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Boss;

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7dfc9Lr8ZGVqpPMGWtl8je", "Boss", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'math', 'Vec3', 'tween', 'IPhysics2DContact', 'Prefab', 'instantiate', 'macro', 'Animation', 'Scene']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Animation), _dec(_class = (_class2 = class Boss extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listBulletB1", _descriptor, this);

          _initializerDefineProperty(this, "listBulletB3", _descriptor2, this);

          _initializerDefineProperty(this, "laserBullet", _descriptor3, this);

          _initializerDefineProperty(this, "speed", _descriptor4, this);

          this.randomPosition = void 0;
          this.bulletCont = [];
          this.listPos = [new Vec3(590, 360), //turn 1, 3, 5, 7
          new Vec3(690, 360) //turn 2
          ];
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.moveRandom();
          this.schedule(this.spawnBullet, 2.5, macro.REPEAT_FOREVER, 0);
        }

        update(deltaTime) {}

        moveRandom() {
          const randomX = math.random() * (0 - 1000) + 500;
          const randomY = math.random() * (200 - 600) + 200;
          this.randomPosition = new Vec3(randomX, randomY);
          const distance = Vec3.distance(this.node.position, this.randomPosition);
          const duration = distance / this.speed;
          tween(this.node).to(duration, {
            position: this.randomPosition
          }).call(() => {
            this.moveRandom();
          }).start();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name.startsWith('bullet') || otherCollider.node.name.startsWith('rocket')) {
            this.scheduleOnce(() => {
              this.bulletCont.push(otherCollider);
            });

            if (this.node.name === 'boss001') {
              this.currentHealth -= 2;

              if (this.currentHealth <= 0) {
                this.currentHealth = 0;
              }

              this.updateHealthBar();

              if (this.countContact.length == 50) {
                this.scheduleOnce(() => {
                  var _self;

                  (_self = self) == null ? void 0 : _self.destroy();
                });
                GameCtrl.instance.healthBoss[0].node.active = false;
                this.spawnEnabled = false;
                GameCtrl.instance.checkSpawnFunc(GameCtrl.instance.spawnFunc2);
              }

              if (this.bulletCont.length === 50) {
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
              }
            }

            if (this.node.name === 'boss002') {
              if (this.bulletCont.length === 100) {
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
              }
            }

            if (this.node.name === 'boss003') {
              if (this.bulletCont.length === 150) {
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
              }
            }

            this.scheduleOnce(() => {
              otherCollider.node.destroy();
            });
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        spawnBullet() {
          if (this.node.name === 'boss001') {
            for (let i = 0; i < this.listBulletB1.length; i++) {
              let enemyPre = this.listBulletB1[i];
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;
              prefabInstance.setWorldPosition(this.node.worldPosition);
            }
          }

          if (this.node.name === 'boss002') {
            return;
          }

          if (this.node.name === 'boss003') {
            for (let i = 0; i < this.listBulletB3.length; i++) {
              for (let j = 0; j < 5; j++) {
                let enemyPre = this.listBulletB3[i];
                let prefabInstance = instantiate(enemyPre);
                prefabInstance.parent = this.node.parent;

                if (enemyPre.name.endsWith('_0') || enemyPre.name.endsWith('_1') || enemyPre.name.endsWith('_2') || enemyPre.name.endsWith('_3') || enemyPre.name.endsWith('_4')) {
                  prefabInstance.setWorldPosition(this.node.worldPosition.x - 105, this.node.worldPosition.y - 65, this.node.worldPosition.z);
                }

                if (enemyPre.name.endsWith('_5') || enemyPre.name.endsWith('_6') || enemyPre.name.endsWith('_7') || enemyPre.name.endsWith('_8') || enemyPre.name.endsWith('_9')) {
                  prefabInstance.setWorldPosition(this.node.worldPosition.x + 105, this.node.worldPosition.y - 65, this.node.worldPosition.z);
                }
              }
            }
          }
        }

        updateHealthBar() {
          if (GameCtrl.instance.healthBoss[0]) {
            GameCtrl.instance.healthBoss[0].progress = this.currentHealth / this.maxHealth;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listBulletB1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listBulletB3", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "laserBullet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56d98b5dcbf90035ca3af8acc800a3acf24638ad.js.map