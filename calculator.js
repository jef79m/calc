$(document).ready(function() {
	var mem = 0;
	var newNum = true;
	var screenLength = 11;
	var nextop = '='

	$("#display").text("0");
	
	$(".button").mousedown(function(e) {
		var value = e.currentTarget.innerText;
		var type = e.currentTarget.classList[1];
		var total = parseFloat($("#display").text());
		
		$(this).addClass("pushed");
		if (type == "numeral") {
			if (newNum) {
				newNum = false;
				$("#display").text("");	
			}
			var result = $("#display").text();
			if (result.length > screenLength) return;
			if (total == 0 && value != ".") result = "";
			if (value == '.' && result.indexOf(".") > -1) return;
			result = result.concat(value);
			$("#display").text(result);
			return;
		}
		
		switch(nextop) {
				case "+":
					mem += total;
					newNum = true;
					break;
				case "-":
					mem -= total;
					newNum = true;
					break;
				case "/":
					if (total == 0) break;
					mem /= total;
					newNum = true;
					break;
				case "*":
					mem *= total;
					newNum = true;
					break;
				case "=":
					mem = total;
					newNum = true;
					break;
			}
		
		if (type == "operator") {
			switch(value) {
				case "C":
					if ($("#display").text() == "0") {
						mem = 0;
						nextop = '='
					}
					total = 0;
					$("#display").text("0");
					return;
					break;
				case("="):
					newNum = true;
				default:
					nextop = value;
			}
		}

		$("#display").text(String(mem).substring(0,screenLength));
	});

	$(".button").mouseup(function(e) {
		$(this).removeClass("pushed");
	});
});