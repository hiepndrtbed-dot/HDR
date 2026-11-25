//Kiem tra levels;
var flagLevels = true;
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
    inputCustomName.text = 0;


    var listGroup = dialog.add("group");
    listGroup.orientation = "row";
    listGroup.alignChildren = "left";

    // Các nội dung checkbox
    var valueMidLevels = [0.8, 0.9, 1.0, 1.1, 1.2];

    // Tạo các checkbox động
    var checkboxes = [];
    for (var i = 0; i < valueMidLevels.length; i++) {
        var cb = listGroup.add("radiobutton", undefined, valueMidLevels[i]);
        if (i == 2) cb.value = true; // Mặc định chọn checkbox thứ 3 (1.0);
        checkboxes.push(cb);
    }
    var buttonGroup = dialog.add("group");
    buttonGroup.alignment = "right";

    var saveButton = buttonGroup.add("button", undefined, "Process");
    saveButton.active = true; // Đặt nút "Process" là nút mặc định
    var cancelButton = buttonGroup.add("button", undefined, "Cancel");

    for (var j = 0; j < checkboxes.length; j++) {
        checkboxes[j].onClick = function () {
            inputCustomName.text = this.text; // Cập nhật giá trị của inputCustomName khi checkbox được chọn
        }; // Kích hoạt sự kiện onClick của checkbox được chọn
    }
    
    saveButton.onClick = function () {
        dialog.close();
        if (inputCustomName.text != 0) {
            var nameCustom = inputCustomName.text;
        } else {
            for (var j = 0; j < checkboxes.length; j++) {
                if (checkboxes[j].value) {

                    var nameCustom = valueMidLevels[j];
                }
            }
        }
        middleLevelsValue = parseFloat(nameCustom);
        if (statusLevels == true) {
            var txtFileLV = new File(scriptFolder.fsName + "/Data" + nameTxtLV);
            txtFileLV.encoding = "UTF8";
            txtFileLV.open("w");
            txtFileLV.write(decodeURI(middleLevelsValue));
            txtFileLV.close();
        }
    }
    cancelButton.onClick = function () {
        flagLevels = false;
        dialog.close();
    };
    dialog.show();
}