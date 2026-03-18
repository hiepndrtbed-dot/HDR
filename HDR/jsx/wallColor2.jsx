// var nameLayer = "WALL";
// var feather = 1;
// const expandSelection = 1;
// const nameChannel = "Wall";
// const nameSolid = "Wall Color ";
// var nameTxt = "/Blending.txt";
// var nameTxtLV = "/level.txt";
// const opacityValue = 100;
// var middleLevelsValue = 1;
// var destWhiteMin = 180;
// (function main() {
//     var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxt);
//     var txtFileLV = new File(scriptFolder.fsName + "/Data" + nameTxtLV);
//     if (txtFile.exists) {
//         txtFile.encoding = "UTF8"; // hoặc "ASCII" nếu file không có dấu tiếng Việt
//         txtFile.open("r"); // "r" = read
//         var contentFile = txtFile.read();
//         txtFile.close();
//         destWhiteMin = contentFile;
//     } else {
//         // Tạo file TXT cùng thư mục
//         // Tạo một cửa sổ dialog
//         var dialog = new Window("dialog", "Change Blending ...");
//         dialog.alignChildren = "left";
//         dialog.orientation = "column";
// 
//         //Custom name
//         var customName = dialog.add("group");
//         customName.add("statictext", undefined, "Add Blending: ");
//         var inputCustomName = customName.add("edittext", undefined, "", { multiline: false });
//         inputCustomName.preferredSize.width = 100;
//         inputCustomName.text = destWhiteMin;
// 
//         var buttonGroup = dialog.add("group");
//         buttonGroup.alignment = "right";
//         var cancelButton = buttonGroup.add("button", undefined, "Cancel");
// 
//         cancelButton.onClick = function () {
//             dialog.close();
//         };
// 
//         var saveButton = buttonGroup.add("button", undefined, "Process");
// 
//         saveButton.onClick = function () {
//             dialog.close();
//             var nameCustom = inputCustomName.text;
//             destWhiteMin = nameCustom;
//             var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxt);
//             txtFile.encoding = "UTF8";
//             txtFile.open("w");
//             txtFile.write(decodeURI(nameCustom));
//             txtFile.close();
//         }
//         dialog.show();
//     }
// 
//     //Kiem tra levels;
//     if (txtFileLV.exists) {
//         txtFileLV.encoding = "UTF8"; // hoặc "ASCII" nếu file không có dấu tiếng Việt
//         txtFileLV.open("r"); // "r" = read
//         var contentFile = txtFileLV.read();
//         txtFileLV.close();
//         middleLevelsValue = contentFile;
//     } else {
//         // Tạo file TXT cùng thư mục
//         // Tạo một cửa sổ dialog
//         var dialog = new Window("dialog", "Change Levels ...");
//         dialog.alignChildren = "left";
//         dialog.orientation = "column";
// 
//         //Custom name
//         var customName = dialog.add("group");
//         customName.add("statictext", undefined, "Add MidLevels: ");
//         var inputCustomName = customName.add("edittext", undefined, "", { multiline: false });
//         inputCustomName.preferredSize.width = 100;
//         inputCustomName.text = middleLevelsValue;
// 
//         var buttonGroup = dialog.add("group");
//         buttonGroup.alignment = "right";
//         var cancelButton = buttonGroup.add("button", undefined, "Cancel");
// 
//         cancelButton.onClick = function () {
//             dialog.close();
//         };
// 
//         var saveButton = buttonGroup.add("button", undefined, "Process");
// 
//         saveButton.onClick = function () {
//             dialog.close();
//             var nameCustom = inputCustomName.text;
//             middleLevelsValue = parseFloat(nameCustom);
//             var txtFileLV = new File(scriptFolder.fsName + "/Data" + nameTxtLV);
//             txtFileLV.encoding = "UTF8";
//             txtFileLV.open("w");
//             txtFileLV.write(decodeURI(middleLevelsValue));
//             txtFileLV.close();
//         }
//         dialog.show();
//     }
//     //su ly chinh
//     // alert(middleLevelsValue)
//     if (!hasSelection()) {
//         alert("Chua co vung chon!");
//     } else {
//         try {
//             doc.activeLayer = doc.artLayers["MERGE 1"];
//         } catch (error) {
//             doc.activeLayer = doc.backgroundLayer;
//         } finally {
//             //kiem tra co luu vung chon truoc do chua.
//             checkSelectionName(nameChannel) ? addSelectionToChannelName(nameChannel) : saveAlphaChnl(nameChannel);
//             prepareSelection(expandSelection, feather);
//             try {
//                 doc.layers[nameLayer];
//                 makeLevelsAdjustment(middleLevelsValue);
//                 doc.activeLayer.name = nameLayer + "X";
//                 setColorLayer("Bl  ");
//             } catch (error) {
//                 makeLevelsAdjustment(middleLevelsValue);
//                 doc.activeLayer.name = nameLayer;
//                 setColorLayer("Ylw ");
//             }
//             blendingOptions(0, 0, 255, 255, 0, 0, destWhiteMin, 255);// blendingOptions(0, 47, 189, 255, 0, 36, 233, 255);
//             doc.activeLayer.opacity = opacityValue;
//             try {
//                 //Di chuyen xuogn duoi layer den trang;
//                 doc.activeLayer.move(doc.layers.getByName("BLACK && WHITE"), ElementPlacement.PLACEAFTER);
//             } catch (error) { }
//             selectRGB();
//             var nameRandum = randomOneToTen();
//             createSolidWithColorPicker(nameSolid + nameRandum);
//             doc.activeLayer.blendMode = BlendMode.COLORBLEND;
//             doc.activeLayer.grouped = true;
//             doc.activeLayer = doc.layers[nameLayer];
//         }
//     }
// })();
// 
// function randomOneToTen() {
//     return Math.floor(Math.random() * 10) + 1;
// }
// 
// function loadSelectionByMask(id) {
//     var desc1 = new ActionDescriptor();
//     var ref1 = new ActionReference();
//     ref1.putProperty(charIDToTypeID('Chnl'), stringIDToTypeID("selection"));
//     desc1.putReference(charIDToTypeID('null'), ref1);
//     var ref2 = new ActionReference();
//     ref2.putEnumerated(charIDToTypeID('Chnl'), charIDToTypeID('Chnl'), charIDToTypeID('Msk '));
//     ref2.putIdentifier(charIDToTypeID('Lyr '), id);
//     desc1.putReference(charIDToTypeID('T   '), ref2);
//     executeAction(charIDToTypeID('setd'), desc1, DialogModes.NO);
// };
// // Helpers
// function cTID(s) { return app.charIDToTypeID(s); }
// function sTID(s) { return app.stringIDToTypeID(s); }
// 
// function hasSelection() {
//     var ref = new ActionReference();
//     ref.putProperty(sTID("property"), sTID("selection"));
//     ref.putEnumerated(sTID("document"), sTID("ordinal"), sTID("targetEnum"));
//     var desc = executeActionGet(ref);
//     return desc.count > 0;
// }
// 
// function fillColor(red, green, blue) {
//     var myColor = new SolidColor()
//     myColor.rgb.red = red // 0 - 255
//     myColor.rgb.green = green
//     myColor.rgb.blue = blue
//     activeDocument.selection.fill(myColor)
// }
// function hasChannel(name) {
//     var chs = app.activeDocument.channels;
//     for (var i = 0; i < chs.length; i++) {
//         if (chs[i].name === name) return true;
//     }
//     return false;
// }
// 
// function prepareSelection(expand, featherVal) {
//     doc.selection.expand(expand);
//     doc.selection.feather(featherVal);
// }
// 
// function saveAlphaChnl(name) {
//     var desc = new ActionDescriptor();
//     var ref = new ActionReference();
//     ref.putProperty(cTID("Chnl"), cTID("fsel"));
//     desc.putReference(cTID("null"), ref);
//     desc.putString(cTID("Nm  "), name);
//     executeAction(cTID("Dplc"), desc, DialogModes.NO);
//     return activeDocument.channels.getByName(name);
// }
// 
// function addSelectionToChannelName(channelName) {
//     var ch = doc.channels.getByName(channelName);
//     doc.selection.store(ch, SelectionType.EXTEND);
// }
// 
// function layerViaCopy(nameLayer) {
//     executeAction(cTID("CpTL"), undefined, DialogModes.NO);
//     activeDocument.activeLayer.name = nameLayer;
// }
// 
// function blendingOptions(srcBlackMin, srcBlackMax, srcWhiteMin, srcWhiteMax,
//     destBlackMin, destBlackMax, destWhiteMin, Dstt) {
// 
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var d3 = new ActionDescriptor();
//     var list = new ActionList();
//     var ref = new ActionReference();
//     var ref2 = new ActionReference();
// 
//     ref.putEnumerated(sTID("layer"), sTID("ordinal"), sTID("targetEnum"));
//     d.putReference(cTID("null"), ref);
// 
//     ref2.putEnumerated(sTID("channel"), sTID("channel"), sTID("gray"));
//     d3.putReference(sTID("channel"), ref2);
// 
//     d3.putInteger(sTID("srcBlackMin"), srcBlackMin);
//     d3.putInteger(sTID("srcBlackMax"), srcBlackMax);
//     d3.putInteger(sTID("srcWhiteMin"), srcWhiteMin);
//     d3.putInteger(sTID("srcWhiteMax"), srcWhiteMax);
//     d3.putInteger(sTID("destBlackMin"), destBlackMin);
//     d3.putInteger(sTID("destBlackMax"), destBlackMax);
//     d3.putInteger(sTID("destWhiteMin"), destWhiteMin);
//     d3.putInteger(cTID("Dstt"), Dstt);
// 
//     list.putObject(sTID("blendRange"), d3);
//     d2.putList(sTID("blendRange"), list);
//     d.putObject(sTID("to"), sTID("layer"), d2);
// 
//     executeAction(sTID("set"), d, DialogModes.NO);
// }
// 
// function setColorLayer(color) {
//     var desc = new ActionDescriptor();
//     var ref = new ActionReference();
//     ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
//     desc.putReference(cTID("null"), ref);
// 
//     var descClr = new ActionDescriptor();
//     descClr.putEnumerated(cTID("Clr "), cTID("Clr "), cTID(color));
//     desc.putObject(cTID("T   "), cTID("Lyr "), descClr);
// 
//     executeAction(cTID("setd"), desc, DialogModes.NO);
// }
// 
// function createSolidWithColorPicker(layerName) {
// 
//     // Hiện Color Picker
//     if (!app.showColorPicker()) return; // Cancel thì thoát
//     var fg = app.foregroundColor; // màu đã chọn
// 
//     // ActionDescriptor để tạo Solid Fill
//     var desc = new ActionDescriptor();
//     var ref = new ActionReference();
//     ref.putClass(stringIDToTypeID("contentLayer"));
//     desc.putReference(stringIDToTypeID("null"), ref);
// 
//     var solidDesc = new ActionDescriptor();
//     var colorDesc = new ActionDescriptor();
//     var rgbDesc = new ActionDescriptor();
//     rgbDesc.putDouble(stringIDToTypeID("red"), fg.rgb.red);
//     rgbDesc.putDouble(stringIDToTypeID("green"), fg.rgb.green);
//     rgbDesc.putDouble(stringIDToTypeID("blue"), fg.rgb.blue);
//     colorDesc.putObject(stringIDToTypeID("color"), stringIDToTypeID("RGBColor"), rgbDesc);
// 
//     solidDesc.putObject(stringIDToTypeID("type"), stringIDToTypeID("solidColorLayer"), colorDesc);
//     desc.putObject(stringIDToTypeID("using"), stringIDToTypeID("contentLayer"), solidDesc);
// 
//     executeAction(stringIDToTypeID("make"), desc, DialogModes.NO);
// 
//     if (layerName) app.activeDocument.activeLayer.name = layerName;
// }
// 
// function makeLevelsAdjustment(middle) {
//     var idMk = charIDToTypeID("Mk  ");
//     var desc1 = new ActionDescriptor();
//     var idnull = charIDToTypeID("null");
//     var ref1 = new ActionReference();
//     var idAdjL = charIDToTypeID("AdjL");
//     ref1.putClass(idAdjL);
//     desc1.putReference(idnull, ref1);
// 
//     var idUsng = charIDToTypeID("Usng");
//     var desc2 = new ActionDescriptor();
// 
//     var idType = charIDToTypeID("Type");
//     var desc3 = new ActionDescriptor();
// 
//     // Tạo cấu hình Levels
//     var idAdjs = charIDToTypeID("Adjs");
//     var list1 = new ActionList();
//     var desc4 = new ActionDescriptor();
// 
//     // Channel RGB
//     var idChnl = charIDToTypeID("Chnl");
//     var ref2 = new ActionReference();
//     var idChnlRGB = charIDToTypeID("Chnl");
//     var idRGB = charIDToTypeID("RGB ");
//     ref2.putEnumerated(idChnlRGB, idChnlRGB, idRGB);
//     desc4.putReference(idChnl, ref2);
// 
//     // Input levels: black, white
//     var idInpt = charIDToTypeID("Inpt");
//     var list2 = new ActionList();
//     list2.putInteger(0);    // black input
//     list2.putInteger(255);  // white input
//     desc4.putList(idInpt, list2);
// 
//     // Gamma (midtone)
//     var idGmm = charIDToTypeID("Gmm ");
//     desc4.putDouble(idGmm, middle); // midtone = 1.2
// 
//     // Output levels: black, white
//     var idOtpt = charIDToTypeID("Otpt");
//     var list3 = new ActionList();
//     list3.putInteger(0);    // black output
//     list3.putInteger(255);  // white output
//     desc4.putList(idOtpt, list3);
// 
//     list1.putObject(charIDToTypeID("LvlA"), desc4);
//     desc3.putList(idAdjs, list1);
// 
//     desc2.putObject(idType, charIDToTypeID("Lvls"), desc3);
//     desc1.putObject(idUsng, idAdjL, desc2);
// 
//     executeAction(idMk, desc1, DialogModes.NO);
// }
// // ========== MAIN ==========
// 
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

