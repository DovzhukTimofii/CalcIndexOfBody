export function updateResult(getInputValue) {
	const res = document.getElementById('result-screen');
	const inputValue = getInputValue();
	res.textContent = inputValue ? inputValue.toString() : 'Non input values';
}