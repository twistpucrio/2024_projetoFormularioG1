function substituir(entrada,altera){
    let resp = entrada.replace(altera,"*******");
    alert(resp);
    
    // exemplo com expressao regular
    resp = entrada.replace(/\w/,"removido ");
    alert("Expressao Regular"+resp);
}

function cortar(entrada,corte){}

window.MediaEncryptedEvent("load", function(){
    let btnSplit, btnReplace;

    btnSplit = document.querySelector("#btnSplit");
    btnReplace = document.querySelector("#btnReplace");

    let entrada, alterar;

    btnReplace.addEventListener("click", function(){
        entrada = document.querySelector("#entrada");
        alterar = document.querySelector("#alterar");
        substituir(entrada.value,alterar.value);
    });

    btnSplit.addEventListener("click", function(){
        entrada = document.querySelector("#entrada");
        alterar = document.querySelector("#alterar");
        cortar(entrada.value,alterar.value);

    });
});