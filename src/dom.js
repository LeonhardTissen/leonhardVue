export function goTo(page_id) {
	document.querySelectorAll('.navitem.selected, .page.selected').forEach((element) => {
		element.classList.remove('selected');
	});

	document.querySelector(`.navitem#${page_id}`).classList.add('selected');
	document.querySelector(`.page#${page_id}`).classList.add('selected');
}
