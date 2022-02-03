module.exports.inserirEmbarcacao = (posicaoX, posicaoY, tipoEmbarcacao, matriz, direcao) => {

    if (tipoEmbarcacao === 1) {

    }
    if (tipoEmbarcacao === 2) {

    }
    if (tipoEmbarcacao === 3) {

    }
    switch (tipoEmbarcacao) {
        case 1:
            //navio = 3 posições
            // 1 = vertical, 2 = horizontal
            // x = 0 , y = 0
            if (direcao == 1) {
                // if ((matriz[posicaoX][posicaoY] == 1) && (matriz[posicaoX][posicaoY + 1] == 1) && (matriz[posicaoX][posicaoY + 2] == 1)) {
                if ((matriz[posicaoX][posicaoY]) && (matriz[posicaoX][posicaoY + 1]) && (matriz[posicaoX][posicaoY + 2]) == 1) {
                    console.log('Inserido com sucesso!  ')
                } else {
                    console.log("Não pode colocar nessa posição.")
                }
            } else if (direcao == 2) {

            }

            break;

        case 2:

            break;

        case 3:

            break;

        default:
            break;
    }
}
