System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Boss, GameCtrl, _dec, _class, _crd, ccclass, property, Boss2;

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Boss = _unresolved_2.Boss;
    }, function (_unresolved_3) {
      GameCtrl = _unresolved_3.GameCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "618c3sizTxJ2IWc1i8WqlqG", "Boss2", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'IPhysics2DContact', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss2", Boss2 = (_dec = ccclass('Boss2'), _dec(_class = class Boss2 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        update(dt) {
          super.update(dt);
        }

        start() {
          super.start();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          super.onBeginContact(selfCollider, otherCollider, contact);
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
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33499148b128bcf5c5ea5f272d8228df846d5555.js.map