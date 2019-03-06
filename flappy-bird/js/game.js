
function Game(params){
    this.myCanvas = document.getElementById(params.id);
    this.ctx = this.myCanvas.getContext('2d');
    this.Rjsonurl = params.Rjsonurl;
    this.fno = 0;
    this.init();
    var self = this;
    //传入回掉函数
    this.loadAllResource(function(){
        self.start();
        self.clickEvent();
    });
}

Game.prototype.init = function(){
    var windowW = document.documentElement.clientWidth;
    var windowH = document.documentElement.clientHeight;
    if(windowW > 414){
        windowW = 414;
    }else if(windowW <320 ){
        windowW = 320;
    }
    if(windowH > 650){
        windowH = 650;
    }else if(windowH < 500){
        windowH = 500;
    }
    this.myCanvas.width = windowW;
    this.myCanvas.height = windowH;
}

Game.prototype.loadAllResource = function(callback){
    this.Res = {};
    var self = this;
    var alreadyDoneNumber = 0;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var Robj =JSON.parse(xhr.responseText);
            for(var i =0 ; i<Robj.images.length;i++){
                self.Res[Robj.images[i].name] = new Image();
                self.Res[Robj.images[i].name].src = Robj.images[i].url;
                self.Res[Robj.images[i].name].onload = function(){
                    alreadyDoneNumber++;
                    self.ctx.clearRect(0,0,self.myCanvas.width,self.myCanvas.height);
                    var txt = "正在加载"+alreadyDoneNumber+"/"+Robj.images.length+"张";
                    self.ctx.textAlign = "center";
                    self.ctx.font = '25px Arial';
                    self.ctx.fillText(txt,self.myCanvas.width/2,self.myCanvas.height/2);
                    if(alreadyDoneNumber === Robj.images.length){
                        callback.call(self);
                    }
                }
            }
        }
    }
    xhr.open('get',this.Rjsonurl,true);
    xhr.send(null);
}

Game.prototype.start = function(){
    this.pipeArr = [];
    this.background = new Background();
    this.Land = new Land();
    this.bird = new Bird();
    var self = this;
    this.timer = setInterval(function(){
        self.ctx.clearRect(0,0,self.myCanvas.width,self.myCanvas.height);

        //渲染背景
        self.background.render();
        self.background.updata();

        //渲染管子
        if(self.fno%150===0){
            new Pipe();
        }
        for(var i=0;i<self.pipeArr.length;i++){
            self.pipeArr[i].render();
            self.pipeArr[i].updata();
        }

        //渲染大地
        self.Land.render();
        self.Land.updata();

        //渲染小鸟
        self.bird.render();
        self.bird.updata();

        //打印帧编号
        self.fno++;
        self.ctx.font = '16px Arial';
        self.ctx.textAlign = 'left';
        self.ctx.fillText("FNO:" + self.fno,10,20);
    },20)
}

Game.prototype.clickEvent = function(){
    var self = this;
    this.myCanvas.onclick  = function(){
        self.bird.fly();
    }
}