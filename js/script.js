//burger
$(document).ready(function() {
	$('.nav__burger').click(function(event) {
		$('.nav__burger,.nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('a').click(function(event) {
		$('.nav__burger,.nav__menu').removeClass('active');
		$('body').toggleClass('lock');
	});
});

//class for fullscreen
function ibg(){

	let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
			}
		}
	
	ibg();



//Slider
let slideIndex = 1,
	slides = document.querySelectorAll('.slider__item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider__dots'),
	dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {

if (n > slides.length) {
	 slideIndex = 1;
}
if (n < 1) {
	 slideIndex = slides.length;
}

slides.forEach((item) => item.style.display = 'none');
//  for (let i = 0; i < slides.length; i++) {
//      slides[i].style.display = 'none';
//  }
dots.forEach((item) => item.classList.remove('dot-active'));

slides[slideIndex - 1].style = 'block';
dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
plusSlides(-1);
});

next.addEventListener('click', function() {
plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
for (let i = 0; i < dots.length + 1; i++) {
	 if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
		  currentSlide(i);
	 }
}
});



/// scroll 
$(document).ready(function(){
	$('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
	});
	return false;
});

//popup
$(document).ready(function(){
	$('.call').on("click", function(){
		 $('.overlay').show();
	});

	$('.popup__close').on("click", function(){
		 $('.overlay').hide();
	});
});
//-----------------
$(document).ready(function(){
	$('.thank').on("click", function(){
		 $('.thanks__popup').show();
	});

	$('.thanks__close').on("click", function(){
		 $('.thanks__popup').hide();
	});
});
//-----------------
$(document).ready(function(){
	$('.sale').on("click", function(){
		 $('.orders').show();
	});

	$('.order__close').on("click", function(){
		 $('.orders').hide();
	});
});
