Array.prototype.filter2 = function (callback) {
    let newArray = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        } 
    }  
    return newArray

}

const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4129, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo Plástico', preco: 18.99, fragil: false}
]




const caros = (produto, index, array) => produto.preco >= 500
const fragil = (produto, index, array) => produto.fragil


const resultado = produtos.filter2(caros).filter2(fragil)
console.log(resultado)