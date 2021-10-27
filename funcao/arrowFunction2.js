/*
    o this em uma função arrow não varia,
    ele é ligado ao contexto léxico em que foi escrito, nesse caso dentro da função pessoa.
    logo o this aponta para o objeto pessoa.
*/

function Pessoa() {
    this.idade = 0 

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 2000)
}

new Pessoa()