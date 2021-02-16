const $toggleButtons = document.querySelectorAll('.toggle-option__input');
const $toggleIndicator = document.querySelector('.active-state-indicator');
const $countdownTime = document.querySelector('#countdown-time');


$toggleButtons.forEach((btn, i) =>
  btn.addEventListener('change', (e) => {
    $toggleButtons.forEach((btn) =>
      btn.parentElement.classList.remove('toggle-option--active')
    );
    e.target.parentElement.classList.add('toggle-option--active');
    $toggleIndicator.className = `active-state-indicator active-${i + 1}`;
  })
);

const $canvas = document.getElementById('canvas');

$canvas.width = window.innerWidth > 960 ? 400 : 200;
$canvas.height = window.innerWidth > 960 ? 400 : 200;


const ctx = $canvas.getContext('2d');

const seconds = 10;

$countdownTime.innerText = `${'00'}:${seconds}`;

let variable = 0;
let df = 2 / (seconds * 100);
let i = 0;

function draw() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = '#f86f6b';
  ctx.arc(
    $canvas.width / 2,
    $canvas.height / 2,
    $canvas.width / 2.2,
    Math.PI * -0.5,
    Math.PI * (-0.5 + variable)
  );

  ctx.lineWidth = 9;
  ctx.lineCap = 'round';
  ctx.stroke();
}

draw();

const interval = setInterval(() => {
  i++;
  variable += df;
  draw();
  if (i >= seconds * 100) {
    clearInterval(interval);
    return;
  }
}, 10);


