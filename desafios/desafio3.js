const fs = require('fs').promises;
const path = require('path');

const desafio3 = async () => {
	const filePath = path.join(__dirname, 'dados.json');

	let data;
	try {
		data = await fs.readFile(filePath, 'utf-8');
	} catch (err) {
		console.error('Erro ao ler o arquivo de dados', err);
		return;
	}

	const parsedData = JSON.parse(data);
	const faturamentos = parsedData.map(fat => fat.valor);

	const faturamentosValidos = faturamentos.filter(valor => valor > 0);

	const menorFaturamento = Math.min(...faturamentosValidos);
	const maiorFaturamento = Math.max(...faturamentosValidos);

	const somaFaturamentos = faturamentosValidos.reduce((acc, fat) => acc + fat, 0);
    const mediaFaturamento = somaFaturamentos / faturamentosValidos.length;
	const diasAcimaDaMedia = faturamentos.filter(fat => fat > mediaFaturamento).length;

	return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

module.exports = { desafio3 };
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };