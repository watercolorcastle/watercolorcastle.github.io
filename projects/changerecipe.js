function main(){


//set all recipe names & content
var recipe1 = {
	name:"PASTA WITH TOMATOES & PARMESAN ",
	step1:"cut 1 tomato, ½ onion & 5 mushrooms into small pieces",
	step2:"stew these while bringing your pasta to boil ",
	step3:"add tomato paste in the stew(or sauce depending on the quality of your ingredients)",
	step4:"mix mix mix pasta with the stew",
	step5:"put on the plate and sprinkle the magic parmesan",
	url:'1.png',
};

var recipe2 = {
	name:"PIZZA-LOOK-A-LIKE WITH BASIL",
	step1:"mix ½ of flour with ½ of corn starch with water",
	step2:"oil the pan, pour the mix and try to make it circular",
	step3:"before the mix start to solidify, lay/spread 1 egg on top, season with any spice you like",
	step4:"flip the pancake(duh) and wait for both sides to brown",
	step5:"put on the plate and sprinkle the magic parmesan & basil from your hip herb garden",
	url:'2.png',
};

var recipe3 = {
	name:"PAN-FRIED CHICKEN WINGS",
	step1:"marinate with salt, black pepper(you know the drill)",
	step2:"put 'em in the oven on 350 degrees for like 15 min'",
	step3:"oil(lots) the pan & lay wings on, better put a pot lid on top to trap the heat yo",
	step4:"...just gotta wait till both sides are brown and smell delish",
	step5:"better eat as soon as it's out while waiting for the next batch ",
	url:'3.png',
};





//on clicking refresh, generate a random recipe
var randomRecipe =[recipe1, recipe2, recipe3];
$('.refresh').on('click', function(){
	var i = Math.floor(Math.random()*randomRecipe.length);
	$('h2').text(randomRecipe[i].name);
	$('p.step1').text(randomRecipe[i].step1);
	$('p.step2').text(randomRecipe[i].step2);
	$('p.step3').text(randomRecipe[i].step3);
	$('p.step4').text(randomRecipe[i].step4);
	$('p.step5').text(randomRecipe[i].step5);
	$('img').attr('src',randomRecipe[i].url);
})

};
$(document).ready(main);




//var i = Math.floor(Math.random()*10);
