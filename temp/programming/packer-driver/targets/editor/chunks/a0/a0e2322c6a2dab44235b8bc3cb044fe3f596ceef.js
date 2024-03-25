System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, math, Vec3, Prefab, Animation, Vec2, AudioToggle, ButtonPlayScene, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, Boss;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioToggle(extras) {
    _reporterNs.report("AudioToggle", "./AudioToggle", _context.meta, extras);
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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      AudioToggle = _unresolved_2.AudioToggle;
    }, function (_unresolved_3) {
      ButtonPlayScene = _unresolved_3.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7dfc9Lr8ZGVqpPMGWtl8je", "Boss", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'math', 'Vec3', 'tween', 'IPhysics2DContact', 'Prefab', 'instantiate', 'macro', 'Animation', 'Scene', 'RigidBody2D', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property(Prefab), _dec3 = property(Animation), _dec(_class = (_class2 = (_class3 = class Boss extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bulletE", _descriptor, this);

          _initializerDefineProperty(this, "laserBullet", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);

          this.bulletCont1 = [];
          this.bulletCont2 = [];
          this.bulletCont3 = [];
          this.maxHealth1 = 50;
          this.currentHealth1 = 50;
          this.maxHealth2 = 100;
          this.currentHealth2 = 100;
          this.maxHealth3 = 150;
          this.currentHealth3 = 150;
          this.randomX = void 0;
          this.randomY = void 0;
          this.randomPosition = Vec3.ZERO;
          this.bulletVelos = [new Vec2(0, 13.85), new Vec2(5.3, 12.8), new Vec2(10.6, 10.6), new Vec2(12.8, 5.3), new Vec2(13.85, 0), new Vec2(12.8, -5.3), new Vec2(10.6, -10.6), new Vec2(5.3, -12.8), new Vec2(0, -13.85), new Vec2(-5.3, -12.8), new Vec2(-10.6, -10.6), new Vec2(-12.8, -5.3), new Vec2(-13.85, 0), new Vec2(-12.8, 5.3), new Vec2(-10.6, 10.6), new Vec2(-5.3, 12.8)];
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.randomPos();
        }

        onLoad() {
          Boss.instance = this;
        }

        update(dt) {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable) {
            return;
          }

          let direction = this.randomPosition.clone().subtract(this.node.position).normalize();
          let distance = math.Vec3.distance(this.node.position, this.randomPosition);
          let posX = this.node.position.x + direction.x * distance * 0.01;
          let posY = this.node.position.y + direction.y * distance * 0.01;
          this.node.setPosition(new Vec3(posX, posY));

          if (distance <= 50) {
            this.randomPos();
          }
        }

        randomPos() {
          this.randomX = math.random() * (0 - 1000) + 500;
          this.randomY = math.random() * (200 - 600) + 400;
          this.randomPosition = new Vec3(this.randomX, this.randomY);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
            error: Error()
          }), AudioToggle) : AudioToggle).instance.onAudioQueue(7);

          if (otherCollider.node.name === 'bullet0' || otherCollider.node.name === 'rocket') {
            this.scheduleOnce(() => {
              var _otherCollider$node;

              (_otherCollider$node = otherCollider.node) == null ? void 0 : _otherCollider$node.destroy();
            });
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletE", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "laserBullet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0e2322c6a2dab44235b8bc3cb044fe3f596ceef.js.map