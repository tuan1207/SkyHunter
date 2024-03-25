System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, Bullet;

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

      _cclegacy._RF.push({}, "890acjeGMxFtYrHxDRxLfU5", "Bullet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = class Bullet extends Component {
        constructor() {
          super(...arguments);
          this.bulletSpeed = 10;
        }

        start() {}

        update(deltaTime) {
          this.moveUp();
        }

        moveUp() {
          if (this.node.name == 'bullet') {
            var posXBullet = this.node.position.x;
            var posYBullet = this.node.position.y;
            posYBullet += this.bulletSpeed;
            var posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f42b0b9657b98b675897bddba637c4f22687b84.js.map