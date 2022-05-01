$(window).ready(initListeners);

function initListeners() {
	generateContent();
	initNav();
}

function initNav() {
	$('#nav-about').dropdown();
	$(window).on('hashchange', generateContent);
}

async function generateContent() {
	const hash = location.hash.replace('#', '') || 'home';
	try {
		const content = await $.get(`views/${hash}.html`);
		$('#app').html(content);
	} catch (e) {
		localStorage.lastPageGenerated = hash;
		location.hash = '#404';
	}
}
