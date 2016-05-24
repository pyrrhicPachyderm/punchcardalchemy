var IMAGE = new Image();

function loadImage(formIndex){
	var file = imageForm.elements[formIndex].files[0];
	var reader = new FileReader();
	
	reader.addEventListener("load", function(){
		IMAGE.src = reader.result;
	}, false);
	
	if(file) {
		reader.readAsDataURL(file);
	}
}

function loadInsert(formIndex){
	var file = editForm.elements[formIndex].files[0];
	var reader = new FileReader();
	
	reader.addEventListener("load", function(){
		IMAGE.src = reader.result;
	}, false);
	
	if(file) {
		reader.readAsDataURL(file);
	}
}

function getImage(formIndex){
	var file = imageForm.elements[formIndex].files[0];
	var reader = new FileReader();
	var image = new Image();
	
	reader.addEventListener("load", function(){
		image.src = reader.result;
	}, false);
	
	if(file) {
		reader.readAsDataURL(file);
	}
	
	return image;
}