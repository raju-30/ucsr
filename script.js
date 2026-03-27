let selectedCategory = "";



function filterSelection(category) {

  // If achievements → open modal instead
  if (category === "ImpDocuments") {
    selectedCategory = category;
    openModal();
    return;
  }

  showCategory(category);
}

// Show items
function showCategory(category) {
  const items = document.querySelectorAll(".filterDiv");

  items.forEach(item => {
    item.classList.remove("show");

    if (category === "all" || item.classList.contains(category)) {
      item.classList.add("show");
    }
  });
}

// Open modal
function openModal() {
  document.getElementById("passwordModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("passwordModal").style.display = "none";
  document.getElementById("errorMsg").innerText = "";
  document.getElementById("passwordInput").value = "";
}

// Check password
function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === "Ucsr30") {
    closeModal();
    showCategory(selectedCategory);
  } else {
    document.getElementById("errorMsg").innerText = "Incorrect password!";
  }
}

// Active button highlight
const buttons = document.querySelectorAll("#BtnContainer .btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".btn.active")?.classList.remove("active");
    btn.classList.add("active");
  });
});