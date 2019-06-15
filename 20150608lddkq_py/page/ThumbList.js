var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ThumbList = (function (_super) {
    __extends(ThumbList, _super);
    function ThumbList() {
        _super.call(this);
        this.itemlist = [];
        this.viewRect = new createjs.Rectangle(0, 0, 10, 10);

        var h_mc = new createjs.Shape(new createjs.Graphics());
        h_mc.graphics.beginFill("#000");
        h_mc.graphics.drawRect(0, 0, 1, 1);
        h_mc.graphics.endFill();
        this.hot_mc = new createjs.DisplayObject();
        this.hot_mc.hitArea = h_mc;
        this.addChild(this.hot_mc);

        this.scroller = new KISTouchScrollHelper();

        this.hot_mc.on("mousedown", this.onHotDown, this, true);
        this.on("changepage", this.onChangePage, this, true);
    }
    /*
    点击选项直接进入实验
    */
    ThumbList.prototype.onHotDown = function (e) {
        this.stageDownX = e.stageX;
        this.stageDownY = e.stageY;
        this.hot_mc.on("pressmove", this.onHotMove, this, true);
        this.hot_mc.on("pressup", this.onHotUp, this, true);
    };

    ThumbList.prototype.onHotMove = function (e) {
        if (Math.abs(e.stageX - this.stageDownX) > 3 || Math.abs(e.stageY - this.stageDownY) > 3) {
            this.stageDownX = NaN;
            this.stageDownY = NaN;
            this.hot_mc.off("pressmove", this.onHotMove, false, this);
            this.hot_mc.off("pressup", this.onHotUp, false, this);
        }
    };

    ThumbList.prototype.onHotUp = function (e) {
        this.hot_mc.off("pressmove", this.onHotMove, false, this);
        this.hot_mc.off("pressup", this.onHotUp, false, this);
        if (this.scroller.isScrolling()) {
            return;
        }
        if (isNaN(this.stageDownX) || isNaN(this.stageDownY)) {
            return;
        }
        var l = this.itemlist.length;
        for (var i = 0; i < l; i++) {
            var item = this.itemlist[i];
            var p = item.globalToLocal(e.stageX, e.stageY);
            if (item.hitTest(p.x, p.y)) {
                e.stopImmediatePropagation();
                if (this.getSelectedIndex() == i) {
                    this.dispatchEvent(new createjs.Event("change"));
                } else {
                    this.scroller.setPageIndex(i);
                }
                break;
            }
        }
    };

    //------->
    ThumbList.prototype.onChangePage = function (e) {
        var l = this.itemlist.length;
        for (var i = 0; i < l; i++) {
            var item = this.itemlist[i];
            if (this.getSelectedIndex() == i) {
                item.alpha = 1;
            } else {
                item.alpha = 0.5;
            }
        }
    };

    ThumbList.prototype.setData = function (arr) {
        var item;
        var r = 0;
        var l = 0;
        this.data = arr;
        if (arr) {
            r = arr.length;
        }
        var rr = this.itemlist.length;
        if (rr > r) {
            var arr2 = this.itemlist.splice(r, rr - r);
            l = arr2.length;
            for (var i = 0; i < l; i++) {
                item = arr2[i];
                this.removeChild(item);
            }
        }
        l = this.itemlist.length;
        var cwidth = 0;
        for (var i = 0; i < r; i++) {
            if (i >= l) {
                item = new REItem();
                this.itemlist.push(item);
            } else {
                item = this.itemlist[i];
            }
            if (i == 0) {
                cwidth = item.getBounds().width;
            }
            item.setData(arr[i][1], i);
            item.move((i + 1) * (cwidth + 100));
            this.addChild(item);
        }
        if (cwidth) {
            //重新设置滚动参数
            this.scroller.setParamPage(this, r * cwidth, 0, this.viewRect, this.hot_mc, cwidth + 100, r - 1, 1, 0);
            this.scroller.reset();
            this.onChangePage(null);
        }
    };

    ThumbList.prototype.getSelectedValue = function () {
        return this.data[this.getSelectedIndex()];
    };

    ThumbList.prototype.getSelectedIndex = function () {
        return this.scroller.pageIndex;
    };

    ThumbList.prototype.setSelectedIndex = function (val) {
        this.scroller.setPageIndex(val, true);
    };

    ThumbList.prototype.setSize = function (w, h) {
        _super.prototype.setSize.call(this, w, h);

        if (!isNaN(w)) {
            this.viewRect.width = w;
            this.hot_mc.hitArea.scaleX = w;
        }

        if (!isNaN(h)) {
            this.viewRect.height = h;
            this.hot_mc.hitArea.scaleY = h;
        }

        var arr = this.itemlist;
        var cwidth = 0;
        var c_x = w / 2;
        var l = arr.length;
        for (var i = 0; i < l; i++) {
            var item = arr[i];
            if (i == 0) {
                cwidth = item.getBounds().width;
                c_x -= cwidth / 2;
            }
            item.move(c_x + i * (cwidth + 100));
        }

        this.scroller.maxValue = l * cwidth + c_x;
    };
    return ThumbList;
})(createjs.Container);
//# sourceMappingURL=ThumbList.js.map
