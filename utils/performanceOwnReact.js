/* eslint-disable no-console */
const { performance } = window;

const performanceOwnReact = {
  disabled: false,

  start(name) {
    performance.mark(`${name} start`);
  },

  end(name) {
    performance.mark(`${name} end`);
  },

  measure(name) {
    if (this.disabled) return false;
    const { duration } = performance.measure(
      `${name} measure`,
      `${name} start`,
      `${name} end`
    );

    // запись ститастики по времени обновлений
    this.statistics.summaryTime[name] = this.statistics.summaryTime[name]
      ? this.statistics.summaryTime[name] + duration
      : duration;

    return duration;
  },

  print() {
    console.info("summary time: ", this.statistics.summaryTime);
  },

  clear() {
    this.statistics = {
      summaryTime: {}
    };
  },

  startTracking() {
    this.disabled = false;
  },

  stopTracking() {
    this.disabled = true;
  },

  statistics: {
    summaryTime: {}
  }
};

window.performanceOwnReact =
  process.env.NODE_ENV !== "production" ? {} : performanceOwnReact;

export default performanceOwnReact;
