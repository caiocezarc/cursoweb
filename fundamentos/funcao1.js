//função sem retorno
function soma(a, b) {
    console.log(a + b)
}

soma(3, 5)
soma(2)
soma(2, 6, 7, 8)
soma()

//função com retorno

function imprimirSoma(a, b = 2) {
    return a + b
}

console.log(imprimirSoma(1, 2))
console.log(imprimirSoma(2))
console.log(imprimirSoma())