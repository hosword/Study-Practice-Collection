var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ToolBox = (function (_super) {
    __extends(ToolBox, _super);
    function ToolBox() {
        _super.call(this);
        var img;
        var tmp_mc;

        img = lib.getResult("TBI");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 97, 71, 0, 2.4, 3.9], [0, 72, 95, 71, 0, 2.4, 3.9]] }));
        tmp_mc.x = -84;
        tmp_mc.y = -33;
        this.gjx_mc = tmp_mc;

        tmp_mc = new ToolBar();
        tmp_mc.y = -42;
        this.toolbar_mc = tmp_mc;

        this.nowTB_rect = new createjs.Rectangle();
        this.oriTB_p = new createjs.Point(this.toolbar_mc.x, this.toolbar_mc.y);

        this.addChild(this.toolbar_mc);
        this.addChild(this.gjx_mc);

        this.gjx_mc.on("click", this.clickHandler, this);
    }
    ToolBox.prototype.clickHandler = function (e) {
        if (e.currentTarget == this.gjx_mc) {
            this.toggle();
        }
    };

    ToolBox.prototype.toggle = function () {
        if (this.isShowed) {
            this.close();
        } else {
            this.show();
        }
    };

    ToolBox.prototype.show = function (delay) {
        if (typeof delay === "undefined") { delay = 0; }
        this.gjx_mc.gotoAndStop(1);
        this.isShowed = true;
        var direct = this.toolbar_mc.direction;
        var p = new createjs.Point();
        var endRect = new createjs.Rectangle();
        var tbWidth = this.toolbar_mc.getWidth();
        var tbHeight = this.toolbar_mc.getHeight();
        switch (direct) {
            case ToolBar.LEFT:
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(-tbWidth, 0, tbWidth, tbHeight);
                }
                endRect.setValues(0, 0, tbWidth, tbHeight);
                p.x = this.gjx_mc.x + 10 - tbWidth;
                p.y = this.oriTB_p.y;
                break;
            case ToolBar.TOP:
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(0, -tbHeight, tbWidth, tbHeight);
                }

                endRect.setValues(0, 0, tbWidth, tbHeight);

                p.x = this.gjx_mc.x;
                p.y = this.gjx_mc.y + 10 - tbHeight;
                break;

            case ToolBar.RIGHT:
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(tbWidth, 0, 0, tbHeight);
                }

                endRect.setValues(0, 0, tbWidth, tbHeight);

                p.x = this.oriTB_p.x;
                p.y = this.oriTB_p.y;
                break;

            case ToolBar.BOTTOM:
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(0, tbHeight, tbWidth, 0);
                }

                endRect.setValues(0, 0, tbWidth, tbHeight);

                p.x = this.gjx_mc.x;
                p.y = this.gjx_mc.y - 10 + this.gjx_mc.getBounds().height;
                break;
        }
        this.lastDirection = direct;
        this.toolbar_mc.x = p.x;
        this.toolbar_mc.y = p.y;
        var tween = createjs.Tween.get(this.nowTB_rect, { override: true });
        if (delay > 0) {
            tween.wait(delay);
        }
        tween.to({ x: endRect.x, y: endRect.y, width: endRect.width, height: endRect.height }, 400).call(this.onShowed, [], this).on("change", this.tweenTBUpdate, this);
    };

    ToolBox.prototype.onShowed = function () {
        this.dispatchEvent(new createjs.Event("showed"));
    };

    ToolBox.prototype.closeBase = function () {
        this.gjx_mc.gotoAndStop(0);
        this.isShowed = false;
        var direct = this.toolbar_mc.direction;
        var p = new createjs.Point();
        var endRect = new createjs.Rectangle();
        var tbWidth = this.toolbar_mc.getWidth();
        var tbHeight = this.toolbar_mc.getHeight();
        switch (direct) {
            case ToolBar.LEFT:
                endRect.setValues(-tbWidth, 0, tbWidth - 2, tbHeight);

                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(0, 0, tbWidth, tbHeight);
                }

                p.x = this.gjx_mc.x + 10 - tbWidth;
                p.y = this.oriTB_p.y;
                break;
            case ToolBar.TOP:
                endRect.setValues(0, -tbHeight, tbWidth, tbHeight - 2);
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(0, 0, tbWidth, tbHeight);
                }

                p.x = this.gjx_mc.x;
                p.y = this.gjx_mc.y + 10 - tbHeight;
                break;

            case ToolBar.RIGHT:
                endRect.setValues(tbWidth, 0, 0, tbHeight);
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(0, 0, tbWidth, tbHeight);
                }

                p.x = this.oriTB_p.x;
                p.y = this.oriTB_p.y;
                break;

            case ToolBar.BOTTOM:
                endRect.setValues(0, tbHeight, tbWidth, 0);
                if (this.lastDirection != direct) {
                    this.nowTB_rect.setValues(0, 0, tbWidth, tbHeight);
                }

                p.x = this.gjx_mc.x;
                p.y = this.gjx_mc.y - 10 + this.gjx_mc.getBounds().height;
                break;
        }

        this.toolbar_mc.x = p.x;
        this.toolbar_mc.y = p.y;

        return endRect;
    };

    ToolBox.prototype.close = function (delay) {
        var endRect = this.closeBase();
        var tween = createjs.Tween.get(this.nowTB_rect);
        if (delay > 0) {
            tween.wait(delay);
        }
        tween.to({ x: endRect.x, y: endRect.y, width: endRect.width, height: endRect.height }, 300).on("change", this.tweenTBUpdate, this);
        ;
    };

    ToolBox.prototype.tweenTBUpdate = function () {
        this.toolbar_mc.scrollRect = this.nowTB_rect;
    };

    ToolBox.prototype.closeNow = function () {
        var endRect = this.closeBase();
        this.nowTB_rect.setValues(endRect.x, endRect.y, endRect.width, endRect.height);
        this.tweenTBUpdate();
    };
    return ToolBox;
})(createjs.Container);
//# sourceMappingURL=ToolBox.js.map
