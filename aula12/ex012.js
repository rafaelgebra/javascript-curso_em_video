var agora = new Date()
var hora =  agora.getHours()
let min = agora.getMinutes()
let seg = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${seg}`)
if (hora < 6)
    console.log('Boa madrugada!')

else if (hora < 12) {
    console.log('Bom dia!')
} 
else if (hora <18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}