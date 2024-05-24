import React from 'react';
import './ComingTours.css';

const ComingToursCard = ({ backgroundUrl, imageUrl, title, meta, date, author, authorRole }) => (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: `url(${backgroundUrl})`  }}>
        <img className="card-img d-none" src={imageUrl} alt={title} />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">{meta}</small>
            <h4 className="card-title mt-0">
              <a className="text-dark" href="\">{title}</a>
            </h4>
            <small className='far-date'><i className="far fa-clock"></i> {date}</small>
          </div>
          <div className="card-footer">
            <div className="media">
              <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder img" style={{ maxWidth: '50px' }} />
              <div className="media-body">
                <h6 className="my-0 text-dark d-block">{author}</h6>
                <small className='authorRole'>{authorRole}</small>
              </div>
              <button className='coming-tours-button'>
                <span className='tours-button'>ПОДРОБНЕЕ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default ComingToursCard;