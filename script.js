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

  document.querySelectorAll(".qr-img").forEach(img=>{
    img.src = qrImages[qrIndex];
  });

  // reinicia animação da barra
  document.querySelectorAll(".progress-bar").forEach(bar=>{
    bar.style.animation = "none";
    bar.offsetHeight;
    bar.style.animation = null;
  });
}

setInterval(updateQR, 20000);


// ===== SWIPE CARROSSEL =====

const track = document.querySelector('.carousel-track');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', e=>{
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener('touchmove', e=>{
  if(!isDragging) return;
  let moveX = e.touches[0].clientX;
  let diff = startX - moveX;

  if(diff > 50){
    currentIndex = Math.min(currentIndex + 1, 5);
    moveCarousel();
    isDragging = false;
  }

  if(diff < -50){
    currentIndex = Math.max(currentIndex - 1, 0);
    moveCarousel();
    isDragging = false;
  }
});

function moveCarousel(){
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}