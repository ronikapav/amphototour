import React from "react";
import ProductsCard from "./ProductsCard ";
import { ProductsData } from "./ProductsData";

const ProductsSection = () => {
  return (
    <div>
      <div id="products-section" className="products-container">
        <span className="products-title">
          ЧТО ВЫ МОЖЕТЕ
          <svg
            xmlns="\"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="products-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <h1 className="workshop-title">
          СДЕЛАТЬ ВАШИ ФОТОГРАФИИ ЛУЧШЕ УЖЕ СЕЙЧАС
        </h1>
        <div className="product-card">
          {ProductsData.map((item) => (
            <ProductsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;