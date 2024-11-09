let search = document.querySelector('.searchbar');
document.querySelector('#search').onclick = () => {
    search.classList.toggle("active");
    favorite.classList.remove('active');
    cheakout.classList.remove('active');
    login.classList.remove('active');
}

let favorite = document.querySelector('.favorite');
document.querySelector('#favorite').onclick = () => {
    favorite.classList.toggle("active");
    search.classList.remove('active');
    cheakout.classList.remove('active');
    login.classList.remove('active');
}

let cheakout = document.querySelector('.cheakout');
document.querySelector('#cheakout').onclick = () => {
    cheakout.classList.toggle("active");
    search.classList.remove('active');
    favorite.classList.remove('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login');
document.querySelector('#login').onclick = () => {
    login.classList.toggle("active");
    search.classList.remove('active');
    favorite.classList.remove('active');
    cheakout.classList.remove('active');
}

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemIndex = cart.findIndex(item => item.productName === productName);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ productName, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to the cart.`);
    
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cartItems');
    
    if (!cartItemsDiv) return;
    
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h3>${item.productName}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}

if (window.location.pathname.includes('cart.html')) {
    document.addEventListener("DOMContentLoaded", displayCart);
}
