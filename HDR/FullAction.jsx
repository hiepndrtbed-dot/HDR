//By Duc Hiep - Acad DN Version 1.0 -- HDR
$.evalFile(new File(new File($.fileName).parent + "/json/json2.js"));
const versionTo = " By Duc Hiep (Version -- 1.0.1 --) ";
preferences.rulerUnits = Units.PIXELS;
const doc = activeDocument;
var baseFolder = new File($.fileName).parent;
var currentFolder = baseFolder.fsName + "/jsx";
var scriptFolder = baseFolder;
var thePathActions = baseFolder.fsName + "/Action";
var targetScript = File(scriptFolder.fsName + "/py/login_check.jsx");
var status = false;

if (targetScript.exists) {
    $.evalFile(targetScript);
} else {
    alert("❌ Không tìm thấy file: " + targetScript.fsName);
}
// alert(status)
if (status == true) {
    doc.suspendHistory("By Hiep!", "runabcedfasddfashiepnguyenduc()");
    // runabcedfasddfashiepnguyenduc();
}

//processing
function runabcedfasddfashiepnguyenduc() {
    // DIALOG
    var dialog = new Window("dialog")
    dialog.text = "ACTION HDR(Cubicasa) - " + versionTo;
    dialog.orientation = "row";
    dialog.alignChildren = ["center", "top"];
    dialog.spacing = 3;
    dialog.margins = 10;
    // dialog.active = true;

    // GROUP1
    // ======
    var group1 = dialog.add("group", undefined, { name: "group1" });
    group1.orientation = "column";
    group1.alignment = ["left", "center"];
    group1.spacing = 3;
    group1.margins = 1;

    //Copy
    var buttonCopyExposure = group1.add("button", undefined, undefined, { name: "Copy Exposure (1)" });
    buttonCopyExposure.text = "Copy Exposure (F1)";
    buttonCopyExposure.alignment = ["left", "center"];
    buttonCopyExposure.preferredSize.width = 170;
    buttonCopyExposure.helpTip = "Copy các document (#Untitled-1) về một document có độ sáng cao nhất, sắp xếp các document theo các Layer có độ sáng thấp dần (Background sáng nhất), \nPhím tắt là F1";
    buttonCopyExposure.helpTip.foregroundColor = buttonCopyExposure.graphics.newPen(buttonCopyExposure.graphics.PenType.SOLID_COLOR, [0, 0, 1], 1);

    //Merge Exposure
    var buttonMergeExposure = group1.add("button", undefined, undefined, { name: "Merge Exposure" });
    buttonMergeExposure.text = "Merge Exposure (F2)";
    buttonMergeExposure.alignment = ["left", "center"];
    buttonMergeExposure.preferredSize.width = 170;
    buttonMergeExposure.helpTip = "Merge các Layer có các độ sáng khác nhau! \nPhím tắt F2";

    //Align and merge Exposure
    var buttonAlign = group1.add("button", undefined, undefined, { name: "Align and merge Exposure" });
    buttonAlign.text = "ALign and Merge Exposure (F3)";
    buttonAlign.alignment = ["left", "center"];
    buttonAlign.preferredSize.width = 170;
    buttonAlign.helpTip = "Align Layer có độ rung, sau đó Merge các Layer có các độ sáng khác nhau! \nPhím tắt: F3";

    //Align and merge Exposure
    var buttonAlignFlash = group1.add("button", undefined, undefined, { name: "Align and merge Exposure" });
    buttonAlignFlash.text = "ALignMergeExFlash";
    buttonAlignFlash.alignment = ["left", "center"];
    buttonAlignFlash.preferredSize.width = 170;
    buttonAlignFlash.helpTip = "Align Layer có độ rung, sau đó Merge các Layer có các độ sáng khác nhau! ";

    //Merge Exposure Flash
    var buttonMergeExposureFlash = group1.add("button", undefined, undefined, { name: "Merge Exposure" });
    buttonMergeExposureFlash.text = "Merge Exposure Flash";
    buttonMergeExposureFlash.alignment = ["left", "center"];
    buttonMergeExposureFlash.preferredSize.width = 170;
    buttonMergeExposureFlash.helpTip = "MergeFlash các Layer có các độ sáng khác nhau!";

    //Fill white Ceiling, molding
    var buttonFillCeilingMolding = group1.add("button", undefined, undefined, { name: "Ceiling, molding" });
    buttonFillCeilingMolding.text = "Fill white Ceiling, molding (F4)";
    buttonFillCeilingMolding.alignment = ["left", "center"];
    buttonFillCeilingMolding.preferredSize.width = 170;
    buttonFillCeilingMolding.helpTip = "Fill trắng tường trần! Có thể fill nhiều lần không tạo thêm layer. \nPhím tắt: F4";


    //Fill color Wall
    var buttonFillWall = group1.add("button", undefined, undefined, { name: "Wall color 1" });
    buttonFillWall.text = "Wall color - LV 1.2 (F5)";
    buttonFillWall.alignment = ["left", "center"];
    buttonFillWall.preferredSize.width = 170;
    buttonFillWall.helpTip = "Fill tường trần có màu! Mỗi lần fill tạo thêm layer mới Levels mặc định (1.2). \nPhím tắt: F5";

    //Wall coloring 2
    var buttonFillWall2 = group1.add("button", undefined, undefined, { name: "Wall color 2" });
    buttonFillWall2.text = "Wall color - LV ~ (F6)"
    buttonFillWall2.alignment = ["left", "center"]
    buttonFillWall2.preferredSize.width = 170
    buttonFillWall2.helpTip = "Fill tường trần có màu! Mỗi lần fill tạo thêm layer mới.\nLevels được lưu trước đó hoặc tùy chọn mới (Xóa dữ liệu cũ ở nút Reset Data). \nPhím tắt: F6";

    //DTD
    var buttonDTD = group1.add("button", undefined, undefined, { name: "DTD" });
    buttonDTD.text = "DTD (F7)";
    buttonDTD.preferredSize.width = 170;
    buttonDTD.helpTip = "Tạo ảnh tối! Chọn vùng chọn cửa trước khi chạy. \nPhím tắt: F7";

    //Fill Sky DTD
    var buttonAddSkyDTD = group1.add("button", undefined, undefined, { name: "Add sky (2)" });
    buttonAddSkyDTD.text = "Add Sky(DTD)(F8)";
    buttonAddSkyDTD.alignment = ["left", "center"];
    buttonAddSkyDTD.preferredSize.width = 170;
    buttonAddSkyDTD.helpTip = "Thêm trời DTD. Lưu ý phải sử dụng action add trời và tạo ảnh tối(DTD) trước. \nPhím tắt: F8";

    //Add TV
    var buttonAddTV = group1.add("button", undefined, undefined, { name: "Camera Raw" });
    buttonAddTV.text = "Add Television (4)";
    buttonAddTV.alignment = ["left", "center"];
    buttonAddTV.preferredSize.width = 170;
    buttonAddTV.helpTip = "Fill ti vi. Lấy vùng chọn TV trước khi chạy action. \nPhím tắt: 4";


    //Lo Fire
    var buttonLoSuoi = group1.add("button", undefined, undefined, { name: "Dust" });
    buttonLoSuoi.text = "Add Fire (5)";
    buttonLoSuoi.alignment = ["left", "center"];
    buttonLoSuoi.preferredSize.width = 170;
    buttonLoSuoi.helpTip = "Fill lò sưởi. Lấy vùng chọn lò sưởi trước khi chạy action. \nPhím tắt: 5";


    //Fill window
    var buttonWindow = group1.add("button", undefined, undefined, { name: "Copy Sill (2)" });
    buttonWindow.text = "Add Window(6)";
    buttonWindow.alignment = ["left", "center"];
    buttonWindow.preferredSize.width = 170;
    buttonWindow.helpTip = "Thay cửa sổ. Lấy vùng chọn Cửa sổ trước khi chạy action. \nPhím tắt: 6";

    //Fill Sky
    var buttonSky = group1.add("button", undefined, undefined, { name: "Line_War_Background (l)" });
    buttonSky.text = "Add Sky(7)";
    buttonSky.preferredSize.width = 170;
    buttonSky.helpTip = "Thêm trời! \nPhím tắt: 4";
    buttonWindow.helpTip = "Thay trời. Khoanh vùng vùng chọn trời trước khi chạy action. \nPhím tắt: 7";


    //Add Grass
    var buttonAddGrass = group1.add("button", undefined, undefined, { name: "Camera Raw" });
    buttonAddGrass.text = "Add Grass (8)";
    buttonAddGrass.alignment = ["left", "center"];
    buttonAddGrass.preferredSize.width = 170;

    //Add light
    var buttonAddLight = group1.add("button", undefined, undefined, { name: "Add sky (2)" });
    buttonAddLight.text = "Add Light(9)";
    buttonAddLight.alignment = ["left", "center"];
    buttonAddLight.preferredSize.width = 170;
    buttonAddLight.helpTip = "Truy cập folder chứa Light, add light cho DTD! \nPhím tắt: L";


    //Replace Color
    var buttonReplaceColor = group1.add("button", undefined, undefined, { name: "Replace Color" });
    buttonReplaceColor.text = "Replace Color(Q)";
    buttonReplaceColor.preferredSize.width = 170;

    //Selective Color
    var buttonSelectiveColor = group1.add("button", undefined, undefined, { name: "Selective Color" });
    buttonSelectiveColor.text = "Selective Color(W)";
    buttonSelectiveColor.preferredSize.width = 170;

    //ColorBalance
    var buttonColorBalance = group1.add("button", undefined, undefined, { name: "ColorBalance" });
    buttonColorBalance.text = "ColorBalance(E)";
    buttonColorBalance.preferredSize.width = 170;

    //CameraRaw
    var buttonCameraRaw = group1.add("button", undefined, undefined, { name: "CameraRaw" });
    buttonCameraRaw.text = "CameraRaw(R)";
    buttonCameraRaw.preferredSize.width = 170;


    //GROUP 2
    var group2 = dialog.add("group", undefined, { name: "Group 2" });
    group2.orientation = "column";
    group2.alignChildren = ["left", "center"];
    group2.spacing = 3;
    group2.margins = 1;

    //Carpet synchronization
    var buttonReduceHueSaturation = group2.add("button", undefined, undefined, { name: "Carpet synchronization" });
    buttonReduceHueSaturation.text = "Carpet synchronization(T)";
    buttonReduceHueSaturation.preferredSize.width = 170;

    //Hue saturation
    var buttonHueSaturation = group2.add("button", undefined, undefined, { name: "Hue Color" });
    buttonHueSaturation.text = "Hue Saturation(U)";
    buttonHueSaturation.preferredSize.width = 170;

    //Color and vibrance
    var buttonColorAndVibrance = group2.add("button", undefined, undefined, { name: "Hue Color" });
    buttonColorAndVibrance.text = "ColorAndVibrance(Y)";
    buttonColorAndVibrance.preferredSize.width = 170;


    //Copy Path
    var buttonCopyPath = group2.add("button", undefined, undefined, { name: "Flip_Canvas_Product_White" });
    buttonCopyPath.text = "Copy Path (A)";
    buttonCopyPath.preferredSize.width = 170;

    //Save selection detail
    var buttonSaveSelectionDetail = group2.add("button", undefined, undefined, { name: "Flip_Canvas_Product_White" });
    buttonSaveSelectionDetail.text = "Save Selection Detail (D)";
    buttonSaveSelectionDetail.preferredSize.width = 170;

    //Save selection detail
    var buttonSaveSelectionAllDetail = group2.add("button", undefined, undefined, { name: "Flip_Canvas_Product_White" });
    buttonSaveSelectionAllDetail.text = "Save Selection All Detail (F)";
    buttonSaveSelectionAllDetail.preferredSize.width = 170;

    //Replace color Red + yellow
    var buttonAddRed = group2.add("button", undefined, undefined, { name: "deleteSetAction 75%" });
    buttonAddRed.text = "Create Layer Blending Color (C)";
    buttonAddRed.preferredSize.width = 170;


    //Copy Path
    var buttonRunActionPath = group2.add("button", undefined, undefined, { name: "Run action path" });
    buttonRunActionPath.text = "Run action Path (F10)";
    buttonRunActionPath.preferredSize.width = 170;

    // //Merge All layer to one Layer
    // var buttonMerge = group2.add("button", undefined, undefined, { name: "buttonMerge" });
    // buttonMerge.text = "MERGE LAYER (1)";
    // buttonMerge.preferredSize.width = 170;

    //Merge images indor
    var buttonIndor = group2.add("button", undefined, undefined, { name: "INDOR" });
    buttonIndor.text = "MERGE (INDOR) (1)"
    buttonIndor.preferredSize.width = 170;

    //Merge OutDor
    var outDor = group2.add("button", undefined, undefined, { name: "OUTDOR" });
    outDor.text = "MERGE (OUTDOR) (2)";
    outDor.preferredSize.width = 170;

    //FINALIZE
    var buttonFinalize = group2.add("button", undefined, undefined, { name: "FINALIZE" });
    buttonFinalize.text = "MERGE (FINALIZE) (3)";
    buttonFinalize.preferredSize.width = 170;

    //RESET ALL DATA
    var buttonResetData = group2.add("button", undefined, undefined, { name: "Reset Data" });
    buttonResetData.text = "Reset Data (Z)";
    buttonResetData.preferredSize.width = 170;

    //RESET DATA blending
    var buttonResizeImage = group2.add("button", undefined, undefined, { name: "Resize Image" });
    buttonResizeImage.text = "Resize and UnResize (I)";
    buttonResizeImage.preferredSize.width = 170;

    //RESET DATA blending
    var buttonResetDataBlending = group2.add("button", undefined, undefined, { name: "Reset Blending" });
    buttonResetDataBlending.text = "Reset Blending (X)";
    buttonResetDataBlending.preferredSize.width = 170;

    //Save tif and jpg
    var buttonSaveTif = group2.add("button", undefined, undefined, { name: "Hair Fly" });
    buttonSaveTif.text = "Save tif and jpg (S)";
    buttonSaveTif.preferredSize.width = 170;

    //Reset Ram
    var buttonResetram = group2.add("button", undefined, undefined, { name: "Reset ram" });
    buttonResetram.text = "Reset Ram(P)";
    buttonResetram.preferredSize.width = 170;
    buttonResetram.helpTip = "Giải phóng bộ nhớ, giúp PTS hoạt động mượt hơn! \nPhím tắt: P";

    //Logout
    var buttonLogout = group2.add("button", undefined, undefined, { name: "Logout account" });
    buttonLogout.text = "Logout Account";
    buttonLogout.preferredSize.width = 170;

    //update
    var buttonUpdate = group2.add("button", undefined, undefined, { name: "Update code" });
    buttonUpdate.text = "Update!";
    buttonUpdate.preferredSize.width = 170;

    //Close Frame.
    var buttonClose = group2.add("button", undefined, undefined, { name: "Cancel" });
    buttonClose.text = "Cancel";
    buttonClose.preferredSize.width = 170;
    buttonClose.active = true

    // Hàm helper: chạy file jsx
    function runScript(path) {
        var targetScript = File(path);
        if (targetScript.exists) {
            $.evalFile(targetScript);
        } else {
            alert("❌ Không tìm thấy file: " + targetScript.fsName);
        }
    }

    // Hàm helper: gắn listener cho button chạy file
    function bindBtn(btn, filePath) {
        btn.addEventListener("click", function () {
            dialog.close();
            runScript(filePath);
        });
    }

    // --- Map button ↔ file ---
    bindBtn(buttonCopyExposure, currentFolder + "/copyToMerge.jsx");
    bindBtn(buttonMergeExposure, currentFolder + "/mergeImage.jsx");
    bindBtn(buttonMergeExposureFlash, currentFolder + "/mergeBWBD.jsx");
    bindBtn(buttonFillCeilingMolding, currentFolder + "/Whitening.jsx");
    bindBtn(buttonFillWall, currentFolder + "/wallColor.jsx");
    bindBtn(buttonFillWall2, currentFolder + "/wallColor2.jsx");
    bindBtn(buttonAddTV, currentFolder + "/InsertElectronic.jsx");
    bindBtn(buttonAddGrass, currentFolder + "/insertGrass.jsx");
    bindBtn(buttonWindow, currentFolder + "/insertWindow.jsx");
    bindBtn(buttonSky, currentFolder + "/insertSky.jsx");
    bindBtn(buttonAddSkyDTD, currentFolder + "/insertSkyDTD.jsx");
    bindBtn(buttonAddLight, currentFolder + "/insertFlight.jsx");
    bindBtn(buttonLoSuoi, currentFolder + "/insertFire.jsx");
    bindBtn(buttonSaveTif, currentFolder + "/saveTifandJPG.jsx");
    bindBtn(buttonResetram, currentFolder + "/resetRam.jsx");
    bindBtn(buttonReplaceColor, currentFolder + "/replaceColor.jsx");
    bindBtn(buttonHueSaturation, currentFolder + "/hueSaturation.jsx");
    bindBtn(buttonColorAndVibrance, currentFolder + "/colorAndVibrance.jsx");
    bindBtn(buttonColorBalance, currentFolder + "/colorBalance.jsx");
    bindBtn(buttonSelectiveColor, currentFolder + "/selectiveColor.jsx");
    bindBtn(buttonCameraRaw, currentFolder + "/cameraRaw.jsx");
    bindBtn(buttonReduceHueSaturation, currentFolder + "/-hueSaturation.jsx");
    bindBtn(buttonResetData, currentFolder + "/removeDataTxt.jsx");
    bindBtn(buttonResetDataBlending, currentFolder + "/resetBlending.jsx");
    bindBtn(buttonAddRed, currentFolder + "/+redYellow.jsx");
    bindBtn(buttonResizeImage, currentFolder + "/resizeImage.jsx");
    bindBtn(buttonSaveSelectionAllDetail, currentFolder + "/selectionDetails.jsx");
    bindBtn(buttonCopyPath, currentFolder + "/copyPathTodocument.jsx");
    bindBtn(buttonRunActionPath, currentFolder + "/autoAction.jsx");
    bindBtn(buttonFinalize, currentFolder + "/finalize.jsx");
    bindBtn(buttonUpdate, currentFolder + "/updateCode.jsx");
    bindBtn(buttonIndor, currentFolder + "/mergeIndor.jsx");
    bindBtn(outDor, currentFolder + "/mergeOutdor.jsx");
    bindBtn(buttonLogout, scriptFolder + "/py/logout.jsx");

    // --- Các button có xử lý đặc biệt ---
    // Align + Merge Exposure
    buttonAlign.addEventListener("click", function () {
        dialog.close();
        loadAction("ALign", "DataAction(HDR).atn");
        runScript(currentFolder + "/mergeImage.jsx");
    });

    buttonAlignFlash.addEventListener("click", function () {
        dialog.close();
        loadAction("ALign", "DataAction(HDR).atn");
        runScript(currentFolder + "/mergeBWBD.jsx");
    });

    // Save Selection Detail
    buttonSaveSelectionDetail.addEventListener("click", function () {
        dialog.close();
        loadAction("Selection Detail", "DataAction(HDR).atn");
    });

    // DTD
    buttonDTD.addEventListener("click", function () {
        dialog.close();
        if (hasSelection()) {
            loadAction("DTD", "DataAction(HDR).atn");
        } else {
            alert("Chon vung chon cua so");
        }
    });

    // close form
    buttonClose.addEventListener("click", function () {
        dialog.close();
    });
    //Xử lý xự kiện bằng bàng phím
    dialog.addEventListener("keydown", triggerBtnRun);
    function triggerBtnRun(e) {
        const actions = {
            "F1": buttonCopyExposure,
            "F2": buttonMergeExposure,
            "0": buttonMergeExposureFlash,
            "F3": buttonAlign,
            "-": buttonAlignFlash,
            "F4": buttonFillCeilingMolding,
            "F5": buttonFillWall,
            "F6": buttonFillWall2,
            "F7": buttonDTD,
            "F8": buttonAddSkyDTD,
            "1": buttonIndor,
            "2": outDor,
            "3": buttonFinalize,
            "4": buttonAddTV,
            "5": buttonLoSuoi,
            "6": buttonWindow,
            "7": buttonSky,
            "8": buttonAddGrass,
            "9": buttonAddLight,
            "Q": buttonReplaceColor,
            "W": buttonSelectiveColor,
            "E": buttonColorBalance,
            "R": buttonCameraRaw,
            "T": buttonReduceHueSaturation,
            "U": buttonHueSaturation,
            "Y": buttonColorAndVibrance,
            "I": buttonResizeImage,
            "P": buttonResetram,
            "A": buttonCopyPath,
            "S": buttonSaveTif,
            "D": buttonSaveSelectionDetail,
            "F": buttonSaveSelectionAllDetail,
            "Z": buttonResetData,
            "X": buttonResetDataBlending,
            "C": buttonAddRed,
            "F10": buttonRunActionPath,
            "Escape": buttonClose
        };

        const btn = actions[e.keyName];
        if (btn) {
            btn.dispatchEvent(new Event("click"));
        } else {
            alert(e.keyName + " Input fail!!!!");
        }
    }
    dialog.show();
}
// purgeAll();
function checkNameLayerToMger() {
    var keywordCheck = ["wall", "color", "black", "+red & yellow", "grass", "sky", "merge"];
    for (var x = 0; x < doc.artLayers.length; x++) {
        if (checkString(doc.artLayers[doc.artLayers.length - 3].name, keywordCheck)) break;
        doc.artLayers[doc.artLayers.length - 3].merge();
    }

}
function selectChoseMultiLayer(nameOn, nameBottom) {
    function cID(s) { return charIDToTypeID(s); }
    function sID(s) { return stringIDToTypeID(s); }
    // Chọn layer "Darken"
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cID("Lyr "), nameOn);
    desc1.putReference(cID("null"), ref1);
    desc1.putBoolean(cID("MkVs"), false);
    executeAction(cID("slct"), desc1, DialogModes.NO);

    // Thêm layer "Background" vào vùng chọn
    var desc2 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putName(cID("Lyr "), nameBottom);
    desc2.putReference(cID("null"), ref2);
    desc2.putEnumerated(sID("selectionModifier"), sID("selectionModifierType"), sID("addToSelectionContinuous"));
    desc2.putBoolean(cID("MkVs"), false);
    executeAction(cID("slct"), desc2, DialogModes.NO);
    // Gộp layer đã chọn
    // executeAction(sID("mergeLayersNew"), undefined, DialogModes.NO);
}

