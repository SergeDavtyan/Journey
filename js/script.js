$(window).ready(function(){

	$( function() {
    	$( "#inputCheckIn,#inputCheckIn2" ).datepicker();
  	});

  	$('.tm-slideshow').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(window).on('scroll',function(){
    	if($(window).scrollTop() > 100){
    		$('nav').addClass('navheight');
    	}else{
    		$('nav').removeClass('navheight');
    	}
    })
})

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var line = document.querySelectorAll('.line');

hamburger.addEventListener('click', function(){
	navLinks.classList.toggle('open');
	line.forEach(link =>{
		link.classList.toggle('ppg');
	})
});



var namerica = document.querySelector('#namerica');
var samerica = document.querySelector('#samerica');
var europe = document.querySelector('#europe');
var asia = document.querySelector('#asia');
var africa = document.querySelector('#africa');
var australia = document.querySelector('#australia');
var t1 = document.querySelector('#t1');
var t2 = document.querySelector('#t2');
var t3 = document.querySelector('#t3');
var t4 = document.querySelector('#t4');
var t5 = document.querySelector('#t5');
var t6 = document.querySelector('#t6');



namerica.onclick = function(){
	t1.style.display = 'none';
	t2.style.display = 'block';
	t3.style.display = 'none';
	t4.style.display = 'none';
	t5.style.display = 'none';
	t6.style.display = 'none';
};
samerica.onclick = function(){
	t1.style.display = 'none';
	t2.style.display = 'none';
	t3.style.display = 'block';
	t4.style.display = 'none';
	t5.style.display = 'none';
	t6.style.display = 'none';
};
europe.onclick = function(){
	t1.style.display = 'block';
	t2.style.display = 'none';
	t3.style.display = 'none';
	t4.style.display = 'none';
	t5.style.display = 'none';
	t6.style.display = 'none';
};
asia.onclick = function(){
	t1.style.display = 'none';
	t2.style.display = 'none';
	t3.style.display = 'none';
	t4.style.display = 'block';
	t5.style.display = 'none';
	t6.style.display = 'none';
};
africa.onclick = function(){
	t1.style.display = 'none';
	t2.style.display = 'none';
	t3.style.display = 'none';
	t4.style.display = 'none';
	t5.style.display = 'block';
	t6.style.display = 'none';
};
australia.onclick = function(){
	t1.style.display = 'none';
	t2.style.display = 'none';
	t3.style.display = 'none';
	t4.style.display = 'none';
	t5.style.display = 'none';
	t6.style.display = 'block';
};


var country = document.querySelector('#countrys').children;
for(var i=0; i<country.length; i++){
	country[i].addEventListener('click', mycountry);
}

function mycountry(){
	for(var i=0; i<country.length; i++){
		country[i].classList.remove('red');
	}
	this.classList.add('red');
}


var home = document.getElementById('ffg');
var topDes = document.getElementById('ffg1');
var recPlace = document.getElementById('ffg2');
var contact = document.getElementById('ffg3');

window.onscroll = function(){
	if(window.pageYOffset < 1000){
		home.classList.add('navcolor')
		topDes.classList.remove('navcolor')
	}
	if(window.pageYOffset >= 1000){
		home.classList.remove('navcolor')
		topDes.classList.add('navcolor')
		recPlace.classList.remove('navcolor')
	}
	if(window.pageYOffset >= 2300){
		topDes.classList.remove('navcolor')
		recPlace.classList.add('navcolor')
		contact.classList.remove('navcolor')
	}
	if(window.pageYOffset >= 3340){
		recPlace.classList.remove('navcolor')
		contact.classList.add('navcolor')
	}
	console.log(window.pageYOffset)
}