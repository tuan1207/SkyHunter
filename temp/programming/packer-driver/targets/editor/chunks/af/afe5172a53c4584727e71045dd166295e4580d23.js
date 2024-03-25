System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, math, Vec3, Prefab, instantiate, macro, Animation, RigidBody2D, Vec2, GameCtrl, AudioToggle, ButtonPlayScene, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, Boss;

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Animation = _cc.Animation;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }, function (_unresolved_3) {
      AudioToggle = _unresolved_3.AudioToggle;
    }, function (_unresolved_4) {
      ButtonPlayScene = _unresolved_4.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7dfc9Lr8ZGVqpPMGWtl8je", "Boss", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'math', 'Vec3', 'tween', 'IPhysics2DContact', 'Prefab', 'instantiate', 'macro', 'Animation', 'Scene', 'RigidBody2D', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Animation), _dec(_class = (_class2 = (_class3 = class Boss extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listBulletB1", _descriptor, this);

          _initializerDefineProperty(this, "listBulletB3", _descriptor2, this);

          _initializerDefineProperty(this, "laserBullet", _descriptor3, this);

          _initializerDefineProperty(this, "speed", _descriptor4, this);

          this.bulletCont1 = [];
          this.bulletCont2 = [];
          this.bulletCont3 = [];
          this.maxHealth1 = 50;
          this.currentHealth1 = 50;
          this.maxHealth2 = 100;
          this.currentHealth2 = 100;
          this.maxHealth3 = 150;
          this.currentHealth3 = 150;
          this.randomX = void 0;
          this.randomY = void 0;
          this.randomPosition = Vec3.ZERO;
          this.bulletVelos = [new Vec2(0, 20), //1
          new Vec2(10, 20), new Vec2(20, 20), //2
          new Vec2(20, 10), new Vec2(20, 0), //3
          new Vec2(20, -10), new Vec2(20, -20), //4
          new Vec2(10, -20), new Vec2(0, -20), //5
          new Vec2(-20, -10), new Vec2(-20, -20), //6
          new Vec2(-10, -20), new Vec2(-20, 0), //7
          new Vec2(-20, 10), new Vec2(-20, 20), //8
          new Vec2(-10, 20)];
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.schedule(this.spawnBullet, 2.5, macro.REPEAT_FOREVER, 0);
          this.randomPos();
        }

        onLoad() {
          Boss.instance = this;
        }

        update(dt) {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable) {
            return;
          }

          let direction = this.randomPosition.clone().subtract(this.node.position).normalize();
          let distance = math.Vec3.distance(this.node.position, this.randomPosition);
          let posX = this.node.position.x + direction.x * distance * 0.01;
          let posY = this.node.position.y + direction.y * distance * 0.01;
          this.node.setPosition(new Vec3(posX, posY));

          if (distance <= 50) {
            this.randomPos();
          }
        }

        randomPos() {
          this.randomX = math.random() * (0 - 1000) + 500;
          this.randomY = math.random() * (200 - 600) + 200;
          this.randomPosition = new Vec3(this.randomX, this.randomY);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(7);

          if (otherCollider.node.name === 'bullet0' || otherCollider.node.name === 'rocket') {
            if (this.node.name === 'boss001') {
              this.scheduleOnce(() => {
                this.bulletCont1.push(otherCollider);
              });
              this.currentHealth1 -= 1;

              if (this.currentHealth1 <= 0) {
                this.currentHealth1 = 0;
              }

              (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                error: Error()
              }), GameCtrl) : GameCtrl).instance.healthBar.progress = this.currentHealth1 / this.maxHealth1;

              if (this.bulletCont1.length >= 50) {
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.countPoint(1000);
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.healthBar.node.active = false;
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.schedule((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.spawnTurn2, 7, 9, 0);
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.spawnBoss2();
                }, 75);
                this.maxHealth2 = 100;
                this.currentHealth2 = 100;
              }
            }

            if (this.node.name === 'boss002') {
              this.scheduleOnce(() => {
                this.bulletCont2.push(otherCollider);
              });
              this.currentHealth2 -= 1;

              if (this.currentHealth2 <= 0) {
                this.currentHealth2 = 0;
              }

              (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                error: Error()
              }), GameCtrl) : GameCtrl).instance.healthBar.progress = this.currentHealth2 / this.maxHealth2;

              if (this.bulletCont2.length >= 100) {
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.countPoint(1000);
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.healthBar.node.active = false;
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
                this.maxHealth3 = 150;
                this.currentHealth3 = 150;
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.schedule((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.spawnTurn3, 7, 9, 0);
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.spawnBoss3();
                }, 75);
              }
            }

            if (this.node.name === 'boss003') {
              this.scheduleOnce(() => {
                this.bulletCont3.push(otherCollider);
              });
              this.currentHealth3 -= 1;

              if (this.currentHealth3 <= 0) {
                this.currentHealth3 = 0;
              }

              (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                error: Error()
              }), GameCtrl) : GameCtrl).instance.healthBar.progress = this.currentHealth3 / this.maxHealth3;

              if (this.bulletCont3.length >= 150) {
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.countPoint(1000);
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.healthBar.node.active = false;
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
                this.maxHealth1 = 50;
                this.currentHealth1 = 50;
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.schedule((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.spawnTurn1, 7, 9, 0);
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.spawnBoss1();
                }, 75);
              }
            }

            if (otherCollider.node.name.startsWith('bullet') || otherCollider.node.name.startsWith('rocket')) {
              this.scheduleOnce(() => {
                var _otherCollider$node;

                (_otherCollider$node = otherCollider.node) == null ? void 0 : _otherCollider$node.destroy();
              });
            }
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        spawnBullet() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;

          if (this.node.name === 'boss001') {
            for (let i = 0; i < this.bulletVelos.length; i++) {
              let enemyPre = this.listBulletB1[0];
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[i];
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

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listBulletB1", [_dec2], {
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
//# sourceMappingURL=afe5172a53c4584727e71045dd166295e4580d23.js.map