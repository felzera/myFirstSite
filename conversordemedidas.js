var valorcelsiusinput = document.querySelector('input#valorcelsius')
var valorfahrenheitinput = document.querySelector('input#valorfahrenheit')
var valorkelvininput = document.querySelector('input#valorkelvin')

const divcelsius = document.querySelector('div#divcelsius')
const divfahrenheit = document.querySelector('div#divfahrenheit')
const divkelvin = document.querySelector('div#divkelvin')

const botaovoltar = document.querySelector('input#botaovoltar')

var res = document.querySelector('p#res')

function celfar(){ // Calcula celsius para fahrenheit
    if (valorcelsiusinput.value.length == 0) {
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
       let valorcelsius = Number(valorcelsiusinput.value)
       botaovoltar.style.display = 'block'
       divfahrenheit.style.display = 'none'
       divkelvin.style.display = 'none'
       res.innerHTML = ''
       let valorfinalcelsiusfahrenheit = (valorcelsius*1.8+32).toFixed(2)
       res.innerHTML += `${valorfinalcelsiusfahrenheit} Fahrenheit`
    }
}

function celkelv(){ // Calcula celsius para kelvin
    if (valorcelsiusinput.value.length == 0) {
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorcelsius = Number(valorcelsiusinput.value)
        botaovoltar.style.display = 'block'
        divfahrenheit.style.display = 'none'
        divkelvin.style.display = 'none'
        res.innerHTML = ''
        let valorfinalcelsiuskelvin = (valorcelsius + 273.15).toFixed(2)
        res.innerHTML += `${valorfinalcelsiuskelvin}  Kelvin`
       
    }
}

function farcel(){ // Calcula fahrenheit para celsius
    if (valorfahrenheitinput.value.length == 0) {
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorfahrenheit = Number(valorfahrenheitinput.value)
        botaovoltar.style.display = 'block'
        divcelsius.style.display = 'none'
        divkelvin.style.display = 'none'
        res.innerHTML = ''
        let valorfinalfahrenheitcelsius = ((valorfahrenheit-32)*5/9).toFixed(2)
        res.innerHTML += `${valorfinalfahrenheitcelsius} Celsius`

    }
}

function farkelv(){ // Calcula fahrenheit para kelvin
    if (valorfahrenheitinput.value.length == 0) {
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorfahrenheit = Number(valorfahrenheitinput.value)
        botaovoltar.style.display = 'block'
        divcelsius.style.display = 'none'
        divkelvin.style.display = 'none'
        res.innerHTML = ''
        let valorfinalfahrenheitkelvin = ((valorfahrenheit+459.67)*5/9).toFixed(2)
        res.innerHTML += `${valorfinalfahrenheitkelvin} Kelvin`

    }
}

function kelvcel(){ // Calcula kelvin para celsius
    if (valorkelvininput.value.length == 0) {
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkelvin = Number(valorkelvininput.value)
        botaovoltar.style.display = 'block'
        divcelsius.style.display = 'none'
        divfahrenheit.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkelvincelsius = (valorkelvin - 273.15).toFixed(2)
        res.innerHTML += `${valorfinalkelvincelsius} Celsius`

    }
}

function kelvfar(){ // Calcula kelvin para fahrenheit
    if (valorkelvininput.value.length == 0) {
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkelvin = Number(valorkelvininput.value)
        botaovoltar.style.display = 'block'
        divcelsius.style.display = 'none'
        divfahrenheit.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkelvinfahrenheit = ((valorkelvin-273.15)*9/5 + 32).toFixed(2)
        res.innerHTML += `${valorfinalkelvinfahrenheit} Fahrenheit`
        
    }

}

function voltar(){
    divcelsius.style.display = 'block'
    divfahrenheit.style.display = 'block'
    divkelvin.style.display = 'block'
    botaovoltar.style.display = 'none'
    res.innerHTML = 'Resultado: '
}