// Desafio 1
// Desafio concluido com auxilio do esquenta do dia 26/07/2022.

function compareTrue(param1, param2) {
if (param1 === true && param2 === true) {
  return true} 
  else {
  return false
}
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));

// Desafio 3
// Desafio concluido com ajuda de colega de turma ligiabicalho;

// let frase = 'go trybe';
// let frase2 = "vamo que vamos";
// const frase3 = 'foguete';

function splitSentence(frase) {
  let result = [];
  result = frase.split(' ');
  return result;
}
// console.log(splitSentence(frase3));

// Desafio 4

// let estutante1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(estudante1) {
  let nomeConcat = estudante1[ estudante1.length - 1 ] + ', ' + estudante1[0];
  return nomeConcat;
}
// console.log(concatName(estutante1))c;

// Desafio 5
const wins = 3
const ties = 1

function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// console.log(footballPoints(0,0));

// Desafio 6
// Desafio concluído com a ajuda da tread: https://trybecourse.slack.com/archives/C03NDPN4132/p1658872280700799

// let numerosTeste = [1, 9, 2, 3, 9, 5, 7];
// let numerosTeste2 = [0, 4, 4, 4, 9, 2, 1];

function highestCount(numerosTeste) {
  let bigNumber = numerosTeste[0];
  let accountBigNumber = 0;

  for (let i = 0; i < numerosTeste.length; i += 1) {
    for (let i2 = 0; i2 < numerosTeste.length; i2 += 1) {
      if (numerosTeste[i] > numerosTeste[i2] && numerosTeste[i] >= bigNumber) {
        bigNumber = numerosTeste[i];
      }
    }
  }
  for (let i3 = 0; i3 < numerosTeste.length; i3 += 1) {
    if (bigNumber === numerosTeste[i3]) {
      accountBigNumber += 1;
    }
  }
  return accountBigNumber;
}
// console.log(highestCount(numerosTeste));

// Desafio 7

let mouse = 10;
let cat1 = 20;
let cat2 = 20;

function catAndMouse(mouse, cat1, cat2) {
  let distancCat1 = Math.abs(cat1 - mouse);
  let distancCat2 = Math.abs(cat2 - mouse);

  if (distancCat1 < distancCat2) {
    return "cat1";
  }
  else if (distancCat1 > distancCat2){
    return "cat2";
  }
  else if (distancCat1 == distancCat2) {
    return 'os gatos trombam e o rato foge';
  }  
}
console.log(catAndMouse(2, 0, 4));


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
