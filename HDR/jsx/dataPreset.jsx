
function processPreset(valuePreset, withDialog) {
    switch (parseInt(valuePreset)) {
        case 0:
            // alert("Preset Indoor");
            cameraRawIndor(withDialog);
            break;
        case 1:
            // alert("Preset Indoor Trắng xám");
            cameraRawIndorWhiteGray(withDialog);
            break;
        case 2:
            // alert("Preset Indoor BWPD");
            cameraRawIndorBWPD(withDialog);
            break;
        case 3:
            // alert("Preset Outdoor");
            cameraRawOutdoor(withDialog);
            break;
        case 4:
            // alert("Preset Outdoor BWPD");
            cameraRawOutdoorBWPD(withDialog);
            break;
        case 5:
            // alert("Preset Outdoor MLP");
            cameraRawOutdoorMLP(withDialog);
            break;
        case 6:
            // alert("Preset Indoor MLP");
            cameraRawIndorMLP(withDialog);
            break;
        case 7:
            // alert("Preset Indoor MLP trắng xám");
            cameraRawIndorMLPWhiteGray(withDialog);
            break;
        default:
            break;
    }
}

// Preset Indoor
function cameraRawIndor(withDialog) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 5);//shadow
        a.putInteger(charIDToTypeID('CrTx'), 15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze
        a.putInteger(charIDToTypeID('Shrp'), 0);//Sharpening
        a.putDouble(charIDToTypeID('ShpR'), 0);//Radius
        a.putInteger(charIDToTypeID('ShpD'), 0);//Detail
        a.putInteger(charIDToTypeID('ShpM'), 0);//Masking
        a.putInteger(charIDToTypeID('LNR '), 0);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 0);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }

}

// Preset Indoor trắng xám
function cameraRawIndorWhiteGray(withDialog) {
    alert("Preset Indoor trắng xám - check VERTICAL && CAMERA");
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 5);//shadow
        a.putInteger(charIDToTypeID('CrTx'), 15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze
        a.putInteger(charIDToTypeID('Shrp'), 0);//Sharpening
        a.putDouble(charIDToTypeID('ShpR'), 0);//Radius
        a.putInteger(charIDToTypeID('ShpD'), 0);//Detail
        a.putInteger(charIDToTypeID('ShpM'), 0);//Masking
        a.putInteger(charIDToTypeID('LNR '), 0);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 0);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Indoor BWPD
function cameraRawIndorBWPD(withDialog) {
    alert("Preset Indoor BWPD - check VERTICAL && CAMERA");
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Tint'), 0);//tint
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 0);//shadow
        a.putInteger(charIDToTypeID('Wh12'), 0);//white 
        a.putInteger(charIDToTypeID('CrTx'), 0);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze
        a.putInteger(charIDToTypeID('LNR '), 0);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 0);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}
// Preset Indoor MLP
function cameraRawIndorMLP(withDialog) {
    alert("Preset Indoor MLP - check VERTICAL && CAMERA");
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom

        a.putDouble(charIDToTypeID('Ex12'), 0.05);//Exposure
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 5);//shadow
        a.putInteger(charIDToTypeID('Wh12'), 0);//white 

        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Tint'), 0);//tint
        a.putInteger(charIDToTypeID('Vibr'), -5);//Vibrance
        a.putInteger(charIDToTypeID('Strt'), -5);//Saturation

        a.putInteger(charIDToTypeID('CrTx'), 15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze

        // Sharpening
        a.putInteger(charIDToTypeID('Shrp'), 50);//texture
        a.putInteger(charIDToTypeID('ShpR'), 1);//Clarity
        a.putInteger(charIDToTypeID('ShpD'), 25);//Dehaze
        a.putInteger(charIDToTypeID('ShpM'), 7);//Dehaze


        a.putInteger(charIDToTypeID('LNR '), 24);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 8);//Contract

        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}
// Preset Indoor MLP tran
function cameraRawIndorMLPWhiteGray(withDialog) {
    alert("Preset Indoor MLP trắng xám - check VERTICAL && CAMERA");
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom

        a.putDouble(charIDToTypeID('Ex12'), 0.05);//Exposure
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 5);//shadow
        a.putInteger(charIDToTypeID('Wh12'), 0);//white 

        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Tint'), 0);//tint
        a.putInteger(charIDToTypeID('Vibr'), -5);//Vibrance
        a.putInteger(charIDToTypeID('Strt'), -5);//Saturation

        a.putInteger(charIDToTypeID('CrTx'), 15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze

        // Sharpening
        a.putInteger(charIDToTypeID('Shrp'), 50);//texture
        a.putInteger(charIDToTypeID('ShpR'), 1);//Clarity
        a.putInteger(charIDToTypeID('ShpD'), 25);//Dehaze
        a.putInteger(charIDToTypeID('ShpM'), 7);//Dehaze


        a.putInteger(charIDToTypeID('LNR '), 24);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 8);//Contract

        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Outdoor BWPD
