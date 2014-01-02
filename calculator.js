$(document).ready(function() {
	var mem = 0;
	var newNum = true;
	var screenLength = 14;

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
			if (result.length > 13) return;
			if (result == "0" && value != ".") result = "";
			if (value == '.' && result.indexOf(".") > -1) return;
			result = result.concat(value);
			$("#display").text(result);
			return;
		}
		else if (type == "operator") {
			switch(value) {
				case "C":
					if ($("#display").text() == "0") {
						total = 0;
						mem = 0;
					}
					$("#display").text("0");
					break;
				case "+":
					mem += total;
					$("#display").text(String(mem).substring(0,screenLength));
					newNum = true;
					break;
				case "-":
					mem -= total;
					$("#display").text(String(mem).substring(0,screenLength));
					newNum = true;
					break;
				case "/":
					if (total == 0) break;
					mem /= total;
					$("#display").text(String(mem).substring(0,screenLength));
					newNum = true;
					break;
				case "*":
					mem *= total;
					$("#display").text(String(mem).substring(0,screenLength));
					newNum = true;
					break;
				default:
					newNum = true;
					break; 
			}

			return;
		}
	});

	$(".button").mouseup(function(e) {
		$(this).removeClass("pushed");
	});
});