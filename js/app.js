// State Management
const state = {
    cart: [],
    menu: [
        { id: 1, name: 'Biryani', price: 180 },
        { id: 2, name: 'Parotta', price: 40 }
    ]
};

// Function to add to cart
function addToCart(productId) {
    const item = state.menu.find(p => p.id === productId);
    state.cart.push(item);
    updateUI();
}

// Update Cart Count UI
function updateUI() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = state.cart.length;
    
    // Add a simple animation when updated
    cartCount.classList.add('bump');
    setTimeout(() => cartCount.classList.remove('bump'), 300);
}
