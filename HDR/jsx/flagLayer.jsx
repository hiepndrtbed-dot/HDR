if (!layerExists("Not delete")) {
    var group = doc.layerSets.add();
    group.name = "GroupEdit";
    addMaskGroup();
    setColorLayer("Vlt ");
    try {
        group.move(doc.layers["MERGE 1"], ElementPlacement.PLACEBEFORE);
    } catch (error) {
        group.move(doc.layers["Background"], ElementPlacement.PLACEBEFORE);
    }
    var newLayer = doc.artLayers.add();
    newLayer.name = "Not delete";
    try {
        newLayer.move(doc.layerSets["GroupEdit"], ElementPlacement.PLACEATEND);
    } catch (error) {
        newLayer.move(doc.layers["Background"], ElementPlacement.PLACEBEFORE);
    } finally {
        doc.activeLayer.allLocked = true;
    }
}