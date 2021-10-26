let a = 3

global.b = 123

this.c = 456
this.d = 656
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(global)

numero = 123456 //variáveis sem var, let ou const são adicionadas ao objeto global do node, não utilizar esse método.
console.log(global.numero)

//module.exports = { e: 134, g: 1245, f: 1234 }