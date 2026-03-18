// // logout.jsx
// // #target photoshop
// 
// var currentFolder = File($.fileName).parent.fsName;
// var pyUpdate = currentFolder + "/dist/update_status.exe";
// var appData = Folder(Folder.userData + "/MyPhotoshopApp");
// if (!appData.exists) appData.create();  // tao thu muc neu chua ton tai
// var localStatusFile = new File(appData + "/login_status.json");
// 
// if (!localStatusFile.exists) {
//     alert("⚠️ Chua dang nhap tren may nay!");
// } else {
//     try {
//         // Đọc user từ file local
//         localStatusFile.open("r");
//         var content = localStatusFile.read();
//         localStatusFile.close();
//         var loginData = JSON.parse(content);
//         var username = loginData.username;
// 
//         // Run bang python
//         // var cmd = "python \"" + pyUpdate + "\" \"" + username + "\" 0";
//         //Run bang exe
//         var cmd = 'cmd /c start /wait "" "' + pyUpdate + '" "' + username + '" 0';
//         // alert("cmd: " + cmd);
//         app.system(cmd);
// 
//         // Xóa file login_status.json
//         localStatusFile.remove();
//         alert("✅ Logout khoi tai khoan!");
//     } catch (e) {
//         alert("❌ Loi khi logout: " + e);
//     }
// }
// 

eval("@JSXBIN@ES@2.1@MyBbyBn0AGJDnASzNjDjVjSjSjFjOjUiGjPjMjEjFjSByBXzGjGjTiOjBjNjFCfXzGjQjBjSjFjOjUDfEjzEiGjJjMjFEfRBXzIjGjJjMjFiOjBjNjFFfjzBhEGfffnftJEnASzIjQjZiVjQjEjBjUjFHyBCzBhLIVBfyBnneXhPjEjJjTjUhPjVjQjEjBjUjFifjTjUjBjUjVjThOjFjYjFnftJFnASzHjBjQjQiEjBjUjBJyBEjzGiGjPjMjEjFjSKfRBCIXzIjVjTjFjSiEjBjUjBLfjKfnnePhPiNjZiQjIjPjUjPjTjIjPjQiBjQjQffnftOGJGnAEXzGjDjSjFjBjUjFMfVJfyBnfAhzBhBNXzGjFjYjJjTjUjTOfVJfyBnJHnASzPjMjPjDjBjMiTjUjBjUjVjTiGjJjMjFPyBEjEfRBCIVJfyBnneShPjMjPjHjJjOifjTjUjBjUjVjThOjKjTjPjOftnftOJbyKn0ABJKnAEjzFjBjMjFjSjUQfRBFegf2lAhG2PnehAiDjIjVjBhAjEjBjOjHhAjOjIjBjQhAjUjSjFjOhAjNjBjZhAjOjBjZhBffAhNXOfVPfyBbyMn0ABgMbyBn0AJJOnAEXzEjPjQjFjORfVPfyBRBFeBjSffJPnASzHjDjPjOjUjFjOjUSyBEXzEjSjFjBjETfVPfyBnfnftJQnAEXzFjDjMjPjTjFUfVPfyBnfJRnASzJjMjPjHjJjOiEjBjUjBVyBEXzFjQjBjSjTjFWfjzEiKiTiPiOXfRBVSfyBffnftJSnASzIjVjTjFjSjOjBjNjFYyBXYfVVfyBnftJXnASzDjDjNjEZyBCICICICInVHfyBeXjDjNjEhAhPjDhAjTjUjBjSjUhAhPjXjBjJjUhAhChChAhCnnneDhChAhCVYfyBnnnneDhChAhQnftJZnAEXzGjTjZjTjUjFjNgafjzDjBjQjQgbfRBVZfyBffJgcnAEXzGjSjFjNjPjWjFgcfVPfyBnfJgdnAEjQfRBFeY2FhHhAiMjPjHjPjVjUhAjLjIjPjJhAjUjBjJhAjLjIjPjBjOhBffABnzBjFgdnbyBn0ABJgfnAEjQfRBCInjgdfeS2iMhHhAiMjPjJhAjLjIjJhAjMjPjHjPjVjUhahAnffAIB40BiAH4B0AiAJ4C0AiAP4D0AiAS4E0AiAV4F0AiAY4G0AiAZ4H0AiAAIAzAgeByB");