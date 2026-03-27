function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, '0');

  document.getElementById('clock').textContent =
    `${day}/${month}/${year} ${hours}:${minutes}${ampm} LIS`;
}
