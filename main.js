var Battleship = require("./Battleship");
var Board = require("./Board");

const Battleships = [new Battleship([2,1], 2, "up")];
 
const battleshipBoard = new Board(Battleships);

console.log(battleshipBoard.getBoard());