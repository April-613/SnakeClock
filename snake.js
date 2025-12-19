function SnakePath (){
  //( begin, end ){
  // snake.begin = begin;
  // snake.end = end;



  textSize(14);
  fill(225);
  // stroke(225);
  // strokeWeight(1);

  translate(200, 100);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, -100, 0);
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



  translate(-100, 0);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 0, 100);
  noStroke();
  text('10', -12, -12);

  translate(0,100);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 100, 0);
  noStroke();
  text('20', -12, 20);

  translate(100, 0);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 100, 0);
  noStroke();
  text('30', 0, 20);

  translate(100, 0);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, 0, 100);
  noStroke();
  text('40', 12, -12);

  translate(0, 100);
  stroke(225);
  strokeWeight(0.5);
  line(0, 0, -100, 0);
  noStroke();
  text('50', 12, 20);

  noStroke();
  text('60', -100, 20);

}
