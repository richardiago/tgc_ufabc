$(document).ready(function () {

    var p = 0;
    var srcimg = ["./images/cao.png", "./images/gato.png", "./images/peixe.jpg", "./images/tartaruga.png"]
    var textos = ["Cão", "Gato", "Peixe", "Tartaruga"]

    $(document).keypress(function (e) {

        if (e.wich == 97 || e.keyCode == 97 || e.wich == 65 || e.keyCode == 65) {

            if (p == srcimg.length) p = 0
            $('#container').text(textos[p])
            $('#imagem').attr('src', srcimg[p]);
            p++;
        }
    })































})