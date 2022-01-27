function chooseBestSum(target, t, numbers) {
	// your code
	if (numbers.length == 1 && numbers[0] !== target) {
		return null;
	}

	let temp = [];
	let towns = t - 1;
	for (let i = 0; i < numbers.length; i++) {
		let sec = numbers.slice(i, i + towns);
		let maxDist = sec.reduce((a, b) => a + b, 0);
		console.log(maxDist);
		for (let j = 0; j < numbers.length; j++) {
			let total = maxDist + numbers[j];
			if (total <= target) {
				temp.push(total);
			}
		}
	}

	console.log(Math.max(...temp));
	let result = Math.max(...temp);
	return result;
}

console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
// console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
// console.log(chooseBestSum(163, 3, [50]));
