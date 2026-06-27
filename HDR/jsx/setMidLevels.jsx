    //Kiem tra levels;
    var txtFileLV = new File(scriptFolder.fsName + "/Data" + nameTxtLV);
    if (txtFileLV.exists) {
        txtFileLV.encoding = "UTF8"; // hoặc "ASCII" nếu file không có dấu tiếng Việt
        txtFileLV.open("r"); // "r" = read
        var contentFile = txtFileLV.read();
        txtFileLV.close();
        middleLevelsValue = contentFile;
    } else {
        // Tạo file TXT cùng thư mục
        // Tạo một cửa sổ dialog
        var dialog = new Window("dialog", "Change Levels ...");
        dialog.alignChildren = "left";
        dialog.orientation = "column";

        //Custom name
        var customName = dialog.add("group");
        customName.add("statictext", undefined, "Add MidLevels: ");
        var inputCustomName = customName.add("edittext", undefined, "", { multiline: false });
        inputCustomName.preferredSize.width = 100;
        inputCustomName.text = middleLevelsValue;

        var buttonGroup = dialog.add("group");
        buttonGroup.alignment = "right";
        var cancelButton = buttonGroup.add("button", undefined, "Cancel");

        cancelButton.onClick = function () {
            dialog.close();
        };

        var saveButton = buttonGroup.add("button", undefined, "Process");

        saveButton.onClick = function () {
            dialog.close();
            var nameCustom = inputCustomName.text;
            middleLevelsValue = parseFloat(nameCustom);
            var txtFileLV = new File(scriptFolder.fsName + "/Data" + nameTxtLV);
            txtFileLV.encoding = "UTF8";
            txtFileLV.open("w");
            txtFileLV.write(decodeURI(middleLevelsValue));
            txtFileLV.close();
        }
        dialog.show();
    }