$(document).ready(function () {

  var tab_1_1 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,0239</td>
  </tr>
</table>`

var tab_2_1 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,0031</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade</td>
    <td class="tg-baqh">0,0010</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade²</td>
    <td class="tg-baqh">-4,563e-06</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso</td>
    <td class="tg-baqh">0,0014</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso²</td>
    <td class="tg-baqh">-8,965e-06</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura</td>
    <td class="tg-baqh">-0,0008</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura²</td>
    <td class="tg-baqh">2,376e-06</td>
  </tr>
</table>`

var tab_3_1 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,0017</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade</td>
    <td class="tg-baqh">0,0002</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade²</td>
    <td class="tg-baqh">4,769e-06</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso</td>
    <td class="tg-baqh">0,0006</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso²</td>
    <td class="tg-baqh">-3,17e-06</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura</td>
    <td class="tg-baqh">0,0026</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura²</td>
    <td class="tg-baqh">-7,423e-06</td>
  </tr>
  <tr>
    <td class="tg-baqh">Alemanha</td>
    <td class="tg-baqh">-0,1883</td>
  </tr>
  <tr>
    <td class="tg-baqh">Inglaterra</td>
    <td class="tg-baqh">-0,1864</td>
  </tr>
  <tr>
    <td class="tg-baqh">França</td>
    <td class="tg-baqh">-0,1821</td>
  </tr>
  <tr>
    <td class="tg-baqh">Espanha</td>
    <td class="tg-baqh">-0,1821</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio ofensivo</td>
    <td class="tg-baqh">-0,0655</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio centro</td>
    <td class="tg-baqh">-0,0532</td>
  </tr>
  <tr>
    <td class="tg-baqh">Centro avante</td>
    <td class="tg-baqh">-0,0626</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo central</td>
    <td class="tg-baqh">-0,0606</td>
  </tr>
  <tr>
    <td class="tg-baqh">Volante</td>
    <td class="tg-baqh">-0,0608</td>
  </tr>
  <tr>
    <td class="tg-baqh">Goleiro</td>
    <td class="tg-baqh">-0,0604</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro esquerdo</td>
    <td class="tg-baqh">-0,0600</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo esquerdo</td>
    <td class="tg-baqh">-0,0620</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala esquerda</td>
    <td class="tg-baqh">-0,0651</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro direito</td>
    <td class="tg-baqh">-0,0619</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo direito</td>
    <td class="tg-baqh">-0,0646</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala direito</td>
    <td class="tg-baqh">-0,0620</td>
  </tr>
</table>`

var tab_4 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,0031</td>
  </tr>
  <tr>
    <td class="tg-baqh">Alemanha</td>
    <td class="tg-baqh">3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Inglaterra</td>
    <td class="tg-baqh">3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">França</td>
    <td class="tg-baqh">3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Espanha</td>
    <td class="tg-baqh">3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio ofensivo</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio centro</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Centro avante</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo central</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Volante</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Goleiro</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro esquerdo</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo esquerdo</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala esquerda</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro direito</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo direito</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala direito</td>
    <td class="tg-baqh">-3,44e+08</td>
  </tr>
  <tr>
    <td class="tg-baqh">Número de vitórias</td>
    <td class="tg-baqh">-0,0028</td>
  </tr>
  <tr>
    <td class="tg-baqh">Número de jogos</td>
    <td class="tg-baqh">0,0051</td>
  </tr>
</table>`

var tab_1_2_1 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0.0</td>
  </tr>
</table>`

var tab_2_2_1 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade²</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso²</td>
    <td class="tg-baqh">1,017809e-07</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura²</td>
    <td class="tg-baqh">1,008811e-07</td>
  </tr>
</table>`

var tab_3_2_1 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade²</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso²</td>
    <td class="tg-baqh">1,017809e-07</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura²</td>
    <td class="tg-baqh">1,008811e-07</td>
  </tr>
  <tr>
    <td class="tg-baqh">Alemanha</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Inglaterra</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">França</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Espanha</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio ofensivo</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio centro</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Centro avante</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo central</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Volante</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Goleiro</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro esquerdo</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo esquerdo</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala esquerda</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro direito</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo direito</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala direito</td>
    <td class="tg-baqh">0,000000e+00</td>
  </tr>
</table>`

var tab_1_2_2 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,00118</td>
  </tr>
</table>`

var tab_2_2_2 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,1240</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade</td>
    <td class="tg-baqh">-0,000015</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade²</td>
    <td class="tg-baqh">0,000001</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso</td>
    <td class="tg-baqh">0,000275</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso²</td>
    <td class="tg-baqh">-0,000002</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura</td>
    <td class="tg-baqh">0,000531</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura²</td>
    <td class="tg-baqh">-0,000001</td>
  </tr>
</table>`

var tab_3_2_2 = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-ot37{font-weight:bold;background-color:#cde6ee;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-ot37">Variável</th>
    <th class="tg-ot37">Coeficiente</th>
  </tr>
  <tr>
    <td class="tg-baqh">Média de tom de pele</td>
    <td class="tg-baqh">0,001034</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade</td>
    <td class="tg-baqh">-0,000212</td>
  </tr>
  <tr>
    <td class="tg-baqh">Idade²</td>
    <td class="tg-baqh">0,000004</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso</td>
    <td class="tg-baqh">0,000203</td>
  </tr>
  <tr>
    <td class="tg-baqh">Peso²</td>
    <td class="tg-baqh">0,000004</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura</td>
    <td class="tg-baqh">0,000427</td>
  </tr>
  <tr>
    <td class="tg-baqh">Altura²</td>
    <td class="tg-baqh">-0,000001</td>
  </tr>
  <tr>
    <td class="tg-baqh">Alemanha</td>
    <td class="tg-baqh">-0,000940</td>
  </tr>
  <tr>
    <td class="tg-baqh">Inglaterra</td>
    <td class="tg-baqh">-0,000769</td>
  </tr>
  <tr>
    <td class="tg-baqh">França</td>
    <td class="tg-baqh">0,000718</td>
  </tr>
  <tr>
    <td class="tg-baqh">Espanha</td>
    <td class="tg-baqh">0,000991</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio ofensivo</td>
    <td class="tg-baqh">-0001262</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio centro</td>
    <td class="tg-baqh">0,002824</td>
  </tr>
  <tr>
    <td class="tg-baqh">Centro avante</td>
    <td class="tg-baqh">-0,000288</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo central</td>
    <td class="tg-baqh">0,000262</td>
  </tr>
  <tr>
    <td class="tg-baqh">Volante</td>
    <td class="tg-baqh">0,000134</td>
  </tr>
  <tr>
    <td class="tg-baqh">Goleiro</td>
    <td class="tg-baqh">0,000521</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro esquerdo</td>
    <td class="tg-baqh">0,000682</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo esquerdo</td>
    <td class="tg-baqh">-0,000131</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala esquerda</td>
    <td class="tg-baqh">-0,001246</td>
  </tr>
  <tr>
    <td class="tg-baqh">Zagueiro direito</td>
    <td class="tg-baqh">-0,000132</td>
  </tr>
  <tr>
    <td class="tg-baqh">Meio-campo direito</td>
    <td class="tg-baqh">-0,001214</td>
  </tr>
  <tr>
    <td class="tg-baqh">Ala direito</td>
    <td class="tg-baqh">-0,000149</td>
  </tr>
</table>`

  $("#penalizacao").hide();
  
  //Valores iniciais
  var v = $("input[name='var']:checked").val();
  var e = $("input[name='expansao']:checked").val();
  var p = $("input[name='pen']:checked").val();
  

  var tab = "";
  $("#tabela").html(tab_1_1);
  

  //Interação com o teclado
  $(".clique").click(function () {

    //Atualiza valores
    v = $("input[name='var']:checked").val();
    e = $("input[name='expansao']:checked").val();
    p = $("input[name='pen']:checked").val();
    

    //Se opção 4 de "var" é escolhida
    if ($("input[name='var']:checked").val() == 4) {

      $("#escolhas").hide();
      tab = "tab_4";
      

    }
    else {

      $("#escolhas").show();

      //Se opção 1 de "e" é escolhida
      if ($("input[name='expansao']:checked").val() == 1) {

        $("#penalizacao").hide();
        tab = "tab_" + v + "_" + e;       

      }

      else {
        $("#penalizacao").show();
        tab = "tab_" + v + "_" + e + "_" + p;
        
      }

    }

    switch(tab){

      case "tab_1_1":
        $("#tabela").html(tab_1_1);
        break;

      case "tab_2_1":
        $("#tabela").html(tab_2_1);
        break;

      case "tab_3_1":
        $("#tabela").html(tab_3_1);
        break;
        
      case "tab_1_2_1":
        $("#tabela").html(tab_1_2_1);
        break;

      case "tab_1_2_2":
        $("#tabela").html(tab_1_2_2);
        break;

      case "tab_2_2_1":
        $("#tabela").html(tab_2_2_1);
        break;

      case "tab_2_2_2":
        $("#tabela").html(tab_2_2_2);
        break;

      case "tab_3_2_1":
        $("#tabela").html(tab_3_2_1);
        break;

      case "tab_3_2_2":
        $("#tabela").html(tab_3_2_2);
        break;

      case "tab_4":
        $("#tabela").html(tab_4);
        break;
    }










  })

})
