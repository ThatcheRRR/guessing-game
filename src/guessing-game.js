class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let mid = 0;
        while (this.min <= this.max) {
            mid = Math.floor((this.max + this.min) / 2);
        }
        return mid;
    }

    lower() {
        this.mid = this.max - 1;
    }

    greater() {
        this.mid = this.min + 1;
    }
}

module.exports = GuessingGame;