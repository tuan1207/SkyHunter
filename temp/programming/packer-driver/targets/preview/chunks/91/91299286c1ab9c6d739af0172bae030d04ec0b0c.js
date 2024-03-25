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
        constructor() {
          super(...arguments);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
        }

        start() {}

        update(deltaTime) {
          this.posX = this.node.position.x;
          this.posY = this.node.position.y;

          if (this.posX === 0) {
            return;
          }

          this.posY -= this.bulletSpeed * 0.3;
          var posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91299286c1ab9c6d739af0172bae030d04ec0b0c.js.map