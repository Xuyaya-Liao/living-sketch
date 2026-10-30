let eyes = [];
let rotating = [];
let hair = [];
let burn = [];
let burningSound

let eyesClick = false;
let hairClick = false;
let burnClick = false;

let eyesStartFrame = 0;
let hairStartFrmae = 0;
let burnStartFrame = 0;

let eyesFrame = 0;
let hairFrame = 0;
let burnFrame = 0;
let rotatingFrame = 0;

async function setup() {
  createCanvas(800,800);
  frameRate(12);

  burningSound= await loadSound("sound/burningb.wav")
  burningSound.amp(0.6);

  
  eyes = await Promise.all([
    loadImage("image/eye1.png"),
    loadImage("image/eye1.png"),
    loadImage("image/eye2.png"),
    loadImage("image/eye3.png"),
    loadImage("image/eye3.png"),
    loadImage("image/eye4.png"),
    loadImage("image/eye4.png"),
    loadImage("image/eye4.png"),
    loadImage("image/eye3.png"),
    loadImage("image/eye3.png"),
    loadImage("image/eye2.png"),
  ]);
  rotating = await Promise.all([
    loadImage("image/rotate1.png"),
    loadImage("image/rotate1.png"),
    loadImage("image/rotate2.png"),
    loadImage("image/rotate2.png"),
    loadImage("image/rotate3.png"),
  ]);
  hair = await Promise.all([
    loadImage("image/hair1.png"),
    loadImage("image/hair1.png"),
    loadImage("image/hair2.png"),
    loadImage("image/hair3.png"),
    loadImage("image/hair3.png"),
    loadImage("image/hair4.png"),
    loadImage("image/hair4.png"),
    loadImage("image/hair4.png"),
    loadImage("image/hair3.png"),
    loadImage("image/hair3.png"),
    loadImage("image/hair2.png"),
  ]);
  burn = await Promise.all([
    loadImage("image/burn1.png"),
    loadImage("image/burn1.png"),
    loadImage("image/burn2.png"),
    loadImage("image/burn3.png"),
    loadImage("image/burn4.png"),
    loadImage("image/burn5.png"),
    loadImage("image/burn6.png"),
    loadImage("image/burn6.png"),
    loadImage("image/burn7.png"),
    loadImage("image/burn7.png"),
    loadImage("image/burn8.png"),
    loadImage("image/burn9.png"),
    loadImage("image/burn9.png"),
    loadImage("image/burn9.png"),
  ]);
}

function draw() {
  background(50);

  //draw character
  if (eyesClick == false) {
    image(eyes[0], 0, 0, 800, 800);
  } else if (eyesClick == true) {
    image(eyes[eyesFrame], 0, 0, 800, 800);

    eyesFrame += 1;

    if (eyesFrame >= eyes.length) {
      eyesFrame = 0;
      eyesClick = false;
    }
  }

  //draw hair
  if (hairClick == false) {
    image(hair[0], -10, -4, 800, 800);
  } else if (hairClick == true) {
    image(hair[hairFrame], -10, -4, 800, 800);

    hairFrame += 1;

    if (hairFrame >= hair.length) {
      hairFrame = 0;
      hairClick = false;
    }
  }

  //draw rotating

  if (burnClick == false) {
    image(rotating[rotatingFrame], mouseX - 240, mouseY - 280, 520, 520);

    rotatingFrame += 1;

    if (rotatingFrame >= rotating.length) {
      rotatingFrame = 0;
    }
  } else {
    image(burn[burnFrame], mouseX - 240, mouseY - 280, 520, 520);

    burnFrame += 1;

    if (burnFrame >= burn.length) {
      burnFrame = 0;
      burnClick = false;
    }
  }
}
function mousePressed() {

  burningSound.rate(2.0)
  burningSound.play()
  eyesClick = true;
  hairClick = true;
  burnClick = true;
}
