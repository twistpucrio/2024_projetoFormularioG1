function validarArquivo(arquivo,extensao) {
    caminho = arquivo.value.split("\\");
    alert("Primeira forma: "+
        caminho[caminho.length-1])
        
     let indice = caminho.length-1;
     let comp = caminho[indice].split(".");
     let ext = comp[comp.length-1];

     if(extensao.lower === ext.lower){
        alert("Igual");
     }else{
        alert("Diferente");
     }
}
    const regex = /^[A-Z][A-Za-z0-9_]{7,14}$/;

    if (!regex.test(nomeArquivo)) {
        let mensagem = "O nome do arquivo deve:\n";
        if (/[A-Z]/.test(nomeArquivo)) {
            mensagem += "- Iniciar com letra maiúscula.\n";
        }
        if (/^[A-Za-z0-9_]/.test(nomeArquivo)) {
            mensagem += "- Não conter caracteres especiais (exceto underscore).\n";
        }
        if (nomeArquivo.length < 8 || nomeArquivo.length > 15) {
            mensagem += "- Ter entre 8 e 15 caracteres.\n";
        }
        alert(mensagem);
    } else {
        alert("Nome do arquivo válido!");
    }
}

function validarExtensao(arquivo,extensao){
    caminho = arquivo.value.split("\\");
    alert("Primeira forma: "+
        caminho[caminho.length-1])
        
     let indice = caminho.length-1;
     let comp = caminho[indice].split(".");
     let ext = comp[comp.length-1];

     if(extensao.lower === ext.lower){
        alert("Igual");
     }else{
        alert("Diferente");
     }
}
window.addEventListener('load', function(){
  document.getElementById('arquivo').addEventListener('change', function(event) {
        var fileName = event.target.files.length > 0 ? event.target.files[0].name : 'Nenhum arquivo selecionado';
        document.getElementById('mensagem').textContent = fileName;
    });
    btnExecutar.addEventListener("click", function(){
        let nome, texto;
        nome = document.querySelector("#nome");
        texto =  document.querySelector("texto");
        executar (nome,texto,value);
    });
});

