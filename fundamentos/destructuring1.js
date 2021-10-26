//novo recurso ES2015

const pessoa = {
    nome: 'Caio',
    idade: 13,
    endereco: {
        logradouro: 'RUA ABC',
        numero: 5000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { agencia, num } } = pessoa 
console.log(agencia, num)


