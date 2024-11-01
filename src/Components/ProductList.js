import React from 'react';
import './ProductList.css';

const products = [
  { name: 'Cappuccino', price: '100.00 Birr', image: '/images/cappuccino.jpg' },
  { name: 'Macchiato', price: '80.00 Birr', image: '/images/macchiato.jpg' },
  { name: 'Cafe Latte', price: '100.00 Birr', image: '/images/cafe-latte.jpg' },
  { name: 'Tea', price: '50.00 Birr', image: '/images/tea.jpg' },
  { name: 'Espresso Roast', price: '120.00 Birr', image: '/images/espresso.jpg' },
  { name: 'Organic Coffee Beans', price: '150.00 Birr', image: '/images/organic-beans.jpg' },
  { name: 'Premium Coffee Blend', price: '170.00 Birr', image: '/images/premium-blend.jpg' },
];

function ProductList() {
  return (
    <section className="product-list">
      <h3>Our Menu</h3>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;

