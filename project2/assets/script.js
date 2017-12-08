$(document).ready(function(){

	$(".h").mouseenter(function(){

		$(this).find(".handboxh").addClass("handup");
		$(this).find(".armh").addClass("armup");

	});

	$(".h").mouseleave(function(){

		$(this).find(".handboxh").removeClass("handup");
		$(this).find(".armh").removeClass("armup");

	});





});


