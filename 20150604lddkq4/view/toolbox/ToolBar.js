var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ToolBar = (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        _super.call(this);
        this.maxShowCount = 0;
        //滚动内容
        this.selectedIndex = -1;
        //当前选中项
        this.currentPage = 0;
        //当前显示项
        this.itemOffsetX = 0;
        //选项X间隔
        this.itemOffsetY = 0;
        //选项Y间隔
        this.contentX = 0;
        //内容x坐标
        this.contentY = 0;
        //内容y坐标
        this.contentXExtend = 0;
        //内容横向扩展像素
        this.contentYExtend = 0;
        //内容纵向扩展像素
        this.bgInsertSizeX = 0;
        //背景X边距
        this.bgInsertSizeY = 0;
        //背景Y边距
        this.autoSize = true;
        //自动排版所有选项
        this.alignShowCount = false;
        //显示长度对齐到最后可见项
        this.keepShowCount = false;
        //保证最后页显示个数为最大可显示数
        this.pageSize = 1;
        //一页显示个数
        this.arrowPageSize = 1;
        //点击箭头翻页数
        this._scrollrect = new createjs.Rectangle();
        this.autoApplyFilter = true;
        this.alientCenter = false;
        this.enableClick2Select = true;
        var img;
        var tmp_mc;
        var tmp2_mc;

        img = lib.getResult("TBB");

        tmp_mc = new KISSprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 93, 81, 0, 0, 0]] }), 0, new createjs.Rectangle(27, 20, 42, 39));
        tmp_mc.x = 0;
        tmp_mc.y = 0;
        this.bg_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[93, 0, 42, 50, 0, 25.2, 24.8], [93, 0, 42, 50, 0, 30.2, 24.8], [93, 0, 42, 50, 0, 30.2, 24.8]] }));
        tmp_mc.x = 29;
        tmp_mc.y = 40;
        this.left_btn = tmp_mc;
        tmp2_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[135, 0, 43, 52, 0, 30.2, 25.8]] }));
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc, 0);
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 81, 42, 50, 0, 17.45, 24.8], [42, 81, 42, 50, 0, 12.45, 24.8], [42, 81, 42, 50, 0, 12.45, 24.8]] }));
        tmp_mc.x = 64;
        tmp_mc.y = 40;
        this.right_btn = tmp_mc;
        tmp2_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[84, 81, 44, 52, 0, 13.45, 25.8]] }));
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc, 0);

        this.left_btn.scaleX = -1;
        this.right_x = this.right_btn.x;
        this.right_y = this.right_btn.y;
        this.left_x = this.left_btn.x;
        this.left_y = this.left_btn.y;

        //this.exit_x = this.exit_btn.x;
        //this.exit_y = this.exit_btn.y;
        this.bg_x = this.bg_mc.x;
        this.bg_y = this.bg_mc.y;
        this.bg_w = this.bg_mc.getBounds().width;
        this.bg_h = this.bg_mc.getBounds().height;

        this.direction = ToolBar.RIGHT;
        this.content = new createjs.Container();
        this.addChild(this.bg_mc);
        this.addChild(this.content);
        this.addChild(this.left_btn);
        this.addChild(this.right_btn);
        this.addEvents();
    }
    ToolBar.prototype.addEvents = function () {
        this.left_btn.on('click', this.clickHandler, this);
        this.right_btn.on('click', this.clickHandler, this);
        //this.exit_btn.on('click', this.onExit,this);
    };

    ToolBar.prototype.onExit = function (e) {
        this.close();
    };

    ToolBar.prototype.close = function () {
        this.dispatchEvent(new Event(ToolEvent.TOOL_CLOSE));
    };

    ToolBar.prototype.setToolBarBtn = function (index, mouseBool) {
        if (typeof mouseBool === "undefined") { mouseBool = true; }
        var ct = this.content;
        if (ct && ct.numChildren > index) {
            var obj = ct.getChildAt(index);

            //obj.mouseEnabled = mouseBool;
            obj.enabled = mouseBool;
            if (this.autoApplyFilter && !mouseBool) {
                obj.filters = ToolBar.DisableFilter;
                obj.alpha = 0.6;
                obj.cache(0, 0, obj.getBounds().width, obj.getBounds().height);
            } else {
                obj.alpha = 1;
                obj.uncache();
                obj.filters = null;
            }
        }
    };

    ToolBar.prototype.addTargetToolBar = function (targetarr) {
        var ct = this.content;
        if (ct) {
            var l = targetarr.length;
            for (var i = 0; i < l; i++) {
                ct.addChild(targetarr[i]);
            }
        }
        this.setCurrentPage(this.currentPage);
    };

    ToolBar.prototype.clickHandler = function (e) {
        if (e.currentTarget == this.left_btn) {
            this.prev();
        } else if (e.currentTarget == this.right_btn) {
            this.next();
        }
        //this.dispatchEvent('change');
    };

    ToolBar.prototype.setContent = function (value, automove) {
        if (typeof automove === "undefined") { automove = true; }
        if (this.content && this.content != value) {
            this.content.off("mousedown", this.startDragContent, false, this);
        }
        this.btn2mc();
        this.content = value;
        value.scrollRect = this._scrollrect;
        this.mc2btn();
        this.setSelectedIndex(-1);
        this.currentPage = 0;

        if (automove)
            this.content.on("mousedown", this.startDragContent, this, true);
    };

    ToolBar.prototype.getTimer = function () {
        return new Date().getTime();
    };

    ToolBar.prototype.stopListenerMove = function () {
        this.down_v = NaN;
        this.stopMoveEvent();
    };

    ToolBar.prototype.stopMoveEvent = function () {
        this.content.stage.off("pressmove", this.onStageMouseMove, false, this);
        this.content.stage.off("pressup", this.onStageMouseUp, false, this);
    };

    ToolBar.prototype.isOverflow = function () {
        return this.getCount() > this.pageSize;
    };

    ToolBar.prototype.startDragContent = function (e) {
        var esv = e.stageY;
        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            esv = e.stageX;
        }
        this.last_last_v = esv;
        this.last_v = esv;
        this.down_v = esv;

        this.last_time = this.getTimer();
        if (this.isOverflow()) {
            this.content.stage.on("pressmove", this.onStageMouseMove, this, true);
            this.content.stage.on("pressup", this.onStageMouseUp, this, true);

            //rate_scrol = maxValue/this.scrollLength;
            this.down_time = this.getTimer();
        } else {
            this.stopListenerMove();
        }
    };

    ToolBar.prototype.onStageMouseMove = function (e) {
        if (isNaN(this.down_v)) {
            return;
        }
        var dis = 0;
        var esv;
        var tValue;
        var dtn = 0;
        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            esv = e.stageX;
            tValue = this._scrollrect.x;
            dtn = 0;
        } else {
            esv = e.stageY;
            tValue = this._scrollrect.y;
            dtn = 1;
        }
        dis = esv - this.last_v;
        if (this.isOverflow()) {
            var sign = dis > 0 ? -1 : 1;
            var v = tValue - dis;
            if (dtn == 0) {
                this._scrollrect.x = v;
            } else {
                this._scrollrect.y = v;
            }
        }

        this.last_last_v = this.last_v;
        this.last_v = esv;
        this.last_time = this.getTimer();
    };

    ToolBar.prototype.onStageMouseUp = function (e) {
        this.stopMoveEvent();

        var dis = 0;
        var esv = 0;
        var pageCell = 0;
        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            esv = e.stageX;
            pageCell = this._scrollrect.width / this.maxShowCount;
        } else {
            esv = e.stageY;
            pageCell = this._scrollrect.height / this.maxShowCount;
        }
        dis = esv - this.down_v;
        var tmp = (this.getTimer() - this.last_time) / 1000;
        var sign = dis > 0 ? -1 : 1;

        //trace("pageCell:" +[dis,this.pageCell,tmp]);
        if (tmp < 0.1 && Math.abs(dis) > 2) {
            //trace(["换页", sign]);
            if (sign > 0) {
                this.next(true);
            } else {
                this.prev(true);
            }
        } else if (Math.abs(dis) > pageCell * 1 / 2) {
            if (sign > 0) {
                this.setCurrentPage(this.currentPage + Math.round(Math.abs(dis) / pageCell));
            } else {
                this.setCurrentPage(this.currentPage - Math.round(Math.abs(dis) / pageCell));
            }
        } else {
            //trace("不换页，回到原页");
            this.setCurrentPage(this.currentPage);
        }
    };

    ToolBar.prototype.btn2mc = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            for (var i = 0; i < l; i++) {
                var item = ct.getChildAt(i);
                item.off('click', this.itemClick, false, this);
            }
            if (ct.parent == this)
                this.removeChild(ct);
        }
    };

    ToolBar.prototype.mc2btn = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            for (var i = 0; i < l; i++) {
                var imc = ct.getChildAt(i);
                if (imc) {
                    imc.on('click', this.itemClick, this);
                }
            }
            ct.x = this.contentX;
            ct.y = this.contentY;
            this.addChildAt(ct, this.getChildIndex(this.bg_mc) + 1);
        }
    };

    ToolBar.prototype.itemClick = function (e) {
        if (!this.enableClick2Select)
            return;

        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            for (var i = 0; i < l; i++) {
                var item = ct.getChildAt(i);
                if (item == e.currentTarget) {
                    this.setSelectedIndex(i);
                    break;
                }
            }
        }
    };

    /**
    * 选中项总数
    */
    ToolBar.prototype.getCount = function () {
        if (this.content) {
            return this.content.numChildren;
        } else {
            return 0;
        }
    };

    ToolBar.prototype.setCurrentPage = function (value) {
        var l = Math.ceil(this.getCount() / this.pageSize);
        if (value > l - 1) {
            value = l - 1;
        } else if (value < 0) {
            value = 0;
        }
        this.currentPage = value;
        this.tweenScrollTo(this.currentPage);
        //this.drawUI();
    };

    ToolBar.prototype.setSelectedIndex = function (value) {
        var l = this.getCount();
        if (value > l - 1) {
            value = l - 1;
        } else if (value < -1) {
            value = -1;
        }
        this.selectedIndex = value;
        this.drawSelected();

        //dispatchEvent(new Event('change'));
        this.dispatchEvent(new ToolEvent(ToolEvent.CLICK_TOOL, this.selectedIndex, null, true));
    };

    ToolBar.prototype.setDirection = function (value) {
        this.direction = value;

        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            this.bgInsertSizeX = this.left_x + this.left_btn.getBounds().width / 2;
            this.bgInsertSizeY = 5;
            this.contentX = this.bgInsertSizeX;
            this.contentY = this.bgInsertSizeY;
        } else {
            this.bgInsertSizeX = 5;
            this.bgInsertSizeY = this.left_x + this.left_btn.getBounds().width / 2;
            this.contentX = this.bgInsertSizeX;
            this.contentY = this.bgInsertSizeY;
        }
        if (this.content) {
            this.content.x = this.contentX;
            this.content.y = this.contentY;
        }

        this.setCurrentPage(this.currentPage);
    };

    ToolBar.prototype.prev = function (f) {
        if (typeof f === "undefined") { f = false; }
        if (this.currentPage > 0 || f) {
            this.setCurrentPage(this.currentPage - this.pageSize * this.arrowPageSize);
        }
    };

    ToolBar.prototype.next = function (f) {
        if (typeof f === "undefined") { f = false; }
        if (this.currentPage + 1 < this.getCount() || f) {
            this.setCurrentPage(this.currentPage + this.pageSize * this.arrowPageSize);
        }
    };

    ToolBar.prototype.drawUI = function () {
        this.drawItems();
        this.drawBG();
    };

    ToolBar.prototype.drawItems = function () {
        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            this.drawHItems();
        } else {
            this.drawVItems();
        }
    };

    ToolBar.prototype.drawVItems = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            var lastItem;
            var max = this.getMaxItemWidth();
            for (var i = 0; i < l; i++) {
                var item = ct.getChildAt(i);
                if (this.autoSize) {
                    if (this.alientCenter) {
                        item.x = this.itemOffsetX + (max - item.getBounds().width) / 2;
                    } else {
                        item.x = this.itemOffsetX;
                    }

                    var val = 0;
                    if (i == 0) {
                        val = 0;
                    } else {
                        val = this.itemOffsetY;
                    }

                    if (lastItem) {
                        val += lastItem.y + lastItem.getBounds().height + 1;
                    }
                    item.y = val;
                    lastItem = item;
                }
            }
        }
    };

    ToolBar.prototype.drawHItems = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            var lastItem;
            var max = this.getMaxItemHeight();
            for (var i = 0; i < l; i++) {
                var item = ct.getChildAt(i);
                if (this.autoSize) {
                    if (this.alientCenter) {
                        item.y = this.itemOffsetY + (max - item.getBounds().height) / 2;
                    } else {
                        item.y = this.itemOffsetY;
                    }

                    var val = 0;
                    if (i == 0) {
                        val = 0;
                    } else {
                        val = this.itemOffsetX;
                    }

                    if (lastItem) {
                        val += lastItem.x + lastItem.getBounds().width + 1;
                    }
                    item.x = val;
                    lastItem = item;
                }
            }
        }
    };

    ToolBar.prototype.drawSelected = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            if (l > 0) {
                for (var i = 0; i < l; i++) {
                    var item = ct.getChildAt(i);

                    //item.gotoAndStop(0);
                    item.setSelect(false);
                }
                var six = this.selectedIndex;
                if (l > six && six != -1) {
                    var selectedItem = ct.getChildAt(six);
                    if (selectedItem) {
                        //selectedItem.gotoAndStop(ToolBar.SelectedFrame);
                        selectedItem.setSelect(true);
                    }
                }
            }
        }
    };

    ToolBar.prototype.tweenScrollTo = function (index) {
        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            this.tweenHScrollTo(index);
        } else {
            this.tweenVScrollTo(index);
        }
    };

    ToolBar.prototype.tweenHScrollTo = function (index) {
        var ct = this.content;
        if (ct) {
            var cix = this.getCurrentIndex();
            if (cix == -1) {
                this.left_btn.visible = false;
                this.right_btn.visible = false;
                this._scrollrect.x = 0;
                this.updateContent();
                return;
            }
            var item = ct.getChildAt(cix);
            var yy = item.x;
            yy -= this.contentXExtend;
            createjs.Tween.get(this._scrollrect, { override: true }).to({ x: yy }, 300, createjs.Ease.circOut).on("change", this.updateContent, this);
            if (this.maxShowCount > 0 && this.alignShowCount) {
                this.drawBG();
            }
            var viewh = ct.scrollRect.width;
            var contenth = this.getContentWidth();
            var contenty = yy;

            //trace(contenth, viewh, contenty, contenth - viewh, -contentY)
            //434 359 101 75 -10
            if (contenth <= viewh) {
                this.left_btn.visible = false;
                this.right_btn.visible = false;
            } else if (contenty == -this.contentXExtend) {
                this.left_btn.visible = false;
                this.right_btn.visible = true;
            } else if (contenty >= contenth - viewh) {
                this.left_btn.visible = true;
                this.right_btn.visible = false;
            } else {
                this.left_btn.visible = true;
                this.right_btn.visible = true;
            }
        }
    };

    ToolBar.prototype.tweenVScrollTo = function (index) {
        var ct = this.content;
        if (ct) {
            var cix = this.getCurrentIndex();
            if (cix == -1) {
                this.left_btn.visible = false;
                this.right_btn.visible = false;
                this._scrollrect.y = 0;
                this.updateContent();
                return;
            }
            var item = ct.getChildAt(cix);
            var yy = item.y;
            yy -= this.contentYExtend;
            createjs.Tween.get(this._scrollrect, { override: true }).to({ y: yy }, 300, createjs.Ease.circOut).on("change", this.updateContent, this);
            if (this.maxShowCount > 0 && this.alignShowCount) {
                this.drawBG();
            }
            var viewh = ct.scrollRect.height;
            var contenth = this.getContentHeight();
            var contenty = yy;

            //trace(contenth, viewh, contenty, contenth - viewh, -contentY)
            //434 359 101 75 -10
            if (contenth <= viewh) {
                this.left_btn.visible = false;
                this.right_btn.visible = false;
            } else if (contenty == -this.contentYExtend) {
                this.left_btn.visible = false;
                this.right_btn.visible = true;
            } else if (contenty >= contenth - viewh) {
                this.left_btn.visible = true;
                this.right_btn.visible = false;
            } else {
                this.left_btn.visible = true;
                this.right_btn.visible = true;
            }
        }
    };

    ToolBar.prototype.getCurrentIndex = function () {
        if (!this.content)
            return -1;
        var l = Math.ceil(this.getCount() / this.pageSize);
        var realIndex = this.currentPage * this.pageSize;
        if (this.keepShowCount) {
            if (this.currentPage == l - 1) {
                realIndex = this.getCount() - this.maxShowCount;
            }
        }
        if (realIndex < -1) {
            if (l > 0)
                realIndex = 0;
            else
                realIndex = -1;
        } else if (realIndex > this.content.numChildren - 1) {
            realIndex = this.content.numChildren - 1;
        }
        return realIndex;
    };

    ToolBar.prototype.getContentWidth = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            if (l > 0) {
                var item = ct.getChildAt(l - 1);
                var h = item.x + item.getBounds().width;
                return h;
            }
        }
        return 0;
    };
    ToolBar.prototype.getContentHeight = function () {
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            if (l > 0) {
                var item = ct.getChildAt(l - 1);
                var h = item.y + item.getBounds().height;
                return h;
            }
        }
        return 0;
    };

    ToolBar.prototype.drawBG = function () {
        if (this.direction == ToolBar.LEFT || this.direction == ToolBar.RIGHT) {
            this.drawHBG();
        } else {
            this.drawVBG();
        }
    };

    ToolBar.prototype.drawVBG = function () {
        var ct = this.content;
        var index = this.currentPage;
        var bgWidth = this.bg_w;
        var bgHeight = this.bg_h;
        if (ct) {
            var l = this.getCount();
            if (this.autoSize) {
                bgWidth = Math.max(this.bg_h, this.getMaxItemWidth() + this.bgInsertSizeX * 2);
            } else {
                bgWidth = this.bg_h;
            }
            if (this.maxShowCount > 0) {
                if (this.alignShowCount) {
                    //自动根据显示个数总高度设置可显示的高度
                    if (l > 0) {
                        var cix = this.getCurrentIndex();
                        var lx = cix + this.maxShowCount;
                        lx = Math.min(lx, l);
                        cix = Math.min(cix, l - 1);
                        var item = ct.getChildAt(lx - 1);
                        var citem = ct.getChildAt(cix);
                        bgHeight = this.contentYExtend * 2 + item.y + item.getBounds().height - citem.y + this.bgInsertSizeY * 2;
                        this._scrollrect.width = bgWidth - this.bgInsertSizeX * 2;
                        this._scrollrect.height = bgHeight - this.bgInsertSizeY * 2;
                        this._scrollrect.y = -this.contentYExtend;
                        this._scrollrect.x = -this.contentXExtend;
                        if (this.autoSize) {
                            this._scrollrect.y += citem.y;
                        }
                        ct.scrollRect = this._scrollrect;
                    } else {
                        bgHeight = this.bg_w;
                    }
                } else {
                    //默认以前maxShowCount项为显示的高度
                    if (l > 0) {
                        cix = this.getCurrentIndex();
                        lx = this.maxShowCount;
                        lx = Math.min(lx, l);
                        cix = Math.min(cix, l - 1);
                        item = ct.getChildAt(lx - 1);
                        citem = ct.getChildAt(cix);
                        bgHeight = this.contentYExtend * 2 + item.y + item.getBounds().height + this.bgInsertSizeY * 2;
                        this._scrollrect.width = bgWidth - this.bgInsertSizeX * 2;
                        this._scrollrect.height = bgHeight - this.bgInsertSizeY * 2;
                        this._scrollrect.x = -this.contentXExtend;
                        this._scrollrect.y = -this.contentYExtend;
                        if (this.autoSize) {
                            this._scrollrect.y += citem.y;
                        }
                        ct.scrollRect = this._scrollrect;
                    } else {
                        bgHeight = this.bg_w;
                    }
                }
            } else {
                this._scrollrect.width = bgWidth;
                this._scrollrect.height = bgHeight - this.bgInsertSizeY * 2 + this.contentYExtend * 2;
                this._scrollrect.x = -this.contentXExtend;
                this._scrollrect.y = -this.contentYExtend;
                if (this.autoSize) {
                    this._scrollrect.y -= this.itemOffsetY;
                    this._scrollrect.x -= this.itemOffsetX;
                }
                ct.scrollRect = this._scrollrect;
            }
        }

        this.left_btn.rotation = 270;
        this.right_btn.rotation = 90;
        this.right_btn.y = this.bg_mc.y + bgHeight - (this.bg_x + this.bg_w - this.right_x);
        this.right_btn.x = bgWidth / 2;
        this.left_btn.x = bgWidth / 2;
        this.left_btn.y = this.left_x;

        //if (this.direction == ToolBar.BOTTOM)
        //    this.exit_btn.y = this.bg_mc.y + bgHeight - (this.bg_x + this.bg_w - this.exit_x);
        //else
        //    this.exit_btn.y = this.bg_w - this.exit_x;
        //this.exit_btn.x = bgWidth - this.exit_y;
        this.bg_mc.setSize(bgWidth, bgHeight);
    };

    ToolBar.prototype.drawHBG = function () {
        var ct = this.content;
        var index = this.currentPage;
        var bgWidth = this.bg_w;
        var bgHeight = this.bg_h;
        if (ct) {
            if (this.autoSize) {
                bgHeight = Math.max(this.bg_h, this.getMaxItemHeight() + this.bgInsertSizeY * 2);
            } else {
                bgHeight = this.bg_h;
            }
            var l = this.getCount();
            if (this.maxShowCount > 0) {
                if (this.alignShowCount) {
                    //自动根据显示个数总高度设置可显示的宽度
                    if (l > 0) {
                        var cix = this.getCurrentIndex();
                        var lx = cix + this.maxShowCount;
                        lx = Math.min(lx, l);
                        cix = Math.min(cix, l - 1);
                        var item = ct.getChildAt(lx - 1);
                        var citem = ct.getChildAt(cix);
                        bgWidth = this.contentXExtend * 2 + item.x + item.getBounds().width - citem.x + this.bgInsertSizeX * 2;
                        this._scrollrect.height = bgHeight - this.bgInsertSizeY * 2;
                        this._scrollrect.width = bgWidth - this.bgInsertSizeX * 2;
                        this._scrollrect.x = -this.contentXExtend;
                        this._scrollrect.y = -this.contentYExtend;
                        if (this.autoSize) {
                            this._scrollrect.x += citem.x;
                        }
                        ct.scrollRect = this._scrollrect;
                    } else {
                        bgWidth = this.bg_w;
                    }
                } else {
                    //默认以前maxShowCount项为显示的宽度
                    if (l > 0) {
                        cix = this.getCurrentIndex();
                        lx = this.maxShowCount;
                        lx = Math.min(lx, l);
                        cix = Math.min(cix, l - 1);
                        item = ct.getChildAt(lx - 1);
                        citem = ct.getChildAt(cix);
                        bgWidth = this.contentXExtend * 2 + item.x + item.getBounds().width + this.bgInsertSizeX * 2;
                        this._scrollrect.height = bgHeight - this.bgInsertSizeY * 2;
                        this._scrollrect.width = bgWidth - this.bgInsertSizeX * 2;
                        this._scrollrect.x = -this.contentXExtend;
                        this._scrollrect.y = -this.contentYExtend;
                        if (this.autoSize) {
                            this._scrollrect.x += citem.x;
                        }
                        ct.scrollRect = this._scrollrect;
                    } else {
                        bgWidth = this.bg_w;
                    }
                }
            } else {
                this._scrollrect.height = bgHeight;
                this._scrollrect.width = bgWidth - this.bgInsertSizeX * 2 + this.contentXExtend * 2;
                this._scrollrect.x = -this.contentXExtend;
                this._scrollrect.y = -this.contentYExtend;
                if (this.autoSize) {
                    this._scrollrect.y -= this.itemOffsetY;
                    this._scrollrect.x -= this.itemOffsetX;
                }
                ct.scrollRect = this._scrollrect;
            }
        }

        this.left_btn.rotation = 180;
        this.right_btn.rotation = 0;

        this.right_btn.x = this.bg_mc.x + bgWidth + this.right_x - this.bg_x - this.bg_w;
        this.right_btn.y = bgHeight / 2;
        this.left_btn.y = bgHeight / 2;
        this.left_btn.x = this.left_x;

        //if (this.direction == ToolBar.RIGHT)
        //    this.exit_btn.x = this.bg_mc.x + bgWidth + this.exit_x - this.bg_x - this.bg_w;
        //else
        //    this.exit_btn.x = this.bg_w - this.exit_x;
        //this.exit_btn.y = this.exit_y;
        this.bg_mc.setSize(bgWidth, bgHeight);
    };

    ToolBar.prototype.getMaxItemHeight = function () {
        var max = 0;
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            for (var i = 0; i < l; i++) {
                var item = ct.getChildAt(i);
                var v = item.getBounds().height;
                if (v > max) {
                    max = v;
                }
            }
        }
        return max;
    };
    ToolBar.prototype.getMaxItemWidth = function () {
        var max = 0;
        var ct = this.content;
        if (ct) {
            var l = this.getCount();
            for (var i = 0; i < l; i++) {
                var item = ct.getChildAt(i);
                var v = item.getBounds().width;
                if (v > max) {
                    max = v;
                }
            }
        }
        return max;
    };

    ToolBar.prototype.updateContent = function () {
        this.content.scrollRect = this._scrollrect;
    };

    ToolBar.prototype.getWidth = function () {
        return this.bg_mc._width;
    };

    ToolBar.prototype.getHeight = function () {
        return this.bg_mc._height;
    };
    ToolBar.LEFT = "left";

    ToolBar.TOP = "top";

    ToolBar.RIGHT = "right";

    ToolBar.BOTTOM = "bottom";

    ToolBar.SelectedFrame = 3;

    ToolBar.DisableFilter = [new createjs.ColorMatrixFilter([0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0])];
    return ToolBar;
})(createjs.Container);
//# sourceMappingURL=ToolBar.js.map
