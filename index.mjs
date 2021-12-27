function canExit(arr) {
	let height = arr.length;
    console.log(height)
	const width = height? arr[0].length: 0;
	const arr2 = [];
	for(var i=0; i<height; i++) {
    arr2[i] = new Array(width);
	}

	return checkNextStep(arr,arr2,0 , 0,height - 1,width - 1);
	
}

function checkNextStep(arr,arr2,row,coloum,height,width){
    console.log({arr,arr2,row,coloum,height,width})
	if(row < 0|| coloum < 0|| row > height|| coloum > width|| arr2[row][coloum] || arr[row][coloum]){
		return false;
	} else{
		if(height === row && width === coloum){
			return true;
		} else{
			arr2[row][coloum] = true;
			return checkNextStep(arr,arr2,row+1,coloum,height,width)||
				checkNextStep(arr,arr2,row,coloum +1,height,width)||
				checkNextStep(arr,arr2,row,coloum - 1,height,width)||
				checkNextStep(arr,arr2,row-1,coloum,height,width)
		}
	}
}

canExit([
	[0, 1, 1, 1, 1, 1, 1], 
	[0, 0, 1, 1, 0, 1, 1], 
	[1, 0, 0, 0, 0, 1, 1], 
	[1, 1, 1, 1, 0, 0, 1], 
	[1, 1, 1, 1, 1, 0, 0]
])