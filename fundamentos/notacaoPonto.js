console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Caio'
// obj1['sobrenome'] = 'Cezar'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log(`Olá ${this.nome}`)
    }    
}

const obj2 = new Obj('Rafael')
const obj3 = new Obj('Pedro')
console.log(obj2.nome, obj3.nome)
obj2.exec()