//par nome/valor
//contexto léxico é o local/contexto em que a variável foi escrita.


const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Oi'
    return saudacao
}

const cliente = {
    nome: 'Caio',
    idade: 15
}

console.log(saudacao)
console.log(exec())
console.log(cliente)




