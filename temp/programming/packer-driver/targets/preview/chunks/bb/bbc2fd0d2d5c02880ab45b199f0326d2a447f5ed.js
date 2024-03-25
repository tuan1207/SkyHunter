System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, Vec3, instantiate, macro, Label, ProgressBar, sys, NodePool, ButtonPlayScene, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _crd, ccclass, property, GameCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      sys = _cc.sys;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      ButtonPlayScene = _unresolved_2.ButtonPlayScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c28cat2/pE9YMmYF7hQ/Ix", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec3', 'instantiate', 'macro', 'Label', 'ProgressBar', 'System', 'sys', 'Pool', 'NodePool', 'RigidBody2D', 'Vec2', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(ProgressBar), _dec(_class = (_class2 = (_class3 = class GameCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemyWave1", _descriptor, this);

          _initializerDefineProperty(this, "enemyWave2", _descriptor2, this);

          _initializerDefineProperty(this, "enemyWave3", _descriptor3, this);

          _initializerDefineProperty(this, "listBoss", _descriptor4, this);

          _initializerDefineProperty(this, "helicop", _descriptor5, this);

          _initializerDefineProperty(this, "overNode", _descriptor6, this);

          _initializerDefineProperty(this, "countPointLb", _descriptor7, this);

          _initializerDefineProperty(this, "overPointLb", _descriptor8, this);

          _initializerDefineProperty(this, "highPointLb", _descriptor9, this);

          _initializerDefineProperty(this, "healthBar", _descriptor10, this);

          this.destroyCount = 0;
          this.highPoint = 0;
          this.countElement = 1;
          this.objectPool = void 0;
          this.spawnEnable = true;
          this.checkTurn1 = true;
          this.listPos = [new Vec3(640, 760, -1), //turn 1, 3, 5, 7
          new Vec3(-50, 760, -1), //turn 2
          new Vec3(-100, 560, -1), //turn 4
          new Vec3(-50, 270, -1), //turn 6
          new Vec3(1330, 560, -1), //turn 8
          new Vec3(1330, 270, -1), //turn 9
          new Vec3(1330, 760, -1), //turn 10
          new Vec3(640, 500, -1) //turn boss
          ];
        }

        onLoad() {
          GameCtrl.instance = this;
          this.schedule(this.spawnTurn1, 7, 9, 0); // this.scheduleOnce(()=> {this.spawnBoss1()}, 75);

          this.schedule(this.spawnObject, 24, macro.REPEAT_FOREVER, 0);
          this.objectPool = new NodePool();
        }

        update(dt) {}

        countEle() {
          if (this.countElement === 11) {
            this.countElement = 1;
            return;
          }

          this.countElement++;
        }

        spawnTurn1() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;
          console.log('bat dau spawn');
          this.scheduleOnce(() => {
            this.countEle();
          });
          var bulletPrefab0 = this.enemyWave1;

          for (var j = 0; j < 5; j++) {
            var prefabInstance = instantiate(bulletPrefab0);
            prefabInstance.parent = this.node;

            switch (this.countElement) {
              case 1:
                prefabInstance.setWorldPosition(this.listPos[1].x - 100 * (0 + j), this.listPos[1].y + 60 * (j + 1), this.listPos[0].z);
                break;

              case 2:
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
                break;

              case 3:
                prefabInstance.setWorldPosition(this.listPos[2].x + 140 * (j - 2), this.listPos[2].y, this.listPos[2].z);
                break;

              case 4:
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
                break;

              case 5:
                prefabInstance.setWorldPosition(this.listPos[3].x + 140 * (j - 2), this.listPos[3].y, this.listPos[3].z);
                break;

              case 6:
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
                break;

              case 7:
                prefabInstance.setWorldPosition(this.listPos[4].x + 140 * (j - 2), this.listPos[4].y, this.listPos[4].z);
                break;

              case 8:
                prefabInstance.setWorldPosition(this.listPos[5].x + 140 * (j - 2), this.listPos[5].y, this.listPos[5].z);
                break;

              case 9:
                prefabInstance.setWorldPosition(this.listPos[6].x + 100 * (0 + j), this.listPos[6].y + 60 * (j + 1), this.listPos[6].z);
                break;

              case 10:
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
                break;

              default:
                break;
            }
          }

          if (this.countElement === 11) {
            this.spawnBoss1();
          }
        }

        spawnTurn2() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;
          console.log('bat dau spawn');
          this.scheduleOnce(() => {
            this.countEle();
          });
          var bulletPrefab0 = this.enemyWave2;

          for (var j = 0; j < 5; j++) {
            var prefabInstance = instantiate(bulletPrefab0);
            prefabInstance.parent = this.node;

            switch (this.countElement) {
              case 1:
                prefabInstance.setWorldPosition(this.listPos[1].x - 100 * (0 + j), this.listPos[1].y + 60 * (j + 1), this.listPos[0].z);
                break;

              case 2:
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
                break;

              case 3:
                prefabInstance.setWorldPosition(this.listPos[2].x + 140 * (j - 2), this.listPos[2].y, this.listPos[2].z);
                break;

              case 4:
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
                break;

              case 5:
                prefabInstance.setWorldPosition(this.listPos[3].x + 140 * (j - 2), this.listPos[3].y, this.listPos[3].z);
                break;

              case 6:
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
                break;

              case 7:
                prefabInstance.setWorldPosition(this.listPos[4].x + 140 * (j - 2), this.listPos[4].y, this.listPos[4].z);
                break;

              case 8:
                prefabInstance.setWorldPosition(this.listPos[5].x + 140 * (j - 2), this.listPos[5].y, this.listPos[5].z);
                break;

              case 9:
                prefabInstance.setWorldPosition(this.listPos[6].x + 100 * (0 + j), this.listPos[6].y + 60 * (j + 1), this.listPos[6].z);
                break;

              case 10:
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
                break;

              default:
                break;
            }
          }
        }

        spawnTurn3() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;
          console.log('bat dau spawn');
          this.scheduleOnce(() => {
            this.countEle();
          });
          var bulletPrefab0 = this.enemyWave3;

          for (var j = 0; j < 5; j++) {
            var prefabInstance = instantiate(bulletPrefab0);
            prefabInstance.parent = this.node;

            switch (this.countElement) {
              case 1:
                prefabInstance.setWorldPosition(this.listPos[1].x - 100 * (0 + j), this.listPos[1].y + 60 * (j + 1), this.listPos[0].z);
                break;

              case 2:
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
                break;

              case 3:
                prefabInstance.setWorldPosition(this.listPos[2].x + 140 * (j - 2), this.listPos[2].y, this.listPos[2].z);
                break;

              case 4:
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
                break;

              case 5:
                prefabInstance.setWorldPosition(this.listPos[3].x + 140 * (j - 2), this.listPos[3].y, this.listPos[3].z);
                break;

              case 6:
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
                break;

              case 7:
                prefabInstance.setWorldPosition(this.listPos[4].x + 140 * (j - 2), this.listPos[4].y, this.listPos[4].z);
                break;

              case 8:
                prefabInstance.setWorldPosition(this.listPos[5].x + 140 * (j - 2), this.listPos[5].y, this.listPos[5].z);
                break;

              case 9:
                prefabInstance.setWorldPosition(this.listPos[6].x + 100 * (0 + j), this.listPos[6].y + 60 * (j + 1), this.listPos[6].z);
                break;

              case 0:
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
                break;

              default:
                break;
            }
          }
        }

        spawnBoss1() {
          var enemyPre = this.listBoss[0];
          this.healthBar.node.active = true;
          this.healthBar.progress = 1;
          var prefabInstance = instantiate(enemyPre);
          prefabInstance.parent = this.node;
          prefabInstance.setWorldPosition(this.listPos[7]);
        }

        spawnBoss2() {
          var enemyPre = this.listBoss[1];
          this.healthBar.node.active = true;
          this.healthBar.progress = 1;
          var prefabInstance = instantiate(enemyPre);
          prefabInstance.parent = this.node;
          prefabInstance.setWorldPosition(this.listPos[7]);
        }

        spawnBoss3() {
          var enemyPre = this.listBoss[2];
          this.healthBar.node.active = true;
          this.healthBar.progress = 1;
          var prefabInstance = instantiate(enemyPre);
          prefabInstance.parent = this.node;
          prefabInstance.setWorldPosition(this.listPos[7]);
        }

        spawnObject() {
          if (!(_crd && ButtonPlayScene === void 0 ? (_reportPossibleCrUseOfButtonPlayScene({
            error: Error()
          }), ButtonPlayScene) : ButtonPlayScene).instance.spawnEnabled) return;
          var object = this.objectPool.get();

          if (!object) {
            object = instantiate(this.helicop);
          }

          object.parent = this.node;
          object.setWorldPosition(0, 500, 0);
          this.node.addChild(object);
        }

        countPoint(point) {
          this.destroyCount += point;
          this.countPointLb.string = "" + this.destroyCount;
          this.overPointLb.string = "" + this.destroyCount;
        }

        savePoint() {
          this.overPointLb.string = "" + this.destroyCount;
          var storedHighPoint = parseInt(sys.localStorage.getItem('highPoint'));

          if (!isNaN(storedHighPoint)) {
            this.highPoint = storedHighPoint;
          }

          if (this.destroyCount > this.highPoint) {
            this.highPoint = this.destroyCount;
            sys.localStorage.setItem('highPoint', this.highPoint.toString());
          }

          this.highPointLb.string = "" + this.highPoint;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyWave1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyWave2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyWave3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listBoss", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "helicop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "overNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "countPointLb", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "overPointLb", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "highPointLb", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "healthBar", [_dec11], {
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
//# sourceMappingURL=bbc2fd0d2d5c02880ab45b199f0326d2a447f5ed.js.map