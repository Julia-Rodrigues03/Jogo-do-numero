let listaDeNumerosSorteados = []
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let 

function exibirTextonaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto; }
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.2; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
}
  

function exibirMensagemInicial() {
  exibirTextonaTela('h1', 'Jogo do número secreto');
  exibirTextonaTela('p', 'Escolha uma numero de 1 á 10 ');
}

exibirMensagemInicial();
function verificarChute() {
  let chute = document.querySelector('input').value;

  if(chute == numeroSecreto) {
    exibirTextonaTela('h1' , 'Acertou');
    let palavraTentativa = tentativas > 1 ?  'tentativas' : 'tentativa';
    let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextonaTela('p' , mensagemTentativas  );
    document.getElementById('reiniciar').removeAttribute
    ('disabled');
  } else {
    if (chute > numeroSecreto){
      exibirTextonaTela('p' , 'O numero secreto é menor ');
    } else{
      exibirTextonaTela('p' , 'o numero secreto é maior');
    }
    tentativas ++;
    limparCampo();

  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite);{
  listaDeNumerosSorteados = []
}
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}