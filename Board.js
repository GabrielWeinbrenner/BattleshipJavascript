class Board {
    constructor(size, battleships){
        this.size = size; // [height, width]
        this.battleships = battleships; // Battleship array full of battleships
        this.board = populateBoard(battleships);
    }
    populateBoard(battleships){
        
    }
    getBoard(){
        for(var i = 0; i < this.size[0]; i++){
            for(var j = 0; j< this.size[1]; j++){
                console.log()
            }
        }
    }
}