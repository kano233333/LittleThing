var box = document.getElementById('box');
var top;
// var top=document.getBoundingClientRect().top;
// console.log(se);

document.body.onscroll = function() {
    top=document.documentElement.scrollTop;
    console.log(top.scrollY);
    if (parseInt(top.scrollY) > 60) {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}

box.onclick = function() {
	box.style.animation = 'playTop 1.5s forwards';
	setTimeout(function(){
		window.scrollTo(0,0);
		box.style.display='none';
		box.style.animation='';
	},1400);
}