eval("@JSXBIN@ES@2.1@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SzGjJjEjOjVjMjMjGCEjMfRBFeEjOjVjMjMffnftJ2gaBnASJDEjKfntnftJ2gbBnASzGjJjEiBjEjKiMjHEEjMfRBFeEiBjEjKiMffnftJ2gcBnAEXiefVJfDRBVjHfEffJ2gdBnAEXOfVHfBRCVjGfCVJfDffJ2gfBnASzGjJjEiVjTjOjHjIFEjMfRBFeEiVjTjOjHffnftJ2hABnASzFjEjFjTjDhSjJGEjIfntnftJ2hCBnASzGjJjEiUjZjQjFjKHEjMfRBFeEiUjZjQjFffnftJ2hDBnASzFjEjFjTjDhTjLIEjIfntnftJ2hGBnASzGjJjEiBjEjKjTjMJEjMfRBFeEiBjEjKjTffnftJ2hHBnASzFjMjJjTjUhRjNKEjiKfntnftJ2hIBnASzFjEjFjTjDhUjOLEjIfntnftJ2hLBnASzGjJjEiDjIjOjMjPMEjMfRBFeEiDjIjOjMffnftJ2hMBnASPNEjKfntnftJ2hNBnASzJjJjEiDjIjOjMiSiHiCjQOEjMfRBFeEiDjIjOjMffnftJ2hOBnASzFjJjEiSiHiCjRPEjMfRBFeEiSiHiChAffnftJ2hPBnAEXQfVPfNRDVjQfOVjQfOVjRfPffJ2hQBnAEXOfVjOfLRCVjPfMVPfNffJ2hTBnASzGjJjEiJjOjQjUjSQEjMfRBFeEiJjOjQjUffnftJ2hUBnASzFjMjJjTjUhSjTREjiKfntnftJ2hVBnAEXiLfVjTfRRBFdAffJ2hWBnAEXiLfVjTfRRBFdnfffJ2hXBnAEXiVfVjOfLRCVjSfQVjTfRffJ2haBnASzFjJjEiHjNjNjUSEjMfRBFeEiHjNjNhAffnftJ2hbBnAEXjCfVjOfLRCVjUfSVzGjNjJjEjEjMjFjVfVffJ2heBnASzGjJjEiPjUjQjUjWTEjMfRBFeEiPjUjQjUffnftJ2hfBnASzFjMjJjTjUhTjXUEjiKfntnftJ2iABnAEXiLfVjXfURBFdAffJ2iBBnAEXiLfVjXfURBFdnfffJ2iCBnAEXiVfVjOfLRCVjWfTVjXfUffJ2iEBnAEXiUfVjNfKRCEjMfRBFeEiMjWjMiBffVjOfLffJ2iFBnAEXiVfVjLfIRCVjMfJVjNfKffJ2iHBnAEXiUfVjJfGRDVjKfHEjMfRBFeEiMjWjMjTffVjLfIffJ2iIBnAE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");