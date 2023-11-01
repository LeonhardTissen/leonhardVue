export function goTo(page_id: string): void {
	// Hide all previously selected pages and nav elements
	document.querySelectorAll('.navitem.selected, .page.selected').forEach((element) => {
		element.classList.remove('selected');
	});

	// Select only the applicable nav element and page
	document.querySelectorAll(`.navitem#nav${page_id}, .page#${page_id}`).forEach((element) => {
		element.classList.add('selected');
	});
}

window.onload = () => {
	// See what page the user loaded the page on
	const hash = window.location.hash;
	
	if (['#home','#',''].includes(hash)) {
		// Don't change any pages, just select the home in the nav
		document.getElementById('navhome')?.classList.add('selected');
		return;
	}

	// Change page immediately
	goTo(hash.replace('#', ''));
}
