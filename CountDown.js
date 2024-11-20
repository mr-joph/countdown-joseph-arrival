import mustache from "mustache";
import markup from "./count-down.html?raw";

const copy = {
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
};

class CountDown extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  updateTime(counting) {
    this.render(counting);
  }

  parseProps(props) {
    return Object.keys(props).reduce((acc, key) => {
      acc.push({ type: copy[key], time: this.parseCounterTime(props[key]) });
      return acc;
    }, []);
  }

  parseCounterTime(time) {
    return String(time).padStart(2, "0");
  }

  render(props) {
    const iterableProps = { counters: this.parseProps(props) };
    this.shadow.innerHTML = mustache.render(markup, iterableProps);
  }
}

window.customElements.define("count-down", CountDown);
export default CountDown;
