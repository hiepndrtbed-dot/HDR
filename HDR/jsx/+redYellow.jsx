var valueHue = -50; // Giá trị Hue
(function () {
    //check layer tren layer replaceColor
    // checkNameLayerToMger();
    // === Thông số chỉnh màu ===
    $.evalFile(currentFolder + "/flagLayer.jsx");

    if (activeDocument.quickMaskMode == true) { activeDocument.quickMaskMode = false; }
    if (selectLayer("Color")) { selecTool("paintbrushTool"); return; }
    var newLayer1 = doc.artLayers.add();
    newLayer1.name = "Color";
    newLayer1.move(doc.layerSets["GroupEdit"].artLayers["Not delete"], ElementPlacement.PLACEBEFORE);
    doc.activeLayer.blendMode = BlendMode.COLORBLEND;


    //thay vao day
    // makeHue(0, valueHue, 0)
    // executeAction(charIDToTypeID("Invr"), undefined, DialogModes.NO);
    // doc.activeLayer.name = "-Hue saturation";
    // doc.activeLayer = doc.artLayers["Color"];
    selecTool("paintbrushTool");
})();


