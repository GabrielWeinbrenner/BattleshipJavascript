class Battleship {
    constructor(size, orientation) {
        this.size = size; // width of ship 
        this.orientation = orientation // left, down, right   
    }
    getSize() {
        return this.size;
    }
    getOrientation(){
        return this.orientation;
    }
}

module.exports = Battleship