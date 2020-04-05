class Battleship {
    constructor(position, size, orientation) {
        this.position = position; // [0,1]; [row, col]
        this.size = String(size); // width of ship 
        this.orientation = orientation // left, down, right, up   
    }
    getPosition() {
        return this.position;
    }
    getSize() {
        return this.size;
    }
    getOrientation(){
        return this.orientation;
    }
}

module.exports = Battleship