function init(){
    var rand;
    var box=document.querySelectorAll('#main div');
    for(let i=0;i<5;i++){
        rand=Math.ceil(Math.random()*4);
        box[i*4+rand-1].style.backgroundColor='#000';
        box[i*4+rand-1].onclick=function() {
            this.style.backgroundColor="#fff";
        }
    }
}
init();


var timer;
var bottom=0;
var divNode;
function run(){
    var rand;
    bottom-=1;
    document.getElementById('main').style.bottom=bottom+'px';
    var box=document.querySelectorAll('#main div');
    if(bottom===-140){
        bottom=0;
        rand=Math.ceil(Math.random()*4);
        for(let i=box.length-1;i>box.length-5;i--) {
            divNode=document.createElement('div');
            if(i-16===rand-1){
                divNode.style.backgroundColor='#000';
                divNode.onclick=function() {
                    this.style.backgroundColor="#fff";
                }
            }
            document.getElementById('main').insertBefore(divNode,box[0]);
            document.getElementById('main').removeChild(box[i]);
        }
    }
}
timer=setInterval(run,1);

function banClick(){

}