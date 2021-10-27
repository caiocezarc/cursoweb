let dobro = function (num) {
    return 2 * num
}

dobro = (num) => {
    return 2 * num
}

dobro = num => 2 * num //return implícito 

console.log(dobro(2))

let ola = function() {
    return 'Olá'
}


ola = () => 'Olá'

ola = _ => 'Olá'

console.log(ola())
