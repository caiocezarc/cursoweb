let comparaComThis = function(param) {
    console.log(this === param)   
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

/*
como uma função arrow tem o seu this/objeto definido no contexto léxico em que a função foi escrita,
o this não aponta para o global e sim para o módulo do node.
*/
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj) // não é possível mudar o this de uma função arrow
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)