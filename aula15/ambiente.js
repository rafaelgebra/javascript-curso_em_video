let valores = [8, 1, 7, 4, 2, 9 ]
valores.sort()
console.log(valores)
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let num = valores.indexOf(2)
if (num == -1){
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor esta na posição ${num}`)
}




