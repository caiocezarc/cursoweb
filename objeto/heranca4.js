function MeuObjeto() {}
console.log(MeuObjeto.prototype)


//objetos instanciados apartir de uma função construtora apontam para o prototype daquela função.
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'cr7'
MeuObjeto.prototype.falar = function () {
    console.log(`Oi meu nome é ${this.nome}`)
}
console.log(MeuObjeto.prototype)

obj1.falar()

obj2.nome = 'Messi' //shadowing
console.log(obj2)

obj2.falar()


const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'haaland'
obj3.falar()


//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log((new Object).__proto__ === Object.prototype)

console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Object.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)

