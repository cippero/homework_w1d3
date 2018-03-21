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

//Fizz Buzz
//1.
for(var i=1; i<=100; i++){
	console.log(i);
}

//2.
for(var i=1; i<=100; i++){
	if (i % 3 === 0){
		console.log("Fizz");
	} else {
		console.log(i);
	}
}

//3.
for(var i=1; i<=100; i++){
	if (i % 3 === 0){
		console.log("Fizz");
	} else if (i % 5 === 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

//4.
for(var i=1; i<=100; i++){
	if (i % 3 === 0 && i % 5 === 0){
		console.log("FizzBuzz");
	} else if (i % 3 === 0){
		console.log("Fizz");
	} else if (i % 5 === 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

//Getting to Know You
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

//1.
thom.shift();
thom.unshift("Gameboy");

//2.
karolin[1] += 1;

//3.
matt[2] = "Gotham City";

//4.
kristyn.pop();
kristyn.push("Brooklyn");

//Yell at the Ninja Turtles
//1.
const ninTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

//2.
for (i=0; i<ninTurtles.length; i++){
	console.log(ninTurtles[i].toUpperCase());
}

//Return of the Closets
  const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//Alien Attire
//1.
var kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

//Dress Us Up
//1.
console.log("Kristyn will be wearing " + kristynsCloset[3] + ", " + kristynsCloset[4] + ", and " + kristynsCloset[1] + ".");

console.log("Kristyn will be wearing " + kristynsCloset[5] + ", " + kristynsCloset[6] + ", and " + kristynsCloset[4] + ".");

console.log("Kristyn will be wearing " + kristynsCloset[2] + ", " + kristynsCloset[1] + ", and " + kristynsCloset[0] + ".");

console.log("Thom will be wearing " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + ".");

console.log("Thom will be wearing " + thomsCloset[0][3] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][0] + ".");

console.log("Thom will be wearing " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + ", and " + thomsCloset[2][3] + ".");

//Dirty Laundry
//1.
for (i=0; i<kristynsCloset.length; i++){
	console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

//Inventory
//2.
for (var i=0; i<thomsCloset.length; i++){
	for (var j=0; j<thomsCloset[i].length; j++){
		console.log(`Thom's inventory includes ${thomsCloset[i][j]}`);
	}
}

//Multiples of 3 and 5
var sumMultiples = 0;
for(var i=0; i<1000; i++){
	if (i % 3 === 0 || i % 5 === 0){
		sumMultiples += i;
	}
}

//Hungry for More
//1.
function isocelesTri(height){
	for(var i=1; i<=height; i++){
		var length = "";
		for(var j=0; j<i; j++){
			length += "#";
		}
		console.log(length);
	}

}

//2.
function isocelesTriUpsideDown(height){
	for(var i=height; i>=0; i--){
		var length = "";
		for(var j=0; j<i; j++){
			length += "#";
		}
		console.log(length);
	}

}





