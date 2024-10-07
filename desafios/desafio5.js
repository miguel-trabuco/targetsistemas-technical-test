const desafio5 = (stringNormal) => {
	let stringInvertida = '';

	for (let i = stringNormal.length - 1; i >= 0; i--) {
    	stringInvertida += stringNormal[i];
  	}

	return stringInvertida;
}

module.exports = { desafio5 };
