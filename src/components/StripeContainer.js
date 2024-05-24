import React from 'react';

const StripeContainer = ({ totalItems }) => {
    return (
        <div className="stripe-container">
            {totalItems} {totalItems === 1 ? 'товар' : 'товара'} в корзине
        </div>
    );
};

export default StripeContainer;