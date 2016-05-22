
var DEFAULT_PRESETS = {
"Rashin Sihiri":"#B8860B#96FF00#E05E0B#B88633",
"Eudrew Curtow":"#0062FF#FFC050#005B75#0062FF",
"Izek Herzog":"#2E8B5B#C0C0C0#1E5B3C#36A369",
"Eden Lucius":"#20305C#C0A150#202040#1E5B3C",
"Ninnog Liddorm":"#FF00FF#FFFF00#800080#FF80FF",
"Jayden Drecht":"#00B3B3#33FFFF#00B3B3#129298",
"Aria Ferron":"#D81414#FFFFFF#000000#FF0000"};
var PRESETS;

/*var CARD_RED = 184;
var CARD_GREEN = 134;
var CARD_BLUE = 11;
var CARD_ALPHA = 1;
var CARD_COLOUR = "rgba(" + CARD_RED + ", " + CARD_GREEN + ", " + CARD_BLUE + ", " + CARD_ALPHA + ")";

var DARK_RED = Math.floor(CARD_RED / 2);
var DARK_GREEN = Math.floor(CARD_GREEN / 2);
var DARK_BLUE = Math.floor(CARD_BLUE / 2);
var DARK_ALPHA = 1;
var DARK_COLOUR = "rgba(" + DARK_RED + ", " + DARK_GREEN + ", " + DARK_BLUE + ", " + DARK_ALPHA + ")";

var TEXT_RED = 150;
var TEXT_GREEN = 255;
var TEXT_BLUE = 0;
var TEXT_ALPHA = 1;
var TEXT_COLOUR = "rgba(" + TEXT_RED + ", " + TEXT_GREEN + ", " + TEXT_BLUE + ", " + TEXT_ALPHA + ")";

var DOT_RED = 224;
var DOT_GREEN = 94;
var DOT_BLUE = 11;
var DOT_ALPHA = 1;
var DOT_COLOUR = "rgba(" + DOT_RED + ", " + DOT_GREEN + ", " + DOT_BLUE + ", " + DOT_ALPHA + ")";

var LIGHT_DOT_RED = 184;
var LIGHT_DOT_GREEN = 134;
var LIGHT_DOT_BLUE = 51;
var LIGHT_DOT_ALPHA = 1;
var LIGHT_DOT_COLOUR = "rgba(" + LIGHT_DOT_RED + ", " + LIGHT_DOT_GREEN + ", " + LIGHT_DOT_BLUE + ", " + LIGHT_DOT_ALPHA + ")";*/

function cardColour(){
	return colourForm.elements[0].value;
}

function darkColour(){
	var normal = colourForm.elements[0].value;
	var R = normal.substring(1, 3);
	var G = normal.substring(3, 5);
	var B = normal.substring(5, 7);
	
	R =  parseInt(R, 16);
	G =  parseInt(G, 16);
	B =  parseInt(B, 16);
	
	R = Math.floor(R/2);
	G = Math.floor(G/2);
	B = Math.floor(B/2);
	
	R = R.toString(16);
	G = G.toString(16);
	B = B.toString(16);
	
	if(R.length < 2){
		R = '0' + R;
	}
	if(G.length < 2){
		G = '0' + G;
	}
	if(B.length < 2){
		B = '0' + B;
	}
	//console.log(R + ", " + G + ", " + B + ", " + ('#' + R + G + B));
	
	return '#' + R + G + B;
}

function textColour(){
	return colourForm.elements[1].value;
}

function dotColour(){
	return colourForm.elements[2].value;
}

function lightDotColour(){
	return colourForm.elements[3].value;
}

function unsetColours(){
	colourForm.elements[4].selectedIndex = "-1";
}

function setColours(){
	var preset = colourForm.elements[4].value;
	
	var colourString = PRESETS[preset];
	
	colourForm.elements[0].value = colourString.substring(0, 7);
	colourForm.elements[1].value = colourString.substring(7, 14);
	colourForm.elements[2].value = colourString.substring(14, 21);
	colourForm.elements[3].value = colourString.substring(21, 28);
	
	/*if(preset == "Rashin Sihiri"){
		colourForm.elements[0].value = "#B8860B";
		colourForm.elements[1].value = "#96FF00";
		colourForm.elements[2].value = "#E05E0B";
		colourForm.elements[3].value = "#B88633";
	} else if(preset == "Eudrew Curtow"){
		colourForm.elements[0].value = "#0062FF";
		colourForm.elements[1].value = "#FFC050";
		colourForm.elements[2].value = "#005B75";
		colourForm.elements[3].value = "#0062FF";
	} else if(preset == "Izek Herzog"){
		colourForm.elements[0].value = "#2E8B5B";
		colourForm.elements[1].value = "#C0C0C0";
		colourForm.elements[2].value = "#1E5B3C";
		colourForm.elements[3].value = "#36A369";
	} else if(preset == "Eden Lucius"){
		colourForm.elements[0].value = "#20305C";
		colourForm.elements[1].value = "#C0A150";
		colourForm.elements[2].value = "#202040";
		colourForm.elements[3].value = "#1E5B3C";
	}*/
}