function cameraRawOutdoorBWPD(withDialog) {
    alert("Preset Outdoor BWPD - check VERTICAL && CAMERA");
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Tint'), -1);//tint
        a.putInteger(charIDToTypeID('Cr12'), 5);//contract
        a.putInteger(charIDToTypeID('Hi12'), -17);//highlight
        a.putInteger(charIDToTypeID('Sh12'), +15);//shadow
        a.putInteger(charIDToTypeID('CrTx'), -15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 2);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 2);//Dehaze
        a.putInteger(charIDToTypeID('LNR '), 12);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract

        a.putInteger(charIDToTypeID('PerU'), 4);//vertical


        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Outdoor BWPD
function cameraRawOutdoorMLP(withDialog) {
    alert("Preset Outdoor MLP - check VERTICAL && CAMERA");
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Tint'), -1);//tint

        a.putInteger(charIDToTypeID('Vibr'), -5);//Vibrance
        a.putInteger(charIDToTypeID('Strt'), -5);//Saturation

        a.putInteger(charIDToTypeID('Cr12'), 5);//contract
        a.putInteger(charIDToTypeID('Hi12'), -15);//highlight
        a.putInteger(charIDToTypeID('Sh12'), +20);//shadow

        a.putInteger(charIDToTypeID('CrTx'), 0);//texture
        a.putInteger(charIDToTypeID('Cl12'), 4);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 6);//Dehaze

        a.putInteger(charIDToTypeID('LNR '), 12);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract

        a.putInteger(charIDToTypeID('PerU'), 4);//vertical

        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Outdoor
function cameraRawOutdoor(withDialog) {
    alert("Preset Outdoor - check VERTICAL && CAMERA");
    var a = new ActionDescriptor();
    a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
    a.putInteger(charIDToTypeID('Cr12'), 5);//contract
    a.putInteger(charIDToTypeID('Hi12'), -15);//highlight
    a.putInteger(charIDToTypeID('Sh12'), 20);//shadow
    a.putInteger(charIDToTypeID('Temp'), 0);//temp
    a.putInteger(charIDToTypeID('Tint'), -1);
    a.putInteger(charIDToTypeID('Cl12'), 4);//Clarity
    a.putInteger(charIDToTypeID('Dhze'), 6);//Dehaze
    a.putInteger(charIDToTypeID('LNR '), 12);//Noise Reduction
    a.putInteger(charIDToTypeID('LNRD'), 50);//Detail Noise Reduction
    a.putInteger(charIDToTypeID('LNRC'), 0);//Contract Noise Reduction

    a.putInteger(charIDToTypeID('PerU'), 4);//vertical

    executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
}

//Color -100 -> 100
// HUE
// a.putInteger(stringIDToTypeID('hueR'), 0);  // Reds
// a.putInteger(stringIDToTypeID('hueO'), 0);  // Oranges
// a.putInteger(stringIDToTypeID('hueY'), 0);  // Yellows
// a.putInteger(stringIDToTypeID('hueG'), 0);  // Greens
// a.putInteger(stringIDToTypeID('hueA'), 0);  // Aquas
// a.putInteger(stringIDToTypeID('hueB'), 0);  // Blues
// a.putInteger(stringIDToTypeID('hueP'), 0);  // Purples
// a.putInteger(stringIDToTypeID('hueM'), 0);  // Magentas

// SATURATION
// a.putInteger(stringIDToTypeID('satR'), 0);  // Reds
// a.putInteger(stringIDToTypeID('satO'), -23); // Oranges
// a.putInteger(stringIDToTypeID('satY'), 0);  // Yellows
// a.putInteger(stringIDToTypeID('satG'), 0);  // Greens
// a.putInteger(stringIDToTypeID('satA'), 0);  // Aquas
// a.putInteger(stringIDToTypeID('satB'), -21); // Blues
// a.putInteger(stringIDToTypeID('satP'), 0);  // Purples
// a.putInteger(stringIDToTypeID('satM'), 0);  // Magentas

// LUMINANCE
// a.putInteger(stringIDToTypeID('lumR'), 0);  // Reds
// a.putInteger(stringIDToTypeID('lumO'), 0);  // Oranges
// a.putInteger(stringIDToTypeID('lumY'), 0);  // Yellows
// a.putInteger(stringIDToTypeID('lumG'), 0);  // Greens
// a.putInteger(stringIDToTypeID('lumA'), 0);  // Aquas
// a.putInteger(stringIDToTypeID('lumB'), 0);  // Blues
// a.putInteger(stringIDToTypeID('lumP'), 0);  // Purples
// a.putInteger(stringIDToTypeID('lumM'), 0);  // Magentas


// #target photoshop