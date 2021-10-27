const valor = 'Global'


//o contexto léxico é o contexto em que a função / variável foi escrita. 
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()


