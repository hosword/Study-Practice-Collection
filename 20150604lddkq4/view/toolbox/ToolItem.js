var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ToolItem = (function (_super) {
    __extends(ToolItem, _super);
    function ToolItem(icon) {
        _super.call(this);

        var img;
        var tmp_mc;

        img = lib.getResult("DPT");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[130, 0, 107, 106, 0, 3, 3], [237, 0, 107, 106, 0, 3, 3]] }));
        tmp_mc.x = 16;
        tmp_mc.y = 10;
        this.circle = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 130, 120, 0, 0, 0]] }));
        this.brect = tmp_mc;

        this.addChild(this.circle);
        this.addChild(icon);

        var br = this.brect.getBounds();
        this.setBounds(0, 0, br.width, br.height);
        icon.x = (br.width - icon.getBounds().width) / 2;
        icon.y = (br.height - icon.getBounds().height) / 2;
        this.hitArea = this.brect;
    }
    ToolItem.prototype.setSelect = function (val) {
        if (val) {
            this.circle.gotoAndStop(1);
        } else {
            this.circle.gotoAndStop(0);
        }
    };
    return ToolItem;
})(createjs.Container);
//# sourceMappingURL=ToolItem.js.map
