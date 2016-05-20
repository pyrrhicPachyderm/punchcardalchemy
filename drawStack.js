var FULL_CODE = "";

function resetWorkspace(){
	IMAGE = new Image();
	CODE = "00000000";
	workspaceCode.innerHTML = CODE;
	drawWorkspace();
}

function addStack(){
	if(FULL_CODE.length == 0){
		FULL_CODE = CODE;
	} else {
		var oldHoles = codeToHoles(FULL_CODE);
		var newHoles = codeToHoles(CODE);
		var totalHoles = alchemyAnd(oldHoles, newHoles);
		FULL_CODE = holesToCode(totalHoles);
	}
	
	stackCode.innerHTML = FULL_CODE;
	
	var oldCard = new Image();
	oldCard.onload = function(e){
		stackContext.drawImage(oldCard, 0, 0);
	}
	oldCard.src = workspace.toDataURL("image/png");
	
	resetWorkspace();
}

