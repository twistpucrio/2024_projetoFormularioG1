document.addEventListener('DOMContentLoaded', function() {
    const arquivoInput = document.getElementById('arquivo');
    const mensagemElem = document.getElementById('mensagem');
    const btnSubmeter = document.getElementById('btnSubmeter');
    const btnLimpar = document.getElementById('btnLimpar');

    arquivoInput.addEventListener('change', function() {
        if (arquivoInput.files.length > 0) {
            mensagemElem.textContent = arquivoInput.files[0].name;
        } else {
            mensagemElem.textContent = 'Nenhum arquivo selecionado';
        }
    });

    btnSubmeter.addEventListener('click', function() {
        const formatoSelecionado = document.querySelector('input[name="formato"]:checked');
        const arquivoSelecionado = arquivoInput.files[0];

        if (!formatoSelecionado) {
            alert('Por favor, selecione um formato de arquivo.');
            return;
        }

        if (!arquivoSelecionado) {
            alert('Nenhum arquivo selecionado.');
            return;
        }

        const formato = formatoSelecionado.id;
        const nomeArquivo = arquivoSelecionado.name;
        const extensaoArquivo = nomeArquivo.split('.').pop().toLowerCase(); // Extrai e transforma a extensão em minúsculas

        if (extensaoArquivo !== formato) {
            alert('A extensão do arquivo não corresponde ao formato selecionado.');
            return;
        }

        const nomeArquivoSemExtensao = nomeArquivo.substring(0, nomeArquivo.lastIndexOf('.'));
        const regexNome = /^[A-Z][a-zA-Z0-9_]{7,14}$/;

        let mensagemErro = '';

        if (!/^[A-Z]/.test(nomeArquivoSemExtensao)) {
            mensagemErro += 'O nome do arquivo deve iniciar com letra maiúscula.\n';
        }

        if (nomeArquivoSemExtensao.length < 8 || nomeArquivoSemExtensao.length > 15) {
            mensagemErro += 'O nome do arquivo deve ter entre 8 e 15 caracteres.\n';
        }

        if (!regexNome.test(nomeArquivoSemExtensao)) {
            mensagemErro += 'O nome do arquivo deve conter apenas letras, números e underscores.\n';
        }

        if (mensagemErro) {
            alert(mensagemErro.trim());
            return;
        }

        alert('Arquivo válido e pronto para ser enviado!');
    });

    btnLimpar.addEventListener('click', function() {
        document.querySelectorAll('input[name="formato"]').forEach((radio) => {
            radio.checked = false;
        });

        arquivoInput.value = '';

        mensagemElem.textContent = 'Nenhum arquivo selecionado';
    });
});
