const startTime = new Date(1606563000000).getTime();
const eventTime = document.getElementById('event-time');

function lpad(n) {
	return n >= 10 ? String(n) : `0${n}`;
}

function updateTimer() {
	const now = new Date().getTime();
	const diff = startTime - now;

	if (diff < 0) {
		return '00 : 00 : 00 : 00';
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);
	
	const formatted = [days, hours, minutes, seconds].map(n => lpad(n)).join(' : ');

	eventTime.innerText = formatted;
}

setInterval(updateTimer, 250);
updateTimer();

const nav = document.querySelector('nav');
const menuIcon = document.querySelector('#mobilenav i');
let menuOpen = false;

function closeMenu() {
	menuOpen = true;
	toggleMenu();
}

nav.addEventListener('click', e => {
	if (e.target.tagName === 'A') {
		closeMenu();
	}
})

function toggleMenu() {
	menuOpen = !menuOpen;
	if (menuOpen) {
		nav.classList.add('opened');
		menuIcon.classList.remove('fa-bars');
		menuIcon.classList.add('fa-chevron-left');
	} else {
		nav.classList.remove('opened');
		menuIcon.classList.add('fa-bars');
		menuIcon.classList.remove('fa-chevron-left');
	}
}