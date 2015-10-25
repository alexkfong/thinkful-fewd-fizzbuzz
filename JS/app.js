// JavaScript for Fizzbuzz Refactor algorithm by Alex K. Fong

$(document).ready( function() {
	
	var count;

	//Keep prompting until a valid number is given
	while (!parseInt(count, 10)) {
		count = prompt("Enter a number");
	}

	//run fizzbuzz and print its output
	printer( fizzbuzz(count) );

});

// A more efficient fizzbuzz algorithm.
// Instead of printing in the loop, we create one output string
// which is returned, meaning we only manipulate the DOM once. 
function fizzbuzz(count) {
	
	var output = '';

	for(i=1; i <= count; i++) {
		
		//Is divisible by three
		if((i % 3) == 0) {
			output += "Fizz";
		}

		//is divisible by five
		if((i % 5) == 0) {
			output += "Buzz";
		}

		//not divisible by either three or five
		if(((i % 3) && (i % 5)) != 0 ) {
			output += i;
		}

		output += "</p><p>";
	}

	return output;
}

// Prints the inputted string
function printer(input) {

	$('body').append("<p>" + input + "</p>");

};