System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ButtonPlayScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aae10xmeblBJp8ObWv1JtTa", "ButtonPlayScene", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonPlayScene", ButtonPlayScene = (_dec = ccclass('ButtonPlayScene'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = class ButtonPlayScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pauseBtn", _descriptor, this);

          _initializerDefineProperty(this, "homeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "restartBtn", _descriptor3, this);

          _initializerDefineProperty(this, "resumeBtn", _descriptor4, this);

          _initializerDefineProperty(this, "menuScene", _descriptor5, this);

          _initializerDefineProperty(this, "playScene", _descriptor6, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pauseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "homeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "restartBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resumeBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "menuScene", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playScene", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b8ecfee7f09a9d64b4914cc8eadb51c7d88fdeb.js.map