// Função em JS é First-Class Object (Citizens)
// High-Order Function


// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,5))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() { return 'Olá Mundo' }
console.log(obj.falar())

// Passar uma função como parâmetro
function run(fun){
    fun()
}
run(function() { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)        
    }
}

soma(3, 2)(5)
const cincoMais = soma(3,2)
cincoMais(4)
