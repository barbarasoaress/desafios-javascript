const numero = [-3, 5, -1, 8, 0, 12, -7]
let contador = 0

for(let i = 0; i < numero.length; i++) {
    if (numero[i] > 0) {
        contador++
    }
}

console.log(contador)