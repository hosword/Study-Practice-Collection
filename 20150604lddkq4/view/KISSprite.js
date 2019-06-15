var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var KISSprite = (function (_super) {
    __extends(KISSprite, _super);
    function KISSprite(spriteSheet, frameOrAnimation, rect) {
        _super.call(this, spriteSheet, frameOrAnimation);
        this.toString = function () {
            return "[KISSprite (name=" + this.name + ")]";
        };
        this.scale9Grid = rect;
    }
    KISSprite.prototype.draw = function (ctx, ignoreCache) {
        if (this.DisplayObject_draw(ctx, ignoreCache)) {
            return true;
        }
        this._normalizeFrame();
        var o = this.spriteSheet.getFrame(this.currentFrame | 0);
        if (!o) {
            return false;
        }
        var rect = o.rect;
        if (rect.width && rect.height) {
            var img = o.image;

            var grid = this.scale9Grid;

            var oregX = o.regX;
            var oregY = o.regY;

            if (grid) {
                var centerX = grid.width;
                var centerY = grid.height;
                var left = this.scale9Grid.x;
                var top = this.scale9Grid.y;
                var right = rect.width - centerX - left;
                var bottom = rect.height - centerY - top;
                var scaledCenterX = this._width - left - right;
                var scaledCenterY = this._height - top - bottom;

                ctx.drawImage(img, rect.x, rect.y, left, top, -oregX, -oregY, left, top);
                ctx.drawImage(img, rect.x + left, rect.y, centerX, top, -oregX + left, -oregY, scaledCenterX, top);
                ctx.drawImage(img, rect.x + left + centerX, rect.y, right, top, -oregX + left + scaledCenterX, -oregY, right, top);

                ctx.drawImage(img, rect.x, rect.y + top, left, centerY, -oregX, -oregY + top, left, scaledCenterY);
                ctx.drawImage(img, rect.x + left, rect.y + top, centerX, centerY, -oregX + left, -oregY + top, scaledCenterX, scaledCenterY);
                ctx.drawImage(img, rect.x + left + centerX, rect.y + top, right, centerY, -oregX + left + scaledCenterX, -oregY + top, right, scaledCenterY);

                ctx.drawImage(img, rect.x, top + centerY, rect.y + left, bottom, -oregX, -oregY + top + scaledCenterY, left, bottom);
                ctx.drawImage(img, rect.x + left, rect.y + top + centerY, centerX, bottom, -oregX + left, -oregY + top + scaledCenterY, scaledCenterX, bottom);
                ctx.drawImage(img, rect.x + left + centerX, rect.y + top + centerY, right, bottom, -oregX + left + scaledCenterX, -oregY + top + scaledCenterY, right, bottom);
            } else {
                ctx.drawImage(img, rect.x, rect.y, rect.width, rect.height, -oregX, -oregY, rect.width, rect.height);
            }
        }
        return true;
    };
    return KISSprite;
})(createjs.Sprite);
//# sourceMappingURL=KISSprite.js.map
