var __extends = this.__extends || function(d, b) {
	for (var p in b)
		if (b.hasOwnProperty(p)) d[p] = b[p];

	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
var StartPage = (function(_super) {
	__extends(StartPage, _super);

	function StartPage() {
		_super.call(this);
		this.minFrame = 0;
		this.maxFrame = 0;
		this.currentFrame = 0;
		this.configUI();
		this.configContent();
		this.addChilds();
		this.addMyEvents();
	}
	StartPage.prototype.configUI = function() {
		//蓝天
		var img = lib.getResult("BSky");
		img.crossOrigin = "Anonymous";
		this.bg = new createjs.Bitmap(img);
		this.bg.mouseEnabled = false;

		//树
		img = lib.getResult("te_0");
		img.crossOrigin = "Anonymous";
		this.tree0 = new createjs.Bitmap(img);
		this.tree0.x = 559;
		this.tree0.y = 46;
		this.tree0.mouseEnabled = false;

		var tmp_mc;

		img = lib.getResult("SP_0");

		//tv框
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 206, 827, 614, 0, 12.75, 15.15]
			]
		}));
		tmp_mc.x = 17;
		tmp_mc.y = 3;
		tmp_mc.mouseEnabled = false;
		this.tv_mc = tmp_mc;

		//蘑菇
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 979, 206, 0, 0, 12]
			]
		}));
		tmp_mc.x = -45;
		tmp_mc.y = 500;
		tmp_mc.mouseEnabled = false;
		this.mg_mc = tmp_mc;

		img = lib.getResult("SP_2");

		//博士
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 182, 229, 0, -8.55, 1]
			]
		}));
		tmp_mc.x = 0;
		tmp_mc.y = 396;
		tmp_mc.mouseEnabled = false;
		this.bs_mc = tmp_mc;

		//小男孩身体
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[182, 0, 125, 122, 0, -8.75, -8.8]
			]
		}));
		tmp_mc.x = 593;
		tmp_mc.y = 58;
		tmp_mc.mouseEnabled = false;
		this.bb_mc = tmp_mc;

		//小男孩脸
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[307, 0, 139, 158, 0, -3.55, -7.8]
			]
		}));
		tmp_mc.x = 588;
		tmp_mc.y = -7;
		tmp_mc.mouseEnabled = false;
		this.bf_mc = tmp_mc;

		img = lib.getResult("SP_1");

		//看一看
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[258, 340, 223, 111, 0, -8.7, -71.15],
				[258, 340, 223, 111, 0, -8.7, -71.15],
				[0, 340, 258, 128, 0, 8.3, -62.15],
				[258, 340, 223, 111, 0, -8.7, -71.15]
			]
		}));
		tmp_mc.x = 785;
		tmp_mc.y = 141;
		this.do_mc = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[268, 151, 224, 133, 0, -5.65, -57.4],
				[268, 151, 224, 133, 0, -5.65, -57.4],
				[0, 181, 268, 159, 0, 14.35, -44.4],
				[268, 151, 224, 133, 0, -5.65, -57.4]
			]
		}));
		tmp_mc.x = 773;
		tmp_mc.y = 44;
		this.look_mc = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[261, 451, 225, 93, 0, 19.9, -106.1],
				[261, 451, 225, 93, 0, 19.9, -106.1],
				[0, 468, 261, 108, 0, 36.9, -99.1],
				[261, 451, 225, 93, 0, 19.9, -106.1]
			]
		}));
		tmp_mc.x = 844;
		tmp_mc.y = 358;
		this.show_mc = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[268, 0, 223, 151, 0, -2.9499999999999993, -44.95],
				[268, 0, 223, 151, 0, -2.9499999999999993, -44.95],
				[0, 0, 268, 181, 0, 18.05, -28.95],
				[268, 0, 223, 151, 0, -2.9499999999999993, -44.95]
			]
		}));
		tmp_mc.x = 822;
		tmp_mc.y = 266;
		this.study_mc = tmp_mc;

		new createjs.ButtonHelper(this.do_mc, 0, 1, 2, false);
		new createjs.ButtonHelper(this.look_mc, 0, 1, 2, false);
		new createjs.ButtonHelper(this.show_mc, 0, 1, 2, false);
		new createjs.ButtonHelper(this.study_mc, 0, 1, 2, false);

		img = lib.getResult("btns");

		//返回
		//tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({ images: [img], frames: [[0, 0, 71, 69, 0, 0, 0], [71, 0, 71, 69, 0, 0, 0], [142, 0, 71, 69, 0, 0, 0]] }));
		//tmp_mc.x = 891;
		//tmp_mc.y = 4;
		//new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		//this.back_btn = tmp_mc;
		//帮助
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[71, 137, 70, 68, 0, 0, 0],
				[71, 137, 70, 68, 0, 0, 0],
				[141, 137, 70, 68, 0, 0, 0]
			]
		}));
		tmp_mc.x = 971;
		tmp_mc.y = 4;
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		this.help_btn = tmp_mc;

		//退出
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[142, 0, 70, 69, 0, 0, 0],
				[142, 0, 70, 69, 0, 0, 0],
				[0, 69, 70, 69, 0, 0, 0]
			]
		}));
		tmp_mc.x = 1052;
		tmp_mc.y = 3;
		new createjs.ButtonHelper(tmp_mc, 0, 1, 2, false);
		this.close_btn = tmp_mc;

		this.title_mc = new createjs.Bitmap("images/BT.png");
		this.title_mc.move(208, 76);
	};

	StartPage.prototype.addChilds = function() {
		this.addChild(this.bg);
		this.addChild(this.tree0);
		this.addChild(this.bb_mc);

		if (this.pic_mc) {
			this.addChild(this.pic_mc);
		}

		this.addChild(this.tv_mc);
		this.addChild(this.bf_mc);
		this.addChild(this.bs_mc);
		this.addChild(this.mg_mc);
		this.addChild(this.look_mc);
		this.addChild(this.do_mc);
		this.addChild(this.study_mc);
		this.addChild(this.show_mc);
		this.addChild(this.help_btn);
		this.addChild(this.close_btn);
		this.addChild(this.title_mc);

		this.initChildsRect();
	};

	StartPage.prototype.configContent = function() {
		this.minFrame = 0;
		this.maxFrame = 2;
		this.imgUrl = "images/syjt/syjt";
		this.pic_mc = this.getContentBy(this.imgUrl, this.maxFrame + 1, 573, 0, true);
		this.pic_mc.scrollRect = new createjs.Rectangle(0, 0, 573, 323);
		this.pic_mc.move(115, 192);
	};

	StartPage.prototype.addMyEvents = function() {
		this.look_mc.on("click", this.clickHandler, this);
		this.do_mc.on("click", this.clickHandler, this);
		this.study_mc.on("click", this.clickHandler, this);

		//this.back_btn.on("click", this.clickHandler, this);
		this.help_btn.on("click", this.clickHandler, this);
		this.close_btn.on("click", this.clickHandler, this);
	};

	StartPage.prototype.clickHandler = function(e) {
		var et = e.currentTarget;
		if (et == this.look_mc) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.LOOK_Project, true));
		} else if (et == this.do_mc) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.DO_Project, true));
		} else if (et == this.study_mc) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.STUDY_Project, true));
		} else if (et == this.back_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.ANIMATION_Project, true));
		} else if (et == this.help_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.HELP_Project, true));
		} else if (et == this.close_btn) {
			this.dispatchEvent(new createjs.Event(ProjectEvent.Exit_Project, true));
		}
	};

	StartPage.prototype.show = function() {
		_super.prototype.show.call(this);
		if (this.visible) {
			this.currentFrame = -1;
			this.next();
		}
	};

	StartPage.prototype.setSize = function(w, h) {
		_super.prototype.setSize.call(this, w, h);
		this.bg.scaleX = w / this.bg.image.width;
		this.bg.scaleY = h / this.bg.image.height;

		this.alignDirection(this.help_btn, DirectionType.RIGHT);
		this.alignDirection(this.close_btn, DirectionType.RIGHT);

		//this.alignDirection(this.bs_mc, DirectionType.BOTTOM);
		this.alignDirection(this.look_mc, DirectionType.RIGHT | DirectionType.BOTTOM);
		this.alignDirection(this.do_mc, DirectionType.RIGHT | DirectionType.BOTTOM);
		this.alignDirection(this.study_mc, DirectionType.RIGHT | DirectionType.BOTTOM);
		this.alignDirection(this.show_mc, DirectionType.RIGHT | DirectionType.BOTTOM);
		this.alignDirection(this.tree0, DirectionType.RIGHT | DirectionType.BOTTOM);
		this.tv_mc.alignSize(this.look_mc.x + 100, h - this.bs_mc._height / 2, DirectionType.MIDDLE | DirectionType.CENTER);
		if (this.tv_mc.y < 0) {
			this.tv_mc.move(NaN, 0);
		}
		this.mg_mc.alignSize(this.look_mc.x + 30, h, DirectionType.BOTTOM | DirectionType.CENTER);
		this.bb_mc.alignTarget(this.tv_mc, DirectionType.OFFSET_Y | DirectionType.OFFSET_X);
		this.bf_mc.alignTarget(this.bb_mc, DirectionType.OFFSET_Y | DirectionType.OFFSET_X);
		this.pic_mc.alignTarget(this.tv_mc, DirectionType.OFFSET_Y | DirectionType.OFFSET_X);
		this.title_mc.alignTarget(this.tv_mc, DirectionType.OFFSET_Y | DirectionType.OFFSET_X);
		this.bs_mc.alignTarget(this.mg_mc, DirectionType.OFFSET_Y | DirectionType.OFFSET_X);
		if (this.bs_mc.x < 0) {
			this.bs_mc.move(0, NaN);
		}
	};

	StartPage.prototype.next = function() {
		//循环播放
		if (this.currentFrame == this.maxFrame + 1) {
			this.pic_mc.scrollRect.x = 0;
			this.currentFrame = 0;
		}
		this.changeContentAt(this.currentFrame + 1);
	};

	StartPage.prototype.preview = function() {
		this.changeContentAt(this.currentFrame - 1);
	};

	StartPage.prototype.changeContentAt = function(ix) {
		if (this.visible) {
			this.currentFrame = ix;
			createjs.Tween.get(this.pic_mc.scrollRect, {
				override: true
			}).to({
				x: ix * this.pic_mc.scrollRect.width
			}, 300, createjs.Ease.circOut).wait(3000).call(this.next, [], this);
		}
	};

	StartPage.prototype.getContentBy = function(baseurl, count, basew, baseI, loop) {
		if (typeof loop === "undefined") {
			loop = false;
		}
		var obj = new createjs.Container();
		if (loop) {
			count++;
		}
		for (var i = 0; i < count; i++) {
			var ix = i;
			if (loop && i == count - 1) {
				ix = baseI;
			}
			var bmp = new createjs.Bitmap(this.getContentUrl(baseI + ix));
			bmp.move(i * basew, 0);
			obj.addChild(bmp);
		}
		return obj;
	};

	StartPage.prototype.getContentUrl = function(n) {
		//var s2: string = "0000";
		//var s: string = (n + 1) + "";
		//return this.imgUrl + s2.substr(0, s2.length - s.length) + s + ".jpg";
		return this.imgUrl + n + ".jpg";
	};
	return StartPage;
})(BasePage);
//# sourceMappingURL=StartPage.js.map