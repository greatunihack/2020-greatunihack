const startTime = new Date('28 November 2020').getTime();
const eventTime = document.getElementById('event-time');

function lpad(n) {
	return n >= 10 ? String(n) : `0${n}`;
}

function updateTimer() {
	const now = new Date().getTime();
	const diff = startTime - now;
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);
	
	const formatted = [days, hours, minutes, seconds].map(n => lpad(n)).join(' : ');

	eventTime.innerText = formatted;
}

setInterval(updateTimer, 250);
updateTimer();
