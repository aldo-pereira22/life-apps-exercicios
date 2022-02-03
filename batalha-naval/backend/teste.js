const array = require('./funcoes/array')
const inserirEmbarcacao = require('./funcoes/funcoes')

const campo1 = array.campo
const campo2 = array.campo
// console.table(array.campo1)
// inserirEmbarcacao.inserirEmbarcacao(3, 3, 1, array.campo1, 1)

// array.campo1[0][0] = 1
// console.table(array.campo1)


// const matriz = array.matriz
// var matriz = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
// ]

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        // array.campo1[i][j] = 10
        if (campo1[5][5] == 0) {
            campo1[5][5] = "N"
        }
        // console.log(matriz[i][j])
    }
    // console.log('\n')
}

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        // array.campo1[i][j] = 10
        if (campo2[5][5] == 0) {
            campo2[5][5] = "C"
        }
        // console.log(matriz[i][j])
    }
    // console.log('\n')
}

// console.table("Campo1" + campo1)
console.table(campo2)

// // console.log(matriz)