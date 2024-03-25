System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, Prefab, instantiate, GameCtrl, ButtonPlayScene, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Helicopter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonPlayScene(extras) {
    _reporterNs.report("ButtonPlayScene", "./ButtonPlayScene", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }, function (_unresolved_3) {
      ButtonPlayScene = _unresolved_3.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a2c0vGR4JALLdUgSM6K5LM", "Helicopter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Helicopter", Helicopter = (_dec = ccclass('Helicopter'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Helicopter extends Component {
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
          this.spawnItemPos = void 0;
          this.contacted = false;

          _initializerDefineProperty(this, "items", _descriptor, this);
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        update(deltaTime) {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;
          this.posX = this.node.position.x;
          this.posY = this.node.position.y;
          this.posX += this.bulletSpeed * 0.5;

          if (this.posX > 690) {
            this.node.destroy();
          }

          let posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (this.contacted) return;
          let other = otherCollider.node;
          this.scheduleOnce(() => {
            other.destroy();
          });
          this.contacted = true;
        }

        onEndContact(selfCollider, otherCollider, contact) {
          this.spawnItemPos = selfCollider.node.position;
          this.scheduleOnce(() => {
            selfCollider.node.destroy();
          });
          this.scheduleOnce(() => {
            this.spawnItem();
          });
        }

        spawnItem() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;
          let randomIndex = Math.floor(Math.random() * this.items.length);
          let randomPrefab = this.items[randomIndex];
          let prefabInstance = instantiate(randomPrefab);
          prefabInstance.setPosition(this.spawnItemPos);
          (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.node.addChild(prefabInstance);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04e6621b5a7878fcbed0d8cbf70af433c8b4196e.js.map