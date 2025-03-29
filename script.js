const bouncer = document.getElementById('bouncer');

let vx = 0;
let vy = 0;

bouncer.addEventListener('click', () => {
  // 隨機彈跳方向與速度
  vx = (Math.random() - 0.5) * 60;
  vy = (Math.random() - 0.5) * 60;
});

function move() {
  const rect = bouncer.getBoundingClientRect();
  const parent = document.getElementById('game-area');
  const maxX = parent.clientWidth - bouncer.clientWidth;
  const maxY = parent.clientHeight - bouncer.clientHeight;

  let x = bouncer.offsetLeft + vx;
  let y = bouncer.offsetTop + vy;

  // 撞到邊界就反彈
  if ((x < 0 || x > maxX) && Math.abs(vx) > 0.1) vx = -vx;
  if ((y < 0 || y > maxY) && Math.abs(vy) > 0.1) vy = -vy;
  if (Math.abs(vx) < 0.1) {
    vx = 0;
  }
  if (Math.abs(vy) < 0.1) {
    vy = 0;
  }

  // 限制位置在畫面內
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  bouncer.style.left = x + 'px';
  bouncer.style.top = y + 'px';
  
  // 每次移動後稍微減慢速度（模擬摩擦力）
  vx *= 0.95;
  vy *= 0.95;

  
  console.log(vx, vy);

  requestAnimationFrame(move);
}

move();
