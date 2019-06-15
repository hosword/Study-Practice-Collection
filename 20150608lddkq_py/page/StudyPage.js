var __extends = this.__extends || function(d, b) {
	for (var p in b)
		if (b.hasOwnProperty(p)) d[p] = b[p];

	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
var StudyPage = (function(_super) {
	__extends(StudyPage, _super);

	function StudyPage() {
		_super.call(this);
		this.minFrame = 0;
		this.maxFrame = 0;
		this.currentFrame = 0;
		this.configUI();
		this.configContent();
		this.addChilds();
	}
	StudyPage.prototype.configUI = function() {
		var img;
		var tmp_mc;
		var tmp2_mc;

		//绿草纹理
		var img = lib.getResult("GBG");
		img.crossOrigin = "Anonymous";
		this.bg = new createjs.Bitmap(img);
		this.bg.mouseEnabled = false;

		img = lib.getResult("btns");

		//返回主页
		var tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[71, 265, 59, 52, 0, 0, 0],
				[71, 265, 59, 52, 0, 0, 0],
				[130, 265, 59, 52, 0, 0, 0]
			]
		}));
		tmp_mc.x = 5;
		tmp_mc.y = 4;
		tmp2_mc = new createjs.Shape(new createjs.Graphics());
		tmp2_mc.graphics.beginFill("#000");
		tmp2_mc.graphics.drawRect(0, 0, 60, 52);
		tmp2_mc.graphics.endFill();
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc);
		this.home_btn = tmp_mc;

		//页码
		img = lib.getResult("Num");
		var sst = new createjs.SpriteSheet({
			images: [img],
			animations: {
				"0": 0,
				"1": 1,
				"2": 2,
				"3": 3,
				"4": 4,
				"5": 5,
				"6": 6,
				"7": 7,
				"8": 8,
				"9": 9,
				"+": 10,
				"-": 11,
				"*": 12,
				"/": 13
			},
			frames: [
				[31, 0, 28, 50, 0, 0.5, 6],
				[170, 0, 21, 50, 0, 0.5, 6],
				[31, 50, 28, 50, 0, 0.5, 6],
				[59, 0, 28, 50, 0, 0.5, 6],
				[59, 50, 28, 50, 0, 0.5, 6],
				[87, 0, 28, 50, 0, 0.5, 6],
				[87, 50, 28, 50, 0, 0.5, 6],
				[143, 0, 27, 50, 0, 0.5, 6],
				[115, 0, 28, 50, 0, 0.5, 6],
				[115, 50, 28, 50, 0, 0.5, 6],
				[0, 0, 31, 50, 0, 2.5, 10],
				[0, 50, 31, 50, 0, 2.5, 10],
				[166, 50, 22, 50, 0, -2.5, -1],
				[143, 50, 23, 50, 0, -1.5, 6]
			]
		});
		this.pnum_mc = new createjs.BitmapText("0123456789+-*/", sst);

		img = lib.getResult("btns");

		//帮助
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[189, 265, 44, 51, 0, 0, 0],
				[189, 265, 44, 51, 0, 0, 0],
				[211, 137, 44, 51, 0, 0, 0]
			]
		}));
		tmp_mc.x = 1087;
		tmp_mc.y = 2;
		tmp2_mc = new createjs.Shape(new createjs.Graphics());
		tmp2_mc.graphics.beginFill("#000");
		tmp2_mc.graphics.drawRect(0, 0, 45, 51);
		tmp2_mc.graphics.endFill();
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc);
		this.que_btn = tmp_mc;

		img = lib.getResult("XXC");

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 264, 938, 94, 0, 509.65, 57.2]
			]
		}));
		tmp_mc.x = 595;
		tmp_mc.y = 603;
		this.page_mc = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 163, 926, 101, 0, 0, 10.55]
			]
		}));
		tmp_mc.x = 106;
		tmp_mc.y = 2;
		this.title_mc = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[128, 358, 53, 79, 0, -8, -7.05],
				[128, 358, 53, 79, 0, -8, -7.05],
				[938, 263, 54, 79, 0, 0, -4.05]
			]
		}));
		tmp_mc.x = 6;
		tmp_mc.y = 278;
		this.left_btn = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[938, 342, 54, 79, 0, 60.650000000000006, -7.05],
				[938, 342, 54, 79, 0, 60.650000000000006, -7.05],
				[74, 358, 54, 79, 0, 52.650000000000006, -4.05]
			]
		}));
		tmp_mc.x = 1125;
		tmp_mc.y = 278;
		this.right_btn = tmp_mc;

		tmp_mc = this.left_btn;
		tmp2_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[926, 163, 74, 100, 0, -1, -0.05]
			]
		}));
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc, 0);

		tmp_mc = this.right_btn;
		tmp2_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 358, 74, 100, 0, 73.65, -0.05]
			]
		}));
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false, tmp2_mc, 0);
		//this.pnum_mc.move(this.page_mc.x, this.page_mc.y);
	};

	StudyPage.prototype.setSize = function(w, h) {
		_super.prototype.setSize.call(this, w, h);
		this.bg.scaleX = w / this.bg.image.width;
		this.bg.scaleY = h / this.bg.image.height;

		this.alignDirection(this.que_btn, DirectionType.RIGHT);
		this.alignDirection(this.right_btn, DirectionType.RIGHT | DirectionType.MIDDLE);
		this.alignDirection(this.left_btn, DirectionType.MIDDLE);

		this.alignDirection(this.title_mc, DirectionType.CENTER);

		this.alignDirection(this.page_mc, DirectionType.BOTTOM);
		this.page_mc.alignTarget(this.content_mc, DirectionType.OFFSET_X);
		this.fixPNumMC();
	};

	StudyPage.prototype.configContent = function() {
		var chot = this.chot = new createjs.Rectangle(0, 0, 991, 464);
		this.hot_mc = new createjs.DisplayObject();

		var h_mc = new createjs.Shape(new createjs.Graphics());
		h_mc.graphics.beginFill("#000");
		h_mc.graphics.drawRect(chot.x, chot.y, chot.width, chot.height);
		h_mc.graphics.endFill();

		this.hot_mc.move(68, 90);
		this.hot_mc.hitArea = h_mc;

		this.scroller = new KISTouchScrollHelper();
	};

	StudyPage.prototype.addChilds = function() {
		this.addChild(this.bg);
		this.addChild(this.home_btn);
		this.addChild(this.page_mc);
		this.addChild(this.title_mc);
		this.addChild(this.pnum_mc);
		this.addChild(this.left_btn);
		this.addChild(this.right_btn);
		if (this.content_mc) {
			this.addChild(this.content_mc);
		}
		this.on("click", this.btnClickHandler, this);
		this.addChild(this.que_btn);

		this.initChildsRect();
	};

	StudyPage.prototype.btnClickHandler = function(e) {
		var et = e.target;
		if (et == this.home_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.HOME_Project, true));
		} else if (et == this.left_btn) {
			this.preview();
			this.recheckTypeBtn();
		} else if (et == this.right_btn) {
			this.next();
			this.recheckTypeBtn();
		} else if (et == this.que_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.HELP_Project, true));
		}
	};

	StudyPage.prototype.next = function() {
		this.changeContentAt(this.currentFrame + 1);
	};

	StudyPage.prototype.preview = function() {
		this.changeContentAt(this.currentFrame - 1);
	};

	StudyPage.prototype.changeContentAt = function(ix) {
		this.fixPNumMC();
		this.currentFrame = ix;
		this.scroller.setPageIndex(ix);
	};

	StudyPage.prototype.fixPNumMC = function() {
		this.pnum_mc.text = (1 + this.currentFrame - this.minFrame) + "/" + (1 + this.maxFrame - this.minFrame);
		var rt = this.pnum_mc.getBounds();
		this.pnum_mc.move(this.page_mc.x - rt.width / 2, this.page_mc.y - rt.height / 2 + 10);
	};

	StudyPage.prototype.getContentBy = function(baseurl, count, basew, baseI) {
		var obj = new createjs.Container();
		for (var i = 0; i < count; i++) {
			var bmp = new createjs.Bitmap(this.getContentUrl(baseI + i));
			bmp.move(i * basew, 0);
			obj.addChild(bmp);
		}
		return obj;
	};

	StudyPage.prototype.getContentUrl = function(n) {
		var s2 = "0000";
		var s = (n + 1) + "";
		return this.imgUrl + s2.substr(0, s2.length - s.length) + s + ".png";
	};

	StudyPage.prototype.recheckTypeBtn = function() {
		var frame = this.currentFrame;
		if (frame == this.minFrame) {
			this.left_btn.visible = false;
			this.right_btn.visible = this.maxFrame > this.minFrame;
		} else if (frame == this.maxFrame) {
			this.left_btn.visible = this.maxFrame > this.minFrame;
			this.right_btn.visible = false;
		} else {
			this.left_btn.visible = true;
			this.right_btn.visible = true;
		}
	};
	return StudyPage;
})(BasePage);
//# sourceMappingURL=StudyPage.js.map