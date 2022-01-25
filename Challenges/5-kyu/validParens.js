function validParentheses(parens) {
	function peek(stack) {
		return stack[stack.length - 1];
	}
	// your code here ..
	let checker = parens.length;
	if (parens == "") return true;

	let stack = [];

	for (let i = 0; i < checker; i++) {
		if (parens[i] == "(") {
			stack.push(parens[i]);
		} else if (parens[i] == ")") {
			if (peek(stack) == "(") {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length === 0;
}

console.log(validParentheses("()())("));
