
function verifiarAprovacao(nota){
    if (nota >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log(verifiarAprovacao(8))
console.log(verifiarAprovacao(5))