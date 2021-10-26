// hoisting: comportamento padrão de jogar declaração de uma variável para o topo.
// variáveis criadas com VAR sofrem hoisting.


console.log(a) // foi declarada pois sofre o hosting, porém não foi definida.
var a = 3
console.log(a)

console.log(b) //erro
let b = 5 //variáveis criadas com let não sofrem hoisting.
console.log(b)
