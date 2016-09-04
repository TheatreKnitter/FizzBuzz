for (var i =1; i<101; i++){
	if (i%3 === 0 && i%5 === 0) {
		$("Body").append(document.write("fizzbuzz"))
		console.log("fizzbuzz")
	}
	else if (i%3 === 0) {
		$("body").append(document.write("fizz"))
		console.log("fizz")
	}
	else if (i%5 === 0) {
		$("body").append(document.write("buzz"))
		console.log("buzz")
	}
	else {
		$("body").append(document.write(i)).after("<br/>")
		console.log(i);
	}
};