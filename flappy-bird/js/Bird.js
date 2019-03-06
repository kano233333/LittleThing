(function(){
    var Bird = window.Bird =function(){
        //随机鸟的颜色
        this.color = parseInt(Math.random()*3);
        this.imageArr = [
            game.Res["bird"+this.color+"_0"],
            game.Res["bird"+this.color+"_1"],
            game.Res["bird"+this.color+"_2"]
        ];
        //翅膀
        this.wing = 0;
        this.speed = 0.1;
        this.x = game.myCanvas.width/2*(1-0.618);
        this.y = 100;
        this.fno = 0;
        this.d = 0;
        this.hasEnergy = false;
    }

    Bird.prototype.updata = function(){
        if(game.fno%8 == 0){
            this.wing++;
            if(this.wing>=3){
                this.wing = 0;
            }
        }

        if(!this.hasEnergy){
            if(this.y<=game.myCanvas.height*0.75-26){
                this.y += this.fno*0.4;
            }
        } else {
            this.y -= (20-this.fno*0.4)*2.5;
            this.d = -0.2;
            this.fno = 0;
            this.hasEnergy = false;
        }
        this.fno++;
        this.d+=0.03;
    };

    Bird.prototype.render = function(){
        game.ctx.save();
        game.ctx.translate(this.x,this.y);
        game.ctx.rotate(this.d);
        game.ctx.drawImage(this.imageArr[this.wing],-24,-24);
        game.ctx.restore();
    };

    Bird.prototype.fly = function(){
        this.hasEnergy = true;
    }
})();