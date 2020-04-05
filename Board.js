class Board {
    constructor(battleships){
        this.height = 10;
        this.width = 10;
        this.battleships = battleships; // Battleship array full of battleships
        this.board = this.populateBoard(battleships);
    }
    populateBoard(battleships){
        var board = "";
        for(var i = 0; i < this.height; i++){
            for(var j = 0; j < this.width; j++){
                board = board + "[]";
            }
            board = board + "\n";
        }
        return board;
    }
    getBoard(){
        return this.board;
    }
}

module.exports = Board;