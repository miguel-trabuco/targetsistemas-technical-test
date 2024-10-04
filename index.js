import desafio1 from "./desafios/desafio1.js";
import defafio2 from "./desafios/deafio2.js";

const resDesafio1 = desafio1();
const resDesafio2 = defafio2(89);

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
`);
