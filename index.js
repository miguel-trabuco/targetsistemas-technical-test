const { desafio1 } = require('./desafios/desafio1.js');
const { desafio2 } = require('./desafios/desafio2.js');
const { desafio3 } = require('./desafios/desafio3.js');
const { desafio4 } = require('./desafios/desafio4.js');
const { desafio5 } = require('./desafios/desafio5.js');

(async () => {
	const resDesafio1 = desafio1();
	const resDesafio2 = desafio2(89);
	const resDesafio3 = await desafio3();
	const percentuaisDesafio4 = desafio4();
	const resDesafio5 = desafio5('Target Sistemas');

	let resDesafio4 = "";
	for (let estado in percentuaisDesafio4) {
  		resDesafio4 += `${estado}: ${percentuaisDesafio4[estado]}%\n`;
	}

	console.log(`
==== Resoluções dos Desafios da Target Sistemas ====

1) Observe o trecho de código abaixo:

int INDICE = 13,
SOMA = 0, K = 0;
Enquanto K < INDICE faça {
	K = K + 1;
	SOMA = SOMA + K;
}
Imprimir(SOMA);

Ao final do processamento, qual será o valor da
variável SOMA?

Resposta: ${resDesafio1}

=====================================================

2) Dado a sequência de Fibonacci, onde se inicia por
0 e 1 e o próximo valor sempre será a soma dos 2
valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13,
21, 34...), escreva um programa na linguagem que
desejar onde, informado um número, ele calcule a
sequência de Fibonacci e retorne uma mensagem 
avisando se o número informado pertence ou não a
sequência.

Numero de exemplo: 89

Resposta: ${resDesafio2}

=====================================================

3) Dado um vetor que guarda o valor de faturamento
diário de uma distribuidora, faça um programa, na
linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento
diário foi superior à média mensal.

Respostas:
• Menor valor de faturamento: R$${resDesafio3.menorFaturamento}
• Maior valor de faturamento: R$${resDesafio3.maiorFaturamento}
• Número de dias no mês com o valor de faturamento
diário acima da média mensal: ${resDesafio3.diasAcimaDaMedia}

=====================================================

4) Dado o valor de faturamento mensal de uma 
distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde
calcule o percentual de representação que cada estado
teve dentro do valor total mensal da distribuidora.

Resposta:
${resDesafio4}

=====================================================

5) Escreva um programa que inverta os caracteres de
um string.

String escolhida: Target Sistemas

Resposta:
${resDesafio5}
	`);
})();
