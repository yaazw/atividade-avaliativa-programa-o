const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
    mostraAlterntivas();

}

function mostraAlterntivas(){

mostraPergunta();
for(const alternativa of perguntaAtual.alternativas);
    document.createElement("button");
botaoAlternativas.textContent = alternativa;
caixaAlternativas.appendChild(botaoAlternativas);

}