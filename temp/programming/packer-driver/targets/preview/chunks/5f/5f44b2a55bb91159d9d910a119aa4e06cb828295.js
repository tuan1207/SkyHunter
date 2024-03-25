System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CameraComponent, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Camera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CameraComponent = _cc.CameraComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6a61fUnqlLLq5IgCK9oFmf", "Camera", undefined);

      __checkObsolete__(['_decorator', 'CameraComponent', 'Canvas', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Camera", Camera = (_dec = ccclass('Camera'), _dec2 = property(CameraComponent), _dec(_class = (_class2 = class Camera extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "camera", _descriptor, this);
        }

        setCameraAspectRatio() {// Get the current resolution width and height
          // const resolutionWidth = Canvas.instance.node.width;
          // const resolutionHeight = Canvas.instance.node.height;
          // Calculate the aspect ratio of the screen
          // const screenAspectRatio = resolutionWidth / resolutionHeight;
          // Set the camera's aspect ratio based on the screen aspect ratio
          // this.camera.zoomRatio = screenAspectRatio / (16 / 9);
        }

        onLoad() {
          // Call setCameraAspectRatio on load to set the initial aspect ratio
          this.setCameraAspectRatio();
        }

        update(dt) {
          // Update the camera aspect ratio when the screen size changes
          this.setCameraAspectRatio();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f44b2a55bb91159d9d910a119aa4e06cb828295.js.map