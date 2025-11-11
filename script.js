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

/* =======================
   ✅ IMAGE POPUP WITH ZOOM
   ======================= */

let scale = 1;
let isDragging = false;
let lastX = 0, lastY = 0;
let posX = 0, posY = 0;

/* ✅ OPEN IMAGE MODAL */
function openImageModal(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  scale = 1;
  posX = posY = 0;
  modalImg.style.transform = `translate(0px,0px) scale(1)`;
  modalImg.src = src;

  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

/* ✅ CLOSE IMAGE MODAL */
function closeImage() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

/* ✅ CLOSE WHEN CLICK OUTSIDE IMAGE */
window.addEventListener("click", (event) => {
  const modal = document.getElementById("image-modal");
  const imgBox = document.querySelector("#image-modal .image-box");

  // If clicked outside image box → close
  if (event.target === modal) {
    closeImage();
  }
});

/* ✅ SCROLL ZOOM */
document.getElementById("image-modal").addEventListener("wheel", (e) => {
  e.preventDefault();
  const modalImg = document.getElementById("modal-img");

  if (e.deltaY < 0) scale += 0.1;
  else scale = Math.max(1, scale - 0.1);

  modalImg.style.transform = `translate(${posX}px,${posY}px) scale(${scale})`;
});

/* ✅ DRAG IMAGE */
const modalImg = document.getElementById("modal-img");

modalImg.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  posX += (e.clientX - lastX);
  posY += (e.clientY - lastY);
  lastX = e.clientX;
  lastY = e.clientY;

  modalImg.style.transform = `translate(${posX}px,${posY}px) scale(${scale})`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

/* ✅ DOUBLE TAP RESET (MOBILE) */
let lastTap = 0;

modalImg.addEventListener("touchstart", () => {
  const now = Date.now();

  if (now - lastTap < 300) {
    scale = 1;
    posX = posY = 0;
    modalImg.style.transform = `translate(0px,0px) scale(1)`;
  }
  lastTap = now;
});

/* ✅ PROJECT SCROLLER BUTTONS */
function scrollProjects(amount) {
  const container = document.querySelector(".projects-container");
  container.scrollBy({ left: amount, behavior: "smooth" });
}


