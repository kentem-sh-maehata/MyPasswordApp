{
    var slider_1 = document.getElementById('slider');
    var btn = document.getElementById('btn');
    slider_1.addEventListener('input', function () {
        var passlen = document.getElementById('password-length');
        if (passlen) {
            passlen.textContent = slider_1.value;
        }
    });
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        var result = document.getElementById('result');
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        var seed = letters + letters.toUpperCase();
        if (document.getElementById('num').checked) {
            seed += "1234567890";
        }
        if (document.getElementById('symbol').checked) {
            seed += "-_.!+?*/";
        }
        var pass = "";
        console.log(seed.length);
        for (var i = 0; i < Number(slider_1.value); i++) {
            var idx = Math.floor(Math.random() * seed.length);
            pass += seed[idx];
        }
        result.textContent = pass;
    });
}
