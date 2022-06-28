const pessoa = {
    nome: "Fulano", // a virgula deve sempre existir, entre um elemento e outro
    "idade": 18,    // as aspas são opcionais
}; // cria uma instancia direta, ou seja, um objeto literal (um agrupamento de valores)

console.table(pessoa); // imprime todas as informações de pessoa
console.log(pessoa.idade, pessoa.nome); // imprime as informações pedidas
console.log(pessoa["idade"], pessoa["nome"]); // imprime as informações pedidas

pessoa.altura = 1.82; // adiciona altura á pessoa
pessoa["massa"] = 84.3; // adiciona massa á pessoa
console.table(pessoa); // imprime pessoa

// OBS: pessoa é uma constante, ela é tratada como um vetor, nesse caso, pode-se manipular os valores dentro, mas não trocar o vetor!