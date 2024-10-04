import desafio1 from "./desafios/desafio1.js";

const resDesafio1 = desafio1();

console.log(`
==== Resoluções dos Desafios da Target Sistemas ====

1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

Resposta: ${resDesafio1}
`);
