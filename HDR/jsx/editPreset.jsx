    var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxtPreset);
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
            "Preset Indoor trắng xám",
            "Preset Indoor BWPD",
            "Preset Outdoor",
            "Preset Outdoor BWPD",
            "Preset Outdoor MLP",
            "Preset Indoor MLP",
            "Preset Indoor MLP trắng xám",
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
            var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxtPreset);
            txtFile.encoding = "UTF8";
            txtFile.open("w");
            txtFile.write(chosenPreset.toString());
            txtFile.close();
        }
        dialog.show();
    }
