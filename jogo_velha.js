

var palavra_seleciona_ = [];
var palavra_acertadas = [];
var palavra_acertadas_erradas = [];
var palavra_seleciona="";

$(document).ready(function ($) {



    var input = $("#txt");
    input.attr("text-aling","center ")
    input.focus();
    input.val("")

    input.keyup(function(){
        
        $("#btn-jogar").click();
    });


//    setInterval(function () {


    var indice = Math.floor(Math.random() * nova_palavra.length) - 1;
    var palavra_seleciona = nova_palavra[indice];
    var tam = palavra_seleciona.length;

    $("#tela").html("")
    for (var i = 0; i < tam; i++) {
        setLetraTela(palavra_seleciona.substr(i, 1), false);
        palavra_seleciona_.push(palavra_seleciona.substr(i, 1).toUpperCase())

    }

    console.log(palavra_seleciona_)

//    }, 10000);




    //botao

    $("#btn-jogar").on("click", function () {
        var char = input.val().toUpperCase();
        var index = a_index(char);
        console.log("###@", index)
        if (index.length > 0) {
            for (var t = 0; t < index.length; t++) {
                palavra_acertadas[index[t]] = char
            }
        } else {
            console.log("EEE", palavra_acertadas_erradas)
            palavra_acertadas_erradas.push(char)
        }
        display(palavra_seleciona_.length)
        input.val("")
        input.focus();
    });





});



function a_index(y) {

    var tam = palavra_seleciona_.length;
    var indices=[]
    console.log("#$",palavra_seleciona_)

    for (var i = 0; i < tam; i++) {
        if (palavra_seleciona_[i] === y) {
            indices.push(i);
        }
    }

    return indices;



}

function display(total) {
    var tam = palavra_acertadas.length;
      console.log("22222222222",palavra_seleciona)
      
      if(palavra_acertadas_erradas.length==5){
          
          var p="";
          for(t=0;t < palavra_seleciona_.length;t++){
              p+=palavra_seleciona_[t];
          }
          
          
        alert("VOCE PERDEU O JOGO\n\n"+p);
        window.location="index.php"
    }
    

    $("#tela").html("")
    for (var i = 0; i < total; i++) {
        if (palavra_acertadas[i] === undefined) {
             setLetraTela("", true);
        }else{
            setLetraTela(palavra_acertadas[i], true);
        }
       
    }
    
    //alert(palavra_acertadas_erradas.length)
    
    
}



function setLetraTela(char, revelar) {
    var box = "<div class=\"itens_palavra\">";
    box += "        <div class=\"input\">";
    if (revelar) {
        box += "            <span class=\"input-text\">" + char.toUpperCase() + "</span>";
    } else {
        box += "            <span class=\"input-text\"></span>";

    }
    box += "        </div";
    box += "    </div>";


    $("#tela").append(box)


}

 
