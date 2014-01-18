$(document).ready(function () {


    var views = $('#impress div').length;
    for (var i = 1; i < (views+1); i++) {
        var xValue = (350 * (i-1)) - 350;
        $('#impress div:nth-child('+i+')').attr("data-x", xValue.toString());
    }

	impress().init(); 

	var wto;

	$('body').keyup(function(e) {

		if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
			$('.version-text').fadeOut(500);	
		}


		clearTimeout(wto);
		wto = setTimeout(function() {
			var index;
			if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
				index = $("#impress div").index($(".present"));
				$('.version-text').text("V" + index);

				$('.version-text').fadeIn(500);
			}
				
		}, 500)

	});




})