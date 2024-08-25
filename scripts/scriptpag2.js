function validateFileName() {
    const fileInput = document.getElementById('fileInput').files[0];
    const errorMessage = document.getElementById('errorMessage');
    const fileType = document.querySelector('input[name="fileType"]:checked').value;

    if (!fileInput) {
        errorMessage.textContent = "Por favor, selecione um arquivo.";
        return;
    }

    const fileNameParts = fileInput.name.split('.');
    const fileName = fileNameParts[0];
    const fileExtension = fileNameParts[1].toLowerCase();

    // Verificar se a extensão do arquivo corresponde ao tipo selecionado
    if ((fileType === 'image' && !['jpg', 'jpeg', 'png'].includes(fileExtension)) ||
        (fileType === 'pdf' && fileExtension !== 'pdf') ||
        (fileType === 'doc' && fileExtension !== 'doc') ||
        (fileType === 'csv' && fileExtension !== 'csv')) {
        errorMessage.textContent = "A extensão do arquivo não corresponde ao tipo selecionado.";
        return;
    }

    // Verificar se o nome começa com letra maiúscula
    if (!/^[A-Z]/.test(fileName)) {
        errorMessage.textContent = "O nome do arquivo deve começar com letra maiúscula.";
        return;
    }

    
    


    // Se todas as validações passarem
    errorMessage.textContent = "Nome do arquivo válido!";
}

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