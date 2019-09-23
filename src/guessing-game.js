class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
        let mid = Math.ceil((this.max + this.min) / 2);
        return mid;
    }

    lower() {
      this.max = this.guess();
    }

    greater() {
      this.min = this.guess();
    }
}

module.exports = GuessingGame;