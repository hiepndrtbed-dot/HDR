var nameFileJson = "/resizeImage.json";
var temp = 0;
(function main() {
    purgeAll();
    if (layerExists("WindowTemp")) {
        doc.artLayers["WindowTemp"].remove();
    }
    //kiem tra ressize.
    // var jsonFile = new File(scriptFolder.fsName + "/Data" + nameFileJson);
    // if (jsonFile.exists) {
    //     // alert("Resize về kích thước gốc!");
    //     var flagresize = false;
    //     $.evalFile(currentFolder + "/resizeImage.jsx");
    // }
    doc.activeLayer = doc.layers["MERGE 1"];
    doc.artLayers.add();
    var withDialog = true;
    mergeVisible();
    doc.activeLayer.name = "FINALIZE";
    try {//bat loi khong thay doi thong so
        showCurves();
        doc.activeLayer.remove();
        var jsonFile = new File(scriptFolder.fsName + "/Data" + nameFileJson);
        if (jsonFile.exists) {
            // alert("Resize về kích thước gốc!");
            var flagresize = false;
            $.evalFile(currentFolder + "/resizeImage.jsx");
        }
        doc.activeLayer = doc.layers["MERGE 1"];
        doc.artLayers.add();
        var withDialog = true;
        mergeVisible();
        doc.activeLayer.name = "FINALIZE";
        // alert("Check VERTICAL && CAMERA!!");
        cameraRawFilterALL(temp, 0, 0, 0, 4, withDialog);
    } catch (error) {
        doc.artLayers.getByName("FINALIZE").remove();
        doc.activeLayer = doc.artLayers["MERGE 1"];
        // showCurves();
    }
    // }
})();

function mergeVisible() {
    var idMrgV = charIDToTypeID("MrgV");
    var desc25388 = new ActionDescriptor();
    var idDplc = charIDToTypeID("Dplc");
    desc25388.putBoolean(idDplc, true);
    executeAction(idMrgV, desc25388, DialogModes.NO);
}

function showCurves() { executeAction(charIDToTypeID("Crvs"), undefined, DialogModes.ALL); }


