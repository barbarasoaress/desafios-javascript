const n1 = 10
const n2 = 5
const operacao = "%"

switch (operacao) {
    case "+":
        console.log(n1 + n2)
        break 
   case "-":
        console.log(n1 - n2)
        break
    case "*":
        console.log(n1 * n2)
        break
    case "/":
        console.log(n1 / n2)
        break
    default:
        console.log("Operação inválida")
}