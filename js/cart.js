let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");

function loadCart() {
  if (cart.length === 0) {
    container.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, index) => {
    total += item.price;

    return `
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  }).join("");

  totalDiv.innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();
