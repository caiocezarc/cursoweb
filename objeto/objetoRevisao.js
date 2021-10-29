// Coleção dinâmica de pares chave/valor

const produto = new Object()
produto.nome = 'Cadeira'
produto['preco'] = 50.00

console.log(produto)
delete produto.nome
console.log(produto)



const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'cr7',
        idade: 37,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 7
        }
    }, 
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 17
    }], 

    calcularValorSeguro: function() {
        // ...
    }

}

carro.proprietario.endereco.numero = 400
carro['proprietario']['endereco']['logradouro'] = 'Rua dos santos'


// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores.length)
