var conteudo = document.getElementById('conteudo');
var botao = document.getElementById('mostre_mais');


botao.onclick = function(){

    if(conteudo.className == 'open'){

        conteudo.className = "";
        botao.innerHTML = "↓";
    }
    else{

        conteudo.className = "open";
        botao.innerHTML = "↑";
    }
};