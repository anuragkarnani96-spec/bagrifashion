// Load cart from browser storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update the cart count on the top-right
function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.textContent = cart.length;
}

// Add items to cart when button is clicked
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
   const productSlides = {
  img1: ["images/LGBEHAPPY.JPG", "images/MBEHAPPY.JPG", "images/NBBEHAPPY.JPG"],
   img2: ["images/nbj.jpg", "images/wj.jpg", "images/bj.jpg", "images/pj.jpg", "images/afj.jpg"],
  img3: ["images/lgnd.jpg", "images/lnds.jpg", "images/ond.jpg", "images/pnds.jpg", "images/wnd.jpg", "images/mnd.jpg", "images/bnd.jpg"]
};
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(product.name + " added to cart!");
  });
});

updateCartCount();