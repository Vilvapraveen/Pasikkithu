const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Shoes", price: 1500 },
  { id: 3, name: "Watch", price: 2000 },
  { id: 4, name: "Bag", price: 800 }
];

function loadProducts() {
  const container = document.getElementById("products");

  container.innerHTML = products.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id) {
  alert("Added product " + id);
}

loadProducts();



function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}