//Kiem tra co ton tai vung chon
function hasSelection() {
    var hasSelection = false;
    var ref = new ActionReference();
    ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("selection"));
    ref.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
    var desc = executeActionGet(ref);
    if (desc.count) hasSelection = true;
    return hasSelection;
}

//Invert
function invert() {
    executeAction(charIDToTypeID("Invr"), undefined, DialogModes.NO);
}

// === Tạo Adjustment Layer: Color Balance ===
function applyColorBalance(shadow, midtone, highlight) {
    var shadow = shadow;
    var midtone = midtone;
    var highlight = highlight;
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putClass(charIDToTypeID("AdjL"));
    desc.putReference(charIDToTypeID("null"), ref);

    var layerDesc = new ActionDescriptor();
    var colorDesc = new ActionDescriptor();

    function makeList(r, g, b) {
        var list = new ActionList();
        list.putInteger(r);
        list.putInteger(g);
        list.putInteger(b);
        return list;
    }

    colorDesc.putList(charIDToTypeID("ShdL"), makeList(shadow.r, shadow.g, shadow.b));
    colorDesc.putList(charIDToTypeID("MdtL"), makeList(midtone.r, midtone.g, midtone.b));
    colorDesc.putList(charIDToTypeID("HghL"), makeList(highlight.r, highlight.g, highlight.b));
    colorDesc.putBoolean(charIDToTypeID("PrsL"), true);

    layerDesc.putObject(charIDToTypeID("Type"), charIDToTypeID("ClrB"), colorDesc);
    desc.putObject(charIDToTypeID("Usng"), charIDToTypeID("AdjL"), layerDesc);

    executeAction(charIDToTypeID("Mk  "), desc, DialogModes.NO);
}

