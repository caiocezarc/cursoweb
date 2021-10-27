//callback é uma função passada para uma outra função. E que será executada quando um determinado evento ocorrer.

const fabricantes = ['Mercedes', 'Audi', 'BWM']

function imprimir(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}

//nesse caso o evento é a repetição
fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante, indice) => console.log(indice, fabricante))


