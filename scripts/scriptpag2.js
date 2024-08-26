document.addEventListener("DOMContentLoaded", function() {
    const btnSubmeter = document.getElementById('btnSubmeter');
    const btnLimpar = document.getElementById('btnLimpar');
    const arquivoInput = document.getElementById('arquivo');
    const mensagem = document.getElementById('mensagem');

    function validarNomeArquivo(nome) {
        const regex = /^[a-z][a-zA-Z0-9_]$/;
        return regex.test(nome);
    }

    function verificarExtensao(extensao, tipoSelecionado) {
        const formatos = {
            imagem: ['jpg', 'jpeg', 'png'],
            pdf: ['pdf'],
            doc: ['doc'],
            csv: ['csv']
        };
        return formatos[tipoSelecionado].includes(extensao);
    }

    function validarArquivo() {
        const radioButtons = document.querySelectorAll('input[name="formato"]');
        let formatoSelecionado = null;

        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                formatoSelecionado = radioButton.id;
                break;
            }
        }

        if (!formatoSelecionado) {
            alert("Selecione um formato de arquivo.");
            return;
        }

        const file = arquivoInput.files[0];
        if (!file) {
            alert("Nenhum arquivo selecionado.");
            return;
        }

        const nomeArquivo = file.name;
        const [nomeSemExtensao, extensaoArquivo] = nomeArquivo.split('.');

        if (extensaoArquivo && !verificarExtensao(extensaoArquivo.toLowerCase(), formatoSelecionado)) {
            alert("O formato do arquivo selecionado não corresponde ao tipo de arquivo escolhido.");
            return;
        }


        if (!/^[A-Z]/.test(nomeSemExtensao)) {
            alert("O nome do arquivo deve começar com letra maiúscula.");
            return;
        }
    
        if (!/^[A-Za-z0-9_]+$/.test(nomeSemExtensao)) {
            alert("O nome do arquivo não pode conter caracteres especiais (exceto underline).");
            return;
        }
    
        
        if (nomeSemExtensao.length < 8 || nomeSemExtensao.length > 15) {
            alert( "O nome do arquivo deve ter entre 8 e 15 caracteres.");
            return;}

        alert("Arquivo válido e selecionado com sucesso.");
    }

    function limparFormulario() {
        document.querySelector('.formulario').reset();
        mensagem.textContent = "Nenhum arquivo selecionado";
    }

    btnSubmeter.addEventListener('click', validarArquivo);
    btnLimpar.addEventListener('click', limparFormulario);

    arquivoInput.addEventListener('change', function() {
        if (arquivoInput.files.length > 0) {
            mensagem.textContent = arquivoInput.files[0].name;
        } else {
            mensagem.textContent = "Nenhum arquivo selecionado";
        }
    });
});
