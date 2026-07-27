(function main() {
    var expandSelection = null;
    //Kiem tra blending;
    $.evalFile(currentFolder + "/checkBlending.jsx");
    //Kiem tra levels;
    $.evalFile(currentFolder + "/setmidlevels.jsx");

    //kiem tra color;
    var jsonFile = new File(scriptFolder.fsName + "/Data" + nameJsonColor);
    // alert("Đang load màu từ file: " + jsonFile.fsName);
    var flagLoadColor = false;
    var localColorData;
    if (jsonFile.exists && fixColor == false) {
        jsonFile.open("r");
        localColorData = JSON.parse(jsonFile.read());
        jsonFile.close();
        selectRGB();
        var c = new SolidColor();
        c.hsb.hue = localColorData.hue;
        c.hsb.saturation = localColorData.saturation;
        c.hsb.brightness = localColorData.brightness;
        app.foregroundColor = c;
        flagLoadColor = true;
    } else {
        flagLoadColor = false;
    }

    //su ly chinh
    //kiem tra ton tai layer color chua, neu ton tai thi activate, neu chua thi tao moi
    if (flagLoadColor == true) {
        try {
            var nameLayerSolid = (Math.round(localColorData.hue) + " " + Math.round(localColorData.saturation) + " " + Math.round(localColorData.brightness));
        } catch (error) {
        }
        if (layerExists(nameLayerSolid)) {
            // alert("Layer color da ton tai, se load mau tu layer nay");
            selectLayer(nameLayerSolid);
            addSelectionToChannelName(nameChannel);
            belowLayer();
            selectMask();
            fillColor(255, 255, 255);
            doc.selection.deselect();
            return;
        }
    }

    // alert(middleLevelsValue)
    if (activeDocument.quickMaskMode == true) { activeDocument.quickMaskMode = false; }
    if (!hasSelection()) {
        alert("Chua co vung chon!");
    } else {
        try {
            doc.activeLayer = doc.artLayers["MERGE 1"];
        } catch (error) {
            doc.activeLayer = doc.backgroundLayer;
        } finally {
            $.evalFile(currentFolder + "/flagLayer.jsx");
            //kiem tra co luu vung chon truoc do chua.
            checkSelectionName(nameChannel) ? addSelectionToChannelName(nameChannel) : saveAlphaChnl(nameChannel);
            if (expandSelection != null) doc.selection.expand(expandSelection);
            makeLevelsAdjustment(middleLevelsValue);
            doc.activeLayer.name = nameLayer;
            setColorLayer("Bl  ");

            setFeatherMask(feather);
            blendingOptions(0, 0, 255, 255, 0, 0, destWhiteMin, 255);// blendingOptions(0, 47, 189, 255, 0, 36, 233, 255);
            doc.activeLayer.opacity = opacityValue;
            try {
                doc.activeLayer.move(doc.layerSets["GroupEdit"], ElementPlacement.INSIDE);
            } catch (error) {
                doc.activeLayer.move(doc.layers[0], ElementPlacement.PLACEBEFORE);
            } finally {
                selectRGB();
                // Tạo layer màu mới nếu chưa tồn tại
                doc.layerSets["GroupEdit"].artLayers[nameLayer].visible = false;
                createSolidWithColorPicker(flagLoadColor);
                doc.layerSets["GroupEdit"].artLayers[nameLayer].visible = true;
                doc.activeLayer.blendMode = BlendMode.COLORBLEND;
                doc.activeLayer.grouped = true;
                doc.activeLayer = doc.layerSets["GroupEdit"].artLayers[nameLayer];
                if (flagLoadColor == false && fixColor == false) {
                    //Save màu vao json
                    var fg = app.foregroundColor; // màu đã chọn
                    var colorData = {
                        hue: Math.round(fg.hsb.hue),
                        saturation: Math.round(fg.hsb.saturation),
                        brightness: Math.round(fg.hsb.brightness)
                    };

                    //save color for swatches
                    addSwatch(Math.round(fg.hsb.hue) + " " + Math.round(fg.hsb.saturation) + " " + Math.round(fg.hsb.brightness), colorData.hue, colorData.saturation, colorData.brightness);
                    jsonFile.open("w");
                    jsonFile.write(JSON.stringify(colorData));
                    jsonFile.close();
                }
            }
        }
    }
})();

function randomOneToTen() {
    return Math.floor(Math.random() * 10) + 1;
}

function loadSelectionByMask(id) {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(charIDToTypeID('Chnl'), stringIDToTypeID("selection"));
    desc1.putReference(charIDToTypeID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(charIDToTypeID('Chnl'), charIDToTypeID('Chnl'), charIDToTypeID('Msk '));
    ref2.putIdentifier(charIDToTypeID('Lyr '), id);
    desc1.putReference(charIDToTypeID('T   '), ref2);
    executeAction(charIDToTypeID('setd'), desc1, DialogModes.NO);
};
// Helpers
function cTID(s) { return app.charIDToTypeID(s); }
function sTID(s) { return app.stringIDToTypeID(s); }


//Group layer
function setFeatherMask(userMaskFeather) {
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };

    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };

    var descriptor = new ActionDescriptor();
    var descriptor2 = new ActionDescriptor();
    var reference = new ActionReference();

    reference.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(c2t("null"), reference);
    descriptor2.putUnitDouble(s2t("userMaskFeather"), s2t("pixelsUnit"), userMaskFeather);
    descriptor.putObject(s2t("to"), s2t("layer"), descriptor2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}

