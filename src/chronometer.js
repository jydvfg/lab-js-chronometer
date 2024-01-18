class Chronometer {
  constructor() {
    // ... your code goes here
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    // ... your code goes here
    setInterval(() => {
      //printTimeCallback(this.currentTime);
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime;
    if (seconds === 0) {
      return seconds;
    } else {
      let remainingSeconds = seconds % 60;
      return remainingSeconds;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
