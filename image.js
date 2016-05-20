var IMAGE;

function loadImage(){
	var file = imageForm.elements[0].files[0];
	var reader  = new FileReader();
	
	reader.addEventListener("load", function(){
		IMAGE.src = reader.result;
	}, false);
	
	if(file) {
		reader.readAsDataURL(file);
	}
}