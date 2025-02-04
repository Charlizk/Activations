// Données des produits
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 599.99,
        image: "https://via.placeholder.com/200",
        category: "electronique"
    },
    {
        id: 2,
        name: "Casque audio",
        price: 149.99,
        image: "https://via.placeholder.com/200",
        category: "electronique"
    },
    {
        id: 3,
        name: "T-shirt",
        price: 19.99,
        image: "https://via.placeholder.com/200",
        category: "mode"
    }
];

// Panier
let cart = [];
let cartTotal = 0;

// Éléments DOM
const productsGrid = document.getElementById("productsGrid");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");

// Afficher les produits
function renderProducts(products) {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price.toFixed(2)} €</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        </div>
    `).join("");
}

// Ajouter au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        cartTotal += product.price;
        updateCartDisplay();
    }
}

// Mettre à jour le panier
function updateCartDisplay() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h4>${item.name}</h4>
            <p>${item.price.toFixed(2)} €</p>
        </div>
    `).join("");
    cartTotalElement.textContent = cartTotal.toFixed(2);
    document.getElementById("cartCount").textContent = cart.length;
}

// Ouvrir/fermer le panier
function toggleCart() {
    cartSidebar.classList.toggle("open");
}

// Recherche
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

// Initialisation
renderProducts(products);