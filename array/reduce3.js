Array.prototype.reduce2 = function(callback, valorAcumulador) {
    const indiceInicial = valorAcumulador ? 0 : 1 

    let acumulador = valorAcumulador || this[0]
    
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
        
    }

    return acumulador

}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]


const resultado = numeros.reduce2(function(acumulador, valorInicial) {
    console.log(acumulador, valorInicial)
    return acumulador + valorInicial
})

console.log(resultado)