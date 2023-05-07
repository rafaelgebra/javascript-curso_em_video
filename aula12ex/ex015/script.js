function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'fotos/bebem.png')

            }else if (idade <= 18) {
                // Jovem
                img.setAttribute('src', 'fotos/bebem.png')
    
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotos/bebem.png')
            
            }else {
                // Idoso
                img.setAttribute('src', 'fotos/bebem.png')
            }




        }   if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade <= 10) {
                    // Criança
                    img.setAttribute('src', 'fotos/bebem.png')

                }else if (idade <= 18) {
                    // Jovem
                    img.setAttribute('src', 'fotos/bebem.png')

                }else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'fotos/bebem.png')

                }else {
                    // Idoso
                    img.setAttribute('src', 'fotos/bebem.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    }
}