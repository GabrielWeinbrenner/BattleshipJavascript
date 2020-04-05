export default class Board {
    constructor(size) {
        this.size = size; // [height, width]    
    }
    getBoard() {
        return this.size;
    }
}