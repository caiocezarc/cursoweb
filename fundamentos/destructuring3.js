function rand( { min = 0, max = 1000} ){
    let valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}


const obj = {min: 0, max: 500}
console.log(rand(obj))
console.log(rand({min: 0}))
console.log(rand({}))
// console.log(rand())