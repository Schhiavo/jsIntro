let estado = {
    cor:"#000000",
    largura: 0,
    altura: 0,
};

function criaElemento(cor, altura, largura){
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura} ${largura} ${altura+largura}`;
    document.body.appendChild(eNovo);
    eNovo.style=`color: ${cor};`
}
document.exm01.addEventListener('submit', submitListener);

function submitListener(event){
    event.preventDefault();
    estado.cor = document.exm01.cor.value;
    estado.altura = Number(document.exm01.altura.value);
    estado.largura = Number(document.exm01.largura.value);
criaElemento(estado.cor, estado.altura, estado.largura);
   

document.exm01.reset();
}