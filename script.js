const bouncer = document.getElementById('bouncer');

let x, y, vx = 0, vy = 0;

function centerBouncer() {
  x = (window.innerWidth - bouncer.clientWidth) / 2;
  y = window.innerHeight - bouncer.clientHeight - 20;

  bouncer.style.left = x + 'px';
  bouncer.style.top = y + 'px';
}

bouncer.addEventListener('click', () => {
  vx = (Math.random() - 0.5) * 60;
  vy = (Math.random() - 0.5) * 60;
});

function move() {
  const parent = document.getElementById('game-area');
  const maxX = parent.clientWidth - bouncer.clientWidth;
  const maxY = parent.clientHeight - bouncer.clientHeight;

  x += vx;
  y += vy;

  if ((x < 0 || x > maxX) && Math.abs(vx) > 0.1) vx = -vx;
  if ((y < 0 || y > maxY) && Math.abs(vy) > 0.1) vy = -vy;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  bouncer.style.left = x + 'px';
  bouncer.style.top = y + 'px';

  vx *= 0.98;
  vy *= 0.98;

  if (Math.abs(vx) < 0.1) vx = 0;
  if (Math.abs(vy) < 0.1) vy = 0;

  requestAnimationFrame(move);
}

centerBouncer();
move();
