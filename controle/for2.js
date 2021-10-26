const notas = [6, 9, 10, 5, 7, 2]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Rafel',
    sobrenome: 'Sena',
    idade: 45
}

for(let atributo in pessoa) {
    console.log(`${atributo } = ${pessoa[atributo]}`)
}