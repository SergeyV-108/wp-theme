/*================== Закрытие блока уведомления =================*/
let btnClose = document.querySelector('.btnClose');

btnClose.onclick = function () {
	btnClose.parentElement.style.display = 'none';
}
/*================================================================*/
/*================ Перенос формы поиска в сайдбаре ===============*/
let wrapper = document.querySelector('.wrapper');
let searchForm = document.querySelector('.searchForm');
let itemArticle = document.querySelector('.itemArticle');
let sidePage = document.querySelector('.sidePage');

changePlace();

window.addEventListener('resize', function () {
	sidePage.prepend(searchForm);
	changePlace();
});

function changePlace() {
	if (wrapper.offsetWidth <= 1100) {
		itemArticle.after(searchForm);
	}
}
/*================================================================*/
/*================== Перенос соц.ссылок в footer =================*/
let socialLink = document.querySelector('.socialLink').closest('.rowFooter');
let footerColumnLast = document.querySelector('.footerColumnLast');
let footerSectionRow = document.querySelector('.footerSectionRow');

changePlaceSoc();

window.addEventListener('resize', function () {
	footerSectionRow.append(socialLink);
	changePlaceSoc();
});

function changePlaceSoc() {
	if (wrapper.offsetWidth <= 540) {
		footerColumnLast.after(socialLink);
	}
}
/*================================================================*/