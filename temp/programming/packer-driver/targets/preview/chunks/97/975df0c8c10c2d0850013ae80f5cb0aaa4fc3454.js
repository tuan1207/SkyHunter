System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, macro, RigidBody2D, Boss, ButtonPlayScene, GameCtrl, _dec, _class, _crd, ccclass, property, Boss1;

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonPlayScene(extras) {
    _reporterNs.report("ButtonPlayScene", "./ButtonPlayScene", _context.meta, extras);
  }

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
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      RigidBody2D = _cc.RigidBody2D;
    }, function (_unresolved_2) {
      Boss = _unresolved_2.Boss;
    }, function (_unresolved_3) {
      ButtonPlayScene = _unresolved_3.ButtonPlayScene;
    }, function (_unresolved_4) {
      GameCtrl = _unresolved_4.GameCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b9f0f5APdFTKXiFJsTd0ZT", "Boss1", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'instantiate', 'IPhysics2DContact', 'macro', 'math', 'RigidBody2D', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss1", Boss1 = (_dec = ccclass('Boss1'), _dec(_class = class Boss1 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
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
            this.maxHealth2 = 100;
            this.currentHealth2 = 100;
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.schedule((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.spawnTurn2, 7, 9, 0);
          }
        }

        spawnBullet() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;

          for (var i = 0; i < this.bulletVelos.length; i++) {
            var enemyPre = this.bulletE;
            var prefabInstance = instantiate(enemyPre);
            prefabInstance.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[i];
            prefabInstance.parent = this.node.parent;
            prefabInstance.setWorldPosition(this.node.worldPosition);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=975df0c8c10c2d0850013ae80f5cb0aaa4fc3454.js.map