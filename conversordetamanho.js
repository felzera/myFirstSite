let valorkminput = document.querySelector('input#valorkm')
let valormetrosinput = document.querySelector('input#valormetros')
let valorcminput = document.querySelector('input#valorcentimetros')
let valormilhasinput = document.querySelector('input#valormilhas')
let valorpesinput = document.querySelector('input#valorpes')
let valorpolinput = document.querySelector('input#valorpolegadas')

const divkm = document.querySelector('div#divkm')
const divmetros = document.querySelector('div#divmetros')
const divcentimetros = document.querySelector('div#divcentimetros')
const divmilhas = document.querySelector('div#divmilhas')
const divpes = document.querySelector('div#divpes')
const divpolegadas = document.querySelector('div#divpolegadas')

const botaovoltar = document.querySelector('input#botaovoltar')

let res = document.querySelector('p#res')

// Kilometros
function kmparametros(){
    if (valorkminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkm = Number(valorkminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkmmetros = valorkm * 1000
        res.innerHTML += `${valorfinalkmmetros} Metros`
    }
}

function kmparacm(){
    if (valorkminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkm = Number(valorkminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkmcm = valorkm * 100000
        res.innerHTML += `${valorfinalkmcm} Centímetros`
    }
}

function kmparamilhas(){
    if (valorkminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkm = Number(valorkminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkmmilhas = (valorkm/1.609).toFixed(2)
        res.innerHTML += `${valorfinalkmmilhas} Milhas`
    }
}

function kmparapes(){
    if (valorkminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkm = Number(valorkminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkmpes = (valorkm * 3280.84).toFixed(2)
        res.innerHTML += `${valorfinalkmpes} Pés`
    } 
}

function kmparapol(){
    if (valorkminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorkm = Number(valorkminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalkmpol = (valorkm * 39370.079).toFixed(2)
        res.innerHTML += `${valorfinalkmpol} Polegadas`
    } 
}

// Metros
function metrosparakm(){
    if (valormetrosinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valormetros = Number(valormetrosinput.value)
        botaovoltar.style.display = 'block'
        divkm.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmetroskm = valormetros/1000
        res.innerHTML += `${valorfinalmetroskm} Quilômetros`
    }
}

function metrosparacm(){
    if (valormetrosinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valormetros = Number(valormetrosinput.value)
        botaovoltar.style.display = 'block'
        divkm.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmetroscm = valormetros*100
        res.innerHTML += `${valorfinalmetroscm} Centímetros`
        
    }
}

function metrosparamilhas(){
    if (valormetrosinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valormetros = Number(valormetrosinput.value)
        botaovoltar.style.display = 'block'
        divkm.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmetrosmilhas = (valormetros/1609.344).toFixed(2)
        res.innerHTML += `${valorfinalmetrosmilhas} Milhas`
    }
}

function metrosparapes(){
    if (valormetrosinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valormetros = Number(valormetrosinput.value)
        botaovoltar.style.display = 'block'
        divkm.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmetrospes = (valormetros*3.28084).toFixed(2)
        res.innerHTML += `${valorfinalmetrospes} Pés`
    }
}

function metrosparapol(){
    if (valormetrosinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valormetros = Number(valormetrosinput.value)
        botaovoltar.style.display = 'block'
        divkm.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmetrospol = (valormetros * 39.37).toFixed(2)
        res.innerHTML += `${valorfinalmetrospol} Polegadas`
    }
}

// Centímetros
function cmparakm(){
    if (valorcminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorcm = Number(valorcminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divkm.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalcmkm = valorcm/100000
        res.innerHTML += `${valorfinalcmkm} Quilômetros`
    }
}

function cmparametros(){
    if (valorcminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorcm = Number(valorcminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divkm.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalcmmetros = valorcm/100
        res.innerHTML += `${valorfinalcmmetros} Metros`
    }
}

function cmparamilhas(){
    if (valorcminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorcm = Number(valorcminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divkm.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalcmmilhas = (valorcm/160934.4).toFixed(2)
        res.innerHTML += `${valorfinalcmmilhas} Milhas`
    }
}

function cmparapes(){
    if (valorcminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorcm = Number(valorcminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divkm.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalcmpes = (valorcm/30.48).toFixed(2)
        res.innerHTML += `${valorfinalcmpes} Pés`
    }
}

function cmparapol(){
    if (valorcminput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente!')
    } else {
        let valorcm = Number(valorcminput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divkm.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalcmpol = (valorcm/2.54).toFixed(2)
        res.innerHTML += `${valorfinalcmpol} Polegadas`
    }
}

// Milhas
function milhasparakm(){
    if (valormilhasinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valormilhas = Number(valormilhasinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divkm.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmilhaskm = (valormilhas * 1.609).toFixed(2)
        res.innerHTML = `${valorfinalmilhaskm} Quilômetros`
    }
}

function milhasparametros(){
    if (valormilhasinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valormilhas = Number(valormilhasinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divkm.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmilhasmetros = (valormilhas * 1609.344).toFixed(2)
        res.innerHTML = `${valorfinalmilhasmetros} Metros`
    }
}

function milhasparacm(){
    if (valormilhasinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valormilhas = Number(valormilhasinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divkm.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmilhascm = (valormilhas * 160934.4).toFixed(2)
        res.innerHTML = `${valorfinalmilhascm} Centímetros`
    }
}

function milhasparapes(){
    if (valormilhasinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valormilhas = Number(valormilhasinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divkm.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmilhaspes = valormilhas * 5280
        res.innerHTML = `${valorfinalmilhaspes} Pés`
    }
}

function milhasparapol(){
    if (valormilhasinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valormilhas = Number(valormilhasinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divkm.style.display = 'none'
        divpes.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalmilhaspol = (valormilhas * 63360)
        res.innerHTML = `${valorfinalmilhaspol} Polegadas`
    }
}

// Pés
function pesparakm(){
    if (valorpesinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpes = Number(valorpesinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divkm.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpeskm = (valorpes/3280.84).toFixed(5)
        res.innerHTML = `${valorfinalpeskm} Quilômetros`
    }
}

function pesparametros(){
    if (valorpesinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpes = Number(valorpesinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divkm.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpesmetros = (valorpes/3.281).toFixed(2)
        res.innerHTML = `${valorfinalpesmetros} Metros`
    }
}

function pesparacm(){
    if (valorpesinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpes = Number(valorpesinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divkm.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpescm = (valorpes*30.48).toFixed(2)
        res.innerHTML = `${valorfinalpescm} Centímetros`
    }
}

function pesparamilhas(){
    if (valorpesinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpes = Number(valorpesinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divkm.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpesmilhas = valorpes/5280
        res.innerHTML = `${valorfinalpesmilhas} Milhas`
    }
}

function pesparapol(){
    if (valorpesinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpes = Number(valorpesinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divkm.style.display = 'none'
        divpolegadas.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpespol = valorpes * 12
        res.innerHTML = `${valorfinalpespol} Polegadas`
    }
}

// Polegadas
function polparakm(){
    if (valorpolinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpolegadas = Number(valorpolinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divkm.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpolkm = (valorpolegadas/39370.079).toFixed(5)
        res.innerHTML = `${valorfinalpolkm} Quilômetros`
    }
}

function polparametros(){
    if (valorpolinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpolegadas = Number(valorpolinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divkm.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpolmetros = (valorpolegadas/39.37).toFixed(2)
        res.innerHTML = `${valorfinalpolmetros} Metros`
    }
}

function polparacm(){
    if (valorpolinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpolegadas = Number(valorpolinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divkm.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpolcm = (valorpolegadas * 2.54).toFixed(2)
        res.innerHTML = `${valorfinalpolcm} Centímetros`
    }
}

function polparamilhas(){
    if (valorpolinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpolegadas = Number(valorpolinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divkm.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpolmilhas = (valorpolegadas/63360).toFixed(5)
        res.innerHTML = `${valorfinalpolmilhas} Milhas`
    }
}

function polparapes(){
    if (valorpolinput.value.length == 0){
        alert('[ERRO] Valor inválido, por favor digite os dados corretamente')
    } else {
        let valorpolegadas = Number(valorpolinput.value)
        botaovoltar.style.display = 'block'
        divmetros.style.display = 'none'
        divcentimetros.style.display = 'none'
        divmilhas.style.display = 'none'
        divpes.style.display = 'none'
        divkm.style.display = 'none'
        res.innerHTML = ''
        let valorfinalpolpes = valorpolegadas/12
        res.innerHTML = `${valorfinalpolpes} Pés`
    }
}

function voltar(){
    divcentimetros.style.display = 'block'
    divkm.style.display = 'block'
    divmetros.style.display = 'block'
    divmilhas.style.display = 'block'
    divpolegadas.style.display = 'block'
    divpes.style.display = 'block'
    botaovoltar.style.display = 'none'
    res.innerHTML = 'Resultado: '
}

