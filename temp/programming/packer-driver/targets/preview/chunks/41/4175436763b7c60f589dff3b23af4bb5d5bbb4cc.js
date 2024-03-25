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
          if (this.node.name == 'bullet0') {
            var posXBullet = this.node.position.x;
            var posYBullet = this.node.position.y;
            posYBullet += this.bulletSpeed;
            var posBullet = new Vec3(posXBullet, posYBullet);
            this.node.setPosition(posBullet);
          }

          if (this.node.name == 'bullet1') {
            var _posXBullet = this.node.position.x;
            var _posYBullet = this.node.position.y;
            _posXBullet -= this.bulletSpeed * 0.1;
            _posYBullet += this.bulletSpeed;

            var _posBullet = new Vec3(_posXBullet, _posYBullet);

            this.node.setPosition(_posBullet);
          }

          if (this.node.name == 'bullet2') {
            var _posXBullet2 = this.node.position.x;
            var _posYBullet2 = this.node.position.y;
            _posXBullet2 += this.bulletSpeed * 0.1;
            _posYBullet2 += this.bulletSpeed;

            var _posBullet2 = new Vec3(_posXBullet2, _posYBullet2);

            this.node.setPosition(_posBullet2);
          }

          if (this.node.name == 'bullet3') {
            var _posXBullet3 = this.node.position.x;
            var _posYBullet3 = this.node.position.y;
            _posXBullet3 -= this.bulletSpeed * 0.2;
            _posYBullet3 += this.bulletSpeed;

            var _posBullet3 = new Vec3(_posXBullet3, _posYBullet3);

            this.node.setPosition(_posBullet3);
          }

          if (this.node.name == 'bullet4') {
            var _posXBullet4 = this.node.position.x;
            var _posYBullet4 = this.node.position.y;
            _posXBullet4 += this.bulletSpeed * 0.2;
            _posYBullet4 += this.bulletSpeed;

            var _posBullet4 = new Vec3(_posXBullet4, _posYBullet4);

            this.node.setPosition(_posBullet4);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4175436763b7c60f589dff3b23af4bb5d5bbb4cc.js.map