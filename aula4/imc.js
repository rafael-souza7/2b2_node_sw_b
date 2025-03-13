// imc.js

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
