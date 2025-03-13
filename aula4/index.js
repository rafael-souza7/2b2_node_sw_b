// index.js
const inquirer = require('inquirer');
const chalk = require('chalk');
const imcModule = require('./imc');

async function main() {
  const respostas = await inquirer.prompt([
    {
      type: 'input',
      name: 'altura',
      message: 'Digite sua altura em centímetros:',
      validate: (valor) => {
        if (!isNaN(valor) && valor > 0) {
          return true;
        }
        return 'Por favor, digite um número válido.';
      },
    },
    {
      type: 'input',
      name: 'peso',
      message: 'Digite seu peso em quilogramas:',
      validate: (valor) => {
        if (!isNaN(valor) && valor > 0) {
          return true;
        }
        return 'Por favor, digite um número válido.';
      },
    },
  ]);

  const altura = parseFloat(respostas.altura);
  const peso = parseFloat(respostas.peso);

  const imc = imcModule.calcularIMC(altura, peso);

  let classificacao = '';
  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 25) {
    classificacao = 'Peso normal';
  } else if (imc < 30) {
    classificacao = 'Sobrepeso';
  } else if (imc < 35) {
    classificacao = 'Obesidade Grau I';
  } else if (imc < 40) {
    classificacao = 'Obesidade Grau II';
  } else {
    classificacao = 'Obesidade Grau III';
  }

  console.log(chalk.blue(`Seu IMC é: ${imc.toFixed(2)}`));
  console.log(chalk.green(`Classificação: ${classificacao}`));
}

main();




