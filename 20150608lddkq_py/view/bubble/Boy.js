var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        _super.call(this);
        this.isShowed = false;
        this.isTiping = false;
        this.isTiped = false;
        this.autoclose = 0;
        this.contentFrame = -1;
        this.speak = false;
        var img;
        var tmp_mc;

        img = lib.getResult("Boy");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
            images: [img],
            framerate: 25,
            animations: {
                speak: [48, 57],
                stand: 12, show: [0, 47, 'stand']
            },
            frames: [[0, 0, 147, 121, 0, 82.55000000000001, 47.94999999999999], [0, 0, 147, 121, 0, 82.55000000000001, 47.94999999999999], [147, 0, 239, 227, 0, 140.55, 111.94999999999999], [386, 0, 239, 244, 0, 140.55, 128.95], [625, 0, 272, 243, 0, 158.55, 128.95], [0, 244, 272, 231, 0, 158.55, 116.94999999999999], [272, 244, 285, 235, 0, 167.55, 115.94999999999999], [557, 244, 285, 235, 0, 167.55, 115.94999999999999], [842, 244, 197, 222, 0, 90.55000000000001, 109.94999999999999], [842, 244, 197, 222, 0, 90.55000000000001, 109.94999999999999], [0, 479, 191, 222, 0, 86.55000000000001, 109.94999999999999], [0, 479, 191, 222, 0, 86.55000000000001, 109.94999999999999], [191, 479, 132, 222, 0, 62.55000000000001, 109.94999999999999], [191, 479, 132, 222, 0, 62.55000000000001, 109.94999999999999], [191, 479, 132, 222, 0, 62.55000000000001, 109.94999999999999], [323, 479, 132, 222, 0, 57.55000000000001, 109.94999999999999], [323, 479, 132, 222, 0, 57.55000000000001, 109.94999999999999], [455, 479, 150, 222, 0, 74.55000000000001, 109.94999999999999], [455, 479, 150, 222, 0, 74.55000000000001, 109.94999999999999], [605, 479, 144, 221, 0, 67.55000000000001, 108.94999999999999], [749, 479, 146, 221, 0, 69.55000000000001, 108.94999999999999], [895, 479, 147, 221, 0, 70.55000000000001, 108.94999999999999], [0, 701, 148, 221, 0, 71.55000000000001, 108.94999999999999], [148, 701, 150, 221, 0, 73.55000000000001, 108.94999999999999], [298, 701, 152, 221, 0, 75.55000000000001, 108.94999999999999], [450, 701, 150, 221, 0, 73.55000000000001, 108.94999999999999], [600, 701, 148, 221, 0, 71.55000000000001, 108.94999999999999], [748, 701, 147, 221, 0, 70.55000000000001, 108.94999999999999], [895, 701, 146, 221, 0, 69.55000000000001, 108.94999999999999], [0, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [144, 922, 143, 221, 0, 66.55000000000001, 108.94999999999999], [287, 922, 141, 221, 0, 64.55000000000001, 108.94999999999999], [287, 922, 141, 221, 0, 64.55000000000001, 108.94999999999999], [428, 922, 143, 221, 0, 66.55000000000001, 108.94999999999999], [605, 479, 144, 221, 0, 67.55000000000001, 108.94999999999999], [749, 479, 146, 221, 0, 69.55000000000001, 108.94999999999999], [895, 479, 147, 221, 0, 70.55000000000001, 108.94999999999999], [0, 701, 148, 221, 0, 71.55000000000001, 108.94999999999999], [148, 701, 150, 221, 0, 73.55000000000001, 108.94999999999999], [298, 701, 152, 221, 0, 75.55000000000001, 108.94999999999999], [450, 701, 150, 221, 0, 73.55000000000001, 108.94999999999999], [600, 701, 148, 221, 0, 71.55000000000001, 108.94999999999999], [748, 701, 147, 221, 0, 70.55000000000001, 108.94999999999999], [455, 479, 150, 222, 0, 74.55000000000001, 109.94999999999999], [455, 479, 150, 222, 0, 74.55000000000001, 109.94999999999999], [323, 479, 132, 222, 0, 57.55000000000001, 109.94999999999999], [323, 479, 132, 222, 0, 57.55000000000001, 109.94999999999999], [191, 479, 132, 222, 0, 62.55000000000001, 109.94999999999999], [571, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [571, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [571, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [571, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [715, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [715, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [859, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [859, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [571, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999], [571, 922, 144, 221, 0, 67.55000000000001, 108.94999999999999]]
        }));
        tmp_mc.x = 175;
        tmp_mc.y = 48;
        this.boy_mc = tmp_mc;

        img = lib.getResult("BBP");
        tmp_mc = new KISSprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 129, 115, 0, 1, 1]] }), 0, new createjs.Rectangle(20, 21, 64, 8));
        tmp_mc.x = -127;
        tmp_mc.y = -34;
        this.bg_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[129, 0, 75, 75, 0, 35.7, 36.95], [204, 0, 75, 75, 0, 35.7, 36.95]] }));
        tmp_mc.x = -89;
        tmp_mc.y = 4;
        this.close_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 1, false);

        this.tip_mc = new createjs.Container();
        this.tip_mc.visible = false;
        this.tip_mc.addChild(this.bg_mc);
        this.tip_mc.addChild(this.close_btn);
        this.tip_mc.move(127, 77);

        this.bg_mc.top = this.bg_mc.y;
        this.bg_mc.oriHeight = this.bg_mc.getBounds().height;
        this.close_btn.oftX = this.bg_mc.x - this.close_btn.x;
        this.close_btn.oftY = this.bg_mc.y - this.close_btn.y;

        this.addChild(this.boy_mc);
        this.addChild(this.tip_mc);

        this.close_btn.on("click", this.onClick, this);
    }
    Boy.prototype.onClick = function (e) {
        this.closeTip();
    };

    Boy.prototype.show = function () {
        this.onTipClosed();
        this.boy_mc.gotoAndPlay("show");
        this.boy_mc.on("animationend", this.onShowed, this);
    };

    Boy.prototype.onShowed = function (e) {
        if (this.boy_mc.currentAnimation == "stand") {
            this.dispatchEvent(e);
            this.isShowed = true;
        }
    };

    Boy.prototype.changeMsgContent = function (content, frame) {
        this.contentFrame = frame;
        content.gotoAndStop(frame);
        var bggrid = this.bg_mc.scale9Grid;
        var ct = content.getBounds();
        this.bg_mc.setSize(ct.width + bggrid.x * 2, ct.height + bggrid.y * 2);
        this.bg_mc.move(-this.bg_mc._width, this.bg_mc.oriHeight + this.bg_mc.top - this.bg_mc._height);
        content.move(this.bg_mc.x + bggrid.x, this.bg_mc.y + bggrid.y);
        this.close_btn.move(this.bg_mc.x - this.close_btn.oftX, this.bg_mc.y - this.close_btn.oftY);
    };

    /*
    弹出气泡提示
    */
    Boy.prototype.message = function (content, frame, autoclose, speak, delay, ignore) {
        if (this.msgcontent && this.msgcontent.parent != this) {
            this.msgcontent = null;
        }
        if (this.msgcontent != content) {
            this.msgcontent = content;
            this.tip_mc.addChild(content);
        } else if (this.contentFrame == frame) {
            //同一条提示，闪烁
            if (this.isTiped) {
                this.shake(6);
                return;
            }
        }
        if (this.isTiping && !ignore) {
            this.closeTip2Message(content, frame, autoclose, speak, delay);
        } else {
            this.isTiping = true;
            this.isTiped = false;
            this.changeMsgContent(content, frame);
            this.autoclose = autoclose;
            this.speak = speak;
            this.tip_mc.visible = true;
            this.tip_mc.scaleX = 0;
            this.tip_mc.scaleY = 0;
            var t = createjs.Tween.get(this.tip_mc, { override: 1 });
            if (delay > 0) {
                t.wait(delay);
            }
            t.to({ scaleX: 1, scaleY: 1 }, 250).call(this.onTipComplete, [], this);
        }
    };

    Boy.prototype.shake = function (time) {
        createjs.Tween.get(this.tip_mc, { override: 1 }).wait(100).call(this.shakeBase, [time], this);
    };

    Boy.prototype.shakeBase = function (time) {
        time--;
        if (time > 0) {
            if (time % 2 == 0) {
                this.bg_mc.filters = Boy.RedFilter;
                this.bg_mc.cache(0, 0, this.bg_mc._width, this.bg_mc._height);
            } else {
                this.bg_mc.filters = null;
                this.bg_mc.uncache();
            }
            this.shake(time);
        }
    };

    Boy.prototype.onTipComplete = function () {
        if (this.isTiping) {
            this.isTiped = true;
            if (this.speak) {
                this.boy_mc.gotoAndPlay('speak');
            }
            if (this.autoclose) {
                createjs.Tween.get(this.tip_mc, { override: 1 }).wait(this.autoclose).call(this.closeTip, [], this);
            }
        }
    };

    Boy.prototype.onTipClosed = function () {
        this.isTiping = false;
        this.isTiped = false;
        this.contentFrame = -1;
        this.tip_mc.scaleX = 0;
        this.tip_mc.scaleY = 0;
    };

    Boy.prototype.closeTip2Message = function (content, frame, autoclose, speak, delay) {
        this.boy_mc.gotoAndStop('stand');
        this.isTiped = false;
        createjs.Tween.get(this.tip_mc, { override: 1 }).to({ scaleX: 0, scaleY: 0 }, 200).call(this.message, [content, frame, autoclose, speak, delay, true], this);
    };

    Boy.prototype.closeTip = function () {
        this.contentFrame = -1;
        this.boy_mc.gotoAndStop('stand');
        if (this.isTiped || this.isTiping) {
            this.isTiped = false;
            this.isTiping = false;
            createjs.Tween.get(this.tip_mc, { override: 1 }).to({ scaleX: 0, scaleY: 0 }, 200).call(this.onTipClosed, [], this);
        }
        this.dispatchEvent(new createjs.Event("close"));
    };
    Boy.RedFilter = [new createjs.ColorFilter(1, 0, 0, 1)];
    return Boy;
})(createjs.Container);
//# sourceMappingURL=Boy.js.map
