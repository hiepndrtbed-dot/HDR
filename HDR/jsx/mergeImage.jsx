var gaussianBlur = 50;
try {
    makeHistory("Save Struct");
} catch (error) {
}
// checkSnapshot()
//neu ton tai 4 composer

var lengthArtLayers = doc.artLayers.length;
for (var i = 0; i < lengthArtLayers - 1; i++) {
    doc.activeLayer = doc.artLayers[0];
    loadSelectionChannel();
    addMask();
    doc.activeLayer.applyGaussianBlur(gaussianBlur);
    if (i != lengthArtLayers - 2) {
        makeGroup("Darken " + String(lengthArtLayers - i - 2));
        addMaskBlack();
    }
}

if (lengthArtLayers != 2) {
    doc.activeLayer = doc.layers["Darken 1"];
} else {
    doc.activeLayer = doc.artLayers[0];
}
selecTool("paintbrushTool");
resetBackground(false);
selectMask();
loadSelectionChannelName("Bl  " );
doc.selection.feather(30);

function addMaskWhite() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Msk "));
    d.putReference(charIDToTypeID("At  "), r);
    d.putClass(charIDToTypeID("Nw  "), charIDToTypeID("Chnl"));
    d.putEnumerated(charIDToTypeID("Usng"), charIDToTypeID("UsrM"), charIDToTypeID("RvlA")); // RvlA=Reveal All
    executeAction(charIDToTypeID("Mk  "), d, DialogModes.NO);

}

function selectMaskLayerName(nameLayer) {
    var idslct = charIDToTypeID("slct");
    var desc1737 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref454 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref454.putName(idLyr, nameLayer);
    desc1737.putReference(idnull, ref454);
    var idMkVs = charIDToTypeID("MkVs");
    desc1737.putBoolean(idMkVs, false);
    executeAction(idslct, desc1737, DialogModes.NO);
}
function deleteSnapShot(name) {
    var desc381 = new ActionDescriptor();
    var ref21 = new ActionReference();
    ref21.putName(charIDToTypeID("SnpS"), name);
    desc381.putReference(charIDToTypeID("null"), ref21);
    executeAction(charIDToTypeID("Dlt "), desc381, DialogModes.NO);
};

function loadSelectionChannel() {
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };

    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };

    var descriptor = new ActionDescriptor();
    var reference = new ActionReference();
    var reference2 = new ActionReference();

    reference.putProperty(s2t("channel"), s2t("selection"));
    descriptor.putReference(c2t("null"), reference);
    reference2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
    descriptor.putReference(s2t("to"), reference2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}

function addMaskBlack() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Msk "));
    d.putReference(charIDToTypeID("At  "), r);
    d.putClass(charIDToTypeID("Nw  "), charIDToTypeID("Chnl"));
    d.putEnumerated(charIDToTypeID("Usng"), charIDToTypeID("UsrM"), charIDToTypeID("HdAl")); // HdAl = Hide All (đen)
    executeAction(charIDToTypeID("Mk  "), d, DialogModes.NO);
}

function showLayerMaskView() {
    var cTID = function (s) { return app.charIDToTypeID(s); };
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    // Chọn channel hiện tại (mask nếu đang active)
    ref.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc.putReference(cTID('null'), ref);
    // Bật hiển thị channel (giống Alt + click)
    desc.putBoolean(cTID('MkVs'), true);
    // Thực thi lệnh chọn channel và hiển thị
    executeAction(cTID('slct'), desc, DialogModes.NO);
}

function selectMask() {
    var idslct = charIDToTypeID("slct");
    var desc444 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref248 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idMsk = charIDToTypeID("Msk ");
    ref248.putEnumerated(idChnl, idChnl, idMsk);
    desc444.putReference(idnull, ref248);
    var idMkVs = charIDToTypeID("MkVs");
    desc444.putBoolean(idMkVs, false);
    executeAction(idslct, desc444, DialogModes.NO);
}

//add mask
function addMask() {
    var idMk = charIDToTypeID("Mk  ");
    var desc358 = new ActionDescriptor();
    var idNw = charIDToTypeID("Nw  ");
    var idChnl = charIDToTypeID("Chnl");
    desc358.putClass(idNw, idChnl);
    var idAt = charIDToTypeID("At  ");
    var ref208 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idMsk = charIDToTypeID("Msk ");
    ref208.putEnumerated(idChnl, idChnl, idMsk);
    desc358.putReference(idAt, ref208);
    var idUsng = charIDToTypeID("Usng");
    var idUsrM = charIDToTypeID("UsrM");
    var idRvlS = charIDToTypeID("RvlS");
    desc358.putEnumerated(idUsng, idUsrM, idRvlS);
    executeAction(idMk, desc358, DialogModes.NO);
}

function makeGroup(name2) {
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };

    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };

    var descriptor = new ActionDescriptor();
    var reference = new ActionReference();
    var reference2 = new ActionReference();

    reference.putClass(s2t("layerSection"));
    descriptor.putReference(c2t("null"), reference);
    reference2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(s2t("from"), reference2);
    executeAction(s2t("make"), descriptor, DialogModes.NO);
    doc.activeLayer.name = name2
}

//Save History
function makeHistory(name2) {
    var c2t = function (s) {
        return app.charIDToTypeID(s)
    }

    var s2t = function (s) {
        return app.stringIDToTypeID(s)
    }

    var descriptor = new ActionDescriptor()
    var reference = new ActionReference()
    var reference2 = new ActionReference()

    reference.putClass(s2t("snapshotClass"))
    descriptor.putReference(c2t("null"), reference)
    reference2.putProperty(c2t("HstS"), s2t("currentHistoryState"))
    descriptor.putReference(s2t("from"), reference2)
    descriptor.putString(s2t("name"), name2)
    descriptor.putEnumerated(s2t("using"), c2t("HstS"), s2t("fullDocument"))
    executeAction(s2t("make"), descriptor, DialogModes.NO)
}

//select history
function selectHistory(nameHistory) {
    var c2t = function (s) {
        return app.charIDToTypeID(s)
    }

    var s2t = function (s) {
        return app.stringIDToTypeID(s)
    }

    var descriptor = new ActionDescriptor()
    var reference = new ActionReference()

    reference.putName(s2t("snapshotClass"), nameHistory)
    descriptor.putReference(c2t("null"), reference)
    executeAction(s2t("select"), descriptor, DialogModes.NO)
}
function deleteSnapShot(name) {
    var desc381 = new ActionDescriptor();
    var ref21 = new ActionReference();
    ref21.putName(charIDToTypeID("SnpS"), name);
    desc381.putReference(charIDToTypeID("null"), ref21);
    executeAction(charIDToTypeID("Dlt "), desc381, DialogModes.NO);
};
