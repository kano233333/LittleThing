var menu=document.querySelectorAll('#ge li');
var xiaMenu=document.getElementsByClassName('xiaMenu');
var menuLeft=[];

for(let i=0;i<menu.length;i++){
    menu[i].onmouseenter=function(){
        menuShow();
    }
}

function menuShow(){
    for(let i=1;i<menu.length;i++){
        menuLeft.push(menu[i].getBoundingClientRect().x);
    }
}
menuShow();
for(let i=1;i<menu.length;i++) {
    menu[i].onmouseenter = function () {
        xiaMenu[i-1].style.display = 'block';
        xiaMenu[i-1].style.left = menuLeft[i-1] + "px";
    }
    menu[i].onmouseleave=function(){
        document.getElementsByClassName('xiaMenu')[i-1].style.display='none';
    }
    xiaMenu[i-1].onmouseenter=function(){
        this.style.display='block';
    }
    xiaMenu[i-1].onmouseleave=function(){
        this.style.display='none';
    }
}



var paging=document.getElementsByClassName('paging')[0];
var container=document.getElementsByClassName('caiImg1')[0];
var left=document.getElementsByClassName('arronLeft')[0];
var right=document.getElementsByClassName('arronRight')[0];
var page=document.getElementsByClassName('page');
var img=document.getElementsByClassName('images')[0];
var i=0;
var timer;

//球的颜色
function pageShift(){
    for(let n=0;n<page.length;n++){   //清空全部球的 background-color
        page[n].style.backgroundColor='';
    }
    page[i].style.backgroundColor="#ECEEEA";   //指定球
}

container.onmousemove=function(){  //鼠标移入
    // left.style.display='block';
    // right.style.display='block';
    clearTimeout(timer);
};
container.onmouseout=function(){   //鼠标移出
    // left.style.display='none';
    // right.style.display='none';
    timer=setInterval(time,1500);
};
paging.onmousemove=function(){
    clearTimeout(timer);
};
paging.onmouseout=function(){
    timer=setInterval(time,1500);
};


page[0].style.backgroundColor="#ECEEEA";
function shift(){
    timer=setInterval(time,1500);
}
shift();

function time(){
    i++;
    if(i===5){
        i=0;
    }
    img.style.transform="translate("+(-990*i)+"px";
    pageShift();
}
//page小圆球（自动）
for(let k=0;k<page.length;k++){
    page[k].onclick=function(){
        img.style.transform="translate("+-990*k+"px)";
        i=k;
        pageShift();
    }
}

//左翻
// left.onclick=function(){
//     i--;
//     if(i===-1){
//         i=4;
//     }
//     img.style.transform="translate("+-990*i+"px)";
//     pageShift();
// };
//
// //右翻
// right.onclick=function(){
//         i++;
//         if(i===5){
//             i=0;
//         }
//         img.style.transform="translate("+-990*i+"px)";
//         pageShift();
//     }
