const nums = [1, 2, 3, 4]

// Map é um for com um propósito (transformar os dados percorridos), e retorna um novo array do mesmo tamanho do array "original" ( o que chama a função)

const resultado = nums.map(function(valor, index, array) {
    return valor * 2
})

const soma10 = (valor) => valor + 10
const triplo = (valor) => valor * 3
const paraDinheiro = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`

const resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)



