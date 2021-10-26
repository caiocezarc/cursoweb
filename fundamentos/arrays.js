let array = [23, 12, 56, 23, 49]
console.log(array[0], array[4])

console.log(array[5]) //undefined

array[5] = 10000
console.log(array.length)

array.push({id: 1}, null, 'teste', false) //adiciona elementos a um array
console.log(array)

console.log(array.pop()) //remove e retorna o último elemento de um array
delete array[0]
console.log(array)

console.log(typeof array)
