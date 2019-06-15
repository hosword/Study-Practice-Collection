var KISHelper = (function () {
    function KISHelper() {
    }
    /*
    针结createjs0.8版本功能缺陷的修改
    */
    KISHelper.init = function () {
        //改写类内容函数
        var k = KISHelper;

        var p = createjs.EventDispatcher.prototype;
        p.on = k.on;
        p.off = k.off;

        p = createjs.DisplayObject.prototype;
        p.on = k.on;
        p.off = k.off;
        p.getConcatenatedMatrix = k.getConcatenatedMatrix;
        p.getConcatenatedDisplayProps = k.getConcatenatedDisplayProps;
        p.updateContext = k.updateContext;
        p.setSize = k.setSize;
        p.move = k.move;
        p.initRRect = k.initRRect;
        p.alignSize = k.alignSize;
        p.alignTarget = k.alignTarget;

        p = createjs.Container.prototype;
        p._testMask = k._testMask;
        p.on = k.on;
        p.off = k.off;
        p.alignDirection = k.alignDirection;
        p.initChildsRect = k.initChildsRect;

        stage.on = k.on;
        stage.off = k.off;

        //清除区域，确保碰撞检测准确
        stage.on("stagemousedown", KISHelper.clearHitTest);
        stage.on("stagemouseup", KISHelper.clearHitTest);
    };

    KISHelper.initChildsRect = function (arr) {
        if (!arr) {
            arr = this.children;
        }
        var l = arr.length;
        for (var i = 0; i < l; i++) {
            var item = arr[i];
            if (item) {
                item.initRRect();
            }
        }
    };

    KISHelper.initRRect = function (pRect, rect) {
        if (!pRect) {
            if (this.parent) {
                if (!isNaN(this.parent._width) && !isNaN(this.parent._height)) {
                    pRect = new createjs.Rectangle(this.parent.x, this.parent.y, this.parent._width, this.parent._height);
                } else {
                    pRect = this.parent.getBounds();
                }
            }
        }
        var mr = rect || this.getBounds();
        if (pRect) {
            if (mr) {
                this.bottom = pRect.height - this.y - mr.height;
                this.right = pRect.width - this.x - mr.width;
            }
            this.left = this.x;
            this.top = this.y;
        }
        if (mr) {
            this.oriWidth = this._width = mr.width;
            this.oriHeight = this._height = mr.height;
        }
    };

    /**
    * obj以自身为外围，对齐
    * @param	obj
    * @param	d
    * @param	usz 使用setSize设置大小
    */
    KISHelper.alignDirection = function (obj, d, usz, o) {
        if (!o) {
            o = obj;
        }

        if (isNaN(this._width) || isNaN(this._height)) {
            var br = this.getBounds();
            if (br) {
                this._width = br.width;
                this._height = br.height;
            }
        }

        var _x = NaN;
        var _y = NaN;

        if ((d & DirectionType.CENTER) > 0) {
            _x = (this._width - obj._width) / 2;
        } else if ((d & DirectionType.RIGHT) > 0) {
            _x = this._width - obj.right - obj._width;
        }

        if ((d & DirectionType.MIDDLE) > 0) {
            _y = (this._height - obj._height) / 2;
        } else if ((d & DirectionType.BOTTOM) > 0) {
            _y = this._height - obj.bottom - obj._height;
        }

        if (!isNaN(_x) || !isNaN(_y)) {
            obj.move(_x, _y);
        }

        var _width = NaN;
        var _height = NaN;

        if ((d & DirectionType.HORIZONTAL) > 0) {
            _width = this._width - obj.left - obj.right;
        }

        if ((d & DirectionType.VERTICAL) > 0) {
            _height = this._height - obj.bottom - obj.top;
        }

        if (!isNaN(_width) || !isNaN(_height)) {
            obj.setSize(_width, _height, !(usz && o == obj));
        }
    };

    /**
    * 在指定大小内对齐
    * @param	d
    * @param	usz 使用setSize设置大小
    */
    KISHelper.alignSize = function (pw, ph, d, usz, o) {
        if (!o) {
            o = this;
        }

        var _x = NaN;
        var _y = NaN;

        if ((d & DirectionType.CENTER) > 0) {
            _x = (pw - this._width) / 2;
        } else if ((d & DirectionType.RIGHT) > 0) {
            _x = pw - this.right - this._width;
        }

        if ((d & DirectionType.MIDDLE) > 0) {
            _y = (ph - this._height) / 2;
        } else if ((d & DirectionType.BOTTOM) > 0) {
            _y = ph - this.bottom - this._height;
        }

        if (!isNaN(_x) || !isNaN(_y)) {
            o.move(_x, _y);
        }

        var _width = NaN;
        var _height = NaN;

        if ((d & DirectionType.HORIZONTAL) > 0) {
            _width = pw - this.left - this.right;
        }

        if ((d & DirectionType.VERTICAL) > 0) {
            _height = ph - this.bottom - this.top;
        }

        if (!isNaN(_width) || !isNaN(_height)) {
            o.setSize(_width, _height, !(usz && o == this));
        }
    };

    /**
    * 指定目标，并与其对齐
    执行此方法前，必须先指定obj的目标坐标（_x，_y）
    * @param	obj，
    * @param	direction
    */
    KISHelper.alignTarget = function (obj, direction) {
        var _x = NaN;
        var _y = NaN;

        if ((direction & DirectionType.LEFT) > 0) {
            _x = obj._x + obj._width + this.left - obj.left - obj.oriWidth;
        } else if ((direction & DirectionType.RIGHT) > 0) {
            _x = obj._x + this.left - obj.left;
        }

        if ((direction & DirectionType.TOP) > 0) {
            _y = obj._y + obj._height + this.top - obj.top - obj.oriHeight;
        } else if ((direction & DirectionType.BOTTOM) > 0) {
            _y = obj._y + this.top - obj.top;
        }

        if ((direction & DirectionType.OFFSET_X) > 0) {
            _x = obj._x + this.left - obj.left;
        }

        if ((direction & DirectionType.OFFSET_Y) > 0) {
            _y = obj._y + this.top - obj.top;
        }

        if (!isNaN(_x) || !isNaN(_y)) {
            this.move(_x, _y);
        }
    };

    /*
    设置大小
    */
    KISHelper.setSize = function (w, h, ssxy) {
        if (!isNaN(w)) {
            this._width = w;
            if (ssxy) {
                this.scaleX = w / this.oriWidth;
            }
        }
        if (!isNaN(h)) {
            this._height = h;
            if (ssxy) {
                this.scaleY = h / this.oriHeight;
            }
        }
    };

    /*
    移动位置
    */
    KISHelper.move = function (x, y) {
        if (!isNaN(x)) {
            this.x = x;
            this._x = x;
        }
        if (!isNaN(y)) {
            this.y = y;
            this._y = y;
        }
    };

    KISHelper.on = function (type, listener, scope, once, data, useCapture) {
        if (listener.handleEvent) {
            scope = scope || listener;
            listener = listener.handleEvent;
        }
        scope = scope || this;
        if (!this.kisListeners) {
            this.kisListeners = [];
        }
        var arr = this.kisListeners;
        var l = arr.length;
        var cilr = null;
        for (var i = 0; i < l; i++) {
            var ilr = arr[i];
            if (ilr.type == type && ilr.listener == listener && ilr.scope == scope) {
                cilr = ilr;
                break;
            }
        }
        if (cilr == null) {
            cilr = {
                handleEvent: function (evt) {
                    listener.call(scope, evt, data);
                    once && evt.remove();
                },
                listener: listener,
                type: type,
                scope: scope
            };
            arr.push(cilr);
        }
        return this.addEventListener(type, cilr, useCapture);
    };

    KISHelper.off = function (type, listener, useCapture, scope) {
        var arr = this.kisListeners;
        if (arr) {
            if (listener.handleEvent) {
                scope = scope || listener;
                listener = listener.handleEvent;
            }
            scope = scope || this;
            var l = arr.length;
            var cilr = null;
            for (var i = 0; i < l; i++) {
                var ilr = arr[i];
                if (ilr.type == type && ilr.listener == listener && ilr.scope == scope) {
                    cilr = ilr;
                    break;
                }
            }
            if (cilr) {
                this.removeEventListener(type, cilr, useCapture);
            }
        }
    };

    KISHelper.clearHitTest = function () {
        var ctx = createjs.DisplayObject._hitTestContext;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, 10, 10);
    };

    KISHelper.getConcatenatedMatrix = function (matrix) {
        var o = this, mtx = this.getMatrix(matrix);
        var rect = o.scrollRect;
        if (rect) {
            mtx.translate(-rect.x, -rect.y);
        }
        while (o = o.parent) {
            var rect = o.scrollRect;
            if (rect) {
                mtx.translate(-rect.x, -rect.y);
            }
            mtx.prependMatrix(o.getMatrix(o._props.matrix));
        }
        return mtx;
    };

    KISHelper.getConcatenatedDisplayProps = function (props) {
        props = props ? props.identity() : new createjs.DisplayProps();
        var o = this, mtx = o.getMatrix(props.matrix);
        do {
            props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
            var rect = o.scrollRect;
            if (rect) {
                mtx.translate(-rect.x, -rect.y);
            }
            if (o != this) {
                mtx.prependMatrix(o.getMatrix(o._props.matrix));
            }
        } while(o = o.parent);
        return props;
    };

    KISHelper._testMask = function (target, x, y) {
        var screct = target.scrollRect;
        if (screct) {
            var mtx = this._props.matrix, parent = target.parent;
            mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
            mtx = target.getMatrix(target._props.matrix).prependMatrix(mtx);

            var ctx = createjs.DisplayObject._hitTestContext;
            ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);

            //矩形切片
            if (!this.scrollRectGraphic) {
                this.scrollRectGraphic = new createjs.Graphics();
            }
            var scg = this.scrollRectGraphic;
            scg.clear();

            //scg.beginStroke("#000");
            scg.drawRect(0, 0, screct.width, screct.height);

            //scg.endStroke();
            scg.drawAsPath(ctx);
            ctx.fillStyle = "#000";
            ctx.fill();

            if (!this._testHit(ctx)) {
                return false;
            }
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, 2, 2);

            return true;
        }

        var mask = target.mask;
        if (!mask || !mask.graphics || mask.graphics.isEmpty()) {
            return true;
        }

        var mtx = this._props.matrix, parent = target.parent;
        mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
        mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);

        var ctx = createjs.DisplayObject._hitTestContext;
        ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);

        // draw the mask as a solid fill:
        mask.graphics.drawAsPath(ctx);
        ctx.fillStyle = "#000";
        ctx.fill();

        if (!this._testHit(ctx)) {
            return false;
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, 2, 2);

        return true;
    };

    KISHelper.updateContext = function (ctx) {
        var screct = this.scrollRect;

        var o = this, mask = o.mask, mtx = o._props.matrix;

        if (mask && mask.graphics && !mask.graphics.isEmpty()) {
            mask.getMatrix(mtx);
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);

            mask.graphics.drawAsPath(ctx);
            ctx.clip();

            mtx.invert();
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        }

        this.getMatrix(mtx);
        if (screct) {
            if (!this.scrollRectGraphic) {
                this.scrollRectGraphic = new createjs.Graphics();
            }
            var tx = mtx.tx, ty = mtx.ty;
            if (createjs.DisplayObject._snapToPixelEnabled && o.snapToPixel) {
                tx = tx + (tx < 0 ? -0.5 : 0.5) | 0;
                ty = ty + (ty < 0 ? -0.5 : 0.5) | 0;
                mtx.tx = tx;
                mtx.ty = ty;
            }
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);

            //矩形切片
            var scg = this.scrollRectGraphic;
            scg.clear();

            //scg.beginStroke("#000");
            scg.drawRect(0, 0, screct.width, screct.height);

            //scg.endStroke();
            scg.drawAsPath(ctx);
            ctx.clip();

            //矩阵逆运算
            mtx.invert();

            //重置变形参数
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        }

        this.getMatrix(mtx);

        if (screct) {
            //内容偏移
            mtx.translate(-screct.x, -screct.y);
        }

        var tx = mtx.tx, ty = mtx.ty;
        if (createjs.DisplayObject._snapToPixelEnabled && o.snapToPixel) {
            tx = tx + (tx < 0 ? -0.5 : 0.5) | 0;
            ty = ty + (ty < 0 ? -0.5 : 0.5) | 0;
        }
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty);
        ctx.globalAlpha *= o.alpha;
        if (o.compositeOperation) {
            ctx.globalCompositeOperation = o.compositeOperation;
        }
        if (o.shadow) {
            this._applyShadow(ctx, o.shadow);
        }
    };
    return KISHelper;
})();
//# sourceMappingURL=KISHelper.js.map
