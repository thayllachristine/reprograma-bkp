/* Ordenação : Bubble Sort */

//Essa constante está chamando a função isSorted que está no arquivo '_helpers.js.
//A função isSorted verifica se um array é diferente do outro e retorna se é verdadeiro ou falso
const { isSorted } = require('./_helpers')

/* Esta função recebe uma lista e a organiza utilizando o método Bubble Sort.*/ 
function bubbleSort(arr) { //Declaração da função e do array
	while(!isSorted(arr)) { //Enquanto a função isSorte for verdadeira ...
		for (let i = 1; i < arr.length; i++) { //A variável i começará com 1, verificará se o comprimento do array é menor que i e irá incrementar
			if (arr[i - 1] > arr[i]) { //Se array[i-1] for maior que array[i]
				
				//Para organizar as posições do array
				const aux = arr[i] //Uma nova constante será definidica como auxiliar para guardar as infos do array 
				arr[i] = arr[i - 1] //A array guardada irá receber o valor -1 e assim trocar as posições
				arr[i - 1] = aux //Verifica o array-1 e a constante auxiliar e insere
			}
		}
		
		
	}

	return arr //Retorna o array
}

exports = module.exports = bubbleSort



/* !var = altera o valor de vdd pra falso e vice-versa */

/* função bubbleSort (vetor) {
	enquanto a função isSorted for verdadeira { 

	}
} */

// function bubbleSort(vetor) {
// 	while (!listaOrdenada(vetor)) {
// 		for (let posicao = 1; posicao < vetor.length; posicao++){
// 			if (vetor[posicao - 1] > vetor[posicao]) {
// 				const auxiliar = vetor[posicao]
// 				vetor[posicao] = vetor[posicao - 1]
// 				vetor[posicao - 1] = auxiliar
// 			}
// 		}
// 	}

// 	return vetor
// }




--------
Teste de mesa
[6, 2, 9, 1]

vetor[0] 6
vetor[1] 2
vetor[2] 9 
vetor[3] 1


// 1ª interação do while 
//     1ª interação do for (i=1) : 6 > 2? > sim > aux 2 > [6, 6, 9, 1] > [2, 6, 9, 1]
//     2ª interação do for (i=2) : 6 > 9? > não > [2, 6, 9, 1]
//     3ª interação do for (i=3) : 9 > 1? > sim > aux 1 >  [2, 6, 9, 9] >  [2, 6, 1, 9]

// 2ª interação do while 
//     2 > 6? > não > [2, 6, 1, 9]
//     6 > 1? > sim > aux 1 > [2, 6, 6, 9] > [2, 1, 6, 9]
//     6 > 9? > não > [2, 1, 6, 9]

// 3ª interação do while     
//     2 > 1? > sim > aux 1 > [2, 2, 6, 9] > [1, 2, 6, 9]
//     2 > 6? > não 
//     6 > 9? > não 

// 4ª interação do while 
//     1 > 2? não
//     6