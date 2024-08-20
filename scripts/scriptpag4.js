function validarExtensao(arquivo,extensao){
    alert(arquivo.value)
    caminho = arquivo.value.split("\\");
    alert(caminho);
    alert(caminho[caminho.lenght-1]);
    let resp = arquivo.files[0];
    alert("segunda forma"+resp);

    for(arq of arquivo.files){
        alert
    }


}
function validarSenha(senha){

}

function validarDataNascimento(dataNascimento){

}
function validarUsuario(usuario){

}
function validarNome(nome){

}

window.addEventListener("load", function(){
    let btnValidar = document.querySelector("#btnValidar");
    let nome, arquivo, usuario, senha, dataNascimento;
    btnValidar.addEventListener("click", function(){
        nome = document.querySelector("#nome").value;
        arquivo = document.querySelector("#arquivo");
        usuario = document.querySelector("#usuario").value;
        senha = document.querySelector("#senha");
        dataNascimento = document.querySelector("#dataNascimento").value;

        validarNome(nome);
        validarDataNascimento(dataNascimento);
        validarUsuario(usuario);
        validarSenha(senha);
        validarExtensao(arquivo,"doc");

    });
});