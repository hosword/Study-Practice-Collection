var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SelecterPage = (function (_super) {
    __extends(SelecterPage, _super);
    //private lastExam: IExam;
    function SelecterPage() {
        _super.call(this);

        var tmp2_mc;

        //蓝云纹理
        var img = lib.getResult("BTEU");
        this.bg = new createjs.Bitmap(img);
        this.bg.mouseEnabled = false;

        img = lib.getResult("btns");

        //返回主页
        var tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[71, 265, 59, 52, 0, 0, 0], [71, 265, 59, 52, 0, 0, 0], [130, 265, 59, 52, 0, 0, 0]] }));
        tmp_mc.x = 5;
        tmp_mc.y = 4;
        tmp2_mc = new createjs.Shape(new createjs.Graphics());
        tmp2_mc.graphics.beginFill("#000");
        tmp2_mc.graphics.drawRect(0, 0, 60, 52);
        tmp2_mc.graphics.endFill();
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc);
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
        this.home_btn = tmp_mc;

        //帮助
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[189, 265, 44, 51, 0, 0, 0], [189, 265, 44, 51, 0, 0, 0], [211, 137, 44, 51, 0, 0, 0]] }));
        tmp_mc.x = 1087;
        tmp_mc.y = 2;
        var tmp2_mc = new createjs.Shape(new createjs.Graphics());
        tmp2_mc.graphics.beginFill("#000");
        tmp2_mc.graphics.drawRect(0, 0, 45, 51);
        tmp2_mc.graphics.endFill();
        new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc);
        this.que_btn = tmp_mc;

        img = lib.getResult("clod0");

        //云
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 330, 881, 137, 0, 5.3, 5.75]] }));
        tmp_mc.x = 120;
        tmp_mc.y = -50;
        tmp_mc.mouseEnabled = false;
        this.cloud0_mc = tmp_mc;

        //云
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 490, 167, 0, 5.65, 0]] }));
        tmp_mc.x = -73;
        tmp_mc.y = 530;
        tmp_mc.mouseEnabled = false;
        this.cloud1_mc = tmp_mc;

        //云
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 167, 490, 163, 0, 6, 0]] }));
        tmp_mc.x = 716;
        tmp_mc.y = 520;
        tmp_mc.mouseEnabled = false;
        this.cloud2_mc = tmp_mc;

        //标题
        img = lib.getResult("ldst");
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 121, 46, 0, 0, 0], [0, 46, 121, 46, 0, 0, 0]] }));
        tmp_mc.x = 481;
        tmp_mc.y = 17;
        tmp_mc.mouseEnabled = false;
        this.title_mc = tmp_mc;

        //选项
        this.list_mc = new ThumbList();
        this.list_mc.move(0, 105);

        img = lib.getResult("SEBTN");

        //开始按钮
        tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 227, 82, 0, 0, 0], [0, 82, 225, 80, 0, 0, 0]] }));
        tmp_mc.x = 436;
        tmp_mc.y = 507;
        new createjs.ButtonHelper(tmp_mc, 0, 0, 1, false);
        this.start_btn = tmp_mc;

        this.addChild(this.bg);
        this.addChild(this.cloud0_mc);
        this.addChild(this.cloud1_mc);
        this.addChild(this.cloud2_mc);
        this.addChild(this.home_btn);
        this.addChild(this.que_btn);
        this.addChild(this.title_mc);

        this.list_mc.hot_mc.move(this.list_mc.x, this.list_mc.y);
        this.addChild(this.list_mc);
        this.addChild(this.list_mc.hot_mc);
        this.addChild(this.start_btn);

        this.initChildsRect();

        this.addMyEvents();

        this.initExamData();

        this.list_mc.setSize(this._width, this.start_btn.y - this.list_mc.y);
    }
    SelecterPage.prototype.show = function () {
        if (!this.list_mc.data) {
            this.list_mc.setData(this.examlist);
        } else {
            this.list_mc.setSelectedIndex(0);
        }
        _super.prototype.show.call(this);
    };

    SelecterPage.prototype.initExamData = function () {
    };

    SelecterPage.prototype.addMyEvents = function () {
        this.on("click", this.btnClickHandler, this, true);

        this.on(ExamEvent.CHANGE_EXAM, this.examHandler, this, true);
        this.list_mc.on("change", this.onSelectItem, this, true);
    };

    SelecterPage.prototype.onSelectItem = function (e) {
        this.dispatchEvent(new ExamEvent(ExamEvent.CHANGE_EXAM, this.list_mc.selectedIndex, this.list_mc.getSelectedValue()));
    };

    SelecterPage.prototype.btnClickHandler = function (e) {
        var et = e.target;
        if (et == this.home_btn) {
            this.dispatchEvent(new createjs.Event(ProjectEvent.HOME_Project, true));
        } else if (et == this.que_btn) {
            this.dispatchEvent(new createjs.Event(ProjectEvent.HELP_Project, true));
        } else if (et == this.start_btn) {
            this.dispatchEvent(new ExamEvent(ExamEvent.CHANGE_EXAM, this.list_mc.selectedIndex, this.list_mc.getSelectedValue()));
        }
    };

    SelecterPage.prototype.examHandler = function (e) {
        this.change2Exam(e.examData);
    };

    SelecterPage.prototype.setSize = function (w, h) {
        _super.prototype.setSize.call(this, w, h);
        this.list_mc.setSize(w, NaN);
        this.bg.scaleX = w / this.bg.image.width;
        this.bg.scaleY = h / this.bg.image.height;

        this.alignDirection(this.que_btn, DirectionType.RIGHT);

        this.alignDirection(this.cloud0_mc, DirectionType.CENTER);
        this.alignDirection(this.cloud1_mc, DirectionType.BOTTOM);
        this.alignDirection(this.cloud2_mc, DirectionType.BOTTOM | DirectionType.RIGHT);
        this.alignDirection(this.start_btn, DirectionType.BOTTOM | DirectionType.CENTER);
        this.list_mc.alignSize(w, this.start_btn.y - this.list_mc.top, DirectionType.MIDDLE);
        this.list_mc.move(NaN, this.list_mc._y + this.list_mc.top);
        this.title_mc.alignTarget(this.cloud0_mc, DirectionType.OFFSET_X);
    };

    SelecterPage.prototype.change2Exam = function (arr) {
        var exam = null;
        if (typeof (arr[0]) == "function") {
            exam = new arr[0]();
        } else {
            exam = arr[0];
        }
        this.dispatchEvent(new ProjectEvent(ProjectEvent.EXAM_Project, exam, true));
    };
    return SelecterPage;
})(BasePage);
//# sourceMappingURL=SelecterPage.js.map
