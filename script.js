// Contact Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      alert("Please fill out both name and email fields.");
      event.preventDefault(); // Prevent form submission
    } else {
      alert("Form submitted successfully!");
    }
  });

// Scroll Between Student and First-Time Discounts
let currentDiscount = 0; // Tracks which discount is shown
const discountAds = document.querySelectorAll(".discount-box");

function switchDiscount() {
  discountAds[currentDiscount].style.display = "none"; // Hide current
  currentDiscount = (currentDiscount + 1) % discountAds.length; // Cycle through ads
  discountAds[currentDiscount].style.display = "block"; // Show next
}

// Set an interval to switch ads every 3 seconds
setInterval(switchDiscount, 3000);

// Add to Cart Functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}


updateCartCount();

document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;
    const productPrice = button.dataset.productPrice;
    addToCart(productName, productPrice);
  });
});

function applyStudentDiscount() {
  const discount = 0.1; // 10% discount
  document.querySelectorAll(".price").forEach((priceElement) => {
    const originalPrice = parseFloat(priceElement.dataset.originalPrice);
    const discountedPrice = (originalPrice * (1 - discount)).toFixed(2);
    priceElement.innerText = `$${discountedPrice}`;
  });
}

// Add event listener to the "Claim Student Discount" button
document
  .getElementById("claim-discount-btn")
  .addEventListener("click", applyStudentDiscount);

