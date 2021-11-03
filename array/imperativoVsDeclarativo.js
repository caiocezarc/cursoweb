

const alunos = [
    {nome: 'João', nota: 7.9}, 
    {nome: 'Maria', nota: 9.2}
]

// Imperativo 
let total = 0
for(let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota 
}
console.log(total / alunos.length)


// Declarativo
const getNotas = (aluno) => aluno.nota
const soma = (acumulador, nota) => acumulador + nota

const resultado = alunos.map(getNotas).reduce(soma)
console.log(resultado / alunos.length)




