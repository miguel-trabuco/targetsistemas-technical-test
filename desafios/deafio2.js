export default function defafio2(num) {
	let a = 0, b = 1;

	if (num === a || num === b) {
		return 'Pertence a sequencia de Fibonacci';
	}

	let fib = a + b;
	while (fib <= num) {
		if (fib === num) {
			return 'Pertence a sequencia de Fibonacci';
		}

		a = b;
		b = fib;
		fib = a + b;
	}

	return 'Não pertence a sequencia de Fibonacci';
}
