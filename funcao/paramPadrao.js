// Estratégia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1(1, 2, 3), soma1(2, 3), soma1(1), soma1())

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //se o index 1 está presente no array arguments
    c = isNaN(c) ? 1 : c

    return a + b + c
}
console.log(soma2(1, 2, 3), soma2(2, 3), soma2(1), soma2())


// Valor padrão es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(1, 2, 3), soma3(2, 3), soma3(1), soma3())