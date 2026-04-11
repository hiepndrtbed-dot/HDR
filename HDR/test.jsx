purgeAll();
function purgeAll() {
    var idPrge = charIDToTypeID("Prge");
    var desc7726 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var idPrgI = charIDToTypeID("PrgI");
    var idAl = charIDToTypeID("Al  ");
    desc7726.putEnumerated(idnull, idPrgI, idAl);
    executeAction(idPrge, desc7726, DialogModes.NO);
}

addSelectionGroup("hiep")

function addSelectionGroup(nameGroup) {
    var idAdd = charIDToTypeID("Add ");
    var desc2775 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref91 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idMsk = charIDToTypeID("Msk ");
    ref91.putEnumerated(idChnl, idChnl, idMsk);
    var idLyr = charIDToTypeID("Lyr ");
    ref91.putName(idLyr, nameGroup);
    desc2775.putReference(idnull, ref91);
    var idT = charIDToTypeID("T   ");
    var ref92 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref92.putProperty(idChnl, idfsel);
    desc2775.putReference(idT, ref92);
    executeAction(idAdd, desc2775, DialogModes.NO);
}