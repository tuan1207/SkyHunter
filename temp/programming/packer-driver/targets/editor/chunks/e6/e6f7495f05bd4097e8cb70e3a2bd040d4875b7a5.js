System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, math, RigidBody2D, Vec3, Boss, ButtonPlayScene, _dec, _class, _crd, ccclass, property, Boss1;

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
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
      math = _cc.math;
      RigidBody2D = _cc.RigidBody2D;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Boss = _unresolved_2.Boss;
    }, function (_unresolved_3) {
      ButtonPlayScene = _unresolved_3.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b9f0f5APdFTKXiFJsTd0ZT", "Boss1", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'math', 'RigidBody2D', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss1", Boss1 = (_dec = ccclass('Boss1'), _dec(_class = class Boss1 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
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

        spawnBullet() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;

          for (let i = 0; i < this.bulletVelos.length; i++) {
            let enemyPre = this.bulletE;
            let prefabInstance = instantiate(enemyPre);
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
//# sourceMappingURL=e6f7495f05bd4097e8cb70e3a2bd040d4875b7a5.js.map