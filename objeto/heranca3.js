const pai = {nome: 'cr7', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // criando objeto com __proto__ apontando para pai
filha1.nome = 'Exemplo'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Exemplo2', writable: false, enumerable: true}
})

console.log(filha2.nome)
console.log(filha2.corCabelo)

filha2.nome = 'Exemplo3' 
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`)
}



