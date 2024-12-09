const recommendedProducts = [
    [
        { id: 1, name: "Johnson's Baby Oil", price: 425, offerPercentage: 5, quantity: "500 ml", imgUrl: "https://i.imgur.com/0LKWxiJ.jpg" },
        { id: 2, name: "Little's Baby Wipes", price: 95, offerPercentage: 10, quantity: "80 Wipes", imgUrl: "https://i.imgur.com/6rlktPI.jpg" },
    ],
    [
        { id: 1, name: "Apple", price: 100, offerPercentage: 4, quantity: "1 KG", imgUrl: "https://i.imgur.com/vUJ2JKU.png" },
        { id: 5, name: "Oranges", price: 80, offerPercentage: 10, quantity: "1 KG", imgUrl: "https://i.imgur.com/5nFAIJ8.jpg" },
    ],
    [
        { id: 3, name: "Onion", price: 50, offerPercentage: 10, quantity: "1 KG", imgUrl: "https://i.imgur.com/sGLggWL.jpg" },
        { id: 6, name: "Tomato", price: 80, offerPercentage: 7, quantity: "1 KG", imgUrl: "https://i.imgur.com/8l5hDhS.png" },
    ],
    [
        { id: 1, name: "Kangaroo Stapler No.-10", price: 210, offerPercentage: 2, quantity: "5", imgUrl: "https://i.imgur.com/mZtkksq.jpg" },
        { id: 6, name: "Kangaroo Stapler Pins No.-10", price: 237, offerPercentage: 5, quantity: "Pack of 5", imgUrl: "https://i.imgur.com/BZfAFQm.jpg" }
    ],
    [
        { id: 10, name: "Scotch Tape", price: 75, offerPercentage: 10, quantity: "1 Roll", imgUrl: "https://in.element14.com/productimages/large/en_GB/TL22405-40.jpg" },
        { id: 11, name: "Desk Organizer", price: 499, offerPercentage: 5, quantity: "1", imgUrl: "https://www.uniseoul.in/cdn/shop/files/72.jpg?v=1726074335" },
        { id: 12, name: "Whiteboard Markers", price: 280, offerPercentage: 6, quantity: "Pack of 6", imgUrl: "https://www.jiomart.com/images/product/original/rvebwty3u4/soni-office-mate-whiteboard-markers-in-blister-pack-of-4-multicolor-product-images-orvebwty3u4-p606022218-0-202311071804.jpg?im=Resize=(420,420)" }
    ],
    [
        { id: 10, name: "Neutrogena Hydro Boost Water Gel", price: 899, offerPercentage: 8, quantity: "50 g", imgUrl: "https://assets.ajio.com/medias/sys_master/root/20240724/QJqG/66a0d9926f60443f31a46d52/-1117Wx1400H-4929249060-multicolor-MODEL.jpg" },
        { id: 11, name: "Bioderma Sensibio H2O Micellar Water", price: 650, offerPercentage: 5, quantity: "250 ml", imgUrl: "https://m.media-amazon.com/images/I/51h69lpwKlL.jpg" },
        { id: 12, name: "Himalaya Herbal Face Pack", price: 135, offerPercentage: 12, quantity: "100 g", imgUrl: "https://m.media-amazon.com/images/I/61fOQ8mVTaL.jpg" },
    ]
];


// Function to generate a shareable cart link
function generateCartLink() {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
if (cart.length === 0) {
alert('Your cart is empty! Add items to your cart before sharing.');
return '';
}

// Generate a simple cart link by encoding the cart data in the URL (you can modify this logic)
const cartData = encodeURIComponent(JSON.stringify(cart)); // Convert cart to a string and encode
const link = `${window.location.href}?cart=${cartData}`;

return link;
}

