const alunos = [ 
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: todos os alunos são bolsitas ? 
const resultado1 = alunos.map(aluno => aluno.bolsista).reduce((acumulador, valorAtual) => {
    return acumulador && valorAtual   
    
    
})

console.log(resultado1)

// Desafio 1: algum aluno é bolsista ? 
const resultado2 = alunos.map(aluno => aluno.bolsista).reduce((acumulador, valorAtual) => {
    return acumulador || valorAtual   
})

console.log(resultado2)
