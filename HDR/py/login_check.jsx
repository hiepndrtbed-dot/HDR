// // #target photoshop
// 
// var pathCurentFolder = File($.fileName).parent.fsName;
// var pyFetch = pathCurentFolder + "/dist/fetch_passwords.exe";
// var pyUpdate = pathCurentFolder + "/dist/update_status.exe";
// var secret = "DucHiep@123"; // Biến secret dùng để tạo hash, không lưu hay truyền đi đâu cả, chỉ để làm cho hash khó đoán hơn
// // alert(pyFetch)
// var pyDecode = pathCurentFolder + "/dist/decode_pw.exe";
// 
// var appData = Folder(Folder.userData + "/MyPhotoshopApp");
// if (!appData.exists) appData.create();
// 
// var localStatusFile = new File(appData + "/login_status.json");
// var tempDir = Folder.temp.fsName;
// var jsonFile = new File(tempDir + "/accounts.json");
// 
// (function () {
//     // Nếu đã có login local
//     if (localStatusFile.exists) {
//         localStatusFile.open("r");
//         var localData = JSON.parse(localStatusFile.read());
//         localStatusFile.close();
//         var loginTime = localData.loginTime; // ví dụ "2025-09-02T17:53:18"
//         if (loginTime) {
//             // Kiểm tra hash code
//             var rawString = localData.loginTime + "|" + localData.makLastLogin + "|" + secret;
//             var newHash = sha256(rawString);
// 
//             if (newHash !== localData.hashCode) {
//                 alert("⚠️ Sai dữ liệu đăng nhập. Vui lòng đăng nhập lại.");
//                 localStatusFile.remove();
//                 return;
//             }
//             // daysBetween(loginTime);
//             // alert(daysBetween(loginTime))
//             if (daysBetween(loginTime) > localData.makLastLogin) {
//                 alert("⚠️ Tài khoản hết hạn. Vui lòng liên hệ 0982858221 để được cấp.");
//                 var scriptFolder = File($.fileName).parent;
//                 var targetScript = File(scriptFolder + "/logout.jsx");
//                 if (targetScript.exists) {
//                     $.evalFile(targetScript);
//                 }
//                 return;
//             } else {
//                 status = true; // vẫn còn hạn, tự động login
//             }
//         }
//     } else {//neu ko ton tai login local thi hien UI login
//         var credentials = showLoginUI();
//         if (credentials) {
//             var machineID = getMachineID();
//             // alert("Machine ID: " + machineID);
//         }
//         if (!machineID) return;
// 
//         // Fetch accounts
//         try {
//             //run bang python
//             // app.system('python "' + pyFetch + '"');
//             //run bang exe
//             // app.system('"' + pyFetch + '"');
//             app.system('cmd /c start /wait "" "' + pyFetch + '"');
//         }
//         catch (e) { alert("⚠️ Không gọi được Python fetch: " + e); return; }
// 
//         if (!jsonFile.exists) { alert("⚠️ Không tìm thấy accounts.json"); return; }
//         // Đọc file JSON
//         jsonFile.open("r");
//         var content = jsonFile.read();
//         jsonFile.close();
//         jsonFile.remove();
//         var data = JSON.parse(content);
//         var accounts = data.accounts;
// 
//         if (!credentials) return; // cancel
//         var username = credentials.username;
//         var password = sha256(credentials.password);
//         var found = null;
//         for (var i = 0; i < accounts.length; i++) {
//             if (accounts[i].User === username) { found = accounts[i]; break; }
//         }
//         if (!found) { alert("❌ Sai tài khoản hoặc mật khẩu!"); return; }
// 
//         // Kiểm tra hạn sử dụng dựa trên LastLogin từ JSON
//         var activationDate = found.ActivationDate;
//         if (activationDate) {
//             if (daysBetween(activationDate) > found.LastLogin) { // dùng LastLogin từ file fetch
//                 alert("⚠️ Tài khoản hết hạn (>" + found.LastLogin + " ngày). Vui lòng liên hệ 0982858221 để được cấp.");
//                 return;
//             }
//         }
// 
//         // Decode password Base64
//         // var tmpPwFile = new File(pathCurentFolder + "/tmp_pw.txt");
//         //Run bang python
//         // var cmdDecode = 'python "' + pyDecode + '" "' + found.Passwork + '" "' + tmpPwFile.fsName + '"';
//         //Run bang Exe
//         // var cmdDecode = '"' + pyDecode + '" "' + found.Passwork + '" "' + tmpPwFile.fsName + '"';
//         var decodedPw = decodeBase64Manual(found.Passwork);
//         // app.system(cmdDecode);
//         // tmpPwFile.open("r");
//         // var decodedPw = tmpPwFile.read();
//         // alert(decodedPw)
//         // alert(password)
//         // tmpPwFile.close();
//         // tmpPwFile.remove();
// 
//         if (decodedPw !== password) { alert("❌ Sai tài khoản hoặc mật khẩu!"); return; }
// 
//         var sheetID = found.UserComputer ? String(found.UserComputer).replace(/\s/g, '') : '';
// 
//         if (found.Status == 0 || (found.Status == 1 && sheetID === machineID)) {
//             try {
//                 //Run bang python
//                 // var cmdUpdate = 'python "' + pyUpdate + '" "' + username + '" 1';
//                 //Run bang exe
//                 var cmdUpdate = 'cmd /c start /wait "" "' + pyUpdate + '" "' + username + '" 1';
//                 app.system(cmdUpdate);
//             } catch (e) { alert("⚠️ Không update được status: " + e); return; }
// 
//             // Lưu login_status.json với thời gian login
//             if (activationDate == "") { activationDate = formatDateISO(new Date()) }
//             var loginTime = activationDate;
//             var loginData = { username: username, loginTime: loginTime, makLastLogin: found.LastLogin, machineIDCode: sha256(machineID + "|" + secret), hashCode: sha256(loginTime + "|" + found.LastLogin + "|" + secret) };
//             localStatusFile.open("w");
//             localStatusFile.write(JSON.stringify(loginData, null, 2));
//             localStatusFile.close();
// 
//             alert("✅ Đăng nhập thành công!");
//             status = true;
//         }
//         else if (found.Status == 1 && sheetID !== machineID) {
//             alert("⚠️ User đã đăng nhập trên máy khác! Vui lòng logout trên máy khác trước khi đăng nhập trên máy này.");
//             var result = showSelectLoginUserUI(sheetID);
//             if (result == 1) {
//                 var cmd = 'cmd /c start /wait "" "' + pyUpdate + '" "' + username + '" 0';
//                 // alert("cmd: " + cmd);
//                 app.system(cmd);
//                 // Xóa file login_status.json
//                 alert("✅ Logout khoi tai khoan! tai may " + sheetID);
//             }
//         }
//     }
// })();
// 
// 
// // Hàm lấy machine ID từ Python
// function getMachineIDi() {
//     var tmpFile = new File(pathCurentFolder + "/machine_id.txt");
//     try {
//         app.system('python -c "from uuid import getnode; f=open(\'' + tmpFile.fsName + '\',\'w\'); f.write(str(getnode()).strip()); f.close()"');
//         tmpFile.open("r");
//         var id = tmpFile.read();
//         tmpFile.close();
//         tmpFile.remove();
//         return id.replace(/\s/g, '');
//     } catch (e) { alert("⚠️ Lỗi lấy machine ID: " + e); return null; }
// }
// 
// function getMachineID() {
//     var exePath = pathCurentFolder + "/dist/hash_machine.exe";
//     var tmpFile = new File(Folder.temp + "/machine_hash.txt");
//     app.system('cmd /c "' + exePath + '"');
//     var waited = 0;
//     while (!tmpFile.exists && waited < 5000) {
//         $.sleep(100);
//         waited += 100;
//     }
//     if (!tmpFile.exists) {
//         alert("Không tạo được file hash");
//         return "UNKNOWN";
//     }
//     tmpFile.open("r");
//     var hash = tmpFile.read().replace(/\s/g, "");
//     tmpFile.close();
//     tmpFile.remove();
//     return hash;
// }
// 
// function makeHashFromJSX(inputString) {
//     var exePathHash = pathCurentFolder + "/dist/make_hash.exe";
//     var inputFile = new File(pathCurentFolder + "/dist/input.txt");
//     var outputFile = new File(pathCurentFolder + "/dist/hash_result.txt");
// 
//     // ghi input
//     inputFile.open("w");
//     inputFile.write(inputString);
//     inputFile.close();
// 
//     app.system('cmd /c "' + exePathHash + '"');
// 
//     var waited = 0;
//     while (!outputFile.exists && waited < 5000) {
//         $.sleep(100);
//         waited += 100;
//     }
// 
//     if (!outputFile.exists) {
//         alert("Không tạo được hash");
//         return "UNKNOWN";
//     }
// 
//     outputFile.open("r");
//     var hash = outputFile.read().replace(/\s/g, "");
//     outputFile.close();
//     outputFile.remove();
//     inputFile.remove();
// 
//     return hash;
// }
// 
// /* ===== SHA256 PURE JSX ===== */
// function sha256(ascii) {
// 
//     function rightRotate(value, amount) {
//         return (value >>> amount) | (value << (32 - amount));
//     }
// 
//     var mathPow = Math.pow;
//     var maxWord = mathPow(2, 32);
//     var lengthProperty = "length";
//     var i, j;
//     var result = "";
// 
//     var words = [];
//     var asciiBitLength = ascii[lengthProperty] * 8;
// 
//     var hash = sha256.h = sha256.h || [];
//     var k = sha256.k = sha256.k || [];
//     var primeCounter = k[lengthProperty];
// 
//     var isComposite = {};
//     for (var candidate = 2; primeCounter < 64; candidate++) {
//         if (!isComposite[candidate]) {
//             for (i = 0; i < 313; i += candidate) {
//                 isComposite[i] = candidate;
//             }
//             hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
//             k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
//         }
//     }
// 
//     ascii += "\x80";
//     while (ascii[lengthProperty] % 64 - 56)
//         ascii += "\x00";
// 
//     for (i = 0; i < ascii[lengthProperty]; i++) {
//         j = ascii.charCodeAt(i);
//         words[i >> 2] |= j << ((3 - i) % 4) * 8;
//     }
// 
//     words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
//     words[words[lengthProperty]] = (asciiBitLength);
// 
//     for (j = 0; j < words[lengthProperty];) {
// 
//         var w = words.slice(j, j += 16);
//         var oldHash = hash.slice(0);
// 
//         for (i = 0; i < 64; i++) {
// 
//             var w15 = w[i - 15], w2 = w[i - 2];
// 
//             var a = hash[0], e = hash[4];
// 
//             var temp1 = hash[7]
//                 + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
//                 + ((e & hash[5]) ^ ((~e) & hash[6]))
//                 + k[i]
//                 + (w[i] = (i < 16) ? w[i] :
//                     (w[i - 16]
//                         + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
//                         + w[i - 7]
//                         + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
//                     ) | 0
//                 );
// 
//             var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
//                 + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
// 
//             hash = [(temp1 + temp2) | 0].concat(hash);
//             hash[4] = (hash[4] + temp1) | 0;
//             hash.pop();
//         }
// 
//         for (i = 0; i < 8; i++)
//             hash[i] = (hash[i] + oldHash[i]) | 0;
//     }
// 
//     for (i = 0; i < 8; i++)
//         for (j = 3; j + 1; j--) {
//             var b = (hash[i] >> (j * 8)) & 255;
//             result += ((b < 16) ? 0 : "") + b.toString(16);
//         }
// 
//     return result;
// }
// 
// // Hàm format date ISO (ExtendScript không hỗ trợ toISOString)
// function formatDateISO(date) {
//     function pad(n) { return n < 10 ? '0' + n : n; }
//     return date.getFullYear() + '-'
//         + pad(date.getMonth() + 1) + '-'
//         + pad(date.getDate()) + 'T'
//         + pad(date.getHours()) + ':'
//         + pad(date.getMinutes()) + ':'
//         + pad(date.getSeconds());
// }
// 
// // Hàm tính số ngày giữa 2 ngày (yyyy-MM-dd)
// function daysBetween(dateStr) {
//     var datePart = dateStr.split("T")[0]; // "2025-09-02"
//     var parts = datePart.split('-');
//     var lastLoginDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2])); // UTC
//     var today = new Date();
//     var todayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
//     var diffDays = Math.floor((todayUTC - lastLoginDate) / (1000 * 60 * 60 * 24));
//     return diffDays// số ngày
// }
// 
// // UI login
// function showLoginUI() {
//     var win = new Window("dialog", "Login Photoshop");
//     win.alignChildren = ["fill", "top"]; win.spacing = 5; win.margins = 5;
// 
//     win.add("statictext", undefined, "User:");
//     var userInput = win.add("edittext", undefined, ""); userInput.characters = 10;
//     userInput.active = true;
// 
//     win.add("statictext", undefined, "Password:");
//     var pwInput = win.add("edittext", undefined, ""); pwInput.characters = 10; pwInput.password = true;
// 
//     var btnGroup = win.add("group"); btnGroup.alignment = "center";
//     btnGroup.add("button", undefined, "Login", { name: "ok" });
//     btnGroup.add("button", undefined, "Cancel", { name: "cancel" });
// 
//     return (win.show() == 1) ? { username: userInput.text, password: pwInput.text } : null;
// }
// 
// function showSelectLoginUserUI(nameComputer) {
//     var win = new Window("dialog", "Select User!");
//     win.alignChildren = ["fill", "top"]; win.spacing = 5; win.margins = 5;
//     win.add("statictext", undefined, "Bạn có muốn thoát tài khoản tại máy" + nameComputer);
//     var btnGroup = win.add("group"); btnGroup.alignment = "center"
//     btnGroup.add("button", undefined, "Yes", { name: "ok" });
//     btnGroup.add("button", undefined, "No", { name: "cancel" });
//     return (win.show() == 1) ? 1 : 0;
// }
// 
// function decodeBase64Manual(base64Str) {
//     var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//     var output = "";
//     var buffer = 0, bits = 0;
// 
//     for (var i = 0; i < base64Str.length; i++) {
//         var c = base64Str.charAt(i);
//         if (c === "=") break;
//         var val = chars.indexOf(c);
//         if (val < 0) continue;
// 
//         buffer = (buffer << 6) | val;
//         bits += 6;
// 
//         if (bits >= 8) {
//             bits -= 8;
//             output += String.fromCharCode((buffer >> bits) & 0xFF);
//         }
//     }
//     return output;
// }
// //
// 
// // eval("@JSXBIN@ES@2.1@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");

eval("@JSXBIN@ES@2.1@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");