/*	
	name:Force, mass and aceleration
	description:
	autor:Samuel MB
	date:27//03/2025

*/
let force;
let mass;
let aceleration;

function acelerationresult(mass,force){
	aceleration = force/mass;
	return aceleration;
}

force = prompt("Insert force");
mass = prompt("Insert mass");

console.log(`The aceleration is ${acelerationresult(mass,force)}`);