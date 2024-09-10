export function pegarParagrafo(texto) {
  const paragrafo = texto.toLowerCase().split('\n');
  const contagem = paragrafo.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return duplicadasPalavras(paragrafo);
  })
  return contagem;
  
}

function extrairPalavras(texto) {
  return texto.toLowerCase().split('\n');
}

function arrumaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'']/g, '');
}

function duplicadasPalavras(texto) {
  const listaDePalavras = texto.split(' ');
  const resultado = {};

  listaDePalavras.forEach(palavra => {
    if (palavra.length > 3){
      const palavrasLimpas = arrumaPalavras(palavra);
      resultado[palavrasLimpas] = (resultado[palavrasLimpas] || 0) + 1 
    }
  });
  //console.log(resultado);
  
}
