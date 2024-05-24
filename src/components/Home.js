import React from 'react';
import productsData from './ProductsData';
import ProductsCard from './ProductsCard';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;