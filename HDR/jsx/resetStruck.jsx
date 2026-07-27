try {
    deselectPath();
    selectRGB();
    doc.activeLayer = doc.layers[0];
} catch (error) {
    alert("Lỗi: " + error.message);
 }