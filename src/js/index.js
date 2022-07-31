//Carrega botão
const btnAvancar = document.getElementById("btn-avancar");
//Carrega botão
const btnVoltar = document.getElementById("btn-voltar");
//Carregar os cartões
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}
function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length -1) cartaoAtual = -1;
    
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);    
})

btnVoltar.addEventListener('click', function(){

    if(cartaoAtual === 0) cartaoAtual = cartoes.length;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})