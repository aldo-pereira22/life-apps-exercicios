const array = require('./funcoes/array')
const inserirEmbarcacao = require('./funcoes/funcoes')

const campo1 = array.campo1
const campo2 = array.campo2


for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        // array.campo1[i][j] = 10
        if (campo1[5][5] == 0) {
            campo1[5][5] = "CAMPO 1"
        }
        // console.log(matriz[i][j])
    }
    // console.log('\n')
}

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        // array.campo1[i][j] = 10
        campo2[5][5] = "CAMPO 2"
        // console.log(matriz[i][j])
    }
    // console.log('\n')
}

// console.table("Campo1" + campo1)
console.log("campo - 1")
console.table(campo1)


console.log("\n\nCampo - 2")
console.table(campo2)


