System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Collider2D, Contact2DType, instantiate, Plane, GameCtrl, _dec, _class, _class2, _crd, ccclass, property, Helicopter;

  function _reportPossibleCrUseOfPlane(extras) {
    _reporterNs.report("Plane", "./Plane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
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
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Plane = _unresolved_2.Plane;
    }, function (_unresolved_3) {
      GameCtrl = _unresolved_3.GameCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a2c0vGR4JALLdUgSM6K5LM", "Helicopter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Helicopter", Helicopter = (_dec = ccclass('Helicopter'), _dec(_class = (_class2 = class Helicopter extends Component {
        constructor(...args) {
          super(...args);
          this.bulletSpeed = 10;
          this.posX = void 0;
          this.posY = void 0;
          this.spawnItemPos = void 0;
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        onLoad() {
          Helicopter.instance = this;
        }

        update(deltaTime) {
          this.posX = this.node.position.x;
          this.posY = this.node.position.y;
          this.posX += this.bulletSpeed * 0.5;

          if (this.posX > 690) {
            this.node.destroy();
          }

          let posBullet = new Vec3(this.posX, this.posY);
          this.node.setPosition(posBullet); // this.scheduleOnce(() => {console.log(this.spawnItemPos)});
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.spawnItemPos = selfCollider.node.position;
          this.scheduleOnce(() => {
            selfCollider.node.destroy();
          });
          console.log(this.spawnItemPos); // this.scheduleOnce(() =>{GameCtrl.instance.spawnItem()} );

          if (!(_crd && Plane === void 0 ? (_reportPossibleCrUseOfPlane({
            error: Error()
          }), Plane) : Plane).instance.spawnEnabled) return;
          let randomIndex = Math.floor(Math.random() * (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.items.length);
          let randomPrefab = (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl).instance.items[randomIndex];
          let prefabInstance = instantiate(randomPrefab);
          prefabInstance.setPosition(this.spawnItemPos);
          this.node.addChild(prefabInstance);
          this.scheduleOnce(() => {
            this.node.addChild(prefabInstance);
          });
        }

        onEndContact(selfCollider, otherCollider, contact) {}

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=810cc9f0d4d4276d26b901b9c9b1126bcc0356e0.js.map