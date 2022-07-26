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

let estutante1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(estudante1) {
  let nomeConcat = estudante1[ estudante1.length - 1 ] + ', ' + estudante1[0];
  return nomeConcat;
}
// console.log(concatName(estutante1));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
