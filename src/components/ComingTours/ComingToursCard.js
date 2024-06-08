import React from 'react';
import "./ComingTours.css";
import guide from "../../assets/guide.png";

const ComingToursCard = ({
  backgroundUrl,
  imageUrl,
  title,
  meta,
  date,
  author,
  authorRole,
  timer,
}) => {

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card text-dark card-has-bg click-col"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <img className="card-img d-none" src={imageUrl} alt={title} />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">{meta}</small>
            <h4 className="card-title mt-0">
              <a className="text-dark" href="/">
                {title}
              </a>
            </h4>
            <small className="far-date">
              <i className="far fa-lock"></i> {date}
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <img
                className="mr-3 rounded-circle"
                src={guide}
                alt="Общий заполнитель img"
                style={{ maxWidth: "50px" }}
              />
              <div className="media-body">
                <h6 className="my-0 text-dark d-block">{author}</h6>
              </div>
            </div>
            <div className='timer_tours'>
            <p className='timer_text'>До начала тура:</p>
            <span className='timer'>{timer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingToursCard;
