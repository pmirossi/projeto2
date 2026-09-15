const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")



let atual = 0;
let perguntaAtual;
let historiaFinal = ""



function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado()
    return
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = ""
    mostraAlternativa()
}

function mostraAlternativa(){

    for (const alternativa of perguntaAtual.alternativas){

        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa.texto 
        botaoAlternativas.addEventListener ("click", ()=> respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao)
        historiaFinal += afirmacoes + " "
        atual++
        mostraPergunta()
    


}

function mostraResultado(){

caixaPerguntas.textContent ="Em 2049..."
textoResultado.textContent = historiaFinal
caixaAlternativas.textContent = "";

}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length)
    console.log(posicao)
    return(lista[posicao])
}


mostraPergunta()