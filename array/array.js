console.log(typeof Array, typeof new Array, typeof [])

const jogadores = new Array('Haaland', 'Messi', 'CR7')

console.log(jogadores[0])
console.log(jogadores[1])

jogadores[3] = 'Firmino'
jogadores.push('Neymar')
console.log(jogadores)

jogadores[9] = "Gabigol"
console.log(jogadores)
console.log(jogadores.length)

console.log(jogadores[8] === undefined)

jogadores.sort()
console.log(jogadores)

delete jogadores[2]


jogadores.splice(1, 1, 'Paquetá')
console.log(jogadores)