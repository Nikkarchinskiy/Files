const refs = {
  days: document.querySelector(`span[data-value="days"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  mins: document.querySelector(`span[data-value="mins"]`),
  secs: document.querySelector(`span[data-value="secs"]`),
};

const refsChange = {
  days: document.querySelector(`.daysCount`),
  hours: document.querySelector(`.hoursCount`),
  mins: document.querySelector(`.minutesCount`),
  secs: document.querySelector(`.secondsCount`),
};

const timerDefault = {
  days: refs.days.innerText,
  hours: refs.hours.innerText,
  mins: refs.mins.innerText,
  secs: refs.secs.innerText,
};

// version 1: (doesn't usage module Date())
// class Timer {
//   constructor(timerInfo) {
//     let { days, hours, mins, secs } = timerInfo;
//     this.days = days;
//     this.hours = hours;
//     this.mins = mins;
//     this.secs = secs;
//   }

//   displayTimer() {
//     let { days, hours, mins, secs } = refsChange;

//     days.innerText = this.days;
//     hours.innerText = this.hours;
//     mins.innerText = this.mins;
//     secs.innerText = this.secs;
//   }

//   changeTime(callback) {
//     let { days, hours, mins, secs } = refsChange;

//     let interval = setInterval(function () {
//       secs.innerText -= 1;

//       if (
//         days.innerText == 0 &&
//         hours.innerText == 0 &&
//         mins.innerText == 0 &&
//         secs.innerText < 0
//       ) {
//         clearInterval(interval);
//         callback();
//       }

//       if (hours.innerText == 0 && mins.innerText == 0 && secs.innerText < 0) {
//         days.innerText -= 1;
//         hours.innerText = 23;
//         mins.innerText = 59;
//         secs.innerText = 60;
//       }

//       if (mins.innerText == 0 && secs.innerText < 0) {
//         hours.innerText -= 1;
//         mins.innerText = 59;
//         secs.innerText = 60;
//       }

//       if (secs.innerText < 0) {
//         mins.innerText -= 1;
//         secs.innerText = 60;
//       }
//     }, 1000);
//   }

//   finishedTimer() {
//     let { days, hours, mins, secs } = refsChange;

//     let interval1 = setInterval(function () {
//       days.innerText = 0;
//       hours.innerText = 0;
//       mins.innerText = 0;
//       secs.innerText = 0;

//       clearInterval(interval1);
//     }, 0);
//   }
// }

// const timer = new Timer(timerDefault);

// timer.displayTimer();
// timer.changeTime(timer.finishedTimer);

//version 2: with usage module Date();
class Timer {
  constructor(timerInfo) {
    let { days, hours, mins, secs } = timerInfo;
    this.days = days;
    this.hours = hours;
    this.mins = mins;
    this.secs = secs;
  }

  displayTimer() {
    let { days, hours, mins, secs } = refsChange;

    days.innerText = this.days;
    hours.innerText = this.hours;
    mins.innerText = this.mins;
    secs.innerText = this.secs;
  }

  getTimeStampNextDate() {
    let { days, hours, mins, secs } = timerDefault;

    let daysStemp = days * 1000 * 60 * 60 * 24;
    let hoursStemp = hours * 1000 * 60 * 60;
    let minsStemp = mins * 1000 * 60;
    let secsStemp = secs * 1000;
    let fullTimeStemp = daysStemp + hoursStemp + minsStemp + secsStemp;
    let currDate = Date.now();
    let nextDate = currDate + fullTimeStemp;

    return nextDate;
  }

  createTimerInfo(nextDate, finishedTimer) {
    let { days, hours, mins, secs } = refsChange;

    let dateNext = nextDate();

    let interval = setInterval(function () {
      let currDate = Date.now();
      let distance = dateNext - currDate;

      let daysCalculate = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hoursCalculate = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutesCalculate = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      if (distance < 0) {
        finishedTimer();
        clearInterval(interval);
      }

      let secondsCalculate = Math.floor((distance % (1000 * 60)) / 1000);

      days.innerText = daysCalculate;
      hours.innerText = hoursCalculate;
      mins.innerText = minutesCalculate;
      secs.innerText = secondsCalculate;
    }, 1000);
  }

  finishTimer() {
    let { days, hours, mins, secs } = refsChange;
    setTimeout(function () {
      days.innerText = "0";
      hours.innerText = "0";
      mins.innerText = "0";
      secs.innerText = "0";
    }, 0);
  }
}

const timer = new Timer(timerDefault);

timer.displayTimer();
timer.createTimerInfo(timer.getTimeStampNextDate, timer.finishTimer);
