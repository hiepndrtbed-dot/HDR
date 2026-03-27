function cameraRawOutdoor(temp, withDialog, vertical) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('Cr12'), 5);//contract
        a.putInteger(charIDToTypeID('Hi12'), -15);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 20);//shadow
        a.putInteger(charIDToTypeID('Temp'), temp);//temp
        a.putInteger(charIDToTypeID('Tint'), -1);
        a.putInteger(charIDToTypeID('Cl12'), 4);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 6);//Dehaze
        a.putInteger(charIDToTypeID('LNR '), 12);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail Noise Reduction
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract Noise Reduction

        // 🔥 Auto Vertical
        a.putInteger(charIDToTypeID('PerU'), vertical);
        // 0 = Off
        // 1 = Auto        // 🔥 tự động toàn diện (nên dùng)
        // 2 = Level       // chỉ cân bằng ngang
        // 3 = Vertical    // chỉ chỉnh dọc
        // 4 = Full        // mạnh hơn Auto
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}
cameraRawOutdoor(2,true,4)