// Copy the cart link to the clipboard when the "Copy Cart Link" button is clicked
document.getElementById('link-copy').addEventListener('click', event => {
event.preventDefault(); // Prevent the default anchor behavior (navigation)

const link = generateCartLink();
if (link) {
// Copy the generated link to the clipboard
navigator.clipboard.writeText(link).then(() => {
    alert('Cart link copied to clipboard!');
}).catch(err => {
    alert('Failed to copy link: ' + err);
});
}
});

let storedBudget = 0;
let totalPrice = 0;

function calculateDiscountedPrice(originalPrice, offerPercentage) {
    const discount = (originalPrice * offerPercentage) / 100;
    return originalPrice - discount;
}

async function updateCart() {
    totalPrice = 0;
    let totalItems = 0;
    let totalSavings = 0;

    document.querySelectorAll('.product').forEach(product => {
        const originalPrice = parseFloat(product.getAttribute('data-original-price'));
        const offerPercentage = parseFloat(product.getAttribute('data-offer'));
        const quantity = parseInt(product.querySelector('.product-quantity input').value);

        const discountedPrice = calculateDiscountedPrice(originalPrice, offerPercentage);

        totalPrice += discountedPrice * quantity;
        totalItems += quantity;
        totalSavings += (originalPrice - discountedPrice) * quantity;
    });

    document.getElementById('total-price').innerText = `Rs. ${totalPrice.toFixed(2)}`;
    document.getElementById('total-items').innerText = totalItems;
    document.getElementById('total-savings').innerText = `Rs. ${totalSavings.toFixed(2)}`;

    const checkoutLink = document.getElementById('checkout-link');
    checkoutLink.style.pointerEvents = totalItems > 0 ? 'auto' : 'none';
    checkoutLink.style.opacity = totalItems > 0 ? '1' : '0.5';

    const budgetCheckbox = document.getElementById('budget-checkbox');
    const alertBox = document.getElementById('alert');
    if (budgetCheckbox.checked) {
        const budget = await parseFloat(localStorage.getItem('budget')) || 0;
        if (totalPrice > budget) {
            alertBox.style.display = 'block';
        } else {
            alertBox.style.display = 'none';
        }
    } else {
        alertBox.style.display = 'none';
    }
}

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    if (cart.length === 0) {
        productsContainer.innerHTML = '<p>Your cart is empty. Start shopping!</p>';
        updateCart();
        return;
    }

    cart.forEach(product => {
        const discountedPrice = calculateDiscountedPrice(product.price, product.offerPercentage);

        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.setAttribute('data-original-price', product.price);
        productElement.setAttribute('data-offer', product.offerPercentage);
        productElement.innerHTML = `
            <img src="${product.imgUrl}" alt="Image of ${product.name}">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <h4 class="product-price">Rs. ${discountedPrice.toFixed(2)}</h4>
                <h4 class="product-offer">${product.offerPercentage}% Off</h4>
                <p class="product-quantity">
                    Qnt: <input type="number" value="${product.count}" min="1">
                </p>
                <p class="product-remove">
                    <i class="fas fa-trash-alt"></i>
                    <span class="remove">Remove</span>
                </p>
            </div>
        `;

        productElement.querySelector('.product-quantity input').addEventListener('change', event => {
            let newValue = parseInt(event.target.value);
            if (isNaN(newValue) || newValue < 1) {
                newValue = 1;
                event.target.value = newValue;
            }
            product.count = newValue;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });

        productElement.querySelector('.product-remove .remove').addEventListener('click', () => {
            const index = cart.findIndex(item => item.name === product.name);
            if (index !== -1) {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
                showRecommendations();
            }
        });

        productsContainer.appendChild(productElement);
    });

    updateCart();
}

