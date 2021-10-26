//passagem por referência como em objetos, as variáveis envolvidas irão apontar para o mesmo endereço de memória
//passagem por valor como em tipos primitivos, apenas ocorre uma cópia de valor. 


//undefined: declarado, porém não inicializado
//is not defined: não declarado e nem inicializado
//null: não aponta para nenhum endereço de memória


let valor //não inicializada
console.log(valor)


valor = null // ausência de valor, não aponta pra nenhum endereço de memória
console.log(valor)
// console.log(valor.toString()) // erro ! 

const produto = {}
console.log(produto.preco) //undefined

produto.preco = 3.40
console.log(produto)

produto.preco = undefined //não atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)


