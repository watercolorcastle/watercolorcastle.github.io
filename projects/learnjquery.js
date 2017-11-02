
$(document).ready(function(){

	//basic selection
	$('h1').css('color',"red");
	$('#subtitle').css('color',"green");
	/*basic animation
	$('.box:first').hide(500).delay(300).show(800);
	$('.box:last').slideUp(500).delay(300).slideDown(500);
	$('.circle').animate({left:'200px'},800);*/
	//change from one class to another

	$('.box').attr('class','circle');
	$('.circle').hide(1800).show(1800);
	//change pic source
	$('img').fadeOut(500,function(){
		$(this).attr('src',"2.png").fadeIn(500);
	});
});
