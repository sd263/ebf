var stage;
var square;
var keys = {};

function init() {
    stage = new createjs.Stage("c");
    square = new createjs.Shape();
    square.graphics.beginFill("#3A5FCD").drawRect(0, 0, 75, 75);
    square.x = 50;
    square.y = 50;
    stage.addChild(square);

    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setFPS(60);

    this.document.onkeydown = keydown;
    this.document.onkeyup = keyup;
}

function keydown(event) {
    keys[event.keyCode] = true;
}

function keyup(event) {
    delete keys[event.keyCode];
}

function tick() {
    if (keys[37]) square.x -= 10;
    if (keys[38]) square.y -= 10;
    if (keys[39]) square.x += 10;
    if (keys[40]) square.y += 10;
    stage.update();
}