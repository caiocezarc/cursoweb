const peso1 = 1.0
const peso2 = Number('3.5')

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.2323
const avaliacao2 = 7.5452

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //retorna o número com apenas 2 casas decimais
console.log(media.toString(2)) //retorna o número em forma de string e convertido para binário

console.log(typeof media) //number
console.log(typeof Number) //Função