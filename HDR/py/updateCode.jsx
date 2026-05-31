#target photoshop
// alert("update code");
var currentFolder = File($.fileName).parent;
var exe = File(
    currentFolder.fsName +
    "/dist/update.exe"
);

if (exe.exists)
{
    exe.execute();
}
else
{
    alert(
        "Cannot find:\n" +
        exe.fsName
    );
}