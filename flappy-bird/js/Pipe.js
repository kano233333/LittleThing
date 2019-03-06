(function(){
    var Pipe = window.Pipe = function(){
        this.imageUp = game.Res.pipe_up;
        this.imageDown = game.Res.pipe_down;
        this.downH = (Math.random() + 0.3) * 320;
        while(this.downH>320) {
            this.downH = (Math.random() + 0.3) * 320;
        }
        this.x = game.myCanvas.width;
        this.w = 150;
        game.pipeArr.push(this);
        this.speed = 1;
    }

    Pipe.prototype.updata = function(){
        this.x-=this.speed;
    }

    Pipe.prototype.render = function(){
        game.ctx.drawImage(this.imageDown,this.x,-320+this.downH);
        game.ctx.drawImage(this.imageUp,this.x,this.downH+120);
    }
})();