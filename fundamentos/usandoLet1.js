//variáveis criadas com let tem escopo global, escopo de função e escopo de bloco.

let numero = 1

{
    let numero = 2 
    //com let irá buscar o escopo mais próximo, caso não encontre irá nos mais abrangentes.
    console.log(`dentro ${numero}`)
}

console.log(`fora ${numero}`)
