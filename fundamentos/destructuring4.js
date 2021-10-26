function rand([min = 0, max = 1000]) {

    if(min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}

console.log(rand([1000, 1]))
console.log(rand([100, 500]))
console.log(rand([, 10000]))
console.log(rand([400]))
console.log(rand([]))
// console.log(rand())
