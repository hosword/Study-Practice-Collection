var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        _super.call(this);
        this.isShowing = false;
        this.isShowed = false;
        this.autoclose = 0;
        this.contentFrame = -1;
        this.clickM2Close = false;
        this.configUI();

        this.on("click", this.onClick, this);
    }
    Alert.prototype.configUI = function () {
        var img;
        var tmp_mc;

        img = lib.getResult("ART");

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 558, 407, 0, 0, 0]] }));
        tmp_mc.x = -283;
        tmp_mc.y = -209;
        this.bg_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[360, 407, 76, 75, 0, 35.7, 36.95], [436, 407, 76, 75, 0, 35.7, 36.95]] }));
        tmp_mc.x = 174;
        tmp_mc.y = -159;
        this.close_btn = tmp_mc;
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 482, 143, 144, 0, 103.5, 108.35], [143, 482, 143, 166, 0, 103.5, 119.35]] }));
        tmp_mc.x = -193;
        tmp_mc.y = -116;
        this.face_mc = tmp_mc;

        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[286, 482, 117, 59, 0, -5.95, -2.5], [286, 482, 117, 59, 0, -5.95, -2.5], [403, 482, 128, 65, 0, -0.95, 0.5], [0, 648, 127, 66, 0, 1.05, 1.5]] }));
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
        tmp_mc.x = -80;
        tmp_mc.y = 91;
        this.ok_btn = tmp_mc;

        this.addChild(this.bg_mc);
        this.addChild(this.close_btn);
        this.addChild(this.ok_btn);
        this.addChild(this.face_mc);
    };

    Alert.prototype.onClick = function (e) {
        if (e.target == this.close_btn) {
            var evt = new createjs.Event("close", false, true);
            this.dispatchEvent(evt);

            if (!evt.defaultPrevented) {
                this.closeTip();
            }
        } else if (e.target == this.ok_btn) {
            var evt = new createjs.Event("ok", false, true);
            this.dispatchEvent(evt);

            if (!evt.defaultPrevented) {
                this.closeTip();
            }
        }
    };

    Alert.show = function (content, frame, autoclose, delay, modal, cm2Close) {
        var p = Project.topLayout;
        var art = new Alert();
        if (modal) {
            var m = art.createModal();
            m.setSize(p._width, p._height);
            p.addChild(m);
            art.clickM2Close = cm2Close;
        }
        p.addChild(art);
        art.move(art.parent._width / 2, art.parent._height / 2);
        art.message(content, frame, autoclose, delay, modal);
        return art;
    };

    Alert.prototype.createModal = function () {
        var m = this.modal_mc;
        if (!this.modal_mc) {
            m = new WModalBG();
        }
        this.modal_mc = m;
        m.on("click", this.onModalClick, this);
        return m;
    };

    Alert.prototype.onModalClick = function (e) {
        if (this.clickM2Close) {
            e.currentTarget.off("click", this.onModalClick, false, this);
            this.closeTip();
        }
    };

    Alert.prototype.changeMsgContent = function (content, frame) {
        this.contentFrame = frame;
        content.gotoAndStop(frame);
        var crt = content.getBounds();
        content.move(-crt.width / 2, -crt.height / 2);
    };

    /*
    弹出气泡提示
    */
    Alert.prototype.message = function (content, frame, autoclose, delay) {
        if (content) {
            if (this.msgcontent && this.msgcontent.parent != this) {
                this.msgcontent = null;
            }
            if (this.msgcontent != content) {
                this.msgcontent = content;
                this.addChild(content);
            } else if (this.contentFrame == frame) {
                //同一条提示，闪烁
                if (this.isShowed) {
                    this.shake(6);
                    return;
                }
            }
        }
        this.isShowing = true;
        this.isShowed = false;
        if (content) {
            this.changeMsgContent(content, frame);
        }
        this.autoclose = autoclose;
        this.scaleX = 0.5;
        this.scaleY = 0.5;
        this.alpha = 0.8;
        var t = createjs.Tween.get(this, { override: 1 });
        if (delay > 0) {
            t.wait(delay);
        }
        t.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 250).call(this.onTipComplete, [], this);
    };

    Alert.prototype.shake = function (time) {
        createjs.Tween.get(this, { override: 1 }).wait(100).call(this.shakeBase, [time], this);
    };

    Alert.prototype.shakeBase = function (time) {
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

    Alert.prototype.onTipComplete = function () {
        if (this.isShowing) {
            this.isShowed = true;
            if (this.autoclose) {
                createjs.Tween.get(this, { override: 1 }).wait(this.autoclose).call(this.closeTip, [], this);
            }
        }
    };

    Alert.prototype.onTipClosed = function () {
        this.isShowing = false;
        this.isShowed = false;
        this.contentFrame = -1;
        this.scaleX = 0;
        this.scaleY = 0;
        this.dispatchEvent(new createjs.Event("closed"));
        this.onCloseEnd();
    };

    Alert.prototype.onCloseEnd = function () {
        if (this.parent) {
            var m = this.modal_mc;
            if (m && m.parent == this.parent) {
                m.parent.removeChild(m);
            }
            this.removeAllEventListeners();
            this.removeAllChildren();
            this.parent.removeChild(this);
        }
    };

    Alert.prototype.closeTip = function () {
        this.isShowed = false;
        this.contentFrame = -1;
        createjs.Tween.get(this, { override: 1 }).to({ scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 200).call(this.onTipClosed, [], this);
    };
    return Alert;
})(createjs.Container);
//# sourceMappingURL=Alert.js.map