function resizeImage2(width, height) {
    WIDTH = width;
    HEIGHT = height;
    bounds = activeDocument.activeLayer.bounds;
    layerWidth = bounds[2].as('px') - bounds[0].as('px');
    layerHeight = bounds[3].as('px') - bounds[1].as('px');
    layerRatio = layerWidth / layerHeight;
    newWidth = WIDTH;
    newHeight = ((1.0 * WIDTH) / layerRatio);
    if (newHeight <= HEIGHT) {
        newWidth = layerRatio * HEIGHT;
        newHeight = HEIGHT;
    }
    resizePercent = newWidth / layerWidth * 100;
    app.activeDocument.activeLayer.resize(resizePercent, resizePercent, AnchorPosition.MIDDLECENTER);

}

function pasteFolder() {
    var idpast = charIDToTypeID("past");
    var desc4765 = new ActionDescriptor();
    var idinPlace = stringIDToTypeID("inPlace");
    desc4765.putBoolean(idinPlace, true);
    var idAntA = charIDToTypeID("AntA");
    var idAnnt = charIDToTypeID("Annt");
    var idAnno = charIDToTypeID("Anno");
    desc4765.putEnumerated(idAntA, idAnnt, idAnno);
    var idAs = charIDToTypeID("As  ");
    var idPxel = charIDToTypeID("Pxel");
    desc4765.putClass(idAs, idPxel);
    executeAction(idpast, desc4765, DialogModes.NO);
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

function purgeAll() {
    var idPrge = charIDToTypeID("Prge");
    var desc7726 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var idPrgI = charIDToTypeID("PrgI");
    var idAl = charIDToTypeID("Al  ");
    desc7726.putEnumerated(idnull, idPrgI, idAl);
    executeAction(idPrge, desc7726, DialogModes.NO);
}

function selecTool(tool) {
    var desc9 = new ActionDescriptor();
    var ref7 = new ActionReference();
    ref7.putClass(app.stringIDToTypeID(tool));
    desc9.putReference(app.charIDToTypeID('null'), ref7);
    executeAction(app.charIDToTypeID('slct'), desc9, DialogModes.NO);

    // Tool names (use quoted strings, e.g. 'moveTool')
    // moveTool
    // marqueeRectTool
    // marqueeEllipTool
    // marqueeSingleRowTool
    // marqueeSingleColumnTool
    // lassoTool
    // polySelTool
    // magneticLassoTool
    // quickSelectTool
    // magicWandTool
    // cropTool
    // sliceTool
    // sliceSelectTool
    // spotHealingBrushTool
    // magicStampTool
    // patchSelection
    // redEyeTool
    // paintbrushTool
    // pencilTool
    // colorReplacementBrushTool
    // cloneStampTool
    // patternStampTool
    // historyBrushTool
    // artBrushTool
    // eraserTool
    // backgroundEraserTool
    // magicEraserTool
    // gradientTool
    // bucketTool
    // blurTool
    // sharpenTool
    // smudgeTool
    // dodgeTool
    // burnInTool
    // saturationTool
    // penTool
    // freeformPenTool
    // addKnotTool
    // deleteKnotTool
    // convertKnotTool
    // typeCreateOrEditTool
    // typeVerticalCreateOrEditTool
    // typeCreateMaskTool
    // typeVerticalCreateMaskTool
    // pathComponentSelectTool
    // directSelectTool
    // rectangleTool
    // roundedRectangleTool
    // ellipseTool
    // polygonTool
    // lineTool
    // customShapeTool
    // textAnnotTool
    // soundAnnotTool
    // eyedropperTool
    // colorSamplerTool
    // rulerTool
    // handTool
    // zoomTool
}

function resetBackground(foregroundColorBlack) {
    var idRset = charIDToTypeID("Rset");
    var desc1475 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref70 = new ActionReference();
    var idClr = charIDToTypeID("Clr ");
    var idClrs = charIDToTypeID("Clrs");
    ref70.putProperty(idClr, idClrs);
    desc1475.putReference(idnull, ref70);
    executeAction(idRset, desc1475, DialogModes.NO);
    if (foregroundColorBlack == true) {
        var idExch = charIDToTypeID("Exch");
        var desc1460 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref68 = new ActionReference();
        var idClr = charIDToTypeID("Clr ");
        var idClrs = charIDToTypeID("Clrs");
        ref68.putProperty(idClr, idClrs);
        desc1460.putReference(idnull, ref68);
        executeAction(idExch, desc1460, DialogModes.NO);
    }
}
function resizeImagePercent(percent) {

    var doc = app.activeDocument;

    var newWidth = doc.width * percent / 100;
    var newHeight = doc.height * percent / 100;

    doc.resizeImage(
        newWidth,
        newHeight,
        null,
        ResampleMethod.BICUBIC
    );
}

function mergeVisible(params) {
    var idMrgV = charIDToTypeID("MrgV");
    var desc25388 = new ActionDescriptor();
    var idDplc = charIDToTypeID("Dplc");
    desc25388.putBoolean(idDplc, true);
    executeAction(idMrgV, desc25388, DialogModes.NO);
}

function checkString(str, arr_) {
    // Đưa về chữ thường để dễ so sánh
    str = str.toLowerCase();
    // Kiểm tra từng từ khóa
    for (var i = 0; i < arr_.length; i++) {
        if (str.indexOf(arr_[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function deselectPath() {
    var idDslc = charIDToTypeID("Dslc");
    var desc2657 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref325 = new ActionReference();
    var idPath = charIDToTypeID("Path");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref325.putEnumerated(idPath, idOrdn, idTrgt);
    desc2657.putReference(idnull, ref325);
    executeAction(idDslc, desc2657, DialogModes.NO);
}


function saveAlphaChnl(name) {
    var desc977 = new ActionDescriptor();
    var ref38 = new ActionReference();
    ref38.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
    desc977.putReference(charIDToTypeID("null"), ref38);
    desc977.putString(charIDToTypeID("Nm  "), name);
    executeAction(charIDToTypeID("Dplc"), desc977, DialogModes.NO);
    return activeDocument.channels.getByName(name);
}

function applyHueSat(hue, sat, light) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();

    // Master channel
    d2.putInteger(charIDToTypeID("H   "), hue);   // Hue: -180 .. +180
    d2.putInteger(charIDToTypeID("Strt"), sat);   // Saturation: -100 .. +100
    d2.putInteger(charIDToTypeID("Lght"), light); // Lightness: -100 .. +100

    d.putObject(charIDToTypeID("Adjs"), charIDToTypeID("Hst2"), d2);

    // gọi lệnh Hue/Saturation
    executeAction(charIDToTypeID("HStr"), d, DialogModes.NO);
}

function layerViaCopy1(nameLayer, targetLayer) {
    var layerDuplicate = doc.activeLayer.duplicate(targetLayer, ElementPlacement.PLACEBEFORE);
    layerDuplicate.name = nameLayer;
    doc.activeLayer = layerDuplicate;
    addMask();
    applyMask();
}

function layerViaCopy(nameLayer) {
    var idCpTL = charIDToTypeID("CpTL");
    executeAction(idCpTL, undefined, DialogModes.NO);
    activeDocument.activeLayer.name = nameLayer;
}

//Kiem tra ton tai channel với tên .....
function checkSelectionName(nameChannel) {
    var result = false;
    try {
        var channelRef = app.activeDocument.channels.getByName(nameChannel);
        if (channelRef) {
            result = true;
        }
    } catch (error) { }
    return result;
}

function shadowAndHighlight(shadow, highlight) {
    var idadaptCorrect = stringIDToTypeID("adaptCorrect");
    var desc6260 = new ActionDescriptor();
    var idsdwM = charIDToTypeID("sdwM");
    var desc6261 = new ActionDescriptor();
    var idAmnt = charIDToTypeID("Amnt");
    var idPrc = charIDToTypeID("#Prc");
    desc6261.putUnitDouble(idAmnt, idPrc, shadow);
    var idWdth = charIDToTypeID("Wdth");
    var idPrc = charIDToTypeID("#Prc");
    desc6261.putUnitDouble(idWdth, idPrc, 50.000000);
    var idRds = charIDToTypeID("Rds ");
    desc6261.putInteger(idRds, 30);
    var idadaptCorrectTones = stringIDToTypeID("adaptCorrectTones");
    desc6260.putObject(idsdwM, idadaptCorrectTones, desc6261);
    var idhglM = charIDToTypeID("hglM");
    var desc6262 = new ActionDescriptor();
    var idAmnt = charIDToTypeID("Amnt");
    var idPrc = charIDToTypeID("#Prc");
    desc6262.putUnitDouble(idAmnt, idPrc, highlight);
    var idWdth = charIDToTypeID("Wdth");
    var idPrc = charIDToTypeID("#Prc");
    desc6262.putUnitDouble(idWdth, idPrc, 50.000000);
    var idRds = charIDToTypeID("Rds ");
    desc6262.putInteger(idRds, 30);
    var idadaptCorrectTones = stringIDToTypeID("adaptCorrectTones");
    desc6260.putObject(idhglM, idadaptCorrectTones, desc6262);
    var idBlcC = charIDToTypeID("BlcC");
    desc6260.putDouble(idBlcC, 0.010000);
    var idWhtC = charIDToTypeID("WhtC");
    desc6260.putDouble(idWhtC, 0.010000);
    var idCntr = charIDToTypeID("Cntr");
    desc6260.putInteger(idCntr, 0);
    var idClrC = charIDToTypeID("ClrC");
    desc6260.putInteger(idClrC, 20);
    executeAction(idadaptCorrect, desc6260, DialogModes.NO);

}

function selectRGB() {
    // activeDocument.activeLayer = lyr;
    var idslct = charIDToTypeID("slct");
    var desc219 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref138 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idRGB = charIDToTypeID("RGB ");
    ref138.putEnumerated(idChnl, idChnl, idRGB);
    desc219.putReference(idnull, ref138);
    var idMkVs = charIDToTypeID("MkVs");
    desc219.putBoolean(idMkVs, false);
    executeAction(idslct, desc219, DialogModes.NO);
}

function loadSelectionByMask(id) {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(charIDToTypeID('Chnl'), stringIDToTypeID("selection"));
    desc1.putReference(charIDToTypeID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(charIDToTypeID('Chnl'), charIDToTypeID('Chnl'), charIDToTypeID('Msk '));
    ref2.putIdentifier(charIDToTypeID('Lyr '), id);
    desc1.putReference(charIDToTypeID('T   '), ref2);
    executeAction(charIDToTypeID('setd'), desc1, DialogModes.NO);
};
//Add selection channel 
//Add selection channel 
function addSelectionToChannelName(channelName) {
    var ch = doc.channels.getByName(channelName);
    doc.selection.store(ch, SelectionType.EXTEND);
}

function resizeImage(width, height) {
    WIDTH = width;
    HEIGHT = height;
    bounds = activeDocument.activeLayer.bounds;
    layerWidth = bounds[2].as('px') - bounds[0].as('px');
    layerHeight = bounds[3].as('px') - bounds[1].as('px');
    layerRatio = layerWidth / layerHeight;
    newWidth = WIDTH;
    newHeight = ((1.0 * WIDTH) / layerRatio);
    if (newHeight >= HEIGHT) {
        newWidth = layerRatio * HEIGHT;
        newHeight = HEIGHT;
    }
    resizePercent = newWidth / layerWidth * 100;
    app.activeDocument.activeLayer.resize(resizePercent, resizePercent, AnchorPosition.MIDDLECENTER);

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

function applyMask() {
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };

    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };

    var descriptor = new ActionDescriptor();
    var reference = new ActionReference();

    reference.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(c2t("null"), reference);
    descriptor.putBoolean(s2t("apply"), true);
    executeAction(s2t("delete"), descriptor, DialogModes.NO);
}
// --- Gọi thử ---

//Gry "Vlt "Bl  "Grn "Ylw "Orng" 
function setColorLayer(color) {
    var idsetd = charIDToTypeID("setd");
    var desc18 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref8 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref8.putEnumerated(idLyr, idOrdn, idTrgt);
    desc18.putReference(idnull, ref8);
    var idT = charIDToTypeID("T   ");
    var desc19 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var idClr = charIDToTypeID("Clr ");
    var idBl = charIDToTypeID(color);
    desc19.putEnumerated(idClr, idClr, idBl);
    var idLyr = charIDToTypeID("Lyr ");
    desc18.putObject(idT, idLyr, desc19);
    executeAction(idsetd, desc18, DialogModes.NO);
}


function cameraRawFilter(temp, tint) {
    var idAdobeCameraRawFilter = stringIDToTypeID("Adobe Camera Raw Filter");
    var desc = new ActionDescriptor();

    // White Balance: Custom
    desc.putEnumerated(charIDToTypeID("WBal"), charIDToTypeID("WBal"), charIDToTypeID("Cst "));

    // Temperature và Tint
    desc.putInteger(charIDToTypeID("Temp"), temp);  // Temperature +3
    desc.putInteger(charIDToTypeID("Tint"), tint);  // Tint +1

    // Thực thi Camera Raw Filter
    executeAction(idAdobeCameraRawFilter, desc, DialogModes.NO);

}
function showLevels() { executeAction(charIDToTypeID("Lvls"), undefined, DialogModes.ALL); }

//AutoVertical: 4:doc 3:ngang 5:canh tay 2:Ngang doc
function cameraRawFilterALL(temp, tint, contrast, texture, autoVertical, dialogModes) {
    var dialogMode = (dialogModes ? DialogModes.ALL : DialogModes.NO);
    cTID = function (s) { return app.charIDToTypeID(s); };
    sTID = function (s) { return app.stringIDToTypeID(s); };
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CrVe'), "17.5.1");
    desc1.putInteger(cTID('PrVN'), 6);
    desc1.putInteger(cTID('PrVe'), 251920384);
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), temp);
    desc1.putInteger(cTID('Tint'), tint);
    desc1.putInteger(cTID('Cr12'), contrast);
    desc1.putInteger(cTID('CrTx'), texture);
    desc1.putInteger(cTID('PerU'), autoVertical);
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
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

function convertSmart() {
    executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
}

function slectionSky() {
    function cTID(s) { return app.charIDToTypeID(s); }
    function sTID(s) { return app.stringIDToTypeID(s); }
    // Nhân bản kênh màu xanh dương
    function duplicateBlueChannel() {
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
        desc.putReference(cTID('null'), ref);
        executeAction(cTID('Dplc'), desc, DialogModes.NO);
    }
    // Điều chỉnh Levels
    function adjustLevels() {
        var desc = new ActionDescriptor();
        desc.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
        var adjList = new ActionList();
        var levelDesc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
        levelDesc.putReference(cTID('Chnl'), ref);
        var inputList = new ActionList();
        inputList.putInteger(179);
        inputList.putInteger(213);
        levelDesc.putList(cTID('Inpt'), inputList);
        adjList.putObject(cTID('LvlA'), levelDesc);
        desc.putList(cTID('Adjs'), adjList);
        executeAction(cTID('Lvls'), desc, DialogModes.ALL);
    }

    // Giao vùng chọn với kênh hiện tại
    function intersectSelection() {
        var desc = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
        desc.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putProperty(cTID('Chnl'), sTID("selection"));
        desc.putReference(cTID('With'), ref2);
        executeAction(cTID('Intr'), desc, DialogModes.NO);
    }

    function setSelection() {
        var desc = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID('Chnl'), sTID("selection"));
        desc.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
        desc.putReference(cTID('T   '), ref2);
        executeAction(cTID('setd'), desc, DialogModes.NO);
    }

    // Xóa kênh hiện tại
    function deleteChannel() {
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
        desc.putReference(cTID('null'), ref);
        executeAction(cTID('Dlt '), desc, DialogModes.NO);
    }

    // Thực thi các bước
    duplicateBlueChannel();
    adjustLevels();
    // invert();
    try {
        intersectSelection();
    } catch (error) {
        setSelection()
    }
    deleteChannel();
}

function fillColor(red, green, blue) {
    var myColor = new SolidColor()
    myColor.rgb.red = red // 0 - 255
    myColor.rgb.green = green
    myColor.rgb.blue = blue
    activeDocument.selection.fill(myColor)
}
function makeHue(hue, saturation, lightness) {
    // =======================================================
    var idMk = charIDToTypeID("Mk  ");
    var desc248 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1 = new ActionReference();
    var idAdjL = charIDToTypeID("AdjL");
    ref1.putClass(idAdjL);
    desc248.putReference(idnull, ref1);
    var idUsng = charIDToTypeID("Usng");
    var desc249 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc250 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID("presetKind");
    var idpresetKindType = stringIDToTypeID("presetKindType");
    var idpresetKindDefault = stringIDToTypeID("presetKindDefault");
    desc250.putEnumerated(idpresetKind, idpresetKindType, idpresetKindDefault);
    var idGeneratedPreset = stringIDToTypeID("GeneratedPreset");
    desc250.putBoolean(idGeneratedPreset, false);
    var idClrz = charIDToTypeID("Clrz");
    desc250.putBoolean(idClrz, false);
    var idHStr = charIDToTypeID("HStr");
    desc249.putObject(idType, idHStr, desc250);
    var idAdjL = charIDToTypeID("AdjL");
    desc248.putObject(idUsng, idAdjL, desc249);
    executeAction(idMk, desc248, DialogModes.NO);
    var idsetd = charIDToTypeID("setd");
    var desc262 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref2 = new ActionReference();
    var idAdjL = charIDToTypeID("AdjL");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref2.putEnumerated(idAdjL, idOrdn, idTrgt);
    desc262.putReference(idnull, ref2);
    var idT = charIDToTypeID("T   ");
    var desc263 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID("presetKind");
    var idpresetKindType = stringIDToTypeID("presetKindType");
    var idpresetKindCustom = stringIDToTypeID("presetKindCustom");
    desc263.putEnumerated(idpresetKind, idpresetKindType, idpresetKindCustom);
    var idAdjs = charIDToTypeID("Adjs");
    var list5 = new ActionList();
    var desc264 = new ActionDescriptor();
    var idH = charIDToTypeID("H   ");
    desc264.putInteger(idH, hue);
    var idStrt = charIDToTypeID("Strt");
    desc264.putInteger(idStrt, saturation);
    var idLght = charIDToTypeID("Lght");
    desc264.putInteger(idLght, lightness);
    var idHsttwo = charIDToTypeID("Hst2");
    list5.putObject(idHsttwo, desc264);
    desc263.putList(idAdjs, list5);
    var idHStr = charIDToTypeID("HStr");
    desc262.putObject(idT, idHStr, desc263);
    executeAction(idsetd, desc262, DialogModes.NO);
}

function makeColorBalance() {
    var idMk = charIDToTypeID("Mk  ");
    var desc494 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref55 = new ActionReference();
    var idAdjL = charIDToTypeID("AdjL");
    ref55.putClass(idAdjL);
    desc494.putReference(idnull, ref55);
    var idUsng = charIDToTypeID("Usng");
    var desc495 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc496 = new ActionDescriptor();
    var idShdL = charIDToTypeID("ShdL");
    var list38 = new ActionList();
    list38.putInteger(0);
    list38.putInteger(0);
    list38.putInteger(0);
    desc496.putList(idShdL, list38);
    var idMdtL = charIDToTypeID("MdtL");
    var list39 = new ActionList();
    list39.putInteger(0);
    list39.putInteger(0);
    list39.putInteger(0);
    desc496.putList(idMdtL, list39);
    var idHghL = charIDToTypeID("HghL");
    var list40 = new ActionList();
    list40.putInteger(0);
    list40.putInteger(0);
    list40.putInteger(0);
    desc496.putList(idHghL, list40);
    var idPrsL = charIDToTypeID("PrsL");
    desc496.putBoolean(idPrsL, true);
    var idClrB = charIDToTypeID("ClrB");
    desc495.putObject(idType, idClrB, desc496);
    var idAdjL = charIDToTypeID("AdjL");
    desc494.putObject(idUsng, idAdjL, desc495);
    executeAction(idMk, desc494, DialogModes.NO);
}

function makeColorAndVibrane() {
    var idMk = charIDToTypeID("Mk  ");
    var desc3908 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref180 = new ActionReference();
    var idAdjL = charIDToTypeID("AdjL");
    ref180.putClass(idAdjL);
    desc3908.putReference(idnull, ref180);
    var idUsng = charIDToTypeID("Usng");
    var desc3909 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc3910 = new ActionDescriptor();
    var iduseLegacy = stringIDToTypeID("useLegacy");
    desc3910.putBoolean(iduseLegacy, false);
    var idvibrance = stringIDToTypeID("vibrance");
    desc3909.putObject(idType, idvibrance, desc3910);
    var idAdjL = charIDToTypeID("AdjL");
    desc3908.putObject(idUsng, idAdjL, desc3909);
    executeAction(idMk, desc3908, DialogModes.NO);

}

function selectLayer(layerName) {
    var result = false;
    try {
        var idslct = charIDToTypeID("slct");
        var desc19 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        ref1.putName(idLyr, layerName);
        desc19.putReference(idnull, ref1);
        var idMkVs = charIDToTypeID("MkVs");
        desc19.putBoolean(idMkVs, false);
        var idLyrI = charIDToTypeID("LyrI");
        var list2 = new ActionList();
        list2.putInteger(10);
        desc19.putList(idLyrI, list2);
        executeAction(idslct, desc19, DialogModes.NO);
        result = true;
    } catch (error) {
        result = false;
    }

    return result;
}

function layerExists(layerName) {
    var ref = new ActionReference();
    ref.putName(charIDToTypeID("Lyr "), layerName);
    try {
        var desc = executeActionGet(ref);
        return true; // Tìm thấy layer
    } catch (e) {
        return false; // Không có layer
    }
}

// blendingOptions(0, 0, 255, 255, 0, 0, 180, 255);
function blendingOptions(srcBlackMin, srcBlackMax, srcWhiteMin, srcWhiteMax, destBlackMin, destBlackMax, destWhiteMin, Dstt) {
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };

    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };

    var descriptor = new ActionDescriptor();
    var descriptor2 = new ActionDescriptor();
    var descriptor3 = new ActionDescriptor();
    var list = new ActionList();
    var reference = new ActionReference();
    var reference2 = new ActionReference();

    reference.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(c2t("null"), reference);
    reference2.putEnumerated(s2t("channel"), s2t("channel"), s2t("gray"));
    descriptor3.putReference(s2t("channel"), reference2);
    descriptor3.putInteger(s2t("srcBlackMin"), srcBlackMin);
    descriptor3.putInteger(s2t("srcBlackMax"), srcBlackMax);
    descriptor3.putInteger(s2t("srcWhiteMin"), srcWhiteMin);
    descriptor3.putInteger(s2t("srcWhiteMax"), srcWhiteMax);
    descriptor3.putInteger(s2t("destBlackMin"), destBlackMin);
    descriptor3.putInteger(s2t("destBlackMax"), destBlackMax);
    descriptor3.putInteger(s2t("destWhiteMin"), destWhiteMin);
    descriptor3.putInteger(c2t("Dstt"), Dstt);
    list.putObject(s2t("blendRange"), descriptor3);
    descriptor2.putList(s2t("blendRange"), list);
    descriptor.putObject(s2t("to"), s2t("layer"), descriptor2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}


function hasLayerStyle(layer) {
    // alert(layer)
    var ref = new ActionReference();
    ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("layerEffects"));
    ref.putIdentifier(stringIDToTypeID("layer"), layer.id);
    try {
        var desc = executeActionGet(ref);
        return desc.hasKey(stringIDToTypeID("layerEffects"));
    } catch (e) {
        return false;
    }
}

function processPreset(valuePreset, withDialog) {
    switch (parseInt(valuePreset)) {
        case 0:
            // alert("Preset Indoor");
            cameraRawIndor(withDialog);
            break;
        case 1:
            // alert("Preset Indoor Trắng xám");
            cameraRawIndorWhiteGray(withDialog);
            break;
        case 2:
            // alert("Preset Indoor BWPD");
            cameraRawIndorBWPD(withDialog);
            break;
        case 3:
            // alert("Preset Outdoor");
            cameraRawOutdoor(withDialog);
            break;
        case 4:
            // alert("Preset Outdoor BWPD");
            cameraRawOutdoorBWPD(withDialog);
            break;
        default:
            break;
    }
}

// Preset Indoor
function cameraRawIndor(withDialog) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 5);//shadow
        a.putInteger(charIDToTypeID('CrTx'), 15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze
        a.putInteger(charIDToTypeID('Shrp'), 0);//Sharpening
        a.putDouble(charIDToTypeID('ShpR'), 0);//Radius
        a.putInteger(charIDToTypeID('ShpD'), 0);//Detail
        a.putInteger(charIDToTypeID('ShpM'), 0);//Masking
        a.putInteger(charIDToTypeID('LNR '), 0);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 0);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }

}

