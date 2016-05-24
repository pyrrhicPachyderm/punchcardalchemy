var NUM_CARDS;

var HORIZONTAL_DISTANCE = 323 - 141 + 323 - 141;
var VERTICAL_DISTANCE = 410-108;

var HEAP = [];
var TEXT = '';
var TEXT_SIZE = 20;

function updateCardNumber(){
	NUM_CARDS = parseInt(numberForm.elements[0].value);
	
	var numItems = parseInt(numberForm.elements[1].value);
	
	while(NUM_CARDS < 0){
		alert("You can't have a negative number of cards.");
		numberForm.elements[0].value = '0';
		NUM_CARDS = parseInt(numberForm.elements[0].value);
	}
	
	while(numItems > NUM_CARDS){
		alert("You can't have fewer cards than items to fill them.");
		numberForm.elements[0].value = numItems.toString();
		NUM_CARDS = parseInt(numberForm.elements[0].value);
	}
}

function updateItemNumber(){
	var numItems = parseInt(numberForm.elements[1].value);
	
	//console.log(numItems);
	
	
	while(numItems < 0){
		alert("You can't have a negative number of items.");
		numberForm.elements[1].value = '0';
		numItems = parseInt(numberForm.elements[1].value);
	}
	
	while(numItems > NUM_CARDS){
		alert("You can't have more items than cards to hold them.");
		numberForm.elements[1].value = NUM_CARDS.toString();
		numItems = parseInt(numberForm.elements[1].value);
	}
	
	imageForm.innerHTML = "";
	
	for(var i = 0; i < numItems; i++){
		imageForm.innerHTML += "<input type=\"text\" onchange = \"readHeap()\"><input type=\"file\" onchange=\"readHeap()\"><br>";
	}
}

function readHeap(){
	var numItems = parseInt(numberForm.elements[1].value);
	
	HEAP = [];
	
	for(var i = 0; i < numItems; i++){
		HEAP.push({name:imageForm.elements[i*2].value, image:getImage(i*2+1)});
	}
}

function left(i){
	return i*2 + 1;
};

function right(i){
	return i*2 + 2;
};

function par(i){
	return Math.floor((i-1) / 2);
};

function swap(a, b){
	var temp = HEAP[a];
	HEAP[a] = HEAP[b];
	HEAP[b] = temp;	
};

function lesser(a, b){
	var partA = '';
	var partB = '';
	for(var i = 0; (i < a.length && i < b.length); i++){
		if(i == 0 || a.charAt(i-1) == b.charAt(i-1)){
			partA += a.charAt(i);
			partB += b.charAt(i);
		} else {
			break;
		}
	}
	if(partA == partB){
		if(partA.length == a.length && partB.length == b.length){
			TEXT += (partA + " = " + partB + ". ");
		} else {
			if(partA.length < a.length){
				partA += a.charAt(partA.length);
			}
			if(partB.length < b.length){
				partB += b.charAt(partB.length);
			}
			if(partA < partB){
				TEXT += (partA + " < " + partB + ". ");
			} else if(partA > partB){
				TEXT += (partA + " > " + partB + ". ");
			}
		}
	} else {
		if(partA < partB){
			TEXT += (partA + " < " + partB + ". ");
		} else if(partA > partB){
			TEXT += (partA + " > " + partB + ". ");
		}
	}
	
	return (a < b);
};

function positionCard(index, layer, along, numLayers){
	var xPos;
	
	
	if(layer == numLayers){
		xPos = along * HORIZONTAL_DISTANCE;
	} else {
		var leftX = positionCard(left(index), layer+1, along*2, numLayers);
		var rightX = positionCard(right(index), layer+1, along*2+1, numLayers);
		xPos = Math.floor((leftX + rightX) / 2);
	}
	
	
	//if(index < NUMCARDS){
	
	var image = new Image();
	if(index < HEAP.length){
		image = HEAP[index].image;
		
		//console.log(HEAP[index].name);
	}
	
	drawCard(xPos, layer * VERTICAL_DISTANCE, image, (index >= NUM_CARDS), true, '');
	
	//console.log("index: " + index + ", layer: " + layer + ", along: " + along + ", xPos: " + xPos + ", yPos: " + (layer * VERTICAL_DISTANCE) + ", HEAP.length: " + HEAP.length);
	
	
	return xPos;
}

function drawText(y){
	
	
	context.fillStyle = 'black';
	context.font = TEXT_SIZE + "px Courier New";
	context.fillText(TEXT, 20, y+20+TEXT_SIZE);
}

