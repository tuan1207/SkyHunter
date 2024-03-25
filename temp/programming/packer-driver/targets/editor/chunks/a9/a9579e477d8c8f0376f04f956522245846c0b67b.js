System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, macro, RigidBody2D, Boss, GameCtrl, ButtonPlayScene, _dec, _class, _crd, ccclass, property, Boss3;

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      RigidBody2D = _cc.RigidBody2D;
    }, function (_unresolved_2) {
      Boss = _unresolved_2.Boss;
    }, function (_unresolved_3) {
      GameCtrl = _unresolved_3.GameCtrl;
    }, function (_unresolved_4) {
      ButtonPlayScene = _unresolved_4.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "406bfworI5C45LjHRb5VBVK", "Boss3", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'instantiate', 'IPhysics2DContact', 'macro', 'Node', 'RigidBody2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss3", Boss3 = (_dec = ccclass('Boss3'), _dec(_class = class Boss3 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        update(dt) {
          super.update(dt);
        }

        start() {
          super.start();
        }

        onLoad() {
          this.schedule(this.spawnBullet, 2.5, macro.REPEAT_FOREVER, 0);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          super.onBeginContact(selfCollider, otherCollider, contact);
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
          }
        }

        spawnBullet() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;

          for (let i = 0; i < this.bulletVelos.length; i++) {
            let enemyPre = this.bulletE;

            for (let j = 0; j < 3; j++) {
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;
              prefabInstance.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[i];

              if (j === 0) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x - 105, this.node.worldPosition.y - 65, this.node.worldPosition.z);
              }

              if (j === 1) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x + 105, this.node.worldPosition.y - 65, this.node.worldPosition.z);
              }

              if (j === 2) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y, this.node.worldPosition.z);
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9579e477d8c8f0376f04f956522245846c0b67b.js.map