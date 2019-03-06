(function(){
    //背景类
    var Background = window.Background = function(){
        this.image = game.Res.bg_day;
        this.y = 0.75 *game.myCanvas.height - 396;
        this.w = 288;
        this.h = 512;
        this.x = 0;
        this.speed = 1;
    }

    Background.prototype.updata = function(){
        this.x-=this.speed;
        //左边图片到达边界，克隆图片
        if(this.x <= -this.w){
            this.x = 0;
            // game.ctx.drawImage(this.image,this.x,this.y);
            this.render();
        }
    }

    Background.prototype.render = function(){
        //渲染天空矩形
        game.ctx.fillStyle = "#4EC0CA";
        game.ctx.fillRect(0,0,game.myCanvas.width,this.h+10);
        //渲染草丛矩形
        game.ctx.fillStyle = "#5EE270";
        game.ctx.fillRect(0,this.h+this.y,game.myCanvas.width,game.myCanvas.height-this.h-this.y);
        //渲染图片
        game.ctx.drawImage(this.image,this.x,this.y);
        game.ctx.drawImage(this.image,this.x+this.w,this.y);
        game.ctx.drawImage(this.image,this.x+this.w*2,this.y);
    }
})();