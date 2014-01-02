$(document).ready(function() {
	$("#display").text("0");
	$(".button").mousedown(function(e) {
		var value = e.currentTarget.innerText;
		var type = e.currentTarget.classList[1];
		var total = 0;
		$(this).addClass("pushed");
		switch(type)
		{
			case "numeral":
				var result = $("#display").text();
				if (result.length > 13) break;
				if (result == "0") {
					result = "";
				}
				result = result.concat(value);
				$("#display").text(result);
				break;
			case "operator":
				console.log("You hit an operator");
				break;
		}
	});

	$(".button").mouseup(function(e) {
		$(this).removeClass("pushed");
	});
});