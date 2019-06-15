var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Confirm = (function (_super) {
    __extends(Confirm, _super);
    function Confirm() {
        _super.call(this);
    }
    Confirm.prototype.configUI = function () {
        _super.prototype.configUI.call(this);

        var img;
        var tmp_mc;

        img = lib.getResult("ART");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 407, 112, 57, 0, -4.95, -2.5], [0, 407, 112, 57, 0, -4.95, -2.5], [112, 407, 123, 62, 0, 0.05, -0.5], [235, 407, 125, 64, 0, 0.05, 0.5]] }));
        tmp_mc.x = 17;
        tmp_mc.y = 94;
        this.cancel_btn = tmp_mc;

        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);

        tmp_mc = this.ok_btn;
        tmp_mc.x = -143;
        tmp_mc.y = 93;

        this.addChild(this.cancel_btn);
    };

    Confirm.prototype.onClick = function (e) {
        _super.prototype.onClick.call(this, e);
        if (e.target == this.cancel_btn) {
            var evt = new createjs.Event("cancel", false, true);
            this.dispatchEvent(evt);

            if (!evt.defaultPrevented) {
                this.closeTip();
            }
        }
    };

    Confirm.show = function (content, frame, autoclose, delay, modal, cm2Close) {
        var p = Project.topLayout;
        var art = new Confirm();
        if (modal) {
            var m = art.createModal();
            m.setSize(p._width, p._height);
            p.addChild(m);
            art.clickM2Close = cm2Close;
        }
        p.addChild(art);
        art.move(art.parent._width / 2, art.parent._height / 2);
        art.message(content, frame, autoclose, delay);
        return art;
    };
    return Confirm;
})(Alert);
//# sourceMappingURL=Confirm.js.map
