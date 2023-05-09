function contar(){
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = document.getElementById('res')

        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            res.innerHTML = `\u{1F6A8}  Impossivel contar  \u{1F6A8}`
            //window.alert(`[ERRO] Faltam dados`)
            
        }else {
            res.innerHTML = ' <br>Contando: <br>'
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (p <= 0) {
                window.alert ('Passo invalido! Considerando PASSO 1')
                p = 1
            }

            if(i < f){
                // Contagem crescente
                for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
                }

            } else {
                // Contagem regressiva
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                
            }
            res.innerHTML += ` \u{1F3C1}`

        }

}