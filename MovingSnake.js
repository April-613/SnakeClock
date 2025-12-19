//let currentSec = second();

function snakeBySecond(){
  // sec.begin = begin;
  // sec.end = end;
  //
  //
  // sec.current = function (){
  //   stroke(col);
  //   strokeWeight(4);
  //   line (sec.begin.x, sec.begin.y, sec.end.x, sec.end.y);
  // }

  // let currentSec = second();
  // sec.10 =



///map function
var sec = second();



  translate(200, 100);
  if (sec <= 10){
    let s1 = map (sec, 0, 10, 0, -100);
    if (sec == 0){
        line (0, 0, s1, 0);
     } else {
       let s0 = s1 + 10;
//       line (0, 0, s0, 0 );//store the prevous length
       line (s0, 0, s1, 0);
     }
  }



  if (sec > 10 && sec <= 20){
    let s2 = map (sec, 10, 20, 0, 100);
    let s02 = s2 - 10;
  //  line (-100, 0, -100, s02 );
    line (-100, s02, -100, s2);
  }


  if (sec > 20 && sec <= 30){
    let s3 = map (sec, 20, 30, -100, 0);
    let s03 = s3 - 10;
    line (s03, 100, s3, 100);
  }

  if (sec > 30 && sec <= 40){
    let s4 = map (sec, 30, 40, 0, 100);
    let s04 = s4 -10;
    line (s04, 100, s4, 100);
  }

  if (sec > 40 && sec <= 50){
    let s5 = map (sec, 40, 50, 100, 200);
    let s05 = s5 - 10;
    line (100, s05, 100, s5);
  }
  // if (sec == 0){
  //   sec = 60;
  // }
  if (sec == 0){
    sec = 60;
  }
  if (sec > 50 && sec <= 60){
    let s6 = map (sec, 50, 60, 100, 0);
    let s06 = s6 + 10;
    line (s06, 200, s6, 200);
  }
}
