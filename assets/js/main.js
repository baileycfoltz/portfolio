/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
// i'm sorry in advance for this typewriter code im too lazy the figure how to make one typewriter code that actually continues going
// i promise to fix it at some point

var i1 = 0; var i2 = 0; var i3 = 0; var i4 = 0; var i5 = 0; var i6 = 0; var i7 = 0; var i8 = 0;
var i2d = 0; var i5d = 0; var i6d = 0; var i7d = 0; var i8d = 0;
var msg1 = "mostly paintings, but also other traditional art mediums";
var msg2 = "every day, for 100 days, i made a zine";
var msg3 = "inspired by my filipino american heritage";
var msg4 = "digital labels for Three Streams Brewery";
var msg5 = "AR app based around different tree frogs";
var msg6 = "romantic quote resource";
var msg7 = "an interactive music-making experience";
var msg8 = "AR project about sharing information on the internet";

var a1 = 0; var a2 = 0;
var msga1 = "hello! i'm bailey";
var msga2 = "contact me:";

var date1 = "[ 2019 ]";
var date2 = "[ 2020 ]";
var date3 = "[ 2021 ]";
var date4 = "[ 2022 ]";


function typeWritera() {
	if (a1 < msga1.length) {
	  document.getElementById("demoa1").innerHTML += msga1.charAt(a1);
	  a1++;
	  setTimeout(typeWritera, 100);
	}}

function typeWriter1() {
  if (i1 < msg1.length) {
    document.getElementById("demo1").innerHTML += msg1.charAt(i1);
    i1++;
    setTimeout(typeWriter1, 50);
  }}

function typeWriter2() {
if (i2 < msg2.length) {
	document.getElementById("demo2").innerHTML += msg2.charAt(i2);
	i2++;
	setTimeout(typeWriter2, 50);
} else if (i2d < date3.length) {
	document.getElementById("demo2d").innerHTML += date3.charAt(i2d);
	i2d++;
	setTimeout(typeWriter2, 50);
}}

function typeWriter3() {
if (i3 < msg3.length) {
	document.getElementById("demo3").innerHTML += msg3.charAt(i3);
	i3++;
	setTimeout(typeWriter3, 50);
}}

function typeWriter4() {
if (i4 < msg4.length) {
	document.getElementById("demo4").innerHTML += msg4.charAt(i4);
	i4++;
	setTimeout(typeWriter4, 50);
}}

function typeWriter5() {
	if (i5 < msg5.length) {
		document.getElementById("demo5").innerHTML += msg5.charAt(i5);
		i5++;
		setTimeout(typeWriter5, 50);
	} else if (i5d < date4.length) {
		document.getElementById("demo5d").innerHTML += date4.charAt(i5d);
		i5d++;
		setTimeout(typeWriter5, 50);
	}}

function typeWriter6() {
	if (i6 < msg6.length) {
		document.getElementById("demo6").innerHTML += msg6.charAt(i6);
		i6++;
		setTimeout(typeWriter6, 50);
	} else if (i6d < date3.length) {
		document.getElementById("demo6d").innerHTML += date3.charAt(i6d);
		i6d++;
		setTimeout(typeWriter6, 50);
	}}

function typeWriter7() {
	if (i7 < msg7.length) {
		document.getElementById("demo7").innerHTML += msg7.charAt(i7);
		i7++;
		setTimeout(typeWriter7, 50);
	} else if (i7d < date2.length) {
		document.getElementById("demo7d").innerHTML += date2.charAt(i7d);
		i7d++;
		setTimeout(typeWriter7, 50);
	}}

function typeWriter8() {
	if (i8 < msg8.length) {
		document.getElementById("demo8").innerHTML += msg8.charAt(i8);
		i8++;
		setTimeout(typeWriter8, 50);
	} else if (i8d < date1.length) {
		document.getElementById("demo8d").innerHTML += date1.charAt(i8d);
		i8d++;
		setTimeout(typeWriter8, 50);
	}}


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

// from https://codepen.io/sinanelms/pen/oPRmzE

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});