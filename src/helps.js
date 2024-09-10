function filtarOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaDePalavras) {
    let textoFinal =''; 
    listaDePalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtarOcorrencias(paragrafo).join(', ');
        textoFinal += `palavras duplicadas no parágrafo ${indice +1}: ${duplicadas} \n`
        
    });

    return textoFinal;
}

export { montaSaidaArquivo };