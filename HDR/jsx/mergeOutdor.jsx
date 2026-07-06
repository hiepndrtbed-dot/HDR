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
    if (flagMerge == true) {
        freeTransform(101);
        actionMenu("freeTransform");
    }
    processPreset(valuePreset, withDialog);
    // cameraRawOutdoor(1, true, 4);
    shadowAndHighlight(0, 0);
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

