const [ a ] = [1, 2, 3]
console.log(a)


const [n1, , n3, , n5, , n7] = [1, 2, 3, 4, 5, 6, 7]
console.log(n1, n3, n5, n7)


const [, [, n2]] = [2, [1, 2]]
console.log(n2)