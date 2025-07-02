let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalSpan = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - $${item.price.toFixed(2)};
    cartList.appendChild(li);
    total += item.price;
  });
  totalSpan.textContent = total.toFixed(2);
}