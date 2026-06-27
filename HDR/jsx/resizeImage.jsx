var nameJson = "/resizeImage.json";
var valuePreset = null;
var withDialog = false;
var temp = 0;
var value = 33;
var jsonFile = new File(scriptFolder.fsName + "/Data" + nameJson);
(function main() {
    // if (doc.width <= 3000) return;
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
                if (flagresize == true) {
                    saveResize(value);
                }
            }
            doc.selection.load(doc.channels.getByName("SelectionTemp"));
            doc.channels.getByName("SelectionTemp").remove();
        } else {
            if (doc.width != parseInt(localData.width)) {
                resizeDocument(localData.width, localData.height, null);
            } else {
                jsonFile.remove();
                if (flagresize == true) {
                    saveResize(value);
                }
            }
        }
    } else {
        // alert("Không tìm thấy dữ liệu resize trước đó. Vui lòng thực hiện thao tác resize trước khi finalize!");
        saveResize(value);
    }
    purgeHistory();
    return true;
})();

function saveResize(percentResize) {
    // Lưu lựa chọn vào file Json
    // alert(parseInt(doc.width));
    var valueSizeImages = { width: parseInt(doc.width), height: parseInt(doc.height), nameDocument: doc.name };
    if (hasSelection()) {
        saveAlphaChnl("SelectionTemp");
        doc.resizeImage(UnitValue(1500, "px"), UnitValue(1300, "px"), null, ResampleMethod.BICUBIC);
        // resizeImagePercent(percentResize);
        doc.selection.load(doc.channels.getByName("SelectionTemp"));
        doc.channels.getByName("SelectionTemp").remove();
    } else {
        doc.resizeImage(UnitValue(1500, "px"), UnitValue(1300, "px"), null, ResampleMethod.BICUBIC);
        // resizeImagePercent(percentResize);
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