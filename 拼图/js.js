var box=document.getElementsByClassName('box');
var container=document.getElementById('container');
var empty=0;
var clone=box[empty].cloneNode(true);

function init(){
    var rand;
    for(let i=0;i<box.length;i++){
        // box[i].style.top=box[0].offsetHeight*(Math.floor(i/3)*1.02)+'px';
        // box[i].style.left=box[0].offsetWidth*(i%3*1.02)+'px';
        if(i!==0) {
            rand = Math.ceil(Math.random() * (box.length - 1));
            while (box[rand].getElementsByTagName('p')[0].innerText !== '' || rand === -1) {
                rand = Math.ceil(Math.random() * (box.length - 1));
            }
            box[rand].getElementsByTagName('p')[0].innerText = i;
        }
    }
}
init();
// console.log(box[0].offsetHeight);
function exchange(){
    document.onkeydown=function(event){
        switch(event.keyCode){
            case 37:
                if(empty%3!==0) {
                    changeAnimation(empty - 1);
                }
                break;
            case 38:
                changeAnimation(empty-3);
                break;
            case 39:
                if(empty%3!==2) {
                    changeAnimation(empty + 1);
                }
                break;
            case 40:
                changeAnimation(empty+3);
                break;
        }
        console.log(empty);
    };
}
exchange();

function changeAnimation(x){
    if(x>=0 && x<9) {
        let tarClone=box[x].cloneNode(true);
        container.insertBefore(tarClone,box[empty]);
        container.removeChild(box[empty+1]);
        container.insertBefore(clone, box[x]);
        container.removeChild(box[x+1]);
        empty = x;
    }
}