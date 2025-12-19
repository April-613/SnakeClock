//let currentSec = second();

function snakeDay(){
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

var  hr = hour();
var  min = minute();
var  sec = second();
var totalSeconds = hr*60*60 + min*60 +sec;


  translate(400, 100);
  if (totalSeconds <= 14400){
    let s1 = map (totalSeconds, 0, 14400, 0, 300);
    if (totalSeconds == 0){
        line (0, 0, s1, 0);
     } else {
       let s0 = s1 - 300/14400;
//       line (0, 0, s0, 0 );//store the prevous length
       line (s0, 0, s1, 0);
     }
  }



  if (totalSeconds > 14400 && totalSeconds <= 28800){
    let s2 = map (totalSeconds, 14400, 28800, 0, 300);
    let s02 = s2 - 300/14400;
  //  line (-100, 0, -100, s02 );
    line (300, s02, 300, s2);
  }


  if (totalSeconds > 28800 && totalSeconds <= 43200){
    let s3 = map (totalSeconds, 28800, 43200, 300, 0);
    let s03 = s3 + 300/14400;
    line (s03, 300, s3, 300);
  }

  if (totalSeconds > 43200 && totalSeconds <= 57600){
    let s4 = map (totalSeconds, 43200, 57600, 0, -300);
    let s04 = s4 + 300/14400;
    line (s04, 300, s4, 300);
  }

  if (totalSeconds > 57600 && totalSeconds <= 72000){
    let s5 = map (totalSeconds, 57600, 72000, 300, 600);
    let s05 = s5 - 300/14400;
    line (-300, s05, -300, s5);
  }

  // if (sec == 0){
  //   sec = 60;
  // }
  if (totalSeconds > 72000 && totalSeconds <= 86400){
    let s6 = map (totalSeconds, 72000, 86400, -300, 0);
    let s06 = s6 - 300/14400;
    line (s06, 600, s6, 600);
  }
}
