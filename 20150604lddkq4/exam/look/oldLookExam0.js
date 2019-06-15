var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LookExam0 = (function (_super) {
    __extends(LookExam0, _super);
    function LookExam0() {
        _super.call(this);

        var img;
        var tmp;

        img = lib.getResult("IFtxt");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[628, 466, 345, 116, 0, 0, 0], [314, 272, 314, 155, 0, 0, 0], [628, 233, 328, 233, 0, 0, 0], [0, 0, 314, 272, 0, 0, 0], [314, 427, 314, 155, 0, 0, 0], [0, 505, 314, 78, 0, 0, 0], [0, 272, 314, 233, 0, 0, 0], [314, 0, 314, 272, 0, 0, 0], [628, 0, 333, 233, 0, 0, 0]] }));
        tmp_mc.x = 725;
        tmp_mc.y = 68;
        tmp_mc.mouseEnabled = false;
        this.msg_mc = tmp_mc;

        img = lib.getResult("PT0");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[501, 416, 336, 91, 0, 40.8, 21.25], [0, 460, 501, 190, 0, 39.8, 100.25]] }));
        tmp_mc.x = 106;
        tmp_mc.y = 104;
        this.line0 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[363, 0, 470, 208, 0, 389.45, 78.65], [363, 208, 470, 208, 0, 389.45, 78.65]] }));
        tmp_mc.x = 595;
        tmp_mc.y = 79;
        this.line3 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[363, 416, 40, 43, 0, 18.44999999999999, 45.4], [0, 0, 363, 460, 0, 143.45, 45.4]] }));
        tmp_mc.x = 337;
        tmp_mc.y = 38;
        this.line5 = tmp_mc;

        img = lib.getResult("PT1");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[479, 453, 339, 111, 0, 522.85, 91.55], [0, 339, 479, 363, 0, 521.85, 95.55]] }));
        tmp_mc.x = 583;
        tmp_mc.y = 254;
        this.line1 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[479, 339, 335, 114, 0, -271.2, 89.8], [0, 0, 538, 339, 0, -69.2, 92.8]] }));
        tmp_mc.x = 70;
        tmp_mc.y = 219;
        this.line4 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[479, 658, 329, 94, 0, -278.9, 96.15], [479, 564, 331, 94, 0, -276.9, 96.15]] }));
        tmp_mc.x = 70;
        tmp_mc.y = 329;
        this.line6 = tmp_mc;

        img = lib.getResult("PT2");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[429, 407, 344, 201, 0, 45.849999999999994, 165.55], [430, 0, 393, 407, 0, 90.85, 371.55]] }));
        tmp_mc.x = 104;
        tmp_mc.y = 390;
        this.line2 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 385, 429, 382, 0, 385.75, 328.65], [0, 0, 430, 385, 0, 385.75, 328.65]] }));
        tmp_mc.x = 599;
        tmp_mc.y = 400;
        this.line7 = tmp_mc;
        img = lib.getResult("BPT");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 346, 181, 0, 0, 0]] }));
        tmp_mc.x = 214;
        tmp_mc.y = 8;

        //tmp_mc.mouseEnabled = false;
        this.pt0 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[346, 0, 55, 87, 0, 0, 0]] }));
        tmp_mc.x = 342;
        tmp_mc.y = 157;

        //tmp_mc.mouseEnabled = false;
        this.pt1 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[401, 0, 54, 161, 0, 0, 0]] }));
        tmp_mc.x = 345;
        tmp_mc.y = 225;

        //tmp_mc.mouseEnabled = false;
        this.pt2 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[455, 0, 346, 181, 0, 0, 0]] }));
        tmp_mc.x = 214;
        tmp_mc.y = 9;

        //tmp_mc.mouseEnabled = false;
        this.pt3 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[801, 0, 50, 18, 0, -134.5, -122.8]] }));
        tmp_mc.x = 214;
        tmp_mc.y = 9;

        //tmp_mc.mouseEnabled = false;
        this.pt4 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[851, 0, 40, 26, 0, -16, -80.4]] }));
        tmp_mc.x = 342;
        tmp_mc.y = 157;

        //tmp_mc.mouseEnabled = false;
        this.pt6 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 181, 257, 365, 0, 0, 0]] }));
        tmp_mc.x = 237;
        tmp_mc.y = 80;

        //tmp_mc.mouseEnabled = false;
        this.pt7 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[257, 181, 359, 451, 0, 21.7, 241.1]] }));
        tmp_mc.x = 228;
        tmp_mc.y = 245;
        tmp_mc.mouseEnabled = false;
        this.sw_mc = tmp_mc;

        tmp = new createjs.Container();
        tmp.x = 31;
        tmp.y = 101;
        this.content = tmp;

        this.addChild(this.content);

        this.content.addChild(this.msg_mc);

        this.content.addChild(this.sw_mc);

        this.content.addChild(this.pt7);
        this.content.addChild(this.pt0);
        this.content.addChild(this.pt2);
        this.content.addChild(this.pt1);
        this.content.addChild(this.pt3);
        this.content.addChild(this.pt4);
        this.content.addChild(this.pt6);

        this.content.addChild(this.line0);
        this.content.addChild(this.line1);
        this.content.addChild(this.line2);
        this.content.addChild(this.line3);
        this.content.addChild(this.line4);
        this.content.addChild(this.line5);
        this.content.addChild(this.line6);
        this.content.addChild(this.line7);

        var g = new createjs.Graphics();
        g.beginFill("#000");
        g.drawRect(0, 0, 97, 70);
        g.endFill();
        var hs = new createjs.Shape(g);

        var p_arr = [[55, 73, 1.000, 0.886], [48, 219, 1.000, 0.914], [46, 371, 1.000, 0.914], [588, 103, 1.000, 0.857], [590, 189, 1.000, 0.914], [301, -11, 0.773, 0.773], [591, 275, 1.000, 0.914], [587, 391, 0.718, 0.812]];

        this.hot_arr = [];
        for (var i = 0; i < 8; i++) {
            var p = p_arr[i];
            var s = new createjs.DisplayObject();
            s.hitArea = hs;
            s.move(p[0], p[1]);
            s.scaleX = p[2];
            s.scaleY = p[3];
            this.content.addChild(s);
            this.hot_arr.push(s);
        }

        this.addLEEvents();
    }
    LookExam0.prototype.reset = function () {
    };

    LookExam0.prototype.setSize = function (w, h) {
        _super.prototype.setSize.call(this, w, h);
    };

    LookExam0.prototype.addLEEvents = function () {
        this.on("click", this.clickHandler, this);
    };
    LookExam0.prototype.clickHandler = function (e) {
        var etr = e.target;

        //检查文字
        var arr = [
            this.line0,
            this.line1,
            this.line2,
            this.line3,
            this.line4,
            this.line5,
            this.line6,
            this.line7];

        //检查实物
        var arr2 = [
            this.pt0,
            this.pt1,
            this.pt2,
            this.pt3,
            this.pt4,
            null,
            this.pt6,
            this.pt7];

        var arr3 = this.hot_arr;

        var st = false;

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var item2 = arr2[i];
            var item3 = arr3[i];
            if (etr == item3 || etr == item2) {
                st = true;
                item.gotoAndStop(1);
                this.msg_mc.gotoAndStop(i + 1);
            } else if (item.currentFrame != 0) {
                item.gotoAndStop(0);
            }
        }
        if (st) {
            e.stopImmediatePropagation();
        } else {
            this.msg_mc.gotoAndStop(0);
        }
    };
    return LookExam0;
})(BaseExam);
//# sourceMappingURL=LookExam0.js.map
