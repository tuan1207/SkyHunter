System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameCtrl;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c28cat2/pE9YMmYF7hQ/Ix", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec3', 'instantiate', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemyWave1", _descriptor, this);

          _initializerDefineProperty(this, "enemyWave2", _descriptor2, this);

          _initializerDefineProperty(this, "enemyWave3", _descriptor3, this);

          this.spawnFunc1 = [false, false, false, false, false, false, false, false, false, false];
        }

        start() {
          this.spawn(0);
        }

        update(deltaTime) {}

        spawn(i) {
          if (i < this.enemyWave1.length) {
            setTimeout(() => {
              this.spawn(i + 1);
            }, 1500);
            console.log('da spawn', i);

            for (let j = 0; j < 5; j++) {
              let enemyPre = this.enemyWave1[i];
              let prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node.parent;

              if (enemyPre.name.endsWith('_0')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x + 120 * (j - 2), this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_1')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x - 120 * (j + 2), this.node.worldPosition.y + 120 * (j - 2), this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_2')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_3')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_4')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_5')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_6')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_7')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_8')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }

              if (enemyPre.name.endsWith('_9')) {
                prefabInstance.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + 1000, this.node.worldPosition.z);
              }
            }
          } else {
            return;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyWave1", [_dec2], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5c07876ddd760b26e8f29de12c637d377012e64.js.map