function addEvent(event, elem, func) { // функція для коректного додавання подій
    "use strict";
    if (elem.addEventListener) {
        elem.addEventListener(event, func, false);
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + event, func);
    } else {
        elem[event] = func;
    }
}

function previewImg() {
    "use strict";
    var img = document.getElementById("uploaded_img"); // img елемент зі сторінки
    var file = document.getElementById("upload_img").files[0]; // input елемент
    var reader = new FileReader();
    addEvent("loadend", reader, function () {
        img.src = reader.result;
        img.style.display = "inline-block"; // так, як картинка була схована стилем - показуємо її
    });
    if (file) {
        reader.readAsDataURL(file);
    } else {
        img.src = "";
    }
}

addEvent("load", window, function () {
    "use strict";
    addEvent("change", document.getElementById("upload_img"), previewImg);
});