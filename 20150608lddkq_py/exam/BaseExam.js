var __extends = this.__extends || function(d, b) {
	for (var p in b)
		if (b.hasOwnProperty(p)) d[p] = b[p];

	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
var BaseExam = (function(_super) {
	__extends(BaseExam, _super);

	function BaseExam() {
		_super.call(this);

		//蓝云纹理
		var img = lib.getResult("BTEU");
		img.crossOrigin = "Anonymous";
		this.bg = new createjs.Bitmap(img);

		//this.bg.mouseEnabled = false;
		img = lib.getResult("btns");

		//返回主页
		var tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 71, 69, 0, 0, 0],
				[0, 0, 71, 69, 0, 0, 0],
				[71, 0, 71, 69, 0, 0, 0]
			]
		}));
		tmp_mc.x = 7;
		tmp_mc.y = 4;
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		this.home_btn = tmp_mc;

		//返回
		//tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 71, 69, 0, 0, 0], [71, 0, 71, 69, 0, 0, 0], [142, 0, 71, 69, 0, 0, 0]] }));
		//tmp_mc.x = 891;
		//tmp_mc.y = 4;
		//new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		//this.back_btn = tmp_mc;
		//返回
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 71, 69, 0, 0, 0],
				[71, 0, 71, 69, 0, 0, 0],
				[142, 0, 71, 69, 0, 0, 0]
			]
		}));
		tmp_mc.x = 891;
		tmp_mc.y = 4;
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		this.back_btn = tmp_mc;

		//帮助
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[71, 137, 70, 68, 0, 0, 0],
				[71, 137, 70, 68, 0, 0, 0],
				[141, 137, 70, 68, 0, 0, 0]
			]
		}));
		tmp_mc.x = 83;
		tmp_mc.y = 4;
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		this.help_btn = tmp_mc;

		//菜单
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[141, 69, 71, 68, 0, 0, 0],
				[141, 69, 71, 68, 0, 0, 0],
				[0, 206, 71, 68, 0, 0, 0]
			]
		}));
		tmp_mc.x = 163;
		tmp_mc.y = 4;
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		this.menu_btn = tmp_mc;

		this.addChild(this.bg);
		this.addChild(this.home_btn);
//		this.addChild(this.back_btn);
		this.addChild(this.help_btn);
		this.addChild(this.menu_btn);
		this.addMyEvents();
	}
	BaseExam.prototype.addMyEvents = function() {
		this.on("click", this.btnClickHandler, this);
	};

	BaseExam.prototype.btnClickHandler = function(e) {
		var et = e.target;
		if (et == this.home_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.HOME_Project, true));
		} else if (et == this.help_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.HELP_Project, true));
		} else if (et == this.close_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.Exit_Project, true));
		} else if (et == this.menu_btn) {
			var m = ExamMenu.getInstance().show();
			m.on("reset", this.onMenu, this);
			m.on("back", this.onMenu, this);
		}
	};

	BaseExam.prototype.reset = function() {};

	BaseExam.prototype.onMenu = function(e) {
		if (e.type == "reset") {
			this.reset();
		} else if (e.type == "back") {
			this.dispatchEvent(new ProjectEvent(ProjectEvent.BACK_Project, null, true));
		}
	};

	BaseExam.prototype.setSize = function(w, h) {
		_super.prototype.setSize.call(this, w, h);
		this.bg.scaleX = w / this.bg.image.width;
		this.bg.scaleY = h / this.bg.image.height;
	};
	return BaseExam;
})(BasePage);
//# sourceMappingURL=BaseExam.js.map