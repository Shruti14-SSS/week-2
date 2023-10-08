let cart = [];
let total = 0;

function addToCart() {
    const productName = "Birthday Gift Hamper"; // Replace with actual product name
    const price = 20; // Replace with actual product price

    cart.push({ name: productName, price: price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function viewCart() {
    alert("You will be navigated to your cart page");
}