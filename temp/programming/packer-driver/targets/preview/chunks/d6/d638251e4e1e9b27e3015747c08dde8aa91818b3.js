System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, math, Vec3, tween, Prefab, instantiate, macro, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Boss;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7dfc9Lr8ZGVqpPMGWtl8je", "Boss", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'math', 'Vec3', 'tween', 'IPhysics2DContact', 'Prefab', 'instantiate', 'macro', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = class Boss extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "listBulletB1", _descriptor, this);

          _initializerDefineProperty(this, "listBulletB3", _descriptor2, this);

          // @property(Animation)
          // public laserBullet: Animation = null;
          _initializerDefineProperty(this, "speed", _descriptor3, this);

          this.randomPosition = void 0;
          this.listPos = [new Vec3(590, 360), //turn 1, 3, 5, 7
          new Vec3(690, 360) //turn 2
          ];
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          this.moveRandom();
          this.schedule(this.spawnBullet, 2.5, macro.REPEAT_FOREVER, 0);
        }

        update(deltaTime) {}

        moveRandom() {
          var randomX = math.random() * (0 - 1000) + 500;
          var randomY = math.random() * (200 - 600) + 200;
          this.randomPosition = new Vec3(randomX, randomY);
          var distance = Vec3.distance(this.node.position, this.randomPosition);
          var duration = distance / this.speed;
          tween(this.node).to(duration, {
            position: this.randomPosition
          }).call(() => {
            this.moveRandom();
          }).start();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          var other = otherCollider.node;
          var self = selfCollider.node;
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        spawnBullet() {
          var _this = this;

          if (this.node.name === 'boss001') {
            for (var i = 0; i < this.listBulletB1.length; i++) {
              var enemyPre = this.listBulletB1[i];
              var prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;
              prefabInstance.setWorldPosition(this.node.worldPosition);
            }
          }

          if (this.node.name === 'boss002') {}

          if (this.node.name === 'boss003') {
            var _loop = function _loop() {
              var j = 0;

              if (j < 5) {
                setTimeout(() => {
                  j + 1;
                }, 500);
                var _enemyPre = _this.listBulletB3[_i];

                var _prefabInstance = instantiate(_enemyPre);

                _prefabInstance.parent = _this.node.parent;

                if (_enemyPre.name.endsWith('_0') || _enemyPre.name.endsWith('_1')) {
                  _prefabInstance.setWorldPosition(_this.node.worldPosition.x - 50, _this.node.worldPosition.y, _this.node.worldPosition.z);
                }

                if (_enemyPre.name.endsWith('_2') || _enemyPre.name.endsWith('_3')) {
                  _prefabInstance.setWorldPosition(_this.node.worldPosition.x + 50, _this.node.worldPosition.y, _this.node.worldPosition.z);
                }
              } else {
                return {
                  v: void 0
                };
              }
            };

            for (var _i = 0; _i < this.listBulletB3.length; _i++) {
              var _ret = _loop();

              if (typeof _ret === "object") return _ret.v;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listBulletB1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listBulletB3", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d638251e4e1e9b27e3015747c08dde8aa91818b3.js.map