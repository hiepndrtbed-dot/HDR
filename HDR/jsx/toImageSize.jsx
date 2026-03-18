
if (selectLayer("Layer check resize (No Delete)")) {
    // alert("Khi có thông báo này, kích thước Document đang giảm đi 50%")
    doc.activeLayer.allLocked = false;
    doc.activeLayer.remove();
    if (hasSelection()) {
        saveAlphaChnl("SelectionTemp");
    }
    resizeImagePercent(200);
    try {
        doc.selection.load(doc.channels.getByName("SelectionTemp"));
        doc.channels.getByName("SelectionTemp").remove();
    } catch (error) { }
    // alert("Document đã đưa về đúng kích thước gốc. Kiểm tra các bước trước đó đã làm đúng logic chưa, nếu chưa phải làm lại ảnh để không bị lỗi.")
}
