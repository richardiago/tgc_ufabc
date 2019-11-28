$(document).ready(function () {

    var v = $("input[name='var']:checked").val();
    var p = $("input[name='pen']:checked").val();
    var e = $("input[name='expansao']:checked").val();

    var img = "img-" + v + "_" + p + "_" + e+".png";
    $("#imagem").attr('src', "./tabelas2/"+img)

    $(".clique").click(function () {

        v = $("input[name='var']:checked").val();
        p = $("input[name='pen']:checked").val();
        e = $("input[name='expansao']:checked").val();

        img = "img-" + v + "_" + p + "_" + e+".png";

        if($("input[name='var']:checked").val() == 4){

          $("#escolhas").hide();
          $("#imagem").attr('src', "./tabelas2/"+"imagem_unica.png")

        }
        else{
          $("#escolhas").show();
          $("#imagem").attr("src", "./tabelas2/"+img)

        }
    })

})
