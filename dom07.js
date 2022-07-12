console.log("Hello 07");


//----------------------------------------------------------------------------------------
// busca uma referencia para todos os elementos
const eSpans = document.querySelectorAll("span");
const eA = eSpans[0]; // PUXA O SPAN USANDO O INDICE DELE (PRIMEIRO, SEGUNDO ETC...)
const eB = eSpans[1];
const eS = eSpans[2];

const eButtons = document.querySelectorAll("button");
const eButtonSoma = eButtons[0];
const eButtonMultiplica = eButtons[1];

eButtonSoma.addEventListener("click", somaListener);
eButtonMultiplica.addEventListener("click", multiplicaListener);

function somaListener(event){
    console.log("Soma Listener!");
    soma();
}
function multiplicaListener(event){
    console.log("Multiplica Listener!");
    multiplica();
}

//---------------------------------
//OPERA OS DADOS (OUTRA FORMA)
function soma(){
const A = Number(eA.textContent);
const B = Number(eB.textContent);
const S = A+B;
eS.textContent = S;
}

function multiplica(){
    const A = Number(eA.textContent);
    const B = Number(eB.textContent);
    const S = A*B;
    eS.textContent = S;
    }
//---------------------------------

//Escreve na saida
   
