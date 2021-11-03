const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4129, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo Plástico', preco: 18.99, fragil: false}
]


//A função filter como já diz o nome 'filtra' um array em um novo array.
//A função filter recebe uma callback que caso retorne true, o elemento da vez será adicionado no novo array gerado.

const caros = (produto) => produto.preco >= 500
const fragil = (produto) => produto.fragil


const resultado = produtos.filter(caros).filter(fragil)
console.log(resultado)