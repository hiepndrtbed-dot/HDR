var nameTxt = "/Preset.txt";
var nameFileJson = "/resizeImage.json";
var valuePreset = null;
var temp = 0;
(function main() {
    purgeAll();
    var jsonFile = new File(scriptFolder.fsName + "/Data" + nameFileJson);
    if (jsonFile.exists) {
        // alert("Resize về kích thước gốc!");
        var flagResize = $.evalFile(currentFolder + "/resizeImage.jsx");
        if (flagResize) {
            jsonFile.remove();
        } else {
            return;
        }
        // purgeAll();
    }
    var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxt);
    if (txtFile.exists) {
        txtFile.encoding = "UTF8"; // hoặc "ASCII" nếu file không có dấu tiếng Việt
        txtFile.open("r"); // "r" = read
        var contentFile = txtFile.read();
        txtFile.close();
        valuePreset = contentFile;
    } else {
        // Tạo file TXT cùng thư mục
        // Tạo một cửa sổ dialog
        var dialog = new Window("dialog", "Chose Preset...");
        dialog.alignChildren = "left";
        dialog.orientation = "column";

        // Panel chứa radio button
        var radioGroup = dialog.add("panel", undefined, "Chọn Preset");
        radioGroup.orientation = "column";
        radioGroup.alignChildren = "left";

        // Mảng các lựa chọn
        var presets = [
            "Preset Indoor",
            "Preset Indoor Trắng xám",
            "Preset Indoor BWPD",
            "Preset Outdoor",
            "Preset Outdoor BWPD",
        ];

        // Sinh radio button từ mảng
        var radios = [];
        for (var i = 0; i < presets.length; i++) {
            radios[i] = radioGroup.add("radiobutton", undefined, presets[i]);
        }

        // Đặt mặc định chọn radio đầu tiên
        radios[0].value = true;

        // Nhóm nút OK/Cancel
        var buttonGroup = dialog.add("group");
        buttonGroup.alignment = "right";
        var saveButton = buttonGroup.add("button", undefined, "OK");
        var cancelButton = buttonGroup.add("button", undefined, "Cancel");

        // Xử lý khi nhấn OK
        saveButton.onClick = function () {
            dialog.close();
            var chosenPreset = "";
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].value) {
                    chosenPreset = i;
                    break;
                }
            }
            // Lưu lựa chọn vào file TXT
            valuePreset = chosenPreset;
            var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxt);
            txtFile.encoding = "UTF8";
            txtFile.open("w");
            txtFile.write(chosenPreset.toString());
            txtFile.close();
        }
        dialog.show();
    }
    if (valuePreset == 1) { // kiem tra neu la preset trang xam
        temp = 2;
    }
    doc.activeLayer = doc.layers[0];
    doc.artLayers.add();
    var withDialog = true;
    if (layerExists("Sky")) {
        doc.layers.getByName("Sky").visible = false;
        mergeVisible();
        doc.activeLayer.move(doc.layers.getByName("Sky"), ElementPlacement.PLACEAFTER);
        doc.layers.getByName("Sky").visible = true;
        doc.activeLayer.name = "CHECK";
        try {//bat loi khong thay doi thong so
            showCurves();
            doc.activeLayer = doc.layers[0];
            mergeVisible();
            doc.activeLayer.name = "FINALIZE";
            // alert("Check VERTICAL && CAMERA!!");
            cameraRawFilterALL(temp, 0, 0, 0, 4, withDialog);
            doc.artLayers.getByName("CHECK").remove();
        } catch (error) {
            doc.artLayers.getByName("CHECK").remove();
        }
    } else {
        mergeVisible();
        doc.activeLayer.name = "FINALIZE";
        try {//bat loi khong thay doi thong so
            showCurves();
            // alert("Check VERTICAL && CAMERA!!");
            // cameraRawIndor(2, true);
            cameraRawFilterALL(temp, 0, 0, 0, 4, withDialog);
        } catch (error) {
            doc.artLayers.getByName("FINALIZE").remove();
        }
    }
})();

function mergeVisible() {
    var idMrgV = charIDToTypeID("MrgV");
    var desc25388 = new ActionDescriptor();
    var idDplc = charIDToTypeID("Dplc");
    desc25388.putBoolean(idDplc, true);
    executeAction(idMrgV, desc25388, DialogModes.NO);
}

function showCurves() { executeAction(charIDToTypeID("Crvs"), undefined, DialogModes.ALL); }


