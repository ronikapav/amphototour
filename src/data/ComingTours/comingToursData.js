import AfricaTours from "../../services/TimerTours/AfricaTours";
import AlgeriaTours from "../../services/TimerTours/AlgeriaTours";
import IndonesiaTours from "../../services/TimerTours/IndonesiaTours";

export const comingToursData = [
    {
      backgroundUrl: require('../../assets/south-africa.png'),
      imageUrl: require('../../assets/south-africa.png'),
      title: 'ЮАР',
      meta: 'Тайны двух океанов',
      date: '20 - 28 июня 2024 года',
      author: 'Алекс Морозов',
      authorRole: 'Гид',
      timer: <AfricaTours />,
    },
    {
      backgroundUrl: require('../../assets/indonesia.png'),
      imageUrl: require('../../assets/indonesia.png'),
      title: 'ИНДОНЕЗИЯ',
      meta: 'Семь островов',
      date: '3 - 13 сентября 2024 года',
      author: 'Алекс Морозов',
      authorRole: 'Гид',
      timer: <IndonesiaTours />,
    },
    {
      backgroundUrl: require('../../assets/algeria.png'),
      imageUrl: require('../../assets/algeria.png'),
      title: 'АЛЖИР',
      meta: 'Дюны Сахары',
      date: '15 - 22 декабря 2024 года',
      author: 'Алекс Морозов',
      authorRole: 'Гид',
      timer: <AlgeriaTours />,
    },
  ];