import "./style.css";
import "./CountDown";

const ARRIVE_DATE = new Date("Sat Nov 30 2024 22:00:00 GMT-0500");
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

/**
 *
 * @param {*} type
 * @param {*} amount
 */
function remainTime(type, amount) {
  return Math.floor(amount / type);
}

/**
 *
 * @param {*} dates
 */
function logPrint(dates) {
  let outputPrint = "";
  for (const key in dates) {
    outputPrint += `${key}: ${dates[key]} `;
  }
  console.log(outputPrint);
}

/**
 *
 * @returns
 */
function countdown(timeDiff) {
  const diff = {
    days: remainTime(DAY, timeDiff),
    hours: remainTime(HOUR, timeDiff % DAY),
    minutes: remainTime(MINUTE, timeDiff % HOUR),
    seconds: remainTime(SECOND, timeDiff % MINUTE),
  };

  return diff;
}

/**
 *
 * @param {*} timeLeft
 * @returns
 */
function stillCounting(timeLeft) {
  return timeLeft >= 0;
}

/**
 *
 * @returns
 */
function getTimeLeft() {
  const today = new Date();
  return ARRIVE_DATE - today;
}

window.onload = () => {
  //entrypoint
  const countdownEle = document.querySelector("count-down");

  const loop = setInterval(() => {
    const timeLeft = getTimeLeft();

    if (stillCounting(timeLeft)) {
      const amounts = countdown(timeLeft);

      //console.clear();
      logPrint(amounts);

      // update UI
      countdownEle.updateTime(amounts);
    } else {
      console.log("event already occurred");
      clearInterval(loop);
    }
  }, SECOND);
};
