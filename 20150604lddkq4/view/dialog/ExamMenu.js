var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ExamMenu = (function (_super) {
    __extends(ExamMenu, _super);
    function ExamMenu() {
        if (ExamMenu.instance_mc) {
            trace("ExamMenu Error");
            return;
        }
        ExamMenu.instance_mc = this;
        _super.call(this);
    }
    ExamMenu.getInstance = function () {
        var m = ExamMenu.instance_mc;
        return m;
    };

    ExamMenu.prototype.configUI = function () {
    };

    ExamMenu.prototype.configUI2 = function () {
        uied = true;
        var img;
        var tmp_mc;

        img = lib.getResult("EMD");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 311, 91, 0, 0, 0], [0, 0, 311, 91, 0, 0, 0], [311, 0, 311, 91, 0, 0, 0]] }));
        tmp_mc.x = -149;
        tmp_mc.y = 66;
        this.back_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 91, 388, 401, 0, 0, 0]] }));
        tmp_mc.x = -195;
        tmp_mc.y = -183;
        this.bg_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 492, 311, 91, 0, 0, 0], [0, 492, 311, 91, 0, 0, 0], [311, 492, 311, 91, 0, 0, 0]] }));
        tmp_mc.x = -157;
        tmp_mc.y = -149;
        this.con_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 583, 453, 134, 0, 0, 0]] }));
        tmp_mc.x = -216;
        tmp_mc.y = 94;
        this.glass_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 717, 311, 91, 0, 0, 0], [0, 717, 311, 91, 0, 0, 0], [311, 717, 311, 91, 0, 0, 0]] }));
        tmp_mc.x = -153;
        tmp_mc.y = -43;
        this.reset_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);

        this.glass_mc.mouseEnabled = false;
        this.bg_mc.mouseEnabled = false;

        this.addChild(this.bg_mc);
        this.addChild(this.con_btn);
        this.addChild(this.reset_btn);
        this.addChild(this.back_btn);
        this.addChild(this.glass_mc);
    };

    ExamMenu.prototype.show = function () {
        var art = this;
        if (!art.uied) {
            art.configUI2();
        }

        var p = Project.topLayout;
        var m = art.createModal();
        m.setSize(p._width, p._height);
        p.addChild(m);
        art.clickM2Close = true;

        p.addChild(art);
        art.move(art.parent._width / 2, art.parent._height / 2);
        art.message(null, 0, 0, 0);
        art.on("click", this.onClick, this);
        return art;
    };

    ExamMenu.prototype.onClick = function (e) {
        if (e.target == this.reset_btn) {
            this.dispatchEvent(new createjs.Event("reset", false, true));
            this.closeTip();
        } else if (e.target == this.con_btn) {
            this.dispatchEvent(new createjs.Event("continue", false, true));
            this.closeTip();
        } else if (e.target == this.back_btn) {
            this.dispatchEvent(new createjs.Event("back", false, true));
            this.closeTip();
        }
    };

    ExamMenu.prototype.closeTip = function () {
        this.removeAllEventListeners();
        _super.prototype.closeTip.call(this);
    };
    ExamMenu.instance_mc = new ExamMenu();
    return ExamMenu;
})(Alert);
//# sourceMappingURL=ExamMenu.js.map
