/*
	Name exercise: Array
	Description: Function that receives array and delivers a addition
	Autor: Samuel MB
	Date: March 27th 2025
*/

let sum;
let iteration;

function addArray(numbers){
	add=0;

	for(iteration=0; iteration<3; iteration++){
		add+=numbers[iteration];
	
	}

	return add;	
			
			
}

const numbers=[parseFloat(prompt("Enter number one:")), parseFloat(prompt("Enter number two:")), parseFloat(prompt("Enter number three:"))];

console.log(`The addition of the array is: ${addArray(numbers)}`);	

