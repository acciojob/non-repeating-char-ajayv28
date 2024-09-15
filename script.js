function firstNonRepeatedChar(str) {
 // Write your code here
	let trimStr = str.trim();
	let words = trimStr.split(" ");
	return words[0];
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
