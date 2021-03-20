/*
    MERGE SORT

    No processo de ordenação, esse algoritmo 'desmonta' o vetor original
    contendo N elementos até obter N vetores com 1 elemento cada um.
    Em seguida utilizando a técnica de mesclagem (merge), 'remonta' o vetor
    dessa vez com os elementos ja me ordem.
*/

function mergeSort(array) {

    function mesclar(arrayEsq, arrayDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < arrayEsq.length && pDir < arrayDir.length) {
            if(arrayEsq[pEsq] < arrayDir[pDir]){
                vetRes.push(arrayEsq[pEsq])
                pEsq++
            }else{
                vetRes.push(arrayDir[pDir])
                pDir++
            }
        }
        // Descobrir qual lado sobrou
        let sobra

        // Sobra a esquerda
        if(pEsq < pDir) sobra = arrayEsq.slice(pEsq)
        // Sobra a direita
        else sobra = arrayDir.slice(pDir)

        // retornar o array com o resultado  + sobra

        return [...vetRes, ...sobra]
    }


    if(array.length > 1){
        const meio = Math.floor(array.length / 2)
        //slice() separa um vetor , copiando o elemento desde a posição inicial informada
        //(inclusive) até a posição final (exclusive -> a posição final não entra)
        let arrayEsq = array.slice(0, meio)
        // caso o 2º parametro do slice() seja omitido, serão copiados os elementos 
        // desde a posição informada até a posição final
        let arrayDir = array.slice(meio)
        
        console.log({arrayEsq, arrayDir})

        arrayEsq = mergeSort(arrayEsq)
        arrayDir =  mergeSort(arrayDir)

        const arrayFinal = mesclar(arrayEsq, arrayDir)
        console.log({arrayFinal})

        return arrayFinal
    }
    return array // array de 1 elemento, não modificado
}

let num = [7, 4, 9, 3, 5, 8, 1, 10, 0, 2, 6]
let numOrd = mergeSort(num)
console.log({numOrd})