function initializeBudgetShopping() {
    const budgetCheckbox = document.getElementById('budget-checkbox');
    const budgetInputContainer = document.getElementById('budget-input-container');
    const budgetValueInput = document.getElementById('budget-value');

    storedBudget = parseFloat(localStorage.getItem('budget')) || 0;
    const budgetEnabled = localStorage.getItem('budgetEnabled') === 'true';

    budgetValueInput.value = storedBudget;
    budgetCheckbox.checked = budgetEnabled;

    budgetCheckbox.addEventListener('change', () => {
        budgetInputContainer.style.display = budgetCheckbox.checked ? 'block' : 'none';
        localStorage.setItem('budgetEnabled', budgetCheckbox.checked);
        updateCart();
    });

    budgetValueInput.addEventListener('input', () => {
        const newBudget = parseFloat(budgetValueInput.value);
        localStorage.setItem('budget', isNaN(newBudget) ? 0 : newBudget);
        updateCart();
    });

    budgetInputContainer.style.display = budgetCheckbox.checked ? 'block' : 'none';
}

// Share Cart Feature

function generateCartShareMessage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty! Add items to your cart before sharing.');
        return '';
    }

    const cartMessage = cart
        .map(item => `${item.name} - Rs. ${item.price.toFixed(2)} (${item.count} pcs)`)
        .join('\n');

    const totalPrice = document.getElementById('total-price').innerText;

    return `Check out my shopping cart:\n\n${cartMessage}\n\nTotal: ${totalPrice}`;
}




document.getElementById('whatsapp-share').addEventListener('click', event => {
    const message = generateCartShareMessage();
    if (message) {
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        event.target.href = whatsappLink;
    }
});

document.getElementById('gmail-share').addEventListener('click', event => {
    const message = generateCartShareMessage();
    if (message) {
        const subject = 'My Shopping Cart';
        const gmailLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        event.target.href = gmailLink;
    }
});

function showRecommendations() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const recommendedContainer = document.getElementById('recommended-container');
    recommendedContainer.innerHTML = ''; // Clear the current recommendations

    if (cart.length === 0) {
        recommendedContainer.innerHTML = '<p>Your cart is empty. Start shopping!</p>';
        return;
    }

    // Create an array of product names in the cart
    const cartProductNames = cart.map(product => product.name);

    // Iterate over each group of recommended products
    recommendedProducts.forEach(group => {
        const groupHasCartItem = group.some(product => cartProductNames.includes(product.name));

        if (groupHasCartItem) {
            // Display only items not already in the cart
            group.forEach(product => {
                if (!cartProductNames.includes(product.name)) {
                    const discountedPrice = calculateDiscountedPrice(product.price, product.offerPercentage);

                    const productElement = document.createElement('div');
                    productElement.classList.add('product-box');
                    productElement.innerHTML = `
                        <img alt="${product.name}" src="${product.imgUrl}">
                        <strong>${product.name}</strong>
                        <span class="quantity">${product.quantity}</span>
                        <span class="price">Rs. ${discountedPrice.toFixed(2)}</span>
                        <a href="#" class="cart-btn add-to-cart">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </a>
                        <a class="like-btn">
                            <i class="far fa-heart"></i>
                        </a>
                    `;

                    // Event listener to add a recommended product to the cart
                    productElement.querySelector('.add-to-cart').addEventListener('click', () => {
                        const cart = JSON.parse(localStorage.getItem('cart')) || [];
                        cart.push({ ...product, count: 1 }); // Add to cart with default quantity of 1
                        localStorage.setItem('cart', JSON.stringify(cart));
                        renderCart(); // Re-render the cart with the new item
                        showRecommendations(); // Update recommendations after adding to cart
                    });

                    recommendedContainer.appendChild(productElement);
                }
            });
        }
    });
}


// Call showRecommendations when the page loads and after adding/removing products
renderCart();
initializeBudgetShopping();


const recommendationsInput = document.getElementById("recommendation");
const recommendationContainer = document.getElementById("dis");

recommendationsInput.addEventListener('change',()=>{
    if(recommendationsInput.checked)
    {
        recommendationContainer.style.display="block";
        showRecommendations();
    }
    else
    {
        recommendationContainer.style.display="none";
    }
})

