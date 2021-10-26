const escola = 'Cod3r'

console.log(escola.charAt(2)) //retorna o caractere no index 2
console.log(escola.charCodeAt(4)) //o código do caractere na tabela ascii
console.log(escola.indexOf('r')) //mostra o index do caractere r 

console.log(escola.substring(1)) //retorna uma nova string a partir do caractere index 1
console.log(escola.substring(0, 3)) //retorna uma nova string do index 0 até o 2

console.log('Escola '.concat(escola).concat(' !!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace('o', 'e'))

console.log('Caio,Cezar,Ferreira'.split(',')) //transforma string em um array a partir de um separador


