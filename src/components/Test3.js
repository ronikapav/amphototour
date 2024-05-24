import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Test3.css';

const reviews = [
    {
        id: 1,
        name: "@darryncodes",
        job: "Front-end developer",
        img: "https://www.darryncodes.co.uk/img/darryncodes-profile.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."
    },
    {
        id: 2,
        name: "@annajohnson",
        job: "UI Designer",
        img: "https://randomuser.me/api/portraits/women/90.jpg",
        text: "Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet."
    },
    {
        id: 3,
        name: "@peterjones",
        job: "Intern",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."
    },
    {
        id: 4,
        name: "@billanderson",
        job: "UX Designer",
        img: "https://randomuser.me/api/portraits/men/67.jpg",
        text: "Curabitur turpis felis, pellentesque feugiat tristique sit amet, vestibulum eu turpis. Sed commodo nulla quis metus consequat imperdiet. Aenean at elit dui. Donec sagittis ultricies."
    }
];

const TestimonialCarousel = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const imgRef = useRef(null);
    const testimonialRef = useRef(null);
    const nameRef = useRef(null);
    const jobRef = useRef(null);

    const showPerson = useCallback(() => {
        const item = reviews[currentItem];
        imgRef.current.src = item.img;
        testimonialRef.current.textContent = item.text;
        nameRef.current.textContent = item.name;
        jobRef.current.textContent = item.job;
    }, [currentItem]);

    useEffect(() => {
        showPerson();
    }, [showPerson]);

    const handleRightClick = () => {
        setCurrentItem(currentItem + 1);
        if (currentItem + 1 > reviews.length - 1) {
            setCurrentItem(0);
        }
    };

    const handleLeftClick = () => {
        setCurrentItem(currentItem - 1);
        if (currentItem - 1 < 0) {
            setCurrentItem(reviews.length - 1);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel__img-container">
                <img src={reviews[currentItem].img} alt="" className="carousel__image" ref={imgRef} />
            </div>
            <blockquote className="testimonial">
                <p className="testimonial__text" ref={testimonialRef}>{reviews[currentItem].text}</p>
                <p className="testimonial__name" ref={nameRef}>{reviews[currentItem].name}</p>
                <p className="testimonial__job" ref={jobRef}>{reviews[currentItem].job}</p>
            </blockquote>
            <button className="carousel__btn carousel__btn--left" onClick={handleLeftClick}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="carousel__btn carousel__btn--right" onClick={handleRightClick}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    );
};

export default TestimonialCarousel;