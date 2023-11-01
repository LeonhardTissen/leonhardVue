export function goTo(page_id) {
	document.querySelectorAll('.navitem.selected, .page.selected').forEach((element) => {
		element.classList.remove('selected');
	});

	document.querySelector(`.navitem#nav${page_id}`).classList.add('selected');
	document.querySelector(`.page#${page_id}`).classList.add('selected');
}

window.onload = () => {
	const hash = window.location.hash;
	if (['#home','#',''].includes(hash)) {
		document.getElementById('navhome').classList.add('selected');
		return;
	}
	goTo(hash.replace('#', ''));
}
