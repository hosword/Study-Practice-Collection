var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ToolContent = (function (_super) {
    __extends(ToolContent, _super);
    function ToolContent() {
        _super.call(this);
        var img;
        var tmp_mc;

        img = lib.getResult("DPT");

        this.pt0 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 120, 78, 101, 0, 0, 0]] })));

        //this.pt1 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[78, 120, 54, 104, 0, 0, 0]] })));
        this.pt2 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[132, 120, 39, 118, 0, 0, 0]] })));

        this.pt3 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[171, 120, 80, 115, 0, 0, 0]] })));

        this.pt4 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[251, 120, 120, 28, 0, 0, 0]] })));

        this.pt5 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 238, 55, 118, 0, 0, 0]] })));

        this.pt6 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[55, 238, 83, 114, 0, 0, 0]] })));

        this.pt7 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[138, 238, 99, 42, 0, 0, 0]] })));

        this.pt8 = new ToolItem(new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[237, 238, 60, 117, 0, 0, 0]] })));

        this.addChild(this.pt0);

        //this.addChild(this.pt1);
        this.addChild(this.pt2);
        this.addChild(this.pt3);
        this.addChild(this.pt4);
        this.addChild(this.pt5);
        this.addChild(this.pt6);
        this.addChild(this.pt7);
        this.addChild(this.pt8);
    }
    return ToolContent;
})(createjs.Container);
//# sourceMappingURL=ToolContent.js.map
