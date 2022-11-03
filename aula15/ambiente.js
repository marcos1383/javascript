let num = [1, 4, 5, 2]
num.push(3)
num.sort()

console.log(num)
console.log(`O cumprimento é de: ${num.length}`)

let pos = num.indexOf(5)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
