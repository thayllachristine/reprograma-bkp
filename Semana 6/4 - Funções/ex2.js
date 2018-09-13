// Escreva uma função em Javascript que recebe um nome, um pronome e um objeto e retorna "<nome> foi caminhar no parque. <pronome> encontrou <objeto>. <nome> decidiu levar <objeto> pra casa."
function npo(nome, pronome, objeto) {

    nome = prompt(`Insira um nome`)
    pronome = prompt(`Insira um pronome`)
    objeto = prompt(`Insira um objeto`)

    return `${nome} foi caminhar no parque. 
            ${pronome} encontrou ${objeto}. 
            ${nome} decidiu levar ${objeto} para casa.`
    
}



// Escreva uma função em Javascript que recebe um número qualquer e retorna a raiz quadrada dele.
function squareRootOf(number) {
    number = prompt(`Insira um número`)

    return alert(`A raiz quadrada de ${number} é ${Math.sqrt(number)}.`) 
}



// Escreva uma função em Javascript que recebe um número qualquer e retorna a representação binaria dele.
function repBin(num) {
    num = prompt(`Insira um número`)

    return alert(`A representação binária do número ${num}, \n
                 é ${parseInt(num).toString(2)}.`)
}


// Escreva uma função em Javascript que recebe uma lista de números e retorna o maior número da lista.
function bigNum() {
    return Math.max(...arguments) //spread
}



// Escreva uma função em Javascript que vai checar se duas ou mais strings são anagramas umas das outras.
function anagrama() {}

`palavra`.split(``).sort().join(``)


// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.

// recebe raioCirculo 

// calc diametro , circunferencia , area
// pi = 3.14
// area = pi * r.(Math.pow(2))