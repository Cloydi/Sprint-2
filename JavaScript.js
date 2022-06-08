var modalBtn = document.querySelector('.modal-btn'); 
var modalBtn2 = document.querySelector('.modal-btn2');
var modalBtn3 = document.querySelector('.modal-btn3');
var modalBtn4 = document.querySelector('.modal-btn4');
var modalBtn5 = document.querySelector('.modal-btn5');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');	

modalBtn.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
}); 
modalBtn2.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
}); 
modalBtn3.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
}); 
modalBtn4.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
}); 
modalBtn5.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
}); 
modalClose.addEventListener('click', function(){
	modalBg.classList.remove('bg-active');
}); 
