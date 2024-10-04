const desafio1 = () => {
	let indice = 13, soma = 0, k = 0;

	while (k < indice) {
		k ++;
		soma = soma + k;
	}

	return soma;
}

module.exports = { desafio1 };
