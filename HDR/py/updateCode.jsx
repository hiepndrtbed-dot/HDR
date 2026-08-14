#target photoshop
// alert("update code");
var currentFolder = File($.fileName).parent;
//run update.exe
// alert(1)
var exe = File(currentFolder.fsName + "/dist/update.exe");
// alert(exe)
//run update.py
// var exe = File(currentFolder.fsName + "/update.py");
if (exe.exists) {
    exe.execute();
}
else {
    alert(
        "Cannot find:\n" +
        exe.fsName
    );
}