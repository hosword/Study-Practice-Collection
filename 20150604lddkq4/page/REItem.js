var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var REItem = (function (_super) {
    __extends(REItem, _super);
    function REItem() {
        _super.call(this);

        //框
        var img = lib.getResult("SYRT");
        img.crossOrigin = "Anonymous";
        this.bg = new createjs.Bitmap(img);
        this.bg.x = 11;
        this.bg.mouseEnabled = false;

        img = lib.getResult("SYT");

        //标题
        var tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 127, 58, 0, 0, 0], [127, 0, 127, 58, 0, 0, 0], [0, 58, 127, 58, 0, 0, 0], [127, 58, 127, 58, 0, 0, 0], [0, 116, 127, 58, 0, 0, 0], [127, 116, 127, 58, 0, 0, 0]] }));
        tmp_mc.x = 0;
        tmp_mc.y = 6;
        tmp_mc.mouseEnabled = false;
        this.title_mc = tmp_mc;

        this.thumbnail_mc = new createjs.Bitmap("");
        this.thumbnail_mc.move(49, 55);
        this.addChild(this.thumbnail_mc);
        this.addChild(this.bg);
        this.addChild(this.title_mc);
    }
    REItem.prototype.setData = function (url, index) {
        this.thumbnail_mc.image.src = url;
        this.title_mc.gotoAndStop(index);
    };
    return REItem;
})(createjs.Container);
//# sourceMappingURL=REItem.js.map
