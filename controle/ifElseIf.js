Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}


function imprimirResultado(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8)) {
        console.log('Aprovado')
    } else if(nota.entre(5, 6)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 4)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
     

}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(-1)