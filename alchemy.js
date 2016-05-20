var CODE;

function codeToHoles(code){
	
	//console.log("code:", code);
	
	while(code.length < 8){
		code += '0';
	}
	
	//console.log(code);
	
	var codeNums = [];
	for(var i = 0; i < code.length; i++){
		var c = code.charAt(i);
		if(c >= '0' && c <= '9'){
			codeNums.push(c - '0');
		} else if(c >= 'A' && c <= 'Z'){
			codeNums.push(c.charCodeAt(0) - 'A'.charCodeAt(0) + 10);
		} else if(c >= 'a' && c <= 'z'){
			codeNums.push(c.charCodeAt(0) - 'a'.charCodeAt(0) + 36);
		} else if(c == '?'){
			codeNums.push(62);
		} else if(c == '!'){
			codeNums.push(63);
		}
		//console.log(c + ': ' + codeNums[i]);
	}
	
	var binary = [];
	for(var i = 0; i < codeNums.length; i++){
		for(var j = 5; j >= 0; j--){
			if(codeNums[i] & (1 << j)){
				binary.push(true);
			} else {
				binary.push(false);
			}
		}
	}
	
	return binary; 
};

function holesToCode(binary){
	var code = '';
	
	var codeNums = [];
	for(var i = 0; i < 8; i++){
		codeNums.push(0);
		for(var j = 5; j >= 0; j--){
			if(binary[i*6 + (5-j)]){
				codeNums[i] += (1 << j);
			}
		}
	}
	
	for(var i = 0; i < codeNums.length; i++){
		var c = codeNums[i];
		if(c >= 0 && c <= 9){
			code += String.fromCharCode(c + '0'.charCodeAt(0));
		} else if(c >= 10 && c <= 35){
			code += String.fromCharCode(c - 10 + 'A'.charCodeAt(0));
		} else if(c >= 35 && c <= 61){
			code += String.fromCharCode(c - 36 + 'a'.charCodeAt(0));
		} else if(c == 62){
			code += '?';
		} else if(c == 63){
			code += '!';
		}
		//console.log(c);
	}
	
	return code; 
};

function alchemyOr(a, b){
	var r = [];
	for(var i = 0; i < a.length; i++){
		r.push(a[i] || b[i]);
	}
	return r;
};

function alchemyAnd(a, b){
	var r = [];
	for(var i = 0; i < a.length; i++){
		r.push(a[i] && b[i]);
	}
	return r;
};

function punchCard(){
	var newCode = codeForm.elements[0].value;
	var oldHoles = codeToHoles(CODE);
	var newHoles = codeToHoles(newCode);
	var totalHoles = alchemyOr(oldHoles, newHoles);
	CODE = holesToCode(totalHoles);
	
	workspaceCode.innerHTML = CODE;
}