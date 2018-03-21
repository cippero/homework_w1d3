//Easy Going
//1.
for(var i=1; i<=20; i++){
	console.log(i);
}

//Get Even
//1.
for(var i=0; i<=200; i++){
	if(i%2 === 0){
		console.log(i);
	}
}

//Excited Kitten
//1.
for(var i=0; i<20; i++){
	console.log("Love me, pet me! HSSSSSS!");
}

//2.
for(var i=0; i<20; i++){
	if(i%2 === 0){
		var randNum = Math.random();
		if (randNum < 0.35){
			console.log("...human...why you taking pictures of me?...");
		} else if (randNum > 0.35 && randNum < 0.7){
			console.log("...the catnip made me do it...");
		} else if (randNum > 0.7){
			console.log("...why does the red dot always get away...");
		}
	}
}