//variáveis criadas com var só possuem escopo global e escopo de função.

{
    {
        {
            { 
                var sera = 'Será ??' 
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function imprimir(){
    var nome = 'Caio'
    console.log(nome)
}

imprimir()
console.log(nome)

