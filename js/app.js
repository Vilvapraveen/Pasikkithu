function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(product.name + " added to cart");
}


function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("count").innerText = cart.length;
}

updateCartCount();
