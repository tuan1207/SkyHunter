System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _crd, ccclass, property, NewComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fb40haAg5GV4AHgbxtCQXK", "NewComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass('NewComponent'), _dec(_class = class NewComponent extends Component {
        start() {
          var savedAStatus = sys.localStorage.getItem('audioStatus');

          if (savedAStatus === null) {
            // Nếu không có, đặt giá trị mặc định là "on" và lưu vào local storage
            sys.localStorage.setItem('audioStatus', 'on');
          }

          var savedMStatus = sys.localStorage.getItem('musicStatus');

          if (savedMStatus === null) {
            // Nếu không có, đặt giá trị mặc định là "on" và lưu vào local storage
            sys.localStorage.setItem('musicStatus', 'on');
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab598af6b47a5b81475091c3be387c7d2e3a70d1.js.map