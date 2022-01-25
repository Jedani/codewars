function balancedParens(n) {
	const result = [];

	const generator = (left, right, starter) => {
		if (left > right) return;
		if (!left && !right) result.push(starter);
		if (left > 0) generator(left - 1, right, starter + "(");
		if (right > 0) generator(left, right - 1, starter + ")");
	};

	generator(n, n, "");

	return result;
}

console.log(balancedParens(3));
