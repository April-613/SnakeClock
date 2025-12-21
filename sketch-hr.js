//var path = [];
//var hr = hour();
//var min = minute();

//var timeSnake = [];

let colorAfterPress = 0;
let colorOftheMinute = 0;


function setup() {
  //frameRate(1);
  createCanvas(800, 1200);
  background(50);




  colorAfterPress = color(random(255), random(255), random(255));
  colorOftheMinute = color(random(255), random(255), random(255));


  push();
  SnakePathHr();
  pop();


  push();
  SnakePath();
  pop();
}

function draw() {
  fill(50);
  stroke(colorOftheMinute);
  strokeWeight(1);
  rect(140, 120, 100, 40);

  fill(50);
  stroke(colorAfterPress);
  strokeWeight(2);
  rect(300, 800, 200, 40, 10);


  let hr = hour();
  let min = minute();
  let sec = second();
  var totalSeconds = hr*60*60 + min*60 +sec;

  fill(225);
  noStroke();
  textSize(21);
  textFont("Roboto Mono");
  text(totalSeconds, 150, 150);
  text(hr + ':' + min + ':' + sec, 357, 827);




  // let colors = ()
  push();
    fill (colorAfterPress);
    stroke (colorAfterPress);
    strokeWeight (7);
    snakeDay();

  pop();



  push();
    fill (colorOftheMinute);
    stroke (colorOftheMinute);
    strokeWeight (7);
    snakeBySecond();
    if (sec % 60 == 0) {
        colorOftheMinute = color(random(255), random(255), random(255));
      }
  pop();

  noFill();
  stroke(colorAfterPress);
  strokeWeight(5);
  rect(1, 1, 796, 1196);

}

function mousePressed(){
  colorAfterPress = color(random(255), random(255), random(255));

}
