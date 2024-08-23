function validarExtensao(arquivo, extensao){
    // obs: arquivo é o elemento input: file inteiro




    /* PEGAR O NOME DO ARQUIVO */




    // alert(arquivo.value)
    caminho = arquivo.value.split(".");




    // alert(caminho)
    alert("Primeira forma: " + caminho[ caminho.length - 1])




    /* outra maneira: */
    let resposta = arquivo.files[0];
    alert("Segunda forma: " + resposta.name)




    /* PEGAR A EXTENSAO */
    // split no ponto
    let indice = caminho.length - 1;
    let comparacao = caminho[indice].split(".");
    let ext = comparacao[comparacao.length - 1];
    alert(ext)




    if(extensao.lower === ext.lower){
        alert("igual")
    }
    else{
        alert("diferente")
    }
}
                // validarExtensao(arq, "doc");
