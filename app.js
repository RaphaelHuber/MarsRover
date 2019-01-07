// Defining the rover //
var marsRoverKata = {
  name: "rover",
  // Defaut direction North //
  direction: "N",
  // Initial x y position //
  x: 0,
  y: 0,
};

// Defining planet Mars as a 10x10 grid //
var mars = [
  ["rover", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
]; 

// Travel Log - didn't manage to use arrays yet //
function travelLog(a,b) {
  console.log("[" + a + ", " + b + "]");
}

// Printing initial rover position //
console.log("Initial position of Rover is: ");
travelLog(marsRoverKata.x,marsRoverKata.y);

// Turning the rover into a direction //
// Turning left //
function turnLeft() {
  switch(marsRoverKata.direction) {
    case "N":
      marsRoverKata.direction = "W";
      break;
    case "E":
      marsRoverKata.direction = "N";
      break;
    case "S":
      marsRoverKata.direction = "E";
      break;
    case "W":
      marsRoverKata.direction = "S";
      break;
  }
  console.log("Rover turned left!");
};

// Turning right //
function turnRight() {
  switch(marsRoverKata.direction) {
    case "N":
      marsRoverKata.direction = "E";
      break;
    case "E":
      marsRoverKata.direction = "S";
      break;
    case "S":
      marsRoverKata.direction = "W";
      break;
    case "W":
      marsRoverKata.direction = "N";
      break;
  }
  console.log("Rover turned right!");
};

// Moving the rover //
// Move Forward Function //
function moveForward(){
  if (marsRoverKata.direction === "N") {
    marsRoverKata.y -= 1;
  } else if (marsRoverKata.direction === "E") {
    marsRoverKata.x += 1;
  } else if (marsRoverKata.direction === "S") {
    marsRoverKata.y += 1;
  } else {
    marsRoverKata.x -= 1;
  }
  console.log("Rover moved forward!");
};

// Move Backwards Function //
function moveBackwards(){
  if (marsRoverKata.direction === "N") {
    marsRoverKata.y += 1;
  } else if (marsRoverKata.direction === "E") {
    marsRoverKata.x -= 1;
  } else if (marsRoverKata.direction === "S") {
    marsRoverKata.y -= 1;
  } else {
    marsRoverKata.x += 1;
  }
  console.log("Rover moved backwards!")
};

// Command function //
function command(listOfCommands) {
  for (var i = 0; i < listOfCommands.length; i++) {
    var order = listOfCommands[i];
    switch (order) {
      case "f":
        moveForward(marsRoverKata);
        break;
      case "b":
        moveBackwards(marsRoverKata);
        break;
      case "r":
        turnRight(marsRoverKata);
        break;
      case "l":
        turnLeft(marsRoverKata);
        break;
      default:
        console.log(listOfCommands[i] + " is not a valid command!");
    }
    travelLog(marsRoverKata.x,marsRoverKata.y);
  }
}

// Boundaries - not finished yet //
// function boundaries(order) {
//  if 
//}


// Commands //
//moveForward(marsRoverKata); //
command("rfrfflfflbb"); 

// Printing current rover position //
console.log("Current Rover-position is: [" + marsRoverKata.x + ", " + marsRoverKata.y + "]");
