var __extends = this.__extends || function(d, b) {
	for (var p in b)
		if (b.hasOwnProperty(p)) d[p] = b[p];

	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
var MStudyPage = (function(_super) {
	__extends(MStudyPage, _super);

	function MStudyPage() {
		_super.call(this);
		this.currentType = 0;
	}
	MStudyPage.prototype.configUI = function() {
		_super.prototype.configUI.call(this);

		var img;
		var tmp_mc;
		var tmp2_mc;

		img = lib.getResult("XBN");
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 277, 158, 53, 0, -4, -2],
				[0, 115, 165, 56, 0, 0, 0],
				[0, 330, 158, 53, 0, -4, -2]
			]
		}));
		tmp_mc.x = 357;
		tmp_mc.y = 8;
		this.XXA0 = tmp_mc;

		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 171, 158, 53, 0, -4, -2],
				[0, 59, 165, 56, 0, 0, 0],
				[0, 224, 158, 53, 0, -4, -2]
			]
		}));
		tmp_mc.x = 565;
		tmp_mc.y = 8;
		this.XXA1 = tmp_mc;

		tmp_mc = this.XXA0;
		tmp2_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 169, 59, 0, 0, 0]
			]
		}));
		tmp_mc.hitArea = tmp2_mc;

		tmp_mc = this.XXA1;
		tmp2_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 169, 59, 0, 0, 0]
			]
		}));
		tmp_mc.hitArea = tmp2_mc;
	};

	MStudyPage.prototype.show = function() {
		_super.prototype.show.call(this);
		this.btnClickHandler({
			target: this.XXA0
		});
	};

	MStudyPage.prototype.configContent = function() {
		_super.prototype.configContent.call(this);

		this.imgUrl = "images/xyx/xyx";

		this.content0_mc = this.getContentBy(this.imgUrl, 5, this.chot.width + 50, 0);
		this.content0_mc.move(68, 90);
		this.content0_mc.mouseEnabled = this.content0_mc.mouseChildren = false;
		this.content0_mc.setSize(this.chot.width, this.chot.height);

		this.content1_mc = this.getContentBy(this.imgUrl, 5, this.chot.width + 50, 5);
		this.content1_mc.move(68, 90);
		this.content1_mc.mouseEnabled = this.content1_mc.mouseChildren = false;
		this.content1_mc.setSize(this.chot.width, this.chot.height);

		this.content0_mc.on("changepage", this.onPageChange, this, true);
		this.content1_mc.on("changepage", this.onPageChange, this, true);
	};

	MStudyPage.prototype.addChilds = function() {
		_super.prototype.addChilds.call(this);
		this.addChild(this.hot_mc);
		this.addChild(this.XXA0);
		this.addChild(this.XXA1);
		this.on("mousedown", this.onMDownHandler, this);
		this.on("pressup", this.onMUpHandler, this);
	};

	MStudyPage.prototype.setSize = function(w, h) {
		_super.prototype.setSize.call(this, w, h);
		this.alignDirection(this.content0_mc, DirectionType.CENTER | DirectionType.MIDDLE);
		this.alignDirection(this.content1_mc, DirectionType.CENTER | DirectionType.MIDDLE);
		this.XXA0.alignTarget(this.title_mc, DirectionType.OFFSET_X);
		this.XXA1.alignTarget(this.title_mc, DirectionType.OFFSET_Y);
	};

	MStudyPage.prototype.onMDownHandler = function(e) {
		if (e.target == this.XXA0 || e.target == this.XXA1) {
			e.target.gotoAndStop(1);
		}
	};
	MStudyPage.prototype.onMUpHandler = function(e) {
		if (e.target == this.XXA0 || e.target == this.XXA1) {
			this.recheckTypeBtn();
		}
	};

	MStudyPage.prototype.onPageChange = function(e) {
		this.currentFrame = this.scroller.pageIndex;
		this.fixPNumMC();
		_super.prototype.recheckTypeBtn.call(this);
	};

	MStudyPage.prototype.recheckTypeBtn = function() {
		_super.prototype.recheckTypeBtn.call(this);
		if (this.currentType == 0) {
			this.XXA0.gotoAndStop(2);
			this.XXA1.gotoAndStop(0);
		} else if (this.currentType == 1) {
			this.XXA0.gotoAndStop(0);
			this.XXA1.gotoAndStop(2);
		}
	};

	MStudyPage.prototype.btnClickHandler = function(e) {
		_super.prototype.btnClickHandler.call(this, e);
		var et = e.target;
		var chot = this.chot;
		if (et == this.XXA0) {
			if (this.content_mc != this.content0_mc) {
				if (this.content_mc && this.content_mc.parent)
					this.removeChild(this.content_mc);
				this.content_mc = this.content0_mc;
				this.addChild(this.content_mc);
				this.scroller.setParamPage(this.content_mc, 5 * (chot.width + 50), 0, chot, this.hot_mc, chot.width + 50, 4, 1, 0);
				this.scroller.reset();
			}
			this.currentType = 0;
			this.minFrame = 0;
			this.maxFrame = 4;
			this.changeContentAt(this.minFrame);
			this.recheckTypeBtn();
		} else if (et == this.XXA1) {
			if (this.content_mc != this.content1_mc) {
				if (this.content_mc && this.content_mc.parent)
					this.removeChild(this.content_mc);
				this.content_mc = this.content1_mc;
				this.addChild(this.content_mc);
				this.scroller.setParamPage(this.content_mc, 5 * (chot.width + 50), 0, chot, this.hot_mc, chot.width + 50, 4, 1, 0);
				this.scroller.reset();
			}
			this.currentType = 1;
			this.minFrame = 0;
			this.maxFrame = 4;
			this.changeContentAt(this.minFrame);
			this.recheckTypeBtn();
		}
	};
	return MStudyPage;
})(StudyPage);
//# sourceMappingURL=MStudyPage.js.map