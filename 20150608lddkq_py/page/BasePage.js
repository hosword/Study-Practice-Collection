var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BasePage = (function (_super) {
    __extends(BasePage, _super);
    function BasePage() {
        _super.call(this);
        //1136x640手机16：9尺寸
        this._width = 1136;
        this._height = 640;
    }
    BasePage.prototype.show = function () {
        if (!this.visible) {
            this.x = 0;
            this.visible = true;
            this.alpha = 1;
            this.showPageComplete();
            //this.uncache();
            //createjs.Tween.get(this).to({ alpha: 1, visible: true }, 500, createjs.Ease.quadIn);
        }
    };
    BasePage.prototype.showPageComplete = function () {
    };

    BasePage.prototype.close = function () {
        //this.cache(0, 0, this._width,this._height,1);
        createjs.Tween.get(this).to({ x: -this._width, alpha: 0 }, 500, createjs.Ease.quadIn).call(this.closePageComplete, null, this);
    };

    BasePage.prototype.closePageComplete = function () {
        this.visible = false;
    };

    BasePage.prototype.setSize = function (w, h) {
        this._width = w;
        this._height = h;
    };
    return BasePage;
})(createjs.Container);
//# sourceMappingURL=BasePage.js.map
