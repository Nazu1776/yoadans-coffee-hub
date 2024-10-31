import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Price: {product.price} Birr</p>
        </div>
    );
};

export default ProductItem;

