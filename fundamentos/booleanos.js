let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1

// !! converte valores em boolean
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log(!!('' || null || 0 || 'texto'))

let nome = ''

console.log(nome || 'Caio')