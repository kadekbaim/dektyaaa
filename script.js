// Efek hati jatuh otomatis
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Tombol tampilkan galeri
document.getElementById("showPhotos").addEventListener("click", () => {
  const gallery = document.getElementById("gallery");
  gallery.classList.toggle("hidden");

  const btn = document.getElementById("showPhotos");
  if (gallery.classList.contains("hidden")) {
    btn.textContent = "Lihat Kenangan Kita 📸";
  } else {
    btn.textContent = "Sembunyikan Foto 🙈";
  }
});

// Efek love saat klik/touch
document.addEventListener("click", function(e) {
  const love = document.createElement("span");
  love.innerText = "❤️";
  love.className = "touch-love";

  // posisikan di titik klik/touch
  love.style.left = e.pageX + "px";
  love.style.top = e.pageY + "px";

  document.body.appendChild(love);

  // hapus setelah animasi selesai
  setTimeout(() => {
    love.remove();
  }, 1500);
});
