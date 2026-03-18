// // doc.activeLayer = doc.artLayers["MERGE 1"];
// selectLayer("MERGE 1");
// maskall();
// // createAlphaChannelBlack("Details");
// // selectRGB();
// var lengthGroup = doc.layerSets.length;
// var checkLengGroupNew = doc.layerSets.length;
// for (var i = 0; i < lengthGroup; i++) {
//     if (doc.layerSets[i].name == "Darken" || doc.layerSets[i].name == "HighDarken") {
//         break;
//     }
//     try {
//         loadSelectionByMask(doc.layerSets[i].id);
//     } catch (error) {
//     }
//     if (lengthGroup == 1) {
//         saveAlphaChnl("San");
//         doc.layerSets[i].remove();
//         doc.selection.deselect();
//         selecTool("quickSelectTool");   
//         break;
//     }
//     if (lengthGroup == checkLengGroupNew) {
//         try {
//             saveAlphaChnl("Details")
//         } catch (error) {
// 
//         }
//     }
//     else {
//         try {
//             addSelectionToChannelName("Details");
//         } catch (error) {
// 
//         }
//     }
// 
//     doc.layerSets[i].remove();
//     lengthGroup--;
//     i--;
//     doc.selection.deselect();
// }
// // doc.selection.load(doc.channels.getByName("Details"));
// // doc.channels.getByName("Details").remove();
// 
// // if (activeDocument.quickMaskMode == false) { activeDocument.quickMaskMode = true; }
// 
// function maskall() {
//     // Mask All Objects
//     cTID = function (s) { return app.charIDToTypeID(s); };
//     sTID = function (s) { return app.stringIDToTypeID(s); };
//     function step1(enabled, withDialog) {
//         if (enabled != undefined && !enabled)
//             return;
//         var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
//         var desc1 = new ActionDescriptor();
//         desc1.putBoolean(sTID("sampleAllLayers"), false);
//         desc1.putBoolean(sTID("hardEdge"), true);
//         executeAction(sTID('autoMaskGenerate'), desc1, dialogMode);
//     };
// 
//     step1();
// };
// 
// function saveAlphaChnl(name) {
//     var desc977 = new ActionDescriptor();
//     var ref38 = new ActionReference();
//     ref38.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
//     desc977.putReference(charIDToTypeID("null"), ref38);
//     desc977.putString(charIDToTypeID("Nm  "), name);
//     executeAction(charIDToTypeID("Dplc"), desc977, DialogModes.NO);
//     return activeDocument.channels.getByName(name);
// }
// 
// 
// function addSelectionToChannelName(channelName) {
//     var ch = doc.channels.getByName(channelName);
//     doc.selection.store(ch, SelectionType.EXTEND);
// }
// 
// function selectRGB() {
//     // activeDocument.activeLayer = lyr;
//     var idslct = charIDToTypeID("slct");
//     var desc219 = new ActionDescriptor();
//     var idnull = charIDToTypeID("null");
//     var ref138 = new ActionReference();
//     var idChnl = charIDToTypeID("Chnl");
//     var idChnl = charIDToTypeID("Chnl");
//     var idRGB = charIDToTypeID("RGB ");
//     ref138.putEnumerated(idChnl, idChnl, idRGB);
//     desc219.putReference(idnull, ref138);
//     var idMkVs = charIDToTypeID("MkVs");
//     desc219.putBoolean(idMkVs, false);
//     executeAction(idslct, desc219, DialogModes.NO);
// }
// 
// 
// 
// function createAlphaChannelBlack(name) {
//     var idMk = charIDToTypeID("Mk  ");
//     var desc44916 = new ActionDescriptor();
//     var idNw = charIDToTypeID("Nw  ");
//     var desc44917 = new ActionDescriptor();
//     var idNm = charIDToTypeID("Nm  ");
//     desc44917.putString(idNm, name);
//     var idClrI = charIDToTypeID("ClrI");
//     var idMskI = charIDToTypeID("MskI");
//     var idMskA = charIDToTypeID("MskA");
//     desc44917.putEnumerated(idClrI, idMskI, idMskA);
//     var idClr = charIDToTypeID("Clr ");
//     var desc44918 = new ActionDescriptor();
//     var idRd = charIDToTypeID("Rd  ");
//     desc44918.putDouble(idRd, 255.000000);
//     var idGrn = charIDToTypeID("Grn ");
//     desc44918.putDouble(idGrn, 0.000000);
//     var idBl = charIDToTypeID("Bl  ");
//     desc44918.putDouble(idBl, 0.000000);
//     var idRGBC = charIDToTypeID("RGBC");
//     desc44917.putObject(idClr, idRGBC, desc44918);
//     var idOpct = charIDToTypeID("Opct");
//     desc44917.putInteger(idOpct, 50);
//     var idalphaChannelId = stringIDToTypeID("alphaChannelId");
//     desc44917.putInteger(idalphaChannelId, 54);
//     var idChnl = charIDToTypeID("Chnl");
//     desc44916.putObject(idNw, idChnl, desc44917);
//     executeAction(idMk, desc44916, DialogModes.NO);
// }

eval("@JSXBIN@ES@2.1@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");