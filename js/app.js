/*================== Закрытие блока уведомления =================*/
let topHeaderClose = document.querySelector('.top-header__close');

topHeaderClose.onclick = function () {
	topHeaderClose.parentElement.style.display = 'none';
}
/*================================================================*/
/*================ Перенос формы поиска в сайдбаре ===============*/
let wrapper = document.querySelector('.wrapper');
let sidePageSearch = document.querySelector('.side-page__search');
let articlePageItem = document.querySelector('.article-page__item');
let contentPageSide = document.querySelector('.content-page__side');

changePlace();

window.addEventListener('resize', function () {
	contentPageSide.prepend(sidePageSearch);
	changePlace();
});

function changePlace() {
	if (wrapper.offsetWidth <= 1100) {
		articlePageItem.after(sidePageSearch);
	}
}
/*================================================================*/
/*================== Перенос соц.ссылок в footer =================*/
let rowFooterSocial = document.querySelector('.row-footer__social').closest('.footer__row');
let footerColumnLast = document.querySelector('.footer__column_last');
let footerSectionRow = document.querySelector('.footer__section_row');

changePlaceSoc();

window.addEventListener('resize', function () {
	footerSectionRow.append(rowFooterSocial);
	changePlaceSoc();
});

function changePlaceSoc() {
	if (wrapper.offsetWidth <= 540) {
		footerColumnLast.after(rowFooterSocial);
	}
}
/*================================================================*/