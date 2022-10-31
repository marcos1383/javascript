function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = '\u{1F6A7}, preencha os campos, com valores diferentes de 0'
        
    } else {
        res.innerHTML = 'Entrando na contagem: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('[ERRO] Valor do passo é inválido, iremos considerar o valor 1')
            p = 1
        }
        if (i <= f) {
            for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F601}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F601}`
            }  
        }
        res.innerHTML += `\u{26F3}`
    }
}