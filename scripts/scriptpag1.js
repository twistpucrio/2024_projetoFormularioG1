function limpar(){
    let texto = document.querySelector("#conteudo");
    let atividade = document.getElementsByName("atividade");

    texto.value = " ";

    for (at of atividade){
        at.checked = false;
    }
}

function validar(){}

window.addEventListener("load", function(){
    let btnLimpar = document.querySelector(#btnLimpar);
    let btnSubmeter = document.querySelector(#btnSubmeter);

    btnLimpar.addEventListener("click", function(){
        limpar()
    });

    btnValidar.addEventListener("click", function(){
        validar()
    });
})