$('#X1').click(function(){
		$('#row10').hide(); //Possible parameters: empty, # of milliseconds, [fast, slow, etc.]
		/*hide = !hide;*/
	});
	$('#X2').click(function(){
		$('#row11').hide(); //Possible parameters: empty, # of milliseconds, [fast, slow, etc.]
		/*hide = !hide;*/
	});

	function incr() {
	var inc = document.getElementById("quant");
	inc.stepUp();
}

function decr() {
	var inc = document.getElementById("quant");
	inc.stepDown();
}