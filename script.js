// ===== QR DINÂMICO =====

const qrImages = [
  "assets/qr1.png",
  "assets/qr2.png",
  "assets/qr3.png",
  "assets/qr4.png",
  "assets/qr5.png"
];

let qrIndex = 0;

function updateQR(){
  qrIndex = (qrIndex + 1) % qrImages.length;

  document.querySelectorAll(".qr-img").forEach(img => {
    img.src = qrImages[qrIndex];
  });

  // Reinicia animação da barra de progresso
  document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.style.animation = "none";
    bar.offsetHeight; // force reflow
    bar.style.animation = null;
  });
}

setInterval(updateQR, 20000);


// ===== SWIPE CARROSSEL =====

const track = document.querySelector('.carousel-track');

// Calculate total tickets dynamically — never hardcode this number
const totalTickets = document.querySelectorAll('.ticket-wrapper').length;
const maxIndex = totalTickets - 1;

let currentIndex = 0;
let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
}, { passive: true });

track.addEventListener('touchmove', e => {
  if (!isDragging) return;

  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  if (diff > 50) {
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    moveCarousel();
    isDragging = false;
  }

  if (diff < -50) {
    currentIndex = Math.max(currentIndex - 1, 0);
    moveCarousel();
    isDragging = false;
  }
}, { passive: true });

// Reset drag flag when finger leaves screen
track.addEventListener('touchend', () => {
  isDragging = false;
}, { passive: true });

track.addEventListener('touchcancel', () => {
  isDragging = false;
}, { passive: true });

function moveCarousel(){
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}