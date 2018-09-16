// Escreva uma condicional que verifica se dois numeros são iguais.
let num1 = prompt(`Insira um número: `)
let num2 = prompt(`Insira outro número: `)

if (num1 === num2) {
	`Os números inseridos são iguais!`
} else {
	throw `: Os números inseridos são diferentes!`
}



// Escreva uma condicional que verifica se um ano é bissexto ou não.
let ano = prompt(`Insira um ano: `)

if (ano % 4 === 0) { 
    `O ano ${ano} é bissexto!`
} else {
    throw `: O ano inserido não é bissexto!`
}


// Escreva uma condicional que recebe duas coordenadas e verifica se aquele ponto esta no primeiro, segundo, terceiro ou quarto quadrante do plano cartesiano.
let xPoint = prompt(`Insira o valor da primeira coordenada: `)
let yPoint = prompt(`Insira o valor da segunda coordenada: `)

if (xPoint > 0 && yPoint > 0) {
    //xPoint e yPoint são positivos
    `O ponto (${xPoint}, ${yPoint}) está no 1º quadrante do plano cartesiano.`
} else if (xPoint < 0 && yPoint > 0) {
    //xPoint é negativo e yPoint é positivo
    `O ponto (${xPoint}, ${yPoint}) está no 2º quadrante do plano cartesiano.`
} else if (xPoint < 0 && yPoint < 0) {
    //xPoint e yPoint são negativos
    `O ponto (${xPoint}, ${yPoint}) está no 3º quadrante do plano cartesiano.`
} else {
    //xPoint é positivo e yPoint é negativo
    `O ponto (${xPoint}, ${yPoint}) está no 4º quadrante do plano cartesiano.`
}



/* Escreva uma condicional que recebe as medidas de um triangulo e determina se ele é isosceles, equilatero ou escaleno.
- Triângulo escaleno: Todos os lados e ângulos são diferentes.
- Triângulos isósceles: dois lados iguais e os ângulos opostos a esses lados iguais. 
- Triângulo equilátero: Todos os lados e ângulos iguais. Concluímos que seus ângulos serão de 60°. 

/*Condição de existência de um triângulo: Para construir um triângulo é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
(bSide - cSide) < aSide < (bSide + cSide)
(aSide - cSide) < bSide < (aSide + cSide)
(aSide - bSide) < cSide < (aSide + bSide) */
let aSide = prompt(`Insira o lado A do triângulo: `)
let aAngle = prompt(`Insira o ângulo A do triângulo: `)

let bSide = prompt(`Insira o lado B do triângulo: `)
let bAngle = prompt(`Insira o ângulo B do triângulo: `)

let cSide = prompt(`Insira o lado C do triângulo: `)
let cAngle = prompt(`Insira o ângulo C do triângulo: `)

if ((
    aSide === bSide === cSide && 
    aAngle !== bAngle !== cAngle) && (
    ((bSide - cSide) < aSide < (bSide + cSide)) ||
    ((aSide - cSide) < bSide < (aSide + cSide)) ||
    (aSide - bSide) < cSide < (aSide + bSide)))  {
        `Este triângulo é escaleno!`
} else if (((
    aSide === bSide ||
    bSide === cSide ||
    cSide === aSide) && (
    aAngle === bAngle ||
    bAngle === cAngle ||
    cAngle === aAngle)) && (
    ((bSide - cSide) < aSide < (bSide + cSide)) ||
    ((aSide - cSide) < bSide < (aSide + cSide)) ||
    (aSide - bSide) < cSide < (aSide + bSide))) {
        `Este triângulo é isósceles!`
} else { 
    `Este triângulo é equilátero!`
}



// Escreva uma condicional que recebe um caractere e determina se esse caractere é uma vogal ou não. 
let caractere = prompt(`Insira um caractere: `)
let vogal = [`a`, `e`, `i`, `o`, `u`]

let vogal_2 = ["a", "b"]

for (let i = 0; i <= vogal.length; i++) {
    if (caractere === vogal[i]) {
        `O caractere ${caractere} é uma vogal!`
        break
    } else {
        throw `: O caractere ${caractere} não é uma vogal!`
    }
}

