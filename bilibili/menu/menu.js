let column=document.getElementsByClassName('column');
let cartoonMenu0=document.getElementsByClassName('cartoonMenu0');
let cartoonMenu=document.getElementsByClassName('cartoonMenu');

let fan0=document.getElementsByClassName('fan0');
let create0=document.getElementsByClassName('create0');
let music0=document.getElementsByClassName('music0');
let dance0=document.getElementsByClassName('dance0');
let game0=document.getElementsByClassName('game0');
let science0=document.getElementsByClassName('science0');




let rightShow=function(){
    this.getElementsByClassName('right')[0].style.display='block';
    this.style.animation="rightMove 0.5s forwards";
};
let rightHidden=function(){
    this.getElementsByClassName('right')[0].style.display='none';
    this.style.animation="rightOut 0.5s forwards";
};

// let columnMove=function(x){
//     document.getElementsByClassName(x)[0].style.display='block';
// };
// let columnOut=function(x){
//     document.getElementsByClassName(x)[0].style.display='none';
// };

function columnMove(x){
    document.getElementsByClassName(x)[0].style.display='block';
}
function columnOut(x){
    document.getElementsByClassName(x)[0].style.display='none';
}

// column[0].onmousemove=columnMove('cartoonMenu');
// column[0].onmouseout=columnOut('cartoonMenu');

// column[1].onmousemove=columnMove('fan');
// column[1].onmouseout=columnOut('fan');

// cartoonMenu[0].onmousemove=columnMove;
// cartoonMenu[0].onmouseout=columnOut;




for(let i=0;i<cartoonMenu0.length;i++){
    cartoonMenu0[i].addEventListener('mousemove',rightShow);
    cartoonMenu0[i].addEventListener('mouseout',rightHidden);
}
for(let i=0;i<fan0.length;i++){
    fan0[i].addEventListener('mousemove',rightShow);
    fan0[i].addEventListener('mouseout',rightHidden);
}
for(let i=0;i<music0.length;i++){
    music0[i].addEventListener('mousemove',rightShow);
    music0[i].addEventListener('mouseout',rightHidden);
}
for(let i=0;i<dance0.length;i++){
    dance0[i].addEventListener('mousemove',rightShow);
    dance0[i].addEventListener('mouseout',rightHidden);
}
for(let i=0;i<create0.length;i++){
    create0[i].addEventListener('mousemove',rightShow);
    create0[i].addEventListener('mouseout',rightHidden);
}
for(let i=0;i<game0.length;i++){
    game0[i].addEventListener('mousemove',rightShow);
    game0[i].addEventListener('mouseout',rightHidden);
}
for(let i=0;i<science0.length;i++){
    science0[i].addEventListener('mousemove',rightShow);
    science0[i].addEventListener('mouseout',rightHidden);
}
