System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, Vec3, instantiate, macro, Label, ProgressBar, sys, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _crd, ccclass, property, GameCtrl;

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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c28cat2/pE9YMmYF7hQ/Ix", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec3', 'instantiate', 'macro', 'Label', 'ProgressBar', 'System', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(ProgressBar), _dec(_class = (_class2 = (_class3 = class GameCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemyWave1", _descriptor, this);

          _initializerDefineProperty(this, "helicop", _descriptor2, this);

          _initializerDefineProperty(this, "overNode", _descriptor3, this);

          _initializerDefineProperty(this, "countPointLb", _descriptor4, this);

          _initializerDefineProperty(this, "overPointLb", _descriptor5, this);

          _initializerDefineProperty(this, "highPointLb", _descriptor6, this);

          _initializerDefineProperty(this, "healthBar", _descriptor7, this);

          this.destroyCount = 0;
          this.highPoint = 0;
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
          this.spawnTurn1();
          this.schedule(this.spawnHeli, 21, macro.REPEAT_FOREVER, 0);
        }

        spawnTurn1() {
          if (!this.checkTurn1 || !this.spawnEnable) return;
          var i = 0;

          if (i < this.enemyWave1.length) {
            this.schedule(i++, 6, macro.REPEAT_FOREVER, 0);

            for (var _i = 0; _i < 5; _i++) {
              var enemyPre = this.enemyWave1[_i];
              var prefabInstance = instantiate(enemyPre);
              prefabInstance.parent = this.node;
            }
          }
        }

        spawnHeli() {
          var helicopPre = this.helicop;
          var prefabInstance = instantiate(helicopPre);
          var spawnPos = new Vec3(-690, 225);
          prefabInstance.setPosition(spawnPos);
          this.node.addChild(prefabInstance);
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
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "helicop", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "overNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "countPointLb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "overPointLb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "highPointLb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "healthBar", [_dec8], {
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
//# sourceMappingURL=bdd8f59a2426471ebd82bbc10626c383f5500a6c.js.map