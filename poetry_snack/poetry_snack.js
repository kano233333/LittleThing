var scoreInner=document.getElementById('score');
var score=0;
scoreInner.innerHTML=score+'';
//-----------------------------gameName(random)--------------------------------
var name="PoetrySnack";
var rand=Math.round(Math.random()*26+97);
var randTimer;
var nameSpan=document.querySelectorAll('#game_name span');
var aaa=document.getElementById('aaa');

document.getElementById('game_start').onmousemove=function(){
    aaa.style.animation='canShow 3s forwards';
};
document.getElementById('game_start').onmouseleave=function(){
    aaa.style.animation='canHidden 1s forwards';
};

function gameName(){
    randTimer=setInterval(shift,20);
}
function shift(){
    for(let i=0;i<nameSpan.length;i++){
        if(nameSpan[i].innerText!==name[i]){
            nameSpan[i].innerText=String.fromCharCode(rand);
            rand=Math.round(Math.random()*25+97);
        }
    }
    if(shiftSuccess()){
        clearInterval(randTimer);
    }
}
function shiftSuccess(){
    var p=1;
    for(let i=0;i<name.length;i++){
        if(name[i]!==nameSpan[i].innerText){
            p=0;
        }
    }
    return p;
}
gameName();
//-----------------------------------------------------------------------------




//----------------------------------start game--------------------------------
var start=document.getElementById('start');
start.onclick= gameStart;
function gameStart(){
    //score
    score=0;
    //parse
    if(flat===0) {
        flat = 1;
        document.getElementsByClassName('continue')[0].className = 'parse';
    }
    // 方向
    direction=3;
    //清除定时器（解决加速）
    clearInterval(runTimer);
    //game over 选项
    document.querySelector('.choice .choice1 div').onclick=function(){
        location.reload();
    };
    document.querySelector('.choice .choice2 div').onclick=function(){
        window.open("about:blank","_self").close();                          //有问题
    };
    //animation
    document.getElementById('game_start').style.animation='hidden 1s forwards';
    document.getElementById('game_start').style.webkitAnimation='hidden 1s forwards';
    document.getElementById('aaa').style.display='none';
    document.getElementById('game_main').style.animation='show 2s forwards';
    document.getElementById('game_main').style.webkitAnimation='show 2s forwards';
    addNode();
    addNode();
    setBody();
    randApple();
    run();
    keyEvent();
}

//startMain
//蛇身
function addNode(){
    var snack=document.querySelector('#snack');
    var node=document.createElement('div');
    node.setAttribute('class','snack snack_body');
    snack.appendChild(node);
}

var snackBody=document.getElementsByClassName('snack_body');
//初始化body
function setBody(){
    //清除多余的snack-body
    var parent=document.getElementById('snack');
    snackBody=document.getElementsByClassName('snack_body');
    for(let i=snackBody.length-1;i>2;i--){
        parent.removeChild(snackBody[i]);
    }
    //定位
    for(let i=2,k=0;i>=0;i--,k++){
        snackBody[k].style.position='absolute';
        snackBody[k].style.top=20+'px';
        snackBody[k].style.left=i*20+'px';
    }
}

//---------------------------------------------run----------------------------------------
var runTimer;
var direction=3;
function run(){
    runTimer=setInterval(directionRun,250);
}

function directionRun(){
    switch(direction){
        case 1:
            shiftRun();
            snackBody[0].style.left=parseInt(snackBody[0].style.left.slice(0,-2))-20+'px';
            break;
        case 2:
            shiftRun();
            snackBody[0].style.top=parseInt(snackBody[0].style.top.slice(0,-2))-20+'px';
            break;
        case 3:
            shiftRun();
            snackBody[0].style.left=parseInt(snackBody[0].style.left.slice(0,-2))+20+'px';
            break;
        case 4:
            shiftRun();
            snackBody[0].style.top=parseInt(snackBody[0].style.top.slice(0,-2))+20+'px';
            break;
    }
    snackDie();
    snackGrow();
}

function keyEvent(){
    document.onkeydown=function(event){
        switch(event.keyCode){
            case 37:
                //不让回头
                if(direction===3){
                    break;
                }
                direction=1;
                break;
            case 38:
                if(direction===4){
                    break;
                }
                direction=2;
                break;
            case 39:
                if(direction===1){
                    break;
                }
                direction=3;
                break;
            case 40:
                if(direction===2){
                    break;
                }
                direction=4;
                break;
        }
        console.log(event.keyCode);
    };

}

function shiftRun(){
    //后面取代前面的位置
    for(let i=snackBody.length-1;i>0;i--){
        snackBody[i].style.left=snackBody[i-1].style.left;
        snackBody[i].style.top=snackBody[i-1].style.top;
    }
}
//--------------------------------------------------------------------------------

