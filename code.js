function solution(number) {
	let multiples = [];
	if (number < 0) {
		return 0;
	}

	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			multiples.push(i);
		}
	}

	const sum = multiples.reduce((acc, num) => {
		return acc + num;
	}, 0);

	return sum;
}

solution(15);
