//Cahracters in arrey
var character = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Charism",
  "Inteligence",
  "Wisdom"
];
//bonification character
var mc = [
  "str_mc",
  "dex_mc",
  "con_mc",
  "char_mc",
  "int_mc",
  "wis_mc"
];

function charac(){

  var char_point = [];//character points
  var points = []; //points random to distribute
  var max = 18; //max points
  var min = 7; //minimun points

  //create randoms points
  for(x = 0; x <= 5; x++) {
    let p = Math.round(Math.random() * (max - min) + min);
    if(p >= 16 && p <= 18) max = 14;
    points.push(p);
  }

  //compare and organizate points of upper at lower
  points = points.sort(function(a, b) {
    return b - a;
  });

  //distribution of points a diferents characters
  for (i = 0; i < character.length; i++) {
    char_point[i] = points[i];
  }

  //avarage of character
  var average = (
    char_point[0] +
    char_point[1] +
    char_point[2] +
    char_point[3] +
    char_point[4] +
    char_point[5]) / 6;

  //loop by distribution
  for(i = 0; i < character.length; i++) {
    document.getElementById(character[i]).value = char_point[i];
    document.getElementById(mc[i]).innerText = 0;
  }
  document.getElementById("average").innerText = average.toFixed(2);

};

//distribution bonification points
function dis_mc() {

  for(i = 0; i <= 5; i++) {
    var point = document.getElementById(character[i]).value;

    if(point%2 == 0) {
      point = (point - 10) / 2;
    }else {
      point = parseInt((point - 10) / 2);
    }

    document.getElementById(mc[i]).innerText = point;
  }

};
