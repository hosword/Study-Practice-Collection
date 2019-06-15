var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WModalBG = (function (_super) {
    __extends(WModalBG, _super);
    function WModalBG() {
        var g = new createjs.Graphics();
        _super.call(this, g);
        this.alpha = 0.5;
    }
    WModalBG.prototype.setSize = function (w, h) {
        var g = this.graphics;
        g.clear();
        g.beginFill("#000000");
        g.drawRect(0, 0, w, h);
        g.endFill();
    };
    return WModalBG;
})(createjs.Shape);
//# sourceMappingURL=WModalBG.js.map
