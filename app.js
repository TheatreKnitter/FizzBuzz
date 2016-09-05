for (var i =1; i<101; i++){
	if (i%3 === 0 && i%5 === 0) {
		$("Body").append(document.write("fizzbuzz" + "<br>"));
		console.log("fizzbuzz");
	}
	else if (i%3 === 0) {
		$("body").append(document.write("fizz" + "<br>"));
		console.log("fizz");
	}
	else if (i%5 === 0) {
		$("body").append(document.write("buzz" + "<br>"));
		console.log("buzz");
	}
	else {
		$("body").append(document.write((i) + "<br/>"));
		console.log(i);
	}
};