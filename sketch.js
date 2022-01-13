
var gato, gatoimg, rato, ratoimg, jardimimg, gatob, ratob;

function preload() {

    jardimimg = loadImage("garden.png");
    gatoimg = loadAnimation("cat1.png", "cat2.png");
    ratoimg = loadAnimation("mouse.png", "mouse2.png");
    gatob = loadAnimation("cat3.png", "cat4.png");
    ratob = loadAnimation("mouse3", "mouse4");

}

function setup(){
    createCanvas(1000,800);

    gato = createSprite(800,500,10,10);
    gato.addAnimation("gatoimg");

    rato = createSprite(800,200,10,10);
    rato.addAnimation("ratoimg");

    gatob = loadAnimation("gatob");
    ratob = loadAnimation("ratob");
}

function draw() {
    background(jardimimg);

    if(keyDown("left")){
        gato.velocityX = 2;
    }
    else{}

    if(gato.isTouching(rato)){
        gato.changeAnimation(gatob);
        ratob.changeAnimation(ratob);
    }

    drawSprites();

}
