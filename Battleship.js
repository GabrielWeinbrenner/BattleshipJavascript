class Battleship {
    constructor(position, size, orientation) {
        this.position = position; // [0,1]; [row, col]
        this.size = size; // width of ship 
        this.orientation = orientation // left, down, right, up   
        this.hits = new Array(this.size).fill(false);
        this.isSunk = false;
    }
    getHits(){
        return this.hits;
    }
    setHits(hits){
        this.hits = hits;
    }
    getHitPoint(index){
        return this.hits[index] === false ? "o" : "x";
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
    getIsSunk(){
        return this.isSunk;
    }
}

module.exports = Battleship