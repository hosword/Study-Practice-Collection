var __extends = this.__extends || function(d, b) {
	for (var p in b)
		if (b.hasOwnProperty(p)) d[p] = b[p];

	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
var LookPage = (function(_super) {
	__extends(LookPage, _super);

	function LookPage() {
		_super.call(this);
	}
	LookPage.prototype.initExamData = function() {
		this.title_mc.gotoAndStop(1);
		this.examlist = [
			[LookExam0, "images/jt/jt_1_1.png"],
			[LookExam0, "images/jt/jt_1_2.png"]
		];
	};
	return LookPage;
})(SelecterPage);
//# sourceMappingURL=LookPage.js.map