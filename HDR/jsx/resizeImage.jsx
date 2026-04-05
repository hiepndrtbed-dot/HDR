var nameJson = "/resizeImage.json";
var valuePreset = null;
var withDialog = false;
var temp = 0;
var value = 50;
var jsonFile = new File(scriptFolder.fsName + "/Data" + nameJson);
(function main() {
    purgeAll();
    if (jsonFile.exists) {
        jsonFile.open("r");
        var localData = JSON.parse(jsonFile.read());
        jsonFile.close();
        if (localData.nameDocument != doc.name) {
            alert("Về files ** " + localData.nameDocument + " ** để thực hiện nhé!");
            return false;
        }
        if (hasSelection()) {
            saveAlphaChnl("SelectionTemp");
            if (doc.width != parseInt(localData.width)) {
                resizeDocument(localData.width, localData.height, null);
            } else {
                jsonFile.remove();
                alert("Đã xóa dữ liệu resize trước đó.");
            }
            doc.selection.load(doc.channels.getByName("SelectionTemp"));
            doc.channels.getByName("SelectionTemp").remove();
        } else {
            if (doc.width != parseInt(localData.width)) {
                resizeDocument(localData.width, localData.height, null);
                // jsonFile.remove();
            } else {
                jsonFile.remove();
                alert("Đã xóa dữ liệu resize trước đó.");
            }
        }
    } else {
        saveResize();
    }
    purgeHistory();
    return true;
})();

function saveResize() {
    // Lưu lựa chọn vào file Json
    // alert(parseInt(doc.width));
    var valueSizeImages = { width: parseInt(doc.width), height: parseInt(doc.height), nameDocument: doc.name };
    if (hasSelection()) {
        saveAlphaChnl("SelectionTemp");
        resizeImagePercent(33);
        doc.selection.load(doc.channels.getByName("SelectionTemp"));
        doc.channels.getByName("SelectionTemp").remove();
    } else {
        resizeImagePercent(33);
    }
    jsonFile.encoding = "UTF8";
    jsonFile.open("w");
    jsonFile.write(JSON.stringify(valueSizeImages, null, 2));
    jsonFile.close();
}

function resizeDocument(width, height, resolution) {
    var doc = app.activeDocument;

    // Resize image (width, height, resolution, resample method)
    doc.resizeImage(
        UnitValue(width, "px"),   // new width
        UnitValue(height, "px"),   // new height
        resolution,                     // resolution (dpi)
        // ResampleMethod.BICUBIC // resampling method
    );
}