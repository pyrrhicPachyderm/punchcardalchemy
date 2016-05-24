function drawRect(x, y, lx, ly, ux, uy){
	context.fillRect(x+lx, y+ly, ux-lx, uy-ly);
};

function clearRect(x, y, lx, ly, ux, uy){
	context.clearRect(x+lx, y+ly, ux-lx, uy-ly);
};

function isInCard(x, y){
	return (x >= 0 && y >= 0 && x < 225 && y < 402) || (x >= 225 && y >= 45 && x < 269 && y < 402) || (x >= 269 && y >= 90 && x < 315 && y < 402);
};

function drawHole(x, y, x1, y1){
	context.fillStyle = 'black';
	drawRect(x, y, x1+0, y1+0, x1+35, y1+2);
	drawRect(x, y, x1+0, y1+9, x1+35, y1+11);
	drawRect(x, y, x1+0, y1+2, x1+2, y1+9);
	drawRect(x, y, x1+33, y1+2, x1+35, y1+9);
	clearRect(x, y, x1+2, y1+2, x1+33, y1+9);
};

function drawCard(x, y, item, itemOnly, drawText, code){
	
	//console.log("Drawing card. item.src = " + item.src);
	
	if(!itemOnly){
		context.fillStyle = cardColour();
		drawRect(x, y, 0, 0, 224, 401);
		drawRect(x, y, 224, 44, 268, 401);
		drawRect(x, y, 268, 89, 314, 401);
		
		
		context.fillStyle = dotColour();
		for(var i = 3; i < 500; i += 4){
			for(var j = 3; j < 500; j+= 4){
				if(isInCard(i, j)){
					drawRect(x, y, i, j, i+1, j+1);
				}
			}
		}
		
		context.fillStyle = lightDotColour();
		for(var i = 3; i < 500; i += 4){
			for(var j = 2; j < 500; j+= 4){
				if(isInCard(i, j)){
					drawRect(x, y, i, j, i+1, j+1);
				}
			}
		}
		for(var i = 1; i < 500; i += 4){
			for(var j = 0; j < 500; j+= 4){
				if(isInCard(i, j)){
					drawRect(x, y, i, j, i+1, j+1);
				}
			}
		}
		
		context.fillStyle = 'white';
		drawRect(x, y, 28, 39, 161, 353);
		drawRect(x, y, 161, 63, 224, 353);
		drawRect(x, y, 224, 129, 251, 353);
		
		
		context.fillStyle = 'black';
		drawRect(x, y, 2, 401, 4, 403);
		drawRect(x, y, 4, 401, 6, 405);
		drawRect(x, y, 6, 401, 9, 407);
		drawRect(x, y, 9, 401, 323, 410);
		
		drawRect(x, y, 314, 98, 323, 401);
		drawRect(x, y, 314, 96, 320, 98);
		drawRect(x, y, 314, 94, 318, 96);
		drawRect(x, y, 314, 91, 316, 94);
		
		drawRect(x, y, 268, 52, 277, 89);
		drawRect(x, y, 268, 50, 275, 52);
		drawRect(x, y, 268, 48, 272, 50);
		drawRect(x, y, 268, 46, 270, 48);
		
		drawRect(x, y, 224, 9, 233, 44);
		drawRect(x, y, 224, 6, 231, 9);
		drawRect(x, y, 224, 4, 229, 6);
		drawRect(x, y, 224, 2, 227, 4);
		
		
		context.fillStyle = darkColour();
		drawRect(x, y, 37, 353, 261, 362);
		drawRect(x, y, 35, 353, 37, 360);
		drawRect(x, y, 33, 353, 35, 357);
		drawRect(x, y, 28, 353, 33, 355);
		
		drawRect(x, y, 251, 137, 261, 353);
		drawRect(x, y, 251, 135, 259, 137);
		drawRect(x, y, 251, 133, 257, 135);
		drawRect(x, y, 251, 131, 255, 133);
		drawRect(x, y, 251, 129, 253, 131);
		
		drawRect(x, y, 224, 72, 235, 129);
		drawRect(x, y, 224, 70, 233, 72);
		drawRect(x, y, 224, 67, 231, 70);
		drawRect(x, y, 224, 65, 229, 67);
		drawRect(x, y, 224, 63, 227, 65);
		
		drawRect(x, y, 161, 48, 172, 63);
		drawRect(x, y, 161, 46, 170, 48);
		drawRect(x, y, 161, 44, 168, 46);
		drawRect(x, y, 161, 41, 166, 44);
		drawRect(x, y, 161, 39, 163, 41);
		
		
		if(drawText){
			context.fillStyle = textColour();
			
			//x1
			
			//x
			drawRect(x, y, 37, 377, 41, 381);
			drawRect(x, y, 46, 377, 50, 381);
			drawRect(x, y, 41, 381, 46, 392);
			drawRect(x, y, 37, 392, 41, 397);
			drawRect(x, y, 46, 392, 50, 397);
			
			//1
			drawRect(x, y, 61, 368, 65, 392);
			drawRect(x, y, 57, 373, 61, 377);
			drawRect(x, y, 57, 392, 72, 397);
			
			//captchalogue
			
			//c
			drawRect(x, y, 279, 338, 283, 349);
			drawRect(x, y, 283, 349, 292, 353);
			drawRect(x, y, 292, 338, 296, 349);
			
			//a
			drawRect(x, y, 279, 325, 283, 333);
			drawRect(x, y, 283, 320, 288, 325);
			drawRect(x, y, 288, 320, 296, 333);
			
			//p
			drawRect(x, y, 279, 312, 301, 316); //long bottom
			drawRect(x, y, 279, 305, 283, 312); //left
			drawRect(x, y, 283, 301, 292, 305); //top
			drawRect(x, y, 292, 305, 296, 312); //right
			
			//t
			drawRect(x, y, 275, 288, 292, 292);
			drawRect(x, y, 279, 283, 283, 296);
			drawRect(x, y, 292, 283, 296, 288);
			
			//c
			drawRect(x, y, 279, 264, 283, 272);
			drawRect(x, y, 283, 272, 292, 277);
			drawRect(x, y, 292, 264, 296, 272);
			
			//h
			drawRect(x, y, 268, 255, 296, 259);
			drawRect(x, y, 279, 251, 283, 255);
			drawRect(x, y, 283, 244, 295, 251);
			
			//a
			drawRect(x, y, 279, 231, 283, 240);
			drawRect(x, y, 283, 227, 288, 231);
			drawRect(x, y, 288, 227, 296, 240);
			
			//l
			drawRect(x, y, 268, 216, 275, 222);
			drawRect(x, y, 268, 211, 296, 216);
			
			//o
			drawRect(x, y, 283, 198, 292, 203);
			drawRect(x, y, 279, 194, 283, 198);
			drawRect(x, y, 292, 194, 296, 198);
			drawRect(x, y, 283, 187, 292, 194);
			
			//g
			drawRect(x, y, 279, 170, 283, 179);
			drawRect(x, y, 283, 170, 296, 174);
			drawRect(x, y, 288, 174, 292, 179);
			drawRect(x, y, 283, 179, 292, 183);
			drawRect(x, y, 296, 174, 301, 183);
			
			//u
			drawRect(x, y, 279, 150, 296, 155);
			drawRect(x, y, 292, 155, 296, 161);
			drawRect(x, y, 279, 161, 292, 166);
			
			//e
			drawRect(x, y, 279, 137, 283, 142);
			drawRect(x, y, 283, 133, 288, 146);
			drawRect(x, y, 288, 142, 292, 146);
			drawRect(x, y, 292, 133, 296, 142);
		}
	}
	
	/*try {*/
	//context.drawImage(cardItem.IMG, x+29, y+40, 251-28, 353-39);
	//context.drawImage(cardItem.IMG, x+29, y+40);
	//console.log(item.src + " is the location, naturalWidth: " + item.naturalWidth + ", naturalHeight: " + item.naturalHeight);
	
	var CARD_LEFT = 28;
	var CARD_RIGHT = 251;
	var CARD_TOP = 39;
	var CARD_BOTTOM = 353;
	
	var width = item.naturalWidth;
	var height = item.naturalHeight;
	
	var xScaleFactor = (CARD_RIGHT - CARD_LEFT)/(width);
	var yScaleFactor = (CARD_BOTTOM - CARD_TOP)/(height);
	
	var yScaled = (yScaleFactor < xScaleFactor);
	
	if(yScaled){
		scaleFactor = yScaleFactor;
	} else {
		scaleFactor = xScaleFactor;
	}
	
	var newWidth = Math.floor(width * scaleFactor);
	var newHeight = Math.floor(height * scaleFactor);
	
	var xPos, yPos;
	
	if(!yScaled){
		xPos = CARD_LEFT;
		yPos = Math.floor((CARD_TOP + CARD_BOTTOM - newHeight) / 2); 
	} else {
		xPos = Math.floor((CARD_LEFT + CARD_RIGHT - newWidth) / 2);
		yPos = CARD_TOP;
	}
	
	context.drawImage(item, x+xPos, y+yPos, newWidth, newHeight);
	
	//console.log((x+xPos) + ", " + (y+yPos) + ", " + newWidth + ", " + newHeight);
	/*}
	catch(err) {
		console.log(item.src + " does not exist.");
	}*/
	
	
	//console.log(code);
	var binary = codeToHoles(code);
	
	for(var i = 0; i < binary.length; i++){
		if(binary[i]){
			var yNum = i % 12;
			var xNum = Math.floor(i / 12);
			
			//43, 87, 130, 174
			var xDisplacement = 43 + 44 * xNum;
			if(xNum >= 2){
				xDisplacement--;
			}
			
			//83, ?, 126, 148, 170, 192, 214, 235, 257, 279, 301, 323
			//  22,  21,  22,  22,  22,  22,  23,  22,  22,  22,  22
			
			var yDisplacement = 83 + 22 * yNum;
			
			drawHole(x, y, xDisplacement, yDisplacement);
		}
	}
	
	//console.log(holesToCode(binary));
	
	//clearRect(x, y, 100, 100, 200, 200);
	
	
};