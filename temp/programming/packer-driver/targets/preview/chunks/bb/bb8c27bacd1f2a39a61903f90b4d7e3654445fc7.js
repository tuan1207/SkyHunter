System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, BulletE;

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

      _cclegacy._RF.push({}, "0fafbq70LBGfY+ILtrzQTvT", "BulletE", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletE", BulletE = (_dec = ccclass('BulletE'), _dec(_class = class BulletE extends Component {
        constructor() {
          super(...arguments);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
        }

        start() {}

        update(deltaTime) {}

        bulletMove() {
          if (this.node.name == 'bullet1') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.1;
            this.posY += this.bulletSpeed;
            var posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb8c27bacd1f2a39a61903f90b4d7e3654445fc7.js.map