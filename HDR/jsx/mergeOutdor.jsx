var nameTxt = "/Preset.txt";
var valuePreset = null;
var withDialog = false;
(function main() {
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

    //process
    //Create file window temp
    selectChoseMultiLayer(doc.layers[0].name, doc.layers[doc.layers.length - 1].name);
    doc.activeLayer.name = "MERGE 1";
    convertSmart();
    alert("Check VERTICAL && CAMERA")
    cameraRawOutdoor(3, true, 4);
    shadowAndHighlight(0,0);

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



cameraRawFilterALL