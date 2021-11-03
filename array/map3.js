Array.prototype.map2 = function(callback) {
    let array = []
    for(let i = 0; i < this.length; i++){
        array.push(callback(this[i], i, this))
    }

    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


const converterParaObjeto = (json) => JSON.parse(json)
const precos = (produto) => produto.preco

const resultado = carrinho.map2(converterParaObjeto).map2(precos)
console.log(resultado)
