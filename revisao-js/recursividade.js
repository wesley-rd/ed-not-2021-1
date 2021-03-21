// Fatorial de um número

// 5! fatorial = 5 * 4 * 3 * 2 * 1= 120

// Função de calculo do fatorial , pelo metodo iterativo 

function fatorial1 (n) {
    let res = 1;
    for(let i = n; i > 1; i--) res *= i
    return res  
}

console.log(fatorial1(5))
console.log(fatorial1(4))

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// ou seja
// 5! é igual a 5* 4!
// ou 
// 5! = 5 * (5 - 1)!
// n! = n * (n - 1)!
// 1! = 1
// 0! = 1

// função de calculo fatorial, por método RECURSIVO
function fatorial2(n) {
    if(n <= 1 ) {
        return 1;    // CONDIÇAO DE SAIDA
    }else {
       return n * fatorial2(n - 1)
    }
}
console.log(fatorial2(5))
console.log(fatorial2(1))