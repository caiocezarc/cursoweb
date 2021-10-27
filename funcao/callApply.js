function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 5000,
    desc: 0.1,
    getPreco
}

global.preco = 2000
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco: 10000, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 1, '$'))
console.log(getPreco.apply(carro, [2, '$']))