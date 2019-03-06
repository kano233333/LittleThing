(function(){
    var Land =window.Land = function(){
        this.image = game.Res.land;
        this.y = 0.75*game.myCanvas.height;
        this.w = 336;
        this.h = 112;
        this.x = 0;
        this.speed = 1;
    }

    Land.prototype.updata = function(){
        this.x-=this.speed;
        if(this.x <= -this.w){
            this.x = 0;
            this.render();
        }
    }

    Land.prototype.render = function(){
        game.ctx.fillStyle = '#DED895';
        game.ctx.fillRect(0,this.y+this.h,game.myCanvas.width,game.myCanvas.height*0.25);
        game.ctx.drawImage(this.image,this.x,this.y);
        game.ctx.drawImage(this.image,this.x+this.w,this.y);
        game.ctx.drawImage(this.image,this.x+this.w*2,this.y);
    }
})();