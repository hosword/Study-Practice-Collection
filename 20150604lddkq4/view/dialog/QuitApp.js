var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var QuitApp = (function (_super) {
    __extends(QuitApp, _super);
    function QuitApp() {
        _super.call(this);
    }
    QuitApp.prototype.configUI = function () {
        var img;
        var tmp_mc;

        img = lib.getResult("QAC");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 404, 62, 0, 0, 0]] }));
        this.qac_mc = tmp_mc;

        img = lib.getResult("BPD");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 477, 398, 0, 414.4, 22.75]] }));
        tmp_mc.x = 176;
        tmp_mc.y = -176;
        this.bg_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 398, 161, 64, 0, 0, 0], [0, 398, 161, 64, 0, 0, 0], [161, 398, 161, 64, 0, 0, 0]] }));
        tmp_mc.x = 11;
        tmp_mc.y = 102;
        this.cancel_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[322, 398, 162, 64, 0, 0, 0], [322, 398, 162, 64, 0, 0, 0], [0, 462, 162, 64, 0, 0, 0]] }));
        tmp_mc.x = -170;
        tmp_mc.y = 102;
        this.ok_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);

        this.addChild(this.bg_mc);
        this.addChild(this.ok_btn);
        this.addChild(this.cancel_btn);
    };

    QuitApp.prototype.onCloseEnd = function () {
        if (this.parent) {
            var m = this.modal_mc;
            if (m && m.parent == this.parent) {
                m.parent.removeChild(m);
            }
            this.parent.removeChild(this);
        }
    };
    QuitApp.prototype.changeMsgContent = function (content, frame) {
        this.contentFrame = frame;
        content.gotoAndStop(frame);
        var crt = content.getBounds();
        content.move(-crt.width / 2, -crt.height / 2);
    };
    QuitApp.prototype.show = function () {
        var o = this;
        var p = Project.topLayout;
        var m = o.createModal();
        m.setSize(p._width, p._height);
        p.addChild(m);
        o.clickM2Close = true;

        p.addChild(o);
        o.move(o.parent._width / 2, o.parent._height / 2);
        o.message(this.qac_mc, 0, 0, 0);
    };
    return QuitApp;
})(Confirm);
//# sourceMappingURL=QuitApp.js.map
