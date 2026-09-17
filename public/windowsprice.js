const loadPriceBtn = document.getElementById("loadpricebtn");
const priceModal = document.getElementById("priceModal");
const closeBtn = document.getElementById("closeBtn");
const shopBtn = document.getElementById("shopBtn");

loadPriceBtn.addEventListener("click", () => {
  priceModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  priceModal.style.display = "none";
});
shopBtn.addEventListener("click", function () {});

window.addEventListener("click", (event) => {
  if (event.target === priceModal) {
    priceModal.style.display = "none";
  }
});
