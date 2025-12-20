function SnakePathHr (){
  //( begin, end ){
  // snake.begin = begin;
  // snake.end = end;



  textSize(21);
  textFont("Roboto Mono");
  fill(225);
  // stroke(225);
  // strokeWeight(1);

  translate(400, 100);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 300, 0);
  line(75, -10, 75, 10);
  line(150, -10, 150, 10);
  line(225, -10, 225, 10);
  noStroke();
  text('0', 0, -12);
//  line2();

  // SnakePath.begin = (0, 0);
  // SnakePath.end = (-100, 0);
  // SnakePath.length = ;


  // let hr = hour();
  // let min = minute();
  // let sec = second();

  // var currentTime = hr*60*60 + min*60 + sec;
  // var totalSeconds = 60*60*24;
  //
  // var LP = currentTime/totalSeconds;


  // var pos = []
  // var velocity = SnakePath.length/second;
  // var v = velocity;
  //
  // timeDot = pos + v + direction; //maybe?


  // var dir1 = (-x, 0); //do I need to define x & y first?
  // var dir2 = (0, -y);
  // var dir3 = (x, 0);



  translate(300, 0);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 0, 300);
  line(-10, 75, 10, 75);
  line(-10, 150, 10, 150);
  line(-10, 225, 10, 225);
  noStroke();
  text('4', -12, -12);

  translate(0,300);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, -300, 0);
  line(-75, -21, -75, 21);
  line(-150, -10, -150, 10);
  line(-225, -10, -225, 10);
  noStroke();
  text('8', -12, 20);

  translate(-300,0);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, -300, 0);
  line(0, -10, 0, 10);
  line(-75, -10, -75, 10);
  line(-150, -10, -150, 10);
  line(-225, -10, -225, 10);
  noStroke();
  text('12', 0, 20);

  translate(-300, 0);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 0, 300);
  line(-21, 75, 21, 75);
  line(-10, 150, 10, 150);
  line(-10, 225, 10, 225);
  noStroke();
  text('16', 12, -12);

  translate(0, 300);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 300, 0);
  line(75, -10, 75, 10);
  line(150, -10, 150, 10);
  line(225, -10, 225, 10);
  noStroke();
  text('20', 12, 20);

  noStroke();
  text('24', 300, 20);

}
