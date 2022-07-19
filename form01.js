function criaElemento(cor, altura, largura){
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura} ${largura} ${altura+largura}`;
    document.body.appendChild(eNovo);
}
document.exm01.addEventListener('submit', submitListener);

function submitListener(event){
    event.preventDefault();
criaElemento(
    document.exm01.cor.value,
    Number(document.exm01.altura.value), //Number está convertendo o texto em numero
    Number(document.exm01.largura.value)
);
document.exm01.reset();
}