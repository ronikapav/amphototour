import React, { useState, useEffect } from "react";
import "./TimerTours.css";

const AfricaTours = () => {
  const [timer, setTimer] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const newDate = new Date('06-20-2024 00:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().getTime();
      const diff = newDate - date;

      if (diff <= 0) {
        clearInterval(interval);
        setTimer({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
      const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimer({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [newDate]);

  return (
    <div className="countdown">
      <div>
        <span className="number_timer months">{timer.months < 10 ? `0${timer.months}` : timer.months}</span>
        <span className="text_timer">мес</span>
      </div>
      <div>
        <span className="number_timer days">{timer.days < 10 ? `0${timer.days}` : timer.days}</span>
        <span className="text_timer">день</span>
      </div>
      <div>
        <span className="number_timer hours">{timer.hours < 10 ? `0${timer.hours}` : timer.hours}</span>
        <span className="text_timer">час</span>
      </div>
      <div>
        <span className="number_timer minutes">{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}</span>
        <span className="text_timer">мин</span>
      </div>
      <div>
        <span className="number_timer seconds">{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</span>
        <span className="text_timer">сек</span>
      </div>
    </div>
  );
};

export default AfricaTours;