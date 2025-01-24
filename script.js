// List of Products
const products = [
  { name: 'Coffee', price: 120, imgSrc: 'coffee.jpg' },
  { name: 'Tea', price: 100, imgSrc: 'tea.jpg' },
  { name: 'Cappuccino', price: 150, imgSrc: 'cappuccino.jpg' },
  { name: 'Milk', price: 80, imgSrc: 'milk.jpg' },
  { name: 'Macchiato', price: 180, imgSrc: 'macchiato.jpg' },
  { name: 'Espresso', price: 130, imgSrc: 'espresso.jpg' },
  { name: 'Herbal Tea', price: 110, imgSrc: 'herbal_tea.jpg' },
  { name: 'Iced Coffee', price: 160, imgSrc: 'iced_coffee.jpg' },
  { name: 'Black Coffee', price: 120, imgSrc: 'black_coffee.jpg' },
  { name: 'Latte', price: 140, imgSrc: 'latte.jpg' },
  { name: 'Mocha', price: 170, imgSrc: 'mocha.jpg' },
  { name: 'Green Tea', price: 130, imgSrc: 'green_tea.jpg' },
  { name: 'Chai Latte', price: 160, imgSrc: 'chai_latte.jpg' },
  { name: 'Iced Tea', price: 90, imgSrc: 'iced_tea.jpg' },
  { name: 'Affogato', price: 200, imgSrc: 'affogato.jpg' }
];

// Function to display products
function displayProducts() {
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = ''; // Clear any existing content

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <img src="${product.imgSrc}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">ETB ${product.price}</p>
      <button>Add to Cart</button>
    `;

    productContainer.appendChild(productElement);
  });
}

// Call the function to display the products
displayProducts();

