// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)

//Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 4))

//Retorno implícito 
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprimir = nome => nome || 'Cezar'
console.log(imprimir('Caio'))
console.log(imprimir())
