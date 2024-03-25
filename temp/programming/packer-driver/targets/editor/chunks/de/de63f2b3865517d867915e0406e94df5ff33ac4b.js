System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Component, Node, Toggle, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, musictoggle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f513f1WCiZEq7tZOepN+pEG", "musictoggle", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Component', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("musictoggle", musictoggle = (_dec = ccclass('musictoggle'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Toggle), _dec5 = property(AudioSource), _dec(_class = (_class2 = class musictoggle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "turnOffMusicBtn", _descriptor, this);

          _initializerDefineProperty(this, "turnOnMusicBtn", _descriptor2, this);

          _initializerDefineProperty(this, "btn", _descriptor3, this);

          _initializerDefineProperty(this, "music", _descriptor4, this);
        }

        onLoad() {
          // Add a listener to the toggle button
          this.btn.node.on('toggle', this.onToggle, this);
        }

        onToggle() {
          // Check if the toggle is checked or unchecked
          if (this.btn.isChecked) {
            // If checked, play the background music
            this.turnOffMusicBtn.active = true;
            this.turnOnMusicBtn.active = false;
            this.music.volume = 0;
          } else {
            // If unchecked, stop the background music
            this.turnOffMusicBtn.active = false;
            this.turnOnMusicBtn.active = true;
            this.music.volume = 0.3;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "turnOffMusicBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "turnOnMusicBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "music", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de63f2b3865517d867915e0406e94df5ff33ac4b.js.map