var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload() {
  playerImage = loadImage("/rocket.png");
  enemyImage = loadImage("/asteroid.png");
  backgroundImage = loadImage("https://i.imgur.com/aKQOg3G.png");
}

function setup() {
  textSize(90);
  isGameOver = false;
  createCanvas(windowWidth / 2, windowHeight);
  player = createSprite(width / 2, height - (playerImage.height), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
}

function draw() {
  if (isGameOver) {
    gameOver();
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      mouseClicked()
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      mouseClicked()
    }
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      player.position.x += 18;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      player.position.x -= 18;
    }
    enemy.position.y = enemy.position.y + 5;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  textSize(40);
  text("Game Over!", width / 2, height / 2);
  textSize(40);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (playerImage.height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
}