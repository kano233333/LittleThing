let leftOne=document.getElementById('one');
let leftTwo=document.getElementById('two');
let leftThree=document.getElementById('three');
let left1=function(){
    this.style.backgroundColor="#DDDEDD";
};
let left2=function(){
    this.style.backgroundColor="#fff";
};
leftOne.onmousemove=left1;
leftTwo.onmousemove=left1;
leftThree.onmousemove=left1;

leftOne.onmouseout=left2;
leftTwo.onmouseout=left2;
leftThree.onmouseout=left2;

let rightLi=document.getElementsByClassName('rightBottom')[0].getElementsByTagName('li');

rightLi[0].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="6.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[1].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="7.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[2].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="8.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[3].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="9.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[4].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="10.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[5].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="6.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[6].onmousemove=function(){
    document.getElementsByClassName('Img')[0].getElementsByTagName('img')[0].src="7.png";
    document.getElementsByClassName('Img')[0].style.display='block';
};

rightLi[0].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};
rightLi[1].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};
rightLi[2].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};
rightLi[3].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};
rightLi[4].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};
rightLi[5].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};
rightLi[6].onmouseout=function(){
    document.getElementsByClassName('Img')[0].style.display='none';
};