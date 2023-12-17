import React, { useEffect, useState } from "react";
import "./time.css";

const Time = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [period, setPeriod] = useState("AM");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      let dt = new Date();
      let hrs = dt.getHours();
      let min = dt.getMinutes();
      let sec = dt.getSeconds();

      min = startTicking(min);
      sec = startTicking(sec);

      setTime({
        hours: hrs,
        minutes: min,
        seconds: sec,
      });

      setDate(dt.toDateString());

      setPeriod(hrs >= 12 ? "PM" : "AM");
    };

    const startTicking = (val) => {
      if (val < 10) {
        val = "0" + val;
      }
      return val;
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="timer">
      <div className="clock">
        {time.hours}:{time.minutes}:{time.seconds} {period}
      </div>
      <div id="day_year">{date}</div>
    </div>
  );
};

export default Time;
