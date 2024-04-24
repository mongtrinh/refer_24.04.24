let btnCall = document.querySelector('.btnCall');
let menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', (e) => {
	//e쓰는거 빠뜨리지 마세요

	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
});
