let timer;
let seconds = 0;
let running = false;
let lapCounter = 1;

function updateDisplay() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  running = false;
  clearInterval(timer);
}

function reset() {
  pause();
  seconds = 0;
  lapCounter = 1;
  updateDisplay();
  document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
  if (running) {
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById('lapList').appendChild(lapItem);
    lapCounter++;
  }
}

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  if (root.style.getPropertyValue('--bg-color') === '#f0f4f8') {
    root.style.setProperty('--bg-color', '#121212');
    root.style.setProperty('--text-color', '#f0f4f8');
    root.style.setProperty('--accent-color', '#ff9800');
  } else {
    root.style.setProperty('--bg-color', '#f0f4f8');
    root.style.setProperty('--text-color', '#333');
    root.style.setProperty('--accent-color', '#007bff');
  }
});
