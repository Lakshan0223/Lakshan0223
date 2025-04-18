// Enhanced Cart System
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if(existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    showCartNotification(productName);
}

// Cart Counter Update
function updateCartCounter() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelector('.cart-counter').textContent = count;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateCartCounter);