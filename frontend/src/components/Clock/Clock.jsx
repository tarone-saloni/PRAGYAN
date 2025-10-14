/* filepath: /home/aditya-raut/Desktop/Spark/pragyaa/frontend/src/components/Clock/Clock.jsx */
import React from "react";
import Countdown from "react-countdown";
import "./Clock.css";

function Clock() {
  // Custom renderer for countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="countdown-timer">EVENT STARTED!</span>;
    } else {
      return (
        <span className="countdown-timer">
          {String(days).padStart(2, '0')} : {String(hours).padStart(2, '0')} : {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
        </span>
      );
    }
  };

  return (
    <div className="clock-container">
      {/* Countdown Timer */}
      <div className="countdown-box">
        {/* Corner decorations */}
        <div className="corner-tl"></div>
        <div className="corner-tr"></div>
        <div className="corner-bl"></div>
        <div className="corner-br"></div>

        <Countdown
          date={new Date("2026-02-22T00:00:00")}
          renderer={renderer}
        />

        <div className="time-labels">
          <span className="label-day">DAYS</span>
          <span className="label-hours">HOURS</span>
          <span className="label-minutes">MINUTES</span>
          <span className="label-seconds">SECONDS</span>
        </div>

        {/* Mobile: Dates below the clock */}
        <div className="dates-mobile">
          <div className="date-numbers">
            21<b>ST</b> - 22<b>ND</b> - 23<b>RD</b>
          </div>
          <div className="date-year">
            FEBRUARY <span>2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;