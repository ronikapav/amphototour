/*import React, { useEffect } from 'react';
import ProductsCard from './ProductsCard ';
import "./Products.css";

const ProductsSection = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.hover');
        elements.forEach(element => {
          element.addEventListener('mouseleave', function() {
            element.classList.remove('hover');
          });
        });
    
        return () => {
          elements.forEach(element => {
            element.removeEventListener('mouseleave', function() {
              element.classList.remove('hover');
            });
          });
        };
      }, []);
    return (
      <div className='products-container'>
      <span className="products-title">ЧТО ВЫ МОЖЕТЕ 
        <svg xmlns="\" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="products-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="workshop-title">СДЕЛАТЬ ВАШИ ФОТОГРАФИИ ЛУЧШЕ УЖЕ СЕЙЧАС</h1>
      <div className='product-card'>
        <ProductsCard
          // color="green"
          imgSrc="https://images.pexels.com/photos/10297472/pexels-photo-10297472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="СЪЕМКА В ПЕЩЕРАХ"
          description="на примере съемок в Мурадымовской пещере на Урале"
        />
        <ProductsCard
          // color="blue hover"
          imgSrc="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="МОРСКОЙ ПЕЙЗАЖ"
          description="на примере съемок штормового моря на полюсе недоступности Курильских островов"
        />
        <ProductsCard
          // color="orange"
          imgSrc="https://images.unsplash.com/photo-1618342336667-9ed677ab6715?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="КЛАССИЧЕСКИЙ ПЕЙЗАЖ"
          description="на примере рассвета у Ключевской сопки на Камчатке"
        />
        </div>
      </div>
    );
  };

  export default ProductsSection;*/

import React from 'react';
import ProductsCard from "./ProductsCard ";
import {ProductsData} from "./ProductsData";



const ProductsSection = () => {


    return <div>
      <div id="products-section" className='products-container'>
      <span className="products-title">ЧТО ВЫ МОЖЕТЕ 
        <svg xmlns="\" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="products-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="workshop-title">СДЕЛАТЬ ВАШИ ФОТОГРАФИИ ЛУЧШЕ УЖЕ СЕЙЧАС</h1>
      <div className='product-card'>
      {ProductsData.map((item) => (
      <ProductsCard key={item.id} {...item} />
      ))
      }
        </div>
        </div>
    </div>
}

export default ProductsSection;