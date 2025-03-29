const bouncer = document.getElementById('bouncer');

let vx = 0;
let vy = 0;

bouncer.addEventListener('click', () => {
  // 隨機彈跳方向與速度
  vx = (Math.random() - 0.5) * 20;
  vy = (Math.random() - 0.5) * 20;
});

function move() {
  const rect = bouncer.getBoundingClientRect();
  const parent = document.getElementById('game-area');
  const maxX = parent.clientWidth - bouncer.clientWidth;
  const maxY = parent.clientHeight - bouncer.clientHeight;

  let x = bouncer.offsetLeft + vx;
  let y = bouncer.offsetTop + vy;

  // 撞到邊界就反彈
  if (x < 0 || x > maxX) vx = -vx;
  if (y < 0 || y > maxY) vy = -vy;

  // 限制位置在畫面內
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  bouncer.style.left = x + 'px';
  bouncer.style.top = y + 'px';

  requestAnimationFrame(move);
}

move(
  // 每次移動後稍微減慢速度（模擬摩擦力）
  vx *= 0.9;
  vy *= 0.9;
);
