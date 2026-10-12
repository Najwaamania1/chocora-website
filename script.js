
const products = [
  {
    id: 1,
    name: "Luxury Chocolate Gift Box",
    category: "SIGNATURE COLLECTION",
    price: 189000,
    description: "Kotak hadiah berisi aneka cokelat premium.",
    image: "https://images.unsplash.com/photo-1687795097254-f019f9d7fd17?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Dark Chocolate Bar",
    category: "DARK CHOCOLATE",
    price: 79000,
    description: "Cokelat hitam dengan rasa kaya dan intens.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Chocolate Cupcake",
    category: "BAKED TREATS",
    price: 45000,
    description: "Cupcake cokelat dengan topping manis.",
    image: "https://images.unsplash.com/photo-1609618298169-425a11118f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Chocolate Cookies",
    category: "COOKIES",
    price: 59000,
    description: "Kukis renyah dengan potongan cokelat.",
    image: "https://images.unsplash.com/photo-1545586937-1aebe2c8642f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Chocolate Truffles",
    category: "HANDCRAFTED",
    price: 99000,
    description: "Bola cokelat premium dengan tekstur lembut.",
    image: "https://images.unsplash.com/photo-1775201630951-665651af1747?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Chocolate Brownies",
    category: "BAKED TREATS",
    price: 69000,
    description: "Brownies cokelat dengan tekstur fudgy.",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Chocolate Strawberries",
    category: "FRESH CHOCOLATE",
    price: 85000,
    description: "Stroberi segar berlapis cokelat.",
    image: "https://images.unsplash.com/photo-1565159390550-84e50f1fe4f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Milk Chocolate Bar",
    category: "MILK CHOCOLATE",
    price: 65000,
    description: "Cokelat susu dengan rasa lembut dan creamy.",
    image: "https://images.unsplash.com/photo-1583853269692-9d0fadd59003?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Chocolate Pralines",
    category: "SIGNATURE COLLECTION",
    price: 119000,
    description: "Praline cokelat dengan isian lembut.",
    image: "https://images.unsplash.com/photo-1548907040-4d42faa9e4f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Chocolate Macarons",
    category: "FRENCH PATISSERIE",
    price: 89000,
    description: "Macaron dengan rasa cokelat yang elegan.",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Chocolate Donuts",
    category: "BAKED TREATS",
    price: 49000,
    description: "Donat empuk dengan lapisan cokelat.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Chocolate Mousse",
    category: "DESSERT",
    price: 55000,
    description: "Mousse cokelat dengan tekstur lembut.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Chocolate Waffles",
    category: "DESSERT",
    price: 59000,
    description: "Wafel dengan pelengkap cokelat.",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Chocolate Celebration Cake",
    category: "CELEBRATION",
    price: 159000,
    description: "Kue cokelat untuk perayaan spesial.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Chocolate Dessert Box",
    category: "SIGNATURE COLLECTION",
    price: 79000,
    description: "Dessert box cokelat untuk pencinta manis.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
  }
];

let cart = [];

const rupiah = amount =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);

// MENAMPILKAN PRODUK
function renderProducts() {
  const container = document.getElementById("product-list");

  container.innerHTML = products.map(product => `
    <article class="product-card">
      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/800x600/f0e5da/40251e?text=Chocora+Chocolate';"
      >

      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-bottom">
          <span class="product-price">${rupiah(product.price)}</span>
          <button class="add-button" onclick="addToCart(${product.id})">
            + Keranjang
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// MENAMBAHKAN PRODUK
function addToCart(id) {
  const item = cart.find(product => product.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }

  renderCart();
}

// MENGUBAH JUMLAH PRODUK
function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  renderCart();
}

// MENGHAPUS PRODUK
function removeFromCart(id) {
  cart = cart.filter(product => product.id !== id);
  renderCart();
}

// MENGHITUNG TOTAL
function getTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);
}

// MENAMPILKAN KERANJANG
function renderCart() {
  const container = document.getElementById("cart-items");

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = rupiah(getTotal());

  if (cart.length === 0) {
    container.innerHTML = `
      <p class="empty-cart">
        Keranjang kamu masih kosong. Pilih produk favoritmu!
      </p>
    `;
    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(product => product.id === item.id);

    return `
      <div class="cart-row">
        <div>
          <p class="cart-product-name">${product.name}</p>
          <p class="cart-product-price">
            ${rupiah(product.price)} × ${item.quantity}
          </p>
        </div>

        <div class="quantity-controls">
          <button onclick="changeQuantity(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)">+</button>
          <button class="remove-button"
            onclick="removeFromCart(${item.id})">
            Hapus
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// MENUJU KERANJANG
function showCart() {
  document.getElementById("checkout").scrollIntoView({
    behavior: "smooth"
  });
}

// CHECKOUT SIMULASI
document.getElementById("checkout-form").addEventListener(
  "submit",
  function(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Keranjang masih kosong. Pilih produk terlebih dahulu!");
      return;
    }

    const name = document.getElementById("customer-name").value.trim();
    const address = document.getElementById("customer-address").value.trim();
    const payment = document.getElementById("payment").value;
    const delivery = document.getElementById("delivery").value;

    if (!name || !address || !payment || !delivery) {
      alert("Lengkapi informasi pesanan terlebih dahulu.");
      return;
    }

    const orderNumber = "CHO-" + Date.now().toString().slice(-6);
    const total = getTotal();

    document.getElementById("order-result").innerHTML = `
      <div class="order-success">
        <h3>✓ Pesanan Berhasil Dibuat!</h3>
        <p><strong>Nomor pesanan:</strong> ${orderNumber}</p>
        <p><strong>Nama:</strong> ${escapeHTML(name)}</p>
        <p><strong>Total:</strong> ${rupiah(total)}</p>
        <p><strong>Pembayaran:</strong> ${escapeHTML(payment)}</p>
        <p><strong>Pengiriman:</strong> ${escapeHTML(delivery)}</p>
        <p><strong>Status:</strong> Berhasil (simulasi).</p>
        <p>
          Ini hanya demonstrasi untuk tugas sekolah.
          Tidak ada pembayaran atau pengiriman sungguhan.
        </p>
      </div>
    `;

    cart = [];
    renderCart();
    document.getElementById("checkout-form").reset();

    document.getElementById("order-result").scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
);

// MENCEGAH INPUT PELANGGAN DITAFSIRKAN SEBAGAI HTML
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

// INISIALISASI WEBSITE
renderProducts();
renderCart();

const reviewForm = document.getElementById("reviewForm");
const reviewsGrid = document.getElementById("reviewsGrid");

if (reviewForm && reviewsGrid) {
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const rating = Number(
      document.getElementById("reviewRating").value
    );
    const message = document
      .getElementById("reviewMessage")
      .value.trim();

    if (!name || !message) return;

    const emptyMessage = document.getElementById("emptyReviews");
    if (emptyMessage) emptyMessage.remove();

    const card = document.createElement("article");
    card.className = "review-card";

    const stars = document.createElement("div");
    stars.className = "stars";
    stars.textContent =
      "★".repeat(rating) + "☆".repeat(5 - rating);

    const reviewText = document.createElement("p");
    reviewText.textContent = message;

    const reviewer = document.createElement("h3");
    reviewer.textContent = name;

    const label = document.createElement("span");
    label.textContent = "Chocora Customer";

    card.append(stars, reviewText, reviewer, label);
    reviewsGrid.prepend(card);

    reviewForm.reset();
  });
}
