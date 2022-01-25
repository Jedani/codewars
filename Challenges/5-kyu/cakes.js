function cakes(recipe, available) {
	// TODO: insert code
	let rKeys = Object.keys(recipe);
	let aKeys = Object.keys(available);
	let rValue = Object.values(recipe);
	let aValue = Object.values(available);

	if (rValue.includes(0) || aValue.includes(0)) {
		return 0;
	}

	const store = aKeys.filter((item) => rKeys.includes(item));

	let temp = [];

	if (rKeys.length == store.length) {
		for (let i = 0; i < rKeys.length; i++) {
			let current = store[i];
			let currVal = recipe[current];
			let aVal = available[current];
			let min = Math.floor(aVal / currVal);
			temp.push(min);
		}
		const result = Math.min(...temp);
		return result;
	}
	return 0;
}

cakes(
	{ sugar: 100, flour: 500, eggs: 1 },
	{ flour: 1200, milk: 200, sugar: 600, eggs: 5 },
);
