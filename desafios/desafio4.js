const desafio4 = () => {
	const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
	};

	const faturamentoTotal = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

	const percentuais = {};

	for (let estado in faturamento) {
    	const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    	percentuais[estado] = percentual.toFixed(2);
  	}

	return percentuais;
}

module.exports = { desafio4 };
