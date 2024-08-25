function buscarRegex() {
    const text = document.getElementById('textArea').value;
    const regexValue = document.querySelector('input[name="regex"]:checked').value;
    const regex = new RegExp(regexValue, 'g');
    const matches = text.match(regex);
    
    if (matches) {
        alert(`Padrão ${regexValue} encontrado, quantidade de ocorrências: ${matches.length}`);
    } else {
        alert(`Padrão ${regexValue} não encontrado`);
    }
}
