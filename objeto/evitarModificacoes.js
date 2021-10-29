// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Celular',
    preco: 1500
})
produto.nome = 'TV'
delete produto.preco
console.log(produto)


// Object.seal
const pessoa = { nome: 'cr7'}
Object.seal(pessoa)

pessoa.nome = 'messi'
pessoa.sobrenome = 'sete'
delete pessoa.nome 

console.log(pessoa)

// Object.freeze = selado + valores constates 



