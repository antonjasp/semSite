const getCount = document.getElementById("getCount");
const contactsModal = document.getElementById("contactsModal");
const closeBtn2 = document.getElementById("closeBtn2");

getCount.addEventListener("click", function () {
  console.log("count");
  contactsModal.style.display = "block";
});
closeBtn2.addEventListener("click", () => {
  contactsModal.style.display = "none";
});
