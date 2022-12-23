let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resul = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''  
    num.focus()
}

function finalizar(){
    if(valores.length == ''){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        resul.innerHTML = ''
        resul.innerHTML += `<p>Ato todo, temos ${tot} números cadastrados. </p>`
        resul.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resul.innerHTML += `<p>O menor valor informado doi ${menor}.</p>`
        resul.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resul.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}