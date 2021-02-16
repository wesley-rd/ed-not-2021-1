// eleva um número ao 'quadrado'
// mas exeste o Math.pow() ou **

function quadrado(n) {
    return n * n;
}
console.log(quadrado(5));

// caracteristicas da função acima:
// 1 - apenas 1 parametro
// 2 - apenas uma linha de código, con return
// 3 - CANDIDATA PERFEITA PARA SE TORNAR EM ARROW FUNCTION

// tornando em arrow
// a - não precisa de parenteses envolvendo o parametro
// b - a palavra function é substituida pelo sina =>, DEPOIS do parametro
// c - não é necessário as chaves nem a palavra return
const quadrado2 = n => n * n;
console.log(quadrado2(9));