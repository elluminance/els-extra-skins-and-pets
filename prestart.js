// yes, this was absolutely necessary.
const fontIndex = sc.fontsystem.font.iconSets.length;
const rainbowText = new ig.Font("media/font/icon-el-rainbow.png", 16, ig.MultiFont.ICON_START);

sc.fontsystem.font.pushIconSet(rainbowText);

sc.fontsystem.font.setMapping({
    "el-rainbow-text": [fontIndex, 0]
})