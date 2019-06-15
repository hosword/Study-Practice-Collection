var __extends = this.__extends || function(d, b) {
	for (var p in b)
		if (b.hasOwnProperty(p)) d[p] = b[p];

	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
var LookExam0 = (function(_super) {
	__extends(LookExam0, _super);

	function LookExam0() {
		_super.call(this);

		var img;
		var tmp;
		var tmp_mc;
		var kyk1_btn;

		//kyk_start

		img = lib.getResult("XZT"); //小纸条
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 127, 380, 0, -245.35, 368.45],
				[0, 0, 127, 380, 0, -245.35, 368.45],
				[127, 0, 123, 376, 0, -253.35, 368.45],
				[127, 0, 123, 376, 0, -253.35, 368.45],
				[250, 0, 122, 369, 0, -256.35, 368.45],
				[250, 0, 122, 369, 0, -256.35, 368.45],
				[372, 0, 126, 370, 0, -238.35, 368.45],
				[372, 0, 126, 370, 0, -238.35, 368.45]
			],
			animations: {
				zhuandong: [0, 7],
				stop: 0
			}
		}));
		tmp_mc.x = 10;
		tmp_mc.y = 220;


		tmp_mc.mouseEnabled = true;
		tmp_mc.rotation = 0;
		this.xzt_mc = tmp_mc;
		//		this.xzt_mc.visible=true;


		//		this.xzt_mc.visible = true;
		//this.xzt_mc.play();


		img = lib.getResult("LZ"); //蜡烛身
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 22, 85, 0, 0, 0]
			]
		}));
		//tmp_mc.x = 500;
		tmp_mc.x = this.getBounds().width * 0.45;
		tmp_mc.y = 350;
		tmp_mc.mouseEnabled = false;
		tmp_mc.scaleX = 1.7;
		tmp_mc.scaleY = 2;


		this.lz_mc = tmp_mc;



		img = lib.getResult("XXJL"); //现象结论
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 126, 75, 0, 13.55, -18.3],
				[0, 0, 126, 75, 0, 13.55, -18.3],
				[0, 75, 137, 82, 0, 19.55, -12.3]
			],
			animations: {
				qian: [0, 1],
				hou: 2
			}
		}));
		tmp_mc.x = 850;
		tmp_mc.y = 180;
		this.xxjl_btn = tmp_mc;




		img = lib.getResult("LZHY"); //蜡烛火焰
		tmp_mc = new createjs.Sprite(new createjs.SpriteSheet({
			images: [img],
			frames: [
				[0, 0, 18, 42, 0, 8.65, 23.9],
				[18, 0, 18, 41, 0, 8.65, 23.9],
				[36, 0, 18, 41, 0, 8.65, 23.9],
				[54, 0, 18, 42, 0, 8.65, 24.9],
				[72, 0, 18, 42, 0, 8.65, 24.9],
				[90, 0, 18, 42, 0, 8.65, 24.9],
				[108, 0, 18, 42, 0, 8.65, 24.9],
				[126, 0, 18, 42, 0, 8.65, 24.9],
				[144, 0, 18, 42, 0, 8.65, 24.9],
				[162, 0, 18, 42, 0, 8.65, 24.9],
				[180, 0, 18, 42, 0, 8.65, 24.9],
				[198, 0, 18, 43, 0, 8.65, 25.9],
				[216, 0, 18, 43, 0, 8.65, 25.9],
				[234, 0, 18, 43, 0, 8.65, 25.9],
				[0, 43, 18, 43, 0, 8.65, 25.9],
				[18, 43, 18, 43, 0, 8.65, 25.9],
				[36, 43, 18, 43, 0, 8.65, 25.9],
				[54, 43, 18, 43, 0, 8.65, 25.9],
				[72, 43, 18, 44, 0, 8.65, 26.9],
				[90, 43, 18, 44, 0, 8.65, 26.9],
				[108, 43, 18, 45, 0, 8.65, 26.9],
				[90, 43, 18, 44, 0, 8.65, 26.9],
				[126, 43, 18, 44, 0, 8.65, 26.9],
				[144, 43, 18, 43, 0, 8.65, 25.9],
				[162, 43, 18, 43, 0, 8.65, 25.9],
				[180, 43, 18, 43, 0, 8.65, 25.9],
				[198, 43, 18, 43, 0, 8.65, 25.9],
				[216, 43, 18, 43, 0, 8.65, 25.9],
				[234, 43, 18, 43, 0, 8.65, 25.9],
				[0, 88, 18, 43, 0, 8.65, 25.9],
				[18, 88, 18, 42, 0, 8.65, 24.9],
				[36, 88, 18, 42, 0, 8.65, 24.9],
				[54, 88, 18, 42, 0, 8.65, 24.9],
				[72, 88, 18, 42, 0, 8.65, 24.9],
				[90, 88, 18, 42, 0, 8.65, 24.9],
				[108, 88, 18, 42, 0, 8.65, 24.9],
				[126, 88, 18, 42, 0, 8.65, 24.9],
				[144, 88, 18, 41, 0, 8.65, 23.9],
				[162, 88, 18, 41, 0, 8.65, 23.9],
				[180, 88, 18, 42, 0, 8.65, 23.9]
			]
		}));
		//tmp_mc.x = 517;
		tmp_mc.x = this.getBounds().width * 0.45 + 16;
		tmp_mc.y = 320;
		tmp_mc.scaleX = 1.7;
		tmp_mc.scaleY = 2;

		this.lzhy_mc = tmp_mc;
		this.lzhy_mc.visible = true;
		this.lzhy_mc.play();




		// kyk_sy1 start
		this.content_mc = new ToolContent();
		tmp = new createjs.Container();
		tmp.x = 31;
		tmp.y = 101;
		this.content = tmp;
		this.addChild(this.content);

		this.content.addChild(this.xzt_mc);
		this.content.addChild(this.lz_mc);
		this.content.addChild(this.xxjl_btn);
		this.content.addChild(this.lzhy_mc);

		this.initChildsRect();

		this.xzt_mc.on("pressmove", this.onXZTMove, this);

		// kyk_sy1 end
		this.addLEEvents();
	}
	LookExam0.prototype.onXZTMove = function(e) {
		var item = this.xzt_mc;
		var p = item.parent.globalToLocal(e.stageX, e.stageY);
		if (e.stageX > 240 && e.stageX < 880) {
			item.move(p.x - 300, 220);
			if (e.stageX > this.getBounds().width * 0.458 && e.stageX < this.getBounds().width * 0.488) {
				item.gotoAndPlay("zhuandong");
			} else {
				item.gotoAndPlay("stop");
			}
		}


	};
	LookExam0.prototype.reset = function() {};



	LookExam0.prototype.setSize = function(w, h) {
		_super.prototype.setSize.call(this, w, h);
	};

	LookExam0.prototype.addLEEvents = function() {
		this.on("click", this.clickHandler, this, true);
//		this.on("over",this.overHandler,this,true);
	};
	var mark = true; //true wei hong 
//	LookExam0.prototype.overHandler = function(e) {
//		var etr = e.target;
//
//		if (mark == true) {
//			ert.MOUSEOVER();
//			mark = false;
//		} else {
//			this.xxjl_btn.gotoAndStop(1);
//			mark = true;
//		}
//	};
	var mark = true;
	LookExam0.prototype.clickHandler = function(e) {
		var etr = e.target;

		if (mark == true) {
			this.xxjl_btn.gotoAndStop(2);
			mark = false;
		} else {
			this.xxjl_btn.gotoAndStop(1);
			mark = true;
		}
	};


	return LookExam0;
})(BaseExam);
//# sourceMappingURL=LookExam0.js.map