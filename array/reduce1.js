//reduce transforma um array em um único elemento, seja um novo array, uma string, um number etc...


const alunos = [ 
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]


console.log(alunos.map(aluno => aluno.nota))

//Se o acumulador não for passado, por padrão ele será o primeiro elemento do array
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, valorAtual) {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
})

console.log(resultado)

