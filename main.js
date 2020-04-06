var Battleship = require("./Battleship");
var Board = require("./Board");

const carrier = new Battleship([0,0],5,"down");
const battleship = new Battleship([0, 1], 4, "down");
const cruiser = new Battleship([0, 2], 4, "down");
const submarine = new Battleship([0, 3], 3, "down");
const destroyer = new Battleship([0, 4], 3, "down");


const Battleships = [carrier, battleship, cruiser, submarine, destroyer];
 
const battleshipBoard = new Board(Battleships);
console.log(battleshipBoard.getBoard());