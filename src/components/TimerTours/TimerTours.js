import React from 'react';
import "./TimerTours.css";

const TimerTours = ({ timer }) => {
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

export default TimerTours;