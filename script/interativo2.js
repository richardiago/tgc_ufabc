$(document).ready(function () {

  //Valores iniciais
  var v = $("input[name='var']:checked").val();
  var p = $("input[name='pen']:checked").val();
  var e = $("input[name='expansao']:checked").val();

  var img = "img-" + v + "_" + p + "_" + e + ".png";
  $("#imagem").attr('src', "./tabelas2/" + img)

  //Interação com o teclado
  $(".clique").click(function () {

    //Atualiza valores
    v = $("input[name='var']:checked").val();
    p = $("input[name='pen']:checked").val();
    e = $("input[name='expansao']:checked").val();

    img = "img-" + v + "_" + p + "_" + e + ".png";

    //Se opção 4 de "var" é escolhida
    if ($("input[name='var']:checked").val() == 4) {

      $("#escolhas").hide();
      $("#imagem").attr('src', "./tabelas2/" + "imagem_unica.png")

    }
    else {

      $("#escolhas").show();

      //Se opção 1 de "e" é escolhida
      if ($("input[name='expansao']:checked").val() == 1) {

        $("#penalizacao").hide();
        img = "img-" + v + "_" + p + "_" + ".png";

      }

      else {
        $("#penalizacao").show();
        img = "img-" + v + "_" + p + "_" + e + ".png";
      }

    }
  })

})
