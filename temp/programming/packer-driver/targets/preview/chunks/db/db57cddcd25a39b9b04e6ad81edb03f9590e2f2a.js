System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, systemEvent, _dec, _class, _crd, ccclass, property, AudioSave;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
      systemEvent = _cc.systemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2849ez5F91GeJhn4cR4ayif", "AudioSave", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'systemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioSave", AudioSave = (_dec = ccclass('AudioSave'), _dec(_class = class AudioSave extends Component {
        onLoad() {
          systemEvent.on('audioToggled', this.saveAudioStatus, this);
        }

        saveAudioStatus(audioStatus) {
          sys.localStorage.setItem('audioStatus', audioStatus ? 'on' : 'off');
        }

        onDestroy() {
          systemEvent.off('audioToggled', this.saveAudioStatus, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db57cddcd25a39b9b04e6ad81edb03f9590e2f2a.js.map