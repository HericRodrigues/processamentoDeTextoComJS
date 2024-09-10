import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import tratarErros from './funcoesErros.js';
import { pegarParagrafo } from './index.js';
import { Command } from 'commander';
import { error } from 'console';

const progam = new Command();
progam
.version('0.0.1')
.option('-t,--texto <string>', 'caminho do texto a ser processado')
.option('-d,--destino <string>', 'caminho da pasta onde salvar o arquivo de resultado')
.action((options) => {
  const {texto, destino} = options;

  if (!texto || !destino){
    console.error(chalk.red('erro: favor inserir caminho de origem e destino'))
    progam.help();
    return;
  }
  const caminhoTexto = path.resolve(texto);
  const caminhoDestino = path.resolve(destino);

  try{
    processaArquivo(caminhoTexto, caminhoDestino)
    console.log(chalk.green('texto processado com sucesso'));
  }catch (erro){
    console.log(chalk.red('ocorreu um erro de processamento'), erro);
  }
})

progam.parse();

//Foi subistituida pela função acima 
// const caminhoArquivo = process.argv;
// const link = caminhoArquivo[2]; 
// const endereco = caminhoArquivo[3];

function processaArquivo(texto, desstino){
  fs.readFile(texto, 'utf-8', async (erro, texto) => {
    try {
        if (erro) throw erro;
        const resultado = pegarParagrafo(texto);
        await criaSalva(resultado, desstino);
    } catch (erro) {
      tratarErros(erro);
    }
  });


}


async function criaSalva(listaDePalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaDePalavras, null, 2);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.green('Arquivo criado com sucesso:'), arquivoNovo);
    } catch (erro) {
        tratarErros(erro);
    }
}
