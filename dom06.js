console.log("Hello 06");
// captura referencias do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("button");

function mudaTexto(){
eP.textContent = "Ok, funcionou!";

}

function ouvinteClick(event){
console.log("ouvinteClick");
mudaTexto();
}
eButton.addEventListener("click", ouvinteClick);