// Preset Indoor trắng xám
function cameraRawIndorWhiteGray(withDialog) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 2);//temp
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 5);//shadow
        a.putInteger(charIDToTypeID('CrTx'), 15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze
        a.putInteger(charIDToTypeID('Shrp'), 0);//Sharpening
        a.putDouble(charIDToTypeID('ShpR'), 0);//Radius
        a.putInteger(charIDToTypeID('ShpD'), 0);//Detail
        a.putInteger(charIDToTypeID('ShpM'), 0);//Masking
        a.putInteger(charIDToTypeID('LNR '), 0);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 0);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Indoor BWPD
function cameraRawIndorBWPD(withDialog) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('Cr12'), 9);//contract
        a.putInteger(charIDToTypeID('Hi12'), -4);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 0);//shadow
        a.putInteger(charIDToTypeID('Wh12'), 0);//white 
        a.putInteger(charIDToTypeID('CrTx'), 0);//texture
        a.putInteger(charIDToTypeID('Cl12'), 7);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 7);//Dehaze
        a.putInteger(charIDToTypeID('LNR '), 0);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 0);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Outdoor BWPD
function cameraRawOutdoorBWPD(withDialog) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('PrVN'), 6);// Process Version
        a.putEnumerated(charIDToTypeID('WBal'), charIDToTypeID('WBal'), charIDToTypeID('Cst ')); // White Balance: Custom
        a.putInteger(charIDToTypeID('Temp'), 0);//temp
        a.putInteger(charIDToTypeID('tint'), -1);//tint
        a.putInteger(charIDToTypeID('Cr12'), 5);//contract
        a.putInteger(charIDToTypeID('Hi12'), -17);//highlight
        a.putInteger(charIDToTypeID('Sh12'), +15);//shadow
        a.putInteger(charIDToTypeID('CrTx'), -15);//texture
        a.putInteger(charIDToTypeID('Cl12'), 2);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 2);//Dehaze
        a.putInteger(charIDToTypeID('LNR '), 12);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract
        a.putInteger(charIDToTypeID('DfPA'), 0);//Purple Amount
        a.putInteger(charIDToTypeID('DPHL'), 30);//Purple Hue (in)
        a.putInteger(charIDToTypeID('DPHH'), 70);//Purple Hue (out)
        a.putInteger(charIDToTypeID('DfGA'), 0);//Green Amount
        a.putInteger(charIDToTypeID('DPGL'), 40);//Green Hue (in)
        a.putInteger(charIDToTypeID('DPGH'), 60);//Green Hue (out)
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

