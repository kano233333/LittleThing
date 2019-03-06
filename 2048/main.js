//有两层格子 1.底层背景  2.数字层 变换

var board=[];

$(function(){
    newGame();
    this.score=document.querySelector('body header a');
    console.log(document.getElementsByTagName('p')[0]);
});

function newGame(){
    //初始化棋盘
    // console.log(score);
    init();
    //再随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();

    updateBoardView();
}

function init(){
    for(var i=0;i<4;i++){
        //定义一个二维数组
        board[i]=[];
        for(var j=0;j<4;j++){
            //初始化小格子的值为0
            board[i][j]=0;
            var gridCell=$("#grid-cell-"+i+"-"+j);
            gridCell.css("top",getTop(i,j)+'px');
            gridCell.css("left",getLeft(i,j)+'px');
        }
    }

}

function updateBoardView(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            //向棋盘上增加数字格
            $('#grid-container').append("<div class='number-cell-"+i+"-"+j+"'></div>");
            var numberCell=$(".number-cell-"+i+"-"+j);
            if(board[i][j]===0){
                numberCell.css('width','0px');
                numberCell.css('height','0px');
                numberCell.css('top',getTop(i,j)+50+'px');
                numberCell.css('left',getLeft(i,j)+50+'px');
                numberCell.text('');
            }else{
                numberCell.css('width','100px');
                numberCell.css('height','100px');
                numberCell.css('top',getTop(i,j)+'px');
                numberCell.css('left',getLeft(i,j)+'px');
                numberCell.css('position','absolute');
                numberCell.css('backgroundColor',getNumberBackgroundColor(board[i][j]));
                numberCell.css('color',getNumberColor(board[i][j]));
                numberCell.css('border-radius','6px');
                //字体大小
                if(board[i][j]>100 && board[i][j]<1000){
                    numberCell.css('font-size','40px');
                }else if(board[i][j]>1000 && board[i][j]<10000){
                    numberCell.css('font-size','20px');
                }else{
                    numberCell.css('font-size','60px');
                }
                numberCell.css('font-weight','bold');
                numberCell.css('text-align','center');
                numberCell.css('line-height','90px');
                numberCell.text(board[i][j]);
            }
        }
    }
}

function generateOneNumber(){
    var randX=parseInt(Math.floor(Math.random()*4));
    var randY=parseInt(Math.floor(Math.random()*4));
    var randNumber;

    //2.随机数
    while(true){
        //找到不为0的位置，就出来
        if(board[randX][randY]===0){
            break;
        }
        randX=parseInt(Math.floor(Math.random()*4));
        randY=parseInt(Math.floor(Math.random()*4));
    }
    randNumber=Math.random()<0.5?2:4;

    //3.随机位子上出现随机数
    board[randX][randY]=randNumber;

    showNumberWithAnimation(randX,randY,randNumber);
}