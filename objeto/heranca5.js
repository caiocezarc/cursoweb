console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('haaland'.reverse())


Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4].first())

//não sobrescreva métodos que já existem nos prototypes

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('string'.reverse())