// Preset Outdoor
function cameraRawOutdoor(temp, withDialog, vertical) {
    try {
        var a = new ActionDescriptor();
        a.putInteger(charIDToTypeID('Cr12'), 5);//contract
        a.putInteger(charIDToTypeID('Hi12'), -15);//highlight
        a.putInteger(charIDToTypeID('Sh12'), 20);//shadow
        a.putInteger(charIDToTypeID('Temp'), temp);//temp
        a.putInteger(charIDToTypeID('Tint'), -1);
        a.putInteger(charIDToTypeID('Cl12'), 4);//Clarity
        a.putInteger(charIDToTypeID('Dhze'), 6);//Dehaze
        a.putInteger(charIDToTypeID('LNR '), 12);//Noise Reduction
        a.putInteger(charIDToTypeID('LNRD'), 50);//Detail Noise Reduction
        a.putInteger(charIDToTypeID('LNRC'), 0);//Contract Noise Reduction

        // 🔥 Auto Vertical
        a.putInteger(charIDToTypeID('PerU'), vertical);
        // 0 = Off
        // 1 = Auto        // 🔥 tự động toàn diện (nên dùng)
        // 2 = Level       // chỉ cân bằng ngang
        // 3 = Vertical    // chỉ chỉnh dọc
        // 4 = Full        // mạnh hơn Auto
        executeAction(stringIDToTypeID('Adobe Camera Raw Filter'), a, withDialog ? DialogModes.ALL : DialogModes.NO);
    } catch (error) {
        doc.activeLayer.remove();
    }
}

