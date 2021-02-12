let frutas = ['maçã', 'laranja', 'uva', 'banana', 'jaca']

// array original
console.log(frutas);

// retirando o último elemento
let ultimaFruta = frutas.pop();

console.log(frutas);

console.log(ultimaFruta);

//retirar o primeiro elemento

let primeiraFruta = frutas.shift();

console.log(frutas);
console.log(primeiraFruta);

// retirar um elemento do meio do array

let frutaDoMeio = frutas.splice(1, 1);// splice sempre retornará um array

console.log(frutaDoMeio);