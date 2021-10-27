const pessoa = {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao)   
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas OO e funcional


const falar2 = pessoa.falar.bind(pessoa) // a função bind determina quem é o responsável pela execução daquele método, portanto o this será o objeto pessoa.
falar2()