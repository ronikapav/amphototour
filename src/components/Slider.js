import React, { useState } from 'react';
import SliderImage from './SliderImage';

function Slider() {
  const SliderImages = [
    { image: 'https://optim.tildacdn.com/tild6633-6338-4939-a463-353561396430/-/format/webp/3UTsrF3Qshs_copy.jpg' },
    { image: 'https://optim.tildacdn.com/tild6562-6662-4361-a436-663030313433/-/format/webp/IMG-20180827-WA0003.jpg' },
    { image: 'https://optim.tildacdn.com/tild3036-6164-4534-b237-663237643236/-/format/webp/b7tBiqH_6Dg.jpg' }
  ];

  const [person, setPerson] = useState(0);
  const { image } = SliderImages[person];

  const previousPerson = () => {
    setPerson((person) => {
      person--;
      if (person < 0) {
        return SliderImages.length - 1;
      }
      return person;
    });
  };

  const nextPerson = () => {
    setPerson((person) => {
      person++;
      if (person > SliderImages.length - 1) {
        person = 0;
      }
      return person;
    });
  };

  return (
    <SliderImage
      image={image}
      previousPerson={previousPerson}
      nextPerson={nextPerson}
    />
  );
}

export default Slider;
