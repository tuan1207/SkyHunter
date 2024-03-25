System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, Item;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41643pNCjhE6Yb21JX4mzif", "Item", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Item", Item = (_dec = ccclass('Item'), _dec(_class = class Item extends Component {
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
        }

        start() {}

        update(deltaTime) {
          this.posX = this.node.position.x;
          this.posY = this.node.position.y;
          this.posY -= this.bulletSpeed * 0.5;

          if (this.posX > 690) {
            this.node.destroy();
          }

          let posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1d238d62fa08120234b89904bd2b09b34d9e399.js.map