System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, math, Vec3, tween, Prefab, instantiate, macro, Animation, GameCtrl, Plane, AudioToggle, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Boss;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioToggle(extras) {
    _reporterNs.report("AudioToggle", "./AudioToggle", _context.meta, extras);
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
      tween = _cc.tween;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }, function (_unresolved_3) {
      Plane = _unresolved_3.Plane;
    }, function (_unresolved_4) {
      AudioToggle = _unresolved_4.AudioToggle;
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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "listBulletB1", _descriptor, this);

          _initializerDefineProperty(this, "listBulletB3", _descriptor2, this);

          _initializerDefineProperty(this, "laserBullet", _descriptor3, this);

          _initializerDefineProperty(this, "speed", _descriptor4, this);

          this.randomPosition = void 0;
          this.bulletCont1 = [];
          this.bulletCont2 = [];
          this.bulletCont3 = [];
          this.maxHealth1 = 150;
          this.currentHealth1 = 150;
          this.maxHealth2 = 150;
          this.currentHealth2 = 150;
          this.maxHealth3 = 150;
          this.currentHealth3 = 150;
          this.listPos = [new Vec3(590, 360), //turn 1, 3, 5, 7
          new Vec3(690, 360) //turn 2
          ];
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.moveRandom();
          this.schedule(this.spawnBullet, 2.5, macro.REPEAT_FOREVER, 0);
        }

        update(deltaTime) {}

        moveRandom() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.moveEnable) return;
          var randomX = math.random() * (0 - 1000) + 500;
          var randomY = math.random() * (200 - 600) + 200;
          this.randomPosition = new Vec3(randomX, randomY);
          var distance = Vec3.distance(this.node.position, this.randomPosition);
          var duration = distance / this.speed;
          tween(this.node).to(duration, {
            position: this.randomPosition
          }).call(() => {
            this.moveRandom();
          }).start();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(7);

          if (otherCollider.node.name.startsWith('bullet') || otherCollider.node.name.startsWith('rocket')) {
            if (this.node.name === 'boss001') {
              this.scheduleOnce(() => {
                this.bulletCont1.push(otherCollider);
              });
              this.currentHealth1 -= 1;

              if (this.currentHealth1 <= 0) {
                this.currentHealth1 = 0;
              }

              this.updateHealthBar();

              if (this.bulletCont1.length >= 150) {
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.healthBar[0].node.active = false;
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.checkTurn2 = true;
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.spawnTurn2();
                }, 6);
                this.scheduleOnce(() => {
                  this.bulletCont2 = [];
                });
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.healthBar[1].progress = 1;
                });
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

              this.updateHealthBar();

              if (this.bulletCont2.length >= 150) {
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.healthBar[1].node.active = false;
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.checkTurn2 = true;
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.spawnTurn3();
                }, 6);
                this.scheduleOnce(() => {
                  this.bulletCont3 = [];
                });
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.healthBar[2].progress = 1;
                });
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

              this.updateHealthBar();

              if (this.bulletCont3.length >= 150) {
                this.scheduleOnce(() => {
                  selfCollider.node.destroy();
                });
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.healthBar[2].node.active = false;
                (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                  error: Error()
                }), GameCtrl) : GameCtrl).instance.checkTurn3 = true;
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.spawnTurn1();
                }, 6);
                this.scheduleOnce(() => {
                  this.bulletCont1 = [];
                });
                this.scheduleOnce(() => {
                  (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
                    error: Error()
                  }), GameCtrl) : GameCtrl).instance.healthBar[0].progress = 1;
                });
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
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;

          if (this.node.name === 'boss001') {
            for (var i = 0; i < this.listBulletB1.length; i++) {
              var enemyPre = this.listBulletB1[i];
              var prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;
              prefabInstance.setWorldPosition(this.node.worldPosition);
            }
          }

          if (this.node.name === 'boss002') {
            return;
          }

          if (this.node.name === 'boss003') {
            for (var _i = 0; _i < this.listBulletB3.length; _i++) {
              for (var j = 0; j < 5; j++) {
                var _enemyPre = this.listBulletB3[_i];

                var _prefabInstance = instantiate(_enemyPre);

                _prefabInstance.parent = this.node.parent;

                if (_enemyPre.name.endsWith('_0') || _enemyPre.name.endsWith('_1') || _enemyPre.name.endsWith('_2') || _enemyPre.name.endsWith('_3') || _enemyPre.name.endsWith('_4')) {
                  _prefabInstance.setWorldPosition(this.node.worldPosition.x - 105, this.node.worldPosition.y - 65, this.node.worldPosition.z);
                }

                if (_enemyPre.name.endsWith('_5') || _enemyPre.name.endsWith('_6') || _enemyPre.name.endsWith('_7') || _enemyPre.name.endsWith('_8') || _enemyPre.name.endsWith('_9')) {
                  _prefabInstance.setWorldPosition(this.node.worldPosition.x + 105, this.node.worldPosition.y - 65, this.node.worldPosition.z);
                }
              }
            }
          }
        }

        updateHealthBar() {
          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.healthBar[0]) {
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.healthBar[0].progress = this.currentHealth1 / this.maxHealth1;
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.healthBar[1]) {
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.healthBar[1].progress = this.currentHealth2 / this.maxHealth2;
          }

          if ((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.healthBar[2]) {
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.healthBar[2].progress = this.currentHealth3 / this.maxHealth3;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listBulletB1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listBulletB3", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "laserBullet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f959d842bf7194e3b461f55e8e6952e9a45b2358.js.map