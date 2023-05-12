
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. <br>`
    if(hora >= 6 && hora < 12){
        msg.innerHTML += `Bom dia!!`
        img.src = 'fotos/manha.png'
        document.body.style.background = '#e2cd9f'

    }else if (hora > 12 && hora < 18){
        msg.innerHTML += `Bom tarde!!`
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#b9846f'
        
    }else if (hora >= 18) {
        msg.innerHTML += 'Boa noite!!'
        img.src = 'fotos/noite.png'
        document.body.style.background = '#515154'
    }else {
        img.src = 'fotos/noite.png'
        document.body.style.background = '515154'
    }


}
       
