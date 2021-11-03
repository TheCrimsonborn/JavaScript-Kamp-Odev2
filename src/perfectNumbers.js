function isPerfectNumbers(number){
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (number % i == 0){
			sum += i;
		}
	}
	if (sum == number){
		return true;
	}
}

function getPerfectNumbers(filter){
	let perfectNumbers = [];
	for (let i = 1; i < filter; i++) {
		if (isPerfectNumbers(i)){
			perfectNumbers.push(i);
		}
	}
	console.log(...perfectNumbers);
}
getPerfectNumbers(1000)