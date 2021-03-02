/*
    * Busca Binária
    * 
    * Requer um conjunto de dados ORDENADO
    * atua dividindo o array sucessivamente em metades aproximadas,
    * até que o valor de busca seja localizado, ounque o ponteiro
    * de fim acabe antes do ponteiro de inicio. Essa última situação
    * indica que o valor de busca não existe no conjunto
*/

function buscaBinaria( array, valorBusca){
    let ini = 0;
    let fim = array.length -1;
    let meio;
    while(fim >= ini) {
        meio = Math.floor((fim - ini) / 2); // Math.floor() arredonda para baixo
        if( array[meio] === valorBusca) return meio // Encontrou
        else if(valorBusca > array[meio]) ini = meio + 1;
        else fim = meio -1;
    }
    return -1; // não existe
}