/// <reference path="D:\\DefinitelyTyped-master\\createjs\\createjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Project = (function (_super) {
    __extends(Project, _super);
    function Project() {
        _super.call(this);

        this.addChild(Project.contentLayout);
        this.addChild(Project.topLayout);

        this.initPageData();

        this.on(ProjectEvent.Exit_Project, this.onProHandler, this);
        this.on(ProjectEvent.ANIMATION_Project, this.onProHandler, this);
        this.on(ProjectEvent.LOOK_Project, this.onProHandler, this);
        this.on(ProjectEvent.DO_Project, this.onProHandler, this);
        this.on(ProjectEvent.STUDY_Project, this.onProHandler, this);
        this.on(ProjectEvent.HELP_Project, this.onProHandler, this);
        this.on(ProjectEvent.HOME_Project, this.onProHandler, this);
        this.on(ProjectEvent.BACK_Project, this.onProHandler, this);
        this.on(ProjectEvent.EXAM_Project, this.onExamProHandler, this);
    }
    Project.prototype.initPageData = function () {
        this.pagelist = [
            new StartPage(), new LookPage(), new DoPage(),
            new MStudyPage(),
            new InstructionPage()];
        //this.pagelist = [new DoPage()];
    };
    Project.prototype.onExamProHandler = function (e) {
        e.stopImmediatePropagation();
        if (e.type == ProjectEvent.EXAM_Project) {
            this.changePageByType(e.pageinstance);
        }
    };

    Project.prototype.onProHandler = function (e) {
        e.stopImmediatePropagation();
        if (e.type == ProjectEvent.Exit_Project) {
            if (!this.quit_mc) {
                this.quit_mc = new QuitApp();
                this.quit_mc.on("ok", this.exitProHandler, this);
            }
            this.quit_mc.show();
            //if (navigator.notification) {
            //    navigator.notification.confirm('按确定退出程序!', this.exitProHandler, '确定要退出程序吗?', '确定,取消');
            //}
        } else if (e.type == ProjectEvent.ANIMATION_Project) {
        } else if (e.type == ProjectEvent.HELP_Project) {
            this.changePageByType(this.pagelist[4]);
        } else if (e.type == ProjectEvent.HOME_Project) {
            this.changePageByType(this.pagelist[0]);
        } else if (e.type == ProjectEvent.LOOK_Project) {
            this.changePageByType(this.pagelist[1]);
        } else if (e.type == ProjectEvent.DO_Project) {
            this.changePageByType(this.pagelist[2]);
        } else if (e.type == ProjectEvent.STUDY_Project) {
            this.changePageByType(this.pagelist[3]);
        } else if (e.type == ProjectEvent.BACK_Project) {
            this.changePageByType(this.lastlastPage);
        }
    };

    Project.prototype.exitProHandler = function (e) {
        if (navigator && navigator.app) {
            navigator.app.exitApp();
        }
    };

    Project.prototype.setSize = function (w, h) {
        Project.contentLayout.setSize(w, h);
        Project.topLayout.setSize(w, h);
        this._width = w;
        this._height = h;
        var lp = this.lastPage;
        if (lp) {
            lp.setSize(w, h);
        }
    };

    Project.prototype.start = function () {
        this.changePageByType(this.pagelist[0]);
    };

    Project.prototype.stop = function () {
    };

    Project.prototype.getOriInnserSize = function () {
        return new createjs.Rectangle(0, 0, 1136, 640);
    };

    Project.prototype.changePageByType = function (npage) {
        if (npage) {
            var lp = this.lastPage;
            if (lp != npage) {
                if (lp) {
                    lp.close();
                }

                //this.dispatchEvent(new ProjectPageEvent(ProjectPageEvent.ClOSEALLTOPWINDOW, ""));
                Project.contentLayout.addChildAt(npage, 0);
                npage.show();
                npage.setSize(this._width, this._height);
                this.lastlastPage = this.lastPage;
                this.lastPage = npage;
            }
        }
    };
    Project.topLayout = new createjs.Container();
    Project.contentLayout = new createjs.Container();
    return Project;
})(createjs.Container);
//# sourceMappingURL=Project.js.map
