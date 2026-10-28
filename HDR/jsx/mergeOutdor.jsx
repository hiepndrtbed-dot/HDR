var nameTxtPreset = "/PresetO.txt";
var valuePreset = null;
var withDialog = true;
(function main() {
    $.evalFile(currentFolder + "/editPreset.jsx");
    //process
    if (selectLayer("Align") == true) {
        flagMerge = true;
    }
    //Create file window temp
    selectChoseMultiLayer(doc.layers[0].name, doc.layers[doc.layers.length - 1].name);
    doc.activeLayer.name = "MERGE 1";
    convertSmart();
    processPreset(valuePreset, withDialog);
    convertSmart();
    if (flagMerge == true) {
        freeTransform(101);
        actionMenu("freeTransform");
    }
    // cameraRawOutdoor(1, true, 4);
    shadowAndHighlight(20, 0);
    inverMaskLayerSmartObject();
    selecTool("penTool");
})();


function showCurves() { executeAction(charIDToTypeID("Crvs"), undefined, DialogModes.ALL); }

function mergeVisible() {
    var idMrgV = charIDToTypeID("MrgV");
    var desc25388 = new ActionDescriptor();
    var idDplc = charIDToTypeID("Dplc");
    desc25388.putBoolean(idDplc, true);
    executeAction(idMrgV, desc25388, DialogModes.NO);
}

function openCameraRaw() {
    // Tạo một ActionDescriptor để gọi Camera Raw
    var idCameraRaw = stringIDToTypeID("Adobe Camera Raw Filter");
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    desc.putReference(charIDToTypeID("null"), ref);
    executeAction(idCameraRaw, desc, DialogModes.ALL);
}


function inverMaskLayerSmartObject() {
    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc78458 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1944 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref1944.putName(idLyr, "MERGE 1");
    desc78458.putReference(idnull, ref1944);
    var idMkVs = charIDToTypeID("MkVs");
    desc78458.putBoolean(idMkVs, false);
    var idLyrI = charIDToTypeID("LyrI");
    var list936 = new ActionList();
    list936.putInteger(10);
    desc78458.putList(idLyrI, list936);
    executeAction(idslct, desc78458, DialogModes.NO);

    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc78459 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1945 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idfilterMask = stringIDToTypeID("filterMask");
    ref1945.putEnumerated(idChnl, idChnl, idfilterMask);
    desc78459.putReference(idnull, ref1945);
    var idMkVs = charIDToTypeID("MkVs");
    desc78459.putBoolean(idMkVs, false);
    executeAction(idslct, desc78459, DialogModes.NO);

    var idInvr = charIDToTypeID("Invr");
    executeAction(idInvr, undefined, DialogModes.NO);
}       