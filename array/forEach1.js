const jogadores = ['neymar', 'messi', 'cr7', 'haaland']


//forEach recebe uma callback que é disparada a cada interação da repetição.
jogadores.forEach(function(jogador, index, array) {
    console.log(`${index + 1} ${jogador  }`)
    console.log(array)
})

jogadores.forEach((jogador) => console.log(jogador))

const exibirJogador = jogador => console.log(jogador)
jogadores.forEach(exibirJogador)