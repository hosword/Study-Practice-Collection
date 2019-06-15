var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ProjectEvent = (function (_super) {
    __extends(ProjectEvent, _super);
    function ProjectEvent(type, pageinstance, bubbles, cancelable) {
        _super.call(this, type, bubbles, cancelable);
        this.pageinstance = pageinstance;
    }
    ProjectEvent.Exit_Project = "exit_project";
    ProjectEvent.LOOK_Project = "look_project";
    ProjectEvent.DO_Project = "do_project";
    ProjectEvent.STUDY_Project = "study_project";
    ProjectEvent.ANIMATION_Project = "animation_project";
    ProjectEvent.HELP_Project = "help_project";
    ProjectEvent.HOME_Project = "home_project";
    ProjectEvent.BACK_Project = "back_project";

    ProjectEvent.EXAM_Project = "exam_project";
    return ProjectEvent;
})(createjs.Event);
//# sourceMappingURL=ProjectEvent.js.map
