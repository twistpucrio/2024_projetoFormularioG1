function executar(n, t){
    const padrao = RegExp('maria*','g');
    let resp;
    resp =  padrao.exec(nome);
    alert("Nome: "+resp);

    resp = padrao.exec(t);
    alert("Texto: "+resp);
}

function testar(n,t){
    const padrao = new RegExp('maria*', 'g');
    
    let resp = padrao.test(n);
    alert("Nome: "+resp);

    resp = padrao.test(t);
    alert("Texto: "+resp);
}

window.addEventListener("load", function(){
    let btnTestar = document.querySelector("#btnTestar");
    let btnExecutar =  document.querySelector("btnExec");

    
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

    btnTestar.addEventListener("click", function(){
        nome = document.querySelector("#nome");
        texto =  document.querySelector("texto");
        testar (nome,texto,value);
    });
});