
centerBouncer();

let x, y, vx = 0, vy = 0;

function centerBouncer() {
  x = (window.innerWidth - bouncer.clientWidth) / 2;
  y = window.innerHeight - bouncer.clientHeight - 20;

  bouncer.style.left = x + 'px';
  bouncer.style.top = y + 'px';
}
const bouncer = document.getElementById('bouncer');

let vx = 0;
let vy = 0;

bouncer.addEventListener('click', () => {
  // random and speed
  vx = (Math.random() - 0.5) * 60;
  vy = (Math.random() - 0.5) * 60;
});

function move() {
  const parent = document.getElementById('game-area');
  const maxX = parent.clientWidth - bouncer.clientWidth;
  const maxY = parent.clientHeight - bouncer.clientHeight;

  let x = bouncer.offsetLeft + vx;
  let y = bouncer.offsetTop + vy;

  // bouncer
  if ((x < 0 || x > maxX) && Math.abs(vx) > 0.1) vx = -vx;
  if ((y < 0 || y > maxY) && Math.abs(vy) > 0.1) vy = -vy;

  // frame limit
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  bouncer.style.left = x + 'px';
  bouncer.style.top = y + 'px';
  
  // slow down
  vx *= 0.98;
  vy *= 0.98;
  
  console.log(vx, vy);

  requestAnimationFrame(move);
}

move();
