/* ✅ OPEN ARTICLE MODAL */
function openModal(id) {
  document.getElementById(id).style.display = "block";
  document.body.classList.add("modal-open");
}

/* ✅ CLOSE ARTICLE MODAL */
function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.classList.remove("modal-open");
}

/* ✅ OPEN IMAGE POPUP */
function openImage(src) {
  document.getElementById("modal-img").src = src;
  document.getElementById("image-modal").style.display = "block";
}

/* ✅ CLOSE IMAGE POPUP */
function closeImage() {
  document.getElementById("image-modal").style.display = "none";
}

/* ✅ Close image popup when clicking outside */
window.onclick = function(event) {
  let modal = document.getElementById("image-modal");
  if (event.target === modal) {
    closeImage();
  }
}