function drawHeap(){
	/*for(var i = 0; i < HEAP.length; i++){
		console.log(i + ": " + HEAP[i].name + ", " + HEAP[i].image);
	}
	console.log('');*/
	
	
	context.fillStyle = 'white';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	/*var xs = []
	var ys = []
	var inds = []*/
	
	var numLayers;
	
	var totalObjects = Math.max(HEAP.length, NUM_CARDS);
	for(numLayers = 0; ; numLayers++){
		totalObjects -= (1 << numLayers);
		if(totalObjects <= 0){break;}
	}
	
	positionCard(0, 0, 0, numLayers);
	drawText(numLayers * VERTICAL_DISTANCE + 410);
	
	/*var layer = 0;
	for(var i = 0; i < max(HEAP.length, NUM_CARDS); i++){
		if(i == (1 << (layer+1)) - 1){
			layer++;
		}
		
	}*/
};

function insertCurrent(){
	var itemImage = new Image();
	itemImage.onload = function(){
	insert({name:editForm.elements[0].value, image:itemImage}, true);
	};
	itemImage.src = IMAGE.src;
}

function insert(item, render){
	/*var render = true;
	item = {name:editForm.elements[0].value, image:IMAGE};//Problem here*/
	
	if(render){
		var encoder = new GIFEncoder();
		encoder.setRepeat(0); //0 -> loop forever //1+ -> loop n times then stop
		encoder.setDelay(500); //go to next frame every n milliseconds
		encoder.start();
		
		drawHeap();
		encoder.addFrame(context);
	}
	
	var node = HEAP.length;
	//HEAP[node] = item;
	HEAP.push(item);
	
	/*console.log("node = " + node);
	console.log("HEAP[node].name = " + HEAP[node].name);*/
	
	
	while(node != 0){
		if(render){
			drawHeap();
			encoder.addFrame(context);
		}
		if(lesser(HEAP[node].name, HEAP[par(node)].name)){
			swap(node, par(node));
			node = par(node);
		} else {
			break;
		}
	}
	
	if(render){
		drawHeap();
		encoder.addFrame(context);
	}
	
	
	if(HEAP.length > NUM_CARDS){
		TEXT += ('\nThere is no room for the ' + HEAP[HEAP.length - 1].name + ' in your Sylladex, and it is ejected violently.');
	}
	
	if(render){
		drawHeap();
		encoder.addFrame(context);
		encoder.addFrame(context);
	}
	
	while(HEAP.length > NUM_CARDS){
		HEAP.pop();
	}
	
	if(render){
		encoder.finish();
		var binaryGif = encoder.stream().getData() //notice this is different from the as3gif package!
		var dataURL = 'data:image/gif;base64,' + encode64(binaryGif);
		document.getElementById('canvasImg').src = dataURL;
	}
	
	//console.log(TEXT);
	TEXT = '';
};

function extract(/*render*/){
	var render = true;
	
	if(render){
		var encoder = new GIFEncoder();
		encoder.setRepeat(0); //0 -> loop forever //1+ -> loop n times then stop
		encoder.setDelay(500); //go to next frame every n milliseconds
		encoder.start();
		
		drawHeap();
		encoder.addFrame(context);
	}
	
	if(HEAP.length == 0){
		return;
	}
	var extracted = HEAP[0];
	HEAP[0] = HEAP[HEAP.length-1];
	HEAP.pop();
	
	var node = 0;
	while(true){
		if(render){
			drawHeap();
			encoder.addFrame(context);
		}
		
		if((left(node) < HEAP.length && HEAP[node].name > HEAP[left(node)].name) || (right(node) < HEAP.length && HEAP[node].name > HEAP[right(node)].name)){
			var useLeft = true;
			if(right(node) < HEAP.length){
				useLeft = lesser(HEAP[left(node)].name, HEAP[right(node)].name);
			}
			//swap
			if(useLeft){
				swap(node, left(node));
				node = left(node);
			} else {
				swap(node, right(node));
				node = right(node);
			}
		} else {
			break;
		}
		
	}
	
	if(render){
		encoder.finish();
		var binaryGif = encoder.stream().getData() //notice this is different from the as3gif package!
		var dataURL = 'data:image/gif;base64,' + encode64(binaryGif);
		document.getElementById('canvasImg').src = dataURL;
	}
	
	//console.log(TEXT);
	TEXT = '';
	return extracted;
};