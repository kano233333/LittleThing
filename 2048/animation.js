function showNumberWithAnimation(randX,randY,randNumber){
    //获取当前数字格
    var numberCell=$('#number-cell-'+randX+'-'+randY);
    //设置当前数字格样式
    numberCell.css("backgroundColor",getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);
    //显示动画
    numberCell.animate({
        width:'100px',
        height:'100px',
        top:getTop(randX,randY),
        left:getLeft(randX,randY)
    },50);
}