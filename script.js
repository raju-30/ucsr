function filterSelection(category) {
  const items = document.querySelectorAll(".filterDiv");
  const msg = document.getElementById("emptyMsg");

  // hide message after click
  msg.style.display = "none";

  // hide all cards
  items.forEach(item => item.classList.remove("show"));

  // show selected
  items.forEach(item => {
    if (item.classList.contains(category)) {
      item.classList.add("show");
    }
  });
}

/* active button */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");
  });
});