const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços 

const converterParaObjeto = (json) => JSON.parse(json)
const precos = (produto) => produto.preco

const resultado = carrinho.map(converterParaObjeto).map(precos)
console.log(resultado)
