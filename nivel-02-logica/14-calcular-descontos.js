const preco = 200
const desconto = 10

function calcularDesconto(preco, desconto) {
    const valorDesconto = preco * desconto / 100
    const precoFinal = preco - valorDesconto
    return precoFinal
}

console.log(calcularDesconto(200,10))