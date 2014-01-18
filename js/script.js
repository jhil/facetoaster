$(document).ready(function () {

	var wto;

	$('body').keyup(function(e) {

		clearTimeout(wto);
		wto = setTimeout(function() {
			var index;
			if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
				index = $("#impress div").index($(".present"));		
			}
			$('.version-text').text("V" + index);
		}, 500)


	});
})