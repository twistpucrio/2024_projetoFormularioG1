document.addEventListener("DOMContentLoaded", function() {
    const palavraProcurar = document.getElementById('palavraProcurar');
    const palavraSubstituir = document.getElementById('palavraSubstituir');
    const textoOriginal = document.getElementById('textoOriginal');
    const btnSubmeter = document.getElementById('btnSubmeter');
    const btnLimpar = document.getElementById('btnLimpar');

    function realizarSubstituicao() {
        const texto = textoOriginal.value;
        const procurar = palavraProcurar.value;
        const substituir = palavraSubstituir.value;

        if (procurar) {
            const textoModificado = texto.replace(new RegExp(procurar, 'g'), substituir);
            textoOriginal.value = textoModificado;
        }
    }

    function limparFormulario() {
        palavraProcurar.value = '';
        palavraSubstituir.value = '';
        textoOriginal.value = '';
    }

    btnSubmeter.addEventListener('click', realizarSubstituicao);
    btnLimpar.addEventListener('click', limparFormulario);
});
