class Board {
    constructor(battleships){
        this.height = 10;
        this.width = 10;
        this.battleships = battleships; // Battleship array full of battleships
        this.board = this.populateBoard(battleships);
    }
    populateBoard(battleships){
        var board = new Array(100).fill("x");
        for(var i = 0; i < this.battleships.length; i++){
            board.splice(this.convertPos(battleships[i].getPosition()),1, "-");
        }
        return board;
    }
    getBoard(){
        var board = "";
        for (var i = 0; i < this.board.length; i++) {
            if(i%10===0){
                board+= " " + i + "\n"
            }
            board += this.board[i] + " ";
        }
        return board;
    }
    convertPos(arr){
        return this.width * arr[0] + arr[1];
    }
}

module.exports = Board;