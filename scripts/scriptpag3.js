function substituirPalavra() {
    // Obter os valores dos campos de entrada
    const palavraProcurar = document.getElementById('palavraProcurar').value;
    const palavraSubstituir = document.getElementById('palavraSubstituir').value;
    const textoOriginal = document.getElementById('textoOriginal').value;

    // Substituir a palavra procurada pela nova palavra
    const novoTexto = textoOriginal.replace(new RegExp(palavraProcurar, 'g'), palavraSubstituir);

    // Exibir o resultado
    document.getElementById('resultado').innerText = novoTexto;
}
