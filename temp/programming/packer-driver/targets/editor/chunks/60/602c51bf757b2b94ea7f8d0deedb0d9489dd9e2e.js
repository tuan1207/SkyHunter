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
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
        }

        update(deltaTime) {
          this.turn0();
          this.turn1();
          this.turn2();
        }

        turn0() {
          if (this.node.name == 'bullet0') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posY += this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }
        }

        turn1() {
          if (this.node.name == 'bullet1') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.1;
            this.posY += this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet2') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.1;
            this.posY += this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }
        }

        turn2() {
          if (this.node.name == 'bullet3') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX -= this.bulletSpeed * 0.2;
            this.posY += this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet4') {
            this.posX = this.node.position.x;
            this.posY = this.node.position.y;
            this.posX += this.bulletSpeed * 0.2;
            this.posY += this.bulletSpeed;
            let posBullet = new Vec3(this.posX, this.posY);
            this.node.setPosition(posBullet);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=602c51bf757b2b94ea7f8d0deedb0d9489dd9e2e.js.map