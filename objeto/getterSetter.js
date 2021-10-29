const sequencia = {
    _valor: 1, //Convenção
    get valor() {
        return this._valor++ 
    },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

//chamando o get
console.log(sequencia.valor, sequencia.valor)

//chamando o set
sequencia.valor = 3000

console.log(sequencia.valor)