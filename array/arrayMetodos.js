const jogadores = ['neymar', 'messi', 'cr7', 'haaland', 'paquetá']
jogadores.pop()
console.log(jogadores)

console.log(jogadores.shift()) // remove o primeiro

jogadores.push('mbappe')
console.log(jogadores)

console.log(jogadores.unshift('Bruno fernandes'))


// splice pode adicionar e remover elementos

//adicionar
jogadores.splice(2, 0, 'gabigol', 'bruno henrique')
console.log(jogadores)

//remover
jogadores.splice(2, 1)
console.log(jogadores)


const algunsJogadores = jogadores.slice(1, 3) //novo array
console.log(algunsJogadores)

const algunsJogadores2 = jogadores.slice(2) 
console.log(algunsJogadores2)
