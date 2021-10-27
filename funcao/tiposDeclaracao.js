console.log(soma(2,3)) //funções tradicionais (function declaration) são carregadas antes pelo javascript, portanto é possível acessa-las antes da sua declaração.

//function declaration
function soma(x, y) {
    return x + y
}

//functon expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(2,3))

//named function expression
const mult = function mult(x, y) {
    return x * y
} 

console.log(mult(3, 5))