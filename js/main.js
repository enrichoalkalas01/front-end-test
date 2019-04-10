$('.btn-collapse').on('click', function(e) {
	$('.collapse').toggleClass("active"); 
	e.preventDefault();
});

$('.klik-disini').on('click',function(e) {
	window.location.replace("index.html");
	e.preventDefault();
});

$('nav ul li:nth-child(1)').on('click',function(e) {
	window.location.replace("index.html");
	e.preventDefault();
});

$('nav ul li:nth-child(2)').on('click',function(e) {
	window.location.replace("index.html");
	e.preventDefault();
});

$('nav ul li:nth-child(3)').on('click',function(e) {
	window.location.replace("index.html");
	e.preventDefault();
});

$('nav ul li:nth-child(4)').on('click',function(e) {
	window.location.replace("index.html");
	e.preventDefault();
});

$('nav ul li:nth-child(5)').on('click',function(e) {
	window.location.replace("index.html");
	e.preventDefault();
});

const overlay = document.querySelectorAll('.overlay');
console.log(overlay);

var day1 = "sabtu";
var day2 = "minggu";
var jam = "10.00";

var image1 = new Image(300, 300);
image1.src = 'img/overlay.png';
var image2 = new Image(300, 300);
image2.src = 'img/overlay-tutup.png'

const overlay1 = document.querySelector('.overlay1');
const overlay2 = document.querySelector('.overlay2');
const overlay3 = document.querySelector('.overlay3');
const overlay4 = document.querySelector('.overlay4');
if ( day1 == "sabtu" && day2 == "minggu" ) {
	if ( jam == "10.00") {	
		overlay1.appendChild(image1);
		overlay2.appendChild(image2);
	}
} else {
	if ( jam == "10.00") {	
		overlay3.appendChild(image1);
		overlay4.appendChild(image2);
	}
}


