function soma() {
    let soma = 0
    //arguments é um array interno que está presente em toda função
    for(let i in arguments) {
        soma += arguments[i]
    }
    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3, 4))

console.log(soma(1, 2, 3, 'Teste'))
console.log(soma('a', 'b', 'c'))