var nameTxt = "/resizeImage.txt";
var valuePreset = null;
var withDialog = false;
var temp = 0;
var value = 50;
(function main() {
    purgeAll();
    var txtFile = new File(scriptFolder.fsName + "/Data" + nameTxt);
    if (txtFile.exists) {
        if (hasSelection()) {
            saveAlphaChnl("SelectionTemp");
            resizeImagePercent(200);
            txtFile.remove();
            doc.selection.load(doc.channels.getByName("SelectionTemp"));
            doc.channels.getByName("SelectionTemp").remove();
        } else {
            resizeImagePercent(200);
            txtFile.remove();
        }
    } else {
        // Lưu lựa chọn vào file TXT
        resizeImagePercent(50);
        txtFile.encoding = "UTF8";
        txtFile.open("w");
        txtFile.write(value.toString());
        txtFile.close();
    }
})();
