const ferrari = {
    modelo: 'F40',
    velMax: 324   
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


//por padrão objetos criados tem o seu __proto__ apontando para Object.prototype
//em outras palavras herdam tudo de Object.prototype

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)





