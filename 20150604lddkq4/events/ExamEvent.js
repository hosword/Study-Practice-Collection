var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ExamEvent = (function (_super) {
    __extends(ExamEvent, _super);
    function ExamEvent(type, index, data, bubbles, cancelable) {
        if (typeof bubbles === "undefined") { bubbles = false; }
        if (typeof cancelable === "undefined") { cancelable = true; }
        _super.call(this, type, bubbles, cancelable);
        this.examIndex = index;
        this.examData = data;
    }
    ExamEvent.CHANGE_EXAM = "change_exam";
    return ExamEvent;
})(createjs.Event);
//# sourceMappingURL=ExamEvent.js.map