//apple
var apple=document.getElementsByClassName('apple');
function randApple(){
    //random坐标
    this.x=document.querySelector('.game_container').clientWidth;
    this.y=document.querySelector('.game_container').clientHeight;
    var randX=Math.floor(Math.floor(Math.random()*Math.floor(x/20)))*20;
    var randY=Math.floor(Math.floor(Math.random()*Math.floor(y/20)))*20;
    for(let i=0;i<apple.length;i++) {
        apple[i].style.display='block';
        randX = Math.floor(Math.floor(Math.random() * Math.floor(x / 20))) * 20;
        randY = Math.floor(Math.floor(Math.random() * Math.floor(y / 20))) * 20;
        while(randX===0||randY===0) {
            randX = Math.floor(Math.floor(Math.random() * Math.floor(x / 20))) * 20;
            randY = Math.floor(Math.floor(Math.random() * Math.floor(y / 20))) * 20;
        }
        apple[i].style.position = 'absolute';
        apple[i].style.left = randX + 'px';
        apple[i].style.top = randY + 'px';
    }
    randWord();
}


function snackDie(){
    var snackHeadTop=parseInt(snackBody[0].style.top);
    var snackHeadLeft=parseInt(snackBody[0].style.left);
    if(snackHeadTop<0||snackHeadTop>y||snackHeadLeft<0||snackHeadLeft>=x){
        overAlert(0);
    }
    for(let i=1;i<apple.length;i++){
        if(snackHeadTop===parseInt(apple[i].style.top) && snackHeadLeft===parseInt(apple[i].style.left)){
            overAlert(1);
        }
    }
}

function snackGrow(){
    var appleTop=parseInt(apple[0].style.top);
    var appleLeft=parseInt(apple[0].style.left);
    var snackHeadTop=parseInt(snackBody[0].style.top);
    var snackHeadLeft=parseInt(snackBody[0].style.left);
    if(snackHeadTop===appleTop && snackHeadLeft===appleLeft){
        score++;
        scoreInner.innerHTML=score+'';
        addNode();
        setAddBody();
        randApple();
    }
}

function setAddBody(){
    snackBody=document.getElementsByClassName('snack_body');
    snackBody[snackBody.length-1].style.position='absolute';
    snackBody[snackBody.length-1].style.top=snackBody[snackBody.length-2].style.top;
    snackBody[snackBody.length-1].style.left=snackBody[snackBody.length-2].style.left;
}


//parse
var flat=1;
document.querySelector('.parse').onclick=function(){
    if(flat){
        document.getElementsByClassName('parse')[0].className='continue';
        clearInterval(runTimer);
        flat=0;
    }else{
        document.getElementsByClassName('continue')[0].className='parse';
        runTimer=setInterval(directionRun,250);
        flat=1;
    }
};
//restart
document.querySelector('.restart').onclick=function(){
    gameStart();
};
//----------------------game over 框框-------------------------------------------------------------
function overAlert(x){
    var over=document.getElementById('game_over');
    var answer=document.querySelector('.answer div');
    var overScore=document.querySelector('.over-score div');
    var cover=document.getElementById('cover');
    var w=window.innerWidth;
    var h=window.innerHeight;
    clearInterval(runTimer);
    over.style.animation='ending 1.5s forwards';
    over.style.webkitAnimation='ending 1.5s forwards';
    if(x) {
        answer.innerHTML = sentence[rand3];
        answer.style.borderBottom='2px solid #ce6741';
    }else{
        answer.innerHTML="是不是傻→_→";
        answer.style.borderBottom='none';
    }
    overScore.innerHTML="得分:"+score;
    cover.style.width=w+'px';
    cover.style.height=h+'px';
}





//------------------------------------------------------------------------------------
var sentence;
var rand3;
var rand2;
function randWord(){
    //apple[1] apple[2]
    var word=['无','羡','忘','机','成','美','星','尘','厌','离'];
    for(let i=1;i<apple.length;i++){
        rand3=Math.floor(Math.random()*word.length);
        apple[i].innerHTML=word[rand3];
    }

    //句子
    sentence=[
        '人生若只如初见',
        '除却巫山不是云',
        '疏影横斜水清浅',
        '雨打梨花深闭门',
        '桃之夭夭，灼灼其华。',
        '吾本落拓人，无为自拘束。'
    ];
    var senInner=document.querySelector('.game_subject div');
    rand3 = Math.floor(Math.random()*sentence.length);
    rand2=Math.floor(Math.random()*sentence[rand3].length);
    senInner.innerHTML=sentence[rand3].substring(0,rand2)+'__'+sentence[rand3].substring(rand2+1);
    //排除 ， 。  （好像。。没用）
    while(sentence[rand3][rand2]==='，'||sentence[rand3][rand2]==='。'){
        rand2=Math.floor(Math.random()*sentence[rand3].length);
    }
    apple[0].innerHTML=sentence[rand3][rand2];
}





