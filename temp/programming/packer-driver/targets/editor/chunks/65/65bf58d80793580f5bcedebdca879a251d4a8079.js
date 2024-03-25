System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, Plane, _dec, _class, _crd, ccclass, property, BulletE;

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fafbq70LBGfY+ILtrzQTvT", "BulletE", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletE", BulletE = (_dec = ccclass('BulletE'), _dec(_class = class BulletE extends Component {
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.speed = 100;
        }

        start() {
          this.bulletMove();
        }

        update(deltaTime) {}

        bulletMove() {
          if (this.node.name == 'enemyb0') {
            let posXEnd = (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
              error: Error()
            }), Plane) : Plane).instance.node.position.x;
            let posYEnd = (_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
              error: Error()
            }), Plane) : Plane).instance.node.position.y;
            let posEnd = new Vec3(posXEnd, posYEnd); // const distance = Vec3.distance(this.node.position, posEnd);
            // const duration = distance / this.speed;

            tween(this.node).to(this.speed, {
              position: posEnd
            }).call(() => {
              this.bulletMove();
            }).start();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=65bf58d80793580f5bcedebdca879a251d4a8079.js.map