function setCookie(cname, cvalue, exdays) {
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires;
}

function eraseCookie(name) {
	setCookie(name, "", -1);
}

function initPresets() {
	console.log(document.cookie);
	
	PRESETS = {};
	for(var name in DEFAULT_PRESETS){
		PRESETS[name] = DEFAULT_PRESETS[name];
	}
	
	if(document.cookie.length > 0){
		var ca = document.cookie.split('; ');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			for(var j = 0; c.charAt(j) != '='; j++);
			var name = c.substring(0, j);
			var value = c.substring(j+1);
			PRESETS[name] = value;
		}
	}
	
	
	colourForm.elements[4].innerHTML = "";
	for(var name in PRESETS){
		console.log(name);
		colourForm.elements[4].innerHTML += ("<option>" + name + "</option>");
	}
	
	console.log(colourForm.elements[4].innerHTML);
}

function savePreset() {
	var name = colourForm.elements[6].value;
	
	if(name.length == 0){
		alert("You must give the preset a name.");
		return;
	}
	
	var colourString = colourForm.elements[0].value + colourForm.elements[1].value + colourForm.elements[2].value + colourForm.elements[3].value;
	
	setCookie(name, colourString, 365);
	
	initPresets();
	
	colourForm.elements[4].value = name;
}

function deletePreset() {
	name = colourForm.elements[4].value;
	
	eraseCookie(name);
	
	initPresets()
	
	colourForm.elements[4].selectedIndex = "-1";
}

/*function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var user = getCookie("username");
	if (user != "") {
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:", "");
		if (user != "" && user != null) {
			setCookie("username", user, 365);
		}
	}
}*/