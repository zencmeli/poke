let x, y, vx = 0, vy = 0;

const bouncy = document.getElementById('bouncy');

function centerbouncy() {
  x = (window.innerWidth - bouncy.clientWidth) / 2;
  y = window.innerHeight - bouncy.clientHeight - 20;

  bouncy.style.left = x + 'px';
  bouncy.style.top = y + 'px';
}

bouncy.addEventListener('click', () => {
  vx = (Math.random() - 0.5) * 60;
  vy = (Math.random() - 0.5) * 60;
});

function move() {
  const parent = document.getElementById('game-area');
  const maxX = parent.clientWidth - bouncy.clientWidth;
  const maxY = parent.clientHeight - bouncy.clientHeight;

  x += vx;
  y += vy;

  if ((x < 0 || x > maxX) && Math.abs(vx) > 0.1) vx = -vx;
  if ((y < 0 || y > maxY) && Math.abs(vy) > 0.1) vy = -vy;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  bouncy.style.left = x + 'px';
  bouncy.style.top = y + 'px';

  vx *= 0.98;
  vy *= 0.98;

  if (Math.abs(vx) < 0.1) vx = 0;
  if (Math.abs(vy) < 0.1) vy = 0;

  requestAnimationFrame(move);
}

window.addEventListener('DOMContentLoaded', () => {
  centerBouncy();
  move();
});
