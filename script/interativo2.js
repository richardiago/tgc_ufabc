$(document).ready(function () {

    var tabela_1_1_1 = ""

    var tabela_1_1_2 = `<table>
    <tr>
      <th>Variável</th>
      <th>Coeficiente</th>
    </tr>
    <tr>
      <td>Média de tom de pele</td>
      <td>0.0</td>
    </tr>
  </table>`

    var tabela_1_2_1 = ""

    var tabela_1_2_2 = `<table>
    <tr>
      <th>Variável</th>
      <th>Coeficiente</th>
    </tr>
    <tr>
      <td>Média de tom de pele</td>
      <td>0,00118</td>
    </tr>
  </table>`

    var tabela_2_1_1 = ""

    var tabela_2_1_2 = `<table>
    <tr>
      <th>Variável</th>
      <th>Coeficiente</th>
    </tr>
    <tr>
      <td>Média de tom de pele</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Idade</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Idade²</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Peso²</td>
      <td>1,017809E-07</td>
    </tr>
    <tr>
      <td>Altura</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Altura²</td>
      <td>1,008811e-07</td>
    </tr>
  </table>`

    var tabela_2_2_1 = ""

    var tabela_2_2_2 = `<table>
    <tr>
      <th>Variável</th>
      <th>Coeficiente</th>
    </tr>
    <tr>
      <td>Média de tom de pele</td>
      <td>0,1240</td>
    </tr>
    <tr>
      <td>Idade</td>
      <td>-0,000015</td>
    </tr>
    <tr>
      <td>Idade²</td>
      <td>0,000001</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>0,000275</td>
    </tr>
    <tr>
      <td>Peso²</td>
      <td>-0,000002</td>
    </tr>
    <tr>
      <td>Altura</td>
      <td>0,000531</td>
    </tr>
    <tr>
      <td>Altura²</td>
      <td>-0,000001</td>
    </tr>
  </table>`

    var tabela_3_1_1 = ""

    var tabela_3_1_2 = `<table>
    <tr>
      <th>Variável</th>
      <th>Coeficiente</th>
    </tr>
    <tr>
      <td>Média de tom de pele</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Idade</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Idade²</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Peso²</td>
      <td>1,017809e-07</td>
    </tr>
    <tr>
      <td>Altura</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Altura²</td>
      <td>1,008811e-07</td>
    </tr>
    <tr>
      <td>Alemanha</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Inglaterra</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>França</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Espanha</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Meio ofensivo</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Meio centro</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Centro avante</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Meio-campo central</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Volante</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Goleiro</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Zagueiro esquerdo</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Meio-campo esquerdo</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Ala esquerda</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Zagueiro direito</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Meio-campo direito</td>
      <td>0,000000e+00</td>
    </tr>
    <tr>
      <td>Ala direito</td>
      <td>0,000000e+00</td>
    </tr>
  </table>`

    var tabela_3_2_1 = ""

    var tabela_3_2_2 = `<table>
    <tr>
      <th>Variável</th>
      <th>Coeficiente</th>
    </tr>
    <tr>
      <td>Média de tom de pele</td>
      <td>0,001034</td>
    </tr>
    <tr>
      <td>Idade</td>
      <td>-0,000212</td>
    </tr>
    <tr>
      <td>Idade²</td>
      <td>0,000004</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>0,000203</td>
    </tr>
    <tr>
      <td>Peso²</td>
      <td>0,000004</td>
    </tr>
    <tr>
      <td>Altura</td>
      <td>0,000427</td>
    </tr>
    <tr>
      <td>Altura²</td>
      <td>-0,000001</td>
    </tr>
    <tr>
      <td>Alemanha</td>
      <td>-0,000940</td>
    </tr>
    <tr>
      <td>Inglaterra</td>
      <td>-0,000769</td>
    </tr>
    <tr>
      <td>França</td>
      <td>0,000718</td>
    </tr>
    <tr>
      <td>Espanha</td>
      <td>0,000991</td>
    </tr>
    <tr>
      <td>Meio ofensivo</td>
      <td>-0001262</td>
    </tr>
    <tr>
      <td>Meio centro</td>
      <td>0,002824</td>
    </tr>
    <tr>
      <td>Centro avante</td>
      <td>-0,000288</td>
    </tr>
    <tr>
      <td>Meio-campo central</td>
      <td>0,000262</td>
    </tr>
    <tr>
      <td>Volante</td>
      <td>0,000134</td>
    </tr>
    <tr>
      <td>Goleiro</td>
      <td>0,000521</td>
    </tr>
    <tr>
      <td>Zagueiro esquerdo</td>
      <td>0,000682</td>
    </tr>
    <tr>
      <td>Meio-campo esquerdo</td>
      <td>-0,000131</td>
    </tr>
    <tr>
      <td>Ala esquerda</td>
      <td>-0,001246</td>
    </tr>
    <tr>
      <td>Zagueiro direito</td>
      <td>-0,000132</td>
    </tr>
    <tr>
      <td>Meio-campo direito</td>
      <td>-0,001214</td>
    </tr>
    <tr>
      <td>Ala direito</td>
      <td>-0,000149</td>
    </tr>
  </table>`


    var v = $("input[name='var']:checked").val();
    var p = $("input[name='pen']:checked").val();
    var e = $("input[name='expansao']:checked").val();


    var tabela = "tabela_" + v + "_" + p + "_" + e;
    $("#tabela").html(tabela)

    $(".clique").click(function () {

        var v = $("input[name='var']:checked").val();
        var p = $("input[name='pen']:checked").val();
        var e = $("input[name='expansao']:checked").val();


        tabela = "tabela_" + v + "_" + p + "_" + e;
        $("#tabela").html("<p>" + tabela + "</p>")
    })

})
