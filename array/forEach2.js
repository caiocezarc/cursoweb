Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }

    return array
}

const array1 = [1224, 1241, 123]

array1.forEach2((valor, index) => {
    console.log(index, valor)
})

console.log(array1)