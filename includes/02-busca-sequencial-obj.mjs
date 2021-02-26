function buscaSequencial(array, valorBusca){
    for (let i = 0; i < array.length; i++) {

        // Em vez de fazer a comparação dentro dad função de busca,
        // "terceirizamos" essa comparação chamando uma função externa
        if (fnComp(array[i] === valorBusca)) return i // retorna a posição onde foi encontrado
    }
    return -1 
}

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNome } from ''
