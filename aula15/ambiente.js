let num = [5, 8, 4]
num[3]=6 // é escolhido a posição manualmente
num.push(7) // é escolhido a posição automaticamente
num.length // o comprimento do vetor // (length não é um metodo é um atributo)
num.sort() // Ordena os em ordem crescente
    console.log(`O vetor tem ${num.length} elementos`)
    console.log(`Com o .sort() os elementos ficam ordenados ${num.sort()}`)
