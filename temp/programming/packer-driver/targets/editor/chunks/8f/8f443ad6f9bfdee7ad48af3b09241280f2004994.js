System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Vec3, instantiate, macro, Plane, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, GameCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c28cat2/pE9YMmYF7hQ/Ix", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec3', 'instantiate', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_class3 = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemyWave1", _descriptor, this);

          _initializerDefineProperty(this, "enemyWave2", _descriptor2, this);

          _initializerDefineProperty(this, "enemyWave3", _descriptor3, this);

          _initializerDefineProperty(this, "helicop", _descriptor4, this);

          this.listPos = [new Vec3(640, 760), //turn 1, 3, 5, 7
          new Vec3(-50, 760), //turn 2
          new Vec3(-100, 560), //turn 4
          new Vec3(-50, 270), //turn 6
          new Vec3(1330, 560), //turn 8
          new Vec3(1330, 270), //turn 9
          new Vec3(1330, 760), //turn 10
          new Vec3(640, 500) //turn boss
          ];
        }

        onLoad() {
          GameCtrl.instance = this;
        }

        start() {
          this.scheduleOnce(() => {
            this.spawnTurn1(0);
          }, 7); // this.scheduleOnce(() => {this.spawnTurn2(0)}, 84);
          // this.scheduleOnce(() => {this.spawnTurn3(0)}, 161);
          // this.spawnBoss1();
          // this.spawnBoss3();
          // this.spawnBoss2();

          this.schedule(this.spawnHeli, 21, macro.REPEAT_FOREVER, 0);
        }

        spawnTurn1(i) {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;

          if (i < this.enemyWave1.length) {
            setTimeout(() => {
              this.spawnTurn1(i + 1);
            }, 7000);
            console.log('da spawn', i);

            for (let j = 0; j < 5; j++) {
              let enemyPre = this.enemyWave1[i];
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;

              if (enemyPre.name.endsWith('_0')) {
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_1')) {
                prefabInstance.setWorldPosition(this.listPos[1].x - 100 * (0 + j), this.listPos[1].y + 60 * (j + 1), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_2')) {
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_3')) {
                prefabInstance.setWorldPosition(this.listPos[2].x + 140 * (j - 2), this.listPos[2].y, this.listPos[2].z);
              }

              if (enemyPre.name.endsWith('_4')) {
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_5')) {
                prefabInstance.setWorldPosition(this.listPos[3].x + 140 * (j - 2), this.listPos[3].y, this.listPos[3].z);
              }

              if (enemyPre.name.endsWith('_6')) {
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_7')) {
                prefabInstance.setWorldPosition(this.listPos[4].x + 140 * (j - 2), this.listPos[4].y, this.listPos[4].z);
              }

              if (enemyPre.name.endsWith('_8')) {
                prefabInstance.setWorldPosition(this.listPos[5].x + 140 * (j - 2), this.listPos[5].y, this.listPos[5].z);
              }

              if (enemyPre.name.endsWith('_9')) {
                prefabInstance.setWorldPosition(this.listPos[6].x + 100 * (0 + j), this.listPos[6].y + 60 * (j + 1), this.listPos[6].z);
              }
            }
          } else {
            return;
          }
        }

        spawnBoss1() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;
          let enemyPre = this.enemyWave1[10];
          let prefabInstance = instantiate(enemyPre);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.listPos[7]);
        }

        spawnTurn2(i) {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;

          if (i < this.enemyWave2.length) {
            setTimeout(() => {
              this.spawnTurn2(i + 1);
            }, 5000);
            console.log('da spawn', i);

            for (let j = 0; j < 5; j++) {
              let enemyPre = this.enemyWave2[i];
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;

              if (enemyPre.name.endsWith('_0')) {
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_1')) {
                prefabInstance.setWorldPosition(this.listPos[1].x - 100 * (0 + j), this.listPos[1].y + 60 * (j + 1), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_2')) {
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_3')) {
                prefabInstance.setWorldPosition(this.listPos[2].x + 140 * (j - 2), this.listPos[2].y, this.listPos[2].z);
              }

              if (enemyPre.name.endsWith('_4')) {
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_5')) {
                prefabInstance.setWorldPosition(this.listPos[3].x + 140 * (j - 2), this.listPos[3].y, this.listPos[3].z);
              }

              if (enemyPre.name.endsWith('_6')) {
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_7')) {
                prefabInstance.setWorldPosition(this.listPos[4].x + 140 * (j - 2), this.listPos[4].y, this.listPos[4].z);
              }

              if (enemyPre.name.endsWith('_8')) {
                prefabInstance.setWorldPosition(this.listPos[5].x + 140 * (j - 2), this.listPos[5].y, this.listPos[5].z);
              }

              if (enemyPre.name.endsWith('_9')) {
                prefabInstance.setWorldPosition(this.listPos[6].x + 100 * (0 + j), this.listPos[6].y + 60 * (j + 1), this.listPos[6].z);
              }
            }
          } else {
            return;
          }
        }

        spawnBoss2() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;
          let enemyPre = this.enemyWave2[10];
          let prefabInstance = instantiate(enemyPre);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.listPos[7]);
        }

        spawnTurn3(i) {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;

          if (i < this.enemyWave3.length) {
            setTimeout(() => {
              this.spawnTurn3(i + 1);
            }, 5000);
            console.log('da spawn', i);

            for (let j = 0; j < 5; j++) {
              let enemyPre = this.enemyWave3[i];
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;

              if (enemyPre.name.endsWith('_0')) {
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_1')) {
                prefabInstance.setWorldPosition(this.listPos[1].x - 100 * (0 + j), this.listPos[1].y + 60 * (j + 1), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_2')) {
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_3')) {
                prefabInstance.setWorldPosition(this.listPos[2].x + 140 * (j - 2), this.listPos[2].y, this.listPos[2].z);
              }

              if (enemyPre.name.endsWith('_4')) {
                prefabInstance.setWorldPosition(this.listPos[0].x, this.listPos[0].y + 120 * (0 + j), this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_5')) {
                prefabInstance.setWorldPosition(this.listPos[3].x + 140 * (j - 2), this.listPos[3].y, this.listPos[3].z);
              }

              if (enemyPre.name.endsWith('_6')) {
                prefabInstance.setWorldPosition(this.listPos[0].x + 120 * (j - 2), this.listPos[0].y, this.listPos[0].z);
              }

              if (enemyPre.name.endsWith('_7')) {
                prefabInstance.setWorldPosition(this.listPos[4].x + 140 * (j - 2), this.listPos[4].y, this.listPos[4].z);
              }

              if (enemyPre.name.endsWith('_8')) {
                prefabInstance.setWorldPosition(this.listPos[5].x + 140 * (j - 2), this.listPos[5].y, this.listPos[5].z);
              }

              if (enemyPre.name.endsWith('_9')) {
                prefabInstance.setWorldPosition(this.listPos[6].x + 100 * (0 + j), this.listPos[6].y + 60 * (j + 1), this.listPos[6].z);
              }
            }
          } else {
            return;
          }
        }

        spawnBoss3() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;
          let enemyPre = this.enemyWave3[10];
          let prefabInstance = instantiate(enemyPre);
          prefabInstance.parent = this.node.parent;
          prefabInstance.setWorldPosition(this.listPos[7]);
        }

        spawnHeli() {
          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;
          let helicopPre = this.helicop;
          let prefabInstance = instantiate(helicopPre);
          let spawnPos = new Vec3(-690, 225);
          prefabInstance.setPosition(spawnPos);
          this.node.addChild(prefabInstance);
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyWave1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyWave2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyWave3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "helicop", [_dec5], {
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
//# sourceMappingURL=8f443ad6f9bfdee7ad48af3b09241280f2004994.js.map