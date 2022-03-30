function gerarFrase(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var linguagem = document.getElementById("linguagem").value

    var elementoMensagem = document.getElementById("mensagem") 
    var respostaUsuario = "<p>Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!</p><br><p>Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.<input type='number' name='resp' id='resp'>"
    elementoMensagem.innerHTML = respostaUsuario;

    document.getElementById("primeiroOK").hidden = true
    document.getElementById("segundoOK").hidden = false
}

function segundaFrase(){
    var alternativaUsuario = document.getElementById("resp").value
    var segundaResposta = ""

    if(alternativaUsuario == 1){
        var segundaResposta = "Muito bom! Continue estudando e você terá muito sucesso."
    } else if (alternativaUsuario == 2){
        var segundaResposta = "Ahh que pena... Já tentou aprender outras linguagens?"
    } else {
        var segundaResposta = "Não entendi sua reposta mas ok"
    }

    var elementoAlternativa = document.getElementById("alternativa")
    elementoAlternativa.innerHTML = segundaResposta

    document.getElementById("segundoOK").hidden = true
}

