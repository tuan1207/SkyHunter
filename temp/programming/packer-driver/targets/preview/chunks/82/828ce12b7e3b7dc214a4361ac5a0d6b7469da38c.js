System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, _dec, _class, _class2, _crd, ccclass, property, Helicopter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
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
        constructor() {
          super(...arguments);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
          this.spawnItemPos = void 0;
        }

        start() {
          var collider = this.getComponent(Collider2D);

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

          var posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          var other = otherCollider.node;
          var self = selfCollider.node;
          this.spawnItemPos = other.position; // this.scheduleOnce(() =>{otherCollider.node.destroy()} );
          // this.scheduleOnce(() =>{GameCtrl.instance.spawnItem()} );
        }

        onEndContact(selfCollider, otherCollider, contact) {}

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=828ce12b7e3b7dc214a4361ac5a0d6b7469da38c.js.map