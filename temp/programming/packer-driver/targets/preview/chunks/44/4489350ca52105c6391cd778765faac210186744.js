System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, input, Input, KeyCode, Vec3, Collider2D, Contact2DType, Animation, Prefab, macro, RigidBody2D, Vec2, GameCtrl, AudioToggle, ButtonPlayScene, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, Plane;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
  }

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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Animation = _cc.Animation;
      Prefab = _cc.Prefab;
      macro = _cc.macro;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }, function (_unresolved_3) {
      AudioToggle = _unresolved_3.AudioToggle;
    }, function (_unresolved_4) {
      ButtonPlayScene = _unresolved_4.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d9cesRYfpAMYpjyjRvh8XD", "Plane", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'input', 'Input', 'EventKeyboard', 'KeyCode', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'EPhysics2DDrawFlags', 'Animation', 'Prefab', 'macro', 'RigidBody2D', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Plane", Plane = (_dec = ccclass('Plane'), _dec2 = property(Node), _dec3 = property(Animation), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_class3 = class Plane extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Plane", _descriptor, this);

          _initializerDefineProperty(this, "planeAnim", _descriptor2, this);

          _initializerDefineProperty(this, "listBullet", _descriptor3, this);

          _initializerDefineProperty(this, "listHealth", _descriptor4, this);

          _initializerDefineProperty(this, "bullet", _descriptor5, this);

          this.moveLeft = false;
          this.moveRight = false;
          this.moveUp = false;
          this.moveDown = false;
          this.moveEnable = true;
          this.moveSpeed = 200;
          this.listItemB = [];
          this.listItemR = [];
          this.countCont = [];
          this.bulletVelos = [new Vec2(0, 20), new Vec2(-1.5, 19), new Vec2(1.5, 19), new Vec2(-3, 18), new Vec2(3, 18)];
        }

        onLoad() {
          Plane.instance = this; // PhysicsSystem2D.instance.enable = true;
          // PhysicsSystem2D.instance.debugDrawFlags  = EPhysics2DDrawFlags.Aabb |
          // EPhysics2DDrawFlags.Pair |
          // EPhysics2DDrawFlags.CenterOfMass |
          // EPhysics2DDrawFlags.Joint |
          // EPhysics2DDrawFlags.Shape;

          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.schedule(this.spawnBullet, 0.4, macro.REPEAT_FOREVER, 0);
          this.schedule(this.spawnRocket, 0.7, macro.REPEAT_FOREVER, 0);
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        update(dt) {
          if ((_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable === false) return;
          this.planeMove(dt);
          this.Plane.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
        }

        onKeyDown(event) {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable) return;

          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.moveLeft = true;
              break;

            case KeyCode.KEY_D:
              this.moveRight = true;
              break;

            case KeyCode.KEY_W:
              this.moveUp = true;
              break;

            case KeyCode.KEY_S:
              this.moveDown = true;
              break;

            case KeyCode.ARROW_LEFT:
              this.moveLeft = true;
              break;

            case KeyCode.ARROW_RIGHT:
              this.moveRight = true;
              break;

            case KeyCode.ARROW_UP:
              this.moveUp = true;
              break;

            case KeyCode.ARROW_DOWN:
              this.moveDown = true;
              break;
          }
        }

        onKeyUp(event) {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable) return;

          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.moveLeft = false;
              break;

            case KeyCode.KEY_D:
              this.moveRight = false;
              break;

            case KeyCode.KEY_W:
              this.moveUp = false;
              break;

            case KeyCode.KEY_S:
              this.moveDown = false;
              break;

            case KeyCode.ARROW_LEFT:
              this.moveLeft = false;
              break;

            case KeyCode.ARROW_RIGHT:
              this.moveRight = false;
              break;

            case KeyCode.ARROW_UP:
              this.moveUp = false;
              break;

            case KeyCode.ARROW_DOWN:
              this.moveDown = false;
              break;
          }
        }

        planeMove(dt) {
          var posX = this.Plane.position.x;
          var posY = this.Plane.position.y;

          if (this.moveLeft) {
            if (posX > -575) {
              posX -= this.moveSpeed * dt;
            }

            var posPlane = new Vec3(posX, posY);
            this.Plane.setPosition(posPlane);
          }

          if (this.moveRight) {
            if (posX < 575) {
              posX += this.moveSpeed * dt;
            }

            var _posPlane = new Vec3(posX, posY);

            this.Plane.setPosition(_posPlane);
          }

          if (this.moveUp) {
            if (posY < 340) {
              posY += this.moveSpeed * dt;
            }

            var _posPlane2 = new Vec3(posX, posY);

            this.Plane.setPosition(_posPlane2);
          }

          if (this.moveDown) {
            if (posY > -340) {
              posY -= this.moveSpeed * dt;
            }

            var _posPlane3 = new Vec3(posX, posY);

            this.Plane.setPosition(_posPlane3);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) {
            return;
          }

          var other = otherCollider.node;
          var self = selfCollider.node;

          if (other.name === 'ItemB') {
            (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
              error: Error()
            }), AudioToggle) : AudioToggle).instance.onAudioQueue(3);
            this.scheduleOnce(() => {
              this.listItemB.push(other);
            });
            this.scheduleOnce(() => {
              other.destroy();
            });
          }

          if (other.name === 'ItemR') {
            (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
              error: Error()
            }), AudioToggle) : AudioToggle).instance.onAudioQueue(3);
            this.scheduleOnce(() => {
              this.listItemR.push(other);
            });
            this.scheduleOnce(() => {
              other.destroy();
            });
          }

          if (other.name.startsWith('enemy')) {
            (_crd && AudioToggle === void 0 ? (_reportPossibleCrUseOfAudioToggle({
              error: Error()
            }), AudioToggle) : AudioToggle).instance.onAudioQueue(7);
            this.scheduleOnce(() => {
              this.listItemR = [];
            });
            this.scheduleOnce(() => {
              this.listItemB = [];
            });
            this.scheduleOnce(() => {
              other.destroy();
            });
            this.planeAnim.play();
            selfCollider.group = 32;
            setTimeout(() => {
              selfCollider.group = 1;
            }, 4000);
            this.scheduleOnce(() => {
              this.countCont.push(other);
            });
            this.scheduleOnce(() => this.checkHealth());
          }

          if (other.name.startsWith('Laser')) {
            this.scheduleOnce(() => {
              this.listItemR = [];
            });
            this.scheduleOnce(() => {
              this.listItemB = [];
            });
            this.planeAnim.play();
            selfCollider.group = 32;
            setTimeout(() => {
              selfCollider.group = 1;
            }, 4000);
            this.scheduleOnce(() => {
              this.countCont.push(other);
            });
            this.scheduleOnce(() => this.checkHealth());
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        spawnBullet() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;

          if (this.listItemB.length === 0) {
            var bulletPrefab0 = this.listBullet[0];
            var prefabInstance = instantiate(bulletPrefab0);
            prefabInstance.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[0];
            prefabInstance.parent = this.bullet;
            prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 60, this.node.worldPosition.z);
          }

          if (this.listItemB.length === 1) {
            for (var i = 0; i < 3; i++) {
              var _bulletPrefab = this.listBullet[0];

              var _prefabInstance = instantiate(_bulletPrefab);

              _prefabInstance.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[i];
              _prefabInstance.parent = this.bullet;

              _prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 60, this.node.worldPosition.z);
            }
          }

          if (this.listItemB.length >= 2) {
            for (var _i = 0; _i < 5; _i++) {
              var _bulletPrefab2 = this.listBullet[0];

              var _prefabInstance2 = instantiate(_bulletPrefab2);

              _prefabInstance2.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[_i];
              _prefabInstance2.parent = this.bullet;

              _prefabInstance2.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 60, this.node.worldPosition.z);
            }
          }
        }

        spawnRocket() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;

          if (this.listItemR.length >= 1) {
            var bulletPrefab = this.listBullet[1];
            var prefabInstance0 = instantiate(bulletPrefab);
            prefabInstance0.parent = this.bullet;
            prefabInstance0.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[0];
            prefabInstance0.setWorldPosition(this.node.worldPosition.x + 50, this.node.worldPosition.y, this.node.worldPosition.z);
            var prefabInstance1 = instantiate(bulletPrefab);
            prefabInstance1.parent = this.bullet;
            prefabInstance1.getComponent(RigidBody2D).linearVelocity = this.bulletVelos[0];
            prefabInstance1.setWorldPosition(this.node.worldPosition.x - 50, this.node.worldPosition.y, this.node.worldPosition.z);
          }
        }

        checkHealth() {
          if (this.countCont.length === 1) {
            this.listHealth[4].active = false;
          }

          if (this.countCont.length === 2) {
            this.listHealth[3].active = false;
          }

          if (this.countCont.length === 3) {
            this.listHealth[2].active = false;
          }

          if (this.countCont.length === 4) {
            this.listHealth[1].active = false;
          }

          if (this.countCont.length === 5) {
            this.listHealth[0].active = false;
            (_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
              error: Error()
            }), ButtonPlayScene) : ButtonPlayScene).instance.moveEnable = false;
            (_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
              error: Error()
            }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled = false;
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.overNode.setWorldPosition((_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.node.worldPosition);
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.overNode.active = true;
            (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
              error: Error()
            }), GameCtrl) : GameCtrl).instance.savePoint();
          }
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Plane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "planeAnim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listBullet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listHealth", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec6], {
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
//# sourceMappingURL=4489350ca52105c6391cd778765faac210186744.js.map