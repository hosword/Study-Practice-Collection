var KISTouchScrollHelper = (function () {
    function KISTouchScrollHelper() {
        this.last_y = 0;
        this.last_last_y = 0;
        this.down_y = 0;
        this.last_x = 0;
        this.last_last_x = 0;
        this.down_x = 0;
        this.last_time = 0;
        this.rate_scrol = 1;
        this.maxValue = 0;
        this.tValue = 0;
        this.scrollLength = 0;
        this.limitScrollValue = false;
        this.pageMode = true;
        this.pageIndex = 0;
        this.pageMin = 0;
        this.pageCell = 0;
        this.pageMax = 0;
        this.pageSize = 1;
        this.vscrollTweenObj = new Object();
        this.vscrollTweenObj.velocity = 0;
    }
    KISTouchScrollHelper.prototype.valiateValue = function (val, force) {
        if (typeof force === "undefined") { force = false; }
        if (this.limitScrollValue || force) {
            if (val < 0) {
                val = 0;
            } else if (val > this.maxValue) {
                val = this.maxValue;
            }
        }
        return val;
    };

    KISTouchScrollHelper.prototype.reset = function () {
        this.pageIndex = 0;
        this.setValue(0);
    };

    KISTouchScrollHelper.prototype.setParam = function (container_mc, maxValue, direction, viewRect, hot_mc) {
        this.container_mc = container_mc;
        this.maxValue = maxValue;
        this.direction = direction;
        this.viewRect = viewRect;
        this.pageMode = false;
        container_mc.scrollRect = viewRect;

        if (this.hot_mc && this.hot_mc != hot_mc) {
            this.hot_mc.off("mousedown", this.onMouseDown, false, this);
        }
        this.hot_mc = hot_mc;
        this.hot_mc.on("mousedown", this.onMouseDown, this, true);
    };

    KISTouchScrollHelper.prototype.setParamPage = function (container_mc, maxValue, direction, viewRect, hot_mc, pageCell, pageMax, pageSize, pageMin) {
        if (typeof pageCell === "undefined") { pageCell = 0; }
        if (typeof pageMax === "undefined") { pageMax = 0; }
        if (typeof pageSize === "undefined") { pageSize = 1; }
        if (typeof pageMin === "undefined") { pageMin = 0; }
        this.pageCell = pageCell || viewRect.width;
        this.pageMax = pageMax;
        this.pageSize = pageSize;
        this.pageMin = pageMin;
        this.setParam(container_mc, maxValue, direction, viewRect, hot_mc);
        this.pageMode = true;
    };

    KISTouchScrollHelper.prototype.getTimer = function () {
        return new Date().getTime();
    };

    KISTouchScrollHelper.prototype.onMouseDown = function (e) {
        if (this.direction == 0) {
            var esx = e.stageX;
            this.last_last_x = esx;
            this.last_x = esx;
            this.down_x = esx;
        } else {
            var esy = e.stageY;
            this.last_last_y = esy;
            this.last_y = esy;
            this.down_y = esy;
        }

        this.stopScrollTween();
        this.last_time = this.getTimer();
        var tweenobj = this.vscrollTweenObj;
        if (this.isOverflow()) {
            this.container_mc.stage.on("pressmove", this.onStageMouseMove, this, true);
            this.container_mc.stage.on("pressup", this.onStageMouseUp, this, true);

            //rate_scrol = maxValue/this.scrollLength;
            tweenobj.time = this.getTimer();
        } else {
            this.container_mc.stage.off("pressmove", this.onStageMouseMove, false, this);
            this.container_mc.stage.off("pressup", this.onStageMouseUp, false, this);
        }
    };

    KISTouchScrollHelper.prototype.isOverflow = function () {
        return true;
        if (this.direction == 0 && this.viewRect.width < this.maxValue) {
            return true;
        } else if (this.direction == 1 && this.viewRect.height < this.maxValue) {
            return true;
        }
        return false;
    };

    KISTouchScrollHelper.prototype.setValue = function (val) {
        val = this.valiateValue(val);
        this.tValue = val;

        if (this.direction == 0) {
            this.viewRect.x = this.tValue;
        } else {
            this.viewRect.y = this.tValue;
        }
        this.container_mc.scrollRect = this.viewRect;
        this.container_mc.dispatchEvent(new createjs.Event("updateScroll"));
    };

    KISTouchScrollHelper.prototype.getValue = function () {
        return this.tValue;
    };

    KISTouchScrollHelper.prototype.stopScrollTween = function () {
        //TweenMotion.killTweensOf(vscrollTweenObj)
        createjs.Tween.removeTweens(this.vscrollTweenObj);
    };

    KISTouchScrollHelper.prototype.onStageMouseMove = function (e) {
        var tweenobj = this.vscrollTweenObj;
        var dis = 0;
        if (this.direction == 0) {
            var esx = e.stageX;
            dis = esx - this.last_x;
        } else {
            var esy = e.stageY;
            dis = esy - this.last_y;
        }
        if (this.isOverflow()) {
            var sign = dis > 0 ? -1 : 1;
            tweenobj.tValue = this.tValue;
            tweenobj.sign = sign;

            var value = isNaN(this.vscrollTweenObj.endTValue) ? this.tValue : tweenobj.endTValue;
            dis += this.tValue - value;
            var v = this.tValue - dis;

            //trace("dis:" +[dis]);
            if (dis > 20 || dis < -20) {
                tweenobj.endTValue = v;
                var tmp = this.getTimer() - this.last_time;

                //TweenMotion.to(tweenobj, tmp, { overwrite: 1, tValue: v, onUpdate: this.updateVScrollHandler2, onComplete: this.updateVScrollHandler3 });
                createjs.Tween.get(tweenobj, { override: true }).to({ tValue: v }, tmp).call(this.updateVScrollHandler3, [], this).on("change", this.updateVScrollHandler2, this);
            } else {
                this.vscrollTweenObj.endTValue = NaN;
                tweenobj.tValue = v;
                this.updateVScrollHandler2();
            }
        }

        this.last_last_y = this.last_y;
        this.last_last_x = this.last_x;
        if (this.direction == 0) {
            this.last_x = esx;
        } else {
            this.last_y = esy;
        }
        this.last_time = this.getTimer();
    };

    KISTouchScrollHelper.prototype.updateVScrollHandler3 = function () {
        this.vscrollTweenObj.endTValue = NaN;
        this.updateVScrollHandler2();
    };

    KISTouchScrollHelper.prototype.updateVScrollHandler2 = function () {
        //var val:number = valiateValue(vscrollTweenObj.tValue);
        this.setValue(this.vscrollTweenObj.tValue);
    };

    /*
    * 暂停滚动
    * 并加速滚动
    * */
    KISTouchScrollHelper.prototype.onStageMouseUp = function (e) {
        this.container_mc.stage.off("pressmove", this.onStageMouseMove, false, this);
        this.container_mc.stage.off("pressup", this.onStageMouseUp, false, this);

        if (this.pageMode) {
            this.onPageMUP(e);
        } else {
            this.onUnPageMUP(e);
        }
    };

    KISTouchScrollHelper.prototype.onUnPageMUP = function (e) {
        var tweenobj = this.vscrollTweenObj;
        var dis = 0;
        var isMove = false;
        if (this.direction == 0) {
            var esx = e.stageX;
            dis = esx - this.last_last_x;
            isMove = Math.abs(esx - this.down_x) > 2;
        } else {
            var esy = e.stageY;
            dis = esy - this.last_last_y;
            isMove = Math.abs(esy - this.down_y) > 2;
        }
        var tmp = (this.getTimer() - tweenobj.time) / 1000;
        var maxValue = this.maxValue;
        var tValue = this.tValue;
        if (this.isOverflow() && isMove) {
            if (tmp > 0.5 && tValue < maxValue && tValue > 0) {
                tweenobj.velocity = 0;
            }
            if (tmp > 0.4) {
                tmp = 0.9;
                tweenobj.velocity = 0;
            }
            if (tValue < maxValue && tValue > 0) {
                tweenobj.velocity += Math.abs(dis) * (1 - tmp) * 0.5;
            } else {
                tweenobj.velocity = 1;
            }
            if (tweenobj.velocity > 70) {
                tweenobj.velocity = 70;
            }
            tweenobj.sign = dis > 0 ? -1 : 1;
            tweenobj.damping = Math.abs(dis) * 0.005;
            tweenobj.endTValue = NaN;

            //TweenMotion.to(tweenobj, 100, { forceAdd: true, overwrite: 1, onUpdate: this.updateVScrollHandler });
            createjs.Tween.get(tweenobj, { override: true }).to({}, 100000).on("change", this.updateVScrollHandler, this);
        }
    };

    KISTouchScrollHelper.prototype.onPageMUP = function (e) {
        var tweenobj = this.vscrollTweenObj;
        var dis = 0;
        if (this.direction == 0) {
            var esx = e.stageX;
            dis = esx - this.down_x;
        } else {
            var esy = e.stageY;
            dis = esy - this.down_y;
        }
        var tmp = (this.getTimer() - this.last_time) / 1000;
        var sign = dis > 0 ? -1 : 1;

        //trace("pageCell:" +[dis,this.pageCell,tmp]);
        if ((tmp < 0.1 && Math.abs(dis) > 2) || Math.abs(dis) > this.pageCell * 1 / 3) {
            //trace(["换页", sign]);
            if (sign > 0) {
                this.setPageIndex(this.pageIndex + this.pageSize);
            } else {
                this.setPageIndex(this.pageIndex - this.pageSize);
            }
        } else {
            trace("不换页，回到原页");
            this.setPageIndex(this.pageIndex);
        }
        tweenobj.velocity = 0;
        tweenobj.damping = 0;
        tweenobj.endTValue = NaN;
    };

    KISTouchScrollHelper.prototype.updateVScrollHandler = function () {
        var tweenobj = this.vscrollTweenObj;
        var maxValue = this.maxValue;
        var reflag = false;
        if (tweenobj.velocity <= 0.005) {
            //接近近似值，结束
            tweenobj.velocity = 0;

            //滚动真正结束
            if (val > maxValue) {
                this.setValue(maxValue);
            } else if (val < 0) {
                this.setValue(0);
            }
            this.stopScrollTween();
        } else {
            var val = this.tValue + tweenobj.sign * tweenobj.velocity;
            var dis = 0;
            if (val > maxValue) {
                //到底结束反弹
                tweenobj.sign = -1;
                dis = maxValue - val;
                reflag = true;
            } else if (val < 0) {
                reflag = true;

                //到顶结束反弹
                tweenobj.sign = 1;
                dis = -val;
            }

            //trace("val:" +[val]);
            if (reflag) {
                //滚动结束
                //trace("dis:" +[dis,tweenobj.velocity]);
                tweenobj.velocity = Math.abs(dis) * 0.3;
                tweenobj.damping = Math.abs(dis) * 0.05;
            }

            this.setValue(val);
            tweenobj.velocity -= tweenobj.damping;
            if (tweenobj.damping > 1) {
                tweenobj.damping *= 0.005;
            }
        }
    };

    KISTouchScrollHelper.prototype.setPageIndex = function (value, finish) {
        if (typeof finish === "undefined") { finish = false; }
        var ix = this.pageIndex;
        if (value < this.pageMin) {
            ix = this.pageMin;
        } else if (value > this.pageMax) {
            ix = this.pageMax;
        } else {
            ix = value;
        }
        this.pageIndex = ix;

        //trace("ix*pageCell:" +[value,ix,ix*pageCell]);
        var v = ix * this.pageCell;
        if (Math.abs(v - this.tValue) > 10 && !finish) {
            this.vscrollTweenObj.tValue = this.tValue;

            //TweenMotion.to(vscrollTweenObj, 0.5, { tValue: v, overwrite: 1, onUpdate: updateVScrollHandler4, onComplete: updateVScrollHandler4 });
            createjs.Tween.get(this.vscrollTweenObj, { override: true }).to({ tValue: v }, 500, createjs.Ease.circOut).call(this.updateVScrollHandler4, [], this).on("change", this.updateVScrollHandler4, this);
        } else {
            this.vscrollTweenObj.tValue = v;
            this.updateVScrollHandler4();
        }
        this.container_mc.dispatchEvent(new createjs.Event("changepage", false, true));
    };

    KISTouchScrollHelper.prototype.isScrolling = function () {
        return createjs.Tween.hasActiveTweens(this.vscrollTweenObj);
    };

    KISTouchScrollHelper.prototype.updateVScrollHandler4 = function () {
        this.setValue(this.vscrollTweenObj.tValue);
    };
    return KISTouchScrollHelper;
})();
//# sourceMappingURL=KISTouchScrollHelper.js.map
