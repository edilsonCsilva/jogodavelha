<?php
$frases = file("palavra.txt");
//echo "<pre>";
$novas_palavras = array();

foreach ($frases as $key => $p) {

    $mais = explode(";", $p);
    $tmp = "";

    foreach ($mais as $key => $value) {
        if (!in_array(trim($value), $novas_palavras) && strlen(trim($value)) > 0) {
            $novas_palavras[] = strtoupper(trim($value));
        }
    }
    //print_r($mais);
}

echo "<script>";
echo "var nova_palavra=" . json_encode($novas_palavras);
echo "</script>";
?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
        <link href="interface.css" rel="stylesheet" type="text/css"/>
        
        <script src="jquery-3.4.1.min.js" type="text/javascript"></script>
        <script src="libs.js" type="text/javascript"></script>
        <script src="jogo_velha.js" type="text/javascript"></script>
        
    </head>
    <body  >

        <div class="container">

            <table>

                <tr>

                    <td>

                        <div id="tela">
                            <img src="loading.gif" style="width: 100%;height:100%;" />
                            <!--            <div class="itens_palavra">
                                            <div class="input">
                                                <span class="input-text">  A </span>
                                            </div>
                                                
                                        </div>-->


                        </div>


                    </td

                </tr>

                <tr>
                    <td><br></td>
                </tr>

                <tr>
                    <td><hr></td>
                </tr>
                <tr>
                    <td>
                        <div id="campo">
                            <input type="text" value="" class="_iput" id="txt"  maxlength="1" />
                            <input type="button" id="btn-jogar" class="btn_jogada" value="JOGAR" />
                        </div>

                    </td>
                </tr>


            </table>



        </div>




    </body>
</html>
