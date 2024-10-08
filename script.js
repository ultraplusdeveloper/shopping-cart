//contact form validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      alert("Please fill out both name and email fields.");
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  });

  // Toggle User Modal
const userIcon = document.querySelector(".user-icon");
const userModal = document.querySelector(".user-modal");
const closeUserModalButton = document.querySelector(".close-user-modal");

userIcon.addEventListener("click", () => {
  userModal.style.display = "block"; // Show user modal
});

// Close the user modal when 'x' is clicked
closeUserModalButton.addEventListener("click", () => {
  userModal.style.display = "none";
});

// Optional: Close the user modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === userModal) {
    userModal.style.display = "none";
  }
});

//sliding ads
let currentAd = 0;
const ads = document.querySelectorAll(`.ad`);
function showNextAd() {
  ads[currentAd].style.display = "none";
  currentAd = (currentAd + 1) % ads.length;
  ads[currentAd].style.display = "block";
}
setInterval(showNextAd, 3000);
// Function to display a message when the Student Discount button is clicked
document
  .getElementById("student-discount-btn")
  .addEventListener("click", function () {
    alert("You have claimed the Student Discount!");
  });
// Function to display a message when the First-Time Buyer Discount button is clicked
document
  .getElementById("first-time-discount-btn")
  .addEventListener("click", function () {
    alert("You have claimed the First-Time Buyer Discount!");
  });

document.querySelector(".cart-icon").addEventListener("click", () => {
  const cartModal = document.querySelector(".cart-modal");
  cartModal.style.display =
    cartModal.style.display === "none" ? "block" : "none";
});

let cartItems = [];
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartCount = document.querySelector(".cart-count");
const totalPriceEl = document.querySelector(".total-price");
const cartItemsList = document.querySelector(".cart-items");
const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.querySelector(".cart-modal");
const closeModalButton = document.querySelector(".close-modal");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    
    const itemPrice = parseInt(event.target.getAttribute("data-price"));
    const itemName = event.target.previousElementSibling.previousElementSibling.textContent;

    cartItems.push({ name: itemName, price: itemPrice, quantity: 1, liked: false });
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cartItems.length;

  let totalPrice = 0;
  cartItemsList.innerHTML = ""; // Clear existing items

  cartItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${item.name} - KSH ${item.price * item.quantity}</span>
      <button class="like-btn">${item.liked ? '❤️' : '🤍'}</button>
      <button class="delete-btn">🗑️</button>
      <button class="decrease-qty">-</button> ${item.quantity} <button class="increase-qty">+</button>
    `;
    cartItemsList.appendChild(listItem);

    // Calculate total price based on quantity
    totalPrice += item.price * item.quantity;

    // Like button functionality
    listItem.querySelector(".like-btn").addEventListener("click", () => {
      item.liked = !item.liked;
      updateCart();
    });

    // Delete button functionality
    listItem.querySelector(".delete-btn").addEventListener("click", () => {
      cartItems.splice(index, 1);
      updateCart();
    });

    // Increase quantity
    listItem.querySelector(".increase-qty").addEventListener("click", () => {
      item.quantity++; // Increase quantity
      updateCart();
    });

    // Decrease quantity
    listItem.querySelector(".decrease-qty").addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--; // Decrease quantity
      } else {
        cartItems.splice(index, 1); // Remove item if quantity is 0
      }
      updateCart();
    });
  });

  totalPriceEl.textContent = `Total Price: KSH ${totalPrice}`;
}

// Open the cart modal when cart icon is clicked
cartIcon.addEventListener("click", () => {
  cartModal.style.display = "block";
});

// Close the modal when 'x' is clicked
closeModalButton.addEventListener("click", () => {
  cartModal.style.display = "none";
});