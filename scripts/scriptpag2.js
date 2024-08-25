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

    // Verificar se o nome contém apenas caracteres permitidos
    if (!/^[A-Za-z0-9_]+$/.test(fileName)) {
        errorMessage.textContent = "O nome do arquivo não pode conter caracteres especiais (exceto underline).";
        return;
    }

    // Verificar o tamanho do nome do arquivo
    if (fileName.length < 8 || fileName.length > 15) {
        errorMessage.textContent = "O nome do arquivo deve ter entre 8 e 15 caracteres.";
        return;
    }

    // Se todas as validações passarem
    errorMessage.textContent = "Nome do arquivo válido!";
}