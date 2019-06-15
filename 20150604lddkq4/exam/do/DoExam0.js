var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DoExam0 = (function (_super) {
    __extends(DoExam0, _super);
    function DoExam0() {
        _super.call(this);
        var img;
        var tmp_mc;

        img = lib.getResult("PT");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 431, 545, 0, 19.3, 296.25]] }));
        tmp_mc.x = 461;
        tmp_mc.y = 329;
        this.XX = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[431, 0, 436, 228, 0, 0, 0]] }));
        tmp_mc.x = 444;
        tmp_mc.y = 32;
        this.pt0 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 545, 70, 134, 0, 0, 0]] }));
        tmp_mc.x = 608;
        tmp_mc.y = 217;
        this.pt1 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[70, 545, 67, 203, 0, 0, 0]] }));
        tmp_mc.x = 613;
        tmp_mc.y = 298;
        this.pt2 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[137, 545, 106, 153, 0, 0, 0]] }));
        tmp_mc.x = 509;
        tmp_mc.y = 124;
        this.pt3 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[243, 545, 155, 36, 0, 0, 0]] }));
        tmp_mc.x = 466;
        tmp_mc.y = 283;
        this.pt4 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[398, 545, 117, 254, 0, 0, 0]] }));
        tmp_mc.x = 509;
        tmp_mc.y = 317;
        this.pt5 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[515, 545, 105, 147, 0, 0, 0]] }));
        tmp_mc.x = 670;
        tmp_mc.y = 121;
        this.pt6 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[620, 545, 128, 54, 0, 0, 0]] }));
        tmp_mc.x = 670;
        tmp_mc.y = 246;
        this.pt7 = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[748, 545, 127, 247, 0, 0, 0]] }));
        tmp_mc.x = 670;
        tmp_mc.y = 332;
        this.pt8 = tmp_mc;

        img = lib.getResult("BBC");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 654, 96, 0, 0, 0]] }));
        this.bc_mc = tmp_mc;

        img = lib.getResult("ATC");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 425, 100, 0, 0, 0]] }));
        this.atc_mc = tmp_mc;

        this.boy_mc = new Boy();
        this.boy_mc.move(890, 480);

        this.content_mc = new ToolContent();

        this.tool_mc = new ToolBox();
        this.tool_mc.x = 113;
        this.tool_mc.y = 128;

        var tbr = this.tool_mc.toolbar_mc;
        tbr.enableClick2Select = false;
        tbr.maxShowCount = 3; //设置工具栏显示的最大个数
        tbr.arrowPageSize = 3; //点击箭头时翻个数
        tbr.alignShowCount = false; //显示背景框范围是否对齐显示项的宽/高度
        tbr.keepShowCount = false; //保证最后页显示个数为最大可显示数
        tbr.alientCenter = true; //各项是否自动中心对齐
        tbr.setContent(this.content_mc);
        tbr.setDirection(ToolBar.BOTTOM);

        this.group = [
            this.pt0,
            this.pt2, this.pt3, this.pt4, this.pt5, this.pt6, this.pt7, this.pt8];

        var l = this.group.length;
        for (var i = 0; i < l; i++) {
            var pt = this.group[i];
            pt.ori_x = pt.x;
            pt.ori_y = pt.y;
        }
        this.randomPos();

        this.addChild(this.XX);
        this.addChild(this.pt0);
        this.addChild(this.pt2);
        this.addChild(this.pt3);
        this.addChild(this.pt4);
        this.addChild(this.pt5);
        this.addChild(this.pt6);
        this.addChild(this.pt7);
        this.addChild(this.pt8);
        this.addChild(this.pt1);

        this.addChild(this.boy_mc);

        this.on("added", this.onAdded, this);
        var l = this.content_mc.numChildren;
        for (var i = 0; i < l; i++) {
            var item = this.content_mc.getChildAt(i);
            item.on("mousedown", this.onToolItemDown, this, true);
        }
        this.boy_mc.on("animationend", this.onBoyShowed, this);
        this.boy_mc.visible = false;

        this.initChildsRect();
    }
    DoExam0.prototype.setSize = function (w, h) {
        _super.prototype.setSize.call(this, w, h);

        this.alignDirection(this.boy_mc, DirectionType.BOTTOM | DirectionType.RIGHT);
    };

    DoExam0.prototype.onAdded = function (e) {
        if (!this.tool_mc.parent) {
            this.addChild(this.tool_mc);
            this.tool_mc.toolbar_mc.drawUI();
        }
        this.tool_mc.toolbar_mc.setCurrentPage(0);
        this.tool_mc.closeNow();
        this.tool_mc.show(400);
        this.tool_mc.on("showed", this.onToolShowed, this);
    };

    DoExam0.prototype.onToolShowed = function (e) {
        e.currentTarget.off("showed", this.onToolShowed, null, this);
        this.boy_mc.visible = true;
        this.boy_mc.show();
    };

    DoExam0.prototype.onBoyShowed = function (e) {
        this.boy_mc.message(this.bc_mc, 0, 0, true, 300);
    };

    DoExam0.prototype.onToolItemDown = function (e) {
        var ix = this.content_mc.getChildIndex(e.currentTarget);
        var item = this.group[ix];

        if (item && e.currentTarget.enabled) {
            e.stopImmediatePropagation();
            e.preventDefault();

            this.down_x = e.stageX;
            this.down_y = e.stageY;
            this.currentItem = item;
            item.visible = false;
            this.stage.on("pressmove", this.onItemMove, this);
            if (this.boy_mc.isTiped) {
                this.boy_mc.closeTip();
            }
        }
    };

    DoExam0.prototype.onItemMove = function (e) {
        var stage = e.currentTarget;
        var item = this.currentItem;

        if (!isNaN(this.down_x)) {
            var disx = e.stageX - this.down_x;
            var disy = e.stageY - this.down_y;
            if (Math.abs(disx) > 10 || Math.abs(disy) > 10) {
                //当点击后移动指定角度范围内，视作移出
                var r = Math.atan2(disy, disx) * 180 / Math.PI;

                //trace(r, disx, disy, Math.PI);
                this.down_x = NaN;
                if (r >= -60 && r <= 60) {
                    this.tool_mc.toolbar_mc.stopListenerMove();
                } else {
                    stage.off("pressmove", this.onItemMove, false, this);
                    stage.off("pressup", this.onItemUp, false, this);

                    this.tool_mc.toolbar_mc.startDragContent(e);
                    return;
                }

                item.visible = true;
                var p = item.parent.globalToLocal(e.stageX, e.stageY);
                item.alpha = 1;

                //item.move(p.x - item.getBounds().width / 2, p.y - item.getBounds().height / 2);
                this.addChild(item);
                this.tool_mc.toolbar_mc.setToolBarBtn(this.group.indexOf(item), false);
                this.stage.on("pressup", this.onItemUp, this);
            }
        }

        if (item.alpha == 1 && item.parent) {
            var p = item.parent.globalToLocal(e.stageX, e.stageY);
            item.move(p.x - item.getBounds().width / 2, p.y - item.getBounds().height / 2);
        }
    };

    DoExam0.prototype.onItemUp = function (e) {
        this.down_x = NaN;
        var stage = e.currentTarget;
        stage.off("pressmove", this.onItemMove, false, this);
        stage.off("pressup", this.onItemUp, false, this);
        if (!this.stage) {
            return;
        }
        this.onItemMove(e);
        var part = this.currentItem;
        if (part.x < part.ori_x + 60 && part.x > part.ori_x - 60 && part.y < part.ori_y + 60 && part.y > part.ori_y - 60) {
            part.x = part.ori_x;
            part.y = part.ori_y;

            //part.mouseChildren = part.mouseEnabled = false;
            if (part == this.pt2) {
                this.addChildAt(part, this.getChildIndex(this.pt1));
            } else {
                this.addChildAt(part, this.getChildIndex(this.pt2));
            }

            var l = this.group.length;
            var p = true;
            for (var i = 0; i < l; i++) {
                part = this.group[i];
                if (!part.visible) {
                    p = false;
                    break;
                }
            }
            if (p) {
                //拼图全部正确
                this.XX.visible = false;
                var art = Confirm.show(this.atc_mc, 0, 0, 0, true);
                art.on("ok", this.onAlert, this);
            }
        } else {
            //this.boy_mc.message(this.bc_mc, 0, 0, true, 300);
            //拼图失败
            createjs.Tween.get(part, { override: true }).to({ x: this.tool_mc.x, y: this.tool_mc.y, alpha: 0 }, 200).call(this.backComplete, [part], this);
        }
    };

    DoExam0.prototype.onAlert = function (e) {
        this.reset();
    };

    DoExam0.prototype.backComplete = function (item) {
        item.visible = false;
        this.tool_mc.toolbar_mc.setToolBarBtn(this.group.indexOf(item), true);
    };

    DoExam0.prototype.randomPos = function () {
        var l = this.group.length;
        for (var i = 0; i < l; i++) {
            var im = this.group[i];
            im.x = 0;
            im.y = 0;
            im.visible = false;
            this.tool_mc.toolbar_mc.setToolBarBtn(i, true);
        }
    };

    DoExam0.prototype.reset = function () {
        this.resetBase();
        this.onAdded(null);
    };
    DoExam0.prototype.resetBase = function () {
        this.XX.visible = true;
        this.boy_mc.visible = false;
        this.randomPos();
    };

    DoExam0.prototype.close = function () {
        this.boy_mc.closeTip();
        _super.prototype.close.call(this);
    };

    DoExam0.prototype.closePageComplete = function () {
        _super.prototype.closePageComplete.call(this);
        this.resetBase();
    };
    return DoExam0;
})(BaseExam);
//# sourceMappingURL=DoExam0.js.map
