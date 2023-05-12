function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12){
        msg.innerHTML += ` <br> Boa Dia!!`
        img.src = 'fotos/manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += ` <br> Boa tarde!!`
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#b9846f'

    } else {
        msg.innerHTML += ` <br> Boa Noite!!`
        img.src = 'fotos/noite.png'
        document.body.style.background = '#515154'
    }     
}
