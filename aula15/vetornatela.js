let valores = [1, 3, 2, 4, 7, 9]

//console.log(valores[3])

/* for(let pos = 0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

            O CODIGO ACIMA, DÁ O MESMO RESULTADO QUE O VALOR ABAIXO!!!

*/  

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 