//Color -100 -> 100
// HUE
// a.putInteger(stringIDToTypeID('hueR'), 0);  // Reds
// a.putInteger(stringIDToTypeID('hueO'), 0);  // Oranges
// a.putInteger(stringIDToTypeID('hueY'), 0);  // Yellows
// a.putInteger(stringIDToTypeID('hueG'), 0);  // Greens
// a.putInteger(stringIDToTypeID('hueA'), 0);  // Aquas
// a.putInteger(stringIDToTypeID('hueB'), 0);  // Blues
// a.putInteger(stringIDToTypeID('hueP'), 0);  // Purples
// a.putInteger(stringIDToTypeID('hueM'), 0);  // Magentas

// SATURATION
// a.putInteger(stringIDToTypeID('satR'), 0);  // Reds
// a.putInteger(stringIDToTypeID('satO'), -23); // Oranges
// a.putInteger(stringIDToTypeID('satY'), 0);  // Yellows
// a.putInteger(stringIDToTypeID('satG'), 0);  // Greens
// a.putInteger(stringIDToTypeID('satA'), 0);  // Aquas
// a.putInteger(stringIDToTypeID('satB'), -21); // Blues
// a.putInteger(stringIDToTypeID('satP'), 0);  // Purples
// a.putInteger(stringIDToTypeID('satM'), 0);  // Magentas

