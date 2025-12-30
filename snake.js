function SnakePath (){
  //( begin, end ){
  // snake.begin = begin;
  // snake.end = end;


  textFont("Roboto Mono");
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
