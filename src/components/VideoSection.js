import React from 'react';
import './Video.css';
import video from '../assets/video.mp4';

const VideoSection = () => {
  return (
    <section id="video-section" className="fullsize-video-bg">
      <div className="frame"></div>
      <span className='moving-line'></span>
      <div className="video-excerpt video-card">
        <header className="video-header">
          <h2 className='video-h1'>Я ХОЧУ ПОДЕЛИТЬСЯ С ВАМИ СВОЕЙ СТРАСТЬЮ К ПЕЙЗАЖАМ И ПУТЕШЕСТВИЯМ</h2>
        </header>
        <p className='video-p'>
          На этом сайте вы можете получить знания на моих мастер-классах, где я покажу вам самые интересные и эффективные авторские приемы съемки и обработки пейзажных фотографий.
          Также вы можете присоединиться к моим фототурам, в которых я провожу большую часть года вот уже 10 лет.
          <span className="video-hidden">
            Вас ждут захватывающие и живописные места: от классических экспедиций по Алтаю и Курилам до экзотических приключений в Индии и величественных горных районов Китая.
          </span>
        </p>
      </div>
      <div id="video-viewport">
        <video width="1920" height="1280" autoPlay muted loop="loop" preload="auto">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;