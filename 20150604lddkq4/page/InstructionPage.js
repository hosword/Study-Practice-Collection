var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var InstructionPage = (function (_super) {
    __extends(InstructionPage, _super);
    function InstructionPage() {
        _super.call(this);
        this.configUI();
        this.configContent();
        this.addChilds();
    }
    InstructionPage.prototype.configUI = function () {
        var img;
        var tmp_mc;
        var tmp2_mc;

        //绿草纹理
        var img = lib.getResult("GBG");
        img.crossOrigin = "Anonymous";
        this.bg = new createjs.Bitmap(img);
        this.bg.mouseEnabled = false;

        img = lib.getResult("btns");

        //返回上页
        var tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[71, 205, 70, 60, 0, 0, 0], [71, 205, 70, 60, 0, 0, 0], [141, 205, 70, 60, 0, 0, 0]] }));
        tmp_mc.x = 5;
        tmp_mc.y = 4;
        tmp2_mc = new createjs.Shape(new createjs.Graphics());
        tmp2_mc.graphics.beginFill("#000");
        tmp2_mc.graphics.drawRect(0, 0, 60, 52);
        tmp2_mc.graphics.endFill();
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc);
        this.back_btn = tmp_mc;

        //返回主页
        var tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[71, 265, 59, 52, 0, 0, 0], [71, 265, 59, 52, 0, 0, 0], [130, 265, 59, 52, 0, 0, 0]] }));
        tmp_mc.x = 1073;
        tmp_mc.y = 2;
        tmp2_mc = new createjs.Shape(new createjs.Graphics());
        tmp2_mc.graphics.beginFill("#000");
        tmp2_mc.graphics.drawRect(0, 0, 60, 52);
        tmp2_mc.graphics.endFill();
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc);
        this.home_btn = tmp_mc;

        img = lib.getResult("XXT");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 166, 50, 0, 0, 0]] }));
        tmp_mc.x = 159;
        tmp_mc.y = 525;
        this.title_mc = tmp_mc;

        img = lib.getResult("XXC");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 987, 163, 0, 520.65, 127.95]] }));
        tmp_mc.x = 575;
        tmp_mc.y = 614;
        this.page_mc = tmp_mc;
    };

    InstructionPage.prototype.addChilds = function () {
        this.addChild(this.bg);
        this.addChild(this.back_btn);
        this.addChild(this.home_btn);
        this.addChild(this.page_mc);
        this.addChild(this.title_mc);
        if (this.content_mc) {
            this.addChild(this.content_mc);
        }

        this.initChildsRect();
        this.on("click", this.btnClickHandler, this);
    };

    InstructionPage.prototype.configContent = function () {
        this.imgUrl = "images/inc/INC";

        this.content_mc = new createjs.Bitmap(this.getContentUrl(0));
        this.content_mc.move(130, 90);

        //this.minFrame = 0;
        //this.maxFrame = 0;
        this.changeContentAt(0);
    };

    InstructionPage.prototype.getContentUrl = function (n) {
        var s2 = "0000";
        var s = (n + 1) + "";
        return this.imgUrl + s2.substr(0, s2.length - s.length) + s + ".png";
    };

    InstructionPage.prototype.btnClickHandler = function (e) {
        var et = e.target;
        if (et == this.home_btn) {
            this.dispatchEvent(new createjs.Event(ProjectEvent.HOME_Project, true));
        } else if (et == this.back_btn) {
            this.dispatchEvent(new createjs.Event(ProjectEvent.BACK_Project, true));
        }
    };

    InstructionPage.prototype.changeContentAt = function (ix) {
        this.content_mc.image.src = this.getContentUrl(ix);
    };

    InstructionPage.prototype.setSize = function (w, h) {
        _super.prototype.setSize.call(this, w, h);
        this.bg.scaleX = w / this.bg.image.width;
        this.bg.scaleY = h / this.bg.image.height;

        this.content_mc._height = this.content_mc.getBounds().height;

        this.alignDirection(this.home_btn, DirectionType.RIGHT);
        this.alignDirection(this.content_mc, DirectionType.CENTER);
        this.alignDirection(this.page_mc, DirectionType.BOTTOM);
        this.page_mc.alignTarget(this.content_mc, DirectionType.OFFSET_X);
        this.title_mc.alignTarget(this.page_mc, DirectionType.OFFSET_X | DirectionType.OFFSET_Y);
    };
    return InstructionPage;
})(BasePage);
//# sourceMappingURL=InstructionPage.js.map