// LUMINANCE
// a.putInteger(stringIDToTypeID('lumR'), 0);  // Reds
// a.putInteger(stringIDToTypeID('lumO'), 0);  // Oranges
// a.putInteger(stringIDToTypeID('lumY'), 0);  // Yellows
// a.putInteger(stringIDToTypeID('lumG'), 0);  // Greens
// a.putInteger(stringIDToTypeID('lumA'), 0);  // Aquas
// a.putInteger(stringIDToTypeID('lumB'), 0);  // Blues
// a.putInteger(stringIDToTypeID('lumP'), 0);  // Purples
// a.putInteger(stringIDToTypeID('lumM'), 0);  // Magentas


// #target photoshop

function getPathPoints() {
    var doc = app.activeDocument;
    var path = doc.pathItems[0];
    var pts = path.subPathItems[0].pathPoints;

    if (pts.length != 4) {
        alert("Path phải có đúng 4 điểm");
        return null;
    }

    var p = [];
    for (var i = 0; i < 4; i++) {
        p.push([
            pts[i].anchor[0],
            pts[i].anchor[1]
        ]);
    }

    return p;
}

function distance(a, b) {
    var dx = b[0] - a[0];
    var dy = b[1] - a[1];
    return Math.sqrt(dx * dx + dy * dy);
}

function angle(a, b) {
    return Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
}

function transformLayer(points) {

    var doc = app.activeDocument;
    var layer = doc.activeLayer;

    var bounds = layer.bounds;

    var x1 = bounds[0].as("px");
    var y1 = bounds[1].as("px");
    var x2 = bounds[2].as("px");
    var y2 = bounds[3].as("px");

    var w = x2 - x1;
    var h = y2 - y1;

    var p1 = points[0];
    var p2 = points[1];
    var p4 = points[3];

    var targetW = distance(p1, p2);
    var targetH = distance(p1, p4);

    var scaleX = (targetW / w) * 100;
    var scaleY = (targetH / h) * 100;

    var rot = angle(p1, p2);

    layer.resize(scaleX, scaleY, AnchorPosition.TOPLEFT);
    layer.rotate(rot, AnchorPosition.TOPLEFT);

    layer.translate(p1[0] - x1, p1[1] - y1);
}

