const eValor = document.querySelector("p");
const eButtons = document.querySelectorAll("button");
const eParButton = eButtons[0];
eParButton.addEventListener("click", ehParListerner);
const eImparButton = eButtons[1];
eImparButton.addEventListener("click", ehImparListerner);

const eLists = document.querySelectorAll("ul");
const eParList = eLists[0];
const eImparList = eLists[1];

function sorteiaValor(){
const novoNumero = Math.floor(Math.random()*10);
eValor.textContent = novoNumero;

}

function ehParListerner(event){
    console.log("É par!");
    criaElemento(true);
}
function ehImparListerner(event){
    console.log("É impar!");
    criaElemento(false);
}

function criaElemento(ehPar){
    const eLi = document.createElement("Li");
    eLi.textContent = eValor.textContent;

    if(ehPar === true){
        eParList.appendChild(eLi);
    }
    else{
        eImparList.appendChild(eLi);
    }
    sorteiaValor();
}