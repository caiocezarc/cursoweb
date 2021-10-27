class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Cristiano')
pessoa1.falar()

//*na função factory o this não varia*
const criarPessoa = nome => {
    return {
        falar: () => `Meu nome é ${nome}`
    }
}

const pessoa2 = criarPessoa('Cezar')
console.log(pessoa2.falar())