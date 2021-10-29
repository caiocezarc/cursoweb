// pessoa -> 123 -> {...}
const pessoa = {}
pessoa.nome = 'cr7'
pessoa.idade = 36
console.log(pessoa)


// pessoa -> 456 -> {...}
// pessoa = {nome: 'messi', idade: 30}

Object.freeze(pessoa)

pessoa.nome = 'messi'
pessoa.altura = 1.71
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'haaland', idade: 21})
pessoaConstante.altura = 1.90
console.log(pessoaConstante)



