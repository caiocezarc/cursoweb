const notas = [6, 4, 7, 9, 5, 3, 0, 10, 8.5, 7.5, 8.5, 2]


//Sem Callback

const notasBaixas1 = []

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


//Com Callback

/*
a função filter percorre um array e gera um novo array a partir de uma callback que vai retornar verdadeiro ou falso, 
caso a callback retorne verdadeiro o elemento da vez será adicionado no novo array.
*/
const notasBaixas2 = notas.filter(function(notas) {
    return notas < 7
})
console.log(notasBaixas2)


const notasMenorQue7 = (notas) => notas < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)