import React from 'react';
import ProductItem from './ProductItem';

const products = [
    { id: 1, name: 'Cappuccino', price: 100.00 },
    { id: 2, name: 'Macchiato', price: 80.00 },
    { id: 3, name: 'Cafe Latte', price: 100.00 },
    { id: 4, name: 'Tea', price: 50.00 },
    { id: 5, name: 'Espresso Roast', price: 120.00 },
    { id: 6, name: 'Organic Coffee Beans', price: 150.00 },
    { id: 7, name: 'Premium Coffee Blend', price: 170.00 },
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>Our Products</h2>
            <div className="products">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

