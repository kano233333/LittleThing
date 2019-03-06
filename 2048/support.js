function getTop(i,j){
    return 20+i*120;
}
function getLeft(i,j){
    return 20+j*120;
}

function getNumberBackgroundColor(x){
    switch(x){
        case 2:return "#eee4da";
        case 4:return "#ede0c8";
        case 8:return "#f2b179";
        case 16:return "#f59563";
        case 32:return "#f67c5f";
        case 64:return "#f65e3b";
        case 128:return "#ede945";
        case 256:return "#f9f3a6";
        case 512:return "#9c0";
        case 1024:return "#33b5e5";
        case 2048:return "#09c";
        case 4096:return "#a6c";
        case 8192:return "#93c";
    }
}

function getNumberColor(x){
    if(x<=4){
        return "#776e65";
    }
    return "#fff";
}

function canMoveLeft(board){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]===0){
                if(board[i][j-1]===0||board[i][j-1]===board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}


function noBlockHorizontalCol(row,col1,col2,board){
    for(let i=col1+1;i<col2;i++){
        if(board[row][i]!==0){
            return false;
        }
    }
    return true;
}