$(document).ready(function () {

    var metodo = ["regressão linear","regressão linear","regressão linear","regressão logística"]

    var variaveis = ["Tom de pele.",
                    "Tom de pele, idade, idade², peso, peso², altura, altura².",
                    "Tom de pele, idade, idade², peso, peso², altura, altura², liga e posição.", 
                    ]
    
    var resultados = []

    var imagens = []

    var p = 0;
    var srcimg = ["./images/tabelas/1.png", "./images/tabelas/2.png", "./images/tabelas/3.png"]
    var textos = ["Somente tom de pele", "Tom de pele, idade, idade², peso, peso², altura, altura²",
        "Tom de pele, idade, idade², peso, peso², altura, altura², liga e posição"]
    var tamanho = [{ width: 674, height: 340 }, { width: 676, height: 439 }, { width: 762, height: 694 }]

    $(document).keypress(function (e) {

        if (e.wich == 97 || e.keyCode == 97 || e.wich == 65 || e.keyCode == 65) {

            if (p == metodo.length) p = 0
            $('#metodo').text(metodo[p])
            $('#variaveis').text(variaveis[p])
            // $('#container').text(textos[p])
            // $('#imagem').attr({ 'src': srcimg[p], 'width': tamanho[p].width, 'height': tamanho[p].height });
            p++;
        }
    })

    $('#clc').click(function() {

        if (p == srcimg.length) p = 0
            $('#container2').text(textos[p])
            $('#imagem2').attr({ 'src': srcimg[p], 'width': tamanho[p].width, 'height': tamanho[p].height });
            p++;
    }) 































})