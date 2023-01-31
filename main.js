var preço = {realD: 0.20,realE: 0.18,dolarR: 5.08,dolarE: 0.92,euroR: 5.52,euroD: 1.09}

function calcular(){
    var erro = true
    var num = Number(price.value)

    if (Number.isNaN(num)){
        erro = false
        valor.innerHTML = `Erro`
        alert(`Valor invalido`)
    }
    if (coin1.value == ``){
        erro = false
        valor.innerHTML = `Erro`
        alert(`Moeda invalida`)
    }
    if (coin2.value == ``){
        erro = false
        valor.innerHTML = `Erro`
        alert(`Câmbio invalido`)
    }
    if ((coin1.value == `R$` && coin2.value == `real`) || (coin1.value == `$` && coin2.value == `dolar`) || (coin1.value == `€` && coin2.value == `euro`)){
        erro = false
        valor.innerHTML = `Erro`
        alert(`Conversões iguais`)
    }

    if (erro){
        if (coin2.value == `real`){
            if (coin1.value == `$`){
                let valor1 = preço.dolarR
                valor.innerHTML = `Calculando...`
                cifrao.innerHTML = ``

                setTimeout(() => {
                    cifrao.innerHTML = `R$`
                    valor.innerHTML = `${(num*valor1).toFixed(2)}`
                }, "2000")
            }
            if (coin1.value == `€`){
                let valor1 = preço.euroR
                valor.innerHTML = `Calculando...`
                cifrao.innerHTML = ``


                setTimeout(() => {
                    cifrao.innerHTML = `R$`
                    valor.innerHTML = `${(num*valor1).toFixed(2)}`
                }, "2000")
            }
        }
        if (coin2.value == `dolar`){
            if (coin1.value == `R$`){
                let valor1 = preço.realD
                valor.innerHTML = `Calculando...`
                cifrao.innerHTML = ``


                setTimeout(() => {
                    cifrao.innerHTML = `$`
                    valor.innerHTML = `${(num*valor1).toFixed(2)}`
                }, "2000")
            }
            if (coin1.value == `€`){
                let valor1 = preço.euroD
                valor.innerHTML = `Calculando...`
                cifrao.innerHTML = ``


                setTimeout(() => {
                    cifrao.innerHTML = `$`
                    valor.innerHTML = `${(num*valor1).toFixed(2)}`
                }, "2000")
            }
        }
        if (coin2.value == `euro`){
            if (coin1.value == `R$`){
                let valor1 = preço.realE
                valor.innerHTML = `Calculando...`
                cifrao.innerHTML = ``


                setTimeout(() => {
                    cifrao.innerHTML = `€`
                    valor.innerHTML = `${(num*valor1).toFixed(2)}`
                }, "2000")
            }
            if (coin1.value == `$`){
                let valor1 = preço.dolarE
                valor.innerHTML = `Calculando...`
                cifrao.innerHTML = ``


                setTimeout(() => {
                    cifrao.innerHTML = `€`
                    valor.innerHTML = `${(num*valor1).toFixed(2)}`
                }, "2000")
            }
        }
    }

    price.value = ``
    coin1.value = ``
    coin2.value = ``
}