function loadAction(actionName, action) {
    //--------------------------------------------------------------------------------------------------------

    try {
        //code tim thu muc, khong can quan tam.
        if (typeof jamActions !== 'object') { var jamActions = {}; (function () { jamActions.isActionsFile = function (file) { return (file.type === '8BAC') || file.name.match(/\.atn$/i); }; jamActions.isActionsPalette = function (file) { return ((file.type === '8BPF') && file.name.match(/^Actions Palette$/i)) || file.name.match(/^Actions Palette.psp$/i); }; function readBEInt(file, byteCount) { var bytes = file.read(byteCount); var intValue = 0; for (var index = 0; index < byteCount; index++) { intValue = (intValue << 8) + bytes.charCodeAt(index); } return intValue; } function readBytes(file, byteCount) { return file.read(byteCount); } function readByteString(file) { var stringLength = readBEInt(file, 4); return readBytes(file, stringLength); } function readUnicodeString(file) { var unicodeString = ""; var unicodeLength = readBEInt(file, 4); for (var index = 0; index < unicodeLength; index++) { var unicodeChar = readBEInt(file, 2); if (unicodeChar !== 0) { unicodeString += String.fromCharCode(unicodeChar); } } return unicodeString; } function readEventId(file) { var eventId = 0; var eventType = readBytes(file, 4); switch (eventType) { case 'TEXT': eventId = app.stringIDToTypeID(readByteString(file)); break; case 'long': eventId = app.charIDToTypeID(readBytes(file, 4)); break; default: throw new Error("[jamActions readEventId] Unrecognized event type: '" + eventType + "'"); break; } return eventId; } function skipDouble(file) { file.seek(8, 1); } function skipDoubles(file, doubleCount) { file.seek(doubleCount * 8, 1); } function skipInt8(file) { file.seek(1, 1); } function skipInt16(file) { file.seek(2, 1); } function skipInt32(file) { file.seek(4, 1); } function skipInt64(file) { file.seek(8, 1); } function skipBytes(file, byteCount) { file.seek(byteCount, 1); } function skipByteString(file) { var stringLength = readBEInt(file, 4); skipBytes(file, stringLength); } function skipUnicodeString(file) { var unicodeLength = readBEInt(file, 4); skipBytes(file, unicodeLength * 2); } function skipId(file) { var idLength = readBEInt(file, 4); if (idLength) { skipBytes(file, idLength); } else { skipBytes(file, 4); } } function skipClass(file) { skipUnicodeString(file); skipId(file); } function skipObject(file) { skipClass(file); var itemCount = readBEInt(file, 4); for (var itemIndex = 0; itemIndex < itemCount; itemIndex++) { skipId(file); skipItem(file); } } function skipList(file) { var itemCount = readBEInt(file, 4); for (var itemIndex = 0; itemIndex < itemCount; itemIndex++) { skipItem(file); } } function skipItem(file) { var typeId = readBytes(file, 4); switch (typeId) { case 'obj ': skipReference(file); break; case 'Objc': case 'GlbO': skipObject(file); break; case 'type': case 'GlbC': skipClass(file); break; case 'VlLs': skipList(file); break; case 'doub': skipDouble(file); break; case 'UntF': skipBytes(file, 4); skipDouble(file); break; case 'TEXT': skipUnicodeString(file); break; case 'enum': skipId(file); skipId(file); break; case 'long': skipInt32(file); break; case 'comp': skipInt64(file); break; case 'bool': skipInt8(file); break; case 'alis': skipByteString(file); break; case 'Pth ': skipByteString(file); break; case 'tdta': skipByteString(file); break; case 'ObAr': var objCount = readBEInt(file, 4); skipClass(file); var itemCount = readBEInt(file, 4); for (var itemIndex = 0; itemIndex < itemCount; itemIndex++) { skipId(file); skipInt32(file); skipInt32(file); var doublesCount = readBEInt(file, 4); skipDoubles(file, doublesCount); } break; default: throw new Error("[jamActions skipItem] Unrecognized item type: '" + typeId + "'"); break; } } function skipReference(file) { var itemCount = readBEInt(file, 4); for (var itemIndex = 0; itemIndex < itemCount; itemIndex++) { var formId = readBytes(file, 4); skipClass(file); switch (formId) { case 'Clss': break; case 'prop': skipId(file); break; case 'Enmr': skipId(file); skipId(file); break; case 'rele': skipInt32(file); break; case 'Idnt': skipInt32(file); break; case 'indx': skipInt32(file); break; case 'name': skipUnicodeString(file); break; default: throw new Error("[jamActions skipReference] Unrecognized item form: '" + formId + "'"); break; } } } jamActions.readActionDescriptor = function (file, insertVersionPrefix) { var versionPrefix = "\x00\x00\x00\x10"; var start = file.tell(); if (!insertVersionPrefix) { if (file.read(4) === versionPrefix) { versionPrefix = ""; } else { throw new Error('[jamActions.readActionDescriptor] Unrecognized version prefix'); } } skipObject(file); var end = file.tell(); file.seek(start, 0); var stream = versionPrefix + file.read(end - start); var actionDescriptor = new ActionDescriptor(); actionDescriptor.fromStream(stream); return actionDescriptor; }; jamActions.dataFromActionsFile = function (actionsFile, isPalette) { var that = this; function parseActionSet(file) { var actionSet = {}; actionSet.name = localize(readUnicodeString(file)); actionSet.expanded = (readBEInt(file, 1) !== 0); var actionCount = readBEInt(file, 4); actionSet.actions = []; for (var actionIndex = 0; actionIndex < actionCount; actionIndex++) { var action = {}; action.functionKey = readBEInt(file, 2); action.shiftKey = (readBEInt(file, 1) !== 0); action.commandKey = (readBEInt(file, 1) !== 0); action.colorIndex = readBEInt(file, 2); action.name = localize(readUnicodeString(file)); action.expanded = (readBEInt(file, 1) !== 0); var commandCount = readBEInt(file, 4); action.commands = []; for (var commandIndex = 0; commandIndex < commandCount; commandIndex++) { var command = {}; command.expanded = (readBEInt(file, 1) !== 0); command.enabled = (readBEInt(file, 1) !== 0); command.withDialog = (readBEInt(file, 1) !== 0); command.dialogOptions = readBEInt(file, 1); command.eventId = readEventId(file); command.dictionaryName = readByteString(file); if (readBEInt(file, 4) !== 0) { command.actionDescriptor = that.readActionDescriptor(file, true); } action.commands.push(command); } actionSet.actions.push(action); } return actionSet; } var file; if (typeof actionsFile === 'string') { file = new File(actionsFile); } else if (actionsFile instanceof File) { file = actionsFile; } else { throw new Error('[jamActions.dataFromActionsFile] Invalid argument'); } var fileData; if (file.open("r")) { try { file.encoding = 'BINARY'; var fileVersion = readBEInt(file, 4); if (fileVersion === 16) { fileData = {}; fileData.version = fileVersion; if (isPalette) { fileData.actionSets = []; var actionSetCount = readBEInt(file, 4); for (var actionSetIndex = 0; actionSetIndex < actionSetCount; actionSetIndex++) { fileData.actionSets.push(parseActionSet(file)); } } else { fileData.actionSet = parseActionSet(file); } } else { fileData = "Unsupported actions file version: " + fileVersion; } } catch (e) { fileData = e.message; } finally { file.close(); } } else { fileData = "Cannot open file"; } return fileData; }; jamActions.isLocalPlayCommand = function (command, actionSetName) { var localPlayCommand = null; if (command.eventId === app.stringIDToTypeID("play")) { var targetId = app.stringIDToTypeID("target"); if (command.actionDescriptor.hasKey(targetId)) { var localReference = command.actionDescriptor.getReference(targetId); do { try { var desiredClassId = localReference.getDesiredClass(); } catch (e) { break; } switch (desiredClassId) { case app.stringIDToTypeID("command"): var localCommandIndex = localReference.getIndex() - 1; break; case app.stringIDToTypeID("action"): var localActionName = localReference.getName(); break; case app.stringIDToTypeID("actionSet"): var localActionSetName = localReference.getName(); break; } localReference = localReference.getContainer(); } while (localReference); } var continueId = app.stringIDToTypeID("continue"); if (command.actionDescriptor.hasKey(continueId)) { var localContinue = command.actionDescriptor.getBoolean(continueId); } if ((typeof localActionSetName !== 'undefined') && (localActionSetName === actionSetName)) { localPlayCommand = [localActionName, localCommandIndex, localContinue]; } } return localPlayCommand; }; jamActions.determineDialogMode = function (command) { var dialogMode; switch (command.dialogOptions) { case 0: dialogMode = command.withDialog ? DialogModes.ALL : DialogModes.NO; break; case 2: dialogMode = DialogModes.NO; break; case 1: case 3: dialogMode = DialogModes.ALL; break; } return dialogMode; }; var globalCommandHandler = null; jamActions.setCommandHandler = function (commandHandler) { globalCommandHandler = commandHandler; }; jamActions.traverseAction = function (actionSet, actionLocator, fromCommandIndex, continuePlay) { function handleCommands(commands) { var commandMax = (continuePlay) ? commands.length : fromCommandIndex + 1; for (var commandIndex = fromCommandIndex; commandIndex < commandMax; commandIndex++) { if (globalCommandHandler !== null) { globalCommandHandler(commands[commandIndex]); } } } if (typeof fromCommandIndex === 'undefined') { fromCommandIndex = 0; continuePlay = true; } var actions = actionSet.actions; if (typeof actionLocator === 'string') { var actionName = actionLocator; for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) { var action = actions[actionIndex]; if (action.name === actionName) { handleCommands(action.commands); break; } } } else if (typeof actionLocator === 'number') { var actionIndex = actionLocator; if ((actionIndex >= 0) && (actionIndex < actions.length)) { handleCommands(actions[actionIndex].commands); } } }; }()); }
        //quan tam doan nay, giup loa action
        if (documents.length) {
            Folder.current = new Folder(thePathActions);
            var actionsFilePath = action;
            var ActionName = actionName;

            var fileData = jamActions.dataFromActionsFile(actionsFilePath);
            function executeCommand(command, ActionName) {
                if (command.enabled) {
                    var dialogMode = jamActions.determineDialogMode(command);
                    app.executeAction(command.eventId, command.actionDescriptor, dialogMode);
                }
            }
            jamActions.setCommandHandler(executeCommand);
            jamActions.traverseAction(fileData.actionSet, ActionName);
        };
    }
    catch (e) { }
}