function hasSelection() {
    var ref = new ActionReference();
    ref.putProperty(sTID("property"), sTID("selection"));
    ref.putEnumerated(sTID("document"), sTID("ordinal"), sTID("targetEnum"));
    var desc = executeActionGet(ref);
    return desc.count > 0;
}

function fillColor(red, green, blue) {
    var myColor = new SolidColor()
    myColor.rgb.red = red // 0 - 255
    myColor.rgb.green = green
    myColor.rgb.blue = blue
    activeDocument.selection.fill(myColor)
}
function hasChannel(name) {
    var chs = app.activeDocument.channels;
    for (var i = 0; i < chs.length; i++) {
        if (chs[i].name === name) return true;
    }
    return false;
}

function saveAlphaChnl(name) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putProperty(cTID("Chnl"), cTID("fsel"));
    desc.putReference(cTID("null"), ref);
    desc.putString(cTID("Nm  "), name);
    executeAction(cTID("Dplc"), desc, DialogModes.NO);
    return activeDocument.channels.getByName(name);
}

function addSelectionToChannelName(channelName) {
    var ch = doc.channels.getByName(channelName);
    doc.selection.store(ch, SelectionType.EXTEND);
}

function layerViaCopy(nameLayer) {
    executeAction(cTID("CpTL"), undefined, DialogModes.NO);
    activeDocument.activeLayer.name = nameLayer;
}

function blendingOptions(srcBlackMin, srcBlackMax, srcWhiteMin, srcWhiteMax,
    destBlackMin, destBlackMax, destWhiteMin, Dstt) {

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var list = new ActionList();
    var ref = new ActionReference();
    var ref2 = new ActionReference();

    ref.putEnumerated(sTID("layer"), sTID("ordinal"), sTID("targetEnum"));
    d.putReference(cTID("null"), ref);

    ref2.putEnumerated(sTID("channel"), sTID("channel"), sTID("gray"));
    d3.putReference(sTID("channel"), ref2);

    d3.putInteger(sTID("srcBlackMin"), srcBlackMin);
    d3.putInteger(sTID("srcBlackMax"), srcBlackMax);
    d3.putInteger(sTID("srcWhiteMin"), srcWhiteMin);
    d3.putInteger(sTID("srcWhiteMax"), srcWhiteMax);
    d3.putInteger(sTID("destBlackMin"), destBlackMin);
    d3.putInteger(sTID("destBlackMax"), destBlackMax);
    d3.putInteger(sTID("destWhiteMin"), destWhiteMin);
    d3.putInteger(cTID("Dstt"), Dstt);

    list.putObject(sTID("blendRange"), d3);
    d2.putList(sTID("blendRange"), list);
    d.putObject(sTID("to"), sTID("layer"), d2);

    executeAction(sTID("set"), d, DialogModes.NO);
}

function setColorLayer(color) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    desc.putReference(cTID("null"), ref);

    var descClr = new ActionDescriptor();
    descClr.putEnumerated(cTID("Clr "), cTID("Clr "), cTID(color));
    desc.putObject(cTID("T   "), cTID("Lyr "), descClr);

    executeAction(cTID("setd"), desc, DialogModes.NO);
}

function makeLevelsAdjustment(middle) {
    var idMk = charIDToTypeID("Mk  ");
    var desc1 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1 = new ActionReference();
    var idAdjL = charIDToTypeID("AdjL");
    ref1.putClass(idAdjL);
    desc1.putReference(idnull, ref1);

    var idUsng = charIDToTypeID("Usng");
    var desc2 = new ActionDescriptor();

    var idType = charIDToTypeID("Type");
    var desc3 = new ActionDescriptor();

    // Tạo cấu hình Levels
    var idAdjs = charIDToTypeID("Adjs");
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();

    // Channel RGB
    var idChnl = charIDToTypeID("Chnl");
    var ref2 = new ActionReference();
    var idChnlRGB = charIDToTypeID("Chnl");
    var idRGB = charIDToTypeID("RGB ");
    ref2.putEnumerated(idChnlRGB, idChnlRGB, idRGB);
    desc4.putReference(idChnl, ref2);

    // Input levels: black, white
    var idInpt = charIDToTypeID("Inpt");
    var list2 = new ActionList();
    list2.putInteger(0);    // black input
    list2.putInteger(255);  // white input
    desc4.putList(idInpt, list2);

    // Gamma (midtone)
    var idGmm = charIDToTypeID("Gmm ");
    desc4.putDouble(idGmm, middle); // midtone = 1.2

    // Output levels: black, white
    var idOtpt = charIDToTypeID("Otpt");
    var list3 = new ActionList();
    list3.putInteger(0);    // black output
    list3.putInteger(255);  // white output
    desc4.putList(idOtpt, list3);

    list1.putObject(charIDToTypeID("LvlA"), desc4);
    desc3.putList(idAdjs, list1);

    desc2.putObject(idType, charIDToTypeID("Lvls"), desc3);
    desc1.putObject(idUsng, idAdjL, desc2);

    executeAction(idMk, desc1, DialogModes.NO);
}
// ========== MAIN ==========


function selectRGB() {
    // activeDocument.activeLayer = lyr;
    var idslct = charIDToTypeID("slct");
    var desc219 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref138 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idRGB = charIDToTypeID("RGB ");
    ref138.putEnumerated(idChnl, idChnl, idRGB);
    desc219.putReference(idnull, ref138);
    var idMkVs = charIDToTypeID("MkVs");
    desc219.putBoolean(idMkVs, false);
    executeAction(idslct, desc219, DialogModes.NO);
}
