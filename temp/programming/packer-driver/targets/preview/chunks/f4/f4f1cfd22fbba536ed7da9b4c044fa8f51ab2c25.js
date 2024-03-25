System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BulletE;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fafbq70LBGfY+ILtrzQTvT", "BulletE", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletE", BulletE = (_dec = ccclass('BulletE'), _dec(_class = class BulletE extends Component {
        constructor() {
          super(...arguments);
          this.speed = 100;
        }

        start() {
          this.bulletMove();
        }

        update(deltaTime) {}

        bulletMove() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4f1cfd22fbba536ed7da9b4c044fa8f51ab2c25.js.map