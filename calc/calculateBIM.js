const BMI_NUMBER = 10_000;

export function calculateBIM(weightInput, heightInput) {
	const weight = weightInput.valueAsNumber;
	const height = heightInput.valueAsNumber;

	if (weight && height) {
		return Math.ceil(weight / (height * height) * BMI_NUMBER);
	}

	return null;
}