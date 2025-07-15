// Force autoplay workaround for some browsers
window.addEventListener('click', function () {
  const audio = document.getElementById('birthdaySong');
  if (audio.paused) {
    audio.play();
  }
}, { once: true });

// Flip card and play sound
const flipCard = document.getElementById('flipCard');
const flipSound = document.getElementById('flipSound');

flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('flip');
  flipSound.currentTime = 0; // rewind to start
  flipSound.play();
});

const heartsContainer = document.querySelector('.hearts-background');
let lastTime = 0;

window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastTime < 100) return; // Only create a heart every 100ms (~10 hearts/sec)
  lastTime = now;

  const heart = document.createElement('div');
  heart.classList.add('heart-trail');

  const rect = heartsContainer.getBoundingClientRect();
  heart.style.left = (e.clientX - rect.left) + 'px';
  heart.style.top = (e.clientY - rect.top) + 'px';

  heartsContainer.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});
