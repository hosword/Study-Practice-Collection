var DirectionType = (function () {
    function DirectionType() {
    }
    DirectionType.MIDDLE = 1;
    DirectionType.LEFT = 2;
    DirectionType.RIGHT = 4;
    DirectionType.TOP = 8;
    DirectionType.BOTTOM = 16;
    DirectionType.CENTER = 32;
    DirectionType.MIDDLE = 64;
    DirectionType.HORIZONTAL = 128;
    DirectionType.VERTICAL = 256;

    DirectionType.OFFSET_X = 512;
    DirectionType.OFFSET_Y = 1024;

    DirectionType.FONT = 2048;
    DirectionType.BACK = 4096;
    DirectionType.COMBINE = 8192;
    DirectionType.SEPARATE = 16384;
    return DirectionType;
})();
//# sourceMappingURL=DirectionType.js.map
