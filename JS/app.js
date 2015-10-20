// JavaScript for Fizzbuzz algorithm by Alex K. Fong

$(document).ready( function() {
	
	//start at number 1
	var count = 1;	

	//Break once loop has run 15 times
	while (count <= 15) {

		//Clear output
		var output = '';
		
		//Is divisible by three
		if((count % 3) == 0) {
			output = "Fizz";
		}

		//is divisible by five
		if((count % 5) == 0) {
			output = output + "Buzz";
		}

		//not divisible by either three or five
		if(((count % 3) && (count % 5)) != 0 ) {
			output = count;
		}

		//display output
		$('body').append("<p>" + output + "</p>");
		
		//increment counter
		count ++;
	}
});