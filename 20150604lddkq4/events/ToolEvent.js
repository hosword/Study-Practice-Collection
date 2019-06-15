var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ToolEvent = (function (_super) {
    __extends(ToolEvent, _super);
    function ToolEvent(type, _toolnum, _toolname, bubbles, cancelable) {
        _super.call(this, type, bubbles, cancelable);
        this.toolname = _toolname;
        this.toolnum = _toolnum;
    }
    ToolEvent.TOOL_CLOSE = "tool_close";
    ToolEvent.CLICK_TOOL = "click_tool";
    ToolEvent.TOOL_BOX = "tool_box";
    return ToolEvent;
})(createjs.Event);
//# sourceMappingURL=ToolEvent.js.map
