var allScore=0;
$(document).keydown(function(event){   //event
    switch(event.keyCode){
        case 37: //left
            addLeft();   //先让满足条件的数字相加
            moveLeft();  //再进行移动
            break;
        case 38:  //up
            addUp();
            moveUp();
            break;
        case 39:  //right
            addRight();
            moveRight();
            break;
        case 40: //down
            addDown();
            moveDown();
            break;
        default:
            break;
    }
    generateOneNumber();
    updateBoardView();
    score.innerHTML=allScore.toString();                               //显示不出
    console.log(allScore);
    console.log(score);
    isGameOver();
});


function showMoveAnimation(fromX,fromY,toX,toY){
    var numberCell=$('#number-cell-'+fromX+'-'+fromY);
    numberCell.animate({
        top:getTop(toX,toY),
        left:getLeft(toX,toY)
    },200);
}


function isGameOver(){
    var p=1;
    var q=1;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]===0){
                p=0;
            }
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]===board[i][j+1] || board[i][j]===board[i+1][j]){
                q=0;
            }
        }
    }
    if(p && q){
        alert('game over');
        newGame();
    }
}

//move 判断方向上（从前往后），前面如果有为空的位置，让后面有的数字到前面来
function moveLeft(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]===0){   //判断前面的是否为空
                for(let k=j;k<4;k++){
                    if(board[i][k]!==0){  //后面不为空的
                        board[i][j]=board[i][k];   //提到前面来
                        board[i][k]=0;
                        break;   //每一个前面的位子只能供后面一个使用，用完break
                    }
                }
            }
        }
    }
}

function moveUp(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[j][i]===0){
                for(let k=j;k<4;k++){
                    if(board[k][i]!==0){
                        board[j][i]=board[k][i];
                        board[k][i]=0;
                        break;
                    }
                }
            }
        }
    }
}

function moveDown(){
    for(let i=3;i>0;i--){
        for(let j=0;j<4;j++){
            if(board[i][j]===0){
                for(let k=i-1;k>=0;k--){
                    if(board[k][j]!==0){
                        board[i][j]=board[k][j];
                        board[k][j]=0;
                        break;
                    }
                }
            }
        }
    }
}

function moveRight(){
    for(let i=0;i<4;i++){
        for(let j=3;j>=0;j--){
            if(board[i][j]===0){
                for(let k=j;k>=0;k--){
                    if(board[i][k]!==0){
                        board[i][j]=board[i][k];
                        board[i][k]=0;
                        break;
                    }
                }
            }
        }
    }
}


function addLeft(){
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
            for(let k=j+1;k<4;k++){
                if(board[i][k]!==0) {
                    if(board[i][k]!==0 && board[i][j]!==board[i][k]){
                        break;
                        //排除中间插着的情况（sp：2420 左键 不能让两个2相加）
                    }
                    if (board[i][j] === board[i][k]) {  //相同的相加
                        board[i][j] += board[i][k];
                        allScore+=board[i][j]*2;
                        board[i][k] = 0;
                        break;  //只能相加一次
                    }
                }
            }
        }
    }
}
function addUp(){
    for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            for(let k=i+1;k<4;k++){
                if(board[i][j]!==0) {
                    if(board[k][j]!==0 && board[i][j]!==board[k][j]){
                        break;
                    }
                    if (board[i][j] === board[k][j]) {
                        board[i][j] += board[k][j];
                        allScore+=board[i][j]*2;
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}
function addRight(){
    for(let i=0;i<4;i++){
        for(let j=3;j>0;j--){
            for(let k=j-1;k>=0;k--){
                if(board[i][j]!==0) {
                    if(board[i][k]!==0 && board[i][j]!==board[i][k]){
                        break;
                    }
                    if (board[i][j] === board[i][k]) {
                        board[i][j] += board[i][k];
                        allScore+=board[i][j]*2;
                        board[i][k] = 0;
                        break;
                    }
                }
            }
        }
    }
}
function addDown(){
    for(let i=3;i>0;i--){
        for(let j=0;j<4;j++){
            for(let k=i-1;k>=0;k--){
                if(board[i][j]!==0) {
                    if(board[k][j]!==0 && board[i][j]!==board[k][j]){
                        break;
                    }
                    if (board[i][j] === board[k][j]) {
                        board[i][j] += board[k][j];
                        allScore+=board[i][j]*2;
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}