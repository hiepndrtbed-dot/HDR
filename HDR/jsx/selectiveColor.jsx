(function main() {
    $.evalFile(currentFolder + "/flagLayer.jsx");
    if (activeDocument.quickMaskMode == true) { activeDocument.quickMaskMode = false; }
    makeSelectiveColor("Remove Blue");
    setSelectiveColor("Bls ", {
        "Cyn ": -42,
        "Ylw ": 100
    });

    doc.activeLayer.move(doc.layerSets["GroupEdit"].artLayers["Not delete"], ElementPlacement.PLACEAFTER);
    makeSelectiveColor("Remove Cyan");
    setSelectiveColor("Cyns", {
        "Cyn ": -42,
        "Ylw ": 100
    });

    doc.activeLayer.move(doc.layerSets["GroupEdit"].artLayers["Not delete"], ElementPlacement.PLACEAFTER);
    doc.activeLayer.grouped = true;

    makeColorAndVibrane(1, 0, 0, 0);
    doc.activeLayer.grouped = true;

    doc.activeLayer = doc.layerSets["GroupEdit"].artLayers["Remove Blue"];
    doc.activeLayer.invert();
    selecTool("paintbrushTool");

})();

// Một số key thường dùng:
// Cyn // Cyan
// Mgnt // Magenta
// Ylw // Yellow
// Blck // Black

// Một số vùng màu:
// "Rds " // Reds
// "Ylws" // Yellows
// "Grns" // Greens
// "Cyns" // Cyans
// "Bls " // Blues
// "Mgnt" // Magentas

//exambles
setSelectiveColor("Bls ", {
    "Cyn ": -42,
    "Ylw ": 100
});


