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
        }

        start() {}

        update(deltaTime) {
          this.moveUp();
        }

        moveUp() {
          if (this.node.name == 'bullet0') {
            let posXBullet = this.node.position.x;
            let posYBullet = this.node.position.y;
            posYBullet += this.bulletSpeed;
            let posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet1') {
            let posXBullet = this.node.position.x;
            let posYBullet = this.node.position.y;
            posXBullet -= this.bulletSpeed * 0.1;
            posYBullet += this.bulletSpeed;
            let posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet2') {
            let posXBullet = this.node.position.x;
            let posYBullet = this.node.position.y;
            posXBullet += this.bulletSpeed * 0.1;
            posYBullet += this.bulletSpeed;
            let posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet3') {
            let posXBullet = this.node.position.x;
            let posYBullet = this.node.position.y;
            posXBullet -= this.bulletSpeed * 0.2;
            posYBullet += this.bulletSpeed;
            let posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet4') {
            let posXBullet = this.node.position.x;
            let posYBullet = this.node.position.y;
            posXBullet += this.bulletSpeed * 0.2;
            posYBullet += this.bulletSpeed;
            let posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d51e12033c47db8184892f8766f109b2d6f07942.js.map