/*
function secondsSince(date, containerSelector) {
  const timeContainers = document.querySelectorAll(containerSelector);
  const BIRTH_DAY = "9-29-2022";
  const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  function display() {
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    timeContainers.forEach((i) => {
      i.innerText = intlNumberFormatter.format(difference);
    });
  }
  display();
  setInterval(display, 1000);
}

secondsSince("9-29-2022", ".programming-seconds");

function monthsSince(date, containerSelector) {
  const timeContainers = document.querySelectorAll(containerSelector);
  const BIRTH_DAY = "9-29-2022";
  const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  function display() {
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000 / 60 / 60 / 24 / 30
    );

    timeContainers.forEach((i) => {
      i.innerText = intlNumberFormatter.format(difference);
    });
  }
  display();
  setInterval(display, 1000 * 60 * 60);
}

monthsSince("9-29-2022", ".programming-months");

function yearsSince(date, containerSelector) {
  const timeContainers = document.querySelectorAll(containerSelector);
  const BIRTH_DAY = "9-29-2022";
  const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  function display() {
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000 / 60 / 60 / 24 / 365
    );

    timeContainers.forEach((i) => {
      i.innerText = intlNumberFormatter.format(difference);
    });
  }
  display();
  setInterval(display, 1000 * 60 * 60);
}

monthsSince("9-29-2022", ".programming-years");
*/

function displayText(text, selector) {
  const containers = document.querySelectorAll(selector);
  containers.forEach((i) => {
    i.innerText = text;
  });
}


const timeSince = {
  _day: "9-29-2022",
  get day() {
    return _day;
  },
  set day(arg) {
    if (typeof arg === "string") {
      day = arg;
    }
  },
  time(measurement = (i) => i) {
    const date = new Date(this._day);
    const now = new Date();
    const difference = measurement(now.getTime() - date.getTime());
    return difference
  },
  milliseconds() {
    return Math.floor(this.time());
  },
  seconds() {
    return Math.floor(this.time((i) => {
      return i / 1000
    }));
  },
  minutes() {
    return Math.floor(this.time((i) => {
      return i / 1000 / 60
    }));
  },
  hours() {
    return Math.floor(this.time((i) => {
      return i / 1000 / 60 / 60
    }));
  },
  days() {
    return Math.floor(this.time((i) => {
      return i / 1000 / 60 / 60 / 24
    }));
  },
  months() {
    return Math.floor(this.time((i) => {
      return i / 1000 / 60 / 60 / 24 / 30
    }));
  },
  years() {
    return Math.floor(this.time((i) => {
      return i / 1000 / 60 / 60 / 24 / 365
    }));
  }
}

function formatNum(num, digitLength) {
  if (`${num}`.length > digitLength) {
    let digit = 1;
    for (let i = digitLength; i > 0; i--) {
      digit *= 10;
    }
    num %= digit;
  }
  num = `${num}`;
  while (num.length != digitLength) {
    num = `0${num}`;
  }
  return num;
}

function display() {
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  let milliseconds = formatNum(timeSince.milliseconds(), 3);
  let seconds = intlNumberFormatter.format(timeSince.seconds());
  displayText(`${seconds}.${milliseconds}`, ".programming-seconds")

  let months = timeSince.months();
  displayText(`${months}`, ".programming-months")

  let years = timeSince.years();
  displayText(`${years}`, ".programming-years")

}

display();
setInterval(display, 1);