//Notação literal de objeto
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Função construtora 
function Produto(nome, preco, desc) {
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new Produto('Cadeira', 30, 0.1)

console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('cr7', 50000000, 3)
console.log(f1.getSalario())

// Object.create
const obj3 = Object.create(null)
obj3.nome = 'cr7'

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)




