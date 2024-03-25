System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, PhysicsSystem, _dec, _class, _crd, ccclass, property, Item;

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
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41643pNCjhE6Yb21JX4mzif", "Item", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'PhysicsSystem']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Item", Item = (_dec = ccclass('Item'), _dec(_class = class Item extends Component {
        constructor() {
          super(...arguments);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.group = PhysicsSystem.PhysicsGroup.DEFAULT;
            console.log(collider.group);
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {}

        onEndContact(selfCollider, otherCollider, contact) {}

        update(deltaTime) {
          this.posX = this.node.position.x;
          this.posY = this.node.position.y;

          if (this.posX === 0) {
            return;
          } // this.posY -= this.bulletSpeed * 0.3;


          var posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc30597940ec53bedbbfc617dc64b0a443bad88f.js.map