const quaseArray = {0: 'cr7', 1: 'messi', 2: 'neymar', 3: 'haaland'}
console.log(quaseArray)

Object .defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)    
    },
    enumerable: false
})

console.log(quaseArray[0])

const jogadores = Object.values(quaseArray)

console.log(quaseArray.toString(), jogadores) 
