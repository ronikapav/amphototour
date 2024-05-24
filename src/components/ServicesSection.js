import React from 'react';
import './Services.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <span className="favors-title">ЧТО Я ПРЕДЛАГАЮ 
        <svg xmlns="\" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="favors-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="services-title">ОТКРЫТЬ НОВЫЕ ГОРИЗОНТЫ КОМФОРТА И УЮТА В ПУТЕШЕСТВИИ!</h1>
  <div className="grid-offer grid-offer-styles">
    <div className="services-card favors-card">
      <div className="services-circle"></div>
      <div className="services-card-content services-card-left">
        <div className="services-header">
        <h2 className="services-card-title">Избранные места</h2>
        </div>
        <p className="services-card-description">Я тщательно подбираю впечатляющие места для путешествий, проверяю их на себе, чтобы показать Вам самые фотогеничные места на планете!</p>
      </div>
      {/* <div className="icon"></div> */}
    </div>
    <div className="services-card favors-card">
      <div className="services-circle"></div>
      <div className="services-card-content services-card-right">
      <div className="services-header">
      <h2 className="services-card-title">Комфортные условия</h2>
      </div>
        <p className="services-card-description">Я выбираю лучшие варианты размещения для путешествий: дома и отели с уютом и стилем, чтобы ваш отдых был комфортным и незабываемым!</p>
      </div>
    </div>
    <div className="services-card favors-card">
      <div className="services-circle"></div>
      <div className="services-card-content services-card-left">
      <div className="services-header">
      <h2 className="services-card-title">Удобная логистика</h2>
      </div>
        <p className="services-card-description">Я организую логичный и удобный порядок посещения мест, чтобы каждое из них вызывало восхищение в самое наилучшее время суток!</p>
      </div>
    </div>
    <div className="services-card favors-card">
      <div className="services-circle"></div>
      <div className="services-card-content services-card-right">
      <div className="services-header">
      <h2 className="services-card-title">Маленькие группы</h2>
      </div>
        <p className="services-card-description">Группы до 8 человек, где Вы общаетесь с увлеченными и творческими людьми, наполняясь положительными эмоциями и вдохновением!</p>
      </div>
    </div>
  </div>
</section>
    //   <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1>
    //   <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
    //     <div className="card bg-gray-800 p-10 relative">
    //       <div className="circle"></div>
    //       <div className="relative lg:pr-52">
    //         <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">UI/UX <br /> creative design</h2>
    //         <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
    //       </div>
    //       <div className="icon"></div>
    //     </div>
    //     <div className="card bg-gray-800 p-10 relative">
    //       <div className="circle"></div>
    //       <div className="relative lg:pl-48">
    //         <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">visual <br /> graphic design</h2>
    //         <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
    //       </div>
    //     </div>
    //     <div className="card bg-gray-800 p-10 relative">
    //       <div className="circle"></div>
    //       <div className="relative lg:pr-44">
    //         <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">strategy & <br /> digital marketing</h2>
    //         <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
    //       </div>
    //     </div>
    //     <div className="card bg-gray-800 p-10 relative">
    //       <div className="circle"></div>
    //       <div className="relative lg:pl-48">
    //         <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">effective<br /> business growth</h2>
    //         <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default ServicesSection;