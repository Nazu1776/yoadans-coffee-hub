import logo from './logo.svg';
import React from 'react';
import './styles.css';

const products = [
  { name: "Cappuccino", price: "100.00 Birr" },
  { name: "Macchiato", price: "80.00 Birr" },
  { name: "Cafe Latte", price: "100.00 Birr" },
  { name: "Tea", price: "50.00 Birr" },
  { name: "Espresso Roast", price: "120.00 Birr" },
  { name: "Organic Coffee Beans", price: "150.00 Birr" },
  { name: "Premium Coffee Blend", price: "170.00 Birr" },
];

function App() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to YOADAN's Coffee Hub</h1>
        <p>Your destination for premium coffee and more!</p>
      </header>
      <section className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;

