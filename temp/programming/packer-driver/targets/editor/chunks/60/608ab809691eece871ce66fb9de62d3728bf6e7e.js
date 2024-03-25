System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, GameCtrl, _dec, _class, _class2, _crd, ccclass, property, Helicopter;

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
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a2c0vGR4JALLdUgSM6K5LM", "Helicopter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Helicopter", Helicopter = (_dec = ccclass('Helicopter'), _dec(_class = (_class2 = class Helicopter extends Component {
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
          this.spawnItemPos = void 0;
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        onLoad() {
          Helicopter.instance = this;
        }

        update(deltaTime) {
          this.posX = this.node.position.x;
          this.posY = this.node.position.y;
          this.posX += this.bulletSpeed * 0.5;

          if (this.posX > 690) {
            this.node.destroy();
          }

          let posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet); // this.scheduleOnce(() => {console.log(this.spawnItemPos)});
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          let other = otherCollider.node;
          let self = selfCollider.node;
          this.spawnItemPos = selfCollider.node.position;
          this.scheduleOnce(() => {
            selfCollider.node.destroy();
          });
          this.scheduleOnce(() => {
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.spawnItem();
          });
        }

        onEndContact(selfCollider, otherCollider, contact) {}

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=608ab809691eece871ce66fb9de62d3728bf6e7e.js.map